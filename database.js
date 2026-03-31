const { createClient } = require('@supabase/supabase-js')

const supabase = createClient(
'https://jmkyimzpvklzmdcnbgax.supabase.co',
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impta3lpbXpwdmtsem1kY25iZ2F4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ5NzY2OTUsImV4cCI6MjA5MDU1MjY5NX0.DfofAqC6rouglVPjxvgR0_LbDM6a1DPt3Rg_zkQFZJ0'
)

module.exports = supabase
