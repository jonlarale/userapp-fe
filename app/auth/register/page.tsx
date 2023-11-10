import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { UserRegisterForm } from "@/components/auth/user-register-form";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Card className="p-8 md:p-16">
        <CardHeader>
          <CardTitle className="text-center mb-2">Regístrate</CardTitle>
          <CardDescription className="text-center">
            ¿Ya tienes una cuenta?{" "}
            <Link href="/auth/login" className="text-blue-500 underline">
              Inicia sesión
            </Link>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <UserRegisterForm />
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
