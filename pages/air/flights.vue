<template>
  <section class="contianer">
    <el-row type="flex" justify="space-between">
      <!-- 顶部过滤列表 -->
      <div class="flights-content">
        <!-- 过滤条件 -->
         <FlightsFilters :data="cacheFlightsData" @setDataList="setDataList"/>

        <!-- 航班头部布局 -->
        <FlightsListHead/>

        <!-- 航班信息 -->
        <FlightsItem
        v-for="(item,index) in dataList"
        :key="index"
        :item="item"/>

        <!-- 分页 -->
        <el-pagination
         v-if="flightsData.flights.length"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="pageIndex"
            :page-sizes="[5, 10, 15, 20]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
        </el-pagination>


        <!-- loading等于false表示加载完毕之和才显示 -->
        <div v-if="flightsData.flights.length === 0 && !loading"
        style="padding:50px; text-align:center">
            暂无该航班数据
        </div>
      </div>

      <!-- 侧边栏 -->
      <div class="aside">
        <!-- 侧边栏组件 -->
        <FlightsAside/>
      </div>
    </el-row>
  </section>
</template>

<script>
import FlightsListHead from "@/components/air/flightsListHead.vue";

import FlightsItem from "@/components/air/flightsItem.vue";
import FlightsFilters from "@/components/air/flightsFilters.vue";
import FlightsAside from "@/components/air/flightsAside.vue";


export default {
  components: {
    FlightsListHead,
    FlightsItem,
    FlightsFilters,
    FlightsAside
  },

  computed:{
    //从flights总列表数据中切割出来的数组列表
    dataList(){
      let arr = this.flightsData.flights.slice(
        (this.pageIndex - 1) * this.pageSize,
        this.pageIndex * this.pageSize
      )
      return arr;
    },
  },
  data() {
    return {
        flightsData:{
          //初始值
          flights:[],
          info:{},
          options:{}
        },
        //声明多一份总数据,该总数据,一旦赋值之后不会再被修改,也就是第一次赋值完后的值等于flightsData
        cacheFlightsData:{
          //初始值
          flights:[],
          info:{},
          options:{}
        },
        // dataList:[],

        //当前页
        pageIndex:1,
        //当前的条数
        pageSize:5,
        //判断是否正在加载
        loading:true,

        //分页条数
        total:0
    };
  },
  mounted(){
     this.getList()
    //   console.log(this.$route.query)
  },
  methods:{
      handleSizeChange(val){
        //切换条数
        this.pageSize = val;

      },
      handleCurrentChange(val){
          this.pageIndex = val
      },
      //给过滤组件修改flightsData的flights
      setDataList(arr){
        //根据过滤条件修改列表
        this.flightsData.flights = arr;
        // console.log(this.flightsData.flights)

        //修改分页的初始值
        this.total = arr.length;
        this.pageIndex = 1;
      },
      getList(){
        this.$axios({
          url:"/airs",
          //params,是axios的get参数,相当于在url后拼接参数
          params:this.$route.query
        }).then(res => {
          //   保存机票的总数据
          this.flightsData = res.data
          // console.log(this.flightsData)

          //赋值多一份给缓存的对象,一旦赋值之后不能再被修改
          this.cacheFlightsData = {...res.data}

          //请求完毕
          this.loading = false

          //分页总数
          this.total = this.flightsData.total;
        })
      }
  },

  watch:{
    // 监听路由
    $route(){
      //请求列表数据
      this.getList()
    }
  }
};
</script>

<style scoped lang="less">
.contianer {
  width: 1000px;
  margin: 20px auto;
}

.flights-content {
  width: 745px;
  font-size: 14px;
}

.aside {
  width: 240px;
}
</style>