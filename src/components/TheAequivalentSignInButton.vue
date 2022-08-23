<template>
  <el-button 
    v-loading="loading" 
    element-loading-background='rgba(0, 0, 0, 0.5)'
    size="default"
    color="#9e1510"
    round
    class="aeq-button"
    @click="signIn"
  >
    Sign in as an Issuer
  </el-button>
</template>

<script setup lang="ts">
import { ref, defineProps, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { Network } from '@verida/client-ts'
import { AutoAccount } from '@verida/account-node'

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
const user = computed(() => storeNamespace.user.profile)
const isAuthenticated = computed(() => store.getters[`${props.namespace}/user/isAuthenticated`])

async function connectProfile(context){
  const client = await context.getClient()
  const did = await context.account.did()
  const profileConnection = await client.openPublicProfile(did, verida.value.contextName, 'basicProfile');
  const { name, avatar, description, country } = await profileConnection.getMany()
  
  return {
    did,
    name,
    // avatar,
    description,
    country
  }
}

async function signIn(){
  loading.value = true

  const account = new AutoAccount(
    {
      defaultDatabaseServer: {
          type: 'VeridaDatabase',
          endpointUri: verida.value.veridaTestnetDefaultServer
      },
      defaultMessageServer: {
          type: 'VeridaMessage',
          endpointUri: verida.value.veridaTestnetDefaultServer
      }
    }, 
    {
      privateKey: user.value.mnemonic, // or Verida mnemonic seed phrase
      didServerUrl: verida.value.veridaTestnetDidServer
    })

  const context = await Network.connect({
    client: {
      environment: verida.value.environmentType,
    },
    account: account,
    context: {
      name: verida.value.contextName,
    }
  })

  if(context) {
    const profile = await connectProfile(context)
    store.dispatch(`${props.namespace}/user/setProfile`, profile)

    store.dispatch(`${props.namespace}/user/signIn`)
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
.aeq-button {
  font-weight:600; 
  padding:0 60px;
}
</style>
