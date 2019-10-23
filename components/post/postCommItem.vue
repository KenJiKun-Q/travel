<template>
  <div>
    <!-- 评论模块 -->
    <div class="comment">
      <div class="comment-info" v-for="(item,index) in detail" :key="index">
        <div class="comment-user">
          <img src="../../assets/avatar.jpg" alt />
          <em>{{item.account.nickname}}</em>
          <span>2019-05-22 10:30</span>
        </div>
        <div class="comment-content">
          <PostCommFloor v-show="item.parent" :parent="item.parent"/>
          <p>{{item.content}}</p>
        </div>
        <span class="reply">回复</span>
      </div>
    </div>
  </div>
</template>

<script>
import PostCommFloor from "@/components/post/postCommFloor";
export default {
  data() {
    return {
      detail: []
    };
  },
  components: {
    PostCommFloor
  },
  mounted() {
    this.$axios({
      url: "/posts/comments"
    }).then(res => {
      // console.log(res)
      let { data } = res.data;

      this.detail = data;
      // console.log(this.detail)

      // var absoluteTime = new Date(this.detail[0].account.created_at).Format("yyyy-MM-dd hh:mm:ss");

      // console.log(absoluteTime)
    });
  }
};
</script>

<style scoped lang="less">
.comment {
  .comment-info {
    position: relative;
    padding: 20px;
    border: 1px solid #dddddd;
    .reply {
      position: absolute;
      bottom: 0px;
      right: 0px;
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