<template>
  <div class="main test">
      {{msg}}
      <child11></child11>
      {{msg}}
      </div>
</template>

<script>
import child11 from "./child11";
export default {
  name: "child1",
  components: { child11 },
  data() {
    return {
      msg: "child1"
    };
  }
};
</script>

//scoped range in here template
//같은게 있으면 부모꺼도 적용 허나 같은 속성일 경우 자식꺼가 적용
<style scoped>
.main {
  border: solid 1px black;
  background-color: yellow;
}
.test {
    padding: 10px ; text-decoration: underline; border: solid 1px black; font-style:normal;
}
</style>
