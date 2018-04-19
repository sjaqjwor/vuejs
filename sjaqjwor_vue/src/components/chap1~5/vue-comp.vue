<template>
  <div>
      <cent v-bind:class="box"></cent>
  </div>
</template>
<script>
    Vue.component(cent,{
        template:'<div class="center">중앙에 위치</div>'
    })
    export default{
        name: "vue-comp",
        data(){
            return{
                box:{boxcolor:true}
            }
        }
    }    
</script>
<style>
.box{background-color : orange;}
.center{width:200px; height:100px; line-height:100px;text-align: center;border: 1px solid gray;}
</style>

