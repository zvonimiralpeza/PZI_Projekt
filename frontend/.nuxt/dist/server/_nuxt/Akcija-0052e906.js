import { mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc, V as VContainer, b as VRow, d as VCol, e as VImg, f as VSpacer } from "../server.mjs";
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
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VContainer, mergeProps({ align: "center" }, _attrs), {
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
                            src: "https://d2rdb56lmj4es2.cloudfront.net/data/photo/2021/7/3/070321B-DED1-4807-9CB3EA04DDDFF6AD.jpg",
                            alt: "Slika 1",
                            class: "my-3",
                            width: "370",
                            height: "300"
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCardText, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<p style="${ssrRenderStyle({ textTransform: "uppercase", color: "cyan", fontSize: "20px" })}"${_scopeId5}>Yellowstone National Park</p>`);
                                _push6(ssrRenderComponent(VSpacer, null, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Yellowstone National Park"),
                                  createVNode(VSpacer)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VImg, {
                              src: "https://d2rdb56lmj4es2.cloudfront.net/data/photo/2021/7/3/070321B-DED1-4807-9CB3EA04DDDFF6AD.jpg",
                              alt: "Slika 1",
                              class: "my-3",
                              width: "370",
                              height: "300"
                            }),
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Yellowstone National Park"),
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
                            src: "https://d2rdb56lmj4es2.cloudfront.net/data/photo/2021/7/3/070321B-DED1-4807-9CB3EA04DDDFF6AD.jpg",
                            alt: "Slika 1",
                            class: "my-3",
                            width: "370",
                            height: "300"
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Yellowstone National Park"),
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
                            src: "https://d2rdb56lmj4es2.cloudfront.net/data/photo/2021/3/29/0329214-CD61-4099-B7007E2B9F68EBE9.jpg",
                            alt: "Slika 2",
                            class: "my-3",
                            width: "370",
                            height: "300"
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCardText, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<p style="${ssrRenderStyle({ textTransform: "uppercase", color: "cyan", fontSize: "20px" })}"${_scopeId5}>Winter views</p>`);
                                _push6(ssrRenderComponent(VSpacer, null, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Winter views"),
                                  createVNode(VSpacer)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VImg, {
                              src: "https://d2rdb56lmj4es2.cloudfront.net/data/photo/2021/3/29/0329214-CD61-4099-B7007E2B9F68EBE9.jpg",
                              alt: "Slika 2",
                              class: "my-3",
                              width: "370",
                              height: "300"
                            }),
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Winter views"),
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
                            src: "https://d2rdb56lmj4es2.cloudfront.net/data/photo/2021/3/29/0329214-CD61-4099-B7007E2B9F68EBE9.jpg",
                            alt: "Slika 2",
                            class: "my-3",
                            width: "370",
                            height: "300"
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Winter views"),
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
                            src: "https://cdn.pixabay.com/photo/2024/02/11/12/44/landscape-8566451_1280.jpg",
                            alt: "Slika 2",
                            class: "my-3",
                            width: "370",
                            height: "300"
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCardText, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<p style="${ssrRenderStyle({ textTransform: "uppercase", color: "cyan", fontSize: "20px" })}"${_scopeId5}>Landscape Island</p>`);
                                _push6(ssrRenderComponent(VSpacer, null, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Landscape Island"),
                                  createVNode(VSpacer)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VImg, {
                              src: "https://cdn.pixabay.com/photo/2024/02/11/12/44/landscape-8566451_1280.jpg",
                              alt: "Slika 2",
                              class: "my-3",
                              width: "370",
                              height: "300"
                            }),
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Landscape Island"),
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
                            src: "https://cdn.pixabay.com/photo/2024/02/11/12/44/landscape-8566451_1280.jpg",
                            alt: "Slika 2",
                            class: "my-3",
                            width: "370",
                            height: "300"
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Landscape Island"),
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
                            src: "https://d2rdb56lmj4es2.cloudfront.net/data/photo/2022/1/21/0121228-C715-493A-8196DF8BD5CACF83.jpg",
                            alt: "Slika 2",
                            class: "my-3",
                            width: "370",
                            height: "300"
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCardText, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<p style="${ssrRenderStyle({ textTransform: "uppercase", color: "cyan", fontSize: "20px" })}"${_scopeId5}>Skyline sign</p>`);
                                _push6(ssrRenderComponent(VSpacer, null, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Skyline sign"),
                                  createVNode(VSpacer)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VImg, {
                              src: "https://d2rdb56lmj4es2.cloudfront.net/data/photo/2022/1/21/0121228-C715-493A-8196DF8BD5CACF83.jpg",
                              alt: "Slika 2",
                              class: "my-3",
                              width: "370",
                              height: "300"
                            }),
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Skyline sign"),
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
                            src: "https://d2rdb56lmj4es2.cloudfront.net/data/photo/2022/1/21/0121228-C715-493A-8196DF8BD5CACF83.jpg",
                            alt: "Slika 2",
                            class: "my-3",
                            width: "370",
                            height: "300"
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Skyline sign"),
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
                            src: "https://cdn.pixabay.com/photo/2023/04/13/09/56/alps-7922246_1280.jpg",
                            alt: "Slika 2",
                            class: "my-3",
                            width: "370",
                            height: "300"
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCardText, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<p style="${ssrRenderStyle({ textTransform: "uppercase", color: "cyan", fontSize: "20px" })}"${_scopeId5}>Alps mountain</p>`);
                                _push6(ssrRenderComponent(VSpacer, null, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Alps mountain"),
                                  createVNode(VSpacer)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VImg, {
                              src: "https://cdn.pixabay.com/photo/2023/04/13/09/56/alps-7922246_1280.jpg",
                              alt: "Slika 2",
                              class: "my-3",
                              width: "370",
                              height: "300"
                            }),
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Alps mountain"),
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
                            src: "https://cdn.pixabay.com/photo/2023/04/13/09/56/alps-7922246_1280.jpg",
                            alt: "Slika 2",
                            class: "my-3",
                            width: "370",
                            height: "300"
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Alps mountain"),
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
                            src: "https://d2rdb56lmj4es2.cloudfront.net/data/photo/2021/12/5/120521C-927D-4343-84085362F3F720EF.jpg",
                            alt: "Slika 2",
                            class: "my-3",
                            width: "370",
                            height: "300"
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCardText, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<p style="${ssrRenderStyle({ textTransform: "uppercase", color: "cyan", fontSize: "20px" })}"${_scopeId5}>Beautiful Autumn Landscape</p>`);
                                _push6(ssrRenderComponent(VSpacer, null, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Beautiful Autumn Landscape"),
                                  createVNode(VSpacer)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VImg, {
                              src: "https://d2rdb56lmj4es2.cloudfront.net/data/photo/2021/12/5/120521C-927D-4343-84085362F3F720EF.jpg",
                              alt: "Slika 2",
                              class: "my-3",
                              width: "370",
                              height: "300"
                            }),
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Beautiful Autumn Landscape"),
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
                            src: "https://d2rdb56lmj4es2.cloudfront.net/data/photo/2021/12/5/120521C-927D-4343-84085362F3F720EF.jpg",
                            alt: "Slika 2",
                            class: "my-3",
                            width: "370",
                            height: "300"
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Beautiful Autumn Landscape"),
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
                            src: "https://cdn.pixabay.com/photo/2024/03/05/10/38/boat-8614314_1280.jpg",
                            alt: "Slika 2",
                            class: "my-3",
                            width: "370",
                            height: "300"
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCardText, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<p style="${ssrRenderStyle({ textTransform: "uppercase", color: "cyan", fontSize: "20px" })}"${_scopeId5}>Boat and sea</p>`);
                                _push6(ssrRenderComponent(VSpacer, null, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Boat and sea"),
                                  createVNode(VSpacer)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VImg, {
                              src: "https://cdn.pixabay.com/photo/2024/03/05/10/38/boat-8614314_1280.jpg",
                              alt: "Slika 2",
                              class: "my-3",
                              width: "370",
                              height: "300"
                            }),
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Boat and sea"),
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
                            src: "https://cdn.pixabay.com/photo/2024/03/05/10/38/boat-8614314_1280.jpg",
                            alt: "Slika 2",
                            class: "my-3",
                            width: "370",
                            height: "300"
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Boat and sea"),
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
                            src: "https://cdn.pixabay.com/photo/2023/04/11/13/27/bird-7917250_1280.jpg",
                            alt: "Slika 2",
                            class: "my-3",
                            width: "370",
                            height: "300"
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCardText, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<p style="${ssrRenderStyle({ textTransform: "uppercase", color: "cyan", fontSize: "20px" })}"${_scopeId5}>Bird in river</p>`);
                                _push6(ssrRenderComponent(VSpacer, null, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Bird in river"),
                                  createVNode(VSpacer)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VImg, {
                              src: "https://cdn.pixabay.com/photo/2023/04/11/13/27/bird-7917250_1280.jpg",
                              alt: "Slika 2",
                              class: "my-3",
                              width: "370",
                              height: "300"
                            }),
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Bird in river"),
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
                            src: "https://cdn.pixabay.com/photo/2023/04/11/13/27/bird-7917250_1280.jpg",
                            alt: "Slika 2",
                            class: "my-3",
                            width: "370",
                            height: "300"
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Bird in river"),
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
                            src: "https://cdn.pixabay.com/photo/2023/02/06/10/02/man-7771583_1280.jpg",
                            alt: "Slika 2",
                            class: "my-3",
                            width: "370",
                            height: "300"
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCardText, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<p style="${ssrRenderStyle({ textTransform: "uppercase", color: "cyan", fontSize: "20px" })}"${_scopeId5}>Man model on telephone</p>`);
                                _push6(ssrRenderComponent(VSpacer, null, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Man model on telephone"),
                                  createVNode(VSpacer)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VImg, {
                              src: "https://cdn.pixabay.com/photo/2023/02/06/10/02/man-7771583_1280.jpg",
                              alt: "Slika 2",
                              class: "my-3",
                              width: "370",
                              height: "300"
                            }),
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Man model on telephone"),
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
                            src: "https://cdn.pixabay.com/photo/2023/02/06/10/02/man-7771583_1280.jpg",
                            alt: "Slika 2",
                            class: "my-3",
                            width: "370",
                            height: "300"
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Man model on telephone"),
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
                            src: "https://cdn.pixabay.com/photo/2023/08/18/10/00/sea-8198149_1280.jpg",
                            alt: "Slika 2",
                            class: "my-3",
                            width: "370",
                            height: "300"
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCardText, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<p style="${ssrRenderStyle({ textTransform: "uppercase", color: "cyan", fontSize: "20px" })}"${_scopeId5}>Sea and ocean</p>`);
                                _push6(ssrRenderComponent(VSpacer, null, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Sea and ocean"),
                                  createVNode(VSpacer)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VImg, {
                              src: "https://cdn.pixabay.com/photo/2023/08/18/10/00/sea-8198149_1280.jpg",
                              alt: "Slika 2",
                              class: "my-3",
                              width: "370",
                              height: "300"
                            }),
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Sea and ocean"),
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
                            src: "https://cdn.pixabay.com/photo/2023/08/18/10/00/sea-8198149_1280.jpg",
                            alt: "Slika 2",
                            class: "my-3",
                            width: "370",
                            height: "300"
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Sea and ocean"),
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
                            src: "https://cdn.pixabay.com/photo/2023/09/29/07/50/rocks-8283171_1280.jpg",
                            alt: "Slika 2",
                            class: "my-3",
                            width: "370",
                            height: "300"
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCardText, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<p style="${ssrRenderStyle({ textTransform: "uppercase", color: "cyan", fontSize: "20px" })}"${_scopeId5}>Rocks and mountains</p>`);
                                _push6(ssrRenderComponent(VSpacer, null, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Rocks and mountains"),
                                  createVNode(VSpacer)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VImg, {
                              src: "https://cdn.pixabay.com/photo/2023/09/29/07/50/rocks-8283171_1280.jpg",
                              alt: "Slika 2",
                              class: "my-3",
                              width: "370",
                              height: "300"
                            }),
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Rocks and mountains"),
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
                            src: "https://cdn.pixabay.com/photo/2023/09/29/07/50/rocks-8283171_1280.jpg",
                            alt: "Slika 2",
                            class: "my-3",
                            width: "370",
                            height: "300"
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Rocks and mountains"),
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
                            src: "https://cdn.pixabay.com/photo/2023/04/17/07/47/sunset-7931854_1280.jpg",
                            alt: "Slika 2",
                            class: "my-3",
                            width: "370",
                            height: "300"
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCardText, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<p style="${ssrRenderStyle({ textTransform: "uppercase", color: "cyan", fontSize: "20px" })}"${_scopeId5}>Sunset</p>`);
                                _push6(ssrRenderComponent(VSpacer, null, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Sunset"),
                                  createVNode(VSpacer)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VImg, {
                              src: "https://cdn.pixabay.com/photo/2023/04/17/07/47/sunset-7931854_1280.jpg",
                              alt: "Slika 2",
                              class: "my-3",
                              width: "370",
                              height: "300"
                            }),
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Sunset"),
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
                            src: "https://cdn.pixabay.com/photo/2023/04/17/07/47/sunset-7931854_1280.jpg",
                            alt: "Slika 2",
                            class: "my-3",
                            width: "370",
                            height: "300"
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Sunset"),
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
                            src: "https://cdn.pixabay.com/photo/2023/05/05/06/19/street-7971714_1280.jpg",
                            alt: "Slika 2",
                            class: "my-3",
                            width: "370",
                            height: "300"
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCardText, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<p style="${ssrRenderStyle({ textTransform: "uppercase", color: "cyan", fontSize: "20px" })}"${_scopeId5}>Street architecture</p>`);
                                _push6(ssrRenderComponent(VSpacer, null, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Street architecture"),
                                  createVNode(VSpacer)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VImg, {
                              src: "https://cdn.pixabay.com/photo/2023/05/05/06/19/street-7971714_1280.jpg",
                              alt: "Slika 2",
                              class: "my-3",
                              width: "370",
                              height: "300"
                            }),
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Street architecture"),
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
                            src: "https://cdn.pixabay.com/photo/2023/05/05/06/19/street-7971714_1280.jpg",
                            alt: "Slika 2",
                            class: "my-3",
                            width: "370",
                            height: "300"
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Street architecture"),
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
                            src: "https://cdn.pixabay.com/photo/2023/04/16/11/27/bridge-7930004_960_720.jpg",
                            alt: "Slika 2",
                            class: "my-3",
                            width: "370",
                            height: "300"
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCardText, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<p style="${ssrRenderStyle({ textTransform: "uppercase", color: "cyan", fontSize: "20px" })}"${_scopeId5}>Bridge</p>`);
                                _push6(ssrRenderComponent(VSpacer, null, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Bridge"),
                                  createVNode(VSpacer)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VImg, {
                              src: "https://cdn.pixabay.com/photo/2023/04/16/11/27/bridge-7930004_960_720.jpg",
                              alt: "Slika 2",
                              class: "my-3",
                              width: "370",
                              height: "300"
                            }),
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Bridge"),
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
                            src: "https://cdn.pixabay.com/photo/2023/04/16/11/27/bridge-7930004_960_720.jpg",
                            alt: "Slika 2",
                            class: "my-3",
                            width: "370",
                            height: "300"
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Bridge"),
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
                            src: "https://d2rdb56lmj4es2.cloudfront.net/data/photo/2022/6/20/0620225-C019-4DCB-9F20F125BA6B7BC1.jpg",
                            alt: "Slika 3",
                            class: "my-3",
                            width: "370",
                            height: "300"
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCardText, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<p style="${ssrRenderStyle({ textTransform: "uppercase", color: "cyan", fontSize: "20px" })}"${_scopeId5}>Rain in the Sage Steppe</p>`);
                                _push6(ssrRenderComponent(VSpacer, null, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Rain in the Sage Steppe"),
                                  createVNode(VSpacer)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VImg, {
                              src: "https://d2rdb56lmj4es2.cloudfront.net/data/photo/2022/6/20/0620225-C019-4DCB-9F20F125BA6B7BC1.jpg",
                              alt: "Slika 3",
                              class: "my-3",
                              width: "370",
                              height: "300"
                            }),
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Rain in the Sage Steppe"),
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
                            src: "https://d2rdb56lmj4es2.cloudfront.net/data/photo/2022/6/20/0620225-C019-4DCB-9F20F125BA6B7BC1.jpg",
                            alt: "Slika 3",
                            class: "my-3",
                            width: "370",
                            height: "300"
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Rain in the Sage Steppe"),
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
                          src: "https://d2rdb56lmj4es2.cloudfront.net/data/photo/2021/7/3/070321B-DED1-4807-9CB3EA04DDDFF6AD.jpg",
                          alt: "Slika 1",
                          class: "my-3",
                          width: "370",
                          height: "300"
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Yellowstone National Park"),
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
                          src: "https://d2rdb56lmj4es2.cloudfront.net/data/photo/2021/3/29/0329214-CD61-4099-B7007E2B9F68EBE9.jpg",
                          alt: "Slika 2",
                          class: "my-3",
                          width: "370",
                          height: "300"
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Winter views"),
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
                          src: "https://cdn.pixabay.com/photo/2024/02/11/12/44/landscape-8566451_1280.jpg",
                          alt: "Slika 2",
                          class: "my-3",
                          width: "370",
                          height: "300"
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Landscape Island"),
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
                          src: "https://d2rdb56lmj4es2.cloudfront.net/data/photo/2022/1/21/0121228-C715-493A-8196DF8BD5CACF83.jpg",
                          alt: "Slika 2",
                          class: "my-3",
                          width: "370",
                          height: "300"
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Skyline sign"),
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
                          src: "https://cdn.pixabay.com/photo/2023/04/13/09/56/alps-7922246_1280.jpg",
                          alt: "Slika 2",
                          class: "my-3",
                          width: "370",
                          height: "300"
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Alps mountain"),
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
                          src: "https://d2rdb56lmj4es2.cloudfront.net/data/photo/2021/12/5/120521C-927D-4343-84085362F3F720EF.jpg",
                          alt: "Slika 2",
                          class: "my-3",
                          width: "370",
                          height: "300"
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Beautiful Autumn Landscape"),
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
                          src: "https://cdn.pixabay.com/photo/2024/03/05/10/38/boat-8614314_1280.jpg",
                          alt: "Slika 2",
                          class: "my-3",
                          width: "370",
                          height: "300"
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Boat and sea"),
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
                          src: "https://cdn.pixabay.com/photo/2023/04/11/13/27/bird-7917250_1280.jpg",
                          alt: "Slika 2",
                          class: "my-3",
                          width: "370",
                          height: "300"
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Bird in river"),
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
                          src: "https://cdn.pixabay.com/photo/2023/02/06/10/02/man-7771583_1280.jpg",
                          alt: "Slika 2",
                          class: "my-3",
                          width: "370",
                          height: "300"
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Man model on telephone"),
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
                          src: "https://cdn.pixabay.com/photo/2023/08/18/10/00/sea-8198149_1280.jpg",
                          alt: "Slika 2",
                          class: "my-3",
                          width: "370",
                          height: "300"
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Sea and ocean"),
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
                          src: "https://cdn.pixabay.com/photo/2023/09/29/07/50/rocks-8283171_1280.jpg",
                          alt: "Slika 2",
                          class: "my-3",
                          width: "370",
                          height: "300"
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Rocks and mountains"),
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
                          src: "https://cdn.pixabay.com/photo/2023/04/17/07/47/sunset-7931854_1280.jpg",
                          alt: "Slika 2",
                          class: "my-3",
                          width: "370",
                          height: "300"
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Sunset"),
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
                          src: "https://cdn.pixabay.com/photo/2023/05/05/06/19/street-7971714_1280.jpg",
                          alt: "Slika 2",
                          class: "my-3",
                          width: "370",
                          height: "300"
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Street architecture"),
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
                          src: "https://cdn.pixabay.com/photo/2023/04/16/11/27/bridge-7930004_960_720.jpg",
                          alt: "Slika 2",
                          class: "my-3",
                          width: "370",
                          height: "300"
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Bridge"),
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
                          src: "https://d2rdb56lmj4es2.cloudfront.net/data/photo/2022/6/20/0620225-C019-4DCB-9F20F125BA6B7BC1.jpg",
                          alt: "Slika 3",
                          class: "my-3",
                          width: "370",
                          height: "300"
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Rain in the Sage Steppe"),
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
                        src: "https://d2rdb56lmj4es2.cloudfront.net/data/photo/2021/7/3/070321B-DED1-4807-9CB3EA04DDDFF6AD.jpg",
                        alt: "Slika 1",
                        class: "my-3",
                        width: "370",
                        height: "300"
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Yellowstone National Park"),
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
                        src: "https://d2rdb56lmj4es2.cloudfront.net/data/photo/2021/3/29/0329214-CD61-4099-B7007E2B9F68EBE9.jpg",
                        alt: "Slika 2",
                        class: "my-3",
                        width: "370",
                        height: "300"
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Winter views"),
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
                        src: "https://cdn.pixabay.com/photo/2024/02/11/12/44/landscape-8566451_1280.jpg",
                        alt: "Slika 2",
                        class: "my-3",
                        width: "370",
                        height: "300"
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Landscape Island"),
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
                        src: "https://d2rdb56lmj4es2.cloudfront.net/data/photo/2022/1/21/0121228-C715-493A-8196DF8BD5CACF83.jpg",
                        alt: "Slika 2",
                        class: "my-3",
                        width: "370",
                        height: "300"
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Skyline sign"),
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
                        src: "https://cdn.pixabay.com/photo/2023/04/13/09/56/alps-7922246_1280.jpg",
                        alt: "Slika 2",
                        class: "my-3",
                        width: "370",
                        height: "300"
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Alps mountain"),
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
                        src: "https://d2rdb56lmj4es2.cloudfront.net/data/photo/2021/12/5/120521C-927D-4343-84085362F3F720EF.jpg",
                        alt: "Slika 2",
                        class: "my-3",
                        width: "370",
                        height: "300"
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Beautiful Autumn Landscape"),
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
                        src: "https://cdn.pixabay.com/photo/2024/03/05/10/38/boat-8614314_1280.jpg",
                        alt: "Slika 2",
                        class: "my-3",
                        width: "370",
                        height: "300"
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Boat and sea"),
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
                        src: "https://cdn.pixabay.com/photo/2023/04/11/13/27/bird-7917250_1280.jpg",
                        alt: "Slika 2",
                        class: "my-3",
                        width: "370",
                        height: "300"
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Bird in river"),
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
                        src: "https://cdn.pixabay.com/photo/2023/02/06/10/02/man-7771583_1280.jpg",
                        alt: "Slika 2",
                        class: "my-3",
                        width: "370",
                        height: "300"
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Man model on telephone"),
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
                        src: "https://cdn.pixabay.com/photo/2023/08/18/10/00/sea-8198149_1280.jpg",
                        alt: "Slika 2",
                        class: "my-3",
                        width: "370",
                        height: "300"
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Sea and ocean"),
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
                        src: "https://cdn.pixabay.com/photo/2023/09/29/07/50/rocks-8283171_1280.jpg",
                        alt: "Slika 2",
                        class: "my-3",
                        width: "370",
                        height: "300"
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Rocks and mountains"),
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
                        src: "https://cdn.pixabay.com/photo/2023/04/17/07/47/sunset-7931854_1280.jpg",
                        alt: "Slika 2",
                        class: "my-3",
                        width: "370",
                        height: "300"
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Sunset"),
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
                        src: "https://cdn.pixabay.com/photo/2023/05/05/06/19/street-7971714_1280.jpg",
                        alt: "Slika 2",
                        class: "my-3",
                        width: "370",
                        height: "300"
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Street architecture"),
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
                        src: "https://cdn.pixabay.com/photo/2023/04/16/11/27/bridge-7930004_960_720.jpg",
                        alt: "Slika 2",
                        class: "my-3",
                        width: "370",
                        height: "300"
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Bridge"),
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
                        src: "https://d2rdb56lmj4es2.cloudfront.net/data/photo/2022/6/20/0620225-C019-4DCB-9F20F125BA6B7BC1.jpg",
                        alt: "Slika 3",
                        class: "my-3",
                        width: "370",
                        height: "300"
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("p", { style: { textTransform: "uppercase", color: "cyan", fontSize: "20px" } }, "Rain in the Sage Steppe"),
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
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Akcija.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Akcija = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Akcija as default
};
//# sourceMappingURL=Akcija-0052e906.js.map
