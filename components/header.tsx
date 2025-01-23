import React from "react";

import BlueCircle from "@/public/blue-circle";

import ModeToggle from "./ui/mode-toggle";
import Link from "next/link";

export default function Header() {
  return (
    <header className="mx-auto flex h-20 max-w-[75rem] items-center justify-between px-3 sm:px-6">
      <div className="animate-spin-entrance">
        <Link href={"/"}>
          <BlueCircle />
        </Link>
      </div>

      <nav className="flex items-center justify-between gap-5">
        <Link href="/esmeril" className="underline-offset-4 hover:underline">
          Especificação Motoesmeril
        </Link>
        <Link
          href="/calculadora"
          className="underline-offset-4 hover:underline"
        >
          Calculadora de Preços
        </Link>
      </nav>
      <div>
        <ModeToggle />
      </div>
    </header>
  );
}
