import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MoveLeft } from "lucide-react";

import { UserForgotPassword } from "@/components/auth/forgot-password-form";
import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Card className="p-8 md:p-16 max-w-[500px]">
        <CardHeader>
          <CardTitle className="text-center mb-2">
            Restablecer contraseña
          </CardTitle>
          <CardDescription className="text-center">
            Introduce tu correo electrónico y te enviaremos un enlace para
            restablecer tu contraseña.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <UserForgotPassword />
        </CardContent>
        <hr className="w-full my-8" />
        <CardFooter className="flex flex-col gap-2">
          <p className="text-sm text-center">
            Si necesitas ayuda, contáctanos en{" "}
            <a
              href="mailto:soporte-ejemplo@blumonpay.com"
              className="text-blue-500 underline"
            >
              soporte-ejemplo@blumonpay.com
            </a>
          </p>
          <Link href="/auth/login" className="text-blue-500 underline">
            <MoveLeft className="inline-block w-4 h-4 mr-1" />
            Inicia sesión
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
