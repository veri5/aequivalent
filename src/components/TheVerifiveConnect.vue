<template>
  <el-row>
    <el-col>
      <el-row>
        <el-col class="veri-banner-header">
          <img alt="company logo" :src="require(`../assets/${company.logo}`)"/>
        </el-col>
      </el-row>
      <el-row class="veri-banner-body veri-banner-background">
        <el-col :xs="12" :sm="12">
          <h2 class="veri-title">{{ company.name }}</h2>
          <p class="veri-intro-text">Adding the final stich to the Identity Trust Fabric</p>
          <el-divider border-style="none"/>
          <the-verida-connect-button :namespace="namespace"/>
        </el-col>
      </el-row>
      <el-row class="veri-body veri-body-background">
        <el-col>
          <!-- Body -->
        </el-col>
      </el-row>
      <el-row>
        <el-col class="veri-footer">
          <div>© Copyright 2022 managination - All Rights Reserved</div>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import { useStore } from 'vuex'
import TheVeridaConnectButton from '@/components/TheVeridaConnectButton.vue'

const props = defineProps({
  namespace: {
    type: String,
    required: true,
    default: "ttp"
  },
})

const store = useStore()
const storeNamespace = store.state[props.namespace]

const company = computed(() => storeNamespace.company.profile)
</script>

<style scoped>
.veri-banner-header {
  display: flex;
  justify-content: flex-end;
  background: white;
}
.veri-banner-header > img {
  height: 30px;
  padding: 10px;
}
.veri-banner-body {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
  height: 50vh;
}
.veri-title {
  font-family: 'ui-serif';
  font-size: 42px;
  font-weight: 400;
  color: whitesmoke;
  text-transform: uppercase;
}
.veri-intro-text {
  font-family: 'Roboto';
  font-size: 22px;
  color: whitesmoke;
}
.veri-banner-background {
  background-color: rgba(0,0,0,0.27);
  background-image: url("~@/assets/veri-landing-background.jpg");
  background-position: center bottom;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
  border-width: 0px 0px 0px 0px;
  border-color: #eae9e9;
  border-style: solid;
  background-size: cover;
}
.veri-body {
  font-family: 'Helvetica';
  font-size: 16px;
  font-weight: 600;
  color: whitesmoke;
  text-align: left;
  height: 25vh;
}
.veri-body-background {
  background-color: #df8444
}
.veri-footer {
  color: whitesmoke;
  font-family: 'Helvetica';
  font-size: 12px;
  background-color: #1e1f20;
  padding: 10px;
  text-align: left;
}
</style>
