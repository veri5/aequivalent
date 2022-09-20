<template>
  <div id="home" v-if="isAuthenticated">
    <TheSignOutProfileMenu />

    <TheRequests />

    <TheFooter />
  </div>
  <div v-else>
    <TheLanding/>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import TheSignOutProfileMenu from '@/components/fedpol/TheSignOutProfileMenu.vue';
import TheRequests from '@/components/fedpol/TheRequests.vue';
import TheFooter from '@/components/fedpol/TheFooter.vue';
import TheLanding from '@/views/fedpol/TheLanding.vue';

const store = useStore()
const namespace = 'fedpol'
const storeNamespace = store.state[namespace]
const isAuthenticated = computed(() => storeNamespace.user.isAuthenticated)
</script>

<style scoped>
#home {
  background-color: whitesmoke;
}
</style>