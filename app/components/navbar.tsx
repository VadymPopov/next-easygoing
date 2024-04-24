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
import LanguageSwitcher from "./language-switcher";
import { useLocale, useTranslations } from "next-intl";

export default function AppBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("AppBar");
  const menuItems = [
    { path: "listo", name: t("listo") },
    { path: "nums", name: t("nums") },
  ];
  const pathname = usePathname();
  const locale = useLocale();

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
        <LanguageSwitcher />

        <NavbarContent className='hidden sm:flex gap-4' justify='center'>
          {menuItems.map(({ path, name }, index) => (
            <NavbarItem
              key={`${path}-${index}`}
              isActive={pathname === `/${locale}/${path.toLocaleLowerCase()}`}>
              <Link
                href={`/${locale}/${path.toLocaleLowerCase()}`}
                className={clsx(
                  pathname === `/${locale}/${path.toLocaleLowerCase()}` &&
                    "text-primary hover:text-primary",
                  "hover:text-secondary transition-colors"
                )}>
                {name}
              </Link>
            </NavbarItem>
          ))}
          <NavbarItem isActive={pathname.includes("/netflix&chill")}>
            <Link
              href={`/${locale}/netflix&chill/oracle`}
              className={clsx(
                pathname.includes("/netflix&chill") &&
                  "text-primary hover:text-primary",
                "hover:text-secondary transition-colors"
              )}>
              {t("movies")}
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
              href={`/${locale}/listo`}
              aria-current='page'
              onClick={() => setIsMenuOpen(false)}
              className='font-bold text-inherit'>
              EasyGoing
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarMenu className='flex justify-start items-center gap-6 pt-8'>
          {menuItems.map(({ path, name }, index) => (
            <NavbarMenuItem
              key={`${path}-${index}`}
              isActive={pathname === `/${locale}/${path.toLocaleLowerCase()}`}>
              <Link
                href={`/${locale}/${path.toLocaleLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className={clsx(
                  pathname === `/${locale}/${path.toLocaleLowerCase()}` &&
                    "text-primary hover:text-primary",
                  "hover:text-secondary transition-colors text-2xl"
                )}>
                {name}
              </Link>
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem isActive={pathname.includes("/netflix&chill")}>
            <Link
              href={`/${locale}/netflix&chill/oracle`}
              onClick={() => setIsMenuOpen(false)}
              className={clsx(
                pathname.includes("/netflix&chill") &&
                  "text-primary hover:text-primary",
                "hover:text-secondary transition-colors text-2xl"
              )}>
              {t("movies")}
            </Link>
          </NavbarMenuItem>
          <ThemeSwitcher />
          <LanguageSwitcher />
        </NavbarMenu>
      </Navbar>
    </>
  );
}
