import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { UserAuthForm } from "@/components/auth/user-login-form";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Card className="p-8 md:p-16">
        <CardHeader>
          <CardTitle className="text-center mb-2">Inicia sesión</CardTitle>
        </CardHeader>
        <CardContent>
          <UserAuthForm />
        </CardContent>
        <hr className="w-full my-8" />
      </Card>
    </div>
  );
}
