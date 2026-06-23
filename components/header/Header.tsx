"use client";

import { useState } from "react";

import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-4 border m-3 rounded-md">
      <div className="flex justify-between">
        <span className="text-3xl">AlgoLens</span>
        <div className="">
          <Button
            className="cursor-pointer p-4"
            variant="outline"
            size="icon"
            aria-label={isOpen ? "Close Menu Button" : "Open Menu Button"}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
    </div>
  );
}
