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

const Login = () => {
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
          <Button>Login</Button>
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