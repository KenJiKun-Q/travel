<template>
  <div class="commentFloor">
    <div class="commentInfo" v-for="(item,index) in parent" :key="index">
      <div class="commentUser">
        <span>宇宙发动机</span>
        <em>2019-10-22 05:02:11</em>
      </div>
      <div class="comment-content">
        <div>刻录机进口量</div>
        <img src="../../assets/avatar.jpg" alt />
      </div>
      <span class="reply">回复</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["parent"],
  mounted() {
    // console.log(this.parent)
  }
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
      bottom: 5px;
      right: 5px;
    }
  }
}
</style>