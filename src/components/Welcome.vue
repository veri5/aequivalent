<template>
<el-row>
  <el-col>
    <el-card style="text-align:center;">
      <img alt="company logo" :src="require(`../assets/${company.logo}`)"/>
      <h2>Welcome to '{{ company.name }}'</h2>
      <el-button
        size="large"
        color="#42248a"
        @click="connect"
      >
        <img class="verida-button"
          src="~@/assets/verida_logo.png"
          alt="Connect to Verida"
        /> Connect to Verida
      </el-button>
    </el-card>
  </el-col>
</el-row>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import { useStore } from 'vuex'

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

const connect = () => store.dispatch(`${props.namespace}/user/connect`)
</script>

<style scoped>
.verida-button {
  max-width: 25px;
  padding:0 7px;
}
</style>
