<template>
  <div>
      <table>
          <tbody>
              <tr>
                  <th>번호</th>
                  <th>이름</th>
                  <th>전화번호</th>
                  <th>주소</th>
              </tr>
              <tr v-for="s in list">
                  <th>{{s.no}}</th>
                  <th>{{s.name}}</th>
                  <th>{{s.tel}}</th>
                  <th>{{s.address}}</th>
              </tr>
          </tbody>
      </table>
  </div>
</template>

<script>
export default {
    name:"searchlist",
    props:['list']
}
</script>

