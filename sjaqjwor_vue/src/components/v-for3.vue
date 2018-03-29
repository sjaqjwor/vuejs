<template>
    <div id = "example">
        
            <select id="regions">
                <option disabled="disabled" selected>선택하세요</option>
                <option v-for='(region , index) in regions' v-bind:value="region.key">{{index+1+" "+region.var}}</option> 
        </select>
    </div>
</template>
<script type="text/javascript">
    let regions = [
        {"key":"1","var":"이승기"},
        {"key":"2","var":"이기"},
    ]

    export default{
        name : "v-for3",
        data(){
            return {
                regions : regions
            }
        }
    }
</script>