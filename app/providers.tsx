"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "../lib/store";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "react-hot-toast";

export function Providers({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return (
    <NextUIProvider>
      <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
        <Provider store={storeRef.current}>
          <PersistGate loading={null} persistor={storeRef.current.__persistor}>
            {children}
          </PersistGate>
        </Provider>
      </ThemeProvider>
      <Toaster />
    </NextUIProvider>
  );
}
