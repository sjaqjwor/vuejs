<template>
  <button id = "a" :style="[mycolor,mylay]" >선택</button>
</template>
<script>
export default{
    name:"twoStyle",
    data(){
        return{
            mycolor:{backgroundColor:'purple',color:'yellow'},
            mylay:{width:'150px',height:'80px',textAlign:'center'}
        }
    }
}    
</script>
