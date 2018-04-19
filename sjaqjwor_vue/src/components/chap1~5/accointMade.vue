<template>
    <div>
        금액 : <input type="text" v-model="account"/>
        <button @click.once="clickE">신규계설</button>
        <button @click="add">추가</button>    
        {{balance}}
    </div>
</template>

<script>
    export default{
        name : "accointMade",
        data(){
            return{
                account:0,
                balance : 0
            }
        },
        methods:{
            clickE(v){
                this.balance+=1000;
            },
            add(v){
                this.balance+=this.account;
            }
        }
    }
</script>