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
        <TheElementsToolbar />
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
        <TheElementsTable />
      </el-card>
    </el-col>
  </el-row>

  <!-- modals -->
  <TheNewElementModal />
  <TheViewElementModal />
</template>

<script lang="ts" setup>
import TheElementsToolbar from '@/components/ttp/TheElementsToolbar.vue'
import TheElementsTable from '@/components/ttp/TheElementsTable.vue'
import TheNewElementModal from '@/components/ttp/TheNewElementModal.vue'
import TheViewElementModal from '@/components/ttp/TheViewElementModal.vue'

const heading = 'Elements'
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