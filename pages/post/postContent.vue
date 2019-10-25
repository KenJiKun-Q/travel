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
            <span>发表时间: {{detail.created_at | time}}</span>
            <em>阅读: {{detail.watch}}</em>
          </div>

          <div class="articleContent">
            <div class="post-content" v-html="detail.content"></div>
          </div>

          <div class="like">
            <div class="font-icont">
              <i class="iconfont iconpinglun"></i>
              <p>评论({{quantity}})</p>
            </div>
            <div class="font-icont" @click="hanldeStart">
              <i class="iconfont iconstar1"></i>
              <p>收藏</p>
            </div>
            <div class="font-icont">
              <i class="iconfont iconfenxiang"></i>
              <p>分享</p>
            </div>
            <dir class="font-icont" @click="hanldeLike">
              <i class="iconfont iconding"></i>
              <p>点赞({{detail.like}})</p>
            </dir>
          </div>
        </div>
        <div>
          评论
          <PostComment @connentQuantity="connentQuantity" />
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
import moment from "moment"

export default {
  data() {
    return {
      detail: {},
      data: [],
      quantity: 0,
      like: 0,
      status:0, //收藏状态
    };
  },
  components: {
    PostComment,
    PostCorrelation,
    PostPaging
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
      console.log(res)
      let { data } = res;
      // console.log(data)
      this.detail = data;
      // console.log(this.detail)
    });

  },
  methods: {
    connentQuantity(quantity) {

      this.quantity = quantity;

    },

    // 点赞
    hanldeLike() {
      let { id } = this.$route.query;

      this.$axios({
        url: "/posts/like",
        headers: {
          Authorization: `Bearer ${this.$store.state.user.userInfo.token}`
        },
        params: {
          id
        }
      }).then(res => {

        let { message } = res.data;

        this.$message.success(message)
      });
    },


    // 收藏
    hanldeStart(){
      let { id } = this.$route.query;

      this.$axios({
        url:"/posts/star",
        headers: {
          Authorization: `Bearer ${this.$store.state.user.userInfo.token}`
        },
        params: {
          id
        }
      }).then(res => {
        console.log(res)

        let { message } = res.data;

        this.$message.success(message)
      })
    }
  },
  filters: {
    time(value) {
      let parentTime = moment(value).format(`YYYY-MM-DD h:mm:ss`);
      return parentTime;
    }
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
    display: flex;
    justify-content: center;
    text-align: center;
    .font-icont{
      margin: 0 15px;
      .iconfont{
        display: block;
        font-size: 30px;
        color: skyblue;
        margin-bottom:  10px;
      }
      p{
        color: #999;  
      }
    }
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