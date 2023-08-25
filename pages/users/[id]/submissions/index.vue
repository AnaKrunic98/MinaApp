<template>
  <div class="mt-10 relative overflow-visible shadow-md">
    <table class="w-full text-sm text-left text-gray-500">
      <thead class="text-xs text-gray-500 uppercase border-t">
        <tr class="text-black border-b dark:border-gray-900">
          <th scope="col" class="pl-2">Id</th>
          <th scope="col">Created at</th>
          <th scope="col">Mood</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(submission, index) in userSubmissions" :key="index">
          <td>{{ submission.id }}</td>
          <td>{{ formatDate(submission.createdat) }}</td>
          <td>{{ submission.mood }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import { format } from 'date-fns';

function formatDate(dateTimeString) {
  const createdAt = new Date(dateTimeString);
  return format(createdAt, "dd.MM.yyyy. HH:mm");
}


const supabase = useSupabaseClient(); 
const { id } = useRoute().params;

const userSubmissions = ref([]);

async function fetchData(userId) {
  try {
    const { data, error } = await supabase
      .from('submissions')
      .select('created_at,user_id,mood')
      .eq('user_id', userId);

    if (error) {
      console.error('An error occurred:', error.message);
    } else {
      console.log('User data:', data);

      data.forEach(submission => {
        userSubmissions.value.push({
          id: submission.user_id,
          createdat: submission.created_at,
          mood: submission.mood,
        });
      });
    }
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
}

onMounted(async() => {
  await fetchData(id);
});

</script>
