<template>
  <div class="container">
    <!-- 面包屑 -->
    <div class="crumbs">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">酒店</el-breadcrumb-item>
        <el-breadcrumb-item>{{allData.real_city}}酒店</el-breadcrumb-item>
        <el-breadcrumb-item>{{allData.name}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <!-- 酒店标题 -->
    <div class="title">
      <h3>
        {{allData.name}}
        <i data-v-897da0f4 class="icon iconfont"></i>
      </h3>
      <p>{{allData.alias}}</p>
      <p>
        <i class="el-icon-location"></i>
        {{allData.address}}
      </p>
    </div>

    <!-- 酒店展示图 -->
    <div class="banner">
      <HotelBannerImg :listImg="allData" />
    </div>

    <!-- 酒店价格表 -->
    <div class="hotelList">
      <HotelPrice :list="allData" />
    </div>

    <!--地图展示 -->
    <div class="map">
      <HotelMap />
    </div>

    <div class="hotelInfo">
      <HotelInfo :list="allData" />
    </div>

    <!-- 评论 -->
    <div class="comment">
      <HotelComment :list="allData" />
    </div>
  </div>
</template>

<script>
import HotelMap from "@/components/hotel/hotelMap";
import HotelInfo from "@/components/hotel/hotelInfo";
import HotelPrice from "@/components/hotel/hotelPrice";
import HotelComment from "@/components/hotel/hotelComment";
import HotelBannerImg from "@/components/hotel/hotelBannerImg";
export default {
  components: {
    HotelMap,
    HotelInfo,
    HotelPrice,
    HotelComment,
    HotelBannerImg
  },
  data() {
    return {
      allData: {}
    };
  },
  mounted() {
    let { id } = this.$route.query;

    this.$axios({
      url: "/hotels?id=" + id
    }).then(res => {
      const arr = res.data.data;
      this.allData = arr[0];
      console.log(this.allData);
    });
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
      .iconfont {
        // padding-bottom: 10px;
        font-size: 20px;
        color: orange;
      }
    }
    p {
      font-size: 14px;
      color: #333333;
    }
  }
  .banner {
    margin: 50px 0;

    // background: pink;
  }

  .map {
    margin: 50px 0;
    width: 100%;
    height: 400px;
    // background: pink;
  }

  .comment {
    margin: 50px 0;
    // height: 300px;
    // background: pink;
  }
}
</style>