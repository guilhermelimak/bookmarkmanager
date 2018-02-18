import * as tslib_1 from "tslib";
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Container, MainInput } from './style';
var Home = (function (_super) {
    tslib_1.__extends(Home, _super);
    function Home() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Home.prototype.render = function (h) {
        return (<div>
        <Container>
          <MainInput />
        </Container>
      </div>);
    };
    Home = tslib_1.__decorate([
        Component
    ], Home);
    return Home;
}(Vue));
export default Home;
//# sourceMappingURL=Home.jsx.map