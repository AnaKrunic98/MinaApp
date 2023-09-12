 <template>
    <div class="relative bg-blue-100 min-h-screen">
      <div class="flex justify-center py-10 font-medium">
        <span >Login</span>
      </div>
      <div class="md:max-w-xl md:m-auto">
      <div  v-if="errMessage" class="absolute top-14 flex items-center p-4 text-base text-red-700 rounded-l dark:bg-gray-800 dark:text-red-400" role="alert">
        <svg class="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
        </svg>
        <span class="sr-only">Info</span>
        <div>
          <span class="font-medium">{{ errMessage }}</span> 
        </div>
      </div>
      <form @submit.prevent="login">
        <div class="grid gap-2 p-4 ">
            <div class="mb-4">
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
                  <span>Log in</span>
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
      <NuxtLink to="/signup" class="mx-5 hover:text-blue-700">You don't have an account</NuxtLink>
  </div>
  </div>    
</template>

<script setup>
const supabase = useSupabaseClient(); 
const { form } = useForm();
const { validateForm,errors } = useFormValidation();

const errMessage = ref("")


const login = async () => {
errMessage.value = ''

const { validated, errors } = validateForm(form);

if (validated) {
  const {data, error} = await supabase.auth.signInWithPassword({
    email: form.email,
    password: form.password
  })
  if (error) {
      console.error('Unsuccessful login:', error.message);
      errMessage.value = 'Unsuccessful login'
    } else {
      console.log('Successful login:', data);
      errMessage.value = ''

      await navigateTo('/Users');
    }
}else {
  console.log('Validation errors:', errors);
}
}

</script>
