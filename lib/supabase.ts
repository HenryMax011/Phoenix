/**
 * Supabase client stub.
 * TODO: definir NEXT_PUBLIC_SUPABASE_URL e NEXT_PUBLIC_SUPABASE_ANON_KEY
 * e descomentar o client real.
 *
 * import { createClient } from "@supabase/supabase-js";
 * export const supabase = createClient(url, key);
 */

export const supabase = null;

export const isSupabaseReady = Boolean(
  process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
);
