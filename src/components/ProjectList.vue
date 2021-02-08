<template>
  <div class="projectlist">
    <ul>
      <li v-for="project in projects" :key="project.pjId">
        <Project
          :name="project.pjName"
          :description="project.pjDesc"
          :githubUrl="project.pjGithub"
        ></Project>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Project from "./Project.vue";
import axios from "axios";

@Component({
  components: {
    Project,
  },
})
export default class ProjectList extends Vue {
  projects = {};

  async getProjects(url: string) {
    return await axios.get(url);
  }

  created() {
    this.getProjects("http://localhost:5000/").then((projects) => {
      this.projects = projects.data;
    });
  }
}
</script>

<style scoped lang="scss"></style>
