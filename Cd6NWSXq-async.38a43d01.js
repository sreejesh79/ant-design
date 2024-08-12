(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["Cd6NWSXq"],{Cd6NWSXq:function(e,t,a){"use strict";a.d(t,"__esModule",{value:!0}),a.d(t,"texts",{enumerable:!0,get:function(){return o;}}),a("2vlUWW3w");let o=[{value:"In the ",paraId:0},{value:"5.3.0",paraId:0},{value:" version, we will update the underlying dependency ",paraId:0},{value:"@rc-component/trigger",paraId:0},{value:" of the Tooltip component to better implement adaptive alignment logic. Before that, let's talk about some problems encountered in the previous version.",paraId:0},{value:"Tooltip is append to ",paraId:1,tocIndex:0},{value:"body",paraId:1,tocIndex:0},{value:" by default, and it will scroll along with it when scrolling in full screen. But when the target element of the Tooltip is placed in the scrolling container, it will not follow the scrolling because the scrolling container is different:",paraId:1,tocIndex:0},{value:"We suggest to use ",paraId:2,tocIndex:0},{value:"getPopupContainer",paraId:2,tocIndex:0},{value:" in FAQ, allowing developers to insert the popup element into the parent container of the target element through this method. But this solution is not perfect, because it requires the developer to determine which of the parent containers of the target element is the scrolling container. In a reused component, the component that uses the Tooltip may not be the same as the component it scrolls, which makes it not easy to set the target scroll container.",paraId:2,tocIndex:0},{value:"Tooltip supports edge display within the scrolling range. But because the pop-up layer is a whole, the centered arrow cannot point to the target position after offset:",paraId:3,tocIndex:1},{value:"We recommend using the ",paraId:4,tocIndex:1},{value:"placement",paraId:4,tocIndex:1},{value:" property and configure ",paraId:4,tocIndex:1},{value:"topLeft",paraId:4,tocIndex:1},{value:" to align the popup layer to the left to solve this problem before:",paraId:4,tocIndex:1},{value:"Similarly, if it is a reused component. Maybe it doesn't always need to be displayed side-by-side, it will be very strange when the popup layer is indeed left/right aligned when an element is displayed in the middle.",paraId:5,tocIndex:1},{value:"Tooltip uses the ",paraId:6,tocIndex:2},{value:"dom-align",paraId:6,tocIndex:2},{value:" library for align, which will directly add ",paraId:6,tocIndex:2},{value:"left",paraId:6,tocIndex:2},{value:" | ",paraId:6,tocIndex:2},{value:"top",paraId:6,tocIndex:2},{value:" | ",paraId:6,tocIndex:2},{value:"transform",paraId:6,tocIndex:2},{value:" styles to the dom node to achieve alignment, so in order to make it support the React life cycle, we encapsulated it on top of it ",paraId:6,tocIndex:2},{value:"rc-align",paraId:6,tocIndex:2},{value:" component. In addition, it only cares about the alignment implementation, not the trigger timing itself. So the ",paraId:6,tocIndex:2},{value:"rc-align",paraId:6,tocIndex:2},{value:" component will additionally add a ResizeObserver to monitor size changes, and then call ",paraId:6,tocIndex:2},{value:"dom-align",paraId:6,tocIndex:2},{value:" for alignment.",paraId:6,tocIndex:2},{value:"dom-align",paraId:7,tocIndex:2},{value:" calculates the respective coordinate positions of the target element and the pop-up layer by traversing the parent layer nodes, and then calculates the difference according to the alignment rules. When the parent layer node has a ",paraId:7,tocIndex:2},{value:"transform",paraId:7,tocIndex:2},{value:" style, it will cause the calculated coordinate position to be inaccurate, resulting in incorrect alignment:",paraId:7,tocIndex:2},{value:"The above problems such as scrolling and margining can be avoided in some ways, but the scaling problem cannot be solved. We hope that these problems can be solved by antd, rather than by the developers themselves. To this end, we rewrote the ",paraId:8,tocIndex:3},{value:"@rc-component/trigger",paraId:8,tocIndex:3},{value:" component to integrate alignment logic and arrow logic. No longer depend on ",paraId:8,tocIndex:3},{value:"rc-align",paraId:8,tocIndex:3},{value:" and ",paraId:8,tocIndex:3},{value:"dom-align",paraId:8,tocIndex:3},{value:". At the same time, use the new calculation method to avoid calculation problems caused by the ",paraId:8,tocIndex:3},{value:"transform",paraId:8,tocIndex:3},{value:" style.",paraId:8,tocIndex:3},{value:"Considering that there are various ",paraId:9,tocIndex:4},{value:"position",paraId:9,tocIndex:4},{value:"s in the parent node of the popup element, it is not cost-effective to recursively search the parent element node to calculate the relative position. We only need to calculate the offset according to the final positions of the two, and then apply the final zoom ratio of the popup layer:",paraId:9,tocIndex:4},{value:"Generate the Popup element",paraId:10,tocIndex:4},{value:"Add the Popup style ",paraId:10,tocIndex:4},{value:"left: 0",paraId:10,tocIndex:4},{value:" & ",paraId:10,tocIndex:4},{value:"top: 0",paraId:10,tocIndex:4},{value:" to force it to be aligned to the upper left corner\n",paraId:10,tocIndex:4},{value:"There may be ",paraId:11,tocIndex:4},{value:"fixed",paraId:11,tocIndex:4},{value:", ",paraId:11,tocIndex:4},{value:"relative",paraId:11,tocIndex:4},{value:", and ",paraId:11,tocIndex:4},{value:"absolute",paraId:11,tocIndex:4},{value:" nodes in ",paraId:11,tocIndex:4},{value:"position",paraId:11,tocIndex:4},{value:" in the parent container of the Popup element, which does not affect our calculation of offset. Just make sure to make an offset at the ",paraId:11,tocIndex:4},{value:"0/0",paraId:11,tocIndex:4},{value:" position",paraId:11,tocIndex:4},{value:"Obtain the position information of the target element and Popup element through ",paraId:10,tocIndex:4},{value:"getBoundingClientRect",paraId:10,tocIndex:4},{value:"Calculate the offset difference",paraId:10,tocIndex:4},{value:"The zoom ratio cannot be obtained directly, but we can calculate the zoom ratio through ",paraId:12,tocIndex:5},{value:"getBoundingClientRect",paraId:12,tocIndex:5},{value:" and ",paraId:12,tocIndex:5},{value:"offsetWidth",paraId:12,tocIndex:5},{value:"/",paraId:12,tocIndex:5},{value:"offsetHeight",paraId:12,tocIndex:5},{value:":",paraId:12,tocIndex:5},{value:"const popupRect = popupEle.getBoundingClientRect();\nconst { offsetWidth, offsetHeight } = popupEle;\n\nconst scaleX = popupRect.width / offsetWidth;\nconst scaleY = popupRect.height / offsetHeight;\n",paraId:13,tocIndex:5},{value:"Then apply the scaling to the calculated offset:",paraId:14,tocIndex:5},{value:"// Some logic for align offset calculation\n// const baseOffsetX = ...\n// const baseOffsetY = ...\n\nconst scaledOffsetX = baseOffsetX / scaleX;\nconst scaledOffsetY = baseOffsetY / scaleY;\n",paraId:15,tocIndex:5},{value:"In the past, arrows were added by ",paraId:16,tocIndex:6},{value:"rc-tooltip",paraId:16,tocIndex:6},{value:" instead of ",paraId:16,tocIndex:6},{value:"rc-trigger",paraId:16,tocIndex:6},{value:". This makes the ",paraId:16,tocIndex:6},{value:"rc-tooltip",paraId:16,tocIndex:6},{value:" lost the alignment information, so that the arrow position cannot be adjusted correctly when the Popup is offset. To this end, we also integrate the arrow logic into ",paraId:16,tocIndex:6},{value:"rc-trigger",paraId:16,tocIndex:6},{value:", so that the position of the arrow can be offset with the offset of the Popup. After merging, the arrow position calculation becomes very simple. We only need to take the minimum value of the target element and the Popup boundary value, and then take the middle value:",paraId:16,tocIndex:6},{value:"The new monitoring mode will detect the ",paraId:17,tocIndex:9},{value:"overflow",paraId:17,tocIndex:9},{value:" style of the Popup parent node when the Tooltip is started. When ",paraId:17,tocIndex:9},{value:"scroll",paraId:17,tocIndex:9},{value:", ",paraId:17,tocIndex:9},{value:"hidden",paraId:17,tocIndex:9},{value:", and ",paraId:17,tocIndex:9},{value:"auto",paraId:17,tocIndex:9},{value:" exist, the visible area except the scroll bar will be superimposed to calculate the final display area:",paraId:17,tocIndex:9},{value:"Similarly, we need to listen to its scrolling events. When any parent node is scrolled, the display area needs to be recalculated:",paraId:18,tocIndex:9},{value:"function collectScroll(ele: HTMLElement) {\n  const scrollList: HTMLElement[] = [];\n  let current = ele?.parentElement;\n\n  while (current) {\n    if (isScrollContainer(current)) {\n      scrollList.push(ele);\n    }\n\n    current = current.parentElement;\n  }\n\n  return scrollList;\n}\n\nconst targetScrollList = collectScroll(targetEle);\nconst popupScrollList = collectScroll(popupEle);\n\n// We merge the list in real world. Here just for sample\n[window, ...targetScrollList, ...popupScrollList].forEach((ele) => {\n  ele.addEventListener(...);\n});\n",paraId:19,tocIndex:9},{value:"In the end, we get the effect of adaptive scrolling:",paraId:20,tocIndex:9},{value:"After completing the transformation of Tooltip, we will continue to transform other components which has popup element. We hope that after this, developers can use components directly instead of paying attention to the configuration of ",paraId:21,tocIndex:10},{value:"getPopupContainer",paraId:21,tocIndex:10},{value:" as much as possible. Have a nice day!",paraId:21,tocIndex:10}];}}]);
//# sourceMappingURL=Cd6NWSXq-async.38a43d01.js.map