<template>
  <el-card 
    shadow="never"
    class="card"
    :body-style="{ padding: '5px 5px' }"
  >
    <el-table
      ref="tableRef"
      row-key="name"
      :defaultExpandAll="true"
      :data="tableData"
      :show-header="!!tableData.length"
      :table-layout="'auto'"
      :highlight-current-row="true"
      :default-sort="{ prop: 'name', order: 'ascending' }"
      :header-cell-style="{ 
        background: '#c6e2ff', 
        color: '#2c3e50'
      }"
      :row-style="tableRowStyle"
      :height="350"
      @row-click="rowClick"
      @row-dblclick="rowDblClick"
    >
      <template v-if="!tableData.length" #empty>
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
                :icon="Plus" 
                @click="newElement"
                style="margin: 5px;"
              />
            </p>
          </div>
        </div>
      </template>

      <el-table-column prop="name" label="Name"/>
      <el-table-column prop="validFrom" label="Valid From"/>
      <el-table-column prop="validUntil" label="Valid Until"/>
      <el-table-column label="Status">
        <template #default="scope">
          <el-tag v-if="scope.row.status"
            :type="elementsTagType(scope.row.status)"
            :effect="'plain'"
            style="min-width: 80px; text-transform: capitalize;"
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
import { Connection, Search, Plus, SetUp } from '@element-plus/icons-vue'
import { elementsTagType } from '@/components/helpers/tags';

const noMatchingCriteriaText = 'No element matching your search criteria was found'
const noItemToShowYetText = 'No element to show yet'
const firstTourStepText = 'Add your first element by clicking'

const store = useStore()
const namespace = 'verifive'
const mockElements = computed(() => store.getters[`${namespace}/elements/elements`])
const Statuses = computed(() => store.getters[`${namespace}/elements/Statuses`])
const selected = computed(() => store.getters[`${namespace}/elements/selectedElement`])
watch(selected, (row: Element) => {
  row == null && tableRef.value!.setCurrentRow(row)
})

const tableRef = ref<InstanceType<typeof ElTable>>()
const tableData = computed(() => {
  const arrayToTree = (elements) =>
    elements.map(element => {
      const children = mockElements.value.filter(({ parent }) => parent === element.name )

      return Object.assign({}, 
        { ...element }, 
        children.length ? { children: arrayToTree(children) } : {}
      )
    })

  const rootElements = mockElements.value.filter(element => !element.parent)
  return arrayToTree(rootElements)
})
const tableRowStyle= ({
  row,
  rowIndex,
}: {
  row: any
  rowIndex: number
}): any => {
  if (row.parent) {
    return {
      cursor: 'pointer',
      background: '#fafafa80'
    }
  }    
  return {
    cursor: 'pointer'
  }
}

function newElement() {
  store.dispatch(`${namespace}/elements/showNewElementModal`)
}
function rowClick(element){
  store.dispatch(`${namespace}/elements/setSelectedElement`, element)
}
function rowDblClick() {
  store.dispatch(`${namespace}/elements/showViewElementModal`)
}
</script>

<style scoped>
.card {
  background-color: #d9ecff; 
  padding: 0px; 
  border: none; 
  margin: 0px 10px 0px 10px; 
  border-radius: 0px;
}
</style>