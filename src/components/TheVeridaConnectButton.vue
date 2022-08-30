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
import { ref, defineProps, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import veridaAccount from '@/verida/veri-account'
import { hasSession } from '@verida/account-web-vault'

const loading = ref(false)

const props = defineProps({
  namespace: {
    type: String,
    required: true,
    default: "ttp"
  },
})
const store = useStore()
const storeNamespace = store.state[props.namespace]
const verida = computed(() => storeNamespace.verida)

async function connect(){
  loading.value = true
  
  await veridaAccount.initialize()

  const context = veridaAccount.context
  if(context) {
    const profile = veridaAccount.profile
    store.dispatch(`${props.namespace}/user/setProfile`, profile)

    store.dispatch(`${props.namespace}/user/connect`)
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
