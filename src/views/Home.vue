<template>
  <div id="home">
    <el-card>
      <img alt="Aeq logo" src="../assets/aequivalent.webp">
      <h1>Welcome to Aequivalent Demo</h1>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home'
});
</script>

<style scoped>
#home {
  text-align: center;
}
</style>