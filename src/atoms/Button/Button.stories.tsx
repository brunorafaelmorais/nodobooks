import { storiesOf } from '@storybook/react'
import { ThemeProvider } from 'styled-components'

import theme from '../../styles/theme'
import Button from '.'

storiesOf('Button', module)
  .addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>)
  .add('Default', () => <Button type="button">Default</Button>)
  .add('Gray', () => (
    <Button type="button" color="gray">
      Gray
    </Button>
  ))
  .add('Gray contained', () => (
    <Button type="button" color="gray" variant="contained">
      Gray
    </Button>
  ))
  .add('Primary', () => (
    <Button type="button" variant="contained">
      Primary
    </Button>
  ))
  .add('Disabled', () => (
    <Button type="button" variant="contained" disabled>
      Disabled
    </Button>
  ))
