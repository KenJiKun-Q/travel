<template>
  <div class="container">
    <div class="crumbs">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">酒店</el-breadcrumb-item>
        <el-breadcrumb-item>南京酒店</el-breadcrumb-item>
        <el-breadcrumb-item>好来阁商务宾馆</el-breadcrumb-item>
        <!-- <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
      </el-breadcrumb>
    </div>
    <div class="title">
      <h3>好来阁商务宾馆</h3>
      <p>hao lai ge shang wu hotel</p>
      <p>高淳县淳溪镇镇兴路118号(高淳县委党校对面)</p>
    </div>
    <div class="banner"></div>
    <div class="hotelList">
      <el-row class="flight-title" type="flex" justify="space-between">
        <el-col :span="8">价格来源</el-col>
        <el-col :span="8">低价房型</el-col>
        <el-col :span="8">最低价格/每晚</el-col>
      </el-row>

      <el-row class="flight-title" type="flex" justify="space-between">
        <el-col :span="8">携程</el-col>
        <el-col :span="8">高级大床房A</el-col>
        <el-col :span="8">￥50 起 &gt;</el-col>
      </el-row>

      <el-row class="flight-title" type="flex" justify="space-between">
        <el-col :span="8">艺龙</el-col>
        <el-col :span="8">高级大床房A</el-col>
        <el-col :span="8">￥50 起 &gt;</el-col>
      </el-row>

      <el-row class="flight-title" type="flex" justify="space-between">
        <el-col :span="8">hotels.com</el-col>
        <el-col :span="8">高级大床房A</el-col>
        <el-col :span="8">￥50 起 &gt;</el-col>
      </el-row>
    </div>
    <div class="map"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.container {
  margin: 0 auto;
  width: 1000px;
  .crumbs {
    padding: 20px 0;
  }
  .title {
    h3 {
      font-weight: normal;
      font-size: 24px;
    }
    p {
      font-size: 14px;
      color: #333333;
    }
  }
  .banner {
    margin: 50px 0;
    width: 100%;
    height: 400px;
    background: pink;
  }
  .hotelList {
    .flight-title {
      padding: 10px 0;
      text-align: center;
      border-bottom: 1px solid #ebeef5;
    }
  }
  .map {
    margin: 50px 0;
    width: 100%;
    height: 400px;
    background: pink;
  }
}
</style>