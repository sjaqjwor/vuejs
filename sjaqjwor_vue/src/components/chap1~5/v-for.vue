<template>
  <div id = "example">
      <table id = "list">
          <thead>
              <tr>
                  <th>
                      번호
                  </th>
                   <th>
                      이름
                  </th>
                   <th>
                      전화번호
                  </th>
                   <th>
                      주소
                  </th>
              </tr>
          </thead>
          <tbody id = "contacts">
              <tr v-for = "contact in contacts">
                <td>{{contact.no}}</td>
                <td>{{contact.no}}</td>
                <td>{{contact.no}}</td>
                <td>{{contact.no}}</td>
              </tr>
          </tbody>
      </table>
  </div>
</template>
<script type = "text/javascript">
 let model = {
     "pageno" : 1,
     "pagesize" : 10,
     "totalcpint" : 100,
     "contacts" : [
         {"no" : 100 , "name" : "설현" , "tel" : "01034588299", "address" : "서울" },
         {"no" : 100 , "name" : "가현" , "tel" : "01045588299", "address" : "서울222" }
     ] 
 }   

 export default{
     name : "v-for",
     data(){
         return model;
     }
 }
</script>>
<style>
#list{width:400px;border:1px solid black; border-collapse: collapse;}
#list td, #list th {border: 1px solid black; text-align: center;}
#list > thead > tr {color: yellow;background-color: purple;}
</style>
