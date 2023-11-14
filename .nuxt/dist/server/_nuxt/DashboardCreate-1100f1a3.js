import UserDetails from "./UserDetails-de3037d8.js";
import AccountCreation from "./AccountCreation-16d914be.js";
import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "destr";
import "defu";
import "klona";
import "devalue";
const DashboardCreate_vue_vue_type_style_index_0_scoped_3c2e7e17_lang = "";
const _sfc_main = {
  components: {
    UserDetails,
    AccountCreation
  },
  data() {
    return {
      activeTab: "userDetails"
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UserDetails = resolveComponent("UserDetails");
  const _component_AccountCreation = resolveComponent("AccountCreation");
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-3c2e7e17><div class="tabs" data-v-3c2e7e17><button class="${ssrRenderClass({ "active": $data.activeTab === "userDetails" })}" data-v-3c2e7e17>User Details</button><button class="${ssrRenderClass({ "active": $data.activeTab === "accountCreation" })}" data-v-3c2e7e17>Account Creation</button></div>`);
  if ($data.activeTab === "userDetails") {
    _push(`<div data-v-3c2e7e17>`);
    _push(ssrRenderComponent(_component_UserDetails, null, null, _parent));
    _push(`</div>`);
  } else if ($data.activeTab === "accountCreation") {
    _push(`<div data-v-3c2e7e17>`);
    _push(ssrRenderComponent(_component_AccountCreation, null, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/DashboardCreate.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DashboardCreate = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-3c2e7e17"]]);
export {
  DashboardCreate as default
};
//# sourceMappingURL=DashboardCreate-1100f1a3.js.map
