<template>
    <div class="relative overflow-x-auto shadow-md">
      <table v-if="state.users" class="w-full text-sm text-left text-gray-500">
        <thead class="text-xs text-gray-500 uppercase">
          <tr class="text-black  border-b  dark:border-gray-900">
            <th scope="col" class="px-6 py-3">First Name</th>
            <th scope="col" class="px-6 py-3">Last Name</th>
            <th scope="col" class="px-6 py-3">Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in state.users" :key="user.id" class="bg-white border-b  dark:border-gray-500">
            <td class="px-6 py-4">{{ user.first_name }}</td>
            <td class="px-6 py-4">{{ user.last_name }}</td>
            <td class="px-6 py-4">{{ user.phone }}</td>
            <div>
    <button
      id="dropdownDefaultButton"
      data-dropdown-toggle="dropdown"
      type="button"
    >
      Dropdown button
      <svg
        class="w-4 h-4 ml-2"
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </button>
  
  
  
    <div
      id="dropdown"
      class=" hidden "
    >
      <ul  aria-labelledby="dropdownDefaultButton">
        <li>
          <a href="#" class="block ">Dashboard</a>
        </li>
        <li>
          <a href="#" class="block">Settings</a>
        </li>
        <li>
          <a href="#" class="block ">Earnings</a>
        </li>
        <li>
          <a href="#" class="block ">Sign out</a>
        </li>
      </ul>
    </div>
  </div>
          </tr>
        </tbody>
      </table>
      <p v-else>Loading...</p>
  
      <!-- <div class="relative overflow-x-visible">
    <button
      id="dropdownDefaultButton"
      data-dropdown-toggle="dropdown"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      type="button"
    >
      Dropdown button
      <svg
        class="w-4 h-4 ml-2"
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </button>
  
  
  
    <div
      id="dropdown"
      class="z-50 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute inset-x-0 top-full"
    >
      <ul class="overflow-y-auto w-full py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
        <li>
          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
        </li>
        <li>
          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
        </li>
        <li>
          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
        </li>
        <li>
          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
        </li>
      </ul>
    </div>
  </div> -->
  
  
      <p v-if="state.errorMessage">{{ state.errorMessage }}</p>
    </div>
  </template>
    
    <script setup>
    import { createClient } from '@supabase/supabase-js'
    import { reactive, onMounted } from 'vue'
    import { initFlowbite } from 'flowbite'
      
    const supabaseUrl = 'https://unrqqkhhvcsjwjdfdzua.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVucnFxa2hodmNzandqZGZkenVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODExNjI5MDIsImV4cCI6MTk5NjczODkwMn0.wTqg-3fQCovN3buBE5LGTfbu6Tv0k5gf4IFb3PL603Q';
    const supabase = createClient(supabaseUrl, supabaseKey);
    
    const state = reactive({
      users: null,
      errorMessage: null,
      display: 'none'
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
      fetchData();
      initFlowbite();
    })
  
  // ovo mozes da obrised dole
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