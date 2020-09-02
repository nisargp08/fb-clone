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

<style lang="scss" scoped>
.row-component{
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 10px;

    &:hover{
        background-color: lightgray;
        border-radius: 10px;
    }
    
    .title{
        margin-left: 20px;
        font-weight: 700;
        font-size: 16px;
    }
    .v-icon{
        font-size : xx-large;
        color: #2e81f4;
    }
}
</style>
