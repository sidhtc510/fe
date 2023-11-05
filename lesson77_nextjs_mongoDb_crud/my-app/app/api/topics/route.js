import connectMongoDB from "@/app/libs/mongodb";
import Topic from "@/app/models/topic";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { title, description } = await request.json();
    await connectMongoDB();
    await Topic.create({ title, description });
    return NextResponse.json({ message: "topic created" }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const topics = await Topic.find();
    return NextResponse.json({ topics });
}

export async function DELETE(request) {
    try {
        const id = request.nextUrl.searchParams.get("id");
        await connectMongoDB();
        await Topic.findByIdAndDelete(id);
        return NextResponse.json({ message: "topic was delete" }, { status: 200 });
    } catch (error) {
        console.error(error);
    }
}
