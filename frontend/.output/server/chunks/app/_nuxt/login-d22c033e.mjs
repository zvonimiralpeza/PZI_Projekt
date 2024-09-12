import { h as createSimpleFunctional, j as propsFactory, I as IconValue, m as makeComponentProps, k as makeDensityProps, D as makeDimensionProps, E as makeElevationProps, G as makeLocationProps, H as makePositionProps, l as makeRoundedProps, o as makeTagProps, q as makeThemeProps, s as makeVariantProps, g as genericComponent, U as useProxiedModel, t as provideTheme, v as useVariant, w as useDensity, L as useDimension, M as useElevation, O as useLocation, P as usePosition, x as useRounded, a5 as useTextColor, $ as useLocale, A as genOverlays, z as VIcon, B as VDefaultsProvider, T as VBtn, u as useRender, aA as mapWritableState, aC as useUsersStore, _ as _export_sfc, V as VContainer, b as VRow, d as VCol } from '../server.mjs';
import { computed, toRef, createVNode, mergeProps, ref, watch, nextTick, withCtx, createTextVNode, toDisplayString, withModifiers, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { V as VCard, b as VCardTitle, a as VCardText, e as VCardActions } from './VCard-33e43958.mjs';
import { V as VForm } from './VForm-152f4679.mjs';
import { f as forwardRefs, V as VTextField } from './VTextField-f228ec7c.mjs';
import { m as makeVOverlayProps, u as useScopeId, a as VOverlay } from './VOverlay-c11f491e.mjs';
import { V as VDialogTransition } from './dialog-transition-180f9c04.mjs';
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

const VAlertTitle = createSimpleFunctional("v-alert-title");
const allowedTypes = ["success", "info", "warning", "error"];
const makeVAlertProps = propsFactory({
  border: {
    type: [Boolean, String],
    validator: (val) => {
      return typeof val === "boolean" || ["top", "end", "bottom", "start"].includes(val);
    }
  },
  borderColor: String,
  closable: Boolean,
  closeIcon: {
    type: IconValue,
    default: "$close"
  },
  closeLabel: {
    type: String,
    default: "$vuetify.close"
  },
  icon: {
    type: [Boolean, String, Function, Object],
    default: null
  },
  modelValue: {
    type: Boolean,
    default: true
  },
  prominent: Boolean,
  title: String,
  text: String,
  type: {
    type: String,
    validator: (val) => allowedTypes.includes(val)
  },
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeLocationProps(),
  ...makePositionProps(),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: "flat"
  })
}, "VAlert");
const VAlert = genericComponent()({
  name: "VAlert",
  props: makeVAlertProps(),
  emits: {
    "click:close": (e) => true,
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const isActive = useProxiedModel(props, "modelValue");
    const icon = computed(() => {
      var _a;
      if (props.icon === false)
        return void 0;
      if (!props.type)
        return props.icon;
      return (_a = props.icon) != null ? _a : `$${props.type}`;
    });
    const variantProps = computed(() => {
      var _a;
      return {
        color: (_a = props.color) != null ? _a : props.type,
        variant: props.variant
      };
    });
    const {
      themeClasses
    } = provideTheme(props);
    const {
      colorClasses,
      colorStyles,
      variantClasses
    } = useVariant(variantProps);
    const {
      densityClasses
    } = useDensity(props);
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      locationStyles
    } = useLocation(props);
    const {
      positionClasses
    } = usePosition(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(toRef(props, "borderColor"));
    const {
      t
    } = useLocale();
    const closeProps = computed(() => ({
      "aria-label": t(props.closeLabel),
      onClick(e) {
        isActive.value = false;
        emit("click:close", e);
      }
    }));
    return () => {
      const hasPrepend = !!(slots.prepend || icon.value);
      const hasTitle = !!(slots.title || props.title);
      const hasClose = !!(slots.close || props.closable);
      return isActive.value && createVNode(props.tag, {
        "class": ["v-alert", props.border && {
          "v-alert--border": !!props.border,
          [`v-alert--border-${props.border === true ? "start" : props.border}`]: true
        }, {
          "v-alert--prominent": props.prominent
        }, themeClasses.value, colorClasses.value, densityClasses.value, elevationClasses.value, positionClasses.value, roundedClasses.value, variantClasses.value, props.class],
        "style": [colorStyles.value, dimensionStyles.value, locationStyles.value, props.style],
        "role": "alert"
      }, {
        default: () => {
          var _a2;
          var _a, _b;
          return [genOverlays(false, "v-alert"), props.border && createVNode("div", {
            "key": "border",
            "class": ["v-alert__border", textColorClasses.value],
            "style": textColorStyles.value
          }, null), hasPrepend && createVNode("div", {
            "key": "prepend",
            "class": "v-alert__prepend"
          }, [!slots.prepend ? createVNode(VIcon, {
            "key": "prepend-icon",
            "density": props.density,
            "icon": icon.value,
            "size": props.prominent ? 44 : 28
          }, null) : createVNode(VDefaultsProvider, {
            "key": "prepend-defaults",
            "disabled": !icon.value,
            "defaults": {
              VIcon: {
                density: props.density,
                icon: icon.value,
                size: props.prominent ? 44 : 28
              }
            }
          }, slots.prepend)]), createVNode("div", {
            "class": "v-alert__content"
          }, [hasTitle && createVNode(VAlertTitle, {
            "key": "title"
          }, {
            default: () => {
              var _a3;
              var _a22;
              return [(_a3 = (_a22 = slots.title) == null ? void 0 : _a22.call(slots)) != null ? _a3 : props.title];
            }
          }), (_a2 = (_a = slots.text) == null ? void 0 : _a.call(slots)) != null ? _a2 : props.text, (_b = slots.default) == null ? void 0 : _b.call(slots)]), slots.append && createVNode("div", {
            "key": "append",
            "class": "v-alert__append"
          }, [slots.append()]), hasClose && createVNode("div", {
            "key": "close",
            "class": "v-alert__close"
          }, [!slots.close ? createVNode(VBtn, mergeProps({
            "key": "close-btn",
            "icon": props.closeIcon,
            "size": "x-small",
            "variant": "text"
          }, closeProps.value), null) : createVNode(VDefaultsProvider, {
            "key": "close-defaults",
            "defaults": {
              VBtn: {
                icon: props.closeIcon,
                size: "x-small",
                variant: "text"
              }
            }
          }, {
            default: () => {
              var _a22;
              return [(_a22 = slots.close) == null ? void 0 : _a22.call(slots, {
                props: closeProps.value
              })];
            }
          })])];
        }
      });
    };
  }
});
const makeVDialogProps = propsFactory({
  fullscreen: Boolean,
  retainFocus: {
    type: Boolean,
    default: true
  },
  scrollable: Boolean,
  ...makeVOverlayProps({
    origin: "center center",
    scrollStrategy: "block",
    transition: {
      component: VDialogTransition
    },
    zIndex: 2400
  })
}, "VDialog");
const VDialog = genericComponent()({
  name: "VDialog",
  props: makeVDialogProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const isActive = useProxiedModel(props, "modelValue");
    const {
      scopeId
    } = useScopeId();
    const overlay = ref();
    watch(isActive, async (val) => {
      var _a, _b;
      await nextTick();
      if (val) {
        (_a = overlay.value.contentEl) == null ? void 0 : _a.focus({
          preventScroll: true
        });
      } else {
        (_b = overlay.value.activatorEl) == null ? void 0 : _b.focus({
          preventScroll: true
        });
      }
    });
    const activatorProps = computed(() => mergeProps({
      "aria-haspopup": "dialog",
      "aria-expanded": String(isActive.value)
    }, props.activatorProps));
    useRender(() => {
      const overlayProps = VOverlay.filterProps(props);
      return createVNode(VOverlay, mergeProps({
        "ref": overlay,
        "class": ["v-dialog", {
          "v-dialog--fullscreen": props.fullscreen,
          "v-dialog--scrollable": props.scrollable
        }, props.class],
        "style": props.style
      }, overlayProps, {
        "modelValue": isActive.value,
        "onUpdate:modelValue": ($event) => isActive.value = $event,
        "aria-modal": "true",
        "activatorProps": activatorProps.value,
        "role": "dialog"
      }, scopeId), {
        activator: slots.activator,
        default: function() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return createVNode(VDefaultsProvider, {
            "root": "VDialog"
          }, {
            default: () => {
              var _a;
              return [(_a = slots.default) == null ? void 0 : _a.call(slots, ...args)];
            }
          });
        }
      });
    });
    return forwardRefs({}, overlay);
  }
});
const _sfc_main = {
  data() {
    return {
      email: "",
      lozinka: "",
      message: "",
      // Poruka za korisnika
      alertType: "",
      // Tip poruke: 'success' ili 'error'
      isSuccessDialogOpen: false
      // Stanje dijaloga
    };
  },
  methods: {
    async submitForm() {
      try {
        if (!this.email || !this.lozinka) {
          this.message = "Molimo unesite sve podatke.";
          this.alertType = "error";
          return;
        }
        const response = await $fetch(`${this.$config.public.BASE_URL}/login`, {
          method: "POST",
          body: {
            email: this.email,
            password: this.lozinka
          }
        });
        console.log(response);
        if (response.user) {
          this.message = "Uspje\u0161no ste prijavljeni!";
          this.alertType = "success";
          this.user = response.user;
          localStorage.setItem("user", JSON.stringify(response));
          this.isSuccessDialogOpen = true;
          setTimeout(() => {
            this.$router.push("/");
          }, 2e3);
        } else {
          this.message = "Neuspje\u0161na prijava. Provjerite va\u0161e podatke.";
          this.alertType = "error";
        }
      } catch (error) {
        console.log(error);
        this.message = "Do\u0161lo je do gre\u0161ke prilikom prijave. Poku\u0161ajte ponovo.";
        this.alertType = "error";
      }
    },
    closeSuccessDialog() {
      this.isSuccessDialogOpen = false;
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
                                        autocomplete: "current-password"
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
                                          autocomplete: "current-password"
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
                                if ($data.message && !$data.isSuccessDialogOpen) {
                                  _push6(ssrRenderComponent(VAlert, {
                                    type: $data.alertType,
                                    class: "mt-4"
                                  }, {
                                    default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                      if (_push7) {
                                        _push7(`${ssrInterpolate($data.message)}`);
                                      } else {
                                        return [
                                          createTextVNode(toDisplayString($data.message), 1)
                                        ];
                                      }
                                    }),
                                    _: 1
                                  }, _parent6, _scopeId5));
                                } else {
                                  _push6(`<!---->`);
                                }
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
                                        autocomplete: "current-password"
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
                                  }, 8, ["onSubmit"]),
                                  $data.message && !$data.isSuccessDialogOpen ? (openBlock(), createBlock(VAlert, {
                                    key: 0,
                                    type: $data.alertType,
                                    class: "mt-4"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString($data.message), 1)
                                    ]),
                                    _: 1
                                  }, 8, ["type"])) : createCommentVNode("", true)
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
                                      autocomplete: "current-password"
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
                                }, 8, ["onSubmit"]),
                                $data.message && !$data.isSuccessDialogOpen ? (openBlock(), createBlock(VAlert, {
                                  key: 0,
                                  type: $data.alertType,
                                  class: "mt-4"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString($data.message), 1)
                                  ]),
                                  _: 1
                                }, 8, ["type"])) : createCommentVNode("", true)
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
                                    autocomplete: "current-password"
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
                              }, 8, ["onSubmit"]),
                              $data.message && !$data.isSuccessDialogOpen ? (openBlock(), createBlock(VAlert, {
                                key: 0,
                                type: $data.alertType,
                                class: "mt-4"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString($data.message), 1)
                                ]),
                                _: 1
                              }, 8, ["type"])) : createCommentVNode("", true)
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
                                  autocomplete: "current-password"
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
                            }, 8, ["onSubmit"]),
                            $data.message && !$data.isSuccessDialogOpen ? (openBlock(), createBlock(VAlert, {
                              key: 0,
                              type: $data.alertType,
                              class: "mt-4"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString($data.message), 1)
                              ]),
                              _: 1
                            }, 8, ["type"])) : createCommentVNode("", true)
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
                                autocomplete: "current-password"
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
                          }, 8, ["onSubmit"]),
                          $data.message && !$data.isSuccessDialogOpen ? (openBlock(), createBlock(VAlert, {
                            key: 0,
                            type: $data.alertType,
                            class: "mt-4"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString($data.message), 1)
                            ]),
                            _: 1
                          }, 8, ["type"])) : createCommentVNode("", true)
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
  _push(ssrRenderComponent(VDialog, {
    modelValue: $data.isSuccessDialogOpen,
    "onUpdate:modelValue": ($event) => $data.isSuccessDialogOpen = $event,
    "max-width": "400px"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCard, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCardTitle, { class: "headline" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Uspje\u0161no prijavljivanje`);
                  } else {
                    return [
                      createTextVNode("Uspje\u0161no prijavljivanje")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VCardText, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<p${_scopeId3}>Uspje\u0161no ste se prijavili!</p>`);
                  } else {
                    return [
                      createVNode("p", null, "Uspje\u0161no ste se prijavili!")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VCardActions, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VBtn, {
                      color: "green",
                      text: "",
                      onClick: $options.closeSuccessDialog
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Zatvori`);
                        } else {
                          return [
                            createTextVNode("Zatvori")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VBtn, {
                        color: "green",
                        text: "",
                        onClick: $options.closeSuccessDialog
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Zatvori")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VCardTitle, { class: "headline" }, {
                  default: withCtx(() => [
                    createTextVNode("Uspje\u0161no prijavljivanje")
                  ]),
                  _: 1
                }),
                createVNode(VCardText, null, {
                  default: withCtx(() => [
                    createVNode("p", null, "Uspje\u0161no ste se prijavili!")
                  ]),
                  _: 1
                }),
                createVNode(VCardActions, null, {
                  default: withCtx(() => [
                    createVNode(VBtn, {
                      color: "green",
                      text: "",
                      onClick: $options.closeSuccessDialog
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Zatvori")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
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
          createVNode(VCard, null, {
            default: withCtx(() => [
              createVNode(VCardTitle, { class: "headline" }, {
                default: withCtx(() => [
                  createTextVNode("Uspje\u0161no prijavljivanje")
                ]),
                _: 1
              }),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode("p", null, "Uspje\u0161no ste se prijavili!")
                ]),
                _: 1
              }),
              createVNode(VCardActions, null, {
                default: withCtx(() => [
                  createVNode(VBtn, {
                    color: "green",
                    text: "",
                    onClick: $options.closeSuccessDialog
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Zatvori")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
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
//# sourceMappingURL=login-d22c033e.mjs.map
