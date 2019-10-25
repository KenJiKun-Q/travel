<template>
  <div class="main">
    <!-- 查询地址/酒店价格 -->
    <HotelFilter :allHotel="allData" @setCity="setCity" />
    <!-- 描述/地图 -->
    <DepictAndMap :cities="cities" :allArea="allArea" :allData="allData" />
    <!-- 列表详情 筛选 -->
    <ListFilter
      @setFilterLevels="setFilterLevels"
      @setFilterPrice="setFilterPrice"
      :allHotel="allData"
      :HotelOptions="HotelOptions"
      :cities="cities"
    />
    <!-- 酒店列表 -->
    <HotelList :allHotel="allData" :cities="cities" />
    <!--  -->
    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[2, 3, 5]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="this.total"
    ></el-pagination>
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
    HotelList,
  },
  data() {
    return {
      allData: [],
      // 客户输入的搜索城市
      cities: {},
      // 所有的 推荐区域
      allArea: [],
      // 酒店选项 assets[]-酒店设施 brands-酒店品牌 levels-酒店等级 types-酒店类型
      HotelOptions: {},
      currentPage: 1, // 当前页数
      limit: 2, // 默认条数
      start: 0, // 默认开始位置
      total: 0 // 总条数
    };
  },
  methods: {
    // 价格筛选
    setFilterPrice(val) {
    //   this.allData = [];
    //   this.$axios({
    //     url: `/hotels?city=${this.cities.cityId}&price_in=`
    //   }).then(res => {
    //     // console.log(res);
    //     const { data } = res.data;
    //     console.log(data);
    //     this.allData = data
    //   });
    },
    // 筛选
    setFilterLevels(val) {
      // console.log(123456,value)
      // this.allData = value;
      // console.log(this.allData)

      // 
      // var strLevels = "";
      this.allData = [];
      // console.log(val)
      val.forEach(v => {
        // strLevels += "&hotellevel=" + v;
        this.$axios({
          url: `/hotels?city=${this.cities.cityId}&hotellevel=${v}`
        }).then(res => {
          // console.log(res);
          const { data } = res.data;
          // console.log(data);
          this.allData.push(...data);
          // console.log(this.filterLevels);
          // console.log(this.allData);
          // this.total = this.allData.total
        });
      });
    },
    // pageSize 改变时会触发（每页条数）
    handleSizeChange(val) {
      // &_limit=${this.limit}&_start=${this.start}
      this.limit = val;
      this.reqHotelData(this.cities.cityId, this.limit, this.start);
    },
    // currentPage 改变时会触发（当前页）
    handleCurrentChange(val) {
      // this.setStart = val
      this.reqHotelData(this.cities.cityId, this.limit, (val - 1) * this.limit);
    },
    //
    setCity(value) {
      this.cities = value;
      // console.log(1234,value)
      this.reqHotelData(this.cities.cityId, this.limit, this.start);
      // 调用 获取 城市推荐区域
      this.requestAreaData(this.cities.inputCities);
    },
    // 请求 需要城市的 数据
    reqHotelData(id, limit, start) {
      this.$axios({
        url: `/hotels?city=${id}&_limit=${limit}&_start=${start}`
      }).then(res => {
        // console.log(res);
        this.total = res.data.total;
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
    },
    // 酒店选项请求
    reqHotelOptions() {
      this.$axios({
        url: "/hotels/options"
      }).then(res => {
        const { data } = res.data;
        // console.log(data)
        this.HotelOptions = data;
      });
    }
  },
  mounted() {
    this.reqHotelOptions();
    // 调用 获取 城市推荐区域
    // this.requestAreaData(this.cities.inputCities,this.limit,this.start);
  }
};
</script>

<style lang="less" scoped>
.el-pagination {
  text-align: center;
  padding: 15px 0;
}
</style>