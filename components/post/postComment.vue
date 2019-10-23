<template>
  <div>
    <el-input
      type="textarea"
      :rows="2"
      placeholder="请输入内容"
      v-model="textarea"
      ref="contentValue"
      style="margin-bottom:10px"
    ></el-input>
    <el-button type="primary" class="postButton" @click="onSubmit">提交</el-button>

    <el-upload
      action="http://localhost:1337/upload"
      name="files"
      list-type="picture-card"
      :on-remove="handleRemove"
      :on-success="handleSuccess"
    >
      <i class="el-icon-plus"></i>
    </el-upload>

    <div class="comment">
      <div class="comment-info" v-for="(item,index) in floor" :key="index">
        <div class="comment-user">
          <img src="../../assets/avatar.jpg" alt />
          <em>{{item.account.nickname}}</em>
          <span>2019-05-22 10:30</span>
        </div>
        <div class="comment-content">
          <PostCommFloor v-if="item.parent" :parent="item.parent" />
          <p>{{item.content}}</p>
        </div>
        <span class="reply">回复</span>
      </div>
    </div>

    <!-- 分页功能 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="limit"
      layout="total, sizes, prev, pager, next, jumper"
      :total="floor.length"
    ></el-pagination>
  </div>
</template>

<script>
import PostCommFloor from "@/components/post/postCommFloor";

export default {
  components: {
    PostCommFloor
  },
  //使用refs获取编辑器中的内容
  data() {
    return {
      textarea: "",
      // 提交输入框的数据
      form: {
        content: "",
        pics: [],
        post: ""
      },
      //楼层数据
      floor: [],
      floorlength:"",
      // 分页
      start: 0, //一页显示多少条数据
      limit: 5
    };
  },

  methods: {
    onSubmit() {
      //使用refs获取编辑器内容
      this.form.content = this.$refs.contentValue.value;
      let { id } = this.$route.query;
      //  console.log(id)
      this.form.post = id;
      this.$axios({
        url: "/comments",
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.$store.state.user.userInfo.token}`
        },
        data: this.form
      }).then(res => {
        // console.log(res);
        let { message } = res.data;

        this.$message.success(message);
        // 再次渲染评论楼层
        this.$axios({
          url: "/posts/comments?post=" + id
        }).then(res => {
          let { data } = res.data;

          this.floor = data;
        });
      });
    },
    getComment() {
      // 请求评论楼层
      let { id } = this.$route.query;
      this.$axios({
        url:
          `/posts/comments?_start=${this.start}&_limit=${this.limit}&post=` + id
      }).then(res => {
        let { data } = res.data;

        this.floor = data;
        console.log(data.length)
      });
    },
    //上传成功
    handleSuccess(res, files) {
      // console.log(res);
      // console.log(files);
    },
    //移除图片
    handleRemove(files, fileList) {},

    // 分页功能
    handleSizeChange(val) {
      // console.log(val);
      this.limit = val;
      console.log(this.limit);
      this.getComment();
    },
    handleCurrentChange(val) {
      // console.log(val);
      this.start = (val - 1) * this.limit;
      this.getComment();
    }
  },
  mounted() {
    this.getComment();
    // 请求评论楼层
    // let { id } = this.$route.query;

    // this.$axios({
    //   url: "/posts/comments?post=" + id
    // }).then(res => {
    //   let { data } = res.data;

    //   this.floor = data;
    //   // console.log(this.floor)
    // });
  }
};
</script>

<style scoped lang="less">
.postButton {
  float: right;
}
.comment {
  margin-top: 10px;
  .comment-info {
    position: relative;
    padding: 20px;
    border: 1px solid #dddddd;
    margin-bottom: 10px;
    .reply {
      position: absolute;
      bottom: 10px;
      right: 10px;
      font-size: 13px;
    }
    .comment-user {
      em {
        font-size: 13px;
      }
      span {
        font-size: 12px;
        color: #999;
      }
      img {
        vertical-align: middle;
        width: 20px;
      }
    }
  }
}
</style>