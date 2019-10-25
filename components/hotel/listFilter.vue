<template>
  <div class="main">
    <!-- 酒店选项 assets[]-酒店设施 brands-酒店品牌 levels-酒店等级 types-酒店类型 -->
    <el-row class="filter">
      <div class="price">
        <p>
          <span>价格</span>
          <span>0-4000</span>
        </p>
        <el-slider v-model="selsctPrice" :max="4000" @change="setFilterPrice"></el-slider>
      </div>
      <!--  -->
      <div class="starLevel">
        <p>
          <span>住宿等级</span>
        </p>
        <el-popover placement="bottom" width="150" trigger="hover" v-model="visibleLevels">
          <div class="limitHight">
            <el-checkbox-group
              v-model="levels"
              v-for="(item,index) in this.HotelOptions.levels"
              :key="index"
            >
              <el-checkbox :label="item.level">{{item.name}}</el-checkbox>
            </el-checkbox-group>
          </div>
          <div style="text-align: center; margin: 10px 0 0 0">
            <el-button type="primary" size="mini" @click="visible = false,getLevels()">确定</el-button>
            <el-button size="mini" type="text" @click="visible = false">取消</el-button>
          </div>
          <el-button slot="reference" class="button">
            <!-- <span style="padding-right:30px">{{this.levels.length>1? `已选${this.levels.length}项`:`不限`}}</span> -->
            <span style="padding-right:30px">{{`已选${this.levels.length}项`}}</span>
            <span style="padding-right:30px"></span>
            <span class="el-icon-arrow-down" style="padding-left:30px"></span>
          </el-button>
        </el-popover>
      </div>
      <!--  -->
      <div class="type">
        <p>
          <span>酒店类型</span>
        </p>
        <!--  -->
        <el-popover placement="bottom" width="150" trigger="hover" v-model="visibleTypes">
          <div class="limitHight">
            <el-checkbox-group
              v-model="types"
              v-for="(item,index) in this.HotelOptions.types"
              :key="index"
            >
              <el-checkbox :label="item.name">{{item.name}}</el-checkbox>
            </el-checkbox-group>
          </div>
          <div style="text-align: center; margin: 10px 0 0 0">
            <el-button type="primary" size="mini" @click="visible = false">确定</el-button>
            <el-button size="mini" type="text" @click="visible = false">取消</el-button>
          </div>
          <el-button slot="reference" class="button">
            <span style="padding-right:30px">{{`已选${this.types.length}项`}}</span>
            <span class="el-icon-arrow-down" style="padding-left:30px"></span>
          </el-button>
        </el-popover>
      </div>
      <!--  -->
      <div class="facility">
        <p>
          <span>酒店设施</span>
        </p>
        <!--  -->
        <el-popover placement="bottom" width="150" trigger="hover" v-model="visibleAssets">
          <div class="limitHight">
            <el-checkbox-group
              v-model="assets"
              v-for="(item,index) in this.HotelOptions.assets"
              :key="index"
            >
              <el-checkbox :label="item.name">{{item.name}}</el-checkbox>
            </el-checkbox-group>
          </div>
          <div style="text-align: center; margin: 10px 0 0 0">
            <el-button type="primary" size="mini" @click="visible = false">确定</el-button>
            <el-button size="mini" type="text" @click="visible = false">取消</el-button>
          </div>
          <el-button slot="reference" class="button">
            <span style="padding-right:30px">{{`已选${this.assets.length}项`}}</span>
            <span class="el-icon-arrow-down" style="padding-left:30px"></span>
          </el-button>
        </el-popover>
      </div>
      <!--  -->
      <div class="brand">
        <p>
          <span>酒店品牌</span>
        </p>
        <!--  -->
        <el-popover placement="bottom" width="150" trigger="hover" v-model="visibleBrands">
          <div class="limitHight">
            <el-checkbox-group
              v-model="brands"
              v-for="(item,index) in this.HotelOptions.brands"
              :key="index"
            >
              <el-checkbox :label="item.name">{{item.name}}</el-checkbox>
            </el-checkbox-group>
          </div>
          <div style="text-align: center; margin: 10px 0 0 0">
            <el-button type="primary" size="mini" @click="visible = false">确定</el-button>
            <el-button size="mini" type="text" @click="visible = false">取消</el-button>
          </div>
          <el-button slot="reference" class="button">
            <span style="padding-right:30px">{{`已选${this.brands.length}项`}}</span>
            <span class="el-icon-arrow-down" style="padding-left:30px"></span>
          </el-button>
        </el-popover>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  props: ["allHotel", "HotelOptions", "cities"],
  data() {
    return {
      // 总数据
      allData: [],
      // 绑定值 滑动条取值
      selsctPrice: [],
      visibleLevels: false,
      visibleTypes: false,
      visibleAssets: false,
      visibleBrands: false,
      //  酒店选项 assets[]-酒店设施 brands-酒店品牌 levels-酒店等级 types-酒店类型
      levels: [],
      assets: [],
      brands: [],
      types: [],
      // filterLevels: []
    };
  },
  methods: {
    // 获取点击筛选 星级 的值
    getLevels() {
      // console.log(this.levels)
      // console.log(this.allHotel);
      // console.log(this.cities);
      
      this.$emit("setFilterLevels", this.levels);
    },
    setFilterPrice(){
      // price_in
      this.$emit("setFilterPrice", this.selsctPrice);
    }
  },

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
      // .el-slider {
      //   padding: 0 5px 0 15px;
      // }
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
/deep/.el-button {
  display: flex;
  border: 0px;
  width: 100%;
  margin: 0 auto;
  padding: 12px 15px;
  span {
    flex: 1;
  }
}
/deep/.el-checkbox {
  margin: 3px 0;
}
.limitHight {
  max-height: 160px;
  // width: 100%;
  // overflow: hidden;
  overflow-y: auto;
}

// 下拉菜单样式
// /deep/.el-select-dropdown {
//   min-width: 100px !important;
// }

// /deep/.el-select {
//   .el-input__inner {
//     border: 0px;
//   }
// }

// 下拉菜单样式
// /deep/.el-select {
//   padding: 0;
//   height: 40px;
//   color: #666;
//   .el-input__inner {
//     border: none;
//   }
// }
// // 下拉菜单样式
// .dropDownList {
//   border: none;
//   width: 120px;
//   height: 20px;
// }
</style>