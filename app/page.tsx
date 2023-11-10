import Link from "next/link";

import { Github } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-16 mt-16 px-8">
      <div className="flex flex-col items-center gap-2 my-auto">
        <h1 className="text-4xl font-bold text-center lg:text-left mb-4">
          User App
        </h1>
        <p className="text-xl text-center lg:text-left max-w-[500px] mb-4">
          Esta es un app de ejemplo para el uso de un API de autenticación y de
          gestión de usuarios.
        </p>
        <div className="text-xl text-center lg:text-left max-w-[500px]">
          Si quieres ver el código de este app, puedes ir a{" "}
          <div className="flex gap-2">
            <Github className="w-4 h-4 ml-1 mb-4" />
            <a
              href="https://github.com/jonlarale"
              className="text-blue-500 underline"
              target="_blank"
            >
              mi Github
            </a>
          </div>
        </div>
        <div className="text-xl text-center lg:text-left max-w-[500px]">
          También puedes visitar mi página web en{" "}
          <a
            href="https://bragit.io/team/jonathan-larraguivel"
            className="text-blue-500 underline"
            target="_blank"
          >
            Bragit.io
          </a>
        </div>
      </div>

      <div className="flex justify-center text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left gap-2">
        <Link
          href="/auth/register"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Nuevo usuario{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            En este link puedes registrar un usuario
          </p>
        </Link>
        <Link
          href="/auth/login"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Iniciar sesión{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            En este link puedes iniciar sesión
          </p>
        </Link>
      </div>
    </main>
  );
}
