type Props = {
  path: string
  alt?: string
}

export default function Logo({
  path,
  alt = 'Bookstore logo'
}: Props): JSX.Element {
  return <img src={path} alt={alt} />
}
