(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["09ZdR2xs"],{"09ZdR2xs":function(e,s,n){"use strict";n.d(s,"__esModule",{value:!0}),n.d(s,"default",{enumerable:!0,get:function(){return o;}});var l=n("zFz0_bw4"),t=n("kPNEDoWH");n("mbCxPfOc");var r=n("YDQITbsE"),a=n("HL79G8C-");let i={labelCol:{xs:{span:24},sm:{span:4}},wrapperCol:{xs:{span:24},sm:{span:20}}},d={wrapperCol:{xs:{span:24,offset:0},sm:{span:20,offset:4}}};var o=()=>(0,l.jsxs)(a.Form,{name:"dynamic_form_item",...d,onFinish:e=>{console.log("Received values of form:",e);},style:{maxWidth:600},children:[(0,l.jsx)(a.Form.List,{name:"names",rules:[{validator:async(e,s)=>{if(!s||s.length<2)return Promise.reject(Error("At least 2 passengers"));}}],children:(e,{add:s,remove:n},{errors:o})=>(0,l.jsxs)(l.Fragment,{children:[e.map((s,o)=>(0,t.createElement)(a.Form.Item,{...0===o?i:d,label:0===o?"Passengers":"",required:!1,key:s.key,children:[(0,l.jsx)(a.Form.Item,{...s,validateTrigger:["onChange","onBlur"],rules:[{required:!0,whitespace:!0,message:"Please input passenger's name or delete this field."}],noStyle:!0,children:(0,l.jsx)(a.Input,{placeholder:"passenger name",style:{width:"60%"}})}),e.length>1?(0,l.jsx)(r.MinusCircleOutlined,{className:"dynamic-delete-button",onClick:()=>n(s.name)}):null]})),(0,l.jsxs)(a.Form.Item,{children:[(0,l.jsx)(a.Button,{type:"dashed",onClick:()=>s(),style:{width:"60%"},icon:(0,l.jsx)(r.PlusOutlined,{}),children:"Add field"}),(0,l.jsx)(a.Button,{type:"dashed",onClick:()=>{s("The head item",0);},style:{width:"60%",marginTop:"20px"},icon:(0,l.jsx)(r.PlusOutlined,{}),children:"Add field at head"}),(0,l.jsx)(a.Form.ErrorList,{errors:o})]})]})}),(0,l.jsx)(a.Form.Item,{children:(0,l.jsx)(a.Button,{type:"primary",htmlType:"submit",children:"Submit"})})]});}}]);
//# sourceMappingURL=09ZdR2xs-async.d31ba9a7.js.map