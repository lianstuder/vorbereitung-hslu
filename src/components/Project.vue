<template>
  <div class="project">
    <div>
      <h2>{{ name }}</h2>
      <p>{{ description }}</p>
    </div>
    <a :href="githubUrl"><span class="mdi mdi-github"></span></a>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Project extends Vue {
  @Prop() private name!: string;
  @Prop() private description!: string;
  @Prop() private githubUrl!: string;
}
</script>

<style scoped lang="scss"></style>
