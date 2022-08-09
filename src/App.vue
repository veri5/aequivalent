<template>
  <el-container>
    <el-header style="padding:0;">
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
    <el-container>
      <el-aside>
        <el-card>
          <el-steps direction="vertical" :active="1" :space="100"  finish-status="success">
            <el-step title="Verifive" description="Register a new legal entity" />
            <el-step title="Candidate" description="Request a new verification" />
            <el-step title="Step 3" description="Some description" />
            <el-step title="Step 4" description="Some description" />
            <el-step title="Step 5" description="Some description" />
            <el-step title="Step 6" description="Some description" />
            <el-step title="Step 7" description="Some description" />
          </el-steps>
        </el-card>
      </el-aside>
      <el-main
        style="width:60%;"
      >
        <router-view/>
      </el-main>
    </el-container>
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
