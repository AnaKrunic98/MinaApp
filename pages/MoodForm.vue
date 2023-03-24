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
            <button  class="btn btn-primary">Submit</button>
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