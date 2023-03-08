<template>
  <el-card shadow="never">
    <pos-search
      :data="searchData"
      :show-label="false"
      showExport
      @data-search="searchFun"
      @data-export="exportExcels" />
    <pure-table
      border
      :loading="loading"
      :data="tableData"
      :columns="columns"
      :pagination="pagination"
  /></el-card>
</template>

<script setup lang="ts">
import { posSearch } from "@/components/base-components";
import { getData } from "./model";
defineOptions({
  name: "Table1"
});

const { loading, tableData, columns, pagination, searchData } = getData();
const searchFun = () => {
  //点击搜索按钮
};
const exportExcels = () => {
  //点击导出按钮
};
</script>

<style lang="scss" scoped></style>
