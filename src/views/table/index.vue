<template>
  <el-card shadow="never">
    <pure-table
      border
      :loading="loading"
      :data="tableData"
      :columns="columns"
      :pagination="pagination"
    />
    <el-button v-auth="'btn_add'">新增按钮</el-button>
    <el-button v-auth="'btn_edit'">修改按钮</el-button>
    <el-button v-auth="'btn_delete'">删除按钮</el-button>
  </el-card>
</template>

<script setup lang="ts">
import { getData } from "./model";
defineOptions({
  name: "Table"
});

const { loading, tableData, columns, pagination } = getData();
</script>

<style lang="scss" scoped></style>
