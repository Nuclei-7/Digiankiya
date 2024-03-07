import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import User from "@/models/user-model";
import  db  from "@/utils/db";


export async function GET(req, res) {
    try {
        const header = req.headers;
        const authToken = header.get('authorization');

        
        
        const jwtToken = authToken.replace("Bearer ", "");

        const decoded = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);


        await db();
        console.log(decoded.email);
        const account = await User.findOne({ email: decoded.email },{password:0});
        
        console.log(account);

        return NextResponse.json({ message: "Token verified", account }, { status: 200 });
        
    } catch (err) {
        console.error(err);
        return NextResponse.json({ message: "ERROR" }, { status: 500 });
    }
}

