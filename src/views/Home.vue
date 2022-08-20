<template>
  <el-row>
    <el-col>
      <the-stepper />
    </el-col>
  </el-row>

  <el-row :gutter="20">
    <el-col :xs="8" :sm="8">
      <div v-if="isVeriAuth">
        <the-verida-disconnect-profile-menu :namespace="'veri'"/>

        <verifications />
      </div>
      <div v-else>
        <the-verida-connect :namespace="'veri'" />
      </div>
    </el-col>

    <el-col :xs="8" :sm="8">
      <div v-if="isAeqAuth">
        <the-verida-disconnect-profile-menu :namespace="'aeq'"/>

        <requests />
      </div>
      <div v-else>
        <the-verida-connect :namespace="'aeq'" />
      </div>
    </el-col>
    
    <el-col :xs="8" :sm="8">
      <div v-if="isTtpAuth">
        <the-verida-sign-out-profile-menu :namespace="'ttp'"/>

        <entities />
      </div>
      <div v-else>
        <the-verida-sign-in :namespace="'ttp'" />
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import TheStepper from '@/components/TheStepper.vue';
import TheVeridaConnect from '@/components/TheVeridaConnect.vue'
import TheVeridaDisconnectProfileMenu from '@/components/TheVeridaDisconnectProfileMenu.vue';
import TheVeridaSignIn from '@/components/TheVeridaSignIn.vue';
import TheVeridaSignOutProfileMenu from '@/components/TheVeridaSignOutProfileMenu.vue';
import Verifications from '@/views/verifive/Verifications.vue'
import Requests from '@/views/aequivalent/Requests.vue'
import Entities from '@/views/ttp/Entities.vue'

const store = useStore()

const isVeriAuth = computed(() => store.state.veri.user.isConnected)
const isAeqAuth = computed(() => store.state.aeq.user.isConnected)
const isTtpAuth = computed(() => store.state.ttp.user.isAuthenticated)
</script>

<style scoped>
.el-row {
  margin-bottom: 10px;
}
</style>