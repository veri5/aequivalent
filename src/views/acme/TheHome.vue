<template>
  <div id="home" v-if="isConnected">
    <TheDisconnectProfileMenu />

    <TheCredentials />

    <TheFooter />
  </div>
  <div v-else>
    <TheLanding/>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import TheDisconnectProfileMenu from '@/components/acme/TheDisconnectProfileMenu.vue';
import TheCredentials from '@/components/acme/TheCredentials.vue';
import TheFooter from '@/components/acme/TheFooter.vue';
import TheLanding from '@/views/acme/TheLanding.vue';

const bgColor = '#e1f3d8'

const store = useStore()
const namespace = 'acme'
const storeNamespace = store.state[namespace]
const isConnected = computed(() => storeNamespace.user.isConnected)
</script>

<style scoped>
#home {
  box-shadow: inset 0 0 0 1000px rgb(209 237 196 / 10%);
  background-image: url('~@/assets/acme_home_background.jpeg');
}
</style>