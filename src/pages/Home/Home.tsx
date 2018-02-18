import { Component, Prop } from 'vue-property-decorator'
import { Container, MainInput } from './style'
import VueComponent from '@/vue-component'

export interface HomeProps {
  exampleProp: string
}

@Component
class Home extends VueComponent<HomeProps> {
  @Prop() exampleProp: string

  render(h: Function) {
    return (
      <div>
        <Container>
          <MainInput />
        </Container>
      </div>
    )
  }
}

export default Home
