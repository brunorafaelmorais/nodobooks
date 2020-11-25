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
    </Head>
  )
}

export default SEO
