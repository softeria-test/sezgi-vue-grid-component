<template>
  <div id="app">
    <VGrid :title="'Example'" :table="table"/>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Nunito", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  min-height: 100vh;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

span {
  font-weight: 500;
}
</style>
<script setup lang="ts">
import VGrid from "@/components/VGrid.vue";
import { ref } from "vue";
import { ITable } from "@/types"; // @ is an alias to /src

const table = ref<ITable | null>(null);

fetch("stach-row-organized-package.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      table.value = data.tables.main;
    });
</script>
