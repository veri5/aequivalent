<template>
  <el-card
    shadow="never"
    class="card"
    :body-style="{ padding: '5px' }"
  >
    <div id="container">
      <div 
        v-if="selectedRequest"
        class="toolbar"
      >
        <el-tooltip
          content="View Request" 
          placement="bottom"
        >
          <el-button
            :size="'default'"
            circle
            plain
            :icon="View"
            @click="viewSelectedRequest"
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
            @click="clearSelectedRequest"
          />
        </el-tooltip>
      </div>
      <div v-else
        class="toolbar "
      >
        <el-tooltip
          content="New Request" 
          placement="bottom"
        >
          <el-button
            type="primary"
            :size="'default'"
            circle
            plain
            :icon="Plus" 
            @click="newRequest"
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
const selectedRequest = computed(() => store.getters[`${namespace}/requests/selectedRequest`])


function newRequest() {
  store.dispatch(`${namespace}/requests/showNewRequestModal`)
}
function viewSelectedRequest() {
  store.dispatch(`${namespace}/requests/showViewRequestModal`)
}
function clearSelectedRequest() {
  store.dispatch(`${namespace}/requests/clearSelectedRequest`)
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