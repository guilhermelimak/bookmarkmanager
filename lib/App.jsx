import * as tslib_1 from "tslib";
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
var App = (function (_super) {
    tslib_1.__extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function (h) {
        return (<div id="app">
        <router-view />
      </div>);
    };
    App = tslib_1.__decorate([
        Component
    ], App);
    return App;
}(Vue));
export default App;
//# sourceMappingURL=App.jsx.map