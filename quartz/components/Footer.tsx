import { QuartzComponentConstructor } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  function Footer() {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer>
        <hr />
        <ul>
          <li>
            <em>Luis Mauricio Camargo</em>
          </li>
        </ul>
        <ul style="margin-top: 0.5em">
          {Object.entries(links).map(([text, link]) => (
          <li>
            <a href={link}>{text}</a>
          </li>
          ))}
        </ul>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
