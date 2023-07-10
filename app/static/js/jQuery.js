! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";
    var t = [],
        E = C.document,
        r = Object.getPrototypeOf,
        s = t.slice,
        g = t.concat,
        u = t.push,
        i = t.indexOf,
        n = {},
        o = n.toString,
        v = n.hasOwnProperty,
        a = v.toString,
        l = a.call(Object),
        y = {},
        m = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        x = function(e) {
            return null != e && e === e.window
        },
        c = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function b(e, t, n) {
        var r, i, o = (n = n || E).createElement("script");
        if (o.text = e, t)
            for (r in c)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }
    var f = "3.4.1",
        k = function(e, t) {
            return new k.fn.init(e, t)
        },
        p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function d(e) {
        var t = !!e && "length" in e && e.length,
            n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    k.fn = k.prototype = {
        jquery: f,
        constructor: k,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = k.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return k.each(this, e)
        },
        map: function(n) {
            return this.pushStack(k.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: u,
        sort: t.sort,
        splice: t.splice
    }, k.extend = k.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (k.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || k.isPlainObject(n) ? n : {}, i = !1, a[t] = k.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, k.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof(n = v.call(t, "constructor") && t.constructor) && a.call(n) === l)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e, t) {
            b(e, {
                nonce: t && t.nonce
            })
        },
        each: function(e, t) {
            var n, r = 0;
            if (d(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r])) break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(p, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (d(Object(e)) ? k.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0,
                a = [];
            if (d(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return g.apply([], a)
        },
        guid: 1,
        support: y
    }), "function" == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]), k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var h = function(n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, k = "sizzle" + 1 * new Date,
            m = n.document,
            S = 0,
            r = 0,
            p = ue(),
            x = ue(),
            N = ue(),
            A = ue(),
            D = function(e, t) {
                return e === t && (l = !0), 0
            },
            j = {}.hasOwnProperty,
            t = [],
            q = t.pop,
            L = t.push,
            H = t.push,
            O = t.slice,
            P = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
            $ = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
            F = new RegExp(M + "+", "g"),
            B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            _ = new RegExp("^" + M + "*," + M + "*"),
            z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp(M + "|>"),
            X = new RegExp($),
            V = new RegExp("^" + I + "$"),
            G = {
                ID: new RegExp("^#(" + I + ")"),
                CLASS: new RegExp("^\\.(" + I + ")"),
                TAG: new RegExp("^(" + I + "|[*])"),
                ATTR: new RegExp("^" + W),
                PSEUDO: new RegExp("^" + $),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + R + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
            ne = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function(e, t) {
                return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            oe = function() {
                T()
            },
            ae = be(function(e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            H.apply(t = O.call(m.childNodes), m.childNodes), t[m.childNodes.length].nodeType
        } catch (e) {
            H = {
                apply: t.length ? function(e, t) {
                    L.apply(e, O.call(t))
                } : function(e, t) {
                    var n = e.length,
                        r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }

        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument,
                p = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && ((e ? e.ownerDocument || e : m) !== C && T(e), e = e || C, E)) {
                if (11 !== p && (u = Z.exec(t)))
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i))) return n;
                            if (a.id === i) return n.push(a), n
                        } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n
                    } else {
                        if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
                        if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n
                    } if (d.qsa && !A[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t, f = e, 1 === p && U.test(t)) {
                        (s = e.getAttribute("id")) ? s = s.replace(re, ie): e.setAttribute("id", s = k), o = (l = h(t)).length;
                        while (o--) l[o] = "#" + s + " " + xe(l[o]);
                        c = l.join(","), f = ee.test(t) && ye(e.parentNode) || e
                    }
                    try {
                        return H.apply(n, f.querySelectorAll(c)), n
                    } catch (e) {
                        A(t, !0)
                    } finally {
                        s === k && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace(B, "$1"), e, n, r)
        }

        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n
            }
        }

        function le(e) {
            return e[k] = !0, e
        }

        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function fe(e, t) {
            var n = e.split("|"),
                r = n.length;
            while (r--) b.attrHandle[n[r]] = t
        }

        function pe(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function de(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function he(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function ge(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function ve(a) {
            return le(function(o) {
                return o = +o, le(function(e, t) {
                    var n, r = a([], e.length, o),
                        i = r.length;
                    while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function ye(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        for (e in d = se.support = {}, i = se.isXML = function(e) {
                var t = e.namespaceURI,
                    n = (e.ownerDocument || e).documentElement;
                return !Y.test(t || n && n.nodeName || "HTML")
            }, T = se.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : m;
                return r !== C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), m !== C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.attributes = ce(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), d.getElementsByTagName = ce(function(e) {
                    return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
                }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function(e) {
                    return a.appendChild(e).id = k, !C.getElementsByName || !C.getElementsByName(k).length
                }), d.getById ? (b.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, b.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (b.filter.ID = function(e) {
                    var n = e.replace(te, ne);
                    return function(e) {
                        var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }, b.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                        var n, r, i, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            i = t.getElementsByName(e), r = 0;
                            while (o = i[r++])
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), b.find.TAG = d.getElementsByTagName ? function(e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        while (n = o[i++]) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, b.find.CLASS = d.getElementsByClassName && function(e, t) {
                    if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e)
                }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function(e) {
                    a.appendChild(e).innerHTML = "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + k + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + k + "+*").length || v.push(".#.+[+~]")
                }), ce(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = C.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) {
                    d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", $)
                }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        while (t = t.parentNode)
                            if (t === e) return !0;
                    return !1
                }, D = t ? function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === m && y(m, e) ? -1 : t === C || t.ownerDocument === m && y(m, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!i || !o) return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                    if (i === o) return pe(e, t);
                    n = e;
                    while (n = n.parentNode) a.unshift(n);
                    n = t;
                    while (n = n.parentNode) s.unshift(n);
                    while (a[r] === s[r]) r++;
                    return r ? pe(a[r], s[r]) : a[r] === m ? -1 : s[r] === m ? 1 : 0
                }), C
            }, se.matches = function(e, t) {
                return se(e, null, null, t)
            }, se.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== C && T(e), d.matchesSelector && E && !A[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
                    var n = c.call(e, t);
                    if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {
                    A(t, !0)
                }
                return 0 < se(t, C, null, [e]).length
            }, se.contains = function(e, t) {
                return (e.ownerDocument || e) !== C && T(e), y(e, t)
            }, se.attr = function(e, t) {
                (e.ownerDocument || e) !== C && T(e);
                var n = b.attrHandle[t.toLowerCase()],
                    r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
                return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, se.escape = function(e) {
                return (e + "").replace(re, ie)
            }, se.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, se.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) {
                    while (t = e[i++]) t === e[i] && (r = n.push(i));
                    while (r--) e.splice(n[r], 1)
                }
                return u = null, e
            }, o = se.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    while (t = e[r++]) n += o(t);
                return n
            }, (b = se.selectors = {
                cacheLength: 50,
                createPseudo: le,
                match: G,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = p[e + " "];
                        return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && p(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, r, i) {
                        return function(e) {
                            var t = se.attr(e, n);
                            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(F, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(h, e, t, g, v) {
                        var y = "nth" !== h.slice(0, 3),
                            m = "last" !== h.slice(-4),
                            x = "of-type" === e;
                        return 1 === g && 0 === v ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                f = x && e.nodeName.toLowerCase(),
                                p = !n && !x,
                                d = !1;
                            if (c) {
                                if (y) {
                                    while (l) {
                                        a = e;
                                        while (a = a[l])
                                            if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                        u = l = "only" === h && !u && "nextSibling"
                                    }
                                    return !0
                                }
                                if (u = [m ? c.firstChild : c.lastChild], m && p) {
                                    d = (s = (r = (i = (o = (a = c)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]) && r[2], a = s && c.childNodes[s];
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if (1 === a.nodeType && ++d && a === e) {
                                            i[h] = [S, s, d];
                                            break
                                        }
                                } else if (p && (d = s = (r = (i = (o = (a = e)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]), !1 === d)
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [S, d]), a === e)) break;
                                return (d -= v) === g || d % g == 0 && 0 <= d / g
                            }
                        }
                    },
                    PSEUDO: function(e, o) {
                        var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                        return a[k] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
                            var n, r = a(e, o),
                                i = r.length;
                            while (i--) e[n = P(e, r[i])] = !(t[n] = r[i])
                        }) : function(e) {
                            return a(e, 0, t)
                        }) : a
                    }
                },
                pseudos: {
                    not: le(function(e) {
                        var r = [],
                            i = [],
                            s = f(e.replace(B, "$1"));
                        return s[k] ? le(function(e, t, n, r) {
                            var i, o = s(e, null, r, []),
                                a = e.length;
                            while (a--)(i = o[a]) && (e[a] = !(t[a] = i))
                        }) : function(e, t, n) {
                            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
                        }
                    }),
                    has: le(function(t) {
                        return function(e) {
                            return 0 < se(t, e).length
                        }
                    }),
                    contains: le(function(t) {
                        return t = t.replace(te, ne),
                            function(e) {
                                return -1 < (e.textContent || o(e)).indexOf(t)
                            }
                    }),
                    lang: le(function(n) {
                        return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === a
                    },
                    focus: function(e) {
                        return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !b.pseudos.empty(e)
                    },
                    header: function(e) {
                        return J.test(e.nodeName)
                    },
                    input: function(e) {
                        return Q.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: ve(function() {
                        return [0]
                    }),
                    last: ve(function(e, t) {
                        return [t - 1]
                    }),
                    eq: ve(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: ve(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: ve(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: ve(function(e, t, n) {
                        for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                        return e
                    }),
                    gt: ve(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = b.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) b.pseudos[e] = de(e);
        for (e in {
                submit: !0,
                reset: !0
            }) b.pseudos[e] = he(e);

        function me() {}

        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function be(s, e, t) {
            var u = e.dir,
                l = e.next,
                c = l || u,
                f = t && "parentNode" === c,
                p = r++;
            return e.first ? function(e, t, n) {
                while (e = e[u])
                    if (1 === e.nodeType || f) return s(e, t, n);
                return !1
            } : function(e, t, n) {
                var r, i, o, a = [S, p];
                if (n) {
                    while (e = e[u])
                        if ((1 === e.nodeType || f) && s(e, t, n)) return !0
                } else
                    while (e = e[u])
                        if (1 === e.nodeType || f)
                            if (i = (o = e[k] || (e[k] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
                            else {
                                if ((r = i[c]) && r[0] === S && r[1] === p) return a[2] = r[2];
                                if ((i[c] = a)[2] = s(e, t, n)) return !0
                            } return !1
            }
        }

        function we(i) {
            return 1 < i.length ? function(e, t, n) {
                var r = i.length;
                while (r--)
                    if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function Ce(d, h, g, v, y, e) {
            return v && !v[k] && (v = Ce(v)), y && !y[k] && (y = Ce(y, e)), le(function(e, t, n, r) {
                var i, o, a, s = [],
                    u = [],
                    l = t.length,
                    c = e || function(e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []),
                    f = !d || !e && h ? c : Te(c, s, d, n, r),
                    p = g ? y || (e ? d : l || v) ? [] : t : f;
                if (g && g(f, p, n, r), v) {
                    i = Te(p, u), v(i, [], n, r), o = i.length;
                    while (o--)(a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
                }
                if (e) {
                    if (y || d) {
                        if (y) {
                            i = [], o = p.length;
                            while (o--)(a = p[o]) && i.push(f[o] = a);
                            y(null, p = [], i, r)
                        }
                        o = p.length;
                        while (o--)(a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p)
            })
        }

        function Ee(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function(e) {
                    return e === i
                }, a, !0), l = be(function(e) {
                    return -1 < P(i, e)
                }, a, !0), c = [function(e, t, n) {
                    var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                    return i = null, r
                }]; s < r; s++)
                if (t = b.relative[e[s].type]) c = [be(we(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[k]) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type]) break;
                        return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(B, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
                    }
                    c.push(t)
                } return we(c)
        }
        return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function(e, t) {
            var n, r, i, o, a, s, u, l = x[e + " "];
            if (l) return t ? 0 : l.slice(0);
            a = e, s = [], u = b.preFilter;
            while (a) {
                for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
                        value: n,
                        type: r[0].replace(B, " ")
                    }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
        }, f = se.compile = function(e, t) {
            var n, v, y, m, x, r, i = [],
                o = [],
                a = N[e + " "];
            if (!a) {
                t || (t = h(e)), n = t.length;
                while (n--)(a = Ee(t[n]))[k] ? i.push(a) : o.push(a);
                (a = N(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function(e, t, n, r, i) {
                    var o, a, s, u = 0,
                        l = "0",
                        c = e && [],
                        f = [],
                        p = w,
                        d = e || x && b.find.TAG("*", i),
                        h = S += null == p ? 1 : Math.random() || .1,
                        g = d.length;
                    for (i && (w = t === C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0, t || o.ownerDocument === C || (T(o), n = !E);
                            while (s = v[a++])
                                if (s(o, t || C, n)) {
                                    r.push(o);
                                    break
                                } i && (S = h)
                        }
                        m && ((o = !s && o) && u--, e && c.push(o))
                    }
                    if (u += l, m && l !== u) {
                        a = 0;
                        while (s = y[a++]) s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                while (l--) c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f)
                        }
                        H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
                    }
                    return i && (S = h, w = p), c
                }, m ? le(r) : r))).selector = e
            }
            return a
        }, g = se.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e,
                c = !r && h(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                i = G.needsContext.test(e) ? 0 : o.length;
                while (i--) {
                    if (a = o[i], b.relative[s = a.type]) break;
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
                        break
                    }
                }
            }
            return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n
        }, d.sortStable = k.split("").sort(D).join("") === k, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }), ce(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), d.attributes && ce(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ce(function(e) {
            return null == e.getAttribute("disabled")
        }) || fe(R, function(e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), se
    }(C);
    k.find = h, k.expr = h.selectors, k.expr[":"] = k.expr.pseudos, k.uniqueSort = k.unique = h.uniqueSort, k.text = h.getText, k.isXMLDoc = h.isXML, k.contains = h.contains, k.escapeSelector = h.escape;
    var T = function(e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && k(e).is(n)) break;
                    r.push(e)
                } return r
        },
        S = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        N = k.expr.match.needsContext;

    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function j(e, n, r) {
        return m(n) ? k.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? k.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? k.grep(e, function(e) {
            return -1 < i.call(n, e) !== r
        }) : k.filter(n, e, r)
    }
    k.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? k.find.matchesSelector(r, e) ? [r] : [] : k.find.matches(e, k.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, k.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(k(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (k.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) k.find(e, i[t], n);
            return 1 < r ? k.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(j(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(j(this, e || [], !0))
        },
        is: function(e) {
            return !!j(this, "string" == typeof e && N.test(e) ? k(e) : e || [], !1).length
        }
    });
    var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (k.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || q, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : L.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof k ? t[0] : t, k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), D.test(r[1]) && k.isPlainObject(t))
                    for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(k) : k.makeArray(e, this)
    }).prototype = k.fn, q = k(E);
    var H = /^(?:parents|prev(?:Until|All))/,
        O = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function P(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e
    }
    k.fn.extend({
        has: function(e) {
            var t = k(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (k.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && k(e);
            if (!N.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && k.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        } return this.pushStack(1 < o.length ? k.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(k(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), k.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return T(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return T(e, "parentNode", n)
        },
        next: function(e) {
            return P(e, "nextSibling")
        },
        prev: function(e) {
            return P(e, "previousSibling")
        },
        nextAll: function(e) {
            return T(e, "nextSibling")
        },
        prevAll: function(e) {
            return T(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return T(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return T(e, "previousSibling", n)
        },
        siblings: function(e) {
            return S((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return S(e.firstChild)
        },
        contents: function(e) {
            return "undefined" != typeof e.contentDocument ? e.contentDocument : (A(e, "template") && (e = e.content || e), k.merge([], e.childNodes))
        }
    }, function(r, i) {
        k.fn[r] = function(e, t) {
            var n = k.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = k.filter(t, n)), 1 < this.length && (O[r] || k.uniqueSort(n), H.test(r) && n.reverse()), this.pushStack(n)
        }
    });
    var R = /[^\x20\t\r\n\f]+/g;

    function M(e) {
        return e
    }

    function I(e) {
        throw e
    }

    function W(e, t, n, r) {
        var i;
        try {
            e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    k.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, k.each(e.match(R) || [], function(e, t) {
            n[t] = !0
        }), n) : k.extend({}, r);
        var i, t, o, a, s = [],
            u = [],
            l = -1,
            c = function() {
                for (a = a || r.once, o = i = !0; u.length; l = -1) {
                    t = u.shift();
                    while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1)
                }
                r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
            },
            f = {
                add: function() {
                    return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
                        k.each(e, function(e, t) {
                            m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
                        })
                    }(arguments), t && !i && c()), this
                },
                remove: function() {
                    return k.each(arguments, function(e, t) {
                        var n;
                        while (-1 < (n = k.inArray(t, s, n))) s.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < k.inArray(e, s) : 0 < s.length
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return a = u = [], s = t = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return a = u = [], t || i || (s = t = ""), this
                },
                locked: function() {
                    return !!a
                },
                fireWith: function(e, t) {
                    return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!o
                }
            };
        return f
    }, k.extend({
        Deferred: function(e) {
            var o = [
                    ["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2],
                    ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                a = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this
                    },
                    "catch": function(e) {
                        return a.then(null, e)
                    },
                    pipe: function() {
                        var i = arguments;
                        return k.Deferred(function(r) {
                            k.each(o, function(e, t) {
                                var n = m(i[t[4]]) && i[t[4]];
                                s[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    },
                    then: function(t, n, r) {
                        var u = 0;

                        function l(i, o, a, s) {
                            return function() {
                                var n = this,
                                    r = arguments,
                                    e = function() {
                                        var e, t;
                                        if (!(i < u)) {
                                            if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, M, s), l(u, o, I, s)) : (u++, t.call(e, l(u, o, M, s), l(u, o, I, s), l(u, o, M, o.notifyWith))) : (a !== M && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                                        }
                                    },
                                    t = s ? e : function() {
                                        try {
                                            e()
                                        } catch (e) {
                                            k.Deferred.exceptionHook && k.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== I && (n = void 0, r = [e]), o.rejectWith(n, r))
                                        }
                                    };
                                i ? t() : (k.Deferred.getStackHook && (t.stackTrace = k.Deferred.getStackHook()), C.setTimeout(t))
                            }
                        }
                        return k.Deferred(function(e) {
                            o[0][3].add(l(0, e, m(r) ? r : M, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : M)), o[2][3].add(l(0, e, m(n) ? n : I))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? k.extend(e, a) : a
                    }
                },
                s = {};
            return k.each(o, function(e, t) {
                var n = t[2],
                    r = t[5];
                a[t[1]] = n.add, r && n.add(function() {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        },
        when: function(e) {
            var n = arguments.length,
                t = n,
                r = Array(t),
                i = s.call(arguments),
                o = k.Deferred(),
                a = function(t) {
                    return function(e) {
                        r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i)
                    }
                };
            if (n <= 1 && (W(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
            while (t--) W(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    k.Deferred.exceptionHook = function(e, t) {
        C.console && C.console.warn && e && $.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, k.readyException = function(e) {
        C.setTimeout(function() {
            throw e
        })
    };
    var F = k.Deferred();

    function B() {
        E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), k.ready()
    }
    k.fn.ready = function(e) {
        return F.then(e)["catch"](function(e) {
            k.readyException(e)
        }), this
    }, k.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --k.readyWait : k.isReady) || (k.isReady = !0) !== e && 0 < --k.readyWait || F.resolveWith(E, [k])
        }
    }), k.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(k.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
    var _ = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === w(n))
                for (s in i = !0, n) _(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(k(e), n)
                })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        z = /^-ms-/,
        U = /-([a-z])/g;

    function X(e, t) {
        return t.toUpperCase()
    }

    function V(e) {
        return e.replace(z, "ms-").replace(U, X)
    }
    var G = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function Y() {
        this.expando = k.expando + Y.uid++
    }
    Y.uid = 1, Y.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[V(t)] = n;
            else
                for (r in t) i[V(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in r ? [t] : t.match(R) || []).length;
                    while (n--) delete r[t[n]]
                }(void 0 === t || k.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !k.isEmptyObject(t)
        }
    };
    var Q = new Y,
        J = new Y,
        K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Z = /[A-Z]/g;

    function ee(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : K.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                J.set(e, t, n)
            } else n = void 0;
        return n
    }
    k.extend({
        hasData: function(e) {
            return J.hasData(e) || Q.hasData(e)
        },
        data: function(e, t, n) {
            return J.access(e, t, n)
        },
        removeData: function(e, t) {
            J.remove(e, t)
        },
        _data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        _removeData: function(e, t) {
            Q.remove(e, t)
        }
    }), k.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = J.get(o), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = V(r.slice(5)), ee(o, r, i[r]));
                    Q.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function() {
                J.set(this, n)
            }) : _(this, function(e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = J.get(o, n)) ? t : void 0 !== (t = ee(o, n)) ? t : void 0;
                this.each(function() {
                    J.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                J.remove(this, e)
            })
        }
    }), k.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = Q.get(e, t), n && (!r || Array.isArray(n) ? r = Q.access(e, t, k.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = k.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = k._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                k.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Q.get(e, n) || Q.access(e, n, {
                empty: k.Callbacks("once memory").add(function() {
                    Q.remove(e, [t + "queue", n])
                })
            })
        }
    }), k.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? k.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = k.queue(this, t, n);
                k._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                k.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = k.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--)(n = Q.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
        re = ["Top", "Right", "Bottom", "Left"],
        ie = E.documentElement,
        oe = function(e) {
            return k.contains(e.ownerDocument, e)
        },
        ae = {
            composed: !0
        };
    ie.getRootNode && (oe = function(e) {
        return k.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument
    });
    var se = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === k.css(e, "display")
        },
        ue = function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            for (o in i = n.apply(e, r || []), t) e.style[o] = a[o];
            return i
        };

    function le(e, t, n, r) {
        var i, o, a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return k.css(e, t, "")
            },
            u = s(),
            l = n && n[3] || (k.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (k.cssNumber[t] || "px" !== l && +u) && ne.exec(k.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while (a--) k.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, k.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var ce = {};

    function fe(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Q.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && se(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ce[s]) || (o = a.body.appendChild(a.createElement(s)), u = k.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ce[s] = u)))) : "none" !== n && (l[c] = "none", Q.set(r, "display", n)));
        for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    k.fn.extend({
        show: function() {
            return fe(this, !0)
        },
        hide: function() {
            return fe(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                se(this) ? k(this).show() : k(this).hide()
            })
        }
    });
    var pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i,
        ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function ve(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? k.merge([e], n) : n
    }

    function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"))
    }
    ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;
    var me, xe, be = /<|&#?\w+;/;

    function we(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o)) k.merge(p, o.nodeType ? [o] : o);
                else if (be.test(o)) {
            a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + k.htmlPrefilter(o) + u[2], c = u[0];
            while (c--) a = a.lastChild;
            k.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0;
        while (o = p[d++])
            if (r && -1 < k.inArray(o, r)) i && i.push(o);
            else if (l = oe(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
            c = 0;
            while (o = a[c++]) he.test(o.type || "") && n.push(o)
        }
        return f
    }
    me = E.createDocumentFragment().appendChild(E.createElement("div")), (xe = E.createElement("input")).setAttribute("type", "radio"), xe.setAttribute("checked", "checked"), xe.setAttribute("name", "t"), me.appendChild(xe), y.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked, me.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue;
    var Te = /^key/,
        Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ee = /^([^.]*)(?:\.(.+)|)/;

    function ke() {
        return !0
    }

    function Se() {
        return !1
    }

    function Ne(e, t) {
        return e === function() {
            try {
                return E.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function Ae(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ae(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Se;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) {
            return k().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = k.guid++)), e.each(function() {
            k.event.add(this, t, i, r, n)
        })
    }

    function De(e, i, o) {
        o ? (Q.set(e, i, !1), k.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = Q.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length)(k.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments), Q.set(this, i, r), t = o(this, i), this[i](), r !== (n = Q.get(this, i)) || t ? Q.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value
                } else r.length && (Q.set(this, i, {
                    value: k.event.trigger(k.extend(r[0], k.Event.prototype), r.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === Q.get(e, i) && k.event.add(e, i, ke)
    }
    k.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Q.get(t);
            if (v) {
                n.handler && (n = (o = n).handler, i = o.selector), i && k.find.matchesSelector(ie, i), n.guid || (n.guid = k.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function(e) {
                    return "undefined" != typeof k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0
                }), l = (e = (e || "").match(R) || [""]).length;
                while (l--) d = g = (s = Ee.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = k.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = k.event.special[d] || {}, c = k.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && k.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), k.event.global[d] = !0)
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Q.hasData(e) && Q.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(R) || [""]).length;
                while (l--)
                    if (d = g = (s = Ee.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                        f = k.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                        while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || k.removeEvent(e, d, v.handle), delete u[d])
                    } else
                        for (d in u) k.event.remove(e, d + t[l], n, r, !0);
                k.isEmptyObject(u) && Q.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = k.event.fix(e),
                u = new Array(arguments.length),
                l = (Q.get(this, "events") || {})[s.type] || [],
                c = k.event.special[s.type] || {};
            for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
            if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                a = k.event.handlers.call(this, s, l), t = 0;
                while ((i = a[t++]) && !s.isPropagationStopped()) {
                    s.currentTarget = i.elem, n = 0;
                    while ((o = i.handlers[n++]) && !s.isImmediatePropagationStopped()) s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((k.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, s), s.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < k(i, this).index(l) : k.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    } return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s
        },
        addProp: function(t, e) {
            Object.defineProperty(k.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[k.expando] ? e : new k.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && De(t, "click", ke), !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && De(t, "click"), !0
                },
                _default: function(e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && A(t, "input") && Q.get(t, "click") || A(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, k.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, k.Event = function(e, t) {
        if (!(this instanceof k.Event)) return new k.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ke : Se, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && k.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[k.expando] = !0
    }, k.Event.prototype = {
        constructor: k.Event,
        isDefaultPrevented: Se,
        isPropagationStopped: Se,
        isImmediatePropagationStopped: Se,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = ke, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = ke, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = ke, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, k.each({
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
        "char": !0,
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
        which: function(e) {
            var t = e.button;
            return null == e.which && Te.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, k.event.addProp), k.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        k.event.special[e] = {
            setup: function() {
                return De(this, e, Ne), !1
            },
            trigger: function() {
                return De(this, e), !0
            },
            delegateType: t
        }
    }), k.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        k.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || k.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), k.fn.extend({
        on: function(e, t, n, r) {
            return Ae(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return Ae(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, k(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Se), this.each(function() {
                k.event.remove(this, e, n, t)
            })
        }
    });
    var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        qe = /<script|<style|<link/i,
        Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
        He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Oe(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && k(e).children("tbody")[0] || e
    }

    function Pe(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Re(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Me(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (Q.hasData(e) && (o = Q.access(e), a = Q.set(t, o), l = o.events))
                for (i in delete a.handle, a.events = {}, l)
                    for (n = 0, r = l[i].length; n < r; n++) k.event.add(t, i, l[i][n]);
            J.hasData(e) && (s = J.access(e), u = k.extend({}, s), J.set(t, u))
        }
    }

    function Ie(n, r, i, o) {
        r = g.apply([], r);
        var e, t, a, s, u, l, c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = m(d);
        if (h || 1 < f && "string" == typeof d && !y.checkClone && Le.test(d)) return n.each(function(e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), Ie(t, r, i, o)
        });
        if (f && (t = (e = we(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = k.map(ve(e, "script"), Pe)).length; c < f; c++) u = e, c !== p && (u = k.clone(u, !0, !0), s && k.merge(a, ve(u, "script"))), i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument, k.map(a, Re), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Q.access(u, "globalEval") && k.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? k._evalUrl && !u.noModule && k._evalUrl(u.src, {
                    nonce: u.nonce || u.getAttribute("nonce")
                }) : b(u.textContent.replace(He, ""), u, l))
        }
        return n
    }

    function We(e, t, n) {
        for (var r, i = t ? k.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || k.cleanData(ve(r)), r.parentNode && (n && oe(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    k.extend({
        htmlPrefilter: function(e) {
            return e.replace(je, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0),
                f = oe(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e)))
                for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Me(o[r], a[r]);
                else Me(e, c);
            return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, r, i = k.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (G(n)) {
                    if (t = n[Q.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
                        n[Q.expando] = void 0
                    }
                    n[J.expando] && (n[J.expando] = void 0)
                }
        }
    }), k.fn.extend({
        detach: function(e) {
            return We(this, e, !0)
        },
        remove: function(e) {
            return We(this, e)
        },
        text: function(e) {
            return _(this, function(e) {
                return void 0 === e ? k.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Ie(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Ie(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Oe(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Ie(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Ie(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (k.cleanData(ve(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return k.clone(this, e, t)
            })
        },
        html: function(e) {
            return _(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !qe.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = k.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (k.cleanData(ve(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return Ie(this, arguments, function(e) {
                var t = this.parentNode;
                k.inArray(this, n) < 0 && (k.cleanData(ve(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), k.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        k.fn[e] = function(e) {
            for (var t, n = [], r = k(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), k(r[o])[a](t), u.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var $e = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
        Fe = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = C), t.getComputedStyle(e)
        },
        Be = new RegExp(re.join("|"), "i");

    function _e(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Fe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || oe(e) || (a = k.style(e, t)), !y.pixelBoxStyles() && $e.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function ze(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function e() {
            if (u) {
                s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(s).appendChild(u);
                var e = C.getComputedStyle(u);
                n = "1%" !== e.top, a = 12 === t(e.marginLeft), u.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), u.style.position = "absolute", i = 12 === t(u.offsetWidth / 3), ie.removeChild(s), u = null
            }
        }

        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, i, o, a, s = E.createElement("div"),
            u = E.createElement("div");
        u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === u.style.backgroundClip, k.extend(y, {
            boxSizingReliable: function() {
                return e(), r
            },
            pixelBoxStyles: function() {
                return e(), o
            },
            pixelPosition: function() {
                return e(), n
            },
            reliableMarginLeft: function() {
                return e(), a
            },
            scrollboxSize: function() {
                return e(), i
            }
        }))
    }();
    var Ue = ["Webkit", "Moz", "ms"],
        Xe = E.createElement("div").style,
        Ve = {};

    function Ge(e) {
        var t = k.cssProps[e] || Ve[e];
        return t || (e in Xe ? e : Ve[e] = function(e) {
            var t = e[0].toUpperCase() + e.slice(1),
                n = Ue.length;
            while (n--)
                if ((e = Ue[n] + t) in Xe) return e
        }(e) || e)
    }
    var Ye = /^(none|table(?!-c[ea]).+)/,
        Qe = /^--/,
        Je = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ke = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function Ze(e, t, n) {
        var r = ne.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function et(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += k.css(e, n + re[a], !0, i)), r ? ("content" === n && (u -= k.css(e, "padding" + re[a], !0, i)), "margin" !== n && (u -= k.css(e, "border" + re[a] + "Width", !0, i))) : (u += k.css(e, "padding" + re[a], !0, i), "padding" !== n ? u += k.css(e, "border" + re[a] + "Width", !0, i) : s += k.css(e, "border" + re[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
    }

    function tt(e, t, n) {
        var r = Fe(e),
            i = (!y.boxSizingReliable() || n) && "border-box" === k.css(e, "boxSizing", !1, r),
            o = i,
            a = _e(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if ($e.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!y.boxSizingReliable() && i || "auto" === a || !parseFloat(a) && "inline" === k.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === k.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + et(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }

    function nt(e, t, n, r, i) {
        return new nt.prototype.init(e, t, n, r, i)
    }
    k.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = _e(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
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
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = V(t),
                    u = Qe.test(t),
                    l = e.style;
                if (u || (t = Ge(s)), a = k.cssHooks[t] || k.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = ne.exec(n)) && i[1] && (n = le(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (k.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = V(t);
            return Qe.test(t) || (t = Ge(s)), (a = k.cssHooks[t] || k.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = _e(e, t, r)), "normal" === i && t in Ke && (i = Ke[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), k.each(["height", "width"], function(e, u) {
        k.cssHooks[u] = {
            get: function(e, t, n) {
                if (t) return !Ye.test(k.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, u, n) : ue(e, Je, function() {
                    return tt(e, u, n)
                })
            },
            set: function(e, t, n) {
                var r, i = Fe(e),
                    o = !y.scrollboxSize() && "absolute" === i.position,
                    a = (o || n) && "border-box" === k.css(e, "boxSizing", !1, i),
                    s = n ? et(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - et(e, u, "border", !1, i) - .5)), s && (r = ne.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = k.css(e, u)), Ze(0, t, s)
            }
        }
    }), k.cssHooks.marginLeft = ze(y.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(_e(e, "marginLeft")) || e.getBoundingClientRect().left - ue(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), k.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        k.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + re[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, "margin" !== i && (k.cssHooks[i + o].set = Ze)
    }), k.fn.extend({
        css: function(e, t) {
            return _(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = Fe(e), i = t.length; a < i; a++) o[t[a]] = k.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? k.style(e, t, n) : k.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((k.Tween = nt).prototype = {
        constructor: nt,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || k.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (k.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = nt.propHooks[this.prop];
            return e && e.get ? e.get(this) : nt.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = nt.propHooks[this.prop];
            return this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : nt.propHooks._default.set(this), this
        }
    }).init.prototype = nt.prototype, (nt.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = k.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !k.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)] ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = nt.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, k.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, k.fx = nt.prototype.init, k.fx.step = {};
    var rt, it, ot, at, st = /^(?:toggle|show|hide)$/,
        ut = /queueHooks$/;

    function lt() {
        it && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(lt) : C.setTimeout(lt, k.fx.interval), k.fx.tick())
    }

    function ct() {
        return C.setTimeout(function() {
            rt = void 0
        }), rt = Date.now()
    }

    function ft(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = re[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function pt(e, t, n) {
        for (var r, i = (dt.tweeners[t] || []).concat(dt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function dt(o, e, t) {
        var n, a, r = 0,
            i = dt.prefilters.length,
            s = k.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (a) return !1;
                for (var e = rt || ct(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
                return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
            },
            l = s.promise({
                elem: o,
                props: k.extend({}, e),
                opts: k.extend(!0, {
                    specialEasing: {},
                    easing: k.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: rt || ct(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = k.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(n), n
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) l.tweens[t].run(1);
                    return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
                }
            }),
            c = l.props;
        for (! function(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (i = t[r = V(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = k.cssHooks[r]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, l.opts.specialEasing); r < i; r++)
            if (n = dt.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (k._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return k.map(c, pt, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), k.fx.timer(k.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })), l
    }
    k.Animation = k.extend(dt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return le(n.elem, e, ne.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            m(e) ? (t = e, e = ["*"]) : e = e.match(R);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], dt.tweeners[n] = dt.tweeners[n] || [], dt.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                p = this,
                d = {},
                h = e.style,
                g = e.nodeType && se(e),
                v = Q.get(e, "fxshow");
            for (r in n.queue || (null == (a = k._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || s()
                }), a.unqueued++, p.always(function() {
                    p.always(function() {
                        a.unqueued--, k.queue(e, "fx").length || a.empty.fire()
                    })
                })), t)
                if (i = t[r], st.test(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r]) continue;
                        g = !0
                    }
                    d[r] = v && v[r] || k.style(e, r)
                } if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Q.get(e, "display")), "none" === (c = k.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = k.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === k.css(e, "float") && (u || (p.done(function() {
                        h.display = l
                    }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                    })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Q.access(e, "fxshow", {
                    display: l
                }), o && (v.hidden = !g), g && fe([e], !0), p.done(function() {
                    for (r in g || fe([e]), Q.remove(e, "fxshow"), d) k.style(e, r, d[r])
                })), u = pt(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
        }],
        prefilter: function(e, t) {
            t ? dt.prefilters.unshift(e) : dt.prefilters.push(e)
        }
    }), k.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? k.extend({}, e) : {
            complete: n || !n && t || m(e) && e,
            duration: e,
            easing: n && t || t && !m(t) && t
        };
        return k.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in k.fx.speeds ? r.duration = k.fx.speeds[r.duration] : r.duration = k.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            m(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue)
        }, r
    }, k.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(se).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = k.isEmptyObject(t),
                o = k.speed(e, n, r),
                a = function() {
                    var e = dt(this, k.extend({}, t), o);
                    (i || Q.get(this, "finish")) && e.stop(!0)
                };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = void 0), e && !1 !== i && this.queue(i || "fx", []), this.each(function() {
                var e = !0,
                    t = null != i && i + "queueHooks",
                    n = k.timers,
                    r = Q.get(this);
                if (t) r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && ut.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || k.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var e, t = Q.get(this),
                    n = t[a + "queue"],
                    r = t[a + "queueHooks"],
                    i = k.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, k.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), k.each(["toggle", "show", "hide"], function(e, r) {
        var i = k.fn[r];
        k.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(ft(r, !0), e, t, n)
        }
    }), k.each({
        slideDown: ft("show"),
        slideUp: ft("hide"),
        slideToggle: ft("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        k.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), k.timers = [], k.fx.tick = function() {
        var e, t = 0,
            n = k.timers;
        for (rt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || k.fx.stop(), rt = void 0
    }, k.fx.timer = function(e) {
        k.timers.push(e), k.fx.start()
    }, k.fx.interval = 13, k.fx.start = function() {
        it || (it = !0, lt())
    }, k.fx.stop = function() {
        it = null
    }, k.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, k.fn.delay = function(r, e) {
        return r = k.fx && k.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function() {
                C.clearTimeout(n)
            }
        })
    }, ot = E.createElement("input"), at = E.createElement("select").appendChild(E.createElement("option")), ot.type = "checkbox", y.checkOn = "" !== ot.value, y.optSelected = at.selected, (ot = E.createElement("input")).value = "t", ot.type = "radio", y.radioValue = "t" === ot.value;
    var ht, gt = k.expr.attrHandle;
    k.fn.extend({
        attr: function(e, t) {
            return _(this, k.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                k.removeAttr(this, e)
            })
        }
    }), k.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? k.prop(e, t, n) : (1 === o && k.isXMLDoc(e) || (i = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? ht : void 0)), void 0 !== n ? null === n ? void k.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = k.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!y.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(R);
            if (i && 1 === e.nodeType)
                while (n = i[r++]) e.removeAttribute(n)
        }
    }), ht = {
        set: function(e, t, n) {
            return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, k.each(k.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = gt[t] || k.find.attr;
        gt[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = gt[o], gt[o] = r, r = null != a(e, t, n) ? o : null, gt[o] = i), r
        }
    });
    var vt = /^(?:input|select|textarea|button)$/i,
        yt = /^(?:a|area)$/i;

    function mt(e) {
        return (e.match(R) || []).join(" ")
    }

    function xt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function bt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(R) || []
    }
    k.fn.extend({
        prop: function(e, t) {
            return _(this, k.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[k.propFix[e] || e]
            })
        }
    }), k.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && k.isXMLDoc(e) || (t = k.propFix[t] || t, i = k.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = k.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : vt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), y.optSelected || (k.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        k.propFix[this.toLowerCase()] = this
    }), k.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function(e) {
                k(this).addClass(t.call(this, e, xt(this)))
            });
            if ((e = bt(t)).length)
                while (n = this[u++])
                    if (i = xt(n), r = 1 === n.nodeType && " " + mt(i) + " ") {
                        a = 0;
                        while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = mt(r)) && n.setAttribute("class", s)
                    } return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function(e) {
                k(this).removeClass(t.call(this, e, xt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = bt(t)).length)
                while (n = this[u++])
                    if (i = xt(n), r = 1 === n.nodeType && " " + mt(i) + " ") {
                        a = 0;
                        while (o = e[a++])
                            while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " ");
                        i !== (s = mt(r)) && n.setAttribute("class", s)
                    } return this
        },
        toggleClass: function(i, t) {
            var o = typeof i,
                a = "string" === o || Array.isArray(i);
            return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function(e) {
                k(this).toggleClass(i.call(this, e, xt(this), t), t)
            }) : this.each(function() {
                var e, t, n, r;
                if (a) {
                    t = 0, n = k(this), r = bt(i);
                    while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e)
                } else void 0 !== i && "boolean" !== o || ((e = xt(this)) && Q.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Q.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + mt(xt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var wt = /\r/g;
    k.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = m(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, k(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = k.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (r = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(wt, "") : null == e ? "" : e : void 0
        }
    }), k.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = k.find.attr(e, "value");
                    return null != t ? t : mt(k.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = k(n).val(), a) return t;
                            s.push(t)
                        } return s
                },
                set: function(e, t) {
                    var n, r, i = e.options,
                        o = k.makeArray(t),
                        a = i.length;
                    while (a--)((r = i[a]).selected = -1 < k.inArray(k.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), k.each(["radio", "checkbox"], function() {
        k.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < k.inArray(k(e).val(), t)
            }
        }, y.checkOn || (k.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), y.focusin = "onfocusin" in C;
    var Tt = /^(?:focusinfocus|focusoutblur)$/,
        Ct = function(e) {
            e.stopPropagation()
        };
    k.extend(k.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || E],
                d = v.call(e, "type") ? e.type : e,
                h = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !Tt.test(d + k.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[k.expando] ? e : new k.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : k.makeArray(t, [e]), c = k.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d, Tt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Q.get(o, "events") || {})[e.type] && Q.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && G(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !G(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), k.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, Ct), n[d](), e.isPropagationStopped() && f.removeEventListener(d, Ct), k.event.triggered = void 0, a && (n[u] = a)), e.result
            }
        },
        simulate: function(e, t, n) {
            var r = k.extend(new k.Event, n, {
                type: e,
                isSimulated: !0
            });
            k.event.trigger(r, null, t)
        }
    }), k.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                k.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return k.event.trigger(e, t, n, !0)
        }
    }), y.focusin || k.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var i = function(e) {
            k.event.simulate(r, e.target, k.event.fix(e))
        };
        k.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this,
                    t = Q.access(e, r);
                t || e.addEventListener(n, i, !0), Q.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this,
                    t = Q.access(e, r) - 1;
                t ? Q.access(e, r, t) : (e.removeEventListener(n, i, !0), Q.remove(e, r))
            }
        }
    });
    var Et = C.location,
        kt = Date.now(),
        St = /\?/;
    k.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + e), t
    };
    var Nt = /\[\]$/,
        At = /\r?\n/g,
        Dt = /^(?:submit|button|image|reset|file)$/i,
        jt = /^(?:input|select|textarea|keygen)/i;

    function qt(n, e, r, i) {
        var t;
        if (Array.isArray(e)) k.each(e, function(e, t) {
            r || Nt.test(n) ? i(n, t) : qt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
        });
        else if (r || "object" !== w(e)) i(n, e);
        else
            for (t in e) qt(n + "[" + t + "]", e[t], r, i)
    }
    k.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = m(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !k.isPlainObject(e)) k.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) qt(n, e[n], t, i);
        return r.join("&")
    }, k.fn.extend({
        serialize: function() {
            return k.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = k.prop(this, "elements");
                return e ? k.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !k(this).is(":disabled") && jt.test(this.nodeName) && !Dt.test(e) && (this.checked || !pe.test(e))
            }).map(function(e, t) {
                var n = k(this).val();
                return null == n ? null : Array.isArray(n) ? k.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(At, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(At, "\r\n")
                }
            }).get()
        }
    });
    var Lt = /%20/g,
        Ht = /#.*$/,
        Ot = /([?&])_=[^&]*/,
        Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Rt = /^(?:GET|HEAD)$/,
        Mt = /^\/\//,
        It = {},
        Wt = {},
        $t = "*/".concat("*"),
        Ft = E.createElement("a");

    function Bt(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0,
                i = e.toLowerCase().match(R) || [];
            if (m(t))
                while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function _t(t, i, o, a) {
        var s = {},
            u = t === Wt;

        function l(e) {
            var r;
            return s[e] = !0, k.each(t[e] || [], function(e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
            }), r
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }

    function zt(e, t) {
        var n, r, i = k.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && k.extend(!0, e, r), e
    }
    Ft.href = Et.href, k.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Et.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $t,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": k.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? zt(zt(e, k.ajaxSettings), t) : zt(k.ajaxSettings, e)
        },
        ajaxPrefilter: Bt(It),
        ajaxTransport: Bt(Wt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, f, p, n, d, r, h, g, i, o, v = k.ajaxSetup({}, t),
                y = v.context || v,
                m = v.context && (y.nodeType || y.jquery) ? k(y) : k.event,
                x = k.Deferred(),
                b = k.Callbacks("once memory"),
                w = v.statusCode || {},
                a = {},
                s = {},
                u = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (h) {
                            if (!n) {
                                n = {};
                                while (t = Pt.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
                            }
                            t = n[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return h ? p : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == h && (v.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (h) T.always(e[T.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || u;
                        return c && c.abort(t), l(0, t), this
                    }
                };
            if (x.promise(T), v.url = ((e || v.url || Et.href) + "").replace(Mt, Et.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(R) || [""], null == v.crossDomain) {
                r = E.createElement("a");
                try {
                    r.href = v.url, r.href = r.href, v.crossDomain = Ft.protocol + "//" + Ft.host != r.protocol + "//" + r.host
                } catch (e) {
                    v.crossDomain = !0
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = k.param(v.data, v.traditional)), _t(It, v, t, T), h) return T;
            for (i in (g = k.event && v.global) && 0 == k.active++ && k.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Rt.test(v.type), f = v.url.replace(Ht, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Lt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (St.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Ot, "$1"), o = (St.test(f) ? "&" : "?") + "_=" + kt++ + o), v.url = f + o), v.ifModified && (k.lastModified[f] && T.setRequestHeader("If-Modified-Since", k.lastModified[f]), k.etag[f] && T.setRequestHeader("If-None-Match", k.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
            if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = _t(Wt, v, t, T)) {
                if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
                v.async && 0 < v.timeout && (d = C.setTimeout(function() {
                    T.abort("timeout")
                }, v.timeout));
                try {
                    h = !1, c.send(a, l)
                } catch (e) {
                    if (h) throw e;
                    l(-1, e)
                }
            } else l(-1, "No Transport");

            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
                    var r, i, o, a, s = e.contents,
                        u = e.dataTypes;
                    while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            } if (u[0] in n) o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o]
                }(v, T, n)), s = function(e, t, n, r) {
                    var i, o, a, s, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) {
                        if (!(a = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                    !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                    break
                                } if (!0 !== a)
                            if (a && e["throws"]) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + u + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (k.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (k.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --k.active || k.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return k.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return k.get(e, void 0, t, "script")
        }
    }), k.each(["get", "post"], function(e, i) {
        k[i] = function(e, t, n, r) {
            return m(t) && (r = r || n, n = t, t = void 0), k.ajax(k.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, k.isPlainObject(e) && e))
        }
    }), k._evalUrl = function(e, t) {
        return k.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                k.globalEval(e, t)
            }
        })
    }, k.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (m(e) && (e = e.call(this[0])), t = k(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(n) {
            return m(n) ? this.each(function(e) {
                k(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = k(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = m(t);
            return this.each(function(e) {
                k(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                k(this).replaceWith(this.childNodes)
            }), this
        }
    }), k.expr.pseudos.hidden = function(e) {
        return !k.expr.pseudos.visible(e)
    }, k.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, k.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    };
    var Ut = {
            0: 200,
            1223: 204
        },
        Xt = k.ajaxSettings.xhr();
    y.cors = !!Xt && "withCredentials" in Xt, y.ajax = Xt = !!Xt, k.ajaxTransport(function(i) {
        var o, a;
        if (y.cors || Xt && !i.crossDomain) return {
            send: function(e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                    for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function(e) {
                    return function() {
                        o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Ut[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                            binary: r.response
                        } : {
                            text: r.responseText
                        }, r.getAllResponseHeaders()))
                    }
                }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                    4 === r.readyState && C.setTimeout(function() {
                        o && a()
                    })
                }, o = o("abort");
                try {
                    r.send(i.hasContent && i.data || null)
                } catch (e) {
                    if (o) throw e
                }
            },
            abort: function() {
                o && o()
            }
        }
    }), k.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), k.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return k.globalEval(e), e
            }
        }
    }), k.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), k.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function(e, t) {
                r = k("<script>").attr(n.scriptAttrs || {}).prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", i = function(e) {
                    r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), E.head.appendChild(r[0])
            },
            abort: function() {
                i && i()
            }
        }
    });
    var Vt, Gt = [],
        Yt = /(=)\?(?=&|$)|\?\?/;
    k.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Gt.pop() || k.expando + "_" + kt++;
            return this[e] = !0, e
        }
    }), k.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Yt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Yt, "$1" + r) : !1 !== e.jsonp && (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return o || k.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", i = C[r], C[r] = function() {
            o = arguments
        }, n.always(function() {
            void 0 === i ? k(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Gt.push(r)), o && m(i) && i(o[0]), o = i = void 0
        }), "script"
    }), y.createHTMLDocument = ((Vt = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Vt.childNodes.length), k.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = D.exec(e)) ? [t.createElement(i[1])] : (i = we([e], t, o), o && o.length && k(o).remove(), k.merge([], i.childNodes)));
        var r, i, o
    }, k.fn.load = function(e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return -1 < s && (r = mt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && k.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        k.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), k.expr.pseudos.animated = function(t) {
        return k.grep(k.timers, function(e) {
            return t === e.elem
        }).length
    }, k.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = k.css(e, "position"),
                c = k(e),
                f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = k.css(e, "top"), u = k.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, k.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, k.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                k.offset.setOffset(this, t, e)
            });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === k.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === k.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = k(e).offset()).top += k.css(e, "borderTopWidth", !0), i.left += k.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - k.css(r, "marginTop", !0),
                    left: t.left - i.left - k.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while (e && "static" === k.css(e, "position")) e = e.offsetParent;
                return e || ie
            })
        }
    }), k.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        k.fn[t] = function(e) {
            return _(this, function(e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), k.each(["top", "left"], function(e, n) {
        k.cssHooks[n] = ze(y.pixelPosition, function(e, t) {
            if (t) return t = _e(e, n), $e.test(t) ? k(e).position()[n] + "px" : t
        })
    }), k.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        k.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r, o) {
            k.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return _(this, function(e, t, n) {
                    var r;
                    return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? k.css(e, t, i) : k.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }), k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        k.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), k.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), k.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), k.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function() {
            return e.apply(t || this, r.concat(s.call(arguments)))
        }).guid = e.guid = e.guid || k.guid++, i
    }, k.holdReady = function(e) {
        e ? k.readyWait++ : k.ready(!0)
    }, k.isArray = Array.isArray, k.parseJSON = JSON.parse, k.nodeName = A, k.isFunction = m, k.isWindow = x, k.camelCase = V, k.type = w, k.now = Date.now, k.isNumeric = function(e) {
        var t = k.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return k
    });
    var Qt = C.jQuery,
        Jt = C.$;
    return k.noConflict = function(e) {
        return C.$ === k && (C.$ = Jt), e && C.jQuery === k && (C.jQuery = Qt), k
    }, e || (C.jQuery = C.$ = k), k
});
yii = function(e) {
    var t = {
        reloadableScripts: [],
        clickableSelector: 'a, button, input[type="submit"], input[type="button"], input[type="reset"], input[type="image"]',
        changeableSelector: "select, input, textarea",
        getCsrfParam: function() {
            return e("meta[name=csrf-param]").attr("content")
        },
        getCsrfToken: function() {
            return e("meta[name=csrf-token]").attr("content")
        },
        setCsrfToken: function(t, o) {
            e("meta[name=csrf-param]").attr("content", t), e("meta[name=csrf-token]").attr("content", o)
        },
        refreshCsrfToken: function() {
            var o = t.getCsrfToken();
            o && e('form input[name="' + t.getCsrfParam() + '"]').val(o)
        },
        confirm: function(e, t, o) {
            confirm(e) ? !t || t() : !o || o()
        },
        handleAction: function(o, i) {
            var s, n = o.attr("data-form") ? e("#" + o.attr("data-form")) : o.closest("form"),
                a = !o.data("method") && n ? n.attr("method") : o.data("method"),
                r = o.attr("href"),
                l = o.data("params"),
                c = o.data("pjax"),
                d = !!o.data("pjax-push-state"),
                p = !!o.data("pjax-replace-state"),
                u = o.data("pjax-timeout"),
                h = o.data("pjax-scrollto"),
                f = o.data("pjax-push-redirect"),
                m = o.data("pjax-replace-redirect"),
                v = o.data("pjax-skip-outer-containers"),
                g = {};
            if (void 0 !== c && e.support.pjax && ((s = o.data("pjax-container") ? o.data("pjax-container") : o.closest('[data-pjax-container=""]')).length || (s = e("body")), g = {
                    container: s,
                    push: d,
                    replace: p,
                    scrollTo: h,
                    pushRedirect: f,
                    replaceRedirect: m,
                    pjaxSkipOuterContainers: v,
                    timeout: u,
                    originalEvent: i,
                    originalTarget: o
                }), void 0 !== a) {
                var w = !n.length;
                if (w) {
                    r && r.match(/(^\/|:\/\/)/) || (r = window.location.href), n = e("<form/>", {
                        method: a,
                        action: r
                    });
                    var y = o.attr("target");
                    if (y && n.attr("target", y), a.match(/(get|post)/i) || (n.append(e("<input/>", {
                            name: "_method",
                            value: a,
                            type: "hidden"
                        })), a = "POST"), !a.match(/(get|head|options)/i)) {
                        var $ = t.getCsrfParam();
                        $ && n.append(e("<input/>", {
                            name: $,
                            value: t.getCsrfToken(),
                            type: "hidden"
                        }))
                    }
                    n.hide().appendTo("body")
                }
                var k = n.data("yiiActiveForm");
                k && (k.submitObject = o), l && e.isPlainObject(l) && e.each(l, function(t, o) {
                    n.append(e("<input/>").attr({
                        name: t,
                        value: o,
                        type: "hidden"
                    }))
                });
                var b = n.attr("method");
                n.attr("method", a);
                var T = null;
                r && "#" != r && (T = n.attr("action"), n.attr("action", r)), void 0 !== c && e.support.pjax && n.on("submit", function(t) {
                    e.pjax.submit(t, g)
                }), n.trigger("submit"), e.when(n.data("yiiSubmitFinalizePromise")).then(function() {
                    null != T && n.attr("action", T), n.attr("method", b), l && e.isPlainObject(l) && e.each(l, function(t, o) {
                        e('input[name="' + t + '"]', n).remove()
                    }), w && n.remove()
                })
            } else r && "#" != r ? void 0 !== c && e.support.pjax ? e.pjax.click(i, g) : window.location = r : o.is(":submit") && n.length && (void 0 !== c && e.support.pjax && n.on("submit", function(t) {
                e.pjax.submit(t, g)
            }), n.trigger("submit"))
        },
        getQueryParams: function(t) {
            var o = t.indexOf("?");
            if (0 > o) return {};
            var i, s, n = t.substring(o + 1).split("#")[0].split("&"),
                a = {};
            for (s = 0; s < n.length; s++) {
                i = n[s].split("=");
                var r = decodeURIComponent(i[0]),
                    l = decodeURIComponent(i[1]);
                r.length && (void 0 !== a[r] ? (e.isArray(a[r]) || (a[r] = [a[r]]), a[r].push(l || "")) : a[r] = l || "")
            }
            return a
        },
        initModule: function(o) {
            (void 0 === o.isActive || o.isActive) && (e.isFunction(o.init) && o.init(), e.each(o, function() {
                e.isPlainObject(this) && t.initModule(this)
            }))
        },
        init: function() {
            e.ajaxPrefilter(function(e, o, i) {
                    !e.crossDomain && t.getCsrfParam() && i.setRequestHeader("X-CSRF-Token", t.getCsrfToken())
                }), t.refreshCsrfToken(), e(document).ajaxComplete(function(e, t, o) {
                    var i = t && t.getResponseHeader("X-Redirect");
                    i && (window.location = i)
                }),
                function() {
                    var o = location.protocol + "//" + location.host,
                        i = e("script[src]").map(function() {
                            return "/" === this.src.charAt(0) ? o + this.src : this.src
                        }).toArray();
                    e.ajaxPrefilter("script", function(s, n, a) {
                        if ("jsonp" != s.dataType) {
                            var r = "/" === s.url.charAt(0) ? o + s.url : s.url; - 1 === e.inArray(r, i) ? i.push(r) : -1 !== e.inArray(r, e.map(t.reloadableScripts, function(e) {
                                return "/" === e.charAt(0) ? o + e : e
                            })) || a.abort()
                        }
                    }), e(document).ajaxComplete(function(o, i, s) {
                        var n = [];
                        e("link[rel=stylesheet]").each(function() {
                            -1 === e.inArray(this.href, t.reloadableScripts) && (-1 == e.inArray(this.href, n) ? n.push(this.href) : e(this).remove())
                        })
                    })
                }(),
                function() {
                    var o = function(o) {
                        var i = e(this),
                            s = i.data("method"),
                            n = i.data("confirm"),
                            a = i.data("form");
                        return void 0 === s && void 0 === n && void 0 === a || (void 0 !== n ? e.proxy(t.confirm, this)(n, function() {
                            t.handleAction(i, o)
                        }) : t.handleAction(i, o), o.stopImmediatePropagation(), !1)
                    };
                    e(document).on("click.yii", t.clickableSelector, o).on("change.yii", t.changeableSelector, o)
                }()
        }
    };
    return t
}(jQuery), jQuery(document).ready(function() {
    yii.initModule(yii)
});
var checkUrl = window.location.href.split("#");
checkUrl.length > 1 && "_=_" == checkUrl[1] && history.replaceState({}, document.title, checkUrl[0]),
    function(e, t) {
        "use strict";
        var o = 0,
            i = [9, 13, 17, 19, 20, 27, 33, 34, 35, 36, 37, 39, 44, 92, 113, 114, 115, 118, 119, 120, 122, 123, 144, 145],
            s = ["source", "empty", "limit", "cache", "cacheExpires", "focusOpen", "selectFirst", "changeWhenSelect", "highlightMatches", "ignoredKeyCode", "customLabel", "customValue", "template", "offset", "combine", "callback", "minLength", "delay"],
            n = t.navigator.userAgent || t.navigator.vendor || t.opera,
            a = /Firefox/i.test(n),
            r = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(n),
            l = a && r,
            c = null,
            d = null,
            p = "autocompleterCache",
            u = function() {
                var e = void 0 !== t.localStorage;
                if (e) try {
                    localStorage.setItem("autocompleter", "autocompleter"), localStorage.removeItem("autocompleter")
                } catch (t) {
                    e = !1
                }
                return e
            }(),
            h = {
                source: null,
                asLocal: !1,
                empty: !0,
                limit: 10,
                minLength: 0,
                delay: 0,
                customClass: [],
                cache: !0,
                cacheExpires: 86400,
                focusOpen: !0,
                hint: !1,
                selectFirst: !1,
                changeWhenSelect: !0,
                highlightMatches: !1,
                ignoredKeyCode: [],
                customLabel: !1,
                customValue: !1,
                template: !1,
                offset: !1,
                combine: null,
                callback: e.noop
            },
            f = {
                defaults: function(t) {
                    return h = e.extend(h, t || {}), "object" != typeof this || e(this)
                },
                option: function(t) {
                    return e(this).each(function(o, i) {
                        var n = e(i).next(".autocompleter").data("autocompleter");
                        for (var a in t) - 1 !== e.inArray(a, s) && (n[a] = t[a])
                    })
                },
                open: function() {
                    return e(this).each(function(t, o) {
                        var i = e(o).next(".autocompleter").data("autocompleter");
                        i && x(null, i)
                    })
                },
                close: function() {
                    return e(this).each(function(t, o) {
                        var i = e(o).next(".autocompleter").data("autocompleter");
                        i && A(null, i)
                    })
                },
                clearCache: function() {
                    M()
                },
                destroy: function() {
                    return e(this).each(function(t, o) {
                        var i = e(o).next(".autocompleter").data("autocompleter");
                        i && (i.jqxhr && i.jqxhr.abort(), i.$autocompleter.hasClass("open") && i.$autocompleter.find(".autocompleter-selected").trigger("click.autocompleter"), i.originalAutocomplete ? i.$node.attr("autocomplete", i.originalAutocomplete) : i.$node.removeAttr("autocomplete"), i.$node.off(".autocompleter").removeClass("autocompleter-node"), i.$autocompleter.off(".autocompleter").remove())
                    })
                }
            };

        function m(t, i) {
            if (!t.hasClass("autocompleter-node")) {
                "string" != typeof(i = e.extend({}, i, t.data("autocompleter-options"))).source || ".json" !== i.source.slice(-5) && !0 !== i.asLocal || e.ajax({
                    url: i.source,
                    type: "GET",
                    dataType: "json",
                    async: !1
                }).done(function(e) {
                    i.source = e
                });
                var s = '<div class="autocompleter ' + i.customClass.join(" ") + '" id="autocompleter-' + (o + 1) + '">';
                i.hint && (s += '<div class="autocompleter-hint"></div>'), s += '<ul class="autocompleter-list"></ul>', s += "</div>", t.addClass("autocompleter-node").after(s);
                var n = t.next(".autocompleter").eq(0),
                    a = t.attr("autocomplete");
                t.attr("autocomplete", "off");
                var r = e.extend({
                    $node: t,
                    $autocompleter: n,
                    $selected: null,
                    $list: null,
                    index: -1,
                    hintText: !1,
                    source: !1,
                    jqxhr: !1,
                    response: null,
                    focused: !1,
                    query: "",
                    originalAutocomplete: a,
                    guid: o++
                }, i);
                r.$autocompleter.on("mousedown.autocompleter", ".autocompleter-item", r, j).data("autocompleter", r), r.$node.on("keyup.autocompleter", r, $).on("keydown.autocompleter", r, k).on("focus.autocompleter", r, b).on("blur.autocompleter", r, T).on("mousedown.autocompleter", r, S)
            }
        }

        function v(t) {
            clearTimeout(d), t.query = e.trim(t.$node.val()), !t.empty && 0 === t.query.length || t.minLength && t.query.length < t.minLength ? w(t) : t.delay ? d = setTimeout(function() {
                g(t)
            }, t.delay) : g(t)
        }

        function g(t) {
            if ("object" == typeof t.source) {
                w(t);
                var o = function(e, t, o) {
                    var i = [];
                    if (e = e.toUpperCase(), t.length)
                        for (var s = 0; s < 2; s++)
                            for (var n in t)
                                if (i.length < o.limit) {
                                    var a = o.customLabel && t[n][o.customLabel] ? t[n][o.customLabel] : t[n].label;
                                    switch (s) {
                                        case 0:
                                            0 === a.toUpperCase().search(e) && (i.push(t[n]), delete t[n]);
                                            break;
                                        case 1:
                                            -1 !== a.toUpperCase().search(e) && (i.push(t[n]), delete t[n])
                                    }
                                } return i
                }(t.query, function(e) {
                    var t;
                    if (null === e || "object" != typeof e) return e;
                    for (var o in t = e.constructor(), e) e.hasOwnProperty(o) && (t[o] = e[o]);
                    return t
                }(t.source), t);
                o.length && y(o, t)
            } else {
                t.jqxhr && t.jqxhr.abort();
                var i = {
                    limit: t.limit,
                    query: t.query
                };
                "function" == typeof t.combine && (i = t.combine(i)), t.jqxhr = e.ajax({
                    url: t.source,
                    dataType: "json",
                    crossDomain: !0,
                    data: i,
                    beforeSend: function(e) {
                        if (t.$autocompleter.addClass("autocompleter-ajax"), w(t), t.cache) {
                            var o = function(e, t) {
                                var o, i = !1;
                                if (t = t || !1, !e) return !1;
                                return !(!(o = D[e]) || !o.value) && (i = o.value, !(o.timestamp && t && +new Date - o.timestamp > 1e3 * t) && i)
                            }(this.url, t.cacheExpires);
                            o && (e.abort(), y(o, t))
                        }
                    }
                }).done(function(e) {
                    t.offset && (e = function(e, t) {
                        t = t.split(".");
                        for (; e && t.length;) e = e[t.shift()];
                        return e
                    }(e, t.offset)), t.cache && function(e, t) {
                        if (!u) return;
                        if (e && t) {
                            D[e] = {
                                value: t,
                                timestamp: +new Date
                            };
                            try {
                                localStorage.setItem(p, JSON.stringify(D))
                            } catch (e) {
                                var o = e.code || e.number || e.message;
                                if (22 !== o) throw e;
                                M()
                            }
                        }
                    }(this.url, e), y(e, t)
                }).always(function() {
                    t.$autocompleter.removeClass("autocompleter-ajax")
                })
            }
        }

        function w(e) {
            e.response = null, e.$list = null, e.$selected = null, e.index = 0, e.$autocompleter.find(".autocompleter-list").empty(), e.$autocompleter.find(".autocompleter-hint").removeClass("autocompleter-hint-show").empty(), e.hintText = !1, A(null, e)
        }

        function y(t, o) {
            ! function(t, o) {
                for (var i = "", s = 0, n = t.length; s < n; s++) {
                    var a = ["autocompleter-item"],
                        r = new RegExp(o.query, "gi");
                    o.selectFirst && 0 === s && !o.changeWhenSelect && a.push("autocompleter-item-selected");
                    var l = o.customLabel && t[s][o.customLabel] ? t[s][o.customLabel] : t[s].label,
                        c = l;
                    l = o.highlightMatches ? l.replace(r, "<strong>$&</strong>") : l;
                    var d = o.customValue && t[s][o.customValue] ? t[s][o.customValue] : t[s].value;
                    if (o.template) {
                        var p = o.template.replace(/({{ label }})/gi, l);
                        for (var u in t[s])
                            if (t[s].hasOwnProperty(u)) {
                                var h = new RegExp("{{ " + u + " }}", "gi");
                                p = p.replace(h, t[s][u])
                            } l = p
                    }
                    i += d ? '<li data-value="' + d + '" data-label="' + c + '" class="' + a.join(" ") + '">' + l + "</li>" : '<li data-label="' + c + '" class="' + a.join(" ") + '">' + l + "</li>"
                }
                if (t.length && o.hint) {
                    var f = o.customLabel && t[0][o.customLabel] ? t[0][o.customLabel] : t[0].label,
                        m = f.substr(0, o.query.length).toUpperCase() === o.query.toUpperCase() && f;
                    if (m && o.query !== f) {
                        var v = new RegExp(o.query, "i"),
                            g = m.replace(v, "<span>" + o.query + "</span>");
                        o.$autocompleter.find(".autocompleter-hint").addClass("autocompleter-hint-show").html(g), o.hintText = g
                    }
                }
                o.response = t, o.$autocompleter.find(".autocompleter-list").html(i), o.$selected = o.$autocompleter.find(".autocompleter-item-selected").length ? o.$autocompleter.find(".autocompleter-item-selected") : null, o.$list = t.length ? o.$autocompleter.find(".autocompleter-item") : null, o.index = o.$selected ? o.$list.index(o.$selected) : -1, o.$autocompleter.find(".autocompleter-item").each(function(t, i) {
                    e(i).data(o.response[t])
                })
            }(t, o), o.$autocompleter.hasClass("autocompleter-focus") && x(null, o)
        }

        function $(t) {
            var o = t.data,
                s = t.keyCode ? t.keyCode : t.which;
            if (40 !== s && 38 !== s || !o.$autocompleter.hasClass("autocompleter-show")) - 1 === e.inArray(s, i) && -1 === e.inArray(s, o.ignoredKeyCode) && v(o);
            else {
                var n, a, r = o.$list.length;
                r && (r > 1 ? o.index === r - 1 ? (n = o.changeWhenSelect ? -1 : 0, a = o.index - 1) : 0 === o.index ? (n = o.index + 1, a = o.changeWhenSelect ? -1 : r - 1) : -1 === o.index ? (n = 0, a = r - 1) : (n = o.index + 1, a = o.index - 1) : -1 === o.index ? (n = 0, a = 0) : (a = -1, n = -1), o.index = 40 === s ? n : a, o.$list.removeClass("autocompleter-item-selected"), -1 !== o.index && o.$list.eq(o.index).addClass("autocompleter-item-selected"), o.$selected = o.$autocompleter.find(".autocompleter-item-selected").length ? o.$autocompleter.find(".autocompleter-item-selected") : null, o.changeWhenSelect && P(o))
            }
        }

        function k(e) {
            var t = e.data,
                o = e.keyCode ? e.keyCode : e.which;
            if (40 === o || 38 === o) e.preventDefault(), e.stopPropagation();
            else if (39 === o) {
                if (t.hint && t.hintText && t.$autocompleter.find(".autocompleter-hint").hasClass("autocompleter-hint-show")) {
                    e.preventDefault(), e.stopPropagation();
                    var i = !!t.$autocompleter.find(".autocompleter-item").length && t.$autocompleter.find(".autocompleter-item").eq(0).attr("data-label");
                    i && (t.query = i, function(e) {
                        P(e), _(e), v(e)
                    }(t))
                }
            } else 13 === o && t.$autocompleter.hasClass("autocompleter-show") && t.$selected && j(e)
        }

        function b(e, t) {
            if (!t) {
                var o = e.data;
                o.$autocompleter.addClass("autocompleter-focus"), o.$node.prop("disabled") || o.$autocompleter.hasClass("autocompleter-show") || o.focusOpen && (v(o), o.focused = !0, setTimeout(function() {
                    o.focused = !1
                }, 500))
            }
        }

        function T(e, t) {
            e.preventDefault(), e.stopPropagation();
            var o = e.data;
            t || (o.$autocompleter.removeClass("autocompleter-focus"), A(e))
        }

        function S(o) {
            if ("mousedown" !== o.type || -1 === e.inArray(o.which, [2, 3])) {
                var i = o.data;
                if (i.$list && !i.focused && !i.$node.is(":disabled"))
                    if (r && !l) {
                        var s = i.$select[0];
                        if (t.document.createEvent) {
                            var n = t.document.createEvent("MouseEvents");
                            n.initMouseEvent("mousedown", !1, !0, t, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), s.dispatchEvent(n)
                        } else s.fireEvent && s.fireEvent("onmousedown")
                    } else i.$autocompleter.hasClass("autocompleter-closed") ? x(o) : i.$autocompleter.hasClass("autocompleter-show") && A(o)
            }
        }

        function x(e, t) {
            var o = e ? e.data : t;
            !o.$node.prop("disabled") && !o.$autocompleter.hasClass("autocompleter-show") && o.$list && o.$list.length && (o.$autocompleter.removeClass("autocompleter-closed").addClass("autocompleter-show"), c.on("click.autocompleter-" + o.guid, ":not(.autocompleter-item)", o, C))
        }

        function C(t) {
            e(t.target).hasClass("autocompleter-node") || 0 === e(t.currentTarget).parents(".autocompleter").length && A(t)
        }

        function A(e, t) {
            var o = e ? e.data : t;
            o.$autocompleter.hasClass("autocompleter-show") && (o.$autocompleter.removeClass("autocompleter-show").addClass("autocompleter-closed"), c.off(".autocompleter-" + o.guid))
        }

        function j(t) {
            if ("mousedown" !== t.type || -1 === e.inArray(t.which, [2, 3])) {
                var o = t.data;
                t.preventDefault(), t.stopPropagation(), "mousedown" === t.type && e(this).length && (o.$selected = e(this), o.index = o.$list.index(o.$selected)), o.$node.prop("disabled") || (A(t), function(e) {
                    P(e), _(e), w(e)
                }(o), "click" === t.type && o.$node.trigger("focus", [!0]))
            }
        }

        function P(e) {
            e.$selected ? (e.hintText && e.$autocompleter.find(".autocompleter-hint").hasClass("autocompleter-hint-show") && e.$autocompleter.find(".autocompleter-hint").removeClass("autocompleter-hint-show"), e.$node.val(e.$selected.attr("data-value") ? e.$selected.attr("data-value") : e.$selected.attr("data-label"))) : (e.hintText && !e.$autocompleter.find(".autocompleter-hint").hasClass("autocompleter-hint-show") && e.$autocompleter.find(".autocompleter-hint").addClass("autocompleter-hint-show"), e.$node.val(e.query))
        }

        function _(e) {
            e.callback.call(e.$autocompleter, e.$node.val(), e.index, e.response[e.index]), e.$node.trigger("change")
        }

        function O() {
            if (u) return JSON.parse(localStorage.getItem(p) || "{}")
        }

        function M() {
            try {
                localStorage.removeItem(p), D = O()
            } catch (e) {
                throw e
            }
        }
        var D = O();
        e.fn.autocompleter = function(t) {
            return f[t] ? f[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? this : function(t) {
                t = e.extend({}, h, t || {}), null === c && (c = e("body"));
                for (var o = e(this), i = 0, s = o.length; i < s; i++) m(o.eq(i), t);
                return o
            }.apply(this, arguments)
        }, e.autocompleter = function(e) {
            "defaults" === e ? f.defaults.apply(this, Array.prototype.slice.call(arguments, 1)) : "clearCache" === e && f.clearCache.apply(this, null)
        }
    }(jQuery, window), yii = function(e) {
        var t = {
            reloadableScripts: [],
            clickableSelector: 'a, button, input[type="submit"], input[type="button"], input[type="reset"], input[type="image"]',
            changeableSelector: "select, input, textarea",
            getCsrfParam: function() {
                return e("meta[name=csrf-param]").attr("content")
            },
            getCsrfToken: function() {
                return e("meta[name=csrf-token]").attr("content")
            },
            setCsrfToken: function(t, o) {
                e("meta[name=csrf-param]").attr("content", t), e("meta[name=csrf-token]").attr("content", o)
            },
            refreshCsrfToken: function() {
                var o = t.getCsrfToken();
                o && e('form input[name="' + t.getCsrfParam() + '"]').val(o)
            },
            confirm: function(e, t, o) {
                confirm(e) ? !t || t() : !o || o()
            },
            handleAction: function(o, i) {
                var s, n = o.attr("data-form") ? e("#" + o.attr("data-form")) : o.closest("form"),
                    a = !o.data("method") && n ? n.attr("method") : o.data("method"),
                    r = o.attr("href"),
                    l = o.data("params"),
                    c = o.data("pjax"),
                    d = !!o.data("pjax-push-state"),
                    p = !!o.data("pjax-replace-state"),
                    u = o.data("pjax-timeout"),
                    h = o.data("pjax-scrollto"),
                    f = o.data("pjax-push-redirect"),
                    m = o.data("pjax-replace-redirect"),
                    v = o.data("pjax-skip-outer-containers"),
                    g = {};
                if (void 0 !== c && e.support.pjax && ((s = o.data("pjax-container") ? o.data("pjax-container") : o.closest('[data-pjax-container=""]')).length || (s = e("body")), g = {
                        container: s,
                        push: d,
                        replace: p,
                        scrollTo: h,
                        pushRedirect: f,
                        replaceRedirect: m,
                        pjaxSkipOuterContainers: v,
                        timeout: u,
                        originalEvent: i,
                        originalTarget: o
                    }), void 0 !== a) {
                    var w = !n.length;
                    if (w) {
                        r && r.match(/(^\/|:\/\/)/) || (r = window.location.href), n = e("<form/>", {
                            method: a,
                            action: r
                        });
                        var y = o.attr("target");
                        if (y && n.attr("target", y), a.match(/(get|post)/i) || (n.append(e("<input/>", {
                                name: "_method",
                                value: a,
                                type: "hidden"
                            })), a = "POST"), !a.match(/(get|head|options)/i)) {
                            var $ = t.getCsrfParam();
                            $ && n.append(e("<input/>", {
                                name: $,
                                value: t.getCsrfToken(),
                                type: "hidden"
                            }))
                        }
                        n.hide().appendTo("body")
                    }
                    var k = n.data("yiiActiveForm");
                    k && (k.submitObject = o), l && e.isPlainObject(l) && e.each(l, function(t, o) {
                        n.append(e("<input/>").attr({
                            name: t,
                            value: o,
                            type: "hidden"
                        }))
                    });
                    var b = n.attr("method");
                    n.attr("method", a);
                    var T = null;
                    r && "#" != r && (T = n.attr("action"), n.attr("action", r)), void 0 !== c && e.support.pjax && n.on("submit", function(t) {
                        e.pjax.submit(t, g)
                    }), n.trigger("submit"), e.when(n.data("yiiSubmitFinalizePromise")).then(function() {
                        null != T && n.attr("action", T), n.attr("method", b), l && e.isPlainObject(l) && e.each(l, function(t, o) {
                            e('input[name="' + t + '"]', n).remove()
                        }), w && n.remove()
                    })
                } else r && "#" != r ? void 0 !== c && e.support.pjax ? e.pjax.click(i, g) : window.location = r : o.is(":submit") && n.length && (void 0 !== c && e.support.pjax && n.on("submit", function(t) {
                    e.pjax.submit(t, g)
                }), n.trigger("submit"))
            },
            getQueryParams: function(t) {
                var o = t.indexOf("?");
                if (0 > o) return {};
                var i, s, n = t.substring(o + 1).split("#")[0].split("&"),
                    a = {};
                for (s = 0; s < n.length; s++) {
                    i = n[s].split("=");
                    var r = decodeURIComponent(i[0]),
                        l = decodeURIComponent(i[1]);
                    r.length && (void 0 !== a[r] ? (e.isArray(a[r]) || (a[r] = [a[r]]), a[r].push(l || "")) : a[r] = l || "")
                }
                return a
            },
            initModule: function(o) {
                (void 0 === o.isActive || o.isActive) && (e.isFunction(o.init) && o.init(), e.each(o, function() {
                    e.isPlainObject(this) && t.initModule(this)
                }))
            },
            init: function() {
                e.ajaxPrefilter(function(e, o, i) {
                        !e.crossDomain && t.getCsrfParam() && i.setRequestHeader("X-CSRF-Token", t.getCsrfToken())
                    }), t.refreshCsrfToken(), e(document).ajaxComplete(function(e, t, o) {
                        var i = t && t.getResponseHeader("X-Redirect");
                        i && (window.location = i)
                    }),
                    function() {
                        var o = location.protocol + "//" + location.host,
                            i = e("script[src]").map(function() {
                                return "/" === this.src.charAt(0) ? o + this.src : this.src
                            }).toArray();
                        e.ajaxPrefilter("script", function(s, n, a) {
                            if ("jsonp" != s.dataType) {
                                var r = "/" === s.url.charAt(0) ? o + s.url : s.url; - 1 === e.inArray(r, i) ? i.push(r) : -1 !== e.inArray(r, e.map(t.reloadableScripts, function(e) {
                                    return "/" === e.charAt(0) ? o + e : e
                                })) || a.abort()
                            }
                        }), e(document).ajaxComplete(function(o, i, s) {
                            var n = [];
                            e("link[rel=stylesheet]").each(function() {
                                -1 === e.inArray(this.href, t.reloadableScripts) && (-1 == e.inArray(this.href, n) ? n.push(this.href) : e(this).remove())
                            })
                        })
                    }(),
                    function() {
                        var o = function(o) {
                            var i = e(this),
                                s = i.data("method"),
                                n = i.data("confirm"),
                                a = i.data("form");
                            return void 0 === s && void 0 === n && void 0 === a || (void 0 !== n ? e.proxy(t.confirm, this)(n, function() {
                                t.handleAction(i, o)
                            }) : t.handleAction(i, o), o.stopImmediatePropagation(), !1)
                        };
                        e(document).on("click.yii", t.clickableSelector, o).on("change.yii", t.changeableSelector, o)
                    }()
            }
        };
        return t
    }(jQuery), jQuery(document).ready(function() {
        yii.initModule(yii)
    }),
    function(e, t, o) {
        function i(t, o) {
            this.bodyOverflowX, this.callbacks = {
                hide: [],
                show: []
            }, this.checkInterval = null, this.Content, this.$el = e(t), this.$elProxy, this.elProxyPosition, this.enabled = !0, this.options = e.extend({}, r, o), this.mouseIsOverProxy = !1, this.namespace = "tooltipster-" + Math.round(1e5 * Math.random()), this.Status = "hidden", this.timerHide = null, this.timerShow = null, this.$tooltip, this.options.iconTheme = this.options.iconTheme.replace(".", ""), this.options.theme = this.options.theme.replace(".", ""), this._init()
        }

        function s(t, o) {
            var i = !0;
            return e.each(t, function(e, s) {
                if (void 0 === o[e] || t[e] !== o[e]) return i = !1, !1
            }), i
        }

        function n() {
            return !c && l
        }

        function a() {
            var e = (o.body || o.documentElement).style,
                t = "transition";
            if ("string" == typeof e[t]) return !0;
            v = ["Moz", "Webkit", "Khtml", "O", "ms"], t = t.charAt(0).toUpperCase() + t.substr(1);
            for (var i = 0; i < v.length; i++)
                if ("string" == typeof e[v[i] + t]) return !0;
            return !1
        }
        var r = {
            animation: "fade",
            arrow: !0,
            arrowColor: "",
            autoClose: !0,
            content: null,
            contentAsHTML: !1,
            contentCloning: !0,
            debug: !0,
            delay: 200,
            minWidth: 0,
            maxWidth: null,
            functionInit: function(e, t) {},
            functionBefore: function(e, t) {
                t()
            },
            functionReady: function(e, t) {},
            functionAfter: function(e) {},
            hideOnClick: !1,
            icon: "(?)",
            iconCloning: !0,
            iconDesktop: !1,
            iconTouch: !1,
            iconTheme: "tooltipster-icon",
            interactive: !1,
            interactiveTolerance: 350,
            multiple: !1,
            offsetX: 0,
            offsetY: 0,
            onlyOne: !1,
            position: "top",
            positionTracker: !1,
            positionTrackerCallback: function(e) {
                "hover" == this.option("trigger") && this.option("autoClose") && this.hide()
            },
            restoration: "current",
            speed: 350,
            timer: 0,
            theme: "tooltipster-default",
            touchDevices: !0,
            trigger: "hover",
            updateAnimation: !0
        };
        i.prototype = {
            _init: function() {
                var t = this;
                if (o.querySelector) {
                    var i = null;
                    void 0 === t.$el.data("tooltipster-initialTitle") && (void 0 === (i = t.$el.attr("title")) && (i = null), t.$el.data("tooltipster-initialTitle", i)), null !== t.options.content ? t._content_set(t.options.content) : t._content_set(i);
                    var s = t.options.functionInit.call(t.$el, t.$el, t.Content);
                    void 0 !== s && t._content_set(s), t.$el.removeAttr("title").addClass("tooltipstered"), !l && t.options.iconDesktop || l && t.options.iconTouch ? ("string" == typeof t.options.icon ? (t.$elProxy = e('<span class="' + t.options.iconTheme + '"></span>'), t.$elProxy.text(t.options.icon)) : t.options.iconCloning ? t.$elProxy = t.options.icon.clone(!0) : t.$elProxy = t.options.icon, t.$elProxy.insertAfter(t.$el)) : t.$elProxy = t.$el, "hover" == t.options.trigger ? (t.$elProxy.on("mouseenter." + t.namespace, function() {
                        n() && !t.options.touchDevices || (t.mouseIsOverProxy = !0, t._show())
                    }).on("mouseleave." + t.namespace, function() {
                        n() && !t.options.touchDevices || (t.mouseIsOverProxy = !1)
                    }), l && t.options.touchDevices && t.$elProxy.on("touchstart." + t.namespace, function() {
                        t._showNow()
                    })) : "click" == t.options.trigger && t.$elProxy.on("click." + t.namespace, function() {
                        n() && !t.options.touchDevices || t._show()
                    })
                }
            },
            _show: function() {
                var e = this;
                "shown" != e.Status && "appearing" != e.Status && (e.options.delay ? e.timerShow = setTimeout(function() {
                    ("click" == e.options.trigger || "hover" == e.options.trigger && e.mouseIsOverProxy) && e._showNow()
                }, e.options.delay) : e._showNow())
            },
            _showNow: function(o) {
                var i = this;
                i.options.functionBefore.call(i.$el, i.$el, function() {
                    if (i.enabled && null !== i.Content) {
                        o && i.callbacks.show.push(o), i.callbacks.hide = [], clearTimeout(i.timerShow), i.timerShow = null, clearTimeout(i.timerHide), i.timerHide = null, i.options.onlyOne && e(".tooltipstered").not(i.$el).each(function(t, o) {
                            var i = e(o),
                                s = i.data("tooltipster-ns");
                            e.each(s, function(e, t) {
                                var o = i.data(t),
                                    s = o.status(),
                                    n = o.option("autoClose");
                                "hidden" !== s && "disappearing" !== s && n && o.hide()
                            })
                        });
                        var s = function() {
                            i.Status = "shown", e.each(i.callbacks.show, function(e, t) {
                                t.call(i.$el)
                            }), i.callbacks.show = []
                        };
                        if ("hidden" !== i.Status) {
                            var n = 0;
                            "disappearing" === i.Status ? (i.Status = "appearing", a() ? (i.$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-" + i.options.animation + "-show"), i.options.speed > 0 && i.$tooltip.delay(i.options.speed), i.$tooltip.queue(s)) : i.$tooltip.stop().fadeIn(s)) : "shown" === i.Status && s()
                        } else {
                            i.Status = "appearing";
                            n = i.options.speed;
                            i.bodyOverflowX = e("body").css("overflow-x"), e("body").css("overflow-x", "hidden");
                            var r = "tooltipster-" + i.options.animation,
                                c = "-webkit-transition-duration: " + i.options.speed + "ms; -webkit-animation-duration: " + i.options.speed + "ms; -moz-transition-duration: " + i.options.speed + "ms; -moz-animation-duration: " + i.options.speed + "ms; -o-transition-duration: " + i.options.speed + "ms; -o-animation-duration: " + i.options.speed + "ms; -ms-transition-duration: " + i.options.speed + "ms; -ms-animation-duration: " + i.options.speed + "ms; transition-duration: " + i.options.speed + "ms; animation-duration: " + i.options.speed + "ms;",
                                d = i.options.minWidth ? "min-width:" + Math.round(i.options.minWidth) + "px;" : "",
                                p = i.options.maxWidth ? "max-width:" + Math.round(i.options.maxWidth) + "px;" : "",
                                u = i.options.interactive ? "pointer-events: auto;" : "";
                            if (i.$tooltip = e('<div class="tooltipster-base ' + i.options.theme + '" style="' + d + " " + p + " " + u + " " + c + '"><div class="tooltipster-content"></div></div>'), a() && i.$tooltip.addClass(r), i._content_insert(), i.$tooltip.appendTo("body"), i.reposition(), i.options.functionReady.call(i.$el, i.$el, i.$tooltip), a() ? (i.$tooltip.addClass(r + "-show"), i.options.speed > 0 && i.$tooltip.delay(i.options.speed), i.$tooltip.queue(s)) : i.$tooltip.css("display", "none").fadeIn(i.options.speed, s), i._interval_set(), e(t).on("scroll." + i.namespace + " resize." + i.namespace, function() {
                                    i.reposition()
                                }), i.options.autoClose)
                                if (e("body").off("." + i.namespace), "hover" == i.options.trigger) {
                                    if (l && setTimeout(function() {
                                            e("body").on("touchstart." + i.namespace, function() {
                                                i.hide()
                                            })
                                        }, 0), i.options.interactive) {
                                        l && i.$tooltip.on("touchstart." + i.namespace, function(e) {
                                            e.stopPropagation()
                                        });
                                        var h = null;
                                        i.$elProxy.add(i.$tooltip).on("mouseleave." + i.namespace + "-autoClose", function() {
                                            clearTimeout(h), h = setTimeout(function() {
                                                i.hide()
                                            }, i.options.interactiveTolerance)
                                        }).on("mouseenter." + i.namespace + "-autoClose", function() {
                                            clearTimeout(h)
                                        })
                                    } else i.$elProxy.on("mouseleave." + i.namespace + "-autoClose", function() {
                                        i.hide()
                                    });
                                    i.options.hideOnClick && i.$elProxy.on("click." + i.namespace + "-autoClose", function() {
                                        i.hide()
                                    })
                                } else "click" == i.options.trigger && (setTimeout(function() {
                                    e("body").on("click." + i.namespace + " touchstart." + i.namespace, function() {
                                        i.hide()
                                    })
                                }, 0), i.options.interactive && i.$tooltip.on("click." + i.namespace + " touchstart." + i.namespace, function(e) {
                                    e.stopPropagation()
                                }))
                        }
                        i.options.timer > 0 && (i.timerHide = setTimeout(function() {
                            i.timerHide = null, i.hide()
                        }, i.options.timer + n))
                    }
                })
            },
            _interval_set: function() {
                var t = this;
                t.checkInterval = setInterval(function() {
                    if (0 === e("body").find(t.$el).length || 0 === e("body").find(t.$elProxy).length || "hidden" == t.Status || 0 === e("body").find(t.$tooltip).length) "shown" != t.Status && "appearing" != t.Status || t.hide(), t._interval_cancel();
                    else if (t.options.positionTracker) {
                        var o = t._repositionInfo(t.$elProxy),
                            i = !1;
                        s(o.dimension, t.elProxyPosition.dimension) && ("fixed" === t.$elProxy.css("position") ? s(o.position, t.elProxyPosition.position) && (i = !0) : s(o.offset, t.elProxyPosition.offset) && (i = !0)), i || (t.reposition(), t.options.positionTrackerCallback.call(t, t.$el))
                    }
                }, 200)
            },
            _interval_cancel: function() {
                clearInterval(this.checkInterval), this.checkInterval = null
            },
            _content_set: function(e) {
                "object" == typeof e && null !== e && this.options.contentCloning && (e = e.clone(!0)), this.Content = e
            },
            _content_insert: function() {
                var e = this,
                    t = this.$tooltip.find(".tooltipster-content");
                "string" != typeof e.Content || e.options.contentAsHTML ? t.empty().append(e.Content) : t.text(e.Content)
            },
            _update: function(e) {
                var t = this;
                t._content_set(e), null !== t.Content ? "hidden" !== t.Status && (t._content_insert(), t.reposition(), t.options.updateAnimation && (a() ? (t.$tooltip.css({
                    width: "",
                    "-webkit-transition": "all " + t.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                    "-moz-transition": "all " + t.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                    "-o-transition": "all " + t.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                    "-ms-transition": "all " + t.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                    transition: "all " + t.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms"
                }).addClass("tooltipster-content-changing"), setTimeout(function() {
                    "hidden" != t.Status && (t.$tooltip.removeClass("tooltipster-content-changing"), setTimeout(function() {
                        "hidden" !== t.Status && t.$tooltip.css({
                            "-webkit-transition": t.options.speed + "ms",
                            "-moz-transition": t.options.speed + "ms",
                            "-o-transition": t.options.speed + "ms",
                            "-ms-transition": t.options.speed + "ms",
                            transition: t.options.speed + "ms"
                        })
                    }, t.options.speed))
                }, t.options.speed)) : t.$tooltip.fadeTo(t.options.speed, .5, function() {
                    "hidden" != t.Status && t.$tooltip.fadeTo(t.options.speed, 1)
                }))) : t.hide()
            },
            _repositionInfo: function(e) {
                return {
                    dimension: {
                        height: e.outerHeight(!1),
                        width: e.outerWidth(!1)
                    },
                    offset: e.offset(),
                    position: {
                        left: parseInt(e.css("left")),
                        top: parseInt(e.css("top"))
                    }
                }
            },
            hide: function(o) {
                var i = this;
                o && i.callbacks.hide.push(o), i.callbacks.show = [], clearTimeout(i.timerShow), i.timerShow = null, clearTimeout(i.timerHide), i.timerHide = null;
                var s = function() {
                    e.each(i.callbacks.hide, function(e, t) {
                        t.call(i.$el)
                    }), i.callbacks.hide = []
                };
                if ("shown" == i.Status || "appearing" == i.Status) {
                    i.Status = "disappearing";
                    var n = function() {
                        i.Status = "hidden", "object" == typeof i.Content && null !== i.Content && i.Content.detach(), i.$tooltip.remove(), i.$tooltip = null, e(t).off("." + i.namespace), e("body").off("." + i.namespace).css("overflow-x", i.bodyOverflowX), e("body").off("." + i.namespace), i.$elProxy.off("." + i.namespace + "-autoClose"), i.options.functionAfter.call(i.$el, i.$el), s()
                    };
                    a() ? (i.$tooltip.clearQueue().removeClass("tooltipster-" + i.options.animation + "-show").addClass("tooltipster-dying"), i.options.speed > 0 && i.$tooltip.delay(i.options.speed), i.$tooltip.queue(n)) : i.$tooltip.stop().fadeOut(i.options.speed, n)
                } else "hidden" == i.Status && s();
                return i
            },
            show: function(e) {
                return this._showNow(e), this
            },
            update: function(e) {
                return this.content(e)
            },
            content: function(e) {
                return void 0 === e ? this.Content : (this._update(e), this)
            },
            reposition: function() {
                var o = this;
                if (0 !== e("body").find(o.$tooltip).length) {
                    o.$tooltip.css("width", ""), o.elProxyPosition = o._repositionInfo(o.$elProxy);
                    var i = null,
                        s = e(t).width(),
                        n = o.elProxyPosition,
                        a = o.$tooltip.outerWidth(!1),
                        r = (o.$tooltip.innerWidth(), o.$tooltip.outerHeight(!1));
                    if (o.$elProxy.is("area")) {
                        var l = o.$elProxy.attr("shape"),
                            c = o.$elProxy.parent().attr("name"),
                            d = e('img[usemap="#' + c + '"]'),
                            p = d.offset().left,
                            u = d.offset().top,
                            h = void 0 !== o.$elProxy.attr("coords") ? o.$elProxy.attr("coords").split(",") : void 0;
                        if ("circle" == l) {
                            var f = parseInt(h[0]),
                                m = parseInt(h[1]),
                                v = parseInt(h[2]);
                            n.dimension.height = 2 * v, n.dimension.width = 2 * v, n.offset.top = u + m - v, n.offset.left = p + f - v
                        } else if ("rect" == l) {
                            f = parseInt(h[0]), m = parseInt(h[1]);
                            var g = parseInt(h[2]),
                                w = parseInt(h[3]);
                            n.dimension.height = w - m, n.dimension.width = g - f, n.offset.top = u + m, n.offset.left = p + f
                        } else if ("poly" == l) {
                            for (var y = 0, $ = 0, k = 0, b = 0, T = "even", S = 0; S < h.length; S++) {
                                var x = parseInt(h[S]);
                                "even" == T ? (x > k && (k = x, 0 === S && (y = k)), x < y && (y = x), T = "odd") : (x > b && (b = x, 1 == S && ($ = b)), x < $ && ($ = x), T = "even")
                            }
                            n.dimension.height = b - $, n.dimension.width = k - y, n.offset.top = u + $, n.offset.left = p + y
                        } else n.dimension.height = d.outerHeight(!1), n.dimension.width = d.outerWidth(!1), n.offset.top = u, n.offset.left = p
                    }
                    var C = 0,
                        A = 0,
                        j = 0,
                        P = parseInt(o.options.offsetY),
                        _ = parseInt(o.options.offsetX),
                        O = o.options.position;

                    function M() {
                        var o = e(t).scrollLeft();
                        C - o < 0 && (i = C - o, C = o), C + a - o > s && (i = C - (s + o - a), C = s + o - a)
                    }

                    function D(o, i) {
                        n.offset.top - e(t).scrollTop() - r - P - 12 < 0 && i.indexOf("top") > -1 && (O = o), n.offset.top + n.dimension.height + r + 12 + P > e(t).scrollTop() + e(t).height() && i.indexOf("bottom") > -1 && (O = o, j = n.offset.top - r - P - 12)
                    }
                    if ("top" == O) {
                        var I = n.offset.left + a - (n.offset.left + n.dimension.width);
                        C = n.offset.left + _ - I / 2, j = n.offset.top - r - P - 12, M(), D("bottom", "top")
                    }
                    if ("top-left" == O && (C = n.offset.left + _, j = n.offset.top - r - P - 12, M(), D("bottom-left", "top-left")), "top-right" == O && (C = n.offset.left + n.dimension.width + _ - a, j = n.offset.top - r - P - 12, M(), D("bottom-right", "top-right")), "bottom" == O) {
                        I = n.offset.left + a - (n.offset.left + n.dimension.width);
                        C = n.offset.left - I / 2 + _, j = n.offset.top + n.dimension.height + P + 12, M(), D("top", "bottom")
                    }
                    if ("bottom-left" == O && (C = n.offset.left + _, j = n.offset.top + n.dimension.height + P + 12, M(), D("top-left", "bottom-left")), "bottom-right" == O && (C = n.offset.left + n.dimension.width + _ - a, j = n.offset.top + n.dimension.height + P + 12, M(), D("top-right", "bottom-right")), "left" == O) {
                        C = n.offset.left - _ - a - 12, A = n.offset.left + _ + n.dimension.width + 12;
                        var L = n.offset.top + r - (n.offset.top + n.dimension.height);
                        if (j = n.offset.top - L / 2 - P, C < 0 && A + a > s) {
                            var H = 2 * parseFloat(o.$tooltip.css("border-width")),
                                E = a + C - H;
                            o.$tooltip.css("width", E + "px"), r = o.$tooltip.outerHeight(!1), C = n.offset.left - _ - E - 12 - H, L = n.offset.top + r - (n.offset.top + n.dimension.height), j = n.offset.top - L / 2 - P
                        } else C < 0 && (C = n.offset.left + _ + n.dimension.width + 12, i = "left")
                    }
                    if ("right" == O) {
                        C = n.offset.left + _ + n.dimension.width + 12, A = n.offset.left - _ - a - 12;
                        L = n.offset.top + r - (n.offset.top + n.dimension.height);
                        if (j = n.offset.top - L / 2 - P, C + a > s && A < 0) {
                            H = 2 * parseFloat(o.$tooltip.css("border-width")), E = s - C - H;
                            o.$tooltip.css("width", E + "px"), r = o.$tooltip.outerHeight(!1), L = n.offset.top + r - (n.offset.top + n.dimension.height), j = n.offset.top - L / 2 - P
                        } else C + a > s && (C = n.offset.left - _ - a - 12, i = "right")
                    }
                    if (o.options.arrow) {
                        var q = "tooltipster-arrow-" + O;
                        if (o.options.arrowColor.length < 1) var z = o.$tooltip.css("background-color");
                        else z = o.options.arrowColor;
                        if (i ? "left" == i ? (q = "tooltipster-arrow-right", i = "") : "right" == i ? (q = "tooltipster-arrow-left", i = "") : i = "left:" + Math.round(i) + "px;" : i = "", "top" == O || "top-left" == O || "top-right" == O) var U = parseFloat(o.$tooltip.css("border-bottom-width")),
                            W = o.$tooltip.css("border-bottom-color");
                        else if ("bottom" == O || "bottom-left" == O || "bottom-right" == O) U = parseFloat(o.$tooltip.css("border-top-width")), W = o.$tooltip.css("border-top-color");
                        else if ("left" == O) U = parseFloat(o.$tooltip.css("border-right-width")), W = o.$tooltip.css("border-right-color");
                        else if ("right" == O) U = parseFloat(o.$tooltip.css("border-left-width")), W = o.$tooltip.css("border-left-color");
                        else U = parseFloat(o.$tooltip.css("border-bottom-width")), W = o.$tooltip.css("border-bottom-color");
                        U > 1 && U++;
                        var R = "";
                        if (0 !== U) {
                            var F = "",
                                B = "border-color: " + W + ";"; - 1 !== q.indexOf("bottom") ? F = "margin-top: -" + Math.round(U) + "px;" : -1 !== q.indexOf("top") ? F = "margin-bottom: -" + Math.round(U) + "px;" : -1 !== q.indexOf("left") ? F = "margin-right: -" + Math.round(U) + "px;" : -1 !== q.indexOf("right") && (F = "margin-left: -" + Math.round(U) + "px;"), R = '<span class="tooltipster-arrow-border" style="' + F + " " + B + ';"></span>'
                        }
                        o.$tooltip.find(".tooltipster-arrow").remove();
                        var N = '<div class="' + q + ' tooltipster-arrow" style="' + i + '">' + R + '<span style="border-color:' + z + ';"></span></div>';
                        o.$tooltip.append(N)
                    }
                    o.$tooltip.css({
                        top: Math.round(j) + "px",
                        left: Math.round(C) + "px"
                    })
                }
                return o
            },
            enable: function() {
                return this.enabled = !0, this
            },
            disable: function() {
                return this.hide(), this.enabled = !1, this
            },
            destroy: function() {
                var t = this;
                t.hide(), t.$el[0] !== t.$elProxy[0] && t.$elProxy.remove(), t.$el.removeData(t.namespace).off("." + t.namespace);
                var o = t.$el.data("tooltipster-ns");
                if (1 === o.length) {
                    var i = null;
                    "previous" === t.options.restoration ? i = t.$el.data("tooltipster-initialTitle") : "current" === t.options.restoration && (i = "string" == typeof t.Content ? t.Content : e("<div></div>").append(t.Content).html()), i && t.$el.attr("title", i), t.$el.removeClass("tooltipstered").removeData("tooltipster-ns").removeData("tooltipster-initialTitle")
                } else o = e.grep(o, function(e, o) {
                    return e !== t.namespace
                }), t.$el.data("tooltipster-ns", o);
                return t
            },
            elementIcon: function() {
                return this.$el[0] !== this.$elProxy[0] ? this.$elProxy[0] : void 0
            },
            elementTooltip: function() {
                return this.$tooltip ? this.$tooltip[0] : void 0
            },
            option: function(e, t) {
                return void 0 === t ? this.options[e] : (this.options[e] = t, this)
            },
            status: function() {
                return this.Status
            }
        }, e.fn.tooltipster = function() {
            var t = arguments;
            if (0 === this.length) {
                if ("string" == typeof t[0]) {
                    var o = !0;
                    switch (t[0]) {
                        case "setDefaults":
                            e.extend(r, t[1]);
                            break;
                        default:
                            o = !1
                    }
                    return !!o || this
                }
                return this
            }
            if ("string" == typeof t[0]) {
                var s = "#*$~&";
                return this.each(function() {
                    var o = e(this).data("tooltipster-ns"),
                        i = o ? e(this).data(o[0]) : null;
                    if (!i) throw new Error("You called Tooltipster's \"" + t[0] + '" method on an uninitialized element');
                    if ("function" != typeof i[t[0]]) throw new Error('Unknown method .tooltipster("' + t[0] + '")');
                    var n = i[t[0]](t[1], t[2]);
                    if (n !== i) return s = n, !1
                }), "#*$~&" !== s ? s : this
            }
            var n = [],
                a = t[0] && void 0 !== t[0].multiple,
                l = a && t[0].multiple || !a && r.multiple,
                c = t[0] && void 0 !== t[0].debug,
                d = c && t[0].debug || !c && r.debug;
            return this.each(function() {
                var o = !1,
                    s = e(this).data("tooltipster-ns"),
                    a = null;
                s ? l ? o = !0 : d && console.log('Tooltipster: one or more tooltips are already attached to this element: ignoring. Use the "multiple" option to attach more tooltips.') : o = !0, o && (a = new i(this, t[0]), s || (s = []), s.push(a.namespace), e(this).data("tooltipster-ns", s), e(this).data(a.namespace, a)), n.push(a)
            }), l ? n : this
        };
        var l = !!("ontouchstart" in t),
            c = !1;
        e("body").one("mousemove", function() {
            c = !0
        })
    }(jQuery, window, document),
    function(e) {
        var t = function() {
            "use strict";
            var e = {
                    DAY: 864e5,
                    HOUR: 36e5,
                    MINUTE: 6e4,
                    SECOND: 1e3,
                    BASELINE_YEAR: 2014,
                    MAX_SCORE: 864e6,
                    AMBIGUITIES: {
                        "America/Denver": ["America/Mazatlan"],
                        "Europe/London": ["Africa/Casablanca"],
                        "America/Chicago": ["America/Mexico_City"],
                        "America/Asuncion": ["America/Campo_Grande", "America/Santiago"],
                        "America/Montevideo": ["America/Sao_Paulo", "America/Santiago"],
                        "Asia/Beirut": ["Asia/Amman", "Asia/Jerusalem", "Europe/Helsinki", "Asia/Damascus", "Africa/Cairo", "Asia/Gaza", "Europe/Minsk"],
                        "Pacific/Auckland": ["Pacific/Fiji"],
                        "America/Los_Angeles": ["America/Santa_Isabel"],
                        "America/New_York": ["America/Havana"],
                        "America/Halifax": ["America/Goose_Bay"],
                        "America/Godthab": ["America/Miquelon"],
                        "Asia/Dubai": ["Asia/Yerevan"],
                        "Asia/Jakarta": ["Asia/Krasnoyarsk"],
                        "Asia/Shanghai": ["Asia/Irkutsk", "Australia/Perth"],
                        "Australia/Sydney": ["Australia/Lord_Howe"],
                        "Asia/Tokyo": ["Asia/Yakutsk"],
                        "Asia/Dhaka": ["Asia/Omsk"],
                        "Asia/Baku": ["Asia/Yerevan"],
                        "Australia/Brisbane": ["Asia/Vladivostok"],
                        "Pacific/Noumea": ["Asia/Vladivostok"],
                        "Pacific/Majuro": ["Asia/Kamchatka", "Pacific/Fiji"],
                        "Pacific/Tongatapu": ["Pacific/Apia"],
                        "Asia/Baghdad": ["Europe/Minsk", "Europe/Moscow"],
                        "Asia/Karachi": ["Asia/Yekaterinburg"],
                        "Africa/Johannesburg": ["Asia/Gaza", "Africa/Cairo"]
                    }
                },
                o = function(e) {
                    var t = -e.getTimezoneOffset();
                    return null !== t ? t : 0
                },
                i = function() {
                    var t = o(new Date(e.BASELINE_YEAR, 0, 2)),
                        i = o(new Date(e.BASELINE_YEAR, 5, 2)),
                        s = t - i;
                    return s < 0 ? t + ",1" : s > 0 ? i + ",1,s" : t + ",0"
                },
                s = function(e) {
                    for (var t = new Date(e, 0, 1, 0, 0, 1, 0).getTime(), o = new Date(e, 12, 31, 23, 59, 59).getTime(), i = t, s = new Date(i).getTimezoneOffset(), a = null, r = null; i < o - 864e5;) {
                        var l = new Date(i),
                            c = l.getTimezoneOffset();
                        c !== s && (c < s && (a = l), c > s && (r = l), s = c), i += 864e5
                    }
                    return !(!a || !r) && {
                        s: n(a).getTime(),
                        e: n(r).getTime()
                    }
                },
                n = function t(o, i, s) {
                    void 0 === i && (i = e.DAY, s = e.HOUR);
                    for (var n = new Date(o.getTime() - i).getTime(), a = o.getTime() + i, r = new Date(n).getTimezoneOffset(), l = n, c = null; l < a - s;) {
                        var d = new Date(l);
                        if (d.getTimezoneOffset() !== r) {
                            c = d;
                            break
                        }
                        l += s
                    }
                    return i === e.DAY ? t(c, e.HOUR, e.MINUTE) : i === e.HOUR ? t(c, e.MINUTE, e.SECOND) : c
                },
                a = function(o, i) {
                    for (var s = function(t) {
                            for (var s = 0, n = 0; n < o.length; n++)
                                if (t.rules[n] && o[n]) {
                                    if (!(o[n].s >= t.rules[n].s && o[n].e <= t.rules[n].e)) {
                                        s = "N/A";
                                        break
                                    }
                                    if (s = 0, s += Math.abs(o[n].s - t.rules[n].s), (s += Math.abs(t.rules[n].e - o[n].e)) > e.MAX_SCORE) {
                                        s = "N/A";
                                        break
                                    }
                                } return function(e, t, o, i) {
                                if ("N/A" !== o) return o;
                                if ("Asia/Beirut" === t) {
                                    if ("Africa/Cairo" === i.name && 13983768e5 === e[6].s && 14116788e5 === e[6].e) return 0;
                                    if ("Asia/Jerusalem" === i.name && 13959648e5 === e[6].s && 14118588e5 === e[6].e) return 0
                                } else if ("America/Santiago" === t) {
                                    if ("America/Asuncion" === i.name && 14124816e5 === e[6].s && 1397358e6 === e[6].e) return 0;
                                    if ("America/Campo_Grande" === i.name && 14136912e5 === e[6].s && 13925196e5 === e[6].e) return 0
                                } else if ("America/Montevideo" === t) {
                                    if ("America/Sao_Paulo" === i.name && 14136876e5 === e[6].s && 1392516e6 === e[6].e) return 0
                                } else if ("Pacific/Auckland" === t && "Pacific/Fiji" === i.name && 14142456e5 === e[6].s && 13961016e5 === e[6].e) return 0;
                                return o
                            }(o, i, s, t)
                        }, n = {}, a = t.olson.dst_rules.zones, r = a.length, l = e.AMBIGUITIES[i], c = 0; c < r; c++) {
                        var d = a[c],
                            p = s(a[c]);
                        "N/A" !== p && (n[d.name] = p)
                    }
                    for (var u in n)
                        if (n.hasOwnProperty(u))
                            for (var h = 0; h < l.length; h++)
                                if (l[h] === u) return u;
                    return i
                };
            return {
                determine: function() {
                    var n = function() {
                        var e, t;
                        if ("undefined" != typeof Intl && void 0 !== Intl.DateTimeFormat && void 0 !== (e = Intl.DateTimeFormat()) && void 0 !== e.resolvedOptions) return (t = e.resolvedOptions().timeZone) && (t.indexOf("/") > -1 || "UTC" === t) && 0 != t.indexOf("Etc") ? t : void 0
                    }();
                    return n || (n = t.olson.timezones[i()], void 0 !== e.AMBIGUITIES[n] && (n = function(e) {
                        var o = function() {
                            for (var e = [], o = 0; o < t.olson.dst_rules.years.length; o++) {
                                var i = s(t.olson.dst_rules.years[o]);
                                e.push(i)
                            }
                            return e
                        }();
                        return function(e) {
                            for (var t = 0; t < e.length; t++)
                                if (!1 !== e[t]) return !0;
                            return !1
                        }(o) ? a(o, e) : e
                    }(n))), {
                        name: function() {
                            return n
                        },
                        stdTimezoneOffset: function() {
                            return -i().split(",")[0]
                        },
                        timezoneOffset: function() {
                            return -o(new Date)
                        }
                    }
                }
            }
        }();
        t.olson = t.olson || {}, t.olson.timezones = {
            "-720,0": "Etc/GMT+12",
            "-660,0": "Pacific/Pago_Pago",
            "-660,1,s": "Pacific/Apia",
            "-600,1": "America/Adak",
            "-600,0": "Pacific/Honolulu",
            "-570,0": "Pacific/Marquesas",
            "-540,0": "Pacific/Gambier",
            "-540,1": "America/Anchorage",
            "-480,1": "America/Los_Angeles",
            "-480,0": "Pacific/Pitcairn",
            "-420,0": "America/Phoenix",
            "-420,1": "America/Denver",
            "-360,0": "America/Guatemala",
            "-360,1": "America/Chicago",
            "-360,1,s": "Pacific/Easter",
            "-300,0": "America/Bogota",
            "-300,1": "America/New_York",
            "-270,0": "America/Caracas",
            "-240,1": "America/Halifax",
            "-240,0": "America/Santo_Domingo",
            "-240,1,s": "America/Asuncion",
            "-210,1": "America/St_Johns",
            "-180,1": "America/Godthab",
            "-180,0": "America/Argentina/Buenos_Aires",
            "-180,1,s": "America/Montevideo",
            "-120,0": "America/Noronha",
            "-120,1": "America/Noronha",
            "-60,1": "Atlantic/Azores",
            "-60,0": "Atlantic/Cape_Verde",
            "0,0": "UTC",
            "0,1": "Europe/London",
            "60,1": "Europe/Berlin",
            "60,0": "Africa/Lagos",
            "60,1,s": "Africa/Windhoek",
            "120,1": "Asia/Beirut",
            "120,0": "Africa/Johannesburg",
            "180,0": "Asia/Baghdad",
            "180,1": "Europe/Moscow",
            "210,1": "Asia/Tehran",
            "240,0": "Asia/Dubai",
            "240,1": "Asia/Baku",
            "270,0": "Asia/Kabul",
            "300,1": "Asia/Yekaterinburg",
            "300,0": "Asia/Karachi",
            "330,0": "Asia/Kolkata",
            "345,0": "Asia/Kathmandu",
            "360,0": "Asia/Dhaka",
            "360,1": "Asia/Omsk",
            "390,0": "Asia/Rangoon",
            "420,1": "Asia/Krasnoyarsk",
            "420,0": "Asia/Jakarta",
            "480,0": "Asia/Shanghai",
            "480,1": "Asia/Irkutsk",
            "525,0": "Australia/Eucla",
            "525,1,s": "Australia/Eucla",
            "540,1": "Asia/Yakutsk",
            "540,0": "Asia/Tokyo",
            "570,0": "Australia/Darwin",
            "570,1,s": "Australia/Adelaide",
            "600,0": "Australia/Brisbane",
            "600,1": "Asia/Vladivostok",
            "600,1,s": "Australia/Sydney",
            "630,1,s": "Australia/Lord_Howe",
            "660,1": "Asia/Kamchatka",
            "660,0": "Pacific/Noumea",
            "690,0": "Pacific/Norfolk",
            "720,1,s": "Pacific/Auckland",
            "720,0": "Pacific/Majuro",
            "765,1,s": "Pacific/Chatham",
            "780,0": "Pacific/Tongatapu",
            "780,1,s": "Pacific/Apia",
            "840,0": "Pacific/Kiritimati"
        }, t.olson.dst_rules = {
            years: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
            zones: [{
                name: "Africa/Cairo",
                rules: [{
                    e: 12199572e5,
                    s: 12090744e5
                }, {
                    e: 1250802e6,
                    s: 1240524e6
                }, {
                    e: 12858804e5,
                    s: 12840696e5
                }, !1, !1, !1, {
                    e: 14116788e5,
                    s: 1406844e6
                }]
            }, {
                name: "Africa/Casablanca",
                rules: [{
                    e: 12202236e5,
                    s: 12122784e5
                }, {
                    e: 12508092e5,
                    s: 12438144e5
                }, {
                    e: 1281222e6,
                    s: 12727584e5
                }, {
                    e: 13120668e5,
                    s: 13017888e5
                }, {
                    e: 13489704e5,
                    s: 1345428e6
                }, {
                    e: 13828392e5,
                    s: 13761e8
                }, {
                    e: 14142888e5,
                    s: 14069448e5
                }]
            }, {
                name: "America/Asuncion",
                rules: [{
                    e: 12050316e5,
                    s: 12243888e5
                }, {
                    e: 12364812e5,
                    s: 12558384e5
                }, {
                    e: 12709548e5,
                    s: 12860784e5
                }, {
                    e: 13024044e5,
                    s: 1317528e6
                }, {
                    e: 1333854e6,
                    s: 13495824e5
                }, {
                    e: 1364094e6,
                    s: 1381032e6
                }, {
                    e: 13955436e5,
                    s: 14124816e5
                }]
            }, {
                name: "America/Campo_Grande",
                rules: [{
                    e: 12032172e5,
                    s: 12243888e5
                }, {
                    e: 12346668e5,
                    s: 12558384e5
                }, {
                    e: 12667212e5,
                    s: 1287288e6
                }, {
                    e: 12981708e5,
                    s: 13187376e5
                }, {
                    e: 13302252e5,
                    s: 1350792e6
                }, {
                    e: 136107e7,
                    s: 13822416e5
                }, {
                    e: 13925196e5,
                    s: 14136912e5
                }]
            }, {
                name: "America/Goose_Bay",
                rules: [{
                    e: 122559486e4,
                    s: 120503526e4
                }, {
                    e: 125704446e4,
                    s: 123648486e4
                }, {
                    e: 128909886e4,
                    s: 126853926e4
                }, {
                    e: 13205556e5,
                    s: 129998886e4
                }, {
                    e: 13520052e5,
                    s: 13314456e5
                }, {
                    e: 13834548e5,
                    s: 13628952e5
                }, {
                    e: 14149044e5,
                    s: 13943448e5
                }]
            }, {
                name: "America/Havana",
                rules: [{
                    e: 12249972e5,
                    s: 12056436e5
                }, {
                    e: 12564468e5,
                    s: 12364884e5
                }, {
                    e: 12885012e5,
                    s: 12685428e5
                }, {
                    e: 13211604e5,
                    s: 13005972e5
                }, {
                    e: 13520052e5,
                    s: 13332564e5
                }, {
                    e: 13834548e5,
                    s: 13628916e5
                }, {
                    e: 14149044e5,
                    s: 13943412e5
                }]
            }, {
                name: "America/Mazatlan",
                rules: [{
                    e: 1225008e6,
                    s: 12074724e5
                }, {
                    e: 12564576e5,
                    s: 1238922e6
                }, {
                    e: 1288512e6,
                    s: 12703716e5
                }, {
                    e: 13199616e5,
                    s: 13018212e5
                }, {
                    e: 13514112e5,
                    s: 13332708e5
                }, {
                    e: 13828608e5,
                    s: 13653252e5
                }, {
                    e: 14143104e5,
                    s: 13967748e5
                }]
            }, {
                name: "America/Mexico_City",
                rules: [{
                    e: 12250044e5,
                    s: 12074688e5
                }, {
                    e: 1256454e6,
                    s: 12389184e5
                }, {
                    e: 12885084e5,
                    s: 1270368e6
                }, {
                    e: 1319958e6,
                    s: 13018176e5
                }, {
                    e: 13514076e5,
                    s: 13332672e5
                }, {
                    e: 13828572e5,
                    s: 13653216e5
                }, {
                    e: 14143068e5,
                    s: 13967712e5
                }]
            }, {
                name: "America/Miquelon",
                rules: [{
                    e: 12255984e5,
                    s: 12050388e5
                }, {
                    e: 1257048e6,
                    s: 12364884e5
                }, {
                    e: 12891024e5,
                    s: 12685428e5
                }, {
                    e: 1320552e6,
                    s: 12999924e5
                }, {
                    e: 13520016e5,
                    s: 1331442e6
                }, {
                    e: 13834512e5,
                    s: 13628916e5
                }, {
                    e: 14149008e5,
                    s: 13943412e5
                }]
            }, {
                name: "America/Santa_Isabel",
                rules: [{
                    e: 12250116e5,
                    s: 1207476e6
                }, {
                    e: 12564612e5,
                    s: 12389256e5
                }, {
                    e: 12885156e5,
                    s: 12703752e5
                }, {
                    e: 13199652e5,
                    s: 13018248e5
                }, {
                    e: 13514148e5,
                    s: 13332744e5
                }, {
                    e: 13828644e5,
                    s: 13653288e5
                }, {
                    e: 1414314e6,
                    s: 13967784e5
                }]
            }, {
                name: "America/Santiago",
                rules: [{
                    e: 1206846e6,
                    s: 1223784e6
                }, {
                    e: 1237086e6,
                    s: 12552336e5
                }, {
                    e: 127035e7,
                    s: 12866832e5
                }, {
                    e: 13048236e5,
                    s: 13138992e5
                }, {
                    e: 13356684e5,
                    s: 13465584e5
                }, {
                    e: 1367118e6,
                    s: 13786128e5
                }, {
                    e: 13985676e5,
                    s: 14100624e5
                }]
            }, {
                name: "America/Sao_Paulo",
                rules: [{
                    e: 12032136e5,
                    s: 12243852e5
                }, {
                    e: 12346632e5,
                    s: 12558348e5
                }, {
                    e: 12667176e5,
                    s: 12872844e5
                }, {
                    e: 12981672e5,
                    s: 1318734e6
                }, {
                    e: 13302216e5,
                    s: 13507884e5
                }, {
                    e: 13610664e5,
                    s: 1382238e6
                }, {
                    e: 1392516e6,
                    s: 14136876e5
                }]
            }, {
                name: "Asia/Amman",
                rules: [{
                    e: 1225404e6,
                    s: 12066552e5
                }, {
                    e: 12568536e5,
                    s: 12381048e5
                }, {
                    e: 12883032e5,
                    s: 12695544e5
                }, {
                    e: 13197528e5,
                    s: 13016088e5
                }, !1, !1, {
                    e: 14147064e5,
                    s: 13959576e5
                }]
            }, {
                name: "Asia/Damascus",
                rules: [{
                    e: 12254868e5,
                    s: 120726e7
                }, {
                    e: 125685e7,
                    s: 12381048e5
                }, {
                    e: 12882996e5,
                    s: 12701592e5
                }, {
                    e: 13197492e5,
                    s: 13016088e5
                }, {
                    e: 13511988e5,
                    s: 13330584e5
                }, {
                    e: 13826484e5,
                    s: 1364508e6
                }, {
                    e: 14147028e5,
                    s: 13959576e5
                }]
            }, {
                name: "Asia/Dubai",
                rules: [!1, !1, !1, !1, !1, !1, !1]
            }, {
                name: "Asia/Gaza",
                rules: [{
                    e: 12199572e5,
                    s: 12066552e5
                }, {
                    e: 12520152e5,
                    s: 12381048e5
                }, {
                    e: 1281474e6,
                    s: 126964086e4
                }, {
                    e: 1312146e6,
                    s: 130160886e4
                }, {
                    e: 13481784e5,
                    s: 13330584e5
                }, {
                    e: 13802292e5,
                    s: 1364508e6
                }, {
                    e: 1414098e6,
                    s: 13959576e5
                }]
            }, {
                name: "Asia/Irkutsk",
                rules: [{
                    e: 12249576e5,
                    s: 12068136e5
                }, {
                    e: 12564072e5,
                    s: 12382632e5
                }, {
                    e: 12884616e5,
                    s: 12697128e5
                }, !1, !1, !1, !1]
            }, {
                name: "Asia/Jerusalem",
                rules: [{
                    e: 12231612e5,
                    s: 12066624e5
                }, {
                    e: 1254006e6,
                    s: 1238112e6
                }, {
                    e: 1284246e6,
                    s: 12695616e5
                }, {
                    e: 131751e7,
                    s: 1301616e6
                }, {
                    e: 13483548e5,
                    s: 13330656e5
                }, {
                    e: 13828284e5,
                    s: 13645152e5
                }, {
                    e: 1414278e6,
                    s: 13959648e5
                }]
            }, {
                name: "Asia/Kamchatka",
                rules: [{
                    e: 12249432e5,
                    s: 12067992e5
                }, {
                    e: 12563928e5,
                    s: 12382488e5
                }, {
                    e: 12884508e5,
                    s: 12696984e5
                }, !1, !1, !1, !1]
            }, {
                name: "Asia/Krasnoyarsk",
                rules: [{
                    e: 12249612e5,
                    s: 12068172e5
                }, {
                    e: 12564108e5,
                    s: 12382668e5
                }, {
                    e: 12884652e5,
                    s: 12697164e5
                }, !1, !1, !1, !1]
            }, {
                name: "Asia/Omsk",
                rules: [{
                    e: 12249648e5,
                    s: 12068208e5
                }, {
                    e: 12564144e5,
                    s: 12382704e5
                }, {
                    e: 12884688e5,
                    s: 126972e7
                }, !1, !1, !1, !1]
            }, {
                name: "Asia/Vladivostok",
                rules: [{
                    e: 12249504e5,
                    s: 12068064e5
                }, {
                    e: 12564e8,
                    s: 1238256e6
                }, {
                    e: 12884544e5,
                    s: 12697056e5
                }, !1, !1, !1, !1]
            }, {
                name: "Asia/Yakutsk",
                rules: [{
                    e: 1224954e6,
                    s: 120681e7
                }, {
                    e: 12564036e5,
                    s: 12382596e5
                }, {
                    e: 1288458e6,
                    s: 12697092e5
                }, !1, !1, !1, !1]
            }, {
                name: "Asia/Yekaterinburg",
                rules: [{
                    e: 12249684e5,
                    s: 12068244e5
                }, {
                    e: 1256418e6,
                    s: 1238274e6
                }, {
                    e: 12884724e5,
                    s: 12697236e5
                }, !1, !1, !1, !1]
            }, {
                name: "Asia/Yerevan",
                rules: [{
                    e: 1224972e6,
                    s: 1206828e6
                }, {
                    e: 12564216e5,
                    s: 12382776e5
                }, {
                    e: 1288476e6,
                    s: 12697272e5
                }, {
                    e: 13199256e5,
                    s: 13011768e5
                }, !1, !1, !1]
            }, {
                name: "Australia/Lord_Howe",
                rules: [{
                    e: 12074076e5,
                    s: 12231342e5
                }, {
                    e: 12388572e5,
                    s: 12545838e5
                }, {
                    e: 12703068e5,
                    s: 12860334e5
                }, {
                    e: 13017564e5,
                    s: 1317483e6
                }, {
                    e: 1333206e6,
                    s: 13495374e5
                }, {
                    e: 13652604e5,
                    s: 1380987e6
                }, {
                    e: 139671e7,
                    s: 14124366e5
                }]
            }, {
                name: "Australia/Perth",
                rules: [{
                    e: 12068136e5,
                    s: 12249576e5
                }, !1, !1, !1, !1, !1, !1]
            }, {
                name: "Europe/Helsinki",
                rules: [{
                    e: 12249828e5,
                    s: 12068388e5
                }, {
                    e: 12564324e5,
                    s: 12382884e5
                }, {
                    e: 12884868e5,
                    s: 1269738e6
                }, {
                    e: 13199364e5,
                    s: 13011876e5
                }, {
                    e: 1351386e6,
                    s: 13326372e5
                }, {
                    e: 13828356e5,
                    s: 13646916e5
                }, {
                    e: 14142852e5,
                    s: 13961412e5
                }]
            }, {
                name: "Europe/Minsk",
                rules: [{
                    e: 12249792e5,
                    s: 12068352e5
                }, {
                    e: 12564288e5,
                    s: 12382848e5
                }, {
                    e: 12884832e5,
                    s: 12697344e5
                }, !1, !1, !1, !1]
            }, {
                name: "Europe/Moscow",
                rules: [{
                    e: 12249756e5,
                    s: 12068316e5
                }, {
                    e: 12564252e5,
                    s: 12382812e5
                }, {
                    e: 12884796e5,
                    s: 12697308e5
                }, !1, !1, !1, !1]
            }, {
                name: "Pacific/Apia",
                rules: [!1, !1, !1, {
                    e: 13017528e5,
                    s: 13168728e5
                }, {
                    e: 13332024e5,
                    s: 13489272e5
                }, {
                    e: 13652568e5,
                    s: 13803768e5
                }, {
                    e: 13967064e5,
                    s: 14118264e5
                }]
            }, {
                name: "Pacific/Fiji",
                rules: [!1, !1, {
                    e: 12696984e5,
                    s: 12878424e5
                }, {
                    e: 13271544e5,
                    s: 1319292e6
                }, {
                    e: 1358604e6,
                    s: 13507416e5
                }, {
                    e: 139005e7,
                    s: 1382796e6
                }, {
                    e: 14215032e5,
                    s: 14148504e5
                }]
            }, {
                name: "Europe/London",
                rules: [{
                    e: 12249828e5,
                    s: 12068388e5
                }, {
                    e: 12564324e5,
                    s: 12382884e5
                }, {
                    e: 12884868e5,
                    s: 1269738e6
                }, {
                    e: 13199364e5,
                    s: 13011876e5
                }, {
                    e: 1351386e6,
                    s: 13326372e5
                }, {
                    e: 13828356e5,
                    s: 13646916e5
                }, {
                    e: 14142852e5,
                    s: 13961412e5
                }]
            }]
        }, "undefined" != typeof module && void 0 !== module.exports ? module.exports = t : "undefined" != typeof define && null !== define && null != define.amd ? define([], function() {
            return t
        }) : window.jstz = t
    }(),
    function(e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
    }(function(e) {
        "use strict";
        var t = window.Slick || {};
        (t = function() {
            var t = 0;
            return function(o, i) {
                var s, n = this;
                n.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: e(o),
                    appendDots: e(o),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function(e, t) {
                        return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (t + 1) + "</button>"
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !1,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3
                }, n.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1
                }, e.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.hidden = "hidden", n.paused = !1, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = e(o), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = e(o).data("slick") || {}, n.options = e.extend({}, n.defaults, s, i), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = e.proxy(n.autoPlay, n), n.autoPlayClear = e.proxy(n.autoPlayClear, n), n.changeSlide = e.proxy(n.changeSlide, n), n.clickHandler = e.proxy(n.clickHandler, n), n.selectHandler = e.proxy(n.selectHandler, n), n.setPosition = e.proxy(n.setPosition, n), n.swipeHandler = e.proxy(n.swipeHandler, n), n.dragHandler = e.proxy(n.dragHandler, n), n.keyHandler = e.proxy(n.keyHandler, n), n.autoPlayIterator = e.proxy(n.autoPlayIterator, n), n.instanceUid = t++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0), n.checkResponsive(!0)
            }
        }()).prototype.addSlide = t.prototype.slickAdd = function(t, o, i) {
            var s = this;
            if ("boolean" == typeof o) i = o, o = null;
            else if (0 > o || o >= s.slideCount) return !1;
            s.unload(), "number" == typeof o ? 0 === o && 0 === s.$slides.length ? e(t).appendTo(s.$slideTrack) : i ? e(t).insertBefore(s.$slides.eq(o)) : e(t).insertAfter(s.$slides.eq(o)) : !0 === i ? e(t).prependTo(s.$slideTrack) : e(t).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function(t, o) {
                e(o).attr("data-slick-index", t)
            }), s.$slidesCache = s.$slides, s.reinit()
        }, t.prototype.animateHeight = function() {
            var e = this;
            if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.animate({
                    height: t
                }, e.options.speed)
            }
        }, t.prototype.animateSlide = function(t, o) {
            var i = {},
                s = this;
            s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (t = -t), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
                left: t
            }, s.options.speed, s.options.easing, o) : s.$slideTrack.animate({
                top: t
            }, s.options.speed, s.options.easing, o) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), e({
                animStart: s.currentLeft
            }).animate({
                animStart: t
            }, {
                duration: s.options.speed,
                easing: s.options.easing,
                step: function(e) {
                    e = Math.ceil(e), !1 === s.options.vertical ? (i[s.animType] = "translate(" + e + "px, 0px)", s.$slideTrack.css(i)) : (i[s.animType] = "translate(0px," + e + "px)", s.$slideTrack.css(i))
                },
                complete: function() {
                    o && o.call()
                }
            })) : (s.applyTransition(), t = Math.ceil(t), !1 === s.options.vertical ? i[s.animType] = "translate3d(" + t + "px, 0px, 0px)" : i[s.animType] = "translate3d(0px," + t + "px, 0px)", s.$slideTrack.css(i), o && setTimeout(function() {
                s.disableTransition(), o.call()
            }, s.options.speed))
        }, t.prototype.asNavFor = function(t) {
            var o = this.options.asNavFor;
            o && null !== o && (o = e(o).not(this.$slider)), null !== o && "object" == typeof o && o.each(function() {
                var o = e(this).slick("getSlick");
                o.unslicked || o.slideHandler(t, !0)
            })
        }, t.prototype.applyTransition = function(e) {
            var t = this,
                o = {};
            !1 === t.options.fade ? o[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : o[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(o) : t.$slides.eq(e).css(o)
        }, t.prototype.autoPlay = function() {
            var e = this;
            e.autoPlayTimer && clearInterval(e.autoPlayTimer), e.slideCount > e.options.slidesToShow && !0 !== e.paused && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
        }, t.prototype.autoPlayClear = function() {
            this.autoPlayTimer && clearInterval(this.autoPlayTimer)
        }, t.prototype.autoPlayIterator = function() {
            var e = this;
            !1 === e.options.infinite ? 1 === e.direction ? (e.currentSlide + 1 === e.slideCount - 1 && (e.direction = 0), e.slideHandler(e.currentSlide + e.options.slidesToScroll)) : (e.currentSlide - 1 == 0 && (e.direction = 1), e.slideHandler(e.currentSlide - e.options.slidesToScroll)) : e.slideHandler(e.currentSlide + e.options.slidesToScroll)
        }, t.prototype.buildArrows = function() {
            var t = this;
            !0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, t.prototype.buildDots = function() {
            var t, o, i = this;
            if (!0 === i.options.dots && i.slideCount > i.options.slidesToShow) {
                for (o = '<ul class="' + i.options.dotsClass + '">', t = 0; t <= i.getDotCount(); t += 1) o += "<li>" + i.options.customPaging.call(this, i, t) + "</li>";
                o += "</ul>", i.$dots = e(o).appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
            }
        }, t.prototype.buildOut = function() {
            var t = this;
            t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function(t, o) {
                e(o).attr("data-slick-index", t).data("originalStyling", e(o).attr("style") || "")
            }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), (!0 === t.options.centerMode || !0 === t.options.swipeToSlide) && (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable")
        }, t.prototype.buildRows = function() {
            var e, t, o, i, s, n, a, r = this;
            if (i = document.createDocumentFragment(), n = r.$slider.children(), r.options.rows > 1) {
                for (a = r.options.slidesPerRow * r.options.rows, s = Math.ceil(n.length / a), e = 0; s > e; e++) {
                    var l = document.createElement("div");
                    for (t = 0; t < r.options.rows; t++) {
                        var c = document.createElement("div");
                        for (o = 0; o < r.options.slidesPerRow; o++) {
                            var d = e * a + (t * r.options.slidesPerRow + o);
                            n.get(d) && c.appendChild(n.get(d))
                        }
                        l.appendChild(c)
                    }
                    i.appendChild(l)
                }
                r.$slider.html(i), r.$slider.children().children().children().css({
                    width: 100 / r.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, t.prototype.checkResponsive = function(t, o) {
            var i, s, n, a = this,
                r = !1,
                l = a.$slider.width(),
                c = window.innerWidth || e(window).width();
            if ("window" === a.respondTo ? n = c : "slider" === a.respondTo ? n = l : "min" === a.respondTo && (n = Math.min(c, l)), a.options.responsive && a.options.responsive.length && null !== a.options.responsive) {
                for (i in s = null, a.breakpoints) a.breakpoints.hasOwnProperty(i) && (!1 === a.originalSettings.mobileFirst ? n < a.breakpoints[i] && (s = a.breakpoints[i]) : n > a.breakpoints[i] && (s = a.breakpoints[i]));
                null !== s ? null !== a.activeBreakpoint ? (s !== a.activeBreakpoint || o) && (a.activeBreakpoint = s, "unslick" === a.breakpointSettings[s] ? a.unslick(s) : (a.options = e.extend({}, a.originalSettings, a.breakpointSettings[s]), !0 === t && (a.currentSlide = a.options.initialSlide), a.refresh(t)), r = s) : (a.activeBreakpoint = s, "unslick" === a.breakpointSettings[s] ? a.unslick(s) : (a.options = e.extend({}, a.originalSettings, a.breakpointSettings[s]), !0 === t && (a.currentSlide = a.options.initialSlide), a.refresh(t)), r = s) : null !== a.activeBreakpoint && (a.activeBreakpoint = null, a.options = a.originalSettings, !0 === t && (a.currentSlide = a.options.initialSlide), a.refresh(t), r = s), t || !1 === r || a.$slider.trigger("breakpoint", [a, r])
            }
        }, t.prototype.changeSlide = function(t, o) {
            var i, s, n = this,
                a = e(t.target);
            switch (a.is("a") && t.preventDefault(), a.is("li") || (a = a.closest("li")), i = n.slideCount % n.options.slidesToScroll != 0 ? 0 : (n.slideCount - n.currentSlide) % n.options.slidesToScroll, t.data.message) {
                case "previous":
                    s = 0 === i ? n.options.slidesToScroll : n.options.slidesToShow - i, n.slideCount > n.options.slidesToShow && n.slideHandler(n.currentSlide - s, !1, o);
                    break;
                case "next":
                    s = 0 === i ? n.options.slidesToScroll : i, n.slideCount > n.options.slidesToShow && n.slideHandler(n.currentSlide + s, !1, o);
                    break;
                case "index":
                    var r = 0 === t.data.index ? 0 : t.data.index || a.index() * n.options.slidesToScroll;
                    n.slideHandler(n.checkNavigable(r), !1, o), a.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, t.prototype.checkNavigable = function(e) {
            var t, o;
            if (o = 0, e > (t = this.getNavigableIndexes())[t.length - 1]) e = t[t.length - 1];
            else
                for (var i in t) {
                    if (e < t[i]) {
                        e = o;
                        break
                    }
                    o = t[i]
                }
            return e
        }, t.prototype.cleanUpEvents = function() {
            var t = this;
            t.options.dots && null !== t.$dots && (e("li", t.$dots).off("click.slick", t.changeSlide), !0 === t.options.pauseOnDotsHover && !0 === t.options.autoplay && e("li", t.$dots).off("mouseenter.slick", e.proxy(t.setPaused, t, !0)).off("mouseleave.slick", e.proxy(t.setPaused, t, !1))), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide)), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.$list.off("mouseenter.slick", e.proxy(t.setPaused, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.setPaused, t, !1)), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).off("ready.slick.slick-" + t.instanceUid, t.setPosition)
        }, t.prototype.cleanUpRows = function() {
            var e, t = this;
            t.options.rows > 1 && ((e = t.$slides.children().children()).removeAttr("style"), t.$slider.html(e))
        }, t.prototype.clickHandler = function(e) {
            !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
        }, t.prototype.destroy = function(t) {
            var o = this;
            o.autoPlayClear(), o.touchObject = {}, o.cleanUpEvents(), e(".slick-cloned", o.$slider).detach(), o.$dots && o.$dots.remove(), o.$prevArrow && o.$prevArrow.length && (o.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), o.htmlExpr.test(o.options.prevArrow) && o.$prevArrow.remove()), o.$nextArrow && o.$nextArrow.length && (o.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), o.htmlExpr.test(o.options.nextArrow) && o.$nextArrow.remove()), o.$slides && (o.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                e(this).attr("style", e(this).data("originalStyling"))
            }), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.detach(), o.$list.detach(), o.$slider.append(o.$slides)), o.cleanUpRows(), o.$slider.removeClass("slick-slider"), o.$slider.removeClass("slick-initialized"), o.unslicked = !0, t || o.$slider.trigger("destroy", [o])
        }, t.prototype.disableTransition = function(e) {
            var t = this,
                o = {};
            o[t.transitionType] = "", !1 === t.options.fade ? t.$slideTrack.css(o) : t.$slides.eq(e).css(o)
        }, t.prototype.fadeSlide = function(e, t) {
            var o = this;
            !1 === o.cssTransitions ? (o.$slides.eq(e).css({
                zIndex: o.options.zIndex
            }), o.$slides.eq(e).animate({
                opacity: 1
            }, o.options.speed, o.options.easing, t)) : (o.applyTransition(e), o.$slides.eq(e).css({
                opacity: 1,
                zIndex: o.options.zIndex
            }), t && setTimeout(function() {
                o.disableTransition(e), t.call()
            }, o.options.speed))
        }, t.prototype.fadeSlideOut = function(e) {
            var t = this;
            !1 === t.cssTransitions ? t.$slides.eq(e).animate({
                opacity: 0,
                zIndex: t.options.zIndex - 2
            }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
                opacity: 0,
                zIndex: t.options.zIndex - 2
            }))
        }, t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
            var t = this;
            null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
        }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
            return this.currentSlide
        }, t.prototype.getDotCount = function() {
            var e = this,
                t = 0,
                o = 0,
                i = 0;
            if (!0 === e.options.infinite)
                for (; t < e.slideCount;) ++i, t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            else if (!0 === e.options.centerMode) i = e.slideCount;
            else
                for (; t < e.slideCount;) ++i, t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            return i - 1
        }, t.prototype.getLeft = function(e) {
            var t, o, i, s = this,
                n = 0;
            return s.slideOffset = 0, o = s.$slides.first().outerHeight(!0), !0 === s.options.infinite ? (s.slideCount > s.options.slidesToShow && (s.slideOffset = s.slideWidth * s.options.slidesToShow * -1, n = o * s.options.slidesToShow * -1), s.slideCount % s.options.slidesToScroll != 0 && e + s.options.slidesToScroll > s.slideCount && s.slideCount > s.options.slidesToShow && (e > s.slideCount ? (s.slideOffset = (s.options.slidesToShow - (e - s.slideCount)) * s.slideWidth * -1, n = (s.options.slidesToShow - (e - s.slideCount)) * o * -1) : (s.slideOffset = s.slideCount % s.options.slidesToScroll * s.slideWidth * -1, n = s.slideCount % s.options.slidesToScroll * o * -1))) : e + s.options.slidesToShow > s.slideCount && (s.slideOffset = (e + s.options.slidesToShow - s.slideCount) * s.slideWidth, n = (e + s.options.slidesToShow - s.slideCount) * o), s.slideCount <= s.options.slidesToShow && (s.slideOffset = 0, n = 0), !0 === s.options.centerMode && !0 === s.options.infinite ? s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2) - s.slideWidth : !0 === s.options.centerMode && (s.slideOffset = 0, s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2)), t = !1 === s.options.vertical ? e * s.slideWidth * -1 + s.slideOffset : e * o * -1 + n, !0 === s.options.variableWidth && (i = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(e) : s.$slideTrack.children(".slick-slide").eq(e + s.options.slidesToShow), t = !0 === s.options.rtl ? i[0] ? -1 * (s.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, !0 === s.options.centerMode && (i = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(e) : s.$slideTrack.children(".slick-slide").eq(e + s.options.slidesToShow + 1), t = !0 === s.options.rtl ? i[0] ? -1 * (s.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, t += (s.$list.width() - i.outerWidth()) / 2)), t
        }, t.prototype.getOption = t.prototype.slickGetOption = function(e) {
            return this.options[e]
        }, t.prototype.getNavigableIndexes = function() {
            var e, t = this,
                o = 0,
                i = 0,
                s = [];
            for (!1 === t.options.infinite ? e = t.slideCount : (o = -1 * t.options.slidesToScroll, i = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); e > o;) s.push(o), o = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            return s
        }, t.prototype.getSlick = function() {
            return this
        }, t.prototype.getSlideCount = function() {
            var t, o, i = this;
            return o = !0 === i.options.centerMode ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0, !0 === i.options.swipeToSlide ? (i.$slideTrack.find(".slick-slide").each(function(s, n) {
                return n.offsetLeft - o + e(n).outerWidth() / 2 > -1 * i.swipeLeft ? (t = n, !1) : void 0
            }), Math.abs(e(t).attr("data-slick-index") - i.currentSlide) || 1) : i.options.slidesToScroll
        }, t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
            this.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(e)
                }
            }, t)
        }, t.prototype.init = function(t) {
            var o = this;
            e(o.$slider).hasClass("slick-initialized") || (e(o.$slider).addClass("slick-initialized"), o.buildRows(), o.buildOut(), o.setProps(), o.startLoad(), o.loadSlider(), o.initializeEvents(), o.updateArrows(), o.updateDots()), t && o.$slider.trigger("init", [o]), !0 === o.options.accessibility && o.initADA()
        }, t.prototype.initArrowEvents = function() {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.on("click.slick", {
                message: "previous"
            }, e.changeSlide), e.$nextArrow.on("click.slick", {
                message: "next"
            }, e.changeSlide))
        }, t.prototype.initDotEvents = function() {
            var t = this;
            !0 === t.options.dots && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("click.slick", {
                message: "index"
            }, t.changeSlide), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && !0 === t.options.autoplay && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.setPaused, t, !0)).on("mouseleave.slick", e.proxy(t.setPaused, t, !1))
        }, t.prototype.initializeEvents = function() {
            var t = this;
            t.initArrowEvents(), t.initDotEvents(), t.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), t.$list.on("mouseenter.slick", e.proxy(t.setPaused, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.setPaused, t, !1)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition)
        }, t.prototype.initUI = function() {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show(), !0 === e.options.autoplay && e.autoPlay()
        }, t.prototype.keyHandler = function(e) {
            var t = this;
            e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
                data: {
                    message: "previous"
                }
            }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
                data: {
                    message: "next"
                }
            }))
        }, t.prototype.lazyLoad = function() {
            function t(t) {
                e("img[data-lazy]", t).each(function() {
                    var t = e(this),
                        o = e(this).attr("data-lazy"),
                        i = document.createElement("img");
                    i.onload = function() {
                        t.animate({
                            opacity: 0
                        }, 100, function() {
                            t.attr("src", o).animate({
                                opacity: 1
                            }, 200, function() {
                                t.removeAttr("data-lazy").removeClass("slick-loading")
                            })
                        })
                    }, i.src = o
                })
            }
            var o, i, s = this;
            !0 === s.options.centerMode ? !0 === s.options.infinite ? i = (o = s.currentSlide + (s.options.slidesToShow / 2 + 1)) + s.options.slidesToShow + 2 : (o = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)), i = s.options.slidesToShow / 2 + 1 + 2 + s.currentSlide) : (i = (o = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide) + s.options.slidesToShow, !0 === s.options.fade && (o > 0 && o--, i <= s.slideCount && i++)), t(s.$slider.find(".slick-slide").slice(o, i)), s.slideCount <= s.options.slidesToShow ? t(s.$slider.find(".slick-slide")) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? t(s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow)) : 0 === s.currentSlide && t(s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow))
        }, t.prototype.loadSlider = function() {
            var e = this;
            e.setPosition(), e.$slideTrack.css({
                opacity: 1
            }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
        }, t.prototype.next = t.prototype.slickNext = function() {
            this.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, t.prototype.orientationChange = function() {
            this.checkResponsive(), this.setPosition()
        }, t.prototype.pause = t.prototype.slickPause = function() {
            this.autoPlayClear(), this.paused = !0
        }, t.prototype.play = t.prototype.slickPlay = function() {
            this.paused = !1, this.autoPlay()
        }, t.prototype.postSlide = function(e) {
            var t = this;
            t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.setPosition(), t.swipeLeft = null, !0 === t.options.autoplay && !1 === t.paused && t.autoPlay(), !0 === t.options.accessibility && t.initADA()
        }, t.prototype.prev = t.prototype.slickPrev = function() {
            this.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, t.prototype.preventDefault = function(e) {
            e.preventDefault()
        }, t.prototype.progressiveLazyLoad = function() {
            var t, o = this;
            e("img[data-lazy]", o.$slider).length > 0 && ((t = e("img[data-lazy]", o.$slider).first()).attr("src", null), t.attr("src", t.attr("data-lazy")).removeClass("slick-loading").load(function() {
                t.removeAttr("data-lazy"), o.progressiveLazyLoad(), !0 === o.options.adaptiveHeight && o.setPosition()
            }).error(function() {
                t.removeAttr("data-lazy"), o.progressiveLazyLoad()
            }))
        }, t.prototype.refresh = function(t) {
            var o, i, s = this;
            i = s.slideCount - s.options.slidesToShow, s.options.infinite || (s.slideCount <= s.options.slidesToShow ? s.currentSlide = 0 : s.currentSlide > i && (s.currentSlide = i)), o = s.currentSlide, s.destroy(!0), e.extend(s, s.initials, {
                currentSlide: o
            }), s.init(), t || s.changeSlide({
                data: {
                    message: "index",
                    index: o
                }
            }, !1)
        }, t.prototype.registerBreakpoints = function() {
            var t, o, i, s = this,
                n = s.options.responsive || null;
            if ("array" === e.type(n) && n.length) {
                for (t in s.respondTo = s.options.respondTo || "window", n)
                    if (i = s.breakpoints.length - 1, o = n[t].breakpoint, n.hasOwnProperty(t)) {
                        for (; i >= 0;) s.breakpoints[i] && s.breakpoints[i] === o && s.breakpoints.splice(i, 1), i--;
                        s.breakpoints.push(o), s.breakpointSettings[o] = n[t].settings
                    } s.breakpoints.sort(function(e, t) {
                    return s.options.mobileFirst ? e - t : t - e
                })
            }
        }, t.prototype.reinit = function() {
            var t = this;
            t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses(0), t.setPosition(), t.$slider.trigger("reInit", [t]), !0 === t.options.autoplay && t.focusHandler()
        }, t.prototype.resize = function() {
            var t = this;
            e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
                t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
            }, 50))
        }, t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, o) {
            var i = this;
            return "boolean" == typeof e ? e = !0 === (t = e) ? 0 : i.slideCount - 1 : e = !0 === t ? --e : e, !(i.slideCount < 1 || 0 > e || e > i.slideCount - 1) && (i.unload(), !0 === o ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(e).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, void i.reinit())
        }, t.prototype.setCSS = function(e) {
            var t, o, i = this,
                s = {};
            !0 === i.options.rtl && (e = -e), t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px", o = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px", s[i.positionProp] = e, !1 === i.transformsEnabled ? i.$slideTrack.css(s) : (s = {}, !1 === i.cssTransitions ? (s[i.animType] = "translate(" + t + ", " + o + ")", i.$slideTrack.css(s)) : (s[i.animType] = "translate3d(" + t + ", " + o + ", 0px)", i.$slideTrack.css(s)))
        }, t.prototype.setDimensions = function() {
            var e = this;
            !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
                padding: "0px " + e.options.centerPadding
            }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
                padding: e.options.centerPadding + " 0px"
            })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
            var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
            !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
        }, t.prototype.setFade = function() {
            var t, o = this;
            o.$slides.each(function(i, s) {
                t = o.slideWidth * i * -1, !0 === o.options.rtl ? e(s).css({
                    position: "relative",
                    right: t,
                    top: 0,
                    zIndex: o.options.zIndex - 2,
                    opacity: 0
                }) : e(s).css({
                    position: "relative",
                    left: t,
                    top: 0,
                    zIndex: o.options.zIndex - 2,
                    opacity: 0
                })
            }), o.$slides.eq(o.currentSlide).css({
                zIndex: o.options.zIndex - 1,
                opacity: 1
            })
        }, t.prototype.setHeight = function() {
            var e = this;
            if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.css("height", t)
            }
        }, t.prototype.setOption = t.prototype.slickSetOption = function(t, o, i) {
            var s, n, a = this;
            if ("responsive" === t && "array" === e.type(o))
                for (n in o)
                    if ("array" !== e.type(a.options.responsive)) a.options.responsive = [o[n]];
                    else {
                        for (s = a.options.responsive.length - 1; s >= 0;) a.options.responsive[s].breakpoint === o[n].breakpoint && a.options.responsive.splice(s, 1), s--;
                        a.options.responsive.push(o[n])
                    }
            else a.options[t] = o;
            !0 === i && (a.unload(), a.reinit())
        }, t.prototype.setPosition = function() {
            var e = this;
            e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
        }, t.prototype.setProps = function() {
            var e = this,
                t = document.body.style;
            e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), (void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.msTransition) && !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
        }, t.prototype.setSlideClasses = function(e) {
            var t, o, i, s, n = this;
            o = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(e).addClass("slick-current"), !0 === n.options.centerMode ? (t = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (e >= t && e <= n.slideCount - 1 - t ? n.$slides.slice(e - t, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = n.options.slidesToShow + e, o.slice(i - t + 1, i + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? o.eq(o.length - 1 - n.options.slidesToShow).addClass("slick-center") : e === n.slideCount - 1 && o.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(e).addClass("slick-center")) : e >= 0 && e <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(e, e + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : o.length <= n.options.slidesToShow ? o.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, i = !0 === n.options.infinite ? n.options.slidesToShow + e : e, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - e < n.options.slidesToShow ? o.slice(i - (n.options.slidesToShow - s), i + s).addClass("slick-active").attr("aria-hidden", "false") : o.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === n.options.lazyLoad && n.lazyLoad()
        }, t.prototype.setupInfinite = function() {
            var t, o, i, s = this;
            if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (o = null, s.slideCount > s.options.slidesToShow)) {
                for (i = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, t = s.slideCount; t > s.slideCount - i; t -= 1) o = t - 1, e(s.$slides[o]).clone(!0).attr("id", "").attr("data-slick-index", o - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
                for (t = 0; i > t; t += 1) o = t, e(s.$slides[o]).clone(!0).attr("id", "").attr("data-slick-index", o + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
                s.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    e(this).attr("id", "")
                })
            }
        }, t.prototype.setPaused = function(e) {
            var t = this;
            !0 === t.options.autoplay && !0 === t.options.pauseOnHover && (t.paused = e, e ? t.autoPlayClear() : t.autoPlay())
        }, t.prototype.selectHandler = function(t) {
            var o = this,
                i = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
                s = parseInt(i.attr("data-slick-index"));
            return s || (s = 0), o.slideCount <= o.options.slidesToShow ? (o.setSlideClasses(s), void o.asNavFor(s)) : void o.slideHandler(s)
        }, t.prototype.slideHandler = function(e, t, o) {
            var i, s, n, a, r = null,
                l = this;
            return t = t || !1, !0 === l.animating && !0 === l.options.waitForAnimate || !0 === l.options.fade && l.currentSlide === e || l.slideCount <= l.options.slidesToShow ? void 0 : (!1 === t && l.asNavFor(e), i = e, r = l.getLeft(i), a = l.getLeft(l.currentSlide), l.currentLeft = null === l.swipeLeft ? a : l.swipeLeft, !1 === l.options.infinite && !1 === l.options.centerMode && (0 > e || e > l.getDotCount() * l.options.slidesToScroll) ? void(!1 === l.options.fade && (i = l.currentSlide, !0 !== o ? l.animateSlide(a, function() {
                l.postSlide(i)
            }) : l.postSlide(i))) : !1 === l.options.infinite && !0 === l.options.centerMode && (0 > e || e > l.slideCount - l.options.slidesToScroll) ? void(!1 === l.options.fade && (i = l.currentSlide, !0 !== o ? l.animateSlide(a, function() {
                l.postSlide(i)
            }) : l.postSlide(i))) : (!0 === l.options.autoplay && clearInterval(l.autoPlayTimer), s = 0 > i ? l.slideCount % l.options.slidesToScroll != 0 ? l.slideCount - l.slideCount % l.options.slidesToScroll : l.slideCount + i : i >= l.slideCount ? l.slideCount % l.options.slidesToScroll != 0 ? 0 : i - l.slideCount : i, l.animating = !0, l.$slider.trigger("beforeChange", [l, l.currentSlide, s]), n = l.currentSlide, l.currentSlide = s, l.setSlideClasses(l.currentSlide), l.updateDots(), l.updateArrows(), !0 === l.options.fade ? (!0 !== o ? (l.fadeSlideOut(n), l.fadeSlide(s, function() {
                l.postSlide(s)
            })) : l.postSlide(s), void l.animateHeight()) : void(!0 !== o ? l.animateSlide(r, function() {
                l.postSlide(s)
            }) : l.postSlide(s))))
        }, t.prototype.startLoad = function() {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
        }, t.prototype.swipeDirection = function() {
            var e, t, o, i, s = this;
            return e = s.touchObject.startX - s.touchObject.curX, t = s.touchObject.startY - s.touchObject.curY, o = Math.atan2(t, e), 0 > (i = Math.round(180 * o / Math.PI)) && (i = 360 - Math.abs(i)), 45 >= i && i >= 0 ? !1 === s.options.rtl ? "left" : "right" : 360 >= i && i >= 315 ? !1 === s.options.rtl ? "left" : "right" : i >= 135 && 225 >= i ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? i >= 35 && 135 >= i ? "left" : "right" : "vertical"
        }, t.prototype.swipeEnd = function(e) {
            var t, o = this;
            if (o.dragging = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;
            if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) switch (o.swipeDirection()) {
                case "left":
                    t = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.slideHandler(t), o.currentDirection = 0, o.touchObject = {}, o.$slider.trigger("swipe", [o, "left"]);
                    break;
                case "right":
                    t = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.slideHandler(t), o.currentDirection = 1, o.touchObject = {}, o.$slider.trigger("swipe", [o, "right"])
            } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {})
        }, t.prototype.swipeHandler = function(e) {
            var t = this;
            if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
                case "start":
                    t.swipeStart(e);
                    break;
                case "move":
                    t.swipeMove(e);
                    break;
                case "end":
                    t.swipeEnd(e)
            }
        }, t.prototype.swipeMove = function(e) {
            var t, o, i, s, n, a = this;
            return n = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!a.dragging || n && 1 !== n.length) && (t = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== n ? n[0].pageX : e.clientX, a.touchObject.curY = void 0 !== n ? n[0].pageY : e.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), !0 === a.options.verticalSwiping && (a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2)))), "vertical" !== (o = a.swipeDirection()) ? (void 0 !== e.originalEvent && a.touchObject.swipeLength > 4 && e.preventDefault(), s = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (s = a.touchObject.curY > a.touchObject.startY ? 1 : -1), i = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, !1 === a.options.infinite && (0 === a.currentSlide && "right" === o || a.currentSlide >= a.getDotCount() && "left" === o) && (i = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = t + i * s : a.swipeLeft = t + i * (a.$list.height() / a.listWidth) * s, !0 === a.options.verticalSwiping && (a.swipeLeft = t + i * s), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))) : void 0)
        }, t.prototype.swipeStart = function(e) {
            var t, o = this;
            return 1 !== o.touchObject.fingerCount || o.slideCount <= o.options.slidesToShow ? (o.touchObject = {}, !1) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), o.touchObject.startX = o.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, o.touchObject.startY = o.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, void(o.dragging = !0))
        }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
            var e = this;
            null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
        }, t.prototype.unload = function() {
            var t = this;
            e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, t.prototype.unslick = function(e) {
            var t = this;
            t.$slider.trigger("unslick", [t, e]), t.destroy()
        }, t.prototype.updateArrows = function() {
            var e = this;
            Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, t.prototype.updateDots = function() {
            var e = this;
            null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
        }, t.prototype.visibility = function() {
            var e = this;
            document[e.hidden] ? (e.paused = !0, e.autoPlayClear()) : !0 === e.options.autoplay && (e.paused = !1, e.autoPlay())
        }, t.prototype.initADA = function() {
            var t = this;
            t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), t.$slideTrack.attr("role", "listbox"), t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(o) {
                e(this).attr({
                    role: "option",
                    "aria-describedby": "slick-slide" + t.instanceUid + o
                })
            }), null !== t.$dots && t.$dots.attr("role", "tablist").find("li").each(function(o) {
                e(this).attr({
                    role: "presentation",
                    "aria-selected": "false",
                    "aria-controls": "navigation" + t.instanceUid + o,
                    id: "slick-slide" + t.instanceUid + o
                })
            }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), t.activateADA()
        }, t.prototype.activateADA = function() {
            this.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            })
        }, t.prototype.focusHandler = function() {
            var t = this;
            t.$slider.on("focus.slick blur.slick", "*", function(o) {
                o.stopImmediatePropagation();
                var i = e(this);
                setTimeout(function() {
                    t.isPlay && (i.is(":focus") ? (t.autoPlayClear(), t.paused = !0) : (t.paused = !1, t.autoPlay()))
                }, 0)
            })
        }, e.fn.slick = function() {
            var e, o, i = this,
                s = arguments[0],
                n = Array.prototype.slice.call(arguments, 1),
                a = i.length;
            for (e = 0; a > e; e++)
                if ("object" == typeof s || void 0 === s ? i[e].slick = new t(i[e], s) : o = i[e].slick[s].apply(i[e].slick, n), void 0 !== o) return o;
            return i
        }
    });
