<template>
  <div style="padding:50px">
      <SlotButton text="登录"/>
      <SlotButton text="退出"/>
      <span style="color:red">
          123
      </span>
  </div>
</template>

<script>
import SlotButton from "@/components/slotButton"

export default {
    components:{
        SlotButton
    }
}
</script>

<style>

</style>