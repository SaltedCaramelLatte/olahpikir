import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fdwmhvhjcvsfspwndtfz.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkd21odmhqY3ZzZnNwd25kdGZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA3MTkxNDYsImV4cCI6MjA0NjI5NTE0Nn0.y_gqoRhbvSAuZPjpXEu8nhup9HALu3xPIW4LjkRtnIE";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
