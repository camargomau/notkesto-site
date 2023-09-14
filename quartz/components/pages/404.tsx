import { QuartzComponentConstructor } from "../types"

function NotFound() {
  return (
    <article class="popover-hint">
      <h1>Note not yet created!</h1>
      <p>Leaving dangling links is part of my note-taking process. I will create this note whenever I find a need for it.</p>
      <a href="/">Go back to the homepage</a>.
    </article>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor
