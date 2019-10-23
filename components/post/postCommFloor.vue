<template>
  <div class="commentFloor">
    <div class="commentInfo" >
      <div class="commentUser">
        <span>{{parent.account.nickname}}</span>
        <em>2019-10-22 05:02:11</em>
      </div>
      <div class="comment-content">
        <div>{{parent.content}}</div>
        <img :src="parent.pics" alt />
      </div>
      <span class="reply">回复</span>
    </div>
    <!-- 自调用 -->
    <comment :parent="parent.parent" v-if="parent.parent"></comment>
  </div>
</template>

<script>
export default {
  name:"comment",
  props: ["parent"],
  
};
</script>

<style scoped lang="less">
.commentFloor {
  .commentInfo {
    position: relative;
    padding: 10px;
    border: 1px solid #dddddd;
    background: #f9f9f9;
    width: 620px;
    margin: 10px 0 10px 30px;
    .commentUser {
      span {
        font-size: 13px;
      }
      em {
        font-size: 12px;
        color: #999;
      }
    }
    .comment-content {
      padding: 15px 15px 0 15px;
      img {
        margin-top: 10px;
        padding: 5px;
        width: 80px;
        height: 80px;
        border: 1px dashed #dddddd;
      }
    }
    .reply {
      font-size: 13px;
      position: absolute;
      bottom: 10px;
      right: 10px;
    }
  }
}
</style>