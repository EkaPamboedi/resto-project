<template>
<router-view />
<!-- Helloo -->
<!-- <HomePage /> -->
</template>

<script>
// import Vue from 'vue'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Import Bootstrap and BootstrapVue CSS files (order is important)
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// // Make BootstrapVue available throughout your project
// Vue.use(BootstrapVue)
// // Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin)
  export default {
    name: 'App',
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  padding:0;
  margin:0;
}

.logo{
    width:200px;
    margin-bottom: 0px;
}
.register, .login{
    margin-top: -50px;
}
.register input , .login input , .AddResto input{
    width:300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto; 
    margin-left: auto;
    border: 1px solid skyblue;
}
.register button , .login button , .AddResto button  {
    margin-top: 0%;
    border: 1px solid skyblue;
    height: 30px;
    width: 325px;
    background: skyblue;
    color: #ffffffff;
    cursor: pointer;
}
.register button:hover, .login button:hover {
background-color: steelblue;
}

</style>
