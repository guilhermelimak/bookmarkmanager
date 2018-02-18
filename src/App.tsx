import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
class App extends Vue {
  render(h: Function) {
    return (
      <div id="app">
        <router-view />
      </div>
    );
  }
}

export default App;
