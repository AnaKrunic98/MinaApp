<template>
    <div class="relative bg-green-100 min-h-screen">
      <div class="flex justify-center py-5 font-medium">
        <span>New User</span>
        <div 
          v-if="errorMessages.length>0"
          class="absolute top-5 w-full p-1">
          <div class="p-2 text-white bg-red-500 shadow-lg shadow-red-700/50 max-w-sm rounded-xl text-center">
            <ul>
              <li v-for="err in errorMessages">{{ err }}</li>
            </ul>
          </div>
          </div>
      </div>
      <div class="md:max-w-xl md:m-auto">
        <form @submit.prevent="saveData">
          <div class="grid gap-2 p-4 ">
            <div class="mb-3 mt-16">
              <label class="block text-sm font-medium text-gray-900 " for="inputName">Ime:</label>
              <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" id="inputName" placeholder="Upisi ime" 
              v-model="form.first_name">
            </div>
            <div class="mb-3">
              <label class="block text-sm font-medium text-gray-900 " for="inputLastName">Prezime:</label>
              <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-green-500 dark:focus:border-green-500" id="inputLastName" placeholder="Upisi prezime" 
              v-model="form.last_name">
            </div>
            <div class="mb-3">
              <label class="block text-sm font-medium text-gray-900" for="inputEmail">Email adresa:</label>
              <input type="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" id="inputEmail" placeholder="Upisi email" 
              v-model="form.email">
            </div>
            <div class="mb-3">
              <label class="block text-sm font-medium text-gray-900 " for="inputPhone">Telefon:</label>
              <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-green-500 dark:focus:border-green-500" id="inputPhone" placeholder="Upisi broj telefona" v-model="form.phone">
            </div>
  
            <button type="submit" 
              @click="activeMood = !activeMood"
              class=" mt-4 focus:outline-none text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:ring-green-600 font-medium rounded-lg text-sm 
              px-5 py-2.5 mr-2 mb-2 dark:focus:ring-green-600">
                Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import {ref} from 'vue'
  const { ResetForm } = useResetForm();
  
  const errorMessages = ref([])
  const validated = ref(true);
  
  const form = ref({
    first_name:"",
    last_name:"",
    email:"",
    phone:"",
  })      
  
  const saveData = async (e) => {
  console.log(form.value);
  await handleUserStore();
  }
  
  const validateForm = () => {
    errorMessages.value.length = 0 
  
    if (!form.value.first_name) {
      errorMessages.value.push('First name is required');
      validated.value = false
    }
    if (!form.value.last_name) {
      errorMessages.value.push('Last name is required');
      validated.value = false
    }
    if (!form.value.email) {
      errorMessages.value.push('Email address is required');
      validated.value = false
    }
    if (!form.value.phone) {
      errorMessages.value.push('Phone number is required');
      validated.value = false
    }
  }
  
  const handleUserStore = async () => {
  console.log("dosao sam ovde"); 
  const supabase = useSupabaseClient()
  validated.value = true;
  validateForm()

  if (!validated.value) {
    return; 
  }

  let { error } = await supabase
    .from('users')
    .insert({first_name: form.value.first_name, last_name: form.value.last_name,  email: form.value.email, phone: form.value.phone  })
  await navigateTo('/users');
  
  if (error) {
    console.log('something went wrong');
    console.log(error);
  } else {
    console.log('success');
  }
}
  </script>