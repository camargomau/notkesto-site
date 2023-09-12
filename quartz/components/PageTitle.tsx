import { pathToRoot } from "../util/path"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function PageTitle({ fileData, cfg }: QuartzComponentProps) {
  const title = cfg?.pageTitle ?? "Untitled Quartz"
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <h1 class="page-title">
      <img style="height: 1.2em; margin: 0 0.3em 0 0; vertical-align: text-bottom;" src="https://github.com/microsoft/fluentui-emoji/raw/main/assets/Card%20file%20box/Color/card_file_box_color.svg"></img>
      <a href={baseDir}>{title}</a>
    </h1>
  )
}

PageTitle.css = `
.page-title {
  margin: 0;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
