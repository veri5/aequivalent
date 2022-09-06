<template>
  <div id="home" v-if="isVeriAuth">
    <TheVeridaSignOutProfileMenu :namespace="namespace"/>

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
import TheVeridaSignOutProfileMenu from '@/components/TheVeridaSignOutProfileMenu.vue';
import TheLanding from '@/views/aequivalent/TheLanding.vue';
import TheRequests from '@/views/aequivalent/TheRequests.vue';
import TheFooter from '@/components/aequivalent/TheFooter.vue';

const store = useStore()
const namespace = 'aeq'
const storeNamespace = store.state[namespace]
const isVeriAuth = computed(() => storeNamespace.user.isAuthenticated)
</script>

<style scoped>
#home {
  box-shadow: inset 0 0 0 1000px rgb(234 241 251 / 20%);
  background-image: url('~@/assets/background.png');
}
</style>