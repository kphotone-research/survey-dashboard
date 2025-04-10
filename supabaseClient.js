import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hpxcfhohoyjxyhfdxqlr.supabase.co'; // Your Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhweGNmaG9ob3lqeHloZmR4cWxyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQyMTU0ODcsImV4cCI6MjA1OTc5MTQ4N30.S4EBc-WSIainf4En42v2TBHs-azE5-AVBOFGamxOCz4'; // Your Supabase API Key

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

