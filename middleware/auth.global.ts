export default defineNuxtRouteMiddleware(async (to, from) => {
    const supabase = useSupabaseClient()

    const { data: { user } } = await supabase.auth.getUser();

    // Store user
    useState('user', () => user);
})