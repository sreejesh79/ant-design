(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["qDbB4mo8"],{qDbB4mo8:function(t,e,o){"use strict";o.d(e,"__esModule",{value:!0}),o.d(e,"default",{enumerable:!0,get:function(){return b;}});var s=o("d3__vuQ2"),n=o("hSu6qSb4"),i=o("zFz0_bw4"),a=n._(o("kPNEDoWH")),r=o("YDQITbsE"),l=o("u4OAzyKA"),p=o("a7LMeidl"),d=s._(o("wzjINj58")),g=o("NBCCMyRW"),c=s._(o("OFM3XfAV")),u=s._(o("7m6Ppg0i")),m=s._(o("ycKvNsnC")),h=s._(o("6KgxTHdp")),x=s._(o("d-ygwG8N"));let f={cn:{owner:"\u8682\u8681\u96C6\u56E2\u548C Ant Design \u5F00\u6E90\u793E\u533A"},en:{owner:"Ant Group and Ant Design Community"}},j=()=>{let{isMobile:t}=(0,a.useContext)(h.default);return(0,p.createStyles)(({token:e,css:o})=>{let s=new l.TinyColor((0,d.default)("#f0f3fa","#fff")).onBackground(e.colorBgContainer).toHexString();return{holder:o`
        background: ${s};
      `,footer:o`
        background: ${s};
        color: ${e.colorTextSecondary};
        box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);

        * {
          box-sizing: border-box;
        }

        h2,
        a {
          color: ${e.colorText};
        }

        .rc-footer-column {
          margin-bottom: ${t?60:0}px;
          :last-child {
            margin-bottom: ${t?20:0}px;
          }
        }

        .rc-footer-item-icon {
          top: -1.5px;
        }

        .rc-footer-container {
          max-width: 1208px;
          margin-inline: auto;
          padding-inline: ${e.marginXXL}px;
        }

        .rc-footer-bottom {
          box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);
          .rc-footer-bottom-container {
            font-size: ${e.fontSize}px;
          }
        }
      `};})();};var b=()=>{let t=(0,m.default)(),[e,o]=(0,u.default)(f),{styles:s}=j(),{getLink:n}=t,l=a.default.useMemo(()=>{let t="cn"===o,e={title:(0,i.jsx)(g.FormattedMessage,{id:"app.footer.resources"}),items:[{title:"Ant Design Charts",url:t?"https://ant-design-charts.antgroup.com":"https://charts.ant.design",openExternal:!0},{title:"Ant Design Pro",url:"https://pro.ant.design",openExternal:!0},{title:"Ant Design Pro Components",url:"https://procomponents.ant.design",openExternal:!0},{title:"Ant Design Mobile",url:t?"https://ant-design-mobile.antgroup.com/zh":"https://mobile.ant.design",openExternal:!0},{title:"Ant Design Mini",url:t?"https://ant-design-mini.antgroup.com/":"https://mini.ant.design",openExternal:!0},{title:"Ant Design Landing",description:(0,i.jsx)(g.FormattedMessage,{id:"app.footer.landing"}),url:"https://landing.ant.design",openExternal:!0},{title:"Scaffolds",description:(0,i.jsx)(g.FormattedMessage,{id:"app.footer.scaffolds"}),url:"https://scaffold.ant.design",openExternal:!0},{title:"Umi",description:(0,i.jsx)(g.FormattedMessage,{id:"app.footer.umi"}),url:"https://umijs.org",openExternal:!0},{title:"dumi",description:(0,i.jsx)(g.FormattedMessage,{id:"app.footer.dumi"}),url:"https://d.umijs.org",openExternal:!0},{title:"qiankun",description:(0,i.jsx)(g.FormattedMessage,{id:"app.footer.qiankun"}),url:"https://qiankun.umijs.org",openExternal:!0},{title:"ahooks",description:(0,i.jsx)(g.FormattedMessage,{id:"app.footer.hooks"}),url:"https://github.com/alibaba/hooks",openExternal:!0},{title:"Ant Motion",description:(0,i.jsx)(g.FormattedMessage,{id:"app.footer.motion"}),url:"https://motion.ant.design",openExternal:!0},{title:(0,i.jsx)(g.FormattedMessage,{id:"app.footer.chinamirror"}),url:"https://ant-design.antgroup.com"}]},s={title:(0,i.jsx)(g.FormattedMessage,{id:"app.footer.community"}),items:[{icon:(0,i.jsx)(r.AntDesignOutlined,{}),title:(0,i.jsx)(g.FormattedMessage,{id:"app.footer.awesome"}),url:"https://github.com/websemantics/awesome-ant-design",openExternal:!0},{icon:(0,i.jsx)(r.MediumOutlined,{}),title:"Medium",url:"http://medium.com/ant-design/",openExternal:!0},{icon:(0,i.jsx)(r.TwitterOutlined,{style:{color:"#1DA1F2"}}),title:"Twitter",url:"http://twitter.com/antdesignui",openExternal:!0},{icon:(0,i.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque logo"}),title:(0,i.jsx)(g.FormattedMessage,{id:"app.footer.yuque.repo"}),url:"https://yuque.com/ant-design/ant-design",openExternal:!0},{icon:(0,i.jsx)(r.ZhihuOutlined,{style:{color:"#056de8"}}),title:(0,i.jsx)(g.FormattedMessage,{id:"app.footer.zhihu"}),url:"https://www.zhihu.com/column/c_1564262000561106944",openExternal:!0},{icon:(0,i.jsx)(r.ZhihuOutlined,{style:{color:"#056de8"}}),title:(0,i.jsx)(g.FormattedMessage,{id:"app.footer.zhihu.xtech"}),url:"https://www.zhihu.com/column/c_1543658574504751104",openExternal:!0},{icon:(0,i.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/mZBWtboYbnMkTBaRIuWQ.png",width:16,height:16,alt:"seeconf logo"}),title:"SEE Conf",description:(0,i.jsx)(g.FormattedMessage,{id:"app.footer.seeconf"}),url:"https://seeconf.antfin.com/",openExternal:!0}]};t&&s.items.push({icon:(0,i.jsx)(r.UsergroupAddOutlined,{}),title:(0,i.jsx)(g.FormattedMessage,{id:"app.footer.work_with_us"}),url:n("/docs/resources",{cn:"\u52A0\u5165\u6211\u4EEC",en:"JoinUs"}),LinkComponent:g.Link});let a={title:(0,i.jsx)(g.FormattedMessage,{id:"app.footer.help"}),items:[{icon:(0,i.jsx)(r.GithubOutlined,{}),title:"GitHub",url:"https://github.com/ant-design/ant-design",openExternal:!0},{icon:(0,i.jsx)(r.HistoryOutlined,{}),title:(0,i.jsx)(g.FormattedMessage,{id:"app.footer.change-log"}),url:n("/changelog"),LinkComponent:g.Link},{icon:(0,i.jsx)(r.QuestionCircleOutlined,{}),title:(0,i.jsx)(g.FormattedMessage,{id:"app.footer.faq"}),url:n("/docs/react/faq"),LinkComponent:g.Link},{icon:(0,i.jsx)(r.BugOutlined,{}),title:(0,i.jsx)(g.FormattedMessage,{id:"app.footer.bug-report"}),url:"https://new-issue.ant.design/",openExternal:!0},{icon:(0,i.jsx)(r.IssuesCloseOutlined,{}),title:(0,i.jsx)(g.FormattedMessage,{id:"app.footer.issues"}),url:"https://github.com/ant-design/ant-design/issues",openExternal:!0},{icon:(0,i.jsx)(r.MessageOutlined,{}),title:(0,i.jsx)(g.FormattedMessage,{id:"app.footer.discussions"}),url:"https://github.com/ant-design/ant-design/discussions",openExternal:!0},{icon:(0,i.jsx)(r.QuestionCircleOutlined,{}),title:(0,i.jsx)(g.FormattedMessage,{id:"app.footer.stackoverflow"}),url:"http://stackoverflow.com/questions/tagged/antd",openExternal:!0},{icon:(0,i.jsx)(r.QuestionCircleOutlined,{}),title:(0,i.jsx)(g.FormattedMessage,{id:"app.footer.segmentfault"}),url:"https://segmentfault.com/t/antd",openExternal:!0}]},l={icon:(0,i.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:22,height:22,alt:"Ant XTech logo"}),title:(0,i.jsx)(g.FormattedMessage,{id:"app.footer.more-product"}),items:[{icon:(0,i.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque logo"}),title:(0,i.jsx)(g.FormattedMessage,{id:"app.footer.yuque"}),url:"https://yuque.com",description:(0,i.jsx)(g.FormattedMessage,{id:"app.footer.yuque.slogan"}),openExternal:!0},{icon:(0,i.jsx)("img",{src:"https://gw.alipayobjects.com/zos/antfincdn/nc7Fc0XBg5/8a6844f5-a6ed-4630-9177-4fa5d0b7dd47.png",width:16,height:16,alt:"AntV logo"}),title:"AntV",url:"https://antv.antgroup.com",description:(0,i.jsx)(g.FormattedMessage,{id:"app.footer.antv.slogan"}),openExternal:!0},{icon:(0,i.jsx)("img",{src:"https://www.eggjs.org/logo.svg",alt:"Egg logo",width:16,height:16}),title:"Egg",url:"https://eggjs.org",description:(0,i.jsx)(g.FormattedMessage,{id:"app.footer.egg.slogan"}),openExternal:!0},{icon:(0,i.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/DMDOlAUhmktLyEODCMBR.ico",width:16,height:16,alt:"Kitchen logo"}),title:"Kitchen",description:(0,i.jsx)(g.FormattedMessage,{id:"app.footer.kitchen"}),url:"https://kitchen.alipay.com",openExternal:!0},{icon:(0,i.jsx)("img",{src:"https://mdn.alipayobjects.com/huamei_j9rjmc/afts/img/A*3ittT5OEo2gAAAAAAAAAAAAADvGmAQ/original",width:16,height:16,alt:"Galacean logo"}),title:(0,i.jsx)(g.FormattedMessage,{id:"app.footer.galacean"}),description:(0,i.jsx)(g.FormattedMessage,{id:"app.footer.galacean.slogan"}),url:"https://galacean.antgroup.com/",openExternal:!0},{icon:(0,i.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:16,height:16,alt:"xtech logo"}),title:(0,i.jsx)(g.FormattedMessage,{id:"app.footer.xtech"}),url:"https://xtech.antfin.com/",openExternal:!0},{icon:(0,i.jsx)(r.BgColorsOutlined,{}),title:(0,i.jsx)(g.FormattedMessage,{id:"app.footer.theme"}),url:n("/theme-editor"),LinkComponent:g.Link}]};return[e,s,a,l];},[o,t.search]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.default,{columns:l,className:s.footer,bottom:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{style:{opacity:"0.4"},children:["Made with ",(0,i.jsx)("span",{style:{color:"#fff"},children:"\u2764"})," by"]}),(0,i.jsx)("div",{children:e.owner})]})}),(0,i.jsx)(x.default,{})]});};}}]);
//# sourceMappingURL=qDbB4mo8-async.68268df3.js.map