<template>
  <div style="padding:50px">

      <div class="btns">
          <span v-for="(item,index) in ['首页','中页','尾页']" :key="index"
          @click="handleClick(index)"
          :class="{ active: index === current }">
            {{item}}
          </span>
      </div>

        <div v-if="current === 0">
            首页首页首页首页首页首页首页首页
        </div>

        <div v-if="current === 1">
            中页中页中页中页中页中页中页中页
        </div>


        <div v-if="current === 2">
            尾页尾页尾页尾页尾页尾页尾页尾页
        </div>

  </div>
</template>

<script>
export default {
    data(){
        return{
            current:0
        }
    },
    methods:{
        handleClick(index){
            this.current = index
        }
    }
}
</script>

<style lang='less'>
.btns{
    margin-bottom: 20px;
    span{
        cursor: pointer;
        border: 1px solid #333;
        margin-right: 10px;
        padding: 10px;
    }

    .active{
        color: blue;
        border-color: blue;
    }
}
</style>