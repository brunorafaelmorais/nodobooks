import { Meta } from '@storybook/react/types-6-0'

import Typography, { Props } from '.'

export default {
  title: 'Atoms',
  component: Typography
} as Meta

export const typography: React.FC<Props> = () => (
  <>
    <div>
      <Typography>Default</Typography>
    </div>
    <div>
      <Typography fullWidth align="center">
        Align center
      </Typography>
    </div>
    <div>
      <Typography fullWidth align="right">
        Align right
      </Typography>
    </div>
    <div>
      <Typography color="textGray">Text gray</Typography>
    </div>
    <div>
      <Typography fullWidth>Full width</Typography>
    </div>
    <div>
      <Typography font="Montserrat">Using Montserrat font</Typography>
    </div>
    <div>
      <Typography fontSize={48}>Custom font size</Typography>
    </div>
    <div>
      <Typography fontWeight={700}>Custom font weight</Typography>
    </div>
    <div>
      <Typography color="error">Text error</Typography>
    </div>
    <div>
      <Typography color="success">Text success</Typography>
    </div>
  </>
)
