"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Home = (function (_super) {
    __extends(Home, _super);
    function Home() {
        _super.apply(this, arguments);
    }
    Home.prototype.render = function () {
        return (React.createElement("div", null, 
            "Hello there, ", 
            this.props.name, 
            ", you are ", 
            this.props.age, 
            ", right?"));
    };
    return Home;
}(React.Component));
exports.Home = Home;
