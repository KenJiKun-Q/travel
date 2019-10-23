<template>
  <div>
    <el-row class="w">
      <el-col :span="7">
        <div class="content-left">
          <!-- 城市搜索导航 -->
          <PostList :datalist="cityList" @getPostInfo="getPostInfo" @setPostInfo="setPostInfo" />
        </div>
      </el-col>
      <el-col :span="17">
        <div class="content-right">
          <Search @getPostList="getPostList" />
          <!-- 文章列表组件 -->
          <PostInfo v-for="(item,index) in postlist" :key="index" :post="item" />
          <!-- 分页 -->
          <el-pagination
            v-if="postlist.length"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :page-sizes="[1, 2, 3, 4]"
            :page-size="limit"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
          ></el-pagination>

          <!-- loading等于false表示加载完毕之和才显示 -->
          <div
            v-if="postlist.length === 0 && !loading"
            style="padding:50px; text-align:center"
          >暂无该城市旅游风景区的数据</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import PostList from "@/components/post/postlist";
import PostInfo from "@/components/post/postInfo";
import Search from "@/components/post/Search";
export default {
  computed: {
    // 从data总列表中切割出来的数组列表
    // dataList() {
    //   let arr = this.postlist.slice(
    //     (this.pageIndex - 1) * this.pageSize,
    //     this.pageIndex * this.pageSize
    //   );
    //   return arr;
    // }
  },
  data() {
    return {
      // 推荐城市列表
      cityList: {},
      // 文章列表
      postlist: [],

      start: 0, //默认为0
      limit: 2, //获取条数

      total: 0,

      // 城市名称或ID
      city: "",

      //判断是否正在加载
      loading: true
    };
  },
  components: {
    PostList,
    PostInfo,
    Search
  },
  methods: {
    handleSizeChange(val) {
      // 切换条数
      this.limit = val;
      // 请求文章列表的数据
      if (this.city.length > 0) {
        this.getCityList();
      } else {
        this.getList();
      }
    },
    handleCurrentChange(val) {
      this.start = (val - 1) * this.limit;
      // 请求文章列表的数据
      if (this.city.length > 0) {
        this.getCityList();
      } else {
        this.getList();
      }
    },
    getPostList(arr) {
      this.city = arr;
      this.getCityList();
    },
    getPostInfo(arr) {
      this.city = arr;
      this.getCityList();
    },
    setPostInfo(arr) {
      this.city = arr;
      this.getCityList();
    },
    getList() {
      this.$axios({
        url: `/posts?_start=${this.start}&_limit=${this.limit}`
      }).then(res => {
        const { data, total } = res.data;
        this.total = total;
        // 文章详细列表
        this.postlist = data;
      });
    },
    getCityList() {
      this.$axios({
        url: `/posts?_start=${this.start}&_limit=${this.limit}&city=${this.city}`
      }).then(res => {
        const { data, total } = res.data;
        this.total = total;
        // 文章详细列表
        this.postlist = data;
      });
    }
  },
  mounted() {
    // 请求推荐城市列表
    this.$axios({
      url: "/posts/cities"
    }).then(res => {
      const { data, id } = res.data;
      this.cityList = data;
    });
    this.getList();
  }
};
</script>

<style scoped lang="less">
.el-row {
  width: 1000px;
  margin: 0 auto;
}
.content-right {
  box-sizing: border-box;
  width: 700px;
}
</style>