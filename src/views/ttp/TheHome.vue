<template>
  <div id="home" v-if="isVeriAuth">
    <TheVeridaSignOutProfileMenu
      :namespace="namespace"
      :background-color="'#e1f3d8'"
    />

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
import TheVeridaSignOutProfileMenu from '@/components/TheVeridaSignOutProfileMenu.vue';
import TheLanding from '@/views/ttp/TheLanding.vue';
import TheElements from '@/views/ttp/TheElements.vue';
import TheFooter from '@/components/ttp/TheFooter.vue';

const store = useStore()
const namespace = 'ttp'
const storeNamespace = store.state[namespace]
const isVeriAuth = computed(() => storeNamespace.user.isAuthenticated)
</script>

<style scoped>
#home {
  box-shadow: inset 0 0 0 1000px rgb(240 249 235 / 20%);
  background-image: url('~@/assets/background.png');
}
</style>