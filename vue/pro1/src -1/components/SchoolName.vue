<template>
  <div  class="demi">
   
    <h2>学校姓名：{{ name }}</h2>
    <h2>学校地址：{{ addres }}</h2>
   
  </div>
</template>

<script>
 
export default{
  name:'SchoolName',
  data() {
 
    return {
      name:'尚硅谷',
    addres:'北京',
   
    }
  },
 /*   mixins:[mixin,mixin2] */
   
  
 
}

</script>

<style scoped>
 .demi{
   background-color:skyblue;
 }
</style>
