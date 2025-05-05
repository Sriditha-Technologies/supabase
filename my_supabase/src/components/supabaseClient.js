import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wuzeygzmjqvkczkryzgk.supabase.co' // Replace with your Supabase Project URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1emV5Z3ptanF2a2N6a3J5emdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYxNzM3MjgsImV4cCI6MjA2MTc0OTcyOH0.7CXtUH3oaegDZXpMgDgpigd-rk9dLMu_uQx06SGa6R8' // Replace with your Supabase Public API Key (anon)

export const supabase = createClient('https://wuzeygzmjqvkczkryzgk.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1emV5Z3ptanF2a2N6a3J5emdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYxNzM3MjgsImV4cCI6MjA2MTc0OTcyOH0.7CXtUH3oaegDZXpMgDgpigd-rk9dLMu_uQx06SGa6R8')