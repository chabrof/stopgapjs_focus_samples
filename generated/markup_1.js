define(["require", "exports", "focusable"], function (require, exports) {
    "use strict";
    var Mustache;
    var FocusablePrototype = require('focusable').EltPrototype;
    var EltPrototype = Object.create(FocusablePrototype);
    EltPrototype._init = function (config) {
        console.log('init', this);
        this.innerHTML = "<b>TEST OF CustomElement</b>";
        console.log('fin init');
        FocusablePrototype._init.call(this, config);
    };
    EltPrototype.createdCallback = function () {
    };
    EltPrototype.attachedCallback = function () {
        console.log('attach');
        this._init();
    };
    EltPrototype.detachedCallback = function () {
        this._removeListeners();
    };
    EltPrototype.attributeChangedCallback = function (attrName) {
        console.error('attrib', attrName);
    };
    function register(mustache) {
        Mustache = mustache;
        document.registerElement('sample-markup', { prototype: EltPrototype });
    }
    exports.register = register;
});
//# sourceMappingURL=markup_1.js.map