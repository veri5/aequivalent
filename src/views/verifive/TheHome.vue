<template>
  <div id="home" v-if="isAuthenticated">
    <TheSignOutProfileMenu />

    <TheElements />

    <TheFooter />
  </div>
  <div v-else>
    <TheLanding/>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import TheSignOutProfileMenu from '@/components/verifive/TheSignOutProfileMenu.vue';
import TheElements from '@/components/verifive/TheElements.vue';
import TheFooter from '@/components/verifive/TheFooter.vue';
import TheLanding from '@/views/verifive/TheLanding.vue';

const bgColor = '#d9ecff'

const store = useStore()
const namespace = 'verifive'
const storeNamespace = store.state[namespace]
const isAuthenticated = computed(() => storeNamespace.user.isAuthenticated)
</script>

<style scoped>
#home {
  box-shadow: inset 0 0 0 1000px  rgb(198 226 255 / 10%);
  background-image: url('~@/assets/verifive_home_background.png');
}
</style>