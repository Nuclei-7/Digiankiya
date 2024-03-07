import User from "@/models/user-model";
import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    try {
    const body = await req.json(); 
    await db();
    console.log(body.email);
    console.log(body.phone);
    const userExists = await User.findOne({ email: body.email });
    if (userExists) {
        await User.findOneAndUpdate(
            { email: body.email },
            {$set:{
                fname: body.fname,
            }
            },
            { upsert: true }
        )
        return NextResponse.json({ message: "Success", status: 200, body });
    }
    else {
        return NextResponse.json({ message: "Failed", status: 201 });
    }
} catch (error) {
    console.error(error);
}

}