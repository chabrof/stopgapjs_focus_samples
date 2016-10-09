/// <reference path='../node_modules/sgj_focus/src/focusable.d.ts' />

interface Markup1 extends HTMLElement {
  _init(config),

  createdCallback(),
  attachedCallback(),
  detachedCallback(),
  attributeChangedCallback(attrName :string),
}
