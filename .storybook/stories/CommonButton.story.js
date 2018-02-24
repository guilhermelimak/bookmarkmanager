import { storiesOf } from '@storybook/vue'

import CommonButton from '../../src/components/CommonButton'

storiesOf('CommonButton', module).add(
  'story as a template',
  () =>
    '<CommonButton :rounded="true">story as a function template</CommonButton>'
)
