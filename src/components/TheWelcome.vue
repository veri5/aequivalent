<template>
<el-row>
  <el-col>
    <el-card style="text-align:center;">
      <img alt="company logo" :src="require(`../assets/${company.logo}`)"/>
      <h2>Welcome to '{{ company.name }}'</h2>
      <the-connect-button :namespace="namespace"/>
    </el-card>
  </el-col>
</el-row>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import { useStore } from 'vuex'
import TheConnectButton from '@/components/TheConnectButton.vue'

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
