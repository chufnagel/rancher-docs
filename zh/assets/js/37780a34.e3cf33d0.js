"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[58182],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),i=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=i(a),u=n,d=m["".concat(p,".").concat(u)]||m[u]||h[u]||l;return a?r.createElement(d,o(o({ref:t},c),{},{components:a})):r.createElement(d,o({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var i=2;i<l;i++)o[i]=a[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(67294),n=a(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,o),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>u});var r=a(87462),n=a(67294),l=a(86010),o=a(72389),s=a(67392),p=a(7094),i=a(12466);const c="tabList__CuJ",h="tabItem_LNqP";function m(e){const{lazy:t,block:a,defaultValue:o,values:m,groupId:u,className:d}=e,k=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=m??k.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),b=(0,s.l)(N,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===o?o:o??k.find((e=>e.props.default))?.props.value??k[0].props.value;if(null!==v&&!N.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:f}=(0,p.U)(),[C,y]=(0,n.useState)(v),R=[],{blockElementScrollPositionUntilNextRender:E}=(0,i.o5)();if(null!=u){const e=g[u];null!=e&&e!==C&&N.some((t=>t.value===e))&&y(e)}const O=e=>{const t=e.currentTarget,a=R.indexOf(t),r=N[a].value;r!==C&&(E(t),y(r),null!=u&&f(u,String(r)))},H=e=>{let t=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const a=R.indexOf(e.currentTarget)+1;t=R[a]??R[0];break}case"ArrowLeft":{const a=R.indexOf(e.currentTarget)-1;t=R[a]??R[R.length-1];break}}t?.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},d)},N.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>R.push(e),onKeyDown:H,onClick:O},o,{className:(0,l.Z)("tabs__item",h,o?.className,{"tabs__item--active":C===t})}),a??t)}))),t?(0,n.cloneElement)(k.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function u(e){const t=(0,o.Z)();return n.createElement(m,(0,r.Z)({key:String(t)},e))}},97651:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>h});var r=a(87462),n=(a(67294),a(3905)),l=a(65488),o=a(85162);const s={title:"\u9009\u62e9 Rancher \u7248\u672c"},p=void 0,i={unversionedId:"getting-started/installation-and-upgrade/resources/choose-a-rancher-version",id:"version-2.6/getting-started/installation-and-upgrade/resources/choose-a-rancher-version",title:"\u9009\u62e9 Rancher \u7248\u672c",description:"\u672c\u8282\u4ecb\u7ecd\u5982\u4f55\u9009\u62e9 Rancher \u7248\u672c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/getting-started/installation-and-upgrade/resources/choose-a-rancher-version.md",sourceDirName:"getting-started/installation-and-upgrade/resources",slug:"/getting-started/installation-and-upgrade/resources/choose-a-rancher-version",permalink:"/zh/v2.6/getting-started/installation-and-upgrade/resources/choose-a-rancher-version",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/getting-started/installation-and-upgrade/resources/choose-a-rancher-version.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"2022\u5e7411\u670814\u65e5",frontMatter:{title:"\u9009\u62e9 Rancher \u7248\u672c"},sidebar:"tutorialSidebar",previous:{title:"\u8d44\u6e90",permalink:"/zh/v2.6/pages-for-subheaders/resources"},next:{title:"Helm \u7248\u672c\u8981\u6c42",permalink:"/zh/v2.6/getting-started/installation-and-upgrade/resources/helm-version-requirements"}},c={},h=[{value:"Helm Chart \u4ed3\u5e93",id:"helm-chart-\u4ed3\u5e93",level:3},{value:"Helm Chart \u7248\u672c",id:"helm-chart-\u7248\u672c",level:3},{value:"\u5207\u6362\u5230\u4e0d\u540c Helm Chart \u4ed3\u5e93",id:"\u5207\u6362\u5230\u4e0d\u540c-helm-chart-\u4ed3\u5e93",level:3},{value:"Server \u6807\u7b7e",id:"server-\u6807\u7b7e",level:3}],m={toc:h};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u672c\u8282\u4ecb\u7ecd\u5982\u4f55\u9009\u62e9 Rancher \u7248\u672c\u3002"),(0,n.kt)("p",null,"\u5728\u6211\u4eec\u63a8\u8350\u7528\u4e8e\u751f\u4ea7\u73af\u5883\u7684 Rancher \u9ad8\u53ef\u7528\u5b89\u88c5\u4e2d\uff0cRancher Server \u662f\u901a\u8fc7 Kubernetes \u96c6\u7fa4\u4e0a\u7684 ",(0,n.kt)("strong",{parentName:"p"},"Helm Chart")," \u5b89\u88c5\u7684\u3002\u8bf7\u53c2\u89c1 ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.6/getting-started/installation-and-upgrade/resources/helm-version-requirements"},"Helm \u7248\u672c\u8981\u6c42"),"\u9009\u62e9 Helm \u7248\u672c\u6765\u5b89\u88c5 Rancher\u3002"),(0,n.kt)("p",null,"\u5982\u679c\u4f60\u5728\u5f00\u53d1\u548c\u6d4b\u8bd5\u4e2d\u4f7f\u7528 Docker \u6765\u5b89\u88c5 Rancher\uff0c\u4f60\u9700\u8981\u628a Rancher \u4f5c\u4e3a\u4e00\u4e2a ",(0,n.kt)("strong",{parentName:"p"},"Docker \u955c\u50cf"),"\u6765\u5b89\u88c5\u3002"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"Helm Charts",mdxType:"TabItem"},(0,n.kt)("p",null,"\u5982\u679c Rancher Server \u662f",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.6/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster"},"\u5b89\u88c5\u5728 Kubernetes \u96c6\u7fa4\u4e0a"),"\u7684\uff0cRancher Server \u7684\u5b89\u88c5\uff0c\u5347\u7ea7\u548c\u56de\u6eda\u4e2d\uff0c\u90fd\u662f\u4f7f\u7528 Kubernetes \u96c6\u7fa4\u4e0a\u7684 Helm Chart \u6765\u5b89\u88c5 Rancher \u7684\u3002\u56e0\u6b64\uff0c\u5728\u51c6\u5907\u5b89\u88c5\u6216\u5347\u7ea7 Rancher \u9ad8\u53ef\u7528\u65f6\uff0c\u5fc5\u987b\u6dfb\u52a0\u5305\u542b\u7528\u4e8e\u5b89\u88c5 Rancher \u7684 Chart \u7684 Helm Chart \u4ed3\u5e93\u3002"),(0,n.kt)("p",null,"\u8bf7\u53c2\u89c1 ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.6/getting-started/installation-and-upgrade/resources/helm-version-requirements"},"Helm \u7248\u672c\u8981\u6c42"),"\u9009\u62e9 Helm \u7248\u672c\u6765\u5b89\u88c5 Rancher\u3002"),(0,n.kt)("h3",{id:"helm-chart-\u4ed3\u5e93"},"Helm Chart \u4ed3\u5e93"),(0,n.kt)("p",null,"Rancher \u63d0\u4f9b\u51e0\u4e2a\u53ef\u9009\u7684 Helm Chart \u4ed3\u5e93\u4f9b\u4f60\u9009\u62e9\u3002\u6700\u65b0\u7248\u6216\u7a33\u5b9a\u7248\u7684 Helm Chart \u4ed3\u5e93\u4e0e\u7528\u4e8e Docker \u5b89\u88c5\u4e2d\u7684 Docker \u6807\u7b7e\u5bf9\u5e94\u3002\u56e0\u6b64\uff0c",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-latest")," \u4ed3\u5e93\u5305\u542b\u6240\u6709\u6807\u8bb0\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher/rancher:latest")," \u7684 Rancher \u7248\u672c Chart\u3002\u5f53 Rancher \u7248\u672c\u5347\u7ea7\u5230 ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher/rancher:stable"),"\uff0c\u5b83\u4f1a\u88ab\u6dfb\u52a0\u5230 ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-stable")," \u4ed3\u5e93\u4e2d\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u6dfb\u52a0\u4ed3\u5e93\u7684\u547d\u4ee4"),(0,n.kt)("th",{parentName:"tr",align:null},"\u4ed3\u5e93\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rancher-latest"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"helm repo add rancher-latest https://releases.rancher.com/server-charts/latest")),(0,n.kt)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u6700\u65b0\u7248\u672c\u7684 Rancher \u7684 Helm Chart \u4ed3\u5e93\u3002\u5efa\u8bae\u4f7f\u7528\u6b64\u4ed3\u5e93\u6765\u6d4b\u8bd5\u65b0\u7248\u672c\u7684 Rancher\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rancher-stable"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"helm repo add rancher-stable https://releases.rancher.com/server-charts/stable")),(0,n.kt)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u8f83\u65e7\u7684\uff0c\u7a33\u5b9a\u7684\u7248\u672c\u7684 Rancher \u7684 Helm Chart \u4ed3\u5e93\u3002\u5efa\u8bae\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u4f7f\u7528\u6b64\u4ed3\u5e93\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rancher-alpha"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"helm repo add rancher-alpha https://releases.rancher.com/server-charts/alpha")),(0,n.kt)("td",{parentName:"tr",align:null},"\u6dfb\u52a0 alpha \u7248\u672c\u7684 Rancher \u7684 Helm Chart \u4ed3\u5e93\uff0c\u4ee5\u9884\u89c8\u5373\u5c06\u53d1\u5e03\u7684\u7248\u672c\u3002\u4e0d\u5efa\u8bae\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u4f7f\u7528\u8fd9\u4e9b\u7248\u672c\u3002\u65e0\u8bba\u662f\u4ec0\u4e48\u4ed3\u5e93\uff0c\u5747\u4e0d\u652f\u6301 ",(0,n.kt)("em",{parentName:"td"},"\u5347\u7ea7")," \u6216 ",(0,n.kt)("em",{parentName:"td"},"\u5347\u7ea7\u5230")," rancher-alpha \u4ed3\u5e93\u4e2d\u7684\u4efb\u4f55 Chart\u3002")))),(0,n.kt)("p",null,"\u4e86\u89e3\u4f55\u65f6\u9009\u62e9\u8fd9\u4e9b\u4ed3\u5e93\uff0c\u8bf7\u53c2\u89c1",(0,n.kt)("a",{parentName:"p",href:"#%E5%88%87%E6%8D%A2%E5%88%B0%E4%B8%8D%E5%90%8C-helm-chart-%E4%BB%93%E5%BA%93"},"\u5207\u6362\u5230\u4e0d\u540c Helm Chart \u4ed3\u5e93"),"\u3002"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},"rancher-stable")," \u4ed3\u5e93\u4e2d\u7684\u6240\u6709 Chart \u90fd\u4e0e ",(0,n.kt)("inlineCode",{parentName:"p"},"stable")," \u6807\u8bb0\u7684 Rancher \u7248\u672c\u5bf9\u5e94\u3002")),(0,n.kt)("h3",{id:"helm-chart-\u7248\u672c"},"Helm Chart \u7248\u672c"),(0,n.kt)("p",null,"Rancher Helm Chart \u7248\u672c\u4e0e Rancher \u7248\u672c\uff08\u5373 ",(0,n.kt)("inlineCode",{parentName:"p"},"appVersion"),"\uff09\u5bf9\u5e94\u3002\u6dfb\u52a0\u4ed3\u5e93\u540e\uff0c\u4f60\u53ef\u4ee5\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u641c\u7d22\u53ef\u7528\u7248\u672c\uff1a",(0,n.kt)("br",null),"\n","\xa0","\xa0","\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"helm search repo --versions")),(0,n.kt)("p",null,"\u5982\u679c\u4f60\u6709\u591a\u4e2a\u4ed3\u5e93\uff0c\u4f60\u53ef\u6307\u5b9a\u4ed3\u5e93\u540d\u79f0\uff0c\u5373\uff1a",(0,n.kt)("inlineCode",{parentName:"p"},"helm search repo rancher-stable/rancher --versions")," ",(0,n.kt)("br",null),"\n\u8be6\u60c5\u8bf7\u8bbf\u95ee ",(0,n.kt)("a",{parentName:"p",href:"https://helm.sh/docs/helm/helm_search_repo/"},"https://helm.sh/docs/helm/helm_search_repo/")),(0,n.kt)("p",null,"\u8981\u83b7\u53d6\u6240\u9009\u4ed3\u5e93\u7684\u6307\u5b9a\u7248\u672c\uff0c\u53c2\u89c1\u5982\u4e0b\u793a\u4f8b\u6307\u5b9a ",(0,n.kt)("inlineCode",{parentName:"p"},"--version")," \u53c2\u6570\uff1a",(0,n.kt)("br",null),"\n","\xa0","\xa0","\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"helm fetch rancher-stable/rancher --version=2.4.8")),(0,n.kt)("h3",{id:"\u5207\u6362\u5230\u4e0d\u540c-helm-chart-\u4ed3\u5e93"},"\u5207\u6362\u5230\u4e0d\u540c Helm Chart \u4ed3\u5e93"),(0,n.kt)("p",null,"\u5b89\u88c5 Rancher \u540e\uff0c\u5982\u679c\u60f3\u4fee\u6539\u5b89\u88c5 Rancher \u7684 Helm Chart \u4ed3\u5e93\uff0c\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u64cd\u4f5c\u3002"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"\u7531\u4e8e rancher-alpha \u4ed3\u5e93\u53ea\u5305\u542b alpha \u7248\u672c Chart\uff0c\u56e0\u6b64\u4e0d\u652f\u6301\u4ece rancher alpha \u4ed3\u5e93\u5207\u6362\u5230 rancher-stable \u6216 rancher-latest \u4ed3\u5e93\u4ee5\u8fdb\u884c\u5347\u7ea7\u3002")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Latest\uff1a\u5efa\u8bae\u7528\u4e8e\u8bd5\u7528\u6700\u65b0\u529f\u80fd",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"helm repo add rancher-latest https://releases.rancher.com/server-charts/latest\n"))),(0,n.kt)("li",{parentName:"ul"},"Stable\uff1a\u5efa\u8bae\u7528\u4e8e\u751f\u4ea7\u73af\u5883",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"helm repo add rancher-stable https://releases.rancher.com/server-charts/stable\n"))),(0,n.kt)("li",{parentName:"ul"},"Alpha\uff1a\u5373\u5c06\u53d1\u5e03\u7684\u5b9e\u9a8c\u6027\u9884\u89c8\u3002",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"helm repo add rancher-alpha https://releases.rancher.com/server-charts/alpha\n"))," \u6ce8\u610f\uff1a\u4e0d\u652f\u6301\u5347\u7ea7\u5230 Alpha \u7248\u3001\u4ece Alpha \u7248\u5347\u7ea7\u6216\u5728 Alpha \u7248\u4e4b\u95f4\u5347\u7ea7\u3002")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5217\u51fa\u5f53\u524d Helm Chart \u4ed3\u5e93\u3002"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"helm repo list\n\nNAME                  URL\nstable                https://charts.helm.sh/stable\nrancher-<CHART_REPO>        https://releases.rancher.com/server-charts/<CHART_REPO>\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5220\u9664\u5305\u542b\u5b89\u88c5 Rancher \u65f6\u7528\u7684 Chart \u7684 Helm Chart \u4ed3\u5e93\u3002\u662f ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-stable")," \u6216 ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-latest")," \u53d6\u51b3\u4e8e\u4f60\u521d\u59cb\u5b89\u88c5\u65f6\u7684\u9009\u62e9\u3002"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"helm repo remove rancher-<CHART_REPO>\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6dfb\u52a0\u4f60\u8981\u7528\u4e8e\u5b89\u88c5 Rancher \u7684 Helm Chart \u4ed3\u5e93\u3002"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"helm repo add rancher-<CHART_REPO> https://releases.rancher.com/server-charts/<CHART_REPO>\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\uff0c\u4ece\u65b0\u7684 Helm Chart \u4ed3\u5e93",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.6/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades"},"\u5347\u7ea7 Rancher"),"\u3002")))),(0,n.kt)(o.Z,{value:"Docker \u955c\u50cf",mdxType:"TabItem"},(0,n.kt)("p",null,"\u5728\u6267\u884c ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.6/pages-for-subheaders/rancher-on-a-single-node-with-docker"},"Docker \u5b89\u88c5"),"\u3001\u5347\u7ea7\u6216\u56de\u6eda\u65f6\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,n.kt)("em",{parentName:"p"},"tags")," \u6765\u5b89\u88c5\u7279\u5b9a\u7248\u672c\u7684 Rancher\u3002"),(0,n.kt)("h3",{id:"server-\u6807\u7b7e"},"Server \u6807\u7b7e"),(0,n.kt)("p",null,"Rancher Server \u4ee5 Docker \u955c\u50cf\u7684\u5f62\u5f0f\u5206\u53d1\u5e76\u9644\u6709\u6807\u7b7e\u3002\u4f60\u53ef\u4ee5\u5728\u8f93\u5165\u547d\u4ee4\u90e8\u7f72 Rancher \u65f6\u6307\u5b9a\u6807\u7b7e\u3002\u8bf7\u8bb0\u4f4f\uff0c\u5982\u679c\u4f60\u6307\u5b9a\u4e86\u6807\u7b7e\uff0c\u4f46\u662f\u6ca1\u6709\u6307\u5b9a\u7248\u672c\uff08\u5982 ",(0,n.kt)("inlineCode",{parentName:"p"},"latest")," \u6216 ",(0,n.kt)("inlineCode",{parentName:"p"},"stable"),"\uff09\uff0c\u4f60\u5fc5\u987b\u663e\u5f0f\u62c9\u53d6\u8be5\u955c\u50cf\u6807\u7b7e\u7684\u65b0\u7248\u672c\u3002\u5426\u5219\uff0c\u5c06\u4f7f\u7528\u7f13\u5b58\u5728\u4e3b\u673a\u4e0a\u7684\u955c\u50cf\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u6807\u7b7e"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"rancher/rancher:latest")),(0,n.kt)("td",{parentName:"tr",align:null},"\u6700\u65b0\u7684\u5f00\u53d1\u7248\u672c\u3002\u8fd9\u4e9b\u7248\u672c\u901a\u8fc7\u4e86\u6211\u4eec\u7684 CI \u81ea\u52a8\u5316\u9a8c\u8bc1\u3002\u4e0d\u63a8\u8350\u5728\u751f\u4ea7\u73af\u5883\u4f7f\u7528\u8fd9\u4e9b\u7248\u672c\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"rancher/rancher:stable")),(0,n.kt)("td",{parentName:"tr",align:null},"\u6700\u65b0\u7684\u7a33\u5b9a\u7248\u672c\u3002\u63a8\u8350\u5c06\u6b64\u6807\u7b7e\u7528\u4e8e\u751f\u4ea7\u73af\u5883\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"rancher/rancher:<v2.X.X>")),(0,n.kt)("td",{parentName:"tr",align:null},"\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u524d\u7248\u672c\u4e2d\u7684\u6807\u7b7e\u6765\u6307\u5b9a\u8981\u5b89\u88c5\u7684 Rancher \u7248\u672c\u3002\u8bbf\u95ee DockerHub \u67e5\u770b\u53ef\u7528\u7684\u7248\u672c\u3002")))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"master")," \u548c\u5e26\u6709 ",(0,n.kt)("inlineCode",{parentName:"li"},"-rc")," \u6216\u5176\u4ed6\u540e\u7f00\u7684\u6807\u7b7e\u662f\u4f9b Rancher \u6d4b\u8bd5\u56e2\u961f\u9a8c\u8bc1\u7528\u7684\u3002\u8fd9\u4e9b\u6807\u7b7e\u4e0d\u53d7\u5b98\u65b9\u652f\u6301\uff0c\u56e0\u6b64\u8bf7\u4e0d\u8981\u4f7f\u7528\u8fd9\u4e9b\u6807\u7b7e\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5b89\u88c5 alpha \u7248\u672c\u8fdb\u884c\u9884\u89c8\uff1a\u4f7f\u7528\u6211\u4eec\u7684",(0,n.kt)("a",{parentName:"li",href:"https://forums.rancher.com/c/announcements"},"\u516c\u544a\u9875\u9762"),"\u4e2d\u5217\u51fa\u7684 alpha \u6807\u7b7e\uff08\u4f8b\u5982\uff0c",(0,n.kt)("inlineCode",{parentName:"li"},"v2.2.0-alpha1"),"\uff09\u8fdb\u884c\u5b89\u88c5\u3002\u4e0d\u652f\u6301\u5347\u7ea7\u6216\u5347\u7ea7\u5230 Alpha \u7248\u672c\u3002"))))))}u.isMDXComponent=!0}}]);