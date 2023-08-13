<template>  
  <div class="bg-blue-100 min-h-screen">
    <div class="flex justify-center pt-8 font-medium">
      <span>Ćao, {{ firstName }}!</span>
    </div>
    <div class="md:max-w-xl md:m-auto">
          <p class= "flex justify-center mt-12">Kako se osećaš?</p>
          <button v-for="mood in moods" @click.prevent="setMood(mood)" class="w-full max-w-xs my-2 mx-auto p-1 block text-white bg-blue-300 hover:bg-blue-500 focus:bg-blue-700 font-medium rounded-lg text-sm " >{{ mood.name }} </button>
    </div>
  </div>
</template>
  
<script setup>
  import { useRoute } from 'vue-router'
  import {ref, onMounted } from 'vue'

  const supabase = useSupabaseClient(); 

  const { id } = useRoute().params;
  const selected = ref('')
  const firstName = ref()

  const moods = [
    {
      name: "Srećno",
      mv: "happiness",
    },
    {
      name: "Zadovoljno",
      mv: "satisfactorily",
    },
    {
      name: "Ponosno",
      mv: "pride",
    },
    {
      name: "Zahvalno",
      mv: "gratitude",
    },
    {
      name: "Motivisano",
      mv: "motivation",
    },
    {
      name: "Tužno",
      mv: "sadness",
    },
    {
      name: "Uplašeno",
      mv: "fear",
    },
    {
      name: "Ljuto",
      mv: "anger",
    },
    {
      name: "Besno",
      mv: "fury",
    },
    {
      name: "Neuspešno",
      mv: "failure",
    },
  ]

  const setMood = (mood) => {
    selected.value = mood.mv;
    console.log(selected.value);
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
        console.log('User data:', data);
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
         const supabase = useSupabaseClient()

         let { error } = await supabase
             .from('submissions')
             .insert({ user_id: id, mood: selected.value})

         if(error) {
           console.log('something went wrong');
           console.log(error);
         } else {
           console.log('success');
         }
      }

  await handleMoodStore();

</script>
  
<style scoped>
</style>