<template>
  <div class="main">
    <!-- 查询地址/酒店价格 -->
    <HotelFilter :allHotel="allData" @setCity="setCity" />
    <!-- 描述/地图 -->
    <DepictAndMap :cities="cities" />
    <!-- 列表详情 筛选 -->
    <ListFilter :allHotel="allData" />
    <!-- 酒店列表 -->
    <HotelList :allHotel="allData" :cities="cities" />
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
      allData: [],
      // 客户输入的搜索城市
      cities: {}
    };
  },
  methods: {
    setCity(value) {
      this.cities = value;
      console.log(1234,value)
      this.reqHotelData(this.cities.cityId)
    },
    reqHotelData(id) {
      // console.log(id)
      this.$axios({
        url: `/hotels?city=` + id
      }).then(res => {
        // console.log(res);
        const { data } = res.data;
        // console.log(data);
        this.allData = data;
        // console.log(this.allData);
      });
    }
  },
  mounted() {
    // 调用 获取酒店列表数据
    this.reqHotelData("南京市");
    //   this.$axios({
    //     url: `/hotels`
    //   }).then(res => {
    //     // console.log(res)
    //     const { data } = res.data;
    //     // console.log(data)
    //     this.allData = data;
    //     // console.log(this.allData)
    //   });
  },
  // watch: {
  //   cities: {
  //     handler: function(cities) {
  //       console.log(123456)
  //       this.reqHotelData(this.cities.cityId);
  //       console.log(12345611111)
  //     },
  //     deep: true
  //   }
  // }
};
</script>

<style lang="less" scoped>
</style>