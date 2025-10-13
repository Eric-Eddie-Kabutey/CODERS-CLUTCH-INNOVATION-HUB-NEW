"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Menu item type
interface MenuItem {
  title: string;
  url: string;
  description?: string;
  items?: MenuItem[];
}

// ✅ Updated menu items
const navMenuItems: MenuItem[] = [
  {
    title: "About",
    url: "/about",
    items: [
      { title: "About", url: "/about" },
      { title: "Team", url: "/#" },
    ],
  },
  {
    title: "Our Pillars",
    url: "",
    items: [
  { title: "CapitalFACTORY", url: "/our-pillers/capitalFactory" },
  { title: "CodeFACTORY", url: "/our-pillers/code-factory" },
  { title: "DigitalFACTORY", url: "/our-pillers/digitalFactory" },
  { title: "TalentFACTORY", url: "/our-pillers/talentFactory" },
  ],
  },
  { title: "Services", url: "/services" },
  {
    title: "Insights",
    url: "/insights",
    items: [
      { title: "News", url: "/insights" },
      { title: "Case Study", url: "/case-studies" },
      { title: "Tools", url: "/tools" }, // ✅ Added Tools
    ],
  },
  { title: "Contact", url: "/contact" },
];

// Default logo
const defaultLogo = {
  url: "/",
  src: "/BlueSpace-BIH-1.png",
  alt: "Bluespace Innovation Hub Logo",
};

// ✅ Navbar Component
const NewNavbar: React.FC = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-[1200px] rounded-xl border bg-white shadow-md">
      <div className="flex items-center justify-between h-20 px-6 md:px-10 lg:px-12">
        {/* Logo */}
        <Link href={defaultLogo.url} className="flex items-center">
          <Image
            src={defaultLogo.src}
            alt={defaultLogo.alt}
            width={140}
            height={48}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <NavigationMenu className="hidden lg:flex flex-grow justify-center">
          <NavigationMenuList className="flex space-x-6">
            {navMenuItems.map((item) => (
              <React.Fragment key={item.title}>
                {renderDesktopMenuItem(item)}
              </React.Fragment>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileOpen((prev) => !prev)}
            className="bg-green-700 text-white px-4 py-2 rounded-md font-medium transition-all hover:bg-green-800"
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
          >
            {isMobileOpen ? "CLOSE" : "MENU"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={cn(
          "lg:hidden absolute top-20 right-4 w-[85%] max-w-sm bg-green-600 text-white rounded-xl shadow-xl overflow-hidden transform origin-top-right transition-all duration-300 ease-in-out",
          isMobileOpen ? "scale-100 opacity-100 py-4" : "scale-0 opacity-0 py-0"
        )}
      >
        <div className="flex flex-col space-y-3 px-4">
          {navMenuItems.map((item) => renderMobileMenuItem(item))}
        </div>
      </div>
    </header>
  );
};

export default NewNavbar;

//
// ---------- Helper Components ----------
//

const renderDesktopMenuItem = (item: MenuItem) => {
  const linkClassName =
    "text-neutral-700 hover:text-blue-600 transition-colors duration-150 text-sm font-medium";

  if (item.items && item.items.length > 0) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger
          className={cn(navigationMenuTriggerStyle(), "bg-transparent", linkClassName)}
        >
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[240px] md:w-[260px] p-2 bg-white rounded-md shadow-md">
            {item.items.map((subItem) => (
              <ListItem key={subItem.title} title={subItem.title} href={subItem.url} />
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className={cn(
          navigationMenuTriggerStyle(),
          "bg-transparent",
          linkClassName,
          "px-2 py-1"
        )}
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const ListItem = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & { title: string; href: string }
>(({ className, title, href, ...props }, ref) => {
  return (
    <li>
      <Link
        href={href}
        ref={ref}
        className={cn(
          "block px-2 py-2 text-sm font-medium transition-colors hover:bg-neutral-800 hover:text-white rounded-md",
          className
        )}
        {...props}
      >
        {title}
      </Link>
    </li>
  );
});
ListItem.displayName = "ListItem";

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items && item.items.length > 0) {
    return (
      <Accordion type="single" collapsible className="w-full" key={item.title}>
        <AccordionItem value={item.title} className="border-b-0">
          <AccordionTrigger className="py-2.5 text-sm font-medium hover:no-underline">
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="pl-2 pb-0">
            <div className="flex flex-col space-y-1 mt-1">
              {item.items.map((subItem) => (
                <Link
                  key={subItem.title}
                  href={subItem.url}
                  className="block py-2 text-sm hover:text-green-200 transition"
                >
                  {subItem.title}
                </Link>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  }

  return (
    <Link
      key={item.title}
      href={item.url}
      className="block py-2 text-sm hover:text-green-200 transition"
    >
      {item.title}
    </Link>
  );
};
