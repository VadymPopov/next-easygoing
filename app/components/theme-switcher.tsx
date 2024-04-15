"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/button";
import { GiPill } from "react-icons/gi";

export default function ThemeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  if (resolvedTheme === "light") {
    return (
      <Button
        onClick={() => {
          setTheme("dark");
        }}
        variant='light'
        radius='full'
        size='sm'>
        <GiPill color='#dc2626' size={30} />
      </Button>
    );
  }
  if (resolvedTheme === "dark") {
    return (
      <Button
        onClick={() => {
          setTheme("light");
        }}
        variant='light'
        radius='full'
        size='sm'>
        <GiPill color='#2563eb' size={30} />
      </Button>
    );
  }
}
