(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["HZREUpcr"],{HZREUpcr:function(e,l,s){"use strict";s.d(l,"__esModule",{value:!0}),s.d(l,"default",{enumerable:!0,get:function(){return t;}});var n=s("zFz0_bw4");s("HK7Z4Mhy");var d=s("YDQITbsE"),r=s("HL79G8C-");let a="https://ant.design",i=e=>{var l,s,a;switch(e.status){case"expired":return(0,n.jsxs)("div",{children:[(0,n.jsx)(d.CloseCircleFilled,{style:{color:"red"}})," ",null===(l=e.locale)||void 0===l?void 0:l.expired,(0,n.jsx)("p",{children:(0,n.jsxs)(r.Button,{type:"link",onClick:e.onRefresh,children:[(0,n.jsx)(d.ReloadOutlined,{})," ",null===(s=e.locale)||void 0===s?void 0:s.refresh]})})]});case"loading":return(0,n.jsxs)(r.Space,{direction:"vertical",children:[(0,n.jsx)(r.Spin,{}),(0,n.jsx)("p",{children:"Loading..."})]});case"scanned":return(0,n.jsxs)("div",{children:[(0,n.jsx)(d.CheckCircleFilled,{style:{color:"green"}})," ",null===(a=e.locale)||void 0===a?void 0:a.scanned]});default:return null;}};var t=()=>(0,n.jsxs)(r.Flex,{gap:"middle",wrap:!0,children:[(0,n.jsx)(r.QRCode,{value:a,status:"loading",statusRender:i}),(0,n.jsx)(r.QRCode,{value:a,status:"expired",onRefresh:()=>console.log("refresh"),statusRender:i}),(0,n.jsx)(r.QRCode,{value:a,status:"scanned",statusRender:i})]});}}]);
//# sourceMappingURL=HZREUpcr-async.5fe17cd3.js.map