import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client using environment variables
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Export the client to use it in other parts of your app
export default supabase;
