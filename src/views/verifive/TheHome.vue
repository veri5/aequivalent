<template>
  <div id="home" v-if="isAuthenticated">
    <TheSignOutProfileMenu
      :background-color="bgColor"
      :tag-line="tagLine"
    />

    <TheIssuers />

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
import TheIssuers from '@/components/verifive/TheIssuers.vue';
import TheFooter from '@/components/verifive/TheFooter.vue';
import TheLanding from '@/views/verifive/TheLanding.vue';

const bgColor = '#d9ecff'
const tagLine = 'The Trust Protocol'

const store = useStore()
const namespace = 'verifive'
const storeNamespace = store.state[namespace]
const isAuthenticated = computed(() => storeNamespace.user.isAuthenticated)
</script>

<style scoped>
#home {
  box-shadow: inset 0 0 0 1000px rgb(236 245 255 / 20%);
  background-image: url('~@/assets/verifive_home_background.png');
}
</style>