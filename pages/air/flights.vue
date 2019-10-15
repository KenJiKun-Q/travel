<template>
  <section class="contianer">
    <el-row type="flex" justify="space-between">
      <!-- 顶部过滤列表 -->
      <div class="flights-content">
        <!-- 过滤条件 -->
        <div></div>

        <!-- 航班头部布局 -->
        <FlightsListHead />

        <!-- 航班信息 -->
        <FlightsItem
        v-for="(item,index) in flightsData.flights"
        :key="index"
        :item="item"/>

        <!-- 分页 -->
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[5, 10, 15, 20]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="flightsData.total">
        </el-pagination>
      </div>

      <!-- 侧边栏 -->
      <div class="aside">
        <!-- 侧边栏组件 -->
      </div>
    </el-row>
  </section>
</template>

<script>
import FlightsListHead from "@/components/air/flightsListHead.vue";

import FlightsItem from "@/components/air/flightsItem.vue";

import moment from "moment";

export default {
  components: {
    FlightsListHead,
    FlightsItem
  },
  data() {
    return {
        flightsData:{},

    };
  },
  mounted(){
      this.$axios({
          url:"/airs",
          //params,是axios的get参数,相当于在url后拼接参数
          params:this.$route.query
      }).then(res => {
        //   保存机票的总数据
        this.flightsData = res.data
        console.log(this.flightsData)
      })
    //   console.log(this.$route.query)
  },
  methods:{
      handleSizeChange(){

      },
      handleCurrentChange(){
          
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