(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["F_RiqUFg"],{F_RiqUFg:function(e,l,n){"use strict";n.d(l,"__esModule",{value:!0}),n.d(l,"default",{enumerable:!0,get:function(){return h;}});var t=n("d3__vuQ2"),s=n("zFz0_bw4");n("R-9Ap2LR");var o=t._(n("kPNEDoWH")),d=n("YDQITbsE"),r=n("HL79G8C-");let a=[],i=(e,l="0",n=a)=>{let t=[];for(let e=0;e<3;e++){let o=`${l}-${e}`;n.push({title:o,key:o,icon:(0,s.jsx)(d.CarryOutOutlined,{})}),e<2&&t.push(o);}if(e<0)return n;let o=e-1;t.forEach((e,l)=>(n[l].children=[],i(o,e,n[l].children)));};i(1);var h=()=>{let[e,l]=o.default.useState(a),[n,t]=o.default.useState(!0),[d,i]=o.default.useState(!0),[h,c]=o.default.useState(!0),[u,f]=o.default.useState(["0-0","0-0-0","0-0-0-0"]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{style:{marginBottom:16},children:["showLine: ",(0,s.jsx)(r.Switch,{checked:n,onChange:e=>{e?h?t({showLeafIcon:!0}):t(!0):t(!1);}}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"showIcon: ",(0,s.jsx)(r.Switch,{checked:d,onChange:()=>i(d)}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"showLeafIcon: ",(0,s.jsx)(r.Switch,{checked:h,onChange:e=>{c(e),t({showLeafIcon:e});}})]}),(0,s.jsx)(r.Tree,{showLine:n,showIcon:d,className:"draggable-tree",defaultExpandedKeys:u,draggable:!0,blockNode:!0,onDragEnter:e=>{console.log(e),f(e.expandedKeys);},onDrop:n=>{let t;console.log(n);let s=n.node.key,o=n.dragNode.key,d=n.node.pos.split("-"),r=n.dropPosition-Number(d[d.length-1]),a=(e,l,n)=>{for(let t=0;t<e.length;t++){if(e[t].key===l)return n(e[t],t,e);e[t].children&&a(e[t].children,l,n);}},i=[...e];if(a(i,o,(e,l,n)=>{n.splice(l,1),t=e;}),n.dropToGap){if((n.node.props.children||[]).length>0&&n.node.props.expanded&&1===r)a(i,s,e=>{e.children=e.children||[],e.children.unshift(t);});else{let e,l;a(i,s,(n,t,s)=>{e=s,l=t;}),-1===r?e.splice(l,0,t):e.splice(l+1,0,t);}}else a(i,s,e=>{e.children=e.children||[],e.children.push(t);});l(i);},treeData:e})]});};}}]);
//# sourceMappingURL=F_RiqUFg-async.dcc39116.js.map