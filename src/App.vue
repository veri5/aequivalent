<template>
  <!-- <el-row>
    <el-col>
      <TheStepper />
    </el-col>
  </el-row> -->
  <el-row>
    <el-col :xs="8" :sm="8">
      <router-view name="veriApp"/>
    </el-col>
    <el-col :xs="8" :sm="8">
      <router-view name="aeqApp"/>
    </el-col>
    <el-col :xs="8" :sm="8">
      <router-view name="ttpApp"/>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import TheStepper from '@/components/TheStepper.vue';
</script>

<style>
body {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.el-dialog__body {
  padding: 0px 20px;
}
.el-table__empty-text {
  width: 100%;
}
</style>