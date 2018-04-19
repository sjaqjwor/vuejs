<template>
    <div>
        x : <input type ="text" v-model="x">
        y : <input type = "text" v-model="y">
        {{sum}}
    </div>
</template>
<script>
    export default{
        name : "vueWatcher",
        data(){
            return{
                x:0,
                y:0
            }
        },
        computed:{
            sum(){
                let result = Number(this.x)+Number(this.y);
                return result;
            }
        }
        // watch:{
        //     x(v){
        //         console.log("x");
        //         let result = Number(v) + Number(this.y);
        //         if(isNaN(result)) this.sum=0;
        //         else this.sum=result;
        //     },
        //     y(v){
        //         console.log ("y");
        //         this.y = v;
        //         let result = Number(this.x) + Number(v);
        //         if(isNaN(result)) this.sum=0;
        //         else this.sum=result;
               
        //     }
        // }
    }
</script>