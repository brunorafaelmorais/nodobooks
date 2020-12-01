import { Meta } from '@storybook/react/types-6-0'

import Header from '.'

export default {
  title: 'Organisms',
  component: Header
} as Meta

export const header: React.FC = () => <Header />
