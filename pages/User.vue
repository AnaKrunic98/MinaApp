<template>
    <div class="bg-green-100 min-h-screen">
      <div class="flex justify-center py-10 font-medium">
        <span>User</span>
      </div>
      <div class="md:max-w-xl md:m-auto">
        <form @submit.prevent="saveData">
          <div class="grid gap-2 p-4 ">
            <div class="mb-4 mt-10">
              <label class="block text-sm font-medium text-gray-900 " for="inputName">Ime:</label>
              <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" id="inputName" placeholder="Upisi ime" 
              v-model="form.first_name">
            </div>
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-900 " for="inputLastName">Prezime:</label>
              <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-green-500 dark:focus:border-green-500" id="inputLastName" placeholder="Upisi prezime" 
              v-model="form.last_name">
            </div>
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-900" for="inputEmail">Email adresa:</label>
              <input type="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" id="inputEmail" placeholder="Upisi email" 
              v-model="form.email">
            </div>
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-900 " for="inputPhone">Telefon:</label>
              <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-green-500 dark:focus:border-green-500" id="inputPhone" placeholder="Upisi broj telefona" v-model="form.phone">
            </div>
  
            <button type="submit" 
              @click="activeMood = !activeMood"
              class=" mt-6 focus:outline-none text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:ring-green-600 font-medium rounded-lg text-sm 
              px-5 py-2.5 mr-2 mb-2 dark:focus:ring-green-600">
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
              form: {
                first_name:"",
                last_name:"",
                email:"",
                phone:"",
              },
              
      }
      },
      created() {
        //this.handleMoodStore();
        
      },
      methods: {
        async saveData(e) {
          console.log(this.form);
           await this.handleUserStore();
         },
        /*  setMood(mood) {
          this.form.mood = mood;
        }, */
        async handleUserStore() {
        console.log("dosao sam ovde"); 

          const supabase = useSupabaseClient()

          let { error } = await supabase
              .from('users')
              .insert({first_name: this.form.first_name, last_name: this.form.last_name,  email: this.form.email, phone: this.form.phone  })

          if(error) {
            console.log('something went wrong');
            console.log(error);
          } else {
            console.log('success');
          }
          this.form.first_name=null
          this.form.last_name=null
          this.form.email=null
          this.form.phone=null
        }
      }
    }
  
  </script>
