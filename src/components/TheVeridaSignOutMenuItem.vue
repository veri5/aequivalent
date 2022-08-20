<template>
  <el-menu-item @click="signOut">Sign out</el-menu-item>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { useStore } from 'vuex'

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