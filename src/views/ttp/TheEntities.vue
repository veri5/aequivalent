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
        class="veri-card"
        :body-style="{ padding: '5px' }"
        >
        <TheEntitiesToolbar />
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
        <TheEntitiesTable />
      </el-card>
    </el-col>
  </el-row>

  <!-- modals -->
  <TheNewEntityModal />
  <TheViewEntityModal />
</template>

<script lang="ts" setup>
import TheEntitiesToolbar from '@/components/ttp/TheEntitiesToolbar.vue'
import TheEntitiesTable from '@/components/ttp/TheEntitiesTable.vue'
import TheNewEntityModal from '@/components/ttp/TheNewEntityModal.vue'
import TheViewEntityModal from '@/components/ttp/TheViewEntityModal.vue'

const heading = 'Entities'
</script>

<style scoped>
.heading {
  padding: 5px;
  padding-left: 15px;
  color: black;
}
.veri-card {
  background-color: #f0f9eb; 
  padding: 0px; 
  border: none; 
  margin: 0px 10px 0px 10px; 
  border-radius: 0px;
}
</style>