<template>
  <div class="container">
    <div class="city-list">
      <div class="city-list-top clearfix"></div>
      <div class="city-list-left clearfix" v-for="(item,index) in data" :key="index">
        <a href="#" class="fl">{{item.type}}</a>
        <i class="el-icon-arrow-right fr"></i>
      </div>
      <div class="city-list-right">
        <div class="city-list-right-info">
          <em>1</em>
          <i>北京</i>
          <span>世界著名古都和现代化国际城市</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"]
};
</script>

<style scoped lang="less">
.container {
  margin: 20px 0;
  .city-list {
    .city-list-top {
      position: relative;
      width: 260px;
      border-bottom: 1px #ddd solid;
    }
    .city-list-left {
      box-sizing: border-box;
      width: 260px;
      height: 41px;
      text-align: center;
      line-height: 41px;
      border-left: 1px #ddd solid;
      border-right: 1px #ddd solid;
      border-bottom: 1px #ddd solid;
      padding: 0 20px;

      i {
        line-height: 41px;
        font-size: 20px;
      }
    }
    .city-list-right {
      position: absolute;
      top: 20px;
      left: 260px;
      .city-list-right-info {
        height: 41px;
        line-height: 41px;
        border-left: 1px #ddd solid;
        border-right: 1px #ddd solid;
        em {
          font-style: italic;
          color: #ffa500;
          font-size: 28px;
          font-weight: 400;
          padding-left: 10px;
        }
        i {
          color: #ffa500;
          padding-left: 10px;
        }
        span {
          padding-left: 10px;
          color: 666;
        }
      }
    }
  }
}
</style>