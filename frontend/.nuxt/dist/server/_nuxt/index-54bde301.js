import { withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc, e as VImg, V as VContainer, b as VRow, d as VCol, f as VSpacer } from "../server.mjs";
import { V as VCard, a as VCardText } from "./VCard-de1dd77a.js";
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
const _sfc_main = {
  beforeMount() {
    this.dohvatiSlike();
  },
  data() {
    return {
      slike: []
    };
  },
  methods: {
    async dohvatiSlike() {
      try {
        const response = await $fetch(`${this.$config.public.BASE_URL}/products`, {
          method: "GET"
        });
        console.log(response);
        this.slike = response.products;
      } catch (error) {
        console.error("Error making POST request:", error);
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(VImg, {
    src: "https://images.pexels.com/photos/5466867/pexels-photo-5466867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Mona Lisa pozadinska slika",
    class: "mb-5",
    width: "100%",
    height: "auto",
    "max-height": "300",
    cover: "object-fit: cover; object-position: top;"
  }, null, _parent));
  _push(`<div align="center"><p style="${ssrRenderStyle({ "font-size": "20px", "color": "red" })}"> PRODAJA &amp; KUPOVINA UMJETNICKIH DJELA ONLINE </p><br> Pridružite se našoj online umetničkoj zajednici i započnite sa prodajom umetničkih djela danas! <br> Mi smo online galerija za kupovinu i prodaju originalnih slika, fotografija i još mnogo toga. <br> Sa samo nekoliko klikova možete napraviti Vaš račun, učitati proizvode koje želite prodati, postaviti cijene i početi prodavati ili kupovati <br> svoja djela online kupcima širom svijeta. Ako ste zainteresirani za prodaju na internet mreži, došli ste na pravo mjesto. <br></div>`);
  _push(ssrRenderComponent(VContainer, { align: "center" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VRow, { class: "flex justify-center" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCol, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VCard, {
                      color: "blue-grey-lighten-1",
                      class: "mx-auto"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VImg, {
                            src: "https://img001.prntscr.com/file/img001/gkl0O2lzRl2tRdzXGzvZbA.png",
                            alt: "Slika 1",
                            class: "my-3",
                            width: "300",
                            height: "300"
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCardText, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` PRONADJI SLIKARA ! `);
                                _push6(ssrRenderComponent(VSpacer, null, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createTextVNode(" PRONADJI SLIKARA ! "),
                                  createVNode(VSpacer)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VImg, {
                              src: "https://img001.prntscr.com/file/img001/gkl0O2lzRl2tRdzXGzvZbA.png",
                              alt: "Slika 1",
                              class: "my-3",
                              width: "300",
                              height: "300"
                            }),
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createTextVNode(" PRONADJI SLIKARA ! "),
                                createVNode(VSpacer)
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
                      createVNode(VCard, {
                        color: "blue-grey-lighten-1",
                        class: "mx-auto"
                      }, {
                        default: withCtx(() => [
                          createVNode(VImg, {
                            src: "https://img001.prntscr.com/file/img001/gkl0O2lzRl2tRdzXGzvZbA.png",
                            alt: "Slika 1",
                            class: "my-3",
                            width: "300",
                            height: "300"
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createTextVNode(" PRONADJI SLIKARA ! "),
                              createVNode(VSpacer)
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
              _push3(ssrRenderComponent(VCol, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VCard, { color: "blue-grey-lighten-1" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VImg, {
                            src: "https://img001.prntscr.com/file/img001/R3uLOyWcS0OdpOk80CaMuw.png",
                            alt: "Slika 2",
                            class: "my-3",
                            width: "300",
                            height: "300"
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCardText, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` PRONADJI ZELJENU TEHNIKU ! `);
                                _push6(ssrRenderComponent(VSpacer, null, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createTextVNode(" PRONADJI ZELJENU TEHNIKU ! "),
                                  createVNode(VSpacer)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VImg, {
                              src: "https://img001.prntscr.com/file/img001/R3uLOyWcS0OdpOk80CaMuw.png",
                              alt: "Slika 2",
                              class: "my-3",
                              width: "300",
                              height: "300"
                            }),
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createTextVNode(" PRONADJI ZELJENU TEHNIKU ! "),
                                createVNode(VSpacer)
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
                      createVNode(VCard, { color: "blue-grey-lighten-1" }, {
                        default: withCtx(() => [
                          createVNode(VImg, {
                            src: "https://img001.prntscr.com/file/img001/R3uLOyWcS0OdpOk80CaMuw.png",
                            alt: "Slika 2",
                            class: "my-3",
                            width: "300",
                            height: "300"
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createTextVNode(" PRONADJI ZELJENU TEHNIKU ! "),
                              createVNode(VSpacer)
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
              _push3(ssrRenderComponent(VCol, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VCard, { color: "blue-grey-lighten-1" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VImg, {
                            src: "https://img001.prntscr.com/file/img001/29xZgQNLQbOCB4Tmj5pp6Q.png",
                            alt: "Slika 2",
                            class: "my-3",
                            width: "300",
                            height: "300"
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCardText, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` PRONADJI NAJNOVIJE SLIKE ! `);
                                _push6(ssrRenderComponent(VSpacer, null, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createTextVNode(" PRONADJI NAJNOVIJE SLIKE ! "),
                                  createVNode(VSpacer)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VImg, {
                              src: "https://img001.prntscr.com/file/img001/29xZgQNLQbOCB4Tmj5pp6Q.png",
                              alt: "Slika 2",
                              class: "my-3",
                              width: "300",
                              height: "300"
                            }),
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createTextVNode(" PRONADJI NAJNOVIJE SLIKE ! "),
                                createVNode(VSpacer)
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
                      createVNode(VCard, { color: "blue-grey-lighten-1" }, {
                        default: withCtx(() => [
                          createVNode(VImg, {
                            src: "https://img001.prntscr.com/file/img001/29xZgQNLQbOCB4Tmj5pp6Q.png",
                            alt: "Slika 2",
                            class: "my-3",
                            width: "300",
                            height: "300"
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createTextVNode(" PRONADJI NAJNOVIJE SLIKE ! "),
                              createVNode(VSpacer)
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
              _push3(ssrRenderComponent(VCol, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VCard, { color: "blue-grey-lighten-1" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VImg, {
                            src: "https://img001.prntscr.com/file/img001/2vk2LpMwSvOQDjDFFzH_ZA.png",
                            alt: "Slika 2",
                            class: "my-3",
                            width: "300",
                            height: "300"
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCardText, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` SIGURNO PLACANJE I DOSTAVA ! `);
                                _push6(ssrRenderComponent(VSpacer, null, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createTextVNode(" SIGURNO PLACANJE I DOSTAVA ! "),
                                  createVNode(VSpacer)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VImg, {
                              src: "https://img001.prntscr.com/file/img001/2vk2LpMwSvOQDjDFFzH_ZA.png",
                              alt: "Slika 2",
                              class: "my-3",
                              width: "300",
                              height: "300"
                            }),
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createTextVNode(" SIGURNO PLACANJE I DOSTAVA ! "),
                                createVNode(VSpacer)
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
                      createVNode(VCard, { color: "blue-grey-lighten-1" }, {
                        default: withCtx(() => [
                          createVNode(VImg, {
                            src: "https://img001.prntscr.com/file/img001/2vk2LpMwSvOQDjDFFzH_ZA.png",
                            alt: "Slika 2",
                            class: "my-3",
                            width: "300",
                            height: "300"
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createTextVNode(" SIGURNO PLACANJE I DOSTAVA ! "),
                              createVNode(VSpacer)
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
              _push3(ssrRenderComponent(VCol, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VCard, { color: "blue-grey-lighten-1" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VImg, {
                            src: "https://img001.prntscr.com/file/img001/coC5xQenQXS8NrX8dLDuVg.png",
                            alt: "Slika 3",
                            class: "my-3",
                            width: "300",
                            height: "300"
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCardText, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` PRONADJI SLIKU PREMA MOTIVU ! `);
                                _push6(ssrRenderComponent(VSpacer, null, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createTextVNode(" PRONADJI SLIKU PREMA MOTIVU ! "),
                                  createVNode(VSpacer)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VImg, {
                              src: "https://img001.prntscr.com/file/img001/coC5xQenQXS8NrX8dLDuVg.png",
                              alt: "Slika 3",
                              class: "my-3",
                              width: "300",
                              height: "300"
                            }),
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createTextVNode(" PRONADJI SLIKU PREMA MOTIVU ! "),
                                createVNode(VSpacer)
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
                      createVNode(VCard, { color: "blue-grey-lighten-1" }, {
                        default: withCtx(() => [
                          createVNode(VImg, {
                            src: "https://img001.prntscr.com/file/img001/coC5xQenQXS8NrX8dLDuVg.png",
                            alt: "Slika 3",
                            class: "my-3",
                            width: "300",
                            height: "300"
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createTextVNode(" PRONADJI SLIKU PREMA MOTIVU ! "),
                              createVNode(VSpacer)
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
                createVNode(VCol, null, {
                  default: withCtx(() => [
                    createVNode(VCard, {
                      color: "blue-grey-lighten-1",
                      class: "mx-auto"
                    }, {
                      default: withCtx(() => [
                        createVNode(VImg, {
                          src: "https://img001.prntscr.com/file/img001/gkl0O2lzRl2tRdzXGzvZbA.png",
                          alt: "Slika 1",
                          class: "my-3",
                          width: "300",
                          height: "300"
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createTextVNode(" PRONADJI SLIKARA ! "),
                            createVNode(VSpacer)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(VCol, null, {
                  default: withCtx(() => [
                    createVNode(VCard, { color: "blue-grey-lighten-1" }, {
                      default: withCtx(() => [
                        createVNode(VImg, {
                          src: "https://img001.prntscr.com/file/img001/R3uLOyWcS0OdpOk80CaMuw.png",
                          alt: "Slika 2",
                          class: "my-3",
                          width: "300",
                          height: "300"
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createTextVNode(" PRONADJI ZELJENU TEHNIKU ! "),
                            createVNode(VSpacer)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(VCol, null, {
                  default: withCtx(() => [
                    createVNode(VCard, { color: "blue-grey-lighten-1" }, {
                      default: withCtx(() => [
                        createVNode(VImg, {
                          src: "https://img001.prntscr.com/file/img001/29xZgQNLQbOCB4Tmj5pp6Q.png",
                          alt: "Slika 2",
                          class: "my-3",
                          width: "300",
                          height: "300"
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createTextVNode(" PRONADJI NAJNOVIJE SLIKE ! "),
                            createVNode(VSpacer)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(VCol, null, {
                  default: withCtx(() => [
                    createVNode(VCard, { color: "blue-grey-lighten-1" }, {
                      default: withCtx(() => [
                        createVNode(VImg, {
                          src: "https://img001.prntscr.com/file/img001/2vk2LpMwSvOQDjDFFzH_ZA.png",
                          alt: "Slika 2",
                          class: "my-3",
                          width: "300",
                          height: "300"
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createTextVNode(" SIGURNO PLACANJE I DOSTAVA ! "),
                            createVNode(VSpacer)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(VCol, null, {
                  default: withCtx(() => [
                    createVNode(VCard, { color: "blue-grey-lighten-1" }, {
                      default: withCtx(() => [
                        createVNode(VImg, {
                          src: "https://img001.prntscr.com/file/img001/coC5xQenQXS8NrX8dLDuVg.png",
                          alt: "Slika 3",
                          class: "my-3",
                          width: "300",
                          height: "300"
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createTextVNode(" PRONADJI SLIKU PREMA MOTIVU ! "),
                            createVNode(VSpacer)
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
          createVNode(VRow, { class: "flex justify-center" }, {
            default: withCtx(() => [
              createVNode(VCol, null, {
                default: withCtx(() => [
                  createVNode(VCard, {
                    color: "blue-grey-lighten-1",
                    class: "mx-auto"
                  }, {
                    default: withCtx(() => [
                      createVNode(VImg, {
                        src: "https://img001.prntscr.com/file/img001/gkl0O2lzRl2tRdzXGzvZbA.png",
                        alt: "Slika 1",
                        class: "my-3",
                        width: "300",
                        height: "300"
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createTextVNode(" PRONADJI SLIKARA ! "),
                          createVNode(VSpacer)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, null, {
                default: withCtx(() => [
                  createVNode(VCard, { color: "blue-grey-lighten-1" }, {
                    default: withCtx(() => [
                      createVNode(VImg, {
                        src: "https://img001.prntscr.com/file/img001/R3uLOyWcS0OdpOk80CaMuw.png",
                        alt: "Slika 2",
                        class: "my-3",
                        width: "300",
                        height: "300"
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createTextVNode(" PRONADJI ZELJENU TEHNIKU ! "),
                          createVNode(VSpacer)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, null, {
                default: withCtx(() => [
                  createVNode(VCard, { color: "blue-grey-lighten-1" }, {
                    default: withCtx(() => [
                      createVNode(VImg, {
                        src: "https://img001.prntscr.com/file/img001/29xZgQNLQbOCB4Tmj5pp6Q.png",
                        alt: "Slika 2",
                        class: "my-3",
                        width: "300",
                        height: "300"
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createTextVNode(" PRONADJI NAJNOVIJE SLIKE ! "),
                          createVNode(VSpacer)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, null, {
                default: withCtx(() => [
                  createVNode(VCard, { color: "blue-grey-lighten-1" }, {
                    default: withCtx(() => [
                      createVNode(VImg, {
                        src: "https://img001.prntscr.com/file/img001/2vk2LpMwSvOQDjDFFzH_ZA.png",
                        alt: "Slika 2",
                        class: "my-3",
                        width: "300",
                        height: "300"
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createTextVNode(" SIGURNO PLACANJE I DOSTAVA ! "),
                          createVNode(VSpacer)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, null, {
                default: withCtx(() => [
                  createVNode(VCard, { color: "blue-grey-lighten-1" }, {
                    default: withCtx(() => [
                      createVNode(VImg, {
                        src: "https://img001.prntscr.com/file/img001/coC5xQenQXS8NrX8dLDuVg.png",
                        alt: "Slika 3",
                        class: "my-3",
                        width: "300",
                        height: "300"
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createTextVNode(" PRONADJI SLIKU PREMA MOTIVU ! "),
                          createVNode(VSpacer)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-54bde301.js.map
