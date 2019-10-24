<template>
  <div class="main">
    <!-- 查询地址/酒店价格 -->
    <HotelFilter :allHotel="allData" @setCity="setCity" />
    <!-- 描述/地图 -->
    <DepictAndMap :cities="cities" :allArea="allArea" />
    <!-- 列表详情 筛选 -->
    <ListFilter :allHotel="allData" />
    <!-- 酒店列表 -->
    <HotelList :allHotel="allData" :cities="cities"/>
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
      cities: {},
      // 所有的 推荐区域
      allArea: [],
    };
  },
  methods: {
    // 
    setCity(value) {
      this.cities = value;
      // console.log(1234,value)
      this.reqHotelData(this.cities.cityId)
      // 调用 获取 城市推荐区域
    this.requestAreaData(this.cities.inputCities);
    },
    // 请求 需要城市的 酒店列表数据
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
    },
     // 请求 城市 推荐区域 的数据
    requestAreaData(city) {
      this.allArea = [];
      // console.log("Search / Default", city);
      if (!city) return;
      this.$axios({
        url: `/cities?name=` + city
      }).then(res => {
        // console.log(res);
        const { data } = res.data;
        // console.log(this.scenics)
        data[0].scenics.map(v => {
          // console.log(v.name)
          this.allArea.push(v.name);
          // console.log(this.allArea)
        });
      });
    }
  },
  mounted() {
    // 调用 获取酒店列表数据
    this.reqHotelData("南京市");
  },
};
</script>

<style lang="less" scoped>
</style>