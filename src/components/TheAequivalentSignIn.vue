<template>
<el-row>
  <el-col style="background:whitesmoke;">
    <el-row>
      <el-col class="aeq-banner-header">
        <img alt="company logo" :src="require(`../assets/${company.homeLogo}`)"/>
      </el-col>
    </el-row>
    <el-row class="aeq-banner-body aeq-banner-background">
      <el-col :xs="18" :sm="18">
        <h2 class="aeq-title">Who is {{ company.name }}?</h2>
        <h2 class="aeq-title" style="margin-top: 15px; height: 1px;"><span class="aeq-underline">Who</span></h2>
        <p class="aeq-intro-text">Aequivalent is Switzerland’s leading digital platform for employment screening (background checks). Through our secure online solution, our team verifies and delivers relevant information to help employers reduce the risk of inappropriate employment.</p>
        <el-divider border-style="none"/>
        <the-aequivalent-sign-in-button :namespace="namespace" />
      </el-col>
    </el-row>
    <el-row class="aeq-body aeq-body-background">
      <el-col>
        <!-- Body -->
      </el-col>
    </el-row>
    <el-row>
      <el-col class="aeq-footer">
        <div>© Copyright 2020 - 2022 | All Rights Reserved to Aequivalent SA</div>
      </el-col>
    </el-row>
  </el-col>
</el-row>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import { useStore } from 'vuex'
import TheAequivalentSignInButton from './TheAequivalentSignInButton.vue';

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
.aeq-banner-header {
  display: flex;
  justify-content: flex-end;
  background: white;
}
.aeq-banner-header > img {
  height: 30px;
  padding: 10px;
}
.aeq-banner-body {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
  height: 50vh;
}
.aeq-title {
  font-family: 'Roobert-Semibold';
  font-size: 36px;
  color: white;
  margin-bottom: 0px;
}
.aeq-intro-text {
  font-family: 'Roobert-Regular';
  font-size: 18px;
  color: white;
  text-align: justify;
}
.aeq-underline {
  border-top: 1px solid #9e1510;
  color: transparent;
}
.aeq-banner-background {
  background-color: rgba(0,0,0,0.47);
  background-image: url("https://www.aequivalent.ch/wp-content/uploads/2021/12/Home-Banner-Mission-Statement.jpeg");
  background-position: center bottom;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
  border-width: 0px 0px 0px 0px;
  border-color: #eae9e9;
  border-style: solid;
  background-size: cover;
}
.aeq-body {
  font-family: 'Roobert-Regular';
  font-size: 16px;
  font-weight: 600;
  color: white;
  text-align: justify;
  height: 25vh;
}
.aeq-body-background {
  background-color: #1b2032;
  background-image: url(https://www.aequivalent.ch/wp-content/uploads/2020/01/IMG_4071-1-scaled-e1579697464721.jpg);
  background-position: center top;
  background-repeat: no-repeat;
}
.aeq-footer {
  color: white;
  font-family: 'Roobert-Regular';
  font-size: 12px;
  font-weight: 600;
  background-color: black;
  padding: 10px;
  text-align: center;
}
</style>
