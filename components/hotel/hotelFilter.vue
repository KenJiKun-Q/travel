<template>
  <div class="main">
    <!-- 面包屑 -->
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>酒店</el-breadcrumb-item>
        <el-breadcrumb-item>{{this.form.defaultCity}}酒店预订</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-form ref="form" :model="form" class="form">
      <!-- filterBox 筛选框 -->
      <!-- 左侧输入框 -->
      <el-form-item>
        <el-autocomplete
          class="inline-input"
          v-model="form.inputCities"
          :fetch-suggestions="querySearch"
          placeholder="搜索目的地酒店"
          :trigger-on-focus="false"
          @blur="handleBlur"
        ></el-autocomplete>
        <!-- 入住日期选择 -->
        <el-date-picker
          v-model="form.optDate"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
        <!-- 人数选择框 -->

        <!-- 人数 下拉选择 -->
        <el-popover placement="bottom-start" v-model="visible">
          <div
            class="adult"
            style="display:flex;justify-content:space-around;align-items:center;margin-bottom: 8px"
          >
            <span>成人</span>
            <span style="font-size:12px;color:#999;margin:5px 30px 5px 10px">18岁及以上</span>
            <el-input-number
              style
              v-model="form.adultNum"
              @change="handleAdultNum"
              :min="0"
              :max="999"
              label="描述文字"
              size="mini"
            ></el-input-number>
          </div>
          <div
            class="kids"
            style="display:flex;justify-content:space-around;align-items:center;margin-bottom: 8px"
          >
            <span>儿童</span>
            <span style="font-size:12px;color:#999;margin:5px 30px 5px 10px">0-17岁之间</span>
            <el-input-number
              v-model="form.kidsNum"
              @change="handleKidsNum"
              :min="0"
              :max="999"
              label="描述文字"
              size="mini"
            ></el-input-number>
          </div>

          <div style="text-align: right; margin: 0">
            <el-button type="primary" size="mini" @click="visible = false">确定</el-button>
            <el-button size="mini" type="text" @click="visible = false;toEmpty()">取消</el-button>
          </div>
          <el-input
            v-model="form.allPeople"
            @change="SetAllPeople"
            placeholder="选择入住人数"
            style="width:198px;margin-right:10px"
            suffix-icon="el-icon-user"
            slot="reference"
          ></el-input>
        </el-popover>

        <!-- 搜索按钮 -->
        <el-button type="primary" icon="el-icon-mobile" @click="searchPrice">查看价格</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: ["allHotel"],
  data() {
    return {
      // 绑定到输入框
      form: {
        // 全部城市
        cities: [],
        defaultCity: "南京市", // 默认城市
        inputCities: "", // 输入的城市
        cityId: 74, // 城市id
        optDate: "", // 选择的日期
        adultNum: 0, // 成人人数
        kidsNum: 0, // 儿童人数
        allPeople: "" // 总人数
      },
      visible: false
    };
  },
  mounted() {
    // 页面加载 显示默认城市
    this.form.inputCities = this.form.defaultCity;
    // 默认显示南京市
    this.$emit("setCity", this.form);

    // 立即打印无值，设置延迟有值
    // setTimeout(()=>{
    // console.log(this.allHotel);
    // },2000)
  },
  methods: {
    // 出发城市输入框获得焦点时触发
    // value 是选中的值，cb是回调函数，接收要展示的列表
    async querySearch(value, cb) {
      // console.log(value)
      if (!value) {
        cb([]);
        return;
      }
      const res = await this.$axios({
        url: "/airs/city?name=" + value
      });
      // console.log(res)
      //data是后台返回的城市数组,没有value属性
      let { data } = res.data;
      //循环每一项添加value属性
      let newData = data.map(v => {
        v.value = v.name;
        this.form.cityId = v.id;
        return v;
      });
      // console.log(newData);
      //把newData赋值给data中cities
      this.form.cities = newData;
      cb(newData);
    },
    //触发城市失去焦点时候默认选中第一个
    handleBlur(value) {
      //默认选中城市列表第一个选项
      if (this.form.cities.length === 0 || !value) return;
      this.form.inputCities = this.form.cities[0].name;
      // this.form.inputCities = this.cities[0].sort;
    },
    // 成人的人数
    handleAdultNum(value) {
      // console.log(value)
      this.form.adultNum = value;
      this.SetAllPeople();
    },
    // 儿童的人数
    handleKidsNum(value) {
      this.form.kidsNum = value;
      this.SetAllPeople();
    },
    // 总人数
    SetAllPeople() {
      this.form.allPeople = `　${this.form.adultNum}成人,${this.form.kidsNum}儿童`;
      // console.log(this.form.allPeople)
    },
    // 选择人数 点击取消 清空
    toEmpty() {
      // console.log(this.form.optDate)  // [{Wed Oct 30 2019 00:00:00 GMT+0800 (中国标准时间)},{}]
      this.form.adultNum = null;
      this.form.kidsNum = null;
      this.form.allPeople = null;
    },
    // 查询价格
    searchPrice() {
      // inputCities  optDate  allPeople
      if (!this.form.inputCities) {
        this.$message.error("请输入需要搜索的城市");
        return;
      }
      if (!this.form.optDate || !this.form.allPeople) {
        this.$message.warning("请注意填写 入住日期 / 入住人数");
      }
      this.$emit("setCity", this.form);
      this.form.defaultCity = this.form.inputCities;
    }
  }
  // watch: {
  //   form: {
  //     handler:function(form){
  //       this.searchPrice()
  //     },
  //     deep: true
  //   }
  // }
};
</script>

<style lang="less" scoped>
.main {
  width: 1000px;
  margin: 0 auto;
  // 面包屑
  .breadcrumb {
    height: 54px;
    .el-breadcrumb {
      line-height: 54px;
    }
  }
  // form 表单
  .form {
    margin-bottom: 15px;
    //
    .el-popover {
      width: 250px;
      padding: 8px;
    }
  }
  /deep/.el-input__suffix {
    font-size: 22px;
  }
  // 高德地图
  #container {
    width: 600px;
    height: 400px;
    margin-top: 30px;
  }
}
</style>