(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["5hIL4AFJ"],{"5hIL4AFJ":function(e,t,o){"use strict";o.d(t,"__esModule",{value:!0}),o.d(t,"texts",{enumerable:!0,get:function(){return n;}}),o("JNJjXQBh");let n=[{value:"The definition of TypeScript is very powerful, it can solve many problems, help developers find type errors in advance to avoid painful debugging at runtime. In antd, we also export the basic definitions of components:",paraId:0},{value:"import React from 'react';\nimport { Table, type TableColumnsType } from 'antd';\n\nconst columns: TableColumnsType = [\n  {\n    title: 'Name',\n    dataIndex: 'name',\n    key: 'name',\n  },\n];\n\nexport default () => <Table columns={columns} />;\n",paraId:1},{value:"These definitions meet most scenarios, but sometimes developers want to get more refined type definitions, which antd may not export. In the past, we recommended developers to extend them by themselves through TypeScript's type gymnastics to meet their needs:",paraId:2},{value:"import type { SelectProps } from 'antd';\n\ntype SelectOption<T> = NonNullable<SelectProps<T>['options']>[number];\n",paraId:3},{value:"It's not a difficult task for developer who are familiar with TypeScript. But for TypeScript beginners, this may be a difficult problem. Therefore, we have launched a type tool library to help developers simplify the process of extracting types.",paraId:4},{value:"We now provide 3 additional utility types in antd:",paraId:5,tocIndex:0},{value:"GetProps<ComponentType>",paraId:6,tocIndex:0},{value:"GetProp<ComponentTypeOrComponentPropsType, PropName>",paraId:6,tocIndex:0},{value:"GetRef<ComponentType>",paraId:6,tocIndex:0},{value:"Previous two are used to help developers extract the props type of the component, and the last one is used to extract the ref type of the component. We can understand the usage of these types through the following examples:",paraId:7,tocIndex:0},{value:"Some sub-component definition may not be exported in antd. You can get it directly through ",paraId:8,tocIndex:1},{value:"GetProps",paraId:8,tocIndex:1},{value:":",paraId:8,tocIndex:1},{value:"import type { Checkbox, GetProps } from 'antd';\n\ntype CheckboxGroupType = GetProps<typeof Checkbox.Group>;\n",paraId:9,tocIndex:1},{value:"For the property type of the component, we can get it through ",paraId:10,tocIndex:2},{value:"GetProp",paraId:10,tocIndex:2},{value:". It has been encapsulated with ",paraId:10,tocIndex:2},{value:"NonNullable",paraId:10,tocIndex:2},{value:". So there is no need to consider the null case:",paraId:10,tocIndex:2},{value:"import type { GetProp, Select, SelectProps } from 'antd';\n\n// Both of this can work\ntype SelectOptionType1 = GetProp<SelectProps, 'options'>[number];\ntype SelectOptionType2 = GetProp<typeof Select, 'options'>[number];\n",paraId:11,tocIndex:2},{value:"Through ",paraId:12,tocIndex:3},{value:"GetRef",paraId:12,tocIndex:3},{value:", you don't need to remember what the ref type of the component is, HTMLElement or some special definition. Just use it:",paraId:12,tocIndex:3},{value:"import React, { forwardRef } from 'react';\nimport type { GetRef, Select } from 'antd';\n\ntype SelectRefType = GetRef<typeof Select>; // BaseSelectRef\n\nconst Div = forwardRef<HTMLDivElement>((_, ref) => <div ref={ref} />);\ntype DomRefType = GetRef<typeof Div>; // HTMLDivElement\n",paraId:13,tocIndex:3},{value:"Here is the type util we provided, hope it can help you. If you have better ideas, please feel free to raise an issue or PR on GitHub.",paraId:14,tocIndex:4}];}}]);
//# sourceMappingURL=5hIL4AFJ-async.3c756bd3.js.map