import { Message } from "element-ui";

export let state = ()=>{
    //保存的历史记录
    return{
    youxiang : []
    }
}
export let mutations= {
    // 设置history,data是搜索的表单的对象
    setyouxiang(state,data){
    //把最新的记录追加到第一个
    state.youxiang.unshift(data)
    Message.success(`保存成功`)
    },
    deleteyouxiang(state,index){
        state.youxiang.splice(index,1)
        Message.success(`删除成功`)
    }
}