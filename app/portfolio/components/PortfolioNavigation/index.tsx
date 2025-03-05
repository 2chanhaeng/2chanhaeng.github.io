"use client";

import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import LinkItem from "./LinkItem";
import Link from "next/link";

export default function PortfolioNavigation() {
  return (
    <header className="bg-bg sticky top-0 left-0 right-0 z-10 flex justify-between items-center p-4 col-span-full h-fit">
      <Link
        href="/portfolio"
        className="text-2xl font-extrabold text-fg visited:opacity-100 after:content-['LCH'] sm:after:content-['Lee_Chan_Haeng']"
      />
      <NavigationMenu>
        <NavigationMenuList>
          <LinkItem href="#about" text="About" />
          <LinkItem href="#tech-stack" text="Tech Stack" />
          <LinkItem href="#projects" text="Projects" />
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
