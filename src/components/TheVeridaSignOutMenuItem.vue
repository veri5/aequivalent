<template>
  <el-menu-item @click="signOut">
    <el-icon><Back /></el-icon>Sign out
  </el-menu-item>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { useStore } from 'vuex'
import { Back } from '@element-plus/icons-vue'

const props = defineProps({
  namespace: {
    type: String,
    required: true,
    default: "ttp"
  },
})

const store = useStore()

function signOut(){
  store.dispatch(`${props.namespace}/user/signOut`)
}
</script>