import { createClient } from "@supabase/supabase-js";

const base_url = "https://xjfqxvfybfzvygwalfdn.supabase.co";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhqZnF4dmZ5YmZ6dnlnd2FsZmRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY5OTg5NzYsImV4cCI6MjAzMjU3NDk3Nn0.Q9Z1TfNVaqJHCZ8nokRhBmvFcaIIVQqj1MR6DD7VMU4";
const supabase = createClient(base_url, key);

export default supabase;
