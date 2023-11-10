"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface UserForgotPasswordProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function UserForgotPassword({
  className,
  ...props
}: UserForgotPasswordProps) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState("");

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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEmail(value);
    validateEmail(value);
  };

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    if (!validateEmail(email)) return;
    setIsLoading(true);

    // API call

    setIsLoading(false);
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-4">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
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
              aria-describedby="emailError"
            />
            {emailError && (
              <p id="emailError" className="text-red-500 text-xs">
                {emailError}
              </p>
            )}
          </div>
          <Button disabled={isLoading || emailError}>
            {isLoading ? <h6>Loading...</h6> : "Enviar"}
          </Button>
        </div>
      </form>
    </div>
  );
}
