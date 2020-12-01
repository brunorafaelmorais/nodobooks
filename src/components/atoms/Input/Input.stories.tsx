import { Meta } from '@storybook/react/types-6-0'

import Input, { Props } from '.'

export default {
  title: 'Atoms/Inputs',
  component: Input
} as Meta

export const Text: React.FC<Props> = () => (
  <Input label="Name" fieldName="name" placeholder="Type your name here" />
)

export const Error: React.FC<Props> = () => (
  <Input
    label="Name"
    fieldName="name"
    placeholder="Type your name here"
    hasError
    error="name is a required field"
  />
)
