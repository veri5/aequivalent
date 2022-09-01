<template>
  <el-row>
    <el-col>
      <h2>{{ heading }}</h2>
    </el-col>
  </el-row>

  <el-row>
    <el-col>   
      <el-card shadow="never">
        <TheRequestsToolbar />
      </el-card>
    </el-col>
  </el-row>
  
  <el-row>
    <el-col>
      <el-card shadow="never">
        <TheRequestsTable />
      </el-card>
    </el-col>
  </el-row>

  <TheNewCredentialModal />
</template>

<script lang="ts" setup>
import TheRequestsToolbar from '@/components/aequivalent/TheRequestsToolbar.vue'
import TheRequestsTable from '@/components/aequivalent/TheRequestsTable.vue'
import TheNewCredentialModal from '@/components/aequivalent/TheNewCredentialModal.vue'

const heading = 'Requests'
</script>