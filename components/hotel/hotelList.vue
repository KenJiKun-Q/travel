<template>
  <div class="main">
    <el-row v-for="(item,index) in this.allHotel" :key="index">
      <!-- 左侧img -->
      <el-col :span="8">
        <div class="left" @click="toThisHotel(item.id)">
          <img :src="`${item.photos}`" alt />
        </div>
      </el-col>
      <!-- 中间 -->
      <el-col :span="8">
        <div class="center">
          <div class="title">
            <h4 @click="toThisHotel">
              <a href="#">{{item.name}}</a>
            </h4>
            <p>
              {{item.alias}}
              <i class="iconfont">&#xe601;&#xe601;&#xe601;</i>
              {{item.hoteltype.name}}
            </p>
          </div>
          <div class="star">
            <!-- v-model="grade" -->
            <el-rate
              v-model="star"
              disabled
              show-score
              text-color="#ff9900"
              :score-template="`${item.stars}分`"
            ></el-rate>
            <span>
              <i>79</i>条评论
            </span>
            <span>
              <i>93</i>篇游记
            </span>
          </div>
          <p class="add">
            <i class="el-icon-location"></i>
            位于: {{item.address}}
          </p>
        </div>
      </el-col>
      <!-- 右侧 特价 -->
      <el-col :span="8">
        <div class="right">
          <div class="specialOffer" v-for="(item,index) in item.products" :key="index" @click="toNewPage">
            <span>{{ item.name }}</span>
            <span>
              <i style="color:orange">￥{{ item.price }}</i> 起
              <i class="el-icon-arrow-right"></i>
            </span>
          </div>
        </div>
      </el-col>
    </el-row>

    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5, 10, 15]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="100"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  props: ["allHotel", "cities"],
  data() {
    return {
      // 总数据
      // allHotel: [],
      currentPage: 1, // 当前页数
      star: null
    };
  },
  methods: {
    // 重定向 到优惠页面
    toNewPage(){
      window.location.href="http://www.baidu.com";
    },
    // 点击跳转进入 酒店详情
    toThisHotel(id) {
      this.$router.push({
        path: "/hotel/hotelDetails",
        query: {
          id
        }
      });
    },
    // 评分星星点亮
    showStars() {
      this.allHotel.forEach((v, index) => {
        // console.log(v)
        if (index + 1 !== v.id) return;
        this.star = v.stars;
      });
    },
    // pageSize 改变时会触发（每页条数）
    handleSizeChange() {},
    // currentPage 改变时会触发（当前页）
    handleCurrentChange() {}
    // 获取酒店列表数据
    // reqHotelData(id) {
    //   this.$axios({
    //     url: `/hotels?city=` + id
    //   }).then(res => {
    //     // console.log(res);
    //     const { data } = res.data;
    //     // console.log(data);
    //     this.allData = data;
    //     // console.log(this.allData);
    //   });
    // }
  },
  mounted() {
    // 调用 获取酒店列表数据
    // this.reqHotelData(this.cities.cityId)

    // 调用 点亮星星
    setTimeout(() => {
      this.showStars();
    }, 500);
  },

};
</script>

<style lang="less" scoped>
.main {
  width: 1000px;
  margin: 0 auto;
  .el-row {
    padding: 25px 0;
    border-bottom: 1px solid #eee;
  }
  //
  .left {
    cursor: pointer;
    img {
      width: 320px;
      height: 210px;
    }
  }
  .center {
    padding: 0 5px;
    .title {
      h4 {
        font-weight: 400;
        font-size: x-large;
      }
      p {
        font-size: 16px;
        word-spacing: 1;
        color: #999;
        i {
          display: inline-block;
          color: #ff9900;
          padding: 0 8px;
        }
      }
    }
    .star {
      padding: 8px 0;

      /deep/.el-rate {
        display: inline-block;
      }
      span {
        font-size: 14px;
        padding: 0 3px;
        i {
          font-size: 16px;
          color: #ff9900;
        }
      }
    }
    .add {
      font-size: 14px;
      color: #666;
    }
  }
  .right {
    padding: 20px 30px;
    .specialOffer {
      display: flex;
      height: 50px;
      line-height: 50px;
      font-size: 16px;
      color: #606266;
      border-bottom: 1px solid #eee;
      padding: 0 15px;
      cursor: pointer;
      span:first-child {
        flex: 1.5;
      }
      span:last-child {
        flex: 1;
      }
    }
    .specialOffer:hover {
      background: #f5f7fa;
    }
  }
  .el-pagination {
    text-align: center;
    padding: 15px 0;
  }
}
</style>