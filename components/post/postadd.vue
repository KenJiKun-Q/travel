<template>
    <div style="padding:30px;">
    <el-form :model="form" label-width="80px">
      <el-form-item label="标题">
        <el-input v-model="form.title"></el-input>
      </el-form-item>

      <el-form-item label="类型">
        <el-radio-group v-model="form.type">
          <el-radio :label="1">文章</el-radio>
          <el-radio :label="2">视频</el-radio>
        </el-radio-group>
      </el-form-item>
    
      <el-form-item label="内容" v-if="form.type === 1">
        <!-- <el-input v-model="form.content" rows="5" type="textarea"></el-input> -->
        <VueEditor :config="config"  ref="vueEditor"/>
      </el-form-item>

      <el-form-item label="视频" v-if="form.type === 2">
        <el-upload
          :action="`${$axios.defaults.baseURL}/upload`"
          name="file"
          :headers="{
             Authorization: token
          }"
          :on-success="handleVideoSuccess"
          >
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
      </el-form-item>

      <el-form-item label="栏目">
        <!-- 栏目的数据来自于后台 -->
        <el-checkbox-group v-model="form.categories">
          <!-- allCate所有的栏目 -->
          <el-checkbox 
          v-for="(item, index) in allCate"
          :key="index"
          v-if="item.id !== 999"
          :label="item.id" 
          name="type">{{item.name}}</el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item label="封面">
        <!-- action：上传图片的链接
        list-type: 声明当前是上传多张图片
        on-success： 图片上传成功的函数
        on-remove: 移除图片函数 -->
        <el-upload
          :action="`${$axios.defaults.baseURL}/upload`"
          name="file"
          :headers="{
             Authorization: token
          }"
          list-type="picture-card"
          :on-success="handleSuccess"
          :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import VueEditor from "vue-word-editor";
import "quill/dist/quill.snow.css"
export default {
  data () {
    return {
      // 提交的表单数据
      title: "",     // 文章标题
      content: "",   // 文章内容
      city:"",       // 城市id（城市名称）
      
    }
  }

}
</script>

<style>

</style>