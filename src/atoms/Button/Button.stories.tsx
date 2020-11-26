import { Meta } from '@storybook/react/types-6-0'

import Button, { Props as ButtonProps } from '.'

export default {
  title: 'Atoms/Buttons',
  component: Button
} as Meta

export const Primary: React.FC<ButtonProps> = () => (
  <Button color="primary">Primary</Button>
)

export const Gray: React.FC<ButtonProps> = () => (
  <Button color="gray">Gray</Button>
)

export const PrimaryOulined: React.FC<ButtonProps> = () => (
  <Button color="primary" outlined>
    Primary Outlined
  </Button>
)

export const GrayOulined: React.FC<ButtonProps> = () => (
  <Button color="gray" outlined>
    Gray Outlined
  </Button>
)
