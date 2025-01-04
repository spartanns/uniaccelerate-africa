"use client";

import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z.string().min(10).max(50),
  password: z.string().min(10).max(50),
});

const AuthForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <section className="flex flex-col">
      <div className="flex justify-start items-center mt-10 ml-5">
        <Image src="/logo.png" alt="logo" width={32} height={32} />
        <p>uniaccelerate</p>
      </div>
      <Tabs defaultValue="sign-in" className="w-full mt-10 ml-5">
        <TabsList>
          <TabsTrigger value="sign-in" className="text-3xl">
            Sign In
          </TabsTrigger>
          <TabsTrigger value="sign-up" className="text-3xl">
            Sign Up
          </TabsTrigger>
        </TabsList>
        <TabsContent value="sign-in">
          <p className="text-slate-500">
            Let's get started by filling out the form below.
          </p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="email" {...field} />
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
                      <Input placeholder="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </TabsContent>
        <TabsContent value="sign-up">Sign up here</TabsContent>
      </Tabs>
    </section>
  );
};

export default AuthForm;
