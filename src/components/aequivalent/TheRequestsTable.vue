<template>
  <el-input v-if="tableData.length"
    v-model="search" 
    placeholder="Search all credential types" 
    clearable
    size="default"
  />
  <el-table
    ref="tableRef"
    :data="filterType"
    :highlight-current-row="true"
    :header-cell-style="{ 
      background: '#fafafa', 
      fontWeight: '400', 
      color: '#2c3e50' 
    }"
    :height="250"
    @row-click="rowClick"
  >
    <template #empty>
    <div style="line-height:15px; color:#2c3e50;">
      <el-icon :size="50"><CreditCard /></el-icon>
      <div>
        <strong>No requests to show yet</strong>
        <p>Review your first request by clicking on 'New credential'</p>
      </div>      
    </div>
    </template>
    <el-table-column prop="type" label="Type" />
    <el-table-column prop="issuer" label="Issuer" />
    <el-table-column prop="expiry" label="Expiry" width="100"/>
    <el-table-column prop="status" label="Status" width="100"/>
  </el-table>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from 'vue'
import { useStore } from 'vuex'
import { ElTable } from 'element-plus'
import { CreditCard } from '@element-plus/icons-vue'

const store = useStore()
const namespace = 'aeq'
const storeNamespace = store.state[namespace]

const tableData = computed(() => storeNamespace.requests.tableData)


const tableRef = ref<InstanceType<typeof ElTable>>()
const currentRow = computed(() => store.getters[`${namespace}/requests/currentRow`])
watch(currentRow, (value) => {
  value == null && tableRef.value!.setCurrentRow()
})

function rowClick(row){
  store.dispatch(`${namespace}/requests/setCurrentRow`, row)
}


const search = ref('')
const filterType = computed(() =>
  tableData.value.filter((row) =>
      !search.value || 
      row.type.toLowerCase().includes(search.value.toLowerCase()))
)
</script>