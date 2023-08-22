<template>
  <div class="bg-green-100 min-h-screen">
    <div class="flex justify-center py-4 font-medium">
      <span>Update user</span>
    </div>
    <div class="md:max-w-xl md:m-auto">
      <form @submit.prevent="updateUser">
        <div class="grid gap-2 p-4 ">
          <div class="mb-4 mt-10">
            <input type="text" placeholder="First Name" v-model="form.firstName"
                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
          </div>
          <div class="mb-4">
            <input type="text" placeholder="Last Name" v-model="form.lastName"
                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
          </div>
          <div  class="mb-4">
            <input type="text" placeholder="Email" v-model="form.email"
                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
          </div>
          <div class="mb-4">
            <input type="text" placeholder="Phone" v-model="form.phone"
                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
          </div>
          <button class="mt-6 focus:outline-none text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:ring-green-600 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-green-600"
                  type="submit">Update</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'

const supabase = useSupabaseClient();
const { id } = useRoute().params;

// Deklaracija promenljive "form" i inicijalizacija praznim objektom
const form = ref({});


async function fetchUserData(userId) {
  try {
    const { data, error } = await supabase
        .from('users')
        .select('id, first_name, last_name, email, phone')
        .eq('id', userId);

    if (error) {
      console.error('An error occurred:', error.message);
    } else {
      console.log('User data:', data);

      if (data.length > 0) {
        // Postavljamo vrednosti svojstava form objekta na osnovu podataka korisnika
        form.value.firstName = data[0].first_name;
        form.value.lastName = data[0].last_name;
        form.value.email = data[0].email;
        form.value.phone = data[0].phone;
      }


    }
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
}

onMounted(() => {
  fetchUserData(id);
});

async function updateUser(event) {
  const { error } = await supabase
      .from('users')
      .update({first_name: form.value.firstName, last_name:form.value.lastName, email:form.value.email, phone:form.value.phone})
      .eq('id', id)
      
  await navigateTo('/List');
}

</script>

<style scoped>
</style>