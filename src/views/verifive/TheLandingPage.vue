<template>
  <el-row>
    <el-col>
      <el-row>
        <el-col class="veri-banner-header">
          <img alt="company logo" :src="require(`@/assets/${company.logo}`)"/>
        </el-col>
      </el-row>
      <el-row class="veri-banner-body veri-banner-background">
        <el-col :xs="10" :sm="10">
          <h2 class="veri-title">{{ company.name }}</h2>
          <p class="veri-intro-text">Adding the final stich to the Identity Trust Fabric</p>
          <el-divider border-style="none"/>
          <the-verida-connect-button :namespace="namespace"/>
        </el-col>
        <el-col :offset="3" :xs="11" :sm="11" class="veri-banner-sign">
          <p>
            In the analog world, we are used to checking accreditations: Physicians, lawyers and even chefs have their diplomas framed and hanging on the walls of their waiting rooms. You probably checked that the school you enrolled into was accredited, unless it is a well known university.
          </p>
          <p>
            At the same time, many people and organisations try to take advantage of the trust most people have in their fellow humans by passing themselves as something they are not. Trump university was famously not accredited as an educational organisation. Many invoices have been issued to a company that has never been incorporated.
          </p>
          <p>
            <strong style="color: black;">How can WE as a society detect FRAUD?</strong>
          </p>
        </el-col>
      </el-row>
      <el-row class="veri-body veri-body-background">
        <el-col>
          <!-- Body -->
        </el-col>
      </el-row>
      <el-row>
        <el-col class="veri-footer">
          <div>© Copyright 2022 | Managination</div>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import TheVeridaConnectButton from '@/components/TheVeridaConnectButton.vue'

const store = useStore()
const namespace = 'veri'
const storeNamespace = store.state[namespace]

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
.veri-banner-sign {
  background-color: rgb(223, 132, 67);
  color: whitesmoke;
  padding: 10px;
  font-size: 12px;
  text-align: center;
  letter-spacing: 1px;
  font-family: Helvetica;
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
  font-size: 18px;
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
  background-color: #1e2020
}
.veri-footer {
  color: whitesmoke;
  font-family: 'Helvetica';
  font-size: 12px;
  background-color: black;
  padding: 10px;
  text-align: center;
}
</style>
