parcelRequire = function(e, r, t, n) {
    var i, o = "function" == typeof parcelRequire && parcelRequire,
        u = "function" == typeof require && require;

    function f(t, n) {
        if (!r[t]) {
            if (!e[t]) {
                var i = "function" == typeof parcelRequire && parcelRequire;
                if (!n && i) return i(t, !0);
                if (o) return o(t, !0);
                if (u && "string" == typeof t) return u(t);
                var c = new Error("Cannot find module '" + t + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            p.resolve = function(r) {
                return e[t][1][r] || r
            }, p.cache = {};
            var l = r[t] = new f.Module(t);
            e[t][0].call(l.exports, p, l, l.exports, this)
        }
        return r[t].exports;

        function p(e) {
            return f(p.resolve(e))
        }
    }
    f.isParcelRequire = !0, f.Module = function(e) {
        this.id = e, this.bundle = f, this.exports = {}
    }, f.modules = e, f.cache = r, f.parent = o, f.register = function(r, t) {
        e[r] = [function(e, r) {
            r.exports = t
        }, {}]
    };
    for (var c = 0; c < t.length; c++) try {
        f(t[c])
    } catch (e) {
        i || (i = e)
    }
    if (t.length) {
        var l = f(t[t.length - 1]);
        "object" == typeof exports && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function() {
            return l
        }) : n && (this[n] = l)
    }
    if (parcelRequire = f, i) throw i;
    return f
}({
    "TCu9": [function(require, module, exports) {
        "use strict";

        function e(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function t(e, t) {
            for (var r = 0; r < t.length; r++) {
                var a = t[r];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
            }
        }

        function r(e, r, a) {
            return r && t(e.prototype, r), a && t(e, a), e
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = void 0;
        var a = function() {
            function t(r, a) {
                e(this, t);
                var n = r.width,
                    i = r.height,
                    o = document.createElement("canvas");
                o.width = n, o.height = i;
                var u = o.getContext("2d");
                u.drawImage(r, 0, 0), this.canvas = o, this.context = u, this.frames = a
            }
            return r(t, [{
                key: "drawFrame",
                value: function(e, t, r, a, n, i) {
                    var o = this.frames[t],
                        u = o.x,
                        s = o.y,
                        c = o.width,
                        h = o.height;
                    r |= 0, a |= 0, n |= c, i |= h, e.drawImage(this.canvas, u, s, c, h, r, a, n, i)
                }
            }]), t
        }();
        a.GeometryHorizontalLinear = function(e, t, r) {
            for (var a = [], n = 0; n < r; n += 1) {
                var i = {
                    x: e * n,
                    y: 0,
                    width: e,
                    height: t
                };
                a.push(i)
            }
            return a
        };
        var n = a;
        exports.default = n;
    }, {}],
    "Js4U": [function(require, module, exports) {
        "use strict";

        function e(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function t(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function i(e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = void 0;
        var n = function() {
                function t() {
                    e(this, t), this.lastTime = 0, this.elapsedTime = 0, this.element = document.createElement("canvas"), this.context = this.element.getContext("2d"), this.size = {
                        width: 1,
                        height: 1
                    }
                }
                return i(t, [{
                    key: "main",
                    value: function() {
                        var e = Date.now(),
                            t = (e - this.lastTime) / 1e3;
                        this.update(t), this.render(), this.lastTime = e, requestAnimationFrame(this.main.bind(this))
                    }
                }, {
                    key: "update",
                    value: function(e) {}
                }, {
                    key: "render",
                    value: function() {}
                }, {
                    key: "sizeDidChange",
                    value: function(e) {}
                }, {
                    key: "size",
                    get: function() {
                        return {
                            width: this._size.width,
                            height: this._size.height
                        }
                    },
                    set: function(e) {
                        var t = this.element;
                        t.width = .5 * e.width, t.height = .5 * e.height, t.style.width = e.width + "px", t.style.height = e.height + "px", this.context.scale(.5, .5), this._size = {
                            width: e.width,
                            height: e.height
                        }, this.sizeDidChange(this._size)
                    }
                }]), t
            }(),
            h = n;
        exports.default = h;
    }, {}],
    "LeK6": [function(require, module, exports) {
        "use strict";

        function t(t, r) {
            return Math.random() * (r - t) + t
        }

        function r(t, r) {
            return Math.floor(Math.random() * (r - t + 1)) + t
        }

        function o() {
            return "#" + Math.floor(16777215 * Math.random()).toString(16)
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.floatValue = t, exports.integerValue = r, exports.color = o;
    }, {}],
    "HiAH": [function(require, module, exports) {
        CanvasRenderingContext2D.prototype.roundedRect = function(t, o, i, e, h) {
            return i < 2 * h && (h = i / 2), e < 2 * h && (h = e / 2), this.beginPath(), this.moveTo(t + h, o), this.arcTo(t + i, o, t + i, o + e, h), this.arcTo(t + i, o + e, t, o + e, h), this.arcTo(t, o + e, t, o, h), this.arcTo(t, o, t + i, o, h), this.closePath(), this
        };
    }, {}],
    "oCom": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = void 0;
        var t = o(require("./Sprite.js")),
            e = o(require("./Scene.js")),
            i = n(require("./Random.js"));

        function r() {
            if ("function" != typeof WeakMap) return null;
            var t = new WeakMap;
            return r = function() {
                return t
            }, t
        }

        function n(t) {
            if (t && t.__esModule) return t;
            if (null === t || "object" != typeof t && "function" != typeof t) return {
                default: t
            };
            var e = r();
            if (e && e.has(t)) return e.get(t);
            var i = {},
                n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in t)
                if (Object.prototype.hasOwnProperty.call(t, o)) {
                    var a = n ? Object.getOwnPropertyDescriptor(t, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(i, o, a) : i[o] = t[o]
                } return i.default = t, e && e.set(t, i), i
        }

        function o(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function a(t) {
            return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function u(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function l(t, e) {
            for (var i = 0; i < e.length; i++) {
                var r = e[i];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        function h(t, e, i) {
            return e && l(t.prototype, e), i && l(t, i), t
        }

        function s(t, e) {
            return !e || "object" !== a(e) && "function" != typeof e ? c(t) : e
        }

        function c(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }

        function f(t) {
            return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function p(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && y(t, e)
        }

        function y(t, e) {
            return (y = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        require("./RoundedRect.js");
        var d = function(r) {
                function n() {
                    var e;
                    u(this, n), (e = s(this, f(n).call(this))).backgroundColor = "#000", e.containerColor = "#000", e.entities = [];
                    var i = new Image;
                    return i.onload = function() {
                        var r = 33,
                            n = 29,
                            o = new t.default(i, t.default.GeometryHorizontalLinear(r, n, 4));
                        e.sprites = {
                            ditto: o
                        }, e.main()
                    }, i.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAAAdAgMAAAAWQyy/AAAADFBMVEX///+4YOA4ODj4+PhASPNeAAAAAXRSTlMAQObYZgAAAStJREFUeF6l08FqhEAMBuBhbk6fYyj6Pgmul3pZEN9hWV8i9FgvC3X6PELpe2zP9Y/pyCLLFprLoP83STzo/lv+/ZEoGGwMw10RacmePmML4PfOjyqev6WGKDs/Kth40QiEXInxLPzxle+WHUS8kgoi6vU8zzaobIQB31R4QrU4T9RVKl5ngpheaBP1KlmWLlU4z0iCJioORKxCmzm5nDSJAOx0jxthdEBwzOLIkJyFIEGgQpvVqxSMhVRxQKCiEYhozQtbPV/Fmx6iJE5ErYkWgi8mlOYkEiVZxQRpglUojSZB9wJUTDoxkTeMN4J3ot0JT79CTMifRUmUEtV5803EJcD3+5ScS+MmML+feHBhCcKSWOVvw9s07H+LTdwvL/1Fp9yvaggJUx/WD0e0wREEScedAAAAAElFTkSuQmCC", e
                }
                return p(n, e.default), h(n, [{
                    key: "sizeDidChange",
                    value: function(t) {
                        this.context.imageSmoothingEnabled = !1
                    }
                }, {
                    key: "createEntity",
                    value: function() {
                        var t = this.sprites.ditto,
                            e = t.frames[0],
                            r = i.integerValue(0, 1),
                            n = i.integerValue(4, 16),
                            o = i.floatValue(.1, 1),
                            a = i.integerValue(400, 1e3) * (r ? 1 : -1),
                            u = this.size.width,
                            l = this.size.height,
                            h = {
                                width: e.width,
                                height: e.height
                            },
                            s = {
                                width: h.width * n,
                                height: h.height * n
                            };
                        return {
                            sprite: t,
                            animationFrameDuration: .085,
                            animationFrame: 0,
                            time: 0,
                            speed: {
                                x: a,
                                y: 0
                            },
                            size: s,
                            origin: {
                                x: r ? -s.width : u,
                                y: i.integerValue(0, l - s.height)
                            },
                            opacity: o,
                            intrinsicSize: h
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this.context,
                            e = this.size,
                            i = e.width,
                            r = e.height;
                        t.globalAlpha = 1, t.fillStyle = this.backgroundColor, t.fillRect(0, 0, i, r);
                        i > 24 && r > 24 && (t.roundedRect(32, 32, i - 64, r - 64, 12), t.fillStyle = this.containerColor, t.fill());
                        var n = !0,
                            o = !1,
                            a = void 0;
                        try {
                            for (var u, l = this.entities[Symbol.iterator](); !(n = (u = l.next()).done); n = !0) {
                                var h = u.value,
                                    s = h.sprite,
                                    c = h.animationFrame,
                                    f = h.origin,
                                    p = h.size,
                                    y = h.opacity;
                                t.globalAlpha = y, s.drawFrame(t, c, f.x, f.y, p.width, p.height)
                            }
                        } catch (d) {
                            o = !0, a = d
                        } finally {
                            try {
                                n || null == l.return || l.return()
                            } finally {
                                if (o) throw a
                            }
                        }
                    }
                }, {
                    key: "update",
                    value: function(t) {
                        if (this.elapsedTime += t, this.elapsedTime >= .4) {
                            this.elapsedTime = 0, this.backgroundColor = i.color(), this.containerColor = i.color();
                            for (var e = 1; e--;) this.entities.push(this.createEntity())
                        }
                        var r = this.size.width,
                            n = this.size.height,
                            o = this.protagonist;
                        if (o || ((o = this.createEntity()).speed.x = 0, o.opacity = 1, this.entities.push(o), this.protagonist = o), o) {
                            var a = {
                                    width: Math.min(.8 * r, 600),
                                    height: Math.min(.8 * n, 600)
                                },
                                u = o.intrinsicSize,
                                l = a.width / u.width,
                                h = a.height / u.height,
                                s = Math.min(l, h),
                                c = {
                                    width: u.width * s,
                                    height: u.height * s
                                };
                            o.size = c, o.origin.x = Math.round(.5 * (r - c.width)), o.origin.y = Math.round(.5 * (n - c.height))
                        }
                        var f = [],
                            p = 0,
                            y = !0,
                            d = !1,
                            g = void 0;
                        try {
                            for (var m, v = this.entities[Symbol.iterator](); !(y = (m = v.next()).done); y = !0) {
                                var b = m.value;
                                if (b.time += t, b.time >= b.animationFrameDuration) {
                                    var w = b.animationFrame + 1;
                                    b.time = 0, b.animationFrame = w < b.sprite.frames.length ? w : 0
                                }
                                0 != b.speed.x && (b.origin.x += b.speed.x * t | 0), (b.origin.x > r || b.origin.x <= -b.size.width) && f.push(p), p += 1
                            }
                        } catch (S) {
                            d = !0, g = S
                        } finally {
                            try {
                                y || null == v.return || v.return()
                            } finally {
                                if (d) throw g
                            }
                        }
                        for (var A = 0, x = f; A < x.length; A++) {
                            var O = x[A];
                            this.entities.splice(O, 1)
                        }
                    }
                }]), n
            }(),
            g = d;
        exports.default = g;
    }, {
        "./Sprite.js": "TCu9",
        "./Scene.js": "Js4U",
        "./Random.js": "LeK6",
        "./RoundedRect.js": "HiAH"
    }],
    "Focm": [function(require, module, exports) {
        "use strict";
        var e = n(require("./js/KongaScene.js"));

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function t(e, n) {
            if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, n) {
            for (var t = 0; t < n.length; t++) {
                var i = n[t];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function a(e, n, t) {
            return n && i(e.prototype, n), t && i(e, t), e
        }
        var o = function() {
            function n(i) {
                t(this, n), this.container = i;
                var a = new e.default;
                a.element.style.display = "none", i.appendChild(a.element), window.addEventListener("resize", this.handleResize.bind(this)), this.scene = a, this.handleResize();
                var o = document.createElement("span");
                o.textContent = "Preparing…";
                var r = document.getElementsByTagName("audio")[0];
                r.addEventListener("play", function() {
                    o.parentNode.removeChild(o), a.element.classList.add("cue-in"), a.element.style.display = "block", document.title = "Conga!"
                });
                var d = document.createElement("button");
                d.textContent = "Trust me", d.addEventListener("click", function(e) {
                    d.parentNode.removeChild(d), i.appendChild(o), r.play()
                }), i.appendChild(d)
            }
            return a(n, [{
                key: "handleResize",
                value: function() {
                    this.scene.size = {
                        width: Math.floor(window.innerWidth),
                        height: Math.floor(window.innerHeight)
                    }
                }
            }]), n
        }();

        function r() {
            window.controller = new o(document.body)
        }
        document.addEventListener("DOMContentLoaded", r);
    }, {
        "./js/KongaScene.js": "oCom"
    }]
}, {}, ["Focm"], null)