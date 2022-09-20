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
  <TheReviewRequestModal />
  <TheViewRequestModal />
</template>

<script lang="ts" setup>
import TheRequestsToolbar from '@/components/fedpol/TheRequestsToolbar.vue'
import TheRequestsTable from '@/components/fedpol/TheRequestsTable.vue'
import TheReviewRequestModal from '@/components/fedpol/TheReviewRequestModal.vue'
import TheViewRequestModal from '@/components/fedpol/TheViewRequestModal.vue'

const heading = 'Requests'
</script>

<style scoped>
#requests {
  min-height: calc(50vh - 100px);
}
.heading {
  padding: 5px;
  padding-left: 15px;
  color: black;
}
</style>