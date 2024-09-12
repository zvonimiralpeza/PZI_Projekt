import { _ as _export_sfc, T as VBtn, a as __nuxt_component_0 } from '../server.mjs';
import { withCtx, createTextVNode, useSSRContext } from 'file://C:/Users/DT%20User/Desktop/ProjektPZI/frontend/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file://C:/Users/DT%20User/Desktop/ProjektPZI/frontend/node_modules/vue/server-renderer/index.mjs';
import 'file://C:/Users/DT%20User/Desktop/ProjektPZI/frontend/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/DT%20User/Desktop/ProjektPZI/frontend/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/DT%20User/Desktop/ProjektPZI/frontend/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/DT%20User/Desktop/ProjektPZI/frontend/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/DT%20User/Desktop/ProjektPZI/frontend/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/DT%20User/Desktop/ProjektPZI/frontend/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/DT%20User/Desktop/ProjektPZI/frontend/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/DT%20User/Desktop/ProjektPZI/frontend/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/DT%20User/Desktop/ProjektPZI/frontend/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://C:/Users/DT%20User/Desktop/ProjektPZI/frontend/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/DT%20User/Desktop/ProjektPZI/frontend/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/DT%20User/Desktop/ProjektPZI/frontend/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/DT%20User/Desktop/ProjektPZI/frontend/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/DT%20User/Desktop/ProjektPZI/frontend/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/DT%20User/Desktop/ProjektPZI/frontend/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/DT%20User/Desktop/ProjektPZI/frontend/node_modules/unstorage/drivers/fs.mjs';
import 'file://C:/Users/DT%20User/Desktop/ProjektPZI/frontend/node_modules/unstorage/drivers/memory.mjs';
import 'file://C:/Users/DT%20User/Desktop/ProjektPZI/frontend/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file://C:/Users/DT%20User/Desktop/ProjektPZI/frontend/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/DT%20User/Desktop/ProjektPZI/frontend/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/DT%20User/Desktop/ProjektPZI/frontend/node_modules/pathe/dist/index.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}><p>TEST!!!</p>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/kupovina" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Link za kupovinu`);
      } else {
        return [
          createTextVNode("Link za kupovinu")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VBtn, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Glavna stranica`);
      } else {
        return [
          createTextVNode("Glavna stranica")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/test.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const test = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { test as default };
//# sourceMappingURL=test-6cbdffdd.mjs.map
