<template>
<div>
  <eventbuschild ></eventbuschild>
  <eventbuschild2 ></eventbuschild2>
</div>
  
</template>

<script>
import eventbuschild from './components/chap6/eventbuschild'
import eventbuschild2 from './components/chap6/eventbuschild2'
import {eventBus} from './main.js'
export default {
  name: 'App',
  components: {
    eventbuschild,eventbuschild2
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>