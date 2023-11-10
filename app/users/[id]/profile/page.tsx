"use client";

import React from "react";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { UserProfileForm } from "@/components/users/user-profile-form";

export default function Profile() {
  const user_id = sessionStorage.getItem("user_id");
  return (
    <div className="flex flex-col items-center gap-16 mt-16 px-8">
      <div className="flex justify-start w-full mx-8">
        <Link
          href={`/users/${user_id}`}
          className="flex gap-2 text-primary underline"
        >
          <ArrowLeft size={18} />
          Volver
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Perfil</CardTitle>
          <CardDescription>
            Aquí puedes actualizar tu información personal.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <UserProfileForm />
        </CardContent>
      </Card>
    </div>
  );
}
