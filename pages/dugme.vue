<template>
    <div class="w-60 h-60 bg-slate-500">
      <button
        v-for="(btn, index) in 3"
        :key="index"
        :id="'dropdownDefaultButton' + index"
        :data-dropdown-toggle="'dropdownId' + index"
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
  
      <div :id="'dropdownId' + index" class="hidden">
        <ul aria-labelledby="'dropdownDefaultButton' + index">
          <li>
            <a href="#" class="block">Dashboard</a>
          </li>
          <li>
            <a href="#" class="block">Settings</a>
          </li>
          <li>
            <a href="#" class="block">Earnings</a>
          </li>
          <li>
            <a href="#" class="block">Sign out</a>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import { initFlowbite } from 'flowbite'
  import { onMounted, ref } from 'vue'
  
  export default {
    setup() {
      const index = ref(0)
  
      onMounted(() => {
        initFlowbite()
      })
  
      return { index }
    },
  }
  </script>
  
  <style scoped>
  
  </style>
  