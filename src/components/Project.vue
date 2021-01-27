<template>
  <div class="project">
    <h2>{{ name }}</h2>
    <p>{{ description }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Project extends Vue {
  @Prop() private name!: string;
  @Prop() private description!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
