(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["-Ha5T4hi"],{"-Ha5T4hi":function(e,l,a){"use strict";a.d(l,"__esModule",{value:!0}),a.d(l,"default",{enumerable:!0,get:function(){return t;}});var o=a("zFz0_bw4");a("wp7odDTc");var i=a("YDQITbsE"),s=a("HL79G8C-");let{Dragger:n}=s.Upload,d={name:"file",multiple:!0,action:"https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",onChange(e){let{status:l}=e.file;"uploading"!==l&&console.log(e.file,e.fileList),"done"===l?s.message.success(`${e.file.name} file uploaded successfully.`):"error"===l&&s.message.error(`${e.file.name} file upload failed.`);},onDrop(e){console.log("Dropped files",e.dataTransfer.files);}};var t=()=>(0,o.jsxs)(n,{...d,children:[(0,o.jsx)("p",{className:"ant-upload-drag-icon",children:(0,o.jsx)(i.InboxOutlined,{})}),(0,o.jsx)("p",{className:"ant-upload-text",children:"Click or drag file to this area to upload"}),(0,o.jsx)("p",{className:"ant-upload-hint",children:"Support for a single or bulk upload. Strictly prohibited from uploading company data or other banned files."})]});}}]);
//# sourceMappingURL=-Ha5T4hi-async.10fa8d78.js.map