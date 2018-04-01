<template>
    <div id = "example">
        <p>
            국가명 : <input type="text" v-model="contryname" placeholder="국가명">
        </p>
        <table id="list">
            <thead>
                <tr>
                    <td>번호</td>
                    <td>국가명</td>
                    <td>수도</td>
                    <td>지역</td>
                </tr>
            </thead>
            <tbody id ="contacts">
                <tr v-for="contcat in filtered">
                    <td>{{contcat.no}}</td>
                    <td>{{contcat.name}}</td>
                    <td>{{contcat.sudo}}</td>
                    <td>{{contcat.ji}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
 let contryname = "";
 let contacts =[
         {"no":"1","name":"korea","sudo":"seuol","ji":"asia"},
         {"no":"2","name":"dami","sudo":"dami","ji":"dami"},
         {"no":"3","name":"seung","sudo":"seung","ji":"seung"},
     ]
 export default{
     name : "world",
     computed : {
         filtered(){
            // let name = this.contryname.trim();
            return this.contacts.filter(value =>{
                if(value.name.indexOf(this.contryname.trim())>-1){
                    return true;
                }
            });
         }
     },
     data(){
         return {
             contryname : contryname,
             contacts : contacts
         }
     }
 }
</script>