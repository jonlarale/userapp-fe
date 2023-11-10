import React from "react";

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
  return (
    <div className="flex flex-col items-center gap-16 mt-16 px-8">
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
