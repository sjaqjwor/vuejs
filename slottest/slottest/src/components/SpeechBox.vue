<template>
  <div>
  {{headerText}}<br />
  <slot></slot>
  {{footerText}}
</div>
</template>

<script>
export default {
    name:"SpeechBox",
    props :["headerText","footerText"] 
}
</script>

<style>

</style>
