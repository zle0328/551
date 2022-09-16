<template >
  <div>
    <h1>当前求和为：{{sum}}</h1>
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
     sum:0//当前的和
   }
 },
 methods: {
   increment(){
   this.sum+=this.n
   },
  decrement(){
   this.sum-=this.n

  },
  decrementOdd(){
    if(this.sum % 2)
   this.sum+=this.n

  },
  decrementWait(){
setTimeout(()=>{
   this.sum+=this.n

},500)
  }
 },
  
}
</script>
<style lang="css">
 button{
   margin-left: 5px;
 }

</style>