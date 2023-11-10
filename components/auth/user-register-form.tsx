"use client";

import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

interface UserRegisterFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserRegisterForm({
  className,
  ...props
}: UserRegisterFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [formErrors, setFormErrors] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { toast } = useToast();
  const router = useRouter();

  const validateField = (name: string, value: string) => {
    let error = "";
    switch (name) {
      case "email":
        if (!value) {
          error = "El correo electrónico es obligatorio.";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          error = "El correo electrónico no es válido.";
        }
        break;
      case "password":
        if (!value) {
          error = "La contraseña es obligatoria.";
        } else if (value.length < 6) {
          error = "La contraseña debe tener al menos 6 caracteres.";
        }
        break;
      case "confirmPassword":
        if (value !== formData.password) {
          error = "Las contraseñas no coinciden.";
        }
        break;
      default:
        break;
    }
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    validateField(name, value);
  };

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    const isValid = Object.keys(formData).every((key) => {
      validateField(key, formData[key]);
      return !formErrors[key];
    });

    if (!isValid) return;
    setIsLoading(true);

    try {
      const url = `${process.env.NEXT_PUBLIC_API_URL}/auth/signup`;
      if (url) {
        const dataToSend = {
          email: formData.email,
          password: formData.password,
          password_confirmation: formData.confirmPassword,
        };

        const response = await axios.post(url, dataToSend);

        if (response.status === 201) {
          toast({
            title: "Usuario creado",
            description: "El usuario se creó correctamente",
          });
          router.push("/auth/login");
        } else {
          toast({
            variant: "destructive",
            title: "Error",
            description: "No se pudo crear el usuario",
          });
        }
      } else {
        console.error("API URL not found");
      }
    } catch (error) {
      const errorMessage = error.response
        ? error.response.data.message
        : "Error desconocido";

      toast({
        variant: "destructive",
        title: "Error",
        description: `No se pudo crear el usuario: ${errorMessage}`,
      });
    }

    setIsLoading(false);
  }

  return (
    <div className={cn(className)} {...props}>
      <form onSubmit={onSubmit} noValidate>
        <div className="flex md:gap-6 gap-4 flex-col ">
          <div className="flex flex-col gap-4">
            {/* Email */}
            <div className="grid gap-1">
              <Label htmlFor="email">Correo</Label>
              <Input
                name="email"
                id="email"
                placeholder="nombre@ejemplo.com"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                disabled={isLoading}
                value={formData.email}
                onChange={handleChange}
                aria-describedby="emailError"
                required
              />
              {formErrors.email && (
                <p id="emailError" className="text-red-500 text-xs">
                  {formErrors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="grid gap-1">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                name="password"
                id="password"
                placeholder="Contraseña"
                type="password"
                autoComplete="new-password"
                disabled={isLoading}
                value={formData.password}
                onChange={handleChange}
                aria-describedby="passwordError"
                required
              />
              {formErrors.password && (
                <p id="passwordError" className="text-red-500 text-xs">
                  {formErrors.password}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="grid gap-1">
              <Label htmlFor="confirmPassword">Repetir contraseña</Label>
              <Input
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Repetir contraseña"
                type="password"
                autoComplete="new-password"
                disabled={isLoading}
                value={formData.confirmPassword}
                onChange={handleChange}
                aria-describedby="confirmPasswordError"
                required
              />
              {formErrors.confirmPassword && (
                <p id="confirmPasswordError" className="text-red-500 text-xs">
                  {formErrors.confirmPassword}
                </p>
              )}
            </div>
          </div>
        </div>
        <Button
          className="mt-4 w-full"
          disabled={
            isLoading || Object.values(formErrors).some((error) => error !== "")
          }
        >
          Registrarse
        </Button>
      </form>
    </div>
  );
}
