import connectMongoDB from "@/app/libs/mongodb";
import User from "@/app/models/user";
import { NextResponse } from "next/server";

export async function GET() {
    await connectMongoDB();
    const users = await User.find().sort({ 'updatedAt': -1 });
    return NextResponse.json({ users });
}

export async function POST(request){
    const user = await request.json()
    await connectMongoDB();
    await User.create({...user});
    return NextResponse.json({ message: "user created" }, { status: 201 });

}