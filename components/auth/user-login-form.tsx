"use client";

import * as React from "react";

import axios from "axios";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "../ui/switch";
import { useToast } from "@/components/ui/use-toast";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [emailError, setEmailError] = React.useState<string>("");
  const [passwordError, setPasswordError] = React.useState<string>("");
  const [rememberMe, setRememberMe] = React.useState<boolean>(false);
  const { toast } = useToast();
  const router = useRouter();

  const validateEmail = (emailValue: string) => {
    if (!emailValue) {
      setEmailError("El correo electrónico es obligatorio.");
      return false;
    } else if (!/\S+@\S+\.\S+/.test(emailValue)) {
      setEmailError("El correo electrónico no es válido.");
      return false;
    }
    setEmailError("");
    return true;
  };

  const handleRememberMeChange = (isChecked: boolean) => {
    setRememberMe(isChecked);
  };

  const validatePassword = (passwordValue: string) => {
    if (!passwordValue) {
      setPasswordError("La contraseña es obligatoria.");
      return false;
    } else if (passwordValue.length < 6) {
      setPasswordError("La contraseña debe tener al menos 6 caracteres.");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    if (id === "email") {
      setEmail(value);
      validateEmail(value);
    } else if (id === "password") {
      setPassword(value);
      validatePassword(value);
    }
  };

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    if (!validateEmail(email) || !validatePassword(password)) return;
    setIsLoading(true);

    const url = `${process.env.NEXT_PUBLIC_API_URL}/auth/login`;
    if (url) {
      const response = await axios.post(url, {
        email,
        password,
      });

      if (response.status === 200) {
        if (rememberMe) {
          localStorage.setItem("access_token", response.data.access_token);
        } else {
          sessionStorage.setItem("access_token", response.data.access_token);
        }
        sessionStorage.setItem("user_id", response.data.user_id);
        sessionStorage.setItem("role", response.data.role);
        sessionStorage.setItem("email", response.data.email);
        sessionStorage.setItem("is_logged", "true");

        if (response.data.role === "admin") {
          router.push("/users");
          return;
        } else {
          router.push(`/users/${response.data.user_id}`);
          return;
        }
      } else {
        toast({
          title: "Error",
          description: response.data.message,
          variant: "destructive",
        });
      }
    }
    setIsLoading(false);
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-4">
          <div className="grid gap-1">
            <Label htmlFor="email" className="sr-only">
              Correo
            </Label>
            <Input
              id="email"
              placeholder="nombre@ejemplo.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              value={email}
              onChange={handleChange}
            />
            {emailError && <p className="text-red-500 text-xs">{emailError}</p>}
          </div>
          <div className="grid gap-1">
            <Label htmlFor="password" className="sr-only">
              Contraseña
            </Label>
            <Input
              id="password"
              placeholder="Contraseña"
              type="password"
              autoComplete="current-password"
              disabled={isLoading}
              value={password}
              onChange={handleChange}
            />
            {passwordError && (
              <p className="text-red-500 text-xs">{passwordError}</p>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Switch
              id="remember-me"
              onCheckedChange={handleRememberMeChange}
              disabled={isLoading || emailError || passwordError}
            />
            <Label htmlFor="remember-me" className="text-sm">
              Recuérdame
            </Label>
          </div>
          <Button disabled={isLoading || emailError || passwordError}>
            {isLoading ? <h6>Loading...</h6> : "Ingresar"}
          </Button>
        </div>
      </form>
    </div>
  );
}
