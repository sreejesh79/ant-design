(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["skXTQpJh"],{skXTQpJh:function(e,n,t){"use strict";t.d(n,"__esModule",{value:!0}),t.d(n,"default",{enumerable:!0,get:function(){return p;}});var i=t("d3__vuQ2"),a=t("hSu6qSb4"),l=t("zFz0_bw4"),o=a._(t("kPNEDoWH")),r=t("YDQITbsE"),s=t("a7LMeidl"),d=i._(t("a5YMJfsl")),f=i._(t("ar02nLrp")),c=i._(t("6KgxTHdp"));let u=(0,s.createStyles)(({token:e,css:n})=>{let{colorSplit:t,iconCls:i,fontSizeIcon:a}=e;return{prevNextNav:n`
      width: calc(100% - 234px);
      margin-inline-end: 170px;
      margin-inline-start: 64px;
      overflow: hidden;
      font-size: ${e.fontSize}px;
      border-top: 1px solid ${t};
      display: flex;
    `,pageNav:n`
      flex: 1;
      height: 72px;
      line-height: 72px;
      text-decoration: none;

      ${i} {
        color: #999;
        font-size: ${a}px;
        transition: all ${e.motionDurationSlow};
      }

      .chinese {
        margin-inline-start: ${e.marginXXS}px;
      }
    `,prevNav:n`
      text-align: start;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .footer-nav-icon-after {
        display: none;
      }

      .footer-nav-icon-before {
        position: relative;
        line-height: 0;
        vertical-align: middle;
        transition: inset-inline-end ${e.motionDurationSlow};
        margin-inline-end: 1em;
        inset-inline-end: 0;
      }

      &:hover .footer-nav-icon-before {
        inset-inline-end: 0.2em;
      }
    `,nextNav:n`
      text-align: end;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .footer-nav-icon-before {
        display: none;
      }

      .footer-nav-icon-after {
        position: relative;
        margin-bottom: 1px;
        line-height: 0;
        vertical-align: middle;
        transition: inset-inline-start ${e.motionDurationSlow};
        margin-inline-start: 1em;
        inset-inline-start: 0;
      }

      &:hover .footer-nav-icon-after {
        inset-inline-start: 0.2em;
      }
    `};}),m=e=>Array.isArray(e)?e.reduce((e,n)=>n?"children"in n&&n.children?e.concat(m(n.children)??[]):e.concat(n):e,[]):null;var p=({rtl:e})=>{let{styles:n}=u(),t={className:"footer-nav-icon-before"},i={className:"footer-nav-icon-after"},a=e?(0,l.jsx)(r.RightOutlined,{...t}):(0,l.jsx)(r.LeftOutlined,{...t}),s=e?(0,l.jsx)(r.LeftOutlined,{...i}):(0,l.jsx)(r.RightOutlined,{...i}),[p,v]=(0,f.default)({before:a,after:s}),{isMobile:h}=(0,o.useContext)(c.default),[x,g]=(0,o.useMemo)(()=>{let e=m(p);if(!e)return[null,null];let n=-1;return e.forEach((e,t)=>{e&&e.key===v&&(n=t);}),[e[n-1],e[n+1]];},[p,v]);return h?null:(0,l.jsxs)("section",{className:n.prevNextNav,children:[x&&o.default.cloneElement(x.label,{className:(0,d.default)(n.pageNav,n.prevNav,x.className)}),g&&o.default.cloneElement(g.label,{className:(0,d.default)(n.pageNav,n.nextNav,g.className)})]});};}}]);
//# sourceMappingURL=skXTQpJh-async.52fdde91.js.map