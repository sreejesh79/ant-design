(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["oZiWWjR4"],{oZiWWjR4:function(e,a,d){"use strict";d.d(a,"__esModule",{value:!0}),d.d(a,"texts",{enumerable:!0,get:function(){return t;}}),d("JVFV28XQ");let t=[{value:"A dropdown menu for displaying choices - an elegant alternative to the native ",paraId:0,tocIndex:0},{value:"<select>",paraId:0,tocIndex:0},{value:" element.",paraId:0,tocIndex:0},{value:"Utilizing ",paraId:0,tocIndex:0},{value:"Radio",paraId:1,tocIndex:0},{value:" is recommended when there are fewer total options (less than 5).",paraId:0,tocIndex:0},{value:"You probably need ",paraId:0,tocIndex:0},{value:"AutoComplete",paraId:2,tocIndex:0},{value:" if you're looking for an input box that can be typed or selected.",paraId:0,tocIndex:0},{value:"After version 5.11.0, we provide a simpler usage ",paraId:3},{value:"<Select options={[...]} />",paraId:3},{value:" with better performance and potential of writing simpler code style in your applications.\nMeanwhile, we deprecated the old usage in browser console, we will remove it in antd 6.0.",paraId:3},{value:"// works when >=5.11.0, recommended \u2705\nreturn <Select options={[{ value: 'sample', label: <span>sample</span> }]} />;\n\n// works when <5.11.0, deprecated when >=5.11.0 \u{1F645}\u{1F3FB}\u200D\u2640\uFE0F\nreturn (\n  <Select onChange={onChange}>\n    <Select.Option value=\"sample\">Sample</Select.Option>\n  </Select>\n);\n",paraId:4},{value:"Common props ref\uFF1A",paraId:5,tocIndex:35},{value:"Common props",paraId:6,tocIndex:35},{value:"Property",paraId:7,tocIndex:36},{value:"Description",paraId:7,tocIndex:36},{value:"Type",paraId:7,tocIndex:36},{value:"Default",paraId:7,tocIndex:36},{value:"Version",paraId:7,tocIndex:36},{value:"allowClear",paraId:7,tocIndex:36},{value:"Customize clear icon",paraId:7,tocIndex:36},{value:"boolean | { clearIcon?: ReactNode }",paraId:7,tocIndex:36},{value:"false",paraId:7,tocIndex:36},{value:"5.8.0: Support object type",paraId:7,tocIndex:36},{value:"autoClearSearchValue",paraId:7,tocIndex:36},{value:"Whether the current search will be cleared on selecting an item. Only applies when ",paraId:7,tocIndex:36},{value:"mode",paraId:7,tocIndex:36},{value:" is set to ",paraId:7,tocIndex:36},{value:"multiple",paraId:7,tocIndex:36},{value:" or ",paraId:7,tocIndex:36},{value:"tags",paraId:7,tocIndex:36},{value:"boolean",paraId:7,tocIndex:36},{value:"true",paraId:7,tocIndex:36},{value:"autoFocus",paraId:7,tocIndex:36},{value:"Get focus by default",paraId:7,tocIndex:36},{value:"boolean",paraId:7,tocIndex:36},{value:"false",paraId:7,tocIndex:36},{value:"defaultActiveFirstOption",paraId:7,tocIndex:36},{value:"Whether active first option by default",paraId:7,tocIndex:36},{value:"boolean",paraId:7,tocIndex:36},{value:"true",paraId:7,tocIndex:36},{value:"defaultOpen",paraId:7,tocIndex:36},{value:"Initial open state of dropdown",paraId:7,tocIndex:36},{value:"boolean",paraId:7,tocIndex:36},{value:"-",paraId:7,tocIndex:36},{value:"defaultValue",paraId:7,tocIndex:36},{value:"Initial selected option",paraId:7,tocIndex:36},{value:"string | string[] | ",paraId:7,tocIndex:36},{value:"number | number[] | ",paraId:7,tocIndex:36},{value:"LabeledValue | LabeledValue[]",paraId:7,tocIndex:36},{value:"-",paraId:7,tocIndex:36},{value:"disabled",paraId:7,tocIndex:36},{value:"Whether disabled select",paraId:7,tocIndex:36},{value:"boolean",paraId:7,tocIndex:36},{value:"false",paraId:7,tocIndex:36},{value:"popupClassName",paraId:7,tocIndex:36},{value:"The className of dropdown menu",paraId:7,tocIndex:36},{value:"string",paraId:7,tocIndex:36},{value:"-",paraId:7,tocIndex:36},{value:"4.23.0",paraId:7,tocIndex:36},{value:"popupMatchSelectWidth",paraId:7,tocIndex:36},{value:"Determine whether the popup menu and the select input are the same width. Default set ",paraId:7,tocIndex:36},{value:"min-width",paraId:7,tocIndex:36},{value:" same as input. Will ignore when value less than select width. ",paraId:7,tocIndex:36},{value:"false",paraId:7,tocIndex:36},{value:" will disable virtual scroll",paraId:7,tocIndex:36},{value:"boolean | number",paraId:7,tocIndex:36},{value:"true",paraId:7,tocIndex:36},{value:"5.5.0",paraId:7,tocIndex:36},{value:"dropdownRender",paraId:7,tocIndex:36},{value:"Customize dropdown content",paraId:7,tocIndex:36},{value:"(originNode: ReactNode) => ReactNode",paraId:7,tocIndex:36},{value:"-",paraId:7,tocIndex:36},{value:"dropdownStyle",paraId:7,tocIndex:36},{value:"The style of dropdown menu",paraId:7,tocIndex:36},{value:"CSSProperties",paraId:7,tocIndex:36},{value:"-",paraId:7,tocIndex:36},{value:"fieldNames",paraId:7,tocIndex:36},{value:"Customize node label, value, options\uFF0CgroupLabel field name",paraId:7,tocIndex:36},{value:"object",paraId:7,tocIndex:36},{value:"{ label: ",paraId:7,tocIndex:36},{value:"label",paraId:7,tocIndex:36},{value:", value: ",paraId:7,tocIndex:36},{value:"value",paraId:7,tocIndex:36},{value:", options: ",paraId:7,tocIndex:36},{value:"options",paraId:7,tocIndex:36},{value:", groupLabel: ",paraId:7,tocIndex:36},{value:"label",paraId:7,tocIndex:36},{value:" }",paraId:7,tocIndex:36},{value:"4.17.0 (",paraId:7,tocIndex:36},{value:"groupLabel",paraId:7,tocIndex:36},{value:" added in 5.6.0)",paraId:7,tocIndex:36},{value:"filterOption",paraId:7,tocIndex:36},{value:"If true, filter options by input, if function, filter options against it. The function will receive two arguments, ",paraId:7,tocIndex:36},{value:"inputValue",paraId:7,tocIndex:36},{value:" and ",paraId:7,tocIndex:36},{value:"option",paraId:7,tocIndex:36},{value:", if the function returns ",paraId:7,tocIndex:36},{value:"true",paraId:7,tocIndex:36},{value:", the option will be included in the filtered set; Otherwise, it will be excluded",paraId:7,tocIndex:36},{value:"boolean | function(inputValue, option)",paraId:7,tocIndex:36},{value:"true",paraId:7,tocIndex:36},{value:"filterSort",paraId:7,tocIndex:36},{value:"Sort function for search options sorting, see ",paraId:7,tocIndex:36},{value:"Array.sort",paraId:7,tocIndex:36},{value:"'s compareFunction",paraId:7,tocIndex:36},{value:"(optionA: Option, optionB: Option, info: { searchValue: string }) => number",paraId:7,tocIndex:36},{value:"-",paraId:7,tocIndex:36},{value:"searchValue",paraId:7,tocIndex:36},{value:": 5.19.0",paraId:7,tocIndex:36},{value:"getPopupContainer",paraId:7,tocIndex:36},{value:"Parent Node which the selector should be rendered to. Default to ",paraId:7,tocIndex:36},{value:"body",paraId:7,tocIndex:36},{value:". When position issues happen, try to modify it into scrollable content and position it relative. ",paraId:7,tocIndex:36},{value:"Example",paraId:7,tocIndex:36},{value:"function(triggerNode)",paraId:7,tocIndex:36},{value:"() => document.body",paraId:7,tocIndex:36},{value:"labelInValue",paraId:7,tocIndex:36},{value:"Whether to embed label in value, turn the format of value from ",paraId:7,tocIndex:36},{value:"string",paraId:7,tocIndex:36},{value:" to { value: string, label: ReactNode }",paraId:7,tocIndex:36},{value:"boolean",paraId:7,tocIndex:36},{value:"false",paraId:7,tocIndex:36},{value:"listHeight",paraId:7,tocIndex:36},{value:"Config popup height",paraId:7,tocIndex:36},{value:"number",paraId:7,tocIndex:36},{value:"256",paraId:7,tocIndex:36},{value:"loading",paraId:7,tocIndex:36},{value:"Indicate loading state",paraId:7,tocIndex:36},{value:"boolean",paraId:7,tocIndex:36},{value:"false",paraId:7,tocIndex:36},{value:"maxCount",paraId:7,tocIndex:36},{value:"The max number of items can be selected, only applies when ",paraId:7,tocIndex:36},{value:"mode",paraId:7,tocIndex:36},{value:" is ",paraId:7,tocIndex:36},{value:"multiple",paraId:7,tocIndex:36},{value:" or ",paraId:7,tocIndex:36},{value:"tags",paraId:7,tocIndex:36},{value:"number",paraId:7,tocIndex:36},{value:"-",paraId:7,tocIndex:36},{value:"5.13.0",paraId:7,tocIndex:36},{value:"maxTagCount",paraId:7,tocIndex:36},{value:"Max tag count to show. ",paraId:7,tocIndex:36},{value:"responsive",paraId:7,tocIndex:36},{value:" will cost render performance",paraId:7,tocIndex:36},{value:"number | ",paraId:7,tocIndex:36},{value:"responsive",paraId:7,tocIndex:36},{value:"-",paraId:7,tocIndex:36},{value:"responsive: 4.10",paraId:7,tocIndex:36},{value:"maxTagPlaceholder",paraId:7,tocIndex:36},{value:"Placeholder for not showing tags",paraId:7,tocIndex:36},{value:"ReactNode | function(omittedValues)",paraId:7,tocIndex:36},{value:"-",paraId:7,tocIndex:36},{value:"maxTagTextLength",paraId:7,tocIndex:36},{value:"Max tag text length to show",paraId:7,tocIndex:36},{value:"number",paraId:7,tocIndex:36},{value:"-",paraId:7,tocIndex:36},{value:"menuItemSelectedIcon",paraId:7,tocIndex:36},{value:"The custom menuItemSelected icon with multiple options",paraId:7,tocIndex:36},{value:"ReactNode",paraId:7,tocIndex:36},{value:"-",paraId:7,tocIndex:36},{value:"mode",paraId:7,tocIndex:36},{value:"Set mode of Select",paraId:7,tocIndex:36},{value:"multiple",paraId:7,tocIndex:36},{value:" | ",paraId:7,tocIndex:36},{value:"tags",paraId:7,tocIndex:36},{value:"-",paraId:7,tocIndex:36},{value:"notFoundContent",paraId:7,tocIndex:36},{value:"Specify content to show when no result matches",paraId:7,tocIndex:36},{value:"ReactNode",paraId:7,tocIndex:36},{value:"Not Found",paraId:7,tocIndex:36},{value:"open",paraId:7,tocIndex:36},{value:"Controlled open state of dropdown",paraId:7,tocIndex:36},{value:"boolean",paraId:7,tocIndex:36},{value:"-",paraId:7,tocIndex:36},{value:"optionFilterProp",paraId:7,tocIndex:36},{value:"Which prop value of option will be used for filter if filterOption is true. If ",paraId:7,tocIndex:36},{value:"options",paraId:7,tocIndex:36},{value:" is set, it should be set to ",paraId:7,tocIndex:36},{value:"label",paraId:7,tocIndex:36},{value:"string",paraId:7,tocIndex:36},{value:"value",paraId:7,tocIndex:36},{value:"optionLabelProp",paraId:7,tocIndex:36},{value:"Which prop value of option will render as content of select. ",paraId:7,tocIndex:36},{value:"Example",paraId:7,tocIndex:36},{value:"string",paraId:7,tocIndex:36},{value:"children",paraId:7,tocIndex:36},{value:"options",paraId:7,tocIndex:36},{value:"Select options. Will get better perf than jsx definition",paraId:7,tocIndex:36},{value:"{ label, value }[]",paraId:7,tocIndex:36},{value:"-",paraId:7,tocIndex:36},{value:"optionRender",paraId:7,tocIndex:36},{value:"Customize the rendering dropdown options",paraId:7,tocIndex:36},{value:"(option: FlattenOptionData<BaseOptionType> , info: { index: number }) => React.ReactNode",paraId:7,tocIndex:36},{value:"-",paraId:7,tocIndex:36},{value:"5.11.0",paraId:7,tocIndex:36},{value:"placeholder",paraId:7,tocIndex:36},{value:"Placeholder of select",paraId:7,tocIndex:36},{value:"ReactNode",paraId:7,tocIndex:36},{value:"-",paraId:7,tocIndex:36},{value:"placement",paraId:7,tocIndex:36},{value:"The position where the selection box pops up",paraId:7,tocIndex:36},{value:"bottomLeft",paraId:7,tocIndex:36},{value:" ",paraId:7,tocIndex:36},{value:"bottomRight",paraId:7,tocIndex:36},{value:" ",paraId:7,tocIndex:36},{value:"topLeft",paraId:7,tocIndex:36},{value:" ",paraId:7,tocIndex:36},{value:"topRight",paraId:7,tocIndex:36},{value:"bottomLeft",paraId:7,tocIndex:36},{value:"removeIcon",paraId:7,tocIndex:36},{value:"The custom remove icon",paraId:7,tocIndex:36},{value:"ReactNode",paraId:7,tocIndex:36},{value:"-",paraId:7,tocIndex:36},{value:"searchValue",paraId:7,tocIndex:36},{value:'The current input "search" text',paraId:7,tocIndex:36},{value:"string",paraId:7,tocIndex:36},{value:"-",paraId:7,tocIndex:36},{value:"showSearch",paraId:7,tocIndex:36},{value:"Whether select is searchable",paraId:7,tocIndex:36},{value:"boolean",paraId:7,tocIndex:36},{value:"single: false, multiple: true",paraId:7,tocIndex:36},{value:"size",paraId:7,tocIndex:36},{value:"Size of Select input",paraId:7,tocIndex:36},{value:"large",paraId:7,tocIndex:36},{value:" | ",paraId:7,tocIndex:36},{value:"middle",paraId:7,tocIndex:36},{value:" | ",paraId:7,tocIndex:36},{value:"small",paraId:7,tocIndex:36},{value:"middle",paraId:7,tocIndex:36},{value:"status",paraId:7,tocIndex:36},{value:"Set validation status",paraId:7,tocIndex:36},{value:"'error' | 'warning'",paraId:7,tocIndex:36},{value:"-",paraId:7,tocIndex:36},{value:"4.19.0",paraId:7,tocIndex:36},{value:"suffixIcon",paraId:7,tocIndex:36},{value:"The custom suffix icon. Customize icon will not response click open to avoid icon designed to do other interactive. You can use ",paraId:7,tocIndex:36},{value:"pointer-events: none",paraId:7,tocIndex:36},{value:" style to bypass",paraId:7,tocIndex:36},{value:"ReactNode",paraId:7,tocIndex:36},{value:"<DownOutlined />",paraId:7,tocIndex:36},{value:"tagRender",paraId:7,tocIndex:36},{value:"Customize tag render, only applies when ",paraId:7,tocIndex:36},{value:"mode",paraId:7,tocIndex:36},{value:" is set to ",paraId:7,tocIndex:36},{value:"multiple",paraId:7,tocIndex:36},{value:" or ",paraId:7,tocIndex:36},{value:"tags",paraId:7,tocIndex:36},{value:"(props) => ReactNode",paraId:7,tocIndex:36},{value:"-",paraId:7,tocIndex:36},{value:"labelRender",paraId:7,tocIndex:36},{value:"Customize selected label render",paraId:7,tocIndex:36},{value:"(label: ReactNode) => ReactNode",paraId:7,tocIndex:36},{value:"-",paraId:7,tocIndex:36},{value:"5.15.0",paraId:7,tocIndex:36},{value:"tokenSeparators",paraId:7,tocIndex:36},{value:"Separator used to tokenize, only applies when ",paraId:7,tocIndex:36},{value:'mode="tags"',paraId:7,tocIndex:36},{value:"string[]",paraId:7,tocIndex:36},{value:"-",paraId:7,tocIndex:36},{value:"value",paraId:7,tocIndex:36},{value:"Current selected option (considered as a immutable array)",paraId:7,tocIndex:36},{value:"string | string[] | ",paraId:7,tocIndex:36},{value:"number | number[] | ",paraId:7,tocIndex:36},{value:"LabeledValue | LabeledValue[]",paraId:7,tocIndex:36},{value:"-",paraId:7,tocIndex:36},{value:"variant",paraId:7,tocIndex:36},{value:"Variants of selector",paraId:7,tocIndex:36},{value:"outlined",paraId:7,tocIndex:36},{value:" | ",paraId:7,tocIndex:36},{value:"borderless",paraId:7,tocIndex:36},{value:" | ",paraId:7,tocIndex:36},{value:"filled",paraId:7,tocIndex:36},{value:"outlined",paraId:7,tocIndex:36},{value:"5.13.0",paraId:7,tocIndex:36},{value:"virtual",paraId:7,tocIndex:36},{value:"Disable virtual scroll when set to false",paraId:7,tocIndex:36},{value:"boolean",paraId:7,tocIndex:36},{value:"true",paraId:7,tocIndex:36},{value:"4.1.0",paraId:7,tocIndex:36},{value:"onBlur",paraId:7,tocIndex:36},{value:"Called when blur",paraId:7,tocIndex:36},{value:"function",paraId:7,tocIndex:36},{value:"-",paraId:7,tocIndex:36},{value:"onChange",paraId:7,tocIndex:36},{value:"Called when select an option or input value change",paraId:7,tocIndex:36},{value:"function(value, option:Option | Array<Option>)",paraId:7,tocIndex:36},{value:"-",paraId:7,tocIndex:36},{value:"onClear",paraId:7,tocIndex:36},{value:"Called when clear",paraId:7,tocIndex:36},{value:"function",paraId:7,tocIndex:36},{value:"-",paraId:7,tocIndex:36},{value:"4.6.0",paraId:7,tocIndex:36},{value:"onDeselect",paraId:7,tocIndex:36},{value:"Called when an option is deselected, param is the selected option's value. Only called for ",paraId:7,tocIndex:36},{value:"multiple",paraId:7,tocIndex:36},{value:" or ",paraId:7,tocIndex:36},{value:"tags",paraId:7,tocIndex:36},{value:", effective in multiple or tags mode only",paraId:7,tocIndex:36},{value:"function(value: string | number | LabeledValue)",paraId:7,tocIndex:36},{value:"-",paraId:7,tocIndex:36},{value:"onDropdownVisibleChange",paraId:7,tocIndex:36},{value:"Called when dropdown open",paraId:7,tocIndex:36},{value:"(open: boolean) => void",paraId:7,tocIndex:36},{value:"-",paraId:7,tocIndex:36},{value:"onFocus",paraId:7,tocIndex:36},{value:"Called when focus",paraId:7,tocIndex:36},{value:"(event: FocusEvent) => void",paraId:7,tocIndex:36},{value:"-",paraId:7,tocIndex:36},{value:"onInputKeyDown",paraId:7,tocIndex:36},{value:"Called when key pressed",paraId:7,tocIndex:36},{value:"(event: KeyboardEvent) => void",paraId:7,tocIndex:36},{value:"-",paraId:7,tocIndex:36},{value:"onPopupScroll",paraId:7,tocIndex:36},{value:"Called when dropdown scrolls",paraId:7,tocIndex:36},{value:"(event: UIEvent) => void",paraId:7,tocIndex:36},{value:"-",paraId:7,tocIndex:36},{value:"onSearch",paraId:7,tocIndex:36},{value:"Callback function that is fired when input changed",paraId:7,tocIndex:36},{value:"function(value: string)",paraId:7,tocIndex:36},{value:"-",paraId:7,tocIndex:36},{value:"onSelect",paraId:7,tocIndex:36},{value:"Called when an option is selected, the params are option's value (or key) and option instance",paraId:7,tocIndex:36},{value:"function(value: string | number | LabeledValue, option: Option)",paraId:7,tocIndex:36},{value:"-",paraId:7,tocIndex:36},{value:"Note, if you find that the drop-down menu scrolls with the page, or you need to trigger Select in other popup layers, please try to use ",paraId:8,tocIndex:36},{value:"getPopupContainer={triggerNode => triggerNode.parentElement}",paraId:8,tocIndex:36},{value:" to fix the drop-down popup rendering node in the parent element of the trigger .",paraId:8,tocIndex:36},{value:"Name",paraId:9,tocIndex:37},{value:"Description",paraId:9,tocIndex:37},{value:"Version",paraId:9,tocIndex:37},{value:"blur()",paraId:9,tocIndex:37},{value:"Remove focus",paraId:9,tocIndex:37},{value:"focus()",paraId:9,tocIndex:37},{value:"Get focus",paraId:9,tocIndex:37},{value:"Property",paraId:10,tocIndex:38},{value:"Description",paraId:10,tocIndex:38},{value:"Type",paraId:10,tocIndex:38},{value:"Default",paraId:10,tocIndex:38},{value:"Version",paraId:10,tocIndex:38},{value:"className",paraId:10,tocIndex:38},{value:"The additional class to option",paraId:10,tocIndex:38},{value:"string",paraId:10,tocIndex:38},{value:"-",paraId:10,tocIndex:38},{value:"disabled",paraId:10,tocIndex:38},{value:"Disable this option",paraId:10,tocIndex:38},{value:"boolean",paraId:10,tocIndex:38},{value:"false",paraId:10,tocIndex:38},{value:"title",paraId:10,tocIndex:38},{value:"title",paraId:10,tocIndex:38},{value:" attribute of Select Option",paraId:10,tocIndex:38},{value:"string",paraId:10,tocIndex:38},{value:"-",paraId:10,tocIndex:38},{value:"value",paraId:10,tocIndex:38},{value:"Default to filter with this property",paraId:10,tocIndex:38},{value:"string | number",paraId:10,tocIndex:38},{value:"-",paraId:10,tocIndex:38},{value:"Property",paraId:11,tocIndex:39},{value:"Description",paraId:11,tocIndex:39},{value:"Type",paraId:11,tocIndex:39},{value:"Default",paraId:11,tocIndex:39},{value:"Version",paraId:11,tocIndex:39},{value:"key",paraId:11,tocIndex:39},{value:"Group key",paraId:11,tocIndex:39},{value:"string",paraId:11,tocIndex:39},{value:"-",paraId:11,tocIndex:39},{value:"label",paraId:11,tocIndex:39},{value:"Group label",paraId:11,tocIndex:39},{value:"React.ReactNode",paraId:11,tocIndex:39},{value:"-",paraId:11,tocIndex:39},{value:"className",paraId:11,tocIndex:39},{value:"The additional class to option",paraId:11,tocIndex:39},{value:"string",paraId:11,tocIndex:39},{value:"-",paraId:11,tocIndex:39},{value:"title",paraId:11,tocIndex:39},{value:"title",paraId:11,tocIndex:39},{value:" attribute of Select Option",paraId:11,tocIndex:39},{value:"string",paraId:11,tocIndex:39},{value:"-",paraId:11,tocIndex:39},{value:"tags",paraId:12},{value:"It's caused by option with different ",paraId:13,tocIndex:42},{value:"label",paraId:13,tocIndex:42},{value:" and ",paraId:13,tocIndex:42},{value:"value",paraId:13,tocIndex:42},{value:". You can use ",paraId:13,tocIndex:42},{value:'optionFilterProp="label"',paraId:13,tocIndex:42},{value:" to change filter logic instead.",paraId:13,tocIndex:42},{value:"You can control it by ",paraId:14,tocIndex:43},{value:"open",paraId:14,tocIndex:43},{value:" prop: ",paraId:14,tocIndex:43},{value:"codesandbox",paraId:14,tocIndex:43},{value:".",paraId:14,tocIndex:43},{value:"dropdownRender",paraId:12},{value:"Select will close when it lose focus. You can prevent event to handle this:",paraId:15,tocIndex:44},{value:"<Select\n  dropdownRender={() => (\n    <div\n      onMouseDown={(e) => {\n        e.preventDefault();\n        e.stopPropagation();\n      }}\n    >\n      Some Content\n    </div>\n  )}\n/>\n",paraId:16,tocIndex:44},{value:"Virtual scroll internal set item height as ",paraId:17,tocIndex:45},{value:"24px",paraId:17,tocIndex:45},{value:". You need to adjust ",paraId:17,tocIndex:45},{value:"listItemHeight",paraId:17,tocIndex:45},{value:" when your option height is less and ",paraId:17,tocIndex:45},{value:"listHeight",paraId:17,tocIndex:45},{value:" config list container height:",paraId:17,tocIndex:45},{value:"<Select listItemHeight={10} listHeight={250} />\n",paraId:18,tocIndex:45},{value:"Note: ",paraId:19,tocIndex:45},{value:"listItemHeight",paraId:19,tocIndex:45},{value:" and ",paraId:19,tocIndex:45},{value:"listHeight",paraId:19,tocIndex:45},{value:" are internal props. Please only modify when necessary.",paraId:19,tocIndex:45},{value:"aria-",paraId:12},{value:"Select only create a11y auxiliary node when operating on. Please open Select and retry. For ",paraId:20,tocIndex:46},{value:"aria-label",paraId:20,tocIndex:46},{value:" & ",paraId:20,tocIndex:46},{value:"aria-labelledby",paraId:20,tocIndex:46},{value:" miss warning, please add related prop to Select with your own requirement.",paraId:20,tocIndex:46},{value:"Default virtual scrolling will create a mock element to simulate an accessible binding. If a screen reader needs to fully access the entire list, you can set ",paraId:21,tocIndex:46},{value:"virtual={false}",paraId:21,tocIndex:46},{value:" to disable virtual scrolling and the accessibility option will be bound to the actual element.",paraId:21,tocIndex:46}];}}]);
//# sourceMappingURL=oZiWWjR4-async.df7cfe72.js.map