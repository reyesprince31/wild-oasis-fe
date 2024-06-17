import { createClient } from "@supabase/supabase-js";

function getEnvVar(key: string): string {
    const value = process.env[key];
    if (!value) {
        throw new Error(`Environment variable ${key} is not set`);
    }
    return value;
}

const supabaseUrl = getEnvVar('SUPABASE_URL');
const supabaseKey = getEnvVar('SUPABASE_KEY');

export const supabase = createClient(supabaseUrl, supabaseKey);