<template>
  
  <div>
      <button>
        {{text}}
     </button>
      <slot/>

  </div>
</template>

<script>
export default {
    props:['text']
}
</script>

<style>

</style>