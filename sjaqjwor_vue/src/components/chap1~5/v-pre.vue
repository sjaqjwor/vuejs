<template>
    <div id= "example">
        <span v-pre>{{message}}</span>
    </div>
</template>

<script type  = "text/javascript">
    let model = {message : "hi"};

    export default{
        name : "v-pre",
        data (){
            return model
        }
    };
</script>