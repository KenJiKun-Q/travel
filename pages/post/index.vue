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
          <PostInfo
            v-for="(item,index) in postlist"
            :key="index"
            :post="item"
            @click="getArticleList(item)"
          />
          <!-- 分页 -->
          <el-pagination
            v-if="postlist.length"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="pageIndex"
            :page-sizes="[4, 8, 12, 16]"
            :page-size="pageSize"
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
      pageSize: 4,
      pageIndex: 1,
      total: 0,
      // 城市
      city: {},

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
      this.pageSize = val;
      // 请求文章列表的数据
      this.getList();
    },
    handleCurrentChange(val) {
      this.pageIndex = val;
      // 请求文章列表的数据
      this.getList();
    },
    getPostList(arr) {
      this.postlist = arr;
      this.pageIndex = 1;
    },
    getPostInfo(arr) {
      this.postlist = arr;
      this.pageIndex = 1;
    },
    setPostInfo(arr) {
      this.postlist = arr;
      this.pageIndex = 1;
    },
    getList() {
      this.$axios({
        url: "/posts"
      }).then(res => {
        console.log(res.data);
        const { data, total } = res.data;
        this.total = total;
        // 文章详细列表
        this.postlist = data;
        // console.log(this.postlist);
      });
    },
    getArticleList(item) {
      const id = item.id;
      console.log(id);
    }
  },
  mounted() {
    // 请求推荐城市列表
    this.$axios({
      url: "/posts/cities"
    }).then(res => {
      console.log(res.data);
      const { data, id } = res.data;
      this.cityList = data;
    });

    // 请求文章列表的数据
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