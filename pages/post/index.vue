<template>
  <div>
    <el-row class="w">
      <el-col :span="7">
        <div class="content-left">
          <!-- 城市搜索导航 -->
          <PostList :data="cityList" />
        </div>
      </el-col>
      <el-col :span="17">
        <div class="city-top clearfix">
          <input type="text" placeholder="请输入想去的地方，比如：'广州'" />
          <i class="el-icon-search" @click="handleSearch"></i>
        </div>
        <div class="city-head clearfix">
          <i>推荐:</i>
          <span>
            <a href="#">广州</a>
          </span>
          <span>
            <a href="#">上海</a>
          </span>
          <span>
            <a href="#">北京</a>
          </span>
        </div>
        <div class="city-info clearfix">
          <div class="city-info-left fl">推荐攻略</div>
          <div class="city-info-right fr" @click="handleLink">
            <i class="el-icon-edit"></i> 写游记
          </div>
        </div>
        <div class="content-right">
          <!-- 文章列表组件 -->
          <PostInfo v-for="(item,index) in dataList" :key="index" :post="item" />

          <!-- 分页 -->
          <el-pagination
            v-if="cityList.length"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="pageIndex"
            :page-sizes="[2, 4, 8, 12]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="postlist.length"
          ></el-pagination>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import PostList from "@/components/post/postlist";
import PostInfo from "@/components/post/postInfo";
export default {
  computed: {
    // 从data总列表中切割出来的数组列表
    dataList() {
      let arr = this.postlist.slice(
        (this.pageIndex - 1) * this.pageSize,
        this.pageIndex * this.pageSize
      );
      return arr;
    }
  },
  data() {
    return {
      cityList: {},
      postlist: [],
      pageSize: 2,
      pageIndex: 1,
      total: 0
    };
  },
  components: {
    PostList,
    PostInfo
  },
  methods: {
    handleSearch() {
      console.log(123);
    },
    handleLink() {
      console.log(123);
    },
    handleSizeChange(val) {
      // 切换条数
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      this.pageIndex = val;
    }
  },
  mounted() {
    this.$axios({
      url: "/posts/cities"
    }).then(res => {
      // console.log(res.data);
      const { data } = res.data;
      this.cityList = data;
    });

    this.$axios({
      url: "/posts"
    }).then(res => {
      console.log(res.data);
      const { data } = res.data;
      this.postlist = data;
      console.log(this.postlist);
    });
  }
};
</script>

<style scoped lang="less">
.el-row {
  width: 1000px;
  margin: 0 auto;

  .city-top {
    margin-top: 20px;
    position: relative;
    input {
      box-sizing: border-box;
      width: 100%;
      padding: 10px 0;
      border: 3px #ffa500 solid;
      text-indent: 2em;
    }
    i {
      position: absolute;
      font-size: 24px;
      right: 14px;
      top: 8px;
      font-weight: 300;
      color: #ffa500;
    }
  }
  .city-head {
    margin: 10px 0;
    font-size: 14px;
    color: #999;
    span {
      padding: 0 5px;
    }
  }
  .city-info {
    margin-top: 20px;
    text-align: center;
    border-bottom: 1px #ddd solid;

    .city-info-left {
      font-size: 20px;
      color: #ffa500;
      padding-bottom: 20px;
      border-bottom: 3px #ffa500 solid;
    }
    .city-info-right {
      padding: 10px 20px;
      background: #409eff;
      color: #fff;
      border-radius: 5px;
    }
  }
}
</style>