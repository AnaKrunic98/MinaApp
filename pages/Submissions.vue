<template>
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
          <tr v-for="(user,index) in state.users"  
          class="bg-white border-b dark:border-gray-500">
            <td>
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

    function formatDate(dateTimeString) {
      const createdAt = new Date(dateTimeString);
      return format(createdAt, "HH:mm dd.MM.yyyy. ");
    }

    const supabase = useSupabaseClient(); 
    
    const state = reactive({
      users: null,
      errorMessage: null,
      display: 'none'
    })
    
    async function fetchData() {
      try {
        const { data, error } = await supabase
          .from('submissions')
          .select('name, created_at, mood')
    
        if (error) {
          state.errorMessage = 'An error occurred: ' + error.message
        } else {
          state.users = data
        }
      } catch (error) {
        state.errorMessage = 'An error occurred: ' + error.message
      }
    }
    
    onMounted(async() => {
      await fetchData();
    })

    
    
    </script>
  
  
  
  
  
  
  