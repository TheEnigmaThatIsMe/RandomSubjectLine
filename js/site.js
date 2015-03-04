window.requestAnimationFrame = function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
        window.setTimeout(t, 1e3 / 60)
    }
}(), function() {
    function t() {}
    function e(t, e) {
        for (var n = t.length; n--;)
            if (t[n].listener === e)
                return n;
        return -1
    }
    function n(t) {
        return function() {
            return this[t].apply(this, arguments)
        }
    }
    var i = t.prototype, o = this, r = o.EventEmitter;
    i.getListeners = function(t) {
        var e, n, i = this._getEvents();
        if ("object" == typeof t) {
            e = {};
            for (n in i)
                i.hasOwnProperty(n) && t.test(n) && (e[n] = i[n])
        } else 
            e = i[t] || (i[t] = []);
        return e
    }, i.flattenListeners = function(t) {
        var e, n = [];
        for (e = 0; e < t.length; e += 1)
            n.push(t[e].listener);
        return n
    }, i.getListenersAsObject = function(t) {
        var e, n = this.getListeners(t);
        return n instanceof Array && (e = {}, e[t] = n), e || n
    }, i.addListener = function(t, n) {
        var i, o = this.getListenersAsObject(t), r = "object" == typeof n;
        for (i in o)
            o.hasOwnProperty(i)&&-1 === e(o[i], n) && o[i].push(r ? n : {
                listener: n,
                once: !1
            });
        return this
    }, i.on = n("addListener"), i.addOnceListener = function(t, e) {
        return this.addListener(t, {
            listener: e,
            once: !0
        })
    }, i.once = n("addOnceListener"), i.defineEvent = function(t) {
        return this.getListeners(t), this
    }, i.defineEvents = function(t) {
        for (var e = 0; e < t.length; e += 1)
            this.defineEvent(t[e]);
        return this
    }, i.removeListener = function(t, n) {
        var i, o, r = this.getListenersAsObject(t);
        for (o in r)
            r.hasOwnProperty(o) && (i = e(r[o], n), -1 !== i && r[o].splice(i, 1));
        return this
    }, i.off = n("removeListener"), i.addListeners = function(t, e) {
        return this.manipulateListeners(!1, t, e)
    }, i.removeListeners = function(t, e) {
        return this.manipulateListeners(!0, t, e)
    }, i.manipulateListeners = function(t, e, n) {
        var i, o, r = t ? this.removeListener: this.addListener, s = t ? this.removeListeners: this.addListeners;
        if ("object" != typeof e || e instanceof RegExp)
            for (i = n.length; i--;)
                r.call(this, e, n[i]);
        else 
            for (i in e)
                e.hasOwnProperty(i) && (o = e[i]) && ("function" == typeof o ? r.call(this, i, o) : s.call(this, i, o));
        return this
    }, i.removeEvent = function(t) {
        var e, n = typeof t, i = this._getEvents();
        if ("string" === n)
            delete i[t];
        else if ("object" === n)
            for (e in i)
                i.hasOwnProperty(e) && t.test(e) && delete i[e];
        else 
            delete this._events;
        return this
    }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function(t, e) {
        var n, i, o, r, s = this.getListenersAsObject(t);
        for (o in s)
            if (s.hasOwnProperty(o))
                for (i = s[o].length; i--;)
                    n = s[o][i], n.once===!0 && this.removeListener(t, n.listener), r = n.listener.apply(this, e || []), r === this._getOnceReturnValue() && this.removeListener(t, n.listener);
        return this
    }, i.trigger = n("emitEvent"), i.emit = function(t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(t, e)
    }, i.setOnceReturnValue = function(t) {
        return this._onceReturnValue = t, this
    }, i._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, i._getEvents = function() {
        return this._events || (this._events = {})
    }, t.noConflict = function() {
        return o.EventEmitter = r, t
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return t
    }) : "object" == typeof module && module.exports ? module.exports = t : this.EventEmitter = t
}.call(this), function(t) {
    function e(e) {
        var n = t.event;
        return n.target = n.target || n.srcElement || e, n
    }
    var n = document.documentElement, i = function() {};
    n.addEventListener ? i = function(t, e, n) {
        t.addEventListener(e, n, !1)
    } : n.attachEvent && (i = function(t, n, i) {
        t[n + i] = i.handleEvent ? function() {
            var n = e(t);
            i.handleEvent.call(i, n)
        } : function() {
            var n = e(t);
            i.call(t, n)
        }, t.attachEvent("on" + n, t[n + i])
    });
    var o = function() {};
    n.removeEventListener ? o = function(t, e, n) {
        t.removeEventListener(e, n, !1)
    } : n.detachEvent && (o = function(t, e, n) {
        t.detachEvent("on" + e, t[e + n]);
        try {
            delete t[e + n]
        } catch (i) {
            t[e + n] = void 0
        }
    });
    var r = {
        bind: i,
        unbind: o
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", r) : t.eventie = r
}(this), function(t, e) {
    "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(n, i) {
        return e(t, n, i)
    }) : "object" == typeof exports ? module.exports = e(t, require("eventEmitter"), require("eventie")) : t.imagesLoaded = e(t, t.EventEmitter, t.eventie)
}(this, function(t, e, n) {
    function i(t, e) {
        for (var n in e)
            t[n] = e[n];
        return t
    }
    function o(t) {
        return "[object Array]" === d.call(t)
    }
    function r(t) {
        var e = [];
        if (o(t))
            e = t;
        else if ("number" == typeof t.length)
            for (var n = 0, i = t.length; i > n; n++)
                e.push(t[n]);
        else 
            e.push(t);
        return e
    }
    function s(t, e, n) {
        if (!(this instanceof s))
            return new s(t, e);
        "string" == typeof t && (t = document.querySelectorAll(t)), this.elements = r(t), this.options = i({}, this.options), "function" == typeof e ? n = e : i(this.options, e), n && this.on("always", n), this.getImages(), l && (this.jqDeferred = new l.Deferred);
        var o = this;
        setTimeout(function() {
            o.check()
        })
    }
    function a(t) {
        this.img = t
    }
    function u(t) {
        this.src = t, p[t] = this
    }
    var l = t.jQuery, c = t.console, h = "undefined" != typeof c, d = Object.prototype.toString;
    s.prototype = new e, s.prototype.options = {}, s.prototype.getImages = function() {
        this.images = [];
        for (var t = 0, e = this.elements.length; e > t; t++) {
            var n = this.elements[t];
            "IMG" === n.nodeName && this.addImage(n);
            for (var i = n.querySelectorAll("img"), o = 0, r = i.length; r > o; o++) {
                var s = i[o];
                this.addImage(s)
            }
        }
    }, s.prototype.addImage = function(t) {
        var e = new a(t);
        this.images.push(e)
    }, s.prototype.check = function() {
        function t(t, o) {
            return e.options.debug && h && c.log("confirm", t, o), e.progress(t), n++, n === i && e.complete(), !0
        }
        var e = this, n = 0, i = this.images.length;
        if (this.hasAnyBroken=!1, !i)
            return this.complete(), void 0;
        for (var o = 0; i > o; o++) {
            var r = this.images[o];
            r.on("confirm", t), r.check()
        }
    }, s.prototype.progress = function(t) {
        this.hasAnyBroken = this.hasAnyBroken ||!t.isLoaded;
        var e = this;
        setTimeout(function() {
            e.emit("progress", e, t), e.jqDeferred && e.jqDeferred.notify && e.jqDeferred.notify(e, t)
        })
    }, s.prototype.complete = function() {
        var t = this.hasAnyBroken ? "fail": "done";
        this.isComplete=!0;
        var e = this;
        setTimeout(function() {
            if (e.emit(t, e), e.emit("always", e)
                , e.jqDeferred) {
                var n = e.hasAnyBroken ? "reject": "resolve";
                e.jqDeferred[n](e)
            }
        })
    }, l && (l.fn.imagesLoaded = function(t, e) {
        var n = new s(this, t, e);
        return n.jqDeferred.promise(l(this))
    }), a.prototype = new e, a.prototype.check = function() {
        var t = p[this.img.src] || new u(this.img.src);
        if (t.isConfirmed)
            return this.confirm(t.isLoaded, "cached was confirmed"), void 0;
        if (this.img.complete && void 0 !== this.img.naturalWidth)
            return this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), void 0;
        var e = this;
        t.on("confirm", function(t, n) {
            return e.confirm(t.isLoaded, n), !0
        }), t.check()
    }, a.prototype.confirm = function(t, e) {
        this.isLoaded = t, this.emit("confirm", this, e)
    };
    var p = {};
    return u.prototype = new e, u.prototype.check = function() {
        if (!this.isChecked) {
            var t = new Image;
            n.bind(t, "load", this), n.bind(t, "error", this), t.src = this.src, this.isChecked=!0
        }
    }, u.prototype.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, u.prototype.onload = function(t) {
        this.confirm(!0, "onload"), this.unbindProxyEvents(t)
    }, u.prototype.onerror = function(t) {
        this.confirm(!1, "onerror"), this.unbindProxyEvents(t)
    }, u.prototype.confirm = function(t, e) {
        this.isConfirmed=!0, this.isLoaded = t, this.emit("confirm", this, e)
    }, u.prototype.unbindProxyEvents = function(t) {
        n.unbind(t.target, "load", this), n.unbind(t.target, "error", this)
    }, s
}), function() {
    var t = [].slice;
    this.ScrollAnimation = function() {
        function e(t) {
            var e;
            this.el = t.el, this.animation = t.animation, this.reset = t.reset, e = t.offset, this.offset = e || function() {
                return 0
            }, e = this.offset(u), this.resize(u), this.state = i
        }
        var n, i, o, r, s, a, u;
        return u = window.innerHeight, o = null, r = null, a = function() {
            var t, n, i, s, a;
            if (n = document.documentElement.scrollTop || document.body.scrollTop, n !== r) {
                for (a = e.animations, i = 0, s = a.length; s > i; i++)
                    t = a[i], null != t && t.animate(n, u, o);
                return r = n
            }
        }, s = function() {
            return requestAnimationFrame(s), a()
        }, e.animations = [], e.register = function() {
            var n;
            return n = 1 <= arguments.length ? t.call(arguments, 0) : [], n[0]instanceof e ? this.animations.push(n[0]) : void 0
        }, e.remove = function(t) {
            var e;
            return e = this.animations.indexOf(t), 0 > e ? null : this.animations.splice(e, 1)
        }, e.start = function() {
            return e.refresh(), $(window).on("resize", e.refresh), /*Modernizr.touch &&*/ (document.addEventListener("touchstart", a), document.addEventListener("touchmove", a), document.addEventListener("touchend", a)), s()
        }, e.refresh = function() {
            var t, n, i, s;
            for (u = window.innerHeight, o = document.height, r = 0, s = e.animations, n = 0, i = s.length; i > n; n++)
                t = s[n], t.resize();
            return this
        }, i = 0, n = 1, e.prototype.resize = function(t) {
            var e;
            return e = $(this.el).offset().top, this.start = e + this.offset(t), this.height = this.el.offsetHeight, this.end = this.height + this.start
        }, e.prototype.animate = function(t, e) {
            return this.start > t && this.end < t + e || this.state === n && ("function" == typeof this.reset && this.reset(), this.state = i), this.state = n, this.animation.apply(this, Array.prototype.slice.call(arguments))
        }, e
    }()
}.call(this), function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(window.jQuery || window.$)
}(function(t) {
    var e, n = {
        className: "autosizejs",
        append: "",
        callback: !1,
        resizeDelay: 10
    }, i = '<textarea tabindex="-1" style="position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; padding: 0; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden; transition:none; -webkit-transition:none; -moz-transition:none;"/>', o = ["fontFamily", "fontSize", "fontWeight", "fontStyle", "letterSpacing", "textTransform", "wordSpacing", "textIndent"], r = t(i).data("autosize", !0)[0];
    r.style.lineHeight = "99px", "99px" === t(r).css("lineHeight") && o.push("lineHeight"), r.style.lineHeight = "", t.fn.autosize = function(i) {
        return this.length ? (i = t.extend({}, n, i || {}), r.parentNode !== document.body && t(document.body).append(r), this.each(function() {
            function n() {
                var e, n;
                "getComputedStyle"in window ? (e = window.getComputedStyle(d, null), n = d.getBoundingClientRect().width, t.each(["paddingLeft", "paddingRight", "borderLeftWidth", "borderRightWidth"], function(t, i) {
                    n -= parseInt(e[i], 10)
                }), r.style.width = n + "px") : r.style.width = Math.max(p.width(), 0) + "px"
            }
            function s() {
                var s = {};
                if (e = d, r.className = i.className, l = parseInt(p.css("maxHeight")
                    , 10), t.each(o, function(t, e) {
                    s[e] = p.css(e)
                }), t(r).css(s), n(), window.chrome) {
                    var a = d.style.width;
                    d.style.width = "0px", d.offsetWidth, d.style.width = a
                }
            }
            function a() {
                var t, o;
                e !== d ? s() : n(), r.value = d.value + i.append, r.style.overflowY = d.style.overflowY, o = parseInt(d.style.height, 10), r.scrollTop = 0, r.scrollTop = 9e4, t = r.scrollTop, l && t > l ? (d.style.overflowY = "scroll", t = l) : (d.style.overflowY = "hidden", c > t && (t = c)), t += f, o !== t && (d.style.height = t + "px", m && i.callback.call(d, d))
            }
            function u() {
                clearTimeout(h), h = setTimeout(function() {
                    var t = p.width();
                    t !== g && (g = t, a())
                }, parseInt(i.resizeDelay, 10))
            }
            var l, c, h, d = this, p = t(d), f = 0, m = t.isFunction(i.callback), v = {
                height: d.style.height,
                overflow: d.style.overflow,
                overflowY: d.style.overflowY,
                wordWrap: d.style.wordWrap,
                resize: d.style.resize
            }, g = p.width();
            p.data("autosize") || (p.data("autosize", !0), ("border-box" === p.css("box-sizing") || "border-box" === p.css("-moz-box-sizing") || "border-box" === p.css("-webkit-box-sizing")) && (f = p.outerHeight() - p.height()), c = Math.max(parseInt(p.css("minHeight"), 10) - f || 0, p.height()), p.css({
                overflow: "hidden",
                overflowY: "hidden",
                wordWrap: "break-word",
                resize: "none" === p.css("resize") || "vertical" === p.css("resize") ? "none": "horizontal"
            }), "onpropertychange"in d ? "oninput"in d ? p.on("input.autosize keyup.autosize", a) : p.on("propertychange.autosize", function() {
                "value" === event.propertyName && a()
            }) : p.on("input.autosize", a), i.resizeDelay!==!1 && t(window).on("resize.autosize", u), p.on("autosize.resize", a), p.on("autosize.resizeIncludeStyle", function() {
                e = null, a()
            }), p.on("autosize.destroy", function() {
                e = null, clearTimeout(h), t(window).off("resize", u), p.off("autosize").off(".autosize").css(v).removeData("autosize")
            }), a())
        })) : this
    }
}), function() {
    var t = [].slice;
    this.namespace = function(e, n, i) {
        var o, r, s, a, u, l;
        for (arguments.length < 3 && (u = ["undefined" != typeof exports ? exports: window].concat(t.call(arguments)), e = u[0], n = u[1], i = u[2]), r = e, l = n.split(".")
            , s = 0, a = l.length;
        a > s;
        s++)o = l[s], e = e[o] || (e[o] = {});
        return i(e, r)
    }
}.call(this), function() {
    var t = [].indexOf || function(t) {
        for (var e = 0, n = this.length; n > e; e++)
            if (e in this && this[e] === t)
                return e;
        return -1
    }, e = [].slice;
    namespace("Exo", function(n) {
        var i;
        return i = n.KeyboardManager = function() {
            function n(t) {
                var e;
                this.el = null != t ? t : null, this._responders = [], this.cid = "k" + o++, this.el || (this.el = document), this.$el = $(this.el), e = $.proxy(this, "_dispatch"), this.$el.on("keyup." + this.cid, e).on("keydown." + this.cid, e)
            }
            var o, r, s;
            return o = 0, r = {
                8: "backspace",
                9: "tab",
                12: "clear",
                13: "enter",
                27: "esc",
                32: "space",
                37: "left",
                38: "up",
                39: "right",
                40: "down",
                46: "delete",
                36: "home",
                35: "end",
                33: "pageup",
                34: "pagedown",
                188: ",",
                190: ".",
                191: "/",
                192: "`",
                189: "-",
                187: "=",
                186: ";",
                222: "'",
                219: "[",
                221: "]",
                220: "\\"
            }, s = {
                "⇧": 16,
                shift: 16,
                "⌥": 18,
                alt: 18,
                option: 18,
                "⌃": 17,
                ctrl: 17,
                control: 17,
                "⌘": 91,
                command: 91
            }, n.isNonPrintableKey = function(n) {
                var i, o, r;
                return r = [8, 9, 13, 16, 17, 18, 19, 20, 27, 33, 34, 35, 26, 46, 93], i = [37, 38, 39, 40, 91, 92], o = [112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 144, 145], t.call(e.call(r).concat(e.call(i), [o]), n) >= 0
            }, n.isPrintableKey = function(t) {
                return !i.isNonPrintableKey(t)
            }, n.keyStringFromEvent = function(t) {
                var e;
                return e = [], t.shiftKey && e.push("⇧"), t.altKey && e.push("⌥"), t.ctrlKey && e.push("⌃"), t.metaKey && e.push("⌘"), r[t.keyCode] ? e.push(r[t.keyCode]) : e.push(String.fromCharCode(t.keyCode)), e.join("+")
            }, n.prototype._dispatch = function(t) {
                var e, i;
                if (!this._responders.length)
                    return this;
                if (16 !== (i = t.keyCode) && 18 !== i && 17 !== i && 91 !== i)
                    return e = n.keyStringFromEvent(t), "keydown" === t.type ? this._handleKey("handleKeyDown", e, t) : "keyup" === t.type && this._handleKey("handleKeyUp", e, t), this
            }, n.prototype._handleKey = function(t, e, n) {
                var i, o, r, s, a;
                for (a = this._responders, r = 0, s = a.length; s > r; r++)
                    if (i = a[r], o = "function" == typeof i[t] ? i[t](e, n) 
                        : void 0, o===!1 || n.isPropagationStopped())return !1;
                return void 0
            }, n.prototype.firstResponder = function() {
                return this._responders[0]
            }, n.prototype.nominate = function(t) {
                var e;
                return e = this._responders.indexOf(t), e>-1 && this._responders.splice(e, 1), this._responders.unshift(t), this
            }, n.prototype.revoke = function(t) {
                var e;
                return e = this._responders.indexOf(t), 0 > e ? this : (this._responders.splice(e, 1), this)
            }, n.prototype.destroy = function() {
                return this.$el.off("keyup." + this.cid).off("keydown." + this.cid), this._responders = null
            }, n
        }()
    })
}.call(this), function() {
    var t = function(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    };
    this.Carousel = function() {
        function e(e, n) {
            this.el = e, null == n && (n = {}), this._onClick = t(this._onClick, this), this._arrowNext = t(this._arrowNext, this), this._arrowPrev = t(this._arrowPrev, this), this._loop = t(this._loop, this), this.next = t(this.next, this), this.prev = t(this.prev, this), this.start = t(this.start, this), this.$el = $(e), $.extend(this, n), this.$carouselItems = this.$el.find(".carousel-item"), this.$navItems = this.$el.find(".carousel-nav-item"), this.$el.on("click", ".carousel-nav-item", this._onClick), this.$el.on("click", ".carousel-arrow-left", this._arrowPrev), this.$el.on("click", ".carousel-arrow-right", this._arrowNext), this.currentIndex = 0, this.carouselSize = this.$carouselItems.size()
        }
        return e.prototype.duration = 6e3, e.prototype.start = function() {
            return this.to(this.currentIndex), this.carouselSize > 1 ? this.timeout = setTimeout(this._loop, this.duration) : void 0
        }, e.prototype.stop = function() {
            return clearTimeout(this.timeout)
        }, e.prototype.to = function(t) {
            return this.currentIndex = t >= this.carouselSize ? 0 : 0 > t ? this.carouselSize-1 : t, this.$navItems.removeClass("active"), this.$carouselItems.removeClass("active"), this.$carouselItems.eq(this.currentIndex).addClass("active"), this.$navItems.eq(this.currentIndex).addClass("active")
        }, e.prototype.prev = function() {
            return this.to(this.currentIndex-1)
        }, e.prototype.next = function() {
            return this.to(this.currentIndex + 1)
        }, e.prototype._loop = function() {
            return this.next(), this.timeout = setTimeout(this._loop, this.duration)
        }, e.prototype._arrowPrev = function(t) {
            return t.preventDefault(), this.stop(), this.prev()
        }, e.prototype._arrowNext = function(t) {
            return t.preventDefault(), this.stop(), this.next()
        }, e.prototype._onClick = function(t) {
            var e;
            return (e = t.currentTarget.getAttribute("data-state")) ? (this.to(~~parseInt(e, 10)), this.stop()) : void 0
        }, e
    }()
}.call(this), function() {
    var t = function(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }, e = [].slice;
    this.RemoteFileUploader = function() {
        function n(e) {
            return this.el = e, this.onClick = t(this.onClick, this), this.onDrop = t(this.onDrop, this), this.onDragEnd = t(this.onDragEnd, this), this.onDrag = t(this.onDrag, this), this.files = [], window.File && window.FileReader && window.FileList && window.Blob ? void 0 : !1
        }
        return n.UPLOAD_ENDPOINT = null, n.UPLOAD_PARAMS = null, function() {
            return $.getJSON("http://randomsubjectline.com/", function(t) {
                return n.UPLOAD_ENDPOINT = t.url, n.UPLOAD_PARAMS = t.multipart_params
            })
        }(), n.prototype.render = function() {
            return this.isRendered ? void 0 : (this.drop = document.createElement("div"), this.label = document.createElement("label"), this.output = document.createElement("output"), this.list = document.createElement("ul"), this.el.className += " remote-file-uploader", this.drop.className = "remote-file-uploader-dropzone", this.label.className = "remote-file-uploader-dropzone-label", this.output.className = "remote-file-uploader-output", this.list.className = "remote-file-uploader-output-list", this.label.innerHTML = "Drag &amp; drop files here to upload", this.output.appendChild(this.list), this.drop.appendChild(this.output), this.el.appendChild(this.label), this.el.appendChild(this.drop), this.drop.addEventListener("drop", this.onDrop, !1), this.drop.addEventListener("drag", this.onDrag, !1), this.drop.addEventListener("dragover", this.onDrag, !1), this.drop.addEventListener("dragend", this.onDragEnd, !1), this.list.addEventListener("click", this.onClick, !1), this.isRendered=!0, this)
        }, n.prototype.upload = function() {
            var t, n, i, o, r, s = this;
            for (n = 1 <= arguments.length ? e.call(arguments, 0) : [], r = [], i = 0, o = n.length; o > i; i++)
                t = n[i], r.push(function(t) {
                var e, n, i, o, r, a;
                return o = t.size, e = Math.floor(Math.log(o) / Math.log(1e3)), o = (o / Math.pow(1e3, e)).toFixed(0), r = "b Kb Mb Gb Tb Pb".split(" ")[e], n = document.createElement("li"), i = document.createElement("progress"), n.className = "remote-file-uploader-output-list-item", n.innerHTML = '<span class="name">' + t.name.replace(/[<>]/g, "") + '</span>\n<span class="type">' + (t.type || "n/a") + '</span>\n<span class="size">' + o + "</span><span class='units'>" + r + "</span>", i.min = 0, i.max = 100, i.value = 0, i.innerText = "0% complete", n.appendChild(i), s.list.appendChild(n), a = {
                    listItem: n,
                    progress: i
                }, null !== s.constructor.UPLOAD_ENDPOINT && null !== s.constructor.UPLOAD_PARAMS ? s._send(t, a) : void 0
            }(t));
            return r
        }, n.prototype._send = function(t, e) {
            var n, i, o, r, s, a = this;
            n = new FormData, s = this.constructor.UPLOAD_PARAMS;
            for (i in s)
                o = s[i], n.append(i, o);
            return n.append("file", t, t.name), r = new XMLHttpRequest, r.open("POST", this.constructor.UPLOAD_ENDPOINT, !0), r.onload = function(t) {
                var n, i;
                e.listItem.classList.remove("uploading"), 201 === r.status ? (i = document.createElement("a"), i.href = "#", i.className = "remove", i.innerText = "Remove", n = document.createElement("input"), n.type = "hidden", n.name = "file[]", n.value = t.target.responseXML.querySelector("Key").textContent, e.listItem.appendChild(i), e.listItem.appendChild(n), e.listItem.classList.add("uploaded")) : r.onerror.call(a, t)
            }, r.onerror = function() {
                e.listItem.classList.remove("uploading"), e.listItem.classList.add("failed")
            }, r.upload.onprogress = function(t) {
                t.lengthComputable && (e.progress.value = 100 * (t.loaded / t.total), e.progress.textContent = "" + e.progress.value + "%")
            }, e.listItem.classList.add("uploading"), r.send(n)
        }, n.prototype.onDrag = function(t) {
            return t.stopPropagation(), t.preventDefault(), t.dataTransfer.dropEffect = "copy", this.drop.classList.add("drag-enter")
        }, n.prototype.onDragEnd = function() {
            return this.drop.classList.remove("drag-enter")
        }, n.prototype.onDrop = function(t) {
            return t.stopPropagation(), t.preventDefault(), this.drop.classList.remove("drag-enter"), this.upload.apply(this, t.dataTransfer.files)
        }, n.prototype.onClick = function(t) {
            return t.target.classList.contains("remove") ? (t.preventDefault(), t.stopPropagation(), t.target.parentNode.parentNode.removeChild(t.target.parentNode)) : void 0
        }, n
    }.call(this)
}.call(this), function() {
    var t, e, n, i, o, r, s, a;
    t = $(document.body), n = t.find(".modal"), o = new RemoteFileUploader(n.find(".uploader").get(0)), o && o.render(), r = function() {
        var e;
        return t.addClass("modal-visible"), null != (e = window.history) && e.replaceState({}, document.title, "#contact"), document.body.style.offsetWidth, setTimeout(function() {
            return t.addClass("animate")
        }, 100), setTimeout(function() {
            return n.find('input[type="text"]').get(0).focus(), n.find("textarea.autosize:visible").trigger("autosize.resize")
        }, 250)
    }, i = function() {
        var e;
        return t.removeClass("animate"), null != (e = window.history) && e.replaceState({}, document.title, window.location.pathname), document.body.style.offsetWidth, setTimeout(function() {
            return t.removeClass("modal-visible")
        }, 350)
    }, "#contact" === location.hash && r(), e = null, n.find("form").on("submit", function(t) {
        t.preventDefault(), e = $(this), e.addClass("out"), n.find("#form-state-sending").addClass("active"), setTimeout(function() {
            return e.removeClass("animate active out")
        }, 500), $.ajax("http://randomsubjectline.com", {
            data: e.serialize(),
            type: "POST"
        }).done(function() {
            n.find(".form-state").removeClass("active"), n.find("#form-state-success").addClass("active")
        }).fail(function(t) {
            n.find(".form-state").removeClass("active"), 403 === t.status && "invalid email" === t.responseText ? n.find("#form-state-fail-email").addClass("active") : n.find("#form-state-fail-server").addClass("active")
        })
    }), n.on("click", ".form-state .button", function(t) {
        return t.preventDefault(), n.find(".form-state").removeClass("active"), e.addClass("active"), setTimeout(function() {
            return e.addClass("animate")
        }, 10)
    }), t.on("click", '[data-modal="contact"]', function(t) {
        return t.preventDefault(), r()
    }), t.on("keyup", function(t) {
        return 27 === t.which ? i() : void 0
    }), n.on("click", ".modal-close", function(t) {
        return t.preventDefault(), i()
    }), s = null, a = null, n.on("click", ".switch-form-type a", function(t) {
        var e, n, i, o;
        return t.preventDefault(), clearTimeout(s), clearTimeout(a), i = this.getAttribute("data-form"), o = "simple" === i ? "advanced" : "simple", n = $("#contact-form-" + o).addClass("out"), e = $("#contact-form-" + i).removeClass("out").addClass("active"), s = setTimeout(function() {
            return e.addClass("animate")
        }, 100), a = setTimeout(function() {
            return n.removeClass("animate active out")
        }, 600)
    }), n.on("click", ".check-buttons .check-button input", function() {
        var t;
        return "not sure" === this.value ? ($(this).parents(".check-buttons").find(".check-button input").each(function() {
            return this.checked=!1, !0
        }), this.checked=!0) : (console.log("not not sure"), t = $(this).parents(".check-buttons").find(".check-button-not-sure").prop("checked", !1))
    }), n.on("change focus keydown keyup", ".form-row label input, .form-row label textarea, .form-row label select", function() {
        var t;
        return t = $(this), t.parents("label").toggleClass("animate", "" !== t.val())
    })
}.call(this), function() {
    var t, e;
    t = $(document.body), t.on("click", "a", function(e) {
        var n, i, o, r;
        return this.host === window.location.host && this.pathname === window.location.pathname && this.hash && (i = this.hash, n = $(this.hash), o = $(".hero-nav").outerHeight() || 0, n.length) ? (e.preventDefault(), null != (r = window.history) && r.replaceState({}, document.title, i), t.stop().animate({
            scrollTop: n.offset().top - o
        }, 500)) : void 0
    }), t.find("textarea.autosize").autosize({
        append: "\n"
    }), $("#navigation-icon").on("click", function(e) {
        return e.preventDefault(), t.toggleClass("navigation-open")
    }), $("#header-jobs a").on("click", function() {
        return "undefined" != typeof localStorage && null !== localStorage && localStorage.setItem("jobs", 1), $("#header-jobs").hide()
    }), ScrollAnimation.start(), $(window).load(function() {
        return ScrollAnimation.refresh()
    }), $(".hero-scroll-up").on("click", function(t) {
        return t.preventDefault(), $("html,body").animate({
            scrollTop: 0
        })
    }), e = null, window.addEventListener("scroll", function() {
        return document.body.classList.contains("disable-pointer") || document.body.classList.add("disable-pointer"), clearTimeout(e), e = setTimeout(function() {
            return document.body.classList.remove("disable-pointer")
        }, 400)
    }), setTimeout(function() {
        return t.addClass("wf-timeout")
    }, 1e3)
}.call(this);
