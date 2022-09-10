<template>
  <el-card 
    shadow="never"
    class="card"
    :body-style="{ padding: '5px' }"
  >
    <el-input v-if="tableData.length"
      v-model="search" 
      placeholder="Search all types" 
      clearable
      :prefix-icon="Search"
      size="default"
      :input-style="{
        color: '#2c3e50', 
        padding: '5px'
      }"
    />
    <el-table
      ref="tableRef"
      :data="filterType"
      :show-header="!!tableData.length && !search"
      :table-layout="'auto'"
      :highlight-current-row="true"
      :default-sort="{ prop: 'type', order: 'ascending' }"
      :header-cell-style="{ 
        background: '#f0f9eb', 
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
          <el-icon :size="50"><CreditCard /></el-icon>
          <div>
            <strong>{{ noItemToShowYetText }}</strong>
            <p style="margin: 0px;">
              {{ firstTourStepText }}
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
      <el-table-column prop="issuer" label="Issuer" sortable/>
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
  </el-card>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from 'vue'
import { useStore } from 'vuex'
import { ElTable } from 'element-plus'
import { CreditCard, Search, Edit, Operation } from '@element-plus/icons-vue'

const noMatchingCriteriaText = 'No credential matching your search criteria was found'
const noItemToShowYetText = 'No credential to show yet'
const firstTourStepText = 'Request your first credential by clicking'

const store = useStore()
const namespace = 'acme'
const storeNamespace = store.state[namespace]

const tableData = computed(() => storeNamespace.credentials.tableData)
const search = ref('')
const filterType = computed(() =>
  tableData.value.filter((row) =>
      !search.value || 
      row.type.toLowerCase().includes(search.value.toLowerCase()))
)


const tableRef = ref<InstanceType<typeof ElTable>>()
const selected = computed(() => store.getters[`${namespace}/credentials/selected`])
watch(selected, (value) => {
  value == null && tableRef.value!.setCurrentRow()
})
function tagType(status: string) {
  let tag = ''
  switch (status) {
    case 'Issued':
      tag = 'success'
      break
    case 'Revoked':
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


function newRequest() {
  store.dispatch(`${namespace}/credentials/showNewRequestModal`)
}
function rowClick(selected){
  store.dispatch(`${namespace}/credentials/setSelected`, selected)
}
function rowDblClick() {
  store.dispatch(`${namespace}/credentials/showViewModal`)
}
</script>

<style scoped>
  .card {
    background-color: #f0f9eb; 
    padding: 0px; 
    border: none; 
    margin: 0px 10px 0px 10px; 
    border-radius: 0px;
  }
</style>