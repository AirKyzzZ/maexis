"use client";

import { createBrowserClient } from "@supabase/ssr";

let supabaseClientSingleton: ReturnType<typeof createBrowserClient> | null = null;

export function getSupabaseClient() {
  if (supabaseClientSingleton) return supabaseClientSingleton;

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    if (typeof window !== "undefined") {
      throw new Error(
        "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY. Add them to your environment."
      );
    }
    const fakeClient = new Proxy(
      {},
      {
        get() {
          throw new Error(
            "Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY."
          );
        },
      }
    ) as unknown as ReturnType<typeof createBrowserClient>;
    supabaseClientSingleton = fakeClient;
    return fakeClient;
  }

  supabaseClientSingleton = createBrowserClient(supabaseUrl, supabaseAnonKey);

  return supabaseClientSingleton;
}


