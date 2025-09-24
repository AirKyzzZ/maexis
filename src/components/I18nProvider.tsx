"use client";
import React from 'react'
import '@/src/i18n'

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  // i18n is initialized by side-effect; just render children
  return <>{children}</>
}


