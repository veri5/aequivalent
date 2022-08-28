<template>
  <el-row>
    <el-col>
      <h2>{{ heading }}</h2>
    </el-col>
  </el-row>

  <el-row>
    <el-col>   
      <el-card shadow="never">
        <TheCredentialsToolbar />
      </el-card>
    </el-col>
  </el-row>
  
  <el-row>
    <el-col>
      <el-card shadow="never">
        <TheCredentialsTable />
      </el-card>
    </el-col>
  </el-row>

  <TheNewCredentialModal />
</template>

<script lang="ts" setup>
import TheCredentialsToolbar from '@/components/verifive/TheCredentialsToolbar.vue'
import TheCredentialsTable from '@/components/verifive/TheCredentialsTable.vue'
import TheNewCredentialModal from '@/components/verifive/TheNewCredentialModal.vue'

const heading = 'Credentials'
</script>