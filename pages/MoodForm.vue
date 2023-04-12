<template>
  <div class=" bg-blue-100 min-h-screen">
    <div class="flex justify-center py-4 font-medium">
      <span>Mood Form</span>
    </div>
    <div class="md:max-w-xl md:m-auto">
      <form @submit.prevent="saveData">
        <div class="grid gap-2 p-4 ">
          <div class="mb-4 mt-10">
            <label class="block text-sm font-medium text-gray-900 " for="inputName">Ime:</label>
            <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="inputName" placeholder="Upisi ime" v-model="form.name">
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-900" for="inputEmail">Email adresa:</label>
            <input type="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="inputEmail" placeholder="Upisi email" v-model="form.email">
          </div>
      
          <div>
            <p>Raspoloženje:</p>
            <button 
              v-for="mood in moods" 
              @click.prevent="setMood(mood.value)"
              class="block focus:outline-none text-white bg-blue-300 hover:bg-blue-400 focus:ring-4 focus:ring-blue-400 font-medium rounded-lg text-sm 
              px-5 py-2.5 mr-2 mb-2 dark:focus:ring-blue-600"
              :class="{'active': form.mood === mood.value }" 
              >{{ mood.name }}
            </button>
          </div>

          <button type="submit" 
            @click="activeMood = !activeMood"
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
    data() {
        return{
          moods: [
              {
                name: "Sreća",
                value: "happiness",
              },
              {
                name: "Tuga",
                value: "sadness",
              },
              {
                name: "Ljutnja",
                value: "anger",
              },
             ],
           form: {
              name:"",
              email:"",
              mood:"",
            },
            
    }
    },
    created() {


    },
    methods: {
       saveData(e){
        console.log(this.form);
       },
       setMood(mood) {
       this.form.mood = mood;
  }
       
    }
  }

</script>

<style>
.active {
  background-color: rgb(96 165 250);
  border: solid 10px rgb(37 99 235); 
}
</style>
