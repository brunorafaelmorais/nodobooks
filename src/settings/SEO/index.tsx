import Head from 'next/head'

type Props = {
  title: string
  description?: string
  image?: string
  shouldExcludeTitleSuffix?: boolean
  shouldIndexPage?: boolean
}

function SEO({
  title,
  description,
  image,
  shouldExcludeTitleSuffix = false,
  shouldIndexPage = true
}: Props): JSX.Element {
  const pageTitle = `${title} ${!shouldExcludeTitleSuffix ? '| Nodobooks' : ''}`

  const pageImage = `${process.env.NEXT_PUBLIC_SITE_URL}/${image}`

  return (
    <Head>
      <title>{pageTitle}</title>

      {description && <meta name="description" content={description} />}
      {image && <meta name="image" content={pageImage} />}
      {!shouldIndexPage && <meta name="robots" content="noindex,nofollow" />}

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
      <meta name="MobileOptimized" content="320" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="theme-color" content="#0A0A0A" />
      <meta name="msapplication-TileColor" content="#0A0A0A" />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="google" content="notranslate" />
    </Head>
  )
}

export default SEO
