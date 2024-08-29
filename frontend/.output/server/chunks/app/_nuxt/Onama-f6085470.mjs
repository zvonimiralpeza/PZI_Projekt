import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle } from 'vue/server-renderer';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ style: { "padding": "20px", "padding-top": "80px", "background-color": "#ffffff" } }, _attrs))}><p style="${ssrRenderStyle({ "font-style": "" })}"><br> Dobrodo\u0161li u va\u0161u destinaciju za vrhunsku online prodaju i kupovinu umjetnina. <br><br> U srcu na\u0161e misije je strast prema umjetnosti i \u017Eelja da pribli\u017Eimo ovo jedinstveno iskustvo ljubiteljima umjetnosti \u0161irom svijeta. <br><br> Ovdje predstavljamo inovativnu platformu koja spaja stru\u010Dnost u umjetnosti s prednostima suvremene tehnologije, stvaraju\u0107i tako prostor gdje se umjetnici mogu izraziti, a ljubitelji umjetnosti mogu prona\u0107i inspiraciju i jedinstvena umjetni\u010Dka djela. <br><br> Na\u0161a vizija je stvoriti most izme\u0111u talentiranih umjetnika i entuzijasti\u010Dnih kolekcionara, nude\u0107i im siguran, jednostavan i stru\u010Dan na\u010Din za istra\u017Eivanje, pregledavanje i stjecanje umjetni\u010Dkih djela. Mi nismo samo online trgovina; mi smo zajednica koja slavi raznolikost umjetni\u010Dkih izraza i podr\u017Eava umjetnike na njihovom putu. <br><br> Ovdje \u0107ete prona\u0107i \u0161irok spektar umjetni\u010Dkih stilova, tehnika i formi, od slika i skulptura do digitalnih umjetni\u010Dkih djela. Na\u0161a stranica nudi korisnicima ne samo priliku za kupovinu jedinstvenih umjetni\u010Dkih djela, ve\u0107 i prostor za povezivanje s umjetnicima, sudjelovanje u raznim umjetni\u010Dkim doga\u0111anjima i stvaranje zajednice koja cijeni ljepotu i kreativnost. <br><br> Zapo\u010Dnite svoju umjetni\u010Dku avanturu i do\u017Eivite spoj strasti prema umjetnosti i suvremenog na\u010Dina trgovine. <br><br> S nama, svaka slika ima svoju pri\u010Du, a svaki kolekcionar pronalazi svoj dragulj. </p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Onama.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Onama = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Onama as default };
//# sourceMappingURL=Onama-f6085470.mjs.map
