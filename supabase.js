const SUPABASE_URL = "https://bvajbonwibcrxfmgnngl.supabase.co";
const SUPABASE_KEY = "sb_publishable_xHgY7TdwoEB_4e8s8SWvYQ_KSWDE-Ht";

window.supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

console.log("Supabase connected");
console.log(window.supabaseClient);