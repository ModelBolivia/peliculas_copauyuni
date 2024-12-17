(()=>{var e,t={7710:(e,t,o)=>{"use strict";const r=window.React,n=window.wp.i18n,a=window.wp.components,l=window.wp.blocks;var i=o(6942),c=o.n(i),s=o(6638),u=o.n(s);const d=window.wp.blockEditor,m=window.wp.compose,p=window.wp.element,g=window.wp.hooks,b="gutenify",f=window?.[`_${b}_vars`]?window[`_${b}_vars`]:{},{is_pro_activated:v,pro_account_url:h,pro_license_status:y,title:k,prefix:C,slug:x,authorWebSite:_,authorDemoWebSite:w,authorWebSiteProPage:$,defaultTheme:E,authorWebSiteSupport:A,plugin_directory_url:B,brand_color:O,plugin_main_version:I,documentationsURL:S,pro_title:N,active_blocks:j,plugin_main_camel_case_name:U}=f,F=(f?.siteUrl?f.siteUrl:f.site_url,(0,n.sprintf)("Want to enjoy all feature of blocks? Checkout %1$s%2$s%3$s.",'<a href="'+$+'" target="_blank">',N,"</a>"),{pluginMainSlug:"gutenify",pluginMainCamelCaseName:U,pluginMainFunctionPrefix:"gutenify"}),T=({layouts:e,label:t="Layouts",value:o,onChange:n,blockName:l})=>{e=(0,g.applyFilters)(`${x}--layouts--${l}`,e);const i=l.replace(new RegExp(x+"--","gi"),"");return(0,r.createElement)(r.Fragment,null,e&&e.length?(0,r.createElement)("div",{className:`${x}-template-browser`},(0,r.createElement)(a.Flex,{direction:"column",gap:"20px"},(0,r.createElement)(a.FlexBlock,null,(0,r.createElement)("h2",null,t)),(0,r.createElement)(a.FlexBlock,null,(0,r.createElement)("ul",null,e.map((e=>{let t=`${x}-template-browser-item`;return o===e.name&&(t+=` ${x}-template-browser-item-active`),(0,r.createElement)("li",{className:t,key:e.name},(0,r.createElement)("button",{className:`${x}-template-browser-selector`,onClick:()=>{n(e)}},(0,r.createElement)("img",{src:e?.thumbnailUrl?e.thumbnailUrl:`${B}/assets/images/layouts/${i}/${e.name}.png`,alt:e.name}),(0,r.createElement)("small",null,e.label)))})))))):"")},G=window.wp.data,P=JSON.parse('{"UU":"gutenify/team","rE":"2","uK":{"blockClientId":{"type":"string","default":""},"blockAdvanceOptions":{"type":"object","default":{"padding":{"desktop":{"top":"20px","bottom":"20px","left":"20px","right":"20px"}}}},"layout":{"type":"string","default":"layout-1"},"containerSize":{"type":"string","default":"center"},"columnSize":{"type":"number","default":2}},"xY":{"anchor":true,"html":false,"align":["wide","full"]}}'),{UU:W}=P,R={name:W,blockId:W.replace("/","--"),hookPrefix:"team"},z=JSON.parse('{"UU":"gutenify/team-member"}'),{UU:M}=z,V={name:M,blockId:M.replace("/","--"),hookPrefix:"team-member",layouts:[{name:"layout-1",label:"Layout 1",imageAlign:"center",titleAlign:"center",socialIconAlign:"center"},{name:"layout-2",label:"Layout 2",imageAlign:"center",titleAlign:"left",socialIconAlign:"left"},{name:"layout-3",label:"Layout 3",imageAlign:"center",titleAlign:"right",socialIconAlign:"right"}]},{Accordion:L}=window?.[`_${C}_vars`]?.components,{blockId:D}=R,{layouts:J,blockId:K}=V,{pluginMainSlug:Y}=F;(0,g.addFilter)(`${Y}--inspector-controls--${D}--content`,`${Y}--inspector-controls--${D}--content--opitons`,((e,t)=>{const{attributes:o,setAttributes:l}=t,{layout:i,columnSize:c}=o;return[...e,(0,r.createElement)(p.Fragment,{key:`${Y}--inspector-controls--${D}--content--opitons`},(0,r.createElement)(L,{tabs:[{name:"team",initialOpen:!0,label:()=>(0,n.__)("Team"),cb:()=>(0,r.createElement)(p.Fragment,null,(0,r.createElement)(T,{layouts:J,value:i,blockName:K,onChange:e=>{const o={layout:e.name,socialIconAlign:e.socialIconAlign,imageAlign:e.imageAlign,titleAlign:e.titleAlign};l(o),((e,t)=>{const{clientId:o}=t;(0,G.select)("core/block-editor").getBlocksByClientId(o)[0].innerBlocks.forEach((function(t){"gutenify/team-member"===t.name&&((0,G.dispatch)("core/block-editor").updateBlockAttributes(t.clientId,{layout:e.name,titleAlign:e.titleAlign,imageAlign:e.imageAlign,ratingAlign:e.ratingAlign}),(0,G.select)("core/block-editor").getBlocksByClientId(t.clientId)[0].innerBlocks.forEach((function(t){if("core/image"===t.name&&(0,G.dispatch)("core/block-editor").updateBlockAttributes(t.clientId,{align:e.imageAlign}),"core/heading"===t.name&&(0,G.dispatch)("core/block-editor").updateBlockAttributes(t.clientId,{textAlign:e.titleAlign}),"core/paragraph"===t.name&&(0,G.dispatch)("core/block-editor").updateBlockAttributes(t.clientId,{align:e.titleAlign}),"gutenify/star-rating"===t.name&&(0,G.dispatch)("core/block-editor").updateBlockAttributes(t.clientId,{textAlignment:e.ratingAlign}),"core/social-links"===t.name){const o=e?.socialLinks?.attributes?e?.socialLinks?.attributes:{align:e.socialIconAlign,layout:{type:"flex",justifyContent:e.socialIconAlign}};(0,G.dispatch)("core/block-editor").updateBlockAttributes(t.clientId,{...o})}})))}))})(e,t)}}),(0,r.createElement)(a.RangeControl,{value:c,label:(0,n.__)("Columns"),min:1,max:(0,g.applyFilters)(`${Y}--${D}--max-columns`,4),step:1,onChange:e=>{l({columnSize:e})}}))}]}))]}));const H=window.lodash,q=e=>{const{clearable:t=!0}=e,{colors:o}=(0,G.useSelect)((e=>({colors:e("core/block-editor").getSettings().colors||[]})));return(0,r.createElement)(a.BaseControl,{label:e.label,id:"textcolor-1"},(0,r.createElement)(a.ColorPalette,{colors:o,value:e.value,onChange:t=>{e.onChange(t)},clearable:t}))},Q=e=>{const{clearable:t=!0}=e,{colors:o,gradients:n}=(0,G.useSelect)((e=>({colors:e("core/block-editor").getSettings().colors||[],gradients:e("core/block-editor").getSettings().gradients||[]})));return(0,r.createElement)("div",{className:"gutenify-color-gradient-control-wrapper"},(0,r.createElement)(d.__experimentalColorGradientControl,{label:e.label,colorValue:e.colorValue,gradientValue:e.gradientValue,colors:o,gradients:n,disableCustomColors:!1,disableCustomGradients:!1,onColorChange:t=>{if((0,H.isEmpty)(t))return;const o={backgroundColor:t,backgroundGradient:void 0};e.onChange(o)},onGradientChange:t=>{if((0,H.isEmpty)(t))return;const o={backgroundGradient:t,backgroundColor:void 0};e.onChange(o)},clearable:!1}),t&&(0,r.createElement)("div",{className:"components-circular-option-picker__custom-clear-wrapper"},(0,r.createElement)("button",{type:"button",className:"components-button components-circular-option-picker__clear is-secondary is-small",onClick:()=>{e.onChange({backgroundColor:void 0,backgroundGradient:void 0})}},"Clear")))};p.Component;const{Accordion:X}=window?.[`_${C}_vars`]?.components,{blockId:Z}=R,{pluginMainSlug:ee}=F;(0,g.addFilter)(`${ee}--inspector-controls--${Z}--style`,`${ee}--inspector-controls--${Z}--style--opitons`,((e,t)=>{const{attributes:o,setAttributes:l}=t,{blockAdvanceOptions:i}=o;return[...e,(0,r.createElement)(p.Fragment,{key:`gutenify-block-${Z}-options-tab-content-basic`},(0,r.createElement)(X,{tabs:[{name:"team",initialOpen:!0,label:()=>(0,n.__)("Team Style"),cb:()=>(0,r.createElement)(p.Fragment,null,(0,r.createElement)(a.TabPanel,{className:"gutenify-editor-tab-panel gutenify-editor-tab-ovel",activeClass:"active-tab",tabs:[{name:"normal",title:(0,n.__)("Normal"),className:"gutenify-color-normal-tab"},{name:"hover",title:(0,n.__)("Hover"),className:"gutenify-color-hover-tab"}]},(e=>(0,r.createElement)(p.Fragment,null,"normal"===e.name&&(0,r.createElement)(p.Fragment,null,(0,r.createElement)(q,{label:(0,n.__)("Color"),onChange:e=>{const t={blockAdvanceOptions:{...i,textColor:e}};l(t)},value:i.textColor}),(0,r.createElement)(Q,{label:(0,n.__)("Background Color"),colorValue:i.backgroundColor,gradientValue:i.backgroundGradient,onChange:e=>{const t={blockAdvanceOptions:{...i,...e}};l(t)}}),(0,r.createElement)(q,{label:(0,n.__)("Border Color"),onChange:e=>{const t={blockAdvanceOptions:{...i,borderColor:e}};l(t)},value:i.borderColor})),"hover"===e.name&&(0,r.createElement)(p.Fragment,null,(0,r.createElement)(q,{label:(0,n.__)("Color"),onChange:e=>{const t={blockAdvanceOptions:{...i,hoverTextColor:e}};l(t)},value:i.hoverTextColor}),(0,r.createElement)(Q,{label:(0,n.__)("Background Color"),colorValue:i.hoverBackgroundColor,gradientValue:i.hoverBackgroundGradient,onChange:e=>{const t={blockAdvanceOptions:{...i,hoverBackgroundColor:e.backgroundColor,hoverBackgroundGradient:e.backgroundGradient}};l(t)}}),(0,r.createElement)(q,{label:(0,n.__)("Border Color"),onChange:e=>{const t={blockAdvanceOptions:{...i,hoverBorderColor:e}};l(t)},value:i.hoverBorderColor})),(0,r.createElement)(a.__experimentalNumberControl,{label:(0,n.__)("Border Width"),value:i.borderWidth,onChange:e=>{const t={blockAdvanceOptions:{...i,borderWidth:e}};l(t)},min:0,max:300}),(0,r.createElement)(a.__experimentalUnitControl,{label:(0,n.__)("Border Radius"),value:i.borderRadius,onChange:e=>{const t={blockAdvanceOptions:{...i,borderRadius:e}};l(t)},min:0,max:300})))))}]}))]}));const{hookPrefix:te,blockId:oe,name:re}=R,{pluginMainSlug:ne}=F;(0,g.addFilter)(`${ne}--inline-styles--${oe}`,`${ne}--inline-styles--${oe}--button`,((e,t,o="")=>{const{attributes:r,name:n}=t;if(n!==re)return e;const{blockAdvanceOptions:a,blockClientId:l}=r;o=o||`.gutenify-section-${l}`;let i="";i+=(0,H.has)(a,"textColor")&&!(0,H.isEmpty)(a.textColor)?`color: ${a.textColor};`:"",i+=(0,H.has)(a,"backgroundColor")&&!(0,H.isEmpty)(a.backgroundColor)?`background: ${a.backgroundColor};`:"",(0,H.has)(a,"backgroundGradient")&&!(0,H.isEmpty)(a.backgroundGradient)&&(i+=`background: ${a.backgroundGradient};`),i+=(0,H.has)(a,"borderColor")&&!(0,H.isEmpty)(a.borderColor)?`border-color: ${a.borderColor};`:"",i+=(0,H.has)(a,"borderWidth")&&a.borderWidth>0?`border-width: ${a.borderWidth}px;`:"",i+=(0,H.has)(a,"borderWidth")&&a.borderWidth>0?"border-style: solid;":"",i+=(0,H.has)(a,"borderRadius")&&!(0,H.isEmpty)(a.borderRadius)?`border-radius: ${a.borderRadius};`:"",i&&(e+=`${o} { ${i} }`);let c="";return c+=(0,H.has)(a,"hoverTextColor")&&!(0,H.isEmpty)(a.hoverTextColor)?`color: ${a.hoverTextColor};`:"",c+=(0,H.has)(a,"hoverBackgroundColor")&&!(0,H.isEmpty)(a.hoverBackgroundColor)?`background: ${a.hoverBackgroundColor};`:"",(0,H.has)(a,"hoverBackgroundGradient")&&!(0,H.isEmpty)(a.hoverBackgroundGradient)&&(c+=`background: ${a.hoverBackgroundGradient};`),c+=(0,H.has)(a,"hoverBorderColor")&&!(0,H.isEmpty)(a.hoverBorderColor)?`border-color: ${a.hoverBorderColor};`:"",c&&(e+=`${o}:hover { ${c} }`),(0,g.applyFilters)(`gutenify--${te}--inline-styles`,e,t)}));const ae=e=>{const{children:t,name:o,className:n}=e,a=o.replace("/","-")+"-section",l=c()(a,n);return(0,r.createElement)("div",{className:l},t)},le=["gutenify/team-member"],ie=function(e,t){var o,r,n=0;function a(){var a,l,i=o,c=arguments.length;e:for(;i;){if(i.args.length===arguments.length){for(l=0;l<c;l++)if(i.args[l]!==arguments[l]){i=i.next;continue e}return i!==o&&(i===r&&(r=i.prev),i.prev.next=i.next,i.next&&(i.next.prev=i.prev),i.next=o,i.prev=null,o.prev=i,o=i),i.val}i=i.next}for(a=new Array(c),l=0;l<c;l++)a[l]=arguments[l];return i={args:a,val:e.apply(null,a)},o?(o.prev=i,i.next=o):r=i,n===t.maxSize?(r=r.prev).next=null:n++,o=i,i.val}return t=t||{},a.clear=function(){o=null,r=null,n=0},a}((e=>u()(e,(()=>["gutenify/team-member",{className:"has-shadow-dark"}])))),ce=(0,m.compose)([])((e=>{const{attributes:t,clientId:o}=e,{layout:n,columnSize:a,blockClientId:l}=t,i=c()("gutenify-team-block-wrapper",`gutenify-team-${n}`,`gutenify-team-col-${a}`,`gutenify-section-${l}`,`${P.UU.replace(/\//gm,"-")}-version-${P.rE}`),s=(0,d.useBlockProps)({className:i}),{children:u,...m}=(0,d.useInnerBlocksProps)(s,{allowedBlocks:le,template:ie(2),templateInsertUpdatesSelection:!1,orientation:"horizontal",__experimentalCaptureToolbars:!0,renderAppender:d.InnerBlocks.ButtonBlockAppender});return(0,r.createElement)("div",{...m},(0,r.createElement)(ae,{...e,sectionID:o},u))})),{team:se}=window?.[`_${C}_vars`]?.components?.Icons,{UU:ue,uK:de,xY:me}=P,pe={title:(0,n.__)("Team"),description:(0,n.__)("Gutenify Team"),icon:(0,r.createElement)(a.Icon,{icon:se}),keywords:["gutenify",(0,n.__)("team")],example:{attributes:{teams:{}}},attributes:de,edit:ce,save:function(e){const{attributes:t}=e,{layout:o,columnSize:n,blockClientId:a}=t,l=c()(`gutenify-team-block-wrapper gutenify-team-${o}`,`gutenify-team-col-${n}`,`gutenify-section-${a}`,`${P.UU.replace(/\//gm,"-")}-version-${P.rE}`),i=d.useBlockProps.save({className:l}),s=d.useInnerBlocksProps.save(i);return(0,r.createElement)("div",{className:l},(0,r.createElement)(ae,{...e,name:"gutenify/team"},s.children))},supports:me};(0,l.registerBlockType)(ue,{...pe})},1873:(e,t,o)=>{var r=o(9325).Symbol;e.exports=r},2552:(e,t,o)=>{var r=o(1873),n=o(659),a=o(9350),l=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":l&&l in Object(e)?n(e):a(e)}},8096:e=>{e.exports=function(e,t){for(var o=-1,r=Array(e);++o<e;)r[o]=t(o);return r}},4128:(e,t,o)=>{var r=o(1800),n=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(n,""):e}},4066:(e,t,o)=>{var r=o(3488);e.exports=function(e){return"function"==typeof e?e:r}},4840:(e,t,o)=>{var r="object"==typeof o.g&&o.g&&o.g.Object===Object&&o.g;e.exports=r},659:(e,t,o)=>{var r=o(1873),n=Object.prototype,a=n.hasOwnProperty,l=n.toString,i=r?r.toStringTag:void 0;e.exports=function(e){var t=a.call(e,i),o=e[i];try{e[i]=void 0;var r=!0}catch(e){}var n=l.call(e);return r&&(t?e[i]=o:delete e[i]),n}},9350:e=>{var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},9325:(e,t,o)=>{var r=o(4840),n="object"==typeof self&&self&&self.Object===Object&&self,a=r||n||Function("return this")();e.exports=a},1800:e=>{var t=/\s/;e.exports=function(e){for(var o=e.length;o--&&t.test(e.charAt(o)););return o}},3488:e=>{e.exports=function(e){return e}},3805:e=>{e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},346:e=>{e.exports=function(e){return null!=e&&"object"==typeof e}},4394:(e,t,o)=>{var r=o(2552),n=o(346);e.exports=function(e){return"symbol"==typeof e||n(e)&&"[object Symbol]"==r(e)}},6638:(e,t,o)=>{var r=o(8096),n=o(4066),a=o(1489),l=4294967295,i=Math.min;e.exports=function(e,t){if((e=a(e))<1||e>9007199254740991)return[];var o=l,c=i(e,l);t=n(t),e-=l;for(var s=r(c,t);++o<e;)t(o);return s}},7400:(e,t,o)=>{var r=o(9374),n=1/0;e.exports=function(e){return e?(e=r(e))===n||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}},1489:(e,t,o)=>{var r=o(7400);e.exports=function(e){var t=r(e),o=t%1;return t==t?o?t-o:t:0}},9374:(e,t,o)=>{var r=o(4128),n=o(3805),a=o(4394),l=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(a(e))return NaN;if(n(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=n(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var o=i.test(e);return o||c.test(e)?s(e.slice(2),o?2:8):l.test(e)?NaN:+e}},6942:(e,t)=>{var o;!function(){"use strict";var r={}.hasOwnProperty;function n(){for(var e="",t=0;t<arguments.length;t++){var o=arguments[t];o&&(e=l(e,a(o)))}return e}function a(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var o in e)r.call(e,o)&&e[o]&&(t=l(t,o));return t}function l(e,t){return t?e?e+" "+t:e+t:e}e.exports?(n.default=n,e.exports=n):void 0===(o=function(){return n}.apply(t,[]))||(e.exports=o)}()}},o={};function r(e){var n=o[e];if(void 0!==n)return n.exports;var a=o[e]={exports:{}};return t[e](a,a.exports,r),a.exports}r.m=t,e=[],r.O=(t,o,n,a)=>{if(!o){var l=1/0;for(u=0;u<e.length;u++){for(var[o,n,a]=e[u],i=!0,c=0;c<o.length;c++)(!1&a||l>=a)&&Object.keys(r.O).every((e=>r.O[e](o[c])))?o.splice(c--,1):(i=!1,a<l&&(l=a));if(i){e.splice(u--,1);var s=n();void 0!==s&&(t=s)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,n,a]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={7357:0,4209:0};r.O.j=t=>0===e[t];var t=(t,o)=>{var n,a,[l,i,c]=o,s=0;if(l.some((t=>0!==e[t]))){for(n in i)r.o(i,n)&&(r.m[n]=i[n]);if(c)var u=c(r)}for(t&&t(o);s<l.length;s++)a=l[s],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(u)},o=globalThis.webpackChunkgutenify=globalThis.webpackChunkgutenify||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var n=r.O(void 0,[4209],(()=>r(7710)));n=r.O(n)})();