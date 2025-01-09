 "use client"
import { Button } from '@/components/ui/button'
 import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
// import { toast } from '@/hooks/use-toast'
import Image from 'next/image'

import React, { useState } from 'react'
 
 function Page() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        setLoading(true)
        // try {
        //   const response = await fetch("/api/sendEmail", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({name, email, message}),
        //   });
    
        //   if (response.ok) {
        //     console.log("Email sent successfully!");
        //    setEmail("")
        //    setName("")
        //    setMessage("")
        //    setLoading(false)
        //    toast({
          
        //     title: "Email sent successfully!"
        //   })
      
        //   } else {
        //     console.log("Failed to send email. Please try again.");
        //     toast({
        //         variant: "destructive",
        //         title: "Failed to send email. Please try again."
        //       })
          
        //     setLoading(false)
        //   }
        // } catch (error) {
        //   console.error(error);
        //   toast({
        //     variant: "destructive",
        //     title: "An error occurred. Please try again."
        //   })
      
        //   setLoading(false)
        // }
      };
   return (
    <section data-aos="zoom-in"  className=" flex md:justify-end flex-col md:flex-row ">
        
        <div className="relative md:w-[45%] w-full">
        <Image
               width={500}
               height={200}
               src="/josh img/contact-port.jpg"
               alt={"name"}
               priority
              
              
              className="md:object-cover object-contain md:sticky top-0 left-0 z-10"
            />
        </div>
      
        <div data-aos="zoom-in" className=" md:w-[60%] w-full flex flex-col  gap-5 p-3 md:p-0 md:mt-28 py-10 md:py-0" >
          <div data-aos="fade-up" className="md:text-[120px] text-[75px] flex flex-col leading-[0.9] ">
            <span className="">Let&apos;s
            </span>
            <span className="">Create.</span>
          </div>

         

        <form onSubmit={handleSubmit} className="md:w-[80%] inter-font flex flex-col justify-center items-center md:justify-start md:items-start gap-3">
            <div className="flex gap-3 w-full">
            <div className="w-full">
            <p className="text-gray-600 italic text-lg inter-font">
            (Name)
          </p>
                <Input className="dark:bg-[#0E1011] border border-gray-500 w-full" type='text' placeholder="First Name " value={name}  onChange={((e) => setName(e.target.value))}/>
            </div>
            <div className="w-full">
            <p className="text-gray-600 italic text-lg inter-font">
            (Email)
          </p>
                <Input className="dark:bg-[#0E1011] border border-gray-500 "  type='email' placeholder="Email Address" value={email}  onChange={((e) => setEmail(e.target.value))} />
            </div>
            </div>

            <Textarea className="dark:bg-[#0E1011] border border-gray-500" value={message} onChange={((e) => setMessage(e.target.value))} >

            </Textarea>

            <Button>{loading? "Sending" : "Send"}</Button>
        </form>

         
        </div>
      </section>
   )
 }
 
 export default Page