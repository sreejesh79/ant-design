(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["9h-5qLc0"],{"9h-5qLc0":function(e,l,t){"use strict";t.d(l,"__esModule",{value:!0}),t.d(l,"default",{enumerable:!0,get:function(){return i;}});var n=t("zFz0_bw4");t("9M4YWCY7");var a=t("kPNEDoWH"),s=t("YDQITbsE"),o=t("HL79G8C-"),r=t("AOkJY8Mj"),i=()=>{let{token:e}=o.theme.useToken(),[l,t]=(0,a.useState)(["Tag 1","Tag 2","Tag 3"]),[i,u]=(0,a.useState)(!1),[d,c]=(0,a.useState)(""),h=(0,a.useRef)(null);(0,a.useEffect)(()=>{if(i){var e;null===(e=h.current)||void 0===e||e.focus();}},[i]);let p=e=>{let n=l.filter(l=>l!==e);console.log(n),t(n);},f=()=>{d&&-1===l.indexOf(d)&&t([...l,d]),u(!1),c("");},g=l.map(e=>(0,n.jsx)("span",{style:{display:"inline-block"},children:(0,n.jsx)(o.Tag,{closable:!0,onClose:l=>{l.preventDefault(),p(e);},children:e})},e)),y={background:e.colorBgContainer,borderStyle:"dashed"};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{style:{marginBottom:16},children:(0,n.jsx)(r.TweenOneGroup,{appear:!1,enter:{scale:.8,opacity:0,type:"from",duration:100},leave:{opacity:0,width:0,scale:0,duration:200},onEnd:e=>{("appear"===e.type||"enter"===e.type)&&(e.target.style="display: inline-block");},children:g})}),i?(0,n.jsx)(o.Input,{ref:h,type:"text",size:"small",style:{width:78},value:d,onChange:e=>{c(e.target.value);},onBlur:f,onPressEnter:f}):(0,n.jsxs)(o.Tag,{onClick:()=>{u(!0);},style:y,children:[(0,n.jsx)(s.PlusOutlined,{})," New Tag"]})]});};}}]);
//# sourceMappingURL=9h-5qLc0-async.29f40396.js.map