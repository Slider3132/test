var e = Object.defineProperty;
var i = (n, t) => () => (n && (t = n((n = 0))), t);
var c = (n, t) => () => (t || n((t = { exports: {} }).exports, t), t.exports),
  f = (n, t) => {
    for (var o in t) e(n, o, { get: t[o], enumerable: !0 });
  };
var navigator,
  window,
  global,
  d = i(() => {
    (navigator = typeof document < 'u' ? globalThis.navigator : void 0),
      (window = typeof document < 'u' ? globalThis.window : void 0),
      (global = typeof document > 'u' ? {} : void 0);
    if (typeof document > 'u') {
      let n = Object.prototype.toString;
      Object.prototype.toString = function (...t) {
        return this === global ? '[object global]' : n.call(this, ...t);
      };
    }
  });
export { c as a, f as b, navigator as c, window as d, global as e, d as f };
//# sourceMappingURL=chunk-ENK4YSX5.mjs.map
