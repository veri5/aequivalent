<template>
  <el-button 
    v-loading="loading" 
    element-loading-background='rgba(0, 0, 0, 0.5)'
    size="large"
    color="#42248a"
    @click="signIn"
  >
    <img class="vda-button"
      src="~@/assets/verida_logo.png"
      alt="Sign in with Verida"
    /> Sign in with Verida
  </el-button>
</template>

<script setup lang="ts">
import { ref, defineProps, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import veridaAccount from '@/verida/verifive-account'

const loading = ref(false)

const store = useStore()
const namespace = 'verifive'
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
.vda-button {
  max-width: 25px;
  padding:0 7px;
}
</style>
