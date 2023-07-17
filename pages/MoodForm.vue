<template>
  <div class=" bg-blue-100 min-h-screen">
    <div class="flex justify-center py-10 font-medium">
      <span>Mood Form</span>
    </div>
    <div class="md:max-w-xl md:m-auto">
      <form @submit.prevent="saveData">
        <div class="grid gap-2 p-4 ">
          <div class="mb-4 mt-10">
            <label class="block text-sm font-medium text-gray-900 " for="inputName">Ime:</label>
            <input 
            type="text" 
            v-model="form.name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            id="inputName" 
            placeholder="Upisi ime">
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-900" for="inputEmail">Email adresa:</label>
            <input
            v-model="form.email" 
            type="email" 
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            id="inputEmail" placeholder="Upisi email">
          </div>
          <div>
            <p>Raspoloženje:</p>
            <button 
              @click.prevent="setMood(mood)"
              v-for="mood in moods"
              class="w-full max-w-xs my-2 mx-auto p-1 block text-white bg-blue-300 hover:bg-blue-500 focus:bg-blue-700 font-medium rounded-lg text-sm "
              :class="{'active': mood.selected }" 
              >{{ mood.name }}
            </button>
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

<script>

export default {
  setup() {
    const user = useSupabaseUser ()


  
      return{
        form: {
          name:null,
          email:null,
          mood:null,
        },
        moods: [
          {
            name: "Sreća",
            value: "happiness",
            selected: false,
          },
          {
            name: "Tuga",
            value: "sadness",
            selected: false,
          },
          {
            name: "Ljutnja",
            value: "anger",
            selected: false,
          },
        ],     
      }
    },
    created() {
      //this.handleMoodStore(); 
    },
    methods: {
      async saveData(e) {
        console.log(this.form);
        await this.handleMoodStore();0
        //clears the form
        this.form.name=null
        this.form.email=null
        this.form.mood=null 
      },
      setMood(mood) {
        this.form.mood = mood.value;
        mood.selected = !mood.selected;
      },
       async handleMoodStore() {
        console.log("dosao sam ovde"); 

         const supabase = useSupabaseClient()

         let { error } = await supabase
             .from('moods')
             .insert({ email: this.form.email, mood: this.form.mood })

         if(error) {
           console.log('something went wrong');
           console.log(error);
         } else {
           console.log('success');
         }
       }
    }
  }





</script>

<style>
.active {
  background-color: rgb(29 78 216);
}

</style>
