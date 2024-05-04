import {connect} from '@/Config/DBConfig'
import User from '@/model/userModel'
import { NextRequest,NextResponse } from 'next/server'
import bcryptjs from "bcryptjs"

connect()


export async function POST(NextRequest){
    try {
        const reqBody = await NextRequest.json();
        const {username, email, password} = reqBody
        console.log("ReqBody: ",reqBody)

        // Check if user is already exist
        const user = await User.findOne({email})

        if(user){
            return NextResponse.json({error: "User already exist!"}, {status: 400})
        }

        // Hashing the Password
        const salt = await bcryptjs.getSalt(20)
        const hashedPwd = await bcryptjs.hash(password, salt)
        
        const newUser = new User({
            username: username,
            email:email,
            password: hashedPwd,
        })

        const savedUser = await newUser.save()
        console.log("Saved User: ",savedUser)

        return NextResponse.json({message: "User created Successfully!", succes: true, savedUser})
    } 
    
    catch (error) {
        return NextResponse.json({error: error.message},{status:500})
    }
} 