import { createRequire } from 'module';

createRequire(import.meta.url);
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
  if ("function" == typeof e2 && (a2 = e2.defaultProps)) for (c2 in a2) void 0 === p2[c2] && (p2[c2] = a2[c2]);
  return l.vnode && l.vnode(l2), l2;
}

// src/components/_OverflowList.tsx
var OverflowList = ({
  children,
  ...props
}) => {
  return /* @__PURE__ */ u2("ul", { ...props, class: [props.class, "overflow"].filter(Boolean).join(" "), id: props.id, children: [
    children,
    /* @__PURE__ */ u2("li", { class: "overflow-end" })
  ] });
};
var numLists = 0;
var OverflowList_default = () => {
  const id = `toc-list-${numLists++}`;
  return {
    OverflowList: (props) => /* @__PURE__ */ u2(OverflowList, { ...props, id }),
    overflowListAfterDOMLoaded: `
document.addEventListener("nav", () => {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      const parentUl = entry.target.parentElement
      if (!parentUl) return
      if (entry.isIntersecting) {
        parentUl.classList.remove("gradient-active")
      } else {
        parentUl.classList.add("gradient-active")
      }
    }
  })

  const ul = document.getElementById("${id}")
  if (!ul) return

  const end = ul.querySelector(".overflow-end")
  if (!end) return

  observer.observe(end)
  if (window.addCleanup) {
    window.addCleanup(() => observer.disconnect())
  }
})
`
  };
};

// src/components/styles/_toc.scss
var toc_default = '@charset "UTF-8";\n/* \u2500\u2500 Mobile toggle button \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.toc button.mobile-toc {\n  display: none;\n}\n\n.toc button.desktop-toc {\n  display: flex;\n}\n\n@media all and (max-width: 800px) {\n  .toc button.mobile-toc {\n    display: flex;\n  }\n  .toc button.desktop-toc {\n    display: none;\n  }\n}\nbutton.mobile-toc {\n  background-color: transparent;\n  border: none;\n  text-align: left;\n  cursor: pointer;\n  padding: 5px;\n  color: var(--dark);\n  display: flex;\n  align-items: center;\n  margin: 0;\n  z-index: 101;\n}\nbutton.mobile-toc.hide-until-loaded {\n  display: none;\n}\nbutton.mobile-toc svg {\n  stroke: var(--darkgray);\n  pointer-events: none;\n}\n\n/* \u2500\u2500 Mobile sidebar panel \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n@media all and (max-width: 800px) {\n  .page > #quartz-body.toc-lock-scroll > :not(.sidebar:has(.toc)) {\n    transform: translateX(100dvw);\n    transition: transform 300ms ease-in-out;\n  }\n  .page > #quartz-body > :not(.sidebar:has(.toc)) {\n    transition: transform 300ms ease-in-out;\n  }\n  /* Sidebar container */\n  .page > #quartz-body .sidebar:has(.toc) {\n    box-sizing: border-box;\n    position: sticky;\n    background-color: var(--light);\n    padding: 1rem 0;\n    margin: 0;\n  }\n  .toc {\n    order: -1;\n    height: initial;\n    overflow: hidden;\n    flex-shrink: 0;\n    align-self: flex-start;\n    margin-top: auto;\n    margin-bottom: auto;\n  }\n  /* Collapsed state \u2014 panel off-screen */\n  .toc.collapsed > .toc-content-wrapper {\n    transform: translateX(-100vw);\n    visibility: hidden;\n  }\n  /* Open state \u2014 panel on-screen */\n  .toc:not(.collapsed) > .toc-content-wrapper {\n    transform: translateX(0);\n    visibility: visible;\n  }\n  /* The sliding panel itself */\n  .toc .toc-content-wrapper {\n    box-sizing: border-box;\n    z-index: 100;\n    position: absolute;\n    top: 0;\n    left: 0;\n    margin-top: 0;\n    background-color: var(--light);\n    max-width: 100vw;\n    width: 100vw;\n    transform: translateX(-100vw);\n    transition: transform 200ms ease, visibility 200ms ease;\n    overflow: hidden;\n    padding: 4rem 0 2rem 1rem;\n    height: 100dvh;\n    max-height: 100dvh;\n    visibility: hidden;\n  }\n  /* Override the desktop header button inside the panel */\n  .toc .toc-content-wrapper button.toc-header {\n    display: flex;\n    padding: 0 0 0.5rem 0;\n  }\n  .toc .toc-content-wrapper ul.toc-content.overflow {\n    max-height: calc(100dvh - 6rem);\n    overflow-y: auto;\n  }\n  /* Prevent body scroll when TOC panel is open */\n  html.toc-mobile-no-scroll .toc .toc-content-wrapper {\n    overscroll-behavior: contain;\n  }\n  .toc .fold {\n    display: none;\n  }\n}';

