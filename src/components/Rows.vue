<template>
  <div class="row-component">
    <!-- User Avatar -->
    <div v-if="row.src">
      <v-avatar>
        <img :src="row.src" alt="John" />
      </v-avatar>
    </div>
    <!-- Link Icon -->
    <div v-else-if="row.icon">
        <v-icon>{{row.icon}}</v-icon>
    </div>
    <!-- Link title -->
    <h4 class="title">{{ row.title }}</h4>
  </div>
</template>

<script>
export default {
  name: "row",
  props: ["row"],
};
</script>

<style></style>
