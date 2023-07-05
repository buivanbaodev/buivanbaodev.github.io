/*! jQuery Migrate v3.4.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], function(e) {
        return t(e, window)
    }) : "object" == typeof module && module.exports ? module.exports = t(require("jquery"), window) : t(jQuery, window)
}(function(s, n) {
    "use strict";
    function e(e) {
        return 0 <= function(e, t) {
            for (var r = /^(\d+)\.(\d+)\.(\d+)/, n = r.exec(e) || [], o = r.exec(t) || [], a = 1; a <= 3; a++) {
                if (+n[a] > +o[a])
                    return 1;
                if (+n[a] < +o[a])
                    return -1
            }
            return 0
        }(s.fn.jquery, e)
    }
    s.migrateVersion = "3.4.0";
    var t = Object.create(null)
      , o = (s.migrateDisablePatches = function() {
        for (var e = 0; e < arguments.length; e++)
            t[arguments[e]] = !0
    }
    ,
    s.migrateEnablePatches = function() {
        for (var e = 0; e < arguments.length; e++)
            delete t[arguments[e]]
    }
    ,
    s.migrateIsPatchEnabled = function(e) {
        return !t[e]
    }
    ,
    n.console && n.console.log && (s && e("3.0.0") || n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),
    s.migrateWarnings && n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),
    n.console.log("JQMIGRATE: Migrate is installed" + (s.migrateMute ? "" : " with logging active") + ", version " + s.migrateVersion)),
    {});
    function i(e, t) {
        var r = n.console;
        !s.migrateIsPatchEnabled(e) || s.migrateDeduplicateWarnings && o[t] || (o[t] = !0,
        s.migrateWarnings.push(t + " [" + e + "]"),
        r && r.warn && !s.migrateMute && (r.warn("JQMIGRATE: " + t),
        s.migrateTrace && r.trace && r.trace()))
    }
    function r(e, t, r, n, o) {
        Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return i(n, o),
                r
            },
            set: function(e) {
                i(n, o),
                r = e
            }
        })
    }
    function a(e, t, r, n, o) {
        var a = e[t];
        e[t] = function() {
            return o && i(n, o),
            (s.migrateIsPatchEnabled(n) ? r : a || s.noop).apply(this, arguments)
        }
    }
    function u(e, t, r, n, o) {
        if (!o)
            throw new Error("No warning message provided");
        a(e, t, r, n, o)
    }
    function d(e, t, r, n) {
        a(e, t, r, n)
    }
    s.migrateDeduplicateWarnings = !0,
    s.migrateWarnings = [],
    void 0 === s.migrateTrace && (s.migrateTrace = !0),
    s.migrateReset = function() {
        o = {},
        s.migrateWarnings.length = 0
    }
    ,
    "BackCompat" === n.document.compatMode && i("quirks", "jQuery is not compatible with Quirks Mode");
    var c, l, p, f = {}, m = s.fn.init, y = s.find, h = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/, g = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g, v = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    for (c in d(s.fn, "init", function(e) {
        var t = Array.prototype.slice.call(arguments);
        return s.migrateIsPatchEnabled("selector-empty-id") && "string" == typeof e && "#" === e && (i("selector-empty-id", "jQuery( '#' ) is not a valid selector"),
        t[0] = []),
        m.apply(this, t)
    }, "selector-empty-id"),
    s.fn.init.prototype = s.fn,
    d(s, "find", function(t) {
        var r = Array.prototype.slice.call(arguments);
        if ("string" == typeof t && h.test(t))
            try {
                n.document.querySelector(t)
            } catch (e) {
                t = t.replace(g, function(e, t, r, n) {
                    return "[" + t + r + '"' + n + '"]'
                });
                try {
                    n.document.querySelector(t),
                    i("selector-hash", "Attribute selector with '#' must be quoted: " + r[0]),
                    r[0] = t
                } catch (e) {
                    i("selector-hash", "Attribute selector with '#' was not fixed: " + r[0])
                }
            }
        return y.apply(this, r)
    }, "selector-hash"),
    y)
        Object.prototype.hasOwnProperty.call(y, c) && (s.find[c] = y[c]);
    u(s.fn, "size", function() {
        return this.length
    }, "size", "jQuery.fn.size() is deprecated and removed; use the .length property"),
    u(s, "parseJSON", function() {
        return JSON.parse.apply(null, arguments)
    }, "parseJSON", "jQuery.parseJSON is deprecated; use JSON.parse"),
    u(s, "holdReady", s.holdReady, "holdReady", "jQuery.holdReady is deprecated"),
    u(s, "unique", s.uniqueSort, "unique", "jQuery.unique is deprecated; use jQuery.uniqueSort"),
    r(s.expr, "filters", s.expr.pseudos, "expr-pre-pseudos", "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"),
    r(s.expr, ":", s.expr.pseudos, "expr-pre-pseudos", "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"),
    e("3.1.1") && u(s, "trim", function(e) {
        return null == e ? "" : (e + "").replace(v, "")
    }, "trim", "jQuery.trim is deprecated; use String.prototype.trim"),
    e("3.2.0") && (u(s, "nodeName", function(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }, "nodeName", "jQuery.nodeName is deprecated"),
    u(s, "isArray", Array.isArray, "isArray", "jQuery.isArray is deprecated; use Array.isArray")),
    e("3.3.0") && (u(s, "isNumeric", function(e) {
        var t = typeof e;
        return ("number" == t || "string" == t) && !isNaN(e - parseFloat(e))
    }, "isNumeric", "jQuery.isNumeric() is deprecated"),
    s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        f["[object " + t + "]"] = t.toLowerCase()
    }),
    u(s, "type", function(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? f[Object.prototype.toString.call(e)] || "object" : typeof e
    }, "type", "jQuery.type is deprecated"),
    u(s, "isFunction", function(e) {
        return "function" == typeof e
    }, "isFunction", "jQuery.isFunction() is deprecated"),
    u(s, "isWindow", function(e) {
        return null != e && e === e.window
    }, "isWindow", "jQuery.isWindow() is deprecated")),
    s.ajax && (l = s.ajax,
    p = /(=)\?(?=&|$)|\?\?/,
    d(s, "ajax", function() {
        var e = l.apply(this, arguments);
        return e.promise && (u(e, "success", e.done, "jqXHR-methods", "jQXHR.success is deprecated and removed"),
        u(e, "error", e.fail, "jqXHR-methods", "jQXHR.error is deprecated and removed"),
        u(e, "complete", e.always, "jqXHR-methods", "jQXHR.complete is deprecated and removed")),
        e
    }, "jqXHR-methods"),
    e("4.0.0") || s.ajaxPrefilter("+json", function(e) {
        !1 !== e.jsonp && (p.test(e.url) || "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && p.test(e.data)) && i("jsonp-promotion", "JSON-to-JSONP auto-promotion is deprecated")
    }));
    var j = s.fn.removeAttr
      , b = s.fn.toggleClass
      , w = /\S+/g;
    function Q(e) {
        return e.replace(/-([a-z])/g, function(e, t) {
            return t.toUpperCase()
        })
    }
    d(s.fn, "removeAttr", function(e) {
        var r = this;
        return s.each(e.match(w), function(e, t) {
            s.expr.match.bool.test(t) && (i("removeAttr-bool", "jQuery.fn.removeAttr no longer sets boolean properties: " + t),
            r.prop(t, !1))
        }),
        j.apply(this, arguments)
    }, "removeAttr-bool"),
    d(s.fn, "toggleClass", function(t) {
        return void 0 !== t && "boolean" != typeof t ? b.apply(this, arguments) : (i("toggleClass-bool", "jQuery.fn.toggleClass( boolean ) is deprecated"),
        this.each(function() {
            var e = this.getAttribute && this.getAttribute("class") || "";
            e && s.data(this, "__className__", e),
            this.setAttribute && this.setAttribute("class", !e && !1 !== t && s.data(this, "__className__") || "")
        }))
    }, "toggleClass-bool");
    var x, A = !1, R = /^[a-z]/, T = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
    s.swap && s.each(["height", "width", "reliableMarginRight"], function(e, t) {
        var r = s.cssHooks[t] && s.cssHooks[t].get;
        r && (s.cssHooks[t].get = function() {
            var e;
            return A = !0,
            e = r.apply(this, arguments),
            A = !1,
            e
        }
        )
    }),
    d(s, "swap", function(e, t, r, n) {
        var o, a = {};
        for (o in A || i("swap", "jQuery.swap() is undocumented and deprecated"),
        t)
            a[o] = e.style[o],
            e.style[o] = t[o];
        for (o in r = r.apply(e, n || []),
        t)
            e.style[o] = a[o];
        return r
    }, "swap"),
    e("3.4.0") && "undefined" != typeof Proxy && (s.cssProps = new Proxy(s.cssProps || {},{
        set: function() {
            return i("cssProps", "jQuery.cssProps is deprecated"),
            Reflect.set.apply(this, arguments)
        }
    })),
    e("4.0.0") && "undefined" != typeof Proxy && (s.cssNumber = new Proxy({
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
    },{
        get: function() {
            return i("css-number", "jQuery.cssNumber is deprecated"),
            Reflect.get.apply(this, arguments)
        },
        set: function() {
            return i("css-number", "jQuery.cssNumber is deprecated"),
            Reflect.set.apply(this, arguments)
        }
    })),
    x = s.fn.css,
    d(s.fn, "css", function(e, t) {
        var r, n = this;
        return e && "object" == typeof e && !Array.isArray(e) ? (s.each(e, function(e, t) {
            s.fn.css.call(n, e, t)
        }),
        this) : ("number" == typeof t && (t = Q(e),
        r = t,
        R.test(r) && T.test(r[0].toUpperCase() + r.slice(1)) || s.cssNumber[t] || i("css-number", 'Number-typed values are deprecated for jQuery.fn.css( "' + e + '", value )')),
        x.apply(this, arguments))
    }, "css-number");
    function C(e) {
        var t = n.document.implementation.createHTMLDocument("");
        return t.body.innerHTML = e,
        t.body && t.body.innerHTML
    }
    var S, N, P, k, H, E, M, q = s.data, D = (d(s, "data", function(e, t, r) {
        var n, o, a;
        if (t && "object" == typeof t && 2 === arguments.length) {
            for (a in n = s.hasData(e) && q.call(this, e),
            o = {},
            t)
                a !== Q(a) ? (i("data-camelCase", "jQuery.data() always sets/gets camelCased names: " + a),
                n[a] = t[a]) : o[a] = t[a];
            return q.call(this, e, o),
            t
        }
        return t && "string" == typeof t && t !== Q(t) && (n = s.hasData(e) && q.call(this, e)) && t in n ? (i("data-camelCase", "jQuery.data() always sets/gets camelCased names: " + t),
        2 < arguments.length && (n[t] = r),
        n[t]) : q.apply(this, arguments)
    }, "data-camelCase"),
    s.fx && (P = s.Tween.prototype.run,
    k = function(e) {
        return e
    }
    ,
    d(s.Tween.prototype, "run", function() {
        1 < s.easing[this.easing].length && (i("easing-one-arg", "'jQuery.easing." + this.easing.toString() + "' should use only one argument"),
        s.easing[this.easing] = k),
        P.apply(this, arguments)
    }, "easing-one-arg"),
    S = s.fx.interval,
    N = "jQuery.fx.interval is deprecated",
    n.requestAnimationFrame && Object.defineProperty(s.fx, "interval", {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return n.document.hidden || i("fx-interval", N),
            s.migrateIsPatchEnabled("fx-interval") && void 0 === S ? 13 : S
        },
        set: function(e) {
            i("fx-interval", N),
            S = e
        }
    })),
    s.fn.load), F = s.event.add, W = s.event.fix, O = (s.event.props = [],
    s.event.fixHooks = {},
    r(s.event.props, "concat", s.event.props.concat, "event-old-patch", "jQuery.event.props.concat() is deprecated and removed"),
    d(s.event, "fix", function(e) {
        var t = e.type
          , r = this.fixHooks[t]
          , n = s.event.props;
        if (n.length) {
            i("event-old-patch", "jQuery.event.props are deprecated and removed: " + n.join());
            while (n.length)
                s.event.addProp(n.pop())
        }
        if (r && !r._migrated_ && (r._migrated_ = !0,
        i("event-old-patch", "jQuery.event.fixHooks are deprecated and removed: " + t),
        (n = r.props) && n.length))
            while (n.length)
                s.event.addProp(n.pop());
        return t = W.call(this, e),
        r && r.filter ? r.filter(t, e) : t
    }, "event-old-patch"),
    d(s.event, "add", function(e, t) {
        return e === n && "load" === t && "complete" === n.document.readyState && i("load-after-event", "jQuery(window).on('load'...) called after load event occurred"),
        F.apply(this, arguments)
    }, "load-after-event"),
    s.each(["load", "unload", "error"], function(e, t) {
        d(s.fn, t, function() {
            var e = Array.prototype.slice.call(arguments, 0);
            return "load" === t && "string" == typeof e[0] ? D.apply(this, e) : (i("shorthand-removed-v3", "jQuery.fn." + t + "() is deprecated"),
            e.splice(0, 0, t),
            arguments.length ? this.on.apply(this, e) : (this.triggerHandler.apply(this, e),
            this))
        }, "shorthand-removed-v3")
    }),
    s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, r) {
        u(s.fn, r, function(e, t) {
            return 0 < arguments.length ? this.on(r, null, e, t) : this.trigger(r)
        }, "shorthand-deprecated-v3", "jQuery.fn." + r + "() event shorthand is deprecated")
    }),
    s(function() {
        s(n.document).triggerHandler("ready")
    }),
    s.event.special.ready = {
        setup: function() {
            this === n.document && i("ready-event", "'ready' event is deprecated")
        }
    },
    u(s.fn, "bind", function(e, t, r) {
        return this.on(e, null, t, r)
    }, "pre-on-methods", "jQuery.fn.bind() is deprecated"),
    u(s.fn, "unbind", function(e, t) {
        return this.off(e, null, t)
    }, "pre-on-methods", "jQuery.fn.unbind() is deprecated"),
    u(s.fn, "delegate", function(e, t, r, n) {
        return this.on(t, e, r, n)
    }, "pre-on-methods", "jQuery.fn.delegate() is deprecated"),
    u(s.fn, "undelegate", function(e, t, r) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", r)
    }, "pre-on-methods", "jQuery.fn.undelegate() is deprecated"),
    u(s.fn, "hover", function(e, t) {
        return this.on("mouseenter", e).on("mouseleave", t || e)
    }, "pre-on-methods", "jQuery.fn.hover() is deprecated"),
    /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi), _ = (s.UNSAFE_restoreLegacyHtmlPrefilter = function() {
        s.migrateEnablePatches("self-closed-tags")
    }
    ,
    d(s, "htmlPrefilter", function(e) {
        var t, r;
        return (r = (t = e).replace(O, "<$1></$2>")) !== t && C(t) !== C(r) && i("self-closed-tags", "HTML tags must be properly nested and closed: " + t),
        e.replace(O, "<$1></$2>")
    }, "self-closed-tags"),
    s.migrateDisablePatches("self-closed-tags"),
    s.fn.offset);
    return d(s.fn, "offset", function() {
        var e = this[0];
        return !e || e.nodeType && e.getBoundingClientRect ? _.apply(this, arguments) : (i("offset-valid-elem", "jQuery.fn.offset() requires a valid DOM element"),
        arguments.length ? this : void 0)
    }, "offset-valid-elem"),
    s.ajax && (H = s.param,
    d(s, "param", function(e, t) {
        var r = s.ajaxSettings && s.ajaxSettings.traditional;
        return void 0 === t && r && (i("param-ajax-traditional", "jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),
        t = r),
        H.call(this, e, t)
    }, "param-ajax-traditional")),
    u(s.fn, "andSelf", s.fn.addBack, "andSelf", "jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"),
    s.Deferred && (E = s.Deferred,
    M = [["resolve", "done", s.Callbacks("once memory"), s.Callbacks("once memory"), "resolved"], ["reject", "fail", s.Callbacks("once memory"), s.Callbacks("once memory"), "rejected"], ["notify", "progress", s.Callbacks("memory"), s.Callbacks("memory")]],
    d(s, "Deferred", function(e) {
        var a = E()
          , i = a.promise();
        function t() {
            var o = arguments;
            return s.Deferred(function(n) {
                s.each(M, function(e, t) {
                    var r = "function" == typeof o[e] && o[e];
                    a[t[1]](function() {
                        var e = r && r.apply(this, arguments);
                        e && "function" == typeof e.promise ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[t[0] + "With"](this === i ? n.promise() : this, r ? [e] : arguments)
                    })
                }),
                o = null
            }).promise()
        }
        return u(a, "pipe", t, "deferred-pipe", "deferred.pipe() is deprecated"),
        u(i, "pipe", t, "deferred-pipe", "deferred.pipe() is deprecated"),
        e && e.call(a, a),
        a
    }, "deferred-pipe"),
    s.Deferred.exceptionHook = E.exceptionHook),
    s
});
(function($) {
    "use strict";
    $(window).on('elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction('frontend/element_ready/ryancv-testimonials.default', function() {});
        elementorFrontend.hooks.addAction('frontend/element_ready/ryancv-skills.default', function() {
            function skills() {
                var skills_dotted = $('.elementor-editor-active .skills-list.dotted .progress');
                var skills_dotted_w = skills_dotted.width();
                if (skills_dotted.length) {
                    skills_dotted.append('<span class="dg"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>');
                    skills_dotted.find('.percentage').append('<span class="da"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>');
                    skills_dotted.find('.percentage .da').css({
                        'width': skills_dotted_w
                    });
                }
            }
            setTimeout(skills, 1000);
            var skills_circles = $('.elementor-editor-active .skills-list.circles .progress');
            if (skills_circles.length) {
                skills_circles.append('<div class="slice"><div class="bar"></div><div class="fill"></div></div>');
            }
        });
        elementorFrontend.hooks.addAction('frontend/element_ready/global', function($scope) {});
        elementorFrontend.hooks.addAction('frontend/element_ready/widget', function($scope) {});
    });
}
)(jQuery);
/*!
 * VERSION: 1.20.4
 * DATE: 2018-02-15
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
!function(a, b) {
    "use strict";
    var c = {}
      , d = a.document
      , e = a.GreenSockGlobals = a.GreenSockGlobals || a;
    if (!e.TweenLite) {
        var f, g, h, i, j, k = function(a) {
            var b, c = a.split("."), d = e;
            for (b = 0; b < c.length; b++)
                d[c[b]] = d = d[c[b]] || {};
            return d
        }, l = k("com.greensock"), m = 1e-10, n = function(a) {
            var b, c = [], d = a.length;
            for (b = 0; b !== d; c.push(a[b++]))
                ;
            return c
        }, o = function() {}, p = function() {
            var a = Object.prototype.toString
              , b = a.call([]);
            return function(c) {
                return null != c && (c instanceof Array || "object" == typeof c && !!c.push && a.call(c) === b)
            }
        }(), q = {}, r = function(d, f, g, h) {
            this.sc = q[d] ? q[d].sc : [],
            q[d] = this,
            this.gsClass = null,
            this.func = g;
            var i = [];
            this.check = function(j) {
                for (var l, m, n, o, p = f.length, s = p; --p > -1; )
                    (l = q[f[p]] || new r(f[p],[])).gsClass ? (i[p] = l.gsClass,
                    s--) : j && l.sc.push(this);
                if (0 === s && g) {
                    if (m = ("com.greensock." + d).split("."),
                    n = m.pop(),
                    o = k(m.join("."))[n] = this.gsClass = g.apply(g, i),
                    h)
                        if (e[n] = c[n] = o,
                        "undefined" != typeof module && module.exports)
                            if (d === b) {
                                module.exports = c[b] = o;
                                for (p in c)
                                    o[p] = c[p]
                            } else
                                c[b] && (c[b][n] = o);
                        else
                            "function" == typeof define && define.amd && define((a.GreenSockAMDPath ? a.GreenSockAMDPath + "/" : "") + d.split(".").pop(), [], function() {
                                return o
                            });
                    for (p = 0; p < this.sc.length; p++)
                        this.sc[p].check()
                }
            }
            ,
            this.check(!0)
        }, s = a._gsDefine = function(a, b, c, d) {
            return new r(a,b,c,d)
        }
        , t = l._class = function(a, b, c) {
            return b = b || function() {}
            ,
            s(a, [], function() {
                return b
            }, c),
            b
        }
        ;
        s.globals = e;
        var u = [0, 0, 1, 1]
          , v = t("easing.Ease", function(a, b, c, d) {
            this._func = a,
            this._type = c || 0,
            this._power = d || 0,
            this._params = b ? u.concat(b) : u
        }, !0)
          , w = v.map = {}
          , x = v.register = function(a, b, c, d) {
            for (var e, f, g, h, i = b.split(","), j = i.length, k = (c || "easeIn,easeOut,easeInOut").split(","); --j > -1; )
                for (f = i[j],
                e = d ? t("easing." + f, null, !0) : l.easing[f] || {},
                g = k.length; --g > -1; )
                    h = k[g],
                    w[f + "." + h] = w[h + f] = e[h] = a.getRatio ? a : a[h] || new a
        }
        ;
        for (h = v.prototype,
        h._calcEnd = !1,
        h.getRatio = function(a) {
            if (this._func)
                return this._params[0] = a,
                this._func.apply(null, this._params);
            var b = this._type
              , c = this._power
              , d = 1 === b ? 1 - a : 2 === b ? a : .5 > a ? 2 * a : 2 * (1 - a);
            return 1 === c ? d *= d : 2 === c ? d *= d * d : 3 === c ? d *= d * d * d : 4 === c && (d *= d * d * d * d),
            1 === b ? 1 - d : 2 === b ? d : .5 > a ? d / 2 : 1 - d / 2
        }
        ,
        f = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"],
        g = f.length; --g > -1; )
            h = f[g] + ",Power" + g,
            x(new v(null,null,1,g), h, "easeOut", !0),
            x(new v(null,null,2,g), h, "easeIn" + (0 === g ? ",easeNone" : "")),
            x(new v(null,null,3,g), h, "easeInOut");
        w.linear = l.easing.Linear.easeIn,
        w.swing = l.easing.Quad.easeInOut;
        var y = t("events.EventDispatcher", function(a) {
            this._listeners = {},
            this._eventTarget = a || this
        });
        h = y.prototype,
        h.addEventListener = function(a, b, c, d, e) {
            e = e || 0;
            var f, g, h = this._listeners[a], k = 0;
            for (this !== i || j || i.wake(),
            null == h && (this._listeners[a] = h = []),
            g = h.length; --g > -1; )
                f = h[g],
                f.c === b && f.s === c ? h.splice(g, 1) : 0 === k && f.pr < e && (k = g + 1);
            h.splice(k, 0, {
                c: b,
                s: c,
                up: d,
                pr: e
            })
        }
        ,
        h.removeEventListener = function(a, b) {
            var c, d = this._listeners[a];
            if (d)
                for (c = d.length; --c > -1; )
                    if (d[c].c === b)
                        return void d.splice(c, 1)
        }
        ,
        h.dispatchEvent = function(a) {
            var b, c, d, e = this._listeners[a];
            if (e)
                for (b = e.length,
                b > 1 && (e = e.slice(0)),
                c = this._eventTarget; --b > -1; )
                    d = e[b],
                    d && (d.up ? d.c.call(d.s || c, {
                        type: a,
                        target: c
                    }) : d.c.call(d.s || c))
        }
        ;
        var z = a.requestAnimationFrame
          , A = a.cancelAnimationFrame
          , B = Date.now || function() {
            return (new Date).getTime()
        }
          , C = B();
        for (f = ["ms", "moz", "webkit", "o"],
        g = f.length; --g > -1 && !z; )
            z = a[f[g] + "RequestAnimationFrame"],
            A = a[f[g] + "CancelAnimationFrame"] || a[f[g] + "CancelRequestAnimationFrame"];
        t("Ticker", function(a, b) {
            var c, e, f, g, h, k = this, l = B(), n = b !== !1 && z ? "auto" : !1, p = 500, q = 33, r = "tick", s = function(a) {
                var b, d, i = B() - C;
                i > p && (l += i - q),
                C += i,
                k.time = (C - l) / 1e3,
                b = k.time - h,
                (!c || b > 0 || a === !0) && (k.frame++,
                h += b + (b >= g ? .004 : g - b),
                d = !0),
                a !== !0 && (f = e(s)),
                d && k.dispatchEvent(r)
            };
            y.call(k),
            k.time = k.frame = 0,
            k.tick = function() {
                s(!0)
            }
            ,
            k.lagSmoothing = function(a, b) {
                return arguments.length ? (p = a || 1 / m,
                void (q = Math.min(b, p, 0))) : 1 / m > p
            }
            ,
            k.sleep = function() {
                null != f && (n && A ? A(f) : clearTimeout(f),
                e = o,
                f = null,
                k === i && (j = !1))
            }
            ,
            k.wake = function(a) {
                null !== f ? k.sleep() : a ? l += -C + (C = B()) : k.frame > 10 && (C = B() - p + 5),
                e = 0 === c ? o : n && z ? z : function(a) {
                    return setTimeout(a, 1e3 * (h - k.time) + 1 | 0)
                }
                ,
                k === i && (j = !0),
                s(2)
            }
            ,
            k.fps = function(a) {
                return arguments.length ? (c = a,
                g = 1 / (c || 60),
                h = this.time + g,
                void k.wake()) : c
            }
            ,
            k.useRAF = function(a) {
                return arguments.length ? (k.sleep(),
                n = a,
                void k.fps(c)) : n
            }
            ,
            k.fps(a),
            setTimeout(function() {
                "auto" === n && k.frame < 5 && "hidden" !== (d || {}).visibilityState && k.useRAF(!1)
            }, 1500)
        }),
        h = l.Ticker.prototype = new l.events.EventDispatcher,
        h.constructor = l.Ticker;
        var D = t("core.Animation", function(a, b) {
            if (this.vars = b = b || {},
            this._duration = this._totalDuration = a || 0,
            this._delay = Number(b.delay) || 0,
            this._timeScale = 1,
            this._active = b.immediateRender === !0,
            this.data = b.data,
            this._reversed = b.reversed === !0,
            X) {
                j || i.wake();
                var c = this.vars.useFrames ? W : X;
                c.add(this, c._time),
                this.vars.paused && this.paused(!0)
            }
        });
        i = D.ticker = new l.Ticker,
        h = D.prototype,
        h._dirty = h._gc = h._initted = h._paused = !1,
        h._totalTime = h._time = 0,
        h._rawPrevTime = -1,
        h._next = h._last = h._onUpdate = h._timeline = h.timeline = null,
        h._paused = !1;
        var E = function() {
            j && B() - C > 2e3 && ("hidden" !== (d || {}).visibilityState || !i.lagSmoothing()) && i.wake();
            var a = setTimeout(E, 2e3);
            a.unref && a.unref()
        };
        E(),
        h.play = function(a, b) {
            return null != a && this.seek(a, b),
            this.reversed(!1).paused(!1)
        }
        ,
        h.pause = function(a, b) {
            return null != a && this.seek(a, b),
            this.paused(!0)
        }
        ,
        h.resume = function(a, b) {
            return null != a && this.seek(a, b),
            this.paused(!1)
        }
        ,
        h.seek = function(a, b) {
            return this.totalTime(Number(a), b !== !1)
        }
        ,
        h.restart = function(a, b) {
            return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, b !== !1, !0)
        }
        ,
        h.reverse = function(a, b) {
            return null != a && this.seek(a || this.totalDuration(), b),
            this.reversed(!0).paused(!1)
        }
        ,
        h.render = function(a, b, c) {}
        ,
        h.invalidate = function() {
            return this._time = this._totalTime = 0,
            this._initted = this._gc = !1,
            this._rawPrevTime = -1,
            (this._gc || !this.timeline) && this._enabled(!0),
            this
        }
        ,
        h.isActive = function() {
            var a, b = this._timeline, c = this._startTime;
            return !b || !this._gc && !this._paused && b.isActive() && (a = b.rawTime(!0)) >= c && a < c + this.totalDuration() / this._timeScale - 1e-7
        }
        ,
        h._enabled = function(a, b) {
            return j || i.wake(),
            this._gc = !a,
            this._active = this.isActive(),
            b !== !0 && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)),
            !1
        }
        ,
        h._kill = function(a, b) {
            return this._enabled(!1, !1)
        }
        ,
        h.kill = function(a, b) {
            return this._kill(a, b),
            this
        }
        ,
        h._uncache = function(a) {
            for (var b = a ? this : this.timeline; b; )
                b._dirty = !0,
                b = b.timeline;
            return this
        }
        ,
        h._swapSelfInParams = function(a) {
            for (var b = a.length, c = a.concat(); --b > -1; )
                "{self}" === a[b] && (c[b] = this);
            return c
        }
        ,
        h._callback = function(a) {
            var b = this.vars
              , c = b[a]
              , d = b[a + "Params"]
              , e = b[a + "Scope"] || b.callbackScope || this
              , f = d ? d.length : 0;
            switch (f) {
            case 0:
                c.call(e);
                break;
            case 1:
                c.call(e, d[0]);
                break;
            case 2:
                c.call(e, d[0], d[1]);
                break;
            default:
                c.apply(e, d)
            }
        }
        ,
        h.eventCallback = function(a, b, c, d) {
            if ("on" === (a || "").substr(0, 2)) {
                var e = this.vars;
                if (1 === arguments.length)
                    return e[a];
                null == b ? delete e[a] : (e[a] = b,
                e[a + "Params"] = p(c) && -1 !== c.join("").indexOf("{self}") ? this._swapSelfInParams(c) : c,
                e[a + "Scope"] = d),
                "onUpdate" === a && (this._onUpdate = b)
            }
            return this
        }
        ,
        h.delay = function(a) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay),
            this._delay = a,
            this) : this._delay
        }
        ,
        h.duration = function(a) {
            return arguments.length ? (this._duration = this._totalDuration = a,
            this._uncache(!0),
            this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== a && this.totalTime(this._totalTime * (a / this._duration), !0),
            this) : (this._dirty = !1,
            this._duration)
        }
        ,
        h.totalDuration = function(a) {
            return this._dirty = !1,
            arguments.length ? this.duration(a) : this._totalDuration
        }
        ,
        h.time = function(a, b) {
            return arguments.length ? (this._dirty && this.totalDuration(),
            this.totalTime(a > this._duration ? this._duration : a, b)) : this._time
        }
        ,
        h.totalTime = function(a, b, c) {
            if (j || i.wake(),
            !arguments.length)
                return this._totalTime;
            if (this._timeline) {
                if (0 > a && !c && (a += this.totalDuration()),
                this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var d = this._totalDuration
                      , e = this._timeline;
                    if (a > d && !c && (a = d),
                    this._startTime = (this._paused ? this._pauseTime : e._time) - (this._reversed ? d - a : a) / this._timeScale,
                    e._dirty || this._uncache(!1),
                    e._timeline)
                        for (; e._timeline; )
                            e._timeline._time !== (e._startTime + e._totalTime) / e._timeScale && e.totalTime(e._totalTime, !0),
                            e = e._timeline
                }
                this._gc && this._enabled(!0, !1),
                (this._totalTime !== a || 0 === this._duration) && (J.length && Z(),
                this.render(a, b, !1),
                J.length && Z())
            }
            return this
        }
        ,
        h.progress = h.totalProgress = function(a, b) {
            var c = this.duration();
            return arguments.length ? this.totalTime(c * a, b) : c ? this._time / c : this.ratio
        }
        ,
        h.startTime = function(a) {
            return arguments.length ? (a !== this._startTime && (this._startTime = a,
            this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)),
            this) : this._startTime
        }
        ,
        h.endTime = function(a) {
            return this._startTime + (0 != a ? this.totalDuration() : this.duration()) / this._timeScale
        }
        ,
        h.timeScale = function(a) {
            if (!arguments.length)
                return this._timeScale;
            var b, c;
            for (a = a || m,
            this._timeline && this._timeline.smoothChildTiming && (b = this._pauseTime,
            c = b || 0 === b ? b : this._timeline.totalTime(),
            this._startTime = c - (c - this._startTime) * this._timeScale / a),
            this._timeScale = a,
            c = this.timeline; c && c.timeline; )
                c._dirty = !0,
                c.totalDuration(),
                c = c.timeline;
            return this
        }
        ,
        h.reversed = function(a) {
            return arguments.length ? (a != this._reversed && (this._reversed = a,
            this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)),
            this) : this._reversed
        }
        ,
        h.paused = function(a) {
            if (!arguments.length)
                return this._paused;
            var b, c, d = this._timeline;
            return a != this._paused && d && (j || a || i.wake(),
            b = d.rawTime(),
            c = b - this._pauseTime,
            !a && d.smoothChildTiming && (this._startTime += c,
            this._uncache(!1)),
            this._pauseTime = a ? b : null,
            this._paused = a,
            this._active = this.isActive(),
            !a && 0 !== c && this._initted && this.duration() && (b = d.smoothChildTiming ? this._totalTime : (b - this._startTime) / this._timeScale,
            this.render(b, b === this._totalTime, !0))),
            this._gc && !a && this._enabled(!0, !1),
            this
        }
        ;
        var F = t("core.SimpleTimeline", function(a) {
            D.call(this, 0, a),
            this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        h = F.prototype = new D,
        h.constructor = F,
        h.kill()._gc = !1,
        h._first = h._last = h._recent = null,
        h._sortChildren = !1,
        h.add = h.insert = function(a, b, c, d) {
            var e, f;
            if (a._startTime = Number(b || 0) + a._delay,
            a._paused && this !== a._timeline && (a._pauseTime = a._startTime + (this.rawTime() - a._startTime) / a._timeScale),
            a.timeline && a.timeline._remove(a, !0),
            a.timeline = a._timeline = this,
            a._gc && a._enabled(!0, !0),
            e = this._last,
            this._sortChildren)
                for (f = a._startTime; e && e._startTime > f; )
                    e = e._prev;
            return e ? (a._next = e._next,
            e._next = a) : (a._next = this._first,
            this._first = a),
            a._next ? a._next._prev = a : this._last = a,
            a._prev = e,
            this._recent = a,
            this._timeline && this._uncache(!0),
            this
        }
        ,
        h._remove = function(a, b) {
            return a.timeline === this && (b || a._enabled(!1, !0),
            a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next),
            a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev),
            a._next = a._prev = a.timeline = null,
            a === this._recent && (this._recent = this._last),
            this._timeline && this._uncache(!0)),
            this
        }
        ,
        h.render = function(a, b, c) {
            var d, e = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = a; e; )
                d = e._next,
                (e._active || a >= e._startTime && !e._paused && !e._gc) && (e._reversed ? e.render((e._dirty ? e.totalDuration() : e._totalDuration) - (a - e._startTime) * e._timeScale, b, c) : e.render((a - e._startTime) * e._timeScale, b, c)),
                e = d
        }
        ,
        h.rawTime = function() {
            return j || i.wake(),
            this._totalTime
        }
        ;
        var G = t("TweenLite", function(b, c, d) {
            if (D.call(this, c, d),
            this.render = G.prototype.render,
            null == b)
                throw "Cannot tween a null target.";
            this.target = b = "string" != typeof b ? b : G.selector(b) || b;
            var e, f, g, h = b.jquery || b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType), i = this.vars.overwrite;
            if (this._overwrite = i = null == i ? V[G.defaultOverwrite] : "number" == typeof i ? i >> 0 : V[i],
            (h || b instanceof Array || b.push && p(b)) && "number" != typeof b[0])
                for (this._targets = g = n(b),
                this._propLookup = [],
                this._siblings = [],
                e = 0; e < g.length; e++)
                    f = g[e],
                    f ? "string" != typeof f ? f.length && f !== a && f[0] && (f[0] === a || f[0].nodeType && f[0].style && !f.nodeType) ? (g.splice(e--, 1),
                    this._targets = g = g.concat(n(f))) : (this._siblings[e] = $(f, this, !1),
                    1 === i && this._siblings[e].length > 1 && aa(f, this, null, 1, this._siblings[e])) : (f = g[e--] = G.selector(f),
                    "string" == typeof f && g.splice(e + 1, 1)) : g.splice(e--, 1);
            else
                this._propLookup = {},
                this._siblings = $(b, this, !1),
                1 === i && this._siblings.length > 1 && aa(b, this, null, 1, this._siblings);
            (this.vars.immediateRender || 0 === c && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -m,
            this.render(Math.min(0, -this._delay)))
        }, !0)
          , H = function(b) {
            return b && b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType)
        }
          , I = function(a, b) {
            var c, d = {};
            for (c in a)
                U[c] || c in b && "transform" !== c && "x" !== c && "y" !== c && "width" !== c && "height" !== c && "className" !== c && "border" !== c || !(!R[c] || R[c] && R[c]._autoCSS) || (d[c] = a[c],
                delete a[c]);
            a.css = d
        };
        h = G.prototype = new D,
        h.constructor = G,
        h.kill()._gc = !1,
        h.ratio = 0,
        h._firstPT = h._targets = h._overwrittenProps = h._startAt = null,
        h._notifyPluginsOfEnabled = h._lazy = !1,
        G.version = "1.20.4",
        G.defaultEase = h._ease = new v(null,null,1,1),
        G.defaultOverwrite = "auto",
        G.ticker = i,
        G.autoSleep = 120,
        G.lagSmoothing = function(a, b) {
            i.lagSmoothing(a, b)
        }
        ,
        G.selector = a.$ || a.jQuery || function(b) {
            var c = a.$ || a.jQuery;
            return c ? (G.selector = c,
            c(b)) : "undefined" == typeof d ? b : d.querySelectorAll ? d.querySelectorAll(b) : d.getElementById("#" === b.charAt(0) ? b.substr(1) : b)
        }
        ;
        var J = []
          , K = {}
          , L = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi
          , M = /[\+-]=-?[\.\d]/
          , N = function(a) {
            for (var b, c = this._firstPT, d = 1e-6; c; )
                b = c.blob ? 1 === a && null != this.end ? this.end : a ? this.join("") : this.start : c.c * a + c.s,
                c.m ? b = c.m(b, this._target || c.t) : d > b && b > -d && !c.blob && (b = 0),
                c.f ? c.fp ? c.t[c.p](c.fp, b) : c.t[c.p](b) : c.t[c.p] = b,
                c = c._next
        }
          , O = function(a, b, c, d) {
            var e, f, g, h, i, j, k, l = [], m = 0, n = "", o = 0;
            for (l.start = a,
            l.end = b,
            a = l[0] = a + "",
            b = l[1] = b + "",
            c && (c(l),
            a = l[0],
            b = l[1]),
            l.length = 0,
            e = a.match(L) || [],
            f = b.match(L) || [],
            d && (d._next = null,
            d.blob = 1,
            l._firstPT = l._applyPT = d),
            i = f.length,
            h = 0; i > h; h++)
                k = f[h],
                j = b.substr(m, b.indexOf(k, m) - m),
                n += j || !h ? j : ",",
                m += j.length,
                o ? o = (o + 1) % 5 : "rgba(" === j.substr(-5) && (o = 1),
                k === e[h] || e.length <= h ? n += k : (n && (l.push(n),
                n = ""),
                g = parseFloat(e[h]),
                l.push(g),
                l._firstPT = {
                    _next: l._firstPT,
                    t: l,
                    p: l.length - 1,
                    s: g,
                    c: ("=" === k.charAt(1) ? parseInt(k.charAt(0) + "1", 10) * parseFloat(k.substr(2)) : parseFloat(k) - g) || 0,
                    f: 0,
                    m: o && 4 > o ? Math.round : 0
                }),
                m += k.length;
            return n += b.substr(m),
            n && l.push(n),
            l.setRatio = N,
            M.test(b) && (l.end = null),
            l
        }
          , P = function(a, b, c, d, e, f, g, h, i) {
            "function" == typeof d && (d = d(i || 0, a));
            var j, k = typeof a[b], l = "function" !== k ? "" : b.indexOf("set") || "function" != typeof a["get" + b.substr(3)] ? b : "get" + b.substr(3), m = "get" !== c ? c : l ? g ? a[l](g) : a[l]() : a[b], n = "string" == typeof d && "=" === d.charAt(1), o = {
                t: a,
                p: b,
                s: m,
                f: "function" === k,
                pg: 0,
                n: e || b,
                m: f ? "function" == typeof f ? f : Math.round : 0,
                pr: 0,
                c: n ? parseInt(d.charAt(0) + "1", 10) * parseFloat(d.substr(2)) : parseFloat(d) - m || 0
            };
            return ("number" != typeof m || "number" != typeof d && !n) && (g || isNaN(m) || !n && isNaN(d) || "boolean" == typeof m || "boolean" == typeof d ? (o.fp = g,
            j = O(m, n ? parseFloat(o.s) + o.c + (o.s + "").replace(/[0-9\-\.]/g, "") : d, h || G.defaultStringFilter, o),
            o = {
                t: j,
                p: "setRatio",
                s: 0,
                c: 1,
                f: 2,
                pg: 0,
                n: e || b,
                pr: 0,
                m: 0
            }) : (o.s = parseFloat(m),
            n || (o.c = parseFloat(d) - o.s || 0))),
            o.c ? ((o._next = this._firstPT) && (o._next._prev = o),
            this._firstPT = o,
            o) : void 0
        }
          , Q = G._internals = {
            isArray: p,
            isSelector: H,
            lazyTweens: J,
            blobDif: O
        }
          , R = G._plugins = {}
          , S = Q.tweenLookup = {}
          , T = 0
          , U = Q.reservedProps = {
            ease: 1,
            delay: 1,
            overwrite: 1,
            onComplete: 1,
            onCompleteParams: 1,
            onCompleteScope: 1,
            useFrames: 1,
            runBackwards: 1,
            startAt: 1,
            onUpdate: 1,
            onUpdateParams: 1,
            onUpdateScope: 1,
            onStart: 1,
            onStartParams: 1,
            onStartScope: 1,
            onReverseComplete: 1,
            onReverseCompleteParams: 1,
            onReverseCompleteScope: 1,
            onRepeat: 1,
            onRepeatParams: 1,
            onRepeatScope: 1,
            easeParams: 1,
            yoyo: 1,
            immediateRender: 1,
            repeat: 1,
            repeatDelay: 1,
            data: 1,
            paused: 1,
            reversed: 1,
            autoCSS: 1,
            lazy: 1,
            onOverwrite: 1,
            callbackScope: 1,
            stringFilter: 1,
            id: 1,
            yoyoEase: 1
        }
          , V = {
            none: 0,
            all: 1,
            auto: 2,
            concurrent: 3,
            allOnStart: 4,
            preexisting: 5,
            "true": 1,
            "false": 0
        }
          , W = D._rootFramesTimeline = new F
          , X = D._rootTimeline = new F
          , Y = 30
          , Z = Q.lazyRender = function() {
            var a, b = J.length;
            for (K = {}; --b > -1; )
                a = J[b],
                a && a._lazy !== !1 && (a.render(a._lazy[0], a._lazy[1], !0),
                a._lazy = !1);
            J.length = 0
        }
        ;
        X._startTime = i.time,
        W._startTime = i.frame,
        X._active = W._active = !0,
        setTimeout(Z, 1),
        D._updateRoot = G.render = function() {
            var a, b, c;
            if (J.length && Z(),
            X.render((i.time - X._startTime) * X._timeScale, !1, !1),
            W.render((i.frame - W._startTime) * W._timeScale, !1, !1),
            J.length && Z(),
            i.frame >= Y) {
                Y = i.frame + (parseInt(G.autoSleep, 10) || 120);
                for (c in S) {
                    for (b = S[c].tweens,
                    a = b.length; --a > -1; )
                        b[a]._gc && b.splice(a, 1);
                    0 === b.length && delete S[c]
                }
                if (c = X._first,
                (!c || c._paused) && G.autoSleep && !W._first && 1 === i._listeners.tick.length) {
                    for (; c && c._paused; )
                        c = c._next;
                    c || i.sleep()
                }
            }
        }
        ,
        i.addEventListener("tick", D._updateRoot);
        var $ = function(a, b, c) {
            var d, e, f = a._gsTweenID;
            if (S[f || (a._gsTweenID = f = "t" + T++)] || (S[f] = {
                target: a,
                tweens: []
            }),
            b && (d = S[f].tweens,
            d[e = d.length] = b,
            c))
                for (; --e > -1; )
                    d[e] === b && d.splice(e, 1);
            return S[f].tweens
        }
          , _ = function(a, b, c, d) {
            var e, f, g = a.vars.onOverwrite;
            return g && (e = g(a, b, c, d)),
            g = G.onOverwrite,
            g && (f = g(a, b, c, d)),
            e !== !1 && f !== !1
        }
          , aa = function(a, b, c, d, e) {
            var f, g, h, i;
            if (1 === d || d >= 4) {
                for (i = e.length,
                f = 0; i > f; f++)
                    if ((h = e[f]) !== b)
                        h._gc || h._kill(null, a, b) && (g = !0);
                    else if (5 === d)
                        break;
                return g
            }
            var j, k = b._startTime + m, l = [], n = 0, o = 0 === b._duration;
            for (f = e.length; --f > -1; )
                (h = e[f]) === b || h._gc || h._paused || (h._timeline !== b._timeline ? (j = j || ba(b, 0, o),
                0 === ba(h, j, o) && (l[n++] = h)) : h._startTime <= k && h._startTime + h.totalDuration() / h._timeScale > k && ((o || !h._initted) && k - h._startTime <= 2e-10 || (l[n++] = h)));
            for (f = n; --f > -1; )
                if (h = l[f],
                2 === d && h._kill(c, a, b) && (g = !0),
                2 !== d || !h._firstPT && h._initted) {
                    if (2 !== d && !_(h, b))
                        continue;
                    h._enabled(!1, !1) && (g = !0)
                }
            return g
        }
          , ba = function(a, b, c) {
            for (var d = a._timeline, e = d._timeScale, f = a._startTime; d._timeline; ) {
                if (f += d._startTime,
                e *= d._timeScale,
                d._paused)
                    return -100;
                d = d._timeline
            }
            return f /= e,
            f > b ? f - b : c && f === b || !a._initted && 2 * m > f - b ? m : (f += a.totalDuration() / a._timeScale / e) > b + m ? 0 : f - b - m
        };
        h._init = function() {
            var a, b, c, d, e, f, g = this.vars, h = this._overwrittenProps, i = this._duration, j = !!g.immediateRender, k = g.ease;
            if (g.startAt) {
                this._startAt && (this._startAt.render(-1, !0),
                this._startAt.kill()),
                e = {};
                for (d in g.startAt)
                    e[d] = g.startAt[d];
                if (e.data = "isStart",
                e.overwrite = !1,
                e.immediateRender = !0,
                e.lazy = j && g.lazy !== !1,
                e.startAt = e.delay = null,
                e.onUpdate = g.onUpdate,
                e.onUpdateParams = g.onUpdateParams,
                e.onUpdateScope = g.onUpdateScope || g.callbackScope || this,
                this._startAt = G.to(this.target, 0, e),
                j)
                    if (this._time > 0)
                        this._startAt = null;
                    else if (0 !== i)
                        return
            } else if (g.runBackwards && 0 !== i)
                if (this._startAt)
                    this._startAt.render(-1, !0),
                    this._startAt.kill(),
                    this._startAt = null;
                else {
                    0 !== this._time && (j = !1),
                    c = {};
                    for (d in g)
                        U[d] && "autoCSS" !== d || (c[d] = g[d]);
                    if (c.overwrite = 0,
                    c.data = "isFromStart",
                    c.lazy = j && g.lazy !== !1,
                    c.immediateRender = j,
                    this._startAt = G.to(this.target, 0, c),
                    j) {
                        if (0 === this._time)
                            return
                    } else
                        this._startAt._init(),
                        this._startAt._enabled(!1),
                        this.vars.immediateRender && (this._startAt = null)
                }
            if (this._ease = k = k ? k instanceof v ? k : "function" == typeof k ? new v(k,g.easeParams) : w[k] || G.defaultEase : G.defaultEase,
            g.easeParams instanceof Array && k.config && (this._ease = k.config.apply(k, g.easeParams)),
            this._easeType = this._ease._type,
            this._easePower = this._ease._power,
            this._firstPT = null,
            this._targets)
                for (f = this._targets.length,
                a = 0; f > a; a++)
                    this._initProps(this._targets[a], this._propLookup[a] = {}, this._siblings[a], h ? h[a] : null, a) && (b = !0);
            else
                b = this._initProps(this.target, this._propLookup, this._siblings, h, 0);
            if (b && G._onPluginEvent("_onInitAllProps", this),
            h && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)),
            g.runBackwards)
                for (c = this._firstPT; c; )
                    c.s += c.c,
                    c.c = -c.c,
                    c = c._next;
            this._onUpdate = g.onUpdate,
            this._initted = !0
        }
        ,
        h._initProps = function(b, c, d, e, f) {
            var g, h, i, j, k, l;
            if (null == b)
                return !1;
            K[b._gsTweenID] && Z(),
            this.vars.css || b.style && b !== a && b.nodeType && R.css && this.vars.autoCSS !== !1 && I(this.vars, b);
            for (g in this.vars)
                if (l = this.vars[g],
                U[g])
                    l && (l instanceof Array || l.push && p(l)) && -1 !== l.join("").indexOf("{self}") && (this.vars[g] = l = this._swapSelfInParams(l, this));
                else if (R[g] && (j = new R[g])._onInitTween(b, this.vars[g], this, f)) {
                    for (this._firstPT = k = {
                        _next: this._firstPT,
                        t: j,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 1,
                        n: g,
                        pg: 1,
                        pr: j._priority,
                        m: 0
                    },
                    h = j._overwriteProps.length; --h > -1; )
                        c[j._overwriteProps[h]] = this._firstPT;
                    (j._priority || j._onInitAllProps) && (i = !0),
                    (j._onDisable || j._onEnable) && (this._notifyPluginsOfEnabled = !0),
                    k._next && (k._next._prev = k)
                } else
                    c[g] = P.call(this, b, g, "get", l, g, 0, null, this.vars.stringFilter, f);
            return e && this._kill(e, b) ? this._initProps(b, c, d, e, f) : this._overwrite > 1 && this._firstPT && d.length > 1 && aa(b, this, c, this._overwrite, d) ? (this._kill(c, b),
            this._initProps(b, c, d, e, f)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (K[b._gsTweenID] = !0),
            i)
        }
        ,
        h.render = function(a, b, c) {
            var d, e, f, g, h = this._time, i = this._duration, j = this._rawPrevTime;
            if (a >= i - 1e-7 && a >= 0)
                this._totalTime = this._time = i,
                this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1,
                this._reversed || (d = !0,
                e = "onComplete",
                c = c || this._timeline.autoRemoveChildren),
                0 === i && (this._initted || !this.vars.lazy || c) && (this._startTime === this._timeline._duration && (a = 0),
                (0 > j || 0 >= a && a >= -1e-7 || j === m && "isPause" !== this.data) && j !== a && (c = !0,
                j > m && (e = "onReverseComplete")),
                this._rawPrevTime = g = !b || a || j === a ? a : m);
            else if (1e-7 > a)
                this._totalTime = this._time = 0,
                this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0,
                (0 !== h || 0 === i && j > 0) && (e = "onReverseComplete",
                d = this._reversed),
                0 > a && (this._active = !1,
                0 === i && (this._initted || !this.vars.lazy || c) && (j >= 0 && (j !== m || "isPause" !== this.data) && (c = !0),
                this._rawPrevTime = g = !b || a || j === a ? a : m)),
                (!this._initted || this._startAt && this._startAt.progress()) && (c = !0);
            else if (this._totalTime = this._time = a,
            this._easeType) {
                var k = a / i
                  , l = this._easeType
                  , n = this._easePower;
                (1 === l || 3 === l && k >= .5) && (k = 1 - k),
                3 === l && (k *= 2),
                1 === n ? k *= k : 2 === n ? k *= k * k : 3 === n ? k *= k * k * k : 4 === n && (k *= k * k * k * k),
                1 === l ? this.ratio = 1 - k : 2 === l ? this.ratio = k : .5 > a / i ? this.ratio = k / 2 : this.ratio = 1 - k / 2
            } else
                this.ratio = this._ease.getRatio(a / i);
            if (this._time !== h || c) {
                if (!this._initted) {
                    if (this._init(),
                    !this._initted || this._gc)
                        return;
                    if (!c && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration))
                        return this._time = this._totalTime = h,
                        this._rawPrevTime = j,
                        J.push(this),
                        void (this._lazy = [a, b]);
                    this._time && !d ? this.ratio = this._ease.getRatio(this._time / i) : d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (this._lazy !== !1 && (this._lazy = !1),
                this._active || !this._paused && this._time !== h && a >= 0 && (this._active = !0),
                0 === h && (this._startAt && (a >= 0 ? this._startAt.render(a, !0, c) : e || (e = "_dummyGS")),
                this.vars.onStart && (0 !== this._time || 0 === i) && (b || this._callback("onStart"))),
                f = this._firstPT; f; )
                    f.f ? f.t[f.p](f.c * this.ratio + f.s) : f.t[f.p] = f.c * this.ratio + f.s,
                    f = f._next;
                this._onUpdate && (0 > a && this._startAt && a !== -1e-4 && this._startAt.render(a, !0, c),
                b || (this._time !== h || d || c) && this._callback("onUpdate")),
                e && (!this._gc || c) && (0 > a && this._startAt && !this._onUpdate && a !== -1e-4 && this._startAt.render(a, !0, c),
                d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                this._active = !1),
                !b && this.vars[e] && this._callback(e),
                0 === i && this._rawPrevTime === m && g !== m && (this._rawPrevTime = 0))
            }
        }
        ,
        h._kill = function(a, b, c) {
            if ("all" === a && (a = null),
            null == a && (null == b || b === this.target))
                return this._lazy = !1,
                this._enabled(!1, !1);
            b = "string" != typeof b ? b || this._targets || this.target : G.selector(b) || b;
            var d, e, f, g, h, i, j, k, l, m = c && this._time && c._startTime === this._startTime && this._timeline === c._timeline;
            if ((p(b) || H(b)) && "number" != typeof b[0])
                for (d = b.length; --d > -1; )
                    this._kill(a, b[d], c) && (i = !0);
            else {
                if (this._targets) {
                    for (d = this._targets.length; --d > -1; )
                        if (b === this._targets[d]) {
                            h = this._propLookup[d] || {},
                            this._overwrittenProps = this._overwrittenProps || [],
                            e = this._overwrittenProps[d] = a ? this._overwrittenProps[d] || {} : "all";
                            break
                        }
                } else {
                    if (b !== this.target)
                        return !1;
                    h = this._propLookup,
                    e = this._overwrittenProps = a ? this._overwrittenProps || {} : "all"
                }
                if (h) {
                    if (j = a || h,
                    k = a !== e && "all" !== e && a !== h && ("object" != typeof a || !a._tempKill),
                    c && (G.onOverwrite || this.vars.onOverwrite)) {
                        for (f in j)
                            h[f] && (l || (l = []),
                            l.push(f));
                        if ((l || !a) && !_(this, c, b, l))
                            return !1
                    }
                    for (f in j)
                        (g = h[f]) && (m && (g.f ? g.t[g.p](g.s) : g.t[g.p] = g.s,
                        i = !0),
                        g.pg && g.t._kill(j) && (i = !0),
                        g.pg && 0 !== g.t._overwriteProps.length || (g._prev ? g._prev._next = g._next : g === this._firstPT && (this._firstPT = g._next),
                        g._next && (g._next._prev = g._prev),
                        g._next = g._prev = null),
                        delete h[f]),
                        k && (e[f] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return i
        }
        ,
        h.invalidate = function() {
            return this._notifyPluginsOfEnabled && G._onPluginEvent("_onDisable", this),
            this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null,
            this._notifyPluginsOfEnabled = this._active = this._lazy = !1,
            this._propLookup = this._targets ? {} : [],
            D.prototype.invalidate.call(this),
            this.vars.immediateRender && (this._time = -m,
            this.render(Math.min(0, -this._delay))),
            this
        }
        ,
        h._enabled = function(a, b) {
            if (j || i.wake(),
            a && this._gc) {
                var c, d = this._targets;
                if (d)
                    for (c = d.length; --c > -1; )
                        this._siblings[c] = $(d[c], this, !0);
                else
                    this._siblings = $(this.target, this, !0)
            }
            return D.prototype._enabled.call(this, a, b),
            this._notifyPluginsOfEnabled && this._firstPT ? G._onPluginEvent(a ? "_onEnable" : "_onDisable", this) : !1
        }
        ,
        G.to = function(a, b, c) {
            return new G(a,b,c)
        }
        ,
        G.from = function(a, b, c) {
            return c.runBackwards = !0,
            c.immediateRender = 0 != c.immediateRender,
            new G(a,b,c)
        }
        ,
        G.fromTo = function(a, b, c, d) {
            return d.startAt = c,
            d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender,
            new G(a,b,d)
        }
        ,
        G.delayedCall = function(a, b, c, d, e) {
            return new G(b,0,{
                delay: a,
                onComplete: b,
                onCompleteParams: c,
                callbackScope: d,
                onReverseComplete: b,
                onReverseCompleteParams: c,
                immediateRender: !1,
                lazy: !1,
                useFrames: e,
                overwrite: 0
            })
        }
        ,
        G.set = function(a, b) {
            return new G(a,0,b)
        }
        ,
        G.getTweensOf = function(a, b) {
            if (null == a)
                return [];
            a = "string" != typeof a ? a : G.selector(a) || a;
            var c, d, e, f;
            if ((p(a) || H(a)) && "number" != typeof a[0]) {
                for (c = a.length,
                d = []; --c > -1; )
                    d = d.concat(G.getTweensOf(a[c], b));
                for (c = d.length; --c > -1; )
                    for (f = d[c],
                    e = c; --e > -1; )
                        f === d[e] && d.splice(c, 1)
            } else if (a._gsTweenID)
                for (d = $(a).concat(),
                c = d.length; --c > -1; )
                    (d[c]._gc || b && !d[c].isActive()) && d.splice(c, 1);
            return d || []
        }
        ,
        G.killTweensOf = G.killDelayedCallsTo = function(a, b, c) {
            "object" == typeof b && (c = b,
            b = !1);
            for (var d = G.getTweensOf(a, b), e = d.length; --e > -1; )
                d[e]._kill(c, a)
        }
        ;
        var ca = t("plugins.TweenPlugin", function(a, b) {
            this._overwriteProps = (a || "").split(","),
            this._propName = this._overwriteProps[0],
            this._priority = b || 0,
            this._super = ca.prototype
        }, !0);
        if (h = ca.prototype,
        ca.version = "1.19.0",
        ca.API = 2,
        h._firstPT = null,
        h._addTween = P,
        h.setRatio = N,
        h._kill = function(a) {
            var b, c = this._overwriteProps, d = this._firstPT;
            if (null != a[this._propName])
                this._overwriteProps = [];
            else
                for (b = c.length; --b > -1; )
                    null != a[c[b]] && c.splice(b, 1);
            for (; d; )
                null != a[d.n] && (d._next && (d._next._prev = d._prev),
                d._prev ? (d._prev._next = d._next,
                d._prev = null) : this._firstPT === d && (this._firstPT = d._next)),
                d = d._next;
            return !1
        }
        ,
        h._mod = h._roundProps = function(a) {
            for (var b, c = this._firstPT; c; )
                b = a[this._propName] || null != c.n && a[c.n.split(this._propName + "_").join("")],
                b && "function" == typeof b && (2 === c.f ? c.t._applyPT.m = b : c.m = b),
                c = c._next
        }
        ,
        G._onPluginEvent = function(a, b) {
            var c, d, e, f, g, h = b._firstPT;
            if ("_onInitAllProps" === a) {
                for (; h; ) {
                    for (g = h._next,
                    d = e; d && d.pr > h.pr; )
                        d = d._next;
                    (h._prev = d ? d._prev : f) ? h._prev._next = h : e = h,
                    (h._next = d) ? d._prev = h : f = h,
                    h = g
                }
                h = b._firstPT = e
            }
            for (; h; )
                h.pg && "function" == typeof h.t[a] && h.t[a]() && (c = !0),
                h = h._next;
            return c
        }
        ,
        ca.activate = function(a) {
            for (var b = a.length; --b > -1; )
                a[b].API === ca.API && (R[(new a[b])._propName] = a[b]);
            return !0
        }
        ,
        s.plugin = function(a) {
            if (!(a && a.propName && a.init && a.API))
                throw "illegal plugin definition.";
            var b, c = a.propName, d = a.priority || 0, e = a.overwriteProps, f = {
                init: "_onInitTween",
                set: "setRatio",
                kill: "_kill",
                round: "_mod",
                mod: "_mod",
                initAll: "_onInitAllProps"
            }, g = t("plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin", function() {
                ca.call(this, c, d),
                this._overwriteProps = e || []
            }, a.global === !0), h = g.prototype = new ca(c);
            h.constructor = g,
            g.API = a.API;
            for (b in f)
                "function" == typeof a[b] && (h[f[b]] = a[b]);
            return g.version = a.version,
            ca.activate([g]),
            g
        }
        ,
        f = a._gsQueue) {
            for (g = 0; g < f.length; g++)
                f[g]();
            for (h in q)
                q[h].func || a.console.log("GSAP encountered missing dependency: " + h)
        }
        j = !1
    }
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenLite");
/*!
 * VERSION: 1.20.4
 * DATE: 2018-02-15
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(a, b) {
        var c, d, e, f, g = function() {
            a.call(this, "css"),
            this._overwriteProps.length = 0,
            this.setRatio = g.prototype.setRatio
        }, h = _gsScope._gsDefine.globals, i = {}, j = g.prototype = new a("css");
        j.constructor = g,
        g.version = "1.20.4",
        g.API = 2,
        g.defaultTransformPerspective = 0,
        g.defaultSkewType = "compensated",
        g.defaultSmoothOrigin = !0,
        j = "px",
        g.suffixMap = {
            top: j,
            right: j,
            bottom: j,
            left: j,
            width: j,
            height: j,
            fontSize: j,
            padding: j,
            margin: j,
            perspective: j,
            lineHeight: ""
        };
        var k, l, m, n, o, p, q, r, s = /(?:\-|\.|\b)(\d|\.|e\-)+/g, t = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, u = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, v = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g, w = /(?:\d|\-|\+|=|#|\.)*/g, x = /opacity *= *([^)]*)/i, y = /opacity:([^;]*)/i, z = /alpha\(opacity *=.+?\)/i, A = /^(rgb|hsl)/, B = /([A-Z])/g, C = /-([a-z])/gi, D = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, E = function(a, b) {
            return b.toUpperCase()
        }, F = /(?:Left|Right|Width)/i, G = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, H = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, I = /,(?=[^\)]*(?:\(|$))/gi, J = /[\s,\(]/i, K = Math.PI / 180, L = 180 / Math.PI, M = {}, N = {
            style: {}
        }, O = _gsScope.document || {
            createElement: function() {
                return N
            }
        }, P = function(a, b) {
            return O.createElementNS ? O.createElementNS(b || "http://www.w3.org/1999/xhtml", a) : O.createElement(a)
        }, Q = P("div"), R = P("img"), S = g._internals = {
            _specialProps: i
        }, T = (_gsScope.navigator || {}).userAgent || "", U = function() {
            var a = T.indexOf("Android")
              , b = P("a");
            return m = -1 !== T.indexOf("Safari") && -1 === T.indexOf("Chrome") && (-1 === a || parseFloat(T.substr(a + 8, 2)) > 3),
            o = m && parseFloat(T.substr(T.indexOf("Version/") + 8, 2)) < 6,
            n = -1 !== T.indexOf("Firefox"),
            (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(T) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(T)) && (p = parseFloat(RegExp.$1)),
            b ? (b.style.cssText = "top:1px;opacity:.55;",
            /^0.55/.test(b.style.opacity)) : !1
        }(), V = function(a) {
            return x.test("string" == typeof a ? a : (a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
        }, W = function(a) {
            _gsScope.console && console.log(a)
        }, X = "", Y = "", Z = function(a, b) {
            b = b || Q;
            var c, d, e = b.style;
            if (void 0 !== e[a])
                return a;
            for (a = a.charAt(0).toUpperCase() + a.substr(1),
            c = ["O", "Moz", "ms", "Ms", "Webkit"],
            d = 5; --d > -1 && void 0 === e[c[d] + a]; )
                ;
            return d >= 0 ? (Y = 3 === d ? "ms" : c[d],
            X = "-" + Y.toLowerCase() + "-",
            Y + a) : null
        }, $ = O.defaultView ? O.defaultView.getComputedStyle : function() {}
        , _ = g.getStyle = function(a, b, c, d, e) {
            var f;
            return U || "opacity" !== b ? (!d && a.style[b] ? f = a.style[b] : (c = c || $(a)) ? f = c[b] || c.getPropertyValue(b) || c.getPropertyValue(b.replace(B, "-$1").toLowerCase()) : a.currentStyle && (f = a.currentStyle[b]),
            null == e || f && "none" !== f && "auto" !== f && "auto auto" !== f ? f : e) : V(a)
        }
        , aa = S.convertToPixels = function(a, c, d, e, f) {
            if ("px" === e || !e && "lineHeight" !== c)
                return d;
            if ("auto" === e || !d)
                return 0;
            var h, i, j, k = F.test(c), l = a, m = Q.style, n = 0 > d, o = 1 === d;
            if (n && (d = -d),
            o && (d *= 100),
            "lineHeight" !== c || e)
                if ("%" === e && -1 !== c.indexOf("border"))
                    h = d / 100 * (k ? a.clientWidth : a.clientHeight);
                else {
                    if (m.cssText = "border:0 solid red;position:" + _(a, "position") + ";line-height:0;",
                    "%" !== e && l.appendChild && "v" !== e.charAt(0) && "rem" !== e)
                        m[k ? "borderLeftWidth" : "borderTopWidth"] = d + e;
                    else {
                        if (l = a.parentNode || O.body,
                        -1 !== _(l, "display").indexOf("flex") && (m.position = "absolute"),
                        i = l._gsCache,
                        j = b.ticker.frame,
                        i && k && i.time === j)
                            return i.width * d / 100;
                        m[k ? "width" : "height"] = d + e
                    }
                    l.appendChild(Q),
                    h = parseFloat(Q[k ? "offsetWidth" : "offsetHeight"]),
                    l.removeChild(Q),
                    k && "%" === e && g.cacheWidths !== !1 && (i = l._gsCache = l._gsCache || {},
                    i.time = j,
                    i.width = h / d * 100),
                    0 !== h || f || (h = aa(a, c, d, e, !0))
                }
            else
                i = $(a).lineHeight,
                a.style.lineHeight = d,
                h = parseFloat($(a).lineHeight),
                a.style.lineHeight = i;
            return o && (h /= 100),
            n ? -h : h
        }
        , ba = S.calculateOffset = function(a, b, c) {
            if ("absolute" !== _(a, "position", c))
                return 0;
            var d = "left" === b ? "Left" : "Top"
              , e = _(a, "margin" + d, c);
            return a["offset" + d] - (aa(a, b, parseFloat(e), e.replace(w, "")) || 0)
        }
        , ca = function(a, b) {
            var c, d, e, f = {};
            if (b = b || $(a, null))
                if (c = b.length)
                    for (; --c > -1; )
                        e = b[c],
                        (-1 === e.indexOf("-transform") || Da === e) && (f[e.replace(C, E)] = b.getPropertyValue(e));
                else
                    for (c in b)
                        (-1 === c.indexOf("Transform") || Ca === c) && (f[c] = b[c]);
            else if (b = a.currentStyle || a.style)
                for (c in b)
                    "string" == typeof c && void 0 === f[c] && (f[c.replace(C, E)] = b[c]);
            return U || (f.opacity = V(a)),
            d = Ra(a, b, !1),
            f.rotation = d.rotation,
            f.skewX = d.skewX,
            f.scaleX = d.scaleX,
            f.scaleY = d.scaleY,
            f.x = d.x,
            f.y = d.y,
            Fa && (f.z = d.z,
            f.rotationX = d.rotationX,
            f.rotationY = d.rotationY,
            f.scaleZ = d.scaleZ),
            f.filters && delete f.filters,
            f
        }, da = function(a, b, c, d, e) {
            var f, g, h, i = {}, j = a.style;
            for (g in c)
                "cssText" !== g && "length" !== g && isNaN(g) && (b[g] !== (f = c[g]) || e && e[g]) && -1 === g.indexOf("Origin") && ("number" == typeof f || "string" == typeof f) && (i[g] = "auto" !== f || "left" !== g && "top" !== g ? "" !== f && "auto" !== f && "none" !== f || "string" != typeof b[g] || "" === b[g].replace(v, "") ? f : 0 : ba(a, g),
                void 0 !== j[g] && (h = new sa(j,g,j[g],h)));
            if (d)
                for (g in d)
                    "className" !== g && (i[g] = d[g]);
            return {
                difs: i,
                firstMPT: h
            }
        }, ea = {
            width: ["Left", "Right"],
            height: ["Top", "Bottom"]
        }, fa = ["marginLeft", "marginRight", "marginTop", "marginBottom"], ga = function(a, b, c) {
            if ("svg" === (a.nodeName + "").toLowerCase())
                return (c || $(a))[b] || 0;
            if (a.getCTM && Oa(a))
                return a.getBBox()[b] || 0;
            var d = parseFloat("width" === b ? a.offsetWidth : a.offsetHeight)
              , e = ea[b]
              , f = e.length;
            for (c = c || $(a, null); --f > -1; )
                d -= parseFloat(_(a, "padding" + e[f], c, !0)) || 0,
                d -= parseFloat(_(a, "border" + e[f] + "Width", c, !0)) || 0;
            return d
        }, ha = function(a, b) {
            if ("contain" === a || "auto" === a || "auto auto" === a)
                return a + " ";
            (null == a || "" === a) && (a = "0 0");
            var c, d = a.split(" "), e = -1 !== a.indexOf("left") ? "0%" : -1 !== a.indexOf("right") ? "100%" : d[0], f = -1 !== a.indexOf("top") ? "0%" : -1 !== a.indexOf("bottom") ? "100%" : d[1];
            if (d.length > 3 && !b) {
                for (d = a.split(", ").join(",").split(","),
                a = [],
                c = 0; c < d.length; c++)
                    a.push(ha(d[c]));
                return a.join(",")
            }
            return null == f ? f = "center" === e ? "50%" : "0" : "center" === f && (f = "50%"),
            ("center" === e || isNaN(parseFloat(e)) && -1 === (e + "").indexOf("=")) && (e = "50%"),
            a = e + " " + f + (d.length > 2 ? " " + d[2] : ""),
            b && (b.oxp = -1 !== e.indexOf("%"),
            b.oyp = -1 !== f.indexOf("%"),
            b.oxr = "=" === e.charAt(1),
            b.oyr = "=" === f.charAt(1),
            b.ox = parseFloat(e.replace(v, "")),
            b.oy = parseFloat(f.replace(v, "")),
            b.v = a),
            b || a
        }, ia = function(a, b) {
            return "function" == typeof a && (a = a(r, q)),
            "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - parseFloat(b) || 0
        }, ja = function(a, b) {
            return "function" == typeof a && (a = a(r, q)),
            null == a ? b : "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) + b : parseFloat(a) || 0
        }, ka = function(a, b, c, d) {
            var e, f, g, h, i, j = 1e-6;
            return "function" == typeof a && (a = a(r, q)),
            null == a ? h = b : "number" == typeof a ? h = a : (e = 360,
            f = a.split("_"),
            i = "=" === a.charAt(1),
            g = (i ? parseInt(a.charAt(0) + "1", 10) * parseFloat(f[0].substr(2)) : parseFloat(f[0])) * (-1 === a.indexOf("rad") ? 1 : L) - (i ? 0 : b),
            f.length && (d && (d[c] = b + g),
            -1 !== a.indexOf("short") && (g %= e,
            g !== g % (e / 2) && (g = 0 > g ? g + e : g - e)),
            -1 !== a.indexOf("_cw") && 0 > g ? g = (g + 9999999999 * e) % e - (g / e | 0) * e : -1 !== a.indexOf("ccw") && g > 0 && (g = (g - 9999999999 * e) % e - (g / e | 0) * e)),
            h = b + g),
            j > h && h > -j && (h = 0),
            h
        }, la = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            fuchsia: [255, 0, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0]
        }, ma = function(a, b, c) {
            return a = 0 > a ? a + 1 : a > 1 ? a - 1 : a,
            255 * (1 > 6 * a ? b + (c - b) * a * 6 : .5 > a ? c : 2 > 3 * a ? b + (c - b) * (2 / 3 - a) * 6 : b) + .5 | 0
        }, na = g.parseColor = function(a, b) {
            var c, d, e, f, g, h, i, j, k, l, m;
            if (a)
                if ("number" == typeof a)
                    c = [a >> 16, a >> 8 & 255, 255 & a];
                else {
                    if ("," === a.charAt(a.length - 1) && (a = a.substr(0, a.length - 1)),
                    la[a])
                        c = la[a];
                    else if ("#" === a.charAt(0))
                        4 === a.length && (d = a.charAt(1),
                        e = a.charAt(2),
                        f = a.charAt(3),
                        a = "#" + d + d + e + e + f + f),
                        a = parseInt(a.substr(1), 16),
                        c = [a >> 16, a >> 8 & 255, 255 & a];
                    else if ("hsl" === a.substr(0, 3))
                        if (c = m = a.match(s),
                        b) {
                            if (-1 !== a.indexOf("="))
                                return a.match(t)
                        } else
                            g = Number(c[0]) % 360 / 360,
                            h = Number(c[1]) / 100,
                            i = Number(c[2]) / 100,
                            e = .5 >= i ? i * (h + 1) : i + h - i * h,
                            d = 2 * i - e,
                            c.length > 3 && (c[3] = Number(c[3])),
                            c[0] = ma(g + 1 / 3, d, e),
                            c[1] = ma(g, d, e),
                            c[2] = ma(g - 1 / 3, d, e);
                    else
                        c = a.match(s) || la.transparent;
                    c[0] = Number(c[0]),
                    c[1] = Number(c[1]),
                    c[2] = Number(c[2]),
                    c.length > 3 && (c[3] = Number(c[3]))
                }
            else
                c = la.black;
            return b && !m && (d = c[0] / 255,
            e = c[1] / 255,
            f = c[2] / 255,
            j = Math.max(d, e, f),
            k = Math.min(d, e, f),
            i = (j + k) / 2,
            j === k ? g = h = 0 : (l = j - k,
            h = i > .5 ? l / (2 - j - k) : l / (j + k),
            g = j === d ? (e - f) / l + (f > e ? 6 : 0) : j === e ? (f - d) / l + 2 : (d - e) / l + 4,
            g *= 60),
            c[0] = g + .5 | 0,
            c[1] = 100 * h + .5 | 0,
            c[2] = 100 * i + .5 | 0),
            c
        }
        , oa = function(a, b) {
            var c, d, e, f = a.match(pa) || [], g = 0, h = "";
            if (!f.length)
                return a;
            for (c = 0; c < f.length; c++)
                d = f[c],
                e = a.substr(g, a.indexOf(d, g) - g),
                g += e.length + d.length,
                d = na(d, b),
                3 === d.length && d.push(1),
                h += e + (b ? "hsla(" + d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : "rgba(" + d.join(",")) + ")";
            return h + a.substr(g)
        }, pa = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (j in la)
            pa += "|" + j + "\\b";
        pa = new RegExp(pa + ")","gi"),
        g.colorStringFilter = function(a) {
            var b, c = a[0] + " " + a[1];
            pa.test(c) && (b = -1 !== c.indexOf("hsl(") || -1 !== c.indexOf("hsla("),
            a[0] = oa(a[0], b),
            a[1] = oa(a[1], b)),
            pa.lastIndex = 0
        }
        ,
        b.defaultStringFilter || (b.defaultStringFilter = g.colorStringFilter);
        var qa = function(a, b, c, d) {
            if (null == a)
                return function(a) {
                    return a
                }
                ;
            var e, f = b ? (a.match(pa) || [""])[0] : "", g = a.split(f).join("").match(u) || [], h = a.substr(0, a.indexOf(g[0])), i = ")" === a.charAt(a.length - 1) ? ")" : "", j = -1 !== a.indexOf(" ") ? " " : ",", k = g.length, l = k > 0 ? g[0].replace(s, "") : "";
            return k ? e = b ? function(a) {
                var b, m, n, o;
                if ("number" == typeof a)
                    a += l;
                else if (d && I.test(a)) {
                    for (o = a.replace(I, "|").split("|"),
                    n = 0; n < o.length; n++)
                        o[n] = e(o[n]);
                    return o.join(",")
                }
                if (b = (a.match(pa) || [f])[0],
                m = a.split(b).join("").match(u) || [],
                n = m.length,
                k > n--)
                    for (; ++n < k; )
                        m[n] = c ? m[(n - 1) / 2 | 0] : g[n];
                return h + m.join(j) + j + b + i + (-1 !== a.indexOf("inset") ? " inset" : "")
            }
            : function(a) {
                var b, f, m;
                if ("number" == typeof a)
                    a += l;
                else if (d && I.test(a)) {
                    for (f = a.replace(I, "|").split("|"),
                    m = 0; m < f.length; m++)
                        f[m] = e(f[m]);
                    return f.join(",")
                }
                if (b = a.match(u) || [],
                m = b.length,
                k > m--)
                    for (; ++m < k; )
                        b[m] = c ? b[(m - 1) / 2 | 0] : g[m];
                return h + b.join(j) + i
            }
            : function(a) {
                return a
            }
        }
          , ra = function(a) {
            return a = a.split(","),
            function(b, c, d, e, f, g, h) {
                var i, j = (c + "").split(" ");
                for (h = {},
                i = 0; 4 > i; i++)
                    h[a[i]] = j[i] = j[i] || j[(i - 1) / 2 >> 0];
                return e.parse(b, h, f, g)
            }
        }
          , sa = (S._setPluginRatio = function(a) {
            this.plugin.setRatio(a);
            for (var b, c, d, e, f, g = this.data, h = g.proxy, i = g.firstMPT, j = 1e-6; i; )
                b = h[i.v],
                i.r ? b = Math.round(b) : j > b && b > -j && (b = 0),
                i.t[i.p] = b,
                i = i._next;
            if (g.autoRotate && (g.autoRotate.rotation = g.mod ? g.mod(h.rotation, this.t) : h.rotation),
            1 === a || 0 === a)
                for (i = g.firstMPT,
                f = 1 === a ? "e" : "b"; i; ) {
                    if (c = i.t,
                    c.type) {
                        if (1 === c.type) {
                            for (e = c.xs0 + c.s + c.xs1,
                            d = 1; d < c.l; d++)
                                e += c["xn" + d] + c["xs" + (d + 1)];
                            c[f] = e
                        }
                    } else
                        c[f] = c.s + c.xs0;
                    i = i._next
                }
        }
        ,
        function(a, b, c, d, e) {
            this.t = a,
            this.p = b,
            this.v = c,
            this.r = e,
            d && (d._prev = this,
            this._next = d)
        }
        )
          , ta = (S._parseToProxy = function(a, b, c, d, e, f) {
            var g, h, i, j, k, l = d, m = {}, n = {}, o = c._transform, p = M;
            for (c._transform = null,
            M = b,
            d = k = c.parse(a, b, d, e),
            M = p,
            f && (c._transform = o,
            l && (l._prev = null,
            l._prev && (l._prev._next = null))); d && d !== l; ) {
                if (d.type <= 1 && (h = d.p,
                n[h] = d.s + d.c,
                m[h] = d.s,
                f || (j = new sa(d,"s",h,j,d.r),
                d.c = 0),
                1 === d.type))
                    for (g = d.l; --g > 0; )
                        i = "xn" + g,
                        h = d.p + "_" + i,
                        n[h] = d.data[i],
                        m[h] = d[i],
                        f || (j = new sa(d,i,h,j,d.rxp[i]));
                d = d._next
            }
            return {
                proxy: m,
                end: n,
                firstMPT: j,
                pt: k
            }
        }
        ,
        S.CSSPropTween = function(a, b, d, e, g, h, i, j, k, l, m) {
            this.t = a,
            this.p = b,
            this.s = d,
            this.c = e,
            this.n = i || b,
            a instanceof ta || f.push(this.n),
            this.r = j,
            this.type = h || 0,
            k && (this.pr = k,
            c = !0),
            this.b = void 0 === l ? d : l,
            this.e = void 0 === m ? d + e : m,
            g && (this._next = g,
            g._prev = this)
        }
        )
          , ua = function(a, b, c, d, e, f) {
            var g = new ta(a,b,c,d - c,e,-1,f);
            return g.b = c,
            g.e = g.xs0 = d,
            g
        }
          , va = g.parseComplex = function(a, b, c, d, e, f, h, i, j, l) {
            c = c || f || "",
            "function" == typeof d && (d = d(r, q)),
            h = new ta(a,b,0,0,h,l ? 2 : 1,null,!1,i,c,d),
            d += "",
            e && pa.test(d + c) && (d = [c, d],
            g.colorStringFilter(d),
            c = d[0],
            d = d[1]);
            var m, n, o, p, u, v, w, x, y, z, A, B, C, D = c.split(", ").join(",").split(" "), E = d.split(", ").join(",").split(" "), F = D.length, G = k !== !1;
            for ((-1 !== d.indexOf(",") || -1 !== c.indexOf(",")) && (-1 !== (d + c).indexOf("rgb") || -1 !== (d + c).indexOf("hsl") ? (D = D.join(" ").replace(I, ", ").split(" "),
            E = E.join(" ").replace(I, ", ").split(" ")) : (D = D.join(" ").split(",").join(", ").split(" "),
            E = E.join(" ").split(",").join(", ").split(" ")),
            F = D.length),
            F !== E.length && (D = (f || "").split(" "),
            F = D.length),
            h.plugin = j,
            h.setRatio = l,
            pa.lastIndex = 0,
            m = 0; F > m; m++)
                if (p = D[m],
                u = E[m],
                x = parseFloat(p),
                x || 0 === x)
                    h.appendXtra("", x, ia(u, x), u.replace(t, ""), G && -1 !== u.indexOf("px"), !0);
                else if (e && pa.test(p))
                    B = u.indexOf(")") + 1,
                    B = ")" + (B ? u.substr(B) : ""),
                    C = -1 !== u.indexOf("hsl") && U,
                    z = u,
                    p = na(p, C),
                    u = na(u, C),
                    y = p.length + u.length > 6,
                    y && !U && 0 === u[3] ? (h["xs" + h.l] += h.l ? " transparent" : "transparent",
                    h.e = h.e.split(E[m]).join("transparent")) : (U || (y = !1),
                    C ? h.appendXtra(z.substr(0, z.indexOf("hsl")) + (y ? "hsla(" : "hsl("), p[0], ia(u[0], p[0]), ",", !1, !0).appendXtra("", p[1], ia(u[1], p[1]), "%,", !1).appendXtra("", p[2], ia(u[2], p[2]), y ? "%," : "%" + B, !1) : h.appendXtra(z.substr(0, z.indexOf("rgb")) + (y ? "rgba(" : "rgb("), p[0], u[0] - p[0], ",", !0, !0).appendXtra("", p[1], u[1] - p[1], ",", !0).appendXtra("", p[2], u[2] - p[2], y ? "," : B, !0),
                    y && (p = p.length < 4 ? 1 : p[3],
                    h.appendXtra("", p, (u.length < 4 ? 1 : u[3]) - p, B, !1))),
                    pa.lastIndex = 0;
                else if (v = p.match(s)) {
                    if (w = u.match(t),
                    !w || w.length !== v.length)
                        return h;
                    for (o = 0,
                    n = 0; n < v.length; n++)
                        A = v[n],
                        z = p.indexOf(A, o),
                        h.appendXtra(p.substr(o, z - o), Number(A), ia(w[n], A), "", G && "px" === p.substr(z + A.length, 2), 0 === n),
                        o = z + A.length;
                    h["xs" + h.l] += p.substr(o)
                } else
                    h["xs" + h.l] += h.l || h["xs" + h.l] ? " " + u : u;
            if (-1 !== d.indexOf("=") && h.data) {
                for (B = h.xs0 + h.data.s,
                m = 1; m < h.l; m++)
                    B += h["xs" + m] + h.data["xn" + m];
                h.e = B + h["xs" + m]
            }
            return h.l || (h.type = -1,
            h.xs0 = h.e),
            h.xfirst || h
        }
          , wa = 9;
        for (j = ta.prototype,
        j.l = j.pr = 0; --wa > 0; )
            j["xn" + wa] = 0,
            j["xs" + wa] = "";
        j.xs0 = "",
        j._next = j._prev = j.xfirst = j.data = j.plugin = j.setRatio = j.rxp = null,
        j.appendXtra = function(a, b, c, d, e, f) {
            var g = this
              , h = g.l;
            return g["xs" + h] += f && (h || g["xs" + h]) ? " " + a : a || "",
            c || 0 === h || g.plugin ? (g.l++,
            g.type = g.setRatio ? 2 : 1,
            g["xs" + g.l] = d || "",
            h > 0 ? (g.data["xn" + h] = b + c,
            g.rxp["xn" + h] = e,
            g["xn" + h] = b,
            g.plugin || (g.xfirst = new ta(g,"xn" + h,b,c,g.xfirst || g,0,g.n,e,g.pr),
            g.xfirst.xs0 = 0),
            g) : (g.data = {
                s: b + c
            },
            g.rxp = {},
            g.s = b,
            g.c = c,
            g.r = e,
            g)) : (g["xs" + h] += b + (d || ""),
            g)
        }
        ;
        var xa = function(a, b) {
            b = b || {},
            this.p = b.prefix ? Z(a) || a : a,
            i[a] = i[this.p] = this,
            this.format = b.formatter || qa(b.defaultValue, b.color, b.collapsible, b.multi),
            b.parser && (this.parse = b.parser),
            this.clrs = b.color,
            this.multi = b.multi,
            this.keyword = b.keyword,
            this.dflt = b.defaultValue,
            this.pr = b.priority || 0
        }
          , ya = S._registerComplexSpecialProp = function(a, b, c) {
            "object" != typeof b && (b = {
                parser: c
            });
            var d, e, f = a.split(","), g = b.defaultValue;
            for (c = c || [g],
            d = 0; d < f.length; d++)
                b.prefix = 0 === d && b.prefix,
                b.defaultValue = c[d] || g,
                e = new xa(f[d],b)
        }
          , za = S._registerPluginProp = function(a) {
            if (!i[a]) {
                var b = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin";
                ya(a, {
                    parser: function(a, c, d, e, f, g, j) {
                        var k = h.com.greensock.plugins[b];
                        return k ? (k._cssRegister(),
                        i[d].parse(a, c, d, e, f, g, j)) : (W("Error: " + b + " js file not loaded."),
                        f)
                    }
                })
            }
        }
        ;
        j = xa.prototype,
        j.parseComplex = function(a, b, c, d, e, f) {
            var g, h, i, j, k, l, m = this.keyword;
            if (this.multi && (I.test(c) || I.test(b) ? (h = b.replace(I, "|").split("|"),
            i = c.replace(I, "|").split("|")) : m && (h = [b],
            i = [c])),
            i) {
                for (j = i.length > h.length ? i.length : h.length,
                g = 0; j > g; g++)
                    b = h[g] = h[g] || this.dflt,
                    c = i[g] = i[g] || this.dflt,
                    m && (k = b.indexOf(m),
                    l = c.indexOf(m),
                    k !== l && (-1 === l ? h[g] = h[g].split(m).join("") : -1 === k && (h[g] += " " + m)));
                b = h.join(", "),
                c = i.join(", ")
            }
            return va(a, this.p, b, c, this.clrs, this.dflt, d, this.pr, e, f)
        }
        ,
        j.parse = function(a, b, c, d, f, g, h) {
            return this.parseComplex(a.style, this.format(_(a, this.p, e, !1, this.dflt)), this.format(b), f, g)
        }
        ,
        g.registerSpecialProp = function(a, b, c) {
            ya(a, {
                parser: function(a, d, e, f, g, h, i) {
                    var j = new ta(a,e,0,0,g,2,e,!1,c);
                    return j.plugin = h,
                    j.setRatio = b(a, d, f._tween, e),
                    j
                },
                priority: c
            })
        }
        ,
        g.useSVGTransformAttr = !0;
        var Aa, Ba = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","), Ca = Z("transform"), Da = X + "transform", Ea = Z("transformOrigin"), Fa = null !== Z("perspective"), Ga = S.Transform = function() {
            this.perspective = parseFloat(g.defaultTransformPerspective) || 0,
            this.force3D = g.defaultForce3D !== !1 && Fa ? g.defaultForce3D || "auto" : !1
        }
        , Ha = _gsScope.SVGElement, Ia = function(a, b, c) {
            var d, e = O.createElementNS("http://www.w3.org/2000/svg", a), f = /([a-z])([A-Z])/g;
            for (d in c)
                e.setAttributeNS(null, d.replace(f, "$1-$2").toLowerCase(), c[d]);
            return b.appendChild(e),
            e
        }, Ja = O.documentElement || {}, Ka = function() {
            var a, b, c, d = p || /Android/i.test(T) && !_gsScope.chrome;
            return O.createElementNS && !d && (a = Ia("svg", Ja),
            b = Ia("rect", a, {
                width: 100,
                height: 50,
                x: 100
            }),
            c = b.getBoundingClientRect().width,
            b.style[Ea] = "50% 50%",
            b.style[Ca] = "scaleX(0.5)",
            d = c === b.getBoundingClientRect().width && !(n && Fa),
            Ja.removeChild(a)),
            d
        }(), La = function(a, b, c, d, e, f) {
            var h, i, j, k, l, m, n, o, p, q, r, s, t, u, v = a._gsTransform, w = Qa(a, !0);
            v && (t = v.xOrigin,
            u = v.yOrigin),
            (!d || (h = d.split(" ")).length < 2) && (n = a.getBBox(),
            0 === n.x && 0 === n.y && n.width + n.height === 0 && (n = {
                x: parseFloat(a.hasAttribute("x") ? a.getAttribute("x") : a.hasAttribute("cx") ? a.getAttribute("cx") : 0) || 0,
                y: parseFloat(a.hasAttribute("y") ? a.getAttribute("y") : a.hasAttribute("cy") ? a.getAttribute("cy") : 0) || 0,
                width: 0,
                height: 0
            }),
            b = ha(b).split(" "),
            h = [(-1 !== b[0].indexOf("%") ? parseFloat(b[0]) / 100 * n.width : parseFloat(b[0])) + n.x, (-1 !== b[1].indexOf("%") ? parseFloat(b[1]) / 100 * n.height : parseFloat(b[1])) + n.y]),
            c.xOrigin = k = parseFloat(h[0]),
            c.yOrigin = l = parseFloat(h[1]),
            d && w !== Pa && (m = w[0],
            n = w[1],
            o = w[2],
            p = w[3],
            q = w[4],
            r = w[5],
            s = m * p - n * o,
            s && (i = k * (p / s) + l * (-o / s) + (o * r - p * q) / s,
            j = k * (-n / s) + l * (m / s) - (m * r - n * q) / s,
            k = c.xOrigin = h[0] = i,
            l = c.yOrigin = h[1] = j)),
            v && (f && (c.xOffset = v.xOffset,
            c.yOffset = v.yOffset,
            v = c),
            e || e !== !1 && g.defaultSmoothOrigin !== !1 ? (i = k - t,
            j = l - u,
            v.xOffset += i * w[0] + j * w[2] - i,
            v.yOffset += i * w[1] + j * w[3] - j) : v.xOffset = v.yOffset = 0),
            f || a.setAttribute("data-svg-origin", h.join(" "))
        }, Ma = function(a) {
            var b, c = P("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), d = this.parentNode, e = this.nextSibling, f = this.style.cssText;
            if (Ja.appendChild(c),
            c.appendChild(this),
            this.style.display = "block",
            a)
                try {
                    b = this.getBBox(),
                    this._originalGetBBox = this.getBBox,
                    this.getBBox = Ma
                } catch (g) {}
            else
                this._originalGetBBox && (b = this._originalGetBBox());
            return e ? d.insertBefore(this, e) : d.appendChild(this),
            Ja.removeChild(c),
            this.style.cssText = f,
            b
        }, Na = function(a) {
            try {
                return a.getBBox()
            } catch (b) {
                return Ma.call(a, !0)
            }
        }, Oa = function(a) {
            return !(!Ha || !a.getCTM || a.parentNode && !a.ownerSVGElement || !Na(a))
        }, Pa = [1, 0, 0, 1, 0, 0], Qa = function(a, b) {
            var c, d, e, f, g, h, i = a._gsTransform || new Ga, j = 1e5, k = a.style;
            if (Ca ? d = _(a, Da, null, !0) : a.currentStyle && (d = a.currentStyle.filter.match(G),
            d = d && 4 === d.length ? [d[0].substr(4), Number(d[2].substr(4)), Number(d[1].substr(4)), d[3].substr(4), i.x || 0, i.y || 0].join(",") : ""),
            c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d,
            !Ca || !(h = !$(a) || "none" === $(a).display) && a.parentNode || (h && (f = k.display,
            k.display = "block"),
            a.parentNode || (g = 1,
            Ja.appendChild(a)),
            d = _(a, Da, null, !0),
            c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d,
            f ? k.display = f : h && Va(k, "display"),
            g && Ja.removeChild(a)),
            (i.svg || a.getCTM && Oa(a)) && (c && -1 !== (k[Ca] + "").indexOf("matrix") && (d = k[Ca],
            c = 0),
            e = a.getAttribute("transform"),
            c && e && (e = a.transform.baseVal.consolidate().matrix,
            d = "matrix(" + e.a + "," + e.b + "," + e.c + "," + e.d + "," + e.e + "," + e.f + ")",
            c = 0)),
            c)
                return Pa;
            for (e = (d || "").match(s) || [],
            wa = e.length; --wa > -1; )
                f = Number(e[wa]),
                e[wa] = (g = f - (f |= 0)) ? (g * j + (0 > g ? -.5 : .5) | 0) / j + f : f;
            return b && e.length > 6 ? [e[0], e[1], e[4], e[5], e[12], e[13]] : e
        }, Ra = S.getTransform = function(a, c, d, e) {
            if (a._gsTransform && d && !e)
                return a._gsTransform;
            var f, h, i, j, k, l, m = d ? a._gsTransform || new Ga : new Ga, n = m.scaleX < 0, o = 2e-5, p = 1e5, q = Fa ? parseFloat(_(a, Ea, c, !1, "0 0 0").split(" ")[2]) || m.zOrigin || 0 : 0, r = parseFloat(g.defaultTransformPerspective) || 0;
            if (m.svg = !(!a.getCTM || !Oa(a)),
            m.svg && (La(a, _(a, Ea, c, !1, "50% 50%") + "", m, a.getAttribute("data-svg-origin")),
            Aa = g.useSVGTransformAttr || Ka),
            f = Qa(a),
            f !== Pa) {
                if (16 === f.length) {
                    var s, t, u, v, w, x = f[0], y = f[1], z = f[2], A = f[3], B = f[4], C = f[5], D = f[6], E = f[7], F = f[8], G = f[9], H = f[10], I = f[12], J = f[13], K = f[14], M = f[11], N = Math.atan2(D, H);
                    m.zOrigin && (K = -m.zOrigin,
                    I = F * K - f[12],
                    J = G * K - f[13],
                    K = H * K + m.zOrigin - f[14]),
                    m.rotationX = N * L,
                    N && (v = Math.cos(-N),
                    w = Math.sin(-N),
                    s = B * v + F * w,
                    t = C * v + G * w,
                    u = D * v + H * w,
                    F = B * -w + F * v,
                    G = C * -w + G * v,
                    H = D * -w + H * v,
                    M = E * -w + M * v,
                    B = s,
                    C = t,
                    D = u),
                    N = Math.atan2(-z, H),
                    m.rotationY = N * L,
                    N && (v = Math.cos(-N),
                    w = Math.sin(-N),
                    s = x * v - F * w,
                    t = y * v - G * w,
                    u = z * v - H * w,
                    G = y * w + G * v,
                    H = z * w + H * v,
                    M = A * w + M * v,
                    x = s,
                    y = t,
                    z = u),
                    N = Math.atan2(y, x),
                    m.rotation = N * L,
                    N && (v = Math.cos(N),
                    w = Math.sin(N),
                    s = x * v + y * w,
                    t = B * v + C * w,
                    u = F * v + G * w,
                    y = y * v - x * w,
                    C = C * v - B * w,
                    G = G * v - F * w,
                    x = s,
                    B = t,
                    F = u),
                    m.rotationX && Math.abs(m.rotationX) + Math.abs(m.rotation) > 359.9 && (m.rotationX = m.rotation = 0,
                    m.rotationY = 180 - m.rotationY),
                    N = Math.atan2(B, C),
                    m.scaleX = (Math.sqrt(x * x + y * y + z * z) * p + .5 | 0) / p,
                    m.scaleY = (Math.sqrt(C * C + D * D) * p + .5 | 0) / p,
                    m.scaleZ = (Math.sqrt(F * F + G * G + H * H) * p + .5 | 0) / p,
                    x /= m.scaleX,
                    B /= m.scaleY,
                    y /= m.scaleX,
                    C /= m.scaleY,
                    Math.abs(N) > o ? (m.skewX = N * L,
                    B = 0,
                    "simple" !== m.skewType && (m.scaleY *= 1 / Math.cos(N))) : m.skewX = 0,
                    m.perspective = M ? 1 / (0 > M ? -M : M) : 0,
                    m.x = I,
                    m.y = J,
                    m.z = K,
                    m.svg && (m.x -= m.xOrigin - (m.xOrigin * x - m.yOrigin * B),
                    m.y -= m.yOrigin - (m.yOrigin * y - m.xOrigin * C))
                } else if (!Fa || e || !f.length || m.x !== f[4] || m.y !== f[5] || !m.rotationX && !m.rotationY) {
                    var O = f.length >= 6
                      , P = O ? f[0] : 1
                      , Q = f[1] || 0
                      , R = f[2] || 0
                      , S = O ? f[3] : 1;
                    m.x = f[4] || 0,
                    m.y = f[5] || 0,
                    i = Math.sqrt(P * P + Q * Q),
                    j = Math.sqrt(S * S + R * R),
                    k = P || Q ? Math.atan2(Q, P) * L : m.rotation || 0,
                    l = R || S ? Math.atan2(R, S) * L + k : m.skewX || 0,
                    m.scaleX = i,
                    m.scaleY = j,
                    m.rotation = k,
                    m.skewX = l,
                    Fa && (m.rotationX = m.rotationY = m.z = 0,
                    m.perspective = r,
                    m.scaleZ = 1),
                    m.svg && (m.x -= m.xOrigin - (m.xOrigin * P + m.yOrigin * R),
                    m.y -= m.yOrigin - (m.xOrigin * Q + m.yOrigin * S))
                }
                Math.abs(m.skewX) > 90 && Math.abs(m.skewX) < 270 && (n ? (m.scaleX *= -1,
                m.skewX += m.rotation <= 0 ? 180 : -180,
                m.rotation += m.rotation <= 0 ? 180 : -180) : (m.scaleY *= -1,
                m.skewX += m.skewX <= 0 ? 180 : -180)),
                m.zOrigin = q;
                for (h in m)
                    m[h] < o && m[h] > -o && (m[h] = 0)
            }
            return d && (a._gsTransform = m,
            m.svg && (Aa && a.style[Ca] ? b.delayedCall(.001, function() {
                Va(a.style, Ca)
            }) : !Aa && a.getAttribute("transform") && b.delayedCall(.001, function() {
                a.removeAttribute("transform")
            }))),
            m
        }
        , Sa = function(a) {
            var b, c, d = this.data, e = -d.rotation * K, f = e + d.skewX * K, g = 1e5, h = (Math.cos(e) * d.scaleX * g | 0) / g, i = (Math.sin(e) * d.scaleX * g | 0) / g, j = (Math.sin(f) * -d.scaleY * g | 0) / g, k = (Math.cos(f) * d.scaleY * g | 0) / g, l = this.t.style, m = this.t.currentStyle;
            if (m) {
                c = i,
                i = -j,
                j = -c,
                b = m.filter,
                l.filter = "";
                var n, o, q = this.t.offsetWidth, r = this.t.offsetHeight, s = "absolute" !== m.position, t = "progid:DXImageTransform.Microsoft.Matrix(M11=" + h + ", M12=" + i + ", M21=" + j + ", M22=" + k, u = d.x + q * d.xPercent / 100, v = d.y + r * d.yPercent / 100;
                if (null != d.ox && (n = (d.oxp ? q * d.ox * .01 : d.ox) - q / 2,
                o = (d.oyp ? r * d.oy * .01 : d.oy) - r / 2,
                u += n - (n * h + o * i),
                v += o - (n * j + o * k)),
                s ? (n = q / 2,
                o = r / 2,
                t += ", Dx=" + (n - (n * h + o * i) + u) + ", Dy=" + (o - (n * j + o * k) + v) + ")") : t += ", sizingMethod='auto expand')",
                -1 !== b.indexOf("DXImageTransform.Microsoft.Matrix(") ? l.filter = b.replace(H, t) : l.filter = t + " " + b,
                (0 === a || 1 === a) && 1 === h && 0 === i && 0 === j && 1 === k && (s && -1 === t.indexOf("Dx=0, Dy=0") || x.test(b) && 100 !== parseFloat(RegExp.$1) || -1 === b.indexOf(b.indexOf("Alpha")) && l.removeAttribute("filter")),
                !s) {
                    var y, z, A, B = 8 > p ? 1 : -1;
                    for (n = d.ieOffsetX || 0,
                    o = d.ieOffsetY || 0,
                    d.ieOffsetX = Math.round((q - ((0 > h ? -h : h) * q + (0 > i ? -i : i) * r)) / 2 + u),
                    d.ieOffsetY = Math.round((r - ((0 > k ? -k : k) * r + (0 > j ? -j : j) * q)) / 2 + v),
                    wa = 0; 4 > wa; wa++)
                        z = fa[wa],
                        y = m[z],
                        c = -1 !== y.indexOf("px") ? parseFloat(y) : aa(this.t, z, parseFloat(y), y.replace(w, "")) || 0,
                        A = c !== d[z] ? 2 > wa ? -d.ieOffsetX : -d.ieOffsetY : 2 > wa ? n - d.ieOffsetX : o - d.ieOffsetY,
                        l[z] = (d[z] = Math.round(c - A * (0 === wa || 2 === wa ? 1 : B))) + "px"
                }
            }
        }, Ta = S.set3DTransformRatio = S.setTransformRatio = function(a) {
            var b, c, d, e, f, g, h, i, j, k, l, m, o, p, q, r, s, t, u, v, w, x, y, z = this.data, A = this.t.style, B = z.rotation, C = z.rotationX, D = z.rotationY, E = z.scaleX, F = z.scaleY, G = z.scaleZ, H = z.x, I = z.y, J = z.z, L = z.svg, M = z.perspective, N = z.force3D, O = z.skewY, P = z.skewX;
            if (O && (P += O,
            B += O),
            ((1 === a || 0 === a) && "auto" === N && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !N) && !J && !M && !D && !C && 1 === G || Aa && L || !Fa)
                return void (B || P || L ? (B *= K,
                x = P * K,
                y = 1e5,
                c = Math.cos(B) * E,
                f = Math.sin(B) * E,
                d = Math.sin(B - x) * -F,
                g = Math.cos(B - x) * F,
                x && "simple" === z.skewType && (b = Math.tan(x - O * K),
                b = Math.sqrt(1 + b * b),
                d *= b,
                g *= b,
                O && (b = Math.tan(O * K),
                b = Math.sqrt(1 + b * b),
                c *= b,
                f *= b)),
                L && (H += z.xOrigin - (z.xOrigin * c + z.yOrigin * d) + z.xOffset,
                I += z.yOrigin - (z.xOrigin * f + z.yOrigin * g) + z.yOffset,
                Aa && (z.xPercent || z.yPercent) && (q = this.t.getBBox(),
                H += .01 * z.xPercent * q.width,
                I += .01 * z.yPercent * q.height),
                q = 1e-6,
                q > H && H > -q && (H = 0),
                q > I && I > -q && (I = 0)),
                u = (c * y | 0) / y + "," + (f * y | 0) / y + "," + (d * y | 0) / y + "," + (g * y | 0) / y + "," + H + "," + I + ")",
                L && Aa ? this.t.setAttribute("transform", "matrix(" + u) : A[Ca] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + u) : A[Ca] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + E + ",0,0," + F + "," + H + "," + I + ")");
            if (n && (q = 1e-4,
            q > E && E > -q && (E = G = 2e-5),
            q > F && F > -q && (F = G = 2e-5),
            !M || z.z || z.rotationX || z.rotationY || (M = 0)),
            B || P)
                B *= K,
                r = c = Math.cos(B),
                s = f = Math.sin(B),
                P && (B -= P * K,
                r = Math.cos(B),
                s = Math.sin(B),
                "simple" === z.skewType && (b = Math.tan((P - O) * K),
                b = Math.sqrt(1 + b * b),
                r *= b,
                s *= b,
                z.skewY && (b = Math.tan(O * K),
                b = Math.sqrt(1 + b * b),
                c *= b,
                f *= b))),
                d = -s,
                g = r;
            else {
                if (!(D || C || 1 !== G || M || L))
                    return void (A[Ca] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) translate3d(" : "translate3d(") + H + "px," + I + "px," + J + "px)" + (1 !== E || 1 !== F ? " scale(" + E + "," + F + ")" : ""));
                c = g = 1,
                d = f = 0
            }
            k = 1,
            e = h = i = j = l = m = 0,
            o = M ? -1 / M : 0,
            p = z.zOrigin,
            q = 1e-6,
            v = ",",
            w = "0",
            B = D * K,
            B && (r = Math.cos(B),
            s = Math.sin(B),
            i = -s,
            l = o * -s,
            e = c * s,
            h = f * s,
            k = r,
            o *= r,
            c *= r,
            f *= r),
            B = C * K,
            B && (r = Math.cos(B),
            s = Math.sin(B),
            b = d * r + e * s,
            t = g * r + h * s,
            j = k * s,
            m = o * s,
            e = d * -s + e * r,
            h = g * -s + h * r,
            k *= r,
            o *= r,
            d = b,
            g = t),
            1 !== G && (e *= G,
            h *= G,
            k *= G,
            o *= G),
            1 !== F && (d *= F,
            g *= F,
            j *= F,
            m *= F),
            1 !== E && (c *= E,
            f *= E,
            i *= E,
            l *= E),
            (p || L) && (p && (H += e * -p,
            I += h * -p,
            J += k * -p + p),
            L && (H += z.xOrigin - (z.xOrigin * c + z.yOrigin * d) + z.xOffset,
            I += z.yOrigin - (z.xOrigin * f + z.yOrigin * g) + z.yOffset),
            q > H && H > -q && (H = w),
            q > I && I > -q && (I = w),
            q > J && J > -q && (J = 0)),
            u = z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix3d(" : "matrix3d(",
            u += (q > c && c > -q ? w : c) + v + (q > f && f > -q ? w : f) + v + (q > i && i > -q ? w : i),
            u += v + (q > l && l > -q ? w : l) + v + (q > d && d > -q ? w : d) + v + (q > g && g > -q ? w : g),
            C || D || 1 !== G ? (u += v + (q > j && j > -q ? w : j) + v + (q > m && m > -q ? w : m) + v + (q > e && e > -q ? w : e),
            u += v + (q > h && h > -q ? w : h) + v + (q > k && k > -q ? w : k) + v + (q > o && o > -q ? w : o) + v) : u += ",0,0,0,0,1,0,",
            u += H + v + I + v + J + v + (M ? 1 + -J / M : 1) + ")",
            A[Ca] = u
        }
        ;
        j = Ga.prototype,
        j.x = j.y = j.z = j.skewX = j.skewY = j.rotation = j.rotationX = j.rotationY = j.zOrigin = j.xPercent = j.yPercent = j.xOffset = j.yOffset = 0,
        j.scaleX = j.scaleY = j.scaleZ = 1,
        ya("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
            parser: function(a, b, c, d, f, h, i) {
                if (d._lastParsedTransform === i)
                    return f;
                d._lastParsedTransform = i;
                var j, k = i.scale && "function" == typeof i.scale ? i.scale : 0;
                "function" == typeof i[c] && (j = i[c],
                i[c] = b),
                k && (i.scale = k(r, a));
                var l, m, n, o, p, s, t, u, v, w = a._gsTransform, x = a.style, y = 1e-6, z = Ba.length, A = i, B = {}, C = "transformOrigin", D = Ra(a, e, !0, A.parseTransform), E = A.transform && ("function" == typeof A.transform ? A.transform(r, q) : A.transform);
                if (D.skewType = A.skewType || D.skewType || g.defaultSkewType,
                d._transform = D,
                E && "string" == typeof E && Ca)
                    m = Q.style,
                    m[Ca] = E,
                    m.display = "block",
                    m.position = "absolute",
                    O.body.appendChild(Q),
                    l = Ra(Q, null, !1),
                    "simple" === D.skewType && (l.scaleY *= Math.cos(l.skewX * K)),
                    D.svg && (s = D.xOrigin,
                    t = D.yOrigin,
                    l.x -= D.xOffset,
                    l.y -= D.yOffset,
                    (A.transformOrigin || A.svgOrigin) && (E = {},
                    La(a, ha(A.transformOrigin), E, A.svgOrigin, A.smoothOrigin, !0),
                    s = E.xOrigin,
                    t = E.yOrigin,
                    l.x -= E.xOffset - D.xOffset,
                    l.y -= E.yOffset - D.yOffset),
                    (s || t) && (u = Qa(Q, !0),
                    l.x -= s - (s * u[0] + t * u[2]),
                    l.y -= t - (s * u[1] + t * u[3]))),
                    O.body.removeChild(Q),
                    l.perspective || (l.perspective = D.perspective),
                    null != A.xPercent && (l.xPercent = ja(A.xPercent, D.xPercent)),
                    null != A.yPercent && (l.yPercent = ja(A.yPercent, D.yPercent));
                else if ("object" == typeof A) {
                    if (l = {
                        scaleX: ja(null != A.scaleX ? A.scaleX : A.scale, D.scaleX),
                        scaleY: ja(null != A.scaleY ? A.scaleY : A.scale, D.scaleY),
                        scaleZ: ja(A.scaleZ, D.scaleZ),
                        x: ja(A.x, D.x),
                        y: ja(A.y, D.y),
                        z: ja(A.z, D.z),
                        xPercent: ja(A.xPercent, D.xPercent),
                        yPercent: ja(A.yPercent, D.yPercent),
                        perspective: ja(A.transformPerspective, D.perspective)
                    },
                    p = A.directionalRotation,
                    null != p)
                        if ("object" == typeof p)
                            for (m in p)
                                A[m] = p[m];
                        else
                            A.rotation = p;
                    "string" == typeof A.x && -1 !== A.x.indexOf("%") && (l.x = 0,
                    l.xPercent = ja(A.x, D.xPercent)),
                    "string" == typeof A.y && -1 !== A.y.indexOf("%") && (l.y = 0,
                    l.yPercent = ja(A.y, D.yPercent)),
                    l.rotation = ka("rotation"in A ? A.rotation : "shortRotation"in A ? A.shortRotation + "_short" : "rotationZ"in A ? A.rotationZ : D.rotation, D.rotation, "rotation", B),
                    Fa && (l.rotationX = ka("rotationX"in A ? A.rotationX : "shortRotationX"in A ? A.shortRotationX + "_short" : D.rotationX || 0, D.rotationX, "rotationX", B),
                    l.rotationY = ka("rotationY"in A ? A.rotationY : "shortRotationY"in A ? A.shortRotationY + "_short" : D.rotationY || 0, D.rotationY, "rotationY", B)),
                    l.skewX = ka(A.skewX, D.skewX),
                    l.skewY = ka(A.skewY, D.skewY)
                }
                for (Fa && null != A.force3D && (D.force3D = A.force3D,
                o = !0),
                n = D.force3D || D.z || D.rotationX || D.rotationY || l.z || l.rotationX || l.rotationY || l.perspective,
                n || null == A.scale || (l.scaleZ = 1); --z > -1; )
                    v = Ba[z],
                    E = l[v] - D[v],
                    (E > y || -y > E || null != A[v] || null != M[v]) && (o = !0,
                    f = new ta(D,v,D[v],E,f),
                    v in B && (f.e = B[v]),
                    f.xs0 = 0,
                    f.plugin = h,
                    d._overwriteProps.push(f.n));
                return E = A.transformOrigin,
                D.svg && (E || A.svgOrigin) && (s = D.xOffset,
                t = D.yOffset,
                La(a, ha(E), l, A.svgOrigin, A.smoothOrigin),
                f = ua(D, "xOrigin", (w ? D : l).xOrigin, l.xOrigin, f, C),
                f = ua(D, "yOrigin", (w ? D : l).yOrigin, l.yOrigin, f, C),
                (s !== D.xOffset || t !== D.yOffset) && (f = ua(D, "xOffset", w ? s : D.xOffset, D.xOffset, f, C),
                f = ua(D, "yOffset", w ? t : D.yOffset, D.yOffset, f, C)),
                E = "0px 0px"),
                (E || Fa && n && D.zOrigin) && (Ca ? (o = !0,
                v = Ea,
                E = (E || _(a, v, e, !1, "50% 50%")) + "",
                f = new ta(x,v,0,0,f,-1,C),
                f.b = x[v],
                f.plugin = h,
                Fa ? (m = D.zOrigin,
                E = E.split(" "),
                D.zOrigin = (E.length > 2 && (0 === m || "0px" !== E[2]) ? parseFloat(E[2]) : m) || 0,
                f.xs0 = f.e = E[0] + " " + (E[1] || "50%") + " 0px",
                f = new ta(D,"zOrigin",0,0,f,-1,f.n),
                f.b = m,
                f.xs0 = f.e = D.zOrigin) : f.xs0 = f.e = E) : ha(E + "", D)),
                o && (d._transformType = D.svg && Aa || !n && 3 !== this._transformType ? 2 : 3),
                j && (i[c] = j),
                k && (i.scale = k),
                f
            },
            prefix: !0
        }),
        ya("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        }),
        ya("borderRadius", {
            defaultValue: "0px",
            parser: function(a, b, c, f, g, h) {
                b = this.format(b);
                var i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], z = a.style;
                for (q = parseFloat(a.offsetWidth),
                r = parseFloat(a.offsetHeight),
                i = b.split(" "),
                j = 0; j < y.length; j++)
                    this.p.indexOf("border") && (y[j] = Z(y[j])),
                    m = l = _(a, y[j], e, !1, "0px"),
                    -1 !== m.indexOf(" ") && (l = m.split(" "),
                    m = l[0],
                    l = l[1]),
                    n = k = i[j],
                    o = parseFloat(m),
                    t = m.substr((o + "").length),
                    u = "=" === n.charAt(1),
                    u ? (p = parseInt(n.charAt(0) + "1", 10),
                    n = n.substr(2),
                    p *= parseFloat(n),
                    s = n.substr((p + "").length - (0 > p ? 1 : 0)) || "") : (p = parseFloat(n),
                    s = n.substr((p + "").length)),
                    "" === s && (s = d[c] || t),
                    s !== t && (v = aa(a, "borderLeft", o, t),
                    w = aa(a, "borderTop", o, t),
                    "%" === s ? (m = v / q * 100 + "%",
                    l = w / r * 100 + "%") : "em" === s ? (x = aa(a, "borderLeft", 1, "em"),
                    m = v / x + "em",
                    l = w / x + "em") : (m = v + "px",
                    l = w + "px"),
                    u && (n = parseFloat(m) + p + s,
                    k = parseFloat(l) + p + s)),
                    g = va(z, y[j], m + " " + l, n + " " + k, !1, "0px", g);
                return g
            },
            prefix: !0,
            formatter: qa("0px 0px 0px 0px", !1, !0)
        }),
        ya("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
            defaultValue: "0px",
            parser: function(a, b, c, d, f, g) {
                return va(a.style, c, this.format(_(a, c, e, !1, "0px 0px")), this.format(b), !1, "0px", f)
            },
            prefix: !0,
            formatter: qa("0px 0px", !1, !0)
        }),
        ya("backgroundPosition", {
            defaultValue: "0 0",
            parser: function(a, b, c, d, f, g) {
                var h, i, j, k, l, m, n = "background-position", o = e || $(a, null), q = this.format((o ? p ? o.getPropertyValue(n + "-x") + " " + o.getPropertyValue(n + "-y") : o.getPropertyValue(n) : a.currentStyle.backgroundPositionX + " " + a.currentStyle.backgroundPositionY) || "0 0"), r = this.format(b);
                if (-1 !== q.indexOf("%") != (-1 !== r.indexOf("%")) && r.split(",").length < 2 && (m = _(a, "backgroundImage").replace(D, ""),
                m && "none" !== m)) {
                    for (h = q.split(" "),
                    i = r.split(" "),
                    R.setAttribute("src", m),
                    j = 2; --j > -1; )
                        q = h[j],
                        k = -1 !== q.indexOf("%"),
                        k !== (-1 !== i[j].indexOf("%")) && (l = 0 === j ? a.offsetWidth - R.width : a.offsetHeight - R.height,
                        h[j] = k ? parseFloat(q) / 100 * l + "px" : parseFloat(q) / l * 100 + "%");
                    q = h.join(" ")
                }
                return this.parseComplex(a.style, q, r, f, g)
            },
            formatter: ha
        }),
        ya("backgroundSize", {
            defaultValue: "0 0",
            formatter: function(a) {
                return a += "",
                ha(-1 === a.indexOf(" ") ? a + " " + a : a)
            }
        }),
        ya("perspective", {
            defaultValue: "0px",
            prefix: !0
        }),
        ya("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        }),
        ya("transformStyle", {
            prefix: !0
        }),
        ya("backfaceVisibility", {
            prefix: !0
        }),
        ya("userSelect", {
            prefix: !0
        }),
        ya("margin", {
            parser: ra("marginTop,marginRight,marginBottom,marginLeft")
        }),
        ya("padding", {
            parser: ra("paddingTop,paddingRight,paddingBottom,paddingLeft")
        }),
        ya("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function(a, b, c, d, f, g) {
                var h, i, j;
                return 9 > p ? (i = a.currentStyle,
                j = 8 > p ? " " : ",",
                h = "rect(" + i.clipTop + j + i.clipRight + j + i.clipBottom + j + i.clipLeft + ")",
                b = this.format(b).split(",").join(j)) : (h = this.format(_(a, this.p, e, !1, this.dflt)),
                b = this.format(b)),
                this.parseComplex(a.style, h, b, f, g)
            }
        }),
        ya("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        }),
        ya("autoRound,strictUnits", {
            parser: function(a, b, c, d, e) {
                return e
            }
        }),
        ya("border", {
            defaultValue: "0px solid #000",
            parser: function(a, b, c, d, f, g) {
                var h = _(a, "borderTopWidth", e, !1, "0px")
                  , i = this.format(b).split(" ")
                  , j = i[0].replace(w, "");
                return "px" !== j && (h = parseFloat(h) / aa(a, "borderTopWidth", 1, j) + j),
                this.parseComplex(a.style, this.format(h + " " + _(a, "borderTopStyle", e, !1, "solid") + " " + _(a, "borderTopColor", e, !1, "#000")), i.join(" "), f, g)
            },
            color: !0,
            formatter: function(a) {
                var b = a.split(" ");
                return b[0] + " " + (b[1] || "solid") + " " + (a.match(pa) || ["#000"])[0]
            }
        }),
        ya("borderWidth", {
            parser: ra("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
        }),
        ya("float,cssFloat,styleFloat", {
            parser: function(a, b, c, d, e, f) {
                var g = a.style
                  , h = "cssFloat"in g ? "cssFloat" : "styleFloat";
                return new ta(g,h,0,0,e,-1,c,!1,0,g[h],b)
            }
        });
        var Ua = function(a) {
            var b, c = this.t, d = c.filter || _(this.data, "filter") || "", e = this.s + this.c * a | 0;
            100 === e && (-1 === d.indexOf("atrix(") && -1 === d.indexOf("radient(") && -1 === d.indexOf("oader(") ? (c.removeAttribute("filter"),
            b = !_(this.data, "filter")) : (c.filter = d.replace(z, ""),
            b = !0)),
            b || (this.xn1 && (c.filter = d = d || "alpha(opacity=" + e + ")"),
            -1 === d.indexOf("pacity") ? 0 === e && this.xn1 || (c.filter = d + " alpha(opacity=" + e + ")") : c.filter = d.replace(x, "opacity=" + e))
        };
        ya("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function(a, b, c, d, f, g) {
                var h = parseFloat(_(a, "opacity", e, !1, "1"))
                  , i = a.style
                  , j = "autoAlpha" === c;
                return "string" == typeof b && "=" === b.charAt(1) && (b = ("-" === b.charAt(0) ? -1 : 1) * parseFloat(b.substr(2)) + h),
                j && 1 === h && "hidden" === _(a, "visibility", e) && 0 !== b && (h = 0),
                U ? f = new ta(i,"opacity",h,b - h,f) : (f = new ta(i,"opacity",100 * h,100 * (b - h),f),
                f.xn1 = j ? 1 : 0,
                i.zoom = 1,
                f.type = 2,
                f.b = "alpha(opacity=" + f.s + ")",
                f.e = "alpha(opacity=" + (f.s + f.c) + ")",
                f.data = a,
                f.plugin = g,
                f.setRatio = Ua),
                j && (f = new ta(i,"visibility",0,0,f,-1,null,!1,0,0 !== h ? "inherit" : "hidden",0 === b ? "hidden" : "inherit"),
                f.xs0 = "inherit",
                d._overwriteProps.push(f.n),
                d._overwriteProps.push(c)),
                f
            }
        });
        var Va = function(a, b) {
            b && (a.removeProperty ? (("ms" === b.substr(0, 2) || "webkit" === b.substr(0, 6)) && (b = "-" + b),
            a.removeProperty(b.replace(B, "-$1").toLowerCase())) : a.removeAttribute(b))
        }
          , Wa = function(a) {
            if (this.t._gsClassPT = this,
            1 === a || 0 === a) {
                this.t.setAttribute("class", 0 === a ? this.b : this.e);
                for (var b = this.data, c = this.t.style; b; )
                    b.v ? c[b.p] = b.v : Va(c, b.p),
                    b = b._next;
                1 === a && this.t._gsClassPT === this && (this.t._gsClassPT = null)
            } else
                this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
        };
        ya("className", {
            parser: function(a, b, d, f, g, h, i) {
                var j, k, l, m, n, o = a.getAttribute("class") || "", p = a.style.cssText;
                if (g = f._classNamePT = new ta(a,d,0,0,g,2),
                g.setRatio = Wa,
                g.pr = -11,
                c = !0,
                g.b = o,
                k = ca(a, e),
                l = a._gsClassPT) {
                    for (m = {},
                    n = l.data; n; )
                        m[n.p] = 1,
                        n = n._next;
                    l.setRatio(1)
                }
                return a._gsClassPT = g,
                g.e = "=" !== b.charAt(1) ? b : o.replace(new RegExp("(?:\\s|^)" + b.substr(2) + "(?![\\w-])"), "") + ("+" === b.charAt(0) ? " " + b.substr(2) : ""),
                a.setAttribute("class", g.e),
                j = da(a, k, ca(a), i, m),
                a.setAttribute("class", o),
                g.data = j.firstMPT,
                a.style.cssText = p,
                g = g.xfirst = f.parse(a, j.difs, g, h)
            }
        });
        var Xa = function(a) {
            if ((1 === a || 0 === a) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var b, c, d, e, f, g = this.t.style, h = i.transform.parse;
                if ("all" === this.e)
                    g.cssText = "",
                    e = !0;
                else
                    for (b = this.e.split(" ").join("").split(","),
                    d = b.length; --d > -1; )
                        c = b[d],
                        i[c] && (i[c].parse === h ? e = !0 : c = "transformOrigin" === c ? Ea : i[c].p),
                        Va(g, c);
                e && (Va(g, Ca),
                f = this.t._gsTransform,
                f && (f.svg && (this.t.removeAttribute("data-svg-origin"),
                this.t.removeAttribute("transform")),
                delete this.t._gsTransform))
            }
        };
        for (ya("clearProps", {
            parser: function(a, b, d, e, f) {
                return f = new ta(a,d,0,0,f,2),
                f.setRatio = Xa,
                f.e = b,
                f.pr = -10,
                f.data = e._tween,
                c = !0,
                f
            }
        }),
        j = "bezier,throwProps,physicsProps,physics2D".split(","),
        wa = j.length; wa--; )
            za(j[wa]);
        j = g.prototype,
        j._firstPT = j._lastParsedTransform = j._transform = null,
        j._onInitTween = function(a, b, h, j) {
            if (!a.nodeType)
                return !1;
            this._target = q = a,
            this._tween = h,
            this._vars = b,
            r = j,
            k = b.autoRound,
            c = !1,
            d = b.suffixMap || g.suffixMap,
            e = $(a, ""),
            f = this._overwriteProps;
            var n, p, s, t, u, v, w, x, z, A = a.style;
            if (l && "" === A.zIndex && (n = _(a, "zIndex", e),
            ("auto" === n || "" === n) && this._addLazySet(A, "zIndex", 0)),
            "string" == typeof b && (t = A.cssText,
            n = ca(a, e),
            A.cssText = t + ";" + b,
            n = da(a, n, ca(a)).difs,
            !U && y.test(b) && (n.opacity = parseFloat(RegExp.$1)),
            b = n,
            A.cssText = t),
            b.className ? this._firstPT = p = i.className.parse(a, b.className, "className", this, null, null, b) : this._firstPT = p = this.parse(a, b, null),
            this._transformType) {
                for (z = 3 === this._transformType,
                Ca ? m && (l = !0,
                "" === A.zIndex && (w = _(a, "zIndex", e),
                ("auto" === w || "" === w) && this._addLazySet(A, "zIndex", 0)),
                o && this._addLazySet(A, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (z ? "visible" : "hidden"))) : A.zoom = 1,
                s = p; s && s._next; )
                    s = s._next;
                x = new ta(a,"transform",0,0,null,2),
                this._linkCSSP(x, null, s),
                x.setRatio = Ca ? Ta : Sa,
                x.data = this._transform || Ra(a, e, !0),
                x.tween = h,
                x.pr = -1,
                f.pop()
            }
            if (c) {
                for (; p; ) {
                    for (v = p._next,
                    s = t; s && s.pr > p.pr; )
                        s = s._next;
                    (p._prev = s ? s._prev : u) ? p._prev._next = p : t = p,
                    (p._next = s) ? s._prev = p : u = p,
                    p = v
                }
                this._firstPT = t
            }
            return !0
        }
        ,
        j.parse = function(a, b, c, f) {
            var g, h, j, l, m, n, o, p, s, t, u = a.style;
            for (g in b) {
                if (n = b[g],
                "function" == typeof n && (n = n(r, q)),
                h = i[g])
                    c = h.parse(a, n, g, this, c, f, b);
                else {
                    if ("--" === g.substr(0, 2)) {
                        this._tween._propLookup[g] = this._addTween.call(this._tween, a.style, "setProperty", $(a).getPropertyValue(g) + "", n + "", g, !1, g);
                        continue
                    }
                    m = _(a, g, e) + "",
                    s = "string" == typeof n,
                    "color" === g || "fill" === g || "stroke" === g || -1 !== g.indexOf("Color") || s && A.test(n) ? (s || (n = na(n),
                    n = (n.length > 3 ? "rgba(" : "rgb(") + n.join(",") + ")"),
                    c = va(u, g, m, n, !0, "transparent", c, 0, f)) : s && J.test(n) ? c = va(u, g, m, n, !0, null, c, 0, f) : (j = parseFloat(m),
                    o = j || 0 === j ? m.substr((j + "").length) : "",
                    ("" === m || "auto" === m) && ("width" === g || "height" === g ? (j = ga(a, g, e),
                    o = "px") : "left" === g || "top" === g ? (j = ba(a, g, e),
                    o = "px") : (j = "opacity" !== g ? 0 : 1,
                    o = "")),
                    t = s && "=" === n.charAt(1),
                    t ? (l = parseInt(n.charAt(0) + "1", 10),
                    n = n.substr(2),
                    l *= parseFloat(n),
                    p = n.replace(w, "")) : (l = parseFloat(n),
                    p = s ? n.replace(w, "") : ""),
                    "" === p && (p = g in d ? d[g] : o),
                    n = l || 0 === l ? (t ? l + j : l) + p : b[g],
                    o !== p && ("" !== p || "lineHeight" === g) && (l || 0 === l) && j && (j = aa(a, g, j, o),
                    "%" === p ? (j /= aa(a, g, 100, "%") / 100,
                    b.strictUnits !== !0 && (m = j + "%")) : "em" === p || "rem" === p || "vw" === p || "vh" === p ? j /= aa(a, g, 1, p) : "px" !== p && (l = aa(a, g, l, p),
                    p = "px"),
                    t && (l || 0 === l) && (n = l + j + p)),
                    t && (l += j),
                    !j && 0 !== j || !l && 0 !== l ? void 0 !== u[g] && (n || n + "" != "NaN" && null != n) ? (c = new ta(u,g,l || j || 0,0,c,-1,g,!1,0,m,n),
                    c.xs0 = "none" !== n || "display" !== g && -1 === g.indexOf("Style") ? n : m) : W("invalid " + g + " tween value: " + b[g]) : (c = new ta(u,g,j,l - j,c,0,g,k !== !1 && ("px" === p || "zIndex" === g),0,m,n),
                    c.xs0 = p))
                }
                f && c && !c.plugin && (c.plugin = f)
            }
            return c
        }
        ,
        j.setRatio = function(a) {
            var b, c, d, e = this._firstPT, f = 1e-6;
            if (1 !== a || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                if (a || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                    for (; e; ) {
                        if (b = e.c * a + e.s,
                        e.r ? b = Math.round(b) : f > b && b > -f && (b = 0),
                        e.type)
                            if (1 === e.type)
                                if (d = e.l,
                                2 === d)
                                    e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2;
                                else if (3 === d)
                                    e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3;
                                else if (4 === d)
                                    e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4;
                                else if (5 === d)
                                    e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4 + e.xn4 + e.xs5;
                                else {
                                    for (c = e.xs0 + b + e.xs1,
                                    d = 1; d < e.l; d++)
                                        c += e["xn" + d] + e["xs" + (d + 1)];
                                    e.t[e.p] = c
                                }
                            else
                                -1 === e.type ? e.t[e.p] = e.xs0 : e.setRatio && e.setRatio(a);
                        else
                            e.t[e.p] = b + e.xs0;
                        e = e._next
                    }
                else
                    for (; e; )
                        2 !== e.type ? e.t[e.p] = e.b : e.setRatio(a),
                        e = e._next;
            else
                for (; e; ) {
                    if (2 !== e.type)
                        if (e.r && -1 !== e.type)
                            if (b = Math.round(e.s + e.c),
                            e.type) {
                                if (1 === e.type) {
                                    for (d = e.l,
                                    c = e.xs0 + b + e.xs1,
                                    d = 1; d < e.l; d++)
                                        c += e["xn" + d] + e["xs" + (d + 1)];
                                    e.t[e.p] = c
                                }
                            } else
                                e.t[e.p] = b + e.xs0;
                        else
                            e.t[e.p] = e.e;
                    else
                        e.setRatio(a);
                    e = e._next
                }
        }
        ,
        j._enableTransforms = function(a) {
            this._transform = this._transform || Ra(this._target, e, !0),
            this._transformType = this._transform.svg && Aa || !a && 3 !== this._transformType ? 2 : 3
        }
        ;
        var Ya = function(a) {
            this.t[this.p] = this.e,
            this.data._linkCSSP(this, this._next, null, !0)
        };
        j._addLazySet = function(a, b, c) {
            var d = this._firstPT = new ta(a,b,0,0,this._firstPT,2);
            d.e = c,
            d.setRatio = Ya,
            d.data = this
        }
        ,
        j._linkCSSP = function(a, b, c, d) {
            return a && (b && (b._prev = a),
            a._next && (a._next._prev = a._prev),
            a._prev ? a._prev._next = a._next : this._firstPT === a && (this._firstPT = a._next,
            d = !0),
            c ? c._next = a : d || null !== this._firstPT || (this._firstPT = a),
            a._next = b,
            a._prev = c),
            a
        }
        ,
        j._mod = function(a) {
            for (var b = this._firstPT; b; )
                "function" == typeof a[b.p] && a[b.p] === Math.round && (b.r = 1),
                b = b._next
        }
        ,
        j._kill = function(b) {
            var c, d, e, f = b;
            if (b.autoAlpha || b.alpha) {
                f = {};
                for (d in b)
                    f[d] = b[d];
                f.opacity = 1,
                f.autoAlpha && (f.visibility = 1)
            }
            for (b.className && (c = this._classNamePT) && (e = c.xfirst,
            e && e._prev ? this._linkCSSP(e._prev, c._next, e._prev._prev) : e === this._firstPT && (this._firstPT = c._next),
            c._next && this._linkCSSP(c._next, c._next._next, e._prev),
            this._classNamePT = null),
            c = this._firstPT; c; )
                c.plugin && c.plugin !== d && c.plugin._kill && (c.plugin._kill(b),
                d = c.plugin),
                c = c._next;
            return a.prototype._kill.call(this, f)
        }
        ;
        var Za = function(a, b, c) {
            var d, e, f, g;
            if (a.slice)
                for (e = a.length; --e > -1; )
                    Za(a[e], b, c);
            else
                for (d = a.childNodes,
                e = d.length; --e > -1; )
                    f = d[e],
                    g = f.type,
                    f.style && (b.push(ca(f)),
                    c && c.push(f)),
                    1 !== g && 9 !== g && 11 !== g || !f.childNodes.length || Za(f, b, c)
        };
        return g.cascadeTo = function(a, c, d) {
            var e, f, g, h, i = b.to(a, c, d), j = [i], k = [], l = [], m = [], n = b._internals.reservedProps;
            for (a = i._targets || i.target,
            Za(a, k, m),
            i.render(c, !0, !0),
            Za(a, l),
            i.render(0, !0, !0),
            i._enabled(!0),
            e = m.length; --e > -1; )
                if (f = da(m[e], k[e], l[e]),
                f.firstMPT) {
                    f = f.difs;
                    for (g in d)
                        n[g] && (f[g] = d[g]);
                    h = {};
                    for (g in f)
                        h[g] = k[e][g];
                    j.push(b.fromTo(m[e], c, h, f))
                }
            return j
        }
        ,
        a.activate([g]),
        g
    }, !0)
}),
_gsScope._gsDefine && _gsScope._gsQueue.pop()(),
function(a) {
    "use strict";
    var b = function() {
        return (_gsScope.GreenSockGlobals || _gsScope)[a]
    };
    "undefined" != typeof module && module.exports ? (require("../TweenLite.min.js"),
    module.exports = b()) : "function" == typeof define && define.amd && define(["TweenLite"], b)
}("CSSPlugin");
function animateWithRandomNumber(myClass, from, to) {
    TweenLite.fromTo(myClass, Math.floor((Math.random() * 20) + 1), {
        y: from
    }, {
        y: to,
        onComplete: animateWithRandomNumber,
        onCompleteParams: [myClass, from, to],
        ease: Linear.easeNone
    });
}
const itemsDown = [".light4", ".light5", ".light6", ".light7", ".light8", ".light11", ".light12", ".light13", ".light14", ".light15", ".light16"].forEach(e=>animateWithRandomNumber(e, -1080, 1080))
const itemsUp = [".light1", ".light2", ".light3", ".light9", ".light10", ".light17"].forEach(e=>animateWithRandomNumber(e, 1080, -1080));
/*!
 * jQuery blockUI plugin
 * Version 2.70.0-2014.11.23
 * Requires jQuery v1.7 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2013 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */
!function() {
    "use strict";
    function e(p) {
        p.fn._fadeIn = p.fn.fadeIn;
        var b = p.noop || function() {}
          , h = /MSIE/.test(navigator.userAgent)
          , k = /MSIE 6.0/.test(navigator.userAgent) && !/MSIE 8.0/.test(navigator.userAgent)
          , y = (document.documentMode,
        "function" == typeof document.createElement("div").style.setExpression && document.createElement("div").style.setExpression)
          , m = (p.blockUI = function(e) {
            o(window, e)
        }
        ,
        p.unblockUI = function(e) {
            v(window, e)
        }
        ,
        p.growlUI = function(e, t, o, n) {
            var i = p('<div class="growlUI"></div>')
              , s = (e && i.append("<h1>" + e + "</h1>"),
            t && i.append("<h2>" + t + "</h2>"),
            o === undefined && (o = 3e3),
            function(e) {
                p.blockUI({
                    message: i,
                    fadeIn: "undefined" != typeof (e = e || {}).fadeIn ? e.fadeIn : 700,
                    fadeOut: "undefined" != typeof e.fadeOut ? e.fadeOut : 1e3,
                    timeout: "undefined" != typeof e.timeout ? e.timeout : o,
                    centerY: !1,
                    showOverlay: !1,
                    onUnblock: n,
                    css: p.blockUI.defaults.growlCSS
                })
            }
            );
            s(),
            i.css("opacity");
            i.on("mouseover", function() {
                s({
                    fadeIn: 0,
                    timeout: 3e4
                });
                var e = p(".blockMsg");
                e.stop(),
                e.fadeTo(300, 1)
            }).on("mouseout", function() {
                p(".blockMsg").fadeOut(1e3)
            })
        }
        ,
        p.fn.block = function(e) {
            var t;
            return this[0] === window ? (p.blockUI(e),
            this) : (t = p.extend({}, p.blockUI.defaults, e || {}),
            this.each(function() {
                var e = p(this);
                t.ignoreIfBlocked && e.data("blockUI.isBlocked") || e.unblock({
                    fadeOut: 0
                })
            }),
            this.each(function() {
                "static" == p.css(this, "position") && (this.style.position = "relative",
                p(this).data("blockUI.static", !0)),
                this.style.zoom = 1,
                o(this, e)
            }))
        }
        ,
        p.fn.unblock = function(e) {
            return this[0] === window ? (p.unblockUI(e),
            this) : this.each(function() {
                v(this, e)
            })
        }
        ,
        p.blockUI.version = 2.7,
        p.blockUI.defaults = {
            message: "<h1>Please wait...</h1>",
            title: null,
            draggable: !0,
            theme: !1,
            css: {
                padding: 0,
                margin: 0,
                width: "30%",
                top: "40%",
                left: "35%",
                textAlign: "center",
                color: "#000",
                border: "3px solid #aaa",
                backgroundColor: "#fff",
                cursor: "wait"
            },
            themedCSS: {
                width: "30%",
                top: "40%",
                left: "35%"
            },
            overlayCSS: {
                backgroundColor: "#000",
                opacity: .6,
                cursor: "wait"
            },
            cursorReset: "default",
            growlCSS: {
                width: "350px",
                top: "10px",
                left: "",
                right: "10px",
                border: "none",
                padding: "5px",
                opacity: .6,
                cursor: "default",
                color: "#fff",
                backgroundColor: "#000",
                "-webkit-border-radius": "10px",
                "-moz-border-radius": "10px",
                "border-radius": "10px"
            },
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank",
            forceIframe: !1,
            baseZ: 1e3,
            centerX: !0,
            centerY: !0,
            allowBodyStretch: !0,
            bindEvents: !0,
            constrainTabKey: !0,
            fadeIn: 200,
            fadeOut: 400,
            timeout: 0,
            showOverlay: !0,
            focusInput: !0,
            focusableElements: ":input:enabled:visible",
            onBlock: null,
            onUnblock: null,
            onOverlayClick: null,
            quirksmodeOffsetHack: 4,
            blockMsgClass: "blockMsg",
            ignoreIfBlocked: !1
        },
        null)
          , g = [];
        function o(e, o) {
            var n = e == window
              , t = o && o.message !== undefined ? o.message : undefined;
            if (!(o = p.extend({}, p.blockUI.defaults, o || {})).ignoreIfBlocked || !p(e).data("blockUI.isBlocked")) {
                o.overlayCSS = p.extend({}, p.blockUI.defaults.overlayCSS, o.overlayCSS || {}),
                f = p.extend({}, p.blockUI.defaults.css, o.css || {}),
                o.onOverlayClick && (o.overlayCSS.cursor = "pointer"),
                u = p.extend({}, p.blockUI.defaults.themedCSS, o.themedCSS || {}),
                t = t === undefined ? o.message : t,
                n && m && v(window, {
                    fadeOut: 0
                }),
                t && "string" != typeof t && (t.parentNode || t.jquery) && (l = t.jquery ? t[0] : t,
                d = {},
                p(e).data("blockUI.history", d),
                d.el = l,
                d.parent = l.parentNode,
                d.display = l.style.display,
                d.position = l.style.position,
                d.parent && d.parent.removeChild(l)),
                p(e).data("blockUI.onUnblock", o.onUnblock);
                var i, s, l = o.baseZ, d = h || o.forceIframe ? p('<iframe class="blockUI" style="z-index:' + l++ + ';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="' + o.iframeSrc + '"></iframe>') : p('<div class="blockUI" style="display:none"></div>'), a = o.theme ? p('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:' + l++ + ';display:none"></div>') : p('<div class="blockUI blockOverlay" style="z-index:' + l++ + ';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'), c = (o.theme && n ? (c = '<div class="blockUI ' + o.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:' + (l + 10) + ';display:none;position:fixed">',
                o.title && (c += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (o.title || "&nbsp;") + "</div>"),
                c += '<div class="ui-widget-content ui-dialog-content"></div></div>') : o.theme ? (c = '<div class="blockUI ' + o.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:' + (l + 10) + ';display:none;position:absolute">',
                o.title && (c += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (o.title || "&nbsp;") + "</div>"),
                c += '<div class="ui-widget-content ui-dialog-content"></div></div>') : c = n ? '<div class="blockUI ' + o.blockMsgClass + ' blockPage" style="z-index:' + (l + 10) + ';display:none;position:fixed"></div>' : '<div class="blockUI ' + o.blockMsgClass + ' blockElement" style="z-index:' + (l + 10) + ';display:none;position:absolute"></div>',
                l = p(c),
                t && (o.theme ? (l.css(u),
                l.addClass("ui-widget-content")) : l.css(f)),
                o.theme || a.css(o.overlayCSS),
                a.css("position", n ? "fixed" : "absolute"),
                (h || o.forceIframe) && d.css("opacity", 0),
                [d, a, l]), r = p(n ? "body" : e), u = (p.each(c, function() {
                    this.appendTo(r)
                }),
                o.theme && o.draggable && p.fn.draggable && l.draggable({
                    handle: ".ui-dialog-titlebar",
                    cancel: "li"
                }),
                y && (!p.support.boxModel || 0 < p("object,embed", n ? null : e).length));
                if ((k || u) && (n && o.allowBodyStretch && p.support.boxModel && p("html,body").css("height", "100%"),
                !k && p.support.boxModel || n || (f = U(e, "borderTopWidth"),
                u = U(e, "borderLeftWidth"),
                i = f ? "(0 - " + f + ")" : 0,
                s = u ? "(0 - " + u + ")" : 0),
                p.each(c, function(e, t) {
                    t = t[0].style;
                    t.position = "absolute",
                    e < 2 ? (n ? t.setExpression("height", "Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:" + o.quirksmodeOffsetHack + ') + "px"') : t.setExpression("height", 'this.parentNode.offsetHeight + "px"'),
                    n ? t.setExpression("width", 'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"') : t.setExpression("width", 'this.parentNode.offsetWidth + "px"'),
                    s && t.setExpression("left", s),
                    i && t.setExpression("top", i)) : o.centerY ? (n && t.setExpression("top", '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'),
                    t.marginTop = 0) : !o.centerY && n && (e = o.css && o.css.top ? parseInt(o.css.top, 10) : 0,
                    t.setExpression("top", "((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " + e + ') + "px"'))
                })),
                t && ((o.theme ? l.find(".ui-widget-content") : l).append(t),
                (t.jquery || t.nodeType) && p(t).show()),
                (h || o.forceIframe) && o.showOverlay && d.show(),
                o.fadeIn ? (f = o.onBlock || b,
                u = o.showOverlay && !t ? f : b,
                c = t ? f : b,
                o.showOverlay && a._fadeIn(o.fadeIn, u),
                t && l._fadeIn(o.fadeIn, c)) : (o.showOverlay && a.show(),
                t && l.show(),
                o.onBlock && o.onBlock.bind(l)()),
                I(1, e, o),
                n)
                    m = l[0],
                    g = p(o.focusableElements, m),
                    o.focusInput && setTimeout(w, 20);
                else {
                    var d = l[0]
                      , f = o.centerX
                      , u = o.centerY
                      , c = d.parentNode
                      , a = d.style
                      , t = (c.offsetWidth - d.offsetWidth) / 2 - U(c, "borderLeftWidth")
                      , d = (c.offsetHeight - d.offsetHeight) / 2 - U(c, "borderTopWidth");
                    f && (a.left = 0 < t ? t + "px" : "0"),
                    u && (a.top = 0 < d ? d + "px" : "0")
                }
                o.timeout && (l = setTimeout(function() {
                    n ? p.unblockUI(o) : p(e).unblock(o)
                }, o.timeout),
                p(e).data("blockUI.timeout", l))
            }
        }
        function v(e, t) {
            var o, n, i = e == window, s = p(e), l = s.data("blockUI.history"), d = s.data("blockUI.timeout");
            d && (clearTimeout(d),
            s.removeData("blockUI.timeout")),
            t = p.extend({}, p.blockUI.defaults, t || {}),
            I(0, e, t),
            null === t.onUnblock && (t.onUnblock = s.data("blockUI.onUnblock"),
            s.removeData("blockUI.onUnblock")),
            n = i ? p(document.body).children().filter(".blockUI").add("body > .blockUI") : s.find(">.blockUI"),
            t.cursorReset && (1 < n.length && (n[1].style.cursor = t.cursorReset),
            2 < n.length && (n[2].style.cursor = t.cursorReset)),
            i && (m = g = null),
            t.fadeOut ? (o = n.length,
            n.stop().fadeOut(t.fadeOut, function() {
                0 == --o && a(n, l, t, e)
            })) : a(n, l, t, e)
        }
        function a(e, t, o, n) {
            var i = p(n);
            i.data("blockUI.isBlocked") || (e.each(function(e, t) {
                this.parentNode && this.parentNode.removeChild(this)
            }),
            t && t.el && (t.el.style.display = t.display,
            t.el.style.position = t.position,
            t.el.style.cursor = "default",
            t.parent && t.parent.appendChild(t.el),
            i.removeData("blockUI.history")),
            i.data("blockUI.static") && i.css("position", "static"),
            "function" == typeof o.onUnblock && o.onUnblock(n, o),
            t = (e = p(document.body)).width(),
            i = e[0].style.width,
            e.width(t - 1).width(t),
            e[0].style.width = i)
        }
        function I(e, t, o) {
            var n = t == window
              , t = p(t);
            !e && (n && !m || !n && !t.data("blockUI.isBlocked")) || (t.data("blockUI.isBlocked", e),
            n && o.bindEvents && (!e || o.showOverlay) && (t = "mousedown mouseup keydown keypress keyup touchstart touchend touchmove",
            e ? p(document).on(t, o, i) : p(document).off(t, i)))
        }
        function i(e) {
            if ("keydown" === e.type && e.keyCode && 9 == e.keyCode && m && e.data.constrainTabKey) {
                var t = g
                  , o = !e.shiftKey && e.target === t[t.length - 1]
                  , n = e.shiftKey && e.target === t[0];
                if (o || n)
                    return setTimeout(function() {
                        w(n)
                    }, 10),
                    !1
            }
            t = e.data,
            o = p(e.target);
            return o.hasClass("blockOverlay") && t.onOverlayClick && t.onOverlayClick(e),
            0 < o.parents("div." + t.blockMsgClass).length || 0 === o.parents().children().filter("div.blockUI").length
        }
        function w(e) {
            !g || (e = g[!0 === e ? g.length - 1 : 0]) && e.trigger("focus")
        }
        function U(e, t) {
            return parseInt(p.css(e, t), 10) || 0
        }
    }
    "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], e) : e(jQuery)
}();
jQuery(function(d) {
    if ("undefined" == typeof wc_add_to_cart_params)
        return !1;
    var t = function() {
        this.requests = [],
        this.addRequest = this.addRequest.bind(this),
        this.run = this.run.bind(this),
        d(document.body).on("click", ".add_to_cart_button", {
            addToCartHandler: this
        }, this.onAddToCart).on("click", ".remove_from_cart_button", {
            addToCartHandler: this
        }, this.onRemoveFromCart).on("added_to_cart", this.updateButton).on("ajax_request_not_sent.adding_to_cart", this.updateButton).on("added_to_cart removed_from_cart", {
            addToCartHandler: this
        }, this.updateFragments)
    };
    t.prototype.addRequest = function(t) {
        this.requests.push(t),
        1 === this.requests.length && this.run()
    }
    ,
    t.prototype.run = function() {
        var t = this
          , a = t.requests[0].complete;
        t.requests[0].complete = function() {
            "function" == typeof a && a(),
            t.requests.shift(),
            0 < t.requests.length && t.run()
        }
        ,
        d.ajax(this.requests[0])
    }
    ,
    t.prototype.onAddToCart = function(t) {
        var e, a = d(this);
        if (a.is(".ajax_add_to_cart"))
            return !a.attr("data-product_id") || (t.preventDefault(),
            a.removeClass("added"),
            a.addClass("loading"),
            !1 === d(document.body).triggerHandler("should_send_ajax_request.adding_to_cart", [a]) ? (d(document.body).trigger("ajax_request_not_sent.adding_to_cart", [!1, !1, a]),
            !0) : (e = {},
            d.each(a.data(), function(t, a) {
                e[t] = a
            }),
            d.each(a[0].dataset, function(t, a) {
                e[t] = a
            }),
            d(document.body).trigger("adding_to_cart", [a, e]),
            void t.data.addToCartHandler.addRequest({
                type: "POST",
                url: wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%", "add_to_cart"),
                data: e,
                success: function(t) {
                    t && (t.error && t.product_url ? window.location = t.product_url : "yes" === wc_add_to_cart_params.cart_redirect_after_add ? window.location = wc_add_to_cart_params.cart_url : d(document.body).trigger("added_to_cart", [t.fragments, t.cart_hash, a]))
                },
                dataType: "json"
            })))
    }
    ,
    t.prototype.onRemoveFromCart = function(t) {
        var a = d(this)
          , e = a.closest(".woocommerce-mini-cart-item");
        t.preventDefault(),
        e.block({
            message: null,
            overlayCSS: {
                opacity: .6
            }
        }),
        t.data.addToCartHandler.addRequest({
            type: "POST",
            url: wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%", "remove_from_cart"),
            data: {
                cart_item_key: a.data("cart_item_key")
            },
            success: function(t) {
                t && t.fragments ? d(document.body).trigger("removed_from_cart", [t.fragments, t.cart_hash, a]) : window.location = a.attr("href")
            },
            error: function() {
                window.location = a.attr("href")
            },
            dataType: "json"
        })
    }
    ,
    t.prototype.updateButton = function(t, a, e, r) {
        (r = void 0 !== r && r) && (r.removeClass("loading"),
        a && r.addClass("added"),
        a && !wc_add_to_cart_params.is_cart && 0 === r.parent().find(".added_to_cart").length && r.after('<a href="' + wc_add_to_cart_params.cart_url + '" class="added_to_cart wc-forward" title="' + wc_add_to_cart_params.i18n_view_cart + '">' + wc_add_to_cart_params.i18n_view_cart + "</a>"),
        d(document.body).trigger("wc_cart_button_updated", [r]))
    }
    ,
    t.prototype.updateFragments = function(t, a) {
        a && (d.each(a, function(t) {
            d(t).addClass("updating").fadeTo("400", "0.6").block({
                message: null,
                overlayCSS: {
                    opacity: .6
                }
            })
        }),
        d.each(a, function(t, a) {
            d(t).replaceWith(a),
            d(t).stop(!0).css("opacity", "1").unblock()
        }),
        d(document.body).trigger("wc_fragments_loaded"))
    }
    ,
    new t
});
/*!
 * JavaScript Cookie v2.1.4
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
!function(e) {
    var n, o, t = !1;
    "function" == typeof define && define.amd && (define(e),
    t = !0),
    "object" == typeof exports && (module.exports = e(),
    t = !0),
    t || (n = window.Cookies,
    (o = window.Cookies = e()).noConflict = function() {
        return window.Cookies = n,
        o
    }
    )
}(function() {
    function m() {
        for (var e = 0, n = {}; e < arguments.length; e++) {
            var o, t = arguments[e];
            for (o in t)
                n[o] = t[o]
        }
        return n
    }
    return function e(C) {
        function g(e, n, o) {
            var t, r;
            if ("undefined" != typeof document) {
                if (1 < arguments.length) {
                    "number" == typeof (o = m({
                        path: "/"
                    }, g.defaults, o)).expires && ((r = new Date).setMilliseconds(r.getMilliseconds() + 864e5 * o.expires),
                    o.expires = r),
                    o.expires = o.expires ? o.expires.toUTCString() : "";
                    try {
                        t = JSON.stringify(n),
                        /^[\{\[]/.test(t) && (n = t)
                    } catch (l) {}
                    n = C.write ? C.write(n, e) : encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent),
                    e = (e = (e = encodeURIComponent(String(e))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
                    var i, c = "";
                    for (i in o)
                        o[i] && (c += "; " + i,
                        !0 !== o[i] && (c += "=" + o[i]));
                    return document.cookie = e + "=" + n + c
                }
                e || (t = {});
                for (var s = document.cookie ? document.cookie.split("; ") : [], f = /(%[0-9A-Z]{2})+/g, p = 0; p < s.length; p++) {
                    var a = s[p].split("=");
                    '"' === (u = a.slice(1).join("=")).charAt(0) && (u = u.slice(1, -1));
                    try {
                        var d = a[0].replace(f, decodeURIComponent)
                          , u = C.read ? C.read(u, d) : C(u, d) || u.replace(f, decodeURIComponent);
                        if (this.json)
                            try {
                                u = JSON.parse(u)
                            } catch (l) {}
                        if (e === d) {
                            t = u;
                            break
                        }
                        e || (t[d] = u)
                    } catch (l) {}
                }
                return t
            }
        }
        return (g.set = g).get = function(e) {
            return g.call(g, e)
        }
        ,
        g.getJSON = function() {
            return g.apply({
                json: !0
            }, [].slice.call(arguments))
        }
        ,
        g.defaults = {},
        g.remove = function(e, n) {
            g(e, "", m(n, {
                expires: -1
            }))
        }
        ,
        g.withConverter = e,
        g
    }(function() {})
});
jQuery(function(s) {
    s(".woocommerce-ordering").on("change", "select.orderby", function() {
        s(this).closest("form").trigger("submit")
    }),
    s("input.qty:not(.product-quantity input.qty)").each(function() {
        var o = parseFloat(s(this).attr("min"));
        0 <= o && parseFloat(s(this).val()) < o && s(this).val(o)
    });
    var e = "store_notice" + (s(".woocommerce-store-notice").data("noticeId") || "");
    "hidden" === Cookies.get(e) ? s(".woocommerce-store-notice").hide() : s(".woocommerce-store-notice").show(),
    s(".woocommerce-store-notice__dismiss-link").on("click", function(o) {
        Cookies.set(e, "hidden", {
            path: "/"
        }),
        s(".woocommerce-store-notice").hide(),
        o.preventDefault()
    }),
    s(".woocommerce-input-wrapper span.description").length && s(document.body).on("click", function() {
        s(".woocommerce-input-wrapper span.description:visible").prop("aria-hidden", !0).slideUp(250)
    }),
    s(".woocommerce-input-wrapper").on("click", function(o) {
        o.stopPropagation()
    }),
    s(".woocommerce-input-wrapper :input").on("keydown", function(o) {
        var e = s(this).parent().find("span.description");
        if (27 === o.which && e.length && e.is(":visible"))
            return e.prop("aria-hidden", !0).slideUp(250),
            o.preventDefault(),
            !1
    }).on("click focus", function() {
        var o = s(this).parent()
          , e = o.find("span.description");
        o.addClass("currentTarget"),
        s(".woocommerce-input-wrapper:not(.currentTarget) span.description:visible").prop("aria-hidden", !0).slideUp(250),
        e.length && e.is(":hidden") && e.prop("aria-hidden", !1).slideDown(250),
        o.removeClass("currentTarget")
    }),
    s.scroll_to_notices = function(o) {
        o.length && s("html, body").animate({
            scrollTop: o.offset().top - 100
        }, 1e3)
    }
    ,
    s('.woocommerce form .woocommerce-Input[type="password"]').wrap('<span class="password-input"></span>'),
    s(".woocommerce form input").filter(":password").parent("span").addClass("password-input"),
    s(".password-input").append('<span class="show-password-input"></span>'),
    s(".show-password-input").on("click", function() {
        s(this).hasClass("display-password") ? s(this).removeClass("display-password") : s(this).addClass("display-password"),
        s(this).hasClass("display-password") ? s(this).siblings(['input[type="password"]']).prop("type", "text") : s(this).siblings('input[type="text"]').prop("type", "password")
    })
});
(function($) {
    'use strict';
    var elementor = 0;
    if (window.location.href.indexOf('/?elementor-preview=') > -1) {
        elementor = 1;
    }
    $(window).on("load", function() {
        var preload = $('.preloader');
        preload.find('.spinner').fadeOut(function() {
            preload.fadeOut(function() {
                $('.grid-items').isotope('reloadItems').isotope();
            });
        });
    });
    $(function() {
        'use strict';
        var width = $(window).width();
        var height = $(window).height();
        var header_offset_top = 15;
        if (width <= 680) {
            header_offset_top = $('.header').height();
        }
        $(window).on('resize', function() {
            var width = $(window).width();
            if (width <= 680) {
                header_offset_top = $('.header').height();
            }
        });
        var container = $('.container');
        var card_items = $('.card-inner');
        var animation_in = container.data('animation-in');
        var animation_out = container.data('animation-out');
        var menu_items = $('.top-menu li');
        if ($('.top-menu-onepage').length) {
            $('.top-menu').on('click', 'a', function() {
                var width = $(window).width();
                var id = $(this).attr('href');
                if (id == '')
                    id = '#home';
                var card_item = $('#card-' + id.replace('#', ''));
                var h = parseFloat(card_item.offset().top);
                var menu_item = $(this).closest('li');
                if (id != '#home') {
                    window.location.hash = id;
                } else {
                    history.replaceState(null, null, ' ');
                }
                if (width >= 1121) {
                    if (!menu_item.hasClass('current-menu-item')) {
                        menu_items.removeClass('current-menu-item');
                        container.find(card_items).removeClass('animated ' + animation_in);
                        if ($(container).hasClass('opened')) {
                            container.find(card_items).addClass('animated ' + animation_out);
                        }
                        menu_item.addClass('current-menu-item');
                        container.addClass('opened');
                        container.find(card_item).removeClass('animated ' + animation_out);
                        container.find(card_item).addClass('animated ' + animation_in);
                        $(card_items).addClass('hidden');
                        $(card_item).removeClass('hidden');
                        $(card_item).addClass('active');
                        for (var i = 0; i <= 100; i += 100) {
                            setTimeout(function() {
                                $('.grid-items').isotope('reloadItems').isotope();
                            }, i);
                        }
                        skillsDotted_resize();
                    }
                }
                if (width < 1121) {
                    $('body,html').animate({
                        scrollTop: h - header_offset_top
                    }, 800);
                }
                if ($('.elementor-image-gallery').length || $('.elementor-widget-gallery').length || $('.elementor-widget-reviews').length || $('.elementor-widget-slides').length || $('.elementor-widget-media-carousel').length || $('.elementor-widget-testimonial-carousel').length || $('.elementor-widget-image-carousel').length) {
                    $(window).trigger('resize');
                }
                return false;
            });
        }
        $(window).on('resize', function() {
            var width = $(window).width();
            var height = $(window).height();
            if ((width < 1121)) {
                $('.card-inner').removeClass('hidden');
                $('.card-inner').removeClass('fadeOutLeft');
                $('.card-inner').removeClass('rotateOutUpLeft');
                $('.card-inner').removeClass('rollOut');
                $('.card-inner').removeClass('jackOutTheBox');
                $('.card-inner').removeClass('fadeOut');
                $('.card-inner').removeClass('fadeOutUp');
                $('.card-inner').removeClass('animated');
            } else {
                if ($('.top-menu li.current-menu-item a').length) {
                    var current_id = $('.top-menu li.current-menu-item a').attr('href');
                    if (current_id.startsWith('#') == true) {
                        var current_tab = $('#card-' + current_id.replace('#', ''));
                        current_tab.addClass('current-menu-item');
                    }
                }
            }
            setTimeout(skillsDotted_resize, 750);
        });
        function skillsDotted_resize() {
            var skills_dotted = $('.skills-list.dotted .progress');
            var skills_dotted_w = skills_dotted.width();
            if (skills_dotted.length) {
                skills_dotted.find('.percentage .da').css({
                    'width': skills_dotted_w + 1
                });
            }
        }
        var url_hash = location.hash;
        var sectionElem = $('#card-' + url_hash.replace('#', ''));
        if (sectionElem.length && $('.top-menu-onepage').length) {
            menu_items.removeClass('current-menu-item');
            $('.top-menu li a[href="' + url_hash + '"]').parent('li').addClass('current-menu-item');
            if (width >= 1121) {
                container.find(card_items).removeClass('animated ' + animation_in);
                if ($(container).hasClass('opened')) {
                    container.find(card_items).addClass('animated ' + animation_out);
                }
                container.addClass('opened');
                sectionElem.removeClass('animated ' + animation_out);
                sectionElem.addClass('animated ' + animation_in);
                $(card_items).addClass('hidden');
                sectionElem.removeClass('hidden');
                sectionElem.addClass('active');
            } else {
                $('body,html').animate({
                    scrollTop: parseFloat(sectionElem.offset().top) - header_offset_top
                }, 500);
            }
        }
        var skin_dir = $('.mode-switch-btn').data('ui-dir') + '/assets/css/';
        var skin_ui = $('.mode-switch-btn').data('ui');
        var skin = $.cookie('skin');
        if (skin != undefined) {
            if (skin_ui == '1') {
                $('#mode-switch-radio').prop("checked", true);
            }
            if (skin_ui == '0') {
                $('#mode-switch-radio').prop("checked", false);
            }
        }
        if (skin_ui != undefined) {
            if (skin == '1') {
                if ($('#ryancv-dark-css').length) {
                    $("#ryancv-dark-css").attr("href", skin_dir + "dark.css");
                } else {
                    $('head').append('<link rel="stylesheet" id="ryancv-dark-css" type="text/css" href="' + skin_dir + "dark.css" + '">');
                }
                $('#mode-switch-radio').prop("checked", true);
                $('.page_wrap').addClass('theme-style-dark');
                $('body').addClass('body-style-dark');
            }
            if (skin == '0') {
                $("#ryancv-dark-css").attr("href", "");
                $('#mode-switch-radio').prop("checked", false);
                $('.page_wrap').removeClass('theme-style-dark');
                $('body').removeClass('body-style-dark');
            }
        }
        if ($('.page_wrap').hasClass('switcher-ui-disabled')) {
            $.removeCookie('skin', {
                path: '/'
            });
        }
        $('#mode-switch-radio').on('change', function() {
            if (this.checked) {
                $.cookie('skin', '1', {
                    expires: 7,
                    path: '/'
                });
                $('.page_wrap').addClass('theme-style-dark');
                $('body').addClass('body-style-dark');
                $('#mode-switch-radio').prop("checked", true);
                if ($('#ryancv-dark-css').length) {
                    $("#ryancv-dark-css").attr("href", skin_dir + "dark.css");
                } else {
                    $('head').append('<link rel="stylesheet" id="ryancv-dark-css" type="text/css" href="' + skin_dir + "dark.css" + '">');
                }
            } else {
                $.cookie('skin', '0', {
                    expires: 7,
                    path: '/'
                });
                $('.page_wrap').removeClass('theme-style-dark');
                $('body').removeClass('body-style-dark');
                $('#mode-switch-radio').prop("checked", false);
                $("#ryancv-dark-css").attr("href", "");
            }
        });
        $('.lnks').on('click', '.lnk[href*="#"]', function() {
            var lnk_url = $(this).attr('href');
            var lnk_idx = lnk_url.indexOf("#");
            var lnk_hash = lnk_idx != -1 ? lnk_url.substring(lnk_idx + 1) : "";
            if ($('.top-menu a[href="#' + lnk_hash + '"]').length) {
                $('.top-menu a[href="#' + lnk_hash + '"]').trigger('click');
            }
        });
        $('.main-menu li.page_item_has_children').each(function() {
            $(this).find('> a').after('<span class="children_toggle"></span>');
        });
        $('.main-menu').on('click', '.children_toggle', function() {
            var main_menu_item = $(this).closest('.page_item_has_children');
            if (main_menu_item.hasClass('open')) {
                main_menu_item.removeClass('open');
                main_menu_item.find('> ul').slideUp(250);
            } else {
                main_menu_item.addClass('open');
                main_menu_item.find('> ul').slideDown(250);
            }
        });
        if ((width < 1121) && $('.top-menu-onepage').length) {
            $(window).on('scroll', function() {
                var scrollPos = $(window).scrollTop();
                $('.top-menu ul li a').each(function() {
                    var currLink = $(this);
                    var currHref = currLink.attr('href');
                    if (currHref == '')
                        currHref = '#home';
                    if (currHref.charAt(0) == "#") {
                        var refElement = $('#card-' + currHref.replace('#', ''));
                        if (refElement.offset().top - header_offset_top - 2 <= scrollPos) {
                            $('.top-menu ul li').removeClass("current-menu-item");
                            currLink.closest('li').addClass("current-menu-item");
                        }
                    }
                });
            });
        }
        if (width <= 560) {
            $(window).on('scroll', function() {
                if ($(window).scrollTop() > 46) {
                    $('.header').addClass('fixed');
                } else {
                    $('.header').removeClass('fixed');
                }
            })
        }
        $('header, .profile').on('click', '.menu-btn', function() {
            $('.s_overlay').fadeIn();
            $('.content-sidebar').addClass('active');
            $('body,html').addClass('sidebar-open');
            return false;
        });
        $('.content-sidebar, .container').on('click', '.close, .s_overlay', function() {
            $('.s_overlay').fadeOut();
            $('.content-sidebar').removeClass('active');
            $('body,html').removeClass('sidebar-open');
        });
        $('.widget-title').wrapInner('<span class="widget-title-span"></span>');
        $('.lnk-view-menu').on('click', function() {
            var btn_text1 = $(this).find('.text').text();
            var btn_text2 = $(this).find('.text').data('text-open');
            if ($('.profile').hasClass('default-menu-open')) {
                $('.profile').removeClass('default-menu-open');
                $(this).find('.text').data('text-open', btn_text1);
                $(this).find('.text').text(btn_text2);
            } else {
                $('.profile').addClass('default-menu-open');
                $(this).find('.text').data('text-open', btn_text1);
                $(this).find('.text').text(btn_text2);
            }
            return false;
        });
        $('.r-typed').each(function() {
            var $this = $(this)[0];
            var $string = $(this).prev('.typing-title')[0];
            var typed = new Typed($this,{
                stringsElement: $string,
                backDelay: 3500,
                typeSpeed: 80,
                backSpeed: 20,
                loop: true
            });
        });
        var $container_works = $('.works-grid .grid-items');
        $container_works.imagesLoaded(function() {
            $container_works.isotope({
                itemSelector: '.grid-item'
            });
        });
        $('.works-grid .filter-button-group').on('click', '.f_btn', function() {
            var filterValue = $(this).find('input').val();
            $container_works.isotope({
                filter: filterValue
            });
            $('.works-grid .filter-button-group .f_btn').removeClass('active');
            $(this).addClass('active');
        });
        var $container_blog = $('.blog-grid .grid-items');
        $container_blog.imagesLoaded(function() {
            $container_blog.isotope({
                itemSelector: '.grid-item'
            });
        });
        $('.blog-grid .filter-button-group').on('click', '.f_btn', function() {
            var filterValue = $(this).find('input').val();
            $container_blog.isotope({
                filter: filterValue
            });
            $('.blog-grid .filter-button-group .f_btn').removeClass('active');
            $(this).addClass('active');
        });
        if (!$('body').hasClass('elementor-page')) {
            if (/\.(?:jpg|jpeg|gif|png)$/i.test($('.gallery-item:first a').attr('href'))) {
                $('.gallery-item a').magnificPopup({
                    gallery: {
                        enabled: true
                    },
                    type: 'image',
                    closeBtnInside: false,
                    mainClass: 'mfp-fade'
                });
            }
        }
        $('.has-popup-image').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            mainClass: 'popup-box',
            image: {
                verticalFit: true
            }
        });
        $('.has-popup-video').magnificPopup({
            type: 'iframe',
            preloader: false,
            fixedContentPos: false,
            mainClass: 'popup-box',
            callbacks: {
                markupParse: function(template, values, item) {
                    template.find('iframe').attr('allow', 'autoplay');
                }
            }
        });
        $('.has-popup-music').magnificPopup({
            type: 'iframe',
            preloader: false,
            fixedContentPos: false,
            mainClass: 'popup-box',
            callbacks: {
                markupParse: function(template, values, item) {
                    template.find('iframe').attr('allow', 'autoplay');
                }
            }
        });
        $('.has-popup-gallery').on('click', function() {
            var gallery = $(this).attr('href');
            $(gallery).magnificPopup({
                delegate: 'a',
                type: 'image',
                closeOnContentClick: false,
                mainClass: 'mfp-fade',
                removalDelay: 160,
                fixedContentPos: false,
                gallery: {
                    enabled: true
                }
            }).magnificPopup('open');
            return false;
        });
        $("#cform").validate({
            ignore: ".ignore",
            rules: {
                name: {
                    required: true
                },
                message: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                }
            },
            success: "valid",
            submitHandler: function() {
                $.ajax({
                    url: 'mailer/feedback.php',
                    type: 'post',
                    dataType: 'json',
                    data: 'name=' + $("#cform").find('input[name="name"]').val() + '&email=' + $("#cform").find('input[name="email"]').val() + '&message=' + $("#cform").find('textarea[name="message"]').val(),
                    beforeSend: function() {},
                    complete: function() {},
                    success: function(data) {
                        $('#cform').fadeOut();
                        $('.alert-success').delay(1000).fadeIn();
                    }
                });
            }
        });
        $("#comment_form").validate({
            rules: {
                name: {
                    required: true
                },
                message: {
                    required: true
                }
            },
            success: "valid",
            submitHandler: function() {}
        });
        var serv_num = $('.service-items .service-item').length;
        if (serv_num % 2 == 0) {
            $('.service-items .service-item').eq(serv_num - 1).parent().removeClass('border-line-h');
            $('.service-items .service-item').eq(serv_num - 2).parent().removeClass('border-line-h');
        } else {
            $('.service-items .service-item').eq(serv_num - 1).parent().removeClass('border-line-h');
        }
        $('.content .title, .widget-title-span').each(function(index) {
            var title = $(this).text().split(' ');
            if (title.length > 1) {
                var firstWord = title[0];
                var replaceWord = '<span class="first-word">' + firstWord + '</span>';
                var newString = $(this).html().replace(firstWord, replaceWord);
                $(this).html(newString);
            } else {
                $(this).html('<span class="first-letter">' + $(this).html() + '</span>');
            }
        });
        if ($('body').hasClass('home') && $('.top-menu').hasClass('top-menu-onepage')) {
            $('.post-password-form').on('submit', function() {
                $.cookie('submit-post-password', $(this).closest('.card-inner').attr('id'), {
                    expires: 7,
                    path: '/'
                });
                $(this).submit();
            });
            var post_password_cookie = $.cookie('submit-post-password');
            if (post_password_cookie !== undefined) {
                $('a[href="#' + post_password_cookie + '"]').trigger('click');
                $.removeCookie('submit-post-password', {
                    path: '/'
                });
            }
        }
        var is_rtl = false;
        if ($('body.rtl').length) {
            is_rtl = true;
        }
        var prop_loop = $('.revs-carousel .swiper-container').data('swiper-loop');
        var prop_delay = $('.revs-carousel .swiper-container').data('swiper-delay');
        var prop_autoplay = $('.revs-carousel .swiper-container').data('swiper-autoplay');
        var objAutoplay = 0;
        if (prop_autoplay) {
            objAutoplay = {
                disableOnInteraction: false,
                delay: prop_delay
            };
        }
        var revs_slider_init = new Swiper('.revs-carousel .swiper-container',{
            spaceBetween: 0,
            slidesPerView: 1,
            observer: true,
            observeParents: true,
            autoplay: objAutoplay,
            loop: prop_loop,
            pagination: {
                el: '.revs-carousel .swiper-pagination',
                clickable: true
            }
        });
        $('.single-post-text, .post-box').each(function() {
            $(this).find('iframe').wrap('<div class="embed-container"></div>');
        });
        if (!$('.top-menu ul').length) {
            $('.container').addClass('no-sticky-menu');
        }
        function skills() {
            var skills_dotted = $('.skills-list.dotted .progress');
            var skills_dotted_w = skills_dotted.width();
            if (skills_dotted.length) {
                skills_dotted.append('<span class="dg"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>');
                skills_dotted.find('.percentage').append('<span class="da"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>');
                skills_dotted.find('.percentage .da').css({
                    'width': skills_dotted_w
                });
            }
        }
        setTimeout(skills, 1000);
        var skills_circles = $('.skills-list.circles .progress');
        if (skills_circles.length) {
            skills_circles.append('<div class="slice"><div class="bar"></div><div class="fill"></div></div>');
        }
        $('.header .cart-btn .cart-icon').on('click', function() {
            if ($(this).closest('.cart-btn').hasClass('opened')) {
                $(this).closest('.cart-btn').removeClass('opened');
            } else {
                $(this).closest('.cart-btn').addClass('opened');
            }
            return false;
        });
        var slideshow_swiper = new Swiper('.ryan-slideshow',{
            slidesPerView: 1,
            effect: 'fade',
            parallax: true,
            autoplay: true,
            speed: 1400,
        });
        initCursor();
    });
    function initCursor() {
        var mouseX = window.innerWidth / 2
          , mouseY = window.innerHeight / 2;
        var cursor = {
            el: $('.cursor'),
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
            w: 30,
            h: 30,
            update: function() {
                var l = this.x - this.w / 2;
                var t = this.y - this.h / 2;
                this.el.css({
                    'transform': 'translate3d(' + l + 'px,' + t + 'px, 0)'
                });
            }
        }
        $(window).mousemove(function(e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
        $('a, .swiper-pagination, .swiper-button-prev, .swiper-button-next, button, .button, .btn, .lnk').hover(function() {
            $('.cursor').addClass("cursor-zoom");
        }, function() {
            $('.cursor').removeClass("cursor-zoom");
        });
        setInterval(move, 1000 / 60);
        function move() {
            cursor.x = lerp(cursor.x, mouseX, 0.1);
            cursor.y = lerp(cursor.y, mouseY, 0.1);
            cursor.update()
        }
        function lerp(start, end, amt) {
            return (1 - amt) * start + amt * end
        }
    }
}
)(jQuery);
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
!function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? e(require("jquery")) : e(jQuery)
}(function(a) {
    var o = /\+/g;
    function s(e) {
        return x.raw ? e : encodeURIComponent(e)
    }
    function m(e, n) {
        e = x.raw ? e : function(e) {
            0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                return e = decodeURIComponent(e.replace(o, " ")),
                x.json ? JSON.parse(e) : e
            } catch (n) {}
        }(e);
        return "function" == typeof n ? n(e) : e
    }
    var x = a.cookie = function(e, n, o) {
        var i, t;
        if (n !== undefined && "function" != typeof n)
            return "number" == typeof (o = a.extend({}, x.defaults, o)).expires && (i = o.expires,
            (t = o.expires = new Date).setTime(+t + 864e5 * i)),
            document.cookie = [s(e), "=", (t = n,
            s(x.json ? JSON.stringify(t) : String(t))), o.expires ? "; expires=" + o.expires.toUTCString() : "", o.path ? "; path=" + o.path : "", o.domain ? "; domain=" + o.domain : "", o.secure ? "; secure" : ""].join("");
        for (var r = e ? undefined : {}, c = document.cookie ? document.cookie.split("; ") : [], u = 0, f = c.length; u < f; u++) {
            var d = c[u].split("=")
              , p = (p = d.shift(),
            x.raw ? p : decodeURIComponent(p))
              , d = d.join("=");
            if (e && e === p) {
                r = m(d, n);
                break
            }
            e || (d = m(d)) === undefined || (r[p] = d)
        }
        return r
    }
    ;
    x.defaults = {},
    a.removeCookie = function(e, n) {
        return a.cookie(e) !== undefined && (a.cookie(e, "", a.extend({}, n, {
            expires: -1
        })),
        !a.cookie(e))
    }
});
(function($) {
    'use strict';
    $.removeCookie('skin', {
        path: '/'
    });
    var skin = false;
    var skin_ui = false;
    var skin_dir = false;
    var skin_cookie_name = 'default';
    var demo = ['digital', 'developer', 'designer', 'system', 'dark', 'business', 'marketing', 'streamer', 'writer', 'crypto', 'lawyer', 'digital-2', 'cyberpunk', 'rtl'];
    var location_url = window.location.href.replace('https://ryancv.bslthemes.com/', '');
    var location_array = location_url.split('/');
    location_array.forEach(locationEach);
    function locationEach(item) {
        if (demo.includes(item)) {
            skin_cookie_name = item;
        }
    }
    var skin_cookie = skin_cookie_name + '_skin';
    var new_skin_dir = $('.mode-switch-btn').data('ui-dir') + '/assets/css/';
    var new_skin_ui = $('.mode-switch-btn').data('ui');
    var new_skin = $.cookie(skin_cookie);
    if (new_skin != undefined) {
        if (new_skin_ui == '1') {
            $('#mode-switch-radio').prop("checked", true);
        }
        if (new_skin_ui == '0') {
            $('#mode-switch-radio').prop("checked", false);
        }
    }
    if (new_skin != undefined) {
        if (new_skin == '1') {
            if ($('#ryancv-dark-css').length) {
                $("#ryancv-dark-css").attr("href", new_skin_dir + "dark.css");
            } else {
                $('head').append('<link rel="stylesheet" id="ryancv-dark-css" type="text/css" href="' + new_skin_dir + "dark.css" + '">');
            }
            $('#mode-switch-radio').prop("checked", true);
            $('.page_wrap').addClass('theme-style-dark');
            $('body').addClass('body-style-dark');
        }
        if (new_skin == '0') {
            $("#ryancv-dark-css").attr("href", "");
            $('#mode-switch-radio').prop("checked", false);
            console.log('new set false');
            $('.page_wrap').removeClass('theme-style-dark');
            $('body').removeClass('body-style-dark');
        }
    }
    if ($('.page_wrap').hasClass('switcher-ui-disabled')) {
        $.removeCookie(skin_cookie, {
            path: '/'
        });
    }
    $('#mode-switch-radio').on('change', function() {
        if (this.checked) {
            $.cookie(skin_cookie, '1', {
                expires: 7,
                path: '/'
            });
            $('.page_wrap').addClass('theme-style-dark');
            $('body').addClass('body-style-dark');
            $('#mode-switch-radio').prop("checked", true);
            if ($('#ryancv-dark-css').length) {
                $("#ryancv-dark-css").attr("href", new_skin_dir + "dark.css");
            } else {
                $('head').append('<link rel="stylesheet" id="ryancv-dark-css" type="text/css" href="' + new_skin_dir + "dark.css" + '">');
            }
        } else {
            $.cookie(skin_cookie, '0', {
                expires: 7,
                path: '/'
            });
            $('.page_wrap').removeClass('theme-style-dark');
            $('body').removeClass('body-style-dark');
            $('#mode-switch-radio').prop("checked", false);
            $("#ryancv-dark-css").attr("href", "");
        }
        return false;
    });
}
)(jQuery);
(function($) {
    'use strict';
    var isIe = /(trident|msie)/i.test(navigator.userAgent);
    if (isIe && document.getElementById && window.addEventListener) {
        window.addEventListener('hashchange', function() {
            var id = location.hash.substring(1), element;
            if (!(/^[A-z0-9_-]+$/.test(id))) {
                return;
            }
            element = document.getElementById(id);
            if (element) {
                if (!(/^(?:a|select|input|button|textarea)$/i.test(element.tagName))) {
                    element.tabIndex = -1;
                }
                element.focus();
            }
        }, false);
    }
}
)();
;window.Modernizr = function(a, b, c) {
    function z(a) {
        j.cssText = a
    }
    function A(a, b) {
        return z(m.join(a + ";") + (b || ""))
    }
    function B(a, b) {
        return typeof a === b
    }
    function C(a, b) {
        return !!~("" + a).indexOf(b)
    }
    function D(a, b) {
        for (var d in a) {
            var e = a[d];
            if (!C(e, "-") && j[e] !== c)
                return b == "pfx" ? e : !0
        }
        return !1
    }
    function E(a, b, d) {
        for (var e in a) {
            var f = b[a[e]];
            if (f !== c)
                return d === !1 ? a[e] : B(f, "function") ? f.bind(d || b) : f
        }
        return !1
    }
    function F(a, b, c) {
        var d = a.charAt(0).toUpperCase() + a.slice(1)
          , e = (a + " " + o.join(d + " ") + d).split(" ");
        return B(b, "string") || B(b, "undefined") ? D(e, b) : (e = (a + " " + p.join(d + " ") + d).split(" "),
        E(e, b, c))
    }
    var d = "2.6.2", e = {}, f = !0, g = b.documentElement, h = "modernizr", i = b.createElement(h), j = i.style, k, l = {}.toString, m = " -webkit- -moz- -o- -ms- ".split(" "), n = "Webkit Moz O ms", o = n.split(" "), p = n.toLowerCase().split(" "), q = {}, r = {}, s = {}, t = [], u = t.slice, v, w = function(a, c, d, e) {
        var f, i, j, k, l = b.createElement("div"), m = b.body, n = m || b.createElement("body");
        if (parseInt(d, 10))
            while (d--)
                j = b.createElement("div"),
                j.id = e ? e[d] : h + (d + 1),
                l.appendChild(j);
        return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""),
        l.id = h,
        (m ? l : n).innerHTML += f,
        n.appendChild(l),
        m || (n.style.background = "",
        n.style.overflow = "hidden",
        k = g.style.overflow,
        g.style.overflow = "hidden",
        g.appendChild(n)),
        i = c(l, a),
        m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n),
        g.style.overflow = k),
        !!i
    }, x = {}.hasOwnProperty, y;
    !B(x, "undefined") && !B(x.call, "undefined") ? y = function(a, b) {
        return x.call(a, b)
    }
    : y = function(a, b) {
        return b in a && B(a.constructor.prototype[b], "undefined")
    }
    ,
    Function.prototype.bind || (Function.prototype.bind = function(b) {
        var c = this;
        if (typeof c != "function")
            throw new TypeError;
        var d = u.call(arguments, 1)
          , e = function() {
            if (this instanceof e) {
                var a = function() {};
                a.prototype = c.prototype;
                var f = new a
                  , g = c.apply(f, d.concat(u.call(arguments)));
                return Object(g) === g ? g : f
            }
            return c.apply(b, d.concat(u.call(arguments)))
        };
        return e
    }
    ),
    q.touch = function() {
        var c;
        return "ontouchstart"in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : w(["@media (", m.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(a) {
            c = a.offsetTop === 9
        }),
        c
    }
    ,
    q.csstransitions = function() {
        return F("transition")
    }
    ;
    for (var G in q)
        y(q, G) && (v = G.toLowerCase(),
        e[v] = q[G](),
        t.push((e[v] ? "" : "no-") + v));
    return e.addTest = function(a, b) {
        if (typeof a == "object")
            for (var d in a)
                y(a, d) && e.addTest(d, a[d]);
        else {
            a = a.toLowerCase();
            if (e[a] !== c)
                return e;
            b = typeof b == "function" ? b() : b,
            typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a),
            e[a] = b
        }
        return e
    }
    ,
    z(""),
    i = k = null,
    function(a, b) {
        function k(a, b) {
            var c = a.createElement("p")
              , d = a.getElementsByTagName("head")[0] || a.documentElement;
            return c.innerHTML = "x<style>" + b + "</style>",
            d.insertBefore(c.lastChild, d.firstChild)
        }
        function l() {
            var a = r.elements;
            return typeof a == "string" ? a.split(" ") : a
        }
        function m(a) {
            var b = i[a[g]];
            return b || (b = {},
            h++,
            a[g] = h,
            i[h] = b),
            b
        }
        function n(a, c, f) {
            c || (c = b);
            if (j)
                return c.createElement(a);
            f || (f = m(c));
            var g;
            return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a),
            g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g
        }
        function o(a, c) {
            a || (a = b);
            if (j)
                return a.createDocumentFragment();
            c = c || m(a);
            var d = c.frag.cloneNode()
              , e = 0
              , f = l()
              , g = f.length;
            for (; e < g; e++)
                d.createElement(f[e]);
            return d
        }
        function p(a, b) {
            b.cache || (b.cache = {},
            b.createElem = a.createElement,
            b.createFrag = a.createDocumentFragment,
            b.frag = b.createFrag()),
            a.createElement = function(c) {
                return r.shivMethods ? n(c, a, b) : b.createElem(c)
            }
            ,
            a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + l().join().replace(/\w+/g, function(a) {
                return b.createElem(a),
                b.frag.createElement(a),
                'c("' + a + '")'
            }) + ");return n}")(r, b.frag)
        }
        function q(a) {
            a || (a = b);
            var c = m(a);
            return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),
            j || p(a, c),
            a
        }
        var c = a.html5 || {}, d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, f, g = "_html5shiv", h = 0, i = {}, j;
        (function() {
            try {
                var a = b.createElement("a");
                a.innerHTML = "<xyz></xyz>",
                f = "hidden"in a,
                j = a.childNodes.length == 1 || function() {
                    b.createElement("a");
                    var a = b.createDocumentFragment();
                    return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
                }()
            } catch (c) {
                f = !0,
                j = !0
            }
        }
        )();
        var r = {
            elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
            shivCSS: c.shivCSS !== !1,
            supportsUnknownElements: j,
            shivMethods: c.shivMethods !== !1,
            type: "default",
            shivDocument: q,
            createElement: n,
            createDocumentFragment: o
        };
        a.html5 = r,
        q(b)
    }(this, b),
    e._version = d,
    e._prefixes = m,
    e._domPrefixes = p,
    e._cssomPrefixes = o,
    e.testProp = function(a) {
        return D([a])
    }
    ,
    e.testAllProps = F,
    e.testStyles = w,
    e.prefixed = function(a, b, c) {
        return b ? F(a, b, c) : F(a, "pfx")
    }
    ,
    g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + t.join(" ") : ""),
    e
}(this, this.document),
function(a, b, c) {
    function d(a) {
        return "[object Function]" == o.call(a)
    }
    function e(a) {
        return "string" == typeof a
    }
    function f() {}
    function g(a) {
        return !a || "loaded" == a || "complete" == a || "uninitialized" == a
    }
    function h() {
        var a = p.shift();
        q = 1,
        a ? a.t ? m(function() {
            ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
        }, 0) : (a(),
        h()) : q = 0
    }
    function i(a, c, d, e, f, i, j) {
        function k(b) {
            if (!o && g(l.readyState) && (u.r = o = 1,
            !q && h(),
            l.onload = l.onreadystatechange = null,
            b)) {
                "img" != a && m(function() {
                    t.removeChild(l)
                }, 50);
                for (var d in y[c])
                    y[c].hasOwnProperty(d) && y[c][d].onload()
            }
        }
        var j = j || B.errorTimeout
          , l = b.createElement(a)
          , o = 0
          , r = 0
          , u = {
            t: d,
            s: c,
            e: f,
            a: i,
            x: j
        };
        1 === y[c] && (r = 1,
        y[c] = []),
        "object" == a ? l.data = c : (l.src = c,
        l.type = a),
        l.width = l.height = "0",
        l.onerror = l.onload = l.onreadystatechange = function() {
            k.call(this, r)
        }
        ,
        p.splice(e, 0, u),
        "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n),
        m(k, j)) : y[c].push(l))
    }
    function j(a, b, c, d, f) {
        return q = 0,
        b = b || "j",
        e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a),
        1 == p.length && h()),
        this
    }
    function k() {
        var a = B;
        return a.loader = {
            load: j,
            i: 0
        },
        a
    }
    var l = b.documentElement, m = a.setTimeout, n = b.getElementsByTagName("script")[0], o = {}.toString, p = [], q = 0, r = "MozAppearance"in l.style, s = r && !!b.createRange().compareNode, t = s ? l : n.parentNode, l = a.opera && "[object Opera]" == o.call(a.opera), l = !!b.attachEvent && !l, u = r ? "object" : l ? "script" : "img", v = l ? "script" : u, w = Array.isArray || function(a) {
        return "[object Array]" == o.call(a)
    }
    , x = [], y = {}, z = {
        timeout: function(a, b) {
            return b.length && (a.timeout = b[0]),
            a
        }
    }, A, B;
    B = function(a) {
        function b(a) {
            var a = a.split("!"), b = x.length, c = a.pop(), d = a.length, c = {
                url: c,
                origUrl: c,
                prefixes: a
            }, e, f, g;
            for (f = 0; f < d; f++)
                g = a[f].split("="),
                (e = z[g.shift()]) && (c = e(c, g));
            for (f = 0; f < b; f++)
                c = x[f](c);
            return c
        }
        function g(a, e, f, g, h) {
            var i = b(a)
              , j = i.autoCallback;
            i.url.split(".").pop().split("?").shift(),
            i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]),
            i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1,
            f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout),
            (d(e) || d(j)) && f.load(function() {
                k(),
                e && e(i.origUrl, h, g),
                j && j(i.origUrl, h, g),
                y[i.url] = 2
            })))
        }
        function h(a, b) {
            function c(a, c) {
                if (a) {
                    if (e(a))
                        c || (j = function() {
                            var a = [].slice.call(arguments);
                            k.apply(this, a),
                            l()
                        }
                        ),
                        g(a, j, b, 0, h);
                    else if (Object(a) === a)
                        for (n in m = function() {
                            var b = 0, c;
                            for (c in a)
                                a.hasOwnProperty(c) && b++;
                            return b
                        }(),
                        a)
                            a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
                                var a = [].slice.call(arguments);
                                k.apply(this, a),
                                l()
                            }
                            : j[n] = function(a) {
                                return function() {
                                    var b = [].slice.call(arguments);
                                    a && a.apply(this, b),
                                    l()
                                }
                            }(k[n])),
                            g(a[n], j, b, n, h))
                } else
                    !c && l()
            }
            var h = !!a.test, i = a.load || a.both, j = a.callback || f, k = j, l = a.complete || f, m, n;
            c(h ? a.yep : a.nope, !!i),
            i && c(i)
        }
        var i, j, l = this.yepnope.loader;
        if (e(a))
            g(a, 0, l, 0);
        else if (w(a))
            for (i = 0; i < a.length; i++)
                j = a[i],
                e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
        else
            Object(a) === a && h(a, l)
    }
    ,
    B.addPrefix = function(a, b) {
        z[a] = b
    }
    ,
    B.addFilter = function(a) {
        x.push(a)
    }
    ,
    B.errorTimeout = 1e4,
    null == b.readyState && b.addEventListener && (b.readyState = "loading",
    b.addEventListener("DOMContentLoaded", A = function() {
        b.removeEventListener("DOMContentLoaded", A, 0),
        b.readyState = "complete"
    }
    , 0)),
    a.yepnope = k(),
    a.yepnope.executeStack = h,
    a.yepnope.injectJs = function(a, c, d, e, i, j) {
        var k = b.createElement("script"), l, o, e = e || B.errorTimeout;
        k.src = a;
        for (o in d)
            k.setAttribute(o, d[o]);
        c = j ? h : c || f,
        k.onreadystatechange = k.onload = function() {
            !l && g(k.readyState) && (l = 1,
            c(),
            k.onload = k.onreadystatechange = null)
        }
        ,
        m(function() {
            l || (l = 1,
            c(1))
        }, e),
        i ? k.onload() : n.parentNode.insertBefore(k, n)
    }
    ,
    a.yepnope.injectCss = function(a, c, d, e, g, i) {
        var e = b.createElement("link"), j, c = i ? h : c || f;
        e.href = a,
        e.rel = "stylesheet",
        e.type = "text/css";
        for (j in d)
            e.setAttribute(j, d[j]);
        g || (n.parentNode.insertBefore(e, n),
        m(c, 0))
    }
}(this, document),
Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0))
}
;
;/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        factory(require('jquery'));
    } else {
        factory(window.jQuery || window.Zepto);
    }
}(function($) {
    var CLOSE_EVENT = 'Close'
      , BEFORE_CLOSE_EVENT = 'BeforeClose'
      , AFTER_CLOSE_EVENT = 'AfterClose'
      , BEFORE_APPEND_EVENT = 'BeforeAppend'
      , MARKUP_PARSE_EVENT = 'MarkupParse'
      , OPEN_EVENT = 'Open'
      , CHANGE_EVENT = 'Change'
      , NS = 'mfp'
      , EVENT_NS = '.' + NS
      , READY_CLASS = 'mfp-ready'
      , REMOVING_CLASS = 'mfp-removing'
      , PREVENT_CLOSE_CLASS = 'mfp-prevent-close';
    var mfp, MagnificPopup = function() {}, _isJQ = !!(window.jQuery), _prevStatus, _window = $(window), _document, _prevContentType, _wrapClasses, _currPopupType;
    var _mfpOn = function(name, f) {
        mfp.ev.on(NS + name + EVENT_NS, f);
    }
      , _getEl = function(className, appendTo, html, raw) {
        var el = document.createElement('div');
        el.className = 'mfp-' + className;
        if (html) {
            el.innerHTML = html;
        }
        if (!raw) {
            el = $(el);
            if (appendTo) {
                el.appendTo(appendTo);
            }
        } else if (appendTo) {
            appendTo.appendChild(el);
        }
        return el;
    }
      , _mfpTrigger = function(e, data) {
        mfp.ev.triggerHandler(NS + e, data);
        if (mfp.st.callbacks) {
            e = e.charAt(0).toLowerCase() + e.slice(1);
            if (mfp.st.callbacks[e]) {
                mfp.st.callbacks[e].apply(mfp, $.isArray(data) ? data : [data]);
            }
        }
    }
      , _getCloseBtn = function(type) {
        if (type !== _currPopupType || !mfp.currTemplate.closeBtn) {
            mfp.currTemplate.closeBtn = $(mfp.st.closeMarkup.replace('%title%', mfp.st.tClose));
            _currPopupType = type;
        }
        return mfp.currTemplate.closeBtn;
    }
      , _checkInstance = function() {
        if (!$.magnificPopup.instance) {
            mfp = new MagnificPopup();
            mfp.init();
            $.magnificPopup.instance = mfp;
        }
    }
      , supportsTransitions = function() {
        var s = document.createElement('p').style
          , v = ['ms', 'O', 'Moz', 'Webkit'];
        if (s['transition'] !== undefined) {
            return true;
        }
        while (v.length) {
            if (v.pop() + 'Transition'in s) {
                return true;
            }
        }
        return false;
    };
    MagnificPopup.prototype = {
        constructor: MagnificPopup,
        init: function() {
            var appVersion = navigator.appVersion;
            mfp.isLowIE = mfp.isIE8 = document.all && !document.addEventListener;
            mfp.isAndroid = (/android/gi).test(appVersion);
            mfp.isIOS = (/iphone|ipad|ipod/gi).test(appVersion);
            mfp.supportsTransition = supportsTransitions();
            mfp.probablyMobile = (mfp.isAndroid || mfp.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent));
            _document = $(document);
            mfp.popupsCache = {};
        },
        open: function(data) {
            var i;
            if (data.isObj === false) {
                mfp.items = data.items.toArray();
                mfp.index = 0;
                var items = data.items, item;
                for (i = 0; i < items.length; i++) {
                    item = items[i];
                    if (item.parsed) {
                        item = item.el[0];
                    }
                    if (item === data.el[0]) {
                        mfp.index = i;
                        break;
                    }
                }
            } else {
                mfp.items = $.isArray(data.items) ? data.items : [data.items];
                mfp.index = data.index || 0;
            }
            if (mfp.isOpen) {
                mfp.updateItemHTML();
                return;
            }
            mfp.types = [];
            _wrapClasses = '';
            if (data.mainEl && data.mainEl.length) {
                mfp.ev = data.mainEl.eq(0);
            } else {
                mfp.ev = _document;
            }
            if (data.key) {
                if (!mfp.popupsCache[data.key]) {
                    mfp.popupsCache[data.key] = {};
                }
                mfp.currTemplate = mfp.popupsCache[data.key];
            } else {
                mfp.currTemplate = {};
            }
            mfp.st = $.extend(true, {}, $.magnificPopup.defaults, data);
            mfp.fixedContentPos = mfp.st.fixedContentPos === 'auto' ? !mfp.probablyMobile : mfp.st.fixedContentPos;
            if (mfp.st.modal) {
                mfp.st.closeOnContentClick = false;
                mfp.st.closeOnBgClick = false;
                mfp.st.showCloseBtn = false;
                mfp.st.enableEscapeKey = false;
            }
            if (!mfp.bgOverlay) {
                mfp.bgOverlay = _getEl('bg').on('click' + EVENT_NS, function() {
                    mfp.close();
                });
                mfp.wrap = _getEl('wrap').attr('tabindex', -1).on('click' + EVENT_NS, function(e) {
                    if (mfp._checkIfClose(e.target)) {
                        mfp.close();
                    }
                });
                mfp.container = _getEl('container', mfp.wrap);
            }
            mfp.contentContainer = _getEl('content');
            if (mfp.st.preloader) {
                mfp.preloader = _getEl('preloader', mfp.container, mfp.st.tLoading);
            }
            var modules = $.magnificPopup.modules;
            for (i = 0; i < modules.length; i++) {
                var n = modules[i];
                n = n.charAt(0).toUpperCase() + n.slice(1);
                mfp['init' + n].call(mfp);
            }
            _mfpTrigger('BeforeOpen');
            if (mfp.st.showCloseBtn) {
                if (!mfp.st.closeBtnInside) {
                    mfp.wrap.append(_getCloseBtn());
                } else {
                    _mfpOn(MARKUP_PARSE_EVENT, function(e, template, values, item) {
                        values.close_replaceWith = _getCloseBtn(item.type);
                    });
                    _wrapClasses += ' mfp-close-btn-in';
                }
            }
            if (mfp.st.alignTop) {
                _wrapClasses += ' mfp-align-top';
            }
            if (mfp.fixedContentPos) {
                mfp.wrap.css({
                    overflow: mfp.st.overflowY,
                    overflowX: 'hidden',
                    overflowY: mfp.st.overflowY
                });
            } else {
                mfp.wrap.css({
                    top: _window.scrollTop(),
                    position: 'absolute'
                });
            }
            if (mfp.st.fixedBgPos === false || (mfp.st.fixedBgPos === 'auto' && !mfp.fixedContentPos)) {
                mfp.bgOverlay.css({
                    height: _document.height(),
                    position: 'absolute'
                });
            }
            if (mfp.st.enableEscapeKey) {
                _document.on('keyup' + EVENT_NS, function(e) {
                    if (e.keyCode === 27) {
                        mfp.close();
                    }
                });
            }
            _window.on('resize' + EVENT_NS, function() {
                mfp.updateSize();
            });
            if (!mfp.st.closeOnContentClick) {
                _wrapClasses += ' mfp-auto-cursor';
            }
            if (_wrapClasses)
                mfp.wrap.addClass(_wrapClasses);
            var windowHeight = mfp.wH = _window.height();
            var windowStyles = {};
            if (mfp.fixedContentPos) {
                if (mfp._hasScrollBar(windowHeight)) {
                    var s = mfp._getScrollbarSize();
                    if (s) {
                        windowStyles.marginRight = s;
                    }
                }
            }
            if (mfp.fixedContentPos) {
                if (!mfp.isIE7) {
                    windowStyles.overflow = 'hidden';
                } else {
                    $('body, html').css('overflow', 'hidden');
                }
            }
            var classesToadd = mfp.st.mainClass;
            if (mfp.isIE7) {
                classesToadd += ' mfp-ie7';
            }
            if (classesToadd) {
                mfp._addClassToMFP(classesToadd);
            }
            mfp.updateItemHTML();
            _mfpTrigger('BuildControls');
            $('html').css(windowStyles);
            mfp.bgOverlay.add(mfp.wrap).prependTo(mfp.st.prependTo || $(document.body));
            mfp._lastFocusedEl = document.activeElement;
            setTimeout(function() {
                if (mfp.content) {
                    mfp._addClassToMFP(READY_CLASS);
                    mfp._setFocus();
                } else {
                    mfp.bgOverlay.addClass(READY_CLASS);
                }
                _document.on('focusin' + EVENT_NS, mfp._onFocusIn);
            }, 16);
            mfp.isOpen = true;
            mfp.updateSize(windowHeight);
            _mfpTrigger(OPEN_EVENT);
            return data;
        },
        close: function() {
            if (!mfp.isOpen)
                return;
            _mfpTrigger(BEFORE_CLOSE_EVENT);
            mfp.isOpen = false;
            if (mfp.st.removalDelay && !mfp.isLowIE && mfp.supportsTransition) {
                mfp._addClassToMFP(REMOVING_CLASS);
                setTimeout(function() {
                    mfp._close();
                }, mfp.st.removalDelay);
            } else {
                mfp._close();
            }
        },
        _close: function() {
            _mfpTrigger(CLOSE_EVENT);
            var classesToRemove = REMOVING_CLASS + ' ' + READY_CLASS + ' ';
            mfp.bgOverlay.detach();
            mfp.wrap.detach();
            mfp.container.empty();
            if (mfp.st.mainClass) {
                classesToRemove += mfp.st.mainClass + ' ';
            }
            mfp._removeClassFromMFP(classesToRemove);
            if (mfp.fixedContentPos) {
                var windowStyles = {
                    marginRight: ''
                };
                if (mfp.isIE7) {
                    $('body, html').css('overflow', '');
                } else {
                    windowStyles.overflow = '';
                }
                $('html').css(windowStyles);
            }
            _document.off('keyup' + EVENT_NS + ' focusin' + EVENT_NS);
            mfp.ev.off(EVENT_NS);
            mfp.wrap.attr('class', 'mfp-wrap').removeAttr('style');
            mfp.bgOverlay.attr('class', 'mfp-bg');
            mfp.container.attr('class', 'mfp-container');
            if (mfp.st.showCloseBtn && (!mfp.st.closeBtnInside || mfp.currTemplate[mfp.currItem.type] === true)) {
                if (mfp.currTemplate.closeBtn)
                    mfp.currTemplate.closeBtn.detach();
            }
            if (mfp.st.autoFocusLast && mfp._lastFocusedEl) {
                $(mfp._lastFocusedEl).focus();
            }
            mfp.currItem = null;
            mfp.content = null;
            mfp.currTemplate = null;
            mfp.prevHeight = 0;
            _mfpTrigger(AFTER_CLOSE_EVENT);
        },
        updateSize: function(winHeight) {
            if (mfp.isIOS) {
                var zoomLevel = document.documentElement.clientWidth / window.innerWidth;
                var height = window.innerHeight * zoomLevel;
                mfp.wrap.css('height', height);
                mfp.wH = height;
            } else {
                mfp.wH = winHeight || _window.height();
            }
            if (!mfp.fixedContentPos) {
                mfp.wrap.css('height', mfp.wH);
            }
            _mfpTrigger('Resize');
        },
        updateItemHTML: function() {
            var item = mfp.items[mfp.index];
            mfp.contentContainer.detach();
            if (mfp.content)
                mfp.content.detach();
            if (!item.parsed) {
                item = mfp.parseEl(mfp.index);
            }
            var type = item.type;
            _mfpTrigger('BeforeChange', [mfp.currItem ? mfp.currItem.type : '', type]);
            mfp.currItem = item;
            if (!mfp.currTemplate[type]) {
                var markup = mfp.st[type] ? mfp.st[type].markup : false;
                _mfpTrigger('FirstMarkupParse', markup);
                if (markup) {
                    mfp.currTemplate[type] = $(markup);
                } else {
                    mfp.currTemplate[type] = true;
                }
            }
            if (_prevContentType && _prevContentType !== item.type) {
                mfp.container.removeClass('mfp-' + _prevContentType + '-holder');
            }
            var newContent = mfp['get' + type.charAt(0).toUpperCase() + type.slice(1)](item, mfp.currTemplate[type]);
            mfp.appendContent(newContent, type);
            item.preloaded = true;
            _mfpTrigger(CHANGE_EVENT, item);
            _prevContentType = item.type;
            mfp.container.prepend(mfp.contentContainer);
            _mfpTrigger('AfterChange');
        },
        appendContent: function(newContent, type) {
            mfp.content = newContent;
            if (newContent) {
                if (mfp.st.showCloseBtn && mfp.st.closeBtnInside && mfp.currTemplate[type] === true) {
                    if (!mfp.content.find('.mfp-close').length) {
                        mfp.content.append(_getCloseBtn());
                    }
                } else {
                    mfp.content = newContent;
                }
            } else {
                mfp.content = '';
            }
            _mfpTrigger(BEFORE_APPEND_EVENT);
            mfp.container.addClass('mfp-' + type + '-holder');
            mfp.contentContainer.append(mfp.content);
        },
        parseEl: function(index) {
            var item = mfp.items[index], type;
            if (item.tagName) {
                item = {
                    el: $(item)
                };
            } else {
                type = item.type;
                item = {
                    data: item,
                    src: item.src
                };
            }
            if (item.el) {
                var types = mfp.types;
                for (var i = 0; i < types.length; i++) {
                    if (item.el.hasClass('mfp-' + types[i])) {
                        type = types[i];
                        break;
                    }
                }
                item.src = item.el.attr('data-mfp-src');
                if (!item.src) {
                    item.src = item.el.attr('href');
                }
            }
            item.type = type || mfp.st.type || 'inline';
            item.index = index;
            item.parsed = true;
            mfp.items[index] = item;
            _mfpTrigger('ElementParse', item);
            return mfp.items[index];
        },
        addGroup: function(el, options) {
            var eHandler = function(e) {
                e.mfpEl = this;
                mfp._openClick(e, el, options);
            };
            if (!options) {
                options = {};
            }
            var eName = 'click.magnificPopup';
            options.mainEl = el;
            if (options.items) {
                options.isObj = true;
                el.off(eName).on(eName, eHandler);
            } else {
                options.isObj = false;
                if (options.delegate) {
                    el.off(eName).on(eName, options.delegate, eHandler);
                } else {
                    options.items = el;
                    el.off(eName).on(eName, eHandler);
                }
            }
        },
        _openClick: function(e, el, options) {
            var midClick = options.midClick !== undefined ? options.midClick : $.magnificPopup.defaults.midClick;
            if (!midClick && (e.which === 2 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey)) {
                return;
            }
            var disableOn = options.disableOn !== undefined ? options.disableOn : $.magnificPopup.defaults.disableOn;
            if (disableOn) {
                if ($.isFunction(disableOn)) {
                    if (!disableOn.call(mfp)) {
                        return true;
                    }
                } else {
                    if (_window.width() < disableOn) {
                        return true;
                    }
                }
            }
            if (e.type) {
                e.preventDefault();
                if (mfp.isOpen) {
                    e.stopPropagation();
                }
            }
            options.el = $(e.mfpEl);
            if (options.delegate) {
                options.items = el.find(options.delegate);
            }
            mfp.open(options);
        },
        updateStatus: function(status, text) {
            if (mfp.preloader) {
                if (_prevStatus !== status) {
                    mfp.container.removeClass('mfp-s-' + _prevStatus);
                }
                if (!text && status === 'loading') {
                    text = mfp.st.tLoading;
                }
                var data = {
                    status: status,
                    text: text
                };
                _mfpTrigger('UpdateStatus', data);
                status = data.status;
                text = data.text;
                mfp.preloader.html(text);
                mfp.preloader.find('a').on('click', function(e) {
                    e.stopImmediatePropagation();
                });
                mfp.container.addClass('mfp-s-' + status);
                _prevStatus = status;
            }
        },
        _checkIfClose: function(target) {
            if ($(target).hasClass(PREVENT_CLOSE_CLASS)) {
                return;
            }
            var closeOnContent = mfp.st.closeOnContentClick;
            var closeOnBg = mfp.st.closeOnBgClick;
            if (closeOnContent && closeOnBg) {
                return true;
            } else {
                if (!mfp.content || $(target).hasClass('mfp-close') || (mfp.preloader && target === mfp.preloader[0])) {
                    return true;
                }
                if ((target !== mfp.content[0] && !$.contains(mfp.content[0], target))) {
                    if (closeOnBg) {
                        if ($.contains(document, target)) {
                            return true;
                        }
                    }
                } else if (closeOnContent) {
                    return true;
                }
            }
            return false;
        },
        _addClassToMFP: function(cName) {
            mfp.bgOverlay.addClass(cName);
            mfp.wrap.addClass(cName);
        },
        _removeClassFromMFP: function(cName) {
            this.bgOverlay.removeClass(cName);
            mfp.wrap.removeClass(cName);
        },
        _hasScrollBar: function(winHeight) {
            return ((mfp.isIE7 ? _document.height() : document.body.scrollHeight) > (winHeight || _window.height()));
        },
        _setFocus: function() {
            (mfp.st.focus ? mfp.content.find(mfp.st.focus).eq(0) : mfp.wrap).focus();
        },
        _onFocusIn: function(e) {
            if (e.target !== mfp.wrap[0] && !$.contains(mfp.wrap[0], e.target)) {
                mfp._setFocus();
                return false;
            }
        },
        _parseMarkup: function(template, values, item) {
            var arr;
            if (item.data) {
                values = $.extend(item.data, values);
            }
            _mfpTrigger(MARKUP_PARSE_EVENT, [template, values, item]);
            $.each(values, function(key, value) {
                if (value === undefined || value === false) {
                    return true;
                }
                arr = key.split('_');
                if (arr.length > 1) {
                    var el = template.find(EVENT_NS + '-' + arr[0]);
                    if (el.length > 0) {
                        var attr = arr[1];
                        if (attr === 'replaceWith') {
                            if (el[0] !== value[0]) {
                                el.replaceWith(value);
                            }
                        } else if (attr === 'img') {
                            if (el.is('img')) {
                                el.attr('src', value);
                            } else {
                                el.replaceWith($('<img>').attr('src', value).attr('class', el.attr('class')));
                            }
                        } else {
                            el.attr(arr[1], value);
                        }
                    }
                } else {
                    template.find(EVENT_NS + '-' + key).html(value);
                }
            });
        },
        _getScrollbarSize: function() {
            if (mfp.scrollbarSize === undefined) {
                var scrollDiv = document.createElement("div");
                scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
                document.body.appendChild(scrollDiv);
                mfp.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
                document.body.removeChild(scrollDiv);
            }
            return mfp.scrollbarSize;
        }
    };
    $.magnificPopup = {
        instance: null,
        proto: MagnificPopup.prototype,
        modules: [],
        open: function(options, index) {
            _checkInstance();
            if (!options) {
                options = {};
            } else {
                options = $.extend(true, {}, options);
            }
            options.isObj = true;
            options.index = index || 0;
            return this.instance.open(options);
        },
        close: function() {
            return $.magnificPopup.instance && $.magnificPopup.instance.close();
        },
        registerModule: function(name, module) {
            if (module.options) {
                $.magnificPopup.defaults[name] = module.options;
            }
            $.extend(this.proto, module.proto);
            this.modules.push(name);
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: false,
            mainClass: '',
            preloader: true,
            focus: '',
            closeOnContentClick: false,
            closeOnBgClick: true,
            closeBtnInside: true,
            showCloseBtn: true,
            enableEscapeKey: true,
            modal: false,
            alignTop: false,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: 'auto',
            fixedBgPos: 'auto',
            overflowY: 'auto',
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: 'Close (Esc)',
            tLoading: 'Loading...',
            autoFocusLast: true
        }
    };
    $.fn.magnificPopup = function(options) {
        _checkInstance();
        var jqEl = $(this);
        if (typeof options === "string") {
            if (options === 'open') {
                var items, itemOpts = _isJQ ? jqEl.data('magnificPopup') : jqEl[0].magnificPopup, index = parseInt(arguments[1], 10) || 0;
                if (itemOpts.items) {
                    items = itemOpts.items[index];
                } else {
                    items = jqEl;
                    if (itemOpts.delegate) {
                        items = items.find(itemOpts.delegate);
                    }
                    items = items.eq(index);
                }
                mfp._openClick({
                    mfpEl: items
                }, jqEl, itemOpts);
            } else {
                if (mfp.isOpen)
                    mfp[options].apply(mfp, Array.prototype.slice.call(arguments, 1));
            }
        } else {
            options = $.extend(true, {}, options);
            if (_isJQ) {
                jqEl.data('magnificPopup', options);
            } else {
                jqEl[0].magnificPopup = options;
            }
            mfp.addGroup(jqEl, options);
        }
        return jqEl;
    }
    ;
    var INLINE_NS = 'inline', _hiddenClass, _inlinePlaceholder, _lastInlineElement, _putInlineElementsBack = function() {
        if (_lastInlineElement) {
            _inlinePlaceholder.after(_lastInlineElement.addClass(_hiddenClass)).detach();
            _lastInlineElement = null;
        }
    };
    $.magnificPopup.registerModule(INLINE_NS, {
        options: {
            hiddenClass: 'hide',
            markup: '',
            tNotFound: 'Content not found'
        },
        proto: {
            initInline: function() {
                mfp.types.push(INLINE_NS);
                _mfpOn(CLOSE_EVENT + '.' + INLINE_NS, function() {
                    _putInlineElementsBack();
                });
            },
            getInline: function(item, template) {
                _putInlineElementsBack();
                if (item.src) {
                    var inlineSt = mfp.st.inline
                      , el = $(item.src);
                    if (el.length) {
                        var parent = el[0].parentNode;
                        if (parent && parent.tagName) {
                            if (!_inlinePlaceholder) {
                                _hiddenClass = inlineSt.hiddenClass;
                                _inlinePlaceholder = _getEl(_hiddenClass);
                                _hiddenClass = 'mfp-' + _hiddenClass;
                            }
                            _lastInlineElement = el.after(_inlinePlaceholder).detach().removeClass(_hiddenClass);
                        }
                        mfp.updateStatus('ready');
                    } else {
                        mfp.updateStatus('error', inlineSt.tNotFound);
                        el = $('<div>');
                    }
                    item.inlineElement = el;
                    return el;
                }
                mfp.updateStatus('ready');
                mfp._parseMarkup(template, {}, item);
                return template;
            }
        }
    });
    var AJAX_NS = 'ajax', _ajaxCur, _removeAjaxCursor = function() {
        if (_ajaxCur) {
            $(document.body).removeClass(_ajaxCur);
        }
    }, _destroyAjaxRequest = function() {
        _removeAjaxCursor();
        if (mfp.req) {
            mfp.req.abort();
        }
    };
    $.magnificPopup.registerModule(AJAX_NS, {
        options: {
            settings: null,
            cursor: 'mfp-ajax-cur',
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                mfp.types.push(AJAX_NS);
                _ajaxCur = mfp.st.ajax.cursor;
                _mfpOn(CLOSE_EVENT + '.' + AJAX_NS, _destroyAjaxRequest);
                _mfpOn('BeforeChange.' + AJAX_NS, _destroyAjaxRequest);
            },
            getAjax: function(item) {
                if (_ajaxCur) {
                    $(document.body).addClass(_ajaxCur);
                }
                mfp.updateStatus('loading');
                var opts = $.extend({
                    url: item.src,
                    success: function(data, textStatus, jqXHR) {
                        var temp = {
                            data: data,
                            xhr: jqXHR
                        };
                        _mfpTrigger('ParseAjax', temp);
                        mfp.appendContent($(temp.data), AJAX_NS);
                        item.finished = true;
                        _removeAjaxCursor();
                        mfp._setFocus();
                        setTimeout(function() {
                            mfp.wrap.addClass(READY_CLASS);
                        }, 16);
                        mfp.updateStatus('ready');
                        _mfpTrigger('AjaxContentAdded');
                    },
                    error: function() {
                        _removeAjaxCursor();
                        item.finished = item.loadError = true;
                        mfp.updateStatus('error', mfp.st.ajax.tError.replace('%url%', item.src));
                    }
                }, mfp.st.ajax.settings);
                mfp.req = $.ajax(opts);
                return '';
            }
        }
    });
    var _imgInterval, _getTitle = function(item) {
        if (item.data && item.data.title !== undefined)
            return item.data.title;
        var src = mfp.st.image.titleSrc;
        if (src) {
            if ($.isFunction(src)) {
                return src.call(mfp, item);
            } else if (item.el) {
                return item.el.attr(src) || '';
            }
        }
        return '';
    };
    $.magnificPopup.registerModule('image', {
        options: {
            markup: '<div class="mfp-figure">' + '<div class="mfp-close"></div>' + '<figure>' + '<div class="mfp-img"></div>' + '<figcaption>' + '<div class="mfp-bottom-bar">' + '<div class="mfp-title"></div>' + '<div class="mfp-counter"></div>' + '</div>' + '</figcaption>' + '</figure>' + '</div>',
            cursor: 'mfp-zoom-out-cur',
            titleSrc: 'title',
            verticalFit: true,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var imgSt = mfp.st.image
                  , ns = '.image';
                mfp.types.push('image');
                _mfpOn(OPEN_EVENT + ns, function() {
                    if (mfp.currItem.type === 'image' && imgSt.cursor) {
                        $(document.body).addClass(imgSt.cursor);
                    }
                });
                _mfpOn(CLOSE_EVENT + ns, function() {
                    if (imgSt.cursor) {
                        $(document.body).removeClass(imgSt.cursor);
                    }
                    _window.off('resize' + EVENT_NS);
                });
                _mfpOn('Resize' + ns, mfp.resizeImage);
                if (mfp.isLowIE) {
                    _mfpOn('AfterChange', mfp.resizeImage);
                }
            },
            resizeImage: function() {
                var item = mfp.currItem;
                if (!item || !item.img)
                    return;
                if (mfp.st.image.verticalFit) {
                    var decr = 0;
                    if (mfp.isLowIE) {
                        decr = parseInt(item.img.css('padding-top'), 10) + parseInt(item.img.css('padding-bottom'), 10);
                    }
                    item.img.css('max-height', mfp.wH - decr);
                }
            },
            _onImageHasSize: function(item) {
                if (item.img) {
                    item.hasSize = true;
                    if (_imgInterval) {
                        clearInterval(_imgInterval);
                    }
                    item.isCheckingImgSize = false;
                    _mfpTrigger('ImageHasSize', item);
                    if (item.imgHidden) {
                        if (mfp.content)
                            mfp.content.removeClass('mfp-loading');
                        item.imgHidden = false;
                    }
                }
            },
            findImageSize: function(item) {
                var counter = 0
                  , img = item.img[0]
                  , mfpSetInterval = function(delay) {
                    if (_imgInterval) {
                        clearInterval(_imgInterval);
                    }
                    _imgInterval = setInterval(function() {
                        if (img.naturalWidth > 0) {
                            mfp._onImageHasSize(item);
                            return;
                        }
                        if (counter > 200) {
                            clearInterval(_imgInterval);
                        }
                        counter++;
                        if (counter === 3) {
                            mfpSetInterval(10);
                        } else if (counter === 40) {
                            mfpSetInterval(50);
                        } else if (counter === 100) {
                            mfpSetInterval(500);
                        }
                    }, delay);
                };
                mfpSetInterval(1);
            },
            getImage: function(item, template) {
                var guard = 0
                  , onLoadComplete = function() {
                    if (item) {
                        if (item.img[0].complete) {
                            item.img.off('.mfploader');
                            if (item === mfp.currItem) {
                                mfp._onImageHasSize(item);
                                mfp.updateStatus('ready');
                            }
                            item.hasSize = true;
                            item.loaded = true;
                            _mfpTrigger('ImageLoadComplete');
                        } else {
                            guard++;
                            if (guard < 200) {
                                setTimeout(onLoadComplete, 100);
                            } else {
                                onLoadError();
                            }
                        }
                    }
                }
                  , onLoadError = function() {
                    if (item) {
                        item.img.off('.mfploader');
                        if (item === mfp.currItem) {
                            mfp._onImageHasSize(item);
                            mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src));
                        }
                        item.hasSize = true;
                        item.loaded = true;
                        item.loadError = true;
                    }
                }
                  , imgSt = mfp.st.image;
                var el = template.find('.mfp-img');
                if (el.length) {
                    var img = document.createElement('img');
                    img.className = 'mfp-img';
                    if (item.el && item.el.find('img').length) {
                        img.alt = item.el.find('img').attr('alt');
                    }
                    item.img = $(img).on('load.mfploader', onLoadComplete).on('error.mfploader', onLoadError);
                    img.src = item.src;
                    if (el.is('img')) {
                        item.img = item.img.clone();
                    }
                    img = item.img[0];
                    if (img.naturalWidth > 0) {
                        item.hasSize = true;
                    } else if (!img.width) {
                        item.hasSize = false;
                    }
                }
                mfp._parseMarkup(template, {
                    title: _getTitle(item),
                    img_replaceWith: item.img
                }, item);
                mfp.resizeImage();
                if (item.hasSize) {
                    if (_imgInterval)
                        clearInterval(_imgInterval);
                    if (item.loadError) {
                        template.addClass('mfp-loading');
                        mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src));
                    } else {
                        template.removeClass('mfp-loading');
                        mfp.updateStatus('ready');
                    }
                    return template;
                }
                mfp.updateStatus('loading');
                item.loading = true;
                if (!item.hasSize) {
                    item.imgHidden = true;
                    template.addClass('mfp-loading');
                    mfp.findImageSize(item);
                }
                return template;
            }
        }
    });
    var hasMozTransform, getHasMozTransform = function() {
        if (hasMozTransform === undefined) {
            hasMozTransform = document.createElement('p').style.MozTransform !== undefined;
        }
        return hasMozTransform;
    };
    $.magnificPopup.registerModule('zoom', {
        options: {
            enabled: false,
            easing: 'ease-in-out',
            duration: 300,
            opener: function(element) {
                return element.is('img') ? element : element.find('img');
            }
        },
        proto: {
            initZoom: function() {
                var zoomSt = mfp.st.zoom, ns = '.zoom', image;
                if (!zoomSt.enabled || !mfp.supportsTransition) {
                    return;
                }
                var duration = zoomSt.duration, getElToAnimate = function(image) {
                    var newImg = image.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image')
                      , transition = 'all ' + (zoomSt.duration / 1000) + 's ' + zoomSt.easing
                      , cssObj = {
                        position: 'fixed',
                        zIndex: 9999,
                        left: 0,
                        top: 0,
                        '-webkit-backface-visibility': 'hidden'
                    }
                      , t = 'transition';
                    cssObj['-webkit-' + t] = cssObj['-moz-' + t] = cssObj['-o-' + t] = cssObj[t] = transition;
                    newImg.css(cssObj);
                    return newImg;
                }, showMainContent = function() {
                    mfp.content.css('visibility', 'visible');
                }, openTimeout, animatedImg;
                _mfpOn('BuildControls' + ns, function() {
                    if (mfp._allowZoom()) {
                        clearTimeout(openTimeout);
                        mfp.content.css('visibility', 'hidden');
                        image = mfp._getItemToZoom();
                        if (!image) {
                            showMainContent();
                            return;
                        }
                        animatedImg = getElToAnimate(image);
                        animatedImg.css(mfp._getOffset());
                        mfp.wrap.append(animatedImg);
                        openTimeout = setTimeout(function() {
                            animatedImg.css(mfp._getOffset(true));
                            openTimeout = setTimeout(function() {
                                showMainContent();
                                setTimeout(function() {
                                    animatedImg.remove();
                                    image = animatedImg = null;
                                    _mfpTrigger('ZoomAnimationEnded');
                                }, 16);
                            }, duration);
                        }, 16);
                    }
                });
                _mfpOn(BEFORE_CLOSE_EVENT + ns, function() {
                    if (mfp._allowZoom()) {
                        clearTimeout(openTimeout);
                        mfp.st.removalDelay = duration;
                        if (!image) {
                            image = mfp._getItemToZoom();
                            if (!image) {
                                return;
                            }
                            animatedImg = getElToAnimate(image);
                        }
                        animatedImg.css(mfp._getOffset(true));
                        mfp.wrap.append(animatedImg);
                        mfp.content.css('visibility', 'hidden');
                        setTimeout(function() {
                            animatedImg.css(mfp._getOffset());
                        }, 16);
                    }
                });
                _mfpOn(CLOSE_EVENT + ns, function() {
                    if (mfp._allowZoom()) {
                        showMainContent();
                        if (animatedImg) {
                            animatedImg.remove();
                        }
                        image = null;
                    }
                });
            },
            _allowZoom: function() {
                return mfp.currItem.type === 'image';
            },
            _getItemToZoom: function() {
                if (mfp.currItem.hasSize) {
                    return mfp.currItem.img;
                } else {
                    return false;
                }
            },
            _getOffset: function(isLarge) {
                var el;
                if (isLarge) {
                    el = mfp.currItem.img;
                } else {
                    el = mfp.st.zoom.opener(mfp.currItem.el || mfp.currItem);
                }
                var offset = el.offset();
                var paddingTop = parseInt(el.css('padding-top'), 10);
                var paddingBottom = parseInt(el.css('padding-bottom'), 10);
                offset.top -= ($(window).scrollTop() - paddingTop);
                var obj = {
                    width: el.width(),
                    height: (_isJQ ? el.innerHeight() : el[0].offsetHeight) - paddingBottom - paddingTop
                };
                if (getHasMozTransform()) {
                    obj['-moz-transform'] = obj['transform'] = 'translate(' + offset.left + 'px,' + offset.top + 'px)';
                } else {
                    obj.left = offset.left;
                    obj.top = offset.top;
                }
                return obj;
            }
        }
    });
    var IFRAME_NS = 'iframe'
      , _emptyPage = '//about:blank'
      , _fixIframeBugs = function(isShowing) {
        if (mfp.currTemplate[IFRAME_NS]) {
            var el = mfp.currTemplate[IFRAME_NS].find('iframe');
            if (el.length) {
                if (!isShowing) {
                    el[0].src = _emptyPage;
                }
                if (mfp.isIE8) {
                    el.css('display', isShowing ? 'block' : 'none');
                }
            }
        }
    };
    $.magnificPopup.registerModule(IFRAME_NS, {
        options: {
            markup: '<div class="mfp-iframe-scaler">' + '<div class="mfp-close"></div>' + '<iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe>' + '</div>',
            srcAction: 'iframe_src',
            patterns: {
                youtube: {
                    index: 'youtube.com',
                    id: 'v=',
                    src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                },
                vimeo: {
                    index: 'vimeo.com/',
                    id: '/',
                    src: 'https://player.vimeo.com/video/%id%?autoplay=1'
                },
                gmaps: {
                    index: '//maps.google.',
                    src: '%id%&output=embed'
                }
            }
        },
        proto: {
            initIframe: function() {
                mfp.types.push(IFRAME_NS);
                _mfpOn('BeforeChange', function(e, prevType, newType) {
                    if (prevType !== newType) {
                        if (prevType === IFRAME_NS) {
                            _fixIframeBugs();
                        } else if (newType === IFRAME_NS) {
                            _fixIframeBugs(true);
                        }
                    }
                });
                _mfpOn(CLOSE_EVENT + '.' + IFRAME_NS, function() {
                    _fixIframeBugs();
                });
            },
            getIframe: function(item, template) {
                var embedSrc = item.src;
                var iframeSt = mfp.st.iframe;
                $.each(iframeSt.patterns, function() {
                    if (embedSrc.indexOf(this.index) > -1) {
                        if (this.id) {
                            if (typeof this.id === 'string') {
                                embedSrc = embedSrc.substr(embedSrc.lastIndexOf(this.id) + this.id.length, embedSrc.length);
                            } else {
                                embedSrc = this.id.call(this, embedSrc);
                            }
                        }
                        embedSrc = this.src.replace('%id%', embedSrc);
                        return false;
                    }
                });
                var dataObj = {};
                if (iframeSt.srcAction) {
                    dataObj[iframeSt.srcAction] = embedSrc;
                }
                mfp._parseMarkup(template, dataObj, item);
                mfp.updateStatus('ready');
                return template;
            }
        }
    });
    var _getLoopedId = function(index) {
        var numSlides = mfp.items.length;
        if (index > numSlides - 1) {
            return index - numSlides;
        } else if (index < 0) {
            return numSlides + index;
        }
        return index;
    }
      , _replaceCurrTotal = function(text, curr, total) {
        return text.replace(/%curr%/gi, curr + 1).replace(/%total%/gi, total);
    };
    $.magnificPopup.registerModule('gallery', {
        options: {
            enabled: false,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: true,
            arrows: true,
            tPrev: 'Previous (Left arrow key)',
            tNext: 'Next (Right arrow key)',
            tCounter: '%curr% of %total%'
        },
        proto: {
            initGallery: function() {
                var gSt = mfp.st.gallery
                  , ns = '.mfp-gallery';
                mfp.direction = true;
                if (!gSt || !gSt.enabled)
                    return false;
                _wrapClasses += ' mfp-gallery';
                _mfpOn(OPEN_EVENT + ns, function() {
                    if (gSt.navigateByImgClick) {
                        mfp.wrap.on('click' + ns, '.mfp-img', function() {
                            if (mfp.items.length > 1) {
                                mfp.next();
                                return false;
                            }
                        });
                    }
                    _document.on('keydown' + ns, function(e) {
                        if (e.keyCode === 37) {
                            mfp.prev();
                        } else if (e.keyCode === 39) {
                            mfp.next();
                        }
                    });
                });
                _mfpOn('UpdateStatus' + ns, function(e, data) {
                    if (data.text) {
                        data.text = _replaceCurrTotal(data.text, mfp.currItem.index, mfp.items.length);
                    }
                });
                _mfpOn(MARKUP_PARSE_EVENT + ns, function(e, element, values, item) {
                    var l = mfp.items.length;
                    values.counter = l > 1 ? _replaceCurrTotal(gSt.tCounter, item.index, l) : '';
                });
                _mfpOn('BuildControls' + ns, function() {
                    if (mfp.items.length > 1 && gSt.arrows && !mfp.arrowLeft) {
                        var markup = gSt.arrowMarkup
                          , arrowLeft = mfp.arrowLeft = $(markup.replace(/%title%/gi, gSt.tPrev).replace(/%dir%/gi, 'left')).addClass(PREVENT_CLOSE_CLASS)
                          , arrowRight = mfp.arrowRight = $(markup.replace(/%title%/gi, gSt.tNext).replace(/%dir%/gi, 'right')).addClass(PREVENT_CLOSE_CLASS);
                        arrowLeft.click(function() {
                            mfp.prev();
                        });
                        arrowRight.click(function() {
                            mfp.next();
                        });
                        mfp.container.append(arrowLeft.add(arrowRight));
                    }
                });
                _mfpOn(CHANGE_EVENT + ns, function() {
                    if (mfp._preloadTimeout)
                        clearTimeout(mfp._preloadTimeout);
                    mfp._preloadTimeout = setTimeout(function() {
                        mfp.preloadNearbyImages();
                        mfp._preloadTimeout = null;
                    }, 16);
                });
                _mfpOn(CLOSE_EVENT + ns, function() {
                    _document.off(ns);
                    mfp.wrap.off('click' + ns);
                    mfp.arrowRight = mfp.arrowLeft = null;
                });
            },
            next: function() {
                mfp.direction = true;
                mfp.index = _getLoopedId(mfp.index + 1);
                mfp.updateItemHTML();
            },
            prev: function() {
                mfp.direction = false;
                mfp.index = _getLoopedId(mfp.index - 1);
                mfp.updateItemHTML();
            },
            goTo: function(newIndex) {
                mfp.direction = (newIndex >= mfp.index);
                mfp.index = newIndex;
                mfp.updateItemHTML();
            },
            preloadNearbyImages: function() {
                var p = mfp.st.gallery.preload, preloadBefore = Math.min(p[0], mfp.items.length), preloadAfter = Math.min(p[1], mfp.items.length), i;
                for (i = 1; i <= (mfp.direction ? preloadAfter : preloadBefore); i++) {
                    mfp._preloadItem(mfp.index + i);
                }
                for (i = 1; i <= (mfp.direction ? preloadBefore : preloadAfter); i++) {
                    mfp._preloadItem(mfp.index - i);
                }
            },
            _preloadItem: function(index) {
                index = _getLoopedId(index);
                if (mfp.items[index].preloaded) {
                    return;
                }
                var item = mfp.items[index];
                if (!item.parsed) {
                    item = mfp.parseEl(index);
                }
                _mfpTrigger('LazyLoad', item);
                if (item.type === 'image') {
                    item.img = $('<img class="mfp-img" />').on('load.mfploader', function() {
                        item.hasSize = true;
                    }).on('error.mfploader', function() {
                        item.hasSize = true;
                        item.loadError = true;
                        _mfpTrigger('LazyLoadError', item);
                    }).attr('src', item.src);
                }
                item.preloaded = true;
            }
        }
    });
    var RETINA_NS = 'retina';
    $.magnificPopup.registerModule(RETINA_NS, {
        options: {
            replaceSrc: function(item) {
                return item.src.replace(/\.\w+$/, function(m) {
                    return '@2x' + m;
                });
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var st = mfp.st.retina
                      , ratio = st.ratio;
                    ratio = !isNaN(ratio) ? ratio : ratio();
                    if (ratio > 1) {
                        _mfpOn('ImageHasSize' + '.' + RETINA_NS, function(e, item) {
                            item.img.css({
                                'max-width': item.img[0].naturalWidth / ratio,
                                'width': '100%'
                            });
                        });
                        _mfpOn('ElementParse' + '.' + RETINA_NS, function(e, item) {
                            item.src = st.replaceSrc(item, ratio);
                        });
                    }
                }
            }
        }
    });
    _checkInstance();
}));
/*!
 * jQuery Validation Plugin v1.17.0
 *
 * https://jqueryvalidation.org/
 *
 * Copyright (c) 2017 Jörn Zaefferer
 * Released under the MIT license
 */
(function(factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], factory);
    } else if (typeof module === "object" && module.exports) {
        module.exports = factory(require("jquery"));
    } else {
        factory(jQuery);
    }
}(function($) {
    $.extend($.fn, {
        validate: function(options) {
            if (!this.length) {
                if (options && options.debug && window.console) {
                    console.warn("Nothing selected, can't validate, returning nothing.");
                }
                return;
            }
            var validator = $.data(this[0], "validator");
            if (validator) {
                return validator;
            }
            this.attr("novalidate", "novalidate");
            validator = new $.validator(options,this[0]);
            $.data(this[0], "validator", validator);
            if (validator.settings.onsubmit) {
                this.on("click.validate", ":submit", function(event) {
                    validator.submitButton = event.currentTarget;
                    if ($(this).hasClass("cancel")) {
                        validator.cancelSubmit = true;
                    }
                    if ($(this).attr("formnovalidate") !== undefined) {
                        validator.cancelSubmit = true;
                    }
                });
                this.on("submit.validate", function(event) {
                    if (validator.settings.debug) {
                        event.preventDefault();
                    }
                    function handle() {
                        var hidden, result;
                        if (validator.submitButton && (validator.settings.submitHandler || validator.formSubmitted)) {
                            hidden = $("<input type='hidden'/>").attr("name", validator.submitButton.name).val($(validator.submitButton).val()).appendTo(validator.currentForm);
                        }
                        if (validator.settings.submitHandler) {
                            result = validator.settings.submitHandler.call(validator, validator.currentForm, event);
                            if (hidden) {
                                hidden.remove();
                            }
                            if (result !== undefined) {
                                return result;
                            }
                            return false;
                        }
                        return true;
                    }
                    if (validator.cancelSubmit) {
                        validator.cancelSubmit = false;
                        return handle();
                    }
                    if (validator.form()) {
                        if (validator.pendingRequest) {
                            validator.formSubmitted = true;
                            return false;
                        }
                        return handle();
                    } else {
                        validator.focusInvalid();
                        return false;
                    }
                });
            }
            return validator;
        },
        valid: function() {
            var valid, validator, errorList;
            if ($(this[0]).is("form")) {
                valid = this.validate().form();
            } else {
                errorList = [];
                valid = true;
                validator = $(this[0].form).validate();
                this.each(function() {
                    valid = validator.element(this) && valid;
                    if (!valid) {
                        errorList = errorList.concat(validator.errorList);
                    }
                });
                validator.errorList = errorList;
            }
            return valid;
        },
        rules: function(command, argument) {
            var element = this[0], settings, staticRules, existingRules, data, param, filtered;
            if (element == null) {
                return;
            }
            if (!element.form && element.hasAttribute("contenteditable")) {
                element.form = this.closest("form")[0];
                element.name = this.attr("name");
            }
            if (element.form == null) {
                return;
            }
            if (command) {
                settings = $.data(element.form, "validator").settings;
                staticRules = settings.rules;
                existingRules = $.validator.staticRules(element);
                switch (command) {
                case "add":
                    $.extend(existingRules, $.validator.normalizeRule(argument));
                    delete existingRules.messages;
                    staticRules[element.name] = existingRules;
                    if (argument.messages) {
                        settings.messages[element.name] = $.extend(settings.messages[element.name], argument.messages);
                    }
                    break;
                case "remove":
                    if (!argument) {
                        delete staticRules[element.name];
                        return existingRules;
                    }
                    filtered = {};
                    $.each(argument.split(/\s/), function(index, method) {
                        filtered[method] = existingRules[method];
                        delete existingRules[method];
                    });
                    return filtered;
                }
            }
            data = $.validator.normalizeRules($.extend({}, $.validator.classRules(element), $.validator.attributeRules(element), $.validator.dataRules(element), $.validator.staticRules(element)), element);
            if (data.required) {
                param = data.required;
                delete data.required;
                data = $.extend({
                    required: param
                }, data);
            }
            if (data.remote) {
                param = data.remote;
                delete data.remote;
                data = $.extend(data, {
                    remote: param
                });
            }
            return data;
        }
    });
    $.extend($.expr.pseudos || $.expr[":"], {
        blank: function(a) {
            return !$.trim("" + $(a).val());
        },
        filled: function(a) {
            var val = $(a).val();
            return val !== null && !!$.trim("" + val);
        },
        unchecked: function(a) {
            return !$(a).prop("checked");
        }
    });
    $.validator = function(options, form) {
        this.settings = $.extend(true, {}, $.validator.defaults, options);
        this.currentForm = form;
        this.init();
    }
    ;
    $.validator.format = function(source, params) {
        if (arguments.length === 1) {
            return function() {
                var args = $.makeArray(arguments);
                args.unshift(source);
                return $.validator.format.apply(this, args);
            }
            ;
        }
        if (params === undefined) {
            return source;
        }
        if (arguments.length > 2 && params.constructor !== Array) {
            params = $.makeArray(arguments).slice(1);
        }
        if (params.constructor !== Array) {
            params = [params];
        }
        $.each(params, function(i, n) {
            source = source.replace(new RegExp("\\{" + i + "\\}","g"), function() {
                return n;
            });
        });
        return source;
    }
    ;
    $.extend($.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            pendingClass: "pending",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: false,
            focusInvalid: true,
            errorContainer: $([]),
            errorLabelContainer: $([]),
            onsubmit: true,
            ignore: ":hidden",
            ignoreTitle: false,
            onfocusin: function(element) {
                this.lastActive = element;
                if (this.settings.focusCleanup) {
                    if (this.settings.unhighlight) {
                        this.settings.unhighlight.call(this, element, this.settings.errorClass, this.settings.validClass);
                    }
                    this.hideThese(this.errorsFor(element));
                }
            },
            onfocusout: function(element) {
                if (!this.checkable(element) && (element.name in this.submitted || !this.optional(element))) {
                    this.element(element);
                }
            },
            onkeyup: function(element, event) {
                var excludedKeys = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                if (event.which === 9 && this.elementValue(element) === "" || $.inArray(event.keyCode, excludedKeys) !== -1) {
                    return;
                } else if (element.name in this.submitted || element.name in this.invalid) {
                    this.element(element);
                }
            },
            onclick: function(element) {
                if (element.name in this.submitted) {
                    this.element(element);
                } else if (element.parentNode.name in this.submitted) {
                    this.element(element.parentNode);
                }
            },
            highlight: function(element, errorClass, validClass) {
                if (element.type === "radio") {
                    this.findByName(element.name).addClass(errorClass).removeClass(validClass);
                } else {
                    $(element).addClass(errorClass).removeClass(validClass);
                }
            },
            unhighlight: function(element, errorClass, validClass) {
                if (element.type === "radio") {
                    this.findByName(element.name).removeClass(errorClass).addClass(validClass);
                } else {
                    $(element).removeClass(errorClass).addClass(validClass);
                }
            }
        },
        setDefaults: function(settings) {
            $.extend($.validator.defaults, settings);
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            equalTo: "Please enter the same value again.",
            maxlength: $.validator.format("Please enter no more than {0} characters."),
            minlength: $.validator.format("Please enter at least {0} characters."),
            rangelength: $.validator.format("Please enter a value between {0} and {1} characters long."),
            range: $.validator.format("Please enter a value between {0} and {1}."),
            max: $.validator.format("Please enter a value less than or equal to {0}."),
            min: $.validator.format("Please enter a value greater than or equal to {0}."),
            step: $.validator.format("Please enter a multiple of {0}.")
        },
        autoCreateRanges: false,
        prototype: {
            init: function() {
                this.labelContainer = $(this.settings.errorLabelContainer);
                this.errorContext = this.labelContainer.length && this.labelContainer || $(this.currentForm);
                this.containers = $(this.settings.errorContainer).add(this.settings.errorLabelContainer);
                this.submitted = {};
                this.valueCache = {};
                this.pendingRequest = 0;
                this.pending = {};
                this.invalid = {};
                this.reset();
                var groups = (this.groups = {}), rules;
                $.each(this.settings.groups, function(key, value) {
                    if (typeof value === "string") {
                        value = value.split(/\s/);
                    }
                    $.each(value, function(index, name) {
                        groups[name] = key;
                    });
                });
                rules = this.settings.rules;
                $.each(rules, function(key, value) {
                    rules[key] = $.validator.normalizeRule(value);
                });
                function delegate(event) {
                    if (!this.form && this.hasAttribute("contenteditable")) {
                        this.form = $(this).closest("form")[0];
                        this.name = $(this).attr("name");
                    }
                    var validator = $.data(this.form, "validator")
                      , eventType = "on" + event.type.replace(/^validate/, "")
                      , settings = validator.settings;
                    if (settings[eventType] && !$(this).is(settings.ignore)) {
                        settings[eventType].call(validator, this, event);
                    }
                }
                $(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], " + "[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], " + "[type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], " + "[type='radio'], [type='checkbox'], [contenteditable], [type='button']", delegate).on("click.validate", "select, option, [type='radio'], [type='checkbox']", delegate);
                if (this.settings.invalidHandler) {
                    $(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler);
                }
            },
            form: function() {
                this.checkForm();
                $.extend(this.submitted, this.errorMap);
                this.invalid = $.extend({}, this.errorMap);
                if (!this.valid()) {
                    $(this.currentForm).triggerHandler("invalid-form", [this]);
                }
                this.showErrors();
                return this.valid();
            },
            checkForm: function() {
                this.prepareForm();
                for (var i = 0, elements = (this.currentElements = this.elements()); elements[i]; i++) {
                    this.check(elements[i]);
                }
                return this.valid();
            },
            element: function(element) {
                var cleanElement = this.clean(element), checkElement = this.validationTargetFor(cleanElement), v = this, result = true, rs, group;
                if (checkElement === undefined) {
                    delete this.invalid[cleanElement.name];
                } else {
                    this.prepareElement(checkElement);
                    this.currentElements = $(checkElement);
                    group = this.groups[checkElement.name];
                    if (group) {
                        $.each(this.groups, function(name, testgroup) {
                            if (testgroup === group && name !== checkElement.name) {
                                cleanElement = v.validationTargetFor(v.clean(v.findByName(name)));
                                if (cleanElement && cleanElement.name in v.invalid) {
                                    v.currentElements.push(cleanElement);
                                    result = v.check(cleanElement) && result;
                                }
                            }
                        });
                    }
                    rs = this.check(checkElement) !== false;
                    result = result && rs;
                    if (rs) {
                        this.invalid[checkElement.name] = false;
                    } else {
                        this.invalid[checkElement.name] = true;
                    }
                    if (!this.numberOfInvalids()) {
                        this.toHide = this.toHide.add(this.containers);
                    }
                    this.showErrors();
                    $(element).attr("aria-invalid", !rs);
                }
                return result;
            },
            showErrors: function(errors) {
                if (errors) {
                    var validator = this;
                    $.extend(this.errorMap, errors);
                    this.errorList = $.map(this.errorMap, function(message, name) {
                        return {
                            message: message,
                            element: validator.findByName(name)[0]
                        };
                    });
                    this.successList = $.grep(this.successList, function(element) {
                        return !(element.name in errors);
                    });
                }
                if (this.settings.showErrors) {
                    this.settings.showErrors.call(this, this.errorMap, this.errorList);
                } else {
                    this.defaultShowErrors();
                }
            },
            resetForm: function() {
                if ($.fn.resetForm) {
                    $(this.currentForm).resetForm();
                }
                this.invalid = {};
                this.submitted = {};
                this.prepareForm();
                this.hideErrors();
                var elements = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                this.resetElements(elements);
            },
            resetElements: function(elements) {
                var i;
                if (this.settings.unhighlight) {
                    for (i = 0; elements[i]; i++) {
                        this.settings.unhighlight.call(this, elements[i], this.settings.errorClass, "");
                        this.findByName(elements[i].name).removeClass(this.settings.validClass);
                    }
                } else {
                    elements.removeClass(this.settings.errorClass).removeClass(this.settings.validClass);
                }
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid);
            },
            objectLength: function(obj) {
                var count = 0, i;
                for (i in obj) {
                    if (obj[i] !== undefined && obj[i] !== null && obj[i] !== false) {
                        count++;
                    }
                }
                return count;
            },
            hideErrors: function() {
                this.hideThese(this.toHide);
            },
            hideThese: function(errors) {
                errors.not(this.containers).text("");
                this.addWrapper(errors).hide();
            },
            valid: function() {
                return this.size() === 0;
            },
            size: function() {
                return this.errorList.length;
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) {
                    try {
                        $(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin");
                    } catch (e) {}
                }
            },
            findLastActive: function() {
                var lastActive = this.lastActive;
                return lastActive && $.grep(this.errorList, function(n) {
                    return n.element.name === lastActive.name;
                }).length === 1 && lastActive;
            },
            elements: function() {
                var validator = this
                  , rulesCache = {};
                return $(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                    var name = this.name || $(this).attr("name");
                    if (!name && validator.settings.debug && window.console) {
                        console.error("%o has no name assigned", this);
                    }
                    if (this.hasAttribute("contenteditable")) {
                        this.form = $(this).closest("form")[0];
                        this.name = name;
                    }
                    if (name in rulesCache || !validator.objectLength($(this).rules())) {
                        return false;
                    }
                    rulesCache[name] = true;
                    return true;
                });
            },
            clean: function(selector) {
                return $(selector)[0];
            },
            errors: function() {
                var errorClass = this.settings.errorClass.split(" ").join(".");
                return $(this.settings.errorElement + "." + errorClass, this.errorContext);
            },
            resetInternals: function() {
                this.successList = [];
                this.errorList = [];
                this.errorMap = {};
                this.toShow = $([]);
                this.toHide = $([]);
            },
            reset: function() {
                this.resetInternals();
                this.currentElements = $([]);
            },
            prepareForm: function() {
                this.reset();
                this.toHide = this.errors().add(this.containers);
            },
            prepareElement: function(element) {
                this.reset();
                this.toHide = this.errorsFor(element);
            },
            elementValue: function(element) {
                var $element = $(element), type = element.type, val, idx;
                if (type === "radio" || type === "checkbox") {
                    return this.findByName(element.name).filter(":checked").val();
                } else if (type === "number" && typeof element.validity !== "undefined") {
                    return element.validity.badInput ? "NaN" : $element.val();
                }
                if (element.hasAttribute("contenteditable")) {
                    val = $element.text();
                } else {
                    val = $element.val();
                }
                if (type === "file") {
                    if (val.substr(0, 12) === "C:\\fakepath\\") {
                        return val.substr(12);
                    }
                    idx = val.lastIndexOf("/");
                    if (idx >= 0) {
                        return val.substr(idx + 1);
                    }
                    idx = val.lastIndexOf("\\");
                    if (idx >= 0) {
                        return val.substr(idx + 1);
                    }
                    return val;
                }
                if (typeof val === "string") {
                    return val.replace(/\r/g, "");
                }
                return val;
            },
            check: function(element) {
                element = this.validationTargetFor(this.clean(element));
                var rules = $(element).rules(), rulesCount = $.map(rules, function(n, i) {
                    return i;
                }).length, dependencyMismatch = false, val = this.elementValue(element), result, method, rule, normalizer;
                if (typeof rules.normalizer === "function") {
                    normalizer = rules.normalizer;
                } else if (typeof this.settings.normalizer === "function") {
                    normalizer = this.settings.normalizer;
                }
                if (normalizer) {
                    val = normalizer.call(element, val);
                    if (typeof val !== "string") {
                        throw new TypeError("The normalizer should return a string value.");
                    }
                    delete rules.normalizer;
                }
                for (method in rules) {
                    rule = {
                        method: method,
                        parameters: rules[method]
                    };
                    try {
                        result = $.validator.methods[method].call(this, val, element, rule.parameters);
                        if (result === "dependency-mismatch" && rulesCount === 1) {
                            dependencyMismatch = true;
                            continue;
                        }
                        dependencyMismatch = false;
                        if (result === "pending") {
                            this.toHide = this.toHide.not(this.errorsFor(element));
                            return;
                        }
                        if (!result) {
                            this.formatAndAdd(element, rule);
                            return false;
                        }
                    } catch (e) {
                        if (this.settings.debug && window.console) {
                            console.log("Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e);
                        }
                        if (e instanceof TypeError) {
                            e.message += ".  Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.";
                        }
                        throw e;
                    }
                }
                if (dependencyMismatch) {
                    return;
                }
                if (this.objectLength(rules)) {
                    this.successList.push(element);
                }
                return true;
            },
            customDataMessage: function(element, method) {
                return $(element).data("msg" + method.charAt(0).toUpperCase() + method.substring(1).toLowerCase()) || $(element).data("msg");
            },
            customMessage: function(name, method) {
                var m = this.settings.messages[name];
                return m && (m.constructor === String ? m : m[method]);
            },
            findDefined: function() {
                for (var i = 0; i < arguments.length; i++) {
                    if (arguments[i] !== undefined) {
                        return arguments[i];
                    }
                }
                return undefined;
            },
            defaultMessage: function(element, rule) {
                if (typeof rule === "string") {
                    rule = {
                        method: rule
                    };
                }
                var message = this.findDefined(this.customMessage(element.name, rule.method), this.customDataMessage(element, rule.method), !this.settings.ignoreTitle && element.title || undefined, $.validator.messages[rule.method], "<strong>Warning: No message defined for " + element.name + "</strong>")
                  , theregex = /\$?\{(\d+)\}/g;
                if (typeof message === "function") {
                    message = message.call(this, rule.parameters, element);
                } else if (theregex.test(message)) {
                    message = $.validator.format(message.replace(theregex, "{$1}"), rule.parameters);
                }
                return message;
            },
            formatAndAdd: function(element, rule) {
                var message = this.defaultMessage(element, rule);
                this.errorList.push({
                    message: message,
                    element: element,
                    method: rule.method
                });
                this.errorMap[element.name] = message;
                this.submitted[element.name] = message;
            },
            addWrapper: function(toToggle) {
                if (this.settings.wrapper) {
                    toToggle = toToggle.add(toToggle.parent(this.settings.wrapper));
                }
                return toToggle;
            },
            defaultShowErrors: function() {
                var i, elements, error;
                for (i = 0; this.errorList[i]; i++) {
                    error = this.errorList[i];
                    if (this.settings.highlight) {
                        this.settings.highlight.call(this, error.element, this.settings.errorClass, this.settings.validClass);
                    }
                    this.showLabel(error.element, error.message);
                }
                if (this.errorList.length) {
                    this.toShow = this.toShow.add(this.containers);
                }
                if (this.settings.success) {
                    for (i = 0; this.successList[i]; i++) {
                        this.showLabel(this.successList[i]);
                    }
                }
                if (this.settings.unhighlight) {
                    for (i = 0,
                    elements = this.validElements(); elements[i]; i++) {
                        this.settings.unhighlight.call(this, elements[i], this.settings.errorClass, this.settings.validClass);
                    }
                }
                this.toHide = this.toHide.not(this.toShow);
                this.hideErrors();
                this.addWrapper(this.toShow).show();
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements());
            },
            invalidElements: function() {
                return $(this.errorList).map(function() {
                    return this.element;
                });
            },
            showLabel: function(element, message) {
                var place, group, errorID, v, error = this.errorsFor(element), elementID = this.idOrName(element), describedBy = $(element).attr("aria-describedby");
                if (error.length) {
                    error.removeClass(this.settings.validClass).addClass(this.settings.errorClass);
                    error.html(message);
                } else {
                    error = $("<" + this.settings.errorElement + ">").attr("id", elementID + "-error").addClass(this.settings.errorClass).html(message || "");
                    place = error;
                    if (this.settings.wrapper) {
                        place = error.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
                    }
                    if (this.labelContainer.length) {
                        this.labelContainer.append(place);
                    } else if (this.settings.errorPlacement) {
                        this.settings.errorPlacement.call(this, place, $(element));
                    } else {
                        place.insertAfter(element);
                    }
                    if (error.is("label")) {
                        error.attr("for", elementID);
                    } else if (error.parents("label[for='" + this.escapeCssMeta(elementID) + "']").length === 0) {
                        errorID = error.attr("id");
                        if (!describedBy) {
                            describedBy = errorID;
                        } else if (!describedBy.match(new RegExp("\\b" + this.escapeCssMeta(errorID) + "\\b"))) {
                            describedBy += " " + errorID;
                        }
                        $(element).attr("aria-describedby", describedBy);
                        group = this.groups[element.name];
                        if (group) {
                            v = this;
                            $.each(v.groups, function(name, testgroup) {
                                if (testgroup === group) {
                                    $("[name='" + v.escapeCssMeta(name) + "']", v.currentForm).attr("aria-describedby", error.attr("id"));
                                }
                            });
                        }
                    }
                }
                if (!message && this.settings.success) {
                    error.text("");
                    if (typeof this.settings.success === "string") {
                        error.addClass(this.settings.success);
                    } else {
                        this.settings.success(error, element);
                    }
                }
                this.toShow = this.toShow.add(error);
            },
            errorsFor: function(element) {
                var name = this.escapeCssMeta(this.idOrName(element))
                  , describer = $(element).attr("aria-describedby")
                  , selector = "label[for='" + name + "'], label[for='" + name + "'] *";
                if (describer) {
                    selector = selector + ", #" + this.escapeCssMeta(describer).replace(/\s+/g, ", #");
                }
                return this.errors().filter(selector);
            },
            escapeCssMeta: function(string) {
                return string.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1");
            },
            idOrName: function(element) {
                return this.groups[element.name] || (this.checkable(element) ? element.name : element.id || element.name);
            },
            validationTargetFor: function(element) {
                if (this.checkable(element)) {
                    element = this.findByName(element.name);
                }
                return $(element).not(this.settings.ignore)[0];
            },
            checkable: function(element) {
                return (/radio|checkbox/i).test(element.type);
            },
            findByName: function(name) {
                return $(this.currentForm).find("[name='" + this.escapeCssMeta(name) + "']");
            },
            getLength: function(value, element) {
                switch (element.nodeName.toLowerCase()) {
                case "select":
                    return $("option:selected", element).length;
                case "input":
                    if (this.checkable(element)) {
                        return this.findByName(element.name).filter(":checked").length;
                    }
                }
                return value.length;
            },
            depend: function(param, element) {
                return this.dependTypes[typeof param] ? this.dependTypes[typeof param](param, element) : true;
            },
            dependTypes: {
                "boolean": function(param) {
                    return param;
                },
                "string": function(param, element) {
                    return !!$(param, element.form).length;
                },
                "function": function(param, element) {
                    return param(element);
                }
            },
            optional: function(element) {
                var val = this.elementValue(element);
                return !$.validator.methods.required.call(this, val, element) && "dependency-mismatch";
            },
            startRequest: function(element) {
                if (!this.pending[element.name]) {
                    this.pendingRequest++;
                    $(element).addClass(this.settings.pendingClass);
                    this.pending[element.name] = true;
                }
            },
            stopRequest: function(element, valid) {
                this.pendingRequest--;
                if (this.pendingRequest < 0) {
                    this.pendingRequest = 0;
                }
                delete this.pending[element.name];
                $(element).removeClass(this.settings.pendingClass);
                if (valid && this.pendingRequest === 0 && this.formSubmitted && this.form()) {
                    $(this.currentForm).submit();
                    if (this.submitButton) {
                        $("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove();
                    }
                    this.formSubmitted = false;
                } else if (!valid && this.pendingRequest === 0 && this.formSubmitted) {
                    $(this.currentForm).triggerHandler("invalid-form", [this]);
                    this.formSubmitted = false;
                }
            },
            previousValue: function(element, method) {
                method = typeof method === "string" && method || "remote";
                return $.data(element, "previousValue") || $.data(element, "previousValue", {
                    old: null,
                    valid: true,
                    message: this.defaultMessage(element, {
                        method: method
                    })
                });
            },
            destroy: function() {
                this.resetForm();
                $(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur");
            }
        },
        classRuleSettings: {
            required: {
                required: true
            },
            email: {
                email: true
            },
            url: {
                url: true
            },
            date: {
                date: true
            },
            dateISO: {
                dateISO: true
            },
            number: {
                number: true
            },
            digits: {
                digits: true
            },
            creditcard: {
                creditcard: true
            }
        },
        addClassRules: function(className, rules) {
            if (className.constructor === String) {
                this.classRuleSettings[className] = rules;
            } else {
                $.extend(this.classRuleSettings, className);
            }
        },
        classRules: function(element) {
            var rules = {}
              , classes = $(element).attr("class");
            if (classes) {
                $.each(classes.split(" "), function() {
                    if (this in $.validator.classRuleSettings) {
                        $.extend(rules, $.validator.classRuleSettings[this]);
                    }
                });
            }
            return rules;
        },
        normalizeAttributeRule: function(rules, type, method, value) {
            if (/min|max|step/.test(method) && (type === null || /number|range|text/.test(type))) {
                value = Number(value);
                if (isNaN(value)) {
                    value = undefined;
                }
            }
            if (value || value === 0) {
                rules[method] = value;
            } else if (type === method && type !== "range") {
                rules[method] = true;
            }
        },
        attributeRules: function(element) {
            var rules = {}, $element = $(element), type = element.getAttribute("type"), method, value;
            for (method in $.validator.methods) {
                if (method === "required") {
                    value = element.getAttribute(method);
                    if (value === "") {
                        value = true;
                    }
                    value = !!value;
                } else {
                    value = $element.attr(method);
                }
                this.normalizeAttributeRule(rules, type, method, value);
            }
            if (rules.maxlength && /-1|2147483647|524288/.test(rules.maxlength)) {
                delete rules.maxlength;
            }
            return rules;
        },
        dataRules: function(element) {
            var rules = {}, $element = $(element), type = element.getAttribute("type"), method, value;
            for (method in $.validator.methods) {
                value = $element.data("rule" + method.charAt(0).toUpperCase() + method.substring(1).toLowerCase());
                this.normalizeAttributeRule(rules, type, method, value);
            }
            return rules;
        },
        staticRules: function(element) {
            var rules = {}
              , validator = $.data(element.form, "validator");
            if (validator.settings.rules) {
                rules = $.validator.normalizeRule(validator.settings.rules[element.name]) || {};
            }
            return rules;
        },
        normalizeRules: function(rules, element) {
            $.each(rules, function(prop, val) {
                if (val === false) {
                    delete rules[prop];
                    return;
                }
                if (val.param || val.depends) {
                    var keepRule = true;
                    switch (typeof val.depends) {
                    case "string":
                        keepRule = !!$(val.depends, element.form).length;
                        break;
                    case "function":
                        keepRule = val.depends.call(element, element);
                        break;
                    }
                    if (keepRule) {
                        rules[prop] = val.param !== undefined ? val.param : true;
                    } else {
                        $.data(element.form, "validator").resetElements($(element));
                        delete rules[prop];
                    }
                }
            });
            $.each(rules, function(rule, parameter) {
                rules[rule] = $.isFunction(parameter) && rule !== "normalizer" ? parameter(element) : parameter;
            });
            $.each(["minlength", "maxlength"], function() {
                if (rules[this]) {
                    rules[this] = Number(rules[this]);
                }
            });
            $.each(["rangelength", "range"], function() {
                var parts;
                if (rules[this]) {
                    if ($.isArray(rules[this])) {
                        rules[this] = [Number(rules[this][0]), Number(rules[this][1])];
                    } else if (typeof rules[this] === "string") {
                        parts = rules[this].replace(/[\[\]]/g, "").split(/[\s,]+/);
                        rules[this] = [Number(parts[0]), Number(parts[1])];
                    }
                }
            });
            if ($.validator.autoCreateRanges) {
                if (rules.min != null && rules.max != null) {
                    rules.range = [rules.min, rules.max];
                    delete rules.min;
                    delete rules.max;
                }
                if (rules.minlength != null && rules.maxlength != null) {
                    rules.rangelength = [rules.minlength, rules.maxlength];
                    delete rules.minlength;
                    delete rules.maxlength;
                }
            }
            return rules;
        },
        normalizeRule: function(data) {
            if (typeof data === "string") {
                var transformed = {};
                $.each(data.split(/\s/), function() {
                    transformed[this] = true;
                });
                data = transformed;
            }
            return data;
        },
        addMethod: function(name, method, message) {
            $.validator.methods[name] = method;
            $.validator.messages[name] = message !== undefined ? message : $.validator.messages[name];
            if (method.length < 3) {
                $.validator.addClassRules(name, $.validator.normalizeRule(name));
            }
        },
        methods: {
            required: function(value, element, param) {
                if (!this.depend(param, element)) {
                    return "dependency-mismatch";
                }
                if (element.nodeName.toLowerCase() === "select") {
                    var val = $(element).val();
                    return val && val.length > 0;
                }
                if (this.checkable(element)) {
                    return this.getLength(value, element) > 0;
                }
                return value.length > 0;
            },
            email: function(value, element) {
                return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);
            },
            url: function(value, element) {
                return this.optional(element) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
            },
            date: function(value, element) {
                return this.optional(element) || !/Invalid|NaN/.test(new Date(value).toString());
            },
            dateISO: function(value, element) {
                return this.optional(element) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
            },
            number: function(value, element) {
                return this.optional(element) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
            },
            digits: function(value, element) {
                return this.optional(element) || /^\d+$/.test(value);
            },
            minlength: function(value, element, param) {
                var length = $.isArray(value) ? value.length : this.getLength(value, element);
                return this.optional(element) || length >= param;
            },
            maxlength: function(value, element, param) {
                var length = $.isArray(value) ? value.length : this.getLength(value, element);
                return this.optional(element) || length <= param;
            },
            rangelength: function(value, element, param) {
                var length = $.isArray(value) ? value.length : this.getLength(value, element);
                return this.optional(element) || (length >= param[0] && length <= param[1]);
            },
            min: function(value, element, param) {
                return this.optional(element) || value >= param;
            },
            max: function(value, element, param) {
                return this.optional(element) || value <= param;
            },
            range: function(value, element, param) {
                return this.optional(element) || (value >= param[0] && value <= param[1]);
            },
            step: function(value, element, param) {
                var type = $(element).attr("type"), errorMessage = "Step attribute on input type " + type + " is not supported.", supportedTypes = ["text", "number", "range"], re = new RegExp("\\b" + type + "\\b"), notSupported = type && !re.test(supportedTypes.join()), decimalPlaces = function(num) {
                    var match = ("" + num).match(/(?:\.(\d+))?$/);
                    if (!match) {
                        return 0;
                    }
                    return match[1] ? match[1].length : 0;
                }, toInt = function(num) {
                    return Math.round(num * Math.pow(10, decimals));
                }, valid = true, decimals;
                if (notSupported) {
                    throw new Error(errorMessage);
                }
                decimals = decimalPlaces(param);
                if (decimalPlaces(value) > decimals || toInt(value) % toInt(param) !== 0) {
                    valid = false;
                }
                return this.optional(element) || valid;
            },
            equalTo: function(value, element, param) {
                var target = $(param);
                if (this.settings.onfocusout && target.not(".validate-equalTo-blur").length) {
                    target.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
                        $(element).valid();
                    });
                }
                return value === target.val();
            },
            remote: function(value, element, param, method) {
                if (this.optional(element)) {
                    return "dependency-mismatch";
                }
                method = typeof method === "string" && method || "remote";
                var previous = this.previousValue(element, method), validator, data, optionDataString;
                if (!this.settings.messages[element.name]) {
                    this.settings.messages[element.name] = {};
                }
                previous.originalMessage = previous.originalMessage || this.settings.messages[element.name][method];
                this.settings.messages[element.name][method] = previous.message;
                param = typeof param === "string" && {
                    url: param
                } || param;
                optionDataString = $.param($.extend({
                    data: value
                }, param.data));
                if (previous.old === optionDataString) {
                    return previous.valid;
                }
                previous.old = optionDataString;
                validator = this;
                this.startRequest(element);
                data = {};
                data[element.name] = value;
                $.ajax($.extend(true, {
                    mode: "abort",
                    port: "validate" + element.name,
                    dataType: "json",
                    data: data,
                    context: validator.currentForm,
                    success: function(response) {
                        var valid = response === true || response === "true", errors, message, submitted;
                        validator.settings.messages[element.name][method] = previous.originalMessage;
                        if (valid) {
                            submitted = validator.formSubmitted;
                            validator.resetInternals();
                            validator.toHide = validator.errorsFor(element);
                            validator.formSubmitted = submitted;
                            validator.successList.push(element);
                            validator.invalid[element.name] = false;
                            validator.showErrors();
                        } else {
                            errors = {};
                            message = response || validator.defaultMessage(element, {
                                method: method,
                                parameters: value
                            });
                            errors[element.name] = previous.message = message;
                            validator.invalid[element.name] = true;
                            validator.showErrors(errors);
                        }
                        previous.valid = valid;
                        validator.stopRequest(element, valid);
                    }
                }, param));
                return "pending";
            }
        }
    });
    var pendingRequests = {}, ajax;
    if ($.ajaxPrefilter) {
        $.ajaxPrefilter(function(settings, _, xhr) {
            var port = settings.port;
            if (settings.mode === "abort") {
                if (pendingRequests[port]) {
                    pendingRequests[port].abort();
                }
                pendingRequests[port] = xhr;
            }
        });
    } else {
        ajax = $.ajax;
        $.ajax = function(settings) {
            var mode = ("mode"in settings ? settings : $.ajaxSettings).mode
              , port = ("port"in settings ? settings : $.ajaxSettings).port;
            if (mode === "abort") {
                if (pendingRequests[port]) {
                    pendingRequests[port].abort();
                }
                pendingRequests[port] = ajax.apply(this, arguments);
                return pendingRequests[port];
            }
            return ajax.apply(this, arguments);
        }
        ;
    }
    return $;
}));
/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
(function(global, factory) {
    if (typeof define == 'function' && define.amd) {
        define('ev-emitter/ev-emitter', factory);
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory();
    } else {
        global.EvEmitter = factory();
    }
}(typeof window != 'undefined' ? window : this, function() {
    function EvEmitter() {}
    var proto = EvEmitter.prototype;
    proto.on = function(eventName, listener) {
        if (!eventName || !listener) {
            return;
        }
        var events = this._events = this._events || {};
        var listeners = events[eventName] = events[eventName] || [];
        if (listeners.indexOf(listener) == -1) {
            listeners.push(listener);
        }
        return this;
    }
    ;
    proto.once = function(eventName, listener) {
        if (!eventName || !listener) {
            return;
        }
        this.on(eventName, listener);
        var onceEvents = this._onceEvents = this._onceEvents || {};
        var onceListeners = onceEvents[eventName] = onceEvents[eventName] || {};
        onceListeners[listener] = true;
        return this;
    }
    ;
    proto.off = function(eventName, listener) {
        var listeners = this._events && this._events[eventName];
        if (!listeners || !listeners.length) {
            return;
        }
        var index = listeners.indexOf(listener);
        if (index != -1) {
            listeners.splice(index, 1);
        }
        return this;
    }
    ;
    proto.emitEvent = function(eventName, args) {
        var listeners = this._events && this._events[eventName];
        if (!listeners || !listeners.length) {
            return;
        }
        listeners = listeners.slice(0);
        args = args || [];
        var onceListeners = this._onceEvents && this._onceEvents[eventName];
        for (var i = 0; i < listeners.length; i++) {
            var listener = listeners[i]
            var isOnce = onceListeners && onceListeners[listener];
            if (isOnce) {
                this.off(eventName, listener);
                delete onceListeners[listener];
            }
            listener.apply(this, args);
        }
        return this;
    }
    ;
    proto.allOff = function() {
        delete this._events;
        delete this._onceEvents;
    }
    ;
    return EvEmitter;
}));
/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
(function(window, factory) {
    'use strict';
    if (typeof define == 'function' && define.amd) {
        define(['ev-emitter/ev-emitter'], function(EvEmitter) {
            return factory(window, EvEmitter);
        });
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory(window, require('ev-emitter'));
    } else {
        window.imagesLoaded = factory(window, window.EvEmitter);
    }
}
)(typeof window !== 'undefined' ? window : this, function factory(window, EvEmitter) {
    var $ = window.jQuery;
    var console = window.console;
    function extend(a, b) {
        for (var prop in b) {
            a[prop] = b[prop];
        }
        return a;
    }
    var arraySlice = Array.prototype.slice;
    function makeArray(obj) {
        if (Array.isArray(obj)) {
            return obj;
        }
        var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
        if (isArrayLike) {
            return arraySlice.call(obj);
        }
        return [obj];
    }
    function ImagesLoaded(elem, options, onAlways) {
        if (!(this instanceof ImagesLoaded)) {
            return new ImagesLoaded(elem,options,onAlways);
        }
        var queryElem = elem;
        if (typeof elem == 'string') {
            queryElem = document.querySelectorAll(elem);
        }
        if (!queryElem) {
            console.error('Bad element for imagesLoaded ' + (queryElem || elem));
            return;
        }
        this.elements = makeArray(queryElem);
        this.options = extend({}, this.options);
        if (typeof options == 'function') {
            onAlways = options;
        } else {
            extend(this.options, options);
        }
        if (onAlways) {
            this.on('always', onAlways);
        }
        this.getImages();
        if ($) {
            this.jqDeferred = new $.Deferred();
        }
        setTimeout(this.check.bind(this));
    }
    ImagesLoaded.prototype = Object.create(EvEmitter.prototype);
    ImagesLoaded.prototype.options = {};
    ImagesLoaded.prototype.getImages = function() {
        this.images = [];
        this.elements.forEach(this.addElementImages, this);
    }
    ;
    ImagesLoaded.prototype.addElementImages = function(elem) {
        if (elem.nodeName == 'IMG') {
            this.addImage(elem);
        }
        if (this.options.background === true) {
            this.addElementBackgroundImages(elem);
        }
        var nodeType = elem.nodeType;
        if (!nodeType || !elementNodeTypes[nodeType]) {
            return;
        }
        var childImgs = elem.querySelectorAll('img');
        for (var i = 0; i < childImgs.length; i++) {
            var img = childImgs[i];
            this.addImage(img);
        }
        if (typeof this.options.background == 'string') {
            var children = elem.querySelectorAll(this.options.background);
            for (i = 0; i < children.length; i++) {
                var child = children[i];
                this.addElementBackgroundImages(child);
            }
        }
    }
    ;
    var elementNodeTypes = {
        1: true,
        9: true,
        11: true
    };
    ImagesLoaded.prototype.addElementBackgroundImages = function(elem) {
        var style = getComputedStyle(elem);
        if (!style) {
            return;
        }
        var reURL = /url\((['"])?(.*?)\1\)/gi;
        var matches = reURL.exec(style.backgroundImage);
        while (matches !== null) {
            var url = matches && matches[2];
            if (url) {
                this.addBackground(url, elem);
            }
            matches = reURL.exec(style.backgroundImage);
        }
    }
    ;
    ImagesLoaded.prototype.addImage = function(img) {
        var loadingImage = new LoadingImage(img);
        this.images.push(loadingImage);
    }
    ;
    ImagesLoaded.prototype.addBackground = function(url, elem) {
        var background = new Background(url,elem);
        this.images.push(background);
    }
    ;
    ImagesLoaded.prototype.check = function() {
        var _this = this;
        this.progressedCount = 0;
        this.hasAnyBroken = false;
        if (!this.images.length) {
            this.complete();
            return;
        }
        function onProgress(image, elem, message) {
            setTimeout(function() {
                _this.progress(image, elem, message);
            });
        }
        this.images.forEach(function(loadingImage) {
            loadingImage.once('progress', onProgress);
            loadingImage.check();
        });
    }
    ;
    ImagesLoaded.prototype.progress = function(image, elem, message) {
        this.progressedCount++;
        this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
        this.emitEvent('progress', [this, image, elem]);
        if (this.jqDeferred && this.jqDeferred.notify) {
            this.jqDeferred.notify(this, image);
        }
        if (this.progressedCount == this.images.length) {
            this.complete();
        }
        if (this.options.debug && console) {
            console.log('progress: ' + message, image, elem);
        }
    }
    ;
    ImagesLoaded.prototype.complete = function() {
        var eventName = this.hasAnyBroken ? 'fail' : 'done';
        this.isComplete = true;
        this.emitEvent(eventName, [this]);
        this.emitEvent('always', [this]);
        if (this.jqDeferred) {
            var jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
            this.jqDeferred[jqMethod](this);
        }
    }
    ;
    function LoadingImage(img) {
        this.img = img;
    }
    LoadingImage.prototype = Object.create(EvEmitter.prototype);
    LoadingImage.prototype.check = function() {
        var isComplete = this.getIsImageComplete();
        if (isComplete) {
            this.confirm(this.img.naturalWidth !== 0, 'naturalWidth');
            return;
        }
        this.proxyImage = new Image();
        this.proxyImage.addEventListener('load', this);
        this.proxyImage.addEventListener('error', this);
        this.img.addEventListener('load', this);
        this.img.addEventListener('error', this);
        this.proxyImage.src = this.img.src;
    }
    ;
    LoadingImage.prototype.getIsImageComplete = function() {
        return this.img.complete && this.img.naturalWidth;
    }
    ;
    LoadingImage.prototype.confirm = function(isLoaded, message) {
        this.isLoaded = isLoaded;
        this.emitEvent('progress', [this, this.img, message]);
    }
    ;
    LoadingImage.prototype.handleEvent = function(event) {
        var method = 'on' + event.type;
        if (this[method]) {
            this[method](event);
        }
    }
    ;
    LoadingImage.prototype.onload = function() {
        this.confirm(true, 'onload');
        this.unbindEvents();
    }
    ;
    LoadingImage.prototype.onerror = function() {
        this.confirm(false, 'onerror');
        this.unbindEvents();
    }
    ;
    LoadingImage.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener('load', this);
        this.proxyImage.removeEventListener('error', this);
        this.img.removeEventListener('load', this);
        this.img.removeEventListener('error', this);
    }
    ;
    function Background(url, element) {
        this.url = url;
        this.element = element;
        this.img = new Image();
    }
    Background.prototype = Object.create(LoadingImage.prototype);
    Background.prototype.check = function() {
        this.img.addEventListener('load', this);
        this.img.addEventListener('error', this);
        this.img.src = this.url;
        var isComplete = this.getIsImageComplete();
        if (isComplete) {
            this.confirm(this.img.naturalWidth !== 0, 'naturalWidth');
            this.unbindEvents();
        }
    }
    ;
    Background.prototype.unbindEvents = function() {
        this.img.removeEventListener('load', this);
        this.img.removeEventListener('error', this);
    }
    ;
    Background.prototype.confirm = function(isLoaded, message) {
        this.isLoaded = isLoaded;
        this.emitEvent('progress', [this, this.element, message]);
    }
    ;
    ImagesLoaded.makeJQueryPlugin = function(jQuery) {
        jQuery = jQuery || window.jQuery;
        if (!jQuery) {
            return;
        }
        $ = jQuery;
        $.fn.imagesLoaded = function(options, callback) {
            var instance = new ImagesLoaded(this,options,callback);
            return instance.jqDeferred.promise($(this));
        }
        ;
    }
    ;
    ImagesLoaded.makeJQueryPlugin();
    return ImagesLoaded;
});
/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define('jquery-bridget/jquery-bridget', ['jquery'], function(jQuery) {
            return factory(window, jQuery);
        });
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory(window, require('jquery'));
    } else {
        window.jQueryBridget = factory(window, window.jQuery);
    }
}(window, function factory(window, jQuery) {
    'use strict';
    var arraySlice = Array.prototype.slice;
    var console = window.console;
    var logError = typeof console == 'undefined' ? function() {}
    : function(message) {
        console.error(message);
    }
    ;
    function jQueryBridget(namespace, PluginClass, $) {
        $ = $ || jQuery || window.jQuery;
        if (!$) {
            return;
        }
        if (!PluginClass.prototype.option) {
            PluginClass.prototype.option = function(opts) {
                if (!$.isPlainObject(opts)) {
                    return;
                }
                this.options = $.extend(true, this.options, opts);
            }
            ;
        }
        $.fn[namespace] = function(arg0) {
            if (typeof arg0 == 'string') {
                var args = arraySlice.call(arguments, 1);
                return methodCall(this, arg0, args);
            }
            plainCall(this, arg0);
            return this;
        }
        ;
        function methodCall($elems, methodName, args) {
            var returnValue;
            var pluginMethodStr = '$().' + namespace + '("' + methodName + '")';
            $elems.each(function(i, elem) {
                var instance = $.data(elem, namespace);
                if (!instance) {
                    logError(namespace + ' not initialized. Cannot call methods, i.e. ' + pluginMethodStr);
                    return;
                }
                var method = instance[methodName];
                if (!method || methodName.charAt(0) == '_') {
                    logError(pluginMethodStr + ' is not a valid method');
                    return;
                }
                var value = method.apply(instance, args);
                returnValue = returnValue === undefined ? value : returnValue;
            });
            return returnValue !== undefined ? returnValue : $elems;
        }
        function plainCall($elems, options) {
            $elems.each(function(i, elem) {
                var instance = $.data(elem, namespace);
                if (instance) {
                    instance.option(options);
                    instance._init();
                } else {
                    instance = new PluginClass(elem,options);
                    $.data(elem, namespace, instance);
                }
            });
        }
        updateJQuery($);
    }
    function updateJQuery($) {
        if (!$ || ($ && $.bridget)) {
            return;
        }
        $.bridget = jQueryBridget;
    }
    updateJQuery(jQuery || window.jQuery);
    return jQueryBridget;
}));
(function(global, factory) {
    if (typeof define == 'function' && define.amd) {
        define('ev-emitter/ev-emitter', factory);
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory();
    } else {
        global.EvEmitter = factory();
    }
}(typeof window != 'undefined' ? window : this, function() {
    function EvEmitter() {}
    var proto = EvEmitter.prototype;
    proto.on = function(eventName, listener) {
        if (!eventName || !listener) {
            return;
        }
        var events = this._events = this._events || {};
        var listeners = events[eventName] = events[eventName] || [];
        if (listeners.indexOf(listener) == -1) {
            listeners.push(listener);
        }
        return this;
    }
    ;
    proto.once = function(eventName, listener) {
        if (!eventName || !listener) {
            return;
        }
        this.on(eventName, listener);
        var onceEvents = this._onceEvents = this._onceEvents || {};
        var onceListeners = onceEvents[eventName] = onceEvents[eventName] || {};
        onceListeners[listener] = true;
        return this;
    }
    ;
    proto.off = function(eventName, listener) {
        var listeners = this._events && this._events[eventName];
        if (!listeners || !listeners.length) {
            return;
        }
        var index = listeners.indexOf(listener);
        if (index != -1) {
            listeners.splice(index, 1);
        }
        return this;
    }
    ;
    proto.emitEvent = function(eventName, args) {
        var listeners = this._events && this._events[eventName];
        if (!listeners || !listeners.length) {
            return;
        }
        listeners = listeners.slice(0);
        args = args || [];
        var onceListeners = this._onceEvents && this._onceEvents[eventName];
        for (var i = 0; i < listeners.length; i++) {
            var listener = listeners[i]
            var isOnce = onceListeners && onceListeners[listener];
            if (isOnce) {
                this.off(eventName, listener);
                delete onceListeners[listener];
            }
            listener.apply(this, args);
        }
        return this;
    }
    ;
    proto.allOff = function() {
        delete this._events;
        delete this._onceEvents;
    }
    ;
    return EvEmitter;
}));
/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define('get-size/get-size', factory);
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory();
    } else {
        window.getSize = factory();
    }
}
)(window, function factory() {
    'use strict';
    function getStyleSize(value) {
        var num = parseFloat(value);
        var isValid = value.indexOf('%') == -1 && !isNaN(num);
        return isValid && num;
    }
    function noop() {}
    var logError = typeof console == 'undefined' ? noop : function(message) {
        console.error(message);
    }
    ;
    var measurements = ['paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom', 'marginLeft', 'marginRight', 'marginTop', 'marginBottom', 'borderLeftWidth', 'borderRightWidth', 'borderTopWidth', 'borderBottomWidth'];
    var measurementsLength = measurements.length;
    function getZeroSize() {
        var size = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        };
        for (var i = 0; i < measurementsLength; i++) {
            var measurement = measurements[i];
            size[measurement] = 0;
        }
        return size;
    }
    function getStyle(elem) {
        var style = getComputedStyle(elem);
        if (!style) {
            logError('Style returned ' + style + '. Are you running this code in a hidden iframe on Firefox? ' + 'See https://bit.ly/getsizebug1');
        }
        return style;
    }
    var isSetup = false;
    var isBoxSizeOuter;
    function setup() {
        if (isSetup) {
            return;
        }
        isSetup = true;
        var div = document.createElement('div');
        div.style.width = '200px';
        div.style.padding = '1px 2px 3px 4px';
        div.style.borderStyle = 'solid';
        div.style.borderWidth = '1px 2px 3px 4px';
        div.style.boxSizing = 'border-box';
        var body = document.body || document.documentElement;
        body.appendChild(div);
        var style = getStyle(div);
        isBoxSizeOuter = Math.round(getStyleSize(style.width)) == 200;
        getSize.isBoxSizeOuter = isBoxSizeOuter;
        body.removeChild(div);
    }
    function getSize(elem) {
        setup();
        if (typeof elem == 'string') {
            elem = document.querySelector(elem);
        }
        if (!elem || typeof elem != 'object' || !elem.nodeType) {
            return;
        }
        var style = getStyle(elem);
        if (style.display == 'none') {
            return getZeroSize();
        }
        var size = {};
        size.width = elem.offsetWidth;
        size.height = elem.offsetHeight;
        var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';
        for (var i = 0; i < measurementsLength; i++) {
            var measurement = measurements[i];
            var value = style[measurement];
            var num = parseFloat(value);
            size[measurement] = !isNaN(num) ? num : 0;
        }
        var paddingWidth = size.paddingLeft + size.paddingRight;
        var paddingHeight = size.paddingTop + size.paddingBottom;
        var marginWidth = size.marginLeft + size.marginRight;
        var marginHeight = size.marginTop + size.marginBottom;
        var borderWidth = size.borderLeftWidth + size.borderRightWidth;
        var borderHeight = size.borderTopWidth + size.borderBottomWidth;
        var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;
        var styleWidth = getStyleSize(style.width);
        if (styleWidth !== false) {
            size.width = styleWidth + (isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth);
        }
        var styleHeight = getStyleSize(style.height);
        if (styleHeight !== false) {
            size.height = styleHeight + (isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight);
        }
        size.innerWidth = size.width - (paddingWidth + borderWidth);
        size.innerHeight = size.height - (paddingHeight + borderHeight);
        size.outerWidth = size.width + marginWidth;
        size.outerHeight = size.height + marginHeight;
        return size;
    }
    return getSize;
});
(function(window, factory) {
    'use strict';
    if (typeof define == 'function' && define.amd) {
        define('desandro-matches-selector/matches-selector', factory);
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory();
    } else {
        window.matchesSelector = factory();
    }
}(window, function factory() {
    'use strict';
    var matchesMethod = (function() {
        var ElemProto = window.Element.prototype;
        if (ElemProto.matches) {
            return 'matches';
        }
        if (ElemProto.matchesSelector) {
            return 'matchesSelector';
        }
        var prefixes = ['webkit', 'moz', 'ms', 'o'];
        for (var i = 0; i < prefixes.length; i++) {
            var prefix = prefixes[i];
            var method = prefix + 'MatchesSelector';
            if (ElemProto[method]) {
                return method;
            }
        }
    }
    )();
    return function matchesSelector(elem, selector) {
        return elem[matchesMethod](selector);
    }
    ;
}));
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define('fizzy-ui-utils/utils', ['desandro-matches-selector/matches-selector'], function(matchesSelector) {
            return factory(window, matchesSelector);
        });
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory(window, require('desandro-matches-selector'));
    } else {
        window.fizzyUIUtils = factory(window, window.matchesSelector);
    }
}(window, function factory(window, matchesSelector) {
    var utils = {};
    utils.extend = function(a, b) {
        for (var prop in b) {
            a[prop] = b[prop];
        }
        return a;
    }
    ;
    utils.modulo = function(num, div) {
        return ((num % div) + div) % div;
    }
    ;
    var arraySlice = Array.prototype.slice;
    utils.makeArray = function(obj) {
        if (Array.isArray(obj)) {
            return obj;
        }
        if (obj === null || obj === undefined) {
            return [];
        }
        var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
        if (isArrayLike) {
            return arraySlice.call(obj);
        }
        return [obj];
    }
    ;
    utils.removeFrom = function(ary, obj) {
        var index = ary.indexOf(obj);
        if (index != -1) {
            ary.splice(index, 1);
        }
    }
    ;
    utils.getParent = function(elem, selector) {
        while (elem.parentNode && elem != document.body) {
            elem = elem.parentNode;
            if (matchesSelector(elem, selector)) {
                return elem;
            }
        }
    }
    ;
    utils.getQueryElement = function(elem) {
        if (typeof elem == 'string') {
            return document.querySelector(elem);
        }
        return elem;
    }
    ;
    utils.handleEvent = function(event) {
        var method = 'on' + event.type;
        if (this[method]) {
            this[method](event);
        }
    }
    ;
    utils.filterFindElements = function(elems, selector) {
        elems = utils.makeArray(elems);
        var ffElems = [];
        elems.forEach(function(elem) {
            if (!(elem instanceof HTMLElement)) {
                return;
            }
            if (!selector) {
                ffElems.push(elem);
                return;
            }
            if (matchesSelector(elem, selector)) {
                ffElems.push(elem);
            }
            var childElems = elem.querySelectorAll(selector);
            for (var i = 0; i < childElems.length; i++) {
                ffElems.push(childElems[i]);
            }
        });
        return ffElems;
    }
    ;
    utils.debounceMethod = function(_class, methodName, threshold) {
        threshold = threshold || 100;
        var method = _class.prototype[methodName];
        var timeoutName = methodName + 'Timeout';
        _class.prototype[methodName] = function() {
            var timeout = this[timeoutName];
            clearTimeout(timeout);
            var args = arguments;
            var _this = this;
            this[timeoutName] = setTimeout(function() {
                method.apply(_this, args);
                delete _this[timeoutName];
            }, threshold);
        }
        ;
    }
    ;
    utils.docReady = function(callback) {
        var readyState = document.readyState;
        if (readyState == 'complete' || readyState == 'interactive') {
            setTimeout(callback);
        } else {
            document.addEventListener('DOMContentLoaded', callback);
        }
    }
    ;
    utils.toDashed = function(str) {
        return str.replace(/(.)([A-Z])/g, function(match, $1, $2) {
            return $1 + '-' + $2;
        }).toLowerCase();
    }
    ;
    var console = window.console;
    utils.htmlInit = function(WidgetClass, namespace) {
        utils.docReady(function() {
            var dashedNamespace = utils.toDashed(namespace);
            var dataAttr = 'data-' + dashedNamespace;
            var dataAttrElems = document.querySelectorAll('[' + dataAttr + ']');
            var jsDashElems = document.querySelectorAll('.js-' + dashedNamespace);
            var elems = utils.makeArray(dataAttrElems).concat(utils.makeArray(jsDashElems));
            var dataOptionsAttr = dataAttr + '-options';
            var jQuery = window.jQuery;
            elems.forEach(function(elem) {
                var attr = elem.getAttribute(dataAttr) || elem.getAttribute(dataOptionsAttr);
                var options;
                try {
                    options = attr && JSON.parse(attr);
                } catch (error) {
                    if (console) {
                        console.error('Error parsing ' + dataAttr + ' on ' + elem.className + ': ' + error);
                    }
                    return;
                }
                var instance = new WidgetClass(elem,options);
                if (jQuery) {
                    jQuery.data(elem, namespace, instance);
                }
            });
        });
    }
    ;
    return utils;
}));
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define('outlayer/item', ['ev-emitter/ev-emitter', 'get-size/get-size'], factory);
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory(require('ev-emitter'), require('get-size'));
    } else {
        window.Outlayer = {};
        window.Outlayer.Item = factory(window.EvEmitter, window.getSize);
    }
}(window, function factory(EvEmitter, getSize) {
    'use strict';
    function isEmptyObj(obj) {
        for (var prop in obj) {
            return false;
        }
        prop = null;
        return true;
    }
    var docElemStyle = document.documentElement.style;
    var transitionProperty = typeof docElemStyle.transition == 'string' ? 'transition' : 'WebkitTransition';
    var transformProperty = typeof docElemStyle.transform == 'string' ? 'transform' : 'WebkitTransform';
    var transitionEndEvent = {
        WebkitTransition: 'webkitTransitionEnd',
        transition: 'transitionend'
    }[transitionProperty];
    var vendorProperties = {
        transform: transformProperty,
        transition: transitionProperty,
        transitionDuration: transitionProperty + 'Duration',
        transitionProperty: transitionProperty + 'Property',
        transitionDelay: transitionProperty + 'Delay'
    };
    function Item(element, layout) {
        if (!element) {
            return;
        }
        this.element = element;
        this.layout = layout;
        this.position = {
            x: 0,
            y: 0
        };
        this._create();
    }
    var proto = Item.prototype = Object.create(EvEmitter.prototype);
    proto.constructor = Item;
    proto._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        };
        this.css({
            position: 'absolute'
        });
    }
    ;
    proto.handleEvent = function(event) {
        var method = 'on' + event.type;
        if (this[method]) {
            this[method](event);
        }
    }
    ;
    proto.getSize = function() {
        this.size = getSize(this.element);
    }
    ;
    proto.css = function(style) {
        var elemStyle = this.element.style;
        for (var prop in style) {
            var supportedProp = vendorProperties[prop] || prop;
            elemStyle[supportedProp] = style[prop];
        }
    }
    ;
    proto.getPosition = function() {
        var style = getComputedStyle(this.element);
        var isOriginLeft = this.layout._getOption('originLeft');
        var isOriginTop = this.layout._getOption('originTop');
        var xValue = style[isOriginLeft ? 'left' : 'right'];
        var yValue = style[isOriginTop ? 'top' : 'bottom'];
        var x = parseFloat(xValue);
        var y = parseFloat(yValue);
        var layoutSize = this.layout.size;
        if (xValue.indexOf('%') != -1) {
            x = (x / 100) * layoutSize.width;
        }
        if (yValue.indexOf('%') != -1) {
            y = (y / 100) * layoutSize.height;
        }
        x = isNaN(x) ? 0 : x;
        y = isNaN(y) ? 0 : y;
        x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
        y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;
        this.position.x = x;
        this.position.y = y;
    }
    ;
    proto.layoutPosition = function() {
        var layoutSize = this.layout.size;
        var style = {};
        var isOriginLeft = this.layout._getOption('originLeft');
        var isOriginTop = this.layout._getOption('originTop');
        var xPadding = isOriginLeft ? 'paddingLeft' : 'paddingRight';
        var xProperty = isOriginLeft ? 'left' : 'right';
        var xResetProperty = isOriginLeft ? 'right' : 'left';
        var x = this.position.x + layoutSize[xPadding];
        style[xProperty] = this.getXValue(x);
        style[xResetProperty] = '';
        var yPadding = isOriginTop ? 'paddingTop' : 'paddingBottom';
        var yProperty = isOriginTop ? 'top' : 'bottom';
        var yResetProperty = isOriginTop ? 'bottom' : 'top';
        var y = this.position.y + layoutSize[yPadding];
        style[yProperty] = this.getYValue(y);
        style[yResetProperty] = '';
        this.css(style);
        this.emitEvent('layout', [this]);
    }
    ;
    proto.getXValue = function(x) {
        var isHorizontal = this.layout._getOption('horizontal');
        return this.layout.options.percentPosition && !isHorizontal ? ((x / this.layout.size.width) * 100) + '%' : x + 'px';
    }
    ;
    proto.getYValue = function(y) {
        var isHorizontal = this.layout._getOption('horizontal');
        return this.layout.options.percentPosition && isHorizontal ? ((y / this.layout.size.height) * 100) + '%' : y + 'px';
    }
    ;
    proto._transitionTo = function(x, y) {
        this.getPosition();
        var curX = this.position.x;
        var curY = this.position.y;
        var didNotMove = x == this.position.x && y == this.position.y;
        this.setPosition(x, y);
        if (didNotMove && !this.isTransitioning) {
            this.layoutPosition();
            return;
        }
        var transX = x - curX;
        var transY = y - curY;
        var transitionStyle = {};
        transitionStyle.transform = this.getTranslate(transX, transY);
        this.transition({
            to: transitionStyle,
            onTransitionEnd: {
                transform: this.layoutPosition
            },
            isCleaning: true
        });
    }
    ;
    proto.getTranslate = function(x, y) {
        var isOriginLeft = this.layout._getOption('originLeft');
        var isOriginTop = this.layout._getOption('originTop');
        x = isOriginLeft ? x : -x;
        y = isOriginTop ? y : -y;
        return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
    }
    ;
    proto.goTo = function(x, y) {
        this.setPosition(x, y);
        this.layoutPosition();
    }
    ;
    proto.moveTo = proto._transitionTo;
    proto.setPosition = function(x, y) {
        this.position.x = parseFloat(x);
        this.position.y = parseFloat(y);
    }
    ;
    proto._nonTransition = function(args) {
        this.css(args.to);
        if (args.isCleaning) {
            this._removeStyles(args.to);
        }
        for (var prop in args.onTransitionEnd) {
            args.onTransitionEnd[prop].call(this);
        }
    }
    ;
    proto.transition = function(args) {
        if (!parseFloat(this.layout.options.transitionDuration)) {
            this._nonTransition(args);
            return;
        }
        var _transition = this._transn;
        for (var prop in args.onTransitionEnd) {
            _transition.onEnd[prop] = args.onTransitionEnd[prop];
        }
        for (prop in args.to) {
            _transition.ingProperties[prop] = true;
            if (args.isCleaning) {
                _transition.clean[prop] = true;
            }
        }
        if (args.from) {
            this.css(args.from);
            var h = this.element.offsetHeight;
            h = null;
        }
        this.enableTransition(args.to);
        this.css(args.to);
        this.isTransitioning = true;
    }
    ;
    function toDashedAll(str) {
        return str.replace(/([A-Z])/g, function($1) {
            return '-' + $1.toLowerCase();
        });
    }
    var transitionProps = 'opacity,' + toDashedAll(transformProperty);
    proto.enableTransition = function() {
        if (this.isTransitioning) {
            return;
        }
        var duration = this.layout.options.transitionDuration;
        duration = typeof duration == 'number' ? duration + 'ms' : duration;
        this.css({
            transitionProperty: transitionProps,
            transitionDuration: duration,
            transitionDelay: this.staggerDelay || 0
        });
        this.element.addEventListener(transitionEndEvent, this, false);
    }
    ;
    proto.onwebkitTransitionEnd = function(event) {
        this.ontransitionend(event);
    }
    ;
    proto.onotransitionend = function(event) {
        this.ontransitionend(event);
    }
    ;
    var dashedVendorProperties = {
        '-webkit-transform': 'transform'
    };
    proto.ontransitionend = function(event) {
        if (event.target !== this.element) {
            return;
        }
        var _transition = this._transn;
        var propertyName = dashedVendorProperties[event.propertyName] || event.propertyName;
        delete _transition.ingProperties[propertyName];
        if (isEmptyObj(_transition.ingProperties)) {
            this.disableTransition();
        }
        if (propertyName in _transition.clean) {
            this.element.style[event.propertyName] = '';
            delete _transition.clean[propertyName];
        }
        if (propertyName in _transition.onEnd) {
            var onTransitionEnd = _transition.onEnd[propertyName];
            onTransitionEnd.call(this);
            delete _transition.onEnd[propertyName];
        }
        this.emitEvent('transitionEnd', [this]);
    }
    ;
    proto.disableTransition = function() {
        this.removeTransitionStyles();
        this.element.removeEventListener(transitionEndEvent, this, false);
        this.isTransitioning = false;
    }
    ;
    proto._removeStyles = function(style) {
        var cleanStyle = {};
        for (var prop in style) {
            cleanStyle[prop] = '';
        }
        this.css(cleanStyle);
    }
    ;
    var cleanTransitionStyle = {
        transitionProperty: '',
        transitionDuration: '',
        transitionDelay: ''
    };
    proto.removeTransitionStyles = function() {
        this.css(cleanTransitionStyle);
    }
    ;
    proto.stagger = function(delay) {
        delay = isNaN(delay) ? 0 : delay;
        this.staggerDelay = delay + 'ms';
    }
    ;
    proto.removeElem = function() {
        this.element.parentNode.removeChild(this.element);
        this.css({
            display: ''
        });
        this.emitEvent('remove', [this]);
    }
    ;
    proto.remove = function() {
        if (!transitionProperty || !parseFloat(this.layout.options.transitionDuration)) {
            this.removeElem();
            return;
        }
        this.once('transitionEnd', function() {
            this.removeElem();
        });
        this.hide();
    }
    ;
    proto.reveal = function() {
        delete this.isHidden;
        this.css({
            display: ''
        });
        var options = this.layout.options;
        var onTransitionEnd = {};
        var transitionEndProperty = this.getHideRevealTransitionEndProperty('visibleStyle');
        onTransitionEnd[transitionEndProperty] = this.onRevealTransitionEnd;
        this.transition({
            from: options.hiddenStyle,
            to: options.visibleStyle,
            isCleaning: true,
            onTransitionEnd: onTransitionEnd
        });
    }
    ;
    proto.onRevealTransitionEnd = function() {
        if (!this.isHidden) {
            this.emitEvent('reveal');
        }
    }
    ;
    proto.getHideRevealTransitionEndProperty = function(styleProperty) {
        var optionStyle = this.layout.options[styleProperty];
        if (optionStyle.opacity) {
            return 'opacity';
        }
        for (var prop in optionStyle) {
            return prop;
        }
    }
    ;
    proto.hide = function() {
        this.isHidden = true;
        this.css({
            display: ''
        });
        var options = this.layout.options;
        var onTransitionEnd = {};
        var transitionEndProperty = this.getHideRevealTransitionEndProperty('hiddenStyle');
        onTransitionEnd[transitionEndProperty] = this.onHideTransitionEnd;
        this.transition({
            from: options.visibleStyle,
            to: options.hiddenStyle,
            isCleaning: true,
            onTransitionEnd: onTransitionEnd
        });
    }
    ;
    proto.onHideTransitionEnd = function() {
        if (this.isHidden) {
            this.css({
                display: 'none'
            });
            this.emitEvent('hide');
        }
    }
    ;
    proto.destroy = function() {
        this.css({
            position: '',
            left: '',
            right: '',
            top: '',
            bottom: '',
            transition: '',
            transform: ''
        });
    }
    ;
    return Item;
}));
/*!
 * Outlayer v2.1.1
 * the brains and guts of a layout library
 * MIT license
 */
(function(window, factory) {
    'use strict';
    if (typeof define == 'function' && define.amd) {
        define('outlayer/outlayer', ['ev-emitter/ev-emitter', 'get-size/get-size', 'fizzy-ui-utils/utils', './item'], function(EvEmitter, getSize, utils, Item) {
            return factory(window, EvEmitter, getSize, utils, Item);
        });
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory(window, require('ev-emitter'), require('get-size'), require('fizzy-ui-utils'), require('./item'));
    } else {
        window.Outlayer = factory(window, window.EvEmitter, window.getSize, window.fizzyUIUtils, window.Outlayer.Item);
    }
}(window, function factory(window, EvEmitter, getSize, utils, Item) {
    'use strict';
    var console = window.console;
    var jQuery = window.jQuery;
    var noop = function() {};
    var GUID = 0;
    var instances = {};
    function Outlayer(element, options) {
        var queryElement = utils.getQueryElement(element);
        if (!queryElement) {
            if (console) {
                console.error('Bad element for ' + this.constructor.namespace + ': ' + (queryElement || element));
            }
            return;
        }
        this.element = queryElement;
        if (jQuery) {
            this.$element = jQuery(this.element);
        }
        this.options = utils.extend({}, this.constructor.defaults);
        this.option(options);
        var id = ++GUID;
        this.element.outlayerGUID = id;
        instances[id] = this;
        this._create();
        var isInitLayout = this._getOption('initLayout');
        if (isInitLayout) {
            this.layout();
        }
    }
    Outlayer.namespace = 'outlayer';
    Outlayer.Item = Item;
    Outlayer.defaults = {
        containerStyle: {
            position: 'relative'
        },
        initLayout: true,
        originLeft: true,
        originTop: true,
        resize: true,
        resizeContainer: true,
        transitionDuration: '0.4s',
        hiddenStyle: {
            opacity: 0,
            transform: 'scale(0.001)'
        },
        visibleStyle: {
            opacity: 1,
            transform: 'scale(1)'
        }
    };
    var proto = Outlayer.prototype;
    utils.extend(proto, EvEmitter.prototype);
    proto.option = function(opts) {
        utils.extend(this.options, opts);
    }
    ;
    proto._getOption = function(option) {
        var oldOption = this.constructor.compatOptions[option];
        return oldOption && this.options[oldOption] !== undefined ? this.options[oldOption] : this.options[option];
    }
    ;
    Outlayer.compatOptions = {
        initLayout: 'isInitLayout',
        horizontal: 'isHorizontal',
        layoutInstant: 'isLayoutInstant',
        originLeft: 'isOriginLeft',
        originTop: 'isOriginTop',
        resize: 'isResizeBound',
        resizeContainer: 'isResizingContainer'
    };
    proto._create = function() {
        this.reloadItems();
        this.stamps = [];
        this.stamp(this.options.stamp);
        utils.extend(this.element.style, this.options.containerStyle);
        var canBindResize = this._getOption('resize');
        if (canBindResize) {
            this.bindResize();
        }
    }
    ;
    proto.reloadItems = function() {
        this.items = this._itemize(this.element.children);
    }
    ;
    proto._itemize = function(elems) {
        var itemElems = this._filterFindItemElements(elems);
        var Item = this.constructor.Item;
        var items = [];
        for (var i = 0; i < itemElems.length; i++) {
            var elem = itemElems[i];
            var item = new Item(elem,this);
            items.push(item);
        }
        return items;
    }
    ;
    proto._filterFindItemElements = function(elems) {
        return utils.filterFindElements(elems, this.options.itemSelector);
    }
    ;
    proto.getItemElements = function() {
        return this.items.map(function(item) {
            return item.element;
        });
    }
    ;
    proto.layout = function() {
        this._resetLayout();
        this._manageStamps();
        var layoutInstant = this._getOption('layoutInstant');
        var isInstant = layoutInstant !== undefined ? layoutInstant : !this._isLayoutInited;
        this.layoutItems(this.items, isInstant);
        this._isLayoutInited = true;
    }
    ;
    proto._init = proto.layout;
    proto._resetLayout = function() {
        this.getSize();
    }
    ;
    proto.getSize = function() {
        this.size = getSize(this.element);
    }
    ;
    proto._getMeasurement = function(measurement, size) {
        var option = this.options[measurement];
        var elem;
        if (!option) {
            this[measurement] = 0;
        } else {
            if (typeof option == 'string') {
                elem = this.element.querySelector(option);
            } else if (option instanceof HTMLElement) {
                elem = option;
            }
            this[measurement] = elem ? getSize(elem)[size] : option;
        }
    }
    ;
    proto.layoutItems = function(items, isInstant) {
        items = this._getItemsForLayout(items);
        this._layoutItems(items, isInstant);
        this._postLayout();
    }
    ;
    proto._getItemsForLayout = function(items) {
        return items.filter(function(item) {
            return !item.isIgnored;
        });
    }
    ;
    proto._layoutItems = function(items, isInstant) {
        this._emitCompleteOnItems('layout', items);
        if (!items || !items.length) {
            return;
        }
        var queue = [];
        items.forEach(function(item) {
            var position = this._getItemLayoutPosition(item);
            position.item = item;
            position.isInstant = isInstant || item.isLayoutInstant;
            queue.push(position);
        }, this);
        this._processLayoutQueue(queue);
    }
    ;
    proto._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        };
    }
    ;
    proto._processLayoutQueue = function(queue) {
        this.updateStagger();
        queue.forEach(function(obj, i) {
            this._positionItem(obj.item, obj.x, obj.y, obj.isInstant, i);
        }, this);
    }
    ;
    proto.updateStagger = function() {
        var stagger = this.options.stagger;
        if (stagger === null || stagger === undefined) {
            this.stagger = 0;
            return;
        }
        this.stagger = getMilliseconds(stagger);
        return this.stagger;
    }
    ;
    proto._positionItem = function(item, x, y, isInstant, i) {
        if (isInstant) {
            item.goTo(x, y);
        } else {
            item.stagger(i * this.stagger);
            item.moveTo(x, y);
        }
    }
    ;
    proto._postLayout = function() {
        this.resizeContainer();
    }
    ;
    proto.resizeContainer = function() {
        var isResizingContainer = this._getOption('resizeContainer');
        if (!isResizingContainer) {
            return;
        }
        var size = this._getContainerSize();
        if (size) {
            this._setContainerMeasure(size.width, true);
            this._setContainerMeasure(size.height, false);
        }
    }
    ;
    proto._getContainerSize = noop;
    proto._setContainerMeasure = function(measure, isWidth) {
        if (measure === undefined) {
            return;
        }
        var elemSize = this.size;
        if (elemSize.isBorderBox) {
            measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight + elemSize.borderLeftWidth + elemSize.borderRightWidth : elemSize.paddingBottom + elemSize.paddingTop + elemSize.borderTopWidth + elemSize.borderBottomWidth;
        }
        measure = Math.max(measure, 0);
        this.element.style[isWidth ? 'width' : 'height'] = measure + 'px';
    }
    ;
    proto._emitCompleteOnItems = function(eventName, items) {
        var _this = this;
        function onComplete() {
            _this.dispatchEvent(eventName + 'Complete', null, [items]);
        }
        var count = items.length;
        if (!items || !count) {
            onComplete();
            return;
        }
        var doneCount = 0;
        function tick() {
            doneCount++;
            if (doneCount == count) {
                onComplete();
            }
        }
        items.forEach(function(item) {
            item.once(eventName, tick);
        });
    }
    ;
    proto.dispatchEvent = function(type, event, args) {
        var emitArgs = event ? [event].concat(args) : args;
        this.emitEvent(type, emitArgs);
        if (jQuery) {
            this.$element = this.$element || jQuery(this.element);
            if (event) {
                var $event = jQuery.Event(event);
                $event.type = type;
                this.$element.trigger($event, args);
            } else {
                this.$element.trigger(type, args);
            }
        }
    }
    ;
    proto.ignore = function(elem) {
        var item = this.getItem(elem);
        if (item) {
            item.isIgnored = true;
        }
    }
    ;
    proto.unignore = function(elem) {
        var item = this.getItem(elem);
        if (item) {
            delete item.isIgnored;
        }
    }
    ;
    proto.stamp = function(elems) {
        elems = this._find(elems);
        if (!elems) {
            return;
        }
        this.stamps = this.stamps.concat(elems);
        elems.forEach(this.ignore, this);
    }
    ;
    proto.unstamp = function(elems) {
        elems = this._find(elems);
        if (!elems) {
            return;
        }
        elems.forEach(function(elem) {
            utils.removeFrom(this.stamps, elem);
            this.unignore(elem);
        }, this);
    }
    ;
    proto._find = function(elems) {
        if (!elems) {
            return;
        }
        if (typeof elems == 'string') {
            elems = this.element.querySelectorAll(elems);
        }
        elems = utils.makeArray(elems);
        return elems;
    }
    ;
    proto._manageStamps = function() {
        if (!this.stamps || !this.stamps.length) {
            return;
        }
        this._getBoundingRect();
        this.stamps.forEach(this._manageStamp, this);
    }
    ;
    proto._getBoundingRect = function() {
        var boundingRect = this.element.getBoundingClientRect();
        var size = this.size;
        this._boundingRect = {
            left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
            top: boundingRect.top + size.paddingTop + size.borderTopWidth,
            right: boundingRect.right - (size.paddingRight + size.borderRightWidth),
            bottom: boundingRect.bottom - (size.paddingBottom + size.borderBottomWidth)
        };
    }
    ;
    proto._manageStamp = noop;
    proto._getElementOffset = function(elem) {
        var boundingRect = elem.getBoundingClientRect();
        var thisRect = this._boundingRect;
        var size = getSize(elem);
        var offset = {
            left: boundingRect.left - thisRect.left - size.marginLeft,
            top: boundingRect.top - thisRect.top - size.marginTop,
            right: thisRect.right - boundingRect.right - size.marginRight,
            bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
        };
        return offset;
    }
    ;
    proto.handleEvent = utils.handleEvent;
    proto.bindResize = function() {
        window.addEventListener('resize', this);
        this.isResizeBound = true;
    }
    ;
    proto.unbindResize = function() {
        window.removeEventListener('resize', this);
        this.isResizeBound = false;
    }
    ;
    proto.onresize = function() {
        this.resize();
    }
    ;
    utils.debounceMethod(Outlayer, 'onresize', 100);
    proto.resize = function() {
        if (!this.isResizeBound || !this.needsResizeLayout()) {
            return;
        }
        this.layout();
    }
    ;
    proto.needsResizeLayout = function() {
        var size = getSize(this.element);
        var hasSizes = this.size && size;
        return hasSizes && size.innerWidth !== this.size.innerWidth;
    }
    ;
    proto.addItems = function(elems) {
        var items = this._itemize(elems);
        if (items.length) {
            this.items = this.items.concat(items);
        }
        return items;
    }
    ;
    proto.appended = function(elems) {
        var items = this.addItems(elems);
        if (!items.length) {
            return;
        }
        this.layoutItems(items, true);
        this.reveal(items);
    }
    ;
    proto.prepended = function(elems) {
        var items = this._itemize(elems);
        if (!items.length) {
            return;
        }
        var previousItems = this.items.slice(0);
        this.items = items.concat(previousItems);
        this._resetLayout();
        this._manageStamps();
        this.layoutItems(items, true);
        this.reveal(items);
        this.layoutItems(previousItems);
    }
    ;
    proto.reveal = function(items) {
        this._emitCompleteOnItems('reveal', items);
        if (!items || !items.length) {
            return;
        }
        var stagger = this.updateStagger();
        items.forEach(function(item, i) {
            item.stagger(i * stagger);
            item.reveal();
        });
    }
    ;
    proto.hide = function(items) {
        this._emitCompleteOnItems('hide', items);
        if (!items || !items.length) {
            return;
        }
        var stagger = this.updateStagger();
        items.forEach(function(item, i) {
            item.stagger(i * stagger);
            item.hide();
        });
    }
    ;
    proto.revealItemElements = function(elems) {
        var items = this.getItems(elems);
        this.reveal(items);
    }
    ;
    proto.hideItemElements = function(elems) {
        var items = this.getItems(elems);
        this.hide(items);
    }
    ;
    proto.getItem = function(elem) {
        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            if (item.element == elem) {
                return item;
            }
        }
    }
    ;
    proto.getItems = function(elems) {
        elems = utils.makeArray(elems);
        var items = [];
        elems.forEach(function(elem) {
            var item = this.getItem(elem);
            if (item) {
                items.push(item);
            }
        }, this);
        return items;
    }
    ;
    proto.remove = function(elems) {
        var removeItems = this.getItems(elems);
        this._emitCompleteOnItems('remove', removeItems);
        if (!removeItems || !removeItems.length) {
            return;
        }
        removeItems.forEach(function(item) {
            item.remove();
            utils.removeFrom(this.items, item);
        }, this);
    }
    ;
    proto.destroy = function() {
        var style = this.element.style;
        style.height = '';
        style.position = '';
        style.width = '';
        this.items.forEach(function(item) {
            item.destroy();
        });
        this.unbindResize();
        var id = this.element.outlayerGUID;
        delete instances[id];
        delete this.element.outlayerGUID;
        if (jQuery) {
            jQuery.removeData(this.element, this.constructor.namespace);
        }
    }
    ;
    Outlayer.data = function(elem) {
        elem = utils.getQueryElement(elem);
        var id = elem && elem.outlayerGUID;
        return id && instances[id];
    }
    ;
    Outlayer.create = function(namespace, options) {
        var Layout = subclass(Outlayer);
        Layout.defaults = utils.extend({}, Outlayer.defaults);
        utils.extend(Layout.defaults, options);
        Layout.compatOptions = utils.extend({}, Outlayer.compatOptions);
        Layout.namespace = namespace;
        Layout.data = Outlayer.data;
        Layout.Item = subclass(Item);
        utils.htmlInit(Layout, namespace);
        if (jQuery && jQuery.bridget) {
            jQuery.bridget(namespace, Layout);
        }
        return Layout;
    }
    ;
    function subclass(Parent) {
        function SubClass() {
            Parent.apply(this, arguments);
        }
        SubClass.prototype = Object.create(Parent.prototype);
        SubClass.prototype.constructor = SubClass;
        return SubClass;
    }
    var msUnits = {
        ms: 1,
        s: 1000
    };
    function getMilliseconds(time) {
        if (typeof time == 'number') {
            return time;
        }
        var matches = time.match(/(^\d*\.?\d*)(\w*)/);
        var num = matches && matches[1];
        var unit = matches && matches[2];
        if (!num.length) {
            return 0;
        }
        num = parseFloat(num);
        var mult = msUnits[unit] || 1;
        return num * mult;
    }
    Outlayer.Item = Item;
    return Outlayer;
}));
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define('isotope-layout/js/item', ['outlayer/outlayer'], factory);
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory(require('outlayer'));
    } else {
        window.Isotope = window.Isotope || {};
        window.Isotope.Item = factory(window.Outlayer);
    }
}(window, function factory(Outlayer) {
    'use strict';
    function Item() {
        Outlayer.Item.apply(this, arguments);
    }
    var proto = Item.prototype = Object.create(Outlayer.Item.prototype);
    var _create = proto._create;
    proto._create = function() {
        this.id = this.layout.itemGUID++;
        _create.call(this);
        this.sortData = {};
    }
    ;
    proto.updateSortData = function() {
        if (this.isIgnored) {
            return;
        }
        this.sortData.id = this.id;
        this.sortData['original-order'] = this.id;
        this.sortData.random = Math.random();
        var getSortData = this.layout.options.getSortData;
        var sorters = this.layout._sorters;
        for (var key in getSortData) {
            var sorter = sorters[key];
            this.sortData[key] = sorter(this.element, this);
        }
    }
    ;
    var _destroy = proto.destroy;
    proto.destroy = function() {
        _destroy.apply(this, arguments);
        this.css({
            display: ''
        });
    }
    ;
    return Item;
}));
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define('isotope-layout/js/layout-mode', ['get-size/get-size', 'outlayer/outlayer'], factory);
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory(require('get-size'), require('outlayer'));
    } else {
        window.Isotope = window.Isotope || {};
        window.Isotope.LayoutMode = factory(window.getSize, window.Outlayer);
    }
}(window, function factory(getSize, Outlayer) {
    'use strict';
    function LayoutMode(isotope) {
        this.isotope = isotope;
        if (isotope) {
            this.options = isotope.options[this.namespace];
            this.element = isotope.element;
            this.items = isotope.filteredItems;
            this.size = isotope.size;
        }
    }
    var proto = LayoutMode.prototype;
    var facadeMethods = ['_resetLayout', '_getItemLayoutPosition', '_manageStamp', '_getContainerSize', '_getElementOffset', 'needsResizeLayout', '_getOption'];
    facadeMethods.forEach(function(methodName) {
        proto[methodName] = function() {
            return Outlayer.prototype[methodName].apply(this.isotope, arguments);
        }
        ;
    });
    proto.needsVerticalResizeLayout = function() {
        var size = getSize(this.isotope.element);
        var hasSizes = this.isotope.size && size;
        return hasSizes && size.innerHeight != this.isotope.size.innerHeight;
    }
    ;
    proto._getMeasurement = function() {
        this.isotope._getMeasurement.apply(this, arguments);
    }
    ;
    proto.getColumnWidth = function() {
        this.getSegmentSize('column', 'Width');
    }
    ;
    proto.getRowHeight = function() {
        this.getSegmentSize('row', 'Height');
    }
    ;
    proto.getSegmentSize = function(segment, size) {
        var segmentName = segment + size;
        var outerSize = 'outer' + size;
        this._getMeasurement(segmentName, outerSize);
        if (this[segmentName]) {
            return;
        }
        var firstItemSize = this.getFirstItemSize();
        this[segmentName] = firstItemSize && firstItemSize[outerSize] || this.isotope.size['inner' + size];
    }
    ;
    proto.getFirstItemSize = function() {
        var firstItem = this.isotope.filteredItems[0];
        return firstItem && firstItem.element && getSize(firstItem.element);
    }
    ;
    proto.layout = function() {
        this.isotope.layout.apply(this.isotope, arguments);
    }
    ;
    proto.getSize = function() {
        this.isotope.getSize();
        this.size = this.isotope.size;
    }
    ;
    LayoutMode.modes = {};
    LayoutMode.create = function(namespace, options) {
        function Mode() {
            LayoutMode.apply(this, arguments);
        }
        Mode.prototype = Object.create(proto);
        Mode.prototype.constructor = Mode;
        if (options) {
            Mode.options = options;
        }
        Mode.prototype.namespace = namespace;
        LayoutMode.modes[namespace] = Mode;
        return Mode;
    }
    ;
    return LayoutMode;
}));
/*!
 * Masonry v4.2.1
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define('masonry-layout/masonry', ['outlayer/outlayer', 'get-size/get-size'], factory);
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory(require('outlayer'), require('get-size'));
    } else {
        window.Masonry = factory(window.Outlayer, window.getSize);
    }
}(window, function factory(Outlayer, getSize) {
    var Masonry = Outlayer.create('masonry');
    Masonry.compatOptions.fitWidth = 'isFitWidth';
    var proto = Masonry.prototype;
    proto._resetLayout = function() {
        this.getSize();
        this._getMeasurement('columnWidth', 'outerWidth');
        this._getMeasurement('gutter', 'outerWidth');
        this.measureColumns();
        this.colYs = [];
        for (var i = 0; i < this.cols; i++) {
            this.colYs.push(0);
        }
        this.maxY = 0;
        this.horizontalColIndex = 0;
    }
    ;
    proto.measureColumns = function() {
        this.getContainerWidth();
        if (!this.columnWidth) {
            var firstItem = this.items[0];
            var firstItemElem = firstItem && firstItem.element;
            this.columnWidth = firstItemElem && getSize(firstItemElem).outerWidth || this.containerWidth;
        }
        var columnWidth = this.columnWidth += this.gutter;
        var containerWidth = this.containerWidth + this.gutter;
        var cols = containerWidth / columnWidth;
        var excess = columnWidth - containerWidth % columnWidth;
        var mathMethod = excess && excess < 1 ? 'round' : 'floor';
        cols = Math[mathMethod](cols);
        this.cols = Math.max(cols, 1);
    }
    ;
    proto.getContainerWidth = function() {
        var isFitWidth = this._getOption('fitWidth');
        var container = isFitWidth ? this.element.parentNode : this.element;
        var size = getSize(container);
        this.containerWidth = size && size.innerWidth;
    }
    ;
    proto._getItemLayoutPosition = function(item) {
        item.getSize();
        var remainder = item.size.outerWidth % this.columnWidth;
        var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
        var colSpan = Math[mathMethod](item.size.outerWidth / this.columnWidth);
        colSpan = Math.min(colSpan, this.cols);
        var colPosMethod = this.options.horizontalOrder ? '_getHorizontalColPosition' : '_getTopColPosition';
        var colPosition = this[colPosMethod](colSpan, item);
        var position = {
            x: this.columnWidth * colPosition.col,
            y: colPosition.y
        };
        var setHeight = colPosition.y + item.size.outerHeight;
        var setMax = colSpan + colPosition.col;
        for (var i = colPosition.col; i < setMax; i++) {
            this.colYs[i] = setHeight;
        }
        return position;
    }
    ;
    proto._getTopColPosition = function(colSpan) {
        var colGroup = this._getTopColGroup(colSpan);
        var minimumY = Math.min.apply(Math, colGroup);
        return {
            col: colGroup.indexOf(minimumY),
            y: minimumY,
        };
    }
    ;
    proto._getTopColGroup = function(colSpan) {
        if (colSpan < 2) {
            return this.colYs;
        }
        var colGroup = [];
        var groupCount = this.cols + 1 - colSpan;
        for (var i = 0; i < groupCount; i++) {
            colGroup[i] = this._getColGroupY(i, colSpan);
        }
        return colGroup;
    }
    ;
    proto._getColGroupY = function(col, colSpan) {
        if (colSpan < 2) {
            return this.colYs[col];
        }
        var groupColYs = this.colYs.slice(col, col + colSpan);
        return Math.max.apply(Math, groupColYs);
    }
    ;
    proto._getHorizontalColPosition = function(colSpan, item) {
        var col = this.horizontalColIndex % this.cols;
        var isOver = colSpan > 1 && col + colSpan > this.cols;
        col = isOver ? 0 : col;
        var hasSize = item.size.outerWidth && item.size.outerHeight;
        this.horizontalColIndex = hasSize ? col + colSpan : this.horizontalColIndex;
        return {
            col: col,
            y: this._getColGroupY(col, colSpan),
        };
    }
    ;
    proto._manageStamp = function(stamp) {
        var stampSize = getSize(stamp);
        var offset = this._getElementOffset(stamp);
        var isOriginLeft = this._getOption('originLeft');
        var firstX = isOriginLeft ? offset.left : offset.right;
        var lastX = firstX + stampSize.outerWidth;
        var firstCol = Math.floor(firstX / this.columnWidth);
        firstCol = Math.max(0, firstCol);
        var lastCol = Math.floor(lastX / this.columnWidth);
        lastCol -= lastX % this.columnWidth ? 0 : 1;
        lastCol = Math.min(this.cols - 1, lastCol);
        var isOriginTop = this._getOption('originTop');
        var stampMaxY = (isOriginTop ? offset.top : offset.bottom) + stampSize.outerHeight;
        for (var i = firstCol; i <= lastCol; i++) {
            this.colYs[i] = Math.max(stampMaxY, this.colYs[i]);
        }
    }
    ;
    proto._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var size = {
            height: this.maxY
        };
        if (this._getOption('fitWidth')) {
            size.width = this._getContainerFitWidth();
        }
        return size;
    }
    ;
    proto._getContainerFitWidth = function() {
        var unusedCols = 0;
        var i = this.cols;
        while (--i) {
            if (this.colYs[i] !== 0) {
                break;
            }
            unusedCols++;
        }
        return (this.cols - unusedCols) * this.columnWidth - this.gutter;
    }
    ;
    proto.needsResizeLayout = function() {
        var previousWidth = this.containerWidth;
        this.getContainerWidth();
        return previousWidth != this.containerWidth;
    }
    ;
    return Masonry;
}));
/*!
 * Masonry layout mode
 * sub-classes Masonry
 * https://masonry.desandro.com
 */
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define('isotope-layout/js/layout-modes/masonry', ['../layout-mode', 'masonry-layout/masonry'], factory);
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory(require('../layout-mode'), require('masonry-layout'));
    } else {
        factory(window.Isotope.LayoutMode, window.Masonry);
    }
}(window, function factory(LayoutMode, Masonry) {
    'use strict';
    var MasonryMode = LayoutMode.create('masonry');
    var proto = MasonryMode.prototype;
    var keepModeMethods = {
        _getElementOffset: true,
        layout: true,
        _getMeasurement: true
    };
    for (var method in Masonry.prototype) {
        if (!keepModeMethods[method]) {
            proto[method] = Masonry.prototype[method];
        }
    }
    var measureColumns = proto.measureColumns;
    proto.measureColumns = function() {
        this.items = this.isotope.filteredItems;
        measureColumns.call(this);
    }
    ;
    var _getOption = proto._getOption;
    proto._getOption = function(option) {
        if (option == 'fitWidth') {
            return this.options.isFitWidth !== undefined ? this.options.isFitWidth : this.options.fitWidth;
        }
        return _getOption.apply(this.isotope, arguments);
    }
    ;
    return MasonryMode;
}));
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define('isotope-layout/js/layout-modes/fit-rows', ['../layout-mode'], factory);
    } else if (typeof exports == 'object') {
        module.exports = factory(require('../layout-mode'));
    } else {
        factory(window.Isotope.LayoutMode);
    }
}(window, function factory(LayoutMode) {
    'use strict';
    var FitRows = LayoutMode.create('fitRows');
    var proto = FitRows.prototype;
    proto._resetLayout = function() {
        this.x = 0;
        this.y = 0;
        this.maxY = 0;
        this._getMeasurement('gutter', 'outerWidth');
    }
    ;
    proto._getItemLayoutPosition = function(item) {
        item.getSize();
        var itemWidth = item.size.outerWidth + this.gutter;
        var containerWidth = this.isotope.size.innerWidth + this.gutter;
        if (this.x !== 0 && itemWidth + this.x > containerWidth) {
            this.x = 0;
            this.y = this.maxY;
        }
        var position = {
            x: this.x,
            y: this.y
        };
        this.maxY = Math.max(this.maxY, this.y + item.size.outerHeight);
        this.x += itemWidth;
        return position;
    }
    ;
    proto._getContainerSize = function() {
        return {
            height: this.maxY
        };
    }
    ;
    return FitRows;
}));
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define('isotope-layout/js/layout-modes/vertical', ['../layout-mode'], factory);
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory(require('../layout-mode'));
    } else {
        factory(window.Isotope.LayoutMode);
    }
}(window, function factory(LayoutMode) {
    'use strict';
    var Vertical = LayoutMode.create('vertical', {
        horizontalAlignment: 0
    });
    var proto = Vertical.prototype;
    proto._resetLayout = function() {
        this.y = 0;
    }
    ;
    proto._getItemLayoutPosition = function(item) {
        item.getSize();
        var x = (this.isotope.size.innerWidth - item.size.outerWidth) * this.options.horizontalAlignment;
        var y = this.y;
        this.y += item.size.outerHeight;
        return {
            x: x,
            y: y
        };
    }
    ;
    proto._getContainerSize = function() {
        return {
            height: this.y
        };
    }
    ;
    return Vertical;
}));
/*!
 * Isotope v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define(['outlayer/outlayer', 'get-size/get-size', 'desandro-matches-selector/matches-selector', 'fizzy-ui-utils/utils', 'isotope-layout/js/item', 'isotope-layout/js/layout-mode', 'isotope-layout/js/layout-modes/masonry', 'isotope-layout/js/layout-modes/fit-rows', 'isotope-layout/js/layout-modes/vertical'], function(Outlayer, getSize, matchesSelector, utils, Item, LayoutMode) {
            return factory(window, Outlayer, getSize, matchesSelector, utils, Item, LayoutMode);
        });
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory(window, require('outlayer'), require('get-size'), require('desandro-matches-selector'), require('fizzy-ui-utils'), require('isotope-layout/js/item'), require('isotope-layout/js/layout-mode'), require('isotope-layout/js/layout-modes/masonry'), require('isotope-layout/js/layout-modes/fit-rows'), require('isotope-layout/js/layout-modes/vertical'));
    } else {
        window.Isotope = factory(window, window.Outlayer, window.getSize, window.matchesSelector, window.fizzyUIUtils, window.Isotope.Item, window.Isotope.LayoutMode);
    }
}(window, function factory(window, Outlayer, getSize, matchesSelector, utils, Item, LayoutMode) {
    var jQuery = window.jQuery;
    var trim = String.prototype.trim ? function(str) {
        return str.trim();
    }
    : function(str) {
        return str.replace(/^\s+|\s+$/g, '');
    }
    ;
    var Isotope = Outlayer.create('isotope', {
        layoutMode: 'masonry',
        isJQueryFiltering: true,
        sortAscending: true
    });
    Isotope.Item = Item;
    Isotope.LayoutMode = LayoutMode;
    var proto = Isotope.prototype;
    proto._create = function() {
        this.itemGUID = 0;
        this._sorters = {};
        this._getSorters();
        Outlayer.prototype._create.call(this);
        this.modes = {};
        this.filteredItems = this.items;
        this.sortHistory = ['original-order'];
        for (var name in LayoutMode.modes) {
            this._initLayoutMode(name);
        }
    }
    ;
    proto.reloadItems = function() {
        this.itemGUID = 0;
        Outlayer.prototype.reloadItems.call(this);
    }
    ;
    proto._itemize = function() {
        var items = Outlayer.prototype._itemize.apply(this, arguments);
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            item.id = this.itemGUID++;
        }
        this._updateItemsSortData(items);
        return items;
    }
    ;
    proto._initLayoutMode = function(name) {
        var Mode = LayoutMode.modes[name];
        var initialOpts = this.options[name] || {};
        this.options[name] = Mode.options ? utils.extend(Mode.options, initialOpts) : initialOpts;
        this.modes[name] = new Mode(this);
    }
    ;
    proto.layout = function() {
        if (!this._isLayoutInited && this._getOption('initLayout')) {
            this.arrange();
            return;
        }
        this._layout();
    }
    ;
    proto._layout = function() {
        var isInstant = this._getIsInstant();
        this._resetLayout();
        this._manageStamps();
        this.layoutItems(this.filteredItems, isInstant);
        this._isLayoutInited = true;
    }
    ;
    proto.arrange = function(opts) {
        this.option(opts);
        this._getIsInstant();
        var filtered = this._filter(this.items);
        this.filteredItems = filtered.matches;
        this._bindArrangeComplete();
        if (this._isInstant) {
            this._noTransition(this._hideReveal, [filtered]);
        } else {
            this._hideReveal(filtered);
        }
        this._sort();
        this._layout();
    }
    ;
    proto._init = proto.arrange;
    proto._hideReveal = function(filtered) {
        this.reveal(filtered.needReveal);
        this.hide(filtered.needHide);
    }
    ;
    proto._getIsInstant = function() {
        var isLayoutInstant = this._getOption('layoutInstant');
        var isInstant = isLayoutInstant !== undefined ? isLayoutInstant : !this._isLayoutInited;
        this._isInstant = isInstant;
        return isInstant;
    }
    ;
    proto._bindArrangeComplete = function() {
        var isLayoutComplete, isHideComplete, isRevealComplete;
        var _this = this;
        function arrangeParallelCallback() {
            if (isLayoutComplete && isHideComplete && isRevealComplete) {
                _this.dispatchEvent('arrangeComplete', null, [_this.filteredItems]);
            }
        }
        this.once('layoutComplete', function() {
            isLayoutComplete = true;
            arrangeParallelCallback();
        });
        this.once('hideComplete', function() {
            isHideComplete = true;
            arrangeParallelCallback();
        });
        this.once('revealComplete', function() {
            isRevealComplete = true;
            arrangeParallelCallback();
        });
    }
    ;
    proto._filter = function(items) {
        var filter = this.options.filter;
        filter = filter || '*';
        var matches = [];
        var hiddenMatched = [];
        var visibleUnmatched = [];
        var test = this._getFilterTest(filter);
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (item.isIgnored) {
                continue;
            }
            var isMatched = test(item);
            if (isMatched) {
                matches.push(item);
            }
            if (isMatched && item.isHidden) {
                hiddenMatched.push(item);
            } else if (!isMatched && !item.isHidden) {
                visibleUnmatched.push(item);
            }
        }
        return {
            matches: matches,
            needReveal: hiddenMatched,
            needHide: visibleUnmatched
        };
    }
    ;
    proto._getFilterTest = function(filter) {
        if (jQuery && this.options.isJQueryFiltering) {
            return function(item) {
                return jQuery(item.element).is(filter);
            }
            ;
        }
        if (typeof filter == 'function') {
            return function(item) {
                return filter(item.element);
            }
            ;
        }
        return function(item) {
            return matchesSelector(item.element, filter);
        }
        ;
    }
    ;
    proto.updateSortData = function(elems) {
        var items;
        if (elems) {
            elems = utils.makeArray(elems);
            items = this.getItems(elems);
        } else {
            items = this.items;
        }
        this._getSorters();
        this._updateItemsSortData(items);
    }
    ;
    proto._getSorters = function() {
        var getSortData = this.options.getSortData;
        for (var key in getSortData) {
            var sorter = getSortData[key];
            this._sorters[key] = mungeSorter(sorter);
        }
    }
    ;
    proto._updateItemsSortData = function(items) {
        var len = items && items.length;
        for (var i = 0; len && i < len; i++) {
            var item = items[i];
            item.updateSortData();
        }
    }
    ;
    var mungeSorter = (function() {
        function mungeSorter(sorter) {
            if (typeof sorter != 'string') {
                return sorter;
            }
            var args = trim(sorter).split(' ');
            var query = args[0];
            var attrMatch = query.match(/^\[(.+)\]$/);
            var attr = attrMatch && attrMatch[1];
            var getValue = getValueGetter(attr, query);
            var parser = Isotope.sortDataParsers[args[1]];
            sorter = parser ? function(elem) {
                return elem && parser(getValue(elem));
            }
            : function(elem) {
                return elem && getValue(elem);
            }
            ;
            return sorter;
        }
        function getValueGetter(attr, query) {
            if (attr) {
                return function getAttribute(elem) {
                    return elem.getAttribute(attr);
                }
                ;
            }
            return function getChildText(elem) {
                var child = elem.querySelector(query);
                return child && child.textContent;
            }
            ;
        }
        return mungeSorter;
    }
    )();
    Isotope.sortDataParsers = {
        'parseInt': function(val) {
            return parseInt(val, 10);
        },
        'parseFloat': function(val) {
            return parseFloat(val);
        }
    };
    proto._sort = function() {
        if (!this.options.sortBy) {
            return;
        }
        var sortBys = utils.makeArray(this.options.sortBy);
        if (!this._getIsSameSortBy(sortBys)) {
            this.sortHistory = sortBys.concat(this.sortHistory);
        }
        var itemSorter = getItemSorter(this.sortHistory, this.options.sortAscending);
        this.filteredItems.sort(itemSorter);
    }
    ;
    proto._getIsSameSortBy = function(sortBys) {
        for (var i = 0; i < sortBys.length; i++) {
            if (sortBys[i] != this.sortHistory[i]) {
                return false;
            }
        }
        return true;
    }
    ;
    function getItemSorter(sortBys, sortAsc) {
        return function sorter(itemA, itemB) {
            for (var i = 0; i < sortBys.length; i++) {
                var sortBy = sortBys[i];
                var a = itemA.sortData[sortBy];
                var b = itemB.sortData[sortBy];
                if (a > b || a < b) {
                    var isAscending = sortAsc[sortBy] !== undefined ? sortAsc[sortBy] : sortAsc;
                    var direction = isAscending ? 1 : -1;
                    return (a > b ? 1 : -1) * direction;
                }
            }
            return 0;
        }
        ;
    }
    proto._mode = function() {
        var layoutMode = this.options.layoutMode;
        var mode = this.modes[layoutMode];
        if (!mode) {
            throw new Error('No layout mode: ' + layoutMode);
        }
        mode.options = this.options[layoutMode];
        return mode;
    }
    ;
    proto._resetLayout = function() {
        Outlayer.prototype._resetLayout.call(this);
        this._mode()._resetLayout();
    }
    ;
    proto._getItemLayoutPosition = function(item) {
        return this._mode()._getItemLayoutPosition(item);
    }
    ;
    proto._manageStamp = function(stamp) {
        this._mode()._manageStamp(stamp);
    }
    ;
    proto._getContainerSize = function() {
        return this._mode()._getContainerSize();
    }
    ;
    proto.needsResizeLayout = function() {
        return this._mode().needsResizeLayout();
    }
    ;
    proto.appended = function(elems) {
        var items = this.addItems(elems);
        if (!items.length) {
            return;
        }
        var filteredItems = this._filterRevealAdded(items);
        this.filteredItems = this.filteredItems.concat(filteredItems);
    }
    ;
    proto.prepended = function(elems) {
        var items = this._itemize(elems);
        if (!items.length) {
            return;
        }
        this._resetLayout();
        this._manageStamps();
        var filteredItems = this._filterRevealAdded(items);
        this.layoutItems(this.filteredItems);
        this.filteredItems = filteredItems.concat(this.filteredItems);
        this.items = items.concat(this.items);
    }
    ;
    proto._filterRevealAdded = function(items) {
        var filtered = this._filter(items);
        this.hide(filtered.needHide);
        this.reveal(filtered.matches);
        this.layoutItems(filtered.matches, true);
        return filtered.matches;
    }
    ;
    proto.insert = function(elems) {
        var items = this.addItems(elems);
        if (!items.length) {
            return;
        }
        var i, item;
        var len = items.length;
        for (i = 0; i < len; i++) {
            item = items[i];
            this.element.appendChild(item.element);
        }
        var filteredInsertItems = this._filter(items).matches;
        for (i = 0; i < len; i++) {
            items[i].isLayoutInstant = true;
        }
        this.arrange();
        for (i = 0; i < len; i++) {
            delete items[i].isLayoutInstant;
        }
        this.reveal(filteredInsertItems);
    }
    ;
    var _remove = proto.remove;
    proto.remove = function(elems) {
        elems = utils.makeArray(elems);
        var removeItems = this.getItems(elems);
        _remove.call(this, elems);
        var len = removeItems && removeItems.length;
        for (var i = 0; len && i < len; i++) {
            var item = removeItems[i];
            utils.removeFrom(this.filteredItems, item);
        }
    }
    ;
    proto.shuffle = function() {
        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            item.sortData.random = Math.random();
        }
        this.options.sortBy = 'random';
        this._sort();
        this._layout();
    }
    ;
    proto._noTransition = function(fn, args) {
        var transitionDuration = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var returnValue = fn.apply(this, args);
        this.options.transitionDuration = transitionDuration;
        return returnValue;
    }
    ;
    proto.getFilteredItemElements = function() {
        return this.filteredItems.map(function(item) {
            return item.element;
        });
    }
    ;
    return Isotope;
}));
/*!
 *
 *   typed.js - A JavaScript Typing Animation Library
 *   Author: Matt Boldt <me@mattboldt.com>
 *   Version: v2.0.12
 *   Url: https://github.com/mattboldt/typed.js
 *   License(s): MIT
 *
 */
(function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Typed = e() : t.Typed = e()
}
)(this, function() {
    return function(t) {
        function e(n) {
            if (s[n])
                return s[n].exports;
            var i = s[n] = {
                exports: {},
                id: n,
                loaded: !1
            };
            return t[n].call(i.exports, i, i.exports, e),
            i.loaded = !0,
            i.exports
        }
        var s = {};
        return e.m = t,
        e.c = s,
        e.p = "",
        e(0)
    }([function(t, e, s) {
        "use strict";
        function n(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = function() {
            function t(t, e) {
                for (var s = 0; s < e.length; s++) {
                    var n = e[s];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, s, n) {
                return s && t(e.prototype, s),
                n && t(e, n),
                e
            }
        }()
          , r = s(1)
          , o = s(3)
          , a = function() {
            function t(e, s) {
                n(this, t),
                r.initializer.load(this, s, e),
                this.begin()
            }
            return i(t, [{
                key: "toggle",
                value: function() {
                    this.pause.status ? this.start() : this.stop()
                }
            }, {
                key: "stop",
                value: function() {
                    this.typingComplete || this.pause.status || (this.toggleBlinking(!0),
                    this.pause.status = !0,
                    this.options.onStop(this.arrayPos, this))
                }
            }, {
                key: "start",
                value: function() {
                    this.typingComplete || this.pause.status && (this.pause.status = !1,
                    this.pause.typewrite ? this.typewrite(this.pause.curString, this.pause.curStrPos) : this.backspace(this.pause.curString, this.pause.curStrPos),
                    this.options.onStart(this.arrayPos, this))
                }
            }, {
                key: "destroy",
                value: function() {
                    this.reset(!1),
                    this.options.onDestroy(this)
                }
            }, {
                key: "reset",
                value: function() {
                    var t = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                    clearInterval(this.timeout),
                    this.replaceText(""),
                    this.cursor && this.cursor.parentNode && (this.cursor.parentNode.removeChild(this.cursor),
                    this.cursor = null),
                    this.strPos = 0,
                    this.arrayPos = 0,
                    this.curLoop = 0,
                    t && (this.insertCursor(),
                    this.options.onReset(this),
                    this.begin())
                }
            }, {
                key: "begin",
                value: function() {
                    var t = this;
                    this.options.onBegin(this),
                    this.typingComplete = !1,
                    this.shuffleStringsIfNeeded(this),
                    this.insertCursor(),
                    this.bindInputFocusEvents && this.bindFocusEvents(),
                    this.timeout = setTimeout(function() {
                        t.currentElContent && 0 !== t.currentElContent.length ? t.backspace(t.currentElContent, t.currentElContent.length) : t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos)
                    }, this.startDelay)
                }
            }, {
                key: "typewrite",
                value: function(t, e) {
                    var s = this;
                    this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass),
                    this.cursor && this.cursor.classList.remove(this.fadeOutClass));
                    var n = this.humanizer(this.typeSpeed)
                      , i = 1;
                    return this.pause.status === !0 ? void this.setPauseStatus(t, e, !0) : void (this.timeout = setTimeout(function() {
                        e = o.htmlParser.typeHtmlChars(t, e, s);
                        var n = 0
                          , r = t.substr(e);
                        if ("^" === r.charAt(0) && /^\^\d+/.test(r)) {
                            var a = 1;
                            r = /\d+/.exec(r)[0],
                            a += r.length,
                            n = parseInt(r),
                            s.temporaryPause = !0,
                            s.options.onTypingPaused(s.arrayPos, s),
                            t = t.substring(0, e) + t.substring(e + a),
                            s.toggleBlinking(!0)
                        }
                        if ("`" === r.charAt(0)) {
                            for (; "`" !== t.substr(e + i).charAt(0) && (i++,
                            !(e + i > t.length)); )
                                ;
                            var u = t.substring(0, e)
                              , l = t.substring(u.length + 1, e + i)
                              , c = t.substring(e + i + 1);
                            t = u + l + c,
                            i--
                        }
                        s.timeout = setTimeout(function() {
                            s.toggleBlinking(!1),
                            e >= t.length ? s.doneTyping(t, e) : s.keepTyping(t, e, i),
                            s.temporaryPause && (s.temporaryPause = !1,
                            s.options.onTypingResumed(s.arrayPos, s))
                        }, n)
                    }, n))
                }
            }, {
                key: "keepTyping",
                value: function(t, e, s) {
                    0 === e && (this.toggleBlinking(!1),
                    this.options.preStringTyped(this.arrayPos, this)),
                    e += s;
                    var n = t.substr(0, e);
                    this.replaceText(n),
                    this.typewrite(t, e)
                }
            }, {
                key: "doneTyping",
                value: function(t, e) {
                    var s = this;
                    this.options.onStringTyped(this.arrayPos, this),
                    this.toggleBlinking(!0),
                    this.arrayPos === this.strings.length - 1 && (this.complete(),
                    this.loop === !1 || this.curLoop === this.loopCount) || (this.timeout = setTimeout(function() {
                        s.backspace(t, e)
                    }, this.backDelay))
                }
            }, {
                key: "backspace",
                value: function(t, e) {
                    var s = this;
                    if (this.pause.status === !0)
                        return void this.setPauseStatus(t, e, !1);
                    if (this.fadeOut)
                        return this.initFadeOut();
                    this.toggleBlinking(!1);
                    var n = this.humanizer(this.backSpeed);
                    this.timeout = setTimeout(function() {
                        e = o.htmlParser.backSpaceHtmlChars(t, e, s);
                        var n = t.substr(0, e);
                        if (s.replaceText(n),
                        s.smartBackspace) {
                            var i = s.strings[s.arrayPos + 1];
                            i && n === i.substr(0, e) ? s.stopNum = e : s.stopNum = 0
                        }
                        e > s.stopNum ? (e--,
                        s.backspace(t, e)) : e <= s.stopNum && (s.arrayPos++,
                        s.arrayPos === s.strings.length ? (s.arrayPos = 0,
                        s.options.onLastStringBackspaced(),
                        s.shuffleStringsIfNeeded(),
                        s.begin()) : s.typewrite(s.strings[s.sequence[s.arrayPos]], e))
                    }, n)
                }
            }, {
                key: "complete",
                value: function() {
                    this.options.onComplete(this),
                    this.loop ? this.curLoop++ : this.typingComplete = !0
                }
            }, {
                key: "setPauseStatus",
                value: function(t, e, s) {
                    this.pause.typewrite = s,
                    this.pause.curString = t,
                    this.pause.curStrPos = e
                }
            }, {
                key: "toggleBlinking",
                value: function(t) {
                    this.cursor && (this.pause.status || this.cursorBlinking !== t && (this.cursorBlinking = t,
                    t ? this.cursor.classList.add("typed-cursor--blink") : this.cursor.classList.remove("typed-cursor--blink")))
                }
            }, {
                key: "humanizer",
                value: function(t) {
                    return Math.round(Math.random() * t / 2) + t
                }
            }, {
                key: "shuffleStringsIfNeeded",
                value: function() {
                    this.shuffle && (this.sequence = this.sequence.sort(function() {
                        return Math.random() - .5
                    }))
                }
            }, {
                key: "initFadeOut",
                value: function() {
                    var t = this;
                    return this.el.className += " " + this.fadeOutClass,
                    this.cursor && (this.cursor.className += " " + this.fadeOutClass),
                    setTimeout(function() {
                        t.arrayPos++,
                        t.replaceText(""),
                        t.strings.length > t.arrayPos ? t.typewrite(t.strings[t.sequence[t.arrayPos]], 0) : (t.typewrite(t.strings[0], 0),
                        t.arrayPos = 0)
                    }, this.fadeOutDelay)
                }
            }, {
                key: "replaceText",
                value: function(t) {
                    this.attr ? this.el.setAttribute(this.attr, t) : this.isInput ? this.el.value = t : "html" === this.contentType ? this.el.innerHTML = t : this.el.textContent = t
                }
            }, {
                key: "bindFocusEvents",
                value: function() {
                    var t = this;
                    this.isInput && (this.el.addEventListener("focus", function(e) {
                        t.stop()
                    }),
                    this.el.addEventListener("blur", function(e) {
                        t.el.value && 0 !== t.el.value.length || t.start()
                    }))
                }
            }, {
                key: "insertCursor",
                value: function() {
                    this.showCursor && (this.cursor || (this.cursor = document.createElement("span"),
                    this.cursor.className = "typed-cursor",
                    this.cursor.setAttribute("aria-hidden", !0),
                    this.cursor.innerHTML = this.cursorChar,
                    this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)))
                }
            }]),
            t
        }();
        e["default"] = a,
        t.exports = e["default"]
    }
    , function(t, e, s) {
        "use strict";
        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        function i(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var s = arguments[e];
                for (var n in s)
                    Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n])
            }
            return t
        }
          , o = function() {
            function t(t, e) {
                for (var s = 0; s < e.length; s++) {
                    var n = e[s];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, s, n) {
                return s && t(e.prototype, s),
                n && t(e, n),
                e
            }
        }()
          , a = s(2)
          , u = n(a)
          , l = function() {
            function t() {
                i(this, t)
            }
            return o(t, [{
                key: "load",
                value: function(t, e, s) {
                    if ("string" == typeof s ? t.el = document.querySelector(s) : t.el = s,
                    t.options = r({}, u["default"], e),
                    t.isInput = "input" === t.el.tagName.toLowerCase(),
                    t.attr = t.options.attr,
                    t.bindInputFocusEvents = t.options.bindInputFocusEvents,
                    t.showCursor = !t.isInput && t.options.showCursor,
                    t.cursorChar = t.options.cursorChar,
                    t.cursorBlinking = !0,
                    t.elContent = t.attr ? t.el.getAttribute(t.attr) : t.el.textContent,
                    t.contentType = t.options.contentType,
                    t.typeSpeed = t.options.typeSpeed,
                    t.startDelay = t.options.startDelay,
                    t.backSpeed = t.options.backSpeed,
                    t.smartBackspace = t.options.smartBackspace,
                    t.backDelay = t.options.backDelay,
                    t.fadeOut = t.options.fadeOut,
                    t.fadeOutClass = t.options.fadeOutClass,
                    t.fadeOutDelay = t.options.fadeOutDelay,
                    t.isPaused = !1,
                    t.strings = t.options.strings.map(function(t) {
                        return t.trim()
                    }),
                    "string" == typeof t.options.stringsElement ? t.stringsElement = document.querySelector(t.options.stringsElement) : t.stringsElement = t.options.stringsElement,
                    t.stringsElement) {
                        t.strings = [],
                        t.stringsElement.style.display = "none";
                        var n = Array.prototype.slice.apply(t.stringsElement.children)
                          , i = n.length;
                        if (i)
                            for (var o = 0; o < i; o += 1) {
                                var a = n[o];
                                t.strings.push(a.innerHTML.trim())
                            }
                    }
                    t.strPos = 0,
                    t.arrayPos = 0,
                    t.stopNum = 0,
                    t.loop = t.options.loop,
                    t.loopCount = t.options.loopCount,
                    t.curLoop = 0,
                    t.shuffle = t.options.shuffle,
                    t.sequence = [],
                    t.pause = {
                        status: !1,
                        typewrite: !0,
                        curString: "",
                        curStrPos: 0
                    },
                    t.typingComplete = !1;
                    for (var o in t.strings)
                        t.sequence[o] = o;
                    t.currentElContent = this.getCurrentElContent(t),
                    t.autoInsertCss = t.options.autoInsertCss,
                    this.appendAnimationCss(t)
                }
            }, {
                key: "getCurrentElContent",
                value: function(t) {
                    var e = "";
                    return e = t.attr ? t.el.getAttribute(t.attr) : t.isInput ? t.el.value : "html" === t.contentType ? t.el.innerHTML : t.el.textContent
                }
            }, {
                key: "appendAnimationCss",
                value: function(t) {
                    var e = "data-typed-js-css";
                    if (t.autoInsertCss && (t.showCursor || t.fadeOut) && !document.querySelector("[" + e + "]")) {
                        var s = document.createElement("style");
                        s.type = "text/css",
                        s.setAttribute(e, !0);
                        var n = "";
                        t.showCursor && (n += "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),
                        t.fadeOut && (n += "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),
                        0 !== s.length && (s.innerHTML = n,
                        document.body.appendChild(s))
                    }
                }
            }]),
            t
        }();
        e["default"] = l;
        var c = new l;
        e.initializer = c
    }
    , function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = {
            strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
            stringsElement: null,
            typeSpeed: 0,
            startDelay: 0,
            backSpeed: 0,
            smartBackspace: !0,
            shuffle: !1,
            backDelay: 700,
            fadeOut: !1,
            fadeOutClass: "typed-fade-out",
            fadeOutDelay: 500,
            loop: !1,
            loopCount: 1 / 0,
            showCursor: !0,
            cursorChar: "|",
            autoInsertCss: !0,
            attr: null,
            bindInputFocusEvents: !1,
            contentType: "html",
            onBegin: function(t) {},
            onComplete: function(t) {},
            preStringTyped: function(t, e) {},
            onStringTyped: function(t, e) {},
            onLastStringBackspaced: function(t) {},
            onTypingPaused: function(t, e) {},
            onTypingResumed: function(t, e) {},
            onReset: function(t) {},
            onStop: function(t, e) {},
            onStart: function(t, e) {},
            onDestroy: function(t) {}
        };
        e["default"] = s,
        t.exports = e["default"]
    }
    , function(t, e) {
        "use strict";
        function s(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
            function t(t, e) {
                for (var s = 0; s < e.length; s++) {
                    var n = e[s];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, s, n) {
                return s && t(e.prototype, s),
                n && t(e, n),
                e
            }
        }()
          , i = function() {
            function t() {
                s(this, t)
            }
            return n(t, [{
                key: "typeHtmlChars",
                value: function(t, e, s) {
                    if ("html" !== s.contentType)
                        return e;
                    var n = t.substr(e).charAt(0);
                    if ("<" === n || "&" === n) {
                        var i = "";
                        for (i = "<" === n ? ">" : ";"; t.substr(e + 1).charAt(0) !== i && (e++,
                        !(e + 1 > t.length)); )
                            ;
                        e++
                    }
                    return e
                }
            }, {
                key: "backSpaceHtmlChars",
                value: function(t, e, s) {
                    if ("html" !== s.contentType)
                        return e;
                    var n = t.substr(e).charAt(0);
                    if (">" === n || ";" === n) {
                        var i = "";
                        for (i = ">" === n ? "<" : "&"; t.substr(e - 1).charAt(0) !== i && (e--,
                        !(e < 0)); )
                            ;
                        e--
                    }
                    return e
                }
            }]),
            t
        }();
        e["default"] = i;
        var r = new i;
        e.htmlParser = r
    }
    ])
});
!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Swiper = t()
}(this, (function() {
    "use strict";
    var e = "undefined" == typeof document ? {
        body: {},
        addEventListener: function() {},
        removeEventListener: function() {},
        activeElement: {
            blur: function() {},
            nodeName: ""
        },
        querySelector: function() {
            return null
        },
        querySelectorAll: function() {
            return []
        },
        getElementById: function() {
            return null
        },
        createEvent: function() {
            return {
                initEvent: function() {}
            }
        },
        createElement: function() {
            return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute: function() {},
                getElementsByTagName: function() {
                    return []
                }
            }
        },
        location: {
            hash: ""
        }
    } : document
      , t = "undefined" == typeof window ? {
        document: e,
        navigator: {
            userAgent: ""
        },
        location: {},
        history: {},
        CustomEvent: function() {
            return this
        },
        addEventListener: function() {},
        removeEventListener: function() {},
        getComputedStyle: function() {
            return {
                getPropertyValue: function() {
                    return ""
                }
            }
        },
        Image: function() {},
        Date: function() {},
        screen: {},
        setTimeout: function() {},
        clearTimeout: function() {}
    } : window
      , i = function(e) {
        for (var t = 0; t < e.length; t += 1)
            this[t] = e[t];
        return this.length = e.length,
        this
    };
    function s(s, a) {
        var r = []
          , n = 0;
        if (s && !a && s instanceof i)
            return s;
        if (s)
            if ("string" == typeof s) {
                var o, l, d = s.trim();
                if (d.indexOf("<") >= 0 && d.indexOf(">") >= 0) {
                    var h = "div";
                    for (0 === d.indexOf("<li") && (h = "ul"),
                    0 === d.indexOf("<tr") && (h = "tbody"),
                    0 !== d.indexOf("<td") && 0 !== d.indexOf("<th") || (h = "tr"),
                    0 === d.indexOf("<tbody") && (h = "table"),
                    0 === d.indexOf("<option") && (h = "select"),
                    (l = e.createElement(h)).innerHTML = d,
                    n = 0; n < l.childNodes.length; n += 1)
                        r.push(l.childNodes[n])
                } else
                    for (o = a || "#" !== s[0] || s.match(/[ .<>:~]/) ? (a || e).querySelectorAll(s.trim()) : [e.getElementById(s.trim().split("#")[1])],
                    n = 0; n < o.length; n += 1)
                        o[n] && r.push(o[n])
            } else if (s.nodeType || s === t || s === e)
                r.push(s);
            else if (s.length > 0 && s[0].nodeType)
                for (n = 0; n < s.length; n += 1)
                    r.push(s[n]);
        return new i(r)
    }
    function a(e) {
        for (var t = [], i = 0; i < e.length; i += 1)
            -1 === t.indexOf(e[i]) && t.push(e[i]);
        return t
    }
    s.fn = i.prototype,
    s.Class = i,
    s.Dom7 = i;
    var r = {
        addClass: function(e) {
            if (void 0 === e)
                return this;
            for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                for (var s = 0; s < this.length; s += 1)
                    void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.add(t[i]);
            return this
        },
        removeClass: function(e) {
            for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                for (var s = 0; s < this.length; s += 1)
                    void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.remove(t[i]);
            return this
        },
        hasClass: function(e) {
            return !!this[0] && this[0].classList.contains(e)
        },
        toggleClass: function(e) {
            for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                for (var s = 0; s < this.length; s += 1)
                    void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.toggle(t[i]);
            return this
        },
        attr: function(e, t) {
            var i = arguments;
            if (1 === arguments.length && "string" == typeof e)
                return this[0] ? this[0].getAttribute(e) : void 0;
            for (var s = 0; s < this.length; s += 1)
                if (2 === i.length)
                    this[s].setAttribute(e, t);
                else
                    for (var a in e)
                        this[s][a] = e[a],
                        this[s].setAttribute(a, e[a]);
            return this
        },
        removeAttr: function(e) {
            for (var t = 0; t < this.length; t += 1)
                this[t].removeAttribute(e);
            return this
        },
        data: function(e, t) {
            var i;
            if (void 0 !== t) {
                for (var s = 0; s < this.length; s += 1)
                    (i = this[s]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}),
                    i.dom7ElementDataStorage[e] = t;
                return this
            }
            if (i = this[0]) {
                if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage)
                    return i.dom7ElementDataStorage[e];
                var a = i.getAttribute("data-" + e);
                return a || void 0
            }
        },
        transform: function(e) {
            for (var t = 0; t < this.length; t += 1) {
                var i = this[t].style;
                i.webkitTransform = e,
                i.transform = e
            }
            return this
        },
        transition: function(e) {
            "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t += 1) {
                var i = this[t].style;
                i.webkitTransitionDuration = e,
                i.transitionDuration = e
            }
            return this
        },
        on: function() {
            for (var e, t = [], i = arguments.length; i--; )
                t[i] = arguments[i];
            var a = t[0]
              , r = t[1]
              , n = t[2]
              , o = t[3];
            function l(e) {
                var t = e.target;
                if (t) {
                    var i = e.target.dom7EventData || [];
                    if (i.indexOf(e) < 0 && i.unshift(e),
                    s(t).is(r))
                        n.apply(t, i);
                    else
                        for (var a = s(t).parents(), o = 0; o < a.length; o += 1)
                            s(a[o]).is(r) && n.apply(a[o], i)
                }
            }
            function d(e) {
                var t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e),
                n.apply(this, t)
            }
            "function" == typeof t[1] && (a = (e = t)[0],
            n = e[1],
            o = e[2],
            r = void 0),
            o || (o = !1);
            for (var h, p = a.split(" "), c = 0; c < this.length; c += 1) {
                var u = this[c];
                if (r)
                    for (h = 0; h < p.length; h += 1) {
                        var v = p[h];
                        u.dom7LiveListeners || (u.dom7LiveListeners = {}),
                        u.dom7LiveListeners[v] || (u.dom7LiveListeners[v] = []),
                        u.dom7LiveListeners[v].push({
                            listener: n,
                            proxyListener: l
                        }),
                        u.addEventListener(v, l, o)
                    }
                else
                    for (h = 0; h < p.length; h += 1) {
                        var f = p[h];
                        u.dom7Listeners || (u.dom7Listeners = {}),
                        u.dom7Listeners[f] || (u.dom7Listeners[f] = []),
                        u.dom7Listeners[f].push({
                            listener: n,
                            proxyListener: d
                        }),
                        u.addEventListener(f, d, o)
                    }
            }
            return this
        },
        off: function() {
            for (var e, t = [], i = arguments.length; i--; )
                t[i] = arguments[i];
            var s = t[0]
              , a = t[1]
              , r = t[2]
              , n = t[3];
            "function" == typeof t[1] && (s = (e = t)[0],
            r = e[1],
            n = e[2],
            a = void 0),
            n || (n = !1);
            for (var o = s.split(" "), l = 0; l < o.length; l += 1)
                for (var d = o[l], h = 0; h < this.length; h += 1) {
                    var p = this[h]
                      , c = void 0;
                    if (!a && p.dom7Listeners ? c = p.dom7Listeners[d] : a && p.dom7LiveListeners && (c = p.dom7LiveListeners[d]),
                    c && c.length)
                        for (var u = c.length - 1; u >= 0; u -= 1) {
                            var v = c[u];
                            r && v.listener === r ? (p.removeEventListener(d, v.proxyListener, n),
                            c.splice(u, 1)) : r && v.listener && v.listener.dom7proxy && v.listener.dom7proxy === r ? (p.removeEventListener(d, v.proxyListener, n),
                            c.splice(u, 1)) : r || (p.removeEventListener(d, v.proxyListener, n),
                            c.splice(u, 1))
                        }
                }
            return this
        },
        trigger: function() {
            for (var i = [], s = arguments.length; s--; )
                i[s] = arguments[s];
            for (var a = i[0].split(" "), r = i[1], n = 0; n < a.length; n += 1)
                for (var o = a[n], l = 0; l < this.length; l += 1) {
                    var d = this[l]
                      , h = void 0;
                    try {
                        h = new t.CustomEvent(o,{
                            detail: r,
                            bubbles: !0,
                            cancelable: !0
                        })
                    } catch (t) {
                        (h = e.createEvent("Event")).initEvent(o, !0, !0),
                        h.detail = r
                    }
                    d.dom7EventData = i.filter((function(e, t) {
                        return t > 0
                    }
                    )),
                    d.dispatchEvent(h),
                    d.dom7EventData = [],
                    delete d.dom7EventData
                }
            return this
        },
        transitionEnd: function(e) {
            var t, i = ["webkitTransitionEnd", "transitionend"], s = this;
            function a(r) {
                if (r.target === this)
                    for (e.call(this, r),
                    t = 0; t < i.length; t += 1)
                        s.off(i[t], a)
            }
            if (e)
                for (t = 0; t < i.length; t += 1)
                    s.on(i[t], a);
            return this
        },
        outerWidth: function(e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        },
        outerHeight: function(e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        },
        offset: function() {
            if (this.length > 0) {
                var i = this[0]
                  , s = i.getBoundingClientRect()
                  , a = e.body
                  , r = i.clientTop || a.clientTop || 0
                  , n = i.clientLeft || a.clientLeft || 0
                  , o = i === t ? t.scrollY : i.scrollTop
                  , l = i === t ? t.scrollX : i.scrollLeft;
                return {
                    top: s.top + o - r,
                    left: s.left + l - n
                }
            }
            return null
        },
        css: function(e, i) {
            var s;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (s = 0; s < this.length; s += 1)
                        for (var a in e)
                            this[s].style[a] = e[a];
                    return this
                }
                if (this[0])
                    return t.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (s = 0; s < this.length; s += 1)
                    this[s].style[e] = i;
                return this
            }
            return this
        },
        each: function(e) {
            if (!e)
                return this;
            for (var t = 0; t < this.length; t += 1)
                if (!1 === e.call(this[t], t, this[t]))
                    return this;
            return this
        },
        html: function(e) {
            if (void 0 === e)
                return this[0] ? this[0].innerHTML : void 0;
            for (var t = 0; t < this.length; t += 1)
                this[t].innerHTML = e;
            return this
        },
        text: function(e) {
            if (void 0 === e)
                return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1)
                this[t].textContent = e;
            return this
        },
        is: function(a) {
            var r, n, o = this[0];
            if (!o || void 0 === a)
                return !1;
            if ("string" == typeof a) {
                if (o.matches)
                    return o.matches(a);
                if (o.webkitMatchesSelector)
                    return o.webkitMatchesSelector(a);
                if (o.msMatchesSelector)
                    return o.msMatchesSelector(a);
                for (r = s(a),
                n = 0; n < r.length; n += 1)
                    if (r[n] === o)
                        return !0;
                return !1
            }
            if (a === e)
                return o === e;
            if (a === t)
                return o === t;
            if (a.nodeType || a instanceof i) {
                for (r = a.nodeType ? [a] : a,
                n = 0; n < r.length; n += 1)
                    if (r[n] === o)
                        return !0;
                return !1
            }
            return !1
        },
        index: function() {
            var e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling); )
                    1 === t.nodeType && (e += 1);
                return e
            }
        },
        eq: function(e) {
            if (void 0 === e)
                return this;
            var t, s = this.length;
            return new i(e > s - 1 ? [] : e < 0 ? (t = s + e) < 0 ? [] : [this[t]] : [this[e]])
        },
        append: function() {
            for (var t, s = [], a = arguments.length; a--; )
                s[a] = arguments[a];
            for (var r = 0; r < s.length; r += 1) {
                t = s[r];
                for (var n = 0; n < this.length; n += 1)
                    if ("string" == typeof t) {
                        var o = e.createElement("div");
                        for (o.innerHTML = t; o.firstChild; )
                            this[n].appendChild(o.firstChild)
                    } else if (t instanceof i)
                        for (var l = 0; l < t.length; l += 1)
                            this[n].appendChild(t[l]);
                    else
                        this[n].appendChild(t)
            }
            return this
        },
        prepend: function(t) {
            var s, a;
            for (s = 0; s < this.length; s += 1)
                if ("string" == typeof t) {
                    var r = e.createElement("div");
                    for (r.innerHTML = t,
                    a = r.childNodes.length - 1; a >= 0; a -= 1)
                        this[s].insertBefore(r.childNodes[a], this[s].childNodes[0])
                } else if (t instanceof i)
                    for (a = 0; a < t.length; a += 1)
                        this[s].insertBefore(t[a], this[s].childNodes[0]);
                else
                    this[s].insertBefore(t, this[s].childNodes[0]);
            return this
        },
        next: function(e) {
            return this.length > 0 ? e ? this[0].nextElementSibling && s(this[0].nextElementSibling).is(e) ? new i([this[0].nextElementSibling]) : new i([]) : this[0].nextElementSibling ? new i([this[0].nextElementSibling]) : new i([]) : new i([])
        },
        nextAll: function(e) {
            var t = []
              , a = this[0];
            if (!a)
                return new i([]);
            for (; a.nextElementSibling; ) {
                var r = a.nextElementSibling;
                e ? s(r).is(e) && t.push(r) : t.push(r),
                a = r
            }
            return new i(t)
        },
        prev: function(e) {
            if (this.length > 0) {
                var t = this[0];
                return e ? t.previousElementSibling && s(t.previousElementSibling).is(e) ? new i([t.previousElementSibling]) : new i([]) : t.previousElementSibling ? new i([t.previousElementSibling]) : new i([])
            }
            return new i([])
        },
        prevAll: function(e) {
            var t = []
              , a = this[0];
            if (!a)
                return new i([]);
            for (; a.previousElementSibling; ) {
                var r = a.previousElementSibling;
                e ? s(r).is(e) && t.push(r) : t.push(r),
                a = r
            }
            return new i(t)
        },
        parent: function(e) {
            for (var t = [], i = 0; i < this.length; i += 1)
                null !== this[i].parentNode && (e ? s(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
            return s(a(t))
        },
        parents: function(e) {
            for (var t = [], i = 0; i < this.length; i += 1)
                for (var r = this[i].parentNode; r; )
                    e ? s(r).is(e) && t.push(r) : t.push(r),
                    r = r.parentNode;
            return s(a(t))
        },
        closest: function(e) {
            var t = this;
            return void 0 === e ? new i([]) : (t.is(e) || (t = t.parents(e).eq(0)),
            t)
        },
        find: function(e) {
            for (var t = [], s = 0; s < this.length; s += 1)
                for (var a = this[s].querySelectorAll(e), r = 0; r < a.length; r += 1)
                    t.push(a[r]);
            return new i(t)
        },
        children: function(e) {
            for (var t = [], r = 0; r < this.length; r += 1)
                for (var n = this[r].childNodes, o = 0; o < n.length; o += 1)
                    e ? 1 === n[o].nodeType && s(n[o]).is(e) && t.push(n[o]) : 1 === n[o].nodeType && t.push(n[o]);
            return new i(a(t))
        },
        filter: function(e) {
            for (var t = [], s = 0; s < this.length; s += 1)
                e.call(this[s], s, this[s]) && t.push(this[s]);
            return new i(t)
        },
        remove: function() {
            for (var e = 0; e < this.length; e += 1)
                this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        },
        add: function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            var i, a;
            for (i = 0; i < e.length; i += 1) {
                var r = s(e[i]);
                for (a = 0; a < r.length; a += 1)
                    this[this.length] = r[a],
                    this.length += 1
            }
            return this
        },
        styles: function() {
            return this[0] ? t.getComputedStyle(this[0], null) : {}
        }
    };
    Object.keys(r).forEach((function(e) {
        s.fn[e] = s.fn[e] || r[e]
    }
    ));
    var n = {
        deleteProps: function(e) {
            var t = e;
            Object.keys(t).forEach((function(e) {
                try {
                    t[e] = null
                } catch (e) {}
                try {
                    delete t[e]
                } catch (e) {}
            }
            ))
        },
        nextTick: function(e, t) {
            return void 0 === t && (t = 0),
            setTimeout(e, t)
        },
        now: function() {
            return Date.now()
        },
        getTranslate: function(e, i) {
            var s, a, r;
            void 0 === i && (i = "x");
            var n = t.getComputedStyle(e, null);
            return t.WebKitCSSMatrix ? ((a = n.transform || n.webkitTransform).split(",").length > 6 && (a = a.split(", ").map((function(e) {
                return e.replace(",", ".")
            }
            )).join(", ")),
            r = new t.WebKitCSSMatrix("none" === a ? "" : a)) : s = (r = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","),
            "x" === i && (a = t.WebKitCSSMatrix ? r.m41 : 16 === s.length ? parseFloat(s[12]) : parseFloat(s[4])),
            "y" === i && (a = t.WebKitCSSMatrix ? r.m42 : 16 === s.length ? parseFloat(s[13]) : parseFloat(s[5])),
            a || 0
        },
        parseUrlQuery: function(e) {
            var i, s, a, r, n = {}, o = e || t.location.href;
            if ("string" == typeof o && o.length)
                for (r = (s = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "").split("&").filter((function(e) {
                    return "" !== e
                }
                ))).length,
                i = 0; i < r; i += 1)
                    a = s[i].replace(/#\S+/g, "").split("="),
                    n[decodeURIComponent(a[0])] = void 0 === a[1] ? void 0 : decodeURIComponent(a[1]) || "";
            return n
        },
        isObject: function(e) {
            return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
        },
        extend: function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            for (var i = Object(e[0]), s = 1; s < e.length; s += 1) {
                var a = e[s];
                if (null != a)
                    for (var r = Object.keys(Object(a)), o = 0, l = r.length; o < l; o += 1) {
                        var d = r[o]
                          , h = Object.getOwnPropertyDescriptor(a, d);
                        void 0 !== h && h.enumerable && (n.isObject(i[d]) && n.isObject(a[d]) ? n.extend(i[d], a[d]) : !n.isObject(i[d]) && n.isObject(a[d]) ? (i[d] = {},
                        n.extend(i[d], a[d])) : i[d] = a[d])
                    }
            }
            return i
        }
    }
      , o = {
        touch: t.Modernizr && !0 === t.Modernizr.touch || !!(t.navigator.maxTouchPoints > 0 || "ontouchstart"in t || t.DocumentTouch && e instanceof t.DocumentTouch),
        pointerEvents: !!t.PointerEvent && "maxTouchPoints"in t.navigator && t.navigator.maxTouchPoints > 0,
        observer: "MutationObserver"in t || "WebkitMutationObserver"in t,
        passiveListener: function() {
            var e = !1;
            try {
                var i = Object.defineProperty({}, "passive", {
                    get: function() {
                        e = !0
                    }
                });
                t.addEventListener("testPassiveListener", null, i)
            } catch (e) {}
            return e
        }(),
        gestures: "ongesturestart"in t
    }
      , l = function(e) {
        void 0 === e && (e = {});
        var t = this;
        t.params = e,
        t.eventsListeners = {},
        t.params && t.params.on && Object.keys(t.params.on).forEach((function(e) {
            t.on(e, t.params.on[e])
        }
        ))
    }
      , d = {
        components: {
            configurable: !0
        }
    };
    l.prototype.on = function(e, t, i) {
        var s = this;
        if ("function" != typeof t)
            return s;
        var a = i ? "unshift" : "push";
        return e.split(" ").forEach((function(e) {
            s.eventsListeners[e] || (s.eventsListeners[e] = []),
            s.eventsListeners[e][a](t)
        }
        )),
        s
    }
    ,
    l.prototype.once = function(e, t, i) {
        var s = this;
        if ("function" != typeof t)
            return s;
        function a() {
            for (var i = [], r = arguments.length; r--; )
                i[r] = arguments[r];
            s.off(e, a),
            a.f7proxy && delete a.f7proxy,
            t.apply(s, i)
        }
        return a.f7proxy = t,
        s.on(e, a, i)
    }
    ,
    l.prototype.off = function(e, t) {
        var i = this;
        return i.eventsListeners ? (e.split(" ").forEach((function(e) {
            void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].length && i.eventsListeners[e].forEach((function(s, a) {
                (s === t || s.f7proxy && s.f7proxy === t) && i.eventsListeners[e].splice(a, 1)
            }
            ))
        }
        )),
        i) : i
    }
    ,
    l.prototype.emit = function() {
        for (var e = [], t = arguments.length; t--; )
            e[t] = arguments[t];
        var i, s, a, r = this;
        if (!r.eventsListeners)
            return r;
        "string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0],
        s = e.slice(1, e.length),
        a = r) : (i = e[0].events,
        s = e[0].data,
        a = e[0].context || r);
        var n = Array.isArray(i) ? i : i.split(" ");
        return n.forEach((function(e) {
            if (r.eventsListeners && r.eventsListeners[e]) {
                var t = [];
                r.eventsListeners[e].forEach((function(e) {
                    t.push(e)
                }
                )),
                t.forEach((function(e) {
                    e.apply(a, s)
                }
                ))
            }
        }
        )),
        r
    }
    ,
    l.prototype.useModulesParams = function(e) {
        var t = this;
        t.modules && Object.keys(t.modules).forEach((function(i) {
            var s = t.modules[i];
            s.params && n.extend(e, s.params)
        }
        ))
    }
    ,
    l.prototype.useModules = function(e) {
        void 0 === e && (e = {});
        var t = this;
        t.modules && Object.keys(t.modules).forEach((function(i) {
            var s = t.modules[i]
              , a = e[i] || {};
            s.instance && Object.keys(s.instance).forEach((function(e) {
                var i = s.instance[e];
                t[e] = "function" == typeof i ? i.bind(t) : i
            }
            )),
            s.on && t.on && Object.keys(s.on).forEach((function(e) {
                t.on(e, s.on[e])
            }
            )),
            s.create && s.create.bind(t)(a)
        }
        ))
    }
    ,
    d.components.set = function(e) {
        this.use && this.use(e)
    }
    ,
    l.installModule = function(e) {
        for (var t = [], i = arguments.length - 1; i-- > 0; )
            t[i] = arguments[i + 1];
        var s = this;
        s.prototype.modules || (s.prototype.modules = {});
        var a = e.name || Object.keys(s.prototype.modules).length + "_" + n.now();
        return s.prototype.modules[a] = e,
        e.proto && Object.keys(e.proto).forEach((function(t) {
            s.prototype[t] = e.proto[t]
        }
        )),
        e.static && Object.keys(e.static).forEach((function(t) {
            s[t] = e.static[t]
        }
        )),
        e.install && e.install.apply(s, t),
        s
    }
    ,
    l.use = function(e) {
        for (var t = [], i = arguments.length - 1; i-- > 0; )
            t[i] = arguments[i + 1];
        var s = this;
        return Array.isArray(e) ? (e.forEach((function(e) {
            return s.installModule(e)
        }
        )),
        s) : s.installModule.apply(s, [e].concat(t))
    }
    ,
    Object.defineProperties(l, d);
    var h = {
        updateSize: function() {
            var e, t, i = this.$el;
            e = void 0 !== this.params.width ? this.params.width : i[0].clientWidth,
            t = void 0 !== this.params.height ? this.params.height : i[0].clientHeight,
            0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10),
            t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10),
            n.extend(this, {
                width: e,
                height: t,
                size: this.isHorizontal() ? e : t
            }))
        },
        updateSlides: function() {
            var e = this.params
              , i = this.$wrapperEl
              , s = this.size
              , a = this.rtlTranslate
              , r = this.wrongRTL
              , o = this.virtual && e.virtual.enabled
              , l = o ? this.virtual.slides.length : this.slides.length
              , d = i.children("." + this.params.slideClass)
              , h = o ? this.virtual.slides.length : d.length
              , p = []
              , c = []
              , u = [];
            function v(t) {
                return !e.cssMode || t !== d.length - 1
            }
            var f = e.slidesOffsetBefore;
            "function" == typeof f && (f = e.slidesOffsetBefore.call(this));
            var m = e.slidesOffsetAfter;
            "function" == typeof m && (m = e.slidesOffsetAfter.call(this));
            var g = this.snapGrid.length
              , b = this.snapGrid.length
              , w = e.spaceBetween
              , y = -f
              , x = 0
              , T = 0;
            if (void 0 !== s) {
                var E, S;
                "string" == typeof w && w.indexOf("%") >= 0 && (w = parseFloat(w.replace("%", "")) / 100 * s),
                this.virtualSize = -w,
                a ? d.css({
                    marginLeft: "",
                    marginTop: ""
                }) : d.css({
                    marginRight: "",
                    marginBottom: ""
                }),
                e.slidesPerColumn > 1 && (E = Math.floor(h / e.slidesPerColumn) === h / this.params.slidesPerColumn ? h : Math.ceil(h / e.slidesPerColumn) * e.slidesPerColumn,
                "auto" !== e.slidesPerView && "row" === e.slidesPerColumnFill && (E = Math.max(E, e.slidesPerView * e.slidesPerColumn)));
                for (var C, M = e.slidesPerColumn, P = E / M, z = Math.floor(h / e.slidesPerColumn), k = 0; k < h; k += 1) {
                    S = 0;
                    var $ = d.eq(k);
                    if (e.slidesPerColumn > 1) {
                        var L = void 0
                          , I = void 0
                          , D = void 0;
                        if ("row" === e.slidesPerColumnFill && e.slidesPerGroup > 1) {
                            var O = Math.floor(k / (e.slidesPerGroup * e.slidesPerColumn))
                              , A = k - e.slidesPerColumn * e.slidesPerGroup * O
                              , G = 0 === O ? e.slidesPerGroup : Math.min(Math.ceil((h - O * M * e.slidesPerGroup) / M), e.slidesPerGroup);
                            L = (I = A - (D = Math.floor(A / G)) * G + O * e.slidesPerGroup) + D * E / M,
                            $.css({
                                "-webkit-box-ordinal-group": L,
                                "-moz-box-ordinal-group": L,
                                "-ms-flex-order": L,
                                "-webkit-order": L,
                                order: L
                            })
                        } else
                            "column" === e.slidesPerColumnFill ? (D = k - (I = Math.floor(k / M)) * M,
                            (I > z || I === z && D === M - 1) && (D += 1) >= M && (D = 0,
                            I += 1)) : I = k - (D = Math.floor(k / P)) * P;
                        $.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== D && e.spaceBetween && e.spaceBetween + "px")
                    }
                    if ("none" !== $.css("display")) {
                        if ("auto" === e.slidesPerView) {
                            var H = t.getComputedStyle($[0], null)
                              , B = $[0].style.transform
                              , N = $[0].style.webkitTransform;
                            if (B && ($[0].style.transform = "none"),
                            N && ($[0].style.webkitTransform = "none"),
                            e.roundLengths)
                                S = this.isHorizontal() ? $.outerWidth(!0) : $.outerHeight(!0);
                            else if (this.isHorizontal()) {
                                var X = parseFloat(H.getPropertyValue("width"))
                                  , V = parseFloat(H.getPropertyValue("padding-left"))
                                  , Y = parseFloat(H.getPropertyValue("padding-right"))
                                  , F = parseFloat(H.getPropertyValue("margin-left"))
                                  , W = parseFloat(H.getPropertyValue("margin-right"))
                                  , R = H.getPropertyValue("box-sizing");
                                S = R && "border-box" === R ? X + F + W : X + V + Y + F + W
                            } else {
                                var q = parseFloat(H.getPropertyValue("height"))
                                  , j = parseFloat(H.getPropertyValue("padding-top"))
                                  , K = parseFloat(H.getPropertyValue("padding-bottom"))
                                  , U = parseFloat(H.getPropertyValue("margin-top"))
                                  , _ = parseFloat(H.getPropertyValue("margin-bottom"))
                                  , Z = H.getPropertyValue("box-sizing");
                                S = Z && "border-box" === Z ? q + U + _ : q + j + K + U + _
                            }
                            B && ($[0].style.transform = B),
                            N && ($[0].style.webkitTransform = N),
                            e.roundLengths && (S = Math.floor(S))
                        } else
                            S = (s - (e.slidesPerView - 1) * w) / e.slidesPerView,
                            e.roundLengths && (S = Math.floor(S)),
                            d[k] && (this.isHorizontal() ? d[k].style.width = S + "px" : d[k].style.height = S + "px");
                        d[k] && (d[k].swiperSlideSize = S),
                        u.push(S),
                        e.centeredSlides ? (y = y + S / 2 + x / 2 + w,
                        0 === x && 0 !== k && (y = y - s / 2 - w),
                        0 === k && (y = y - s / 2 - w),
                        Math.abs(y) < .001 && (y = 0),
                        e.roundLengths && (y = Math.floor(y)),
                        T % e.slidesPerGroup == 0 && p.push(y),
                        c.push(y)) : (e.roundLengths && (y = Math.floor(y)),
                        (T - Math.min(this.params.slidesPerGroupSkip, T)) % this.params.slidesPerGroup == 0 && p.push(y),
                        c.push(y),
                        y = y + S + w),
                        this.virtualSize += S + w,
                        x = S,
                        T += 1
                    }
                }
                if (this.virtualSize = Math.max(this.virtualSize, s) + m,
                a && r && ("slide" === e.effect || "coverflow" === e.effect) && i.css({
                    width: this.virtualSize + e.spaceBetween + "px"
                }),
                e.setWrapperSize && (this.isHorizontal() ? i.css({
                    width: this.virtualSize + e.spaceBetween + "px"
                }) : i.css({
                    height: this.virtualSize + e.spaceBetween + "px"
                })),
                e.slidesPerColumn > 1 && (this.virtualSize = (S + e.spaceBetween) * E,
                this.virtualSize = Math.ceil(this.virtualSize / e.slidesPerColumn) - e.spaceBetween,
                this.isHorizontal() ? i.css({
                    width: this.virtualSize + e.spaceBetween + "px"
                }) : i.css({
                    height: this.virtualSize + e.spaceBetween + "px"
                }),
                e.centeredSlides)) {
                    C = [];
                    for (var Q = 0; Q < p.length; Q += 1) {
                        var J = p[Q];
                        e.roundLengths && (J = Math.floor(J)),
                        p[Q] < this.virtualSize + p[0] && C.push(J)
                    }
                    p = C
                }
                if (!e.centeredSlides) {
                    C = [];
                    for (var ee = 0; ee < p.length; ee += 1) {
                        var te = p[ee];
                        e.roundLengths && (te = Math.floor(te)),
                        p[ee] <= this.virtualSize - s && C.push(te)
                    }
                    p = C,
                    Math.floor(this.virtualSize - s) - Math.floor(p[p.length - 1]) > 1 && p.push(this.virtualSize - s)
                }
                if (0 === p.length && (p = [0]),
                0 !== e.spaceBetween && (this.isHorizontal() ? a ? d.filter(v).css({
                    marginLeft: w + "px"
                }) : d.filter(v).css({
                    marginRight: w + "px"
                }) : d.filter(v).css({
                    marginBottom: w + "px"
                })),
                e.centeredSlides && e.centeredSlidesBounds) {
                    var ie = 0;
                    u.forEach((function(t) {
                        ie += t + (e.spaceBetween ? e.spaceBetween : 0)
                    }
                    ));
                    var se = (ie -= e.spaceBetween) - s;
                    p = p.map((function(e) {
                        return e < 0 ? -f : e > se ? se + m : e
                    }
                    ))
                }
                if (e.centerInsufficientSlides) {
                    var ae = 0;
                    if (u.forEach((function(t) {
                        ae += t + (e.spaceBetween ? e.spaceBetween : 0)
                    }
                    )),
                    (ae -= e.spaceBetween) < s) {
                        var re = (s - ae) / 2;
                        p.forEach((function(e, t) {
                            p[t] = e - re
                        }
                        )),
                        c.forEach((function(e, t) {
                            c[t] = e + re
                        }
                        ))
                    }
                }
                n.extend(this, {
                    slides: d,
                    snapGrid: p,
                    slidesGrid: c,
                    slidesSizesGrid: u
                }),
                h !== l && this.emit("slidesLengthChange"),
                p.length !== g && (this.params.watchOverflow && this.checkOverflow(),
                this.emit("snapGridLengthChange")),
                c.length !== b && this.emit("slidesGridLengthChange"),
                (e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesOffset()
            }
        },
        updateAutoHeight: function(e) {
            var t, i = [], s = 0;
            if ("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed),
            "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1)
                if (this.params.centeredSlides)
                    i.push.apply(i, this.visibleSlides);
                else
                    for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
                        var a = this.activeIndex + t;
                        if (a > this.slides.length)
                            break;
                        i.push(this.slides.eq(a)[0])
                    }
            else
                i.push(this.slides.eq(this.activeIndex)[0]);
            for (t = 0; t < i.length; t += 1)
                if (void 0 !== i[t]) {
                    var r = i[t].offsetHeight;
                    s = r > s ? r : s
                }
            s && this.$wrapperEl.css("height", s + "px")
        },
        updateSlidesOffset: function() {
            for (var e = this.slides, t = 0; t < e.length; t += 1)
                e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
        },
        updateSlidesProgress: function(e) {
            void 0 === e && (e = this && this.translate || 0);
            var t = this.params
              , i = this.slides
              , a = this.rtlTranslate;
            if (0 !== i.length) {
                void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
                var r = -e;
                a && (r = e),
                i.removeClass(t.slideVisibleClass),
                this.visibleSlidesIndexes = [],
                this.visibleSlides = [];
                for (var n = 0; n < i.length; n += 1) {
                    var o = i[n]
                      , l = (r + (t.centeredSlides ? this.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + t.spaceBetween);
                    if (t.watchSlidesVisibility || t.centeredSlides && t.autoHeight) {
                        var d = -(r - o.swiperSlideOffset)
                          , h = d + this.slidesSizesGrid[n];
                        (d >= 0 && d < this.size - 1 || h > 1 && h <= this.size || d <= 0 && h >= this.size) && (this.visibleSlides.push(o),
                        this.visibleSlidesIndexes.push(n),
                        i.eq(n).addClass(t.slideVisibleClass))
                    }
                    o.progress = a ? -l : l
                }
                this.visibleSlides = s(this.visibleSlides)
            }
        },
        updateProgress: function(e) {
            if (void 0 === e) {
                var t = this.rtlTranslate ? -1 : 1;
                e = this && this.translate && this.translate * t || 0
            }
            var i = this.params
              , s = this.maxTranslate() - this.minTranslate()
              , a = this.progress
              , r = this.isBeginning
              , o = this.isEnd
              , l = r
              , d = o;
            0 === s ? (a = 0,
            r = !0,
            o = !0) : (r = (a = (e - this.minTranslate()) / s) <= 0,
            o = a >= 1),
            n.extend(this, {
                progress: a,
                isBeginning: r,
                isEnd: o
            }),
            (i.watchSlidesProgress || i.watchSlidesVisibility || i.centeredSlides && i.autoHeight) && this.updateSlidesProgress(e),
            r && !l && this.emit("reachBeginning toEdge"),
            o && !d && this.emit("reachEnd toEdge"),
            (l && !r || d && !o) && this.emit("fromEdge"),
            this.emit("progress", a)
        },
        updateSlidesClasses: function() {
            var e, t = this.slides, i = this.params, s = this.$wrapperEl, a = this.activeIndex, r = this.realIndex, n = this.virtual && i.virtual.enabled;
            t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass),
            (e = n ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + a + '"]') : t.eq(a)).addClass(i.slideActiveClass),
            i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass));
            var o = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
            i.loop && 0 === o.length && (o = t.eq(0)).addClass(i.slideNextClass);
            var l = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
            i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass),
            i.loop && (o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass),
            l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
        },
        updateActiveIndex: function(e) {
            var t, i = this.rtlTranslate ? this.translate : -this.translate, s = this.slidesGrid, a = this.snapGrid, r = this.params, o = this.activeIndex, l = this.realIndex, d = this.snapIndex, h = e;
            if (void 0 === h) {
                for (var p = 0; p < s.length; p += 1)
                    void 0 !== s[p + 1] ? i >= s[p] && i < s[p + 1] - (s[p + 1] - s[p]) / 2 ? h = p : i >= s[p] && i < s[p + 1] && (h = p + 1) : i >= s[p] && (h = p);
                r.normalizeSlideIndex && (h < 0 || void 0 === h) && (h = 0)
            }
            if (a.indexOf(i) >= 0)
                t = a.indexOf(i);
            else {
                var c = Math.min(r.slidesPerGroupSkip, h);
                t = c + Math.floor((h - c) / r.slidesPerGroup)
            }
            if (t >= a.length && (t = a.length - 1),
            h !== o) {
                var u = parseInt(this.slides.eq(h).attr("data-swiper-slide-index") || h, 10);
                n.extend(this, {
                    snapIndex: t,
                    realIndex: u,
                    previousIndex: o,
                    activeIndex: h
                }),
                this.emit("activeIndexChange"),
                this.emit("snapIndexChange"),
                l !== u && this.emit("realIndexChange"),
                (this.initialized || this.runCallbacksOnInit) && this.emit("slideChange")
            } else
                t !== d && (this.snapIndex = t,
                this.emit("snapIndexChange"))
        },
        updateClickedSlide: function(e) {
            var t = this.params
              , i = s(e.target).closest("." + t.slideClass)[0]
              , a = !1;
            if (i)
                for (var r = 0; r < this.slides.length; r += 1)
                    this.slides[r] === i && (a = !0);
            if (!i || !a)
                return this.clickedSlide = void 0,
                void (this.clickedIndex = void 0);
            this.clickedSlide = i,
            this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(s(i).attr("data-swiper-slide-index"), 10) : this.clickedIndex = s(i).index(),
            t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
        }
    };
    var p = {
        getTranslate: function(e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            var t = this.params
              , i = this.rtlTranslate
              , s = this.translate
              , a = this.$wrapperEl;
            if (t.virtualTranslate)
                return i ? -s : s;
            if (t.cssMode)
                return s;
            var r = n.getTranslate(a[0], e);
            return i && (r = -r),
            r || 0
        },
        setTranslate: function(e, t) {
            var i = this.rtlTranslate
              , s = this.params
              , a = this.$wrapperEl
              , r = this.wrapperEl
              , n = this.progress
              , o = 0
              , l = 0;
            this.isHorizontal() ? o = i ? -e : e : l = e,
            s.roundLengths && (o = Math.floor(o),
            l = Math.floor(l)),
            s.cssMode ? r[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -o : -l : s.virtualTranslate || a.transform("translate3d(" + o + "px, " + l + "px, 0px)"),
            this.previousTranslate = this.translate,
            this.translate = this.isHorizontal() ? o : l;
            var d = this.maxTranslate() - this.minTranslate();
            (0 === d ? 0 : (e - this.minTranslate()) / d) !== n && this.updateProgress(e),
            this.emit("setTranslate", this.translate, t)
        },
        minTranslate: function() {
            return -this.snapGrid[0]
        },
        maxTranslate: function() {
            return -this.snapGrid[this.snapGrid.length - 1]
        },
        translateTo: function(e, t, i, s, a) {
            var r;
            void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === i && (i = !0),
            void 0 === s && (s = !0);
            var n = this
              , o = n.params
              , l = n.wrapperEl;
            if (n.animating && o.preventInteractionOnTransition)
                return !1;
            var d, h = n.minTranslate(), p = n.maxTranslate();
            if (d = s && e > h ? h : s && e < p ? p : e,
            n.updateProgress(d),
            o.cssMode) {
                var c = n.isHorizontal();
                return 0 === t ? l[c ? "scrollLeft" : "scrollTop"] = -d : l.scrollTo ? l.scrollTo(((r = {})[c ? "left" : "top"] = -d,
                r.behavior = "smooth",
                r)) : l[c ? "scrollLeft" : "scrollTop"] = -d,
                !0
            }
            return 0 === t ? (n.setTransition(0),
            n.setTranslate(d),
            i && (n.emit("beforeTransitionStart", t, a),
            n.emit("transitionEnd"))) : (n.setTransition(t),
            n.setTranslate(d),
            i && (n.emit("beforeTransitionStart", t, a),
            n.emit("transitionStart")),
            n.animating || (n.animating = !0,
            n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function(e) {
                n && !n.destroyed && e.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd),
                n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd),
                n.onTranslateToWrapperTransitionEnd = null,
                delete n.onTranslateToWrapperTransitionEnd,
                i && n.emit("transitionEnd"))
            }
            ),
            n.$wrapperEl[0].addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd),
            n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd))),
            !0
        }
    };
    var c = {
        setTransition: function(e, t) {
            this.params.cssMode || this.$wrapperEl.transition(e),
            this.emit("setTransition", e, t)
        },
        transitionStart: function(e, t) {
            void 0 === e && (e = !0);
            var i = this.activeIndex
              , s = this.params
              , a = this.previousIndex;
            if (!s.cssMode) {
                s.autoHeight && this.updateAutoHeight();
                var r = t;
                if (r || (r = i > a ? "next" : i < a ? "prev" : "reset"),
                this.emit("transitionStart"),
                e && i !== a) {
                    if ("reset" === r)
                        return void this.emit("slideResetTransitionStart");
                    this.emit("slideChangeTransitionStart"),
                    "next" === r ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart")
                }
            }
        },
        transitionEnd: function(e, t) {
            void 0 === e && (e = !0);
            var i = this.activeIndex
              , s = this.previousIndex
              , a = this.params;
            if (this.animating = !1,
            !a.cssMode) {
                this.setTransition(0);
                var r = t;
                if (r || (r = i > s ? "next" : i < s ? "prev" : "reset"),
                this.emit("transitionEnd"),
                e && i !== s) {
                    if ("reset" === r)
                        return void this.emit("slideResetTransitionEnd");
                    this.emit("slideChangeTransitionEnd"),
                    "next" === r ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd")
                }
            }
        }
    };
    var u = {
        slideTo: function(e, t, i, s) {
            var a;
            void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === i && (i = !0);
            var r = this
              , n = e;
            n < 0 && (n = 0);
            var o = r.params
              , l = r.snapGrid
              , d = r.slidesGrid
              , h = r.previousIndex
              , p = r.activeIndex
              , c = r.rtlTranslate
              , u = r.wrapperEl;
            if (r.animating && o.preventInteractionOnTransition)
                return !1;
            var v = Math.min(r.params.slidesPerGroupSkip, n)
              , f = v + Math.floor((n - v) / r.params.slidesPerGroup);
            f >= l.length && (f = l.length - 1),
            (p || o.initialSlide || 0) === (h || 0) && i && r.emit("beforeSlideChangeStart");
            var m, g = -l[f];
            if (r.updateProgress(g),
            o.normalizeSlideIndex)
                for (var b = 0; b < d.length; b += 1)
                    -Math.floor(100 * g) >= Math.floor(100 * d[b]) && (n = b);
            if (r.initialized && n !== p) {
                if (!r.allowSlideNext && g < r.translate && g < r.minTranslate())
                    return !1;
                if (!r.allowSlidePrev && g > r.translate && g > r.maxTranslate() && (p || 0) !== n)
                    return !1
            }
            if (m = n > p ? "next" : n < p ? "prev" : "reset",
            c && -g === r.translate || !c && g === r.translate)
                return r.updateActiveIndex(n),
                o.autoHeight && r.updateAutoHeight(),
                r.updateSlidesClasses(),
                "slide" !== o.effect && r.setTranslate(g),
                "reset" !== m && (r.transitionStart(i, m),
                r.transitionEnd(i, m)),
                !1;
            if (o.cssMode) {
                var w = r.isHorizontal();
                return 0 === t ? u[w ? "scrollLeft" : "scrollTop"] = -g : u.scrollTo ? u.scrollTo(((a = {})[w ? "left" : "top"] = -g,
                a.behavior = "smooth",
                a)) : u[w ? "scrollLeft" : "scrollTop"] = -g,
                !0
            }
            return 0 === t ? (r.setTransition(0),
            r.setTranslate(g),
            r.updateActiveIndex(n),
            r.updateSlidesClasses(),
            r.emit("beforeTransitionStart", t, s),
            r.transitionStart(i, m),
            r.transitionEnd(i, m)) : (r.setTransition(t),
            r.setTranslate(g),
            r.updateActiveIndex(n),
            r.updateSlidesClasses(),
            r.emit("beforeTransitionStart", t, s),
            r.transitionStart(i, m),
            r.animating || (r.animating = !0,
            r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(e) {
                r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
                r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd),
                r.onSlideToWrapperTransitionEnd = null,
                delete r.onSlideToWrapperTransitionEnd,
                r.transitionEnd(i, m))
            }
            ),
            r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
            r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd))),
            !0
        },
        slideToLoop: function(e, t, i, s) {
            void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === i && (i = !0);
            var a = e;
            return this.params.loop && (a += this.loopedSlides),
            this.slideTo(a, t, i, s)
        },
        slideNext: function(e, t, i) {
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0);
            var s = this.params
              , a = this.animating
              , r = this.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;
            if (s.loop) {
                if (a)
                    return !1;
                this.loopFix(),
                this._clientLeft = this.$wrapperEl[0].clientLeft
            }
            return this.slideTo(this.activeIndex + r, e, t, i)
        },
        slidePrev: function(e, t, i) {
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0);
            var s = this.params
              , a = this.animating
              , r = this.snapGrid
              , n = this.slidesGrid
              , o = this.rtlTranslate;
            if (s.loop) {
                if (a)
                    return !1;
                this.loopFix(),
                this._clientLeft = this.$wrapperEl[0].clientLeft
            }
            function l(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }
            var d, h = l(o ? this.translate : -this.translate), p = r.map((function(e) {
                return l(e)
            }
            )), c = (n.map((function(e) {
                return l(e)
            }
            )),
            r[p.indexOf(h)],
            r[p.indexOf(h) - 1]);
            return void 0 === c && s.cssMode && r.forEach((function(e) {
                !c && h >= e && (c = e)
            }
            )),
            void 0 !== c && (d = n.indexOf(c)) < 0 && (d = this.activeIndex - 1),
            this.slideTo(d, e, t, i)
        },
        slideReset: function(e, t, i) {
            return void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            this.slideTo(this.activeIndex, e, t, i)
        },
        slideToClosest: function(e, t, i, s) {
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            void 0 === s && (s = .5);
            var a = this.activeIndex
              , r = Math.min(this.params.slidesPerGroupSkip, a)
              , n = r + Math.floor((a - r) / this.params.slidesPerGroup)
              , o = this.rtlTranslate ? this.translate : -this.translate;
            if (o >= this.snapGrid[n]) {
                var l = this.snapGrid[n];
                o - l > (this.snapGrid[n + 1] - l) * s && (a += this.params.slidesPerGroup)
            } else {
                var d = this.snapGrid[n - 1];
                o - d <= (this.snapGrid[n] - d) * s && (a -= this.params.slidesPerGroup)
            }
            return a = Math.max(a, 0),
            a = Math.min(a, this.slidesGrid.length - 1),
            this.slideTo(a, e, t, i)
        },
        slideToClickedSlide: function() {
            var e, t = this, i = t.params, a = t.$wrapperEl, r = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView, o = t.clickedIndex;
            if (i.loop) {
                if (t.animating)
                    return;
                e = parseInt(s(t.clickedSlide).attr("data-swiper-slide-index"), 10),
                i.centeredSlides ? o < t.loopedSlides - r / 2 || o > t.slides.length - t.loopedSlides + r / 2 ? (t.loopFix(),
                o = a.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(),
                n.nextTick((function() {
                    t.slideTo(o)
                }
                ))) : t.slideTo(o) : o > t.slides.length - r ? (t.loopFix(),
                o = a.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(),
                n.nextTick((function() {
                    t.slideTo(o)
                }
                ))) : t.slideTo(o)
            } else
                t.slideTo(o)
        }
    };
    var v = {
        loopCreate: function() {
            var t = this
              , i = t.params
              , a = t.$wrapperEl;
            a.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
            var r = a.children("." + i.slideClass);
            if (i.loopFillGroupWithBlank) {
                var n = i.slidesPerGroup - r.length % i.slidesPerGroup;
                if (n !== i.slidesPerGroup) {
                    for (var o = 0; o < n; o += 1) {
                        var l = s(e.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
                        a.append(l)
                    }
                    r = a.children("." + i.slideClass)
                }
            }
            "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = r.length),
            t.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10)),
            t.loopedSlides += i.loopAdditionalSlides,
            t.loopedSlides > r.length && (t.loopedSlides = r.length);
            var d = []
              , h = [];
            r.each((function(e, i) {
                var a = s(i);
                e < t.loopedSlides && h.push(i),
                e < r.length && e >= r.length - t.loopedSlides && d.push(i),
                a.attr("data-swiper-slide-index", e)
            }
            ));
            for (var p = 0; p < h.length; p += 1)
                a.append(s(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass));
            for (var c = d.length - 1; c >= 0; c -= 1)
                a.prepend(s(d[c].cloneNode(!0)).addClass(i.slideDuplicateClass))
        },
        loopFix: function() {
            this.emit("beforeLoopFix");
            var e, t = this.activeIndex, i = this.slides, s = this.loopedSlides, a = this.allowSlidePrev, r = this.allowSlideNext, n = this.snapGrid, o = this.rtlTranslate;
            this.allowSlidePrev = !0,
            this.allowSlideNext = !0;
            var l = -n[t] - this.getTranslate();
            if (t < s)
                e = i.length - 3 * s + t,
                e += s,
                this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l);
            else if (t >= i.length - s) {
                e = -i.length + t + s,
                e += s,
                this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l)
            }
            this.allowSlidePrev = a,
            this.allowSlideNext = r,
            this.emit("loopFix")
        },
        loopDestroy: function() {
            var e = this.$wrapperEl
              , t = this.params
              , i = this.slides;
            e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(),
            i.removeAttr("data-swiper-slide-index")
        }
    };
    var f = {
        setGrabCursor: function(e) {
            if (!(o.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode)) {
                var t = this.el;
                t.style.cursor = "move",
                t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab",
                t.style.cursor = e ? "-moz-grabbin" : "-moz-grab",
                t.style.cursor = e ? "grabbing" : "grab"
            }
        },
        unsetGrabCursor: function() {
            o.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this.el.style.cursor = "")
        }
    };
    var m, g, b, w, y, x, T, E, S, C, M, P, z, k, $, L = {
        appendSlide: function(e) {
            var t = this.$wrapperEl
              , i = this.params;
            if (i.loop && this.loopDestroy(),
            "object" == typeof e && "length"in e)
                for (var s = 0; s < e.length; s += 1)
                    e[s] && t.append(e[s]);
            else
                t.append(e);
            i.loop && this.loopCreate(),
            i.observer && o.observer || this.update()
        },
        prependSlide: function(e) {
            var t = this.params
              , i = this.$wrapperEl
              , s = this.activeIndex;
            t.loop && this.loopDestroy();
            var a = s + 1;
            if ("object" == typeof e && "length"in e) {
                for (var r = 0; r < e.length; r += 1)
                    e[r] && i.prepend(e[r]);
                a = s + e.length
            } else
                i.prepend(e);
            t.loop && this.loopCreate(),
            t.observer && o.observer || this.update(),
            this.slideTo(a, 0, !1)
        },
        addSlide: function(e, t) {
            var i = this.$wrapperEl
              , s = this.params
              , a = this.activeIndex;
            s.loop && (a -= this.loopedSlides,
            this.loopDestroy(),
            this.slides = i.children("." + s.slideClass));
            var r = this.slides.length;
            if (e <= 0)
                this.prependSlide(t);
            else if (e >= r)
                this.appendSlide(t);
            else {
                for (var n = a > e ? a + 1 : a, l = [], d = r - 1; d >= e; d -= 1) {
                    var h = this.slides.eq(d);
                    h.remove(),
                    l.unshift(h)
                }
                if ("object" == typeof t && "length"in t) {
                    for (var p = 0; p < t.length; p += 1)
                        t[p] && i.append(t[p]);
                    n = a > e ? a + t.length : a
                } else
                    i.append(t);
                for (var c = 0; c < l.length; c += 1)
                    i.append(l[c]);
                s.loop && this.loopCreate(),
                s.observer && o.observer || this.update(),
                s.loop ? this.slideTo(n + this.loopedSlides, 0, !1) : this.slideTo(n, 0, !1)
            }
        },
        removeSlide: function(e) {
            var t = this.params
              , i = this.$wrapperEl
              , s = this.activeIndex;
            t.loop && (s -= this.loopedSlides,
            this.loopDestroy(),
            this.slides = i.children("." + t.slideClass));
            var a, r = s;
            if ("object" == typeof e && "length"in e) {
                for (var n = 0; n < e.length; n += 1)
                    a = e[n],
                    this.slides[a] && this.slides.eq(a).remove(),
                    a < r && (r -= 1);
                r = Math.max(r, 0)
            } else
                a = e,
                this.slides[a] && this.slides.eq(a).remove(),
                a < r && (r -= 1),
                r = Math.max(r, 0);
            t.loop && this.loopCreate(),
            t.observer && o.observer || this.update(),
            t.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1)
        },
        removeAllSlides: function() {
            for (var e = [], t = 0; t < this.slides.length; t += 1)
                e.push(t);
            this.removeSlide(e)
        }
    }, I = (m = t.navigator.platform,
    g = t.navigator.userAgent,
    b = {
        ios: !1,
        android: !1,
        androidChrome: !1,
        desktop: !1,
        iphone: !1,
        ipod: !1,
        ipad: !1,
        edge: !1,
        ie: !1,
        firefox: !1,
        macos: !1,
        windows: !1,
        cordova: !(!t.cordova && !t.phonegap),
        phonegap: !(!t.cordova && !t.phonegap),
        electron: !1
    },
    w = t.screen.width,
    y = t.screen.height,
    x = g.match(/(Android);?[\s\/]+([\d.]+)?/),
    T = g.match(/(iPad).*OS\s([\d_]+)/),
    E = g.match(/(iPod)(.*OS\s([\d_]+))?/),
    S = !T && g.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    C = g.indexOf("MSIE ") >= 0 || g.indexOf("Trident/") >= 0,
    M = g.indexOf("Edge/") >= 0,
    P = g.indexOf("Gecko/") >= 0 && g.indexOf("Firefox/") >= 0,
    z = "Win32" === m,
    k = g.toLowerCase().indexOf("electron") >= 0,
    $ = "MacIntel" === m,
    !T && $ && o.touch && (1024 === w && 1366 === y || 834 === w && 1194 === y || 834 === w && 1112 === y || 768 === w && 1024 === y) && (T = g.match(/(Version)\/([\d.]+)/),
    $ = !1),
    b.ie = C,
    b.edge = M,
    b.firefox = P,
    x && !z && (b.os = "android",
    b.osVersion = x[2],
    b.android = !0,
    b.androidChrome = g.toLowerCase().indexOf("chrome") >= 0),
    (T || S || E) && (b.os = "ios",
    b.ios = !0),
    S && !E && (b.osVersion = S[2].replace(/_/g, "."),
    b.iphone = !0),
    T && (b.osVersion = T[2].replace(/_/g, "."),
    b.ipad = !0),
    E && (b.osVersion = E[3] ? E[3].replace(/_/g, ".") : null,
    b.ipod = !0),
    b.ios && b.osVersion && g.indexOf("Version/") >= 0 && "10" === b.osVersion.split(".")[0] && (b.osVersion = g.toLowerCase().split("version/")[1].split(" ")[0]),
    b.webView = !(!(S || T || E) || !g.match(/.*AppleWebKit(?!.*Safari)/i) && !t.navigator.standalone) || t.matchMedia && t.matchMedia("(display-mode: standalone)").matches,
    b.webview = b.webView,
    b.standalone = b.webView,
    b.desktop = !(b.ios || b.android) || k,
    b.desktop && (b.electron = k,
    b.macos = $,
    b.windows = z,
    b.macos && (b.os = "macos"),
    b.windows && (b.os = "windows")),
    b.pixelRatio = t.devicePixelRatio || 1,
    b);
    function D(i) {
        var a = this.touchEventsData
          , r = this.params
          , o = this.touches;
        if (!this.animating || !r.preventInteractionOnTransition) {
            var l = i;
            l.originalEvent && (l = l.originalEvent);
            var d = s(l.target);
            if (("wrapper" !== r.touchEventsTarget || d.closest(this.wrapperEl).length) && (a.isTouchEvent = "touchstart" === l.type,
            (a.isTouchEvent || !("which"in l) || 3 !== l.which) && !(!a.isTouchEvent && "button"in l && l.button > 0 || a.isTouched && a.isMoved)))
                if (r.noSwiping && d.closest(r.noSwipingSelector ? r.noSwipingSelector : "." + r.noSwipingClass)[0])
                    this.allowClick = !0;
                else if (!r.swipeHandler || d.closest(r.swipeHandler)[0]) {
                    o.currentX = "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX,
                    o.currentY = "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY;
                    var h = o.currentX
                      , p = o.currentY
                      , c = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection
                      , u = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
                    if (!c || !(h <= u || h >= t.screen.width - u)) {
                        if (n.extend(a, {
                            isTouched: !0,
                            isMoved: !1,
                            allowTouchCallbacks: !0,
                            isScrolling: void 0,
                            startMoving: void 0
                        }),
                        o.startX = h,
                        o.startY = p,
                        a.touchStartTime = n.now(),
                        this.allowClick = !0,
                        this.updateSize(),
                        this.swipeDirection = void 0,
                        r.threshold > 0 && (a.allowThresholdMove = !1),
                        "touchstart" !== l.type) {
                            var v = !0;
                            d.is(a.formElements) && (v = !1),
                            e.activeElement && s(e.activeElement).is(a.formElements) && e.activeElement !== d[0] && e.activeElement.blur();
                            var f = v && this.allowTouchMove && r.touchStartPreventDefault;
                            (r.touchStartForcePreventDefault || f) && l.preventDefault()
                        }
                        this.emit("touchStart", l)
                    }
                }
        }
    }
    function O(t) {
        var i = this.touchEventsData
          , a = this.params
          , r = this.touches
          , o = this.rtlTranslate
          , l = t;
        if (l.originalEvent && (l = l.originalEvent),
        i.isTouched) {
            if (!i.isTouchEvent || "mousemove" !== l.type) {
                var d = "touchmove" === l.type && l.targetTouches && (l.targetTouches[0] || l.changedTouches[0])
                  , h = "touchmove" === l.type ? d.pageX : l.pageX
                  , p = "touchmove" === l.type ? d.pageY : l.pageY;
                if (l.preventedByNestedSwiper)
                    return r.startX = h,
                    void (r.startY = p);
                if (!this.allowTouchMove)
                    return this.allowClick = !1,
                    void (i.isTouched && (n.extend(r, {
                        startX: h,
                        startY: p,
                        currentX: h,
                        currentY: p
                    }),
                    i.touchStartTime = n.now()));
                if (i.isTouchEvent && a.touchReleaseOnEdges && !a.loop)
                    if (this.isVertical()) {
                        if (p < r.startY && this.translate <= this.maxTranslate() || p > r.startY && this.translate >= this.minTranslate())
                            return i.isTouched = !1,
                            void (i.isMoved = !1)
                    } else if (h < r.startX && this.translate <= this.maxTranslate() || h > r.startX && this.translate >= this.minTranslate())
                        return;
                if (i.isTouchEvent && e.activeElement && l.target === e.activeElement && s(l.target).is(i.formElements))
                    return i.isMoved = !0,
                    void (this.allowClick = !1);
                if (i.allowTouchCallbacks && this.emit("touchMove", l),
                !(l.targetTouches && l.targetTouches.length > 1)) {
                    r.currentX = h,
                    r.currentY = p;
                    var c = r.currentX - r.startX
                      , u = r.currentY - r.startY;
                    if (!(this.params.threshold && Math.sqrt(Math.pow(c, 2) + Math.pow(u, 2)) < this.params.threshold)) {
                        var v;
                        if (void 0 === i.isScrolling)
                            this.isHorizontal() && r.currentY === r.startY || this.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : c * c + u * u >= 25 && (v = 180 * Math.atan2(Math.abs(u), Math.abs(c)) / Math.PI,
                            i.isScrolling = this.isHorizontal() ? v > a.touchAngle : 90 - v > a.touchAngle);
                        if (i.isScrolling && this.emit("touchMoveOpposite", l),
                        void 0 === i.startMoving && (r.currentX === r.startX && r.currentY === r.startY || (i.startMoving = !0)),
                        i.isScrolling)
                            i.isTouched = !1;
                        else if (i.startMoving) {
                            this.allowClick = !1,
                            a.cssMode || l.preventDefault(),
                            a.touchMoveStopPropagation && !a.nested && l.stopPropagation(),
                            i.isMoved || (a.loop && this.loopFix(),
                            i.startTranslate = this.getTranslate(),
                            this.setTransition(0),
                            this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                            i.allowMomentumBounce = !1,
                            !a.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0),
                            this.emit("sliderFirstMove", l)),
                            this.emit("sliderMove", l),
                            i.isMoved = !0;
                            var f = this.isHorizontal() ? c : u;
                            r.diff = f,
                            f *= a.touchRatio,
                            o && (f = -f),
                            this.swipeDirection = f > 0 ? "prev" : "next",
                            i.currentTranslate = f + i.startTranslate;
                            var m = !0
                              , g = a.resistanceRatio;
                            if (a.touchReleaseOnEdges && (g = 0),
                            f > 0 && i.currentTranslate > this.minTranslate() ? (m = !1,
                            a.resistance && (i.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + i.startTranslate + f, g))) : f < 0 && i.currentTranslate < this.maxTranslate() && (m = !1,
                            a.resistance && (i.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - i.startTranslate - f, g))),
                            m && (l.preventedByNestedSwiper = !0),
                            !this.allowSlideNext && "next" === this.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate),
                            !this.allowSlidePrev && "prev" === this.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate),
                            a.threshold > 0) {
                                if (!(Math.abs(f) > a.threshold || i.allowThresholdMove))
                                    return void (i.currentTranslate = i.startTranslate);
                                if (!i.allowThresholdMove)
                                    return i.allowThresholdMove = !0,
                                    r.startX = r.currentX,
                                    r.startY = r.currentY,
                                    i.currentTranslate = i.startTranslate,
                                    void (r.diff = this.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
                            }
                            a.followFinger && !a.cssMode && ((a.freeMode || a.watchSlidesProgress || a.watchSlidesVisibility) && (this.updateActiveIndex(),
                            this.updateSlidesClasses()),
                            a.freeMode && (0 === i.velocities.length && i.velocities.push({
                                position: r[this.isHorizontal() ? "startX" : "startY"],
                                time: i.touchStartTime
                            }),
                            i.velocities.push({
                                position: r[this.isHorizontal() ? "currentX" : "currentY"],
                                time: n.now()
                            })),
                            this.updateProgress(i.currentTranslate),
                            this.setTranslate(i.currentTranslate))
                        }
                    }
                }
            }
        } else
            i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", l)
    }
    function A(e) {
        var t = this
          , i = t.touchEventsData
          , s = t.params
          , a = t.touches
          , r = t.rtlTranslate
          , o = t.$wrapperEl
          , l = t.slidesGrid
          , d = t.snapGrid
          , h = e;
        if (h.originalEvent && (h = h.originalEvent),
        i.allowTouchCallbacks && t.emit("touchEnd", h),
        i.allowTouchCallbacks = !1,
        !i.isTouched)
            return i.isMoved && s.grabCursor && t.setGrabCursor(!1),
            i.isMoved = !1,
            void (i.startMoving = !1);
        s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        var p, c = n.now(), u = c - i.touchStartTime;
        if (t.allowClick && (t.updateClickedSlide(h),
        t.emit("tap click", h),
        u < 300 && c - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", h)),
        i.lastClickTime = n.now(),
        n.nextTick((function() {
            t.destroyed || (t.allowClick = !0)
        }
        )),
        !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === a.diff || i.currentTranslate === i.startTranslate)
            return i.isTouched = !1,
            i.isMoved = !1,
            void (i.startMoving = !1);
        if (i.isTouched = !1,
        i.isMoved = !1,
        i.startMoving = !1,
        p = s.followFinger ? r ? t.translate : -t.translate : -i.currentTranslate,
        !s.cssMode)
            if (s.freeMode) {
                if (p < -t.minTranslate())
                    return void t.slideTo(t.activeIndex);
                if (p > -t.maxTranslate())
                    return void (t.slides.length < d.length ? t.slideTo(d.length - 1) : t.slideTo(t.slides.length - 1));
                if (s.freeModeMomentum) {
                    if (i.velocities.length > 1) {
                        var v = i.velocities.pop()
                          , f = i.velocities.pop()
                          , m = v.position - f.position
                          , g = v.time - f.time;
                        t.velocity = m / g,
                        t.velocity /= 2,
                        Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0),
                        (g > 150 || n.now() - v.time > 300) && (t.velocity = 0)
                    } else
                        t.velocity = 0;
                    t.velocity *= s.freeModeMomentumVelocityRatio,
                    i.velocities.length = 0;
                    var b = 1e3 * s.freeModeMomentumRatio
                      , w = t.velocity * b
                      , y = t.translate + w;
                    r && (y = -y);
                    var x, T, E = !1, S = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
                    if (y < t.maxTranslate())
                        s.freeModeMomentumBounce ? (y + t.maxTranslate() < -S && (y = t.maxTranslate() - S),
                        x = t.maxTranslate(),
                        E = !0,
                        i.allowMomentumBounce = !0) : y = t.maxTranslate(),
                        s.loop && s.centeredSlides && (T = !0);
                    else if (y > t.minTranslate())
                        s.freeModeMomentumBounce ? (y - t.minTranslate() > S && (y = t.minTranslate() + S),
                        x = t.minTranslate(),
                        E = !0,
                        i.allowMomentumBounce = !0) : y = t.minTranslate(),
                        s.loop && s.centeredSlides && (T = !0);
                    else if (s.freeModeSticky) {
                        for (var C, M = 0; M < d.length; M += 1)
                            if (d[M] > -y) {
                                C = M;
                                break
                            }
                        y = -(y = Math.abs(d[C] - y) < Math.abs(d[C - 1] - y) || "next" === t.swipeDirection ? d[C] : d[C - 1])
                    }
                    if (T && t.once("transitionEnd", (function() {
                        t.loopFix()
                    }
                    )),
                    0 !== t.velocity) {
                        if (b = r ? Math.abs((-y - t.translate) / t.velocity) : Math.abs((y - t.translate) / t.velocity),
                        s.freeModeSticky) {
                            var P = Math.abs((r ? -y : y) - t.translate)
                              , z = t.slidesSizesGrid[t.activeIndex];
                            b = P < z ? s.speed : P < 2 * z ? 1.5 * s.speed : 2.5 * s.speed
                        }
                    } else if (s.freeModeSticky)
                        return void t.slideToClosest();
                    s.freeModeMomentumBounce && E ? (t.updateProgress(x),
                    t.setTransition(b),
                    t.setTranslate(y),
                    t.transitionStart(!0, t.swipeDirection),
                    t.animating = !0,
                    o.transitionEnd((function() {
                        t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"),
                        t.setTransition(s.speed),
                        t.setTranslate(x),
                        o.transitionEnd((function() {
                            t && !t.destroyed && t.transitionEnd()
                        }
                        )))
                    }
                    ))) : t.velocity ? (t.updateProgress(y),
                    t.setTransition(b),
                    t.setTranslate(y),
                    t.transitionStart(!0, t.swipeDirection),
                    t.animating || (t.animating = !0,
                    o.transitionEnd((function() {
                        t && !t.destroyed && t.transitionEnd()
                    }
                    )))) : t.updateProgress(y),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses()
                } else if (s.freeModeSticky)
                    return void t.slideToClosest();
                (!s.freeModeMomentum || u >= s.longSwipesMs) && (t.updateProgress(),
                t.updateActiveIndex(),
                t.updateSlidesClasses())
            } else {
                for (var k = 0, $ = t.slidesSizesGrid[0], L = 0; L < l.length; L += L < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
                    var I = L < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
                    void 0 !== l[L + I] ? p >= l[L] && p < l[L + I] && (k = L,
                    $ = l[L + I] - l[L]) : p >= l[L] && (k = L,
                    $ = l[l.length - 1] - l[l.length - 2])
                }
                var D = (p - l[k]) / $
                  , O = k < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
                if (u > s.longSwipesMs) {
                    if (!s.longSwipes)
                        return void t.slideTo(t.activeIndex);
                    "next" === t.swipeDirection && (D >= s.longSwipesRatio ? t.slideTo(k + O) : t.slideTo(k)),
                    "prev" === t.swipeDirection && (D > 1 - s.longSwipesRatio ? t.slideTo(k + O) : t.slideTo(k))
                } else {
                    if (!s.shortSwipes)
                        return void t.slideTo(t.activeIndex);
                    t.navigation && (h.target === t.navigation.nextEl || h.target === t.navigation.prevEl) ? h.target === t.navigation.nextEl ? t.slideTo(k + O) : t.slideTo(k) : ("next" === t.swipeDirection && t.slideTo(k + O),
                    "prev" === t.swipeDirection && t.slideTo(k))
                }
            }
    }
    function G() {
        var e = this.params
          , t = this.el;
        if (!t || 0 !== t.offsetWidth) {
            e.breakpoints && this.setBreakpoint();
            var i = this.allowSlideNext
              , s = this.allowSlidePrev
              , a = this.snapGrid;
            this.allowSlideNext = !0,
            this.allowSlidePrev = !0,
            this.updateSize(),
            this.updateSlides(),
            this.updateSlidesClasses(),
            ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0),
            this.autoplay && this.autoplay.running && this.autoplay.paused && this.autoplay.run(),
            this.allowSlidePrev = s,
            this.allowSlideNext = i,
            this.params.watchOverflow && a !== this.snapGrid && this.checkOverflow()
        }
    }
    function H(e) {
        this.allowClick || (this.params.preventClicks && e.preventDefault(),
        this.params.preventClicksPropagation && this.animating && (e.stopPropagation(),
        e.stopImmediatePropagation()))
    }
    function B() {
        var e = this.wrapperEl;
        this.previousTranslate = this.translate,
        this.translate = this.isHorizontal() ? -e.scrollLeft : -e.scrollTop,
        -0 === this.translate && (this.translate = 0),
        this.updateActiveIndex(),
        this.updateSlidesClasses();
        var t = this.maxTranslate() - this.minTranslate();
        (0 === t ? 0 : (this.translate - this.minTranslate()) / t) !== this.progress && this.updateProgress(this.translate),
        this.emit("setTranslate", this.translate, !1)
    }
    var N = !1;
    function X() {}
    var V = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "container",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        preventInteractionOnTransition: !1,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: .02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !1,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-container-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0
    }
      , Y = {
        update: h,
        translate: p,
        transition: c,
        slide: u,
        loop: v,
        grabCursor: f,
        manipulation: L,
        events: {
            attachEvents: function() {
                var t = this.params
                  , i = this.touchEvents
                  , s = this.el
                  , a = this.wrapperEl;
                this.onTouchStart = D.bind(this),
                this.onTouchMove = O.bind(this),
                this.onTouchEnd = A.bind(this),
                t.cssMode && (this.onScroll = B.bind(this)),
                this.onClick = H.bind(this);
                var r = !!t.nested;
                if (!o.touch && o.pointerEvents)
                    s.addEventListener(i.start, this.onTouchStart, !1),
                    e.addEventListener(i.move, this.onTouchMove, r),
                    e.addEventListener(i.end, this.onTouchEnd, !1);
                else {
                    if (o.touch) {
                        var n = !("touchstart" !== i.start || !o.passiveListener || !t.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        s.addEventListener(i.start, this.onTouchStart, n),
                        s.addEventListener(i.move, this.onTouchMove, o.passiveListener ? {
                            passive: !1,
                            capture: r
                        } : r),
                        s.addEventListener(i.end, this.onTouchEnd, n),
                        i.cancel && s.addEventListener(i.cancel, this.onTouchEnd, n),
                        N || (e.addEventListener("touchstart", X),
                        N = !0)
                    }
                    (t.simulateTouch && !I.ios && !I.android || t.simulateTouch && !o.touch && I.ios) && (s.addEventListener("mousedown", this.onTouchStart, !1),
                    e.addEventListener("mousemove", this.onTouchMove, r),
                    e.addEventListener("mouseup", this.onTouchEnd, !1))
                }
                (t.preventClicks || t.preventClicksPropagation) && s.addEventListener("click", this.onClick, !0),
                t.cssMode && a.addEventListener("scroll", this.onScroll),
                t.updateOnWindowResize ? this.on(I.ios || I.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", G, !0) : this.on("observerUpdate", G, !0)
            },
            detachEvents: function() {
                var t = this.params
                  , i = this.touchEvents
                  , s = this.el
                  , a = this.wrapperEl
                  , r = !!t.nested;
                if (!o.touch && o.pointerEvents)
                    s.removeEventListener(i.start, this.onTouchStart, !1),
                    e.removeEventListener(i.move, this.onTouchMove, r),
                    e.removeEventListener(i.end, this.onTouchEnd, !1);
                else {
                    if (o.touch) {
                        var n = !("onTouchStart" !== i.start || !o.passiveListener || !t.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        s.removeEventListener(i.start, this.onTouchStart, n),
                        s.removeEventListener(i.move, this.onTouchMove, r),
                        s.removeEventListener(i.end, this.onTouchEnd, n),
                        i.cancel && s.removeEventListener(i.cancel, this.onTouchEnd, n)
                    }
                    (t.simulateTouch && !I.ios && !I.android || t.simulateTouch && !o.touch && I.ios) && (s.removeEventListener("mousedown", this.onTouchStart, !1),
                    e.removeEventListener("mousemove", this.onTouchMove, r),
                    e.removeEventListener("mouseup", this.onTouchEnd, !1))
                }
                (t.preventClicks || t.preventClicksPropagation) && s.removeEventListener("click", this.onClick, !0),
                t.cssMode && a.removeEventListener("scroll", this.onScroll),
                this.off(I.ios || I.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", G)
            }
        },
        breakpoints: {
            setBreakpoint: function() {
                var e = this.activeIndex
                  , t = this.initialized
                  , i = this.loopedSlides;
                void 0 === i && (i = 0);
                var s = this.params
                  , a = this.$el
                  , r = s.breakpoints;
                if (r && (!r || 0 !== Object.keys(r).length)) {
                    var o = this.getBreakpoint(r);
                    if (o && this.currentBreakpoint !== o) {
                        var l = o in r ? r[o] : void 0;
                        l && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach((function(e) {
                            var t = l[e];
                            void 0 !== t && (l[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                        }
                        ));
                        var d = l || this.originalParams
                          , h = s.slidesPerColumn > 1
                          , p = d.slidesPerColumn > 1;
                        h && !p ? a.removeClass(s.containerModifierClass + "multirow " + s.containerModifierClass + "multirow-column") : !h && p && (a.addClass(s.containerModifierClass + "multirow"),
                        "column" === d.slidesPerColumnFill && a.addClass(s.containerModifierClass + "multirow-column"));
                        var c = d.direction && d.direction !== s.direction
                          , u = s.loop && (d.slidesPerView !== s.slidesPerView || c);
                        c && t && this.changeDirection(),
                        n.extend(this.params, d),
                        n.extend(this, {
                            allowTouchMove: this.params.allowTouchMove,
                            allowSlideNext: this.params.allowSlideNext,
                            allowSlidePrev: this.params.allowSlidePrev
                        }),
                        this.currentBreakpoint = o,
                        u && t && (this.loopDestroy(),
                        this.loopCreate(),
                        this.updateSlides(),
                        this.slideTo(e - i + this.loopedSlides, 0, !1)),
                        this.emit("breakpoint", d)
                    }
                }
            },
            getBreakpoint: function(e) {
                if (e) {
                    var i = !1
                      , s = Object.keys(e).map((function(e) {
                        if ("string" == typeof e && 0 === e.indexOf("@")) {
                            var i = parseFloat(e.substr(1));
                            return {
                                value: t.innerHeight * i,
                                point: e
                            }
                        }
                        return {
                            value: e,
                            point: e
                        }
                    }
                    ));
                    s.sort((function(e, t) {
                        return parseInt(e.value, 10) - parseInt(t.value, 10)
                    }
                    ));
                    for (var a = 0; a < s.length; a += 1) {
                        var r = s[a]
                          , n = r.point;
                        r.value <= t.innerWidth && (i = n)
                    }
                    return i || "max"
                }
            }
        },
        checkOverflow: {
            checkOverflow: function() {
                var e = this.params
                  , t = this.isLocked
                  , i = this.slides.length > 0 && e.slidesOffsetBefore + e.spaceBetween * (this.slides.length - 1) + this.slides[0].offsetWidth * this.slides.length;
                e.slidesOffsetBefore && e.slidesOffsetAfter && i ? this.isLocked = i <= this.size : this.isLocked = 1 === this.snapGrid.length,
                this.allowSlideNext = !this.isLocked,
                this.allowSlidePrev = !this.isLocked,
                t !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"),
                t && t !== this.isLocked && (this.isEnd = !1,
                this.navigation.update())
            }
        },
        classes: {
            addClasses: function() {
                var e = this.classNames
                  , t = this.params
                  , i = this.rtl
                  , s = this.$el
                  , a = [];
                a.push("initialized"),
                a.push(t.direction),
                t.freeMode && a.push("free-mode"),
                t.autoHeight && a.push("autoheight"),
                i && a.push("rtl"),
                t.slidesPerColumn > 1 && (a.push("multirow"),
                "column" === t.slidesPerColumnFill && a.push("multirow-column")),
                I.android && a.push("android"),
                I.ios && a.push("ios"),
                t.cssMode && a.push("css-mode"),
                a.forEach((function(i) {
                    e.push(t.containerModifierClass + i)
                }
                )),
                s.addClass(e.join(" "))
            },
            removeClasses: function() {
                var e = this.$el
                  , t = this.classNames;
                e.removeClass(t.join(" "))
            }
        },
        images: {
            loadImage: function(e, i, s, a, r, n) {
                var o;
                function l() {
                    n && n()
                }
                e.complete && r ? l() : i ? ((o = new t.Image).onload = l,
                o.onerror = l,
                a && (o.sizes = a),
                s && (o.srcset = s),
                i && (o.src = i)) : l()
            },
            preloadImages: function() {
                var e = this;
                function t() {
                    null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                    e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(),
                    e.emit("imagesReady")))
                }
                e.imagesToLoad = e.$el.find("img");
                for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                    var s = e.imagesToLoad[i];
                    e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t)
                }
            }
        }
    }
      , F = {}
      , W = function(e) {
        function t() {
            for (var i, a, r, l = [], d = arguments.length; d--; )
                l[d] = arguments[d];
            1 === l.length && l[0].constructor && l[0].constructor === Object ? r = l[0] : (a = (i = l)[0],
            r = i[1]),
            r || (r = {}),
            r = n.extend({}, r),
            a && !r.el && (r.el = a),
            e.call(this, r),
            Object.keys(Y).forEach((function(e) {
                Object.keys(Y[e]).forEach((function(i) {
                    t.prototype[i] || (t.prototype[i] = Y[e][i])
                }
                ))
            }
            ));
            var h = this;
            void 0 === h.modules && (h.modules = {}),
            Object.keys(h.modules).forEach((function(e) {
                var t = h.modules[e];
                if (t.params) {
                    var i = Object.keys(t.params)[0]
                      , s = t.params[i];
                    if ("object" != typeof s || null === s)
                        return;
                    if (!(i in r && "enabled"in s))
                        return;
                    !0 === r[i] && (r[i] = {
                        enabled: !0
                    }),
                    "object" != typeof r[i] || "enabled"in r[i] || (r[i].enabled = !0),
                    r[i] || (r[i] = {
                        enabled: !1
                    })
                }
            }
            ));
            var p = n.extend({}, V);
            h.useModulesParams(p),
            h.params = n.extend({}, p, F, r),
            h.originalParams = n.extend({}, h.params),
            h.passedParams = n.extend({}, r),
            h.$ = s;
            var c = s(h.params.el);
            if (a = c[0]) {
                if (c.length > 1) {
                    var u = [];
                    return c.each((function(e, i) {
                        var s = n.extend({}, r, {
                            el: i
                        });
                        u.push(new t(s))
                    }
                    )),
                    u
                }
                var v, f, m;
                return a.swiper = h,
                c.data("swiper", h),
                a && a.shadowRoot && a.shadowRoot.querySelector ? (v = s(a.shadowRoot.querySelector("." + h.params.wrapperClass))).children = function(e) {
                    return c.children(e)
                }
                : v = c.children("." + h.params.wrapperClass),
                n.extend(h, {
                    $el: c,
                    el: a,
                    $wrapperEl: v,
                    wrapperEl: v[0],
                    classNames: [],
                    slides: s(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal: function() {
                        return "horizontal" === h.params.direction
                    },
                    isVertical: function() {
                        return "vertical" === h.params.direction
                    },
                    rtl: "rtl" === a.dir.toLowerCase() || "rtl" === c.css("direction"),
                    rtlTranslate: "horizontal" === h.params.direction && ("rtl" === a.dir.toLowerCase() || "rtl" === c.css("direction")),
                    wrongRTL: "-webkit-box" === v.css("display"),
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: !0,
                    isEnd: !1,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: !1,
                    allowSlideNext: h.params.allowSlideNext,
                    allowSlidePrev: h.params.allowSlidePrev,
                    touchEvents: (f = ["touchstart", "touchmove", "touchend", "touchcancel"],
                    m = ["mousedown", "mousemove", "mouseup"],
                    o.pointerEvents && (m = ["pointerdown", "pointermove", "pointerup"]),
                    h.touchEventsTouch = {
                        start: f[0],
                        move: f[1],
                        end: f[2],
                        cancel: f[3]
                    },
                    h.touchEventsDesktop = {
                        start: m[0],
                        move: m[1],
                        end: m[2]
                    },
                    o.touch || !h.params.simulateTouch ? h.touchEventsTouch : h.touchEventsDesktop),
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        formElements: "input, select, option, textarea, button, video, label",
                        lastClickTime: n.now(),
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        isTouchEvent: void 0,
                        startMoving: void 0
                    },
                    allowClick: !0,
                    allowTouchMove: h.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                }),
                h.useModules(),
                h.params.init && h.init(),
                h
            }
        }
        e && (t.__proto__ = e),
        t.prototype = Object.create(e && e.prototype),
        t.prototype.constructor = t;
        var i = {
            extendedDefaults: {
                configurable: !0
            },
            defaults: {
                configurable: !0
            },
            Class: {
                configurable: !0
            },
            $: {
                configurable: !0
            }
        };
        return t.prototype.slidesPerViewDynamic = function() {
            var e = this.params
              , t = this.slides
              , i = this.slidesGrid
              , s = this.size
              , a = this.activeIndex
              , r = 1;
            if (e.centeredSlides) {
                for (var n, o = t[a].swiperSlideSize, l = a + 1; l < t.length; l += 1)
                    t[l] && !n && (r += 1,
                    (o += t[l].swiperSlideSize) > s && (n = !0));
                for (var d = a - 1; d >= 0; d -= 1)
                    t[d] && !n && (r += 1,
                    (o += t[d].swiperSlideSize) > s && (n = !0))
            } else
                for (var h = a + 1; h < t.length; h += 1)
                    i[h] - i[a] < s && (r += 1);
            return r
        }
        ,
        t.prototype.update = function() {
            var e = this;
            if (e && !e.destroyed) {
                var t = e.snapGrid
                  , i = e.params;
                i.breakpoints && e.setBreakpoint(),
                e.updateSize(),
                e.updateSlides(),
                e.updateProgress(),
                e.updateSlidesClasses(),
                e.params.freeMode ? (s(),
                e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || s(),
                i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
                e.emit("update")
            }
            function s() {
                var t = e.rtlTranslate ? -1 * e.translate : e.translate
                  , i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(i),
                e.updateActiveIndex(),
                e.updateSlidesClasses()
            }
        }
        ,
        t.prototype.changeDirection = function(e, t) {
            void 0 === t && (t = !0);
            var i = this.params.direction;
            return e || (e = "horizontal" === i ? "vertical" : "horizontal"),
            e === i || "horizontal" !== e && "vertical" !== e ? this : (this.$el.removeClass("" + this.params.containerModifierClass + i).addClass("" + this.params.containerModifierClass + e),
            this.params.direction = e,
            this.slides.each((function(t, i) {
                "vertical" === e ? i.style.width = "" : i.style.height = ""
            }
            )),
            this.emit("changeDirection"),
            t && this.update(),
            this)
        }
        ,
        t.prototype.init = function() {
            this.initialized || (this.emit("beforeInit"),
            this.params.breakpoints && this.setBreakpoint(),
            this.addClasses(),
            this.params.loop && this.loopCreate(),
            this.updateSize(),
            this.updateSlides(),
            this.params.watchOverflow && this.checkOverflow(),
            this.params.grabCursor && this.setGrabCursor(),
            this.params.preloadImages && this.preloadImages(),
            this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit),
            this.attachEvents(),
            this.initialized = !0,
            this.emit("init"))
        }
        ,
        t.prototype.destroy = function(e, t) {
            void 0 === e && (e = !0),
            void 0 === t && (t = !0);
            var i = this
              , s = i.params
              , a = i.$el
              , r = i.$wrapperEl
              , o = i.slides;
            return void 0 === i.params || i.destroyed ? null : (i.emit("beforeDestroy"),
            i.initialized = !1,
            i.detachEvents(),
            s.loop && i.loopDestroy(),
            t && (i.removeClasses(),
            a.removeAttr("style"),
            r.removeAttr("style"),
            o && o.length && o.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),
            i.emit("destroy"),
            Object.keys(i.eventsListeners).forEach((function(e) {
                i.off(e)
            }
            )),
            !1 !== e && (i.$el[0].swiper = null,
            i.$el.data("swiper", null),
            n.deleteProps(i)),
            i.destroyed = !0,
            null)
        }
        ,
        t.extendDefaults = function(e) {
            n.extend(F, e)
        }
        ,
        i.extendedDefaults.get = function() {
            return F
        }
        ,
        i.defaults.get = function() {
            return V
        }
        ,
        i.Class.get = function() {
            return e
        }
        ,
        i.$.get = function() {
            return s
        }
        ,
        Object.defineProperties(t, i),
        t
    }(l)
      , R = {
        name: "device",
        proto: {
            device: I
        },
        static: {
            device: I
        }
    }
      , q = {
        name: "support",
        proto: {
            support: o
        },
        static: {
            support: o
        }
    }
      , j = {
        isEdge: !!t.navigator.userAgent.match(/Edge/g),
        isSafari: function() {
            var e = t.navigator.userAgent.toLowerCase();
            return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
        }(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
    }
      , K = {
        name: "browser",
        proto: {
            browser: j
        },
        static: {
            browser: j
        }
    }
      , U = {
        name: "resize",
        create: function() {
            var e = this;
            n.extend(e, {
                resize: {
                    resizeHandler: function() {
                        e && !e.destroyed && e.initialized && (e.emit("beforeResize"),
                        e.emit("resize"))
                    },
                    orientationChangeHandler: function() {
                        e && !e.destroyed && e.initialized && e.emit("orientationchange")
                    }
                }
            })
        },
        on: {
            init: function() {
                t.addEventListener("resize", this.resize.resizeHandler),
                t.addEventListener("orientationchange", this.resize.orientationChangeHandler)
            },
            destroy: function() {
                t.removeEventListener("resize", this.resize.resizeHandler),
                t.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
            }
        }
    }
      , _ = {
        func: t.MutationObserver || t.WebkitMutationObserver,
        attach: function(e, i) {
            void 0 === i && (i = {});
            var s = this
              , a = new (0,
            _.func)((function(e) {
                if (1 !== e.length) {
                    var i = function() {
                        s.emit("observerUpdate", e[0])
                    };
                    t.requestAnimationFrame ? t.requestAnimationFrame(i) : t.setTimeout(i, 0)
                } else
                    s.emit("observerUpdate", e[0])
            }
            ));
            a.observe(e, {
                attributes: void 0 === i.attributes || i.attributes,
                childList: void 0 === i.childList || i.childList,
                characterData: void 0 === i.characterData || i.characterData
            }),
            s.observer.observers.push(a)
        },
        init: function() {
            if (o.observer && this.params.observer) {
                if (this.params.observeParents)
                    for (var e = this.$el.parents(), t = 0; t < e.length; t += 1)
                        this.observer.attach(e[t]);
                this.observer.attach(this.$el[0], {
                    childList: this.params.observeSlideChildren
                }),
                this.observer.attach(this.$wrapperEl[0], {
                    attributes: !1
                })
            }
        },
        destroy: function() {
            this.observer.observers.forEach((function(e) {
                e.disconnect()
            }
            )),
            this.observer.observers = []
        }
    }
      , Z = {
        name: "observer",
        params: {
            observer: !1,
            observeParents: !1,
            observeSlideChildren: !1
        },
        create: function() {
            n.extend(this, {
                observer: {
                    init: _.init.bind(this),
                    attach: _.attach.bind(this),
                    destroy: _.destroy.bind(this),
                    observers: []
                }
            })
        },
        on: {
            init: function() {
                this.observer.init()
            },
            destroy: function() {
                this.observer.destroy()
            }
        }
    }
      , Q = {
        update: function(e) {
            var t = this
              , i = t.params
              , s = i.slidesPerView
              , a = i.slidesPerGroup
              , r = i.centeredSlides
              , o = t.params.virtual
              , l = o.addSlidesBefore
              , d = o.addSlidesAfter
              , h = t.virtual
              , p = h.from
              , c = h.to
              , u = h.slides
              , v = h.slidesGrid
              , f = h.renderSlide
              , m = h.offset;
            t.updateActiveIndex();
            var g, b, w, y = t.activeIndex || 0;
            g = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top",
            r ? (b = Math.floor(s / 2) + a + l,
            w = Math.floor(s / 2) + a + d) : (b = s + (a - 1) + l,
            w = a + d);
            var x = Math.max((y || 0) - w, 0)
              , T = Math.min((y || 0) + b, u.length - 1)
              , E = (t.slidesGrid[x] || 0) - (t.slidesGrid[0] || 0);
            function S() {
                t.updateSlides(),
                t.updateProgress(),
                t.updateSlidesClasses(),
                t.lazy && t.params.lazy.enabled && t.lazy.load()
            }
            if (n.extend(t.virtual, {
                from: x,
                to: T,
                offset: E,
                slidesGrid: t.slidesGrid
            }),
            p === x && c === T && !e)
                return t.slidesGrid !== v && E !== m && t.slides.css(g, E + "px"),
                void t.updateProgress();
            if (t.params.virtual.renderExternal)
                return t.params.virtual.renderExternal.call(t, {
                    offset: E,
                    from: x,
                    to: T,
                    slides: function() {
                        for (var e = [], t = x; t <= T; t += 1)
                            e.push(u[t]);
                        return e
                    }()
                }),
                void S();
            var C = []
              , M = [];
            if (e)
                t.$wrapperEl.find("." + t.params.slideClass).remove();
            else
                for (var P = p; P <= c; P += 1)
                    (P < x || P > T) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + P + '"]').remove();
            for (var z = 0; z < u.length; z += 1)
                z >= x && z <= T && (void 0 === c || e ? M.push(z) : (z > c && M.push(z),
                z < p && C.push(z)));
            M.forEach((function(e) {
                t.$wrapperEl.append(f(u[e], e))
            }
            )),
            C.sort((function(e, t) {
                return t - e
            }
            )).forEach((function(e) {
                t.$wrapperEl.prepend(f(u[e], e))
            }
            )),
            t.$wrapperEl.children(".swiper-slide").css(g, E + "px"),
            S()
        },
        renderSlide: function(e, t) {
            var i = this.params.virtual;
            if (i.cache && this.virtual.cache[t])
                return this.virtual.cache[t];
            var a = i.renderSlide ? s(i.renderSlide.call(this, e, t)) : s('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
            return a.attr("data-swiper-slide-index") || a.attr("data-swiper-slide-index", t),
            i.cache && (this.virtual.cache[t] = a),
            a
        },
        appendSlide: function(e) {
            if ("object" == typeof e && "length"in e)
                for (var t = 0; t < e.length; t += 1)
                    e[t] && this.virtual.slides.push(e[t]);
            else
                this.virtual.slides.push(e);
            this.virtual.update(!0)
        },
        prependSlide: function(e) {
            var t = this.activeIndex
              , i = t + 1
              , s = 1;
            if (Array.isArray(e)) {
                for (var a = 0; a < e.length; a += 1)
                    e[a] && this.virtual.slides.unshift(e[a]);
                i = t + e.length,
                s = e.length
            } else
                this.virtual.slides.unshift(e);
            if (this.params.virtual.cache) {
                var r = this.virtual.cache
                  , n = {};
                Object.keys(r).forEach((function(e) {
                    var t = r[e]
                      , i = t.attr("data-swiper-slide-index");
                    i && t.attr("data-swiper-slide-index", parseInt(i, 10) + 1),
                    n[parseInt(e, 10) + s] = t
                }
                )),
                this.virtual.cache = n
            }
            this.virtual.update(!0),
            this.slideTo(i, 0)
        },
        removeSlide: function(e) {
            if (null != e) {
                var t = this.activeIndex;
                if (Array.isArray(e))
                    for (var i = e.length - 1; i >= 0; i -= 1)
                        this.virtual.slides.splice(e[i], 1),
                        this.params.virtual.cache && delete this.virtual.cache[e[i]],
                        e[i] < t && (t -= 1),
                        t = Math.max(t, 0);
                else
                    this.virtual.slides.splice(e, 1),
                    this.params.virtual.cache && delete this.virtual.cache[e],
                    e < t && (t -= 1),
                    t = Math.max(t, 0);
                this.virtual.update(!0),
                this.slideTo(t, 0)
            }
        },
        removeAllSlides: function() {
            this.virtual.slides = [],
            this.params.virtual.cache && (this.virtual.cache = {}),
            this.virtual.update(!0),
            this.slideTo(0, 0)
        }
    }
      , J = {
        name: "virtual",
        params: {
            virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null,
                addSlidesBefore: 0,
                addSlidesAfter: 0
            }
        },
        create: function() {
            n.extend(this, {
                virtual: {
                    update: Q.update.bind(this),
                    appendSlide: Q.appendSlide.bind(this),
                    prependSlide: Q.prependSlide.bind(this),
                    removeSlide: Q.removeSlide.bind(this),
                    removeAllSlides: Q.removeAllSlides.bind(this),
                    renderSlide: Q.renderSlide.bind(this),
                    slides: this.params.virtual.slides,
                    cache: {}
                }
            })
        },
        on: {
            beforeInit: function() {
                if (this.params.virtual.enabled) {
                    this.classNames.push(this.params.containerModifierClass + "virtual");
                    var e = {
                        watchSlidesProgress: !0
                    };
                    n.extend(this.params, e),
                    n.extend(this.originalParams, e),
                    this.params.initialSlide || this.virtual.update()
                }
            },
            setTranslate: function() {
                this.params.virtual.enabled && this.virtual.update()
            }
        }
    }
      , ee = {
        handle: function(i) {
            var s = this.rtlTranslate
              , a = i;
            a.originalEvent && (a = a.originalEvent);
            var r = a.keyCode || a.charCode;
            if (!this.allowSlideNext && (this.isHorizontal() && 39 === r || this.isVertical() && 40 === r || 34 === r))
                return !1;
            if (!this.allowSlidePrev && (this.isHorizontal() && 37 === r || this.isVertical() && 38 === r || 33 === r))
                return !1;
            if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || e.activeElement && e.activeElement.nodeName && ("input" === e.activeElement.nodeName.toLowerCase() || "textarea" === e.activeElement.nodeName.toLowerCase()))) {
                if (this.params.keyboard.onlyInViewport && (33 === r || 34 === r || 37 === r || 39 === r || 38 === r || 40 === r)) {
                    var n = !1;
                    if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length)
                        return;
                    var o = t.innerWidth
                      , l = t.innerHeight
                      , d = this.$el.offset();
                    s && (d.left -= this.$el[0].scrollLeft);
                    for (var h = [[d.left, d.top], [d.left + this.width, d.top], [d.left, d.top + this.height], [d.left + this.width, d.top + this.height]], p = 0; p < h.length; p += 1) {
                        var c = h[p];
                        c[0] >= 0 && c[0] <= o && c[1] >= 0 && c[1] <= l && (n = !0)
                    }
                    if (!n)
                        return
                }
                this.isHorizontal() ? (33 !== r && 34 !== r && 37 !== r && 39 !== r || (a.preventDefault ? a.preventDefault() : a.returnValue = !1),
                (34 !== r && 39 !== r || s) && (33 !== r && 37 !== r || !s) || this.slideNext(),
                (33 !== r && 37 !== r || s) && (34 !== r && 39 !== r || !s) || this.slidePrev()) : (33 !== r && 34 !== r && 38 !== r && 40 !== r || (a.preventDefault ? a.preventDefault() : a.returnValue = !1),
                34 !== r && 40 !== r || this.slideNext(),
                33 !== r && 38 !== r || this.slidePrev()),
                this.emit("keyPress", r)
            }
        },
        enable: function() {
            this.keyboard.enabled || (s(e).on("keydown", this.keyboard.handle),
            this.keyboard.enabled = !0)
        },
        disable: function() {
            this.keyboard.enabled && (s(e).off("keydown", this.keyboard.handle),
            this.keyboard.enabled = !1)
        }
    }
      , te = {
        name: "keyboard",
        params: {
            keyboard: {
                enabled: !1,
                onlyInViewport: !0
            }
        },
        create: function() {
            n.extend(this, {
                keyboard: {
                    enabled: !1,
                    enable: ee.enable.bind(this),
                    disable: ee.disable.bind(this),
                    handle: ee.handle.bind(this)
                }
            })
        },
        on: {
            init: function() {
                this.params.keyboard.enabled && this.keyboard.enable()
            },
            destroy: function() {
                this.keyboard.enabled && this.keyboard.disable()
            }
        }
    };
    var ie = {
        lastScrollTime: n.now(),
        lastEventBeforeSnap: void 0,
        recentWheelEvents: [],
        event: function() {
            return t.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
                var t = "onwheel"in e;
                if (!t) {
                    var i = e.createElement("div");
                    i.setAttribute("onwheel", "return;"),
                    t = "function" == typeof i.onwheel
                }
                return !t && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (t = e.implementation.hasFeature("Events.wheel", "3.0")),
                t
            }() ? "wheel" : "mousewheel"
        },
        normalize: function(e) {
            var t = 0
              , i = 0
              , s = 0
              , a = 0;
            return "detail"in e && (i = e.detail),
            "wheelDelta"in e && (i = -e.wheelDelta / 120),
            "wheelDeltaY"in e && (i = -e.wheelDeltaY / 120),
            "wheelDeltaX"in e && (t = -e.wheelDeltaX / 120),
            "axis"in e && e.axis === e.HORIZONTAL_AXIS && (t = i,
            i = 0),
            s = 10 * t,
            a = 10 * i,
            "deltaY"in e && (a = e.deltaY),
            "deltaX"in e && (s = e.deltaX),
            e.shiftKey && !s && (s = a,
            a = 0),
            (s || a) && e.deltaMode && (1 === e.deltaMode ? (s *= 40,
            a *= 40) : (s *= 800,
            a *= 800)),
            s && !t && (t = s < 1 ? -1 : 1),
            a && !i && (i = a < 1 ? -1 : 1),
            {
                spinX: t,
                spinY: i,
                pixelX: s,
                pixelY: a
            }
        },
        handleMouseEnter: function() {
            this.mouseEntered = !0
        },
        handleMouseLeave: function() {
            this.mouseEntered = !1
        },
        handle: function(e) {
            var t = e
              , i = this
              , a = i.params.mousewheel;
            i.params.cssMode && t.preventDefault();
            var r = i.$el;
            if ("container" !== i.params.mousewheel.eventsTarged && (r = s(i.params.mousewheel.eventsTarged)),
            !i.mouseEntered && !r[0].contains(t.target) && !a.releaseOnEdges)
                return !0;
            t.originalEvent && (t = t.originalEvent);
            var o = 0
              , l = i.rtlTranslate ? -1 : 1
              , d = ie.normalize(t);
            if (a.forceToAxis)
                if (i.isHorizontal()) {
                    if (!(Math.abs(d.pixelX) > Math.abs(d.pixelY)))
                        return !0;
                    o = d.pixelX * l
                } else {
                    if (!(Math.abs(d.pixelY) > Math.abs(d.pixelX)))
                        return !0;
                    o = d.pixelY
                }
            else
                o = Math.abs(d.pixelX) > Math.abs(d.pixelY) ? -d.pixelX * l : -d.pixelY;
            if (0 === o)
                return !0;
            if (a.invert && (o = -o),
            i.params.freeMode) {
                var h = {
                    time: n.now(),
                    delta: Math.abs(o),
                    direction: Math.sign(o)
                }
                  , p = i.mousewheel.lastEventBeforeSnap
                  , c = p && h.time < p.time + 500 && h.delta <= p.delta && h.direction === p.direction;
                if (!c) {
                    i.mousewheel.lastEventBeforeSnap = void 0,
                    i.params.loop && i.loopFix();
                    var u = i.getTranslate() + o * a.sensitivity
                      , v = i.isBeginning
                      , f = i.isEnd;
                    if (u >= i.minTranslate() && (u = i.minTranslate()),
                    u <= i.maxTranslate() && (u = i.maxTranslate()),
                    i.setTransition(0),
                    i.setTranslate(u),
                    i.updateProgress(),
                    i.updateActiveIndex(),
                    i.updateSlidesClasses(),
                    (!v && i.isBeginning || !f && i.isEnd) && i.updateSlidesClasses(),
                    i.params.freeModeSticky) {
                        clearTimeout(i.mousewheel.timeout),
                        i.mousewheel.timeout = void 0;
                        var m = i.mousewheel.recentWheelEvents;
                        m.length >= 15 && m.shift();
                        var g = m.length ? m[m.length - 1] : void 0
                          , b = m[0];
                        if (m.push(h),
                        g && (h.delta > g.delta || h.direction !== g.direction))
                            m.splice(0);
                        else if (m.length >= 15 && h.time - b.time < 500 && b.delta - h.delta >= 1 && h.delta <= 6) {
                            var w = o > 0 ? .8 : .2;
                            i.mousewheel.lastEventBeforeSnap = h,
                            m.splice(0),
                            i.mousewheel.timeout = n.nextTick((function() {
                                i.slideToClosest(i.params.speed, !0, void 0, w)
                            }
                            ), 0)
                        }
                        i.mousewheel.timeout || (i.mousewheel.timeout = n.nextTick((function() {
                            i.mousewheel.lastEventBeforeSnap = h,
                            m.splice(0),
                            i.slideToClosest(i.params.speed, !0, void 0, .5)
                        }
                        ), 500))
                    }
                    if (c || i.emit("scroll", t),
                    i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(),
                    u === i.minTranslate() || u === i.maxTranslate())
                        return !0
                }
            } else {
                var y = {
                    time: n.now(),
                    delta: Math.abs(o),
                    direction: Math.sign(o),
                    raw: e
                }
                  , x = i.mousewheel.recentWheelEvents;
                x.length >= 2 && x.shift();
                var T = x.length ? x[x.length - 1] : void 0;
                if (x.push(y),
                T ? (y.direction !== T.direction || y.delta > T.delta) && i.mousewheel.animateSlider(y) : i.mousewheel.animateSlider(y),
                i.mousewheel.releaseScroll(y))
                    return !0
            }
            return t.preventDefault ? t.preventDefault() : t.returnValue = !1,
            !1
        },
        animateSlider: function(e) {
            return e.delta >= 6 && n.now() - this.mousewheel.lastScrollTime < 60 || (e.direction < 0 ? this.isEnd && !this.params.loop || this.animating || (this.slideNext(),
            this.emit("scroll", e.raw)) : this.isBeginning && !this.params.loop || this.animating || (this.slidePrev(),
            this.emit("scroll", e.raw)),
            this.mousewheel.lastScrollTime = (new t.Date).getTime(),
            !1)
        },
        releaseScroll: function(e) {
            var t = this.params.mousewheel;
            if (e.direction < 0) {
                if (this.isEnd && !this.params.loop && t.releaseOnEdges)
                    return !0
            } else if (this.isBeginning && !this.params.loop && t.releaseOnEdges)
                return !0;
            return !1
        },
        enable: function() {
            var e = ie.event();
            if (this.params.cssMode)
                return this.wrapperEl.removeEventListener(e, this.mousewheel.handle),
                !0;
            if (!e)
                return !1;
            if (this.mousewheel.enabled)
                return !1;
            var t = this.$el;
            return "container" !== this.params.mousewheel.eventsTarged && (t = s(this.params.mousewheel.eventsTarged)),
            t.on("mouseenter", this.mousewheel.handleMouseEnter),
            t.on("mouseleave", this.mousewheel.handleMouseLeave),
            t.on(e, this.mousewheel.handle),
            this.mousewheel.enabled = !0,
            !0
        },
        disable: function() {
            var e = ie.event();
            if (this.params.cssMode)
                return this.wrapperEl.addEventListener(e, this.mousewheel.handle),
                !0;
            if (!e)
                return !1;
            if (!this.mousewheel.enabled)
                return !1;
            var t = this.$el;
            return "container" !== this.params.mousewheel.eventsTarged && (t = s(this.params.mousewheel.eventsTarged)),
            t.off(e, this.mousewheel.handle),
            this.mousewheel.enabled = !1,
            !0
        }
    }
      , se = {
        update: function() {
            var e = this.params.navigation;
            if (!this.params.loop) {
                var t = this.navigation
                  , i = t.$nextEl
                  , s = t.$prevEl;
                s && s.length > 0 && (this.isBeginning ? s.addClass(e.disabledClass) : s.removeClass(e.disabledClass),
                s[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)),
                i && i.length > 0 && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass),
                i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass))
            }
        },
        onPrevClick: function(e) {
            e.preventDefault(),
            this.isBeginning && !this.params.loop || this.slidePrev()
        },
        onNextClick: function(e) {
            e.preventDefault(),
            this.isEnd && !this.params.loop || this.slideNext()
        },
        init: function() {
            var e, t, i = this.params.navigation;
            (i.nextEl || i.prevEl) && (i.nextEl && (e = s(i.nextEl),
            this.params.uniqueNavElements && "string" == typeof i.nextEl && e.length > 1 && 1 === this.$el.find(i.nextEl).length && (e = this.$el.find(i.nextEl))),
            i.prevEl && (t = s(i.prevEl),
            this.params.uniqueNavElements && "string" == typeof i.prevEl && t.length > 1 && 1 === this.$el.find(i.prevEl).length && (t = this.$el.find(i.prevEl))),
            e && e.length > 0 && e.on("click", this.navigation.onNextClick),
            t && t.length > 0 && t.on("click", this.navigation.onPrevClick),
            n.extend(this.navigation, {
                $nextEl: e,
                nextEl: e && e[0],
                $prevEl: t,
                prevEl: t && t[0]
            }))
        },
        destroy: function() {
            var e = this.navigation
              , t = e.$nextEl
              , i = e.$prevEl;
            t && t.length && (t.off("click", this.navigation.onNextClick),
            t.removeClass(this.params.navigation.disabledClass)),
            i && i.length && (i.off("click", this.navigation.onPrevClick),
            i.removeClass(this.params.navigation.disabledClass))
        }
    }
      , ae = {
        update: function() {
            var e = this.rtl
              , t = this.params.pagination;
            if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                var i, a = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length, r = this.pagination.$el, n = this.params.loop ? Math.ceil((a - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
                if (this.params.loop ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > a - 1 - 2 * this.loopedSlides && (i -= a - 2 * this.loopedSlides),
                i > n - 1 && (i -= n),
                i < 0 && "bullets" !== this.params.paginationType && (i = n + i)) : i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0,
                "bullets" === t.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
                    var o, l, d, h = this.pagination.bullets;
                    if (t.dynamicBullets && (this.pagination.bulletSize = h.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0),
                    r.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"),
                    t.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += i - this.previousIndex,
                    this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)),
                    o = i - this.pagination.dynamicBulletIndex,
                    d = ((l = o + (Math.min(h.length, t.dynamicMainBullets) - 1)) + o) / 2),
                    h.removeClass(t.bulletActiveClass + " " + t.bulletActiveClass + "-next " + t.bulletActiveClass + "-next-next " + t.bulletActiveClass + "-prev " + t.bulletActiveClass + "-prev-prev " + t.bulletActiveClass + "-main"),
                    r.length > 1)
                        h.each((function(e, a) {
                            var r = s(a)
                              , n = r.index();
                            n === i && r.addClass(t.bulletActiveClass),
                            t.dynamicBullets && (n >= o && n <= l && r.addClass(t.bulletActiveClass + "-main"),
                            n === o && r.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"),
                            n === l && r.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next"))
                        }
                        ));
                    else {
                        var p = h.eq(i)
                          , c = p.index();
                        if (p.addClass(t.bulletActiveClass),
                        t.dynamicBullets) {
                            for (var u = h.eq(o), v = h.eq(l), f = o; f <= l; f += 1)
                                h.eq(f).addClass(t.bulletActiveClass + "-main");
                            if (this.params.loop)
                                if (c >= h.length - t.dynamicMainBullets) {
                                    for (var m = t.dynamicMainBullets; m >= 0; m -= 1)
                                        h.eq(h.length - m).addClass(t.bulletActiveClass + "-main");
                                    h.eq(h.length - t.dynamicMainBullets - 1).addClass(t.bulletActiveClass + "-prev")
                                } else
                                    u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"),
                                    v.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next");
                            else
                                u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"),
                                v.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next")
                        }
                    }
                    if (t.dynamicBullets) {
                        var g = Math.min(h.length, t.dynamicMainBullets + 4)
                          , b = (this.pagination.bulletSize * g - this.pagination.bulletSize) / 2 - d * this.pagination.bulletSize
                          , w = e ? "right" : "left";
                        h.css(this.isHorizontal() ? w : "top", b + "px")
                    }
                }
                if ("fraction" === t.type && (r.find("." + t.currentClass).text(t.formatFractionCurrent(i + 1)),
                r.find("." + t.totalClass).text(t.formatFractionTotal(n))),
                "progressbar" === t.type) {
                    var y;
                    y = t.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical";
                    var x = (i + 1) / n
                      , T = 1
                      , E = 1;
                    "horizontal" === y ? T = x : E = x,
                    r.find("." + t.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + T + ") scaleY(" + E + ")").transition(this.params.speed)
                }
                "custom" === t.type && t.renderCustom ? (r.html(t.renderCustom(this, i + 1, n)),
                this.emit("paginationRender", this, r[0])) : this.emit("paginationUpdate", this, r[0]),
                r[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass)
            }
        },
        render: function() {
            var e = this.params.pagination;
            if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length
                  , i = this.pagination.$el
                  , s = "";
                if ("bullets" === e.type) {
                    for (var a = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, r = 0; r < a; r += 1)
                        e.renderBullet ? s += e.renderBullet.call(this, r, e.bulletClass) : s += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
                    i.html(s),
                    this.pagination.bullets = i.find("." + e.bulletClass)
                }
                "fraction" === e.type && (s = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>',
                i.html(s)),
                "progressbar" === e.type && (s = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>',
                i.html(s)),
                "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0])
            }
        },
        init: function() {
            var e = this
              , t = e.params.pagination;
            if (t.el) {
                var i = s(t.el);
                0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && 1 === e.$el.find(t.el).length && (i = e.$el.find(t.el)),
                "bullets" === t.type && t.clickable && i.addClass(t.clickableClass),
                i.addClass(t.modifierClass + t.type),
                "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"),
                e.pagination.dynamicBulletIndex = 0,
                t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
                "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass),
                t.clickable && i.on("click", "." + t.bulletClass, (function(t) {
                    t.preventDefault();
                    var i = s(this).index() * e.params.slidesPerGroup;
                    e.params.loop && (i += e.loopedSlides),
                    e.slideTo(i)
                }
                )),
                n.extend(e.pagination, {
                    $el: i,
                    el: i[0]
                }))
            }
        },
        destroy: function() {
            var e = this.params.pagination;
            if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                var t = this.pagination.$el;
                t.removeClass(e.hiddenClass),
                t.removeClass(e.modifierClass + e.type),
                this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass),
                e.clickable && t.off("click", "." + e.bulletClass)
            }
        }
    }
      , re = {
        setTranslate: function() {
            if (this.params.scrollbar.el && this.scrollbar.el) {
                var e = this.scrollbar
                  , t = this.rtlTranslate
                  , i = this.progress
                  , s = e.dragSize
                  , a = e.trackSize
                  , r = e.$dragEl
                  , n = e.$el
                  , o = this.params.scrollbar
                  , l = s
                  , d = (a - s) * i;
                t ? (d = -d) > 0 ? (l = s - d,
                d = 0) : -d + s > a && (l = a + d) : d < 0 ? (l = s + d,
                d = 0) : d + s > a && (l = a - d),
                this.isHorizontal() ? (r.transform("translate3d(" + d + "px, 0, 0)"),
                r[0].style.width = l + "px") : (r.transform("translate3d(0px, " + d + "px, 0)"),
                r[0].style.height = l + "px"),
                o.hide && (clearTimeout(this.scrollbar.timeout),
                n[0].style.opacity = 1,
                this.scrollbar.timeout = setTimeout((function() {
                    n[0].style.opacity = 0,
                    n.transition(400)
                }
                ), 1e3))
            }
        },
        setTransition: function(e) {
            this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
        },
        updateSize: function() {
            if (this.params.scrollbar.el && this.scrollbar.el) {
                var e = this.scrollbar
                  , t = e.$dragEl
                  , i = e.$el;
                t[0].style.width = "",
                t[0].style.height = "";
                var s, a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight, r = this.size / this.virtualSize, o = r * (a / this.size);
                s = "auto" === this.params.scrollbar.dragSize ? a * r : parseInt(this.params.scrollbar.dragSize, 10),
                this.isHorizontal() ? t[0].style.width = s + "px" : t[0].style.height = s + "px",
                i[0].style.display = r >= 1 ? "none" : "",
                this.params.scrollbar.hide && (i[0].style.opacity = 0),
                n.extend(e, {
                    trackSize: a,
                    divider: r,
                    moveDivider: o,
                    dragSize: s
                }),
                e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass)
            }
        },
        getPointerPosition: function(e) {
            return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY
        },
        setDragPosition: function(e) {
            var t, i = this.scrollbar, s = this.rtlTranslate, a = i.$el, r = i.dragSize, n = i.trackSize, o = i.dragStartPos;
            t = (i.getPointerPosition(e) - a.offset()[this.isHorizontal() ? "left" : "top"] - (null !== o ? o : r / 2)) / (n - r),
            t = Math.max(Math.min(t, 1), 0),
            s && (t = 1 - t);
            var l = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
            this.updateProgress(l),
            this.setTranslate(l),
            this.updateActiveIndex(),
            this.updateSlidesClasses()
        },
        onDragStart: function(e) {
            var t = this.params.scrollbar
              , i = this.scrollbar
              , s = this.$wrapperEl
              , a = i.$el
              , r = i.$dragEl;
            this.scrollbar.isTouched = !0,
            this.scrollbar.dragStartPos = e.target === r[0] || e.target === r ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[this.isHorizontal() ? "left" : "top"] : null,
            e.preventDefault(),
            e.stopPropagation(),
            s.transition(100),
            r.transition(100),
            i.setDragPosition(e),
            clearTimeout(this.scrollbar.dragTimeout),
            a.transition(0),
            t.hide && a.css("opacity", 1),
            this.params.cssMode && this.$wrapperEl.css("scroll-snap-type", "none"),
            this.emit("scrollbarDragStart", e)
        },
        onDragMove: function(e) {
            var t = this.scrollbar
              , i = this.$wrapperEl
              , s = t.$el
              , a = t.$dragEl;
            this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1,
            t.setDragPosition(e),
            i.transition(0),
            s.transition(0),
            a.transition(0),
            this.emit("scrollbarDragMove", e))
        },
        onDragEnd: function(e) {
            var t = this.params.scrollbar
              , i = this.scrollbar
              , s = this.$wrapperEl
              , a = i.$el;
            this.scrollbar.isTouched && (this.scrollbar.isTouched = !1,
            this.params.cssMode && (this.$wrapperEl.css("scroll-snap-type", ""),
            s.transition("")),
            t.hide && (clearTimeout(this.scrollbar.dragTimeout),
            this.scrollbar.dragTimeout = n.nextTick((function() {
                a.css("opacity", 0),
                a.transition(400)
            }
            ), 1e3)),
            this.emit("scrollbarDragEnd", e),
            t.snapOnRelease && this.slideToClosest())
        },
        enableDraggable: function() {
            if (this.params.scrollbar.el) {
                var t = this.scrollbar
                  , i = this.touchEventsTouch
                  , s = this.touchEventsDesktop
                  , a = this.params
                  , r = t.$el[0]
                  , n = !(!o.passiveListener || !a.passiveListeners) && {
                    passive: !1,
                    capture: !1
                }
                  , l = !(!o.passiveListener || !a.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                o.touch ? (r.addEventListener(i.start, this.scrollbar.onDragStart, n),
                r.addEventListener(i.move, this.scrollbar.onDragMove, n),
                r.addEventListener(i.end, this.scrollbar.onDragEnd, l)) : (r.addEventListener(s.start, this.scrollbar.onDragStart, n),
                e.addEventListener(s.move, this.scrollbar.onDragMove, n),
                e.addEventListener(s.end, this.scrollbar.onDragEnd, l))
            }
        },
        disableDraggable: function() {
            if (this.params.scrollbar.el) {
                var t = this.scrollbar
                  , i = this.touchEventsTouch
                  , s = this.touchEventsDesktop
                  , a = this.params
                  , r = t.$el[0]
                  , n = !(!o.passiveListener || !a.passiveListeners) && {
                    passive: !1,
                    capture: !1
                }
                  , l = !(!o.passiveListener || !a.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                o.touch ? (r.removeEventListener(i.start, this.scrollbar.onDragStart, n),
                r.removeEventListener(i.move, this.scrollbar.onDragMove, n),
                r.removeEventListener(i.end, this.scrollbar.onDragEnd, l)) : (r.removeEventListener(s.start, this.scrollbar.onDragStart, n),
                e.removeEventListener(s.move, this.scrollbar.onDragMove, n),
                e.removeEventListener(s.end, this.scrollbar.onDragEnd, l))
            }
        },
        init: function() {
            if (this.params.scrollbar.el) {
                var e = this.scrollbar
                  , t = this.$el
                  , i = this.params.scrollbar
                  , a = s(i.el);
                this.params.uniqueNavElements && "string" == typeof i.el && a.length > 1 && 1 === t.find(i.el).length && (a = t.find(i.el));
                var r = a.find("." + this.params.scrollbar.dragClass);
                0 === r.length && (r = s('<div class="' + this.params.scrollbar.dragClass + '"></div>'),
                a.append(r)),
                n.extend(e, {
                    $el: a,
                    el: a[0],
                    $dragEl: r,
                    dragEl: r[0]
                }),
                i.draggable && e.enableDraggable()
            }
        },
        destroy: function() {
            this.scrollbar.disableDraggable()
        }
    }
      , ne = {
        setTransform: function(e, t) {
            var i = this.rtl
              , a = s(e)
              , r = i ? -1 : 1
              , n = a.attr("data-swiper-parallax") || "0"
              , o = a.attr("data-swiper-parallax-x")
              , l = a.attr("data-swiper-parallax-y")
              , d = a.attr("data-swiper-parallax-scale")
              , h = a.attr("data-swiper-parallax-opacity");
            if (o || l ? (o = o || "0",
            l = l || "0") : this.isHorizontal() ? (o = n,
            l = "0") : (l = n,
            o = "0"),
            o = o.indexOf("%") >= 0 ? parseInt(o, 10) * t * r + "%" : o * t * r + "px",
            l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px",
            null != h) {
                var p = h - (h - 1) * (1 - Math.abs(t));
                a[0].style.opacity = p
            }
            if (null == d)
                a.transform("translate3d(" + o + ", " + l + ", 0px)");
            else {
                var c = d - (d - 1) * (1 - Math.abs(t));
                a.transform("translate3d(" + o + ", " + l + ", 0px) scale(" + c + ")")
            }
        },
        setTranslate: function() {
            var e = this
              , t = e.$el
              , i = e.slides
              , a = e.progress
              , r = e.snapGrid;
            t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t, i) {
                e.parallax.setTransform(i, a)
            }
            )),
            i.each((function(t, i) {
                var n = i.progress;
                e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (n += Math.ceil(t / 2) - a * (r.length - 1)),
                n = Math.min(Math.max(n, -1), 1),
                s(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t, i) {
                    e.parallax.setTransform(i, n)
                }
                ))
            }
            ))
        },
        setTransition: function(e) {
            void 0 === e && (e = this.params.speed);
            this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t, i) {
                var a = s(i)
                  , r = parseInt(a.attr("data-swiper-parallax-duration"), 10) || e;
                0 === e && (r = 0),
                a.transition(r)
            }
            ))
        }
    }
      , oe = {
        getDistanceBetweenTouches: function(e) {
            if (e.targetTouches.length < 2)
                return 1;
            var t = e.targetTouches[0].pageX
              , i = e.targetTouches[0].pageY
              , s = e.targetTouches[1].pageX
              , a = e.targetTouches[1].pageY;
            return Math.sqrt(Math.pow(s - t, 2) + Math.pow(a - i, 2))
        },
        onGestureStart: function(e) {
            var t = this.params.zoom
              , i = this.zoom
              , a = i.gesture;
            if (i.fakeGestureTouched = !1,
            i.fakeGestureMoved = !1,
            !o.gestures) {
                if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2)
                    return;
                i.fakeGestureTouched = !0,
                a.scaleStart = oe.getDistanceBetweenTouches(e)
            }
            a.$slideEl && a.$slideEl.length || (a.$slideEl = s(e.target).closest("." + this.params.slideClass),
            0 === a.$slideEl.length && (a.$slideEl = this.slides.eq(this.activeIndex)),
            a.$imageEl = a.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),
            a.$imageWrapEl = a.$imageEl.parent("." + t.containerClass),
            a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio,
            0 !== a.$imageWrapEl.length) ? (a.$imageEl.transition(0),
            this.zoom.isScaling = !0) : a.$imageEl = void 0
        },
        onGestureChange: function(e) {
            var t = this.params.zoom
              , i = this.zoom
              , s = i.gesture;
            if (!o.gestures) {
                if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2)
                    return;
                i.fakeGestureMoved = !0,
                s.scaleMove = oe.getDistanceBetweenTouches(e)
            }
            s.$imageEl && 0 !== s.$imageEl.length && (o.gestures ? i.scale = e.scale * i.currentScale : i.scale = s.scaleMove / s.scaleStart * i.currentScale,
            i.scale > s.maxRatio && (i.scale = s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, .5)),
            i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, .5)),
            s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
        },
        onGestureEnd: function(e) {
            var t = this.params.zoom
              , i = this.zoom
              , s = i.gesture;
            if (!o.gestures) {
                if (!i.fakeGestureTouched || !i.fakeGestureMoved)
                    return;
                if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !I.android)
                    return;
                i.fakeGestureTouched = !1,
                i.fakeGestureMoved = !1
            }
            s.$imageEl && 0 !== s.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, s.maxRatio), t.minRatio),
            s.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"),
            i.currentScale = i.scale,
            i.isScaling = !1,
            1 === i.scale && (s.$slideEl = void 0))
        },
        onTouchStart: function(e) {
            var t = this.zoom
              , i = t.gesture
              , s = t.image;
            i.$imageEl && 0 !== i.$imageEl.length && (s.isTouched || (I.android && e.preventDefault(),
            s.isTouched = !0,
            s.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX,
            s.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
        },
        onTouchMove: function(e) {
            var t = this.zoom
              , i = t.gesture
              , s = t.image
              , a = t.velocity;
            if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1,
            s.isTouched && i.$slideEl)) {
                s.isMoved || (s.width = i.$imageEl[0].offsetWidth,
                s.height = i.$imageEl[0].offsetHeight,
                s.startX = n.getTranslate(i.$imageWrapEl[0], "x") || 0,
                s.startY = n.getTranslate(i.$imageWrapEl[0], "y") || 0,
                i.slideWidth = i.$slideEl[0].offsetWidth,
                i.slideHeight = i.$slideEl[0].offsetHeight,
                i.$imageWrapEl.transition(0),
                this.rtl && (s.startX = -s.startX,
                s.startY = -s.startY));
                var r = s.width * t.scale
                  , o = s.height * t.scale;
                if (!(r < i.slideWidth && o < i.slideHeight)) {
                    if (s.minX = Math.min(i.slideWidth / 2 - r / 2, 0),
                    s.maxX = -s.minX,
                    s.minY = Math.min(i.slideHeight / 2 - o / 2, 0),
                    s.maxY = -s.minY,
                    s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                    s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY,
                    !s.isMoved && !t.isScaling) {
                        if (this.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x))
                            return void (s.isTouched = !1);
                        if (!this.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y))
                            return void (s.isTouched = !1)
                    }
                    e.preventDefault(),
                    e.stopPropagation(),
                    s.isMoved = !0,
                    s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX,
                    s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY,
                    s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)),
                    s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)),
                    s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)),
                    s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)),
                    a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x),
                    a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y),
                    a.prevTime || (a.prevTime = Date.now()),
                    a.x = (s.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2,
                    a.y = (s.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2,
                    Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0),
                    Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0),
                    a.prevPositionX = s.touchesCurrent.x,
                    a.prevPositionY = s.touchesCurrent.y,
                    a.prevTime = Date.now(),
                    i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
                }
            }
        },
        onTouchEnd: function() {
            var e = this.zoom
              , t = e.gesture
              , i = e.image
              , s = e.velocity;
            if (t.$imageEl && 0 !== t.$imageEl.length) {
                if (!i.isTouched || !i.isMoved)
                    return i.isTouched = !1,
                    void (i.isMoved = !1);
                i.isTouched = !1,
                i.isMoved = !1;
                var a = 300
                  , r = 300
                  , n = s.x * a
                  , o = i.currentX + n
                  , l = s.y * r
                  , d = i.currentY + l;
                0 !== s.x && (a = Math.abs((o - i.currentX) / s.x)),
                0 !== s.y && (r = Math.abs((d - i.currentY) / s.y));
                var h = Math.max(a, r);
                i.currentX = o,
                i.currentY = d;
                var p = i.width * e.scale
                  , c = i.height * e.scale;
                i.minX = Math.min(t.slideWidth / 2 - p / 2, 0),
                i.maxX = -i.minX,
                i.minY = Math.min(t.slideHeight / 2 - c / 2, 0),
                i.maxY = -i.minY,
                i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX),
                i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY),
                t.$imageWrapEl.transition(h).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
            }
        },
        onTransitionEnd: function() {
            var e = this.zoom
              , t = e.gesture;
            t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"),
            t.$imageWrapEl.transform("translate3d(0,0,0)"),
            e.scale = 1,
            e.currentScale = 1,
            t.$slideEl = void 0,
            t.$imageEl = void 0,
            t.$imageWrapEl = void 0)
        },
        toggle: function(e) {
            var t = this.zoom;
            t.scale && 1 !== t.scale ? t.out() : t.in(e)
        },
        in: function(e) {
            var t, i, s, a, r, n, o, l, d, h, p, c, u, v, f, m, g = this.zoom, b = this.params.zoom, w = g.gesture, y = g.image;
            (w.$slideEl || (w.$slideEl = this.slides.eq(this.activeIndex),
            w.$imageEl = w.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),
            w.$imageWrapEl = w.$imageEl.parent("." + b.containerClass)),
            w.$imageEl && 0 !== w.$imageEl.length) && (w.$slideEl.addClass("" + b.zoomedSlideClass),
            void 0 === y.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX,
            i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = y.touchesStart.x,
            i = y.touchesStart.y),
            g.scale = w.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio,
            g.currentScale = w.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio,
            e ? (f = w.$slideEl[0].offsetWidth,
            m = w.$slideEl[0].offsetHeight,
            s = w.$slideEl.offset().left + f / 2 - t,
            a = w.$slideEl.offset().top + m / 2 - i,
            o = w.$imageEl[0].offsetWidth,
            l = w.$imageEl[0].offsetHeight,
            d = o * g.scale,
            h = l * g.scale,
            u = -(p = Math.min(f / 2 - d / 2, 0)),
            v = -(c = Math.min(m / 2 - h / 2, 0)),
            (r = s * g.scale) < p && (r = p),
            r > u && (r = u),
            (n = a * g.scale) < c && (n = c),
            n > v && (n = v)) : (r = 0,
            n = 0),
            w.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"),
            w.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + g.scale + ")"))
        },
        out: function() {
            var e = this.zoom
              , t = this.params.zoom
              , i = e.gesture;
            i.$slideEl || (i.$slideEl = this.slides.eq(this.activeIndex),
            i.$imageEl = i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),
            i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass)),
            i.$imageEl && 0 !== i.$imageEl.length && (e.scale = 1,
            e.currentScale = 1,
            i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
            i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
            i.$slideEl.removeClass("" + t.zoomedSlideClass),
            i.$slideEl = void 0)
        },
        enable: function() {
            var e = this.zoom;
            if (!e.enabled) {
                e.enabled = !0;
                var t = !("touchstart" !== this.touchEvents.start || !o.passiveListener || !this.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                }
                  , i = !o.passiveListener || {
                    passive: !1,
                    capture: !0
                }
                  , s = "." + this.params.slideClass;
                o.gestures ? (this.$wrapperEl.on("gesturestart", s, e.onGestureStart, t),
                this.$wrapperEl.on("gesturechange", s, e.onGestureChange, t),
                this.$wrapperEl.on("gestureend", s, e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, s, e.onGestureStart, t),
                this.$wrapperEl.on(this.touchEvents.move, s, e.onGestureChange, i),
                this.$wrapperEl.on(this.touchEvents.end, s, e.onGestureEnd, t),
                this.touchEvents.cancel && this.$wrapperEl.on(this.touchEvents.cancel, s, e.onGestureEnd, t)),
                this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, i)
            }
        },
        disable: function() {
            var e = this.zoom;
            if (e.enabled) {
                this.zoom.enabled = !1;
                var t = !("touchstart" !== this.touchEvents.start || !o.passiveListener || !this.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                }
                  , i = !o.passiveListener || {
                    passive: !1,
                    capture: !0
                }
                  , s = "." + this.params.slideClass;
                o.gestures ? (this.$wrapperEl.off("gesturestart", s, e.onGestureStart, t),
                this.$wrapperEl.off("gesturechange", s, e.onGestureChange, t),
                this.$wrapperEl.off("gestureend", s, e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, s, e.onGestureStart, t),
                this.$wrapperEl.off(this.touchEvents.move, s, e.onGestureChange, i),
                this.$wrapperEl.off(this.touchEvents.end, s, e.onGestureEnd, t),
                this.touchEvents.cancel && this.$wrapperEl.off(this.touchEvents.cancel, s, e.onGestureEnd, t)),
                this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, i)
            }
        }
    }
      , le = {
        loadInSlide: function(e, t) {
            void 0 === t && (t = !0);
            var i = this
              , a = i.params.lazy;
            if (void 0 !== e && 0 !== i.slides.length) {
                var r = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : i.slides.eq(e)
                  , n = r.find("." + a.elementClass + ":not(." + a.loadedClass + "):not(." + a.loadingClass + ")");
                !r.hasClass(a.elementClass) || r.hasClass(a.loadedClass) || r.hasClass(a.loadingClass) || (n = n.add(r[0])),
                0 !== n.length && n.each((function(e, n) {
                    var o = s(n);
                    o.addClass(a.loadingClass);
                    var l = o.attr("data-background")
                      , d = o.attr("data-src")
                      , h = o.attr("data-srcset")
                      , p = o.attr("data-sizes");
                    i.loadImage(o[0], d || l, h, p, !1, (function() {
                        if (null != i && i && (!i || i.params) && !i.destroyed) {
                            if (l ? (o.css("background-image", 'url("' + l + '")'),
                            o.removeAttr("data-background")) : (h && (o.attr("srcset", h),
                            o.removeAttr("data-srcset")),
                            p && (o.attr("sizes", p),
                            o.removeAttr("data-sizes")),
                            d && (o.attr("src", d),
                            o.removeAttr("data-src"))),
                            o.addClass(a.loadedClass).removeClass(a.loadingClass),
                            r.find("." + a.preloaderClass).remove(),
                            i.params.loop && t) {
                                var e = r.attr("data-swiper-slide-index");
                                if (r.hasClass(i.params.slideDuplicateClass)) {
                                    var s = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                                    i.lazy.loadInSlide(s.index(), !1)
                                } else {
                                    var n = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                    i.lazy.loadInSlide(n.index(), !1)
                                }
                            }
                            i.emit("lazyImageReady", r[0], o[0]),
                            i.params.autoHeight && i.updateAutoHeight()
                        }
                    }
                    )),
                    i.emit("lazyImageLoad", r[0], o[0])
                }
                ))
            }
        },
        load: function() {
            var e = this
              , t = e.$wrapperEl
              , i = e.params
              , a = e.slides
              , r = e.activeIndex
              , n = e.virtual && i.virtual.enabled
              , o = i.lazy
              , l = i.slidesPerView;
            function d(e) {
                if (n) {
                    if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length)
                        return !0
                } else if (a[e])
                    return !0;
                return !1
            }
            function h(e) {
                return n ? s(e).attr("data-swiper-slide-index") : s(e).index()
            }
            if ("auto" === l && (l = 0),
            e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0),
            e.params.watchSlidesVisibility)
                t.children("." + i.slideVisibleClass).each((function(t, i) {
                    var a = n ? s(i).attr("data-swiper-slide-index") : s(i).index();
                    e.lazy.loadInSlide(a)
                }
                ));
            else if (l > 1)
                for (var p = r; p < r + l; p += 1)
                    d(p) && e.lazy.loadInSlide(p);
            else
                e.lazy.loadInSlide(r);
            if (o.loadPrevNext)
                if (l > 1 || o.loadPrevNextAmount && o.loadPrevNextAmount > 1) {
                    for (var c = o.loadPrevNextAmount, u = l, v = Math.min(r + u + Math.max(c, u), a.length), f = Math.max(r - Math.max(u, c), 0), m = r + l; m < v; m += 1)
                        d(m) && e.lazy.loadInSlide(m);
                    for (var g = f; g < r; g += 1)
                        d(g) && e.lazy.loadInSlide(g)
                } else {
                    var b = t.children("." + i.slideNextClass);
                    b.length > 0 && e.lazy.loadInSlide(h(b));
                    var w = t.children("." + i.slidePrevClass);
                    w.length > 0 && e.lazy.loadInSlide(h(w))
                }
        }
    }
      , de = {
        LinearSpline: function(e, t) {
            var i, s, a, r, n, o = function(e, t) {
                for (s = -1,
                i = e.length; i - s > 1; )
                    e[a = i + s >> 1] <= t ? s = a : i = a;
                return i
            };
            return this.x = e,
            this.y = t,
            this.lastIndex = e.length - 1,
            this.interpolate = function(e) {
                return e ? (n = o(this.x, e),
                r = n - 1,
                (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0
            }
            ,
            this
        },
        getInterpolateFunction: function(e) {
            this.controller.spline || (this.controller.spline = this.params.loop ? new de.LinearSpline(this.slidesGrid,e.slidesGrid) : new de.LinearSpline(this.snapGrid,e.snapGrid))
        },
        setTranslate: function(e, t) {
            var i, s, a = this, r = a.controller.control;
            function n(e) {
                var t = a.rtlTranslate ? -a.translate : a.translate;
                "slide" === a.params.controller.by && (a.controller.getInterpolateFunction(e),
                s = -a.controller.spline.interpolate(-t)),
                s && "container" !== a.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate()),
                s = (t - a.minTranslate()) * i + e.minTranslate()),
                a.params.controller.inverse && (s = e.maxTranslate() - s),
                e.updateProgress(s),
                e.setTranslate(s, a),
                e.updateActiveIndex(),
                e.updateSlidesClasses()
            }
            if (Array.isArray(r))
                for (var o = 0; o < r.length; o += 1)
                    r[o] !== t && r[o]instanceof W && n(r[o]);
            else
                r instanceof W && t !== r && n(r)
        },
        setTransition: function(e, t) {
            var i, s = this, a = s.controller.control;
            function r(t) {
                t.setTransition(e, s),
                0 !== e && (t.transitionStart(),
                t.params.autoHeight && n.nextTick((function() {
                    t.updateAutoHeight()
                }
                )),
                t.$wrapperEl.transitionEnd((function() {
                    a && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(),
                    t.transitionEnd())
                }
                )))
            }
            if (Array.isArray(a))
                for (i = 0; i < a.length; i += 1)
                    a[i] !== t && a[i]instanceof W && r(a[i]);
            else
                a instanceof W && t !== a && r(a)
        }
    }
      , he = {
        makeElFocusable: function(e) {
            return e.attr("tabIndex", "0"),
            e
        },
        addElRole: function(e, t) {
            return e.attr("role", t),
            e
        },
        addElLabel: function(e, t) {
            return e.attr("aria-label", t),
            e
        },
        disableEl: function(e) {
            return e.attr("aria-disabled", !0),
            e
        },
        enableEl: function(e) {
            return e.attr("aria-disabled", !1),
            e
        },
        onEnterKey: function(e) {
            var t = this.params.a11y;
            if (13 === e.keyCode) {
                var i = s(e.target);
                this.navigation && this.navigation.$nextEl && i.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(),
                this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)),
                this.navigation && this.navigation.$prevEl && i.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(),
                this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)),
                this.pagination && i.is("." + this.params.pagination.bulletClass) && i[0].click()
            }
        },
        notify: function(e) {
            var t = this.a11y.liveRegion;
            0 !== t.length && (t.html(""),
            t.html(e))
        },
        updateNavigation: function() {
            if (!this.params.loop && this.navigation) {
                var e = this.navigation
                  , t = e.$nextEl
                  , i = e.$prevEl;
                i && i.length > 0 && (this.isBeginning ? this.a11y.disableEl(i) : this.a11y.enableEl(i)),
                t && t.length > 0 && (this.isEnd ? this.a11y.disableEl(t) : this.a11y.enableEl(t))
            }
        },
        updatePagination: function() {
            var e = this
              , t = e.params.a11y;
            e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each((function(i, a) {
                var r = s(a);
                e.a11y.makeElFocusable(r),
                e.a11y.addElRole(r, "button"),
                e.a11y.addElLabel(r, t.paginationBulletMessage.replace(/{{index}}/, r.index() + 1))
            }
            ))
        },
        init: function() {
            this.$el.append(this.a11y.liveRegion);
            var e, t, i = this.params.a11y;
            this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl),
            this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl),
            e && (this.a11y.makeElFocusable(e),
            this.a11y.addElRole(e, "button"),
            this.a11y.addElLabel(e, i.nextSlideMessage),
            e.on("keydown", this.a11y.onEnterKey)),
            t && (this.a11y.makeElFocusable(t),
            this.a11y.addElRole(t, "button"),
            this.a11y.addElLabel(t, i.prevSlideMessage),
            t.on("keydown", this.a11y.onEnterKey)),
            this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
        },
        destroy: function() {
            var e, t;
            this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(),
            this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl),
            this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl),
            e && e.off("keydown", this.a11y.onEnterKey),
            t && t.off("keydown", this.a11y.onEnterKey),
            this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
        }
    }
      , pe = {
        init: function() {
            if (this.params.history) {
                if (!t.history || !t.history.pushState)
                    return this.params.history.enabled = !1,
                    void (this.params.hashNavigation.enabled = !0);
                var e = this.history;
                e.initialized = !0,
                e.paths = pe.getPathValues(),
                (e.paths.key || e.paths.value) && (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit),
                this.params.history.replaceState || t.addEventListener("popstate", this.history.setHistoryPopState))
            }
        },
        destroy: function() {
            this.params.history.replaceState || t.removeEventListener("popstate", this.history.setHistoryPopState)
        },
        setHistoryPopState: function() {
            this.history.paths = pe.getPathValues(),
            this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
        },
        getPathValues: function() {
            var e = t.location.pathname.slice(1).split("/").filter((function(e) {
                return "" !== e
            }
            ))
              , i = e.length;
            return {
                key: e[i - 2],
                value: e[i - 1]
            }
        },
        setHistory: function(e, i) {
            if (this.history.initialized && this.params.history.enabled) {
                var s = this.slides.eq(i)
                  , a = pe.slugify(s.attr("data-history"));
                t.location.pathname.includes(e) || (a = e + "/" + a);
                var r = t.history.state;
                r && r.value === a || (this.params.history.replaceState ? t.history.replaceState({
                    value: a
                }, null, a) : t.history.pushState({
                    value: a
                }, null, a))
            }
        },
        slugify: function(e) {
            return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
        },
        scrollToSlide: function(e, t, i) {
            if (t)
                for (var s = 0, a = this.slides.length; s < a; s += 1) {
                    var r = this.slides.eq(s);
                    if (pe.slugify(r.attr("data-history")) === t && !r.hasClass(this.params.slideDuplicateClass)) {
                        var n = r.index();
                        this.slideTo(n, e, i)
                    }
                }
            else
                this.slideTo(0, e, i)
        }
    }
      , ce = {
        onHashCange: function() {
            var t = e.location.hash.replace("#", "");
            if (t !== this.slides.eq(this.activeIndex).attr("data-hash")) {
                var i = this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + t + '"]').index();
                if (void 0 === i)
                    return;
                this.slideTo(i)
            }
        },
        setHash: function() {
            if (this.hashNavigation.initialized && this.params.hashNavigation.enabled)
                if (this.params.hashNavigation.replaceState && t.history && t.history.replaceState)
                    t.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || "");
                else {
                    var i = this.slides.eq(this.activeIndex)
                      , s = i.attr("data-hash") || i.attr("data-history");
                    e.location.hash = s || ""
                }
        },
        init: function() {
            if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
                this.hashNavigation.initialized = !0;
                var i = e.location.hash.replace("#", "");
                if (i)
                    for (var a = 0, r = this.slides.length; a < r; a += 1) {
                        var n = this.slides.eq(a);
                        if ((n.attr("data-hash") || n.attr("data-history")) === i && !n.hasClass(this.params.slideDuplicateClass)) {
                            var o = n.index();
                            this.slideTo(o, 0, this.params.runCallbacksOnInit, !0)
                        }
                    }
                this.params.hashNavigation.watchState && s(t).on("hashchange", this.hashNavigation.onHashCange)
            }
        },
        destroy: function() {
            this.params.hashNavigation.watchState && s(t).off("hashchange", this.hashNavigation.onHashCange)
        }
    }
      , ue = {
        run: function() {
            var e = this
              , t = e.slides.eq(e.activeIndex)
              , i = e.params.autoplay.delay;
            t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
            clearTimeout(e.autoplay.timeout),
            e.autoplay.timeout = n.nextTick((function() {
                e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(),
                e.slidePrev(e.params.speed, !0, !0),
                e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0),
                e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0),
                e.emit("autoplay")) : e.params.loop ? (e.loopFix(),
                e.slideNext(e.params.speed, !0, !0),
                e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0),
                e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0),
                e.emit("autoplay")),
                e.params.cssMode && e.autoplay.running && e.autoplay.run()
            }
            ), i)
        },
        start: function() {
            return void 0 === this.autoplay.timeout && (!this.autoplay.running && (this.autoplay.running = !0,
            this.emit("autoplayStart"),
            this.autoplay.run(),
            !0))
        },
        stop: function() {
            return !!this.autoplay.running && (void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout),
            this.autoplay.timeout = void 0),
            this.autoplay.running = !1,
            this.emit("autoplayStop"),
            !0))
        },
        pause: function(e) {
            this.autoplay.running && (this.autoplay.paused || (this.autoplay.timeout && clearTimeout(this.autoplay.timeout),
            this.autoplay.paused = !0,
            0 !== e && this.params.autoplay.waitForTransition ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd),
            this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd)) : (this.autoplay.paused = !1,
            this.autoplay.run())))
        }
    }
      , ve = {
        setTranslate: function() {
            for (var e = this.slides, t = 0; t < e.length; t += 1) {
                var i = this.slides.eq(t)
                  , s = -i[0].swiperSlideOffset;
                this.params.virtualTranslate || (s -= this.translate);
                var a = 0;
                this.isHorizontal() || (a = s,
                s = 0);
                var r = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                i.css({
                    opacity: r
                }).transform("translate3d(" + s + "px, " + a + "px, 0px)")
            }
        },
        setTransition: function(e) {
            var t = this
              , i = t.slides
              , s = t.$wrapperEl;
            if (i.transition(e),
            t.params.virtualTranslate && 0 !== e) {
                var a = !1;
                i.transitionEnd((function() {
                    if (!a && t && !t.destroyed) {
                        a = !0,
                        t.animating = !1;
                        for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1)
                            s.trigger(e[i])
                    }
                }
                ))
            }
        }
    }
      , fe = {
        setTranslate: function() {
            var e, t = this.$el, i = this.$wrapperEl, a = this.slides, r = this.width, n = this.height, o = this.rtlTranslate, l = this.size, d = this.params.cubeEffect, h = this.isHorizontal(), p = this.virtual && this.params.virtual.enabled, c = 0;
            d.shadow && (h ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = s('<div class="swiper-cube-shadow"></div>'),
            i.append(e)),
            e.css({
                height: r + "px"
            })) : 0 === (e = t.find(".swiper-cube-shadow")).length && (e = s('<div class="swiper-cube-shadow"></div>'),
            t.append(e)));
            for (var u = 0; u < a.length; u += 1) {
                var v = a.eq(u)
                  , f = u;
                p && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
                var m = 90 * f
                  , g = Math.floor(m / 360);
                o && (m = -m,
                g = Math.floor(-m / 360));
                var b = Math.max(Math.min(v[0].progress, 1), -1)
                  , w = 0
                  , y = 0
                  , x = 0;
                f % 4 == 0 ? (w = 4 * -g * l,
                x = 0) : (f - 1) % 4 == 0 ? (w = 0,
                x = 4 * -g * l) : (f - 2) % 4 == 0 ? (w = l + 4 * g * l,
                x = l) : (f - 3) % 4 == 0 && (w = -l,
                x = 3 * l + 4 * l * g),
                o && (w = -w),
                h || (y = w,
                w = 0);
                var T = "rotateX(" + (h ? 0 : -m) + "deg) rotateY(" + (h ? m : 0) + "deg) translate3d(" + w + "px, " + y + "px, " + x + "px)";
                if (b <= 1 && b > -1 && (c = 90 * f + 90 * b,
                o && (c = 90 * -f - 90 * b)),
                v.transform(T),
                d.slideShadows) {
                    var E = h ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top")
                      , S = h ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                    0 === E.length && (E = s('<div class="swiper-slide-shadow-' + (h ? "left" : "top") + '"></div>'),
                    v.append(E)),
                    0 === S.length && (S = s('<div class="swiper-slide-shadow-' + (h ? "right" : "bottom") + '"></div>'),
                    v.append(S)),
                    E.length && (E[0].style.opacity = Math.max(-b, 0)),
                    S.length && (S[0].style.opacity = Math.max(b, 0))
                }
            }
            if (i.css({
                "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
                "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
                "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
                "transform-origin": "50% 50% -" + l / 2 + "px"
            }),
            d.shadow)
                if (h)
                    e.transform("translate3d(0px, " + (r / 2 + d.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");
                else {
                    var C = Math.abs(c) - 90 * Math.floor(Math.abs(c) / 90)
                      , M = 1.5 - (Math.sin(2 * C * Math.PI / 360) / 2 + Math.cos(2 * C * Math.PI / 360) / 2)
                      , P = d.shadowScale
                      , z = d.shadowScale / M
                      , k = d.shadowOffset;
                    e.transform("scale3d(" + P + ", 1, " + z + ") translate3d(0px, " + (n / 2 + k) + "px, " + -n / 2 / z + "px) rotateX(-90deg)")
                }
            var $ = j.isSafari || j.isUiWebView ? -l / 2 : 0;
            i.transform("translate3d(0px,0," + $ + "px) rotateX(" + (this.isHorizontal() ? 0 : c) + "deg) rotateY(" + (this.isHorizontal() ? -c : 0) + "deg)")
        },
        setTransition: function(e) {
            var t = this.$el;
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
            this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
        }
    }
      , me = {
        setTranslate: function() {
            for (var e = this.slides, t = this.rtlTranslate, i = 0; i < e.length; i += 1) {
                var a = e.eq(i)
                  , r = a[0].progress;
                this.params.flipEffect.limitRotation && (r = Math.max(Math.min(a[0].progress, 1), -1));
                var n = -180 * r
                  , o = 0
                  , l = -a[0].swiperSlideOffset
                  , d = 0;
                if (this.isHorizontal() ? t && (n = -n) : (d = l,
                l = 0,
                o = -n,
                n = 0),
                a[0].style.zIndex = -Math.abs(Math.round(r)) + e.length,
                this.params.flipEffect.slideShadows) {
                    var h = this.isHorizontal() ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top")
                      , p = this.isHorizontal() ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom");
                    0 === h.length && (h = s('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'),
                    a.append(h)),
                    0 === p.length && (p = s('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'),
                    a.append(p)),
                    h.length && (h[0].style.opacity = Math.max(-r, 0)),
                    p.length && (p[0].style.opacity = Math.max(r, 0))
                }
                a.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)")
            }
        },
        setTransition: function(e) {
            var t = this
              , i = t.slides
              , s = t.activeIndex
              , a = t.$wrapperEl;
            if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
            t.params.virtualTranslate && 0 !== e) {
                var r = !1;
                i.eq(s).transitionEnd((function() {
                    if (!r && t && !t.destroyed) {
                        r = !0,
                        t.animating = !1;
                        for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1)
                            a.trigger(e[i])
                    }
                }
                ))
            }
        }
    }
      , ge = {
        setTranslate: function() {
            for (var e = this.width, t = this.height, i = this.slides, a = this.$wrapperEl, r = this.slidesSizesGrid, n = this.params.coverflowEffect, l = this.isHorizontal(), d = this.translate, h = l ? e / 2 - d : t / 2 - d, p = l ? n.rotate : -n.rotate, c = n.depth, u = 0, v = i.length; u < v; u += 1) {
                var f = i.eq(u)
                  , m = r[u]
                  , g = (h - f[0].swiperSlideOffset - m / 2) / m * n.modifier
                  , b = l ? p * g : 0
                  , w = l ? 0 : p * g
                  , y = -c * Math.abs(g)
                  , x = n.stretch;
                "string" == typeof x && -1 !== x.indexOf("%") && (x = parseFloat(n.stretch) / 100 * m);
                var T = l ? 0 : x * g
                  , E = l ? x * g : 0;
                Math.abs(E) < .001 && (E = 0),
                Math.abs(T) < .001 && (T = 0),
                Math.abs(y) < .001 && (y = 0),
                Math.abs(b) < .001 && (b = 0),
                Math.abs(w) < .001 && (w = 0);
                var S = "translate3d(" + E + "px," + T + "px," + y + "px)  rotateX(" + w + "deg) rotateY(" + b + "deg)";
                if (f.transform(S),
                f[0].style.zIndex = 1 - Math.abs(Math.round(g)),
                n.slideShadows) {
                    var C = l ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top")
                      , M = l ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
                    0 === C.length && (C = s('<div class="swiper-slide-shadow-' + (l ? "left" : "top") + '"></div>'),
                    f.append(C)),
                    0 === M.length && (M = s('<div class="swiper-slide-shadow-' + (l ? "right" : "bottom") + '"></div>'),
                    f.append(M)),
                    C.length && (C[0].style.opacity = g > 0 ? g : 0),
                    M.length && (M[0].style.opacity = -g > 0 ? -g : 0)
                }
            }
            (o.pointerEvents || o.prefixedPointerEvents) && (a[0].style.perspectiveOrigin = h + "px 50%")
        },
        setTransition: function(e) {
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
        }
    }
      , be = {
        init: function() {
            var e = this.params.thumbs
              , t = this.constructor;
            e.swiper instanceof t ? (this.thumbs.swiper = e.swiper,
            n.extend(this.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }),
            n.extend(this.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            })) : n.isObject(e.swiper) && (this.thumbs.swiper = new t(n.extend({}, e.swiper, {
                watchSlidesVisibility: !0,
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            })),
            this.thumbs.swiperCreated = !0),
            this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass),
            this.thumbs.swiper.on("tap", this.thumbs.onThumbClick)
        },
        onThumbClick: function() {
            var e = this.thumbs.swiper;
            if (e) {
                var t = e.clickedIndex
                  , i = e.clickedSlide;
                if (!(i && s(i).hasClass(this.params.thumbs.slideThumbActiveClass) || null == t)) {
                    var a;
                    if (a = e.params.loop ? parseInt(s(e.clickedSlide).attr("data-swiper-slide-index"), 10) : t,
                    this.params.loop) {
                        var r = this.activeIndex;
                        this.slides.eq(r).hasClass(this.params.slideDuplicateClass) && (this.loopFix(),
                        this._clientLeft = this.$wrapperEl[0].clientLeft,
                        r = this.activeIndex);
                        var n = this.slides.eq(r).prevAll('[data-swiper-slide-index="' + a + '"]').eq(0).index()
                          , o = this.slides.eq(r).nextAll('[data-swiper-slide-index="' + a + '"]').eq(0).index();
                        a = void 0 === n ? o : void 0 === o ? n : o - r < r - n ? o : n
                    }
                    this.slideTo(a)
                }
            }
        },
        update: function(e) {
            var t = this.thumbs.swiper;
            if (t) {
                var i = "auto" === t.params.slidesPerView ? t.slidesPerViewDynamic() : t.params.slidesPerView;
                if (this.realIndex !== t.realIndex) {
                    var s, a = t.activeIndex;
                    if (t.params.loop) {
                        t.slides.eq(a).hasClass(t.params.slideDuplicateClass) && (t.loopFix(),
                        t._clientLeft = t.$wrapperEl[0].clientLeft,
                        a = t.activeIndex);
                        var r = t.slides.eq(a).prevAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index()
                          , n = t.slides.eq(a).nextAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index();
                        s = void 0 === r ? n : void 0 === n ? r : n - a == a - r ? a : n - a < a - r ? n : r
                    } else
                        s = this.realIndex;
                    t.visibleSlidesIndexes && t.visibleSlidesIndexes.indexOf(s) < 0 && (t.params.centeredSlides ? s = s > a ? s - Math.floor(i / 2) + 1 : s + Math.floor(i / 2) - 1 : s > a && (s = s - i + 1),
                    t.slideTo(s, e ? 0 : void 0))
                }
                var o = 1
                  , l = this.params.thumbs.slideThumbActiveClass;
                if (this.params.slidesPerView > 1 && !this.params.centeredSlides && (o = this.params.slidesPerView),
                this.params.thumbs.multipleActiveThumbs || (o = 1),
                o = Math.floor(o),
                t.slides.removeClass(l),
                t.params.loop || t.params.virtual && t.params.virtual.enabled)
                    for (var d = 0; d < o; d += 1)
                        t.$wrapperEl.children('[data-swiper-slide-index="' + (this.realIndex + d) + '"]').addClass(l);
                else
                    for (var h = 0; h < o; h += 1)
                        t.slides.eq(this.realIndex + h).addClass(l)
            }
        }
    }
      , we = [R, q, K, U, Z, J, te, {
        name: "mousewheel",
        params: {
            mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarged: "container"
            }
        },
        create: function() {
            n.extend(this, {
                mousewheel: {
                    enabled: !1,
                    enable: ie.enable.bind(this),
                    disable: ie.disable.bind(this),
                    handle: ie.handle.bind(this),
                    handleMouseEnter: ie.handleMouseEnter.bind(this),
                    handleMouseLeave: ie.handleMouseLeave.bind(this),
                    animateSlider: ie.animateSlider.bind(this),
                    releaseScroll: ie.releaseScroll.bind(this),
                    lastScrollTime: n.now(),
                    lastEventBeforeSnap: void 0,
                    recentWheelEvents: []
                }
            })
        },
        on: {
            init: function() {
                !this.params.mousewheel.enabled && this.params.cssMode && this.mousewheel.disable(),
                this.params.mousewheel.enabled && this.mousewheel.enable()
            },
            destroy: function() {
                this.params.cssMode && this.mousewheel.enable(),
                this.mousewheel.enabled && this.mousewheel.disable()
            }
        }
    }, {
        name: "navigation",
        params: {
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock"
            }
        },
        create: function() {
            n.extend(this, {
                navigation: {
                    init: se.init.bind(this),
                    update: se.update.bind(this),
                    destroy: se.destroy.bind(this),
                    onNextClick: se.onNextClick.bind(this),
                    onPrevClick: se.onPrevClick.bind(this)
                }
            })
        },
        on: {
            init: function() {
                this.navigation.init(),
                this.navigation.update()
            },
            toEdge: function() {
                this.navigation.update()
            },
            fromEdge: function() {
                this.navigation.update()
            },
            destroy: function() {
                this.navigation.destroy()
            },
            click: function(e) {
                var t, i = this.navigation, a = i.$nextEl, r = i.$prevEl;
                !this.params.navigation.hideOnClick || s(e.target).is(r) || s(e.target).is(a) || (a ? t = a.hasClass(this.params.navigation.hiddenClass) : r && (t = r.hasClass(this.params.navigation.hiddenClass)),
                !0 === t ? this.emit("navigationShow", this) : this.emit("navigationHide", this),
                a && a.toggleClass(this.params.navigation.hiddenClass),
                r && r.toggleClass(this.params.navigation.hiddenClass))
            }
        }
    }, {
        name: "pagination",
        params: {
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: function(e) {
                    return e
                },
                formatFractionTotal: function(e) {
                    return e
                },
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                modifierClass: "swiper-pagination-",
                currentClass: "swiper-pagination-current",
                totalClass: "swiper-pagination-total",
                hiddenClass: "swiper-pagination-hidden",
                progressbarFillClass: "swiper-pagination-progressbar-fill",
                progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                clickableClass: "swiper-pagination-clickable",
                lockClass: "swiper-pagination-lock"
            }
        },
        create: function() {
            n.extend(this, {
                pagination: {
                    init: ae.init.bind(this),
                    render: ae.render.bind(this),
                    update: ae.update.bind(this),
                    destroy: ae.destroy.bind(this),
                    dynamicBulletIndex: 0
                }
            })
        },
        on: {
            init: function() {
                this.pagination.init(),
                this.pagination.render(),
                this.pagination.update()
            },
            activeIndexChange: function() {
                this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update()
            },
            snapIndexChange: function() {
                this.params.loop || this.pagination.update()
            },
            slidesLengthChange: function() {
                this.params.loop && (this.pagination.render(),
                this.pagination.update())
            },
            snapGridLengthChange: function() {
                this.params.loop || (this.pagination.render(),
                this.pagination.update())
            },
            destroy: function() {
                this.pagination.destroy()
            },
            click: function(e) {
                this.params.pagination.el && this.params.pagination.hideOnClick && this.pagination.$el.length > 0 && !s(e.target).hasClass(this.params.pagination.bulletClass) && (!0 === this.pagination.$el.hasClass(this.params.pagination.hiddenClass) ? this.emit("paginationShow", this) : this.emit("paginationHide", this),
                this.pagination.$el.toggleClass(this.params.pagination.hiddenClass))
            }
        }
    }, {
        name: "scrollbar",
        params: {
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag"
            }
        },
        create: function() {
            n.extend(this, {
                scrollbar: {
                    init: re.init.bind(this),
                    destroy: re.destroy.bind(this),
                    updateSize: re.updateSize.bind(this),
                    setTranslate: re.setTranslate.bind(this),
                    setTransition: re.setTransition.bind(this),
                    enableDraggable: re.enableDraggable.bind(this),
                    disableDraggable: re.disableDraggable.bind(this),
                    setDragPosition: re.setDragPosition.bind(this),
                    getPointerPosition: re.getPointerPosition.bind(this),
                    onDragStart: re.onDragStart.bind(this),
                    onDragMove: re.onDragMove.bind(this),
                    onDragEnd: re.onDragEnd.bind(this),
                    isTouched: !1,
                    timeout: null,
                    dragTimeout: null
                }
            })
        },
        on: {
            init: function() {
                this.scrollbar.init(),
                this.scrollbar.updateSize(),
                this.scrollbar.setTranslate()
            },
            update: function() {
                this.scrollbar.updateSize()
            },
            resize: function() {
                this.scrollbar.updateSize()
            },
            observerUpdate: function() {
                this.scrollbar.updateSize()
            },
            setTranslate: function() {
                this.scrollbar.setTranslate()
            },
            setTransition: function(e) {
                this.scrollbar.setTransition(e)
            },
            destroy: function() {
                this.scrollbar.destroy()
            }
        }
    }, {
        name: "parallax",
        params: {
            parallax: {
                enabled: !1
            }
        },
        create: function() {
            n.extend(this, {
                parallax: {
                    setTransform: ne.setTransform.bind(this),
                    setTranslate: ne.setTranslate.bind(this),
                    setTransition: ne.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                this.params.parallax.enabled && (this.params.watchSlidesProgress = !0,
                this.originalParams.watchSlidesProgress = !0)
            },
            init: function() {
                this.params.parallax.enabled && this.parallax.setTranslate()
            },
            setTranslate: function() {
                this.params.parallax.enabled && this.parallax.setTranslate()
            },
            setTransition: function(e) {
                this.params.parallax.enabled && this.parallax.setTransition(e)
            }
        }
    }, {
        name: "zoom",
        params: {
            zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        },
        create: function() {
            var e = this
              , t = {
                enabled: !1,
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                    $slideEl: void 0,
                    slideWidth: void 0,
                    slideHeight: void 0,
                    $imageEl: void 0,
                    $imageWrapEl: void 0,
                    maxRatio: 3
                },
                image: {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {}
                },
                velocity: {
                    x: void 0,
                    y: void 0,
                    prevPositionX: void 0,
                    prevPositionY: void 0,
                    prevTime: void 0
                }
            };
            "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach((function(i) {
                t[i] = oe[i].bind(e)
            }
            )),
            n.extend(e, {
                zoom: t
            });
            var i = 1;
            Object.defineProperty(e.zoom, "scale", {
                get: function() {
                    return i
                },
                set: function(t) {
                    if (i !== t) {
                        var s = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0
                          , a = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
                        e.emit("zoomChange", t, s, a)
                    }
                    i = t
                }
            })
        },
        on: {
            init: function() {
                this.params.zoom.enabled && this.zoom.enable()
            },
            destroy: function() {
                this.zoom.disable()
            },
            touchStart: function(e) {
                this.zoom.enabled && this.zoom.onTouchStart(e)
            },
            touchEnd: function(e) {
                this.zoom.enabled && this.zoom.onTouchEnd(e)
            },
            doubleTap: function(e) {
                this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
            },
            transitionEnd: function() {
                this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
            },
            slideChange: function() {
                this.zoom.enabled && this.params.zoom.enabled && this.params.cssMode && this.zoom.onTransitionEnd()
            }
        }
    }, {
        name: "lazy",
        params: {
            lazy: {
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader"
            }
        },
        create: function() {
            n.extend(this, {
                lazy: {
                    initialImageLoaded: !1,
                    load: le.load.bind(this),
                    loadInSlide: le.loadInSlide.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
            },
            init: function() {
                this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
            },
            scroll: function() {
                this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
            },
            resize: function() {
                this.params.lazy.enabled && this.lazy.load()
            },
            scrollbarDragMove: function() {
                this.params.lazy.enabled && this.lazy.load()
            },
            transitionStart: function() {
                this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load()
            },
            transitionEnd: function() {
                this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
            },
            slideChange: function() {
                this.params.lazy.enabled && this.params.cssMode && this.lazy.load()
            }
        }
    }, {
        name: "controller",
        params: {
            controller: {
                control: void 0,
                inverse: !1,
                by: "slide"
            }
        },
        create: function() {
            n.extend(this, {
                controller: {
                    control: this.params.controller.control,
                    getInterpolateFunction: de.getInterpolateFunction.bind(this),
                    setTranslate: de.setTranslate.bind(this),
                    setTransition: de.setTransition.bind(this)
                }
            })
        },
        on: {
            update: function() {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0,
                delete this.controller.spline)
            },
            resize: function() {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0,
                delete this.controller.spline)
            },
            observerUpdate: function() {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0,
                delete this.controller.spline)
            },
            setTranslate: function(e, t) {
                this.controller.control && this.controller.setTranslate(e, t)
            },
            setTransition: function(e, t) {
                this.controller.control && this.controller.setTransition(e, t)
            }
        }
    }, {
        name: "a11y",
        params: {
            a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}"
            }
        },
        create: function() {
            var e = this;
            n.extend(e, {
                a11y: {
                    liveRegion: s('<span class="' + e.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                }
            }),
            Object.keys(he).forEach((function(t) {
                e.a11y[t] = he[t].bind(e)
            }
            ))
        },
        on: {
            init: function() {
                this.params.a11y.enabled && (this.a11y.init(),
                this.a11y.updateNavigation())
            },
            toEdge: function() {
                this.params.a11y.enabled && this.a11y.updateNavigation()
            },
            fromEdge: function() {
                this.params.a11y.enabled && this.a11y.updateNavigation()
            },
            paginationUpdate: function() {
                this.params.a11y.enabled && this.a11y.updatePagination()
            },
            destroy: function() {
                this.params.a11y.enabled && this.a11y.destroy()
            }
        }
    }, {
        name: "history",
        params: {
            history: {
                enabled: !1,
                replaceState: !1,
                key: "slides"
            }
        },
        create: function() {
            n.extend(this, {
                history: {
                    init: pe.init.bind(this),
                    setHistory: pe.setHistory.bind(this),
                    setHistoryPopState: pe.setHistoryPopState.bind(this),
                    scrollToSlide: pe.scrollToSlide.bind(this),
                    destroy: pe.destroy.bind(this)
                }
            })
        },
        on: {
            init: function() {
                this.params.history.enabled && this.history.init()
            },
            destroy: function() {
                this.params.history.enabled && this.history.destroy()
            },
            transitionEnd: function() {
                this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
            },
            slideChange: function() {
                this.history.initialized && this.params.cssMode && this.history.setHistory(this.params.history.key, this.activeIndex)
            }
        }
    }, {
        name: "hash-navigation",
        params: {
            hashNavigation: {
                enabled: !1,
                replaceState: !1,
                watchState: !1
            }
        },
        create: function() {
            n.extend(this, {
                hashNavigation: {
                    initialized: !1,
                    init: ce.init.bind(this),
                    destroy: ce.destroy.bind(this),
                    setHash: ce.setHash.bind(this),
                    onHashCange: ce.onHashCange.bind(this)
                }
            })
        },
        on: {
            init: function() {
                this.params.hashNavigation.enabled && this.hashNavigation.init()
            },
            destroy: function() {
                this.params.hashNavigation.enabled && this.hashNavigation.destroy()
            },
            transitionEnd: function() {
                this.hashNavigation.initialized && this.hashNavigation.setHash()
            },
            slideChange: function() {
                this.hashNavigation.initialized && this.params.cssMode && this.hashNavigation.setHash()
            }
        }
    }, {
        name: "autoplay",
        params: {
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1
            }
        },
        create: function() {
            var e = this;
            n.extend(e, {
                autoplay: {
                    running: !1,
                    paused: !1,
                    run: ue.run.bind(e),
                    start: ue.start.bind(e),
                    stop: ue.stop.bind(e),
                    pause: ue.pause.bind(e),
                    onVisibilityChange: function() {
                        "hidden" === document.visibilityState && e.autoplay.running && e.autoplay.pause(),
                        "visible" === document.visibilityState && e.autoplay.paused && (e.autoplay.run(),
                        e.autoplay.paused = !1)
                    },
                    onTransitionEnd: function(t) {
                        e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd),
                        e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd),
                        e.autoplay.paused = !1,
                        e.autoplay.running ? e.autoplay.run() : e.autoplay.stop())
                    }
                }
            })
        },
        on: {
            init: function() {
                this.params.autoplay.enabled && (this.autoplay.start(),
                document.addEventListener("visibilitychange", this.autoplay.onVisibilityChange))
            },
            beforeTransitionStart: function(e, t) {
                this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
            },
            sliderFirstMove: function() {
                this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
            },
            touchEnd: function() {
                this.params.cssMode && this.autoplay.paused && !this.params.autoplay.disableOnInteraction && this.autoplay.run()
            },
            destroy: function() {
                this.autoplay.running && this.autoplay.stop(),
                document.removeEventListener("visibilitychange", this.autoplay.onVisibilityChange)
            }
        }
    }, {
        name: "effect-fade",
        params: {
            fadeEffect: {
                crossFade: !1
            }
        },
        create: function() {
            n.extend(this, {
                fadeEffect: {
                    setTranslate: ve.setTranslate.bind(this),
                    setTransition: ve.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                if ("fade" === this.params.effect) {
                    this.classNames.push(this.params.containerModifierClass + "fade");
                    var e = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !0
                    };
                    n.extend(this.params, e),
                    n.extend(this.originalParams, e)
                }
            },
            setTranslate: function() {
                "fade" === this.params.effect && this.fadeEffect.setTranslate()
            },
            setTransition: function(e) {
                "fade" === this.params.effect && this.fadeEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-cube",
        params: {
            cubeEffect: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            }
        },
        create: function() {
            n.extend(this, {
                cubeEffect: {
                    setTranslate: fe.setTranslate.bind(this),
                    setTransition: fe.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                if ("cube" === this.params.effect) {
                    this.classNames.push(this.params.containerModifierClass + "cube"),
                    this.classNames.push(this.params.containerModifierClass + "3d");
                    var e = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        resistanceRatio: 0,
                        spaceBetween: 0,
                        centeredSlides: !1,
                        virtualTranslate: !0
                    };
                    n.extend(this.params, e),
                    n.extend(this.originalParams, e)
                }
            },
            setTranslate: function() {
                "cube" === this.params.effect && this.cubeEffect.setTranslate()
            },
            setTransition: function(e) {
                "cube" === this.params.effect && this.cubeEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-flip",
        params: {
            flipEffect: {
                slideShadows: !0,
                limitRotation: !0
            }
        },
        create: function() {
            n.extend(this, {
                flipEffect: {
                    setTranslate: me.setTranslate.bind(this),
                    setTransition: me.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                if ("flip" === this.params.effect) {
                    this.classNames.push(this.params.containerModifierClass + "flip"),
                    this.classNames.push(this.params.containerModifierClass + "3d");
                    var e = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !0
                    };
                    n.extend(this.params, e),
                    n.extend(this.originalParams, e)
                }
            },
            setTranslate: function() {
                "flip" === this.params.effect && this.flipEffect.setTranslate()
            },
            setTransition: function(e) {
                "flip" === this.params.effect && this.flipEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-coverflow",
        params: {
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: !0
            }
        },
        create: function() {
            n.extend(this, {
                coverflowEffect: {
                    setTranslate: ge.setTranslate.bind(this),
                    setTransition: ge.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                "coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"),
                this.classNames.push(this.params.containerModifierClass + "3d"),
                this.params.watchSlidesProgress = !0,
                this.originalParams.watchSlidesProgress = !0)
            },
            setTranslate: function() {
                "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
            },
            setTransition: function(e) {
                "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
            }
        }
    }, {
        name: "thumbs",
        params: {
            thumbs: {
                multipleActiveThumbs: !0,
                swiper: null,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-container-thumbs"
            }
        },
        create: function() {
            n.extend(this, {
                thumbs: {
                    swiper: null,
                    init: be.init.bind(this),
                    update: be.update.bind(this),
                    onThumbClick: be.onThumbClick.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                var e = this.params.thumbs;
                e && e.swiper && (this.thumbs.init(),
                this.thumbs.update(!0))
            },
            slideChange: function() {
                this.thumbs.swiper && this.thumbs.update()
            },
            update: function() {
                this.thumbs.swiper && this.thumbs.update()
            },
            resize: function() {
                this.thumbs.swiper && this.thumbs.update()
            },
            observerUpdate: function() {
                this.thumbs.swiper && this.thumbs.update()
            },
            setTransition: function(e) {
                var t = this.thumbs.swiper;
                t && t.setTransition(e)
            },
            beforeDestroy: function() {
                var e = this.thumbs.swiper;
                e && this.thumbs.swiperCreated && e && e.destroy()
            }
        }
    }];
    return void 0 === W.use && (W.use = W.Class.use,
    W.installModule = W.Class.installModule),
    W.use(we),
    W
}
));
/*!
 Ridiculously Responsive Social Sharing Buttons
 Team: @dbox, @joshuatuscan
 Site: http://www.rrssb.ml
 Twitter: @therealkni

        ___           ___
       /__/|         /__/\        ___
      |  |:|         \  \:\      /  /\
      |  |:|          \  \:\    /  /:/
    __|  |:|      _____\__\:\  /__/::\
   /__/\_|:|____ /__/::::::::\ \__\/\:\__
   \  \:\/:::::/ \  \:\~~\~~\/    \  \:\/\
    \  \::/~~~~   \  \:\  ~~~      \__\::/
     \  \:\        \  \:\          /__/:/
      \  \:\        \  \:\         \__\/
       \__\/         \__\/
*/
+(function(window, $, undefined) {
    'use strict';
    $.fn.rrssb = function(options) {
        var settings = $.extend({
            description: undefined,
            emailAddress: undefined,
            emailBody: undefined,
            emailSubject: undefined,
            image: undefined,
            title: undefined,
            url: undefined
        }, options);
        settings.emailSubject = settings.emailSubject || settings.title;
        settings.emailBody = settings.emailBody || ((settings.description ? settings.description : '') + (settings.url ? '\n\n' + settings.url : ''));
        for (var key in settings) {
            if (settings.hasOwnProperty(key) && settings[key] !== undefined) {
                settings[key] = encodeURIComponent(settings[key]);
            }
        }
        ;if (settings.url !== undefined) {
            $(this).find('.share-btn-facebook').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=' + settings.url);
            $(this).find('.share-btn-tumblr').attr('href', 'http://tumblr.com/share/link?url=' + settings.url + (settings.title !== undefined ? '&name=' + settings.title : '') + (settings.description !== undefined ? '&description=' + settings.description : ''));
            $(this).find('.share-btn-linkedin').attr('href', 'http://www.linkedin.com/shareArticle?mini=true&url=' + settings.url + (settings.title !== undefined ? '&title=' + settings.title : '') + (settings.description !== undefined ? '&summary=' + settings.description : ''));
            $(this).find('.share-btn-twitter').attr('href', 'https://twitter.com/intent/tweet?text=' + (settings.description !== undefined ? settings.description : '') + '%20' + settings.url);
            $(this).find('.share-btn-reddit').attr('href', 'http://www.reddit.com/submit?url=' + settings.url + (settings.description !== undefined ? '&text=' + settings.description : '') + (settings.title !== undefined ? '&title=' + settings.title : ''));
            $(this).find('.share-btn-googleplus').attr('href', 'https://plus.google.com/share?url=' + settings.url);
            $(this).find('.share-btn-pinterest').attr('href', 'http://pinterest.com/pin/create/button/?url=' + settings.url + ((settings.image !== undefined) ? '&amp;media=' + settings.image : '') + (settings.description !== undefined ? '&description=' + settings.description : ''));
            $(this).find('.share-btn-print').attr('href', 'javascript:window.print()');
            $(this).find('.share-btn-whatsapp').attr('href', 'whatsapp://send?text=' + (settings.description !== undefined ? settings.description + '%20' : (settings.title !== undefined ? settings.title + '%20' : '')) + settings.url);
        }
        if (settings.emailAddress !== undefined || settings.emailSubject) {
            $(this).find('.rrssb-email a').attr('href', 'mailto:' + (settings.emailAddress ? settings.emailAddress : '') + '?' + (settings.emailSubject !== undefined ? 'subject=' + settings.emailSubject : '') + (settings.emailBody !== undefined ? '&body=' + settings.emailBody : ''));
        }
    }
    ;
    var encodeString = function(string) {
        if (string !== undefined && string !== null) {
            if (string.match(/%[0-9a-f]{2}/i) !== null) {
                string = decodeURIComponent(string);
                encodeString(string);
            } else {
                return encodeURIComponent(string);
            }
        }
    };
    var rrssbInit = function() {
        $('.share-btn').each(function(index) {
            $(this).addClass('share-btn-' + (index + 1));
        });
    };
    var popupCenter = function(url, title, w, h) {
        var dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left;
        var dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top;
        var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
        var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
        var left = ((width / 2) - (w / 2)) + dualScreenLeft;
        var top = ((height / 3) - (h / 3)) + dualScreenTop;
        var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
        if (newWindow && newWindow.focus) {
            newWindow.focus();
        }
    };
    $(document).ready(function() {
        try {
            $(document).on('click', '.share-btn', {}, function popUp(e) {
                var self = $(this);
                popupCenter(self.attr('href'), self.attr('title'), 580, 470);
                e.preventDefault();
            });
        } catch (e) {}
        rrssbInit();
    });
    window.rrssbInit = rrssbInit;
}
)(window, jQuery);
;(function($, window, undefined) {
    'use strict';
    $.Calendario = function(options, element) {
        this.$el = $(element);
        this._init(options);
    }
    ;
    $.Calendario.defaults = {
        weeks: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        weekabbrs: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        monthabbrs: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        displayWeekAbbr: false,
        displayMonthAbbr: false,
        startIn: 1,
        events: 'click',
        fillEmpty: true,
        feedParser: './feed/',
        zone: '00:00',
        checkUpdate: true
    };
    $.Calendario.prototype = {
        _init: function(options) {
            this.VERSION = '3.2.0';
            this.UNIQUE = '%{unique}%';
            this.options = $.extend(true, {}, $.Calendario.defaults, options);
            this.today = new Date();
            this.month = (isNaN(this.options.month) || this.options.month === null) ? this.today.getMonth() : this.options.month - 1;
            this.year = (isNaN(this.options.year) || this.options.year === null) ? this.today.getFullYear() : this.options.year;
            this.caldata = this._processCaldata(this.options.caldata);
            if (parseFloat($().jquery) >= 1.9 && this.options.events.indexOf('hover') != -1)
                this.logError('\'hover\' psuedo-name is not supported' + ' in jQuery 1.9+. Use \'mouseenter\' \'mouseleave\' events instead.');
            this.options.events = this.options.events.split(',');
            this.options.zone = this.options.zone.charAt(0) != '+' && this.options.zone.charAt(0) != '-' ? '+' + this.options.zone : this.options.zone;
            this._generateTemplate(true);
            this._initEvents();
        },
        _processCaldataObj: function(val, key) {
            if (typeof val !== 'object')
                val = {
                    content: val,
                    startTime: '00:00',
                    endTime: '23:59',
                    allDay: true
                };
            if (!val.content)
                this.logError('Content is missing in date ' + key);
            if (val.startTime && !val.endTime)
                val.endTime = parseInt(val.startTime.split(':')[0]) + 1 + ':' + val.startTime.split(':')[1];
            if (!val.startTime && !val.endTime)
                val = $.extend({}, val, {
                    startTime: '00:00',
                    endTime: '23:59',
                    allDay: true
                });
            if (val.startTime && val.endTime && val.allDay === undefined)
                val.allDay = false;
            if (/^\d{2}-DD-\d{4}/.test(key) || /^\d{2}-DD-YYYY/.test(key)) {
                var det = /^(\d{2})-DD-(\d{4})/.exec(key) || /^(\d{2})-DD-YYYY/.exec(key), chkDate;
                if (det.length == 3)
                    chkDate = new Date(det[2],det[1],0);
                else if (det.length == 2)
                    chkDate = new Date(this.year,det[1],0)
                if (!val.startDate)
                    val.startDate = 1;
                if (!val.endDate && chkDate.getDate() != 1)
                    val.endDate = chkDate.getDate();
                if (!val.endDate && chkDate.getDate() == 1 && det.length == 3)
                    val.endDate = chkDate.getDate();
            }
            return val;
        },
        _processCaldata: function(caldata) {
            var self = this;
            caldata = caldata || {};
            $.each(caldata, function(key, val) {
                if (/^\d{2}-\d{2}-\d{4}/.test(key) || /^\d{2}-\d{2}-YYYY/.test(key) || /^\d{2}-DD-YYYY/.test(key) || /^MM-\d{2}-YYYY/.test(key) || /^\d{2}-DD-YYYY/.test(key) || /^MM-\d{2}-\d{4}/.test(key) || /^\d{2}-DD-\d{4}/.test(key) || key == 'TODAY')
                    ;if (Array.isArray(val)) {
                    $.each(val, function(i, c) {
                        val[i] = self._processCaldataObj(c, key);
                    });
                    caldata[key] = val;
                } else {
                    caldata[key] = self._processCaldataObj(val, key);
                }
            });
            return caldata;
        },
        _propDate: function($cell, event) {
            var idx = $cell.index()
              , data = {
                allDay: [],
                content: [],
                endTime: [],
                startTime: []
            }
              , dateProp = {
                day: $cell.children('span.fc-date').text(),
                month: this.month + 1,
                monthname: this.options.displayMonthAbbr ? this.options.monthabbrs[this.month] : this.options.months[this.month],
                year: this.year,
                weekday: idx + this.options.startIn,
                weekdayname: this.options.weeks[(idx == 6 ? 0 : idx + this.options.startIn)]
            };
            $cell.children('div.fc-calendar-events').children('div.fc-calendar-event').each(function(i, e) {
                var $html = $('<div>' + $(e).html() + '</div>');
                data.startTime[i] = new Date($html.find('time.fc-starttime').attr('datetime'));
                data.endTime[i] = new Date($html.find('time.fc-endtime').attr('datetime'));
                data.allDay[i] = $html.find('time.fc-allday').attr('datetime') === 'true' ? true : false;
                $html.find('time').remove();
                data.content[i] = $html.html();
            });
            if (dateProp.day)
                this.options[event]($cell, data, dateProp);
        },
        _initEvents: function() {
            var self = this
              , event = []
              , calendarioEventNameFormat = [];
            for (var i = 0; i < self.options.events.length; i++) {
                event[i] = self.options.events[i].toLowerCase().trim();
                calendarioEventNameFormat[i] = 'onDay' + event[i].charAt(0).toUpperCase() + event[i].slice(1);
                if (this.options[calendarioEventNameFormat[i]] === undefined)
                    this.options[calendarioEventNameFormat[i]] = function($el, $content, dateProperties) {
                        return false;
                    }
                    ;
                this.$el.on(event[i] + '.calendario', 'div.fc-row > div', function(e) {
                    if (e.type == 'mouseenter' || e.type == 'mouseleave')
                        e.type = $.inArray(e.type, event) == -1 ? 'hover' : e.type;
                    self._propDate($(this), calendarioEventNameFormat[$.inArray(e.type, event)]);
                });
            }
            this.$el.on('shown.calendar.calendario', function(e, instance) {});
            this.$el.delay(new Date(this.today.getFullYear(),this.today.getMonth(),this.today.getDate() + 1,0,0,0) - new Date().getTime()).queue(function() {
                self.today = new Date();
                if (self.today.getMonth() == self.month || self.today.getMonth() + 1 == self.month)
                    self._generateTemplate(true);
                self.$el.trigger($.Event('newday.calendar.calendario'));
            });
        },
        _generateTemplate: function(firstRun, callback) {
            var head = this._getHead(), body = this._getBody(), rowClass;
            switch (this.rowTotal) {
            case 4:
                rowClass = 'fc-four-rows';
                break;
            case 5:
                rowClass = 'fc-five-rows';
                break;
            case 6:
                rowClass = 'fc-six-rows';
                break;
            }
            this.$cal = $('<div class="fc-calendar ' + rowClass + '">').append(head, body);
            this.$el.find('div.fc-calendar').remove().end().append(this.$cal);
            this.$el.find('.fc-emptydate').parent().css({
                'background': 'transparent',
                'cursor': 'default'
            });
            if (!firstRun)
                this.$el.trigger($.Event('shown.calendario'));
            if (callback)
                callback.call();
        },
        _getHead: function() {
            var html = '<div class="fc-head">';
            for (var i = 0; i <= 6; i++) {
                var pos = i + this.options.startIn
                  , j = pos > 6 ? pos - 6 - 1 : pos;
                html += '<div>' + (this.options.displayWeekAbbr ? this.options.weekabbrs[j] : this.options.weeks[j]) + '</div>';
            }
            return html + '</div>';
        },
        _parseDataToDay: function(data, day, other) {
            var content = '';
            if (!other) {
                if (Array.isArray(data))
                    content = this._convertDayArray(data, day);
                else
                    content = this._wrapDay(data, day, true);
            } else {
                if (!Array.isArray(data))
                    data = [data];
                for (var i = 0; i < data.length; i++) {
                    if (this.month != 1 && (day >= data[i].startDate) && (day <= data[i].endDate))
                        content += this._wrapDay(data[i], day, true);
                    else if (this.month == 1 && (day >= data[i].startDate)) {
                        if (data[i].endDate && (day <= data[i].endDate))
                            content += this._wrapDay(data[i], day, true);
                        else if (!data[i].endDate)
                            content += this._wrapDay(data[i], day, true);
                    }
                }
            }
            return content;
        },
        _toDateTime: function(time, day, start) {
            var zoneH = parseInt(this.options.zone.split(':')[0])
              , zoneM = parseInt(this.options.zone.charAt(0) + this.options.zone.split(':')[1])
              , hour = parseInt(time.split(':')[0]) - zoneH
              , minutes = parseInt(time.split(':')[1]) - zoneM
              , d = new Date(Date.UTC(this.year, this.month, day, hour, minutes, 0, 0));
            if (start) {
                var hStart = parseInt(start.split(':')[0]) - zoneH
                  , mStart = parseInt(start.split(':')[1]) - zoneM;
                if (d.getTime() - new Date(Date.UTC(this.year, this.month, day, hStart, mStart, 0, 0)).getTime() < 0)
                    d = new Date(Date.UTC(this.year, this.month, day + 1, hour, minutes, 0, 0));
            }
            return d.toISOString();
        },
        _timeHtml: function(day, date) {
            var content = day.content;
            content += '<time class="fc-allday" datetime="' + day.allDay + '"></time>';
            content += '<time class="fc-starttime" datetime="' + this._toDateTime(day.startTime, date) + '">' + day.startTime + '</time>';
            content += '<time class="fc-endtime" datetime="' + this._toDateTime(day.endTime, date, day.startTime) + '">' + day.endTime + '</time>';
            return content;
        },
        _wrapDay: function(day, date, wrap) {
            if (date) {
                if (wrap)
                    return '<div class="fc-calendar-event">' + this._timeHtml(day, date) + '</div>';
                else
                    return this._timeHtml(day, date);
            } else
                return '<div class="fc-calendar-event">' + day + '</div>';
        },
        _convertDayArray: function(day, date) {
            var wrap_days = []
            for (var i = 0; i < day.length; i++) {
                wrap_days[i] = this._wrapDay(day[i], date, false);
            }
            return this._wrapDay(wrap_days.join('</div><div class="fc-calendar-event">'));
        },
        _getBody: function() {
            var d = new Date(this.year,this.month + 1,0)
              , monthLength = d.getDate()
              , firstDay = new Date(this.year,d.getMonth(),1)
              , pMonthLength = new Date(this.year,this.month,0).getDate();
            this.startingDay = firstDay.getDay();
            var html = '<div class="fc-body"><div class="fc-row">'
              , day = 1;
            for (var i = 0; i < 7; i++) {
                for (var j = 0; j <= 6; j++) {
                    var pos = this.startingDay - this.options.startIn
                      , p = pos < 0 ? 6 + pos + 1 : pos
                      , inner = ''
                      , today = this.month === this.today.getMonth() && this.year === this.today.getFullYear() && day === this.today.getDate()
                      , past = this.year < this.today.getFullYear() || this.month < this.today.getMonth() && this.year === this.today.getFullYear() || this.month === this.today.getMonth() && this.year === this.today.getFullYear() && day < this.today.getDate()
                      , content = '';
                    if (this.options.fillEmpty && (j < p || i > 0)) {
                        if (day > monthLength) {
                            inner = '<span class="fc-date fc-emptydate">' + (day - monthLength) + '</span><span class="fc-weekday">';
                            ++day;
                        } else if (day == 1) {
                            inner = '<span class="fc-date fc-emptydate">' + (pMonthLength - p + 1) + '</span><span class="fc-weekday">';
                            ++pMonthLength;
                        }
                        inner += this.options.weekabbrs[j + this.options.startIn > 6 ? j + this.options.startIn - 6 - 1 : j + this.options.startIn] + '</span>';
                    }
                    if (day <= monthLength && (i > 0 || j >= p)) {
                        inner = '<span class="fc-date">' + day + '</span><span class="fc-weekday">' + this.options.weekabbrs[j + this.options.startIn > 6 ? j + this.options.startIn - 6 - 1 : j + this.options.startIn] + '</span>';
                        var strdate = (this.month + 1 < 10 ? '0' + (this.month + 1) : this.month + 1) + '-' + (day < 10 ? '0' + day : day) + '-' + this.year
                          , dayData = this.caldata[strdate]
                          , strdateyear = (this.month + 1 < 10 ? '0' + (this.month + 1) : this.month + 1) + '-' + (day < 10 ? '0' + day : day) + '-YYYY'
                          , dayDataYear = this.caldata[strdateyear]
                          , strdatemonth = 'MM-' + (day < 10 ? '0' + day : day) + '-' + this.year
                          , dayDataMonth = this.caldata[strdatemonth]
                          , strdatemonthyear = 'MM' + '-' + (day < 10 ? '0' + day : day) + '-YYYY'
                          , dayDataMonthYear = this.caldata[strdatemonthyear]
                          , strdatemonthlyyear = (this.month + 1 < 10 ? '0' + (this.month + 1) : this.month + 1) + '-DD-' + this.year
                          , dayDataMonthlyYear = this.caldata[strdatemonthlyyear]
                          , strdatemonthly = (this.month + 1 < 10 ? '0' + (this.month + 1) : this.month + 1) + '-DD-YYYY'
                          , dayDataMonthly = this.caldata[strdatemonthly];
                        if (today && this.caldata.TODAY)
                            content += this._parseDataToDay(this.caldata.TODAY, day);
                        if (dayData)
                            content += this._parseDataToDay(dayData, day);
                        if (dayDataMonth)
                            content += this._parseDataToDay(dayDataMonth, day);
                        if (dayDataMonthlyYear)
                            content += this._parseDataToDay(dayDataMonthlyYear, day, true);
                        if (dayDataMonthly)
                            content += this._parseDataToDay(dayDataMonthly, day, true);
                        if (dayDataMonthYear)
                            content += this._parseDataToDay(dayDataMonthYear, day);
                        if (dayDataYear)
                            content += this._parseDataToDay(dayDataYear, day);
                        if (content !== '')
                            inner += '<div class="fc-calendar-events">' + content + '</div>';
                        ++day;
                    } else {
                        today = false;
                    }
                    var cellClasses = today ? 'fc-today ' : '';
                    if (past)
                        cellClasses += 'fc-past ';
                    else
                        cellClasses += 'fc-future ';
                    if (content !== '')
                        cellClasses += 'fc-content';
                    html += (cellClasses !== '' ? '<div class="' + cellClasses.trim() + '">' : '<div>') + inner + '</div>';
                }
                if (day > monthLength) {
                    this.rowTotal = i + 1;
                    break;
                } else {
                    html += '</div><div class="fc-row">';
                }
            }
            return html + '</div></div>';
        },
        _move: function(period, dir, callback) {
            if (dir === 'previous') {
                if (period === 'month') {
                    this.year = this.month > 0 ? this.year : --this.year;
                    this.month = this.month > 0 ? --this.month : 11;
                } else if (period === 'year')
                    this.year = --this.year;
            } else if (dir === 'next') {
                if (period === 'month') {
                    this.year = this.month < 11 ? this.year : ++this.year;
                    this.month = this.month < 11 ? ++this.month : 0;
                } else if (period === 'year')
                    this.year = ++this.year;
            }
            this._generateTemplate(false, callback);
        },
        option: function(option, value) {
            if (value)
                this.options[option] = value;
            else
                return this.options[option];
        },
        getYear: function() {
            return this.year;
        },
        getMonth: function() {
            return this.month + 1;
        },
        getMonthName: function() {
            return this.options.displayMonthAbbr ? this.options.monthabbrs[this.month] : this.options.months[this.month];
        },
        getCell: function(day) {
            var row = Math.floor((day + this.startingDay - this.options.startIn - 1) / 7)
              , pos = day + this.startingDay - this.options.startIn - (row * 7) - 1;
            return this.$cal.find('div.fc-body').children('div.fc-row').eq(row).children('div').eq(pos);
        },
        setData: function(caldata, clear) {
            caldata = this._processCaldata(caldata);
            if (clear)
                this.caldata = caldata;
            else
                $.extend(this.caldata, caldata);
            this._generateTemplate(false);
        },
        gotoNow: function(callback) {
            this.month = this.today.getMonth();
            this.year = this.today.getFullYear();
            this._generateTemplate(false, callback);
        },
        gotoMonth: function(month, year, callback) {
            this.month = month - 1;
            this.year = year;
            this._generateTemplate(false, callback);
        },
        gotoPreviousMonth: function(callback) {
            this._move('month', 'previous', callback);
        },
        gotoPreviousYear: function(callback) {
            this._move('year', 'previous', callback);
        },
        gotoNextMonth: function(callback) {
            this._move('month', 'next', callback);
        },
        gotoNextYear: function(callback) {
            this._move('year', 'next', callback);
        },
        feed: function(callback) {
            var self = this;
            $.post(self.options.feedParser, {
                dates: this.caldata
            }).always(function(data) {
                if (callback)
                    callback.call(this, JSON.parse(data).hevent);
            });
        },
        version: function() {
            return this.VERSION;
        }
    };
    var logError = function(message) {
        throw new Error(message);
    };
    $.fn.calendario = function(options) {
        var instance = $.data(this, 'calendario');
        if (typeof options === 'string') {
            var args = Array.prototype.slice.call(arguments, 1);
            this.each(function() {
                if (!instance) {
                    logError("Cannot call methods on calendario prior to initialization; Attempted to call method '" + options + "'");
                    return;
                }
                if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {
                    logError("No such method '" + options + "' for calendario instance.");
                }
                instance[options].apply(instance, args);
            });
        } else {
            this.each(function() {
                if (instance)
                    instance._init();
                else
                    instance = $.data(this, 'calendario', new $.Calendario(options,this));
            });
        }
        instance.$el.trigger($.Event('shown.calendar.calendario'), [instance]);
        return instance;
    }
    ;
}
)(jQuery, window);
(function($) {
    'use strict';
    $('.has-popup-media').magnificPopup({
        type: 'inline',
        overflowY: 'auto',
        closeBtnInside: true,
        mainClass: 'popup-box-inline',
        callbacks: {
            elementParse: function(item) {
                var item_id = item.src.replace('#popup-', '');
                $.ajax({
                    url: portfolio_ajax_loading_data.url,
                    type: 'POST',
                    data: 'action=portfolio_popup&post_id=' + item_id,
                    success: function(html) {
                        $(item.src + ' .content').html(html);
                    }
                });
            },
            open: function() {}
        }
    });
}
)(jQuery);
(function($) {
    "use strict";
    var blog_count = 2;
    var blog_total = ajax_blog_infinite_scroll_data.max_num;
    var blog_flag = 1;
    var blog = $('.blog-grid .grid-items');
    $('.blog-grid .load-more').on('click', function() {
        if ($('.active .blog-grid .grid-items').length) {
            blog = $('.active .blog-grid .grid-items');
        }
        if (blog_count > blog_total) {
            $(this).closest('.bts').hide();
        } else {
            if (blog_flag == 1) {
                blog_loadContent(blog_count);
                if (blog_count + 1 > blog_total) {
                    $(this).closest('.bts').fadeOut(500);
                }
            }
        }
        if (blog_flag == 1) {
            blog_flag = 0;
            blog_count++;
        }
        return false;
    });
    function blog_loadContent(pageNumber) {
        $.ajax({
            url: ajax_blog_infinite_scroll_data.url,
            type: 'POST',
            data: "action=infinite_scroll_el&page_no=" + pageNumber + '&post_type=post' + '&page_id=' + ajax_blog_infinite_scroll_data.page_id + '&order_by=' + ajax_blog_infinite_scroll_data.order_by + '&order=' + ajax_blog_infinite_scroll_data.order + '&per_page=' + ajax_blog_infinite_scroll_data.per_page + '&source=' + ajax_blog_infinite_scroll_data.source + '&temp=' + ajax_blog_infinite_scroll_data.temp + '&cat_ids=' + ajax_blog_infinite_scroll_data.cat_ids,
            success: function(html) {
                var $html = $(html);
                var $container = blog;
                $container.find('> .clear').remove();
                $container.append($html);
                $container.append('<div class="clear"></div>');
                $html.imagesLoaded(function() {
                    $container.append($html);
                    $container.isotope('appended', $html);
                    $container.isotope('layout');
                });
                blog_flag = 1;
            }
        });
        return false;
    }
}
)(jQuery);
/*! elementor - v3.12.2 - 23-04-2023 */
(()=>{
    "use strict";
    var e, r, _, t, a, i = {}, n = {};
    function __webpack_require__(e) {
        var r = n[e];
        if (void 0 !== r)
            return r.exports;
        var _ = n[e] = {
            exports: {}
        };
        return i[e](_, _.exports, __webpack_require__),
        _.exports
    }
    __webpack_require__.m = i,
    e = [],
    __webpack_require__.O = (r,_,t,a)=>{
        if (!_) {
            var i = 1 / 0;
            for (u = 0; u < e.length; u++) {
                for (var [_,t,a] = e[u], n = !0, o = 0; o < _.length; o++)
                    (!1 & a || i >= a) && Object.keys(__webpack_require__.O).every((e=>__webpack_require__.O[e](_[o]))) ? _.splice(o--, 1) : (n = !1,
                    a < i && (i = a));
                if (n) {
                    e.splice(u--, 1);
                    var c = t();
                    void 0 !== c && (r = c)
                }
            }
            return r
        }
        a = a || 0;
        for (var u = e.length; u > 0 && e[u - 1][2] > a; u--)
            e[u] = e[u - 1];
        e[u] = [_, t, a]
    }
    ,
    _ = Object.getPrototypeOf ? e=>Object.getPrototypeOf(e) : e=>e.__proto__,
    __webpack_require__.t = function(e, t) {
        if (1 & t && (e = this(e)),
        8 & t)
            return e;
        if ("object" == typeof e && e) {
            if (4 & t && e.__esModule)
                return e;
            if (16 & t && "function" == typeof e.then)
                return e
        }
        var a = Object.create(null);
        __webpack_require__.r(a);
        var i = {};
        r = r || [null, _({}), _([]), _(_)];
        for (var n = 2 & t && e; "object" == typeof n && !~r.indexOf(n); n = _(n))
            Object.getOwnPropertyNames(n).forEach((r=>i[r] = ()=>e[r]));
        return i.default = ()=>e,
        __webpack_require__.d(a, i),
        a
    }
    ,
    __webpack_require__.d = (e,r)=>{
        for (var _ in r)
            __webpack_require__.o(r, _) && !__webpack_require__.o(e, _) && Object.defineProperty(e, _, {
                enumerable: !0,
                get: r[_]
            })
    }
    ,
    __webpack_require__.f = {},
    __webpack_require__.e = e=>Promise.all(Object.keys(__webpack_require__.f).reduce(((r,_)=>(__webpack_require__.f[_](e, r),
    r)), [])),
    __webpack_require__.u = e=>723 === e ? "lightbox.10bc81bc33e5bd8f8073.bundle.min.js" : 48 === e ? "text-path.b50b3e74488a4e302613.bundle.min.js" : 209 === e ? "accordion.8799675460c73eb48972.bundle.min.js" : 745 === e ? "alert.cbc2a0fee74ee3ed0419.bundle.min.js" : 120 === e ? "counter.02cef29c589e742d4c8c.bundle.min.js" : 192 === e ? "progress.ca55d33bb06cee4e6f02.bundle.min.js" : 520 === e ? "tabs.c2af5be7f9cb3cdcf3d5.bundle.min.js" : 181 === e ? "toggle.31881477c45ff5cf9d4d.bundle.min.js" : 791 === e ? "video.d86bfd0676264945e968.bundle.min.js" : 268 === e ? "image-carousel.624de4dfcf054f3ddaa7.bundle.min.js" : 357 === e ? "text-editor.2c35aafbe5bf0e127950.bundle.min.js" : 52 === e ? "wp-audio.75f0ced143febb8cd31a.bundle.min.js" : 413 === e ? "container.0fe1d3abe4a4fd76f033.bundle.min.js" : void 0,
    __webpack_require__.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    __webpack_require__.o = (e,r)=>Object.prototype.hasOwnProperty.call(e, r),
    t = {},
    a = "elementor:",
    __webpack_require__.l = (e,r,_,i)=>{
        if (t[e])
            t[e].push(r);
        else {
            var n, o;
            if (void 0 !== _)
                for (var c = document.getElementsByTagName("script"), u = 0; u < c.length; u++) {
                    var b = c[u];
                    if (b.getAttribute("src") == e || b.getAttribute("data-webpack") == a + _) {
                        n = b;
                        break
                    }
                }
            n || (o = !0,
            (n = document.createElement("script")).charset = "utf-8",
            n.timeout = 120,
            __webpack_require__.nc && n.setAttribute("nonce", __webpack_require__.nc),
            n.setAttribute("data-webpack", a + _),
            n.src = e),
            t[e] = [r];
            var onScriptComplete = (r,_)=>{
                n.onerror = n.onload = null,
                clearTimeout(p);
                var a = t[e];
                if (delete t[e],
                n.parentNode && n.parentNode.removeChild(n),
                a && a.forEach((e=>e(_))),
                r)
                    return r(_)
            }
              , p = setTimeout(onScriptComplete.bind(null, void 0, {
                type: "timeout",
                target: n
            }), 12e4);
            n.onerror = onScriptComplete.bind(null, n.onerror),
            n.onload = onScriptComplete.bind(null, n.onload),
            o && document.head.appendChild(n)
        }
    }
    ,
    __webpack_require__.r = e=>{
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    (()=>{
        var e;
        __webpack_require__.g.importScripts && (e = __webpack_require__.g.location + "");
        var r = __webpack_require__.g.document;
        if (!e && r && (r.currentScript && (e = r.currentScript.src),
        !e)) {
            var _ = r.getElementsByTagName("script");
            _.length && (e = _[_.length - 1].src)
        }
        if (!e)
            throw new Error("Automatic publicPath is not supported in this browser");
        e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"),
        __webpack_require__.p = e
    }
    )(),
    (()=>{
        var e = {
            162: 0
        };
        __webpack_require__.f.j = (r,_)=>{
            var t = __webpack_require__.o(e, r) ? e[r] : void 0;
            if (0 !== t)
                if (t)
                    _.push(t[2]);
                else if (162 != r) {
                    var a = new Promise(((_,a)=>t = e[r] = [_, a]));
                    _.push(t[2] = a);
                    var i = __webpack_require__.p + __webpack_require__.u(r)
                      , n = new Error;
                    __webpack_require__.l(i, (_=>{
                        if (__webpack_require__.o(e, r) && (0 !== (t = e[r]) && (e[r] = void 0),
                        t)) {
                            var a = _ && ("load" === _.type ? "missing" : _.type)
                              , i = _ && _.target && _.target.src;
                            n.message = "Loading chunk " + r + " failed.\n(" + a + ": " + i + ")",
                            n.name = "ChunkLoadError",
                            n.type = a,
                            n.request = i,
                            t[1](n)
                        }
                    }
                    ), "chunk-" + r, r)
                } else
                    e[r] = 0
        }
        ,
        __webpack_require__.O.j = r=>0 === e[r];
        var webpackJsonpCallback = (r,_)=>{
            var t, a, [i,n,o] = _, c = 0;
            if (i.some((r=>0 !== e[r]))) {
                for (t in n)
                    __webpack_require__.o(n, t) && (__webpack_require__.m[t] = n[t]);
                if (o)
                    var u = o(__webpack_require__)
            }
            for (r && r(_); c < i.length; c++)
                a = i[c],
                __webpack_require__.o(e, a) && e[a] && e[a][0](),
                e[a] = 0;
            return __webpack_require__.O(u)
        }
          , r = self.webpackChunkelementor = self.webpackChunkelementor || [];
        r.forEach(webpackJsonpCallback.bind(null, 0)),
        r.push = webpackJsonpCallback.bind(null, r.push.bind(r))
    }
    )()
}
)();
/*! elementor - v3.12.2 - 23-04-2023 */
(self.webpackChunkelementor = self.webpackChunkelementor || []).push([[354], {
    381: (e,t)=>{
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        t.default = (e,t)=>{
            t = Array.isArray(t) ? t : [t];
            for (const n of t)
                if (e.constructor.name === n.prototype[Symbol.toStringTag])
                    return !0;
            return !1
        }
    }
    ,
    8135: (e,t)=>{
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class _default extends elementorModules.ViewModule {
            getDefaultSettings() {
                return {
                    selectors: {
                        elements: ".elementor-element",
                        nestedDocumentElements: ".elementor .elementor-element"
                    },
                    classes: {
                        editMode: "elementor-edit-mode"
                    }
                }
            }
            getDefaultElements() {
                const e = this.getSettings("selectors");
                return {
                    $elements: this.$element.find(e.elements).not(this.$element.find(e.nestedDocumentElements))
                }
            }
            getDocumentSettings(e) {
                let t;
                if (this.isEdit) {
                    t = {};
                    const e = elementor.settings.page.model;
                    jQuery.each(e.getActiveControls(), (n=>{
                        t[n] = e.attributes[n]
                    }
                    ))
                } else
                    t = this.$element.data("elementor-settings") || {};
                return this.getItems(t, e)
            }
            runElementsHandlers() {
                this.elements.$elements.each(((e,t)=>setTimeout((()=>elementorFrontend.elementsHandler.runReadyTrigger(t)))))
            }
            onInit() {
                this.$element = this.getSettings("$element"),
                super.onInit(),
                this.isEdit = this.$element.hasClass(this.getSettings("classes.editMode")),
                this.isEdit ? elementor.on("document:loaded", (()=>{
                    elementor.settings.page.model.on("change", this.onSettingsChange.bind(this))
                }
                )) : this.runElementsHandlers()
            }
            onSettingsChange() {}
        }
        t.default = _default
    }
    ,
    2821: (e,t,n)=>{
        "use strict";
        var r = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = r(n(3090));
        class SwiperHandlerBase extends i.default {
            getInitialSlide() {
                const e = this.getEditSettings();
                return e.activeItemIndex ? e.activeItemIndex - 1 : 0
            }
            getSlidesCount() {
                return this.elements.$slides.length
            }
            togglePauseOnHover(e) {
                e ? this.elements.$swiperContainer.on({
                    mouseenter: ()=>{
                        this.swiper.autoplay.stop()
                    }
                    ,
                    mouseleave: ()=>{
                        this.swiper.autoplay.start()
                    }
                }) : this.elements.$swiperContainer.off("mouseenter mouseleave")
            }
            handleKenBurns() {
                const e = this.getSettings();
                this.$activeImageBg && this.$activeImageBg.removeClass(e.classes.kenBurnsActive),
                this.activeItemIndex = this.swiper ? this.swiper.activeIndex : this.getInitialSlide(),
                this.swiper ? this.$activeImageBg = jQuery(this.swiper.slides[this.activeItemIndex]).children("." + e.classes.slideBackground) : this.$activeImageBg = jQuery(this.elements.$slides[0]).children("." + e.classes.slideBackground),
                this.$activeImageBg.addClass(e.classes.kenBurnsActive)
            }
        }
        t.default = SwiperHandlerBase
    }
    ,
    3090: e=>{
        "use strict";
        e.exports = elementorModules.ViewModule.extend({
            $element: null,
            editorListeners: null,
            onElementChange: null,
            onEditSettingsChange: null,
            onPageSettingsChange: null,
            isEdit: null,
            __construct(e) {
                this.isActive(e) && (this.$element = e.$element,
                this.isEdit = this.$element.hasClass("elementor-element-edit-mode"),
                this.isEdit && this.addEditorListeners())
            },
            isActive: ()=>!0,
            isElementInTheCurrentDocument() {
                return !!elementorFrontend.isEditMode() && elementor.documents.currentDocument.id.toString() === this.$element[0].closest(".elementor").dataset.elementorId
            },
            findElement(e) {
                var t = this.$element;
                return t.find(e).filter((function() {
                    return jQuery(this).parent().closest(".elementor-element").is(t)
                }
                ))
            },
            getUniqueHandlerID(e, t) {
                return e || (e = this.getModelCID()),
                t || (t = this.$element),
                e + t.attr("data-element_type") + this.getConstructorID()
            },
            initEditorListeners() {
                var e = this;
                if (e.editorListeners = [{
                    event: "element:destroy",
                    to: elementor.channels.data,
                    callback(t) {
                        t.cid === e.getModelCID() && e.onDestroy()
                    }
                }],
                e.onElementChange) {
                    const t = e.getWidgetType() || e.getElementType();
                    let n = "change";
                    "global" !== t && (n += ":" + t),
                    e.editorListeners.push({
                        event: n,
                        to: elementor.channels.editor,
                        callback(t, n) {
                            e.getUniqueHandlerID(n.model.cid, n.$el) === e.getUniqueHandlerID() && e.onElementChange(t.model.get("name"), t, n)
                        }
                    })
                }
                e.onEditSettingsChange && e.editorListeners.push({
                    event: "change:editSettings",
                    to: elementor.channels.editor,
                    callback(t, n) {
                        if (n.model.cid !== e.getModelCID())
                            return;
                        const r = Object.keys(t.changed)[0];
                        e.onEditSettingsChange(r, t.changed[r])
                    }
                }),
                ["page"].forEach((function(t) {
                    var n = "on" + t[0].toUpperCase() + t.slice(1) + "SettingsChange";
                    e[n] && e.editorListeners.push({
                        event: "change",
                        to: elementor.settings[t].model,
                        callback(t) {
                            e[n](t.changed)
                        }
                    })
                }
                ))
            },
            getEditorListeners() {
                return this.editorListeners || this.initEditorListeners(),
                this.editorListeners
            },
            addEditorListeners() {
                var e = this.getUniqueHandlerID();
                this.getEditorListeners().forEach((function(t) {
                    elementorFrontend.addListenerOnce(e, t.event, t.callback, t.to)
                }
                ))
            },
            removeEditorListeners() {
                var e = this.getUniqueHandlerID();
                this.getEditorListeners().forEach((function(t) {
                    elementorFrontend.removeListeners(e, t.event, null, t.to)
                }
                ))
            },
            getElementType() {
                return this.$element.data("element_type")
            },
            getWidgetType() {
                const e = this.$element.data("widget_type");
                if (e)
                    return e.split(".")[0]
            },
            getID() {
                return this.$element.data("id")
            },
            getModelCID() {
                return this.$element.data("model-cid")
            },
            getElementSettings(e) {
                let t = {};
                const n = this.getModelCID();
                if (this.isEdit && n) {
                    const e = elementorFrontend.config.elements.data[n]
                      , r = e.attributes;
                    let i = r.widgetType || r.elType;
                    r.isInner && (i = "inner-" + i);
                    let o = elementorFrontend.config.elements.keys[i];
                    o || (o = elementorFrontend.config.elements.keys[i] = [],
                    jQuery.each(e.controls, ((e,t)=>{
                        t.frontend_available && o.push(e)
                    }
                    ))),
                    jQuery.each(e.getActiveControls(), (function(e) {
                        if (-1 !== o.indexOf(e)) {
                            let n = r[e];
                            n.toJSON && (n = n.toJSON()),
                            t[e] = n
                        }
                    }
                    ))
                } else
                    t = this.$element.data("settings") || {};
                return this.getItems(t, e)
            },
            getEditSettings(e) {
                var t = {};
                return this.isEdit && (t = elementorFrontend.config.elements.editSettings[this.getModelCID()].attributes),
                this.getItems(t, e)
            },
            getCurrentDeviceSetting(e) {
                return elementorFrontend.getCurrentDeviceSetting(this.getElementSettings(), e)
            },
            onInit() {
                this.isActive(this.getSettings()) && elementorModules.ViewModule.prototype.onInit.apply(this, arguments)
            },
            onDestroy() {
                this.isEdit && this.removeEditorListeners(),
                this.unbindEvents && this.unbindEvents()
            }
        })
    }
    ,
    2263: (e,t,n)=>{
        "use strict";
        var r = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = r(n(3090));
        class StretchedElement extends i.default {
            getStretchedClass() {
                return "e-stretched"
            }
            getStretchSettingName() {
                return "stretch_element"
            }
            getStretchActiveValue() {
                return "yes"
            }
            bindEvents() {
                const e = this.getUniqueHandlerID();
                elementorFrontend.addListenerOnce(e, "resize", this.stretch),
                elementorFrontend.addListenerOnce(e, "sticky:stick", this.stretch, this.$element),
                elementorFrontend.addListenerOnce(e, "sticky:unstick", this.stretch, this.$element),
                elementorFrontend.isEditMode() && (this.onKitChangeStretchContainerChange = this.onKitChangeStretchContainerChange.bind(this),
                elementor.channels.editor.on("kit:change:stretchContainer", this.onKitChangeStretchContainerChange))
            }
            unbindEvents() {
                elementorFrontend.removeListeners(this.getUniqueHandlerID(), "resize", this.stretch),
                elementorFrontend.isEditMode() && elementor.channels.editor.off("kit:change:stretchContainer", this.onKitChangeStretchContainerChange)
            }
            isActive(e) {
                return elementorFrontend.isEditMode() || e.$element.hasClass(this.getStretchedClass())
            }
            getStretchElementForConfig() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                return e ? this.$element.find(e) : this.$element
            }
            getStretchElementConfig() {
                return {
                    element: this.getStretchElementForConfig(),
                    selectors: {
                        container: this.getStretchContainer()
                    },
                    considerScrollbar: elementorFrontend.isEditMode() && elementorFrontend.config.is_rtl
                }
            }
            initStretch() {
                this.stretch = this.stretch.bind(this),
                this.stretchElement = new elementorModules.frontend.tools.StretchElement(this.getStretchElementConfig())
            }
            getStretchContainer() {
                return elementorFrontend.getKitSettings("stretched_section_container") || window
            }
            isStretchSettingEnabled() {
                return this.getElementSettings(this.getStretchSettingName()) === this.getStretchActiveValue()
            }
            stretch() {
                this.isStretchSettingEnabled() && this.stretchElement.stretch()
            }
            onInit() {
                this.isActive(this.getSettings()) && (this.initStretch(),
                super.onInit(...arguments),
                this.stretch())
            }
            onElementChange(e) {
                this.getStretchSettingName() === e && (this.isStretchSettingEnabled() ? this.stretch() : this.stretchElement.reset())
            }
            onKitChangeStretchContainerChange() {
                this.stretchElement.setSettings("selectors.container", this.getStretchContainer()),
                this.stretch()
            }
        }
        t.default = StretchedElement
    }
    ,
    6412: (e,t,n)=>{
        "use strict";
        var r = n(3203)
          , i = r(n(5955))
          , o = r(n(8135))
          , s = r(n(5658))
          , a = r(n(2263))
          , c = r(n(3090))
          , l = r(n(2821))
          , u = r(n(7323));
        i.default.frontend = {
            Document: o.default,
            tools: {
                StretchElement: s.default
            },
            handlers: {
                Base: c.default,
                StretchedElement: a.default,
                SwiperBase: l.default,
                NestedTabs: u.default
            }
        }
    }
    ,
    5658: e=>{
        "use strict";
        e.exports = elementorModules.ViewModule.extend({
            getDefaultSettings: ()=>({
                element: null,
                direction: elementorFrontend.config.is_rtl ? "right" : "left",
                selectors: {
                    container: window
                },
                considerScrollbar: !1
            }),
            getDefaultElements() {
                return {
                    $element: jQuery(this.getSettings("element"))
                }
            },
            stretch() {
                const e = this.getSettings();
                let t;
                try {
                    t = jQuery(e.selectors.container)
                } catch (e) {}
                t && t.length || (t = jQuery(this.getDefaultSettings().selectors.container)),
                this.reset();
                var n = this.elements.$element
                  , r = t.innerWidth()
                  , i = n.offset().left
                  , o = "fixed" === n.css("position")
                  , s = o ? 0 : i
                  , a = window === t[0];
                if (!a) {
                    var c = t.offset().left;
                    o && (s = c),
                    i > c && (s = i - c)
                }
                if (e.considerScrollbar && a) {
                    s -= window.innerWidth - r
                }
                o || (elementorFrontend.config.is_rtl && (s = r - (n.outerWidth() + s)),
                s = -s),
                e.margin && (s += e.margin);
                var l = {};
                let u = r;
                e.margin && (u -= 2 * e.margin),
                l.width = u + "px",
                l[e.direction] = s + "px",
                n.css(l)
            },
            reset() {
                var e = {
                    width: ""
                };
                e[this.getSettings("direction")] = "",
                this.elements.$element.css(e)
            }
        })
    }
    ,
    2618: (e,t,n)=>{
        "use strict";
        var r = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0,
        n(740);
        var i = r(n(7597))
          , o = r(n(381));
        class ArgsObject extends i.default {
            static getInstanceType() {
                return "ArgsObject"
            }
            constructor(e) {
                super(),
                this.args = e
            }
            requireArgument(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.args;
                if (!Object.prototype.hasOwnProperty.call(t, e))
                    throw Error(`${e} is required.`)
            }
            requireArgumentType(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.args;
                if (this.requireArgument(e, n),
                typeof n[e] !== t)
                    throw Error(`${e} invalid type: ${t}.`)
            }
            requireArgumentInstance(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.args;
                if (this.requireArgument(e, n),
                !(n[e]instanceof t || (0,
                o.default)(n[e], t)))
                    throw Error(`${e} invalid instance.`)
            }
            requireArgumentConstructor(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.args;
                if (this.requireArgument(e, n),
                n[e].constructor.toString() !== t.prototype.constructor.toString())
                    throw Error(`${e} invalid constructor type.`)
            }
        }
        t.default = ArgsObject
    }
    ,
    869: (e,t,n)=>{
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = t.ForceMethodImplementation = void 0,
        n(740);
        class ForceMethodImplementation extends Error {
            constructor() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                super(`${e.isStatic ? "static " : ""}${e.fullName}() should be implemented, please provide '${e.functionName || e.fullName}' functionality.`, t),
                Object.keys(t).length && console.error(t),
                Error.captureStackTrace(this, ForceMethodImplementation)
            }
        }
        t.ForceMethodImplementation = ForceMethodImplementation;
        t.default = e=>{
            const t = Error().stack.split("\n")[2].trim()
              , n = t.startsWith("at new") ? "constructor" : t.split(" ")[1]
              , r = {};
            if (r.functionName = n,
            r.fullName = n,
            r.functionName.includes(".")) {
                const e = r.functionName.split(".");
                r.className = e[0],
                r.functionName = e[1]
            } else
                r.isStatic = !0;
            throw new ForceMethodImplementation(r,e)
        }
    }
    ,
    7597: (e,t)=>{
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class InstanceType {
            static[Symbol.hasInstance](e) {
                let t = super[Symbol.hasInstance](e);
                if (e && !e.constructor.getInstanceType)
                    return t;
                if (e && (e.instanceTypes || (e.instanceTypes = []),
                t || this.getInstanceType() === e.constructor.getInstanceType() && (t = !0),
                t)) {
                    const t = this.getInstanceType === InstanceType.getInstanceType ? "BaseInstanceType" : this.getInstanceType();
                    -1 === e.instanceTypes.indexOf(t) && e.instanceTypes.push(t)
                }
                return !t && e && (t = e.instanceTypes && Array.isArray(e.instanceTypes) && -1 !== e.instanceTypes.indexOf(this.getInstanceType())),
                t
            }
            static getInstanceType() {
                elementorModules.ForceMethodImplementation()
            }
            constructor() {
                let e = new.target;
                const t = [];
                for (; e.__proto__ && e.__proto__.name; )
                    t.push(e.__proto__),
                    e = e.__proto__;
                t.reverse().forEach((e=>this instanceof e))
            }
        }
        t.default = InstanceType
    }
    ,
    1192: (e,t,n)=>{
        "use strict";
        n(740);
        const Module = function() {
            const e = jQuery
              , t = arguments
              , n = this
              , r = {};
            let i;
            this.getItems = function(e, t) {
                if (t) {
                    const n = t.split(".")
                      , r = n.splice(0, 1);
                    if (!n.length)
                        return e[r];
                    if (!e[r])
                        return;
                    return this.getItems(e[r], n.join("."))
                }
                return e
            }
            ,
            this.getSettings = function(e) {
                return this.getItems(i, e)
            }
            ,
            this.setSettings = function(t, r, o) {
                if (o || (o = i),
                "object" == typeof t)
                    return e.extend(o, t),
                    n;
                const s = t.split(".")
                  , a = s.splice(0, 1);
                return s.length ? (o[a] || (o[a] = {}),
                n.setSettings(s.join("."), r, o[a])) : (o[a] = r,
                n)
            }
            ,
            this.getErrorMessage = function(e, t) {
                let n;
                if ("forceMethodImplementation" === e)
                    n = `The method '${t}' must to be implemented in the inheritor child.`;
                else
                    n = "An error occurs";
                return n
            }
            ,
            this.forceMethodImplementation = function(e) {
                throw new Error(this.getErrorMessage("forceMethodImplementation", e))
            }
            ,
            this.on = function(t, i) {
                if ("object" == typeof t)
                    return e.each(t, (function(e) {
                        n.on(e, this)
                    }
                    )),
                    n;
                return t.split(" ").forEach((function(e) {
                    r[e] || (r[e] = []),
                    r[e].push(i)
                }
                )),
                n
            }
            ,
            this.off = function(e, t) {
                if (!r[e])
                    return n;
                if (!t)
                    return delete r[e],
                    n;
                const i = r[e].indexOf(t);
                return -1 !== i && (delete r[e][i],
                r[e] = r[e].filter((e=>e))),
                n
            }
            ,
            this.trigger = function(t) {
                const i = "on" + t[0].toUpperCase() + t.slice(1)
                  , o = Array.prototype.slice.call(arguments, 1);
                n[i] && n[i].apply(n, o);
                const s = r[t];
                return s ? (e.each(s, (function(e, t) {
                    t.apply(n, o)
                }
                )),
                n) : n
            }
            ,
            n.__construct.apply(n, t),
            e.each(n, (function(e) {
                const t = n[e];
                "function" == typeof t && (n[e] = function() {
                    return t.apply(n, arguments)
                }
                )
            }
            )),
            function() {
                i = n.getDefaultSettings();
                const r = t[0];
                r && e.extend(!0, i, r)
            }(),
            n.trigger("init")
        };
        Module.prototype.__construct = function() {}
        ,
        Module.prototype.getDefaultSettings = function() {
            return {}
        }
        ,
        Module.prototype.getConstructorID = function() {
            return this.constructor.name
        }
        ,
        Module.extend = function(e) {
            const t = jQuery
              , n = this
              , child = function() {
                return n.apply(this, arguments)
            };
            return t.extend(child, n),
            (child.prototype = Object.create(t.extend({}, n.prototype, e))).constructor = child,
            child.__super__ = n.prototype,
            child
        }
        ,
        e.exports = Module
    }
    ,
    6516: (e,t,n)=>{
        "use strict";
        var r = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = r(n(2640)).default.extend({
            getDefaultSettings: ()=>({
                container: null,
                items: null,
                columnsCount: 3,
                verticalSpaceBetween: 30
            }),
            getDefaultElements() {
                return {
                    $container: jQuery(this.getSettings("container")),
                    $items: jQuery(this.getSettings("items"))
                }
            },
            run() {
                var e = []
                  , t = this.elements.$container.position().top
                  , n = this.getSettings()
                  , r = n.columnsCount;
                t += parseInt(this.elements.$container.css("margin-top"), 10),
                this.elements.$items.each((function(i) {
                    var o = Math.floor(i / r)
                      , s = jQuery(this)
                      , a = s[0].getBoundingClientRect().height + n.verticalSpaceBetween;
                    if (o) {
                        var c = s.position()
                          , l = i % r
                          , u = c.top - t - e[l];
                        u -= parseInt(s.css("margin-top"), 10),
                        u *= -1,
                        s.css("margin-top", u + "px"),
                        e[l] += a
                    } else
                        e.push(a)
                }
                ))
            }
        });
        t.default = i
    }
    ,
    400: (e,t)=>{
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        t.default = class Scroll {
            static scrollObserver(e) {
                let t = 0;
                const n = {
                    root: e.root || null,
                    rootMargin: e.offset || "0px",
                    threshold: function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        const t = [];
                        if (e > 0 && e <= 100) {
                            const n = 100 / e;
                            for (let e = 0; e <= 100; e += n)
                                t.push(e / 100)
                        } else
                            t.push(0);
                        return t
                    }(e.sensitivity)
                };
                return new IntersectionObserver((function handleIntersect(n) {
                    const r = n[0].boundingClientRect.y
                      , i = n[0].isIntersecting
                      , o = r < t ? "down" : "up"
                      , s = Math.abs(parseFloat((100 * n[0].intersectionRatio).toFixed(2)));
                    e.callback({
                        sensitivity: e.sensitivity,
                        isInViewport: i,
                        scrollPercentage: s,
                        intersectionScrollDirection: o
                    }),
                    t = r
                }
                ),n)
            }
            static getElementViewportPercentage(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const n = e[0].getBoundingClientRect()
                  , r = t.start || 0
                  , i = t.end || 0
                  , o = window.innerHeight * r / 100
                  , s = window.innerHeight * i / 100
                  , a = n.top - window.innerHeight
                  , c = 0 - a + o
                  , l = n.top + o + e.height() - a + s
                  , u = Math.max(0, Math.min(c / l, 1));
                return parseFloat((100 * u).toFixed(2))
            }
            static getPageScrollPercentage() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                const n = e.start || 0
                  , r = e.end || 0
                  , i = t || document.documentElement.scrollHeight - document.documentElement.clientHeight
                  , o = i * n / 100
                  , s = i + o + i * r / 100;
                return (document.documentElement.scrollTop + document.body.scrollTop + o) / s * 100
            }
        }
    }
    ,
    2640: (e,t,n)=>{
        "use strict";
        var r = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = r(n(1192)).default.extend({
            elements: null,
            getDefaultElements: ()=>({}),
            bindEvents() {},
            onInit() {
                this.initElements(),
                this.bindEvents()
            },
            initElements() {
                this.elements = this.getDefaultElements()
            }
        });
        t.default = i
    }
    ,
    5955: (e,t,n)=>{
        "use strict";
        var r = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = r(n(1192))
          , o = r(n(2640))
          , s = r(n(2618))
          , a = r(n(6516))
          , c = r(n(400))
          , l = r(n(869))
          , u = window.elementorModules = {
            Module: i.default,
            ViewModule: o.default,
            ArgsObject: s.default,
            ForceMethodImplementation: l.default,
            utils: {
                Masonry: a.default,
                Scroll: c.default
            }
        };
        t.default = u
    }
    ,
    7323: (e,t,n)=>{
        "use strict";
        var r = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = r(n(3090));
        class NestedTabs extends i.default {
            getTabTitleFilterSelector(e) {
                return `[data-tab="${e}"]`
            }
            getTabContentFilterSelector(e) {
                return `*:nth-child(${2 * e})`
            }
            getTabIndex(e) {
                return e.getAttribute("data-tab")
            }
            getDefaultSettings() {
                return {
                    selectors: {
                        tablist: '[role="tablist"]',
                        tabTitle: ".e-n-tab-title",
                        tabContent: ".e-con",
                        headingContainer: ".e-n-tabs-heading",
                        activeTabContentContainers: ".e-con.e-active",
                        mobileTabTitle: ".e-collapse"
                    },
                    classes: {
                        active: "e-active"
                    },
                    showTabFn: "show",
                    hideTabFn: "hide",
                    toggleSelf: !1,
                    hidePrevious: !0,
                    autoExpand: !0,
                    keyDirection: {
                        ArrowLeft: elementorFrontendConfig.is_rtl ? 1 : -1,
                        ArrowUp: -1,
                        ArrowRight: elementorFrontendConfig.is_rtl ? -1 : 1,
                        ArrowDown: 1
                    }
                }
            }
            getDefaultElements() {
                const e = this.getSettings("selectors");
                return {
                    $tabTitles: this.findElement(e.tabTitle),
                    $tabContents: this.findElement(e.tabContent),
                    $mobileTabTitles: this.findElement(e.mobileTabTitle),
                    $headingContainer: this.findElement(e.headingContainer)
                }
            }
            activateDefaultTab() {
                const e = this.getSettings()
                  , t = this.getEditSettings("activeItemIndex") || 1
                  , n = {
                    showTabFn: e.showTabFn,
                    hideTabFn: e.hideTabFn
                };
                this.setSettings({
                    showTabFn: "show",
                    hideTabFn: "hide"
                }),
                this.changeActiveTab(t),
                this.setSettings(n)
            }
            handleKeyboardNavigation(e) {
                const t = e.currentTarget
                  , n = jQuery(t.closest(this.getSettings("selectors").tablist))
                  , r = n.find(this.getSettings("selectors").tabTitle)
                  , i = "vertical" === n.attr("aria-orientation");
                switch (e.key) {
                case "ArrowLeft":
                case "ArrowRight":
                    if (i)
                        return;
                    break;
                case "ArrowUp":
                case "ArrowDown":
                    if (!i)
                        return;
                    e.preventDefault();
                    break;
                case "Home":
                    return e.preventDefault(),
                    void r.first().trigger("focus");
                case "End":
                    return e.preventDefault(),
                    void r.last().trigger("focus");
                default:
                    return
                }
                const o = t.getAttribute("data-tab") - 1
                  , s = this.getSettings("keyDirection")[e.key]
                  , a = r[o + s];
                a ? a.focus() : -1 === o + s ? r.last().trigger("focus") : r.first().trigger("focus")
            }
            deactivateActiveTab(e) {
                const t = this.getSettings()
                  , n = t.classes.active
                  , r = e ? this.getTabTitleFilterSelector(e) : "." + n
                  , i = e ? this.getTabContentFilterSelector(e) : "." + n
                  , o = this.elements.$tabTitles.filter(r)
                  , s = this.elements.$tabContents.filter(i);
                o.add(s).removeClass(n),
                o.attr({
                    tabindex: "-1",
                    "aria-selected": "false",
                    "aria-expanded": "false"
                }),
                s[t.hideTabFn](0, (()=>this.onHideTabContent(s))),
                s.attr("hidden", "hidden")
            }
            onHideTabContent(e) {}
            activateTab(e) {
                const t = this.getSettings()
                  , n = t.classes.active
                  , r = "show" === t.showTabFn ? 0 : 400;
                let i = this.elements.$tabTitles.filter(this.getTabTitleFilterSelector(e))
                  , o = this.elements.$tabContents.filter(this.getTabContentFilterSelector(e));
                if (!i.length) {
                    const t = Math.max(e - 1, 1);
                    i = this.elements.$tabTitles.filter(this.getTabTitleFilterSelector(t)),
                    o = this.elements.$tabContents.filter(this.getTabContentFilterSelector(t))
                }
                i.add(o).addClass(n),
                i.attr({
                    tabindex: "0",
                    "aria-selected": "true",
                    "aria-expanded": "true"
                }),
                o[t.showTabFn](r, (()=>this.onShowTabContent(o))),
                o.removeAttr("hidden")
            }
            onShowTabContent(e) {
                elementorFrontend.elements.$window.trigger("elementor-pro/motion-fx/recalc"),
                elementorFrontend.elements.$window.trigger("elementor/nested-tabs/activate", e)
            }
            isActiveTab(e) {
                return this.elements.$tabTitles.filter('[data-tab="' + e + '"]').hasClass(this.getSettings("classes.active"))
            }
            onTabClick(e) {
                e.preventDefault(),
                this.changeActiveTab(e.currentTarget.getAttribute("data-tab"), !0)
            }
            onTabKeyDown(e) {
                this.preventDefaultLinkBehaviourForTabTitle(e),
                this.onKeydownAvoidUndesiredPageScrolling(e)
            }
            onTabKeyUp(e) {
                switch (e.code) {
                case "ArrowLeft":
                case "ArrowRight":
                    this.handleKeyboardNavigation(e);
                    break;
                case "Enter":
                case "Space":
                    e.preventDefault(),
                    this.changeActiveTab(e.currentTarget.getAttribute("data-tab"), !0)
                }
            }
            getTabEvents() {
                return {
                    keydown: this.onTabKeyDown.bind(this),
                    keyup: this.onTabKeyUp.bind(this),
                    click: this.onTabClick.bind(this)
                }
            }
            bindEvents() {
                this.elements.$tabTitles.on(this.getTabEvents()),
                elementorFrontend.elements.$window.on("elementor/nested-tabs/activate", this.reInitSwipers)
            }
            preventDefaultLinkBehaviourForTabTitle(e) {
                jQuery(e.target).is("a") && "Enter" === e.key && e.preventDefault()
            }
            onKeydownAvoidUndesiredPageScrolling(e) {
                ["End", "Home", "ArrowUp", "ArrowDown"].includes(e.key) && this.handleKeyboardNavigation(e)
            }
            reInitSwipers(e, t) {
                const n = t.querySelectorAll(`.${elementorFrontend.config.swiperClass}`);
                for (const e of n) {
                    if (!e.swiper)
                        return;
                    e.swiper.initialized = !1,
                    e.swiper.init()
                }
            }
            onInit() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                this.createMobileTabs(t),
                super.onInit(...t),
                this.getSettings("autoExpand") && this.activateDefaultTab()
            }
            onEditSettingsChange(e, t) {
                "activeItemIndex" === e && this.changeActiveTab(t, !1)
            }
            changeActiveTab(e) {
                if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && this.isEdit && this.isElementInTheCurrentDocument())
                    return window.top.$e.run("document/repeater/select", {
                        container: elementor.getContainer(this.$element.attr("data-id")),
                        index: parseInt(e)
                    });
                const t = this.isActiveTab(e)
                  , n = this.getSettings();
                if (!n.toggleSelf && t || !n.hidePrevious || this.deactivateActiveTab(),
                !n.hidePrevious && t && this.deactivateActiveTab(e),
                !t) {
                    if ("none" === this.elements.$headingContainer.css("display"))
                        return void this.activateMobileTab(e);
                    this.activateTab(e)
                }
            }
            activateMobileTab(e) {
                setTimeout((()=>{
                    this.activateTab(e),
                    this.forceActiveTabToBeInViewport(e)
                }
                ), 10)
            }
            forceActiveTabToBeInViewport(e) {
                if (!elementorFrontend.isEditMode())
                    return;
                const t = this.elements.$mobileTabTitles.filter(this.getTabTitleFilterSelector(e));
                elementor.helpers.isInViewport(t[0]) || t[0].scrollIntoView({
                    block: "center"
                })
            }
            createMobileTabs(e) {
                const t = this.getSettings();
                if (elementorFrontend.isEditMode()) {
                    const n = this.$element
                      , r = this.findElement(".e-collapse").remove();
                    let i = 1;
                    if (this.findElement(".e-con").each((function() {
                        const e = jQuery(this)
                          , r = n.find(`${t.selectors.headingContainer} > *:nth-child(${i})`)
                          , o = `<div class="${t.selectors.tabTitle.replace(".", "")} e-collapse" data-tab="${i}" role="tab">${r.html()}</div>`;
                        e.before(o),
                        ++i
                    }
                    )),
                    r.length)
                        return elementorModules.ViewModule.prototype.onInit.apply(this, e)
                }
            }
            getActiveClass() {
                return this.getSettings().classes.active
            }
            getVisibleTabTitle(e) {
                const t = this.elements.$tabTitles.filter(e);
                return null !== t[0]?.offsetParent ? t[0] : t[1]
            }
            getKeyPressed(e) {
                const t = 9 === e?.which
                  , n = e?.shiftKey;
                return !!t && n ? "ShiftTab" : !!t && !n ? "Tab" : 27 === e?.which ? "Escape" : void 0
            }
            changeFocusFromContentContainerItemBackToTabTitle(e) {
                if (this.hasDropdownLayout())
                    return;
                const t = "ShiftTab" === this.getKeyPressed(e)
                  , n = "Tab" === this.getKeyPressed(e)
                  , r = "Escape" === this.getKeyPressed(e)
                  , i = this.itemInsideContentContainerHasFocus(0)
                  , o = this.itemInsideContentContainerHasFocus("last")
                  , s = `.${this.getActiveClass()}`
                  , a = this.getVisibleTabTitle(s)
                  , c = parseInt(a?.getAttribute("data-tab"))
                  , l = this.getTabTitleFilterSelector(c + 1)
                  , u = this.getVisibleTabTitle(l)
                  , h = n && o && !!u;
                t && i && !!a || r ? (e.preventDefault(),
                a?.focus()) : h && (e.preventDefault(),
                this.setTabindexOfActiveContainerItems("-1"),
                u?.focus())
            }
            changeFocusFromActiveTabTitleToContentContainer(e) {
                const t = "Tab" === this.getKeyPressed(e)
                  , n = this.getFocusableItemsInsideActiveContentContainer()[0]
                  , r = elementorFrontend.elements.window.document.activeElement
                  , i = parseInt(r.getAttribute("data-tab"));
                t && this.tabTitleHasActiveContentContainer(i) && n && (e.preventDefault(),
                n.focus())
            }
            itemInsideContentContainerHasFocus(e) {
                const t = elementorFrontend.elements.window.document.activeElement
                  , n = this.getFocusableItemsInsideActiveContentContainer();
                return n["last" === e ? n.length - 1 : e] === t
            }
            getFocusableItemsInsideActiveContentContainer() {
                const e = this.getSettings();
                return this.$element.find(e.selectors.activeTabContentContainers).find(":focusable")
            }
            setTabindexOfActiveContainerItems(e) {
                this.getFocusableItemsInsideActiveContentContainer().attr("tabindex", e)
            }
            setActiveCurrentContainerItemsToFocusable() {
                const e = elementorFrontend.elements.window.document.activeElement
                  , t = parseInt(e?.getAttribute("data-tab"));
                this.tabTitleHasActiveContentContainer(t) && this.setTabindexOfActiveContainerItems("0")
            }
            tabTitleHasActiveContentContainer(e) {
                const t = this.elements.$tabTitles.filter(this.getTabTitleFilterSelector(e))
                  , n = t[0]?.classList.contains(`${this.getActiveClass()}`);
                return !(!this.elements.$tabContents.filter(this.getTabContentFilterSelector(e)) || !n)
            }
        }
        t.default = NestedTabs
    }
    ,
    5089: (e,t,n)=>{
        var r = n(930)
          , i = n(9268)
          , o = TypeError;
        e.exports = function(e) {
            if (r(e))
                return e;
            throw o(i(e) + " is not a function")
        }
    }
    ,
    1378: (e,t,n)=>{
        var r = n(930)
          , i = String
          , o = TypeError;
        e.exports = function(e) {
            if ("object" == typeof e || r(e))
                return e;
            throw o("Can't set " + i(e) + " as a prototype")
        }
    }
    ,
    6112: (e,t,n)=>{
        var r = n(8759)
          , i = String
          , o = TypeError;
        e.exports = function(e) {
            if (r(e))
                return e;
            throw o(i(e) + " is not an object")
        }
    }
    ,
    6198: (e,t,n)=>{
        var r = n(4088)
          , i = n(7740)
          , o = n(2871)
          , createMethod = function(e) {
            return function(t, n, s) {
                var a, c = r(t), l = o(c), u = i(s, l);
                if (e && n != n) {
                    for (; l > u; )
                        if ((a = c[u++]) != a)
                            return !0
                } else
                    for (; l > u; u++)
                        if ((e || u in c) && c[u] === n)
                            return e || u || 0;
                return !e && -1
            }
        };
        e.exports = {
            includes: createMethod(!0),
            indexOf: createMethod(!1)
        }
    }
    ,
    2306: (e,t,n)=>{
        var r = n(8240)
          , i = r({}.toString)
          , o = r("".slice);
        e.exports = function(e) {
            return o(i(e), 8, -1)
        }
    }
    ,
    375: (e,t,n)=>{
        var r = n(2371)
          , i = n(930)
          , o = n(2306)
          , s = n(211)("toStringTag")
          , a = Object
          , c = "Arguments" == o(function() {
            return arguments
        }());
        e.exports = r ? o : function(e) {
            var t, n, r;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function(e, t) {
                try {
                    return e[t]
                } catch (e) {}
            }(t = a(e), s)) ? n : c ? o(t) : "Object" == (r = o(t)) && i(t.callee) ? "Arguments" : r
        }
    }
    ,
    8474: (e,t,n)=>{
        var r = n(9606)
          , i = n(6095)
          , o = n(4399)
          , s = n(7826);
        e.exports = function(e, t, n) {
            for (var a = i(t), c = s.f, l = o.f, u = 0; u < a.length; u++) {
                var h = a[u];
                r(e, h) || n && r(n, h) || c(e, h, l(t, h))
            }
        }
    }
    ,
    2585: (e,t,n)=>{
        var r = n(5283)
          , i = n(7826)
          , o = n(5736);
        e.exports = r ? function(e, t, n) {
            return i.f(e, t, o(1, n))
        }
        : function(e, t, n) {
            return e[t] = n,
            e
        }
    }
    ,
    5736: e=>{
        e.exports = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        }
    }
    ,
    1343: (e,t,n)=>{
        var r = n(930)
          , i = n(7826)
          , o = n(3712)
          , s = n(9444);
        e.exports = function(e, t, n, a) {
            a || (a = {});
            var c = a.enumerable
              , l = void 0 !== a.name ? a.name : t;
            if (r(n) && o(n, l, a),
            a.global)
                c ? e[t] = n : s(t, n);
            else {
                try {
                    a.unsafe ? e[t] && (c = !0) : delete e[t]
                } catch (e) {}
                c ? e[t] = n : i.f(e, t, {
                    value: n,
                    enumerable: !1,
                    configurable: !a.nonConfigurable,
                    writable: !a.nonWritable
                })
            }
            return e
        }
    }
    ,
    9444: (e,t,n)=>{
        var r = n(2086)
          , i = Object.defineProperty;
        e.exports = function(e, t) {
            try {
                i(r, e, {
                    value: t,
                    configurable: !0,
                    writable: !0
                })
            } catch (n) {
                r[e] = t
            }
            return t
        }
    }
    ,
    5283: (e,t,n)=>{
        var r = n(3677);
        e.exports = !r((function() {
            return 7 != Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1]
        }
        ))
    }
    ,
    7886: e=>{
        var t = "object" == typeof document && document.all
          , n = void 0 === t && void 0 !== t;
        e.exports = {
            all: t,
            IS_HTMLDDA: n
        }
    }
    ,
    821: (e,t,n)=>{
        var r = n(2086)
          , i = n(8759)
          , o = r.document
          , s = i(o) && i(o.createElement);
        e.exports = function(e) {
            return s ? o.createElement(e) : {}
        }
    }
    ,
    4999: e=>{
        e.exports = "undefined" != typeof navigator && String(navigator.userAgent) || ""
    }
    ,
    1448: (e,t,n)=>{
        var r, i, o = n(2086), s = n(4999), a = o.process, c = o.Deno, l = a && a.versions || c && c.version, u = l && l.v8;
        u && (i = (r = u.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])),
        !i && s && (!(r = s.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = s.match(/Chrome\/(\d+)/)) && (i = +r[1]),
        e.exports = i
    }
    ,
    8684: e=>{
        e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    }
    ,
    79: (e,t,n)=>{
        var r = n(8240)
          , i = Error
          , o = r("".replace)
          , s = String(i("zxcasd").stack)
          , a = /\n\s*at [^:]*:[^\n]*/
          , c = a.test(s);
        e.exports = function(e, t) {
            if (c && "string" == typeof e && !i.prepareStackTrace)
                for (; t--; )
                    e = o(e, a, "");
            return e
        }
    }
    ,
    8395: (e,t,n)=>{
        var r = n(2585)
          , i = n(79)
          , o = n(2114)
          , s = Error.captureStackTrace;
        e.exports = function(e, t, n, a) {
            o && (s ? s(e, t) : r(e, "stack", i(n, a)))
        }
    }
    ,
    2114: (e,t,n)=>{
        var r = n(3677)
          , i = n(5736);
        e.exports = !r((function() {
            var e = Error("a");
            return !("stack"in e) || (Object.defineProperty(e, "stack", i(1, 7)),
            7 !== e.stack)
        }
        ))
    }
    ,
    1695: (e,t,n)=>{
        var r = n(2086)
          , i = n(4399).f
          , o = n(2585)
          , s = n(1343)
          , a = n(9444)
          , c = n(8474)
          , l = n(7189);
        e.exports = function(e, t) {
            var n, u, h, d, f, g = e.target, p = e.global, m = e.stat;
            if (n = p ? r : m ? r[g] || a(g, {}) : (r[g] || {}).prototype)
                for (u in t) {
                    if (d = t[u],
                    h = e.dontCallGetSet ? (f = i(n, u)) && f.value : n[u],
                    !l(p ? u : g + (m ? "." : "#") + u, e.forced) && void 0 !== h) {
                        if (typeof d == typeof h)
                            continue;
                        c(d, h)
                    }
                    (e.sham || h && h.sham) && o(d, "sham", !0),
                    s(n, u, d, e)
                }
        }
    }
    ,
    3677: e=>{
        e.exports = function(e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        }
    }
    ,
    7258: (e,t,n)=>{
        var r = n(6059)
          , i = Function.prototype
          , o = i.apply
          , s = i.call;
        e.exports = "object" == typeof Reflect && Reflect.apply || (r ? s.bind(o) : function() {
            return s.apply(o, arguments)
        }
        )
    }
    ,
    6059: (e,t,n)=>{
        var r = n(3677);
        e.exports = !r((function() {
            var e = function() {}
            .bind();
            return "function" != typeof e || e.hasOwnProperty("prototype")
        }
        ))
    }
    ,
    9413: (e,t,n)=>{
        var r = n(6059)
          , i = Function.prototype.call;
        e.exports = r ? i.bind(i) : function() {
            return i.apply(i, arguments)
        }
    }
    ,
    4398: (e,t,n)=>{
        var r = n(5283)
          , i = n(9606)
          , o = Function.prototype
          , s = r && Object.getOwnPropertyDescriptor
          , a = i(o, "name")
          , c = a && "something" === function something() {}
        .name
          , l = a && (!r || r && s(o, "name").configurable);
        e.exports = {
            EXISTS: a,
            PROPER: c,
            CONFIGURABLE: l
        }
    }
    ,
    1518: (e,t,n)=>{
        var r = n(8240)
          , i = n(5089);
        e.exports = function(e, t, n) {
            try {
                return r(i(Object.getOwnPropertyDescriptor(e, t)[n]))
            } catch (e) {}
        }
    }
    ,
    8240: (e,t,n)=>{
        var r = n(6059)
          , i = Function.prototype
          , o = i.call
          , s = r && i.bind.bind(o, o);
        e.exports = r ? s : function(e) {
            return function() {
                return o.apply(e, arguments)
            }
        }
    }
    ,
    563: (e,t,n)=>{
        var r = n(2086)
          , i = n(930)
          , aFunction = function(e) {
            return i(e) ? e : void 0
        };
        e.exports = function(e, t) {
            return arguments.length < 2 ? aFunction(r[e]) : r[e] && r[e][t]
        }
    }
    ,
    2964: (e,t,n)=>{
        var r = n(5089)
          , i = n(1858);
        e.exports = function(e, t) {
            var n = e[t];
            return i(n) ? void 0 : r(n)
        }
    }
    ,
    2086: (e,t,n)=>{
        var check = function(e) {
            return e && e.Math == Math && e
        };
        e.exports = check("object" == typeof globalThis && globalThis) || check("object" == typeof window && window) || check("object" == typeof self && self) || check("object" == typeof n.g && n.g) || function() {
            return this
        }() || Function("return this")()
    }
    ,
    9606: (e,t,n)=>{
        var r = n(8240)
          , i = n(3060)
          , o = r({}.hasOwnProperty);
        e.exports = Object.hasOwn || function hasOwn(e, t) {
            return o(i(e), t)
        }
    }
    ,
    7153: e=>{
        e.exports = {}
    }
    ,
    6761: (e,t,n)=>{
        var r = n(5283)
          , i = n(3677)
          , o = n(821);
        e.exports = !r && !i((function() {
            return 7 != Object.defineProperty(o("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        }
        ))
    }
    ,
    5974: (e,t,n)=>{
        var r = n(8240)
          , i = n(3677)
          , o = n(2306)
          , s = Object
          , a = r("".split);
        e.exports = i((function() {
            return !s("z").propertyIsEnumerable(0)
        }
        )) ? function(e) {
            return "String" == o(e) ? a(e, "") : s(e)
        }
        : s
    }
    ,
    5070: (e,t,n)=>{
        var r = n(930)
          , i = n(8759)
          , o = n(7530);
        e.exports = function(e, t, n) {
            var s, a;
            return o && r(s = t.constructor) && s !== n && i(a = s.prototype) && a !== n.prototype && o(e, a),
            e
        }
    }
    ,
    9277: (e,t,n)=>{
        var r = n(8240)
          , i = n(930)
          , o = n(4489)
          , s = r(Function.toString);
        i(o.inspectSource) || (o.inspectSource = function(e) {
            return s(e)
        }
        ),
        e.exports = o.inspectSource
    }
    ,
    8945: (e,t,n)=>{
        var r = n(8759)
          , i = n(2585);
        e.exports = function(e, t) {
            r(t) && "cause"in t && i(e, "cause", t.cause)
        }
    }
    ,
    3278: (e,t,n)=>{
        var r, i, o, s = n(640), a = n(2086), c = n(8759), l = n(2585), u = n(9606), h = n(4489), d = n(8944), f = n(7153), g = "Object already initialized", p = a.TypeError, m = a.WeakMap;
        if (s || h.state) {
            var v = h.state || (h.state = new m);
            v.get = v.get,
            v.has = v.has,
            v.set = v.set,
            r = function(e, t) {
                if (v.has(e))
                    throw p(g);
                return t.facade = e,
                v.set(e, t),
                t
            }
            ,
            i = function(e) {
                return v.get(e) || {}
            }
            ,
            o = function(e) {
                return v.has(e)
            }
        } else {
            var b = d("state");
            f[b] = !0,
            r = function(e, t) {
                if (u(e, b))
                    throw p(g);
                return t.facade = e,
                l(e, b, t),
                t
            }
            ,
            i = function(e) {
                return u(e, b) ? e[b] : {}
            }
            ,
            o = function(e) {
                return u(e, b)
            }
        }
        e.exports = {
            set: r,
            get: i,
            has: o,
            enforce: function(e) {
                return o(e) ? i(e) : r(e, {})
            },
            getterFor: function(e) {
                return function(t) {
                    var n;
                    if (!c(t) || (n = i(t)).type !== e)
                        throw p("Incompatible receiver, " + e + " required");
                    return n
                }
            }
        }
    }
    ,
    930: (e,t,n)=>{
        var r = n(7886)
          , i = r.all;
        e.exports = r.IS_HTMLDDA ? function(e) {
            return "function" == typeof e || e === i
        }
        : function(e) {
            return "function" == typeof e
        }
    }
    ,
    7189: (e,t,n)=>{
        var r = n(3677)
          , i = n(930)
          , o = /#|\.prototype\./
          , isForced = function(e, t) {
            var n = a[s(e)];
            return n == l || n != c && (i(t) ? r(t) : !!t)
        }
          , s = isForced.normalize = function(e) {
            return String(e).replace(o, ".").toLowerCase()
        }
          , a = isForced.data = {}
          , c = isForced.NATIVE = "N"
          , l = isForced.POLYFILL = "P";
        e.exports = isForced
    }
    ,
    1858: e=>{
        e.exports = function(e) {
            return null == e
        }
    }
    ,
    8759: (e,t,n)=>{
        var r = n(930)
          , i = n(7886)
          , o = i.all;
        e.exports = i.IS_HTMLDDA ? function(e) {
            return "object" == typeof e ? null !== e : r(e) || e === o
        }
        : function(e) {
            return "object" == typeof e ? null !== e : r(e)
        }
    }
    ,
    3296: e=>{
        e.exports = !1
    }
    ,
    2071: (e,t,n)=>{
        var r = n(563)
          , i = n(930)
          , o = n(5516)
          , s = n(1876)
          , a = Object;
        e.exports = s ? function(e) {
            return "symbol" == typeof e
        }
        : function(e) {
            var t = r("Symbol");
            return i(t) && o(t.prototype, a(e))
        }
    }
    ,
    2871: (e,t,n)=>{
        var r = n(4005);
        e.exports = function(e) {
            return r(e.length)
        }
    }
    ,
    3712: (e,t,n)=>{
        var r = n(8240)
          , i = n(3677)
          , o = n(930)
          , s = n(9606)
          , a = n(5283)
          , c = n(4398).CONFIGURABLE
          , l = n(9277)
          , u = n(3278)
          , h = u.enforce
          , d = u.get
          , f = String
          , g = Object.defineProperty
          , p = r("".slice)
          , m = r("".replace)
          , v = r([].join)
          , b = a && !i((function() {
            return 8 !== g((function() {}
            ), "length", {
                value: 8
            }).length
        }
        ))
          , y = String(String).split("String")
          , S = e.exports = function(e, t, n) {
            "Symbol(" === p(f(t), 0, 7) && (t = "[" + m(f(t), /^Symbol\(([^)]*)\)/, "$1") + "]"),
            n && n.getter && (t = "get " + t),
            n && n.setter && (t = "set " + t),
            (!s(e, "name") || c && e.name !== t) && (a ? g(e, "name", {
                value: t,
                configurable: !0
            }) : e.name = t),
            b && n && s(n, "arity") && e.length !== n.arity && g(e, "length", {
                value: n.arity
            });
            try {
                n && s(n, "constructor") && n.constructor ? a && g(e, "prototype", {
                    writable: !1
                }) : e.prototype && (e.prototype = void 0)
            } catch (e) {}
            var r = h(e);
            return s(r, "source") || (r.source = v(y, "string" == typeof t ? t : "")),
            e
        }
        ;
        Function.prototype.toString = S((function toString() {
            return o(this) && d(this).source || l(this)
        }
        ), "toString")
    }
    ,
    5681: e=>{
        var t = Math.ceil
          , n = Math.floor;
        e.exports = Math.trunc || function trunc(e) {
            var r = +e;
            return (r > 0 ? n : t)(r)
        }
    }
    ,
    1879: (e,t,n)=>{
        var r = n(4059);
        e.exports = function(e, t) {
            return void 0 === e ? arguments.length < 2 ? "" : t : r(e)
        }
    }
    ,
    7826: (e,t,n)=>{
        var r = n(5283)
          , i = n(6761)
          , o = n(8202)
          , s = n(6112)
          , a = n(2258)
          , c = TypeError
          , l = Object.defineProperty
          , u = Object.getOwnPropertyDescriptor
          , h = "enumerable"
          , d = "configurable"
          , f = "writable";
        t.f = r ? o ? function defineProperty(e, t, n) {
            if (s(e),
            t = a(t),
            s(n),
            "function" == typeof e && "prototype" === t && "value"in n && f in n && !n[f]) {
                var r = u(e, t);
                r && r[f] && (e[t] = n.value,
                n = {
                    configurable: d in n ? n[d] : r[d],
                    enumerable: h in n ? n[h] : r[h],
                    writable: !1
                })
            }
            return l(e, t, n)
        }
        : l : function defineProperty(e, t, n) {
            if (s(e),
            t = a(t),
            s(n),
            i)
                try {
                    return l(e, t, n)
                } catch (e) {}
            if ("get"in n || "set"in n)
                throw c("Accessors not supported");
            return "value"in n && (e[t] = n.value),
            e
        }
    }
    ,
    4399: (e,t,n)=>{
        var r = n(5283)
          , i = n(9413)
          , o = n(7446)
          , s = n(5736)
          , a = n(4088)
          , c = n(2258)
          , l = n(9606)
          , u = n(6761)
          , h = Object.getOwnPropertyDescriptor;
        t.f = r ? h : function getOwnPropertyDescriptor(e, t) {
            if (e = a(e),
            t = c(t),
            u)
                try {
                    return h(e, t)
                } catch (e) {}
            if (l(e, t))
                return s(!i(o.f, e, t), e[t])
        }
    }
    ,
    62: (e,t,n)=>{
        var r = n(1352)
          , i = n(8684).concat("length", "prototype");
        t.f = Object.getOwnPropertyNames || function getOwnPropertyNames(e) {
            return r(e, i)
        }
    }
    ,
    6952: (e,t)=>{
        t.f = Object.getOwnPropertySymbols
    }
    ,
    5516: (e,t,n)=>{
        var r = n(8240);
        e.exports = r({}.isPrototypeOf)
    }
    ,
    1352: (e,t,n)=>{
        var r = n(8240)
          , i = n(9606)
          , o = n(4088)
          , s = n(6198).indexOf
          , a = n(7153)
          , c = r([].push);
        e.exports = function(e, t) {
            var n, r = o(e), l = 0, u = [];
            for (n in r)
                !i(a, n) && i(r, n) && c(u, n);
            for (; t.length > l; )
                i(r, n = t[l++]) && (~s(u, n) || c(u, n));
            return u
        }
    }
    ,
    7446: (e,t)=>{
        "use strict";
        var n = {}.propertyIsEnumerable
          , r = Object.getOwnPropertyDescriptor
          , i = r && !n.call({
            1: 2
        }, 1);
        t.f = i ? function propertyIsEnumerable(e) {
            var t = r(this, e);
            return !!t && t.enumerable
        }
        : n
    }
    ,
    7530: (e,t,n)=>{
        var r = n(1518)
          , i = n(6112)
          , o = n(1378);
        e.exports = Object.setPrototypeOf || ("__proto__"in {} ? function() {
            var e, t = !1, n = {};
            try {
                (e = r(Object.prototype, "__proto__", "set"))(n, []),
                t = n instanceof Array
            } catch (e) {}
            return function setPrototypeOf(n, r) {
                return i(n),
                o(r),
                t ? e(n, r) : n.__proto__ = r,
                n
            }
        }() : void 0)
    }
    ,
    7999: (e,t,n)=>{
        var r = n(9413)
          , i = n(930)
          , o = n(8759)
          , s = TypeError;
        e.exports = function(e, t) {
            var n, a;
            if ("string" === t && i(n = e.toString) && !o(a = r(n, e)))
                return a;
            if (i(n = e.valueOf) && !o(a = r(n, e)))
                return a;
            if ("string" !== t && i(n = e.toString) && !o(a = r(n, e)))
                return a;
            throw s("Can't convert object to primitive value")
        }
    }
    ,
    6095: (e,t,n)=>{
        var r = n(563)
          , i = n(8240)
          , o = n(62)
          , s = n(6952)
          , a = n(6112)
          , c = i([].concat);
        e.exports = r("Reflect", "ownKeys") || function ownKeys(e) {
            var t = o.f(a(e))
              , n = s.f;
            return n ? c(t, n(e)) : t
        }
    }
    ,
    1632: (e,t,n)=>{
        var r = n(7826).f;
        e.exports = function(e, t, n) {
            n in e || r(e, n, {
                configurable: !0,
                get: function() {
                    return t[n]
                },
                set: function(e) {
                    t[n] = e
                }
            })
        }
    }
    ,
    9586: (e,t,n)=>{
        var r = n(1858)
          , i = TypeError;
        e.exports = function(e) {
            if (r(e))
                throw i("Can't call method on " + e);
            return e
        }
    }
    ,
    8944: (e,t,n)=>{
        var r = n(9197)
          , i = n(5422)
          , o = r("keys");
        e.exports = function(e) {
            return o[e] || (o[e] = i(e))
        }
    }
    ,
    4489: (e,t,n)=>{
        var r = n(2086)
          , i = n(9444)
          , o = "__core-js_shared__"
          , s = r[o] || i(o, {});
        e.exports = s
    }
    ,
    9197: (e,t,n)=>{
        var r = n(3296)
          , i = n(4489);
        (e.exports = function(e, t) {
            return i[e] || (i[e] = void 0 !== t ? t : {})
        }
        )("versions", []).push({
            version: "3.28.0",
            mode: r ? "pure" : "global",
            copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
            license: "https://github.com/zloirock/core-js/blob/v3.28.0/LICENSE",
            source: "https://github.com/zloirock/core-js"
        })
    }
    ,
    5558: (e,t,n)=>{
        var r = n(1448)
          , i = n(3677);
        e.exports = !!Object.getOwnPropertySymbols && !i((function() {
            var e = Symbol();
            return !String(e) || !(Object(e)instanceof Symbol) || !Symbol.sham && r && r < 41
        }
        ))
    }
    ,
    7740: (e,t,n)=>{
        var r = n(9502)
          , i = Math.max
          , o = Math.min;
        e.exports = function(e, t) {
            var n = r(e);
            return n < 0 ? i(n + t, 0) : o(n, t)
        }
    }
    ,
    4088: (e,t,n)=>{
        var r = n(5974)
          , i = n(9586);
        e.exports = function(e) {
            return r(i(e))
        }
    }
    ,
    9502: (e,t,n)=>{
        var r = n(5681);
        e.exports = function(e) {
            var t = +e;
            return t != t || 0 === t ? 0 : r(t)
        }
    }
    ,
    4005: (e,t,n)=>{
        var r = n(9502)
          , i = Math.min;
        e.exports = function(e) {
            return e > 0 ? i(r(e), 9007199254740991) : 0
        }
    }
    ,
    3060: (e,t,n)=>{
        var r = n(9586)
          , i = Object;
        e.exports = function(e) {
            return i(r(e))
        }
    }
    ,
    1288: (e,t,n)=>{
        var r = n(9413)
          , i = n(8759)
          , o = n(2071)
          , s = n(2964)
          , a = n(7999)
          , c = n(211)
          , l = TypeError
          , u = c("toPrimitive");
        e.exports = function(e, t) {
            if (!i(e) || o(e))
                return e;
            var n, c = s(e, u);
            if (c) {
                if (void 0 === t && (t = "default"),
                n = r(c, e, t),
                !i(n) || o(n))
                    return n;
                throw l("Can't convert object to primitive value")
            }
            return void 0 === t && (t = "number"),
            a(e, t)
        }
    }
    ,
    2258: (e,t,n)=>{
        var r = n(1288)
          , i = n(2071);
        e.exports = function(e) {
            var t = r(e, "string");
            return i(t) ? t : t + ""
        }
    }
    ,
    2371: (e,t,n)=>{
        var r = {};
        r[n(211)("toStringTag")] = "z",
        e.exports = "[object z]" === String(r)
    }
    ,
    4059: (e,t,n)=>{
        var r = n(375)
          , i = String;
        e.exports = function(e) {
            if ("Symbol" === r(e))
                throw TypeError("Cannot convert a Symbol value to a string");
            return i(e)
        }
    }
    ,
    9268: e=>{
        var t = String;
        e.exports = function(e) {
            try {
                return t(e)
            } catch (e) {
                return "Object"
            }
        }
    }
    ,
    5422: (e,t,n)=>{
        var r = n(8240)
          , i = 0
          , o = Math.random()
          , s = r(1..toString);
        e.exports = function(e) {
            return "Symbol(" + (void 0 === e ? "" : e) + ")_" + s(++i + o, 36)
        }
    }
    ,
    1876: (e,t,n)=>{
        var r = n(5558);
        e.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator
    }
    ,
    8202: (e,t,n)=>{
        var r = n(5283)
          , i = n(3677);
        e.exports = r && i((function() {
            return 42 != Object.defineProperty((function() {}
            ), "prototype", {
                value: 42,
                writable: !1
            }).prototype
        }
        ))
    }
    ,
    640: (e,t,n)=>{
        var r = n(2086)
          , i = n(930)
          , o = r.WeakMap;
        e.exports = i(o) && /native code/.test(String(o))
    }
    ,
    211: (e,t,n)=>{
        var r = n(2086)
          , i = n(9197)
          , o = n(9606)
          , s = n(5422)
          , a = n(5558)
          , c = n(1876)
          , l = r.Symbol
          , u = i("wks")
          , h = c ? l.for || l : l && l.withoutSetter || s;
        e.exports = function(e) {
            return o(u, e) || (u[e] = a && o(l, e) ? l[e] : h("Symbol." + e)),
            u[e]
        }
    }
    ,
    1557: (e,t,n)=>{
        "use strict";
        var r = n(563)
          , i = n(9606)
          , o = n(2585)
          , s = n(5516)
          , a = n(7530)
          , c = n(8474)
          , l = n(1632)
          , u = n(5070)
          , h = n(1879)
          , d = n(8945)
          , f = n(8395)
          , g = n(5283)
          , p = n(3296);
        e.exports = function(e, t, n, m) {
            var v = "stackTraceLimit"
              , b = m ? 2 : 1
              , y = e.split(".")
              , S = y[y.length - 1]
              , T = r.apply(null, y);
            if (T) {
                var E = T.prototype;
                if (!p && i(E, "cause") && delete E.cause,
                !n)
                    return T;
                var w = r("Error")
                  , C = t((function(e, t) {
                    var n = h(m ? t : e, void 0)
                      , r = m ? new T(e) : new T;
                    return void 0 !== n && o(r, "message", n),
                    f(r, C, r.stack, 2),
                    this && s(E, this) && u(r, this, C),
                    arguments.length > b && d(r, arguments[b]),
                    r
                }
                ));
                if (C.prototype = E,
                "Error" !== S ? a ? a(C, w) : c(C, w, {
                    name: !0
                }) : g && v in T && (l(C, T, v),
                l(C, T, "prepareStackTrace")),
                c(C, T),
                !p)
                    try {
                        E.name !== S && o(E, "name", S),
                        E.constructor = C
                    } catch (e) {}
                return C
            }
        }
    }
    ,
    740: (e,t,n)=>{
        var r = n(1695)
          , i = n(2086)
          , o = n(7258)
          , s = n(1557)
          , a = "WebAssembly"
          , c = i[a]
          , l = 7 !== Error("e", {
            cause: 7
        }).cause
          , exportGlobalErrorCauseWrapper = function(e, t) {
            var n = {};
            n[e] = s(e, t, l),
            r({
                global: !0,
                constructor: !0,
                arity: 1,
                forced: l
            }, n)
        }
          , exportWebAssemblyErrorCauseWrapper = function(e, t) {
            if (c && c[e]) {
                var n = {};
                n[e] = s(a + "." + e, t, l),
                r({
                    target: a,
                    stat: !0,
                    constructor: !0,
                    arity: 1,
                    forced: l
                }, n)
            }
        };
        exportGlobalErrorCauseWrapper("Error", (function(e) {
            return function Error(t) {
                return o(e, this, arguments)
            }
        }
        )),
        exportGlobalErrorCauseWrapper("EvalError", (function(e) {
            return function EvalError(t) {
                return o(e, this, arguments)
            }
        }
        )),
        exportGlobalErrorCauseWrapper("RangeError", (function(e) {
            return function RangeError(t) {
                return o(e, this, arguments)
            }
        }
        )),
        exportGlobalErrorCauseWrapper("ReferenceError", (function(e) {
            return function ReferenceError(t) {
                return o(e, this, arguments)
            }
        }
        )),
        exportGlobalErrorCauseWrapper("SyntaxError", (function(e) {
            return function SyntaxError(t) {
                return o(e, this, arguments)
            }
        }
        )),
        exportGlobalErrorCauseWrapper("TypeError", (function(e) {
            return function TypeError(t) {
                return o(e, this, arguments)
            }
        }
        )),
        exportGlobalErrorCauseWrapper("URIError", (function(e) {
            return function URIError(t) {
                return o(e, this, arguments)
            }
        }
        )),
        exportWebAssemblyErrorCauseWrapper("CompileError", (function(e) {
            return function CompileError(t) {
                return o(e, this, arguments)
            }
        }
        )),
        exportWebAssemblyErrorCauseWrapper("LinkError", (function(e) {
            return function LinkError(t) {
                return o(e, this, arguments)
            }
        }
        )),
        exportWebAssemblyErrorCauseWrapper("RuntimeError", (function(e) {
            return function RuntimeError(t) {
                return o(e, this, arguments)
            }
        }
        ))
    }
    ,
    3203: e=>{
        e.exports = function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    }
}, e=>{
    var t;
    t = 6412,
    e(e.s = t)
}
]);
!function() {
    "use strict";
    function Waypoint(options) {
        if (!options)
            throw new Error("No options passed to Waypoint constructor");
        if (!options.element)
            throw new Error("No element option passed to Waypoint constructor");
        if (!options.handler)
            throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + keyCounter,
        this.options = Waypoint.Adapter.extend({}, Waypoint.defaults, options),
        this.element = this.options.element,
        this.adapter = new Waypoint.Adapter(this.element),
        this.callback = options.handler,
        this.axis = this.options.horizontal ? "horizontal" : "vertical",
        this.enabled = this.options.enabled,
        this.triggerPoint = null,
        this.group = Waypoint.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }),
        this.context = Waypoint.Context.findOrCreateByElement(this.options.context),
        Waypoint.offsetAliases[this.options.offset] && (this.options.offset = Waypoint.offsetAliases[this.options.offset]),
        this.group.add(this),
        this.context.add(this),
        allWaypoints[this.key] = this,
        keyCounter += 1
    }
    var keyCounter = 0
      , allWaypoints = {};
    Waypoint.prototype.queueTrigger = function(direction) {
        this.group.queueTrigger(this, direction)
    }
    ,
    Waypoint.prototype.trigger = function(args) {
        this.enabled && this.callback && this.callback.apply(this, args)
    }
    ,
    Waypoint.prototype.destroy = function() {
        this.context.remove(this),
        this.group.remove(this),
        delete allWaypoints[this.key]
    }
    ,
    Waypoint.prototype.disable = function() {
        return this.enabled = !1,
        this
    }
    ,
    Waypoint.prototype.enable = function() {
        return this.context.refresh(),
        this.enabled = !0,
        this
    }
    ,
    Waypoint.prototype.next = function() {
        return this.group.next(this)
    }
    ,
    Waypoint.prototype.previous = function() {
        return this.group.previous(this)
    }
    ,
    Waypoint.invokeAll = function(method) {
        var allWaypointsArray = [];
        for (var waypointKey in allWaypoints)
            allWaypointsArray.push(allWaypoints[waypointKey]);
        for (var i = 0, end = allWaypointsArray.length; i < end; i++)
            allWaypointsArray[i][method]()
    }
    ,
    Waypoint.destroyAll = function() {
        Waypoint.invokeAll("destroy")
    }
    ,
    Waypoint.disableAll = function() {
        Waypoint.invokeAll("disable")
    }
    ,
    Waypoint.enableAll = function() {
        Waypoint.Context.refreshAll();
        for (var waypointKey in allWaypoints)
            allWaypoints[waypointKey].enabled = !0;
        return this
    }
    ,
    Waypoint.refreshAll = function() {
        Waypoint.Context.refreshAll()
    }
    ,
    Waypoint.viewportHeight = function() {
        return window.innerHeight || document.documentElement.clientHeight
    }
    ,
    Waypoint.viewportWidth = function() {
        return document.documentElement.clientWidth
    }
    ,
    Waypoint.adapters = [],
    Waypoint.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    },
    Waypoint.offsetAliases = {
        "bottom-in-view": function() {
            return this.context.innerHeight() - this.adapter.outerHeight()
        },
        "right-in-view": function() {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    },
    window.Waypoint = Waypoint
}(),
function() {
    "use strict";
    function requestAnimationFrameShim(callback) {
        window.setTimeout(callback, 1e3 / 60)
    }
    function Context(element) {
        this.element = element,
        this.Adapter = Waypoint.Adapter,
        this.adapter = new this.Adapter(element),
        this.key = "waypoint-context-" + keyCounter,
        this.didScroll = !1,
        this.didResize = !1,
        this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        },
        this.waypoints = {
            vertical: {},
            horizontal: {}
        },
        element.waypointContextKey = this.key,
        contexts[element.waypointContextKey] = this,
        keyCounter += 1,
        Waypoint.windowContext || (Waypoint.windowContext = !0,
        Waypoint.windowContext = new Context(window)),
        this.createThrottledScrollHandler(),
        this.createThrottledResizeHandler()
    }
    var keyCounter = 0
      , contexts = {}
      , Waypoint = window.Waypoint
      , oldWindowLoad = window.onload;
    Context.prototype.add = function(waypoint) {
        var axis = waypoint.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[axis][waypoint.key] = waypoint,
        this.refresh()
    }
    ,
    Context.prototype.checkEmpty = function() {
        var horizontalEmpty = this.Adapter.isEmptyObject(this.waypoints.horizontal)
          , verticalEmpty = this.Adapter.isEmptyObject(this.waypoints.vertical)
          , isWindow = this.element == this.element.window;
        horizontalEmpty && verticalEmpty && !isWindow && (this.adapter.off(".waypoints"),
        delete contexts[this.key])
    }
    ,
    Context.prototype.createThrottledResizeHandler = function() {
        function resizeHandler() {
            self.handleResize(),
            self.didResize = !1
        }
        var self = this;
        this.adapter.on("resize.waypoints", function() {
            self.didResize || (self.didResize = !0,
            Waypoint.requestAnimationFrame(resizeHandler))
        })
    }
    ,
    Context.prototype.createThrottledScrollHandler = function() {
        function scrollHandler() {
            self.handleScroll(),
            self.didScroll = !1
        }
        var self = this;
        this.adapter.on("scroll.waypoints", function() {
            self.didScroll && !Waypoint.isTouch || (self.didScroll = !0,
            Waypoint.requestAnimationFrame(scrollHandler))
        })
    }
    ,
    Context.prototype.handleResize = function() {
        Waypoint.Context.refreshAll()
    }
    ,
    Context.prototype.handleScroll = function() {
        var triggeredGroups = {}
          , axes = {
            horizontal: {
                newScroll: this.adapter.scrollLeft(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left"
            },
            vertical: {
                newScroll: this.adapter.scrollTop(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up"
            }
        };
        for (var axisKey in axes) {
            var axis = axes[axisKey]
              , isForward = axis.newScroll > axis.oldScroll
              , direction = isForward ? axis.forward : axis.backward;
            for (var waypointKey in this.waypoints[axisKey]) {
                var waypoint = this.waypoints[axisKey][waypointKey];
                if (null !== waypoint.triggerPoint) {
                    var wasBeforeTriggerPoint = axis.oldScroll < waypoint.triggerPoint
                      , nowAfterTriggerPoint = axis.newScroll >= waypoint.triggerPoint
                      , crossedForward = wasBeforeTriggerPoint && nowAfterTriggerPoint
                      , crossedBackward = !wasBeforeTriggerPoint && !nowAfterTriggerPoint;
                    (crossedForward || crossedBackward) && (waypoint.queueTrigger(direction),
                    triggeredGroups[waypoint.group.id] = waypoint.group)
                }
            }
        }
        for (var groupKey in triggeredGroups)
            triggeredGroups[groupKey].flushTriggers();
        this.oldScroll = {
            x: axes.horizontal.newScroll,
            y: axes.vertical.newScroll
        }
    }
    ,
    Context.prototype.innerHeight = function() {
        return this.element == this.element.window ? Waypoint.viewportHeight() : this.adapter.innerHeight()
    }
    ,
    Context.prototype.remove = function(waypoint) {
        delete this.waypoints[waypoint.axis][waypoint.key],
        this.checkEmpty()
    }
    ,
    Context.prototype.innerWidth = function() {
        return this.element == this.element.window ? Waypoint.viewportWidth() : this.adapter.innerWidth()
    }
    ,
    Context.prototype.destroy = function() {
        var allWaypoints = [];
        for (var axis in this.waypoints)
            for (var waypointKey in this.waypoints[axis])
                allWaypoints.push(this.waypoints[axis][waypointKey]);
        for (var i = 0, end = allWaypoints.length; i < end; i++)
            allWaypoints[i].destroy()
    }
    ,
    Context.prototype.refresh = function() {
        var axes, isWindow = this.element == this.element.window, contextOffset = isWindow ? void 0 : this.adapter.offset(), triggeredGroups = {};
        this.handleScroll(),
        axes = {
            horizontal: {
                contextOffset: isWindow ? 0 : contextOffset.left,
                contextScroll: isWindow ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
                offsetProp: "left"
            },
            vertical: {
                contextOffset: isWindow ? 0 : contextOffset.top,
                contextScroll: isWindow ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
                offsetProp: "top"
            }
        };
        for (var axisKey in axes) {
            var axis = axes[axisKey];
            for (var waypointKey in this.waypoints[axisKey]) {
                var contextModifier, wasBeforeScroll, nowAfterScroll, triggeredBackward, triggeredForward, waypoint = this.waypoints[axisKey][waypointKey], adjustment = waypoint.options.offset, oldTriggerPoint = waypoint.triggerPoint, elementOffset = 0, freshWaypoint = null == oldTriggerPoint;
                waypoint.element !== waypoint.element.window && (elementOffset = waypoint.adapter.offset()[axis.offsetProp]),
                "function" == typeof adjustment ? adjustment = adjustment.apply(waypoint) : "string" == typeof adjustment && (adjustment = parseFloat(adjustment),
                waypoint.options.offset.indexOf("%") > -1 && (adjustment = Math.ceil(axis.contextDimension * adjustment / 100))),
                contextModifier = axis.contextScroll - axis.contextOffset,
                waypoint.triggerPoint = Math.floor(elementOffset + contextModifier - adjustment),
                wasBeforeScroll = oldTriggerPoint < axis.oldScroll,
                nowAfterScroll = waypoint.triggerPoint >= axis.oldScroll,
                triggeredBackward = wasBeforeScroll && nowAfterScroll,
                triggeredForward = !wasBeforeScroll && !nowAfterScroll,
                !freshWaypoint && triggeredBackward ? (waypoint.queueTrigger(axis.backward),
                triggeredGroups[waypoint.group.id] = waypoint.group) : !freshWaypoint && triggeredForward ? (waypoint.queueTrigger(axis.forward),
                triggeredGroups[waypoint.group.id] = waypoint.group) : freshWaypoint && axis.oldScroll >= waypoint.triggerPoint && (waypoint.queueTrigger(axis.forward),
                triggeredGroups[waypoint.group.id] = waypoint.group)
            }
        }
        return Waypoint.requestAnimationFrame(function() {
            for (var groupKey in triggeredGroups)
                triggeredGroups[groupKey].flushTriggers()
        }),
        this
    }
    ,
    Context.findOrCreateByElement = function(element) {
        return Context.findByElement(element) || new Context(element)
    }
    ,
    Context.refreshAll = function() {
        for (var contextId in contexts)
            contexts[contextId].refresh()
    }
    ,
    Context.findByElement = function(element) {
        return contexts[element.waypointContextKey]
    }
    ,
    window.onload = function() {
        oldWindowLoad && oldWindowLoad(),
        Context.refreshAll()
    }
    ,
    Waypoint.requestAnimationFrame = function(callback) {
        var requestFn = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || requestAnimationFrameShim;
        requestFn.call(window, callback)
    }
    ,
    Waypoint.Context = Context
}(),
function() {
    "use strict";
    function byTriggerPoint(a, b) {
        return a.triggerPoint - b.triggerPoint
    }
    function byReverseTriggerPoint(a, b) {
        return b.triggerPoint - a.triggerPoint
    }
    function Group(options) {
        this.name = options.name,
        this.axis = options.axis,
        this.id = this.name + "-" + this.axis,
        this.waypoints = [],
        this.clearTriggerQueues(),
        groups[this.axis][this.name] = this
    }
    var groups = {
        vertical: {},
        horizontal: {}
    }
      , Waypoint = window.Waypoint;
    Group.prototype.add = function(waypoint) {
        this.waypoints.push(waypoint)
    }
    ,
    Group.prototype.clearTriggerQueues = function() {
        this.triggerQueues = {
            up: [],
            down: [],
            left: [],
            right: []
        }
    }
    ,
    Group.prototype.flushTriggers = function() {
        for (var direction in this.triggerQueues) {
            var waypoints = this.triggerQueues[direction]
              , reverse = "up" === direction || "left" === direction;
            waypoints.sort(reverse ? byReverseTriggerPoint : byTriggerPoint);
            for (var i = 0, end = waypoints.length; i < end; i += 1) {
                var waypoint = waypoints[i];
                (waypoint.options.continuous || i === waypoints.length - 1) && waypoint.trigger([direction])
            }
        }
        this.clearTriggerQueues()
    }
    ,
    Group.prototype.next = function(waypoint) {
        this.waypoints.sort(byTriggerPoint);
        var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
          , isLast = index === this.waypoints.length - 1;
        return isLast ? null : this.waypoints[index + 1]
    }
    ,
    Group.prototype.previous = function(waypoint) {
        this.waypoints.sort(byTriggerPoint);
        var index = Waypoint.Adapter.inArray(waypoint, this.waypoints);
        return index ? this.waypoints[index - 1] : null
    }
    ,
    Group.prototype.queueTrigger = function(waypoint, direction) {
        this.triggerQueues[direction].push(waypoint)
    }
    ,
    Group.prototype.remove = function(waypoint) {
        var index = Waypoint.Adapter.inArray(waypoint, this.waypoints);
        index > -1 && this.waypoints.splice(index, 1)
    }
    ,
    Group.prototype.first = function() {
        return this.waypoints[0]
    }
    ,
    Group.prototype.last = function() {
        return this.waypoints[this.waypoints.length - 1]
    }
    ,
    Group.findOrCreate = function(options) {
        return groups[options.axis][options.name] || new Group(options)
    }
    ,
    Waypoint.Group = Group
}(),
function() {
    "use strict";
    function JQueryAdapter(element) {
        this.$element = $(element)
    }
    var $ = window.jQuery
      , Waypoint = window.Waypoint;
    $.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(i, method) {
        JQueryAdapter.prototype[method] = function() {
            var args = Array.prototype.slice.call(arguments);
            return this.$element[method].apply(this.$element, args)
        }
    }),
    $.each(["extend", "inArray", "isEmptyObject"], function(i, method) {
        JQueryAdapter[method] = $[method]
    }),
    Waypoint.adapters.push({
        name: "jquery",
        Adapter: JQueryAdapter
    }),
    Waypoint.Adapter = JQueryAdapter
}(),
function() {
    "use strict";
    function createExtension(framework) {
        return function() {
            var waypoints = []
              , overrides = arguments[0];
            return framework.isFunction(arguments[0]) && (overrides = framework.extend({}, arguments[1]),
            overrides.handler = arguments[0]),
            this.each(function() {
                var options = framework.extend({}, overrides, {
                    element: this
                });
                "string" == typeof options.context && (options.context = framework(this).closest(options.context)[0]),
                waypoints.push(new Waypoint(options))
            }),
            waypoints
        }
    }
    var Waypoint = window.Waypoint;
    window.jQuery && (window.jQuery.fn.elementorWaypoint = createExtension(window.jQuery)),
    window.Zepto && (window.Zepto.fn.elementorWaypoint = createExtension(window.Zepto))
}();
/*! jQuery UI - v1.13.2 - 2022-07-14
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-patch.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
!function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function(x) {
    "use strict";
    var t, e, i, n, W, C, o, s, r, l, a, h, u;
    function E(t, e, i) {
        return [parseFloat(t[0]) * (a.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (a.test(t[1]) ? i / 100 : 1)]
    }
    function L(t, e) {
        return parseInt(x.css(t, e), 10) || 0
    }
    function N(t) {
        return null != t && t === t.window
    }
    x.ui = x.ui || {},
    x.ui.version = "1.13.2",
    /*!
 * jQuery UI :data 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    x.extend(x.expr.pseudos, {
        data: x.expr.createPseudo ? x.expr.createPseudo(function(e) {
            return function(t) {
                return !!x.data(t, e)
            }
        }) : function(t, e, i) {
            return !!x.data(t, i[3])
        }
    }),
    /*!
 * jQuery UI Disable Selection 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    x.fn.extend({
        disableSelection: (t = "onselectstart"in document.createElement("div") ? "selectstart" : "mousedown",
        function() {
            return this.on(t + ".ui-disableSelection", function(t) {
                t.preventDefault()
            })
        }
        ),
        enableSelection: function() {
            return this.off(".ui-disableSelection")
        }
    }),
    /*!
 * jQuery UI Focusable 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    x.ui.focusable = function(t, e) {
        var i, n, o, s = t.nodeName.toLowerCase();
        return "area" === s ? (o = (i = t.parentNode).name,
        !(!t.href || !o || "map" !== i.nodeName.toLowerCase()) && 0 < (i = x("img[usemap='#" + o + "']")).length && i.is(":visible")) : (/^(input|select|textarea|button|object)$/.test(s) ? (n = !t.disabled) && (o = x(t).closest("fieldset")[0]) && (n = !o.disabled) : n = "a" === s && t.href || e,
        n && x(t).is(":visible") && function(t) {
            var e = t.css("visibility");
            for (; "inherit" === e; )
                t = t.parent(),
                e = t.css("visibility");
            return "visible" === e
        }(x(t)))
    }
    ,
    x.extend(x.expr.pseudos, {
        focusable: function(t) {
            return x.ui.focusable(t, null != x.attr(t, "tabindex"))
        }
    }),
    x.fn._form = function() {
        return "string" == typeof this[0].form ? this.closest("form") : x(this[0].form)
    }
    ,
    /*!
 * jQuery UI Form Reset Mixin 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    x.ui.formResetMixin = {
        _formResetHandler: function() {
            var e = x(this);
            setTimeout(function() {
                var t = e.data("ui-form-reset-instances");
                x.each(t, function() {
                    this.refresh()
                })
            })
        },
        _bindFormResetHandler: function() {
            var t;
            this.form = this.element._form(),
            this.form.length && ((t = this.form.data("ui-form-reset-instances") || []).length || this.form.on("reset.ui-form-reset", this._formResetHandler),
            t.push(this),
            this.form.data("ui-form-reset-instances", t))
        },
        _unbindFormResetHandler: function() {
            var t;
            this.form.length && ((t = this.form.data("ui-form-reset-instances")).splice(x.inArray(this, t), 1),
            t.length ? this.form.data("ui-form-reset-instances", t) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset"))
        }
    },
    x.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),
    /*!
 * jQuery UI Support for jQuery core 1.8.x and newer 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 */
    x.expr.pseudos || (x.expr.pseudos = x.expr[":"]),
    x.uniqueSort || (x.uniqueSort = x.unique),
    x.escapeSelector || (e = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
    i = function(t, e) {
        return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
    }
    ,
    x.escapeSelector = function(t) {
        return (t + "").replace(e, i)
    }
    ),
    x.fn.even && x.fn.odd || x.fn.extend({
        even: function() {
            return this.filter(function(t) {
                return t % 2 == 0
            })
        },
        odd: function() {
            return this.filter(function(t) {
                return t % 2 == 1
            })
        }
    }),
    /*!
 * jQuery UI Keycode 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    x.ui.keyCode = {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
    },
    /*!
 * jQuery UI Labels 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    x.fn.labels = function() {
        var t, e, i;
        return this.length ? this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (e = this.eq(0).parents("label"),
        (t = this.attr("id")) && (i = (i = this.eq(0).parents().last()).add((i.length ? i : this).siblings()),
        t = "label[for='" + x.escapeSelector(t) + "']",
        e = e.add(i.find(t).addBack(t))),
        this.pushStack(e)) : this.pushStack([])
    }
    ,
    x.ui.plugin = {
        add: function(t, e, i) {
            var n, o = x.ui[t].prototype;
            for (n in i)
                o.plugins[n] = o.plugins[n] || [],
                o.plugins[n].push([e, i[n]])
        },
        call: function(t, e, i, n) {
            var o, s = t.plugins[e];
            if (s && (n || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
                for (o = 0; o < s.length; o++)
                    t.options[s[o][0]] && s[o][1].apply(t.element, i)
        }
    },
    /*!
 * jQuery UI Position 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
    W = Math.max,
    C = Math.abs,
    o = /left|center|right/,
    s = /top|center|bottom/,
    r = /[\+\-]\d+(\.[\d]+)?%?/,
    l = /^\w+/,
    a = /%$/,
    h = x.fn.position,
    x.position = {
        scrollbarWidth: function() {
            var t, e, i;
            return void 0 !== n ? n : (i = (e = x("<div style='display:block;position:absolute;width:200px;height:200px;overflow:hidden;'><div style='height:300px;width:auto;'></div></div>")).children()[0],
            x("body").append(e),
            t = i.offsetWidth,
            e.css("overflow", "scroll"),
            t === (i = i.offsetWidth) && (i = e[0].clientWidth),
            e.remove(),
            n = t - i)
        },
        getScrollInfo: function(t) {
            var e = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x")
              , i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y")
              , e = "scroll" === e || "auto" === e && t.width < t.element[0].scrollWidth;
            return {
                width: "scroll" === i || "auto" === i && t.height < t.element[0].scrollHeight ? x.position.scrollbarWidth() : 0,
                height: e ? x.position.scrollbarWidth() : 0
            }
        },
        getWithinInfo: function(t) {
            var e = x(t || window)
              , i = N(e[0])
              , n = !!e[0] && 9 === e[0].nodeType;
            return {
                element: e,
                isWindow: i,
                isDocument: n,
                offset: !i && !n ? x(t).offset() : {
                    left: 0,
                    top: 0
                },
                scrollLeft: e.scrollLeft(),
                scrollTop: e.scrollTop(),
                width: e.outerWidth(),
                height: e.outerHeight()
            }
        }
    },
    x.fn.position = function(f) {
        var c, d, p, g, m, v, y, w, b, _, t, e;
        return f && f.of ? (v = "string" == typeof (f = x.extend({}, f)).of ? x(document).find(f.of) : x(f.of),
        y = x.position.getWithinInfo(f.within),
        w = x.position.getScrollInfo(y),
        b = (f.collision || "flip").split(" "),
        _ = {},
        e = 9 === (e = (t = v)[0]).nodeType ? {
            width: t.width(),
            height: t.height(),
            offset: {
                top: 0,
                left: 0
            }
        } : N(e) ? {
            width: t.width(),
            height: t.height(),
            offset: {
                top: t.scrollTop(),
                left: t.scrollLeft()
            }
        } : e.preventDefault ? {
            width: 0,
            height: 0,
            offset: {
                top: e.pageY,
                left: e.pageX
            }
        } : {
            width: t.outerWidth(),
            height: t.outerHeight(),
            offset: t.offset()
        },
        v[0].preventDefault && (f.at = "left top"),
        d = e.width,
        p = e.height,
        m = x.extend({}, g = e.offset),
        x.each(["my", "at"], function() {
            var t, e, i = (f[this] || "").split(" ");
            (i = 1 === i.length ? o.test(i[0]) ? i.concat(["center"]) : s.test(i[0]) ? ["center"].concat(i) : ["center", "center"] : i)[0] = o.test(i[0]) ? i[0] : "center",
            i[1] = s.test(i[1]) ? i[1] : "center",
            t = r.exec(i[0]),
            e = r.exec(i[1]),
            _[this] = [t ? t[0] : 0, e ? e[0] : 0],
            f[this] = [l.exec(i[0])[0], l.exec(i[1])[0]]
        }),
        1 === b.length && (b[1] = b[0]),
        "right" === f.at[0] ? m.left += d : "center" === f.at[0] && (m.left += d / 2),
        "bottom" === f.at[1] ? m.top += p : "center" === f.at[1] && (m.top += p / 2),
        c = E(_.at, d, p),
        m.left += c[0],
        m.top += c[1],
        this.each(function() {
            var i, t, r = x(this), l = r.outerWidth(), a = r.outerHeight(), e = L(this, "marginLeft"), n = L(this, "marginTop"), o = l + e + L(this, "marginRight") + w.width, s = a + n + L(this, "marginBottom") + w.height, h = x.extend({}, m), u = E(_.my, r.outerWidth(), r.outerHeight());
            "right" === f.my[0] ? h.left -= l : "center" === f.my[0] && (h.left -= l / 2),
            "bottom" === f.my[1] ? h.top -= a : "center" === f.my[1] && (h.top -= a / 2),
            h.left += u[0],
            h.top += u[1],
            i = {
                marginLeft: e,
                marginTop: n
            },
            x.each(["left", "top"], function(t, e) {
                x.ui.position[b[t]] && x.ui.position[b[t]][e](h, {
                    targetWidth: d,
                    targetHeight: p,
                    elemWidth: l,
                    elemHeight: a,
                    collisionPosition: i,
                    collisionWidth: o,
                    collisionHeight: s,
                    offset: [c[0] + u[0], c[1] + u[1]],
                    my: f.my,
                    at: f.at,
                    within: y,
                    elem: r
                })
            }),
            f.using && (t = function(t) {
                var e = g.left - h.left
                  , i = e + d - l
                  , n = g.top - h.top
                  , o = n + p - a
                  , s = {
                    target: {
                        element: v,
                        left: g.left,
                        top: g.top,
                        width: d,
                        height: p
                    },
                    element: {
                        element: r,
                        left: h.left,
                        top: h.top,
                        width: l,
                        height: a
                    },
                    horizontal: i < 0 ? "left" : 0 < e ? "right" : "center",
                    vertical: o < 0 ? "top" : 0 < n ? "bottom" : "middle"
                };
                d < l && C(e + i) < d && (s.horizontal = "center"),
                p < a && C(n + o) < p && (s.vertical = "middle"),
                W(C(e), C(i)) > W(C(n), C(o)) ? s.important = "horizontal" : s.important = "vertical",
                f.using.call(this, t, s)
            }
            ),
            r.offset(x.extend(h, {
                using: t
            }))
        })) : h.apply(this, arguments)
    }
    ,
    x.ui.position = {
        fit: {
            left: function(t, e) {
                var i, n = e.within, o = n.isWindow ? n.scrollLeft : n.offset.left, n = n.width, s = t.left - e.collisionPosition.marginLeft, r = o - s, l = s + e.collisionWidth - n - o;
                e.collisionWidth > n ? 0 < r && l <= 0 ? (i = t.left + r + e.collisionWidth - n - o,
                t.left += r - i) : t.left = !(0 < l && r <= 0) && l < r ? o + n - e.collisionWidth : o : 0 < r ? t.left += r : 0 < l ? t.left -= l : t.left = W(t.left - s, t.left)
            },
            top: function(t, e) {
                var i, n = e.within, n = n.isWindow ? n.scrollTop : n.offset.top, o = e.within.height, s = t.top - e.collisionPosition.marginTop, r = n - s, l = s + e.collisionHeight - o - n;
                e.collisionHeight > o ? 0 < r && l <= 0 ? (i = t.top + r + e.collisionHeight - o - n,
                t.top += r - i) : t.top = !(0 < l && r <= 0) && l < r ? n + o - e.collisionHeight : n : 0 < r ? t.top += r : 0 < l ? t.top -= l : t.top = W(t.top - s, t.top)
            }
        },
        flip: {
            left: function(t, e) {
                var i = e.within
                  , n = i.offset.left + i.scrollLeft
                  , o = i.width
                  , i = i.isWindow ? i.scrollLeft : i.offset.left
                  , s = t.left - e.collisionPosition.marginLeft
                  , r = s - i
                  , s = s + e.collisionWidth - o - i
                  , l = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0
                  , a = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0
                  , h = -2 * e.offset[0];
                r < 0 ? ((o = t.left + l + a + h + e.collisionWidth - o - n) < 0 || o < C(r)) && (t.left += l + a + h) : 0 < s && (0 < (n = t.left - e.collisionPosition.marginLeft + l + a + h - i) || C(n) < s) && (t.left += l + a + h)
            },
            top: function(t, e) {
                var i = e.within
                  , n = i.offset.top + i.scrollTop
                  , o = i.height
                  , i = i.isWindow ? i.scrollTop : i.offset.top
                  , s = t.top - e.collisionPosition.marginTop
                  , r = s - i
                  , s = s + e.collisionHeight - o - i
                  , l = "top" === e.my[1] ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0
                  , a = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0
                  , h = -2 * e.offset[1];
                r < 0 ? ((o = t.top + l + a + h + e.collisionHeight - o - n) < 0 || o < C(r)) && (t.top += l + a + h) : 0 < s && (0 < (n = t.top - e.collisionPosition.marginTop + l + a + h - i) || C(n) < s) && (t.top += l + a + h)
            }
        },
        flipfit: {
            left: function() {
                x.ui.position.flip.left.apply(this, arguments),
                x.ui.position.fit.left.apply(this, arguments)
            },
            top: function() {
                x.ui.position.flip.top.apply(this, arguments),
                x.ui.position.fit.top.apply(this, arguments)
            }
        }
    },
    x.ui.safeActiveElement = function(e) {
        var i;
        try {
            i = e.activeElement
        } catch (t) {
            i = e.body
        }
        return i = (i = i || e.body).nodeName ? i : e.body
    }
    ,
    x.ui.safeBlur = function(t) {
        t && "body" !== t.nodeName.toLowerCase() && x(t).trigger("blur")
    }
    ,
    /*!
 * jQuery UI Scroll Parent 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    x.fn.scrollParent = function(t) {
        var e = this.css("position")
          , i = "absolute" === e
          , n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/
          , t = this.parents().filter(function() {
            var t = x(this);
            return (!i || "static" !== t.css("position")) && n.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
        }).eq(0);
        return "fixed" !== e && t.length ? t : x(this[0].ownerDocument || document)
    }
    ,
    /*!
 * jQuery UI Tabbable 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    x.extend(x.expr.pseudos, {
        tabbable: function(t) {
            var e = x.attr(t, "tabindex")
              , i = null != e;
            return (!i || 0 <= e) && x.ui.focusable(t, i)
        }
    }),
    /*!
 * jQuery UI Unique ID 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    x.fn.extend({
        uniqueId: (u = 0,
        function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++u)
            })
        }
        ),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && x(this).removeAttr("id")
            })
        }
    });
    /*!
 * jQuery UI Widget 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    var f, c = 0, d = Array.prototype.hasOwnProperty, p = Array.prototype.slice;
    x.cleanData = (f = x.cleanData,
    function(t) {
        for (var e, i, n = 0; null != (i = t[n]); n++)
            (e = x._data(i, "events")) && e.remove && x(i).triggerHandler("remove");
        f(t)
    }
    ),
    x.widget = function(t, i, e) {
        var n, o, s, r = {}, l = t.split(".")[0], a = l + "-" + (t = t.split(".")[1]);
        return e || (e = i,
        i = x.Widget),
        Array.isArray(e) && (e = x.extend.apply(null, [{}].concat(e))),
        x.expr.pseudos[a.toLowerCase()] = function(t) {
            return !!x.data(t, a)
        }
        ,
        x[l] = x[l] || {},
        n = x[l][t],
        o = x[l][t] = function(t, e) {
            if (!this || !this._createWidget)
                return new o(t,e);
            arguments.length && this._createWidget(t, e)
        }
        ,
        x.extend(o, n, {
            version: e.version,
            _proto: x.extend({}, e),
            _childConstructors: []
        }),
        (s = new i).options = x.widget.extend({}, s.options),
        x.each(e, function(e, n) {
            function o() {
                return i.prototype[e].apply(this, arguments)
            }
            function s(t) {
                return i.prototype[e].apply(this, t)
            }
            r[e] = "function" != typeof n ? n : function() {
                var t, e = this._super, i = this._superApply;
                return this._super = o,
                this._superApply = s,
                t = n.apply(this, arguments),
                this._super = e,
                this._superApply = i,
                t
            }
        }),
        o.prototype = x.widget.extend(s, {
            widgetEventPrefix: n && s.widgetEventPrefix || t
        }, r, {
            constructor: o,
            namespace: l,
            widgetName: t,
            widgetFullName: a
        }),
        n ? (x.each(n._childConstructors, function(t, e) {
            var i = e.prototype;
            x.widget(i.namespace + "." + i.widgetName, o, e._proto)
        }),
        delete n._childConstructors) : i._childConstructors.push(o),
        x.widget.bridge(t, o),
        o
    }
    ,
    x.widget.extend = function(t) {
        for (var e, i, n = p.call(arguments, 1), o = 0, s = n.length; o < s; o++)
            for (e in n[o])
                i = n[o][e],
                d.call(n[o], e) && void 0 !== i && (x.isPlainObject(i) ? t[e] = x.isPlainObject(t[e]) ? x.widget.extend({}, t[e], i) : x.widget.extend({}, i) : t[e] = i);
        return t
    }
    ,
    x.widget.bridge = function(s, e) {
        var r = e.prototype.widgetFullName || s;
        x.fn[s] = function(i) {
            var t = "string" == typeof i
              , n = p.call(arguments, 1)
              , o = this;
            return t ? this.length || "instance" !== i ? this.each(function() {
                var t, e = x.data(this, r);
                return "instance" === i ? (o = e,
                !1) : e ? "function" != typeof e[i] || "_" === i.charAt(0) ? x.error("no such method '" + i + "' for " + s + " widget instance") : (t = e[i].apply(e, n)) !== e && void 0 !== t ? (o = t && t.jquery ? o.pushStack(t.get()) : t,
                !1) : void 0 : x.error("cannot call methods on " + s + " prior to initialization; attempted to call method '" + i + "'")
            }) : o = void 0 : (n.length && (i = x.widget.extend.apply(null, [i].concat(n))),
            this.each(function() {
                var t = x.data(this, r);
                t ? (t.option(i || {}),
                t._init && t._init()) : x.data(this, r, new e(i,this))
            })),
            o
        }
    }
    ,
    x.Widget = function() {}
    ,
    x.Widget._childConstructors = [],
    x.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            classes: {},
            disabled: !1,
            create: null
        },
        _createWidget: function(t, e) {
            e = x(e || this.defaultElement || this)[0],
            this.element = x(e),
            this.uuid = c++,
            this.eventNamespace = "." + this.widgetName + this.uuid,
            this.bindings = x(),
            this.hoverable = x(),
            this.focusable = x(),
            this.classesElementLookup = {},
            e !== this && (x.data(e, this.widgetFullName, this),
            this._on(!0, this.element, {
                remove: function(t) {
                    t.target === e && this.destroy()
                }
            }),
            this.document = x(e.style ? e.ownerDocument : e.document || e),
            this.window = x(this.document[0].defaultView || this.document[0].parentWindow)),
            this.options = x.widget.extend({}, this.options, this._getCreateOptions(), t),
            this._create(),
            this.options.disabled && this._setOptionDisabled(this.options.disabled),
            this._trigger("create", null, this._getCreateEventData()),
            this._init()
        },
        _getCreateOptions: function() {
            return {}
        },
        _getCreateEventData: x.noop,
        _create: x.noop,
        _init: x.noop,
        destroy: function() {
            var i = this;
            this._destroy(),
            x.each(this.classesElementLookup, function(t, e) {
                i._removeClass(e, t)
            }),
            this.element.off(this.eventNamespace).removeData(this.widgetFullName),
            this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),
            this.bindings.off(this.eventNamespace)
        },
        _destroy: x.noop,
        widget: function() {
            return this.element
        },
        option: function(t, e) {
            var i, n, o, s = t;
            if (0 === arguments.length)
                return x.widget.extend({}, this.options);
            if ("string" == typeof t)
                if (s = {},
                t = (i = t.split(".")).shift(),
                i.length) {
                    for (n = s[t] = x.widget.extend({}, this.options[t]),
                    o = 0; o < i.length - 1; o++)
                        n[i[o]] = n[i[o]] || {},
                        n = n[i[o]];
                    if (t = i.pop(),
                    1 === arguments.length)
                        return void 0 === n[t] ? null : n[t];
                    n[t] = e
                } else {
                    if (1 === arguments.length)
                        return void 0 === this.options[t] ? null : this.options[t];
                    s[t] = e
                }
            return this._setOptions(s),
            this
        },
        _setOptions: function(t) {
            for (var e in t)
                this._setOption(e, t[e]);
            return this
        },
        _setOption: function(t, e) {
            return "classes" === t && this._setOptionClasses(e),
            this.options[t] = e,
            "disabled" === t && this._setOptionDisabled(e),
            this
        },
        _setOptionClasses: function(t) {
            var e, i, n;
            for (e in t)
                n = this.classesElementLookup[e],
                t[e] !== this.options.classes[e] && n && n.length && (i = x(n.get()),
                this._removeClass(n, e),
                i.addClass(this._classes({
                    element: i,
                    keys: e,
                    classes: t,
                    add: !0
                })))
        },
        _setOptionDisabled: function(t) {
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t),
            t && (this._removeClass(this.hoverable, null, "ui-state-hover"),
            this._removeClass(this.focusable, null, "ui-state-focus"))
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _classes: function(o) {
            var s = []
              , r = this;
            function t(t, e) {
                for (var i, n = 0; n < t.length; n++)
                    i = r.classesElementLookup[t[n]] || x(),
                    i = o.add ? (function() {
                        var i = [];
                        o.element.each(function(t, e) {
                            x.map(r.classesElementLookup, function(t) {
                                return t
                            }).some(function(t) {
                                return t.is(e)
                            }) || i.push(e)
                        }),
                        r._on(x(i), {
                            remove: "_untrackClassesElement"
                        })
                    }(),
                    x(x.uniqueSort(i.get().concat(o.element.get())))) : x(i.not(o.element).get()),
                    r.classesElementLookup[t[n]] = i,
                    s.push(t[n]),
                    e && o.classes[t[n]] && s.push(o.classes[t[n]])
            }
            return (o = x.extend({
                element: this.element,
                classes: this.options.classes || {}
            }, o)).keys && t(o.keys.match(/\S+/g) || [], !0),
            o.extra && t(o.extra.match(/\S+/g) || []),
            s.join(" ")
        },
        _untrackClassesElement: function(i) {
            var n = this;
            x.each(n.classesElementLookup, function(t, e) {
                -1 !== x.inArray(i.target, e) && (n.classesElementLookup[t] = x(e.not(i.target).get()))
            }),
            this._off(x(i.target))
        },
        _removeClass: function(t, e, i) {
            return this._toggleClass(t, e, i, !1)
        },
        _addClass: function(t, e, i) {
            return this._toggleClass(t, e, i, !0)
        },
        _toggleClass: function(t, e, i, n) {
            var o = "string" == typeof t || null === t
              , e = {
                extra: o ? e : i,
                keys: o ? t : e,
                element: o ? this.element : t,
                add: n = "boolean" == typeof n ? n : i
            };
            return e.element.toggleClass(this._classes(e), n),
            this
        },
        _on: function(o, s, t) {
            var r, l = this;
            "boolean" != typeof o && (t = s,
            s = o,
            o = !1),
            t ? (s = r = x(s),
            this.bindings = this.bindings.add(s)) : (t = s,
            s = this.element,
            r = this.widget()),
            x.each(t, function(t, e) {
                function i() {
                    if (o || !0 !== l.options.disabled && !x(this).hasClass("ui-state-disabled"))
                        return ("string" == typeof e ? l[e] : e).apply(l, arguments)
                }
                "string" != typeof e && (i.guid = e.guid = e.guid || i.guid || x.guid++);
                var t = t.match(/^([\w:-]*)\s*(.*)$/)
                  , n = t[1] + l.eventNamespace
                  , t = t[2];
                t ? r.on(n, t, i) : s.on(n, i)
            })
        },
        _off: function(t, e) {
            e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace,
            t.off(e),
            this.bindings = x(this.bindings.not(t).get()),
            this.focusable = x(this.focusable.not(t).get()),
            this.hoverable = x(this.hoverable.not(t).get())
        },
        _delay: function(t, e) {
            var i = this;
            return setTimeout(function() {
                return ("string" == typeof t ? i[t] : t).apply(i, arguments)
            }, e || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t),
            this._on(t, {
                mouseenter: function(t) {
                    this._addClass(x(t.currentTarget), null, "ui-state-hover")
                },
                mouseleave: function(t) {
                    this._removeClass(x(t.currentTarget), null, "ui-state-hover")
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t),
            this._on(t, {
                focusin: function(t) {
                    this._addClass(x(t.currentTarget), null, "ui-state-focus")
                },
                focusout: function(t) {
                    this._removeClass(x(t.currentTarget), null, "ui-state-focus")
                }
            })
        },
        _trigger: function(t, e, i) {
            var n, o, s = this.options[t];
            if (i = i || {},
            (e = x.Event(e)).type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(),
            e.target = this.element[0],
            o = e.originalEvent)
                for (n in o)
                    n in e || (e[n] = o[n]);
            return this.element.trigger(e, i),
            !("function" == typeof s && !1 === s.apply(this.element[0], [e].concat(i)) || e.isDefaultPrevented())
        }
    },
    x.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(s, r) {
        x.Widget.prototype["_" + s] = function(e, t, i) {
            var n, o = (t = "string" == typeof t ? {
                effect: t
            } : t) ? !0 !== t && "number" != typeof t && t.effect || r : s;
            "number" == typeof (t = t || {}) ? t = {
                duration: t
            } : !0 === t && (t = {}),
            n = !x.isEmptyObject(t),
            t.complete = i,
            t.delay && e.delay(t.delay),
            n && x.effects && x.effects.effect[o] ? e[s](t) : o !== s && e[o] ? e[o](t.duration, t.easing, i) : e.queue(function(t) {
                x(this)[s](),
                i && i.call(e[0]),
                t()
            })
        }
    })
});
/*! elementor - v3.12.2 - 23-04-2023 */
(self.webpackChunkelementor = self.webpackChunkelementor || []).push([[819], {
    9220: (e,t,n)=>{
        "use strict";
        var s = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = s(n(8135));
        class _default extends elementorModules.ViewModule {
            constructor() {
                super(...arguments),
                this.documents = {},
                this.initDocumentClasses(),
                this.attachDocumentsClasses()
            }
            getDefaultSettings() {
                return {
                    selectors: {
                        document: ".elementor"
                    }
                }
            }
            getDefaultElements() {
                const e = this.getSettings("selectors");
                return {
                    $documents: jQuery(e.document)
                }
            }
            initDocumentClasses() {
                this.documentClasses = {
                    base: i.default
                },
                elementorFrontend.hooks.doAction("elementor/frontend/documents-manager/init-classes", this)
            }
            addDocumentClass(e, t) {
                this.documentClasses[e] = t
            }
            attachDocumentsClasses() {
                this.elements.$documents.each(((e,t)=>this.attachDocumentClass(jQuery(t))))
            }
            attachDocumentClass(e) {
                const t = e.data()
                  , n = t.elementorId
                  , s = t.elementorType
                  , i = this.documentClasses[s] || this.documentClasses.base;
                this.documents[n] = new i({
                    $element: e,
                    id: n
                })
            }
        }
        t.default = _default
    }
    ,
    9804: (e,t,n)=>{
        "use strict";
        var s = n(3203)
          , i = s(n(6397))
          , o = s(n(8704))
          , r = s(n(4985))
          , a = s(n(7537))
          , l = s(n(355))
          , d = s(n(2804))
          , c = s(n(3384));
        e.exports = function(e) {
            var t = this;
            const s = {};
            this.elementsHandlers = {
                "accordion.default": ()=>n.e(209).then(n.bind(n, 8470)),
                "alert.default": ()=>n.e(745).then(n.bind(n, 9269)),
                "counter.default": ()=>n.e(120).then(n.bind(n, 7884)),
                "progress.default": ()=>n.e(192).then(n.bind(n, 1351)),
                "tabs.default": ()=>n.e(520).then(n.bind(n, 9459)),
                "toggle.default": ()=>n.e(181).then(n.bind(n, 2)),
                "video.default": ()=>n.e(791).then(n.bind(n, 5363)),
                "image-carousel.default": ()=>n.e(268).then(n.bind(n, 5914)),
                "text-editor.default": ()=>n.e(357).then(n.bind(n, 1327)),
                "wp-widget-media_audio.default": ()=>n.e(52).then(n.bind(n, 7602))
            },
            elementorFrontendConfig.experimentalFeatures["nested-elements"] && (this.elementsHandlers["nested-tabs.default"] = ()=>Promise.resolve().then(n.bind(n, 7323)));
            const addElementsHandlers = ()=>{
                this.elementsHandlers.section = [d.default, ...o.default, l.default, c.default],
                this.elementsHandlers.container = [...o.default],
                elementorFrontend.isEditMode() && this.elementsHandlers.container.push(...r.default),
                this.elementsHandlers.column = a.default,
                e.each(this.elementsHandlers, ((e,t)=>{
                    const n = e.split(".");
                    e = n[0];
                    const s = n[1] || null;
                    this.attachHandler(e, t, s)
                }
                ))
            }
              , isClassHandler = e=>e.prototype?.getUniqueHandlerID;
            this.addHandler = function(t, n) {
                const i = n.$element.data("model-cid");
                let o;
                if (i) {
                    o = t.prototype.getConstructorID(),
                    s[i] || (s[i] = {});
                    const e = s[i][o];
                    e && e.onDestroy()
                }
                const r = new t(n);
                elementorFrontend.hooks.doAction(`frontend/element_handler_ready/${n.elementName}`, n.$element, e),
                i && (s[i][o] = r)
            }
            ,
            this.attachHandler = (e,n,s)=>{
                Array.isArray(n) || (n = [n]),
                n.forEach((n=>function(e, n) {
                    let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "default";
                    s = s ? "." + s : "";
                    const i = e + s;
                    elementorFrontend.hooks.addAction(`frontend/element_ready/${i}`, (e=>{
                        if (isClassHandler(n))
                            t.addHandler(n, {
                                $element: e,
                                elementName: i
                            }, !0);
                        else {
                            const s = n();
                            if (!s)
                                return;
                            s instanceof Promise ? s.then((n=>{
                                let {default: s} = n;
                                t.addHandler(s, {
                                    $element: e,
                                    elementName: i
                                }, !0)
                            }
                            )) : t.addHandler(s, {
                                $element: e,
                                elementName: i
                            }, !0)
                        }
                    }
                    ))
                }(e, n, s)))
            }
            ,
            this.getHandler = function(e) {
                const t = this.elementsHandlers[e];
                return isClassHandler(t) ? t : new Promise((e=>{
                    t().then((t=>{
                        let {default: n} = t;
                        e(n)
                    }
                    ))
                }
                ))
            }
            ,
            this.getHandlers = function(e) {
                return elementorDevTools.deprecation.deprecated("getHandlers", "3.1.0", "elementorFrontend.elementsHandler.getHandler"),
                e ? this.getHandler(e) : this.elementsHandlers
            }
            ,
            this.runReadyTrigger = function(t) {
                if (elementorFrontend.config.is_static)
                    return;
                const n = jQuery(t)
                  , s = n.attr("data-element_type");
                if (s && (elementorFrontend.hooks.doAction("frontend/element_ready/global", n, e),
                elementorFrontend.hooks.doAction(`frontend/element_ready/${s}`, n, e),
                "widget" === s)) {
                    const t = n.attr("data-widget_type");
                    elementorFrontend.hooks.doAction(`frontend/element_ready/${t}`, n, e)
                }
            }
            ,
            this.init = ()=>{
                elementorFrontend.hooks.addAction("frontend/element_ready/global", i.default),
                addElementsHandlers()
            }
        }
    }
    ,
    5654: (e,t,n)=>{
        "use strict";
        var s = n(3203);
        n(59);
        var i = s(n(9220))
          , o = s(n(5107))
          , r = s(n(3308))
          , a = s(n(1604))
          , l = s(n(1911))
          , d = s(n(4773))
          , c = s(n(2064))
          , u = s(n(8628))
          , h = s(n(8646))
          , m = s(n(6866))
          , g = s(n(4375))
          , p = s(n(6404))
          , f = s(n(6046))
          , v = s(n(1322))
          , b = n(6028);
        const _ = n(9469)
          , y = n(9804)
          , w = n(3346);
        class Frontend extends elementorModules.ViewModule {
            constructor() {
                super(...arguments),
                this.config = elementorFrontendConfig,
                this.config.legacyMode = {
                    get elementWrappers() {
                        return elementorFrontend.isEditMode() && window.top.elementorDevTools.deprecation.deprecated("elementorFrontend.config.legacyMode.elementWrappers", "3.1.0", "elementorFrontend.config.experimentalFeatures.e_dom_optimization"),
                        !elementorFrontend.config.experimentalFeatures.e_dom_optimization
                    }
                },
                this.populateActiveBreakpointsConfig()
            }
            get Module() {
                return this.isEditMode() && parent.elementorDevTools.deprecation.deprecated("elementorFrontend.Module", "2.5.0", "elementorModules.frontend.handlers.Base"),
                elementorModules.frontend.handlers.Base
            }
            getDefaultSettings() {
                return {
                    selectors: {
                        elementor: ".elementor",
                        adminBar: "#wpadminbar"
                    }
                }
            }
            getDefaultElements() {
                const e = {
                    window,
                    $window: jQuery(window),
                    $document: jQuery(document),
                    $head: jQuery(document.head),
                    $body: jQuery(document.body),
                    $deviceMode: jQuery("<span>", {
                        id: "elementor-device-mode",
                        class: "elementor-screen-only"
                    })
                };
                return e.$body.append(e.$deviceMode),
                e
            }
            bindEvents() {
                this.elements.$window.on("resize", (()=>this.setDeviceModeData()))
            }
            getElements(e) {
                return this.getItems(this.elements, e)
            }
            getPageSettings(e) {
                const t = this.isEditMode() ? elementor.settings.page.model.attributes : this.config.settings.page;
                return this.getItems(t, e)
            }
            getGeneralSettings(e) {
                return this.isEditMode() && parent.elementorDevTools.deprecation.deprecated("getGeneralSettings", "3.0.0", "getKitSettings and remove the `elementor_` prefix"),
                this.getKitSettings(`elementor_ ${e}`)
            }
            getKitSettings(e) {
                return this.getItems(this.config.kit, e)
            }
            getCurrentDeviceMode() {
                return getComputedStyle(this.elements.$deviceMode[0], ":after").content.replace(/"/g, "")
            }
            getDeviceSetting(e, t, n) {
                if ("widescreen" === e)
                    return this.getWidescreenSetting(t, n);
                const s = elementorFrontend.breakpoints.getActiveBreakpointsList({
                    largeToSmall: !0,
                    withDesktop: !0
                });
                let i = s.indexOf(e);
                for (; i > 0; ) {
                    const e = t[n + "_" + s[i]];
                    if (e || 0 === e)
                        return e;
                    i--
                }
                return t[n]
            }
            getWidescreenSetting(e, t) {
                const n = t + "_widescreen";
                let s;
                return s = e[n] ? e[n] : e[t],
                s
            }
            getCurrentDeviceSetting(e, t) {
                return this.getDeviceSetting(elementorFrontend.getCurrentDeviceMode(), e, t)
            }
            isEditMode() {
                return this.config.environmentMode.edit
            }
            isWPPreviewMode() {
                return this.config.environmentMode.wpPreview
            }
            initDialogsManager() {
                let e;
                this.getDialogsManager = ()=>(e || (e = new DialogsManager.Instance),
                e)
            }
            initOnReadyComponents() {
                this.utils = {
                    youtube: new a.default,
                    vimeo: new l.default,
                    baseVideoLoader: new d.default,
                    anchors: new w,
                    get lightbox() {
                        return h.default.getLightbox()
                    },
                    urlActions: new c.default,
                    swiper: u.default,
                    environment: r.default,
                    assetsLoader: new m.default,
                    escapeHTML: b.escapeHTML,
                    events: p.default,
                    controls: new v.default
                },
                this.modules = {
                    StretchElement: elementorModules.frontend.tools.StretchElement,
                    Masonry: elementorModules.utils.Masonry
                },
                this.elementsHandler.init(),
                this.isEditMode() ? elementor.once("document:loaded", (()=>this.onDocumentLoaded())) : this.onDocumentLoaded()
            }
            initOnReadyElements() {
                this.elements.$wpAdminBar = this.elements.$document.find(this.getSettings("selectors.adminBar"))
            }
            addUserAgentClasses() {
                for (const [e,t] of Object.entries(r.default))
                    t && this.elements.$body.addClass("e--ua-" + e)
            }
            setDeviceModeData() {
                this.elements.$body.attr("data-elementor-device-mode", this.getCurrentDeviceMode())
            }
            addListenerOnce(e, t, n, s) {
                if (s || (s = this.elements.$window),
                this.isEditMode())
                    if (this.removeListeners(e, t, s),
                    s instanceof jQuery) {
                        const i = t + "." + e;
                        s.on(i, n)
                    } else
                        s.on(t, n, e);
                else
                    s.on(t, n)
            }
            removeListeners(e, t, n, s) {
                if (s || (s = this.elements.$window),
                s instanceof jQuery) {
                    const i = t + "." + e;
                    s.off(i, n)
                } else
                    s.off(t, n, e)
            }
            debounce(e, t) {
                let n;
                return function() {
                    const s = this
                      , i = arguments
                      , o = !n;
                    clearTimeout(n),
                    n = setTimeout((()=>{
                        n = null,
                        e.apply(s, i)
                    }
                    ), t),
                    o && e.apply(s, i)
                }
            }
            waypoint(e, t, n) {
                n = jQuery.extend({
                    offset: "100%",
                    triggerOnce: !0
                }, n);
                return e.elementorWaypoint((function() {
                    const e = this.element || this
                      , s = t.apply(e, arguments);
                    return n.triggerOnce && this.destroy && this.destroy(),
                    s
                }
                ), n)
            }
            muteMigrationTraces() {
                jQuery.migrateMute = !0,
                jQuery.migrateTrace = !1
            }
            initModules() {
                const e = {
                    shapes: f.default
                };
                elementorFrontend.trigger("elementor/modules/init:before"),
                elementorFrontend.trigger("elementor/modules/init/before"),
                Object.entries(e).forEach((e=>{
                    let[t,n] = e;
                    this.modulesHandlers[t] = new n
                }
                ))
            }
            populateActiveBreakpointsConfig() {
                this.config.responsive.activeBreakpoints = {},
                Object.entries(this.config.responsive.breakpoints).forEach((e=>{
                    let[t,n] = e;
                    n.is_enabled && (this.config.responsive.activeBreakpoints[t] = n)
                }
                ))
            }
            init() {
                this.hooks = new _,
                this.breakpoints = new g.default(this.config.responsive),
                this.storage = new o.default,
                this.elementsHandler = new y(jQuery),
                this.modulesHandlers = {},
                this.addUserAgentClasses(),
                this.setDeviceModeData(),
                this.initDialogsManager(),
                this.isEditMode() && this.muteMigrationTraces(),
                p.default.dispatch(this.elements.$window, "elementor/frontend/init"),
                this.initModules(),
                this.initOnReadyElements(),
                this.initOnReadyComponents()
            }
            onDocumentLoaded() {
                this.documentsManager = new i.default,
                this.trigger("components:init"),
                new h.default
            }
        }
        window.elementorFrontend = new Frontend,
        elementorFrontend.isEditMode() || jQuery((()=>elementorFrontend.init()))
    }
    ,
    4058: (e,t)=>{
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class BackgroundSlideshow extends elementorModules.frontend.handlers.SwiperBase {
            getDefaultSettings() {
                return {
                    classes: {
                        swiperContainer: `elementor-background-slideshow ${elementorFrontend.config.swiperClass}`,
                        swiperWrapper: "swiper-wrapper",
                        swiperSlide: "elementor-background-slideshow__slide swiper-slide",
                        swiperPreloader: "swiper-lazy-preloader",
                        slideBackground: "elementor-background-slideshow__slide__image",
                        kenBurns: "elementor-ken-burns",
                        kenBurnsActive: "elementor-ken-burns--active",
                        kenBurnsIn: "elementor-ken-burns--in",
                        kenBurnsOut: "elementor-ken-burns--out"
                    }
                }
            }
            getSwiperOptions() {
                const e = this.getElementSettings()
                  , t = {
                    grabCursor: !1,
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    loop: "yes" === e.background_slideshow_loop,
                    speed: e.background_slideshow_transition_duration,
                    autoplay: {
                        delay: e.background_slideshow_slide_duration,
                        stopOnLastSlide: !e.background_slideshow_loop
                    },
                    handleElementorBreakpoints: !0,
                    on: {
                        slideChange: ()=>{
                            e.background_slideshow_ken_burns && this.handleKenBurns()
                        }
                    }
                };
                switch ("yes" === e.background_slideshow_loop && (t.loopedSlides = this.getSlidesCount()),
                e.background_slideshow_slide_transition) {
                case "fade":
                    t.effect = "fade",
                    t.fadeEffect = {
                        crossFade: !0
                    };
                    break;
                case "slide_down":
                    t.autoplay.reverseDirection = !0,
                    t.direction = "vertical";
                    break;
                case "slide_up":
                    t.direction = "vertical"
                }
                return "yes" === e.background_slideshow_lazyload && (t.lazy = {
                    loadPrevNext: !0,
                    loadPrevNextAmount: 1
                }),
                t
            }
            buildSwiperElements() {
                const e = this.getSettings("classes")
                  , t = this.getElementSettings()
                  , n = "slide_left" === t.background_slideshow_slide_transition ? "ltr" : "rtl"
                  , s = jQuery("<div>", {
                    class: e.swiperContainer,
                    dir: n
                })
                  , i = jQuery("<div>", {
                    class: e.swiperWrapper
                })
                  , o = t.background_slideshow_ken_burns
                  , r = "yes" === t.background_slideshow_lazyload;
                let a = e.slideBackground;
                if (o) {
                    a += " " + e.kenBurns;
                    const n = "in" === t.background_slideshow_ken_burns_zoom_direction ? "kenBurnsIn" : "kenBurnsOut";
                    a += " " + e[n]
                }
                r && (a += " swiper-lazy"),
                this.elements.$slides = jQuery(),
                t.background_slideshow_gallery.forEach((t=>{
                    const n = jQuery("<div>", {
                        class: e.swiperSlide
                    });
                    let s;
                    if (r) {
                        const n = jQuery("<div>", {
                            class: e.swiperPreloader
                        });
                        s = jQuery("<div>", {
                            class: a,
                            "data-background": t.url
                        }),
                        s.append(n)
                    } else
                        s = jQuery("<div>", {
                            class: a,
                            style: 'background-image: url("' + t.url + '");'
                        });
                    n.append(s),
                    i.append(n),
                    this.elements.$slides = this.elements.$slides.add(n)
                }
                )),
                s.append(i),
                this.$element.prepend(s),
                this.elements.$backgroundSlideShowContainer = s
            }
            async initSlider() {
                if (1 >= this.getSlidesCount())
                    return;
                const e = this.getElementSettings()
                  , t = elementorFrontend.utils.swiper;
                this.swiper = await new t(this.elements.$backgroundSlideShowContainer,this.getSwiperOptions()),
                this.elements.$backgroundSlideShowContainer.data("swiper", this.swiper),
                e.background_slideshow_ken_burns && this.handleKenBurns()
            }
            activate() {
                this.buildSwiperElements(),
                this.initSlider()
            }
            deactivate() {
                this.swiper && (this.swiper.destroy(),
                this.elements.$backgroundSlideShowContainer.remove())
            }
            run() {
                "slideshow" === this.getElementSettings("background_background") ? this.activate() : this.deactivate()
            }
            onInit() {
                super.onInit(),
                this.getElementSettings("background_slideshow_gallery") && this.run()
            }
            onDestroy() {
                super.onDestroy(),
                this.deactivate()
            }
            onElementChange(e) {
                "background_background" === e && this.run()
            }
        }
        t.default = BackgroundSlideshow
    }
    ,
    9501: (e,t)=>{
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class BackgroundVideo extends elementorModules.frontend.handlers.Base {
            getDefaultSettings() {
                return {
                    selectors: {
                        backgroundVideoContainer: ".elementor-background-video-container",
                        backgroundVideoEmbed: ".elementor-background-video-embed",
                        backgroundVideoHosted: ".elementor-background-video-hosted"
                    }
                }
            }
            getDefaultElements() {
                const e = this.getSettings("selectors")
                  , t = {
                    $backgroundVideoContainer: this.$element.find(e.backgroundVideoContainer)
                };
                return t.$backgroundVideoEmbed = t.$backgroundVideoContainer.children(e.backgroundVideoEmbed),
                t.$backgroundVideoHosted = t.$backgroundVideoContainer.children(e.backgroundVideoHosted),
                t
            }
            calcVideosSize(e) {
                let t = "16:9";
                "vimeo" === this.videoType && (t = e[0].width + ":" + e[0].height);
                const n = this.elements.$backgroundVideoContainer.outerWidth()
                  , s = this.elements.$backgroundVideoContainer.outerHeight()
                  , i = t.split(":")
                  , o = i[0] / i[1]
                  , r = n / s > o;
                return {
                    width: r ? n : s * o,
                    height: r ? n / o : s
                }
            }
            changeVideoSize() {
                if ("hosted" !== this.videoType && !this.player)
                    return;
                let e;
                if ("youtube" === this.videoType ? e = jQuery(this.player.getIframe()) : "vimeo" === this.videoType ? e = jQuery(this.player.element) : "hosted" === this.videoType && (e = this.elements.$backgroundVideoHosted),
                !e)
                    return;
                const t = this.calcVideosSize(e);
                e.width(t.width).height(t.height)
            }
            startVideoLoop(e) {
                if (!this.player.getIframe().contentWindow)
                    return;
                const t = this.getElementSettings()
                  , n = t.background_video_start || 0
                  , s = t.background_video_end;
                if (!t.background_play_once || e) {
                    if (this.player.seekTo(n),
                    s) {
                        setTimeout((()=>{
                            this.startVideoLoop(!1)
                        }
                        ), 1e3 * (s - n + 1))
                    }
                } else
                    this.player.stopVideo()
            }
            prepareVimeoVideo(e, t) {
                const n = this.getElementSettings()
                  , s = {
                    url: t,
                    width: this.elements.$backgroundVideoContainer.outerWidth().width,
                    autoplay: !0,
                    loop: !n.background_play_once,
                    transparent: !1,
                    background: !0,
                    muted: !0
                };
                n.background_privacy_mode && (s.dnt = !0),
                this.player = new e.Player(this.elements.$backgroundVideoContainer,s),
                this.handleVimeoStartEndTimes(n),
                this.player.ready().then((()=>{
                    jQuery(this.player.element).addClass("elementor-background-video-embed"),
                    this.changeVideoSize()
                }
                ))
            }
            handleVimeoStartEndTimes(e) {
                e.background_video_start && this.player.on("play", (t=>{
                    0 === t.seconds && this.player.setCurrentTime(e.background_video_start)
                }
                )),
                this.player.on("timeupdate", (t=>{
                    e.background_video_end && e.background_video_end < t.seconds && (e.background_play_once ? this.player.pause() : this.player.setCurrentTime(e.background_video_start)),
                    this.player.getDuration().then((n=>{
                        e.background_video_start && !e.background_video_end && t.seconds > n - .5 && this.player.setCurrentTime(e.background_video_start)
                    }
                    ))
                }
                ))
            }
            prepareYTVideo(e, t) {
                const n = this.elements.$backgroundVideoContainer
                  , s = this.getElementSettings();
                let i = e.PlayerState.PLAYING;
                window.chrome && (i = e.PlayerState.UNSTARTED);
                const o = {
                    videoId: t,
                    events: {
                        onReady: ()=>{
                            this.player.mute(),
                            this.changeVideoSize(),
                            this.startVideoLoop(!0),
                            this.player.playVideo()
                        }
                        ,
                        onStateChange: t=>{
                            switch (t.data) {
                            case i:
                                n.removeClass("elementor-invisible elementor-loading");
                                break;
                            case e.PlayerState.ENDED:
                                "function" == typeof this.player.seekTo && this.player.seekTo(s.background_video_start || 0),
                                s.background_play_once && this.player.destroy()
                            }
                        }
                    },
                    playerVars: {
                        controls: 0,
                        rel: 0,
                        playsinline: 1
                    }
                };
                s.background_privacy_mode && (o.host = "https://www.youtube-nocookie.com",
                o.origin = window.location.hostname),
                n.addClass("elementor-loading elementor-invisible"),
                this.player = new e.Player(this.elements.$backgroundVideoEmbed[0],o)
            }
            activate() {
                let e, t = this.getElementSettings("background_video_link");
                const n = this.getElementSettings("background_play_once");
                if (-1 !== t.indexOf("vimeo.com") ? (this.videoType = "vimeo",
                this.apiProvider = elementorFrontend.utils.vimeo) : t.match(/^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com)/) && (this.videoType = "youtube",
                this.apiProvider = elementorFrontend.utils.youtube),
                this.apiProvider)
                    e = this.apiProvider.getVideoIDFromURL(t),
                    this.apiProvider.onApiReady((n=>{
                        "youtube" === this.videoType && this.prepareYTVideo(n, e),
                        "vimeo" === this.videoType && this.prepareVimeoVideo(n, t)
                    }
                    ));
                else {
                    this.videoType = "hosted";
                    const e = this.getElementSettings("background_video_start")
                      , s = this.getElementSettings("background_video_end");
                    (e || s) && (t += "#t=" + (e || 0) + (s ? "," + s : "")),
                    this.elements.$backgroundVideoHosted.attr("src", t).one("canplay", this.changeVideoSize.bind(this)),
                    n && this.elements.$backgroundVideoHosted.on("ended", (()=>{
                        this.elements.$backgroundVideoHosted.hide()
                    }
                    ))
                }
                elementorFrontend.elements.$window.on("resize", this.changeVideoSize)
            }
            deactivate() {
                "youtube" === this.videoType && this.player.getIframe() || "vimeo" === this.videoType ? this.player.destroy() : this.elements.$backgroundVideoHosted.removeAttr("src").off("ended"),
                elementorFrontend.elements.$window.off("resize", this.changeVideoSize)
            }
            run() {
                const e = this.getElementSettings();
                (e.background_play_on_mobile || "mobile" !== elementorFrontend.getCurrentDeviceMode()) && ("video" === e.background_background && e.background_video_link ? this.activate() : this.deactivate())
            }
            onInit() {
                super.onInit(...arguments),
                this.changeVideoSize = this.changeVideoSize.bind(this),
                this.run()
            }
            onElementChange(e) {
                "background_background" === e && this.run()
            }
        }
        t.default = BackgroundVideo
    }
    ,
    8704: (e,t,n)=>{
        "use strict";
        var s = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = s(n(4058))
          , o = s(n(9501))
          , r = [i.default, o.default];
        t.default = r
    }
    ,
    7537: (e,t,n)=>{
        "use strict";
        var s = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = [s(n(4058)).default];
        t.default = i
    }
    ,
    4985: (e,t,n)=>{
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var s = [()=>n.e(413).then(n.bind(n, 2929)), ()=>n.e(413).then(n.bind(n, 343))];
        t.default = s
    }
    ,
    6397: (e,t)=>{
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class GlobalHandler extends elementorModules.frontend.handlers.Base {
            getWidgetType() {
                return "global"
            }
            animate() {
                const e = this.$element
                  , t = this.getAnimation();
                if ("none" === t)
                    return void e.removeClass("elementor-invisible");
                const n = this.getElementSettings()
                  , s = n._animation_delay || n.animation_delay || 0;
                e.removeClass(t),
                this.currentAnimation && e.removeClass(this.currentAnimation),
                this.currentAnimation = t,
                setTimeout((()=>{
                    e.removeClass("elementor-invisible").addClass("animated " + t)
                }
                ), s)
            }
            getAnimation() {
                return this.getCurrentDeviceSetting("animation") || this.getCurrentDeviceSetting("_animation")
            }
            onInit() {
                if (super.onInit(...arguments),
                this.getAnimation()) {
                    const e = elementorModules.utils.Scroll.scrollObserver({
                        callback: t=>{
                            t.isInViewport && (this.animate(),
                            e.unobserve(this.$element[0]))
                        }
                    });
                    e.observe(this.$element[0])
                }
            }
            onElementChange(e) {
                /^_?animation/.test(e) && this.animate()
            }
        }
        t.default = e=>{
            elementorFrontend.elementsHandler.addHandler(GlobalHandler, {
                $element: e
            })
        }
    }
    ,
    355: (e,t)=>{
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class HandlesPosition extends elementorModules.frontend.handlers.Base {
            isActive() {
                return elementorFrontend.isEditMode()
            }
            isFirstSection() {
                return this.$element[0] === document.querySelector(".elementor-edit-mode .elementor-top-section")
            }
            isOverflowHidden() {
                return "hidden" === this.$element.css("overflow")
            }
            getOffset() {
                if ("body" === elementor.config.document.container)
                    return this.$element.offset().top;
                const e = jQuery(elementor.config.document.container);
                return this.$element.offset().top - e.offset().top
            }
            setHandlesPosition() {
                const e = elementor.documents.getCurrent();
                if (!e || !e.container.isEditable())
                    return;
                const t = "elementor-section--handles-inside";
                if (elementor.settings.page.model.attributes.scroll_snap)
                    return void this.$element.addClass(t);
                const n = this.isOverflowHidden();
                if (!n && !this.isFirstSection())
                    return;
                const s = n ? 0 : this.getOffset();
                if (s < 25) {
                    this.$element.addClass(t);
                    const e = this.$element.find("> .elementor-element-overlay > .elementor-editor-section-settings");
                    s < -5 ? e.css("top", -s) : e.css("top", "")
                } else
                    this.$element.removeClass(t)
            }
            onInit() {
                this.isActive() && (this.setHandlesPosition(),
                this.$element.on("mouseenter", this.setHandlesPosition.bind(this)))
            }
        }
        t.default = HandlesPosition
    }
    ,
    3384: (e,t)=>{
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class Shapes extends elementorModules.frontend.handlers.Base {
            getDefaultSettings() {
                return {
                    selectors: {
                        container: "> .elementor-shape-%s"
                    },
                    svgURL: elementorFrontend.config.urls.assets + "shapes/"
                }
            }
            getDefaultElements() {
                const e = {}
                  , t = this.getSettings("selectors");
                return e.$topContainer = this.$element.find(t.container.replace("%s", "top")),
                e.$bottomContainer = this.$element.find(t.container.replace("%s", "bottom")),
                e
            }
            isActive() {
                return elementorFrontend.isEditMode()
            }
            getSvgURL(e, t) {
                let n = this.getSettings("svgURL") + t + ".svg";
                return elementor.config.additional_shapes && e in elementor.config.additional_shapes && (n = elementor.config.additional_shapes[e],
                -1 < t.indexOf("-negative") && (n = n.replace(".svg", "-negative.svg"))),
                n
            }
            buildSVG(e) {
                const t = "shape_divider_" + e
                  , n = this.getElementSettings(t)
                  , s = this.elements["$" + e + "Container"];
                if (s.attr("data-shape", n),
                !n)
                    return void s.empty();
                let i = n;
                this.getElementSettings(t + "_negative") && (i += "-negative");
                const o = this.getSvgURL(n, i);
                jQuery.get(o, (e=>{
                    s.empty().append(e.childNodes[0])
                }
                )),
                this.setNegative(e)
            }
            setNegative(e) {
                this.elements["$" + e + "Container"].attr("data-negative", !!this.getElementSettings("shape_divider_" + e + "_negative"))
            }
            onInit() {
                this.isActive(this.getSettings()) && (super.onInit(...arguments),
                ["top", "bottom"].forEach((e=>{
                    this.getElementSettings("shape_divider_" + e) && this.buildSVG(e)
                }
                )))
            }
            onElementChange(e) {
                const t = e.match(/^shape_divider_(top|bottom)$/);
                if (t)
                    return void this.buildSVG(t[1]);
                const n = e.match(/^shape_divider_(top|bottom)_negative$/);
                n && (this.buildSVG(n[1]),
                this.setNegative(n[1]))
            }
        }
        t.default = Shapes
    }
    ,
    2804: (e,t)=>{
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class StretchedSection extends elementorModules.frontend.handlers.StretchedElement {
            getStretchedClass() {
                return "elementor-section-stretched"
            }
            getStretchSettingName() {
                return "stretch_section"
            }
            getStretchActiveValue() {
                return "section-stretched"
            }
        }
        t.default = StretchedSection
    }
    ,
    3346: (e,t,n)=>{
        "use strict";
        var s = n(6028);
        e.exports = elementorModules.ViewModule.extend({
            getDefaultSettings: ()=>({
                scrollDuration: 500,
                selectors: {
                    links: 'a[href*="#"]',
                    targets: ".elementor-element, .elementor-menu-anchor",
                    scrollable: (0,
                    s.isScrollSnapActive)() ? "body" : "html, body"
                }
            }),
            getDefaultElements() {
                return {
                    $scrollable: jQuery(this.getSettings("selectors").scrollable)
                }
            },
            bindEvents() {
                elementorFrontend.elements.$document.on("click", this.getSettings("selectors.links"), this.handleAnchorLinks)
            },
            handleAnchorLinks(e) {
                var t, n = e.currentTarget, i = location.pathname === n.pathname;
                if (location.hostname === n.hostname && i && !(n.hash.length < 2)) {
                    try {
                        t = jQuery(n.hash).filter(this.getSettings("selectors.targets"))
                    } catch (e) {
                        return
                    }
                    if (t.length) {
                        var o = t.offset().top
                          , r = elementorFrontend.elements.$wpAdminBar
                          , a = jQuery(".elementor-section.elementor-sticky--active:visible");
                        r.length > 0 && (o -= r.height()),
                        a.length > 0 && (o -= Math.max.apply(null, a.map((function() {
                            return jQuery(this).outerHeight()
                        }
                        )).get())),
                        e.preventDefault(),
                        o = elementorFrontend.hooks.applyFilters("frontend/handlers/menu_anchor/scroll_top_distance", o),
                        (0,
                        s.isScrollSnapActive)() && elementorFrontend.elements.$body.css("scroll-snap-type", "none"),
                        this.elements.$scrollable.animate({
                            scrollTop: o
                        }, this.getSettings("scrollDuration"), "linear", (()=>{
                            (0,
                            s.isScrollSnapActive)() && elementorFrontend.elements.$body.css("scroll-snap-type", "")
                        }
                        ))
                    }
                }
            },
            onInit() {
                elementorModules.ViewModule.prototype.onInit.apply(this, arguments)
            }
        })
    }
    ,
    6866: (e,t)=>{
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class AssetsLoader {
            getScriptElement(e) {
                const t = document.createElement("script");
                return t.src = e,
                t
            }
            getStyleElement(e) {
                const t = document.createElement("link");
                return t.rel = "stylesheet",
                t.href = e,
                t
            }
            load(e, t) {
                const n = AssetsLoader.assets[e][t];
                return n.loader || (n.loader = new Promise((t=>{
                    const s = "style" === e ? this.getStyleElement(n.src) : this.getScriptElement(n.src);
                    s.onload = ()=>t(!0);
                    const i = "head" === n.parent ? n.parent : "body";
                    document[i].appendChild(s)
                }
                ))),
                n.loader
            }
        }
        t.default = AssetsLoader;
        const n = elementorFrontendConfig.environmentMode.isScriptDebug ? "" : ".min"
          , s = elementorFrontendConfig.experimentalFeatures.e_swiper_latest ? `${elementorFrontendConfig.urls.assets}lib/swiper/v8/swiper ${n}.js?ver=8.4.5` : `${elementorFrontendConfig.urls.assets}lib/swiper/swiper ${n}.js?ver=5.3.6`;
        AssetsLoader.assets = {
            script: {
                dialog: {
                    src: `${elementorFrontendConfig.urls.assets}resume/plugins/dialog ${n}.js?ver=4.9.0`
                },
                "share-link": {
                    src: `${elementorFrontendConfig.urls.assets}resume/plugins/share-link ${n}.js?ver=${elementorFrontendConfig.version}`
                },
                swiper: {
                    src: s
                }
            },
            style: {}
        }
    }
    ,
    1322: (e,t)=>{
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        t.default = class Controls {
            getControlValue(e, t, n) {
                let s;
                return s = "object" == typeof e[t] && n ? e[t][n] : e[t],
                s
            }
            getResponsiveControlValue(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                const s = (arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null) || elementorFrontend.getCurrentDeviceMode()
                  , i = this.getControlValue(e, t, n);
                if ("widescreen" === s) {
                    const s = this.getControlValue(e, `${t}_widescreen`, n);
                    return s || 0 === s ? s : i
                }
                const o = elementorFrontend.breakpoints.getActiveBreakpointsList({
                    withDesktop: !0
                });
                let r = s
                  , a = o.indexOf(s)
                  , l = "";
                for (; a <= o.length; ) {
                    if ("desktop" === r) {
                        l = i;
                        break
                    }
                    const s = `${t}_ ${r}`
                      , d = this.getControlValue(e, s, n);
                    if (d || 0 === d) {
                        l = d;
                        break
                    }
                    a++,
                    r = o[a]
                }
                return l
            }
        }
    }
    ,
    8646: (e,t,n)=>{
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class LightboxManager extends elementorModules.ViewModule {
            static getLightbox() {
                const e = new Promise((e=>{
                    n.e(723).then(n.t.bind(n, 3896, 23)).then((t=>{
                        let {default: n} = t;
                        return e(new n)
                    }
                    ))
                }
                ))
                  , t = elementorFrontend.utils.assetsLoader.load("script", "dialog")
                  , s = elementorFrontend.utils.assetsLoader.load("script", "share-link");
                return Promise.all([e, t, s]).then((()=>e))
            }
            getDefaultSettings() {
                return {
                    selectors: {
                        links: "a, [data-elementor-lightbox]"
                    }
                }
            }
            getDefaultElements() {
                return {
                    $links: jQuery(this.getSettings("selectors.links"))
                }
            }
            isLightboxLink(e) {
                if ("a" === e.tagName.toLowerCase() && (e.hasAttribute("download") || !/^[^?]+\.(png|jpe?g|gif|svg|webp)(\?.*)?$/i.test(e.href)) && !e.dataset.elementorLightboxVideo)
                    return !1;
                const t = elementorFrontend.getKitSettings("global_image_lightbox")
                  , n = e.dataset.elementorOpenLightbox;
                return "yes" === n || t && "no" !== n
            }
            async onLinkClick(e) {
                const t = e.currentTarget
                  , n = jQuery(e.target)
                  , s = elementorFrontend.isEditMode()
                  , i = s && elementor.$previewContents.find("body").hasClass("elementor-editor__ui-state__color-picker")
                  , o = !!n.closest(".elementor-edit-area").length;
                if (!this.isLightboxLink(t))
                    return void (s && o && e.preventDefault());
                if (e.preventDefault(),
                s && !elementor.getPreferences("lightbox_in_editor"))
                    return;
                if (i)
                    return;
                (this.isOptimizedAssetsLoading() ? await LightboxManager.getLightbox() : elementorFrontend.utils.lightbox).createLightbox(t)
            }
            isOptimizedAssetsLoading() {
                return elementorFrontend.config.experimentalFeatures.e_optimized_assets_loading
            }
            bindEvents() {
                elementorFrontend.elements.$document.on("click", this.getSettings("selectors.links"), (e=>this.onLinkClick(e)))
            }
            onInit() {
                super.onInit(...arguments),
                this.isOptimizedAssetsLoading() && !elementorFrontend.isEditMode() && this.elements.$links.each(((e,t)=>{
                    if (this.isLightboxLink(t))
                        return LightboxManager.getLightbox(),
                        !1
                }
                ))
            }
        }
        t.default = LightboxManager
    }
    ,
    8628: (e,t)=>{
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        t.default = class Swiper {
            constructor(e, t) {
                return this.config = t,
                this.config.breakpoints && (this.config = this.adjustConfig(t)),
                e instanceof jQuery && (e = e[0]),
                e.closest(".elementor-widget-wrap")?.classList.add("e-swiper-container"),
                e.closest(".elementor-widget")?.classList.add("e-widget-swiper"),
                new Promise((t=>{
                    if (!elementorFrontend.config.experimentalFeatures.e_optimized_assets_loading)
                        return t(this.createSwiperInstance(e, this.config));
                    elementorFrontend.utils.assetsLoader.load("script", "swiper").then((()=>t(this.createSwiperInstance(e, this.config))))
                }
                ))
            }
            createSwiperInstance(e, t) {
                const n = window.Swiper;
                return n.prototype.adjustConfig = this.adjustConfig,
                new n(e,t)
            }
            adjustConfig(e) {
                if (!e.handleElementorBreakpoints)
                    return e;
                const t = elementorFrontend.config.responsive.activeBreakpoints
                  , n = elementorFrontend.breakpoints.getBreakpointValues();
                return Object.keys(e.breakpoints).forEach((s=>{
                    const i = parseInt(s);
                    let o;
                    if (i === t.mobile.value || i + 1 === t.mobile.value)
                        o = 0;
                    else if (!t.widescreen || i !== t.widescreen.value && i + 1 !== t.widescreen.value) {
                        const e = n.findIndex((e=>i === e || i + 1 === e));
                        o = n[e - 1]
                    } else
                        o = i;
                    e.breakpoints[o] = e.breakpoints[s],
                    e.breakpoints[s] = {
                        slidesPerView: e.slidesPerView,
                        slidesPerGroup: e.slidesPerGroup ? e.slidesPerGroup : 1
                    }
                }
                )),
                e
            }
        }
    }
    ,
    2064: (e,t,n)=>{
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0,
        n(5719);
        class _default extends elementorModules.ViewModule {
            getDefaultSettings() {
                return {
                    selectors: {
                        links: 'a[href^="%23elementor-action"], a[href^="#elementor-action"]'
                    }
                }
            }
            bindEvents() {
                elementorFrontend.elements.$document.on("click", this.getSettings("selectors.links"), this.runLinkAction.bind(this))
            }
            initActions() {
                this.actions = {
                    lightbox: async e=>{
                        const t = await elementorFrontend.utils.lightbox;
                        e.slideshow ? t.openSlideshow(e.slideshow, e.url) : (e.id && (e.type = "image"),
                        t.showModal(e))
                    }
                }
            }
            addAction(e, t) {
                this.actions[e] = t
            }
            runAction(e) {
                const t = (e = decodeURIComponent(e)).match(/action=(.+?)&/);
                if (!t)
                    return;
                const n = this.actions[t[1]];
                if (!n)
                    return;
                let s = {};
                const i = e.match(/settings=(.+)/);
                i && (s = JSON.parse(atob(i[1])));
                for (var o = arguments.length, r = new Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++)
                    r[a - 1] = arguments[a];
                n(s, ...r)
            }
            runLinkAction(e) {
                e.preventDefault(),
                this.runAction(jQuery(e.currentTarget).attr("href"), e)
            }
            runHashAction() {
                if (!location.hash)
                    return;
                const e = document.querySelector(`[data-e-action-hash="${location.hash}"], a[href*="${location.hash}"]`);
                e && this.runAction(e.getAttribute("data-e-action-hash"))
            }
            createActionHash(e, t) {
                return encodeURIComponent(`#elementor-action:action=${e}&settings=${btoa(JSON.stringify(t))}`)
            }
            onInit() {
                super.onInit(),
                this.initActions(),
                elementorFrontend.on("components:init", this.runHashAction.bind(this))
            }
        }
        t.default = _default
    }
    ,
    6028: (e,t)=>{
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.isScrollSnapActive = t.escapeHTML = void 0;
        t.escapeHTML = e=>{
            const t = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                "'": "&#39;",
                '"': "&quot;"
            };
            return e.replace(/[&<>'"]/g, (e=>t[e] || e))
        }
        ;
        t.isScrollSnapActive = ()=>"yes" === (elementorFrontend.isEditMode() ? elementor.settings.page.model.attributes?.scroll_snap : elementorFrontend.config.settings.page?.scroll_snap)
    }
    ,
    4773: (e,t)=>{
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class BaseLoader extends elementorModules.ViewModule {
            getDefaultSettings() {
                return {
                    isInserted: !1,
                    selectors: {
                        firstScript: "script:first"
                    }
                }
            }
            getDefaultElements() {
                return {
                    $firstScript: jQuery(this.getSettings("selectors.firstScript"))
                }
            }
            insertAPI() {
                this.elements.$firstScript.before(jQuery("<script>", {
                    src: this.getApiURL()
                })),
                this.setSettings("isInserted", !0)
            }
            getVideoIDFromURL(e) {
                const t = e.match(this.getURLRegex());
                return t && t[1]
            }
            onApiReady(e) {
                this.getSettings("isInserted") || this.insertAPI(),
                this.isApiLoaded() ? e(this.getApiObject()) : setTimeout((()=>{
                    this.onApiReady(e)
                }
                ), 350)
            }
            getAutoplayURL(e) {
                return e.replace("&autoplay=0", "") + "&autoplay=1"
            }
        }
        t.default = BaseLoader
    }
    ,
    1911: (e,t,n)=>{
        "use strict";
        var s = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = s(n(4773));
        class VimeoLoader extends i.default {
            getApiURL() {
                return "https://player.vimeo.com/api/player.js"
            }
            getURLRegex() {
                return /^(?:https?:\/\/)?(?:www|player\.)?(?:vimeo\.com\/)?(?:video\/|external\/)?(\d+)([^.?&#"'>]?)/
            }
            isApiLoaded() {
                return window.Vimeo
            }
            getApiObject() {
                return Vimeo
            }
            getAutoplayURL(e) {
                const t = (e = super.getAutoplayURL(e)).match(/#t=[^&]*/);
                return e.replace(t[0], "") + t
            }
        }
        t.default = VimeoLoader
    }
    ,
    1604: (e,t,n)=>{
        "use strict";
        var s = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = s(n(4773));
        class YoutubeLoader extends i.default {
            getApiURL() {
                return "https://www.youtube.com/iframe_api"
            }
            getURLRegex() {
                return /^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com\/(?:(?:watch)?\?(?:.*&)?vi?=|(?:embed|v|vi|user)\/))([^?&"'>]+)/
            }
            isApiLoaded() {
                return window.YT && YT.loaded
            }
            getApiObject() {
                return YT
            }
        }
        t.default = YoutubeLoader
    }
    ,
    59: (e,t,n)=>{
        "use strict";
        n.p = elementorFrontendConfig.urls.assets + "js/"
    }
    ,
    4375: (e,t)=>{
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class Breakpoints extends elementorModules.Module {
            constructor(e) {
                super(),
                this.responsiveConfig = e
            }
            getActiveBreakpointsList() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                e = {
                    largeToSmall: !1,
                    withDesktop: !1,
                    ...e
                };
                const t = Object.keys(this.responsiveConfig.activeBreakpoints);
                if (e.withDesktop) {
                    const e = -1 === t.indexOf("widescreen") ? t.length : t.length - 1;
                    t.splice(e, 0, "desktop")
                }
                return e.largeToSmall && t.reverse(),
                t
            }
            getBreakpointValues() {
                const {activeBreakpoints: e} = this.responsiveConfig
                  , t = [];
                return Object.values(e).forEach((e=>{
                    t.push(e.value)
                }
                )),
                t
            }
            getDesktopPreviousDeviceKey() {
                let e = "";
                const {activeBreakpoints: t} = this.responsiveConfig
                  , n = Object.keys(t)
                  , s = n.length;
                return e = "min" === t[n[s - 1]].direction ? n[s - 2] : n[s - 1],
                e
            }
            getDesktopMinPoint() {
                const {activeBreakpoints: e} = this.responsiveConfig;
                return e[this.getDesktopPreviousDeviceKey()].value + 1
            }
            getDeviceMinBreakpoint(e) {
                if ("desktop" === e)
                    return this.getDesktopMinPoint();
                const {activeBreakpoints: t} = this.responsiveConfig
                  , n = Object.keys(t);
                let s;
                if (n[0] === e)
                    s = 320;
                else if ("widescreen" === e)
                    s = t[e] ? t[e].value : this.responsiveConfig.breakpoints.widescreen;
                else {
                    const i = n.indexOf(e);
                    s = t[n[i - 1]].value + 1
                }
                return s
            }
            getActiveMatchRegex() {
                return new RegExp(this.getActiveBreakpointsList().map((e=>"_" + e)).join("|") + "$")
            }
        }
        t.default = Breakpoints
    }
    ,
    6404: (e,t)=>{
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = t.Events = void 0;
        class Events {
            static dispatch(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
                  , s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                e = e instanceof jQuery ? e[0] : e,
                s && e.dispatchEvent(new CustomEvent(s,{
                    detail: n
                })),
                e.dispatchEvent(new CustomEvent(t,{
                    detail: n
                }))
            }
        }
        t.Events = Events;
        var n = Events;
        t.default = n
    }
    ,
    9469: e=>{
        "use strict";
        e.exports = function() {
            var e, t = Array.prototype.slice, n = {
                actions: {},
                filters: {}
            };
            function _removeHook(e, t, s, i) {
                var o, r, a;
                if (n[e][t])
                    if (s)
                        if (o = n[e][t],
                        i)
                            for (a = o.length; a--; )
                                (r = o[a]).callback === s && r.context === i && o.splice(a, 1);
                        else
                            for (a = o.length; a--; )
                                o[a].callback === s && o.splice(a, 1);
                    else
                        n[e][t] = []
            }
            function _addHook(e, t, s, i, o) {
                var r = {
                    callback: s,
                    priority: i,
                    context: o
                }
                  , a = n[e][t];
                if (a) {
                    var l = !1;
                    if (jQuery.each(a, (function() {
                        if (this.callback === s)
                            return l = !0,
                            !1
                    }
                    )),
                    l)
                        return;
                    a.push(r),
                    a = function _hookInsertSort(e) {
                        for (var t, n, s, i = 1, o = e.length; i < o; i++) {
                            for (t = e[i],
                            n = i; (s = e[n - 1]) && s.priority > t.priority; )
                                e[n] = e[n - 1],
                                --n;
                            e[n] = t
                        }
                        return e
                    }(a)
                } else
                    a = [r];
                n[e][t] = a
            }
            function _runHook(e, t, s) {
                var i, o, r = n[e][t];
                if (!r)
                    return "filters" === e && s[0];
                if (o = r.length,
                "filters" === e)
                    for (i = 0; i < o; i++)
                        s[0] = r[i].callback.apply(r[i].context, s);
                else
                    for (i = 0; i < o; i++)
                        r[i].callback.apply(r[i].context, s);
                return "filters" !== e || s[0]
            }
            return e = {
                removeFilter: function removeFilter(t, n) {
                    return "string" == typeof t && _removeHook("filters", t, n),
                    e
                },
                applyFilters: function applyFilters() {
                    var n = t.call(arguments)
                      , s = n.shift();
                    return "string" == typeof s ? _runHook("filters", s, n) : e
                },
                addFilter: function addFilter(t, n, s, i) {
                    return "string" == typeof t && "function" == typeof n && _addHook("filters", t, n, s = parseInt(s || 10, 10), i),
                    e
                },
                removeAction: function removeAction(t, n) {
                    return "string" == typeof t && _removeHook("actions", t, n),
                    e
                },
                doAction: function doAction() {
                    var n = t.call(arguments)
                      , s = n.shift();
                    return "string" == typeof s && _runHook("actions", s, n),
                    e
                },
                addAction: function addAction(t, n, s, i) {
                    return "string" == typeof t && "function" == typeof n && _addHook("actions", t, n, s = parseInt(s || 10, 10), i),
                    e
                }
            },
            e
        }
    }
    ,
    3308: (e,t)=>{
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        const matchUserAgent = e=>n.indexOf(e) >= 0
          , n = navigator.userAgent
          , s = !!window.opr && !!opr.addons || !!window.opera || matchUserAgent(" OPR/")
          , i = matchUserAgent("Firefox")
          , o = /^((?!chrome|android).)*safari/i.test(n) || /constructor/i.test(window.HTMLElement) || "[object SafariRemoteNotification]" === (!window.safari || "undefined" != typeof safari && safari.pushNotification).toString()
          , r = /Trident|MSIE/.test(n) && !!document.documentMode
          , a = !r && !!window.StyleMedia || matchUserAgent("Edg")
          , l = !!window.chrome && matchUserAgent("Chrome") && !(a || s)
          , d = matchUserAgent("Chrome") && !!window.CSS
          , c = matchUserAgent("AppleWebKit") && !d;
        var u = {
            isTouchDevice: "ontouchstart"in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
            appleWebkit: c,
            blink: d,
            chrome: l,
            edge: a,
            firefox: i,
            ie: r,
            mac: matchUserAgent("Macintosh"),
            opera: s,
            safari: o,
            webkit: matchUserAgent("AppleWebKit")
        };
        t.default = u
    }
    ,
    5107: (e,t)=>{
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class _default extends elementorModules.Module {
            get(e, t) {
                let n;
                t = t || {};
                try {
                    n = t.session ? sessionStorage : localStorage
                } catch (t) {
                    return e ? void 0 : {}
                }
                let s = n.getItem("elementor");
                s = s ? JSON.parse(s) : {},
                s.__expiration || (s.__expiration = {});
                const i = s.__expiration;
                let o = [];
                e ? i[e] && (o = [e]) : o = Object.keys(i);
                let r = !1;
                return o.forEach((e=>{
                    new Date(i[e]) < new Date && (delete s[e],
                    delete i[e],
                    r = !0)
                }
                )),
                r && this.save(s, t.session),
                e ? s[e] : s
            }
            set(e, t, n) {
                n = n || {};
                const s = this.get(null, n);
                if (s[e] = t,
                n.lifetimeInSeconds) {
                    const t = new Date;
                    t.setTime(t.getTime() + 1e3 * n.lifetimeInSeconds),
                    s.__expiration[e] = t.getTime()
                }
                this.save(s, n.session)
            }
            save(e, t) {
                let n;
                try {
                    n = t ? sessionStorage : localStorage
                } catch (e) {
                    return
                }
                n.setItem("elementor", JSON.stringify(e))
            }
        }
        t.default = _default
    }
    ,
    6046: (e,t,n)=>{
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class _default extends elementorModules.Module {
            constructor() {
                super(),
                elementorFrontend.elementsHandler.attachHandler("text-path", (()=>n.e(48).then(n.bind(n, 6468))))
            }
        }
        t.default = _default
    }
    ,
    1855: (e,t,n)=>{
        var s = n(5516)
          , i = TypeError;
        e.exports = function(e, t) {
            if (s(t, e))
                return e;
            throw i("Incorrect invocation")
        }
    }
    ,
    3621: e=>{
        e.exports = {
            IndexSizeError: {
                s: "INDEX_SIZE_ERR",
                c: 1,
                m: 1
            },
            DOMStringSizeError: {
                s: "DOMSTRING_SIZE_ERR",
                c: 2,
                m: 0
            },
            HierarchyRequestError: {
                s: "HIERARCHY_REQUEST_ERR",
                c: 3,
                m: 1
            },
            WrongDocumentError: {
                s: "WRONG_DOCUMENT_ERR",
                c: 4,
                m: 1
            },
            InvalidCharacterError: {
                s: "INVALID_CHARACTER_ERR",
                c: 5,
                m: 1
            },
            NoDataAllowedError: {
                s: "NO_DATA_ALLOWED_ERR",
                c: 6,
                m: 0
            },
            NoModificationAllowedError: {
                s: "NO_MODIFICATION_ALLOWED_ERR",
                c: 7,
                m: 1
            },
            NotFoundError: {
                s: "NOT_FOUND_ERR",
                c: 8,
                m: 1
            },
            NotSupportedError: {
                s: "NOT_SUPPORTED_ERR",
                c: 9,
                m: 1
            },
            InUseAttributeError: {
                s: "INUSE_ATTRIBUTE_ERR",
                c: 10,
                m: 1
            },
            InvalidStateError: {
                s: "INVALID_STATE_ERR",
                c: 11,
                m: 1
            },
            SyntaxError: {
                s: "SYNTAX_ERR",
                c: 12,
                m: 1
            },
            InvalidModificationError: {
                s: "INVALID_MODIFICATION_ERR",
                c: 13,
                m: 1
            },
            NamespaceError: {
                s: "NAMESPACE_ERR",
                c: 14,
                m: 1
            },
            InvalidAccessError: {
                s: "INVALID_ACCESS_ERR",
                c: 15,
                m: 1
            },
            ValidationError: {
                s: "VALIDATION_ERR",
                c: 16,
                m: 0
            },
            TypeMismatchError: {
                s: "TYPE_MISMATCH_ERR",
                c: 17,
                m: 1
            },
            SecurityError: {
                s: "SECURITY_ERR",
                c: 18,
                m: 1
            },
            NetworkError: {
                s: "NETWORK_ERR",
                c: 19,
                m: 1
            },
            AbortError: {
                s: "ABORT_ERR",
                c: 20,
                m: 1
            },
            URLMismatchError: {
                s: "URL_MISMATCH_ERR",
                c: 21,
                m: 1
            },
            QuotaExceededError: {
                s: "QUOTA_EXCEEDED_ERR",
                c: 22,
                m: 1
            },
            TimeoutError: {
                s: "TIMEOUT_ERR",
                c: 23,
                m: 1
            },
            InvalidNodeTypeError: {
                s: "INVALID_NODE_TYPE_ERR",
                c: 24,
                m: 1
            },
            DataCloneError: {
                s: "DATA_CLONE_ERR",
                c: 25,
                m: 1
            }
        }
    }
    ,
    5719: (e,t,n)=>{
        "use strict";
        var s = n(1695)
          , i = n(2086)
          , o = n(563)
          , r = n(5736)
          , a = n(7826).f
          , l = n(9606)
          , d = n(1855)
          , c = n(5070)
          , u = n(1879)
          , h = n(3621)
          , m = n(79)
          , g = n(5283)
          , p = n(3296)
          , f = "DOMException"
          , v = o("Error")
          , b = o(f)
          , _ = function DOMException() {
            d(this, y);
            var e = arguments.length
              , t = u(e < 1 ? void 0 : arguments[0])
              , n = u(e < 2 ? void 0 : arguments[1], "Error")
              , s = new b(t,n)
              , i = v(t);
            return i.name = f,
            a(s, "stack", r(1, m(i.stack, 1))),
            c(s, this, _),
            s
        }
          , y = _.prototype = b.prototype
          , w = "stack"in v(f)
          , k = "stack"in new b(1,2)
          , S = b && g && Object.getOwnPropertyDescriptor(i, f)
          , E = !(!S || S.writable && S.configurable)
          , M = w && !E && !k;
        s({
            global: !0,
            constructor: !0,
            forced: p || M
        }, {
            DOMException: M ? _ : b
        });
        var C = o(f)
          , A = C.prototype;
        if (A.constructor !== C)
            for (var D in p || a(A, "constructor", r(1, C)),
            h)
                if (l(h, D)) {
                    var $ = h[D]
                      , R = $.s;
                    l(C, R) || a(C, R, r(6, $.c))
                }
    }
}, e=>{
    e.O(0, [354], (()=>{
        return t = 5654,
        e(e.s = t);
        var t
    }
    ));
    e.O()
}
]);
