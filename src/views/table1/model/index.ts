import { ref, reactive } from "vue";
import type { TableColumns } from "@pureadmin/table";

export function getData() {
  // 表头标签
  const columns: Array<TableColumns> = [
    {
      label: "Date",
      prop: "date"
    },
    {
      label: "Name",
      prop: "name"
    },
    {
      label: "Address",
      prop: "address"
    }
  ];
  // 表格数据
  const tableData = [
    {
      date: "2016-05-03",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles"
    },
    {
      date: "2016-05-02",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles"
    },
    {
      date: "2016-05-04",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles"
    },
    {
      date: "2016-05-01",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles"
    }
  ];
  // 表格加载
  const loading = ref(true);
  // 分页数据
  const pagination = reactive({
    pageSize: 5,
    currentPage: 1,
    background: true,
    total: tableData.length
  });
  setTimeout(() => {
    loading.value = false;
  }, 1500);

  const searchData = reactive({
    input: {
      label: "输入框",
      val: "",
      showIcon: "ep:search"
    },
    sortBy: {
      label: "类型选择",
      val: "",
      type: "select",
      list: [
        {
          label: "类型一",
          val: 1
        },
        {
          label: "类型二",
          val: 2
        },
        {
          label: "类型三",
          val: 5
        }
      ]
    },
    dates: { label: "时间控件", val: "", type: "timerange" }
  });
  return { columns, tableData, loading, pagination, searchData };
}
