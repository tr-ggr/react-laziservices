import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tvgptumyknvjizdzgjjz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2Z3B0dW15a252aml6ZHpnamp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUzMTg2MDcsImV4cCI6MjAyMDg5NDYwN30.26kepa7iAZBerMSES3DfOtVfyG0FIXrtAKK7JDcVyBo";
export const supabase = createClient(supabaseUrl, supabaseKey);
