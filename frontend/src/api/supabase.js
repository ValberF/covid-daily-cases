import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gxqdposfelwdynnkupnn.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd4cWRwb3NmZWx3ZHlubmt1cG5uIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTQzNzUzMjMsImV4cCI6MTk2OTk1MTMyM30.Zp3NF0UCofQhCY5k12ZaqiQH4qygybDx0_jMB1Kerh4'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;