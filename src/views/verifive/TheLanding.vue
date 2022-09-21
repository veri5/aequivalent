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
          <h1 class="title">{{ company.tagline }}</h1>
          <p class="tagline">The Indentity Federation Endgame</p>
          <el-divider border-style="none"/>
          <TheSignInButton />
        </el-col>
      </el-row>
      <el-row>
        <el-col class="footer">
          <div>© 2022 Verifive</div>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import TheSignInButton from '@/components/verifive/TheSignInButton.vue';

const store = useStore()
const namespace = 'verifive'
const storeNamespace = store.state[namespace]

const company = computed(() => storeNamespace.company.profile)
</script>

<style scoped>
.header {
  display: flex;
  justify-content: flex-start;
  background: black;
}
.header > img {
  height: 30px;
  padding: 10px 20px;
}
.body {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
  height: calc(100vh - 84px);
}
.title {
  font-family: 'ui-serif';
  font-size: 34px;
  font-weight: 400;
  color: white;
  text-transform: uppercase;
}
.tagline {
  font-family: 'Roboto';
  font-size: 18px;
  color: whitesmoke;
}
.body-background {
  background-color: rgb(0 0 0 / 50%);
  background-image: url("~@/assets/verifive_landing_background.jpg");
  background-position: 25%;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
  background-size: cover;
}
/* .body-background {
  background-color: rgb(0 0 0 / 50%);
  background-image: url("~@/assets/verifive_landing_background2.jpg");
  background-position: 45%;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
  background-size: cover;
} */
.footer {
  color: whitesmoke;
  font-family: 'Helvetica';
  font-size: 12px;
  background-color: black;
  padding: 10px;
  text-align: right;
}
</style>
