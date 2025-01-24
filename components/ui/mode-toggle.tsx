"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Toggle } from "@/components/ui/toggle";

export default function ModeToggle() {
  const { setTheme, theme } = useTheme();

  function toggleTheme() {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  return (
    <Toggle variant={"outline"} onClick={toggleTheme}>
      {theme === "dark" ? <Moon /> : <Sun />}
    </Toggle>
  );
}
