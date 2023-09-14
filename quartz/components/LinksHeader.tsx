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
            <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Black%20nib/Color/black_nib_color.svg"></img>
            <a href="https://psycake.subspace.club/">Blog</a>
          </span>
          <span>
            <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Laptop/Color/laptop_color.svg"></img>
            <a href="/Sciujo/MAC/MAC">MAC</a>
          </span>
          <span>
            <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Brain/Color/brain_color.svg"></img>
            <a href="/Sciujo/Sciujo">Learn</a>
          </span>
          <span>
            <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Triangular%20ruler/Color/triangular_ruler_color.svg"></img>
            <a href="/Sciujo/Mathematics">Maths</a>
          </span>
          <span>
            <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Parrot/Color/parrot_color.svg"></img>
            <a href="/Lingvujo/Lingvujo">Langs</a>
          </span>
          <span>
            <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Bust%20in%20silhouette/Color/bust_in_silhouette_color.svg"></img>
            <a href="https://psycake.subspace.club/about">About</a>
          </span>
        </div>
      <hr style="background-color: var(--darkgray); border-top: 1px var(--darkgray) solid; margin-top: 1.3rem"></hr>
      </div>
    )
  }

  LinksHeader.css = style
  return LinksHeader
}) satisfies QuartzComponentConstructor
