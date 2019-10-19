<template>
  <div style="padding: 50px">
      <h3>组件递归</h3>
      <!-- 无法知道数据有多少层 -->
      <!-- <div v-for="(item,index) in list" :key="index">
        {{item.name}}
        <div v-for="(item,index) in item.children" :key="index">
          {{item.name}}
          <div v-for="(item,index) in item.children" :key="index">
            {{item.name}}
          </div>
        </div>
      </div> -->
    <MenuItem :data="list"/>

  </div>
</template>

<script>
import MenuItem from "@/components/post/menuItem"
export default {
  components:{
    MenuItem
  },
  data(){
    return{
      list:[
        {
          name:"服装",
          children:[
            {name:"男装",children:[
              {name:"正装"},
              {name:"休闲装"},
              {name:"运动装"}
            ]},
            {name:"女装",children:[
              {name:"正装"},
              {name:"休闲装"},
              {name:"运动装"}
            ]},
            {name:"童装",children:[
              {name:"正装"},
              {name:"休闲装"},
              {name:"运动装"}
            ]}
          ]
        }
      ]
    }
  }
}
</script>

<style>

</style>