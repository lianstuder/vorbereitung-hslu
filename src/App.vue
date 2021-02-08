<template>
  <div id="app">
    <h1 id="page-title">Lian Studer</h1>
    <h2>My Projects</h2>
    <ProjectList></ProjectList>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ProjectList from "./components/ProjectList.vue";

@Component({
  components: {
    ProjectList,
  },
})
export default class App extends Vue {}
</script>
