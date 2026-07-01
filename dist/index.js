import { createRequire } from 'module';

createRequire(import.meta.url);

// src/components/styles/mobileTOC.scss
var mobileTOC_default = ".mobile-toc-button {\n  position: fixed;\n  top: 1rem;\n  right: 1rem;\n  z-index: 9999;\n  width: 42px;\n  height: 42px;\n}";
var l;
l = { __e: function(n2, l2, u3, t2) {
  for (var i2, o2, r2; l2 = l2.__; ) if ((i2 = l2.__c) && !i2.__) try {
    if ((o2 = i2.constructor) && null != o2.getDerivedStateFromError && (i2.setState(o2.getDerivedStateFromError(n2)), r2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t2 || {}), r2 = i2.__d), r2) return i2.__E = i2;
  } catch (l3) {
    n2 = l3;
  }
  throw n2;
} }, "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout;

// node_modules/preact/jsx-runtime/dist/jsxRuntime.mjs
var f2 = 0;
function u2(e2, t2, n2, o2, i2, u3) {
  t2 || (t2 = {});
  var a2, c2, p2 = t2;
  if ("ref" in p2) for (c2 in p2 = {}, t2) "ref" == c2 ? a2 = t2[c2] : p2[c2] = t2[c2];
  var l2 = { type: e2, props: p2, key: n2, ref: a2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f2, __i: -1, __u: 0, __source: i2, __self: u3 };
  return l.vnode && l.vnode(l2), l2;
}

// src/components/MobileTOC.tsx
var MobileTOC = () => {
  return /* @__PURE__ */ u2("button", { type: "button", class: "mobile-toc-button", "aria-label": "Open table of contents", children: "\u{1F4D1}" });
};
var MobileTOC_default = (() => {
  MobileTOC.css = mobileTOC_default;
  return MobileTOC;
});

export { MobileTOC_default as MobileTOC };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map