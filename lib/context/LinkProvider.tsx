"use client";

import { createContext, useContext, ReactNode } from 'react';
import { Link } from '@/lib/types';

const LinkContext = createContext<Link | null>(null);

export function LinkProvider({ children, link }: { children: ReactNode; link: Link; }) {
  return <LinkContext.Provider value={link}>{children}</LinkContext.Provider>;
}

export function useLink() {
  const context = useContext(LinkContext);
  if (!context) {
    throw new Error('useLink must be used within a LinkProvider');
  }
  return context;
}