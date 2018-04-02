<template>
    <div id = "example">
        <div id  = "outer" @click.stop="outerClick">
            <div id = "inner" @click.stop="innerClick"></div>
        </div>
    </div>
</template>
<style>
#outer{
    width : 200px; height: 200px; boreder : solid 2px black;
    background-color : aqua;
    position : absolute; top:100px; left: 50px;
    padding: 10px 10px 10px 10px;
}
#inner{
    width : 100px; height: 100px; border:solid 2px black;
    background-color: yellow;
}
</style>
<script>
    export default{
        name : "innerouter",
        methods:{
            outerClick(v){
                console.log("outer");
                console.log("even phase" , v.eventPhase);
                console.log("current" , v.currentTarget);
                console.log("outer",v.target);
                // v.stopPropagation();
                
            },
            innerClick(v){
                console.log("inner");
                console.log("even phase" , v.eventPhase);
                console.log("current" , v.currentTarget);
                console.log("outer",v.target);
                // v.stopPropagation();
            }
        }
    }
</script>