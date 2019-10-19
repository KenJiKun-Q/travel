<template>
  <div style="padding:50px">
      <h3>高德地图</h3>

      <!-- 地图的容器 -->
      <div id="container" ></div>
  </div>
</template>

<script>
export default {
  mounted(){
    window.onLoad  = function(){
        var map = new AMap.Map('container', {
        zoom:15,//级别
        center: [113.3245904, 23.1066805],//中心点坐标
        // viewMode:'3D'//使用3D视图
    });
     var marker = new AMap.Marker({
        content: `<div style="width:20px; height:20px; border-radius: 50px; background:red; color:#fff; text-align:center; line-height: 20px;">99</div>`,
        position:[113.3245904, 23.1066805]//位置
      })
      map.add(marker);//添加到地图
  }
  var url = 'https://webapi.amap.com/maps?v=1.4.15&key=6481c23fff9e9aeef30be9f0742acc63&callback=onLoad';
  var jsapi = document.createElement('script');
  jsapi.charset = 'utf-8';
  jsapi.src = url;
  document.head.appendChild(jsapi);
  }
}
 
</script>

<style>
  #container {
    width:500px; 
    height: 380px;
  }  
</style>