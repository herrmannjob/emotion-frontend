var VueformMultiselect = (function (e, t) {
    'use strict'
    function u(e) {
        return -1 !== [null, void 0, !1].indexOf(e)
    }
    function a(e) {
        return (a =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                      return typeof e
                  }
                : function (e) {
                      return e &&
                          'function' == typeof Symbol &&
                          e.constructor === Symbol &&
                          e !== Symbol.prototype
                          ? 'symbol'
                          : typeof e
                  })(e)
    }
    function l(e, t, u) {
        return (
            t in e
                ? Object.defineProperty(e, t, {
                      value: u,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                  })
                : (e[t] = u),
            e
        )
    }
    function n(e, t) {
        var u = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e)
            t &&
                (a = a.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                u.push.apply(u, a)
        }
        return u
    }
    function r(e) {
        for (var t = 1; t < arguments.length; t++) {
            var u = null != arguments[t] ? arguments[t] : {}
            t % 2
                ? n(Object(u), !0).forEach(function (t) {
                      l(e, t, u[t])
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(u)
                  )
                : n(Object(u)).forEach(function (t) {
                      Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(u, t)
                      )
                  })
        }
        return e
    }
    function o(e) {
        return (
            (function (e) {
                if (Array.isArray(e)) return i(e)
            })(e) ||
            (function (e) {
                if (
                    'undefined' != typeof Symbol &&
                    Symbol.iterator in Object(e)
                )
                    return Array.from(e)
            })(e) ||
            (function (e, t) {
                if (!e) return
                if ('string' == typeof e) return i(e, t)
                var u = Object.prototype.toString.call(e).slice(8, -1)
                'Object' === u && e.constructor && (u = e.constructor.name)
                if ('Map' === u || 'Set' === u) return Array.from(e)
                if (
                    'Arguments' === u ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)
                )
                    return i(e, t)
            })(e) ||
            (function () {
                throw new TypeError(
                    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                )
            })()
        )
    }
    function i(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var u = 0, a = new Array(t); u < t; u++) a[u] = e[u]
        return a
    }
    function c(e) {
        var t =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
        return t
            ? String(e).toLowerCase().trim()
            : String(e)
                  .normalize('NFD')
                  .replace(
                      /(?:[\^`\xA8\xAF\xB4\xB7\xB8\u02B0-\u034E\u0350-\u0357\u035D-\u0362\u0374\u0375\u037A\u0384\u0385\u0483-\u0487\u0559\u0591-\u05A1\u05A3-\u05BD\u05BF\u05C1\u05C2\u05C4\u064B-\u0652\u0657\u0658\u06DF\u06E0\u06E5\u06E6\u06EA-\u06EC\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F5\u0818\u0819\u08E3-\u08FE\u093C\u094D\u0951-\u0954\u0971\u09BC\u09CD\u0A3C\u0A4D\u0ABC\u0ACD\u0AFD-\u0AFF\u0B3C\u0B4D\u0B55\u0BCD\u0C4D\u0CBC\u0CCD\u0D3B\u0D3C\u0D4D\u0DCA\u0E47-\u0E4C\u0E4E\u0EBA\u0EC8-\u0ECC\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F82-\u0F84\u0F86\u0F87\u0FC6\u1037\u1039\u103A\u1063\u1064\u1069-\u106D\u1087-\u108D\u108F\u109A\u109B\u135D-\u135F\u17C9-\u17D3\u17DD\u1939-\u193B\u1A75-\u1A7C\u1A7F\u1AB0-\u1ABD\u1B34\u1B44\u1B6B-\u1B73\u1BAA\u1BAB\u1C36\u1C37\u1C78-\u1C7D\u1CD0-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1D2C-\u1D6A\u1DC4-\u1DCF\u1DF5-\u1DF9\u1DFD-\u1DFF\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2CEF-\u2CF1\u2E2F\u302A-\u302F\u3099-\u309C\u30FC\uA66F\uA67C\uA67D\uA67F\uA69C\uA69D\uA6F0\uA6F1\uA700-\uA721\uA788-\uA78A\uA7F8\uA7F9\uA8C4\uA8E0-\uA8F1\uA92B-\uA92E\uA953\uA9B3\uA9C0\uA9E5\uAA7B-\uAA7D\uAABF-\uAAC2\uAAF6\uAB5B-\uAB5F\uAB69-\uAB6B\uABEC\uABED\uFB1E\uFE20-\uFE2F\uFF3E\uFF40\uFF70\uFF9E\uFF9F\uFFE3]|\uD800\uDEE0|\uD802[\uDEE5\uDEE6]|\uD803[\uDD22-\uDD27\uDF46-\uDF50]|\uD804[\uDCB9\uDCBA\uDD33\uDD34\uDD73\uDDC0\uDDCA-\uDDCC\uDE35\uDE36\uDEE9\uDEEA\uDF3C\uDF4D\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC42\uDC46\uDCC2\uDCC3\uDDBF\uDDC0\uDE3F\uDEB6\uDEB7\uDF2B]|\uD806[\uDC39\uDC3A\uDD3D\uDD3E\uDD43\uDDE0\uDE34\uDE47\uDE99]|\uD807[\uDC3F\uDD42\uDD44\uDD45\uDD97]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF8F-\uDF9F\uDFF0\uDFF1]|\uD834[\uDD67-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD]|\uD838[\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD46\uDD48-\uDD4A])/g,
                      ''
                  )
                  .toLowerCase()
                  .trim()
    }
    function s(t, n, o) {
        var i = e.toRefs(t),
            s = i.options,
            d = i.mode,
            v = i.trackBy,
            p = i.limit,
            f = i.hideSelected,
            m = i.createTag,
            g = i.createOption,
            D = i.label,
            h = i.appendNewTag,
            b = i.appendNewOption,
            y = i.multipleLabel,
            C = i.object,
            B = i.loading,
            S = i.delay,
            F = i.resolveOnLoad,
            k = i.minChars,
            O = i.filterResults,
            A = i.clearOnSearch,
            E = i.clearOnSelect,
            L = i.valueProp,
            V = i.canDeselect,
            P = i.max,
            w = i.strict,
            N = i.closeOnSelect,
            q = i.groups,
            x = (i.groupLabel, i.groupOptions),
            T = i.groupHideEmpty,
            I = i.groupSelect,
            _ = o.iv,
            j = o.ev,
            R = o.search,
            M = o.clearSearch,
            $ = o.update,
            H = o.pointer,
            G = o.clearPointer,
            K = o.blur,
            W = o.focus,
            U = o.deactivate,
            z = e.ref([]),
            J = e.ref([]),
            Q = e.ref(!1),
            X = e.computed(function () {
                return m.value || g.value || !1
            }),
            Y = e.computed(function () {
                return void 0 !== h.value
                    ? h.value
                    : void 0 === b.value || b.value
            }),
            Z = e.computed(function () {
                if (q.value) {
                    var e = J.value || [],
                        t = []
                    return (
                        e.forEach(function (e) {
                            Ae(e[x.value]).forEach(function (u) {
                                t.push(
                                    Object.assign(
                                        {},
                                        u,
                                        e.disabled ? { disabled: !0 } : {}
                                    )
                                )
                            })
                        }),
                        t
                    )
                }
                var u = Ae(J.value || [])
                return z.value.length && (u = u.concat(z.value)), u
            }),
            ee = e.computed(function () {
                return q.value
                    ? ke(
                          (J.value || []).map(function (e) {
                              var t,
                                  u = Ae(e[x.value])
                              return r(
                                  r({}, e),
                                  {},
                                  (l(
                                      (t = { group: !0 }),
                                      x.value,
                                      Oe(u, !1).map(function (t) {
                                          return Object.assign(
                                              {},
                                              t,
                                              e.disabled ? { disabled: !0 } : {}
                                          )
                                      })
                                  ),
                                  l(
                                      t,
                                      '__VISIBLE__',
                                      Oe(u).map(function (t) {
                                          return Object.assign(
                                              {},
                                              t,
                                              e.disabled ? { disabled: !0 } : {}
                                          )
                                      })
                                  ),
                                  t)
                              )
                          })
                      )
                    : []
            }),
            te = e.computed(function () {
                var e = Z.value
                return (
                    re.value.length && (e = re.value.concat(e)),
                    (e = Oe(e)),
                    p.value > 0 && (e = e.slice(0, p.value)),
                    e
                )
            }),
            ue = e.computed(function () {
                switch (d.value) {
                    case 'single':
                        return !u(_.value[L.value])
                    case 'multiple':
                    case 'tags':
                        return !u(_.value) && _.value.length > 0
                }
            }),
            ae = e.computed(function () {
                return void 0 !== y && void 0 !== y.value
                    ? y.value(_.value)
                    : _.value && _.value.length > 1
                    ? ''.concat(_.value.length, ' options selected')
                    : '1 option selected'
            }),
            le = e.computed(function () {
                return !Z.value.length && !Q.value && !re.value.length
            }),
            ne = e.computed(function () {
                return (
                    Z.value.length > 0 &&
                    0 == te.value.length &&
                    ((R.value && q.value) || !q.value)
                )
            }),
            re = e.computed(function () {
                var e
                return !1 !== X.value && R.value
                    ? -1 !== Be(R.value)
                        ? []
                        : [
                              ((e = {}),
                              l(e, L.value, R.value),
                              l(e, D.value, R.value),
                              l(e, oe.value, R.value),
                              e),
                          ]
                    : []
            }),
            oe = e.computed(function () {
                return v.value || D.value
            }),
            ie = e.computed(function () {
                switch (d.value) {
                    case 'single':
                        return null
                    case 'multiple':
                    case 'tags':
                        return []
                }
            }),
            ce = e.computed(function () {
                return B.value || Q.value
            }),
            se = function (e) {
                switch (('object' !== a(e) && (e = Ce(e)), d.value)) {
                    case 'single':
                        $(e)
                        break
                    case 'multiple':
                    case 'tags':
                        $(_.value.concat(e))
                }
                n.emit('select', ve(e), e)
            },
            de = function (e) {
                switch (('object' !== a(e) && (e = Ce(e)), d.value)) {
                    case 'single':
                        fe()
                        break
                    case 'tags':
                    case 'multiple':
                        $(
                            Array.isArray(e)
                                ? _.value.filter(function (t) {
                                      return (
                                          -1 ===
                                          e
                                              .map(function (e) {
                                                  return e[L.value]
                                              })
                                              .indexOf(t[L.value])
                                      )
                                  })
                                : _.value.filter(function (t) {
                                      return t[L.value] != e[L.value]
                                  })
                        )
                }
                n.emit('deselect', ve(e), e)
            },
            ve = function (e) {
                return C.value ? e : e[L.value]
            },
            pe = function (e) {
                de(e)
            },
            fe = function () {
                n.emit('clear'), $(ie.value)
            },
            me = function (e) {
                if (void 0 !== e.group)
                    return (
                        'single' !== d.value &&
                        ye(e[x.value]) &&
                        e[x.value].length
                    )
                switch (d.value) {
                    case 'single':
                        return !u(_.value) && _.value[L.value] == e[L.value]
                    case 'tags':
                    case 'multiple':
                        return (
                            !u(_.value) &&
                            -1 !==
                                _.value
                                    .map(function (e) {
                                        return e[L.value]
                                    })
                                    .indexOf(e[L.value])
                        )
                }
            },
            ge = function (e) {
                return !0 === e.disabled
            },
            De = function () {
                return (
                    !(
                        void 0 === P ||
                        -1 === P.value ||
                        (!ue.value && P.value > 0)
                    ) && _.value.length >= P.value
                )
            },
            he = function (e) {
                void 0 === Ce(e[L.value]) &&
                    X.value &&
                    (n.emit('tag', e[L.value]),
                    n.emit('option', e[L.value]),
                    Y.value && Fe(e),
                    M())
            },
            be = function (e) {
                return (
                    void 0 ===
                    e.find(function (e) {
                        return !me(e) && !e.disabled
                    })
                )
            },
            ye = function (e) {
                return (
                    void 0 ===
                    e.find(function (e) {
                        return !me(e)
                    })
                )
            },
            Ce = function (e) {
                return Z.value[
                    Z.value
                        .map(function (e) {
                            return String(e[L.value])
                        })
                        .indexOf(String(e))
                ]
            },
            Be = function (e) {
                return Z.value
                    .map(function (e) {
                        return e[oe.value]
                    })
                    .indexOf(e)
            },
            Se = function (e) {
                return (
                    -1 !== ['tags', 'multiple'].indexOf(d.value) &&
                    f.value &&
                    me(e)
                )
            },
            Fe = function (e) {
                z.value.push(e)
            },
            ke = function (e) {
                return T.value
                    ? e.filter(function (e) {
                          return R.value
                              ? e.__VISIBLE__.length
                              : e[x.value].length
                      })
                    : e.filter(function (e) {
                          return !R.value || e.__VISIBLE__.length
                      })
            },
            Oe = function (e) {
                var t =
                        !(arguments.length > 1 && void 0 !== arguments[1]) ||
                        arguments[1],
                    u = e
                return (
                    R.value &&
                        O.value &&
                        (u = u.filter(function (e) {
                            return (
                                -1 !==
                                c(e[oe.value], w.value).indexOf(
                                    c(R.value, w.value)
                                )
                            )
                        })),
                    f.value &&
                        t &&
                        (u = u.filter(function (e) {
                            return !Se(e)
                        })),
                    u
                )
            },
            Ae = function (e) {
                var t,
                    u = e
                return (
                    (t = u),
                    '[object Object]' === Object.prototype.toString.call(t) &&
                        (u = Object.keys(u).map(function (e) {
                            var t,
                                a = u[e]
                            return (
                                l((t = {}), L.value, e),
                                l(t, oe.value, a),
                                l(t, D.value, a),
                                t
                            )
                        })),
                    (u = u.map(function (e) {
                        var t
                        return 'object' === a(e)
                            ? e
                            : (l((t = {}), L.value, e),
                              l(t, oe.value, e),
                              l(t, D.value, e),
                              t)
                    }))
                )
            },
            Ee = function () {
                u(j.value) || (_.value = Ve(j.value))
            },
            Le = function (e) {
                ;(Q.value = !0),
                    s.value(R.value).then(function (t) {
                        ;(J.value = t),
                            'function' == typeof e && e(t),
                            (Q.value = !1)
                    })
            },
            Ve = function (e) {
                return u(e)
                    ? 'single' === d.value
                        ? {}
                        : []
                    : C.value
                    ? e
                    : 'single' === d.value
                    ? Ce(e) || {}
                    : e
                          .filter(function (e) {
                              return !!Ce(e)
                          })
                          .map(function (e) {
                              return Ce(e)
                          })
            }
        if ('single' !== d.value && !u(j.value) && !Array.isArray(j.value))
            throw new Error(
                'v-model must be an array when using "'.concat(
                    d.value,
                    '" mode'
                )
            )
        return (
            s && 'function' == typeof s.value
                ? F.value
                    ? Le(Ee)
                    : 1 == C.value && Ee()
                : ((J.value = s.value), Ee()),
            S.value > -1 &&
                e.watch(
                    R,
                    function (e) {
                        e.length < k.value ||
                            ((Q.value = !0),
                            A.value && (J.value = []),
                            setTimeout(function () {
                                e == R.value &&
                                    s.value(R.value).then(function (t) {
                                        ;(e != R.value && R.value) ||
                                            ((J.value = t),
                                            (H.value =
                                                te.value.filter(function (e) {
                                                    return !0 !== e.disabled
                                                })[0] || null),
                                            (Q.value = !1))
                                    })
                            }, S.value))
                    },
                    { flush: 'sync' }
                ),
            e.watch(
                j,
                function (e) {
                    var t, a, l
                    if (u(e)) _.value = Ve(e)
                    else
                        switch (d.value) {
                            case 'single':
                                ;(C.value
                                    ? e[L.value] != _.value[L.value]
                                    : e != _.value[L.value]) &&
                                    (_.value = Ve(e))
                                break
                            case 'multiple':
                            case 'tags':
                                ;(t = C.value
                                    ? e.map(function (e) {
                                          return e[L.value]
                                      })
                                    : e),
                                    (a = _.value.map(function (e) {
                                        return e[L.value]
                                    })),
                                    (l = a.slice().sort()),
                                    (t.length === a.length &&
                                        t
                                            .slice()
                                            .sort()
                                            .every(function (e, t) {
                                                return e === l[t]
                                            })) ||
                                        (_.value = Ve(e))
                        }
                },
                { deep: !0 }
            ),
            'function' != typeof t.options &&
                e.watch(s, function (e, u) {
                    ;(J.value = t.options),
                        Object.keys(_.value).length || Ee(),
                        (function () {
                            if (ue.value)
                                if ('single' === d.value) {
                                    var e = Ce(_.value[L.value])[D.value]
                                    ;(_.value[D.value] = e),
                                        C.value && (j.value[D.value] = e)
                                } else
                                    _.value.forEach(function (e, t) {
                                        var u = Ce(_.value[t][L.value])[D.value]
                                        ;(_.value[t][D.value] = u),
                                            C.value && (j.value[t][D.value] = u)
                                    })
                        })()
                }),
            {
                fo: te,
                filteredOptions: te,
                hasSelected: ue,
                multipleLabelText: ae,
                eo: Z,
                extendedOptions: Z,
                fg: ee,
                filteredGroups: ee,
                noOptions: le,
                noResults: ne,
                resolving: Q,
                busy: ce,
                select: se,
                deselect: de,
                remove: pe,
                selectAll: function () {
                    'single' !== d.value && se(te.value)
                },
                clear: fe,
                isSelected: me,
                isDisabled: ge,
                isMax: De,
                getOption: Ce,
                handleOptionClick: function (e) {
                    if (!ge(e)) {
                        switch (d.value) {
                            case 'single':
                                if (me(e)) return void (V.value && de(e))
                                he(e), K(), se(e)
                                break
                            case 'multiple':
                                if (me(e)) return void de(e)
                                if (De()) return
                                he(e),
                                    se(e),
                                    E.value && M(),
                                    f.value && G(),
                                    N.value && K()
                                break
                            case 'tags':
                                if (me(e)) return void de(e)
                                if (De()) return
                                he(e),
                                    E.value && M(),
                                    se(e),
                                    f.value && G(),
                                    N.value && K()
                        }
                        N.value ? U() : W()
                    }
                },
                handleGroupClick: function (e) {
                    if (!ge(e) && 'single' !== d.value && I.value) {
                        switch (d.value) {
                            case 'multiple':
                            case 'tags':
                                be(e[x.value])
                                    ? de(e[x.value])
                                    : se(
                                          e[x.value]
                                              .filter(function (e) {
                                                  return (
                                                      -1 ===
                                                      _.value
                                                          .map(function (e) {
                                                              return e[L.value]
                                                          })
                                                          .indexOf(e[L.value])
                                                  )
                                              })
                                              .filter(function (e) {
                                                  return !e.disabled
                                              })
                                              .filter(function (e, t) {
                                                  return (
                                                      _.value.length + 1 + t <=
                                                          P.value ||
                                                      -1 === P.value
                                                  )
                                              })
                                      )
                        }
                        N.value && U()
                    }
                },
                handleTagRemove: function (e, t) {
                    0 === t.button ? pe(e) : t.preventDefault()
                },
                refreshOptions: function (e) {
                    Le(e)
                },
                resolveOptions: Le,
            }
        )
    }
    var d = {
        name: 'Multiselect',
        emits: [
            'open',
            'close',
            'select',
            'deselect',
            'input',
            'search-change',
            'tag',
            'option',
            'update:modelValue',
            'change',
            'clear',
        ],
        props: {
            value: { required: !1 },
            modelValue: { required: !1 },
            options: {
                type: [Array, Object, Function],
                required: !1,
                default: () => [],
            },
            id: { type: [String, Number], required: !1 },
            name: {
                type: [String, Number],
                required: !1,
                default: 'multiselect',
            },
            disabled: { type: Boolean, required: !1, default: !1 },
            label: { type: String, required: !1, default: 'label' },
            trackBy: { type: String, required: !1, default: void 0 },
            valueProp: { type: String, required: !1, default: 'value' },
            placeholder: { type: String, required: !1, default: null },
            mode: { type: String, required: !1, default: 'single' },
            searchable: { type: Boolean, required: !1, default: !1 },
            limit: { type: Number, required: !1, default: -1 },
            hideSelected: { type: Boolean, required: !1, default: !0 },
            createTag: { type: Boolean, required: !1, default: void 0 },
            createOption: { type: Boolean, required: !1, default: void 0 },
            appendNewTag: { type: Boolean, required: !1, default: void 0 },
            appendNewOption: { type: Boolean, required: !1, default: void 0 },
            addTagOn: { type: Array, required: !1, default: void 0 },
            addOptionOn: { type: Array, required: !1, default: void 0 },
            caret: { type: Boolean, required: !1, default: !0 },
            loading: { type: Boolean, required: !1, default: !1 },
            noOptionsText: {
                type: String,
                required: !1,
                default: 'The list is empty',
            },
            noResultsText: {
                type: String,
                required: !1,
                default: 'No results found',
            },
            multipleLabel: { type: Function, required: !1 },
            object: { type: Boolean, required: !1, default: !1 },
            delay: { type: Number, required: !1, default: -1 },
            minChars: { type: Number, required: !1, default: 0 },
            resolveOnLoad: { type: Boolean, required: !1, default: !0 },
            filterResults: { type: Boolean, required: !1, default: !0 },
            clearOnSearch: { type: Boolean, required: !1, default: !1 },
            clearOnSelect: { type: Boolean, required: !1, default: !0 },
            canDeselect: { type: Boolean, required: !1, default: !0 },
            canClear: { type: Boolean, required: !1, default: !0 },
            max: { type: Number, required: !1, default: -1 },
            showOptions: { type: Boolean, required: !1, default: !0 },
            required: { type: Boolean, required: !1, default: !1 },
            openDirection: { type: String, required: !1, default: 'bottom' },
            nativeSupport: { type: Boolean, required: !1, default: !1 },
            classes: { type: Object, required: !1, default: () => ({}) },
            strict: { type: Boolean, required: !1, default: !0 },
            closeOnSelect: { type: Boolean, required: !1, default: !0 },
            autocomplete: { type: String, required: !1 },
            groups: { type: Boolean, required: !1, default: !1 },
            groupLabel: { type: String, required: !1, default: 'label' },
            groupOptions: { type: String, required: !1, default: 'options' },
            groupHideEmpty: { type: Boolean, required: !1, default: !1 },
            groupSelect: { type: Boolean, required: !1, default: !0 },
            inputType: { type: String, required: !1, default: 'text' },
        },
        setup(t, a) {
            const l = (function (t, u) {
                    var a = e.toRefs(t),
                        l = a.value,
                        n = a.modelValue,
                        r = a.mode,
                        o = a.valueProp,
                        i = e.ref('single' !== r.value ? [] : {}),
                        c = void 0 !== u.expose ? n : l,
                        s = e.computed(function () {
                            return 'single' === r.value
                                ? i.value[o.value]
                                : i.value.map(function (e) {
                                      return e[o.value]
                                  })
                        }),
                        d = e.computed(function () {
                            return 'single' !== r.value
                                ? i.value
                                      .map(function (e) {
                                          return e[o.value]
                                      })
                                      .join(',')
                                : i.value[o.value]
                        })
                    return {
                        iv: i,
                        internalValue: i,
                        ev: c,
                        externalValue: c,
                        textValue: d,
                        plainValue: s,
                    }
                })(t, a),
                n = (function (t, u, a) {
                    var l = e.toRefs(t),
                        n = l.groupSelect,
                        r = l.mode,
                        o = l.groups,
                        i = e.ref(null),
                        c = function (e) {
                            void 0 === e ||
                                (null !== e && e.disabled) ||
                                (o.value &&
                                    e &&
                                    e.group &&
                                    ('single' === r.value || !n.value)) ||
                                (i.value = e)
                        }
                    return {
                        pointer: i,
                        setPointer: c,
                        clearPointer: function () {
                            c(null)
                        },
                    }
                })(t),
                i = (function (t, u, a) {
                    var l = e.toRefs(t).disabled,
                        n = e.ref(!1)
                    return {
                        isOpen: n,
                        open: function () {
                            n.value ||
                                l.value ||
                                ((n.value = !0), u.emit('open'))
                        },
                        close: function () {
                            n.value && ((n.value = !1), u.emit('close'))
                        },
                    }
                })(t, a),
                c = (function (t, u, a) {
                    var l = e.ref(null),
                        n = e.ref(null)
                    return (
                        e.watch(l, function (e) {
                            u.emit('search-change', e)
                        }),
                        {
                            search: l,
                            input: n,
                            clearSearch: function () {
                                l.value = ''
                            },
                            handleSearchInput: function (e) {
                                l.value = e.target.value
                            },
                            handlePaste: function (e) {
                                u.emit('paste', e)
                            },
                        }
                    )
                })(0, a),
                d = (function (t, a, l) {
                    var n = e.toRefs(t),
                        r = n.object,
                        o = n.valueProp,
                        i = n.mode,
                        c = l.iv,
                        s = function (e) {
                            return r.value || u(e)
                                ? e
                                : Array.isArray(e)
                                ? e.map(function (e) {
                                      return e[o.value]
                                  })
                                : e[o.value]
                        },
                        d = function (e) {
                            return u(e) ? ('single' === i.value ? {} : []) : e
                        }
                    return {
                        update: function (e) {
                            c.value = d(e)
                            var t = s(e)
                            a.emit('change', t),
                                a.emit('input', t),
                                a.emit('update:modelValue', t)
                        },
                    }
                })(t, a, { iv: l.iv }),
                v = (function (t, u, a) {
                    var l = e.toRefs(t),
                        n = l.searchable,
                        r = l.disabled,
                        o = a.input,
                        i = a.open,
                        c = a.close,
                        s = a.clearSearch,
                        d = e.ref(null),
                        v = e.ref(!1),
                        p = e.computed(function () {
                            return n.value || r.value ? -1 : 0
                        }),
                        f = function () {
                            n.value && o.value.blur(), d.value.blur()
                        },
                        m = function () {
                            n.value && !r.value && o.value.focus()
                        },
                        g = function () {
                            ;(v.value = !1),
                                setTimeout(function () {
                                    v.value || (c(), s())
                                }, 1)
                        }
                    return {
                        multiselect: d,
                        tabindex: p,
                        isActive: v,
                        blur: f,
                        focus: m,
                        handleFocus: function () {
                            m()
                        },
                        activate: function () {
                            r.value || ((v.value = !0), i())
                        },
                        deactivate: g,
                        handleCaretClick: function () {
                            g(), f()
                        },
                    }
                })(t, 0, {
                    input: c.input,
                    open: i.open,
                    close: i.close,
                    clearSearch: c.clearSearch,
                }),
                p = s(t, a, {
                    ev: l.ev,
                    iv: l.iv,
                    search: c.search,
                    clearSearch: c.clearSearch,
                    update: d.update,
                    pointer: n.pointer,
                    clearPointer: n.clearPointer,
                    blur: v.blur,
                    focus: v.focus,
                    deactivate: v.deactivate,
                }),
                f = (function (t, u, a) {
                    var l = e.toRefs(t),
                        n = l.valueProp,
                        r = l.showOptions,
                        i = l.searchable,
                        c = l.groupLabel,
                        s = l.groups,
                        d = l.mode,
                        v = l.groupSelect,
                        p = a.fo,
                        f = a.fg,
                        m = a.handleOptionClick,
                        g = a.handleGroupClick,
                        D = a.search,
                        h = a.pointer,
                        b = a.setPointer,
                        y = a.clearPointer,
                        C = a.multiselect,
                        B = e.computed(function () {
                            return p.value.filter(function (e) {
                                return !e.disabled
                            })
                        }),
                        S = e.computed(function () {
                            return f.value.filter(function (e) {
                                return !e.disabled
                            })
                        }),
                        F = e.computed(function () {
                            return 'single' !== d.value && v.value
                        }),
                        k = e.computed(function () {
                            return h.value && h.value.group
                        }),
                        O = e.computed(function () {
                            return T(h.value)
                        }),
                        A = e.computed(function () {
                            var e = k.value ? h.value : T(h.value),
                                t = S.value
                                    .map(function (e) {
                                        return e[c.value]
                                    })
                                    .indexOf(e[c.value]),
                                u = S.value[t - 1]
                            return void 0 === u && (u = L.value), u
                        }),
                        E = e.computed(function () {
                            var e =
                                S.value
                                    .map(function (e) {
                                        return e.label
                                    })
                                    .indexOf(
                                        k.value
                                            ? h.value[c.value]
                                            : T(h.value)[c.value]
                                    ) + 1
                            return S.value.length <= e && (e = 0), S.value[e]
                        }),
                        L = e.computed(function () {
                            return o(S.value).slice(-1)[0]
                        }),
                        V = e.computed(function () {
                            return h.value.__VISIBLE__.filter(function (e) {
                                return !e.disabled
                            })[0]
                        }),
                        P = e.computed(function () {
                            var e = O.value.__VISIBLE__.filter(function (e) {
                                return !e.disabled
                            })
                            return e[
                                e
                                    .map(function (e) {
                                        return e[n.value]
                                    })
                                    .indexOf(h.value[n.value]) - 1
                            ]
                        }),
                        w = e.computed(function () {
                            var e = T(h.value).__VISIBLE__.filter(function (e) {
                                return !e.disabled
                            })
                            return e[
                                e
                                    .map(function (e) {
                                        return e[n.value]
                                    })
                                    .indexOf(h.value[n.value]) + 1
                            ]
                        }),
                        N = e.computed(function () {
                            return o(
                                A.value.__VISIBLE__.filter(function (e) {
                                    return !e.disabled
                                })
                            ).slice(-1)[0]
                        }),
                        q = e.computed(function () {
                            return o(
                                L.value.__VISIBLE__.filter(function (e) {
                                    return !e.disabled
                                })
                            ).slice(-1)[0]
                        }),
                        x = function () {
                            b(B.value[0] || null)
                        },
                        T = function (e) {
                            return S.value.find(function (t) {
                                return (
                                    -1 !==
                                    t.__VISIBLE__
                                        .map(function (e) {
                                            return e[n.value]
                                        })
                                        .indexOf(e[n.value])
                                )
                            })
                        },
                        I = function () {
                            var e = C.value.querySelector('[data-pointed]')
                            if (e) {
                                var t = e.parentElement.parentElement
                                s.value &&
                                    (t = k.value
                                        ? e.parentElement.parentElement
                                              .parentElement
                                        : e.parentElement.parentElement
                                              .parentElement.parentElement),
                                    e.offsetTop + e.offsetHeight >
                                        t.clientHeight + t.scrollTop &&
                                        (t.scrollTop =
                                            e.offsetTop +
                                            e.offsetHeight -
                                            t.clientHeight),
                                    e.offsetTop < t.scrollTop &&
                                        (t.scrollTop = e.offsetTop)
                            }
                        }
                    return (
                        e.watch(D, function (e) {
                            i.value && (e.length && r.value ? x() : y())
                        }),
                        {
                            pointer: h,
                            canPointGroups: F,
                            isPointed: function (e) {
                                return (
                                    !(
                                        !h.value ||
                                        !(
                                            (!e.group &&
                                                h.value[n.value] ==
                                                    e[n.value]) ||
                                            (void 0 !== e.group &&
                                                h.value[c.value] == e[c.value])
                                        )
                                    ) || void 0
                                )
                            },
                            setPointerFirst: x,
                            selectPointer: function () {
                                h.value &&
                                    !0 !== h.value.disabled &&
                                    (k.value ? g(h.value) : m(h.value))
                            },
                            forwardPointer: function () {
                                if (null === h.value)
                                    b(
                                        (s.value && F.value
                                            ? S.value[0]
                                            : B.value[0]) || null
                                    )
                                else if (s.value && F.value) {
                                    var t = k.value ? V.value : w.value
                                    void 0 === t && (t = E.value), b(t || null)
                                } else {
                                    var u =
                                        B.value
                                            .map(function (e) {
                                                return e[n.value]
                                            })
                                            .indexOf(h.value[n.value]) + 1
                                    B.value.length <= u && (u = 0),
                                        b(B.value[u] || null)
                                }
                                e.nextTick(function () {
                                    I()
                                })
                            },
                            backwardPointer: function () {
                                if (null === h.value) {
                                    var t = B.value[B.value.length - 1]
                                    s.value &&
                                        F.value &&
                                        void 0 === (t = q.value) &&
                                        (t = L.value),
                                        b(t || null)
                                } else if (s.value && F.value) {
                                    var u = k.value ? N.value : P.value
                                    void 0 === u &&
                                        (u = k.value ? A.value : O.value),
                                        b(u || null)
                                } else {
                                    var a =
                                        B.value
                                            .map(function (e) {
                                                return e[n.value]
                                            })
                                            .indexOf(h.value[n.value]) - 1
                                    a < 0 && (a = B.value.length - 1),
                                        b(B.value[a] || null)
                                }
                                e.nextTick(function () {
                                    I()
                                })
                            },
                        }
                    )
                })(t, 0, {
                    fo: p.fo,
                    fg: p.fg,
                    handleOptionClick: p.handleOptionClick,
                    handleGroupClick: p.handleGroupClick,
                    search: c.search,
                    pointer: n.pointer,
                    setPointer: n.setPointer,
                    clearPointer: n.clearPointer,
                    multiselect: v.multiselect,
                }),
                m = (function (t, u, a) {
                    var l = e.toRefs(t),
                        n = l.mode,
                        r = l.addTagOn,
                        i = l.openDirection,
                        c = l.searchable,
                        s = l.showOptions,
                        d = l.valueProp,
                        v = l.groups,
                        p = l.addOptionOn,
                        f = l.createTag,
                        m = l.createOption,
                        g = a.iv,
                        D = a.update,
                        h = a.search,
                        b = a.setPointer,
                        y = a.selectPointer,
                        C = a.backwardPointer,
                        B = a.forwardPointer,
                        S = a.blur,
                        F = a.fo,
                        k = e.computed(function () {
                            return f.value || m.value || !1
                        }),
                        O = e.computed(function () {
                            return void 0 !== r.value
                                ? r.value
                                : void 0 !== p.value
                                ? p.value
                                : ['enter']
                        }),
                        A = function () {
                            'tags' === n.value &&
                                !s.value &&
                                k.value &&
                                c.value &&
                                !v.value &&
                                b(
                                    F.value[
                                        F.value
                                            .map(function (e) {
                                                return e[d.value]
                                            })
                                            .indexOf(h.value)
                                    ]
                                )
                        }
                    return {
                        handleKeydown: function (e) {
                            switch (e.key) {
                                case 'Backspace':
                                    if ('single' === n.value) return
                                    if (
                                        c.value &&
                                        -1 === [null, ''].indexOf(h.value)
                                    )
                                        return
                                    if (0 === g.value.length) return
                                    D(o(g.value).slice(0, -1))
                                    break
                                case 'Enter':
                                    if (
                                        (e.preventDefault(),
                                        -1 === O.value.indexOf('enter') &&
                                            k.value)
                                    )
                                        return
                                    A(), y()
                                    break
                                case ' ':
                                    if (!k.value && !c.value)
                                        return e.preventDefault(), A(), void y()
                                    if (!k.value) return !1
                                    if (
                                        -1 === O.value.indexOf('space') &&
                                        k.value
                                    )
                                        return
                                    e.preventDefault(), A(), y()
                                    break
                                case 'Tab':
                                case ';':
                                case ',':
                                    if (
                                        -1 ===
                                            O.value.indexOf(
                                                e.key.toLowerCase()
                                            ) ||
                                        !k.value
                                    )
                                        return
                                    A(), y(), e.preventDefault()
                                    break
                                case 'Escape':
                                    S()
                                    break
                                case 'ArrowUp':
                                    if ((e.preventDefault(), !s.value)) return
                                    'top' === i.value ? B() : C()
                                    break
                                case 'ArrowDown':
                                    if ((e.preventDefault(), !s.value)) return
                                    'top' === i.value ? C() : B()
                            }
                        },
                        preparePointer: A,
                    }
                })(t, 0, {
                    iv: l.iv,
                    update: d.update,
                    search: c.search,
                    setPointer: n.setPointer,
                    selectPointer: f.selectPointer,
                    backwardPointer: f.backwardPointer,
                    forwardPointer: f.forwardPointer,
                    blur: v.blur,
                    fo: p.fo,
                }),
                g = (function (t, u, a) {
                    var l = e.toRefs(t),
                        n = l.classes,
                        o = l.disabled,
                        i = l.openDirection,
                        c = l.showOptions,
                        s = a.isOpen,
                        d = a.isPointed,
                        v = a.isSelected,
                        p = a.isDisabled,
                        f = a.isActive,
                        m = a.canPointGroups,
                        g = a.resolving,
                        D = a.fo,
                        h = e.computed(function () {
                            return r(
                                {
                                    container: 'multiselect',
                                    containerDisabled: 'is-disabled',
                                    containerOpen: 'is-open',
                                    containerOpenTop: 'is-open-top',
                                    containerActive: 'is-active',
                                    singleLabel: 'multiselect-single-label',
                                    singleLabelText:
                                        'multiselect-single-label-text',
                                    multipleLabel: 'multiselect-multiple-label',
                                    search: 'multiselect-search',
                                    tags: 'multiselect-tags',
                                    tag: 'multiselect-tag',
                                    tagDisabled: 'is-disabled',
                                    tagRemove: 'multiselect-tag-remove',
                                    tagRemoveIcon:
                                        'multiselect-tag-remove-icon',
                                    tagsSearchWrapper:
                                        'multiselect-tags-search-wrapper',
                                    tagsSearch: 'multiselect-tags-search',
                                    tagsSearchCopy:
                                        'multiselect-tags-search-copy',
                                    placeholder: 'multiselect-placeholder',
                                    caret: 'multiselect-caret',
                                    caretOpen: 'is-open',
                                    clear: 'multiselect-clear',
                                    clearIcon: 'multiselect-clear-icon',
                                    spinner: 'multiselect-spinner',
                                    dropdown: 'multiselect-dropdown',
                                    dropdownTop: 'is-top',
                                    dropdownHidden: 'is-hidden',
                                    options: 'multiselect-options',
                                    optionsTop: 'is-top',
                                    group: 'multiselect-group',
                                    groupLabel: 'multiselect-group-label',
                                    groupLabelPointable: 'is-pointable',
                                    groupLabelPointed: 'is-pointed',
                                    groupLabelSelected: 'is-selected',
                                    groupLabelDisabled: 'is-disabled',
                                    groupLabelSelectedPointed:
                                        'is-selected is-pointed',
                                    groupLabelSelectedDisabled:
                                        'is-selected is-disabled',
                                    groupOptions: 'multiselect-group-options',
                                    option: 'multiselect-option',
                                    optionPointed: 'is-pointed',
                                    optionSelected: 'is-selected',
                                    optionDisabled: 'is-disabled',
                                    optionSelectedPointed:
                                        'is-selected is-pointed',
                                    optionSelectedDisabled:
                                        'is-selected is-disabled',
                                    noOptions: 'multiselect-no-options',
                                    noResults: 'multiselect-no-results',
                                    fakeInput: 'multiselect-fake-input',
                                    spacer: 'multiselect-spacer',
                                },
                                n.value
                            )
                        }),
                        b = e.computed(function () {
                            return !!(
                                s.value &&
                                c.value &&
                                (!g.value || (g.value && D.value.length))
                            )
                        })
                    return {
                        classList: e.computed(function () {
                            var e = h.value
                            return {
                                container: [e.container]
                                    .concat(o.value ? e.containerDisabled : [])
                                    .concat(
                                        b.value && 'top' === i.value
                                            ? e.containerOpenTop
                                            : []
                                    )
                                    .concat(
                                        b.value && 'top' !== i.value
                                            ? e.containerOpen
                                            : []
                                    )
                                    .concat(f.value ? e.containerActive : []),
                                spacer: e.spacer,
                                singleLabel: e.singleLabel,
                                singleLabelText: e.singleLabelText,
                                multipleLabel: e.multipleLabel,
                                search: e.search,
                                tags: e.tags,
                                tag: [e.tag].concat(
                                    o.value ? e.tagDisabled : []
                                ),
                                tagRemove: e.tagRemove,
                                tagRemoveIcon: e.tagRemoveIcon,
                                tagsSearchWrapper: e.tagsSearchWrapper,
                                tagsSearch: e.tagsSearch,
                                tagsSearchCopy: e.tagsSearchCopy,
                                placeholder: e.placeholder,
                                caret: [e.caret].concat(
                                    s.value ? e.caretOpen : []
                                ),
                                clear: e.clear,
                                clearIcon: e.clearIcon,
                                spinner: e.spinner,
                                dropdown: [e.dropdown]
                                    .concat(
                                        'top' === i.value ? e.dropdownTop : []
                                    )
                                    .concat(
                                        s.value && c.value && b.value
                                            ? []
                                            : e.dropdownHidden
                                    ),
                                options: [e.options].concat(
                                    'top' === i.value ? e.optionsTop : []
                                ),
                                group: e.group,
                                groupLabel: function (t) {
                                    var u = [e.groupLabel]
                                    return (
                                        d(t)
                                            ? u.push(
                                                  v(t)
                                                      ? e.groupLabelSelectedPointed
                                                      : e.groupLabelPointed
                                              )
                                            : v(t) && m.value
                                            ? u.push(
                                                  p(t)
                                                      ? e.groupLabelSelectedDisabled
                                                      : e.groupLabelSelected
                                              )
                                            : p(t) &&
                                              u.push(e.groupLabelDisabled),
                                        m.value &&
                                            u.push(e.groupLabelPointable),
                                        u
                                    )
                                },
                                groupOptions: e.groupOptions,
                                option: function (t, u) {
                                    var a = [e.option]
                                    return (
                                        d(t)
                                            ? a.push(
                                                  v(t)
                                                      ? e.optionSelectedPointed
                                                      : e.optionPointed
                                              )
                                            : v(t)
                                            ? a.push(
                                                  p(t)
                                                      ? e.optionSelectedDisabled
                                                      : e.optionSelected
                                              )
                                            : (p(t) || (u && p(u))) &&
                                              a.push(e.optionDisabled),
                                        a
                                    )
                                },
                                noOptions: e.noOptions,
                                noResults: e.noResults,
                                fakeInput: e.fakeInput,
                            }
                        }),
                        showDropdown: b,
                    }
                })(t, 0, {
                    isOpen: i.isOpen,
                    isPointed: f.isPointed,
                    canPointGroups: f.canPointGroups,
                    isSelected: p.isSelected,
                    isDisabled: p.isDisabled,
                    isActive: v.isActive,
                    resolving: p.resolving,
                    fo: p.fo,
                })
            return {
                ...l,
                ...i,
                ...v,
                ...n,
                ...d,
                ...c,
                ...p,
                ...f,
                ...m,
                ...g,
            }
        },
    }
    return (
        (d.render = function (e, u, a, l, n, r) {
            return (
                t.openBlock(),
                t.createBlock(
                    'div',
                    {
                        ref: 'multiselect',
                        tabindex: e.tabindex,
                        class: e.classList.container,
                        id: a.id,
                        onFocusin:
                            u[7] ||
                            (u[7] = (...t) => e.activate && e.activate(...t)),
                        onFocusout:
                            u[8] ||
                            (u[8] = (...t) =>
                                e.deactivate && e.deactivate(...t)),
                        onKeydown:
                            u[9] ||
                            (u[9] = (...t) =>
                                e.handleKeydown && e.handleKeydown(...t)),
                        onFocus:
                            u[10] ||
                            (u[10] = (...t) =>
                                e.handleFocus && e.handleFocus(...t)),
                    },
                    [
                        t.createCommentVNode(' Search '),
                        'tags' !== a.mode && a.searchable && !a.disabled
                            ? (t.openBlock(),
                              t.createBlock(
                                  'input',
                                  {
                                      key: 0,
                                      type: a.inputType,
                                      modelValue: e.search,
                                      value: e.search,
                                      class: e.classList.search,
                                      autocomplete: a.autocomplete,
                                      onInput:
                                          u[1] ||
                                          (u[1] = (...t) =>
                                              e.handleSearchInput &&
                                              e.handleSearchInput(...t)),
                                      onPaste:
                                          u[2] ||
                                          (u[2] = t.withModifiers(
                                              (...t) =>
                                                  e.handlePaste &&
                                                  e.handlePaste(...t),
                                              ['stop']
                                          )),
                                      ref: 'input',
                                  },
                                  null,
                                  42,
                                  [
                                      'type',
                                      'modelValue',
                                      'value',
                                      'autocomplete',
                                  ]
                              ))
                            : t.createCommentVNode('v-if', !0),
                        t.createCommentVNode(' Tags (with search) '),
                        'tags' == a.mode
                            ? (t.openBlock(),
                              t.createBlock(
                                  'div',
                                  { key: 1, class: e.classList.tags },
                                  [
                                      (t.openBlock(!0),
                                      t.createBlock(
                                          t.Fragment,
                                          null,
                                          t.renderList(e.iv, (u, l, n) =>
                                              t.renderSlot(
                                                  e.$slots,
                                                  'tag',
                                                  {
                                                      option: u,
                                                      handleTagRemove:
                                                          e.handleTagRemove,
                                                      disabled: a.disabled,
                                                  },
                                                  () => [
                                                      (t.openBlock(),
                                                      t.createBlock(
                                                          'span',
                                                          {
                                                              class: e.classList
                                                                  .tag,
                                                              key: n,
                                                          },
                                                          [
                                                              t.createTextVNode(
                                                                  t.toDisplayString(
                                                                      u[a.label]
                                                                  ) + ' ',
                                                                  1
                                                              ),
                                                              a.disabled
                                                                  ? t.createCommentVNode(
                                                                        'v-if',
                                                                        !0
                                                                    )
                                                                  : (t.openBlock(),
                                                                    t.createBlock(
                                                                        'span',
                                                                        {
                                                                            key: 0,
                                                                            class: e
                                                                                .classList
                                                                                .tagRemove,
                                                                            onClick:
                                                                                (
                                                                                    t
                                                                                ) =>
                                                                                    e.handleTagRemove(
                                                                                        u,
                                                                                        t
                                                                                    ),
                                                                        },
                                                                        [
                                                                            t.createVNode(
                                                                                'span',
                                                                                {
                                                                                    class: e
                                                                                        .classList
                                                                                        .tagRemoveIcon,
                                                                                },
                                                                                null,
                                                                                2
                                                                            ),
                                                                        ],
                                                                        10,
                                                                        [
                                                                            'onClick',
                                                                        ]
                                                                    )),
                                                          ],
                                                          2
                                                      )),
                                                  ]
                                              )
                                          ),
                                          256
                                      )),
                                      t.createVNode(
                                          'div',
                                          {
                                              class: e.classList
                                                  .tagsSearchWrapper,
                                          },
                                          [
                                              t.createCommentVNode(
                                                  ' Used for measuring search width '
                                              ),
                                              t.createVNode(
                                                  'span',
                                                  {
                                                      class: e.classList
                                                          .tagsSearchCopy,
                                                  },
                                                  t.toDisplayString(e.search),
                                                  3
                                              ),
                                              t.createCommentVNode(
                                                  ' Actual search input '
                                              ),
                                              a.searchable && !a.disabled
                                                  ? (t.openBlock(),
                                                    t.createBlock(
                                                        'input',
                                                        {
                                                            key: 0,
                                                            type: a.inputType,
                                                            modelValue:
                                                                e.search,
                                                            value: e.search,
                                                            class: e.classList
                                                                .tagsSearch,
                                                            autocomplete:
                                                                a.autocomplete,
                                                            onInput:
                                                                u[3] ||
                                                                (u[3] = (
                                                                    ...t
                                                                ) =>
                                                                    e.handleSearchInput &&
                                                                    e.handleSearchInput(
                                                                        ...t
                                                                    )),
                                                            onPaste:
                                                                u[4] ||
                                                                (u[4] =
                                                                    t.withModifiers(
                                                                        (
                                                                            ...t
                                                                        ) =>
                                                                            e.handlePaste &&
                                                                            e.handlePaste(
                                                                                ...t
                                                                            ),
                                                                        ['stop']
                                                                    )),
                                                            ref: 'input',
                                                        },
                                                        null,
                                                        42,
                                                        [
                                                            'type',
                                                            'modelValue',
                                                            'value',
                                                            'autocomplete',
                                                        ]
                                                    ))
                                                  : t.createCommentVNode(
                                                        'v-if',
                                                        !0
                                                    ),
                                          ],
                                          2
                                      ),
                                  ],
                                  2
                              ))
                            : t.createCommentVNode('v-if', !0),
                        t.createCommentVNode(' Single label '),
                        'single' == a.mode && e.hasSelected && !e.search && e.iv
                            ? t.renderSlot(
                                  e.$slots,
                                  'singlelabel',
                                  { key: 2, value: e.iv },
                                  () => [
                                      t.createVNode(
                                          'div',
                                          { class: e.classList.singleLabel },
                                          [
                                              t.createVNode(
                                                  'span',
                                                  {
                                                      class: e.classList
                                                          .singleLabelText,
                                                  },
                                                  t.toDisplayString(
                                                      e.iv[a.label]
                                                  ),
                                                  3
                                              ),
                                          ],
                                          2
                                      ),
                                  ]
                              )
                            : t.createCommentVNode('v-if', !0),
                        t.createCommentVNode(' Multiple label '),
                        'multiple' == a.mode && e.hasSelected && !e.search
                            ? t.renderSlot(
                                  e.$slots,
                                  'multiplelabel',
                                  { key: 3, values: e.iv },
                                  () => [
                                      t.createVNode(
                                          'div',
                                          { class: e.classList.multipleLabel },
                                          t.toDisplayString(
                                              e.multipleLabelText
                                          ),
                                          3
                                      ),
                                  ]
                              )
                            : t.createCommentVNode('v-if', !0),
                        t.createCommentVNode(' Placeholder '),
                        !a.placeholder || e.hasSelected || e.search
                            ? t.createCommentVNode('v-if', !0)
                            : t.renderSlot(
                                  e.$slots,
                                  'placeholder',
                                  { key: 4 },
                                  () => [
                                      t.createVNode(
                                          'div',
                                          { class: e.classList.placeholder },
                                          t.toDisplayString(a.placeholder),
                                          3
                                      ),
                                  ]
                              ),
                        t.createCommentVNode(' Spinner '),
                        e.busy && e.isActive
                            ? t.renderSlot(
                                  e.$slots,
                                  'spinner',
                                  { key: 5 },
                                  () => [
                                      t.createVNode(
                                          'span',
                                          { class: e.classList.spinner },
                                          null,
                                          2
                                      ),
                                  ]
                              )
                            : t.createCommentVNode('v-if', !0),
                        t.createCommentVNode(' Clear '),
                        e.hasSelected && !a.disabled && a.canClear && !e.busy
                            ? t.renderSlot(
                                  e.$slots,
                                  'clear',
                                  { key: 6, clear: e.clear },
                                  () => [
                                      t.createVNode(
                                          'span',
                                          {
                                              class: e.classList.clear,
                                              onMousedown:
                                                  u[5] ||
                                                  (u[5] = (...t) =>
                                                      e.clear && e.clear(...t)),
                                          },
                                          [
                                              t.createVNode(
                                                  'span',
                                                  {
                                                      class: e.classList
                                                          .clearIcon,
                                                  },
                                                  null,
                                                  2
                                              ),
                                          ],
                                          34
                                      ),
                                  ]
                              )
                            : t.createCommentVNode('v-if', !0),
                        t.createCommentVNode(' Caret '),
                        a.caret && a.showOptions
                            ? t.renderSlot(
                                  e.$slots,
                                  'caret',
                                  { key: 7 },
                                  () => [
                                      t.createVNode(
                                          'span',
                                          {
                                              class: e.classList.caret,
                                              onClick:
                                                  u[6] ||
                                                  (u[6] = (...t) =>
                                                      e.handleCaretClick &&
                                                      e.handleCaretClick(...t)),
                                          },
                                          null,
                                          2
                                      ),
                                  ]
                              )
                            : t.createCommentVNode('v-if', !0),
                        t.createCommentVNode(' Options '),
                        t.createVNode(
                            'div',
                            { class: e.classList.dropdown, tabindex: '-1' },
                            [
                                t.renderSlot(e.$slots, 'beforelist', {
                                    options: e.fo,
                                }),
                                t.createVNode(
                                    'ul',
                                    { class: e.classList.options },
                                    [
                                        a.groups
                                            ? (t.openBlock(!0),
                                              t.createBlock(
                                                  t.Fragment,
                                                  { key: 0 },
                                                  t.renderList(
                                                      e.fg,
                                                      (u, l, n) => (
                                                          t.openBlock(),
                                                          t.createBlock(
                                                              'li',
                                                              {
                                                                  class: e
                                                                      .classList
                                                                      .group,
                                                                  key: n,
                                                              },
                                                              [
                                                                  t.createVNode(
                                                                      'div',
                                                                      {
                                                                          class: e.classList.groupLabel(
                                                                              u
                                                                          ),
                                                                          'data-pointed':
                                                                              e.isPointed(
                                                                                  u
                                                                              ),
                                                                          onMouseenter:
                                                                              (
                                                                                  t
                                                                              ) =>
                                                                                  e.setPointer(
                                                                                      u
                                                                                  ),
                                                                          onClick:
                                                                              (
                                                                                  t
                                                                              ) =>
                                                                                  e.handleGroupClick(
                                                                                      u
                                                                                  ),
                                                                      },
                                                                      [
                                                                          t.renderSlot(
                                                                              e.$slots,
                                                                              'grouplabel',
                                                                              {
                                                                                  group: u,
                                                                              },
                                                                              () => [
                                                                                  t.createVNode(
                                                                                      'span',
                                                                                      null,
                                                                                      t.toDisplayString(
                                                                                          u[
                                                                                              a
                                                                                                  .groupLabel
                                                                                          ]
                                                                                      ),
                                                                                      1
                                                                                  ),
                                                                              ]
                                                                          ),
                                                                      ],
                                                                      42,
                                                                      [
                                                                          'data-pointed',
                                                                          'onMouseenter',
                                                                          'onClick',
                                                                      ]
                                                                  ),
                                                                  t.createVNode(
                                                                      'ul',
                                                                      {
                                                                          class: e
                                                                              .classList
                                                                              .groupOptions,
                                                                      },
                                                                      [
                                                                          (t.openBlock(
                                                                              !0
                                                                          ),
                                                                          t.createBlock(
                                                                              t.Fragment,
                                                                              null,
                                                                              t.renderList(
                                                                                  u.__VISIBLE__,
                                                                                  (
                                                                                      l,
                                                                                      n,
                                                                                      r
                                                                                  ) => (
                                                                                      t.openBlock(),
                                                                                      t.createBlock(
                                                                                          'li',
                                                                                          {
                                                                                              class: e.classList.option(
                                                                                                  l,
                                                                                                  u
                                                                                              ),
                                                                                              key: r,
                                                                                              'data-pointed':
                                                                                                  e.isPointed(
                                                                                                      l
                                                                                                  ),
                                                                                              onMouseenter:
                                                                                                  (
                                                                                                      t
                                                                                                  ) =>
                                                                                                      e.setPointer(
                                                                                                          l
                                                                                                      ),
                                                                                              onClick:
                                                                                                  (
                                                                                                      t
                                                                                                  ) =>
                                                                                                      e.handleOptionClick(
                                                                                                          l
                                                                                                      ),
                                                                                          },
                                                                                          [
                                                                                              t.renderSlot(
                                                                                                  e.$slots,
                                                                                                  'option',
                                                                                                  {
                                                                                                      option: l,
                                                                                                      search: e.search,
                                                                                                  },
                                                                                                  () => [
                                                                                                      t.createVNode(
                                                                                                          'span',
                                                                                                          null,
                                                                                                          t.toDisplayString(
                                                                                                              l[
                                                                                                                  a
                                                                                                                      .label
                                                                                                              ]
                                                                                                          ),
                                                                                                          1
                                                                                                      ),
                                                                                                  ]
                                                                                              ),
                                                                                          ],
                                                                                          42,
                                                                                          [
                                                                                              'data-pointed',
                                                                                              'onMouseenter',
                                                                                              'onClick',
                                                                                          ]
                                                                                      )
                                                                                  )
                                                                              ),
                                                                              128
                                                                          )),
                                                                      ],
                                                                      2
                                                                  ),
                                                              ],
                                                              2
                                                          )
                                                      )
                                                  ),
                                                  128
                                              ))
                                            : (t.openBlock(!0),
                                              t.createBlock(
                                                  t.Fragment,
                                                  { key: 1 },
                                                  t.renderList(
                                                      e.fo,
                                                      (u, l, n) => (
                                                          t.openBlock(),
                                                          t.createBlock(
                                                              'li',
                                                              {
                                                                  class: e.classList.option(
                                                                      u
                                                                  ),
                                                                  key: n,
                                                                  'data-pointed':
                                                                      e.isPointed(
                                                                          u
                                                                      ),
                                                                  onMouseenter:
                                                                      (t) =>
                                                                          e.setPointer(
                                                                              u
                                                                          ),
                                                                  onClick: (
                                                                      t
                                                                  ) =>
                                                                      e.handleOptionClick(
                                                                          u
                                                                      ),
                                                              },
                                                              [
                                                                  t.renderSlot(
                                                                      e.$slots,
                                                                      'option',
                                                                      {
                                                                          option: u,
                                                                          search: e.search,
                                                                      },
                                                                      () => [
                                                                          t.createVNode(
                                                                              'span',
                                                                              null,
                                                                              t.toDisplayString(
                                                                                  u[
                                                                                      a
                                                                                          .label
                                                                                  ]
                                                                              ),
                                                                              1
                                                                          ),
                                                                      ]
                                                                  ),
                                                              ],
                                                              42,
                                                              [
                                                                  'data-pointed',
                                                                  'onMouseenter',
                                                                  'onClick',
                                                              ]
                                                          )
                                                      )
                                                  ),
                                                  128
                                              )),
                                    ],
                                    2
                                ),
                                e.noOptions
                                    ? t.renderSlot(
                                          e.$slots,
                                          'nooptions',
                                          { key: 0 },
                                          () => [
                                              t.createVNode(
                                                  'div',
                                                  {
                                                      class: e.classList
                                                          .noOptions,
                                                      innerHTML:
                                                          a.noOptionsText,
                                                  },
                                                  null,
                                                  10,
                                                  ['innerHTML']
                                              ),
                                          ]
                                      )
                                    : t.createCommentVNode('v-if', !0),
                                e.noResults
                                    ? t.renderSlot(
                                          e.$slots,
                                          'noresults',
                                          { key: 1 },
                                          () => [
                                              t.createVNode(
                                                  'div',
                                                  {
                                                      class: e.classList
                                                          .noResults,
                                                      innerHTML:
                                                          a.noResultsText,
                                                  },
                                                  null,
                                                  10,
                                                  ['innerHTML']
                                              ),
                                          ]
                                      )
                                    : t.createCommentVNode('v-if', !0),
                                t.renderSlot(e.$slots, 'afterlist', {
                                    options: e.fo,
                                }),
                            ],
                            2
                        ),
                        t.createCommentVNode(
                            ' Hacky input element to show HTML5 required warning '
                        ),
                        a.required
                            ? (t.openBlock(),
                              t.createBlock(
                                  'input',
                                  {
                                      key: 8,
                                      class: e.classList.fakeInput,
                                      tabindex: '-1',
                                      value: e.textValue,
                                      required: '',
                                  },
                                  null,
                                  10,
                                  ['value']
                              ))
                            : t.createCommentVNode('v-if', !0),
                        t.createCommentVNode(' Native input support '),
                        a.nativeSupport
                            ? (t.openBlock(),
                              t.createBlock(
                                  t.Fragment,
                                  { key: 9 },
                                  [
                                      'single' == a.mode
                                          ? (t.openBlock(),
                                            t.createBlock(
                                                'input',
                                                {
                                                    key: 0,
                                                    type: 'hidden',
                                                    name: a.name,
                                                    value:
                                                        void 0 !== e.plainValue
                                                            ? e.plainValue
                                                            : '',
                                                },
                                                null,
                                                8,
                                                ['name', 'value']
                                            ))
                                          : (t.openBlock(!0),
                                            t.createBlock(
                                                t.Fragment,
                                                { key: 1 },
                                                t.renderList(
                                                    e.plainValue,
                                                    (e, u) => (
                                                        t.openBlock(),
                                                        t.createBlock(
                                                            'input',
                                                            {
                                                                type: 'hidden',
                                                                name: `${a.name}[]`,
                                                                value: e,
                                                                key: u,
                                                            },
                                                            null,
                                                            8,
                                                            ['name', 'value']
                                                        )
                                                    )
                                                ),
                                                128
                                            )),
                                  ],
                                  64
                              ))
                            : t.createCommentVNode('v-if', !0),
                        t.createCommentVNode(' Create height for empty input '),
                        t.createVNode(
                            'div',
                            { class: e.classList.spacer },
                            null,
                            2
                        ),
                    ],
                    42,
                    ['tabindex', 'id']
                )
            )
        }),
        (d.__file = 'src/Multiselect.vue'),
        d
    )
})(Vue, Vue)
