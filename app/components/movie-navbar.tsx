"use client";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MovieNavbar() {
  const pathname = usePathname();

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
      <BreadcrumbItem isCurrent={pathname === "/netflix&chill/oracle"}>
        <Link href='/netflix&chill/oracle'>Oracle&apos;s choice</Link>
      </BreadcrumbItem>
      <BreadcrumbItem isCurrent={pathname === "/netflix&chill/top-rated"}>
        <Link href='/netflix&chill/top-rated'>Top Rated</Link>
      </BreadcrumbItem>
    </Breadcrumbs>
  );
}
