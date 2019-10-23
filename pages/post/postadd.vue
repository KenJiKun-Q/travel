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

              <!-- 中间富文本 -->
              <div class="fuwenben">
                <VueEditor :config="config" ref="vueEditor" style="height:500px;" />
              </div>

              <!-- 底部搜索 -->
              <el-form-item label="选择城市" class="formcity">
          <el-autocomplete
                :fetch-suggestions="queryDepartSearch"
                placeholder="请搜索出发城市"
                @select="handleDepartSelect"
                class="el-autocomplete"
                v-model="form.city"
                @blur="handleBlur(`depart`)"
                ></el-autocomplete>

                <!-- <el-input v-model="form.city" placeholder="请搜索游玩城市" class="city_input"></el-input> -->
              </el-form-item>

              <!-- 底部上传或者草稿部分 -->
              <div class="sousuo">
                <el-button size="small" type="primary" @click="onSubmit">点击发布</el-button>
                或者
                <a href="javascript:;" @click="saveSubmit">保存到草稿</a>
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
            草稿箱({{$store.state.youxiang.youxiang.length}})
            <div  v-for="(item, index) in $store.state.youxiang.youxiang" 
            :key="index"
            class="myhand">
            <br />
              <div class="wenzi">
                <span @click="our_length(item)">
                  {{item.title}}
                  <img src="../../assets/app.jpg" style="weight:20px; height:20px;">
                </span>
                <p>2019-10-21</p>
              </div>
           

            </div>
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
        id:"",
      },
      newform: {
        title: "", // 文章标题
        content: "", // 文章内容
        city: "", // 城市id（城市名称）
        id:"", 
      },
      //存放newData的城市的数组
      cities:[],
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


      // 出发城市输入框值发生变化时候会触发
      // value：输入框的值
      // cb:回调函数，必须要调用，调用时候必须要传递一个数组的参数，
      // 数组中的元素必须是一个对象，对象中必须要有value属性
          queryDepartSearch(value, cb){
            // 输入框为空时候不请求
            if(!value) {
                // 不显示下拉框
                cb([]);
                return;
            };
            
            // 请求搜索建议城市
            this.$axios({
                url: "/airs/city?name=" + value
            }).then(res => {

                // data是后台返回的城市数组,没有value属性
                const {data} = res.data;
                // 循环给每一项添加value属性
                const newData = data.map(v => {
                    v.value = v.name.replace("市", ""); // 乌鲁市齐市
                    return v;
                });

                // 把newData赋值给data中cities
                this.cities = newData;

                // 展示到下拉列表
                cb(newData)
            })
        },
                handleBlur(type){
            // 默认选中城市列表第一个
            // if(this.cities.length > 0){
            //     if(type === "depart"){
            //         this.form.departCity = this.cities[0].value;
            //         this.form.departCode = this.cities[0].sort;
            //     }
            //     if(type === "dest"){
            //         this.form.destCity = this.cities[0].value;
            //         this.form.destCode = this.cities[0].sort;
            //     }
            // }  

            // 另一种写法
            if(this.cities.length === 0) return;

            this.form[type + "city"] = this.cities[0].value;
            this.form[type + "id"] = this.cities[0].sort;
        },


      
        // 出发城市下拉选择时触发
        handleDepartSelect(item) {
            // 获取到表单需要的机票信息
            this.form.city = item.value;
            this.form.id = item.sort;
        },
















    //发布文章
    onSubmit(form, callback) {
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
        }
      }).then(res => {
        console.log(res);
        let{message , data} = res.data;
        if(message === "新增成功") {
        this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
          // callback();
        }
      });
      // this.$router.go(0);
    },

// onSubmit(form){
//   this.Ssubmit(form,()=>{
//     this.$message.success(`新增成功`);
//     //清空
//     this.form = {};
//     var quill = this.$refs.vueEditor.editor;
//     quill.root.innerHTML = "";
//   })
// },
    
    //保存草稿
    saveSubmit(){

      // 获取数据
      var quill = this.$refs.vueEditor.editor;
      this.form.content = quill.root.innerHTML;
   
    const goods = { ...this.form};
    this.$store.commit("youxiang/setyouxiang",goods);
    this.form = {}
// 清空
    var quill = this.$refs.vueEditor.editor;
    quill.root.innerHTML = "";
    this.$router.go(0);
    },
    our_length(item){
      console.log(item);
      var quill = this.$refs.vueEditor.editor;
      quill.root.innerHTML =item.content
      this.form.city = item.city
      this.form.title = item.title

    },


  },

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
  // height: 79px;
  padding: 10px;
  border: 1px red solid;

  span {
    margin-top: 10px;
  }

  p {
    color: #999;
  }
}
.myhand{
  cursor: pointer;
  font-size: 15px;
  .wenzi{
    span:hover{
      text-decoration: underline;
    }
  }

}
</style>