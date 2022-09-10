<template>
  <el-row>
    <el-col :xs="8" :sm="8">
      <router-view name="acmeApp"/>
    </el-col>
    <el-col :xs="8" :sm="8">
      <router-view name="aeqApp"/>
    </el-col>
    <el-col :xs="8" :sm="8">
      <router-view name="verifiveApp"/>
    </el-col>
  </el-row>
</template>

<style>
body {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: whitesmoke;
  margin: 0px;
}
.el-dialog__body {
  padding: 0px 20px;
}
.el-table__empty-text {
  width: 100%;
}
</style>