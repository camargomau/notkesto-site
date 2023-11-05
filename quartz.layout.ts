import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [Component.LinksHeader()],
  footer: Component.Footer({
    links: {
      "Notes repo": "https://github.com/camargomau/notkesto",
      "Site repo": "https://github.com/camargomau/notkesto-site"
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ArticleTitle(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Backlinks()),
  ],
  right: [
    Component.MobileOnly(Component.Backlinks()),
    Component.Graph(),
  ]
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
  ],
  right: [],
}
