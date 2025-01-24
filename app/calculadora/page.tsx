"use client";

import React, { useState } from "react";

import Image from "next/image";

import allManufacturers from "@/lib/calculadora/manufacturers.json";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { Manufacturer } from "@/types/calculadora/calculadora";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import InputMask from "@mona-health/react-input-mask";

export default function Calculadora() {
  const [productValue, setProductValue] = useState<string | null>(null);
  const [manufacturer, setManufacturer] = useState<Manufacturer | null>(null);

  function handleClick(e: React.MouseEvent) {
    const name = e.currentTarget.getAttribute("data-name");

    const chosen = allManufacturers.find(
      (manufacturer) => manufacturer.name === name,
    );

    if (chosen) setManufacturer(chosen);

    console.log(manufacturer);
  }

  // lista - 15%
  // lista - 10%

  return (
    <main className="mx-auto flex min-h-[calc(100dvh-8rem)] max-w-[70rem] animate-entrance-left flex-col gap-8">
      <div className="flex w-full items-center justify-center gap-12">
        {allManufacturers.map(({ discount, img, name }) => (
          <div key={name}>
            <Button
              onClick={handleClick}
              data-name={name}
              variant={"outline"}
              className={`flex h-24 flex-col ${name === manufacturer?.name ? "bg-zinc-100" : "bg-transparent"}`}
            >
              <Image
                src={img}
                alt={name}
                width={0}
                height={0}
                sizes="100vw"
                className="max-w-40"
                style={{ width: "100%", height: "auto" }}
              />
            </Button>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
        <div>
          <Label className="" htmlFor="product-value">
            Preço Lista
          </Label>

          <Input
            className="inline-block"
            min={0}
            id="product-value"
            type="number"
            placeholder="Insira o Preço Lista, conforme Portal do Fabricante"
            onChange={({ target }) => setProductValue(target.value)}
          />
        </div>

        <Separator orientation="vertical" />

        {/* impostos */}

        <div className="flex flex-col gap-3">
          <Input
            className="grid grid-cols-2"
            min={0}
            id="product-value"
            type="number"
            placeholder="Insira o Preço Lista, conforme Portal do Fabricante"
            onChange={({ target }) => setProductValue(target.value)}
          />
          <Input
            min={0}
            id="product-value"
            type="number"
            placeholder="Insira o Preço Lista, conforme Portal do Fabricante"
            onChange={({ target }) => setProductValue(target.value)}
          />
          <Input
            min={0}
            id="product-value"
            type="number"
            placeholder="Insira o Preço Lista, conforme Portal do Fabricante"
            onChange={({ target }) => setProductValue(target.value)}
          />
        </div>

        {/* <Separator orientation="horizontal" /> */}
      </div>

      <div className="flex items-center justify-around">
        <Card>
          <CardHeader>
            <CardTitle>Tabela Padrão</CardTitle>
            <CardDescription>x% de lucro</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tabela Revenda</CardTitle>
            <CardDescription>x% de lucro</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tabela Fabricante</CardTitle>
            <CardDescription>x% de lucro</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

// Informa com popover (?) onde pegar o preço lista
//    dependendo do fabricante
