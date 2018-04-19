<template>

    <div>
        이름 :<input type="text" v-model="name" /> 
        <table id ="list">
            <thead>
                <tr>
                    <th>번호</th>
                    <th>이름</th>
                    <th>전화번호</th>
                    <th>주소</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="contact in contacts">
                    <td>{{contact.no}}</td>
                    <td>{{contact.name}}</td>
                    <td>{{contact.tel}}</td>
                    <td>{{contact.address}}</td>
                </tr>
            </tbody>
        </table>
        <div vs-show="isProcessing==true"> 조회중</div>
    </div>
</template> 
<script type ="text/javascript">
export default{
        name: "fetchexampe",
        data (){
            return{
            name : "",
            isProcessing : false,
            contacts : []
            }
        },
        watch:{
            name(v){
                if(v.length >=2){
                    this.fetchContacts();
                }else{
                    this.contacts=[];
                }
            }
        },
        methods:{
            fetchContacts:$_.debounce(function(){
                this.contacts=[];
                this.isProcessing=true;
                let url = "http://sample.bmaster.kro.kr/contacts_long/search/"+this.name;
                let vm = this;
                fetch(url).then(function(response){
                    return response.json();
                }).then(function(json){
                    vm.contacts=json;
                    vm.isProcessing=false;
                }).catch(function(ex){
                    console.log(ex);
                    vm.contacts=[];
                    vm.isProcessing=false;
                })
            },300)
        }
        
    }
</script>

