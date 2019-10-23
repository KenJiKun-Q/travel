<template>
  <div class="container">
    <div class="commentTitle">
      <div class="comment">
        <h3>用户点评</h3>
        <div class="rate">
          <div class="commentStar">
            <i class="el-icon-star-on"></i>
            <i class="el-icon-star-on"></i>
            <i class="el-icon-star-on"></i>
            <i class="el-icon-star-on"></i>
            <i class="el-icon-star-on"></i>
          </div>
          <div class="score">
            3.9
            <span>/ 5分</span>
          </div>
        </div>
        <div class="overAll">
          <div>
            环境：
            <span>3.9</span>
          </div>
          <div>
            设施：
            <span>3.9</span>
          </div>
          <div>
            服务：
            <span>3.9</span>
          </div>
          <div>
            卫生：
            <span>3.9</span>
          </div>
        </div>
      </div>
      <div class="search">
        <p>点评均来自真实入住客人!</p>
        <div class="input">
          <input type="text" placeholder="搜索点评关键字" />
          <input type="button" value="搜索" />
        </div>
      </div>
    </div>
    <div class="commentInfoList">
      <div class="title">
        <div class="left">
          <div>全部(366)</div>
          <div>差评(33)</div>
          <div>有图片(8)</div>
        </div>
        <div class="right">
          <el-select v-model="value" placeholder="热门排序" class="select">
            <el-option
              v-for="item in hot"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-select v-model="hot.value" placeholder="全部出游类型" class="select">
            <el-option
              v-for="item in type"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-select v-model="type.value" placeholder="全部房型" class="select">
            <el-option
              v-for="item in room"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </div>
    </div>
    <div class="userComment">
      <div class="left"></div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hot: [
        {
          value: "选项1",
          label: "热门排序"
        },
        {
          value: "选项2",
          label: "入住时间排序"
        }
      ],
      type: [
        {
          value: "选项1",
          label: "全部出游类型"
        },
        {
          value: "选项2",
          label: "商务出差"
        },
        {
          value: "选项3",
          label: "朋友出游"
        },
        {
          value: "选项4",
          label: "情侣出游"
        },
        {
          value: "选项5",
          label: "独自出行"
        }
      ],
      room: [
        {
          value: "选项1",
          label: "全部房型"
        },
        {
          value: "选项2",
          label: "高级单人房"
        },
        {
          value: "选项3",
          label: "豪华单人房"
        },
        {
          value: "选项4",
          label: "白金行政房"
        },
        {
          value: "选项5",
          label: "高级双人房"
        }
      ],
      value: ""
    };
  }
};
</script>

<style scoped lang="less">
.container {
  .commentTitle {
    position: relative;
    height: 100px;
    // display: flex;
    // justify-content: space-between;
    .comment {
      // width: 100px;
      // height: 100px;
      position: absolute;
      bottom: 0;
      left: 0;
      .overAll {
        display: flex;
        div {
          font-size: 14px;
          margin-right: 20px;
          span {
            color: #2577e3;
            margin-left: -10px;
          }
        }
      }
      .rate {
        display: flex;
        font-size: 20px;
        color: #2577e3;
        .commentStar {
          margin: 5px 0;
        }
        .score {
          // margin-top: 10px;
          padding: 5px;
          margin-left: 10px;
          span {
            font-size: 14px;
            color: #000;
          }
        }
      }
    }
    .search {
      // width: 100px;
      // height: 100px;
      position: absolute;
      bottom: 0;
      right: 0;
      p {
        padding: 10px;
      }
      .input {
        display: flex;
        justify-content: space-between;
        input {
          height: 30px;
          outline: none;
          &:nth-child(1) {
            width: 150px;
            padding-left: 10px;
            box-sizing: border-box;
          }
          &:nth-child(2) {
            width: 50px;
            box-sizing: border-box;
            border: 1px solid #2577e3;
            background: #e6f3ff;
            color: #2577e3;
            cursor: pointer;
          }
        }
      }
    }
  }
  .commentInfoList {
    position: relative;
    height: 50px;
    width: 100%;
    background: #f5f5f5;
    border-bottom: 2px solid #ccc;
    // box-sizing: border-box;
    margin: 20px 0;
    .left {
      position: absolute;
      bottom: 0;
      left: 0;
      display: flex;
      padding-left: 5px;
      div {
        margin-right: 5px;
        margin-bottom: -2px;
        border-bottom: 2px solid #ccc;
        padding: 5px 15px;
        cursor: pointer;
        color: #2577e3;
        &:hover {
          border-bottom-color: #000;
        }
      }
    }
    .right {
      position: absolute;
      right: 0;
      top: 0;
      padding: 5px;
      box-sizing: border-box;
      .select {
        margin-left: 10px;
        width: 150px;
        color: #000;
      }
    }
  }
}
</style>