<template>
    <div id="example">
        <span v-once>{{message}}</span>
    </div>
</template>

<script>
export default {
    name : "v-onece",
    data(){
        return{
            message : "hello"
        }
    }
};
</script>

