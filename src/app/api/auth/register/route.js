import db from "@/utils/db";
import User from "@/models/user-model";
import { NextResponse } from "next/server";
import bcrypt  from 'bcrypt';


export async function POST(req, res) {
    try {
        const body = await req.json();

        await db();
        
        const userExists = await User.findOne({ email: body.email }); {
            if (userExists) {
                return NextResponse.json({message:"Account already exists"},{status: 406})
            }
        }

        const saltRound = await bcrypt.genSalt(10);
        const hashed_password = await bcrypt.hash(body.password, saltRound);
        
        body.password = hashed_password;



        await User.create(body);

        return NextResponse.json({ message: "Registration Successfull" }, { status: 200 });
    }
    catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal server error" }, { status: 201 });
    }
}

