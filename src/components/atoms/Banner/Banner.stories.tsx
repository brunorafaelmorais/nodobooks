import { Meta } from '@storybook/react/types-6-0'

import Banner, { Props } from '.'

export default {
  title: 'Atoms',
  component: Banner
} as Meta

export const banner: React.FC<Props> = () => (
  <Banner path="/banner.jpg" alt="Banner" />
)
