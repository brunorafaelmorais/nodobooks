import { Meta } from '@storybook/react/types-6-0'

import Banner, { Props } from '.'

export default {
  title: 'Atoms',
  component: Banner
} as Meta

export const FullBanner: React.FC<Props> = () => (
  <Banner path="https://picsum.photos/1440/800" alt="Banner" />
)
