<template>
<el-row>
  <el-col>
    <el-card style="text-align:center;">
      <img alt="company logo" :src="require(`../assets/${company.logo}`)"/>
      <h2>Welcome to '{{ company.name }}'</h2>
      <the-verida-sign-in-button :namespace="namespace" />
    </el-card>
  </el-col>
</el-row>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import { useStore } from 'vuex'
import TheVeridaSignInButton from './TheVeridaSignInButton.vue';

const props = defineProps({
  namespace: {
    type: String,
    required: true,
    default: "ttp"
  },
})

const store = useStore()
const storeNamespace = store.state[props.namespace]

const company = computed(() => storeNamespace.company.profile)
</script>
