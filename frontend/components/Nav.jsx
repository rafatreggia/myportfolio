import React from "react";
import {
  Activity,
  Code,
  Component,
  ContactRound,
  Home,
  HomeIcon,
  Linkedin,
  Mail,
  Package,
  ScrollText,
  Smartphone,
  SunMoon,
} from "lucide-react";

import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock";

const Nav = () => {
  const data = [
    {
      title: "Home",
      icon: (
        <Home className="h-full w-full text-neutral-600 dark:text-neutral-300" />
      ),
      href: "/#hero",
    },
    {
      title: "Tecnologías",
      icon: (
        <Code className="h-full w-full text-neutral-600 dark:text-neutral-300" />
      ),
      href: "/#tecnologias",
    },
    {
      title: "Sobre Mi",
      icon: (
        <ContactRound className="h-full w-full text-neutral-600 dark:text-neutral-300" />
      ),
      href: "/#sobreMi",
    },
    {
      title: "Contacto",
      icon: (
        <Smartphone className="h-full w-full text-neutral-600 dark:text-neutral-300" />
      ),
      href: "/#formulario",
    },
    {
      title: "Redes Sociales",
      icon: (
        <Linkedin className="h-full w-full text-neutral-600 dark:text-neutral-300" />
      ),
      href: "/#footer",
    },
  ];
  return (
    <div className=" fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 transform items-center justify-center w-full  p-4 text-white  ">
      <div className="flex items-center justify-center">
        <Dock className="items-end pb-3">
          {data.map((item, idx) => (
            <DockItem
              key={idx}
              className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800"
            >
              <DockLabel>{item.title}</DockLabel>
              <DockIcon>
                <a href={item.href}>{item.icon}</a>
              </DockIcon>
            </DockItem>
          ))}
        </Dock>
      </div>
    </div>
  );
};

export default Nav;
