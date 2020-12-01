import { Meta } from '@storybook/react/types-6-0'
import { withNextRouter } from 'storybook-addon-next-router'

import { ContentBox } from '@/components/molecules/ContentBox/styles'

import MainLayout from '.'

export default {
  title: 'Templates',
  component: MainLayout,
  decorators: [withNextRouter]
} as Meta

export const mainLayout: React.FC = () => (
  <MainLayout>
    <ContentBox>
      <div style={{ margin: '16px 0' }}>content here</div>
    </ContentBox>
  </MainLayout>
)
