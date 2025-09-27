"use client";

import AuthCard from "@/src/components/auth/AuthCard";

export const dynamic = "force-dynamic";

export default function LoginPage() {
  return (
    <div className="min-h-[calc(100vh-160px)] pt-28 md:pt-36 flex items-start md:items-center justify-center px-4">
      <AuthCard defaultMode="login" onSuccessRedirect="/" />
    </div>
  );
}


