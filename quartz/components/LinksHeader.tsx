import { QuartzComponentConstructor } from "./types"
import style from "./styles/linksHeader.scss"

interface Options {
  links: Record<string, string>
}

export default (() => {
  function LinksHeader() {
    return (
      <div>
        <div id="links-header">
          <span>
            <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Card%20index/Color/card_index_color.svg"></img>
            <a href="https://camargomau.com/">Blog</a>
          </span>
          <span>
            <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Books/Color/books_color.svg"></img>
            <a href="/Sciujo/MAC/MAC">MAC</a>
          </span>
          <span>
            <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Brain/Color/brain_color.svg"></img>
            <a href="/Sciujo/Sciujo">Learn</a>
          </span>
          <span>
            <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Parrot/Color/parrot_color.svg"></img>
            <a href="/Lingvujo/Lingvujo">Langs</a>
          </span>
          <span>
            <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Triangular%20ruler/Color/triangular_ruler_color.svg"></img>
            <a href="/Sciujo/Mathematics">Maths</a>
          </span>
          <span>
            <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Laptop/Color/laptop_color.svg"></img>
            <a href="/Sciujo/Computing">Comp</a>
          </span>
        </div>
      <hr style="background-color: var(--gray); border-top: 1px var(--gray) solid; margin-top: 1.3rem"></hr>
      </div>
    )
  }

  LinksHeader.css = style
  return LinksHeader
}) satisfies QuartzComponentConstructor
