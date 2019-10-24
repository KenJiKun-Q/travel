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
    <div class="userComment" v-for="(item,index) in arr" :key="index">
      <div class="left">
        <div class="userInfo">
          <div class="userImg">
            <img src="../../../1.jpeg" alt />
          </div>
          <div class="userName">
            <p>LiKangFu0314</p>
            <p>18312683631</p>
          </div>
        </div>
        <p>点评总数：1</p>
        <p>上传图片：3</p>
      </div>
      <div class="right">
        <div class="title">
          <div class="titleLeft">
            <i class="el-icon-star-on"></i>
            <i class="el-icon-star-on"></i>
            <i class="el-icon-star-on"></i>
            <i class="el-icon-star-on"></i>
            <i class="el-icon-star-on"></i>
            <span>3.8</span> 分
          </div>
          <div class="titleRight">
            <div class="type">
              <img src="../../../1.jpeg" alt />
              家庭亲子
            </div>
            <div class="inTime">
              2019年10月入住
              <span>行政复式套房</span>
            </div>
          </div>
        </div>
        <div class="text">{{item.content}}</div>
        <div class="commentTextImg">
          <img src="../../../1.jpeg" alt />
          <img src="../../../1.jpeg" alt />
          <img src="../../../1.jpeg" alt />
        </div>
        <div class="time">
          <div class="timeLeft">
            <i class="el-icon-mobile-phone"></i>
            发表于 2019-10-04
          </div>
          <div class="timeRight">
            有用
            <span>(0)</span>
          </div>
        </div>
        <div class="reply">
          <h5>酒店回复：</h5>
          <p>尊敬的宾客，感谢您入住一袋公寓广州保利中汇，我们会继续努力于公寓及客房设施的维护更新，为每一位客人带来高品质的生活享受。</p>
          <p>
            查看回复
            <i class="el-icon-caret-bottom"></i>
          </p>
        </div>
      </div>
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
      value: "",
      data: {},
      arr: []
    };
  },
  props: {
    list: {
      type: Object,
      default: {}
    }
  },
  mounted() {
    // console.log(666, this.list);

    setTimeout(() => {
      // console.log(555, this.list);
      // this.data = this.list;
      this.arr = this.list.comments;
      console.log(this.arr);
    }, 1000);
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
    margin-top: 20px;
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
  .userComment {
    padding: 20px 0;
    border-bottom: 1px dashed #ccc;
    display: flex;
    justify-content: space-between;
    .left {
      flex: 1;
      margin-right: 20px;
      .userInfo {
        display: flex;
        justify-content: space-between;

        .userImg {
          width: 50px;
          height: 50px;
          overflow: hidden;
          img {
            height: 100%;
          }
        }
        .userName {
          padding-right: 20px;
          border-bottom: 1px dotted #000;
          p {
            font-size: 12px;
            margin-bottom: 15px;
          }
        }
      }
      > p {
        margin-top: 10px;
        text-align: right;
        font-size: 12px;
      }
    }
    .right {
      flex: 5;
      .title {
        display: flex;
        justify-content: space-between;
        padding-bottom: 10px;
        .titleLeft {
          color: #2577e3;
          span {
            margin-left: 10px;
          }
        }
        .titleRight {
          display: flex;
          justify-content: space-between;
          .type {
            margin-right: 10px;
            img {
              width: 15px;
              height: 15px;
            }
          }
          .inTime {
            span {
              color: #2577e3;
            }
          }
        }
      }
      .text {
      }

      .commentTextImg {
        padding: 10px 0;
        img {
          width: 100;
          height: 100px;
        }
      }
      .time {
        display: flex;
        justify-content: space-between;
        .timeLeft {
          font-size: 14px;
          color: #666;
        }
        .timeRight {
          padding: 2px 10px;
          color: #2577e3;
          font-size: 12px;
          border: 1px solid #2577e3;
          span {
            color: #ccc;
          }
        }
      }
      .reply {
        margin-top: 10px;
        padding: 10px;
        background: #fff8db;
        h5 {
          font-size: 16px;
        }
        p {
          font-size: 12px;
          line-height: 20px;
          &:nth-child(3) {
            text-align: right;
            color: #2577e3;
          }
        }
      }
    }
  }
}
</style>