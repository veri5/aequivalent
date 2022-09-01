<template>
  <div v-if="isAeqAuth">
   <TheVeridaSignOutProfileMenu :namespace="namespace"/>

    <TheRequests />
  </div>
  <div v-else>
    <TheLandingPage/>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import TheVeridaSignOutProfileMenu from '@/components/TheVeridaSignOutProfileMenu.vue';
import TheRequests from '@/views/aequivalent/TheRequests.vue'
import TheLandingPage from '@/views/aequivalent/TheLandingPage.vue';

const store = useStore()
const namespace = 'aeq'
const storeNamespace = store.state[namespace]
const isAeqAuth = computed(() => storeNamespace.user.isAuthenticated)
</script>