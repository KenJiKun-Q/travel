<template>
  <!-- 酒店基本信息 -->
  <div class="hotelInfo">
    <el-row class="flight-title" type="flex" justify="space-between">
      <el-col :span="4">基本信息</el-col>
      <el-col :span="20">
        <el-row type="flex" justify="space-between">
          <el-col :span="6">入住时间: 14:00之后</el-col>
          <el-col :span="6">离店时间: 12:00之前</el-col>
          <el-col :span="6">{{list.creation_time}} /{{list.renovat_time}}</el-col>
          <el-col :span="6">酒店规模: {{list.roomCount}}间客房</el-col>
        </el-row>
      </el-col>
    </el-row>

    <el-row class="flight-title" type="flex" justify="space-between">
      <el-col :span="4">主要设施</el-col>
      <el-col :span="20">
        <span>外币兑换服务</span>
        <span>电梯</span>
        <span>洗衣服务</span>
        <span>热水壶</span>
      </el-col>
    </el-row>
    <el-row class="flight-title" type="flex" justify="space-between">
      <el-col :span="4">停车服务</el-col>
      <el-col :span="20"></el-col>
    </el-row>
    <el-row class="flight-title" type="flex" justify="space-between">
      <el-col :span="4">品牌信息</el-col>
      <el-col :span="20"></el-col>
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
    list: {
      type: Object,
      default: {}
    }
  },

  mounted() {
    setTimeout(() => {
      // this.data = this.list;
    }, 1000);
  }
};
</script>

<style scoped lang="less">
.hotelInfo {
  font-size: 12px;
  .flight-title {
    padding: 15px 0;
    border-bottom: 1px solid #ebeef5;
    span {
      background: #eeeeee;
      margin-right: 10px;
      border-radius: 5px;
      padding: 5px 10px;
    }
  }
}
</style>