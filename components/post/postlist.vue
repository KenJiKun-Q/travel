<template>
  <div class="container">
    <div class="city-list">
      <div class="city-list-top clearfix" style="font-size:0;">111</div>
      <div class="city-list-left clearfix" v-for="(item,index) in data" :key="index">
        <a href="#" class="fl">
          <a href="#">{{item.type}}</a>
        </a>
        <i class="el-icon-arrow-right fr"></i>
        <div class="city-list-right">
          <div
            class="city-list-right-info clearfix"
            v-for="(list,index) in item.children"
            :key="index"
          >
            <em class="fl">{{index+1}}</em>
            <i class="fl">
              <a href="#">{{list.city}}</a>
            </i>
            <span class="fl">
              <a href="#">{{list.desc}}</a>
            </span>
          </div>
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

      .city-list-right {
        position: absolute;
        width: 400px;
        top: 20px;
        left: 260px;
        display: none;
        background: #fff;
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
            padding: 0 10px;
            color: 666;
          }
        }
        .city-list-right-info:first-child {
          border-top: 1px #ddd solid;
        }
        .city-list-right-info:last-child {
          border-bottom: 1px #ddd solid;
        }
        .city-list-right-info:nth-child(-n + 4) {
          border-left: none;
        }
      }
    }
    .city-list-left:hover {
      border-right: none;
      color: #ffa500;
      .city-list-right {
        display: block;
        span {
          color: #999999;
        }
      }
    }
  }
}
</style>