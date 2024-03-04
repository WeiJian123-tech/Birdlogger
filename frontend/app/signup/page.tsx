"use client";
import React from "react";
import { useState } from "react";

import Link from 'next/link'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
 
const FormSchema = z.object({
    email: z.string().email(),
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters."
    }),
    confirmpassword: z.string().min(8, {
        message: "Password must be at least 8 characters."
    }),
  })
  .refine((input) => input.password == input.confirmpassword, {
    message: "Passwords do not match.",
  });

export default function Signup() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
            username: "",
            password: "",
            confirmpassword: "",
        },
      });

    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log(JSON.stringify(data));
    }

    return(
        <div className="flex flex-col items-center justify-content-center w-screen h-screen">

            <div className="flex flex-col items-center justify-content-center pb-5">
                <h1 className="text-5xl font-bold pb-5">Sign up</h1>
                <p>Find Beauty With Wings</p>
            </div>

            <div className="flex flex-col align-items-center justify-content-center">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-content-center w-screen h-screen space-y-6 border border-solid border-black">
                        <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />

                        <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />

                        <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />

                        <FormField
                        control={form.control}
                        name="confirmpassword"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Confirm Password</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />

                        <p>Already have an account? <Button variant="link"><Link href="/login" prefetch={true} className="text-blue-500">Login</Link></Button></p>

                        <br/>
                        
                        <Button type="submit">Sign up</Button>
                    </form>
                </Form>
                
            </div>

        </div>
    );
}