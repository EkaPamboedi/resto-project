<template>
<img class="logo" src="../assets/RestoLogo-removebg-preview.png"/>
<div class="register">
<h1>Sign Up</h1>
    <input type="text" name="" id="" placeholder="Enter Name" />
    <input type="text" name="" id="" placeholder="Enter Email" />
    <input type="Password" name="" id="" placeholder="Enter Password" />
    <button> Sign in</button>
</div>
</template>

<script>
export default{
    name:'SignUp'
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