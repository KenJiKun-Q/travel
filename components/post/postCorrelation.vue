<template>
  <div>
    <el-row class="rightPost" v-for="(item,index) in detail" :key="index" style="cursor:pointer">
      <div @click="$router.push(`/post/postContent?id=${item.id}`)">
        <el-col :span="10">
          <div class="postimage">
            <img :src="item.images[0]" alt />
          </div>
        </el-col>
        <el-col :span="14" class="title-content">
          <div class="title">{{item.title}}</div>
          <p>2019-10-21 7:19 阅读:10</p>
        </el-col>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      detail: []
    };
  },
  methods: {
    listItem() {
      this.$axios({
        url: "/posts"
      }).then(res => {
        // console.log(res)
        let { data } = res.data;

        this.detail = data;
        // console.log(data);
      });
    }
  },
  mounted() {
    this.listItem();
  },
  watch: {
    $route(to, from) {
      this.$router.go(0);
    }
  }
};
</script>

<style scoped lang="less">
.rightPost:nth-child(1) {
  border-top: 1px solid #ddd;
}
.rightPost {
  //   border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  padding: 15px;
  height: 100%;
  .postimage {
    width: 100px;
    height: 80px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .title-content {
    position: relative;
    .title {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      font-size: 15px;
    }
    p {
      position: absolute;
      bottom: -40px;
      font-size: 12px;
      color: #999999;
    }
  }
}
</style>