import { transporter } from "@/config/nodemailer";
import prismadb from "@/middleware/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, password } = body;

        const user = await prismadb.user.findUnique({
            where:{
                email: email,
                password
            }
        })

        return NextResponse.json({ user });
    } catch (error) {
        return new NextResponse("Internal server error", { status: 500 });
    }
}
