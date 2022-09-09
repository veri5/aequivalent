<template>
  <div id="home" v-if="isConnected">
    <TheVeridaDisconnectProfileMenu
      :namespace="namespace"
      :background-color="bgColor"
    />

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
import TheVeridaDisconnectProfileMenu from '@/components/TheVeridaDisconnectProfileMenu.vue';
import TheLanding from '@/views/verifive/TheLanding.vue';
import TheCredentials from '@/views/verifive/TheCredentials.vue';
import TheFooter from '@/components/verifive/TheFooter.vue';

const bgColor = '#d9ecff'

const store = useStore()
const namespace = 'veri'
const storeNamespace = store.state[namespace]
const isConnected = computed(() => storeNamespace.user.isConnected)
</script>

<style scoped>
#home {
  box-shadow: inset 0 0 0 1000px rgb(236 245 255 / 20%);
  background-image: url('~@/assets/background.png');
}
</style>