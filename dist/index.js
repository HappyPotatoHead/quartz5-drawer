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
var toc_default = `@charset "UTF-8";
/* \u2500\u2500 Desktop (unchanged from built-in TOC) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.toc {
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  min-height: 1.4rem;
  flex: 0 0.5 auto;
}
.toc:has(button.toc-header.collapsed) {
  flex: 0 1 1.4rem;
}

button.toc-header {
  background-color: transparent;
  border: none;
  text-align: left;
  cursor: pointer;
  padding: 0;
  color: var(--dark);
  display: flex;
  align-items: center;
}
button.toc-header h3 {
  font-size: 1rem;
  display: inline-block;
  margin: 0;
}
button.toc-header .fold {
  margin-left: 0.5rem;
  transition: transform 0.3s ease;
  opacity: 0.8;
}
button.toc-header.collapsed .fold {
  transform: rotateZ(-90deg);
}

ul.toc-content.overflow {
  list-style: none;
  position: relative;
  margin: 0.5rem 0;
  padding: 0;
  max-height: calc(100% - 2rem);
  overscroll-behavior: contain;
}
ul.toc-content.overflow > li > a {
  color: var(--dark);
  opacity: 0.35;
  transition: 0.5s ease opacity, 0.3s ease color;
}
ul.toc-content.overflow > li > a.in-view {
  opacity: 0.75;
}
ul.toc-content.overflow .depth-0 {
  padding-left: calc(1rem * 0);
}
ul.toc-content.overflow .depth-1 {
  padding-left: calc(1rem * 1);
}
ul.toc-content.overflow .depth-2 {
  padding-left: calc(1rem * 2);
}
ul.toc-content.overflow .depth-3 {
  padding-left: calc(1rem * 3);
}
ul.toc-content.overflow .depth-4 {
  padding-left: calc(1rem * 4);
}
ul.toc-content.overflow .depth-5 {
  padding-left: calc(1rem * 5);
}
ul.toc-content.overflow .depth-6 {
  padding-left: calc(1rem * 6);
}

/* \u2500\u2500 Mobile toggle button \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.toc button.mobile-toc {
  display: none;
}

.toc button.desktop-toc {
  display: flex;
}

@media all and (max-width: 800px) {
  .toc button.mobile-toc {
    display: flex;
  }
  .toc button.desktop-toc {
    display: none;
  }
}
button.mobile-toc {
  background-color: transparent;
  border: none;
  text-align: left;
  cursor: pointer;
  padding: 5px;
  color: var(--dark);
  display: flex;
  align-items: center;
  margin: 0;
  z-index: 101;
}
button.mobile-toc.hide-until-loaded {
  display: none;
}
button.mobile-toc svg {
  stroke: var(--darkgray);
  pointer-events: none;
}

/* \u2500\u2500 Mobile sidebar panel \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
@media all and (max-width: 800px) {
  /* Push all other content right when TOC sidebar is open \u2014 mirrors
     the Explorer's lock-scroll translateX trick but keyed to toc-lock-scroll */
  .page > #quartz-body.toc-lock-scroll > :not(.sidebar:has(.toc)) {
    transform: translateX(100dvw);
    transition: transform 300ms ease-in-out;
  }
  .page > #quartz-body > :not(.sidebar:has(.toc)) {
    transition: transform 300ms ease-in-out;
  }
  /* Sidebar container */
  .page > #quartz-body .sidebar:has(.toc) {
    box-sizing: border-box;
    position: sticky;
    background-color: var(--light);
    padding: 1rem 0;
    margin: 0;
  }
  .toc {
    order: -1;
    height: initial;
    overflow: hidden;
    flex-shrink: 0;
    align-self: flex-start;
    margin-top: auto;
    margin-bottom: auto;
  }
  /* Collapsed state \u2014 panel off-screen */
  .toc.collapsed > .toc-content-wrapper {
    transform: translateX(-100vw);
    visibility: hidden;
  }
  /* Open state \u2014 panel on-screen */
  .toc:not(.collapsed) > .toc-content-wrapper {
    transform: translateX(0);
    visibility: visible;
  }
  /* The sliding panel itself */
  .toc .toc-content-wrapper {
    box-sizing: border-box;
    z-index: 100;
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 0;
    background-color: var(--light);
    max-width: 100vw;
    width: 100vw;
    transform: translateX(-100vw);
    transition: transform 200ms ease, visibility 200ms ease;
    overflow: hidden;
    padding: 4rem 0 2rem 1rem;
    height: 100dvh;
    max-height: 100dvh;
    visibility: hidden;
  }
  /* Override the desktop header button inside the panel */
  .toc .toc-content-wrapper button.toc-header {
    display: flex;
    padding: 0 0 0.5rem 0;
  }
  .toc .toc-content-wrapper ul.toc-content.overflow {
    max-height: calc(100dvh - 6rem);
    overflow-y: auto;
  }
  /* Prevent body scroll when TOC panel is open */
  html.toc-mobile-no-scroll .toc .toc-content-wrapper {
    overscroll-behavior: contain;
  }
}`;

// src/components/scripts/_toc.inline.ts
var toc_inline_default = 'var a=new IntersectionObserver(t=>{for(let n of t){let c=n.target.id,e=document.querySelectorAll(`a[data-for="${c}"]`),s=n.rootBounds?.height;s&&e.length>0&&(n.boundingClientRect.y<s?e.forEach(o=>o.classList.add("in-view")):e.forEach(o=>o.classList.remove("in-view")))}});function l(t){t.classList.add("collapsed"),t.setAttribute("aria-expanded","false"),document.documentElement.classList.remove("toc-lock-scroll","toc-mobile-no-scroll")}function m(t){document.querySelectorAll(".explorer:not(.collapsed)").forEach(c=>{c.classList.add("collapsed"),c.setAttribute("aria-expanded","false"),document.documentElement.classList.remove("mobile-no-scroll","lock-scroll")}),t.classList.remove("collapsed"),t.setAttribute("aria-expanded","true"),document.documentElement.classList.add("toc-lock-scroll","toc-mobile-no-scroll")}function u(){let t=Array.from(document.querySelectorAll(".toc"));for(let e of t){let s=e.querySelector("button.toc-header.desktop-toc");if(s){let i=function(){this.classList.toggle("collapsed"),this.setAttribute("aria-expanded",this.getAttribute("aria-expanded")==="true"?"false":"true");let r=this.nextElementSibling;r&&r.classList.toggle("collapsed")};s.addEventListener("click",i),window.addCleanup?.(()=>s.removeEventListener("click",i))}let o=e.querySelector("button.mobile-toc");if(!o)continue;o.classList.remove("hide-until-loaded"),o.checkVisibility?.()&&l(e);let d=function(){e.classList.contains("collapsed")?m(e):l(e)};o.addEventListener("click",d),window.addCleanup?.(()=>{o.removeEventListener("click",d),l(e)})}let n=()=>{document.querySelectorAll(".toc").forEach(e=>l(e))};document.addEventListener("prenav",n),window.addCleanup?.(()=>document.removeEventListener("prenav",n)),a.disconnect(),document.querySelectorAll("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]").forEach(e=>a.observe(e))}document.addEventListener("nav",u);document.addEventListener("render",u);\n';

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

export { TableOfContents_default as _TableOfContent };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map