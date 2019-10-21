<template>
  <div class="container">
    <!-- 面包屑 -->
    <div class="crumbs">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">酒店</el-breadcrumb-item>
        <el-breadcrumb-item>南京酒店</el-breadcrumb-item>
        <el-breadcrumb-item>好来阁商务宾馆</el-breadcrumb-item>
        <!-- <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
      </el-breadcrumb>
    </div>

    <!-- 酒店标题 -->
    <div class="title">
      <h3>好来阁商务宾馆</h3>
      <p>hao lai ge shang wu hotel</p>
      <p>高淳县淳溪镇镇兴路118号(高淳县委党校对面)</p>
    </div>

    <!-- 酒店展示图 -->
    <div class="banner"></div>

    <!-- 酒店价格表 -->
    <div class="hotelList">
      <el-row class="flight-title" type="flex" justify="space-between">
        <el-col :span="10">价格来源</el-col>
        <el-col :span="10">低价房型</el-col>
        <el-col :span="4">最低价格/每晚</el-col>
      </el-row>
      <el-row class="flight-title" type="flex" justify="space-between">
        <el-col :span="10">hotels.com</el-col>
        <el-col :span="10">高级大床房A</el-col>
        <el-col :span="4">￥50 起 &gt;</el-col>
      </el-row>
      <el-row class="flight-title" type="flex" justify="space-between">
        <el-col :span="10">hotels.com</el-col>
        <el-col :span="10">高级大床房A</el-col>
        <el-col :span="4">￥50 起 &gt;</el-col>
      </el-row>
      <el-row class="flight-title" type="flex" justify="space-between">
        <el-col :span="10">hotels.com</el-col>
        <el-col :span="10">高级大床房A</el-col>
        <el-col :span="4">￥50 起 &gt;</el-col>
      </el-row>
    </div>

    <!--地图展示 -->
    <div class="map">
      <HotelMap />
    </div>
    <div class="hotelInfo">
      <el-row class="flight-title" type="flex" justify="space-between">
        <el-col :span="4">基本信息</el-col>
        <el-col :span="20">
          <el-row>
            <el-col :span="6">入住时间: 14:00之后</el-col>
            <el-col :span="6">离店时间: 12:00之前</el-col>
            <el-col :span="6">2010年开业 / 2015装修</el-col>
            <el-col :span="6">酒店规模: 148间客房</el-col>
          </el-row>
        </el-col>
      </el-row>

      <el-row class="flight-title" type="flex" justify="space-between">
        <el-col :span="4">基本信息</el-col>
        <el-col :span="20">
          <span>外币兑换服务</span>
          <span>电梯</span>
          <span>洗衣服务</span>
          <span>热水壶</span>
        </el-col>
      </el-row>

      <!-- 评论 -->
      <div class="comment"></div>
    </div>
  </div>
</template>

<script>
import HotelMap from "@/components/hotel/hotelMap";
export default {
  components: {
    HotelMap
  }
};
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
      padding: 15px 0;
      border-bottom: 1px solid #ebeef5;
    }
  }
  .map {
    margin: 50px 0;
    width: 100%;
    height: 400px;
    // background: pink;
  }
  .hotelInfo {
    font-size: 12px;
    .flight-title {
      padding: 15px 0;
      border-bottom: 1px solid #ebeef5;
      span {
        background: #eeeeee;
        margin-right: 10px;
        border-radius: 5px;
        padding: 5px 10px;
      }
    }
  }
  .comment {
    margin: 50px 0;
    height: 300px;
    background: pink;
  }
}
</style>