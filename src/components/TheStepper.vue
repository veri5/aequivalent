<template>
  <el-row>
    <el-col>
      <el-card>
        <el-steps :active="1" finish-status="success" align-center>
          <el-step title="Verifive" description="Register a new legal element" />
          <el-step title="Candidate" description="Request a new verification" />
          <el-step title="Step 3" description="Some description" />
          <el-step title="Step 4" description="Some description" />
          <el-step title="Step 5" description="Some description" />
          <el-step title="Step 6" description="Some description" />
          <el-step title="Step 7" description="Some description" />
        </el-steps>
      </el-card>
    </el-col>
  </el-row>
</template>
