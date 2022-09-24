<template>
  <div id="credentials">
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
  <TheNewRequestModal />
  <TheViewRequestModal />
</template>

<script lang="ts" setup>
import TheRequestsToolbar from '@/components/acme/TheRequestsToolbar.vue'
import TheRequestsTable from '@/components/acme/TheRequestsTable.vue'
import TheNewRequestModal from '@/components/acme/TheNewRequestModal.vue'
import TheViewRequestModal from '@/components/acme/TheViewRequestModal.vue'

const heading = 'Requests'
</script>

<style scoped>
#credentials {
  min-height: 35vh;
}
.heading {
  padding: 5px;
  padding-left: 15px;
  color: black;
}
</style>