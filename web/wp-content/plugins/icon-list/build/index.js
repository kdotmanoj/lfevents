(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{7:function(e,t,n){}}]),function(e){function t(t){for(var c,i,r=t[0],a=t[1],s=t[2],b=0,p=[];b<r.length;b++)i=r[b],Object.prototype.hasOwnProperty.call(l,i)&&l[i]&&p.push(l[i][0]),l[i]=0;for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c]);for(u&&u(t);p.length;)p.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,r=1;r<n.length;r++){var a=n[r];0!==l[a]&&(c=!1)}c&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var c={},l={0:0},o=[];function i(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=c,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(n,c,function(t){return e[t]}.bind(null,c));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var r=window.webpackJsonp=window.webpackJsonp||[],a=r.push.bind(r);r.push=t,r=r.slice();for(var s=0;s<r.length;s++)t(r[s]);var u=a;o.push([9,1]),n()}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.wp.blockEditor}()},function(e,t){!function(){e.exports=this.wp.richText}()},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t){!function(){e.exports=this.wp.primitives}()},function(e,t){!function(){e.exports=this.wp.blocks}()},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(6),l=n(1),o=(n(7),n(0)),i=n(2),r=n(4),a=n(3),s=n(5),u=Object(o.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(o.createElement)(s.Path,{d:"M4 7.2v1.5h16V7.2H4zm8 8.6h8v-1.5h-8v1.5zm-4-4.6l-4 4 4 4 1-1-3-3 3-3-1-1z"})),b=Object(o.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(o.createElement)(s.Path,{d:"M4 7.2v1.5h16V7.2H4zm8 8.6h8v-1.5h-8v1.5zm-8-3.5l3 3-3 3 1 1 4-4-4-4-1 1z"}));n(8);Object(c.registerBlockType)("lf/icon-list",{title:Object(l.__)("Icon List"),description:Object(l.__)("Customised unordered list with icons"),category:"common",icon:"list-view",attributes:{values:{type:"string",source:"html",selector:"ul",multiline:"li",default:""},type:{type:"string"},selectedIcon:{type:"string"},iconSize:{type:"integer",default:20},columnCount:{type:"integer",default:1},listGap:{type:"integer",default:10}},keywords:[Object(l.__)("list"),Object(l.__)("icon list"),Object(l.__)("checklist"),Object(l.__)("tick list")],supports:{align:["wide","full"]},transforms:{from:[{type:"block",blocks:["ugb/icon-list"],transform:function(e){return Object(c.createBlock)("lf/icon-list",{values:e.text})}},{type:"block",blocks:["core/list"],transform:function(e){return Object(c.createBlock)("lf/icon-list",{values:e.values})}}]},edit:function(e){var t=e.attributes,n=e.setAttributes,c=e.mergeBlocks,s=e.className,p=e.isSelected,m=t.values,f=t.type,O=t.selectedIcon,h=t.iconSize,j=t.columnCount,_=t.listGap,d={"--list-gap":_?"".concat(_,"px"):"10","--icon-size":h?"".concat(h,"px"):"20px","--column-count":j?"".concat(j):"1"};return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(i.InspectorControls,{key:"icon-list-block-panel"},Object(o.createElement)(r.PanelBody,{title:Object(l.__)("Settings"),initialOpen:!0},Object(o.createElement)(r.RangeControl,{label:Object(l.__)("No. of columns"),min:1,max:4,value:j,onChange:function(e){return n({columnCount:e})}}),Object(o.createElement)(r.RangeControl,{label:Object(l.__)("List item gap"),min:0,max:40,value:_,onChange:function(e){return n({listGap:e})}}),Object(o.createElement)(r.SelectControl,{label:Object(l.__)("List icon"),value:O,options:[{label:Object(l.__)("Default"),value:""},{label:Object(l.__)("Angle Right"),value:"is-style-list-angle-right"},{label:Object(l.__)("Check"),value:"is-style-list-check"},{label:Object(l.__)("Plus"),value:"is-style-list-plus"}],onChange:function(e){return n({selectedIcon:""!==e?e:""})}}),O?Object(o.createElement)(r.RangeControl,{label:Object(l.__)("Icon size"),min:8,max:40,value:h,onChange:function(e){return n({iconSize:e})}}):"")),Object(o.createElement)("div",{style:d,className:"wp-block-lf-icon-list ".concat(O)},Object(o.createElement)(i.RichText,{identifier:"values",multiline:"li",tagName:"ul",onChange:function(e){return n({values:e})},value:m,className:s,placeholder:Object(l.__)("Write list…"),onMerge:c,type:f},(function(e){var t=e.value,n=e.onChange,c=e.onFocus;return Object(o.createElement)(o.Fragment,null,p&&Object(o.createElement)(o.Fragment,null,Object(o.createElement)(i.RichTextShortcut,{type:"primary",character:"[",onUse:function(){n(Object(a.__unstableOutdentListItems)(t))}}),Object(o.createElement)(i.RichTextShortcut,{type:"primary",character:"]",onUse:function(){n(Object(a.__unstableIndentListItems)(t,{type:"ul"}))}}),Object(o.createElement)(i.RichTextShortcut,{type:"primary",character:"m",onUse:function(){n(Object(a.__unstableIndentListItems)(t,{type:"ul"}))}}),Object(o.createElement)(i.RichTextShortcut,{type:"primaryShift",character:"m",onUse:function(){n(Object(a.__unstableOutdentListItems)(t))}})),Object(o.createElement)(i.BlockControls,null,Object(o.createElement)(r.ToolbarGroup,{controls:[{icon:u,title:Object(l.__)("Outdent list item"),shortcut:Object(l._x)("Backspace","keyboard key"),isDisabled:!Object(a.__unstableCanOutdentListItems)(t),onClick:function(){n(Object(a.__unstableOutdentListItems)(t)),c()}},{icon:b,title:Object(l.__)("Indent list item"),shortcut:Object(l._x)("Space","keyboard key"),isDisabled:!Object(a.__unstableCanIndentListItems)(t),onClick:function(){n(Object(a.__unstableIndentListItems)(t,{type:"ul"})),c()}}]})))}))))},save:function(e){var t=e.attributes,n=t.values,c=t.type,l=t.selectedIcon,r=t.iconSize,a=t.columnCount,s=t.listGap,u={"--list-gap":s?"".concat(s,"px"):"0","--icon-size":r?"".concat(r,"px"):"20px","--column-count":a?"".concat(a):"1"};return Object(o.createElement)("div",{style:u,className:l},Object(o.createElement)(i.RichText.Content,{tagName:"ul",multiline:"li",value:n,type:c}))}})}]);