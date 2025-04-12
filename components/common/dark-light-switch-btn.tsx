"use client";

import { useEffect, useState } from "react";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { Button } from "../ui";

export const DarkLightSwitchBtn = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && (
        <Button
          variant="outline"
          size="icon"
          className="z-[999] cursor-pointer rounded-full p-2"
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        >
          {resolvedTheme === "dark" ? (
            <IconSun className="h-7 w-7" />
          ) : (
            <IconMoon className="h-7 w-7" />
          )}
        </Button>
      )}
    </>
  );
};
