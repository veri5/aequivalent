<template>
  <el-card v-if="credentials.length"
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
          v-if="selectedCredential.status !== Statuses.Valid &&
                selectedCredential.status !== Statuses.Invalid" 
          content="Verifive Credential" 
          placement="bottom"
        >
          <el-button
            type="primary"
            :size="'default'"
            circle
            plain
            :icon="Connection" 
            @click="reviewSelectedCredential"
          />
        </el-tooltip>

        <el-divider
          v-if="selectedCredential.status !== Statuses.Valid &&
                selectedCredential.status !== Statuses.Invalid" 
          direction="vertical" class="menu-divider"/>
        
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
        class="toolbar"
      >
        <span class="not-selected-text">
          {{ notSelectedYetText }}
        </span>
      </div>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import { computed, markRaw } from 'vue'
import { useStore } from 'vuex'
import { ElNotification, ElMessageBox } from 'element-plus'
import { Connection, Delete, View, Close, RemoveFilled } from '@element-plus/icons-vue'

const store = useStore()
const namespace = 'acme'
const selectedCredential = computed(() => store.getters[`${namespace}/credentials/selectedCredential`])
const credentials = computed(() => store.getters[`${namespace}/credentials/credentials`])
const Statuses = computed(() => store.getters[`${namespace}/credentials/Statuses`])

const notSelectedYetText = 'Click on a credential to show the toolbar'

function reviewSelectedCredential() {
  store.dispatch(`${namespace}/credentials/showVerifiveCredentialModal`)
}
function rejectSelectedCredential() {
  store.dispatch(`${namespace}/credentials/rejectSelectedCredential`)
}
function viewSelectedCredential() {
  store.dispatch(`${namespace}/credentials/showViewCredentialModal`)
}
function clearSelectedCredential() {
  store.dispatch(`${namespace}/credentials/clearSelectedCredential`)
}
function showRemoveSelectedBox(){
  ElMessageBox.confirm(
    'Credential will permanently be rejected. Continue?',
    'Reject credential',
    {
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel',
      type: 'error',
      icon: markRaw(Delete),
    }
  )
  .then(() => {
    ElNotification({
      message: 'Credential rejected successfully',
      icon: markRaw(RemoveFilled),
      position: 'top-right',
      duration: 3000
    })
    rejectSelectedCredential()
  })
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
  min-height: 40px;
}
.card {
  background-color: #f3f2f3; 
  padding: 0px; 
  border: none; 
  margin: 0px 10px; 
  border-radius: 0px;
}
.not-selected-text {
  font-size: 12px;
  color: black;
  padding: 8px 0px;
}
.menu-divider {
  margin: 0px 10px;
}
</style>