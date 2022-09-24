<template>
  <div id="elements">
    <el-row>
      <el-col>
        <h2 class="heading">{{ heading }}</h2>
      </el-col>
    </el-row>

    <el-row>
      <el-col>   
        <TheElementsToolbar />
      </el-col>
    </el-row>
    
    <el-row>
      <el-col>
        <TheElementsTable />
      </el-col>
    </el-row>
  </div>
  
  <!-- element modals -->
  <TheNewElementModal />
  <TheViewElementModal />
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import TheElementsToolbar from '@/components/verifive/TheElementsToolbar.vue'
import TheElementsTable from '@/components/verifive/TheElementsTable.vue'
import TheNewElementModal from '@/components/verifive/TheNewElementModal.vue'
import TheViewElementModal from '@/components/verifive/TheViewElementModal.vue'

const heading = 'Elements'

</script>

<style scoped>
#elements {
  min-height: calc(100vh - 98px);
}
.heading {
  padding: 5px;
  padding-left: 15px;
  color: black;
}
</style>