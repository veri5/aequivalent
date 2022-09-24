<template>
  <el-button 
    v-loading="loading" 
    element-loading-background='rgba(0, 0, 0, 0.5)'
    size="default"
    color="#c8d2d2"
    class="fedpol-button"
    @click="signIn"
  >
    Sign in as Issuer
  </el-button>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import veridaAccount from '@/verida/fedpol-account'

const loading = ref(false)

const store = useStore()
const namespace = 'fedpol'
const isAuthenticated = computed(() => store.getters[`${namespace}/user/isAuthenticated`])

async function signIn(){
  loading.value = true
  
  await veridaAccount.initialize()

  const context = veridaAccount.context
  if(context) {
    const profile = veridaAccount.profile
    store.dispatch(`${namespace}/user/setProfile`, profile)

    store.dispatch(`${namespace}/user/signIn`)
  }
  loading.value = false
}

onMounted(() => {
  if (isAuthenticated.value) {
    // we know we have a session already
    signIn(); // when logged in this will just setup a Verida Context
  }
})
</script>

<style scoped>
.fedpol-button {
  font-weight:600; 
  padding: 10px 50px;
  color: #2c3e50
}
</style>
