'use client';

import React, { useEffect } from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


import axios from 'axios';
import { useState } from 'react';
import { sign } from 'jsonwebtoken';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'next-view-transitions'

const Signup = () => {
  const router = useRouter();
  const signupnotify = () => toast.success('Welcome onboard, Normie.');
  const [singupdisabled, setSingupdisabled] = useState(true);
  const [user, setuser] = useState({
    email:"",
    password:"",
    username:"",
  })

  const signup = async ()=>{
    console.log("Welcome Onboard, Normie!")
    signupnotify();
  }

  // Form Validations
  useEffect(() => {
    const isValidEmail = user.email.includes("@") && (user.email.endsWith(".com") || user.email.endsWith(".co") || user.email.endsWith(".org") || user.email.endsWith(".net") || user.email.endsWith(".in") || user.email.endsWith(".uk") || user.email.endsWith(".fr") || user.email.endsWith(".edu"));
    if (isValidEmail && user.username.length > 2 && user.password.length > 5) {
        setSingupdisabled(false);
    }
    else{
      setSingupdisabled(true);
    }
  }, [user])
  
  return (
    // <ViewTransitions>
      <div className='min-h-screen flex flex-col items-center justify-center gap-10 p-5 background foreground text-warning-foreground'>
        <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>to create your universe.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Username</Label>
                <Input id="name" placeholder="elliot69" value={setuser.username} onChange={(e)=>setuser({...user, username: e.target.value})}/>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input type="email" placeholder="elliot69@fsociety.org" value={setuser.email} onChange={(e)=>setuser({...user, email: e.target.value})}/>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input type="password" placeholder="******" value={setuser.password} onChange={(e)=>setuser({...user, password: e.target.value})}/>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button disabled={singupdisabled} onClick={signup}>Signup</Button>
          <Toaster toastOptions={{
            success: {
              duration:"150",
              style: {
                background: '#000',
                color:"#fff",
                border: '1px solid #EA580C',  //themeOrange
                // border: '1px solid #1db853',  //successGreen
              },
              iconTheme: {
                primary: '#EA580C',  //themeOrange
                // primary: '#1db853',  //successGreen
                secondary: '#fff',
              },
            },
            error: {
              style: {
                background: 'red',
              },
            },
          }}/>
        </CardFooter>
        <div className="flex items-center justify-center gap-2 pb-4">
          <span className='opacity-40'>Already have an account?</span> <Link href="/login" className='text-orange-500'>Login</Link>
        </div>
      </Card>
      </div>
    // </ViewTransitions>
  )
}

export default Signup