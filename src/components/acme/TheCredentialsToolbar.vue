<template>
  <el-card
    shadow="never"
    class="card"
    :body-style="{ padding: '5px' }"
  >
    <div id="container">
      <div 
        v-if="selectedCredential"
        class="toolbar"
      >
        <el-tooltip
          content="View Credential" 
          placement="bottom"
        >
          <el-button
            :size="'default'"
            circle
            plain
            :icon="View"
            @click="viewSelectedCredential"
          />
        </el-tooltip>

        <el-tooltip 
          content="Clear Selection" 
          placement="bottom"
        >
          <el-button
            :size="'default'"
            circle
            plain
            :icon="Close"
            @click="clearSelectedCredential"
          />
        </el-tooltip>
      </div>
      <div v-else
        class="toolbar "
      >
        <el-tooltip
          content="New Credential" 
          placement="bottom"
        >
          <el-button
            type="primary"
            :size="'default'"
            circle
            plain
            :icon="Plus" 
            @click="newCredential"
          />
        </el-tooltip>
      </div>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { Plus, Delete, View, Close } from '@element-plus/icons-vue'

const store = useStore()
const namespace = 'acme'
const selectedCredential = computed(() => store.getters[`${namespace}/credentials/selectedCredential`])


function newCredential() {
  store.dispatch(`${namespace}/credentials/showNewCredentialModal`)
}
function viewSelectedCredential() {
  store.dispatch(`${namespace}/credentials/showViewCredentialModal`)
}
function clearSelectedCredential() {
  store.dispatch(`${namespace}/credentials/clearSelectedCredential`)
}
</script>

<style scoped>
#container {
  display: flex;
  justify-content: space-between;
  background-color: white;
}
.toolbar {
  display: flex;
  align-items: center;
  padding: 5px;
}
.card {
  background-color: #e1f3d8; 
  padding: 0px; 
  border: none; 
  margin: 0px 10px; 
  border-radius: 0px;
}
</style>