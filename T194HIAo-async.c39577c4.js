(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["T194HIAo"],{T194HIAo:function(e,a,r){"use strict";r.d(a,"__esModule",{value:!0}),r.d(a,"default",{enumerable:!0,get:function(){return m;}});var s=r("zFz0_bw4");r("q7CCrJiC");var l=r("kPNEDoWH"),n=r("HL79G8C-");let{Option:t}=n.Select,o=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}],i={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},u={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}};var m=()=>{let[e]=n.Form.useForm(),a=(0,s.jsx)(n.Form.Item,{name:"prefix",noStyle:!0,children:(0,s.jsxs)(n.Select,{style:{width:70},children:[(0,s.jsx)(t,{value:"86",children:"+86"}),(0,s.jsx)(t,{value:"87",children:"+87"})]})}),r=(0,s.jsx)(n.Form.Item,{name:"suffix",noStyle:!0,children:(0,s.jsxs)(n.Select,{style:{width:70},children:[(0,s.jsx)(t,{value:"USD",children:"$"}),(0,s.jsx)(t,{value:"CNY",children:"\xa5"})]})}),[m,d]=(0,l.useState)([]),h=m.map(e=>({label:e,value:e}));return(0,s.jsxs)(n.Form,{...i,form:e,name:"register",onFinish:e=>{console.log("Received values of form: ",e);},initialValues:{residence:["zhejiang","hangzhou","xihu"],prefix:"86"},style:{maxWidth:600},scrollToFirstError:!0,children:[(0,s.jsx)(n.Form.Item,{name:"email",label:"E-mail",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}],children:(0,s.jsx)(n.Input,{})}),(0,s.jsx)(n.Form.Item,{name:"password",label:"Password",rules:[{required:!0,message:"Please input your password!"}],hasFeedback:!0,children:(0,s.jsx)(n.Input.Password,{})}),(0,s.jsx)(n.Form.Item,{name:"confirm",label:"Confirm Password",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:"Please confirm your password!"},({getFieldValue:e})=>({validator:(a,r)=>r&&e("password")!==r?Promise.reject(Error("The new password that you entered do not match!")):Promise.resolve()})],children:(0,s.jsx)(n.Input.Password,{})}),(0,s.jsx)(n.Form.Item,{name:"nickname",label:"Nickname",tooltip:"What do you want others to call you?",rules:[{required:!0,message:"Please input your nickname!",whitespace:!0}],children:(0,s.jsx)(n.Input,{})}),(0,s.jsx)(n.Form.Item,{name:"residence",label:"Habitual Residence",rules:[{type:"array",required:!0,message:"Please select your habitual residence!"}],children:(0,s.jsx)(n.Cascader,{options:o})}),(0,s.jsx)(n.Form.Item,{name:"phone",label:"Phone Number",rules:[{required:!0,message:"Please input your phone number!"}],children:(0,s.jsx)(n.Input,{addonBefore:a,style:{width:"100%"}})}),(0,s.jsx)(n.Form.Item,{name:"donation",label:"Donation",rules:[{required:!0,message:"Please input donation amount!"}],children:(0,s.jsx)(n.InputNumber,{addonAfter:r,style:{width:"100%"}})}),(0,s.jsx)(n.Form.Item,{name:"website",label:"Website",rules:[{required:!0,message:"Please input website!"}],children:(0,s.jsx)(n.AutoComplete,{options:h,onChange:e=>{e?d([".com",".org",".net"].map(a=>`${e}${a}`)):d([]);},placeholder:"website",children:(0,s.jsx)(n.Input,{})})}),(0,s.jsx)(n.Form.Item,{name:"intro",label:"Intro",rules:[{required:!0,message:"Please input Intro"}],children:(0,s.jsx)(n.Input.TextArea,{showCount:!0,maxLength:100})}),(0,s.jsx)(n.Form.Item,{name:"gender",label:"Gender",rules:[{required:!0,message:"Please select gender!"}],children:(0,s.jsxs)(n.Select,{placeholder:"select your gender",children:[(0,s.jsx)(t,{value:"male",children:"Male"}),(0,s.jsx)(t,{value:"female",children:"Female"}),(0,s.jsx)(t,{value:"other",children:"Other"})]})}),(0,s.jsx)(n.Form.Item,{label:"Captcha",extra:"We must make sure that your are a human.",children:(0,s.jsxs)(n.Row,{gutter:8,children:[(0,s.jsx)(n.Col,{span:12,children:(0,s.jsx)(n.Form.Item,{name:"captcha",noStyle:!0,rules:[{required:!0,message:"Please input the captcha you got!"}],children:(0,s.jsx)(n.Input,{})})}),(0,s.jsx)(n.Col,{span:12,children:(0,s.jsx)(n.Button,{children:"Get captcha"})})]})}),(0,s.jsx)(n.Form.Item,{name:"agreement",valuePropName:"checked",rules:[{validator:(e,a)=>a?Promise.resolve():Promise.reject(Error("Should accept agreement"))}],...u,children:(0,s.jsxs)(n.Checkbox,{children:["I have read the ",(0,s.jsx)("a",{href:"",children:"agreement"})]})}),(0,s.jsx)(n.Form.Item,{...u,children:(0,s.jsx)(n.Button,{type:"primary",htmlType:"submit",children:"Register"})})]});};}}]);
//# sourceMappingURL=T194HIAo-async.c39577c4.js.map