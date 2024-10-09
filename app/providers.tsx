"use client";

import { createContext, useContext } from "react";
import { SessionProvider } from "next-auth/react";

import { SelectLink } from "../db/schema";

const LinkContext = createContext<SelectLink | null>(null);

interface ProviderProps {
  children: React.ReactNode;
}

export function LinkProvider({
  children,
  link,
}: {
  children: React.ReactNode;
  link: SelectLink;
}) {
  return <LinkContext.Provider value={link}>{children}</LinkContext.Provider>;
}

export function SessionProviders({ children }: ProviderProps) {
  return <SessionProvider>{children}</SessionProvider>;
}

export function useLink() {
  const context = useContext(LinkContext);

  if (!context) {
    throw new Error("Must be used withing a Link Provider.");
  }

  return context;
}
