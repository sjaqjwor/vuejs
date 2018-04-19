<template>
  <div>
      <child v-for="s in buttons" :buttonInfo="s" @timeclick="timeclickEvent">
      </child>
      <hr />
      <div>{{msg}}</div>
  </div>
</template>

<script>
import child from './child';

export default {
    name:"parent",
    components:{
        child
    },
    props:['buttons'],
    data(){
        return{
            msg:""
        }
    },
    methods:{
        timeclickEvent:function(k,e){
            this.msg=k+","+e;
        }
    }
}
</script>