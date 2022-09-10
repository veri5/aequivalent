<template>
  <el-card 
    shadow="never"
    class="card"
    :body-style="{ padding: '5px' }"
  >
    <div id="toolbar">
      <div v-if="selected">
        <el-tooltip
          content="Remove" 
          placement="bottom"
        >
          <el-button
            type="danger"
            :size="'default'"
            circle
            plain
            :icon="Delete" 
            @click="showRemoveSelectedBox"
          />
        </el-tooltip>
        <el-tooltip
          content="View" 
          placement="bottom"
        >
          <el-button
            :size="'default'"
            circle
            plain
            :icon="View"
            @click="viewSelected"
          />
        </el-tooltip>
        <el-tooltip 
          content="Clear" 
          placement="bottom"
        >
          <el-button
            :size="'default'"
            circle
            plain
            :icon="Close"
            @click="clearSelected"
          />
        </el-tooltip>
      </div>
      <el-tooltip v-else
        content="New issuer" 
        placement="bottom"
      >
        <el-button
          type="primary"
          :size="'default'"
          circle
          plain
          :icon="Edit" 
          @click="newIssuer"
        />
      </el-tooltip>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import { computed, markRaw } from 'vue'
import { useStore } from 'vuex'
import { ElNotification, ElMessageBox } from 'element-plus'
import { Edit, Delete, View, Close, RemoveFilled } from '@element-plus/icons-vue'

const store = useStore()
const namespace = 'verifive'
const storeNamespace = store.state[namespace]

const selected = computed(() => store.getters[`${namespace}/issuers/selected`])


function newIssuer() {
  store.dispatch(`${namespace}/issuers/showNewIssuerModal`)
}
function removeSelected() {
  store.dispatch(`${namespace}/issuers/remove`)
}
function viewSelected() {
  store.dispatch(`${namespace}/issuers/showViewModal`)
}
function clearSelected() {
  store.dispatch(`${namespace}/issuers/clear`)
}
function showRemoveSelectedBox(){
  ElMessageBox.confirm(
    'Issuer will permanently be remove. Continue?',
    'Remove issuer',
    {
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel',
      type: 'error',
      icon: markRaw(Delete),
    }
  )
  .then(() => {
    ElNotification({
      message: 'Issuer removed successfully',
      icon: markRaw(RemoveFilled),
      position: 'top-right',
      duration: 3000
    })
    removeSelected()
  })
}
</script>

<style scoped>
#toolbar {
  padding: 10px;
  background-color: white;
}
.card {
  background-color: #ecf5ff; 
  padding: 0px; 
  border: none; 
  margin: 0px 10px 0px 10px; 
  border-radius: 0px;
}
</style>