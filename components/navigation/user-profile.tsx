"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function UserProfile() {
  const [user, setUser] = useState({
    role: sessionStorage.getItem("role"),
    email: sessionStorage.getItem("email"),
    userId: sessionStorage.getItem("user_id"),
    isLogged: sessionStorage.getItem("is_logged") === "true",
  });
  const router = useRouter();
  const usernameShortcut = "UN";

  useEffect(() => {
    const interval = setInterval(() => {
      setUser({
        role: sessionStorage.getItem("role"),
        email: sessionStorage.getItem("email"),
        userId: sessionStorage.getItem("user_id"),
        isLogged: sessionStorage.getItem("is_logged") === "true",
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!user.isLogged) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/avatars/01.png" alt="avatar" />
            <AvatarFallback>{usernameShortcut}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user.role}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href={`/users/${user.userId}/profile`}>
            <DropdownMenuItem>
              Perfil
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <button
            className="m-0 p-0 w-full text-left"
            onClick={() => {
              sessionStorage.removeItem("access_token");
              localStorage.removeItem("access_token");
              sessionStorage.removeItem("user_id");
              sessionStorage.removeItem("role");
              sessionStorage.removeItem("email");
              sessionStorage.removeItem("is_logged");
              router.push("/auth/login");
            }}
          >
            Cerrar sesión
          </button>

          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
