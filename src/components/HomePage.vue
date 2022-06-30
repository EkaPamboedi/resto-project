<template>
<h1>Hello MotherFATHER</h1>
</template>
<script>
export default{
  name:"HomePage",
  mounted(){
        let user  = localStorage.getItem('User-info');
        if(!user){
            this.$router.push({name:"SignUp"})
        }
    }
}
</script>