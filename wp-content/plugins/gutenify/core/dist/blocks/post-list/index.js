(()=>{var e,t={8959:(e,t,n)=>{"use strict";const o=window.React,r=window.wp.i18n,l=window.wp.components,a=window.wp.blocks;var i=n(6942),s=n.n(i);const c=window.lodash,u=window.wp.element,p=window.wp.blockEditor,d=window.wp.compose,m=window.wp.data,g=window.wp.date,b=window.wp.coreData,h=JSON.parse('{"UU":"gutenify/post-list","rE":"2","uK":{"blockClientId":{"type":"string","default":""},"blockAdvanceOptions":{"type":"object","default":{"itemBackgroundColor":"#fff","itemLinkColor":"","itemColor":"","innerBlock":{"boxShadow":{"color":"#7a7a7a1a","horizontal":0,"vertical":0,"blur":32,"spread":0,"position":""},"contentPadding":{"desktop":{"top":"30px","left":"40px","bottom":"30px","right":"40px"}}}}},"postLink":{"type":"string","default":"Read more"},"columns":{"type":"number","default":2},"excerptLength":{"type":"string","default":12},"displayFeaturedImage":{"type":"boolean","default":true},"displayPostContent":{"type":"boolean","default":true},"displayPostLink":{"type":"boolean","default":true},"displayPostDate":{"type":"boolean","default":true},"displayPostAuthor":{"type":"boolean","default":true},"displayPostCategories":{"type":"boolean","default":true},"query":{"type":"object","default":{"numberOfItems":3}},"spaceBetween":{"type":"number","default":30},"layout":{"type":"string","default":"layout-1"}}}'),y="gutenify",_=window?.[`_${y}_vars`]?window[`_${y}_vars`]:{},{is_pro_activated:f,pro_account_url:v,pro_license_status:k,title:x,prefix:C,slug:E,authorWebSite:$,authorDemoWebSite:w,authorWebSiteProPage:B,defaultTheme:P,authorWebSiteSupport:A,plugin_directory_url:O,brand_color:S,plugin_main_version:F,documentationsURL:T,pro_title:j,active_blocks:N,plugin_main_camel_case_name:I}=_,U=(_?.siteUrl?_.siteUrl:_.site_url,(0,r.sprintf)("Want to enjoy all feature of blocks? Checkout %1$s%2$s%3$s.",'<a href="'+B+'" target="_blank">',j,"</a>"),{pluginMainSlug:"gutenify",pluginMainCamelCaseName:I,pluginMainFunctionPrefix:"gutenify"}),R=window.wp.hooks,L=({className:e,contentClassName:t,position:n,value:a={},onChange:i,label:c})=>{const u=a?.color||a?.horizontal||a?.vertical||a?.blur||a?.spread||a?.position;return(0,o.createElement)("div",{className:"gutenify--box-shadow-control"},(0,o.createElement)("label",{htmlFor:"field-101"},(0,o.createElement)("span",null,c),(0,o.createElement)(l.Dropdown,{headerTitle:(0,r.__)("Box Shadow"),id:"field-101",className:e,contentClassName:s()(t,"gutenify--box-shadow-control-content"),position:n,renderToggle:({isOpen:e,onToggle:t})=>(0,o.createElement)(l.Button,{onClick:t,"aria-expanded":e,icon:"admin-customizer",variant:"secondary",className:s()("gutenify--box-shadow-control--button",(u||e)&&"gutenify--box-shadow-control--button--active")}),renderContent:()=>(0,o.createElement)("div",null,(0,o.createElement)(p.PanelColorSettings,{__experimentalIsRenderedInSidebar:!0,title:(0,r.__)("Color"),enableAlpha:!0,colorSettings:[{onChange:e=>{i({...a,color:e})},value:a?.color?a?.color:"",label:(0,r.__)("Shadow")}]}),(0,o.createElement)(l.RangeControl,{label:(0,r.__)("Horizontal (PX)"),value:a?.horizontal?a?.horizontal:0,onChange:e=>{i({...a,horizontal:e})},min:-100,max:100}),(0,o.createElement)(l.RangeControl,{label:(0,r.__)("Vertical (PX)"),value:a?.vertical?a?.vertical:0,onChange:e=>{i({...a,vertical:e})},min:-100,max:100}),(0,o.createElement)(l.RangeControl,{label:(0,r.__)("Blur (PX)"),value:a?.blur?a?.blur:0,onChange:e=>{i({...a,blur:e})},min:0,max:100}),(0,o.createElement)(l.RangeControl,{label:(0,r.__)("Spread (PX)"),value:a?.spread?a?.spread:0,onChange:e=>{i({...a,spread:e})},min:-100,max:100}),(0,o.createElement)(l.SelectControl,{label:(0,r.__)("Position"),value:a?.position?a?.position:"outline",onChange:e=>{i({...a,position:e})},options:[{value:"outline",label:(0,r.__)("Outline")},{value:"inset",label:(0,r.__)("Inset")}]}))})))};var z=n(1448),M=n.n(z);const D=e=>{const{value:t,label:n,id:a,help:i,disabled:s=!1,onChange:c}=e,p=M()(t,"desktop")?t.desktop:{},d=M()(t,"tablet")?t.tablet:{},m=M()(t,"mobile")?t.mobile:{},g=[{value:"px",label:"px",default:""},{value:"%",label:"%",default:""},{value:"em",label:"em",default:""}],[b,h]=(0,u.useState)({device:"desktop"}),y=e=>{const n={...t,...e};c(n)};return(0,o.createElement)("div",{className:"padding-control-wrapper"},(0,o.createElement)(l.BaseControl,{label:n,id:a,help:i},(0,o.createElement)("div",{className:"padding-actions-area"},(0,o.createElement)(l.ButtonGroup,null,(0,o.createElement)(l.IconButton,{disabled:s,icon:"desktop",label:(0,r.__)("Desktop"),isPrimary:"desktop"===b.device,onClick:()=>{h({device:"desktop"})}}),(0,o.createElement)(l.IconButton,{disabled:s,icon:"tablet",label:(0,r.__)("Tablet"),isPrimary:"tablet"===b.device,onClick:()=>{h({device:"tablet"})}}),(0,o.createElement)(l.IconButton,{disabled:s,icon:"smartphone",label:(0,r.__)("Mobile"),isPrimary:"mobile"===b.device,onClick:()=>{h({device:"mobile"})}}))),(0,o.createElement)("div",{className:"padding-fields-area"},"desktop"===b.device&&(0,o.createElement)(u.Fragment,null,(0,o.createElement)(l.__experimentalUnitControl,{disabled:s,label:(0,r.__)("Top"),value:p.top,onChange:e=>{const t={...p,top:e};y({desktop:t})},units:g}),(0,o.createElement)(l.__experimentalUnitControl,{disabled:s,label:(0,r.__)("Right"),value:p.right,onChange:e=>{const t={...p,right:e};y({desktop:t})},units:g}),(0,o.createElement)(l.__experimentalUnitControl,{disabled:s,label:(0,r.__)("Bottom"),value:p.bottom,onChange:e=>{const t={...p,bottom:e};y({desktop:t})},units:g}),(0,o.createElement)(l.__experimentalUnitControl,{disabled:s,label:(0,r.__)("Left"),value:p.left,onChange:e=>{const t={...p,left:e};y({desktop:t})},units:g})),"tablet"===b.device&&(0,o.createElement)(u.Fragment,null,(0,o.createElement)(l.__experimentalUnitControl,{disabled:s,label:(0,r.__)("Top"),value:d.top,onChange:e=>{const t={...d,top:e};y({tablet:t})},units:g}),(0,o.createElement)(l.__experimentalUnitControl,{disabled:s,label:(0,r.__)("Right"),value:d.right,onChange:e=>{const t={...d,right:e};y({tablet:t})},units:g}),(0,o.createElement)(l.__experimentalUnitControl,{disabled:s,label:(0,r.__)("Bottom"),value:d.bottom,onChange:e=>{const t={...d,bottom:e};y({tablet:t})},units:g}),(0,o.createElement)(l.__experimentalUnitControl,{disabled:s,label:(0,r.__)("Left"),value:d.left,onChange:e=>{const t={...d,left:e};y({tablet:t})},units:g})),"mobile"===b.device&&(0,o.createElement)(u.Fragment,null,(0,o.createElement)(l.__experimentalUnitControl,{disabled:s,label:(0,r.__)("Top"),value:m.top,onChange:e=>{const t={...m,top:e};y({mobile:t})},units:g}),(0,o.createElement)(l.__experimentalUnitControl,{disabled:s,label:(0,r.__)("Right"),value:m.right,onChange:e=>{const t={...m,right:e};y({mobile:t})},units:g}),(0,o.createElement)(l.__experimentalUnitControl,{disabled:s,label:(0,r.__)("Bottom"),value:m.bottom,onChange:e=>{const t={...m,bottom:e};y({mobile:t})},units:g}),(0,o.createElement)(l.__experimentalUnitControl,{disabled:s,label:(0,r.__)("Left"),value:m.left,onChange:e=>{const t={...m,left:e};y({mobile:t})},units:g})))))},{UU:H}=h,{pluginMainFunctionPrefix:W}=U,{plugin_directory_url:q}=window[`_${W}_vars`],G=[{name:"layout-1",label:"Layout 1",imageAlign:"center",titleAlign:"center",ratingAlign:"center",thumbnailUrl:`${q}/assets/images/post-slider-layouts/layout-1.png`},{name:"layout-2",label:"Layout 2",imageAlign:"center",titleAlign:"left",ratingAlign:"left",thumbnailUrl:`${q}/assets/images/post-slider-layouts/layout-3.png`},{name:"layout-3",label:"Layout 3",imageAlign:"center",titleAlign:"right",ratingAlign:"right",thumbnailUrl:`${q}/assets/images/post-slider-layouts/layout-2.png`},{name:"layout-4",label:"Layout 4",imageAlign:"center",titleAlign:"right",ratingAlign:"right",thumbnailUrl:`${q}/assets/images/post-slider-layouts/layout-4.png`},{name:"layout-5",label:"Layout 5",imageAlign:"center",titleAlign:"right",ratingAlign:"right",thumbnailUrl:`${q}/assets/images/post-slider-layouts/layout-5.png`}],X={name:H,blockId:H.replace("/","--"),hookPrefix:H.replace("/","-"),layouts:G},{Accordion:K}=window?.[`_${C}_vars`]?.components,{blockId:Q,hookPrefix:J}=X,{pluginMainSlug:V}=U;(0,R.addFilter)(`${V}--inspector-controls--${Q}--style`,`${V}--inspector-controls--${Q}--style--opitons`,((e,t)=>{const{attributes:n,setAttributes:a}=t,{blockAdvanceOptions:i}=n,{innerBlock:s}=i;return[...e,(0,o.createElement)(u.Fragment,{key:`${V}--inspector-controls--${Q}--style--opitons`},(0,o.createElement)(K,{tabs:[{name:"post-wrapper",initialOpen:!0,label:()=>(0,r.__)("Post style"),cb:()=>(0,o.createElement)(u.Fragment,null,(0,o.createElement)(l.TabPanel,{className:"gutenify-editor-tab-panel gutenify-editor-tab-ovel",activeClass:"active-tab",tabs:[{name:"normal",title:(0,r.__)("Normal"),className:"gutenify-color-normal-tab"},{name:"hover",title:(0,r.__)("Hover"),className:"gutenify-color-hover-tab"}]},(e=>(0,o.createElement)(u.Fragment,null,"normal"===e.name&&(0,o.createElement)(u.Fragment,null,(0,o.createElement)(p.PanelColorSettings,{__experimentalIsRenderedInSidebar:!0,title:(0,r.__)("Color"),enableAlpha:!0,colorSettings:[{onChange:e=>{const t={blockAdvanceOptions:{...i,innerBlock:{...s,textColor:e}}};a(t)},value:i?.innerBlock?.textColor?i.innerBlock.textColor:"",label:(0,r.__)("Text")},{onChange:e=>{const t={blockAdvanceOptions:{...i,innerBlock:{...s,backgroundColor:e}}};a(t)},value:i?.innerBlock?.backgroundColor?i.innerBlock.backgroundColor:"",label:(0,r.__)("Background")},{onChange:e=>{const t={blockAdvanceOptions:{...i,innerBlock:{...s,borderColor:e}}};a(t)},value:i?.innerBlock?.borderColor?i.innerBlock.borderColor:"",label:(0,r.__)("Border")}]})),"hover"===e.name&&(0,o.createElement)(u.Fragment,null,(0,o.createElement)(p.PanelColorSettings,{__experimentalIsRenderedInSidebar:!0,title:(0,r.__)("Color"),enableAlpha:!0,colorSettings:[{onChange:e=>{const t={blockAdvanceOptions:{...i,innerBlock:{...s,hoverTextColor:e}}};a(t)},value:i?.innerBlock?.hoverTextColor?i.innerBlock.hoverTextColor:"",label:(0,r.__)("Text")},{onChange:e=>{const t={blockAdvanceOptions:{...i,innerBlock:{...s,hoverBackgroundColor:e}}};a(t)},value:i?.innerBlock?.hoverBackgroundColor?i.innerBlock.hoverBackgroundColor:"",label:(0,r.__)("Background")},{onChange:e=>{const t={blockAdvanceOptions:{...i,innerBlock:{...s,hoverBorderColor:e}}};a(t)},value:i?.innerBlock?.hoverBorderColor?i.innerBlock.hoverBorderColor:"",label:(0,r.__)("Border")}]})),(0,o.createElement)("hr",null),(0,R.applyFilters)(`gutenify--${J}--inspector--tab-style--posts`,[],t),(0,o.createElement)(l.__experimentalNumberControl,{label:(0,r.__)("Border Width"),value:i?.innerBlock?.borderWidth,onChange:e=>{const t={blockAdvanceOptions:{...i,innerBlock:{...s,borderWidth:e}}};a(t)},min:0,max:300}),(0,o.createElement)(l.__experimentalUnitControl,{label:(0,r.__)("Border Radius"),value:(0,c.has)(i,"innerBlock.borderRadius")&&i.innerBlock.borderRadius,onChange:e=>{const t={blockAdvanceOptions:{...i,innerBlock:{...s,borderRadius:e}}};a(t)},min:0,max:300}),(0,o.createElement)(l.__experimentalUnitControl,{label:(0,r.__)("Thumbnail Min Height"),value:i?.innerBlock?.thumbnailMinHeight&&i.innerBlock.thumbnailMinHeight,onChange:e=>{const t={blockAdvanceOptions:{...i,innerBlock:{...s,thumbnailMinHeight:e}}};a(t)},min:0,disableUnits:!0}),(0,o.createElement)(L,{label:(0,r.__)("Box Shadow"),value:i?.innerBlock?.boxShadow,onChange:e=>{const t={blockAdvanceOptions:{...i,innerBlock:{...s,boxShadow:e}}};a(t)}}),(0,o.createElement)(D,{label:(0,r.__)("Content Box Padding"),value:i?.innerBlock?.contentPadding?i.innerBlock.contentPadding:{},onChange:e=>{const t={blockAdvanceOptions:{...i,innerBlock:{...s,contentPadding:e}}};a(t)}}),(0,o.createElement)(l.__experimentalDivider,null)))))}]}))]}));const Y={who:"authors",per_page:-1,_fields:"id,name",context:"view"},Z=function({value:e,onChange:t}){const n=(0,m.useSelect)((e=>{const{getUsers:t}=e(b.store);return t(Y)}),[]);if(!n)return null;const a=(e=>{const t=e?.reduce(((e,t)=>{const{mapById:n,mapByName:o,names:r}=e;return n[t.id]=t,o[t.name]=t,r.push(t.name),e}),{mapById:{},mapByName:{},names:[]});return{entities:e,...t}})(n),i=(e?e.toString().split(","):[]).reduce(((e,t)=>{const n=a.mapById[t];return n&&e.push({id:t,value:n.name}),e}),[]);return(0,o.createElement)(l.FormTokenField,{label:(0,r.__)("Authors"),value:i,suggestions:a.names,onChange:e=>{const n=Array.from(e.reduce(((e,t)=>{const n=((e,t)=>{const n=t?.id||e[t]?.id;if(n)return n})(a.mapByName,t);return n&&e.add(n),e}),new Set));t({author:n.join(",")})}})},ee=[{label:(0,r.__)("Decending"),value:"desc"},{label:(0,r.__)("Ascending"),value:"asc"}],te=[{label:(0,r.__)("Date"),value:"date"},{label:(0,r.__)("Title"),value:"title"}],ne=(0,d.compose)([(0,m.withSelect)(((e,t)=>{let{postTypes:n=[],query:o}=t;const{postTypes:r=[]}=o;n=r.length>0?r:n;const{getEntityRecords:l,getPostTypes:a,getTaxonomy:i}=e(b.store),s=a({per_page:-1})?.filter((({viewable:e})=>e)),c=a({per_page:-1})?.filter((({viewable:e,slug:t})=>e&&n.includes(t)));let u=[];const p={};let d=[];return c?.length&&c.forEach((e=>{e?.taxonomies&&(d=[...e.taxonomies,...d])})),d?.length&&d.forEach((e=>{p[e]=l("taxonomy",e,{per_page:-1}),u=[...u,i(e)]})),u=u.filter((e=>e)),{taxonomies:u,taxonomiesTerms:p,availablePostTypes:s}}))])((e=>{const{query:t,taxonomies:n=[],taxonomiesTerms:a,onChange:i,excludeFields:s=[],orderByOptions:u=[],availablePostTypes:p=[]}=e,{orderBy:d,order:m,numberOfItems:g,authorIds:b=[],tax:h={}}=t,y=e=>{i({...t,...e})};return(0,o.createElement)(o.Fragment,null,(0,R.applyFilters)("gutenify--advance-query-control--fields",[],e),(0,o.createElement)(l.SelectControl,{label:(0,r.__)("Order"),value:m,onChange:e=>{y({order:e})},options:ee}),(0,o.createElement)(l.SelectControl,{label:(0,r.__)("Order by"),value:d,onChange:e=>{y({orderBy:e})},options:u.length>0?u:te}),!s.includes("taxonomies")&&n.length>0&&n.map((e=>(0,o.createElement)(l.BaseControl,{key:`tax-$${e.slug}`},(0,o.createElement)("div",{style:{maxHeight:"300px",overflow:"scroll"}},a[e.slug]&&a[e.slug]?.length>0&&(0,o.createElement)(o.Fragment,null,(0,o.createElement)("h2",{htmlFor:`tax-term-${e.slug}`},e.name),a[e.slug]&&a[e.slug]?.length&&(0,o.createElement)(o.Fragment,null,a[e.slug].map((t=>{const n=(0,c.has)(h,`${e.slug}`)&&h[e.slug].includes(t.id);return(0,o.createElement)("div",{key:`tax-term-${t.slug}`},(0,o.createElement)(l.CheckboxControl,{label:t.name,checked:n,onChange:()=>{const n=h;(0,c.has)(h,`${e.slug}`)||(n[e.slug]=[]),n[e.slug].includes(t.id)?n[e.slug]=n[e.slug].filter((function(e){return e!==t.id})):n[e.slug].push(t.id),y({tax:{...n}})}}))})))))))),!s.includes("authors")&&(0,o.createElement)(Z,{value:b.join(","),onChange:e=>{let t=e?.author.split(",");t=t.filter((e=>""!==e)),y({authorIds:t})}}),(0,o.createElement)(l.RangeControl,{label:(0,r.__)("Number of items"),min:1,max:100,value:g,onChange:e=>{y({numberOfItems:e})}}))})),oe=({layouts:e,label:t="Layouts",value:n,onChange:r,blockName:a})=>{e=(0,R.applyFilters)(`${E}--layouts--${a}`,e);const i=a.replace(new RegExp(E+"--","gi"),"");return(0,o.createElement)(o.Fragment,null,e&&e.length?(0,o.createElement)("div",{className:`${E}-template-browser`},(0,o.createElement)(l.Flex,{direction:"column",gap:"20px"},(0,o.createElement)(l.FlexBlock,null,(0,o.createElement)("h2",null,t)),(0,o.createElement)(l.FlexBlock,null,(0,o.createElement)("ul",null,e.map((e=>{let t=`${E}-template-browser-item`;return n===e.name&&(t+=` ${E}-template-browser-item-active`),(0,o.createElement)("li",{className:t,key:e.name},(0,o.createElement)("button",{className:`${E}-template-browser-selector`,onClick:()=>{r(e)}},(0,o.createElement)("img",{src:e?.thumbnailUrl?e.thumbnailUrl:`${O}/assets/images/layouts/${i}/${e.name}.png`,alt:e.name}),(0,o.createElement)("small",null,e.label)))})))))):"")},{Accordion:re}=window?.[`_${C}_vars`]?.components,{blockId:le,layouts:ae,hookPrefix:ie}=X,{pluginMainSlug:se}=U;(0,R.addFilter)(`${se}--inspector-controls--${le}--content`,`${se}--inspector-controls--${le}--content--opitons`,((e,t)=>{const{attributes:n,setAttributes:a}=t,{displayPostContent:i,excerptLength:s,displayPostLink:c}=n;return[...e,(0,o.createElement)(u.Fragment,{key:`${se}--inspector-controls--${le}--content--opitons`},(0,o.createElement)(re,{tabs:[{name:"posts",initialOpen:!0,label:()=>(0,r.__)("Posts"),cb:()=>(0,o.createElement)(u.Fragment,null,(0,R.applyFilters)(`gutenify--${ie}--inspector--tab-content--posts`,[],t),(0,o.createElement)(l.ToggleControl,{label:(0,r.__)("Show content"),help:i?(0,r.__)("Content showing"):(0,r.__)("Content hidden"),checked:i,onChange:()=>{a({displayPostContent:!i})}}),i&&(0,o.createElement)(u.Fragment,null,(0,o.createElement)(l.TextControl,{value:s,onChange:e=>{a({excerptLength:e})},type:"number",min:"0",label:(0,r.__)("Excerpt Length"),help:(0,r.__)("Number of words in content")}),(0,o.createElement)(l.ToggleControl,{label:(0,r.__)("Show Read more link"),help:c?(0,r.__)("Read more link showing"):(0,r.__)("Read more link hidden"),checked:c,onChange:()=>{a({displayPostLink:!c})}})))}]}))]})),(0,R.addFilter)(`gutenify--${ie}--inspector--tab-content--posts`,`gutenify--${ie}--inspector--tab-content--posts--post-layout`,((e,t)=>{const{attributes:n,setAttributes:l}=t,{layout:a}=n;return[...e,(0,o.createElement)(u.Fragment,{key:`gutenify--${ie}--inspector--tab-content--posts--post-layout`},(0,o.createElement)(oe,{label:(0,r.__)("Post Layout"),layouts:ae,value:a,blockName:ie,onChange:e=>{const t={layout:e.name,socialIconAlign:e.socialIconAlign,imageAlign:e.imageAlign,titleAlign:e.titleAlign};l(t)}}))]})),(0,R.addFilter)(`gutenify--${ie}--inspector--tab-content--posts`,`gutenify--${ie}--inspector--tab-content--posts--advance-query-controls`,((e,t)=>{const{attributes:n,setAttributes:r}=t,{query:l}=n;return[...e,(0,o.createElement)(u.Fragment,{key:`gutenify--${ie}--inspector--tab-content--posts--advance-query-controls`},(0,o.createElement)(ne,{query:l,postTypes:["post"],onChange:e=>{r({query:{...e}})},...t}))]})),(0,R.addFilter)(`gutenify--${ie}--inspector--tab-content--posts`,`gutenify--${ie}--inspector--tab-content--posts--columns`,((e,t)=>{const{attributes:n,setAttributes:a}=t,{columns:i}=n;return[...e,(0,o.createElement)(u.Fragment,{key:`gutenify--${ie}--inspector--tab-content--posts--columns`},(0,o.createElement)(l.RangeControl,{value:i,label:(0,r.__)("Columns"),min:1,max:(0,R.applyFilters)(`${se}--${le}--max-columns`,3),step:1,onChange:e=>{a({columns:e})}}))]}));const{blockId:ce,name:ue,hookPrefix:pe}=X,{pluginMainSlug:de}=U;function me(e){const{plugin_directory_url:t}=window[`_${C}_vars`],{post:n,setAttributes:l,attributes:a}=e,{postLink:i,excerptLength:s,displayFeaturedImage:d,displayPostDate:m,displayPostContent:b,displayPostLink:h,displayPostAuthor:y,displayPostCategories:_}=a,{link:f,title:v}=n,k=(0,g.__experimentalGetSettings)().formats.date;let x=n?.excerpt?.rendered?n.excerpt.rendered:"";n?.excerpt?.raw&&""!==n.excerpt.raw&&(x=n.content.raw);const E=document.createElement("div");E.innerHTML=x,x=E.textContent||E.innerText||"";const $=n.featured_media_object?n.featured_media_object.source_url:null;return(0,o.createElement)("div",{className:"gutenify-post-list-item gutenify-post-list-item-wrapper inner-block-shadow"},(0,o.createElement)("div",{className:"gutenify-post-list-item-inner-wrapper"},(0,o.createElement)("div",{className:"gutenify-post-list-thumb"},(0,o.createElement)("a",{className:"image-hover-zoom",href:f,onClick:e=>e.preventDefault()},(0,o.createElement)("img",{src:$||`${t}/assets/images/placeholder-attachment.png`,alt:v.rendered}))),(0,o.createElement)("div",{className:"gutenify-post-list-text-content"},(0,o.createElement)("h3",{className:"gutenify-post-list-title"},(0,o.createElement)("a",{href:f,onClick:e=>e.preventDefault(),rel:"bookmark"},(0,o.createElement)(u.RawHTML,{key:"html"},v.rendered))),(0,o.createElement)("div",{className:"gutenify-post-list-meta"},m&&n.date_gmt&&(0,o.createElement)("span",{className:"posted-on"},(0,o.createElement)("time",{dateTime:(0,g.format)("c",n.date_gmt),className:"entry-date gutenify-posts-date"},(0,g.dateI18n)(k,n.date_gmt))),!(0,c.isEmpty)(n.authorInfo)&&y&&(0,o.createElement)("span",{className:"byline"},(0,o.createElement)("a",{href:f,onClick:e=>e.preventDefault(),rel:"author"},n.authorInfo.name)),!(0,c.isEmpty)(n.categories)&&_&&(0,o.createElement)("span",{className:"cat-links"},(0,o.createElement)(o.Fragment,null,n.categories.map((e=>(0,o.createElement)("a",{href:f,onClick:e=>e.preventDefault(),rel:"category tag",key:e.id},e.name)))))),b&&(0,o.createElement)(o.Fragment,null,(0,o.createElement)("div",{className:"entry-summary"},(0,o.createElement)(u.RawHTML,{key:"html"},s<x.trim().split(" ").length?x.trim().split(" ",s).join(" ")+"…":x.trim().split(" ",s).join(" ")),h&&(0,o.createElement)(p.RichText,{tagName:"a",className:"wp-block-gutenify-posts__more-link",onChange:e=>l({postLink:e}),value:i,placeholder:(0,r.__)("Read more","gutenify"),multiline:!1,withoutInteractiveFormatting:!1,isSelected:!1}))))))}(0,R.addFilter)(`${de}--inline-styles--${ce}`,`${de}--inline-styles--${ce}--button`,(function(e,t,n=""){const{attributes:o,name:r}=t;if(r!==ue)return e;const{blockAdvanceOptions:l,blockClientId:a,spaceBetween:i}=o;n=n||`.gutenify-section-${a}.wp-block-gutenify-post-list`,""!==i&&(e=`${n}{grid-gap:${i}px}`);const s=`${n} .gutenify-post-list-item-inner-wrapper`;let u=(0,c.has)(l,"innerBlock.textColor")&&!(0,c.isEmpty)(l.innerBlock.textColor)?`color: ${l.innerBlock.textColor};`:"";u+=(0,c.has)(l,"innerBlock.borderColor")&&!(0,c.isEmpty)(l.innerBlock.borderColor)?`border-color: ${l.innerBlock.borderColor};`:"",u+=l?.innerBlock?.borderWidth?`border-width: ${l.innerBlock.borderWidth}px;`:"",u+=l?.innerBlock?.borderWidth?"border-style: solid;":"",u+=(0,c.has)(l,"innerBlock.borderRadius")&&!(0,c.isEmpty)(l.innerBlock.borderRadius)?`border-radius: ${l.innerBlock.borderRadius};`:"",u+=(0,c.has)(l,"innerBlock.backgroundColor")&&!(0,c.isEmpty)(l.innerBlock.backgroundColor)?`background: ${l.innerBlock.backgroundColor};`:"",u+=(0,c.has)(l,"innerBlock.backgroundGradient")&&!(0,c.isEmpty)(l.innerBlock.backgroundGradient)?`background: ${l.innerBlock.backgroundGradient};`:"";let p=(0,c.has)(l,"innerBlock.hoverTextColor")&&!(0,c.isEmpty)(l.innerBlock.hoverTextColor)?`color: ${l.innerBlock.hoverTextColor};`:"";p+=(0,c.has)(l,"innerBlock.hoverBackgroundColor")&&!(0,c.isEmpty)(l.innerBlock.hoverBackgroundColor)?`background: ${l.innerBlock.hoverBackgroundColor};`:"",p+=(0,c.has)(l,"innerBlock.hoverBackgroundGradient")&&!(0,c.isEmpty)(l.innerBlock.hoverBackgroundGradient)?`background: ${l.innerBlock.hoverBackgroundGradient};`:"",p+=(0,c.has)(l,"innerBlock.hoverBorderColor")&&!(0,c.isEmpty)(l.innerBlock.hoverBorderColor)?`border-color: ${l.innerBlock.hoverBorderColor};`:"",u&&(e+=`${s} { ${u} }`),p&&(e+=`${s}:hover { ${p} }`),p="",p+=l?.innerBlock?.thumbnailMinHeight?`min-height:${l?.innerBlock?.thumbnailMinHeight}`:"",p&&(e+=`${n} .gutenify-post-list-item-inner-wrapper .gutenify-post-list-thumb img { ${p} }`);const d=l?.innerBlock?.boxShadow?l.innerBlock.boxShadow:{};if(p="",d?.color||d?.horizontal||d?.vertical||d?.blur||d?.spread||d?.position){const e=d?.color?d?.color:"#7a7a7a1a";p=`box-shadow: ${d?.horizontal?d?.horizontal:0}px ${d?.vertical?d?.vertical:0}px ${d?.blur?d?.blur:32}px ${d?.spread?d?.spread:0}px ${e} ${d?.position&&"inset"===d.position?"inset":""};`}return p&&(e+=`${n} .gutenify-post-list-item-inner-wrapper { ${p} }`),p=((e,t,n="padding")=>{let o="";return o+=`${t}{\n\t\t${(0,c.has)(e,"desktop.top")&&!(0,c.isEmpty)(e.desktop.top)?`${n}-top: ${e.desktop.top};`:""}\n\t\t${(0,c.has)(e,"desktop.right")&&!(0,c.isEmpty)(e.desktop.right)?`${n}-right: ${e.desktop.right};`:""}\n\t\t${(0,c.has)(e,"desktop.bottom")&&!(0,c.isEmpty)(e.desktop.bottom)?`${n}-bottom: ${e.desktop.bottom};`:""}\n\t\t${(0,c.has)(e,"desktop.left")&&!(0,c.isEmpty)(e.desktop.left)?`${n}-left: ${e.desktop.left};`:""}\n\t}`,o+=`@media only screen and (max-width: 992px) {\n\t\t${t}{\n\n\t\t\t${(0,c.has)(e,"tablet.top")&&!(0,c.isEmpty)(e.tablet.top)?`${n}-top: ${e.tablet.top};`:""}\n\t\t\t${(0,c.has)(e,"tablet.right")&&!(0,c.isEmpty)(e.tablet.right)?`${n}-right: ${e.tablet.right};`:""}\n\t\t\t${(0,c.has)(e,"tablet.bottom")&&!(0,c.isEmpty)(e.tablet.bottom)?`${n}-bottom: ${e.tablet.bottom};`:""}\n\t\t\t${(0,c.has)(e,"tablet.left")&&!(0,c.isEmpty)(e.tablet.left)?`${n}-left: ${e.tablet.left};`:""}\n\t\t}\n\t}`,o+=`@media only screen and (max-width: 768px) {\n\t\t${t}{\n\n\t\t\t${(0,c.has)(e,"mobile.top")&&!(0,c.isEmpty)(e.mobile.top)?`${n}-top: ${e.mobile.top};`:""}\n\t\t\t${(0,c.has)(e,"mobile.right")&&!(0,c.isEmpty)(e.mobile.right)?`${n}-right: ${e.mobile.right};`:""}\n\t\t\t${(0,c.has)(e,"mobile.bottom")&&!(0,c.isEmpty)(e.mobile.bottom)?`${n}-bottom: ${e.mobile.bottom};`:""}\n\t\t\t${(0,c.has)(e,"mobile.left")&&!(0,c.isEmpty)(e.mobile.left)?`${n}-left: ${e.mobile.left};`:""}\n\t\t}\n\t}`,o})(l?.innerBlock?.contentPadding?l.innerBlock.contentPadding:{},`${n} .gutenify-post-list-text-content`),p&&(e+=p),l?.innerBlock?.postTitleSize&&(n=`${n} .gutenify-post-list-title`,p=`font-size: ${l.innerBlock.postTitleSize};`,e+=`${n} { ${p} }`),(0,R.applyFilters)(`gutenify--${pe}--inline-styles`,e,t)}));const ge=(0,d.compose)([(0,m.withSelect)(((e,t)=>{const{query:n}=t.attributes,{getEntityRecords:o,getMedia:r,getUser:a}=e(b.store),{getCurrentPost:i}=e("core/editor"),s=l.QueryControls.toString().includes("selectedCategories"),u=i(),p={...n};return{latestPosts:s?(()=>{const t={categories:p.selectedCategories&&p.selectedCategories.length>0?p.selectedCategories.map((e=>e.id)):[],order:p.order,orderby:p.orderBy,per_page:p.numberOfItems,exclude:u.id};p?.tax?.post_tag&&(t.tags=p.tax.post_tag),p?.tax?.category&&(t.categories=[...t.categories,...p.tax.category]),p?.authorIds&&(t.author=p.authorIds);const n=(0,c.pickBy)(t,(e=>!(0,c.isArray)(e)&&!(0,c.isUndefined)(e)||!!((0,c.isArray)(e)&&e.length>0))),l=p?.postTypes?p.postTypes[0]:"post",i=o("postType",l,n);return!(0,c.isEmpty)(i)&&i.map((t=>{if(t.featured_media){const n=r(t.featured_media);let o=(0,c.get)(n,["media_details","sizes","source_url"],null);o||(o=(0,c.get)(n,"source_url",null)),t={...t,featured_media_object:t.featured_media&&e("core").getMedia(t.featured_media)}}if(!(0,c.isEmpty)(t.categories)){const e={per_page:-1,context:"view",include:t.categories},n=o("taxonomy","category",e);t={...t,categories:n}}if(t.author){const e=a(t.author,{context:"view"});t={...t,authorInfo:e}}return t}))})():[],useUpdatedQueryControls:s}}))])((e=>{const{isSelected:t,attributes:n,latestPosts:l}=e,{columns:a,layout:i,blockClientId:c,blockAdvanceOptions:u}=n,{postListLayout:d="layout-1"}=u,m=s()(`gutenify-post-list-${i}`,`gutenify--post-list--post-list-${d}`,`gutenify-post-list-col-${a}`,`gutenify-section-${c}`,`${h.UU.replace(/\//gm,"-")}-version-${h.rE}`),g=Array.isArray(l)&&l.length,b=(0,p.useBlockProps)({className:m});return(0,o.createElement)("div",{...b},!g&&(0,o.createElement)(o.Fragment,null,(0,r.__)("No posts found.")),g&&l.map((t=>(0,o.createElement)(me,{post:t,...e,key:t.id||t.link}))))})),{postList:be}=window?.[`_${C}_vars`]?.components?.Icons,{UU:he,uK:ye}=h,_e={title:(0,r.__)("Post List"),description:(0,r.__)("Gutenify Post List."),icon:(0,o.createElement)(l.Icon,{icon:be}),keywords:["gutenify",(0,r.__)("Post List"),(0,r.__)("Posts"),(0,r.__)("Post")],example:{attributes:{}},attributes:ye,edit:ge,save:()=>{},supports:{html:!1,align:["center","wide","full"]}};(0,a.registerBlockType)(he,{..._e})},1549:(e,t,n)=>{var o=n(2032),r=n(3862),l=n(6721),a=n(2749),i=n(5749);function s(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var o=e[t];this.set(o[0],o[1])}}s.prototype.clear=o,s.prototype.delete=r,s.prototype.get=l,s.prototype.has=a,s.prototype.set=i,e.exports=s},79:(e,t,n)=>{var o=n(3702),r=n(80),l=n(4739),a=n(8655),i=n(1175);function s(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var o=e[t];this.set(o[0],o[1])}}s.prototype.clear=o,s.prototype.delete=r,s.prototype.get=l,s.prototype.has=a,s.prototype.set=i,e.exports=s},8223:(e,t,n)=>{var o=n(6110)(n(9325),"Map");e.exports=o},3661:(e,t,n)=>{var o=n(3040),r=n(7670),l=n(289),a=n(4509),i=n(2949);function s(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var o=e[t];this.set(o[0],o[1])}}s.prototype.clear=o,s.prototype.delete=r,s.prototype.get=l,s.prototype.has=a,s.prototype.set=i,e.exports=s},1873:(e,t,n)=>{var o=n(9325).Symbol;e.exports=o},4932:e=>{e.exports=function(e,t){for(var n=-1,o=null==e?0:e.length,r=Array(o);++n<o;)r[n]=t(e[n],n,e);return r}},6025:(e,t,n)=>{var o=n(5288);e.exports=function(e,t){for(var n=e.length;n--;)if(o(e[n][0],t))return n;return-1}},2552:(e,t,n)=>{var o=n(1873),r=n(659),l=n(9350),a=o?o.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?r(e):l(e)}},426:e=>{var t=Object.prototype.hasOwnProperty;e.exports=function(e,n){return null!=e&&t.call(e,n)}},7534:(e,t,n)=>{var o=n(2552),r=n(346);e.exports=function(e){return r(e)&&"[object Arguments]"==o(e)}},5083:(e,t,n)=>{var o=n(1882),r=n(7296),l=n(3805),a=n(7473),i=/^\[object .+?Constructor\]$/,s=Function.prototype,c=Object.prototype,u=s.toString,p=c.hasOwnProperty,d=RegExp("^"+u.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=function(e){return!(!l(e)||r(e))&&(o(e)?d:i).test(a(e))}},7556:(e,t,n)=>{var o=n(1873),r=n(4932),l=n(6449),a=n(4394),i=o?o.prototype:void 0,s=i?i.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(l(t))return r(t,e)+"";if(a(t))return s?s.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n}},1769:(e,t,n)=>{var o=n(6449),r=n(8586),l=n(1802),a=n(3222);e.exports=function(e,t){return o(e)?e:r(e,t)?[e]:l(a(e))}},5481:(e,t,n)=>{var o=n(9325)["__core-js_shared__"];e.exports=o},4840:(e,t,n)=>{var o="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=o},2651:(e,t,n)=>{var o=n(4218);e.exports=function(e,t){var n=e.__data__;return o(t)?n["string"==typeof t?"string":"hash"]:n.map}},6110:(e,t,n)=>{var o=n(5083),r=n(392);e.exports=function(e,t){var n=r(e,t);return o(n)?n:void 0}},659:(e,t,n)=>{var o=n(1873),r=Object.prototype,l=r.hasOwnProperty,a=r.toString,i=o?o.toStringTag:void 0;e.exports=function(e){var t=l.call(e,i),n=e[i];try{e[i]=void 0;var o=!0}catch(e){}var r=a.call(e);return o&&(t?e[i]=n:delete e[i]),r}},392:e=>{e.exports=function(e,t){return null==e?void 0:e[t]}},9326:(e,t,n)=>{var o=n(1769),r=n(2428),l=n(6449),a=n(361),i=n(294),s=n(7797);e.exports=function(e,t,n){for(var c=-1,u=(t=o(t,e)).length,p=!1;++c<u;){var d=s(t[c]);if(!(p=null!=e&&n(e,d)))break;e=e[d]}return p||++c!=u?p:!!(u=null==e?0:e.length)&&i(u)&&a(d,u)&&(l(e)||r(e))}},2032:(e,t,n)=>{var o=n(1042);e.exports=function(){this.__data__=o?o(null):{},this.size=0}},3862:e=>{e.exports=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}},6721:(e,t,n)=>{var o=n(1042),r=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;if(o){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return r.call(t,e)?t[e]:void 0}},2749:(e,t,n)=>{var o=n(1042),r=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;return o?void 0!==t[e]:r.call(t,e)}},5749:(e,t,n)=>{var o=n(1042);e.exports=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=o&&void 0===t?"__lodash_hash_undefined__":t,this}},361:e=>{var t=/^(?:0|[1-9]\d*)$/;e.exports=function(e,n){var o=typeof e;return!!(n=null==n?9007199254740991:n)&&("number"==o||"symbol"!=o&&t.test(e))&&e>-1&&e%1==0&&e<n}},8586:(e,t,n)=>{var o=n(6449),r=n(4394),l=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,a=/^\w*$/;e.exports=function(e,t){if(o(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!r(e))||a.test(e)||!l.test(e)||null!=t&&e in Object(t)}},4218:e=>{e.exports=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}},7296:(e,t,n)=>{var o,r=n(5481),l=(o=/[^.]+$/.exec(r&&r.keys&&r.keys.IE_PROTO||""))?"Symbol(src)_1."+o:"";e.exports=function(e){return!!l&&l in e}},3702:e=>{e.exports=function(){this.__data__=[],this.size=0}},80:(e,t,n)=>{var o=n(6025),r=Array.prototype.splice;e.exports=function(e){var t=this.__data__,n=o(t,e);return!(n<0||(n==t.length-1?t.pop():r.call(t,n,1),--this.size,0))}},4739:(e,t,n)=>{var o=n(6025);e.exports=function(e){var t=this.__data__,n=o(t,e);return n<0?void 0:t[n][1]}},8655:(e,t,n)=>{var o=n(6025);e.exports=function(e){return o(this.__data__,e)>-1}},1175:(e,t,n)=>{var o=n(6025);e.exports=function(e,t){var n=this.__data__,r=o(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}},3040:(e,t,n)=>{var o=n(1549),r=n(79),l=n(8223);e.exports=function(){this.size=0,this.__data__={hash:new o,map:new(l||r),string:new o}}},7670:(e,t,n)=>{var o=n(2651);e.exports=function(e){var t=o(this,e).delete(e);return this.size-=t?1:0,t}},289:(e,t,n)=>{var o=n(2651);e.exports=function(e){return o(this,e).get(e)}},4509:(e,t,n)=>{var o=n(2651);e.exports=function(e){return o(this,e).has(e)}},2949:(e,t,n)=>{var o=n(2651);e.exports=function(e,t){var n=o(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}},2224:(e,t,n)=>{var o=n(104);e.exports=function(e){var t=o(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}},1042:(e,t,n)=>{var o=n(6110)(Object,"create");e.exports=o},9350:e=>{var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},9325:(e,t,n)=>{var o=n(4840),r="object"==typeof self&&self&&self.Object===Object&&self,l=o||r||Function("return this")();e.exports=l},1802:(e,t,n)=>{var o=n(2224),r=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,l=/\\(\\)?/g,a=o((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(r,(function(e,n,o,r){t.push(o?r.replace(l,"$1"):n||e)})),t}));e.exports=a},7797:(e,t,n)=>{var o=n(4394);e.exports=function(e){if("string"==typeof e||o(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}},7473:e=>{var t=Function.prototype.toString;e.exports=function(e){if(null!=e){try{return t.call(e)}catch(e){}try{return e+""}catch(e){}}return""}},5288:e=>{e.exports=function(e,t){return e===t||e!=e&&t!=t}},1448:(e,t,n)=>{var o=n(426),r=n(9326);e.exports=function(e,t){return null!=e&&r(e,t,o)}},2428:(e,t,n)=>{var o=n(7534),r=n(346),l=Object.prototype,a=l.hasOwnProperty,i=l.propertyIsEnumerable,s=o(function(){return arguments}())?o:function(e){return r(e)&&a.call(e,"callee")&&!i.call(e,"callee")};e.exports=s},6449:e=>{var t=Array.isArray;e.exports=t},1882:(e,t,n)=>{var o=n(2552),r=n(3805);e.exports=function(e){if(!r(e))return!1;var t=o(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}},294:e=>{e.exports=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}},3805:e=>{e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},346:e=>{e.exports=function(e){return null!=e&&"object"==typeof e}},4394:(e,t,n)=>{var o=n(2552),r=n(346);e.exports=function(e){return"symbol"==typeof e||r(e)&&"[object Symbol]"==o(e)}},104:(e,t,n)=>{var o=n(3661);function r(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var o=arguments,r=t?t.apply(this,o):o[0],l=n.cache;if(l.has(r))return l.get(r);var a=e.apply(this,o);return n.cache=l.set(r,a)||l,a};return n.cache=new(r.Cache||o),n}r.Cache=o,e.exports=r},3222:(e,t,n)=>{var o=n(7556);e.exports=function(e){return null==e?"":o(e)}},6942:(e,t)=>{var n;!function(){"use strict";var o={}.hasOwnProperty;function r(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=a(e,l(n)))}return e}function l(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)o.call(e,n)&&e[n]&&(t=a(t,n));return t}function a(e,t){return t?e?e+" "+t:e+t:e}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var l=n[e]={exports:{}};return t[e](l,l.exports,o),l.exports}o.m=t,e=[],o.O=(t,n,r,l)=>{if(!n){var a=1/0;for(u=0;u<e.length;u++){for(var[n,r,l]=e[u],i=!0,s=0;s<n.length;s++)(!1&l||a>=l)&&Object.keys(o.O).every((e=>o.O[e](n[s])))?n.splice(s--,1):(i=!1,l<a&&(a=l));if(i){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[n,r,l]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={4351:0,4503:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var r,l,[a,i,s]=n,c=0;if(a.some((t=>0!==e[t]))){for(r in i)o.o(i,r)&&(o.m[r]=i[r]);if(s)var u=s(o)}for(t&&t(n);c<a.length;c++)l=a[c],o.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return o.O(u)},n=globalThis.webpackChunkgutenify=globalThis.webpackChunkgutenify||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=o.O(void 0,[4503],(()=>o(8959)));r=o.O(r)})();