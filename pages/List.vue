<template>
  <div class="mt-10 relative overflow-visible shadow-md">
    <table v-if="state.users" class="w-full text-sm text-left text-gray-500">
      <thead class="text-xs text-gray-500 uppercase border-t">
        <tr class="text-black border-b dark:border-gray-900">
          <th scope="col" class="pl-2">First Name</th>
          <th scope="col" >Last Name</th>
          <th scope="col" >Form Link</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user,index) in state.users"  
        class="bg-white border-b dark:border-gray-500">
        
          <td>
            <NuxtLink :to="`/users/${user.id}`" class="block ml-2" >
              {{ user.first_name }}
            </NuxtLink>
          </td>
          <td>
            <NuxtLink :to="`/users/${user.id}`" class="block">
              {{ user.last_name }}
            </NuxtLink>
          </td>
          <td>
            <NuxtLink :to="`/users/${user.id}/form`" class="block">
              <a href="#">http://localhost:3000/users/{{ user.id }}/form</a>
            </NuxtLink>
          </td>    
          <td> 
            <button   
              :id="'dropdownMenuIconHorizontalButton'+index"
              :data-dropdown-toggle="'dropdownId' + index" 
              class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
              type="button"> 
              <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
            </button>

            <div 
            :id="'dropdownId' + index"  
            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconHorizontalButton">
                  <li>
                    <NuxtLink :to="`/users/${user.id}`"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Update</NuxtLink> 
                  </li>
                  <li>
                    <NuxtLink :to="`users/${user.id}/submissions`"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Submittions</NuxtLink> 
                  </li>
                  <li>
                    <a href="#" 
                    @click="deleteUser(user.id)"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Delete</a>
                  </li>
                </ul>
            </div>
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
  import { initFlowbite } from 'flowbite'
  const supabase = useSupabaseClient(); 
  
  const state = reactive({
    users: null,
    errorMessage: null,
    display: 'none'
  })
  
  async function fetchData() {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('id,first_name, last_name, phone')
  
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
    initFlowbite();
  })

  async function deleteUser(userId) {
    try {
      const { error } = await supabase
      .from('users')
      .delete()
      .eq('id', userId)

    if (error) {
      state.errorMessage = 'An error occurred while deleting the user: ' + error.message
    } else {
      state.users = state.users.filter(user => user.id !== userId)
    }
  } catch (error) {
    state.errorMessage = 'An error occurred while deleting the user: ' + error.message
  }
}



  </script>






