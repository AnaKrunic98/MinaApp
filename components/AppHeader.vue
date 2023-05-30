<template>
    <div>
        <button
        @click="logout"
        class="text-sm flex no-underline text-black hover:text-zinc-600"
      >
        <svg  class="w-5 mr-1" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"></path>
        </svg>
        Log out
        
      </button>
    </div>
</template>

<script setup>
const supabase = useSupabaseAuthClient();

const logout = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error(error);
    return;
  }

  await navigateTo('/login');
};

</script>

<style>

</style>