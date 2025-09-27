"use client";

import { useEffect } from "react";
import { getSupabaseClient } from "@/src/lib/supabaseClient";

export default function AuthCallbackPage() {
  useEffect(() => {
    const supabase = getSupabaseClient();
    // touch the client to avoid unused var; also optionally read current session
    supabase.auth.getSession().finally(() => {
      const timer = setTimeout(() => {
        const target = sessionStorage.getItem("post_auth_redirect") || "/";
        window.location.replace(target);
      }, 300);
      return () => clearTimeout(timer);
    });
  }, []);

  return (
    <div className="min-h-[calc(100vh-160px)] flex items-center justify-center">
      <div className="text-center">
        <p className="text-foreground-80">Completing sign in…</p>
      </div>
    </div>
  );
}


