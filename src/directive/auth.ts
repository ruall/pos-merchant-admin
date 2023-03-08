import { App, DirectiveBinding } from "vue";

const actionPermission = (el: HTMLElement, binding: DirectiveBinding) => {
  // 获取页面按钮权限
  const value: Array<string> =
    typeof binding.value === "string" ? [binding.value] : binding.value;
  const all_permission = "*:*:*";
  // 获取按钮权限列表
  let permissions: any = sessionStorage.getItem("auths");
  if (permissions) {
    permissions = JSON.parse(permissions);
  }
  if (value && value instanceof Array && value.length > 0) {
    const permissionFlag = value;

    const hasPermissions = permissions.some(permission => {
      return (
        all_permission === permission || permissionFlag.includes(permission)
      );
    });

    if (!hasPermissions) {
      el.parentNode && el.parentNode.removeChild(el);
    }
  }
};

export default (app: App<Element>): void => {
  app.directive("auth", {
    mounted: (el, binding) => actionPermission(el, binding)
  });
};
