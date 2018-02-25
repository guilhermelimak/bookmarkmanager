import { storiesOf } from '@storybook/vue'

import CommonInput from './CommonInput'

storiesOf('CommonInput', module)
  .add('Default color with custom placeholder', () => ({
    methods: { input: evt => console.log('Input: ', evt) },
    render(h) {
      return <CommonInput onInput={this.input} placeholder="e-mail" />
    }
  }))
  .add('Error color', () => ({
    methods: { input: evt => console.log('Input: ', evt) },
    render(h) {
      return <CommonInput onInput={this.input} placeholder="e-mail" />
    }
  }))
