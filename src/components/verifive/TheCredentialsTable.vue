<template>
  <el-input 
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
        <strong>No credentials to show yet</strong>
        <p>Request your first credential by clicking on 'New request'</p>
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
const namespace = 'veri'
const storeNamespace = store.state[namespace]

const tableData = computed(() => storeNamespace.credentials.tableData)


const tableRef = ref<InstanceType<typeof ElTable>>()
const currentRow = computed(() => store.getters[`${namespace}/credentials/currentRow`])
watch(currentRow, (value) => {
  value == null && tableRef.value!.setCurrentRow()
})

function rowClick(row){
  store.dispatch(`${namespace}/credentials/setCurrentRow`, row)
}


const search = ref('')
const filterType = computed(() =>
  tableData.value.filter((row) =>
      !search.value || 
      row.type.toLowerCase().includes(search.value.toLowerCase()))
)
</script>