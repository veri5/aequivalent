<template>
  <div id="credentials">
    <el-row>
      <el-col>
        <h2 class="heading">{{ heading }}</h2>
      </el-col>
    </el-row>

    <el-row>
      <el-col>   
        <TheCredentialsToolbar />
      </el-col>
    </el-row>
    
    <el-row>
      <el-col>
        <TheCredentialsTable />
      </el-col>
    </el-row>
  </div>

  <!-- modals -->
  <TheNewCredentialModal />
  <TheViewCredentialModal />
</template>

<script lang="ts" setup>
import TheCredentialsToolbar from '@/components/acme/TheCredentialsToolbar.vue'
import TheCredentialsTable from '@/components/acme/TheCredentialsTable.vue'
import TheNewCredentialModal from '@/components/acme/TheNewCredentialModal.vue'
import TheViewCredentialModal from '@/components/acme/TheViewCredentialModal.vue'

const heading = 'Credentials'
</script>

<style scoped>
#credentials {
  min-height: calc(100vh - 98px);
}
.heading {
  padding: 5px;
  padding-left: 15px;
  color: black;
}
</style>