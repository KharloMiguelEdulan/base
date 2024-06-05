import { createClient } from "@supabase/supabase-js";

const base_url = "https://hwndaladjuodqcpcxfwq.supabase.co";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh3bmRhbGFkanVvZHFjcGN4ZndxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc1NzUxMTQsImV4cCI6MjAzMzE1MTExNH0.OINvn6DncgMVCy0caqKaqsrnd7OHsIV4ESijRp9mtcM";
const supabase = createClient(base_url, key);

export default supabase;
