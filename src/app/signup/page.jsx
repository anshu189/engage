'use client';
import React from 'react'
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
import { useRouter } from 'next/navigation';
import { ViewTransitions, Link } from 'next-view-transitions'

const Signup = () => {
  const [user, setuser] = useState({
    email:"",
    password:"",
    username:"",
  })

  const signup = async ()=>{
    console.log("Welcome Onboard, Newbie!")
  }

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
                <Input id="name" placeholder="elliot69" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input type="email" placeholder="elliot69@fsociety.org" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Signup</Button>
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