//固定写法,暴露出来
export let state = () => {
  return {
    userInfo: {}
  }
}

// 存放的是同步修改state的方法
export let mutations = {
  // mutations下的值必须是一个函数,函数中会有一个固定的参数state,第二个参数是用户调用方法时候传进来
  //data是登录成功后返回的对象数据
  setUserInfo(state, data) {
    state.userInfo = data
  },

  //   清除用户数据
  cleanUserInfo(state, info) {
    if (process.browser) {
      localStorage.removeItem("userInfo");
    }
    state.userInfo = {}
  }

}

//存放的是异步修改state的方法
export let actions = {
  //封装登录的方法
  //store是固定必须要有的参数,执行当前的store == 组件内的this.$store
  //登录页面
  async login(store, data) {
    var res = await this.$axios({
      url: "/accounts/login",
      method: "POST",
      data
    })

    if (res.status === 200) {
      store.commit("setUserInfo", res.data)
    }
    return res
  },


  //发送手机验证码,tel是传入的手机号码
  async sendCaptcha(store, tel) {

    let res = await this.$axios({
      url: "/captchas",
      method: "POST",
      data: {
        tel //手机号码
      }
    })

    return res
  },


  //注册功能
  async registerForm(store, data) {
    let res = await this.$axios({
      url: "/accounts/register",
      method: "POST",
      data
    })

    // console.log(res)
    if (status === 200) {
      store.commit("setUserInfo", res.data)
    }

    return res;
  }

}
