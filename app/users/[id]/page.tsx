"use client";
import React, { useEffect, useState } from "react";

import Link from "next/link";
import axios from "axios";

import { Pencil } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface User {
  username: string;
  email: string;
  avatar: string;
  about: string;
}

export default function User({ params }: { params: { id: string } }) {
  const [user, setUser] = useState<User | null>(null);
  const { id } = params;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token =
          localStorage.getItem("access_token") ||
          sessionStorage.getItem("access_token");
        console.log("token", token);
        if (!token) {
          throw new Error("No se encontró el token");
        }

        const url = `${process.env.NEXT_PUBLIC_API_URL}/users/${id}`;
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        // Manejar errores según sea necesario
      }
    };

    fetchUserData();
  }, [id]);

  if (!user) {
    return <div>Cargando...</div>; // O algún otro indicador de carga
  }
  return (
    <div className="flex justify-center pt-16 h-screen">
      <Card className="w-[300px] md:w-[480px] h-[520px]">
        <CardHeader>
          <CardTitle>Usuario</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex">
              <Avatar className="h-9 w-9">
                <AvatarImage src={user.avatar} alt="Avatar" />
                <AvatarFallback>UN</AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">
                  {user.username}
                </p>
                <p className="text-sm text-muted-foreground">{user.email}</p>
              </div>
            </div>
            <Link href={`/users/${id}/profile`}>
              <Button variant="outline" size="icon" className="md:mr-4">
                <Pencil className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </CardContent>
        <CardFooter>
          <ScrollArea className="h-[340px]">
            <p>{user.about}</p>
          </ScrollArea>
        </CardFooter>
      </Card>
    </div>
  );
}
