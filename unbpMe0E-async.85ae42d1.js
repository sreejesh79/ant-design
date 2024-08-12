(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["unbpMe0E"],{gEsZWbiz:function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return r;}});var i=l("zFz0_bw4"),n=l("HL79G8C-");let a=({num:e=3})=>(0,i.jsx)("li",{children:Array.from({length:e}).map((e,t)=>(0,i.jsx)(n.Skeleton.Avatar,{size:"small",active:!0,style:{marginInlineStart:0===t?0:-8}},t))});var r=e=>{let{item:{username:t,url:l}={},loading:r}=e;return r?(0,i.jsx)(a,{}):(null==t?void 0:t.includes("github-actions"))?null:(0,i.jsx)(n.Tooltip,{title:t,children:(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:`https://github.com/${t}`,target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)(n.Avatar,{size:"small",src:l,alt:t,children:t})})})});};},unbpMe0E:function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return f;}});var i=l("d3__vuQ2"),n=l("zFz0_bw4"),a=l("kPNEDoWH"),r=i._(l("wa5JVHmy")),s=l("a7LMeidl"),o=i._(l("a5YMJfsl")),u=l("NBCCMyRW"),d=i._(l("6KgxTHdp")),c=i._(l("gEsZWbiz"));let m=(0,s.createStyles)(({token:e,css:t})=>({contributorsList:t`
    margin-top: 120px !important;
  `,listMobile:t`
    margin: 1em 0 !important;
  `,title:t`
    font-size: ${e.fontSizeSM}px;
    opacity: 0.5;
    margin-bottom: ${e.marginXS}px;
  `,list:t`
    display: flex;
    flex-wrap: wrap;
    clear: both;
    li {
      height: 24px;
      transition: all ${e.motionDurationSlow};
      margin-inline-end: -${e.marginXS}px;
    }
    &:hover {
      li {
        margin-inline-end: 0;
      }
    }
  `}));var f=({filename:e})=>{let{formatMessage:t}=(0,u.useIntl)(),{styles:l}=m(),{isMobile:i}=(0,a.useContext)(d.default);return e?(0,n.jsxs)("div",{className:(0,o.default)(l.contributorsList,{[l.listMobile]:i}),children:[(0,n.jsx)("div",{className:l.title,children:t({id:"app.content.contributors"})}),(0,n.jsx)(r.default,{cache:!0,repo:"ant-design",owner:"ant-design",fileName:e,className:l.list,renderItem:(e,t)=>(0,n.jsx)(c.default,{item:e,loading:t},null==e?void 0:e.url)})]}):null;};}}]);
//# sourceMappingURL=unbpMe0E-async.85ae42d1.js.map