import { Meta } from '@storybook/react/types-6-0'
import { withNextRouter } from 'storybook-addon-next-router'

import NavLink, { Props } from '.'

export default {
  title: 'Atoms/NavLink',
  component: NavLink,
  decorators: [withNextRouter]
} as Meta

export const NotActive: React.FC<Props> = () => (
  <NavLink to="#" text="Not active link" />
)

export const Active: React.FC<Props> = () => (
  <NavLink isActive to="#" text="Active link" />
)
