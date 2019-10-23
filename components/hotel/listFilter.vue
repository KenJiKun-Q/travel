<template>
  <div class="main">
    <el-row class="filter">
      <div class="price">
        <p>
          <span>价格</span>
          <span>0-4000</span>
        </p>
        <el-slider v-model="selsctPrice" :max="4000"></el-slider>
      </div>
      <div class="starLevel">
        <p>
          <span>住宿等级</span>
        </p>
        <el-select v-model="starLevel" multiple placeholder="不限">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="type">
        <p>
          <span>住宿类型</span>
        </p>
        <el-select v-model="starLevel" multiple placeholder="不限">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="facility">
        <p>
          <span>酒店设施</span>
        </p>
        <el-select v-model="starLevel" multiple placeholder="不限">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="brand">
        <p>
          <span>酒店品牌</span>
        </p>
        <el-select v-model="starLevel" multiple placeholder="不限">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  props: ["allHotel"],
  data() {
    return {
      // 总数据
      allData: [],
      // 绑定值 滑动条取值
      selsctPrice: [],
      //
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "黄金糕2"
        },
        {
          value: "选项3",
          label: "黄金糕3"
        },
        {
          value: "选项4",
          label: "黄金糕4"
        }
      ],
      starLevel: ""
    };
  },
  methods: {

  }
};
</script>

<style lang="less" scoped>
.main {
  width: 1000px;
  height: 80px;
  border: 1px solid #ddd;
  margin: 0 auto;
  margin-top: 30px;
  .filter {
    display: flex;
    height: 100%;
    padding: 10px;
    div {
      display: inline-block;
      flex: 1;
      width: 100%;
      height: 100%;
      border-right: 1px solid #ddd;
      box-sizing: border-box;
      padding: 5px 15px;
      p {
        display: flex;
        font-size: 14px;
        color: #666;
        justify-content: space-between;
        align-items: center;
      }
      .el-slider {
        padding: 0 5px 0 15px;
      }
    }
    div:first-child {
      flex: 1.3;
    }
    div:last-child {
      border: none;
    }
  }
}
// 下拉菜单样式
/deep/.el-select {
  padding: 0;
  height: 40px;
  color: #666;
  .el-input__inner {
    border: none;
  }
}
</style>