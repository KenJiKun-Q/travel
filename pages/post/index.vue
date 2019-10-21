<template>
  <div>
    <el-row class="w">
      <el-col :span="7">
        <div class="content-left">
          <PostList :data="cityList" />
        </div>
      </el-col>
      <el-col :span="17">
        <div class="content-right">
          <PostInfo />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import PostList from "@/components/post/postlist";
import PostInfo from "@/components/post/postInfo";
export default {
  data() {
    return {
      cityList: {}
    };
  },
  components: {
    PostList,
    PostInfo
  },
  mounted() {
    this.$axios({
      url: "/posts/cities"
    }).then(res => {
      // console.log(res.data);
      const { data } = res.data;
      this.cityList = data;
    });
  }
};
</script>

<style scoped lang="less">
.el-row {
  width: 1000px;
  margin: 0 auto;
}
</style>