var observe, openFlag = !1;

function showModal(e, t) {
    0 == t ? e.show() : e.fadeIn(t), $("body").addClass("overflow-hidden");
    var o = function(e) {
            if (e.matches) {
                var t = $(".js-navigation");
                t.is(":visible") && t.hide()
            }
        },
        i = window.matchMedia("(max-width: 1024px)");
    o(i), i.addListener(o)
}

function closeModal(e, t) {
    0 == t ? e.hide() : e.fadeOut(t), $("body").removeClass("overflow-hidden")
}

function getDeadlineDate(e) {
    var t = new Date;
    t.setDate(t.getDate() + e);
    var o = t.getMonth() + 1;
    o = o < 10 ? "0" + o : o;
    var i = t.getDate();
    i = i < 10 ? "0" + i : i;
    var s = t.getHours();
    s = s < 10 ? "0" + s : s;
    var n = t.getMinutes();
    return n = n < 10 ? "0" + n : n, o + "/" + i + "/" + t.getFullYear() + " " + s + ":" + n
}

function getDeadlineTimeLeft(e) {
    if (e) {
        var t = parseInt(e.substring(0, 2)) - 1,
            o = parseInt(e.substring(3, 5)),
            i = parseInt(e.substring(6, 10)),
            s = parseInt(e.substring(11, 13)),
            n = parseInt(e.substring(14, 16)),
            a = new Date,
            r = new Date(a.getFullYear(), a.getMonth(), a.getDate(), a.getHours(), a.getMinutes(), 0, 0),
            l = new Date(i, t, o, s, n, 0, 0).getTime() - r,
            c = 1;
        l < 0 && (l *= -1, c = -1);
        var d = Math.floor(l / 1e3);
        return {
            daysLeft: Math.floor(d / 86400) * c,
            hoursLeft: Math.floor(d % 86400 / 3600) * c,
            minutesLeft: Math.floor(d % 86400 % 3600 / 60) * c,
            status: c
        }
    }
    return ""
}

