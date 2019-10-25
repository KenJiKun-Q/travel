<template>
  <div class="commentFloor">
    <!-- 自调用 -->
    <!-- <comment
     :parent="parent.parent"
      v-if="parent.parent"
    @parentReply="parentReply"></comment>-->
    <div class="commentInfo">
      <div class="commentUser">
        <comment :parent="parent.parent" v-if="parent.parent" @parentReply="parentReply"></comment>
        <span>{{parent.account.nickname}}</span>
        <em>{{parent.created_at | time}}</em>
      </div>
      <div class="comment-content" v-for="(val,index) in parent.pics" :key="index">
        <div>{{parent.content}}</div>
        <img :src="`${$axios.defaults.baseURL}${val.url}`" />
      </div>
      <a href="javascript:;" class="reply" @click="parentReply(parent.id)">回复</a>
    </div>
  </div>
</template>

<script>
import moment from "moment"

export default {
  name: "comment",
  props: ["parent"],

  mounted() {
    // console.log(this.parent)
  },
  methods: {
    parentReply(id) {
      // console.log(parent);
      // this.form.follow = parent.id
      this.$emit("parentReply", id);
    }
  },
  filters: {
    time(value){
      let parentTime = moment(value).format(`YYYY-MM-DD h:mm:ss`)
      return parentTime
    }
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
    // width: 620px;
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
      padding: 5px;
      display: inline-block;
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