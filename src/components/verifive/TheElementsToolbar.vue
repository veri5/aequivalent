<template>
  <el-card 
    shadow="never"
    class="card"
    :body-style="{ padding: '5px' }"
  >
    <div id="container">
      <div
        v-if="selectedRole">
        <div 
          v-if="selectedElement"
          class="toolbar"
        >
          <!-- owner -->
          <el-tooltip
            v-if="selectedRole === Roles.Owner &&
                  selectedElement.status !== Statuses.Retired" 
            content="New Element" 
            placement="bottom"
          >
            <el-button
              type="primary"
              :size="'default'"
              circle
              plain
              :icon="Share" 
              @click="newElement"
            />
          </el-tooltip>

          <!-- owner -->
          <el-tooltip
            v-if="selectedRole === Roles.Owner &&
                  selectedElement.status !== Statuses.Retired"
            content="Retire Element" 
            placement="bottom"
          >
            <el-button
              type="danger"
              :size="'default'"
              circle
              plain
              :icon="Delete" 
              @click="showRetireSelectedBox"
            />
          </el-tooltip>

          <el-divider
            v-if="selectedElement.status !== Statuses.Retired" 
            direction="vertical" class="menu-divider"/>
          
          <!-- all roles -->
          <el-tooltip
            content="View Element" 
            placement="bottom"
          >
            <el-button
              :size="'default'"
              circle
              plain
              :icon="View"
              @click="viewSelectedElement"
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
              @click="clearSelectedElement"
            />
          </el-tooltip>
        </div>
        <div v-else
          class="toolbar"
        >
          <!-- owner -->
          <el-tooltip
            v-if="selectedRole === Roles.Owner" 
            content="New Root Element" 
            placement="bottom"
          >
            <el-button
              type="primary"
              :size="'default'"
              circle
              plain
              :icon="Plus" 
              @click="newElement"
            />
          </el-tooltip>
        </div>
      </div>
      <div v-else>
        <el-space ></el-space>
      </div>

    </div>
  </el-card>
</template>

<script lang="ts" setup>
import { computed, markRaw } from 'vue'
import { useStore } from 'vuex'
import { ElNotification, ElMessageBox } from 'element-plus'
import { Plus, Delete, View, Close, RemoveFilled, User, Postcard, Failed, Share, List } from '@element-plus/icons-vue'
import TheRolesSelect from '@/components/verifive/TheRolesSelect.vue'

const store = useStore()
const namespace = 'verifive'
const selectedElement = computed(() => store.getters[`${namespace}/elements/selectedElement`])
const Statuses = computed(() => store.getters[`${namespace}/elements/Statuses`])
const selectedRole = computed(() => store.getters[`${namespace}/toolbar/selectedRole`])
const Roles = computed(() => store.getters[`${namespace}/toolbar/Roles`])


function newElement() {
  store.dispatch(`${namespace}/elements/showNewElementModal`)
}
function retireSelected() {
  store.dispatch(`${namespace}/elements/retireSelectedElement`)
}
function viewSelectedElement() {
  store.dispatch(`${namespace}/elements/showViewElementModal`)
}
function clearSelectedElement() {
  store.dispatch(`${namespace}/elements/clearSelectedElement`)
}
function showRetireSelectedBox(){
  ElMessageBox.confirm(
    'Element will permanently be retired. Continue?',
    'Retire Element',
    {
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel',
      type: 'error',
      icon: markRaw(Delete),
    }
  )
  .then(() => {
    ElNotification({
      message: 'Element retired successfully',
      icon: markRaw(RemoveFilled),
      position: 'top-right',
      duration: 3000
    })
    retireSelected()
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
}
.card {
  background-color: #d9ecff; 
  padding: 0px; 
  border: none; 
  margin: 0px 10px; 
  border-radius: 0px;
}
.menu-divider {
  margin: 0px 10px;
}
</style>