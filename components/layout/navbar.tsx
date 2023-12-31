"use client";

import { useState } from "react";
import { Moon, Sun, Home } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserProfile from "@/components/navigation/user-profile";

export function Navbar() {
  const { setTheme } = useTheme();
  const [isUserLoggedIn, setUserLoggedIn] = useState(true);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-8 py-2 md:px-16 bg-primary-foreground shadow-md">
      <Link href="/" className="my-auto">
        <Button variant="outline" size="icon">
          <Home className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </Link>

      <div className="flex gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        {isUserLoggedIn && (
          <div className="my-auto pt-1">
            <UserProfile />
          </div>
        )}
      </div>
    </header>
  );
}
