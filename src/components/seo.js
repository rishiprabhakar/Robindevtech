import React from "react"
import { SITE } from "../site"

// Rendered inside each page's `Head` export (Gatsby Head API).
export default function Seo({ title, description, path = "" }) {
  const fullTitle = title
    ? `${title} — ${SITE.name}`
    : `${SITE.name} — Custom Web & Software Development`
  const desc = description || SITE.tagline
  const url = `${SITE.url}${path}`

  return (
    <>
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#0a0e14" />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={SITE.name} />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </>
  )
}