function timeLeftGPU(e, t, o) {
    if (0 != o) {
        e.val(getDeadlineDate(o));
        var i = getDeadlineTimeLeft(e.val()),
            s = "";
        i && (s += i.daysLeft, s += 1 == i.daysLeft || -1 == i.daysLeft ? " day " : " days ", s += i.hoursLeft, s += 1 == i.hoursLeft || -1 == i.hoursLeft ? " hour " : " hours ", s += i.minutesLeft, s += 1 == i.minutesLeft || -1 == i.minutesLeft ? " minute " : " minutes ", t.text(s + "left"))
    }
    e.on("change", function() {
        if ((i = getDeadlineTimeLeft(e.val())) && (i.daysLeft = 0) && i.hoursLeft < 1) t.html('<span class="help-block2 js-due-error-block">Deadline date and time must be in future</span>');
        else if ($(this).val()) {
            var o = "";
            (i = getDeadlineTimeLeft(e.val())) && (o += i.daysLeft, o += 1 == i.daysLeft || -1 == i.daysLeft ? " day " : " days ", o += i.hoursLeft, o += 1 == i.hoursLeft || -1 == i.hoursLeft ? " hour " : " hours ", o += i.minutesLeft, o += 1 == i.minutesLeft || -1 == i.minutesLeft ? " minute " : " minutes ", t.text(o + "left"))
        } else t.text("")
    })
}

