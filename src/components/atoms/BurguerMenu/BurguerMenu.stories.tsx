import { Meta } from '@storybook/react/types-6-0'
import { FiMenu } from 'react-icons/fi'

import { BurguerMenu } from './styles'

export default {
  title: 'Atoms/MenuBurguer'
} as Meta

export const MenuBurguer: React.FC = () => (
  <BurguerMenu>
    <FiMenu size={24} />
  </BurguerMenu>
)
