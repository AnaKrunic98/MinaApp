<template>
  <div class="bg-blue-100 min-h-screen">
    <div class="flex justify-center pt-8 font-medium">
      <span>Ćao, {{ firstName }}!</span>
    </div>
    <div class="md:max-w-xl md:m-auto">
      <p class= "flex justify-center mt-12">Kako se osećaš?</p>
      <button v-for="mood in moods" 
      @click="setMood(mood)" 
      class="w-full max-w-xs my-2 mx-auto p-1 block text-white bg-blue-300 hover:bg-blue-500 focus:bg-blue-700 font-medium rounded-lg text-sm " >{{ mood }} </button>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import {ref, onMounted } from 'vue'

const supabase = useSupabaseClient();

const { id } = useRoute().params;
const selected = ref()
const firstName = ref()

const moods = ["Srećno","Zadovoljno","Ponosno","Zahvalno","Motivisano","Tužno","Uplašeno","Ljuto","Besno","Neuspešno"]

const setMood = async (mood) => {
  selected.value = mood;
  console.log(selected.value);

  await handleMoodStore();

}

const fetchUserData =  async (userId) => {
  try {
    const { data, error } = await supabase
        .from('users')
        .select('id, first_name')
        .eq('id', userId);
    if (error) {
      console.error('An error occurred:', error.message);
    } else {
      if (data.length > 0) {
        firstName.value = data[0].first_name;
      }
    }
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
}

onMounted(() => {
  fetchUserData(id);
});

const handleMoodStore =  async () => {
  console.log('dosao sam ovde');

  const supabase = useSupabaseClient()

  let { error } = await supabase
      .from('submissions')
      .insert({ user_id: id, mood: selected.value, name:firstName.value})

  if(error) {
    console.log('something went wrong');
    console.log(error);
  } else {
    console.log('success');
  }
}


</script>

<style scoped>
</style>