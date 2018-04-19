<template>
<div>
    <button class="buttonstyle" v-on:click="clickevent" v-bind:data-lang="buttonInfo.value">
        {{buttonInfo.text}}
    </button>
</div>
 
</template>
<script>
export default {
  name:"child",
  props:['buttonInfo'],
  methods:{
      clickevent:function(e){
          this.$emit('timeclick',e.target.innerText,e.target.dataset.lang);
      }
  }
}
</script>
<style>
.buttonstyle{
    width:120px;height: 30px;text-align: center;
}
</style>

