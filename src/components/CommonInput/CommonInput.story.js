import { storiesOf } from '@storybook/vue'

import CommonInput from './CommonInput'

storiesOf('CommonInput', module).add(
  'Default (primary) color with custom text',
  () => ({
    methods: { input: val => console.log('Input: ', val) },
    render(h) {
      return <CommonInput onInput={this.input} />
    }
  })
)
