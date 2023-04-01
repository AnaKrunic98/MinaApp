<template>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form v-on:submit.prevent="saveData">
            <div class="form-group">
              <label for="inputName">Ime:</label>
              <input type="text" class="form-control" id="inputName" placeholder="Upisi ime" v-model="form.name">
            </div>
            <div class="form-group">
              <label for="inputEmail">Email adresa:</label>
              <input type="email" class="form-control" id="inputEmail" placeholder="Upisi email" v-model="form.email">
            </div>
            <div class="form-group">
            <label for="inputMood">Raspoloženje:</label>
            <select id="inputMood" class="form-control" v-model="form.mood">
                <option>Sreca</option>
                <option>Tuga</option>
                <option>Bes</option>
            </select>
            </div>
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4
            focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600
             dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>
          </form>
        </div>
        <div class="col-sm"></div>
        </div>
        </div>    
  </template>

<script>

export default {
    data() {
        return{
           form: {
            name:"",
            email:"",
            mood:"",
           }
        }
    },
    created() {


    },
    methods: {
       saveData(e){
        console.log(this.form);
       } 
    }
  }

</script>

<style>
.container{
  margin-top: 100px;
}
.form-group{
  margin: 20px 0;
}

</style>