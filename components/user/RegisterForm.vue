<template>
    <el-form 
        :model="form" 
        ref="form" 
        :rules="rules" 
        class="form">
            <el-form-item class="form-item" prop="username">
                <el-input 
                placeholder="用户名手机" v-model="form.username">
                </el-input>
            </el-form-item>

            <el-form-item class="form-item" prop="captcha">
                <el-input 
                placeholder="验证码"
                v-model="form.captcha">
                    <template slot="append">
                        <el-button @click="handleSendCaptcha">
                            发送验证码
                        </el-button>
                    </template>
                </el-input>
            </el-form-item>

            <el-form-item class="form-item" prop="nickname">
                <el-input 
                placeholder="你的名字" v-model="form.nickname">
                </el-input>
            </el-form-item>

            <el-form-item class="form-item" prop="password">
                <el-input
                placeholder="密码"
                type="password"
                v-model="form.password"
                auto-complete="off"></el-input>
            </el-form-item>


            <el-form-item class="form-item" prop="checkPassword">
                <el-input
                placeholder="确认密码"
                type="password"
                v-model="form.checkPassword"
                auto-complete="off"></el-input>
            </el-form-item>

            <el-button 
            class="submit" 
            type="primary" 
            @click="handleRegSubmit">
                注册
            </el-button>
        </el-form>
</template>

<script>
import { async } from 'q';
export default {
    data(){
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请再次输入密码'));
            } else if (value !== this.form.password) {
              callback(new Error('两次输入密码不一致!'));
            } else {
              callback();
            }
        };
        return {
            // 表单数据
            form: {
                username:"", //手机号码
                nickname:"", //昵称
                captcha:"",  //手机验证码
                password:"", //密码
                checkPassword:""
            },
            // 表单规则
            rules: {
                username:[{required: true, message: '请输入手机号码', trigger: 'blur'}],
                nickname:[{required: true, message: '请输入昵称', trigger: 'blur'}],
                captcha:[{required: true, message: '请输入获取的手机验证码', trigger: 'blur'}],
                password:[{required: true, message: '请输入密码', trigger: 'blur'}],
                checkPassword: [{ validator: validatePass2, trigger: 'blur' }],
            },
        }
    },
    methods: {
        // 发送验证码
        async handleSendCaptcha(){
            if(!this.form.username){
                this.$confirm('手机不能为空','提示',{
                    confirmButtonText: '确定',
                    showCancelButton: false,
                    type: 'warning'
                })
                return;
            }


            if(this.form.username.length !== 11){
                this.$confirm('手机号码格式不对','提示',{
                    confirmButtonText:"确定",
                    showCancelButton:false,
                    type:"warning"
                })
                return;
            }

            var res = await this.$axios({
                url:"/captchas",
                method:"POST",
                data:{
                    tel:this.form.username
                }
            })
            // console.log(res)
            let {code} = res.data
            this.$confirm(`您的手机验证码为:${code}`,'提示',{
                confirmButtonText:"确定",
                showCancelButton:false,
                type:"warning"
            })
        },


        // 注册
        handleRegSubmit(){
            //console.log(this.form)
            let {checkPassword , ...props} = this.form
            this.$refs.form.validate(async valid => {
                if (valid) {
                   var res =  await this.$axios({
                       url:"/accounts/register",
                       method:"POST",
                       data:props
                   })
                    // console.log(res)
                  if(res.status === 200){
                    this.$message.success("注册成功")

                    // 跳转到首页
                    this.$router.push("/")

                    let data = res.data;

                    //把用户信息token保存到本地,在头部组件中显示数据
                    this.$store.commit("user/setUserInfo",data)
                  }
                } 

            });
        }
    }
}
</script>

<style scoped lang="less">
    .form{
        padding:25px;
    }

    .form-item{
        margin-bottom:20px;
    }

    .form-text{
        font-size:12px;
        color:#409EFF;
        text-align: right;
        line-height: 1;
    }

    .submit{
        width:100%;
        margin-top:10px;
    }
</style>