"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[30619],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(t),u=i,g=d["".concat(l,".").concat(u)]||d[u]||m[u]||a;return t?r.createElement(g,o(o({ref:n},c),{},{components:t})):r.createElement(g,o({ref:n},c))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},35170:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=t(87462),i=(t(67294),t(3905));const a={title:"Monitoring V2 \u7684 Windows \u96c6\u7fa4\u652f\u6301"},o=void 0,p={unversionedId:"integrations-in-rancher/monitoring-and-alerting/windows-support",id:"integrations-in-rancher/monitoring-and-alerting/windows-support",title:"Monitoring V2 \u7684 Windows \u96c6\u7fa4\u652f\u6301",description:"\u4ece v2.5.8 \u8d77\u53ef\u7528",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/integrations-in-rancher/monitoring-and-alerting/windows-support.md",sourceDirName:"integrations-in-rancher/monitoring-and-alerting",slug:"/integrations-in-rancher/monitoring-and-alerting/windows-support",permalink:"/zh/integrations-in-rancher/monitoring-and-alerting/windows-support",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/integrations-in-rancher/monitoring-and-alerting/windows-support.md",tags:[],version:"current",lastUpdatedAt:1669185570,formattedLastUpdatedAt:"2022\u5e7411\u670823\u65e5",frontMatter:{title:"Monitoring V2 \u7684 Windows \u96c6\u7fa4\u652f\u6301"},sidebar:"tutorialSidebar",previous:{title:"\u5185\u7f6e\u4eea\u8868\u677f",permalink:"/zh/integrations-in-rancher/monitoring-and-alerting/built-in-dashboards"},next:{title:"PromQL \u8868\u8fbe\u5f0f\u53c2\u8003",permalink:"/zh/integrations-in-rancher/monitoring-and-alerting/promql-expressions"}},l={},s=[{value:"\u96c6\u7fa4\u8981\u6c42",id:"\u96c6\u7fa4\u8981\u6c42",level:2},{value:"\u5c06\u73b0\u6709\u96c6\u7fa4\u5347\u7ea7\u5230 wins v0.1.0",id:"\u5c06\u73b0\u6709\u96c6\u7fa4\u5347\u7ea7\u5230-wins-v010",level:3}],c={toc:s};function m(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"\u4ece v2.5.8 \u8d77\u53ef\u7528")),(0,i.kt)("p",null,"\u4ece Monitoring V2 14.5.100\uff08Rancher 2.5.8 \u7684\u9ed8\u8ba4\u7248\u672c\uff09\u5f00\u59cb\uff0cMonitoring V2 \u53ef\u4ee5\u90e8\u7f72\u5728 Windows \u96c6\u7fa4\u4e0a\uff0c\u5e76\u5c06\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/prometheus-community/windows_exporter"},"prometheus-community/windows_exporter"),"\uff08\u65e7\u540d\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"wmi_exporter"),"\uff09\u6765\u6293\u53d6 Windows \u8282\u70b9\u7684\u6307\u6807\u3002"),(0,i.kt)("h2",{id:"\u96c6\u7fa4\u8981\u6c42"},"\u96c6\u7fa4\u8981\u6c42"),(0,i.kt)("p",null,"Monitoring V2 for Windows \u53ea\u80fd\u4ece\u6700\u4f4e\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"wins")," v0.1.0 \u7684 Windows \u4e3b\u673a\u4e2d\u6293\u53d6\u6307\u6807\u3002\u8981\u5b8c\u5168\u90e8\u7f72 Monitoring V2 for Windows\uff0c\u4f60\u7684\u6240\u6709\u4e3b\u673a\u90fd\u5fc5\u987b\u6ee1\u8db3\u6b64\u8981\u6c42\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u5728 Rancher 2.5.8 \u4e2d\u914d\u7f6e\u65b0\u7684 RKE1 \u96c6\u7fa4\uff0c\u4f60\u7684\u96c6\u7fa4\u5e94\u8be5\u5df2\u7ecf\u6ee1\u8db3\u6b64\u8981\u6c42\u3002"),(0,i.kt)("h3",{id:"\u5c06\u73b0\u6709\u96c6\u7fa4\u5347\u7ea7\u5230-wins-v010"},"\u5c06\u73b0\u6709\u96c6\u7fa4\u5347\u7ea7\u5230 wins v0.1.0"),(0,i.kt)("p",null,"\u5982\u679c\u96c6\u7fa4\u662f\u5728 Rancher 2.5.8 \u4e4b\u524d\u914d\u7f6e\u7684\uff08\u5373\u4f7f\u5f53\u524d Rancher \u7248\u672c\u662f 2.5.8\uff09\uff0c\u4f60\u5c06\u65e0\u6cd5\u6210\u529f\u90e8\u7f72 Monitoring V2 for Windows\uff0c\u9664\u975e\u4f60\u5c06\u6bcf\u53f0\u4e3b\u673a\u7684 wins \u7248\u672c\u5347\u7ea7\u5230 v0.1.0 \u6216\u4ee5\u4e0a\u7248\u672c\u3002"),(0,i.kt)("p",null,"\u4e3a\u4e86\u65b9\u4fbf\u6b64\u6b21\u5347\u7ea7\uff0cRancher 2.5.8 \u53d1\u5e03\u4e86\u4e00\u4e2a\u5168\u65b0\u7684 Helm Chart\uff0c\u540d\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-wins-upgrader"),"\u3002"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u4f7f\u7528\u4ee5\u4e0b\u8986\u76d6\u90e8\u7f72 ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-wins-upgrader"),"\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# \u901a\u8fc7\u5148\u524d\u5df2\u5217\u5165\u767d\u540d\u5355\u7684\u8fdb\u7a0b\u8def\u5f84\n# \u6765\u5f15\u5bfc win-upgrader \u5b89\u88c5\uff0c\u8fd9\u662f\u56e0\u4e3a\u6b63\u5e38\u5b89\u88c5\u8def\u5f84\n# c:\\etc\\rancher\\wins\\wins-upgrade.exe \u901a\u5e38\u4e0d\u4f1a\u88ab\u5217\u5165\u767d\u540d\u5355\u3002\n# \u56e0\u6b64\uff0c\u6211\u4eec\u4f7f\u7528 Monitoring V1 \u4e4b\u524d\u6240\u7528\u7684\n# \u5df2\u5217\u5165\u767d\u540d\u5355\u7684\u8fdb\u7a0b\u8def\u5f84\u3002\nmasquerade:\n  enabled: true\n  as: c:\\\\etc\\wmi-exporter\\wmi-exporter.exe\n")),(0,i.kt)("admonition",{parentName:"li",title:"\u975e\u9ed8\u8ba4 Windows \u524d\u7f00\u8def\u5f84\u7684\u6ce8\u610f\u4e8b\u9879\uff1a",type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5982\u679c\u4f60\u4f7f\u7528\u5177\u6709\u975e\u9ed8\u8ba4 ",(0,i.kt)("inlineCode",{parentName:"p"},"win_prefix_path")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster.yml")," \u6765\u8bbe\u7f6e RKE \u96c6\u7fa4\uff0c\u4f60\u9700\u8981\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"c:\\\\")," \u66ff\u6362\u4e3a\u4f60\u7684\u524d\u7f00\u8def\u5f84\u5b57\u6bb5\u7684\u503c\u6765\u4fee\u6539 ",(0,i.kt)("inlineCode",{parentName:"p"},"masquerade.as"),"\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4f8b\u5982\uff0c\u5982\u679c\u4f60\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"win_prefix_path: 'c:\\host\\opt\\'"),"\uff0c\u5219\u9700\u8981\u8bbe\u7f6e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"as: c:\\host\\opt\\etc\\wmi-exporter\\wmi-exporter.exe"),"\u3002"))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u6210\u529f\u5347\u7ea7\u6240\u6709\u4e3b\u673a\u540e\uff0c\u8bf7\u518d\u6b21\u4f7f\u7528\u9ed8\u8ba4\u503c\u90e8\u7f72 Helm Chart\uff0c\u4ee5\u907f\u514d\u4e0e\u4ee5\u4e0b\u8bbe\u7f6e\u53d1\u751f\u51b2\u7a81\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"masquerade:\n  enabled: false\n")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u4e3b\u673a\u5df2\u51c6\u5907\u597d\u5b89\u88c5 Monitoring V2\u3002\u4f60\u53ef\u4ee5\u9009\u62e9\u5378\u8f7d ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-wins-upgrader")," Chart\uff0c\u6216\u5c06\u5176\u4fdd\u7559\u5728\u96c6\u7fa4\u4e2d\u4ee5\u65b9\u4fbf\u5c06\u6765\u5347\u7ea7\u3002"),(0,i.kt)("p",null,"\u6709\u5173\u5982\u4f55\u4f7f\u7528\u5b83\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 Chart \u7684 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/wins/blob/master/charts/rancher-wins-upgrader/README.md"},"README.md"),"\u3002"))}m.isMDXComponent=!0}}]);