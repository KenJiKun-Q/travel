export let state = () =>{
    return{
        //搜索的记录
        history:[]
    }
}

export let mutations = {
    // 设置history,data是搜索的表单的对象
   setHistory(state,data){
       //把最新的记录追加到第一个
    state.history.unshift(data)
   }
}