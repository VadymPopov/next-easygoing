"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Link from "next/link";
import ThemeSwitcher from "./theme-switcher";

export default function AppBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ["Listo", "Nums"];
  const pathname = usePathname();

  return (
    <>
      <Navbar
        shouldHideOnScroll
        className='hidden sm:block sm:mt-5 sm:rounded-full sm:border-gray-400 sm:border-2 sm:w-[600px] lg:w-[800px] sm:mx-auto sm:drop-shadow-xl'>
        <NavbarContent>
          <NavbarBrand className='justify-end sm:justify-start'>
            <span className='font-bold text-inherit'>EasyGoing</span>
          </NavbarBrand>
        </NavbarContent>
        <ThemeSwitcher />

        <NavbarContent className='hidden sm:flex gap-4' justify='center'>
          {menuItems.map((item, index) => (
            <NavbarItem
              key={`${item}-${index}`}
              isActive={
                pathname === `/${item.toLocaleLowerCase()}` ? true : false
              }>
              <Link
                href={`/${item.toLocaleLowerCase()}`}
                className={clsx(
                  pathname === `/${item.toLocaleLowerCase()}` &&
                    "text-blue-500",
                  "hover:text-secondary transition-colors"
                )}>
                {item}
              </Link>
            </NavbarItem>
          ))}
          <NavbarItem isActive={pathname.includes("/netflix&chill")}>
            <Link
              href='/netflix&chill/oracle'
              className={clsx(
                pathname.includes("/netflix&chill") && "text-blue-500",
                "hover:text-secondary transition-colors"
              )}>
              Netflix&Chill
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      <Navbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className='sm:hidden'>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className='sm:hidden'
          />
          <NavbarBrand className='justify-end'>
            <Link
              href='/'
              aria-current='page'
              onClick={() => setIsMenuOpen(false)}
              className='font-bold text-inherit'>
              EasyGoing
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarMenu className='flex justify-start items-center gap-6 pt-8'>
          {menuItems.map((item, index) => (
            <NavbarMenuItem
              key={`${item}-${index}`}
              isActive={
                pathname === `/${item.toLocaleLowerCase()}` ? true : false
              }>
              <Link
                href={`/${item.toLocaleLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className={clsx(
                  pathname === `/${item.toLocaleLowerCase()}` &&
                    "text-blue-500",
                  "hover:text-secondary transition-colors text-2xl"
                )}>
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem isActive={pathname.includes("/netflix&chill")}>
            <Link
              href='/netflix&chill/oracle'
              onClick={() => setIsMenuOpen(false)}
              className={clsx(
                pathname.includes("/netflix&chill") && "text-blue-500",
                "hover:text-secondary transition-colors text-2xl"
              )}>
              Netflix&Chill
            </Link>
          </NavbarMenuItem>
          <ThemeSwitcher />
        </NavbarMenu>
      </Navbar>
    </>
  );
}
