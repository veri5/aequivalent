<template>
  <el-row>
    <el-col>
      <el-row>
        <el-col class="header">
          <img alt="company logo" :src="require(`@/assets/${company.homeLogo}`)"/>
        </el-col>
      </el-row>
      <el-row class="body body-background">
        <el-col :xs="18" :sm="18">
          <h2 class="title">Who is {{ company.name }}?</h2>
          <h2 class="title" style="margin-top: 15px; height: 1px;"><span class="underline">Who</span></h2>
          <p class="tagline">Aequivalent is Switzerland’s leading digital platform for employment screening (background checks). Through our secure online solution, our team verifies and delivers relevant information to help employers reduce the risk of inappropriate employment.</p>
          <el-divider border-style="none"/>
          <TheSignInButton />
        </el-col>
      </el-row>
      <el-row>
        <el-col class="footer">
          <div>© Copyright 2020 - 2022 | All Rights Reserved to Aequivalent SA</div>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import TheSignInButton from '@/components/aequivalent/TheSignInButton.vue';

const store = useStore()
const namespace = 'aeq'
const storeNamespace = store.state[namespace]

const company = computed(() => storeNamespace.company.profile)
</script>

<style scoped>
.header {
  display: flex;
  justify-content: flex-start;
  background: white;
}
.header > img {
  height: 29px;
  padding: 10px 15px;
}
.body {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
  height: calc(100vh - 99px);
}
.title {
  font-family: 'Roobert-Semibold';
  font-size: 36px;
  color: white;
  margin-bottom: 0px;
}
.tagline {
  font-family: 'Roobert-Regular';
  font-size: 18px;
  color: whitesmoke;
  text-align: justify;
}
.underline {
  border-top: 1px solid #9e1510;
  color: transparent;
}
.body-background {
  background-color: rgba(0,0,0,0.47);
  background-image: url("~@/assets/aeq_banner_background.jpeg");
  background-position: center bottom;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
  border-width: 0px 0px 0px 0px;
  border-color: #eae9e9;
  border-style: solid;
  background-size: cover;
}
.footer {
  color: white;
  font-family: 'Roobert-Regular';
  font-size: 12px;
  font-weight: 600;
  background-color: black;
  padding: 10px;
  text-align: center;
}
</style>
