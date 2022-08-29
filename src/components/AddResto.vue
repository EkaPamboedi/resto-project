<template>
<div class="nav">
<router-link to="/">Home </router-link>
<router-link to="/AddResto">Add Restourant </router-link>
<router-link to="UpdateResto">Update Restoutrant </router-link>
<a v-on:click="logout"  href="#">Logout </a>
</div>
<h1>Hello from the other side</h1>
<span>Add Restourant</span>

<form class="AddResto">
<input type="text" name="name" placeholder="Input name" v-model="restaurants.name">
<input type="text" name="contact" placeholder="Input contact" v-model="restaurants.contact">
<input type="text" name="address" placeholder="Input address" v-model="restaurants.address">
<button type="button" v-on:click="AddResto">Add Restaurant</button>
</form>
</template>

<script>
import axios from 'axios';
export default{
    name:'AddResto',
    data(){
        return{
            restaurants:{
                name:'',
                contact:'',
                address:''
            }
        }
    },
    methods:{
       async AddResto(){
            console.warn(this.restaurants);
            const result  = await axios.post("http://localhost:3000/restaurants/",{
                name:this.restaurants.name,
                contact:this.restaurants.contact,
                address:this.restaurants.address
            });
            if(result.status == 201){
                this.$router.push({name:'HomePage'})
                window.alert("Added to Database")
            }
            console.warn("result",result);
        }
    },
    mounted(){
        let users  = localStorage.getItem('User-info');
        // this.name = JSON.parse(localStorage.getItem('User-info'));
        this.name = JSON.parse(users)[0].name;
        if(!users){
            this.$router.push({name:'SignUp'})
        }
      
    }
}
</script>
<style>
.nav{
    background-color: #333;
    overflow: hidden;
}
.nav a{
    margin-right: 2em;
    font-size: medium;
    text-align: center;
    padding: 15px 15px;
    float:left;
    color: #f2f2f2f2;
    text-decoration: none;
}
.nav a:hover{
    background: #f2f2f2f2;
    color: #333;
}
</style>