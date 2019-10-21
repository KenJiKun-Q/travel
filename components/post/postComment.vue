<template>
  <div>
    <el-input
        type="textarea"
        :rows="2"
        placeholder="请输入内容"
        v-model="textarea"
        style="margin-bottom:10px">
    </el-input>
    <el-button type="primary" class="postButton">提交</el-button>


    
    <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-preview="handleSuccess"
        :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
    </el-upload>


  </div>
</template>

<script>
export default {
    data() {
    return {
      textarea: ''
    }
  },

  methods:{
      handleSuccess(file, fileList){

      },
      handleRemove(file){

      }
  }
}
</script>

<style scoped lang="less">
    .postButton{
        float: right;
    }
</style>