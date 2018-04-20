<template>
<div>
    <button class="buttonstyle" @click="clickevent" v-bind:data-lang="buttonInfo.value">
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
          //timeclick의 해당하는 부모 이벤트에 전달
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

