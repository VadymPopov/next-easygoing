"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/button";
import { IoMoon, IoSunny } from "react-icons/io5";

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
        size='sm'
        color='primary'>
        <IoMoon color='primary' size={20} />
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
        size='sm'
        color='primary'>
        <IoSunny color='primary' size={20} />
      </Button>
    );
  }
}
