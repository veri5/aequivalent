<template>
  <el-container>
    <el-header>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        :ellipsis="false"
        @select="handleSelect"
        router= true
        style="justify-content: center;"
      >
        <el-menu-item index="0" route="/">Home</el-menu-item>
        <el-menu-item index="1" route="/candidate">Candidate</el-menu-item>
        <el-menu-item index="2" route="/aequivalent">Aequivalent</el-menu-item>
        <el-menu-item index="3" route="/verifive">Verifive</el-menu-item>
      </el-menu>
    </el-header>
    <el-main
      style="width:60%; margin:auto;"
    >
      <router-view/>
    </el-main>
  </el-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('0')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-image: url('~@/assets/background.png');
  height: 100vh;
}
</style>
