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
import { DrumstickIcon } from "lucide-react";

const Products: { title: string; href: string; description: string }[] = [
  {
    title: "Python Development",
    href: "/docs/primitives/alert-dialog",
    description:
      "Our team specializes in developing custom indicators and trading systems using Python.",
  },
  {
    title: "Optimization",
    href: "/docs/primitives/hover-card",
    description:
      "Optimization refers to the process of fine-tuning trading strategies to improve their performance based on historical data.",
  },
  {
    title: "Metatrader Development",
    href: "/docs/primitives/progress",
    description:
      "Our team specializes in leveraging MetaTrader 4 or 5 to develop custom indicators and trading systems tailored to your needs.",
  },
  {
    title: "AFL Development",
    href: "/docs/primitives/scroll-area",
    description:
      "We use AFL (AmiBroker Formula Language) to create custom indicators and trading systems.",
  },
  {
    title: "Pinescript Development",
    href: "/docs/primitives/tabs",
    description:
      "Pine Script development empowers traders to customize their trading experience",
  },
  {
    title: "Automation",
    href: "/docs/primitives/tooltip",
    description:
      "Automation refers to the ability to execute trading strategies without manual intervention. It allows users to automatically execute buy and sell orders based on predefined trading rules.",
  },
];
const Portfolios: { title: string; href: string; description: string }[] = [
  {
    title: "Ami broker",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Trading view",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Python",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "MetrA TRADER",
    href: "/docs/primitives/scroll-area",
    description:
      "We use AFL (AmiBroker Formula Language) to create custom indicators and trading systems.",
  },
  {
    title: "eXCEL",
    href: "/docs/primitives/tabs",
    description:
      "Pine Script development empowers traders to customize their trading experience",
  },
];
export function StaticNav({ color }: any) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
      <NavigationMenuItem>
          <Link href={'/'} className={`text-${color} hover:text-${color} inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors`}>Home</Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={`text-${color} hover:text-${color}`}><Link href={'/our-products'}>Our Porfolio</Link></NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {Portfolios.map((portfolio) => (
                <ListItem
                  key={portfolio.title}
                  title={portfolio.title}
                  href={portfolio.href}
                >
                  {portfolio.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={`text-${color} hover:text-${color}`}><Link href={'/our-portfolio'}>Our Products</Link></NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {Products.map((product) => (
                <ListItem
                  key={product?.title}
                  title={product?.title}
                  href={product?.href}
                >
                  {`${product?.description.slice(0, 60)}...`}{" "}
                  <Link
                    href={"#"}
                    className="text-xs text-yellow-700 hover:text-blue-500 hover:underline"
                  >
                    Request A Quote
                  </Link>
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href={'/about'} className={`text-${color} hover:text-${color} inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors`}>Why us</Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href={'/why-us'} className={`text-${color} hover:text-${color} inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors`}>About Us</Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href={'/contact'} className={`text-${color} hover:text-${color} inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors`}>Contact Us</Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

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
          <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
