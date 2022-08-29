<template>
<img class="logo" src="../assets/RestoLogo-removebg-preview.png"/>
<div class="login">
<h1>Login Here</h1>
    <input type="text" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button v-on:click="Login"> Sign in</button>
    <p>
    Don't have an account? 
    <router-link to="/sign-up">
    Sign up here
    </router-link> 
    </p>
    
</div>
</template>

<script>
import axios from 'axios'
export default{
    name:'LoginPage',
    data(){
        return{
            email:'',
            password:''
        }
    },
    methods:{
     async Login(){
        let result = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`)
            if(result.status == 200 && result.data.length > 0){
                localStorage.setItem("User-info", JSON.stringify(result.data))
                this.$router.push({name:"HomePage"})
            }
                console.warn(result)
        }
            }               
    };
   
</script>

<style>
.logo{
    width:200px;
    margin-bottom: 0px;
}
.login{
    margin-top: -50px;
}
.login input{
    width:300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
}
.login button {
    margin-top: 0%;
    border: 1px solid skyblue;
    height: 30px;
    width: 325px;
    background: skyblue;
    color: #ffffffff;
    cursor: pointer;
}
.login button:hover {
background-color: steelblue;
}
</style>