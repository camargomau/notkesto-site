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
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.MobileOnly(Component.Darkmode()),
    Component.DesktopOnly(Component.Explorer()),
    Component.DesktopOnly(Component.RecentNotes({
      title: "Recently Created",
      limit: 5
    })),
  ],
  right: [
    Component.DesktopOnly(Component.Darkmode()),
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
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
