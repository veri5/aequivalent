<template>
  <div v-if="isVeriAuth">
    <TheVeridaDisconnectProfileMenu :namespace="namespace"/>

    <TheCredentials />
  </div>
  <div v-else>
    <TheLandingPage/>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import TheVeridaDisconnectProfileMenu from '@/components/TheVeridaDisconnectProfileMenu.vue';
import TheLandingPage from '@/views/verifive/TheLandingPage.vue';
import TheCredentials from '@/views/verifive/TheCredentials.vue'

const store = useStore()
const namespace = 'veri'
const storeNamespace = store.state[namespace]
const isVeriAuth = computed(() => storeNamespace.user.isConnected)
</script>