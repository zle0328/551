<template >
  <div>
    <h1>当前求和为:{{$store.state.sum}}</h1>
   <!--  <h3>下方组件的总人数是:{{personList.length}}</h3> -->
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="decrementOdd">当前求和为奇数再加</button>
    <button @click="decrementWait">等一等再加</button>
  </div>
</template>
<script>
export default {
  name:'MyCount',
 data() {
   return {
     n:1,//用户选择的数字
    
   }
 },
 methods: {
   increment(){
   this.$store.dispatch('jia',this.n)
   },
  decrement(){
    this.$store.dispatch('jian',this.n)
  },
  decrementOdd(){
   if(this.$store.state.sum % 2){
    this.$store.dispatch('jia',this.n)

   }

  },
  decrementWait(){
setTimeout(()=>{
    this.$store.dispatch('jia',this.n)

},500)
  }
 },
 mounted() {
   console.log('Count',this)
 }, 
}
</script>
<style lang="css">
 button{
   margin-left: 5px;
 }

</style>