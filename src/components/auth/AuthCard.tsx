"use client";

import React from "react";
import Link from "next/link";
import { getSupabaseClient } from "@/src/lib/supabaseClient";
import Button from "@/src/components/button";
import { Mail, Lock, Apple, Loader2, ArrowRight, UserPlus, LogIn } from "lucide-react";
import { cn } from "@/src/lib/utils";

type AuthMode = "login" | "signup";

interface AuthCardProps {
  defaultMode?: AuthMode;
  className?: string;
  onSuccessRedirect?: string;
}

export default function AuthCard({
  defaultMode = "login",
  className,
  onSuccessRedirect = "/",
}: AuthCardProps) {
  const supabase = React.useMemo(() => getSupabaseClient(), []);
  const mode: AuthMode = defaultMode;
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const title = mode === "login" ? "Welcome back" : "Create your account";
  const subtitle =
    mode === "login"
      ? "Log in to continue to your dashboard"
      : "Start your journey in minutes";

  async function handleEmailPassword(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      if (mode === "login") {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      } else {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
      }
      window.location.assign(onSuccessRedirect);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong";
      setError(message);
    } finally {
      setLoading(false);
    }
  }

  async function oauth(provider: "google" | "apple") {
    setError(null);
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: typeof window !== "undefined" ? `${window.location.origin}/auth/callback` : undefined,
        },
      });
      if (error) throw error;
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "OAuth error";
      setError(message);
      setLoading(false);
    }
  }

  return (
    <div className={cn("w-full max-w-[520px] mx-auto p-4 sm:p-6", className)}>
      <div className="bg-white dark:bg-[#141414] border border-gray-200 dark:border-white/10 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden w-full">
        <div className="p-6 sm:p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold tracking-tight animated-gradient-text bg-clip-text text-transparent">
              {title}
            </h1>
            <p className="mt-2 text-foreground-80">{subtitle}</p>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-6 bg-gray-100 dark:bg-gray-900 p-1 rounded-full">
            <Link
              href="/login"
              className={cn(
                "py-2 rounded-full text-sm font-semibold transition-all text-center",
                mode === "login"
                  ? "bg-white dark:bg-gray-800 shadow text-foreground"
                  : "text-foreground-80"
              )}
            >
              <span className="inline-flex items-center justify-center gap-2 w-full">
                <LogIn size={16} /> Login
              </span>
            </Link>
            <Link
              href="/signup"
              className={cn(
                "py-2 rounded-full text-sm font-semibold transition-all text-center",
                mode === "signup"
                  ? "bg-white dark:bg-gray-800 shadow text-foreground"
                  : "text-foreground-80"
              )}
            >
              <span className="inline-flex items-center justify-center gap-2 w-full">
                <UserPlus size={16} /> Sign up
              </span>
            </Link>
          </div>

          {error && (
            <div className="mb-4 text-sm text-red-600 bg-red-50 dark:bg-red-900/20 border border-red-200/50 dark:border-red-800/50 rounded-xl px-4 py-2">
              {error}
            </div>
          )}

          <form onSubmit={handleEmailPassword} className="space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="text-foreground-50" size={18} />
              </div>
              <input
                type="email"
                inputMode="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-12 pl-10 pr-4 rounded-xl border border-gray-300 dark:border-gray-800/60 bg-white dark:bg-black/30 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50"
              />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="text-foreground-50" size={18} />
              </div>
              <input
                type="password"
                autoComplete={mode === "login" ? "current-password" : "new-password"}
                required
                placeholder={mode === "login" ? "Your password" : "Create a password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-12 pl-10 pr-4 rounded-xl border border-gray-300 dark:border-gray-800/60 bg-white dark:bg-black/30 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50"
              />
            </div>
            <Button type="submit" disabled={loading} className="w-full">
              <span className="inline-flex items-center gap-2">
                {loading ? (
                  <Loader2 className="animate-spin" size={18} />
                ) : mode === "login" ? (
                  <LogIn size={18} />
                ) : (
                  <UserPlus size={18} />
                )}
                {mode === "login" ? "Log in" : "Create account"}
                {!loading && <ArrowRight size={18} />}
              </span>
            </Button>
          </form>

          <div className="my-6 relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-200/60 dark:border-gray-800/60" />
            </div>
            <div className="relative flex justify-center">
              <span className="px-3 text-sm text-foreground-50 bg-white dark:bg-[#141414] rounded-full">
                Or continue with
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              onClick={() => oauth("google")}
              disabled={loading}
              className="h-11 rounded-lg border border-[#dadce0] bg-white hover:bg-[#f7f8f8] text-[#3c4043] transition-colors"
            >
              <span className="inline-flex items-center justify-center gap-3 w-full font-medium">
                {/* Google G logo */}
                <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
                  <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303C33.62 32.91 29.17 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.869 6.053 29.706 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.651-.389-3.917z"/>
                  <path fill="#FF3D00" d="M6.306 14.691l6.571 4.818C14.57 16.021 18.916 14 24 14c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.869 6.053 29.706 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>
                  <path fill="#4CAF50" d="M24 44c5.113 0 9.8-1.958 13.285-5.162l-6.147-5.197C29.11 35.091 26.676 36 24 36c-5.145 0-9.574-3.063-11.289-7.441l-6.533 5.034C9.495 39.556 16.227 44 24 44z"/>
                  <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-1.205 3.458-3.781 6.194-7.218 7.641.002-.001 6.147 5.197 6.147 5.197C36.167 38.558 40 31.333 40 24c0-1.341-.138-2.651-.389-3.917z"/>
                </svg>
                Sign in with Google
              </span>
            </button>
            <button
              onClick={() => oauth("apple")}
              disabled={loading}
              className="h-11 rounded-lg bg-black text-white hover:bg-black/90 transition-colors"
            >
              <span className="inline-flex items-center justify-center gap-3 w-full font-medium">
                <Apple size={18} /> Sign in with Apple
              </span>
            </button>
          </div>
        </div>
      </div>
      <p className="text-center text-xs text-foreground-50 mt-4">
        Protected by industry‑standard security. By continuing you agree to our terms.
      </p>
    </div>
  );
}


