import { createClient } from "@supabase/supabase-js";

const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY as string;
const projectURL = import.meta.env.VITE_PROJECT_URL as string;
export const supabaseService = createClient(projectURL, supabaseKey);
