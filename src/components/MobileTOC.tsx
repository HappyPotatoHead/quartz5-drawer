import type {
    QuartzComponent,
    QuartzComponentConstructor,
} from "@quartz-community/types"

const MobileTOC: QuartzComponent = () => {
    return (
        <button class="mobile-toc-button">
            📑
        </button>
    )
}

export default (() => {
    MobileTOC.css = `
.mobile-toc-button {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 9999;
}`
        return MobileTOC
}) satisfies QuartzComponentConstructor
