<template>
  <div class="comment">
    <div class="comment-info" v-for="(item,index) in content" :key="index">
      <div class="comment-user">
        <!-- 头像 -->
        <img src="../../assets/avatar.jpg" alt />
        <!-- 用户名字 -->
        <em>团灭发动机</em>
        <span>2019-05-22 10:30</span>
      </div>
      <div class="qian-info">
        <div class="qian-user">宇宙发动机</div>
        <div class="qian-comment">冲冲冲</div>
        <img src="../../assets/avatar.jpg" alt />
        <div class="qian-reply">回复</div>
      </div>
      <div class="comment-neirou">
        <div class="comment-font">{{item.content}}</div>
        <span class="reply">回复</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            content:[]
        }
    },
    mounted(){
        this.$axios({
            url:"/posts/comments"
        }).then(res =>{
            // console.log(res)
            let {data} = res.data
            // console.log(data)
            this.content = data
            console.log(this.content)
        })
    }
};
</script>

<style scoped lang="less">

.comment {
  padding: 15px;
  border: 1px solid #dddddd;
  margin-top: 30px;
  .comment-info {
    // margin-bottom: 15px;
    position: relative;
    .comment-user {
      align-items: center;
      margin-bottom: 20px;
      em {
        font-size: 13px;
      }
      span {
        font-size: 12px;
        color: #b39999;
      }
      img {
        width: 20px;
        border-radius: 50%;
        vertical-align: middle;
      }
    }
    .reply {
      position: absolute;
      right: 0;
      bottom: 0;
    }
    .comment-neirou {
      margin-top: 20px;
      font-size: 13px;
    }
    .qian-info {
      margin-left: 35px;
      padding: 15px;
      border: 1px solid #dddddd;
      width: 600px;
      background-color: #f9f9f9;
      font-size: 13px;
      position: relative;
      .qian-comment {
        padding: 15px 0;
      }
      img {
        padding: 5px;
        border: 1px dashed #dddddd;
        width: 80px;
        height: 80px;
      }
      .qian-reply {
        position: absolute;
        right: 11px;
        bottom: 11px;
      }
    }
  }
}
</style>