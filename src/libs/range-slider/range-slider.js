/*! For license information please see slider.0e563f94c325214797f4.js.LICENSE.txt */
!(function (e, t) {
  typeof exports === 'object' && typeof module === 'object'
    ? (module.exports = t())
    : typeof define === 'function' && define.amd
    ? define([], t)
    : typeof exports === 'object'
    ? (exports.slider = t())
    : (e.slider = t());
})(self, function () {
  return (
    (e = {
      8563(e, t) {
        let n;
        !(function (t, n) {
          typeof e.exports === 'object'
            ? (e.exports = t.document
                ? n(t, !0)
                : function (e) {
                    if (!e.document)
                      throw new Error('jQuery requires a window with a document');
                    return n(e);
                  })
            : n(t);
        })(typeof window !== 'undefined' ? window : this, function (i, r) {
          const s = [];
          const o = Object.getPrototypeOf;
          const a = s.slice;
          const u = s.flat
            ? function (e) {
                return s.flat.call(e);
              }
            : function (e) {
                return s.concat.apply([], e);
              };
          const l = s.push;
          const c = s.indexOf;
          const f = {};
          const d = f.toString;
          const h = f.hasOwnProperty;
          const p = h.toString;
          const m = p.call(Object);
          const v = {};
          const g = function (e) {
            return (
              typeof e === 'function' &&
              typeof e.nodeType !== 'number' &&
              typeof e.item !== 'function'
            );
          };
          const y = function (e) {
            return e != null && e === e.window;
          };
          const b = i.document;
          const T = { type: !0, src: !0, nonce: !0, noModule: !0 };
          function x(e, t, n) {
            let i;
            let r;
            const s = (n = n || b).createElement('script');
            if (((s.text = e), t))
              for (i in T)
                (r = t[i] || (t.getAttribute && t.getAttribute(i))) &&
                  s.setAttribute(i, r);
            n.head.appendChild(s).parentNode.removeChild(s);
          }
          function w(e) {
            return e == null
              ? `${e}`
              : typeof e === 'object' || typeof e === 'function'
              ? f[d.call(e)] || 'object'
              : typeof e;
          }
          const S = '3.6.0';
          var _ = function (e, t) {
            return new _.fn.init(e, t);
          };
          function C(e) {
            const t = !!e && 'length' in e && e.length;
            const n = w(e);
            return (
              !g(e) &&
              !y(e) &&
              (n === 'array' || t === 0 || (typeof t === 'number' && t > 0 && t - 1 in e))
            );
          }
          (_.fn = _.prototype =
            {
              jquery: S,
              constructor: _,
              length: 0,
              toArray() {
                return a.call(this);
              },
              get(e) {
                return e == null ? a.call(this) : e < 0 ? this[e + this.length] : this[e];
              },
              pushStack(e) {
                const t = _.merge(this.constructor(), e);
                return (t.prevObject = this), t;
              },
              each(e) {
                return _.each(this, e);
              },
              map(e) {
                return this.pushStack(
                  _.map(this, function (t, n) {
                    return e.call(t, n, t);
                  }),
                );
              },
              slice() {
                return this.pushStack(a.apply(this, arguments));
              },
              first() {
                return this.eq(0);
              },
              last() {
                return this.eq(-1);
              },
              even() {
                return this.pushStack(
                  _.grep(this, function (e, t) {
                    return (t + 1) % 2;
                  }),
                );
              },
              odd() {
                return this.pushStack(
                  _.grep(this, function (e, t) {
                    return t % 2;
                  }),
                );
              },
              eq(e) {
                const t = this.length;
                const n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
              },
              end() {
                return this.prevObject || this.constructor();
              },
              push: l,
              sort: s.sort,
              splice: s.splice,
            }),
            (_.extend = _.fn.extend =
              function () {
                let e;
                let t;
                let n;
                let i;
                let r;
                let s;
                let o = arguments[0] || {};
                let a = 1;
                const u = arguments.length;
                let l = !1;
                for (
                  typeof o === 'boolean' && ((l = o), (o = arguments[a] || {}), a++),
                    typeof o === 'object' || g(o) || (o = {}),
                    a === u && ((o = this), a--);
                  a < u;
                  a++
                )
                  if ((e = arguments[a]) != null)
                    for (t in e)
                      (i = e[t]),
                        t !== '__proto__' &&
                          o !== i &&
                          (l && i && (_.isPlainObject(i) || (r = Array.isArray(i)))
                            ? ((n = o[t]),
                              (s =
                                r && !Array.isArray(n)
                                  ? []
                                  : r || _.isPlainObject(n)
                                  ? n
                                  : {}),
                              (r = !1),
                              (o[t] = _.extend(l, s, i)))
                            : void 0 !== i && (o[t] = i));
                return o;
              }),
            _.extend({
              expando: `jQuery${(S + Math.random()).replace(/\D/g, '')}`,
              isReady: !0,
              error(e) {
                throw new Error(e);
              },
              noop() {},
              isPlainObject(e) {
                let t;
                let n;
                return !(
                  !e ||
                  d.call(e) !== '[object Object]' ||
                  ((t = o(e)) &&
                    (typeof (n = h.call(t, 'constructor') && t.constructor) !==
                      'function' ||
                      p.call(n) !== m))
                );
              },
              isEmptyObject(e) {
                let t;
                for (t in e) return !1;
                return !0;
              },
              globalEval(e, t, n) {
                x(e, { nonce: t && t.nonce }, n);
              },
              each(e, t) {
                let n;
                let i = 0;
                if (C(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
                else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
                return e;
              },
              makeArray(e, t) {
                const n = t || [];
                return (
                  e != null &&
                    (C(Object(e))
                      ? _.merge(n, typeof e === 'string' ? [e] : e)
                      : l.call(n, e)),
                  n
                );
              },
              inArray(e, t, n) {
                return t == null ? -1 : c.call(t, e, n);
              },
              merge(e, t) {
                for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
                return (e.length = r), e;
              },
              grep(e, t, n) {
                for (var i = [], r = 0, s = e.length, o = !n; r < s; r++)
                  !t(e[r], r) !== o && i.push(e[r]);
                return i;
              },
              map(e, t, n) {
                let i;
                let r;
                let s = 0;
                const o = [];
                if (C(e))
                  for (i = e.length; s < i; s++) (r = t(e[s], s, n)) != null && o.push(r);
                else for (s in e) (r = t(e[s], s, n)) != null && o.push(r);
                return u(o);
              },
              guid: 1,
              support: v,
            }),
            typeof Symbol === 'function' && (_.fn[Symbol.iterator] = s[Symbol.iterator]),
            _.each(
              'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
                ' ',
              ),
              function (e, t) {
                f[`[object ${t}]`] = t.toLowerCase();
              },
            );
          const E = (function (e) {
            let t;
            let n;
            let i;
            let r;
            let s;
            let o;
            let a;
            let u;
            let l;
            let c;
            let f;
            let d;
            let h;
            let p;
            let m;
            let v;
            let g;
            let y;
            let b;
            const T = `sizzle${1 * new Date()}`;
            const x = e.document;
            let w = 0;
            let S = 0;
            const _ = ue();
            const C = ue();
            const E = ue();
            const D = ue();
            let M = function (e, t) {
              return e === t && (f = !0), 0;
            };
            const O = {}.hasOwnProperty;
            let A = [];
            const k = A.pop;
            const N = A.push;
            let F = A.push;
            const j = A.slice;
            const L = function (e, t) {
              for (let n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
              return -1;
            };
            const P =
              'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped';
            const R = '[\\x20\\t\\r\\n\\f]';
            const V =
              '(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+';
            const H = `\\[[\\x20\\t\\r\\n\\f]*(${V})(?:${R}*([*^$|!~]?=)${R}*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(${V}))|)${R}*\\]`;
            const q = `:(${V})(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|${H})*)|.*)\\)|)`;
            const I = new RegExp(`${R}+`, 'g');
            const B = new RegExp(
              '^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$',
              'g',
            );
            const z = new RegExp('^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*');
            const U = new RegExp(
              '^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*',
            );
            const $ = new RegExp(`${R}|>`);
            const W = new RegExp(q);
            const X = new RegExp(`^${V}$`);
            const Y = {
              ID: new RegExp(`^#(${V})`),
              CLASS: new RegExp(`^\\.(${V})`),
              TAG: new RegExp(`^(${V}|[*])`),
              ATTR: new RegExp(`^${H}`),
              PSEUDO: new RegExp(`^${q}`),
              CHILD: new RegExp(
                '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)',
                'i',
              ),
              bool: new RegExp(`^(?:${P})$`, 'i'),
              needsContext: new RegExp(
                '^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)',
                'i',
              ),
            };
            const G = /HTML$/i;
            const Q = /^(?:input|select|textarea|button)$/i;
            const J = /^h\d$/i;
            const K = /^[^{]+\{\s*\[native \w/;
            const Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/;
            const ee = /[+~]/;
            const te = new RegExp(
              '\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])',
              'g',
            );
            const ne = function (e, t) {
              const n = `0x${e.slice(1)}` - 65536;
              return (
                t ||
                (n < 0
                  ? String.fromCharCode(n + 65536)
                  : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
              );
            };
            const ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g;
            const re = function (e, t) {
              return t
                ? e === '\0'
                  ? '�'
                  : `${e.slice(0, -1)}\\${e.charCodeAt(e.length - 1).toString(16)} `
                : `\\${e}`;
            };
            const se = function () {
              d();
            };
            const oe = Te(
              function (e) {
                return !0 === e.disabled && e.nodeName.toLowerCase() === 'fieldset';
              },
              { dir: 'parentNode', next: 'legend' },
            );
            try {
              F.apply((A = j.call(x.childNodes)), x.childNodes),
                A[x.childNodes.length].nodeType;
            } catch (e) {
              F = {
                apply: A.length
                  ? function (e, t) {
                      N.apply(e, j.call(t));
                    }
                  : function (e, t) {
                      for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                      e.length = n - 1;
                    },
              };
            }
            function ae(e, t, i, r) {
              let s;
              let a;
              let l;
              let c;
              let f;
              let p;
              let g;
              let y = t && t.ownerDocument;
              const x = t ? t.nodeType : 9;
              if (
                ((i = i || []),
                typeof e !== 'string' || !e || (x !== 1 && x !== 9 && x !== 11))
              )
                return i;
              if (!r && (d(t), (t = t || h), m)) {
                if (x !== 11 && (f = Z.exec(e)))
                  if ((s = f[1])) {
                    if (x === 9) {
                      if (!(l = t.getElementById(s))) return i;
                      if (l.id === s) return i.push(l), i;
                    } else if (y && (l = y.getElementById(s)) && b(t, l) && l.id === s)
                      return i.push(l), i;
                  } else {
                    if (f[2]) return F.apply(i, t.getElementsByTagName(e)), i;
                    if (
                      (s = f[3]) &&
                      n.getElementsByClassName &&
                      t.getElementsByClassName
                    )
                      return F.apply(i, t.getElementsByClassName(s)), i;
                  }
                if (
                  n.qsa &&
                  !D[`${e} `] &&
                  (!v || !v.test(e)) &&
                  (x !== 1 || t.nodeName.toLowerCase() !== 'object')
                ) {
                  if (((g = e), (y = t), x === 1 && ($.test(e) || U.test(e)))) {
                    for (
                      ((y = (ee.test(e) && ge(t.parentNode)) || t) === t && n.scope) ||
                        ((c = t.getAttribute('id'))
                          ? (c = c.replace(ie, re))
                          : t.setAttribute('id', (c = T))),
                        a = (p = o(e)).length;
                      a--;

                    )
                      p[a] = `${c ? `#${c}` : ':scope'} ${be(p[a])}`;
                    g = p.join(',');
                  }
                  try {
                    return F.apply(i, y.querySelectorAll(g)), i;
                  } catch (t) {
                    D(e, !0);
                  } finally {
                    c === T && t.removeAttribute('id');
                  }
                }
              }
              return u(e.replace(B, '$1'), t, i, r);
            }
            function ue() {
              const e = [];
              return function t(n, r) {
                return (
                  e.push(`${n} `) > i.cacheLength && delete t[e.shift()], (t[`${n} `] = r)
                );
              };
            }
            function le(e) {
              return (e[T] = !0), e;
            }
            function ce(e) {
              let t = h.createElement('fieldset');
              try {
                return !!e(t);
              } catch (e) {
                return !1;
              } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
              }
            }
            function fe(e, t) {
              for (let n = e.split('|'), r = n.length; r--; ) i.attrHandle[n[r]] = t;
            }
            function de(e, t) {
              let n = t && e;
              const i =
                n &&
                e.nodeType === 1 &&
                t.nodeType === 1 &&
                e.sourceIndex - t.sourceIndex;
              if (i) return i;
              if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
              return e ? 1 : -1;
            }
            function he(e) {
              return function (t) {
                return t.nodeName.toLowerCase() === 'input' && t.type === e;
              };
            }
            function pe(e) {
              return function (t) {
                const n = t.nodeName.toLowerCase();
                return (n === 'input' || n === 'button') && t.type === e;
              };
            }
            function me(e) {
              return function (t) {
                return 'form' in t
                  ? t.parentNode && !1 === t.disabled
                    ? 'label' in t
                      ? 'label' in t.parentNode
                        ? t.parentNode.disabled === e
                        : t.disabled === e
                      : t.isDisabled === e || (t.isDisabled !== !e && oe(t) === e)
                    : t.disabled === e
                  : 'label' in t && t.disabled === e;
              };
            }
            function ve(e) {
              return le(function (t) {
                return (
                  (t = +t),
                  le(function (n, i) {
                    for (var r, s = e([], n.length, t), o = s.length; o--; )
                      n[(r = s[o])] && (n[r] = !(i[r] = n[r]));
                  })
                );
              });
            }
            function ge(e) {
              return e && void 0 !== e.getElementsByTagName && e;
            }
            for (t in ((n = ae.support = {}),
            (s = ae.isXML =
              function (e) {
                const t = e && e.namespaceURI;
                const n = e && (e.ownerDocument || e).documentElement;
                return !G.test(t || (n && n.nodeName) || 'HTML');
              }),
            (d = ae.setDocument =
              function (e) {
                let t;
                let r;
                const o = e ? e.ownerDocument || e : x;
                return o != h && o.nodeType === 9 && o.documentElement
                  ? ((p = (h = o).documentElement),
                    (m = !s(h)),
                    x != h &&
                      (r = h.defaultView) &&
                      r.top !== r &&
                      (r.addEventListener
                        ? r.addEventListener('unload', se, !1)
                        : r.attachEvent && r.attachEvent('onunload', se)),
                    (n.scope = ce(function (e) {
                      return (
                        p.appendChild(e).appendChild(h.createElement('div')),
                        void 0 !== e.querySelectorAll &&
                          !e.querySelectorAll(':scope fieldset div').length
                      );
                    })),
                    (n.attributes = ce(function (e) {
                      return (e.className = 'i'), !e.getAttribute('className');
                    })),
                    (n.getElementsByTagName = ce(function (e) {
                      return (
                        e.appendChild(h.createComment('')),
                        !e.getElementsByTagName('*').length
                      );
                    })),
                    (n.getElementsByClassName = K.test(h.getElementsByClassName)),
                    (n.getById = ce(function (e) {
                      return (
                        (p.appendChild(e).id = T),
                        !h.getElementsByName || !h.getElementsByName(T).length
                      );
                    })),
                    n.getById
                      ? ((i.filter.ID = function (e) {
                          const t = e.replace(te, ne);
                          return function (e) {
                            return e.getAttribute('id') === t;
                          };
                        }),
                        (i.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && m) {
                            const n = t.getElementById(e);
                            return n ? [n] : [];
                          }
                        }))
                      : ((i.filter.ID = function (e) {
                          const t = e.replace(te, ne);
                          return function (e) {
                            const n =
                              void 0 !== e.getAttributeNode && e.getAttributeNode('id');
                            return n && n.value === t;
                          };
                        }),
                        (i.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && m) {
                            let n;
                            let i;
                            let r;
                            let s = t.getElementById(e);
                            if (s) {
                              if ((n = s.getAttributeNode('id')) && n.value === e)
                                return [s];
                              for (r = t.getElementsByName(e), i = 0; (s = r[i++]); )
                                if ((n = s.getAttributeNode('id')) && n.value === e)
                                  return [s];
                            }
                            return [];
                          }
                        })),
                    (i.find.TAG = n.getElementsByTagName
                      ? function (e, t) {
                          return void 0 !== t.getElementsByTagName
                            ? t.getElementsByTagName(e)
                            : n.qsa
                            ? t.querySelectorAll(e)
                            : void 0;
                        }
                      : function (e, t) {
                          let n;
                          const i = [];
                          let r = 0;
                          const s = t.getElementsByTagName(e);
                          if (e === '*') {
                            for (; (n = s[r++]); ) n.nodeType === 1 && i.push(n);
                            return i;
                          }
                          return s;
                        }),
                    (i.find.CLASS =
                      n.getElementsByClassName &&
                      function (e, t) {
                        if (void 0 !== t.getElementsByClassName && m)
                          return t.getElementsByClassName(e);
                      }),
                    (g = []),
                    (v = []),
                    (n.qsa = K.test(h.querySelectorAll)) &&
                      (ce(function (e) {
                        let t;
                        (p.appendChild(
                          e,
                        ).innerHTML = `<a id='${T}'></a><select id='${T}-\r\\' msallowcapture=''><option selected=''></option></select>`),
                          e.querySelectorAll("[msallowcapture^='']").length &&
                            v.push('[*^$]=[\\x20\\t\\r\\n\\f]*(?:\'\'|"")'),
                          e.querySelectorAll('[selected]').length ||
                            v.push(`\\[[\\x20\\t\\r\\n\\f]*(?:value|${P})`),
                          e.querySelectorAll(`[id~=${T}-]`).length || v.push('~='),
                          (t = h.createElement('input')).setAttribute('name', ''),
                          e.appendChild(t),
                          e.querySelectorAll("[name='']").length ||
                            v.push(
                              '\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:\'\'|"")',
                            ),
                          e.querySelectorAll(':checked').length || v.push(':checked'),
                          e.querySelectorAll(`a#${T}+*`).length || v.push('.#.+[+~]'),
                          e.querySelectorAll('\\\f'),
                          v.push('[\\r\\n\\f]');
                      }),
                      ce(function (e) {
                        e.innerHTML =
                          "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        const t = h.createElement('input');
                        t.setAttribute('type', 'hidden'),
                          e.appendChild(t).setAttribute('name', 'D'),
                          e.querySelectorAll('[name=d]').length &&
                            v.push('name[\\x20\\t\\r\\n\\f]*[*^$|!~]?='),
                          e.querySelectorAll(':enabled').length !== 2 &&
                            v.push(':enabled', ':disabled'),
                          (p.appendChild(e).disabled = !0),
                          e.querySelectorAll(':disabled').length !== 2 &&
                            v.push(':enabled', ':disabled'),
                          e.querySelectorAll('*,:x'),
                          v.push(',.*:');
                      })),
                    (n.matchesSelector = K.test(
                      (y =
                        p.matches ||
                        p.webkitMatchesSelector ||
                        p.mozMatchesSelector ||
                        p.oMatchesSelector ||
                        p.msMatchesSelector),
                    )) &&
                      ce(function (e) {
                        (n.disconnectedMatch = y.call(e, '*')),
                          y.call(e, "[s!='']:x"),
                          g.push('!=', q);
                      }),
                    (v = v.length && new RegExp(v.join('|'))),
                    (g = g.length && new RegExp(g.join('|'))),
                    (t = K.test(p.compareDocumentPosition)),
                    (b =
                      t || K.test(p.contains)
                        ? function (e, t) {
                            const n = e.nodeType === 9 ? e.documentElement : e;
                            const i = t && t.parentNode;
                            return (
                              e === i ||
                              !(
                                !i ||
                                i.nodeType !== 1 ||
                                !(n.contains
                                  ? n.contains(i)
                                  : e.compareDocumentPosition &&
                                    16 & e.compareDocumentPosition(i))
                              )
                            );
                          }
                        : function (e, t) {
                            if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                            return !1;
                          }),
                    (M = t
                      ? function (e, t) {
                          if (e === t) return (f = !0), 0;
                          let i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                          return (
                            i ||
                            (1 &
                              (i =
                                (e.ownerDocument || e) == (t.ownerDocument || t)
                                  ? e.compareDocumentPosition(t)
                                  : 1) ||
                            (!n.sortDetached && t.compareDocumentPosition(e) === i)
                              ? e == h || (e.ownerDocument == x && b(x, e))
                                ? -1
                                : t == h || (t.ownerDocument == x && b(x, t))
                                ? 1
                                : c
                                ? L(c, e) - L(c, t)
                                : 0
                              : 4 & i
                              ? -1
                              : 1)
                          );
                        }
                      : function (e, t) {
                          if (e === t) return (f = !0), 0;
                          let n;
                          let i = 0;
                          const r = e.parentNode;
                          const s = t.parentNode;
                          const o = [e];
                          const a = [t];
                          if (!r || !s)
                            return e == h
                              ? -1
                              : t == h
                              ? 1
                              : r
                              ? -1
                              : s
                              ? 1
                              : c
                              ? L(c, e) - L(c, t)
                              : 0;
                          if (r === s) return de(e, t);
                          for (n = e; (n = n.parentNode); ) o.unshift(n);
                          for (n = t; (n = n.parentNode); ) a.unshift(n);
                          for (; o[i] === a[i]; ) i++;
                          return i ? de(o[i], a[i]) : o[i] == x ? -1 : a[i] == x ? 1 : 0;
                        }),
                    h)
                  : h;
              }),
            (ae.matches = function (e, t) {
              return ae(e, null, null, t);
            }),
            (ae.matchesSelector = function (e, t) {
              if (
                (d(e),
                n.matchesSelector &&
                  m &&
                  !D[`${t} `] &&
                  (!g || !g.test(t)) &&
                  (!v || !v.test(t)))
              )
                try {
                  const i = y.call(e, t);
                  if (
                    i ||
                    n.disconnectedMatch ||
                    (e.document && e.document.nodeType !== 11)
                  )
                    return i;
                } catch (e) {
                  D(t, !0);
                }
              return ae(t, h, null, [e]).length > 0;
            }),
            (ae.contains = function (e, t) {
              return (e.ownerDocument || e) != h && d(e), b(e, t);
            }),
            (ae.attr = function (e, t) {
              (e.ownerDocument || e) != h && d(e);
              const r = i.attrHandle[t.toLowerCase()];
              let s = r && O.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !m) : void 0;
              return void 0 !== s
                ? s
                : n.attributes || !m
                ? e.getAttribute(t)
                : (s = e.getAttributeNode(t)) && s.specified
                ? s.value
                : null;
            }),
            (ae.escape = function (e) {
              return `${e}`.replace(ie, re);
            }),
            (ae.error = function (e) {
              throw new Error(`Syntax error, unrecognized expression: ${e}`);
            }),
            (ae.uniqueSort = function (e) {
              let t;
              const i = [];
              let r = 0;
              let s = 0;
              if (
                ((f = !n.detectDuplicates),
                (c = !n.sortStable && e.slice(0)),
                e.sort(M),
                f)
              ) {
                for (; (t = e[s++]); ) t === e[s] && (r = i.push(s));
                for (; r--; ) e.splice(i[r], 1);
              }
              return (c = null), e;
            }),
            (r = ae.getText =
              function (e) {
                let t;
                let n = '';
                let i = 0;
                const s = e.nodeType;
                if (s) {
                  if (s === 1 || s === 9 || s === 11) {
                    if (typeof e.textContent === 'string') return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += r(e);
                  } else if (s === 3 || s === 4) return e.nodeValue;
                } else for (; (t = e[i++]); ) n += r(t);
                return n;
              }),
            (i = ae.selectors =
              {
                cacheLength: 50,
                createPseudo: le,
                match: Y,
                attrHandle: {},
                find: {},
                relative: {
                  '>': { dir: 'parentNode', first: !0 },
                  ' ': { dir: 'parentNode' },
                  '+': { dir: 'previousSibling', first: !0 },
                  '~': { dir: 'previousSibling' },
                },
                preFilter: {
                  ATTR(e) {
                    return (
                      (e[1] = e[1].replace(te, ne)),
                      (e[3] = (e[3] || e[4] || e[5] || '').replace(te, ne)),
                      e[2] === '~=' && (e[3] = ` ${e[3]} `),
                      e.slice(0, 4)
                    );
                  },
                  CHILD(e) {
                    return (
                      (e[1] = e[1].toLowerCase()),
                      e[1].slice(0, 3) === 'nth'
                        ? (e[3] || ae.error(e[0]),
                          (e[4] = +(e[4]
                            ? e[5] + (e[6] || 1)
                            : 2 * (e[3] === 'even' || e[3] === 'odd'))),
                          (e[5] = +(e[7] + e[8] || e[3] === 'odd')))
                        : e[3] && ae.error(e[0]),
                      e
                    );
                  },
                  PSEUDO(e) {
                    let t;
                    const n = !e[6] && e[2];
                    return Y.CHILD.test(e[0])
                      ? null
                      : (e[3]
                          ? (e[2] = e[4] || e[5] || '')
                          : n &&
                            W.test(n) &&
                            (t = o(n, !0)) &&
                            (t = n.indexOf(')', n.length - t) - n.length) &&
                            ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                        e.slice(0, 3));
                  },
                },
                filter: {
                  TAG(e) {
                    const t = e.replace(te, ne).toLowerCase();
                    return e === '*'
                      ? function () {
                          return !0;
                        }
                      : function (e) {
                          return e.nodeName && e.nodeName.toLowerCase() === t;
                        };
                  },
                  CLASS(e) {
                    let t = _[`${e} `];
                    return (
                      t ||
                      ((t = new RegExp(`(^|[\\x20\\t\\r\\n\\f])${e}(${R}|$)`)) &&
                        _(e, function (e) {
                          return t.test(
                            (typeof e.className === 'string' && e.className) ||
                              (void 0 !== e.getAttribute && e.getAttribute('class')) ||
                              '',
                          );
                        }))
                    );
                  },
                  ATTR(e, t, n) {
                    return function (i) {
                      let r = ae.attr(i, e);
                      return r == null
                        ? t === '!='
                        : !t ||
                            ((r += ''),
                            t === '='
                              ? r === n
                              : t === '!='
                              ? r !== n
                              : t === '^='
                              ? n && r.indexOf(n) === 0
                              : t === '*='
                              ? n && r.indexOf(n) > -1
                              : t === '$='
                              ? n && r.slice(-n.length) === n
                              : t === '~='
                              ? ` ${r.replace(I, ' ')} `.indexOf(n) > -1
                              : t === '|=' &&
                                (r === n || r.slice(0, n.length + 1) === `${n}-`));
                    };
                  },
                  CHILD(e, t, n, i, r) {
                    const s = e.slice(0, 3) !== 'nth';
                    const o = e.slice(-4) !== 'last';
                    const a = t === 'of-type';
                    return i === 1 && r === 0
                      ? function (e) {
                          return !!e.parentNode;
                        }
                      : function (t, n, u) {
                          let l;
                          let c;
                          let f;
                          let d;
                          let h;
                          let p;
                          let m = s !== o ? 'nextSibling' : 'previousSibling';
                          const v = t.parentNode;
                          const g = a && t.nodeName.toLowerCase();
                          const y = !u && !a;
                          let b = !1;
                          if (v) {
                            if (s) {
                              for (; m; ) {
                                for (d = t; (d = d[m]); )
                                  if (
                                    a ? d.nodeName.toLowerCase() === g : d.nodeType === 1
                                  )
                                    return !1;
                                p = m = e === 'only' && !p && 'nextSibling';
                              }
                              return !0;
                            }
                            if (((p = [o ? v.firstChild : v.lastChild]), o && y)) {
                              for (
                                b =
                                  (h =
                                    (l =
                                      (c =
                                        (f = (d = v)[T] || (d[T] = {}))[d.uniqueID] ||
                                        (f[d.uniqueID] = {}))[e] || [])[0] === w &&
                                    l[1]) && l[2],
                                  d = h && v.childNodes[h];
                                (d = (++h && d && d[m]) || (b = h = 0) || p.pop());

                              )
                                if (d.nodeType === 1 && ++b && d === t) {
                                  c[e] = [w, h, b];
                                  break;
                                }
                            } else if (
                              (y &&
                                (b = h =
                                  (l =
                                    (c =
                                      (f = (d = t)[T] || (d[T] = {}))[d.uniqueID] ||
                                      (f[d.uniqueID] = {}))[e] || [])[0] === w && l[1]),
                              !1 === b)
                            )
                              for (
                                ;
                                (d = (++h && d && d[m]) || (b = h = 0) || p.pop()) &&
                                ((a
                                  ? d.nodeName.toLowerCase() !== g
                                  : d.nodeType !== 1) ||
                                  !++b ||
                                  (y &&
                                    ((c =
                                      (f = d[T] || (d[T] = {}))[d.uniqueID] ||
                                      (f[d.uniqueID] = {}))[e] = [w, b]),
                                  d !== t));

                              );
                            return (b -= r) === i || (b % i == 0 && b / i >= 0);
                          }
                        };
                  },
                  PSEUDO(e, t) {
                    let n;
                    const r =
                      i.pseudos[e] ||
                      i.setFilters[e.toLowerCase()] ||
                      ae.error(`unsupported pseudo: ${e}`);
                    return r[T]
                      ? r(t)
                      : r.length > 1
                      ? ((n = [e, e, '', t]),
                        i.setFilters.hasOwnProperty(e.toLowerCase())
                          ? le(function (e, n) {
                              for (var i, s = r(e, t), o = s.length; o--; )
                                e[(i = L(e, s[o]))] = !(n[i] = s[o]);
                            })
                          : function (e) {
                              return r(e, 0, n);
                            })
                      : r;
                  },
                },
                pseudos: {
                  not: le(function (e) {
                    const t = [];
                    const n = [];
                    const i = a(e.replace(B, '$1'));
                    return i[T]
                      ? le(function (e, t, n, r) {
                          for (var s, o = i(e, null, r, []), a = e.length; a--; )
                            (s = o[a]) && (e[a] = !(t[a] = s));
                        })
                      : function (e, r, s) {
                          return (t[0] = e), i(t, null, s, n), (t[0] = null), !n.pop();
                        };
                  }),
                  has: le(function (e) {
                    return function (t) {
                      return ae(e, t).length > 0;
                    };
                  }),
                  contains: le(function (e) {
                    return (
                      (e = e.replace(te, ne)),
                      function (t) {
                        return (t.textContent || r(t)).indexOf(e) > -1;
                      }
                    );
                  }),
                  lang: le(function (e) {
                    return (
                      X.test(e || '') || ae.error(`unsupported lang: ${e}`),
                      (e = e.replace(te, ne).toLowerCase()),
                      function (t) {
                        let n;
                        do {
                          if (
                            (n = m
                              ? t.lang
                              : t.getAttribute('xml:lang') || t.getAttribute('lang'))
                          )
                            return (
                              (n = n.toLowerCase()) === e || n.indexOf(`${e}-`) === 0
                            );
                        } while ((t = t.parentNode) && t.nodeType === 1);
                        return !1;
                      }
                    );
                  }),
                  target(t) {
                    const n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                  },
                  root(e) {
                    return e === p;
                  },
                  focus(e) {
                    return (
                      e === h.activeElement &&
                      (!h.hasFocus || h.hasFocus()) &&
                      !!(e.type || e.href || ~e.tabIndex)
                    );
                  },
                  enabled: me(!1),
                  disabled: me(!0),
                  checked(e) {
                    const t = e.nodeName.toLowerCase();
                    return (
                      (t === 'input' && !!e.checked) || (t === 'option' && !!e.selected)
                    );
                  },
                  selected(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                  },
                  empty(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                      if (e.nodeType < 6) return !1;
                    return !0;
                  },
                  parent(e) {
                    return !i.pseudos.empty(e);
                  },
                  header(e) {
                    return J.test(e.nodeName);
                  },
                  input(e) {
                    return Q.test(e.nodeName);
                  },
                  button(e) {
                    const t = e.nodeName.toLowerCase();
                    return (t === 'input' && e.type === 'button') || t === 'button';
                  },
                  text(e) {
                    let t;
                    return (
                      e.nodeName.toLowerCase() === 'input' &&
                      e.type === 'text' &&
                      ((t = e.getAttribute('type')) == null || t.toLowerCase() === 'text')
                    );
                  },
                  first: ve(function () {
                    return [0];
                  }),
                  last: ve(function (e, t) {
                    return [t - 1];
                  }),
                  eq: ve(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                  }),
                  even: ve(function (e, t) {
                    for (let n = 0; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  odd: ve(function (e, t) {
                    for (let n = 1; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  lt: ve(function (e, t, n) {
                    for (let i = n < 0 ? n + t : n > t ? t : n; --i >= 0; ) e.push(i);
                    return e;
                  }),
                  gt: ve(function (e, t, n) {
                    for (let i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                    return e;
                  }),
                },
              }),
            (i.pseudos.nth = i.pseudos.eq),
            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
              i.pseudos[t] = he(t);
            for (t in { submit: !0, reset: !0 }) i.pseudos[t] = pe(t);
            function ye() {}
            function be(e) {
              for (var t = 0, n = e.length, i = ''; t < n; t++) i += e[t].value;
              return i;
            }
            function Te(e, t, n) {
              const i = t.dir;
              const r = t.next;
              const s = r || i;
              const o = n && s === 'parentNode';
              const a = S++;
              return t.first
                ? function (t, n, r) {
                    for (; (t = t[i]); ) if (t.nodeType === 1 || o) return e(t, n, r);
                    return !1;
                  }
                : function (t, n, u) {
                    let l;
                    let c;
                    let f;
                    const d = [w, a];
                    if (u) {
                      for (; (t = t[i]); )
                        if ((t.nodeType === 1 || o) && e(t, n, u)) return !0;
                    } else
                      for (; (t = t[i]); )
                        if (t.nodeType === 1 || o)
                          if (
                            ((c =
                              (f = t[T] || (t[T] = {}))[t.uniqueID] ||
                              (f[t.uniqueID] = {})),
                            r && r === t.nodeName.toLowerCase())
                          )
                            t = t[i] || t;
                          else {
                            if ((l = c[s]) && l[0] === w && l[1] === a)
                              return (d[2] = l[2]);
                            if (((c[s] = d), (d[2] = e(t, n, u)))) return !0;
                          }
                    return !1;
                  };
            }
            function xe(e) {
              return e.length > 1
                ? function (t, n, i) {
                    for (let r = e.length; r--; ) if (!e[r](t, n, i)) return !1;
                    return !0;
                  }
                : e[0];
            }
            function we(e, t, n, i, r) {
              for (var s, o = [], a = 0, u = e.length, l = t != null; a < u; a++)
                (s = e[a]) && ((n && !n(s, i, r)) || (o.push(s), l && t.push(a)));
              return o;
            }
            function Se(e, t, n, i, r, s) {
              return (
                i && !i[T] && (i = Se(i)),
                r && !r[T] && (r = Se(r, s)),
                le(function (s, o, a, u) {
                  let l;
                  let c;
                  let f;
                  const d = [];
                  const h = [];
                  const p = o.length;
                  const m =
                    s ||
                    (function (e, t, n) {
                      for (let i = 0, r = t.length; i < r; i++) ae(e, t[i], n);
                      return n;
                    })(t || '*', a.nodeType ? [a] : a, []);
                  const v = !e || (!s && t) ? m : we(m, d, e, a, u);
                  let g = n ? (r || (s ? e : p || i) ? [] : o) : v;
                  if ((n && n(v, g, a, u), i))
                    for (l = we(g, h), i(l, [], a, u), c = l.length; c--; )
                      (f = l[c]) && (g[h[c]] = !(v[h[c]] = f));
                  if (s) {
                    if (r || e) {
                      if (r) {
                        for (l = [], c = g.length; c--; )
                          (f = g[c]) && l.push((v[c] = f));
                        r(null, (g = []), l, u);
                      }
                      for (c = g.length; c--; )
                        (f = g[c]) &&
                          (l = r ? L(s, f) : d[c]) > -1 &&
                          (s[l] = !(o[l] = f));
                    }
                  } else (g = we(g === o ? g.splice(p, g.length) : g)), r ? r(null, o, g, u) : F.apply(o, g);
                })
              );
            }
            function _e(e) {
              for (
                var t,
                  n,
                  r,
                  s = e.length,
                  o = i.relative[e[0].type],
                  a = o || i.relative[' '],
                  u = o ? 1 : 0,
                  c = Te(
                    function (e) {
                      return e === t;
                    },
                    a,
                    !0,
                  ),
                  f = Te(
                    function (e) {
                      return L(t, e) > -1;
                    },
                    a,
                    !0,
                  ),
                  d = [
                    function (e, n, i) {
                      const r =
                        (!o && (i || n !== l)) ||
                        ((t = n).nodeType ? c(e, n, i) : f(e, n, i));
                      return (t = null), r;
                    },
                  ];
                u < s;
                u++
              )
                if ((n = i.relative[e[u].type])) d = [Te(xe(d), n)];
                else {
                  if ((n = i.filter[e[u].type].apply(null, e[u].matches))[T]) {
                    for (r = ++u; r < s && !i.relative[e[r].type]; r++);
                    return Se(
                      u > 1 && xe(d),
                      u > 1 &&
                        be(
                          e
                            .slice(0, u - 1)
                            .concat({ value: e[u - 2].type === ' ' ? '*' : '' }),
                        ).replace(B, '$1'),
                      n,
                      u < r && _e(e.slice(u, r)),
                      r < s && _e((e = e.slice(r))),
                      r < s && be(e),
                    );
                  }
                  d.push(n);
                }
              return xe(d);
            }
            return (
              (ye.prototype = i.filters = i.pseudos),
              (i.setFilters = new ye()),
              (o = ae.tokenize =
                function (e, t) {
                  let n;
                  let r;
                  let s;
                  let o;
                  let a;
                  let u;
                  let l;
                  const c = C[`${e} `];
                  if (c) return t ? 0 : c.slice(0);
                  for (a = e, u = [], l = i.preFilter; a; ) {
                    for (o in ((n && !(r = z.exec(a))) ||
                      (r && (a = a.slice(r[0].length) || a), u.push((s = []))),
                    (n = !1),
                    (r = U.exec(a)) &&
                      ((n = r.shift()),
                      s.push({ value: n, type: r[0].replace(B, ' ') }),
                      (a = a.slice(n.length))),
                    i.filter))
                      !(r = Y[o].exec(a)) ||
                        (l[o] && !(r = l[o](r))) ||
                        ((n = r.shift()),
                        s.push({ value: n, type: o, matches: r }),
                        (a = a.slice(n.length)));
                    if (!n) break;
                  }
                  return t ? a.length : a ? ae.error(e) : C(e, u).slice(0);
                }),
              (a = ae.compile =
                function (e, t) {
                  let n;
                  const r = [];
                  const s = [];
                  let a = E[`${e} `];
                  if (!a) {
                    for (t || (t = o(e)), n = t.length; n--; )
                      (a = _e(t[n]))[T] ? r.push(a) : s.push(a);
                    (a = E(
                      e,
                      (function (e, t) {
                        const n = t.length > 0;
                        const r = e.length > 0;
                        const s = function (s, o, a, u, c) {
                          let f;
                          let p;
                          let v;
                          let g = 0;
                          let y = '0';
                          const b = s && [];
                          let T = [];
                          const x = l;
                          const S = s || (r && i.find.TAG('*', c));
                          const _ = (w += x == null ? 1 : Math.random() || 0.1);
                          const C = S.length;
                          for (
                            c && (l = o == h || o || c);
                            y !== C && (f = S[y]) != null;
                            y++
                          ) {
                            if (r && f) {
                              for (
                                p = 0, o || f.ownerDocument == h || (d(f), (a = !m));
                                (v = e[p++]);

                              )
                                if (v(f, o || h, a)) {
                                  u.push(f);
                                  break;
                                }
                              c && (w = _);
                            }
                            n && ((f = !v && f) && g--, s && b.push(f));
                          }
                          if (((g += y), n && y !== g)) {
                            for (p = 0; (v = t[p++]); ) v(b, T, o, a);
                            if (s) {
                              if (g > 0) for (; y--; ) b[y] || T[y] || (T[y] = k.call(u));
                              T = we(T);
                            }
                            F.apply(u, T),
                              c &&
                                !s &&
                                T.length > 0 &&
                                g + t.length > 1 &&
                                ae.uniqueSort(u);
                          }
                          return c && ((w = _), (l = x)), b;
                        };
                        return n ? le(s) : s;
                      })(s, r),
                    )),
                      (a.selector = e);
                  }
                  return a;
                }),
              (u = ae.select =
                function (e, t, n, r) {
                  let s;
                  let u;
                  let l;
                  let c;
                  let f;
                  const d = typeof e === 'function' && e;
                  const h = !r && o((e = d.selector || e));
                  if (((n = n || []), h.length === 1)) {
                    if (
                      (u = h[0] = h[0].slice(0)).length > 2 &&
                      (l = u[0]).type === 'ID' &&
                      t.nodeType === 9 &&
                      m &&
                      i.relative[u[1].type]
                    ) {
                      if (!(t = (i.find.ID(l.matches[0].replace(te, ne), t) || [])[0]))
                        return n;
                      d && (t = t.parentNode), (e = e.slice(u.shift().value.length));
                    }
                    for (
                      s = Y.needsContext.test(e) ? 0 : u.length;
                      s-- && ((l = u[s]), !i.relative[(c = l.type)]);

                    )
                      if (
                        (f = i.find[c]) &&
                        (r = f(
                          l.matches[0].replace(te, ne),
                          (ee.test(u[0].type) && ge(t.parentNode)) || t,
                        ))
                      ) {
                        if ((u.splice(s, 1), !(e = r.length && be(u))))
                          return F.apply(n, r), n;
                        break;
                      }
                  }
                  return (
                    (d || a(e, h))(
                      r,
                      t,
                      !m,
                      n,
                      !t || (ee.test(e) && ge(t.parentNode)) || t,
                    ),
                    n
                  );
                }),
              (n.sortStable = T.split('').sort(M).join('') === T),
              (n.detectDuplicates = !!f),
              d(),
              (n.sortDetached = ce(function (e) {
                return 1 & e.compareDocumentPosition(h.createElement('fieldset'));
              })),
              ce(function (e) {
                return (
                  (e.innerHTML = "<a href='#'></a>"),
                  e.firstChild.getAttribute('href') === '#'
                );
              }) ||
                fe('type|href|height|width', function (e, t, n) {
                  if (!n) return e.getAttribute(t, t.toLowerCase() === 'type' ? 1 : 2);
                }),
              (n.attributes &&
                ce(function (e) {
                  return (
                    (e.innerHTML = '<input/>'),
                    e.firstChild.setAttribute('value', ''),
                    e.firstChild.getAttribute('value') === ''
                  );
                })) ||
                fe('value', function (e, t, n) {
                  if (!n && e.nodeName.toLowerCase() === 'input') return e.defaultValue;
                }),
              ce(function (e) {
                return e.getAttribute('disabled') == null;
              }) ||
                fe(P, function (e, t, n) {
                  let i;
                  if (!n)
                    return !0 === e[t]
                      ? t.toLowerCase()
                      : (i = e.getAttributeNode(t)) && i.specified
                      ? i.value
                      : null;
                }),
              ae
            );
          })(i);
          (_.find = E),
            (_.expr = E.selectors),
            (_.expr[':'] = _.expr.pseudos),
            (_.uniqueSort = _.unique = E.uniqueSort),
            (_.text = E.getText),
            (_.isXMLDoc = E.isXML),
            (_.contains = E.contains),
            (_.escapeSelector = E.escape);
          const D = function (e, t, n) {
            for (var i = [], r = void 0 !== n; (e = e[t]) && e.nodeType !== 9; )
              if (e.nodeType === 1) {
                if (r && _(e).is(n)) break;
                i.push(e);
              }
            return i;
          };
          const M = function (e, t) {
            for (var n = []; e; e = e.nextSibling)
              e.nodeType === 1 && e !== t && n.push(e);
            return n;
          };
          const O = _.expr.match.needsContext;
          function A(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          }
          const k = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
          function N(e, t, n) {
            return g(t)
              ? _.grep(e, function (e, i) {
                  return !!t.call(e, i, e) !== n;
                })
              : t.nodeType
              ? _.grep(e, function (e) {
                  return (e === t) !== n;
                })
              : typeof t !== 'string'
              ? _.grep(e, function (e) {
                  return c.call(t, e) > -1 !== n;
                })
              : _.filter(t, e, n);
          }
          (_.filter = function (e, t, n) {
            const i = t[0];
            return (
              n && (e = `:not(${e})`),
              t.length === 1 && i.nodeType === 1
                ? _.find.matchesSelector(i, e)
                  ? [i]
                  : []
                : _.find.matches(
                    e,
                    _.grep(t, function (e) {
                      return e.nodeType === 1;
                    }),
                  )
            );
          }),
            _.fn.extend({
              find(e) {
                let t;
                let n;
                const i = this.length;
                const r = this;
                if (typeof e !== 'string')
                  return this.pushStack(
                    _(e).filter(function () {
                      for (t = 0; t < i; t++) if (_.contains(r[t], this)) return !0;
                    }),
                  );
                for (n = this.pushStack([]), t = 0; t < i; t++) _.find(e, r[t], n);
                return i > 1 ? _.uniqueSort(n) : n;
              },
              filter(e) {
                return this.pushStack(N(this, e || [], !1));
              },
              not(e) {
                return this.pushStack(N(this, e || [], !0));
              },
              is(e) {
                return !!N(this, typeof e === 'string' && O.test(e) ? _(e) : e || [], !1)
                  .length;
              },
            });
          let F;
          const j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
          ((_.fn.init = function (e, t, n) {
            let i;
            let r;
            if (!e) return this;
            if (((n = n || F), typeof e === 'string')) {
              if (
                !(i =
                  e[0] === '<' && e[e.length - 1] === '>' && e.length >= 3
                    ? [null, e, null]
                    : j.exec(e)) ||
                (!i[1] && t)
              )
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
              if (i[1]) {
                if (
                  ((t = t instanceof _ ? t[0] : t),
                  _.merge(
                    this,
                    _.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : b, !0),
                  ),
                  k.test(i[1]) && _.isPlainObject(t))
                )
                  for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this;
              }
              return (
                (r = b.getElementById(i[2])) && ((this[0] = r), (this.length = 1)), this
              );
            }
            return e.nodeType
              ? ((this[0] = e), (this.length = 1), this)
              : g(e)
              ? void 0 !== n.ready
                ? n.ready(e)
                : e(_)
              : _.makeArray(e, this);
          }).prototype = _.fn),
            (F = _(b));
          const L = /^(?:parents|prev(?:Until|All))/;
          const P = { children: !0, contents: !0, next: !0, prev: !0 };
          function R(e, t) {
            for (; (e = e[t]) && e.nodeType !== 1; );
            return e;
          }
          _.fn.extend({
            has(e) {
              const t = _(e, this);
              const n = t.length;
              return this.filter(function () {
                for (let e = 0; e < n; e++) if (_.contains(this, t[e])) return !0;
              });
            },
            closest(e, t) {
              let n;
              let i = 0;
              const r = this.length;
              const s = [];
              const o = typeof e !== 'string' && _(e);
              if (!O.test(e))
                for (; i < r; i++)
                  for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (
                      n.nodeType < 11 &&
                      (o
                        ? o.index(n) > -1
                        : n.nodeType === 1 && _.find.matchesSelector(n, e))
                    ) {
                      s.push(n);
                      break;
                    }
              return this.pushStack(s.length > 1 ? _.uniqueSort(s) : s);
            },
            index(e) {
              return e
                ? typeof e === 'string'
                  ? c.call(_(e), this[0])
                  : c.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
            },
            add(e, t) {
              return this.pushStack(_.uniqueSort(_.merge(this.get(), _(e, t))));
            },
            addBack(e) {
              return this.add(e == null ? this.prevObject : this.prevObject.filter(e));
            },
          }),
            _.each(
              {
                parent(e) {
                  const t = e.parentNode;
                  return t && t.nodeType !== 11 ? t : null;
                },
                parents(e) {
                  return D(e, 'parentNode');
                },
                parentsUntil(e, t, n) {
                  return D(e, 'parentNode', n);
                },
                next(e) {
                  return R(e, 'nextSibling');
                },
                prev(e) {
                  return R(e, 'previousSibling');
                },
                nextAll(e) {
                  return D(e, 'nextSibling');
                },
                prevAll(e) {
                  return D(e, 'previousSibling');
                },
                nextUntil(e, t, n) {
                  return D(e, 'nextSibling', n);
                },
                prevUntil(e, t, n) {
                  return D(e, 'previousSibling', n);
                },
                siblings(e) {
                  return M((e.parentNode || {}).firstChild, e);
                },
                children(e) {
                  return M(e.firstChild);
                },
                contents(e) {
                  return e.contentDocument != null && o(e.contentDocument)
                    ? e.contentDocument
                    : (A(e, 'template') && (e = e.content || e),
                      _.merge([], e.childNodes));
                },
              },
              function (e, t) {
                _.fn[e] = function (n, i) {
                  let r = _.map(this, t, n);
                  return (
                    e.slice(-5) !== 'Until' && (i = n),
                    i && typeof i === 'string' && (r = _.filter(i, r)),
                    this.length > 1 &&
                      (P[e] || _.uniqueSort(r), L.test(e) && r.reverse()),
                    this.pushStack(r)
                  );
                };
              },
            );
          const V = /[^\x20\t\r\n\f]+/g;
          function H(e) {
            return e;
          }
          function q(e) {
            throw e;
          }
          function I(e, t, n, i) {
            let r;
            try {
              e && g((r = e.promise))
                ? r.call(e).done(t).fail(n)
                : e && g((r = e.then))
                ? r.call(e, t, n)
                : t.apply(void 0, [e].slice(i));
            } catch (e) {
              n.apply(void 0, [e]);
            }
          }
          (_.Callbacks = function (e) {
            e =
              typeof e === 'string'
                ? (function (e) {
                    const t = {};
                    return (
                      _.each(e.match(V) || [], function (e, n) {
                        t[n] = !0;
                      }),
                      t
                    );
                  })(e)
                : _.extend({}, e);
            let t;
            let n;
            let i;
            let r;
            let s = [];
            let o = [];
            let a = -1;
            const u = function () {
              for (r = r || e.once, i = t = !0; o.length; a = -1)
                for (n = o.shift(); ++a < s.length; )
                  !1 === s[a].apply(n[0], n[1]) &&
                    e.stopOnFalse &&
                    ((a = s.length), (n = !1));
              e.memory || (n = !1), (t = !1), r && (s = n ? [] : '');
            };
            var l = {
              add() {
                return (
                  s &&
                    (n && !t && ((a = s.length - 1), o.push(n)),
                    (function t(n) {
                      _.each(n, function (n, i) {
                        g(i)
                          ? (e.unique && l.has(i)) || s.push(i)
                          : i && i.length && w(i) !== 'string' && t(i);
                      });
                    })(arguments),
                    n && !t && u()),
                  this
                );
              },
              remove() {
                return (
                  _.each(arguments, function (e, t) {
                    for (var n; (n = _.inArray(t, s, n)) > -1; )
                      s.splice(n, 1), n <= a && a--;
                  }),
                  this
                );
              },
              has(e) {
                return e ? _.inArray(e, s) > -1 : s.length > 0;
              },
              empty() {
                return s && (s = []), this;
              },
              disable() {
                return (r = o = []), (s = n = ''), this;
              },
              disabled() {
                return !s;
              },
              lock() {
                return (r = o = []), n || t || (s = n = ''), this;
              },
              locked() {
                return !!r;
              },
              fireWith(e, n) {
                return (
                  r ||
                    ((n = [e, (n = n || []).slice ? n.slice() : n]), o.push(n), t || u()),
                  this
                );
              },
              fire() {
                return l.fireWith(this, arguments), this;
              },
              fired() {
                return !!i;
              },
            };
            return l;
          }),
            _.extend({
              Deferred(e) {
                const t = [
                  ['notify', 'progress', _.Callbacks('memory'), _.Callbacks('memory'), 2],
                  [
                    'resolve',
                    'done',
                    _.Callbacks('once memory'),
                    _.Callbacks('once memory'),
                    0,
                    'resolved',
                  ],
                  [
                    'reject',
                    'fail',
                    _.Callbacks('once memory'),
                    _.Callbacks('once memory'),
                    1,
                    'rejected',
                  ],
                ];
                let n = 'pending';
                var r = {
                  state() {
                    return n;
                  },
                  always() {
                    return s.done(arguments).fail(arguments), this;
                  },
                  catch(e) {
                    return r.then(null, e);
                  },
                  pipe() {
                    let e = arguments;
                    return _.Deferred(function (n) {
                      _.each(t, function (t, i) {
                        const r = g(e[i[4]]) && e[i[4]];
                        s[i[1]](function () {
                          const e = r && r.apply(this, arguments);
                          e && g(e.promise)
                            ? e
                                .promise()
                                .progress(n.notify)
                                .done(n.resolve)
                                .fail(n.reject)
                            : n[`${i[0]}With`](this, r ? [e] : arguments);
                        });
                      }),
                        (e = null);
                    }).promise();
                  },
                  then(e, n, r) {
                    let s = 0;
                    function o(e, t, n, r) {
                      return function () {
                        let a = this;
                        let u = arguments;
                        const l = function () {
                          let i;
                          let l;
                          if (!(e < s)) {
                            if ((i = n.apply(a, u)) === t.promise())
                              throw new TypeError('Thenable self-resolution');
                            (l =
                              i &&
                              (typeof i === 'object' || typeof i === 'function') &&
                              i.then),
                              g(l)
                                ? r
                                  ? l.call(i, o(s, t, H, r), o(s, t, q, r))
                                  : (s++,
                                    l.call(
                                      i,
                                      o(s, t, H, r),
                                      o(s, t, q, r),
                                      o(s, t, H, t.notifyWith),
                                    ))
                                : (n !== H && ((a = void 0), (u = [i])),
                                  (r || t.resolveWith)(a, u));
                          }
                        };
                        var c = r
                          ? l
                          : function () {
                              try {
                                l();
                              } catch (i) {
                                _.Deferred.exceptionHook &&
                                  _.Deferred.exceptionHook(i, c.stackTrace),
                                  e + 1 >= s &&
                                    (n !== q && ((a = void 0), (u = [i])),
                                    t.rejectWith(a, u));
                              }
                            };
                        e
                          ? c()
                          : (_.Deferred.getStackHook &&
                              (c.stackTrace = _.Deferred.getStackHook()),
                            i.setTimeout(c));
                      };
                    }
                    return _.Deferred(function (i) {
                      t[0][3].add(o(0, i, g(r) ? r : H, i.notifyWith)),
                        t[1][3].add(o(0, i, g(e) ? e : H)),
                        t[2][3].add(o(0, i, g(n) ? n : q));
                    }).promise();
                  },
                  promise(e) {
                    return e != null ? _.extend(e, r) : r;
                  },
                };
                var s = {};
                return (
                  _.each(t, function (e, i) {
                    const o = i[2];
                    const a = i[5];
                    (r[i[1]] = o.add),
                      a &&
                        o.add(
                          function () {
                            n = a;
                          },
                          t[3 - e][2].disable,
                          t[3 - e][3].disable,
                          t[0][2].lock,
                          t[0][3].lock,
                        ),
                      o.add(i[3].fire),
                      (s[i[0]] = function () {
                        return (
                          s[`${i[0]}With`](this === s ? void 0 : this, arguments), this
                        );
                      }),
                      (s[`${i[0]}With`] = o.fireWith);
                  }),
                  r.promise(s),
                  e && e.call(s, s),
                  s
                );
              },
              when(e) {
                let t = arguments.length;
                let n = t;
                const i = Array(n);
                const r = a.call(arguments);
                const s = _.Deferred();
                const o = function (e) {
                  return function (n) {
                    (i[e] = this),
                      (r[e] = arguments.length > 1 ? a.call(arguments) : n),
                      --t || s.resolveWith(i, r);
                  };
                };
                if (
                  t <= 1 &&
                  (I(e, s.done(o(n)).resolve, s.reject, !t),
                  s.state() === 'pending' || g(r[n] && r[n].then))
                )
                  return s.then();
                for (; n--; ) I(r[n], o(n), s.reject);
                return s.promise();
              },
            });
          const B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
          (_.Deferred.exceptionHook = function (e, t) {
            i.console &&
              i.console.warn &&
              e &&
              B.test(e.name) &&
              i.console.warn(`jQuery.Deferred exception: ${e.message}`, e.stack, t);
          }),
            (_.readyException = function (e) {
              i.setTimeout(function () {
                throw e;
              });
            });
          const z = _.Deferred();
          function U() {
            b.removeEventListener('DOMContentLoaded', U),
              i.removeEventListener('load', U),
              _.ready();
          }
          (_.fn.ready = function (e) {
            return (
              z.then(e).catch(function (e) {
                _.readyException(e);
              }),
              this
            );
          }),
            _.extend({
              isReady: !1,
              readyWait: 1,
              ready(e) {
                (!0 === e ? --_.readyWait : _.isReady) ||
                  ((_.isReady = !0),
                  (!0 !== e && --_.readyWait > 0) || z.resolveWith(b, [_]));
              },
            }),
            (_.ready.then = z.then),
            b.readyState === 'complete' ||
            (b.readyState !== 'loading' && !b.documentElement.doScroll)
              ? i.setTimeout(_.ready)
              : (b.addEventListener('DOMContentLoaded', U),
                i.addEventListener('load', U));
          var $ = function (e, t, n, i, r, s, o) {
            let a = 0;
            const u = e.length;
            let l = n == null;
            if (w(n) === 'object') for (a in ((r = !0), n)) $(e, t, a, n[a], !0, s, o);
            else if (
              void 0 !== i &&
              ((r = !0),
              g(i) || (o = !0),
              l &&
                (o
                  ? (t.call(e, i), (t = null))
                  : ((l = t),
                    (t = function (e, t, n) {
                      return l.call(_(e), n);
                    }))),
              t)
            )
              for (; a < u; a++) t(e[a], n, o ? i : i.call(e[a], a, t(e[a], n)));
            return r ? e : l ? t.call(e) : u ? t(e[0], n) : s;
          };
          const W = /^-ms-/;
          const X = /-([a-z])/g;
          function Y(e, t) {
            return t.toUpperCase();
          }
          function G(e) {
            return e.replace(W, 'ms-').replace(X, Y);
          }
          const Q = function (e) {
            return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType;
          };
          function J() {
            this.expando = _.expando + J.uid++;
          }
          (J.uid = 1),
            (J.prototype = {
              cache(e) {
                let t = e[this.expando];
                return (
                  t ||
                    ((t = {}),
                    Q(e) &&
                      (e.nodeType
                        ? (e[this.expando] = t)
                        : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0,
                          }))),
                  t
                );
              },
              set(e, t, n) {
                let i;
                const r = this.cache(e);
                if (typeof t === 'string') r[G(t)] = n;
                else for (i in t) r[G(i)] = t[i];
                return r;
              },
              get(e, t) {
                return void 0 === t
                  ? this.cache(e)
                  : e[this.expando] && e[this.expando][G(t)];
              },
              access(e, t, n) {
                return void 0 === t || (t && typeof t === 'string' && void 0 === n)
                  ? this.get(e, t)
                  : (this.set(e, t, n), void 0 !== n ? n : t);
              },
              remove(e, t) {
                let n;
                const i = e[this.expando];
                if (void 0 !== i) {
                  if (void 0 !== t) {
                    n = (t = Array.isArray(t)
                      ? t.map(G)
                      : (t = G(t)) in i
                      ? [t]
                      : t.match(V) || []).length;
                    for (; n--; ) delete i[t[n]];
                  }
                  (void 0 === t || _.isEmptyObject(i)) &&
                    (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
                }
              },
              hasData(e) {
                const t = e[this.expando];
                return void 0 !== t && !_.isEmptyObject(t);
              },
            });
          const K = new J();
          const Z = new J();
          const ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/;
          const te = /[A-Z]/g;
          function ne(e, t, n) {
            let i;
            if (void 0 === n && e.nodeType === 1)
              if (
                ((i = `data-${t.replace(te, '-$&').toLowerCase()}`),
                typeof (n = e.getAttribute(i)) === 'string')
              ) {
                try {
                  n = (function (e) {
                    return (
                      e === 'true' ||
                      (e !== 'false' &&
                        (e === 'null'
                          ? null
                          : e === `${+e}`
                          ? +e
                          : ee.test(e)
                          ? JSON.parse(e)
                          : e))
                    );
                  })(n);
                } catch (e) {}
                Z.set(e, t, n);
              } else n = void 0;
            return n;
          }
          _.extend({
            hasData(e) {
              return Z.hasData(e) || K.hasData(e);
            },
            data(e, t, n) {
              return Z.access(e, t, n);
            },
            removeData(e, t) {
              Z.remove(e, t);
            },
            _data(e, t, n) {
              return K.access(e, t, n);
            },
            _removeData(e, t) {
              K.remove(e, t);
            },
          }),
            _.fn.extend({
              data(e, t) {
                let n;
                let i;
                let r;
                const s = this[0];
                const o = s && s.attributes;
                if (void 0 === e) {
                  if (
                    this.length &&
                    ((r = Z.get(s)), s.nodeType === 1 && !K.get(s, 'hasDataAttrs'))
                  ) {
                    for (n = o.length; n--; )
                      o[n] &&
                        (i = o[n].name).indexOf('data-') === 0 &&
                        ((i = G(i.slice(5))), ne(s, i, r[i]));
                    K.set(s, 'hasDataAttrs', !0);
                  }
                  return r;
                }
                return typeof e === 'object'
                  ? this.each(function () {
                      Z.set(this, e);
                    })
                  : $(
                      this,
                      function (t) {
                        let n;
                        if (s && void 0 === t)
                          return void 0 !== (n = Z.get(s, e)) || void 0 !== (n = ne(s, e))
                            ? n
                            : void 0;
                        this.each(function () {
                          Z.set(this, e, t);
                        });
                      },
                      null,
                      t,
                      arguments.length > 1,
                      null,
                      !0,
                    );
              },
              removeData(e) {
                return this.each(function () {
                  Z.remove(this, e);
                });
              },
            }),
            _.extend({
              queue(e, t, n) {
                let i;
                if (e)
                  return (
                    (t = `${t || 'fx'}queue`),
                    (i = K.get(e, t)),
                    n &&
                      (!i || Array.isArray(n)
                        ? (i = K.access(e, t, _.makeArray(n)))
                        : i.push(n)),
                    i || []
                  );
              },
              dequeue(e, t) {
                t = t || 'fx';
                const n = _.queue(e, t);
                let i = n.length;
                let r = n.shift();
                const s = _._queueHooks(e, t);
                r === 'inprogress' && ((r = n.shift()), i--),
                  r &&
                    (t === 'fx' && n.unshift('inprogress'),
                    delete s.stop,
                    r.call(
                      e,
                      function () {
                        _.dequeue(e, t);
                      },
                      s,
                    )),
                  !i && s && s.empty.fire();
              },
              _queueHooks(e, t) {
                const n = `${t}queueHooks`;
                return (
                  K.get(e, n) ||
                  K.access(e, n, {
                    empty: _.Callbacks('once memory').add(function () {
                      K.remove(e, [`${t}queue`, n]);
                    }),
                  })
                );
              },
            }),
            _.fn.extend({
              queue(e, t) {
                let n = 2;
                return (
                  typeof e !== 'string' && ((t = e), (e = 'fx'), n--),
                  arguments.length < n
                    ? _.queue(this[0], e)
                    : void 0 === t
                    ? this
                    : this.each(function () {
                        const n = _.queue(this, e, t);
                        _._queueHooks(this, e),
                          e === 'fx' && n[0] !== 'inprogress' && _.dequeue(this, e);
                      })
                );
              },
              dequeue(e) {
                return this.each(function () {
                  _.dequeue(this, e);
                });
              },
              clearQueue(e) {
                return this.queue(e || 'fx', []);
              },
              promise(e, t) {
                let n;
                let i = 1;
                const r = _.Deferred();
                const s = this;
                let o = this.length;
                const a = function () {
                  --i || r.resolveWith(s, [s]);
                };
                for (
                  typeof e !== 'string' && ((t = e), (e = void 0)), e = e || 'fx';
                  o--;

                )
                  (n = K.get(s[o], `${e}queueHooks`)) && n.empty && (i++, n.empty.add(a));
                return a(), r.promise(t);
              },
            });
          const ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
          const re = new RegExp(`^(?:([+-])=|)(${ie})([a-z%]*)$`, 'i');
          const se = ['Top', 'Right', 'Bottom', 'Left'];
          const oe = b.documentElement;
          let ae = function (e) {
            return _.contains(e.ownerDocument, e);
          };
          const ue = { composed: !0 };
          oe.getRootNode &&
            (ae = function (e) {
              return (
                _.contains(e.ownerDocument, e) || e.getRootNode(ue) === e.ownerDocument
              );
            });
          const le = function (e, t) {
            return (
              (e = t || e).style.display === 'none' ||
              (e.style.display === '' && ae(e) && _.css(e, 'display') === 'none')
            );
          };
          function ce(e, t, n, i) {
            let r;
            let s;
            let o = 20;
            const a = i
              ? function () {
                  return i.cur();
                }
              : function () {
                  return _.css(e, t, '');
                };
            let u = a();
            let l = (n && n[3]) || (_.cssNumber[t] ? '' : 'px');
            let c =
              e.nodeType &&
              (_.cssNumber[t] || (l !== 'px' && +u)) &&
              re.exec(_.css(e, t));
            if (c && c[3] !== l) {
              for (u /= 2, l = l || c[3], c = +u || 1; o--; )
                _.style(e, t, c + l),
                  (1 - s) * (1 - (s = a() / u || 0.5)) <= 0 && (o = 0),
                  (c /= s);
              (c *= 2), _.style(e, t, c + l), (n = n || []);
            }
            return (
              n &&
                ((c = +c || +u || 0),
                (r = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
                i && ((i.unit = l), (i.start = c), (i.end = r))),
              r
            );
          }
          const fe = {};
          function de(e) {
            let t;
            const n = e.ownerDocument;
            const i = e.nodeName;
            let r = fe[i];
            return (
              r ||
              ((t = n.body.appendChild(n.createElement(i))),
              (r = _.css(t, 'display')),
              t.parentNode.removeChild(t),
              r === 'none' && (r = 'block'),
              (fe[i] = r),
              r)
            );
          }
          function he(e, t) {
            for (var n, i, r = [], s = 0, o = e.length; s < o; s++)
              (i = e[s]).style &&
                ((n = i.style.display),
                t
                  ? (n === 'none' &&
                      ((r[s] = K.get(i, 'display') || null),
                      r[s] || (i.style.display = '')),
                    i.style.display === '' && le(i) && (r[s] = de(i)))
                  : n !== 'none' && ((r[s] = 'none'), K.set(i, 'display', n)));
            for (s = 0; s < o; s++) r[s] != null && (e[s].style.display = r[s]);
            return e;
          }
          _.fn.extend({
            show() {
              return he(this, !0);
            },
            hide() {
              return he(this);
            },
            toggle(e) {
              return typeof e === 'boolean'
                ? e
                  ? this.show()
                  : this.hide()
                : this.each(function () {
                    le(this) ? _(this).show() : _(this).hide();
                  });
            },
          });
          let pe;
          let me;
          const ve = /^(?:checkbox|radio)$/i;
          const ge = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
          const ye = /^$|^module$|\/(?:java|ecma)script/i;
          (pe = b.createDocumentFragment().appendChild(b.createElement('div'))),
            (me = b.createElement('input')).setAttribute('type', 'radio'),
            me.setAttribute('checked', 'checked'),
            me.setAttribute('name', 't'),
            pe.appendChild(me),
            (v.checkClone = pe.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (pe.innerHTML = '<textarea>x</textarea>'),
            (v.noCloneChecked = !!pe.cloneNode(!0).lastChild.defaultValue),
            (pe.innerHTML = '<option></option>'),
            (v.option = !!pe.lastChild);
          const be = {
            thead: [1, '<table>', '</table>'],
            col: [2, '<table><colgroup>', '</colgroup></table>'],
            tr: [2, '<table><tbody>', '</tbody></table>'],
            td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
            _default: [0, '', ''],
          };
          function Te(e, t) {
            let n;
            return (
              (n =
                void 0 !== e.getElementsByTagName
                  ? e.getElementsByTagName(t || '*')
                  : void 0 !== e.querySelectorAll
                  ? e.querySelectorAll(t || '*')
                  : []),
              void 0 === t || (t && A(e, t)) ? _.merge([e], n) : n
            );
          }
          function xe(e, t) {
            for (let n = 0, i = e.length; n < i; n++)
              K.set(e[n], 'globalEval', !t || K.get(t[n], 'globalEval'));
          }
          (be.tbody = be.tfoot = be.colgroup = be.caption = be.thead),
            (be.th = be.td),
            v.option ||
              (be.optgroup = be.option =
                [1, "<select multiple='multiple'>", '</select>']);
          const we = /<|&#?\w+;/;
          function Se(e, t, n, i, r) {
            for (
              var s,
                o,
                a,
                u,
                l,
                c,
                f = t.createDocumentFragment(),
                d = [],
                h = 0,
                p = e.length;
              h < p;
              h++
            )
              if ((s = e[h]) || s === 0)
                if (w(s) === 'object') _.merge(d, s.nodeType ? [s] : s);
                else if (we.test(s)) {
                  for (
                    o = o || f.appendChild(t.createElement('div')),
                      a = (ge.exec(s) || ['', ''])[1].toLowerCase(),
                      u = be[a] || be._default,
                      o.innerHTML = u[1] + _.htmlPrefilter(s) + u[2],
                      c = u[0];
                    c--;

                  )
                    o = o.lastChild;
                  _.merge(d, o.childNodes), ((o = f.firstChild).textContent = '');
                } else d.push(t.createTextNode(s));
            for (f.textContent = '', h = 0; (s = d[h++]); )
              if (i && _.inArray(s, i) > -1) r && r.push(s);
              else if (((l = ae(s)), (o = Te(f.appendChild(s), 'script')), l && xe(o), n))
                for (c = 0; (s = o[c++]); ) ye.test(s.type || '') && n.push(s);
            return f;
          }
          const _e = /^([^.]*)(?:\.(.+)|)/;
          function Ce() {
            return !0;
          }
          function Ee() {
            return !1;
          }
          function De(e, t) {
            return (
              (e ===
                (function () {
                  try {
                    return b.activeElement;
                  } catch (e) {}
                })()) ==
              (t === 'focus')
            );
          }
          function Me(e, t, n, i, r, s) {
            let o;
            let a;
            if (typeof t === 'object') {
              for (a in (typeof n !== 'string' && ((i = i || n), (n = void 0)), t))
                Me(e, a, n, i, t[a], s);
              return e;
            }
            if (
              (i == null && r == null
                ? ((r = n), (i = n = void 0))
                : r == null &&
                  (typeof n === 'string'
                    ? ((r = i), (i = void 0))
                    : ((r = i), (i = n), (n = void 0))),
              !1 === r)
            )
              r = Ee;
            else if (!r) return e;
            return (
              s === 1 &&
                ((o = r),
                (r = function (e) {
                  return _().off(e), o.apply(this, arguments);
                }),
                (r.guid = o.guid || (o.guid = _.guid++))),
              e.each(function () {
                _.event.add(this, t, r, i, n);
              })
            );
          }
          function Oe(e, t, n) {
            n
              ? (K.set(e, t, !1),
                _.event.add(e, t, {
                  namespace: !1,
                  handler(e) {
                    let i;
                    let r;
                    let s = K.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                      if (s.length)
                        (_.event.special[t] || {}).delegateType && e.stopPropagation();
                      else if (
                        ((s = a.call(arguments)),
                        K.set(this, t, s),
                        (i = n(this, t)),
                        this[t](),
                        s !== (r = K.get(this, t)) || i ? K.set(this, t, !1) : (r = {}),
                        s !== r)
                      )
                        return (
                          e.stopImmediatePropagation(), e.preventDefault(), r && r.value
                        );
                    } else
                      s.length &&
                        (K.set(this, t, {
                          value: _.event.trigger(
                            _.extend(s[0], _.Event.prototype),
                            s.slice(1),
                            this,
                          ),
                        }),
                        e.stopImmediatePropagation());
                  },
                }))
              : void 0 === K.get(e, t) && _.event.add(e, t, Ce);
          }
          (_.event = {
            global: {},
            add(e, t, n, i, r) {
              let s;
              let o;
              let a;
              let u;
              let l;
              let c;
              let f;
              let d;
              let h;
              let p;
              let m;
              const v = K.get(e);
              if (Q(e))
                for (
                  n.handler && ((n = (s = n).handler), (r = s.selector)),
                    r && _.find.matchesSelector(oe, r),
                    n.guid || (n.guid = _.guid++),
                    (u = v.events) || (u = v.events = Object.create(null)),
                    (o = v.handle) ||
                      (o = v.handle =
                        function (t) {
                          return void 0 !== _ && _.event.triggered !== t.type
                            ? _.event.dispatch.apply(e, arguments)
                            : void 0;
                        }),
                    l = (t = (t || '').match(V) || ['']).length;
                  l--;

                )
                  (h = m = (a = _e.exec(t[l]) || [])[1]),
                    (p = (a[2] || '').split('.').sort()),
                    h &&
                      ((f = _.event.special[h] || {}),
                      (h = (r ? f.delegateType : f.bindType) || h),
                      (f = _.event.special[h] || {}),
                      (c = _.extend(
                        {
                          type: h,
                          origType: m,
                          data: i,
                          handler: n,
                          guid: n.guid,
                          selector: r,
                          needsContext: r && _.expr.match.needsContext.test(r),
                          namespace: p.join('.'),
                        },
                        s,
                      )),
                      (d = u[h]) ||
                        (((d = u[h] = []).delegateCount = 0),
                        (f.setup && !1 !== f.setup.call(e, i, p, o)) ||
                          (e.addEventListener && e.addEventListener(h, o))),
                      f.add &&
                        (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
                      r ? d.splice(d.delegateCount++, 0, c) : d.push(c),
                      (_.event.global[h] = !0));
            },
            remove(e, t, n, i, r) {
              let s;
              let o;
              let a;
              let u;
              let l;
              let c;
              let f;
              let d;
              let h;
              let p;
              let m;
              const v = K.hasData(e) && K.get(e);
              if (v && (u = v.events)) {
                for (l = (t = (t || '').match(V) || ['']).length; l--; )
                  if (
                    ((h = m = (a = _e.exec(t[l]) || [])[1]),
                    (p = (a[2] || '').split('.').sort()),
                    h)
                  ) {
                    for (
                      f = _.event.special[h] || {},
                        d = u[(h = (i ? f.delegateType : f.bindType) || h)] || [],
                        a =
                          a[2] && new RegExp(`(^|\\.)${p.join('\\.(?:.*\\.|)')}(\\.|$)`),
                        o = s = d.length;
                      s--;

                    )
                      (c = d[s]),
                        (!r && m !== c.origType) ||
                          (n && n.guid !== c.guid) ||
                          (a && !a.test(c.namespace)) ||
                          (i && i !== c.selector && (i !== '**' || !c.selector)) ||
                          (d.splice(s, 1),
                          c.selector && d.delegateCount--,
                          f.remove && f.remove.call(e, c));
                    o &&
                      !d.length &&
                      ((f.teardown && !1 !== f.teardown.call(e, p, v.handle)) ||
                        _.removeEvent(e, h, v.handle),
                      delete u[h]);
                  } else for (h in u) _.event.remove(e, h + t[l], n, i, !0);
                _.isEmptyObject(u) && K.remove(e, 'handle events');
              }
            },
            dispatch(e) {
              let t;
              let n;
              let i;
              let r;
              let s;
              let o;
              const a = new Array(arguments.length);
              const u = _.event.fix(e);
              const l = (K.get(this, 'events') || Object.create(null))[u.type] || [];
              const c = _.event.special[u.type] || {};
              for (a[0] = u, t = 1; t < arguments.length; t++) a[t] = arguments[t];
              if (
                ((u.delegateTarget = this),
                !c.preDispatch || !1 !== c.preDispatch.call(this, u))
              ) {
                for (
                  o = _.event.handlers.call(this, u, l), t = 0;
                  (r = o[t++]) && !u.isPropagationStopped();

                )
                  for (
                    u.currentTarget = r.elem, n = 0;
                    (s = r.handlers[n++]) && !u.isImmediatePropagationStopped();

                  )
                    (u.rnamespace &&
                      !1 !== s.namespace &&
                      !u.rnamespace.test(s.namespace)) ||
                      ((u.handleObj = s),
                      (u.data = s.data),
                      void 0 !==
                        (i = (
                          (_.event.special[s.origType] || {}).handle || s.handler
                        ).apply(r.elem, a)) &&
                        !1 === (u.result = i) &&
                        (u.preventDefault(), u.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, u), u.result;
              }
            },
            handlers(e, t) {
              let n;
              let i;
              let r;
              let s;
              let o;
              const a = [];
              const u = t.delegateCount;
              let l = e.target;
              if (u && l.nodeType && !(e.type === 'click' && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                  if (l.nodeType === 1 && (e.type !== 'click' || !0 !== l.disabled)) {
                    for (s = [], o = {}, n = 0; n < u; n++)
                      void 0 === o[(r = `${(i = t[n]).selector} `)] &&
                        (o[r] = i.needsContext
                          ? _(r, this).index(l) > -1
                          : _.find(r, this, null, [l]).length),
                        o[r] && s.push(i);
                    s.length && a.push({ elem: l, handlers: s });
                  }
              return (
                (l = this), u < t.length && a.push({ elem: l, handlers: t.slice(u) }), a
              );
            },
            addProp(e, t) {
              Object.defineProperty(_.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: g(t)
                  ? function () {
                      if (this.originalEvent) return t(this.originalEvent);
                    }
                  : function () {
                      if (this.originalEvent) return this.originalEvent[e];
                    },
                set(t) {
                  Object.defineProperty(this, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t,
                  });
                },
              });
            },
            fix(e) {
              return e[_.expando] ? e : new _.Event(e);
            },
            special: {
              load: { noBubble: !0 },
              click: {
                setup(e) {
                  const t = this || e;
                  return (
                    ve.test(t.type) && t.click && A(t, 'input') && Oe(t, 'click', Ce), !1
                  );
                },
                trigger(e) {
                  const t = this || e;
                  return (
                    ve.test(t.type) && t.click && A(t, 'input') && Oe(t, 'click'), !0
                  );
                },
                _default(e) {
                  const t = e.target;
                  return (
                    (ve.test(t.type) && t.click && A(t, 'input') && K.get(t, 'click')) ||
                    A(t, 'a')
                  );
                },
              },
              beforeunload: {
                postDispatch(e) {
                  void 0 !== e.result &&
                    e.originalEvent &&
                    (e.originalEvent.returnValue = e.result);
                },
              },
            },
          }),
            (_.removeEvent = function (e, t, n) {
              e.removeEventListener && e.removeEventListener(t, n);
            }),
            (_.Event = function (e, t) {
              if (!(this instanceof _.Event)) return new _.Event(e, t);
              e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                    e.defaultPrevented ||
                    (void 0 === e.defaultPrevented && !1 === e.returnValue)
                      ? Ce
                      : Ee),
                  (this.target =
                    e.target && e.target.nodeType === 3 ? e.target.parentNode : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && _.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[_.expando] = !0);
            }),
            (_.Event.prototype = {
              constructor: _.Event,
              isDefaultPrevented: Ee,
              isPropagationStopped: Ee,
              isImmediatePropagationStopped: Ee,
              isSimulated: !1,
              preventDefault() {
                const e = this.originalEvent;
                (this.isDefaultPrevented = Ce),
                  e && !this.isSimulated && e.preventDefault();
              },
              stopPropagation() {
                const e = this.originalEvent;
                (this.isPropagationStopped = Ce),
                  e && !this.isSimulated && e.stopPropagation();
              },
              stopImmediatePropagation() {
                const e = this.originalEvent;
                (this.isImmediatePropagationStopped = Ce),
                  e && !this.isSimulated && e.stopImmediatePropagation(),
                  this.stopPropagation();
              },
            }),
            _.each(
              {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0,
              },
              _.event.addProp,
            ),
            _.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
              _.event.special[e] = {
                setup() {
                  return Oe(this, e, De), !1;
                },
                trigger() {
                  return Oe(this, e), !0;
                },
                _default() {
                  return !0;
                },
                delegateType: t,
              };
            }),
            _.each(
              {
                mouseenter: 'mouseover',
                mouseleave: 'mouseout',
                pointerenter: 'pointerover',
                pointerleave: 'pointerout',
              },
              function (e, t) {
                _.event.special[e] = {
                  delegateType: t,
                  bindType: t,
                  handle(e) {
                    let n;
                    const i = this;
                    const r = e.relatedTarget;
                    const s = e.handleObj;
                    return (
                      (r && (r === i || _.contains(i, r))) ||
                        ((e.type = s.origType),
                        (n = s.handler.apply(this, arguments)),
                        (e.type = t)),
                      n
                    );
                  },
                };
              },
            ),
            _.fn.extend({
              on(e, t, n, i) {
                return Me(this, e, t, n, i);
              },
              one(e, t, n, i) {
                return Me(this, e, t, n, i, 1);
              },
              off(e, t, n) {
                let i;
                let r;
                if (e && e.preventDefault && e.handleObj)
                  return (
                    (i = e.handleObj),
                    _(e.delegateTarget).off(
                      i.namespace ? `${i.origType}.${i.namespace}` : i.origType,
                      i.selector,
                      i.handler,
                    ),
                    this
                  );
                if (typeof e === 'object') {
                  for (r in e) this.off(r, t, e[r]);
                  return this;
                }
                return (
                  (!1 !== t && typeof t !== 'function') || ((n = t), (t = void 0)),
                  !1 === n && (n = Ee),
                  this.each(function () {
                    _.event.remove(this, e, n, t);
                  })
                );
              },
            });
          const Ae = /<script|<style|<link/i;
          const ke = /checked\s*(?:[^=]|=\s*.checked.)/i;
          const Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
          function Fe(e, t) {
            return (
              (A(e, 'table') &&
                A(t.nodeType !== 11 ? t : t.firstChild, 'tr') &&
                _(e).children('tbody')[0]) ||
              e
            );
          }
          function je(e) {
            return (e.type = `${e.getAttribute('type') !== null}/${e.type}`), e;
          }
          function Le(e) {
            return (
              (e.type || '').slice(0, 5) === 'true/'
                ? (e.type = e.type.slice(5))
                : e.removeAttribute('type'),
              e
            );
          }
          function Pe(e, t) {
            let n;
            let i;
            let r;
            let s;
            let o;
            let a;
            if (t.nodeType === 1) {
              if (K.hasData(e) && (a = K.get(e).events))
                for (r in (K.remove(t, 'handle events'), a))
                  for (n = 0, i = a[r].length; n < i; n++) _.event.add(t, r, a[r][n]);
              Z.hasData(e) && ((s = Z.access(e)), (o = _.extend({}, s)), Z.set(t, o));
            }
          }
          function Re(e, t) {
            const n = t.nodeName.toLowerCase();
            n === 'input' && ve.test(e.type)
              ? (t.checked = e.checked)
              : (n !== 'input' && n !== 'textarea') || (t.defaultValue = e.defaultValue);
          }
          function Ve(e, t, n, i) {
            t = u(t);
            let r;
            let s;
            let o;
            let a;
            let l;
            let c;
            let f = 0;
            const d = e.length;
            const h = d - 1;
            const p = t[0];
            const m = g(p);
            if (m || (d > 1 && typeof p === 'string' && !v.checkClone && ke.test(p)))
              return e.each(function (r) {
                const s = e.eq(r);
                m && (t[0] = p.call(this, r, s.html())), Ve(s, t, n, i);
              });
            if (
              d &&
              ((s = (r = Se(t, e[0].ownerDocument, !1, e, i)).firstChild),
              r.childNodes.length === 1 && (r = s),
              s || i)
            ) {
              for (a = (o = _.map(Te(r, 'script'), je)).length; f < d; f++)
                (l = r),
                  f !== h && ((l = _.clone(l, !0, !0)), a && _.merge(o, Te(l, 'script'))),
                  n.call(e[f], l, f);
              if (a)
                for (c = o[o.length - 1].ownerDocument, _.map(o, Le), f = 0; f < a; f++)
                  (l = o[f]),
                    ye.test(l.type || '') &&
                      !K.access(l, 'globalEval') &&
                      _.contains(c, l) &&
                      (l.src && (l.type || '').toLowerCase() !== 'module'
                        ? _._evalUrl &&
                          !l.noModule &&
                          _._evalUrl(
                            l.src,
                            { nonce: l.nonce || l.getAttribute('nonce') },
                            c,
                          )
                        : x(l.textContent.replace(Ne, ''), l, c));
            }
            return e;
          }
          function He(e, t, n) {
            for (var i, r = t ? _.filter(t, e) : e, s = 0; (i = r[s]) != null; s++)
              n || i.nodeType !== 1 || _.cleanData(Te(i)),
                i.parentNode &&
                  (n && ae(i) && xe(Te(i, 'script')), i.parentNode.removeChild(i));
            return e;
          }
          _.extend({
            htmlPrefilter(e) {
              return e;
            },
            clone(e, t, n) {
              let i;
              let r;
              let s;
              let o;
              const a = e.cloneNode(!0);
              const u = ae(e);
              if (
                !(
                  v.noCloneChecked ||
                  (e.nodeType !== 1 && e.nodeType !== 11) ||
                  _.isXMLDoc(e)
                )
              )
                for (o = Te(a), i = 0, r = (s = Te(e)).length; i < r; i++) Re(s[i], o[i]);
              if (t)
                if (n)
                  for (s = s || Te(e), o = o || Te(a), i = 0, r = s.length; i < r; i++)
                    Pe(s[i], o[i]);
                else Pe(e, a);
              return (o = Te(a, 'script')).length > 0 && xe(o, !u && Te(e, 'script')), a;
            },
            cleanData(e) {
              for (var t, n, i, r = _.event.special, s = 0; void 0 !== (n = e[s]); s++)
                if (Q(n)) {
                  if ((t = n[K.expando])) {
                    if (t.events)
                      for (i in t.events)
                        r[i] ? _.event.remove(n, i) : _.removeEvent(n, i, t.handle);
                    n[K.expando] = void 0;
                  }
                  n[Z.expando] && (n[Z.expando] = void 0);
                }
            },
          }),
            _.fn.extend({
              detach(e) {
                return He(this, e, !0);
              },
              remove(e) {
                return He(this, e);
              },
              text(e) {
                return $(
                  this,
                  function (e) {
                    return void 0 === e
                      ? _.text(this)
                      : this.empty().each(function () {
                          (this.nodeType !== 1 &&
                            this.nodeType !== 11 &&
                            this.nodeType !== 9) ||
                            (this.textContent = e);
                        });
                  },
                  null,
                  e,
                  arguments.length,
                );
              },
              append() {
                return Ve(this, arguments, function (e) {
                  (this.nodeType !== 1 && this.nodeType !== 11 && this.nodeType !== 9) ||
                    Fe(this, e).appendChild(e);
                });
              },
              prepend() {
                return Ve(this, arguments, function (e) {
                  if (
                    this.nodeType === 1 ||
                    this.nodeType === 11 ||
                    this.nodeType === 9
                  ) {
                    const t = Fe(this, e);
                    t.insertBefore(e, t.firstChild);
                  }
                });
              },
              before() {
                return Ve(this, arguments, function (e) {
                  this.parentNode && this.parentNode.insertBefore(e, this);
                });
              },
              after() {
                return Ve(this, arguments, function (e) {
                  this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                });
              },
              empty() {
                for (var e, t = 0; (e = this[t]) != null; t++)
                  e.nodeType === 1 && (_.cleanData(Te(e, !1)), (e.textContent = ''));
                return this;
              },
              clone(e, t) {
                return (
                  (e = e != null && e),
                  (t = t == null ? e : t),
                  this.map(function () {
                    return _.clone(this, e, t);
                  })
                );
              },
              html(e) {
                return $(
                  this,
                  function (e) {
                    let t = this[0] || {};
                    let n = 0;
                    const i = this.length;
                    if (void 0 === e && t.nodeType === 1) return t.innerHTML;
                    if (
                      typeof e === 'string' &&
                      !Ae.test(e) &&
                      !be[(ge.exec(e) || ['', ''])[1].toLowerCase()]
                    ) {
                      e = _.htmlPrefilter(e);
                      try {
                        for (; n < i; n++)
                          (t = this[n] || {}).nodeType === 1 &&
                            (_.cleanData(Te(t, !1)), (t.innerHTML = e));
                        t = 0;
                      } catch (e) {}
                    }
                    t && this.empty().append(e);
                  },
                  null,
                  e,
                  arguments.length,
                );
              },
              replaceWith() {
                const e = [];
                return Ve(
                  this,
                  arguments,
                  function (t) {
                    const n = this.parentNode;
                    _.inArray(this, e) < 0 &&
                      (_.cleanData(Te(this)), n && n.replaceChild(t, this));
                  },
                  e,
                );
              },
            }),
            _.each(
              {
                appendTo: 'append',
                prependTo: 'prepend',
                insertBefore: 'before',
                insertAfter: 'after',
                replaceAll: 'replaceWith',
              },
              function (e, t) {
                _.fn[e] = function (e) {
                  for (var n, i = [], r = _(e), s = r.length - 1, o = 0; o <= s; o++)
                    (n = o === s ? this : this.clone(!0)),
                      _(r[o])[t](n),
                      l.apply(i, n.get());
                  return this.pushStack(i);
                };
              },
            );
          const qe = new RegExp(`^(${ie})(?!px)[a-z%]+$`, 'i');
          const Ie = function (e) {
            let t = e.ownerDocument.defaultView;
            return (t && t.opener) || (t = i), t.getComputedStyle(e);
          };
          const Be = function (e, t, n) {
            let i;
            let r;
            const s = {};
            for (r in t) (s[r] = e.style[r]), (e.style[r] = t[r]);
            for (r in ((i = n.call(e)), t)) e.style[r] = s[r];
            return i;
          };
          const ze = new RegExp(se.join('|'), 'i');
          function Ue(e, t, n) {
            let i;
            let r;
            let s;
            let o;
            const a = e.style;
            return (
              (n = n || Ie(e)) &&
                ((o = n.getPropertyValue(t) || n[t]) !== '' ||
                  ae(e) ||
                  (o = _.style(e, t)),
                !v.pixelBoxStyles() &&
                  qe.test(o) &&
                  ze.test(t) &&
                  ((i = a.width),
                  (r = a.minWidth),
                  (s = a.maxWidth),
                  (a.minWidth = a.maxWidth = a.width = o),
                  (o = n.width),
                  (a.width = i),
                  (a.minWidth = r),
                  (a.maxWidth = s))),
              void 0 !== o ? `${o}` : o
            );
          }
          function $e(e, t) {
            return {
              get() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
              },
            };
          }
          !(function () {
            function e() {
              if (c) {
                (l.style.cssText =
                  'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
                  (c.style.cssText =
                    'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
                  oe.appendChild(l).appendChild(c);
                const e = i.getComputedStyle(c);
                (n = e.top !== '1%'),
                  (u = t(e.marginLeft) === 12),
                  (c.style.right = '60%'),
                  (o = t(e.right) === 36),
                  (r = t(e.width) === 36),
                  (c.style.position = 'absolute'),
                  (s = t(c.offsetWidth / 3) === 12),
                  oe.removeChild(l),
                  (c = null);
              }
            }
            function t(e) {
              return Math.round(parseFloat(e));
            }
            let n;
            let r;
            let s;
            let o;
            let a;
            let u;
            var l = b.createElement('div');
            var c = b.createElement('div');
            c.style &&
              ((c.style.backgroundClip = 'content-box'),
              (c.cloneNode(!0).style.backgroundClip = ''),
              (v.clearCloneStyle = c.style.backgroundClip === 'content-box'),
              _.extend(v, {
                boxSizingReliable() {
                  return e(), r;
                },
                pixelBoxStyles() {
                  return e(), o;
                },
                pixelPosition() {
                  return e(), n;
                },
                reliableMarginLeft() {
                  return e(), u;
                },
                scrollboxSize() {
                  return e(), s;
                },
                reliableTrDimensions() {
                  let e;
                  let t;
                  let n;
                  let r;
                  return (
                    a == null &&
                      ((e = b.createElement('table')),
                      (t = b.createElement('tr')),
                      (n = b.createElement('div')),
                      (e.style.cssText =
                        'position:absolute;left:-11111px;border-collapse:separate'),
                      (t.style.cssText = 'border:1px solid'),
                      (t.style.height = '1px'),
                      (n.style.height = '9px'),
                      (n.style.display = 'block'),
                      oe.appendChild(e).appendChild(t).appendChild(n),
                      (r = i.getComputedStyle(t)),
                      (a =
                        parseInt(r.height, 10) +
                          parseInt(r.borderTopWidth, 10) +
                          parseInt(r.borderBottomWidth, 10) ===
                        t.offsetHeight),
                      oe.removeChild(e)),
                    a
                  );
                },
              }));
          })();
          const We = ['Webkit', 'Moz', 'ms'];
          const Xe = b.createElement('div').style;
          const Ye = {};
          function Ge(e) {
            return (
              _.cssProps[e] ||
              Ye[e] ||
              (e in Xe
                ? e
                : (Ye[e] =
                    (function (e) {
                      for (let t = e[0].toUpperCase() + e.slice(1), n = We.length; n--; )
                        if ((e = We[n] + t) in Xe) return e;
                    })(e) || e))
            );
          }
          const Qe = /^(none|table(?!-c[ea]).+)/;
          const Je = /^--/;
          const Ke = { position: 'absolute', visibility: 'hidden', display: 'block' };
          const Ze = { letterSpacing: '0', fontWeight: '400' };
          function et(e, t, n) {
            const i = re.exec(t);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || 'px') : t;
          }
          function tt(e, t, n, i, r, s) {
            let o = t === 'width' ? 1 : 0;
            let a = 0;
            let u = 0;
            if (n === (i ? 'border' : 'content')) return 0;
            for (; o < 4; o += 2)
              n === 'margin' && (u += _.css(e, n + se[o], !0, r)),
                i
                  ? (n === 'content' && (u -= _.css(e, `padding${se[o]}`, !0, r)),
                    n !== 'margin' && (u -= _.css(e, `border${se[o]}Width`, !0, r)))
                  : ((u += _.css(e, `padding${se[o]}`, !0, r)),
                    n !== 'padding'
                      ? (u += _.css(e, `border${se[o]}Width`, !0, r))
                      : (a += _.css(e, `border${se[o]}Width`, !0, r)));
            return (
              !i &&
                s >= 0 &&
                (u +=
                  Math.max(
                    0,
                    Math.ceil(
                      e[`offset${t[0].toUpperCase()}${t.slice(1)}`] - s - u - a - 0.5,
                    ),
                  ) || 0),
              u
            );
          }
          function nt(e, t, n) {
            const i = Ie(e);
            let r =
              (!v.boxSizingReliable() || n) &&
              _.css(e, 'boxSizing', !1, i) === 'border-box';
            let s = r;
            let o = Ue(e, t, i);
            const a = `offset${t[0].toUpperCase()}${t.slice(1)}`;
            if (qe.test(o)) {
              if (!n) return o;
              o = 'auto';
            }
            return (
              ((!v.boxSizingReliable() && r) ||
                (!v.reliableTrDimensions() && A(e, 'tr')) ||
                o === 'auto' ||
                (!parseFloat(o) && _.css(e, 'display', !1, i) === 'inline')) &&
                e.getClientRects().length &&
                ((r = _.css(e, 'boxSizing', !1, i) === 'border-box'),
                (s = a in e) && (o = e[a])),
              `${
                (o = parseFloat(o) || 0) +
                tt(e, t, n || (r ? 'border' : 'content'), s, i, o)
              }px`
            );
          }
          function it(e, t, n, i, r) {
            return new it.prototype.init(e, t, n, i, r);
          }
          _.extend({
            cssHooks: {
              opacity: {
                get(e, t) {
                  if (t) {
                    const n = Ue(e, 'opacity');
                    return n === '' ? '1' : n;
                  }
                },
              },
            },
            cssNumber: {
              animationIterationCount: !0,
              columnCount: !0,
              fillOpacity: !0,
              flexGrow: !0,
              flexShrink: !0,
              fontWeight: !0,
              gridArea: !0,
              gridColumn: !0,
              gridColumnEnd: !0,
              gridColumnStart: !0,
              gridRow: !0,
              gridRowEnd: !0,
              gridRowStart: !0,
              lineHeight: !0,
              opacity: !0,
              order: !0,
              orphans: !0,
              widows: !0,
              zIndex: !0,
              zoom: !0,
            },
            cssProps: {},
            style(e, t, n, i) {
              if (e && e.nodeType !== 3 && e.nodeType !== 8 && e.style) {
                let r;
                let s;
                let o;
                const a = G(t);
                const u = Je.test(t);
                const l = e.style;
                if (
                  (u || (t = Ge(a)), (o = _.cssHooks[t] || _.cssHooks[a]), void 0 === n)
                )
                  return o && 'get' in o && void 0 !== (r = o.get(e, !1, i)) ? r : l[t];
                (s = typeof n) == 'string' &&
                  (r = re.exec(n)) &&
                  r[1] &&
                  ((n = ce(e, t, r)), (s = 'number')),
                  n != null &&
                    n == n &&
                    (s !== 'number' ||
                      u ||
                      (n += (r && r[3]) || (_.cssNumber[a] ? '' : 'px')),
                    v.clearCloneStyle ||
                      n !== '' ||
                      t.indexOf('background') !== 0 ||
                      (l[t] = 'inherit'),
                    (o && 'set' in o && void 0 === (n = o.set(e, n, i))) ||
                      (u ? l.setProperty(t, n) : (l[t] = n)));
              }
            },
            css(e, t, n, i) {
              let r;
              let s;
              let o;
              const a = G(t);
              return (
                Je.test(t) || (t = Ge(a)),
                (o = _.cssHooks[t] || _.cssHooks[a]) &&
                  'get' in o &&
                  (r = o.get(e, !0, n)),
                void 0 === r && (r = Ue(e, t, i)),
                r === 'normal' && t in Ze && (r = Ze[t]),
                n === '' || n
                  ? ((s = parseFloat(r)), !0 === n || isFinite(s) ? s || 0 : r)
                  : r
              );
            },
          }),
            _.each(['height', 'width'], function (e, t) {
              _.cssHooks[t] = {
                get(e, n, i) {
                  if (n)
                    return !Qe.test(_.css(e, 'display')) ||
                      (e.getClientRects().length && e.getBoundingClientRect().width)
                      ? nt(e, t, i)
                      : Be(e, Ke, function () {
                          return nt(e, t, i);
                        });
                },
                set(e, n, i) {
                  let r;
                  const s = Ie(e);
                  const o = !v.scrollboxSize() && s.position === 'absolute';
                  const a = (o || i) && _.css(e, 'boxSizing', !1, s) === 'border-box';
                  let u = i ? tt(e, t, i, a, s) : 0;
                  return (
                    a &&
                      o &&
                      (u -= Math.ceil(
                        e[`offset${t[0].toUpperCase()}${t.slice(1)}`] -
                          parseFloat(s[t]) -
                          tt(e, t, 'border', !1, s) -
                          0.5,
                      )),
                    u &&
                      (r = re.exec(n)) &&
                      (r[3] || 'px') !== 'px' &&
                      ((e.style[t] = n), (n = _.css(e, t))),
                    et(0, n, u)
                  );
                },
              };
            }),
            (_.cssHooks.marginLeft = $e(v.reliableMarginLeft, function (e, t) {
              if (t)
                return `${
                  parseFloat(Ue(e, 'marginLeft')) ||
                  e.getBoundingClientRect().left -
                    Be(e, { marginLeft: 0 }, function () {
                      return e.getBoundingClientRect().left;
                    })
                }px`;
            })),
            _.each({ margin: '', padding: '', border: 'Width' }, function (e, t) {
              (_.cssHooks[e + t] = {
                expand(n) {
                  for (
                    var i = 0, r = {}, s = typeof n === 'string' ? n.split(' ') : [n];
                    i < 4;
                    i++
                  )
                    r[e + se[i] + t] = s[i] || s[i - 2] || s[0];
                  return r;
                },
              }),
                e !== 'margin' && (_.cssHooks[e + t].set = et);
            }),
            _.fn.extend({
              css(e, t) {
                return $(
                  this,
                  function (e, t, n) {
                    let i;
                    let r;
                    const s = {};
                    let o = 0;
                    if (Array.isArray(t)) {
                      for (i = Ie(e), r = t.length; o < r; o++)
                        s[t[o]] = _.css(e, t[o], !1, i);
                      return s;
                    }
                    return void 0 !== n ? _.style(e, t, n) : _.css(e, t);
                  },
                  e,
                  t,
                  arguments.length > 1,
                );
              },
            }),
            (_.Tween = it),
            (it.prototype = {
              constructor: it,
              init(e, t, n, i, r, s) {
                (this.elem = e),
                  (this.prop = n),
                  (this.easing = r || _.easing._default),
                  (this.options = t),
                  (this.start = this.now = this.cur()),
                  (this.end = i),
                  (this.unit = s || (_.cssNumber[n] ? '' : 'px'));
              },
              cur() {
                const e = it.propHooks[this.prop];
                return e && e.get ? e.get(this) : it.propHooks._default.get(this);
              },
              run(e) {
                let t;
                const n = it.propHooks[this.prop];
                return (
                  this.options.duration
                    ? (this.pos = t =
                        _.easing[this.easing](
                          e,
                          this.options.duration * e,
                          0,
                          1,
                          this.options.duration,
                        ))
                    : (this.pos = t = e),
                  (this.now = (this.end - this.start) * t + this.start),
                  this.options.step && this.options.step.call(this.elem, this.now, this),
                  n && n.set ? n.set(this) : it.propHooks._default.set(this),
                  this
                );
              },
            }),
            (it.prototype.init.prototype = it.prototype),
            (it.propHooks = {
              _default: {
                get(e) {
                  let t;
                  return e.elem.nodeType !== 1 ||
                    (e.elem[e.prop] != null && e.elem.style[e.prop] == null)
                    ? e.elem[e.prop]
                    : (t = _.css(e.elem, e.prop, '')) && t !== 'auto'
                    ? t
                    : 0;
                },
                set(e) {
                  _.fx.step[e.prop]
                    ? _.fx.step[e.prop](e)
                    : e.elem.nodeType !== 1 ||
                      (!_.cssHooks[e.prop] && e.elem.style[Ge(e.prop)] == null)
                    ? (e.elem[e.prop] = e.now)
                    : _.style(e.elem, e.prop, e.now + e.unit);
                },
              },
            }),
            (it.propHooks.scrollTop = it.propHooks.scrollLeft =
              {
                set(e) {
                  e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
                },
              }),
            (_.easing = {
              linear(e) {
                return e;
              },
              swing(e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
              },
              _default: 'swing',
            }),
            (_.fx = it.prototype.init),
            (_.fx.step = {});
          let rt;
          let st;
          const ot = /^(?:toggle|show|hide)$/;
          const at = /queueHooks$/;
          function ut() {
            st &&
              (!1 === b.hidden && i.requestAnimationFrame
                ? i.requestAnimationFrame(ut)
                : i.setTimeout(ut, _.fx.interval),
              _.fx.tick());
          }
          function lt() {
            return (
              i.setTimeout(function () {
                rt = void 0;
              }),
              (rt = Date.now())
            );
          }
          function ct(e, t) {
            let n;
            let i = 0;
            const r = { height: e };
            for (t = t ? 1 : 0; i < 4; i += 2 - t)
              r[`margin${(n = se[i])}`] = r[`padding${n}`] = e;
            return t && (r.opacity = r.width = e), r;
          }
          function ft(e, t, n) {
            for (
              var i,
                r = (dt.tweeners[t] || []).concat(dt.tweeners['*']),
                s = 0,
                o = r.length;
              s < o;
              s++
            )
              if ((i = r[s].call(n, t, e))) return i;
          }
          function dt(e, t, n) {
            let i;
            let r;
            let s = 0;
            const o = dt.prefilters.length;
            const a = _.Deferred().always(function () {
              delete u.elem;
            });
            var u = function () {
              if (r) return !1;
              for (
                var t = rt || lt(),
                  n = Math.max(0, l.startTime + l.duration - t),
                  i = 1 - (n / l.duration || 0),
                  s = 0,
                  o = l.tweens.length;
                s < o;
                s++
              )
                l.tweens[s].run(i);
              return (
                a.notifyWith(e, [l, i, n]),
                i < 1 && o
                  ? n
                  : (o || a.notifyWith(e, [l, 1, 0]), a.resolveWith(e, [l]), !1)
              );
            };
            var l = a.promise({
              elem: e,
              props: _.extend({}, t),
              opts: _.extend(!0, { specialEasing: {}, easing: _.easing._default }, n),
              originalProperties: t,
              originalOptions: n,
              startTime: rt || lt(),
              duration: n.duration,
              tweens: [],
              createTween(t, n) {
                const i = _.Tween(
                  e,
                  l.opts,
                  t,
                  n,
                  l.opts.specialEasing[t] || l.opts.easing,
                );
                return l.tweens.push(i), i;
              },
              stop(t) {
                let n = 0;
                const i = t ? l.tweens.length : 0;
                if (r) return this;
                for (r = !0; n < i; n++) l.tweens[n].run(1);
                return (
                  t
                    ? (a.notifyWith(e, [l, 1, 0]), a.resolveWith(e, [l, t]))
                    : a.rejectWith(e, [l, t]),
                  this
                );
              },
            });
            const c = l.props;
            for (
              (function (e, t) {
                let n;
                let i;
                let r;
                let s;
                let o;
                for (n in e)
                  if (
                    ((r = t[(i = G(n))]),
                    (s = e[n]),
                    Array.isArray(s) && ((r = s[1]), (s = e[n] = s[0])),
                    n !== i && ((e[i] = s), delete e[n]),
                    (o = _.cssHooks[i]) && ('expand' in o))
                  )
                    for (n in ((s = o.expand(s)), delete e[i], s))
                      (n in e) || ((e[n] = s[n]), (t[n] = r));
                  else t[i] = r;
              })(c, l.opts.specialEasing);
              s < o;
              s++
            )
              if ((i = dt.prefilters[s].call(l, e, c, l.opts)))
                return (
                  g(i.stop) &&
                    (_._queueHooks(l.elem, l.opts.queue).stop = i.stop.bind(i)),
                  i
                );
            return (
              _.map(c, ft, l),
              g(l.opts.start) && l.opts.start.call(e, l),
              l
                .progress(l.opts.progress)
                .done(l.opts.done, l.opts.complete)
                .fail(l.opts.fail)
                .always(l.opts.always),
              _.fx.timer(_.extend(u, { elem: e, anim: l, queue: l.opts.queue })),
              l
            );
          }
          (_.Animation = _.extend(dt, {
            tweeners: {
              '*': [
                function (e, t) {
                  const n = this.createTween(e, t);
                  return ce(n.elem, e, re.exec(t), n), n;
                },
              ],
            },
            tweener(e, t) {
              g(e) ? ((t = e), (e = ['*'])) : (e = e.match(V));
              for (var n, i = 0, r = e.length; i < r; i++)
                (n = e[i]),
                  (dt.tweeners[n] = dt.tweeners[n] || []),
                  dt.tweeners[n].unshift(t);
            },
            prefilters: [
              function (e, t, n) {
                let i;
                let r;
                let s;
                let o;
                let a;
                let u;
                let l;
                let c;
                const f = 'width' in t || 'height' in t;
                const d = this;
                const h = {};
                const p = e.style;
                let m = e.nodeType && le(e);
                let v = K.get(e, 'fxshow');
                for (i in (n.queue ||
                  ((o = _._queueHooks(e, 'fx')).unqueued == null &&
                    ((o.unqueued = 0),
                    (a = o.empty.fire),
                    (o.empty.fire = function () {
                      o.unqueued || a();
                    })),
                  o.unqueued++,
                  d.always(function () {
                    d.always(function () {
                      o.unqueued--, _.queue(e, 'fx').length || o.empty.fire();
                    });
                  })),
                t))
                  if (((r = t[i]), ot.test(r))) {
                    if (
                      (delete t[i],
                      (s = s || r === 'toggle'),
                      r === (m ? 'hide' : 'show'))
                    ) {
                      if (r !== 'show' || !v || void 0 === v[i]) continue;
                      m = !0;
                    }
                    h[i] = (v && v[i]) || _.style(e, i);
                  }
                if ((u = !_.isEmptyObject(t)) || !_.isEmptyObject(h))
                  for (i in (f &&
                    e.nodeType === 1 &&
                    ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
                    (l = v && v.display) == null && (l = K.get(e, 'display')),
                    (c = _.css(e, 'display')) === 'none' &&
                      (l
                        ? (c = l)
                        : (he([e], !0),
                          (l = e.style.display || l),
                          (c = _.css(e, 'display')),
                          he([e]))),
                    (c === 'inline' || (c === 'inline-block' && l != null)) &&
                      _.css(e, 'float') === 'none' &&
                      (u ||
                        (d.done(function () {
                          p.display = l;
                        }),
                        l == null && ((c = p.display), (l = c === 'none' ? '' : c))),
                      (p.display = 'inline-block'))),
                  n.overflow &&
                    ((p.overflow = 'hidden'),
                    d.always(function () {
                      (p.overflow = n.overflow[0]),
                        (p.overflowX = n.overflow[1]),
                        (p.overflowY = n.overflow[2]);
                    })),
                  (u = !1),
                  h))
                    u ||
                      (v
                        ? 'hidden' in v && (m = v.hidden)
                        : (v = K.access(e, 'fxshow', { display: l })),
                      s && (v.hidden = !m),
                      m && he([e], !0),
                      d.done(function () {
                        for (i in (m || he([e]), K.remove(e, 'fxshow'), h))
                          _.style(e, i, h[i]);
                      })),
                      (u = ft(m ? v[i] : 0, i, d)),
                      i in v ||
                        ((v[i] = u.start), m && ((u.end = u.start), (u.start = 0)));
              },
            ],
            prefilter(e, t) {
              t ? dt.prefilters.unshift(e) : dt.prefilters.push(e);
            },
          })),
            (_.speed = function (e, t, n) {
              const i =
                e && typeof e === 'object'
                  ? _.extend({}, e)
                  : {
                      complete: n || (!n && t) || (g(e) && e),
                      duration: e,
                      easing: (n && t) || (t && !g(t) && t),
                    };
              return (
                _.fx.off
                  ? (i.duration = 0)
                  : typeof i.duration !== 'number' &&
                    (i.duration in _.fx.speeds
                      ? (i.duration = _.fx.speeds[i.duration])
                      : (i.duration = _.fx.speeds._default)),
                (i.queue != null && !0 !== i.queue) || (i.queue = 'fx'),
                (i.old = i.complete),
                (i.complete = function () {
                  g(i.old) && i.old.call(this), i.queue && _.dequeue(this, i.queue);
                }),
                i
              );
            }),
            _.fn.extend({
              fadeTo(e, t, n, i) {
                return this.filter(le)
                  .css('opacity', 0)
                  .show()
                  .end()
                  .animate({ opacity: t }, e, n, i);
              },
              animate(e, t, n, i) {
                const r = _.isEmptyObject(e);
                const s = _.speed(t, n, i);
                const o = function () {
                  const t = dt(this, _.extend({}, e), s);
                  (r || K.get(this, 'finish')) && t.stop(!0);
                };
                return (
                  (o.finish = o),
                  r || !1 === s.queue ? this.each(o) : this.queue(s.queue, o)
                );
              },
              stop(e, t, n) {
                const i = function (e) {
                  const t = e.stop;
                  delete e.stop, t(n);
                };
                return (
                  typeof e !== 'string' && ((n = t), (t = e), (e = void 0)),
                  t && this.queue(e || 'fx', []),
                  this.each(function () {
                    let t = !0;
                    let r = e != null && `${e}queueHooks`;
                    const s = _.timers;
                    const o = K.get(this);
                    if (r) o[r] && o[r].stop && i(o[r]);
                    else for (r in o) o[r] && o[r].stop && at.test(r) && i(o[r]);
                    for (r = s.length; r--; )
                      s[r].elem !== this ||
                        (e != null && s[r].queue !== e) ||
                        (s[r].anim.stop(n), (t = !1), s.splice(r, 1));
                    (!t && n) || _.dequeue(this, e);
                  })
                );
              },
              finish(e) {
                return (
                  !1 !== e && (e = e || 'fx'),
                  this.each(function () {
                    let t;
                    const n = K.get(this);
                    const i = n[`${e}queue`];
                    const r = n[`${e}queueHooks`];
                    const s = _.timers;
                    const o = i ? i.length : 0;
                    for (
                      n.finish = !0,
                        _.queue(this, e, []),
                        r && r.stop && r.stop.call(this, !0),
                        t = s.length;
                      t--;

                    )
                      s[t].elem === this &&
                        s[t].queue === e &&
                        (s[t].anim.stop(!0), s.splice(t, 1));
                    for (t = 0; t < o; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish;
                  })
                );
              },
            }),
            _.each(['toggle', 'show', 'hide'], function (e, t) {
              const n = _.fn[t];
              _.fn[t] = function (e, i, r) {
                return e == null || typeof e === 'boolean'
                  ? n.apply(this, arguments)
                  : this.animate(ct(t, !0), e, i, r);
              };
            }),
            _.each(
              {
                slideDown: ct('show'),
                slideUp: ct('hide'),
                slideToggle: ct('toggle'),
                fadeIn: { opacity: 'show' },
                fadeOut: { opacity: 'hide' },
                fadeToggle: { opacity: 'toggle' },
              },
              function (e, t) {
                _.fn[e] = function (e, n, i) {
                  return this.animate(t, e, n, i);
                };
              },
            ),
            (_.timers = []),
            (_.fx.tick = function () {
              let e;
              let t = 0;
              const n = _.timers;
              for (rt = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
              n.length || _.fx.stop(), (rt = void 0);
            }),
            (_.fx.timer = function (e) {
              _.timers.push(e), _.fx.start();
            }),
            (_.fx.interval = 13),
            (_.fx.start = function () {
              st || ((st = !0), ut());
            }),
            (_.fx.stop = function () {
              st = null;
            }),
            (_.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (_.fn.delay = function (e, t) {
              return (
                (e = (_.fx && _.fx.speeds[e]) || e),
                (t = t || 'fx'),
                this.queue(t, function (t, n) {
                  const r = i.setTimeout(t, e);
                  n.stop = function () {
                    i.clearTimeout(r);
                  };
                })
              );
            }),
            (function () {
              let e = b.createElement('input');
              const t = b.createElement('select').appendChild(b.createElement('option'));
              (e.type = 'checkbox'),
                (v.checkOn = e.value !== ''),
                (v.optSelected = t.selected),
                ((e = b.createElement('input')).value = 't'),
                (e.type = 'radio'),
                (v.radioValue = e.value === 't');
            })();
          let ht;
          const pt = _.expr.attrHandle;
          _.fn.extend({
            attr(e, t) {
              return $(this, _.attr, e, t, arguments.length > 1);
            },
            removeAttr(e) {
              return this.each(function () {
                _.removeAttr(this, e);
              });
            },
          }),
            _.extend({
              attr(e, t, n) {
                let i;
                let r;
                const s = e.nodeType;
                if (s !== 3 && s !== 8 && s !== 2)
                  return void 0 === e.getAttribute
                    ? _.prop(e, t, n)
                    : ((s === 1 && _.isXMLDoc(e)) ||
                        (r =
                          _.attrHooks[t.toLowerCase()] ||
                          (_.expr.match.bool.test(t) ? ht : void 0)),
                      void 0 !== n
                        ? n === null
                          ? void _.removeAttr(e, t)
                          : r && 'set' in r && void 0 !== (i = r.set(e, n, t))
                          ? i
                          : (e.setAttribute(t, `${n}`), n)
                        : r && 'get' in r && (i = r.get(e, t)) !== null
                        ? i
                        : (i = _.find.attr(e, t)) == null
                        ? void 0
                        : i);
              },
              attrHooks: {
                type: {
                  set(e, t) {
                    if (!v.radioValue && t === 'radio' && A(e, 'input')) {
                      const n = e.value;
                      return e.setAttribute('type', t), n && (e.value = n), t;
                    }
                  },
                },
              },
              removeAttr(e, t) {
                let n;
                let i = 0;
                const r = t && t.match(V);
                if (r && e.nodeType === 1) for (; (n = r[i++]); ) e.removeAttribute(n);
              },
            }),
            (ht = {
              set(e, t, n) {
                return !1 === t ? _.removeAttr(e, n) : e.setAttribute(n, n), n;
              },
            }),
            _.each(_.expr.match.bool.source.match(/\w+/g), function (e, t) {
              const n = pt[t] || _.find.attr;
              pt[t] = function (e, t, i) {
                let r;
                let s;
                const o = t.toLowerCase();
                return (
                  i ||
                    ((s = pt[o]),
                    (pt[o] = r),
                    (r = n(e, t, i) != null ? o : null),
                    (pt[o] = s)),
                  r
                );
              };
            });
          const mt = /^(?:input|select|textarea|button)$/i;
          const vt = /^(?:a|area)$/i;
          function gt(e) {
            return (e.match(V) || []).join(' ');
          }
          function yt(e) {
            return (e.getAttribute && e.getAttribute('class')) || '';
          }
          function bt(e) {
            return Array.isArray(e) ? e : (typeof e === 'string' && e.match(V)) || [];
          }
          _.fn.extend({
            prop(e, t) {
              return $(this, _.prop, e, t, arguments.length > 1);
            },
            removeProp(e) {
              return this.each(function () {
                delete this[_.propFix[e] || e];
              });
            },
          }),
            _.extend({
              prop(e, t, n) {
                let i;
                let r;
                const s = e.nodeType;
                if (s !== 3 && s !== 8 && s !== 2)
                  return (
                    (s === 1 && _.isXMLDoc(e)) ||
                      ((t = _.propFix[t] || t), (r = _.propHooks[t])),
                    void 0 !== n
                      ? r && 'set' in r && void 0 !== (i = r.set(e, n, t))
                        ? i
                        : (e[t] = n)
                      : r && 'get' in r && (i = r.get(e, t)) !== null
                      ? i
                      : e[t]
                  );
              },
              propHooks: {
                tabIndex: {
                  get(e) {
                    const t = _.find.attr(e, 'tabindex');
                    return t
                      ? parseInt(t, 10)
                      : mt.test(e.nodeName) || (vt.test(e.nodeName) && e.href)
                      ? 0
                      : -1;
                  },
                },
              },
              propFix: { for: 'htmlFor', class: 'className' },
            }),
            v.optSelected ||
              (_.propHooks.selected = {
                get(e) {
                  const t = e.parentNode;
                  return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set(e) {
                  const t = e.parentNode;
                  t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
                },
              }),
            _.each(
              [
                'tabIndex',
                'readOnly',
                'maxLength',
                'cellSpacing',
                'cellPadding',
                'rowSpan',
                'colSpan',
                'useMap',
                'frameBorder',
                'contentEditable',
              ],
              function () {
                _.propFix[this.toLowerCase()] = this;
              },
            ),
            _.fn.extend({
              addClass(e) {
                let t;
                let n;
                let i;
                let r;
                let s;
                let o;
                let a;
                let u = 0;
                if (g(e))
                  return this.each(function (t) {
                    _(this).addClass(e.call(this, t, yt(this)));
                  });
                if ((t = bt(e)).length)
                  for (; (n = this[u++]); )
                    if (((r = yt(n)), (i = n.nodeType === 1 && ` ${gt(r)} `))) {
                      for (o = 0; (s = t[o++]); )
                        i.indexOf(` ${s} `) < 0 && (i += `${s} `);
                      r !== (a = gt(i)) && n.setAttribute('class', a);
                    }
                return this;
              },
              removeClass(e) {
                let t;
                let n;
                let i;
                let r;
                let s;
                let o;
                let a;
                let u = 0;
                if (g(e))
                  return this.each(function (t) {
                    _(this).removeClass(e.call(this, t, yt(this)));
                  });
                if (!arguments.length) return this.attr('class', '');
                if ((t = bt(e)).length)
                  for (; (n = this[u++]); )
                    if (((r = yt(n)), (i = n.nodeType === 1 && ` ${gt(r)} `))) {
                      for (o = 0; (s = t[o++]); )
                        for (; i.indexOf(` ${s} `) > -1; ) i = i.replace(` ${s} `, ' ');
                      r !== (a = gt(i)) && n.setAttribute('class', a);
                    }
                return this;
              },
              toggleClass(e, t) {
                const n = typeof e;
                const i = n === 'string' || Array.isArray(e);
                return typeof t === 'boolean' && i
                  ? t
                    ? this.addClass(e)
                    : this.removeClass(e)
                  : g(e)
                  ? this.each(function (n) {
                      _(this).toggleClass(e.call(this, n, yt(this), t), t);
                    })
                  : this.each(function () {
                      let t;
                      let r;
                      let s;
                      let o;
                      if (i)
                        for (r = 0, s = _(this), o = bt(e); (t = o[r++]); )
                          s.hasClass(t) ? s.removeClass(t) : s.addClass(t);
                      else
                        (void 0 !== e && n !== 'boolean') ||
                          ((t = yt(this)) && K.set(this, '__className__', t),
                          this.setAttribute &&
                            this.setAttribute(
                              'class',
                              t || !1 === e ? '' : K.get(this, '__className__') || '',
                            ));
                    });
              },
              hasClass(e) {
                let t;
                let n;
                let i = 0;
                for (t = ` ${e} `; (n = this[i++]); )
                  if (n.nodeType === 1 && ` ${gt(yt(n))} `.indexOf(t) > -1) return !0;
                return !1;
              },
            });
          const Tt = /\r/g;
          _.fn.extend({
            val(e) {
              let t;
              let n;
              let i;
              const r = this[0];
              return arguments.length
                ? ((i = g(e)),
                  this.each(function (n) {
                    let r;
                    this.nodeType === 1 &&
                      ((r = i ? e.call(this, n, _(this).val()) : e) == null
                        ? (r = '')
                        : typeof r === 'number'
                        ? (r += '')
                        : Array.isArray(r) &&
                          (r = _.map(r, function (e) {
                            return e == null ? '' : `${e}`;
                          })),
                      ((t =
                        _.valHooks[this.type] ||
                        _.valHooks[this.nodeName.toLowerCase()]) &&
                        'set' in t &&
                        void 0 !== t.set(this, r, 'value')) ||
                        (this.value = r));
                  }))
                : r
                ? (t = _.valHooks[r.type] || _.valHooks[r.nodeName.toLowerCase()]) &&
                  'get' in t &&
                  void 0 !== (n = t.get(r, 'value'))
                  ? n
                  : typeof (n = r.value) === 'string'
                  ? n.replace(Tt, '')
                  : n == null
                  ? ''
                  : n
                : void 0;
            },
          }),
            _.extend({
              valHooks: {
                option: {
                  get(e) {
                    const t = _.find.attr(e, 'value');
                    return t != null ? t : gt(_.text(e));
                  },
                },
                select: {
                  get(e) {
                    let t;
                    let n;
                    let i;
                    const r = e.options;
                    const s = e.selectedIndex;
                    const o = e.type === 'select-one';
                    const a = o ? null : [];
                    const u = o ? s + 1 : r.length;
                    for (i = s < 0 ? u : o ? s : 0; i < u; i++)
                      if (
                        ((n = r[i]).selected || i === s) &&
                        !n.disabled &&
                        (!n.parentNode.disabled || !A(n.parentNode, 'optgroup'))
                      ) {
                        if (((t = _(n).val()), o)) return t;
                        a.push(t);
                      }
                    return a;
                  },
                  set(e, t) {
                    for (var n, i, r = e.options, s = _.makeArray(t), o = r.length; o--; )
                      ((i = r[o]).selected =
                        _.inArray(_.valHooks.option.get(i), s) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), s;
                  },
                },
              },
            }),
            _.each(['radio', 'checkbox'], function () {
              (_.valHooks[this] = {
                set(e, t) {
                  if (Array.isArray(t))
                    return (e.checked = _.inArray(_(e).val(), t) > -1);
                },
              }),
                v.checkOn ||
                  (_.valHooks[this].get = function (e) {
                    return e.getAttribute('value') === null ? 'on' : e.value;
                  });
            }),
            (v.focusin = 'onfocusin' in i);
          const xt = /^(?:focusinfocus|focusoutblur)$/;
          const wt = function (e) {
            e.stopPropagation();
          };
          _.extend(_.event, {
            trigger(e, t, n, r) {
              let s;
              let o;
              let a;
              let u;
              let l;
              let c;
              let f;
              let d;
              const p = [n || b];
              let m = h.call(e, 'type') ? e.type : e;
              let v = h.call(e, 'namespace') ? e.namespace.split('.') : [];
              if (
                ((o = d = a = n = n || b),
                n.nodeType !== 3 &&
                  n.nodeType !== 8 &&
                  !xt.test(m + _.event.triggered) &&
                  (m.indexOf('.') > -1 && ((v = m.split('.')), (m = v.shift()), v.sort()),
                  (l = m.indexOf(':') < 0 && `on${m}`),
                  ((e = e[_.expando]
                    ? e
                    : new _.Event(m, typeof e === 'object' && e)).isTrigger = r ? 2 : 3),
                  (e.namespace = v.join('.')),
                  (e.rnamespace = e.namespace
                    ? new RegExp(`(^|\\.)${v.join('\\.(?:.*\\.|)')}(\\.|$)`)
                    : null),
                  (e.result = void 0),
                  e.target || (e.target = n),
                  (t = t == null ? [e] : _.makeArray(t, [e])),
                  (f = _.event.special[m] || {}),
                  r || !f.trigger || !1 !== f.trigger.apply(n, t)))
              ) {
                if (!r && !f.noBubble && !y(n)) {
                  for (
                    u = f.delegateType || m, xt.test(u + m) || (o = o.parentNode);
                    o;
                    o = o.parentNode
                  )
                    p.push(o), (a = o);
                  a === (n.ownerDocument || b) &&
                    p.push(a.defaultView || a.parentWindow || i);
                }
                for (s = 0; (o = p[s++]) && !e.isPropagationStopped(); )
                  (d = o),
                    (e.type = s > 1 ? u : f.bindType || m),
                    (c =
                      (K.get(o, 'events') || Object.create(null))[e.type] &&
                      K.get(o, 'handle')) && c.apply(o, t),
                    (c = l && o[l]) &&
                      c.apply &&
                      Q(o) &&
                      ((e.result = c.apply(o, t)), !1 === e.result && e.preventDefault());
                return (
                  (e.type = m),
                  r ||
                    e.isDefaultPrevented() ||
                    (f._default && !1 !== f._default.apply(p.pop(), t)) ||
                    !Q(n) ||
                    (l &&
                      g(n[m]) &&
                      !y(n) &&
                      ((a = n[l]) && (n[l] = null),
                      (_.event.triggered = m),
                      e.isPropagationStopped() && d.addEventListener(m, wt),
                      n[m](),
                      e.isPropagationStopped() && d.removeEventListener(m, wt),
                      (_.event.triggered = void 0),
                      a && (n[l] = a))),
                  e.result
                );
              }
            },
            simulate(e, t, n) {
              const i = _.extend(new _.Event(), n, { type: e, isSimulated: !0 });
              _.event.trigger(i, null, t);
            },
          }),
            _.fn.extend({
              trigger(e, t) {
                return this.each(function () {
                  _.event.trigger(e, t, this);
                });
              },
              triggerHandler(e, t) {
                const n = this[0];
                if (n) return _.event.trigger(e, t, n, !0);
              },
            }),
            v.focusin ||
              _.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
                const n = function (e) {
                  _.event.simulate(t, e.target, _.event.fix(e));
                };
                _.event.special[t] = {
                  setup() {
                    const i = this.ownerDocument || this.document || this;
                    const r = K.access(i, t);
                    r || i.addEventListener(e, n, !0), K.access(i, t, (r || 0) + 1);
                  },
                  teardown() {
                    const i = this.ownerDocument || this.document || this;
                    const r = K.access(i, t) - 1;
                    r
                      ? K.access(i, t, r)
                      : (i.removeEventListener(e, n, !0), K.remove(i, t));
                  },
                };
              });
          const St = i.location;
          const _t = { guid: Date.now() };
          const Ct = /\?/;
          _.parseXML = function (e) {
            let t;
            let n;
            if (!e || typeof e !== 'string') return null;
            try {
              t = new i.DOMParser().parseFromString(e, 'text/xml');
            } catch (e) {}
            return (
              (n = t && t.getElementsByTagName('parsererror')[0]),
              (t && !n) ||
                _.error(
                  `Invalid XML: ${
                    n
                      ? _.map(n.childNodes, function (e) {
                          return e.textContent;
                        }).join('\n')
                      : e
                  }`,
                ),
              t
            );
          };
          const Et = /\[\]$/;
          const Dt = /\r?\n/g;
          const Mt = /^(?:submit|button|image|reset|file)$/i;
          const Ot = /^(?:input|select|textarea|keygen)/i;
          function At(e, t, n, i) {
            let r;
            if (Array.isArray(t))
              _.each(t, function (t, r) {
                n || Et.test(e)
                  ? i(e, r)
                  : At(`${e}[${typeof r === 'object' && r != null ? t : ''}]`, r, n, i);
              });
            else if (n || w(t) !== 'object') i(e, t);
            else for (r in t) At(`${e}[${r}]`, t[r], n, i);
          }
          (_.param = function (e, t) {
            let n;
            const i = [];
            const r = function (e, t) {
              const n = g(t) ? t() : t;
              i[i.length] = `${encodeURIComponent(e)}=${encodeURIComponent(
                n == null ? '' : n,
              )}`;
            };
            if (e == null) return '';
            if (Array.isArray(e) || (e.jquery && !_.isPlainObject(e)))
              _.each(e, function () {
                r(this.name, this.value);
              });
            else for (n in e) At(n, e[n], t, r);
            return i.join('&');
          }),
            _.fn.extend({
              serialize() {
                return _.param(this.serializeArray());
              },
              serializeArray() {
                return this.map(function () {
                  const e = _.prop(this, 'elements');
                  return e ? _.makeArray(e) : this;
                })
                  .filter(function () {
                    const e = this.type;
                    return (
                      this.name &&
                      !_(this).is(':disabled') &&
                      Ot.test(this.nodeName) &&
                      !Mt.test(e) &&
                      (this.checked || !ve.test(e))
                    );
                  })
                  .map(function (e, t) {
                    const n = _(this).val();
                    return n == null
                      ? null
                      : Array.isArray(n)
                      ? _.map(n, function (e) {
                          return { name: t.name, value: e.replace(Dt, '\r\n') };
                        })
                      : { name: t.name, value: n.replace(Dt, '\r\n') };
                  })
                  .get();
              },
            });
          const kt = /%20/g;
          const Nt = /#.*$/;
          const Ft = /([?&])_=[^&]*/;
          const jt = /^(.*?):[ \t]*([^\r\n]*)$/gm;
          const Lt = /^(?:GET|HEAD)$/;
          const Pt = /^\/\//;
          const Rt = {};
          const Vt = {};
          const Ht = '*/'.concat('*');
          const qt = b.createElement('a');
          function It(e) {
            return function (t, n) {
              typeof t !== 'string' && ((n = t), (t = '*'));
              let i;
              let r = 0;
              const s = t.toLowerCase().match(V) || [];
              if (g(n))
                for (; (i = s[r++]); )
                  i[0] === '+'
                    ? ((i = i.slice(1) || '*'), (e[i] = e[i] || []).unshift(n))
                    : (e[i] = e[i] || []).push(n);
            };
          }
          function Bt(e, t, n, i) {
            const r = {};
            const s = e === Vt;
            function o(a) {
              let u;
              return (
                (r[a] = !0),
                _.each(e[a] || [], function (e, a) {
                  const l = a(t, n, i);
                  return typeof l !== 'string' || s || r[l]
                    ? s
                      ? !(u = l)
                      : void 0
                    : (t.dataTypes.unshift(l), o(l), !1);
                }),
                u
              );
            }
            return o(t.dataTypes[0]) || (!r['*'] && o('*'));
          }
          function zt(e, t) {
            let n;
            let i;
            const r = _.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
            return i && _.extend(!0, e, i), e;
          }
          (qt.href = St.href),
            _.extend({
              active: 0,
              lastModified: {},
              etag: {},
              ajaxSettings: {
                url: St.href,
                type: 'GET',
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                  St.protocol,
                ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                accepts: {
                  '*': Ht,
                  text: 'text/plain',
                  html: 'text/html',
                  xml: 'application/xml, text/xml',
                  json: 'application/json, text/javascript',
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: {
                  xml: 'responseXML',
                  text: 'responseText',
                  json: 'responseJSON',
                },
                converters: {
                  '* text': String,
                  'text html': !0,
                  'text json': JSON.parse,
                  'text xml': _.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
              },
              ajaxSetup(e, t) {
                return t ? zt(zt(e, _.ajaxSettings), t) : zt(_.ajaxSettings, e);
              },
              ajaxPrefilter: It(Rt),
              ajaxTransport: It(Vt),
              ajax(e, t) {
                typeof e === 'object' && ((t = e), (e = void 0)), (t = t || {});
                let n;
                let r;
                let s;
                let o;
                let a;
                let u;
                let l;
                let c;
                let f;
                let d;
                const h = _.ajaxSetup({}, t);
                const p = h.context || h;
                const m = h.context && (p.nodeType || p.jquery) ? _(p) : _.event;
                const v = _.Deferred();
                const g = _.Callbacks('once memory');
                let y = h.statusCode || {};
                const T = {};
                const x = {};
                let w = 'canceled';
                var S = {
                  readyState: 0,
                  getResponseHeader(e) {
                    let t;
                    if (l) {
                      if (!o)
                        for (o = {}; (t = jt.exec(s)); )
                          o[`${t[1].toLowerCase()} `] = (
                            o[`${t[1].toLowerCase()} `] || []
                          ).concat(t[2]);
                      t = o[`${e.toLowerCase()} `];
                    }
                    return t == null ? null : t.join(', ');
                  },
                  getAllResponseHeaders() {
                    return l ? s : null;
                  },
                  setRequestHeader(e, t) {
                    return (
                      l == null &&
                        ((e = x[e.toLowerCase()] = x[e.toLowerCase()] || e), (T[e] = t)),
                      this
                    );
                  },
                  overrideMimeType(e) {
                    return l == null && (h.mimeType = e), this;
                  },
                  statusCode(e) {
                    let t;
                    if (e)
                      if (l) S.always(e[S.status]);
                      else for (t in e) y[t] = [y[t], e[t]];
                    return this;
                  },
                  abort(e) {
                    const t = e || w;
                    return n && n.abort(t), C(0, t), this;
                  },
                };
                if (
                  (v.promise(S),
                  (h.url = `${e || h.url || St.href}`.replace(Pt, `${St.protocol}//`)),
                  (h.type = t.method || t.type || h.method || h.type),
                  (h.dataTypes = (h.dataType || '*').toLowerCase().match(V) || ['']),
                  h.crossDomain == null)
                ) {
                  u = b.createElement('a');
                  try {
                    (u.href = h.url),
                      (u.href = u.href),
                      (h.crossDomain =
                        `${qt.protocol}//${qt.host}` != `${u.protocol}//${u.host}`);
                  } catch (e) {
                    h.crossDomain = !0;
                  }
                }
                if (
                  (h.data &&
                    h.processData &&
                    typeof h.data !== 'string' &&
                    (h.data = _.param(h.data, h.traditional)),
                  Bt(Rt, h, t, S),
                  l)
                )
                  return S;
                for (f in ((c = _.event && h.global) &&
                  _.active++ == 0 &&
                  _.event.trigger('ajaxStart'),
                (h.type = h.type.toUpperCase()),
                (h.hasContent = !Lt.test(h.type)),
                (r = h.url.replace(Nt, '')),
                h.hasContent
                  ? h.data &&
                    h.processData &&
                    (h.contentType || '').indexOf('application/x-www-form-urlencoded') ===
                      0 &&
                    (h.data = h.data.replace(kt, '+'))
                  : ((d = h.url.slice(r.length)),
                    h.data &&
                      (h.processData || typeof h.data === 'string') &&
                      ((r += (Ct.test(r) ? '&' : '?') + h.data), delete h.data),
                    !1 === h.cache &&
                      ((r = r.replace(Ft, '$1')),
                      (d = `${Ct.test(r) ? '&' : '?'}_=${_t.guid++}${d}`)),
                    (h.url = r + d)),
                h.ifModified &&
                  (_.lastModified[r] &&
                    S.setRequestHeader('If-Modified-Since', _.lastModified[r]),
                  _.etag[r] && S.setRequestHeader('If-None-Match', _.etag[r])),
                ((h.data && h.hasContent && !1 !== h.contentType) || t.contentType) &&
                  S.setRequestHeader('Content-Type', h.contentType),
                S.setRequestHeader(
                  'Accept',
                  h.dataTypes[0] && h.accepts[h.dataTypes[0]]
                    ? h.accepts[h.dataTypes[0]] +
                        (h.dataTypes[0] !== '*' ? `, ${Ht}; q=0.01` : '')
                    : h.accepts['*'],
                ),
                h.headers))
                  S.setRequestHeader(f, h.headers[f]);
                if (h.beforeSend && (!1 === h.beforeSend.call(p, S, h) || l))
                  return S.abort();
                if (
                  ((w = 'abort'),
                  g.add(h.complete),
                  S.done(h.success),
                  S.fail(h.error),
                  (n = Bt(Vt, h, t, S)))
                ) {
                  if (((S.readyState = 1), c && m.trigger('ajaxSend', [S, h]), l))
                    return S;
                  h.async &&
                    h.timeout > 0 &&
                    (a = i.setTimeout(function () {
                      S.abort('timeout');
                    }, h.timeout));
                  try {
                    (l = !1), n.send(T, C);
                  } catch (e) {
                    if (l) throw e;
                    C(-1, e);
                  }
                } else C(-1, 'No Transport');
                function C(e, t, o, u) {
                  let f;
                  let d;
                  let b;
                  let T;
                  let x;
                  let w = t;
                  l ||
                    ((l = !0),
                    a && i.clearTimeout(a),
                    (n = void 0),
                    (s = u || ''),
                    (S.readyState = e > 0 ? 4 : 0),
                    (f = (e >= 200 && e < 300) || e === 304),
                    o &&
                      (T = (function (e, t, n) {
                        for (
                          var i, r, s, o, a = e.contents, u = e.dataTypes;
                          u[0] === '*';

                        )
                          u.shift(),
                            void 0 === i &&
                              (i = e.mimeType || t.getResponseHeader('Content-Type'));
                        if (i)
                          for (r in a)
                            if (a[r] && a[r].test(i)) {
                              u.unshift(r);
                              break;
                            }
                        if (u[0] in n) s = u[0];
                        else {
                          for (r in n) {
                            if (!u[0] || e.converters[`${r} ${u[0]}`]) {
                              s = r;
                              break;
                            }
                            o || (o = r);
                          }
                          s = s || o;
                        }
                        if (s) return s !== u[0] && u.unshift(s), n[s];
                      })(h, S, o)),
                    !f &&
                      _.inArray('script', h.dataTypes) > -1 &&
                      _.inArray('json', h.dataTypes) < 0 &&
                      (h.converters['text script'] = function () {}),
                    (T = (function (e, t, n, i) {
                      let r;
                      let s;
                      let o;
                      let a;
                      let u;
                      const l = {};
                      const c = e.dataTypes.slice();
                      if (c[1])
                        for (o in e.converters) l[o.toLowerCase()] = e.converters[o];
                      for (s = c.shift(); s; )
                        if (
                          (e.responseFields[s] && (n[e.responseFields[s]] = t),
                          !u && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                          (u = s),
                          (s = c.shift()))
                        )
                          if (s === '*') s = u;
                          else if (u !== '*' && u !== s) {
                            if (!(o = l[`${u} ${s}`] || l[`* ${s}`]))
                              for (r in l)
                                if (
                                  (a = r.split(' '))[1] === s &&
                                  (o = l[`${u} ${a[0]}`] || l[`* ${a[0]}`])
                                ) {
                                  !0 === o
                                    ? (o = l[r])
                                    : !0 !== l[r] && ((s = a[0]), c.unshift(a[1]));
                                  break;
                                }
                            if (!0 !== o)
                              if (o && e.throws) t = o(t);
                              else
                                try {
                                  t = o(t);
                                } catch (e) {
                                  return {
                                    state: 'parsererror',
                                    error: o ? e : `No conversion from ${u} to ${s}`,
                                  };
                                }
                          }
                      return { state: 'success', data: t };
                    })(h, T, S, f)),
                    f
                      ? (h.ifModified &&
                          ((x = S.getResponseHeader('Last-Modified')) &&
                            (_.lastModified[r] = x),
                          (x = S.getResponseHeader('etag')) && (_.etag[r] = x)),
                        e === 204 || h.type === 'HEAD'
                          ? (w = 'nocontent')
                          : e === 304
                          ? (w = 'notmodified')
                          : ((w = T.state), (d = T.data), (f = !(b = T.error))))
                      : ((b = w), (!e && w) || ((w = 'error'), e < 0 && (e = 0))),
                    (S.status = e),
                    (S.statusText = `${t || w}`),
                    f ? v.resolveWith(p, [d, w, S]) : v.rejectWith(p, [S, w, b]),
                    S.statusCode(y),
                    (y = void 0),
                    c && m.trigger(f ? 'ajaxSuccess' : 'ajaxError', [S, h, f ? d : b]),
                    g.fireWith(p, [S, w]),
                    c &&
                      (m.trigger('ajaxComplete', [S, h]),
                      --_.active || _.event.trigger('ajaxStop')));
                }
                return S;
              },
              getJSON(e, t, n) {
                return _.get(e, t, n, 'json');
              },
              getScript(e, t) {
                return _.get(e, void 0, t, 'script');
              },
            }),
            _.each(['get', 'post'], function (e, t) {
              _[t] = function (e, n, i, r) {
                return (
                  g(n) && ((r = r || i), (i = n), (n = void 0)),
                  _.ajax(
                    _.extend(
                      { url: e, type: t, dataType: r, data: n, success: i },
                      _.isPlainObject(e) && e,
                    ),
                  )
                );
              };
            }),
            _.ajaxPrefilter(function (e) {
              let t;
              for (t in e.headers)
                t.toLowerCase() === 'content-type' &&
                  (e.contentType = e.headers[t] || '');
            }),
            (_._evalUrl = function (e, t, n) {
              return _.ajax({
                url: e,
                type: 'GET',
                dataType: 'script',
                cache: !0,
                async: !1,
                global: !1,
                converters: { 'text script': function () {} },
                dataFilter(e) {
                  _.globalEval(e, t, n);
                },
              });
            }),
            _.fn.extend({
              wrapAll(e) {
                let t;
                return (
                  this[0] &&
                    (g(e) && (e = e.call(this[0])),
                    (t = _(e, this[0].ownerDocument).eq(0).clone(!0)),
                    this[0].parentNode && t.insertBefore(this[0]),
                    t
                      .map(function () {
                        for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                        return e;
                      })
                      .append(this)),
                  this
                );
              },
              wrapInner(e) {
                return g(e)
                  ? this.each(function (t) {
                      _(this).wrapInner(e.call(this, t));
                    })
                  : this.each(function () {
                      const t = _(this);
                      const n = t.contents();
                      n.length ? n.wrapAll(e) : t.append(e);
                    });
              },
              wrap(e) {
                const t = g(e);
                return this.each(function (n) {
                  _(this).wrapAll(t ? e.call(this, n) : e);
                });
              },
              unwrap(e) {
                return (
                  this.parent(e)
                    .not('body')
                    .each(function () {
                      _(this).replaceWith(this.childNodes);
                    }),
                  this
                );
              },
            }),
            (_.expr.pseudos.hidden = function (e) {
              return !_.expr.pseudos.visible(e);
            }),
            (_.expr.pseudos.visible = function (e) {
              return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
            }),
            (_.ajaxSettings.xhr = function () {
              try {
                return new i.XMLHttpRequest();
              } catch (e) {}
            });
          const Ut = { 0: 200, 1223: 204 };
          let $t = _.ajaxSettings.xhr();
          (v.cors = !!$t && 'withCredentials' in $t),
            (v.ajax = $t = !!$t),
            _.ajaxTransport(function (e) {
              let t;
              let n;
              if (v.cors || ($t && !e.crossDomain))
                return {
                  send(r, s) {
                    let o;
                    const a = e.xhr();
                    if (
                      (a.open(e.type, e.url, e.async, e.username, e.password),
                      e.xhrFields)
                    )
                      for (o in e.xhrFields) a[o] = e.xhrFields[o];
                    for (o in (e.mimeType &&
                      a.overrideMimeType &&
                      a.overrideMimeType(e.mimeType),
                    e.crossDomain ||
                      r['X-Requested-With'] ||
                      (r['X-Requested-With'] = 'XMLHttpRequest'),
                    r))
                      a.setRequestHeader(o, r[o]);
                    (t = function (e) {
                      return function () {
                        t &&
                          ((t =
                            n =
                            a.onload =
                            a.onerror =
                            a.onabort =
                            a.ontimeout =
                            a.onreadystatechange =
                              null),
                          e === 'abort'
                            ? a.abort()
                            : e === 'error'
                            ? typeof a.status !== 'number'
                              ? s(0, 'error')
                              : s(a.status, a.statusText)
                            : s(
                                Ut[a.status] || a.status,
                                a.statusText,
                                (a.responseType || 'text') !== 'text' ||
                                  typeof a.responseText !== 'string'
                                  ? { binary: a.response }
                                  : { text: a.responseText },
                                a.getAllResponseHeaders(),
                              ));
                      };
                    }),
                      (a.onload = t()),
                      (n = a.onerror = a.ontimeout = t('error')),
                      void 0 !== a.onabort
                        ? (a.onabort = n)
                        : (a.onreadystatechange = function () {
                            a.readyState === 4 &&
                              i.setTimeout(function () {
                                t && n();
                              });
                          }),
                      (t = t('abort'));
                    try {
                      a.send((e.hasContent && e.data) || null);
                    } catch (e) {
                      if (t) throw e;
                    }
                  },
                  abort() {
                    t && t();
                  },
                };
            }),
            _.ajaxPrefilter(function (e) {
              e.crossDomain && (e.contents.script = !1);
            }),
            _.ajaxSetup({
              accepts: {
                script:
                  'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
              },
              contents: { script: /\b(?:java|ecma)script\b/ },
              converters: {
                'text script': function (e) {
                  return _.globalEval(e), e;
                },
              },
            }),
            _.ajaxPrefilter('script', function (e) {
              void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = 'GET');
            }),
            _.ajaxTransport('script', function (e) {
              let t;
              let n;
              if (e.crossDomain || e.scriptAttrs)
                return {
                  send(i, r) {
                    (t = _('<script>')
                      .attr(e.scriptAttrs || {})
                      .prop({ charset: e.scriptCharset, src: e.url })
                      .on(
                        'load error',
                        (n = function (e) {
                          t.remove(),
                            (n = null),
                            e && r(e.type === 'error' ? 404 : 200, e.type);
                        }),
                      )),
                      b.head.appendChild(t[0]);
                  },
                  abort() {
                    n && n();
                  },
                };
            });
          let Wt;
          const Xt = [];
          const Yt = /(=)\?(?=&|$)|\?\?/;
          _.ajaxSetup({
            jsonp: 'callback',
            jsonpCallback() {
              const e = Xt.pop() || `${_.expando}_${_t.guid++}`;
              return (this[e] = !0), e;
            },
          }),
            _.ajaxPrefilter('json jsonp', function (e, t, n) {
              let r;
              let s;
              let o;
              const a =
                !1 !== e.jsonp &&
                (Yt.test(e.url)
                  ? 'url'
                  : typeof e.data === 'string' &&
                    (e.contentType || '').indexOf('application/x-www-form-urlencoded') ===
                      0 &&
                    Yt.test(e.data) &&
                    'data');
              if (a || e.dataTypes[0] === 'jsonp')
                return (
                  (r = e.jsonpCallback =
                    g(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                  a
                    ? (e[a] = e[a].replace(Yt, `$1${r}`))
                    : !1 !== e.jsonp &&
                      (e.url += `${(Ct.test(e.url) ? '&' : '?') + e.jsonp}=${r}`),
                  (e.converters['script json'] = function () {
                    return o || _.error(`${r} was not called`), o[0];
                  }),
                  (e.dataTypes[0] = 'json'),
                  (s = i[r]),
                  (i[r] = function () {
                    o = arguments;
                  }),
                  n.always(function () {
                    void 0 === s ? _(i).removeProp(r) : (i[r] = s),
                      e[r] && ((e.jsonpCallback = t.jsonpCallback), Xt.push(r)),
                      o && g(s) && s(o[0]),
                      (o = s = void 0);
                  }),
                  'script'
                );
            }),
            (v.createHTMLDocument =
              (((Wt = b.implementation.createHTMLDocument('').body).innerHTML =
                '<form></form><form></form>'),
              Wt.childNodes.length === 2)),
            (_.parseHTML = function (e, t, n) {
              return typeof e !== 'string'
                ? []
                : (typeof t === 'boolean' && ((n = t), (t = !1)),
                  t ||
                    (v.createHTMLDocument
                      ? (((i = (t =
                          b.implementation.createHTMLDocument('')).createElement(
                          'base',
                        )).href = b.location.href),
                        t.head.appendChild(i))
                      : (t = b)),
                  (s = !n && []),
                  (r = k.exec(e))
                    ? [t.createElement(r[1])]
                    : ((r = Se([e], t, s)),
                      s && s.length && _(s).remove(),
                      _.merge([], r.childNodes)));
              let i;
              let r;
              let s;
            }),
            (_.fn.load = function (e, t, n) {
              let i;
              let r;
              let s;
              const o = this;
              const a = e.indexOf(' ');
              return (
                a > -1 && ((i = gt(e.slice(a))), (e = e.slice(0, a))),
                g(t)
                  ? ((n = t), (t = void 0))
                  : t && typeof t === 'object' && (r = 'POST'),
                o.length > 0 &&
                  _.ajax({ url: e, type: r || 'GET', dataType: 'html', data: t })
                    .done(function (e) {
                      (s = arguments),
                        o.html(i ? _('<div>').append(_.parseHTML(e)).find(i) : e);
                    })
                    .always(
                      n &&
                        function (e, t) {
                          o.each(function () {
                            n.apply(this, s || [e.responseText, t, e]);
                          });
                        },
                    ),
                this
              );
            }),
            (_.expr.pseudos.animated = function (e) {
              return _.grep(_.timers, function (t) {
                return e === t.elem;
              }).length;
            }),
            (_.offset = {
              setOffset(e, t, n) {
                let i;
                let r;
                let s;
                let o;
                let a;
                let u;
                const l = _.css(e, 'position');
                const c = _(e);
                const f = {};
                l === 'static' && (e.style.position = 'relative'),
                  (a = c.offset()),
                  (s = _.css(e, 'top')),
                  (u = _.css(e, 'left')),
                  (l === 'absolute' || l === 'fixed') && (s + u).indexOf('auto') > -1
                    ? ((o = (i = c.position()).top), (r = i.left))
                    : ((o = parseFloat(s) || 0), (r = parseFloat(u) || 0)),
                  g(t) && (t = t.call(e, n, _.extend({}, a))),
                  t.top != null && (f.top = t.top - a.top + o),
                  t.left != null && (f.left = t.left - a.left + r),
                  'using' in t ? t.using.call(e, f) : c.css(f);
              },
            }),
            _.fn.extend({
              offset(e) {
                if (arguments.length)
                  return void 0 === e
                    ? this
                    : this.each(function (t) {
                        _.offset.setOffset(this, e, t);
                      });
                let t;
                let n;
                const i = this[0];
                return i
                  ? i.getClientRects().length
                    ? ((t = i.getBoundingClientRect()),
                      (n = i.ownerDocument.defaultView),
                      { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
                    : { top: 0, left: 0 }
                  : void 0;
              },
              position() {
                if (this[0]) {
                  let e;
                  let t;
                  let n;
                  const i = this[0];
                  let r = { top: 0, left: 0 };
                  if (_.css(i, 'position') === 'fixed') t = i.getBoundingClientRect();
                  else {
                    for (
                      t = this.offset(),
                        n = i.ownerDocument,
                        e = i.offsetParent || n.documentElement;
                      e &&
                      (e === n.body || e === n.documentElement) &&
                      _.css(e, 'position') === 'static';

                    )
                      e = e.parentNode;
                    e &&
                      e !== i &&
                      e.nodeType === 1 &&
                      (((r = _(e).offset()).top += _.css(e, 'borderTopWidth', !0)),
                      (r.left += _.css(e, 'borderLeftWidth', !0)));
                  }
                  return {
                    top: t.top - r.top - _.css(i, 'marginTop', !0),
                    left: t.left - r.left - _.css(i, 'marginLeft', !0),
                  };
                }
              },
              offsetParent() {
                return this.map(function () {
                  for (
                    var e = this.offsetParent;
                    e && _.css(e, 'position') === 'static';

                  )
                    e = e.offsetParent;
                  return e || oe;
                });
              },
            }),
            _.each(
              { scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
              function (e, t) {
                const n = t === 'pageYOffset';
                _.fn[e] = function (i) {
                  return $(
                    this,
                    function (e, i, r) {
                      let s;
                      if (
                        (y(e) ? (s = e) : e.nodeType === 9 && (s = e.defaultView),
                        void 0 === r)
                      )
                        return s ? s[t] : e[i];
                      s
                        ? s.scrollTo(n ? s.pageXOffset : r, n ? r : s.pageYOffset)
                        : (e[i] = r);
                    },
                    e,
                    i,
                    arguments.length,
                  );
                };
              },
            ),
            _.each(['top', 'left'], function (e, t) {
              _.cssHooks[t] = $e(v.pixelPosition, function (e, n) {
                if (n) return (n = Ue(e, t)), qe.test(n) ? `${_(e).position()[t]}px` : n;
              });
            }),
            _.each({ Height: 'height', Width: 'width' }, function (e, t) {
              _.each(
                { padding: `inner${e}`, content: t, '': `outer${e}` },
                function (n, i) {
                  _.fn[i] = function (r, s) {
                    const o = arguments.length && (n || typeof r !== 'boolean');
                    const a = n || (!0 === r || !0 === s ? 'margin' : 'border');
                    return $(
                      this,
                      function (t, n, r) {
                        let s;
                        return y(t)
                          ? i.indexOf('outer') === 0
                            ? t[`inner${e}`]
                            : t.document.documentElement[`client${e}`]
                          : t.nodeType === 9
                          ? ((s = t.documentElement),
                            Math.max(
                              t.body[`scroll${e}`],
                              s[`scroll${e}`],
                              t.body[`offset${e}`],
                              s[`offset${e}`],
                              s[`client${e}`],
                            ))
                          : void 0 === r
                          ? _.css(t, n, a)
                          : _.style(t, n, r, a);
                      },
                      t,
                      o ? r : void 0,
                      o,
                    );
                  };
                },
              );
            }),
            _.each(
              [
                'ajaxStart',
                'ajaxStop',
                'ajaxComplete',
                'ajaxError',
                'ajaxSuccess',
                'ajaxSend',
              ],
              function (e, t) {
                _.fn[t] = function (e) {
                  return this.on(t, e);
                };
              },
            ),
            _.fn.extend({
              bind(e, t, n) {
                return this.on(e, null, t, n);
              },
              unbind(e, t) {
                return this.off(e, null, t);
              },
              delegate(e, t, n, i) {
                return this.on(t, e, n, i);
              },
              undelegate(e, t, n) {
                return arguments.length === 1
                  ? this.off(e, '**')
                  : this.off(t, e || '**', n);
              },
              hover(e, t) {
                return this.mouseenter(e).mouseleave(t || e);
              },
            }),
            _.each(
              'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
                ' ',
              ),
              function (e, t) {
                _.fn[t] = function (e, n) {
                  return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
                };
              },
            );
          const Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
          (_.proxy = function (e, t) {
            let n;
            let i;
            let r;
            if ((typeof t === 'string' && ((n = e[t]), (t = e), (e = n)), g(e)))
              return (
                (i = a.call(arguments, 2)),
                (r = function () {
                  return e.apply(t || this, i.concat(a.call(arguments)));
                }),
                (r.guid = e.guid = e.guid || _.guid++),
                r
              );
          }),
            (_.holdReady = function (e) {
              e ? _.readyWait++ : _.ready(!0);
            }),
            (_.isArray = Array.isArray),
            (_.parseJSON = JSON.parse),
            (_.nodeName = A),
            (_.isFunction = g),
            (_.isWindow = y),
            (_.camelCase = G),
            (_.type = w),
            (_.now = Date.now),
            (_.isNumeric = function (e) {
              const t = _.type(e);
              return (t === 'number' || t === 'string') && !isNaN(e - parseFloat(e));
            }),
            (_.trim = function (e) {
              return e == null ? '' : `${e}`.replace(Gt, '');
            }),
            void 0 ===
              (n = function () {
                return _;
              }.apply(t, [])) || (e.exports = n);
          const Qt = i.jQuery;
          const Jt = i.$;
          return (
            (_.noConflict = function (e) {
              return i.$ === _ && (i.$ = Jt), e && i.jQuery === _ && (i.jQuery = Qt), _;
            }),
            void 0 === r && (i.jQuery = i.$ = _),
            _
          );
        });
      },
      4829(e, t, n) {
        const i =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, '__esModule', { value: !0 });
        const r = i(n(4524));
        const s = n(3502);
        const o = i(n(225));
        const a = i(n(3541));
        const u = n(3553);
        class l extends r.default {
          constructor(e, t) {
            super(),
              (this.DOMroot = e),
              (this.stance = t),
              (this.step = 1),
              (this.value = 0),
              (this.stepCount = 0),
              (this.stepPercent = 0),
              (this.offset = 0),
              (this.stepOffset = 0),
              (this.cursorOffset = 0),
              (this.isDecimal = !1),
              (this.decimalPlaces = 0),
              (this.endsValidation = a.default.bind(this)),
              (this.prepareOffset = o.default.bind(this));
          }

          setStep(e, t) {
            (this.step = e),
              (this.stepCount = (t.max - t.min) / e),
              (this.stepPercent = 100 / this.stepCount);
          }

          calculateValue(e) {
            return (this.stepOffset / this.stepPercent) * this.step + e.min;
          }

          setValue(e) {
            this.value = e;
          }

          setStance(e) {
            this.stance = e;
          }

          setIsDecimal(e, t) {
            (this.isDecimal = e), (this.decimalPlaces = t);
          }

          calculateOffset(e, t) {
            return this.prepareOffset((this.value - e.min) / ((e.max - e.min) / 100), t);
          }

          setOffset(e) {
            this.offset = e;
          }

          setStepOffset(e) {
            this.stepOffset = e;
          }

          calculateStepOffset() {
            return Math.round(this.cursorOffset / this.stepPercent) * this.stepPercent;
          }

          setCursorOffset(e) {
            this.cursorOffset = e;
          }

          updateThumbValue(e, t, n, i) {
            i === 'horizontal'
              ? this.setCursorOffset(n)
              : this.setCursorOffset(u.MAX_OFFSET - n),
              this.setStepOffset(this.calculateStepOffset()),
              this.setValue(this.calculateValue(t)),
              this.setOffset(this.calculateOffset(t, i)),
              this.endsValidation(t, i),
              this.notify(
                s.SubscribersNames.updateThumbView,
                this.value,
                this.offset,
                e,
                this.cursorOffset,
              ),
              this.notify(s.SubscribersNames.updateTipView, e, this.offset, this.value),
              this.notify(s.SubscribersNames.updateThumbsValues, this.value, e);
          }

          getValue() {
            return this.value;
          }

          getOffset() {
            return this.offset;
          }

          getState() {
            return {
              step: this.step,
              stepCount: this.stepCount,
              stepPercent: this.stepPercent,
              value: this.value,
              offset: this.offset,
              stepOffset: this.stepOffset,
              isDecimal: this.isDecimal,
              decimalPlaces: this.decimalPlaces,
            };
          }
        }
        t.default = l;
      },
      3541: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 });
        const i = n(3553);
        t.default = function (e, t) {
          this.getOffset() > i.MAX_OFFSET &&
            (this.setOffset(i.MAX_OFFSET),
            this.setValue(t === 'horizontal' ? e.max : e.min)),
            this.getOffset() < i.MIN_OFFSET &&
              (this.setOffset(i.MIN_OFFSET),
              this.setValue(t === 'horizontal' ? e.min : e.max));
        };
      },
      225: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 });
        const i = n(3553);
        t.default = function (e, t) {
          return t === 'horizontal' ? e : i.MAX_OFFSET - e;
        };
      },
      610(e, t, n) {
        const i =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, '__esModule', { value: !0 });
        const r = i(n(4524));
        const s = n(3553);
        const o = n(3502);
        class a extends r.default {
          constructor(e) {
            super(),
              (this.DOMroot = e),
              (this.ends = { min: 1, max: 100 }),
              (this.size = 200),
              (this.isRange = !1),
              (this.direction = 'horizontal'),
              (this.fillSize = 0),
              (this.fillOffset = 0),
              (this.hasFill = !0),
              (this.hasTips = !0),
              (this.hasScale = !0);
          }

          setEnds({ min: e, max: t }) {
            this.ends = { min: e, max: t };
          }

          setSize(e) {
            this.size = e;
          }

          setIsRange(e) {
            this.isRange = e;
          }

          setDirection(e) {
            this.direction = e;
          }

          setSubViews(e, t, n) {
            (this.hasScale = n), (this.hasTips = t), (this.hasFill = e);
          }

          calculateFillSize(e) {
            return this.isRange
              ? this.direction === 'horizontal'
                ? e[s.SECOND_OFFSET] - e[s.FIRST_OFFSET]
                : e[s.FIRST_OFFSET] - e[s.SECOND_OFFSET]
              : this.direction === 'horizontal'
              ? e[s.FIRST_OFFSET]
              : s.MAX_OFFSET - e[s.FIRST_OFFSET];
          }

          setFillSize(e) {
            this.fillSize = e;
          }

          calculateFillOffset(e) {
            return this.isRange
              ? this.direction === 'horizontal'
                ? e[s.FIRST_OFFSET]
                : e[s.SECOND_OFFSET]
              : s.MIN_OFFSET;
          }

          setFillOffset(e) {
            this.fillOffset = e;
          }

          updateTrackFill(e) {
            this.setFillSize(this.calculateFillSize(e)),
              this.setFillOffset(this.calculateFillOffset(e)),
              this.notify(
                o.SubscribersNames.updateTrackFillView,
                this.fillSize,
                this.fillOffset,
              );
          }

          prepareChooseStance(e) {
            let t = s.FIRST_THUMB_STANCE;
            e > this.fillSize / 2 + this.fillOffset && (t = s.SECOND_THUMB_STANCE),
              this.direction === 'vertical' && (t = +!t),
              this.isRange || (t = s.FIRST_THUMB_STANCE),
              this.notify(
                o.SubscribersNames.updateThumbModel,
                t,
                e,
                this.direction,
                this.size,
              );
          }

          getState() {
            return {
              ends: this.ends,
              size: this.size,
              isRange: this.isRange,
              direction: this.direction,
              hasFill: this.hasFill,
              hasTips: this.hasTips,
              hasScale: this.hasScale,
            };
          }

          getFillSize() {
            return this.fillSize;
          }

          getFillOffset() {
            return this.fillOffset;
          }

          getFillState() {
            return { fillSize: this.getFillSize(), fillOffset: this.getFillOffset() };
          }
        }
        t.default = a;
      },
      4524: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.default = class {
            constructor(e = {}) {
              this.subscribers = e;
            }

            subscribe(e, t) {
              const n = this.subscribers[e];
              n ? n.push(t) : (this.subscribers[e] = [t]);
            }

            unsubscribe(e, t) {
              this.subscribers[e].filter(e => t !== e);
            }

            notify(e, ...t) {
              this.subscribers[e].forEach(e => {
                e(...t);
              });
            }
          });
      },
      5015(e, t, n) {
        const i =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, '__esModule', { value: !0 });
        const r = i(n(8892));
        const s = i(n(610));
        const o = i(n(4829));
        const a = i(n(5617));
        const u = i(n(7868));
        const l = i(n(349));
        const c = i(n(2691));
        const f = i(n(9102));
        const d = i(n(9148));
        const h = i(n(5664));
        const p = i(n(1819));
        const m = i(n(4185));
        const v = i(n(8707));
        const g = n(3553);
        t.default = class {
          constructor(e, t) {
            (this.root = e),
              (this.DOMroot = document.querySelector(e)),
              (this.trackModel = new s.default(this.DOMroot)),
              (this.view = new r.default(this.DOMroot)),
              (this.thumbs = []),
              (this.params = t),
              (this.thumbStance = 0),
              (this.clearHTML = a.default.bind(this)),
              (this.removeListeners = u.default.bind(this)),
              (this.subscribe = l.default.bind(this)),
              (this.updateThumbModelBeforeTrackClick = c.default.bind(this)),
              (this.updateThumbModel = m.default.bind(this)),
              (this.updateTrackFillModel = f.default.bind(this)),
              (this.updateThumbView = d.default.bind(this)),
              (this.updateTipView = h.default.bind(this)),
              (this.addListeners = v.default.bind(this)),
              (this.updateTrackFillView = p.default.bind(this));
          }

          init(e, t) {
            t === 'rebuild' &&
              ((this.params = e),
              (this.view.isRange = !1),
              this.removeListeners(),
              this.clearHTML(e.direction),
              (this.thumbStance = 0),
              (this.thumbs = []),
              (this.view.thumbView.thumbs = []),
              (this.view.tipView.tips = [])),
              this.addSliderClasses(e.direction),
              this.setTrackModelState(e),
              this.setViewState(),
              this.createSlider(e),
              this.subscribe(),
              this.addListeners(e.isRange);
          }

          setTrackModelState({
            min: e,
            max: t,
            isRange: n,
            direction: i,
            hasFill: r,
            hasTips: s,
            hasScale: o,
          }) {
            const a =
              i === 'horizontal'
                ? this.DOMroot.getBoundingClientRect().width
                : this.DOMroot.getBoundingClientRect().height;
            return (
              this.trackModel.setSize(a),
              this.trackModel.setEnds({ min: e, max: t }),
              this.trackModel.setIsRange(n),
              this.trackModel.setDirection(i),
              this.trackModel.setSubViews(r, s, o),
              this
            );
          }

          setViewState() {
            return this.view.setState(this.trackModel.getState()), this;
          }

          updateThumbsValues(e, t) {
            g.FIRST_THUMB_STANCE, (this.params.value[t] = e);
          }

          addSliderClasses(e) {
            const t = this.DOMroot.parentElement;
            this.DOMroot.classList.add(`slider_${e}`),
              t.classList.add(`slider-parent_${e}`);
          }

          createThumb(
            {
              step: e,
              value: t,
              min: n,
              max: i,
              direction: r,
              hasTips: s,
              isDecimal: o,
              decimalPlaces: a,
            },
            u,
          ) {
            this.createThumbModel(u),
              this.setThumbModelState(u, e, Array.isArray(t) ? t[u] : t, n, i, o, a, r),
              this.renderThumb(u),
              this.setThumbView(u, r),
              this.setThumbPlacement(u),
              s && this.createTip(u, r);
          }

          createTip(e, t) {
            this.setTipView(e), this.renderTip(t, e), this.setTipPlacement(e);
          }

          createSlider(e) {
            this.createThumb(e, this.thumbStance),
              this.createSubViewsView(e),
              e.isRange &&
                ((this.thumbStance += 1), this.createThumb(e, this.thumbStance)),
              this.createTrackFill();
          }

          createTrackFill() {
            this.setTrackFillModel(),
              this.setTrackFillView(),
              this.setTrackFillPlacement();
          }

          setThumbModelState(e, t, n, i, r, s, o, a) {
            this.thumbs.forEach(e => {
              e.setStep(t, { min: i, max: r });
            }),
              this.thumbs[e].setStance(e),
              this.thumbs[e].setValue(n),
              this.thumbs[e].setOffset(
                this.thumbs[e].calculateOffset({ min: i, max: r }, a),
              ),
              this.thumbs[e].setIsDecimal(s, o);
          }

          setThumbView(e, t) {
            const {
              step: n,
              stepCount: i,
              stepPercent: r,
              value: s,
              offset: o,
              isDecimal: a,
              decimalPlaces: u,
            } = this.thumbs[e].getState();
            this.view.thumbView.setStep(n, r, i),
              this.view.thumbView.setValue(s, e),
              this.view.thumbView.setOffset(o, e),
              this.view.thumbView.setIsDecimal(a, u),
              this.view.prepareDirectionForInteraction(t);
          }

          setThumbPlacement(e) {
            const { offset: t } = this.thumbs[e].getState();
            this.view.initialThumbPlacement(t, e);
          }

          setTrackFillModel() {
            const e = [];
            this.thumbs.forEach(t => e.push(t.getState().offset)),
              this.trackModel.setFillSize(this.trackModel.calculateFillSize(e)),
              this.trackModel.setFillOffset(this.trackModel.calculateFillOffset(e));
          }

          setTrackFillView() {
            this.view.setFillState(this.trackModel.getFillState());
          }

          setTrackFillPlacement() {
            this.view.initialFillPlacement();
          }

          setTipPlacement(e) {
            this.view.initialTipPlacement(e);
          }

          createThumbModel(e) {
            this.thumbs.push(new o.default(this.DOMroot, e));
          }

          renderThumb(e) {
            this.view.thumbView.createThumb(e);
          }

          renderTrack(e) {
            this.view.trackView.createTrack(e);
          }

          renderScale(e, t, n, i) {
            this.view.scaleView.createScale(e),
              this.view.scaleView.createScaleMarks(t, n, i, e);
          }

          renderFill(e) {
            this.view.fillView.createFill(e);
          }

          renderTip(e, t) {
            this.view.tipView.createTip(e, t);
          }

          setTipView(e) {
            const t = this.thumbs[e].getOffset();
            const n = this.thumbs[e].getValue();
            this.view.tipView.setOffset(t, e), this.view.tipView.setValue(n, e);
          }

          createSubViewsView({
            direction: e,
            step: t,
            max: n,
            min: i,
            hasFill: r,
            hasScale: s,
          }) {
            this.renderTrack(e),
              s && this.renderScale(e, t, n, i),
              r && this.renderFill(e);
          }
        };
      },
      8707: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 });
        const i = n(3553);
        t.default = function (e) {
          this.view.thumbView.dragAndDropThumb(i.FIRST_THUMB_STANCE),
            this.view.trackView.clickTrack(),
            e && this.view.thumbView.dragAndDropThumb(i.SECOND_THUMB_STANCE);
        };
      },
      5302: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 });
        const i = n(3553);
        t.default = function (e, t) {
          const n = t.dataset;
          const r =
            n.firstValue && n.secondValue
              ? [+n.firstValue, +n.secondValue]
              : i.DEFAULT_SLIDER_PARAMS.value;
          let {
            min: s = Number(n.min) || i.DEFAULT_SLIDER_PARAMS.min,
            max: o = Number(n.max) || i.DEFAULT_SLIDER_PARAMS.max,
            value: a = r,
            decimalPlaces: u = Number(n.decimalPlaces) ||
              i.DEFAULT_SLIDER_PARAMS.decimalPlaces,
          } = e;
          const {
            step: l = Number(n.step) || i.DEFAULT_SLIDER_PARAMS.step,
            isRange: c = Boolean(n.isRange) || i.DEFAULT_SLIDER_PARAMS.isRange,
            direction: f = n.direction || i.DEFAULT_SLIDER_PARAMS.direction,
            hasFill: d = Boolean(n.hasFill) || i.DEFAULT_SLIDER_PARAMS.hasFill,
            hasTips: h = Boolean(n.hasTips) || i.DEFAULT_SLIDER_PARAMS.hasTips,
            hasScale: p = Boolean(n.hasScale) || i.DEFAULT_SLIDER_PARAMS.hasScale,
            isDecimal: m = Boolean(n.isDecimal) || i.DEFAULT_SLIDER_PARAMS.isDecimal,
          } = e;
          Array.isArray(a) || (a = [a]),
            c && a.length === 1 && a.push(a[i.FIRST_THUMB_STANCE]),
            (a[i.FIRST_THUMB_STANCE] = Math.max(s, a[i.FIRST_THUMB_STANCE])),
            (a[i.FIRST_THUMB_STANCE] = Math.min(o, a[i.FIRST_THUMB_STANCE])),
            c &&
              ((a[i.SECOND_THUMB_STANCE] = Math.max(s, a[i.SECOND_THUMB_STANCE])),
              (a[i.SECOND_THUMB_STANCE] = Math.min(o, a[i.SECOND_THUMB_STANCE])),
              (a[i.SECOND_THUMB_STANCE] = Math.max(
                a[i.FIRST_THUMB_STANCE],
                a[i.SECOND_THUMB_STANCE],
              ))),
            s >= o - l && (s = o - l),
            o <= s + l && (o = s + l),
            (u = Math.min(u, 3));
          const v = {
            min: s,
            max: o,
            step: l,
            value: a,
            isRange: c,
            direction: f,
            hasFill: d,
            hasTips: h,
            hasScale: p,
            isDecimal: m,
            decimalPlaces: u,
          };
          return e.onChange && (v.onChange = e.onChange), v;
        };
      },
      5617: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.default = function (e) {
            const t = e === 'horizontal' ? 'vertical' : 'horizontal';
            const n = this.DOMroot.parentElement;
            this.DOMroot.classList.remove(`slider_${t}`),
              n.classList.remove(`slider-parent_${t}`),
              (this.DOMroot.innerHTML = '');
          });
      },
      4185: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.default = function (e, t, n) {
            this.thumbs[e].updateThumbValue(e, this.view.ends, t, n);
          });
      },
      2691: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.default = function (e) {
            this.trackModel.prepareChooseStance(e);
          });
      },
      9102: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.default = function (e) {
            this.trackModel.updateTrackFill(e);
          });
      },
      9148: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.default = function (e, t, n) {
            this.view.thumbView.setOffset(t, n),
              this.view.thumbView.setValue(e, n),
              this.view.thumbView.updateThumbPosition(t, n),
              (this.view.thumbView.activeStance = n),
              this.params.onChange && this.params.onChange(this.params);
          });
      },
      5664: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.default = function (e, t, n) {
            this.view.tipView.setOffset(t, e),
              this.view.tipView.setValue(n, e),
              this.view.tipView.updateTipsPosition(e);
          });
      },
      1819: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.default = function (e, t) {
            this.view.fillView.setSize(e),
              this.view.fillView.setOffset(t),
              this.view.fillView.updateFill();
          });
      },
      7868: (e, t, n) => {
        const i = n(8563);
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.default = function () {
            i(this.root).off();
          });
      },
      349: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 });
        const i = n(3502);
        t.default = function () {
          this.view.thumbView.subscribe(
            i.SubscribersNames.updateThumbModel,
            this.updateThumbModel,
          ),
            this.view.thumbView.subscribe(
              i.SubscribersNames.updateTrackFillModel,
              this.updateTrackFillModel,
            ),
            this.view.trackView.subscribe(
              i.SubscribersNames.updateThumbModelBeforeTrackClick,
              this.updateThumbModelBeforeTrackClick,
            ),
            this.view.trackView.subscribe(
              i.SubscribersNames.updateTrackFillModel,
              this.updateTrackFillModel,
            ),
            this.thumbs.forEach(e =>
              e.subscribe(i.SubscribersNames.updateTipView, this.updateTipView),
            ),
            this.thumbs.forEach(e =>
              e.subscribe(i.SubscribersNames.updateThumbView, this.updateThumbView),
            ),
            this.thumbs.forEach(e => {
              e.subscribe(
                i.SubscribersNames.updateThumbsValues,
                this.updateThumbsValues.bind(this),
              );
            }),
            this.trackModel.subscribe(
              i.SubscribersNames.updateThumbModel,
              this.updateThumbModel,
            ),
            this.trackModel.subscribe(
              i.SubscribersNames.updateTrackFillView,
              this.updateTrackFillView,
            );
        };
      },
      1932(e, t, n) {
        const i =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, '__esModule', { value: !0 });
        const r = i(n(5015));
        const s = i(n(5302));
        t.default = class {
          constructor(e, t) {
            (this.root = e),
              (this.DOMroot = document.querySelector(e)),
              (this.params = (0, s.default)(t, this.DOMroot)),
              (this.presenter = new r.default(e, (0, s.default)(t, this.DOMroot))),
              this.init(this.params, 'init');
          }

          init(e, t) {
            this.presenter.init(e, t);
          }
        };
      },
      8892(e, t, n) {
        const i =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, '__esModule', { value: !0 });
        const r = i(n(6746));
        const s = i(n(4617));
        const o = i(n(4524));
        const a = i(n(4002));
        const u = i(n(9336));
        const l = i(n(7348));
        const c = i(n(2755));
        const f = i(n(3543));
        const d = i(n(9347));
        const h = i(n(1181));
        const p = i(n(2578));
        class m extends o.default {
          constructor(e) {
            super(),
              (this.DOMroot = e),
              (this.thumbView = new r.default(this)),
              (this.trackView = new s.default(this)),
              (this.scaleView = new a.default(this)),
              (this.fillView = new u.default(this)),
              (this.tipView = new f.default(this)),
              (this.ends = { min: 0, max: 0 }),
              (this.size = 200),
              (this.isRange = !1),
              (this.direction = 'horizontal'),
              (this.hasFill = !0),
              (this.hasTips = !0),
              (this.hasScale = !0),
              (this.offsetDirection = 'left'),
              (this.fillDirection = 'width'),
              (this.initialThumbPlacement = l.default.bind(this)),
              (this.initialFillPlacement = c.default.bind(this)),
              (this.initialTipPlacement = d.default.bind(this)),
              (this.prepareDirectionForInteraction = h.default.bind(this)),
              (this.calculateCursorCoordinate = p.default.bind(this));
          }

          setState({
            isRange: e,
            direction: t,
            ends: n,
            size: i,
            hasTips: r,
            hasScale: s,
            hasFill: o,
          }) {
            (this.ends = n),
              (this.size = i),
              (this.isRange = e),
              (this.direction = t),
              (this.hasTips = r),
              (this.hasFill = o),
              (this.hasScale = s);
          }

          setFillState({ fillSize: e, fillOffset: t }) {
            this.fillView.setSize(e), this.fillView.setOffset(t);
          }
        }
        t.default = m;
      },
      9336(e, t, n) {
        const i =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, '__esModule', { value: !0 });
        const r = i(n(4524));
        const s = i(n(9110));
        class o extends r.default {
          constructor(e) {
            super(),
              (this.fill = document.querySelector('.slider__fill')),
              (this.view = e),
              (this.size = 0),
              (this.offset = 0),
              (this.updateFill = s.default.bind(this));
          }

          setSize(e) {
            this.size = e;
          }

          setOffset(e) {
            this.offset = e;
          }

          getSize() {
            return this.size;
          }

          getOffset() {
            return this.offset;
          }

          createFill(e) {
            const t = document.createElement('div');
            t.classList.add('slider__fill'),
              t.classList.add(`slider__fill_${e}`),
              (t.dataset.testid = 'test-fill'),
              (this.fill = t),
              this.view.DOMroot.appendChild(t);
          }
        }
        t.default = o;
      },
      9110: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.default = function () {
            this.view.isRange
              ? ((this.fill.style[this.view.offsetDirection] = `${this.getOffset()}%`),
                (this.fill.style[this.view.fillDirection] = `${this.getSize()}%`))
              : (this.fill.style[this.view.fillDirection] = `${this.getSize()}%`);
          });
      },
      4002(e, t, n) {
        const i =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, '__esModule', { value: !0 });
        const r = i(n(3025));
        t.default = class {
          constructor(e) {
            (this.view = e),
              (this.scale = document.querySelector('.slider__scale')),
              (this.createScaleMarks = r.default.bind(this));
          }

          createScale(e) {
            const t = document.createElement('div');
            t.classList.add('slider__scale'),
              t.classList.add(`slider__scale_${e}`),
              (t.dataset.testid = 'test-scale'),
              (this.scale = t),
              this.view.DOMroot.appendChild(t);
          }
        };
      },
      3025(e, t, n) {
        const i =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, '__esModule', { value: !0 });
        const r = i(n(4396));
        t.default = function (e, t, n, i) {
          const s = (0, r.default)(n, t, e);
          i === 'vertical' && s.reverse();
          for (let e = 0; e < s.length; e += 1) {
            const t = document.createElement('div');
            t.classList.add('slider__scale-mark'),
              t.classList.add(`slider__scale-mark_${i}`),
              (t.dataset.testid = 'test-scale-mark');
            const n = document.createElement('div');
            n.classList.add('slider__scale-number'),
              n.classList.add(`slider__scale-number_${i}`),
              (n.innerHTML = s[e].toString()),
              t.appendChild(n),
              this.scale.appendChild(t);
          }
        };
      },
      4396: (e, t) => {
        function n(e, t) {
          for (let n = 0; n < t.length; n += 1) if (e % t[n] == 0) return t[n];
          return n(e - 1, t);
        }
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.default = function (e, t, i) {
            const r = Math.round((t - e) / i + 1);
            const s = r - 1;
            const o = n(s, [3, 5, 7, 11]);
            let a = Math.max(Math.floor(s / o), 1);
            a = a < 15 ? Math.min(a, o) : a;
            const u = [];
            for (let t = 0; t < Math.ceil(r / a); t += 1)
              u.push(+(i * t * a + e).toFixed(3));
            return u;
          });
      },
      6746(e, t, n) {
        const i =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, '__esModule', { value: !0 });
        const r = i(n(4524));
        const s = i(n(9085));
        const o = i(n(7989));
        const a = i(n(247));
        class u extends r.default {
          constructor(e) {
            super(),
              (this.view = e),
              (this.step = 0),
              (this.stepPercent = 0),
              (this.stepCount = 0),
              (this.value = []),
              (this.offset = []),
              (this.isDecimal = !1),
              (this.decimalPlaces = 0),
              (this.activeStance = 0),
              (this.thumbs = []),
              (this.updateThumbPosition = s.default.bind(this)),
              (this.validateCollision = o.default.bind(this)),
              (this.dragAndDropThumb = a.default.bind(this));
          }

          createThumb(e) {
            const t = document.createElement('div');
            t.classList.add('slider__thumb'),
              t.classList.add(`slider__thumb-${e}`),
              (t.dataset.testid = `test-thumb-${e}`),
              this.thumbs.push(t),
              this.view.DOMroot.appendChild(t);
          }

          setStep(e, t, n) {
            (this.step = e), (this.stepPercent = t), (this.stepCount = n);
          }

          getStep() {
            return {
              step: this.step,
              stepPercent: this.stepPercent,
              stepCount: this.stepCount,
            };
          }

          setValue(e, t) {
            this.value[t] = e;
          }

          getValue() {
            return this.value;
          }

          setOffset(e, t) {
            this.offset[t] = e;
          }

          getOffset() {
            return this.offset;
          }

          setIsDecimal(e, t) {
            this.decimalPlaces = e ? t : 0;
          }
        }
        t.default = u;
      },
      247(e, t, n) {
        const i =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, '__esModule', { value: !0 });
        const r = i(n(5422));
        t.default = function (e) {
          const t = this.view.DOMroot.querySelector(`.slider__thumb-${e}`);
          const n = t => {
            (0, r.default)(t, this, e);
          };
          const i = e => {
            e.preventDefault(),
              e.stopPropagation(),
              document.addEventListener('pointermove', n);
          };
          t.addEventListener('pointerdown', i),
            t.addEventListener('touchstart', i),
            document.addEventListener('pointerup', () => {
              document.removeEventListener('pointermove', n);
            });
        };
      },
      5422: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 });
        const i = n(3502);
        t.default = function (e, t, n) {
          const { direction: r } = t.view;
          const s = r === 'horizontal' ? e.pageX : e.pageY;
          const o = t.view.calculateCursorCoordinate(s, r, t.view.DOMroot, t.view.size);
          const a = t.view.isRange ? t.validateCollision(n) : n;
          t.notify(i.SubscribersNames.updateThumbModel, a, o, r, t.view.size),
            t.notify(i.SubscribersNames.updateTrackFillModel, t.getOffset());
        };
      },
      9085: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.default = function (e, t) {
            this.thumbs[t].style[this.view.offsetDirection] = `${e}%`;
          });
      },
      7989: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 });
        const i = n(3553);
        t.default = function (e) {
          const t = +!e;
          if (e === i.FIRST_THUMB_STANCE) {
            if (this.getValue()[i.FIRST_VALUE] > this.getValue()[i.SECOND_VALUE])
              return (
                this.setOffset(i.SECOND_THUMB_STANCE, this.getOffset()[i.FIRST_OFFSET]), t
              );
          } else if (this.getValue()[i.SECOND_VALUE] < this.getValue()[i.FIRST_VALUE])
            return (
              this.setOffset(i.FIRST_THUMB_STANCE, this.getOffset()[i.SECOND_OFFSET]), t
            );
          return e;
        };
      },
      3543(e, t, n) {
        const i =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, '__esModule', { value: !0 });
        const r = i(n(4524));
        const s = i(n(8106));
        class o extends r.default {
          constructor(e) {
            super(),
              (this.view = e),
              (this.offset = []),
              (this.tips = []),
              (this.value = []),
              (this.updateTipsPosition = s.default.bind(this));
          }

          setOffset(e, t) {
            this.offset[t] = e;
          }

          getOffset() {
            return this.offset;
          }

          setValue(e, t) {
            this.value[t] = e;
          }

          getValue() {
            return this.value;
          }

          createTip(e, t) {
            const n = document.createElement('div');
            n.classList.add('slider__tip'),
              n.classList.add(`slider__tip-${t}`),
              n.classList.add(`slider__tip_${e}`),
              (n.dataset.testid = 'test-tip'),
              this.tips.push(n),
              this.view.DOMroot.appendChild(n);
          }
        }
        t.default = o;
      },
      8106: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.default = function (e) {
            this.tips.length !== 0 &&
              ((this.tips[e].style[this.view.offsetDirection] = `${
                this.getOffset()[e]
              }%`),
              (this.tips[e].innerHTML = this.getValue()[e].toFixed(
                this.view.thumbView.decimalPlaces,
              )));
          });
      },
      4617(e, t, n) {
        const i =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, '__esModule', { value: !0 });
        const r = i(n(8050));
        const s = i(n(4524));
        class o extends s.default {
          constructor(e) {
            super(),
              (this.view = e),
              (this.track = document.querySelector('.slider__track'));
          }

          createTrack(e) {
            const t = document.createElement('div');
            t.classList.add('slider__track'),
              t.classList.add(`slider__track_${e}`),
              (t.dataset.testid = 'test-track'),
              (this.track = t),
              this.view.DOMroot.appendChild(t);
          }

          clickTrack() {
            this.view.DOMroot.addEventListener('mousedown', e => (0, r.default)(e, this));
          }
        }
        t.default = o;
      },
      8050: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 });
        const i = n(3502);
        t.default = function (e, t) {
          const { direction: n } = t.view;
          const r = n === 'horizontal' ? e.pageX : e.pageY;
          const s = t.view.calculateCursorCoordinate(r, n, t.view.DOMroot, t.view.size);
          t.notify(i.SubscribersNames.updateThumbModelBeforeTrackClick, s),
            t.notify(
              i.SubscribersNames.updateTrackFillModel,
              t.view.thumbView.getOffset(),
            );
        };
      },
      2578: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.default = function (e, t, n, i) {
            return t === 'horizontal'
              ? ((e - n.offsetLeft) / i) * 100
              : ((e - n.offsetTop) / i) * 100;
          });
      },
      2755: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.default = function () {
            this.fillView.updateFill();
          });
      },
      7348: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.default = function (e, t) {
            this.thumbView.updateThumbPosition(e, t);
          });
      },
      9347: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.default = function (e) {
            this.tipView.updateTipsPosition(e);
          });
      },
      1181: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.default = function (e) {
            (this.offsetDirection = e === 'horizontal' ? 'left' : 'top'),
              (this.fillDirection = e === 'horizontal' ? 'width' : 'height');
          });
      },
      3553: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.SECOND_OFFSET =
            t.FIRST_OFFSET =
            t.MIN_OFFSET =
            t.MAX_OFFSET =
            t.SECOND_VALUE =
            t.FIRST_VALUE =
            t.SECOND_THUMB_STANCE =
            t.FIRST_THUMB_STANCE =
            t.DEFAULT_SLIDER_PARAMS =
              void 0),
          (t.DEFAULT_SLIDER_PARAMS = {
            min: 0,
            max: 100,
            step: 10,
            value: [0],
            isRange: !1,
            direction: 'horizontal',
            hasFill: !0,
            hasTips: !0,
            hasScale: !0,
            isDecimal: !1,
            decimalPlaces: 0,
          }),
          (t.FIRST_THUMB_STANCE = 0),
          (t.SECOND_THUMB_STANCE = 1),
          (t.FIRST_VALUE = 0),
          (t.SECOND_VALUE = 1),
          (t.FIRST_OFFSET = 0),
          (t.SECOND_OFFSET = 1),
          (t.MAX_OFFSET = 100),
          (t.MIN_OFFSET = 0);
      },
      3502: (e, t) => {
        let n;
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.SubscribersNames = void 0),
          (function (e) {
            (e.updateThumbModel = 'UpdateThumbModel'),
              (e.updateTrackFillModel = 'UpdateTrackFillModel'),
              (e.updateThumbModelBeforeTrackClick = 'UpdateThumbModelBeforeTrackClick'),
              (e.updateTipView = 'UpdateTipView'),
              (e.updateThumbView = 'UpdateThumbView'),
              (e.updateTrackFillView = 'UpdateTrackFillView'),
              (e.updateThumbsValues = 'UpdateThumbsValues');
          })(n || (n = {})),
          (t.SubscribersNames = n);
      },
    }),
    (t = {}),
    (function n(i) {
      const r = t[i];
      if (void 0 !== r) return r.exports;
      const s = (t[i] = { exports: {} });
      return e[i].call(s.exports, s, s.exports, n), s.exports;
    })(1932).default
  );
  let e;
  let t;
});
