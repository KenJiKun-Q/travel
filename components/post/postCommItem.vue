<template>
  <div>
    <!-- 评论模块 -->
    <div class="comment">
      <div class="comment-info">
        <div class="comment-user">
          <img src="../../assets/avatar.jpg" alt />
          <em>团灭发动机</em>
          <span>2019-05-22 10:30</span>
        </div>
        <div class="comment-content">
          <PostCommFloor/>
          <p>hhhhhhhhhh</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostCommFloor from "@/components/post/postCommFloor"
export default {
  components:{
    PostCommFloor
  }
};
</script>

<style scoped lang="less">
.comment{
  padding: 20px;
  border: 1px solid #999;
  .comment-info{
    .comment-user{
      
      em{
        font-size: 13px;
      }
      span{
        font-size: 12px;
      }
      img{
        vertical-align:middle;
        width: 20px;
      }
    }
  }
}
</style>