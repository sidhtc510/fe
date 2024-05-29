import connectMongoDB from "@/app/libs/mongodb";
import User from "@/app/models/user";
import { NextResponse } from "next/server";

export async function GET() {
    await connectMongoDB();
    const users = await User.find().sort({ 'updatedAt': -1 });
    return NextResponse.json({ users });
}