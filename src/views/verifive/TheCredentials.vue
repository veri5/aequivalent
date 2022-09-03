<template>
  <el-row>
    <el-col>
      <h2 class="heading">{{ heading }}</h2>
    </el-col>
  </el-row>

  <el-row>
    <el-col>   
      <el-card 
        shadow="never"
        style="background-color: #f6f8fc; padding: 0px; border: none; margin: 0px 10px 10px; border-radius: 0px;"
        :body-style="{ padding:' 5px'}"
        >
        <TheCredentialsToolbar />
      </el-card>
    </el-col>
  </el-row>
  
  <el-row>
    <el-col>
      <el-card 
        shadow="never"
        style="background-color: #f6f8fc; padding: 0px; border: none; margin: 0px 10px 10px; border-radius: 0px;"
        :body-style="{ padding:' 5px'}"
        >
        <TheCredentialsTable />
      </el-card>
    </el-col>
  </el-row>

  <!-- modals -->
  <TheNewRequestModal />
  <TheViewRequestModal />
</template>

<script lang="ts" setup>
import TheCredentialsToolbar from '@/components/verifive/TheCredentialsToolbar.vue'
import TheCredentialsTable from '@/components/verifive/TheCredentialsTable.vue'
import TheNewRequestModal from '@/components/verifive/TheNewRequestModal.vue'
import TheViewRequestModal from '@/components/verifive/TheViewRequestModal.vue'

const heading = 'Credentials'
</script>

<style scoped>
.heading {
  padding-left: 15px;
}
</style>