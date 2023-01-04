import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://rlrwxfxqexgauitzipil.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJscnd4ZnhxZXhnYXVpdHppcGlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjU3NjQ1MDYsImV4cCI6MTk4MTM0MDUwNn0.cII8u3y0VKqsM7qKdRf8MKOFk3I6svGoQC9OSRMPFFg")

export default supabase