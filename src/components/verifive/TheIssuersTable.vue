<template>
  <el-card 
    shadow="never"
    class="card"
    :body-style="{ padding: '5px' }"
  >
    <el-input v-if="tableData.length"
      v-model="search" 
      placeholder="Search all issuers" 
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
      :default-sort="{ prop: 'issuer', order: 'ascending' }"
      :header-cell-style="{ 
        background: '#ecf5ff', 
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
          <el-icon :size="50"><Connection /></el-icon>
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
                @click="newIssuer"
                style="margin: 5px;"
              />
            </p>
          </div>
        </div>
      </template>

      <el-table-column prop="name" label="Name" sortable/>
      <el-table-column prop="element" label="Element" sortable />
      <el-table-column prop="expiry" label="Expiry" sortable/>
    </el-table>
  </el-card>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from 'vue'
import { useStore } from 'vuex'
import { ElTable } from 'element-plus'
import { Connection, Search, Edit, Operation } from '@element-plus/icons-vue'

const noMatchingCriteriaText = 'No issuer matching your search criteria was found'
const noItemToShowYetText = 'No issuer to show yet'
const firstTourStepText = 'Add your first issuer by clicking'

const store = useStore()
const namespace = 'verifive'
const storeNamespace = store.state[namespace]

const tableData = computed(() => storeNamespace.issuers.tableData)
const search = ref('')
const filterType = computed(() =>
  tableData.value.filter((row) =>
      !search.value || 
      row.name.toLowerCase().includes(search.value.toLowerCase()))
)


const tableRef = ref<InstanceType<typeof ElTable>>()
const selected = computed(() => store.getters[`${namespace}/issuers/selected`])
watch(selected, (value) => {
  value == null && tableRef.value!.setCurrentRow()
})


function newIssuer() {
  store.dispatch(`${namespace}/issuers/showNewIssuerModal`)
}
function rowClick(selected){
  store.dispatch(`${namespace}/issuers/setSelected`, selected)
}
function rowDblClick() {
  store.dispatch(`${namespace}/issuers/showViewModal`)
}
</script>

<style scoped>
.card {
  background-color: #ecf5ff; 
  padding: 0px; 
  border: none; 
  margin: 0px 10px 0px 10px; 
  border-radius: 0px;
}
</style>