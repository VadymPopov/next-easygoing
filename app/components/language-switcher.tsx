"use client";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/navigation";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import clsx from "clsx";
import { GrLanguage } from "react-icons/gr";

const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("Languages");

  const languages = [
    { code: "en", name: t("en") },
    { code: "es", name: t("es") },
    { code: "uk", name: t("uk") },
  ];

  const handleLocaleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant='light' radius='full' size='sm'>
          <GrLanguage size={24} />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label='language picker'>
        {languages.map((lang) => (
          <DropdownItem
            key={lang.code}
            value={lang.code}
            onPress={() => handleLocaleChange(lang.code)}
            className={clsx(lang.code === locale && "text-primary")}>
            {lang.name}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default LanguageSwitcher;
