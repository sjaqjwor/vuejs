<template>
    <div v-on:contextmenu="stop">
        <a href = "https://facebook.com" @click="confirm">페이스북</a>
    </div>
</template>
<script>
export default{
    name : "clickexample",
    methods:{
        stop(v){
            v.preventDefault();
        },
        confirm(v){
            if(!confirm("넘기냐?")){
                v.preventDefault();
            }
        }
    }
}
</script>