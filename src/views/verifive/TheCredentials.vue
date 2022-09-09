<template>
  <div id="credentials">
    <el-row>
      <el-col>
        <h2 class="heading">{{ heading }}</h2>
      </el-col>
    </el-row>

    <el-row>
      <el-col>   
        <el-card 
          shadow="never"
          class="veri-card"
          :body-style="{ padding: '5px' }"
          >
          <TheCredentialsToolbar />
        </el-card>
      </el-col>
    </el-row>
    
    <el-row>
      <el-col>
        <el-card 
          shadow="never"
          class="veri-card"
          :body-style="{ padding: '5px' }"
          >
          <TheCredentialsTable />
        </el-card>
      </el-col>
    </el-row>
  </div>

  <!-- modals -->
  <TheNewRequestModal />
  <TheViewCredentialModal />
</template>

<script lang="ts" setup>
import TheCredentialsToolbar from '@/components/verifive/TheCredentialsToolbar.vue'
import TheCredentialsTable from '@/components/verifive/TheCredentialsTable.vue'
import TheNewRequestModal from '@/components/verifive/TheNewRequestModal.vue'
import TheViewCredentialModal from '@/components/verifive/TheViewCredentialModal.vue'

const heading = 'Credentials'
</script>

<style scoped>
#credentials {
  min-height: calc(100vh - 140px);
}
.heading {
  padding: 5px;
  padding-left: 15px;
  color: black;
}
.veri-card {
  background-color: #ecf5ff; 
  padding: 0px; 
  border: none; 
  margin: 0px 10px 0px 10px; 
  border-radius: 0px;
}
</style>