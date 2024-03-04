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
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters."
    }),
  });

export default function Signup() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
            password: "",
        },
      });

    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log(JSON.stringify(data));
    }

    return(
        <div className="flex flex-col items-center justify-content-center w-screen h-screen">

            <div className="flex flex-col items-center justify-content-center pb-5">
                <h1 className="text-5xl font-bold pb-5">Login</h1>
                <p>Find Beauty With Wings</p>
            </div>

            <div className="flex flex-col align-items-center justify-content-center">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-content-center w-screen h-screen space-y-6 border border-solid border-black">

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

                        <p>Don't have an account? <Button variant="link"><Link href="/signup" prefetch={true} className="text-blue-500">Sign up</Link></Button></p>

                        <br/>
                        <Button type="submit">Login</Button>
                    </form>
                </Form>
                
            </div>

        </div>
    );
}