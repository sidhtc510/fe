import { NextResponse } from "next/server";
import { users } from "./usersData";

export async function GET(req) {
    return NextResponse.json(users);
}

export async function POST(req) {
    const body = await req.json();
    return NextResponse.json({ body });
}
