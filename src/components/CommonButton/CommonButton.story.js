import { storiesOf } from '@storybook/vue'

import CommonButton from './CommonButton'

storiesOf('CommonButton', module)
  .add('Default (primary) color with custom text', () => ({
    methods: { clicked: () => console.log('Button being clicked') },
    render(h) {
      return <CommonButton onClick={this.clicked} text="Accept" />
    }
  }))
  .add('Danger color color with custom text', () => ({
    methods: { clicked: () => console.log('Button being clicked') },
    render(h) {
      return (
        <CommonButton onClick={this.clicked} text="Delete" color="DANGER" />
      )
    }
  }))
  .add('White color color with custom text', () => ({
    methods: { clicked: () => console.log('Button being clicked') },
    render(h) {
      return <CommonButton onClick={this.clicked} text="Accept" color="WITE" />
    }
  }))
  .add('Success color color with custom text', () => ({
    methods: { clicked: () => console.log('Button being clicked') },
    render(h) {
      return (
        <CommonButton onClick={this.clicked} text="Delete" color="SUCCESS" />
      )
    }
  }))
  .add('Black color color with custom text', () => ({
    methods: { clicked: () => console.log('Button being clicked') },
    render(h) {
      return <CommonButton onClick={this.clicked} text="Delete" color="BLACK" />
    }
  }))
