<template>
  <div>
    <div class="container">
      <div>
        <!-- 多张图片布局 -->
        <div class="city-content" v-if="post.images.length >= 3">
          <div class="city-content-title">
            <a href="#">{{post.title}}</a>
          </div>
          <div class="city-content-details">
            <a href="#">{{post.summary}}</a>
          </div>
          <div class="city-content-image">
            <a href="#">
              <img v-for="(item,index) in post.images" :key="index" :src="item" v-if="index<3" alt />
            </a>
          </div>
          <div class="city-content-info">
            <span>
              <i class="el-icon-location-outline"></i>
              {{post.cityName}}
            </span>
            <span>by</span>
            <a href="#">
              <span>
                <img :src="$axios.defaults.baseURL+post.account.defaultAvatar" alt />
                {{post.account.nickname}}
              </span>
            </a>
            <span>
              <i class="el-icon-view"></i>
              {{post.watch}}
            </span>
            <em class="zan fr">15赞</em>
          </div>
        </div>
        <!-- 单张图片布局 -->
        <div
          class="city-contented clearfix"
          v-if="post.images.length > 0 && post.images.length < 3"
        >
          <div class="city-contented-left fl">
            <div class="image">
              <img :src="post.images[0]" alt />
            </div>
          </div>
          <div class="city-contented-right fl">
            <div class="contented-right-tittle">{{post.title}}</div>
            <div class="contented-right-details">{{post.summary}}</div>
            <div class="contented-right-info">
              <span>
                <i class="el-icon-location-outline"></i>
                {{post.cityName}}
              </span>
              <span>by</span>
              <a href="#">
                <span>
                  <img :src="$axios.defaults.baseURL+post.account.defaultAvatar" alt />地球发动机
                </span>
              </a>
              <span>
                <i class="el-icon-view"></i> 8412
              </span>
              <em class="zan fr">15赞</em>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["post"],
  methods: {},
  mounted() {
    // console.log(this.post);
  }
};
</script>

<style scoped lang="less">
.container {
  box-sizing: border-box;
  margin: 10px 0 0 10px;
  width: 700px;

  .city-content {
    margin-bottom: 20px;
    padding: 10px 0;
    border-bottom: 1px #ddd solid;
    .city-content-title {
      margin: 20px 0;
      font-size: 20px;
    }
    .city-content-details {
      color: #666666;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      margin-bottom: 20px;
    }
    .city-content-image {
      width: 100%;

      img {
        width: 32.5%;
        height: 150px;
        padding-right: 5px;
        object-fit: cover;
      }
    }
    .city-content-info {
      color: #999999;
      margin-top: 10px;
      font-size: 13px;
      span {
        padding-right: 10px;
      }
      a {
        img {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          padding-right: 3px;
        }
        * {
          vertical-align: middle;
        }
        span {
          color: #ffa500;
        }
      }
      em {
        font-size: 16px;
        color: #ffa500;
      }
    }
  }
  .city-contented {
    margin: 20px 0;
    padding: 10px 0;
    border-bottom: 1px #ddd solid;
    .city-contented-left {
      width: 220px;
      img {
        width: 100%;
      }
    }
    .city-contented-right {
      margin-left: 10px;
      .contented-right-tittle {
        font-size: 19px;
        width: 450px;
        margin-bottom: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
      }
      .contented-right-details {
        width: 450px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
      }
      .contented-right-info {
        padding-top: 15px;
        font-size: 13px;
        color: #999999;
        a {
          color: #ffa500;
          img {
            padding-right: 3px;
            width: 14px;
            height: 14px;
            border-radius: 50%;
          }
        }
        span {
          padding-right: 10px;
        }
        em {
          font-size: 16px;
          color: #ffa500;
        }
      }
    }
  }
}
</style>