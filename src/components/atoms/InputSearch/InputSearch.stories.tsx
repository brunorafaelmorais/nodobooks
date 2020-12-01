import { Meta } from '@storybook/react/types-6-0'

import InputSearch, { Props } from '.'

export default {
  title: 'Atoms/Inputs',
  component: InputSearch
} as Meta

export const Search: React.FC<Props> = () => (
  <InputSearch placeholder="Type to search" />
)
