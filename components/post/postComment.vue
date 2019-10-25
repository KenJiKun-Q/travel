<template>
  <div>
    <el-input
      type="textarea"
      :rows="2"
      :placeholder="placeholder"
      v-model="textarea"
      style="margin-bottom:10px"
      @blur="hanldBlur"
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
          <span>{{item.created_at | time}}</span>
        </div>
        <div class="comment-content">
          <PostCommFloor v-if="item.parent" :parent="item.parent" @parentReply="parentReply"/>
          <p style="margin-top:10px;">{{item.content}}</p>
          <div class="comment-img" v-show="item.pics" v-for="(v,index) in item.pics" :key="index">
            <img :src="`${$axios.defaults.baseURL}${v.url}`" alt />
          </div>
        </div>
        <a href="javascript:;" class="reply" @click="handleFollow(item)">回复</a>
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
import moment from "moment"

export default {
  components: {
    PostCommFloor
  },
  //使用refs获取编辑器中的内容
  data() {
    return {
      placeholder: "请输入内容",
      textarea: "",
      // 提交输入框的数据
      form: {
        content: "", //评论内容
        pics: [], //发表的图片
        post: 0,
        follow: 0 //被回复id
      },
      //回复评论
      replyComment: null,
      //楼层数据
      floor: [],
      total: 0,
      // 分页
      start: 0, //一页显示多少条数据
      limit: 5
    };
  },

  methods: {
    //发表评论
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
        this.textarea = "";
        this.$refs.imgUrl.clearFiles();
        this.placeholder = "请输入内容";
        // 再次渲染评论楼层
        this.getComment();

        // 再次请求评论数量
        this.getCommentList();
        // console.log(this.form.pics);
       
      });
    },
    // 输入框焦点
    hanldBlur(){
      // console.log(123)
      this.placeholder = "请输入内容"
    },
    // 回复评论
    handleFollow(item) {
      // console.log(item)
      this.replyComment = item;
      // console.log(this.replyComment);
      this.form.follow = this.replyComment.id

      this.placeholder = "@" + this.replyComment.account.nickname;

    },
    //回复父级评论
    parentReply(id){
      // console.log(id)
      this.form.follow = id
    },

     // 请求评论楼层
    getComment() {
     
      let { id } = this.$route.query;
      this.$axios({
        url:
          `/posts/comments?_start=${this.start}&_limit=${this.limit}&post=` + id
      }).then(res => {
        let { data } = res.data;

        this.floor = data;
        console.log(this.floor)
      });
    },

    // 获取所有数据的数量
    getCommentList() {
      let { id } = this.$route.query;
      
      this.$axios({
        url: "/posts/comments?post=" + id
      }).then(res => {
        // console.log(res)
        let { data } = res;
        // console.log(data)
        this.total = data.total;
        // console.log(this.total)


        //将数据数量发送到父组件
        this.$emit("connentQuantity",this.total)
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
      this.form.pics = fileList;
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
  },

  //过滤器
  filters:{
    time(value){
      let time = moment(value).format(`YYYY-MM-DD hh:mm:ss`)
      return time
    }
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