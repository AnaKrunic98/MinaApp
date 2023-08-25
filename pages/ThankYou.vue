<template>
    <div class="relative flex justify-center">
        <div v-if="showAlert" class="absolute top-4 flex items-center p-4 text-sm text-green-800 border border-green-400 rounded-lg bg-green-100 dark:bg-gray-800 dark:text-green-400 dark:border-green-800" role="alert">
            <svg class="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
            </svg>
            <span class="sr-only">Info</span>
            <div>
                <span class="font-medium">Successfully saved mood!</span> 
            </div>
        </div>
        <div class="min-h-screen flex items-center justify-center bg-gray-100">
            <div class="bg-white p-4 mx-4 rounded-lg shadow-md flex items-center justify-center flex-col">
                <h1 class="text-3xl font-semibold mb-4">Thank you!</h1>
                <p class="text-gray-600 text-center">Prioritize your self-care by logging your mood frequently in the app. ;<br>We're here to support you!</p>
                <button class="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
                Back to Home
                </button>
            </div>
        </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const showAlert = ref(false);
  
  onMounted(() => {
    showAlert.value = true;
    setTimeout(() => {
      showAlert.value = false;
    }, 5000);
  });
  </script>
  