<template>
  <div class="container">
    <div class="city-list">
      <div class="city-list-top clearfix" style="font-size:0;">推荐城市</div>
      <div class="city-list-left clearfix" v-for="(item,index) in datalist" :key="index">
        <span class="fl">{{item.type}}</span>
        <i class="el-icon-arrow-right fr"></i>
        <div class="city-list-right">
          <div
            class="city-list-right-info clearfix"
            v-for="(list,index) in item.children"
            :key="index"
          >
            <em class="fl">{{index+1}}</em>
            <i class="fl">
              <div @click="handleCityList(list)">{{list.city}}</div>
            </i>
            <span class="fl">{{list.desc}}</span>
          </div>
        </div>
      </div>
      <div class="city-list-bottom">
        <div class="city-list-bottom-top">
          <a href="#">推荐城市</a>
        </div>
        <div class="city-list-bottom-bottom">
          <a href="#">
            <img src="../../assets/pic_sea.jpeg" alt />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["datalist"],
  data() {
    return {
      postList: {}
    };
  },
  methods: {
    handleCityList(list) {
      // const { city } = this.data.cityname;
      this.$axios({
        url: `/posts?city=${list.city}`
      }).then(res => {
        // console.log(res.data);
        const { data } = res.data;
        this.postList = data;
        this.$emit("getPostInfo", this.postList);
      });
    }
  },
  mounted() {}
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
        z-index: 999;
        .city-list-right-info {
          height: 41px;
          line-height: 41px;
          border-left: 1px #ddd solid;
          border-right: 1px #ddd solid;
          em {
            font-style: italic;
            color: #ffa500;
            font-size: 24px;
            font-weight: 400;
            padding-left: 20px;
          }
          i {
            color: #ffa500;
            padding-left: 20px;
            font-size: 16px;
          }
          span {
            padding-left: 20px;
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
    .city-list-bottom {
      width: 260px;
      margin-top: 20px;
      .city-list-bottom-top {
        width: 100%;
        padding: 10px 0;
        border-bottom: 1px #ddd solid;
      }
      .city-list-bottom-bottom {
        width: 100%;
        margin-top: 10px;
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>