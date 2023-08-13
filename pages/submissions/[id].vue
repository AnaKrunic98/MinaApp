<template>
  <div class="mt-10 relative overflow-visible shadow-md">
    <table class="w-full text-sm text-left text-gray-500">
      <thead class="text-xs text-gray-500 uppercase border-t">
        <tr class="text-black border-b dark:border-gray-900">
          <th scope="col" class="pl-2">Id</th>
          <th scope="col">created_at</th>
        </tr>
      </thead>
      <tbody>
        
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { reactive, onMounted } from 'vue'

const supabase = useSupabaseClient(); 
const { id } = useRoute().params;

const userSubmissions = reactive({
  id: null,
  createdat: null,
});

async function fetchData(userId) {
  try {
    const { data, error } = await supabase
      .from('submissions')
      .select('user_id,created_at')
      .eq('user_id', userId);

    if (error) {
      console.error('An error occurred:', error.message);
    } else {
      console.log('User data:', data);
    }
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
}

onMounted(async() => {
  await fetchData(id);
});
</script>