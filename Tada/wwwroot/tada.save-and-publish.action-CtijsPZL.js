import { UMB_DOCUMENT_WORKSPACE_CONTEXT as ge } from "@umbraco-cms/backoffice/document";
import { UmbWorkspaceActionBase as Me } from "@umbraco-cms/backoffice/workspace";
var B = {};
(function I(m, w, E, C) {
  var P = !!(m.Worker && m.Blob && m.Promise && m.OffscreenCanvas && m.OffscreenCanvasRenderingContext2D && m.HTMLCanvasElement && m.HTMLCanvasElement.prototype.transferControlToOffscreen && m.URL && m.URL.createObjectURL), N = typeof Path2D == "function" && typeof DOMMatrix == "function", V = function() {
    if (!m.OffscreenCanvas)
      return !1;
    var a = new OffscreenCanvas(1, 1), e = a.getContext("2d");
    e.fillRect(0, 0, 1, 1);
    var r = a.transferToImageBitmap();
    try {
      e.createPattern(r, "no-repeat");
    } catch {
      return !1;
    }
    return !0;
  }();
  function L() {
  }
  function F(a) {
    var e = w.exports.Promise, r = e !== void 0 ? e : m.Promise;
    return typeof r == "function" ? new r(a) : (a(L, L), null);
  }
  var R = /* @__PURE__ */ function(a, e) {
    return {
      transform: function(r) {
        if (a)
          return r;
        if (e.has(r))
          return e.get(r);
        var t = new OffscreenCanvas(r.width, r.height), o = t.getContext("2d");
        return o.drawImage(r, 0, 0), e.set(r, t), t;
      },
      clear: function() {
        e.clear();
      }
    };
  }(V, /* @__PURE__ */ new Map()), S = function() {
    var a = Math.floor(16.666666666666668), e, r, t = {}, o = 0;
    return typeof requestAnimationFrame == "function" && typeof cancelAnimationFrame == "function" ? (e = function(i) {
      var l = Math.random();
      return t[l] = requestAnimationFrame(function n(s) {
        o === s || o + a - 1 < s ? (o = s, delete t[l], i()) : t[l] = requestAnimationFrame(n);
      }), l;
    }, r = function(i) {
      t[i] && cancelAnimationFrame(t[i]);
    }) : (e = function(i) {
      return setTimeout(i, a);
    }, r = function(i) {
      return clearTimeout(i);
    }), { frame: e, cancel: r };
  }(), Z = /* @__PURE__ */ function() {
    var a, e, r = {};
    function t(o) {
      function i(l, n) {
        o.postMessage({ options: l || {}, callback: n });
      }
      o.init = function(n) {
        var s = n.transferControlToOffscreen();
        o.postMessage({ canvas: s }, [s]);
      }, o.fire = function(n, s, u) {
        if (e)
          return i(n, null), e;
        var d = Math.random().toString(36).slice(2);
        return e = F(function(h) {
          function f(p) {
            p.data.callback === d && (delete r[d], o.removeEventListener("message", f), e = null, R.clear(), u(), h());
          }
          o.addEventListener("message", f), i(n, d), r[d] = f.bind(null, { data: { callback: d } });
        }), e;
      }, o.reset = function() {
        o.postMessage({ reset: !0 });
        for (var n in r)
          r[n](), delete r[n];
      };
    }
    return function() {
      if (a)
        return a;
      if (!E && P) {
        var o = [
          "var CONFETTI, SIZE = {}, module = {};",
          "(" + I.toString() + ")(this, module, true, SIZE);",
          "onmessage = function(msg) {",
          "  if (msg.data.options) {",
          "    CONFETTI(msg.data.options).then(function () {",
          "      if (msg.data.callback) {",
          "        postMessage({ callback: msg.data.callback });",
          "      }",
          "    });",
          "  } else if (msg.data.reset) {",
          "    CONFETTI && CONFETTI.reset();",
          "  } else if (msg.data.resize) {",
          "    SIZE.width = msg.data.resize.width;",
          "    SIZE.height = msg.data.resize.height;",
          "  } else if (msg.data.canvas) {",
          "    SIZE.width = msg.data.canvas.width;",
          "    SIZE.height = msg.data.canvas.height;",
          "    CONFETTI = module.exports.create(msg.data.canvas);",
          "  }",
          "}"
        ].join(`
`);
        try {
          a = new Worker(URL.createObjectURL(new Blob([o])));
        } catch (i) {
          return typeof console !== void 0 && typeof console.warn == "function" && console.warn("🎊 Could not load worker", i), null;
        }
        t(a);
      }
      return a;
    };
  }(), q = {
    particleCount: 50,
    angle: 90,
    spread: 45,
    startVelocity: 45,
    decay: 0.9,
    gravity: 1,
    drift: 0,
    ticks: 200,
    x: 0.5,
    y: 0.5,
    shapes: ["square", "circle"],
    zIndex: 100,
    colors: [
      "#26ccff",
      "#a25afd",
      "#ff5e7e",
      "#88ff5a",
      "#fcff42",
      "#ffa62d",
      "#ff36ff"
    ],
    // probably should be true, but back-compat
    disableForReducedMotion: !1,
    scalar: 1
  };
  function H(a, e) {
    return e ? e(a) : a;
  }
  function K(a) {
    return a != null;
  }
  function v(a, e, r) {
    return H(
      a && K(a[e]) ? a[e] : q[e],
      r
    );
  }
  function G(a) {
    return a < 0 ? 0 : Math.floor(a);
  }
  function J(a, e) {
    return Math.floor(Math.random() * (e - a)) + a;
  }
  function O(a) {
    return parseInt(a, 16);
  }
  function Q(a) {
    return a.map(X);
  }
  function X(a) {
    var e = String(a).replace(/[^0-9a-f]/gi, "");
    return e.length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), {
      r: O(e.substring(0, 2)),
      g: O(e.substring(2, 4)),
      b: O(e.substring(4, 6))
    };
  }
  function $(a) {
    var e = v(a, "origin", Object);
    return e.x = v(e, "x", Number), e.y = v(e, "y", Number), e;
  }
  function Y(a) {
    a.width = document.documentElement.clientWidth, a.height = document.documentElement.clientHeight;
  }
  function ee(a) {
    var e = a.getBoundingClientRect();
    a.width = e.width, a.height = e.height;
  }
  function ae(a) {
    var e = document.createElement("canvas");
    return e.style.position = "fixed", e.style.top = "0px", e.style.left = "0px", e.style.pointerEvents = "none", e.style.zIndex = a, e;
  }
  function re(a, e, r, t, o, i, l, n, s) {
    a.save(), a.translate(e, r), a.rotate(i), a.scale(t, o), a.arc(0, 0, 1, l, n, s), a.restore();
  }
  function ne(a) {
    var e = a.angle * (Math.PI / 180), r = a.spread * (Math.PI / 180);
    return {
      x: a.x,
      y: a.y,
      wobble: Math.random() * 10,
      wobbleSpeed: Math.min(0.11, Math.random() * 0.1 + 0.05),
      velocity: a.startVelocity * 0.5 + Math.random() * a.startVelocity,
      angle2D: -e + (0.5 * r - Math.random() * r),
      tiltAngle: (Math.random() * (0.75 - 0.25) + 0.25) * Math.PI,
      color: a.color,
      shape: a.shape,
      tick: 0,
      totalTicks: a.ticks,
      decay: a.decay,
      drift: a.drift,
      random: Math.random() + 2,
      tiltSin: 0,
      tiltCos: 0,
      wobbleX: 0,
      wobbleY: 0,
      gravity: a.gravity * 3,
      ovalScalar: 0.6,
      scalar: a.scalar,
      flat: a.flat
    };
  }
  function te(a, e) {
    e.x += Math.cos(e.angle2D) * e.velocity + e.drift, e.y += Math.sin(e.angle2D) * e.velocity + e.gravity, e.velocity *= e.decay, e.flat ? (e.wobble = 0, e.wobbleX = e.x + 10 * e.scalar, e.wobbleY = e.y + 10 * e.scalar, e.tiltSin = 0, e.tiltCos = 0, e.random = 1) : (e.wobble += e.wobbleSpeed, e.wobbleX = e.x + 10 * e.scalar * Math.cos(e.wobble), e.wobbleY = e.y + 10 * e.scalar * Math.sin(e.wobble), e.tiltAngle += 0.1, e.tiltSin = Math.sin(e.tiltAngle), e.tiltCos = Math.cos(e.tiltAngle), e.random = Math.random() + 2);
    var r = e.tick++ / e.totalTicks, t = e.x + e.random * e.tiltCos, o = e.y + e.random * e.tiltSin, i = e.wobbleX + e.random * e.tiltCos, l = e.wobbleY + e.random * e.tiltSin;
    if (a.fillStyle = "rgba(" + e.color.r + ", " + e.color.g + ", " + e.color.b + ", " + (1 - r) + ")", a.beginPath(), N && e.shape.type === "path" && typeof e.shape.path == "string" && Array.isArray(e.shape.matrix))
      a.fill(ie(
        e.shape.path,
        e.shape.matrix,
        e.x,
        e.y,
        Math.abs(i - t) * 0.1,
        Math.abs(l - o) * 0.1,
        Math.PI / 10 * e.wobble
      ));
    else if (e.shape.type === "bitmap") {
      var n = Math.PI / 10 * e.wobble, s = Math.abs(i - t) * 0.1, u = Math.abs(l - o) * 0.1, d = e.shape.bitmap.width * e.scalar, h = e.shape.bitmap.height * e.scalar, f = new DOMMatrix([
        Math.cos(n) * s,
        Math.sin(n) * s,
        -Math.sin(n) * u,
        Math.cos(n) * u,
        e.x,
        e.y
      ]);
      f.multiplySelf(new DOMMatrix(e.shape.matrix));
      var p = a.createPattern(R.transform(e.shape.bitmap), "no-repeat");
      p.setTransform(f), a.globalAlpha = 1 - r, a.fillStyle = p, a.fillRect(
        e.x - d / 2,
        e.y - h / 2,
        d,
        h
      ), a.globalAlpha = 1;
    } else if (e.shape === "circle")
      a.ellipse ? a.ellipse(e.x, e.y, Math.abs(i - t) * e.ovalScalar, Math.abs(l - o) * e.ovalScalar, Math.PI / 10 * e.wobble, 0, 2 * Math.PI) : re(a, e.x, e.y, Math.abs(i - t) * e.ovalScalar, Math.abs(l - o) * e.ovalScalar, Math.PI / 10 * e.wobble, 0, 2 * Math.PI);
    else if (e.shape === "star")
      for (var c = Math.PI / 2 * 3, g = 4 * e.scalar, M = 8 * e.scalar, y = e.x, T = e.y, x = 5, b = Math.PI / x; x--; )
        y = e.x + Math.cos(c) * M, T = e.y + Math.sin(c) * M, a.lineTo(y, T), c += b, y = e.x + Math.cos(c) * g, T = e.y + Math.sin(c) * g, a.lineTo(y, T), c += b;
    else
      a.moveTo(Math.floor(e.x), Math.floor(e.y)), a.lineTo(Math.floor(e.wobbleX), Math.floor(o)), a.lineTo(Math.floor(i), Math.floor(l)), a.lineTo(Math.floor(t), Math.floor(e.wobbleY));
    return a.closePath(), a.fill(), e.tick < e.totalTicks;
  }
  function oe(a, e, r, t, o) {
    var i = e.slice(), l = a.getContext("2d"), n, s, u = F(function(d) {
      function h() {
        n = s = null, l.clearRect(0, 0, t.width, t.height), R.clear(), o(), d();
      }
      function f() {
        E && !(t.width === C.width && t.height === C.height) && (t.width = a.width = C.width, t.height = a.height = C.height), !t.width && !t.height && (r(a), t.width = a.width, t.height = a.height), l.clearRect(0, 0, t.width, t.height), i = i.filter(function(p) {
          return te(l, p);
        }), i.length ? n = S.frame(f) : h();
      }
      n = S.frame(f), s = h;
    });
    return {
      addFettis: function(d) {
        return i = i.concat(d), u;
      },
      canvas: a,
      promise: u,
      reset: function() {
        n && S.cancel(n), s && s();
      }
    };
  }
  function W(a, e) {
    var r = !a, t = !!v(e || {}, "resize"), o = !1, i = v(e, "disableForReducedMotion", Boolean), l = P && !!v(e || {}, "useWorker"), n = l ? Z() : null, s = r ? Y : ee, u = a && n ? !!a.__confetti_initialized : !1, d = typeof matchMedia == "function" && matchMedia("(prefers-reduced-motion)").matches, h;
    function f(c, g, M) {
      for (var y = v(c, "particleCount", G), T = v(c, "angle", Number), x = v(c, "spread", Number), b = v(c, "startVelocity", Number), ce = v(c, "decay", Number), ue = v(c, "gravity", Number), he = v(c, "drift", Number), j = v(c, "colors", Q), de = v(c, "ticks", Number), D = v(c, "shapes"), fe = v(c, "scalar"), ve = !!v(c, "flat"), _ = $(c), z = y, A = [], me = a.width * _.x, pe = a.height * _.y; z--; )
        A.push(
          ne({
            x: me,
            y: pe,
            angle: T,
            spread: x,
            startVelocity: b,
            color: j[z % j.length],
            shape: D[J(0, D.length)],
            ticks: de,
            decay: ce,
            gravity: ue,
            drift: he,
            scalar: fe,
            flat: ve
          })
        );
      return h ? h.addFettis(A) : (h = oe(a, A, s, g, M), h.promise);
    }
    function p(c) {
      var g = i || v(c, "disableForReducedMotion", Boolean), M = v(c, "zIndex", Number);
      if (g && d)
        return F(function(b) {
          b();
        });
      r && h ? a = h.canvas : r && !a && (a = ae(M), document.body.appendChild(a)), t && !u && s(a);
      var y = {
        width: a.width,
        height: a.height
      };
      n && !u && n.init(a), u = !0, n && (a.__confetti_initialized = !0);
      function T() {
        if (n) {
          var b = {
            getBoundingClientRect: function() {
              if (!r)
                return a.getBoundingClientRect();
            }
          };
          s(b), n.postMessage({
            resize: {
              width: b.width,
              height: b.height
            }
          });
          return;
        }
        y.width = y.height = null;
      }
      function x() {
        h = null, t && (o = !1, m.removeEventListener("resize", T)), r && a && (document.body.contains(a) && document.body.removeChild(a), a = null, u = !1);
      }
      return t && !o && (o = !0, m.addEventListener("resize", T, !1)), n ? n.fire(c, y, x) : f(c, y, x);
    }
    return p.reset = function() {
      n && n.reset(), h && h.reset();
    }, p;
  }
  var k;
  function U() {
    return k || (k = W(null, { useWorker: !0, resize: !0 })), k;
  }
  function ie(a, e, r, t, o, i, l) {
    var n = new Path2D(a), s = new Path2D();
    s.addPath(n, new DOMMatrix(e));
    var u = new Path2D();
    return u.addPath(s, new DOMMatrix([
      Math.cos(l) * o,
      Math.sin(l) * o,
      -Math.sin(l) * i,
      Math.cos(l) * i,
      r,
      t
    ])), u;
  }
  function le(a) {
    if (!N)
      throw new Error("path confetti are not supported in this browser");
    var e, r;
    typeof a == "string" ? e = a : (e = a.path, r = a.matrix);
    var t = new Path2D(e), o = document.createElement("canvas"), i = o.getContext("2d");
    if (!r) {
      for (var l = 1e3, n = l, s = l, u = 0, d = 0, h, f, p = 0; p < l; p += 2)
        for (var c = 0; c < l; c += 2)
          i.isPointInPath(t, p, c, "nonzero") && (n = Math.min(n, p), s = Math.min(s, c), u = Math.max(u, p), d = Math.max(d, c));
      h = u - n, f = d - s;
      var g = 10, M = Math.min(g / h, g / f);
      r = [
        M,
        0,
        0,
        M,
        -Math.round(h / 2 + n) * M,
        -Math.round(f / 2 + s) * M
      ];
    }
    return {
      type: "path",
      path: e,
      matrix: r
    };
  }
  function se(a) {
    var e, r = 1, t = "#000000", o = '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';
    typeof a == "string" ? e = a : (e = a.text, r = "scalar" in a ? a.scalar : r, o = "fontFamily" in a ? a.fontFamily : o, t = "color" in a ? a.color : t);
    var i = 10 * r, l = "" + i + "px " + o, n = new OffscreenCanvas(i, i), s = n.getContext("2d");
    s.font = l;
    var u = s.measureText(e), d = Math.ceil(u.actualBoundingBoxRight + u.actualBoundingBoxLeft), h = Math.ceil(u.actualBoundingBoxAscent + u.actualBoundingBoxDescent), f = 2, p = u.actualBoundingBoxLeft + f, c = u.actualBoundingBoxAscent + f;
    d += f + f, h += f + f, n = new OffscreenCanvas(d, h), s = n.getContext("2d"), s.font = l, s.fillStyle = t, s.fillText(e, p, c);
    var g = 1 / r;
    return {
      type: "bitmap",
      // TODO these probably need to be transfered for workers
      bitmap: n.transferToImageBitmap(),
      matrix: [g, 0, 0, g, -d * g / 2, -h * g / 2]
    };
  }
  w.exports = function() {
    return U().apply(this, arguments);
  }, w.exports.reset = function() {
    U().reset();
  }, w.exports.create = W, w.exports.shapeFromPath = le, w.exports.shapeFromText = se;
})(/* @__PURE__ */ function() {
  return typeof window < "u" ? window : typeof self < "u" ? self : this || {};
}(), B, !1);
const ye = B.exports;
B.exports.create;
function be() {
  const m = {
    origin: { y: 0.7 },
    ticks: 5e3
  };
  function w(C, P) {
    ye({
      ...m,
      ...P,
      particleCount: Math.floor(200 * C)
    });
  }
  [
    { particleRatio: 0.25, opts: { spread: 26, startVelocity: 55 } },
    { particleRatio: 0.2, opts: { spread: 60 } },
    { particleRatio: 0.35, opts: { spread: 100, decay: 0.91, scalar: 0.8 } },
    { particleRatio: 0.1, opts: { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 } },
    { particleRatio: 0.1, opts: { spread: 120, startVelocity: 45 } }
  ].forEach((C) => w(C.particleRatio, C.opts));
}
class Te extends Me {
  async execute() {
    try {
      await (await this.getContext(ge)).saveAndPublish(), new Audio("https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-adam-a-johnson/aaj_0164_SmllCrwdClppng2.mp3").play(), be();
    } catch (m) {
      console.error("Failed to save and publish document", m);
    }
  }
}
export {
  Te as default
};
//# sourceMappingURL=tada.save-and-publish.action-CtijsPZL.js.map
