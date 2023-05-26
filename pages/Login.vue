 <template>
    <div class=" bg-blue-100 min-h-screen">
      <div class="flex justify-center py-4 font-medium">
        <span>Login</span>
      </div>
      <div class="md:max-w-xl md:m-auto">
      <form @submit.prevent="login">
        <div class="grid gap-2 p-4 ">
            <div class="mb-4 mt-10">
                <label class="block text-sm font-medium text-gray-900 ">
                    <input type="text" placeholder="Email address" v-model="email"
                    class="block text-sm font-medium text-gray-900 " >
                </label>
            </div>
            <div class="mb-4">
                <label class="block text-sm font-medium text-gray-900 ">
                    <input type="password " placeholder="Password" v-model="password"
                    class="block text-sm font-medium text-gray-900 " >
                </label>
            </div>
                <button type="submit" 
                    class=" mt-6 focus:outline-none text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:ring-blue-600 font-medium rounded-lg text-sm 
                    px-5 py-2.5 mr-2 mb-2 dark:focus:ring-blue-600">
                    Submit
                </button>
        </div>
      </form>
    </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { createClient } from '@supabase/supabase-js';

const email = ref('')
const password = ref('')
const supabaseUrl = 'https://unrqqkhhvcsjwjdfdzua.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVucnFxa2hodmNzandqZGZkenVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODExNjI5MDIsImV4cCI6MTk5NjczODkwMn0.wTqg-3fQCovN3buBE5LGTfbu6Tv0k5gf4IFb3PL603Q';
const supabase = createClient(supabaseUrl, supabaseKey);
  
const login = async () => {
const {error,data } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value
})

if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
}


</script>

<style>

</style> 