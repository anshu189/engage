'use client';

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
import { Button } from "@/components/ui/button"
import { ViewTransitions, Link } from 'next-view-transitions'
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import toast, { Toaster } from 'react-hot-toast';


const Login = () => {
  
  const router = useRouter();
  const [logindisabled, setLogindisabled] = useState(true);
  const loginotify = () => toast.success('Logged in SuccessFully!');
  const [user, setuser] = useState({
    password:"",
    username:"",
  })

  const login = async ()=>{
    console.log("Logged in!")
    loginotify()
  }

  // Form Validations
  useEffect(() => {
    if(user.username.length > 2 && user.password.length > 5) {
      setLogindisabled(false);
    }
    else{
      setLogindisabled(true);
    }
  }, [user])
  

  return (
    // <ViewTransitions>
      <div className='min-h-screen flex flex-col items-center justify-center gap-10 p-5 background foreground text-warning-foreground'>
        <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>to enter into your own universe.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Username</Label>
                <Input id="name" placeholder="elliot69" value={user.username} onChange={(e)=>setuser({...user, username: e.target.value})}/>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Password</Label>
                <Input type="password" placeholder="******" value={user.password} onChange={(e)=>setuser({...user, password: e.target.value})}/>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button disabled={logindisabled} onClick={login}>Login</Button>
          <Toaster toastOptions={{
            success: {
              duration:"150",
              style: {
                background: '#000',
                color:"#fff",
                // border: '1px solid #EA580C',  //themeOrange
                border: '1px solid #1db853',  //successGreen
              },
              iconTheme: {
                // primary: '#EA580C',  //themeOrange
                primary: '#1db853',  //successGreen
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
        <span className='opacity-40'>Don't have an account?</span> <Link href="/signup" className='text-orange-500'>Signup</Link>
        </div>
      </Card>
      </div>
    // </ViewTransitions>
  )
}

export default Login