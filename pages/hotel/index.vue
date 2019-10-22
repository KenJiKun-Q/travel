<template>
  <div class="main">
    <!-- 查询地址/酒店价格 -->
    <HotelFilter :allHotel="allData" />
    <!-- 描述/地图 -->
    <DepictAndMap :allHotel="allData" />
    <!-- 列表详情 筛选 -->
    <ListFilter :allHotel="allData" />
    <!-- 酒店列表 -->
    <HotelList :allHotel="allData" />
  </div>
</template>

<script>
// 查询地址/酒店价格 组件
import HotelFilter from "@/components/hotel/hotelFilter";
// 描述/地图 组件
import DepictAndMap from "@/components/hotel/depictAndMap";
// 多重筛选组件
import ListFilter from "@/components/hotel/listFilter";
// 酒店词条 组件
import HotelList from "@/components/hotel/hotelList";

export default {
  components: {
    HotelFilter,
    DepictAndMap,
    ListFilter,
    HotelList
  },
  data() {
    return {
      allData: []
    };
  },
  methods: {
    setAllData() {}
  },
  // mounted() {
  //   this.$axios({
  //     url: `/hotels`
  //   }).then(res => {
  //     // console.log(res)
  //     const { data } = res.data;
  //     // console.log(data)
  //     this.allData = data;
  //     // console.log(this.allData)
  //   });
  // }
};
</script>

<style lang="less" scoped>
</style>