<template>
  <div>
      <p><input type = "text" v-model="amount" class="form-control"></p>
      <p><button id = "desposit" v-on:click="desposit" class="btn btn-primary">예금</button></p>
      <p><button id = "withdraw" v-on:click="withdraw" class="btn btn-primary">출금</button></p>
    <h3>{{balance}}</h3>
  </div>
</template>

<script>
export default{
    name:"v-on",
    data(){
        return{
            amount:0,
            balance : 0
        }
    },
    methods:{
        desposit(v){
           
                let count = Number(this.amount);
                if(count<0){
                    alert("0보다 작다");
                }else{
                    this.balance+=count;
                }
            },
        withdraw(v){
         
                let count = Number(this.amount);
                if(count<0){
                    alert("0보다 작다");
                }else{
                    this.balance-=count;
                }
            
        }
        }
}

    

</script>