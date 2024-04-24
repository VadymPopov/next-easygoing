"use client";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";

export default function MovieNavbar() {
  const pathname = usePathname();
  const t = useTranslations("MovieNavbar");
  const locale = useLocale();

  return (
    <Breadcrumbs
      hideSeparator
      classNames={{
        list: "gap-2",
      }}
      className='mb-6'
      itemClasses={{
        item: [
          "px-2 py-0.5 border-small border-default-400 rounded-small",
          "data-[current=true]:border-default-800 data-[current=true]:bg-foreground data-[current=true]:text-background transition-colors",
          "data-[disabled=true]:border-default-400 data-[disabled=true]:bg-default-100",
        ],
      }}>
      <BreadcrumbItem
        isCurrent={pathname === `/${locale}/netflix&chill/oracle`}>
        <Link href={`/${locale}/netflix&chill/oracle`}>{t("oracle")}</Link>
      </BreadcrumbItem>
      <BreadcrumbItem
        isCurrent={pathname === `/${locale}/netflix&chill/top-rated`}>
        <Link href={`/${locale}/netflix&chill/top-rated`}>{t("topRated")}</Link>
      </BreadcrumbItem>
    </Breadcrumbs>
  );
}
