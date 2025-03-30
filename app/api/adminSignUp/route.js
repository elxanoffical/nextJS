import { connectDB } from "@/lib/db";
import { NextResponse } from "next/server";
import Admin from '@/lib/models/Admin'


export async function POST(req, res) {

  await connectDB();
  const { username, password } = await req.json();

  try {
    const newBlog = new Admin({ username, password });
    await newBlog.save();
    return NextResponse.json(
      { mes: "Admin added successfuly!!" },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json({ mes: err.message }, { status: 500 });
  }

}
