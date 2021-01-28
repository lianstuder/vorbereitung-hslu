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

interface ProjectInterface {
  _id: string;
  pjName: string;
  pjDesc: string;
  pjGithub: string;
}

async function getProjects<P>(url: RequestInfo): Promise<P> {
  const response = await fetch(url);
  const body = await response.json();
  return body;
}

@Component({
  components: {
    Project
  }
})
export default class ProjectList extends Vue {
  private projects = getProjects<ProjectInterface[]>(
    "http://localhost:5000/"
  );
}
</script>

<style scoped lang="scss"></style>
