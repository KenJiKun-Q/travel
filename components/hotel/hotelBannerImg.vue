<template>
  <div class="container">
    <el-row class="hotelImg" type="flex" justify="space-between">
      <el-col :span="18" class="bigImg">
        <img src="../../../1.jpeg" alt />
      </el-col>
      <el-col :span="8">
        <el-row class="smallImg">
          <el-col :span="12">
            <img src="../../../2.jpeg" alt />
          </el-col>
          <!-- <el-col :span="12">
            <img src="../../../2.jpeg" alt />
          </el-col>
          <el-col :span="12">
            <img src="../../../2.jpeg" alt />
          </el-col>
          <el-col :span="12">
            <img src="../../../2.jpeg" alt />
          </el-col>
          <el-col :span="12">
            <img src="../../../2.jpeg" alt />
          </el-col>
          <el-col :span="12">
            <img src="../../../2.jpeg" alt />
          </el-col> -->
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {}
    };
  },
  props: {
    listImg: {
      type: Object,
      default: {}
    }
  },
  mounted() {
    setTimeout(() => {
    //   console.log(this.listImg);
      const arr = this.listImg.pics;
      console.log("1",this.listImg);
    }, 1000);
  }
};
</script>

<style scoped lang="less">
.container {
  width: 100%;
  .hotelImg {
    .bigImg {
      width: 640px;
      height: 360px;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    .smallImg {
      height: 360px;
      margin-left: -10px;
      overflow: hidden;
      div {
        margin-bottom: 10px;
        height: 115px;
        img {
          width: 160px;
        }
      }
    }
  }
}
</style>