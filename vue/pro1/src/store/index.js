//创建
import Vue from 'vue'
import Vuex from 'vuex'
//准备actions用于响应组件中的动作
Vue .use(Vuex)

const actions ={
  jia(context,value){
    console.log('actions中的jia被调用了')
context.commit('JIA',value)
  },
  jian(context,value){
    console.log('actions中的jian被调用了')
context.commit('JIAN',value)
  }
}
//准备mutations用于操作数据(state)
const mutations ={
  JIA(state,value){
    console.log('mutations中的JIA被调用了') 
   state.sum += value
  },
  JIAN(state,value){
    console.log('mutations中的JIAN被调用了') 
   state.sum -= value
  },
  ADD_PERSON(state,value){
 console.log('mutations中的ADD_PERSON被调用了') 
  state.personList.unshift(value)
  }
}
//
const state ={
   sum:0,//当前的和
   personList:[
     {id:'001',name:'张三'}
   ]
}
//创建并暴露store
export default new Vuex.Store({
  actions,
  mutations,
  state,
})
