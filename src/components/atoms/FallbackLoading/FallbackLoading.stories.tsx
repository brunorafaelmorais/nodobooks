import { Meta } from '@storybook/react/types-6-0'

import FallbackLoading, { Props } from '.'

export default {
  title: 'Atoms',
  component: FallbackLoading
} as Meta

export const fallbackLoading: React.FC<Props> = () => (
  <FallbackLoading text="Loading..." />
)
