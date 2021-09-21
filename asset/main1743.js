/*!jQuery v3.5.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-deprecated/ajax-event-alias,-effects,-effects/Tween,-effects/animatedSelector | (c) JS Foundation and other contributors | jquery.org/license*/ ! function(e, t) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) { if (!e.document) throw new Error("jQuery requires a window with a document"); return t(e) } : t(e) }("undefined" != typeof window ? window : this, function(e, n) {
    "use strict";
    var d = [],
        Ne = Object.getPrototypeOf,
        g = d.slice,
        Se = d.flat ? function(e) { return d.flat.call(e) } : function(e) { return d.concat.apply([], e) },
        Y = d.push,
        M = d.indexOf,
        W = {},
        ke = W.toString,
        F = W.hasOwnProperty,
        De = F.toString,
        yt = De.call(Object),
        a = {},
        o = function(e) { return "function" == typeof e && "number" != typeof e.nodeType },
        E = function(e) { return null != e && e === e.window },
        i = e.document,
        bt = { type: !0, src: !0, nonce: !0, noModule: !0 };

    function Le(e, t, n) { var r, a, o = (n = n || i).createElement("script"); if (o.text = e, t)
            for (r in bt)(a = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, a);
        n.head.appendChild(o).parentNode.removeChild(o) };

    function A(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? W[ke.call(e)] || "object" : typeof e };
    var Ae = "3.5.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-deprecated/ajax-event-alias,-effects,-effects/Tween,-effects/animatedSelector",
        t = function(e, n) { return new t.fn.init(e, n) };

    function G(e) { var t = !!e && "length" in e && e.length,
            n = A(e); return !o(e) && !E(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e) };
    t.fn = t.prototype = { jquery: Ae, constructor: t, length: 0, toArray: function() { return g.call(this) }, get: function(e) { return null == e ? g.call(this) : e < 0 ? this[e + this.length] : this[e] }, pushStack: function(e) { var n = t.merge(this.constructor(), e); return n.prevObject = this, n }, each: function(e) { return t.each(this, e) }, map: function(e) { return this.pushStack(t.map(this, function(t, n) { return e.call(t, n, t) })) }, slice: function() { return this.pushStack(g.apply(this, arguments)) }, first: function() { return this.eq(0) }, last: function() { return this.eq(-1) }, even: function() { return this.pushStack(t.grep(this, function(e, t) { return (t + 1) % 2 })) }, odd: function() { return this.pushStack(t.grep(this, function(e, t) { return t % 2 })) }, eq: function(e) { var n = this.length,
                t = +e + (e < 0 ? n : 0); return this.pushStack(0 <= t && t < n ? [this[t]] : []) }, end: function() { return this.prevObject || this.constructor() }, push: Y, sort: d.sort, splice: d.splice }, t.extend = t.fn.extend = function() { var u, i, a, n, s, c, e = arguments[0] || {},
            r = 1,
            f = arguments.length,
            l = !1; for ("boolean" == typeof e && (l = e, e = arguments[r] || {}, r++), "object" == typeof e || o(e) || (e = {}), r === f && (e = this, r--); r < f; r++)
            if (null != (u = arguments[r]))
                for (i in u) n = u[i], "__proto__" !== i && e !== n && (l && n && (t.isPlainObject(n) || (s = Array.isArray(n))) ? (a = e[i], c = s && !Array.isArray(a) ? [] : s || t.isPlainObject(a) ? a : {}, s = !1, e[i] = t.extend(l, c, n)) : void 0 !== n && (e[i] = n));
        return e }, t.extend({
        expando: "jQuery" + (Ae + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) { throw new Error(e) },
        noop: function() {},
        isPlainObject: function(e) { var t, n; return !(!e || "[object Object]" !== ke.call(e)) && (!(t = Ne(e)) || "function" == typeof(n = F.call(t, "constructor") && t.constructor) && De.call(n) === yt) },
        isEmptyObject: function(e) { var t; for (t in e) return !1; return !0 },
        globalEval: function(e, t, n) { Le(e, { nonce: t && t.nonce }, n) },
        each: function(e, t) {
            var r, n = 0;
            if (G(e)) { for (r = e.length; n < r; n++)
                    if (!1 === t.call(e[n], n, e[n])) break } else
                for (n in e)
                    if (!1 === t.call(e[n], n, e[n])) break; return e
        },
        makeArray: function(e, n) { var r = n || []; return null != e && (G(Object(e)) ? t.merge(r, "string" == typeof e ? [e] : e) : Y.call(r, e)), r },
        inArray: function(e, t, n) { return null == t ? -1 : M.call(t, e, n) },
        merge: function(e, t) { for (var i = +t.length, n = 0, r = e.length; n < i; n++) e[r++] = t[n]; return e.length = r, e },
        grep: function(e, t, n) { for (var i = [], r = 0, o = e.length, a = !n; r < o; r++) !t(e[r], r) !== a && i.push(e[r]); return i },
        map: function(e, t, n) { var a, i, r = 0,
                o = []; if (G(e))
                for (a = e.length; r < a; r++) null != (i = t(e[r], r, n)) && o.push(i);
            else
                for (r in e) null != (i = t(e[r], r, n)) && o.push(i); return Se(o) },
        guid: 1,
        support: a
    }), "function" == typeof Symbol && (t.fn[Symbol.iterator] = d[Symbol.iterator]), t.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) { W["[object " + t + "]"] = t.toLowerCase() });
    var b = function(e) {
        var A, o, t, L, J, S, W, Z, j, v, N, y, n, u, l, s, x, q, k, a = "sizzle" + 1 * new Date,
            c = e.document,
            p = 0,
            de = 0,
            ee = I(),
            te = I(),
            ne = I(),
            O = I(),
            F = function(e, t) { return e === t && (N = !0), 0 },
            pe = {}.hasOwnProperty,
            w = [],
            he = w.pop,
            ge = w.push,
            b = w.push,
            re = w.slice,
            C = function(e, t) { for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1 },
            z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            r = "[\\x20\\t\\r\\n\\f]",
            T = "(?:\\\\[\\da-fA-F]{1,6}" + r + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            ie = "\\[" + r + "*(" + T + ")(?:" + r + "*([*^$|!~]?=)" + r + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + T + "))|)" + r + "*\\]",
            U = ":(" + T + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)",
            me = new RegExp(r + "+", "g"),
            P = new RegExp("^" + r + "+|((?:^|[^\\\\])(?:\\\\.)*)" + r + "+$", "g"),
            ve = new RegExp("^" + r + "*," + r + "*"),
            oe = new RegExp("^" + r + "*([>+~]|" + r + ")" + r + "*"),
            ye = new RegExp(r + "|>"),
            be = new RegExp(U),
            xe = new RegExp("^" + T + "$"),
            H = { ID: new RegExp("^#(" + T + ")"), CLASS: new RegExp("^\\.(" + T + ")"), TAG: new RegExp("^(" + T + "|[*])"), ATTR: new RegExp("^" + ie), PSEUDO: new RegExp("^" + U), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + r + "*(even|odd|(([+-]|)(\\d*)n|)" + r + "*(?:([+-]|)" + r + "*(\\d+)|))" + r + "*\\)|)", "i"), bool: new RegExp("^(?:" + z + ")$", "i"), needsContext: new RegExp("^" + r + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + r + "*((?:-\\d)?\\d*)" + r + "*\\)|)(?=[^-]|$)", "i") },
            we = /HTML$/i,
            Ce = /^(?:input|select|textarea|button)$/i,
            Te = /^h\d$/i,
            D = /^[^{]+\{\s*\[native \w/,
            Ee = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            V = /[+~]/,
            h = new RegExp("\\\\[\\da-fA-F]{1,6}" + r + "?|\\\\([^\\r\\n\\f])", "g"),
            g = function(e, t) { var n = "0x" + e.slice(1) - 65536; return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)) },
            ae = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            se = function(e, t) { return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e },
            ue = function() { y() },
            Ae = B(function(e) { return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase() }, { dir: "parentNode", next: "legend" });
        try { b.apply(w = re.call(c.childNodes), c.childNodes), w[c.childNodes.length].nodeType } catch (m) { b = { apply: w.length ? function(e, t) { ge.apply(e, re.call(t)) } : function(e, t) { var n = e.length,
                        r = 0; while (e[n++] = t[r++]);
                    e.length = n - 1 } } };

        function i(e, t, r, i) {
            var c, g, f, d, m, v, x, h = t && t.ownerDocument,
                p = t ? t.nodeType : 9;
            if (r = r || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return r;
            if (!i && (y(t), t = t || n, l)) {
                if (11 !== p && (m = Ee.exec(e)))
                    if (c = m[1]) {
                        if (9 === p) { if (!(f = t.getElementById(c))) return r; if (f.id === c) return r.push(f), r } else if (h && (f = h.getElementById(c)) && k(t, f) && f.id === c) return r.push(f), r
                    } else { if (m[2]) return b.apply(r, t.getElementsByTagName(e)), r; if ((c = m[3]) && o.getElementsByClassName && t.getElementsByClassName) return b.apply(r, t.getElementsByClassName(c)), r };
                if (o.qsa && !O[e + " "] && (!s || !s.test(e)) && (1 !== p || "object" !== t.nodeName.toLowerCase())) { if (x = e, h = t, 1 === p && (ye.test(e) || oe.test(e))) {
                        (h = V.test(e) && Q(t.parentNode) || t) === t && o.scope || ((d = t.getAttribute("id")) ? d = d.replace(ae, se) : t.setAttribute("id", d = a)), g = (v = S(e)).length; while (g--) v[g] = (d ? "#" + d : ":scope") + " " + R(v[g]);
                        x = v.join(",") }; try { return b.apply(r, h.querySelectorAll(x)), r } catch (u) { O(e, !0) } finally { d === a && t.removeAttribute("id") } }
            };
            return Z(e.replace(P, "$1"), t, r, i)
        };

        function I() { var e = []; return function n(r, i) { return e.push(r + " ") > t.cacheLength && delete n[e.shift()], n[r + " "] = i } };

        function f(e) { return e[a] = !0, e };

        function d(e) { var r = n.createElement("fieldset"); try { return !!e(r) } catch (t) { return !1 } finally { r.parentNode && r.parentNode.removeChild(r), r = null } };

        function X(e, n) { var r = e.split("|"),
                i = r.length; while (i--) t.attrHandle[r[i]] = n };

        function le(e, t) { var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex; if (r) return r; if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1 };

        function Ne(e) { return function(t) { return "input" === t.nodeName.toLowerCase() && t.type === e } };

        function Se(e) { return function(t) { var n = t.nodeName.toLowerCase(); return ("input" === n || "button" === n) && t.type === e } };

        function ce(e) { return function(t) { return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Ae(t) === e : t.disabled === e : "label" in t && t.disabled === e } };

        function E(e) { return f(function(t) { return t = +t, f(function(n, r) { var i, o = e([], n.length, t),
                        a = o.length; while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i])) }) }) };

        function Q(e) { return e && "undefined" != typeof e.getElementsByTagName && e };
        for (A in o = i.support = {}, J = i.isXML = function(e) { var n = e.namespaceURI,
                    t = (e.ownerDocument || e).documentElement; return !we.test(n || t && t.nodeName || "HTML") }, y = i.setDocument = function(e) { var p, i, f = e ? e.ownerDocument || e : c; return f != n && 9 === f.nodeType && f.documentElement && (u = (n = f).documentElement, l = !J(n), c != n && (i = n.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", ue, !1) : i.attachEvent && i.attachEvent("onunload", ue)), o.scope = d(function(e) { return u.appendChild(e).appendChild(n.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length }), o.attributes = d(function(e) { return e.className = "i", !e.getAttribute("className") }), o.getElementsByTagName = d(function(e) { return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length }), o.getElementsByClassName = D.test(n.getElementsByClassName), o.getById = d(function(e) { return u.appendChild(e).id = a, !n.getElementsByName || !n.getElementsByName(a).length }), o.getById ? (t.filter.ID = function(e) { var t = e.replace(h, g); return function(e) { return e.getAttribute("id") === t } }, t.find.ID = function(e, t) { if ("undefined" != typeof t.getElementById && l) { var n = t.getElementById(e); return n ? [n] : [] } }) : (t.filter.ID = function(e) { var t = e.replace(h, g); return function(e) { var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id"); return n && n.value === t } }, t.find.ID = function(e, t) { if ("undefined" != typeof t.getElementById && l) { var r, i, o, n = t.getElementById(e); if (n) { if ((r = n.getAttributeNode("id")) && r.value === e) return [n];
                            o = t.getElementsByName(e), i = 0; while (n = o[i++])
                                if ((r = n.getAttributeNode("id")) && r.value === e) return [n] }; return [] } }), t.find.TAG = o.getElementsByTagName ? function(e, t) { return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : o.qsa ? t.querySelectorAll(e) : void 0 } : function(e, t) { var n, r = [],
                        o = 0,
                        i = t.getElementsByTagName(e); if ("*" === e) { while (n = i[o++]) 1 === n.nodeType && r.push(n); return r }; return i }, t.find.CLASS = o.getElementsByClassName && function(e, t) { if ("undefined" != typeof t.getElementsByClassName && l) return t.getElementsByClassName(e) }, x = [], s = [], (o.qsa = D.test(n.querySelectorAll)) && (d(function(e) { var t;
                    u.appendChild(e).innerHTML = "<a id='" + a + "'></a><select id='" + a + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && s.push("[*^$]=" + r + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || s.push("\\[" + r + "*(?:value|" + z + ")"), e.querySelectorAll("[id~=" + a + "-]").length || s.push("~="), (t = n.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || s.push("\\[" + r + "*name" + r + "*=" + r + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || s.push(":checked"), e.querySelectorAll("a#" + a + "+*").length || s.push(".#.+[+~]"), e.querySelectorAll("\\\f"), s.push("[\\r\\n\\f]") }), d(function(e) { e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"; var t = n.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && s.push("name" + r + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && s.push(":enabled", ":disabled"), u.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && s.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), s.push(",.*:") })), (o.matchesSelector = D.test(q = u.matches || u.webkitMatchesSelector || u.mozMatchesSelector || u.oMatchesSelector || u.msMatchesSelector)) && d(function(e) { o.disconnectedMatch = q.call(e, "*"), q.call(e, "[s!='']:x"), x.push("!=", U) }), s = s.length && new RegExp(s.join("|")), x = x.length && new RegExp(x.join("|")), p = D.test(u.compareDocumentPosition), k = p || D.test(u.contains) ? function(e, t) { var r = 9 === e.nodeType ? e.documentElement : e,
                        n = t && t.parentNode; return e === n || !(!n || 1 !== n.nodeType || !(r.contains ? r.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n))) } : function(e, t) { if (t)
                        while (t = t.parentNode)
                            if (t === e) return !0;
                    return !1 }, F = p ? function(e, t) { if (e === t) return N = !0, 0; var r = !e.compareDocumentPosition - !t.compareDocumentPosition; return r || (1 & (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !o.sortDetached && t.compareDocumentPosition(e) === r ? e == n || e.ownerDocument == c && k(c, e) ? -1 : t == n || t.ownerDocument == c && k(c, t) ? 1 : v ? C(v, e) - C(v, t) : 0 : 4 & r ? -1 : 1) } : function(e, t) { if (e === t) return N = !0, 0; var r, i = 0,
                        s = e.parentNode,
                        u = t.parentNode,
                        o = [e],
                        a = [t]; if (!s || !u) return e == n ? -1 : t == n ? 1 : s ? -1 : u ? 1 : v ? C(v, e) - C(v, t) : 0; if (s === u) return le(e, t);
                    r = e; while (r = r.parentNode) o.unshift(r);
                    r = t; while (r = r.parentNode) a.unshift(r); while (o[i] === a[i]) i++; return i ? le(o[i], a[i]) : o[i] == c ? -1 : a[i] == c ? 1 : 0 }), n }, i.matches = function(e, t) { return i(e, null, null, t) }, i.matchesSelector = function(e, t) { if (y(e), o.matchesSelector && l && !O[t + " "] && (!x || !x.test(t)) && (!s || !s.test(t))) try { var a = q.call(e, t); if (a || o.disconnectedMatch || e.document && 11 !== e.document.nodeType) return a } catch (r) { O(t, !0) }; return 0 < i(t, n, null, [e]).length }, i.contains = function(e, t) { return (e.ownerDocument || e) != n && y(e), k(e, t) }, i.attr = function(e, r) {
                (e.ownerDocument || e) != n && y(e); var a = t.attrHandle[r.toLowerCase()],
                    i = a && pe.call(t.attrHandle, r.toLowerCase()) ? a(e, r, !l) : void 0; return void 0 !== i ? i : o.attributes || !l ? e.getAttribute(r) : (i = e.getAttributeNode(r)) && i.specified ? i.value : null }, i.escape = function(e) { return (e + "").replace(ae, se) }, i.error = function(e) { throw new Error("Syntax error, unrecognized expression: " + e) }, i.uniqueSort = function(e) { var r, i = [],
                    t = 0,
                    n = 0; if (N = !o.detectDuplicates, v = !o.sortStable && e.slice(0), e.sort(F), N) { while (r = e[n++]) r === e[n] && (t = i.push(n)); while (t--) e.splice(i[t], 1) }; return v = null, e }, L = i.getText = function(e) {
                var r, n = "",
                    i = 0,
                    t = e.nodeType;
                if (t) {
                    if (1 === t || 9 === t || 11 === t) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) n += L(e) } else if (3 === t || 4 === t) return e.nodeValue
                } else
                    while (r = e[i++]) n += L(r);
                return n
            }, (t = i.selectors = {
                cacheLength: 50,
                createPseudo: f,
                match: H,
                attrHandle: {},
                find: {},
                relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                preFilter: { ATTR: function(e) { return e[1] = e[1].replace(h, g), e[3] = (e[3] || e[4] || e[5] || "").replace(h, g), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || i.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && i.error(e[0]), e }, PSEUDO: function(e) { var n, t = !e[6] && e[2]; return H.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : t && be.test(t) && (n = S(t, !0)) && (n = t.indexOf(")", t.length - n) - t.length) && (e[0] = e[0].slice(0, n), e[2] = t.slice(0, n)), e.slice(0, 3)) } },
                filter: {
                    TAG: function(e) { var t = e.replace(h, g).toLowerCase(); return "*" === e ? function() { return !0 } : function(e) { return e.nodeName && e.nodeName.toLowerCase() === t } },
                    CLASS: function(e) { var t = ee[e + " "]; return t || (t = new RegExp("(^|" + r + ")" + e + "(" + r + "|$)")) && ee(e, function(e) { return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "") }) },
                    ATTR: function(e, t, n) { return function(r) { var o = i.attr(r, e); return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && -1 < o.indexOf(n) : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? -1 < (" " + o.replace(me, " ") + " ").indexOf(n) : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-")) } },
                    CHILD: function(e, t, n, r, i) {
                        var u = "nth" !== e.slice(0, 3),
                            s = "last" !== e.slice(-4),
                            o = "of-type" === t;
                        return 1 === r && 0 === i ? function(e) { return !!e.parentNode } : function(t, n, l) {
                            var g, b, h, c, d, m, v = u !== s ? "nextSibling" : "previousSibling",
                                y = t.parentNode,
                                w = o && t.nodeName.toLowerCase(),
                                x = !l && !o,
                                f = !1;
                            if (y) {
                                if (u) { while (v) { c = t; while (c = c[v])
                                            if (o ? c.nodeName.toLowerCase() === w : 1 === c.nodeType) return !1;
                                        m = v = "only" === e && !m && "nextSibling" }; return !0 };
                                if (m = [s ? y.firstChild : y.lastChild], s && x) { f = (d = (g = (b = (h = (c = y)[a] || (c[a] = {}))[c.uniqueID] || (h[c.uniqueID] = {}))[e] || [])[0] === p && g[1]) && g[2], c = d && y.childNodes[d]; while (c = ++d && c && c[v] || (f = d = 0) || m.pop())
                                        if (1 === c.nodeType && ++f && c === t) { b[e] = [p, d, f]; break } } else if (x && (f = d = (g = (b = (h = (c = t)[a] || (c[a] = {}))[c.uniqueID] || (h[c.uniqueID] = {}))[e] || [])[0] === p && g[1]), !1 === f)
                                    while (c = ++d && c && c[v] || (f = d = 0) || m.pop())
                                        if ((o ? c.nodeName.toLowerCase() === w : 1 === c.nodeType) && ++f && (x && ((b = (h = c[a] || (c[a] = {}))[c.uniqueID] || (h[c.uniqueID] = {}))[e] = [p, f]), c === t)) break;
                                return (f -= i) === r || f % r == 0 && 0 <= f / r
                            }
                        }
                    },
                    PSEUDO: function(e, n) { var o, r = t.pseudos[e] || t.setFilters[e.toLowerCase()] || i.error("unsupported pseudo: " + e); return r[a] ? r(n) : 1 < r.length ? (o = [e, e, "", n], t.setFilters.hasOwnProperty(e.toLowerCase()) ? f(function(e, t) { var a, i = r(e, n),
                                o = i.length; while (o--) e[a = C(e, i[o])] = !(t[a] = i[o]) }) : function(e) { return r(e, 0, o) }) : r }
                },
                pseudos: {
                    not: f(function(e) { var t = [],
                            r = [],
                            n = W(e.replace(P, "$1")); return n[a] ? f(function(e, t, r, i) { var a, s = n(e, null, i, []),
                                o = e.length; while (o--)(a = s[o]) && (e[o] = !(t[o] = a)) }) : function(e, i, o) { return t[0] = e, n(t, null, o, r), t[0] = null, !r.pop() } }),
                    has: f(function(e) { return function(t) { return 0 < i(e, t).length } }),
                    contains: f(function(e) { return e = e.replace(h, g),
                            function(t) { return -1 < (t.textContent || L(t)).indexOf(e) } }),
                    lang: f(function(e) {
                        return xe.test(e || "") || i.error("unsupported lang: " + e), e = e.replace(h, g).toLowerCase(),
                            function(t) {
                                var n;
                                do { if (n = l ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-") }
                                while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) { var n = e.location && e.location.hash; return n && n.slice(1) === t.id },
                    root: function(e) { return e === u },
                    focus: function(e) { return e === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) },
                    enabled: ce(!1),
                    disabled: ce(!0),
                    checked: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected },
                    selected: function(e) { return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected },
                    empty: function(e) { for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0 },
                    parent: function(e) { return !t.pseudos.empty(e) },
                    header: function(e) { return Te.test(e.nodeName) },
                    input: function(e) { return Ce.test(e.nodeName) },
                    button: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t },
                    text: function(e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) },
                    first: E(function() { return [0] }),
                    last: E(function(e, t) { return [t - 1] }),
                    eq: E(function(e, t, n) { return [n < 0 ? n + t : n] }),
                    even: E(function(e, t) { for (var n = 0; n < t; n += 2) e.push(n); return e }),
                    odd: E(function(e, t) { for (var n = 1; n < t; n += 2) e.push(n); return e }),
                    lt: E(function(e, t, n) { for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r); return e }),
                    gt: E(function(e, t, n) { for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r); return e })
                }
            }).pseudos.nth = t.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) t.pseudos[A] = Ne(A);
        for (A in { submit: !0, reset: !0 }) t.pseudos[A] = Se(A);

        function fe() {};

        function R(e) { for (var t = 0, r = e.length, n = ""; t < r; t++) n += e[t].value; return n };

        function B(e, t, n) {
            var r = t.dir,
                i = t.next,
                o = i || r,
                s = n && "parentNode" === o,
                u = de++;
            return t.first ? function(t, n, i) { while (t = t[r])
                    if (1 === t.nodeType || s) return e(t, n, i);
                return !1 } : function(t, n, l) {
                var c, f, d, h = [p, u];
                if (l) { while (t = t[r])
                        if ((1 === t.nodeType || s) && e(t, n, l)) return !0 } else
                    while (t = t[r])
                        if (1 === t.nodeType || s)
                            if (f = (d = t[a] || (t[a] = {}))[t.uniqueID] || (d[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                            else { if ((c = f[o]) && c[0] === p && c[1] === u) return h[2] = c[2]; if ((f[o] = h)[2] = e(t, n, l)) return !0 }; return !1
            }
        };

        function Y(e) { return 1 < e.length ? function(t, n, r) { var i = e.length; while (i--)
                    if (!e[i](t, n, r)) return !1;
                return !0 } : e[0] };

        function M(e, t, n, r, i) { for (var a, s = [], o = 0, u = e.length, l = null != t; o < u; o++)(a = e[o]) && (n && !n(a, r, i) || (s.push(a), l && t.push(o))); return s };

        function G(e, t, n, r, o, s) {
            return r && !r[a] && (r = G(r)), o && !o[a] && (o = G(o, s)), f(function(a, s, u, l) {
                var d, f, p, m = [],
                    g = [],
                    v = s.length,
                    y = a || function(e, t, n) { for (var r = 0, o = t.length; r < o; r++) i(e, t[r], n); return n }(t || "*", u.nodeType ? [u] : u, []),
                    h = !e || !a && t ? y : M(y, m, e, u, l),
                    c = n ? o || (a ? e : v || r) ? [] : s : h;
                if (n && n(h, c, u, l), r) { d = M(c, g), r(d, [], u, l), f = d.length; while (f--)(p = d[f]) && (c[g[f]] = !(h[g[f]] = p)) };
                if (a) { if (o || e) { if (o) { d = [], f = c.length; while (f--)(p = c[f]) && d.push(h[f] = p);
                            o(null, c = [], d, l) };
                        f = c.length; while (f--)(p = c[f]) && -1 < (d = o ? C(a, p) : m[f]) && (a[d] = !(s[d] = p)) } } else c = M(c === s ? c.splice(v, c.length) : c), o ? o(null, s, c, l) : b.apply(s, c)
            })
        };

        function K(e) { for (var s, i, r, u = e.length, l = t.relative[e[0].type], c = l || t.relative[" "], n = l ? 1 : 0, f = B(function(e) { return e === s }, c, !0), d = B(function(e) { return -1 < C(s, e) }, c, !0), o = [function(e, t, n) { var r = !l && (n || t !== j) || ((s = t).nodeType ? f(e, t, n) : d(e, t, n)); return s = null, r }]; n < u; n++)
                if (i = t.relative[e[n].type]) o = [B(Y(o), i)];
                else { if ((i = t.filter[e[n].type].apply(null, e[n].matches))[a]) { for (r = ++n; r < u; r++)
                            if (t.relative[e[r].type]) break;
                        return G(1 < n && Y(o), 1 < n && R(e.slice(0, n - 1).concat({ value: " " === e[n - 2].type ? "*" : "" })).replace(P, "$1"), i, n < r && K(e.slice(n, r)), r < u && K(e = e.slice(r)), r < u && R(e)) };
                    o.push(i) };
            return Y(o) };
        return fe.prototype = t.filters = t.pseudos, t.setFilters = new fe, S = i.tokenize = function(e, n) { var a, o, u, s, r, l, c, f = te[e + " "]; if (f) return n ? 0 : f.slice(0);
            r = e, l = [], c = t.preFilter; while (r) { for (s in a && !(o = ve.exec(r)) || (o && (r = r.slice(o[0].length) || r), l.push(u = [])), a = !1, (o = oe.exec(r)) && (a = o.shift(), u.push({ value: a, type: o[0].replace(P, " ") }), r = r.slice(a.length)), t.filter) !(o = H[s].exec(r)) || c[s] && !(o = c[s](o)) || (a = o.shift(), u.push({ value: a, type: s, matches: o }), r = r.slice(a.length)); if (!a) break }; return n ? r.length : r ? i.error(e) : te(e, l).slice(0) }, W = i.compile = function(e, r) { var u, c, d, s, h, g, m = [],
                v = [],
                o = ne[e + " "]; if (!o) { r || (r = S(e)), u = r.length; while (u--)(o = K(r[u]))[a] ? m.push(o) : v.push(o);
                (o = ne(e, (c = v, s = 0 < (d = m).length, h = 0 < c.length, g = function(e, r, o, a, u) { var f, w, v, x = 0,
                        g = "0",
                        C = e && [],
                        m = [],
                        T = j,
                        E = e || h && t.find.TAG("*", u),
                        A = p += null == T ? 1 : Math.random() || .1,
                        N = E.length; for (u && (j = r == n || r || u); g !== N && null != (f = E[g]); g++) { if (h && f) { w = 0, r || f.ownerDocument == n || (y(f), o = !l); while (v = c[w++])
                                if (v(f, r || n, o)) { a.push(f); break };
                            u && (p = A) };
                        s && ((f = !v && f) && x--, e && C.push(f)) }; if (x += g, s && g !== x) { w = 0; while (v = d[w++]) v(C, m, r, o); if (e) { if (0 < x)
                                while (g--) C[g] || m[g] || (m[g] = he.call(a));
                            m = M(m) };
                        b.apply(a, m), u && !e && 0 < m.length && 1 < x + d.length && i.uniqueSort(a) }; return u && (p = A, j = T), C }, s ? f(g) : g))).selector = e }; return o }, Z = i.select = function(e, n, r, i) { var s, o, a, f, d, c = "function" == typeof e && e,
                u = !i && S(e = c.selector || e); if (r = r || [], 1 === u.length) { if (2 < (o = u[0] = u[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === n.nodeType && l && t.relative[o[1].type]) { if (!(n = (t.find.ID(a.matches[0].replace(h, g), n) || [])[0])) return r;
                    c && (n = n.parentNode), e = e.slice(o.shift().value.length) };
                s = H.needsContext.test(e) ? 0 : o.length; while (s--) { if (a = o[s], t.relative[f = a.type]) break; if ((d = t.find[f]) && (i = d(a.matches[0].replace(h, g), V.test(o[0].type) && Q(n.parentNode) || n))) { if (o.splice(s, 1), !(e = i.length && R(o))) return b.apply(r, i), r; break } } }; return (c || W(e, u))(i, n, !l, r, !n || V.test(e) && Q(n.parentNode) || n), r }, o.sortStable = a.split("").sort(F).join("") === a, o.detectDuplicates = !!N, y(), o.sortDetached = d(function(e) { return 1 & e.compareDocumentPosition(n.createElement("fieldset")) }), d(function(e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || X("type|href|height|width", function(e, t, n) { if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), o.attributes && d(function(e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || X("value", function(e, t, n) { if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue }), d(function(e) { return null == e.getAttribute("disabled") }) || X(z, function(e, t, n) { var r; if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null }), i
    }(e);
    t.find = b, t.expr = b.selectors, t.expr[":"] = t.expr.pseudos, t.uniqueSort = t.unique = b.uniqueSort, t.text = b.getText, t.isXMLDoc = b.isXML, t.contains = b.contains, t.escapeSelector = b.escape;
    var T = function(e, n, r) { var i = [],
                o = void 0 !== r; while ((e = e[n]) && 9 !== e.nodeType)
                if (1 === e.nodeType) { if (o && t(e).is(r)) break;
                    i.push(e) };
            return i },
        Te = function(e, t) { for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e); return n },
        Ee = t.expr.match.needsContext;

    function c(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() };
    var Ce = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function K(e, n, r) { return o(n) ? t.grep(e, function(e, t) { return !!n.call(e, t, e) !== r }) : n.nodeType ? t.grep(e, function(e) { return e === n !== r }) : "string" != typeof n ? t.grep(e, function(e) { return -1 < M.call(n, e) !== r }) : t.filter(n, e, r) };
    t.filter = function(e, n, r) { var i = n[0]; return r && (e = ":not(" + e + ")"), 1 === n.length && 1 === i.nodeType ? t.find.matchesSelector(i, e) ? [i] : [] : t.find.matches(e, t.grep(n, function(e) { return 1 === e.nodeType })) }, t.fn.extend({ find: function(e) { var n, r, i = this.length,
                o = this; if ("string" != typeof e) return this.pushStack(t(e).filter(function() { for (n = 0; n < i; n++)
                    if (t.contains(o[n], this)) return !0 })); for (r = this.pushStack([]), n = 0; n < i; n++) t.find(e, o[n], r); return 1 < i ? t.uniqueSort(r) : r }, filter: function(e) { return this.pushStack(K(this, e || [], !1)) }, not: function(e) { return this.pushStack(K(this, e || [], !0)) }, is: function(e) { return !!K(this, "string" == typeof e && Ee.test(e) ? t(e) : e || [], !1).length } });
    var we, vt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (t.fn.init = function(e, n, r) { var a, s; if (!e) return this; if (r = r || we, "string" == typeof e) { if (!(a = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : vt.exec(e)) || !a[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e); if (a[1]) { if (n = n instanceof t ? n[0] : n, t.merge(this, t.parseHTML(a[1], n && n.nodeType ? n.ownerDocument || n : i, !0)), Ce.test(a[1]) && t.isPlainObject(n))
                    for (a in n) o(this[a]) ? this[a](n[a]) : this.attr(a, n[a]); return this }; return (s = i.getElementById(a[2])) && (this[0] = s, this.length = 1), this }; return e.nodeType ? (this[0] = e, this.length = 1, this) : o(e) ? void 0 !== r.ready ? r.ready(e) : e(t) : t.makeArray(e, this) }).prototype = t.fn, we = t(i);
    var gt = /^(?:parents|prev(?:Until|All))/,
        mt = { children: !0, contents: !0, next: !0, prev: !0 };

    function je(e, t) { while ((e = e[t]) && 1 !== e.nodeType); return e };
    t.fn.extend({ has: function(e) { var n = t(e, this),
                r = n.length; return this.filter(function() { for (var e = 0; e < r; e++)
                    if (t.contains(this, n[e])) return !0 }) }, closest: function(e, n) { var r, o = 0,
                s = this.length,
                i = [],
                a = "string" != typeof e && t(e); if (!Ee.test(e))
                for (; o < s; o++)
                    for (r = this[o]; r && r !== n; r = r.parentNode)
                        if (r.nodeType < 11 && (a ? -1 < a.index(r) : 1 === r.nodeType && t.find.matchesSelector(r, e))) { i.push(r); break };
            return this.pushStack(1 < i.length ? t.uniqueSort(i) : i) }, index: function(e) { return e ? "string" == typeof e ? M.call(t(e), this[0]) : M.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function(e, n) { return this.pushStack(t.uniqueSort(t.merge(this.get(), t(e, n)))) }, addBack: function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) } }), t.each({ parent: function(e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function(e) { return T(e, "parentNode") }, parentsUntil: function(e, t, n) { return T(e, "parentNode", n) }, next: function(e) { return je(e, "nextSibling") }, prev: function(e) { return je(e, "previousSibling") }, nextAll: function(e) { return T(e, "nextSibling") }, prevAll: function(e) { return T(e, "previousSibling") }, nextUntil: function(e, t, n) { return T(e, "nextSibling", n) }, prevUntil: function(e, t, n) { return T(e, "previousSibling", n) }, siblings: function(e) { return Te((e.parentNode || {}).firstChild, e) }, children: function(e) { return Te(e.firstChild) }, contents: function(e) { return null != e.contentDocument && Ne(e.contentDocument) ? e.contentDocument : (c(e, "template") && (e = e.content || e), t.merge([], e.childNodes)) } }, function(e, n) { t.fn[e] = function(r, i) { var o = t.map(this, n, r); return "Until" !== e.slice(-5) && (i = r), i && "string" == typeof i && (o = t.filter(i, o)), 1 < this.length && (mt[e] || t.uniqueSort(o), gt.test(e) && o.reverse()), this.pushStack(o) } });
    var y = /[^\x20\t\r\n\f]+/g;

    function N(e) { return e };

    function z(e) { throw e };

    function qe(e, t, n, r) { var a; try { e && o(a = e.promise) ? a.call(e).done(t).fail(n) : e && o(a = e.then) ? a.call(e, t, n) : t.apply(void 0, [e].slice(r)) } catch (i) { n.apply(void 0, [i]) } };
    t.Callbacks = function(e) { var p, c;
        e = "string" == typeof e ? (p = e, c = {}, t.each(p.match(y) || [], function(e, t) { c[t] = !0 }), c) : t.extend({}, e); var s, r, f, i, n = [],
            u = [],
            a = -1,
            d = function() { for (i = i || e.once, f = s = !0; u.length; a = -1) { r = u.shift(); while (++a < n.length) !1 === n[a].apply(r[0], r[1]) && e.stopOnFalse && (a = n.length, r = !1) };
                e.memory || (r = !1), s = !1, i && (n = r ? [] : "") },
            l = { add: function() { return n && (r && !s && (a = n.length - 1, u.push(r)), function i(r) { t.each(r, function(t, r) { o(r) ? e.unique && l.has(r) || n.push(r) : r && r.length && "string" !== A(r) && i(r) }) }(arguments), r && !s && d()), this }, remove: function() { return t.each(arguments, function(e, r) { var i; while (-1 < (i = t.inArray(r, n, i))) n.splice(i, 1), i <= a && a-- }), this }, has: function(e) { return e ? -1 < t.inArray(e, n) : 0 < n.length }, empty: function() { return n && (n = []), this }, disable: function() { return i = u = [], n = r = "", this }, disabled: function() { return !n }, lock: function() { return i = u = [], r || s || (n = r = ""), this }, locked: function() { return !!i }, fireWith: function(e, t) { return i || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), s || d()), this }, fire: function() { return l.fireWith(this, arguments), this }, fired: function() { return !!f } }; return l }, t.extend({ Deferred: function(n) { var i = [
                    ["notify", "progress", t.Callbacks("memory"), t.Callbacks("memory"), 2],
                    ["resolve", "done", t.Callbacks("once memory"), t.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", t.Callbacks("once memory"), t.Callbacks("once memory"), 1, "rejected"]
                ],
                s = "pending",
                a = { state: function() { return s }, always: function() { return r.done(arguments).fail(arguments), this }, "catch": function(e) { return a.then(null, e) }, pipe: function() { var e = arguments; return t.Deferred(function(n) { t.each(i, function(t, i) { var a = o(e[i[4]]) && e[i[4]];
                                r[i[1]](function() { var e = a && a.apply(this, arguments);
                                    e && o(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, a ? [e] : arguments) }) }), e = null }).promise() }, then: function(n, r, a) { var s = 0;

                        function u(n, r, i, a) { return function() { var l = this,
                                    c = arguments,
                                    d = function() { var e, t; if (!(n < s)) { if ((e = i.apply(l, c)) === r.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, o(t) ? a ? t.call(e, u(s, r, N, a), u(s, r, z, a)) : (s++, t.call(e, u(s, r, N, a), u(s, r, z, a), u(s, r, N, r.notifyWith))) : (i !== N && (l = void 0, c = [e]), (a || r.resolveWith)(l, c)) } },
                                    f = a ? d : function() { try { d() } catch (e) { t.Deferred.exceptionHook && t.Deferred.exceptionHook(e, f.stackTrace), s <= n + 1 && (i !== z && (l = void 0, c = [e]), r.rejectWith(l, c)) } };
                                n ? f() : (t.Deferred.getStackHook && (f.stackTrace = t.Deferred.getStackHook()), e.setTimeout(f)) } }; return t.Deferred(function(e) { i[0][3].add(u(0, e, o(a) ? a : N, e.notifyWith)), i[1][3].add(u(0, e, o(n) ? n : N)), i[2][3].add(u(0, e, o(r) ? r : z)) }).promise() }, promise: function(e) { return null != e ? t.extend(e, a) : a } },
                r = {}; return t.each(i, function(e, t) { var n = t[2],
                    o = t[5];
                a[t[1]] = n.add, o && n.add(function() { s = o }, i[3 - e][2].disable, i[3 - e][3].disable, i[0][2].lock, i[0][3].lock), n.add(t[3].fire), r[t[0]] = function() { return r[t[0] + "With"](this === r ? void 0 : this, arguments), this }, r[t[0] + "With"] = n.fireWith }), a.promise(r), n && n.call(r, r), r }, when: function(e) { var a = arguments.length,
                n = a,
                s = Array(n),
                i = g.call(arguments),
                r = t.Deferred(),
                u = function(e) { return function(t) { s[e] = this, i[e] = 1 < arguments.length ? g.call(arguments) : t, --a || r.resolveWith(s, i) } }; if (a <= 1 && (qe(e, r.done(u(n)).resolve, r.reject, !a), "pending" === r.state() || o(i[n] && i[n].then))) return r.then(); while (n--) qe(i[n], u(n), r.reject); return r.promise() } });
    var ht = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    t.Deferred.exceptionHook = function(t, n) { e.console && e.console.warn && t && ht.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n) }, t.readyException = function(t) { e.setTimeout(function() { throw t }) };
    var Q = t.Deferred();

    function U() { i.removeEventListener("DOMContentLoaded", U), e.removeEventListener("load", U), t.ready() };
    t.fn.ready = function(e) { return Q.then(e)["catch"](function(e) { t.readyException(e) }), this }, t.extend({ isReady: !1, readyWait: 1, ready: function(e) {
            (!0 === e ? --t.readyWait : t.isReady) || (t.isReady = !0) !== e && 0 < --t.readyWait || Q.resolveWith(i, [t]) } }), t.ready.then = Q.then, "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? e.setTimeout(t.ready) : (i.addEventListener("DOMContentLoaded", U), e.addEventListener("load", U));
    var f = function(e, n, r, i, a, u, l) { var s = 0,
                d = e.length,
                c = null == r; if ("object" === A(r))
                for (s in a = !0, r) f(e, n, s, r[s], !0, u, l);
            else if (void 0 !== i && (a = !0, o(i) || (l = !0), c && (l ? (n.call(e, i), n = null) : (c = n, n = function(e, n, r) { return c.call(t(e), r) })), n))
                for (; s < d; s++) n(e[s], r, l ? i : i.call(e[s], s, n(e[s], r))); return a ? e : c ? n.call(e) : d ? n(e[0], r) : u },
        dt = /^-ms-/,
        pt = /-([a-z])/g;

    function xt(e, t) { return t.toUpperCase() };

    function p(e) { return e.replace(dt, "ms-").replace(pt, xt) };
    var O = function(e) { return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType };

    function P() { this.expando = t.expando + P.uid++ };
    P.uid = 1, P.prototype = { cache: function(e) { var t = e[this.expando]; return t || (t = {}, O(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t }, set: function(e, t, n) { var r, i = this.cache(e); if ("string" == typeof t) i[p(t)] = n;
            else
                for (r in t) i[p(r)] = t[r]; return i }, get: function(e, t) { return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][p(t)] }, access: function(e, t, n) { return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t) }, remove: function(e, n) { var i, r = e[this.expando]; if (void 0 !== r) { if (void 0 !== n) { i = (n = Array.isArray(n) ? n.map(p) : (n = p(n)) in r ? [n] : n.match(y) || []).length; while (i--) delete r[n[i]] }(void 0 === n || t.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]) } }, hasData: function(e) { var n = e[this.expando]; return void 0 !== n && !t.isEmptyObject(n) } };
    var r = new P,
        s = new P,
        ct = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ft = /[A-Z]/g;

    function Oe(e, t, n) {
        var o, r;
        if (void 0 === n && 1 === e.nodeType)
            if (o = "data-" + t.replace(ft, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(o))) { try { n = "true" === (r = n) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : ct.test(r) ? JSON.parse(r) : r) } catch (i) {};
                s.set(e, t, n) } else n = void 0;
        return n
    };
    t.extend({ hasData: function(e) { return s.hasData(e) || r.hasData(e) }, data: function(e, t, n) { return s.access(e, t, n) }, removeData: function(e, t) { s.remove(e, t) }, _data: function(e, t, n) { return r.access(e, t, n) }, _removeData: function(e, t) { r.remove(e, t) } }), t.fn.extend({ data: function(e, t) { var o, i, a, n = this[0],
                u = n && n.attributes; if (void 0 === e) { if (this.length && (a = s.get(n), 1 === n.nodeType && !r.get(n, "hasDataAttrs"))) { o = u.length; while (o--) u[o] && 0 === (i = u[o].name).indexOf("data-") && (i = p(i.slice(5)), Oe(n, i, a[i]));
                    r.set(n, "hasDataAttrs", !0) }; return a }; return "object" == typeof e ? this.each(function() { s.set(this, e) }) : f(this, function(t) { var r; if (n && void 0 === t) return void 0 !== (r = s.get(n, e)) ? r : void 0 !== (r = Oe(n, e)) ? r : void 0;
                this.each(function() { s.set(this, e, t) }) }, null, t, 1 < arguments.length, null, !0) }, removeData: function(e) { return this.each(function() { s.remove(this, e) }) } }), t.extend({ queue: function(e, n, i) { var o; if (e) return n = (n || "fx") + "queue", o = r.get(e, n), i && (!o || Array.isArray(i) ? o = r.access(e, n, t.makeArray(i)) : o.push(i)), o || [] }, dequeue: function(e, n) { n = n || "fx"; var r = t.queue(e, n),
                a = r.length,
                i = r.shift(),
                o = t._queueHooks(e, n); "inprogress" === i && (i = r.shift(), a--), i && ("fx" === n && r.unshift("inprogress"), delete o.stop, i.call(e, function() { t.dequeue(e, n) }, o)), !a && o && o.empty.fire() }, _queueHooks: function(e, n) { var i = n + "queueHooks"; return r.get(e, i) || r.access(e, i, { empty: t.Callbacks("once memory").add(function() { r.remove(e, [n + "queue", i]) }) }) } }), t.fn.extend({ queue: function(e, n) { var r = 2; return "string" != typeof e && (n = e, e = "fx", r--), arguments.length < r ? t.queue(this[0], e) : void 0 === n ? this : this.each(function() { var r = t.queue(this, e, n);
                t._queueHooks(this, e), "fx" === e && "inprogress" !== r[0] && t.dequeue(this, e) }) }, dequeue: function(e) { return this.each(function() { t.dequeue(this, e) }) }, clearQueue: function(e) { return this.queue(e || "fx", []) }, promise: function(e, n) { var i, a = 1,
                s = t.Deferred(),
                o = this,
                u = this.length,
                l = function() {--a || s.resolveWith(o, [o]) }; "string" != typeof e && (n = e, e = void 0), e = e || "fx"; while (u--)(i = r.get(o[u], e + "queueHooks")) && i.empty && (a++, i.empty.add(l)); return l(), s.promise(n) } });
    var xe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        B = new RegExp("^(?:([+-])=|)(" + xe + ")([a-z%]*)$", "i"),
        h = ["Top", "Right", "Bottom", "Left"],
        v = i.documentElement,
        C = function(e) { return t.contains(e.ownerDocument, e) },
        lt = { composed: !0 };
    v.getRootNode && (C = function(e) { return t.contains(e.ownerDocument, e) || e.getRootNode(lt) === e.ownerDocument });
    var ye = function(e, n) { return "none" === (e = n || e).style.display || "" === e.style.display && C(e) && "none" === t.css(e, "display") },
        be = {};

    function Pe(e, n) { for (var l, o, d, u, c, f, a, s = [], i = 0, p = e.length; i < p; i++)(o = e[i]).style && (l = o.style.display, n ? ("none" === l && (s[i] = r.get(o, "display") || null, s[i] || (o.style.display = "")), "" === o.style.display && ye(o) && (s[i] = (a = c = u = void 0, c = (d = o).ownerDocument, f = d.nodeName, (a = be[f]) || (u = c.body.appendChild(c.createElement(f)), a = t.css(u, "display"), u.parentNode.removeChild(u), "none" === a && (a = "block"), be[f] = a)))) : "none" !== l && (s[i] = "none", r.set(o, "display", l))); for (i = 0; i < p; i++) null != s[i] && (e[i].style.display = s[i]); return e };
    t.fn.extend({ show: function() { return Pe(this, !0) }, hide: function() { return Pe(this) }, toggle: function(e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() { ye(this) ? t(this).show() : t(this).hide() }) } });
    var m, R, q = /^(?:checkbox|radio)$/i,
        me = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        ve = /^$|^module$|\/(?:java|ecma)script/i;
    m = i.createDocumentFragment().appendChild(i.createElement("div")), (R = i.createElement("input")).setAttribute("type", "radio"), R.setAttribute("checked", "checked"), R.setAttribute("name", "t"), m.appendChild(R), a.checkClone = m.cloneNode(!0).cloneNode(!0).lastChild.checked, m.innerHTML = "<textarea>x</textarea>", a.noCloneChecked = !!m.cloneNode(!0).lastChild.defaultValue, m.innerHTML = "<option></option>", a.option = !!m.lastChild;
    var l = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };

    function u(e, n) { var r; return r = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(n || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(n || "*") : [], void 0 === n || n && c(e, n) ? t.merge([e], r) : r };

    function J(e, t) { for (var n = 0, i = e.length; n < i; n++) r.set(e[n], "globalEval", !t || r.get(t[n], "globalEval")) };
    l.tbody = l.tfoot = l.colgroup = l.caption = l.thead, l.th = l.td, a.option || (l.optgroup = l.option = [1, "<select multiple='multiple'>", "</select>"]);
    var ut = /<|&#?\w+;/;

    function He(e, n, r, i, a) {
        for (var o, s, g, d, m, p, c = n.createDocumentFragment(), h = [], f = 0, v = e.length; f < v; f++)
            if ((o = e[f]) || 0 === o)
                if ("object" === A(o)) t.merge(h, o.nodeType ? [o] : o);
                else if (ut.test(o)) { s = s || c.appendChild(n.createElement("div")), g = (me.exec(o) || ["", ""])[1].toLowerCase(), d = l[g] || l._default, s.innerHTML = d[1] + t.htmlPrefilter(o) + d[2], p = d[0]; while (p--) s = s.lastChild;
            t.merge(h, s.childNodes), (s = c.firstChild).textContent = "" } else h.push(n.createTextNode(o));
        c.textContent = "", f = 0;
        while (o = h[f++])
            if (i && -1 < t.inArray(o, i)) a && a.push(o);
            else if (m = C(o), s = u(c.appendChild(o), "script"), m && J(s), r) { p = 0; while (o = s[p++]) ve.test(o.type || "") && r.push(o) };
        return c
    };
    var at = /^key/,
        st = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ge = /^([^.]*)(?:\.(.+)|)/;

    function S() { return !0 };

    function k() { return !1 };

    function wt(e, t) { return e === function() { try { return i.activeElement } catch (e) {} }() == ("focus" === t) };

    function Z(e, n, r, i, o, a) { var s, u; if ("object" == typeof n) { for (u in "string" != typeof r && (i = i || r, r = void 0), n) Z(e, u, r, i, n[u], a); return e }; if (null == i && null == o ? (o = r, i = r = void 0) : null == o && ("string" == typeof r ? (o = i, i = void 0) : (o = i, i = r, r = void 0)), !1 === o) o = k;
        else if (!o) return e; return 1 === a && (s = o, (o = function(e) { return t().off(e), s.apply(this, arguments) }).guid = s.guid || (s.guid = t.guid++)), e.each(function() { t.event.add(this, n, o, i, r) }) };

    function V(e, n, i) {
        i ? (r.set(e, n, !1), t.event.add(e, n, {
            namespace: !1,
            handler: function(e) {
                var s, a, o = r.get(this, n);
                if (1 & e.isTrigger && this[n]) { if (o.length)(t.event.special[n] || {}).delegateType && e.stopPropagation();
                    else if (o = g.call(arguments), r.set(this, n, o), s = i(this, n), this[n](), o !== (a = r.get(this, n)) || s ? r.set(this, n, !1) : a = {}, o !== a) return e.stopImmediatePropagation(), e.preventDefault(), a.value } else o.length && (r.set(this, n, { value: t.event.trigger(t.extend(o[0], t.Event.prototype), o.slice(1), this) }), e.stopImmediatePropagation())
            }
        })) : void 0 === r.get(e, n) && t.event.add(e, n, S)
    };
    t.event = {
        global: {},
        add: function(e, n, i, o, a) { var h, f, b, d, g, l, u, c, s, m, x, p = r.get(e); if (O(e)) { i.handler && (i = (h = i).handler, a = h.selector), a && t.find.matchesSelector(v, a), i.guid || (i.guid = t.guid++), (d = p.events) || (d = p.events = Object.create(null)), (f = p.handle) || (f = p.handle = function(n) { return "undefined" != typeof t && t.event.triggered !== n.type ? t.event.dispatch.apply(e, arguments) : void 0 }), g = (n = (n || "").match(y) || [""]).length; while (g--) s = x = (b = ge.exec(n[g]) || [])[1], m = (b[2] || "").split(".").sort(), s && (u = t.event.special[s] || {}, s = (a ? u.delegateType : u.bindType) || s, u = t.event.special[s] || {}, l = t.extend({ type: s, origType: x, data: o, handler: i, guid: i.guid, selector: a, needsContext: a && t.expr.match.needsContext.test(a), namespace: m.join(".") }, h), (c = d[s]) || ((c = d[s] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(e, o, m, f) || e.addEventListener && e.addEventListener(s, f)), u.add && (u.add.call(e, l), l.handler.guid || (l.handler.guid = i.guid)), a ? c.splice(c.delegateCount++, 0, l) : c.push(l), t.event.global[s] = !0) } },
        remove: function(e, n, i, o, a) {
            var p, v, c, d, h, u, l, f, s, m, b, g = r.hasData(e) && r.get(e);
            if (g && (d = g.events)) {
                h = (n = (n || "").match(y) || [""]).length;
                while (h--)
                    if (s = b = (c = ge.exec(n[h]) || [])[1], m = (c[2] || "").split(".").sort(), s) { l = t.event.special[s] || {}, f = d[s = (o ? l.delegateType : l.bindType) || s] || [], c = c[2] && new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)"), v = p = f.length; while (p--) u = f[p], !a && b !== u.origType || i && i.guid !== u.guid || c && !c.test(u.namespace) || o && o !== u.selector && ("**" !== o || !u.selector) || (f.splice(p, 1), u.selector && f.delegateCount--, l.remove && l.remove.call(e, u));
                        v && !f.length && (l.teardown && !1 !== l.teardown.call(e, m, g.handle) || t.removeEvent(e, s, g.handle), delete d[s]) } else
                        for (s in d) t.event.remove(e, s + n[h], i, o, !0);
                t.isEmptyObject(d) && r.remove(e, "handle events")
            }
        },
        dispatch: function(e) { var i, l, c, a, o, f, u = new Array(arguments.length),
                n = t.event.fix(e),
                d = (r.get(this, "events") || Object.create(null))[n.type] || [],
                s = t.event.special[n.type] || {}; for (u[0] = n, i = 1; i < arguments.length; i++) u[i] = arguments[i]; if (n.delegateTarget = this, !s.preDispatch || !1 !== s.preDispatch.call(this, n)) { f = t.event.handlers.call(this, n, d), i = 0; while ((a = f[i++]) && !n.isPropagationStopped()) { n.currentTarget = a.elem, l = 0; while ((o = a.handlers[l++]) && !n.isImmediatePropagationStopped()) n.rnamespace && !1 !== o.namespace && !n.rnamespace.test(o.namespace) || (n.handleObj = o, n.data = o.data, void 0 !== (c = ((t.event.special[o.origType] || {}).handle || o.handler).apply(a.elem, u)) && !1 === (n.result = c) && (n.preventDefault(), n.stopPropagation())) }; return s.postDispatch && s.postDispatch.call(this, n), n.result } },
        handlers: function(e, n) { var o, l, i, a, s, c = [],
                u = n.delegateCount,
                r = e.target; if (u && r.nodeType && !("click" === e.type && 1 <= e.button))
                for (; r !== this; r = r.parentNode || this)
                    if (1 === r.nodeType && ("click" !== e.type || !0 !== r.disabled)) { for (a = [], s = {}, o = 0; o < u; o++) void 0 === s[i = (l = n[o]).selector + " "] && (s[i] = l.needsContext ? -1 < t(i, this).index(r) : t.find(i, this, null, [r]).length), s[i] && a.push(l);
                        a.length && c.push({ elem: r, handlers: a }) };
            return r = this, u < n.length && c.push({ elem: r, handlers: n.slice(u) }), c },
        addProp: function(e, n) { Object.defineProperty(t.Event.prototype, e, { enumerable: !0, configurable: !0, get: o(n) ? function() { if (this.originalEvent) return n(this.originalEvent) } : function() { if (this.originalEvent) return this.originalEvent[e] }, set: function(t) { Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) } }) },
        fix: function(e) { return e[t.expando] ? e : new t.Event(e) },
        special: { load: { noBubble: !0 }, click: { setup: function(e) { var t = this || e; return q.test(t.type) && t.click && c(t, "input") && V(t, "click", S), !1 }, trigger: function(e) { var t = this || e; return q.test(t.type) && t.click && c(t, "input") && V(t, "click"), !0 }, _default: function(e) { var t = e.target; return q.test(t.type) && t.click && c(t, "input") && r.get(t, "click") || c(t, "a") } }, beforeunload: { postDispatch: function(e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } }
    }, t.removeEvent = function(e, t, n) { e.removeEventListener && e.removeEventListener(t, n) }, t.Event = function(e, n) { if (!(this instanceof t.Event)) return new t.Event(e, n);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? S : k, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, n && t.extend(this, n), this.timeStamp = e && e.timeStamp || Date.now(), this[t.expando] = !0 }, t.Event.prototype = { constructor: t.Event, isDefaultPrevented: k, isPropagationStopped: k, isImmediatePropagationStopped: k, isSimulated: !1, preventDefault: function() { var e = this.originalEvent;
            this.isDefaultPrevented = S, e && !this.isSimulated && e.preventDefault() }, stopPropagation: function() { var e = this.originalEvent;
            this.isPropagationStopped = S, e && !this.isSimulated && e.stopPropagation() }, stopImmediatePropagation: function() { var e = this.originalEvent;
            this.isImmediatePropagationStopped = S, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation() } }, t.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, code: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function(e) { var t = e.button; return null == e.which && at.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && st.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which } }, t.event.addProp), t.each({ focus: "focusin", blur: "focusout" }, function(e, n) { t.event.special[e] = { setup: function() { return V(this, e, wt), !1 }, trigger: function() { return V(this, e), !0 }, delegateType: n } }), t.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e, n) { t.event.special[e] = { delegateType: n, bindType: n, handle: function(e) { var i, r = e.relatedTarget,
                    o = e.handleObj; return r && (r === this || t.contains(this, r)) || (e.type = o.origType, i = o.handler.apply(this, arguments), e.type = n), i } } }), t.fn.extend({ on: function(e, t, n, r) { return Z(this, e, t, n, r) }, one: function(e, t, n, r) { return Z(this, e, t, n, r, 1) }, off: function(e, n, r) { var i, o; if (e && e.preventDefault && e.handleObj) return i = e.handleObj, t(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this; if ("object" == typeof e) { for (o in e) this.off(o, n, e[o]); return this }; return !1 !== n && "function" != typeof n || (r = n, n = void 0), !1 === r && (r = k), this.each(function() { t.event.remove(this, e, r, n) }) } });
    var rt = /<script|<style|<link/i,
        it = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Ie(e, n) { return c(e, "table") && c(11 !== n.nodeType ? n : n.firstChild, "tr") && t(e).children("tbody")[0] || e };

    function Ct(e) { return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e };

    function Tt(e) { return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e };

    function Re(e, n) { var i, u, o, l, c, a; if (1 === n.nodeType) { if (r.hasData(e) && (a = r.get(e).events))
                for (o in r.remove(n, "handle events"), a)
                    for (i = 0, u = a[o].length; i < u; i++) t.event.add(n, o, a[o][i]);
            s.hasData(e) && (l = s.access(e), c = t.extend({}, l), s.set(n, c)) } };

    function D(e, n, i, s) { n = Se(n); var d, v, f, p, l, h, c = 0,
            g = e.length,
            b = g - 1,
            m = n[0],
            y = o(m); if (y || 1 < g && "string" == typeof m && !a.checkClone && it.test(m)) return e.each(function(t) { var r = e.eq(t);
            y && (n[0] = m.call(this, t, r.html())), D(r, n, i, s) }); if (g && (v = (d = He(n, e[0].ownerDocument, !1, e, s)).firstChild, 1 === d.childNodes.length && (d = v), v || s)) { for (p = (f = t.map(u(d, "script"), Ct)).length; c < g; c++) l = d, c !== b && (l = t.clone(l, !0, !0), p && t.merge(f, u(l, "script"))), i.call(e[c], l, c); if (p)
                for (h = f[f.length - 1].ownerDocument, t.map(f, Tt), c = 0; c < p; c++) l = f[c], ve.test(l.type || "") && !r.access(l, "globalEval") && t.contains(h, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? t._evalUrl && !l.noModule && t._evalUrl(l.src, { nonce: l.nonce || l.getAttribute("nonce") }, h) : Le(l.textContent.replace(ot, ""), l, h)) }; return e };

    function Be(e, n, r) { for (var i, a = n ? t.filter(n, e) : e, o = 0; null != (i = a[o]); o++) r || 1 !== i.nodeType || t.cleanData(u(i)), i.parentNode && (r && C(i) && J(u(i, "script")), i.parentNode.removeChild(i)); return e };
    t.extend({ htmlPrefilter: function(e) { return e }, clone: function(e, n, r) { var i, c, s, o, f, d, p, l = e.cloneNode(!0),
                h = C(e); if (!(a.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || t.isXMLDoc(e)))
                for (o = u(l), i = 0, c = (s = u(e)).length; i < c; i++) f = s[i], d = o[i], void 0, "input" === (p = d.nodeName.toLowerCase()) && q.test(f.type) ? d.checked = f.checked : "input" !== p && "textarea" !== p || (d.defaultValue = f.defaultValue); if (n)
                if (r)
                    for (s = s || u(e), o = o || u(l), i = 0, c = s.length; i < c; i++) Re(s[i], o[i]);
                else Re(e, l);
            return 0 < (o = u(l, "script")).length && J(o, !h && u(e, "script")), l }, cleanData: function(e) { for (var i, n, o, u = t.event.special, a = 0; void 0 !== (n = e[a]); a++)
                if (O(n)) { if (i = n[r.expando]) { if (i.events)
                            for (o in i.events) u[o] ? t.event.remove(n, o) : t.removeEvent(n, o, i.handle);
                        n[r.expando] = void 0 };
                    n[s.expando] && (n[s.expando] = void 0) } } }), t.fn.extend({ detach: function(e) { return Be(this, e, !0) }, remove: function(e) { return Be(this, e) }, text: function(e) { return f(this, function(e) { return void 0 === e ? t.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e) }) }, null, e, arguments.length) }, append: function() { return D(this, arguments, function(e) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ie(this, e).appendChild(e) }) }, prepend: function() { return D(this, arguments, function(e) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var t = Ie(this, e);
                    t.insertBefore(e, t.firstChild) } }) }, before: function() { return D(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this) }) }, after: function() { return D(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) }, empty: function() { for (var e, n = 0; null != (e = this[n]); n++) 1 === e.nodeType && (t.cleanData(u(e, !1)), e.textContent = ""); return this }, clone: function(e, n) { return e = null != e && e, n = null == n ? e : n, this.map(function() { return t.clone(this, e, n) }) }, html: function(e) { return f(this, function(e) { var r = this[0] || {},
                    i = 0,
                    o = this.length; if (void 0 === e && 1 === r.nodeType) return r.innerHTML; if ("string" == typeof e && !rt.test(e) && !l[(me.exec(e) || ["", ""])[1].toLowerCase()]) { e = t.htmlPrefilter(e); try { for (; i < o; i++) 1 === (r = this[i] || {}).nodeType && (t.cleanData(u(r, !1)), r.innerHTML = e);
                        r = 0 } catch (n) {} };
                r && this.empty().append(e) }, null, e, arguments.length) }, replaceWith: function() { var e = []; return D(this, arguments, function(n) { var r = this.parentNode;
                t.inArray(this, e) < 0 && (t.cleanData(u(this)), r && r.replaceChild(n, this)) }, e) } }), t.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, n) { t.fn[e] = function(e) { for (var i, o = [], a = t(e), s = a.length - 1, r = 0; r <= s; r++) i = r === s ? this : this.clone(!0), t(a[r])[n](i), Y.apply(o, i.get()); return this.pushStack(o) } });
    var X = new RegExp("^(" + xe + ")(?!px)[a-z%]+$", "i"),
        I = function(t) { var n = t.ownerDocument.defaultView; return n && n.opener || (n = e), n.getComputedStyle(t) },
        he = function(e, t, n) { var i, r, o = {}; for (r in t) o[r] = e.style[r], e.style[r] = t[r]; for (r in i = n.call(e), t) e.style[r] = o[r]; return i },
        nt = new RegExp(h.join("|"), "i");

    function H(e, n, r) { var s, u, l, o, i = e.style; return (r = r || I(e)) && ("" !== (o = r.getPropertyValue(n) || r[n]) || C(e) || (o = t.style(e, n)), !a.pixelBoxStyles() && X.test(o) && nt.test(n) && (s = i.width, u = i.minWidth, l = i.maxWidth, i.minWidth = i.maxWidth = i.width = o, o = r.width, i.width = s, i.minWidth = u, i.maxWidth = l)), void 0 !== o ? o + "" : o };

    function Me(e, t) { return { get: function() { if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get } } };
    ! function() {
        function r() { if (n) { u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", n.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", v.appendChild(u).appendChild(n); var t = e.getComputedStyle(n);
                l = "1%" !== t.top, p = 12 === o(t.marginLeft), n.style.right = "60%", d = 36 === o(t.right), c = 36 === o(t.width), n.style.position = "absolute", f = 12 === o(n.offsetWidth / 3), v.removeChild(u), n = null } };

        function o(e) { return Math.round(parseFloat(e)) }; var l, c, f, d, s, p, u = i.createElement("div"),
            n = i.createElement("div");
        n.style && (n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", a.clearCloneStyle = "content-box" === n.style.backgroundClip, t.extend(a, { boxSizingReliable: function() { return r(), c }, pixelBoxStyles: function() { return r(), d }, pixelPosition: function() { return r(), l }, reliableMarginLeft: function() { return r(), p }, scrollboxSize: function() { return r(), f }, reliableTrDimensions: function() { var t, n, r, o; return null == s && (t = i.createElement("table"), n = i.createElement("tr"), r = i.createElement("div"), t.style.cssText = "position:absolute;left:-11111px", n.style.height = "1px", r.style.height = "9px", v.appendChild(t).appendChild(n).appendChild(r), o = e.getComputedStyle(n), s = 3 < parseInt(o.height), v.removeChild(t)), s } })) }();
    var fe = ["Webkit", "Moz", "ms"],
        de = i.createElement("div").style,
        pe = {};

    function We(e) { var n = t.cssProps[e] || pe[e]; return n || (e in de ? e : pe[e] = function(e) { var n = e[0].toUpperCase() + e.slice(1),
                t = fe.length; while (t--)
                if ((e = fe[t] + n) in de) return e }(e) || e) };
    var w, ue, et = /^(none|table(?!-c[ea]).+)/,
        le = /^--/,
        tt = { position: "absolute", visibility: "hidden", display: "block" },
        ce = { letterSpacing: "0", fontWeight: "400" };

    function Fe(e, t, n) { var r = B.exec(t); return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t };

    function ee(e, n, r, i, o, u) { var a = "width" === n ? 1 : 0,
            l = 0,
            s = 0; if (r === (i ? "border" : "content")) return 0; for (; a < 4; a += 2) "margin" === r && (s += t.css(e, r + h[a], !0, o)), i ? ("content" === r && (s -= t.css(e, "padding" + h[a], !0, o)), "margin" !== r && (s -= t.css(e, "border" + h[a] + "Width", !0, o))) : (s += t.css(e, "padding" + h[a], !0, o), "padding" !== r ? s += t.css(e, "border" + h[a] + "Width", !0, o) : l += t.css(e, "border" + h[a] + "Width", !0, o)); return !i && 0 <= u && (s += Math.max(0, Math.ceil(e["offset" + n[0].toUpperCase() + n.slice(1)] - u - s - l - .5)) || 0), s };

    function ze(e, n, r) { var o = I(e),
            s = (!a.boxSizingReliable() || r) && "border-box" === t.css(e, "boxSizing", !1, o),
            u = s,
            i = H(e, n, o),
            l = "offset" + n[0].toUpperCase() + n.slice(1); if (X.test(i)) { if (!r) return i;
            i = "auto" }; return (!a.boxSizingReliable() && s || !a.reliableTrDimensions() && c(e, "tr") || "auto" === i || !parseFloat(i) && "inline" === t.css(e, "display", !1, o)) && e.getClientRects().length && (s = "border-box" === t.css(e, "boxSizing", !1, o), (u = l in e) && (i = e[l])), (i = parseFloat(i) || 0) + ee(e, n, r || (s ? "border" : "content"), u, o, i) + "px" };
    t.extend({ cssHooks: { opacity: { get: function(e, t) { if (t) { var n = H(e, "opacity"); return "" === n ? "1" : n } } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, gridArea: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnStart: !0, gridRow: !0, gridRowEnd: !0, gridRowStart: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {}, style: function(e, n, r, i) { if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) { var o, l, s, c = p(n),
                    f = le.test(n),
                    u = e.style; if (f || (n = We(c)), s = t.cssHooks[n] || t.cssHooks[c], void 0 === r) return s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : u[n]; "string" === (l = typeof r) && (o = B.exec(r)) && o[1] && (r = function(e, n, r, i) { var u, l, c = 20,
                        f = i ? function() { return i.cur() } : function() { return t.css(e, n, "") },
                        s = f(),
                        a = r && r[3] || (t.cssNumber[n] ? "" : "px"),
                        o = e.nodeType && (t.cssNumber[n] || "px" !== a && +s) && B.exec(t.css(e, n)); if (o && o[3] !== a) { s /= 2, a = a || o[3], o = +s || 1; while (c--) t.style(e, n, o + a), (1 - l) * (1 - (l = f() / s || .5)) <= 0 && (c = 0), o /= l;
                        o *= 2, t.style(e, n, o + a), r = r || [] }; return r && (o = +o || +s || 0, u = r[1] ? o + (r[1] + 1) * r[2] : +r[2], i && (i.unit = a, i.start = o, i.end = u)), u }(e, n, o), l = "number"), null != r && r == r && ("number" !== l || f || (r += o && o[3] || (t.cssNumber[c] ? "" : "px")), a.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = "inherit"), s && "set" in s && void 0 === (r = s.set(e, r, i)) || (f ? u.setProperty(n, r) : u[n] = r)) } }, css: function(e, n, r, i) { var o, a, s, u = p(n); return le.test(n) || (n = We(u)), (s = t.cssHooks[n] || t.cssHooks[u]) && "get" in s && (o = s.get(e, !0, r)), void 0 === o && (o = H(e, n, i)), "normal" === o && n in ce && (o = ce[n]), "" === r || r ? (a = parseFloat(o), !0 === r || isFinite(a) ? a || 0 : o) : o } }), t.each(["height", "width"], function(e, n) { t.cssHooks[n] = { get: function(e, r, i) { if (r) return !et.test(t.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ze(e, n, i) : he(e, tt, function() { return ze(e, n, i) }) }, set: function(e, r, i) { var u, o = I(e),
                    l = !a.scrollboxSize() && "absolute" === o.position,
                    c = (l || i) && "border-box" === t.css(e, "boxSizing", !1, o),
                    s = i ? ee(e, n, i, c, o) : 0; return c && l && (s -= Math.ceil(e["offset" + n[0].toUpperCase() + n.slice(1)] - parseFloat(o[n]) - ee(e, n, "border", !1, o) - .5)), s && (u = B.exec(r)) && "px" !== (u[3] || "px") && (e.style[n] = r, r = t.css(e, n)), Fe(0, r, s) } } }), t.cssHooks.marginLeft = Me(a.reliableMarginLeft, function(e, t) { if (t) return (parseFloat(H(e, "marginLeft")) || e.getBoundingClientRect().left - he(e, { marginLeft: 0 }, function() { return e.getBoundingClientRect().left })) + "px" }), t.each({ margin: "", padding: "", border: "Width" }, function(e, n) { t.cssHooks[e + n] = { expand: function(t) { for (var r = 0, o = {}, i = "string" == typeof t ? t.split(" ") : [t]; r < 4; r++) o[e + h[r] + n] = i[r] || i[r - 2] || i[0]; return o } }, "margin" !== e && (t.cssHooks[e + n].set = Fe) }), t.fn.extend({ css: function(e, n) { return f(this, function(e, n, r) { var o, a, s = {},
                    i = 0; if (Array.isArray(n)) { for (o = I(e), a = n.length; i < a; i++) s[n[i]] = t.css(e, n[i], !1, o); return s }; return void 0 !== r ? t.style(e, n, r) : t.css(e, n) }, e, n, 1 < arguments.length) } }), t.fn.delay = function(n, r) { return n = t.fx && t.fx.speeds[n] || n, r = r || "fx", this.queue(r, function(t, r) { var i = e.setTimeout(t, n);
            r.stop = function() { e.clearTimeout(i) } }) }, w = i.createElement("input"), ue = i.createElement("select").appendChild(i.createElement("option")), w.type = "checkbox", a.checkOn = "" !== w.value, a.optSelected = ue.selected, (w = i.createElement("input")).value = "t", w.type = "radio", a.radioValue = "t" === w.value;
    var se, j = t.expr.attrHandle;
    t.fn.extend({ attr: function(e, n) { return f(this, t.attr, e, n, 1 < arguments.length) }, removeAttr: function(e) { return this.each(function() { t.removeAttr(this, e) }) } }), t.extend({ attr: function(e, n, r) { var o, i, a = e.nodeType; if (3 !== a && 8 !== a && 2 !== a) return "undefined" == typeof e.getAttribute ? t.prop(e, n, r) : (1 === a && t.isXMLDoc(e) || (i = t.attrHooks[n.toLowerCase()] || (t.expr.match.bool.test(n) ? se : void 0)), void 0 !== r ? null === r ? void t.removeAttr(e, n) : i && "set" in i && void 0 !== (o = i.set(e, r, n)) ? o : (e.setAttribute(n, r + ""), r) : i && "get" in i && null !== (o = i.get(e, n)) ? o : null == (o = t.find.attr(e, n)) ? void 0 : o) }, attrHooks: { type: { set: function(e, t) { if (!a.radioValue && "radio" === t && c(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } }, removeAttr: function(e, t) { var n, i = 0,
                r = t && t.match(y); if (r && 1 === e.nodeType)
                while (n = r[i++]) e.removeAttribute(n) } }), se = { set: function(e, n, r) { return !1 === n ? t.removeAttr(e, r) : e.setAttribute(r, r), r } }, t.each(t.expr.match.bool.source.match(/\w+/g), function(e, n) { var r = j[n] || t.find.attr;
        j[n] = function(e, t, n) { var o, a, i = t.toLowerCase(); return n || (a = j[i], j[i] = o, o = null != r(e, t, n) ? i : null, j[i] = a), o } });
    var Je = /^(?:input|select|textarea|button)$/i,
        Ze = /^(?:a|area)$/i;

    function L(e) { return (e.match(y) || []).join(" ") };

    function x(e) { return e.getAttribute && e.getAttribute("class") || "" };

    function te(e) { return Array.isArray(e) ? e : "string" == typeof e && e.match(y) || [] };
    t.fn.extend({ prop: function(e, n) { return f(this, t.prop, e, n, 1 < arguments.length) }, removeProp: function(e) { return this.each(function() { delete this[t.propFix[e] || e] }) } }), t.extend({ prop: function(e, n, r) { var o, i, a = e.nodeType; if (3 !== a && 8 !== a && 2 !== a) return 1 === a && t.isXMLDoc(e) || (n = t.propFix[n] || n, i = t.propHooks[n]), void 0 !== r ? i && "set" in i && void 0 !== (o = i.set(e, r, n)) ? o : e[n] = r : i && "get" in i && null !== (o = i.get(e, n)) ? o : e[n] }, propHooks: { tabIndex: { get: function(e) { var n = t.find.attr(e, "tabindex"); return n ? parseInt(n, 10) : Je.test(e.nodeName) || Ze.test(e.nodeName) && e.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } }), a.optSelected || (t.propHooks.selected = { get: function(e) { var t = e.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null }, set: function(e) { var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex) } }), t.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { t.propFix[this.toLowerCase()] = this }), t.fn.extend({
        addClass: function(e) { var s, n, r, i, a, u, l, c = 0; if (o(e)) return this.each(function(n) { t(this).addClass(e.call(this, n, x(this))) }); if ((s = te(e)).length)
                while (n = this[c++])
                    if (i = x(n), r = 1 === n.nodeType && " " + L(i) + " ") { u = 0; while (a = s[u++]) r.indexOf(" " + a + " ") < 0 && (r += a + " ");
                        i !== (l = L(r)) && n.setAttribute("class", l) };
            return this },
        removeClass: function(e) { var s, r, n, i, a, u, l, c = 0; if (o(e)) return this.each(function(n) { t(this).removeClass(e.call(this, n, x(this))) }); if (!arguments.length) return this.attr("class", ""); if ((s = te(e)).length)
                while (r = this[c++])
                    if (i = x(r), n = 1 === r.nodeType && " " + L(i) + " ") { u = 0; while (a = s[u++])
                            while (-1 < n.indexOf(" " + a + " ")) n = n.replace(" " + a + " ", " ");
                        i !== (l = L(n)) && r.setAttribute("class", l) };
            return this },
        toggleClass: function(e, n) {
            var i = typeof e,
                a = "string" === i || Array.isArray(e);
            return "boolean" == typeof n && a ? n ? this.addClass(e) : this.removeClass(e) : o(e) ? this.each(function(r) { t(this).toggleClass(e.call(this, r, x(this), n), n) }) : this.each(function() {
                var n, s, o, u;
                if (a) { s = 0, o = t(this), u = te(e); while (n = u[s++]) o.hasClass(n) ? o.removeClass(n) : o.addClass(n) } else void 0 !== e && "boolean" !== i || ((n = x(this)) && r.set(this, "__className__", n), this.setAttribute && this.setAttribute("class", n || !1 === e ? "" : r.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) { var n, t, r = 0;
            n = " " + e + " "; while (t = this[r++])
                if (1 === t.nodeType && -1 < (" " + L(x(t)) + " ").indexOf(n)) return !0;
            return !1 }
    });
    var Ke = /\r/g;
    t.fn.extend({ val: function(e) { var n, r, a, i = this[0]; return arguments.length ? (a = o(e), this.each(function(r) { var i;
                1 === this.nodeType && (null == (i = a ? e.call(this, r, t(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = t.map(i, function(e) { return null == e ? "" : e + "" })), (n = t.valHooks[this.type] || t.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, i, "value") || (this.value = i)) })) : i ? (n = t.valHooks[i.type] || t.valHooks[i.nodeName.toLowerCase()]) && "get" in n && void 0 !== (r = n.get(i, "value")) ? r : "string" == typeof(r = i.value) ? r.replace(Ke, "") : null == r ? "" : r : void 0 } }), t.extend({ valHooks: { option: { get: function(e) { var n = t.find.attr(e, "value"); return null != n ? n : L(t.text(e)) } }, select: { get: function(e) { var a, n, r, s = e.options,
                        i = e.selectedIndex,
                        o = "select-one" === e.type,
                        u = o ? null : [],
                        l = o ? i + 1 : s.length; for (r = i < 0 ? l : o ? i : 0; r < l; r++)
                        if (((n = s[r]).selected || r === i) && !n.disabled && (!n.parentNode.disabled || !c(n.parentNode, "optgroup"))) { if (a = t(n).val(), o) return a;
                            u.push(a) };
                    return u }, set: function(e, n) { var r, i, o = e.options,
                        a = t.makeArray(n),
                        s = o.length; while (s--)((i = o[s]).selected = -1 < t.inArray(t.valHooks.option.get(i), a)) && (r = !0); return r || (e.selectedIndex = -1), a } } } }), t.each(["radio", "checkbox"], function() { t.valHooks[this] = { set: function(e, n) { if (Array.isArray(n)) return e.checked = -1 < t.inArray(t(e).val(), n) } }, a.checkOn || (t.valHooks[this].get = function(e) { return null === e.getAttribute("value") ? "on" : e.value }) }), a.focusin = "onfocusin" in e;
    var oe = /^(?:focusinfocus|focusoutblur)$/,
        ae = function(e) { e.stopPropagation() };
    t.extend(t.event, { trigger: function(n, a, s, u) { var y, c, f, b, p, h, d, g, m = [s || i],
                l = F.call(n, "type") ? n.type : n,
                v = F.call(n, "namespace") ? n.namespace.split(".") : []; if (c = g = f = s = s || i, 3 !== s.nodeType && 8 !== s.nodeType && !oe.test(l + t.event.triggered) && (-1 < l.indexOf(".") && (l = (v = l.split(".")).shift(), v.sort()), p = l.indexOf(":") < 0 && "on" + l, (n = n[t.expando] ? n : new t.Event(l, "object" == typeof n && n)).isTrigger = u ? 2 : 3, n.namespace = v.join("."), n.rnamespace = n.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = void 0, n.target || (n.target = s), a = null == a ? [n] : t.makeArray(a, [n]), d = t.event.special[l] || {}, u || !d.trigger || !1 !== d.trigger.apply(s, a))) { if (!u && !d.noBubble && !E(s)) { for (b = d.delegateType || l, oe.test(b + l) || (c = c.parentNode); c; c = c.parentNode) m.push(c), f = c;
                    f === (s.ownerDocument || i) && m.push(f.defaultView || f.parentWindow || e) };
                y = 0; while ((c = m[y++]) && !n.isPropagationStopped()) g = c, n.type = 1 < y ? b : d.bindType || l, (h = (r.get(c, "events") || Object.create(null))[n.type] && r.get(c, "handle")) && h.apply(c, a), (h = p && c[p]) && h.apply && O(c) && (n.result = h.apply(c, a), !1 === n.result && n.preventDefault()); return n.type = l, u || n.isDefaultPrevented() || d._default && !1 !== d._default.apply(m.pop(), a) || !O(s) || p && o(s[l]) && !E(s) && ((f = s[p]) && (s[p] = null), t.event.triggered = l, n.isPropagationStopped() && g.addEventListener(l, ae), s[l](), n.isPropagationStopped() && g.removeEventListener(l, ae), t.event.triggered = void 0, f && (s[p] = f)), n.result } }, simulate: function(e, n, r) { var i = t.extend(new t.Event, r, { type: e, isSimulated: !0 });
            t.event.trigger(i, null, n) } }), t.fn.extend({ trigger: function(e, n) { return this.each(function() { t.event.trigger(e, n, this) }) }, triggerHandler: function(e, n) { var r = this[0]; if (r) return t.event.trigger(e, n, r, !0) } }), a.focusin || t.each({ focus: "focusin", blur: "focusout" }, function(e, n) { var i = function(e) { t.event.simulate(n, e.target, t.event.fix(e)) };
        t.event.special[n] = { setup: function() { var t = this.ownerDocument || this.document || this,
                    o = r.access(t, n);
                o || t.addEventListener(e, i, !0), r.access(t, n, (o || 0) + 1) }, teardown: function() { var t = this.ownerDocument || this.document || this,
                    o = r.access(t, n) - 1;
                o ? r.access(t, n, o) : (t.removeEventListener(e, i, !0), r.remove(t, n)) } } }), t.parseXML = function(n) { var i; if (!n || "string" != typeof n) return null; try { i = (new e.DOMParser).parseFromString(n, "text/xml") } catch (r) { i = void 0 }; return i && !i.getElementsByTagName("parsererror").length || t.error("Invalid XML: " + n), i };
    var re, Qe = /\[\]$/,
        ie = /\r?\n/g,
        Ye = /^(?:submit|button|image|reset|file)$/i,
        Ge = /^(?:input|select|textarea|keygen)/i;

    function ne(e, n, r, i) { var o; if (Array.isArray(n)) t.each(n, function(t, n) { r || Qe.test(e) ? i(e, n) : ne(e + "[" + ("object" == typeof n && null != n ? t : "") + "]", n, r, i) });
        else if (r || "object" !== A(n)) i(e, n);
        else
            for (o in n) ne(e + "[" + o + "]", n[o], r, i) };
    t.param = function(e, n) { var r, i = [],
            a = function(e, t) { var n = o(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n) }; if (null == e) return ""; if (Array.isArray(e) || e.jquery && !t.isPlainObject(e)) t.each(e, function() { a(this.name, this.value) });
        else
            for (r in e) ne(r, e[r], n, a); return i.join("&") }, t.fn.extend({ serialize: function() { return t.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var e = t.prop(this, "elements"); return e ? t.makeArray(e) : this }).filter(function() { var e = this.type; return this.name && !t(this).is(":disabled") && Ge.test(this.nodeName) && !Ye.test(e) && (this.checked || !q.test(e)) }).map(function(e, n) { var r = t(this).val(); return null == r ? null : Array.isArray(r) ? t.map(r, function(e) { return { name: n.name, value: e.replace(ie, "\r\n") } }) : { name: n.name, value: r.replace(ie, "\r\n") } }).get() } }), t.fn.extend({ wrapAll: function(e) { var n; return this[0] && (o(e) && (e = e.call(this[0])), n = t(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && n.insertBefore(this[0]), n.map(function() { var e = this; while (e.firstElementChild) e = e.firstElementChild; return e }).append(this)), this }, wrapInner: function(e) { return o(e) ? this.each(function(n) { t(this).wrapInner(e.call(this, n)) }) : this.each(function() { var n = t(this),
                    r = n.contents();
                r.length ? r.wrapAll(e) : n.append(e) }) }, wrap: function(e) { var n = o(e); return this.each(function(r) { t(this).wrapAll(n ? e.call(this, r) : e) }) }, unwrap: function(e) { return this.parent(e).not("body").each(function() { t(this).replaceWith(this.childNodes) }), this } }), t.expr.pseudos.hidden = function(e) { return !t.expr.pseudos.visible(e) }, t.expr.pseudos.visible = function(e) { return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) }, a.createHTMLDocument = ((re = i.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === re.childNodes.length), t.parseHTML = function(e, n, r) { return "string" != typeof e ? [] : ("boolean" == typeof n && (r = n, n = !1), n || (a.createHTMLDocument ? ((u = (n = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href, n.head.appendChild(u)) : n = i), o = !r && [], (s = Ce.exec(e)) ? [n.createElement(s[1])] : (s = He([e], n, o), o && o.length && t(o).remove(), t.merge([], s.childNodes))); var u, s, o }, t.offset = { setOffset: function(e, n, r) { var p, s, u, l, a, c, f = t.css(e, "position"),
                d = t(e),
                i = {}; "static" === f && (e.style.position = "relative"), a = d.offset(), u = t.css(e, "top"), c = t.css(e, "left"), ("absolute" === f || "fixed" === f) && -1 < (u + c).indexOf("auto") ? (l = (p = d.position()).top, s = p.left) : (l = parseFloat(u) || 0, s = parseFloat(c) || 0), o(n) && (n = n.call(e, r, t.extend({}, a))), null != n.top && (i.top = n.top - a.top + l), null != n.left && (i.left = n.left - a.left + s), "using" in n ? n.using.call(e, i) : ("number" == typeof i.top && (i.top += "px"), "number" == typeof i.left && (i.left += "px"), d.css(i)) } }, t.fn.extend({ offset: function(e) { if (arguments.length) return void 0 === e ? this : this.each(function(n) { t.offset.setOffset(this, e, n) }); var r, i, n = this[0]; return n ? n.getClientRects().length ? (r = n.getBoundingClientRect(), i = n.ownerDocument.defaultView, { top: r.top + i.pageYOffset, left: r.left + i.pageXOffset }) : { top: 0, left: 0 } : void 0 }, position: function() { if (this[0]) { var e, r, i, n = this[0],
                    o = { top: 0, left: 0 }; if ("fixed" === t.css(n, "position")) r = n.getBoundingClientRect();
                else { r = this.offset(), i = n.ownerDocument, e = n.offsetParent || i.documentElement; while (e && (e === i.body || e === i.documentElement) && "static" === t.css(e, "position")) e = e.parentNode;
                    e && e !== n && 1 === e.nodeType && ((o = t(e).offset()).top += t.css(e, "borderTopWidth", !0), o.left += t.css(e, "borderLeftWidth", !0)) }; return { top: r.top - o.top - t.css(n, "marginTop", !0), left: r.left - o.left - t.css(n, "marginLeft", !0) } } }, offsetParent: function() { return this.map(function() { var e = this.offsetParent; while (e && "static" === t.css(e, "position")) e = e.offsetParent; return e || v }) } }), t.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e, n) { var r = "pageYOffset" === n;
        t.fn[e] = function(t) { return f(this, function(e, t, i) { var o; if (E(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[n] : e[t];
                o ? o.scrollTo(r ? o.pageXOffset : i, r ? i : o.pageYOffset) : e[t] = i }, e, t, arguments.length) } }), t.each(["top", "left"], function(e, n) { t.cssHooks[n] = Me(a.pixelPosition, function(e, r) { if (r) return r = H(e, n), X.test(r) ? t(e).position()[n] + "px" : r }) }), t.each({ Height: "height", Width: "width" }, function(e, n) { t.each({ padding: "inner" + e, content: n, "": "outer" + e }, function(r, i) { t.fn[i] = function(o, a) { var s = arguments.length && (r || "boolean" != typeof o),
                    u = r || (!0 === o || !0 === a ? "margin" : "border"); return f(this, function(n, r, o) { var a; return E(n) ? 0 === i.indexOf("outer") ? n["inner" + e] : n.document.documentElement["client" + e] : 9 === n.nodeType ? (a = n.documentElement, Math.max(n.body["scroll" + e], a["scroll" + e], n.body["offset" + e], a["offset" + e], a["client" + e])) : void 0 === o ? t.css(n, r, u) : t.style(n, r, o, u) }, n, s ? o : void 0, s) } }) }), t.fn.extend({ bind: function(e, t, n) { return this.on(e, null, t, n) }, unbind: function(e, t) { return this.off(e, null, t) }, delegate: function(e, t, n, r) { return this.on(t, e, n, r) }, undelegate: function(e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) }, hover: function(e, t) { return this.mouseenter(e).mouseleave(t || e) } }), t.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) { t.fn[n] = function(e, t) { return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n) } });
    var Xe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    t.proxy = function(e, n) { var r, i, a; if ("string" == typeof n && (r = e[n], n = e, e = r), o(e)) return i = g.call(arguments, 2), (a = function() { return e.apply(n || this, i.concat(g.call(arguments))) }).guid = e.guid = e.guid || t.guid++, a }, t.holdReady = function(e) { e ? t.readyWait++ : t.ready(!0) }, t.isArray = Array.isArray, t.parseJSON = JSON.parse, t.nodeName = c, t.isFunction = o, t.isWindow = E, t.camelCase = p, t.type = A, t.now = Date.now, t.isNumeric = function(e) { var n = t.type(e); return ("number" === n || "string" === n) && !isNaN(e - parseFloat(e)) }, t.trim = function(e) { return null == e ? "" : (e + "").replace(Xe, "") }, "function" == typeof define && define.amd && define("jquery", [], function() { return t });
    var Ue = e.jQuery,
        Ve = e.$;
    return t.noConflict = function(n) { return e.$ === t && (e.$ = Ve), n && e.jQuery === t && (e.jQuery = Ue), t }, "undefined" == typeof n && (e.jQuery = e.$ = t), t
});
/*!
 * Bootstrap v4.6.0 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
! function(t, e) { 'object' == typeof exports && 'undefined' != typeof module ? e(exports, require('jquery')) : 'function' == typeof define && define.amd ? define(['exports', 'jquery'], e) : e((t = 'undefined' != typeof globalThis ? globalThis : t || self).bootstrap = {}, t.jQuery) }(this, (function(e, n) {
    'use strict';

    function pe(t) { return t && 'object' == typeof t && 'default' in t ? t : { default: t } };
    var t = pe(n);

    function ot(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } };

    function a(t, e, n) { return e && ot(t.prototype, e), n && ot(t, n), t };

    function o() { return (o = Object.assign || function(t) { for (var i = 1; i < arguments.length; i++) { var n = arguments[i]; for (var e in n) Object.prototype.hasOwnProperty.call(n, e) && (t[e] = n[e]) }; return t }).apply(this, arguments) };

    function me(e) { var o = this,
            n = !1; return t.default(this).one(i.TRANSITION_END, (function() { n = !0 })), setTimeout((function() { n || i.triggerTransitionEnd(o) }), e), this };
    var i = {
        TRANSITION_END: 'bsTransitionEnd',
        getUID: function(t) {
            do { t += ~~(1e6 * Math.random()) }
            while (document.getElementById(t));
            return t
        },
        getSelectorFromElement: function(t) { var e = t.getAttribute('data-target'); if (!e || '#' === e) { var n = t.getAttribute('href');
                e = n && '#' !== n ? n.trim() : '' }; try { return document.querySelector(e) ? e : null } catch (i) { return null } },
        getTransitionDurationFromElement: function(e) { if (!e) return 0; var n = t.default(e).css('transition-duration'),
                i = t.default(e).css('transition-delay'),
                o = parseFloat(n),
                r = parseFloat(i); return o || r ? (n = n.split(',')[0], i = i.split(',')[0], 1e3 * (parseFloat(n) + parseFloat(i))) : 0 },
        reflow: function(t) { return t.offsetHeight },
        triggerTransitionEnd: function(e) { t.default(e).trigger('transitionend') },
        supportsTransitionEnd: function() { return Boolean('transitionend') },
        isElement: function(t) { return (t[0] || t).nodeType },
        typeCheckConfig: function(t, e, n) { for (var r in n)
                if (Object.prototype.hasOwnProperty.call(n, r)) { var s = n[r],
                        a = e[r],
                        l = a && i.isElement(a) ? 'element' : null === (o = a) || 'undefined' == typeof o ? '' + o : {}.toString.call(o).match(/\s([a-z]+)/i)[1].toLowerCase(); if (!new RegExp(s).test(l)) throw new Error(t.toUpperCase() + ': Option "' + r + '" provided type "' + l + '" but expected type "' + s + '".') };
            var o },
        findShadowRoot: function(t) { if (!document.documentElement.attachShadow) return null; if ('function' == typeof t.getRootNode) { var e = t.getRootNode(); return e instanceof ShadowRoot ? e : null }; return t instanceof ShadowRoot ? t : t.parentNode ? i.findShadowRoot(t.parentNode) : null },
        jQueryDetection: function() { if ('undefined' == typeof t.default) throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.'); var e = t.default.fn.jquery.split(' ')[0].split('.'); if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0') }
    };
    i.jQueryDetection(), t.default.fn.emulateTransitionEnd = me, t.default.event.special[i.TRANSITION_END] = { bindType: 'transitionend', delegateType: 'transitionend', handle: function(e) { if (t.default(e.target).is(this)) return e.handleObj.handler.apply(this, arguments) } };
    var O = 'alert',
        he = t.default.fn[O],
        w = function() {
            function n(t) { this._element = t };
            var e = n.prototype;
            return e.close = function(t) { var e = this._element;
                t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e) }, e.dispose = function() { t.default.removeData(this._element, 'bs.alert'), this._element = null }, e._getRootElement = function(e) { var o = i.getSelectorFromElement(e),
                    n = !1; return o && (n = document.querySelector(o)), n || (n = t.default(e).closest('.alert')[0]), n }, e._triggerCloseEvent = function(e) { var n = t.default.Event('close.bs.alert'); return t.default(e).trigger(n), n }, e._removeElement = function(e) {
                var o = this;
                if (t.default(e).removeClass('show'), t.default(e).hasClass('fade')) { var n = i.getTransitionDurationFromElement(e);
                    t.default(e).one(i.TRANSITION_END, (function(t) { return o._destroyElement(e, t) })).emulateTransitionEnd(n) } else this._destroyElement(e)
            }, e._destroyElement = function(e) { t.default(e).detach().trigger('closed.bs.alert').remove() }, n._jQueryInterface = function(e) { return this.each((function() { var o = t.default(this),
                        i = o.data('bs.alert');
                    i || (i = new n(this), o.data('bs.alert', i)), 'close' === e && i[e](this) })) }, n._handleDismiss = function(t) { return function(e) { e && e.preventDefault(), t.close(this) } }, a(n, null, [{ key: 'VERSION', get: function() { return '4.6.0' } }]), n
        }();
    t.default(document).on('click.bs.alert.data-api', '[data-dismiss="alert"]', w._handleDismiss(new w)), t.default.fn[O] = w._jQueryInterface, t.default.fn[O].Constructor = w, t.default.fn[O].noConflict = function() { return t.default.fn[O] = he, w._jQueryInterface };
    var ce = t.default.fn.button,
        I = function() {
            function e(t) { this._element = t, this.shouldAvoidTriggerChange = !1 }; var n = e.prototype; return n.toggle = function() { var n = !0,
                    o = !0,
                    r = t.default(this._element).closest('[data-toggle="buttons"]')[0]; if (r) { var e = this._element.querySelector('input:not([type="hidden"])'); if (e) { if ('radio' === e.type)
                            if (e.checked && this._element.classList.contains('active')) n = !1;
                            else { var i = r.querySelector('.active');
                                i && t.default(i).removeClass('active') };
                        n && ('checkbox' !== e.type && 'radio' !== e.type || (e.checked = !this._element.classList.contains('active')), this.shouldAvoidTriggerChange || t.default(e).trigger('change')), e.focus(), o = !1 } };
                this._element.hasAttribute('disabled') || this._element.classList.contains('disabled') || (o && this._element.setAttribute('aria-pressed', !this._element.classList.contains('active')), n && t.default(this._element).toggleClass('active')) }, n.dispose = function() { t.default.removeData(this._element, 'bs.button'), this._element = null }, e._jQueryInterface = function(n, i) { return this.each((function() { var r = t.default(this),
                        o = r.data('bs.button');
                    o || (o = new e(this), r.data('bs.button', o)), o.shouldAvoidTriggerChange = i, 'toggle' === n && o[n]() })) }, a(e, null, [{ key: 'VERSION', get: function() { return '4.6.0' } }]), e }();
    t.default(document).on('click.bs.button.data-api', '[data-toggle^="button"]', (function(e) { var n = e.target,
            o = n; if (t.default(n).hasClass('btn') || (n = t.default(n).closest('.btn')[0]), !n || n.hasAttribute('disabled') || n.classList.contains('disabled')) e.preventDefault();
        else { var i = n.querySelector('input:not([type="hidden"])'); if (i && (i.hasAttribute('disabled') || i.classList.contains('disabled'))) return void e.preventDefault(); 'INPUT' !== o.tagName && 'LABEL' === n.tagName || I._jQueryInterface.call(t.default(n), 'toggle', 'INPUT' === o.tagName) } })).on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', (function(e) { var n = t.default(e.target).closest('.btn')[0];
        t.default(n).toggleClass('focus', /^focus(in)?$/.test(e.type)) })), t.default(window).on('load.bs.button.data-api', (function() { for (var t = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), o = 0, s = t.length; o < s; o++) { var i = t[o],
                r = i.querySelector('input:not([type="hidden"])');
            r.checked || r.hasAttribute('checked') ? i.classList.add('active') : i.classList.remove('active') }; for (var n = 0, a = (t = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; n < a; n++) { var e = t[n]; 'true' === e.getAttribute('aria-pressed') ? e.classList.add('active') : e.classList.remove('active') } })), t.default.fn.button = I._jQueryInterface, t.default.fn.button.Constructor = I, t.default.fn.button.noConflict = function() { return t.default.fn.button = ce, I._jQueryInterface };
    var b = 'carousel',
        ue = '.bs.carousel',
        fe = t.default.fn[b],
        q = { interval: 5e3, keyboard: !0, slide: !1, pause: 'hover', wrap: !0, touch: !0 },
        de = { interval: '(number|boolean)', keyboard: 'boolean', slide: '(boolean|string)', pause: '(string|boolean)', wrap: 'boolean', touch: 'boolean' },
        it = { TOUCH: 'touch', PEN: 'pen' },
        y = function() {
            function n(t, e) { this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector('.carousel-indicators'), this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners() };
            var e = n.prototype;
            return e.next = function() { this._isSliding || this._slide('next') }, e.nextWhenVisible = function() { var e = t.default(this._element);!document.hidden && e.is(':visible') && 'hidden' !== e.css('visibility') && this.next() }, e.prev = function() { this._isSliding || this._slide('prev') }, e.pause = function(t) { t || (this._isPaused = !0), this._element.querySelector('.carousel-item-next, .carousel-item-prev') && (i.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null }, e.cycle = function(t) { t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval)) }, e.to = function(e) { var o = this;
                this._activeElement = this._element.querySelector('.active.carousel-item'); var n = this._getItemIndex(this._activeElement); if (!(e > this._items.length - 1 || e < 0))
                    if (this._isSliding) t.default(this._element).one('slid.bs.carousel', (function() { return o.to(e) }));
                    else { if (n === e) return this.pause(), void this.cycle(); var i = e > n ? 'next' : 'prev';
                        this._slide(i, this._items[e]) } }, e.dispose = function() { t.default(this._element).off(ue), t.default.removeData(this._element, 'bs.carousel'), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null }, e._getConfig = function(t) { return t = o({}, q, t), i.typeCheckConfig(b, t, de), t }, e._handleSwipe = function() { var e = Math.abs(this.touchDeltaX); if (!(e <= 40)) { var t = e / this.touchDeltaX;
                    this.touchDeltaX = 0, t > 0 && this.prev(), t < 0 && this.next() } }, e._addEventListeners = function() { var e = this;
                this._config.keyboard && t.default(this._element).on('keydown.bs.carousel', (function(t) { return e._keydown(t) })), 'hover' === this._config.pause && t.default(this._element).on('mouseenter.bs.carousel', (function(t) { return e.pause(t) })).on('mouseleave.bs.carousel', (function(t) { return e.cycle(t) })), this._config.touch && this._addTouchEventListeners() }, e._addTouchEventListeners = function() { var e = this; if (this._touchSupported) { var n = function(t) { e._pointerEvent && it[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX) },
                        i = function(t) { e._pointerEvent && it[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX), e._handleSwipe(), 'hover' === e._config.pause && (e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout((function(t) { return e.cycle(t) }), 500 + e._config.interval)) };
                    t.default(this._element.querySelectorAll('.carousel-item img')).on('dragstart.bs.carousel', (function(t) { return t.preventDefault() })), this._pointerEvent ? (t.default(this._element).on('pointerdown.bs.carousel', (function(t) { return n(t) })), t.default(this._element).on('pointerup.bs.carousel', (function(t) { return i(t) })), this._element.classList.add('pointer-event')) : (t.default(this._element).on('touchstart.bs.carousel', (function(t) { return n(t) })), t.default(this._element).on('touchmove.bs.carousel', (function(t) { return function(t) { t.originalEvent.touches && t.originalEvent.touches.length > 1 ? e.touchDeltaX = 0 : e.touchDeltaX = t.originalEvent.touches[0].clientX - e.touchStartX }(t) })), t.default(this._element).on('touchend.bs.carousel', (function(t) { return i(t) }))) } }, e._keydown = function(t) { if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                    case 37:
                        t.preventDefault(), this.prev(); break;
                    case 39:
                        t.preventDefault(), this.next() } }, e._getItemIndex = function(t) { return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll('.carousel-item')) : [], this._items.indexOf(t) }, e._getItemByDirection = function(t, e) { var o = 'next' === t,
                    r = 'prev' === t,
                    n = this._getItemIndex(e),
                    a = this._items.length - 1; if ((r && 0 === n || o && n === a) && !this._config.wrap) return e; var i = (n + ('prev' === t ? -1 : 1)) % this._items.length; return -1 === i ? this._items[this._items.length - 1] : this._items[i] }, e._triggerSlideEvent = function(e, n) { var o = this._getItemIndex(e),
                    r = this._getItemIndex(this._element.querySelector('.active.carousel-item')),
                    i = t.default.Event('slide.bs.carousel', { relatedTarget: e, direction: n, from: r, to: o }); return t.default(this._element).trigger(i), i }, e._setActiveIndicatorElement = function(e) { if (this._indicatorsElement) { var i = [].slice.call(this._indicatorsElement.querySelectorAll('.active'));
                    t.default(i).removeClass('active'); var n = this._indicatorsElement.children[this._getItemIndex(e)];
                    n && t.default(n).addClass('active') } }, e._updateInterval = function() { var e = this._activeElement || this._element.querySelector('.active.carousel-item'); if (e) { var t = parseInt(e.getAttribute('data-interval'), 10);
                    t ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = t) : this._config.interval = this._config.defaultInterval || this._config.interval } }, e._slide = function(e, n) {
                var a, s, l, f = this,
                    r = this._element.querySelector('.active.carousel-item'),
                    h = this._getItemIndex(r),
                    o = n || r && this._getItemByDirection(e, r),
                    p = this._getItemIndex(o),
                    d = Boolean(this._interval);
                if ('next' === e ? (a = 'carousel-item-left', s = 'carousel-item-next', l = 'left') : (a = 'carousel-item-right', s = 'carousel-item-prev', l = 'right'), o && t.default(o).hasClass('active')) this._isSliding = !1;
                else if (!this._triggerSlideEvent(o, l).isDefaultPrevented() && r && o) {
                    this._isSliding = !0, d && this.pause(), this._setActiveIndicatorElement(o), this._activeElement = o;
                    var u = t.default.Event('slid.bs.carousel', { relatedTarget: o, direction: l, from: h, to: p });
                    if (t.default(this._element).hasClass('slide')) { t.default(o).addClass(s), i.reflow(o), t.default(r).addClass(a), t.default(o).addClass(a); var c = i.getTransitionDurationFromElement(r);
                        t.default(r).one(i.TRANSITION_END, (function() { t.default(o).removeClass(a + ' ' + s).addClass('active'), t.default(r).removeClass('active ' + s + ' ' + a), f._isSliding = !1, setTimeout((function() { return t.default(f._element).trigger(u) }), 0) })).emulateTransitionEnd(c) } else t.default(r).removeClass('active'), t.default(o).addClass('active'), this._isSliding = !1, t.default(this._element).trigger(u);
                    d && this.cycle()
                }
            }, n._jQueryInterface = function(e) {
                return this.each((function() {
                    var i = t.default(this).data('bs.carousel'),
                        r = o({}, q, t.default(this).data());
                    'object' == typeof e && (r = o({}, r, e));
                    var a = 'string' == typeof e ? e : r.slide;
                    if (i || (i = new n(this, r), t.default(this).data('bs.carousel', i)), 'number' == typeof e) i.to(e);
                    else if ('string' == typeof a) { if ('undefined' == typeof i[a]) throw new TypeError('No method named "' + a + '"');
                        i[a]() } else r.interval && r.ride && (i.pause(), i.cycle())
                }))
            }, n._dataApiClickHandler = function(e) { var l = i.getSelectorFromElement(this); if (l) { var r = t.default(l)[0]; if (r && t.default(r).hasClass('carousel')) { var s = o({}, t.default(r).data(), t.default(this).data()),
                            a = this.getAttribute('data-slide-to');
                        a && (s.interval = !1), n._jQueryInterface.call(t.default(r), s), a && t.default(r).data('bs.carousel').to(a), e.preventDefault() } } }, a(n, null, [{ key: 'VERSION', get: function() { return '4.6.0' } }, { key: 'Default', get: function() { return q } }]), n
        }();
    t.default(document).on('click.bs.carousel.data-api', '[data-slide], [data-slide-to]', y._dataApiClickHandler), t.default(window).on('load.bs.carousel.data-api', (function() { for (var i = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), e = 0, o = i.length; e < o; e++) { var n = t.default(i[e]);
            y._jQueryInterface.call(n, n.data()) } })), t.default.fn[b] = y._jQueryInterface, t.default.fn[b].Constructor = y, t.default.fn[b].noConflict = function() { return t.default.fn[b] = fe, y._jQueryInterface };
    var v = 'collapse',
        se = t.default.fn[v],
        B = { toggle: !0, parent: '' },
        le = { toggle: 'boolean', parent: '(string|element)' },
        A = function() {
            function n(t, e) { this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]')); for (var a = [].slice.call(document.querySelectorAll('[data-toggle="collapse"]')), o = 0, l = a.length; o < l; o++) { var r = a[o],
                        n = i.getSelectorFromElement(r),
                        s = [].slice.call(document.querySelectorAll(n)).filter((function(e) { return e === t }));
                    null !== n && s.length > 0 && (this._selector = n, this._triggerArray.push(r)) };
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle() }; var e = n.prototype; return e.toggle = function() { t.default(this._element).hasClass('show') ? this.hide() : this.show() }, e.show = function() { var e, a, o = this; if (!this._isTransitioning && !t.default(this._element).hasClass('show') && (this._parent && 0 === (e = [].slice.call(this._parent.querySelectorAll('.show, .collapsing')).filter((function(t) { return 'string' == typeof o._config.parent ? t.getAttribute('data-parent') === o._config.parent : t.classList.contains('collapse') }))).length && (e = null), !(e && (a = t.default(e).not(this._selector).data('bs.collapse')) && a._isTransitioning))) { var s = t.default.Event('show.bs.collapse'); if (t.default(this._element).trigger(s), !s.isDefaultPrevented()) { e && (n._jQueryInterface.call(t.default(e).not(this._selector), 'hide'), a || t.default(e).data('bs.collapse', null)); var r = this._getDimension();
                        t.default(this._element).removeClass('collapse').addClass('collapsing'), this._element.style[r] = 0, this._triggerArray.length && t.default(this._triggerArray).removeClass('collapsed').attr('aria-expanded', !0), this.setTransitioning(!0); var l = 'scroll' + (r[0].toUpperCase() + r.slice(1)),
                            u = i.getTransitionDurationFromElement(this._element);
                        t.default(this._element).one(i.TRANSITION_END, (function() { t.default(o._element).removeClass('collapsing').addClass('collapse show'), o._element.style[r] = '', o.setTransitioning(!1), t.default(o._element).trigger('shown.bs.collapse') })).emulateTransitionEnd(u), this._element.style[r] = this._element[l] + 'px' } } }, e.hide = function() { var l = this; if (!this._isTransitioning && t.default(this._element).hasClass('show')) { var s = t.default.Event('hide.bs.collapse'); if (t.default(this._element).trigger(s), !s.isDefaultPrevented()) { var n = this._getDimension();
                        this._element.style[n] = this._element.getBoundingClientRect()[n] + 'px', i.reflow(this._element), t.default(this._element).addClass('collapsing').removeClass('collapse show'); var a = this._triggerArray.length; if (a > 0)
                            for (var e = 0; e < a; e++) { var o = this._triggerArray[e],
                                    r = i.getSelectorFromElement(o); if (null !== r) t.default([].slice.call(document.querySelectorAll(r))).hasClass('show') || t.default(o).addClass('collapsed').attr('aria-expanded', !1) };
                        this.setTransitioning(!0);
                        this._element.style[n] = ''; var u = i.getTransitionDurationFromElement(this._element);
                        t.default(this._element).one(i.TRANSITION_END, (function() { l.setTransitioning(!1), t.default(l._element).removeClass('collapsing').addClass('collapse').trigger('hidden.bs.collapse') })).emulateTransitionEnd(u) } } }, e.setTransitioning = function(t) { this._isTransitioning = t }, e.dispose = function() { t.default.removeData(this._element, 'bs.collapse'), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null }, e._getConfig = function(t) { return (t = o({}, B, t)).toggle = Boolean(t.toggle), i.typeCheckConfig(v, t, le), t }, e._getDimension = function() { return t.default(this._element).hasClass('width') ? 'width' : 'height' }, e._getParent = function() { var e, a = this;
                i.isElement(this._config.parent) ? (e = this._config.parent, 'undefined' != typeof this._config.parent.jquery && (e = this._config.parent[0])) : e = document.querySelector(this._config.parent); var o = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                    r = [].slice.call(e.querySelectorAll(o)); return t.default(r).each((function(t, e) { a._addAriaAndCollapsedClass(n._getTargetFromElement(e), [e]) })), e }, e._addAriaAndCollapsedClass = function(e, n) { var i = t.default(e).hasClass('show');
                n.length && t.default(n).toggleClass('collapsed', !i).attr('aria-expanded', i) }, n._getTargetFromElement = function(t) { var e = i.getSelectorFromElement(t); return e ? document.querySelector(e) : null }, n._jQueryInterface = function(e) { return this.each((function() { var r = t.default(this),
                        i = r.data('bs.collapse'),
                        a = o({}, B, r.data(), 'object' == typeof e && e ? e : {}); if (!i && a.toggle && 'string' == typeof e && /show|hide/.test(e) && (a.toggle = !1), i || (i = new n(this, a), r.data('bs.collapse', i)), 'string' == typeof e) { if ('undefined' == typeof i[e]) throw new TypeError('No method named "' + e + '"');
                        i[e]() } })) }, a(n, null, [{ key: 'VERSION', get: function() { return '4.6.0' } }, { key: 'Default', get: function() { return B } }]), n }();
    t.default(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', (function(e) { 'A' === e.currentTarget.tagName && e.preventDefault(); var n = t.default(this),
            o = i.getSelectorFromElement(this),
            r = [].slice.call(document.querySelectorAll(o));
        t.default(r).each((function() { var e = t.default(this),
                i = e.data('bs.collapse') ? 'toggle' : n.data();
            A._jQueryInterface.call(e, i) })) })), t.default.fn[v] = A._jQueryInterface, t.default.fn[v].Constructor = A, t.default.fn[v].noConflict = function() { return t.default.fn[v] = se, A._jQueryInterface };
    var k = 'undefined' != typeof window && 'undefined' != typeof document && 'undefined' != typeof navigator,
        re = function() { for (var e = ['Edge', 'Trident', 'Firefox'], t = 0; t < e.length; t += 1)
                if (k && navigator.userAgent.indexOf(e[t]) >= 0) return 1;
            return 0 }(),
        ae = k && window.Promise ? function(t) { var e = !1; return function() { e || (e = !0, window.Promise.resolve().then((function() { e = !1, t() }))) } } : function(t) { var e = !1; return function() { e || (e = !0, setTimeout((function() { e = !1, t() }), re)) } };

    function rt(t) { return t && '[object Function]' === {}.toString.call(t) };

    function h(t, e) { if (1 !== t.nodeType) return []; var n = t.ownerDocument.defaultView.getComputedStyle(t, null); return e ? n[e] : n };

    function Q(t) { return 'HTML' === t.nodeName ? t : t.parentNode || t.host };

    function x(t) { if (!t) return document.body; switch (t.nodeName) {
            case 'HTML':
            case 'BODY':
                return t.ownerDocument.body;
            case '#document':
                return t.body }; var e = h(t),
            n = e.overflow,
            i = e.overflowX,
            o = e.overflowY; return /(auto|scroll|overlay)/.test(n + o + i) ? t : x(Q(t)) };

    function at(t) { return t && t.referenceNode ? t.referenceNode : t };
    var et = k && !(!window.MSInputMethodContext || !document.documentMode),
        nt = k && /MSIE 10/.test(navigator.userAgent);

    function E(t) { return 11 === t ? et : 10 === t ? nt : et || nt };

    function T(t) { if (!t) return document.documentElement; for (var i = E(10) ? document.body : null, e = t.offsetParent || null; e === i && t.nextElementSibling;) e = (t = t.nextElementSibling).offsetParent; var n = e && e.nodeName; return n && 'BODY' !== n && 'HTML' !== n ? -1 !== ['TH', 'TD', 'TABLE'].indexOf(e.nodeName) && 'static' === h(e, 'position') ? T(e) : e : t ? t.ownerDocument.documentElement : document.documentElement };

    function W(t) { return null !== t.parentNode ? W(t.parentNode) : t };

    function F(t, e) { if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement; var s = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
            l = s ? t : e,
            u = s ? e : t,
            o = document.createRange();
        o.setStart(l, 0), o.setEnd(u, 0); var i, a, n = o.commonAncestorContainer; if (t !== n && e !== n || l.contains(u)) return 'BODY' === (a = (i = n).nodeName) || 'HTML' !== a && T(i.firstElementChild) !== i ? T(n) : n; var r = W(t); return r.host ? F(r.host, e) : F(t, W(e).host) };

    function C(t) { var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'top',
            e = 'top' === r ? 'scrollTop' : 'scrollLeft',
            n = t.nodeName; if ('BODY' === n || 'HTML' === n) { var i = t.ownerDocument.documentElement,
                o = t.ownerDocument.scrollingElement || i; return o[e] }; return t[e] };

    function ge(t, e) { var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = C(e, 'top'),
            o = C(e, 'left'),
            n = r ? -1 : 1; return t.top += i * n, t.bottom += i * n, t.left += o * n, t.right += o * n, t };

    function st(t, e) { var n = 'x' === e ? 'Left' : 'Top',
            i = 'Left' === n ? 'Right' : 'Bottom'; return parseFloat(t['border' + n + 'Width']) + parseFloat(t['border' + i + 'Width']) };

    function lt(t, e, n, i) { return Math.max(e['offset' + t], e['scroll' + t], n['client' + t], n['offset' + t], n['scroll' + t], E(10) ? parseInt(n['offset' + t]) + parseInt(i['margin' + ('Height' === t ? 'Top' : 'Left')]) + parseInt(i['margin' + ('Height' === t ? 'Bottom' : 'Right')]) : 0) };

    function ut(t) { var n = t.body,
            e = t.documentElement,
            i = E(10) && getComputedStyle(e); return { height: lt('Height', n, e, i), width: lt('Width', n, e, i) } };
    var ie = function(t, e) { if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function') },
        oe = function() {
            function t(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } }; return function(e, n, i) { return n && t(e.prototype, n), i && t(e, i), e } }(),
        g = function(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t },
        r = Object.assign || function(t) { for (var i = 1; i < arguments.length; i++) { var n = arguments[i]; for (var e in n) Object.prototype.hasOwnProperty.call(n, e) && (t[e] = n[e]) }; return t };

    function l(t) { return r({}, t, { right: t.left + t.width, bottom: t.top + t.height }) };

    function U(t) {
        var e = {};
        try {
            if (E(10)) { e = t.getBoundingClientRect(); var s = C(t, 'top'),
                    u = C(t, 'left');
                e.top += s, e.left += u, e.bottom += s, e.right += u } else e = t.getBoundingClientRect()
        } catch (c) {};
        var n = { left: e.left, top: e.top, width: e.right - e.left, height: e.bottom - e.top },
            a = 'HTML' === t.nodeName ? ut(t.ownerDocument) : {},
            f = a.width || t.clientWidth || n.width,
            d = a.height || t.clientHeight || n.height,
            i = t.offsetWidth - f,
            o = t.offsetHeight - d;
        if (i || o) { var r = h(t);
            i -= st(r, 'x'), o -= st(r, 'y'), n.width -= i, n.height -= o };
        return l(n)
    };

    function V(t, e) { var c = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            p = E(10),
            m = 'HTML' === e.nodeName,
            o = U(t),
            i = U(e),
            u = x(t),
            r = h(e),
            f = parseFloat(r.borderTopWidth),
            d = parseFloat(r.borderLeftWidth);
        c && m && (i.top = Math.max(i.top, 0), i.left = Math.max(i.left, 0)); var n = l({ top: o.top - i.top - f, left: o.left - i.left - d, width: o.width, height: o.height }); if (n.marginTop = 0, n.marginLeft = 0, !p && m) { var a = parseFloat(r.marginTop),
                s = parseFloat(r.marginLeft);
            n.top -= f - a, n.bottom -= f - a, n.left -= d - s, n.right -= d - s, n.marginTop = a, n.marginLeft = s }; return (p && !c ? e.contains(u) : e === u && 'BODY' !== u.nodeName) && (n = ge(n, e)), n };

    function ve(t) { var i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            e = t.ownerDocument.documentElement,
            n = V(t, e),
            o = Math.max(e.clientWidth, window.innerWidth || 0),
            r = Math.max(e.clientHeight, window.innerHeight || 0),
            a = i ? 0 : C(e),
            s = i ? 0 : C(e, 'left'),
            u = { top: a - n.top + n.marginTop, left: s - n.left + n.marginLeft, width: o, height: r }; return l(u) };

    function ft(t) { var n = t.nodeName; if ('BODY' === n || 'HTML' === n) return !1; if ('fixed' === h(t, 'position')) return !0; var e = Q(t); return !!e && ft(e) };

    function dt(t) { if (!t || !t.parentElement || E()) return document.documentElement; for (var e = t.parentElement; e && 'none' === h(e, 'transform');) e = e.parentElement; return e || document.documentElement };

    function Y(t, e, n, i) { var l = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            o = { top: 0, left: 0 },
            u = l ? dt(t) : F(t, at(e)); if ('viewport' === i) o = ve(u, l);
        else { var a = void 0; 'scrollParent' === i ? 'BODY' === (a = x(Q(e))).nodeName && (a = t.ownerDocument.documentElement) : a = 'window' === i ? t.ownerDocument.documentElement : i; var r = V(a, u, l); if ('HTML' !== a.nodeName || ft(u)) o = r;
            else { var f = ut(t.ownerDocument),
                    d = f.height,
                    c = f.width;
                o.top += r.top - r.marginTop, o.bottom = d + r.top, o.left += r.left - r.marginLeft, o.right = c + r.left } }; var s = 'number' == typeof(n = n || 0); return o.left += s ? n : n.left || 0, o.top += s ? n : n.top || 0, o.right -= s ? n : n.right || 0, o.bottom -= s ? n : n.bottom || 0, o };

    function be(t) { return t.width * t.height };

    function ct(t, e, n, i, s) { var c = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0; if (-1 === t.indexOf('auto')) return t; var o = Y(n, i, c, s),
            a = { top: { width: o.width, height: e.top - o.top }, right: { width: o.right - e.right, height: o.height }, bottom: { width: o.width, height: o.bottom - e.bottom }, left: { width: e.left - o.left, height: o.height } },
            l = Object.keys(a).map((function(t) { return r({ key: t }, a[t], { area: be(a[t]) }) })).sort((function(t, e) { return e.area - t.area })),
            u = l.filter((function(t) { var e = t.width,
                    i = t.height; return e >= n.clientWidth && i >= n.clientHeight })),
            d = u.length > 0 ? u[0].key : l[0].key,
            f = t.split('-')[1]; return d + (f ? '-' + f : '') };

    function ht(t, e, n) { var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            o = i ? dt(e) : F(e, at(n)); return V(n, o, i) };

    function pt(t) { var e = t.ownerDocument.defaultView.getComputedStyle(t),
            n = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
            i = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0); return { width: t.offsetWidth + i, height: t.offsetHeight + n } };

    function R(t) { var e = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' }; return t.replace(/left|right|bottom|top/g, (function(t) { return e[t] })) };

    function mt(t, e, n) { n = n.split('-')[0]; var i = pt(t),
            a = { width: i.width, height: i.height },
            o = -1 !== ['right', 'left'].indexOf(n),
            s = o ? 'top' : 'left',
            r = o ? 'left' : 'top',
            l = o ? 'height' : 'width',
            u = o ? 'width' : 'height'; return a[s] = e[s] + e[l] / 2 - i[l] / 2, a[r] = n === r ? e[r] - i[u] : e[R(r)], a };

    function j(t, e) { return Array.prototype.find ? t.find(e) : t.filter(e)[0] };

    function gt(t, e, n) { return (void 0 === n ? t : t.slice(0, function(t, e, n) { if (Array.prototype.findIndex) return t.findIndex((function(t) { return t[e] === n })); var i = j(t, (function(t) { return t[e] === n })); return t.indexOf(i) }(t, 'name', n))).forEach((function(t) { t.function && console.warn('`modifier.function` is deprecated, use `modifier.fn`!'); var n = t.function || t.fn;
            t.enabled && rt(n) && (e.offsets.popper = l(e.offsets.popper), e.offsets.reference = l(e.offsets.reference), e = n(e, t)) })), e };

    function ye() { if (!this.state.isDestroyed) { var t = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };
            t.offsets.reference = ht(this.state, this.popper, this.reference, this.options.positionFixed), t.placement = ct(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.positionFixed = this.options.positionFixed, t.offsets.popper = mt(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute', t = gt(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t)) } };

    function vt(t, e) { return t.some((function(t) { var n = t.name; return t.enabled && n === e })) };

    function z(t) { for (var o = [!1, 'ms', 'Webkit', 'Moz', 'O'], r = t.charAt(0).toUpperCase() + t.slice(1), e = 0; e < o.length; e++) { var n = o[e],
                i = n ? '' + n + r : t; if ('undefined' != typeof document.body.style[i]) return i }; return null };

    function we() { return this.state.isDestroyed = !0, vt(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.position = '', this.popper.style.top = '', this.popper.style.left = '', this.popper.style.right = '', this.popper.style.bottom = '', this.popper.style.willChange = '', this.popper.style[z('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this };

    function bt(t) { var e = t.ownerDocument; return e ? e.defaultView : window };

    function Ee(t, e, n, i) { n.updateBound = i, bt(t).addEventListener('resize', n.updateBound, { passive: !0 }); var o = x(t); return function r(t, e, n, i) { var a = 'BODY' === t.nodeName,
                o = a ? t.ownerDocument.defaultView : t;
            o.addEventListener(e, n, { passive: !0 }), a || r(x(o.parentNode), e, n, i), i.push(o) }(o, 'scroll', n.updateBound, n.scrollParents), n.scrollElement = o, n.eventsEnabled = !0, n };

    function Te() { this.state.eventsEnabled || (this.state = Ee(this.reference, this.options, this.state, this.scheduleUpdate)) };

    function Ce() { var e, t;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, bt(e).removeEventListener('resize', t.updateBound), t.scrollParents.forEach((function(e) { e.removeEventListener('scroll', t.updateBound) })), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t)) };

    function X(t) { return '' !== t && !isNaN(parseFloat(t)) && isFinite(t) };

    function K(t, e) { Object.keys(e).forEach((function(n) { var i = ''; - 1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(n) && X(e[n]) && (i = 'px'), t.style[n] = e[n] + i })) };
    var ne = k && /Firefox/i.test(navigator.userAgent);

    function yt(t, e, n) { var o = j(t, (function(t) { return t.name === e })),
            r = !!o && t.some((function(t) { return t.name === n && t.enabled && t.order < o.order })); if (!r) { var i = '`' + e + '`',
                a = '`' + n + '`';
            console.warn(a + ' modifier is required by ' + i + ' modifier in order to work, be sure to include it before ' + i + '!') }; return r };
    var tt = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'],
        M = tt.slice(3);

    function wt(t) { var i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            e = M.indexOf(t),
            n = M.slice(e + 1).concat(M.slice(0, e)); return i ? n.reverse() : n };
    var Jt = 'flip',
        te = 'clockwise',
        ee = 'counterclockwise';

    function Se(t, e, n, o) { var u = [0, 0],
            f = -1 !== ['right', 'left'].indexOf(o),
            i = t.split(/(\+|\-)/).map((function(t) { return t.trim() })),
            r = i.indexOf(j(i, (function(t) { return -1 !== t.search(/,|\s/) })));
        i[r] && -1 === i[r].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.'); var a = /\s*,\s*|\s+/,
            s = -1 !== r ? [i.slice(0, r).concat([i[r].split(a)[0]]), [i[r].split(a)[1]].concat(i.slice(r + 1))] : [i]; return (s = s.map((function(t, i) { var r = (1 === i ? !f : f) ? 'height' : 'width',
                o = !1; return t.reduce((function(t, e) { return '' === t[t.length - 1] && -1 !== ['+', '-'].indexOf(e) ? (t[t.length - 1] = e, o = !0, t) : o ? (t[t.length - 1] += e, o = !1, t) : t.concat(e) }), []).map((function(t) { return function(t, e, n, i) { var s = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                        r = +s[1],
                        o = s[2]; if (!r) return t; if (0 === o.indexOf('%')) { var a = void 0; switch (o) {
                            case '%p':
                                a = n; break;
                            case '%':
                            case '%r':
                            default:
                                a = i }; return l(a)[e] / 100 * r }; if ('vh' === o || 'vw' === o) return ('vh' === o ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r; return r }(t, r, e, n) })) }))).forEach((function(t, e) { t.forEach((function(n, i) { X(n) && (u[e] += n * ('-' === t[i - 1] ? -1 : 1)) })) })), u };
    var Gt = {
            placement: 'bottom',
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function() {},
            onUpdate: function() {},
            modifiers: {
                shift: { order: 100, enabled: !0, fn: function(t) { var l = t.placement,
                            d = l.split('-')[0],
                            u = l.split('-')[1]; if (u) { var i = t.offsets,
                                n = i.reference,
                                o = i.popper,
                                a = -1 !== ['bottom', 'top'].indexOf(d),
                                e = a ? 'left' : 'top',
                                s = a ? 'width' : 'height',
                                f = { start: g({}, e, n[e]), end: g({}, e, n[e] + n[s] - o[s]) };
                            t.offsets.popper = r({}, o, f[u]) }; return t } },
                offset: { order: 200, enabled: !0, fn: function(t, e) { var r = e.offset,
                            s = t.placement,
                            a = t.offsets,
                            n = a.popper,
                            l = a.reference,
                            o = s.split('-')[0],
                            i = void 0; return i = X(+r) ? [+r, 0] : Se(r, n, l, o), 'left' === o ? (n.top += i[0], n.left -= i[1]) : 'right' === o ? (n.top += i[0], n.left += i[1]) : 'top' === o ? (n.left += i[0], n.top -= i[1]) : 'bottom' === o && (n.left += i[0], n.top += i[1]), t.popper = n, t }, offset: 0 },
                preventOverflow: { order: 300, enabled: !0, fn: function(t, e) { var a = e.boundariesElement || T(t.instance.popper);
                        t.instance.reference === a && (a = T(a)); var s = z('transform'),
                            i = t.instance.popper.style,
                            f = i.top,
                            d = i.left,
                            c = i[s];
                        i.top = '', i.left = '', i[s] = ''; var o = Y(t.instance.popper, t.instance.reference, e.padding, a, t.positionFixed);
                        i.top = f, i.left = d, i[s] = c, e.boundaries = o; var l = e.priority,
                            n = t.offsets.popper,
                            u = { primary: function(t) { var i = n[t]; return n[t] < o[t] && !e.escapeWithReference && (i = Math.max(n[t], o[t])), g({}, t, i) }, secondary: function(t) { var i = 'right' === t ? 'left' : 'top',
                                        r = n[i]; return n[t] > o[t] && !e.escapeWithReference && (r = Math.min(n[i], o[t] - ('right' === t ? n.width : n.height))), g({}, i, r) } }; return l.forEach((function(t) { var e = -1 !== ['left', 'top'].indexOf(t) ? 'primary' : 'secondary';
                            n = r({}, n, u[e](t)) })), t.offsets.popper = n, t }, priority: ['left', 'right', 'top', 'bottom'], padding: 5, boundariesElement: 'scrollParent' },
                keepTogether: { order: 400, enabled: !0, fn: function(t) { var s = t.offsets,
                            o = s.popper,
                            n = s.reference,
                            l = t.placement.split('-')[0],
                            i = Math.floor,
                            r = -1 !== ['top', 'bottom'].indexOf(l),
                            a = r ? 'right' : 'bottom',
                            e = r ? 'left' : 'top',
                            u = r ? 'width' : 'height'; return o[a] < i(n[e]) && (t.offsets.popper[e] = i(n[e]) - o[u]), o[e] > i(n[a]) && (t.offsets.popper[e] = i(n[a])), t } },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: function(t, e) {
                        var p;
                        if (!yt(t.instance.modifiers, 'arrow', 'keepTogether')) return t;
                        var r = e.element;
                        if ('string' == typeof r) { if (!(r = t.instance.popper.querySelector(r))) return t } else if (!t.instance.popper.contains(r)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), t;
                        var E = t.placement.split('-')[0],
                            v = t.offsets,
                            a = v.popper,
                            i = v.reference,
                            s = -1 !== ['left', 'right'].indexOf(E),
                            d = s ? 'height' : 'width',
                            c = s ? 'Top' : 'Left',
                            n = c.toLowerCase(),
                            T = s ? 'left' : 'top',
                            u = s ? 'bottom' : 'right',
                            o = pt(r)[d];
                        i[u] - o < a[n] && (t.offsets.popper[n] -= a[n] - (i[u] - o)), i[n] + o > a[u] && (t.offsets.popper[n] += i[n] + o - a[u]), t.offsets.popper = l(t.offsets.popper);
                        var b = i[n] + i[d] / 2 - o / 2,
                            m = h(t.instance.popper),
                            y = parseFloat(m['margin' + c]),
                            w = parseFloat(m['border' + c + 'Width']),
                            f = b - t.offsets.popper[n] - y - w;
                        return f = Math.max(Math.min(a[d] - o, f), 0), t.arrowElement = r, t.offsets.arrow = (g(p = {}, n, Math.round(f)), g(p, T, ''), p), t
                    },
                    element: '[x-arrow]'
                },
                flip: { order: 600, enabled: !0, fn: function(t, e) { if (vt(t.instance.modifiers, 'inner')) return t; if (t.flipped && t.placement === t.originalPlacement) return t; var a = Y(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement, t.positionFixed),
                            n = t.placement.split('-')[0],
                            s = R(n),
                            i = t.placement.split('-')[1] || '',
                            o = []; switch (e.behavior) {
                            case Jt:
                                o = [n, s]; break;
                            case te:
                                o = wt(n); break;
                            case ee:
                                o = wt(n, !0); break;
                            default:
                                o = e.behavior }; return o.forEach((function(l, u) { if (n !== l || o.length === u + 1) return t;
                            n = t.placement.split('-')[0], s = R(n); var d = t.offsets.popper,
                                h = t.offsets.reference,
                                f = Math.floor,
                                b = 'left' === n && f(d.right) > f(h.left) || 'right' === n && f(d.left) < f(h.right) || 'top' === n && f(d.bottom) > f(h.top) || 'bottom' === n && f(d.top) < f(h.bottom),
                                p = f(d.left) < f(a.left),
                                m = f(d.right) > f(a.right),
                                g = f(d.top) < f(a.top),
                                v = f(d.bottom) > f(a.bottom),
                                y = 'left' === n && p || 'right' === n && m || 'top' === n && g || 'bottom' === n && v,
                                c = -1 !== ['top', 'bottom'].indexOf(n),
                                E = !!e.flipVariations && (c && 'start' === i && p || c && 'end' === i && m || !c && 'start' === i && g || !c && 'end' === i && v),
                                T = !!e.flipVariationsByContent && (c && 'start' === i && m || c && 'end' === i && p || !c && 'start' === i && v || !c && 'end' === i && g),
                                w = E || T;
                            (b || y || w) && (t.flipped = !0, (b || y) && (n = o[u + 1]), w && (i = function(t) { return 'end' === t ? 'start' : 'start' === t ? 'end' : t }(i)), t.placement = n + (i ? '-' + i : ''), t.offsets.popper = r({}, t.offsets.popper, mt(t.instance.popper, t.offsets.reference, t.placement)), t = gt(t.instance.modifiers, t, 'flip')) })), t }, behavior: 'flip', padding: 5, boundariesElement: 'viewport', flipVariations: !1, flipVariationsByContent: !1 },
                inner: { order: 700, enabled: !1, fn: function(t) { var i = t.placement,
                            e = i.split('-')[0],
                            o = t.offsets,
                            n = o.popper,
                            a = o.reference,
                            r = -1 !== ['left', 'right'].indexOf(e),
                            s = -1 === ['top', 'left'].indexOf(e); return n[r ? 'left' : 'top'] = a[e] - (s ? n[r ? 'width' : 'height'] : 0), t.placement = R(i), t.offsets.popper = l(n), t } },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: function(t) {
                        if (!yt(t.instance.modifiers, 'hide', 'preventOverflow')) return t;
                        var e = t.offsets.reference,
                            n = j(t.instance.modifiers, (function(t) { return 'preventOverflow' === t.name })).boundaries;
                        if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) { if (!0 === t.hide) return t;
                            t.hide = !0, t.attributes['x-out-of-boundaries'] = '' } else { if (!1 === t.hide) return t;
                            t.hide = !1, t.attributes['x-out-of-boundaries'] = !1 };
                        return t
                    }
                },
                computeStyle: { order: 850, enabled: !0, fn: function(t, e) { var v = e.x,
                            b = e.y,
                            y = t.offsets.popper,
                            f = j(t.instance.modifiers, (function(t) { return 'applyStyle' === t.name })).gpuAcceleration;
                        void 0 !== f && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!'); var g = void 0 !== f ? f : e.gpuAcceleration,
                            o = T(t.instance.popper),
                            d = U(o),
                            n = { position: y.position },
                            i = function(t, e) { var o = t.offsets,
                                    n = o.popper,
                                    d = o.reference,
                                    i = Math.round,
                                    c = Math.floor,
                                    r = function(t) { return t },
                                    a = i(d.width),
                                    s = i(n.width),
                                    h = -1 !== ['left', 'right'].indexOf(t.placement),
                                    l = -1 !== t.placement.indexOf('-'),
                                    u = e ? h || l || a % 2 == s % 2 ? i : c : r,
                                    f = e ? i : r; return { left: u(a % 2 == 1 && s % 2 == 1 && !l && e ? n.left - 1 : n.left), top: f(n.top), bottom: f(n.bottom), right: u(n.right) } }(t, window.devicePixelRatio < 2 || !ne),
                            a = 'bottom' === v ? 'top' : 'bottom',
                            s = 'right' === b ? 'left' : 'right',
                            c = z('transform'),
                            l = void 0,
                            u = void 0; if (u = 'bottom' === a ? 'HTML' === o.nodeName ? -o.clientHeight + i.bottom : -d.height + i.bottom : i.top, l = 'right' === s ? 'HTML' === o.nodeName ? -o.clientWidth + i.right : -d.width + i.right : i.left, g && c) n[c] = 'translate3d(' + l + 'px, ' + u + 'px, 0)', n[a] = 0, n[s] = 0, n.willChange = 'transform';
                        else { var p = 'bottom' === a ? -1 : 1,
                                m = 'right' === s ? -1 : 1;
                            n[a] = u * p, n[s] = l * m, n.willChange = a + ', ' + s }; var h = { 'x-placement': t.placement }; return t.attributes = r({}, h, t.attributes), t.styles = r({}, n, t.styles), t.arrowStyles = r({}, t.offsets.arrow, t.arrowStyles), t }, gpuAcceleration: !0, x: 'bottom', y: 'right' },
                applyStyle: { order: 900, enabled: !0, fn: function(t) { var n, e; return K(t.instance.popper, t.styles), n = t.instance.popper, e = t.attributes, Object.keys(e).forEach((function(t) {!1 !== e[t] ? n.setAttribute(t, e[t]) : n.removeAttribute(t) })), t.arrowElement && Object.keys(t.arrowStyles).length && K(t.arrowElement, t.arrowStyles), t }, onLoad: function(t, e, n, i, o) { var r = ht(o, e, t, n.positionFixed),
                            a = ct(n.placement, r, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding); return e.setAttribute('x-placement', a), K(e, { position: n.positionFixed ? 'fixed' : 'absolute' }), n }, gpuAcceleration: void 0 }
            }
        },
        c = function() {
            function t(e, n) { var i = this,
                    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                ie(this, t), this.scheduleUpdate = function() { return requestAnimationFrame(i.update) }, this.update = ae(this.update.bind(this)), this.options = r({}, t.Defaults, o), this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }, this.reference = e && e.jquery ? e[0] : e, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(r({}, t.Defaults.modifiers, o.modifiers)).forEach((function(e) { i.options.modifiers[e] = r({}, t.Defaults.modifiers[e] || {}, o.modifiers ? o.modifiers[e] : {}) })), this.modifiers = Object.keys(this.options.modifiers).map((function(t) { return r({ name: t }, i.options.modifiers[t]) })).sort((function(t, e) { return t.order - e.order })), this.modifiers.forEach((function(t) { t.enabled && rt(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state) })), this.update(); var a = this.options.eventsEnabled;
                a && this.enableEventListeners(), this.state.eventsEnabled = a }; return oe(t, [{ key: 'update', value: function() { return ye.call(this) } }, { key: 'destroy', value: function() { return we.call(this) } }, { key: 'enableEventListeners', value: function() { return Te.call(this) } }, { key: 'disableEventListeners', value: function() { return Ce.call(this) } }]), t }();
    c.Utils = ('undefined' != typeof window ? window : global).PopperUtils, c.placements = tt, c.Defaults = Gt;
    var m = 'dropdown',
        Yt = t.default.fn[m],
        zt = new RegExp('38|40|27'),
        Xt = { offset: 0, flip: !0, boundary: 'scrollParent', reference: 'toggle', display: 'dynamic', popperConfig: null },
        Kt = { offset: '(number|string|function)', flip: 'boolean', boundary: '(string|element)', reference: '(string|element)', display: 'string', popperConfig: '(null|object)' },
        s = function() {
            function e(t, e) { this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners() }; var n = e.prototype; return n.toggle = function() { if (!this._element.disabled && !t.default(this._element).hasClass('disabled')) { var n = t.default(this._menu).hasClass('show');
                    e._clearMenus(), n || this.show(!0) } }, n.show = function(n) { if (void 0 === n && (n = !1), !(this._element.disabled || t.default(this._element).hasClass('disabled') || t.default(this._menu).hasClass('show'))) { var a = { relatedTarget: this._element },
                        s = t.default.Event('show.bs.dropdown', a),
                        o = e._getParentFromElement(this._element); if (t.default(o).trigger(s), !s.isDefaultPrevented()) { if (!this._inNavbar && n) { if ('undefined' == typeof c) throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)'); var r = this._element; 'parent' === this._config.reference ? r = o : i.isElement(this._config.reference) && (r = this._config.reference, 'undefined' != typeof this._config.reference.jquery && (r = this._config.reference[0])), 'scrollParent' !== this._config.boundary && t.default(o).addClass('position-static'), this._popper = new c(r, this._menu, this._getPopperConfig()) }; 'ontouchstart' in document.documentElement && 0 === t.default(o).closest('.navbar-nav').length && t.default(document.body).children().on('mouseover', null, t.default.noop), this._element.focus(), this._element.setAttribute('aria-expanded', !0), t.default(this._menu).toggleClass('show'), t.default(o).toggleClass('show').trigger(t.default.Event('shown.bs.dropdown', a)) } } }, n.hide = function() { if (!this._element.disabled && !t.default(this._element).hasClass('disabled') && t.default(this._menu).hasClass('show')) { var n = { relatedTarget: this._element },
                        i = t.default.Event('hide.bs.dropdown', n),
                        o = e._getParentFromElement(this._element);
                    t.default(o).trigger(i), i.isDefaultPrevented() || (this._popper && this._popper.destroy(), t.default(this._menu).toggleClass('show'), t.default(o).toggleClass('show').trigger(t.default.Event('hidden.bs.dropdown', n))) } }, n.dispose = function() { t.default.removeData(this._element, 'bs.dropdown'), t.default(this._element).off('.bs.dropdown'), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null) }, n.update = function() { this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate() }, n._addEventListeners = function() { var e = this;
                t.default(this._element).on('click.bs.dropdown', (function(t) { t.preventDefault(), t.stopPropagation(), e.toggle() })) }, n._getConfig = function(e) { return e = o({}, this.constructor.Default, t.default(this._element).data(), e), i.typeCheckConfig(m, e, this.constructor.DefaultType), e }, n._getMenuElement = function() { if (!this._menu) { var t = e._getParentFromElement(this._element);
                    t && (this._menu = t.querySelector('.dropdown-menu')) }; return this._menu }, n._getPlacement = function() { var n = t.default(this._element.parentNode),
                    e = 'bottom-start'; return n.hasClass('dropup') ? e = t.default(this._menu).hasClass('dropdown-menu-right') ? 'top-end' : 'top-start' : n.hasClass('dropright') ? e = 'right-start' : n.hasClass('dropleft') ? e = 'left-start' : t.default(this._menu).hasClass('dropdown-menu-right') && (e = 'bottom-end'), e }, n._detectNavbar = function() { return t.default(this._element).closest('.navbar').length > 0 }, n._getOffset = function() { var e = this,
                    t = {}; return 'function' == typeof this._config.offset ? t.fn = function(t) { return t.offsets = o({}, t.offsets, e._config.offset(t.offsets, e._element) || {}), t } : t.offset = this._config.offset, t }, n._getPopperConfig = function() { var t = { placement: this._getPlacement(), modifiers: { offset: this._getOffset(), flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } }; return 'static' === this._config.display && (t.modifiers.applyStyle = { enabled: !1 }), o({}, t, this._config.popperConfig) }, e._jQueryInterface = function(n) { return this.each((function() { var i = t.default(this).data('bs.dropdown'); if (i || (i = new e(this, 'object' == typeof n ? n : null), t.default(this).data('bs.dropdown', i)), 'string' == typeof n) { if ('undefined' == typeof i[n]) throw new TypeError('No method named "' + n + '"');
                        i[n]() } })) }, e._clearMenus = function(n) { if (!n || 3 !== n.which && ('keyup' !== n.type || 9 === n.which))
                    for (var o = [].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')), i = 0, f = o.length; i < f; i++) { var r = e._getParentFromElement(o[i]),
                            a = t.default(o[i]).data('bs.dropdown'),
                            s = { relatedTarget: o[i] }; if (n && 'click' === n.type && (s.clickEvent = n), a) { var u = a._menu; if (t.default(r).hasClass('show') && !(n && ('click' === n.type && /input|textarea/i.test(n.target.tagName) || 'keyup' === n.type && 9 === n.which) && t.default.contains(r, n.target))) { var l = t.default.Event('hide.bs.dropdown', s);
                                t.default(r).trigger(l), l.isDefaultPrevented() || ('ontouchstart' in document.documentElement && t.default(document.body).children().off('mouseover', null, t.default.noop), o[i].setAttribute('aria-expanded', 'false'), a._popper && a._popper.destroy(), t.default(u).removeClass('show'), t.default(r).removeClass('show').trigger(t.default.Event('hidden.bs.dropdown', s))) } } } }, e._getParentFromElement = function(t) { var e, n = i.getSelectorFromElement(t); return n && (e = document.querySelector(n)), e || t.parentNode }, e._dataApiKeydownHandler = function(n) { if (!(/input|textarea/i.test(n.target.tagName) ? 32 === n.which || 27 !== n.which && (40 !== n.which && 38 !== n.which || t.default(n.target).closest('.dropdown-menu').length) : !zt.test(n.which)) && !this.disabled && !t.default(this).hasClass('disabled')) { var r = e._getParentFromElement(this),
                        a = t.default(r).hasClass('show'); if (a || 27 !== n.which) { if (n.preventDefault(), n.stopPropagation(), !a || 27 === n.which || 32 === n.which) return 27 === n.which && t.default(r.querySelector('[data-toggle="dropdown"]')).trigger('focus'), void t.default(this).trigger('click'); var o = [].slice.call(r.querySelectorAll('.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)')).filter((function(e) { return t.default(e).is(':visible') })); if (0 !== o.length) { var i = o.indexOf(n.target);
                            38 === n.which && i > 0 && i--, 40 === n.which && i < o.length - 1 && i++, i < 0 && (i = 0), o[i].focus() } } } }, a(e, null, [{ key: 'VERSION', get: function() { return '4.6.0' } }, { key: 'Default', get: function() { return Xt } }, { key: 'DefaultType', get: function() { return Kt } }]), e }();
    t.default(document).on('keydown.bs.dropdown.data-api', '[data-toggle="dropdown"]', s._dataApiKeydownHandler).on('keydown.bs.dropdown.data-api', '.dropdown-menu', s._dataApiKeydownHandler).on('click.bs.dropdown.data-api keyup.bs.dropdown.data-api', s._clearMenus).on('click.bs.dropdown.data-api', '[data-toggle="dropdown"]', (function(e) { e.preventDefault(), e.stopPropagation(), s._jQueryInterface.call(t.default(this), 'toggle') })).on('click.bs.dropdown.data-api', '.dropdown form', (function(t) { t.stopPropagation() })), t.default.fn[m] = s._jQueryInterface, t.default.fn[m].Constructor = s, t.default.fn[m].noConflict = function() { return t.default.fn[m] = Yt, s._jQueryInterface };
    var Ut = t.default.fn.modal,
        H = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
        Vt = { backdrop: '(boolean|string)', keyboard: 'boolean', focus: 'boolean', show: 'boolean' },
        N = function() {
            function n(t, e) { this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector('.modal-dialog'), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0 };
            var e = n.prototype;
            return e.toggle = function(t) { return this._isShown ? this.hide() : this.show(t) }, e.show = function(e) { var n = this; if (!this._isShown && !this._isTransitioning) { t.default(this._element).hasClass('fade') && (this._isTransitioning = !0); var i = t.default.Event('show.bs.modal', { relatedTarget: e });
                    t.default(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), t.default(this._element).on('click.dismiss.bs.modal', '[data-dismiss="modal"]', (function(t) { return n.hide(t) })), t.default(this._dialog).on('mousedown.dismiss.bs.modal', (function() { t.default(n._element).one('mouseup.dismiss.bs.modal', (function(e) { t.default(e.target).is(n._element) && (n._ignoreBackdropClick = !0) })) })), this._showBackdrop((function() { return n._showElement(e) }))) } }, e.hide = function(e) {
                var a = this;
                if (e && e.preventDefault(), this._isShown && !this._isTransitioning) {
                    var o = t.default.Event('hide.bs.modal');
                    if (t.default(this._element).trigger(o), this._isShown && !o.isDefaultPrevented()) {
                        this._isShown = !1;
                        var n = t.default(this._element).hasClass('fade');
                        if (n && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t.default(document).off('focusin.bs.modal'), t.default(this._element).removeClass('show'), t.default(this._element).off('click.dismiss.bs.modal'), t.default(this._dialog).off('mousedown.dismiss.bs.modal'), n) { var r = i.getTransitionDurationFromElement(this._element);
                            t.default(this._element).one(i.TRANSITION_END, (function(t) { return a._hideModal(t) })).emulateTransitionEnd(r) } else this._hideModal()
                    }
                }
            }, e.dispose = function() {
                [window, this._element, this._dialog].forEach((function(e) { return t.default(e).off('.bs.modal') })), t.default(document).off('focusin.bs.modal'), t.default.removeData(this._element, 'bs.modal'), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null }, e.handleUpdate = function() { this._adjustDialog() }, e._getConfig = function(t) { return t = o({}, H, t), i.typeCheckConfig('modal', t, Vt), t }, e._triggerBackdropTransition = function() { var e = this,
                    r = t.default.Event('hidePrevented.bs.modal'); if (t.default(this._element).trigger(r), !r.isDefaultPrevented()) { var o = this._element.scrollHeight > document.documentElement.clientHeight;
                    o || (this._element.style.overflowY = 'hidden'), this._element.classList.add('modal-static'); var n = i.getTransitionDurationFromElement(this._dialog);
                    t.default(this._element).off(i.TRANSITION_END), t.default(this._element).one(i.TRANSITION_END, (function() { e._element.classList.remove('modal-static'), o || t.default(e._element).one(i.TRANSITION_END, (function() { e._element.style.overflowY = '' })).emulateTransitionEnd(e._element, n) })).emulateTransitionEnd(n), this._element.focus() } }, e._showElement = function(e) {
                var n = this,
                    r = t.default(this._element).hasClass('fade'),
                    a = this._dialog ? this._dialog.querySelector('.modal-body') : null;
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = 'block', this._element.removeAttribute('aria-hidden'), this._element.setAttribute('aria-modal', !0), this._element.setAttribute('role', 'dialog'), t.default(this._dialog).hasClass('modal-dialog-scrollable') && a ? a.scrollTop = 0 : this._element.scrollTop = 0, r && i.reflow(this._element), t.default(this._element).addClass('show'), this._config.focus && this._enforceFocus();
                var l = t.default.Event('shown.bs.modal', { relatedTarget: e }),
                    o = function() { n._config.focus && n._element.focus(), n._isTransitioning = !1, t.default(n._element).trigger(l) };
                if (r) { var s = i.getTransitionDurationFromElement(this._dialog);
                    t.default(this._dialog).one(i.TRANSITION_END, o).emulateTransitionEnd(s) } else o()
            }, e._enforceFocus = function() { var e = this;
                t.default(document).off('focusin.bs.modal').on('focusin.bs.modal', (function(n) { document !== n.target && e._element !== n.target && 0 === t.default(e._element).has(n.target).length && e._element.focus() })) }, e._setEscapeEvent = function() { var e = this;
                this._isShown ? t.default(this._element).on('keydown.dismiss.bs.modal', (function(t) { e._config.keyboard && 27 === t.which ? (t.preventDefault(), e.hide()) : e._config.keyboard || 27 !== t.which || e._triggerBackdropTransition() })) : this._isShown || t.default(this._element).off('keydown.dismiss.bs.modal') }, e._setResizeEvent = function() { var e = this;
                this._isShown ? t.default(window).on('resize.bs.modal', (function(t) { return e.handleUpdate(t) })) : t.default(window).off('resize.bs.modal') }, e._hideModal = function() { var e = this;
                this._element.style.display = 'none', this._element.setAttribute('aria-hidden', !0), this._element.removeAttribute('aria-modal'), this._element.removeAttribute('role'), this._isTransitioning = !1, this._showBackdrop((function() { t.default(document.body).removeClass('modal-open'), e._resetAdjustments(), e._resetScrollbar(), t.default(e._element).trigger('hidden.bs.modal') })) }, e._removeBackdrop = function() { this._backdrop && (t.default(this._backdrop).remove(), this._backdrop = null) }, e._showBackdrop = function(e) {
                var n = this,
                    o = t.default(this._element).hasClass('fade') ? 'fade' : '';
                if (this._isShown && this._config.backdrop) { if (this._backdrop = document.createElement('div'), this._backdrop.className = 'modal-backdrop', o && this._backdrop.classList.add(o), t.default(this._backdrop).appendTo(document.body), t.default(this._element).on('click.dismiss.bs.modal', (function(t) { n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : t.target === t.currentTarget && ('static' === n._config.backdrop ? n._triggerBackdropTransition() : n.hide()) })), o && i.reflow(this._backdrop), t.default(this._backdrop).addClass('show'), !e) return; if (!o) return void e(); var s = i.getTransitionDurationFromElement(this._backdrop);
                    t.default(this._backdrop).one(i.TRANSITION_END, e).emulateTransitionEnd(s) } else if (!this._isShown && this._backdrop) {
                    t.default(this._backdrop).removeClass('show');
                    var r = function() { n._removeBackdrop(), e && e() };
                    if (t.default(this._element).hasClass('fade')) { var a = i.getTransitionDurationFromElement(this._backdrop);
                        t.default(this._backdrop).one(i.TRANSITION_END, r).emulateTransitionEnd(a) } else r()
                } else e && e()
            }, e._adjustDialog = function() { var t = this._element.scrollHeight > document.documentElement.clientHeight;!this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + 'px'), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + 'px') }, e._resetAdjustments = function() { this._element.style.paddingLeft = '', this._element.style.paddingRight = '' }, e._checkScrollbar = function() { var t = document.body.getBoundingClientRect();
                this._isBodyOverflowing = Math.round(t.left + t.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth() }, e._setScrollbar = function() { var e = this; if (this._isBodyOverflowing) { var o = [].slice.call(document.querySelectorAll('.fixed-top, .fixed-bottom, .is-fixed, .sticky-top')),
                        r = [].slice.call(document.querySelectorAll('.sticky-top'));
                    t.default(o).each((function(n, i) { var o = i.style.paddingRight,
                            r = t.default(i).css('padding-right');
                        t.default(i).data('padding-right', o).css('padding-right', parseFloat(r) + e._scrollbarWidth + 'px') })), t.default(r).each((function(n, i) { var o = i.style.marginRight,
                            r = t.default(i).css('margin-right');
                        t.default(i).data('margin-right', o).css('margin-right', parseFloat(r) - e._scrollbarWidth + 'px') })); var n = document.body.style.paddingRight,
                        i = t.default(document.body).css('padding-right');
                    t.default(document.body).data('padding-right', n).css('padding-right', parseFloat(i) + this._scrollbarWidth + 'px') };
                t.default(document.body).addClass('modal-open') }, e._resetScrollbar = function() { var i = [].slice.call(document.querySelectorAll('.fixed-top, .fixed-bottom, .is-fixed, .sticky-top'));
                t.default(i).each((function(e, n) { var i = t.default(n).data('padding-right');
                    t.default(n).removeData('padding-right'), n.style.paddingRight = i || '' })); var n = [].slice.call(document.querySelectorAll('.sticky-top'));
                t.default(n).each((function(e, n) { var i = t.default(n).data('margin-right'); 'undefined' != typeof i && t.default(n).css('margin-right', i).removeData('margin-right') })); var e = t.default(document.body).data('padding-right');
                t.default(document.body).removeData('padding-right'), document.body.style.paddingRight = e || '' }, e._getScrollbarWidth = function() { var t = document.createElement('div');
                t.className = 'modal-scrollbar-measure', document.body.appendChild(t); var e = t.getBoundingClientRect().width - t.clientWidth; return document.body.removeChild(t), e }, n._jQueryInterface = function(e, i) {
                return this.each((function() {
                    var r = t.default(this).data('bs.modal'),
                        a = o({}, H, t.default(this).data(), 'object' == typeof e && e ? e : {});
                    if (r || (r = new n(this, a), t.default(this).data('bs.modal', r)), 'string' == typeof e) { if ('undefined' == typeof r[e]) throw new TypeError('No method named "' + e + '"');
                        r[e](i) } else a.show && r.show(i)
                }))
            }, a(n, null, [{ key: 'VERSION', get: function() { return '4.6.0' } }, { key: 'Default', get: function() { return H } }]), n
        }();
    t.default(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', (function(e) { var n, r = this,
            a = i.getSelectorFromElement(this);
        a && (n = document.querySelector(a)); var l = t.default(n).data('bs.modal') ? 'toggle' : o({}, t.default(n).data(), t.default(this).data()); 'A' !== this.tagName && 'AREA' !== this.tagName || e.preventDefault(); var s = t.default(n).one('show.bs.modal', (function(e) { e.isDefaultPrevented() || s.one('hidden.bs.modal', (function() { t.default(r).is(':visible') && r.focus() })) }));
        N._jQueryInterface.call(t.default(n), l, this) })), t.default.fn.modal = N._jQueryInterface, t.default.fn.modal.Constructor = N, t.default.fn.modal.noConflict = function() { return t.default.fn.modal = Ut, N._jQueryInterface };
    var Bt = ['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href'],
        qt = { '*': ['class', 'dir', 'id', 'lang', 'role', /^aria-[\w-]*$/i], a: ['target', 'href', 'title', 'rel'], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ['src', 'srcset', 'alt', 'title', 'width', 'height'], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] },
        Qt = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
        Wt = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

    function Et(t, e, n) { if (0 === t.length) return t; if (n && 'function' == typeof n) return n(t); for (var o = (new window.DOMParser).parseFromString(t, 'text/html'), a = Object.keys(e), r = [].slice.call(o.body.querySelectorAll('*')), s = function(t, n) { var i = r[t],
                    l = i.nodeName.toLowerCase(); if (-1 === a.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), 'continue'; var o = [].slice.call(i.attributes),
                    s = [].concat(e['*'] || [], e[l] || []);
                o.forEach((function(t) {
                    (function(t, e) { var i = t.nodeName.toLowerCase(); if (-1 !== e.indexOf(i)) return -1 === Bt.indexOf(i) || Boolean(t.nodeValue.match(Qt) || t.nodeValue.match(Wt)); for (var o = e.filter((function(t) { return t instanceof RegExp })), n = 0, r = o.length; n < r; n++)
                            if (i.match(o[n])) return !0;
                        return !1 })(t, s) || i.removeAttribute(t.nodeName) })) }, i = 0, l = r.length; i < l; i++) s(i); return o.body.innerHTML };
    var f = 'tooltip',
        jt = t.default.fn[f],
        Lt = new RegExp('(^|\\s)bs-tooltip\\S+', 'g'),
        Pt = ['sanitize', 'whiteList', 'sanitizeFn'],
        Ft = { animation: 'boolean', template: 'string', title: '(string|element|function)', trigger: 'string', delay: '(number|object)', html: 'boolean', selector: '(string|boolean)', placement: '(string|function)', offset: '(number|string|function)', container: '(string|element|boolean)', fallbackPlacement: '(string|array)', boundary: '(string|element)', customClass: '(string|function)', sanitize: 'boolean', sanitizeFn: '(null|function)', whiteList: 'object', popperConfig: '(null|object)' },
        Rt = { AUTO: 'auto', TOP: 'top', RIGHT: 'right', BOTTOM: 'bottom', LEFT: 'left' },
        Ht = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: 'hover focus', title: '', delay: 0, html: !1, selector: !1, placement: 'top', offset: 0, container: !1, fallbackPlacement: 'flip', boundary: 'scrollParent', customClass: '', sanitize: !0, sanitizeFn: null, whiteList: qt, popperConfig: null },
        Mt = { HIDE: 'hide.bs.tooltip', HIDDEN: 'hidden.bs.tooltip', SHOW: 'show.bs.tooltip', SHOWN: 'shown.bs.tooltip', INSERTED: 'inserted.bs.tooltip', CLICK: 'click.bs.tooltip', FOCUSIN: 'focusin.bs.tooltip', FOCUSOUT: 'focusout.bs.tooltip', MOUSEENTER: 'mouseenter.bs.tooltip', MOUSELEAVE: 'mouseleave.bs.tooltip' },
        d = function() {
            function n(t, e) { if ('undefined' == typeof c) throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');
                this._isEnabled = !0, this._timeout = 0, this._hoverState = '', this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners() };
            var e = n.prototype;
            return e.enable = function() { this._isEnabled = !0 }, e.disable = function() { this._isEnabled = !1 }, e.toggleEnabled = function() { this._isEnabled = !this._isEnabled }, e.toggle = function(e) {
                if (this._isEnabled)
                    if (e) { var i = this.constructor.DATA_KEY,
                            n = t.default(e.currentTarget).data(i);
                        n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t.default(e.currentTarget).data(i, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n) } else { if (t.default(this.getTipElement()).hasClass('show')) return void this._leave(null, this);
                        this._enter(null, this) }
            }, e.dispose = function() { clearTimeout(this._timeout), t.default.removeData(this.element, this.constructor.DATA_KEY), t.default(this.element).off(this.constructor.EVENT_KEY), t.default(this.element).closest('.modal').off('hide.bs.modal', this._hideModalHandler), this.tip && t.default(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null }, e.show = function() {
                var n = this;
                if ('none' === t.default(this.element).css('display')) throw new Error('Please use show on visible elements');
                var l = t.default.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    t.default(this.element).trigger(l);
                    var s = i.findShadowRoot(this.element),
                        h = t.default.contains(null !== s ? s : this.element.ownerDocument.documentElement, this.element);
                    if (l.isDefaultPrevented() || !h) return;
                    var e = this.getTipElement(),
                        a = i.getUID(this.constructor.NAME);
                    e.setAttribute('id', a), this.element.setAttribute('aria-describedby', a), this.setContent(), this.config.animation && t.default(e).addClass('fade');
                    var d = 'function' == typeof this.config.placement ? this.config.placement.call(this, e, this.element) : this.config.placement,
                        r = this._getAttachment(d);
                    this.addAttachmentClass(r);
                    var f = this._getContainer();
                    t.default(e).data(this.constructor.DATA_KEY, this), t.default.contains(this.element.ownerDocument.documentElement, this.tip) || t.default(e).appendTo(f), t.default(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new c(this.element, e, this._getPopperConfig(r)), t.default(e).addClass('show'), t.default(e).addClass(this.config.customClass), 'ontouchstart' in document.documentElement && t.default(document.body).children().on('mouseover', null, t.default.noop);
                    var o = function() { n.config.animation && n._fixTransition(); var e = n._hoverState;
                        n._hoverState = null, t.default(n.element).trigger(n.constructor.Event.SHOWN), 'out' === e && n._leave(null, n) };
                    if (t.default(this.tip).hasClass('fade')) { var u = i.getTransitionDurationFromElement(this.tip);
                        t.default(this.tip).one(i.TRANSITION_END, o).emulateTransitionEnd(u) } else o()
                }
            }, e.hide = function(e) {
                var n = this,
                    o = this.getTipElement(),
                    r = t.default.Event(this.constructor.Event.HIDE),
                    a = function() { 'show' !== n._hoverState && o.parentNode && o.parentNode.removeChild(o), n._cleanTipClass(), n.element.removeAttribute('aria-describedby'), t.default(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e() };
                if (t.default(this.element).trigger(r), !r.isDefaultPrevented()) {
                    if (t.default(o).removeClass('show'), 'ontouchstart' in document.documentElement && t.default(document.body).children().off('mouseover', null, t.default.noop), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, t.default(this.tip).hasClass('fade')) { var s = i.getTransitionDurationFromElement(o);
                        t.default(o).one(i.TRANSITION_END, a).emulateTransitionEnd(s) } else a();
                    this._hoverState = ''
                }
            }, e.update = function() { null !== this._popper && this._popper.scheduleUpdate() }, e.isWithContent = function() { return Boolean(this.getTitle()) }, e.addAttachmentClass = function(e) { t.default(this.getTipElement()).addClass('bs-tooltip-' + e) }, e.getTipElement = function() { return this.tip = this.tip || t.default(this.config.template)[0], this.tip }, e.setContent = function() { var e = this.getTipElement();
                this.setElementContent(t.default(e.querySelectorAll('.tooltip-inner')), this.getTitle()), t.default(e).removeClass('fade show') }, e.setElementContent = function(e, n) { 'object' != typeof n || !n.nodeType && !n.jquery ? this.config.html ? (this.config.sanitize && (n = Et(n, this.config.whiteList, this.config.sanitizeFn)), e.html(n)) : e.text(n) : this.config.html ? t.default(n).parent().is(e) || e.empty().append(n) : e.text(t.default(n).text()) }, e.getTitle = function() { var t = this.element.getAttribute('data-original-title'); return t || (t = 'function' == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t }, e._getPopperConfig = function(t) { var e = this; return o({}, { placement: t, modifiers: { offset: this._getOffset(), flip: { behavior: this.config.fallbackPlacement }, arrow: { element: '.arrow' }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function(t) { t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t) }, onUpdate: function(t) { return e._handlePopperPlacementChange(t) } }, this.config.popperConfig) }, e._getOffset = function() { var e = this,
                    t = {}; return 'function' == typeof this.config.offset ? t.fn = function(t) { return t.offsets = o({}, t.offsets, e.config.offset(t.offsets, e.element) || {}), t } : t.offset = this.config.offset, t }, e._getContainer = function() { return !1 === this.config.container ? document.body : i.isElement(this.config.container) ? t.default(this.config.container) : t.default(document).find(this.config.container) }, e._getAttachment = function(t) { return Rt[t.toUpperCase()] }, e._setListeners = function() { var e = this;
                this.config.trigger.split(' ').forEach((function(n) { if ('click' === n) t.default(e.element).on(e.constructor.Event.CLICK, e.config.selector, (function(t) { return e.toggle(t) }));
                    else if ('manual' !== n) { var i = 'hover' === n ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                            o = 'hover' === n ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                        t.default(e.element).on(i, e.config.selector, (function(t) { return e._enter(t) })).on(o, e.config.selector, (function(t) { return e._leave(t) })) } })), this._hideModalHandler = function() { e.element && e.hide() }, t.default(this.element).closest('.modal').on('hide.bs.modal', this._hideModalHandler), this.config.selector ? this.config = o({}, this.config, { trigger: 'manual', selector: '' }) : this._fixTitle() }, e._fixTitle = function() { var t = typeof this.element.getAttribute('data-original-title');
                (this.element.getAttribute('title') || 'string' !== t) && (this.element.setAttribute('data-original-title', this.element.getAttribute('title') || ''), this.element.setAttribute('title', '')) }, e._enter = function(e, n) { var i = this.constructor.DATA_KEY;
                (n = n || t.default(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t.default(e.currentTarget).data(i, n)), e && (n._activeTrigger['focusin' === e.type ? 'focus' : 'hover'] = !0), t.default(n.getTipElement()).hasClass('show') || 'show' === n._hoverState ? n._hoverState = 'show' : (clearTimeout(n._timeout), n._hoverState = 'show', n.config.delay && n.config.delay.show ? n._timeout = setTimeout((function() { 'show' === n._hoverState && n.show() }), n.config.delay.show) : n.show()) }, e._leave = function(e, n) { var i = this.constructor.DATA_KEY;
                (n = n || t.default(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t.default(e.currentTarget).data(i, n)), e && (n._activeTrigger['focusout' === e.type ? 'focus' : 'hover'] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = 'out', n.config.delay && n.config.delay.hide ? n._timeout = setTimeout((function() { 'out' === n._hoverState && n.hide() }), n.config.delay.hide) : n.hide()) }, e._isWithActiveTrigger = function() { for (var t in this._activeTrigger)
                    if (this._activeTrigger[t]) return !0;
                return !1 }, e._getConfig = function(e) { var n = t.default(this.element).data(); return Object.keys(n).forEach((function(t) {-1 !== Pt.indexOf(t) && delete n[t] })), 'number' == typeof(e = o({}, this.constructor.Default, n, 'object' == typeof e && e ? e : {})).delay && (e.delay = { show: e.delay, hide: e.delay }), 'number' == typeof e.title && (e.title = e.title.toString()), 'number' == typeof e.content && (e.content = e.content.toString()), i.typeCheckConfig(f, e, this.constructor.DefaultType), e.sanitize && (e.template = Et(e.template, e.whiteList, e.sanitizeFn)), e }, e._getDelegateConfig = function() { var e = {}; if (this.config)
                    for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]); return e }, e._cleanTipClass = function() { var n = t.default(this.getTipElement()),
                    e = n.attr('class').match(Lt);
                null !== e && e.length && n.removeClass(e.join('')) }, e._handlePopperPlacementChange = function(t) { this.tip = t.instance.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement)) }, e._fixTransition = function() { var e = this.getTipElement(),
                    n = this.config.animation;
                null === e.getAttribute('x-placement') && (t.default(e).removeClass('fade'), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n) }, n._jQueryInterface = function(e) { return this.each((function() { var o = t.default(this),
                        i = o.data('bs.tooltip'),
                        r = 'object' == typeof e && e; if ((i || !/dispose|hide/.test(e)) && (i || (i = new n(this, r), o.data('bs.tooltip', i)), 'string' == typeof e)) { if ('undefined' == typeof i[e]) throw new TypeError('No method named "' + e + '"');
                        i[e]() } })) }, a(n, null, [{ key: 'VERSION', get: function() { return '4.6.0' } }, { key: 'Default', get: function() { return Ht } }, { key: 'NAME', get: function() { return f } }, { key: 'DATA_KEY', get: function() { return 'bs.tooltip' } }, { key: 'Event', get: function() { return Mt } }, { key: 'EVENT_KEY', get: function() { return '.bs.tooltip' } }, { key: 'DefaultType', get: function() { return Ft } }]), n
        }();
    t.default.fn[f] = d._jQueryInterface, t.default.fn[f].Constructor = d, t.default.fn[f].noConflict = function() { return t.default.fn[f] = jt, d._jQueryInterface };
    var p = 'popover',
        kt = t.default.fn[p],
        At = new RegExp('(^|\\s)bs-popover\\S+', 'g'),
        It = o({}, d.Default, { placement: 'right', trigger: 'click', content: '', template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }),
        Ot = o({}, d.DefaultType, { content: '(string|element|function)' }),
        xt = { HIDE: 'hide.bs.popover', HIDDEN: 'hidden.bs.popover', SHOW: 'show.bs.popover', SHOWN: 'shown.bs.popover', INSERTED: 'inserted.bs.popover', CLICK: 'click.bs.popover', FOCUSIN: 'focusin.bs.popover', FOCUSOUT: 'focusout.bs.popover', MOUSEENTER: 'mouseenter.bs.popover', MOUSELEAVE: 'mouseleave.bs.popover' },
        P = function(e) { var o, r;

            function i() { return e.apply(this, arguments) || this };
            r = e, (o = i).prototype = Object.create(r.prototype), o.prototype.constructor = o, o.__proto__ = r; var n = i.prototype; return n.isWithContent = function() { return this.getTitle() || this._getContent() }, n.addAttachmentClass = function(e) { t.default(this.getTipElement()).addClass('bs-popover-' + e) }, n.getTipElement = function() { return this.tip = this.tip || t.default(this.config.template)[0], this.tip }, n.setContent = function() { var n = t.default(this.getTipElement());
                this.setElementContent(n.find('.popover-header'), this.getTitle()); var e = this._getContent(); 'function' == typeof e && (e = e.call(this.element)), this.setElementContent(n.find('.popover-body'), e), n.removeClass('fade show') }, n._getContent = function() { return this.element.getAttribute('data-content') || this.config.content }, n._cleanTipClass = function() { var n = t.default(this.getTipElement()),
                    e = n.attr('class').match(At);
                null !== e && e.length > 0 && n.removeClass(e.join('')) }, i._jQueryInterface = function(e) { return this.each((function() { var n = t.default(this).data('bs.popover'),
                        o = 'object' == typeof e ? e : null; if ((n || !/dispose|hide/.test(e)) && (n || (n = new i(this, o), t.default(this).data('bs.popover', n)), 'string' == typeof e)) { if ('undefined' == typeof n[e]) throw new TypeError('No method named "' + e + '"');
                        n[e]() } })) }, a(i, null, [{ key: 'VERSION', get: function() { return '4.6.0' } }, { key: 'Default', get: function() { return It } }, { key: 'NAME', get: function() { return p } }, { key: 'DATA_KEY', get: function() { return 'bs.popover' } }, { key: 'Event', get: function() { return xt } }, { key: 'EVENT_KEY', get: function() { return '.bs.popover' } }, { key: 'DefaultType', get: function() { return Ot } }]), i }(d);
    t.default.fn[p] = P._jQueryInterface, t.default.fn[p].Constructor = P, t.default.fn[p].noConflict = function() { return t.default.fn[p] = kt, P._jQueryInterface };
    var u = 'scrollspy',
        Dt = t.default.fn[u],
        J = { offset: 10, method: 'auto', target: '' },
        Nt = { offset: 'number', method: 'string', target: '(string|element)' },
        D = function() {
            function n(e, n) { var i = this;
                this._element = e, this._scrollElement = 'BODY' === e.tagName ? window : e, this._config = this._getConfig(n), this._selector = this._config.target + ' .nav-link,' + this._config.target + ' .list-group-item,' + this._config.target + ' .dropdown-item', this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t.default(this._scrollElement).on('scroll.bs.scrollspy', (function(t) { return i._process(t) })), this.refresh(), this._process() };
            var e = n.prototype;
            return e.refresh = function() { var e = this,
                    o = this._scrollElement === this._scrollElement.window ? 'offset' : 'position',
                    n = 'auto' === this._config.method ? o : this._config.method,
                    r = 'position' === n ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map((function(e) { var o, a = i.getSelectorFromElement(e); if (a && (o = document.querySelector(a)), o) { var s = o.getBoundingClientRect(); if (s.width || s.height) return [t.default(o)[n]().top + r, a] }; return null })).filter((function(t) { return t })).sort((function(t, e) { return t[0] - e[0] })).forEach((function(t) { e._offsets.push(t[0]), e._targets.push(t[1]) })) }, e.dispose = function() { t.default.removeData(this._element, 'bs.scrollspy'), t.default(this._scrollElement).off('.bs.scrollspy'), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null }, e._getConfig = function(e) { if ('string' != typeof(e = o({}, J, 'object' == typeof e && e ? e : {})).target && i.isElement(e.target)) { var n = t.default(e.target).attr('id');
                    n || (n = i.getUID(u), t.default(e.target).attr('id', n)), e.target = '#' + n }; return i.typeCheckConfig(u, e, Nt), e }, e._getScrollTop = function() { return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop }, e._getScrollHeight = function() { return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) }, e._getOffsetHeight = function() { return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height }, e._process = function() {
                var e = this._getScrollTop() + this._config.offset,
                    i = this._getScrollHeight(),
                    o = this._config.offset + i - this._getOffsetHeight();
                if (this._scrollHeight !== i && this.refresh(), e >= o) { var n = this._targets[this._targets.length - 1];
                    this._activeTarget !== n && this._activate(n) } else { if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear(); for (var t = this._offsets.length; t--;) { this._activeTarget !== this._targets[t] && e >= this._offsets[t] && ('undefined' == typeof this._offsets[t + 1] || e < this._offsets[t + 1]) && this._activate(this._targets[t]) } }
            }, e._activate = function(e) { this._activeTarget = e, this._clear(); var i = this._selector.split(',').map((function(t) { return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]' })),
                    n = t.default([].slice.call(document.querySelectorAll(i.join(','))));
                n.hasClass('dropdown-item') ? (n.closest('.dropdown').find('.dropdown-toggle').addClass('active'), n.addClass('active')) : (n.addClass('active'), n.parents('.nav, .list-group').prev('.nav-link, .list-group-item').addClass('active'), n.parents('.nav, .list-group').prev('.nav-item').children('.nav-link').addClass('active')), t.default(this._scrollElement).trigger('activate.bs.scrollspy', { relatedTarget: e }) }, e._clear = function() {
                [].slice.call(document.querySelectorAll(this._selector)).filter((function(t) { return t.classList.contains('active') })).forEach((function(t) { return t.classList.remove('active') })) }, n._jQueryInterface = function(e) { return this.each((function() { var i = t.default(this).data('bs.scrollspy'); if (i || (i = new n(this, 'object' == typeof e && e), t.default(this).data('bs.scrollspy', i)), 'string' == typeof e) { if ('undefined' == typeof i[e]) throw new TypeError('No method named "' + e + '"');
                        i[e]() } })) }, a(n, null, [{ key: 'VERSION', get: function() { return '4.6.0' } }, { key: 'Default', get: function() { return J } }]), n
        }();
    t.default(window).on('load.bs.scrollspy.data-api', (function() { for (var n = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), i = n.length; i--;) { var e = t.default(n[i]);
            D._jQueryInterface.call(e, e.data()) } })), t.default.fn[u] = D._jQueryInterface, t.default.fn[u].Constructor = D, t.default.fn[u].noConflict = function() { return t.default.fn[u] = Dt, D._jQueryInterface };
    var St = t.default.fn.tab,
        S = function() {
            function e(t) { this._element = t };
            var n = e.prototype;
            return n.show = function() { var u = this; if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t.default(this._element).hasClass('active') || t.default(this._element).hasClass('disabled'))) { var o, e, n = t.default(this._element).closest('.nav, .list-group')[0],
                        l = i.getSelectorFromElement(this._element); if (n) { var f = 'UL' === n.nodeName || 'OL' === n.nodeName ? '> li > .active' : '.active';
                        e = (e = t.default.makeArray(t.default(n).find(f)))[e.length - 1] }; var a = t.default.Event('hide.bs.tab', { relatedTarget: this._element }),
                        s = t.default.Event('show.bs.tab', { relatedTarget: e }); if (e && t.default(e).trigger(a), t.default(this._element).trigger(s), !s.isDefaultPrevented() && !a.isDefaultPrevented()) { l && (o = document.querySelector(l)), this._activate(this._element, n); var r = function() { var n = t.default.Event('hidden.bs.tab', { relatedTarget: u._element }),
                                i = t.default.Event('shown.bs.tab', { relatedTarget: e });
                            t.default(e).trigger(n), t.default(u._element).trigger(i) };
                        o ? this._activate(o, o.parentNode, r) : r() } } }, n.dispose = function() { t.default.removeData(this._element, 'bs.tab'), this._element = null }, n._activate = function(e, n, o) {
                var l = this,
                    r = (!n || 'UL' !== n.nodeName && 'OL' !== n.nodeName ? t.default(n).children('.active') : t.default(n).find('> li > .active'))[0],
                    u = o && r && t.default(r).hasClass('fade'),
                    a = function() { return l._transitionComplete(e, r, o) };
                if (r && u) { var s = i.getTransitionDurationFromElement(r);
                    t.default(r).removeClass('show').one(i.TRANSITION_END, a).emulateTransitionEnd(s) } else a()
            }, n._transitionComplete = function(e, n, o) { if (n) { t.default(n).removeClass('active'); var a = t.default(n.parentNode).find('> .dropdown-menu .active')[0];
                    a && t.default(a).removeClass('active'), 'tab' === n.getAttribute('role') && n.setAttribute('aria-selected', !1) }; if (t.default(e).addClass('active'), 'tab' === e.getAttribute('role') && e.setAttribute('aria-selected', !0), i.reflow(e), e.classList.contains('fade') && e.classList.add('show'), e.parentNode && t.default(e.parentNode).hasClass('dropdown-menu')) { var r = t.default(e).closest('.dropdown')[0]; if (r) { var s = [].slice.call(r.querySelectorAll('.dropdown-toggle'));
                        t.default(s).addClass('active') };
                    e.setAttribute('aria-expanded', !0) };
                o && o() }, e._jQueryInterface = function(n) { return this.each((function() { var o = t.default(this),
                        i = o.data('bs.tab'); if (i || (i = new e(this), o.data('bs.tab', i)), 'string' == typeof n) { if ('undefined' == typeof i[n]) throw new TypeError('No method named "' + n + '"');
                        i[n]() } })) }, a(e, null, [{ key: 'VERSION', get: function() { return '4.6.0' } }]), e
        }();
    t.default(document).on('click.bs.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', (function(e) { e.preventDefault(), S._jQueryInterface.call(t.default(this), 'show') })), t.default.fn.tab = S._jQueryInterface, t.default.fn.tab.Constructor = S, t.default.fn.tab.noConflict = function() { return t.default.fn.tab = St, S._jQueryInterface };
    var Tt = t.default.fn.toast,
        Ct = { animation: 'boolean', autohide: 'boolean', delay: 'number' },
        G = { animation: !0, autohide: !0, delay: 500 },
        L = function() {
            function n(t, e) { this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners() };
            var e = n.prototype;
            return e.show = function() {
                var e = this,
                    o = t.default.Event('show.bs.toast');
                if (t.default(this._element).trigger(o), !o.isDefaultPrevented()) {
                    this._clearTimeout(), this._config.animation && this._element.classList.add('fade');
                    var n = function() { e._element.classList.remove('showing'), e._element.classList.add('show'), t.default(e._element).trigger('shown.bs.toast'), e._config.autohide && (e._timeout = setTimeout((function() { e.hide() }), e._config.delay)) };
                    if (this._element.classList.remove('hide'), i.reflow(this._element), this._element.classList.add('showing'), this._config.animation) { var r = i.getTransitionDurationFromElement(this._element);
                        t.default(this._element).one(i.TRANSITION_END, n).emulateTransitionEnd(r) } else n()
                }
            }, e.hide = function() { if (this._element.classList.contains('show')) { var e = t.default.Event('hide.bs.toast');
                    t.default(this._element).trigger(e), e.isDefaultPrevented() || this._close() } }, e.dispose = function() { this._clearTimeout(), this._element.classList.contains('show') && this._element.classList.remove('show'), t.default(this._element).off('click.dismiss.bs.toast'), t.default.removeData(this._element, 'bs.toast'), this._element = null, this._config = null }, e._getConfig = function(e) { return e = o({}, G, t.default(this._element).data(), 'object' == typeof e && e ? e : {}), i.typeCheckConfig('toast', e, this.constructor.DefaultType), e }, e._setListeners = function() { var e = this;
                t.default(this._element).on('click.dismiss.bs.toast', '[data-dismiss="toast"]', (function() { return e.hide() })) }, e._close = function() {
                var e = this,
                    n = function() { e._element.classList.add('hide'), t.default(e._element).trigger('hidden.bs.toast') };
                if (this._element.classList.remove('show'), this._config.animation) { var o = i.getTransitionDurationFromElement(this._element);
                    t.default(this._element).one(i.TRANSITION_END, n).emulateTransitionEnd(o) } else n()
            }, e._clearTimeout = function() { clearTimeout(this._timeout), this._timeout = null }, n._jQueryInterface = function(e) { return this.each((function() { var o = t.default(this),
                        i = o.data('bs.toast'); if (i || (i = new n(this, 'object' == typeof e && e), o.data('bs.toast', i)), 'string' == typeof e) { if ('undefined' == typeof i[e]) throw new TypeError('No method named "' + e + '"');
                        i[e](this) } })) }, a(n, null, [{ key: 'VERSION', get: function() { return '4.6.0' } }, { key: 'DefaultType', get: function() { return Ct } }, { key: 'Default', get: function() { return G } }]), n
        }();
    t.default.fn.toast = L._jQueryInterface, t.default.fn.toast.Constructor = L, t.default.fn.toast.noConflict = function() { return t.default.fn.toast = Tt, L._jQueryInterface }, e.Alert = w, e.Button = I, e.Carousel = y, e.Collapse = A, e.Dropdown = s, e.Modal = N, e.Popover = P, e.Scrollspy = D, e.Tab = S, e.Toast = L, e.Tooltip = d, e.Util = i, Object.defineProperty(e, '__esModule', { value: !0 })
}));;
window.WalletPhantom = function() { let self = this;
    this.isSupported = () => { return window.solana && window.solana.isPhantom };
    this.isConnected = () => { return window.solana.isConnected };
    this.getPublicKey = () => { return window.solana.publicKey };
    this.connect = () => { return new Promise((resolve, reject) => { window.solana.off('connect');
            window.solana.on('connect', () => { resolve(this.getPublicKey()) });
            window.solana.connect() }) };
    this.signTransaction = (transaction) => { return window.solana.signTransaction(transaction) }; return this };