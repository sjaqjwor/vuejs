<template>
  <div>
      <ul>
          <li v-for="t in timelist">{{t}}</li>
      </ul>
  </div>
</template>

<script>
import {eventBus} from '../../main.js'
export default {
    name:"eventbuschild2",
    data(){
        return{
            timelist:[]
        }
    },
    mounted:
        function(params) {
            eventBus.$on('click1',this.child1Click);    
        }
    ,
    methods:{
        child1Click:function(time){
            this.timelist.push(time);
        }
    }
}
</script>

