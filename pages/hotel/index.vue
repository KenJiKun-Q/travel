<template>
  <div style="padding:50px">
    <h3>高德地图</h3>

    <el-row style="margin-bottom:20px;">
      <el-col :span="5">
        <el-input placeholder="出发地点" v-model="start"></el-input>
      </el-col>
      <el-col :span="5">
        <el-input placeholder="到达地点" v-model="end"></el-input>
      </el-col>
      <el-button :span="2" @click="handleSearch">搜索</el-button>
    </el-row>
    <!-- 地图的容器 -->
    <div id="container"></div>
    <div id="panel"></div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      start:"",
      end:""
    }
  },
  methods:{
    handleSearch(){
      this.map()
    },
    map(){
      var map = new AMap.Map('container',{
        zoom:11,//级别
      })

      AMap.plugin(['AMap.ToolBar','AMap.Driving'],() => {//异步加载插件
          var toolbar = new AMap.ToolBar();
          map.addControl(toolbar);

          // 驾车路线的插件
          var driving = new AMap.Driving({
            map: map,
            panel: "panel",
            policy: AMap.DrivingPolicy.LEAST_TIME
          });//驾车路线规划

          var points = [
            { keyword: this.start },
            { keyword: this.end }
          ]

          driving.search(points, function (status, result) { 
          })
        });
    }
  },
  mounted() {
   window.onload = () =>{
     this.map()
   }
    var url =
       "https://webapi.amap.com/maps?v=1.4.15&key=e3c936027dd8c0a7d48d60c4db2e827e&callback=onLoad";
    var jsapi = document.createElement("script");
    jsapi.charset = "utf-8";
    jsapi.src = url;
    document.head.appendChild(jsapi);
  }
};
</script>

<style>
#container {
  width: 500px;
  height: 380px;
}

#panel {
  position: fixed;
  background-color: white;
  max-height: 90%;
  overflow-y: auto;
  top: 10px;
  right: 10px;
  width: 280px;
}
#panel .amap-call {
  background-color: #009cf9;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
#panel .amap-lib-driving {
border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  overflow: hidden;
}
</style>