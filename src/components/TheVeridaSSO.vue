<template>
  <el-row>
    <el-col>
      <div id="verida">
        <h1>Verida SSO</h1>
      </div>
    </el-col>
  </el-row>
  <el-row>
    <el-col>
      <div v-if="isLogged">
        <h3>Logged in! Your DID is: {{ did }}</h3>
        <div v-if="publicProfile">
          <div>Name: {{ publicProfile.name }}</div>
          <div>Description: {{ publicProfile.description }}</div>
          <div>Country: {{ publicProfile.country }}</div>
          <div v-if="publicProfile.avatar">
            <img width="150" :src="`${publicProfile.avatar.uri}`" />
          </div>
        </div>
        <button @click=logout>Logout</button>
      </div>
      <div v-else>
        <button @click=login>Login</button>
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { Network, EnvironmentType } from '@verida/client-ts'
import { VaultAccount, hasSession } from '@verida/account-web-vault'

const isLogged = ref(false)
const context = ref()
const did = ref()
const publicProfile = ref()

const LOGO_URL = 'https://assets.verida.io/verida_login_request_logo_170x170.png'
const VERIDA_ENVIRONMENT = EnvironmentType.TESTNET
const CONTEXT_NAME = 'Verida: Vault'

async function login() {
  // Create a VaultAccount. This takes a VaultAccountConfig parameter. 
  // See links below to docs on these
  const account = new VaultAccount({
    request: {
      logoUrl: LOGO_URL,
    },
  });

  context.value = await Network.connect({
    client: {
      environment: VERIDA_ENVIRONMENT,
    },
    account: account,
    context: {
      name: CONTEXT_NAME,
    },
  })

  if (context.value.contextName == CONTEXT_NAME) {
    connectProfile()

    isLogged.value = true
  }
}

async function logout(){
  // disconnect the Verida session
  await context.value.account.disconnect(CONTEXT_NAME)
  // reset the internal state
  context.value = null
  isLogged.value = false
}

async function connectProfile() {
  did.value = context.value.account.accountDid

  const client = await context.value.getClient()
  const profileConnection = await client.openPublicProfile(did.value, CONTEXT_NAME, 'basicProfile');
  publicProfile.value = await profileConnection.getMany()
}

onMounted(() => {
  if (hasSession(CONTEXT_NAME)) {
    // we know we have a session already
    login(); // when logged in this will just setup a Verida Context
  }
})
</script>

<style scoped>
#verida {
  text-align: left;
}
</style>