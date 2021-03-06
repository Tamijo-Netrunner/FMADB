function createCustomSelect2DataAdapter() {
    function e(t, n) {
        e.__super__.constructor.call(this, t, n)
    }
    var t = jQuery.fn.select2.amd.require("select2/data/array")
      , n = jQuery.fn.select2.amd.require("select2/utils")
      , r = jQuery.fn.select2.amd.require("select2/data/tags");
    return n.Extend(e, t),
    e.prototype.current = function(e) {
        var t = [];
        this.$element.find(":selected").each(jQuery.proxy(function(e, n) {
            var r = jQuery(n)
              , i = this.item(r);
            t.push(i)
        }, this)),
        e(t = t.sort(function(e, t) {
            return e._addedOn - t._addedOn
        }))
    }
    ,
    e.prototype.select = function(t) {
        return t._addedOn = new Date,
        e.__super__.select.call(this, t)
    }
    ,
    e.prototype.unselect = function(t) {
        return t._addedOn = undefined,
        e.__super__.unselect.call(this, t)
    }
    ,
    e.prototype.option = function(t) {
        var n = e.__super__.option.call(this, t);
        return n.attr("data-pol", "+"),
        n.attr("data-item", t.id),
        n
    }
    ,
    n.Decorate(e, r)
}
(function() {
    function e(e, t, n) {
        switch (n.length) {
        case 0:
            return e.call(t);
        case 1:
            return e.call(t, n[0]);
        case 2:
            return e.call(t, n[0], n[1]);
        case 3:
            return e.call(t, n[0], n[1], n[2])
        }
        return e.apply(t, n)
    }
    function t(e, t, n, r) {
        for (var i = -1, o = null == e ? 0 : e.length; ++i < o; ) {
            var a = e[i];
            t(r, a, n(a), e)
        }
        return r
    }
    function n(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length; ++n < r && !1 !== t(e[n], n, e); )
            ;
        return e
    }
    function r(e, t) {
        for (var n = null == e ? 0 : e.length; n-- && !1 !== t(e[n], n, e); )
            ;
        return e
    }
    function i(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
            if (!t(e[n], n, e))
                return !1;
        return !0
    }
    function o(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length, i = 0, o = []; ++n < r; ) {
            var a = e[n];
            t(a, n, e) && (o[i++] = a)
        }
        return o
    }
    function a(e, t) {
        return !(null == e || !e.length) && -1 < m(e, t, 0)
    }
    function s(e, t, n) {
        for (var r = -1, i = null == e ? 0 : e.length; ++r < i; )
            if (n(t, e[r]))
                return !0;
        return !1
    }
    function c(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length, i = Array(r); ++n < r; )
            i[n] = t(e[n], n, e);
        return i
    }
    function u(e, t) {
        for (var n = -1, r = t.length, i = e.length; ++n < r; )
            e[i + n] = t[n];
        return e
    }
    function l(e, t, n, r) {
        var i = -1
          , o = null == e ? 0 : e.length;
        for (r && o && (n = e[++i]); ++i < o; )
            n = t(n, e[i], i, e);
        return n
    }
    function f(e, t, n, r) {
        var i = null == e ? 0 : e.length;
        for (r && i && (n = e[--i]); i--; )
            n = t(n, e[i], i, e);
        return n
    }
    function d(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
            if (t(e[n], n, e))
                return !0;
        return !1
    }
    function p(e, t, n) {
        var r;
        return n(e, function(e, n, i) {
            if (t(e, n, i))
                return r = n,
                !1
        }),
        r
    }
    function h(e, t, n, r) {
        var i = e.length;
        for (n += r ? 1 : -1; r ? n-- : ++n < i; )
            if (t(e[n], n, e))
                return n;
        return -1
    }
    function m(e, t, n) {
        if (t == t)
            e: {
                --n;
                for (var r = e.length; ++n < r; )
                    if (e[n] === t) {
                        e = n;
                        break e
                    }
                e = -1
            }
        else
            e = h(e, v, n);
        return e
    }
    function g(e, t, n, r) {
        --n;
        for (var i = e.length; ++n < i; )
            if (r(e[n], t))
                return n;
        return -1
    }
    function v(e) {
        return e != e
    }
    function y(e, t) {
        var n = null == e ? 0 : e.length;
        return n ? k(e, t) / n : U
    }
    function b(e) {
        return function(t) {
            return null == t ? M : t[e]
        }
    }
    function _(e) {
        return function(t) {
            return null == e ? M : e[t]
        }
    }
    function w(e, t, n, r, i) {
        return i(e, function(e, i, o) {
            n = r ? (r = !1,
            e) : t(n, e, i, o)
        }),
        n
    }
    function x(e, t) {
        var n = e.length;
        for (e.sort(t); n--; )
            e[n] = e[n].c;
        return e
    }
    function k(e, t) {
        for (var n, r = -1, i = e.length; ++r < i; ) {
            var o = t(e[r]);
            o !== M && (n = n === M ? o : n + o)
        }
        return n
    }
    function S(e, t) {
        for (var n = -1, r = Array(e); ++n < e; )
            r[n] = t(n);
        return r
    }
    function A(e, t) {
        return c(t, function(t) {
            return [t, e[t]]
        })
    }
    function C(e) {
        return function(t) {
            return e(t)
        }
    }
    function E(e, t) {
        return c(t, function(t) {
            return e[t]
        })
    }
    function $(e, t) {
        return e.has(t)
    }
    function T(e, t) {
        for (var n = -1, r = e.length; ++n < r && -1 < m(t, e[n], 0); )
            ;
        return n
    }
    function I(e, t) {
        for (var n = e.length; n-- && -1 < m(t, e[n], 0); )
            ;
        return n
    }
    function O(e) {
        return "\\" + Pe[e]
    }
    function D(e) {
        var t = -1
          , n = Array(e.size);
        return e.forEach(function(e, r) {
            n[++t] = [r, e]
        }),
        n
    }
    function j(e, t) {
        return function(n) {
            return e(t(n))
        }
    }
    function P(e, t) {
        for (var n = -1, r = e.length, i = 0, o = []; ++n < r; ) {
            var a = e[n];
            a !== t && "__lodash_placeholder__" !== a || (e[n] = "__lodash_placeholder__",
            o[i++] = n)
        }
        return o
    }
    function R(e) {
        var t = -1
          , n = Array(e.size);
        return e.forEach(function(e) {
            n[++t] = e
        }),
        n
    }
    function N(e) {
        var t = -1
          , n = Array(e.size);
        return e.forEach(function(e) {
            n[++t] = [e, e]
        }),
        n
    }
    function L(e) {
        if (Te.test(e)) {
            for (var t = Ee.lastIndex = 0; Ee.test(e); )
                ++t;
            e = t
        } else
            e = Xe(e);
        return e
    }
    function F(e) {
        return Te.test(e) ? e.match(Ee) || [] : e.split("")
    }
    var M, q = 1 / 0, U = NaN, z = [["ary", 128], ["bind", 1], ["bindKey", 2], ["curry", 8], ["curryRight", 16], ["flip", 512], ["partial", 32], ["partialRight", 64], ["rearg", 256]], B = /\b__p\+='';/g, H = /\b(__p\+=)''\+/g, W = /(__e\(.*?\)|\b__t\))\+'';/g, V = /&(?:amp|lt|gt|quot|#39);/g, Q = /[&<>"']/g, K = RegExp(V.source), Y = RegExp(Q.source), G = /<%-([\s\S]+?)%>/g, X = /<%([\s\S]+?)%>/g, J = /<%=([\s\S]+?)%>/g, Z = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ee = /^\w*$/, te = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ne = /[\\^$.*+?()[\]{}|]/g, re = RegExp(ne.source), ie = /^\s+|\s+$/g, oe = /^\s+/, ae = /\s+$/, se = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, ce = /\{\n\/\* \[wrapped with (.+)\] \*/, ue = /,? & /, le = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, fe = /\\(\\)?/g, de = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, pe = /\w*$/, he = /^[-+]0x[0-9a-f]+$/i, me = /^0b[01]+$/i, ge = /^\[object .+?Constructor\]$/, ve = /^0o[0-7]+$/i, ye = /^(?:0|[1-9]\d*)$/, be = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, _e = /($^)/, we = /['\n\r\u2028\u2029\\]/g, xe = "[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:[^\\ud800-\\udfff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*", ke = "(?:[\\u2700-\\u27bf]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])" + xe, Se = "(?:[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]?|[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\ud800-\\udfff])", Ae = RegExp("['\u2019]", "g"), Ce = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g"), Ee = RegExp("\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|" + Se + xe, "g"), $e = RegExp(["[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+(?:['\u2019](?:d|ll|m|re|s|t|ve))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde]|$)|(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde](?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])|$)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?(?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['\u2019](?:d|ll|m|re|s|t|ve))?|[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?|\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])|\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])|\\d+", ke].join("|"), "g"), Te = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"), Ie = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Oe = "Array Buffer DataView Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Map Math Object Promise RegExp Set String Symbol TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap _ clearTimeout isFinite parseInt setTimeout".split(" "), De = {};
    De["[object Float32Array]"] = De["[object Float64Array]"] = De["[object Int8Array]"] = De["[object Int16Array]"] = De["[object Int32Array]"] = De["[object Uint8Array]"] = De["[object Uint8ClampedArray]"] = De["[object Uint16Array]"] = De["[object Uint32Array]"] = !0,
    De["[object Arguments]"] = De["[object Array]"] = De["[object ArrayBuffer]"] = De["[object Boolean]"] = De["[object DataView]"] = De["[object Date]"] = De["[object Error]"] = De["[object Function]"] = De["[object Map]"] = De["[object Number]"] = De["[object Object]"] = De["[object RegExp]"] = De["[object Set]"] = De["[object String]"] = De["[object WeakMap]"] = !1;
    var je = {};
    je["[object Arguments]"] = je["[object Array]"] = je["[object ArrayBuffer]"] = je["[object DataView]"] = je["[object Boolean]"] = je["[object Date]"] = je["[object Float32Array]"] = je["[object Float64Array]"] = je["[object Int8Array]"] = je["[object Int16Array]"] = je["[object Int32Array]"] = je["[object Map]"] = je["[object Number]"] = je["[object Object]"] = je["[object RegExp]"] = je["[object Set]"] = je["[object String]"] = je["[object Symbol]"] = je["[object Uint8Array]"] = je["[object Uint8ClampedArray]"] = je["[object Uint16Array]"] = je["[object Uint32Array]"] = !0,
    je["[object Error]"] = je["[object Function]"] = je["[object WeakMap]"] = !1;
    var Pe = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }
      , Re = parseFloat
      , Ne = parseInt
      , Le = "object" == typeof global && global && global.Object === Object && global
      , Fe = "object" == typeof self && self && self.Object === Object && self
      , Me = Le || Fe || Function("return this")()
      , qe = "object" == typeof exports && exports && !exports.nodeType && exports
      , Ue = qe && "object" == typeof module && module && !module.nodeType && module
      , ze = Ue && Ue.exports === qe
      , Be = ze && Le.process
      , He = function() {
        try {
            var e = Ue && Ue.f && Ue.f("util").types;
            return e || Be && Be.binding && Be.binding("util")
        } catch (e) {}
    }()
      , We = He && He.isArrayBuffer
      , Ve = He && He.isDate
      , Qe = He && He.isMap
      , Ke = He && He.isRegExp
      , Ye = He && He.isSet
      , Ge = He && He.isTypedArray
      , Xe = b("length")
      , Je = _({
        "\xc0": "A",
        "\xc1": "A",
        "\xc2": "A",
        "\xc3": "A",
        "\xc4": "A",
        "\xc5": "A",
        "\xe0": "a",
        "\xe1": "a",
        "\xe2": "a",
        "\xe3": "a",
        "\xe4": "a",
        "\xe5": "a",
        "\xc7": "C",
        "\xe7": "c",
        "\xd0": "D",
        "\xf0": "d",
        "\xc8": "E",
        "\xc9": "E",
        "\xca": "E",
        "\xcb": "E",
        "\xe8": "e",
        "\xe9": "e",
        "\xea": "e",
        "\xeb": "e",
        "\xcc": "I",
        "\xcd": "I",
        "\xce": "I",
        "\xcf": "I",
        "\xec": "i",
        "\xed": "i",
        "\xee": "i",
        "\xef": "i",
        "\xd1": "N",
        "\xf1": "n",
        "\xd2": "O",
        "\xd3": "O",
        "\xd4": "O",
        "\xd5": "O",
        "\xd6": "O",
        "\xd8": "O",
        "\xf2": "o",
        "\xf3": "o",
        "\xf4": "o",
        "\xf5": "o",
        "\xf6": "o",
        "\xf8": "o",
        "\xd9": "U",
        "\xda": "U",
        "\xdb": "U",
        "\xdc": "U",
        "\xf9": "u",
        "\xfa": "u",
        "\xfb": "u",
        "\xfc": "u",
        "\xdd": "Y",
        "\xfd": "y",
        "\xff": "y",
        "\xc6": "Ae",
        "\xe6": "ae",
        "\xde": "Th",
        "\xfe": "th",
        "\xdf": "ss",
        "\u0100": "A",
        "\u0102": "A",
        "\u0104": "A",
        "\u0101": "a",
        "\u0103": "a",
        "\u0105": "a",
        "\u0106": "C",
        "\u0108": "C",
        "\u010a": "C",
        "\u010c": "C",
        "\u0107": "c",
        "\u0109": "c",
        "\u010b": "c",
        "\u010d": "c",
        "\u010e": "D",
        "\u0110": "D",
        "\u010f": "d",
        "\u0111": "d",
        "\u0112": "E",
        "\u0114": "E",
        "\u0116": "E",
        "\u0118": "E",
        "\u011a": "E",
        "\u0113": "e",
        "\u0115": "e",
        "\u0117": "e",
        "\u0119": "e",
        "\u011b": "e",
        "\u011c": "G",
        "\u011e": "G",
        "\u0120": "G",
        "\u0122": "G",
        "\u011d": "g",
        "\u011f": "g",
        "\u0121": "g",
        "\u0123": "g",
        "\u0124": "H",
        "\u0126": "H",
        "\u0125": "h",
        "\u0127": "h",
        "\u0128": "I",
        "\u012a": "I",
        "\u012c": "I",
        "\u012e": "I",
        "\u0130": "I",
        "\u0129": "i",
        "\u012b": "i",
        "\u012d": "i",
        "\u012f": "i",
        "\u0131": "i",
        "\u0134": "J",
        "\u0135": "j",
        "\u0136": "K",
        "\u0137": "k",
        "\u0138": "k",
        "\u0139": "L",
        "\u013b": "L",
        "\u013d": "L",
        "\u013f": "L",
        "\u0141": "L",
        "\u013a": "l",
        "\u013c": "l",
        "\u013e": "l",
        "\u0140": "l",
        "\u0142": "l",
        "\u0143": "N",
        "\u0145": "N",
        "\u0147": "N",
        "\u014a": "N",
        "\u0144": "n",
        "\u0146": "n",
        "\u0148": "n",
        "\u014b": "n",
        "\u014c": "O",
        "\u014e": "O",
        "\u0150": "O",
        "\u014d": "o",
        "\u014f": "o",
        "\u0151": "o",
        "\u0154": "R",
        "\u0156": "R",
        "\u0158": "R",
        "\u0155": "r",
        "\u0157": "r",
        "\u0159": "r",
        "\u015a": "S",
        "\u015c": "S",
        "\u015e": "S",
        "\u0160": "S",
        "\u015b": "s",
        "\u015d": "s",
        "\u015f": "s",
        "\u0161": "s",
        "\u0162": "T",
        "\u0164": "T",
        "\u0166": "T",
        "\u0163": "t",
        "\u0165": "t",
        "\u0167": "t",
        "\u0168": "U",
        "\u016a": "U",
        "\u016c": "U",
        "\u016e": "U",
        "\u0170": "U",
        "\u0172": "U",
        "\u0169": "u",
        "\u016b": "u",
        "\u016d": "u",
        "\u016f": "u",
        "\u0171": "u",
        "\u0173": "u",
        "\u0174": "W",
        "\u0175": "w",
        "\u0176": "Y",
        "\u0177": "y",
        "\u0178": "Y",
        "\u0179": "Z",
        "\u017b": "Z",
        "\u017d": "Z",
        "\u017a": "z",
        "\u017c": "z",
        "\u017e": "z",
        "\u0132": "IJ",
        "\u0133": "ij",
        "\u0152": "Oe",
        "\u0153": "oe",
        "\u0149": "'n",
        "\u017f": "s"
    })
      , Ze = _({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })
      , et = _({
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
    })
      , tt = function nt(_) {
        function xe(e) {
            if (yi(e) && !as(e) && !(e instanceof Ee)) {
                if (e instanceof Se)
                    return e;
                if (ao.call(e, "__wrapped__"))
                    return Ur(e)
            }
            return new Se(e)
        }
        function ke() {}
        function Se(e, t) {
            this.__wrapped__ = e,
            this.__actions__ = [],
            this.__chain__ = !!t,
            this.__index__ = 0,
            this.__values__ = M
        }
        function Ee(e) {
            this.__wrapped__ = e,
            this.__actions__ = [],
            this.__dir__ = 1,
            this.__filtered__ = !1,
            this.__iteratees__ = [],
            this.__takeCount__ = 4294967295,
            this.__views__ = []
        }
        function Pe(e) {
            var t = -1
              , n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n; ) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        function Le(e) {
            var t = -1
              , n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n; ) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        function Fe(e) {
            var t = -1
              , n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n; ) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        function qe(e) {
            var t = -1
              , n = null == e ? 0 : e.length;
            for (this.__data__ = new Fe; ++t < n; )
                this.add(e[t])
        }
        function Ue(e) {
            this.size = (this.__data__ = new Le(e)).size
        }
        function Be(e, t) {
            var n, r = as(e), i = !r && os(e), o = !r && !i && cs(e), a = !r && !i && !o && ps(e), s = (i = (r = r || i || o || a) ? S(e.length, eo) : []).length;
            for (n in e)
                !t && !ao.call(e, n) || r && ("length" == n || o && ("offset" == n || "parent" == n) || a && ("buffer" == n || "byteLength" == n || "byteOffset" == n) || Er(n, s)) || i.push(n);
            return i
        }
        function He(e) {
            var t = e.length;
            return t ? e[on(0, t - 1)] : M
        }
        function Xe(e, t) {
            return Lr(Rn(e), dt(t, 0, e.length))
        }
        function rt(e) {
            return Lr(Rn(e))
        }
        function it(e, t, n) {
            (n === M || li(e[t], n)) && (n !== M || t in e) || lt(e, t, n)
        }
        function ot(e, t, n) {
            var r = e[t];
            ao.call(e, t) && li(r, n) && (n !== M || t in e) || lt(e, t, n)
        }
        function at(e, t) {
            for (var n = e.length; n--; )
                if (li(e[n][0], t))
                    return n;
            return -1
        }
        function st(e, t, n, r) {
            return oa(e, function(e, i, o) {
                t(r, e, n(e), o)
            }),
            r
        }
        function ct(e, t) {
            return e && Nn(t, Di(t), e)
        }
        function ut(e, t) {
            return e && Nn(t, ji(t), e)
        }
        function lt(e, t, n) {
            "__proto__" == t && Ao ? Ao(e, t, {
                configurable: !0,
                enumerable: !0,
                value: n,
                writable: !0
            }) : e[t] = n
        }
        function ft(e, t) {
            for (var n = -1, r = t.length, i = Qi(r), o = null == e; ++n < r; )
                i[n] = o ? M : Ii(e, t[n]);
            return i
        }
        function dt(e, t, n) {
            return e == e && (n !== M && (e = e <= n ? e : n),
            t !== M && (e = e >= t ? e : t)),
            e
        }
        function pt(e, t, r, i, o, a) {
            var s, c = 1 & t, u = 2 & t, l = 4 & t;
            if (r && (s = o ? r(e, i, o, a) : r(e)),
            s !== M)
                return s;
            if (!vi(e))
                return e;
            if (i = as(e)) {
                if (s = kr(e),
                !c)
                    return Rn(e, s)
            } else {
                var f = ga(e)
                  , d = "[object Function]" == f || "[object GeneratorFunction]" == f;
                if (cs(e))
                    return Tn(e, c);
                if ("[object Object]" == f || "[object Arguments]" == f || d && !o) {
                    if (s = u || d ? {} : Sr(e),
                    !c)
                        return u ? Fn(e, ut(s, e)) : Ln(e, ct(s, e))
                } else {
                    if (!je[f])
                        return o ? e : {};
                    s = Ar(e, f, c)
                }
            }
            if (a || (a = new Ue),
            o = a.get(e))
                return o;
            a.set(e, s),
            ds(e) ? e.forEach(function(n) {
                s.add(pt(n, t, r, n, e, a))
            }) : ls(e) && e.forEach(function(n, i) {
                s.set(i, pt(n, t, r, i, e, a))
            });
            u = l ? u ? mr : hr : u ? ji : Di;
            var p = i ? M : u(e);
            return n(p || e, function(n, i) {
                p && (n = e[i = n]),
                ot(s, i, pt(n, t, r, i, e, a))
            }),
            s
        }
        function ht(e) {
            var t = Di(e);
            return function(n) {
                return mt(n, e, t)
            }
        }
        function mt(e, t, n) {
            var r = n.length;
            if (null == e)
                return !r;
            for (e = Ji(e); r--; ) {
                var i = n[r]
                  , o = t[i]
                  , a = e[i];
                if (a === M && !(i in e) || !o(a))
                    return !1
            }
            return !0
        }
        function gt(e, t, n) {
            if ("function" != typeof e)
                throw new to("Expected a function");
            return ba(function() {
                e.apply(M, n)
            }, t)
        }
        function vt(e, t, n, r) {
            var i = -1
              , o = a
              , u = !0
              , l = e.length
              , f = []
              , d = t.length;
            if (!l)
                return f;
            n && (t = c(t, C(n))),
            r ? (o = s,
            u = !1) : 200 <= t.length && (o = $,
            u = !1,
            t = new qe(t));
            e: for (; ++i < l; ) {
                var p = e[i]
                  , h = null == n ? p : n(p);
                p = r || 0 !== p ? p : 0;
                if (u && h == h) {
                    for (var m = d; m--; )
                        if (t[m] === h)
                            continue e;
                    f.push(p)
                } else
                    o(t, h, r) || f.push(p)
            }
            return f
        }
        function yt(e, t) {
            var n = !0;
            return oa(e, function(e, r, i) {
                return n = !!t(e, r, i)
            }),
            n
        }
        function bt(e, t, n) {
            for (var r = -1, i = e.length; ++r < i; ) {
                var o = e[r]
                  , a = t(o);
                if (null != a && (s === M ? a == a && !xi(a) : n(a, s)))
                    var s = a
                      , c = o
            }
            return c
        }
        function _t(e, t) {
            var n = [];
            return oa(e, function(e, r, i) {
                t(e, r, i) && n.push(e)
            }),
            n
        }
        function wt(e, t, n, r, i) {
            var o = -1
              , a = e.length;
            for (n || (n = Cr),
            i || (i = []); ++o < a; ) {
                var s = e[o];
                0 < t && n(s) ? 1 < t ? wt(s, t - 1, n, r, i) : u(i, s) : r || (i[i.length] = s)
            }
            return i
        }
        function xt(e, t) {
            return e && sa(e, t, Di)
        }
        function kt(e, t) {
            return e && ca(e, t, Di)
        }
        function St(e, t) {
            return o(t, function(t) {
                return hi(e[t])
            })
        }
        function At(e, t) {
            for (var n = 0, r = (t = En(t, e)).length; null != e && n < r; )
                e = e[Fr(t[n++])];
            return n && n == r ? e : M
        }
        function Ct(e, t, n) {
            return t = t(e),
            as(e) ? t : u(t, n(e))
        }
        function Et(e) {
            if (null == e)
                e = e === M ? "[object Undefined]" : "[object Null]";
            else if (So && So in Ji(e)) {
                var t = ao.call(e, So)
                  , n = e[So];
                try {
                    e[So] = M;
                    var r = !0
                } catch (e) {}
                var i = uo.call(e);
                r && (t ? e[So] = n : delete e[So]),
                e = i
            } else
                e = uo.call(e);
            return e
        }
        function $t(e, t) {
            return e > t
        }
        function Tt(e, t) {
            return null != e && ao.call(e, t)
        }
        function It(e, t) {
            return null != e && t in Ji(e)
        }
        function Ot(e, t, n) {
            for (var r = n ? s : a, i = e[0].length, o = e.length, u = o, l = Qi(o), f = 1 / 0, d = []; u--; ) {
                var p = e[u];
                u && t && (p = c(p, C(t))),
                f = Lo(p.length, f),
                l[u] = !n && (t || 120 <= i && 120 <= p.length) ? new qe(u && p) : M
            }
            p = e[0];
            var h = -1
              , m = l[0];
            e: for (; ++h < i && d.length < f; ) {
                var g = p[h]
                  , v = t ? t(g) : g;
                g = n || 0 !== g ? g : 0;
                if (m ? !$(m, v) : !r(d, v, n)) {
                    for (u = o; --u; ) {
                        var y = l[u];
                        if (y ? !$(y, v) : !r(e[u], v, n))
                            continue e
                    }
                    m && m.push(v),
                    d.push(g)
                }
            }
            return d
        }
        function Dt(e, t, n) {
            var r = {};
            return xt(e, function(e, i, o) {
                t(r, n(e), i, o)
            }),
            r
        }
        function jt(t, n, r) {
            return null == (n = null == (t = 2 > (n = En(n, t)).length ? t : At(t, dn(n, 0, -1))) ? t : t[Fr(Vr(n))]) ? M : e(n, t, r)
        }
        function Pt(e) {
            return yi(e) && "[object Arguments]" == Et(e)
        }
        function Rt(e) {
            return yi(e) && "[object ArrayBuffer]" == Et(e)
        }
        function Nt(e) {
            return yi(e) && "[object Date]" == Et(e)
        }
        function Lt(e, t, n, r, i) {
            if (e === t)
                t = !0;
            else if (null == e || null == t || !yi(e) && !yi(t))
                t = e != e && t != t;
            else
                e: {
                    var o, a, s = as(e), c = as(t), u = "[object Object]" == (o = "[object Arguments]" == (o = s ? "[object Array]" : ga(e)) ? "[object Object]" : o);
                    c = "[object Object]" == (a = "[object Arguments]" == (a = c ? "[object Array]" : ga(t)) ? "[object Object]" : a);
                    if ((a = o == a) && cs(e)) {
                        if (!cs(t)) {
                            t = !1;
                            break e
                        }
                        s = !0,
                        u = !1
                    }
                    if (a && !u)
                        i || (i = new Ue),
                        t = s || ps(e) ? fr(e, t, n, r, Lt, i) : dr(e, t, o, n, r, Lt, i);
                    else {
                        if (!(1 & n) && (s = u && ao.call(e, "__wrapped__"),
                        o = c && ao.call(t, "__wrapped__"),
                        s || o)) {
                            e = s ? e.value() : e,
                            t = o ? t.value() : t,
                            i || (i = new Ue),
                            t = Lt(e, t, n, r, i);
                            break e
                        }
                        if (a)
                            t: if (i || (i = new Ue),
                            s = 1 & n,
                            o = hr(e),
                            c = o.length,
                            a = hr(t).length,
                            c == a || s) {
                                for (u = c; u--; ) {
                                    var l = o[u];
                                    if (!(s ? l in t : ao.call(t, l))) {
                                        t = !1;
                                        break t
                                    }
                                }
                                if ((a = i.get(e)) && i.get(t))
                                    t = a == t;
                                else {
                                    a = !0,
                                    i.set(e, t),
                                    i.set(t, e);
                                    for (var f = s; ++u < c; ) {
                                        var d = e[l = o[u]]
                                          , p = t[l];
                                        if (r)
                                            var h = s ? r(p, d, l, t, e, i) : r(d, p, l, e, t, i);
                                        if (h === M ? d !== p && !Lt(d, p, n, r, i) : !h) {
                                            a = !1;
                                            break
                                        }
                                        f || (f = "constructor" == l)
                                    }
                                    a && !f && ((n = e.constructor) != (r = t.constructor) && "constructor"in e && "constructor"in t && !("function" == typeof n && n instanceof n && "function" == typeof r && r instanceof r) && (a = !1)),
                                    i["delete"](e),
                                    i["delete"](t),
                                    t = a
                                }
                            } else
                                t = !1;
                        else
                            t = !1
                    }
                }
            return t
        }
        function Ft(e) {
            return yi(e) && "[object Map]" == ga(e)
        }
        function Mt(e, t, n, r) {
            var i = n.length
              , o = i
              , a = !r;
            if (null == e)
                return !o;
            for (e = Ji(e); i--; ) {
                var s = n[i];
                if (a && s[2] ? s[1] !== e[s[0]] : !(s[0]in e))
                    return !1
            }
            for (; ++i < o; ) {
                var c = (s = n[i])[0]
                  , u = e[c]
                  , l = s[1];
                if (a && s[2]) {
                    if (u === M && !(c in e))
                        return !1
                } else {
                    if (s = new Ue,
                    r)
                        var f = r(u, l, c, e, t, s);
                    if (f === M ? !Lt(l, u, 3, r, s) : !f)
                        return !1
                }
            }
            return !0
        }
        function qt(e) {
            return !(!vi(e) || co && co in e) && (hi(e) ? po : ge).test(Mr(e))
        }
        function Ut(e) {
            return yi(e) && "[object RegExp]" == Et(e)
        }
        function zt(e) {
            return yi(e) && "[object Set]" == ga(e)
        }
        function Bt(e) {
            return yi(e) && gi(e.length) && !!De[Et(e)]
        }
        function Ht(e) {
            return "function" == typeof e ? e : null == e ? qi : "object" == typeof e ? as(e) ? Yt(e[0], e[1]) : Kt(e) : Hi(e)
        }
        function Wt(e) {
            if (!Or(e))
                return Ro(e);
            var t, n = [];
            for (t in Ji(e))
                ao.call(e, t) && "constructor" != t && n.push(t);
            return n
        }
        function Vt(e, t) {
            return e < t
        }
        function Qt(e, t) {
            var n = -1
              , r = fi(e) ? Qi(e.length) : [];
            return oa(e, function(e, i, o) {
                r[++n] = t(e, i, o)
            }),
            r
        }
        function Kt(e) {
            var t = _r(e);
            return 1 == t.length && t[0][2] ? Dr(t[0][0], t[0][1]) : function(n) {
                return n === e || Mt(n, e, t)
            }
        }
        function Yt(e, t) {
            return Tr(e) && t == t && !vi(t) ? Dr(Fr(e), t) : function(n) {
                var r = Ii(n, e);
                return r === M && r === t ? Oi(n, e) : Lt(t, r, 3)
            }
        }
        function Gt(e, t, n, r, i) {
            e !== t && sa(t, function(o, a) {
                if (i || (i = new Ue),
                vi(o)) {
                    var s = i
                      , c = Pr(e, a)
                      , u = Pr(t, a);
                    if (h = s.get(u))
                        it(e, a, h);
                    else {
                        var l = (h = r ? r(c, u, a + "", e, t, s) : M) === M;
                        if (l) {
                            var f = as(u)
                              , d = !f && cs(u)
                              , p = !f && !d && ps(u)
                              , h = u;
                            f || d || p ? as(c) ? h = c : di(c) ? h = Rn(c) : d ? (l = !1,
                            h = Tn(u, !0)) : p ? (l = !1,
                            h = On(u, !0)) : h = [] : _i(u) || os(u) ? (h = c,
                            os(c) ? h = $i(c) : vi(c) && !hi(c) || (h = Sr(u))) : l = !1
                        }
                        l && (s.set(u, h),
                        Gt(h, u, n, r, s),
                        s["delete"](u)),
                        it(e, a, h)
                    }
                } else
                    (s = r ? r(Pr(e, a), o, a + "", e, t, i) : M) === M && (s = o),
                    it(e, a, s)
            }, ji)
        }
        function Xt(e, t) {
            var n = e.length;
            if (n)
                return Er(t += 0 > t ? n : 0, n) ? e[t] : M
        }
        function Jt(e, t, n) {
            var r = -1;
            return t = c(t.length ? t : [qi], C(yr())),
            x(e = Qt(e, function(e) {
                return {
                    a: c(t, function(t) {
                        return t(e)
                    }),
                    b: ++r,
                    c: e
                }
            }), function(e, t) {
                var r;
                e: {
                    r = -1;
                    for (var i = e.a, o = t.a, a = i.length, s = n.length; ++r < a; ) {
                        var c = Dn(i[r], o[r]);
                        if (c) {
                            r = r >= s ? c : c * ("desc" == n[r] ? -1 : 1);
                            break e
                        }
                    }
                    r = e.b - t.b
                }
                return r
            })
        }
        function Zt(e, t) {
            return en(e, t, function(t, n) {
                return Oi(e, n)
            })
        }
        function en(e, t, n) {
            for (var r = -1, i = t.length, o = {}; ++r < i; ) {
                var a = t[r]
                  , s = At(e, a);
                n(s, a) && ln(o, En(a, e), s)
            }
            return o
        }
        function tn(e) {
            return function(t) {
                return At(t, e)
            }
        }
        function nn(e, t, n, r) {
            var i = r ? g : m
              , o = -1
              , a = t.length
              , s = e;
            for (e === t && (t = Rn(t)),
            n && (s = c(e, C(n))); ++o < a; ) {
                var u = 0
                  , l = t[o];
                for (l = n ? n(l) : l; -1 < (u = i(s, l, u, r)); )
                    s !== e && wo.call(s, u, 1),
                    wo.call(e, u, 1)
            }
            return e
        }
        function rn(e, t) {
            for (var n = e ? t.length : 0, r = n - 1; n--; ) {
                var i = t[n];
                if (n == r || i !== o) {
                    var o = i;
                    Er(i) ? wo.call(e, i, 1) : _n(e, i)
                }
            }
        }
        function on(e, t) {
            return e + Io(qo() * (t - e + 1))
        }
        function an(e, t) {
            var n = "";
            if (!e || 1 > t || 9007199254740991 < t)
                return n;
            do {
                t % 2 && (n += e),
                (t = Io(t / 2)) && (e += e)
            } while (t);
            return n
        }
        function sn(e, t) {
            return _a(jr(e, t, qi), e + "")
        }
        function cn(e) {
            return He(Ri(e))
        }
        function un(e, t) {
            var n = Ri(e);
            return Lr(n, dt(t, 0, n.length))
        }
        function ln(e, t, n, r) {
            if (!vi(e))
                return e;
            for (var i = -1, o = (t = En(t, e)).length, a = o - 1, s = e; null != s && ++i < o; ) {
                var c = Fr(t[i])
                  , u = n;
                if (i != a) {
                    var l = s[c];
                    (u = r ? r(l, c, s) : M) === M && (u = vi(l) ? l : Er(t[i + 1]) ? [] : {})
                }
                ot(s, c, u),
                s = s[c]
            }
            return e
        }
        function fn(e) {
            return Lr(Ri(e))
        }
        function dn(e, t, n) {
            var r = -1
              , i = e.length;
            for (0 > t && (t = -t > i ? 0 : i + t),
            0 > (n = n > i ? i : n) && (n += i),
            i = t > n ? 0 : n - t >>> 0,
            t >>>= 0,
            n = Qi(i); ++r < i; )
                n[r] = e[r + t];
            return n
        }
        function pn(e, t) {
            var n;
            return oa(e, function(e, r, i) {
                return !(n = t(e, r, i))
            }),
            !!n
        }
        function hn(e, t, n) {
            var r = 0
              , i = null == e ? r : e.length;
            if ("number" == typeof t && t == t && 2147483647 >= i) {
                for (; r < i; ) {
                    var o = r + i >>> 1
                      , a = e[o];
                    null !== a && !xi(a) && (n ? a <= t : a < t) ? r = o + 1 : i = o
                }
                return i
            }
            return mn(e, t, qi, n)
        }
        function mn(e, t, n, r) {
            t = n(t);
            for (var i = 0, o = null == e ? 0 : e.length, a = t != t, s = null === t, c = xi(t), u = t === M; i < o; ) {
                var l = Io((i + o) / 2)
                  , f = n(e[l])
                  , d = f !== M
                  , p = null === f
                  , h = f == f
                  , m = xi(f);
                (a ? r || h : u ? h && (r || d) : s ? h && d && (r || !p) : c ? h && d && !p && (r || !m) : !p && !m && (r ? f <= t : f < t)) ? i = l + 1 : o = l
            }
            return Lo(o, 4294967294)
        }
        function gn(e, t) {
            for (var n = -1, r = e.length, i = 0, o = []; ++n < r; ) {
                var a = e[n]
                  , s = t ? t(a) : a;
                if (!n || !li(s, c)) {
                    var c = s;
                    o[i++] = 0 === a ? 0 : a
                }
            }
            return o
        }
        function vn(e) {
            return "number" == typeof e ? e : xi(e) ? U : +e
        }
        function yn(e) {
            if ("string" == typeof e)
                return e;
            if (as(e))
                return c(e, yn) + "";
            if (xi(e))
                return ra ? ra.call(e) : "";
            var t = e + "";
            return "0" == t && 1 / e == -q ? "-0" : t
        }
        function bn(e, t, n) {
            var r = -1
              , i = a
              , o = e.length
              , c = !0
              , u = []
              , l = u;
            if (n)
                c = !1,
                i = s;
            else if (200 <= o) {
                if (i = t ? null : da(e))
                    return R(i);
                c = !1,
                i = $,
                l = new qe
            } else
                l = t ? [] : u;
            e: for (; ++r < o; ) {
                var f = e[r]
                  , d = t ? t(f) : f;
                f = n || 0 !== f ? f : 0;
                if (c && d == d) {
                    for (var p = l.length; p--; )
                        if (l[p] === d)
                            continue e;
                    t && l.push(d),
                    u.push(f)
                } else
                    i(l, d, n) || (l !== u && l.push(d),
                    u.push(f))
            }
            return u
        }
        function _n(e, t) {
            return null == (e = 2 > (t = En(t, e)).length ? e : At(e, dn(t, 0, -1))) || delete e[Fr(Vr(t))]
        }
        function wn(e, t, n, r) {
            for (var i = e.length, o = r ? i : -1; (r ? o-- : ++o < i) && t(e[o], o, e); )
                ;
            return n ? dn(e, r ? 0 : o, r ? o + 1 : i) : dn(e, r ? o + 1 : 0, r ? i : o)
        }
        function xn(e, t) {
            var n = e;
            return n instanceof Ee && (n = n.value()),
            l(t, function(e, t) {
                return t.func.apply(t.thisArg, u([e], t.args))
            }, n)
        }
        function kn(e, t, n) {
            var r = e.length;
            if (2 > r)
                return r ? bn(e[0]) : [];
            for (var i = -1, o = Qi(r); ++i < r; )
                for (var a = e[i], s = -1; ++s < r; )
                    s != i && (o[i] = vt(o[i] || a, e[s], t, n));
            return bn(wt(o, 1), t, n)
        }
        function Sn(e, t, n) {
            for (var r = -1, i = e.length, o = t.length, a = {}; ++r < i; )
                n(a, e[r], r < o ? t[r] : M);
            return a
        }
        function An(e) {
            return di(e) ? e : []
        }
        function Cn(e) {
            return "function" == typeof e ? e : qi
        }
        function En(e, t) {
            return as(e) ? e : Tr(e, t) ? [e] : wa(Ti(e))
        }
        function $n(e, t, n) {
            var r = e.length;
            return n = n === M ? r : n,
            !t && n >= r ? e : dn(e, t, n)
        }
        function Tn(e, t) {
            if (t)
                return e.slice();
            var n = e.length;
            n = vo ? vo(n) : new e.constructor(n);
            return e.copy(n),
            n
        }
        function In(e) {
            var t = new e.constructor(e.byteLength);
            return new go(t).set(new go(e)),
            t
        }
        function On(e, t) {
            return new e.constructor(t ? In(e.buffer) : e.buffer,e.byteOffset,e.length)
        }
        function Dn(e, t) {
            if (e !== t) {
                var n = e !== M
                  , r = null === e
                  , i = e == e
                  , o = xi(e)
                  , a = t !== M
                  , s = null === t
                  , c = t == t
                  , u = xi(t);
                if (!s && !u && !o && e > t || o && a && c && !s && !u || r && a && c || !n && c || !i)
                    return 1;
                if (!r && !o && !u && e < t || u && n && i && !r && !o || s && n && i || !a && i || !c)
                    return -1
            }
            return 0
        }
        function jn(e, t, n, r) {
            var i = -1
              , o = e.length
              , a = n.length
              , s = -1
              , c = t.length
              , u = No(o - a, 0)
              , l = Qi(c + u);
            for (r = !r; ++s < c; )
                l[s] = t[s];
            for (; ++i < a; )
                (r || i < o) && (l[n[i]] = e[i]);
            for (; u--; )
                l[s++] = e[i++];
            return l
        }
        function Pn(e, t, n, r) {
            var i = -1
              , o = e.length
              , a = -1
              , s = n.length
              , c = -1
              , u = t.length
              , l = No(o - s, 0)
              , f = Qi(l + u);
            for (r = !r; ++i < l; )
                f[i] = e[i];
            for (l = i; ++c < u; )
                f[l + c] = t[c];
            for (; ++a < s; )
                (r || i < o) && (f[l + n[a]] = e[i++]);
            return f
        }
        function Rn(e, t) {
            var n = -1
              , r = e.length;
            for (t || (t = Qi(r)); ++n < r; )
                t[n] = e[n];
            return t
        }
        function Nn(e, t, n, r) {
            var i = !n;
            n || (n = {});
            for (var o = -1, a = t.length; ++o < a; ) {
                var s = t[o]
                  , c = r ? r(n[s], e[s], s, n, e) : M;
                c === M && (c = e[s]),
                i ? lt(n, s, c) : ot(n, s, c)
            }
            return n
        }
        function Ln(e, t) {
            return Nn(e, ha(e), t)
        }
        function Fn(e, t) {
            return Nn(e, ma(e), t)
        }
        function Mn(e, n) {
            return function(r, i) {
                var o = as(r) ? t : st
                  , a = n ? n() : {};
                return o(r, e, yr(i, 2), a)
            }
        }
        function qn(e) {
            return sn(function(t, n) {
                var r = -1
                  , i = n.length
                  , o = 1 < i ? n[i - 1] : M
                  , a = 2 < i ? n[2] : M;
                o = 3 < e.length && "function" == typeof o ? (i--,
                o) : M;
                for (a && $r(n[0], n[1], a) && (o = 3 > i ? M : o,
                i = 1),
                t = Ji(t); ++r < i; )
                    (a = n[r]) && e(t, a, r, o);
                return t
            })
        }
        function Un(e, t) {
            return function(n, r) {
                if (null == n)
                    return n;
                if (!fi(n))
                    return e(n, r);
                for (var i = n.length, o = t ? i : -1, a = Ji(n); (t ? o-- : ++o < i) && !1 !== r(a[o], o, a); )
                    ;
                return n
            }
        }
        function zn(e) {
            return function(t, n, r) {
                for (var i = -1, o = Ji(t), a = (r = r(t)).length; a--; ) {
                    var s = r[e ? a : ++i];
                    if (!1 === n(o[s], s, o))
                        break
                }
                return t
            }
        }
        function Bn(e, t, n) {
            function r() {
                return (this && this !== Me && this instanceof r ? o : e).apply(i ? n : this, arguments)
            }
            var i = 1 & t
              , o = Vn(e);
            return r
        }
        function Hn(e) {
            return function(t) {
                t = Ti(t);
                var n = Te.test(t) ? F(t) : M
                  , r = n ? n[0] : t.charAt(0);
                return t = n ? $n(n, 1).join("") : t.slice(1),
                r[e]() + t
            }
        }
        function Wn(e) {
            return function(t) {
                return l(Fi(Li(t).replace(Ae, "")), e, "")
            }
        }
        function Vn(e) {
            return function() {
                switch ((t = arguments).length) {
                case 0:
                    return new e;
                case 1:
                    return new e(t[0]);
                case 2:
                    return new e(t[0],t[1]);
                case 3:
                    return new e(t[0],t[1],t[2]);
                case 4:
                    return new e(t[0],t[1],t[2],t[3]);
                case 5:
                    return new e(t[0],t[1],t[2],t[3],t[4]);
                case 6:
                    return new e(t[0],t[1],t[2],t[3],t[4],t[5]);
                case 7:
                    return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])
                }
                var t, n = ia(e.prototype);
                return vi(t = e.apply(n, t)) ? t : n
            }
        }
        function Qn(t, n, r) {
            function i() {
                for (var a = arguments.length, s = Qi(a), c = a, u = vr(i); c--; )
                    s[c] = arguments[c];
                return (a -= (c = 3 > a && s[0] !== u && s[a - 1] !== u ? [] : P(s, u)).length) < r ? ir(t, n, Gn, i.placeholder, M, s, c, M, M, r - a) : e(this && this !== Me && this instanceof i ? o : t, this, s)
            }
            var o = Vn(t);
            return i
        }
        function Kn(e) {
            return function(t, n, r) {
                var i = Ji(t);
                if (!fi(t)) {
                    var o = yr(n, 3);
                    t = Di(t),
                    n = function(e) {
                        return o(i[e], e, i)
                    }
                }
                return -1 < (n = e(t, n, r)) ? i[o ? t[n] : n] : M
            }
        }
        function Yn(e) {
            return pr(function(t) {
                var n = t.length
                  , r = n
                  , i = Se.prototype.thru;
                for (e && t.reverse(); r--; ) {
                    if ("function" != typeof (a = t[r]))
                        throw new to("Expected a function");
                    if (i && !o && "wrapper" == gr(a))
                        var o = new Se([],!0)
                }
                for (r = o ? r : n; ++r < n; ) {
                    var a, s = "wrapper" == (i = gr(a = t[r])) ? pa(a) : M;
                    o = s && Ir(s[0]) && 424 == s[1] && !s[4].length && 1 == s[9] ? o[gr(s[0])].apply(o, s[3]) : 1 == a.length && Ir(a) ? o[i]() : o.thru(a)
                }
                return function() {
                    var e = (i = arguments)[0];
                    if (o && 1 == i.length && as(e))
                        return o.plant(e).value();
                    for (var r = 0, i = n ? t[r].apply(this, i) : e; ++r < n; )
                        i = t[r].call(this, i);
                    return i
                }
            })
        }
        function Gn(e, t, n, r, i, o, a, s, c, u) {
            function l() {
                for (var v = arguments.length, y = Qi(v), b = v; b--; )
                    y[b] = arguments[b];
                if (h) {
                    var _, w = vr(l);
                    b = y.length;
                    for (_ = 0; b--; )
                        y[b] === w && ++_
                }
                if (r && (y = jn(y, r, i, h)),
                o && (y = Pn(y, o, a, h)),
                v -= _,
                h && v < u)
                    return w = P(y, w),
                    ir(e, t, Gn, l.placeholder, n, y, w, s, c, u - v);
                if (w = d ? n : this,
                b = p ? w[e] : e,
                v = y.length,
                s) {
                    _ = y.length;
                    for (var x = Lo(s.length, _), k = Rn(y); x--; ) {
                        var S = s[x];
                        y[x] = Er(S, _) ? k[S] : M
                    }
                } else
                    m && 1 < v && y.reverse();
                return f && c < v && (y.length = c),
                this && this !== Me && this instanceof l && (b = g || Vn(b)),
                b.apply(w, y)
            }
            var f = 128 & t
              , d = 1 & t
              , p = 2 & t
              , h = 24 & t
              , m = 512 & t
              , g = p ? M : Vn(e);
            return l
        }
        function Xn(e, t) {
            return function(n, r) {
                return Dt(n, e, t(r))
            }
        }
        function Jn(e, t) {
            return function(n, r) {
                var i;
                if (n === M && r === M)
                    return t;
                if (n !== M && (i = n),
                r !== M) {
                    if (i === M)
                        return r;
                    "string" == typeof n || "string" == typeof r ? (n = yn(n),
                    r = yn(r)) : (n = vn(n),
                    r = vn(r)),
                    i = e(n, r)
                }
                return i
            }
        }
        function Zn(t) {
            return pr(function(n) {
                return n = c(n, C(yr())),
                sn(function(r) {
                    var i = this;
                    return t(n, function(t) {
                        return e(t, i, r)
                    })
                })
            })
        }
        function er(e, t) {
            var n = (t = t === M ? " " : yn(t)).length;
            return 2 > n ? n ? an(t, e) : t : (n = an(t, To(e / L(t))),
            Te.test(t) ? $n(F(n), 0, e).join("") : n.slice(0, e))
        }
        function tr(t, n, r, i) {
            function o() {
                for (var n = -1, c = arguments.length, u = -1, l = i.length, f = Qi(l + c), d = this && this !== Me && this instanceof o ? s : t; ++u < l; )
                    f[u] = i[u];
                for (; c--; )
                    f[u++] = arguments[++n];
                return e(d, a ? r : this, f)
            }
            var a = 1 & n
              , s = Vn(t);
            return o
        }
        function nr(e) {
            return function(t, n, r) {
                r && "number" != typeof r && $r(t, n, r) && (n = r = M),
                t = Si(t),
                n === M ? (n = t,
                t = 0) : n = Si(n),
                r = r === M ? t < n ? 1 : -1 : Si(r);
                var i = -1;
                n = No(To((n - t) / (r || 1)), 0);
                for (var o = Qi(n); n--; )
                    o[e ? n : ++i] = t,
                    t += r;
                return o
            }
        }
        function rr(e) {
            return function(t, n) {
                return "string" == typeof t && "string" == typeof n || (t = Ei(t),
                n = Ei(n)),
                e(t, n)
            }
        }
        function ir(e, t, n, r, i, o, a, s, c, u) {
            var l = 8 & t;
            return 4 & (t = (t | (l ? 32 : 64)) & ~(l ? 64 : 32)) || (t &= -4),
            i = [e, t, i, l ? o : M, l ? a : M, o = l ? M : o, a = l ? M : a, s, c, u],
            n = n.apply(M, i),
            Ir(e) && ya(n, i),
            n.placeholder = r,
            Rr(n, e, t)
        }
        function or(e) {
            var t = Xi[e];
            return function(e, n) {
                if (e = Ei(e),
                (n = null == n ? 0 : Lo(Ai(n), 292)) && jo(e)) {
                    var r = (Ti(e) + "e").split("e");
                    return +((r = (Ti(r = t(r[0] + "e" + (+r[1] + n))) + "e").split("e"))[0] + "e" + (+r[1] - n))
                }
                return t(e)
            }
        }
        function ar(e) {
            return function(t) {
                var n = ga(t);
                return "[object Map]" == n ? D(t) : "[object Set]" == n ? N(t) : A(t, e(t))
            }
        }
        function sr(e, t, n, r, i, o, a, s) {
            var c = 2 & t;
            if (!c && "function" != typeof e)
                throw new to("Expected a function");
            var u = r ? r.length : 0;
            if (u || (t &= -97,
            r = i = M),
            a = a === M ? a : No(Ai(a), 0),
            s = s === M ? s : Ai(s),
            u -= i ? i.length : 0,
            64 & t) {
                var l = r
                  , f = i;
                r = i = M
            }
            var d = c ? M : pa(e);
            return o = [e, t, n, r, i, l, f, o, a, s],
            d && (t = (n = o[1]) | (e = d[1]),
            r = 128 == e && 8 == n || 128 == e && 256 == n && o[7].length <= d[8] || 384 == e && d[7].length <= d[8] && 8 == n,
            131 > t || r) && (1 & e && (o[2] = d[2],
            t |= 1 & n ? 0 : 4),
            (n = d[3]) && (r = o[3],
            o[3] = r ? jn(r, n, d[4]) : n,
            o[4] = r ? P(o[3], "__lodash_placeholder__") : d[4]),
            (n = d[5]) && (r = o[5],
            o[5] = r ? Pn(r, n, d[6]) : n,
            o[6] = r ? P(o[5], "__lodash_placeholder__") : d[6]),
            (n = d[7]) && (o[7] = n),
            128 & e && (o[8] = null == o[8] ? d[8] : Lo(o[8], d[8])),
            null == o[9] && (o[9] = d[9]),
            o[0] = d[0],
            o[1] = t),
            e = o[0],
            t = o[1],
            n = o[2],
            r = o[3],
            i = o[4],
            !(s = o[9] = o[9] === M ? c ? 0 : e.length : No(o[9] - u, 0)) && 24 & t && (t &= -25),
            Rr((d ? ua : ya)(t && 1 != t ? 8 == t || 16 == t ? Qn(e, t, s) : 32 != t && 33 != t || i.length ? Gn.apply(M, o) : tr(e, t, n, r) : Bn(e, t, n), o), e, t)
        }
        function cr(e, t, n, r) {
            return e === M || li(e, ro[n]) && !ao.call(r, n) ? t : e
        }
        function ur(e, t, n, r, i, o) {
            return vi(e) && vi(t) && (o.set(t, e),
            Gt(e, t, M, ur, o),
            o["delete"](t)),
            e
        }
        function lr(e) {
            return _i(e) ? M : e
        }
        function fr(e, t, n, r, i, o) {
            var a = 1 & n
              , s = e.length;
            if (s != (c = t.length) && !(a && c > s))
                return !1;
            if ((c = o.get(e)) && o.get(t))
                return c == t;
            var c = -1
              , u = !0
              , l = 2 & n ? new qe : M;
            for (o.set(e, t),
            o.set(t, e); ++c < s; ) {
                var f = e[c]
                  , p = t[c];
                if (r)
                    var h = a ? r(p, f, c, t, e, o) : r(f, p, c, e, t, o);
                if (h !== M) {
                    if (h)
                        continue;
                    u = !1;
                    break
                }
                if (l) {
                    if (!d(t, function(e, t) {
                        if (!$(l, t) && (f === e || i(f, e, n, r, o)))
                            return l.push(t)
                    })) {
                        u = !1;
                        break
                    }
                } else if (f !== p && !i(f, p, n, r, o)) {
                    u = !1;
                    break
                }
            }
            return o["delete"](e),
            o["delete"](t),
            u
        }
        function dr(e, t, n, r, i, o, a) {
            switch (n) {
            case "[object DataView]":
                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                    break;
                e = e.buffer,
                t = t.buffer;
            case "[object ArrayBuffer]":
                if (e.byteLength != t.byteLength || !o(new go(e), new go(t)))
                    break;
                return !0;
            case "[object Boolean]":
            case "[object Date]":
            case "[object Number]":
                return li(+e, +t);
            case "[object Error]":
                return e.name == t.name && e.message == t.message;
            case "[object RegExp]":
            case "[object String]":
                return e == t + "";
            case "[object Map]":
                var s = D;
            case "[object Set]":
                if (s || (s = R),
                e.size != t.size && !(1 & r))
                    break;
                return (n = a.get(e)) ? n == t : (r |= 2,
                a.set(e, t),
                t = fr(s(e), s(t), r, i, o, a),
                a["delete"](e),
                t);
            case "[object Symbol]":
                if (na)
                    return na.call(e) == na.call(t)
            }
            return !1
        }
        function pr(e) {
            return _a(jr(e, M, Hr), e + "")
        }
        function hr(e) {
            return Ct(e, Di, ha)
        }
        function mr(e) {
            return Ct(e, ji, ma)
        }
        function gr(e) {
            for (var t = e.name + "", n = Yo[t], r = ao.call(Yo, t) ? n.length : 0; r--; ) {
                var i = n[r]
                  , o = i.func;
                if (null == o || o == e)
                    return i.name
            }
            return t
        }
        function vr(e) {
            return (ao.call(xe, "placeholder") ? xe : e).placeholder
        }
        function yr() {
            var e = (e = xe.iteratee || Ui) === Ui ? Ht : e;
            return arguments.length ? e(arguments[0], arguments[1]) : e
        }
        function br(e, t) {
            var n = e.__data__
              , r = typeof t;
            return ("string" == r || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== t : null === t) ? n["string" == typeof t ? "string" : "hash"] : n.map
        }
        function _r(e) {
            for (var t = Di(e), n = t.length; n--; ) {
                var r = t[n]
                  , i = e[r];
                t[n] = [r, i, i == i && !vi(i)]
            }
            return t
        }
        function wr(e, t) {
            var n = null == e ? M : e[t];
            return qt(n) ? n : M
        }
        function xr(e, t, n) {
            for (var r = -1, i = (t = En(t, e)).length, o = !1; ++r < i; ) {
                var a = Fr(t[r]);
                if (!(o = null != e && n(e, a)))
                    break;
                e = e[a]
            }
            return o || ++r != i ? o : !!(i = null == e ? 0 : e.length) && gi(i) && Er(a, i) && (as(e) || os(e))
        }
        function kr(e) {
            var t = e.length
              , n = new e.constructor(t);
            return t && "string" == typeof e[0] && ao.call(e, "index") && (n.index = e.index,
            n.input = e.input),
            n
        }
        function Sr(e) {
            return "function" != typeof e.constructor || Or(e) ? {} : ia(yo(e))
        }
        function Ar(e, t, n) {
            var r = e.constructor;
            switch (t) {
            case "[object ArrayBuffer]":
                return In(e);
            case "[object Boolean]":
            case "[object Date]":
                return new r(+e);
            case "[object DataView]":
                return t = n ? In(e.buffer) : e.buffer,
                new e.constructor(t,e.byteOffset,e.byteLength);
            case "[object Float32Array]":
            case "[object Float64Array]":
            case "[object Int8Array]":
            case "[object Int16Array]":
            case "[object Int32Array]":
            case "[object Uint8Array]":
            case "[object Uint8ClampedArray]":
            case "[object Uint16Array]":
            case "[object Uint32Array]":
                return On(e, n);
            case "[object Map]":
                return new r;
            case "[object Number]":
            case "[object String]":
                return new r(e);
            case "[object RegExp]":
                return (t = new e.constructor(e.source,pe.exec(e))).lastIndex = e.lastIndex,
                t;
            case "[object Set]":
                return new r;
            case "[object Symbol]":
                return na ? Ji(na.call(e)) : {}
            }
        }
        function Cr(e) {
            return as(e) || os(e) || !!(xo && e && e[xo])
        }
        function Er(e, t) {
            var n = typeof e;
            return !!(t = null == t ? 9007199254740991 : t) && ("number" == n || "symbol" != n && ye.test(e)) && -1 < e && 0 == e % 1 && e < t
        }
        function $r(e, t, n) {
            if (!vi(n))
                return !1;
            var r = typeof t;
            return !!("number" == r ? fi(n) && Er(t, n.length) : "string" == r && t in n) && li(n[t], e)
        }
        function Tr(e, t) {
            if (as(e))
                return !1;
            var n = typeof e;
            return !("number" != n && "symbol" != n && "boolean" != n && null != e && !xi(e)) || ee.test(e) || !Z.test(e) || null != t && e in Ji(t)
        }
        function Ir(e) {
            var t = gr(e)
              , n = xe[t];
            return "function" == typeof n && t in Ee.prototype && (e === n || !!(t = pa(n)) && e === t[0])
        }
        function Or(e) {
            var t = e && e.constructor;
            return e === ("function" == typeof t && t.prototype || ro)
        }
        function Dr(e, t) {
            return function(n) {
                return null != n && n[e] === t && (t !== M || e in Ji(n))
            }
        }
        function jr(t, n, r) {
            return n = No(n === M ? t.length - 1 : n, 0),
            function() {
                for (var i = arguments, o = -1, a = No(i.length - n, 0), s = Qi(a); ++o < a; )
                    s[o] = i[n + o];
                for (o = -1,
                a = Qi(n + 1); ++o < n; )
                    a[o] = i[o];
                return a[n] = r(s),
                e(t, this, a)
            }
        }
        function Pr(e, t) {
            if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t)
                return e[t]
        }
        function Rr(e, t, n) {
            var r = t + "";
            t = _a;
            var i, o = qr;
            return (o = (n = o(i = (i = r.match(ce)) ? i[1].split(ue) : [], n)).length) && (n[i = o - 1] = (1 < o ? "& " : "") + n[i],
            n = n.join(2 < o ? ", " : " "),
            r = r.replace(se, "{\n/* [wrapped with " + n + "] */\n")),
            t(e, r)
        }
        function Nr(e) {
            var t = 0
              , n = 0;
            return function() {
                var r = Fo()
                  , i = 16 - (r - n);
                if (n = r,
                0 < i) {
                    if (800 <= ++t)
                        return arguments[0]
                } else
                    t = 0;
                return e.apply(M, arguments)
            }
        }
        function Lr(e, t) {
            var n = -1
              , r = (i = e.length) - 1;
            for (t = t === M ? i : t; ++n < t; ) {
                var i, o = e[i = on(n, r)];
                e[i] = e[n],
                e[n] = o
            }
            return e.length = t,
            e
        }
        function Fr(e) {
            if ("string" == typeof e || xi(e))
                return e;
            var t = e + "";
            return "0" == t && 1 / e == -q ? "-0" : t
        }
        function Mr(e) {
            if (null != e) {
                try {
                    return oo.call(e)
                } catch (e) {}
                return e + ""
            }
            return ""
        }
        function qr(e, t) {
            return n(z, function(n) {
                var r = "_." + n[0];
                t & n[1] && !a(e, r) && e.push(r)
            }),
            e.sort()
        }
        function Ur(e) {
            if (e instanceof Ee)
                return e.clone();
            var t = new Se(e.__wrapped__,e.__chain__);
            return t.__actions__ = Rn(e.__actions__),
            t.__index__ = e.__index__,
            t.__values__ = e.__values__,
            t
        }
        function zr(e, t, n) {
            var r = null == e ? 0 : e.length;
            return r ? (0 > (n = null == n ? 0 : Ai(n)) && (n = No(r + n, 0)),
            h(e, yr(t, 3), n)) : -1
        }
        function Br(e, t, n) {
            var r = null == e ? 0 : e.length;
            if (!r)
                return -1;
            var i = r - 1;
            return n !== M && (i = Ai(n),
            i = 0 > n ? No(r + i, 0) : Lo(i, r - 1)),
            h(e, yr(t, 3), i, !0)
        }
        function Hr(e) {
            return null != e && e.length ? wt(e, 1) : []
        }
        function Wr(e) {
            return e && e.length ? e[0] : M
        }
        function Vr(e) {
            var t = null == e ? 0 : e.length;
            return t ? e[t - 1] : M
        }
        function Qr(e, t) {
            return e && e.length && t && t.length ? nn(e, t) : e
        }
        function Kr(e) {
            return null == e ? e : Uo.call(e)
        }
        function Yr(e) {
            if (!e || !e.length)
                return [];
            var t = 0;
            return e = o(e, function(e) {
                if (di(e))
                    return t = No(e.length, t),
                    !0
            }),
            S(t, function(t) {
                return c(e, b(t))
            })
        }
        function Gr(t, n) {
            if (!t || !t.length)
                return [];
            var r = Yr(t);
            return null == n ? r : c(r, function(t) {
                return e(n, M, t)
            })
        }
        function Xr(e) {
            return (e = xe(e)).__chain__ = !0,
            e
        }
        function Jr(e, t) {
            return t(e)
        }
        function Zr() {
            return this
        }
        function ei(e, t) {
            return (as(e) ? n : oa)(e, yr(t, 3))
        }
        function ti(e, t) {
            return (as(e) ? r : aa)(e, yr(t, 3))
        }
        function ni(e, t) {
            return (as(e) ? c : Qt)(e, yr(t, 3))
        }
        function ri(e, t, n) {
            return t = n ? M : t,
            t = e && null == t ? e.length : t,
            sr(e, 128, M, M, M, M, t)
        }
        function ii(e, t) {
            var n;
            if ("function" != typeof t)
                throw new to("Expected a function");
            return e = Ai(e),
            function() {
                return 0 < --e && (n = t.apply(this, arguments)),
                1 >= e && (t = M),
                n
            }
        }
        function oi(e, t, n) {
            return (e = sr(e, 8, M, M, M, M, M, t = n ? M : t)).placeholder = oi.placeholder,
            e
        }
        function ai(e, t, n) {
            return (e = sr(e, 16, M, M, M, M, M, t = n ? M : t)).placeholder = ai.placeholder,
            e
        }
        function si(e, t, n) {
            function r(t) {
                var n = c
                  , r = u;
                return c = u = M,
                h = t,
                f = e.apply(r, n)
            }
            function i(e) {
                var n = e - p;
                return e -= h,
                p === M || n >= t || 0 > n || g && e >= l
            }
            function o() {
                var e = Ka();
                if (i(e))
                    return a(e);
                var n, r = ba;
                n = e - h,
                e = t - (e - p),
                n = g ? Lo(e, l - n) : e,
                d = r(o, n)
            }
            function a(e) {
                return d = M,
                v && c ? r(e) : (c = u = M,
                f)
            }
            function s() {
                var e = Ka()
                  , n = i(e);
                if (c = arguments,
                u = this,
                p = e,
                n) {
                    if (d === M)
                        return h = e = p,
                        d = ba(o, t),
                        m ? r(e) : f;
                    if (g)
                        return fa(d),
                        d = ba(o, t),
                        r(p)
                }
                return d === M && (d = ba(o, t)),
                f
            }
            var c, u, l, f, d, p, h = 0, m = !1, g = !1, v = !0;
            if ("function" != typeof e)
                throw new to("Expected a function");
            return t = Ei(t) || 0,
            vi(n) && (m = !!n.leading,
            l = (g = "maxWait"in n) ? No(Ei(n.maxWait) || 0, t) : l,
            v = "trailing"in n ? !!n.trailing : v),
            s.cancel = function() {
                d !== M && fa(d),
                h = 0,
                c = p = u = d = M
            }
            ,
            s.flush = function() {
                return d === M ? f : a(Ka())
            }
            ,
            s
        }
        function ci(e, t) {
            function n() {
                var r = arguments
                  , i = t ? t.apply(this, r) : r[0]
                  , o = n.cache;
                return o.has(i) ? o.get(i) : (r = e.apply(this, r),
                n.cache = o.set(i, r) || o,
                r)
            }
            if ("function" != typeof e || null != t && "function" != typeof t)
                throw new to("Expected a function");
            return n.cache = new (ci.Cache || Fe),
            n
        }
        function ui(e) {
            if ("function" != typeof e)
                throw new to("Expected a function");
            return function() {
                var t = arguments;
                switch (t.length) {
                case 0:
                    return !e.call(this);
                case 1:
                    return !e.call(this, t[0]);
                case 2:
                    return !e.call(this, t[0], t[1]);
                case 3:
                    return !e.call(this, t[0], t[1], t[2])
                }
                return !e.apply(this, t)
            }
        }
        function li(e, t) {
            return e === t || e != e && t != t
        }
        function fi(e) {
            return null != e && gi(e.length) && !hi(e)
        }
        function di(e) {
            return yi(e) && fi(e)
        }
        function pi(e) {
            if (!yi(e))
                return !1;
            var t = Et(e);
            return "[object Error]" == t || "[object DOMException]" == t || "string" == typeof e.message && "string" == typeof e.name && !_i(e)
        }
        function hi(e) {
            return !!vi(e) && ("[object Function]" == (e = Et(e)) || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e)
        }
        function mi(e) {
            return "number" == typeof e && e == Ai(e)
        }
        function gi(e) {
            return "number" == typeof e && -1 < e && 0 == e % 1 && 9007199254740991 >= e
        }
        function vi(e) {
            var t = typeof e;
            return null != e && ("object" == t || "function" == t)
        }
        function yi(e) {
            return null != e && "object" == typeof e
        }
        function bi(e) {
            return "number" == typeof e || yi(e) && "[object Number]" == Et(e)
        }
        function _i(e) {
            return !(!yi(e) || "[object Object]" != Et(e)) && (null === (e = yo(e)) || "function" == typeof (e = ao.call(e, "constructor") && e.constructor) && e instanceof e && oo.call(e) == lo)
        }
        function wi(e) {
            return "string" == typeof e || !as(e) && yi(e) && "[object String]" == Et(e)
        }
        function xi(e) {
            return "symbol" == typeof e || yi(e) && "[object Symbol]" == Et(e)
        }
        function ki(e) {
            if (!e)
                return [];
            if (fi(e))
                return wi(e) ? F(e) : Rn(e);
            if (ko && e[ko]) {
                e = e[ko]();
                for (var t, n = []; !(t = e.next()).done; )
                    n.push(t.value);
                return n
            }
            return ("[object Map]" == (t = ga(e)) ? D : "[object Set]" == t ? R : Ri)(e)
        }
        function Si(e) {
            return e ? (e = Ei(e)) === q || e === -q ? 1.7976931348623157e308 * (0 > e ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
        }
        function Ai(e) {
            var t = (e = Si(e)) % 1;
            return e == e ? t ? e - t : e : 0
        }
        function Ci(e) {
            return e ? dt(Ai(e), 0, 4294967295) : 0
        }
        function Ei(e) {
            if ("number" == typeof e)
                return e;
            if (xi(e))
                return U;
            if (vi(e) && (e = vi(e = "function" == typeof e.valueOf ? e.valueOf() : e) ? e + "" : e),
            "string" != typeof e)
                return 0 === e ? e : +e;
            e = e.replace(ie, "");
            var t = me.test(e);
            return t || ve.test(e) ? Ne(e.slice(2), t ? 2 : 8) : he.test(e) ? U : +e
        }
        function $i(e) {
            return Nn(e, ji(e))
        }
        function Ti(e) {
            return null == e ? "" : yn(e)
        }
        function Ii(e, t, n) {
            return (e = null == e ? M : At(e, t)) === M ? n : e
        }
        function Oi(e, t) {
            return null != e && xr(e, t, It)
        }
        function Di(e) {
            return fi(e) ? Be(e) : Wt(e)
        }
        function ji(e) {
            if (fi(e))
                e = Be(e, !0);
            else if (vi(e)) {
                var t, n = Or(e), r = [];
                for (t in e)
                    ("constructor" != t || !n && ao.call(e, t)) && r.push(t);
                e = r
            } else {
                if (t = [],
                null != e)
                    for (n in Ji(e))
                        t.push(n);
                e = t
            }
            return e
        }
        function Pi(e, t) {
            if (null == e)
                return {};
            var n = c(mr(e), function(e) {
                return [e]
            });
            return t = yr(t),
            en(e, n, function(e, n) {
                return t(e, n[0])
            })
        }
        function Ri(e) {
            return null == e ? [] : E(e, Di(e))
        }
        function Ni(e) {
            return Ms(Ti(e).toLowerCase())
        }
        function Li(e) {
            return (e = Ti(e)) && e.replace(be, Je).replace(Ce, "")
        }
        function Fi(e, t, n) {
            return e = Ti(e),
            (t = n ? M : t) === M ? Ie.test(e) ? e.match($e) || [] : e.match(le) || [] : e.match(t) || []
        }
        function Mi(e) {
            return function() {
                return e
            }
        }
        function qi(e) {
            return e
        }
        function Ui(e) {
            return Ht("function" == typeof e ? e : pt(e, 1))
        }
        function zi(e, t, r) {
            var i = Di(t)
              , o = St(t, i);
            null != r || vi(t) && (o.length || !i.length) || (r = t,
            t = e,
            e = this,
            o = St(t, Di(t)));
            var a = !(vi(r) && "chain"in r && !r.chain)
              , s = hi(e);
            return n(o, function(n) {
                var r = t[n];
                e[n] = r,
                s && (e.prototype[n] = function() {
                    var t = this.__chain__;
                    if (a || t) {
                        var n = e(this.__wrapped__);
                        return (n.__actions__ = Rn(this.__actions__)).push({
                            func: r,
                            args: arguments,
                            thisArg: e
                        }),
                        n.__chain__ = t,
                        n
                    }
                    return r.apply(e, u([this.value()], arguments))
                }
                )
            }),
            e
        }
        function Bi() {}
        function Hi(e) {
            return Tr(e) ? b(Fr(e)) : tn(e)
        }
        function Wi() {
            return []
        }
        function Vi() {
            return !1
        }
        var Qi = (_ = null == _ ? Me : tt.defaults(Me.Object(), _, tt.pick(Me, Oe))).Array
          , Ki = _.Date
          , Yi = _.Error
          , Gi = _.Function
          , Xi = _.Math
          , Ji = _.Object
          , Zi = _.RegExp
          , eo = _.String
          , to = _.TypeError
          , no = Qi.prototype
          , ro = Ji.prototype
          , io = _["__core-js_shared__"]
          , oo = Gi.prototype.toString
          , ao = ro.hasOwnProperty
          , so = 0
          , co = function() {
            var e = /[^.]+$/.exec(io && io.keys && io.keys.IE_PROTO || "");
            return e ? "Symbol(src)_1." + e : ""
        }()
          , uo = ro.toString
          , lo = oo.call(Ji)
          , fo = Me._
          , po = Zi("^" + oo.call(ao).replace(ne, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$")
          , ho = ze ? _.Buffer : M
          , mo = _.Symbol
          , go = _.Uint8Array
          , vo = ho ? ho.g : M
          , yo = j(Ji.getPrototypeOf, Ji)
          , bo = Ji.create
          , _o = ro.propertyIsEnumerable
          , wo = no.splice
          , xo = mo ? mo.isConcatSpreadable : M
          , ko = mo ? mo.iterator : M
          , So = mo ? mo.toStringTag : M
          , Ao = function() {
            try {
                var e = wr(Ji, "defineProperty");
                return e({}, "", {}),
                e
            } catch (e) {}
        }()
          , Co = _.clearTimeout !== Me.clearTimeout && _.clearTimeout
          , Eo = Ki && Ki.now !== Me.Date.now && Ki.now
          , $o = _.setTimeout !== Me.setTimeout && _.setTimeout
          , To = Xi.ceil
          , Io = Xi.floor
          , Oo = Ji.getOwnPropertySymbols
          , Do = ho ? ho.isBuffer : M
          , jo = _.isFinite
          , Po = no.join
          , Ro = j(Ji.keys, Ji)
          , No = Xi.max
          , Lo = Xi.min
          , Fo = Ki.now
          , Mo = _.parseInt
          , qo = Xi.random
          , Uo = no.reverse
          , zo = wr(_, "DataView")
          , Bo = wr(_, "Map")
          , Ho = wr(_, "Promise")
          , Wo = wr(_, "Set")
          , Vo = wr(_, "WeakMap")
          , Qo = wr(Ji, "create")
          , Ko = Vo && new Vo
          , Yo = {}
          , Go = Mr(zo)
          , Xo = Mr(Bo)
          , Jo = Mr(Ho)
          , Zo = Mr(Wo)
          , ea = Mr(Vo)
          , ta = mo ? mo.prototype : M
          , na = ta ? ta.valueOf : M
          , ra = ta ? ta.toString : M
          , ia = function() {
            function e() {}
            return function(t) {
                return vi(t) ? bo ? bo(t) : (e.prototype = t,
                t = new e,
                e.prototype = M,
                t) : {}
            }
        }();
        xe.templateSettings = {
            escape: G,
            evaluate: X,
            interpolate: J,
            variable: "",
            imports: {
                _: xe
            }
        },
        xe.prototype = ke.prototype,
        xe.prototype.constructor = xe,
        Se.prototype = ia(ke.prototype),
        Se.prototype.constructor = Se,
        Ee.prototype = ia(ke.prototype),
        Ee.prototype.constructor = Ee,
        Pe.prototype.clear = function() {
            this.__data__ = Qo ? Qo(null) : {},
            this.size = 0
        }
        ,
        Pe.prototype["delete"] = function(e) {
            return e = this.has(e) && delete this.__data__[e],
            this.size -= e ? 1 : 0,
            e
        }
        ,
        Pe.prototype.get = function(e) {
            var t = this.__data__;
            return Qo ? "__lodash_hash_undefined__" === (e = t[e]) ? M : e : ao.call(t, e) ? t[e] : M
        }
        ,
        Pe.prototype.has = function(e) {
            var t = this.__data__;
            return Qo ? t[e] !== M : ao.call(t, e)
        }
        ,
        Pe.prototype.set = function(e, t) {
            var n = this.__data__;
            return this.size += this.has(e) ? 0 : 1,
            n[e] = Qo && t === M ? "__lodash_hash_undefined__" : t,
            this
        }
        ,
        Le.prototype.clear = function() {
            this.__data__ = [],
            this.size = 0
        }
        ,
        Le.prototype["delete"] = function(e) {
            var t = this.__data__;
            return !(0 > (e = at(t, e)) || (e == t.length - 1 ? t.pop() : wo.call(t, e, 1),
            --this.size,
            0))
        }
        ,
        Le.prototype.get = function(e) {
            var t = this.__data__;
            return 0 > (e = at(t, e)) ? M : t[e][1]
        }
        ,
        Le.prototype.has = function(e) {
            return -1 < at(this.__data__, e)
        }
        ,
        Le.prototype.set = function(e, t) {
            var n = this.__data__
              , r = at(n, e);
            return 0 > r ? (++this.size,
            n.push([e, t])) : n[r][1] = t,
            this
        }
        ,
        Fe.prototype.clear = function() {
            this.size = 0,
            this.__data__ = {
                hash: new Pe,
                map: new (Bo || Le),
                string: new Pe
            }
        }
        ,
        Fe.prototype["delete"] = function(e) {
            return e = br(this, e)["delete"](e),
            this.size -= e ? 1 : 0,
            e
        }
        ,
        Fe.prototype.get = function(e) {
            return br(this, e).get(e)
        }
        ,
        Fe.prototype.has = function(e) {
            return br(this, e).has(e)
        }
        ,
        Fe.prototype.set = function(e, t) {
            var n = br(this, e)
              , r = n.size;
            return n.set(e, t),
            this.size += n.size == r ? 0 : 1,
            this
        }
        ,
        qe.prototype.add = qe.prototype.push = function(e) {
            return this.__data__.set(e, "__lodash_hash_undefined__"),
            this
        }
        ,
        qe.prototype.has = function(e) {
            return this.__data__.has(e)
        }
        ,
        Ue.prototype.clear = function() {
            this.__data__ = new Le,
            this.size = 0
        }
        ,
        Ue.prototype["delete"] = function(e) {
            var t = this.__data__;
            return e = t["delete"](e),
            this.size = t.size,
            e
        }
        ,
        Ue.prototype.get = function(e) {
            return this.__data__.get(e)
        }
        ,
        Ue.prototype.has = function(e) {
            return this.__data__.has(e)
        }
        ,
        Ue.prototype.set = function(e, t) {
            var n = this.__data__;
            if (n instanceof Le) {
                var r = n.__data__;
                if (!Bo || 199 > r.length)
                    return r.push([e, t]),
                    this.size = ++n.size,
                    this;
                n = this.__data__ = new Fe(r)
            }
            return n.set(e, t),
            this.size = n.size,
            this
        }
        ;
        var oa = Un(xt)
          , aa = Un(kt, !0)
          , sa = zn()
          , ca = zn(!0)
          , ua = Ko ? function(e, t) {
            return Ko.set(e, t),
            e
        }
        : qi
          , la = Ao ? function(e, t) {
            return Ao(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: Mi(t),
                writable: !0
            })
        }
        : qi
          , fa = Co || function(e) {
            return Me.clearTimeout(e)
        }
          , da = Wo && 1 / R(new Wo([, -0]))[1] == q ? function(e) {
            return new Wo(e)
        }
        : Bi
          , pa = Ko ? function(e) {
            return Ko.get(e)
        }
        : Bi
          , ha = Oo ? function(e) {
            return null == e ? [] : (e = Ji(e),
            o(Oo(e), function(t) {
                return _o.call(e, t)
            }))
        }
        : Wi
          , ma = Oo ? function(e) {
            for (var t = []; e; )
                u(t, ha(e)),
                e = yo(e);
            return t
        }
        : Wi
          , ga = Et;
        (zo && "[object DataView]" != ga(new zo(new ArrayBuffer(1))) || Bo && "[object Map]" != ga(new Bo) || Ho && "[object Promise]" != ga(Ho.resolve()) || Wo && "[object Set]" != ga(new Wo) || Vo && "[object WeakMap]" != ga(new Vo)) && (ga = function(e) {
            var t = Et(e);
            if (e = (e = "[object Object]" == t ? e.constructor : M) ? Mr(e) : "")
                switch (e) {
                case Go:
                    return "[object DataView]";
                case Xo:
                    return "[object Map]";
                case Jo:
                    return "[object Promise]";
                case Zo:
                    return "[object Set]";
                case ea:
                    return "[object WeakMap]"
                }
            return t
        }
        );
        var va = io ? hi : Vi
          , ya = Nr(ua)
          , ba = $o || function(e, t) {
            return Me.setTimeout(e, t)
        }
          , _a = Nr(la)
          , wa = function(e) {
            var t = (e = ci(e, function(e) {
                return 500 === t.size && t.clear(),
                e
            })).cache;
            return e
        }(function(e) {
            var t = [];
            return 46 === e.charCodeAt(0) && t.push(""),
            e.replace(te, function(e, n, r, i) {
                t.push(r ? i.replace(fe, "$1") : n || e)
            }),
            t
        })
          , xa = sn(function(e, t) {
            return di(e) ? vt(e, wt(t, 1, di, !0)) : []
        })
          , ka = sn(function(e, t) {
            var n = Vr(t);
            return di(n) && (n = M),
            di(e) ? vt(e, wt(t, 1, di, !0), yr(n, 2)) : []
        })
          , Sa = sn(function(e, t) {
            var n = Vr(t);
            return di(n) && (n = M),
            di(e) ? vt(e, wt(t, 1, di, !0), M, n) : []
        })
          , Aa = sn(function(e) {
            var t = c(e, An);
            return t.length && t[0] === e[0] ? Ot(t) : []
        })
          , Ca = sn(function(e) {
            var t = Vr(e)
              , n = c(e, An);
            return t === Vr(n) ? t = M : n.pop(),
            n.length && n[0] === e[0] ? Ot(n, yr(t, 2)) : []
        })
          , Ea = sn(function(e) {
            var t = Vr(e)
              , n = c(e, An);
            return (t = "function" == typeof t ? t : M) && n.pop(),
            n.length && n[0] === e[0] ? Ot(n, M, t) : []
        })
          , $a = sn(Qr)
          , Ta = pr(function(e, t) {
            var n = null == e ? 0 : e.length
              , r = ft(e, t);
            return rn(e, c(t, function(e) {
                return Er(e, n) ? +e : e
            }).sort(Dn)),
            r
        })
          , Ia = sn(function(e) {
            return bn(wt(e, 1, di, !0))
        })
          , Oa = sn(function(e) {
            var t = Vr(e);
            return di(t) && (t = M),
            bn(wt(e, 1, di, !0), yr(t, 2))
        })
          , Da = sn(function(e) {
            var t = "function" == typeof (t = Vr(e)) ? t : M;
            return bn(wt(e, 1, di, !0), M, t)
        })
          , ja = sn(function(e, t) {
            return di(e) ? vt(e, t) : []
        })
          , Pa = sn(function(e) {
            return kn(o(e, di))
        })
          , Ra = sn(function(e) {
            var t = Vr(e);
            return di(t) && (t = M),
            kn(o(e, di), yr(t, 2))
        })
          , Na = sn(function(e) {
            var t = "function" == typeof (t = Vr(e)) ? t : M;
            return kn(o(e, di), M, t)
        })
          , La = sn(Yr)
          , Fa = sn(function(e) {
            var t;
            return Gr(e, t = "function" == typeof (t = 1 < (t = e.length) ? e[t - 1] : M) ? (e.pop(),
            t) : M)
        })
          , Ma = pr(function(e) {
            function t(t) {
                return ft(t, e)
            }
            var n = e.length
              , r = n ? e[0] : 0
              , i = this.__wrapped__;
            return !(1 < n || this.__actions__.length) && i instanceof Ee && Er(r) ? ((i = i.slice(r, +r + (n ? 1 : 0))).__actions__.push({
                func: Jr,
                args: [t],
                thisArg: M
            }),
            new Se(i,this.__chain__).thru(function(e) {
                return n && !e.length && e.push(M),
                e
            })) : this.thru(t)
        })
          , qa = Mn(function(e, t, n) {
            ao.call(e, n) ? ++e[n] : lt(e, n, 1)
        })
          , Ua = Kn(zr)
          , za = Kn(Br)
          , Ba = Mn(function(e, t, n) {
            ao.call(e, n) ? e[n].push(t) : lt(e, n, [t])
        })
          , Ha = sn(function(t, n, r) {
            var i = -1
              , o = "function" == typeof n
              , a = fi(t) ? Qi(t.length) : [];
            return oa(t, function(t) {
                a[++i] = o ? e(n, t, r) : jt(t, n, r)
            }),
            a
        })
          , Wa = Mn(function(e, t, n) {
            lt(e, n, t)
        })
          , Va = Mn(function(e, t, n) {
            e[n ? 0 : 1].push(t)
        }, function() {
            return [[], []]
        })
          , Qa = sn(function(e, t) {
            if (null == e)
                return [];
            var n = t.length;
            return 1 < n && $r(e, t[0], t[1]) ? t = [] : 2 < n && $r(t[0], t[1], t[2]) && (t = [t[0]]),
            Jt(e, wt(t, 1), [])
        })
          , Ka = Eo || function() {
            return Me.Date.now()
        }
          , Ya = sn(function(e, t, n) {
            var r = 1;
            if (n.length) {
                var i = P(n, vr(Ya));
                r = 32 | r
            }
            return sr(e, r, t, n, i)
        })
          , Ga = sn(function(e, t, n) {
            var r = 3;
            if (n.length) {
                var i = P(n, vr(Ga));
                r = 32 | r
            }
            return sr(t, r, e, n, i)
        })
          , Xa = sn(function(e, t) {
            return gt(e, 1, t)
        })
          , Ja = sn(function(e, t, n) {
            return gt(e, Ei(t) || 0, n)
        });
        ci.Cache = Fe;
        var Za = sn(function(t, n) {
            var r = (n = 1 == n.length && as(n[0]) ? c(n[0], C(yr())) : c(wt(n, 1), C(yr()))).length;
            return sn(function(i) {
                for (var o = -1, a = Lo(i.length, r); ++o < a; )
                    i[o] = n[o].call(this, i[o]);
                return e(t, this, i)
            })
        })
          , es = sn(function(e, t) {
            return sr(e, 32, M, t, P(t, vr(es)))
        })
          , ts = sn(function(e, t) {
            return sr(e, 64, M, t, P(t, vr(ts)))
        })
          , ns = pr(function(e, t) {
            return sr(e, 256, M, M, M, t)
        })
          , rs = rr($t)
          , is = rr(function(e, t) {
            return e >= t
        })
          , os = Pt(function() {
            return arguments
        }()) ? Pt : function(e) {
            return yi(e) && ao.call(e, "callee") && !_o.call(e, "callee")
        }
          , as = Qi.isArray
          , ss = We ? C(We) : Rt
          , cs = Do || Vi
          , us = Ve ? C(Ve) : Nt
          , ls = Qe ? C(Qe) : Ft
          , fs = Ke ? C(Ke) : Ut
          , ds = Ye ? C(Ye) : zt
          , ps = Ge ? C(Ge) : Bt
          , hs = rr(Vt)
          , ms = rr(function(e, t) {
            return e <= t
        })
          , gs = qn(function(e, t) {
            if (Or(t) || fi(t))
                Nn(t, Di(t), e);
            else
                for (var n in t)
                    ao.call(t, n) && ot(e, n, t[n])
        })
          , vs = qn(function(e, t) {
            Nn(t, ji(t), e)
        })
          , ys = qn(function(e, t, n, r) {
            Nn(t, ji(t), e, r)
        })
          , bs = qn(function(e, t, n, r) {
            Nn(t, Di(t), e, r)
        })
          , _s = pr(ft)
          , ws = sn(function(e, t) {
            e = Ji(e);
            var n = -1
              , r = t.length;
            for ((i = 2 < r ? t[2] : M) && $r(t[0], t[1], i) && (r = 1); ++n < r; )
                for (var i, o = ji(i = t[n]), a = -1, s = o.length; ++a < s; ) {
                    var c = o[a]
                      , u = e[c];
                    (u === M || li(u, ro[c]) && !ao.call(e, c)) && (e[c] = i[c])
                }
            return e
        })
          , xs = sn(function(t) {
            return t.push(M, ur),
            e(Es, M, t)
        })
          , ks = Xn(function(e, t, n) {
            null != t && "function" != typeof t.toString && (t = uo.call(t)),
            e[t] = n
        }, Mi(qi))
          , Ss = Xn(function(e, t, n) {
            null != t && "function" != typeof t.toString && (t = uo.call(t)),
            ao.call(e, t) ? e[t].push(n) : e[t] = [n]
        }, yr)
          , As = sn(jt)
          , Cs = qn(function(e, t, n) {
            Gt(e, t, n)
        })
          , Es = qn(function(e, t, n, r) {
            Gt(e, t, n, r)
        })
          , $s = pr(function(e, t) {
            var n = {};
            if (null == e)
                return n;
            var r = !1;
            t = c(t, function(t) {
                return t = En(t, e),
                r || (r = 1 < t.length),
                t
            }),
            Nn(e, mr(e), n),
            r && (n = pt(n, 7, lr));
            for (var i = t.length; i--; )
                _n(n, t[i]);
            return n
        })
          , Ts = pr(function(e, t) {
            return null == e ? {} : Zt(e, t)
        })
          , Is = ar(Di)
          , Os = ar(ji)
          , Ds = Wn(function(e, t, n) {
            return t = t.toLowerCase(),
            e + (n ? Ni(t) : t)
        })
          , js = Wn(function(e, t, n) {
            return e + (n ? "-" : "") + t.toLowerCase()
        })
          , Ps = Wn(function(e, t, n) {
            return e + (n ? " " : "") + t.toLowerCase()
        })
          , Rs = Hn("toLowerCase")
          , Ns = Wn(function(e, t, n) {
            return e + (n ? "_" : "") + t.toLowerCase()
        })
          , Ls = Wn(function(e, t, n) {
            return e + (n ? " " : "") + Ms(t)
        })
          , Fs = Wn(function(e, t, n) {
            return e + (n ? " " : "") + t.toUpperCase()
        })
          , Ms = Hn("toUpperCase")
          , qs = sn(function(t, n) {
            try {
                return e(t, M, n)
            } catch (e) {
                return pi(e) ? e : new Yi(e)
            }
        })
          , Us = pr(function(e, t) {
            return n(t, function(t) {
                t = Fr(t),
                lt(e, t, Ya(e[t], e))
            }),
            e
        })
          , zs = Yn()
          , Bs = Yn(!0)
          , Hs = sn(function(e, t) {
            return function(n) {
                return jt(n, e, t)
            }
        })
          , Ws = sn(function(e, t) {
            return function(n) {
                return jt(e, n, t)
            }
        })
          , Vs = Zn(c)
          , Qs = Zn(i)
          , Ks = Zn(d)
          , Ys = nr()
          , Gs = nr(!0)
          , Xs = Jn(function(e, t) {
            return e + t
        }, 0)
          , Js = or("ceil")
          , Zs = Jn(function(e, t) {
            return e / t
        }, 1)
          , ec = or("floor")
          , tc = Jn(function(e, t) {
            return e * t
        }, 1)
          , nc = or("round")
          , rc = Jn(function(e, t) {
            return e - t
        }, 0);
        return xe.after = function(e, t) {
            if ("function" != typeof t)
                throw new to("Expected a function");
            return e = Ai(e),
            function() {
                if (1 > --e)
                    return t.apply(this, arguments)
            }
        }
        ,
        xe.ary = ri,
        xe.assign = gs,
        xe.assignIn = vs,
        xe.assignInWith = ys,
        xe.assignWith = bs,
        xe.at = _s,
        xe.before = ii,
        xe.bind = Ya,
        xe.bindAll = Us,
        xe.bindKey = Ga,
        xe.castArray = function() {
            if (!arguments.length)
                return [];
            var e = arguments[0];
            return as(e) ? e : [e]
        }
        ,
        xe.chain = Xr,
        xe.chunk = function(e, t, n) {
            if (t = (n ? $r(e, t, n) : t === M) ? 1 : No(Ai(t), 0),
            !(n = null == e ? 0 : e.length) || 1 > t)
                return [];
            for (var r = 0, i = 0, o = Qi(To(n / t)); r < n; )
                o[i++] = dn(e, r, r += t);
            return o
        }
        ,
        xe.compact = function(e) {
            for (var t = -1, n = null == e ? 0 : e.length, r = 0, i = []; ++t < n; ) {
                var o = e[t];
                o && (i[r++] = o)
            }
            return i
        }
        ,
        xe.concat = function() {
            var e = arguments.length;
            if (!e)
                return [];
            for (var t = Qi(e - 1), n = arguments[0]; e--; )
                t[e - 1] = arguments[e];
            return u(as(n) ? Rn(n) : [n], wt(t, 1))
        }
        ,
        xe.cond = function(t) {
            var n = null == t ? 0 : t.length
              , r = yr();
            return t = n ? c(t, function(e) {
                if ("function" != typeof e[1])
                    throw new to("Expected a function");
                return [r(e[0]), e[1]]
            }) : [],
            sn(function(r) {
                for (var i = -1; ++i < n; ) {
                    var o = t[i];
                    if (e(o[0], this, r))
                        return e(o[1], this, r)
                }
            })
        }
        ,
        xe.conforms = function(e) {
            return ht(pt(e, 1))
        }
        ,
        xe.constant = Mi,
        xe.countBy = qa,
        xe.create = function(e, t) {
            var n = ia(e);
            return null == t ? n : ct(n, t)
        }
        ,
        xe.curry = oi,
        xe.curryRight = ai,
        xe.debounce = si,
        xe.defaults = ws,
        xe.defaultsDeep = xs,
        xe.defer = Xa,
        xe.delay = Ja,
        xe.difference = xa,
        xe.differenceBy = ka,
        xe.differenceWith = Sa,
        xe.drop = function(e, t, n) {
            var r = null == e ? 0 : e.length;
            return r ? dn(e, 0 > (t = n || t === M ? 1 : Ai(t)) ? 0 : t, r) : []
        }
        ,
        xe.dropRight = function(e, t, n) {
            var r = null == e ? 0 : e.length;
            return r ? dn(e, 0, 0 > (t = r - (t = n || t === M ? 1 : Ai(t))) ? 0 : t) : []
        }
        ,
        xe.dropRightWhile = function(e, t) {
            return e && e.length ? wn(e, yr(t, 3), !0, !0) : []
        }
        ,
        xe.dropWhile = function(e, t) {
            return e && e.length ? wn(e, yr(t, 3), !0) : []
        }
        ,
        xe.fill = function(e, t, n, r) {
            var i = null == e ? 0 : e.length;
            if (!i)
                return [];
            for (n && "number" != typeof n && $r(e, t, n) && (n = 0,
            r = i),
            i = e.length,
            0 > (n = Ai(n)) && (n = -n > i ? 0 : i + n),
            0 > (r = r === M || r > i ? i : Ai(r)) && (r += i),
            r = n > r ? 0 : Ci(r); n < r; )
                e[n++] = t;
            return e
        }
        ,
        xe.filter = function(e, t) {
            return (as(e) ? o : _t)(e, yr(t, 3))
        }
        ,
        xe.flatMap = function(e, t) {
            return wt(ni(e, t), 1)
        }
        ,
        xe.flatMapDeep = function(e, t) {
            return wt(ni(e, t), q)
        }
        ,
        xe.flatMapDepth = function(e, t, n) {
            return n = n === M ? 1 : Ai(n),
            wt(ni(e, t), n)
        }
        ,
        xe.flatten = Hr,
        xe.flattenDeep = function(e) {
            return null != e && e.length ? wt(e, q) : []
        }
        ,
        xe.flattenDepth = function(e, t) {
            return null != e && e.length ? wt(e, t = t === M ? 1 : Ai(t)) : []
        }
        ,
        xe.flip = function(e) {
            return sr(e, 512)
        }
        ,
        xe.flow = zs,
        xe.flowRight = Bs,
        xe.fromPairs = function(e) {
            for (var t = -1, n = null == e ? 0 : e.length, r = {}; ++t < n; ) {
                var i = e[t];
                r[i[0]] = i[1]
            }
            return r
        }
        ,
        xe.functions = function(e) {
            return null == e ? [] : St(e, Di(e))
        }
        ,
        xe.functionsIn = function(e) {
            return null == e ? [] : St(e, ji(e))
        }
        ,
        xe.groupBy = Ba,
        xe.initial = function(e) {
            return null != e && e.length ? dn(e, 0, -1) : []
        }
        ,
        xe.intersection = Aa,
        xe.intersectionBy = Ca,
        xe.intersectionWith = Ea,
        xe.invert = ks,
        xe.invertBy = Ss,
        xe.invokeMap = Ha,
        xe.iteratee = Ui,
        xe.keyBy = Wa,
        xe.keys = Di,
        xe.keysIn = ji,
        xe.map = ni,
        xe.mapKeys = function(e, t) {
            var n = {};
            return t = yr(t, 3),
            xt(e, function(e, r, i) {
                lt(n, t(e, r, i), e)
            }),
            n
        }
        ,
        xe.mapValues = function(e, t) {
            var n = {};
            return t = yr(t, 3),
            xt(e, function(e, r, i) {
                lt(n, r, t(e, r, i))
            }),
            n
        }
        ,
        xe.matches = function(e) {
            return Kt(pt(e, 1))
        }
        ,
        xe.matchesProperty = function(e, t) {
            return Yt(e, pt(t, 1))
        }
        ,
        xe.memoize = ci,
        xe.merge = Cs,
        xe.mergeWith = Es,
        xe.method = Hs,
        xe.methodOf = Ws,
        xe.mixin = zi,
        xe.negate = ui,
        xe.nthArg = function(e) {
            return e = Ai(e),
            sn(function(t) {
                return Xt(t, e)
            })
        }
        ,
        xe.omit = $s,
        xe.omitBy = function(e, t) {
            return Pi(e, ui(yr(t)))
        }
        ,
        xe.once = function(e) {
            return ii(2, e)
        }
        ,
        xe.orderBy = function(e, t, n, r) {
            return null == e ? [] : (as(t) || (t = null == t ? [] : [t]),
            as(n = r ? M : n) || (n = null == n ? [] : [n]),
            Jt(e, t, n))
        }
        ,
        xe.over = Vs,
        xe.overArgs = Za,
        xe.overEvery = Qs,
        xe.overSome = Ks,
        xe.partial = es,
        xe.partialRight = ts,
        xe.partition = Va,
        xe.pick = Ts,
        xe.pickBy = Pi,
        xe.property = Hi,
        xe.propertyOf = function(e) {
            return function(t) {
                return null == e ? M : At(e, t)
            }
        }
        ,
        xe.pull = $a,
        xe.pullAll = Qr,
        xe.pullAllBy = function(e, t, n) {
            return e && e.length && t && t.length ? nn(e, t, yr(n, 2)) : e
        }
        ,
        xe.pullAllWith = function(e, t, n) {
            return e && e.length && t && t.length ? nn(e, t, M, n) : e
        }
        ,
        xe.pullAt = Ta,
        xe.range = Ys,
        xe.rangeRight = Gs,
        xe.rearg = ns,
        xe.reject = function(e, t) {
            return (as(e) ? o : _t)(e, ui(yr(t, 3)))
        }
        ,
        xe.remove = function(e, t) {
            var n = [];
            if (!e || !e.length)
                return n;
            var r = -1
              , i = []
              , o = e.length;
            for (t = yr(t, 3); ++r < o; ) {
                var a = e[r];
                t(a, r, e) && (n.push(a),
                i.push(r))
            }
            return rn(e, i),
            n
        }
        ,
        xe.rest = function(e, t) {
            if ("function" != typeof e)
                throw new to("Expected a function");
            return sn(e, t = t === M ? t : Ai(t))
        }
        ,
        xe.reverse = Kr,
        xe.sampleSize = function(e, t, n) {
            return t = (n ? $r(e, t, n) : t === M) ? 1 : Ai(t),
            (as(e) ? Xe : un)(e, t)
        }
        ,
        xe.set = function(e, t, n) {
            return null == e ? e : ln(e, t, n)
        }
        ,
        xe.setWith = function(e, t, n, r) {
            return r = "function" == typeof r ? r : M,
            null == e ? e : ln(e, t, n, r)
        }
        ,
        xe.shuffle = function(e) {
            return (as(e) ? rt : fn)(e)
        }
        ,
        xe.slice = function(e, t, n) {
            var r = null == e ? 0 : e.length;
            return r ? (n && "number" != typeof n && $r(e, t, n) ? (t = 0,
            n = r) : (t = null == t ? 0 : Ai(t),
            n = n === M ? r : Ai(n)),
            dn(e, t, n)) : []
        }
        ,
        xe.sortBy = Qa,
        xe.sortedUniq = function(e) {
            return e && e.length ? gn(e) : []
        }
        ,
        xe.sortedUniqBy = function(e, t) {
            return e && e.length ? gn(e, yr(t, 2)) : []
        }
        ,
        xe.split = function(e, t, n) {
            return n && "number" != typeof n && $r(e, t, n) && (t = n = M),
            (n = n === M ? 4294967295 : n >>> 0) ? (e = Ti(e)) && ("string" == typeof t || null != t && !fs(t)) && (!(t = yn(t)) && Te.test(e)) ? $n(F(e), 0, n) : e.split(t, n) : []
        }
        ,
        xe.spread = function(t, n) {
            if ("function" != typeof t)
                throw new to("Expected a function");
            return n = null == n ? 0 : No(Ai(n), 0),
            sn(function(r) {
                var i = r[n];
                return r = $n(r, 0, n),
                i && u(r, i),
                e(t, this, r)
            })
        }
        ,
        xe.tail = function(e) {
            var t = null == e ? 0 : e.length;
            return t ? dn(e, 1, t) : []
        }
        ,
        xe.take = function(e, t, n) {
            return e && e.length ? dn(e, 0, 0 > (t = n || t === M ? 1 : Ai(t)) ? 0 : t) : []
        }
        ,
        xe.takeRight = function(e, t, n) {
            var r = null == e ? 0 : e.length;
            return r ? dn(e, 0 > (t = r - (t = n || t === M ? 1 : Ai(t))) ? 0 : t, r) : []
        }
        ,
        xe.takeRightWhile = function(e, t) {
            return e && e.length ? wn(e, yr(t, 3), !1, !0) : []
        }
        ,
        xe.takeWhile = function(e, t) {
            return e && e.length ? wn(e, yr(t, 3)) : []
        }
        ,
        xe.tap = function(e, t) {
            return t(e),
            e
        }
        ,
        xe.throttle = function(e, t, n) {
            var r = !0
              , i = !0;
            if ("function" != typeof e)
                throw new to("Expected a function");
            return vi(n) && (r = "leading"in n ? !!n.leading : r,
            i = "trailing"in n ? !!n.trailing : i),
            si(e, t, {
                leading: r,
                maxWait: t,
                trailing: i
            })
        }
        ,
        xe.thru = Jr,
        xe.toArray = ki,
        xe.toPairs = Is,
        xe.toPairsIn = Os,
        xe.toPath = function(e) {
            return as(e) ? c(e, Fr) : xi(e) ? [e] : Rn(wa(Ti(e)))
        }
        ,
        xe.toPlainObject = $i,
        xe.transform = function(e, t, r) {
            var i = as(e)
              , o = i || cs(e) || ps(e);
            if (t = yr(t, 4),
            null == r) {
                var a = e && e.constructor;
                r = o ? i ? new a : [] : vi(e) && hi(a) ? ia(yo(e)) : {}
            }
            return (o ? n : xt)(e, function(e, n, i) {
                return t(r, e, n, i)
            }),
            r
        }
        ,
        xe.unary = function(e) {
            return ri(e, 1)
        }
        ,
        xe.union = Ia,
        xe.unionBy = Oa,
        xe.unionWith = Da,
        xe.uniq = function(e) {
            return e && e.length ? bn(e) : []
        }
        ,
        xe.uniqBy = function(e, t) {
            return e && e.length ? bn(e, yr(t, 2)) : []
        }
        ,
        xe.uniqWith = function(e, t) {
            return t = "function" == typeof t ? t : M,
            e && e.length ? bn(e, M, t) : []
        }
        ,
        xe.unset = function(e, t) {
            return null == e || _n(e, t)
        }
        ,
        xe.unzip = Yr,
        xe.unzipWith = Gr,
        xe.update = function(e, t, n) {
            return null == e ? e : ln(e, t, Cn(n)(At(e, t)), void 0)
        }
        ,
        xe.updateWith = function(e, t, n, r) {
            return r = "function" == typeof r ? r : M,
            null != e && (e = ln(e, t, Cn(n)(At(e, t)), r)),
            e
        }
        ,
        xe.values = Ri,
        xe.valuesIn = function(e) {
            return null == e ? [] : E(e, ji(e))
        }
        ,
        xe.without = ja,
        xe.words = Fi,
        xe.wrap = function(e, t) {
            return es(Cn(t), e)
        }
        ,
        xe.xor = Pa,
        xe.xorBy = Ra,
        xe.xorWith = Na,
        xe.zip = La,
        xe.zipObject = function(e, t) {
            return Sn(e || [], t || [], ot)
        }
        ,
        xe.zipObjectDeep = function(e, t) {
            return Sn(e || [], t || [], ln)
        }
        ,
        xe.zipWith = Fa,
        xe.entries = Is,
        xe.entriesIn = Os,
        xe.extend = vs,
        xe.extendWith = ys,
        zi(xe, xe),
        xe.add = Xs,
        xe.attempt = qs,
        xe.camelCase = Ds,
        xe.capitalize = Ni,
        xe.ceil = Js,
        xe.clamp = function(e, t, n) {
            return n === M && (n = t,
            t = M),
            n !== M && (n = (n = Ei(n)) == n ? n : 0),
            t !== M && (t = (t = Ei(t)) == t ? t : 0),
            dt(Ei(e), t, n)
        }
        ,
        xe.clone = function(e) {
            return pt(e, 4)
        }
        ,
        xe.cloneDeep = function(e) {
            return pt(e, 5)
        }
        ,
        xe.cloneDeepWith = function(e, t) {
            return pt(e, 5, t = "function" == typeof t ? t : M)
        }
        ,
        xe.cloneWith = function(e, t) {
            return pt(e, 4, t = "function" == typeof t ? t : M)
        }
        ,
        xe.conformsTo = function(e, t) {
            return null == t || mt(e, t, Di(t))
        }
        ,
        xe.deburr = Li,
        xe.defaultTo = function(e, t) {
            return null == e || e != e ? t : e
        }
        ,
        xe.divide = Zs,
        xe.endsWith = function(e, t, n) {
            e = Ti(e),
            t = yn(t);
            var r = e.length;
            r = n = n === M ? r : dt(Ai(n), 0, r);
            return 0 <= (n -= t.length) && e.slice(n, r) == t
        }
        ,
        xe.eq = li,
        xe.escape = function(e) {
            return (e = Ti(e)) && Y.test(e) ? e.replace(Q, Ze) : e
        }
        ,
        xe.escapeRegExp = function(e) {
            return (e = Ti(e)) && re.test(e) ? e.replace(ne, "\\$&") : e
        }
        ,
        xe.every = function(e, t, n) {
            var r = as(e) ? i : yt;
            return n && $r(e, t, n) && (t = M),
            r(e, yr(t, 3))
        }
        ,
        xe.find = Ua,
        xe.findIndex = zr,
        xe.findKey = function(e, t) {
            return p(e, yr(t, 3), xt)
        }
        ,
        xe.findLast = za,
        xe.findLastIndex = Br,
        xe.findLastKey = function(e, t) {
            return p(e, yr(t, 3), kt)
        }
        ,
        xe.floor = ec,
        xe.forEach = ei,
        xe.forEachRight = ti,
        xe.forIn = function(e, t) {
            return null == e ? e : sa(e, yr(t, 3), ji)
        }
        ,
        xe.forInRight = function(e, t) {
            return null == e ? e : ca(e, yr(t, 3), ji)
        }
        ,
        xe.forOwn = function(e, t) {
            return e && xt(e, yr(t, 3))
        }
        ,
        xe.forOwnRight = function(e, t) {
            return e && kt(e, yr(t, 3))
        }
        ,
        xe.get = Ii,
        xe.gt = rs,
        xe.gte = is,
        xe.has = function(e, t) {
            return null != e && xr(e, t, Tt)
        }
        ,
        xe.hasIn = Oi,
        xe.head = Wr,
        xe.identity = qi,
        xe.includes = function(e, t, n, r) {
            return e = fi(e) ? e : Ri(e),
            n = n && !r ? Ai(n) : 0,
            r = e.length,
            0 > n && (n = No(r + n, 0)),
            wi(e) ? n <= r && -1 < e.indexOf(t, n) : !!r && -1 < m(e, t, n)
        }
        ,
        xe.indexOf = function(e, t, n) {
            var r = null == e ? 0 : e.length;
            return r ? (0 > (n = null == n ? 0 : Ai(n)) && (n = No(r + n, 0)),
            m(e, t, n)) : -1
        }
        ,
        xe.inRange = function(e, t, n) {
            return t = Si(t),
            n === M ? (n = t,
            t = 0) : n = Si(n),
            (e = Ei(e)) >= Lo(t, n) && e < No(t, n)
        }
        ,
        xe.invoke = As,
        xe.isArguments = os,
        xe.isArray = as,
        xe.isArrayBuffer = ss,
        xe.isArrayLike = fi,
        xe.isArrayLikeObject = di,
        xe.isBoolean = function(e) {
            return !0 === e || !1 === e || yi(e) && "[object Boolean]" == Et(e)
        }
        ,
        xe.isBuffer = cs,
        xe.isDate = us,
        xe.isElement = function(e) {
            return yi(e) && 1 === e.nodeType && !_i(e)
        }
        ,
        xe.isEmpty = function(e) {
            if (null == e)
                return !0;
            if (fi(e) && (as(e) || "string" == typeof e || "function" == typeof e.splice || cs(e) || ps(e) || os(e)))
                return !e.length;
            var t = ga(e);
            if ("[object Map]" == t || "[object Set]" == t)
                return !e.size;
            if (Or(e))
                return !Wt(e).length;
            for (var n in e)
                if (ao.call(e, n))
                    return !1;
            return !0
        }
        ,
        xe.isEqual = function(e, t) {
            return Lt(e, t)
        }
        ,
        xe.isEqualWith = function(e, t, n) {
            var r = (n = "function" == typeof n ? n : M) ? n(e, t) : M;
            return r === M ? Lt(e, t, M, n) : !!r
        }
        ,
        xe.isError = pi,
        xe.isFinite = function(e) {
            return "number" == typeof e && jo(e)
        }
        ,
        xe.isFunction = hi,
        xe.isInteger = mi,
        xe.isLength = gi,
        xe.isMap = ls,
        xe.isMatch = function(e, t) {
            return e === t || Mt(e, t, _r(t))
        }
        ,
        xe.isMatchWith = function(e, t, n) {
            return n = "function" == typeof n ? n : M,
            Mt(e, t, _r(t), n)
        }
        ,
        xe.isNaN = function(e) {
            return bi(e) && e != +e
        }
        ,
        xe.isNative = function(e) {
            if (va(e))
                throw new Yi("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
            return qt(e)
        }
        ,
        xe.isNil = function(e) {
            return null == e
        }
        ,
        xe.isNull = function(e) {
            return null === e
        }
        ,
        xe.isNumber = bi,
        xe.isObject = vi,
        xe.isObjectLike = yi,
        xe.isPlainObject = _i,
        xe.isRegExp = fs,
        xe.isSafeInteger = function(e) {
            return mi(e) && -9007199254740991 <= e && 9007199254740991 >= e
        }
        ,
        xe.isSet = ds,
        xe.isString = wi,
        xe.isSymbol = xi,
        xe.isTypedArray = ps,
        xe.isUndefined = function(e) {
            return e === M
        }
        ,
        xe.isWeakMap = function(e) {
            return yi(e) && "[object WeakMap]" == ga(e)
        }
        ,
        xe.isWeakSet = function(e) {
            return yi(e) && "[object WeakSet]" == Et(e)
        }
        ,
        xe.join = function(e, t) {
            return null == e ? "" : Po.call(e, t)
        }
        ,
        xe.kebabCase = js,
        xe.last = Vr,
        xe.lastIndexOf = function(e, t, n) {
            var r = null == e ? 0 : e.length;
            if (!r)
                return -1;
            var i = r;
            if (n !== M && (i = 0 > (i = Ai(n)) ? No(r + i, 0) : Lo(i, r - 1)),
            t == t) {
                for (n = i + 1; n-- && e[n] !== t; )
                    ;
                e = n
            } else
                e = h(e, v, i, !0);
            return e
        }
        ,
        xe.lowerCase = Ps,
        xe.lowerFirst = Rs,
        xe.lt = hs,
        xe.lte = ms,
        xe.max = function(e) {
            return e && e.length ? bt(e, qi, $t) : M
        }
        ,
        xe.maxBy = function(e, t) {
            return e && e.length ? bt(e, yr(t, 2), $t) : M
        }
        ,
        xe.mean = function(e) {
            return y(e, qi)
        }
        ,
        xe.meanBy = function(e, t) {
            return y(e, yr(t, 2))
        }
        ,
        xe.min = function(e) {
            return e && e.length ? bt(e, qi, Vt) : M
        }
        ,
        xe.minBy = function(e, t) {
            return e && e.length ? bt(e, yr(t, 2), Vt) : M
        }
        ,
        xe.stubArray = Wi,
        xe.stubFalse = Vi,
        xe.stubObject = function() {
            return {}
        }
        ,
        xe.stubString = function() {
            return ""
        }
        ,
        xe.stubTrue = function() {
            return !0
        }
        ,
        xe.multiply = tc,
        xe.nth = function(e, t) {
            return e && e.length ? Xt(e, Ai(t)) : M
        }
        ,
        xe.noConflict = function() {
            return Me._ === this && (Me._ = fo),
            this
        }
        ,
        xe.noop = Bi,
        xe.now = Ka,
        xe.pad = function(e, t, n) {
            e = Ti(e);
            var r = (t = Ai(t)) ? L(e) : 0;
            return !t || r >= t ? e : er(Io(t = (t - r) / 2), n) + e + er(To(t), n)
        }
        ,
        xe.padEnd = function(e, t, n) {
            e = Ti(e);
            var r = (t = Ai(t)) ? L(e) : 0;
            return t && r < t ? e + er(t - r, n) : e
        }
        ,
        xe.padStart = function(e, t, n) {
            e = Ti(e);
            var r = (t = Ai(t)) ? L(e) : 0;
            return t && r < t ? er(t - r, n) + e : e
        }
        ,
        xe.parseInt = function(e, t, n) {
            return n || null == t ? t = 0 : t && (t = +t),
            Mo(Ti(e).replace(oe, ""), t || 0)
        }
        ,
        xe.random = function(e, t, n) {
            if (n && "boolean" != typeof n && $r(e, t, n) && (t = n = M),
            n === M && ("boolean" == typeof t ? (n = t,
            t = M) : "boolean" == typeof e && (n = e,
            e = M)),
            e === M && t === M ? (e = 0,
            t = 1) : (e = Si(e),
            t === M ? (t = e,
            e = 0) : t = Si(t)),
            e > t) {
                var r = e;
                e = t,
                t = r
            }
            return n || e % 1 || t % 1 ? (n = qo(),
            Lo(e + n * (t - e + Re("1e-" + ((n + "").length - 1))), t)) : on(e, t)
        }
        ,
        xe.reduce = function(e, t, n) {
            var r = as(e) ? l : w
              , i = 3 > arguments.length;
            return r(e, yr(t, 4), n, i, oa)
        }
        ,
        xe.reduceRight = function(e, t, n) {
            var r = as(e) ? f : w
              , i = 3 > arguments.length;
            return r(e, yr(t, 4), n, i, aa)
        }
        ,
        xe.repeat = function(e, t, n) {
            return t = (n ? $r(e, t, n) : t === M) ? 1 : Ai(t),
            an(Ti(e), t)
        }
        ,
        xe.replace = function() {
            var e = arguments
              , t = Ti(e[0]);
            return 3 > e.length ? t : t.replace(e[1], e[2])
        }
        ,
        xe.result = function(e, t, n) {
            var r = -1
              , i = (t = En(t, e)).length;
            for (i || (i = 1,
            e = M); ++r < i; ) {
                var o = null == e ? M : e[Fr(t[r])];
                o === M && (r = i,
                o = n),
                e = hi(o) ? o.call(e) : o
            }
            return e
        }
        ,
        xe.round = nc,
        xe.runInContext = nt,
        xe.sample = function(e) {
            return (as(e) ? He : cn)(e)
        }
        ,
        xe.size = function(e) {
            if (null == e)
                return 0;
            if (fi(e))
                return wi(e) ? L(e) : e.length;
            var t = ga(e);
            return "[object Map]" == t || "[object Set]" == t ? e.size : Wt(e).length
        }
        ,
        xe.snakeCase = Ns,
        xe.some = function(e, t, n) {
            var r = as(e) ? d : pn;
            return n && $r(e, t, n) && (t = M),
            r(e, yr(t, 3))
        }
        ,
        xe.sortedIndex = function(e, t) {
            return hn(e, t)
        }
        ,
        xe.sortedIndexBy = function(e, t, n) {
            return mn(e, t, yr(n, 2))
        }
        ,
        xe.sortedIndexOf = function(e, t) {
            var n = null == e ? 0 : e.length;
            if (n) {
                var r = hn(e, t);
                if (r < n && li(e[r], t))
                    return r
            }
            return -1
        }
        ,
        xe.sortedLastIndex = function(e, t) {
            return hn(e, t, !0)
        }
        ,
        xe.sortedLastIndexBy = function(e, t, n) {
            return mn(e, t, yr(n, 2), !0)
        }
        ,
        xe.sortedLastIndexOf = function(e, t) {
            if (null != e && e.length) {
                var n = hn(e, t, !0) - 1;
                if (li(e[n], t))
                    return n
            }
            return -1
        }
        ,
        xe.startCase = Ls,
        xe.startsWith = function(e, t, n) {
            return e = Ti(e),
            n = null == n ? 0 : dt(Ai(n), 0, e.length),
            t = yn(t),
            e.slice(n, n + t.length) == t
        }
        ,
        xe.subtract = rc,
        xe.sum = function(e) {
            return e && e.length ? k(e, qi) : 0
        }
        ,
        xe.sumBy = function(e, t) {
            return e && e.length ? k(e, yr(t, 2)) : 0
        }
        ,
        xe.template = function(e, t, n) {
            var r = xe.templateSettings;
            n && $r(e, t, n) && (t = M),
            e = Ti(e),
            t = ys({}, t, r, cr);
            var i, o, a = Di(n = ys({}, t.imports, r.imports, cr)), s = E(n, a), c = 0;
            n = t.interpolate || _e;
            var u = "__p+='";
            n = Zi((t.escape || _e).source + "|" + n.source + "|" + (n === J ? de : _e).source + "|" + (t.evaluate || _e).source + "|$", "g");
            var l = ao.call(t, "sourceURL") ? "//# sourceURL=" + (t.sourceURL + "").replace(/[\r\n]/g, " ") + "\n" : "";
            if (e.replace(n, function(t, n, r, a, s, l) {
                return r || (r = a),
                u += e.slice(c, l).replace(we, O),
                n && (i = !0,
                u += "'+__e(" + n + ")+'"),
                s && (o = !0,
                u += "';" + s + ";\n__p+='"),
                r && (u += "'+((__t=(" + r + "))==null?'':__t)+'"),
                c = l + t.length,
                t
            }),
            u += "';",
            (t = ao.call(t, "variable") && t.variable) || (u = "with(obj){" + u + "}"),
            u = (o ? u.replace(B, "") : u).replace(H, "$1").replace(W, "$1;"),
            u = "function(" + (t || "obj") + "){" + (t ? "" : "obj||(obj={});") + "var __t,__p=''" + (i ? ",__e=_.escape" : "") + (o ? ",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}" : ";") + u + "return __p}",
            (t = qs(function() {
                return Gi(a, l + "return " + u).apply(M, s)
            })).source = u,
            pi(t))
                throw t;
            return t
        }
        ,
        xe.times = function(e, t) {
            if (1 > (e = Ai(e)) || 9007199254740991 < e)
                return [];
            var n = 4294967295
              , r = Lo(e, 4294967295);
            for (e -= 4294967295,
            r = S(r, t = yr(t)); ++n < e; )
                t(n);
            return r
        }
        ,
        xe.toFinite = Si,
        xe.toInteger = Ai,
        xe.toLength = Ci,
        xe.toLower = function(e) {
            return Ti(e).toLowerCase()
        }
        ,
        xe.toNumber = Ei,
        xe.toSafeInteger = function(e) {
            return e ? dt(Ai(e), -9007199254740991, 9007199254740991) : 0 === e ? e : 0
        }
        ,
        xe.toString = Ti,
        xe.toUpper = function(e) {
            return Ti(e).toUpperCase()
        }
        ,
        xe.trim = function(e, t, n) {
            return (e = Ti(e)) && (n || t === M) ? e.replace(ie, "") : e && (t = yn(t)) ? $n(e = F(e), t = T(e, n = F(t)), n = I(e, n) + 1).join("") : e
        }
        ,
        xe.trimEnd = function(e, t, n) {
            return (e = Ti(e)) && (n || t === M) ? e.replace(ae, "") : e && (t = yn(t)) ? $n(e = F(e), 0, t = I(e, F(t)) + 1).join("") : e
        }
        ,
        xe.trimStart = function(e, t, n) {
            return (e = Ti(e)) && (n || t === M) ? e.replace(oe, "") : e && (t = yn(t)) ? $n(e = F(e), t = T(e, F(t))).join("") : e
        }
        ,
        xe.truncate = function(e, t) {
            var n = 30
              , r = "...";
            if (vi(t)) {
                var i = "separator"in t ? t.separator : i;
                n = "length"in t ? Ai(t.length) : n,
                r = "omission"in t ? yn(t.omission) : r
            }
            var o = (e = Ti(e)).length;
            if (Te.test(e)) {
                var a = F(e);
                o = a.length
            }
            if (n >= o)
                return e;
            if (1 > (o = n - L(r)))
                return r;
            if (n = a ? $n(a, 0, o).join("") : e.slice(0, o),
            i === M)
                return n + r;
            if (a && (o += n.length - o),
            fs(i)) {
                if (e.slice(o).search(i)) {
                    var s = n;
                    for (i.global || (i = Zi(i.source, Ti(pe.exec(i)) + "g")),
                    i.lastIndex = 0; a = i.exec(s); )
                        var c = a.index;
                    n = n.slice(0, c === M ? o : c)
                }
            } else
                e.indexOf(yn(i), o) != o && (-1 < (i = n.lastIndexOf(i)) && (n = n.slice(0, i)));
            return n + r
        }
        ,
        xe.unescape = function(e) {
            return (e = Ti(e)) && K.test(e) ? e.replace(V, et) : e
        }
        ,
        xe.uniqueId = function(e) {
            var t = ++so;
            return Ti(e) + t
        }
        ,
        xe.upperCase = Fs,
        xe.upperFirst = Ms,
        xe.each = ei,
        xe.eachRight = ti,
        xe.first = Wr,
        zi(xe, function() {
            var e = {};
            return xt(xe, function(t, n) {
                ao.call(xe.prototype, n) || (e[n] = t)
            }),
            e
        }(), {
            chain: !1
        }),
        xe.VERSION = "4.17.14",
        n("bind bindKey curry curryRight partial partialRight".split(" "), function(e) {
            xe[e].placeholder = xe
        }),
        n(["drop", "take"], function(e, t) {
            Ee.prototype[e] = function(n) {
                n = n === M ? 1 : No(Ai(n), 0);
                var r = this.__filtered__ && !t ? new Ee(this) : this.clone();
                return r.__filtered__ ? r.__takeCount__ = Lo(n, r.__takeCount__) : r.__views__.push({
                    size: Lo(n, 4294967295),
                    type: e + (0 > r.__dir__ ? "Right" : "")
                }),
                r
            }
            ,
            Ee.prototype[e + "Right"] = function(t) {
                return this.reverse()[e](t).reverse()
            }
        }),
        n(["filter", "map", "takeWhile"], function(e, t) {
            var n = t + 1
              , r = 1 == n || 3 == n;
            Ee.prototype[e] = function(e) {
                var t = this.clone();
                return t.__iteratees__.push({
                    iteratee: yr(e, 3),
                    type: n
                }),
                t.__filtered__ = t.__filtered__ || r,
                t
            }
        }),
        n(["head", "last"], function(e, t) {
            var n = "take" + (t ? "Right" : "");
            Ee.prototype[e] = function() {
                return this[n](1).value()[0]
            }
        }),
        n(["initial", "tail"], function(e, t) {
            var n = "drop" + (t ? "" : "Right");
            Ee.prototype[e] = function() {
                return this.__filtered__ ? new Ee(this) : this[n](1)
            }
        }),
        Ee.prototype.compact = function() {
            return this.filter(qi)
        }
        ,
        Ee.prototype.find = function(e) {
            return this.filter(e).head()
        }
        ,
        Ee.prototype.findLast = function(e) {
            return this.reverse().find(e)
        }
        ,
        Ee.prototype.invokeMap = sn(function(e, t) {
            return "function" == typeof e ? new Ee(this) : this.map(function(n) {
                return jt(n, e, t)
            })
        }),
        Ee.prototype.reject = function(e) {
            return this.filter(ui(yr(e)))
        }
        ,
        Ee.prototype.slice = function(e, t) {
            e = Ai(e);
            var n = this;
            return n.__filtered__ && (0 < e || 0 > t) ? new Ee(n) : (0 > e ? n = n.takeRight(-e) : e && (n = n.drop(e)),
            t !== M && (n = 0 > (t = Ai(t)) ? n.dropRight(-t) : n.take(t - e)),
            n)
        }
        ,
        Ee.prototype.takeRightWhile = function(e) {
            return this.reverse().takeWhile(e).reverse()
        }
        ,
        Ee.prototype.toArray = function() {
            return this.take(4294967295)
        }
        ,
        xt(Ee.prototype, function(e, t) {
            var n = /^(?:filter|find|map|reject)|While$/.test(t)
              , r = /^(?:head|last)$/.test(t)
              , i = xe[r ? "take" + ("last" == t ? "Right" : "") : t]
              , o = r || /^find/.test(t);
            i && (xe.prototype[t] = function() {
                function t(e) {
                    return e = i.apply(xe, u([e], s)),
                    r && d ? e[0] : e
                }
                var a = this.__wrapped__
                  , s = r ? [1] : arguments
                  , c = a instanceof Ee
                  , l = s[0]
                  , f = c || as(a);
                f && n && "function" == typeof l && 1 != l.length && (c = f = !1);
                var d = this.__chain__
                  , p = !!this.__actions__.length;
                l = o && !d,
                c = c && !p;
                return !o && f ? (a = c ? a : new Ee(this),
                (a = e.apply(a, s)).__actions__.push({
                    func: Jr,
                    args: [t],
                    thisArg: M
                }),
                new Se(a,d)) : l && c ? e.apply(this, s) : (a = this.thru(t),
                l ? r ? a.value()[0] : a.value() : a)
            }
            )
        }),
        n("pop push shift sort splice unshift".split(" "), function(e) {
            var t = no[e]
              , n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru"
              , r = /^(?:pop|shift)$/.test(e);
            xe.prototype[e] = function() {
                var e = arguments;
                if (r && !this.__chain__) {
                    var i = this.value();
                    return t.apply(as(i) ? i : [], e)
                }
                return this[n](function(n) {
                    return t.apply(as(n) ? n : [], e)
                })
            }
        }),
        xt(Ee.prototype, function(e, t) {
            var n = xe[t];
            if (n) {
                var r = n.name + "";
                ao.call(Yo, r) || (Yo[r] = []),
                Yo[r].push({
                    name: t,
                    func: n
                })
            }
        }),
        Yo[Gn(M, 2).name] = [{
            name: "wrapper",
            func: M
        }],
        Ee.prototype.clone = function() {
            var e = new Ee(this.__wrapped__);
            return e.__actions__ = Rn(this.__actions__),
            e.__dir__ = this.__dir__,
            e.__filtered__ = this.__filtered__,
            e.__iteratees__ = Rn(this.__iteratees__),
            e.__takeCount__ = this.__takeCount__,
            e.__views__ = Rn(this.__views__),
            e
        }
        ,
        Ee.prototype.reverse = function() {
            if (this.__filtered__) {
                var e = new Ee(this);
                e.__dir__ = -1,
                e.__filtered__ = !0
            } else
                (e = this.clone()).__dir__ *= -1;
            return e
        }
        ,
        Ee.prototype.value = function() {
            var e, t = this.__wrapped__.value(), n = this.__dir__, r = as(t), i = 0 > n, o = r ? t.length : 0;
            e = o;
            for (var a = this.__views__, s = 0, c = -1, u = a.length; ++c < u; ) {
                var l = a[c]
                  , f = l.size;
                switch (l.type) {
                case "drop":
                    s += f;
                    break;
                case "dropRight":
                    e -= f;
                    break;
                case "take":
                    e = Lo(e, s + f);
                    break;
                case "takeRight":
                    s = No(s, e - f)
                }
            }
            if (a = (e = {
                start: s,
                end: e
            }).start,
            e = (s = e.end) - a,
            a = i ? s : a - 1,
            c = (s = this.__iteratees__).length,
            u = 0,
            l = Lo(e, this.__takeCount__),
            !r || !i && o == e && l == e)
                return xn(t, this.__actions__);
            r = [];
            e: for (; e-- && u < l; ) {
                for (i = -1,
                o = t[a += n]; ++i < c; ) {
                    f = (d = s[i]).type;
                    var d = (0,
                    d.iteratee)(o);
                    if (2 == f)
                        o = d;
                    else if (!d) {
                        if (1 == f)
                            continue e;
                        break e
                    }
                }
                r[u++] = o
            }
            return r
        }
        ,
        xe.prototype.at = Ma,
        xe.prototype.chain = function() {
            return Xr(this)
        }
        ,
        xe.prototype.commit = function() {
            return new Se(this.value(),this.__chain__)
        }
        ,
        xe.prototype.next = function() {
            this.__values__ === M && (this.__values__ = ki(this.value()));
            var e = this.__index__ >= this.__values__.length;
            return {
                done: e,
                value: e ? M : this.__values__[this.__index__++]
            }
        }
        ,
        xe.prototype.plant = function(e) {
            for (var t, n = this; n instanceof ke; ) {
                var r = Ur(n);
                r.__index__ = 0,
                r.__values__ = M,
                t ? i.__wrapped__ = r : t = r;
                var i = r;
                n = n.__wrapped__
            }
            return i.__wrapped__ = e,
            t
        }
        ,
        xe.prototype.reverse = function() {
            var e = this.__wrapped__;
            return e instanceof Ee ? (this.__actions__.length && (e = new Ee(this)),
            (e = e.reverse()).__actions__.push({
                func: Jr,
                args: [Kr],
                thisArg: M
            }),
            new Se(e,this.__chain__)) : this.thru(Kr)
        }
        ,
        xe.prototype.toJSON = xe.prototype.valueOf = xe.prototype.value = function() {
            return xn(this.__wrapped__, this.__actions__)
        }
        ,
        xe.prototype.first = xe.prototype.head,
        ko && (xe.prototype[ko] = Zr),
        xe
    }();
    "function" == typeof define && "object" == typeof define.amd && define.amd ? (Me._ = tt,
    define(function() {
        return tt
    })) : Ue ? ((Ue.exports = tt)._ = tt,
    qe._ = tt) : Me._ = tt
}
).call(this),
_.mixin({
    isBlank: function(e) {
        return _.isString(e) ? _.isEmpty(e.trim()) : !_.isNumber(e) && _.isEmpty(e)
    },
    isPresent: function(e) {
        return !_.isBlank(e)
    },
    presence: function(e) {
        return _.isPresent(e) ? e : null
    },
    compactObject: function(e) {
        var t = _.clone(e);
        return _.forEach(t, function(e, n) {
            e || delete t[n]
        }),
        t
    },
    pluralize: function(e, t, n) {
        return 1 === e ? e + " " + t : e + " " + n
    }
}),
function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    function n(e, t, n) {
        var r, i = (t = t || ae).createElement("script");
        if (i.text = e,
        n)
            for (r in _e)
                n[r] && (i[r] = n[r]);
        t.head.appendChild(i).parentNode.removeChild(i)
    }
    function r(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? de[pe.call(e)] || "object" : typeof e
    }
    function i(e) {
        var t = !!e && "length"in e && e.length
          , n = r(e);
        return !ye(e) && !be(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    function o(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    function a(e, t, n) {
        return ye(t) ? we.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        }) : t.nodeType ? we.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? we.grep(e, function(e) {
            return fe.call(t, e) > -1 !== n
        }) : we.filter(t, e, n)
    }
    function s(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    function c(e) {
        var t = {};
        return we.each(e.match(De) || [], function(e, n) {
            t[n] = !0
        }),
        t
    }
    function u(e) {
        return e
    }
    function l(e) {
        throw e
    }
    function f(e, t, n, r) {
        var i;
        try {
            e && ye(i = e.promise) ? i.call(e).done(t).fail(n) : e && ye(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    function d() {
        ae.removeEventListener("DOMContentLoaded", d),
        e.removeEventListener("load", d),
        we.ready()
    }
    function p(e, t) {
        return t.toUpperCase()
    }
    function h(e) {
        return e.replace(Ne, "ms-").replace(Le, p)
    }
    function m() {
        this.expando = we.expando + m.uid++
    }
    function g(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Ue.test(e) ? JSON.parse(e) : e)
    }
    function v(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(ze, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = g(n)
                } catch (e) {}
                qe.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    function y(e, t, n, r) {
        var i, o, a = 20, s = r ? function() {
            return r.cur()
        }
        : function() {
            return we.css(e, t, "")
        }
        , c = s(), u = n && n[3] || (we.cssNumber[t] ? "" : "px"), l = (we.cssNumber[t] || "px" !== u && +c) && He.exec(we.css(e, t));
        if (l && l[3] !== u) {
            for (c /= 2,
            u = u || l[3],
            l = +c || 1; a--; )
                we.style(e, t, l + u),
                (1 - o) * (1 - (o = s() / c || .5)) <= 0 && (a = 0),
                l /= o;
            l *= 2,
            we.style(e, t, l + u),
            n = n || []
        }
        return n && (l = +l || +c || 0,
        i = n[1] ? l + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = u,
        r.start = l,
        r.end = i)),
        i
    }
    function b(e) {
        var t, n = e.ownerDocument, r = e.nodeName, i = Ke[r];
        return i || (t = n.body.appendChild(n.createElement(r)),
        i = we.css(t, "display"),
        t.parentNode.removeChild(t),
        "none" === i && (i = "block"),
        Ke[r] = i,
        i)
    }
    function _(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
            (r = e[o]).style && (n = r.style.display,
            t ? ("none" === n && (i[o] = Me.get(r, "display") || null,
            i[o] || (r.style.display = "")),
            "" === r.style.display && Ve(r) && (i[o] = b(r))) : "none" !== n && (i[o] = "none",
            Me.set(r, "display", n)));
        for (o = 0; o < a; o++)
            null != i[o] && (e[o].style.display = i[o]);
        return e
    }
    function w(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && o(e, t) ? we.merge([e], n) : n
    }
    function x(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            Me.set(e[n], "globalEval", !t || Me.get(t[n], "globalEval"))
    }
    function k(e, t, n, i, o) {
        for (var a, s, c, u, l, f, d = t.createDocumentFragment(), p = [], h = 0, m = e.length; h < m; h++)
            if ((a = e[h]) || 0 === a)
                if ("object" === r(a))
                    we.merge(p, a.nodeType ? [a] : a);
                else if (Ze.test(a)) {
                    for (s = s || d.appendChild(t.createElement("div")),
                    c = (Ge.exec(a) || ["", ""])[1].toLowerCase(),
                    u = Je[c] || Je._default,
                    s.innerHTML = u[1] + we.htmlPrefilter(a) + u[2],
                    f = u[0]; f--; )
                        s = s.lastChild;
                    we.merge(p, s.childNodes),
                    (s = d.firstChild).textContent = ""
                } else
                    p.push(t.createTextNode(a));
        for (d.textContent = "",
        h = 0; a = p[h++]; )
            if (i && we.inArray(a, i) > -1)
                o && o.push(a);
            else if (l = we.contains(a.ownerDocument, a),
            s = w(d.appendChild(a), "script"),
            l && x(s),
            n)
                for (f = 0; a = s[f++]; )
                    Xe.test(a.type || "") && n.push(a);
        return d
    }
    function S() {
        return !0
    }
    function A() {
        return !1
    }
    function C() {
        try {
            return ae.activeElement
        } catch (e) {}
    }
    function E(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n,
            n = void 0),
            t)
                E(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n,
        r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
        r = void 0) : (i = r,
        r = n,
        n = void 0)),
        !1 === i)
            i = A;
        else if (!i)
            return e;
        return 1 === o && (a = i,
        (i = function(e) {
            return we().off(e),
            a.apply(this, arguments)
        }
        ).guid = a.guid || (a.guid = we.guid++)),
        e.each(function() {
            we.event.add(this, t, i, r, n)
        })
    }
    function $(e, t) {
        return o(e, "table") && o(11 !== t.nodeType ? t : t.firstChild, "tr") && we(e).children("tbody")[0] || e
    }
    function T(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function I(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function O(e, t) {
        var n, r, i, o, a, s, c, u;
        if (1 === t.nodeType) {
            if (Me.hasData(e) && (o = Me.access(e),
            a = Me.set(t, o),
            u = o.events))
                for (i in delete a.handle,
                a.events = {},
                u)
                    for (n = 0,
                    r = u[i].length; n < r; n++)
                        we.event.add(t, i, u[i][n]);
            qe.hasData(e) && (s = qe.access(e),
            c = we.extend({}, s),
            qe.set(t, c))
        }
    }
    function D(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Ye.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }
    function j(e, t, r, i) {
        t = ue.apply([], t);
        var o, a, s, c, u, l, f = 0, d = e.length, p = d - 1, h = t[0], m = ye(h);
        if (m || d > 1 && "string" == typeof h && !ve.checkClone && at.test(h))
            return e.each(function(n) {
                var o = e.eq(n);
                m && (t[0] = h.call(this, n, o.html())),
                j(o, t, r, i)
            });
        if (d && (a = (o = k(t, e[0].ownerDocument, !1, e, i)).firstChild,
        1 === o.childNodes.length && (o = a),
        a || i)) {
            for (c = (s = we.map(w(o, "script"), T)).length; f < d; f++)
                u = o,
                f !== p && (u = we.clone(u, !0, !0),
                c && we.merge(s, w(u, "script"))),
                r.call(e[f], u, f);
            if (c)
                for (l = s[s.length - 1].ownerDocument,
                we.map(s, I),
                f = 0; f < c; f++)
                    u = s[f],
                    Xe.test(u.type || "") && !Me.access(u, "globalEval") && we.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? we._evalUrl && we._evalUrl(u.src) : n(u.textContent.replace(st, ""), l, u))
        }
        return e
    }
    function P(e, t, n) {
        for (var r, i = t ? we.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || we.cleanData(w(r)),
            r.parentNode && (n && we.contains(r.ownerDocument, r) && x(w(r, "script")),
            r.parentNode.removeChild(r));
        return e
    }
    function R(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || ut(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || we.contains(e.ownerDocument, e) || (a = we.style(e, t)),
        !ve.pixelBoxStyles() && ct.test(a) && lt.test(t) && (r = s.width,
        i = s.minWidth,
        o = s.maxWidth,
        s.minWidth = s.maxWidth = s.width = a,
        a = n.width,
        s.width = r,
        s.minWidth = i,
        s.maxWidth = o)),
        void 0 !== a ? a + "" : a
    }
    function N(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    function L(e) {
        if (e in gt)
            return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = mt.length; n--; )
            if ((e = mt[n] + t)in gt)
                return e
    }
    function F(e) {
        var t = we.cssProps[e];
        return t || (t = we.cssProps[e] = L(e) || e),
        t
    }
    function M(e, t, n) {
        var r = He.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function q(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0
          , s = 0
          , c = 0;
        if (n === (r ? "border" : "content"))
            return 0;
        for (; a < 4; a += 2)
            "margin" === n && (c += we.css(e, n + We[a], !0, i)),
            r ? ("content" === n && (c -= we.css(e, "padding" + We[a], !0, i)),
            "margin" !== n && (c -= we.css(e, "border" + We[a] + "Width", !0, i))) : (c += we.css(e, "padding" + We[a], !0, i),
            "padding" !== n ? c += we.css(e, "border" + We[a] + "Width", !0, i) : s += we.css(e, "border" + We[a] + "Width", !0, i));
        return !r && o >= 0 && (c += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - c - s - .5))),
        c
    }
    function U(e, t, n) {
        var r = ut(e)
          , i = R(e, t, r)
          , o = "border-box" === we.css(e, "boxSizing", !1, r)
          , a = o;
        if (ct.test(i)) {
            if (!n)
                return i;
            i = "auto"
        }
        return a = a && (ve.boxSizingReliable() || i === e.style[t]),
        ("auto" === i || !parseFloat(i) && "inline" === we.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)],
        a = !0),
        (i = parseFloat(i) || 0) + q(e, t, n || (o ? "border" : "content"), a, r, i) + "px"
    }
    function z(e, t, n, r, i) {
        return new z.prototype.init(e,t,n,r,i)
    }
    function B() {
        yt && (!1 === ae.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(B) : e.setTimeout(B, we.fx.interval),
        we.fx.tick())
    }
    function H() {
        return e.setTimeout(function() {
            vt = void 0
        }),
        vt = Date.now()
    }
    function W(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (n = We[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function V(e, t, n) {
        for (var r, i = (Y.tweeners[t] || []).concat(Y.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function Q(e, t, n) {
        var r, i, o, a, s, c, u, l, f = "width"in t || "height"in t, d = this, p = {}, h = e.style, m = e.nodeType && Ve(e), g = Me.get(e, "fxshow");
        for (r in n.queue || (null == (a = we._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
        s = a.empty.fire,
        a.empty.fire = function() {
            a.unqueued || s()
        }
        ),
        a.unqueued++,
        d.always(function() {
            d.always(function() {
                a.unqueued--,
                we.queue(e, "fx").length || a.empty.fire()
            })
        })),
        t)
            if (i = t[r],
            bt.test(i)) {
                if (delete t[r],
                o = o || "toggle" === i,
                i === (m ? "hide" : "show")) {
                    if ("show" !== i || !g || void 0 === g[r])
                        continue;
                    m = !0
                }
                p[r] = g && g[r] || we.style(e, r)
            }
        if ((c = !we.isEmptyObject(t)) || !we.isEmptyObject(p))
            for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
            null == (u = g && g.display) && (u = Me.get(e, "display")),
            "none" === (l = we.css(e, "display")) && (u ? l = u : (_([e], !0),
            u = e.style.display || u,
            l = we.css(e, "display"),
            _([e]))),
            ("inline" === l || "inline-block" === l && null != u) && "none" === we.css(e, "float") && (c || (d.done(function() {
                h.display = u
            }),
            null == u && (l = h.display,
            u = "none" === l ? "" : l)),
            h.display = "inline-block")),
            n.overflow && (h.overflow = "hidden",
            d.always(function() {
                h.overflow = n.overflow[0],
                h.overflowX = n.overflow[1],
                h.overflowY = n.overflow[2]
            })),
            c = !1,
            p)
                c || (g ? "hidden"in g && (m = g.hidden) : g = Me.access(e, "fxshow", {
                    display: u
                }),
                o && (g.hidden = !m),
                m && _([e], !0),
                d.done(function() {
                    for (r in m || _([e]),
                    Me.remove(e, "fxshow"),
                    p)
                        we.style(e, r, p[r])
                })),
                c = V(m ? g[r] : 0, r, d),
                r in g || (g[r] = c.start,
                m && (c.end = c.start,
                c.start = 0))
    }
    function K(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (i = t[r = h(n)],
            o = e[n],
            Array.isArray(o) && (i = o[1],
            o = e[n] = o[0]),
            n !== r && (e[r] = o,
            delete e[n]),
            (a = we.cssHooks[r]) && "expand"in a)
                for (n in o = a.expand(o),
                delete e[r],
                o)
                    n in e || (e[n] = o[n],
                    t[n] = i);
            else
                t[r] = i
    }
    function Y(e, t, n) {
        var r, i, o = 0, a = Y.prefilters.length, s = we.Deferred().always(function() {
            delete c.elem
        }), c = function() {
            if (i)
                return !1;
            for (var t = vt || H(), n = Math.max(0, u.startTime + u.duration - t), r = 1 - (n / u.duration || 0), o = 0, a = u.tweens.length; o < a; o++)
                u.tweens[o].run(r);
            return s.notifyWith(e, [u, r, n]),
            r < 1 && a ? n : (a || s.notifyWith(e, [u, 1, 0]),
            s.resolveWith(e, [u]),
            !1)
        }, u = s.promise({
            elem: e,
            props: we.extend({}, t),
            opts: we.extend(!0, {
                specialEasing: {},
                easing: we.easing._default
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: vt || H(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = we.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(r),
                r
            },
            stop: function(t) {
                var n = 0
                  , r = t ? u.tweens.length : 0;
                if (i)
                    return this;
                for (i = !0; n < r; n++)
                    u.tweens[n].run(1);
                return t ? (s.notifyWith(e, [u, 1, 0]),
                s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]),
                this
            }
        }), l = u.props;
        for (K(l, u.opts.specialEasing); o < a; o++)
            if (r = Y.prefilters[o].call(u, e, l, u.opts))
                return ye(r.stop) && (we._queueHooks(u.elem, u.opts.queue).stop = r.stop.bind(r)),
                r;
        return we.map(l, V, u),
        ye(u.opts.start) && u.opts.start.call(e, u),
        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always),
        we.fx.timer(we.extend(c, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })),
        u
    }
    function G(e) {
        return (e.match(De) || []).join(" ")
    }
    function X(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function J(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(De) || []
    }
    function Z(e, t, n, i) {
        var o;
        if (Array.isArray(t))
            we.each(t, function(t, r) {
                n || Ot.test(e) ? i(e, r) : Z(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
            });
        else if (n || "object" !== r(t))
            i(e, t);
        else
            for (o in t)
                Z(e + "[" + o + "]", t[o], n, i)
    }
    function ee(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var r, i = 0, o = t.toLowerCase().match(De) || [];
            if (ye(n))
                for (; r = o[i++]; )
                    "+" === r[0] ? (r = r.slice(1) || "*",
                    (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function te(e, t, n, r) {
        function i(s) {
            var c;
            return o[s] = !0,
            we.each(e[s] || [], function(e, s) {
                var u = s(t, n, r);
                return "string" != typeof u || a || o[u] ? a ? !(c = u) : void 0 : (t.dataTypes.unshift(u),
                i(u),
                !1)
            }),
            c
        }
        var o = {}
          , a = e === Bt;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }
    function ne(e, t) {
        var n, r, i = we.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && we.extend(!0, e, r),
        e
    }
    function re(e, t, n) {
        for (var r, i, o, a, s = e.contents, c = e.dataTypes; "*" === c[0]; )
            c.shift(),
            void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in s)
                if (s[i] && s[i].test(r)) {
                    c.unshift(i);
                    break
                }
        if (c[0]in n)
            o = c[0];
        else {
            for (i in n) {
                if (!c[0] || e.converters[i + " " + c[0]]) {
                    o = i;
                    break
                }
                a || (a = i)
            }
            o = o || a
        }
        if (o)
            return o !== c[0] && c.unshift(o),
            n[o]
    }
    function ie(e, t, n, r) {
        var i, o, a, s, c, u = {}, l = e.dataTypes.slice();
        if (l[1])
            for (a in e.converters)
                u[a.toLowerCase()] = e.converters[a];
        for (o = l.shift(); o; )
            if (e.responseFields[o] && (n[e.responseFields[o]] = t),
            !c && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            c = o,
            o = l.shift())
                if ("*" === o)
                    o = c;
                else if ("*" !== c && c !== o) {
                    if (!(a = u[c + " " + o] || u["* " + o]))
                        for (i in u)
                            if ((s = i.split(" "))[1] === o && (a = u[c + " " + s[0]] || u["* " + s[0]])) {
                                !0 === a ? a = u[i] : !0 !== u[i] && (o = s[0],
                                l.unshift(s[1]));
                                break
                            }
                    if (!0 !== a)
                        if (a && e.throws)
                            t = a(t);
                        else
                            try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + c + " to " + o
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    var oe = []
      , ae = e.document
      , se = Object.getPrototypeOf
      , ce = oe.slice
      , ue = oe.concat
      , le = oe.push
      , fe = oe.indexOf
      , de = {}
      , pe = de.toString
      , he = de.hasOwnProperty
      , me = he.toString
      , ge = me.call(Object)
      , ve = {}
      , ye = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
    }
      , be = function(e) {
        return null != e && e === e.window
    }
      , _e = {
        type: !0,
        src: !0,
        noModule: !0
    }
      , we = function(e, t) {
        return new we.fn.init(e,t)
    }
      , xe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    we.fn = we.prototype = {
        jquery: "3.3.1",
        constructor: we,
        length: 0,
        toArray: function() {
            return ce.call(this)
        },
        get: function(e) {
            return null == e ? ce.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = we.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return we.each(this, e)
        },
        map: function(e) {
            return this.pushStack(we.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(ce.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: le,
        sort: oe.sort,
        splice: oe.splice
    },
    we.extend = we.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, c = arguments.length, u = !1;
        for ("boolean" == typeof a && (u = a,
        a = arguments[s] || {},
        s++),
        "object" == typeof a || ye(a) || (a = {}),
        s === c && (a = this,
        s--); s < c; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    n = a[t],
                    a !== (r = e[t]) && (u && r && (we.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1,
                    o = n && Array.isArray(n) ? n : []) : o = n && we.isPlainObject(n) ? n : {},
                    a[t] = we.extend(u, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }
    ,
    we.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== pe.call(e) || (t = se(e)) && ("function" != typeof (n = he.call(t, "constructor") && t.constructor) || me.call(n) !== ge))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        globalEval: function(e) {
            n(e)
        },
        each: function(e, t) {
            var n, r = 0;
            if (i(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++)
                    ;
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r]))
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(xe, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (i(Object(e)) ? we.merge(n, "string" == typeof e ? [e] : e) : le.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : fe.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                e[i++] = t[r];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, o, a = 0, s = [];
            if (i(e))
                for (r = e.length; a < r; a++)
                    null != (o = t(e[a], a, n)) && s.push(o);
            else
                for (a in e)
                    null != (o = t(e[a], a, n)) && s.push(o);
            return ue.apply([], s)
        },
        guid: 1,
        support: ve
    }),
    "function" == typeof Symbol && (we.fn[Symbol.iterator] = oe[Symbol.iterator]),
    we.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        de["[object " + t + "]"] = t.toLowerCase()
    });
    var ke = function(e) {
        function t(e, t, n, r) {
            var i, o, a, s, c, u, l, d = t && t.ownerDocument, h = t ? t.nodeType : 9;
            if (n = n || [],
            "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h)
                return n;
            if (!r && ((t ? t.ownerDocument || t : U) !== j && D(t),
            t = t || j,
            R)) {
                if (11 !== h && (c = ve.exec(e)))
                    if (i = c[1]) {
                        if (9 === h) {
                            if (!(a = t.getElementById(i)))
                                return n;
                            if (a.id === i)
                                return n.push(a),
                                n
                        } else if (d && (a = d.getElementById(i)) && M(t, a) && a.id === i)
                            return n.push(a),
                            n
                    } else {
                        if (c[2])
                            return J.apply(n, t.getElementsByTagName(e)),
                            n;
                        if ((i = c[3]) && x.getElementsByClassName && t.getElementsByClassName)
                            return J.apply(n, t.getElementsByClassName(i)),
                            n
                    }
                if (x.qsa && !V[e + " "] && (!N || !N.test(e))) {
                    if (1 !== h)
                        d = t,
                        l = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(we, xe) : t.setAttribute("id", s = q),
                        o = (u = C(e)).length; o--; )
                            u[o] = "#" + s + " " + p(u[o]);
                        l = u.join(","),
                        d = ye.test(e) && f(t.parentNode) || t
                    }
                    if (l)
                        try {
                            return J.apply(n, d.querySelectorAll(l)),
                            n
                        } catch (e) {} finally {
                            s === q && t.removeAttribute("id")
                        }
                }
            }
            return $(e.replace(se, "$1"), t, n, r)
        }
        function n() {
            function e(n, r) {
                return t.push(n + " ") > k.cacheLength && delete e[t.shift()],
                e[n + " "] = r
            }
            var t = [];
            return e
        }
        function r(e) {
            return e[q] = !0,
            e
        }
        function i(e) {
            var t = j.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function o(e, t) {
            for (var n = e.split("|"), r = n.length; r--; )
                k.attrHandle[n[r]] = t
        }
        function a(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r)
                return r;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function s(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }
        function c(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function u(e) {
            return function(t) {
                return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Se(t) === e : t.disabled === e : "label"in t && t.disabled === e
            }
        }
        function l(e) {
            return r(function(t) {
                return t = +t,
                r(function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--; )
                        n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        function f(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        function d() {}
        function p(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function h(e, t, n) {
            var r = t.dir
              , i = t.next
              , o = i || r
              , a = n && "parentNode" === o
              , s = B++;
            return t.first ? function(t, n, i) {
                for (; t = t[r]; )
                    if (1 === t.nodeType || a)
                        return e(t, n, i);
                return !1
            }
            : function(t, n, c) {
                var u, l, f, d = [z, s];
                if (c) {
                    for (; t = t[r]; )
                        if ((1 === t.nodeType || a) && e(t, n, c))
                            return !0
                } else
                    for (; t = t[r]; )
                        if (1 === t.nodeType || a)
                            if (l = (f = t[q] || (t[q] = {}))[t.uniqueID] || (f[t.uniqueID] = {}),
                            i && i === t.nodeName.toLowerCase())
                                t = t[r] || t;
                            else {
                                if ((u = l[o]) && u[0] === z && u[1] === s)
                                    return d[2] = u[2];
                                if (l[o] = d,
                                d[2] = e(t, n, c))
                                    return !0
                            }
                return !1
            }
        }
        function m(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--; )
                    if (!e[i](t, n, r))
                        return !1;
                return !0
            }
            : e[0]
        }
        function g(e, n, r) {
            for (var i = 0, o = n.length; i < o; i++)
                t(e, n[i], r);
            return r
        }
        function v(e, t, n, r, i) {
            for (var o, a = [], s = 0, c = e.length, u = null != t; s < c; s++)
                (o = e[s]) && (n && !n(o, r, i) || (a.push(o),
                u && t.push(s)));
            return a
        }
        function y(e, t, n, i, o, a) {
            return i && !i[q] && (i = y(i)),
            o && !o[q] && (o = y(o, a)),
            r(function(r, a, s, c) {
                var u, l, f, d = [], p = [], h = a.length, m = r || g(t || "*", s.nodeType ? [s] : s, []), y = !e || !r && t ? m : v(m, d, e, s, c), b = n ? o || (r ? e : h || i) ? [] : a : y;
                if (n && n(y, b, s, c),
                i)
                    for (u = v(b, p),
                    i(u, [], s, c),
                    l = u.length; l--; )
                        (f = u[l]) && (b[p[l]] = !(y[p[l]] = f));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (u = [],
                            l = b.length; l--; )
                                (f = b[l]) && u.push(y[l] = f);
                            o(null, b = [], u, c)
                        }
                        for (l = b.length; l--; )
                            (f = b[l]) && (u = o ? ee(r, f) : d[l]) > -1 && (r[u] = !(a[u] = f))
                    }
                } else
                    b = v(b === a ? b.splice(h, b.length) : b),
                    o ? o(null, a, b, c) : J.apply(a, b)
            })
        }
        function b(e) {
            for (var t, n, r, i = e.length, o = k.relative[e[0].type], a = o || k.relative[" "], s = o ? 1 : 0, c = h(function(e) {
                return e === t
            }, a, !0), u = h(function(e) {
                return ee(t, e) > -1
            }, a, !0), l = [function(e, n, r) {
                var i = !o && (r || n !== T) || ((t = n).nodeType ? c(e, n, r) : u(e, n, r));
                return t = null,
                i
            }
            ]; s < i; s++)
                if (n = k.relative[e[s].type])
                    l = [h(m(l), n)];
                else {
                    if ((n = k.filter[e[s].type].apply(null, e[s].matches))[q]) {
                        for (r = ++s; r < i && !k.relative[e[r].type]; r++)
                            ;
                        return y(s > 1 && m(l), s > 1 && p(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(se, "$1"), n, s < r && b(e.slice(s, r)), r < i && b(e = e.slice(r)), r < i && p(e))
                    }
                    l.push(n)
                }
            return m(l)
        }
        function _(e, n) {
            var i = n.length > 0
              , o = e.length > 0
              , a = function(r, a, s, c, u) {
                var l, f, d, p = 0, h = "0", m = r && [], g = [], y = T, b = r || o && k.find.TAG("*", u), _ = z += null == y ? 1 : Math.random() || .1, w = b.length;
                for (u && (T = a === j || a || u); h !== w && null != (l = b[h]); h++) {
                    if (o && l) {
                        for (f = 0,
                        a || l.ownerDocument === j || (D(l),
                        s = !R); d = e[f++]; )
                            if (d(l, a || j, s)) {
                                c.push(l);
                                break
                            }
                        u && (z = _)
                    }
                    i && ((l = !d && l) && p--,
                    r && m.push(l))
                }
                if (p += h,
                i && h !== p) {
                    for (f = 0; d = n[f++]; )
                        d(m, g, a, s);
                    if (r) {
                        if (p > 0)
                            for (; h--; )
                                m[h] || g[h] || (g[h] = G.call(c));
                        g = v(g)
                    }
                    J.apply(c, g),
                    u && !r && g.length > 0 && p + n.length > 1 && t.uniqueSort(c)
                }
                return u && (z = _,
                T = y),
                m
            };
            return i ? r(a) : a
        }
        var w, x, k, S, A, C, E, $, T, I, O, D, j, P, R, N, L, F, M, q = "sizzle" + 1 * new Date, U = e.document, z = 0, B = 0, H = n(), W = n(), V = n(), Q = function(e, t) {
            return e === t && (O = !0),
            0
        }, K = {}.hasOwnProperty, Y = [], G = Y.pop, X = Y.push, J = Y.push, Z = Y.slice, ee = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", re = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", ie = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]", oe = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)", ae = new RegExp(ne + "+","g"), se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$","g"), ce = new RegExp("^" + ne + "*," + ne + "*"), ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), le = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]","g"), fe = new RegExp(oe), de = new RegExp("^" + re + "$"), pe = {
            ID: new RegExp("^#(" + re + ")"),
            CLASS: new RegExp("^\\.(" + re + ")"),
            TAG: new RegExp("^(" + re + "|[*])"),
            ATTR: new RegExp("^" + ie),
            PSEUDO: new RegExp("^" + oe),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)","i"),
            bool: new RegExp("^(?:" + te + ")$","i"),
            needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)","i")
        }, he = /^(?:input|select|textarea|button)$/i, me = /^h\d$/i, ge = /^[^{]+\{\s*\[native \w/, ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ye = /[+~]/, be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)","ig"), _e = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }, we = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, xe = function(e, t) {
            return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, ke = function() {
            D()
        }, Se = h(function(e) {
            return !0 === e.disabled && ("form"in e || "label"in e)
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            J.apply(Y = Z.call(U.childNodes), U.childNodes),
            Y[U.childNodes.length].nodeType
        } catch (e) {
            J = {
                apply: Y.length ? function(e, t) {
                    X.apply(e, Z.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        for (w in x = t.support = {},
        A = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }
        ,
        D = t.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : U;
            return r !== j && 9 === r.nodeType && r.documentElement ? (P = (j = r).documentElement,
            R = !A(j),
            U !== j && (n = j.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", ke, !1) : n.attachEvent && n.attachEvent("onunload", ke)),
            x.attributes = i(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            x.getElementsByTagName = i(function(e) {
                return e.appendChild(j.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            x.getElementsByClassName = ge.test(j.getElementsByClassName),
            x.getById = i(function(e) {
                return P.appendChild(e).id = q,
                !j.getElementsByName || !j.getElementsByName(q).length
            }),
            x.getById ? (k.filter.ID = function(e) {
                var t = e.replace(be, _e);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            k.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && R) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (k.filter.ID = function(e) {
                var t = e.replace(be, _e);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ,
            k.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && R) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                        for (i = t.getElementsByName(e),
                        r = 0; o = i[r++]; )
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                return [o]
                    }
                    return []
                }
            }
            ),
            k.find.TAG = x.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++]; )
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }
            ,
            k.find.CLASS = x.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && R)
                    return t.getElementsByClassName(e)
            }
            ,
            L = [],
            N = [],
            (x.qsa = ge.test(j.querySelectorAll)) && (i(function(e) {
                P.appendChild(e).innerHTML = "<a id='" + q + "'></a><select id='" + q + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && N.push("[*^$]=" + ne + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || N.push("\\[" + ne + "*(?:value|" + te + ")"),
                e.querySelectorAll("[id~=" + q + "-]").length || N.push("~="),
                e.querySelectorAll(":checked").length || N.push(":checked"),
                e.querySelectorAll("a#" + q + "+*").length || N.push(".#.+[+~]")
            }),
            i(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = j.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && N.push("name" + ne + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && N.push(":enabled", ":disabled"),
                P.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && N.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                N.push(",.*:")
            })),
            (x.matchesSelector = ge.test(F = P.matches || P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && i(function(e) {
                x.disconnectedMatch = F.call(e, "*"),
                F.call(e, "[s!='']:x"),
                L.push("!=", oe)
            }),
            N = N.length && new RegExp(N.join("|")),
            L = L.length && new RegExp(L.join("|")),
            t = ge.test(P.compareDocumentPosition),
            M = t || ge.test(P.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            Q = t ? function(e, t) {
                if (e === t)
                    return O = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === j || e.ownerDocument === U && M(U, e) ? -1 : t === j || t.ownerDocument === U && M(U, t) ? 1 : I ? ee(I, e) - ee(I, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return O = !0,
                    0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, s = [e], c = [t];
                if (!i || !o)
                    return e === j ? -1 : t === j ? 1 : i ? -1 : o ? 1 : I ? ee(I, e) - ee(I, t) : 0;
                if (i === o)
                    return a(e, t);
                for (n = e; n = n.parentNode; )
                    s.unshift(n);
                for (n = t; n = n.parentNode; )
                    c.unshift(n);
                for (; s[r] === c[r]; )
                    r++;
                return r ? a(s[r], c[r]) : s[r] === U ? -1 : c[r] === U ? 1 : 0
            }
            ,
            j) : j
        }
        ,
        t.matches = function(e, n) {
            return t(e, null, null, n)
        }
        ,
        t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== j && D(e),
            n = n.replace(le, "='$1']"),
            x.matchesSelector && R && !V[n + " "] && (!L || !L.test(n)) && (!N || !N.test(n)))
                try {
                    var r = F.call(e, n);
                    if (r || x.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return r
                } catch (e) {}
            return t(n, j, null, [e]).length > 0
        }
        ,
        t.contains = function(e, t) {
            return (e.ownerDocument || e) !== j && D(e),
            M(e, t)
        }
        ,
        t.attr = function(e, t) {
            (e.ownerDocument || e) !== j && D(e);
            var n = k.attrHandle[t.toLowerCase()]
              , r = n && K.call(k.attrHandle, t.toLowerCase()) ? n(e, t, !R) : void 0;
            return void 0 !== r ? r : x.attributes || !R ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }
        ,
        t.escape = function(e) {
            return (e + "").replace(we, xe)
        }
        ,
        t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        t.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (O = !x.detectDuplicates,
            I = !x.sortStable && e.slice(0),
            e.sort(Q),
            O) {
                for (; t = e[i++]; )
                    t === e[i] && (r = n.push(i));
                for (; r--; )
                    e.splice(n[r], 1)
            }
            return I = null,
            e
        }
        ,
        S = t.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += S(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                for (; t = e[r++]; )
                    n += S(t);
            return n
        }
        ,
        (k = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: pe,
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
                    return e[1] = e[1].replace(be, _e),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(be, _e),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(be, _e).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = H[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && H(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, r) {
                    return function(i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : !n || (o += "",
                        "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(ae, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3)
                      , a = "last" !== e.slice(-4)
                      , s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, c) {
                        var u, l, f, d, p, h, m = o !== a ? "nextSibling" : "previousSibling", g = t.parentNode, v = s && t.nodeName.toLowerCase(), y = !c && !s, b = !1;
                        if (g) {
                            if (o) {
                                for (; m; ) {
                                    for (d = t; d = d[m]; )
                                        if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType)
                                            return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? g.firstChild : g.lastChild],
                            a && y) {
                                for (b = (p = (u = (l = (f = (d = g)[q] || (d[q] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === z && u[1]) && u[2],
                                d = p && g.childNodes[p]; d = ++p && d && d[m] || (b = p = 0) || h.pop(); )
                                    if (1 === d.nodeType && ++b && d === t) {
                                        l[e] = [z, p, b];
                                        break
                                    }
                            } else if (y && (b = p = (u = (l = (f = (d = t)[q] || (d[q] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === z && u[1]),
                            !1 === b)
                                for (; (d = ++p && d && d[m] || (b = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && ((l = (f = d[q] || (d[q] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [z, b]),
                                d !== t)); )
                                    ;
                            return (b -= i) === r || b % r == 0 && b / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var i, o = k.pseudos[e] || k.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[q] ? o(n) : o.length > 1 ? (i = [e, e, "", n],
                    k.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, i = o(e, n), a = i.length; a--; )
                            e[r = ee(e, i[a])] = !(t[r] = i[a])
                    }) : function(e) {
                        return o(e, 0, i)
                    }
                    ) : o
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = []
                      , n = []
                      , i = E(e.replace(se, "$1"));
                    return i[q] ? r(function(e, t, n, r) {
                        for (var o, a = i(e, null, r, []), s = e.length; s--; )
                            (o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, r, o) {
                        return t[0] = e,
                        i(t, null, o, n),
                        t[0] = null,
                        !n.pop()
                    }
                }),
                has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function(e) {
                    return e = e.replace(be, _e),
                    function(t) {
                        return (t.textContent || t.innerText || S(t)).indexOf(e) > -1
                    }
                }),
                lang: r(function(e) {
                    return de.test(e || "") || t.error("unsupported lang: " + e),
                    e = e.replace(be, _e).toLowerCase(),
                    function(t) {
                        var n;
                        do {
                            if (n = R ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === P
                },
                focus: function(e) {
                    return e === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: u(!1),
                disabled: u(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !k.pseudos.empty(e)
                },
                header: function(e) {
                    return me.test(e.nodeName)
                },
                input: function(e) {
                    return he.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: l(function() {
                    return [0]
                }),
                last: l(function(e, t) {
                    return [t - 1]
                }),
                eq: l(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: l(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: l(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: l(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0; )
                        e.push(r);
                    return e
                }),
                gt: l(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        }).pseudos.nth = k.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            k.pseudos[w] = s(w);
        for (w in {
            submit: !0,
            reset: !0
        })
            k.pseudos[w] = c(w);
        return d.prototype = k.filters = k.pseudos,
        k.setFilters = new d,
        C = t.tokenize = function(e, n) {
            var r, i, o, a, s, c, u, l = W[e + " "];
            if (l)
                return n ? 0 : l.slice(0);
            for (s = e,
            c = [],
            u = k.preFilter; s; ) {
                for (a in r && !(i = ce.exec(s)) || (i && (s = s.slice(i[0].length) || s),
                c.push(o = [])),
                r = !1,
                (i = ue.exec(s)) && (r = i.shift(),
                o.push({
                    value: r,
                    type: i[0].replace(se, " ")
                }),
                s = s.slice(r.length)),
                k.filter)
                    !(i = pe[a].exec(s)) || u[a] && !(i = u[a](i)) || (r = i.shift(),
                    o.push({
                        value: r,
                        type: a,
                        matches: i
                    }),
                    s = s.slice(r.length));
                if (!r)
                    break
            }
            return n ? s.length : s ? t.error(e) : W(e, c).slice(0)
        }
        ,
        E = t.compile = function(e, t) {
            var n, r = [], i = [], o = V[e + " "];
            if (!o) {
                for (t || (t = C(e)),
                n = t.length; n--; )
                    (o = b(t[n]))[q] ? r.push(o) : i.push(o);
                (o = V(e, _(i, r))).selector = e
            }
            return o
        }
        ,
        $ = t.select = function(e, t, n, r) {
            var i, o, a, s, c, u = "function" == typeof e && e, l = !r && C(e = u.selector || e);
            if (n = n || [],
            1 === l.length) {
                if ((o = l[0] = l[0].slice(0)).length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && R && k.relative[o[1].type]) {
                    if (!(t = (k.find.ID(a.matches[0].replace(be, _e), t) || [])[0]))
                        return n;
                    u && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                for (i = pe.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i],
                !k.relative[s = a.type]); )
                    if ((c = k.find[s]) && (r = c(a.matches[0].replace(be, _e), ye.test(o[0].type) && f(t.parentNode) || t))) {
                        if (o.splice(i, 1),
                        !(e = r.length && p(o)))
                            return J.apply(n, r),
                            n;
                        break
                    }
            }
            return (u || E(e, l))(r, t, !R, n, !t || ye.test(e) && f(t.parentNode) || t),
            n
        }
        ,
        x.sortStable = q.split("").sort(Q).join("") === q,
        x.detectDuplicates = !!O,
        D(),
        x.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(j.createElement("fieldset"))
        }),
        i(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        x.attributes && i(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        i(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(te, function(e, t, n) {
            var r;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }),
        t
    }(e);
    we.find = ke,
    we.expr = ke.selectors,
    we.expr[":"] = we.expr.pseudos,
    we.uniqueSort = we.unique = ke.uniqueSort,
    we.text = ke.getText,
    we.isXMLDoc = ke.isXML,
    we.contains = ke.contains,
    we.escapeSelector = ke.escape;
    var Se = function(e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (i && we(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
      , Ae = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , Ce = we.expr.match.needsContext
      , Ee = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    we.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? we.find.matchesSelector(r, e) ? [r] : [] : we.find.matches(e, we.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    we.fn.extend({
        find: function(e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e)
                return this.pushStack(we(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (we.contains(i[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < r; t++)
                we.find(e, i[t], n);
            return r > 1 ? we.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(a(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(a(this, e || [], !0))
        },
        is: function(e) {
            return !!a(this, "string" == typeof e && Ce.test(e) ? we(e) : e || [], !1).length
        }
    });
    var $e, Te = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (we.fn.init = function(e, t, n) {
        var r, i;
        if (!e)
            return this;
        if (n = n || $e,
        "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Te.exec(e)) || !r[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof we ? t[0] : t,
                we.merge(this, we.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : ae, !0)),
                Ee.test(r[1]) && we.isPlainObject(t))
                    for (r in t)
                        ye(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = ae.getElementById(r[2])) && (this[0] = i,
            this.length = 1),
            this
        }
        return e.nodeType ? (this[0] = e,
        this.length = 1,
        this) : ye(e) ? void 0 !== n.ready ? n.ready(e) : e(we) : we.makeArray(e, this)
    }
    ).prototype = we.fn,
    $e = we(ae);
    var Ie = /^(?:parents|prev(?:Until|All))/
      , Oe = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    we.fn.extend({
        has: function(e) {
            var t = we(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (we.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && we(e);
            if (!Ce.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && we.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(o.length > 1 ? we.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? fe.call(we(e), this[0]) : fe.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(we.uniqueSort(we.merge(this.get(), we(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    we.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return Se(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return Se(e, "parentNode", n)
        },
        next: function(e) {
            return s(e, "nextSibling")
        },
        prev: function(e) {
            return s(e, "previousSibling")
        },
        nextAll: function(e) {
            return Se(e, "nextSibling")
        },
        prevAll: function(e) {
            return Se(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return Se(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return Se(e, "previousSibling", n)
        },
        siblings: function(e) {
            return Ae((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return Ae(e.firstChild)
        },
        contents: function(e) {
            return o(e, "iframe") ? e.contentDocument : (o(e, "template") && (e = e.content || e),
            we.merge([], e.childNodes))
        }
    }, function(e, t) {
        we.fn[e] = function(n, r) {
            var i = we.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n),
            r && "string" == typeof r && (i = we.filter(r, i)),
            this.length > 1 && (Oe[e] || we.uniqueSort(i),
            Ie.test(e) && i.reverse()),
            this.pushStack(i)
        }
    });
    var De = /[^\x20\t\r\n\f]+/g;
    we.Callbacks = function(e) {
        e = "string" == typeof e ? c(e) : we.extend({}, e);
        var t, n, i, o, a = [], s = [], u = -1, l = function() {
            for (o = o || e.once,
            i = t = !0; s.length; u = -1)
                for (n = s.shift(); ++u < a.length; )
                    !1 === a[u].apply(n[0], n[1]) && e.stopOnFalse && (u = a.length,
                    n = !1);
            e.memory || (n = !1),
            t = !1,
            o && (a = n ? [] : "")
        }, f = {
            add: function() {
                return a && (n && !t && (u = a.length - 1,
                s.push(n)),
                function i(t) {
                    we.each(t, function(t, n) {
                        ye(n) ? e.unique && f.has(n) || a.push(n) : n && n.length && "string" !== r(n) && i(n)
                    })
                }(arguments),
                n && !t && l()),
                this
            },
            remove: function() {
                return we.each(arguments, function(e, t) {
                    for (var n; (n = we.inArray(t, a, n)) > -1; )
                        a.splice(n, 1),
                        n <= u && u--
                }),
                this
            },
            has: function(e) {
                return e ? we.inArray(e, a) > -1 : a.length > 0
            },
            empty: function() {
                return a && (a = []),
                this
            },
            disable: function() {
                return o = s = [],
                a = n = "",
                this
            },
            disabled: function() {
                return !a
            },
            lock: function() {
                return o = s = [],
                n || t || (a = n = ""),
                this
            },
            locked: function() {
                return !!o
            },
            fireWith: function(e, n) {
                return o || (n = [e, (n = n || []).slice ? n.slice() : n],
                s.push(n),
                t || l()),
                this
            },
            fire: function() {
                return f.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!i
            }
        };
        return f
    }
    ,
    we.extend({
        Deferred: function(t) {
            var n = [["notify", "progress", we.Callbacks("memory"), we.Callbacks("memory"), 2], ["resolve", "done", we.Callbacks("once memory"), we.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", we.Callbacks("once memory"), we.Callbacks("once memory"), 1, "rejected"]]
              , r = "pending"
              , i = {
                state: function() {
                    return r
                },
                always: function() {
                    return o.done(arguments).fail(arguments),
                    this
                },
                "catch": function(e) {
                    return i.then(null, e)
                },
                pipe: function() {
                    var e = arguments;
                    return we.Deferred(function(t) {
                        we.each(n, function(n, r) {
                            var i = ye(e[r[4]]) && e[r[4]];
                            o[r[1]](function() {
                                var e = i && i.apply(this, arguments);
                                e && ye(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                then: function(t, r, i) {
                    function o(t, n, r, i) {
                        return function() {
                            var s = this
                              , c = arguments
                              , f = function() {
                                var e, f;
                                if (!(t < a)) {
                                    if ((e = r.apply(s, c)) === n.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    f = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    ye(f) ? i ? f.call(e, o(a, n, u, i), o(a, n, l, i)) : (a++,
                                    f.call(e, o(a, n, u, i), o(a, n, l, i), o(a, n, u, n.notifyWith))) : (r !== u && (s = void 0,
                                    c = [e]),
                                    (i || n.resolveWith)(s, c))
                                }
                            }
                              , d = i ? f : function() {
                                try {
                                    f()
                                } catch (e) {
                                    we.Deferred.exceptionHook && we.Deferred.exceptionHook(e, d.stackTrace),
                                    t + 1 >= a && (r !== l && (s = void 0,
                                    c = [e]),
                                    n.rejectWith(s, c))
                                }
                            }
                            ;
                            t ? d() : (we.Deferred.getStackHook && (d.stackTrace = we.Deferred.getStackHook()),
                            e.setTimeout(d))
                        }
                    }
                    var a = 0;
                    return we.Deferred(function(e) {
                        n[0][3].add(o(0, e, ye(i) ? i : u, e.notifyWith)),
                        n[1][3].add(o(0, e, ye(t) ? t : u)),
                        n[2][3].add(o(0, e, ye(r) ? r : l))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? we.extend(e, i) : i
                }
            }
              , o = {};
            return we.each(n, function(e, t) {
                var a = t[2]
                  , s = t[5];
                i[t[1]] = a.add,
                s && a.add(function() {
                    r = s
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock),
                a.add(t[3].fire),
                o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments),
                    this
                }
                ,
                o[t[0] + "With"] = a.fireWith
            }),
            i.promise(o),
            t && t.call(o, o),
            o
        },
        when: function(e) {
            var t = arguments.length
              , n = t
              , r = Array(n)
              , i = ce.call(arguments)
              , o = we.Deferred()
              , a = function(e) {
                return function(n) {
                    r[e] = this,
                    i[e] = arguments.length > 1 ? ce.call(arguments) : n,
                    --t || o.resolveWith(r, i)
                }
            };
            if (t <= 1 && (f(e, o.done(a(n)).resolve, o.reject, !t),
            "pending" === o.state() || ye(i[n] && i[n].then)))
                return o.then();
            for (; n--; )
                f(i[n], a(n), o.reject);
            return o.promise()
        }
    });
    var je = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    we.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && je.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }
    ,
    we.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    }
    ;
    var Pe = we.Deferred();
    we.fn.ready = function(e) {
        return Pe.then(e)["catch"](function(e) {
            we.readyException(e)
        }),
        this
    }
    ,
    we.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --we.readyWait : we.isReady) || (we.isReady = !0,
            !0 !== e && --we.readyWait > 0 || Pe.resolveWith(ae, [we]))
        }
    }),
    we.ready.then = Pe.then,
    "complete" === ae.readyState || "loading" !== ae.readyState && !ae.documentElement.doScroll ? e.setTimeout(we.ready) : (ae.addEventListener("DOMContentLoaded", d),
    e.addEventListener("load", d));
    var Re = function(e, t, n, i, o, a, s) {
        var c = 0
          , u = e.length
          , l = null == n;
        if ("object" === r(n))
            for (c in o = !0,
            n)
                Re(e, t, c, n[c], !0, a, s);
        else if (void 0 !== i && (o = !0,
        ye(i) || (s = !0),
        l && (s ? (t.call(e, i),
        t = null) : (l = t,
        t = function(e, t, n) {
            return l.call(we(e), n)
        }
        )),
        t))
            for (; c < u; c++)
                t(e[c], n, s ? i : i.call(e[c], c, t(e[c], n)));
        return o ? e : l ? t.call(e) : u ? t(e[0], n) : a
    }
      , Ne = /^-ms-/
      , Le = /-([a-z])/g
      , Fe = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    m.uid = 1,
    m.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            Fe(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t)
                i[h(t)] = n;
            else
                for (r in t)
                    i[h(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][h(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(h) : (t = h(t))in r ? [t] : t.match(De) || []).length;
                    for (; n--; )
                        delete r[t[n]]
                }
                (void 0 === t || we.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !we.isEmptyObject(t)
        }
    };
    var Me = new m
      , qe = new m
      , Ue = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , ze = /[A-Z]/g;
    we.extend({
        hasData: function(e) {
            return qe.hasData(e) || Me.hasData(e)
        },
        data: function(e, t, n) {
            return qe.access(e, t, n)
        },
        removeData: function(e, t) {
            qe.remove(e, t)
        },
        _data: function(e, t, n) {
            return Me.access(e, t, n)
        },
        _removeData: function(e, t) {
            Me.remove(e, t)
        }
    }),
    we.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = qe.get(o),
                1 === o.nodeType && !Me.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--; )
                        a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = h(r.slice(5)),
                        v(o, r, i[r]));
                    Me.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                qe.set(this, e)
            }) : Re(this, function(t) {
                var n;
                if (o && void 0 === t) {
                    if (void 0 !== (n = qe.get(o, e)))
                        return n;
                    if (void 0 !== (n = v(o, e)))
                        return n
                } else
                    this.each(function() {
                        qe.set(this, e, t)
                    })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                qe.remove(this, e)
            })
        }
    }),
    we.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue",
                r = Me.get(e, t),
                n && (!r || Array.isArray(n) ? r = Me.access(e, t, we.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = we.queue(e, t)
              , r = n.length
              , i = n.shift()
              , o = we._queueHooks(e, t)
              , a = function() {
                we.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, a, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Me.get(e, n) || Me.access(e, n, {
                empty: we.Callbacks("once memory").add(function() {
                    Me.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    we.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            n--),
            arguments.length < n ? we.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = we.queue(this, e, t);
                we._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && we.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                we.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, i = we.Deferred(), o = this, a = this.length, s = function() {
                --r || i.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; a--; )
                (n = Me.get(o[a], e + "queueHooks")) && n.empty && (r++,
                n.empty.add(s));
            return s(),
            i.promise(t)
        }
    });
    var Be = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , He = new RegExp("^(?:([+-])=|)(" + Be + ")([a-z%]*)$","i")
      , We = ["Top", "Right", "Bottom", "Left"]
      , Ve = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && we.contains(e.ownerDocument, e) && "none" === we.css(e, "display")
    }
      , Qe = function(e, t, n, r) {
        var i, o, a = {};
        for (o in t)
            a[o] = e.style[o],
            e.style[o] = t[o];
        for (o in i = n.apply(e, r || []),
        t)
            e.style[o] = a[o];
        return i
    }
      , Ke = {};
    we.fn.extend({
        show: function() {
            return _(this, !0)
        },
        hide: function() {
            return _(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Ve(this) ? we(this).show() : we(this).hide()
            })
        }
    });
    var Ye = /^(?:checkbox|radio)$/i
      , Ge = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
      , Xe = /^$|^module$|\/(?:java|ecma)script/i
      , Je = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Je.optgroup = Je.option,
    Je.tbody = Je.tfoot = Je.colgroup = Je.caption = Je.thead,
    Je.th = Je.td;
    var Ze = /<|&#?\w+;/;
    !function() {
        var e = ae.createDocumentFragment().appendChild(ae.createElement("div"))
          , t = ae.createElement("input");
        t.setAttribute("type", "radio"),
        t.setAttribute("checked", "checked"),
        t.setAttribute("name", "t"),
        e.appendChild(t),
        ve.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
        e.innerHTML = "<textarea>x</textarea>",
        ve.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var et = ae.documentElement
      , tt = /^key/
      , nt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , rt = /^([^.]*)(?:\.(.+)|)/;
    we.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, c, u, l, f, d, p, h, m, g = Me.get(e);
            if (g)
                for (n.handler && (n = (o = n).handler,
                i = o.selector),
                i && we.find.matchesSelector(et, i),
                n.guid || (n.guid = we.guid++),
                (c = g.events) || (c = g.events = {}),
                (a = g.handle) || (a = g.handle = function(t) {
                    return void 0 !== we && we.event.triggered !== t.type ? we.event.dispatch.apply(e, arguments) : void 0
                }
                ),
                u = (t = (t || "").match(De) || [""]).length; u--; )
                    p = m = (s = rt.exec(t[u]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    p && (f = we.event.special[p] || {},
                    p = (i ? f.delegateType : f.bindType) || p,
                    f = we.event.special[p] || {},
                    l = we.extend({
                        type: p,
                        origType: m,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && we.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o),
                    (d = c[p]) || ((d = c[p] = []).delegateCount = 0,
                    f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(p, a)),
                    f.add && (f.add.call(e, l),
                    l.handler.guid || (l.handler.guid = n.guid)),
                    i ? d.splice(d.delegateCount++, 0, l) : d.push(l),
                    we.event.global[p] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, c, u, l, f, d, p, h, m, g = Me.hasData(e) && Me.get(e);
            if (g && (c = g.events)) {
                for (u = (t = (t || "").match(De) || [""]).length; u--; )
                    if (p = m = (s = rt.exec(t[u]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    p) {
                        for (f = we.event.special[p] || {},
                        d = c[p = (r ? f.delegateType : f.bindType) || p] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = o = d.length; o--; )
                            l = d[o],
                            !i && m !== l.origType || n && n.guid !== l.guid || s && !s.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (d.splice(o, 1),
                            l.selector && d.delegateCount--,
                            f.remove && f.remove.call(e, l));
                        a && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, g.handle) || we.removeEvent(e, p, g.handle),
                        delete c[p])
                    } else
                        for (p in c)
                            we.event.remove(e, p + t[u], n, r, !0);
                we.isEmptyObject(c) && Me.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = we.event.fix(e), c = new Array(arguments.length), u = (Me.get(this, "events") || {})[s.type] || [], l = we.event.special[s.type] || {};
            for (c[0] = s,
            t = 1; t < arguments.length; t++)
                c[t] = arguments[t];
            if (s.delegateTarget = this,
            !l.preDispatch || !1 !== l.preDispatch.call(this, s)) {
                for (a = we.event.handlers.call(this, s, u),
                t = 0; (i = a[t++]) && !s.isPropagationStopped(); )
                    for (s.currentTarget = i.elem,
                    n = 0; (o = i.handlers[n++]) && !s.isImmediatePropagationStopped(); )
                        s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o,
                        s.data = o.data,
                        void 0 !== (r = ((we.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, c)) && !1 === (s.result = r) && (s.preventDefault(),
                        s.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, s),
                s.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [], c = t.delegateCount, u = e.target;
            if (c && u.nodeType && !("click" === e.type && e.button >= 1))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                        for (o = [],
                        a = {},
                        n = 0; n < c; n++)
                            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? we(i, this).index(u) > -1 : we.find(i, this, null, [u]).length),
                            a[i] && o.push(r);
                        o.length && s.push({
                            elem: u,
                            handlers: o
                        })
                    }
            return u = this,
            c < t.length && s.push({
                elem: u,
                handlers: t.slice(c)
            }),
            s
        },
        addProp: function(e, t) {
            Object.defineProperty(we.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: ye(t) ? function() {
                    if (this.originalEvent)
                        return t(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[e]
                }
                ,
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[we.expando] ? e : new we.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== C() && this.focus)
                        return this.focus(),
                        !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === C() && this.blur)
                        return this.blur(),
                        !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && o(this, "input"))
                        return this.click(),
                        !1
                },
                _default: function(e) {
                    return o(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    we.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    we.Event = function(e, t) {
        if (!(this instanceof we.Event))
            return new we.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? S : A,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && we.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[we.expando] = !0
    }
    ,
    we.Event.prototype = {
        constructor: we.Event,
        isDefaultPrevented: A,
        isPropagationStopped: A,
        isImmediatePropagationStopped: A,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = S,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = S,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = S,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    we.each({
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
            return null == e.which && tt.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && nt.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, we.event.addProp),
    we.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        we.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return i && (i === r || we.contains(r, i)) || (e.type = o.origType,
                n = o.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }),
    we.fn.extend({
        on: function(e, t, n, r) {
            return E(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return E(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                we(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof e) {
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = void 0),
            !1 === n && (n = A),
            this.each(function() {
                we.event.remove(this, e, n, t)
            })
        }
    });
    var it = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
      , ot = /<script|<style|<link/i
      , at = /checked\s*(?:[^=]|=\s*.checked.)/i
      , st = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    we.extend({
        htmlPrefilter: function(e) {
            return e.replace(it, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, a, s = e.cloneNode(!0), c = we.contains(e.ownerDocument, e);
            if (!(ve.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || we.isXMLDoc(e)))
                for (a = w(s),
                r = 0,
                i = (o = w(e)).length; r < i; r++)
                    D(o[r], a[r]);
            if (t)
                if (n)
                    for (o = o || w(e),
                    a = a || w(s),
                    r = 0,
                    i = o.length; r < i; r++)
                        O(o[r], a[r]);
                else
                    O(e, s);
            return (a = w(s, "script")).length > 0 && x(a, !c && w(e, "script")),
            s
        },
        cleanData: function(e) {
            for (var t, n, r, i = we.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Fe(n)) {
                    if (t = n[Me.expando]) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? we.event.remove(n, r) : we.removeEvent(n, r, t.handle);
                        n[Me.expando] = void 0
                    }
                    n[qe.expando] && (n[qe.expando] = void 0)
                }
        }
    }),
    we.fn.extend({
        detach: function(e) {
            return P(this, e, !0)
        },
        remove: function(e) {
            return P(this, e)
        },
        text: function(e) {
            return Re(this, function(e) {
                return void 0 === e ? we.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return j(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || $(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return j(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = $(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return j(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return j(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (we.cleanData(w(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return we.clone(this, e, t)
            })
        },
        html: function(e) {
            return Re(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !ot.test(e) && !Je[(Ge.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = we.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType && (we.cleanData(w(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return j(this, arguments, function(t) {
                var n = this.parentNode;
                we.inArray(this, e) < 0 && (we.cleanData(w(this)),
                n && n.replaceChild(t, this))
            }, e)
        }
    }),
    we.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        we.fn[e] = function(e) {
            for (var n, r = [], i = we(e), o = i.length - 1, a = 0; a <= o; a++)
                n = a === o ? this : this.clone(!0),
                we(i[a])[t](n),
                le.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var ct = new RegExp("^(" + Be + ")(?!px)[a-z%]+$","i")
      , ut = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e),
        n.getComputedStyle(t)
    }
      , lt = new RegExp(We.join("|"),"i");
    !function() {
        function t() {
            if (u) {
                c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                et.appendChild(c).appendChild(u);
                var t = e.getComputedStyle(u);
                r = "1%" !== t.top,
                s = 12 === n(t.marginLeft),
                u.style.right = "60%",
                a = 36 === n(t.right),
                i = 36 === n(t.width),
                u.style.position = "absolute",
                o = 36 === u.offsetWidth || "absolute",
                et.removeChild(c),
                u = null
            }
        }
        function n(e) {
            return Math.round(parseFloat(e))
        }
        var r, i, o, a, s, c = ae.createElement("div"), u = ae.createElement("div");
        u.style && (u.style.backgroundClip = "content-box",
        u.cloneNode(!0).style.backgroundClip = "",
        ve.clearCloneStyle = "content-box" === u.style.backgroundClip,
        we.extend(ve, {
            boxSizingReliable: function() {
                return t(),
                i
            },
            pixelBoxStyles: function() {
                return t(),
                a
            },
            pixelPosition: function() {
                return t(),
                r
            },
            reliableMarginLeft: function() {
                return t(),
                s
            },
            scrollboxSize: function() {
                return t(),
                o
            }
        }))
    }();
    var ft = /^(none|table(?!-c[ea]).+)/
      , dt = /^--/
      , pt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , ht = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , mt = ["Webkit", "Moz", "ms"]
      , gt = ae.createElement("div").style;
    we.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = R(e, "opacity");
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
                var i, o, a, s = h(t), c = dt.test(t), u = e.style;
                if (c || (t = F(s)),
                a = we.cssHooks[t] || we.cssHooks[s],
                void 0 === n)
                    return a && "get"in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t];
                "string" == (o = typeof n) && (i = He.exec(n)) && i[1] && (n = y(e, t, i),
                o = "number"),
                null != n && n == n && ("number" === o && (n += i && i[3] || (we.cssNumber[s] ? "" : "px")),
                ve.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"),
                a && "set"in a && void 0 === (n = a.set(e, n, r)) || (c ? u.setProperty(t, n) : u[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = h(t);
            return dt.test(t) || (t = F(s)),
            (a = we.cssHooks[t] || we.cssHooks[s]) && "get"in a && (i = a.get(e, !0, n)),
            void 0 === i && (i = R(e, t, r)),
            "normal" === i && t in ht && (i = ht[t]),
            "" === n || n ? (o = parseFloat(i),
            !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }),
    we.each(["height", "width"], function(e, t) {
        we.cssHooks[t] = {
            get: function(e, n, r) {
                if (n)
                    return !ft.test(we.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? U(e, t, r) : Qe(e, pt, function() {
                        return U(e, t, r)
                    })
            },
            set: function(e, n, r) {
                var i, o = ut(e), a = "border-box" === we.css(e, "boxSizing", !1, o), s = r && q(e, t, r, a, o);
                return a && ve.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - q(e, t, "border", !1, o) - .5)),
                s && (i = He.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n,
                n = we.css(e, t)),
                M(e, n, s)
            }
        }
    }),
    we.cssHooks.marginLeft = N(ve.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(R(e, "marginLeft")) || e.getBoundingClientRect().left - Qe(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    we.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        we.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
                    i[e + We[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        },
        "margin" !== e && (we.cssHooks[e + t].set = M)
    }),
    we.fn.extend({
        css: function(e, t) {
            return Re(this, function(e, t, n) {
                var r, i, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = ut(e),
                    i = t.length; a < i; a++)
                        o[t[a]] = we.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? we.style(e, t, n) : we.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }),
    we.Tween = z,
    z.prototype = {
        constructor: z,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || we.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (we.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = z.propHooks[this.prop];
            return e && e.get ? e.get(this) : z.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = z.propHooks[this.prop];
            return this.options.duration ? this.pos = t = we.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : z.propHooks._default.set(this),
            this
        }
    },
    z.prototype.init.prototype = z.prototype,
    z.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = we.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                we.fx.step[e.prop] ? we.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[we.cssProps[e.prop]] && !we.cssHooks[e.prop] ? e.elem[e.prop] = e.now : we.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    },
    z.propHooks.scrollTop = z.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    we.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    we.fx = z.prototype.init,
    we.fx.step = {};
    var vt, yt, bt = /^(?:toggle|show|hide)$/, _t = /queueHooks$/;
    we.Animation = we.extend(Y, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return y(n.elem, e, He.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            ye(e) ? (t = e,
            e = ["*"]) : e = e.match(De);
            for (var n, r = 0, i = e.length; r < i; r++)
                n = e[r],
                Y.tweeners[n] = Y.tweeners[n] || [],
                Y.tweeners[n].unshift(t)
        },
        prefilters: [Q],
        prefilter: function(e, t) {
            t ? Y.prefilters.unshift(e) : Y.prefilters.push(e)
        }
    }),
    we.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? we.extend({}, e) : {
            complete: n || !n && t || ye(e) && e,
            duration: e,
            easing: n && t || t && !ye(t) && t
        };
        return we.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in we.fx.speeds ? r.duration = we.fx.speeds[r.duration] : r.duration = we.fx.speeds._default),
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            ye(r.old) && r.old.call(this),
            r.queue && we.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    we.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(Ve).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = we.isEmptyObject(e)
              , o = we.speed(t, n, r)
              , a = function() {
                var t = Y(this, we.extend({}, e), o);
                (i || Me.get(this, "finish")) && t.stop(!0)
            };
            return a.finish = a,
            i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return "string" != typeof e && (n = t,
            t = e,
            e = void 0),
            t && !1 !== e && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0
                  , i = null != e && e + "queueHooks"
                  , o = we.timers
                  , a = Me.get(this);
                if (i)
                    a[i] && a[i].stop && r(a[i]);
                else
                    for (i in a)
                        a[i] && a[i].stop && _t.test(i) && r(a[i]);
                for (i = o.length; i--; )
                    o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n),
                    t = !1,
                    o.splice(i, 1));
                !t && n || we.dequeue(this, e)
            })
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"),
            this.each(function() {
                var t, n = Me.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = we.timers, a = r ? r.length : 0;
                for (n.finish = !0,
                we.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0),
                t = o.length; t--; )
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                    o.splice(t, 1));
                for (t = 0; t < a; t++)
                    r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    we.each(["toggle", "show", "hide"], function(e, t) {
        var n = we.fn[t];
        we.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(W(t, !0), e, r, i)
        }
    }),
    we.each({
        slideDown: W("show"),
        slideUp: W("hide"),
        slideToggle: W("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        we.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }),
    we.timers = [],
    we.fx.tick = function() {
        var e, t = 0, n = we.timers;
        for (vt = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || we.fx.stop(),
        vt = void 0
    }
    ,
    we.fx.timer = function(e) {
        we.timers.push(e),
        we.fx.start()
    }
    ,
    we.fx.interval = 13,
    we.fx.start = function() {
        yt || (yt = !0,
        B())
    }
    ,
    we.fx.stop = function() {
        yt = null
    }
    ,
    we.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    we.fn.delay = function(t, n) {
        return t = we.fx && we.fx.speeds[t] || t,
        n = n || "fx",
        this.queue(n, function(n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function() {
                e.clearTimeout(i)
            }
        })
    }
    ,
    function() {
        var e = ae.createElement("input")
          , t = ae.createElement("select").appendChild(ae.createElement("option"));
        e.type = "checkbox",
        ve.checkOn = "" !== e.value,
        ve.optSelected = t.selected,
        (e = ae.createElement("input")).value = "t",
        e.type = "radio",
        ve.radioValue = "t" === e.value
    }();
    var wt, xt = we.expr.attrHandle;
    we.fn.extend({
        attr: function(e, t) {
            return Re(this, we.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                we.removeAttr(this, e)
            })
        }
    }),
    we.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return "undefined" == typeof e.getAttribute ? we.prop(e, t, n) : (1 === o && we.isXMLDoc(e) || (i = we.attrHooks[t.toLowerCase()] || (we.expr.match.bool.test(t) ? wt : void 0)),
                void 0 !== n ? null === n ? void we.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : null == (r = we.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!ve.radioValue && "radio" === t && o(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0, i = t && t.match(De);
            if (i && 1 === e.nodeType)
                for (; n = i[r++]; )
                    e.removeAttribute(n)
        }
    }),
    wt = {
        set: function(e, t, n) {
            return !1 === t ? we.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    we.each(we.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = xt[t] || we.find.attr;
        xt[t] = function(e, t, r) {
            var i, o, a = t.toLowerCase();
            return r || (o = xt[a],
            xt[a] = i,
            i = null != n(e, t, r) ? a : null,
            xt[a] = o),
            i
        }
    });
    var kt = /^(?:input|select|textarea|button)$/i
      , St = /^(?:a|area)$/i;
    we.fn.extend({
        prop: function(e, t) {
            return Re(this, we.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[we.propFix[e] || e]
            })
        }
    }),
    we.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && we.isXMLDoc(e) || (t = we.propFix[t] || t,
                i = we.propHooks[t]),
                void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = we.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : kt.test(e.nodeName) || St.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    ve.optSelected || (we.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    we.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        we.propFix[this.toLowerCase()] = this
    }),
    we.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s, c = 0;
            if (ye(e))
                return this.each(function(t) {
                    we(this).addClass(e.call(this, t, X(this)))
                });
            if ((t = J(e)).length)
                for (; n = this[c++]; )
                    if (i = X(n),
                    r = 1 === n.nodeType && " " + G(i) + " ") {
                        for (a = 0; o = t[a++]; )
                            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = G(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s, c = 0;
            if (ye(e))
                return this.each(function(t) {
                    we(this).removeClass(e.call(this, t, X(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((t = J(e)).length)
                for (; n = this[c++]; )
                    if (i = X(n),
                    r = 1 === n.nodeType && " " + G(i) + " ") {
                        for (a = 0; o = t[a++]; )
                            for (; r.indexOf(" " + o + " ") > -1; )
                                r = r.replace(" " + o + " ", " ");
                        i !== (s = G(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e
              , r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : ye(e) ? this.each(function(n) {
                we(this).toggleClass(e.call(this, n, X(this), t), t)
            }) : this.each(function() {
                var t, i, o, a;
                if (r)
                    for (i = 0,
                    o = we(this),
                    a = J(e); t = a[i++]; )
                        o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else
                    void 0 !== e && "boolean" !== n || ((t = X(this)) && Me.set(this, "__className__", t),
                    this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Me.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++]; )
                if (1 === n.nodeType && (" " + G(X(n)) + " ").indexOf(t) > -1)
                    return !0;
            return !1
        }
    });
    var At = /\r/g;
    we.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = ye(e),
            this.each(function(n) {
                var i;
                1 === this.nodeType && (null == (i = r ? e.call(this, n, we(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = we.map(i, function(e) {
                    return null == e ? "" : e + ""
                })),
                (t = we.valHooks[this.type] || we.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            })) : i ? (t = we.valHooks[i.type] || we.valHooks[i.nodeName.toLowerCase()]) && "get"in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(At, "") : null == n ? "" : n : void 0
        }
    }),
    we.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = we.find.attr(e, "value");
                    return null != t ? t : G(we.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options, a = e.selectedIndex, s = "select-one" === e.type, c = s ? null : [], u = s ? a + 1 : i.length;
                    for (r = a < 0 ? u : s ? a : 0; r < u; r++)
                        if (((n = i[r]).selected || r === a) && !n.disabled && (!n.parentNode.disabled || !o(n.parentNode, "optgroup"))) {
                            if (t = we(n).val(),
                            s)
                                return t;
                            c.push(t)
                        }
                    return c
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = we.makeArray(t), a = i.length; a--; )
                        ((r = i[a]).selected = we.inArray(we.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    we.each(["radio", "checkbox"], function() {
        we.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = we.inArray(we(e).val(), t) > -1
            }
        },
        ve.checkOn || (we.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }),
    ve.focusin = "onfocusin"in e;
    var Ct = /^(?:focusinfocus|focusoutblur)$/
      , Et = function(e) {
        e.stopPropagation()
    };
    we.extend(we.event, {
        trigger: function(t, n, r, i) {
            var o, a, s, c, u, l, f, d, p = [r || ae], h = he.call(t, "type") ? t.type : t, m = he.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = d = s = r = r || ae,
            3 !== r.nodeType && 8 !== r.nodeType && !Ct.test(h + we.event.triggered) && (h.indexOf(".") > -1 && (h = (m = h.split(".")).shift(),
            m.sort()),
            u = h.indexOf(":") < 0 && "on" + h,
            (t = t[we.expando] ? t : new we.Event(h,"object" == typeof t && t)).isTrigger = i ? 2 : 3,
            t.namespace = m.join("."),
            t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = r),
            n = null == n ? [t] : we.makeArray(n, [t]),
            f = we.event.special[h] || {},
            i || !f.trigger || !1 !== f.trigger.apply(r, n))) {
                if (!i && !f.noBubble && !be(r)) {
                    for (c = f.delegateType || h,
                    Ct.test(c + h) || (a = a.parentNode); a; a = a.parentNode)
                        p.push(a),
                        s = a;
                    s === (r.ownerDocument || ae) && p.push(s.defaultView || s.parentWindow || e)
                }
                for (o = 0; (a = p[o++]) && !t.isPropagationStopped(); )
                    d = a,
                    t.type = o > 1 ? c : f.bindType || h,
                    (l = (Me.get(a, "events") || {})[t.type] && Me.get(a, "handle")) && l.apply(a, n),
                    (l = u && a[u]) && l.apply && Fe(a) && (t.result = l.apply(a, n),
                    !1 === t.result && t.preventDefault());
                return t.type = h,
                i || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(p.pop(), n) || !Fe(r) || u && ye(r[h]) && !be(r) && ((s = r[u]) && (r[u] = null),
                we.event.triggered = h,
                t.isPropagationStopped() && d.addEventListener(h, Et),
                r[h](),
                t.isPropagationStopped() && d.removeEventListener(h, Et),
                we.event.triggered = void 0,
                s && (r[u] = s)),
                t.result
            }
        },
        simulate: function(e, t, n) {
            var r = we.extend(new we.Event, n, {
                type: e,
                isSimulated: !0
            });
            we.event.trigger(r, null, t)
        }
    }),
    we.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                we.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return we.event.trigger(e, t, n, !0)
        }
    }),
    ve.focusin || we.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            we.event.simulate(t, e.target, we.event.fix(e))
        };
        we.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this
                  , i = Me.access(r, t);
                i || r.addEventListener(e, n, !0),
                Me.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this
                  , i = Me.access(r, t) - 1;
                i ? Me.access(r, t, i) : (r.removeEventListener(e, n, !0),
                Me.remove(r, t))
            }
        }
    });
    var $t = e.location
      , Tt = Date.now()
      , It = /\?/;
    we.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t)
            return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || we.error("Invalid XML: " + t),
        n
    }
    ;
    var Ot = /\[\]$/
      , Dt = /\r?\n/g
      , jt = /^(?:submit|button|image|reset|file)$/i
      , Pt = /^(?:input|select|textarea|keygen)/i;
    we.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            var n = ye(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (Array.isArray(e) || e.jquery && !we.isPlainObject(e))
            we.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                Z(n, e[n], t, i);
        return r.join("&")
    }
    ,
    we.fn.extend({
        serialize: function() {
            return we.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = we.prop(this, "elements");
                return e ? we.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !we(this).is(":disabled") && Pt.test(this.nodeName) && !jt.test(e) && (this.checked || !Ye.test(e))
            }).map(function(e, t) {
                var n = we(this).val();
                return null == n ? null : Array.isArray(n) ? we.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Dt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Dt, "\r\n")
                }
            }).get()
        }
    });
    var Rt = /%20/g
      , Nt = /#.*$/
      , Lt = /([?&])_=[^&]*/
      , Ft = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Mt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
      , qt = /^(?:GET|HEAD)$/
      , Ut = /^\/\//
      , zt = {}
      , Bt = {}
      , Ht = "*/".concat("*")
      , Wt = ae.createElement("a");
    Wt.href = $t.href,
    we.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: $t.href,
            type: "GET",
            isLocal: Mt.test($t.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ht,
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
                "text xml": we.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? ne(ne(e, we.ajaxSettings), t) : ne(we.ajaxSettings, e)
        },
        ajaxPrefilter: ee(zt),
        ajaxTransport: ee(Bt),
        ajax: function(t, n) {
            function r(t, n, r, s) {
                var u, d, p, _, w, x = n;
                l || (l = !0,
                c && e.clearTimeout(c),
                i = void 0,
                a = s || "",
                k.readyState = t > 0 ? 4 : 0,
                u = t >= 200 && t < 300 || 304 === t,
                r && (_ = re(h, k, r)),
                _ = ie(h, _, k, u),
                u ? (h.ifModified && ((w = k.getResponseHeader("Last-Modified")) && (we.lastModified[o] = w),
                (w = k.getResponseHeader("etag")) && (we.etag[o] = w)),
                204 === t || "HEAD" === h.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = _.state,
                d = _.data,
                u = !(p = _.error))) : (p = x,
                !t && x || (x = "error",
                t < 0 && (t = 0))),
                k.status = t,
                k.statusText = (n || x) + "",
                u ? v.resolveWith(m, [d, x, k]) : v.rejectWith(m, [k, x, p]),
                k.statusCode(b),
                b = void 0,
                f && g.trigger(u ? "ajaxSuccess" : "ajaxError", [k, h, u ? d : p]),
                y.fireWith(m, [k, x]),
                f && (g.trigger("ajaxComplete", [k, h]),
                --we.active || we.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t,
            t = void 0),
            n = n || {};
            var i, o, a, s, c, u, l, f, d, p, h = we.ajaxSetup({}, n), m = h.context || h, g = h.context && (m.nodeType || m.jquery) ? we(m) : we.event, v = we.Deferred(), y = we.Callbacks("once memory"), b = h.statusCode || {}, _ = {}, w = {}, x = "canceled", k = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (l) {
                        if (!s)
                            for (s = {}; t = Ft.exec(a); )
                                s[t[1].toLowerCase()] = t[2];
                        t = s[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return l ? a : null
                },
                setRequestHeader: function(e, t) {
                    return null == l && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e,
                    _[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == l && (h.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (l)
                            k.always(e[k.status]);
                        else
                            for (t in e)
                                b[t] = [b[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || x;
                    return i && i.abort(t),
                    r(0, t),
                    this
                }
            };
            if (v.promise(k),
            h.url = ((t || h.url || $t.href) + "").replace(Ut, $t.protocol + "//"),
            h.type = n.method || n.type || h.method || h.type,
            h.dataTypes = (h.dataType || "*").toLowerCase().match(De) || [""],
            null == h.crossDomain) {
                u = ae.createElement("a");
                try {
                    u.href = h.url,
                    u.href = u.href,
                    h.crossDomain = Wt.protocol + "//" + Wt.host != u.protocol + "//" + u.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = we.param(h.data, h.traditional)),
            te(zt, h, n, k),
            l)
                return k;
            for (d in (f = we.event && h.global) && 0 == we.active++ && we.event.trigger("ajaxStart"),
            h.type = h.type.toUpperCase(),
            h.hasContent = !qt.test(h.type),
            o = h.url.replace(Nt, ""),
            h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Rt, "+")) : (p = h.url.slice(o.length),
            h.data && (h.processData || "string" == typeof h.data) && (o += (It.test(o) ? "&" : "?") + h.data,
            delete h.data),
            !1 === h.cache && (o = o.replace(Lt, "$1"),
            p = (It.test(o) ? "&" : "?") + "_=" + Tt++ + p),
            h.url = o + p),
            h.ifModified && (we.lastModified[o] && k.setRequestHeader("If-Modified-Since", we.lastModified[o]),
            we.etag[o] && k.setRequestHeader("If-None-Match", we.etag[o])),
            (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && k.setRequestHeader("Content-Type", h.contentType),
            k.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ht + "; q=0.01" : "") : h.accepts["*"]),
            h.headers)
                k.setRequestHeader(d, h.headers[d]);
            if (h.beforeSend && (!1 === h.beforeSend.call(m, k, h) || l))
                return k.abort();
            if (x = "abort",
            y.add(h.complete),
            k.done(h.success),
            k.fail(h.error),
            i = te(Bt, h, n, k)) {
                if (k.readyState = 1,
                f && g.trigger("ajaxSend", [k, h]),
                l)
                    return k;
                h.async && h.timeout > 0 && (c = e.setTimeout(function() {
                    k.abort("timeout")
                }, h.timeout));
                try {
                    l = !1,
                    i.send(_, r)
                } catch (e) {
                    if (l)
                        throw e;
                    r(-1, e)
                }
            } else
                r(-1, "No Transport");
            return k
        },
        getJSON: function(e, t, n) {
            return we.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return we.get(e, void 0, t, "script")
        }
    }),
    we.each(["get", "post"], function(e, t) {
        we[t] = function(e, n, r, i) {
            return ye(n) && (i = i || r,
            r = n,
            n = void 0),
            we.ajax(we.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, we.isPlainObject(e) && e))
        }
    }),
    we._evalUrl = function(e) {
        return we.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }
    ,
    we.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (ye(e) && (e = e.call(this[0])),
            t = we(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(e) {
            return ye(e) ? this.each(function(t) {
                we(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = we(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = ye(e);
            return this.each(function(n) {
                we(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                we(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    we.expr.pseudos.hidden = function(e) {
        return !we.expr.pseudos.visible(e)
    }
    ,
    we.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    we.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var Vt = {
        0: 200,
        1223: 204
    }
      , Qt = we.ajaxSettings.xhr();
    ve.cors = !!Qt && "withCredentials"in Qt,
    ve.ajax = Qt = !!Qt,
    we.ajaxTransport(function(t) {
        var n, r;
        if (ve.cors || Qt && !t.crossDomain)
            return {
                send: function(i, o) {
                    var a, s = t.xhr();
                    if (s.open(t.type, t.url, t.async, t.username, t.password),
                    t.xhrFields)
                        for (a in t.xhrFields)
                            s[a] = t.xhrFields[a];
                    for (a in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType),
                    t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"),
                    i)
                        s.setRequestHeader(a, i[a]);
                    n = function(e) {
                        return function() {
                            n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null,
                            "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                binary: s.response
                            } : {
                                text: s.responseText
                            }, s.getAllResponseHeaders()))
                        }
                    }
                    ,
                    s.onload = n(),
                    r = s.onerror = s.ontimeout = n("error"),
                    void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                        4 === s.readyState && e.setTimeout(function() {
                            n && r()
                        })
                    }
                    ,
                    n = n("abort");
                    try {
                        s.send(t.hasContent && t.data || null)
                    } catch (e) {
                        if (n)
                            throw e
                    }
                },
                abort: function() {
                    n && n()
                }
            }
    }),
    we.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    we.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return we.globalEval(e),
                e
            }
        }
    }),
    we.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    we.ajaxTransport("script", function(e) {
        var t, n;
        if (e.crossDomain)
            return {
                send: function(r, i) {
                    t = we("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(),
                        n = null,
                        e && i("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    ae.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
    });
    var Kt = []
      , Yt = /(=)\?(?=&|$)|\?\?/;
    we.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Kt.pop() || we.expando + "_" + Tt++;
            return this[e] = !0,
            e
        }
    }),
    we.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, a, s = !1 !== t.jsonp && (Yt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0])
            return i = t.jsonpCallback = ye(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            s ? t[s] = t[s].replace(Yt, "$1" + i) : !1 !== t.jsonp && (t.url += (It.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
            t.converters["script json"] = function() {
                return a || we.error(i + " was not called"),
                a[0]
            }
            ,
            t.dataTypes[0] = "json",
            o = e[i],
            e[i] = function() {
                a = arguments
            }
            ,
            r.always(function() {
                void 0 === o ? we(e).removeProp(i) : e[i] = o,
                t[i] && (t.jsonpCallback = n.jsonpCallback,
                Kt.push(i)),
                a && ye(o) && o(a[0]),
                a = o = void 0
            }),
            "script"
    }),
    ve.createHTMLDocument = function() {
        var e = ae.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>",
        2 === e.childNodes.length
    }(),
    we.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (ve.createHTMLDocument ? ((r = (t = ae.implementation.createHTMLDocument("")).createElement("base")).href = ae.location.href,
        t.head.appendChild(r)) : t = ae),
        o = !n && [],
        (i = Ee.exec(e)) ? [t.createElement(i[1])] : (i = k([e], t, o),
        o && o.length && we(o).remove(),
        we.merge([], i.childNodes)));
        var r, i, o
    }
    ,
    we.fn.load = function(e, t, n) {
        var r, i, o, a = this, s = e.indexOf(" ");
        return s > -1 && (r = G(e.slice(s)),
        e = e.slice(0, s)),
        ye(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (i = "POST"),
        a.length > 0 && we.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            a.html(r ? we("<div>").append(we.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    we.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        we.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    we.expr.pseudos.animated = function(e) {
        return we.grep(we.timers, function(t) {
            return e === t.elem
        }).length
    }
    ,
    we.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, c, u = we.css(e, "position"), l = we(e), f = {};
            "static" === u && (e.style.position = "relative"),
            s = l.offset(),
            o = we.css(e, "top"),
            c = we.css(e, "left"),
            ("absolute" === u || "fixed" === u) && (o + c).indexOf("auto") > -1 ? (a = (r = l.position()).top,
            i = r.left) : (a = parseFloat(o) || 0,
            i = parseFloat(c) || 0),
            ye(t) && (t = t.call(e, n, we.extend({}, s))),
            null != t.top && (f.top = t.top - s.top + a),
            null != t.left && (f.left = t.left - s.left + i),
            "using"in t ? t.using.call(e, f) : l.css(f)
        }
    },
    we.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(t) {
                    we.offset.setOffset(this, e, t)
                });
            var t, n, r = this[0];
            return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(),
            n = r.ownerDocument.defaultView,
            {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0], i = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === we.css(r, "position"))
                    t = r.getBoundingClientRect();
                else {
                    for (t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === we.css(e, "position"); )
                        e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = we(e).offset()).top += we.css(e, "borderTopWidth", !0),
                    i.left += we.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - we.css(r, "marginTop", !0),
                    left: t.left - i.left - we.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === we.css(e, "position"); )
                    e = e.offsetParent;
                return e || et
            })
        }
    }),
    we.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        we.fn[e] = function(r) {
            return Re(this, function(e, r, i) {
                var o;
                if (be(e) ? o = e : 9 === e.nodeType && (o = e.defaultView),
                void 0 === i)
                    return o ? o[t] : e[r];
                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
            }, e, r, arguments.length)
        }
    }),
    we.each(["top", "left"], function(e, t) {
        we.cssHooks[t] = N(ve.pixelPosition, function(e, n) {
            if (n)
                return n = R(e, t),
                ct.test(n) ? we(e).position()[t] + "px" : n
        })
    }),
    we.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        we.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            we.fn[r] = function(i, o) {
                var a = arguments.length && (n || "boolean" != typeof i)
                  , s = n || (!0 === i || !0 === o ? "margin" : "border");
                return Re(this, function(t, n, i) {
                    var o;
                    return be(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement,
                    Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? we.css(t, n, s) : we.style(t, n, i, s)
                }, t, a ? i : void 0, a)
            }
        })
    }),
    we.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        we.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    we.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    we.fn.extend({
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
    }),
    we.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t],
        t = e,
        e = n),
        ye(e))
            return r = ce.call(arguments, 2),
            (i = function() {
                return e.apply(t || this, r.concat(ce.call(arguments)))
            }
            ).guid = e.guid = e.guid || we.guid++,
            i
    }
    ,
    we.holdReady = function(e) {
        e ? we.readyWait++ : we.ready(!0)
    }
    ,
    we.isArray = Array.isArray,
    we.parseJSON = JSON.parse,
    we.nodeName = o,
    we.isFunction = ye,
    we.isWindow = be,
    we.camelCase = h,
    we.type = r,
    we.now = Date.now,
    we.isNumeric = function(e) {
        var t = we.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return we
    });
    var Gt = e.jQuery
      , Xt = e.$;
    return we.noConflict = function(t) {
        return e.$ === we && (e.$ = Xt),
        t && e.jQuery === we && (e.jQuery = Gt),
        we
    }
    ,
    t || (e.jQuery = e.$ = we),
    we
}),
function(e) {
    var t = e(window);
    e.fn.visible = function(e, n, r) {
        if (!(this.length < 1)) {
            var i = this.length > 1 ? this.eq(0) : this
              , o = i.get(0)
              , a = t.width()
              , s = t.height()
              , c = (r = r || "both",
            !0 !== n || o.offsetWidth * o.offsetHeight);
            if ("function" == typeof o.getBoundingClientRect) {
                var u = o.getBoundingClientRect()
                  , l = u.top >= 0 && u.top < s
                  , f = u.bottom > 0 && u.bottom <= s
                  , d = u.left >= 0 && u.left < a
                  , p = u.right > 0 && u.right <= a
                  , h = e ? l || f : l && f
                  , m = e ? d || p : d && p;
                if ("both" === r)
                    return c && h && m;
                if ("vertical" === r)
                    return c && h;
                if ("horizontal" === r)
                    return c && m
            } else {
                var g = t.scrollTop()
                  , v = g + s
                  , y = t.scrollLeft()
                  , b = y + a
                  , _ = i.offset()
                  , w = _.top
                  , x = w + i.height()
                  , k = _.left
                  , S = k + i.width()
                  , A = !0 === e ? x : w
                  , C = !0 === e ? w : x
                  , E = !0 === e ? S : k
                  , $ = !0 === e ? k : S;
                if ("both" === r)
                    return !!c && C <= v && A >= g && $ <= b && E >= y;
                if ("vertical" === r)
                    return !!c && C <= v && A >= g;
                if ("horizontal" === r)
                    return !!c && $ <= b && E >= y
            }
        }
    }
}(jQuery),
function(e, t) {
    "object" == typeof module && module.exports ? module.exports = t(require("./punycode"), require("./IPv6"), require("./SecondLevelDomains")) : "function" == typeof define && define.amd ? define(["./punycode", "./IPv6", "./SecondLevelDomains"], t) : e.URI = t(e.punycode, e.IPv6, e.SecondLevelDomains, e)
}(this, function(e, t, n, r) {
    function i(e, t) {
        var n = 1 <= arguments.length
          , r = 2 <= arguments.length;
        if (!(this instanceof i))
            return n ? r ? new i(e,t) : new i(e) : new i;
        if (void 0 === e) {
            if (n)
                throw new TypeError("undefined is not a valid argument for URI");
            e = "undefined" != typeof location ? location.href + "" : ""
        }
        if (null === e && n)
            throw new TypeError("null is not a valid argument for URI");
        return this.href(e),
        void 0 !== t ? this.absoluteTo(t) : this
    }
    function o(e) {
        return e.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1")
    }
    function a(e) {
        return void 0 === e ? "Undefined" : String(Object.prototype.toString.call(e)).slice(8, -1)
    }
    function s(e) {
        return "Array" === a(e)
    }
    function c(e, t) {
        var n, r = {};
        if ("RegExp" === a(t))
            r = null;
        else if (s(t)) {
            var i = 0;
            for (n = t.length; i < n; i++)
                r[t[i]] = !0
        } else
            r[t] = !0;
        for (i = 0,
        n = e.length; i < n; i++)
            (r && void 0 !== r[e[i]] || !r && t.test(e[i])) && (e.splice(i, 1),
            n--,
            i--);
        return e
    }
    function u(e, t) {
        var n;
        if (s(t)) {
            var r = 0;
            for (n = t.length; r < n; r++)
                if (!u(e, t[r]))
                    return !1;
            return !0
        }
        var i = a(t);
        for (r = 0,
        n = e.length; r < n; r++)
            if ("RegExp" === i) {
                if ("string" == typeof e[r] && e[r].match(t))
                    return !0
            } else if (e[r] === t)
                return !0;
        return !1
    }
    function l(e, t) {
        if (!s(e) || !s(t) || e.length !== t.length)
            return !1;
        e.sort(),
        t.sort();
        for (var n = 0, r = e.length; n < r; n++)
            if (e[n] !== t[n])
                return !1;
        return !0
    }
    function f(e) {
        return e.replace(/^\/+|\/+$/g, "")
    }
    function d(e) {
        return escape(e)
    }
    function p(e) {
        return encodeURIComponent(e).replace(/[!'()*]/g, d).replace(/\*/g, "%2A")
    }
    function h(e) {
        return function(t, n) {
            return void 0 === t ? this._parts[e] || "" : (this._parts[e] = t || null,
            this.build(!n),
            this)
        }
    }
    function m(e, t) {
        return function(n, r) {
            return void 0 === n ? this._parts[e] || "" : (null !== n && (n += "").charAt(0) === t && (n = n.substring(1)),
            this._parts[e] = n,
            this.build(!r),
            this)
        }
    }
    var g = r && r.URI;
    i.version = "1.18.10";
    var v = i.prototype
      , y = Object.prototype.hasOwnProperty;
    i._parts = function() {
        return {
            protocol: null,
            username: null,
            password: null,
            hostname: null,
            urn: null,
            port: null,
            path: null,
            query: null,
            fragment: null,
            duplicateQueryParameters: i.duplicateQueryParameters,
            escapeQuerySpace: i.escapeQuerySpace
        }
    }
    ,
    i.duplicateQueryParameters = !1,
    i.escapeQuerySpace = !0,
    i.protocol_expression = /^[a-z][a-z0-9.+-]*$/i,
    i.idn_expression = /[^a-z0-9\.-]/i,
    i.punycode_expression = /(xn--)/i,
    i.ip4_expression = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
    i.ip6_expression = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,
    i.find_uri_expression = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u2018\u2019]))/gi,
    i.findUri = {
        start: /\b(?:([a-z][a-z0-9.+-]*:\/\/)|www\.)/gi,
        end: /[\s\r\n]|$/,
        trim: /[`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u201e\u2018\u2019]+$/,
        parens: /(\([^\)]*\)|\[[^\]]*\]|\{[^}]*\}|<[^>]*>)/g
    },
    i.defaultPorts = {
        http: "80",
        https: "443",
        ftp: "21",
        gopher: "70",
        ws: "80",
        wss: "443"
    },
    i.invalid_hostname_characters = /[^a-zA-Z0-9\.-]/,
    i.domAttributes = {
        a: "href",
        blockquote: "cite",
        link: "href",
        base: "href",
        script: "src",
        form: "action",
        img: "src",
        area: "href",
        iframe: "src",
        embed: "src",
        source: "src",
        track: "src",
        input: "src",
        audio: "src",
        video: "src"
    },
    i.getDomAttribute = function(e) {
        if (e && e.nodeName) {
            var t = e.nodeName.toLowerCase();
            if ("input" !== t || "image" === e.type)
                return i.domAttributes[t]
        }
    }
    ,
    i.encode = p,
    i.decode = decodeURIComponent,
    i.iso8859 = function() {
        i.encode = escape,
        i.decode = unescape
    }
    ,
    i.unicode = function() {
        i.encode = p,
        i.decode = decodeURIComponent
    }
    ,
    i.characters = {
        pathname: {
            encode: {
                expression: /%(24|26|2B|2C|3B|3D|3A|40)/gi,
                map: {
                    "%24": "$",
                    "%26": "&",
                    "%2B": "+",
                    "%2C": ",",
                    "%3B": ";",
                    "%3D": "=",
                    "%3A": ":",
                    "%40": "@"
                }
            },
            decode: {
                expression: /[\/\?#]/g,
                map: {
                    "/": "%2F",
                    "?": "%3F",
                    "#": "%23"
                }
            }
        },
        reserved: {
            encode: {
                expression: /%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/gi,
                map: {
                    "%3A": ":",
                    "%2F": "/",
                    "%3F": "?",
                    "%23": "#",
                    "%5B": "[",
                    "%5D": "]",
                    "%40": "@",
                    "%21": "!",
                    "%24": "$",
                    "%26": "&",
                    "%27": "'",
                    "%28": "(",
                    "%29": ")",
                    "%2A": "*",
                    "%2B": "+",
                    "%2C": ",",
                    "%3B": ";",
                    "%3D": "="
                }
            }
        },
        urnpath: {
            encode: {
                expression: /%(21|24|27|28|29|2A|2B|2C|3B|3D|40)/gi,
                map: {
                    "%21": "!",
                    "%24": "$",
                    "%27": "'",
                    "%28": "(",
                    "%29": ")",
                    "%2A": "*",
                    "%2B": "+",
                    "%2C": ",",
                    "%3B": ";",
                    "%3D": "=",
                    "%40": "@"
                }
            },
            decode: {
                expression: /[\/\?#:]/g,
                map: {
                    "/": "%2F",
                    "?": "%3F",
                    "#": "%23",
                    ":": "%3A"
                }
            }
        }
    },
    i.encodeQuery = function(e, t) {
        var n = i.encode(e + "");
        return void 0 === t && (t = i.escapeQuerySpace),
        t ? n.replace(/%20/g, "+") : n
    }
    ,
    i.decodeQuery = function(e, t) {
        e += "",
        void 0 === t && (t = i.escapeQuerySpace);
        try {
            return i.decode(t ? e.replace(/\+/g, "%20") : e)
        } catch (t) {
            return e
        }
    }
    ;
    var b, _ = {
        encode: "encode",
        decode: "decode"
    }, w = function(e, t) {
        return function(n) {
            try {
                return i[t](n + "").replace(i.characters[e][t].expression, function(n) {
                    return i.characters[e][t].map[n]
                })
            } catch (e) {
                return n
            }
        }
    };
    for (b in _)
        i[b + "PathSegment"] = w("pathname", _[b]),
        i[b + "UrnPathSegment"] = w("urnpath", _[b]);
    _ = function(e, t, n) {
        return function(r) {
            for (var o = n ? function(e) {
                return i[t](i[n](e))
            }
            : i[t], a = 0, s = (r = (r + "").split(e)).length; a < s; a++)
                r[a] = o(r[a]);
            return r.join(e)
        }
    }
    ,
    i.decodePath = _("/", "decodePathSegment"),
    i.decodeUrnPath = _(":", "decodeUrnPathSegment"),
    i.recodePath = _("/", "encodePathSegment", "decode"),
    i.recodeUrnPath = _(":", "encodeUrnPathSegment", "decode"),
    i.encodeReserved = w("reserved", "encode"),
    i.parse = function(e, t) {
        t || (t = {});
        var n = e.indexOf("#");
        return -1 < n && (t.fragment = e.substring(n + 1) || null,
        e = e.substring(0, n)),
        -1 < (n = e.indexOf("?")) && (t.query = e.substring(n + 1) || null,
        e = e.substring(0, n)),
        "//" === e.substring(0, 2) ? (t.protocol = null,
        e = e.substring(2),
        e = i.parseAuthority(e, t)) : -1 < (n = e.indexOf(":")) && (t.protocol = e.substring(0, n) || null,
        t.protocol && !t.protocol.match(i.protocol_expression) ? t.protocol = void 0 : "//" === e.substring(n + 1, n + 3) ? (e = e.substring(n + 3),
        e = i.parseAuthority(e, t)) : (e = e.substring(n + 1),
        t.urn = !0)),
        t.path = e,
        t
    }
    ,
    i.parseHost = function(e, t) {
        var n = (e = e.replace(/\\/g, "/")).indexOf("/");
        if (-1 === n && (n = e.length),
        "[" === e.charAt(0)) {
            var r = e.indexOf("]");
            t.hostname = e.substring(1, r) || null,
            t.port = e.substring(r + 2, n) || null,
            "/" === t.port && (t.port = null)
        } else {
            var i = e.indexOf(":");
            r = e.indexOf("/"),
            -1 !== (i = e.indexOf(":", i + 1)) && (-1 === r || i < r) ? (t.hostname = e.substring(0, n) || null,
            t.port = null) : (r = e.substring(0, n).split(":"),
            t.hostname = r[0] || null,
            t.port = r[1] || null)
        }
        return t.hostname && "/" !== e.substring(n).charAt(0) && (n++,
        e = "/" + e),
        e.substring(n) || "/"
    }
    ,
    i.parseAuthority = function(e, t) {
        return e = i.parseUserinfo(e, t),
        i.parseHost(e, t)
    }
    ,
    i.parseUserinfo = function(e, t) {
        var n = e.indexOf("/")
          , r = e.lastIndexOf("@", -1 < n ? n : e.length - 1);
        return -1 < r && (-1 === n || r < n) ? (n = e.substring(0, r).split(":"),
        t.username = n[0] ? i.decode(n[0]) : null,
        n.shift(),
        t.password = n[0] ? i.decode(n.join(":")) : null,
        e = e.substring(r + 1)) : (t.username = null,
        t.password = null),
        e
    }
    ,
    i.parseQuery = function(e, t) {
        if (!e)
            return {};
        if (!(e = e.replace(/&+/g, "&").replace(/^\?*&*|&+$/g, "")))
            return {};
        for (var n, r, o = {}, a = e.split("&"), s = a.length, c = 0; c < s; c++)
            n = a[c].split("="),
            r = i.decodeQuery(n.shift(), t),
            n = n.length ? i.decodeQuery(n.join("="), t) : null,
            y.call(o, r) ? ("string" != typeof o[r] && null !== o[r] || (o[r] = [o[r]]),
            o[r].push(n)) : o[r] = n;
        return o
    }
    ,
    i.build = function(e) {
        var t = "";
        return e.protocol && (t += e.protocol + ":"),
        e.urn || !t && !e.hostname || (t += "//"),
        t += i.buildAuthority(e) || "",
        "string" == typeof e.path && ("/" !== e.path.charAt(0) && "string" == typeof e.hostname && (t += "/"),
        t += e.path),
        "string" == typeof e.query && e.query && (t += "?" + e.query),
        "string" == typeof e.fragment && e.fragment && (t += "#" + e.fragment),
        t
    }
    ,
    i.buildHost = function(e) {
        var t = "";
        return e.hostname ? (t = i.ip6_expression.test(e.hostname) ? t + "[" + e.hostname + "]" : t + e.hostname,
        e.port && (t += ":" + e.port),
        t) : ""
    }
    ,
    i.buildAuthority = function(e) {
        return i.buildUserinfo(e) + i.buildHost(e)
    }
    ,
    i.buildUserinfo = function(e) {
        var t = "";
        return e.username && (t += i.encode(e.username)),
        e.password && (t += ":" + i.encode(e.password)),
        t && (t += "@"),
        t
    }
    ,
    i.buildQuery = function(e, t, n) {
        var r, o, a = "";
        for (r in e)
            if (y.call(e, r) && r)
                if (s(e[r])) {
                    var c = {}
                      , u = 0;
                    for (o = e[r].length; u < o; u++)
                        void 0 !== e[r][u] && void 0 === c[e[r][u] + ""] && (a += "&" + i.buildQueryParameter(r, e[r][u], n),
                        !0 !== t && (c[e[r][u] + ""] = !0))
                } else
                    void 0 !== e[r] && (a += "&" + i.buildQueryParameter(r, e[r], n));
        return a.substring(1)
    }
    ,
    i.buildQueryParameter = function(e, t, n) {
        return i.encodeQuery(e, n) + (null !== t ? "=" + i.encodeQuery(t, n) : "")
    }
    ,
    i.addQuery = function(e, t, n) {
        if ("object" == typeof t)
            for (var r in t)
                y.call(t, r) && i.addQuery(e, r, t[r]);
        else {
            if ("string" != typeof t)
                throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");
            void 0 === e[t] ? e[t] = n : ("string" == typeof e[t] && (e[t] = [e[t]]),
            s(n) || (n = [n]),
            e[t] = (e[t] || []).concat(n))
        }
    }
    ,
    i.removeQuery = function(e, t, n) {
        var r;
        if (s(t))
            for (n = 0,
            r = t.length; n < r; n++)
                e[t[n]] = void 0;
        else if ("RegExp" === a(t))
            for (r in e)
                t.test(r) && (e[r] = void 0);
        else if ("object" == typeof t)
            for (r in t)
                y.call(t, r) && i.removeQuery(e, r, t[r]);
        else {
            if ("string" != typeof t)
                throw new TypeError("URI.removeQuery() accepts an object, string, RegExp as the first parameter");
            void 0 !== n ? "RegExp" === a(n) ? !s(e[t]) && n.test(e[t]) ? e[t] = void 0 : e[t] = c(e[t], n) : e[t] !== String(n) || s(n) && 1 !== n.length ? s(e[t]) && (e[t] = c(e[t], n)) : e[t] = void 0 : e[t] = void 0
        }
    }
    ,
    i.hasQuery = function(e, t, n, r) {
        switch (a(t)) {
        case "String":
            break;
        case "RegExp":
            for (var o in e)
                if (y.call(e, o) && t.test(o) && (void 0 === n || i.hasQuery(e, o, n)))
                    return !0;
            return !1;
        case "Object":
            for (var c in t)
                if (y.call(t, c) && !i.hasQuery(e, c, t[c]))
                    return !1;
            return !0;
        default:
            throw new TypeError("URI.hasQuery() accepts a string, regular expression or object as the name parameter")
        }
        switch (a(n)) {
        case "Undefined":
            return t in e;
        case "Boolean":
            return n === (e = !(s(e[t]) ? !e[t].length : !e[t]));
        case "Function":
            return !!n(e[t], t, e);
        case "Array":
            return !!s(e[t]) && (r ? u : l)(e[t], n);
        case "RegExp":
            return s(e[t]) ? !!r && u(e[t], n) : !(!e[t] || !e[t].match(n));
        case "Number":
            n = String(n);
        case "String":
            return s(e[t]) ? !!r && u(e[t], n) : e[t] === n;
        default:
            throw new TypeError("URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter")
        }
    }
    ,
    i.joinPaths = function() {
        for (var e = [], t = [], n = 0, r = 0; r < arguments.length; r++) {
            o = new i(arguments[r]),
            e.push(o);
            for (var o = o.segment(), a = 0; a < o.length; a++)
                "string" == typeof o[a] && t.push(o[a]),
                o[a] && n++
        }
        return t.length && n ? (t = new i("").segment(t),
        "" !== e[0].path() && "/" !== e[0].path().slice(0, 1) || t.path("/" + t.path()),
        t.normalize()) : new i("")
    }
    ,
    i.commonPath = function(e, t) {
        var n, r = Math.min(e.length, t.length);
        for (n = 0; n < r; n++)
            if (e.charAt(n) !== t.charAt(n)) {
                n--;
                break
            }
        return 1 > n ? e.charAt(0) === t.charAt(0) && "/" === e.charAt(0) ? "/" : "" : ("/" === e.charAt(n) && "/" === t.charAt(n) || (n = e.substring(0, n).lastIndexOf("/")),
        e.substring(0, n + 1))
    }
    ,
    i.withinString = function(e, t, n) {
        n || (n = {});
        var r = n.start || i.findUri.start
          , o = n.end || i.findUri.end
          , a = n.trim || i.findUri.trim
          , s = n.parens || i.findUri.parens
          , c = /[a-z0-9-]=["']?$/i;
        for (r.lastIndex = 0; ; ) {
            var u = r.exec(e);
            if (!u)
                break;
            var l = u.index;
            if (!(n.ignoreHtml && (d = e.slice(Math.max(l - 3, 0), l)) && c.test(d))) {
                var f = l + e.slice(l).search(o)
                  , d = e.slice(l, f);
                for (f = -1; ; ) {
                    var p = s.exec(d);
                    if (!p)
                        break;
                    f = Math.max(f, p.index + p[0].length)
                }
                (d = -1 < f ? d.slice(0, f) + d.slice(f).replace(a, "") : d.replace(a, "")).length <= u[0].length || n.ignore && n.ignore.test(d) || (void 0 === (u = t(d, l, f = l + d.length, e)) ? r.lastIndex = f : (u = String(u),
                e = e.slice(0, l) + u + e.slice(f),
                r.lastIndex = l + u.length))
            }
        }
        return r.lastIndex = 0,
        e
    }
    ,
    i.ensureValidHostname = function(t) {
        if (t.match(i.invalid_hostname_characters)) {
            if (!e)
                throw new TypeError('Hostname "' + t + '" contains characters other than [A-Z0-9.-] and Punycode.js is not available');
            if (e.toASCII(t).match(i.invalid_hostname_characters))
                throw new TypeError('Hostname "' + t + '" contains characters other than [A-Z0-9.-]')
        }
    }
    ,
    i.noConflict = function(e) {
        return e ? (e = {
            URI: this.noConflict()
        },
        r.URITemplate && "function" == typeof r.URITemplate.noConflict && (e.URITemplate = r.URITemplate.noConflict()),
        r.IPv6 && "function" == typeof r.IPv6.noConflict && (e.IPv6 = r.IPv6.noConflict()),
        r.SecondLevelDomains && "function" == typeof r.SecondLevelDomains.noConflict && (e.SecondLevelDomains = r.SecondLevelDomains.noConflict()),
        e) : (r.URI === this && (r.URI = g),
        this)
    }
    ,
    v.build = function(e) {
        return !0 === e ? this._deferred_build = !0 : (void 0 === e || this._deferred_build) && (this._string = i.build(this._parts),
        this._deferred_build = !1),
        this
    }
    ,
    v.clone = function() {
        return new i(this)
    }
    ,
    v.valueOf = v.toString = function() {
        return this.build(!1)._string
    }
    ,
    v.protocol = h("protocol"),
    v.username = h("username"),
    v.password = h("password"),
    v.hostname = h("hostname"),
    v.port = h("port"),
    v.query = m("query", "?"),
    v.fragment = m("fragment", "#"),
    v.search = function(e, t) {
        var n = this.query(e, t);
        return "string" == typeof n && n.length ? "?" + n : n
    }
    ,
    v.hash = function(e, t) {
        var n = this.fragment(e, t);
        return "string" == typeof n && n.length ? "#" + n : n
    }
    ,
    v.pathname = function(e, t) {
        if (void 0 === e || !0 === e) {
            var n = this._parts.path || (this._parts.hostname ? "/" : "");
            return e ? (this._parts.urn ? i.decodeUrnPath : i.decodePath)(n) : n
        }
        return this._parts.path = this._parts.urn ? e ? i.recodeUrnPath(e) : "" : e ? i.recodePath(e) : "/",
        this.build(!t),
        this
    }
    ,
    v.path = v.pathname,
    v.href = function(e, t) {
        var n;
        if (void 0 === e)
            return this.toString();
        this._string = "",
        this._parts = i._parts();
        var r = e instanceof i
          , o = "object" == typeof e && (e.hostname || e.path || e.pathname);
        if (e.nodeName && (e = e[o = i.getDomAttribute(e)] || "",
        o = !1),
        !r && o && void 0 !== e.pathname && (e = e.toString()),
        "string" == typeof e || e instanceof String)
            this._parts = i.parse(String(e), this._parts);
        else {
            if (!r && !o)
                throw new TypeError("invalid input");
            for (n in r = r ? e._parts : e)
                y.call(this._parts, n) && (this._parts[n] = r[n])
        }
        return this.build(!t),
        this
    }
    ,
    v.is = function(e) {
        var t = !1
          , r = !1
          , o = !1
          , a = !1
          , s = !1
          , c = !1
          , u = !1
          , l = !this._parts.urn;
        switch (this._parts.hostname && (l = !1,
        r = i.ip4_expression.test(this._parts.hostname),
        o = i.ip6_expression.test(this._parts.hostname),
        s = (a = !(t = r || o)) && n && n.has(this._parts.hostname),
        c = a && i.idn_expression.test(this._parts.hostname),
        u = a && i.punycode_expression.test(this._parts.hostname)),
        e.toLowerCase()) {
        case "relative":
            return l;
        case "absolute":
            return !l;
        case "domain":
        case "name":
            return a;
        case "sld":
            return s;
        case "ip":
            return t;
        case "ip4":
        case "ipv4":
        case "inet4":
            return r;
        case "ip6":
        case "ipv6":
        case "inet6":
            return o;
        case "idn":
            return c;
        case "url":
            return !this._parts.urn;
        case "urn":
            return !!this._parts.urn;
        case "punycode":
            return u
        }
        return null
    }
    ;
    var x = v.protocol
      , k = v.port
      , S = v.hostname;
    v.protocol = function(e, t) {
        if (void 0 !== e && e && !(e = e.replace(/:(\/\/)?$/, "")).match(i.protocol_expression))
            throw new TypeError('Protocol "' + e + "\" contains characters other than [A-Z0-9.+-] or doesn't start with [A-Z]");
        return x.call(this, e, t)
    }
    ,
    v.scheme = v.protocol,
    v.port = function(e, t) {
        if (this._parts.urn)
            return void 0 === e ? "" : this;
        if (void 0 !== e && (0 === e && (e = null),
        e && (":" === (e += "").charAt(0) && (e = e.substring(1)),
        e.match(/[^0-9]/))))
            throw new TypeError('Port "' + e + '" contains characters other than [0-9]');
        return k.call(this, e, t)
    }
    ,
    v.hostname = function(e, t) {
        if (this._parts.urn)
            return void 0 === e ? "" : this;
        if (void 0 !== e) {
            var n = {};
            if ("/" !== i.parseHost(e, n))
                throw new TypeError('Hostname "' + e + '" contains characters other than [A-Z0-9.-]');
            e = n.hostname
        }
        return S.call(this, e, t)
    }
    ,
    v.origin = function(e, t) {
        if (this._parts.urn)
            return void 0 === e ? "" : this;
        if (void 0 === e) {
            var n = this.protocol();
            return this.authority() ? (n ? n + "://" : "") + this.authority() : ""
        }
        return n = i(e),
        this.protocol(n.protocol()).authority(n.authority()).build(!t),
        this
    }
    ,
    v.host = function(e, t) {
        if (this._parts.urn)
            return void 0 === e ? "" : this;
        if (void 0 === e)
            return this._parts.hostname ? i.buildHost(this._parts) : "";
        if ("/" !== i.parseHost(e, this._parts))
            throw new TypeError('Hostname "' + e + '" contains characters other than [A-Z0-9.-]');
        return this.build(!t),
        this
    }
    ,
    v.authority = function(e, t) {
        if (this._parts.urn)
            return void 0 === e ? "" : this;
        if (void 0 === e)
            return this._parts.hostname ? i.buildAuthority(this._parts) : "";
        if ("/" !== i.parseAuthority(e, this._parts))
            throw new TypeError('Hostname "' + e + '" contains characters other than [A-Z0-9.-]');
        return this.build(!t),
        this
    }
    ,
    v.userinfo = function(e, t) {
        if (this._parts.urn)
            return void 0 === e ? "" : this;
        if (void 0 === e) {
            var n = i.buildUserinfo(this._parts);
            return n ? n.substring(0, n.length - 1) : n
        }
        return "@" !== e[e.length - 1] && (e += "@"),
        i.parseUserinfo(e, this._parts),
        this.build(!t),
        this
    }
    ,
    v.resource = function(e, t) {
        if (void 0 === e)
            return this.path() + this.search() + this.hash();
        var n = i.parse(e);
        return this._parts.path = n.path,
        this._parts.query = n.query,
        this._parts.fragment = n.fragment,
        this.build(!t),
        this
    }
    ,
    v.subdomain = function(e, t) {
        if (this._parts.urn)
            return void 0 === e ? "" : this;
        if (void 0 === e) {
            if (!this._parts.hostname || this.is("IP"))
                return "";
            var n = this._parts.hostname.length - this.domain().length - 1;
            return this._parts.hostname.substring(0, n) || ""
        }
        return n = this._parts.hostname.length - this.domain().length,
        n = this._parts.hostname.substring(0, n),
        n = new RegExp("^" + o(n)),
        e && "." !== e.charAt(e.length - 1) && (e += "."),
        e && i.ensureValidHostname(e),
        this._parts.hostname = this._parts.hostname.replace(n, e),
        this.build(!t),
        this
    }
    ,
    v.domain = function(e, t) {
        if (this._parts.urn)
            return void 0 === e ? "" : this;
        if ("boolean" == typeof e && (t = e,
        e = void 0),
        void 0 === e) {
            if (!this._parts.hostname || this.is("IP"))
                return "";
            var n = this._parts.hostname.match(/\./g);
            return n && 2 > n.length ? this._parts.hostname : (n = this._parts.hostname.length - this.tld(t).length - 1,
            n = this._parts.hostname.lastIndexOf(".", n - 1) + 1,
            this._parts.hostname.substring(n) || "")
        }
        if (!e)
            throw new TypeError("cannot set domain empty");
        return i.ensureValidHostname(e),
        !this._parts.hostname || this.is("IP") ? this._parts.hostname = e : (n = new RegExp(o(this.domain()) + "$"),
        this._parts.hostname = this._parts.hostname.replace(n, e)),
        this.build(!t),
        this
    }
    ,
    v.tld = function(e, t) {
        if (this._parts.urn)
            return void 0 === e ? "" : this;
        if ("boolean" == typeof e && (t = e,
        e = void 0),
        void 0 === e) {
            if (!this._parts.hostname || this.is("IP"))
                return "";
            var r = this._parts.hostname.lastIndexOf(".");
            r = this._parts.hostname.substring(r + 1);
            return !0 !== t && n && n.list[r.toLowerCase()] && n.get(this._parts.hostname) || r
        }
        if (!e)
            throw new TypeError("cannot set TLD empty");
        if (e.match(/[^a-zA-Z0-9-]/)) {
            if (!n || !n.is(e))
                throw new TypeError('TLD "' + e + '" contains characters other than [A-Z0-9]');
            r = new RegExp(o(this.tld()) + "$"),
            this._parts.hostname = this._parts.hostname.replace(r, e)
        } else {
            if (!this._parts.hostname || this.is("IP"))
                throw new ReferenceError("cannot set TLD on non-domain host");
            r = new RegExp(o(this.tld()) + "$"),
            this._parts.hostname = this._parts.hostname.replace(r, e)
        }
        return this.build(!t),
        this
    }
    ,
    v.directory = function(e, t) {
        if (this._parts.urn)
            return void 0 === e ? "" : this;
        if (void 0 === e || !0 === e) {
            if (!this._parts.path && !this._parts.hostname)
                return "";
            if ("/" === this._parts.path)
                return "/";
            var n = this._parts.path.length - this.filename().length - 1;
            n = this._parts.path.substring(0, n) || (this._parts.hostname ? "/" : "");
            return e ? i.decodePath(n) : n
        }
        return n = this._parts.path.length - this.filename().length,
        n = this._parts.path.substring(0, n),
        n = new RegExp("^" + o(n)),
        this.is("relative") || (e || (e = "/"),
        "/" !== e.charAt(0) && (e = "/" + e)),
        e && "/" !== e.charAt(e.length - 1) && (e += "/"),
        e = i.recodePath(e),
        this._parts.path = this._parts.path.replace(n, e),
        this.build(!t),
        this
    }
    ,
    v.filename = function(e, t) {
        if (this._parts.urn)
            return void 0 === e ? "" : this;
        if ("string" != typeof e) {
            if (!this._parts.path || "/" === this._parts.path)
                return "";
            var n = this._parts.path.lastIndexOf("/");
            n = this._parts.path.substring(n + 1);
            return e ? i.decodePathSegment(n) : n
        }
        n = !1,
        "/" === e.charAt(0) && (e = e.substring(1)),
        e.match(/\.?\//) && (n = !0);
        var r = new RegExp(o(this.filename()) + "$");
        return e = i.recodePath(e),
        this._parts.path = this._parts.path.replace(r, e),
        n ? this.normalizePath(t) : this.build(!t),
        this
    }
    ,
    v.suffix = function(e, t) {
        if (this._parts.urn)
            return void 0 === e ? "" : this;
        if (void 0 === e || !0 === e) {
            if (!this._parts.path || "/" === this._parts.path)
                return "";
            var n = this.filename()
              , r = n.lastIndexOf(".");
            return -1 === r ? "" : (n = n.substring(r + 1),
            n = /^[a-z0-9%]+$/i.test(n) ? n : "",
            e ? i.decodePathSegment(n) : n)
        }
        if ("." === e.charAt(0) && (e = e.substring(1)),
        n = this.suffix())
            r = e ? new RegExp(o(n) + "$") : new RegExp(o("." + n) + "$");
        else {
            if (!e)
                return this;
            this._parts.path += "." + i.recodePath(e)
        }
        return r && (e = i.recodePath(e),
        this._parts.path = this._parts.path.replace(r, e)),
        this.build(!t),
        this
    }
    ,
    v.segment = function(e, t, n) {
        var r = this._parts.urn ? ":" : "/"
          , i = "/" === (o = this.path()).substring(0, 1)
          , o = o.split(r);
        if (void 0 !== e && "number" != typeof e && (n = t,
        t = e,
        e = void 0),
        void 0 !== e && "number" != typeof e)
            throw Error('Bad segment "' + e + '", must be 0-based integer');
        if (i && o.shift(),
        0 > e && (e = Math.max(o.length + e, 0)),
        void 0 === t)
            return void 0 === e ? o : o[e];
        if (null === e || void 0 === o[e])
            if (s(t)) {
                o = [],
                e = 0;
                for (var a = t.length; e < a; e++)
                    (t[e].length || o.length && o[o.length - 1].length) && (o.length && !o[o.length - 1].length && o.pop(),
                    o.push(f(t[e])))
            } else
                (t || "string" == typeof t) && (t = f(t),
                "" === o[o.length - 1] ? o[o.length - 1] = t : o.push(t));
        else
            t ? o[e] = f(t) : o.splice(e, 1);
        return i && o.unshift(""),
        this.path(o.join(r), n)
    }
    ,
    v.segmentCoded = function(e, t, n) {
        var r;
        if ("number" != typeof e && (n = t,
        t = e,
        e = void 0),
        void 0 === t) {
            if (s(e = this.segment(e, t, n))) {
                var o = 0;
                for (r = e.length; o < r; o++)
                    e[o] = i.decode(e[o])
            } else
                e = void 0 !== e ? i.decode(e) : void 0;
            return e
        }
        if (s(t))
            for (o = 0,
            r = t.length; o < r; o++)
                t[o] = i.encode(t[o]);
        else
            t = "string" == typeof t || t instanceof String ? i.encode(t) : t;
        return this.segment(e, t, n)
    }
    ;
    var A = v.query;
    return v.query = function(e, t) {
        if (!0 === e)
            return i.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
        if ("function" == typeof e) {
            var n = i.parseQuery(this._parts.query, this._parts.escapeQuerySpace)
              , r = e.call(this, n);
            return this._parts.query = i.buildQuery(r || n, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace),
            this.build(!t),
            this
        }
        return void 0 !== e && "string" != typeof e ? (this._parts.query = i.buildQuery(e, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace),
        this.build(!t),
        this) : A.call(this, e, t)
    }
    ,
    v.setQuery = function(e, t, n) {
        var r = i.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
        if ("string" == typeof e || e instanceof String)
            r[e] = void 0 !== t ? t : null;
        else {
            if ("object" != typeof e)
                throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");
            for (var o in e)
                y.call(e, o) && (r[o] = e[o])
        }
        return this._parts.query = i.buildQuery(r, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace),
        "string" != typeof e && (n = t),
        this.build(!n),
        this
    }
    ,
    v.addQuery = function(e, t, n) {
        var r = i.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
        return i.addQuery(r, e, void 0 === t ? null : t),
        this._parts.query = i.buildQuery(r, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace),
        "string" != typeof e && (n = t),
        this.build(!n),
        this
    }
    ,
    v.removeQuery = function(e, t, n) {
        var r = i.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
        return i.removeQuery(r, e, t),
        this._parts.query = i.buildQuery(r, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace),
        "string" != typeof e && (n = t),
        this.build(!n),
        this
    }
    ,
    v.hasQuery = function(e, t, n) {
        var r = i.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
        return i.hasQuery(r, e, t, n)
    }
    ,
    v.setSearch = v.setQuery,
    v.addSearch = v.addQuery,
    v.removeSearch = v.removeQuery,
    v.hasSearch = v.hasQuery,
    v.normalize = function() {
        return this._parts.urn ? this.normalizeProtocol(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build() : this.normalizeProtocol(!1).normalizeHostname(!1).normalizePort(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build()
    }
    ,
    v.normalizeProtocol = function(e) {
        return "string" == typeof this._parts.protocol && (this._parts.protocol = this._parts.protocol.toLowerCase(),
        this.build(!e)),
        this
    }
    ,
    v.normalizeHostname = function(n) {
        return this._parts.hostname && (this.is("IDN") && e ? this._parts.hostname = e.toASCII(this._parts.hostname) : this.is("IPv6") && t && (this._parts.hostname = t.best(this._parts.hostname)),
        this._parts.hostname = this._parts.hostname.toLowerCase(),
        this.build(!n)),
        this
    }
    ,
    v.normalizePort = function(e) {
        return "string" == typeof this._parts.protocol && this._parts.port === i.defaultPorts[this._parts.protocol] && (this._parts.port = null,
        this.build(!e)),
        this
    }
    ,
    v.normalizePath = function(e) {
        var t = this._parts.path;
        if (!t)
            return this;
        if (this._parts.urn)
            return this._parts.path = i.recodeUrnPath(this._parts.path),
            this.build(!e),
            this;
        if ("/" === this._parts.path)
            return this;
        var n = "";
        if ("/" !== (t = i.recodePath(t)).charAt(0)) {
            var r = !0;
            t = "/" + t
        }
        for ("/.." !== t.slice(-3) && "/." !== t.slice(-2) || (t += "/"),
        t = t.replace(/(\/(\.\/)+)|(\/\.$)/g, "/").replace(/\/{2,}/g, "/"),
        r && (n = t.substring(1).match(/^(\.\.\/)+/) || "") && (n = n[0]); ; ) {
            var o = t.search(/\/\.\.(\/|$)/);
            if (-1 === o)
                break;
            if (0 !== o) {
                var a = t.substring(0, o).lastIndexOf("/");
                -1 === a && (a = o),
                t = t.substring(0, a) + t.substring(o + 3)
            } else
                t = t.substring(3)
        }
        return r && this.is("relative") && (t = n + t.substring(1)),
        this._parts.path = t,
        this.build(!e),
        this
    }
    ,
    v.normalizePathname = v.normalizePath,
    v.normalizeQuery = function(e) {
        return "string" == typeof this._parts.query && (this._parts.query.length ? this.query(i.parseQuery(this._parts.query, this._parts.escapeQuerySpace)) : this._parts.query = null,
        this.build(!e)),
        this
    }
    ,
    v.normalizeFragment = function(e) {
        return this._parts.fragment || (this._parts.fragment = null,
        this.build(!e)),
        this
    }
    ,
    v.normalizeSearch = v.normalizeQuery,
    v.normalizeHash = v.normalizeFragment,
    v.iso8859 = function() {
        var e = i.encode
          , t = i.decode;
        i.encode = escape,
        i.decode = decodeURIComponent;
        try {
            this.normalize()
        } finally {
            i.encode = e,
            i.decode = t
        }
        return this
    }
    ,
    v.unicode = function() {
        var e = i.encode
          , t = i.decode;
        i.encode = p,
        i.decode = unescape;
        try {
            this.normalize()
        } finally {
            i.encode = e,
            i.decode = t
        }
        return this
    }
    ,
    v.readable = function() {
        var t = this.clone();
        t.username("").password("").normalize();
        var n = "";
        if (t._parts.protocol && (n += t._parts.protocol + "://"),
        t._parts.hostname && (t.is("punycode") && e ? (n += e.toUnicode(t._parts.hostname),
        t._parts.port && (n += ":" + t._parts.port)) : n += t.host()),
        t._parts.hostname && t._parts.path && "/" !== t._parts.path.charAt(0) && (n += "/"),
        n += t.path(!0),
        t._parts.query) {
            for (var r = "", o = 0, a = t._parts.query.split("&"), s = a.length; o < s; o++) {
                var c = (a[o] || "").split("=");
                r = r + "&" + i.decodeQuery(c[0], this._parts.escapeQuerySpace).replace(/&/g, "%26");
                void 0 !== c[1] && (r += "=" + i.decodeQuery(c[1], this._parts.escapeQuerySpace).replace(/&/g, "%26"))
            }
            n += "?" + r.substring(1)
        }
        return n + i.decodeQuery(t.hash(), !0)
    }
    ,
    v.absoluteTo = function(e) {
        var t, n, r = this.clone(), o = ["protocol", "username", "password", "hostname", "port"];
        if (this._parts.urn)
            throw Error("URNs do not have any generally defined hierarchical components");
        if (e instanceof i || (e = new i(e)),
        r._parts.protocol)
            return r;
        if (r._parts.protocol = e._parts.protocol,
        this._parts.hostname)
            return r;
        for (t = 0; n = o[t]; t++)
            r._parts[n] = e._parts[n];
        return r._parts.path ? (".." === r._parts.path.substring(-2) && (r._parts.path += "/"),
        "/" !== r.path().charAt(0) && (o = (o = e.directory()) ? o : 0 === e.path().indexOf("/") ? "/" : "",
        r._parts.path = (o ? o + "/" : "") + r._parts.path,
        r.normalizePath())) : (r._parts.path = e._parts.path,
        r._parts.query || (r._parts.query = e._parts.query)),
        r.build(),
        r
    }
    ,
    v.relativeTo = function(e) {
        var t = this.clone().normalize();
        if (t._parts.urn)
            throw Error("URNs do not have any generally defined hierarchical components");
        e = new i(e).normalize();
        var n = t._parts
          , r = e._parts
          , o = t.path();
        if (e = e.path(),
        "/" !== o.charAt(0))
            throw Error("URI is already relative");
        if ("/" !== e.charAt(0))
            throw Error("Cannot calculate a URI relative to another relative URI");
        return n.protocol === r.protocol && (n.protocol = null),
        n.username !== r.username || n.password !== r.password || null !== n.protocol || null !== n.username || null !== n.password || n.hostname !== r.hostname || n.port !== r.port ? t.build() : (n.hostname = null,
        n.port = null,
        o === e ? (n.path = "",
        t.build()) : (o = i.commonPath(o, e)) ? (r = r.path.substring(o.length).replace(/[^\/]*$/, "").replace(/.*?\//g, "../"),
        n.path = r + n.path.substring(o.length) || "./",
        t.build()) : t.build())
    }
    ,
    v.equals = function(e) {
        var t, n = this.clone(), r = new i(e);
        if (e = {},
        n.normalize(),
        r.normalize(),
        n.toString() === r.toString())
            return !0;
        var o = n.query()
          , a = r.query();
        if (n.query(""),
        r.query(""),
        n.toString() !== r.toString() || o.length !== a.length)
            return !1;
        for (t in n = i.parseQuery(o, this._parts.escapeQuerySpace),
        a = i.parseQuery(a, this._parts.escapeQuerySpace),
        n)
            if (y.call(n, t)) {
                if (s(n[t])) {
                    if (!l(n[t], a[t]))
                        return !1
                } else if (n[t] !== a[t])
                    return !1;
                e[t] = !0
            }
        for (t in a)
            if (y.call(a, t) && !e[t])
                return !1;
        return !0
    }
    ,
    v.duplicateQueryParameters = function(e) {
        return this._parts.duplicateQueryParameters = !!e,
        this
    }
    ,
    v.escapeQuerySpace = function(e) {
        return this._parts.escapeQuerySpace = !!e,
        this
    }
    ,
    i
}),
function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.axios = t() : e.axios = t()
}(this, function() {
    return function(e) {
        function t(r) {
            if (n[r])
                return n[r].exports;
            var i = n[r] = {
                exports: {},
                id: r,
                loaded: !1
            };
            return e[r].call(i.exports, i, i.exports, t),
            i.loaded = !0,
            i.exports
        }
        var n = {};
        return t.m = e,
        t.c = n,
        t.p = "",
        t(0)
    }([function(e, t, n) {
        e.exports = n(1)
    }
    , function(e, t, n) {
        "use strict";
        function r(e) {
            var t = new a(e)
              , n = o(a.prototype.request, t);
            return i.extend(n, a.prototype, t),
            i.extend(n, t),
            n
        }
        var i = n(2)
          , o = n(3)
          , a = n(5)
          , s = n(22)
          , c = r(n(11));
        c.Axios = a,
        c.create = function(e) {
            return r(s(c.defaults, e))
        }
        ,
        c.Cancel = n(23),
        c.CancelToken = n(24),
        c.isCancel = n(10),
        c.all = function(e) {
            return Promise.all(e)
        }
        ,
        c.spread = n(25),
        e.exports = c,
        e.exports["default"] = c
    }
    , function(e, t, n) {
        "use strict";
        function r(e) {
            return "[object Array]" === A.call(e)
        }
        function i(e) {
            return "[object ArrayBuffer]" === A.call(e)
        }
        function o(e) {
            return "undefined" != typeof FormData && e instanceof FormData
        }
        function a(e) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
        }
        function s(e) {
            return "string" == typeof e
        }
        function c(e) {
            return "number" == typeof e
        }
        function u(e) {
            return void 0 === e
        }
        function l(e) {
            return null !== e && "object" == typeof e
        }
        function f(e) {
            return "[object Date]" === A.call(e)
        }
        function d(e) {
            return "[object File]" === A.call(e)
        }
        function p(e) {
            return "[object Blob]" === A.call(e)
        }
        function h(e) {
            return "[object Function]" === A.call(e)
        }
        function m(e) {
            return l(e) && h(e.pipe)
        }
        function g(e) {
            return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
        }
        function v(e) {
            return e.replace(/^\s*/, "").replace(/\s*$/, "")
        }
        function y() {
            return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document
        }
        function b(e, t) {
            if (null != e)
                if ("object" != typeof e && (e = [e]),
                r(e))
                    for (var n = 0, i = e.length; n < i; n++)
                        t.call(null, e[n], n, e);
                else
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e)
        }
        function _() {
            function e(e, n) {
                "object" == typeof t[n] && "object" == typeof e ? t[n] = _(t[n], e) : t[n] = e
            }
            for (var t = {}, n = 0, r = arguments.length; n < r; n++)
                b(arguments[n], e);
            return t
        }
        function w() {
            function e(e, n) {
                "object" == typeof t[n] && "object" == typeof e ? t[n] = w(t[n], e) : t[n] = "object" == typeof e ? w({}, e) : e
            }
            for (var t = {}, n = 0, r = arguments.length; n < r; n++)
                b(arguments[n], e);
            return t
        }
        function x(e, t, n) {
            return b(t, function(t, r) {
                e[r] = n && "function" == typeof t ? k(t, n) : t
            }),
            e
        }
        var k = n(3)
          , S = n(4)
          , A = Object.prototype.toString;
        e.exports = {
            isArray: r,
            isArrayBuffer: i,
            isBuffer: S,
            isFormData: o,
            isArrayBufferView: a,
            isString: s,
            isNumber: c,
            isObject: l,
            isUndefined: u,
            isDate: f,
            isFile: d,
            isBlob: p,
            isFunction: h,
            isStream: m,
            isURLSearchParams: g,
            isStandardBrowserEnv: y,
            forEach: b,
            merge: _,
            deepMerge: w,
            extend: x,
            trim: v
        }
    }
    , function(e) {
        "use strict";
        e.exports = function(e, t) {
            return function() {
                for (var n = new Array(arguments.length), r = 0; r < n.length; r++)
                    n[r] = arguments[r];
                return e.apply(t, n)
            }
        }
    }
    , function(e) {
        e.exports = function(e) {
            return null != e && null != e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
        }
    }
    , function(e, t, n) {
        "use strict";
        function r(e) {
            this.defaults = e,
            this.interceptors = {
                request: new a,
                response: new a
            }
        }
        var i = n(2)
          , o = n(6)
          , a = n(7)
          , s = n(8)
          , c = n(22);
        r.prototype.request = function(e) {
            "string" == typeof e ? (e = arguments[1] || {}).url = arguments[0] : e = e || {},
            (e = c(this.defaults, e)).method = e.method ? e.method.toLowerCase() : "get";
            var t = [s, void 0]
              , n = Promise.resolve(e);
            for (this.interceptors.request.forEach(function(e) {
                t.unshift(e.fulfilled, e.rejected)
            }),
            this.interceptors.response.forEach(function(e) {
                t.push(e.fulfilled, e.rejected)
            }); t.length; )
                n = n.then(t.shift(), t.shift());
            return n
        }
        ,
        r.prototype.getUri = function(e) {
            return e = c(this.defaults, e),
            o(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
        }
        ,
        i.forEach(["delete", "get", "head", "options"], function(e) {
            r.prototype[e] = function(t, n) {
                return this.request(i.merge(n || {}, {
                    method: e,
                    url: t
                }))
            }
        }),
        i.forEach(["post", "put", "patch"], function(e) {
            r.prototype[e] = function(t, n, r) {
                return this.request(i.merge(r || {}, {
                    method: e,
                    url: t,
                    data: n
                }))
            }
        }),
        e.exports = r
    }
    , function(e, t, n) {
        "use strict";
        function r(e) {
            return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
        }
        var i = n(2);
        e.exports = function(e, t, n) {
            if (!t)
                return e;
            var o;
            if (n)
                o = n(t);
            else if (i.isURLSearchParams(t))
                o = t.toString();
            else {
                var a = [];
                i.forEach(t, function(e, t) {
                    null != e && (i.isArray(e) ? t += "[]" : e = [e],
                    i.forEach(e, function(e) {
                        i.isDate(e) ? e = e.toISOString() : i.isObject(e) && (e = JSON.stringify(e)),
                        a.push(r(t) + "=" + r(e))
                    }))
                }),
                o = a.join("&")
            }
            if (o) {
                var s = e.indexOf("#");
                -1 !== s && (e = e.slice(0, s)),
                e += (-1 === e.indexOf("?") ? "?" : "&") + o
            }
            return e
        }
    }
    , function(e, t, n) {
        "use strict";
        function r() {
            this.handlers = []
        }
        var i = n(2);
        r.prototype.use = function(e, t) {
            return this.handlers.push({
                fulfilled: e,
                rejected: t
            }),
            this.handlers.length - 1
        }
        ,
        r.prototype.eject = function(e) {
            this.handlers[e] && (this.handlers[e] = null)
        }
        ,
        r.prototype.forEach = function(e) {
            i.forEach(this.handlers, function(t) {
                null !== t && e(t)
            })
        }
        ,
        e.exports = r
    }
    , function(e, t, n) {
        "use strict";
        function r(e) {
            e.cancelToken && e.cancelToken.throwIfRequested()
        }
        var i = n(2)
          , o = n(9)
          , a = n(10)
          , s = n(11)
          , c = n(20)
          , u = n(21);
        e.exports = function(e) {
            return r(e),
            e.baseURL && !c(e.url) && (e.url = u(e.baseURL, e.url)),
            e.headers = e.headers || {},
            e.data = o(e.data, e.headers, e.transformRequest),
            e.headers = i.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}),
            i.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(t) {
                delete e.headers[t]
            }),
            (e.adapter || s.adapter)(e).then(function(t) {
                return r(e),
                t.data = o(t.data, t.headers, e.transformResponse),
                t
            }, function(t) {
                return a(t) || (r(e),
                t && t.response && (t.response.data = o(t.response.data, t.response.headers, e.transformResponse))),
                Promise.reject(t)
            })
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(2);
        e.exports = function(e, t, n) {
            return r.forEach(n, function(n) {
                e = n(e, t)
            }),
            e
        }
    }
    , function(e) {
        "use strict";
        e.exports = function(e) {
            return !(!e || !e.__CANCEL__)
        }
    }
    , function(e, t, n) {
        "use strict";
        function r(e, t) {
            !o.isUndefined(e) && o.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
        }
        function i() {
            var e;
            return "undefined" != typeof process && "[object process]" === Object.prototype.toString.call(process) ? e = n(13) : "undefined" != typeof XMLHttpRequest && (e = n(13)),
            e
        }
        var o = n(2)
          , a = n(12)
          , s = {
            "Content-Type": "application/x-www-form-urlencoded"
        }
          , c = {
            adapter: i(),
            transformRequest: [function(e, t) {
                return a(t, "Accept"),
                a(t, "Content-Type"),
                o.isFormData(e) || o.isArrayBuffer(e) || o.isBuffer(e) || o.isStream(e) || o.isFile(e) || o.isBlob(e) ? e : o.isArrayBufferView(e) ? e.buffer : o.isURLSearchParams(e) ? (r(t, "application/x-www-form-urlencoded;charset=utf-8"),
                e.toString()) : o.isObject(e) ? (r(t, "application/json;charset=utf-8"),
                JSON.stringify(e)) : e
            }
            ],
            transformResponse: [function(e) {
                if ("string" == typeof e)
                    try {
                        e = JSON.parse(e)
                    } catch (e) {}
                return e
            }
            ],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            validateStatus: function(e) {
                return e >= 200 && e < 300
            },
            headers: {
                common: {
                    Accept: "application/json, text/plain, */*"
                }
            }
        };
        o.forEach(["delete", "get", "head"], function(e) {
            c.headers[e] = {}
        }),
        o.forEach(["post", "put", "patch"], function(e) {
            c.headers[e] = o.merge(s)
        }),
        e.exports = c
    }
    , function(e, t, n) {
        "use strict";
        var r = n(2);
        e.exports = function(e, t) {
            r.forEach(e, function(n, r) {
                r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n,
                delete e[r])
            })
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(2)
          , i = n(14)
          , o = n(6)
          , a = n(17)
          , s = n(18)
          , c = n(15);
        e.exports = function(e) {
            return new Promise(function(t, u) {
                var l = e.data
                  , f = e.headers;
                r.isFormData(l) && delete f["Content-Type"];
                var d = new XMLHttpRequest;
                if (e.auth) {
                    var p = e.auth.username || ""
                      , h = e.auth.password || "";
                    f.Authorization = "Basic " + btoa(p + ":" + h)
                }
                if (d.open(e.method.toUpperCase(), o(e.url, e.params, e.paramsSerializer), !0),
                d.timeout = e.timeout,
                d.onreadystatechange = function() {
                    if (d && 4 === d.readyState && (0 !== d.status || d.responseURL && 0 === d.responseURL.indexOf("file:"))) {
                        var n = "getAllResponseHeaders"in d ? a(d.getAllResponseHeaders()) : null
                          , r = {
                            data: e.responseType && "text" !== e.responseType ? d.response : d.responseText,
                            status: d.status,
                            statusText: d.statusText,
                            headers: n,
                            config: e,
                            request: d
                        };
                        i(t, u, r),
                        d = null
                    }
                }
                ,
                d.onabort = function() {
                    d && (u(c("Request aborted", e, "ECONNABORTED", d)),
                    d = null)
                }
                ,
                d.onerror = function() {
                    u(c("Network Error", e, null, d)),
                    d = null
                }
                ,
                d.ontimeout = function() {
                    u(c("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", d)),
                    d = null
                }
                ,
                r.isStandardBrowserEnv()) {
                    var m = n(19)
                      , g = (e.withCredentials || s(e.url)) && e.xsrfCookieName ? m.read(e.xsrfCookieName) : void 0;
                    g && (f[e.xsrfHeaderName] = g)
                }
                if ("setRequestHeader"in d && r.forEach(f, function(e, t) {
                    void 0 === l && "content-type" === t.toLowerCase() ? delete f[t] : d.setRequestHeader(t, e)
                }),
                e.withCredentials && (d.withCredentials = !0),
                e.responseType)
                    try {
                        d.responseType = e.responseType
                    } catch (t) {
                        if ("json" !== e.responseType)
                            throw t
                    }
                "function" == typeof e.onDownloadProgress && d.addEventListener("progress", e.onDownloadProgress),
                "function" == typeof e.onUploadProgress && d.upload && d.upload.addEventListener("progress", e.onUploadProgress),
                e.cancelToken && e.cancelToken.promise.then(function(e) {
                    d && (d.abort(),
                    u(e),
                    d = null)
                }),
                void 0 === l && (l = null),
                d.send(l)
            }
            )
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(15);
        e.exports = function(e, t, n) {
            var i = n.config.validateStatus;
            !i || i(n.status) ? e(n) : t(r("Request failed with status code " + n.status, n.config, null, n.request, n))
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(16);
        e.exports = function(e, t, n, i, o) {
            var a = new Error(e);
            return r(a, t, n, i, o)
        }
    }
    , function(e) {
        "use strict";
        e.exports = function(e, t, n, r, i) {
            return e.config = t,
            n && (e.code = n),
            e.request = r,
            e.response = i,
            e.isAxiosError = !0,
            e.toJSON = function() {
                return {
                    message: this.message,
                    name: this.name,
                    description: this.description,
                    number: this.number,
                    fileName: this.fileName,
                    lineNumber: this.lineNumber,
                    columnNumber: this.columnNumber,
                    stack: this.stack,
                    config: this.config,
                    code: this.code
                }
            }
            ,
            e
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(2)
          , i = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
        e.exports = function(e) {
            var t, n, o, a = {};
            return e ? (r.forEach(e.split("\n"), function(e) {
                if (o = e.indexOf(":"),
                t = r.trim(e.substr(0, o)).toLowerCase(),
                n = r.trim(e.substr(o + 1)),
                t) {
                    if (a[t] && i.indexOf(t) >= 0)
                        return;
                    a[t] = "set-cookie" === t ? (a[t] ? a[t] : []).concat([n]) : a[t] ? a[t] + ", " + n : n
                }
            }),
            a) : a
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(2);
        e.exports = r.isStandardBrowserEnv() ? function() {
            function e(e) {
                var t = e;
                return n && (i.setAttribute("href", t),
                t = i.href),
                i.setAttribute("href", t),
                {
                    href: i.href,
                    protocol: i.protocol ? i.protocol.replace(/:$/, "") : "",
                    host: i.host,
                    search: i.search ? i.search.replace(/^\?/, "") : "",
                    hash: i.hash ? i.hash.replace(/^#/, "") : "",
                    hostname: i.hostname,
                    port: i.port,
                    pathname: "/" === i.pathname.charAt(0) ? i.pathname : "/" + i.pathname
                }
            }
            var t, n = /(msie|trident)/i.test(navigator.userAgent), i = document.createElement("a");
            return t = e(window.location.href),
            function(n) {
                var i = r.isString(n) ? e(n) : n;
                return i.protocol === t.protocol && i.host === t.host
            }
        }() : function() {
            return !0
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(2);
        e.exports = r.isStandardBrowserEnv() ? {
            write: function(e, t, n, i, o, a) {
                var s = [];
                s.push(e + "=" + encodeURIComponent(t)),
                r.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()),
                r.isString(i) && s.push("path=" + i),
                r.isString(o) && s.push("domain=" + o),
                !0 === a && s.push("secure"),
                document.cookie = s.join("; ")
            },
            read: function(e) {
                var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                return t ? decodeURIComponent(t[3]) : null
            },
            remove: function(e) {
                this.write(e, "", Date.now() - 864e5)
            }
        } : {
            write: function() {},
            read: function() {
                return null
            },
            remove: function() {}
        }
    }
    , function(e) {
        "use strict";
        e.exports = function(e) {
            return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
        }
    }
    , function(e) {
        "use strict";
        e.exports = function(e, t) {
            return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(2);
        e.exports = function(e, t) {
            t = t || {};
            var n = {};
            return r.forEach(["url", "method", "params", "data"], function(e) {
                "undefined" != typeof t[e] && (n[e] = t[e])
            }),
            r.forEach(["headers", "auth", "proxy"], function(i) {
                r.isObject(t[i]) ? n[i] = r.deepMerge(e[i], t[i]) : "undefined" != typeof t[i] ? n[i] = t[i] : r.isObject(e[i]) ? n[i] = r.deepMerge(e[i]) : "undefined" != typeof e[i] && (n[i] = e[i])
            }),
            r.forEach(["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "maxContentLength", "validateStatus", "maxRedirects", "httpAgent", "httpsAgent", "cancelToken", "socketPath"], function(r) {
                "undefined" != typeof t[r] ? n[r] = t[r] : "undefined" != typeof e[r] && (n[r] = e[r])
            }),
            n
        }
    }
    , function(e) {
        "use strict";
        function t(e) {
            this.message = e
        }
        t.prototype.toString = function() {
            return "Cancel" + (this.message ? ": " + this.message : "")
        }
        ,
        t.prototype.__CANCEL__ = !0,
        e.exports = t
    }
    , function(e, t, n) {
        "use strict";
        function r(e) {
            if ("function" != typeof e)
                throw new TypeError("executor must be a function.");
            var t;
            this.promise = new Promise(function(e) {
                t = e
            }
            );
            var n = this;
            e(function(e) {
                n.reason || (n.reason = new i(e),
                t(n.reason))
            })
        }
        var i = n(23);
        r.prototype.throwIfRequested = function() {
            if (this.reason)
                throw this.reason
        }
        ,
        r.source = function() {
            var e;
            return {
                token: new r(function(t) {
                    e = t
                }
                ),
                cancel: e
            }
        }
        ,
        e.exports = r
    }
    , function(e) {
        "use strict";
        e.exports = function(e) {
            return function(t) {
                return e.apply(null, t)
            }
        }
    }
    ])
});
var Axios = axios;
!function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.ClipboardJS = t() : e.ClipboardJS = t()
}(this, function() {
    return function(e) {
        function t(r) {
            if (n[r])
                return n[r].exports;
            var i = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(i.exports, i, i.exports, t),
            i.l = !0,
            i.exports
        }
        var n = {};
        return t.m = e,
        t.c = n,
        t.d = function(e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {
                enumerable: !0,
                get: r
            })
        }
        ,
        t.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }
        ,
        t.t = function(e, n) {
            if (1 & n && (e = t(e)),
            8 & n)
                return e;
            if (4 & n && "object" == typeof e && e && e.__esModule)
                return e;
            var r = Object.create(null);
            if (t.r(r),
            Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }),
            2 & n && "string" != typeof e)
                for (var i in e)
                    t.d(r, i, function(t) {
                        return e[t]
                    }
                    .bind(null, i));
            return r
        }
        ,
        t.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e["default"]
            }
            : function() {
                return e
            }
            ;
            return t.d(n, "a", n),
            n
        }
        ,
        t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        t.p = "",
        t(t.s = 0)
    }([function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        function i(e, t) {
            var n = "data-clipboard-" + e;
            if (t.hasAttribute(n))
                return t.getAttribute(n)
        }
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , a = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }()
          , s = r(n(1))
          , c = r(n(3))
          , u = r(n(4))
          , l = function() {
            function e(t, n) {
                !function(t) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this);
                var r = function(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                return r.resolveOptions(n),
                r.listenClick(t),
                r
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(e, c["default"]),
            a(e, [{
                key: "resolveOptions",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    this.action = "function" == typeof e.action ? e.action : this.defaultAction,
                    this.target = "function" == typeof e.target ? e.target : this.defaultTarget,
                    this.text = "function" == typeof e.text ? e.text : this.defaultText,
                    this.container = "object" === o(e.container) ? e.container : document.body
                }
            }, {
                key: "listenClick",
                value: function(e) {
                    var t = this;
                    this.listener = (0,
                    u["default"])(e, "click", function(e) {
                        return t.onClick(e)
                    })
                }
            }, {
                key: "onClick",
                value: function(e) {
                    var t = e.delegateTarget || e.currentTarget;
                    this.clipboardAction && (this.clipboardAction = null),
                    this.clipboardAction = new s["default"]({
                        action: this.action(t),
                        target: this.target(t),
                        text: this.text(t),
                        container: this.container,
                        trigger: t,
                        emitter: this
                    })
                }
            }, {
                key: "defaultAction",
                value: function(e) {
                    return i("action", e)
                }
            }, {
                key: "defaultTarget",
                value: function(e) {
                    var t = i("target", e);
                    if (t)
                        return document.querySelector(t)
                }
            }, {
                key: "defaultText",
                value: function(e) {
                    return i("text", e)
                }
            }, {
                key: "destroy",
                value: function() {
                    this.listener.destroy(),
                    this.clipboardAction && (this.clipboardAction.destroy(),
                    this.clipboardAction = null)
                }
            }], [{
                key: "isSupported",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"]
                      , t = "string" == typeof e ? [e] : e
                      , n = !!document.queryCommandSupported;
                    return t.forEach(function(e) {
                        n = n && !!document.queryCommandSupported(e)
                    }),
                    n
                }
            }]),
            e
        }();
        e.exports = l
    }
    , function(e, t, n) {
        "use strict";
        var r, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        , o = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }(), a = (r = n(2)) && r.__esModule ? r : {
            "default": r
        }, s = function() {
            function t(e) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                this.resolveOptions(e),
                this.initSelection()
            }
            return o(t, [{
                key: "resolveOptions",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    this.action = e.action,
                    this.container = e.container,
                    this.emitter = e.emitter,
                    this.target = e.target,
                    this.text = e.text,
                    this.trigger = e.trigger,
                    this.selectedText = ""
                }
            }, {
                key: "initSelection",
                value: function() {
                    this.text ? this.selectFake() : this.target && this.selectTarget()
                }
            }, {
                key: "selectFake",
                value: function() {
                    var e = this
                      , t = "rtl" == document.documentElement.getAttribute("dir");
                    this.removeFake(),
                    this.fakeHandlerCallback = function() {
                        return e.removeFake()
                    }
                    ,
                    this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0,
                    this.fakeElem = document.createElement("textarea"),
                    this.fakeElem.style.fontSize = "12pt",
                    this.fakeElem.style.border = "0",
                    this.fakeElem.style.padding = "0",
                    this.fakeElem.style.margin = "0",
                    this.fakeElem.style.position = "absolute",
                    this.fakeElem.style[t ? "right" : "left"] = "-9999px";
                    var n = window.pageYOffset || document.documentElement.scrollTop;
                    this.fakeElem.style.top = n + "px",
                    this.fakeElem.setAttribute("readonly", ""),
                    this.fakeElem.value = this.text,
                    this.container.appendChild(this.fakeElem),
                    this.selectedText = (0,
                    a["default"])(this.fakeElem),
                    this.copyText()
                }
            }, {
                key: "removeFake",
                value: function() {
                    this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback),
                    this.fakeHandler = null,
                    this.fakeHandlerCallback = null),
                    this.fakeElem && (this.container.removeChild(this.fakeElem),
                    this.fakeElem = null)
                }
            }, {
                key: "selectTarget",
                value: function() {
                    this.selectedText = (0,
                    a["default"])(this.target),
                    this.copyText()
                }
            }, {
                key: "copyText",
                value: function() {
                    var t = void 0;
                    try {
                        t = document.execCommand(this.action)
                    } catch (e) {
                        t = !1
                    }
                    this.handleResult(t)
                }
            }, {
                key: "handleResult",
                value: function(e) {
                    this.emitter.emit(e ? "success" : "error", {
                        action: this.action,
                        text: this.selectedText,
                        trigger: this.trigger,
                        clearSelection: this.clearSelection.bind(this)
                    })
                }
            }, {
                key: "clearSelection",
                value: function() {
                    this.trigger && this.trigger.focus(),
                    window.getSelection().removeAllRanges()
                }
            }, {
                key: "destroy",
                value: function() {
                    this.removeFake()
                }
            }, {
                key: "action",
                set: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "copy";
                    if (this._action = e,
                    "copy" !== this._action && "cut" !== this._action)
                        throw new Error('Invalid "action" value, use either "copy" or "cut"')
                },
                get: function() {
                    return this._action
                }
            }, {
                key: "target",
                set: function(e) {
                    if (void 0 !== e) {
                        if (!e || "object" !== (void 0 === e ? "undefined" : i(e)) || 1 !== e.nodeType)
                            throw new Error('Invalid "target" value, use a valid Element');
                        if ("copy" === this.action && e.hasAttribute("disabled"))
                            throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                        if ("cut" === this.action && (e.hasAttribute("readonly") || e.hasAttribute("disabled")))
                            throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                        this._target = e
                    }
                },
                get: function() {
                    return this._target
                }
            }]),
            t
        }();
        e.exports = s
    }
    , function(e) {
        e.exports = function(e) {
            var t;
            if ("SELECT" === e.nodeName)
                e.focus(),
                t = e.value;
            else if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) {
                var n = e.hasAttribute("readonly");
                n || e.setAttribute("readonly", ""),
                e.select(),
                e.setSelectionRange(0, e.value.length),
                n || e.removeAttribute("readonly"),
                t = e.value
            } else {
                e.hasAttribute("contenteditable") && e.focus();
                var r = window.getSelection()
                  , i = document.createRange();
                i.selectNodeContents(e),
                r.removeAllRanges(),
                r.addRange(i),
                t = r.toString()
            }
            return t
        }
    }
    , function(e) {
        function t() {}
        t.prototype = {
            on: function(e, t, n) {
                var r = this.e || (this.e = {});
                return (r[e] || (r[e] = [])).push({
                    fn: t,
                    ctx: n
                }),
                this
            },
            once: function(e, t, n) {
                function r() {
                    i.off(e, r),
                    t.apply(n, arguments)
                }
                var i = this;
                return r._ = t,
                this.on(e, r, n)
            },
            emit: function(e) {
                for (var t = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[e] || []).slice(), r = 0, i = n.length; r < i; r++)
                    n[r].fn.apply(n[r].ctx, t);
                return this
            },
            off: function(e, t) {
                var n = this.e || (this.e = {})
                  , r = n[e]
                  , i = [];
                if (r && t)
                    for (var o = 0, a = r.length; o < a; o++)
                        r[o].fn !== t && r[o].fn._ !== t && i.push(r[o]);
                return i.length ? n[e] = i : delete n[e],
                this
            }
        },
        e.exports = t
    }
    , function(e, t, n) {
        var r = n(5)
          , i = n(6);
        e.exports = function(e, t, n) {
            if (!e && !t && !n)
                throw new Error("Missing required arguments");
            if (!r.string(t))
                throw new TypeError("Second argument must be a String");
            if (!r.fn(n))
                throw new TypeError("Third argument must be a Function");
            if (r.node(e))
                return d = t,
                p = n,
                (f = e).addEventListener(d, p),
                {
                    destroy: function() {
                        f.removeEventListener(d, p)
                    }
                };
            if (r.nodeList(e))
                return c = e,
                u = t,
                l = n,
                Array.prototype.forEach.call(c, function(e) {
                    e.addEventListener(u, l)
                }),
                {
                    destroy: function() {
                        Array.prototype.forEach.call(c, function(e) {
                            e.removeEventListener(u, l)
                        })
                    }
                };
            if (r.string(e))
                return o = e,
                a = t,
                s = n,
                i(document.body, o, a, s);
            throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
            var o, a, s, c, u, l, f, d, p
        }
    }
    , function(e, t) {
        t.node = function(e) {
            return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType
        }
        ,
        t.nodeList = function(e) {
            var n = Object.prototype.toString.call(e);
            return void 0 !== e && ("[object NodeList]" === n || "[object HTMLCollection]" === n) && "length"in e && (0 === e.length || t.node(e[0]))
        }
        ,
        t.string = function(e) {
            return "string" == typeof e || e instanceof String
        }
        ,
        t.fn = function(e) {
            return "[object Function]" === Object.prototype.toString.call(e)
        }
    }
    , function(e, t, n) {
        function r(e, t, n, r, o) {
            var a = function(e, t, n, r) {
                return function(n) {
                    n.delegateTarget = i(n.target, t),
                    n.delegateTarget && r.call(e, n)
                }
            }
            .apply(this, arguments);
            return e.addEventListener(n, a, o),
            {
                destroy: function() {
                    e.removeEventListener(n, a, o)
                }
            }
        }
        var i = n(7);
        e.exports = function(e, t, n, i, o) {
            return "function" == typeof e.addEventListener ? r.apply(null, arguments) : "function" == typeof n ? r.bind(null, document).apply(null, arguments) : ("string" == typeof e && (e = document.querySelectorAll(e)),
            Array.prototype.map.call(e, function(e) {
                return r(e, t, n, i, o)
            }))
        }
    }
    , function(e) {
        if ("undefined" != typeof Element && !Element.prototype.matches) {
            var t = Element.prototype;
            t.matches = t.matchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector || t.webkitMatchesSelector
        }
        e.exports = function(e, t) {
            for (; e && 9 !== e.nodeType; ) {
                if ("function" == typeof e.matches && e.matches(t))
                    return e;
                e = e.parentNode
            }
        }
    }
    ])
}),
function(e, t) {
    function n(e, t, n) {
        e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent("on" + t, n)
    }
    function r(e) {
        if ("keypress" == e.type) {
            var t = String.fromCharCode(e.which);
            return e.shiftKey || (t = t.toLowerCase()),
            t
        }
        return g[e.which] ? g[e.which] : v[e.which] ? v[e.which] : String.fromCharCode(e.which).toLowerCase()
    }
    function i(e, t) {
        return e.sort().join(",") === t.sort().join(",")
    }
    function o(e) {
        var t = [];
        return e.shiftKey && t.push("shift"),
        e.altKey && t.push("alt"),
        e.ctrlKey && t.push("ctrl"),
        e.metaKey && t.push("meta"),
        t
    }
    function a(e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = !1
    }
    function s(e) {
        e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
    }
    function c(e) {
        return "shift" == e || "ctrl" == e || "alt" == e || "meta" == e
    }
    function u() {
        if (!m)
            for (var e in m = {},
            g)
                e > 95 && e < 112 || g.hasOwnProperty(e) && (m[g[e]] = e);
        return m
    }
    function l(e, t, n) {
        return n || (n = u()[e] ? "keydown" : "keypress"),
        "keypress" == n && t.length && (n = "keydown"),
        n
    }
    function f(e) {
        return "+" === e ? ["+"] : (e = e.replace(/\+{2}/g, "+plus")).split("+")
    }
    function d(e, t) {
        var n, r, i, o = [];
        for (n = f(e),
        i = 0; i < n.length; ++i)
            r = n[i],
            b[r] && (r = b[r]),
            t && "keypress" != t && y[r] && (r = y[r],
            o.push("shift")),
            c(r) && o.push(r);
        return {
            key: r,
            modifiers: o,
            action: t = l(r, o, t)
        }
    }
    function p(e, n) {
        return null !== e && e !== t && (e === n || p(e.parentNode, n))
    }
    function h(e) {
        function u(e) {
            e = e || {};
            var t, n = !1;
            for (t in _)
                e[t] ? n = !0 : _[t] = 0;
            n || (k = !1)
        }
        function l(e, t, n, r, o, a) {
            var s, u, l = [], f = n.type;
            if (!y._callbacks[e])
                return [];
            for ("keyup" == f && c(e) && (t = [e]),
            s = 0; s < y._callbacks[e].length; ++s)
                if (u = y._callbacks[e][s],
                (r || !u.seq || _[u.seq] == u.level) && f == u.action && ("keypress" == f && !n.metaKey && !n.ctrlKey || i(t, u.modifiers))) {
                    var d = !r && u.combo == o
                      , p = r && u.seq == r && u.level == a;
                    (d || p) && y._callbacks[e].splice(s, 1),
                    l.push(u)
                }
            return l
        }
        function f(e, t, n, r) {
            y.stopCallback(t, t.target || t.srcElement, n, r) || !1 === e(t, n) && (a(t),
            s(t))
        }
        function p(e) {
            "number" != typeof e.which && (e.which = e.keyCode);
            var t = r(e);
            t && ("keyup" != e.type || w !== t ? y.handleKey(t, o(e), e) : w = !1)
        }
        function m() {
            clearTimeout(b),
            b = setTimeout(u, 1e3)
        }
        function g(e, t, n, i) {
            function o(t) {
                return function() {
                    k = t,
                    ++_[e],
                    m()
                }
            }
            function a(t) {
                f(n, t, e),
                "keyup" !== i && (w = r(t)),
                setTimeout(u, 10)
            }
            _[e] = 0;
            for (var s = 0; s < t.length; ++s) {
                var c = s + 1 === t.length ? a : o(i || d(t[s + 1]).action);
                v(t[s], c, i, e, s)
            }
        }
        function v(e, t, n, r, i) {
            y._directMap[e + ":" + n] = t;
            var o, a = (e = e.replace(/\s+/g, " ")).split(" ");
            a.length > 1 ? g(e, a, t, n) : (o = d(e, n),
            y._callbacks[o.key] = y._callbacks[o.key] || [],
            l(o.key, o.modifiers, {
                type: o.action
            }, r, e, i),
            y._callbacks[o.key][r ? "unshift" : "push"]({
                callback: t,
                modifiers: o.modifiers,
                action: o.action,
                seq: r,
                level: i,
                combo: e
            }))
        }
        var y = this;
        if (e = e || t,
        !(y instanceof h))
            return new h(e);
        y.target = e,
        y._callbacks = {},
        y._directMap = {};
        var b, _ = {}, w = !1, x = !1, k = !1;
        y._handleKey = function(e, t, n) {
            var r, i = l(e, t, n), o = {}, a = 0, s = !1;
            for (r = 0; r < i.length; ++r)
                i[r].seq && (a = Math.max(a, i[r].level));
            for (r = 0; r < i.length; ++r)
                if (i[r].seq) {
                    if (i[r].level != a)
                        continue;
                    s = !0,
                    o[i[r].seq] = 1,
                    f(i[r].callback, n, i[r].combo, i[r].seq)
                } else
                    s || f(i[r].callback, n, i[r].combo);
            var d = "keypress" == n.type && x;
            n.type != k || c(e) || d || u(o),
            x = s && "keydown" == n.type
        }
        ,
        y._bindMultiple = function(e, t, n) {
            for (var r = 0; r < e.length; ++r)
                v(e[r], t, n)
        }
        ,
        n(e, "keypress", p),
        n(e, "keydown", p),
        n(e, "keyup", p)
    }
    if (e) {
        for (var m, g = {
            8: "backspace",
            9: "tab",
            13: "enter",
            16: "shift",
            17: "ctrl",
            18: "alt",
            20: "capslock",
            27: "esc",
            32: "space",
            33: "pageup",
            34: "pagedown",
            35: "end",
            36: "home",
            37: "left",
            38: "up",
            39: "right",
            40: "down",
            45: "ins",
            46: "del",
            91: "meta",
            93: "meta",
            224: "meta"
        }, v = {
            106: "*",
            107: "+",
            109: "-",
            110: ".",
            111: "/",
            186: ";",
            187: "=",
            188: ",",
            189: "-",
            190: ".",
            191: "/",
            192: "`",
            219: "[",
            220: "\\",
            221: "]",
            222: "'"
        }, y = {
            "~": "`",
            "!": "1",
            "@": "2",
            "#": "3",
            $: "4",
            "%": "5",
            "^": "6",
            "&": "7",
            "*": "8",
            "(": "9",
            ")": "0",
            _: "-",
            "+": "=",
            ":": ";",
            '"': "'",
            "<": ",",
            ">": ".",
            "?": "/",
            "|": "\\"
        }, b = {
            option: "alt",
            command: "meta",
            "return": "enter",
            escape: "esc",
            plus: "+",
            mod: /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "meta" : "ctrl"
        }, _ = 1; _ < 20; ++_)
            g[111 + _] = "f" + _;
        for (_ = 0; _ <= 9; ++_)
            g[_ + 96] = _.toString();
        h.prototype.bind = function(e, t, n) {
            var r = this;
            return e = e instanceof Array ? e : [e],
            r._bindMultiple.call(r, e, t, n),
            r
        }
        ,
        h.prototype.unbind = function(e, t) {
            var n = this;
            return n.bind.call(n, e, function() {}, t)
        }
        ,
        h.prototype.trigger = function(e, t) {
            var n = this;
            return n._directMap[e + ":" + t] && n._directMap[e + ":" + t]({}, e),
            n
        }
        ,
        h.prototype.reset = function() {
            var e = this;
            return e._callbacks = {},
            e._directMap = {},
            e
        }
        ,
        h.prototype.stopCallback = function(e, t) {
            var n = this;
            return !((" " + t.className + " ").indexOf(" mousetrap ") > -1) && (!p(t, n.target) && ("INPUT" == t.tagName || "SELECT" == t.tagName || "TEXTAREA" == t.tagName || t.isContentEditable))
        }
        ,
        h.prototype.handleKey = function() {
            var e = this;
            return e._handleKey.apply(e, arguments)
        }
        ,
        h.addKeycodes = function(e) {
            for (var t in e)
                e.hasOwnProperty(t) && (g[t] = e[t]);
            m = null
        }
        ,
        h.init = function() {
            var e = h(t);
            for (var n in e)
                "_" !== n.charAt(0) && (h[n] = function(t) {
                    return function() {
                        return e[t].apply(e, arguments)
                    }
                }(n))
        }
        ,
        h.init(),
        e.Mousetrap = h,
        "undefined" != typeof module && module.exports && (module.exports = h),
        "function" == typeof define && define.amd && define(function() {
            return h
        })
    }
}("undefined" != typeof window ? window : null, "undefined" != typeof window ? document : null),
function(e) {
    var t = {}
      , n = e.prototype.stopCallback;
    e.prototype.stopCallback = function(e, r, i, o) {
        var a = this;
        return !!a.paused || !t[i] && !t[o] && n.call(a, e, r, i)
    }
    ,
    e.prototype.bindGlobal = function(e, n, r) {
        if (this.bind(e, n, r),
        e instanceof Array)
            for (var i = 0; i < e.length; i++)
                t[e[i]] = !0;
        else
            t[e] = !0
    }
    ,
    e.init()
}(Mousetrap),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Vue = t()
}(this, function() {
    "use strict";
    function e(e) {
        return null == e
    }
    function t(e) {
        return null != e
    }
    function n(e) {
        return !0 === e
    }
    function r(e) {
        return "string" == typeof e || "number" == typeof e || "symbol" == typeof e || "boolean" == typeof e
    }
    function i(e) {
        return null !== e && "object" == typeof e
    }
    function o(e) {
        return "[object Object]" === tr.call(e)
    }
    function a(e) {
        var t = parseFloat(String(e));
        return t >= 0 && Math.floor(t) === t && isFinite(e)
    }
    function s(e) {
        return t(e) && "function" == typeof e.then && "function" == typeof e["catch"]
    }
    function c(e) {
        return null == e ? "" : Array.isArray(e) || o(e) && e.toString === tr ? JSON.stringify(e, null, 2) : String(e)
    }
    function u(e) {
        var t = parseFloat(e);
        return isNaN(t) ? e : t
    }
    function l(e, t) {
        for (var n = Object.create(null), r = e.split(","), i = 0; i < r.length; i++)
            n[r[i]] = !0;
        return t ? function(e) {
            return n[e.toLowerCase()]
        }
        : function(e) {
            return n[e]
        }
    }
    function f(e, t) {
        if (e.length) {
            var n = e.indexOf(t);
            if (n > -1)
                return e.splice(n, 1)
        }
    }
    function d(e, t) {
        return ir.call(e, t)
    }
    function p(e) {
        var t = Object.create(null);
        return function(n) {
            return t[n] || (t[n] = e(n))
        }
    }
    function h(e, t) {
        t = t || 0;
        for (var n = e.length - t, r = new Array(n); n--; )
            r[n] = e[n + t];
        return r
    }
    function m(e, t) {
        for (var n in t)
            e[n] = t[n];
        return e
    }
    function g(e) {
        for (var t = {}, n = 0; n < e.length; n++)
            e[n] && m(t, e[n]);
        return t
    }
    function v() {}
    function y(e, t) {
        if (e === t)
            return !0;
        var n = i(e)
          , r = i(t);
        if (!n || !r)
            return !n && !r && String(e) === String(t);
        try {
            var o = Array.isArray(e)
              , a = Array.isArray(t);
            if (o && a)
                return e.length === t.length && e.every(function(e, n) {
                    return y(e, t[n])
                });
            if (e instanceof Date && t instanceof Date)
                return e.getTime() === t.getTime();
            if (o || a)
                return !1;
            var s = Object.keys(e)
              , c = Object.keys(t);
            return s.length === c.length && s.every(function(n) {
                return y(e[n], t[n])
            })
        } catch (e) {
            return !1
        }
    }
    function b(e, t) {
        for (var n = 0; n < e.length; n++)
            if (y(e[n], t))
                return n;
        return -1
    }
    function _(e) {
        var t = !1;
        return function() {
            t || (t = !0,
            e.apply(this, arguments))
        }
    }
    function w(e, t, n, r) {
        Object.defineProperty(e, t, {
            value: n,
            enumerable: !!r,
            writable: !0,
            configurable: !0
        })
    }
    function x(e) {
        return "function" == typeof e && /native code/.test(e.toString())
    }
    function k(e) {
        Mr.push(e),
        Fr.target = e
    }
    function S() {
        Mr.pop(),
        Fr.target = Mr[Mr.length - 1]
    }
    function A(e) {
        return new qr(void 0,void 0,void 0,String(e))
    }
    function C(e) {
        var t = new qr(e.tag,e.data,e.children && e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);
        return t.ns = e.ns,
        t.isStatic = e.isStatic,
        t.key = e.key,
        t.isComment = e.isComment,
        t.fnContext = e.fnContext,
        t.fnOptions = e.fnOptions,
        t.fnScopeId = e.fnScopeId,
        t.asyncMeta = e.asyncMeta,
        t.isCloned = !0,
        t
    }
    function E(e) {
        Vr = e
    }
    function $(e, t) {
        var n;
        if (i(e) && !(e instanceof qr))
            return d(e, "__ob__") && e.__ob__ instanceof Qr ? n = e.__ob__ : Vr && !jr() && (Array.isArray(e) || o(e)) && Object.isExtensible(e) && !e._isVue && (n = new Qr(e)),
            t && n && n.vmCount++,
            n
    }
    function T(e, t, n, r, i) {
        var o = new Fr
          , a = Object.getOwnPropertyDescriptor(e, t);
        if (!a || !1 !== a.configurable) {
            var s = a && a.get
              , c = a && a.set;
            s && !c || 2 !== arguments.length || (n = e[t]);
            var u = !i && $(n);
            Object.defineProperty(e, t, {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    var t = s ? s.call(e) : n;
                    return Fr.target && (o.depend(),
                    u && (u.dep.depend(),
                    Array.isArray(t) && function r(e) {
                        for (var t = void 0, n = 0, i = e.length; n < i; n++)
                            (t = e[n]) && t.__ob__ && t.__ob__.dep.depend(),
                            Array.isArray(t) && r(t)
                    }(t))),
                    t
                },
                set: function(t) {
                    var r = s ? s.call(e) : n;
                    t === r || t != t && r != r || s && !c || (c ? c.call(e, t) : n = t,
                    u = !i && $(t),
                    o.notify())
                }
            })
        }
    }
    function I(e, t, n) {
        if (Array.isArray(e) && a(t))
            return e.length = Math.max(e.length, t),
            e.splice(t, 1, n),
            n;
        if (t in e && !(t in Object.prototype))
            return e[t] = n,
            n;
        var r = e.__ob__;
        return e._isVue || r && r.vmCount ? n : r ? (T(r.value, t, n),
        r.dep.notify(),
        n) : (e[t] = n,
        n)
    }
    function O(e, t) {
        if (Array.isArray(e) && a(t))
            e.splice(t, 1);
        else {
            var n = e.__ob__;
            e._isVue || n && n.vmCount || d(e, t) && (delete e[t],
            n && n.dep.notify())
        }
    }
    function D(e, t) {
        if (!t)
            return e;
        for (var n, r, i, a = Rr ? Reflect.ownKeys(t) : Object.keys(t), s = 0; s < a.length; s++)
            "__ob__" !== (n = a[s]) && (r = e[n],
            i = t[n],
            d(e, n) ? r !== i && o(r) && o(i) && D(r, i) : I(e, n, i));
        return e
    }
    function j(e, t, n) {
        return n ? function() {
            var r = "function" == typeof t ? t.call(n, n) : t
              , i = "function" == typeof e ? e.call(n, n) : e;
            return r ? D(r, i) : i
        }
        : t ? e ? function() {
            return D("function" == typeof t ? t.call(this, this) : t, "function" == typeof e ? e.call(this, this) : e)
        }
        : t : e
    }
    function P(e, t) {
        var n = t ? e ? e.concat(t) : Array.isArray(t) ? t : [t] : e;
        return n ? function(e) {
            for (var t = [], n = 0; n < e.length; n++)
                -1 === t.indexOf(e[n]) && t.push(e[n]);
            return t
        }(n) : n
    }
    function R(e, t) {
        var n = Object.create(e || null);
        return t ? m(n, t) : n
    }
    function N(e, t, n) {
        function r(r) {
            var i = Kr[r] || Gr;
            c[r] = i(e[r], t[r], n, r)
        }
        if ("function" == typeof t && (t = t.options),
        function(e) {
            var t = e.props;
            if (t) {
                var n, r, i = {};
                if (Array.isArray(t))
                    for (n = t.length; n--; )
                        "string" == typeof (r = t[n]) && (i[ar(r)] = {
                            type: null
                        });
                else if (o(t))
                    for (var a in t)
                        r = t[a],
                        i[ar(a)] = o(r) ? r : {
                            type: r
                        };
                e.props = i
            }
        }(t),
        function(e) {
            var t = e.inject;
            if (t) {
                var n = e.inject = {};
                if (Array.isArray(t))
                    for (var r = 0; r < t.length; r++)
                        n[t[r]] = {
                            from: t[r]
                        };
                else if (o(t))
                    for (var i in t) {
                        var a = t[i];
                        n[i] = o(a) ? m({
                            from: i
                        }, a) : {
                            from: a
                        }
                    }
            }
        }(t),
        function(e) {
            var t = e.directives;
            if (t)
                for (var n in t) {
                    var r = t[n];
                    "function" == typeof r && (t[n] = {
                        bind: r,
                        update: r
                    })
                }
        }(t),
        !t._base && (t["extends"] && (e = N(e, t["extends"], n)),
        t.mixins))
            for (var i = 0, a = t.mixins.length; i < a; i++)
                e = N(e, t.mixins[i], n);
        var s, c = {};
        for (s in e)
            r(s);
        for (s in t)
            d(e, s) || r(s);
        return c
    }
    function L(e, t, n) {
        if ("string" == typeof n) {
            var r = e[t];
            if (d(r, n))
                return r[n];
            var i = ar(n);
            if (d(r, i))
                return r[i];
            var o = sr(i);
            return d(r, o) ? r[o] : r[n] || r[i] || r[o]
        }
    }
    function F(e, t, n, r) {
        var i = t[e]
          , o = !d(n, e)
          , a = n[e]
          , s = U(Boolean, i.type);
        if (s > -1)
            if (o && !d(i, "default"))
                a = !1;
            else if ("" === a || a === ur(e)) {
                var c = U(String, i.type);
                (c < 0 || s < c) && (a = !0)
            }
        if (void 0 === a) {
            a = function(e, t, n) {
                if (d(t, "default")) {
                    var r = t["default"];
                    return e && e.$options.propsData && void 0 === e.$options.propsData[n] && void 0 !== e._props[n] ? e._props[n] : "function" == typeof r && "Function" !== M(t.type) ? r.call(e) : r
                }
            }(r, i, e);
            var u = Vr;
            E(!0),
            $(a),
            E(u)
        }
        return a
    }
    function M(e) {
        var t = e && e.toString().match(/^\s*function (\w+)/);
        return t ? t[1] : ""
    }
    function q(e, t) {
        return M(e) === M(t)
    }
    function U(e, t) {
        if (!Array.isArray(t))
            return q(t, e) ? 0 : -1;
        for (var n = 0, r = t.length; n < r; n++)
            if (q(t[n], e))
                return n;
        return -1
    }
    function z(e, t, n) {
        k();
        try {
            if (t)
                for (var r = t; r = r.$parent; ) {
                    var i = r.$options.errorCaptured;
                    if (i)
                        for (var o = 0; o < i.length; o++)
                            try {
                                if (!1 === i[o].call(r, e, t, n))
                                    return
                            } catch (e) {
                                H(e, r, "errorCaptured hook")
                            }
                }
            H(e, t, n)
        } finally {
            S()
        }
    }
    function B(e, t, n, r, i) {
        var o;
        try {
            (o = n ? e.apply(t, n) : e.call(t)) && !o._isVue && s(o) && !o._handled && (o["catch"](function(e) {
                return z(e, r, i + " (Promise/async)")
            }),
            o._handled = !0)
        } catch (e) {
            z(e, r, i)
        }
        return o
    }
    function H(e, t, n) {
        if (gr.errorHandler)
            try {
                return gr.errorHandler.call(null, e, t, n)
            } catch (t) {
                t !== e && W(t, null, "config.errorHandler")
            }
        W(e, t, n)
    }
    function W(e) {
        if (!_r && !wr || "undefined" == typeof console)
            throw e;
        console.error(e)
    }
    function V() {
        Zr = !1;
        var e = Jr.slice(0);
        Jr.length = 0;
        for (var t = 0; t < e.length; t++)
            e[t]()
    }
    function Q(e, t) {
        var n;
        if (Jr.push(function() {
            if (e)
                try {
                    e.call(t)
                } catch (e) {
                    z(e, t, "nextTick")
                }
            else
                n && n(t)
        }),
        Zr || (Zr = !0,
        Yr()),
        !e && "undefined" != typeof Promise)
            return new Promise(function(e) {
                n = e
            }
            )
    }
    function K(e) {
        !function t(e, n) {
            var r, o, a = Array.isArray(e);
            if (!(!a && !i(e) || Object.isFrozen(e) || e instanceof qr)) {
                if (e.__ob__) {
                    var s = e.__ob__.dep.id;
                    if (n.has(s))
                        return;
                    n.add(s)
                }
                if (a)
                    for (r = e.length; r--; )
                        t(e[r], n);
                else
                    for (r = (o = Object.keys(e)).length; r--; )
                        t(e[o[r]], n)
            }
        }(e, ii),
        ii.clear()
    }
    function Y(e, t) {
        function n() {
            var e = arguments
              , r = n.fns;
            if (!Array.isArray(r))
                return B(r, null, arguments, t, "v-on handler");
            for (var i = r.slice(), o = 0; o < i.length; o++)
                B(i[o], null, e, t, "v-on handler")
        }
        return n.fns = e,
        n
    }
    function G(t, r, i, o, a, s) {
        var c, u, l, f;
        for (c in t)
            u = t[c],
            l = r[c],
            f = oi(c),
            e(u) || (e(l) ? (e(u.fns) && (u = t[c] = Y(u, s)),
            n(f.once) && (u = t[c] = a(f.name, u, f.capture)),
            i(f.name, u, f.capture, f.passive, f.params)) : u !== l && (l.fns = u,
            t[c] = l));
        for (c in r)
            e(t[c]) && o((f = oi(c)).name, r[c], f.capture)
    }
    function X(r, i, o) {
        function a() {
            o.apply(this, arguments),
            f(s.fns, a)
        }
        var s;
        r instanceof qr && (r = r.data.hook || (r.data.hook = {}));
        var c = r[i];
        e(c) ? s = Y([a]) : t(c.fns) && n(c.merged) ? (s = c).fns.push(a) : s = Y([c, a]),
        s.merged = !0,
        r[i] = s
    }
    function J(e, n, r, i, o) {
        if (t(n)) {
            if (d(n, r))
                return e[r] = n[r],
                o || delete n[r],
                !0;
            if (d(n, i))
                return e[r] = n[i],
                o || delete n[i],
                !0
        }
        return !1
    }
    function Z(i) {
        return r(i) ? [A(i)] : Array.isArray(i) ? function o(i, a) {
            var s, c, u, l, f = [];
            for (s = 0; s < i.length; s++)
                e(c = i[s]) || "boolean" == typeof c || (l = f[u = f.length - 1],
                Array.isArray(c) ? c.length > 0 && (ee((c = o(c, (a || "") + "_" + s))[0]) && ee(l) && (f[u] = A(l.text + c[0].text),
                c.shift()),
                f.push.apply(f, c)) : r(c) ? ee(l) ? f[u] = A(l.text + c) : "" !== c && f.push(A(c)) : ee(c) && ee(l) ? f[u] = A(l.text + c.text) : (n(i._isVList) && t(c.tag) && e(c.key) && t(a) && (c.key = "__vlist" + a + "_" + s + "__"),
                f.push(c)));
            return f
        }(i) : void 0
    }
    function ee(e) {
        return t(e) && t(e.text) && !1 === e.isComment
    }
    function te(e, t) {
        if (e) {
            for (var n = Object.create(null), r = Rr ? Reflect.ownKeys(e) : Object.keys(e), i = 0; i < r.length; i++) {
                var o = r[i];
                if ("__ob__" !== o) {
                    for (var a = e[o].from, s = t; s; ) {
                        if (s._provided && d(s._provided, a)) {
                            n[o] = s._provided[a];
                            break
                        }
                        s = s.$parent
                    }
                    if (!s && "default"in e[o]) {
                        var c = e[o]["default"];
                        n[o] = "function" == typeof c ? c.call(t) : c
                    }
                }
            }
            return n
        }
    }
    function ne(e, t) {
        if (!e || !e.length)
            return {};
        for (var n = {}, r = 0, i = e.length; r < i; r++) {
            var o = e[r]
              , a = o.data;
            if (a && a.attrs && a.attrs.slot && delete a.attrs.slot,
            o.context !== t && o.fnContext !== t || !a || null == a.slot)
                (n["default"] || (n["default"] = [])).push(o);
            else {
                var s = a.slot
                  , c = n[s] || (n[s] = []);
                "template" === o.tag ? c.push.apply(c, o.children || []) : c.push(o)
            }
        }
        for (var u in n)
            n[u].every(re) && delete n[u];
        return n
    }
    function re(e) {
        return e.isComment && !e.asyncFactory || " " === e.text
    }
    function ie(e, t, n) {
        var r, i = Object.keys(t).length > 0, o = e ? !!e.$stable : !i, a = e && e.$key;
        if (e) {
            if (e._normalized)
                return e._normalized;
            if (o && n && n !== er && a === n.$key && !i && !n.$hasNormal)
                return n;
            for (var s in r = {},
            e)
                e[s] && "$" !== s[0] && (r[s] = oe(t, s, e[s]))
        } else
            r = {};
        for (var c in t)
            c in r || (r[c] = ae(t, c));
        return e && Object.isExtensible(e) && (e._normalized = r),
        w(r, "$stable", o),
        w(r, "$key", a),
        w(r, "$hasNormal", i),
        r
    }
    function oe(e, t, n) {
        var r = function() {
            var e = arguments.length ? n.apply(null, arguments) : n({});
            return (e = e && "object" == typeof e && !Array.isArray(e) ? [e] : Z(e)) && (0 === e.length || 1 === e.length && e[0].isComment) ? void 0 : e
        };
        return n.proxy && Object.defineProperty(e, t, {
            get: r,
            enumerable: !0,
            configurable: !0
        }),
        r
    }
    function ae(e, t) {
        return function() {
            return e[t]
        }
    }
    function se(e, n) {
        var r, o, a, s, c;
        if (Array.isArray(e) || "string" == typeof e)
            for (r = new Array(e.length),
            o = 0,
            a = e.length; o < a; o++)
                r[o] = n(e[o], o);
        else if ("number" == typeof e)
            for (r = new Array(e),
            o = 0; o < e; o++)
                r[o] = n(o + 1, o);
        else if (i(e))
            if (Rr && e[Symbol.iterator]) {
                r = [];
                for (var u = e[Symbol.iterator](), l = u.next(); !l.done; )
                    r.push(n(l.value, r.length)),
                    l = u.next()
            } else
                for (s = Object.keys(e),
                r = new Array(s.length),
                o = 0,
                a = s.length; o < a; o++)
                    c = s[o],
                    r[o] = n(e[c], c, o);
        return t(r) || (r = []),
        r._isVList = !0,
        r
    }
    function ce(e, t, n, r) {
        var i, o = this.$scopedSlots[e];
        o ? (n = n || {},
        r && (n = m(m({}, r), n)),
        i = o(n) || t) : i = this.$slots[e] || t;
        var a = n && n.slot;
        return a ? this.$createElement("template", {
            slot: a
        }, i) : i
    }
    function ue(e) {
        return L(this.$options, "filters", e) || dr
    }
    function le(e, t) {
        return Array.isArray(e) ? -1 === e.indexOf(t) : e !== t
    }
    function fe(e, t, n, r, i) {
        var o = gr.keyCodes[t] || n;
        return i && r && !gr.keyCodes[t] ? le(i, r) : o ? le(o, e) : r ? ur(r) !== t : void 0
    }
    function de(e, t, n, r, o) {
        if (n && i(n)) {
            var a;
            Array.isArray(n) && (n = g(n));
            var s = function(i) {
                if ("class" === i || "style" === i || rr(i))
                    a = e;
                else {
                    var s = e.attrs && e.attrs.type;
                    a = r || gr.mustUseProp(t, s, i) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {})
                }
                var c = ar(i)
                  , u = ur(i);
                c in a || u in a || (a[i] = n[i],
                o && ((e.on || (e.on = {}))["update:" + i] = function(e) {
                    n[i] = e
                }
                ))
            };
            for (var c in n)
                s(c)
        }
        return e
    }
    function pe(e, t) {
        var n = this._staticTrees || (this._staticTrees = [])
          , r = n[e];
        return r && !t ? r : (me(r = n[e] = this.$options.staticRenderFns[e].call(this._renderProxy, null, this), "__static__" + e, !1),
        r)
    }
    function he(e, t, n) {
        return me(e, "__once__" + t + (n ? "_" + n : ""), !0),
        e
    }
    function me(e, t, n) {
        if (Array.isArray(e))
            for (var r = 0; r < e.length; r++)
                e[r] && "string" != typeof e[r] && ge(e[r], t + "_" + r, n);
        else
            ge(e, t, n)
    }
    function ge(e, t, n) {
        e.isStatic = !0,
        e.key = t,
        e.isOnce = n
    }
    function ve(e, t) {
        if (t && o(t)) {
            var n = e.on = e.on ? m({}, e.on) : {};
            for (var r in t) {
                var i = n[r]
                  , a = t[r];
                n[r] = i ? [].concat(i, a) : a
            }
        }
        return e
    }
    function ye(e, t, n, r) {
        t = t || {
            $stable: !n
        };
        for (var i = 0; i < e.length; i++) {
            var o = e[i];
            Array.isArray(o) ? ye(o, t, n) : o && (o.proxy && (o.fn.proxy = !0),
            t[o.key] = o.fn)
        }
        return r && (t.$key = r),
        t
    }
    function be(e, t) {
        for (var n = 0; n < t.length; n += 2) {
            var r = t[n];
            "string" == typeof r && r && (e[t[n]] = t[n + 1])
        }
        return e
    }
    function _e(e, t) {
        return "string" == typeof e ? t + e : e
    }
    function we(e) {
        e._o = he,
        e._n = u,
        e._s = c,
        e._l = se,
        e._t = ce,
        e._q = y,
        e._i = b,
        e._m = pe,
        e._f = ue,
        e._k = fe,
        e._b = de,
        e._v = A,
        e._e = zr,
        e._u = ye,
        e._g = ve,
        e._d = be,
        e._p = _e
    }
    function xe(e, t, r, i, o) {
        var a, s = this, c = o.options;
        d(i, "_uid") ? (a = Object.create(i))._original = i : (a = i,
        i = i._original);
        var u = n(c._compiled)
          , l = !u;
        this.data = e,
        this.props = t,
        this.children = r,
        this.parent = i,
        this.listeners = e.on || er,
        this.injections = te(c.inject, i),
        this.slots = function() {
            return s.$slots || ie(e.scopedSlots, s.$slots = ne(r, i)),
            s.$slots
        }
        ,
        Object.defineProperty(this, "scopedSlots", {
            enumerable: !0,
            get: function() {
                return ie(e.scopedSlots, this.slots())
            }
        }),
        u && (this.$options = c,
        this.$slots = this.slots(),
        this.$scopedSlots = ie(e.scopedSlots, this.$slots)),
        c._scopeId ? this._c = function(e, t, n, r) {
            var o = Ee(a, e, t, n, r, l);
            return o && !Array.isArray(o) && (o.fnScopeId = c._scopeId,
            o.fnContext = i),
            o
        }
        : this._c = function(e, t, n, r) {
            return Ee(a, e, t, n, r, l)
        }
    }
    function ke(e, t, n, r) {
        var i = C(e);
        return i.fnContext = n,
        i.fnOptions = r,
        t.slot && ((i.data || (i.data = {})).slot = t.slot),
        i
    }
    function Se(e, t) {
        for (var n in t)
            e[ar(n)] = t[n]
    }
    function Ae(r, o, a, c, u) {
        if (!e(r)) {
            var l = a.$options._base;
            if (i(r) && (r = l.extend(r)),
            "function" == typeof r) {
                var d;
                if (e(r.cid) && void 0 === (r = function(r, o) {
                    if (n(r.error) && t(r.errorComp))
                        return r.errorComp;
                    if (t(r.resolved))
                        return r.resolved;
                    var a = fi;
                    if (a && t(r.owners) && -1 === r.owners.indexOf(a) && r.owners.push(a),
                    n(r.loading) && t(r.loadingComp))
                        return r.loadingComp;
                    if (a && !t(r.owners)) {
                        var c = r.owners = [a]
                          , u = !0
                          , l = null
                          , d = null;
                        a.$on("hook:destroyed", function() {
                            return f(c, a)
                        });
                        var p = function(e) {
                            for (var t = 0, n = c.length; t < n; t++)
                                c[t].$forceUpdate();
                            e && (c.length = 0,
                            null !== l && (clearTimeout(l),
                            l = null),
                            null !== d && (clearTimeout(d),
                            d = null))
                        }
                          , h = _(function(e) {
                            r.resolved = $e(e, o),
                            u ? c.length = 0 : p(!0)
                        })
                          , m = _(function() {
                            t(r.errorComp) && (r.error = !0,
                            p(!0))
                        })
                          , g = r(h, m);
                        return i(g) && (s(g) ? e(r.resolved) && g.then(h, m) : s(g.component) && (g.component.then(h, m),
                        t(g.error) && (r.errorComp = $e(g.error, o)),
                        t(g.loading) && (r.loadingComp = $e(g.loading, o),
                        0 === g.delay ? r.loading = !0 : l = setTimeout(function() {
                            l = null,
                            e(r.resolved) && e(r.error) && (r.loading = !0,
                            p(!1))
                        }, g.delay || 200)),
                        t(g.timeout) && (d = setTimeout(function() {
                            d = null,
                            e(r.resolved) && m(null)
                        }, g.timeout)))),
                        u = !1,
                        r.loading ? r.loadingComp : r.resolved
                    }
                }(d = r, l)))
                    return function(e, t, n, r, i) {
                        var o = zr();
                        return o.asyncFactory = e,
                        o.asyncMeta = {
                            data: t,
                            context: n,
                            children: r,
                            tag: i
                        },
                        o
                    }(d, o, a, c, u);
                o = o || {},
                Ve(r),
                t(o.model) && function(e, n) {
                    var r = e.model && e.model.prop || "value"
                      , i = e.model && e.model.event || "input";
                    (n.attrs || (n.attrs = {}))[r] = n.model.value;
                    var o = n.on || (n.on = {})
                      , a = o[i]
                      , s = n.model.callback;
                    t(a) ? (Array.isArray(a) ? -1 === a.indexOf(s) : a !== s) && (o[i] = [s].concat(a)) : o[i] = s
                }(r.options, o);
                var p = function(n, r) {
                    var i = r.options.props;
                    if (!e(i)) {
                        var o = {}
                          , a = n.attrs
                          , s = n.props;
                        if (t(a) || t(s))
                            for (var c in i) {
                                var u = ur(c);
                                J(o, s, c, u, !0) || J(o, a, c, u, !1)
                            }
                        return o
                    }
                }(o, r);
                if (n(r.options.functional))
                    return function(e, n, r, i, o) {
                        var a = e.options
                          , s = {}
                          , c = a.props;
                        if (t(c))
                            for (var u in c)
                                s[u] = F(u, c, n || er);
                        else
                            t(r.attrs) && Se(s, r.attrs),
                            t(r.props) && Se(s, r.props);
                        var l = new xe(r,s,o,i,e)
                          , f = a.render.call(null, l._c, l);
                        if (f instanceof qr)
                            return ke(f, r, l.parent, a);
                        if (Array.isArray(f)) {
                            for (var d = Z(f) || [], p = new Array(d.length), h = 0; h < d.length; h++)
                                p[h] = ke(d[h], r, l.parent, a);
                            return p
                        }
                    }(r, p, o, a, c);
                var h = o.on;
                if (o.on = o.nativeOn,
                n(r.options.abstract)) {
                    var m = o.slot;
                    o = {},
                    m && (o.slot = m)
                }
                !function(e) {
                    for (var t = e.hook || (e.hook = {}), n = 0; n < ci.length; n++) {
                        var r = ci[n]
                          , i = t[r]
                          , o = si[r];
                        i === o || i && i._merged || (t[r] = i ? Ce(o, i) : o)
                    }
                }(o);
                var g = r.options.name || u;
                return new qr("vue-component-" + r.cid + (g ? "-" + g : ""),o,void 0,void 0,void 0,a,{
                    Ctor: r,
                    propsData: p,
                    listeners: h,
                    tag: u,
                    children: c
                },d)
            }
        }
    }
    function Ce(e, t) {
        var n = function(n, r) {
            e(n, r),
            t(n, r)
        };
        return n._merged = !0,
        n
    }
    function Ee(o, a, s, c, u, l) {
        return (Array.isArray(s) || r(s)) && (u = c,
        c = s,
        s = void 0),
        n(l) && (u = li),
        function(r, o, a, s, c) {
            if (t(a) && t(a.__ob__))
                return zr();
            if (t(a) && t(a.is) && (o = a.is),
            !o)
                return zr();
            var u, l, f;
            (Array.isArray(s) && "function" == typeof s[0] && ((a = a || {}).scopedSlots = {
                "default": s[0]
            },
            s.length = 0),
            c === li ? s = Z(s) : c === ui && (s = function(e) {
                for (var t = 0; t < e.length; t++)
                    if (Array.isArray(e[t]))
                        return Array.prototype.concat.apply([], e);
                return e
            }(s)),
            "string" == typeof o) ? (l = r.$vnode && r.$vnode.ns || gr.getTagNamespace(o),
            u = gr.isReservedTag(o) ? new qr(gr.parsePlatformTagName(o),a,s,void 0,void 0,r) : a && a.pre || !t(f = L(r.$options, "components", o)) ? new qr(o,a,s,void 0,void 0,r) : Ae(f, a, r, s, o)) : u = Ae(o, a, r, s);
            return Array.isArray(u) ? u : t(u) ? (t(l) && function d(r, i, o) {
                if (r.ns = i,
                "foreignObject" === r.tag && (i = void 0,
                o = !0),
                t(r.children))
                    for (var a = 0, s = r.children.length; a < s; a++) {
                        var c = r.children[a];
                        t(c.tag) && (e(c.ns) || n(o) && "svg" !== c.tag) && d(c, i, o)
                    }
            }(u, l),
            t(a) && function(e) {
                i(e.style) && K(e.style),
                i(e["class"]) && K(e["class"])
            }(a),
            u) : zr()
        }(o, a, s, c, u)
    }
    function $e(e, t) {
        return (e.__esModule || Rr && "Module" === e[Symbol.toStringTag]) && (e = e["default"]),
        i(e) ? t.extend(e) : e
    }
    function Te(e) {
        return e.isComment && e.asyncFactory
    }
    function Ie(e) {
        if (Array.isArray(e))
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                if (t(r) && (t(r.componentOptions) || Te(r)))
                    return r
            }
    }
    function Oe(e, t) {
        ai.$on(e, t)
    }
    function De(e, t) {
        ai.$off(e, t)
    }
    function je(e, t) {
        var n = ai;
        return function r() {
            null !== t.apply(null, arguments) && n.$off(e, r)
        }
    }
    function Pe(e, t, n) {
        ai = e,
        G(t, n || {}, Oe, De, je, e),
        ai = void 0
    }
    function Re(e) {
        var t = di;
        return di = e,
        function() {
            di = t
        }
    }
    function Ne(e) {
        for (; e && (e = e.$parent); )
            if (e._inactive)
                return !0;
        return !1
    }
    function Le(e, t) {
        if (t) {
            if (e._directInactive = !1,
            Ne(e))
                return
        } else if (e._directInactive)
            return;
        if (e._inactive || null === e._inactive) {
            e._inactive = !1;
            for (var n = 0; n < e.$children.length; n++)
                Le(e.$children[n]);
            Fe(e, "activated")
        }
    }
    function Fe(e, t) {
        k();
        var n = e.$options[t]
          , r = t + " hook";
        if (n)
            for (var i = 0, o = n.length; i < o; i++)
                B(n[i], e, null, e, r);
        e._hasHookEvent && e.$emit("hook:" + t),
        S()
    }
    function Me() {
        var e, t;
        for (bi = _i(),
        vi = !0,
        pi.sort(function(e, t) {
            return e.id - t.id
        }),
        yi = 0; yi < pi.length; yi++)
            (e = pi[yi]).before && e.before(),
            t = e.id,
            mi[t] = null,
            e.run();
        var n = hi.slice()
          , r = pi.slice();
        yi = pi.length = hi.length = 0,
        mi = {},
        gi = vi = !1,
        function(e) {
            for (var t = 0; t < e.length; t++)
                e[t]._inactive = !0,
                Le(e[t], !0)
        }(n),
        function(e) {
            for (var t = e.length; t--; ) {
                var n = e[t]
                  , r = n.vm;
                r._watcher === n && r._isMounted && !r._isDestroyed && Fe(r, "updated")
            }
        }(r),
        Pr && gr.devtools && Pr.emit("flush")
    }
    function qe(e, t, n) {
        Si.get = function() {
            return this[t][n]
        }
        ,
        Si.set = function(e) {
            this[t][n] = e
        }
        ,
        Object.defineProperty(e, n, Si)
    }
    function Ue(e) {
        e._watchers = [];
        var t = e.$options;
        t.props && function(e, t) {
            var n = e.$options.propsData || {}
              , r = e._props = {}
              , i = e.$options._propKeys = [];
            e.$parent && E(!1);
            var o = function(o) {
                i.push(o);
                var a = F(o, t, n, e);
                T(r, o, a),
                o in e || qe(e, "_props", o)
            };
            for (var a in t)
                o(a);
            E(!0)
        }(e, t.props),
        t.methods && function(e, t) {
            for (var n in e.$options.props,
            t)
                e[n] = "function" != typeof t[n] ? v : lr(t[n], e)
        }(e, t.methods),
        t.data ? function(e) {
            var t = e.$options.data;
            o(t = e._data = "function" == typeof t ? function(e, t) {
                k();
                try {
                    return e.call(t, t)
                } catch (e) {
                    return z(e, t, "data()"),
                    {}
                } finally {
                    S()
                }
            }(t, e) : t || {}) || (t = {});
            for (var n, r = Object.keys(t), i = e.$options.props, a = (e.$options.methods,
            r.length); a--; ) {
                var s = r[a];
                i && d(i, s) || (n = void 0,
                36 !== (n = (s + "").charCodeAt(0)) && 95 !== n && qe(e, "_data", s))
            }
            $(t, !0)
        }(e) : $(e._data = {}, !0),
        t.computed && function(e, t) {
            var n = e._computedWatchers = Object.create(null)
              , r = jr();
            for (var i in t) {
                var o = t[i]
                  , a = "function" == typeof o ? o : o.get;
                r || (n[i] = new ki(e,a || v,v,Ai)),
                i in e || ze(e, i, o)
            }
        }(e, t.computed),
        t.watch && t.watch !== Tr && function(e, t) {
            for (var n in t) {
                var r = t[n];
                if (Array.isArray(r))
                    for (var i = 0; i < r.length; i++)
                        We(e, n, r[i]);
                else
                    We(e, n, r)
            }
        }(e, t.watch)
    }
    function ze(e, t, n) {
        var r = !jr();
        "function" == typeof n ? (Si.get = r ? Be(t) : He(n),
        Si.set = v) : (Si.get = n.get ? r && !1 !== n.cache ? Be(t) : He(n.get) : v,
        Si.set = n.set || v),
        Object.defineProperty(e, t, Si)
    }
    function Be(e) {
        return function() {
            var t = this._computedWatchers && this._computedWatchers[e];
            if (t)
                return t.dirty && t.evaluate(),
                Fr.target && t.depend(),
                t.value
        }
    }
    function He(e) {
        return function() {
            return e.call(this, this)
        }
    }
    function We(e, t, n, r) {
        return o(n) && (r = n,
        n = n.handler),
        "string" == typeof n && (n = e[n]),
        e.$watch(t, n, r)
    }
    function Ve(e) {
        var t = e.options;
        if (e["super"]) {
            var n = Ve(e["super"]);
            if (n !== e.superOptions) {
                e.superOptions = n;
                var r = function(e) {
                    var t, n = e.options, r = e.sealedOptions;
                    for (var i in n)
                        n[i] !== r[i] && (t || (t = {}),
                        t[i] = n[i]);
                    return t
                }(e);
                r && m(e.extendOptions, r),
                (t = e.options = N(n, e.extendOptions)).name && (t.components[t.name] = e)
            }
        }
        return t
    }
    function Qe(e) {
        this._init(e)
    }
    function Ke(e) {
        e.cid = 0;
        var t = 1;
        e.extend = function(e) {
            e = e || {};
            var n = this
              , r = n.cid
              , i = e._Ctor || (e._Ctor = {});
            if (i[r])
                return i[r];
            var o = e.name || n.options.name
              , a = function(e) {
                this._init(e)
            };
            return (a.prototype = Object.create(n.prototype)).constructor = a,
            a.cid = t++,
            a.options = N(n.options, e),
            a["super"] = n,
            a.options.props && function(e) {
                var t = e.options.props;
                for (var n in t)
                    qe(e.prototype, "_props", n)
            }(a),
            a.options.computed && function(e) {
                var t = e.options.computed;
                for (var n in t)
                    ze(e.prototype, n, t[n])
            }(a),
            a.extend = n.extend,
            a.mixin = n.mixin,
            a.use = n.use,
            hr.forEach(function(e) {
                a[e] = n[e]
            }),
            o && (a.options.components[o] = a),
            a.superOptions = n.options,
            a.extendOptions = e,
            a.sealedOptions = m({}, a.options),
            i[r] = a,
            a
        }
    }
    function Ye(e) {
        return e && (e.Ctor.options.name || e.tag)
    }
    function Ge(e, t) {
        return Array.isArray(e) ? e.indexOf(t) > -1 : "string" == typeof e ? e.split(",").indexOf(t) > -1 : (n = e,
        "[object RegExp]" === tr.call(n) && e.test(t));
        var n
    }
    function Xe(e, t) {
        var n = e.cache
          , r = e.keys
          , i = e._vnode;
        for (var o in n) {
            var a = n[o];
            if (a) {
                var s = Ye(a.componentOptions);
                s && !t(s) && Je(n, o, r, i)
            }
        }
    }
    function Je(e, t, n, r) {
        var i = e[t];
        !i || r && i.tag === r.tag || i.componentInstance.$destroy(),
        e[t] = null,
        f(n, t)
    }
    function Ze(e) {
        for (var n = e.data, r = e, i = e; t(i.componentInstance); )
            (i = i.componentInstance._vnode) && i.data && (n = et(i.data, n));
        for (; t(r = r.parent); )
            r && r.data && (n = et(n, r.data));
        return function(e, n) {
            return t(e) || t(n) ? tt(e, nt(n)) : ""
        }(n.staticClass, n["class"])
    }
    function et(e, n) {
        return {
            staticClass: tt(e.staticClass, n.staticClass),
            "class": t(e["class"]) ? [e["class"], n["class"]] : n["class"]
        }
    }
    function tt(e, t) {
        return e ? t ? e + " " + t : e : t || ""
    }
    function nt(e) {
        return Array.isArray(e) ? function(e) {
            for (var n, r = "", i = 0, o = e.length; i < o; i++)
                t(n = nt(e[i])) && "" !== n && (r && (r += " "),
                r += n);
            return r
        }(e) : i(e) ? function(e) {
            var t = "";
            for (var n in e)
                e[n] && (t && (t += " "),
                t += n);
            return t
        }(e) : "string" == typeof e ? e : ""
    }
    function rt(e) {
        return Xi(e) ? "svg" : "math" === e ? "math" : void 0
    }
    function it(e) {
        return "string" == typeof e ? document.querySelector(e) || document.createElement("div") : e
    }
    function ot(e, n) {
        var r = e.data.ref;
        if (t(r)) {
            var i = e.context
              , o = e.componentInstance || e.elm
              , a = i.$refs;
            n ? Array.isArray(a[r]) ? f(a[r], o) : a[r] === o && (a[r] = void 0) : e.data.refInFor ? Array.isArray(a[r]) ? a[r].indexOf(o) < 0 && a[r].push(o) : a[r] = [o] : a[r] = o
        }
    }
    function at(r, i) {
        return r.key === i.key && (r.tag === i.tag && r.isComment === i.isComment && t(r.data) === t(i.data) && function(e, n) {
            if ("input" !== e.tag)
                return !0;
            var r, i = t(r = e.data) && t(r = r.attrs) && r.type, o = t(r = n.data) && t(r = r.attrs) && r.type;
            return i === o || eo(i) && eo(o)
        }(r, i) || n(r.isAsyncPlaceholder) && r.asyncFactory === i.asyncFactory && e(i.asyncFactory.error))
    }
    function st(e, n, r) {
        var i, o, a = {};
        for (i = n; i <= r; ++i)
            t(o = e[i].key) && (a[o] = i);
        return a
    }
    function ct(e, t) {
        (e.data.directives || t.data.directives) && function(e, t) {
            var n, r, i, o = e === ro, a = t === ro, s = ut(e.data.directives, e.context), c = ut(t.data.directives, t.context), u = [], l = [];
            for (n in c)
                r = s[n],
                i = c[n],
                r ? (i.oldValue = r.value,
                i.oldArg = r.arg,
                ft(i, "update", t, e),
                i.def && i.def.componentUpdated && l.push(i)) : (ft(i, "bind", t, e),
                i.def && i.def.inserted && u.push(i));
            if (u.length) {
                var f = function() {
                    for (var n = 0; n < u.length; n++)
                        ft(u[n], "inserted", t, e)
                };
                o ? X(t, "insert", f) : f()
            }
            if (l.length && X(t, "postpatch", function() {
                for (var n = 0; n < l.length; n++)
                    ft(l[n], "componentUpdated", t, e)
            }),
            !o)
                for (n in s)
                    c[n] || ft(s[n], "unbind", e, e, a)
        }(e, t)
    }
    function ut(e, t) {
        var n, r, i = Object.create(null);
        if (!e)
            return i;
        for (n = 0; n < e.length; n++)
            (r = e[n]).modifiers || (r.modifiers = ao),
            i[lt(r)] = r,
            r.def = L(t.$options, "directives", r.name);
        return i
    }
    function lt(e) {
        return e.rawName || e.name + "." + Object.keys(e.modifiers || {}).join(".")
    }
    function ft(e, t, n, r, i) {
        var o = e.def && e.def[t];
        if (o)
            try {
                o(n.elm, e, n, r, i)
            } catch (r) {
                z(r, n.context, "directive " + e.name + " " + t + " hook")
            }
    }
    function dt(n, r) {
        var i = r.componentOptions;
        if (!(t(i) && !1 === i.Ctor.options.inheritAttrs || e(n.data.attrs) && e(r.data.attrs))) {
            var o, a, s = r.elm, c = n.data.attrs || {}, u = r.data.attrs || {};
            for (o in t(u.__ob__) && (u = r.data.attrs = m({}, u)),
            u)
                a = u[o],
                c[o] !== a && pt(s, o, a);
            for (o in (Sr || Cr) && u.value !== c.value && pt(s, "value", u.value),
            c)
                e(u[o]) && (Vi(o) ? s.removeAttributeNS(Wi, Qi(o)) : Ui(o) || s.removeAttribute(o))
        }
    }
    function pt(e, t, n) {
        e.tagName.indexOf("-") > -1 ? ht(e, t, n) : Hi(t) ? Ki(n) ? e.removeAttribute(t) : (n = "allowfullscreen" === t && "EMBED" === e.tagName ? "true" : t,
        e.setAttribute(t, n)) : Ui(t) ? e.setAttribute(t, Bi(t, n)) : Vi(t) ? Ki(n) ? e.removeAttributeNS(Wi, Qi(t)) : e.setAttributeNS(Wi, t, n) : ht(e, t, n)
    }
    function ht(e, t, n) {
        if (Ki(n))
            e.removeAttribute(t);
        else {
            if (Sr && !Ar && "TEXTAREA" === e.tagName && "placeholder" === t && "" !== n && !e.__ieph) {
                var r = function(t) {
                    t.stopImmediatePropagation(),
                    e.removeEventListener("input", r)
                };
                e.addEventListener("input", r),
                e.__ieph = !0
            }
            e.setAttribute(t, n)
        }
    }
    function mt(n, r) {
        var i = r.elm
          , o = r.data
          , a = n.data;
        if (!(e(o.staticClass) && e(o["class"]) && (e(a) || e(a.staticClass) && e(a["class"])))) {
            var s = Ze(r)
              , c = i._transitionClasses;
            t(c) && (s = tt(s, nt(c))),
            s !== i._prevClass && (i.setAttribute("class", s),
            i._prevClass = s)
        }
    }
    function gt(e) {
        function t() {
            (a || (a = [])).push(e.slice(h, i).trim()),
            h = i + 1
        }
        var n, r, i, o, a, s = !1, c = !1, u = !1, l = !1, f = 0, d = 0, p = 0, h = 0;
        for (i = 0; i < e.length; i++)
            if (r = n,
            n = e.charCodeAt(i),
            s)
                39 === n && 92 !== r && (s = !1);
            else if (c)
                34 === n && 92 !== r && (c = !1);
            else if (u)
                96 === n && 92 !== r && (u = !1);
            else if (l)
                47 === n && 92 !== r && (l = !1);
            else if (124 !== n || 124 === e.charCodeAt(i + 1) || 124 === e.charCodeAt(i - 1) || f || d || p) {
                switch (n) {
                case 34:
                    c = !0;
                    break;
                case 39:
                    s = !0;
                    break;
                case 96:
                    u = !0;
                    break;
                case 40:
                    p++;
                    break;
                case 41:
                    p--;
                    break;
                case 91:
                    d++;
                    break;
                case 93:
                    d--;
                    break;
                case 123:
                    f++;
                    break;
                case 125:
                    f--
                }
                if (47 === n) {
                    for (var m = i - 1, g = void 0; m >= 0 && " " === (g = e.charAt(m)); m--)
                        ;
                    g && lo.test(g) || (l = !0)
                }
            } else
                void 0 === o ? (h = i + 1,
                o = e.slice(0, i).trim()) : t();
        if (void 0 === o ? o = e.slice(0, i).trim() : 0 !== h && t(),
        a)
            for (i = 0; i < a.length; i++)
                o = vt(o, a[i]);
        return o
    }
    function vt(e, t) {
        var n = t.indexOf("(");
        if (n < 0)
            return '_f("' + t + '")(' + e + ")";
        var r = t.slice(0, n)
          , i = t.slice(n + 1);
        return '_f("' + r + '")(' + e + (")" !== i ? "," + i : i)
    }
    function yt(e) {
        console.error("[Vue compiler]: " + e)
    }
    function bt(e, t) {
        return e ? e.map(function(e) {
            return e[t]
        }).filter(function(e) {
            return e
        }) : []
    }
    function _t(e, t, n, r, i) {
        (e.props || (e.props = [])).push(Tt({
            name: t,
            value: n,
            dynamic: i
        }, r)),
        e.plain = !1
    }
    function wt(e, t, n, r, i) {
        (i ? e.dynamicAttrs || (e.dynamicAttrs = []) : e.attrs || (e.attrs = [])).push(Tt({
            name: t,
            value: n,
            dynamic: i
        }, r)),
        e.plain = !1
    }
    function xt(e, t, n, r) {
        e.attrsMap[t] = n,
        e.attrsList.push(Tt({
            name: t,
            value: n
        }, r))
    }
    function kt(e, t, n, r, i, o, a, s) {
        (e.directives || (e.directives = [])).push(Tt({
            name: t,
            rawName: n,
            value: r,
            arg: i,
            isDynamicArg: o,
            modifiers: a
        }, s)),
        e.plain = !1
    }
    function St(e, t, n) {
        return n ? "_p(" + t + ',"' + e + '")' : e + t
    }
    function At(e, t, n, r, i, o, a, s) {
        var c;
        (r = r || er).right ? s ? t = "(" + t + ")==='click'?'contextmenu':(" + t + ")" : "click" === t && (t = "contextmenu",
        delete r.right) : r.middle && (s ? t = "(" + t + ")==='click'?'mouseup':(" + t + ")" : "click" === t && (t = "mouseup")),
        r.capture && (delete r.capture,
        t = St("!", t, s)),
        r.once && (delete r.once,
        t = St("~", t, s)),
        r.passive && (delete r.passive,
        t = St("&", t, s)),
        r.native ? (delete r.native,
        c = e.nativeEvents || (e.nativeEvents = {})) : c = e.events || (e.events = {});
        var u = Tt({
            value: n.trim(),
            dynamic: s
        }, a);
        r !== er && (u.modifiers = r);
        var l = c[t];
        Array.isArray(l) ? i ? l.unshift(u) : l.push(u) : c[t] = l ? i ? [u, l] : [l, u] : u,
        e.plain = !1
    }
    function Ct(e, t, n) {
        var r = Et(e, ":" + t) || Et(e, "v-bind:" + t);
        if (null != r)
            return gt(r);
        if (!1 !== n) {
            var i = Et(e, t);
            if (null != i)
                return JSON.stringify(i)
        }
    }
    function Et(e, t, n) {
        var r;
        if (null != (r = e.attrsMap[t]))
            for (var i = e.attrsList, o = 0, a = i.length; o < a; o++)
                if (i[o].name === t) {
                    i.splice(o, 1);
                    break
                }
        return n && delete e.attrsMap[t],
        r
    }
    function $t(e, t) {
        for (var n = e.attrsList, r = 0, i = n.length; r < i; r++) {
            var o = n[r];
            if (t.test(o.name))
                return n.splice(r, 1),
                o
        }
    }
    function Tt(e, t) {
        return t && (null != t.start && (e.start = t.start),
        null != t.end && (e.end = t.end)),
        e
    }
    function It(e, t, n) {
        var r = n || {}
          , i = r.number
          , o = "$$v";
        r.trim && (o = "(typeof $$v === 'string'? $$v.trim(): $$v)"),
        i && (o = "_n(" + o + ")");
        var a = Ot(t, o);
        e.model = {
            value: "(" + t + ")",
            expression: JSON.stringify(t),
            callback: "function ($$v) {" + a + "}"
        }
    }
    function Ot(e, t) {
        var n = function(e) {
            if (e = e.trim(),
            Ti = e.length,
            e.indexOf("[") < 0 || e.lastIndexOf("]") < Ti - 1)
                return (Di = e.lastIndexOf(".")) > -1 ? {
                    exp: e.slice(0, Di),
                    key: '"' + e.slice(Di + 1) + '"'
                } : {
                    exp: e,
                    key: null
                };
            for (Ii = e,
            Di = ji = Pi = 0; !jt(); )
                Pt(Oi = Dt()) ? Nt(Oi) : 91 === Oi && Rt(Oi);
            return {
                exp: e.slice(0, ji),
                key: e.slice(ji + 1, Pi)
            }
        }(e);
        return null === n.key ? e + "=" + t : "$set(" + n.exp + ", " + n.key + ", " + t + ")"
    }
    function Dt() {
        return Ii.charCodeAt(++Di)
    }
    function jt() {
        return Di >= Ti
    }
    function Pt(e) {
        return 34 === e || 39 === e
    }
    function Rt(e) {
        var t = 1;
        for (ji = Di; !jt(); )
            if (Pt(e = Dt()))
                Nt(e);
            else if (91 === e && t++,
            93 === e && t--,
            0 === t) {
                Pi = Di;
                break
            }
    }
    function Nt(e) {
        for (var t = e; !jt() && (e = Dt()) !== t; )
            ;
    }
    function Lt(e, t, n) {
        var r = Ri;
        return function i() {
            null !== t.apply(null, arguments) && Mt(e, i, n, r)
        }
    }
    function Ft(e, t, n, r) {
        if (ho) {
            var i = bi
              , o = t;
            t = o._wrapper = function(e) {
                if (e.target === e.currentTarget || e.timeStamp >= i || e.timeStamp <= 0 || e.target.ownerDocument !== document)
                    return o.apply(this, arguments)
            }
        }
        Ri.addEventListener(e, t, Ir ? {
            capture: n,
            passive: r
        } : n)
    }
    function Mt(e, t, n, r) {
        (r || Ri).removeEventListener(e, t._wrapper || t, n)
    }
    function qt(n, r) {
        if (!e(n.data.on) || !e(r.data.on)) {
            var i = r.data.on || {}
              , o = n.data.on || {};
            Ri = r.elm,
            function(e) {
                if (t(e[fo])) {
                    var n = Sr ? "change" : "input";
                    e[n] = [].concat(e[fo], e[n] || []),
                    delete e[fo]
                }
                t(e[po]) && (e.change = [].concat(e[po], e.change || []),
                delete e[po])
            }(i),
            G(i, o, Ft, Mt, Lt, r.context),
            Ri = void 0
        }
    }
    function Ut(n, r) {
        if (!e(n.data.domProps) || !e(r.data.domProps)) {
            var i, o, a = r.elm, s = n.data.domProps || {}, c = r.data.domProps || {};
            for (i in t(c.__ob__) && (c = r.data.domProps = m({}, c)),
            s)
                i in c || (a[i] = "");
            for (i in c) {
                if (o = c[i],
                "textContent" === i || "innerHTML" === i) {
                    if (r.children && (r.children.length = 0),
                    o === s[i])
                        continue;
                    1 === a.childNodes.length && a.removeChild(a.childNodes[0])
                }
                if ("value" === i && "PROGRESS" !== a.tagName) {
                    a._value = o;
                    var u = e(o) ? "" : String(o);
                    zt(a, u) && (a.value = u)
                } else if ("innerHTML" === i && Xi(a.tagName) && e(a.innerHTML)) {
                    (Ni = Ni || document.createElement("div")).innerHTML = "<svg>" + o + "</svg>";
                    for (var l = Ni.firstChild; a.firstChild; )
                        a.removeChild(a.firstChild);
                    for (; l.firstChild; )
                        a.appendChild(l.firstChild)
                } else if (o !== s[i])
                    try {
                        a[i] = o
                    } catch (n) {}
            }
        }
    }
    function zt(e, n) {
        return !e.composing && ("OPTION" === e.tagName || function(e, t) {
            var n = !0;
            try {
                n = document.activeElement !== e
            } catch (e) {}
            return n && e.value !== t
        }(e, n) || function(e, n) {
            var r = e.value
              , i = e._vModifiers;
            if (t(i)) {
                if (i.number)
                    return u(r) !== u(n);
                if (i.trim)
                    return r.trim() !== n.trim()
            }
            return r !== n
        }(e, n))
    }
    function Bt(e) {
        var t = Ht(e.style);
        return e.staticStyle ? m(e.staticStyle, t) : t
    }
    function Ht(e) {
        return Array.isArray(e) ? g(e) : "string" == typeof e ? vo(e) : e
    }
    function Wt(n, r) {
        var i = r.data
          , o = n.data;
        if (!(e(i.staticStyle) && e(i.style) && e(o.staticStyle) && e(o.style))) {
            var a, s, c = r.elm, u = o.staticStyle, l = o.normalizedStyle || o.style || {}, f = u || l, d = Ht(r.data.style) || {};
            r.data.normalizedStyle = t(d.__ob__) ? m({}, d) : d;
            var p = function(e) {
                var t, n = {};
                if (!0)
                    for (var r = e; r.componentInstance; )
                        (r = r.componentInstance._vnode) && r.data && (t = Bt(r.data)) && m(n, t);
                (t = Bt(e.data)) && m(n, t);
                for (var i = e; i = i.parent; )
                    i.data && (t = Bt(i.data)) && m(n, t);
                return n
            }(r);
            for (s in f)
                e(p[s]) && _o(c, s, "");
            for (s in p)
                (a = p[s]) !== f[s] && _o(c, s, null == a ? "" : a)
        }
    }
    function Vt(e, t) {
        if (t && (t = t.trim()))
            if (e.classList)
                t.indexOf(" ") > -1 ? t.split(So).forEach(function(t) {
                    return e.classList.add(t)
                }) : e.classList.add(t);
            else {
                var n = " " + (e.getAttribute("class") || "") + " ";
                n.indexOf(" " + t + " ") < 0 && e.setAttribute("class", (n + t).trim())
            }
    }
    function Qt(e, t) {
        if (t && (t = t.trim()))
            if (e.classList)
                t.indexOf(" ") > -1 ? t.split(So).forEach(function(t) {
                    return e.classList.remove(t)
                }) : e.classList.remove(t),
                e.classList.length || e.removeAttribute("class");
            else {
                for (var n = " " + (e.getAttribute("class") || "") + " ", r = " " + t + " "; n.indexOf(r) >= 0; )
                    n = n.replace(r, " ");
                (n = n.trim()) ? e.setAttribute("class", n) : e.removeAttribute("class")
            }
    }
    function Kt(e) {
        if (e) {
            if ("object" == typeof e) {
                var t = {};
                return !1 !== e.css && m(t, Ao(e.name || "v")),
                m(t, e),
                t
            }
            return "string" == typeof e ? Ao(e) : void 0
        }
    }
    function Yt(e) {
        jo(function() {
            jo(e)
        })
    }
    function Gt(e, t) {
        var n = e._transitionClasses || (e._transitionClasses = []);
        n.indexOf(t) < 0 && (n.push(t),
        Vt(e, t))
    }
    function Xt(e, t) {
        e._transitionClasses && f(e._transitionClasses, t),
        Qt(e, t)
    }
    function Jt(e, t, n) {
        var r = Zt(e, t)
          , i = r.type
          , o = r.timeout
          , a = r.propCount;
        if (!i)
            return n();
        var s = i === Eo ? Io : Do
          , c = 0
          , u = function() {
            e.removeEventListener(s, l),
            n()
        }
          , l = function(t) {
            t.target === e && ++c >= a && u()
        };
        setTimeout(function() {
            c < a && u()
        }, o + 1),
        e.addEventListener(s, l)
    }
    function Zt(e, t) {
        var n, r = window.getComputedStyle(e), i = (r[To + "Delay"] || "").split(", "), o = (r[To + "Duration"] || "").split(", "), a = en(i, o), s = (r[Oo + "Delay"] || "").split(", "), c = (r[Oo + "Duration"] || "").split(", "), u = en(s, c), l = 0, f = 0;
        return t === Eo ? a > 0 && (n = Eo,
        l = a,
        f = o.length) : t === $o ? u > 0 && (n = $o,
        l = u,
        f = c.length) : f = (n = (l = Math.max(a, u)) > 0 ? a > u ? Eo : $o : null) ? n === Eo ? o.length : c.length : 0,
        {
            type: n,
            timeout: l,
            propCount: f,
            hasTransform: n === Eo && Po.test(r[To + "Property"])
        }
    }
    function en(e, t) {
        for (; e.length < t.length; )
            e = e.concat(e);
        return Math.max.apply(null, t.map(function(t, n) {
            return tn(t) + tn(e[n])
        }))
    }
    function tn(e) {
        return 1e3 * Number(e.slice(0, -1).replace(",", "."))
    }
    function nn(n, r) {
        var o = n.elm;
        t(o._leaveCb) && (o._leaveCb.cancelled = !0,
        o._leaveCb());
        var a = Kt(n.data.transition);
        if (!e(a) && !t(o._enterCb) && 1 === o.nodeType) {
            for (var s = a.css, c = a.type, l = a.enterClass, f = a.enterToClass, d = a.enterActiveClass, p = a.appearClass, h = a.appearToClass, m = a.appearActiveClass, g = a.beforeEnter, v = a.enter, y = a.afterEnter, b = a.enterCancelled, w = a.beforeAppear, x = a.appear, k = a.afterAppear, S = a.appearCancelled, A = a.duration, C = di, E = di.$vnode; E && E.parent; )
                C = E.context,
                E = E.parent;
            var $ = !C._isMounted || !n.isRootInsert;
            if (!$ || x || "" === x) {
                var T = $ && p ? p : l
                  , I = $ && m ? m : d
                  , O = $ && h ? h : f
                  , D = $ && w || g
                  , j = $ && "function" == typeof x ? x : v
                  , P = $ && k || y
                  , R = $ && S || b
                  , N = u(i(A) ? A.enter : A)
                  , L = !1 !== s && !Ar
                  , F = an(j)
                  , M = o._enterCb = _(function() {
                    L && (Xt(o, O),
                    Xt(o, I)),
                    M.cancelled ? (L && Xt(o, T),
                    R && R(o)) : P && P(o),
                    o._enterCb = null
                });
                n.data.show || X(n, "insert", function() {
                    var e = o.parentNode
                      , t = e && e._pending && e._pending[n.key];
                    t && t.tag === n.tag && t.elm._leaveCb && t.elm._leaveCb(),
                    j && j(o, M)
                }),
                D && D(o),
                L && (Gt(o, T),
                Gt(o, I),
                Yt(function() {
                    Xt(o, T),
                    M.cancelled || (Gt(o, O),
                    F || (on(N) ? setTimeout(M, N) : Jt(o, c, M)))
                })),
                n.data.show && (r && r(),
                j && j(o, M)),
                L || F || M()
            }
        }
    }
    function rn(n, r) {
        function o() {
            S.cancelled || (!n.data.show && a.parentNode && ((a.parentNode._pending || (a.parentNode._pending = {}))[n.key] = n),
            h && h(a),
            w && (Gt(a, f),
            Gt(a, p),
            Yt(function() {
                Xt(a, f),
                S.cancelled || (Gt(a, d),
                x || (on(k) ? setTimeout(S, k) : Jt(a, l, S)))
            })),
            m && m(a, S),
            w || x || S())
        }
        var a = n.elm;
        t(a._enterCb) && (a._enterCb.cancelled = !0,
        a._enterCb());
        var s = Kt(n.data.transition);
        if (e(s) || 1 !== a.nodeType)
            return r();
        if (!t(a._leaveCb)) {
            var c = s.css
              , l = s.type
              , f = s.leaveClass
              , d = s.leaveToClass
              , p = s.leaveActiveClass
              , h = s.beforeLeave
              , m = s.leave
              , g = s.afterLeave
              , v = s.leaveCancelled
              , y = s.delayLeave
              , b = s.duration
              , w = !1 !== c && !Ar
              , x = an(m)
              , k = u(i(b) ? b.leave : b)
              , S = a._leaveCb = _(function() {
                a.parentNode && a.parentNode._pending && (a.parentNode._pending[n.key] = null),
                w && (Xt(a, d),
                Xt(a, p)),
                S.cancelled ? (w && Xt(a, f),
                v && v(a)) : (r(),
                g && g(a)),
                a._leaveCb = null
            });
            y ? y(o) : o()
        }
    }
    function on(e) {
        return "number" == typeof e && !isNaN(e)
    }
    function an(n) {
        if (e(n))
            return !1;
        var r = n.fns;
        return t(r) ? an(Array.isArray(r) ? r[0] : r) : (n._length || n.length) > 1
    }
    function sn(e, t) {
        !0 !== t.data.show && nn(t)
    }
    function cn(e, t, n) {
        un(e, t, n),
        (Sr || Cr) && setTimeout(function() {
            un(e, t, n)
        }, 0)
    }
    function un(e, t) {
        var n = t.value
          , r = e.multiple;
        if (!r || Array.isArray(n)) {
            for (var i, o, a = 0, s = e.options.length; a < s; a++)
                if (o = e.options[a],
                r)
                    i = b(n, fn(o)) > -1,
                    o.selected !== i && (o.selected = i);
                else if (y(fn(o), n))
                    return void (e.selectedIndex !== a && (e.selectedIndex = a));
            r || (e.selectedIndex = -1)
        }
    }
    function ln(e, t) {
        return t.every(function(t) {
            return !y(t, e)
        })
    }
    function fn(e) {
        return "_value"in e ? e._value : e.value
    }
    function dn(e) {
        e.target.composing = !0
    }
    function pn(e) {
        e.target.composing && (e.target.composing = !1,
        hn(e.target, "input"))
    }
    function hn(e, t) {
        var n = document.createEvent("HTMLEvents");
        n.initEvent(t, !0, !0),
        e.dispatchEvent(n)
    }
    function mn(e) {
        return !e.componentInstance || e.data && e.data.transition ? e : mn(e.componentInstance._vnode)
    }
    function gn(e) {
        var t = e && e.componentOptions;
        return t && t.Ctor.options.abstract ? gn(Ie(t.children)) : e
    }
    function vn(e) {
        var t = {}
          , n = e.$options;
        for (var r in n.propsData)
            t[r] = e[r];
        var i = n._parentListeners;
        for (var o in i)
            t[ar(o)] = i[o];
        return t
    }
    function yn(e, t) {
        if (/\d-keep-alive$/.test(t.tag))
            return e("keep-alive", {
                props: t.componentOptions.propsData
            })
    }
    function bn(e) {
        e.elm._moveCb && e.elm._moveCb(),
        e.elm._enterCb && e.elm._enterCb()
    }
    function _n(e) {
        e.data.newPos = e.elm.getBoundingClientRect()
    }
    function wn(e) {
        var t = e.data.pos
          , n = e.data.newPos
          , r = t.left - n.left
          , i = t.top - n.top;
        if (r || i) {
            e.data.moved = !0;
            var o = e.elm.style;
            o.transform = o.WebkitTransform = "translate(" + r + "px," + i + "px)",
            o.transitionDuration = "0s"
        }
    }
    function xn(e, t) {
        var n = t ? Sa : ka;
        return e.replace(n, function(e) {
            return xa[e]
        })
    }
    function kn(e, t, n) {
        return {
            type: 1,
            tag: e,
            attrsList: t,
            attrsMap: In(t),
            rawAttrsMap: {},
            parent: n,
            children: []
        }
    }
    function Sn(e, t) {
        function n(e) {
            if (r(e),
            u || e.processed || (e = An(e, t)),
            a.length || e === i || i["if"] && (e.elseif || e["else"]) && En(i, {
                exp: e.elseif,
                block: e
            }),
            o && !e.forbidden)
                if (e.elseif || e["else"])
                    s = e,
                    (c = function(e) {
                        for (var t = e.length; t--; ) {
                            if (1 === e[t].type)
                                return e[t];
                            e.pop()
                        }
                    }(o.children)) && c["if"] && En(c, {
                        exp: s.elseif,
                        block: s
                    });
                else {
                    if (e.slotScope) {
                        var n = e.slotTarget || '"default"';
                        (o.scopedSlots || (o.scopedSlots = {}))[n] = e
                    }
                    o.children.push(e),
                    e.parent = o
                }
            var s, c;
            e.children = e.children.filter(function(e) {
                return !e.slotScope
            }),
            r(e),
            e.pre && (u = !1),
            Go(e.tag) && (l = !1);
            for (var f = 0; f < Yo.length; f++)
                Yo[f](e, t)
        }
        function r(e) {
            if (!l)
                for (var t; (t = e.children[e.children.length - 1]) && 3 === t.type && " " === t.text; )
                    e.children.pop()
        }
        Wo = t.warn || yt,
        Go = t.isPreTag || fr,
        Xo = t.mustUseProp || fr,
        Jo = t.getTagNamespace || fr,
        t.isReservedTag,
        Qo = bt(t.modules, "transformNode"),
        Ko = bt(t.modules, "preTransformNode"),
        Yo = bt(t.modules, "postTransformNode"),
        Vo = t.delimiters;
        var i, o, a = [], s = !1 !== t.preserveWhitespace, c = t.whitespace, u = !1, l = !1;
        return function(e, t) {
            function n(t) {
                d += t,
                e = e.substring(t)
            }
            function r() {
                var t = e.match(ha);
                if (t) {
                    var r, i, o = {
                        tagName: t[1],
                        attrs: [],
                        start: d
                    };
                    for (n(t[0].length); !(r = e.match(ma)) && (i = e.match(fa) || e.match(la)); )
                        i.start = d,
                        n(i[0].length),
                        i.end = d,
                        o.attrs.push(i);
                    if (r)
                        return o.unarySlash = r[1],
                        n(r[0].length),
                        o.end = d,
                        o
                }
            }
            function i(e) {
                var n = e.tagName
                  , r = e.unarySlash;
                u && ("p" === s && ua(n) && o(s),
                f(n) && s === n && o(n));
                for (var i = l(n) || !!r, a = e.attrs.length, d = new Array(a), p = 0; p < a; p++) {
                    var h = e.attrs[p]
                      , m = h[3] || h[4] || h[5] || ""
                      , g = "a" === n && "href" === h[1] ? t.shouldDecodeNewlinesForHref : t.shouldDecodeNewlines;
                    d[p] = {
                        name: h[1],
                        value: xn(m, g)
                    }
                }
                i || (c.push({
                    tag: n,
                    lowerCasedTag: n.toLowerCase(),
                    attrs: d,
                    start: e.start,
                    end: e.end
                }),
                s = n),
                t.start && t.start(n, d, i, e.start, e.end)
            }
            function o(e, n, r) {
                var i, o;
                if (null == n && (n = d),
                null == r && (r = d),
                e)
                    for (o = e.toLowerCase(),
                    i = c.length - 1; i >= 0 && c[i].lowerCasedTag !== o; i--)
                        ;
                else
                    i = 0;
                if (i >= 0) {
                    for (var a = c.length - 1; a >= i; a--)
                        t.end && t.end(c[a].tag, n, r);
                    c.length = i,
                    s = i && c[i - 1].tag
                } else
                    "br" === o ? t.start && t.start(e, [], !0, n, r) : "p" === o && (t.start && t.start(e, [], !1, n, r),
                    t.end && t.end(e, n, r))
            }
            for (var a, s, c = [], u = t.expectHTML, l = t.isUnaryTag || fr, f = t.canBeLeftOpenTag || fr, d = 0; e; ) {
                if (a = e,
                s && _a(s)) {
                    var p = 0
                      , h = s.toLowerCase()
                      , m = wa[h] || (wa[h] = new RegExp("([\\s\\S]*?)(</" + h + "[^>]*>)","i"))
                      , g = e.replace(m, function(e, n, r) {
                        return p = r.length,
                        _a(h) || "noscript" === h || (n = n.replace(/<!\--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")),
                        Ca(h, n) && (n = n.slice(1)),
                        t.chars && t.chars(n),
                        ""
                    });
                    d += e.length - g.length,
                    e = g,
                    o(h, d - p, d)
                } else {
                    var v = e.indexOf("<");
                    if (0 === v) {
                        if (ya.test(e)) {
                            var y = e.indexOf("-->");
                            if (y >= 0) {
                                t.shouldKeepComment && t.comment(e.substring(4, y), d, d + y + 3),
                                n(y + 3);
                                continue
                            }
                        }
                        if (ba.test(e)) {
                            var b = e.indexOf("]>");
                            if (b >= 0) {
                                n(b + 2);
                                continue
                            }
                        }
                        var _ = e.match(va);
                        if (_) {
                            n(_[0].length);
                            continue
                        }
                        var w = e.match(ga);
                        if (w) {
                            var x = d;
                            n(w[0].length),
                            o(w[1], x, d);
                            continue
                        }
                        var k = r();
                        if (k) {
                            i(k),
                            Ca(k.tagName, e) && n(1);
                            continue
                        }
                    }
                    var S = void 0
                      , A = void 0
                      , C = void 0;
                    if (v >= 0) {
                        for (A = e.slice(v); !(ga.test(A) || ha.test(A) || ya.test(A) || ba.test(A) || (C = A.indexOf("<", 1)) < 0); )
                            v += C,
                            A = e.slice(v);
                        S = e.substring(0, v)
                    }
                    v < 0 && (S = e),
                    S && n(S.length),
                    t.chars && S && t.chars(S, d - S.length, d)
                }
                if (e === a) {
                    t.chars && t.chars(e);
                    break
                }
            }
            o()
        }(e, {
            warn: Wo,
            expectHTML: t.expectHTML,
            isUnaryTag: t.isUnaryTag,
            canBeLeftOpenTag: t.canBeLeftOpenTag,
            shouldDecodeNewlines: t.shouldDecodeNewlines,
            shouldDecodeNewlinesForHref: t.shouldDecodeNewlinesForHref,
            shouldKeepComment: t.comments,
            outputSourceRange: t.outputSourceRange,
            start: function(e, r, s) {
                var c = o && o.ns || Jo(e);
                Sr && "svg" === c && (r = function(e) {
                    for (var t = [], n = 0; n < e.length; n++) {
                        var r = e[n];
                        Ua.test(r.name) || (r.name = r.name.replace(za, ""),
                        t.push(r))
                    }
                    return t
                }(r));
                var f, d = kn(e, r, o);
                c && (d.ns = c),
                "style" !== (f = d).tag && ("script" !== f.tag || f.attrsMap.type && "text/javascript" !== f.attrsMap.type) || jr() || (d.forbidden = !0);
                for (var p = 0; p < Ko.length; p++)
                    d = Ko[p](d, t) || d;
                u || (function(e) {
                    null != Et(e, "v-pre") && (e.pre = !0)
                }(d),
                d.pre && (u = !0)),
                Go(d.tag) && (l = !0),
                u ? function(e) {
                    var t = e.attrsList
                      , n = t.length;
                    if (n)
                        for (var r = e.attrs = new Array(n), i = 0; i < n; i++)
                            r[i] = {
                                name: t[i].name,
                                value: JSON.stringify(t[i].value)
                            },
                            null != t[i].start && (r[i].start = t[i].start,
                            r[i].end = t[i].end);
                    else
                        e.pre || (e.plain = !0)
                }(d) : d.processed || (Cn(d),
                function(e) {
                    var t = Et(e, "v-if");
                    if (t)
                        e["if"] = t,
                        En(e, {
                            exp: t,
                            block: e
                        });
                    else {
                        null != Et(e, "v-else") && (e["else"] = !0);
                        var n = Et(e, "v-else-if");
                        n && (e.elseif = n)
                    }
                }(d),
                function(e) {
                    null != Et(e, "v-once") && (e.once = !0)
                }(d)),
                i || (i = d),
                s ? n(d) : (o = d,
                a.push(d))
            },
            end: function() {
                var e = a[a.length - 1];
                a.length -= 1,
                o = a[a.length - 1],
                n(e)
            },
            chars: function(e) {
                if (o && (!Sr || "textarea" !== o.tag || o.attrsMap.placeholder !== e)) {
                    var t, n, r, i = o.children;
                    (e = l || e.trim() ? "script" === (t = o).tag || "style" === t.tag ? e : Ma(e) : i.length ? c ? "condense" === c && La.test(e) ? "" : " " : s ? " " : "" : "") && (l || "condense" !== c || (e = e.replace(Fa, " ")),
                    !u && " " !== e && (n = function(e) {
                        var t = Vo ? ra(Vo) : ta;
                        if (t.test(e)) {
                            for (var n, r, i, o = [], a = [], s = t.lastIndex = 0; n = t.exec(e); ) {
                                (r = n.index) > s && (a.push(i = e.slice(s, r)),
                                o.push(JSON.stringify(i)));
                                var c = gt(n[1].trim());
                                o.push("_s(" + c + ")"),
                                a.push({
                                    "@binding": c
                                }),
                                s = r + n[0].length
                            }
                            return s < e.length && (a.push(i = e.slice(s)),
                            o.push(JSON.stringify(i))),
                            {
                                expression: o.join("+"),
                                tokens: a
                            }
                        }
                    }(e)) ? r = {
                        type: 2,
                        expression: n.expression,
                        tokens: n.tokens,
                        text: e
                    } : " " === e && i.length && " " === i[i.length - 1].text || (r = {
                        type: 3,
                        text: e
                    }),
                    r && i.push(r))
                }
            },
            comment: function(e) {
                if (o) {
                    var t = {
                        type: 3,
                        text: e,
                        isComment: !0
                    };
                    o.children.push(t)
                }
            }
        }),
        i
    }
    function An(e, t) {
        var n, r;
        (r = Ct(n = e, "key")) && (n.key = r),
        e.plain = !e.key && !e.scopedSlots && !e.attrsList.length,
        function(e) {
            var t = Ct(e, "ref");
            t && (e.ref = t,
            e.refInFor = function(e) {
                for (var t = e; t; ) {
                    if (void 0 !== t["for"])
                        return !0;
                    t = t.parent
                }
                return !1
            }(e))
        }(e),
        function(e) {
            var t;
            "template" === e.tag ? (t = Et(e, "scope"),
            e.slotScope = t || Et(e, "slot-scope")) : (t = Et(e, "slot-scope")) && (e.slotScope = t);
            var n = Ct(e, "slot");
            if (n && (e.slotTarget = '""' === n ? '"default"' : n,
            e.slotTargetDynamic = !(!e.attrsMap[":slot"] && !e.attrsMap["v-bind:slot"]),
            "template" === e.tag || e.slotScope || wt(e, "slot", n, function(e, t) {
                return e.rawAttrsMap[":" + t] || e.rawAttrsMap["v-bind:" + t] || e.rawAttrsMap[t]
            }(e, "slot"))),
            "template" === e.tag) {
                var r = $t(e, Na);
                if (r) {
                    var i = $n(r)
                      , o = i.name
                      , a = i.dynamic;
                    e.slotTarget = o,
                    e.slotTargetDynamic = a,
                    e.slotScope = r.value || qa
                }
            } else {
                var s = $t(e, Na);
                if (s) {
                    var c = e.scopedSlots || (e.scopedSlots = {})
                      , u = $n(s)
                      , l = u.name
                      , f = u.dynamic
                      , d = c[l] = kn("template", [], e);
                    d.slotTarget = l,
                    d.slotTargetDynamic = f,
                    d.children = e.children.filter(function(e) {
                        if (!e.slotScope)
                            return e.parent = d,
                            !0
                    }),
                    d.slotScope = s.value || qa,
                    e.children = [],
                    e.plain = !1
                }
            }
        }(e),
        function(e) {
            "slot" === e.tag && (e.slotName = Ct(e, "name"))
        }(e),
        function(e) {
            var t;
            (t = Ct(e, "is")) && (e.component = t),
            null != Et(e, "inline-template") && (e.inlineTemplate = !0)
        }(e);
        for (var i = 0; i < Qo.length; i++)
            e = Qo[i](e, t) || e;
        return function(e) {
            var t, n, r, i, o, a, s, c, u = e.attrsList;
            for (t = 0,
            n = u.length; t < n; t++)
                if (r = i = u[t].name,
                o = u[t].value,
                $a.test(r))
                    if (e.hasBindings = !0,
                    (a = Tn(r.replace($a, ""))) && (r = r.replace(Ra, "")),
                    Pa.test(r))
                        r = r.replace(Pa, ""),
                        o = gt(o),
                        (c = Da.test(r)) && (r = r.slice(1, -1)),
                        a && (a.prop && !c && "innerHtml" === (r = ar(r)) && (r = "innerHTML"),
                        a.camel && !c && (r = ar(r)),
                        a.sync && (s = Ot(o, "$event"),
                        c ? At(e, '"update:"+(' + r + ")", s, null, !1, 0, u[t], !0) : (At(e, "update:" + ar(r), s, null, !1, 0, u[t]),
                        ur(r) !== ar(r) && At(e, "update:" + ur(r), s, null, !1, 0, u[t])))),
                        a && a.prop || !e.component && Xo(e.tag, e.attrsMap.type, r) ? _t(e, r, o, u[t], c) : wt(e, r, o, u[t], c);
                    else if (Ea.test(r))
                        r = r.replace(Ea, ""),
                        (c = Da.test(r)) && (r = r.slice(1, -1)),
                        At(e, r, o, a, !1, 0, u[t], c);
                    else {
                        var l = (r = r.replace($a, "")).match(ja)
                          , f = l && l[1];
                        c = !1,
                        f && (r = r.slice(0, -(f.length + 1)),
                        Da.test(f) && (f = f.slice(1, -1),
                        c = !0)),
                        kt(e, r, i, o, f, c, a, u[t])
                    }
                else
                    wt(e, r, JSON.stringify(o), u[t]),
                    !e.component && "muted" === r && Xo(e.tag, e.attrsMap.type, r) && _t(e, r, "true", u[t])
        }(e),
        e
    }
    function Cn(e) {
        var t;
        if (t = Et(e, "v-for")) {
            var n = function(e) {
                var t = e.match(Ta);
                if (t) {
                    var n = {};
                    n["for"] = t[2].trim();
                    var r = t[1].trim().replace(Oa, "")
                      , i = r.match(Ia);
                    return i ? (n.alias = r.replace(Ia, "").trim(),
                    n.iterator1 = i[1].trim(),
                    i[2] && (n.iterator2 = i[2].trim())) : n.alias = r,
                    n
                }
            }(t);
            n && m(e, n)
        }
    }
    function En(e, t) {
        e.ifConditions || (e.ifConditions = []),
        e.ifConditions.push(t)
    }
    function $n(e) {
        var t = e.name.replace(Na, "");
        return t || "#" !== e.name[0] && (t = "default"),
        Da.test(t) ? {
            name: t.slice(1, -1),
            dynamic: !0
        } : {
            name: '"' + t + '"',
            dynamic: !1
        }
    }
    function Tn(e) {
        var t = e.match(Ra);
        if (t) {
            var n = {};
            return t.forEach(function(e) {
                n[e.slice(1)] = !0
            }),
            n
        }
    }
    function In(e) {
        for (var t = {}, n = 0, r = e.length; n < r; n++)
            t[e[n].name] = e[n].value;
        return t
    }
    function On(e) {
        return kn(e.tag, e.attrsList.slice(), e.parent)
    }
    function Dn(e, t) {
        e && (Zo = Wa(t.staticKeys || ""),
        ea = t.isReservedTag || fr,
        function n(e) {
            if (e["static"] = function(e) {
                return 2 !== e.type && (3 === e.type || !(!e.pre && (e.hasBindings || e["if"] || e["for"] || nr(e.tag) || !ea(e.tag) || function(e) {
                    for (; e.parent; ) {
                        if ("template" !== (e = e.parent).tag)
                            return !1;
                        if (e["for"])
                            return !0
                    }
                    return !1
                }(e) || !Object.keys(e).every(Zo))))
            }(e),
            1 === e.type) {
                if (!ea(e.tag) && "slot" !== e.tag && null == e.attrsMap["inline-template"])
                    return;
                for (var t = 0, r = e.children.length; t < r; t++) {
                    var i = e.children[t];
                    n(i),
                    i["static"] || (e["static"] = !1)
                }
                if (e.ifConditions)
                    for (var o = 1, a = e.ifConditions.length; o < a; o++) {
                        var s = e.ifConditions[o].block;
                        n(s),
                        s["static"] || (e["static"] = !1)
                    }
            }
        }(e),
        function r(e, t) {
            if (1 === e.type) {
                if ((e["static"] || e.once) && (e.staticInFor = t),
                e["static"] && e.children.length && (1 !== e.children.length || 3 !== e.children[0].type))
                    return void (e.staticRoot = !0);
                if (e.staticRoot = !1,
                e.children)
                    for (var n = 0, i = e.children.length; n < i; n++)
                        r(e.children[n], t || !!e["for"]);
                if (e.ifConditions)
                    for (var o = 1, a = e.ifConditions.length; o < a; o++)
                        r(e.ifConditions[o].block, t)
            }
        }(e, !1))
    }
    function jn(e, t) {
        var n = t ? "nativeOn:" : "on:"
          , r = ""
          , i = "";
        for (var o in e) {
            var a = Pn(e[o]);
            e[o] && e[o].dynamic ? i += o + "," + a + "," : r += '"' + o + '":' + a + ","
        }
        return r = "{" + r.slice(0, -1) + "}",
        i ? n + "_d(" + r + ",[" + i.slice(0, -1) + "])" : n + r
    }
    function Pn(e) {
        if (!e)
            return "function(){}";
        if (Array.isArray(e))
            return "[" + e.map(function(e) {
                return Pn(e)
            }).join(",") + "]";
        var t = Ka.test(e.value)
          , n = Va.test(e.value)
          , r = Ka.test(e.value.replace(Qa, ""));
        if (e.modifiers) {
            var i = ""
              , o = ""
              , a = [];
            for (var s in e.modifiers)
                if (Ja[s])
                    o += Ja[s],
                    Ya[s] && a.push(s);
                else if ("exact" === s) {
                    var c = e.modifiers;
                    o += Xa(["ctrl", "shift", "alt", "meta"].filter(function(e) {
                        return !c[e]
                    }).map(function(e) {
                        return "$event." + e + "Key"
                    }).join("||"))
                } else
                    a.push(s);
            return a.length && (i += "if(!$event.type.indexOf('key')&&" + a.map(Rn).join("&&") + ")return null;"),
            o && (i += o),
            "function($event){" + i + (t ? "return " + e.value + "($event)" : n ? "return (" + e.value + ")($event)" : r ? "return " + e.value : e.value) + "}"
        }
        return t || n ? e.value : "function($event){" + (r ? "return " + e.value : e.value) + "}"
    }
    function Rn(e) {
        var t = parseInt(e, 10);
        if (t)
            return "$event.keyCode!==" + t;
        var n = Ya[e]
          , r = Ga[e];
        return "_k($event.keyCode," + JSON.stringify(e) + "," + JSON.stringify(n) + ",$event.key," + JSON.stringify(r) + ")"
    }
    function Nn(e, t) {
        var n = new es(t);
        return {
            render: "with(this){return " + (e ? Ln(e, n) : '_c("div")') + "}",
            staticRenderFns: n.staticRenderFns
        }
    }
    function Ln(e, t) {
        if (e.parent && (e.pre = e.pre || e.parent.pre),
        e.staticRoot && !e.staticProcessed)
            return Fn(e, t);
        if (e.once && !e.onceProcessed)
            return Mn(e, t);
        if (e["for"] && !e.forProcessed)
            return Un(e, t);
        if (e["if"] && !e.ifProcessed)
            return qn(e, t);
        if ("template" !== e.tag || e.slotTarget || t.pre) {
            if ("slot" === e.tag)
                return function(e, t) {
                    var n = e.slotName || '"default"'
                      , r = Wn(e, t)
                      , i = "_t(" + n + (r ? "," + r : "")
                      , o = e.attrs || e.dynamicAttrs ? Kn((e.attrs || []).concat(e.dynamicAttrs || []).map(function(e) {
                        return {
                            name: ar(e.name),
                            value: e.value,
                            dynamic: e.dynamic
                        }
                    })) : null
                      , a = e.attrsMap["v-bind"];
                    return !o && !a || r || (i += ",null"),
                    o && (i += "," + o),
                    a && (i += (o ? "" : ",null") + "," + a),
                    i + ")"
                }(e, t);
            var n;
            if (e.component)
                n = function(e, t, n) {
                    var r = t.inlineTemplate ? null : Wn(t, n, !0);
                    return "_c(" + e + "," + zn(t, n) + (r ? "," + r : "") + ")"
                }(e.component, e, t);
            else {
                var r;
                (!e.plain || e.pre && t.maybeComponent(e)) && (r = zn(e, t));
                var i = e.inlineTemplate ? null : Wn(e, t, !0);
                n = "_c('" + e.tag + "'" + (r ? "," + r : "") + (i ? "," + i : "") + ")"
            }
            for (var o = 0; o < t.transforms.length; o++)
                n = t.transforms[o](e, n);
            return n
        }
        return Wn(e, t) || "void 0"
    }
    function Fn(e, t) {
        e.staticProcessed = !0;
        var n = t.pre;
        return e.pre && (t.pre = e.pre),
        t.staticRenderFns.push("with(this){return " + Ln(e, t) + "}"),
        t.pre = n,
        "_m(" + (t.staticRenderFns.length - 1) + (e.staticInFor ? ",true" : "") + ")"
    }
    function Mn(e, t) {
        if (e.onceProcessed = !0,
        e["if"] && !e.ifProcessed)
            return qn(e, t);
        if (e.staticInFor) {
            for (var n = "", r = e.parent; r; ) {
                if (r["for"]) {
                    n = r.key;
                    break
                }
                r = r.parent
            }
            return n ? "_o(" + Ln(e, t) + "," + t.onceId++ + "," + n + ")" : Ln(e, t)
        }
        return Fn(e, t)
    }
    function qn(e, t, n, r) {
        return e.ifProcessed = !0,
        function i(e, t, n, r) {
            function o(e) {
                return n ? n(e, t) : e.once ? Mn(e, t) : Ln(e, t)
            }
            if (!e.length)
                return r || "_e()";
            var a = e.shift();
            return a.exp ? "(" + a.exp + ")?" + o(a.block) + ":" + i(e, t, n, r) : "" + o(a.block)
        }(e.ifConditions.slice(), t, n, r)
    }
    function Un(e, t, n, r) {
        var i = e["for"]
          , o = e.alias
          , a = e.iterator1 ? "," + e.iterator1 : ""
          , s = e.iterator2 ? "," + e.iterator2 : "";
        return e.forProcessed = !0,
        (r || "_l") + "((" + i + "),function(" + o + a + s + "){return " + (n || Ln)(e, t) + "})"
    }
    function zn(e, t) {
        var n = "{"
          , r = function(e, t) {
            var n = e.directives;
            if (n) {
                var r, i, o, a, s = "directives:[", c = !1;
                for (r = 0,
                i = n.length; r < i; r++) {
                    o = n[r],
                    a = !0;
                    var u = t.directives[o.name];
                    u && (a = !!u(e, o, t.warn)),
                    a && (c = !0,
                    s += '{name:"' + o.name + '",rawName:"' + o.rawName + '"' + (o.value ? ",value:(" + o.value + "),expression:" + JSON.stringify(o.value) : "") + (o.arg ? ",arg:" + (o.isDynamicArg ? o.arg : '"' + o.arg + '"') : "") + (o.modifiers ? ",modifiers:" + JSON.stringify(o.modifiers) : "") + "},")
                }
                return c ? s.slice(0, -1) + "]" : void 0
            }
        }(e, t);
        r && (n += r + ","),
        e.key && (n += "key:" + e.key + ","),
        e.ref && (n += "ref:" + e.ref + ","),
        e.refInFor && (n += "refInFor:true,"),
        e.pre && (n += "pre:true,"),
        e.component && (n += 'tag:"' + e.tag + '",');
        for (var i = 0; i < t.dataGenFns.length; i++)
            n += t.dataGenFns[i](e);
        if (e.attrs && (n += "attrs:" + Kn(e.attrs) + ","),
        e.props && (n += "domProps:" + Kn(e.props) + ","),
        e.events && (n += jn(e.events, !1) + ","),
        e.nativeEvents && (n += jn(e.nativeEvents, !0) + ","),
        e.slotTarget && !e.slotScope && (n += "slot:" + e.slotTarget + ","),
        e.scopedSlots && (n += function(e, t, n) {
            var r = e["for"] || Object.keys(t).some(function(e) {
                var n = t[e];
                return n.slotTargetDynamic || n["if"] || n["for"] || Bn(n)
            })
              , i = !!e["if"];
            if (!r)
                for (var o = e.parent; o; ) {
                    if (o.slotScope && o.slotScope !== qa || o["for"]) {
                        r = !0;
                        break
                    }
                    o["if"] && (i = !0),
                    o = o.parent
                }
            var a = Object.keys(t).map(function(e) {
                return Hn(t[e], n)
            }).join(",");
            return "scopedSlots:_u([" + a + "]" + (r ? ",null,true" : "") + (!r && i ? ",null,false," + function(e) {
                for (var t = 5381, n = e.length; n; )
                    t = 33 * t ^ e.charCodeAt(--n);
                return t >>> 0
            }(a) : "") + ")"
        }(e, e.scopedSlots, t) + ","),
        e.model && (n += "model:{value:" + e.model.value + ",callback:" + e.model.callback + ",expression:" + e.model.expression + "},"),
        e.inlineTemplate) {
            var o = function(e, t) {
                var n = e.children[0];
                if (n && 1 === n.type) {
                    var r = Nn(n, t.options);
                    return "inlineTemplate:{render:function(){" + r.render + "},staticRenderFns:[" + r.staticRenderFns.map(function(e) {
                        return "function(){" + e + "}"
                    }).join(",") + "]}"
                }
            }(e, t);
            o && (n += o + ",")
        }
        return n = n.replace(/,$/, "") + "}",
        e.dynamicAttrs && (n = "_b(" + n + ',"' + e.tag + '",' + Kn(e.dynamicAttrs) + ")"),
        e.wrapData && (n = e.wrapData(n)),
        e.wrapListeners && (n = e.wrapListeners(n)),
        n
    }
    function Bn(e) {
        return 1 === e.type && ("slot" === e.tag || e.children.some(Bn))
    }
    function Hn(e, t) {
        var n = e.attrsMap["slot-scope"];
        if (e["if"] && !e.ifProcessed && !n)
            return qn(e, t, Hn, "null");
        if (e["for"] && !e.forProcessed)
            return Un(e, t, Hn);
        var r = e.slotScope === qa ? "" : String(e.slotScope)
          , i = "function(" + r + "){return " + ("template" === e.tag ? e["if"] && n ? "(" + e["if"] + ")?" + (Wn(e, t) || "undefined") + ":undefined" : Wn(e, t) || "undefined" : Ln(e, t)) + "}"
          , o = r ? "" : ",proxy:true";
        return "{key:" + (e.slotTarget || '"default"') + ",fn:" + i + o + "}"
    }
    function Wn(e, t, n, r, i) {
        var o = e.children;
        if (o.length) {
            var a = o[0];
            if (1 === o.length && a["for"] && "template" !== a.tag && "slot" !== a.tag) {
                var s = n ? t.maybeComponent(a) ? ",1" : ",0" : "";
                return "" + (r || Ln)(a, t) + s
            }
            var c = n ? function(e, t) {
                for (var n = 0, r = 0; r < e.length; r++) {
                    var i = e[r];
                    if (1 === i.type) {
                        if (Vn(i) || i.ifConditions && i.ifConditions.some(function(e) {
                            return Vn(e.block)
                        })) {
                            n = 2;
                            break
                        }
                        (t(i) || i.ifConditions && i.ifConditions.some(function(e) {
                            return t(e.block)
                        })) && (n = 1)
                    }
                }
                return n
            }(o, t.maybeComponent) : 0
              , u = i || Qn;
            return "[" + o.map(function(e) {
                return u(e, t)
            }).join(",") + "]" + (c ? "," + c : "")
        }
    }
    function Vn(e) {
        return void 0 !== e["for"] || "template" === e.tag || "slot" === e.tag
    }
    function Qn(e, t) {
        return 1 === e.type ? Ln(e, t) : 3 === e.type && e.isComment ? (r = e,
        "_e(" + JSON.stringify(r.text) + ")") : "_v(" + (2 === (n = e).type ? n.expression : Yn(JSON.stringify(n.text))) + ")";
        var n, r
    }
    function Kn(e) {
        for (var t = "", n = "", r = 0; r < e.length; r++) {
            var i = e[r]
              , o = Yn(i.value);
            i.dynamic ? n += i.name + "," + o + "," : t += '"' + i.name + '":' + o + ","
        }
        return t = "{" + t.slice(0, -1) + "}",
        n ? "_d(" + t + ",[" + n.slice(0, -1) + "])" : t
    }
    function Yn(e) {
        return e.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029")
    }
    function Gn(e, n) {
        try {
            return new Function(e)
        } catch (t) {
            return n.push({
                err: t,
                code: e
            }),
            v
        }
    }
    function Xn(e) {
        var t = Object.create(null);
        return function(n, r) {
            (r = m({}, r)).warn,
            delete r.warn;
            var i = r.delimiters ? String(r.delimiters) + n : n;
            if (t[i])
                return t[i];
            var o = e(n, r)
              , a = {}
              , s = [];
            return a.render = Gn(o.render, s),
            a.staticRenderFns = o.staticRenderFns.map(function(e) {
                return Gn(e, s)
            }),
            t[i] = a
        }
    }
    function Jn(e) {
        return (ns = ns || document.createElement("div")).innerHTML = e ? '<a href="\n"/>' : '<div a="\n"/>',
        ns.innerHTML.indexOf("&#10;") > 0
    }
    var Zn, er = Object.freeze({}), tr = Object.prototype.toString, nr = l("slot,component", !0), rr = l("key,ref,slot,slot-scope,is"), ir = Object.prototype.hasOwnProperty, or = /-(\w)/g, ar = p(function(e) {
        return e.replace(or, function(e, t) {
            return t ? t.toUpperCase() : ""
        })
    }), sr = p(function(e) {
        return e.charAt(0).toUpperCase() + e.slice(1)
    }), cr = /\B([A-Z])/g, ur = p(function(e) {
        return e.replace(cr, "-$1").toLowerCase()
    }), lr = Function.prototype.bind ? function(e, t) {
        return e.bind(t)
    }
    : function(e, t) {
        function n(n) {
            var r = arguments.length;
            return r ? r > 1 ? e.apply(t, arguments) : e.call(t, n) : e.call(t)
        }
        return n._length = e.length,
        n
    }
    , fr = function() {
        return !1
    }, dr = function(e) {
        return e
    }, pr = "data-server-rendered", hr = ["component", "directive", "filter"], mr = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch"], gr = {
        optionMergeStrategies: Object.create(null),
        silent: !1,
        productionTip: !1,
        devtools: !1,
        performance: !1,
        errorHandler: null,
        warnHandler: null,
        ignoredElements: [],
        keyCodes: Object.create(null),
        isReservedTag: fr,
        isReservedAttr: fr,
        isUnknownElement: fr,
        getTagNamespace: v,
        parsePlatformTagName: dr,
        mustUseProp: fr,
        async: !0,
        _lifecycleHooks: mr
    }, vr = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/, yr = new RegExp("[^" + vr.source + ".$_\\d]"), br = "__proto__"in {}, _r = "undefined" != typeof window, wr = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform, xr = wr && WXEnvironment.platform.toLowerCase(), kr = _r && window.navigator.userAgent.toLowerCase(), Sr = kr && /msie|trident/.test(kr), Ar = kr && kr.indexOf("msie 9.0") > 0, Cr = kr && kr.indexOf("edge/") > 0, Er = (kr && kr.indexOf("android"),
    kr && /iphone|ipad|ipod|ios/.test(kr) || "ios" === xr), $r = (kr && /chrome\/\d+/.test(kr),
    kr && /phantomjs/.test(kr),
    kr && kr.match(/firefox\/(\d+)/)), Tr = {}.watch, Ir = !1;
    if (_r)
        try {
            var Or = {};
            Object.defineProperty(Or, "passive", {
                get: function() {
                    Ir = !0
                }
            }),
            window.addEventListener("test-passive", null, Or)
        } catch (er) {}
    var Dr, jr = function() {
        return void 0 === Zn && (Zn = !_r && !wr && "undefined" != typeof global && global.process && "server" === global.process.env.VUE_ENV),
        Zn
    }, Pr = _r && window.__VUE_DEVTOOLS_GLOBAL_HOOK__, Rr = "undefined" != typeof Symbol && x(Symbol) && "undefined" != typeof Reflect && x(Reflect.ownKeys);
    Dr = "undefined" != typeof Set && x(Set) ? Set : function() {
        function e() {
            this.set = Object.create(null)
        }
        return e.prototype.has = function(e) {
            return !0 === this.set[e]
        }
        ,
        e.prototype.add = function(e) {
            this.set[e] = !0
        }
        ,
        e.prototype.clear = function() {
            this.set = Object.create(null)
        }
        ,
        e
    }();
    var Nr = v
      , Lr = 0
      , Fr = function() {
        this.id = Lr++,
        this.subs = []
    };
    Fr.prototype.addSub = function(e) {
        this.subs.push(e)
    }
    ,
    Fr.prototype.removeSub = function(e) {
        f(this.subs, e)
    }
    ,
    Fr.prototype.depend = function() {
        Fr.target && Fr.target.addDep(this)
    }
    ,
    Fr.prototype.notify = function() {
        for (var e = this.subs.slice(), t = 0, n = e.length; t < n; t++)
            e[t].update()
    }
    ,
    Fr.target = null;
    var Mr = []
      , qr = function(e, t, n, r, i, o, a, s) {
        this.tag = e,
        this.data = t,
        this.children = n,
        this.text = r,
        this.elm = i,
        this.ns = void 0,
        this.context = o,
        this.fnContext = void 0,
        this.fnOptions = void 0,
        this.fnScopeId = void 0,
        this.key = t && t.key,
        this.componentOptions = a,
        this.componentInstance = void 0,
        this.parent = void 0,
        this.raw = !1,
        this.isStatic = !1,
        this.isRootInsert = !0,
        this.isComment = !1,
        this.isCloned = !1,
        this.isOnce = !1,
        this.asyncFactory = s,
        this.asyncMeta = void 0,
        this.isAsyncPlaceholder = !1
    }
      , Ur = {
        child: {
            configurable: !0
        }
    };
    Ur.child.get = function() {
        return this.componentInstance
    }
    ,
    Object.defineProperties(qr.prototype, Ur);
    var zr = function(e) {
        void 0 === e && (e = "");
        var t = new qr;
        return t.text = e,
        t.isComment = !0,
        t
    }
      , Br = Array.prototype
      , Hr = Object.create(Br);
    ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function(e) {
        var t = Br[e];
        w(Hr, e, function() {
            for (var n = [], r = arguments.length; r--; )
                n[r] = arguments[r];
            var i, o = t.apply(this, n), a = this.__ob__;
            switch (e) {
            case "push":
            case "unshift":
                i = n;
                break;
            case "splice":
                i = n.slice(2)
            }
            return i && a.observeArray(i),
            a.dep.notify(),
            o
        })
    });
    var Wr = Object.getOwnPropertyNames(Hr)
      , Vr = !0
      , Qr = function(e) {
        var t;
        this.value = e,
        this.dep = new Fr,
        this.vmCount = 0,
        w(e, "__ob__", this),
        Array.isArray(e) ? (br ? (t = Hr,
        e.__proto__ = t) : function(e, t, n) {
            for (var r = 0, i = n.length; r < i; r++) {
                var o = n[r];
                w(e, o, t[o])
            }
        }(e, Hr, Wr),
        this.observeArray(e)) : this.walk(e)
    };
    Qr.prototype.walk = function(e) {
        for (var t = Object.keys(e), n = 0; n < t.length; n++)
            T(e, t[n])
    }
    ,
    Qr.prototype.observeArray = function(e) {
        for (var t = 0, n = e.length; t < n; t++)
            $(e[t])
    }
    ;
    var Kr = gr.optionMergeStrategies;
    Kr.data = function(e, t, n) {
        return n ? j(e, t, n) : t && "function" != typeof t ? e : j(e, t)
    }
    ,
    mr.forEach(function(e) {
        Kr[e] = P
    }),
    hr.forEach(function(e) {
        Kr[e + "s"] = R
    }),
    Kr.watch = function(e, t) {
        if (e === Tr && (e = void 0),
        t === Tr && (t = void 0),
        !t)
            return Object.create(e || null);
        if (!e)
            return t;
        var n = {};
        for (var r in m(n, e),
        t) {
            var i = n[r]
              , o = t[r];
            i && !Array.isArray(i) && (i = [i]),
            n[r] = i ? i.concat(o) : Array.isArray(o) ? o : [o]
        }
        return n
    }
    ,
    Kr.props = Kr.methods = Kr.inject = Kr.computed = function(e, t) {
        if (!e)
            return t;
        var n = Object.create(null);
        return m(n, e),
        t && m(n, t),
        n
    }
    ,
    Kr.provide = j;
    var Yr, Gr = function(e, t) {
        return void 0 === t ? e : t
    }, Xr = !1, Jr = [], Zr = !1;
    if ("undefined" != typeof Promise && x(Promise)) {
        var ei = Promise.resolve();
        Yr = function() {
            ei.then(V),
            Er && setTimeout(v)
        }
        ,
        Xr = !0
    } else if (Sr || "undefined" == typeof MutationObserver || !x(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString())
        Yr = "undefined" != typeof setImmediate && x(setImmediate) ? function() {
            setImmediate(V)
        }
        : function() {
            setTimeout(V, 0)
        }
        ;
    else {
        var ti = 1
          , ni = new MutationObserver(V)
          , ri = document.createTextNode(String(ti));
        ni.observe(ri, {
            characterData: !0
        }),
        Yr = function() {
            ti = (ti + 1) % 2,
            ri.data = String(ti)
        }
        ,
        Xr = !0
    }
    var ii = new Dr
      , oi = p(function(e) {
        var t = "&" === e.charAt(0)
          , n = "~" === (e = t ? e.slice(1) : e).charAt(0)
          , r = "!" === (e = n ? e.slice(1) : e).charAt(0);
        return {
            name: e = r ? e.slice(1) : e,
            once: n,
            capture: r,
            passive: t
        }
    });
    we(xe.prototype);
    var ai, si = {
        init: function(e, n) {
            if (e.componentInstance && !e.componentInstance._isDestroyed && e.data.keepAlive) {
                var r = e;
                si.prepatch(r, r)
            } else
                (e.componentInstance = function(e) {
                    var n = {
                        _isComponent: !0,
                        _parentVnode: e,
                        parent: di
                    }
                      , r = e.data.inlineTemplate;
                    return t(r) && (n.render = r.render,
                    n.staticRenderFns = r.staticRenderFns),
                    new e.componentOptions.Ctor(n)
                }(e)).$mount(n ? e.elm : void 0, n)
        },
        prepatch: function(e, t) {
            var n = t.componentOptions;
            !function(e, t, n, r, i) {
                var o = r.data.scopedSlots
                  , a = e.$scopedSlots
                  , s = !!(o && !o.$stable || a !== er && !a.$stable || o && e.$scopedSlots.$key !== o.$key)
                  , c = !!(i || e.$options._renderChildren || s);
                if (e.$options._parentVnode = r,
                e.$vnode = r,
                e._vnode && (e._vnode.parent = r),
                e.$options._renderChildren = i,
                e.$attrs = r.data.attrs || er,
                e.$listeners = n || er,
                t && e.$options.props) {
                    E(!1);
                    for (var u = e._props, l = e.$options._propKeys || [], f = 0; f < l.length; f++) {
                        var d = l[f]
                          , p = e.$options.props;
                        u[d] = F(d, p, t, e)
                    }
                    E(!0),
                    e.$options.propsData = t
                }
                n = n || er;
                var h = e.$options._parentListeners;
                e.$options._parentListeners = n,
                Pe(e, n, h),
                c && (e.$slots = ne(i, r.context),
                e.$forceUpdate())
            }(t.componentInstance = e.componentInstance, n.propsData, n.listeners, t, n.children)
        },
        insert: function(e) {
            var t, n = e.context, r = e.componentInstance;
            r._isMounted || (r._isMounted = !0,
            Fe(r, "mounted")),
            e.data.keepAlive && (n._isMounted ? ((t = r)._inactive = !1,
            hi.push(t)) : Le(r, !0))
        },
        destroy: function(e) {
            var t = e.componentInstance;
            t._isDestroyed || (e.data.keepAlive ? function n(e, t) {
                if (!(t && (e._directInactive = !0,
                Ne(e)) || e._inactive)) {
                    e._inactive = !0;
                    for (var r = 0; r < e.$children.length; r++)
                        n(e.$children[r]);
                    Fe(e, "deactivated")
                }
            }(t, !0) : t.$destroy())
        }
    }, ci = Object.keys(si), ui = 1, li = 2, fi = null, di = null, pi = [], hi = [], mi = {}, gi = !1, vi = !1, yi = 0, bi = 0, _i = Date.now;
    if (_r && !Sr) {
        var wi = window.performance;
        wi && "function" == typeof wi.now && _i() > document.createEvent("Event").timeStamp && (_i = function() {
            return wi.now()
        }
        )
    }
    var xi = 0
      , ki = function(e, t, n, r, i) {
        this.vm = e,
        i && (e._watcher = this),
        e._watchers.push(this),
        r ? (this.deep = !!r.deep,
        this.user = !!r.user,
        this.lazy = !!r.lazy,
        this.sync = !!r.sync,
        this.before = r.before) : this.deep = this.user = this.lazy = this.sync = !1,
        this.cb = n,
        this.id = ++xi,
        this.active = !0,
        this.dirty = this.lazy,
        this.deps = [],
        this.newDeps = [],
        this.depIds = new Dr,
        this.newDepIds = new Dr,
        this.expression = "",
        "function" == typeof t ? this.getter = t : (this.getter = function(e) {
            if (!yr.test(e)) {
                var t = e.split(".");
                return function(e) {
                    for (var n = 0; n < t.length; n++) {
                        if (!e)
                            return;
                        e = e[t[n]]
                    }
                    return e
                }
            }
        }(t),
        this.getter || (this.getter = v)),
        this.value = this.lazy ? void 0 : this.get()
    };
    ki.prototype.get = function() {
        var e;
        k(this);
        var t = this.vm;
        try {
            e = this.getter.call(t, t)
        } catch (e) {
            if (!this.user)
                throw e;
            z(e, t, 'getter for watcher "' + this.expression + '"')
        } finally {
            this.deep && K(e),
            S(),
            this.cleanupDeps()
        }
        return e
    }
    ,
    ki.prototype.addDep = function(e) {
        var t = e.id;
        this.newDepIds.has(t) || (this.newDepIds.add(t),
        this.newDeps.push(e),
        this.depIds.has(t) || e.addSub(this))
    }
    ,
    ki.prototype.cleanupDeps = function() {
        for (var e = this.deps.length; e--; ) {
            var t = this.deps[e];
            this.newDepIds.has(t.id) || t.removeSub(this)
        }
        var n = this.depIds;
        this.depIds = this.newDepIds,
        this.newDepIds = n,
        this.newDepIds.clear(),
        n = this.deps,
        this.deps = this.newDeps,
        this.newDeps = n,
        this.newDeps.length = 0
    }
    ,
    ki.prototype.update = function() {
        this.lazy ? this.dirty = !0 : this.sync ? this.run() : function(e) {
            var t = e.id;
            if (null == mi[t]) {
                if (mi[t] = !0,
                vi) {
                    for (var n = pi.length - 1; n > yi && pi[n].id > e.id; )
                        n--;
                    pi.splice(n + 1, 0, e)
                } else
                    pi.push(e);
                gi || (gi = !0,
                Q(Me))
            }
        }(this)
    }
    ,
    ki.prototype.run = function() {
        if (this.active) {
            var e = this.get();
            if (e !== this.value || i(e) || this.deep) {
                var t = this.value;
                if (this.value = e,
                this.user)
                    try {
                        this.cb.call(this.vm, e, t)
                    } catch (e) {
                        z(e, this.vm, 'callback for watcher "' + this.expression + '"')
                    }
                else
                    this.cb.call(this.vm, e, t)
            }
        }
    }
    ,
    ki.prototype.evaluate = function() {
        this.value = this.get(),
        this.dirty = !1
    }
    ,
    ki.prototype.depend = function() {
        for (var e = this.deps.length; e--; )
            this.deps[e].depend()
    }
    ,
    ki.prototype.teardown = function() {
        if (this.active) {
            this.vm._isBeingDestroyed || f(this.vm._watchers, this);
            for (var e = this.deps.length; e--; )
                this.deps[e].removeSub(this);
            this.active = !1
        }
    }
    ;
    var Si = {
        enumerable: !0,
        configurable: !0,
        get: v,
        set: v
    }
      , Ai = {
        lazy: !0
    }
      , Ci = 0;
    Qe.prototype._init = function(e) {
        var t = this;
        t._uid = Ci++,
        t._isVue = !0,
        e && e._isComponent ? function(e, t) {
            var n = e.$options = Object.create(e.constructor.options)
              , r = t._parentVnode;
            n.parent = t.parent,
            n._parentVnode = r;
            var i = r.componentOptions;
            n.propsData = i.propsData,
            n._parentListeners = i.listeners,
            n._renderChildren = i.children,
            n._componentTag = i.tag,
            t.render && (n.render = t.render,
            n.staticRenderFns = t.staticRenderFns)
        }(t, e) : t.$options = N(Ve(t.constructor), e || {}, t),
        t._renderProxy = t,
        t._self = t,
        function(e) {
            var t = e.$options
              , n = t.parent;
            if (n && !t.abstract) {
                for (; n.$options.abstract && n.$parent; )
                    n = n.$parent;
                n.$children.push(e)
            }
            e.$parent = n,
            e.$root = n ? n.$root : e,
            e.$children = [],
            e.$refs = {},
            e._watcher = null,
            e._inactive = null,
            e._directInactive = !1,
            e._isMounted = !1,
            e._isDestroyed = !1,
            e._isBeingDestroyed = !1
        }(t),
        function(e) {
            e._events = Object.create(null),
            e._hasHookEvent = !1;
            var t = e.$options._parentListeners;
            t && Pe(e, t)
        }(t),
        function(e) {
            e._vnode = null,
            e._staticTrees = null;
            var t = e.$options
              , n = e.$vnode = t._parentVnode
              , r = n && n.context;
            e.$slots = ne(t._renderChildren, r),
            e.$scopedSlots = er,
            e._c = function(t, n, r, i) {
                return Ee(e, t, n, r, i, !1)
            }
            ,
            e.$createElement = function(t, n, r, i) {
                return Ee(e, t, n, r, i, !0)
            }
            ;
            var i = n && n.data;
            T(e, "$attrs", i && i.attrs || er, null, !0),
            T(e, "$listeners", t._parentListeners || er, null, !0)
        }(t),
        Fe(t, "beforeCreate"),
        function(e) {
            var t = te(e.$options.inject, e);
            t && (E(!1),
            Object.keys(t).forEach(function(n) {
                T(e, n, t[n])
            }),
            E(!0))
        }(t),
        Ue(t),
        function(e) {
            var t = e.$options.provide;
            t && (e._provided = "function" == typeof t ? t.call(e) : t)
        }(t),
        Fe(t, "created"),
        t.$options.el && t.$mount(t.$options.el)
    }
    ,
    function(e) {
        var t = {
            get: function() {
                return this._data
            }
        }
          , n = {
            get: function() {
                return this._props
            }
        };
        Object.defineProperty(e.prototype, "$data", t),
        Object.defineProperty(e.prototype, "$props", n),
        e.prototype.$set = I,
        e.prototype.$delete = O,
        e.prototype.$watch = function(e, t, n) {
            if (o(t))
                return We(this, e, t, n);
            (n = n || {}).user = !0;
            var r = new ki(this,e,t,n);
            if (n.immediate)
                try {
                    t.call(this, r.value)
                } catch (e) {
                    z(e, this, 'callback for immediate watcher "' + r.expression + '"')
                }
            return function() {
                r.teardown()
            }
        }
    }(Qe),
    function(e) {
        var t = /^hook:/;
        e.prototype.$on = function(e, n) {
            var r = this;
            if (Array.isArray(e))
                for (var i = 0, o = e.length; i < o; i++)
                    r.$on(e[i], n);
            else
                (r._events[e] || (r._events[e] = [])).push(n),
                t.test(e) && (r._hasHookEvent = !0);
            return r
        }
        ,
        e.prototype.$once = function(e, t) {
            function n() {
                r.$off(e, n),
                t.apply(r, arguments)
            }
            var r = this;
            return n.fn = t,
            r.$on(e, n),
            r
        }
        ,
        e.prototype.$off = function(e, t) {
            var n = this;
            if (!arguments.length)
                return n._events = Object.create(null),
                n;
            if (Array.isArray(e)) {
                for (var r = 0, i = e.length; r < i; r++)
                    n.$off(e[r], t);
                return n
            }
            var o, a = n._events[e];
            if (!a)
                return n;
            if (!t)
                return n._events[e] = null,
                n;
            for (var s = a.length; s--; )
                if ((o = a[s]) === t || o.fn === t) {
                    a.splice(s, 1);
                    break
                }
            return n
        }
        ,
        e.prototype.$emit = function(e) {
            var t = this._events[e];
            if (t) {
                t = t.length > 1 ? h(t) : t;
                for (var n = h(arguments, 1), r = 'event handler for "' + e + '"', i = 0, o = t.length; i < o; i++)
                    B(t[i], this, n, this, r)
            }
            return this
        }
    }(Qe),
    function(e) {
        e.prototype._update = function(e, t) {
            var n = this
              , r = n.$el
              , i = n._vnode
              , o = Re(n);
            n._vnode = e,
            n.$el = i ? n.__patch__(i, e) : n.__patch__(n.$el, e, t, !1),
            o(),
            r && (r.__vue__ = null),
            n.$el && (n.$el.__vue__ = n),
            n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el)
        }
        ,
        e.prototype.$forceUpdate = function() {
            this._watcher && this._watcher.update()
        }
        ,
        e.prototype.$destroy = function() {
            var e = this;
            if (!e._isBeingDestroyed) {
                Fe(e, "beforeDestroy"),
                e._isBeingDestroyed = !0;
                var t = e.$parent;
                !t || t._isBeingDestroyed || e.$options.abstract || f(t.$children, e),
                e._watcher && e._watcher.teardown();
                for (var n = e._watchers.length; n--; )
                    e._watchers[n].teardown();
                e._data.__ob__ && e._data.__ob__.vmCount--,
                e._isDestroyed = !0,
                e.__patch__(e._vnode, null),
                Fe(e, "destroyed"),
                e.$off(),
                e.$el && (e.$el.__vue__ = null),
                e.$vnode && (e.$vnode.parent = null)
            }
        }
    }(Qe),
    function(e) {
        we(e.prototype),
        e.prototype.$nextTick = function(e) {
            return Q(e, this)
        }
        ,
        e.prototype._render = function() {
            var e, t = this, n = t.$options, r = n.render, i = n._parentVnode;
            i && (t.$scopedSlots = ie(i.data.scopedSlots, t.$slots, t.$scopedSlots)),
            t.$vnode = i;
            try {
                fi = t,
                e = r.call(t._renderProxy, t.$createElement)
            } catch (n) {
                z(n, t, "render"),
                e = t._vnode
            } finally {
                fi = null
            }
            return Array.isArray(e) && 1 === e.length && (e = e[0]),
            e instanceof qr || (e = zr()),
            e.parent = i,
            e
        }
    }(Qe);
    var Ei = [String, RegExp, Array]
      , $i = {
        KeepAlive: {
            name: "keep-alive",
            abstract: !0,
            props: {
                include: Ei,
                exclude: Ei,
                max: [String, Number]
            },
            created: function() {
                this.cache = Object.create(null),
                this.keys = []
            },
            destroyed: function() {
                for (var e in this.cache)
                    Je(this.cache, e, this.keys)
            },
            mounted: function() {
                var e = this;
                this.$watch("include", function(t) {
                    Xe(e, function(e) {
                        return Ge(t, e)
                    })
                }),
                this.$watch("exclude", function(t) {
                    Xe(e, function(e) {
                        return !Ge(t, e)
                    })
                })
            },
            render: function() {
                var e = this.$slots["default"]
                  , t = Ie(e)
                  , n = t && t.componentOptions;
                if (n) {
                    var r = Ye(n)
                      , i = this.include
                      , o = this.exclude;
                    if (i && (!r || !Ge(i, r)) || o && r && Ge(o, r))
                        return t;
                    var a = this.cache
                      , s = this.keys
                      , c = null == t.key ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : t.key;
                    a[c] ? (t.componentInstance = a[c].componentInstance,
                    f(s, c),
                    s.push(c)) : (a[c] = t,
                    s.push(c),
                    this.max && s.length > parseInt(this.max) && Je(a, s[0], s, this._vnode)),
                    t.data.keepAlive = !0
                }
                return t || e && e[0]
            }
        }
    };
    !function(e) {
        var t = {
            get: function() {
                return gr
            }
        };
        Object.defineProperty(e, "config", t),
        e.util = {
            warn: Nr,
            extend: m,
            mergeOptions: N,
            defineReactive: T
        },
        e.set = I,
        e["delete"] = O,
        e.nextTick = Q,
        e.observable = function(e) {
            return $(e),
            e
        }
        ,
        e.options = Object.create(null),
        hr.forEach(function(t) {
            e.options[t + "s"] = Object.create(null)
        }),
        e.options._base = e,
        m(e.options.components, $i),
        function(e) {
            e.use = function(e) {
                var t = this._installedPlugins || (this._installedPlugins = []);
                if (t.indexOf(e) > -1)
                    return this;
                var n = h(arguments, 1);
                return n.unshift(this),
                "function" == typeof e.install ? e.install.apply(e, n) : "function" == typeof e && e.apply(null, n),
                t.push(e),
                this
            }
        }(e),
        function(e) {
            e.mixin = function(e) {
                return this.options = N(this.options, e),
                this
            }
        }(e),
        Ke(e),
        function(e) {
            hr.forEach(function(t) {
                e[t] = function(e, n) {
                    return n ? ("component" === t && o(n) && (n.name = n.name || e,
                    n = this.options._base.extend(n)),
                    "directive" === t && "function" == typeof n && (n = {
                        bind: n,
                        update: n
                    }),
                    this.options[t + "s"][e] = n,
                    n) : this.options[t + "s"][e]
                }
            })
        }(e)
    }(Qe),
    Object.defineProperty(Qe.prototype, "$isServer", {
        get: jr
    }),
    Object.defineProperty(Qe.prototype, "$ssrContext", {
        get: function() {
            return this.$vnode && this.$vnode.ssrContext
        }
    }),
    Object.defineProperty(Qe, "FunctionalRenderContext", {
        value: xe
    }),
    Qe.version = "2.6.11";
    var Ti, Ii, Oi, Di, ji, Pi, Ri, Ni, Li, Fi = l("style,class"), Mi = l("input,textarea,option,select,progress"), qi = function(e, t, n) {
        return "value" === n && Mi(e) && "button" !== t || "selected" === n && "option" === e || "checked" === n && "input" === e || "muted" === n && "video" === e
    }, Ui = l("contenteditable,draggable,spellcheck"), zi = l("events,caret,typing,plaintext-only"), Bi = function(e, t) {
        return Ki(t) || "false" === t ? "false" : "contenteditable" === e && zi(t) ? t : "true"
    }, Hi = l("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"), Wi = "http://www.w3.org/1999/xlink", Vi = function(e) {
        return ":" === e.charAt(5) && "xlink" === e.slice(0, 5)
    }, Qi = function(e) {
        return Vi(e) ? e.slice(6, e.length) : ""
    }, Ki = function(e) {
        return null == e || !1 === e
    }, Yi = {
        svg: "http://www.w3.org/2000/svg",
        math: "http://www.w3.org/1998/Math/MathML"
    }, Gi = l("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"), Xi = l("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0), Ji = function(e) {
        return Gi(e) || Xi(e)
    }, Zi = Object.create(null), eo = l("text,number,password,search,email,tel,url"), to = Object.freeze({
        createElement: function(e, t) {
            var n = document.createElement(e);
            return "select" !== e ? n : (t.data && t.data.attrs && void 0 !== t.data.attrs.multiple && n.setAttribute("multiple", "multiple"),
            n)
        },
        createElementNS: function(e, t) {
            return document.createElementNS(Yi[e], t)
        },
        createTextNode: function(e) {
            return document.createTextNode(e)
        },
        createComment: function(e) {
            return document.createComment(e)
        },
        insertBefore: function(e, t, n) {
            e.insertBefore(t, n)
        },
        removeChild: function(e, t) {
            e.removeChild(t)
        },
        appendChild: function(e, t) {
            e.appendChild(t)
        },
        parentNode: function(e) {
            return e.parentNode
        },
        nextSibling: function(e) {
            return e.nextSibling
        },
        tagName: function(e) {
            return e.tagName
        },
        setTextContent: function(e, t) {
            e.textContent = t
        },
        setStyleScope: function(e, t) {
            e.setAttribute(t, "")
        }
    }), no = {
        create: function(e, t) {
            ot(t)
        },
        update: function(e, t) {
            e.data.ref !== t.data.ref && (ot(e, !0),
            ot(t))
        },
        destroy: function(e) {
            ot(e, !0)
        }
    }, ro = new qr("",{},[]), io = ["create", "activate", "update", "remove", "destroy"], oo = {
        create: ct,
        update: ct,
        destroy: function(e) {
            ct(e, ro)
        }
    }, ao = Object.create(null), so = [no, oo], co = {
        create: dt,
        update: dt
    }, uo = {
        create: mt,
        update: mt
    }, lo = /[\w).+\-_$\]]/, fo = "__r", po = "__c", ho = Xr && !($r && Number($r[1]) <= 53), mo = {
        create: qt,
        update: qt
    }, go = {
        create: Ut,
        update: Ut
    }, vo = p(function(e) {
        var t = {}
          , n = /:(.+)/;
        return e.split(/;(?![^(]*\))/g).forEach(function(e) {
            if (e) {
                var r = e.split(n);
                r.length > 1 && (t[r[0].trim()] = r[1].trim())
            }
        }),
        t
    }), yo = /^--/, bo = /\s*!important$/, _o = function(e, t, n) {
        if (yo.test(t))
            e.style.setProperty(t, n);
        else if (bo.test(n))
            e.style.setProperty(ur(t), n.replace(bo, ""), "important");
        else {
            var r = xo(t);
            if (Array.isArray(n))
                for (var i = 0, o = n.length; i < o; i++)
                    e.style[r] = n[i];
            else
                e.style[r] = n
        }
    }, wo = ["Webkit", "Moz", "ms"], xo = p(function(e) {
        if (Li = Li || document.createElement("div").style,
        "filter" !== (e = ar(e)) && e in Li)
            return e;
        for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < wo.length; n++) {
            var r = wo[n] + t;
            if (r in Li)
                return r
        }
    }), ko = {
        create: Wt,
        update: Wt
    }, So = /\s+/, Ao = p(function(e) {
        return {
            enterClass: e + "-enter",
            enterToClass: e + "-enter-to",
            enterActiveClass: e + "-enter-active",
            leaveClass: e + "-leave",
            leaveToClass: e + "-leave-to",
            leaveActiveClass: e + "-leave-active"
        }
    }), Co = _r && !Ar, Eo = "transition", $o = "animation", To = "transition", Io = "transitionend", Oo = "animation", Do = "animationend";
    Co && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (To = "WebkitTransition",
    Io = "webkitTransitionEnd"),
    void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (Oo = "WebkitAnimation",
    Do = "webkitAnimationEnd"));
    var jo = _r ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function(e) {
        return e()
    }
      , Po = /\b(transform|all)(,|$)/
      , Ro = function(i) {
        function o(e) {
            var n = E.parentNode(e);
            t(n) && E.removeChild(n, e)
        }
        function a(e, r, i, o, a, l, f) {
            if (t(e.elm) && t(l) && (e = l[f] = C(e)),
            e.isRootInsert = !a,
            !function(e, r, i, o) {
                var a = e.data;
                if (t(a)) {
                    var u = t(e.componentInstance) && a.keepAlive;
                    if (t(a = a.hook) && t(a = a.init) && a(e, !1),
                    t(e.componentInstance))
                        return s(e, r),
                        c(i, e.elm, o),
                        n(u) && function(e, n, r, i) {
                            for (var o, a = e; a.componentInstance; )
                                if (t(o = (a = a.componentInstance._vnode).data) && t(o = o.transition)) {
                                    for (o = 0; o < S.activate.length; ++o)
                                        S.activate[o](ro, a);
                                    n.push(a);
                                    break
                                }
                            c(r, e.elm, i)
                        }(e, r, i, o),
                        !0
                }
            }(e, r, i, o)) {
                var h = e.data
                  , m = e.children
                  , g = e.tag;
                t(g) ? (e.elm = e.ns ? E.createElementNS(e.ns, g) : E.createElement(g, e),
                p(e),
                u(e, m, r),
                t(h) && d(e, r),
                c(i, e.elm, o)) : n(e.isComment) ? (e.elm = E.createComment(e.text),
                c(i, e.elm, o)) : (e.elm = E.createTextNode(e.text),
                c(i, e.elm, o))
            }
        }
        function s(e, n) {
            t(e.data.pendingInsert) && (n.push.apply(n, e.data.pendingInsert),
            e.data.pendingInsert = null),
            e.elm = e.componentInstance.$el,
            f(e) ? (d(e, n),
            p(e)) : (ot(e),
            n.push(e))
        }
        function c(e, n, r) {
            t(e) && (t(r) ? E.parentNode(r) === e && E.insertBefore(e, n, r) : E.appendChild(e, n))
        }
        function u(e, t, n) {
            if (Array.isArray(t))
                for (var i = 0; i < t.length; ++i)
                    a(t[i], n, e.elm, null, !0, t, i);
            else
                r(e.text) && E.appendChild(e.elm, E.createTextNode(String(e.text)))
        }
        function f(e) {
            for (; e.componentInstance; )
                e = e.componentInstance._vnode;
            return t(e.tag)
        }
        function d(e, n) {
            for (var r = 0; r < S.create.length; ++r)
                S.create[r](ro, e);
            t(x = e.data.hook) && (t(x.create) && x.create(ro, e),
            t(x.insert) && n.push(e))
        }
        function p(e) {
            var n;
            if (t(n = e.fnScopeId))
                E.setStyleScope(e.elm, n);
            else
                for (var r = e; r; )
                    t(n = r.context) && t(n = n.$options._scopeId) && E.setStyleScope(e.elm, n),
                    r = r.parent;
            t(n = di) && n !== e.context && n !== e.fnContext && t(n = n.$options._scopeId) && E.setStyleScope(e.elm, n)
        }
        function h(e, t, n, r, i, o) {
            for (; r <= i; ++r)
                a(n[r], o, e, t, !1, n, r)
        }
        function m(e) {
            var n, r, i = e.data;
            if (t(i))
                for (t(n = i.hook) && t(n = n.destroy) && n(e),
                n = 0; n < S.destroy.length; ++n)
                    S.destroy[n](e);
            if (t(n = e.children))
                for (r = 0; r < e.children.length; ++r)
                    m(e.children[r])
        }
        function g(e, n, r) {
            for (; n <= r; ++n) {
                var i = e[n];
                t(i) && (t(i.tag) ? (v(i),
                m(i)) : o(i.elm))
            }
        }
        function v(e, n) {
            if (t(n) || t(e.data)) {
                var r, i = S.remove.length + 1;
                for (t(n) ? n.listeners += i : n = function(e, t) {
                    function n() {
                        0 == --n.listeners && o(e)
                    }
                    return n.listeners = t,
                    n
                }(e.elm, i),
                t(r = e.componentInstance) && t(r = r._vnode) && t(r.data) && v(r, n),
                r = 0; r < S.remove.length; ++r)
                    S.remove[r](e, n);
                t(r = e.data.hook) && t(r = r.remove) ? r(e, n) : n()
            } else
                o(e.elm)
        }
        function y(e, n, r, i) {
            for (var o = r; o < i; o++) {
                var a = n[o];
                if (t(a) && at(e, a))
                    return o
            }
        }
        function b(r, i, o, s, c, u) {
            if (r !== i) {
                t(i.elm) && t(s) && (i = s[c] = C(i));
                var l = i.elm = r.elm;
                if (n(r.isAsyncPlaceholder))
                    t(i.asyncFactory.resolved) ? w(r.elm, i, o) : i.isAsyncPlaceholder = !0;
                else if (n(i.isStatic) && n(r.isStatic) && i.key === r.key && (n(i.isCloned) || n(i.isOnce)))
                    i.componentInstance = r.componentInstance;
                else {
                    var d, p = i.data;
                    t(p) && t(d = p.hook) && t(d = d.prepatch) && d(r, i);
                    var m = r.children
                      , v = i.children;
                    if (t(p) && f(i)) {
                        for (d = 0; d < S.update.length; ++d)
                            S.update[d](r, i);
                        t(d = p.hook) && t(d = d.update) && d(r, i)
                    }
                    e(i.text) ? t(m) && t(v) ? m !== v && function(n, r, i, o, s) {
                        for (var c, u, l, f = 0, d = 0, p = r.length - 1, m = r[0], v = r[p], _ = i.length - 1, w = i[0], x = i[_], k = !s; f <= p && d <= _; )
                            e(m) ? m = r[++f] : e(v) ? v = r[--p] : at(m, w) ? (b(m, w, o, i, d),
                            m = r[++f],
                            w = i[++d]) : at(v, x) ? (b(v, x, o, i, _),
                            v = r[--p],
                            x = i[--_]) : at(m, x) ? (b(m, x, o, i, _),
                            k && E.insertBefore(n, m.elm, E.nextSibling(v.elm)),
                            m = r[++f],
                            x = i[--_]) : at(v, w) ? (b(v, w, o, i, d),
                            k && E.insertBefore(n, v.elm, m.elm),
                            v = r[--p],
                            w = i[++d]) : (e(c) && (c = st(r, f, p)),
                            e(u = t(w.key) ? c[w.key] : y(w, r, f, p)) ? a(w, o, n, m.elm, !1, i, d) : at(l = r[u], w) ? (b(l, w, o, i, d),
                            r[u] = void 0,
                            k && E.insertBefore(n, l.elm, m.elm)) : a(w, o, n, m.elm, !1, i, d),
                            w = i[++d]);
                        f > p ? h(n, e(i[_ + 1]) ? null : i[_ + 1].elm, i, d, _, o) : d > _ && g(r, f, p)
                    }(l, m, v, o, u) : t(v) ? (t(r.text) && E.setTextContent(l, ""),
                    h(l, null, v, 0, v.length - 1, o)) : t(m) ? g(m, 0, m.length - 1) : t(r.text) && E.setTextContent(l, "") : r.text !== i.text && E.setTextContent(l, i.text),
                    t(p) && t(d = p.hook) && t(d = d.postpatch) && d(r, i)
                }
            }
        }
        function _(e, r, i) {
            if (n(i) && t(e.parent))
                e.parent.data.pendingInsert = r;
            else
                for (var o = 0; o < r.length; ++o)
                    r[o].data.hook.insert(r[o])
        }
        function w(e, r, i, o) {
            var a, c = r.tag, l = r.data, f = r.children;
            if (o = o || l && l.pre,
            r.elm = e,
            n(r.isComment) && t(r.asyncFactory))
                return r.isAsyncPlaceholder = !0,
                !0;
            if (t(l) && (t(a = l.hook) && t(a = a.init) && a(r, !0),
            t(a = r.componentInstance)))
                return s(r, i),
                !0;
            if (t(c)) {
                if (t(f))
                    if (e.hasChildNodes())
                        if (t(a = l) && t(a = a.domProps) && t(a = a.innerHTML)) {
                            if (a !== e.innerHTML)
                                return !1
                        } else {
                            for (var p = !0, h = e.firstChild, m = 0; m < f.length; m++) {
                                if (!h || !w(h, f[m], i, o)) {
                                    p = !1;
                                    break
                                }
                                h = h.nextSibling
                            }
                            if (!p || h)
                                return !1
                        }
                    else
                        u(r, f, i);
                if (t(l)) {
                    var g = !1;
                    for (var v in l)
                        if (!$(v)) {
                            g = !0,
                            d(r, i);
                            break
                        }
                    !g && l["class"] && K(l["class"])
                }
            } else
                e.data !== r.text && (e.data = r.text);
            return !0
        }
        var x, k, S = {}, A = i.modules, E = i.nodeOps;
        for (x = 0; x < io.length; ++x)
            for (S[io[x]] = [],
            k = 0; k < A.length; ++k)
                t(A[k][io[x]]) && S[io[x]].push(A[k][io[x]]);
        var $ = l("attrs,class,staticClass,staticStyle,key");
        return function(r, i, o, s) {
            if (!e(i)) {
                var c, u = !1, l = [];
                if (e(r))
                    u = !0,
                    a(i, l);
                else {
                    var d = t(r.nodeType);
                    if (!d && at(r, i))
                        b(r, i, l, null, null, s);
                    else {
                        if (d) {
                            if (1 === r.nodeType && r.hasAttribute(pr) && (r.removeAttribute(pr),
                            o = !0),
                            n(o) && w(r, i, l))
                                return _(i, l, !0),
                                r;
                            c = r,
                            r = new qr(E.tagName(c).toLowerCase(),{},[],void 0,c)
                        }
                        var p = r.elm
                          , h = E.parentNode(p);
                        if (a(i, l, p._leaveCb ? null : h, E.nextSibling(p)),
                        t(i.parent))
                            for (var v = i.parent, y = f(i); v; ) {
                                for (var x = 0; x < S.destroy.length; ++x)
                                    S.destroy[x](v);
                                if (v.elm = i.elm,
                                y) {
                                    for (var k = 0; k < S.create.length; ++k)
                                        S.create[k](ro, v);
                                    var A = v.data.hook.insert;
                                    if (A.merged)
                                        for (var C = 1; C < A.fns.length; C++)
                                            A.fns[C]()
                                } else
                                    ot(v);
                                v = v.parent
                            }
                        t(h) ? g([r], 0, 0) : t(r.tag) && m(r)
                    }
                }
                return _(i, l, u),
                i.elm
            }
            t(r) && m(r)
        }
    }({
        nodeOps: to,
        modules: [co, uo, mo, go, ko, _r ? {
            create: sn,
            activate: sn,
            remove: function(e, t) {
                !0 !== e.data.show ? rn(e, t) : t()
            }
        } : {}].concat(so)
    });
    Ar && document.addEventListener("selectionchange", function() {
        var e = document.activeElement;
        e && e.vmodel && hn(e, "input")
    });
    var No = {
        inserted: function(e, t, n, r) {
            "select" === n.tag ? (r.elm && !r.elm._vOptions ? X(n, "postpatch", function() {
                No.componentUpdated(e, t, n)
            }) : cn(e, t, n.context),
            e._vOptions = [].map.call(e.options, fn)) : ("textarea" === n.tag || eo(e.type)) && (e._vModifiers = t.modifiers,
            t.modifiers.lazy || (e.addEventListener("compositionstart", dn),
            e.addEventListener("compositionend", pn),
            e.addEventListener("change", pn),
            Ar && (e.vmodel = !0)))
        },
        componentUpdated: function(e, t, n) {
            if ("select" === n.tag) {
                cn(e, t, n.context);
                var r = e._vOptions
                  , i = e._vOptions = [].map.call(e.options, fn);
                i.some(function(e, t) {
                    return !y(e, r[t])
                }) && (e.multiple ? t.value.some(function(e) {
                    return ln(e, i)
                }) : t.value !== t.oldValue && ln(t.value, i)) && hn(e, "change")
            }
        }
    }
      , Lo = {
        model: No,
        show: {
            bind: function(e, t, n) {
                var r = t.value
                  , i = (n = mn(n)).data && n.data.transition
                  , o = e.__vOriginalDisplay = "none" === e.style.display ? "" : e.style.display;
                r && i ? (n.data.show = !0,
                nn(n, function() {
                    e.style.display = o
                })) : e.style.display = r ? o : "none"
            },
            update: function(e, t, n) {
                var r = t.value;
                !r != !t.oldValue && ((n = mn(n)).data && n.data.transition ? (n.data.show = !0,
                r ? nn(n, function() {
                    e.style.display = e.__vOriginalDisplay
                }) : rn(n, function() {
                    e.style.display = "none"
                })) : e.style.display = r ? e.__vOriginalDisplay : "none")
            },
            unbind: function(e, t, n, r, i) {
                i || (e.style.display = e.__vOriginalDisplay)
            }
        }
    }
      , Fo = {
        name: String,
        appear: Boolean,
        css: Boolean,
        mode: String,
        type: String,
        enterClass: String,
        leaveClass: String,
        enterToClass: String,
        leaveToClass: String,
        enterActiveClass: String,
        leaveActiveClass: String,
        appearClass: String,
        appearActiveClass: String,
        appearToClass: String,
        duration: [Number, String, Object]
    }
      , Mo = function(e) {
        return e.tag || Te(e)
    }
      , qo = function(e) {
        return "show" === e.name
    }
      , Uo = {
        name: "transition",
        props: Fo,
        abstract: !0,
        render: function(e) {
            var t = this
              , n = this.$slots["default"];
            if (n && (n = n.filter(Mo)).length) {
                var i = this.mode
                  , o = n[0];
                if (function(e) {
                    for (; e = e.parent; )
                        if (e.data.transition)
                            return !0
                }(this.$vnode))
                    return o;
                var a = gn(o);
                if (!a)
                    return o;
                if (this._leaving)
                    return yn(e, o);
                var s = "__transition-" + this._uid + "-";
                a.key = null == a.key ? a.isComment ? s + "comment" : s + a.tag : r(a.key) ? 0 === String(a.key).indexOf(s) ? a.key : s + a.key : a.key;
                var c = (a.data || (a.data = {})).transition = vn(this)
                  , u = this._vnode
                  , l = gn(u);
                if (a.data.directives && a.data.directives.some(qo) && (a.data.show = !0),
                l && l.data && !function(e, t) {
                    return t.key === e.key && t.tag === e.tag
                }(a, l) && !Te(l) && (!l.componentInstance || !l.componentInstance._vnode.isComment)) {
                    var f = l.data.transition = m({}, c);
                    if ("out-in" === i)
                        return this._leaving = !0,
                        X(f, "afterLeave", function() {
                            t._leaving = !1,
                            t.$forceUpdate()
                        }),
                        yn(e, o);
                    if ("in-out" === i) {
                        if (Te(a))
                            return u;
                        var d, p = function() {
                            d()
                        };
                        X(c, "afterEnter", p),
                        X(c, "enterCancelled", p),
                        X(f, "delayLeave", function(e) {
                            d = e
                        })
                    }
                }
                return o
            }
        }
    }
      , zo = m({
        tag: String,
        moveClass: String
    }, Fo);
    delete zo.mode;
    var Bo = {
        Transition: Uo,
        TransitionGroup: {
            props: zo,
            beforeMount: function() {
                var e = this
                  , t = this._update;
                this._update = function(n, r) {
                    var i = Re(e);
                    e.__patch__(e._vnode, e.kept, !1, !0),
                    e._vnode = e.kept,
                    i(),
                    t.call(e, n, r)
                }
            },
            render: function(e) {
                for (var t = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), r = this.prevChildren = this.children, i = this.$slots["default"] || [], o = this.children = [], a = vn(this), s = 0; s < i.length; s++) {
                    var c = i[s];
                    c.tag && null != c.key && 0 !== String(c.key).indexOf("__vlist") && (o.push(c),
                    n[c.key] = c,
                    (c.data || (c.data = {})).transition = a)
                }
                if (r) {
                    for (var u = [], l = [], f = 0; f < r.length; f++) {
                        var d = r[f];
                        d.data.transition = a,
                        d.data.pos = d.elm.getBoundingClientRect(),
                        n[d.key] ? u.push(d) : l.push(d)
                    }
                    this.kept = e(t, null, u),
                    this.removed = l
                }
                return e(t, null, o)
            },
            updated: function() {
                var e = this.prevChildren
                  , t = this.moveClass || (this.name || "v") + "-move";
                e.length && this.hasMove(e[0].elm, t) && (e.forEach(bn),
                e.forEach(_n),
                e.forEach(wn),
                this._reflow = document.body.offsetHeight,
                e.forEach(function(e) {
                    if (e.data.moved) {
                        var n = e.elm
                          , r = n.style;
                        Gt(n, t),
                        r.transform = r.WebkitTransform = r.transitionDuration = "",
                        n.addEventListener(Io, n._moveCb = function i(e) {
                            e && e.target !== n || e && !/transform$/.test(e.propertyName) || (n.removeEventListener(Io, i),
                            n._moveCb = null,
                            Xt(n, t))
                        }
                        )
                    }
                }))
            },
            methods: {
                hasMove: function(e, t) {
                    if (!Co)
                        return !1;
                    if (this._hasMove)
                        return this._hasMove;
                    var n = e.cloneNode();
                    e._transitionClasses && e._transitionClasses.forEach(function(e) {
                        Qt(n, e)
                    }),
                    Vt(n, t),
                    n.style.display = "none",
                    this.$el.appendChild(n);
                    var r = Zt(n);
                    return this.$el.removeChild(n),
                    this._hasMove = r.hasTransform
                }
            }
        }
    };
    Qe.config.mustUseProp = qi,
    Qe.config.isReservedTag = Ji,
    Qe.config.isReservedAttr = Fi,
    Qe.config.getTagNamespace = rt,
    Qe.config.isUnknownElement = function(e) {
        if (!_r)
            return !0;
        if (Ji(e))
            return !1;
        if (e = e.toLowerCase(),
        null != Zi[e])
            return Zi[e];
        var t = document.createElement(e);
        return e.indexOf("-") > -1 ? Zi[e] = t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement : Zi[e] = /HTMLUnknownElement/.test(t.toString())
    }
    ,
    m(Qe.options.directives, Lo),
    m(Qe.options.components, Bo),
    Qe.prototype.__patch__ = _r ? Ro : v,
    Qe.prototype.$mount = function(e, t) {
        return function(e, t, n) {
            return e.$el = t,
            e.$options.render || (e.$options.render = zr),
            Fe(e, "beforeMount"),
            new ki(e,function() {
                e._update(e._render(), n)
            }
            ,v,{
                before: function() {
                    e._isMounted && !e._isDestroyed && Fe(e, "beforeUpdate")
                }
            },!0),
            n = !1,
            null == e.$vnode && (e._isMounted = !0,
            Fe(e, "mounted")),
            e
        }(this, e = e && _r ? it(e) : void 0, t)
    }
    ,
    _r && setTimeout(function() {
        gr.devtools && Pr && Pr.emit("init", Qe)
    }, 0);
    var Ho, Wo, Vo, Qo, Ko, Yo, Go, Xo, Jo, Zo, ea, ta = /\{\{((?:.|\r?\n)+?)\}\}/g, na = /[-.*+?^${}()|[\]\/\\]/g, ra = p(function(e) {
        var t = e[0].replace(na, "\\$&")
          , n = e[1].replace(na, "\\$&");
        return new RegExp(t + "((?:.|\\n)+?)" + n,"g")
    }), ia = {
        staticKeys: ["staticClass"],
        transformNode: function(e, t) {
            t.warn;
            var n = Et(e, "class");
            n && (e.staticClass = JSON.stringify(n));
            var r = Ct(e, "class", !1);
            r && (e.classBinding = r)
        },
        genData: function(e) {
            var t = "";
            return e.staticClass && (t += "staticClass:" + e.staticClass + ","),
            e.classBinding && (t += "class:" + e.classBinding + ","),
            t
        }
    }, oa = {
        staticKeys: ["staticStyle"],
        transformNode: function(e, t) {
            t.warn;
            var n = Et(e, "style");
            n && (e.staticStyle = JSON.stringify(vo(n)));
            var r = Ct(e, "style", !1);
            r && (e.styleBinding = r)
        },
        genData: function(e) {
            var t = "";
            return e.staticStyle && (t += "staticStyle:" + e.staticStyle + ","),
            e.styleBinding && (t += "style:(" + e.styleBinding + "),"),
            t
        }
    }, aa = function(e) {
        return (Ho = Ho || document.createElement("div")).innerHTML = e,
        Ho.textContent
    }, sa = l("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"), ca = l("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"), ua = l("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"), la = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/, fa = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/, da = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + vr.source + "]*", pa = "((?:" + da + "\\:)?" + da + ")", ha = new RegExp("^<" + pa), ma = /^\s*(\/?)>/, ga = new RegExp("^<\\/" + pa + "[^>]*>"), va = /^<!DOCTYPE [^>]+>/i, ya = /^<!\--/, ba = /^<!\[/, _a = l("script,style,textarea", !0), wa = {}, xa = {
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&amp;": "&",
        "&#10;": "\n",
        "&#9;": "\t",
        "&#39;": "'"
    }, ka = /&(?:lt|gt|quot|amp|#39);/g, Sa = /&(?:lt|gt|quot|amp|#39|#10|#9);/g, Aa = l("pre,textarea", !0), Ca = function(e, t) {
        return e && Aa(e) && "\n" === t[0]
    }, Ea = /^@|^v-on:/, $a = /^v-|^@|^:|^#/, Ta = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/, Ia = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/, Oa = /^\(|\)$/g, Da = /^\[.*\]$/, ja = /:(.*)$/, Pa = /^:|^\.|^v-bind:/, Ra = /\.[^.\]]+(?=[^\]]*$)/g, Na = /^v-slot(:|$)|^#/, La = /[\r\n]/, Fa = /\s+/g, Ma = p(aa), qa = "_empty_", Ua = /^xmlns:NS\d+/, za = /^NS\d+:/, Ba = [ia, oa, {
        preTransformNode: function(e, t) {
            if ("input" === e.tag) {
                var n, r = e.attrsMap;
                if (!r["v-model"])
                    return;
                if ((r[":type"] || r["v-bind:type"]) && (n = Ct(e, "type")),
                r.type || n || !r["v-bind"] || (n = "(" + r["v-bind"] + ").type"),
                n) {
                    var i = Et(e, "v-if", !0)
                      , o = i ? "&&(" + i + ")" : ""
                      , a = null != Et(e, "v-else", !0)
                      , s = Et(e, "v-else-if", !0)
                      , c = On(e);
                    Cn(c),
                    xt(c, "type", "checkbox"),
                    An(c, t),
                    c.processed = !0,
                    c["if"] = "(" + n + ")==='checkbox'" + o,
                    En(c, {
                        exp: c["if"],
                        block: c
                    });
                    var u = On(e);
                    Et(u, "v-for", !0),
                    xt(u, "type", "radio"),
                    An(u, t),
                    En(c, {
                        exp: "(" + n + ")==='radio'" + o,
                        block: u
                    });
                    var l = On(e);
                    return Et(l, "v-for", !0),
                    xt(l, ":type", n),
                    An(l, t),
                    En(c, {
                        exp: i,
                        block: l
                    }),
                    a ? c["else"] = !0 : s && (c.elseif = s),
                    c
                }
            }
        }
    }], Ha = {
        expectHTML: !0,
        modules: Ba,
        directives: {
            model: function(e, t) {
                var n = t.value
                  , r = t.modifiers
                  , i = e.tag
                  , o = e.attrsMap.type;
                if (e.component)
                    return It(e, n, r),
                    !1;
                if ("select" === i)
                    !function(e, t) {
                        var n = 'var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' + (r && r.number ? "_n(val)" : "val") + "});";
                        At(e, "change", n = n + " " + Ot(t, "$event.target.multiple ? $$selectedVal : $$selectedVal[0]"), null, !0)
                    }(e, n);
                else if ("input" === i && "checkbox" === o)
                    !function(e, t, n) {
                        var r = n && n.number
                          , i = Ct(e, "value") || "null"
                          , o = Ct(e, "true-value") || "true"
                          , a = Ct(e, "false-value") || "false";
                        _t(e, "checked", "Array.isArray(" + t + ")?_i(" + t + "," + i + ")>-1" + ("true" === o ? ":(" + t + ")" : ":_q(" + t + "," + o + ")")),
                        At(e, "change", "var $$a=" + t + ",$$el=$event.target,$$c=$$el.checked?(" + o + "):(" + a + ");if(Array.isArray($$a)){var $$v=" + (r ? "_n(" + i + ")" : i) + ",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&(" + Ot(t, "$$a.concat([$$v])") + ")}else{$$i>-1&&(" + Ot(t, "$$a.slice(0,$$i).concat($$a.slice($$i+1))") + ")}}else{" + Ot(t, "$$c") + "}", null, !0)
                    }(e, n, r);
                else if ("input" === i && "radio" === o)
                    !function(e, t, n) {
                        var r = n && n.number
                          , i = Ct(e, "value") || "null";
                        _t(e, "checked", "_q(" + t + "," + (i = r ? "_n(" + i + ")" : i) + ")"),
                        At(e, "change", Ot(t, i), null, !0)
                    }(e, n, r);
                else if ("input" === i || "textarea" === i)
                    !function(e, t, n) {
                        var r = e.attrsMap.type
                          , i = n || {}
                          , o = i.lazy
                          , a = i.number
                          , s = i.trim
                          , c = !o && "range" !== r
                          , u = o ? "change" : "range" === r ? fo : "input"
                          , l = "$event.target.value";
                        s && (l = "$event.target.value.trim()"),
                        a && (l = "_n(" + l + ")");
                        var f = Ot(t, l);
                        c && (f = "if($event.target.composing)return;" + f),
                        _t(e, "value", "(" + t + ")"),
                        At(e, u, f, null, !0),
                        (s || a) && At(e, "blur", "$forceUpdate()")
                    }(e, n, r);
                else if (!gr.isReservedTag(i))
                    return It(e, n, r),
                    !1;
                return !0
            },
            text: function(e, t) {
                t.value && _t(e, "textContent", "_s(" + t.value + ")", t)
            },
            html: function(e, t) {
                t.value && _t(e, "innerHTML", "_s(" + t.value + ")", t)
            }
        },
        isPreTag: function(e) {
            return "pre" === e
        },
        isUnaryTag: sa,
        mustUseProp: qi,
        canBeLeftOpenTag: ca,
        isReservedTag: Ji,
        getTagNamespace: rt,
        staticKeys: Ba.reduce(function(e, t) {
            return e.concat(t.staticKeys || [])
        }, []).join(",")
    }, Wa = p(function(e) {
        return l("type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap" + (e ? "," + e : ""))
    }), Va = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/, Qa = /\([^)]*?\);*$/, Ka = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/, Ya = {
        esc: 27,
        tab: 9,
        enter: 13,
        space: 32,
        up: 38,
        left: 37,
        right: 39,
        down: 40,
        "delete": [8, 46]
    }, Ga = {
        esc: ["Esc", "Escape"],
        tab: "Tab",
        enter: "Enter",
        space: [" ", "Spacebar"],
        up: ["Up", "ArrowUp"],
        left: ["Left", "ArrowLeft"],
        right: ["Right", "ArrowRight"],
        down: ["Down", "ArrowDown"],
        "delete": ["Backspace", "Delete", "Del"]
    }, Xa = function(e) {
        return "if(" + e + ")return null;"
    }, Ja = {
        stop: "$event.stopPropagation();",
        prevent: "$event.preventDefault();",
        self: Xa("$event.target !== $event.currentTarget"),
        ctrl: Xa("!$event.ctrlKey"),
        shift: Xa("!$event.shiftKey"),
        alt: Xa("!$event.altKey"),
        meta: Xa("!$event.metaKey"),
        left: Xa("'button' in $event && $event.button !== 0"),
        middle: Xa("'button' in $event && $event.button !== 1"),
        right: Xa("'button' in $event && $event.button !== 2")
    }, Za = {
        on: function(e, t) {
            e.wrapListeners = function(e) {
                return "_g(" + e + "," + t.value + ")"
            }
        },
        bind: function(e, t) {
            e.wrapData = function(n) {
                return "_b(" + n + ",'" + e.tag + "'," + t.value + "," + (t.modifiers && t.modifiers.prop ? "true" : "false") + (t.modifiers && t.modifiers.sync ? ",true" : "") + ")"
            }
        },
        cloak: v
    }, es = function(e) {
        this.options = e,
        this.warn = e.warn || yt,
        this.transforms = bt(e.modules, "transformCode"),
        this.dataGenFns = bt(e.modules, "genData"),
        this.directives = m(m({}, Za), e.directives);
        var t = e.isReservedTag || fr;
        this.maybeComponent = function(e) {
            return !!e.component || !t(e.tag)
        }
        ,
        this.onceId = 0,
        this.staticRenderFns = [],
        this.pre = !1
    };
    new RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b") + "\\b");
    var ts, ns, rs = (ts = function(e, t) {
        var n = Sn(e.trim(), t);
        !1 !== t.optimize && Dn(n, t);
        var r = Nn(n, t);
        return {
            ast: n,
            render: r.render,
            staticRenderFns: r.staticRenderFns
        }
    }
    ,
    function(e) {
        function t(t, n) {
            var r = Object.create(e)
              , i = []
              , o = [];
            if (n)
                for (var a in n.modules && (r.modules = (e.modules || []).concat(n.modules)),
                n.directives && (r.directives = m(Object.create(e.directives || null), n.directives)),
                n)
                    "modules" !== a && "directives" !== a && (r[a] = n[a]);
            r.warn = function(e, t, n) {
                (n ? o : i).push(e)
            }
            ;
            var s = ts(t.trim(), r);
            return s.errors = i,
            s.tips = o,
            s
        }
        return {
            compile: t,
            compileToFunctions: Xn(t)
        }
    }
    )(Ha), is = (rs.compile,
    rs.compileToFunctions), os = !!_r && Jn(!1), as = !!_r && Jn(!0), ss = p(function(e) {
        var t = it(e);
        return t && t.innerHTML
    }), cs = Qe.prototype.$mount;
    return Qe.prototype.$mount = function(e, t) {
        if ((e = e && it(e)) === document.body || e === document.documentElement)
            return this;
        var n = this.$options;
        if (!n.render) {
            var r = n.template;
            if (r)
                if ("string" == typeof r)
                    "#" === r.charAt(0) && (r = ss(r));
                else {
                    if (!r.nodeType)
                        return this;
                    r = r.innerHTML
                }
            else
                e && (r = function(e) {
                    if (e.outerHTML)
                        return e.outerHTML;
                    var t = document.createElement("div");
                    return t.appendChild(e.cloneNode(!0)),
                    t.innerHTML
                }(e));
            if (r) {
                var i = is(r, {
                    outputSourceRange: !1,
                    shouldDecodeNewlines: os,
                    shouldDecodeNewlinesForHref: as,
                    delimiters: n.delimiters,
                    comments: n.comments
                }, this)
                  , o = i.render
                  , a = i.staticRenderFns;
                n.render = o,
                n.staticRenderFns = a
            }
        }
        return cs.call(this, e, t)
    }
    ,
    Qe.compile = is,
    Qe
}),
Vue.directive("load", {
    bind: function(e, t, n) {
        "select" === n.tag ? _.set(n.context, t.expression, n.elm.options[n.elm.selectedIndex].value) : _.set(n.context, t.expression, n.data.attrs.value)
    }
}),
function(e, t) {
    "use strict";
    function n(e, n) {
        r(e);
        var i = n.value;
        if ("function" == typeof i) {
            var a = !1;
            setTimeout(function() {
                a = !0
            }, 0),
            e[o] = function(t) {
                if (a && !e.contains(t.target))
                    return i(t)
            }
            ,
            document.documentElement.addEventListener("click", e[o], !1)
        } else
            t.util.warn("v-" + n.name + '="' + n.expression + '" expects a function value, got ' + i)
    }
    function r(e) {
        document.documentElement.removeEventListener("click", e[o], !1),
        delete e[o]
    }
    t = "default"in t ? t["default"] : t;
    var i = "2.1.0";
    /^2\./.test(t.version) || t.util.warn("VueClickaway " + i + " only supports Vue 2.x, and does not support Vue " + t.version);
    var o = "_vue_clickaway_handler"
      , a = {
        bind: n,
        update: function(e, t) {
            t.value !== t.oldValue && n(e, t)
        },
        unbind: r
    }
      , s = {
        directives: {
            onClickaway: a
        }
    };
    e.version = i,
    e.directive = a,
    e.mixin = s
}(this.VueClickaway = {}, Vue),
Vue.directive("on-clickaway", VueClickaway.directive),
function(e) {
    var t = "object" == typeof self && self.self === self && self || "object" == typeof global && global.global === global && global;
    if ("function" == typeof define && define.amd)
        define(["underscore", "jquery", "exports"], function(n, r, i) {
            t.Backbone = e(t, i, n, r)
        });
    else if ("undefined" != typeof exports) {
        var n, r = require("underscore");
        try {
            n = require("jquery")
        } catch (i) {}
        e(t, exports, r, n)
    } else
        t.Backbone = e(t, {}, t._, t.jQuery || t.Zepto || t.ender || t.$)
}(function(e, t, n, r) {
    var i = e.Backbone
      , o = Array.prototype.slice;
    t.VERSION = "1.3.3",
    t.$ = r,
    t.noConflict = function() {
        return e.Backbone = i,
        this
    }
    ,
    t.emulateHTTP = !1,
    t.emulateJSON = !1;
    var a = function(e, t, r) {
        switch (e) {
        case 1:
            return function() {
                return n[t](this[r])
            }
            ;
        case 2:
            return function(e) {
                return n[t](this[r], e)
            }
            ;
        case 3:
            return function(e, i) {
                return n[t](this[r], c(e, this), i)
            }
            ;
        case 4:
            return function(e, i, o) {
                return n[t](this[r], c(e, this), i, o)
            }
            ;
        default:
            return function() {
                var e = o.call(arguments);
                return e.unshift(this[r]),
                n[t].apply(n, e)
            }
        }
    }
      , s = function(e, t, r) {
        n.each(t, function(t, i) {
            n[i] && (e.prototype[i] = a(t, i, r))
        })
    }
      , c = function(e, t) {
        return n.isFunction(e) ? e : n.isObject(e) && !t._isModel(e) ? u(e) : n.isString(e) ? function(t) {
            return t.get(e)
        }
        : e
    }
      , u = function(e) {
        var t = n.matches(e);
        return function(e) {
            return t(e.attributes)
        }
    }
      , l = t.Events = {}
      , f = /\s+/
      , d = function(e, t, r, i, o) {
        var a, s = 0;
        if (r && "object" == typeof r) {
            void 0 !== i && "context"in o && void 0 === o.context && (o.context = i);
            for (a = n.keys(r); s < a.length; s++)
                t = d(e, t, a[s], r[a[s]], o)
        } else if (r && f.test(r))
            for (a = r.split(f); s < a.length; s++)
                t = e(t, a[s], i, o);
        else
            t = e(t, r, i, o);
        return t
    };
    l.on = function(e, t, n) {
        return p(this, e, t, n)
    }
    ;
    var p = function(e, t, n, r, i) {
        (e._events = d(h, e._events || {}, t, n, {
            context: r,
            ctx: e,
            listening: i
        }),
        i) && ((e._listeners || (e._listeners = {}))[i.id] = i);
        return e
    };
    l.listenTo = function(e, t, r) {
        if (!e)
            return this;
        var i = e._listenId || (e._listenId = n.uniqueId("l"))
          , o = this._listeningTo || (this._listeningTo = {})
          , a = o[i];
        if (!a) {
            var s = this._listenId || (this._listenId = n.uniqueId("l"));
            a = o[i] = {
                obj: e,
                objId: i,
                id: s,
                listeningTo: o,
                count: 0
            }
        }
        return p(e, t, r, this, a),
        this
    }
    ;
    var h = function(e, t, n, r) {
        if (n) {
            var i = e[t] || (e[t] = [])
              , o = r.context
              , a = r.ctx
              , s = r.listening;
            s && s.count++,
            i.push({
                callback: n,
                context: o,
                ctx: o || a,
                listening: s
            })
        }
        return e
    };
    l.off = function(e, t, n) {
        return this._events ? (this._events = d(m, this._events, e, t, {
            context: n,
            listeners: this._listeners
        }),
        this) : this
    }
    ,
    l.stopListening = function(e, t, r) {
        var i = this._listeningTo;
        if (!i)
            return this;
        for (var o = e ? [e._listenId] : n.keys(i), a = 0; a < o.length; a++) {
            var s = i[o[a]];
            if (!s)
                break;
            s.obj.off(t, r, this)
        }
        return this
    }
    ;
    var m = function(e, t, r, i) {
        if (e) {
            var o, a = 0, s = i.context, c = i.listeners;
            if (t || r || s) {
                for (var u = t ? [t] : n.keys(e); a < u.length; a++) {
                    var l = e[t = u[a]];
                    if (!l)
                        break;
                    for (var f = [], d = 0; d < l.length; d++) {
                        var p = l[d];
                        r && r !== p.callback && r !== p.callback._callback || s && s !== p.context ? f.push(p) : (o = p.listening) && 0 == --o.count && (delete c[o.id],
                        delete o.listeningTo[o.objId])
                    }
                    f.length ? e[t] = f : delete e[t]
                }
                return e
            }
            for (var h = n.keys(c); a < h.length; a++)
                delete c[(o = c[h[a]]).id],
                delete o.listeningTo[o.objId]
        }
    };
    l.once = function(e, t, r) {
        var i = d(g, {}, e, t, n.bind(this.off, this));
        return "string" == typeof e && null == r && (t = void 0),
        this.on(i, t, r)
    }
    ,
    l.listenToOnce = function(e, t, r) {
        var i = d(g, {}, t, r, n.bind(this.stopListening, this, e));
        return this.listenTo(e, i)
    }
    ;
    var g = function(e, t, r, i) {
        if (r) {
            var o = e[t] = n.once(function() {
                i(t, o),
                r.apply(this, arguments)
            });
            o._callback = r
        }
        return e
    };
    l.trigger = function(e) {
        if (!this._events)
            return this;
        for (var t = Math.max(0, arguments.length - 1), n = Array(t), r = 0; r < t; r++)
            n[r] = arguments[r + 1];
        return d(v, this._events, e, void 0, n),
        this
    }
    ;
    var v = function(e, t, n, r) {
        if (e) {
            var i = e[t]
              , o = e.all;
            i && o && (o = o.slice()),
            i && y(i, r),
            o && y(o, [t].concat(r))
        }
        return e
    }
      , y = function(e, t) {
        var n, r = -1, i = e.length, o = t[0], a = t[1], s = t[2];
        switch (t.length) {
        case 0:
            for (; ++r < i; )
                (n = e[r]).callback.call(n.ctx);
            return;
        case 1:
            for (; ++r < i; )
                (n = e[r]).callback.call(n.ctx, o);
            return;
        case 2:
            for (; ++r < i; )
                (n = e[r]).callback.call(n.ctx, o, a);
            return;
        case 3:
            for (; ++r < i; )
                (n = e[r]).callback.call(n.ctx, o, a, s);
            return;
        default:
            for (; ++r < i; )
                (n = e[r]).callback.apply(n.ctx, t);
            return
        }
    };
    l.bind = l.on,
    l.unbind = l.off,
    n.extend(t, l);
    var b = t.Model = function(e, t) {
        var r = e || {};
        t || (t = {}),
        this.cid = n.uniqueId(this.cidPrefix),
        this.attributes = {},
        t.collection && (this.collection = t.collection),
        t.parse && (r = this.parse(r, t) || {});
        var i = n.result(this, "defaults");
        r = n.defaults(n.extend({}, i, r), i),
        this.set(r, t),
        this.changed = {},
        this.initialize.apply(this, arguments)
    }
    ;
    n.extend(b.prototype, l, {
        changed: null,
        validationError: null,
        idAttribute: "id",
        cidPrefix: "c",
        initialize: function() {},
        toJSON: function() {
            return n.clone(this.attributes)
        },
        sync: function() {
            return t.sync.apply(this, arguments)
        },
        get: function(e) {
            return this.attributes[e]
        },
        escape: function(e) {
            return n.escape(this.get(e))
        },
        has: function(e) {
            return null != this.get(e)
        },
        matches: function(e) {
            return !!n.iteratee(e, this)(this.attributes)
        },
        set: function(e, t, r) {
            if (null == e)
                return this;
            var i;
            if ("object" == typeof e ? (i = e,
            r = t) : (i = {})[e] = t,
            r || (r = {}),
            !this._validate(i, r))
                return !1;
            var o = r.unset
              , a = r.silent
              , s = []
              , c = this._changing;
            this._changing = !0,
            c || (this._previousAttributes = n.clone(this.attributes),
            this.changed = {});
            var u = this.attributes
              , l = this.changed
              , f = this._previousAttributes;
            for (var d in i)
                t = i[d],
                n.isEqual(u[d], t) || s.push(d),
                n.isEqual(f[d], t) ? delete l[d] : l[d] = t,
                o ? delete u[d] : u[d] = t;
            if (this.idAttribute in i && (this.id = this.get(this.idAttribute)),
            !a) {
                s.length && (this._pending = r);
                for (var p = 0; p < s.length; p++)
                    this.trigger("change:" + s[p], this, u[s[p]], r)
            }
            if (c)
                return this;
            if (!a)
                for (; this._pending; )
                    r = this._pending,
                    this._pending = !1,
                    this.trigger("change", this, r);
            return this._pending = !1,
            this._changing = !1,
            this
        },
        unset: function(e, t) {
            return this.set(e, void 0, n.extend({}, t, {
                unset: !0
            }))
        },
        clear: function(e) {
            var t = {};
            for (var r in this.attributes)
                t[r] = void 0;
            return this.set(t, n.extend({}, e, {
                unset: !0
            }))
        },
        hasChanged: function(e) {
            return null == e ? !n.isEmpty(this.changed) : n.has(this.changed, e)
        },
        changedAttributes: function(e) {
            if (!e)
                return !!this.hasChanged() && n.clone(this.changed);
            var t = this._changing ? this._previousAttributes : this.attributes
              , r = {};
            for (var i in e) {
                var o = e[i];
                n.isEqual(t[i], o) || (r[i] = o)
            }
            return !!n.size(r) && r
        },
        previous: function(e) {
            return null != e && this._previousAttributes ? this._previousAttributes[e] : null
        },
        previousAttributes: function() {
            return n.clone(this._previousAttributes)
        },
        fetch: function(e) {
            e = n.extend({
                parse: !0
            }, e);
            var t = this
              , r = e.success;
            return e.success = function(n) {
                var i = e.parse ? t.parse(n, e) : n;
                if (!t.set(i, e))
                    return !1;
                r && r.call(e.context, t, n, e),
                t.trigger("sync", t, n, e)
            }
            ,
            M(this, e),
            this.sync("read", this, e)
        },
        save: function(e, t, r) {
            var i;
            null == e || "object" == typeof e ? (i = e,
            r = t) : (i = {})[e] = t;
            var o = (r = n.extend({
                validate: !0,
                parse: !0
            }, r)).wait;
            if (i && !o) {
                if (!this.set(i, r))
                    return !1
            } else if (!this._validate(i, r))
                return !1;
            var a = this
              , s = r.success
              , c = this.attributes;
            r.success = function(e) {
                a.attributes = c;
                var t = r.parse ? a.parse(e, r) : e;
                if (o && (t = n.extend({}, i, t)),
                t && !a.set(t, r))
                    return !1;
                s && s.call(r.context, a, e, r),
                a.trigger("sync", a, e, r)
            }
            ,
            M(this, r),
            i && o && (this.attributes = n.extend({}, c, i));
            var u = this.isNew() ? "create" : r.patch ? "patch" : "update";
            "patch" !== u || r.attrs || (r.attrs = i);
            var l = this.sync(u, this, r);
            return this.attributes = c,
            l
        },
        destroy: function(e) {
            e = e ? n.clone(e) : {};
            var t = this
              , r = e.success
              , i = e.wait
              , o = function() {
                t.stopListening(),
                t.trigger("destroy", t, t.collection, e)
            };
            e.success = function(n) {
                i && o(),
                r && r.call(e.context, t, n, e),
                t.isNew() || t.trigger("sync", t, n, e)
            }
            ;
            var a = !1;
            return this.isNew() ? n.defer(e.success) : (M(this, e),
            a = this.sync("delete", this, e)),
            i || o(),
            a
        },
        url: function() {
            var e = n.result(this, "urlRoot") || n.result(this.collection, "url") || F();
            if (this.isNew())
                return e;
            var t = this.get(this.idAttribute);
            return e.replace(/[^\/]$/, "$&/") + encodeURIComponent(t)
        },
        parse: function(e) {
            return e
        },
        clone: function() {
            return new this.constructor(this.attributes)
        },
        isNew: function() {
            return !this.has(this.idAttribute)
        },
        isValid: function(e) {
            return this._validate({}, n.extend({}, e, {
                validate: !0
            }))
        },
        _validate: function(e, t) {
            if (!t.validate || !this.validate)
                return !0;
            e = n.extend({}, this.attributes, e);
            var r = this.validationError = this.validate(e, t) || null;
            return !r || (this.trigger("invalid", this, r, n.extend(t, {
                validationError: r
            })),
            !1)
        }
    }),
    s(b, {
        keys: 1,
        values: 1,
        pairs: 1,
        invert: 1,
        pick: 0,
        omit: 0,
        chain: 1,
        isEmpty: 1
    }, "attributes");
    var _ = t.Collection = function(e, t) {
        t || (t = {}),
        t.model && (this.model = t.model),
        void 0 !== t.comparator && (this.comparator = t.comparator),
        this._reset(),
        this.initialize.apply(this, arguments),
        e && this.reset(e, n.extend({
            silent: !0
        }, t))
    }
      , w = {
        add: !0,
        remove: !0,
        merge: !0
    }
      , x = {
        add: !0,
        remove: !1
    }
      , k = function(e, t, n) {
        n = Math.min(Math.max(n, 0), e.length);
        var r, i = Array(e.length - n), o = t.length;
        for (r = 0; r < i.length; r++)
            i[r] = e[r + n];
        for (r = 0; r < o; r++)
            e[r + n] = t[r];
        for (r = 0; r < i.length; r++)
            e[r + o + n] = i[r]
    };
    n.extend(_.prototype, l, {
        model: b,
        initialize: function() {},
        toJSON: function(e) {
            return this.map(function(t) {
                return t.toJSON(e)
            })
        },
        sync: function() {
            return t.sync.apply(this, arguments)
        },
        add: function(e, t) {
            return this.set(e, n.extend({
                merge: !1
            }, t, x))
        },
        remove: function(e, t) {
            t = n.extend({}, t);
            var r = !n.isArray(e);
            e = r ? [e] : e.slice();
            var i = this._removeModels(e, t);
            return !t.silent && i.length && (t.changes = {
                added: [],
                merged: [],
                removed: i
            },
            this.trigger("update", this, t)),
            r ? i[0] : i
        },
        set: function(e, t) {
            if (null != e) {
                (t = n.extend({}, w, t)).parse && !this._isModel(e) && (e = this.parse(e, t) || []);
                var r = !n.isArray(e);
                e = r ? [e] : e.slice();
                var i = t.at;
                null != i && (i = +i),
                i > this.length && (i = this.length),
                i < 0 && (i += this.length + 1);
                var o, a, s = [], c = [], u = [], l = [], f = {}, d = t.add, p = t.merge, h = t.remove, m = !1, g = this.comparator && null == i && !1 !== t.sort, v = n.isString(this.comparator) ? this.comparator : null;
                for (a = 0; a < e.length; a++) {
                    o = e[a];
                    var y = this.get(o);
                    if (y) {
                        if (p && o !== y) {
                            var b = this._isModel(o) ? o.attributes : o;
                            t.parse && (b = y.parse(b, t)),
                            y.set(b, t),
                            u.push(y),
                            g && !m && (m = y.hasChanged(v))
                        }
                        f[y.cid] || (f[y.cid] = !0,
                        s.push(y)),
                        e[a] = y
                    } else
                        d && (o = e[a] = this._prepareModel(o, t)) && (c.push(o),
                        this._addReference(o, t),
                        f[o.cid] = !0,
                        s.push(o))
                }
                if (h) {
                    for (a = 0; a < this.length; a++)
                        f[(o = this.models[a]).cid] || l.push(o);
                    l.length && this._removeModels(l, t)
                }
                var _ = !1
                  , x = !g && d && h;
                if (s.length && x ? (_ = this.length !== s.length || n.some(this.models, function(e, t) {
                    return e !== s[t]
                }),
                this.models.length = 0,
                k(this.models, s, 0),
                this.length = this.models.length) : c.length && (g && (m = !0),
                k(this.models, c, null == i ? this.length : i),
                this.length = this.models.length),
                m && this.sort({
                    silent: !0
                }),
                !t.silent) {
                    for (a = 0; a < c.length; a++)
                        null != i && (t.index = i + a),
                        (o = c[a]).trigger("add", o, this, t);
                    (m || _) && this.trigger("sort", this, t),
                    (c.length || l.length || u.length) && (t.changes = {
                        added: c,
                        removed: l,
                        merged: u
                    },
                    this.trigger("update", this, t))
                }
                return r ? e[0] : e
            }
        },
        reset: function(e, t) {
            t = t ? n.clone(t) : {};
            for (var r = 0; r < this.models.length; r++)
                this._removeReference(this.models[r], t);
            return t.previousModels = this.models,
            this._reset(),
            e = this.add(e, n.extend({
                silent: !0
            }, t)),
            t.silent || this.trigger("reset", this, t),
            e
        },
        push: function(e, t) {
            return this.add(e, n.extend({
                at: this.length
            }, t))
        },
        pop: function(e) {
            var t = this.at(this.length - 1);
            return this.remove(t, e)
        },
        unshift: function(e, t) {
            return this.add(e, n.extend({
                at: 0
            }, t))
        },
        shift: function(e) {
            var t = this.at(0);
            return this.remove(t, e)
        },
        slice: function() {
            return o.apply(this.models, arguments)
        },
        get: function(e) {
            if (null != e)
                return this._byId[e] || this._byId[this.modelId(e.attributes || e)] || e.cid && this._byId[e.cid]
        },
        has: function(e) {
            return null != this.get(e)
        },
        at: function(e) {
            return e < 0 && (e += this.length),
            this.models[e]
        },
        where: function(e, t) {
            return this[t ? "find" : "filter"](e)
        },
        findWhere: function(e) {
            return this.where(e, !0)
        },
        sort: function(e) {
            var t = this.comparator;
            if (!t)
                throw new Error("Cannot sort a set without a comparator");
            e || (e = {});
            var r = t.length;
            return n.isFunction(t) && (t = n.bind(t, this)),
            1 === r || n.isString(t) ? this.models = this.sortBy(t) : this.models.sort(t),
            e.silent || this.trigger("sort", this, e),
            this
        },
        pluck: function(e) {
            return this.map(e + "")
        },
        fetch: function(e) {
            var t = (e = n.extend({
                parse: !0
            }, e)).success
              , r = this;
            return e.success = function(n) {
                var i = e.reset ? "reset" : "set";
                r[i](n, e),
                t && t.call(e.context, r, n, e),
                r.trigger("sync", r, n, e)
            }
            ,
            M(this, e),
            this.sync("read", this, e)
        },
        create: function(e, t) {
            var r = (t = t ? n.clone(t) : {}).wait;
            if (!(e = this._prepareModel(e, t)))
                return !1;
            r || this.add(e, t);
            var i = this
              , o = t.success;
            return t.success = function(e, t, n) {
                r && i.add(e, n),
                o && o.call(n.context, e, t, n)
            }
            ,
            e.save(null, t),
            e
        },
        parse: function(e) {
            return e
        },
        clone: function() {
            return new this.constructor(this.models,{
                model: this.model,
                comparator: this.comparator
            })
        },
        modelId: function(e) {
            return e[this.model.prototype.idAttribute || "id"]
        },
        _reset: function() {
            this.length = 0,
            this.models = [],
            this._byId = {}
        },
        _prepareModel: function(e, t) {
            if (this._isModel(e))
                return e.collection || (e.collection = this),
                e;
            (t = t ? n.clone(t) : {}).collection = this;
            var r = new this.model(e,t);
            return r.validationError ? (this.trigger("invalid", this, r.validationError, t),
            !1) : r
        },
        _removeModels: function(e, t) {
            for (var n = [], r = 0; r < e.length; r++) {
                var i = this.get(e[r]);
                if (i) {
                    var o = this.indexOf(i);
                    this.models.splice(o, 1),
                    this.length--,
                    delete this._byId[i.cid];
                    var a = this.modelId(i.attributes);
                    null != a && delete this._byId[a],
                    t.silent || (t.index = o,
                    i.trigger("remove", i, this, t)),
                    n.push(i),
                    this._removeReference(i, t)
                }
            }
            return n
        },
        _isModel: function(e) {
            return e instanceof b
        },
        _addReference: function(e) {
            this._byId[e.cid] = e;
            var t = this.modelId(e.attributes);
            null != t && (this._byId[t] = e),
            e.on("all", this._onModelEvent, this)
        },
        _removeReference: function(e) {
            delete this._byId[e.cid];
            var t = this.modelId(e.attributes);
            null != t && delete this._byId[t],
            this === e.collection && delete e.collection,
            e.off("all", this._onModelEvent, this)
        },
        _onModelEvent: function(e, t, n, r) {
            if (t) {
                if (("add" === e || "remove" === e) && n !== this)
                    return;
                if ("destroy" === e && this.remove(t, r),
                "change" === e) {
                    var i = this.modelId(t.previousAttributes())
                      , o = this.modelId(t.attributes);
                    i !== o && (null != i && delete this._byId[i],
                    null != o && (this._byId[o] = t))
                }
            }
            this.trigger.apply(this, arguments)
        }
    }),
    s(_, {
        forEach: 3,
        each: 3,
        map: 3,
        collect: 3,
        reduce: 0,
        foldl: 0,
        inject: 0,
        reduceRight: 0,
        foldr: 0,
        find: 3,
        detect: 3,
        filter: 3,
        select: 3,
        reject: 3,
        every: 3,
        all: 3,
        some: 3,
        any: 3,
        include: 3,
        includes: 3,
        contains: 3,
        invoke: 0,
        max: 3,
        min: 3,
        toArray: 1,
        size: 1,
        first: 3,
        head: 3,
        take: 3,
        initial: 3,
        rest: 3,
        tail: 3,
        drop: 3,
        last: 3,
        without: 0,
        difference: 0,
        indexOf: 3,
        shuffle: 1,
        lastIndexOf: 3,
        isEmpty: 1,
        chain: 1,
        sample: 3,
        partition: 3,
        groupBy: 3,
        countBy: 3,
        sortBy: 3,
        indexBy: 3,
        findIndex: 3,
        findLastIndex: 3
    }, "models");
    var S = t.View = function(e) {
        this.cid = n.uniqueId("view"),
        n.extend(this, n.pick(e, C)),
        this._ensureElement(),
        this.initialize.apply(this, arguments)
    }
      , A = /^(\S+)\s*(.*)$/
      , C = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
    n.extend(S.prototype, l, {
        tagName: "div",
        $: function(e) {
            return this.$el.find(e)
        },
        initialize: function() {},
        render: function() {
            return this
        },
        remove: function() {
            return this._removeElement(),
            this.stopListening(),
            this
        },
        _removeElement: function() {
            this.$el.remove()
        },
        setElement: function(e) {
            return this.undelegateEvents(),
            this._setElement(e),
            this.delegateEvents(),
            this
        },
        _setElement: function(e) {
            this.$el = e instanceof t.$ ? e : t.$(e),
            this.el = this.$el[0]
        },
        delegateEvents: function(e) {
            if (e || (e = n.result(this, "events")),
            !e)
                return this;
            for (var t in this.undelegateEvents(),
            e) {
                var r = e[t];
                if (n.isFunction(r) || (r = this[r]),
                r) {
                    var i = t.match(A);
                    this.delegate(i[1], i[2], n.bind(r, this))
                }
            }
            return this
        },
        delegate: function(e, t, n) {
            return this.$el.on(e + ".delegateEvents" + this.cid, t, n),
            this
        },
        undelegateEvents: function() {
            return this.$el && this.$el.off(".delegateEvents" + this.cid),
            this
        },
        undelegate: function(e, t, n) {
            return this.$el.off(e + ".delegateEvents" + this.cid, t, n),
            this
        },
        _createElement: function(e) {
            return document.createElement(e)
        },
        _ensureElement: function() {
            if (this.el)
                this.setElement(n.result(this, "el"));
            else {
                var e = n.extend({}, n.result(this, "attributes"));
                this.id && (e.id = n.result(this, "id")),
                this.className && (e["class"] = n.result(this, "className")),
                this.setElement(this._createElement(n.result(this, "tagName"))),
                this._setAttributes(e)
            }
        },
        _setAttributes: function(e) {
            this.$el.attr(e)
        }
    }),
    t.sync = function(e, r, i) {
        var o = E[e];
        n.defaults(i || (i = {}), {
            emulateHTTP: t.emulateHTTP,
            emulateJSON: t.emulateJSON
        });
        var a = {
            type: o,
            dataType: "json"
        };
        if (i.url || (a.url = n.result(r, "url") || F()),
        null != i.data || !r || "create" !== e && "update" !== e && "patch" !== e || (a.contentType = "application/json",
        a.data = JSON.stringify(i.attrs || r.toJSON(i))),
        i.emulateJSON && (a.contentType = "application/x-www-form-urlencoded",
        a.data = a.data ? {
            model: a.data
        } : {}),
        i.emulateHTTP && ("PUT" === o || "DELETE" === o || "PATCH" === o)) {
            a.type = "POST",
            i.emulateJSON && (a.data._method = o);
            var s = i.beforeSend;
            i.beforeSend = function(e) {
                if (e.setRequestHeader("X-HTTP-Method-Override", o),
                s)
                    return s.apply(this, arguments)
            }
        }
        "GET" === a.type || i.emulateJSON || (a.processData = !1);
        var c = i.error;
        i.error = function(e, t, n) {
            i.textStatus = t,
            i.errorThrown = n,
            c && c.call(i.context, e, t, n)
        }
        ;
        var u = i.xhr = t.ajax(n.extend(a, i));
        return r.trigger("request", r, u, i),
        u
    }
    ;
    var E = {
        create: "POST",
        update: "PUT",
        patch: "PATCH",
        "delete": "DELETE",
        read: "GET"
    };
    t.ajax = function() {
        return t.$.ajax.apply(t.$, arguments)
    }
    ;
    var $ = t.Router = function(e) {
        e || (e = {}),
        e.routes && (this.routes = e.routes),
        this._bindRoutes(),
        this.initialize.apply(this, arguments)
    }
      , T = /\((.*?)\)/g
      , I = /(\(\?)?:\w+/g
      , O = /\*\w+/g
      , D = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    n.extend($.prototype, l, {
        initialize: function() {},
        route: function(e, r, i) {
            n.isRegExp(e) || (e = this._routeToRegExp(e)),
            n.isFunction(r) && (i = r,
            r = ""),
            i || (i = this[r]);
            var o = this;
            return t.history.route(e, function(n) {
                var a = o._extractParameters(e, n);
                !1 !== o.execute(i, a, r) && (o.trigger.apply(o, ["route:" + r].concat(a)),
                o.trigger("route", r, a),
                t.history.trigger("route", o, r, a))
            }),
            this
        },
        execute: function(e, t) {
            e && e.apply(this, t)
        },
        navigate: function(e, n) {
            return t.history.navigate(e, n),
            this
        },
        _bindRoutes: function() {
            if (this.routes) {
                this.routes = n.result(this, "routes");
                for (var e, t = n.keys(this.routes); null != (e = t.pop()); )
                    this.route(e, this.routes[e])
            }
        },
        _routeToRegExp: function(e) {
            return e = e.replace(D, "\\$&").replace(T, "(?:$1)?").replace(I, function(e, t) {
                return t ? e : "([^/?]+)"
            }).replace(O, "([^?]*?)"),
            new RegExp("^" + e + "(?:\\?([\\s\\S]*))?$")
        },
        _extractParameters: function(e, t) {
            var r = e.exec(t).slice(1);
            return n.map(r, function(e, t) {
                return t === r.length - 1 ? e || null : e ? decodeURIComponent(e) : null
            })
        }
    });
    var j = t.History = function() {
        this.handlers = [],
        this.checkUrl = n.bind(this.checkUrl, this),
        "undefined" != typeof window && (this.location = window.location,
        this.history = window.history)
    }
      , P = /^[#\/]|\s+$/g
      , R = /^\/+|\/+$/g
      , N = /#.*$/;
    j.started = !1,
    n.extend(j.prototype, l, {
        interval: 50,
        atRoot: function() {
            return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root && !this.getSearch()
        },
        matchRoot: function() {
            return this.decodeFragment(this.location.pathname).slice(0, this.root.length - 1) + "/" === this.root
        },
        decodeFragment: function(e) {
            return decodeURI(e.replace(/%25/g, "%2525"))
        },
        getSearch: function() {
            var e = this.location.href.replace(/#.*/, "").match(/\?.+/);
            return e ? e[0] : ""
        },
        getHash: function(e) {
            var t = (e || this).location.href.match(/#(.*)$/);
            return t ? t[1] : ""
        },
        getPath: function() {
            var e = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1);
            return "/" === e.charAt(0) ? e.slice(1) : e
        },
        getFragment: function(e) {
            return null == e && (e = this._usePushState || !this._wantsHashChange ? this.getPath() : this.getHash()),
            e.replace(P, "")
        },
        start: function(e) {
            if (j.started)
                throw new Error("Backbone.history has already been started");
            if (j.started = !0,
            this.options = n.extend({
                root: "/"
            }, this.options, e),
            this.root = this.options.root,
            this._wantsHashChange = !1 !== this.options.hashChange,
            this._hasHashChange = "onhashchange"in window && (void 0 === document.documentMode || document.documentMode > 7),
            this._useHashChange = this._wantsHashChange && this._hasHashChange,
            this._wantsPushState = !!this.options.pushState,
            this._hasPushState = !(!this.history || !this.history.pushState),
            this._usePushState = this._wantsPushState && this._hasPushState,
            this.fragment = this.getFragment(),
            this.root = ("/" + this.root + "/").replace(R, "/"),
            this._wantsHashChange && this._wantsPushState) {
                if (!this._hasPushState && !this.atRoot()) {
                    var t = this.root.slice(0, -1) || "/";
                    return this.location.replace(t + "#" + this.getPath()),
                    !0
                }
                this._hasPushState && this.atRoot() && this.navigate(this.getHash(), {
                    replace: !0
                })
            }
            if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
                this.iframe = document.createElement("iframe"),
                this.iframe.src = "javascript:0",
                this.iframe.style.display = "none",
                this.iframe.tabIndex = -1;
                var r = document.body
                  , i = r.insertBefore(this.iframe, r.firstChild).contentWindow;
                i.document.open(),
                i.document.close(),
                i.location.hash = "#" + this.fragment
            }
            var o = window.addEventListener || function(e, t) {
                return attachEvent("on" + e, t)
            }
            ;
            if (this._usePushState ? o("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe ? o("hashchange", this.checkUrl, !1) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)),
            !this.options.silent)
                return this.loadUrl()
        },
        stop: function() {
            var e = window.removeEventListener || function(e, t) {
                return detachEvent("on" + e, t)
            }
            ;
            this._usePushState ? e("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe && e("hashchange", this.checkUrl, !1),
            this.iframe && (document.body.removeChild(this.iframe),
            this.iframe = null),
            this._checkUrlInterval && clearInterval(this._checkUrlInterval),
            j.started = !1
        },
        route: function(e, t) {
            this.handlers.unshift({
                route: e,
                callback: t
            })
        },
        checkUrl: function() {
            var e = this.getFragment();
            if (e === this.fragment && this.iframe && (e = this.getHash(this.iframe.contentWindow)),
            e === this.fragment)
                return !1;
            this.iframe && this.navigate(e),
            this.loadUrl()
        },
        loadUrl: function(e) {
            return !!this.matchRoot() && (e = this.fragment = this.getFragment(e),
            n.some(this.handlers, function(t) {
                if (t.route.test(e))
                    return t.callback(e),
                    !0
            }))
        },
        navigate: function(e, t) {
            if (!j.started)
                return !1;
            t && !0 !== t || (t = {
                trigger: !!t
            }),
            e = this.getFragment(e || "");
            var n = this.root;
            "" !== e && "?" !== e.charAt(0) || (n = n.slice(0, -1) || "/");
            var r = n + e;
            if (e = this.decodeFragment(e.replace(N, "")),
            this.fragment !== e) {
                if (this.fragment = e,
                this._usePushState)
                    this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, r);
                else {
                    if (!this._wantsHashChange)
                        return this.location.assign(r);
                    if (this._updateHash(this.location, e, t.replace),
                    this.iframe && e !== this.getHash(this.iframe.contentWindow)) {
                        var i = this.iframe.contentWindow;
                        t.replace || (i.document.open(),
                        i.document.close()),
                        this._updateHash(i.location, e, t.replace)
                    }
                }
                return t.trigger ? this.loadUrl(e) : void 0
            }
        },
        _updateHash: function(e, t, n) {
            if (n) {
                var r = e.href.replace(/(javascript:|#).*$/, "");
                e.replace(r + "#" + t)
            } else
                e.hash = "#" + t
        }
    }),
    t.history = new j;
    var L = function(e, t) {
        var r, i = this;
        return r = e && n.has(e, "constructor") ? e.constructor : function() {
            return i.apply(this, arguments)
        }
        ,
        n.extend(r, i, t),
        r.prototype = n.create(i.prototype, e),
        r.prototype.constructor = r,
        r.__super__ = i.prototype,
        r
    };
    b.extend = _.extend = $.extend = S.extend = j.extend = L;
    var F = function() {
        throw new Error('A "url" property or function must be specified')
    }
      , M = function(e, t) {
        var n = t.error;
        t.error = function(r) {
            n && n.call(t.context, e, r, t),
            e.trigger("error", e, r, t)
        }
    };
    return t
}),
Backbone.KeyboardView = Backbone.View.extend({
    keyboardBindings: [],
    bindKeyboardEvents: function() {
        var e = this;
        _.each(e.keyboardEvents, function(t, n) {
            var r = n.split(" ");
            this.keyboardBindings = Mousetrap.bind(r[0], function(n) {
                e[t](n)
            }, r[1])
        }),
        _.each(e.globalKeyboardEvents, function(t, n) {
            var r = n.split(" ");
            this.keyboardBindings = Mousetrap.bindGlobal(r[0], function(n) {
                e[t](n)
            }, r[1])
        })
    },
    keyboardEvents: {},
    globalKeyboardEvents: {}
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
}(function(e) {
    var t = function() {
        if (e && e.fn && e.fn.select2 && e.fn.select2.amd)
            var t = e.fn.select2.amd;
        var n;
        return function() {
            var e, n, r;
            t && t.requirejs || (t ? n = t : t = {},
            function(t) {
                function i(e, t) {
                    return _.call(e, t)
                }
                function o(e, t) {
                    var n, r, i, o, a, s, c, u, l, f, d, p = t && t.split("/"), h = y.map, m = h && h["*"] || {};
                    if (e && "." === e.charAt(0))
                        if (t) {
                            for (a = (e = e.split("/")).length - 1,
                            y.nodeIdCompat && x.test(e[a]) && (e[a] = e[a].replace(x, "")),
                            e = p.slice(0, p.length - 1).concat(e),
                            l = 0; l < e.length; l += 1)
                                if ("." === (d = e[l]))
                                    e.splice(l, 1),
                                    l -= 1;
                                else if (".." === d) {
                                    if (1 === l && (".." === e[2] || ".." === e[0]))
                                        break;
                                    l > 0 && (e.splice(l - 1, 2),
                                    l -= 2)
                                }
                            e = e.join("/")
                        } else
                            0 === e.indexOf("./") && (e = e.substring(2));
                    if ((p || m) && h) {
                        for (l = (n = e.split("/")).length; l > 0; l -= 1) {
                            if (r = n.slice(0, l).join("/"),
                            p)
                                for (f = p.length; f > 0; f -= 1)
                                    if ((i = h[p.slice(0, f).join("/")]) && (i = i[r])) {
                                        o = i,
                                        s = l;
                                        break
                                    }
                            if (o)
                                break;
                            !c && m && m[r] && (c = m[r],
                            u = l)
                        }
                        !o && c && (o = c,
                        s = u),
                        o && (n.splice(0, s, o),
                        e = n.join("/"))
                    }
                    return e
                }
                function a(e, n) {
                    return function() {
                        var r = w.call(arguments, 0);
                        return "string" != typeof r[0] && 1 === r.length && r.push(null),
                        p.apply(t, r.concat([e, n]))
                    }
                }
                function s(e) {
                    return function(t) {
                        return o(t, e)
                    }
                }
                function c(e) {
                    return function(t) {
                        g[e] = t
                    }
                }
                function u(e) {
                    if (i(v, e)) {
                        var n = v[e];
                        delete v[e],
                        b[e] = !0,
                        d.apply(t, n)
                    }
                    if (!i(g, e) && !i(b, e))
                        throw new Error("No " + e);
                    return g[e]
                }
                function l(e) {
                    var t, n = e ? e.indexOf("!") : -1;
                    return n > -1 && (t = e.substring(0, n),
                    e = e.substring(n + 1, e.length)),
                    [t, e]
                }
                function f(e) {
                    return function() {
                        return y && y.config && y.config[e] || {}
                    }
                }
                var d, p, h, m, g = {}, v = {}, y = {}, b = {}, _ = Object.prototype.hasOwnProperty, w = [].slice, x = /\.js$/;
                h = function(e, t) {
                    var n, r = l(e), i = r[0];
                    return e = r[1],
                    i && (n = u(i = o(i, t))),
                    i ? e = n && n.normalize ? n.normalize(e, s(t)) : o(e, t) : (i = (r = l(e = o(e, t)))[0],
                    e = r[1],
                    i && (n = u(i))),
                    {
                        f: i ? i + "!" + e : e,
                        n: e,
                        pr: i,
                        p: n
                    }
                }
                ,
                m = {
                    require: function(e) {
                        return a(e)
                    },
                    exports: function(e) {
                        var t = g[e];
                        return void 0 !== t ? t : g[e] = {}
                    },
                    module: function(e) {
                        return {
                            id: e,
                            uri: "",
                            exports: g[e],
                            config: f(e)
                        }
                    }
                },
                d = function(e, n, r, o) {
                    var s, l, f, d, p, y, _ = [], w = typeof r;
                    if (o = o || e,
                    "undefined" === w || "function" === w) {
                        for (n = !n.length && r.length ? ["require", "exports", "module"] : n,
                        p = 0; p < n.length; p += 1)
                            if ("require" === (l = (d = h(n[p], o)).f))
                                _[p] = m.require(e);
                            else if ("exports" === l)
                                _[p] = m.exports(e),
                                y = !0;
                            else if ("module" === l)
                                s = _[p] = m.module(e);
                            else if (i(g, l) || i(v, l) || i(b, l))
                                _[p] = u(l);
                            else {
                                if (!d.p)
                                    throw new Error(e + " missing " + l);
                                d.p.load(d.n, a(o, !0), c(l), {}),
                                _[p] = g[l]
                            }
                        f = r ? r.apply(g[e], _) : void 0,
                        e && (s && s.exports !== t && s.exports !== g[e] ? g[e] = s.exports : f === t && y || (g[e] = f))
                    } else
                        e && (g[e] = r)
                }
                ,
                e = n = p = function(e, n, r, i, o) {
                    if ("string" == typeof e)
                        return m[e] ? m[e](n) : u(h(e, n).f);
                    if (!e.splice) {
                        if ((y = e).deps && p(y.deps, y.callback),
                        !n)
                            return;
                        n.splice ? (e = n,
                        n = r,
                        r = null) : e = t
                    }
                    return n = n || function() {}
                    ,
                    "function" == typeof r && (r = i,
                    i = o),
                    i ? d(t, e, n, r) : setTimeout(function() {
                        d(t, e, n, r)
                    }, 4),
                    p
                }
                ,
                p.config = function(e) {
                    return p(e)
                }
                ,
                e._defined = g,
                (r = function(e, t, n) {
                    if ("string" != typeof e)
                        throw new Error("See almond README: incorrect module build, no module name");
                    t.splice || (n = t,
                    t = []),
                    i(g, e) || i(v, e) || (v[e] = [e, t, n])
                }
                ).amd = {
                    jQuery: !0
                }
            }(),
            t.requirejs = e,
            t.require = n,
            t.define = r)
        }(),
        t.define("almond", function() {}),
        t.define("jquery", [], function() {
            var t = e || $;
            return null == t && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),
            t
        }),
        t.define("select2/utils", ["jquery"], function(e) {
            function t(e) {
                var t = e.prototype
                  , n = [];
                for (var r in t) {
                    "function" == typeof t[r] && "constructor" !== r && n.push(r)
                }
                return n
            }
            var n = {
                Extend: function(e, t) {
                    function n() {
                        this.constructor = e
                    }
                    var r = {}.hasOwnProperty;
                    for (var i in t)
                        r.call(t, i) && (e[i] = t[i]);
                    return n.prototype = t.prototype,
                    e.prototype = new n,
                    e.__super__ = t.prototype,
                    e
                },
                Decorate: function(e, n) {
                    function r() {
                        var t = Array.prototype.unshift
                          , r = n.prototype.constructor.length
                          , i = e.prototype.constructor;
                        r > 0 && (t.call(arguments, e.prototype.constructor),
                        i = n.prototype.constructor),
                        i.apply(this, arguments)
                    }
                    function i() {
                        this.constructor = r
                    }
                    var o = t(n)
                      , a = t(e);
                    n.displayName = e.displayName,
                    r.prototype = new i;
                    for (var s = 0; s < a.length; s++) {
                        var c = a[s];
                        r.prototype[c] = e.prototype[c]
                    }
                    for (var u = function(e) {
                        var t = function() {};
                        e in r.prototype && (t = r.prototype[e]);
                        var i = n.prototype[e];
                        return function() {
                            return Array.prototype.unshift.call(arguments, t),
                            i.apply(this, arguments)
                        }
                    }, l = 0; l < o.length; l++) {
                        var f = o[l];
                        r.prototype[f] = u(f)
                    }
                    return r
                }
            }
              , r = function() {
                this.listeners = {}
            };
            return r.prototype.on = function(e, t) {
                this.listeners = this.listeners || {},
                e in this.listeners ? this.listeners[e].push(t) : this.listeners[e] = [t]
            }
            ,
            r.prototype.trigger = function(e) {
                var t = Array.prototype.slice
                  , n = t.call(arguments, 1);
                this.listeners = this.listeners || {},
                null == n && (n = []),
                0 === n.length && n.push({}),
                n[0]._type = e,
                e in this.listeners && this.invoke(this.listeners[e], t.call(arguments, 1)),
                "*"in this.listeners && this.invoke(this.listeners["*"], arguments)
            }
            ,
            r.prototype.invoke = function(e, t) {
                for (var n = 0, r = e.length; r > n; n++)
                    e[n].apply(this, t)
            }
            ,
            n.Observable = r,
            n.generateChars = function(e) {
                for (var t = "", n = 0; e > n; n++) {
                    t += Math.floor(36 * Math.random()).toString(36)
                }
                return t
            }
            ,
            n.bind = function(e, t) {
                return function() {
                    e.apply(t, arguments)
                }
            }
            ,
            n._convertData = function(e) {
                for (var t in e) {
                    var n = t.split("-")
                      , r = e;
                    if (1 !== n.length) {
                        for (var i = 0; i < n.length; i++) {
                            var o = n[i];
                            (o = o.substring(0, 1).toLowerCase() + o.substring(1))in r || (r[o] = {}),
                            i == n.length - 1 && (r[o] = e[t]),
                            r = r[o]
                        }
                        delete e[t]
                    }
                }
                return e
            }
            ,
            n.hasScroll = function(t, n) {
                var r = e(n)
                  , i = n.style.overflowX
                  , o = n.style.overflowY;
                return (i !== o || "hidden" !== o && "visible" !== o) && ("scroll" === i || "scroll" === o || (r.innerHeight() < n.scrollHeight || r.innerWidth() < n.scrollWidth))
            }
            ,
            n.escapeMarkup = function(e) {
                var t = {
                    "\\": "&#92;",
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;",
                    "/": "&#47;"
                };
                return "string" != typeof e ? e : String(e).replace(/[&<>"'\/\\]/g, function(e) {
                    return t[e]
                })
            }
            ,
            n.appendMany = function(t, n) {
                if ("1.7" === e.fn.jquery.substr(0, 3)) {
                    var r = e();
                    e.map(n, function(e) {
                        r = r.add(e)
                    }),
                    n = r
                }
                t.append(n)
            }
            ,
            n
        }),
        t.define("select2/results", ["jquery", "./utils"], function(e, t) {
            function n(e, t, r) {
                this.$element = e,
                this.data = r,
                this.options = t,
                n.__super__.constructor.call(this)
            }
            return t.Extend(n, t.Observable),
            n.prototype.render = function() {
                var t = e('<ul class="select2-results__options" role="tree"></ul>');
                return this.options.get("multiple") && t.attr("aria-multiselectable", "true"),
                this.$results = t,
                t
            }
            ,
            n.prototype.clear = function() {
                this.$results.empty()
            }
            ,
            n.prototype.displayMessage = function(t) {
                var n = this.options.get("escapeMarkup");
                this.clear(),
                this.hideLoading();
                var r = e('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>')
                  , i = this.options.get("translations").get(t.message);
                r.append(n(i(t.args))),
                r[0].className += " select2-results__message",
                this.$results.append(r)
            }
            ,
            n.prototype.hideMessages = function() {
                this.$results.find(".select2-results__message").remove()
            }
            ,
            n.prototype.append = function(e) {
                this.hideLoading();
                var t = [];
                if (null != e.results && 0 !== e.results.length) {
                    e.results = this.sort(e.results);
                    for (var n = 0; n < e.results.length; n++) {
                        var r = e.results[n]
                          , i = this.option(r);
                        t.push(i)
                    }
                    this.$results.append(t)
                } else
                    0 === this.$results.children().length && this.trigger("results:message", {
                        message: "noResults"
                    })
            }
            ,
            n.prototype.position = function(e, t) {
                t.find(".select2-results").append(e)
            }
            ,
            n.prototype.sort = function(e) {
                return this.options.get("sorter")(e)
            }
            ,
            n.prototype.highlightFirstItem = function() {
                var e = this.$results.find(".select2-results__option[aria-selected]")
                  , t = e.filter("[aria-selected=true]");
                t.length > 0 ? t.first().trigger("mouseenter") : e.first().trigger("mouseenter"),
                this.ensureHighlightVisible()
            }
            ,
            n.prototype.setClasses = function() {
                var t = this;
                this.data.current(function(n) {
                    var r = e.map(n, function(e) {
                        return e.id.toString()
                    });
                    t.$results.find(".select2-results__option[aria-selected]").each(function() {
                        var t = e(this)
                          , n = e.data(this, "data")
                          , i = "" + n.id;
                        null != n.element && n.element.selected || null == n.element && e.inArray(i, r) > -1 ? t.attr("aria-selected", "true") : t.attr("aria-selected", "false")
                    })
                })
            }
            ,
            n.prototype.showLoading = function(e) {
                this.hideLoading();
                var t = {
                    disabled: !0,
                    loading: !0,
                    text: this.options.get("translations").get("searching")(e)
                }
                  , n = this.option(t);
                n.className += " loading-results",
                this.$results.prepend(n)
            }
            ,
            n.prototype.hideLoading = function() {
                this.$results.find(".loading-results").remove()
            }
            ,
            n.prototype.option = function(t) {
                var n = document.createElement("li");
                n.className = "select2-results__option";
                var r = {
                    role: "treeitem",
                    "aria-selected": "false"
                };
                for (var i in t.disabled && (delete r["aria-selected"],
                r["aria-disabled"] = "true"),
                null == t.id && delete r["aria-selected"],
                null != t._resultId && (n.id = t._resultId),
                t.title && (n.title = t.title),
                t.children && (r.role = "group",
                r["aria-label"] = t.text,
                delete r["aria-selected"]),
                r) {
                    var o = r[i];
                    n.setAttribute(i, o)
                }
                if (t.children) {
                    var a = e(n)
                      , s = document.createElement("strong");
                    s.className = "select2-results__group",
                    e(s),
                    this.template(t, s);
                    for (var c = [], u = 0; u < t.children.length; u++) {
                        var l = t.children[u]
                          , f = this.option(l);
                        c.push(f)
                    }
                    var d = e("<ul></ul>", {
                        "class": "select2-results__options select2-results__options--nested"
                    });
                    d.append(c),
                    a.append(s),
                    a.append(d)
                } else
                    this.template(t, n);
                return e.data(n, "data", t),
                n
            }
            ,
            n.prototype.bind = function(t) {
                var n = this
                  , r = t.id + "-results";
                this.$results.attr("id", r),
                t.on("results:all", function(e) {
                    n.clear(),
                    n.append(e.data),
                    t.isOpen() && (n.setClasses(),
                    n.highlightFirstItem())
                }),
                t.on("results:append", function(e) {
                    n.append(e.data),
                    t.isOpen() && n.setClasses()
                }),
                t.on("query", function(e) {
                    n.hideMessages(),
                    n.showLoading(e)
                }),
                t.on("select", function() {
                    t.isOpen() && (n.setClasses(),
                    n.highlightFirstItem())
                }),
                t.on("unselect", function() {
                    t.isOpen() && (n.setClasses(),
                    n.highlightFirstItem())
                }),
                t.on("open", function() {
                    n.$results.attr("aria-expanded", "true"),
                    n.$results.attr("aria-hidden", "false"),
                    n.setClasses(),
                    n.ensureHighlightVisible()
                }),
                t.on("close", function() {
                    n.$results.attr("aria-expanded", "false"),
                    n.$results.attr("aria-hidden", "true"),
                    n.$results.removeAttr("aria-activedescendant")
                }),
                t.on("results:toggle", function() {
                    var e = n.getHighlightedResults();
                    0 !== e.length && e.trigger("mouseup")
                }),
                t.on("results:select", function() {
                    var e = n.getHighlightedResults();
                    if (0 !== e.length) {
                        var t = e.data("data");
                        "true" == e.attr("aria-selected") ? n.trigger("close", {}) : n.trigger("select", {
                            data: t
                        })
                    }
                }),
                t.on("results:previous", function() {
                    var e = n.getHighlightedResults()
                      , t = n.$results.find("[aria-selected]")
                      , r = t.index(e);
                    if (0 !== r) {
                        var i = r - 1;
                        0 === e.length && (i = 0);
                        var o = t.eq(i);
                        o.trigger("mouseenter");
                        var a = n.$results.offset().top
                          , s = o.offset().top
                          , c = n.$results.scrollTop() + (s - a);
                        0 === i ? n.$results.scrollTop(0) : 0 > s - a && n.$results.scrollTop(c)
                    }
                }),
                t.on("results:next", function() {
                    var e = n.getHighlightedResults()
                      , t = n.$results.find("[aria-selected]")
                      , r = t.index(e) + 1;
                    if (!(r >= t.length)) {
                        var i = t.eq(r);
                        i.trigger("mouseenter");
                        var o = n.$results.offset().top + n.$results.outerHeight(!1)
                          , a = i.offset().top + i.outerHeight(!1)
                          , s = n.$results.scrollTop() + a - o;
                        0 === r ? n.$results.scrollTop(0) : a > o && n.$results.scrollTop(s)
                    }
                }),
                t.on("results:focus", function(e) {
                    e.element.addClass("select2-results__option--highlighted")
                }),
                t.on("results:message", function(e) {
                    n.displayMessage(e)
                }),
                e.fn.mousewheel && this.$results.on("mousewheel", function(e) {
                    var t = n.$results.scrollTop()
                      , r = n.$results.get(0).scrollHeight - t + e.deltaY
                      , i = e.deltaY > 0 && t - e.deltaY <= 0
                      , o = e.deltaY < 0 && r <= n.$results.height();
                    i ? (n.$results.scrollTop(0),
                    e.preventDefault(),
                    e.stopPropagation()) : o && (n.$results.scrollTop(n.$results.get(0).scrollHeight - n.$results.height()),
                    e.preventDefault(),
                    e.stopPropagation())
                }),
                this.$results.on("mouseup", ".select2-results__option[aria-selected]", function(t) {
                    var r = e(this)
                      , i = r.data("data");
                    return "true" === r.attr("aria-selected") ? void (n.options.get("multiple") ? n.trigger("unselect", {
                        originalEvent: t,
                        data: i
                    }) : n.trigger("close", {})) : void n.trigger("select", {
                        originalEvent: t,
                        data: i
                    })
                }),
                this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function() {
                    var t = e(this).data("data");
                    n.getHighlightedResults().removeClass("select2-results__option--highlighted"),
                    n.trigger("results:focus", {
                        data: t,
                        element: e(this)
                    })
                })
            }
            ,
            n.prototype.getHighlightedResults = function() {
                return this.$results.find(".select2-results__option--highlighted")
            }
            ,
            n.prototype.destroy = function() {
                this.$results.remove()
            }
            ,
            n.prototype.ensureHighlightVisible = function() {
                var e = this.getHighlightedResults();
                if (0 !== e.length) {
                    var t = this.$results.find("[aria-selected]").index(e)
                      , n = this.$results.offset().top
                      , r = e.offset().top
                      , i = this.$results.scrollTop() + (r - n)
                      , o = r - n;
                    i -= 2 * e.outerHeight(!1),
                    2 >= t ? this.$results.scrollTop(0) : (o > this.$results.outerHeight() || 0 > o) && this.$results.scrollTop(i)
                }
            }
            ,
            n.prototype.template = function(t, n) {
                var r = this.options.get("templateResult")
                  , i = this.options.get("escapeMarkup")
                  , o = r(t, n);
                null == o ? n.style.display = "none" : "string" == typeof o ? n.innerHTML = i(o) : e(n).append(o)
            }
            ,
            n
        }),
        t.define("select2/keys", [], function() {
            return {
                BACKSPACE: 8,
                TAB: 9,
                ENTER: 13,
                SHIFT: 16,
                CTRL: 17,
                ALT: 18,
                ESC: 27,
                SPACE: 32,
                PAGE_UP: 33,
                PAGE_DOWN: 34,
                END: 35,
                HOME: 36,
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40,
                DELETE: 46
            }
        }),
        t.define("select2/selection/base", ["jquery", "../utils", "../keys"], function(e, t, n) {
            function r(e, t) {
                this.$element = e,
                this.options = t,
                r.__super__.constructor.call(this)
            }
            return t.Extend(r, t.Observable),
            r.prototype.render = function() {
                var t = e('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                return this._tabindex = 0,
                null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")),
                t.attr("title", this.$element.attr("title")),
                t.attr("tabindex", this._tabindex),
                this.$selection = t,
                t
            }
            ,
            r.prototype.bind = function(e) {
                var t = this
                  , r = (e.id,
                e.id + "-results");
                this.container = e,
                this.$selection.on("focus", function(e) {
                    t.trigger("focus", e)
                }),
                this.$selection.on("blur", function(e) {
                    t._handleBlur(e)
                }),
                this.$selection.on("keydown", function(e) {
                    t.trigger("keypress", e),
                    e.which === n.SPACE && e.preventDefault()
                }),
                e.on("results:focus", function(e) {
                    t.$selection.attr("aria-activedescendant", e.data._resultId)
                }),
                e.on("selection:update", function(e) {
                    t.update(e.data)
                }),
                e.on("open", function() {
                    t.$selection.attr("aria-expanded", "true"),
                    t.$selection.attr("aria-owns", r),
                    t._attachCloseHandler(e)
                }),
                e.on("close", function() {
                    t.$selection.attr("aria-expanded", "false"),
                    t.$selection.removeAttr("aria-activedescendant"),
                    t.$selection.removeAttr("aria-owns"),
                    t.$selection.focus(),
                    t._detachCloseHandler(e)
                }),
                e.on("enable", function() {
                    t.$selection.attr("tabindex", t._tabindex)
                }),
                e.on("disable", function() {
                    t.$selection.attr("tabindex", "-1")
                })
            }
            ,
            r.prototype._handleBlur = function(t) {
                var n = this;
                window.setTimeout(function() {
                    document.activeElement == n.$selection[0] || e.contains(n.$selection[0], document.activeElement) || n.trigger("blur", t)
                }, 1)
            }
            ,
            r.prototype._attachCloseHandler = function(t) {
                e(document.body).on("mousedown.select2." + t.id, function(t) {
                    var n = e(t.target).closest(".select2");
                    e(".select2.select2-container--open").each(function() {
                        var t = e(this);
                        this != n[0] && t.data("element").select2("close")
                    })
                })
            }
            ,
            r.prototype._detachCloseHandler = function(t) {
                e(document.body).off("mousedown.select2." + t.id)
            }
            ,
            r.prototype.position = function(e, t) {
                t.find(".selection").append(e)
            }
            ,
            r.prototype.destroy = function() {
                this._detachCloseHandler(this.container)
            }
            ,
            r.prototype.update = function() {
                throw new Error("The `update` method must be defined in child classes.")
            }
            ,
            r
        }),
        t.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function(e, t, n) {
            function r() {
                r.__super__.constructor.apply(this, arguments)
            }
            return n.Extend(r, t),
            r.prototype.render = function() {
                var e = r.__super__.render.call(this);
                return e.addClass("select2-selection--single"),
                e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),
                e
            }
            ,
            r.prototype.bind = function(e) {
                var t = this;
                r.__super__.bind.apply(this, arguments);
                var n = e.id + "-container";
                this.$selection.find(".select2-selection__rendered").attr("id", n),
                this.$selection.attr("aria-labelledby", n),
                this.$selection.on("mousedown", function(e) {
                    1 === e.which && t.trigger("toggle", {
                        originalEvent: e
                    })
                }),
                this.$selection.on("focus", function() {}),
                this.$selection.on("blur", function() {}),
                e.on("focus", function() {
                    e.isOpen() || t.$selection.focus()
                }),
                e.on("selection:update", function(e) {
                    t.update(e.data)
                })
            }
            ,
            r.prototype.clear = function() {
                this.$selection.find(".select2-selection__rendered").empty()
            }
            ,
            r.prototype.display = function(e, t) {
                var n = this.options.get("templateSelection");
                return this.options.get("escapeMarkup")(n(e, t))
            }
            ,
            r.prototype.selectionContainer = function() {
                return e("<span></span>")
            }
            ,
            r.prototype.update = function(e) {
                if (0 !== e.length) {
                    var t = e[0]
                      , n = this.$selection.find(".select2-selection__rendered")
                      , r = this.display(t, n);
                    n.empty().append(r),
                    n.prop("title", t.title || t.text)
                } else
                    this.clear()
            }
            ,
            r
        }),
        t.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function(e, t, n) {
            function r() {
                r.__super__.constructor.apply(this, arguments)
            }
            return n.Extend(r, t),
            r.prototype.render = function() {
                var e = r.__super__.render.call(this);
                return e.addClass("select2-selection--multiple"),
                e.html('<ul class="select2-selection__rendered"></ul>'),
                e
            }
            ,
            r.prototype.bind = function() {
                var t = this;
                r.__super__.bind.apply(this, arguments),
                this.$selection.on("click", function(e) {
                    t.trigger("toggle", {
                        originalEvent: e
                    })
                }),
                this.$selection.on("click", ".select2-selection__choice__remove", function(n) {
                    if (!t.options.get("disabled")) {
                        var r = e(this).parent().data("data");
                        t.trigger("unselect", {
                            originalEvent: n,
                            data: r
                        })
                    }
                })
            }
            ,
            r.prototype.clear = function() {
                this.$selection.find(".select2-selection__rendered").empty()
            }
            ,
            r.prototype.display = function(e, t) {
                var n = this.options.get("templateSelection");
                return this.options.get("escapeMarkup")(n(e, t))
            }
            ,
            r.prototype.selectionContainer = function() {
                return e('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')
            }
            ,
            r.prototype.update = function(e) {
                if (this.clear(),
                0 !== e.length) {
                    for (var t = [], r = 0; r < e.length; r++) {
                        var i = e[r]
                          , o = this.selectionContainer()
                          , a = this.display(i, o);
                        o.append(a),
                        o.prop("title", i.title || i.text),
                        o.data("data", i),
                        t.push(o)
                    }
                    var s = this.$selection.find(".select2-selection__rendered");
                    n.appendMany(s, t)
                }
            }
            ,
            r
        }),
        t.define("select2/selection/placeholder", ["../utils"], function() {
            function e(e, t, n) {
                this.placeholder = this.normalizePlaceholder(n.get("placeholder")),
                e.call(this, t, n)
            }
            return e.prototype.normalizePlaceholder = function(e, t) {
                return "string" == typeof t && (t = {
                    id: "",
                    text: t
                }),
                t
            }
            ,
            e.prototype.createPlaceholder = function(e, t) {
                var n = this.selectionContainer();
                return n.html(this.display(t)),
                n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),
                n
            }
            ,
            e.prototype.update = function(e, t) {
                var n = 1 == t.length && t[0].id != this.placeholder.id;
                if (t.length > 1 || n)
                    return e.call(this, t);
                this.clear();
                var r = this.createPlaceholder(this.placeholder);
                this.$selection.find(".select2-selection__rendered").append(r)
            }
            ,
            e
        }),
        t.define("select2/selection/allowClear", ["jquery", "../keys"], function(e, t) {
            function n() {}
            return n.prototype.bind = function(e, t, n) {
                var r = this;
                e.call(this, t, n),
                null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),
                this.$selection.on("mousedown", ".select2-selection__clear", function(e) {
                    r._handleClear(e)
                }),
                t.on("keypress", function(e) {
                    r._handleKeyboardClear(e, t)
                })
            }
            ,
            n.prototype._handleClear = function(e, t) {
                if (!this.options.get("disabled")) {
                    var n = this.$selection.find(".select2-selection__clear");
                    if (0 !== n.length) {
                        t.stopPropagation();
                        for (var r = n.data("data"), i = 0; i < r.length; i++) {
                            var o = {
                                data: r[i]
                            };
                            if (this.trigger("unselect", o),
                            o.prevented)
                                return
                        }
                        this.$element.val(this.placeholder.id).trigger("change"),
                        this.trigger("toggle", {})
                    }
                }
            }
            ,
            n.prototype._handleKeyboardClear = function(e, n, r) {
                r.isOpen() || (n.which == t.DELETE || n.which == t.BACKSPACE) && this._handleClear(n)
            }
            ,
            n.prototype.update = function(t, n) {
                if (t.call(this, n),
                !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === n.length)) {
                    var r = e('<span class="select2-selection__clear">&times;</span>');
                    r.data("data", n),
                    this.$selection.find(".select2-selection__rendered").prepend(r)
                }
            }
            ,
            n
        }),
        t.define("select2/selection/search", ["jquery", "../utils", "../keys"], function(e, t, n) {
            function r(e, t, n) {
                e.call(this, t, n)
            }
            return r.prototype.render = function(t) {
                var n = e('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
                this.$searchContainer = n,
                this.$search = n.find("input");
                var r = t.call(this);
                return this._transferTabIndex(),
                r
            }
            ,
            r.prototype.bind = function(e, t, r) {
                var i = this;
                e.call(this, t, r),
                t.on("open", function() {
                    i.$search.trigger("focus")
                }),
                t.on("close", function() {
                    i.$search.val(""),
                    i.$search.removeAttr("aria-activedescendant"),
                    i.$search.trigger("focus")
                }),
                t.on("enable", function() {
                    i.$search.prop("disabled", !1),
                    i._transferTabIndex()
                }),
                t.on("disable", function() {
                    i.$search.prop("disabled", !0)
                }),
                t.on("focus", function() {
                    i.$search.trigger("focus")
                }),
                t.on("results:focus", function(e) {
                    i.$search.attr("aria-activedescendant", e.id)
                }),
                this.$selection.on("focusin", ".select2-search--inline", function(e) {
                    i.trigger("focus", e)
                }),
                this.$selection.on("focusout", ".select2-search--inline", function(e) {
                    i._handleBlur(e)
                }),
                this.$selection.on("keydown", ".select2-search--inline", function(e) {
                    if (e.stopPropagation(),
                    i.trigger("keypress", e),
                    i._keyUpPrevented = e.isDefaultPrevented(),
                    e.which === n.BACKSPACE && "" === i.$search.val()) {
                        var t = i.$searchContainer.prev(".select2-selection__choice");
                        if (t.length > 0) {
                            var r = t.data("data");
                            i.searchRemoveChoice(r),
                            e.preventDefault()
                        }
                    }
                });
                var o = document.documentMode
                  , a = o && 11 >= o;
                this.$selection.on("input.searchcheck", ".select2-search--inline", function() {
                    return a ? void i.$selection.off("input.search input.searchcheck") : void i.$selection.off("keyup.search")
                }),
                this.$selection.on("keyup.search input.search", ".select2-search--inline", function(e) {
                    if (a && "input" === e.type)
                        i.$selection.off("input.search input.searchcheck");
                    else {
                        var t = e.which;
                        t != n.SHIFT && t != n.CTRL && t != n.ALT && t != n.TAB && i.handleSearch(e)
                    }
                })
            }
            ,
            r.prototype._transferTabIndex = function() {
                this.$search.attr("tabindex", this.$selection.attr("tabindex")),
                this.$selection.attr("tabindex", "-1")
            }
            ,
            r.prototype.createPlaceholder = function(e, t) {
                this.$search.attr("placeholder", t.text)
            }
            ,
            r.prototype.update = function(e, t) {
                var n = this.$search[0] == document.activeElement;
                this.$search.attr("placeholder", ""),
                e.call(this, t),
                this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),
                this.resizeSearch(),
                n && this.$search.focus()
            }
            ,
            r.prototype.handleSearch = function() {
                if (this.resizeSearch(),
                !this._keyUpPrevented) {
                    var e = this.$search.val();
                    this.trigger("query", {
                        term: e
                    })
                }
                this._keyUpPrevented = !1
            }
            ,
            r.prototype.searchRemoveChoice = function(e, t) {
                this.trigger("unselect", {
                    data: t
                }),
                this.$search.val(t.text),
                this.handleSearch()
            }
            ,
            r.prototype.resizeSearch = function() {
                this.$search.css("width", "25px");
                var e = "";
                "" !== this.$search.attr("placeholder") ? e = this.$selection.find(".select2-selection__rendered").innerWidth() : e = .75 * (this.$search.val().length + 1) + "em";
                this.$search.css("width", e)
            }
            ,
            r
        }),
        t.define("select2/selection/eventRelay", ["jquery"], function(e) {
            function t() {}
            return t.prototype.bind = function(t, n, r) {
                var i = this
                  , o = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"]
                  , a = ["opening", "closing", "selecting", "unselecting"];
                t.call(this, n, r),
                n.on("*", function(t, n) {
                    if (-1 !== e.inArray(t, o)) {
                        n = n || {};
                        var r = e.Event("select2:" + t, {
                            params: n
                        });
                        i.$element.trigger(r),
                        -1 !== e.inArray(t, a) && (n.prevented = r.isDefaultPrevented())
                    }
                })
            }
            ,
            t
        }),
        t.define("select2/translation", ["jquery", "require"], function(e, t) {
            function n(e) {
                this.dict = e || {}
            }
            return n.prototype.all = function() {
                return this.dict
            }
            ,
            n.prototype.get = function(e) {
                return this.dict[e]
            }
            ,
            n.prototype.extend = function(t) {
                this.dict = e.extend({}, t.all(), this.dict)
            }
            ,
            n._cache = {},
            n.loadPath = function(e) {
                if (!(e in n._cache)) {
                    var r = t(e);
                    n._cache[e] = r
                }
                return new n(n._cache[e])
            }
            ,
            n
        }),
        t.define("select2/diacritics", [], function() {
            return {
                "\u24b6": "A",
                "\uff21": "A",
                "\xc0": "A",
                "\xc1": "A",
                "\xc2": "A",
                "\u1ea6": "A",
                "\u1ea4": "A",
                "\u1eaa": "A",
                "\u1ea8": "A",
                "\xc3": "A",
                "\u0100": "A",
                "\u0102": "A",
                "\u1eb0": "A",
                "\u1eae": "A",
                "\u1eb4": "A",
                "\u1eb2": "A",
                "\u0226": "A",
                "\u01e0": "A",
                "\xc4": "A",
                "\u01de": "A",
                "\u1ea2": "A",
                "\xc5": "A",
                "\u01fa": "A",
                "\u01cd": "A",
                "\u0200": "A",
                "\u0202": "A",
                "\u1ea0": "A",
                "\u1eac": "A",
                "\u1eb6": "A",
                "\u1e00": "A",
                "\u0104": "A",
                "\u023a": "A",
                "\u2c6f": "A",
                "\ua732": "AA",
                "\xc6": "AE",
                "\u01fc": "AE",
                "\u01e2": "AE",
                "\ua734": "AO",
                "\ua736": "AU",
                "\ua738": "AV",
                "\ua73a": "AV",
                "\ua73c": "AY",
                "\u24b7": "B",
                "\uff22": "B",
                "\u1e02": "B",
                "\u1e04": "B",
                "\u1e06": "B",
                "\u0243": "B",
                "\u0182": "B",
                "\u0181": "B",
                "\u24b8": "C",
                "\uff23": "C",
                "\u0106": "C",
                "\u0108": "C",
                "\u010a": "C",
                "\u010c": "C",
                "\xc7": "C",
                "\u1e08": "C",
                "\u0187": "C",
                "\u023b": "C",
                "\ua73e": "C",
                "\u24b9": "D",
                "\uff24": "D",
                "\u1e0a": "D",
                "\u010e": "D",
                "\u1e0c": "D",
                "\u1e10": "D",
                "\u1e12": "D",
                "\u1e0e": "D",
                "\u0110": "D",
                "\u018b": "D",
                "\u018a": "D",
                "\u0189": "D",
                "\ua779": "D",
                "\u01f1": "DZ",
                "\u01c4": "DZ",
                "\u01f2": "Dz",
                "\u01c5": "Dz",
                "\u24ba": "E",
                "\uff25": "E",
                "\xc8": "E",
                "\xc9": "E",
                "\xca": "E",
                "\u1ec0": "E",
                "\u1ebe": "E",
                "\u1ec4": "E",
                "\u1ec2": "E",
                "\u1ebc": "E",
                "\u0112": "E",
                "\u1e14": "E",
                "\u1e16": "E",
                "\u0114": "E",
                "\u0116": "E",
                "\xcb": "E",
                "\u1eba": "E",
                "\u011a": "E",
                "\u0204": "E",
                "\u0206": "E",
                "\u1eb8": "E",
                "\u1ec6": "E",
                "\u0228": "E",
                "\u1e1c": "E",
                "\u0118": "E",
                "\u1e18": "E",
                "\u1e1a": "E",
                "\u0190": "E",
                "\u018e": "E",
                "\u24bb": "F",
                "\uff26": "F",
                "\u1e1e": "F",
                "\u0191": "F",
                "\ua77b": "F",
                "\u24bc": "G",
                "\uff27": "G",
                "\u01f4": "G",
                "\u011c": "G",
                "\u1e20": "G",
                "\u011e": "G",
                "\u0120": "G",
                "\u01e6": "G",
                "\u0122": "G",
                "\u01e4": "G",
                "\u0193": "G",
                "\ua7a0": "G",
                "\ua77d": "G",
                "\ua77e": "G",
                "\u24bd": "H",
                "\uff28": "H",
                "\u0124": "H",
                "\u1e22": "H",
                "\u1e26": "H",
                "\u021e": "H",
                "\u1e24": "H",
                "\u1e28": "H",
                "\u1e2a": "H",
                "\u0126": "H",
                "\u2c67": "H",
                "\u2c75": "H",
                "\ua78d": "H",
                "\u24be": "I",
                "\uff29": "I",
                "\xcc": "I",
                "\xcd": "I",
                "\xce": "I",
                "\u0128": "I",
                "\u012a": "I",
                "\u012c": "I",
                "\u0130": "I",
                "\xcf": "I",
                "\u1e2e": "I",
                "\u1ec8": "I",
                "\u01cf": "I",
                "\u0208": "I",
                "\u020a": "I",
                "\u1eca": "I",
                "\u012e": "I",
                "\u1e2c": "I",
                "\u0197": "I",
                "\u24bf": "J",
                "\uff2a": "J",
                "\u0134": "J",
                "\u0248": "J",
                "\u24c0": "K",
                "\uff2b": "K",
                "\u1e30": "K",
                "\u01e8": "K",
                "\u1e32": "K",
                "\u0136": "K",
                "\u1e34": "K",
                "\u0198": "K",
                "\u2c69": "K",
                "\ua740": "K",
                "\ua742": "K",
                "\ua744": "K",
                "\ua7a2": "K",
                "\u24c1": "L",
                "\uff2c": "L",
                "\u013f": "L",
                "\u0139": "L",
                "\u013d": "L",
                "\u1e36": "L",
                "\u1e38": "L",
                "\u013b": "L",
                "\u1e3c": "L",
                "\u1e3a": "L",
                "\u0141": "L",
                "\u023d": "L",
                "\u2c62": "L",
                "\u2c60": "L",
                "\ua748": "L",
                "\ua746": "L",
                "\ua780": "L",
                "\u01c7": "LJ",
                "\u01c8": "Lj",
                "\u24c2": "M",
                "\uff2d": "M",
                "\u1e3e": "M",
                "\u1e40": "M",
                "\u1e42": "M",
                "\u2c6e": "M",
                "\u019c": "M",
                "\u24c3": "N",
                "\uff2e": "N",
                "\u01f8": "N",
                "\u0143": "N",
                "\xd1": "N",
                "\u1e44": "N",
                "\u0147": "N",
                "\u1e46": "N",
                "\u0145": "N",
                "\u1e4a": "N",
                "\u1e48": "N",
                "\u0220": "N",
                "\u019d": "N",
                "\ua790": "N",
                "\ua7a4": "N",
                "\u01ca": "NJ",
                "\u01cb": "Nj",
                "\u24c4": "O",
                "\uff2f": "O",
                "\xd2": "O",
                "\xd3": "O",
                "\xd4": "O",
                "\u1ed2": "O",
                "\u1ed0": "O",
                "\u1ed6": "O",
                "\u1ed4": "O",
                "\xd5": "O",
                "\u1e4c": "O",
                "\u022c": "O",
                "\u1e4e": "O",
                "\u014c": "O",
                "\u1e50": "O",
                "\u1e52": "O",
                "\u014e": "O",
                "\u022e": "O",
                "\u0230": "O",
                "\xd6": "O",
                "\u022a": "O",
                "\u1ece": "O",
                "\u0150": "O",
                "\u01d1": "O",
                "\u020c": "O",
                "\u020e": "O",
                "\u01a0": "O",
                "\u1edc": "O",
                "\u1eda": "O",
                "\u1ee0": "O",
                "\u1ede": "O",
                "\u1ee2": "O",
                "\u1ecc": "O",
                "\u1ed8": "O",
                "\u01ea": "O",
                "\u01ec": "O",
                "\xd8": "O",
                "\u01fe": "O",
                "\u0186": "O",
                "\u019f": "O",
                "\ua74a": "O",
                "\ua74c": "O",
                "\u01a2": "OI",
                "\ua74e": "OO",
                "\u0222": "OU",
                "\u24c5": "P",
                "\uff30": "P",
                "\u1e54": "P",
                "\u1e56": "P",
                "\u01a4": "P",
                "\u2c63": "P",
                "\ua750": "P",
                "\ua752": "P",
                "\ua754": "P",
                "\u24c6": "Q",
                "\uff31": "Q",
                "\ua756": "Q",
                "\ua758": "Q",
                "\u024a": "Q",
                "\u24c7": "R",
                "\uff32": "R",
                "\u0154": "R",
                "\u1e58": "R",
                "\u0158": "R",
                "\u0210": "R",
                "\u0212": "R",
                "\u1e5a": "R",
                "\u1e5c": "R",
                "\u0156": "R",
                "\u1e5e": "R",
                "\u024c": "R",
                "\u2c64": "R",
                "\ua75a": "R",
                "\ua7a6": "R",
                "\ua782": "R",
                "\u24c8": "S",
                "\uff33": "S",
                "\u1e9e": "S",
                "\u015a": "S",
                "\u1e64": "S",
                "\u015c": "S",
                "\u1e60": "S",
                "\u0160": "S",
                "\u1e66": "S",
                "\u1e62": "S",
                "\u1e68": "S",
                "\u0218": "S",
                "\u015e": "S",
                "\u2c7e": "S",
                "\ua7a8": "S",
                "\ua784": "S",
                "\u24c9": "T",
                "\uff34": "T",
                "\u1e6a": "T",
                "\u0164": "T",
                "\u1e6c": "T",
                "\u021a": "T",
                "\u0162": "T",
                "\u1e70": "T",
                "\u1e6e": "T",
                "\u0166": "T",
                "\u01ac": "T",
                "\u01ae": "T",
                "\u023e": "T",
                "\ua786": "T",
                "\ua728": "TZ",
                "\u24ca": "U",
                "\uff35": "U",
                "\xd9": "U",
                "\xda": "U",
                "\xdb": "U",
                "\u0168": "U",
                "\u1e78": "U",
                "\u016a": "U",
                "\u1e7a": "U",
                "\u016c": "U",
                "\xdc": "U",
                "\u01db": "U",
                "\u01d7": "U",
                "\u01d5": "U",
                "\u01d9": "U",
                "\u1ee6": "U",
                "\u016e": "U",
                "\u0170": "U",
                "\u01d3": "U",
                "\u0214": "U",
                "\u0216": "U",
                "\u01af": "U",
                "\u1eea": "U",
                "\u1ee8": "U",
                "\u1eee": "U",
                "\u1eec": "U",
                "\u1ef0": "U",
                "\u1ee4": "U",
                "\u1e72": "U",
                "\u0172": "U",
                "\u1e76": "U",
                "\u1e74": "U",
                "\u0244": "U",
                "\u24cb": "V",
                "\uff36": "V",
                "\u1e7c": "V",
                "\u1e7e": "V",
                "\u01b2": "V",
                "\ua75e": "V",
                "\u0245": "V",
                "\ua760": "VY",
                "\u24cc": "W",
                "\uff37": "W",
                "\u1e80": "W",
                "\u1e82": "W",
                "\u0174": "W",
                "\u1e86": "W",
                "\u1e84": "W",
                "\u1e88": "W",
                "\u2c72": "W",
                "\u24cd": "X",
                "\uff38": "X",
                "\u1e8a": "X",
                "\u1e8c": "X",
                "\u24ce": "Y",
                "\uff39": "Y",
                "\u1ef2": "Y",
                "\xdd": "Y",
                "\u0176": "Y",
                "\u1ef8": "Y",
                "\u0232": "Y",
                "\u1e8e": "Y",
                "\u0178": "Y",
                "\u1ef6": "Y",
                "\u1ef4": "Y",
                "\u01b3": "Y",
                "\u024e": "Y",
                "\u1efe": "Y",
                "\u24cf": "Z",
                "\uff3a": "Z",
                "\u0179": "Z",
                "\u1e90": "Z",
                "\u017b": "Z",
                "\u017d": "Z",
                "\u1e92": "Z",
                "\u1e94": "Z",
                "\u01b5": "Z",
                "\u0224": "Z",
                "\u2c7f": "Z",
                "\u2c6b": "Z",
                "\ua762": "Z",
                "\u24d0": "a",
                "\uff41": "a",
                "\u1e9a": "a",
                "\xe0": "a",
                "\xe1": "a",
                "\xe2": "a",
                "\u1ea7": "a",
                "\u1ea5": "a",
                "\u1eab": "a",
                "\u1ea9": "a",
                "\xe3": "a",
                "\u0101": "a",
                "\u0103": "a",
                "\u1eb1": "a",
                "\u1eaf": "a",
                "\u1eb5": "a",
                "\u1eb3": "a",
                "\u0227": "a",
                "\u01e1": "a",
                "\xe4": "a",
                "\u01df": "a",
                "\u1ea3": "a",
                "\xe5": "a",
                "\u01fb": "a",
                "\u01ce": "a",
                "\u0201": "a",
                "\u0203": "a",
                "\u1ea1": "a",
                "\u1ead": "a",
                "\u1eb7": "a",
                "\u1e01": "a",
                "\u0105": "a",
                "\u2c65": "a",
                "\u0250": "a",
                "\ua733": "aa",
                "\xe6": "ae",
                "\u01fd": "ae",
                "\u01e3": "ae",
                "\ua735": "ao",
                "\ua737": "au",
                "\ua739": "av",
                "\ua73b": "av",
                "\ua73d": "ay",
                "\u24d1": "b",
                "\uff42": "b",
                "\u1e03": "b",
                "\u1e05": "b",
                "\u1e07": "b",
                "\u0180": "b",
                "\u0183": "b",
                "\u0253": "b",
                "\u24d2": "c",
                "\uff43": "c",
                "\u0107": "c",
                "\u0109": "c",
                "\u010b": "c",
                "\u010d": "c",
                "\xe7": "c",
                "\u1e09": "c",
                "\u0188": "c",
                "\u023c": "c",
                "\ua73f": "c",
                "\u2184": "c",
                "\u24d3": "d",
                "\uff44": "d",
                "\u1e0b": "d",
                "\u010f": "d",
                "\u1e0d": "d",
                "\u1e11": "d",
                "\u1e13": "d",
                "\u1e0f": "d",
                "\u0111": "d",
                "\u018c": "d",
                "\u0256": "d",
                "\u0257": "d",
                "\ua77a": "d",
                "\u01f3": "dz",
                "\u01c6": "dz",
                "\u24d4": "e",
                "\uff45": "e",
                "\xe8": "e",
                "\xe9": "e",
                "\xea": "e",
                "\u1ec1": "e",
                "\u1ebf": "e",
                "\u1ec5": "e",
                "\u1ec3": "e",
                "\u1ebd": "e",
                "\u0113": "e",
                "\u1e15": "e",
                "\u1e17": "e",
                "\u0115": "e",
                "\u0117": "e",
                "\xeb": "e",
                "\u1ebb": "e",
                "\u011b": "e",
                "\u0205": "e",
                "\u0207": "e",
                "\u1eb9": "e",
                "\u1ec7": "e",
                "\u0229": "e",
                "\u1e1d": "e",
                "\u0119": "e",
                "\u1e19": "e",
                "\u1e1b": "e",
                "\u0247": "e",
                "\u025b": "e",
                "\u01dd": "e",
                "\u24d5": "f",
                "\uff46": "f",
                "\u1e1f": "f",
                "\u0192": "f",
                "\ua77c": "f",
                "\u24d6": "g",
                "\uff47": "g",
                "\u01f5": "g",
                "\u011d": "g",
                "\u1e21": "g",
                "\u011f": "g",
                "\u0121": "g",
                "\u01e7": "g",
                "\u0123": "g",
                "\u01e5": "g",
                "\u0260": "g",
                "\ua7a1": "g",
                "\u1d79": "g",
                "\ua77f": "g",
                "\u24d7": "h",
                "\uff48": "h",
                "\u0125": "h",
                "\u1e23": "h",
                "\u1e27": "h",
                "\u021f": "h",
                "\u1e25": "h",
                "\u1e29": "h",
                "\u1e2b": "h",
                "\u1e96": "h",
                "\u0127": "h",
                "\u2c68": "h",
                "\u2c76": "h",
                "\u0265": "h",
                "\u0195": "hv",
                "\u24d8": "i",
                "\uff49": "i",
                "\xec": "i",
                "\xed": "i",
                "\xee": "i",
                "\u0129": "i",
                "\u012b": "i",
                "\u012d": "i",
                "\xef": "i",
                "\u1e2f": "i",
                "\u1ec9": "i",
                "\u01d0": "i",
                "\u0209": "i",
                "\u020b": "i",
                "\u1ecb": "i",
                "\u012f": "i",
                "\u1e2d": "i",
                "\u0268": "i",
                "\u0131": "i",
                "\u24d9": "j",
                "\uff4a": "j",
                "\u0135": "j",
                "\u01f0": "j",
                "\u0249": "j",
                "\u24da": "k",
                "\uff4b": "k",
                "\u1e31": "k",
                "\u01e9": "k",
                "\u1e33": "k",
                "\u0137": "k",
                "\u1e35": "k",
                "\u0199": "k",
                "\u2c6a": "k",
                "\ua741": "k",
                "\ua743": "k",
                "\ua745": "k",
                "\ua7a3": "k",
                "\u24db": "l",
                "\uff4c": "l",
                "\u0140": "l",
                "\u013a": "l",
                "\u013e": "l",
                "\u1e37": "l",
                "\u1e39": "l",
                "\u013c": "l",
                "\u1e3d": "l",
                "\u1e3b": "l",
                "\u017f": "l",
                "\u0142": "l",
                "\u019a": "l",
                "\u026b": "l",
                "\u2c61": "l",
                "\ua749": "l",
                "\ua781": "l",
                "\ua747": "l",
                "\u01c9": "lj",
                "\u24dc": "m",
                "\uff4d": "m",
                "\u1e3f": "m",
                "\u1e41": "m",
                "\u1e43": "m",
                "\u0271": "m",
                "\u026f": "m",
                "\u24dd": "n",
                "\uff4e": "n",
                "\u01f9": "n",
                "\u0144": "n",
                "\xf1": "n",
                "\u1e45": "n",
                "\u0148": "n",
                "\u1e47": "n",
                "\u0146": "n",
                "\u1e4b": "n",
                "\u1e49": "n",
                "\u019e": "n",
                "\u0272": "n",
                "\u0149": "n",
                "\ua791": "n",
                "\ua7a5": "n",
                "\u01cc": "nj",
                "\u24de": "o",
                "\uff4f": "o",
                "\xf2": "o",
                "\xf3": "o",
                "\xf4": "o",
                "\u1ed3": "o",
                "\u1ed1": "o",
                "\u1ed7": "o",
                "\u1ed5": "o",
                "\xf5": "o",
                "\u1e4d": "o",
                "\u022d": "o",
                "\u1e4f": "o",
                "\u014d": "o",
                "\u1e51": "o",
                "\u1e53": "o",
                "\u014f": "o",
                "\u022f": "o",
                "\u0231": "o",
                "\xf6": "o",
                "\u022b": "o",
                "\u1ecf": "o",
                "\u0151": "o",
                "\u01d2": "o",
                "\u020d": "o",
                "\u020f": "o",
                "\u01a1": "o",
                "\u1edd": "o",
                "\u1edb": "o",
                "\u1ee1": "o",
                "\u1edf": "o",
                "\u1ee3": "o",
                "\u1ecd": "o",
                "\u1ed9": "o",
                "\u01eb": "o",
                "\u01ed": "o",
                "\xf8": "o",
                "\u01ff": "o",
                "\u0254": "o",
                "\ua74b": "o",
                "\ua74d": "o",
                "\u0275": "o",
                "\u01a3": "oi",
                "\u0223": "ou",
                "\ua74f": "oo",
                "\u24df": "p",
                "\uff50": "p",
                "\u1e55": "p",
                "\u1e57": "p",
                "\u01a5": "p",
                "\u1d7d": "p",
                "\ua751": "p",
                "\ua753": "p",
                "\ua755": "p",
                "\u24e0": "q",
                "\uff51": "q",
                "\u024b": "q",
                "\ua757": "q",
                "\ua759": "q",
                "\u24e1": "r",
                "\uff52": "r",
                "\u0155": "r",
                "\u1e59": "r",
                "\u0159": "r",
                "\u0211": "r",
                "\u0213": "r",
                "\u1e5b": "r",
                "\u1e5d": "r",
                "\u0157": "r",
                "\u1e5f": "r",
                "\u024d": "r",
                "\u027d": "r",
                "\ua75b": "r",
                "\ua7a7": "r",
                "\ua783": "r",
                "\u24e2": "s",
                "\uff53": "s",
                "\xdf": "s",
                "\u015b": "s",
                "\u1e65": "s",
                "\u015d": "s",
                "\u1e61": "s",
                "\u0161": "s",
                "\u1e67": "s",
                "\u1e63": "s",
                "\u1e69": "s",
                "\u0219": "s",
                "\u015f": "s",
                "\u023f": "s",
                "\ua7a9": "s",
                "\ua785": "s",
                "\u1e9b": "s",
                "\u24e3": "t",
                "\uff54": "t",
                "\u1e6b": "t",
                "\u1e97": "t",
                "\u0165": "t",
                "\u1e6d": "t",
                "\u021b": "t",
                "\u0163": "t",
                "\u1e71": "t",
                "\u1e6f": "t",
                "\u0167": "t",
                "\u01ad": "t",
                "\u0288": "t",
                "\u2c66": "t",
                "\ua787": "t",
                "\ua729": "tz",
                "\u24e4": "u",
                "\uff55": "u",
                "\xf9": "u",
                "\xfa": "u",
                "\xfb": "u",
                "\u0169": "u",
                "\u1e79": "u",
                "\u016b": "u",
                "\u1e7b": "u",
                "\u016d": "u",
                "\xfc": "u",
                "\u01dc": "u",
                "\u01d8": "u",
                "\u01d6": "u",
                "\u01da": "u",
                "\u1ee7": "u",
                "\u016f": "u",
                "\u0171": "u",
                "\u01d4": "u",
                "\u0215": "u",
                "\u0217": "u",
                "\u01b0": "u",
                "\u1eeb": "u",
                "\u1ee9": "u",
                "\u1eef": "u",
                "\u1eed": "u",
                "\u1ef1": "u",
                "\u1ee5": "u",
                "\u1e73": "u",
                "\u0173": "u",
                "\u1e77": "u",
                "\u1e75": "u",
                "\u0289": "u",
                "\u24e5": "v",
                "\uff56": "v",
                "\u1e7d": "v",
                "\u1e7f": "v",
                "\u028b": "v",
                "\ua75f": "v",
                "\u028c": "v",
                "\ua761": "vy",
                "\u24e6": "w",
                "\uff57": "w",
                "\u1e81": "w",
                "\u1e83": "w",
                "\u0175": "w",
                "\u1e87": "w",
                "\u1e85": "w",
                "\u1e98": "w",
                "\u1e89": "w",
                "\u2c73": "w",
                "\u24e7": "x",
                "\uff58": "x",
                "\u1e8b": "x",
                "\u1e8d": "x",
                "\u24e8": "y",
                "\uff59": "y",
                "\u1ef3": "y",
                "\xfd": "y",
                "\u0177": "y",
                "\u1ef9": "y",
                "\u0233": "y",
                "\u1e8f": "y",
                "\xff": "y",
                "\u1ef7": "y",
                "\u1e99": "y",
                "\u1ef5": "y",
                "\u01b4": "y",
                "\u024f": "y",
                "\u1eff": "y",
                "\u24e9": "z",
                "\uff5a": "z",
                "\u017a": "z",
                "\u1e91": "z",
                "\u017c": "z",
                "\u017e": "z",
                "\u1e93": "z",
                "\u1e95": "z",
                "\u01b6": "z",
                "\u0225": "z",
                "\u0240": "z",
                "\u2c6c": "z",
                "\ua763": "z",
                "\u0386": "\u0391",
                "\u0388": "\u0395",
                "\u0389": "\u0397",
                "\u038a": "\u0399",
                "\u03aa": "\u0399",
                "\u038c": "\u039f",
                "\u038e": "\u03a5",
                "\u03ab": "\u03a5",
                "\u038f": "\u03a9",
                "\u03ac": "\u03b1",
                "\u03ad": "\u03b5",
                "\u03ae": "\u03b7",
                "\u03af": "\u03b9",
                "\u03ca": "\u03b9",
                "\u0390": "\u03b9",
                "\u03cc": "\u03bf",
                "\u03cd": "\u03c5",
                "\u03cb": "\u03c5",
                "\u03b0": "\u03c5",
                "\u03c9": "\u03c9",
                "\u03c2": "\u03c3"
            }
        }),
        t.define("select2/data/base", ["../utils"], function(e) {
            function t() {
                t.__super__.constructor.call(this)
            }
            return e.Extend(t, e.Observable),
            t.prototype.current = function() {
                throw new Error("The `current` method must be defined in child classes.")
            }
            ,
            t.prototype.query = function() {
                throw new Error("The `query` method must be defined in child classes.")
            }
            ,
            t.prototype.bind = function() {}
            ,
            t.prototype.destroy = function() {}
            ,
            t.prototype.generateResultId = function(t, n) {
                var r = t.id + "-result-";
                return (r += e.generateChars(4)) + (null != n.id ? "-" + n.id.toString() : "-" + e.generateChars(4))
            }
            ,
            t
        }),
        t.define("select2/data/select", ["./base", "../utils", "jquery"], function(e, t, n) {
            function r(e, t) {
                this.$element = e,
                this.options = t,
                r.__super__.constructor.call(this)
            }
            return t.Extend(r, e),
            r.prototype.current = function(e) {
                var t = []
                  , r = this;
                this.$element.find(":selected").each(function() {
                    var e = n(this)
                      , i = r.item(e);
                    t.push(i)
                }),
                e(t)
            }
            ,
            r.prototype.select = function(e) {
                var t = this;
                if (e.selected = !0,
                n(e.element).is("option"))
                    return e.element.selected = !0,
                    void this.$element.trigger("change");
                if (this.$element.prop("multiple"))
                    this.current(function(r) {
                        var i = [];
                        (e = [e]).push.apply(e, r);
                        for (var o = 0; o < e.length; o++) {
                            var a = e[o].id;
                            -1 === n.inArray(a, i) && i.push(a)
                        }
                        t.$element.val(i),
                        t.$element.trigger("change")
                    });
                else {
                    var r = e.id;
                    this.$element.val(r),
                    this.$element.trigger("change")
                }
            }
            ,
            r.prototype.unselect = function(e) {
                var t = this;
                if (this.$element.prop("multiple"))
                    return e.selected = !1,
                    n(e.element).is("option") ? (e.element.selected = !1,
                    void this.$element.trigger("change")) : void this.current(function(r) {
                        for (var i = [], o = 0; o < r.length; o++) {
                            var a = r[o].id;
                            a !== e.id && -1 === n.inArray(a, i) && i.push(a)
                        }
                        t.$element.val(i),
                        t.$element.trigger("change")
                    })
            }
            ,
            r.prototype.bind = function(e) {
                var t = this;
                this.container = e,
                e.on("select", function(e) {
                    t.select(e.data)
                }),
                e.on("unselect", function(e) {
                    t.unselect(e.data)
                })
            }
            ,
            r.prototype.destroy = function() {
                this.$element.find("*").each(function() {
                    n.removeData(this, "data")
                })
            }
            ,
            r.prototype.query = function(e, t) {
                var r = []
                  , i = this;
                this.$element.children().each(function() {
                    var t = n(this);
                    if (t.is("option") || t.is("optgroup")) {
                        var o = i.item(t)
                          , a = i.matches(e, o);
                        null !== a && r.push(a)
                    }
                }),
                t({
                    results: r
                })
            }
            ,
            r.prototype.addOptions = function(e) {
                t.appendMany(this.$element, e)
            }
            ,
            r.prototype.option = function(e) {
                var t;
                e.children ? (t = document.createElement("optgroup")).label = e.text : void 0 !== (t = document.createElement("option")).textContent ? t.textContent = e.text : t.innerText = e.text,
                e.id && (t.value = e.id),
                e.disabled && (t.disabled = !0),
                e.selected && (t.selected = !0),
                e.title && (t.title = e.title);
                var r = n(t)
                  , i = this._normalizeItem(e);
                return i.element = t,
                n.data(t, "data", i),
                r
            }
            ,
            r.prototype.item = function(e) {
                var t = {};
                if (null != (t = n.data(e[0], "data")))
                    return t;
                if (e.is("option"))
                    t = {
                        id: e.val(),
                        text: e.text(),
                        disabled: e.prop("disabled"),
                        selected: e.prop("selected"),
                        title: e.prop("title")
                    };
                else if (e.is("optgroup")) {
                    t = {
                        text: e.prop("label"),
                        children: [],
                        title: e.prop("title")
                    };
                    for (var r = e.children("option"), i = [], o = 0; o < r.length; o++) {
                        var a = n(r[o])
                          , s = this.item(a);
                        i.push(s)
                    }
                    t.children = i
                }
                return (t = this._normalizeItem(t)).element = e[0],
                n.data(e[0], "data", t),
                t
            }
            ,
            r.prototype._normalizeItem = function(e) {
                n.isPlainObject(e) || (e = {
                    id: e,
                    text: e
                });
                var t = {
                    selected: !1,
                    disabled: !1
                };
                return null != (e = n.extend({}, {
                    text: ""
                }, e)).id && (e.id = e.id.toString()),
                null != e.text && (e.text = e.text.toString()),
                null == e._resultId && e.id && null != this.container && (e._resultId = this.generateResultId(this.container, e)),
                n.extend({}, t, e)
            }
            ,
            r.prototype.matches = function(e, t) {
                return this.options.get("matcher")(e, t)
            }
            ,
            r
        }),
        t.define("select2/data/array", ["./select", "../utils", "jquery"], function(e, t, n) {
            function r(e, t) {
                var n = t.get("data") || [];
                r.__super__.constructor.call(this, e, t),
                this.addOptions(this.convertToOptions(n))
            }
            return t.Extend(r, e),
            r.prototype.select = function(e) {
                var t = this.$element.find("option").filter(function(t, n) {
                    return n.value == e.id.toString()
                });
                0 === t.length && (t = this.option(e),
                this.addOptions(t)),
                r.__super__.select.call(this, e)
            }
            ,
            r.prototype.convertToOptions = function(e) {
                function r(e) {
                    return function() {
                        return n(this).val() == e.id
                    }
                }
                for (var i = this, o = this.$element.find("option"), a = o.map(function() {
                    return i.item(n(this)).id
                }).get(), s = [], c = 0; c < e.length; c++) {
                    var u = this._normalizeItem(e[c]);
                    if (n.inArray(u.id, a) >= 0) {
                        var l = o.filter(r(u))
                          , f = this.item(l)
                          , d = n.extend(!0, {}, u, f)
                          , p = this.option(d);
                        l.replaceWith(p)
                    } else {
                        var h = this.option(u);
                        if (u.children) {
                            var m = this.convertToOptions(u.children);
                            t.appendMany(h, m)
                        }
                        s.push(h)
                    }
                }
                return s
            }
            ,
            r
        }),
        t.define("select2/data/ajax", ["./array", "../utils", "jquery"], function(e, t, n) {
            function r(e, t) {
                this.ajaxOptions = this._applyDefaults(t.get("ajax")),
                null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults),
                r.__super__.constructor.call(this, e, t)
            }
            return t.Extend(r, e),
            r.prototype._applyDefaults = function(e) {
                var t = {
                    data: function(e) {
                        return n.extend({}, e, {
                            q: e.term
                        })
                    },
                    transport: function(e, t, r) {
                        var i = n.ajax(e);
                        return i.then(t),
                        i.fail(r),
                        i
                    }
                };
                return n.extend({}, t, e, !0)
            }
            ,
            r.prototype.processResults = function(e) {
                return e
            }
            ,
            r.prototype.query = function(e, t) {
                function r() {
                    var r = o.transport(o, function(r) {
                        var o = i.processResults(r, e);
                        i.options.get("debug") && window.console && console.error && (o && o.results && n.isArray(o.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),
                        t(o)
                    }, function() {
                        r.status && "0" === r.status || i.trigger("results:message", {
                            message: "errorLoading"
                        })
                    });
                    i._request = r
                }
                var i = this;
                null != this._request && (n.isFunction(this._request.abort) && this._request.abort(),
                this._request = null);
                var o = n.extend({
                    type: "GET"
                }, this.ajaxOptions);
                "function" == typeof o.url && (o.url = o.url.call(this.$element, e)),
                "function" == typeof o.data && (o.data = o.data.call(this.$element, e)),
                this.ajaxOptions.delay && null != e.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout),
                this._queryTimeout = window.setTimeout(r, this.ajaxOptions.delay)) : r()
            }
            ,
            r
        }),
        t.define("select2/data/tags", ["jquery"], function(e) {
            function t(t, n, r) {
                var i = r.get("tags")
                  , o = r.get("createTag");
                void 0 !== o && (this.createTag = o);
                var a = r.get("insertTag");
                if (void 0 !== a && (this.insertTag = a),
                t.call(this, n, r),
                e.isArray(i))
                    for (var s = 0; s < i.length; s++) {
                        var c = i[s]
                          , u = this._normalizeItem(c)
                          , l = this.option(u);
                        this.$element.append(l)
                    }
            }
            return t.prototype.query = function(e, t, n) {
                function r(e, o) {
                    for (var a = e.results, s = 0; s < a.length; s++) {
                        var c = a[s]
                          , u = null != c.children && !r({
                            results: c.children
                        }, !0);
                        if (c.text === t.term || u)
                            return !o && (e.data = a,
                            void n(e))
                    }
                    if (o)
                        return !0;
                    var l = i.createTag(t);
                    if (null != l) {
                        var f = i.option(l);
                        f.attr("data-select2-tag", !0),
                        i.addOptions([f]),
                        i.insertTag(a, l)
                    }
                    e.results = a,
                    n(e)
                }
                var i = this;
                return this._removeOldTags(),
                null == t.term || null != t.page ? void e.call(this, t, n) : void e.call(this, t, r)
            }
            ,
            t.prototype.createTag = function(t, n) {
                var r = e.trim(n.term);
                return "" === r ? null : {
                    id: r,
                    text: r
                }
            }
            ,
            t.prototype.insertTag = function(e, t, n) {
                t.unshift(n)
            }
            ,
            t.prototype._removeOldTags = function() {
                (this._lastTag,
                this.$element.find("option[data-select2-tag]")).each(function() {
                    this.selected || e(this).remove()
                })
            }
            ,
            t
        }),
        t.define("select2/data/tokenizer", ["jquery"], function(e) {
            function t(e, t, n) {
                var r = n.get("tokenizer");
                void 0 !== r && (this.tokenizer = r),
                e.call(this, t, n)
            }
            return t.prototype.bind = function(e, t, n) {
                e.call(this, t, n),
                this.$search = t.dropdown.$search || t.selection.$search || n.find(".select2-search__field")
            }
            ,
            t.prototype.query = function(t, n, r) {
                function i(t) {
                    var n = a._normalizeItem(t);
                    if (!a.$element.find("option").filter(function() {
                        return e(this).val() === n.id
                    }).length) {
                        var r = a.option(n);
                        r.attr("data-select2-tag", !0),
                        a._removeOldTags(),
                        a.addOptions([r])
                    }
                    o(n)
                }
                function o(e) {
                    a.trigger("select", {
                        data: e
                    })
                }
                var a = this;
                n.term = n.term || "";
                var s = this.tokenizer(n, this.options, i);
                s.term !== n.term && (this.$search.length && (this.$search.val(s.term),
                this.$search.focus()),
                n.term = s.term),
                t.call(this, n, r)
            }
            ,
            t.prototype.tokenizer = function(t, n, r, i) {
                for (var o = r.get("tokenSeparators") || [], a = n.term, s = 0, c = this.createTag || function(e) {
                    return {
                        id: e.term,
                        text: e.term
                    }
                }
                ; s < a.length; ) {
                    var u = a[s];
                    if (-1 !== e.inArray(u, o)) {
                        var l = a.substr(0, s)
                          , f = c(e.extend({}, n, {
                            term: l
                        }));
                        null != f ? (i(f),
                        a = a.substr(s + 1) || "",
                        s = 0) : s++
                    } else
                        s++
                }
                return {
                    term: a
                }
            }
            ,
            t
        }),
        t.define("select2/data/minimumInputLength", [], function() {
            function e(e, t, n) {
                this.minimumInputLength = n.get("minimumInputLength"),
                e.call(this, t, n)
            }
            return e.prototype.query = function(e, t, n) {
                return t.term = t.term || "",
                t.term.length < this.minimumInputLength ? void this.trigger("results:message", {
                    message: "inputTooShort",
                    args: {
                        minimum: this.minimumInputLength,
                        input: t.term,
                        params: t
                    }
                }) : void e.call(this, t, n)
            }
            ,
            e
        }),
        t.define("select2/data/maximumInputLength", [], function() {
            function e(e, t, n) {
                this.maximumInputLength = n.get("maximumInputLength"),
                e.call(this, t, n)
            }
            return e.prototype.query = function(e, t, n) {
                return t.term = t.term || "",
                this.maximumInputLength > 0 && t.term.length > this.maximumInputLength ? void this.trigger("results:message", {
                    message: "inputTooLong",
                    args: {
                        maximum: this.maximumInputLength,
                        input: t.term,
                        params: t
                    }
                }) : void e.call(this, t, n)
            }
            ,
            e
        }),
        t.define("select2/data/maximumSelectionLength", [], function() {
            function e(e, t, n) {
                this.maximumSelectionLength = n.get("maximumSelectionLength"),
                e.call(this, t, n)
            }
            return e.prototype.query = function(e, t, n) {
                var r = this;
                this.current(function(i) {
                    var o = null != i ? i.length : 0;
                    return r.maximumSelectionLength > 0 && o >= r.maximumSelectionLength ? void r.trigger("results:message", {
                        message: "maximumSelected",
                        args: {
                            maximum: r.maximumSelectionLength
                        }
                    }) : void e.call(r, t, n)
                })
            }
            ,
            e
        }),
        t.define("select2/dropdown", ["jquery", "./utils"], function(e, t) {
            function n(e, t) {
                this.$element = e,
                this.options = t,
                n.__super__.constructor.call(this)
            }
            return t.Extend(n, t.Observable),
            n.prototype.render = function() {
                var t = e('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                return t.attr("dir", this.options.get("dir")),
                this.$dropdown = t,
                t
            }
            ,
            n.prototype.bind = function() {}
            ,
            n.prototype.position = function() {}
            ,
            n.prototype.destroy = function() {
                this.$dropdown.remove()
            }
            ,
            n
        }),
        t.define("select2/dropdown/search", ["jquery", "../utils"], function(e) {
            function t() {}
            return t.prototype.render = function(t) {
                var n = t.call(this)
                  , r = e('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');
                return this.$searchContainer = r,
                this.$search = r.find("input"),
                n.prepend(r),
                n
            }
            ,
            t.prototype.bind = function(t, n, r) {
                var i = this;
                t.call(this, n, r),
                this.$search.on("keydown", function(e) {
                    i.trigger("keypress", e),
                    i._keyUpPrevented = e.isDefaultPrevented()
                }),
                this.$search.on("input", function() {
                    e(this).off("keyup")
                }),
                this.$search.on("keyup input", function(e) {
                    i.handleSearch(e)
                }),
                n.on("open", function() {
                    i.$search.attr("tabindex", 0),
                    i.$search.focus(),
                    window.setTimeout(function() {
                        i.$search.focus()
                    }, 0)
                }),
                n.on("close", function() {
                    i.$search.attr("tabindex", -1),
                    i.$search.val("")
                }),
                n.on("focus", function() {
                    n.isOpen() && i.$search.focus()
                }),
                n.on("results:all", function(e) {
                    null != e.query.term && "" !== e.query.term || (i.showSearch(e) ? i.$searchContainer.removeClass("select2-search--hide") : i.$searchContainer.addClass("select2-search--hide"))
                })
            }
            ,
            t.prototype.handleSearch = function() {
                if (!this._keyUpPrevented) {
                    var e = this.$search.val();
                    this.trigger("query", {
                        term: e
                    })
                }
                this._keyUpPrevented = !1
            }
            ,
            t.prototype.showSearch = function() {
                return !0
            }
            ,
            t
        }),
        t.define("select2/dropdown/hidePlaceholder", [], function() {
            function e(e, t, n, r) {
                this.placeholder = this.normalizePlaceholder(n.get("placeholder")),
                e.call(this, t, n, r)
            }
            return e.prototype.append = function(e, t) {
                t.results = this.removePlaceholder(t.results),
                e.call(this, t)
            }
            ,
            e.prototype.normalizePlaceholder = function(e, t) {
                return "string" == typeof t && (t = {
                    id: "",
                    text: t
                }),
                t
            }
            ,
            e.prototype.removePlaceholder = function(e, t) {
                for (var n = t.slice(0), r = t.length - 1; r >= 0; r--) {
                    var i = t[r];
                    this.placeholder.id === i.id && n.splice(r, 1)
                }
                return n
            }
            ,
            e
        }),
        t.define("select2/dropdown/infiniteScroll", ["jquery"], function(e) {
            function t(e, t, n, r) {
                this.lastParams = {},
                e.call(this, t, n, r),
                this.$loadingMore = this.createLoadingMore(),
                this.loading = !1
            }
            return t.prototype.append = function(e, t) {
                this.$loadingMore.remove(),
                this.loading = !1,
                e.call(this, t),
                this.showLoadingMore(t) && this.$results.append(this.$loadingMore)
            }
            ,
            t.prototype.bind = function(t, n, r) {
                var i = this;
                t.call(this, n, r),
                n.on("query", function(e) {
                    i.lastParams = e,
                    i.loading = !0
                }),
                n.on("query:append", function(e) {
                    i.lastParams = e,
                    i.loading = !0
                }),
                this.$results.on("scroll", function() {
                    var t = e.contains(document.documentElement, i.$loadingMore[0]);
                    !i.loading && t && (i.$results.offset().top + i.$results.outerHeight(!1) + 50 >= i.$loadingMore.offset().top + i.$loadingMore.outerHeight(!1) && i.loadMore())
                })
            }
            ,
            t.prototype.loadMore = function() {
                this.loading = !0;
                var t = e.extend({}, {
                    page: 1
                }, this.lastParams);
                t.page++,
                this.trigger("query:append", t)
            }
            ,
            t.prototype.showLoadingMore = function(e, t) {
                return t.pagination && t.pagination.more
            }
            ,
            t.prototype.createLoadingMore = function() {
                var t = e('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>')
                  , n = this.options.get("translations").get("loadingMore");
                return t.html(n(this.lastParams)),
                t
            }
            ,
            t
        }),
        t.define("select2/dropdown/attachBody", ["jquery", "../utils"], function(e, t) {
            function n(t, n, r) {
                this.$dropdownParent = r.get("dropdownParent") || e(document.body),
                t.call(this, n, r)
            }
            return n.prototype.bind = function(e, t, n) {
                var r = this
                  , i = !1;
                e.call(this, t, n),
                t.on("open", function() {
                    r._showDropdown(),
                    r._attachPositioningHandler(t),
                    i || (i = !0,
                    t.on("results:all", function() {
                        r._positionDropdown(),
                        r._resizeDropdown()
                    }),
                    t.on("results:append", function() {
                        r._positionDropdown(),
                        r._resizeDropdown()
                    }))
                }),
                t.on("close", function() {
                    r._hideDropdown(),
                    r._detachPositioningHandler(t)
                }),
                this.$dropdownContainer.on("mousedown", function(e) {
                    e.stopPropagation()
                })
            }
            ,
            n.prototype.destroy = function(e) {
                e.call(this),
                this.$dropdownContainer.remove()
            }
            ,
            n.prototype.position = function(e, t, n) {
                t.attr("class", n.attr("class")),
                t.removeClass("select2"),
                t.addClass("select2-container--open"),
                t.css({
                    position: "absolute",
                    top: -999999
                }),
                this.$container = n
            }
            ,
            n.prototype.render = function(t) {
                var n = e("<span></span>")
                  , r = t.call(this);
                return n.append(r),
                this.$dropdownContainer = n,
                n
            }
            ,
            n.prototype._hideDropdown = function() {
                this.$dropdownContainer.detach()
            }
            ,
            n.prototype._attachPositioningHandler = function(n, r) {
                var i = this
                  , o = "scroll.select2." + r.id
                  , a = "resize.select2." + r.id
                  , s = "orientationchange.select2." + r.id
                  , c = this.$container.parents().filter(t.hasScroll);
                c.each(function() {
                    e(this).data("select2-scroll-position", {
                        x: e(this).scrollLeft(),
                        y: e(this).scrollTop()
                    })
                }),
                c.on(o, function() {
                    var t = e(this).data("select2-scroll-position");
                    e(this).scrollTop(t.y)
                }),
                e(window).on(o + " " + a + " " + s, function() {
                    i._positionDropdown(),
                    i._resizeDropdown()
                })
            }
            ,
            n.prototype._detachPositioningHandler = function(n, r) {
                var i = "scroll.select2." + r.id
                  , o = "resize.select2." + r.id
                  , a = "orientationchange.select2." + r.id;
                this.$container.parents().filter(t.hasScroll).off(i),
                e(window).off(i + " " + o + " " + a)
            }
            ,
            n.prototype._positionDropdown = function() {
                var t = e(window)
                  , n = this.$dropdown.hasClass("select2-dropdown--above")
                  , r = this.$dropdown.hasClass("select2-dropdown--below")
                  , i = null
                  , o = this.$container.offset();
                o.bottom = o.top + this.$container.outerHeight(!1);
                var a = {
                    height: this.$container.outerHeight(!1)
                };
                a.top = o.top,
                a.bottom = o.top + a.height;
                var s = {
                    height: this.$dropdown.outerHeight(!1)
                }
                  , c = {
                    top: t.scrollTop(),
                    bottom: t.scrollTop() + t.height()
                }
                  , u = c.top < o.top - s.height
                  , l = c.bottom > o.bottom + s.height
                  , f = {
                    left: o.left,
                    top: a.bottom
                }
                  , d = this.$dropdownParent;
                "static" === d.css("position") && (d = d.offsetParent());
                var p = d.offset();
                f.top -= p.top,
                f.left -= p.left,
                n || r || (i = "below"),
                l || !u || n ? !u && l && n && (i = "below") : i = "above",
                ("above" == i || n && "below" !== i) && (f.top = a.top - p.top - s.height),
                null != i && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + i),
                this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + i)),
                this.$dropdownContainer.css(f)
            }
            ,
            n.prototype._resizeDropdown = function() {
                var e = {
                    width: this.$container.outerWidth(!1) + "px"
                };
                this.options.get("dropdownAutoWidth") && (e.minWidth = e.width,
                e.position = "relative",
                e.width = "auto"),
                this.$dropdown.css(e)
            }
            ,
            n.prototype._showDropdown = function() {
                this.$dropdownContainer.appendTo(this.$dropdownParent),
                this._positionDropdown(),
                this._resizeDropdown()
            }
            ,
            n
        }),
        t.define("select2/dropdown/minimumResultsForSearch", [], function() {
            function e(t) {
                for (var n = 0, r = 0; r < t.length; r++) {
                    var i = t[r];
                    i.children ? n += e(i.children) : n++
                }
                return n
            }
            function t(e, t, n, r) {
                this.minimumResultsForSearch = n.get("minimumResultsForSearch"),
                this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0),
                e.call(this, t, n, r)
            }
            return t.prototype.showSearch = function(t, n) {
                return !(e(n.data.results) < this.minimumResultsForSearch) && t.call(this, n)
            }
            ,
            t
        }),
        t.define("select2/dropdown/selectOnClose", [], function() {
            function e() {}
            return e.prototype.bind = function(e, t, n) {
                var r = this;
                e.call(this, t, n),
                t.on("close", function(e) {
                    r._handleSelectOnClose(e)
                })
            }
            ,
            e.prototype._handleSelectOnClose = function(e, t) {
                if (t && null != t.originalSelect2Event) {
                    var n = t.originalSelect2Event;
                    if ("select" === n._type || "unselect" === n._type)
                        return
                }
                var r = this.getHighlightedResults();
                if (!(r.length < 1)) {
                    var i = r.data("data");
                    null != i.element && i.element.selected || null == i.element && i.selected || this.trigger("select", {
                        data: i
                    })
                }
            }
            ,
            e
        }),
        t.define("select2/dropdown/closeOnSelect", [], function() {
            function e() {}
            return e.prototype.bind = function(e, t, n) {
                var r = this;
                e.call(this, t, n),
                t.on("select", function(e) {
                    r._selectTriggered(e)
                }),
                t.on("unselect", function(e) {
                    r._selectTriggered(e)
                })
            }
            ,
            e.prototype._selectTriggered = function(e, t) {
                var n = t.originalEvent;
                n && n.ctrlKey || this.trigger("close", {
                    originalEvent: n,
                    originalSelect2Event: t
                })
            }
            ,
            e
        }),
        t.define("select2/i18n/en", [], function() {
            return {
                errorLoading: function() {
                    return "The results could not be loaded."
                },
                inputTooLong: function(e) {
                    var t = e.input.length - e.maximum
                      , n = "Please delete " + t + " character";
                    return 1 != t && (n += "s"),
                    n
                },
                inputTooShort: function(e) {
                    return "Please enter " + (e.minimum - e.input.length) + " or more characters"
                },
                loadingMore: function() {
                    return "Loading more results\u2026"
                },
                maximumSelected: function(e) {
                    var t = "You can only select " + e.maximum + " item";
                    return 1 != e.maximum && (t += "s"),
                    t
                },
                noResults: function() {
                    return "No results found"
                },
                searching: function() {
                    return "Searching\u2026"
                }
            }
        }),
        t.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function(e, t, n, r, i, o, a, s, c, u, l, f, d, p, h, m, g, v, y, b, _, w, x, k, S, A, C, E, $) {
            function T() {
                this.reset()
            }
            return T.prototype.apply = function(f) {
                if (null == (f = e.extend(!0, {}, this.defaults, f)).dataAdapter) {
                    if (null != f.ajax ? f.dataAdapter = h : null != f.data ? f.dataAdapter = p : f.dataAdapter = d,
                    f.minimumInputLength > 0 && (f.dataAdapter = u.Decorate(f.dataAdapter, v)),
                    f.maximumInputLength > 0 && (f.dataAdapter = u.Decorate(f.dataAdapter, y)),
                    f.maximumSelectionLength > 0 && (f.dataAdapter = u.Decorate(f.dataAdapter, b)),
                    f.tags && (f.dataAdapter = u.Decorate(f.dataAdapter, m)),
                    (null != f.tokenSeparators || null != f.tokenizer) && (f.dataAdapter = u.Decorate(f.dataAdapter, g)),
                    null != f.query) {
                        var $ = t(f.amdBase + "compat/query");
                        f.dataAdapter = u.Decorate(f.dataAdapter, $)
                    }
                    if (null != f.initSelection) {
                        var T = t(f.amdBase + "compat/initSelection");
                        f.dataAdapter = u.Decorate(f.dataAdapter, T)
                    }
                }
                if (null == f.resultsAdapter && (f.resultsAdapter = n,
                null != f.ajax && (f.resultsAdapter = u.Decorate(f.resultsAdapter, k)),
                null != f.placeholder && (f.resultsAdapter = u.Decorate(f.resultsAdapter, x)),
                f.selectOnClose && (f.resultsAdapter = u.Decorate(f.resultsAdapter, C))),
                null == f.dropdownAdapter) {
                    if (f.multiple)
                        f.dropdownAdapter = _;
                    else {
                        var I = u.Decorate(_, w);
                        f.dropdownAdapter = I
                    }
                    if (0 !== f.minimumResultsForSearch && (f.dropdownAdapter = u.Decorate(f.dropdownAdapter, A)),
                    f.closeOnSelect && (f.dropdownAdapter = u.Decorate(f.dropdownAdapter, E)),
                    null != f.dropdownCssClass || null != f.dropdownCss || null != f.adaptDropdownCssClass) {
                        var O = t(f.amdBase + "compat/dropdownCss");
                        f.dropdownAdapter = u.Decorate(f.dropdownAdapter, O)
                    }
                    f.dropdownAdapter = u.Decorate(f.dropdownAdapter, S)
                }
                if (null == f.selectionAdapter) {
                    if (f.multiple ? f.selectionAdapter = i : f.selectionAdapter = r,
                    null != f.placeholder && (f.selectionAdapter = u.Decorate(f.selectionAdapter, o)),
                    f.allowClear && (f.selectionAdapter = u.Decorate(f.selectionAdapter, a)),
                    f.multiple && (f.selectionAdapter = u.Decorate(f.selectionAdapter, s)),
                    null != f.containerCssClass || null != f.containerCss || null != f.adaptContainerCssClass) {
                        var D = t(f.amdBase + "compat/containerCss");
                        f.selectionAdapter = u.Decorate(f.selectionAdapter, D)
                    }
                    f.selectionAdapter = u.Decorate(f.selectionAdapter, c)
                }
                if ("string" == typeof f.language)
                    if (f.language.indexOf("-") > 0) {
                        var j = f.language.split("-")[0];
                        f.language = [f.language, j]
                    } else
                        f.language = [f.language];
                if (e.isArray(f.language)) {
                    var P = new l;
                    f.language.push("en");
                    for (var R = f.language, N = 0; N < R.length; N++) {
                        var L = R[N]
                          , F = {};
                        try {
                            F = l.loadPath(L)
                        } catch (U) {
                            try {
                                L = this.defaults.amdLanguageBase + L,
                                F = l.loadPath(L)
                            } catch (z) {
                                f.debug && window.console && console.warn && console.warn('Select2: The language file for "' + L + '" could not be automatically loaded. A fallback will be used instead.');
                                continue
                            }
                        }
                        P.extend(F)
                    }
                    f.translations = P
                } else {
                    var M = l.loadPath(this.defaults.amdLanguageBase + "en")
                      , q = new l(f.language);
                    q.extend(M),
                    f.translations = q
                }
                return f
            }
            ,
            T.prototype.reset = function() {
                function t(e) {
                    function t(e) {
                        return f[e] || e
                    }
                    return e.replace(/[^\u0000-\u007E]/g, t)
                }
                function n(r, i) {
                    if ("" === e.trim(r.term))
                        return i;
                    if (i.children && i.children.length > 0) {
                        for (var o = e.extend(!0, {}, i), a = i.children.length - 1; a >= 0; a--) {
                            null == n(r, i.children[a]) && o.children.splice(a, 1)
                        }
                        return o.children.length > 0 ? o : n(r, o)
                    }
                    var s = t(i.text).toUpperCase()
                      , c = t(r.term).toUpperCase();
                    return s.indexOf(c) > -1 ? i : null
                }
                this.defaults = {
                    amdBase: "./",
                    amdLanguageBase: "./i18n/",
                    closeOnSelect: !0,
                    debug: !1,
                    dropdownAutoWidth: !1,
                    escapeMarkup: u.escapeMarkup,
                    language: $,
                    matcher: n,
                    minimumInputLength: 0,
                    maximumInputLength: 0,
                    maximumSelectionLength: 0,
                    minimumResultsForSearch: 0,
                    selectOnClose: !1,
                    sorter: function(e) {
                        return e
                    },
                    templateResult: function(e) {
                        return e.text
                    },
                    templateSelection: function(e) {
                        return e.text
                    },
                    theme: "default",
                    width: "resolve"
                }
            }
            ,
            T.prototype.set = function(t, n) {
                var r = {};
                r[e.camelCase(t)] = n;
                var i = u._convertData(r);
                e.extend(this.defaults, i)
            }
            ,
            new T
        }),
        t.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function(e, t, n, r) {
            function i(t, i) {
                if (this.options = t,
                null != i && this.fromElement(i),
                this.options = n.apply(this.options),
                i && i.is("input")) {
                    var o = e(this.get("amdBase") + "compat/inputData");
                    this.options.dataAdapter = r.Decorate(this.options.dataAdapter, o)
                }
            }
            return i.prototype.fromElement = function(e) {
                var n = ["select2"];
                null == this.options.multiple && (this.options.multiple = e.prop("multiple")),
                null == this.options.disabled && (this.options.disabled = e.prop("disabled")),
                null == this.options.language && (e.prop("lang") ? this.options.language = e.prop("lang").toLowerCase() : e.closest("[lang]").prop("lang") && (this.options.language = e.closest("[lang]").prop("lang"))),
                null == this.options.dir && (e.prop("dir") ? this.options.dir = e.prop("dir") : e.closest("[dir]").prop("dir") ? this.options.dir = e.closest("[dir]").prop("dir") : this.options.dir = "ltr"),
                e.prop("disabled", this.options.disabled),
                e.prop("multiple", this.options.multiple),
                e.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),
                e.data("data", e.data("select2Tags")),
                e.data("tags", !0)),
                e.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),
                e.attr("ajax--url", e.data("ajaxUrl")),
                e.data("ajax--url", e.data("ajaxUrl")));
                var i = {};
                i = t.fn.jquery && "1." == t.fn.jquery.substr(0, 2) && e[0].dataset ? t.extend(!0, {}, e[0].dataset, e.data()) : e.data();
                var o = t.extend(!0, {}, i);
                for (var a in o = r._convertData(o))
                    t.inArray(a, n) > -1 || (t.isPlainObject(this.options[a]) ? t.extend(this.options[a], o[a]) : this.options[a] = o[a]);
                return this
            }
            ,
            i.prototype.get = function(e) {
                return this.options[e]
            }
            ,
            i.prototype.set = function(e, t) {
                this.options[e] = t
            }
            ,
            i
        }),
        t.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function(e, t, n, r) {
            var i = function(e, n) {
                null != e.data("select2") && e.data("select2").destroy(),
                this.$element = e,
                this.id = this._generateId(e),
                n = n || {},
                this.options = new t(n,e),
                i.__super__.constructor.call(this);
                var r = e.attr("tabindex") || 0;
                e.data("old-tabindex", r),
                e.attr("tabindex", "-1");
                var o = this.options.get("dataAdapter");
                this.dataAdapter = new o(e,this.options);
                var a = this.render();
                this._placeContainer(a);
                var s = this.options.get("selectionAdapter");
                this.selection = new s(e,this.options),
                this.$selection = this.selection.render(),
                this.selection.position(this.$selection, a);
                var c = this.options.get("dropdownAdapter");
                this.dropdown = new c(e,this.options),
                this.$dropdown = this.dropdown.render(),
                this.dropdown.position(this.$dropdown, a);
                var u = this.options.get("resultsAdapter");
                this.results = new u(e,this.options,this.dataAdapter),
                this.$results = this.results.render(),
                this.results.position(this.$results, this.$dropdown);
                var l = this;
                this._bindAdapters(),
                this._registerDomEvents(),
                this._registerDataEvents(),
                this._registerSelectionEvents(),
                this._registerDropdownEvents(),
                this._registerResultsEvents(),
                this._registerEvents(),
                this.dataAdapter.current(function(e) {
                    l.trigger("selection:update", {
                        data: e
                    })
                }),
                e.addClass("select2-hidden-accessible"),
                e.attr("aria-hidden", "true"),
                this._syncAttributes(),
                e.data("select2", this)
            };
            return n.Extend(i, n.Observable),
            i.prototype._generateId = function(e) {
                return "select2-" + (null != e.attr("id") ? e.attr("id") : null != e.attr("name") ? e.attr("name") + "-" + n.generateChars(2) : n.generateChars(4)).replace(/(:|\.|\[|\]|,)/g, "")
            }
            ,
            i.prototype._placeContainer = function(e) {
                e.insertAfter(this.$element);
                var t = this._resolveWidth(this.$element, this.options.get("width"));
                null != t && e.css("width", t)
            }
            ,
            i.prototype._resolveWidth = function(e, t) {
                var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                if ("resolve" == t) {
                    var r = this._resolveWidth(e, "style");
                    return null != r ? r : this._resolveWidth(e, "element")
                }
                if ("element" == t) {
                    var i = e.outerWidth(!1);
                    return 0 >= i ? "auto" : i + "px"
                }
                if ("style" == t) {
                    var o = e.attr("style");
                    if ("string" != typeof o)
                        return null;
                    for (var a = o.split(";"), s = 0, c = a.length; c > s; s += 1) {
                        var u = a[s].replace(/\s/g, "").match(n);
                        if (null !== u && u.length >= 1)
                            return u[1]
                    }
                    return null
                }
                return t
            }
            ,
            i.prototype._bindAdapters = function() {
                this.dataAdapter.bind(this, this.$container),
                this.selection.bind(this, this.$container),
                this.dropdown.bind(this, this.$container),
                this.results.bind(this, this.$container)
            }
            ,
            i.prototype._registerDomEvents = function() {
                var t = this;
                this.$element.on("change.select2", function() {
                    t.dataAdapter.current(function(e) {
                        t.trigger("selection:update", {
                            data: e
                        })
                    })
                }),
                this.$element.on("focus.select2", function(e) {
                    t.trigger("focus", e)
                }),
                this._syncA = n.bind(this._syncAttributes, this),
                this._syncS = n.bind(this._syncSubtree, this),
                this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
                var r = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                null != r ? (this._observer = new r(function(n) {
                    e.each(n, t._syncA),
                    e.each(n, t._syncS)
                }
                ),
                this._observer.observe(this.$element[0], {
                    attributes: !0,
                    childList: !0,
                    subtree: !1
                })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", t._syncA, !1),
                this.$element[0].addEventListener("DOMNodeInserted", t._syncS, !1),
                this.$element[0].addEventListener("DOMNodeRemoved", t._syncS, !1))
            }
            ,
            i.prototype._registerDataEvents = function() {
                var e = this;
                this.dataAdapter.on("*", function(t, n) {
                    e.trigger(t, n)
                })
            }
            ,
            i.prototype._registerSelectionEvents = function() {
                var t = this
                  , n = ["toggle", "focus"];
                this.selection.on("toggle", function() {
                    t.toggleDropdown()
                }),
                this.selection.on("focus", function(e) {
                    t.focus(e)
                }),
                this.selection.on("*", function(r, i) {
                    -1 === e.inArray(r, n) && t.trigger(r, i)
                })
            }
            ,
            i.prototype._registerDropdownEvents = function() {
                var e = this;
                this.dropdown.on("*", function(t, n) {
                    e.trigger(t, n)
                })
            }
            ,
            i.prototype._registerResultsEvents = function() {
                var e = this;
                this.results.on("*", function(t, n) {
                    e.trigger(t, n)
                })
            }
            ,
            i.prototype._registerEvents = function() {
                var e = this;
                this.on("open", function() {
                    e.$container.addClass("select2-container--open")
                }),
                this.on("close", function() {
                    e.$container.removeClass("select2-container--open")
                }),
                this.on("enable", function() {
                    e.$container.removeClass("select2-container--disabled")
                }),
                this.on("disable", function() {
                    e.$container.addClass("select2-container--disabled")
                }),
                this.on("blur", function() {
                    e.$container.removeClass("select2-container--focus")
                }),
                this.on("query", function(t) {
                    e.isOpen() || e.trigger("open", {}),
                    this.dataAdapter.query(t, function(n) {
                        e.trigger("results:all", {
                            data: n,
                            query: t
                        })
                    })
                }),
                this.on("query:append", function(t) {
                    this.dataAdapter.query(t, function(n) {
                        e.trigger("results:append", {
                            data: n,
                            query: t
                        })
                    })
                }),
                this.on("keypress", function(t) {
                    var n = t.which;
                    e.isOpen() ? n === r.ESC || n === r.TAB || n === r.UP && t.altKey ? (e.close(),
                    t.preventDefault()) : n === r.ENTER ? (e.trigger("results:select", {}),
                    t.preventDefault()) : n === r.SPACE && t.ctrlKey ? (e.trigger("results:toggle", {}),
                    t.preventDefault()) : n === r.UP ? (e.trigger("results:previous", {}),
                    t.preventDefault()) : n === r.DOWN && (e.trigger("results:next", {}),
                    t.preventDefault()) : (n === r.ENTER || n === r.SPACE || n === r.DOWN && t.altKey) && (e.open(),
                    t.preventDefault())
                })
            }
            ,
            i.prototype._syncAttributes = function() {
                this.options.set("disabled", this.$element.prop("disabled")),
                this.options.get("disabled") ? (this.isOpen() && this.close(),
                this.trigger("disable", {})) : this.trigger("enable", {})
            }
            ,
            i.prototype._syncSubtree = function(e, t) {
                var n = !1
                  , r = this;
                if (!e || !e.target || "OPTION" === e.target.nodeName || "OPTGROUP" === e.target.nodeName) {
                    if (t)
                        if (t.addedNodes && t.addedNodes.length > 0)
                            for (var i = 0; i < t.addedNodes.length; i++) {
                                t.addedNodes[i].selected && (n = !0)
                            }
                        else
                            t.removedNodes && t.removedNodes.length > 0 && (n = !0);
                    else
                        n = !0;
                    n && this.dataAdapter.current(function(e) {
                        r.trigger("selection:update", {
                            data: e
                        })
                    })
                }
            }
            ,
            i.prototype.trigger = function(e, t) {
                var n = i.__super__.trigger
                  , r = {
                    open: "opening",
                    close: "closing",
                    select: "selecting",
                    unselect: "unselecting"
                };
                if (void 0 === t && (t = {}),
                e in r) {
                    var o = r[e]
                      , a = {
                        prevented: !1,
                        name: e,
                        args: t
                    };
                    if (n.call(this, o, a),
                    a.prevented)
                        return void (t.prevented = !0)
                }
                n.call(this, e, t)
            }
            ,
            i.prototype.toggleDropdown = function() {
                this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
            }
            ,
            i.prototype.open = function() {
                this.isOpen() || this.trigger("query", {})
            }
            ,
            i.prototype.close = function() {
                this.isOpen() && this.trigger("close", {})
            }
            ,
            i.prototype.isOpen = function() {
                return this.$container.hasClass("select2-container--open")
            }
            ,
            i.prototype.hasFocus = function() {
                return this.$container.hasClass("select2-container--focus")
            }
            ,
            i.prototype.focus = function() {
                this.hasFocus() || (this.$container.addClass("select2-container--focus"),
                this.trigger("focus", {}))
            }
            ,
            i.prototype.enable = function(e) {
                this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),
                (null == e || 0 === e.length) && (e = [!0]);
                var t = !e[0];
                this.$element.prop("disabled", t)
            }
            ,
            i.prototype.data = function() {
                this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                var e = [];
                return this.dataAdapter.current(function(t) {
                    e = t
                }),
                e
            }
            ,
            i.prototype.val = function(t) {
                if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),
                null == t || 0 === t.length)
                    return this.$element.val();
                var n = t[0];
                e.isArray(n) && (n = e.map(n, function(e) {
                    return e.toString()
                })),
                this.$element.val(n).trigger("change")
            }
            ,
            i.prototype.destroy = function() {
                this.$container.remove(),
                this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA),
                null != this._observer ? (this._observer.disconnect(),
                this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1),
                this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1),
                this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)),
                this._syncA = null,
                this._syncS = null,
                this.$element.off(".select2"),
                this.$element.attr("tabindex", this.$element.data("old-tabindex")),
                this.$element.removeClass("select2-hidden-accessible"),
                this.$element.attr("aria-hidden", "false"),
                this.$element.removeData("select2"),
                this.dataAdapter.destroy(),
                this.selection.destroy(),
                this.dropdown.destroy(),
                this.results.destroy(),
                this.dataAdapter = null,
                this.selection = null,
                this.dropdown = null,
                this.results = null
            }
            ,
            i.prototype.render = function() {
                var t = e('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                return t.attr("dir", this.options.get("dir")),
                this.$container = t,
                this.$container.addClass("select2-container--" + this.options.get("theme")),
                t.data("element", this.$element),
                t
            }
            ,
            i
        }),
        t.define("select2/compat/utils", ["jquery"], function(e) {
            function t(t, n, r) {
                var i, o, a = [];
                (i = e.trim(t.attr("class"))) && e((i = "" + i).split(/\s+/)).each(function() {
                    0 === this.indexOf("select2-") && a.push(this)
                }),
                (i = e.trim(n.attr("class"))) && e((i = "" + i).split(/\s+/)).each(function() {
                    0 !== this.indexOf("select2-") && (null != (o = r(this)) && a.push(o))
                }),
                t.attr("class", a.join(" "))
            }
            return {
                syncCssClasses: t
            }
        }),
        t.define("select2/compat/containerCss", ["jquery", "./utils"], function(e, t) {
            function n() {
                return null
            }
            function r() {}
            return r.prototype.render = function(r) {
                var i = r.call(this)
                  , o = this.options.get("containerCssClass") || "";
                e.isFunction(o) && (o = o(this.$element));
                var a = this.options.get("adaptContainerCssClass");
                if (a = a || n,
                -1 !== o.indexOf(":all:")) {
                    o = o.replace(":all:", "");
                    var s = a;
                    a = function(e) {
                        var t = s(e);
                        return null != t ? t + " " + e : e
                    }
                }
                var c = this.options.get("containerCss") || {};
                return e.isFunction(c) && (c = c(this.$element)),
                t.syncCssClasses(i, this.$element, a),
                i.css(c),
                i.addClass(o),
                i
            }
            ,
            r
        }),
        t.define("select2/compat/dropdownCss", ["jquery", "./utils"], function(e, t) {
            function n() {
                return null
            }
            function r() {}
            return r.prototype.render = function(r) {
                var i = r.call(this)
                  , o = this.options.get("dropdownCssClass") || "";
                e.isFunction(o) && (o = o(this.$element));
                var a = this.options.get("adaptDropdownCssClass");
                if (a = a || n,
                -1 !== o.indexOf(":all:")) {
                    o = o.replace(":all:", "");
                    var s = a;
                    a = function(e) {
                        var t = s(e);
                        return null != t ? t + " " + e : e
                    }
                }
                var c = this.options.get("dropdownCss") || {};
                return e.isFunction(c) && (c = c(this.$element)),
                t.syncCssClasses(i, this.$element, a),
                i.css(c),
                i.addClass(o),
                i
            }
            ,
            r
        }),
        t.define("select2/compat/initSelection", ["jquery"], function(e) {
            function t(e, t, n) {
                n.get("debug") && window.console && console.warn && console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"),
                this.initSelection = n.get("initSelection"),
                this._isInitialized = !1,
                e.call(this, t, n)
            }
            return t.prototype.current = function(t, n) {
                var r = this;
                return this._isInitialized ? void t.call(this, n) : void this.initSelection.call(null, this.$element, function(t) {
                    r._isInitialized = !0,
                    e.isArray(t) || (t = [t]),
                    n(t)
                })
            }
            ,
            t
        }),
        t.define("select2/compat/inputData", ["jquery"], function(e) {
            function t(e, t, n) {
                this._currentData = [],
                this._valueSeparator = n.get("valueSeparator") || ",",
                "hidden" === t.prop("type") && n.get("debug") && console && console.warn && console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."),
                e.call(this, t, n)
            }
            return t.prototype.current = function(t, n) {
                function r(t, n) {
                    var i = [];
                    return t.selected || -1 !== e.inArray(t.id, n) ? (t.selected = !0,
                    i.push(t)) : t.selected = !1,
                    t.children && i.push.apply(i, r(t.children, n)),
                    i
                }
                for (var i = [], o = 0; o < this._currentData.length; o++) {
                    var a = this._currentData[o];
                    i.push.apply(i, r(a, this.$element.val().split(this._valueSeparator)))
                }
                n(i)
            }
            ,
            t.prototype.select = function(t, n) {
                if (this.options.get("multiple")) {
                    var r = this.$element.val();
                    r += this._valueSeparator + n.id,
                    this.$element.val(r),
                    this.$element.trigger("change")
                } else
                    this.current(function(t) {
                        e.map(t, function(e) {
                            e.selected = !1
                        })
                    }),
                    this.$element.val(n.id),
                    this.$element.trigger("change")
            }
            ,
            t.prototype.unselect = function(e, t) {
                var n = this;
                t.selected = !1,
                this.current(function(e) {
                    for (var r = [], i = 0; i < e.length; i++) {
                        var o = e[i];
                        t.id != o.id && r.push(o.id)
                    }
                    n.$element.val(r.join(n._valueSeparator)),
                    n.$element.trigger("change")
                })
            }
            ,
            t.prototype.query = function(e, t, n) {
                for (var r = [], i = 0; i < this._currentData.length; i++) {
                    var o = this._currentData[i]
                      , a = this.matches(t, o);
                    null !== a && r.push(a)
                }
                n({
                    results: r
                })
            }
            ,
            t.prototype.addOptions = function(t, n) {
                var r = e.map(n, function(t) {
                    return e.data(t[0], "data")
                });
                this._currentData.push.apply(this._currentData, r)
            }
            ,
            t
        }),
        t.define("select2/compat/matcher", ["jquery"], function(e) {
            function t(t) {
                function n(n, r) {
                    var i = e.extend(!0, {}, r);
                    if (null == n.term || "" === e.trim(n.term))
                        return i;
                    if (r.children) {
                        for (var o = r.children.length - 1; o >= 0; o--) {
                            var a = r.children[o];
                            t(n.term, a.text, a) || i.children.splice(o, 1)
                        }
                        if (i.children.length > 0)
                            return i
                    }
                    return t(n.term, r.text, r) ? i : null
                }
                return n
            }
            return t
        }),
        t.define("select2/compat/query", [], function() {
            function e(e, t, n) {
                n.get("debug") && window.console && console.warn && console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."),
                e.call(this, t, n)
            }
            return e.prototype.query = function(e, t, n) {
                t.callback = n,
                this.options.get("query").call(null, t)
            }
            ,
            e
        }),
        t.define("select2/dropdown/attachContainer", [], function() {
            function e(e, t, n) {
                e.call(this, t, n)
            }
            return e.prototype.position = function(e, t, n) {
                n.find(".dropdown-wrapper").append(t),
                t.addClass("select2-dropdown--below"),
                n.addClass("select2-container--below")
            }
            ,
            e
        }),
        t.define("select2/dropdown/stopPropagation", [], function() {
            function e() {}
            return e.prototype.bind = function(e, t, n) {
                e.call(this, t, n);
                var r = ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"];
                this.$dropdown.on(r.join(" "), function(e) {
                    e.stopPropagation()
                })
            }
            ,
            e
        }),
        t.define("select2/selection/stopPropagation", [], function() {
            function e() {}
            return e.prototype.bind = function(e, t, n) {
                e.call(this, t, n);
                var r = ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"];
                this.$selection.on(r.join(" "), function(e) {
                    e.stopPropagation()
                })
            }
            ,
            e
        }),
        n = function(e) {
            function t(t) {
                var a = t || window.event
                  , s = c.call(arguments, 1)
                  , u = 0
                  , f = 0
                  , d = 0
                  , p = 0
                  , h = 0
                  , m = 0;
                if ((t = e.event.fix(a)).type = "mousewheel",
                "detail"in a && (d = -1 * a.detail),
                "wheelDelta"in a && (d = a.wheelDelta),
                "wheelDeltaY"in a && (d = a.wheelDeltaY),
                "wheelDeltaX"in a && (f = -1 * a.wheelDeltaX),
                "axis"in a && a.axis === a.HORIZONTAL_AXIS && (f = -1 * d,
                d = 0),
                u = 0 === d ? f : d,
                "deltaY"in a && (u = d = -1 * a.deltaY),
                "deltaX"in a && (f = a.deltaX,
                0 === d && (u = -1 * f)),
                0 !== d || 0 !== f) {
                    if (1 === a.deltaMode) {
                        var g = e.data(this, "mousewheel-line-height");
                        u *= g,
                        d *= g,
                        f *= g
                    } else if (2 === a.deltaMode) {
                        var v = e.data(this, "mousewheel-page-height");
                        u *= v,
                        d *= v,
                        f *= v
                    }
                    if (p = Math.max(Math.abs(d), Math.abs(f)),
                    (!o || o > p) && (o = p,
                    r(a, p) && (o /= 40)),
                    r(a, p) && (u /= 40,
                    f /= 40,
                    d /= 40),
                    u = Math[u >= 1 ? "floor" : "ceil"](u / o),
                    f = Math[f >= 1 ? "floor" : "ceil"](f / o),
                    d = Math[d >= 1 ? "floor" : "ceil"](d / o),
                    l.settings.normalizeOffset && this.getBoundingClientRect) {
                        var y = this.getBoundingClientRect();
                        h = t.clientX - y.left,
                        m = t.clientY - y.top
                    }
                    return t.deltaX = f,
                    t.deltaY = d,
                    t.deltaFactor = o,
                    t.offsetX = h,
                    t.offsetY = m,
                    t.deltaMode = 0,
                    s.unshift(t, u, f, d),
                    i && clearTimeout(i),
                    i = setTimeout(n, 200),
                    (e.event.dispatch || e.event.handle).apply(this, s)
                }
            }
            function n() {
                o = null
            }
            function r(e, t) {
                return l.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 == 0
            }
            var i, o, a = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], s = "onwheel"in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], c = Array.prototype.slice;
            if (e.event.fixHooks)
                for (var u = a.length; u; )
                    e.event.fixHooks[a[--u]] = e.event.mouseHooks;
            var l = e.event.special.mousewheel = {
                version: "3.1.12",
                setup: function() {
                    if (this.addEventListener)
                        for (var n = s.length; n; )
                            this.addEventListener(s[--n], t, !1);
                    else
                        this.onmousewheel = t;
                    e.data(this, "mousewheel-line-height", l.getLineHeight(this)),
                    e.data(this, "mousewheel-page-height", l.getPageHeight(this))
                },
                teardown: function() {
                    if (this.removeEventListener)
                        for (var n = s.length; n; )
                            this.removeEventListener(s[--n], t, !1);
                    else
                        this.onmousewheel = null;
                    e.removeData(this, "mousewheel-line-height"),
                    e.removeData(this, "mousewheel-page-height")
                },
                getLineHeight: function(t) {
                    var n = e(t)
                      , r = n["offsetParent"in e.fn ? "offsetParent" : "parent"]();
                    return r.length || (r = e("body")),
                    parseInt(r.css("fontSize"), 10) || parseInt(n.css("fontSize"), 10) || 16
                },
                getPageHeight: function(t) {
                    return e(t).height()
                },
                settings: {
                    adjustOldDeltas: !0,
                    normalizeOffset: !0
                }
            };
            e.fn.extend({
                mousewheel: function(e) {
                    return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
                },
                unmousewheel: function(e) {
                    return this.unbind("mousewheel", e)
                }
            })
        }
        ,
        "function" == typeof t.define && t.define.amd ? t.define("jquery-mousewheel", ["jquery"], n) : "object" == typeof exports ? module.exports = n : n(e),
        t.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"], function(e, t, n, r) {
            if (null == e.fn.select2) {
                var i = ["open", "close", "destroy"];
                e.fn.select2 = function(t) {
                    if ("object" == typeof (t = t || {}))
                        return this.each(function() {
                            var r = e.extend(!0, {}, t);
                            new n(e(this),r)
                        }),
                        this;
                    if ("string" == typeof t) {
                        var r, o = Array.prototype.slice.call(arguments, 1);
                        return this.each(function() {
                            var n = e(this).data("select2");
                            null == n && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2."),
                            r = n[t].apply(n, o)
                        }),
                        e.inArray(t, i) > -1 ? this : r
                    }
                    throw new Error("Invalid arguments for Select2: " + t)
                }
            }
            return null == e.fn.select2.defaults && (e.fn.select2.defaults = r),
            n
        }),
        {
            define: t.define,
            require: t.require
        }
    }()
      , n = t.require("jquery.select2");
    return e.fn.select2.amd = t,
    n
}),
window.Scryfall = {
    currentURI: new URI(window.location),
    preferences: _.memoize(function() {
        var e = Scryfall.cookies.fetch("preferences");
        return {
            casterMode: !!e && -1 != e.indexOf("caster")
        }
    }),
    features: {
        intersectionObserver: window.hasOwnProperty("IntersectionObserver")
    },
    accountIsSignedIn: function() {
        return "user" === Scryfall.cookies.fetch("optmode") || "admin" === Scryfall.cookies.fetch("optmode")
    },
    accountIsNotSignedIn: function() {
        return !Scryfall.accountIsSignedIn()
    },
    adminIsSignedIn: function() {
        return "admin" === Scryfall.cookies.fetch("optmode")
    },
    globalKeyboardShortcutsAreDisabled: function() {
        return _.includes(Scryfall.currentURI.pathname(), "/admin") || !!Scryfall.deckbuilder
    },
    mousePosition: {
        x: null,
        y: null
    },
    notifcationTray: null,
    deckTray: null,
    pushNotification: function(e, t, n, r) {
        Scryfall.notificationTray.pushNotification(e, t, n, r)
    },
    components: [],
    createComponent: function(e) {
        _.each(document.querySelectorAll(e.selector), function(t) {
            var n = new Vue(_.extend({}, e, {
                el: t
            }));
            e.globalKeyboardEvents && _.each(e.globalKeyboardEvents, function(e, t) {
                var r = t.split(" ");
                Mousetrap.bind(r[0], function(t) {
                    n[e](t)
                }, r[1])
            }),
            Scryfall.components.push({
                name: e.name,
                vue: n
            }),
            "NotificationTray" == e.name && (Scryfall.notificationTray = n),
            "DeckTray" == e.name && (Scryfall.deckTray = n),
            "Deckbuilder" == e.name && (Scryfall.deckbuilder = n),
            "AdminCardEditor" == e.name && (Scryfall.adminCardEditor = n),
            "DeckExportModal" == e.name && (Scryfall.deckExportModal = n)
        })
    },
    closeAllModals: function() {
        Scryfall.deckbuilder && Scryfall.deckbuilder.closeAllModals(),
        Scryfall.deckExportModal && Scryfall.deckExportModal.closeModal()
    },
    initialize: function() {
        if (Scryfall.accountIsSignedIn()) {
            if ($(document).bind("mousemove", _.throttle(function(e) {
                Scryfall.mousePosition.x = e.pageX,
                Scryfall.mousePosition.y = e.pageY
            }, 5)),
            _.startsWith(Scryfall.currentURI.directory(), "/admin"))
                return !1;
            if (_.startsWith(Scryfall.currentURI.directory(), "/docs"))
                return !1;
            ScryfallAPI.oauth.deckbuilderGrant(function(e) {
                ScryfallAPI.grantSecret = e.grant_secret,
                Scryfall.deckTray && Scryfall.deckTray.initialize(),
                Scryfall.deckbuilder && Scryfall.deckbuilder.initialize()
            })
        }
    },
    registerComponent: function(e, t, n) {
        if (Scryfall.components.hasOwnProperty(e))
            throw '"' + e + '" is already defined.';
        n = n || {},
        Scryfall.components[e] = {
            h: t,
            p: n.priority || 0
        }
    },
    run: function(e) {
        var t, n = (e || document).querySelectorAll("[data-component]"), r = [];
        for (t = 0; t < n.length; t += 1) {
            var i = n[t]
              , o = Scryfall.components[i.getAttribute("data-component")];
            o && !i.__init && (i.__init = !0,
            r.push({
                el: i,
                h: o.h,
                p: o.p
            }))
        }
        for (r = r.sort(function(e, t) {
            return e.p - t.p
        }),
        t = 0; t < r.length; t += 1) {
            var a = r[t];
            Backbone.View.prototype.isPrototypeOf(a.h.prototype) ? new a.h({
                el: a.el
            }) : a.h(a.el)
        }
    }
},
window.Scryfall.util = {
    mousePositionIsValid: function() {
        return !(!Scryfall.mousePosition.x || !Scryfall.mousePosition.y)
    },
    elementUnderCursor: function() {
        return Scryfall.util.mousePositionIsValid() ? document.elementFromPoint(Scryfall.mousePosition.x - window.pageXOffset, Scryfall.mousePosition.y - window.pageYOffset) : null
    },
    inputValuesByAppendingString: function(e, t) {
        return {
            newValue: e.value + t,
            newSelection: e.value.length
        }
    },
    inputValuesByDiscardingSelection: function(e) {
        return {
            removedValue: e.value.substr(e.selectionStart, e.selectionEnd),
            newValue: e.value.substr(0, e.selectionStart) + e.value.substr(e.selectionEnd),
            newSelection: e.selectionStart
        }
    },
    inputValuesBySplittingAtSelection: function(e) {
        var t = e.selectionEnd - e.selectionStart;
        return {
            beforeFragment: e.value.substr(0, e.selectionStart),
            removedFragment: e.value.substr(e.selectionStart, t),
            afterFragment: e.value.substr(e.selectionEnd)
        }
    }
},
window.Scryfall.cookies = {
    fetch: function(e) {
        return e && decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null
    },
    store: function(e, t, n, r, i, o) {
        if (!e || /^(?:expires|max\-age|path|domain|secure)$/i.test(e))
            return !1;
        var a = "";
        if (n)
            switch (n.constructor) {
            case Number:
                a = n === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + n;
                break;
            case String:
                a = "; expires=" + n;
                break;
            case Date:
                a = "; expires=" + n.toUTCString()
            }
        return document.cookie = encodeURIComponent(e) + "=" + encodeURIComponent(t) + a + (i ? "; domain=" + i : "") + (r ? "; path=" + r : "") + (o ? "; secure" : ""),
        !0
    },
    "delete": function(e, t, n) {
        return !!this.hasItem(e) && (document.cookie = encodeURIComponent(e) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (n ? "; domain=" + n : "") + (t ? "; path=" + t : ""),
        !0)
    },
    exists: function(e) {
        return !(!e || /^(?:expires|max\-age|path|domain|secure)$/i.test(e)) && new RegExp("(?:^|;\\s*)" + encodeURIComponent(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(document.cookie)
    }
},
window.ScryfallAPI = {
    grantSecret: null,
    uriPrefix: "https://api.scryfall.com",
    axiosConfig: function() {
        return {
            headers: {
                Authorization: "Bearer " + ScryfallAPI.grantSecret
            }
        }
    },
    attemptVisibleUserNotification: function(e) {
        if (_.isPresent(e.type))
            switch (e.type) {
            case "deck_too_large":
                Scryfall.pushNotification("Deck too large", "Decks cannot exceed 1,200 unique cards. Delete cards, clean up, or create a new deck to add this card.", "red", "alert")
            }
    },
    oauth: {
        deckbuilderGrant: function(e, t) {
            Axios.get("/oauth/deckbuilder-grant").then(function(n) {
                console.log("Fetched deckbuilder grant", n.data),
                e.bind(t)(n.data)
            })["catch"](function(e) {
                console.log(e)
            })
        }
    },
    cards: {
        oracleId: function(e, t, n, r) {
            var i = ScryfallAPI.uriPrefix + "/cards/oracle/" + e + "?lang=" + t;
            Axios.get(i, ScryfallAPI.axiosConfig()).then(function(e) {
                console.log("Fetched oracle_id prints", e.data),
                n.bind(r)(e.data)
            })["catch"](function(e) {
                console.log(e)
            })
        }
    },
    decks: {
        active: function(e, t) {
            Axios.get(ScryfallAPI.uriPrefix + "/decks/active", ScryfallAPI.axiosConfig()).then(function(n) {
                204 === n.status ? (console.log("No active deck"),
                e.bind(t)(null)) : (console.log("Fetched active deck", n.data),
                e.bind(t)(n.data))
            })["catch"](function(e) {
                console.log(e)
            })
        },
        clearActive: function(e, t) {
            Axios["delete"](ScryfallAPI.uriPrefix + "/decks/active", ScryfallAPI.axiosConfig()).then(function(n) {
                console.log("Cleared active deck", n.data),
                e.bind(t)(n.data)
            })["catch"](function(e) {
                console.log(e)
            })
        },
        updateActive: function(e, t, n) {
            Axios.post(ScryfallAPI.uriPrefix + "/decks/active", {
                id: e
            }, ScryfallAPI.axiosConfig()).then(function(e) {
                console.log("Updated active deck", e.data),
                t.bind(n)(e.data)
            })["catch"](function(e) {
                console.log(e)
            })
        },
        recent: function(e, t) {
            Axios.get(ScryfallAPI.uriPrefix + "/decks/recent", ScryfallAPI.axiosConfig()).then(function(n) {
                console.log("Fetched recent decks", n.data),
                e.bind(t)(n.data)
            })["catch"](function(e) {
                console.log(e)
            })
        },
        create: function(e, t, n) {
            Axios.post(ScryfallAPI.uriPrefix + "/decks", e, ScryfallAPI.axiosConfig()).then(function(e) {
                console.log("Created deck", e.data),
                t.bind(n)(e.data)
            })["catch"](function(e) {
                console.log(e)
            })
        },
        get: function(e, t, n) {
            Axios.get(ScryfallAPI.uriPrefix + "/decks/" + e + "?sf=true", ScryfallAPI.axiosConfig()).then(function(e) {
                console.log("Fetched deck", e.data),
                t.bind(n)(e.data)
            })["catch"](function(e) {
                console.log(e)
            })
        },
        stats: function(e, t, n) {
            Axios.get(ScryfallAPI.uriPrefix + "/decks/" + e + "/stats", ScryfallAPI.axiosConfig()).then(function(e) {
                console.log("Fetched deck stats", e.data),
                t.bind(n)(e.data)
            })["catch"](function(e) {
                console.log(e)
            })
        },
        rename: function(e, t, n) {
            Axios.post(ScryfallAPI.uriPrefix + "/decks/" + e.id + "/rename", {
                name: e.name
            }, ScryfallAPI.axiosConfig()).then(function(e) {
                console.log("Updated deck name", e.data),
                t.bind(n)(e.data)
            })["catch"](function(e) {
                console.log(e)
            })
        },
        describe: function(e, t, n) {
            Axios.post(ScryfallAPI.uriPrefix + "/decks/" + e.id + "/describe", {
                description: e.description
            }, ScryfallAPI.axiosConfig()).then(function(e) {
                console.log("Updated deck description", e.data),
                t.bind(n)(e.data)
            })["catch"](function(e) {
                console.log(e)
            })
        },
        cleanup: function(e, t, n) {
            Axios.post(ScryfallAPI.uriPrefix + "/decks/" + e.id + "/cleanup", {}, ScryfallAPI.axiosConfig()).then(function(e) {
                console.log("Cleaned-up deck", e.data),
                t.bind(n)(e.data)
            })["catch"](function(e) {
                console.log(e)
            })
        },
        trash: function(e, t, n) {
            Axios.post(ScryfallAPI.uriPrefix + "/decks/" + e.id + "/trash", {}, ScryfallAPI.axiosConfig()).then(function(e) {
                console.log("Trashed deck", e.data),
                t.bind(n)(e.data)
            })["catch"](function(e) {
                console.log(e)
            })
        },
        restore: function(e, t, n) {
            Axios.post(ScryfallAPI.uriPrefix + "/decks/" + e.id + "/restore", {}, ScryfallAPI.axiosConfig()).then(function(e) {
                console.log("Restored deck", e.data),
                t.bind(n)(e.data)
            })["catch"](function(e) {
                console.log(e)
            })
        },
        "delete": function(e, t, n) {
            Axios["delete"](ScryfallAPI.uriPrefix + "/decks/" + e.id, ScryfallAPI.axiosConfig()).then(function(e) {
                console.log("Deleted deck", e.data),
                t.bind(n)(e.data)
            })["catch"](function(e) {
                console.log(e)
            })
        },
        addCard: function(e, t, n, r) {
            var i = {
                id: t,
                sf: !0
            };
            Axios.post(ScryfallAPI.uriPrefix + "/decks/" + e + "/card?sf=true", i, ScryfallAPI.axiosConfig()).then(function(e) {
                console.log("Appended card to deck", e.data),
                n.bind(r)(e.data)
            })["catch"](function(e) {
                ScryfallAPI.attemptVisibleUserNotification(e.response.data),
                console.log(e)
            })
        },
        createEntry: function(e, t, n, r) {
            var i = {
                raw_text: t.raw_text,
                section: t.section,
                cardinality: t.cardinality,
                sf: !0
            };
            Axios.post(ScryfallAPI.uriPrefix + "/decks/" + e + "/entry", i, ScryfallAPI.axiosConfig()).then(function(e) {
                console.log("Created deck entry", e.data),
                n.bind(r)(e.data)
            })["catch"](function(e) {
                console.log(e)
            })
        },
        replaceEntry: function(e, t, n, r) {
            Axios.post(ScryfallAPI.uriPrefix + "/decks/" + e + "/entry/" + t.id + "/replace?sf=true", {
                raw_text: t.raw_text
            }, ScryfallAPI.axiosConfig()).then(function(e) {
                console.log("Replaced deck entry", e.data),
                n.bind(r)(e.data)
            })["catch"](function(e) {
                console.log(e)
            })
        },
        updateEntry: function(e, t, n, r) {
            var i = {
                count: t.count,
                section: t.section,
                cardinality: t.cardinality,
                printing_specified: t.printing_specified,
                foil: t.foil,
                sf: !0
            };
            t.hasOwnProperty("card_id") && (i.card_id = t.card_id),
            Axios.post(ScryfallAPI.uriPrefix + "/decks/" + e + "/entry/" + t.id, i, ScryfallAPI.axiosConfig()).then(function(e) {
                console.log("Updated deck entry", e.data),
                n.bind(r)(e.data)
            })["catch"](function(e) {
                console.log(e)
            })
        },
        destroyEntry: function(e, t, n, r) {
            Axios["delete"](ScryfallAPI.uriPrefix + "/decks/" + e + "/entry/" + t, ScryfallAPI.axiosConfig()).then(function(e) {
                console.log("Deleted deck entry", e.data),
                n.bind(r)(e.data)
            })["catch"](function(e) {
                console.log(e)
            })
        },
        exportArena: function(e, t, n) {
            Axios.get(ScryfallAPI.uriPrefix + "/decks/" + e + "/export/arena", ScryfallAPI.axiosConfig()).then(function(e) {
                console.log("Fetched Arena text", e.data),
                t.bind(n)(e.data)
            })["catch"](function(e) {
                console.log(e)
            })
        },
        exportText: function(e, t, n) {
            Axios.get(ScryfallAPI.uriPrefix + "/decks/" + e + "/export/text", ScryfallAPI.axiosConfig()).then(function(e) {
                console.log("Fetched deck text", e.data),
                t.bind(n)(e.data)
            })["catch"](function(e) {
                console.log(e)
            })
        }
    }
};
var ScryfallStorage = function() {
    var e = null
      , t = "scryfall";
    return {
        enabled: function() {
            if (null === e)
                try {
                    localStorage.setItem(t, t),
                    localStorage.removeItem(t),
                    e = !0
                } catch (n) {
                    e = !1
                }
            return e
        },
        get: function(e) {
            if (this.enabled()) {
                var n = localStorage.getItem(t + "-" + e);
                if (n && ("{" === n[0] || "[" === n[0]))
                    return JSON.parse(n)
            }
            return n || null
        },
        set: function(e, n) {
            this.enabled() && ("object" == typeof n && (n = JSON.stringify(n)),
            localStorage.setItem(t + "-" + e, n))
        },
        remove: function(e) {
            this.enabled() && localStorage.removeItem(t + "-" + e)
        }
    }
}();
ModalWindow = function() {
    var e;
    return {
        open: function(t) {
            return this.close(),
            (e = $('<div class="modal-overlay js-close"><div class="modal-window"></div></div>')).find(".modal-window").html(t),
            e.appendTo("body").on("click", function(e) {
                /js-close/.test(e.target.className) && this.close()
            }
            .bind(this))
        },
        close: function() {
            e && (e.remove().off(),
            e = null)
        }
    }
}(),
Mousetrap.bind(["esc"], function() {
    Scryfall.closeAllModals()
}),
Mousetrap.bind(["a", "+", "="], function(e) {
    if (Scryfall.globalKeyboardShortcutsAreDisabled())
        return !1;
    Scryfall.deckTray.activeDeck && Scryfall.deckTray.attemptMouseAppend(e)
}),
Mousetrap.bind(["s"], function() {
    if (Scryfall.globalKeyboardShortcutsAreDisabled())
        return !1;
    window.location = "/advanced"
}),
Mousetrap.bind(["r"], function() {
    if (Scryfall.globalKeyboardShortcutsAreDisabled())
        return !1;
    window.location = "/random"
}),
Vue.component("deck-export-dropdown", {
    template: "#x-template-deck-export-dropdown",
    props: ["title"],
    data: function() {
        return {
            deckId: null,
            fullText: null,
            arenaText: null,
            embedHTML: null
        }
    },
    mounted: function() {
        this.deckId = this.$el.dataset.deckId,
        this.arenaTextClipboardJS = new ClipboardJS(this.$refs.copyToArenaButton,{
            text: function() {
                return this.arenaText
            }
            .bind(this)
        }),
        this.arenaTextClipboardJS.on("success", function() {
            Scryfall.pushNotification("Copied", "Deck copied to your clipboard", "blue", "clipboard")
        }
        .bind(this)),
        this.fullTextClipboardJS = new ClipboardJS(this.$refs.copyToClipboardButton,{
            text: function() {
                return this.fullText
            }
            .bind(this)
        }),
        this.fullTextClipboardJS.on("success", function() {
            Scryfall.pushNotification("Copied", "Deck copied to your clipboard", "blue", "clipboard")
        }
        .bind(this))
    },
    methods: {
        fetchExportTexts: function() {
            ScryfallAPI.decks.exportArena(this.deckId, function(e) {
                this.arenaText = e
            }, this),
            ScryfallAPI.decks.exportText(this.deckId, function(e) {
                this.fullText = e
            }, this)
        },
        clearExportTexts: function() {
            this.arenaText = null,
            this.fullText = null,
            this.embedHTML = null
        }
    }
}),
Vue.component("dropdown-menu", {
    template: "#x-template-dropdown-menu",
    props: ["title", "button-classes"],
    data: function() {
        return {
            rightAligned: !1,
            expanded: !1,
            componentId: _.uniqueId("dropdown-menu-")
        }
    },
    methods: {
        buttonCSSClass: function() {
            return "button-n " + _.toString(this.buttonClasses)
        },
        toggle: function() {
            this.expanded = !this.expanded,
            this.$refs.menuItems.style.top = _.toString(this.$refs.toggleButton.offsetHeight + 6) + "px";
            var e = window.innerWidth - this.$refs.toggleButton.getBoundingClientRect().right;
            this.rightAligned = e < 185,
            this.expanded ? this.$emit("opened") : this.$emit("closed")
        },
        isToggled: function() {
            return this.expanded
        },
        untoggle: function() {
            this.expanded = !1,
            this.$emit("closed")
        }
    }
}),
Scryfall.adminIsSignedIn() && Scryfall.createComponent({
    selector: "#admin-tray",
    name: "AdminTray",
    data: function() {
        return {
            optionKeyIsDown: !1,
            cacheClearing: !1,
            printingID: null,
            oracleID: null,
            uris: {
                cardEditURI: null,
                cardCopyURI: null,
                cardInspectURI: null
            }
        }
    },
    mounted: function() {
        this.printingID = $("meta[name='scryfall:card:id']").attr("content"),
        this.oracleID = $("meta[name='scryfall:oracle:id']").attr("content"),
        this.printingID && this.oracleID && (this.uris.cardEditURI = "/admin/cards/" + this.printingID + "/edit",
        this.uris.cardCloneURI = "/admin/cards/" + this.printingID + "/clone",
        this.uris.cardReprintURI = "/admin/cards/oracle/" + this.oracleID + "/reprint",
        this.uris.cardInspectURI = "/admin/cards/" + this.printingID);
        var e = this;
        Mousetrap.bind("alt", function() {
            e.optionKeyIsDown = !0
        }, "keydown"),
        Mousetrap.bind("alt", function() {
            e.optionKeyIsDown = !1
        }, "keyup")
    },
    methods: {
        openIgnoringOptionKey: function(e) {
            this.optionKeyIsDown && (e.preventDefault(),
            window.location = e.currentTarget.href)
        },
        cardOperationsShown: function() {
            return !!this.printingID && !!this.oracleID
        },
        clearCaches: function() {
            if (this.cacheClearing)
                return !1;
            this.cacheClearing = !0,
            fetch("/admin/maintenance/cache-clear", {
                method: "post",
                credentials: "same-origin"
            }).then(function(e) {
                return e.json()
            }).then(function(e) {
                return console.log("Cache clear:", e),
                !0
            })["catch"](function(e) {
                console.error(e)
            }),
            window.setTimeout(this.stopCacheClearing, 500)
        },
        stopCacheClearing: function() {
            this.cacheClearing = !1
        },
        cacheButtonLabel: function() {
            return this.cacheClearing ? "Clearing\u2026" : "Clear Caches"
        }
    }
}),
$(function() {
    $(".advanced-search [data-component=advanced-search-autocomplete]").each(function(e, t) {
        function n(e) {
            var t = !1;
            return o.find("option").each(function() {
                $.trim(e.term).toUpperCase() === $.trim($(this).text()).toUpperCase() && (t = !0)
            }),
            t ? null : {
                id: e.term,
                text: e.term.charAt(0).toUpperCase() + e.term.slice(1),
                isNew: !0
            }
        }
        function r(e) {
            var t = $(e.element).attr("data-svg-code");
            if (typeof t != typeof undefined && !1 !== t)
                return $("<svg><use xlink:href='#sets-" + t + "-svg'></use></svg><span>" + e.text + "</span>");
            var n = $(e.element).attr("data-desc");
            return typeof n != typeof undefined && !1 !== n ? $("<div class='select-item'>" + e.text + "</div><div class='select-desc'>" + n + "</div>") : e.text
        }
        function i(e) {
            var t = $(e.element).attr("data-svg-code");
            if (typeof t != typeof undefined && !1 !== t)
                return $("<svg><use xlink:href='#sets-" + t + "-svg'></use></svg><span>" + e.text + "</span>");
            var n = $(e.element).attr("data-pol")
              , r = $(e.element).val();
            if (typeof n != typeof undefined && !1 !== n) {
                var i = "-" == n ? "negative" : ""
                  , o = "-" == n ? "not" : "is";
                return $("<span class='select2-text'>" + e.text + "</span><span class='select2-polarity " + i + "' role='presentation' data-item='" + r + "'>" + o + "</span> ")
            }
            return e.text
        }
        var o = $(t);
        allowTags = 1 == o.data("allow-entry"),
        o.select2({
            closeOnSelect: !0,
            selectOnBlur: !0,
            placeholder: o.data("placeholder"),
            dropdownParent: o.parents(".form-layout").first(),
            templateResult: r,
            templateSelection: i,
            tags: allowTags,
            createTag: n,
            dataAdapter: createCustomSelect2DataAdapter()
        })
    })
}),
$(function() {
    $(".select2-selection__rendered").on("click", ".select2-polarity", function(e) {
        e.preventDefault(),
        e.stopImmediatePropagation();
        var t = $(this).attr("data-item")
          , n = $(this).closest(".selection").parent().parent().find("select").find("option[data-item='" + t + "']");
        $(this).hasClass("negative") ? ($(this).removeClass("negative"),
        $(this).text("is"),
        n.val(t),
        n.attr("data-pol", "+")) : ($(this).addClass("negative"),
        $(this).text("not"),
        n.val("-" + t),
        n.attr("data-pol", "-"))
    })
}),
$(function() {
    var e = !1
      , t = " -webkit- -moz- -o- -ms- ".split(" ")
      , n = function(e) {
        return window.matchMedia(e).matches
    };
    ("ontouchstart"in window || window.DocumentTouch && document instanceof DocumentTouch) && (e = !0),
    (n(["(", t.join("touch-enabled),("), "heartz", ")"].join("")) || e) && $(".select2-search__field").attr("readonly", "true").attr("data-freeze", "frozen")
}),
$(function() {
    $(".select2").on("touchstart", "[data-freeze=frozen]", function() {
        $(this).attr("data-freeze", "thawed"),
        $(this).attr("data-orig-placeholder", $(this).attr("placeholder")),
        $(this).attr("placeholder", "Tap again to search with the keyboard")
    }),
    $(".select2").on("touchstart", "[data-freeze=thawed]", function() {
        $(this).attr("data-freeze", "warm").removeAttr("readonly").focus(),
        $(this).attr("placeholder", $(this).attr("data-orig-placeholder"))
    }),
    $("[data-component=advanced-search-autocomplete]").on("select2:select", function() {
        $(this).parent().find("[data-freeze=warm], [data-freeze=thawed]").attr("readonly", "true").attr("data-freeze", "frozen"),
        $(this).attr("placeholder", $(this).attr("data-orig-placeholder"))
    })
});
var AdvancedSearchDuplicantView = Backbone.View.extend({
    currentSize: 1,
    initialize: function() {
        this.$template = this.$(".js-advanced-search-duplicant-template"),
        this.$tip = this.$(".js-advanced-search-row-tip")
    },
    allFieldsFull: function() {
        return !this.$el.find("input, select").filter(function() {
            return "" == $(this).val()
        }).length
    },
    attemptDuplication: function() {
        var e = this;
        if (e.currentSize < 4 && e.allFieldsFull()) {
            e.currentSize = e.currentSize + 1;
            var t = e.$template.clone().removeClass("js-advanced-search-duplicant-template");
            t.find("label").each(function(t, n) {
                var r = $(n);
                r.attr("for", r.attr("for").replace("1", e.currentSize)),
                r.html(r.html().replace("1", e.currentSize))
            }),
            t.find("select, input").each(function(t, n) {
                var r = $(n);
                r.attr("id", r.attr("id").replace("1", e.currentSize)),
                r.attr("name", r.attr("name").replace("1", e.currentSize)),
                r.val(null)
            }),
            this.$tip.before(t)
        }
    },
    events: {
        "change select": "attemptDuplication",
        "change input": "attemptDuplication",
        "keyup select": "attemptDuplication",
        "keyup input": "attemptDuplication"
    }
});
$(".js-advanced-search-duplicant").each(function(e, t) {
    new AdvancedSearchDuplicantView({
        el: t
    })
});
var AdvancedSearchSubjoinerView = Backbone.View.extend({
    initialize: function() {
        this.$textField = $("#" + this.$el.data("field-id")),
        this.separator = this.$el.data("separator")
    },
    subjoinValue: function() {
        var e = this.$textField.val() + this.separator + this.$el.val();
        this.$textField.val(e.trim()),
        this.$el.blur(),
        this.$textField.focus(),
        this.$el.val(null)
    },
    events: {
        change: "subjoinValue"
    }
});
$(".js-advanced-search-subjoiner").each(function(e, t) {
    new AdvancedSearchSubjoinerView({
        el: t
    })
});
var AdvancedSearchToggleView = Backbone.View.extend({
    clearValues: function() {
        var e = this.$el.attr("data-toggle")
          , t = this.$el.attr("data-group");
        "color" == e && $("[data-toggle=colorless][data-group=" + t + "]").prop("checked", !1),
        "colorless" == e && $("[data-toggle=color][data-group=" + t + "]").prop("checked", !1)
    },
    events: {
        click: "clearValues"
    }
});
$(".js-advanced-search-toggle").each(function(e, t) {
    new AdvancedSearchToggleView({
        el: t
    })
});
var APIExampleView = Backbone.View.extend({
    initialize: function() {
        var e = this.$el.find(".api-example-uri").first();
        this.requestURI = e.html(),
        $.ajax({
            url: this.requestURI,
            method: e.data("method") || "get",
            data: e.attr("data-body") || null,
            contentType: !!e.attr("data-body") && "application/json",
            success: _.bind(this.presentRequestResults, this),
            error: _.bind(this.presentRequestError, this)
        })
    },
    determineFormat: function(e) {
        return -1 !== e.getResponseHeader("Content-Type").indexOf("text/plain") ? "text" : "json"
    },
    presentRequestResults: function(e, t, n) {
        var r = "HTTP " + n.status + " " + n.statusText + "\nContent-Type: " + n.getResponseHeader("Content-Type") + "\n\n";
        "text" === this.determineFormat(n) ? r += e : r += JSON.stringify(e, null, "  ");
        var i = $("<pre class='api-example-results'></pre>").text(r);
        this.$el.after(i)
    },
    presentRequestError: function(e) {
        var t = "HTTP " + e.status + " " + e.statusText + "\nContent-Type: " + e.getResponseHeader("Content-Type") + "\n\n" + JSON.stringify(JSON.parse(e.responseText), null, "  ")
          , n = $("<pre class='api-example-results'></pre>").text(t);
        this.$el.after(n)
    }
});
$(".api-example").each(function(e, t) {
    new APIExampleView({
        el: t
    })
});
var BackLinkView = Backbone.View.extend({
    initialize: function() {
        history && history.length > 1 ? this.$el.html("Go Back") : this.undelegateEvents()
    },
    events: {
        click: function(e) {
            e.preventDefault(),
            history.back()
        }
    }
});
$(".js-back-link").each(function(e, t) {
    new BackLinkView({
        el: t
    })
});
var CardBackfaceButtonView = Backbone.View.extend({
    CARD_DETAIL: "/search" !== location.pathname,
    FLIP_CLASS: "flip-backside",
    FLIP_QUERY: "back",
    initialize: function() {
        this.$card = this.$el.parents(".card-profile").find(".card-image").first(),
        this.CARD_DETAIL && location.search.split(/\?|&/).indexOf(this.FLIP_QUERY) > -1 && this.$card.addClass(this.FLIP_CLASS)
    },
    events: {
        click: function(e) {
            e.preventDefault();
            var t = this.$card.toggleClass(this.FLIP_CLASS).hasClass(this.FLIP_CLASS);
            if (this.CARD_DETAIL) {
                var n = URI(window.location)[t ? "addSearch" : "removeSearch"](this.FLIP_QUERY).toString();
                history.replaceState({
                    back: t
                }, document.title, n)
            }
            setTimeout(function() {
                this.el.removeAttribute("data-track")
            }
            .bind(this), 50)
        }
    }
});
Scryfall.registerComponent("card-backface-button", CardBackfaceButtonView),
Scryfall.createComponent({
    name: "CardContentWarning",
    selector: "[data-component='card-content-warning']",
    methods: {
        dismissMessage: function(e) {
            e.preventDefault(),
            this.$el.remove()
        },
        openMoreInfo: function() {
            window.location = "https://scryfall.com/blog/220"
        }
    }
}),
"admin" === Scryfall.cookies.fetch("optmode") && $(".card-grid-item").each(function(e, t) {
    var n = $(t)
      , r = "<div class='card-grid-item-admin'><a href='EDIT_URI' class='button-n primary icon-only'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='#676671' d='M491.609 73.625l-53.861-53.839c-26.378-26.379-69.076-26.383-95.46-.001L24.91 335.089.329 484.085c-2.675 16.215 11.368 30.261 27.587 27.587l148.995-24.582 315.326-317.378c26.33-26.331 26.581-68.879-.628-96.087zM120.644 302l170.259-169.155 88.251 88.251L210 391.355V350h-48v-48h-41.356zM82.132 458.132l-28.263-28.263 12.14-73.587L84.409 338H126v48h48v41.59l-18.282 18.401-73.586 12.141zm378.985-319.533l-.051.051-.051.051-48.03 48.344-88.03-88.03 48.344-48.03.05-.05.05-.05c9.147-9.146 23.978-9.259 33.236-.001l53.854 53.854c9.878 9.877 9.939 24.549.628 33.861z'/></svg></a><a href='INSPECT_URI' class='button-n primary icon-only'><svg viewBox='0 0 26 26' xmlns='http://www.w3.org/2000/svg'><path d='M26 24.6l-8.265-8.264c1.415-1.726 2.265-3.931 2.265-6.336 0-5.523-4.478-10-10-10s-10 4.477-10 10 4.478 10 10 10c2.404 0 4.61-.85 6.336-2.265l8.264 8.265 1.4-1.4zm-16-6.6c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z'/></svg></a></div>";
    r = (r = r.replace("EDIT_URI", "/admin/cards/" + n.data("card-id") + "/edit")).replace("INSPECT_URI", "/admin/cards/" + n.data("card-id")),
    $(t).append(r)
}),
Scryfall.createComponent({
    name: "CardGridDFC",
    selector: "[data-component='card-grid-dfc']",
    data: function() {
        return {
            flipped: !1
        }
    },
    methods: {
        flip: function() {
            this.flipped = !this.flipped
        }
    }
});
var CardRotationButtonView = Backbone.View.extend({
    initialize: function() {
        this.$card = this.$el.parents(".card-profile").find(".card-image").first(),
        this.rotationClass = this.$el.data("rotation-class")
    },
    events: {
        click: function(e) {
            e.preventDefault(),
            this.$card.toggleClass(this.rotationClass),
            setTimeout(function() {
                this.el.removeAttribute("data-track")
            }
            .bind(this), 50)
        }
    }
});
Scryfall.registerComponent("card-rotation-button", CardRotationButtonView);
var CardTooltipView = {
    name: "CardTooltip",
    selector: "[data-component='card-tooltip']",
    mounted: function() {
        this.tooltipElement = document.getElementById("card-tooltip"),
        this.$el.dataset.cardId && (this.cardId = this.$el.dataset.cardId,
        this.imgFrontSrc = this.$el.dataset.cardImageFront,
        this.imgBackSrc = this.$el.dataset.cardImageBack),
        this.$el.addEventListener("mousemove", this.moveTooltip),
        this.$el.addEventListener("mouseout", this.dismissTooltip)
    },
    methods: {
        moveTooltip: function(e) {
            if (window.innerWidth < 768)
                return !1;
            if ("flex" != this.tooltipElement.style.display && (this.tooltipElement.style.display = "flex"),
            this.tooltipElement.style.left = e.pageX + 50 + "px",
            this.tooltipElement.style.top = e.pageY - 30 + "px",
            this.tooltipElement.dataset.cardId != this.cardId) {
                if (this.tooltipElement.dataset.cardId = this.cardId,
                this.imgFrontSrc) {
                    var t = document.createElement("img");
                    t.id = "card-tooltip-img-front",
                    t.className = "card",
                    t.src = this.imgFrontSrc
                }
                if (this.imgBackSrc) {
                    var n = document.createElement("img");
                    n.id = "card-tooltip-img-back",
                    n.className = "card",
                    n.src = this.imgBackSrc
                }
                for (; this.tooltipElement.firstChild; )
                    this.tooltipElement.removeChild(this.tooltipElement.firstChild);
                t && this.tooltipElement.appendChild(t),
                n ? (this.tooltipElement.appendChild(n),
                this.tooltipElement.className = "two-up") : this.tooltipElement.className = ""
            }
        },
        dismissTooltip: function() {
            this.tooltipElement.style.display = "none"
        }
    }
};
Scryfall.createComponent(CardTooltipView),
Scryfall.createComponent({
    name: "CasterTray",
    selector: "#caster-tray",
    mounted: function() {
        Scryfall.preferences().casterMode && ($(".caster-tray").removeClass("hidden"),
        $(".card-image img").each(function(e, t) {
            var n = $(t);
            n.attr("src", n.attr("src").replace("/large/", "/png/").replace(".jpg", ".png"))
        }))
    }
});
var ChecklistView = Backbone.KeyboardView.extend({
    el: "#js-checklist",
    initialize: function() {
        this.bindKeyboardEvents(),
        this.$currentRow = this.$el.find("tbody tr").first().addClass("js-focus")
    },
    focusNextTableRow: function() {
        var e = this.$currentRow.next("tr");
        e.length && this.setNewTableRow(e)
    },
    focusPrevTableRow: function() {
        var e = this.$currentRow.prev("tr");
        e.length && this.setNewTableRow(e)
    },
    setNewTableRow: function(e) {
        if (this.$currentRow.removeClass("js-focus"),
        e.addClass("js-focus"),
        !e.visible()) {
            var t = e.offset();
            window.scrollTo(t.left, t.top)
        }
        this.$currentRow = e
    },
    openCurrentRow: function() {
        this.$currentRow.find("a")[0].click()
    },
    keyboardEvents: {
        j: "focusNextTableRow",
        k: "focusPrevTableRow",
        o: "openCurrentRow",
        enter: "openCurrentRow"
    }
});
if ($("#js-checklist").length)
    ChecklistView = new ChecklistView;
Scryfall.clipboardJS = new ClipboardJS("[data-component='clipboard-copy-control']"),
Scryfall.clipboardJS.on("success", function(e) {
    var t = e.trigger.dataset.clipboardConfirmation;
    _.isBlank(t) && (t = "Text has been copied your clipboard."),
    Scryfall.pushNotification("Copied", t, "blue", "clipboard")
}),
Scryfall.createComponent({
    name: "Confirm",
    selector: "[data-component='confirm']",
    mounted: function() {
        this.$el.onclick = this.confirmClick
    },
    methods: {
        confirmClick: function(e) {
            console.log(e);
            var t = e.currentTarget.dataset.confirm + " This action cannot be undone.";
            return !!window.confirm(t) || (e.preventDefault(),
            e.stopPropagation(),
            !1)
        }
    }
}),
Scryfall.createComponent({
    name: "DeckControls",
    selector: "[data-component='deck-controls']",
    methods: {
        reloadSearch: function(e) {
            var t = e.target
              , n = t.getAttribute("name")
              , r = t.options[t.selectedIndex].value
              , i = Scryfall.currentURI.query(!0)
              , o = {
                "with": i["with"],
                as: i.as
            };
            o[n] = r,
            o = _.compactObject(o);
            var a = Scryfall.currentURI.clone();
            window.location = a.search(o).normalizeQuery()
        }
    }
}),
Scryfall.createComponent({
    name: "DeckManager",
    selector: "[data-component='deck-manager']",
    methods: {
        trashDeck: function(e) {
            ScryfallAPI.decks.trash({
                id: e
            }, function(t) {
                this.removeDOMRow(e),
                Scryfall.pushNotification("Deck Trashed", t.name + " was moved to the trash. Items in the trash are deleted after 30 days.", "blue", "trash")
            }, this)
        },
        restoreDeck: function(e) {
            ScryfallAPI.decks.restore({
                id: e
            }, function(t) {
                this.removeDOMRow(e),
                Scryfall.pushNotification("Deck Restored", t.name + " was taken out of the trash.", "blue", "trash")
            }, this)
        },
        confirmAndDeleteDeck: function(e) {
            var t = "This deck will be deleted immediately. This action cannot be undone.";
            window.confirm(t) && ScryfallAPI.decks["delete"]({
                id: e
            }, function(t) {
                this.removeDOMRow(e),
                Scryfall.pushNotification("Deck Deleted", t.details, "red", "trash")
            }, this)
        },
        removeDOMRow: function(e) {
            return document.getElementById("deck-" + e).remove(),
            !0
        }
    }
}),
Scryfall.accountIsSignedIn() && $("#account-decks-footer-link").removeClass("vh"),
Scryfall.createComponent({
    name: "DeckTray",
    selector: "[data-component='deck-tray']",
    data: function() {
        return {
            expanded: !1,
            username: null,
            activeDeck: null,
            recentDecks: []
        }
    },
    methods: {
        initialize: function() {
            if (Scryfall.deckbuilder)
                return !1;
            this.loadRecentDecks(function() {
                this.activeDeck && $(".deckbuilder-card-add-button").removeClass("vh").click(function() {
                    Scryfall.deckTray.appendCardToDeck($(this).data("card-id"))
                })
            }, this)
        },
        toggleExpansion: function() {
            this.expanded = !this.expanded
        },
        loadRecentDecks: function(e, t) {
            ScryfallAPI.decks.recent(function(n) {
                this.username = n.username,
                this.activeDeck = n.active_deck,
                this.recentDecks = n.data,
                e && e.bind(t)()
            }, this)
        },
        clearActiveDeck: function() {
            ScryfallAPI.decks.clearActive(function() {
                this.loadRecentDecks(),
                this.expanded = !1
            }, this)
        },
        updateActiveDeck: function(e) {
            ScryfallAPI.decks.updateActive(e.id, function() {
                this.expanded = !1,
                this.loadRecentDecks(function() {
                    var e = "Now working on " + this.activeDeck.name;
                    Scryfall.pushNotification("Deck Changed", e, "blue", "deck")
                }, this)
            }, this)
        },
        createNewList: function() {
            ScryfallAPI.decks.create({
                template: "list"
            }, function(e) {
                this.expanded = !1,
                this.updateActiveDeck(e)
            }, this)
        },
        truncatedDeckName: function(e) {
            return _.truncate(e, {
                length: 18,
                omission: "\u2026"
            })
        },
        decksURI: function() {
            return "/@" + this.username + "/decks/"
        },
        activeDeckURI: function() {
            return this.activeDeck ? this.activeDeck.scryfall_uri : null
        },
        attemptMouseAppend: function() {
            if (!this.activeDeck)
                return console.log("Deck append failed, no active deck"),
                !1;
            if (!Scryfall.util.mousePositionIsValid())
                return console.log("Deck append failed, invalid cursor position"),
                !1;
            var e = Scryfall.util.elementUnderCursor()
              , t = $(e).parents("[data-card-id]").first().data("card-id");
            if (!t)
                return console.log("Deck append failed, no card under cursor"),
                !1;
            this.appendCardToDeck(t)
        },
        appendCardToDeck: function(e) {
            ScryfallAPI.decks.addCard(this.activeDeck.id, e, function(e) {
                var t = "1 copy of " + _.truncate(e.card_digest.name, {
                    length: 50,
                    omission: "\u2026"
                }) + " was added to " + _.truncate(this.activeDeck.name, {
                    length: 35,
                    omission: "\u2026"
                });
                Scryfall.pushNotification("Card Added", t, "purple", "deck")
            }, this)
        }
    }
}),
Scryfall.createComponent({
    name: "DeckWizard",
    selector: "[data-component='deck-wizard']",
    data: function() {
        return {
            CONSTRUCTED: "CONSTRUCTED",
            COMMANDER: "COMMANDER",
            LIMITED: "LIMITED",
            VARIANT: "VARIANT",
            category: null
        }
    },
    methods: {
        categoryIs: function(e) {
            return this.category === e
        },
        categoryIsNot: function(e) {
            return this.category != e
        },
        setCategory: function(e) {
            this.category = e
        }
    }
}),
Scryfall.createComponent({
    name: "Deckbuilder",
    selector: "[data-component='deckbuilder']",
    data: function() {
        return {
            PRINTING_BUSY: "PRINTING_BUSY",
            PRINTING: "PRINTING",
            IMPORT: "IMPORT",
            modalState: null,
            FILE: "FILE",
            FILE_READY: "FILE_READY",
            FILE_ERROR: "FILE_ERORR",
            PASTE: "PASTE",
            PASTE_READY: "PASTE_READY",
            URL: "URL",
            deckImport: {
                wellFocused: !1,
                filePreviewShown: !1,
                state: null,
                deckURL: null,
                userFile: null,
                fileContents: null,
                validationError: null,
                fileExtension: null
            },
            RAISED: "RAISED",
            NO_COST: "NO_COST",
            BLANK: "BLANK",
            ERROR: "ERROR",
            MANA_COST: "MANA_COST",
            LAND: "LAND",
            BUSY: "BUSY",
            keyboardTimer: null,
            KEYBOARD_PAUSE_BUFFER: 500,
            SECTION_NAMES: {
                mainboard: "Mainboard",
                sideboard: "Sideboard",
                maybeboard: "Maybeboard",
                commanders: "Commander(s)",
                oathbreakers: "Oathbreaker & Signature",
                nonlands: "Nonlands",
                lands: "Lands",
                planar: "Planar Deck",
                schemes: "Scheme Deck",
                maybe: "Maybe Pile",
                junk: "Junk Pile",
                columna: "Column A",
                columnb: "Column B",
                outside: "Outside the Game"
            },
            uris: {
                deckIndex: null
            },
            deckId: null,
            name: null,
            format: null,
            description: null,
            specifyingEntry: null,
            specifyingPrintsLang: "en",
            specifyingPrints: [],
            raisedEntryId: null,
            sections: {},
            flatSections: [],
            entries: {},
            curve: {},
            tooltipElement: null,
            Scryfall: window.Scryfall
        }
    },
    created: function() {
        var e = document.getElementById("deckbuilder");
        this.deckId = e.getAttribute("data-deck-id"),
        e.removeAttribute("data-deck-id"),
        this.uris.deckIndex = e.getAttribute("data-deck-index-url"),
        e.removeAttribute("data-deck-index-url"),
        this.tooltipElement = document.getElementById("card-tooltip")
    },
    updated: function() {
        this.$nextTick(function() {
            this.tooltipElement.style.display = "none",
            Scryfall.createComponent(CardTooltipView),
            document.querySelectorAll(".deckbuilder-entry-menu-select").forEach(function(e) {
                e.selectedIndex = -1
            })
        })
    },
    methods: {
        initialize: function() {
            this.loadFromServer(),
            this.loadStatsFromServer()
        },
        firstEntry: function() {
            var e = this.flatSections[0];
            return this.entries[e][0]
        },
        queueRename: function() {
            window.clearTimeout(this.keyboardTimer),
            this.keyboardTimer = window.setTimeout(this.renameDeck, this.KEYBOARD_PAUSE_BUFFER)
        },
        queueDescribe: function() {
            window.clearTimeout(this.keyboardTimer),
            this.keyboardTimer = window.setTimeout(this.describeDeck, this.KEYBOARD_PAUSE_BUFFER)
        },
        renameDeck: function() {
            ScryfallAPI.decks.rename({
                id: this.deckId,
                name: this.name
            }, _.noop, this)
        },
        describeDeck: function() {
            ScryfallAPI.decks.describe({
                id: this.deckId,
                description: this.description
            }, _.noop, this)
        },
        handleNameKeydown: function(e) {
            switch (e.code) {
            case "Escape":
            case "Enter":
            case "NumpadEnter":
            case "Return":
                e.preventDefault(),
                e.stopPropagation(),
                this.$nextTick(function() {
                    e.target.blur()
                })
            }
        },
        loadFromServer: function() {
            ScryfallAPI.decks.get(this.deckId, function(e) {
                this.sections = e.sections,
                this.flatSections = _.flattenDeep(_.values(this.sections)),
                this.entries = e.entries,
                this.deckId = e.id,
                _.each(e.entries, function(e) {
                    _.each(e, function(e) {
                        e.saved = !0,
                        e.doomed = !1,
                        e.busy = !1,
                        e.raw_text_before_raise = e.raw_text
                    })
                });
                var t = this.firstEntry();
                t.found || (this.raiseEntry(t),
                this.$nextTick(function() {
                    this.inputElementForEntry(t).focus()
                }))
            }, this)
        },
        loadStatsFromServer: function() {
            ScryfallAPI.decks.stats(this.deckId, function(e) {
                this.curve = e.curve
            }, this)
        },
        descriptionIsPresent: function() {
            return _.isPresent(this.description)
        },
        collapsedDescription: function() {
            return this.descriptionIsPresent() ? _.truncate(this.description, {
                length: 100,
                omission: "\u2026"
            }) : "Enter a deck description\u2026"
        },
        entryIsRaised: function(e) {
            return this.raisedEntryId === e.id
        },
        raiseEntry: function(e) {
            this.raisedEntryId = e.id
        },
        lowerEntry: function(e) {
            this.entryIsRaised(e) && (this.raisedEntryId = null),
            e.doomed || e.raw_text_before_raise !== e.raw_text && this.createOrReplaceEntry(e)
        },
        entryIsIncrementable: function(e) {
            return e.found && !e.busy
        },
        sectionForEntry: function(e) {
            return this.entries[e.section]
        },
        setEntryCount: function(e, t) {
            e.busy = !0,
            e.count = t,
            this.updateEntry(e)
        },
        entryIsDecrementable: function(e) {
            return !(e.count <= 1 && 1 === this.sectionForEntry(e).length && "" === e.raw_text)
        },
        entryIsDeleteable: function(e) {
            return this.sectionForEntry(e).length > 1
        },
        decrementEntry: function(e, t) {
            t = this.sectionForEntry(e);
            if (e.busy = !0,
            e.count = e.count - 1,
            e.count <= 0 && 1 === t.length)
                return e.raw_text = "",
                void this.createOrReplaceEntry(e);
            e.count <= 0 && t.length > 1 ? this.deleteEntry(e) : e.found ? this.updateEntry(e) : this.deleteEntry(e)
        },
        createNewEntry: function(e) {
            if (this.deckOutOfCompliance())
                return this.showDeckSizeNotification(),
                !1;
            var t = this.sectionForEntry(e)
              , n = this.newUnsavedEntry(e.section)
              , r = this.nextSiblingEntry(e, t);
            if (r) {
                var i = .5 * (e.cardinality + r.cardinality);
                n.cardinality = parseFloat(i.toFixed(6))
            } else {
                i = e.cardinality + 3;
                n.cardinality = i
            }
            return t.splice(t.indexOf(e) + 1, 0, n),
            n
        },
        createOrReplaceEntry: function(e) {
            e.busy = !0,
            !0 !== e.saved ? ScryfallAPI.decks.createEntry(this.deckId, e, function(t) {
                this.assignFromServerEntry(e, t),
                this.loadStatsFromServer()
            }, this) : ScryfallAPI.decks.replaceEntry(this.deckId, e, function(t) {
                this.assignFromServerEntry(e, t),
                this.loadStatsFromServer()
            }, this)
        },
        deleteEntry: function(e) {
            e.doomed = !0,
            e.saved ? this.$nextTick(function() {
                ScryfallAPI.decks.destroyEntry(this.deckId, e.id, function() {
                    this.loadStatsFromServer()
                }, this)
            }) : (console.log("Removed unsaved entry", e.id),
            this.loadStatsFromServer());
            var t = this.sectionForEntry(e)
              , n = t.indexOf(e);
            return t.splice(n, 1),
            n
        },
        updateEntry: function(e) {
            ScryfallAPI.decks.updateEntry(this.deckId, e, function(t) {
                this.assignFromServerEntry(e, t),
                this.loadStatsFromServer()
            }, this)
        },
        assignFromServerEntry: function(e, t) {
            return e.id = t.id,
            e.found = t.found,
            e.busy = !1,
            e.saved = !0,
            e.raw_text = t.raw_text,
            e.raw_text_before_raise = t.raw_text,
            e.count = t.count,
            e.cardinality = t.cardinality,
            e.card_digest = t.card_digest,
            e.printing_specified = t.printing_specified,
            e.hasOwnProperty("card_id") && delete e.card_id,
            !0
        },
        updateEntrySection: function(e, t) {
            var n = this.sectionForEntry(e);
            if (n.length <= 1) {
                var r = this.createNewEntry(e);
                this.createOrReplaceEntry(r)
            }
            var i = n.indexOf(e)
              , o = _.clone(e);
            n.splice(i, 1);
            var a = this.entries[t];
            o.section = t,
            o.cardinality = _.last(a).cardinality + 3,
            a.push(o),
            this.updateEntry(o)
        },
        newUnsavedEntry: function(e) {
            return {
                id: _.uniqueId("unsaved-"),
                section: e,
                cardinality: null,
                count: 1,
                found: !1,
                printing_specified: !1,
                foil: !1,
                doomed: !1,
                saved: !1,
                busy: !1,
                raw_text: "",
                raw_text_before_raise: null
            }
        },
        entryCount: function() {
            return _.reduce(this.flatSections, function(e, t) {
                return e + this.entries[t].length
            }
            .bind(this), 0)
        },
        sectionCountDisplay: function(e) {
            return "maybeboard" === e || "outside" === e ? _.pluralize(this.sectionCount(e), "card", "cards") : this.sectionCount(e) + "/" + _.pluralize(this.totalCount(), "card", "cards")
        },
        totalCount: function() {
            return _.reduce(this.flatSections, function(e, t) {
                return "maybeboard" === t || "outside" === t ? e : e + this.sectionCount(t)
            }
            .bind(this), 0)
        },
        sectionCount: function(e) {
            return this.entries[e].reduce(function(e, t) {
                return t.found ? e + t.count : e
            }, 0)
        },
        deckInCompliance: function() {
            return this.entryCount() <= 1200
        },
        deckOutOfCompliance: function() {
            return !this.deckInCompliance()
        },
        showDeckSizeNotification: function() {
            Scryfall.pushNotification("Deck too large", "Decks may only contain 1,200 lines or less. Remove some lines or clean up the deck to add more.", "red", "alert")
        },
        previousSiblingEntry: function(e) {
            var t = this.sectionForEntry(e)
              , n = t.indexOf(e);
            return t[n - 1] ? t[n - 1] : null
        },
        nextSiblingEntry: function(e) {
            var t = this.sectionForEntry(e)
              , n = t.indexOf(e);
            return t[n + 1] ? t[n + 1] : null
        },
        handleEntryKeydown: function(e, t) {
            switch (!0) {
            case "Escape" === t.key:
                t.preventDefault(),
                t.stopPropagation(),
                this.lowerEntry(e);
                var n = this.inputElementForEntry(e);
                this.$nextTick(function() {
                    n.blur()
                });
                break;
            case "Enter" === t.key:
            case "NumpadEnter" === t.key:
                if (t.preventDefault(),
                t.stopPropagation(),
                this.deckOutOfCompliance())
                    return this.showDeckSizeNotification(),
                    !1;
                var r = Scryfall.util.inputValuesBySplittingAtSelection(t.target);
                e.raw_text = r.beforeFragment,
                newEntry = this.createNewEntry(e),
                newEntry.raw_text = r.afterFragment,
                this.raiseEntry(newEntry),
                this.$nextTick(function() {
                    var e = this.inputElementForEntry(newEntry);
                    e.focus(),
                    e.selectionStart = 0,
                    e.selectionEnd = 0
                });
                break;
            case "Backspace" === t.key:
                if (0 == t.target.selectionStart)
                    if (a = this.previousSiblingEntry(e)) {
                        t.preventDefault(),
                        t.stopPropagation();
                        var i = this.inputElementForEntry(a)
                          , o = (r = Scryfall.util.inputValuesBySplittingAtSelection(t.target),
                        Scryfall.util.inputValuesByAppendingString(i, r.afterFragment));
                        a.raw_text = o.newValue,
                        this.$nextTick(function() {
                            i.focus(),
                            i.selectionStart = o.newSelection,
                            i.selectionEnd = o.newSelection
                        }),
                        this.raiseEntry(a),
                        this.deleteEntry(e)
                    }
                break;
            case "Delete" === t.key:
                if (t.target.selectionEnd == t.target.value.length)
                    if (s = this.nextSiblingEntry(e)) {
                        t.preventDefault(),
                        t.stopPropagation();
                        n = this.inputElementForEntry(e),
                        r = Scryfall.util.inputValuesByDiscardingSelection(n);
                        e.raw_text = r.newValue + s.raw_text,
                        this.$nextTick(function() {
                            n.focus(),
                            n.selectionStart = r.newSelection,
                            n.selectionEnd = r.newSelection
                        }),
                        this.deleteEntry(s)
                    }
                break;
            case "ArrowUp" === t.key:
            case "Tab" === t.key && !0 === t.shiftKey:
                var a;
                if (t.preventDefault(),
                t.stopPropagation(),
                a = this.previousSiblingEntry(e)) {
                    this.raiseEntry(a);
                    n = this.inputElementForEntry(e),
                    i = this.inputElementForEntry(a);
                    this.$nextTick(function() {
                        i.focus(),
                        i.selectionStart = n.selectionEnd,
                        i.selectionEnd = n.selectionEnd
                    })
                }
                break;
            case "ArrowDown" === t.key:
            case "Tab" === t.key && !1 === t.shiftKey:
            case !!t.keyCode && 9 === t.keyCode:
                var s;
                if (t.preventDefault(),
                t.stopPropagation(),
                s = this.nextSiblingEntry(e)) {
                    this.raiseEntry(s);
                    n = this.inputElementForEntry(e);
                    var c = this.inputElementForEntry(s);
                    this.$nextTick(function() {
                        c.focus(),
                        c.selectionStart = n.selectionEnd,
                        c.selectionEnd = n.selectionEnd
                    })
                }
                break;
            case "+" === t.key:
            case "=" === t.key:
                t.preventDefault(),
                t.stopPropagation(),
                this.entryIsIncrementable(e) && this.incrementEntry(e);
                break;
            case "-" === t.key && 3 === t.location:
                t.preventDefault(),
                t.stopPropagation(),
                this.entryIsDecrementable(e) && this.decrementEntry(e);
                break;
            default:
                return !0
            }
        },
        handleMenuAction: function(e, t) {
            switch (t.target.value) {
            case "open":
                this.openEntryOnSite(e);
                break;
            case "delete":
                this.entryIsDecrementable(e) && this.deleteEntry(e);
                break;
            case "set-count-1":
                this.setEntryCount(e, 1);
                break;
            case "set-count-2":
                this.setEntryCount(e, 2);
                break;
            case "set-count-3":
                this.setEntryCount(e, 3);
                break;
            case "set-count-4":
                this.setEntryCount(e, 4);
                break;
            case "move":
                var n = t.target.options[t.target.selectedIndex].dataset.targetSectionId;
                this.updateEntrySection(e, n);
                break;
            case "specify-printing":
                this.openSpecifyPrintsModal(e, "en")
            }
            t.target.selectedIndex = -1
        },
        inputElementForEntry: function(e) {
            return document.querySelector("[data-entry='" + e.id + "'] textarea")
        },
        entryDetailsState: function(e) {
            switch (!0) {
            case this.entryIsRaised(e):
                return this.RAISED;
            case e.busy:
                return this.BUSY;
            case _.isBlank(e.raw_text):
                return this.BLANK;
            case !e.found:
                return this.ERROR;
            case e.found && "land" == e.card_digest.sf.cost_render_mode:
                return this.LAND;
            case e.found && "no_cost" == e.card_digest.sf.cost_render_mode:
                return this.NO_COST;
            case e.found && "mana_cost" == e.card_digest.sf.cost_render_mode:
                return this.MANA_COST
            }
        },
        entryDisplaysPrintingLabel: function(e) {
            if (e.found && e.printing_specified) {
                var t = this.entryDetailsState(e);
                if (t === this.MANA_COST || t === this.LAND)
                    return !0
            }
            return !1
        },
        entryPrintingLabel: function(e) {
            return e.card_digest.sf.collector_number_disambiguates ? e.card_digest.set + " \xb7 " + e.card_digest.collector_number : e.card_digest.set
        },
        entryRenderedCost: function(e) {
            return _.get(e, "card_digest.sf.rendered_cost")
        },
        siblingSectionsForSectionId: function(e) {
            return _.difference(this.flatSections, [e])
        },
        handlePossiblePaste: function(e, t) {
            var n = this.inputElementForEntry(e)
              , r = t.clipboardData.getData("text/plain");
            if (console.log("Pasted text", r),
            0 != r.length && r.match(/\r|\n/)) {
                t.preventDefault(),
                t.stopPropagation();
                var i = Scryfall.util.inputValuesBySplittingAtSelection(n)
                  , o = (i.beforeFragment + r + i.afterFragment).split(/(?:\r\n|\n\r|\n)/);
                console.log("Pasted lines", o),
                e.raw_text = o.shift();
                var a = null;
                o.reverse();
                for (var s = 0; s < o.length; s++) {
                    var c = this.createNewEntry(e);
                    c.raw_text = o[s],
                    0 === s ? (a = c,
                    this.raiseEntry(a)) : this.lowerEntry(c)
                }
                this.$nextTick(function() {
                    var e = a.raw_text.length - i.afterFragment.length
                      , t = this.inputElementForEntry(a);
                    t.focus(),
                    t.selectionStart = e,
                    t.selectionEnd = e
                })
            }
        },
        openEntryOnSite: function(e) {
            window.open(e.card_digest.scryfall_uri)
        },
        confirmAndTrash: function() {
            var e = "This deck will be moved to the trash. Items in the trash are automatically deleted after 30 days.";
            window.confirm(e) && ScryfallAPI.decks.trash({
                id: this.deckId
            }, function() {
                window.location = this.uris.deckIndex
            }, this)
        },
        curveDisplayForCount: function(e) {
            var t = Math.ceil(e / 2);
            return t > 12 && (t = 12),
            "\u2759".repeat(t)
        },
        curveTitleForStat: function(e, t) {
            return 1 === t ? "1 card with CMC " + e : t + " cards with CMC " + e
        },
        modalStateIs: function(e) {
            return this.modalState === e
        },
        closeAllModals: function() {
            this.modalState = null,
            this.specifyingEntry = null,
            this.deckImport.wellFocused = !1,
            this.deckImport.filePreviewShown = !1,
            this.deckImport.state = null,
            this.deckImport.userFile = null,
            this.deckImport.fileContents = null,
            this.deckImport.validationError = null,
            this.deckImport.fileExtension = null,
            this.$nextTick(function() {
                $("html").removeClass("modal-dialog-open"),
                $("body").removeClass("modal-dialog-open")
            })
        },
        openImportModal: function() {
            this.modalState = this.IMPORT,
            this.importWellState = null,
            this.$nextTick(function() {
                $("html").addClass("modal-dialog-open"),
                $("body").addClass("modal-dialog-open")
            })
        },
        deckImportStateIs: function(e) {
            return _.isArray(e) ? _.includes(e, this.deckImport.state) : this.deckImport.state === e
        },
        setDeckImportState: function(e) {
            this.deckImport.state = e
        },
        handleDeckImportPaste: function(e) {
            if (e.clipboardData)
                var t = e.clipboardData.getData("text");
            else
                t = this.$refs.modalDialogPastezone.value;
            _.isPresent(t) && t.length > 3 && (this.deckImport.fileContents = t,
            this.deckImport.fileExtension = "txt",
            this.deckImport.state = this.PASTE_READY)
        },
        clickDeckImportInput: function(e) {
            e.preventDefault(),
            this.$refs.fileWell.click()
        },
        handleDeckImportInputChange: function(e) {
            return e.preventDefault(),
            e.currentTarget.files.length && (this.deckImport.userFile = event.target.files[0],
            console.log("Caught user file from input", this.deckImport.userFile),
            this.validateDeckImportFile()),
            !1
        },
        handleDeckImportFileDrop: function(e) {
            return e.preventDefault(),
            e.dataTransfer.files.length && (this.deckImport.userFile = event.dataTransfer.files[0],
            console.log("Caught user file from drop", this.deckImport.userFile),
            this.validateDeckImportFile()),
            !1
        },
        handleDeckImportDragOver: function(e) {
            e.preventDefault(),
            this.deckImport.wellFocused = !0
        },
        handleDeckImportDragLeave: function(e) {
            e.preventDefault(),
            this.deckImport.wellFocused = !1
        },
        validateDeckImportFile: function() {
            if (this.deckImport.wellFocused = !1,
            this.deckImport.filePreviewShown = !1,
            console.log("File size", this.deckImport.userFile.size),
            console.log("File name", this.deckImport.userFile.name),
            !this.deckImportPermittedExtension(this.deckImport.userFile))
                return this.deckImport.state = this.FILE_ERROR,
                this.deckImport.validationError = "That does not appear to be a TXT, CSV, or DEK file.",
                void console.log("Validation failed, bad extension");
            if (!this.deckImport.userFile.size > 1e6)
                return this.deckImport.state = this.FILE_ERROR,
                this.deckImport.validationError = "Sorry, that file is too large.",
                void console.log("Validation failed, file too large");
            if (0 === !this.deckImport.userFile.size)
                return this.deckImport.state = this.FILE_ERROR,
                this.deckImport.validationError = "Sorry, that file looks empty.",
                void console.log("Validation failed, file empty");
            var e = new FileReader;
            e.addEventListener("loadend", _.bind(function() {
                e.result.length > 10 ? (this.deckImport.fileExtension = this.deckImportPermittedExtension(this.deckImport.userFile),
                this.deckImport.fileContents = e.result,
                this.deckImport.state = this.FILE_READY) : (this.deckImport.state = this.FILE_ERROR,
                this.deckImport.validationError = "That does not appear to be a TXT, CSV, or DEK file.",
                console.log("Validation failed, no text could be read"))
            }, this)),
            e.readAsText(this.deckImport.userFile)
        },
        toggleDeckImportFilePreview: function() {
            this.deckImport.filePreviewShown = !this.deckImport.filePreviewShown
        },
        deckImportPermittedExtension: function(e) {
            var t = e.name.toLowerCase();
            return _.endsWith(t, ".txt") || _.endsWith(t, ".text") ? "txt" : _.endsWith(t, ".csv") ? "csv" : _.endsWith(t, ".dek") ? "dek" : null
        },
        frontImageURIForCard: function(e) {
            return e.image_uris ? e.image_uris.large : e.card_faces && e.card_faces[0] ? e.card_faces[0].image_uris.large : void 0
        },
        backImageURIForCard: function(e) {
            return e.image_uris ? null : e.card_faces && e.card_faces[1] ? e.card_faces[1].image_uris.large : void 0
        },
        specifyingPrintsLangIs: function(e) {
            return this.specifyingPrintsLang === e
        },
        openSpecifyPrintsModal: function(e, t) {
            this.modalState = this.PRINTING_BUSY,
            ScryfallAPI.cards.oracleId(e.card_digest.oracle_id, t, function(n) {
                this.modalState = this.PRINTING,
                this.specifyingPrintsLang = t,
                this.specifyingEntry = e,
                this.specifyingPrints = n.data,
                this.$nextTick(function() {
                    $("html").addClass("modal-dialog-open"),
                    $("body").addClass("modal-dialog-open"),
                    this.$refs.printingSpecificationContent.focus()
                })
            }, this)
        },
        unsetSpecifiedPrintingForEntry: function(e) {
            e.printing_specified = !1,
            e.foil = !1,
            this.updateEntry(e),
            this.closeAllModals()
        },
        setSpecifiedPrintingForEntry: function(e, t, n) {
            e.card_id = t.id,
            e.printing_specified = !0,
            "foil" === n ? e.foil = !0 : "nonfoil" === n ? e.foil = !1 : !0 === t.nonfoil ? e.foil = !1 : !0 === t.foil ? e.foil = !0 : e.foil = !1,
            this.updateEntry(e),
            this.closeAllModals()
        },
        cleanUp: function() {
            ScryfallAPI.decks.cleanup({
                id: this.deckId
            }, function() {
                this.loadFromServer(),
                this.loadStatsFromServer()
            }, this)
        }
    }
}),
Scryfall.createComponent({
    name: "DonationAmounts",
    selector: "[data-component='donation-amounts']",
    data: function() {
        return {
            amount: null,
            stripeTokenID: null
        }
    },
    created: function() {
        this.stripeCheckout = StripeCheckout.configure({
            key: "pk_live_md2HF1DOERFGjaPNiX2eNRP0",
            image: "https://assets.scryfall.com/icon.png",
            name: "Scryfall",
            locale: "auto",
            token: this.captureTokenAndSubmit,
            currency: "USD",
            panelLabel: "Donate",
            zipCode: !0,
            billingAddress: !1,
            allowRememberMe: !1,
            bitcoin: !1
        })
    },
    methods: {
        donate: function(e) {
            this.amount = e,
            this.stripeCheckout.open({
                amount: e
            })
        },
        captureTokenAndSubmit: function(e) {
            this.stripeTokenID = e.id,
            this.$nextTick(function() {
                this.$el.submit()
            })
        }
    }
}),
Scryfall.createComponent({
    name: "FeedbackManager",
    selector: "[data-component='feedback-manager']",
    data: function() {
        return {
            state: "READY",
            READY: "READY",
            GITHUB: "GITHUB",
            REPLY: "REPLY"
        }
    },
    methods: {
        setState: function(e) {
            return this.state = e,
            !0
        },
        stateIs: function(e) {
            return this.state == e
        },
        stateIsNot: function(e) {
            return this.state != e
        },
        setGithubState: function() {
            this.state = this.GITHUB,
            this.$nextTick(function() {
                this.$refs.githubInput.focus()
            })
        },
        setReplyState: function() {
            this.state = this.REPLY,
            this.$nextTick(function() {
                this.$refs.replyInput.selectionStart = 12,
                this.$refs.replyInput.selectionEnd = 12
            })
        }
    }
}),
Scryfall.createComponent({
    name: "FlashMessage",
    selector: "[data-component='flash-message']",
    methods: {
        dismissMessage: function() {
            this.$el.remove()
        }
    }
}),
Scryfall.createComponent({
    name: "FormNFilInput",
    selector: "[data-component='form-n-file-input']",
    data: function() {
        return {
            userFile: null,
            fileName: null
        }
    },
    methods: {
        clickFileInput: function() {
            this.$refs.fileInput.click()
        },
        handleFileInputChange: function(e) {
            e.currentTarget.files.length && (this.userFile = event.target.files[0],
            console.log("Caught user file from input", this.userFile))
        },
        buttonLabel: function() {
            return this.userFile ? _.truncate(this.userFile.name, {
                omission: "\u2026",
                lenght: 40
            }) : "Choose an image file\u2026"
        }
    }
}),
Scryfall.createComponent({
    name: "GenericView",
    selector: "[data-component='generic-view']"
}),
Scryfall.createComponent({
    name: "Header",
    selector: "[data-component='header']",
    globalKeyboardEvents: {
        "/": "focusSearchField",
        f: "focusSearchField"
    },
    data: function() {
        return {
            Scryfall: window.Scryfall,
            mobileNavOpen: !1,
            accountSectionOpen: !1
        }
    },
    methods: {
        focusSearchField: function(e) {
            e.preventDefault(),
            this.$refs.searchField.focus()
        },
        blurSearchField: function() {
            this.$refs.searchField.blur()
        },
        toggleMobileNav: function() {
            this.mobileNavOpen = !this.mobileNavOpen
        },
        toggleAccountSection: function() {
            this.accountSectionOpen = !this.accountSectionOpen
        }
    }
});
var HerosPathSticker = Backbone.View.extend({
    initialize: function() {
        this.$card = this.$el.parents(".card-profile").find(".card-image").first()
    },
    events: {
        click: function(e) {
            e.preventDefault(),
            $("#enhancement-sticker").length ? ($("#enhancement-sticker").remove(),
            $(".sticker-switch").addClass("disabled").off("click")) : (path = JSON.parse(this.$el.attr("data-sticker-paths"))[1],
            this.$card.first().append("<img id='enhancement-sticker' data-sticker-num='1' src='" + path + "'>"),
            $(".sticker-switch").removeClass("disabled").on("click", {
                el: this.$el
            }, function(e) {
                sticker = $("#enhancement-sticker"),
                newNum = ((parseInt(sticker.attr("data-sticker-num")) + parseInt($(this).attr("data-inc"))) % 7 + 7) % 7,
                sticker.attr("src", JSON.parse(e.data.el.attr("data-sticker-paths"))[newNum]),
                sticker.attr("data-sticker-num", newNum)
            })),
            setTimeout(function() {
                this.el.removeAttribute("data-track")
            }
            .bind(this), 50)
        }
    }
});
Scryfall.registerComponent("sticker-button", HerosPathSticker),
Scryfall.registerComponent("homepage-search", function(e) {
    e.focus()
}),
Scryfall.createComponent({
    name: "LazyImage",
    selector: "[data-component='lazy-image']",
    data: function() {
        return {
            intersectionObserver: null
        }
    },
    mounted: function() {
        var e = this;
        Scryfall.features.intersectionObserver ? (e.intersectionObserver = new IntersectionObserver(function(t) {
            t[0].isIntersecting && e.loadImage()
        }
        ,{
            rootMargin: "300px 0px 0px 0px"
        }),
        e.intersectionObserver.observe(e.$el)) : (e.attemptLegacyIntersection = _.throttle(e.attemptLegacyIntersection, 50),
        document.addEventListener("scroll", e.attemptLegacyIntersection),
        window.addEventListener("resize", e.attemptLegacyIntersection),
        window.addEventListener("orientationChange", e.attemptLegacyIntersection))
    },
    methods: {
        attemptLegacyIntersection: function() {
            this.$el.getBoundingClientRect().top + window.pageYOffset < window.pageYOffset + window.innerHeight + 300 && this.loadImage()
        },
        loadImage: function() {
            this.$el.src = this.$el.dataset.src,
            delete this.$el.dataset.src,
            Scryfall.features.intersectionObserver ? (this.intersectionObserver.disconnect(),
            this.intersectionObserver = null) : (document.removeEventListener("scroll", this.attemptLegacyIntersection),
            window.removeEventListener("resize", this.attemptLegacyIntersection),
            window.removeEventListener("orientationChange", this.attemptLegacyIntersection))
        }
    }
}),
Scryfall.createComponent({
    name: "NotificationTray",
    selector: "[data-component='notification-tray']",
    data: function() {
        return {
            NOTIFICATION_LIFESPAN: 5e3,
            notifications: []
        }
    },
    methods: {
        visibleNotifications: function() {
            return _.takeRight(this.notifications, 4)
        },
        pushNotification: function(e, t, n, r) {
            var i = _.uniqueId("notif-")
              , o = {
                id: i,
                title: e,
                body: t,
                color: n = n || "purple",
                icon: r,
                timeoutId: window.setTimeout(this.dismissNotification, this.NOTIFICATION_LIFESPAN, i)
            };
            console.log(o),
            this.notifications.push(o)
        },
        dismissNotification: function(e) {
            var t = this.notificationForId(e);
            if (t) {
                t.timeoutId && this.suspendNotifcationTimeout(t);
                var n = this.notifications.indexOf(t);
                this.notifications.splice(n, 1)
            }
        },
        suspendAllNotificationTimeouts: function() {
            this.notifications.forEach(this.suspendNotificationTimeout)
        },
        suspendNotifcationTimeout: function(e) {
            return window.clearTimeout(e.timeoutId),
            e.timeoutId = null,
            !0
        },
        resumeAllNotificationTimeouts: function() {
            this.notifications.forEach(this.resumeNotificationTimeout)
        },
        resumeNotificationTimeout: function(e) {
            return window.clearTimeout(e.timeoutId),
            e.timeoutId = window.setTimeout(this.dismissNotification, this.NOTIFICATION_LIFESPAN, e.id),
            !0
        },
        notificationForId: function(e) {
            return this.notifications.find(function(t) {
                return t.id === e
            })
        }
    }
});
var PaginationView = Backbone.KeyboardView.extend({
    el: "body",
    initialize: function() {
        this.$forwardButton = $(".js-paginate-forward"),
        this.$backwardButton = $(".js-paginate-backward"),
        this.bindKeyboardEvents()
    },
    paginateForward: function() {
        this.$forwardButton.length && this.$forwardButton[0].click()
    },
    paginateBackward: function() {
        this.$backwardButton.length && this.$backwardButton[0].click()
    },
    keyboardEvents: {
        "l keydown": "paginateForward",
        "h keydown": "paginateBackward"
    }
});
if ($(".js-paginate-forward").length || $(".js-paginate-backward").length)
    PaginationView = new PaginationView;
Scryfall.createComponent({
    name: "PaymentMethodForm",
    selector: "[data-view=payment-method-form]",
    data: function() {
        return {
            email: null,
            stripeTokenID: null
        }
    },
    created: function() {
        this.stripeCheckout = StripeCheckout.configure({
            key: "pk_live_md2HF1DOERFGjaPNiX2eNRP0",
            image: "https://assets.scryfall.com/icon.png",
            name: "Scryfall",
            locale: "auto",
            token: this.captureTokenAndSubmit,
            currency: "USD",
            panelLabel: "Update",
            amount: null,
            zipCode: !0,
            billingAddress: !1,
            allowRememberMe: !1,
            bitcoin: !1
        })
    },
    mounted: function() {
        this.email = this.$refs.email.dataset.value
    },
    methods: {
        openStripeCheckout: function(e) {
            e.preventDefault(),
            this.stripeCheckout.open({
                email: this.email
            })
        },
        captureTokenAndSubmit: function(e) {
            this.stripeTokenID = e.id,
            this.$nextTick(function() {
                this.$el.submit()
            })
        }
    }
}),
Scryfall.createComponent({
    name: "PledgeForm",
    selector: "[data-component='pledge-form']",
    data: function() {
        return {
            stripeToken: null,
            email: null
        }
    },
    created: function() {
        this.stripeCheckout = StripeCheckout.configure({
            key: "pk_live_md2HF1DOERFGjaPNiX2eNRP0",
            image: "https://assets.scryfall.com/icon.png",
            name: "Scryfall",
            locale: "auto",
            token: this.captureStripeToken,
            currency: "USD",
            panelLabel: "Pay",
            amount: 999,
            zipCode: !0,
            billingAddress: !1,
            allowRememberMe: !1,
            bitcoin: !1
        })
    },
    methods: {
        openStripeCheckout: function() {
            this.email ? this.stripeCheckout.open({
                email: this.email
            }) : this.stripeCheckout.open()
        },
        captureStripeToken: function(e) {
            this.stripeToken = e.id,
            this.$nextTick(function() {
                this.$el.submit()
            })
        }
    }
}),
Scryfall.createComponent({
    name: "RandomEffects",
    selector: "[data-component='random-effects']",
    data: function() {
        return {
            plusOneAbilities: ["Until end of turn, up to one target creature gets +1/+1 and gains first strike, vigilance, and lifelink.", "Distribute three +1/+1 counters among one, two, or three target creatures you control.", "Destroy target noncreature permanent.", "Create two 3/1 red Elemental creature tokens with haste. Exile them at the beginning of the next end step.", "Create three 1/1 white Soldier creature tokens.", "Create a 3/3 black Beast creature token with deathtouch.", "Reveal the top five cards of your library. Put all creature cards revealed this way into your hand and the rest on the bottom of your library in any order.", "During target opponent\u2019s next turn, creatures that player controls attack Urza if able.", "Put a loyalty counter on Urza for each creature target opponent controls.", "Until your next turn, whenever a creature an opponent controls attacks, it gets -1/-0 until end of turn.", "Target player exiles a card from his or her hand.", "Reveal the top card of your library. If it\u2019s a land card, put it onto the battlefield. Otherwise, put it into your hand.", "Target land you control becomes a 4/4 Elemental creature with trample. It\u2019s still a land.", "Draw a card, then add one mana of any color.", "Until end of turn, Urza becomes a legendary 4/4 red Dragon creature with flying, indestructible, and haste. (He doesn\u2019t lose loyalty while he\u2019s not a planeswalker.)", "Until your next turn, creatures you control get +1/+0 and gain lifelink.", "Look at the top five cards of your library. You may reveal an artifact card from among them and put it into your hand. Put the rest on the bottom of your library in any order.", "Urza deals 3 damage to any target.", "Until your next turn, whenever a creature deals combat damage to Urza, destroy that creature.", "Add X mana in any combination of colors, where X is the number of creatures you control."],
            minusOneAbilities: ["Urza deals 3 damage to each creature.", "Gain control of target creature.", "Urza deals 4 damage to any target and you gain 4 life.", "Destroy target creature. You gain life equal to its toughness.", "You get an emblem with \u201cCreatures you control get +1/+1.\u201d", "You may put a creature card from your hand onto the battlefield.", "Draw three cards, then put a card from your hand on top of your library.", "Target player puts the top ten cards of his or her library into his or her graveyard.", "Reveal the top five cards of your library. An opponent separates those cards into two piles. Put one pile into your hand and the other on the bottom of your library in any order.", "Exile target permanent.", "Reveal the top five cards of your library. You may put all creature cards and/or land cards from among them into your hand. Put the rest into your graveyard.", "Search your library for a card and put that card into your hand. Then shuffle your library.", "Target player sacrifices two creatures.", "Create a 5/5 black Demon creature token with flying. You lose 2 life.", "Create a 4/4 gold Dragon creature token with flying.", "Target player\u2019s life total becomes 10.", "Destroy target nonland permanent.", "Return target permanent from a graveyard to the battlefield under your control.", "Create two 3/3 green Beast creature tokens.", "Draw four cards and discard two cards."],
            minusSixAbilities: ["Urza deals 7 damage to target player or planeswalker. That player or that planeswalker\u2019s controller discards seven cards, then sacrifices seven permanents.", "You get an emblem with \u201cIf a source would deal damage to you or a planeswalker you control, prevent all but 1 of that damage.\u201d", "Destroy all lands target player controls.", "Create X 2/2 white Cat creature tokens, where X is your life total.", "You gain 100 life.", "Urza deals 10 damage to target player or planeswalker and each creature that player or that planeswalker\u2019s controller controls.", "You get an emblem with \u201cCreatures you control have double strike, trample, hexproof, and haste.\u201d", "You get an emblem with \u201cArtifacts, creatures, enchantments, and lands you control have indestructible.\u201d", "Create a 6/6 green Wurm creature token for each land you control.", "Each player shuffles his or her hand and graveyard into his or her library. You draw seven cards.", "Destroy up to three target creatures and/or other planeswalkers. Return each card put into a graveyard this way to the battlefield under your control.", "You get an emblem with \u201cWhenever you cast a spell, exile target permanent.\u201d", "You get an emblem with \u201cWhenever a creature enters the battlefield under your control, you may have it fight target creature.\u201d Then create three 8/8 blue Octopus creature tokens.", "You control target player during that player\u2019s next turn.", "Exile all cards from target player\u2019s library, then that player shuffles his or her hand into his or her library.", "Create three 1/1 black Assassin creature tokens with \u201cWhenever this creature deals combat damage to a player, that player loses the game.\u201d", "Put all creature cards from all graveyards onto the battlefield under your control.", "You gain X life and draw X cards, where X is the number of lands you control.", "Flip five coins. Take an extra turn after this one for each coin that comes up heads.", "You gain 7 life, draw seven cards, then put up to seven permanent cards from your hand onto the battlefield."],
            faerieDragonAbilities: ["Target creature chosen at random gains trample and gets +X/+0 until end of turn, where X is its power. At the beginning of the next end step, destroy that creature if it attacked this turn.", "Target creature with power 2 or less chosen at random can\u2019t be blocked this turn.", "If target creature chosen at random has toughness 5 or greater, it gets +4/-4 until end of turn. Otherwise, it gets +4/-X until end of turn, where X is its toughness minus 1.", "Target spell or permanent chosen at random becomes white.", "Target spell or permanent chosen at random becomes blue.", "Target spell or permanent chosen at random becomes black.", "Target spell or permanent chosen at random becomes red.", "Target spell or permanent chosen at random becomes green.", "Faerie Dragon deals 3 damage to any target chosen at random.", "Target creature chosen at random gains flying until end of turn.", "Target creature chosen at random gets +3/+3 until end of turn.", "Target creature chosen at random gains banding until end of turn.", "Target creature chosen at random can\u2019t be regenerated this turn.", "Choose one at random: tap target artifact, creature, or land chosen at random, or untap target artifact, creature, or land chosen at random.", "Target creature chosen at random gets -2/-0 until end of turn.", "Return target creature chosen at random to its owner\u2019s hand.", "Faerie Dragon deals 1 damage to any target chosen at random.", "Target creature other than Faerie Dragon chosen at random has base power and toughness 0/2 until end of turn.", "Exile target creature chosen at random. Its controller gains life equal to its power.", "Put a -0/-1 counter on target creature chosen at random."],
            whimsyAbilities: ["Return target permanent that isn\u2019t enchanted chosen at random to its owner\u2019s hand.", "Choose one at random: tap target artifact, creature, or land chosen at random, or untap target artifact, creature, or land chosen at random.", "Flip a coin. If you win the flip, create a 5/5 colorless Djinn artifact creature token with flying. If you lose the flip, Whimsy deals 5 damage to you.", "Whimsy deals 4 damage to any target chosen at random.", "Target player chosen at random draws three cards.", "For each player, flip a coin. If the flip ends up heads, choose a creature card at random from that player\u2019s library and create a token that\u2019s a copy of that creature card under that player\u2019s control.", "Destroy target artifact chosen at random. That artifact\u2019s controller gains life equal to its converted mana cost.", "Destroy target artifact or enchantment chosen at random. It can't be regenerated.", "Target player chosen at random gains 3 life.", "Destroy target creature or land chosen at random. It can\u2019t be regenerated.", "Target player chosen at random discards a card.", "Target player chosen at random mills two cards.", "Target player chosen at random creates a 1/1 colorless Insect artifact creature token with flying named Wasp.", "Destroy all artifacts, creatures, and enchantments.", "Prevent all combat damage that would be dealt this turn.", "Draw a card and reveal it. If it isn\u2019t a land card, discard it."]
        }
    },
    methods: {
        plusOne: function() {
            alert(_.sample(this.plusOneAbilities))
        },
        minusOne: function() {
            alert(_.sample(this.minusOneAbilities))
        },
        minusSix: function() {
            alert(_.sample(this.minusSixAbilities))
        },
        randomWhimsy: function() {
            alert(_.sample(this.whimsyAbilities))
        },
        randomFaerieDragon: function() {
            alert(_.sample(this.faerieDragonAbilities))
        }
    }
});
var ReferenceDocMenuExpanderView = Backbone.View.extend({
    initialize: function() {
        this.$menu = $(".reference-doc-menu").first()
    },
    toggleMenu: function() {
        this.$menu.toggleClass("collapsed")
    },
    events: {
        click: "toggleMenu"
    }
});
$("[data-component=reference-doc-menu-expander]").each(function(e, t) {
    new ReferenceDocMenuExpanderView({
        el: t
    })
}),
Scryfall.createComponent({
    name: "RegistrationForm",
    selector: "#registration-form",
    data: function() {
        return {
            email: null,
            username: null
        }
    },
    mounted: function() {
        this.email = this.$refs.email.dataset.value,
        this.username = this.$refs.username.dataset.value,
        this.inputElement = document.querySelector("input.error"),
        this.inputElement ? this.inputElement.focus() : (this.inputElement = document.querySelector("input.error, input[type=email], input[type=text]"),
        this.inputElement && this.inputElement.focus())
    },
    methods: {
        displayUsername: function() {
            return this.username ? this.username : "username"
        }
    }
}),
Scryfall.createComponent({
    name: "SearchControls",
    selector: "[data-component='search-controls']",
    methods: {
        reloadSearch: function(e) {
            var t = e.target
              , n = t.getAttribute("name")
              , r = t.options[t.selectedIndex].value
              , i = Scryfall.currentURI.query(!0)
              , o = {
                q: i.q,
                order: i.order,
                dir: i.dir,
                as: i.as,
                unique: i.unique,
                type: i.type
            };
            o[n] = r,
            "order" === n && (o.dir = null),
            o = _.compactObject(o);
            var a = Scryfall.currentURI.clone();
            window.location = a.search(o).normalizeQuery()
        },
        jumpToSection: function(e) {
            var t = document.getElementById(e.target.value);
            t && t.scrollIntoView(!0),
            e.target.value = ""
        }
    }
}),
Scryfall.createComponent({
    name: "SearchControlsMobile",
    selector: "[data-component='search-controls-mobile']",
    data: function() {
        return {
            optionsOpen: !1
        }
    },
    methods: {
        toggleOptions: function() {
            this.optionsOpen = !this.optionsOpen
        },
        jumpToSection: function(e) {
            var t = document.getElementById(e.target.value);
            t && t.scrollIntoView(!0),
            e.target.value = ""
        }
    }
}),
Scryfall.createComponent({
    name: "SessionForm",
    selector: "[data-component=session-form]",
    data: function() {
        return {
            WAITING: "WAITING",
            BUSY: "BUSY",
            ERROR: "ERROR",
            SENT: "SENT",
            state: "WAITING",
            currentMessage: "Enter your email address to sign\xa0in to\xa0Scryfall.",
            emailAddress: null,
            returnPath: null,
            inputElement: null
        }
    },
    created: function() {
        this.returnPath = new URI(window.location.toString()).search(!0).return_path,
        this.authenticityToken = document.querySelector("[name=authenticity_token]").value,
        this.axiosConfig = {
            headers: {
                "X-CSRF-Token": document.head.querySelector("[name=csrf-token]").content
            }
        }
    },
    mounted: function() {
        this.inputElement = document.querySelector("input[type=email], input[type=text]"),
        this.inputElement.focus()
    },
    methods: {
        stateIs: function(e) {
            return this.state == e
        },
        stateIsNot: function(e) {
            return this.state != e
        },
        submitEmail: function() {
            var e = this;
            e.state = this.BUSY,
            Axios.post("/signin/dispatch", {
                email: e.emailAddress,
                authenticity_token: e.authenticityToken,
                return_path: e.returnPath
            }, e.axiosConfig).then(function(t) {
                switch (t.data.status) {
                case "sent":
                    e.state = e.SENT,
                    e.currentMessage = t.data.message,
                    e.$nextTick(function() {
                        e.inputElement.blur()
                    });
                    break;
                default:
                    e.state = e.ERROR,
                    e.currentMessage = t.data.message
                }
            })["catch"](function() {
                e.state = e.ERROR,
                e.currentMessage = "The server did not respond to your sign in attempt. Please reload this page and try again. \u2639\ufe0f"
            })
        }
    }
}),
function() {
    var e;
    $("body").on("click", ".js-share-popup", function(t) {
        t.preventDefault();
        var n = t.currentTarget.href
          , r = /reddit\.com/.test(n)
          , i = r ? 845 : 570
          , o = r ? 550 : 279
          , a = screen.width / 2 - i / 2
          , s = screen.height / 2 - o / 2;
        e && e.close && e.close(),
        e = window.open(n, "", "width=" + i + ",height=" + o + ",top=" + s + ",left=" + a)
    })
}(),
Scryfall.createComponent({
    name: "SimpleToggle",
    selector: "[data-component='simple-toggle']",
    data: function() {
        return {
            expanded: !1
        }
    },
    methods: {
        toggle: function() {
            this.expanded = !this.expanded
        },
        isExpanded: function() {
            return this.expanded
        },
        isNotExpanded: function() {
            return !this.expanded
        },
        isToggled: function() {
            return this.expanded
        },
        isNotToggled: function() {
            return !this.expanded
        }
    }
}),
Scryfall.createComponent({
    name: "UpdateEmailForm",
    selector: "[data-component=update-email-form]",
    data: function() {
        return {
            expanded: !1
        }
    },
    methods: {
        expandForm: function() {
            this.expanded = !0,
            this.$nextTick(function() {
                this.$refs.emailField.focus()
            })
        }
    }
}),
Scryfall.run(),
Scryfall.initialize();