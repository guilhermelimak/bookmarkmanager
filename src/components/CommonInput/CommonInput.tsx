import VueComponent from '@/vue-component'
import { Emit, Component, Prop } from 'vue-property-decorator'
import { Input } from './style'

export interface CommonInputProps {
  exampleProp: string
}

@Component
class CommonInput extends VueComponent<CommonInputProps> {
  @Prop()
  @Emit('input')
  emitInput() {}

  render(h) {
    return (
      <Input nativeOnInput={this.emitInput} placeholder="this.placeholder" />
    )
  }
}

export default CommonInput
