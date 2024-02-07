!function(){var e={184:function(e,t){var o;!function(){"use strict";var n={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var a=typeof o;if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o)){if(o.length){var s=l.apply(null,o);s&&e.push(s)}}else if("object"===a){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){e.push(o.toString());continue}for(var r in o)n.call(o,r)&&o[r]&&e.push(r)}}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(o=function(){return l}.apply(t,[]))||(e.exports=o)}()}},t={};function o(n){var l=t[n];if(void 0!==l)return l.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,o),a.exports}o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";function e(){return e=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},e.apply(this,arguments)}var t=window.wp.element,n=o(184),l=o.n(n);const{__:__}=wp.i18n,a=["core/list"],{createBlock:s}=wp.blocks,{createHigherOrderComponent:r}=wp.compose,{Fragment:i}=wp.element,{InspectorControls:c}=wp.blockEditor,{PanelBody:u,SelectControl:d}=wp.components;function p(e,t){let o,n=0,l=1e3;for(n in e){const a=Math.abs(t-e[n]);a<l&&(l=a,o=e[n])}return o}wp.hooks.addFilter("blocks.registerBlockType","core-block-customisations/set-list-attributes",((e,t)=>a.includes(t)?Object.assign({},e,{attributes:Object.assign({},e.attributes,{selectedIcon:{type:"string"},listGap:{type:"string"},iconSize:{type:"string"},columnCount:{type:"string"}})}):e)),wp.hooks.addFilter("blocks.registerBlockType","core-block-customisations/add-list-transforms",(function(e,t){if(!a.includes(t))return e;const o=e.transforms;void 0===o.from&&(o.from=[]);const n={type:"block",blocks:["lf/icon-list"],transform:e=>{const t={...e},o="<ul>"+e.values+"</ul>",n=wp.blocks.rawHandler({HTML:o})[0],l=t.selectedIcon.replace("is-style-list-","has-icon-");t.selectedIcon=l;const a=`has-list-gap-${p([0,10,15,20,30,40],t.listGap)}`;t.listGap=a;const r=t.columnCount;let i="";2===r&&(i="has-two-columns"),3===r&&(i="has-three-columns"),t.columnCount=i;const c=`has-icon-size-${p([0,10,15,20,30,40],t.iconSize)}`;t.iconSize=c,delete t.values,delete t.type;const u=n.innerBlocks;return u.forEach((e=>{e.innerBlocks.length>0&&e.innerBlocks.forEach((e=>e.attributes={...t}))}),u),s(n.name,{...t},u)}};return o.from.push(n),e.transforms=o,e}));const b=r((e=>o=>{if(!a.includes(o.name))return(0,t.createElement)(e,o);const{attributes:n,setAttributes:l}=o,{selectedIcon:s,columnCount:r,iconSize:p,listGap:b}=n;return(0,t.createElement)(i,null,(0,t.createElement)(e,o),(0,t.createElement)(c,null,(0,t.createElement)(u,{title:__("Additional Options")},(0,t.createElement)(d,{label:__("No. of columns"),value:r,options:[{label:__("1 Column"),value:""},{label:__("2 Columns"),value:"has-two-columns"},{label:__("3 Columns"),value:"has-three-columns"}],onChange:e=>l({columnCount:""!==e?e:""})}),(0,t.createElement)(d,{label:__("List item gap"),value:b,options:[{label:__("Default"),value:""},{label:__("10px"),value:"has-list-gap-10"},{label:__("15px"),value:"has-list-gap-15"},{label:__("20px"),value:"has-list-gap-20"},{label:__("30px"),value:"has-list-gap-30"},{label:__("40px"),value:"has-list-gap-40"}],onChange:e=>l({listGap:""!==e?e:""})}),(0,t.createElement)(d,{label:__("List icon"),value:s,options:[{label:__("Default"),value:""},{label:__("Angle Right"),value:"has-icon-angle-right"},{label:__("Check"),value:"has-icon-check"},{label:__("Plus"),value:"has-icon-plus"}],onChange:e=>l({selectedIcon:""!==e?e:""})}),s&&(0,t.createElement)(d,{label:__("Icon Size"),value:p,options:[{label:__("10px"),value:"has-icon-size-10"},{label:__("15px"),value:"has-icon-size-15"},{label:__("20px"),value:"has-icon-size-20"},{label:__("30px"),value:"has-icon-size-30"},{label:__("40px"),value:"has-icon-size-40"}],onChange:e=>l({iconSize:""!==e?e:""})}))))}),"addListSidebar");wp.hooks.addFilter("editor.BlockEdit","core-block-customisations/add-list-sidebar",b);const m=r((o=>n=>{if(!a.includes(n.name))return(0,t.createElement)(o,n);const{attributes:s}=n,{selectedIcon:r,columnCount:i,iconSize:c,listGap:u}=s;let d;return(r||i||c||u)&&(d=l()(r,i,c,u)),(0,t.createElement)(o,e({},n,{className:d}))}),"addListSidebarProp");wp.hooks.addFilter("editor.BlockListBlock","core-block-customisations/add-list-sidebar-prop",m),wp.hooks.addFilter("blocks.getSaveContent.extraProps","core-block-customisations/save-list-attributes",((e,t,o)=>{if(a.includes(t.name)){const{selectedIcon:t,columnCount:n,iconSize:a,listGap:s}=o;(t||n||a||s)&&(e.className=l()(e.className,t,n,a,s))}return e}));const{__:v}=wp.i18n,{createHigherOrderComponent:h}=wp.compose,{Fragment:g}=wp.element,{InspectorControls:f,MediaUpload:k}=wp.blockEditor,{PanelBody:w,ToggleControl:y,Button:C}=wp.components,E=["core/cover"];wp.hooks.addFilter("blocks.registerBlockType","core-block-customisations/set-cover-attributes",((e,t)=>E.includes(t)?Object.assign({},e,{attributes:Object.assign({},e.attributes,{activateVideo:{type:"boolean",default:!1},videoBackground:{type:"number"},videoBackgroundName:{type:"string"}})}):e));const S=h((e=>o=>{if(!E.includes(o.name))return(0,t.createElement)(e,o);const{attributes:n,setAttributes:l}=o,{activateVideo:a,videoBackground:s,videoBackgroundName:r}=n;return(0,t.createElement)(g,null,(0,t.createElement)(e,o),(0,t.createElement)(f,null,(0,t.createElement)(w,{title:v("Video Options")},(0,t.createElement)(y,{label:v("Use video background"),checked:a,onChange:()=>l({activateVideo:!a})}),a&&(0,t.createElement)("div",null,(0,t.createElement)(k,{onSelect:e=>l({videoBackground:e.id,videoBackgroundName:e.title}),allowedTypes:["video"],value:s,render:e=>{let{open:o}=e;return(0,t.createElement)(C,{isSecondary:!0,onClick:o},v(r?"Change video":"Select video"))}}),r&&(0,t.createElement)("p",null,`${v("Selected:")} ${r}`)))))}),"addCoverSidebar");wp.hooks.addFilter("editor.BlockEdit","core-block-customisations/add-cover-sidebar",S),wp.hooks.addFilter("blocks.getSaveContent.extraProps","core-block-customisations/save-cover-attributes",((e,t,o)=>{if(E.includes(t.name)){const{activateVideo:t}=o;t&&(e.className=l()(e.className,"has-video-background"))}return e}))}()}();