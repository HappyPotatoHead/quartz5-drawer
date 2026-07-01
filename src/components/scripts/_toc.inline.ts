// @ts-nocheck

const headingObserver = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    const slug = entry.target.id;
    const tocLinks = document.querySelectorAll(`a[data-for="${slug}"]`);
    const windowHeight = entry.rootBounds?.height;
    if (windowHeight && tocLinks.length > 0) {
      if (entry.boundingClientRect.y < windowHeight) {
        tocLinks.forEach((el) => el.classList.add("in-view"));
      } else {
        tocLinks.forEach((el) => el.classList.remove("in-view"));
      }
    }
  }
});

function closeTocSidebar(toc) {
  toc.classList.add("collapsed");
  toc.setAttribute("aria-expanded", "false");
  document.documentElement.classList.remove("toc-lock-scroll", "toc-mobile-no-scroll");
}

function openTocSidebar(toc) {
  const openExplorers = document.querySelectorAll(".explorer:not(.collapsed)");
  openExplorers.forEach((explorer) => {
    explorer.classList.add("collapsed");
    explorer.setAttribute("aria-expanded", "false");
    document.documentElement.classList.remove("mobile-no-scroll", "lock-scroll");
  });

  toc.classList.remove("collapsed");
  toc.setAttribute("aria-expanded", "true");
  document.documentElement.classList.add("toc-lock-scroll", "toc-mobile-no-scroll");
}

function setupToc() {
  // Close TOC when Explorer opens — mutually exclusive
  const explorerButtons = document.querySelectorAll(".explorer-toggle");
  explorerButtons.forEach((btn) => {
    const handler = () => {
      const isOpening = document.querySelector(".explorer")?.classList.contains("collapsed");
      if (isOpening) {
        document.querySelectorAll(".toc").forEach((toc) => closeTocSidebar(toc));
      }
    };
    btn.addEventListener("click", handler);
    window.addCleanup?.(() => btn.removeEventListener("click", handler));
  });
  const tocElements = Array.from(document.querySelectorAll(".toc"));

  for (const toc of tocElements) {
    const desktopHeader = toc.querySelector("button.toc-header.desktop-toc");
    if (desktopHeader) {
      const desktopClickHandler = function () {
        this.classList.toggle("collapsed");
        this.setAttribute(
          "aria-expanded",
          this.getAttribute("aria-expanded") === "true" ? "false" : "true",
        );
        const content = this.nextElementSibling;
        if (content) content.classList.toggle("collapsed");
      };
      desktopHeader.addEventListener("click", desktopClickHandler);
      window.addCleanup?.(() => desktopHeader.removeEventListener("click", desktopClickHandler));
    }

    const mobileBtn = toc.querySelector("button.mobile-toc");
    if (!mobileBtn) continue;

    mobileBtn.classList.remove("hide-until-loaded");

    if (mobileBtn.checkVisibility?.()) {
      closeTocSidebar(toc);
    }

    const mobileClickHandler = function () {
      const isCollapsed = toc.classList.contains("collapsed");
      if (isCollapsed) {
        openTocSidebar(toc);
      } else {
        closeTocSidebar(toc);
      }
    };

    mobileBtn.addEventListener("click", mobileClickHandler);
    window.addCleanup?.(() => {
      mobileBtn.removeEventListener("click", mobileClickHandler);
      closeTocSidebar(toc);
    });
  }

  const navHandler = () => {
    document.querySelectorAll(".toc").forEach((toc) => closeTocSidebar(toc));
  };
  document.addEventListener("prenav", navHandler);
  window.addCleanup?.(() => document.removeEventListener("prenav", navHandler));

  headingObserver.disconnect();
  const headers = document.querySelectorAll("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]");
  headers.forEach((header) => headingObserver.observe(header));
}

document.addEventListener("nav", setupToc);
document.addEventListener("render", setupToc);
