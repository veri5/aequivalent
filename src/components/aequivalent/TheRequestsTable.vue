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
    @row-dblclick="rowDblClick"
  >
    <template v-if="tableData.length" #empty>
      <div style="line-height: 20px; color: #2c3e50;">
        <el-icon :size="50"><Operation /></el-icon>
        <div>
          <p>{{ noMatchingCriteriaText }}</p>
        </div>
      </div>
    </template>
    <template v-else #empty>
      <div style="line-height: 20px; color: #2c3e50;">
        <el-icon :size="50"><DocumentCopy /></el-icon>
        <div>
          <strong>{{ noItemToShowYetText }}</strong>
        </div>
      </div>
    </template>

    <el-table-column prop="type" label="Type" sortable />
    <el-table-column prop="requester" label="Requester" sortable/>
    <el-table-column prop="status" label="Status" sortable>
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
import { DocumentCopy, Search, Edit, Operation } from '@element-plus/icons-vue'

const noMatchingCriteriaText = 'No request matching your search criteria was found'
const noItemToShowYetText = 'No requests to show yet'

const store = useStore()
const namespace = 'aeq'
const storeNamespace = store.state[namespace]

const tableData = computed(() => storeNamespace.requests.tableData)
const search = ref('')
const filterType = computed(() =>
  tableData.value.filter((row) =>
      !search.value || 
      row.type.toLowerCase().includes(search.value.toLowerCase()))
)


const tableRef = ref<InstanceType<typeof ElTable>>()
const selected = computed(() => store.getters[`${namespace}/requests/selected`])
watch(selected, (value) => {
  value == null && tableRef.value!.setCurrentRow()
})
function tagType(status: string) {
  let tag = ''
  switch (status) {
    case 'Approved':
      tag = 'success'
      break
    case 'Rejected':
      tag = 'danger'
      break
    case 'Processing':
      tag = 'info'
      break
    default:
      tag = 'info'
      break
  }

  return tag
}

function rowClick(selected){
  store.dispatch(`${namespace}/requests/setSelected`, selected)
}
function rowDblClick() {
  store.dispatch(`${namespace}/requests/viewSelected`)
}
</script>