/// <amd-dependency path="focusable"/>
/// <reference path='./i_markup_1.d.ts' />
/// <reference path='../node_modules/sgj_focus/src/focusable.d.ts' />
declare let require :(moduleId :string) => any;

let Mustache
let FocusablePrototype = require('focusable').EltPrototype
let EltPrototype :Markup1 = <Markup1> Object.create(FocusablePrototype)

EltPrototype._init = function(config) {
  console.log('init', this);
  //console.log('prototype', FocusablePrototype);
  this.innerHTML = "<b>TEST OF CustomElement</b>";
  console.log('fin init');
  //this.setAttribute('id', 'ee');
  FocusablePrototype._init.call(this, config);
}

EltPrototype.createdCallback = function() {
}

EltPrototype.attachedCallback = function() {
  console.log('attach')
  this._init()
}

EltPrototype.detachedCallback = function() {
  this._removeListeners()
}

EltPrototype.attributeChangedCallback = function(attrName :string/*, oldVal, newVal*/) {
  console.error('attrib', attrName)
}

export function register(mustache) :void {
  Mustache = mustache
  document.registerElement('sample-markup', { prototype: EltPrototype })
}
