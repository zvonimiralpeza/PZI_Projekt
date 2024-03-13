import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
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
import "@vue/devtools-api";
import "devalue";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ style: { "padding": "20px", "padding-top": "80px", "background-color": "#ffffff" } }, _attrs))}><p style="${ssrRenderStyle({ "font-style": "" })}"><br> Dobrodošli u vašu destinaciju za vrhunsku online prodaju i kupovinu umjetnina. <br><br> U srcu naše misije je strast prema umjetnosti i želja da približimo ovo jedinstveno iskustvo ljubiteljima umjetnosti širom svijeta. <br><br> Ovdje predstavljamo inovativnu platformu koja spaja stručnost u umjetnosti s prednostima suvremene tehnologije, stvarajući tako prostor gdje se umjetnici mogu izraziti, a ljubitelji umjetnosti mogu pronaći inspiraciju i jedinstvena umjetnička djela. <br><br> Naša vizija je stvoriti most između talentiranih umjetnika i entuzijastičnih kolekcionara, nudeći im siguran, jednostavan i stručan način za istraživanje, pregledavanje i stjecanje umjetničkih djela. Mi nismo samo online trgovina; mi smo zajednica koja slavi raznolikost umjetničkih izraza i podržava umjetnike na njihovom putu. <br><br> Ovdje ćete pronaći širok spektar umjetničkih stilova, tehnika i formi, od slika i skulptura do digitalnih umjetničkih djela. Naša stranica nudi korisnicima ne samo priliku za kupovinu jedinstvenih umjetničkih djela, već i prostor za povezivanje s umjetnicima, sudjelovanje u raznim umjetničkim događanjima i stvaranje zajednice koja cijeni ljepotu i kreativnost. <br><br> Započnite svoju umjetničku avanturu i doživite spoj strasti prema umjetnosti i suvremenog načina trgovine. <br><br> S nama, svaka slika ima svoju priču, a svaki kolekcionar pronalazi svoj dragulj. </p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Onama.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Onama = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Onama as default
};
//# sourceMappingURL=Onama-f6085470.js.map
