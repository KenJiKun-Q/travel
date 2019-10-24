<template>
  <div class="city">
    <div class="city-top clearfix">
      <input
        type="text"
        v-model="cityInfo"
        placeholder="请输入想去的地方，比如：'广州'"
        @keyup.enter="handleSearch(cityInfo)"
      />
      <i class="el-icon-search" @click="handleSearch(cityInfo)"></i>
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
  </div>
</template>

<script>
export default {
  props: {
    city: {
      type: String,
      default: ""
    }
  },
  watch: {
    city() {
      this.cityInfo = this.city;
    }
  },
  data() {
    return {
      // 搜索关键词
      cityInfo: "",
      // 文章列表
      listInfo: []
    };
  },
  methods: {
    handleSearch(cityInfo) {
      this.listInfo = cityInfo;
      this.$emit("getPostList", this.listInfo);
    },
    handleLink() {
      this.$router.push("/post/postadd");
    }
  }
};
</script>

<style scopen lang="less">
.city {
  margin: 20px 0 0 10px;
  .city-top {
    margin-top: 20px;
    position: relative;
    input {
      box-sizing: border-box;
      width: 100%;
      padding: 10px 0;
      border: 3px #ffa500 solid;
      text-indent: 2em;
      outline: none;
    }
    input:focus {
      border: 3px #ffa500 solid;
    }
    i {
      position: absolute;
      font-size: 24px;
      right: 14px;
      top: 8px;
      font-weight: 300;
      color: #ffa500;
      cursor: pointer;
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
      cursor: pointer;
    }
  }
}
</style>