// src/components/scripts/_toc.inline.ts
var toc_inline_default = 'var u=new IntersectionObserver(o=>{for(let c of o){let n=c.target.id,i=document.querySelectorAll(`a[data-for="${n}"]`),e=c.rootBounds?.height;e&&i.length>0&&(c.boundingClientRect.y<e?i.forEach(t=>t.classList.add("in-view")):i.forEach(t=>t.classList.remove("in-view")))}});function l(o){o.classList.add("collapsed"),o.setAttribute("aria-expanded","false"),document.documentElement.classList.remove("toc-lock-scroll","toc-mobile-no-scroll")}function p(o){document.querySelectorAll(".explorer:not(.collapsed)").forEach(n=>{n.classList.add("collapsed"),n.setAttribute("aria-expanded","false"),document.documentElement.classList.remove("mobile-no-scroll","lock-scroll")}),o.classList.remove("collapsed"),o.setAttribute("aria-expanded","true"),document.documentElement.classList.add("toc-lock-scroll","toc-mobile-no-scroll")}function m(){document.querySelectorAll(".explorer-toggle").forEach(e=>{let t=()=>{document.querySelector(".explorer")?.classList.contains("collapsed")&&document.querySelectorAll(".toc").forEach(r=>l(r))};e.addEventListener("click",t),window.addCleanup?.(()=>e.removeEventListener("click",t))});let c=Array.from(document.querySelectorAll(".toc"));for(let e of c){let t=e.querySelector("button.toc-header.desktop-toc");if(t){let d=function(){this.classList.toggle("collapsed"),this.setAttribute("aria-expanded",this.getAttribute("aria-expanded")==="true"?"false":"true");let a=this.nextElementSibling;a&&a.classList.toggle("collapsed")};t.addEventListener("click",d),window.addCleanup?.(()=>t.removeEventListener("click",d))}let s=e.querySelector("button.mobile-toc");if(!s)continue;s.classList.remove("hide-until-loaded"),s.checkVisibility?.()&&l(e);let r=function(){e.classList.contains("collapsed")?p(e):l(e)};s.addEventListener("click",r),window.addCleanup?.(()=>{s.removeEventListener("click",r),l(e)})}let n=()=>{document.querySelectorAll(".toc").forEach(e=>l(e))};document.addEventListener("prenav",n),window.addCleanup?.(()=>document.removeEventListener("prenav",n)),u.disconnect(),document.querySelectorAll("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]").forEach(e=>u.observe(e))}document.addEventListener("nav",m);document.addEventListener("render",m);\n';

// src/components/_TableOfContents.tsx
var defaultOptions = {
  collapseByDefaults: false
};
var TableOfContents_default = ((userOpts) => {
  const opts = { ...defaultOptions, ...userOpts };
  const { OverflowList: OverflowList2, overflowListAfterDOMLoaded } = OverflowList_default();
  const TableOfContents = (props) => {
    const { fileData } = props;
    if (!fileData?.toc || fileData.toc.length === 0) return null;
    const collapsed = opts.collapseByDefaults || fileData.collapseToc;
    return /* @__PURE__ */ u2("div", { class: "toc", "aria-expanded": !collapsed, children: [
      /* @__PURE__ */ u2(
        "button",
        {
          type: "button",
          class: "mobile-toc hide-until-loaded",
          "aria-label": "Table of contents",
          "aria-controls": "toc-content-panel",
          children: /* @__PURE__ */ u2(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              children: [
                /* @__PURE__ */ u2("line", { x1: "3", y1: "6", x2: "21", y2: "6" }),
                /* @__PURE__ */ u2("line", { x1: "3", y1: "12", x2: "15", y2: "12" }),
                /* @__PURE__ */ u2("line", { x1: "3", y1: "18", x2: "18", y2: "18" })
              ]
            }
          )
        }
      ),
      /* @__PURE__ */ u2("div", { class: "toc-content-wrapper", id: "toc-content-panel", children: [
        /* @__PURE__ */ u2(
          "button",
          {
            type: "button",
            class: collapsed ? "collapsed toc-header desktop-toc" : "toc-header desktop-toc",
            "aria-expanded": !collapsed,
            children: [
              /* @__PURE__ */ u2("h3", { children: "On this page" }),
              /* @__PURE__ */ u2(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  class: "fold",
                  children: /* @__PURE__ */ u2("polyline", { points: "6 9 12 15 18 9" })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ u2(OverflowList2, { class: collapsed ? "collapsed toc-content" : "toc-content", children: fileData.toc.map((entry) => /* @__PURE__ */ u2("li", { class: `depth-${entry.depth}`, children: /* @__PURE__ */ u2("a", { href: `#${entry.slug}`, "data-for": entry.slug, children: entry.text }) }, entry.slug)) })
      ] })
    ] });
  };
  TableOfContents.css = toc_default;
  TableOfContents.afterDOMLoaded = [toc_inline_default, overflowListAfterDOMLoaded].join("\n");
  return TableOfContents;
});

export { TableOfContents_default as _TableOfContents };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map