(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["I_kXt_H9"],{I_kXt_H9:function(a,e,d){"use strict";d.d(e,"__esModule",{value:!0}),d.d(e,"texts",{enumerable:!0,get:function(){return n;}}),d("8N1i61iH");let n=[{value:"Rsbuild",paraId:0},{value:" \u7531 Rspack \u9A71\u52A8\u7684\u6784\u5EFA\u5DE5\u5177\uFF0C\u672C\u6587\u4F1A\u5C1D\u8BD5\u4F7F\u7528 ",paraId:0},{value:"Rsbuild",paraId:0},{value:" \u521B\u5EFA\u4E00\u4E2A\u9879\u76EE\uFF0C\u5E76\u5F15\u5165 antd\u3002",paraId:0},{value:"\u5728\u5F00\u59CB\u4E4B\u524D\uFF0C\u4F60\u53EF\u80FD\u9700\u8981\u5B89\u88C5 ",paraId:1,tocIndex:0},{value:"yarn",paraId:1,tocIndex:0},{value:" \u6216\u8005 ",paraId:1,tocIndex:0},{value:"pnpm",paraId:1,tocIndex:0},{value:" \u6216\u8005 ",paraId:1,tocIndex:0},{value:"bun",paraId:1,tocIndex:0},{value:"\u3002",paraId:1,tocIndex:0},{value:"\u5728\u521D\u59CB\u5316\u7684\u8FC7\u7A0B\u4E2D\uFF0C",paraId:2},{value:"create-rsbuild",paraId:2},{value:" \u63D0\u4F9B\u4E86\u4E00\u7CFB\u5217\u6A21\u677F\u4F9B\u6211\u4EEC\u9009\u62E9\uFF0C\u8FD9\u91CC\u6211\u4EEC\u9009\u62E9 ",paraId:2},{value:"React",paraId:2},{value:" \u6A21\u677F\u3002",paraId:2},{value:"\u5DE5\u5177\u4F1A\u81EA\u52A8\u521D\u59CB\u5316\u4E00\u4E2A\u811A\u624B\u67B6\u5E76\u5B89\u88C5 React \u9879\u76EE\u7684\u5404\u79CD\u5FC5\u8981\u4F9D\u8D56\uFF0C\u5982\u679C\u5728\u8FC7\u7A0B\u4E2D\u51FA\u73B0\u7F51\u7EDC\u95EE\u9898\uFF0C\u8BF7\u5C1D\u8BD5\u914D\u7F6E\u4EE3\u7406\u6216\u4F7F\u7528\u5176\u4ED6 npm registry\u3002",paraId:3},{value:"\u7136\u540E\u6211\u4EEC\u8FDB\u5165\u9879\u76EE\u5E76\u542F\u52A8\u3002",paraId:4},{value:"$ cd demo\n$ npm run dev\n",paraId:5},{value:"\u6B64\u65F6\u8BBF\u95EE\u6D4F\u89C8\u5668 ",paraId:6},{value:"http://localhost:3000",paraId:6},{value:" \uFF0C\u770B\u5230 ",paraId:6},{value:"Rsbuild with React",paraId:6},{value:" \u7684\u754C\u9762\u5C31\u7B97\u6210\u529F\u4E86\u3002",paraId:6},{value:"\u73B0\u5728\u4ECE yarn \u6216 npm \u6216 pnpm \u6216 bun \u5B89\u88C5\u5E76\u5F15\u5165 antd\u3002",paraId:7,tocIndex:1},{value:"\u4FEE\u6539 ",paraId:8},{value:"src/App.tsx",paraId:8},{value:"\uFF0C\u5F15\u5165 antd \u7684 Button \u7EC4\u4EF6\u3002",paraId:8},{value:"import React from 'react';\nimport { Button } from 'antd';\n\nconst App: React.FC = () => (\n  <div className=\"App\">\n    <Button type=\"primary\">Button</Button>\n  </div>\n);\n\nexport default App;\n",paraId:9},{value:"\u597D\u4E86\uFF0C\u73B0\u5728\u4F60\u5E94\u8BE5\u80FD\u770B\u5230\u9875\u9762\u4E0A\u5DF2\u7ECF\u6709\u4E86 antd \u7684\u84DD\u8272\u6309\u94AE\u7EC4\u4EF6\uFF0C\u63A5\u4E0B\u6765\u5C31\u53EF\u4EE5\u7EE7\u7EED\u9009\u7528\u5176\u4ED6\u7EC4\u4EF6\u5F00\u53D1\u5E94\u7528\u4E86\u3002\u5176\u5B83\u5F00\u53D1\u6D41\u7A0B\u4F60\u53EF\u4EE5\u53C2\u8003 Rsbuild \u7684",paraId:10},{value:"\u5B98\u65B9\u6587\u6863",paraId:10},{value:"\u3002",paraId:10},{value:"\u53C2\u8003 ",paraId:11,tocIndex:2},{value:"\u914D\u7F6E\u4E3B\u9898",paraId:12,tocIndex:2},{value:"\uFF0C\u901A\u8FC7 ConfigProvider \u8FDB\u884C\u4E3B\u9898\u914D\u7F6E\uFF1A",paraId:11,tocIndex:2},{value:"import React from 'react';\nimport { ConfigProvider } from 'antd';\n\nconst App: React.FC = () => (\n  <ConfigProvider theme={{ token: { colorPrimary: '#00b96b' } }}>\n    <MyApp />\n  </ConfigProvider>\n);\n\nexport default App;\n",paraId:13,tocIndex:2},{value:"\u6211\u4EEC\u73B0\u5728\u5DF2\u7ECF\u628A antd \u7EC4\u4EF6\u6210\u529F\u4F7F\u7528 Rsbuild \u8FD0\u884C\u8D77\u6765\u4E86\uFF0C\u5F00\u59CB\u5F00\u53D1\u4F60\u7684\u5E94\u7528\u5427\uFF01",paraId:14,tocIndex:2}];}}]);
//# sourceMappingURL=I_kXt_H9-async.20bc6675.js.map