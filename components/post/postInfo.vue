<template>
  <div>
    <div class="container">
      <div class="city-top clearfix">
        <input type="text" placeholder="请输入想去的地方，比如：'广州'" />
        <i class="el-icon-search" @click="handleSearch"></i>
      </div>
      <div class="city-head clearfix">
        <i>推荐:</i>
        <span>
          <a href="#">广州</a>
        </span>
        <span>
          <a href="#">上海</a>
        </span>
        <span>
          <a href="#">北京</a>
        </span>
      </div>
      <div class="city-info clearfix">
        <div class="city-info-left fl">推荐攻略</div>
        <div class="city-info-right fr" @click="handleLink">
          <i class="el-icon-edit"></i> 写游记
        </div>
      </div>
      <div class="city-content">
        <div class="city-content-title">
          <a href="#">塞班贵？一定是你的打开方式不对！6000块玩转塞班</a>
        </div>
        <div class="city-content-details">
          <a href="#">
            大家对塞班岛总存在着这样的误解，知道它是美属地盘，就理所当然地觉得这里的花费一定很高，
            花费高有高的玩法，那如果只有6000块的预算呢？要怎么玩？关于旅行这件事，
            我们要让钱花得更有道理，收下这份攻略，带你6000块花式玩转塞班。图：塞班岛。
            by第5季旅游一、怎样用6000块玩转塞班？大多数出境游客人不做预算或最
          </a>
        </div>
        <div class="city-content-image">
          <a href="#">
            <img src="../../assets/pic_sea.jpeg" alt />
          </a>
          <a href="#">
            <img src="../../assets/pic_sea.jpeg" alt />
          </a>
          <a href="#">
            <img src="../../assets/pic_sea.jpeg" alt />
          </a>
        </div>
        <div class="city-content-info">
          <span>
            <i class="el-icon-location-outline"></i> 北京市
          </span>
          <span>by</span>
          <span>地球发动机</span>
          <span>
            <i class="el-icon-view"></i> 8412
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleSearch() {
      console.log(123);
    },
    handleLink() {
      console.log(123);
    }
  }
};
</script>

<style scoped lang="less">
.container {
  box-sizing: border-box;
  margin: 20px 0 0 10px;
  width: 700px;
  .city-top {
    position: relative;
    input {
      box-sizing: border-box;
      width: 100%;
      padding: 10px 0;
      border: 3px #ffa500 solid;
      text-indent: 2em;
    }
    i {
      position: absolute;
      font-size: 24px;
      right: 14px;
      top: 8px;
      font-weight: 300;
      color: #ffa500;
    }
  }
  .city-head {
    margin: 10px 0;
    font-size: 14px;
    color: #999;
    span {
      padding: 0 5px;
    }
  }
  .city-info {
    margin-top: 20px;
    text-align: center;
    border-bottom: 1px #ddd solid;

    .city-info-left {
      font-size: 20px;
      color: #ffa500;
      padding-bottom: 20px;
      border-bottom: 3px #ffa500 solid;
    }
    .city-info-right {
      padding: 10px 20px;
      background: #409eff;
      color: #fff;
      border-radius: 5px;
    }
  }
  .city-content {
    margin-bottom: 20px;
    .city-content-title {
      margin: 20px 0;
      font-size: 20px;
    }
    .city-content-details {
      color: #666666;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      margin-bottom: 20px;
    }
    .city-content-image {
      width: 100%;
      img {
        width: 32.5%;
      }
    }
    .city-content-info {
      color: #999999;
      margin-top: 10px;
      font-size: 13px;
      span {
        padding-right: 10px;
      }
    }
  }
}
</style>