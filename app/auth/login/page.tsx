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
          <CardDescription className="text-center">
            ¿No tienes una cuenta?{" "}
            <Link href="/auth/register" className="text-blue-500 underline">
              Regístrate
            </Link>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <UserAuthForm />
        </CardContent>
        <hr className="w-full my-8" />
        <CardFooter>
          <p className="text-sm text-center">
            ¿Olvidaste tu contraseña?{" "}
            <Link
              href="/auth/forgot-password"
              className="text-blue-500 underline"
            >
              Recupérala
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
