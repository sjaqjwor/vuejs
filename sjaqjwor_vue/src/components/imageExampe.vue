<template>
    <div id="example" v-on:contextmenu.prevent="ctx" @mouseup.left="leftmouse" @mouseup.right="rightmouse">
        <div>
            left click : 왼쪽으로 이동<br />
            right click : 오른쪽으로
        </div>
        <img src="static/image/foot.jpg" v-bind:style="{position:'absolute', left:pos.left+'px',top:pos.top+'px'}" />
    </div>
</template>
<script>
 export default{
     name: "imageExampe",
     data(){
         return{
             pos:{left:100, top:100}
         }
     },
     methods:{
         ctx(v){
         },
         leftmouse(v){
             if(this.pos.left>30){
                 this.pos.left-=30;
                 console.log("move left")
             }
         },
         rightmouse(v){
            this.pos.left+=30;
            console.log("move right")
         }
     } 
     
 }
</script>
<style>
html,body {margin: 0;padding: 0;}
#example{
    height: 98vh; min-height: 100%; padding :10px
}
</style>