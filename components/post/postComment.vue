<template>
  <div>
    <el-input
        type="textarea"
        :rows="2"
        placeholder="请输入内容"
        v-model="textarea"
        ref="contentValue"
        style="margin-bottom:10px">
    </el-input>
    <el-button type="primary" class="postButton" @click="onSubmit">提交</el-button>


    
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

  //使用refs获取编辑器中的内容
    data() {
    return {
      textarea: '',
      // 提交输入框的数据
      form:{
        content:"",
        pics:"",
        post:"",
        
      },
    }
  },

  methods:{
      handleSuccess(file, fileList){

      },
      handleRemove(file){

      },
      onSubmit(){
        //使用refs获取编辑器内容
        this.form.content = this.$refs.contentValue.value
      
        this.$axios({
          url:"/comments",
          method:"POST",
          headers:{
            Authorization:`Bearer ${this.$store.state.user.userInfo.token}`
          },
          data:this.form
        }).then(res=>{
          // console.log(res)
          let{message} = res.data

          this.$message.success(message)
        })
        

      }
  }
}
</script>

<style scoped lang="less">
    .postButton{
        float: right;
    }
</style>