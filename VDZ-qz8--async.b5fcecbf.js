(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["VDZ-qz8-"],{"VDZ-qz8-":function(e,a,t){"use strict";t.d(a,"__esModule",{value:!0}),t.d(a,"texts",{enumerable:!0,get:function(){return o;}}),t("jj8ylfoU");let o=[{value:"Hi, I'm ",paraId:0},{value:"kiner-tang",paraId:0},{value:" who is a heavy user of Ant Design. As the same reason, I come up to be a contributor for fixing bug and some features. Finally, it's my honer to become a member of Ant Design Collaborator.",paraId:0},{value:"During the journey from user to contributor, and then from contributor to collaborator, I also encountered many problems. I would like to share my experience with the problem I meet. Hope it can help you to join the Ant Design community.",paraId:1},{value:"There are various of package managers, such as npm, yarn, or pnpm, providing version-locking solutions to avoid version-inconsistencies issue. However, in Ant Design projects, many functions depend on the original components in the ",paraId:2,tocIndex:1},{value:"react-component",paraId:2,tocIndex:1},{value:" repository. We expect that when we encounter some bugs, after the ",paraId:2,tocIndex:1},{value:"react-component",paraId:2,tocIndex:1},{value:" fixes and releases the patch version, Instead of manually upgrading the version in the Ant Design project, we can install the latest patch installation package only by reinstalling the dependencies. At this point, the version-lock file provided by the package manager is the main obstacle to automatic updates, because once the version-lock file is available, reinstalling the dependency will also install the version specified by the lock file and cannot be upgraded to the patch version.",paraId:2,tocIndex:1},{value:"Based on the above reasons, we adopt the following methods:",paraId:3,tocIndex:1},{value:"Add ",paraId:4,tocIndex:1},{value:"package-lock.json",paraId:4,tocIndex:1},{value:", ",paraId:4,tocIndex:1},{value:"yarn.lock",paraId:4,tocIndex:1},{value:", ",paraId:4,tocIndex:1},{value:"pnpm-lock.yaml",paraId:4,tocIndex:1},{value:" and other version lock files to ",paraId:4,tocIndex:1},{value:".gitignore",paraId:4,tocIndex:1},{value:" without version tracking.",paraId:4,tocIndex:1},{value:"In ",paraId:5,tocIndex:1},{value:"package.json",paraId:5,tocIndex:1},{value:", for the dependencies that we want to update when there is a new patch version, we use ",paraId:5,tocIndex:1},{value:"~",paraId:5,tocIndex:1},{value:" description version number to allow patch version update.",paraId:5,tocIndex:1},{value:'{\n  "dependencies": {\n    "rc-cascader": "~3.9.0"\n  }\n}\n',paraId:6,tocIndex:1},{value:"For the difference between ",paraId:7,tocIndex:1},{value:"^",paraId:7,tocIndex:1},{value:" and ",paraId:7,tocIndex:1},{value:"~",paraId:7,tocIndex:1},{value:" in the version description of package.json, see ",paraId:7,tocIndex:1},{value:"What's the difference between tilde(~) and caret(^) in package.json",paraId:7,tocIndex:1},{value:".",paraId:7,tocIndex:1},{value:"Thus, when our dependency such as rc-cascader fixes a bug and releases a patch version such as: ",paraId:8,tocIndex:1},{value:"3.9.1",paraId:8,tocIndex:1},{value:", then the user's latest installed version is ",paraId:8,tocIndex:1},{value:"3.9.1",paraId:8,tocIndex:1},{value:". For the maintainer of Ant Design, we only need to execute the following command:",paraId:8,tocIndex:1},{value:"git clean -fdx\nnpm i\n",paraId:9,tocIndex:1},{value:"In Ant Design, we use Jest for unit test. Many first-time contributors of Ant Design may be confused that CI failed after opening a pull request in which they just modify the text in a demo. This is caused by the snapshot diff test.",paraId:10,tocIndex:2},{value:"In most libraries, idempotence is emphasized. With one method and same parameters, the result should be the same no matter how many times it is executed. In Ant Design, the main use of snapshot test is to verify the idempotence of demos, in order to ensure the stability and certainty of components. Actually, snapshot test is simple. By comparing HTML string generated by each demo in different runnings, we could get which one is broken in PR.",paraId:11,tocIndex:2},{value:"Back to the topic, what should we do if we find snapshot test failed after changing a demo?",paraId:12,tocIndex:2},{value:"First, we need to check the snapshot diff to see whether it is the expected change. If there is only the text you modified in demo differs from the origin one, we just need to run the following command to update the snapshot:",paraId:13,tocIndex:2},{value:"# Run the test command to update snapshot\nnpm run test -u\n",paraId:14,tocIndex:2},{value:"However, we should find what's going wrong if the diff of snapshot is not only caused by your modification this time. For example, you only modified the text, but found that classnames in snapshots have changed, which obviously does not meet expectations.",paraId:15,tocIndex:2},{value:"The common causes are as follows:",paraId:16,tocIndex:2},{value:"Local dependency is out of date. This may happen when you pull the latest code, but did not update the local dependency. Deleting ",paraId:17,tocIndex:2},{value:"lock",paraId:17,tocIndex:2},{value:" file, ",paraId:17,tocIndex:2},{value:"node_modules",paraId:17,tocIndex:2},{value:", and then reinstalling dependencies could solve this problem.",paraId:17,tocIndex:2},{value:"solution is as simple as deleting the lock file\u3001node_modules and reinstall dependencies.",paraId:18,tocIndex:2},{value:"Your code not synchronizing baseline code can also result in inconsistent snapshot comparisons. The solution is as simple as pulling the baseline code locally and then rebase your code to the baseline code.",paraId:19,tocIndex:2},{value:"You may have locally changed the source code not only in demos, which would cause unexpected change. You need to go through your change carefully.",paraId:20,tocIndex:2},{value:"In Ant Design, most components are an upper encapsulation of a component based on ",paraId:21,tocIndex:3},{value:"react-component",paraId:21,tocIndex:3},{value:". Therefore, if we find a problem of ",paraId:21,tocIndex:3},{value:"@rc-component/xxx",paraId:21,tocIndex:3},{value:" or ",paraId:21,tocIndex:3},{value:"rc-xxx",paraId:21,tocIndex:3},{value:" component when troubleshooting, we need to open PR on those repositories to fix it. After coding, we need to verify that the problem in Ant Design is resolved, in which case we can link the project to Ant Design for verification. For example:",paraId:21,tocIndex:3},{value:"Run ",paraId:22,tocIndex:3},{value:"npm link",paraId:22,tocIndex:3},{value:" in the repo you are working on. ",paraId:22,tocIndex:3},{value:"Run ",paraId:23,tocIndex:3},{value:'npm link "Project name"',paraId:23,tocIndex:3},{value:" in Ant Design",paraId:23,tocIndex:3},{value:"Once we have verified, we can open PR to the repo. Noted that link may cause exceptions when running the test command. Therefore, we need to run the following commands locally to delete the package from link.",paraId:24,tocIndex:3},{value:'npm unlink "rc-field-form" --no-save\nnpm i\n',paraId:25,tocIndex:3},{value:"When the PR is finally merged, usually the maintainers will release a version. If the patch version is released, you only need to install and verify it in Ant Design. But if the minor version is released, you need to upgrade it in Ant Design. After local verification, a separate PR to Ant Design could be opened for bugfix.",paraId:26,tocIndex:3},{value:"In a large project, if you want to remove a property or a method, it is actually very troublesome. Since your project may already have a lot of items in use, other projects depending on it may get broken. But as the project iterated, we will encounter more and more problems which solutions long time ago may no longer fit. Then, we need to adopt a soft, less radical way to remove it, leaving enough time for users to modify.",paraId:27,tocIndex:4},{value:"In Ant Design, we adopt a ",paraId:28,tocIndex:4},{value:"five-step strategic",paraId:28,tocIndex:4},{value:" to deprecate property or method:",paraId:28,tocIndex:4},{value:"Add deprecated tag to the property",paraId:29,tocIndex:4},{value:"After adding the above deprecated tag, we can see warning when using this property:",paraId:30,tocIndex:4},{value:"Add console warnings",paraId:31,tocIndex:4},{value:"It is important that after adding console warnings, we need to add a test case to test whether the warnings will be displayed when the deprecated properties are used.",paraId:32,tocIndex:4},{value:"Update document",paraId:33,tocIndex:4},{value:": The above two steps are mainly to warn developers in the editor and browser. Next, we need to update the related document. Generally speaking, if we have a property deprecated, it means that it is not recommended for users to use. So we need to remove the related document and add the description of the new property in the meantime. If it cannot be deleted due to special circumstances, please specify the version this property is supported and the alternative scheme in the remarks column.",paraId:33,tocIndex:4},{value:"Compatibility between old and new",paraId:34,tocIndex:4},{value:": Now that we're done with the above tips, it's important to make sure that the new property and the deprecated one both works until the deprecated one is removed. That is to say, we must have the deprecated property work normally. We should not apply any changes in addition to the warning.",paraId:34,tocIndex:4},{value:"We can do something like this to make sure that the new property takes precedence over the old one. At this point, our property deprecation work is done.",paraId:35,tocIndex:4},{value:"Remove",paraId:36,tocIndex:4},{value:": After our properties have been deprecated for a certain period of time, usually when the major version is released, we can remove them. We also need to delete comments, warnings, test cases, and documents that were related to the property. At this point our property removal work is done.",paraId:36,tocIndex:4},{value:"After contributing for some time, we believe you have gained a deeper understanding of Ant Design's overall development process and project architecture. At this point, you may want to take on more tasks and contribute more to the open source community. Then, you can apply to be a Collaborator at Ant Design by commenting on the link below for more active contributors. ",paraId:37,tocIndex:5},{value:"Add Collaborator permission for some active contributors",paraId:37,tocIndex:5},{value:", The Collaborators will then start the voting process, and after passing the voting, they will invite you to officially become a Collaborator at Ant Design.",paraId:37,tocIndex:5},{value:"After you become a newly appointed Ant Design collaborator, you will be assigned some additional rights, such as:",paraId:38,tocIndex:5},{value:"Tag the issue",paraId:39,tocIndex:5},{value:"Close the issue",paraId:40,tocIndex:5},{value:"Free to create branches under the Ant Design project",paraId:41,tocIndex:5},{value:"Free to merge approved PR",paraId:42,tocIndex:5},{value:"...",paraId:43,tocIndex:5},{value:"There are some caveats to this.",paraId:44,tocIndex:5},{value:"It's time to merge PR! Ant Design uses both squash merge and commit merge in different case which requires attention. Following is some introduction about the difference:",paraId:45,tocIndex:6},{value:"Merge pull request",paraId:46,tocIndex:6},{value:": Merge the current PR into the target branch normally (usually used when branches merge with each other, and commit records will not be merged. Do not use this when merging PRs, otherwise too many redundant commit records will be added to the target branch).",paraId:46,tocIndex:6},{value:"Squash and merge",paraId:46,tocIndex:6},{value:": Merge the commit record into one and merge it into the target branch (this is usually used for merging PRs).",paraId:46,tocIndex:6},{value:"Rebase and merge",paraId:46,tocIndex:6},{value:"\uFF1AWhen you want to adjust the baseline",paraId:46,tocIndex:6},{value:"Merge in Ant Design requires at least one collaborator's approve. Collaborator who approved should ensure PR are fully reviewed and confirm.",paraId:47,tocIndex:6},{value:"During routine maintenance, some issues can easily reproduce but some others are not. Report sometimes get stuck in XY problem which makes requirement or bug question strange to understand. Thus, before resolving the superficial problems, we should dig into the real question.",paraId:48,tocIndex:7},{value:"X-Y PROBLEM",paraId:49,tocIndex:7},{value:"Hoping that more and more contributors and collaborators will join us to build a more efficient and elegant Ant Design.",paraId:50,tocIndex:8}];}}]);
//# sourceMappingURL=VDZ-qz8--async.b5fcecbf.js.map