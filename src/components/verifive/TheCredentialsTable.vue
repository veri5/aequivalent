<template>
  <el-input v-if="tableData.length"
    v-model="search" 
    placeholder="Search all credential types" 
    clearable
    :prefix-icon="Search"
    size="default"
    :input-style="{ color: '#2c3e50', padding: '5px'}"
  />
  <el-table
    ref="tableRef"
    :data="filterType"
    :show-header="!!tableData.length && !search"
    :table-layout="'auto'"
    :highlight-current-row="true"
    :default-sort="{ prop: 'type', order: 'ascending' }"
    :header-cell-style="{ 
      background: '#fafafa', 
      color: '#2c3e50'
    }"
    :row-style="{
      cursor: 'pointer'
    }"
    :height="350"
    @row-click="rowClick"
  >
    <template v-if="tableData.length" #empty>
      <div style="line-height: 20px; color: #2c3e50;">
        <el-icon :size="50"><Operation /></el-icon>
        <div>
          <p>No credential matching your search criteria was found</p>
        </div>
      </div>
    </template>
    <template v-else #empty>
      <div style="line-height: 15px; color: #2c3e50;">
        <el-icon :size="50"><CreditCard /></el-icon>
        <div>
          <strong>No credential to show yet</strong>
          <p style="margin: 5px;">
            Request your first credential by clicking 
            <el-button
              type="primary"
              :size="'default'"
              circle
              plain
              :icon="Edit" 
              @click="newRequest"
              style="margin: 5px;"
            />
          </p>
        </div>
      </div>
    </template>

    <el-table-column prop="type" label="Type" sortable />
    <el-table-column prop="issuer" label="Issuer">
      <template #default="scope">
        <el-link
          type="primary"
          :underline="false" 
          href="https://aequivalent.ch" 
          target="_blank"
          >
            {{ scope.row.issuer}}
          </el-link>
      </template>
    </el-table-column>
    <el-table-column prop="status" label="Status">
      <template #default="scope">
        <el-tag
          :type="tagType(scope.row.status)"
          :effect="'plain'"
          style="width: 80px;"
        >
          {{ scope.row.status }}
        </el-tag>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from 'vue'
import { useStore } from 'vuex'
import { ElTable } from 'element-plus'
import { CreditCard, Search, Edit, Operation } from '@element-plus/icons-vue'

const store = useStore()
const namespace = 'veri'
const storeNamespace = store.state[namespace]

const tableData = computed(() => storeNamespace.credentials.tableData)
const search = ref('')
const filterType = computed(() =>
  tableData.value.filter((row) =>
      !search.value || 
      row.type.toLowerCase().includes(search.value.toLowerCase()))
)


const tableRef = ref<InstanceType<typeof ElTable>>()
const currentRow = computed(() => store.getters[`${namespace}/credentials/currentRow`])
watch(currentRow, (value) => {
  value == null && tableRef.value!.setCurrentRow()
})
function tagType(status){
  switch (status) {
    case 'Issued':
      return 'success'
    case 'Revoked':
      return 'error'
    case 'Processing':
      return 'info'
    default:
      return 'info'
  }
}

function rowClick(row){
  store.dispatch(`${namespace}/credentials/setCurrentRow`, row)
}
function newRequest() {
  store.dispatch(`${namespace}/credentials/newRequest`)
}
</script>