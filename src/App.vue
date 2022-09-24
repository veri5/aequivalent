<template>
  <el-row>
    <el-col :xs="8" :sm="8">
      <router-view name="acmeApp"/>
    </el-col>
    <el-col :xs="8" :sm="8">
      <el-row>
        <el-col>
          <router-view name="aeqApp"/>
        </el-col>
        <el-col>
          <router-view name="fedpolApp"/>
        </el-col>
      </el-row>
    </el-col>
    <el-col :xs="8" :sm="8">
      <router-view name="verifiveApp"/>
    </el-col>
  </el-row>
</template>

<style scoped>
.el-col {
  box-shadow: rgb(38, 57, 77) 0px 0px 30px -10px;
}
</style>

<style>
body {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: white;
  margin: 0px;
}
.el-dialog__body {
  padding: 0px 20px;
}
.el-table__empty-text {
  width: 100%;
}
.el-popper.is-dark {
  font-size: 11px;
  padding: 1px 5px;
}
.cell {
  display: flex;
  align-items: center;
}
.el-switch__label {
  color: #a8abb2
}
.el-switch__label.is-active {
  color: #606266;
}
</style>