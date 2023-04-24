<template>
  <div class="relative overflow-x-auto shadow-md">
    <table v-if="state.users" class="w-full text-sm text-left text-gray-500">
      <thead  class="text-xs text-gray-500 uppercase">
        <tr class="text-black  border-b  dark:border-gray-900">
          <th scope="col" class="px-6 py-3">First Name</th>
          <th scope="col" class="px-6 py-3">Last Name</th>
          <th scope="col" class="px-6 py-3">Phone</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in state.users" :key="user.id"
        class="bg-white border-b  dark:border-gray-500">
          <td class="px-6 py-4">{{ user.first_name }}</td>
          <td class="px-6 py-4">{{ user.last_name }}</td>
          <td class="px-6 py-4">{{ user.phone }}</td>
                
          <button id="dropdownMenuIconHorizontalButton" data-dropdown-toggle="dropdownDotsHorizontal" 
          @click="openDropdown"
          class="inline-flex items-center p-1 m-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50" type="button"> 
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
          </button>

          <!-- Dropdown menu -->
          <div id="dropdownDotsHorizontal" 
          :style="{display}"
          class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
              <div class="py-2">
                <span class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</span>
              </div>
          </div>

         </tr>
      </tbody>
    </table>
    <p v-else>Loading...</p>
    <p v-if="state.errorMessage">{{ state.errorMessage }}</p>
  </div>
</template>
  
  <script setup>
  import { createClient } from '@supabase/supabase-js'
  import { reactive, onMounted } from 'vue'
    
  const supabaseUrl = 'https://unrqqkhhvcsjwjdfdzua.supabase.co';
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVucnFxa2hodmNzandqZGZkenVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODExNjI5MDIsImV4cCI6MTk5NjczODkwMn0.wTqg-3fQCovN3buBE5LGTfbu6Tv0k5gf4IFb3PL603Q';
  const supabase = createClient(supabaseUrl, supabaseKey);
  
  const state = reactive({
    users: null,
    errorMessage: null
  })
  
  async function fetchData() {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('first_name, last_name,phone')
  
      if (error) {
        state.errorMessage = 'An error occurred: ' + error.message
      } else {
        state.users = data
      }
    } catch (error) {
      state.errorMessage = 'An error occurred: ' + error.message
    }
  }
  
  onMounted(() => {
    fetchData()
  })

  /* export default{
  data(){
      return {
        display:'none'
      }
  },
  methods: {
  openDropdown () {
    if(this.display == "none"){
      this.display = "block"
    } else {
      this.display = "none"
    }
  }
}
  }  */

  </script>