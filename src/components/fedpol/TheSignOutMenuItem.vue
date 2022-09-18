<template>
  <el-menu-item @click="signOut">
    <el-icon><Back /></el-icon>Sign out
  </el-menu-item>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import { Back } from '@element-plus/icons-vue'

const store = useStore()
const namespace = 'fedpol'

function signOut(){
  store.dispatch(`${namespace}/user/signOut`)
}
</script>