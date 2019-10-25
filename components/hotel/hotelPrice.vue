<template>
  <div class="container">
    <el-row class="hotel-title" type="flex" justify="space-between">
      <el-col :span="10">价格来源</el-col>
      <el-col :span="10">低价房型</el-col>
      <el-col :span="4">最低价格/每晚</el-col>
    </el-row>
    <div class="list" @click="handleHref" v-for="(item,index) in arr" :key="index">
      <el-row class="hotel-title" type="flex" justify="space-between">
        <el-col :span="10">{{item.name}}</el-col>
        <el-col :span="10">{{item.bestType}}</el-col>
        <el-col :span="4">
          <span class="price">￥{{item.price}}</span> 起
          <i class="el-icon-arrow-right color"></i>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allData: {},
      arr: []
    };
  },
  methods: {
    handleHref() {
      window.location.href = "http://hotels.ctrip.com/hotel/694679.html";
    }
  },
  props: {
    list: {
      type: Object,
      default: {}
    }
  },
  mounted() {
    // console.log(666, this.list);

    setTimeout(() => {
      this.arr = this.list.products;
      console.log(this.arr, 333);
    }, 1000);
  }
};
</script>

<style scoped lang="less">
.container {
  .list {
    cursor: pointer;
    :hover {
      background: #f5f7fa;
    }
  }
  .hotel-title {
    padding: 15px 10px;
    border-bottom: 1px solid #ebeef5;

    .price {
      font-size: 20px;
      color: orange;
    }
    .color {
      color: orange;
    }
  }
}
</style>