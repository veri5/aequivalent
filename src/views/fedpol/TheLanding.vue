<template>
  <el-row>
    <el-col>
      <el-row>
        <el-col class="header">
          <img alt="company logo" :src="require(`@/assets/${company.landingLogo}`)"/>
          <div class="header-tagline">{{ company.tagline }}</div>
        </el-col>
      </el-row>
      <el-row class="body body-background">
        <el-col>
          <h2 class="title">fedpolʼs mission</h2>
          <h2 class="title" style="margin-top: 15px; height: 1px;"><span class="underline">{{ company.name }}</span></h2>
          <p class="tagline">The exchange of information and the identification of people and objects are central to fighting crime. fedpol develops and operates national databases, and makes these instruments available to federal and cantonal security and migration services.</p>
          <el-divider border-style="none"/>
          <TheSignInButton />
        </el-col>
      </el-row>
      <el-row>
        <el-col class="footer">
          <div>© 2022 Federal Office of Police fedpol</div>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import TheSignInButton from '@/components/fedpol/TheSignInButton.vue';

const store = useStore()
const namespace = 'fedpol'
const storeNamespace = store.state[namespace]

const company = computed(() => storeNamespace.company.profile)
</script>

<style scoped>
.header {
  display: flex;
  justify-content: flex-start;
  background: white;
  border-bottom: 3px solid #dc0018;
  align-items: center;
}
.header > img {
  height: 29px;
  padding: 10px 15px;
}
.header-tagline {
  color: black;
}
.body {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
  height: calc(50vh - 86px);
}
.title {
  font-size: 32px;
  color: white;
  margin-bottom: 0px;
}
.tagline {
  font-size: 14px;
  color: whitesmoke;
  text-align: justify;
}
.underline {
  border-top: 1px solid #9e1510;
  color: transparent;
}
.body-background {
  background-color: rgba(0,0,0, 20%);
  background-image: url("~@/assets/fedpol_landing_background.png");
  background-position: top right;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
  border-width: 0px 0px 0px 0px;
  border-color: #eae9e9;
  border-style: solid;
  background-size: cover;
}
.footer {
  color: whitesmoke;
  font-size: 12px;
  background-color: #1c1d2a;
  padding: 10px;
  text-align: center;
}
</style>
