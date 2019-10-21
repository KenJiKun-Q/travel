<template>
    <div style="padding:30px;">
      <!--  -->
      <el-form :model="form" label-width="80px">
        <div class="title_word">
          <h2>发表新攻略</h2>
          <p>分享你的个人游记，让更多人看到哦！</p>
        <el-input v-model="form.title" placeholder="请搜索游玩城市"></el-input>
        </div>
      <!-- </el-form> -->
      <!--  -->
    <!-- <el-form :model="form" label-width="80px"> -->
      <el-form-item label="选择城市" class="formcity">
        <el-input v-model="form.title" placeholder="请搜索游玩城市"  class="city_input"></el-input>
      </el-form-item>
      </el-form>
      </div>
</template>

<script>
import "quill/dist/quill.snow.css"
let VueEditor;
export default {
  data () {
    return {

      // 提交的表单数据
      form:{
      title: "",     // 文章标题
      content: "",   // 文章内容
      city:"",       // 城市id（城市名称）
      }
      
    }
  }

}
</script>

<style scoped lang="less">

.title_word{
  p{
    margin: 10px;
    font-size: 12px;
  }
}

.formcity{
  margin-top: 20px;
  .city_input{
  width: 202px;
  height: 40px;
  }
}

</style>