<template>
  <el-menu-item @click="disconnect">
    <el-icon><Back /></el-icon>Disconnect
  </el-menu-item>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import { useStore } from 'vuex'
import { Network } from '@verida/client-ts'
import { VaultAccount } from '@verida/account-web-vault'
import { Back } from '@element-plus/icons-vue'

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

async function disconnect(){
  const account = new VaultAccount({
    request: {
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

    store.dispatch(`${props.namespace}/user/disconnect`)
  }
}
</script>