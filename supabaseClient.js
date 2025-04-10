import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;  // Use environment variable for Supabase URL
const supabaseKey = process.env.SUPABASE_KEY;  // Use environment variable for Supabase Key

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
