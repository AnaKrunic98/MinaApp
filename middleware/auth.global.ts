/* export default defineNuxtRouteMiddleware(async (to, from) => {
    const supabase = useSupabaseClient()

    const { data: { user } } = await supabase.auth.getUser();

    // Store user
    useState('user', () => user);
}) */

export default defineNuxtRouteMiddleware(async (to, from) => {
    const supabase = useSupabaseClient();
    const { data: { user } } = await supabase.auth.getUser();
  
    // Provera je li ruta u nizu za koje je potreban prijavljeni korisnik
    const protectedRoutes = ['/MoodForm', '/Account', '/', '/User', "/List"]; 
    if (protectedRoutes.includes(to.path) && !user) {
      return '/login'; // Redirekcija na '/login' ako korisnik nije prijavljen
    }

    useState('user', () => user);
  });