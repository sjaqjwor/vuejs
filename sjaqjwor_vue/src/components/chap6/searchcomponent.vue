<template>
<div>
  <searchname v-on:search="searchEvent"></searchname>
  <searchlist :list="list"></searchlist>
  </div>

</template>
<script>
import searchname from "./searchname";
import searchlist from "./searchlist";
import _ from 'lodash'
export default {
  name: "searchcomponent",
  components: { searchname , searchlist},
  data() {
    return {
      list: [],
      isProcessing: false
    };
  },
  methods: {
      searchEvent:function(v){
          if(v==''){
              this.list=[];
          }else{
              this.fetchCo(v);
          }
      },
      fetchCo:_.debounce(function(v){
          this.list=[];
          this.isProcessing=true;
          let uri = "http://sample.bmaster.kro.kr/contacts_long/search/"+v;
          let vm = this;
          fetch(uri).then(function(response){
              return response.json()
          }).then(function(json){
              console.log(json)
              vm.list=json;
              vm.isProcessing=false;
          }).catch(function(e){
              vm.list=[];
              vm.isProcessing=false;
          })
      },300)
  }
};
</script>