function getCookieGlobal(e) {
    var t = document.cookie.match(new RegExp("(?:^|; )" + e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
    return t ? decodeURIComponent(t[1]) : void 0
}

function init() {
    var e = document.getElementById("js-chat-textarea");

    function t() {
        e.style.height = "auto", e.style.height = e.scrollHeight + "px"
    }

    function o() {
        window.setTimeout(t, 0)
    }
    observe(e, "change", t), observe(e, "cut", o), observe(e, "paste", o), observe(e, "drop", o), observe(e, "keydown", o), t()
}

function scrolled(e) {
    e.offsetWidth + e.scrollLeft == e.scrollWidth ? $(".js-table-wrapper").removeClass("my-page__table-outer_state_faded") : $(".js-table-wrapper").addClass("my-page__table-outer_state_faded")
}

function tooglePreview(e) {
    var t = e.data("id");
    $(".js-content-" + t).toggleClass("box-hide"), "See answer's preview" == e.text() ? e.text("See less") : e.text("See answer's preview")
}

function htmlEncode(e) {
    return $("<div/>").text(e).html()
}
$(function() {
    "/" != document.location.pathname && jQuery(".header__search-input").autocompleter({
        combine: function(e) {
            return {
                term: e.query,
                count: e.limit,
                custom: !0
            }
        },
        focusOpen: !1,
        source: "/question/title-auto-complete?truncate=43",
        minLength: 1,
        delay: 100,
        callback: function(e, t, o) {
            jQuery(".header__search-input").val(e).closest("form").submit()
        }
    }), $(".js-header-search-button").click(function() {
        if ($(".js-header-search").hasClass("header__search_show_animation") ? $(".js-header-search").toggleClass("header__search_show_transition") : $(".js-header-search").removeClass("header__search_show_transition"), $(window).width() <= "767" && ($(".js-header-search").hasClass("header__search_show_animation") ? $("#header .container .logo").css("opacity", "1") : $("#header .container .logo").css("opacity", "0")), "" != $("#hw-answer-search").val() && openFlag) return $("#header-autocomplete-container").submit(), !1;
        $(".js-header-search").toggleClass("header__search_show_animation", 500).find("input").focus().val(""), openFlag = !openFlag
    })
}), $(document).mouseup(function(e) {
    var t = $(".js-header-search");
    t.is(e.target) || 0 !== t.has(e.target).length || t.removeClass("header__search_show_animation")
}), $(function() {
    var e = function(e) {
            e.matches && ($(".js-navigation-button").click(function() {
                $("header .js-navigation").slideToggle().addClass("slidedUp"), $(this).toggleClass("open")
            }), $(document).mouseup(function(e) {
                var t = $(".js-navigation, .js-navigation-button");
                !t.is(e.target) && 0 === t.has(e.target).length && $(window).width() < 1024 && ($("header .js-navigation").stop().slideUp().addClass("slidedUp"), $(".js-navigation-button").removeClass("open"))
            }))
        },
        t = window.matchMedia("(max-width: 1199px)");
    e(t), t.addListener(e)
}), $(".sidebar__question-textarea").click(function() {
    $(this).toggleClass("placeholder_invisible"), $(".sidebar__question-textarea::-webkit-input-placeholder").css("color", "#ffffff"), $(".sidebar__question-textarea:-moz-placeholder").css("color", "#ffffff"), $(".sidebar__question-textarea::-moz-placeholder").css("color", "#ffffff"), $(".sidebar__question-textarea:-ms-input-placeholder").css("color", "#ffffff")
}), $(function() {
    $(".js-close-sidebar").click(function() {
        $(".js-sidebar").toggleClass("sidebar_state_closed", 300), $(".js-content").toggleClass("content_state_full", 300), $(".js-close-sidebar i").toggleClass("fa-chevron-left fa-chevron-right")
    })
}), $("#registration-question-form").on("change", function(e) {
    "" != $(".field-questionregistrationform-email .modal__error-message").text().trim() && $(".field-questionregistrationform-email .modal__error-message").text("")
}), $(document).ready(function() {
    $(document).on("click", ".js-modal-close", function() {
        closeModal($(this).closest(".modal-outer"), 400)
    }), $(document).on("click", ".js-modal-register-btn", function() {
        closeModal($(".js-modal"), 0), $(".js-modal-register .switch").css("display", "block"), $(".js-reg-username").css("margin-top", "0"), showModal($(".js-modal-register"), 0)
    }), $(document).on("click", ".js-register-close", function() {
        closeModal($(".js-modal-register"), 400)
    }), $(document).on("click", ".js-register-question-close", function() {
        closeModal($(".js-modal-create-question-account"), 400)
    }), $(document).on("click", ".js-forbidden-copying-close", function() {
        closeModal($(".js-modal-forbidden-copying"), 400)
    }), $(document).on("click", ".js-forbidden-copying-link", function() {
        closeModal($(".js-modal-forbidden-copying"), 400)
    }), $(document).on("click", ".js-alert-modal-close", function() {
        closeModal($(".js-alert-modal"), 400)
    }), $(document).on("click", ".js-blurred-modal-button", function() {
        $(".wrapper").toggleClass("modal-fade_type_blurred")
    })
}), $(document).ready(function() {
    $(".js-cut-button").click(function() {
        var e = 'Show more <i class="fa fa-angle-right"></i>' === $.trim($(this).html()),
            t = 0;
        if (!e) {
            console.log("ddd");
            var o = $(this).parent().offset().top - $("header").height(),
                i = 300;
            t = 250;
            var s = $(document).scrollTop() - o;
            s > 150 && (s > 5e3 ? i = 250 : s > 1e3 ? (i = 200, t = 200) : s > 500 && (i = 150, t = 200), $("html, body").stop().animate({
                scrollTop: o
            }, i))
        }
        e ? ($(this).html('Hide <i class="fa fa-angle-left"></i>'), $(".js-cut-container").css({
            height: "auto"
        }).toggleClass("tutor-info__about_state_hidden", 300)) : ($(this).html('Show more <i class="fa fa-angle-right"></i>'), $(".js-cut-container").animate({
            height: 175
        }, 300).toggleClass("tutor-info__about_state_hidden", 300)), setTimeout(function() {
            return $(".js-cut-cont-container").toggleClass("category_description", 300), $(".js-cut-about-container").toggleClass("tutor-profile-about_hidden", 300), $(".question .body").css("max-height", "unset"), !1
        }, t)
    });
    var e = $(".js-cut-container");
    e.length > 0 && (e.removeClass("tutor-info__about_state_hidden"), e.height() <= 230 ? $(".js-cut-button").hide() : e.addClass("tutor-info__about_state_hidden"))
}), $(function() {
    $(".js-tooltip").tooltipster({
        minWidth: 200,
        maxWidth: 260
    })
}), $(document).ready(function() {
    $.fn.exists = function() {
        return this.length > 0
    }, $(window).width() >= "1200" && $(".frame_for_sidebar_sizes").exists() && (sidebar_frame.onresize = function(e) {
        $(".my-page").height()
    })
}), $(function() {
    $(".js-coast-input").bind("change keyup input click", function() {
        this.value.match(/[^0-9]/g) && (this.value = this.value.replace(/[^0-9]/g, ""))
    })
}), $("form").on("beforeSubmit", function(e) {
    return $("button[type=submit], input[type=submit]", $(this)).attr("disabled", !0), !0
}), Date.prototype.addHours = function(e) {
    return this.setHours(this.getHours() + e), this
}, $(function() {
    var e, t;
    $(".js-cancel-form-btn").on("click", function() {
        $(this).closest("form")[0].reset()
    }), $(".js-hide-old-orders").on("click", function() {
        window.location.href = "/my-questions?hide_old=1"
    }), $(".js-show-old-orders").on("click", function() {
        window.location.href = "/my-questions"
    }), (e = function(e) {
        e.matches && $(".js-hamburger-button").click(function() {
            $(this).toggleClass("open")
        })
    })(t = window.matchMedia("(max-width: 1024px)")), t.addListener(e), $(".js-faq-toggler").click(function() {
        return $(".js-finished-faq").slideToggle(), $(this).toggleClass("finished-page__faq-toggler_state_right"), '<i class="fa fa-question-circle">&nbsp;</i>Show how it works' === $.trim($(this).html()) ? $(this).html('<i class="fa fa-question-circle">&nbsp;</i>Hide how it works') : $(this).html('<i class="fa fa-question-circle">&nbsp;</i>Show how it works'), !1
    }), $(".js-faq-question").click(function(e) {
        e.preventDefault();
        var t = $(this).parent(),
            o = $(t).parent(),
            i = $(".js-faq-answer", t);
        return i.slideToggle(400), $(".js-faq-answer", o).not(i).slideUp(400), t.toggleClass("my-faq__item_state_active"), $(".js-faq-item", o).not(t).removeClass("my-faq__item_state_active"), !1
    }), $(".js-right-sidebar-question").click(function(e) {
        e.preventDefault();
        var t = $(this).parent(),
            o = $(t).parent(),
            i = $(".js-right-sidebar-answer", t);
        return i.slideToggle(400), $(".js-right-sidebar-answer", o).not(i).slideUp(400), t.toggleClass("right_sidebar__item_state_active"), $(".js-right-sidebar-item", o).not(t).removeClass("right_sidebar__item_state_active"), !1
    }), $('[data-toggle="tooltip"]').length > 0 && $('[data-toggle="tooltip"]').tooltipster({
        theme: "tooltipster-rating"
    }), $(".js-tabs-item").hide(), $(".js-tabs-item:first-of-type").show(), $(".js-tab").click(function(e) {
        e.preventDefault();
        var t = $(this),
            o = "#" + t.parents(".js-tabs").data("tabgroup"),
            i = t.closest("div").siblings().children(".js-tab"),
            s = t.attr("href");
        i.removeClass("my-page__tabs-link_state_active"), t.addClass("my-page__tabs-link_state_active"), $(o).children("div").hide(), $(s).show(), $(".js-tab-caption").text(t.data("caption"))
    }), $(".js-tab-toggler").click(function() {
        $(".js-tabs").toggle()
    }), $(".js-datepicker-icon").on("click", function() {
        $("input", $(this).parent()).trigger("focus")
    }), (e = function(e) {
        e.matches && $(".js-tab").click(function() {
            $(".js-tabs").hide()
        })
    })(t = window.matchMedia("(max-width: 767px)")), t.addListener(e), $(".js-ask-question-modal").on("click", function() {
        showModal($(".js-modal-ask-q"))
    })
}), observe = window.attachEvent ? function(e, t, o) {
    e.attachEvent("on" + t, o)
} : function(e, t, o) {
    e.addEventListener(t, o, !1)
}, jQuery(document).ready(function(e) {
    var t;
    if (setTimeout(function() {
            e("#cta").find(".text, .img").addClass("active")
        }, 300), e("#cta").length > 0) {
        var o = e("#header").height();
        e(window).on("scroll", function() {
            e(window).scrollTop() > o ? e("#header").addClass("v-2") : e("#header").removeClass("v-2")
        })
    }
    e("#slider-reviews").slick({
        dots: !0,
        arrows: !1,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: !0,
        autoplaySpeed: 5e3,
        responsive: [{
            breakpoint: 1201,
            settings: {
                slidesToShow: 1
            }
        }]
    }), e("#tutor-slider").slick({
        dots: !0,
        arrows: !1,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: !0,
        autoplaySpeed: 5e3
    }), e("#howitworks-slider").slick({
        dots: !0,
        arrows: !0,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: !1,
        autoplaySpeed: 5e3,
        infinite: !1,
        adaptiveHeight: !0,
        nextArrow: '<i class="fa fa-angle-right"></i>',
        prevArrow: '<i class="fa fa-angle-left"></i>'
    }), e(".btn-menu").on("click", function(t) {
        t.preventDefault(), e(this).toggleClass("active"), e(this).parents(".nav").find("ul").slideToggle()
    }), e(".btn-window").on("click", function(t) {
        t.preventDefault();
        var o = e(this).data("window");
        e(".window").fadeOut(), e("#" + o).fadeIn().css("paddingTop", e(window).scrollTop() + 100)
    }), e(".btn-close").on("click", function(t) {
        t.preventDefault(), e(this).parents(".window").fadeOut()
    }), e(".link-edit").on("click", function(t) {
        t.preventDefault(), e(this).hide(), e(".link-save").show(), e(this).parents("form").find("input:text").attr("disabled", !1).focus()
    }), e(".link-save").on("click", function(t) {
        t.preventDefault(), e(this).hide(), e(".link-edit").show(), e(this).parents("form").find("input:text").attr("disabled", !0)
    }), e(".faq-question").on("click", function(t) {
        t.preventDefault(), e(this).toggleClass("active").next().slideToggle()
    }), e(".link-more").on("click", function(t) {
        t.preventDefault(), "Learn more" === e(this).text() ? (e(this).text("Hide text"), e(window).width(), e("#cta-2.v-2.v-4").css("padding-top", "40px"), e("#main-text.homework_answers_main-text").css("padding-bottom", "0")) : (e(this).text("Learn more"), e(window).width() <= "767" ? (e("#cta-2.v-2.v-4").css("padding-top", "0"), e("#main-text.homework_answers_main-text").css("padding-bottom", "50px")) : (e("#cta-2.v-2.v-4").css("padding-top", "165px"), e("#main-text.homework_answers_main-text").css("padding-bottom", "50px"))), e(".hide-text").slideToggle()
    }), e(".link-more-tutor").on("click", function(t) {
        t.preventDefault(), "Show more" === e(this).find("span").text() && e(this).find("span").text("Hide text"), e(".hide-text").slideToggle()
    }), e(".link-answer-slide").on("click", function(t) {
        t.preventDefault(), e(".answer-hide").slideToggle(), "See answer's preview" === e(this).text() ? e(this).text("See less") : e(this).text("See answer's preview")
    }), e(".link-show-more-question").on("click", function(t) {
        t.preventDefault(), "Show more" === e(this).find("span").text() ? (e(this).find("span").text("See less"), e(this).parents(".question").find(".body").addClass("active").css("max-height", "300px"), e(".question").css("padding-bottom", "40px"), e(".question .link-show-more-question").css("margin-bottom", "40px")) : (e(this).find("span").text("Show more"), e(this).parents(".question").find(".body").addClass("active").css("max-height", "100%"), e(".question").css("padding-bottom", "0"), e(".question .link-show-more-question").css("margin-bottom", "20px"))
    }), e(".top-tutors_content .accounting-item").on("mouseover", function() {
        e(this).addClass("active")
    }), e(".top-tutors_content .accounting-item").on("mouseleave", function() {
        e(this).removeClass("active")
    }), (t = {
        basic: "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoCAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA==",
        lossless: "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAQAAAAfQ//73v/+BiOh/AAA="
    }, function(o) {
        var i = e.Deferred();
        return e("<img>").on("load", function() {
            2 === this.width && 1 === this.height ? i.resolve() : i.reject()
        }).on("error", function() {
            i.reject()
        }).attr("src", t[o || "basic"]), i.promise()
    })().then(function() {}, function() {
        e("body").addClass("noWebP")
    })
});
var src = !1;
$("img[attr-onload-data]").each(function() {
    (src = $(this).attr("attr-onload-data")) && ($(this).attr("src", src), $(this).attr("attr-onload-data", !1))
});