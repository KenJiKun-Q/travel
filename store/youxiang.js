export let state = ()=>({
    //保存的历史记录
    youxiang : []
})
export let mutations= {
    setyouxiang(state,data){
        state.youxiang.unshift(data)
    }
}