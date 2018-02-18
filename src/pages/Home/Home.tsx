import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { Container, MainInput } from './style'

@Component
class Home extends Vue {
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
