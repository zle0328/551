<template >
  <div>
    <h1>人员列表</h1>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="add">添加</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{p.name}}</li>
     
    </ul>
  </div>
</template>
<script>
  import {nanoid} from 'nanoid'
export default {
  name:'PerSon',
  computed:{
  personList(){
    return this.$store.state.personList
  }
},
methods: {
  add(){
    const personObj={id:nanoid(),name:this.name}
   this.$store.commit('ADD_PERSON',personObj)
    this.name=''
  }
},
}
</script>
<style lang="">
  
</style>