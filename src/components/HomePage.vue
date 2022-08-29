<template>
<Header />
<h1>Hello {{name}} </h1>
<h1>Live your life, i do mine.</h1>
<b-table>
    <thead>
        <tr>
            <th>Id</th>
            <th>name</th>
            <th>contact</th>
            <th>addres</th>
        </tr>
    </thead>    

    <tbody>
        <tr v-for="item in restaurants" :key="item.id">
            <td> {{item.id}} </td>
            <td> {{item.name}} </td>
            <td> {{item.contact}} </td>
            <td> {{item.address}} </td>
        </tr>
    </tbody>
</b-table>

</template>
<script>
import Header from './HeaderPart.vue'   
import axios from 'axios'
export default{
  name:'HomePage',
  data(){
        return{
            name:'',
            restaurants:[],
        };
 },
  components:{
        Header
  }, 
   async mounted(){
        let users  = localStorage.getItem('User-info');
        // this.name = JSON.parse(localStorage.getItem('User-info'));
        this.name = JSON.parse(users)[0].name;
        if(!users){
            this.$router.push({name:'SignUp'})
        }
        let result = await axios.get("http://localhost:3000/restaurants");
        console.warn(result);
        this.restaurants = result.data;
    }
}
</script>
<style>
th{
    padding:1vh;
    text-transform: capitalize;
}
</style>