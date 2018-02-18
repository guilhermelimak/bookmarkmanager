import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { Div } from './style'

@Component
class Login extends Vue {
  render(h: Function) {
    return <Div />
  }
}

export default Login
