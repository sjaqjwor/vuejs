<template>
  <div>
      <button :class="$style.hand">버튼 적용</button>
  </div>
</template>

<script>
export default {
    created(){
        console.log(this.$style);
    }
}
</script>

<style module>
    .hand{
        cursor: pointer; background-color: purple; color: yellow
    }
</style>
