<template>
  <div class="container">
    <el-row class="hotel-title" type="flex" justify="space-between">
      <el-col :span="10">价格来源</el-col>
      <el-col :span="10">低价房型</el-col>
      <el-col :span="4">最低价格/每晚</el-col>
    </el-row>
    <nuxt-link :to="`/`" class="list">
      <el-row class="hotel-title" type="flex" justify="space-between">
        <el-col :span="10">hotels.com</el-col>
        <el-col :span="10">高级大床房A</el-col>
        <el-col :span="4">
          <span class="price">￥50</span> 起
          <i class="el-icon-arrow-right color"></i>
        </el-col>
      </el-row>
    </nuxt-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.container {
  .list {
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