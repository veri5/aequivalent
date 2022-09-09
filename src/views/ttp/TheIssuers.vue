<template>
  <div id="issuers">
    <el-row>
      <el-col>
        <h2 class="heading">{{ heading }}</h2>
      </el-col>
    </el-row>

    <el-row>
      <el-col>   
        <TheIssuersToolbar />
      </el-col>
    </el-row>
    
    <el-row>
      <el-col>
        <TheIssuersTable />
      </el-col>
    </el-row>
  </div>
  
  <!-- modals -->
  <TheNewIssuerModal />
  <TheViewIssuerModal />
</template>

<script lang="ts" setup>
import TheIssuersToolbar from '@/components/ttp/TheIssuersToolbar.vue'
import TheIssuersTable from '@/components/ttp/TheIssuersTable.vue'
import TheNewIssuerModal from '@/components/ttp/TheNewIssuerModal.vue'
import TheViewIssuerModal from '@/components/ttp/TheViewIssuerModal.vue'

const heading = 'Issuers'
</script>

<style scoped>
#issuers {
  min-height: calc(100vh - 140px);
}
.heading {
  padding: 5px;
  padding-left: 15px;
  color: black;
}
</style>