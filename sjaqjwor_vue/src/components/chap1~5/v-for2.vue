<template>
<div id ="example">
    <select id="regions">
        <option disabled="disabled" selected>선택하세요</option>
        <option v-for='(val,key) in regions' v-bind:value="key">{{val}}</option> 
    </select>
</div>
</template>

<script type = "text/javascript">
    let regions = {
        "A":"ASIA",
        "B":"AMERICA",
        "C":"EUROPE",
        "D":"AFRICA"
    };

     export default{
     name : "v-for2",
     data(){
        return {
            regions : regions
        }
     }
 }
    
</script>