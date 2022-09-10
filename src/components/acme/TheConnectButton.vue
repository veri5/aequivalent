<template>
  <el-button 
    v-loading="loading" 
    element-loading-background='rgba(0, 0, 0, 0.5)'
    size="large"
    color="#42248a"
    @click="connect"
  >
    <img class="vda-button"
      src="~@/assets/verida_logo.png"
      alt="Connect to Verida"
    /> Connect to Verida
  </el-button>
</template> 

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import veridaAccount from '@/verida/acme-account'
import { hasSession } from '@verida/account-web-vault'

const loading = ref(false)

const store = useStore()
const namespace = 'acme'
const storeNamespace = store.state[namespace]
const verida = computed(() => storeNamespace.verida)

async function connect(){
  loading.value = true
  
  await veridaAccount.initialize()

  const context = veridaAccount.context
  if(context) {
    const profile = veridaAccount.profile
    store.dispatch(`${namespace}/user/setProfile`, profile)

    store.dispatch(`${namespace}/user/connect`)
  }
  loading.value = false
}

onMounted(() => {
  if (hasSession(verida.value.contextName)) {
    // we know we have a session already
    connect(); // when logged in this will just setup a Verida Context
  }
})
</script>

<style scoped>
.vda-button {
  max-width: 25px;
  padding:0 7px;
}
</style>
