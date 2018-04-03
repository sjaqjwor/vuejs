<template>
<div>
  <button id= "btn1" v-bind:class="{set1:s1,set2:s2,set3:s3}" >버튼</button>
  <input type="checkbox" v-model="s1" value="true" />s1 디자인<br />
  <input type="checkbox" v-model="s2" value="true" />s2 디자인<br />
  <input type="checkbox" v-model="s3" value="true" />s3 디자인<br />
  </div>
</template>
<style>
.set1{background-color:"aqua";color : "purple"}
.set2{text-align: center; width:"120px"}
.set3{border:sandybrown dashed 1px;}
</style>
<script>
    export default{
        name : "twoStyle",
        data(){
           return{ s1 : false ,s2 : false , s3 : false}
        }
    }
</script>