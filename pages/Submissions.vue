<template>
<div class="flex items-center m-2">
  <label for="names" class="mr-2 text-gray-600">Choose a name:</label>
  <select id="names" v-model="filterName" class="border rounded-md px-2 py-1 focus:outline-none focus:ring focus:border-blue-300">
    <option value="">Show All</option> 
    <option v-for="p in state.per" :value="p.first_name">{{ p.first_name }} {{ p.last_name }}</option>
  </select>
</div>
<div class="mt-4 relative overflow-visible shadow-md">
  <table v-if="state.users" class="w-full text-sm text-left text-gray-500">
    <thead class="text-xs text-gray-500 uppercase border-t">
      <tr class="text-black border-b dark:border-gray-900">
        <th scope="col" class="pl-2">First Name</th>
        <th scope="col" >Created at</th>
        <th scope="col" >Mood</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in state.users"  
      class="bg-white border-b dark:border-gray-500">
        <td class="pl-2">
            {{ user.name }}
        </td>
        <td>
          {{ formatDate(user.created_at) }}
        </td>
        <td>
            {{ user.mood}}
        </td>    
      </tr>
    </tbody>
  </table>
  <p v-else>Loading...</p>
  <p v-if="state.errorMessage">{{ state.errorMessage }}</p>
</div>
</template>


<script setup>
import { reactive, onMounted } from 'vue'
import { format } from 'date-fns';

const supabase = useSupabaseClient(); 

const state = reactive({
  users: null,
  per: null,
  errorMessage: null,
  display: 'none'
})

const filterName = ref('')

async function fetchData() {
  try {
    const { data, error } = await supabase
      .from('submissions')
      .select('name, created_at, mood, user_id')

    if (error) {
      state.errorMessage = 'An error occurred: ' + error.message
    } else {
      state.users = data
    }
  } catch (error) {
    state.errorMessage = 'An error occurred: ' + error.message
  }
}

async function fetchUsers() {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('id,first_name, last_name')
  
      if (error) {
        state.errorMessage = 'An error occurred: ' + error.message
      } else {
        state.per = data
        console.log(state.per)
      }
    } catch (error) {
      state.errorMessage = 'An error occurred: ' + error.message
    }
  }

async function applyFilter(filterName) {
  try {
    const { data, error } = await supabase
      .from('submissions')
      .select('name, created_at, mood, user_id')
      .match({
        name: filterName
      })

    if (error) {
      state.errorMessage = 'An error occurred: ' + error.message
    } else {
      state.users = data
    }
  } catch (error) {
    state.errorMessage = 'An error occurred: ' + error.message
  }
}

function formatDate(dateTimeString) {
  const createdAt = new Date(dateTimeString);
  return format(createdAt, "dd.MM.yyyy. HH:mm ");
}

watch(filterName, async (newValue) => {
  if (filterName.value === "") {
    await fetchData();
  } else {
    applyFilter(newValue);
  }
});

onMounted(async() => {
  await fetchData();
  await fetchUsers()
})
</script>

  
  
  
  