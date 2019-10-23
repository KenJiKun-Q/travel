  <template>
  <section class="contianer">
    <el-row type="flex" justify="space-between">
      <!-- 主要部分 -->
      <el-col>
        <div class="postContent">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/post' }">旅游攻略</el-breadcrumb-item>
            <el-breadcrumb-item>攻略详情</el-breadcrumb-item>
          </el-breadcrumb>

          <h1 class="postTitle">{{detail.title}}</h1>

          <div class="postTime">
            <span>发表时间: 2019-10-21 1:04</span>
            <em>阅读: {{detail.watch}}</em>
          </div>

          <div class="articleContent">
            <div class="post-content" v-html="detail.content"></div>
          </div>

          <div class="like">
            <span>评论</span>
            <em>收藏</em>
            <i>分享</i>
            <span>点赞</span>
          </div>
        </div>
        <div>
          评论
          <PostComment />

        </div>
        <PostPaging />
      </el-col>

      <!-- 侧边栏 -->

      <el-col :span="10">
        <div>相关攻略</div>
        <PostCorrelation />
      </el-col>
    </el-row>
  </section>
</template>

<script>
import PostComment from "@/components/post/postComment";
import PostCorrelation from "@/components/post/postCorrelation";
import PostPaging from "@/components/post/postPaging";

export default {
  data() {
    return {
      detail: {},
      data: []
    };
  },
  components: {
    PostComment,
    PostCorrelation,
    PostPaging,
    
  },

  mounted() {
    // 文章详情的请求
    let { id } = this.$route.query;
    // console.log(id)
    this.$axios({
      url: "/posts/" + id
      // data:id
      // params:this.$route.query
    }).then(res => {
      // console.log(res)
      let { data } = res;
      // console.log(data)
      this.detail = data;
      // console.log(this.detail)
    });
  }
};
</script>

<style scoped lang="less">
.contianer {
  width: 1000px;
  margin: 20px auto;

  h1 {
    font-size: 2em;
    padding: 20px 20px 20px 0;
    border-bottom: 1px solid #dddddd;
  }

  .postTime {
    padding: 20px;
    text-align: right;
    color: #999999;
    span {
      margin-right: 15px;
    }
  }
  .like {
    text-align: right;
    padding: 50px 0 30px 0;
    //   justify-content: space-between;
  }
  .articleContent {
    display: block;
    line-height: 1.5;
    .post-content {
      /deep/img {
        max-width: 700px;
      }
    }
  }

}
</style>