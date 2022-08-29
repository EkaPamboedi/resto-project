<template>
<img class="logo" src="../assets/RestoLogo-removebg-preview.png"/>
<div class="register">
<h1>Sign Up</h1>
    <input type="text" v-model="name" placeholder="Enter Name" />
    <input type="text" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button v-on:click="SignUp"> Sign in</button>
    <p>
    Already have an account ? 
    <router-link to="/login">
    Login Here
    </router-link> 
    </p>
    
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
        let users  = localStorage.getItem('User-info');
        if(users){
            this.$router.push({name:"HomePage"})
        }

    }
}
</script>