<<template >
  <transition name="todo" appear>
  
 
  <li>
          <label>
            <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
            <span v-show="!todo.isEdit">{{todo.title}}</span>
            <input v-show="todo.isEdit" type="text" :value="todo.title" @blur="handleBlur(todo,$event)" ref="inputTitle">
          </label>
          <button class="btn btn-danger" @click="handleDelete(todo.id)" >删除</button>
          <button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
        </li> </transition>
</template>
<script>
export default {
  name:'MyItem',
  //声名接收todo对象
  props:['todo'],
  methods: {
    handleCheck(id){
    //通知app组件将对应的todo对象的done值取反
   // this. checkTodo(id) 
    this.$bus.$emit('checkTodo',id)
    },
    //删除
    handleDelete(id){
      if(confirm('确定删除吗？')){
    //this.deleteTodo(id)
    this.$bus.$emit('deleteTodo',id)

      }
    },
    //编辑
    handleEdit(todo){
      if(todo.hasOwnProperty('isEdit')){
       todo.isEdit =true
      }else{ 
        console.log('@')
       this.$set( todo,'isEdit',true)
      }
    this.$nextTick(function(){
 this.$refs.inputTitle.focus()
    })
    },
    //失去焦点回调
    handleBlur(todo,e){
     todo.isEdit= false
     if(!e.target.value.trim()) return alert('输入不能为空!')
     this.$bus.$emit('updateTodo',todo.id,e.target.value)
    }
  },
 
}
</script>
<style scoped>
  /*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover{
  background-color: #ddd;
}
li:hover button{
  display: block;
}
.todo-enter-active{
    animation: atguigu 1s;
  }
  .todo-leave-active{
    animation: atguigu 1s reverse;
  }
  @keyframes atguigu{
    from{
      transform: translateX(100%);
    }
    to{
      transform: translateX(0px);
    }
  }
</style>