<template>
  <div>
      <p>1~100 입력</p>
      <input type="text" v-model="number" ><img src="static/image/foot.jpg" v-show="warn"/>
  </div>
</template>
<script>
export default{
    name : "warning",
    data(){
        return {
            number:0,
            warn : true
        }
    },
    watch:{
        number(v){
            if(this.number >=1 && this.number<=100){
                this.warn=false
            }else{
                    this.warn = true
            }
        }
    }
}

</script>