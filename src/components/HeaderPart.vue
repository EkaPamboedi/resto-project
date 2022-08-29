<template>
<div class="nav">
<router-link to="/">Home </router-link>
<router-link to="/AddResto">Add Restourant </router-link>
<router-link to="UpdateResto">Update Restoutrant </router-link>
<a v-on:click="logout"  href="#">Logout </a>
</div>
</template>

<script>

export default{
    name:'HeaderPart',
    methods:{
        
        logout(){
            // console.warn("Logout?");
            //this is for cheking the "v-on:click" works on web.
            localStorage.clear();
            this.$router.push({name:'Login-page'})
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