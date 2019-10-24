<template>
  <div>
    <el-input
      type="textarea"
      :rows="2"
      placeholder="请输入内容"
      v-model="textarea"
      style="margin-bottom:10px"
    ></el-input>
    <el-button type="primary" class="postButton" @click="onSubmit">提交</el-button>

    <el-upload
      :action="`${$axios.defaults.baseURL}/upload`"
      name="files"
      list-type="picture-card"
      :on-remove="handleRemove"
      :on-success="handleSuccess"
      ref="imgUrl"
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
          <div class="comment-img" v-show="item.pics" v-for="(v,index) in item.pics" :key="index">
            <img :src="`${$axios.defaults.baseURL}${v.url}`" alt />
          </div>
          <p style="margin-top:10px;">{{item.content}}</p>
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
      :total="total"
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
        content: "", //评论内容
        pics: [], //发表的图片
        post: 0, 
        follow: 0 //被回复id
      },
      //楼层数据
      floor: [],
      total: 0,
      // 分页
      start: 0, //一页显示多少条数据
      limit: 5
    };
  },

  methods: {
    onSubmit() {
      //使用refs获取编辑器内容
      this.form.content = this.textarea;
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
        this.textarea = ""
        this.$refs.imgUrl.clearFiles();
        // 再次渲染评论楼层
        this.getComment();

        // 再次请求评论数量
        this.getCommentList();
        // console.log(this.form.pics);
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
        // console.log(this.floor)
      });
    },
    getCommentList() {
      let { id } = this.$route.query;
      // 获取所有数据的数量
      this.$axios({
        url: "/posts/comments?post=" + id
      }).then(res => {
        // console.log(res)
        let { data } = res;
        // console.log(data)
        this.total = data.total;
      });
    },

    //上传成功
    handleSuccess(response, files, fileList) {
      // console.log(files, fileList);
      this.form.pics = fileList.map(v => {
        return v.response[0];
      });
      // console.log(this.form)
    },
    //移除图片
    handleRemove(files, fileList) {
      // console.log(files ,fileList);
      this.form.pics = fileList
    },

    // 分页功能
    handleSizeChange(val) {
      // console.log(val);
      this.limit = val;
      // console.log(this.limit);
      this.getComment();
    },
    handleCurrentChange(val) {
      // console.log(val);
      this.start = (val - 1) * this.limit;
      this.getComment();
    }
  },
  mounted() {
    // 请求评论楼层
    this.getComment();

    // 请求数据数量
    this.getCommentList();
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
    .comment-content {
      .comment-img {
        display: inline-block;
        img {
          width: 80px;
          height: 80px;
          border: 1px dashed #dddddd;
          border-radius: 5px;
          margin: 5px;
          padding: 5px;
          
        }
      }
    }
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