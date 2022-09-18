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
import TheSignOutProfileMenu from '@/components/aequivalent/TheSignOutProfileMenu.vue';
import TheRequests from '@/components/aequivalent/TheRequests.vue';
import TheFooter from '@/components/aequivalent/TheFooter.vue';
import TheLanding from '@/views/aequivalent/TheLanding.vue';

const store = useStore()
const namespace = 'aeq'
const storeNamespace = store.state[namespace]
const isAuthenticated = computed(() => storeNamespace.user.isAuthenticated)
</script>

<style scoped>
#home {
  background-color:rgb(228 228 228 / 70%);
}
</style>