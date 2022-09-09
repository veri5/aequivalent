<template>
  <div id="requests">
    <el-row>
      <el-col>
        <h2 class="heading">{{ heading }}</h2>
      </el-col>
    </el-row>

    <el-row>
      <el-col>   
        <TheRequestsToolbar />
      </el-col>
    </el-row>
    
    <el-row>
      <el-col>
        <TheRequestsTable />
      </el-col>
    </el-row>
  </div>

  <!-- modals -->
  <TheViewRequestModal />
</template>

<script lang="ts" setup>
import TheRequestsToolbar from '@/components/aequivalent/TheRequestsToolbar.vue'
import TheRequestsTable from '@/components/aequivalent/TheRequestsTable.vue'
import TheViewRequestModal from '@/components/aequivalent/TheViewRequestModal.vue'

const heading = 'Requests'
</script>

<style scoped>
#requests {
  min-height: calc(100vh - 140px);
}
.heading {
  padding: 5px;
  padding-left: 15px;
  color: black;
  font-family: 'Roobert-Semibold';
}
</style>