import { ref, shallowRef, watch, onScopeDispose, createVNode, mergeProps, nextTick, withCtx, createTextVNode, toDisplayString, withModifiers, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { j as propsFactory, G as makeLocationProps, H as makePositionProps, l as makeRoundedProps, s as makeVariantProps, q as makeThemeProps, ah as omit, g as genericComponent, U as useProxiedModel, O as useLocation, P as usePosition, t as provideTheme, v as useVariant, x as useRounded, aL as refElement, u as useRender, A as genOverlays, aO as VProgressLinear, B as VDefaultsProvider, _ as _export_sfc, V as VContainer, b as VRow, d as VCol, T as VBtn } from "../server.mjs";
import { V as VCard, b as VCardTitle, a as VCardText } from "./VCard-33e43958.js";
import { V as VForm } from "./VForm-152f4679.js";
import { f as forwardRefs, V as VTextField } from "./VTextField-f228ec7c.js";
import { m as makeVOverlayProps, u as useScopeId, a as VOverlay } from "./VOverlay-c11f491e.js";
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
const registracija_vue_vue_type_style_index_0_scoped_e213c7bb_lang = "";
const VSnackbar$1 = "";
function useCountdown(milliseconds) {
  const time = shallowRef(milliseconds);
  let timer = -1;
  function clear() {
    clearInterval(timer);
  }
  function reset() {
    clear();
    nextTick(() => time.value = milliseconds);
  }
  function start(el) {
    const style = el ? getComputedStyle(el) : {
      transitionDuration: 0.2
    };
    const interval = parseFloat(style.transitionDuration) * 1e3 || 200;
    clear();
    if (time.value <= 0)
      return;
    const startTime = performance.now();
    timer = window.setInterval(() => {
      const elapsed = performance.now() - startTime + interval;
      time.value = Math.max(milliseconds - elapsed, 0);
      if (time.value <= 0)
        clear();
    }, interval);
  }
  onScopeDispose(clear);
  return {
    clear,
    time,
    start,
    reset
  };
}
const makeVSnackbarProps = propsFactory({
  multiLine: Boolean,
  text: String,
  timer: [Boolean, String],
  timeout: {
    type: [Number, String],
    default: 5e3
  },
  vertical: Boolean,
  ...makeLocationProps({
    location: "bottom"
  }),
  ...makePositionProps(),
  ...makeRoundedProps(),
  ...makeVariantProps(),
  ...makeThemeProps(),
  ...omit(makeVOverlayProps({
    transition: "v-snackbar-transition"
  }), ["persistent", "noClickAnimation", "scrim", "scrollStrategy"])
}, "VSnackbar");
const VSnackbar = genericComponent()({
  name: "VSnackbar",
  props: makeVSnackbarProps(),
  emits: {
    "update:modelValue": (v) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const isActive = useProxiedModel(props, "modelValue");
    const {
      locationStyles
    } = useLocation(props);
    const {
      positionClasses
    } = usePosition(props);
    const {
      scopeId
    } = useScopeId();
    const {
      themeClasses
    } = provideTheme(props);
    const {
      colorClasses,
      colorStyles,
      variantClasses
    } = useVariant(props);
    const {
      roundedClasses
    } = useRounded(props);
    const countdown = useCountdown(Number(props.timeout));
    const overlay = ref();
    const timerRef = ref();
    const isHovering = shallowRef(false);
    watch(isActive, startTimeout);
    watch(() => props.timeout, startTimeout);
    let activeTimeout = -1;
    function startTimeout() {
      countdown.reset();
      window.clearTimeout(activeTimeout);
      const timeout = Number(props.timeout);
      if (!isActive.value || timeout === -1)
        return;
      const element = refElement(timerRef.value);
      countdown.start(element);
      activeTimeout = window.setTimeout(() => {
        isActive.value = false;
      }, timeout);
    }
    function clearTimeout() {
      countdown.reset();
      window.clearTimeout(activeTimeout);
    }
    function onPointerenter() {
      isHovering.value = true;
      clearTimeout();
    }
    function onPointerleave() {
      isHovering.value = false;
      startTimeout();
    }
    useRender(() => {
      const overlayProps = VOverlay.filterProps(props);
      const hasContent = !!(slots.default || slots.text || props.text);
      return createVNode(VOverlay, mergeProps({
        "ref": overlay,
        "class": ["v-snackbar", {
          "v-snackbar--active": isActive.value,
          "v-snackbar--multi-line": props.multiLine && !props.vertical,
          "v-snackbar--timer": !!props.timer,
          "v-snackbar--vertical": props.vertical
        }, positionClasses.value, props.class],
        "style": props.style
      }, overlayProps, {
        "modelValue": isActive.value,
        "onUpdate:modelValue": ($event) => isActive.value = $event,
        "contentProps": mergeProps({
          class: ["v-snackbar__wrapper", themeClasses.value, colorClasses.value, roundedClasses.value, variantClasses.value],
          style: [locationStyles.value, colorStyles.value],
          onPointerenter,
          onPointerleave
        }, overlayProps.contentProps),
        "persistent": true,
        "noClickAnimation": true,
        "scrim": false,
        "scrollStrategy": "none",
        "_disableGlobalStack": true
      }, scopeId), {
        default: () => {
          var _a, _b;
          return [genOverlays(false, "v-snackbar"), props.timer && createVNode("div", {
            "key": "timer",
            "class": "v-snackbar__timer"
          }, [createVNode(VProgressLinear, {
            "ref": timerRef,
            "active": !isHovering.value,
            "color": typeof props.timer === "string" ? props.timer : "info",
            "max": props.timeout,
            "model-value": countdown.time.value
          }, null)]), hasContent && createVNode("div", {
            "key": "content",
            "class": "v-snackbar__content",
            "role": "status",
            "aria-live": "polite"
          }, [((_a = slots.text) == null ? void 0 : _a.call(slots)) ?? props.text, (_b = slots.default) == null ? void 0 : _b.call(slots)]), slots.actions && createVNode(VDefaultsProvider, {
            "defaults": {
              VBtn: {
                variant: "text",
                ripple: false,
                slim: true
              }
            }
          }, {
            default: () => [createVNode("div", {
              "class": "v-snackbar__actions"
            }, [slots.actions()])]
          })];
        },
        activator: slots.activator
      });
    });
    return forwardRefs({}, overlay);
  }
});
const _sfc_main = {
  data() {
    return {
      ime: "",
      prezime: "",
      brojTelefona: "",
      email: "",
      lozinka: "",
      snackbar: {
        show: false,
        message: "",
        color: ""
      }
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await fetch(`${this.$config.public.BASE_URL}/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            first_name: this.ime,
            last_name: this.prezime,
            email: this.email,
            phone: this.brojTelefona,
            password: this.lozinka,
            role: "Normal"
          })
        });
        if (response.ok) {
          this.snackbar.message = "Registracija uspješna!";
          this.snackbar.color = "green";
          this.snackbar.show = true;
          this.ime = "";
          this.prezime = "";
          this.brojTelefona = "";
          this.email = "";
          this.lozinka = "";
        } else {
          const error = await response.json();
          this.snackbar.message = `Registracija neuspješna: ${error.message}`;
          this.snackbar.color = "red";
          this.snackbar.show = true;
        }
      } catch (error) {
        console.error("Error:", error);
        this.snackbar.message = "Greška pri registraciji. Pokušajte ponovo.";
        this.snackbar.color = "red";
        this.snackbar.show = true;
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-e213c7bb>`);
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
                    _push4(ssrRenderComponent(VCard, { class: "small-card" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VCardTitle, {
                            class: "text-h6 text-center",
                            style: { "font-family": "", "color": "#2b9300" }
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Registracija`);
                              } else {
                                return [
                                  createTextVNode("Registracija")
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
                                        modelValue: $data.ime,
                                        "onUpdate:modelValue": ($event) => $data.ime = $event,
                                        label: "Ime",
                                        required: "",
                                        persistent: ""
                                      }, null, _parent7, _scopeId6));
                                      _push7(ssrRenderComponent(VTextField, {
                                        modelValue: $data.prezime,
                                        "onUpdate:modelValue": ($event) => $data.prezime = $event,
                                        label: "Prezime",
                                        required: "",
                                        persistent: ""
                                      }, null, _parent7, _scopeId6));
                                      _push7(ssrRenderComponent(VTextField, {
                                        modelValue: $data.brojTelefona,
                                        "onUpdate:modelValue": ($event) => $data.brojTelefona = $event,
                                        label: "Broj telefona",
                                        required: "",
                                        persistent: ""
                                      }, null, _parent7, _scopeId6));
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
                                        autocomplete: "current-password"
                                      }, null, _parent7, _scopeId6));
                                      _push7(ssrRenderComponent(VBtn, {
                                        type: "submit",
                                        color: "green"
                                      }, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(`Potvrdi`);
                                          } else {
                                            return [
                                              createTextVNode("Potvrdi")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                    } else {
                                      return [
                                        createVNode(VTextField, {
                                          modelValue: $data.ime,
                                          "onUpdate:modelValue": ($event) => $data.ime = $event,
                                          label: "Ime",
                                          required: "",
                                          persistent: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(VTextField, {
                                          modelValue: $data.prezime,
                                          "onUpdate:modelValue": ($event) => $data.prezime = $event,
                                          label: "Prezime",
                                          required: "",
                                          persistent: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(VTextField, {
                                          modelValue: $data.brojTelefona,
                                          "onUpdate:modelValue": ($event) => $data.brojTelefona = $event,
                                          label: "Broj telefona",
                                          required: "",
                                          persistent: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
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
                                          autocomplete: "current-password"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(VBtn, {
                                          type: "submit",
                                          color: "green"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Potvrdi")
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(`<br data-v-e213c7bb${_scopeId5}>`);
                                _push6(ssrRenderComponent(VSnackbar, {
                                  modelValue: $data.snackbar.show,
                                  "onUpdate:modelValue": ($event) => $data.snackbar.show = $event,
                                  color: $data.snackbar.color,
                                  top: ""
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`${ssrInterpolate($data.snackbar.message)} `);
                                      _push7(ssrRenderComponent(VBtn, {
                                        color: "white",
                                        text: "",
                                        onClick: ($event) => $data.snackbar.show = false
                                      }, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(`Close`);
                                          } else {
                                            return [
                                              createTextVNode("Close")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString($data.snackbar.message) + " ", 1),
                                        createVNode(VBtn, {
                                          color: "white",
                                          text: "",
                                          onClick: ($event) => $data.snackbar.show = false
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Close")
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"])
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
                                        modelValue: $data.ime,
                                        "onUpdate:modelValue": ($event) => $data.ime = $event,
                                        label: "Ime",
                                        required: "",
                                        persistent: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(VTextField, {
                                        modelValue: $data.prezime,
                                        "onUpdate:modelValue": ($event) => $data.prezime = $event,
                                        label: "Prezime",
                                        required: "",
                                        persistent: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(VTextField, {
                                        modelValue: $data.brojTelefona,
                                        "onUpdate:modelValue": ($event) => $data.brojTelefona = $event,
                                        label: "Broj telefona",
                                        required: "",
                                        persistent: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
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
                                        autocomplete: "current-password"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(VBtn, {
                                        type: "submit",
                                        color: "green"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Potvrdi")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["onSubmit"]),
                                  createVNode("br"),
                                  createVNode(VSnackbar, {
                                    modelValue: $data.snackbar.show,
                                    "onUpdate:modelValue": ($event) => $data.snackbar.show = $event,
                                    color: $data.snackbar.color,
                                    top: ""
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString($data.snackbar.message) + " ", 1),
                                      createVNode(VBtn, {
                                        color: "white",
                                        text: "",
                                        onClick: ($event) => $data.snackbar.show = false
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Close")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"])
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue", "color"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VCardTitle, {
                              class: "text-h6 text-center",
                              style: { "font-family": "", "color": "#2b9300" }
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Registracija")
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
                                      modelValue: $data.ime,
                                      "onUpdate:modelValue": ($event) => $data.ime = $event,
                                      label: "Ime",
                                      required: "",
                                      persistent: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(VTextField, {
                                      modelValue: $data.prezime,
                                      "onUpdate:modelValue": ($event) => $data.prezime = $event,
                                      label: "Prezime",
                                      required: "",
                                      persistent: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(VTextField, {
                                      modelValue: $data.brojTelefona,
                                      "onUpdate:modelValue": ($event) => $data.brojTelefona = $event,
                                      label: "Broj telefona",
                                      required: "",
                                      persistent: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
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
                                      autocomplete: "current-password"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(VBtn, {
                                      type: "submit",
                                      color: "green"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Potvrdi")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["onSubmit"]),
                                createVNode("br"),
                                createVNode(VSnackbar, {
                                  modelValue: $data.snackbar.show,
                                  "onUpdate:modelValue": ($event) => $data.snackbar.show = $event,
                                  color: $data.snackbar.color,
                                  top: ""
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString($data.snackbar.message) + " ", 1),
                                    createVNode(VBtn, {
                                      color: "white",
                                      text: "",
                                      onClick: ($event) => $data.snackbar.show = false
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Close")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue", "color"])
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
                      createVNode(VCard, { class: "small-card" }, {
                        default: withCtx(() => [
                          createVNode(VCardTitle, {
                            class: "text-h6 text-center",
                            style: { "font-family": "", "color": "#2b9300" }
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Registracija")
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
                                    modelValue: $data.ime,
                                    "onUpdate:modelValue": ($event) => $data.ime = $event,
                                    label: "Ime",
                                    required: "",
                                    persistent: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(VTextField, {
                                    modelValue: $data.prezime,
                                    "onUpdate:modelValue": ($event) => $data.prezime = $event,
                                    label: "Prezime",
                                    required: "",
                                    persistent: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(VTextField, {
                                    modelValue: $data.brojTelefona,
                                    "onUpdate:modelValue": ($event) => $data.brojTelefona = $event,
                                    label: "Broj telefona",
                                    required: "",
                                    persistent: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
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
                                    autocomplete: "current-password"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(VBtn, {
                                    type: "submit",
                                    color: "green"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Potvrdi")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["onSubmit"]),
                              createVNode("br"),
                              createVNode(VSnackbar, {
                                modelValue: $data.snackbar.show,
                                "onUpdate:modelValue": ($event) => $data.snackbar.show = $event,
                                color: $data.snackbar.color,
                                top: ""
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString($data.snackbar.message) + " ", 1),
                                  createVNode(VBtn, {
                                    color: "white",
                                    text: "",
                                    onClick: ($event) => $data.snackbar.show = false
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Close")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue", "color"])
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
                    createVNode(VCard, { class: "small-card" }, {
                      default: withCtx(() => [
                        createVNode(VCardTitle, {
                          class: "text-h6 text-center",
                          style: { "font-family": "", "color": "#2b9300" }
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Registracija")
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
                                  modelValue: $data.ime,
                                  "onUpdate:modelValue": ($event) => $data.ime = $event,
                                  label: "Ime",
                                  required: "",
                                  persistent: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(VTextField, {
                                  modelValue: $data.prezime,
                                  "onUpdate:modelValue": ($event) => $data.prezime = $event,
                                  label: "Prezime",
                                  required: "",
                                  persistent: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(VTextField, {
                                  modelValue: $data.brojTelefona,
                                  "onUpdate:modelValue": ($event) => $data.brojTelefona = $event,
                                  label: "Broj telefona",
                                  required: "",
                                  persistent: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
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
                                  autocomplete: "current-password"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(VBtn, {
                                  type: "submit",
                                  color: "green"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Potvrdi")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["onSubmit"]),
                            createVNode("br"),
                            createVNode(VSnackbar, {
                              modelValue: $data.snackbar.show,
                              "onUpdate:modelValue": ($event) => $data.snackbar.show = $event,
                              color: $data.snackbar.color,
                              top: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString($data.snackbar.message) + " ", 1),
                                createVNode(VBtn, {
                                  color: "white",
                                  text: "",
                                  onClick: ($event) => $data.snackbar.show = false
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Close")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue", "color"])
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
                  createVNode(VCard, { class: "small-card" }, {
                    default: withCtx(() => [
                      createVNode(VCardTitle, {
                        class: "text-h6 text-center",
                        style: { "font-family": "", "color": "#2b9300" }
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Registracija")
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
                                modelValue: $data.ime,
                                "onUpdate:modelValue": ($event) => $data.ime = $event,
                                label: "Ime",
                                required: "",
                                persistent: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(VTextField, {
                                modelValue: $data.prezime,
                                "onUpdate:modelValue": ($event) => $data.prezime = $event,
                                label: "Prezime",
                                required: "",
                                persistent: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(VTextField, {
                                modelValue: $data.brojTelefona,
                                "onUpdate:modelValue": ($event) => $data.brojTelefona = $event,
                                label: "Broj telefona",
                                required: "",
                                persistent: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
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
                                autocomplete: "current-password"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(VBtn, {
                                type: "submit",
                                color: "green"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Potvrdi")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["onSubmit"]),
                          createVNode("br"),
                          createVNode(VSnackbar, {
                            modelValue: $data.snackbar.show,
                            "onUpdate:modelValue": ($event) => $data.snackbar.show = $event,
                            color: $data.snackbar.color,
                            top: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString($data.snackbar.message) + " ", 1),
                              createVNode(VBtn, {
                                color: "white",
                                text: "",
                                onClick: ($event) => $data.snackbar.show = false
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Close")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue", "color"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/registracija.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const registracija = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-e213c7bb"]]);
export {
  registracija as default
};
//# sourceMappingURL=registracija-5e5da344.js.map
