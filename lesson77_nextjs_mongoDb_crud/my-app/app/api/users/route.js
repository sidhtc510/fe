import connectMongoDB from "@/app/libs/mongodb";
import User from "@/app/models/user";
import { NextResponse } from "next/server";

export async function GET() {
    await connectMongoDB();
    const users = await User.find().sort({ 'updatedAt': -1 });
    return NextResponse.json({ users });
}

export async function POST(request) {
    const user = await request.json()
    await connectMongoDB();
    await User.create({ ...user });
    return NextResponse.json({ message: "user created" }, { status: 201 });
}

export async function DELETE(request) {
    try {
        const id = await request.nextUrl.searchParams.get("id");
        await connectMongoDB();
        await User.findByIdAndDelete(id);
        return NextResponse.json({ message: 'user was delete' }, { status: 200 })
    } catch (error) {
        console.error(error);
    }
}