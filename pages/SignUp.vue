<template>
    <div class=" bg-blue-100 min-h-screen">
      <div class="flex justify-center py-10 font-medium">
        <span>Sign up</span>
      </div>
      <div class="md:max-w-xl md:m-auto">
      <form @submit.prevent="signUp">
        <div class="grid gap-2 p-4 ">
            <div class="mb-4 mt-10">
                <label class="block text-sm font-medium text-gray-900 ">
                    <input type="text" placeholder="Email address" v-model="form.email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                </label>
            </div>
            <div class="mb-4">
                <label class="block text-sm font-medium text-gray-900 ">
                    <input type="password" placeholder="Password" v-model="form.password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                </label>
            </div>
                <button type="submit" class=" mt-6 focus:outline-none text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:ring-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-blue-600">
                  <span>Sign up</span> 
                </button>
        </div>
        <div 
        v-if="errors.length>0"
        class=" fixed top-16 w-full grid gap-2 p-2">
        <div
        class="p-3 text-white bg-red-500 shadow-lg shadow-red-700/50 max-w-sm rounded-xl text-center">
          <ul class="mx-5">
            <li v-for="error in errors">{{ error }}</li>
          </ul>
        </div>
        </div> 
      </form>
      <NuxtLink to="/login" class="mx-5 hover:text-blue-700">Already have an account </NuxtLink>
    </div>
    </div>
</template>

<script setup>
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://unrqqkhhvcsjwjdfdzua.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVucnFxa2hodmNzandqZGZkenVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODExNjI5MDIsImV4cCI6MTk5NjczODkwMn0.wTqg-3fQCovN3buBE5LGTfbu6Tv0k5gf4IFb3PL603Q';
const supabase = createClient(supabaseUrl, supabaseKey);

const { form } = useForm();
const { validateForm,errors} = useFormValidation();

const signUp = async () => {
  const { validated,errors } = validateForm(form);

  if (validated) {
    const { data, error } = await supabase.auth.signUp({
        email: form.email,
        password: form.password
    })

    console.log('data', data) 
    console.log('error', error)
    console.log(form)

    await navigateTo('/MoodForm');
  }else {
    console.log('Validation errors:', errors);
}
}
</script>

