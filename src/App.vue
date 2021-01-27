<template>
  <div id="app">
    <h1>My Projects</h1>
    <h2>Lian Sutder</h2>
    <p><a href="https://github.com/lianstuder">GitHub</a></p>
    <ul>
      <li><Project name="lit project" description="haha lmao"></Project></li>
      <li><Project name="litter project" description="haha lmao liiit"></Project></li>
    </ul>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Project from "./components/Project.vue";

@Component({
  components: {
    Project
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
