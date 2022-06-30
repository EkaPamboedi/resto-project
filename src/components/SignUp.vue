<template>
<img class="logo" src="../assets/RestoLogo-removebg-preview.png"/>
<div class="register">
<h1>Sign Up</h1>
    <input type="text" v-model="name" placeholder="Enter Name" />
    <input type="text" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button v-on:click="SignUp"> Sign in</button>
</div>
</template>

<script>
import axios from 'axios'
export default{
    name:'SignUp',
    data(){
        return {
            // id:'',
            name: '',
            email:'',
            password:''

        }
    },
    methods:{
        async SignUp()
        {
            // console.warn("signup",this.name,this.email,this.password);
            let result = await axios.post("http://localhost:3000/users", 
            {
                email:this.email,
                name:this.name,
                password:this.password,
            });
            
            console.warn(result);
            if(result.status == 201){
                
                localStorage.setItem("User-info", JSON.stringify(result.data))
                this.$router.push({name:"HomePage"})
            }

        }
    },
    mounted(){
        let user  = localStorage.getItem('User-info');
        if(user){
            this.$router.push({name:"HomePage"})
        }

    }
}
</script>

<style>
.logo{
    width:200px;
    margin-bottom: 0px;
}
.register{
    margin-top: -50px;
}
.register input{
    width:300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
}
.register button {
    margin-top: 0%;
    border: 1px solid skyblue;
    height: 30px;
    width: 325px;
    background: skyblue;
    color: #ffffffff;
    cursor: pointer;
}
.register button:hover {
background-color: steelblue;
}
</style>