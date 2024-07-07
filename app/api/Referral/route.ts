import { transporter } from "@/config/nodemailer";
import prismadb from "@/middleware/prismadb";
import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { referredById } = body;

        const referralCode = await prismadb.user.findUnique({
            where: {
                referralCode: referredById,
            },
        })

        return NextResponse.json({ referralCode });
    } catch (error) {
        return new NextResponse("Internal server error", { status: 500 });
    }
}