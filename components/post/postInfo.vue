<template>
  <div>
    <div class="container">
      <div>
        <!-- 多张图片布局 -->
        <div class="city-content" v-if="post.images.length >= 3">
          <nuxt-link :to="`/post/postContent?id=${post.id}`">
            <div class="city-content-title">{{post.title}}</div>
          </nuxt-link>
          <nuxt-link :to="`/post/postContent?id=${post.id}`">
            <div class="city-content-details">{{post.summary}}</div>
          </nuxt-link>
          <nuxt-link :to="`/post/postContent?id=${post.id}`">
            <div class="city-content-image">
              <img v-for="(item,index) in post.images" :key="index" :src="item" v-if="index<3" alt />
            </div>
          </nuxt-link>
          <div class="city-content-info">
            <span>
              <i class="el-icon-location-outline"></i>
              {{post.cityName}}
            </span>
            <span>by</span>
            <span>
              <img :src="$axios.defaults.baseURL+post.account.defaultAvatar" alt />
              {{post.account.nickname}}
            </span>

            <span>
              <i class="el-icon-view"></i>
              {{post.watch}}
            </span>
            <em class="zan fr">{{post.like? post.like:0}}赞</em>
          </div>
        </div>
        <!-- 单张图片布局 -->
        <div
          class="city-contented clearfix"
          v-if="post.images.length > 0 && post.images.length < 3"
        >
          <div class="city-contented-left fl">
            <nuxt-link :to="`/post/postContent?id=${post.id}`">
              <div class="image">
                <img :src="post.images[0]" alt />
              </div>
            </nuxt-link>
          </div>
          <div class="city-contented-right fl">
            <nuxt-link :to="`/post/postContent?id=${post.id}`">
              <div class="contented-right-tittle">{{post.title}}</div>
            </nuxt-link>
            <nuxt-link :to="`/post/postContent?id=${post.id}`">
              <div class="contented-right-details">{{post.summary}}</div>
            </nuxt-link>
            <div class="contented-right-info">
              <span>
                <i class="el-icon-location-outline"></i>
                {{post.cityName}}
              </span>
              <span>by</span>
              <span>
                <img :src="$axios.defaults.baseURL+post.account.defaultAvatar" alt />
                {{post.account.nickname}}
              </span>
              <span>
                <i class="el-icon-view"></i>
                {{post.watch}}
              </span>
              <em class="zan fr">{{post.like? post.like:0}}赞</em>
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
  mounted() {}
};
</script>

<style scoped lang="less">
.container {
  box-sizing: border-box;
  margin: 10px 0 50px 10px;
  width: 700px;

  .city-content {
    margin-bottom: 20px;
    padding-bottom: 10px;
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
      img {
        width: 14px;
        height: 14px;
        border-radius: 50%;
        padding-right: 3px;
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
      .zan {
        padding-right: 25px;
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
      position: relative;
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

        img {
          padding-right: 3px;
          width: 14px;
          height: 14px;
          border-radius: 50%;
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