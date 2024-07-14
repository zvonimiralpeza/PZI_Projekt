import { aO as navigateTo, aE as mapWritableState, aH as useUsersStore, _ as _export_sfc, V as VContainer, b as VRow, d as VCol, aG as VBtn } from '../server.mjs';
import { withCtx, createTextVNode, createVNode, withModifiers, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { V as VCard, c as VCardTitle, a as VCardText } from './VCard-de1dd77a.mjs';
import { V as VForm } from './VForm-45f4812a.mjs';
import { a as VTextField } from './VTextField-bc00c482.mjs';
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
      email: "",
      lozinka: ""
    };
  },
  methods: {
    async submitForm() {
      try {
        if (!this.email || !this.lozinka) {
          alert("Korisnik ne postoji. Molimo provjerite va\u0161e podatke ili se registrirajte.");
          return;
        }
        const response = await $fetch(`${this.$config.public.BASE_URL}/login`, {
          method: "POST",
          body: {
            email: this.email,
            password: this.lozinka
          }
        });
        this.user = response.user;
        localStorage.setItem("user", JSON.stringify(response));
        navigateTo("/");
      } catch (error) {
        console.log(error);
      }
    }
  },
  computed: {
    ...mapWritableState(useUsersStore, ["user"])
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(VContainer, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VRow, { justify: "center" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCol, {
                cols: "12",
                sm: "8",
                md: "6"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VCard, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VCardTitle, {
                            class: "text-h5 text-center",
                            style: { "color": "#2b9300" }
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Prijava`);
                              } else {
                                return [
                                  createTextVNode("Prijava")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCardText, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VForm, { onSubmit: $options.submitForm }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(ssrRenderComponent(VTextField, {
                                        modelValue: $data.email,
                                        "onUpdate:modelValue": ($event) => $data.email = $event,
                                        label: "Email",
                                        required: "",
                                        persistent: ""
                                      }, null, _parent7, _scopeId6));
                                      _push7(ssrRenderComponent(VTextField, {
                                        modelValue: $data.lozinka,
                                        "onUpdate:modelValue": ($event) => $data.lozinka = $event,
                                        label: "Lozinka",
                                        type: "password",
                                        required: "",
                                        persistent: "",
                                        autocomplete: "off"
                                      }, null, _parent7, _scopeId6));
                                      _push7(ssrRenderComponent(VBtn, {
                                        type: "submit",
                                        color: "green"
                                      }, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(`Prijavi se`);
                                          } else {
                                            return [
                                              createTextVNode("Prijavi se")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                    } else {
                                      return [
                                        createVNode(VTextField, {
                                          modelValue: $data.email,
                                          "onUpdate:modelValue": ($event) => $data.email = $event,
                                          label: "Email",
                                          required: "",
                                          persistent: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(VTextField, {
                                          modelValue: $data.lozinka,
                                          "onUpdate:modelValue": ($event) => $data.lozinka = $event,
                                          label: "Lozinka",
                                          type: "password",
                                          required: "",
                                          persistent: "",
                                          autocomplete: "off"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(VBtn, {
                                          type: "submit",
                                          color: "green"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Prijavi se")
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(VForm, {
                                    onSubmit: withModifiers($options.submitForm, ["prevent"])
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: $data.email,
                                        "onUpdate:modelValue": ($event) => $data.email = $event,
                                        label: "Email",
                                        required: "",
                                        persistent: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(VTextField, {
                                        modelValue: $data.lozinka,
                                        "onUpdate:modelValue": ($event) => $data.lozinka = $event,
                                        label: "Lozinka",
                                        type: "password",
                                        required: "",
                                        persistent: "",
                                        autocomplete: "off"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(VBtn, {
                                        type: "submit",
                                        color: "green"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Prijavi se")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["onSubmit"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VCardTitle, {
                              class: "text-h5 text-center",
                              style: { "color": "#2b9300" }
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Prijava")
                              ]),
                              _: 1
                            }),
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createVNode(VForm, {
                                  onSubmit: withModifiers($options.submitForm, ["prevent"])
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: $data.email,
                                      "onUpdate:modelValue": ($event) => $data.email = $event,
                                      label: "Email",
                                      required: "",
                                      persistent: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(VTextField, {
                                      modelValue: $data.lozinka,
                                      "onUpdate:modelValue": ($event) => $data.lozinka = $event,
                                      label: "Lozinka",
                                      type: "password",
                                      required: "",
                                      persistent: "",
                                      autocomplete: "off"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(VBtn, {
                                      type: "submit",
                                      color: "green"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Prijavi se")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["onSubmit"])
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VCard, null, {
                        default: withCtx(() => [
                          createVNode(VCardTitle, {
                            class: "text-h5 text-center",
                            style: { "color": "#2b9300" }
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Prijava")
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(VForm, {
                                onSubmit: withModifiers($options.submitForm, ["prevent"])
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: $data.email,
                                    "onUpdate:modelValue": ($event) => $data.email = $event,
                                    label: "Email",
                                    required: "",
                                    persistent: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(VTextField, {
                                    modelValue: $data.lozinka,
                                    "onUpdate:modelValue": ($event) => $data.lozinka = $event,
                                    label: "Lozinka",
                                    type: "password",
                                    required: "",
                                    persistent: "",
                                    autocomplete: "off"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(VBtn, {
                                    type: "submit",
                                    color: "green"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Prijavi se")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["onSubmit"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VCol, {
                  cols: "12",
                  sm: "8",
                  md: "6"
                }, {
                  default: withCtx(() => [
                    createVNode(VCard, null, {
                      default: withCtx(() => [
                        createVNode(VCardTitle, {
                          class: "text-h5 text-center",
                          style: { "color": "#2b9300" }
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Prijava")
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(VForm, {
                              onSubmit: withModifiers($options.submitForm, ["prevent"])
                            }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  modelValue: $data.email,
                                  "onUpdate:modelValue": ($event) => $data.email = $event,
                                  label: "Email",
                                  required: "",
                                  persistent: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(VTextField, {
                                  modelValue: $data.lozinka,
                                  "onUpdate:modelValue": ($event) => $data.lozinka = $event,
                                  label: "Lozinka",
                                  type: "password",
                                  required: "",
                                  persistent: "",
                                  autocomplete: "off"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(VBtn, {
                                  type: "submit",
                                  color: "green"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Prijavi se")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["onSubmit"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(VRow, { justify: "center" }, {
            default: withCtx(() => [
              createVNode(VCol, {
                cols: "12",
                sm: "8",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, null, {
                    default: withCtx(() => [
                      createVNode(VCardTitle, {
                        class: "text-h5 text-center",
                        style: { "color": "#2b9300" }
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Prijava")
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(VForm, {
                            onSubmit: withModifiers($options.submitForm, ["prevent"])
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: $data.email,
                                "onUpdate:modelValue": ($event) => $data.email = $event,
                                label: "Email",
                                required: "",
                                persistent: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(VTextField, {
                                modelValue: $data.lozinka,
                                "onUpdate:modelValue": ($event) => $data.lozinka = $event,
                                label: "Lozinka",
                                type: "password",
                                required: "",
                                persistent: "",
                                autocomplete: "off"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(VBtn, {
                                type: "submit",
                                color: "green"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Prijavi se")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["onSubmit"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { login as default };
//# sourceMappingURL=login-65df76d8.mjs.map
