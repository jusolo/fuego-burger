"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { Flame } from "lucide-react";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Combos",
    href: "#combos",
    description: "Nuestras deliciosas combinaciones a un precio especial.",
  },
  {
    title: "Hamburguesas",
    href: "#hamburguesas",
    description: "Las mejores hamburguesas de la ciudad, con sabores únicos.",
  },
  {
    title: "Acompañantes",
    href: "#acompanantes",
    description:
      "Complementa tu hamburguesa con nuestros deliciosos acompañantes.",
  },
];

const Nav: React.FC = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Inicio</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-red-500 to-red-900 p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Flame className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Fuego Burguer
                    </div>
                    <p className="text-sm leading-tight text-white/90">
                      De barrio pero elegante. Las hamburguesas más groceras y
                      ardientes de la ciudad.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="#order-form" title="Ordena Ahora">
                Haz tu pedido en línea y disfruta de nuestras deliciosas
                hamburguesas.
              </ListItem>
              <ListItem href="#ubicacion" title="Ubicación">
                Encuentra nuestras sucursales y visítanos.
              </ListItem>
              <ListItem href="#contacto" title="Contacto">
                ¿Tienes preguntas? Contáctanos.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Menú</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#order-form" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Ordenar
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Nav;
