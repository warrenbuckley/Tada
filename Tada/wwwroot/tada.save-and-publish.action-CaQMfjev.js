import { UMB_DOCUMENT_WORKSPACE_CONTEXT as ge } from "@umbraco-cms/backoffice/document";
import { UmbWorkspaceActionBase as Me } from "@umbraco-cms/backoffice/workspace";
var B = {};
(function I(m, M, P, C) {
  var E = !!(m.Worker && m.Blob && m.Promise && m.OffscreenCanvas && m.OffscreenCanvasRenderingContext2D && m.HTMLCanvasElement && m.HTMLCanvasElement.prototype.transferControlToOffscreen && m.URL && m.URL.createObjectURL), N = typeof Path2D == "function" && typeof DOMMatrix == "function", _ = function() {
    if (!m.OffscreenCanvas)
      return !1;
    var r = new OffscreenCanvas(1, 1), e = r.getContext("2d");
    e.fillRect(0, 0, 1, 1);
    var a = r.transferToImageBitmap();
    try {
      e.createPattern(a, "no-repeat");
    } catch {
      return !1;
    }
    return !0;
  }();
  function L() {
  }
  function F(r) {
    var e = M.exports.Promise, a = e !== void 0 ? e : m.Promise;
    return typeof a == "function" ? new a(r) : (r(L, L), null);
  }
  var R = /* @__PURE__ */ function(r, e) {
    return {
      transform: function(a) {
        if (r)
          return a;
        if (e.has(a))
          return e.get(a);
        var t = new OffscreenCanvas(a.width, a.height), o = t.getContext("2d");
        return o.drawImage(a, 0, 0), e.set(a, t), t;
      },
      clear: function() {
        e.clear();
      }
    };
  }(_, /* @__PURE__ */ new Map()), O = function() {
    var r = Math.floor(16.666666666666668), e, a, t = {}, o = 0;
    return typeof requestAnimationFrame == "function" && typeof cancelAnimationFrame == "function" ? (e = function(i) {
      var l = Math.random();
      return t[l] = requestAnimationFrame(function n(s) {
        o === s || o + r - 1 < s ? (o = s, delete t[l], i()) : t[l] = requestAnimationFrame(n);
      }), l;
    }, a = function(i) {
      t[i] && cancelAnimationFrame(t[i]);
    }) : (e = function(i) {
      return setTimeout(i, r);
    }, a = function(i) {
      return clearTimeout(i);
    }), { frame: e, cancel: a };
  }(), Z = /* @__PURE__ */ function() {
    var r, e, a = {};
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
            p.data.callback === d && (delete a[d], o.removeEventListener("message", f), e = null, R.clear(), u(), h());
          }
          o.addEventListener("message", f), i(n, d), a[d] = f.bind(null, { data: { callback: d } });
        }), e;
      }, o.reset = function() {
        o.postMessage({ reset: !0 });
        for (var n in a)
          a[n](), delete a[n];
      };
    }
    return function() {
      if (r)
        return r;
      if (!P && E) {
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
          r = new Worker(URL.createObjectURL(new Blob([o])));
        } catch (i) {
          return typeof console !== void 0 && typeof console.warn == "function" && console.warn("🎊 Could not load worker", i), null;
        }
        t(r);
      }
      return r;
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
  function H(r, e) {
    return e ? e(r) : r;
  }
  function K(r) {
    return r != null;
  }
  function v(r, e, a) {
    return H(
      r && K(r[e]) ? r[e] : q[e],
      a
    );
  }
  function G(r) {
    return r < 0 ? 0 : Math.floor(r);
  }
  function J(r, e) {
    return Math.floor(Math.random() * (e - r)) + r;
  }
  function S(r) {
    return parseInt(r, 16);
  }
  function Q(r) {
    return r.map(X);
  }
  function X(r) {
    var e = String(r).replace(/[^0-9a-f]/gi, "");
    return e.length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), {
      r: S(e.substring(0, 2)),
      g: S(e.substring(2, 4)),
      b: S(e.substring(4, 6))
    };
  }
  function $(r) {
    var e = v(r, "origin", Object);
    return e.x = v(e, "x", Number), e.y = v(e, "y", Number), e;
  }
  function Y(r) {
    r.width = document.documentElement.clientWidth, r.height = document.documentElement.clientHeight;
  }
  function ee(r) {
    var e = r.getBoundingClientRect();
    r.width = e.width, r.height = e.height;
  }
  function re(r) {
    var e = document.createElement("canvas");
    return e.style.position = "fixed", e.style.top = "0px", e.style.left = "0px", e.style.pointerEvents = "none", e.style.zIndex = r, e;
  }
  function ae(r, e, a, t, o, i, l, n, s) {
    r.save(), r.translate(e, a), r.rotate(i), r.scale(t, o), r.arc(0, 0, 1, l, n, s), r.restore();
  }
  function ne(r) {
    var e = r.angle * (Math.PI / 180), a = r.spread * (Math.PI / 180);
    return {
      x: r.x,
      y: r.y,
      wobble: Math.random() * 10,
      wobbleSpeed: Math.min(0.11, Math.random() * 0.1 + 0.05),
      velocity: r.startVelocity * 0.5 + Math.random() * r.startVelocity,
      angle2D: -e + (0.5 * a - Math.random() * a),
      tiltAngle: (Math.random() * (0.75 - 0.25) + 0.25) * Math.PI,
      color: r.color,
      shape: r.shape,
      tick: 0,
      totalTicks: r.ticks,
      decay: r.decay,
      drift: r.drift,
      random: Math.random() + 2,
      tiltSin: 0,
      tiltCos: 0,
      wobbleX: 0,
      wobbleY: 0,
      gravity: r.gravity * 3,
      ovalScalar: 0.6,
      scalar: r.scalar,
      flat: r.flat
    };
  }
  function te(r, e) {
    e.x += Math.cos(e.angle2D) * e.velocity + e.drift, e.y += Math.sin(e.angle2D) * e.velocity + e.gravity, e.velocity *= e.decay, e.flat ? (e.wobble = 0, e.wobbleX = e.x + 10 * e.scalar, e.wobbleY = e.y + 10 * e.scalar, e.tiltSin = 0, e.tiltCos = 0, e.random = 1) : (e.wobble += e.wobbleSpeed, e.wobbleX = e.x + 10 * e.scalar * Math.cos(e.wobble), e.wobbleY = e.y + 10 * e.scalar * Math.sin(e.wobble), e.tiltAngle += 0.1, e.tiltSin = Math.sin(e.tiltAngle), e.tiltCos = Math.cos(e.tiltAngle), e.random = Math.random() + 2);
    var a = e.tick++ / e.totalTicks, t = e.x + e.random * e.tiltCos, o = e.y + e.random * e.tiltSin, i = e.wobbleX + e.random * e.tiltCos, l = e.wobbleY + e.random * e.tiltSin;
    if (r.fillStyle = "rgba(" + e.color.r + ", " + e.color.g + ", " + e.color.b + ", " + (1 - a) + ")", r.beginPath(), N && e.shape.type === "path" && typeof e.shape.path == "string" && Array.isArray(e.shape.matrix))
      r.fill(ie(
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
      var p = r.createPattern(R.transform(e.shape.bitmap), "no-repeat");
      p.setTransform(f), r.globalAlpha = 1 - a, r.fillStyle = p, r.fillRect(
        e.x - d / 2,
        e.y - h / 2,
        d,
        h
      ), r.globalAlpha = 1;
    } else if (e.shape === "circle")
      r.ellipse ? r.ellipse(e.x, e.y, Math.abs(i - t) * e.ovalScalar, Math.abs(l - o) * e.ovalScalar, Math.PI / 10 * e.wobble, 0, 2 * Math.PI) : ae(r, e.x, e.y, Math.abs(i - t) * e.ovalScalar, Math.abs(l - o) * e.ovalScalar, Math.PI / 10 * e.wobble, 0, 2 * Math.PI);
    else if (e.shape === "star")
      for (var c = Math.PI / 2 * 3, g = 4 * e.scalar, y = 8 * e.scalar, b = e.x, T = e.y, x = 5, w = Math.PI / x; x--; )
        b = e.x + Math.cos(c) * y, T = e.y + Math.sin(c) * y, r.lineTo(b, T), c += w, b = e.x + Math.cos(c) * g, T = e.y + Math.sin(c) * g, r.lineTo(b, T), c += w;
    else
      r.moveTo(Math.floor(e.x), Math.floor(e.y)), r.lineTo(Math.floor(e.wobbleX), Math.floor(o)), r.lineTo(Math.floor(i), Math.floor(l)), r.lineTo(Math.floor(t), Math.floor(e.wobbleY));
    return r.closePath(), r.fill(), e.tick < e.totalTicks;
  }
  function oe(r, e, a, t, o) {
    var i = e.slice(), l = r.getContext("2d"), n, s, u = F(function(d) {
      function h() {
        n = s = null, l.clearRect(0, 0, t.width, t.height), R.clear(), o(), d();
      }
      function f() {
        P && !(t.width === C.width && t.height === C.height) && (t.width = r.width = C.width, t.height = r.height = C.height), !t.width && !t.height && (a(r), t.width = r.width, t.height = r.height), l.clearRect(0, 0, t.width, t.height), i = i.filter(function(p) {
          return te(l, p);
        }), i.length ? n = O.frame(f) : h();
      }
      n = O.frame(f), s = h;
    });
    return {
      addFettis: function(d) {
        return i = i.concat(d), u;
      },
      canvas: r,
      promise: u,
      reset: function() {
        n && O.cancel(n), s && s();
      }
    };
  }
  function W(r, e) {
    var a = !r, t = !!v(e || {}, "resize"), o = !1, i = v(e, "disableForReducedMotion", Boolean), l = E && !!v(e || {}, "useWorker"), n = l ? Z() : null, s = a ? Y : ee, u = r && n ? !!r.__confetti_initialized : !1, d = typeof matchMedia == "function" && matchMedia("(prefers-reduced-motion)").matches, h;
    function f(c, g, y) {
      for (var b = v(c, "particleCount", G), T = v(c, "angle", Number), x = v(c, "spread", Number), w = v(c, "startVelocity", Number), ce = v(c, "decay", Number), ue = v(c, "gravity", Number), he = v(c, "drift", Number), D = v(c, "colors", Q), de = v(c, "ticks", Number), j = v(c, "shapes"), fe = v(c, "scalar"), ve = !!v(c, "flat"), z = $(c), V = b, A = [], me = r.width * z.x, pe = r.height * z.y; V--; )
        A.push(
          ne({
            x: me,
            y: pe,
            angle: T,
            spread: x,
            startVelocity: w,
            color: D[V % D.length],
            shape: j[J(0, j.length)],
            ticks: de,
            decay: ce,
            gravity: ue,
            drift: he,
            scalar: fe,
            flat: ve
          })
        );
      return h ? h.addFettis(A) : (h = oe(r, A, s, g, y), h.promise);
    }
    function p(c) {
      var g = i || v(c, "disableForReducedMotion", Boolean), y = v(c, "zIndex", Number);
      if (g && d)
        return F(function(w) {
          w();
        });
      a && h ? r = h.canvas : a && !r && (r = re(y), document.body.appendChild(r)), t && !u && s(r);
      var b = {
        width: r.width,
        height: r.height
      };
      n && !u && n.init(r), u = !0, n && (r.__confetti_initialized = !0);
      function T() {
        if (n) {
          var w = {
            getBoundingClientRect: function() {
              if (!a)
                return r.getBoundingClientRect();
            }
          };
          s(w), n.postMessage({
            resize: {
              width: w.width,
              height: w.height
            }
          });
          return;
        }
        b.width = b.height = null;
      }
      function x() {
        h = null, t && (o = !1, m.removeEventListener("resize", T)), a && r && (document.body.contains(r) && document.body.removeChild(r), r = null, u = !1);
      }
      return t && !o && (o = !0, m.addEventListener("resize", T, !1)), n ? n.fire(c, b, x) : f(c, b, x);
    }
    return p.reset = function() {
      n && n.reset(), h && h.reset();
    }, p;
  }
  var k;
  function U() {
    return k || (k = W(null, { useWorker: !0, resize: !0 })), k;
  }
  function ie(r, e, a, t, o, i, l) {
    var n = new Path2D(r), s = new Path2D();
    s.addPath(n, new DOMMatrix(e));
    var u = new Path2D();
    return u.addPath(s, new DOMMatrix([
      Math.cos(l) * o,
      Math.sin(l) * o,
      -Math.sin(l) * i,
      Math.cos(l) * i,
      a,
      t
    ])), u;
  }
  function le(r) {
    if (!N)
      throw new Error("path confetti are not supported in this browser");
    var e, a;
    typeof r == "string" ? e = r : (e = r.path, a = r.matrix);
    var t = new Path2D(e), o = document.createElement("canvas"), i = o.getContext("2d");
    if (!a) {
      for (var l = 1e3, n = l, s = l, u = 0, d = 0, h, f, p = 0; p < l; p += 2)
        for (var c = 0; c < l; c += 2)
          i.isPointInPath(t, p, c, "nonzero") && (n = Math.min(n, p), s = Math.min(s, c), u = Math.max(u, p), d = Math.max(d, c));
      h = u - n, f = d - s;
      var g = 10, y = Math.min(g / h, g / f);
      a = [
        y,
        0,
        0,
        y,
        -Math.round(h / 2 + n) * y,
        -Math.round(f / 2 + s) * y
      ];
    }
    return {
      type: "path",
      path: e,
      matrix: a
    };
  }
  function se(r) {
    var e, a = 1, t = "#000000", o = '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';
    typeof r == "string" ? e = r : (e = r.text, a = "scalar" in r ? r.scalar : a, o = "fontFamily" in r ? r.fontFamily : o, t = "color" in r ? r.color : t);
    var i = 10 * a, l = "" + i + "px " + o, n = new OffscreenCanvas(i, i), s = n.getContext("2d");
    s.font = l;
    var u = s.measureText(e), d = Math.ceil(u.actualBoundingBoxRight + u.actualBoundingBoxLeft), h = Math.ceil(u.actualBoundingBoxAscent + u.actualBoundingBoxDescent), f = 2, p = u.actualBoundingBoxLeft + f, c = u.actualBoundingBoxAscent + f;
    d += f + f, h += f + f, n = new OffscreenCanvas(d, h), s = n.getContext("2d"), s.font = l, s.fillStyle = t, s.fillText(e, p, c);
    var g = 1 / a;
    return {
      type: "bitmap",
      // TODO these probably need to be transfered for workers
      bitmap: n.transferToImageBitmap(),
      matrix: [g, 0, 0, g, -d * g / 2, -h * g / 2]
    };
  }
  M.exports = function() {
    return U().apply(this, arguments);
  }, M.exports.reset = function() {
    U().reset();
  }, M.exports.create = W, M.exports.shapeFromPath = le, M.exports.shapeFromText = se;
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
  function M(C, E) {
    ye({
      ...m,
      ...E,
      particleCount: Math.floor(200 * C)
    });
  }
  [
    { particleRatio: 0.25, opts: { spread: 26, startVelocity: 55 } },
    { particleRatio: 0.2, opts: { spread: 60 } },
    { particleRatio: 0.35, opts: { spread: 100, decay: 0.91, scalar: 0.8 } },
    { particleRatio: 0.1, opts: { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 } },
    { particleRatio: 0.1, opts: { spread: 120, startVelocity: 45 } }
  ].forEach((C) => M(C.particleRatio, C.opts));
}
class Te extends Me {
  async execute() {
    try {
      const m = await this.getContext(ge), M = new Audio("https://hackmakedo.com/audio/drumroll.mp3");
      let P = !1;
      M.addEventListener("timeupdate", async () => {
        console.log("Current time:", M.currentTime), M.currentTime >= 1.5 && !P && (await m.saveAndPublish(), be(), P = !0);
      }), M.play();
    } catch (m) {
      console.error("Failed to save and publish document", m);
    }
  }
}
export {
  Te as default
};
//# sourceMappingURL=tada.save-and-publish.action-CaQMfjev.js.map
