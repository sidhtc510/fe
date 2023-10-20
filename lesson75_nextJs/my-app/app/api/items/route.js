import { NextResponse } from "next/server";
import { users } from "./users";

export async function GET() {
    return NextResponse.json(users);
}

export async function POST(req) {
    const body = await req.json();
    return NextResponse.json({ body });
}
