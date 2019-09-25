(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BaseFields.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/BaseFields.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue2_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-editor */ "./node_modules/vue2-editor/dist/vue2-editor.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "base-fields",
  props: ['fields', 'values'],
  components: {
    VueEditor: vue2_editor__WEBPACK_IMPORTED_MODULE_0__["VueEditor"]
  },
  data: function data() {
    return {
      defaultInputs: ["text", "password", "email", "number", "url", "tel", "date", "time", "range", "color", 'month', 'week'],
      queriedInputs: [],
      errors: [],
      requiredOnly: false
    };
  },
  methods: {
    formClass: function formClass(item) {
      if (item["class"]) return item["class"];else return 'col-12';
    },
    youtube: function youtube(key) {
      var value = this.$props.values[key];

      if (value.indexOf("youtu") < 0 || value.indexOf("http") < 0) {
        this.$props.values[key] = "";
        this.errors[key] = "Must be a youtube URL";
      } else {
        this.$props.values[key] = value.replace('watch?v=', 'embed/');
        delete this.errors[key];
      }
    },
    orderedFields: function orderedFields() {
      // var result = this._.sortBy(this.$props.fields, 'sort');
      return this.$props.fields;
    },
    addRepeater: function addRepeater(key) {
      var comp = this;
      comp.$props.values[key].push("");
    },
    removeRepeater: function removeRepeater(key, index) {
      var comp = this;
      comp.$props.values[key].splice(index, 1);
    },
    getOptions: function getOptions(item) {
      var comp = this;

      if (!item.target) {
        return false;
      }

      var tag = item.target + "/" + item.key + "/" + comp.$props.values.id;
      comp.$props.fields[item.key].options = [];
      comp.axios.get('/api/get-options/' + item.target).then(function (response) {
        comp.$props.fields[item.key].options = response.data;
        localStorage.setItem(tag, JSON.stringify(response.data));
        comp.queriedInputs.push(item.key);
        comp.orderedFields();
      });
    }
  },
  computed: {
    preparedFields: function preparedFields() {
      var preparedFields = this.orderedFields();
      return preparedFields;
    }
  },
  beforeUpdate: function beforeUpdate() {
    var comp = this;
    var item;
    var updated = [];

    for (var key in comp.$props.fields) {
      if (comp.queriedInputs.indexOf(key) < 0) {
        item = comp.$props.fields[key];
        comp.getOptions(item);
        updated.push(key);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Edit.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Edit.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_BaseFields_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/BaseFields.vue */ "./resources/js/components/BaseFields.vue");
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BaseFields: _components_BaseFields_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      fields: [],
      values: {},
      id: this.$route.params.id || false,
      metaLink: "http://localhost/api/" + this.$route.params.entity + "/formmeta",
      infoLink: "http://localhost/api/" + this.$route.params.entity + "/" + this.$route.params.id,
      accessToken: ACCESS_TOKEN
    };
  },
  methods: {
    getFieldMeta: function getFieldMeta() {
      var comp = this;
      comp.axios(comp.metaLink, {
        method: 'GET',
        headers: {
          'Authorization': "Bearer " + comp.accessToken
        }
      }).then(function (response) {
        comp.fields = response.data.data;
      });
    },
    getInfo: function getInfo() {
      var comp = this;
      comp.axios(comp.infoLink, {
        method: 'GET',
        headers: {
          'Authorization': "Bearer " + comp.accessToken
        }
      }).then(function (response) {
        console.log(response);
        comp.values = response.data.data;
      });
    },
    submitAction: function submitAction() {}
  },
  mounted: function mounted() {
    this.getFieldMeta();

    if (this.id) {
      this.getInfo();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BaseFields.vue?vue&type=template&id=2f757895&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/BaseFields.vue?vue&type=template&id=2f757895& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "b-row",
        [
          _vm._l(_vm.preparedFields, function(item, key) {
            return [
              item.key == "id"
                ? _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.values[item.key],
                        expression: "values[item.key]"
                      }
                    ],
                    ref: item.key,
                    refInFor: true,
                    class: item.key,
                    attrs: { type: "hidden", name: "id" },
                    domProps: { value: _vm.values[item.key] },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.values, item.key, $event.target.value)
                      }
                    }
                  })
                : _c(
                    "transition",
                    { attrs: { name: "fade" } },
                    [
                      _c(
                        "b-form-group",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value:
                                (_vm.requiredOnly == false ||
                                  item.required == true) &&
                                item.type !== "hidden",
                              expression:
                                '(requiredOnly == false || item.required == true) && item.type !== "hidden"'
                            }
                          ],
                          key: key,
                          class: _vm.formClass(item),
                          attrs: {
                            id: "input-group-" + key,
                            label: item.label,
                            "label-for": "input-" + key,
                            description: item.form_description
                          }
                        },
                        [
                          _vm.defaultInputs.indexOf(item.type) >= 0
                            ? [
                                _c("b-form-input", {
                                  ref: item.key,
                                  refInFor: true,
                                  class: item.key,
                                  attrs: {
                                    id: "input-" + key,
                                    type: item.type,
                                    placeholder: item.placeholder,
                                    required: item.required,
                                    disabled: item.disabled,
                                    size: item.size,
                                    state: item.state,
                                    autofocus: item.autofocus,
                                    number: item.number,
                                    plaintext: item.plaintext,
                                    readonly: item.readonly,
                                    autocomplete: item.autocomplete,
                                    trim: item.trim,
                                    list: item.list,
                                    max: item.max,
                                    min: item.min,
                                    step: item.step
                                  },
                                  model: {
                                    value: _vm.values[item.key],
                                    callback: function($$v) {
                                      _vm.$set(_vm.values, item.key, $$v)
                                    },
                                    expression: "values[item.key]"
                                  }
                                })
                              ]
                            : _vm._e(),
                          _vm._v(" "),
                          item.type == "text-repeater"
                            ? [
                                _vm.values[item.key] &&
                                _vm.values[item.key].length == 0
                                  ? _c(
                                      "div",
                                      [
                                        _c(
                                          "b-input-group",
                                          { staticClass: "mt-3" },
                                          [
                                            _c("b-form-input", {
                                              attrs: { size: "sm" },
                                              model: {
                                                value: _vm.values[item.key][0],
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.values[item.key],
                                                    0,
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "values[item.key][0]"
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "b-input-group-append",
                                              [
                                                _c(
                                                  "b-button",
                                                  {
                                                    attrs: {
                                                      size: "sm",
                                                      variant: "outline-success"
                                                    },
                                                    on: {
                                                      click: function($event) {
                                                        return _vm.addRepeater(
                                                          item.key
                                                        )
                                                      }
                                                    }
                                                  },
                                                  [_vm._v("+")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "b-button",
                                                  {
                                                    attrs: {
                                                      size: "sm",
                                                      variant: "outline-danger"
                                                    },
                                                    on: {
                                                      click: function($event) {
                                                        return _vm.removeRepeater(
                                                          item.key,
                                                          _vm.index
                                                        )
                                                      }
                                                    }
                                                  },
                                                  [_vm._v("-")]
                                                )
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm._l(_vm.values[item.key], function(
                                  find,
                                  index
                                ) {
                                  return _c(
                                    "div",
                                    { attrs: { else: "" } },
                                    [
                                      _c(
                                        "b-input-group",
                                        { staticClass: "mt-3" },
                                        [
                                          _c("b-form-input", {
                                            attrs: { size: "sm" },
                                            model: {
                                              value:
                                                _vm.values[item.key][index],
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.values[item.key],
                                                  index,
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "values[item.key][index]"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "b-input-group-append",
                                            [
                                              _c(
                                                "b-button",
                                                {
                                                  attrs: {
                                                    size: "sm",
                                                    variant: "outline-success"
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.addRepeater(
                                                        item.key
                                                      )
                                                    }
                                                  }
                                                },
                                                [_vm._v("+")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "b-button",
                                                {
                                                  attrs: {
                                                    size: "sm",
                                                    variant: "outline-danger"
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.removeRepeater(
                                                        item.key,
                                                        index
                                                      )
                                                    }
                                                  }
                                                },
                                                [_vm._v("-")]
                                              )
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                })
                              ]
                            : _vm._e(),
                          _vm._v(" "),
                          item.type == "select"
                            ? [
                                _c("b-form-select", {
                                  ref: item.key,
                                  refInFor: true,
                                  class: item.key,
                                  attrs: {
                                    options: item.options,
                                    required: item.required,
                                    disabled: item.disabled,
                                    size: "sm",
                                    state: item.state,
                                    plain: item.plain,
                                    autofocus: item.autofocus
                                  },
                                  model: {
                                    value: _vm.values[item.key],
                                    callback: function($$v) {
                                      _vm.$set(_vm.values, item.key, $$v)
                                    },
                                    expression: "values[item.key]"
                                  }
                                })
                              ]
                            : _vm._e(),
                          _vm._v(" "),
                          item.type == "select-repeater"
                            ? [
                                _vm.values[item.key] &&
                                _vm.values[item.key].length == 0
                                  ? _c(
                                      "b-row",
                                      [
                                        _c(
                                          "b-col",
                                          [
                                            _c("b-form-select", {
                                              ref: item.key,
                                              refInFor: true,
                                              class: item.key + " mt-2",
                                              attrs: {
                                                options: item.options,
                                                required: item.required,
                                                disabled: item.disabled,
                                                size: "sm",
                                                state: item.state,
                                                plain: item.plain,
                                                autofocus: item.autofocus
                                              },
                                              model: {
                                                value: _vm.values[item.key][0],
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.values[item.key],
                                                    0,
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "values[item.key][0]"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  : _vm._l(_vm.values[item.key], function(
                                      find,
                                      index
                                    ) {
                                      return _c(
                                        "b-row",
                                        { key: "index" },
                                        [
                                          _c(
                                            "b-col",
                                            { attrs: { cols: "10" } },
                                            [
                                              _c("b-form-select", {
                                                ref: item.key,
                                                refInFor: true,
                                                class: item.key + " mt-2",
                                                attrs: {
                                                  options: item.options,
                                                  required: item.required,
                                                  disabled: item.disabled,
                                                  size: "sm",
                                                  state: item.state,
                                                  plain: item.plain,
                                                  autofocus: item.autofocus
                                                },
                                                model: {
                                                  value:
                                                    _vm.values[item.key][index],
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.values[item.key],
                                                      index,
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "values[item.key][index]"
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "b-col",
                                            { attrs: { cols: "2" } },
                                            [
                                              _c(
                                                "b-row",
                                                [
                                                  _c(
                                                    "b-button",
                                                    {
                                                      staticClass: "mt-2",
                                                      attrs: {
                                                        size: "sm",
                                                        variant:
                                                          "outline-success"
                                                      },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          return _vm.addRepeater(
                                                            item.key
                                                          )
                                                        }
                                                      }
                                                    },
                                                    [_vm._v("+")]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "b-button",
                                                    {
                                                      staticClass: "mt-2",
                                                      attrs: {
                                                        size: "sm",
                                                        variant:
                                                          "outline-danger"
                                                      },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          return _vm.removeRepeater(
                                                            item.key,
                                                            index
                                                          )
                                                        }
                                                      }
                                                    },
                                                    [_vm._v("-")]
                                                  )
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    })
                              ]
                            : _vm._e(),
                          _vm._v(" "),
                          item.type == "checkboxes"
                            ? [
                                _c("b-form-checkbox-group", {
                                  ref: item.key,
                                  refInFor: true,
                                  class: item.key,
                                  attrs: {
                                    id: "checkbox-group-" + key,
                                    options: item.options,
                                    required: item.required,
                                    disabled: item.disabled,
                                    size: item.size,
                                    state: item.state,
                                    plain: item.plain,
                                    buttons: item.buttons,
                                    stacked: item.stacked,
                                    "button-variant": item.button_variant,
                                    autofocus: item.autofocus,
                                    switchs: item.switches,
                                    "html-field": item.html - _vm.field,
                                    "text-field": item.text - _vm.field,
                                    validated: item.validated
                                  },
                                  model: {
                                    value: _vm.values[item.key],
                                    callback: function($$v) {
                                      _vm.$set(_vm.values, item.key, $$v)
                                    },
                                    expression: "values[item.key]"
                                  }
                                })
                              ]
                            : _vm._e(),
                          _vm._v(" "),
                          item.type == "boolean"
                            ? [
                                _c(
                                  "div",
                                  [
                                    _c("b-form-checkbox", {
                                      ref: item.key,
                                      refInFor: true,
                                      class: item.key,
                                      attrs: {
                                        id: "input-" + key,
                                        "unchecked-value": item.unchecked_value,
                                        required: item.required,
                                        disabled: item.disabled,
                                        size: item.size,
                                        state: item.state,
                                        plain: item.plain,
                                        button: item.button,
                                        "button-variant": item.button_variant,
                                        switch: item.switch,
                                        autofocus: item.autofocus
                                      },
                                      model: {
                                        value: _vm.values[item.key],
                                        callback: function($$v) {
                                          _vm.$set(_vm.values, item.key, $$v)
                                        },
                                        expression: "values[item.key]"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ]
                            : _vm._e(),
                          _vm._v(" "),
                          item.type == "checkbox"
                            ? [
                                _c(
                                  "div",
                                  [
                                    _c("b-form-checkbox", {
                                      ref: item.key,
                                      refInFor: true,
                                      class: item.key,
                                      attrs: {
                                        id: "input-" + key,
                                        "unchecked-value": item.unchecked_value,
                                        required: item.required,
                                        disabled: item.disabled,
                                        size: item.size,
                                        state: item.state,
                                        plain: item.plain,
                                        button: item.button,
                                        "button-variant": item.button_variant,
                                        switch: item.switch,
                                        indeterminate: item.indeterminate,
                                        inline: item.inline,
                                        autofocus: item.autofocus
                                      },
                                      model: {
                                        value: _vm.values[item.key],
                                        callback: function($$v) {
                                          _vm.$set(_vm.values, item.key, $$v)
                                        },
                                        expression: "values[item.key]"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ]
                            : _vm._e(),
                          _vm._v(" "),
                          item.type == "radio"
                            ? [
                                _c(
                                  "b-form-radio-group",
                                  {
                                    attrs: {
                                      id: "radio-group-" + item.key,
                                      stacked: ""
                                    },
                                    model: {
                                      value: _vm.values[item.key],
                                      callback: function($$v) {
                                        _vm.$set(_vm.values, item.key, $$v)
                                      },
                                      expression: "values[item.key]"
                                    }
                                  },
                                  _vm._l(item.options, function(option) {
                                    return _c(
                                      "b-form-radio",
                                      {
                                        key: item.key,
                                        attrs: { value: option.value }
                                      },
                                      [_vm._v(_vm._s(option.text))]
                                    )
                                  }),
                                  1
                                )
                              ]
                            : _vm._e(),
                          _vm._v(" "),
                          item.type == "textarea"
                            ? [
                                _c("b-form-textarea", {
                                  ref: item.key,
                                  refInFor: true,
                                  class: item.key,
                                  attrs: {
                                    rows: item.rows || 2,
                                    placeholder: item.placeholder,
                                    required: item.required,
                                    disabled: item.disabled,
                                    size: item.size,
                                    state: item.state,
                                    autofocus: item.autofocus,
                                    number: item.number,
                                    plaintext: item.plaintext,
                                    readonly: item.readonly,
                                    autocomplete: item.autocomplete,
                                    trim: item.trim,
                                    max_rows: item.max_rows,
                                    wrap: item.wrap
                                  },
                                  model: {
                                    value: _vm.values[item.key],
                                    callback: function($$v) {
                                      _vm.$set(_vm.values, item.key, $$v)
                                    },
                                    expression: "values[item.key]"
                                  }
                                })
                              ]
                            : _vm._e(),
                          _vm._v(" "),
                          item.type == "html"
                            ? [
                                _c(
                                  "b-row",
                                  [
                                    _c("b-col", { staticClass: "text-right" }, [
                                      _c(
                                        "a",
                                        {
                                          attrs: { href: "#" },
                                          on: {
                                            click: function($event) {
                                              item.source_view = !item.source_view
                                            }
                                          }
                                        },
                                        [_vm._v("Source View")]
                                      )
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                item.source_view == true
                                  ? _c("b-form-textarea", {
                                      ref: item.key,
                                      refInFor: true,
                                      class: item.key,
                                      attrs: {
                                        placeholder: item.placeholder,
                                        "max-rows": "6",
                                        required: item.required,
                                        disabled: item.disabled,
                                        size: item.size,
                                        state: item.state,
                                        autofocus: item.autofocus
                                      },
                                      model: {
                                        value: _vm.values[item.key],
                                        callback: function($$v) {
                                          _vm.$set(_vm.values, item.key, $$v)
                                        },
                                        expression: "values[item.key]"
                                      }
                                    })
                                  : _vm._e(),
                                _vm._v(" "),
                                item.source_view == false
                                  ? _c("vue-editor", {
                                      ref: item.key,
                                      refInFor: true,
                                      class: item.key,
                                      model: {
                                        value: _vm.values[item.key],
                                        callback: function($$v) {
                                          _vm.$set(_vm.values, item.key, $$v)
                                        },
                                        expression: "values[item.key]"
                                      }
                                    })
                                  : _vm._e()
                              ]
                            : _vm._e(),
                          _vm._v(" "),
                          item.type == "multiselect"
                            ? [
                                _c("b-form-select", {
                                  ref: item.key,
                                  refInFor: true,
                                  class: item.key,
                                  attrs: {
                                    multiple: "",
                                    required: item.required,
                                    disabled: item.disabled,
                                    size: item.size,
                                    state: item.state,
                                    plain: item.plain,
                                    "disabled-field": item.disabled - _vm.field,
                                    "html-field": item.html - _vm.field,
                                    options: item.options,
                                    "text-field": item.text - _vm.field,
                                    multiple: item.multiple,
                                    "select-size": item.select - _vm.size,
                                    autofocus: item.autofocus
                                  },
                                  model: {
                                    value: _vm.values[item.key],
                                    callback: function($$v) {
                                      _vm.$set(_vm.values, item.key, $$v)
                                    },
                                    expression: "values[item.key]"
                                  }
                                })
                              ]
                            : _vm._e(),
                          _vm._v(" "),
                          item.type == "file"
                            ? [
                                _c("b-form-file", {
                                  ref: item.key,
                                  refInFor: true,
                                  class: item.key,
                                  attrs: {
                                    placeholder: item.placeholder,
                                    "drop-placeholder": "Drop file here...",
                                    required: item.required,
                                    disabled: item.disabled,
                                    size: item.size,
                                    state: item.state,
                                    autofocus: item.autofocus
                                  },
                                  model: {
                                    value: _vm.values[item.key],
                                    callback: function($$v) {
                                      _vm.$set(_vm.values, item.key, $$v)
                                    },
                                    expression: "values[item.key]"
                                  }
                                })
                              ]
                            : _vm._e(),
                          _vm._v(" "),
                          item.type == "youtube"
                            ? [
                                _c("b-form-input", {
                                  ref: item.key,
                                  refInFor: true,
                                  class: item.key,
                                  attrs: {
                                    id: "input-" + key,
                                    placeholder: item.placeholder,
                                    required: item.required,
                                    disabled: item.disabled,
                                    size: item.size,
                                    state: item.state,
                                    autofocus: item.autofocus
                                  },
                                  nativeOn: {
                                    blur: function($event) {
                                      return _vm.youtube(item.key)
                                    }
                                  },
                                  model: {
                                    value: _vm.values[item.key],
                                    callback: function($$v) {
                                      _vm.$set(_vm.values, item.key, $$v)
                                    },
                                    expression: "values[item.key]"
                                  }
                                }),
                                _vm._v(" "),
                                _vm.values[item.key] &&
                                _vm.values[item.key].includes("youtu") &&
                                _vm.values[item.key].includes("http")
                                  ? _c("b-embed", {
                                      attrs: {
                                        type: "iframe",
                                        aspect: "16by9",
                                        src: _vm.values[item.key],
                                        allowfullscreen: ""
                                      }
                                    })
                                  : _vm._e()
                              ]
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.errors[item.key]
                            ? _c("div", { staticClass: "validationMessage" }, [
                                _vm._v(_vm._s(_vm.errors[item.key]))
                              ])
                            : _vm._e()
                        ],
                        2
                      )
                    ],
                    1
                  )
            ]
          })
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Edit.vue?vue&type=template&id=4a9138a9&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Edit.vue?vue&type=template&id=4a9138a9& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("base-fields", { attrs: { fields: _vm.fields, values: _vm.values } }),
      _vm._v(" "),
      _c("b-button", { on: { click: _vm.submitAction } }, [_vm._v("Submit")])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/BaseFields.vue":
/*!************************************************!*\
  !*** ./resources/js/components/BaseFields.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseFields_vue_vue_type_template_id_2f757895___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseFields.vue?vue&type=template&id=2f757895& */ "./resources/js/components/BaseFields.vue?vue&type=template&id=2f757895&");
/* harmony import */ var _BaseFields_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseFields.vue?vue&type=script&lang=js& */ "./resources/js/components/BaseFields.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BaseFields_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BaseFields_vue_vue_type_template_id_2f757895___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BaseFields_vue_vue_type_template_id_2f757895___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/BaseFields.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/BaseFields.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/BaseFields.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseFields_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./BaseFields.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BaseFields.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseFields_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/BaseFields.vue?vue&type=template&id=2f757895&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/BaseFields.vue?vue&type=template&id=2f757895& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseFields_vue_vue_type_template_id_2f757895___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./BaseFields.vue?vue&type=template&id=2f757895& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BaseFields.vue?vue&type=template&id=2f757895&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseFields_vue_vue_type_template_id_2f757895___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseFields_vue_vue_type_template_id_2f757895___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Edit.vue":
/*!*************************************!*\
  !*** ./resources/js/views/Edit.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_4a9138a9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=4a9138a9& */ "./resources/js/views/Edit.vue?vue&type=template&id=4a9138a9&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/views/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_4a9138a9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_4a9138a9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Edit.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/views/Edit.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Edit.vue?vue&type=template&id=4a9138a9&":
/*!********************************************************************!*\
  !*** ./resources/js/views/Edit.vue?vue&type=template&id=4a9138a9& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_4a9138a9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=4a9138a9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Edit.vue?vue&type=template&id=4a9138a9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_4a9138a9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_4a9138a9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);