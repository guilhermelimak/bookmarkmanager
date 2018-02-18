import Vue from 'vue'
import { Component, Prop, Emit } from 'vue-property-decorator'
import { Button } from './style'

@Component
class CommonButtom extends Vue {
  @Prop() text: String

  @Emit('click')
  onButtonClick() {}

  render(h: Function) {
    return <Button nativeOnClick={this.onButtonClick}>{this.text}</Button>
  }
}

export default CommonButtom
