(()=>{"use strict";var e,r={458:()=>{const e=window.React,r=window.wp.i18n,t=window.wp.components,o=window.wp.blocks,n=window.wp.blockEditor,i=JSON.parse('{"UU":"gutenify/grid-item","rE":"2","uK":{"blockClientId":{"type":"string","default":""},"blockAdvanceOptions":{"type":"object","default":{}}}}'),s="gutenify",a=window?.[`_${s}_vars`]?window[`_${s}_vars`]:{},{is_pro_activated:l,pro_account_url:c,pro_license_status:u,title:p,prefix:d,slug:_,authorWebSite:g,authorDemoWebSite:v,authorWebSiteProPage:f,defaultTheme:m,authorWebSiteSupport:w,plugin_directory_url:b,brand_color:h,plugin_main_version:k,documentationsURL:y,pro_title:O,active_blocks:U,plugin_main_camel_case_name:$}=a,{gridItem:B}=(a?.siteUrl?a.siteUrl:a.site_url,(0,r.sprintf)("Want to enjoy all feature of blocks? Checkout %1$s%2$s%3$s.",'<a href="'+f+'" target="_blank">',O,"</a>"),window?.[`_${d}_vars`]?.components?.Icons),{UU:E,uK:I}=i,P={title:(0,r.__)("Grid Item"),description:(0,r.__)("Gutenify grid item."),icon:(0,e.createElement)(t.Icon,{icon:B}),parent:["gutenify/grid"],keywords:["gutenify",(0,r.__)("grid item"),(0,r.__)("grids"),(0,r.__)("columns"),(0,r.__)("column")],example:{attributes:{image:{url:"",id:""}}},attributes:I,edit:()=>{const r=(0,n.useBlockProps)({className:`${i.UU.replace(/\//gm,"-")}-version-${i.rE}`}),{children:t,...o}=(0,n.useInnerBlocksProps)(r,{renderAppender:n.InnerBlocks.ButtonBlockAppender});return(0,e.createElement)("div",{...o},t)},save:function(){const r=n.useBlockProps.save({className:`${i.UU.replace(/\//gm,"-")}-version-${i.rE}`}),t=n.useInnerBlocksProps.save(r);return(0,e.createElement)("div",{...t},t.children)},supports:{html:!1,anchor:!0,align:["wide","full"]}};(0,o.registerBlockType)(E,{...P})}},t={};function o(e){var n=t[e];if(void 0!==n)return n.exports;var i=t[e]={exports:{}};return r[e](i,i.exports,o),i.exports}o.m=r,e=[],o.O=(r,t,n,i)=>{if(!t){var s=1/0;for(u=0;u<e.length;u++){for(var[t,n,i]=e[u],a=!0,l=0;l<t.length;l++)(!1&i||s>=i)&&Object.keys(o.O).every((e=>o.O[e](t[l])))?t.splice(l--,1):(a=!1,i<s&&(s=i));if(a){e.splice(u--,1);var c=n();void 0!==c&&(r=c)}}return r}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[t,n,i]},o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={1064:0,5472:0};o.O.j=r=>0===e[r];var r=(r,t)=>{var n,i,[s,a,l]=t,c=0;if(s.some((r=>0!==e[r]))){for(n in a)o.o(a,n)&&(o.m[n]=a[n]);if(l)var u=l(o)}for(r&&r(t);c<s.length;c++)i=s[c],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(u)},t=globalThis.webpackChunkgutenify=globalThis.webpackChunkgutenify||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var n=o.O(void 0,[5472],(()=>o(458)));n=o.O(n)})();