// import { $t } from "@/plugins/i18n";

export default {
  path: "/shop",
  meta: {
    title: "店铺",
    // showLink: false,
    rank: 12
  },
  children: [
    {
      path: "/shop/organization",
      meta: {
        title: "组织管理"
      },
      children: [
        {
          path: "/shop/organization",
          meta: {
            title: "组织机构"
          },
          component: () => import("@/views/shop/organization.vue"),
        },
        {
          path: "/shop/staff",
          meta: {
            title: "员工管理"
          },
          component: () => import("@/views/shop/staff.vue"),
        },
        {
          path: "/shop/role",
          meta: {
            title: "角色管理"
          },
          component: () => import("@/views/shop/role.vue"),
        },
        {
          path: "/shop/department",
          meta: {
            title: "部门管理"
          },
          component: () => import("@/views/shop/department.vue"),
        },
        {
          path: "/shop/store",
          meta: {
            title: "店铺管理"
          },
          component: () => import("@/views/shop/store.vue"),
        },
        {
          path: "/shop/address",
          meta: {
            title: "商家地址库"
          },
          component: () => import("@/views/shop/address.vue"),
        },
        {
          path: "/shop/passowrd",
          meta: {
            title: "修改密码"
          },
          component: () => import("@/views/shop/passowrd.vue"),
        },
        {
          path: "/shop/distribution",
          meta: {
            title: "配送设置"
          },
          component: () => import("@/views/shop/distribution.vue"),
        },
      ]
    },
  ]
} as RouteConfigsTable;
