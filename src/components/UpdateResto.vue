<template>
<div class="nav">
<router-link to="/">Home </router-link>
<router-link to="/AddResto">Add Restourant </router-link>
<router-link to="UpdateResto">Update Restoutrant </router-link>
<a v-on:click="logout"  href="#">Logout </a>
</div>
<h1>Hello from the other update side</h1>
<span>Update Restourant</span>
</template>

<script>

export default{
    name:'UpdateResto',
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