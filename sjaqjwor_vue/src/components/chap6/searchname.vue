<template>
  <div>
      아름:<input type="text" v-model="name" @keyup.enter="searchname">
  </div>
</template>
<script>
export default {
  name: "searchname",
  data(){
      return{
          name:''
      }
  },
  methods:{
      searchname:function(){
          this.$emit('search',this.name);
      }
  }
}
</script>
