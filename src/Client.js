import { createClient } from "@supabase/supabase-js";

const base_url = "https://qbzvonmnvtjghuixogtn.supabase.co";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFienZvbm1udnRqZ2h1aXhvZ3RuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc1NzkxNTYsImV4cCI6MjAzMzE1NTE1Nn0.67WWRY4RQ2bYFjEjBYmHmACR95WjCq47n4yj94tK1PA";
const supabase = createClient(base_url, key);

export default supabase;
