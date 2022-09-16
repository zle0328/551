<<template >
  <div>
    <button @click="isShow=!isShow">显示/隐藏 </button>
    <transition>
    <h1 v-show="isShow" appear>你好啊！</h1>
    </transition>
  </div>
</template>
<script>
export default {
  name:'MyText',
  data() {
    return {
      isShow:true
    }
  },
}
</script>
<style scoped>
  h1{
    background-color: orange;
  }
  .v-enter-active{
    animation: atguigu 1s;
  }
  .v-leave-active{
    animation: atguigu 1s reverse;
  }
  @keyframes atguigu{
    from{
      transform: translateX(-100%);
    }
    to{
      transform: translateX(0px);
    }
  }

</style>