import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { _ as _export_sfc } from '../server.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    submitForm() {
      console.log("Creating account:", this.username);
      console.log("Password:", this.password);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-2d5f3489><h1 data-v-2d5f3489>Account Creation</h1><form data-v-2d5f3489><label for="username" data-v-2d5f3489>Username:</label><input${ssrRenderAttr("value", $data.username)} type="text" id="username" required data-v-2d5f3489><label for="password" data-v-2d5f3489>Password:</label><input${ssrRenderAttr("value", $data.password)} type="password" id="password" required data-v-2d5f3489><button type="submit" data-v-2d5f3489>Create Account</button></form></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/AccountCreation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AccountCreation = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-2d5f3489"]]);

export { AccountCreation as default };
//# sourceMappingURL=AccountCreation-16d914be.mjs.map
