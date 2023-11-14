import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { useSSRContext } from "vue";
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
const UserDetails_vue_vue_type_style_index_0_scoped_291d76f6_lang = "";
const _sfc_main = {
  data() {
    return {
      users: [],
      // Placeholder for user data
      searchTerm: "",
      selectedUser: null
    };
  },
  computed: {
    filteredUsers() {
      return this.users.filter(
        (user) => user.username.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  },
  methods: {
    openModal(user) {
      this.selectedUser = user;
    },
    closeModal() {
      this.selectedUser = null;
    },
    generateReport(user) {
      console.log(`Generating report for user: ${user.username}`);
    }
  },
  mounted() {
    this.users = [
      { id: 1, username: "user1", email: "user1@email.com", phone: "123456789", creationDate: "2023-01-01" }
      // Add more users...
    ];
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-291d76f6><h1 data-v-291d76f6>User Details</h1><input${ssrRenderAttr("value", $data.searchTerm)} placeholder="Search user..." data-v-291d76f6><table data-v-291d76f6><thead data-v-291d76f6><tr data-v-291d76f6><th data-v-291d76f6>Username</th><th data-v-291d76f6>Email</th><th data-v-291d76f6>Phone</th><th data-v-291d76f6>ID</th><th data-v-291d76f6>Creation Date</th></tr></thead><tbody data-v-291d76f6><!--[-->`);
  ssrRenderList($options.filteredUsers, (user) => {
    _push(`<tr data-v-291d76f6><td data-v-291d76f6>${ssrInterpolate(user.username)}</td><td data-v-291d76f6>${ssrInterpolate(user.email)}</td><td data-v-291d76f6>${ssrInterpolate(user.phone)}</td><td data-v-291d76f6>${ssrInterpolate(user.id)}</td><td data-v-291d76f6>${ssrInterpolate(user.creationDate)}</td></tr>`);
  });
  _push(`<!--]--></tbody></table>`);
  if ($data.selectedUser) {
    _push(`<div class="modal" data-v-291d76f6><button data-v-291d76f6>Close</button><button data-v-291d76f6>Generate Report</button></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/UserDetails.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const UserDetails = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-291d76f6"]]);
export {
  UserDetails as default
};
//# sourceMappingURL=UserDetails-de3037d8.js.map
