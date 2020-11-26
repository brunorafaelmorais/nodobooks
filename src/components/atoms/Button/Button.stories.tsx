import { Meta } from '@storybook/react/types-6-0'

import Button, { Props } from '.'

export default {
  title: 'Atoms/Buttons',
  component: Button
} as Meta

export const Primary: React.FC<Props> = () => (
  <Button color="primary">Primary</Button>
)

export const Gray: React.FC<Props> = () => <Button color="gray">Gray</Button>

export const PrimaryOulined: React.FC<Props> = () => (
  <Button color="primary" outlined>
    Primary Outlined
  </Button>
)

export const GrayOulined: React.FC<Props> = () => (
  <Button color="gray" outlined>
    Gray Outlined
  </Button>
)
