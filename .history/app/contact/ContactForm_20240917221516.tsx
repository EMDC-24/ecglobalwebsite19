import * as React from "react"

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  return (
    <Card className="w-full border-0">
      <CardHeader>
        <h3 className="text-5xl text-slate-800 font-light">Get in Touch</h3>
        <CardDescription>Someone will get back to you.</CardDescription>
      </CardHeader>
      
        <form>
          <div className="flex flex-col w-full items-start gap-4">
            <div className="flex flex-row gap-5 justify-between items-start mx-6">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter your email" />
            </div>
            </div>
            <div className="flex flex-row gap-5 justify-between items-start mx-6 mb-5">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" placeholder="Enter your Phone Number" />
            </div>
            
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="company">Company</Label>
              <Input id="company" placeholder="Enter your company name" />
            </div>
            </div>
            <div className="flex flex-col gap-1.5 w-full justify-between items-start mx-6 mb-5">
            
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Write your message" />
         
            
           
            </div>
            
          </div>
        </form>
     
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        
      </CardFooter>
    </Card>
  )
}
