(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["F2y05qc6"],{F2y05qc6:function(e,d,t){"use strict";t.d(d,"__esModule",{value:!0}),t.d(d,"default",{enumerable:!0,get:function(){return h;}});var a=t("d3__vuQ2"),l=t("zFz0_bw4");t("f9WixW8r");var n=a._(t("kPNEDoWH")),i=t("HL79G8C-");let r=[{title:"ID",dataIndex:"id",width:100,fixed:"left"},{title:"FistName",dataIndex:"firstName",width:120,fixed:"left"},{title:"LastName",dataIndex:"lastName",width:120,fixed:"left"},{title:"Group",width:120,render:(e,d)=>`Group ${Math.floor(d.id/4)}`,onCell:e=>({rowSpan:e.id%4==0?4:0})},{title:"Age",dataIndex:"age",width:100,onCell:e=>({colSpan:e.id%4==0?2:1})},{title:"Address 1",dataIndex:"address1",onCell:e=>({colSpan:e.id%4==0?0:1})},{title:"Address 2",dataIndex:"address2"},{title:"Address 3",dataIndex:"address3"},{title:"Action",width:150,fixed:"right",render:()=>(0,l.jsxs)(i.Space,{children:[(0,l.jsx)(i.Typography.Link,{children:"Action1"}),(0,l.jsx)(i.Typography.Link,{children:"Action2"})]})}],s=[{title:"ID",dataIndex:"id",width:100},{title:"FistName",dataIndex:"firstName",width:120},{title:"LastName",dataIndex:"lastName",width:120}],o=e=>{let d=Array(e).fill(null).map((e,d)=>({id:d,firstName:`First_${d.toString(16)}`,lastName:`Last_${d.toString(16)}`,age:25+d%10,address1:`New York No. ${d} Lake Park`,address2:`London No. ${d} Lake Park`,address3:`Sydney No. ${d} Lake Park`}));return d;};var h=()=>{let[e,d]=n.default.useState(!0),[t,a]=n.default.useState(!0),[h,c]=n.default.useState(!1),[u,x]=n.default.useState(!1),[f,p]=n.default.useState(1e4),k=n.default.useRef(null),m=n.default.useMemo(()=>o(f),[f]),C=n.default.useMemo(()=>e?h?r.map(e=>({...e,onCell:void 0})):r:s,[h,e]),g=n.default.useMemo(()=>{if(h)return{columnWidth:48,expandedRowRender:e=>(0,l.jsxs)("p",{style:{margin:0},children:["\u{1F389} Expanded ",e.address1]}),rowExpandable:e=>e.id%2==0};},[h]);return(0,l.jsx)("div",{style:{padding:64},children:(0,l.jsxs)(i.Space,{direction:"vertical",style:{width:"100%"},children:[(0,l.jsxs)(i.Space,{children:[(0,l.jsx)(i.Switch,{checked:t,onChange:()=>a(!t),checkedChildren:"Bordered",unCheckedChildren:"Bordered"}),(0,l.jsx)(i.Switch,{checked:e,onChange:()=>d(!e),checkedChildren:"Fixed",unCheckedChildren:"Fixed"}),(0,l.jsx)(i.Switch,{checked:h,onChange:()=>c(!h),checkedChildren:"Expandable",unCheckedChildren:"Expandable"}),(0,l.jsx)(i.Switch,{checked:u,onChange:()=>x(!u),checkedChildren:"Empty",unCheckedChildren:"Empty"}),(0,l.jsx)(i.Segmented,{value:f,onChange:e=>p(e),options:[{label:"None",value:0},{label:"Less",value:4},{label:"Lot",value:1e4}]}),m.length>=999&&(0,l.jsx)(i.Button,{onClick:()=>{var e;null===(e=k.current)||void 0===e||e.scrollTo({index:999});},children:"Scroll To index 999"})]}),(0,l.jsx)(i.Table,{bordered:t,virtual:!0,columns:C,scroll:{x:2e3,y:400},rowKey:"id",dataSource:u?[]:m,pagination:!1,ref:k,rowSelection:h?void 0:{type:"radio",columnWidth:48},expandable:g})]})});};}}]);
//# sourceMappingURL=F2y05qc6-async.7d6f1fff.js.map