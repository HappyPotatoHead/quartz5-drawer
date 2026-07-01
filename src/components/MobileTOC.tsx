import type { QuartzComponent, QuartzComponentConstructor } from "@quartz-community/types";

import style from "./styles/mobileTOC.scss";

const MobileTOC: QuartzComponent = () => {
  return (
    <button type="button" class="mobile-toc-button" aria-label="Open table of contents">
      📑
    </button>
  );
};

export default (() => {
  MobileTOC.css = style;
  return MobileTOC;
}) satisfies QuartzComponentConstructor;
