import { Meta } from '@storybook/react/types-6-0'

import { ContentBox } from './styles'

export default {
  title: 'Atoms'
} as Meta

export const contentBox: React.FC = () => <ContentBox>content here</ContentBox>
