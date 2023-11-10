"use client";
import React from "react";

import Link from "next/link";

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

const users: User = {
  username: "johndoe",
  email: "john.doe@email.com",
  avatar: "/avatars/01.png",
  about: `Lorem Ipsum es simplemente el texto de relleno de las imprentas y
  archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
  de las industrias desde el año 1500, cuando un impresor (N. del T.
  persona que se dedica a la imprenta) desconocido usó una galería de
  textos y los mezcló de tal manera que logró hacer un libro de textos
  especimen. No sólo sobrevivió 500 años, sino que tambien ingresó
  como texto de relleno en documentos electrónicos, quedando
  esencialmente igual al original. Fue popularizado en los 60s con la
  creación de las hojas "Letraset", las cuales contenian pasajes de
  Lorem Ipsum, y más recientemente con software de autoedición, como
  por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem
  Ipsum.
  como texto de relleno en documentos electrónicos, quedando
  esencialmente igual al original. Fue popularizado en los 60s con la
  creación de las hojas "Letraset", las cuales contenian pasajes de
  Lorem Ipsum, y más recientemente con software de autoedición, como
  por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem
  Ipsum.
  `,
};

export default function User({ params }: { params: { id: string } }) {
  const { id } = params;
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
                <AvatarImage src={users.avatar} alt="Avatar" />
                <AvatarFallback>
                  {users.username.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">
                  {users.username}
                </p>
                <p className="text-sm text-muted-foreground">{users.email}</p>
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
            <p>{users.about}</p>
          </ScrollArea>
        </CardFooter>
      </Card>
    </div>
  );
}
