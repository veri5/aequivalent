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
        class="aeq-card"
        :body-style="{ padding: '5px' }"
        >
        <TheRequestsToolbar />
      </el-card>
    </el-col>
  </el-row>
  
  <el-row>
    <el-col>
      <el-card 
        shadow="never"
        class="aeq-card"
        :body-style="{ padding: '5px' }"
        >
        <TheRequestsTable />
      </el-card>
    </el-col>
  </el-row>

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
.heading {
  padding: 5px;
  padding-left: 15px;
  color: black;
  font-family: 'Roobert-Semibold';
}
.aeq-card {
  background-color: #f3f2f3; 
  padding: 0px; 
  border: none; 
  margin: 0px 10px 0px 10px; 
  border-radius: 0px;
}
</style>