<template>
    <div id="example">
        <input type = "text" v-model="num" />
        <span>{{sum}}</span>
    </div>
</template>
<script type = "text/javascript">

export default{
    name : "input",
    data(){
        return{
            num  : 0
        }
    },
    computed :{
        sum (){
            let n =Number(this.num);
            if(Number.isNaN(n) || n<1) return 0;
            return ((1+n)*n)/2;
        }
    }
}

</script>