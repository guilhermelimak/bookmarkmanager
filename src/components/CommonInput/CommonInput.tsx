import VueComponent from '@/vue-component'
import { Emit, Component, Prop } from 'vue-property-decorator'
import { Input } from './style'

export interface CommonInputProps {
  placeholder: string
}

@Component
class CommonInput extends VueComponent<CommonInputProps> {
  @Prop() placeholder: String

  emitInput(i: Event) {
    this.$emit('input', i.target['value'])
  }

  render(h) {
    return (
      <Input nativeOnInput={this.emitInput} placeholder={this.placeholder} />
    )
  }
}

export default CommonInput
