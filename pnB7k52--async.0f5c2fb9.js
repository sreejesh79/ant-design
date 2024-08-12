(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["pnB7k52-"],{"-3gVmFNf":function(e,t,o){"use strict";o.d(t,"__esModule",{value:!0}),o.d(t,"default",{enumerable:!0,get:function(){return n.default;}});var n=o("d3__vuQ2")._(o("y4E3Kn-E"));},"27Kzg6ic":function(e,t,o){"use strict";o.d(t,"__esModule",{value:!0}),o.d(t,"default",{enumerable:!0,get:function(){return l;}});var n=o("d3__vuQ2"),r=o("zFz0_bw4"),a=o("a7LMeidl"),s=n._(o("OXkcHpsi")),i=n._(o("876MW3iX"));let d=(0,a.createStyles)(({token:e,css:t})=>{let{colorBgContainer:o}=e;return{editor:t`
      // override dumi editor styles
      .dumi-default-source-code-editor {
        .dumi-default-source-code {
          background: ${o};
          &-scroll-container {
            scrollbar-width: thin;
            scrollbar-color: unset;
          }
        }
        .dumi-default-source-code > pre,
        .dumi-default-source-code-scroll-content > pre,
        .dumi-default-source-code-editor-textarea {
          padding: ${e.paddingSM}px ${e.padding}px;
        }

        .dumi-default-source-code > pre,
        .dumi-default-source-code-scroll-content > pre {
          font-size: ${e.fontSize}px;
          line-height: 2;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
        }

        // disable dumi default copy button
        .dumi-default-source-code-copy {
          display: none;
        }

        &::after {
          border-radius: 0 !important;
        }

        &:hover:not(:focus-within) {
          &::after {
            box-shadow: 0 0 0 1px ${e.colorPrimaryBorderHover} inset;
          }
        }
      }
    `};});var l=e=>{let{styles:t}=d();return(0,r.jsxs)("div",{className:t.editor,children:[(0,r.jsx)(s.default,{lang:e.lang,initialValue:e.initialValue,onChange:e.onChange}),(0,r.jsx)(i.default,{error:e.error})]});};},"46WS8gpG":function(e,t,o){"use strict";o.d(t,"__esModule",{value:!0}),o.d(t,"default",{enumerable:!0,get:function(){return l;}});var n=o("d3__vuQ2"),r=o("zFz0_bw4"),a=n._(o("kPNEDoWH")),s=n._(o("YDQITbsE"));let i=()=>(0,r.jsxs)("svg",{viewBox:"0 0 14 14",fill:"currentColor",children:[(0,r.jsx)("title",{children:"Riddle logo"}),(0,r.jsx)("path",{d:"M13.8875145,13.1234844 C13.8687399,13.0691875 13.8499977,13.0329687 13.8312555,12.9786562 L11.3687445,8.83296875 C12.9187468,8.05754687 13.9640694,6.49009375 13.9640694,4.68728125 C13.9624994,2.09095312 11.7968694,0 9.10938728,0 L3.86404855,0 C3.04217572,0 2.37028902,0.648703125 2.37028902,1.44223437 L2.37028902,1.82090625 L0.746871676,1.82090625 C0.33593526,1.82090625 0,2.14526562 0,2.54203125 L0,13.4478437 C0,13.7540937 0.242191908,13.9879375 0.559368786,13.9879375 C0.615627746,13.9879375 0.67187052,13.9698281 0.72812948,13.9517187 L13.440615,13.9517187 C13.7578081,13.9517187 14,13.7178906 14,13.4116406 C14,13.321125 13.9624994,13.2125 13.8875145,13.1234844 Z M3.49061272,8.0394375 L3.49061272,2.9206875 L8.71719306,2.9206875 C9.74375723,2.9206875 10.5843723,3.73232812 10.5843723,4.7235 C10.5843723,5.71465625 9.76249942,6.5081875 8.71719306,6.5081875 L6.53280462,6.5081875 L6.53280462,6.52629688 C6.45781965,6.52629688 6.3828185,6.5625 6.3093711,6.59870313 C6.04843699,6.74354688 5.95469364,7.08598438 6.10467977,7.33792188 L8.3078104,11.0325469 L3.4906289,11.0325469 L3.4906289,8.0394375 L3.49061272,8.0394375 Z M1.1203237,12.8881406 L1.1203237,2.9206875 L2.3703052,2.9206875 L2.3703052,11.5545313 C2.3703052,11.8607813 2.61249711,12.0946094 2.92969017,12.0946094 L2.94843237,12.0946094 C2.98593295,12.1127188 3.04219191,12.1127188 3.09843468,12.1127188 L9.16563006,12.1127188 C9.48280694,12.1127188 9.72499884,11.878875 9.72499884,11.572625 L9.72499884,11.5364219 C9.76249942,11.3915938 9.74375723,11.2482813 9.66875607,11.1215469 L7.5593526,7.58835938 L8.6984185,7.58835938 C10.3406104,7.58835938 11.6843514,6.29095313 11.6843514,4.703875 C11.6843514,3.1168125 10.3406104,1.81939063 8.6984185,1.81939063 L3.4906289,1.81939063 L3.4906289,1.44073437 C3.4906289,1.24310937 3.65937341,1.08017187 3.86406474,1.08017187 L9.09061272,1.08017187 C11.143741,1.08017187 12.8234173,2.7019375 12.8234173,4.68578125 C12.8234173,6.21853125 11.8343538,7.5340625 10.4343538,8.05603125 C10.378111,8.07414063 10.3406104,8.09223438 10.2843514,8.11034375 C10.0234173,8.25517188 9.92967399,8.597625 10.0796763,8.8495625 L12.5062405,12.8881563 L1.12030751,12.8881563 L1.1203237,12.8881406 Z"})]}),d=a.default.forwardRef((e,t)=>(0,r.jsx)(s.default,{component:i,ref:t,...e}));var l=d;},"876MW3iX":function(e,t,o){"use strict";o.d(t,"__esModule",{value:!0}),o.d(t,"default",{enumerable:!0,get:function(){return a;}});var n=o("zFz0_bw4"),r=o("HL79G8C-"),a=({error:e})=>{let{token:t}=r.theme.useToken();return e?(0,n.jsx)(r.Alert,{banner:!0,type:"error",message:e.toString(),style:{color:t.colorError}}):null;};},EClJ8AOx:function(e,t,o){"use strict";o.d(t,"__esModule",{value:!0}),o.d(t,"default",{enumerable:!0,get:function(){return l;}});var n=o("d3__vuQ2"),r=o("zFz0_bw4"),a=n._(o("kPNEDoWH")),s=n._(o("YDQITbsE"));let i=()=>(0,r.jsxs)("svg",{viewBox:"0 0 15 15",fill:"currentColor",children:[(0,r.jsx)("title",{children:"codepen icon"}),(0,r.jsx)("path",{d:"M14.777304,4.75062256 L7.77734505,0.0839936563 C7.60939924,-0.0279665065 7.39060662,-0.0279665065 7.22266081,0.0839936563 L0.222701813,4.75062256 C0.0836082937,4.84334851 5.66973453e-05,4.99945222 4.6875e-05,5.16662013 L4.6875e-05,9.83324903 C4.6875e-05,10.0004355 0.0836088906,10.1565596 0.222701812,10.2492466 L7.22266081,14.9158755 C7.30662908,14.9718752 7.403316,14.999875 7.50000292,14.999875 C7.59668984,14.999875 7.69337678,14.9718752 7.77734505,14.9158755 L14.777304,10.2492466 C14.9163976,10.1565206 14.9999492,10.0004169 14.999959,9.83324903 L14.999959,5.16662013 C14.9999492,4.99945222 14.9163976,4.84334851 14.777304,4.75062256 Z M7.50000292,9.23237755 L4.90139316,7.4999502 L7.50000292,5.76755409 L10.0986127,7.4999502 L7.50000292,9.23237755 Z M8,4.89905919 L8,1.43423573 L13.598561,5.16665138 L10.9999824,6.89904747 L8,4.89905919 Z M7.00000586,4.89905919 L4.00002344,6.89904747 L1.40141366,5.16665138 L7.00000586,1.43423573 L7.00000586,4.89905919 Z M3.09865372,7.4999502 L1.00004102,8.89903575 L1.00004102,6.10089589 L3.09865372,7.4999502 Z M4.00002344,8.10085292 L7.00000586,10.1008412 L7.00000586,13.5656334 L1.40141366,9.83328028 L4.00002344,8.10085292 Z M8,10.1008412 L10.9999824,8.10085292 L13.5985922,9.83328028 L8,13.5656647 L8,10.1008412 L8,10.1008412 Z M11.9013521,7.4999502 L13.9999648,6.10089589 L13.9999648,8.899067 L11.9013521,7.4999502 Z"})]}),d=a.default.forwardRef((e,t)=>(0,r.jsx)(s.default,{component:i,ref:t,...e}));var l=d;},JLYjvLZg:function(e,t,o){"use strict";o.d(t,"__esModule",{value:!0}),o.d(t,"default",{enumerable:!0,get:function(){return g;}});var n=o("d3__vuQ2"),r=o("hSu6qSb4"),a=o("zFz0_bw4"),s=r._(o("kPNEDoWH")),i=o("HL79G8C-"),d=o("a7LMeidl"),l=n._(o("_ZOf65mL")),c=n._(o("GxG7q5to")),u=n._(o("wcbsKW91")),p=n._(o("I2XygQGG")),m=n._(o("27Kzg6ic"));let x=(0,d.createStyles)(({token:e,css:t})=>{let{colorIcon:o,antCls:n}=e;return{code:t`
      position: relative;
      margin-top: -${e.margin}px;
    `,copyButton:t`
      color: ${o};
      position: absolute;
      z-index: 2;
      top: 16px;
      inset-inline-end: ${e.padding}px;
      width: 32px;
      text-align: center;
      padding: 0;
    `,copyIcon:t`
      ${n}-typography-copy {
        position: relative;
        margin-inline-start: 0;

        // expand clickable area
        &::before {
          content: '';
          display: block;
          position: absolute;
          top: -5px;
          inset-inline-start: -9px;
          bottom: -5px;
          inset-inline-end: -9px;
        }
      }
      ${n}-typography-copy:not(${n}-typography-copy-success) {
        color: ${o};

        &:hover {
          color: ${o};
        }
      }
    `};}),f={tsx:"TypeScript",jsx:"JavaScript",style:"CSS"};var g=({sourceCode:e="",jsxCode:t="",styleCode:o="",entryName:n,onSourceChange:r,error:d})=>{let g={};e&&(g.tsx=""),t&&(g.jsx=""),o&&(g.style="");let[h,b]=s.default.useState(g),{codeType:j,setCodeType:v}=(0,s.useContext)(p.default),y={tsx:null==e?void 0:e.trim(),jsx:null==t?void 0:t.trim(),style:null==o?void 0:o.trim()};(0,s.useEffect)(()=>{let n={tsx:u.default.highlight(e,u.default.languages.javascript,"jsx"),jsx:u.default.highlight(t,u.default.languages.javascript,"jsx"),style:u.default.highlight(o,u.default.languages.css,"css")};Object.keys(n).forEach(e=>{n[e]||delete n[e];}),b(n);},[t,e,o]);let _=Object.keys(h),{styles:L}=x(),$=(0,s.useMemo)(()=>_.map(e=>{var t;return{label:f[e],key:e,children:(0,a.jsxs)("div",{className:L.code,children:["tsx"===e?(0,a.jsx)(m.default,{error:d,lang:e,initialValue:y[e],onChange:e=>{null==r||r({[n]:e});}}):(t=["pre",{lang:e,highlighted:h[e]}],(0,l.default)(t,[[e=>c.default.isElement(e)&&"pre"===c.default.getTagName(e),(e,t)=>{let o=c.default.getAttributes(e);return(0,a.jsx)("pre",{className:`language-${o.lang}`,children:(0,a.jsx)("code",{dangerouslySetInnerHTML:{__html:o.highlighted}})},t);}]])),(0,a.jsx)(i.Button,{type:"text",className:L.copyButton,children:(0,a.jsx)(i.Typography.Text,{className:L.copyIcon,copyable:{text:y[e]}})})]})};}),[JSON.stringify(h),L.code,L.copyButton,L.copyIcon]);return _.length?1===_.length?(0,a.jsx)(m.default,{error:d,lang:_[0],initialValue:y[_[0]],onChange:e=>{null==r||r({[n]:e});}}):(0,a.jsx)(i.Tabs,{centered:!0,className:"highlight",activeKey:j,onChange:v,items:$}):null;};},KBX8PLzy:function(e,t,o){"use strict";o.d(t,"__esModule",{value:!0}),o.d(t,"default",{enumerable:!0,get:function(){return m;}});var n=o("d3__vuQ2"),r=o("hSu6qSb4"),a=o("zFz0_bw4"),s=r._(o("kPNEDoWH")),i=o("YDQITbsE"),d=o("HL79G8C-"),l=o("a7LMeidl"),c=n._(o("gcoyqVzy")),u=o("pD2My3Tk");let p=(0,l.createStyles)(({token:e,css:t})=>({wrapper:t`
    position: relative;
    border: 1px solid ${e.colorBorderSecondary};
    border-radius: ${e.borderRadius}px;
    padding: ${e.paddingMD}px ${e.paddingLG}px ${2*e.paddingMD}px;
    margin-bottom: ${e.marginLG}px;
  `,title:t`
    font-size: ${e.fontSizeLG}px;
    font-weight: ${e.fontWeightStrong};
    color: ${e.colorTextHeading};

    &:hover {
      color: ${e.colorTextHeading};
    }
  `,description:t`
    margin-top: ${e.margin}px;
  `,demo:t`
    margin-top: ${e.marginLG}px;
    display: flex;
    justify-content: center;
  `,copy:t`
    position: absolute;
    inset-inline-end: ${e.paddingMD}px;
    inset-block-start: ${e.paddingMD}px;
    cursor: pointer;
  `,copyTip:t`
    color: ${e.colorTextTertiary};
  `,copiedTip:t`
    .anticon {
      color: ${e.colorSuccess};
    }
  `,tip:t`
    color: ${e.colorTextTertiary};
    margin-top: ${2*e.marginMD}px;
  `}));var m=({children:e,title:t,description:o,tip:n,asset:r})=>{let{styles:l}=p(),m=(0,s.useRef)(null),[x,f]=s.default.useState(!1),{message:g}=d.App.useApp(),h=async()=>{try{if(m.current){let e=await (0,u.nodeToGroup)(m.current);(0,c.default)(JSON.stringify(e.toSketchJSON())),f(!0),setTimeout(()=>{f(!1);},5e3);}}catch{g.error("\u590D\u5236\u5931\u8D25");}};return(0,a.jsxs)("div",{className:l.wrapper,id:r.id,children:[(0,a.jsx)("a",{className:l.title,href:`#${r.id}`,children:t}),o&&(0,a.jsx)("div",{className:l.description,dangerouslySetInnerHTML:{__html:o}}),(0,a.jsx)("div",{className:l.copy,children:x?(0,a.jsxs)("div",{className:l.copiedTip,children:[(0,a.jsx)(i.CheckOutlined,{}),(0,a.jsx)("span",{style:{marginInlineStart:8},children:"\u5DF2\u590D\u5236\uFF0C\u4F7F\u7528 Kitchen \u63D2\u4EF6\u5373\u53EF\u7C98\u8D34"})]}):(0,a.jsxs)("button",{type:"button",onClick:h,className:l.copyTip,children:[(0,a.jsx)(i.SketchOutlined,{}),(0,a.jsx)("span",{style:{marginInlineStart:8},children:"\u590D\u5236 Sketch JSON"})]})}),(0,a.jsx)("div",{className:l.demo,ref:m,children:e}),(0,a.jsx)("div",{className:l.tip,children:n})]});};},"M-yLnHuz":function(e,t,o){"use strict";o.d(t,"__esModule",{value:!0}),o.d(t,"default",{enumerable:!0,get:function(){return l;}});var n=o("d3__vuQ2"),r=o("zFz0_bw4"),a=n._(o("kPNEDoWH")),s=n._(o("YDQITbsE"));let i=({color:e="currentColor"})=>(0,r.jsxs)("svg",{viewBox:"0 0 1024 1024",width:"1em",height:"1em",fill:e,children:[(0,r.jsx)("title",{children:"External Link Icon"}),(0,r.jsx)("path",{d:"M853.333 469.333A42.667 42.667 0 0 0 810.667 512v256A42.667 42.667 0 0 1 768 810.667H256A42.667 42.667 0 0 1 213.333 768V256A42.667 42.667 0 0 1 256 213.333h256A42.667 42.667 0 0 0 512 128H256a128 128 0 0 0-128 128v512a128 128 0 0 0 128 128h512a128 128 0 0 0 128-128V512a42.667 42.667 0 0 0-42.667-42.667z"}),(0,r.jsx)("path",{d:"M682.667 213.333h67.413L481.707 481.28a42.667 42.667 0 0 0 0 60.587 42.667 42.667 0 0 0 60.586 0L810.667 273.92v67.413A42.667 42.667 0 0 0 853.333 384 42.667 42.667 0 0 0 896 341.333V170.667A42.667 42.667 0 0 0 853.333 128H682.667a42.667 42.667 0 0 0 0 85.333z"})]}),d=a.default.forwardRef((e,t)=>(0,r.jsx)(s.default,{component:()=>(0,r.jsx)(i,{color:e.color}),ref:t,...e}));var l=d;},_LzC4gPe:function(e,t,o){"use strict";o.d(t,"__esModule",{value:!0}),o.d(t,"default",{enumerable:!0,get:function(){return s;}});var n=o("zFz0_bw4"),r=o("a7LMeidl");let a=(0,r.createStyles)(({token:e,css:t})=>({browserMockup:t`
    position: relative;
    border-top: 2em solid rgba(230, 230, 230, 0.7);
    border-radius: ${e.borderRadiusSM}px ${e.borderRadiusSM}px 0 0;
    box-shadow: 0 0.1em 0.5em 0 rgba(0, 0, 0, 0.28);
    &::before {
      position: absolute;
      top: -1.25em;
      inset-inline-start: 1em;
      display: block;
      width: 0.5em;
      height: 0.5em;
      background-color: #f44;
      border-radius: 50%;
      box-shadow:
        0 0 0 2px #f44,
        1.5em 0 0 2px #9b3,
        3em 0 0 2px #fb5;
      content: '';
    }
    &::after {
      content: '';
      display: block;
      position: absolute;
      top: -1.6em;
      inset-inline-start: 5.5em;
      width: calc(100% - 6em);
      height: 1.2em;
      background-color: #fff;
      border-radius: ${e.borderRadiusSM}px;
    }
    & > * {
      display: block;
    }
  `}));var s=({children:e})=>{let{styles:t}=a();return(0,n.jsx)("div",{className:t.browserMockup,children:e});};},_bascEX2:function(e,t,o){"use strict";o.d(t,"__esModule",{value:!0}),o.d(t,"default",{enumerable:!0,get:function(){return l;}});var n=o("d3__vuQ2"),r=o("zFz0_bw4"),a=n._(o("kPNEDoWH")),s=n._(o("YDQITbsE"));let i=()=>(0,r.jsxs)("svg",{viewBox:"0 0 1024 1024",fill:"currentColor",children:[(0,r.jsx)("title",{children:"CodeSandbox Icon"}),(0,r.jsx)("path",{d:"M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"})]}),d=a.default.forwardRef((e,t)=>(0,r.jsx)(s.default,{component:i,ref:t,...e}));var l=d;},aLH10Q0c:function(e,t,o){"use strict";let n;o.d(t,"__esModule",{value:!0}),o.d(t,"default",{enumerable:!0,get:function(){return S;}});var r=o("d3__vuQ2"),a=o("hSu6qSb4"),s=o("zFz0_bw4"),i=a._(o("kPNEDoWH")),d=o("YDQITbsE"),l=r._(o("vLXwWy90")),c=o("HL79G8C-"),u=o("a7LMeidl"),p=r._(o("a5YMJfsl")),m=o("NBCCMyRW"),x=r._(o("dNEONWu_")),f=r._(o("ycKvNsnC")),g=r._(o("_LzC4gPe")),h=r._(o("q4gj6sI-")),b=r._(o("JLYjvLZg")),j=r._(o("hL7Piw-H")),v=r._(o("EClJ8AOx")),y=r._(o("_bascEX2")),_=r._(o("M-yLnHuz")),L=r._(o("46WS8gpG")),$=r._(o("I2XygQGG")),C=r._(o("6KgxTHdp")),M=o("hHGz283Z");let{ErrorBoundary:w}=c.Alert,k=({type:e,demo:t})=>{window.gtag&&window.gtag("event","demo",{event_category:e,event_label:t});},N=(0,u.createStyles)(({token:e})=>{let{borderRadius:t}=e;return{codeHideBtn:(0,u.css)`
      position: sticky;
      bottom: 0;
      z-index: 1;
      width: 100%;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0 0 ${t}px ${t}px;
      border-top: 1px solid ${e.colorSplit};
      color: ${e.colorTextSecondary};
      transition: all ${e.motionDurationMid} ease-in-out;
      background-color: ${e.colorBgElevated};
      cursor: pointer;
      &:hover {
        color: ${e.colorPrimary};
      }
      span {
        margin-inline-end: ${e.marginXXS}px;
      }
    `};});var S=e=>{var t;let{asset:o,expand:r,iframe:a,demoUrl:u,children:S,title:z,description:T,originDebug:R,jsx:E,style:D,compact:H,background:F,filename:O,version:B,simplify:I,clientOnly:P,pkgDependencyList:G}=e,{showDebug:Q,codeType:Z}=(0,i.useContext)($.default),{pkg:W}=(0,m.useSiteData)(),A=(0,f.default)(),{styles:J}=N(),K="index.tsx",V=o.dependencies[K].value,X=function(){let[e,t]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{n??(n=new Promise(e=>{(0,M.ping)(t=>"timeout"!==t&&"error"!==t?e(!0):e(!1));})),n.then(t);},[]),e;}(),Y=(0,i.useRef)(null),q=(0,i.useRef)(null),{node:U,error:ee,setSource:et}=(0,m.useLiveDemo)(o.id,{iframe:!!a,containerRef:q}),eo=(0,i.useRef)(null),en=(0,i.useRef)(null),er=(0,i.useRef)(null),ea=(0,i.useRef)(null),[es,ei]=(0,i.useState)(!1),{theme:ed}=(0,i.useContext)(C.default),{hash:el,pathname:ec,search:eu}=A,ep=`https://ant.design${ec}${eu}#${o.id}`,[em,ex]=(0,i.useState)(!1);(0,i.useEffect)(()=>{ex(/preview-(\d+)-ant-design/.test(window.location.hostname));},[]);let ef=e=>{ei(e=>!e),k({type:"expand",demo:e});};(0,i.useEffect)(()=>{if(o.id===el.slice(1)){var e;null===(e=eo.current)||void 0===e||e.click();}},[]),(0,i.useEffect)(()=>{ei(r);},[r]);let eg=!a&&P?(0,s.jsx)(h.default,{children:S}):S;Y.current||(Y.current=a?(0,s.jsx)(g.default,{children:(0,s.jsx)("iframe",{src:u,height:!0===a?void 0:a,title:"demo",className:"iframe-demo"})}):eg);let eh=(0,p.default)("code-box",{expand:es,"code-box-debug":R,"code-box-simplify":I}),eb=(0,p.default)("highlight-wrapper",{"highlight-wrapper-expand":es}),ej=`
    <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width">
          <meta name="theme-color" content="#000000">
        </head>
        <body>
          <div id="container" style="padding: 24px" />
          <script>const mountNode = document.getElementById('container');</script>
        </body>
      </html>
    `,ev="tsx"===Z?"tsx":"js",ey=E.split("\n").reduce((e,t)=>{let o=t.match(/import .+? from '(.+)';$/);if(null==o?void 0:o[1]){let t=o[1].split("/"),n=t[0].startsWith("@")?`${t[0]}/${t[1]}`:t[0];e[n]??(e[n]=G[n]??"latest");}return e;},{antd:W.version});ey["@ant-design/icons"]="latest","tsx"===ev&&(ey["@types/react"]="^18.0.0",ey["@types/react-dom"]="^18.0.0"),ey.react="^18.0.0",ey["react-dom"]="^18.0.0";let e_={title:`${z} - antd@${ey.antd}`,html:ej,js:`const { createRoot } = ReactDOM;
${E.replace(/import\s+(?:React,\s+)?{(\s+[^}]*\s+)}\s+from\s+'react'/,"const { $1 } = React;").replace(/import\s+{(\s+[^}]*\s+)}\s+from\s+'antd';/,"const { $1 } = antd;").replace(/import\s+{(\s+[^}]*\s+)}\s+from\s+'@ant-design\/icons';/,"const { $1 } = icons;").replace("import moment from 'moment';","").replace("import React from 'react';","").replace(/import\s+{\s+(.*)\s+}\s+from\s+'react-router';/,"const { $1 } = ReactRouter;").replace(/import\s+{\s+(.*)\s+}\s+from\s+'react-router-dom';/,"const { $1 } = ReactRouterDOM;").replace(/([A-Za-z]*)\s+as\s+([A-Za-z]*)/,"$1:$2").replace(/export default/,"const ComponentDemo =")}

createRoot(mountNode).render(<ComponentDemo />);
`,editors:"001",css:"",js_external:["react@18/umd/react.development.js","react-dom@18/umd/react-dom.development.js","dayjs@1/dayjs.min.js",`antd@${W.version}/dist/antd-with-locales.min.js`,"@ant-design/icons/dist/index.umd.js","react-router-dom/dist/umd/react-router-dom.production.min.js","react-router/dist/umd/react-router.production.min.js"].map(e=>`https://unpkg.com/${e}`).join(";"),js_pre_processor:"typescript"},eL={title:`${z} - antd@${ey.antd}`,js:`${/import React(\D*)from 'react';/.test(E)?"":`import React from 'react';
`}import { createRoot } from 'react-dom/client';
${E.replace(/export default/,"const ComponentDemo =")}

createRoot(mountNode).render(<ComponentDemo />);
`,css:"",json:JSON.stringify({name:"antd-demo",dependencies:ey},null,2)},e$="tsx"===ev?V:E,eC="import React from 'react';",eM=/import React(\D*)from 'react';/,ew=e$.match(eM);ew&&([eC]=ew,e$=e$.replace(eM,"").trim());let ek=`
${eC}
import './index.css';
${e$}
    `.trim(),eN=(D||"").trim().replace(RegExp(`#${o.id}\\s*`,"g"),"").replace("</style>","").replace("<style>","").replace("```css","").replace("```",""),eS=`import React from 'react';
import { createRoot } from 'react-dom/client';
import Demo from './demo';

createRoot(document.getElementById('container')).render(<Demo />);
  `,ez={title:`${z} - antd@${ey.antd}`,main:"index.js",dependencies:{...ey,"rc-util":G["rc-util"],react:"^18.0.0","react-dom":"^18.0.0","react-scripts":"^5.0.0"},devDependencies:{typescript:"^5.0.2"},scripts:{start:"react-scripts start",build:"react-scripts build",test:"react-scripts test --env=jsdom",eject:"react-scripts eject"},browserslist:[">0.2%","not dead"]},eT={files:{"package.json":{content:ez},"index.css":{content:eN},[`index.${ev}`]:{content:eS},[`demo.${ev}`]:{content:ek},"index.html":{content:ej}}},eR={title:`${z} - antd@${ey.antd}`,template:"create-react-app",dependencies:ey,description:"",files:{"index.css":eN,[`index.${ev}`]:eS,[`demo.${ev}`]:ek,"index.html":ej}};"tsx"===ev&&(eR.files["tsconfig.json"]=JSON.stringify({compilerOptions:{target:"esnext",module:"esnext",esModuleInterop:!0,moduleResolution:"node",jsx:"react",jsxFactory:"React.createElement",jsxFragmentFactory:"React.Fragment"}},null,2));let eE=ed.includes("dark")?"#303030":"#f0f2f5",eD=(0,s.jsxs)("section",{className:eh,id:o.id,children:[(0,s.jsx)("section",{className:"code-box-demo",style:{padding:a||H?0:void 0,overflow:a||H?"hidden":void 0,backgroundColor:"grey"===F?eE:void 0},ref:q,children:U||(0,s.jsx)(w,{children:(0,s.jsx)(i.default.StrictMode,{children:Y.current})})}),!I&&(0,s.jsxs)("section",{className:"code-box-meta markdown",children:[(0,s.jsxs)("div",{className:"code-box-title",children:[(0,s.jsx)(c.Tooltip,{title:R?(0,s.jsx)(m.FormattedMessage,{id:"app.demo.debug"}):"",children:(0,s.jsx)("a",{href:`#${o.id}`,ref:eo,children:z})}),(0,s.jsx)(j.default,{title:(0,s.jsx)(m.FormattedMessage,{id:"app.content.edit-demo"}),filename:O})]}),T&&(0,s.jsx)("div",{className:"code-box-description",dangerouslySetInnerHTML:{__html:T}}),(0,s.jsxs)(c.Flex,{wrap:!0,gap:"middle",className:"code-box-actions",children:[em&&(0,s.jsx)(c.Tooltip,{title:(0,s.jsx)(m.FormattedMessage,{id:"app.demo.online"}),children:(0,s.jsx)("a",{className:"code-box-code-action",target:"_blank",rel:"noreferrer",href:ep,children:(0,s.jsx)(d.LinkOutlined,{"aria-label":"open in new tab",className:"code-box-online"})})}),X?(0,s.jsxs)("form",{className:"code-box-code-action",action:"//riddle.alibaba-inc.com/riddles/define",method:"POST",target:"_blank",ref:er,onClick:()=>{var e;k({type:"riddle",demo:o.id}),null===(e=er.current)||void 0===e||e.submit();},children:[(0,s.jsx)("input",{type:"hidden",name:"data",value:JSON.stringify(eL)}),(0,s.jsx)(c.Tooltip,{title:(0,s.jsx)(m.FormattedMessage,{id:"app.demo.riddle"}),children:(0,s.jsx)(L.default,{className:"code-box-riddle"})})]}):null,(0,s.jsx)(c.Tooltip,{title:(0,s.jsx)(m.FormattedMessage,{id:"app.demo.stackblitz"}),children:(0,s.jsx)("span",{className:"code-box-code-action",onClick:()=>{k({type:"stackblitz",demo:o.id}),l.default.openProject(eR,{openFile:[`demo.${ev}`]});},children:(0,s.jsx)(d.ThunderboltOutlined,{className:"code-box-stackblitz",style:{transform:"scale(1.2)"}})})}),(0,s.jsxs)("form",{className:"code-box-code-action",action:"https://codepen.io/pen/define",method:"POST",target:"_blank",ref:ea,onClick:()=>{var e;k({type:"codepen",demo:o.id}),null===(e=ea.current)||void 0===e||e.submit();},children:[(0,s.jsx)(h.default,{children:(0,s.jsx)("input",{type:"hidden",name:"data",value:JSON.stringify(e_)})}),(0,s.jsx)(c.Tooltip,{title:(0,s.jsx)(m.FormattedMessage,{id:"app.demo.codepen"}),children:(0,s.jsx)(v.default,{className:"code-box-codepen"})})]}),Q&&(0,s.jsxs)("form",{className:"code-box-code-action",action:"https://codesandbox.io/api/v1/sandboxes/define",method:"POST",target:"_blank",ref:en,onClick:()=>{var e;k({type:"codesandbox",demo:o.id}),null===(e=en.current)||void 0===e||e.submit();},children:[(0,s.jsx)("input",{type:"hidden",name:"parameters",value:(t=JSON.stringify(eT),x.default.compressToBase64(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,""))}),(0,s.jsx)(c.Tooltip,{title:(0,s.jsx)(m.FormattedMessage,{id:"app.demo.codesandbox"}),children:(0,s.jsx)(y.default,{className:"code-box-codesandbox"})})]}),(0,s.jsx)(c.Tooltip,{title:(0,s.jsx)(m.FormattedMessage,{id:"app.demo.separate"}),children:(0,s.jsx)("a",{className:"code-box-code-action","aria-label":"open in new tab",target:"_blank",rel:"noreferrer",href:u,children:(0,s.jsx)(_.default,{className:"code-box-separate"})})}),(0,s.jsx)(c.Tooltip,{title:(0,s.jsx)(m.FormattedMessage,{id:`app.demo.code.${es?"hide":"show"}`}),children:(0,s.jsxs)("div",{className:"code-expand-icon code-box-code-action",children:[(0,s.jsx)("img",{alt:"expand code",src:(null==ed?void 0:ed.includes("dark"))?"https://gw.alipayobjects.com/zos/antfincdn/btT3qDZn1U/wSAkBuJFbdxsosKKpqyq.svg":"https://gw.alipayobjects.com/zos/antfincdn/Z5c7kzvi30/expand.svg",className:es?"code-expand-icon-hide":"code-expand-icon-show",onClick:()=>ef(o.id)}),(0,s.jsx)("img",{alt:"expand code",src:(null==ed?void 0:ed.includes("dark"))?"https://gw.alipayobjects.com/zos/antfincdn/CjZPwcKUG3/OpROPHYqWmrMDBFMZtKF.svg":"https://gw.alipayobjects.com/zos/antfincdn/4zAaozCvUH/unexpand.svg",className:es?"code-expand-icon-show":"code-expand-icon-hide",onClick:()=>ef(o.id)})]})})]})]}),es&&(0,s.jsxs)("section",{className:eb,children:[(0,s.jsx)(b.default,{sourceCode:V,jsxCode:E,styleCode:D,error:ee,entryName:K,onSourceChange:et}),(0,s.jsxs)("div",{tabIndex:0,role:"button",className:J.codeHideBtn,onClick:()=>ei(!1),children:[(0,s.jsx)(d.UpOutlined,{}),(0,s.jsx)(m.FormattedMessage,{id:"app.demo.code.hide.simplify"})]})]},"code")]});return((0,i.useEffect)(()=>{if(!D)return;let e=document.createElement("style");return e.type="text/css",e.innerHTML=D,e["data-demo-url"]=u,document.head.appendChild(e),()=>{document.head.removeChild(e);};},[D,u]),B)?(0,s.jsx)(c.Badge.Ribbon,{text:B,color:B.includes("<")?"red":void 0,children:eD}):eD;};},"hL7Piw-H":function(e,t,o){"use strict";o.d(t,"__esModule",{value:!0}),o.d(t,"default",{enumerable:!0,get:function(){return d;}});var n=o("zFz0_bw4"),r=o("YDQITbsE"),a=o("HL79G8C-"),s=o("a7LMeidl");let i=(0,s.createStyles)(({token:e,css:t})=>{let{colorIcon:o,colorText:n,iconCls:r}=e;return{editButton:t`
      a& {
        position: relative;
        top: -2px;
        display: inline-block;
        text-decoration: none;
        vertical-align: middle;
        margin-inline-start: ${e.marginXS}px;
        ${r} {
          display: block;
          color: ${o};
          font-size: ${e.fontSizeLG}px;
          transition: all ${e.motionDurationSlow};
          &:hover {
            color: ${n};
          }
        }
      }
    `};});var d=({title:e,filename:t})=>{let{styles:o}=i();return(0,n.jsx)(a.Tooltip,{title:e,children:(0,n.jsx)("a",{className:o.editButton,href:`https://github.com/ant-design/ant-design/edit/master/${t}`,target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(r.EditOutlined,{})})});};},"pnB7k52-":function(e,t,o){"use strict";o.d(t,"__esModule",{value:!0}),o.d(t,"default",{enumerable:!0,get:function(){return d;}});var n=o("d3__vuQ2"),r=o("zFz0_bw4"),a=o("NBCCMyRW"),s=n._(o("aLH10Q0c")),i=n._(o("KBX8PLzy")),d=e=>{let t=(0,a.useTabMeta)();return(null==t?void 0:t.frontmatter.title)==="Design"?(0,r.jsx)(i.default,{...e}):(0,r.jsx)(s.default,{...e});};},"q4gj6sI-":function(e,t,o){"use strict";o.d(t,"__esModule",{value:!0}),o.d(t,"default",{enumerable:!0,get:function(){return r;}});var n=o("kPNEDoWH"),r=({children:e})=>{let[t,o]=(0,n.useState)(!1);return(0,n.useLayoutEffect)(()=>{o(!0);},[]),t?e:null;};},vHs2_k0p:function(e,t,o){e.exports="";}}]);
//# sourceMappingURL=pnB7k52--async.0f5c2fb9.js.map