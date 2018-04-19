<template>
<div>
  <button @click="event">child</button>
  <div>{{currentTime}}</div>
  </div>
</template>

<script>
import {eventBus} from '../../main.js'
export default {
    name:"eventbuschild",
    
    data(){
        return{
            currentTime:''
        }
    },
    methods:{
        event:function(){
            let d = new Date();
            let t = d.toLocaleTimeString()+" "+d.getMilliseconds()+"ms";
            eventBus.$emit('click1',t);
            this.currentTime=t;
        }
    }
};
</script>

<style>

</style>
