"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserProfileFormProps extends React.HTMLAttributes<HTMLDivElement> {}

interface UserUpdate {
  username: string;
  about: string;
  avatar: string;
  lastName: string;
  firstName: string;
}

const user = {
  username: "johndoe",
  avatar: "01",
  lastName: "John",
  firstName: "Doe",
  about: `Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum. como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.`,
};

export function UserProfileForm({ className, ...props }: UserProfileFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [formData, setFormData] = React.useState<UserUpdate>(user);
  const [selectedAvatar, setSelectedAvatar] = React.useState<string>(
    user.avatar
  );

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setSelectedAvatar(value);
    setFormData((prevFormData) => ({ ...prevFormData, avatar: value }));
  };

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    // API call
    console.log("Submitted Data", formData);

    setIsLoading(false);
  }

  return (
    <div className={cn(className)} {...props}>
      <form onSubmit={onSubmit} noValidate>
        <div className="">
          <div className="flex flex-col gap-4">
            {/* username */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="username">Usuario</Label>
              <Input
                name="username"
                id="username"
                placeholder="johndoe"
                type="text"
                autoCapitalize="none"
                autoComplete="username"
                autoCorrect="off"
                disabled={isLoading}
                value={formData.username}
                onChange={handleChange}
                aria-describedby="usernameError"
              />
            </div>

            {/* firstName */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="firstName">Nombre</Label>
              <Input
                name="firstName"
                id="firstName"
                placeholder="John"
                type="text"
                autoCapitalize="none"
                autoComplete="given-name"
                autoCorrect="off"
                disabled={isLoading}
                value={formData.firstName}
                onChange={handleChange}
                aria-describedby="firstNameError"
              />
            </div>

            {/* lastName */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="lastName">Apellido</Label>
              <Input
                name="lastName"
                id="lastName"
                placeholder="Doe"
                type="text"
                autoCapitalize="none"
                autoComplete="family-name"
                autoCorrect="off"
                disabled={isLoading}
                value={formData.lastName}
                onChange={handleChange}
                aria-describedby="lastNameError"
              />
            </div>
            {/* about */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="about">Sobre mi</Label>
              <Textarea
                name="about"
                id="about"
                placeholder={user.about}
                value={formData.about}
                onChange={handleChange}
                disabled={isLoading}
                aria-describedby="aboutError"
              />
            </div>

            {/* avatar */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="avatar">Avatar</Label>
              <Select onValueChange={handleSelectChange}>
                <SelectTrigger className="w-[90px]">
                  <Avatar className="h-9 w-9">
                    <AvatarImage
                      src={`/avatars/${selectedAvatar}.png`}
                      alt="Avatar"
                    />
                    <AvatarFallback>{selectedAvatar}</AvatarFallback>
                  </Avatar>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="01">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src="/avatars/01.png" alt="Avatar" />
                      <AvatarFallback>01</AvatarFallback>
                    </Avatar>
                  </SelectItem>
                  <SelectItem value="02">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src="/avatars/02.png" alt="Avatar" />
                      <AvatarFallback>02</AvatarFallback>
                    </Avatar>
                  </SelectItem>
                  <SelectItem value="03">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src="/avatars/03.png" alt="Avatar" />
                      <AvatarFallback>03</AvatarFallback>
                    </Avatar>
                  </SelectItem>
                  <SelectItem value="04">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src="/avatars/04.png" alt="Avatar" />
                      <AvatarFallback>04</AvatarFallback>
                    </Avatar>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <Button className="mt-4 w-full" disabled={isLoading}>
          Guardar
        </Button>
      </form>
    </div>
  );
}
