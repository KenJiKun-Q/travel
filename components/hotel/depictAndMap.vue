<template>
  <!-- 描述/地图 页 -->
  <div class="main">
    <!-- 左侧 文字 -->
    <div class="left_depict">
      <!-- 区域 -->
      <el-row class="area">
        <el-col :span="3" class="area_left">区域：</el-col>
        <el-col :span="21" class="area_right">
          <div class="path" ref="showArea">
            <span class="all">全部</span>
            <a href="#" v-for="(item,index) in this.allArea" :key="index">{{item}}</a>
          </div>
          <p @click="showAllArea">
            <i :class="switchArea?'el-icon-d-arrow-left':'el-icon-d-arrow-right'"></i>
            等{{this.allArea.length}}个区域
          </p>
        </el-col>
      </el-row>
      <!-- 攻略 -->
      <el-row class="strategy">
        <el-col :span="3" class="strategy_left">攻略：</el-col>
        <el-col
          :span="21"
          class="strategy_right"
        >北京，你想要的都能在这找到。博古通今，兼容并蓄，天下一城，如是帝都。 景点以故宫为中心向四处辐射；地铁便宜通畅，而且覆盖绝大多数景点。 由于早上有天安门升旗仪式，所以大多数人选择在天安门附近住宿。</el-col>
      </el-row>
      <!-- 均价 -->
      <el-row class="averagePrice">
        <el-col :span="3" class="averagePrice_left">
          均价 ：
          <el-tooltip
            class="item"
            effect="dark"
            content="等级均价由平日价格计算得出，节假日价格会有上浮。"
            placement="top-start"
          >
            <i class="el-icon-info"></i>
          </el-tooltip>
        </el-col>
        <el-col :span="21" class="averagePrice_right">
          <span>
            <i class="icon iconfont">&#xe601;&#xe601;&#xe601;</i>

            <span>￥300</span>
          </span>
          <span>
            <i class="icon iconfont">&#xe601;&#xe601;&#xe601;&#xe601;</i>

            <span>￥500</span>
          </span>
          <span>
            <i class="icon iconfont">&#xe601;&#xe601;&#xe601;&#xe601;&#xe601;</i>

            <span>￥700</span>
          </span>
        </el-col>
      </el-row>
    </div>
    <div class="right_map">
      <div id="container"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cities","allArea"],
  data() {
    return {
      // 总数据
      allData: [],
      // scenics: [],
      //
      setAllArea: [],
      switchArea: false
      // setInputCity: this.inputCities
    };
  },
  methods: {
    // 点击 显示/隐藏 所有的区域
    showAllArea() {
      if (!this.switchArea) {
        this.$refs.showArea.style.maxHeight = 40 + `px`
          this.switchArea = true
      } else {
        this.$refs.showArea.style.maxHeight = 150 + `px`
        this.switchArea = false
      }
    },

  },
  mounted() {
    // console.log(this.cities)
    // 获取区域
    setTimeout(() => {
      // console.log(this.allArea)
    }, 0);

    // 高的地图API
    window.onLoad = function() {
      var map = new AMap.Map("container");
    };
    var url =
      "https://webapi.amap.com/maps?v=1.4.15&key=977ed4a98a158714912af1453b6fbdbf&callback=onLoad";
    var jsapi = document.createElement("script");
    jsapi.charset = "utf-8";
    jsapi.src = url;
    document.head.appendChild(jsapi);
  }

};
</script>

<style lang="less" scoped>
.main {
  display: flex;
  width: 1000px;
  height: 300px;
  margin: 0 auto;
  // 左侧 文字
  .left_depict {
    flex: 1.5;
    color: #666;
    padding-right: 10px;
    // 区域
    .area {
      color: #666;
      font-size: 14px;
      margin-bottom: 10px;
      .area_right {
        .path {
          position: relative;
          max-height: 40px;
          overflow: hidden;
          .all {
            color: #999;
            background: #eee;
            border-radius: 3px;
            padding: 1px 1px 0 1px;
            margin-right: 10px;
          }
          a {
            margin-right: 10px;
          }
          a:hover {
            text-decoration: underline;
            color: #0099ff;
          }
        }
        p {
          cursor: pointer;
          i {
            transform: rotate(90deg);
            margin: 0 5px;
            color: #ff9900;
          }
        }
      }
    }
    // 攻略
    .strategy {
      color: #666;
      font-size: 14px;
      margin-bottom: 10px;
    }
    // }
    // 均价
    .averagePrice {
      color: #666;
      font-size: 14px;
      margin-bottom: 5px;
      .averagePrice_left {
        position: relative;
        i {
          position: absolute;
          left: 30px;
          color: #999;
        }
      }
      .averagePrice_right {
        span {
          margin-right: 15px;
          i {
            color: #ff9900;
          }
        }
      }
    }
  }
  // 右侧 地图
  .right_map {
    flex: 1;
    border: 1px solid #eee;
    #container {
      width: 100%;
      height: 100%;
    }
  }
}
</style>