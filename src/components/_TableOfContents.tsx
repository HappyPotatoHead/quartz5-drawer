import type {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "@quartz-community/types";

import OverflowListFactory from "./_OverflowList";

import style from "./styles/_toc.scss";

// @ts-expect-error — inline script imported as string by esbuild loader
import script from "./scripts/_toc.inline.ts";

export interface Options {
  collapseByDefaults?: boolean;
}

const defaultOptions: Required<Options> = {
  collapseByDefaults: false,
};

export default ((userOpts?: Options) => {
  const opts = { ...defaultOptions, ...userOpts };
  const { OverflowList, overflowListAfterDOMLoaded } = OverflowListFactory();

  const TableOfContents: QuartzComponent = (props: QuartzComponentProps) => {
    const { fileData } = props as any;

    if (!fileData?.toc || fileData.toc.length === 0) return null;

    const collapsed = opts.collapseByDefaults || fileData.collapseToc;

    return (
      <div class="toc" aria-expanded={!collapsed}>
        <button
          type="button"
          class="mobile-toc hide-until-loaded"
          aria-label="Table of contents"
          aria-controls="toc-content-panel"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="15" y2="12" />
            <line x1="3" y1="18" x2="18" y2="18" />
          </svg>
        </button>

        <div class="toc-content-wrapper" id="toc-content-panel">
          <button
            type="button"
            class={collapsed ? "collapsed toc-header desktop-toc" : "toc-header desktop-toc"}
            aria-expanded={!collapsed}
          >
            <h3>On this page</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="fold"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <OverflowList class={collapsed ? "collapsed toc-content" : "toc-content"}>
            {fileData.toc.map((entry: any) => (
              <li key={entry.slug} class={`depth-${entry.depth}`}>
                <a href={`#${entry.slug}`} data-for={entry.slug}>
                  {entry.text}
                </a>
              </li>
            ))}
          </OverflowList>
        </div>
      </div>
    );
  };
  TableOfContents.css = style as string;
  TableOfContents.afterDOMLoaded = [script, overflowListAfterDOMLoaded].join("\n") as string;

  return TableOfContents;
}) satisfies QuartzComponentConstructor<Options>;
