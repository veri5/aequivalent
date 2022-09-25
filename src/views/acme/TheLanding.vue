<template>
  <el-row>
    <el-col>
      <el-row>
        <el-col class="header">
          <img alt="company logo" :src="require(`@/assets/${company.landingLogo}`)"/>
        </el-col>
      </el-row>
      <el-row class="body body-background">
        <el-col>
          <h1 class="title">{{ company.name }}</h1>
          <p class="tagline">The Employement History Wallet</p>
          <el-divider border-style="none"/>
          <TheConnectButton />
        </el-col>
      </el-row>
      <el-row>
        <el-col class="footer">
          <div>© Copyright 2022 | Acme SA</div>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import TheConnectButton from '@/components/acme/TheConnectButton.vue'

const store = useStore()
const namespace = 'acme'
const storeNamespace = store.state[namespace]

const company = computed(() => storeNamespace.company.profile)
</script>

<style scoped>
.header {
  display: flex;
  justify-content: flex-start;
  background: #183543;
}
.header > img {
  height: 30px;
  padding: 10px 20px;
}
.body {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 40px;
  height: calc(100vh - 84px);
}
.title {
  font-family: 'ui-serif';
  font-size: 36px;
  font-weight: 400;
  color: white;
  margin-top: 80px;
  text-transform: uppercase;
}
.tagline {
  font-family: 'Roboto';
  font-size: 18px;
  color: whitesmoke;
}
.body-background {
  background-color: rgb(0 0 0 / 50%);
  background-image: url("~@/assets/acme_landing_background.jpeg");
  background-position: 25%;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
  background-size: cover;
}
.footer {
  color: whitesmoke;
  font-family: 'Helvetica';
  font-size: 12px;
  background-color: #183543;
  padding: 10px;
  text-align: center;
}
</style>
