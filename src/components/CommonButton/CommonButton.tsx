import VueComponent from '@/vue-component'
import { Component, Prop, Emit } from 'vue-property-decorator'
import { Button } from './style'
import { ColorNames } from '@/styles/colors'

export interface CommonButtonProps {
  text: String
  color?: ColorNames
  hoverColor?: ColorNames
}

@Component
class CommonButton extends VueComponent<CommonButtonProps> {
  @Prop() text: String

  @Prop({ default: ColorNames.PRIMARY })
  color: ColorNames

  @Prop({ default: ColorNames.PRIMARY_DARK })
  hoverColor: ColorNames

  @Emit('click')
  onButtonClick() {}

  render(h: Function) {
    return (
      <Button
        color={this.color}
        hoverColor={this.hoverColor}
        nativeOnClick={this.onButtonClick}
      >
        {this.text}
      </Button>
    )
  }
}

export default CommonButton
