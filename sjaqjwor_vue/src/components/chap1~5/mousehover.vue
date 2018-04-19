<template>
  <div>
      <button id = "a" v-bind:style="style" @mouseover.stop="overEvent" @mouseout.stop="outEvent">테스트</button>
  </div>
</template>
<script>
    export default{
        name: "mousehover",
        data(){
            return{
                style:{
                    backgroundColor:'aqua',border:'solid 1px gray',
                    with:'100px',textAlign:'center'
                }
            }
        },
        methods:{
            overEvent(e){
                this.style.backgroundColor='purple',
                this.style.color ='yellow'
            },
            outEvent(e){
                this.style.backgroundColor='aqua',
                this.style.color="black"
            }
        }
    }
</script>
