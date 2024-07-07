import { transporter } from "@/config/nodemailer";
import prismadb from "@/middleware/prismadb";
import axios from "axios";
import { NextResponse } from "next/server";

function generateReferralCode(): string {
    return Math.random().toString(36).substring(2, 15);
}

async function getUniqueReferralCode() {
    let isUnique = false;
    let newReferralCode = "";

    while (!isUnique) {
        newReferralCode = generateReferralCode();

        const existingUser = await prismadb.user.findUnique({
            where: {
                referralCode: newReferralCode,
            },
        });

        if (!existingUser) {
            isUnique = true;
        }
    }

    return newReferralCode;
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, fullName, password, referredById } = body;

        const user = await prismadb.user.findUnique({
            where: {
                email
            }
        })

        if(user){
            return NextResponse.json({message:"User already exists",status:400})
        }

        // Validate referredById if provided
        let referringUser = null;
        if (referredById) {
            referringUser = await prismadb.user.findUnique({
                where: {
                    referralCode: referredById,
                },
            });

            if (!referringUser) {
                return new NextResponse("Invalid referral code", { status: 400 });
            }
        }

        const newReferralCode = await getUniqueReferralCode();

        const newUser = await prismadb.user.create({
            data: {
                email,
                fullName,
                password,
                referralCode: newReferralCode,
                referredById: referringUser?.id || null,
            },
        });

        if (newUser) {
            // Send welcome email to new user with referral link
            const referralLink = `https://yourdomain.com/SignUp?ref=${newReferralCode}`;

            await transporter.sendMail({
                from: process.env.GMAIL_USER,
                to: email,
                subject: "Sign in successful",
                html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Sign in Successful</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            background-color: #f4f4f4;
                            margin: 0;
                            padding: 0;
                        }
                        .container {
                            max-width: 600px;
                            margin: 0 auto;
                            background-color: #ffffff;
                            padding: 20px;
                            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                        }
                        .header {
                            text-align: center;
                            padding: 10px 0;
                        }
                        .header svg {
                            width: 50px;
                            height: 50px;
                        }
                        .content {
                            text-align: center;
                        }
                        .content h1 {
                            color: #333;
                        }
                        .content p {
                            color: #666;
                        }
                        .footer {
                            text-align: center;
                            padding: 10px 0;
                            color: #999;
                        }
                        .referral-code {
                            font-size: 1.2em;
                            font-weight: bold;
                            color: #007bff;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                        </div>
                        <div class="content">
                            <h1>Welcome to Accredian, ${fullName}!</h1>
                            <p>We are excited to have you on board. Your sign in was successful.</p>
                            <p>Your referral code is: <span class="referral-code">${newReferralCode}</span></p>
                            <p>Share this code with your friends and help them join Accredian.</p>
                            <p>Sign up using your referral code: <a href="${referralLink}">${referralLink}</a></p>
                            <p>Feel free to explore our services and let us know if you have any questions.</p>
                        </div>
                        <div class="footer">
                            <p>&copy; 2024 Accredian. All rights reserved.</p>
                        </div>
                    </div>
                </body>
                </html>
                `
            });

            // Send notification email to referring user
            if (referringUser) {
                await transporter.sendMail({
                    from: process.env.GMAIL_USER,
                    to: referringUser.email,
                    subject: "Referral Success",
                    html: `
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Referral Success</title>
                        <style>
                            body {
                                font-family: Arial, sans-serif;
                                background-color: #f4f4f4;
                                margin: 0;
                                padding: 0;
                            }
                            .container {
                                max-width: 600px;
                                margin: 0 auto;
                                background-color: #ffffff;
                                padding: 20px;
                                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                            }
                            .header {
                                text-align: center;
                                padding: 10px 0;
                            }
                            .header svg {
                                width: 50px;
                                height: 50px;
                            }
                            .content {
                                text-align: center;
                            }
                            .content h1 {
                                color: #333;
                            }
                            .content p {
                                color: #666;
                            }
                            .footer {
                                text-align: center;
                                padding: 10px 0;
                                color: #999;
                            }
                            .referral-code {
                                font-size: 1.2em;
                                font-weight: bold;
                                color: #007bff;
                            }
                        </style>
                    </head>
                    <body>
                        <div class="container">
                            <div class="header">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </div>
                            <div class="content">
                                <h1>Congratulations, ${referringUser.fullName}!</h1>
                                <p>Your friend ${fullName} has joined Accredian using your referral code.</p>
                                <p>Thank you for referring ${fullName} to our platform.</p>
                            </div>
                            <div class="footer">
                                <p>&copy; 2024 Accredian. All rights reserved.</p>
                            </div>
                        </div>
                    </body>
                    </html>
                    `
                });
            }
        }

        return NextResponse.json({ newUser });
    } catch (error) {
        console.log(error)
        return new NextResponse("Internal server error", { status: 500 });
    }
}
