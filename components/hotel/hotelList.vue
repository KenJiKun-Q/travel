<template>
  <div class="main">
    <el-row>
      <!-- 左侧img -->
      <el-col :span="8">
        <div class="left" @click="toThisHotel">
          <img
            src="http://qcloud.dpfile.com/pc/wQ2ejOSmhB4OoEq1LYPHp_2RhNciyW026YiQFr_EEZsQrI_ZB6abZPwgKDOmI03U3dWYFEM5hoslgWXTJDjSPA.jpg"
            alt
          />
        </div>
      </el-col>
      <!-- 中间 -->
      <el-col :span="8">
        <div class="center">
          <div class="title">
            <h4  @click="toThisHotel">
              <a href="#">好来阁商务宾馆</a>
            </h4>
            <p>
              hao lai ge shang wu hotel
              <i class="iconfont">&#xe601;&#xe601;&#xe601;</i>经济型
            </p>
          </div>
          <div class="star">
            <el-rate
              v-model="grade"
              disabled
              show-score
              text-color="#ff9900"
              :score-template="`${grade}分`"
            ></el-rate>
            <span>
              <i>79</i>条评论
            </span>
            <span>
              <i>93</i>篇游记
            </span>
          </div>
          <p class="add">
            <i class="el-icon-location"></i> 位于：位于: 高淳县淳溪镇镇兴路118号(高淳县委党校对面)
          </p>
        </div>
      </el-col>
      <!-- 右侧 特价 -->
      <el-col :span="8">
        <div class="right">
          <!--  -->
          <el-table :data="tableData" style="width: 100%">
            <el-table-column>
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
                <span style="margin-left: 100px">
                  <i style="color:orange">￥{{ scope.row.price }}</i> 起
                </span>
                <i class="el-icon-arrow-right"></i>
              </template>
            </el-table-column>
          </el-table>
          <!--  -->
          <el-table :data="tableData" style="width: 100%">
            <el-table-column>
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
                <span style="margin-left: 100px">
                  <i style="color:orange">￥{{ scope.row.price }}</i> 起
                </span>
                <i class="el-icon-arrow-right"></i>
              </template>
            </el-table-column>
          </el-table>
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
  props: ["allHotel"],
  data() {
    return {
      // 总数据
      allData: [],
      grade: 3.5,
      tableData: [
        {
          date: "携程",
          price: 64
        }
      ],
      currentPage:1, // 当前页数
    };
  },
  methods:{
    // 点击跳转进入 酒店详情
    toThisHotel(){},
    // pageSize 改变时会触发（每页条数）
    handleSizeChange(){}, 
    // currentPage 改变时会触发（当前页）
    handleCurrentChange(){}
  },
};
</script>

<style lang="less" scoped>
.main {
  width: 1000px;
  margin: 0 auto;
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
        font-size: 16px;
        padding: 0 3px;
        i {
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
    padding: 20px;
    /deep/.el-table {
      height: 40px;
      th {
        display: none;
      }
    }
  }
  .el-pagination {
    text-align: center;
    padding: 15px 0;
  }
}
</style>