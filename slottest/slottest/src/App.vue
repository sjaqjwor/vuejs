<template>
  <div id="app">
    <speechbox :headerText="A.header" :footerText="A.footer"><div>{{A.message}}</div></speechbox> <br />
    <speechbox :headerText="B.header" :footerText="B.footer"></speechbox> <br />
  </div>
</template>

<script>
import speechbox from "./components/SpeechBox";
export default {
  name: 'app',
  components :{speechbox},
  data () {
    return {
      A:{
        header :"오바마",
        footer :"시카고",
        message : "hello"
      },
      B:{
        header :"부시",
        footer :"뉴욕",
        message : "hi"
      },
    }
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

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
