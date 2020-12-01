import { Meta } from '@storybook/react/types-6-0'

import Logo, { Props } from '.'

export default {
  title: 'Atoms',
  component: Logo
} as Meta

export const logo: React.FC<Props> = () => <Logo path="/logo.svg" alt="Logo" />
