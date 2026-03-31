const { createClient } = require('@supabase/supabase-js')

const supabase = createClient(
'URL_DO_SUPABASE',
'CHAVE_DO_SUPABASE'
)

module.exports = supabase