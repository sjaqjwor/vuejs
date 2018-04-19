<template>
  <div>
      금액 : <span>{{amount}}</span>
  </div>
</template>

<script>

    export default{
        name : "comGetSer",
        data(){
            return{
               amt : 1234567
            }
        },
        computed :{
            amount :{
                get(){
                    let s = new String(""+this.amt);
                    let result ="";
                    let num = 0;
                    for(let i= s.length-1;i>=0;i--){
                        result = s[i]+result;
                        if(num %3==2 && i!=0){
                            result = "."+result;
                        }
                        num++;
                    }
                    return result
                }, 
                set(amt){
                    if(typeof(amt)=="string"){
                        let result = parseInt(amt.replace(/,/g,""))
                        if(isNaN(result))this.amt = 0;
                        else this.amt = result;
                    }else if(typeof(amt=="number")){
                        this.amt=amt;
                    }
                }
            }
        }
    }
</script>
