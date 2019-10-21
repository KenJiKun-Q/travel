<template>
  <!-- 地图的容器 -->
  <div class="map">
    <div id="container"></div>
    <div class="mapList">
      <div class="title">
        <span>风景</span>
        <span style="margin-left:20px">交通</span>
      </div>
      <div id="panel"></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleSeach() {
      this.map;
    },
    map() {
      var map = new AMap.Map("container", {
        resizeEnable: true,
        zoom: 11, //级别
        center: [113.3245904, 23.1066805] //中心点坐标
      });

      //    多标记
      AMap.service(["AMap.PlaceSearch"], function() {
        var placeSearch = new AMap.PlaceSearch({
          //构造地点查询类
          //   pageSize: 5,
          //   pageIndex: 1,
          city: "020", //城市
          map: map,
          panel: "panel"
        });
        //关键字查询
        placeSearch.search("");
      });
    }
  },
  mounted() {
    window.onLoad = () => {
      this.map();
    };
    var url =
      "https://webapi.amap.com/maps?v=1.4.15&key=e483ee3766c4280708c652edaf47efa0&callback=onLoad";
    var jsapi = document.createElement("script");
    jsapi.charset = "utf-8";
    jsapi.src = url;
    document.head.appendChild(jsapi);
  }
};
</script>

<style scoped lang="less">
.map {
  display: flex;
  justify-content: space-between;
  #container {
    width: 625px;
    height: 400px;
  }
  .mapList {
    position: relative;
    height: 400px;
    background-color: white;
    width: 350px;
    .title {
      //   background: rgb(214, 139, 139);
      height: 40px;
      width: 100%;
      border-bottom: 2px solid #e4e7ed;
      box-sizing: border-box;
      span {
        padding: 0 10px;
        line-height: 40px;
      }
    }
    #panel {
      position: absolute;
      top: 20;
      right: 0;
      //   max-height: 100%;
      height: 360px;
      width: 100%;
      overflow-y: auto;
    }
  }
}
</style>