<template>
  <div class="container">
    <el-row class="hotelImg" type="flex" justify="space-between">
      <el-col :span="18" class="bigImg">
        <img :src="current" alt />
      </el-col>
      <el-col :span="8">
        <el-row class="smallImg">
          <el-col :span="12" v-for="(item,index) in arr" :key="index">
            <img :src="item" alt @click="handleCutImg(item)" />
          </el-col>
          <!-- <el-col :span="12">
            <img src="../../../2.jpeg" alt />
          </el-col>
          <el-col :span="12">
            <img src="../../../3.jpeg" alt />
          </el-col>
          <el-col :span="12">
            <img src="../../../4.jpeg" alt />
          </el-col>
          <el-col :span="12">
            <img src="../../../5.jpeg" alt />
          </el-col>
          <el-col :span="12">
            <img src="../../../6.jpeg" alt />
          </el-col>-->
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     data: {},
  //     arr: [
  //       "../../../1.jpeg",
  //       "../../../2.jpeg",
  //       "../../../3.jpeg",
  //       "../../../4.jpeg",
  //       "../../../5.jpeg",
  //       "../../../6.jpeg"
  //     ],
  //     current: "../../../1.jpeg"
  //   };
  // },
  methods: {
    handleCutImg(item) {
      // console.log(item);
      this.current = item;
    }
  },
  props: {
    listImg: {
      type: Object,
      default: {}
    }
  },
  mounted() {
    setTimeout(() => {
      const arr = this.listImg.pics;
      console.log("1", this.listImg);
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
        cursor: pointer;
        img {
          width: 160px;
        }
      }
    }
  }
}
</style>