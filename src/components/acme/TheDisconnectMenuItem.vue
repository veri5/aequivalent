<template>
  <el-menu-item @click="detouredDisconnect">
    <el-icon><Back /></el-icon>Disconnect
  </el-menu-item>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import { Network } from '@verida/client-ts'
import { VaultAccount } from '@verida/account-web-vault'
import { Back } from '@element-plus/icons-vue'

const store = useStore()
const namespace = 'acme'
const storeNamespace = store.state[namespace]

const verida = computed(() => storeNamespace.verida)

// wallet detoured
function detouredDisconnect(){
  store.dispatch(`${namespace}/user/disconnect`)
}
///

async function disconnect(){
  const account = new VaultAccount({
    credential: {
      logoUrl: verida.value.logoUrl,
    },
  });

  const context = await Network.connect({
    client: {
      environment: verida.value.environmentType,
    },
    account: account,
    context: {
      name: verida.value.contextName,
    },
  })

  if(context) {
    // disconnect the Verida session
    await context.account.disconnect(verida.value.contextName)

    store.dispatch(`${namespace}/user/disconnect`)
  }
}
</script>