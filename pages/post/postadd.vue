<template>
  <div>
    <el-row>
      <el-form :model="form">
        <!--  -->
        <el-col :span="17">
          <div class="grid-content bg-purple-dark">
            <!-- 标题 -->
            <div style="margin-left:30px; weight:500px;">
              <div class="title_word">
                <h2>发表新攻略</h2>
                <p>分享你的个人游记，让更多人看到哦！</p>
                <el-input v-model="form.title" placeholder="请输入标题"></el-input>
              </div>

              <!-- 封面 -->
          <el-upload
  class="upload-demo"
  :action="`${$axios.defaults.baseURL}/upload`"
            name="files"
             list-type="picture-card"
          :on-success="handleSuccess"
          :on-remove="handleRemove"
  :on-preview="handlePreview"
  :file-list="fileList">
  <el-button size="small" type="primary">点击上传</el-button>
  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>

              <!-- 中间富文本 -->
              <div class="fuwenben">
                <VueEditor :config="config" ref="vueEditor" style="height:500px;" />
              </div>

              <!-- 底部搜索 -->
              <el-form-item label="选择城市" class="formcity">
                <el-input v-model="form.city" placeholder="请搜索游玩城市" class="city_input"></el-input>
              </el-form-item>

              <!-- 底部上传或者草稿部分 -->
              <div class="sousuo">
                <el-button size="small" type="primary" @click="onSubmit">点击发布</el-button>或者
                <a href="javascript:;">保存到草稿</a>
              </div>
            </div>
          </div>
        </el-col>
      </el-form>
      <!-- 右边 -->
      <el-col :span="7">
        <div class="grid-content bg-purple-dark">
          <!--  -->
          <div class="right">
            草稿箱（1）
            <br />
            <span data-v-a7cc81fa class="iconfont el-icon-edit"></span>
            <p>2019-10-21</p>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import VueEditor from "vue-word-editor";
import "quill/dist/quill.snow.css";
let VueEditor;

if (process.browser) {
  VueEditor = require("vue-word-editor").default;
}

export default {
  data() {
    return {
      // 提交的表单数据
      form: {
        title: "", // 文章标题
        content: "", // 文章内容
        city: "", // 城市id（城市名称）
        categories: [],
        cover: [],

      },

      token: `Bearer ${this.$store.state.user.userInfo.token}`,

      //编辑器
      config: {
        // 上传图片的配置
        uploadImage: {
          url: this.$axios.defaults.baseURL + "/upload",
          name: "files",

          // res是结果，insert方法会把内容注入到编辑器中，res.data.url是资源地址
          uploadSuccess: (res, insert) => {
            console.log(res);

            insert(this.$axios.defaults.baseURL + res.data[0].url);
          }
        },

        // 上传视频的配置
        uploadVideo: {
          url: this.$axios.defaults.baseURL + "/upload",
          name: "files",

          uploadSuccess: (res, insert) => {
            insert(this.$axios.defaults.baseURL + res.data.data.url);
          }
        }
      }
    };
  },
  components: {
    VueEditor
  },
  methods: {
    onSubmit() {

      console.log(this.form);
      
      // const {categories} = this.form;
      // this.form.categories = [];

      var quill = this.$refs.vueEditor.editor;
      this.form.content = quill.root.innerHTML;

      this.$axios({
        url: "/posts",
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.$store.state.user.userInfo.token}`
        },
        data: {
          content: this.form.content,
          title: this.form.title,
          city: this.form.city,
          categories: this.form.categories,
        }
      }).then(res => {
        console.log(res);
      });
    },

    // 图片上传成功的回调函数
    handleSuccess(res, files) {
      const hhh = res.url
      console.log(files);
      
      this.form.cover.push({
        id: res.data.id
      });
      console.log(this.form);
      
    }
  }
};
</script>

<style scoped lang="less">
.title_word {
  margin-bottom: 20px;
  p {
    margin: 10px;
    color: #f3bd72;
    font-size: 12px;
  }
}
.formcity {
  margin-top: 20px;
  margin-top: 100px;
  .city_input {
    width: 202px;
    height: 40px;
  }
}
.sousuo {
  margin-bottom: 20px;
  a {
    color: yellow;
  }
  a:hover {
    border-bottom: 1px yellow solid;
  }
}

.right {
  margin: 50px 70px;
  width: 178px;
  height: 79px;
  padding: 10px;
  border: 1px red solid;

  span {
    margin-top: 10px;
  }

  p {
    color: #999;
  }
}
</style>