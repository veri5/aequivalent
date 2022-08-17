<template>
  <el-row>
    <el-col>
      <the-stepper />
    </el-col>
  </el-row>

  <el-row :gutter="20">
    <el-col :xs="8" :sm="8">
      <div v-if="isVeriAuth">
        <the-profile-menu :namespace="'veri'"/>

        <verifications />
      </div>
      <div v-else>
        <the-welcome :namespace="'veri'" />
      </div>
    </el-col>
    <el-col :xs="8" :sm="8">
      <div v-if="isAeqAuth">
        <the-profile-menu :namespace="'aeq'"/>

        <requests />
      </div>
      <div v-else>
        <the-welcome :namespace="'aeq'" />
      </div>
    </el-col>
    <el-col :xs="8" :sm="8">
      <div v-if="isTtpAuth">
        <the-profile-menu :namespace="'ttp'"/>

        <entities />
      </div>
      <div v-else>
        <the-welcome :namespace="'ttp'" />
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import TheStepper from '@/components/TheStepper.vue';
import TheWelcome from '@/components/TheWelcome.vue'
import Verifications from '@/views/verifive/Verifications.vue'
import Requests from '@/views/aequivalent/Requests.vue'
import Entities from '@/views/ttp/Entities.vue'
import TheProfileMenu from '@/components/TheProfileMenu.vue';

const store = useStore()

const isVeriAuth = computed(() => store.state.veri.user.isConnected)
const isAeqAuth = computed(() => store.state.aeq.user.isConnected)
const isTtpAuth = computed(() => store.state.ttp.user.isConnected)
</script>

<style scoped>
.el-row {
  margin-bottom: 10px;
}
</style>