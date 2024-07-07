import mongoose from "mongoose";
import db from "@/utils/db";
import bcrypt from "bcrypt";
import User from "@/models/user-model";
import { NextResponse } from "next/server";

import { generateToken } from '@/utils/jwt';


export async function POST(req, res) {
    try {
        const body = await req.json(); 
        await db();
        const userExists = await User.findOne({ email: body.email });
        if (userExists) {
            const user = await bcrypt.compare(body.password, userExists.password);
            if (user) {
                try {
                    const userId = userExists._id.toString();
                    
                    const email = userExists.email;
                    const fname = userExists.fname;
                    const lname = userExists.lname;

                    const token = generateToken({ userId, email, lname, fname });
                    
                    return NextResponse.json({ message: "Login successfull", token }, { status: 200 });
                } catch (err) {
                    return NextResponse.json({ message: "Error with JSON WEB Token" }, { status: 406 });
                }
            } else {
                return NextResponse.json({ message: "Invalid Password" }, { status: 401 });
            }
        } else {
            return NextResponse.json({ message: "Account doesn't exists" }, { status: 404 });
        }
        
    } catch (err) {
        return NextResponse.json({ message: "Login Failed Please try again!" }, { status: 406 });
    }
}