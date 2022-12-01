"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[37418],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?i.createElement(h,o(o({ref:t},p),{},{components:n})):i.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},45919:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const r={title:"Disabling Istio"},o=void 0,l={unversionedId:"integrations-in-rancher/istio/disable-istio",id:"integrations-in-rancher/istio/disable-istio",title:"Disabling Istio",description:"This section describes how to uninstall Istio in a cluster or disable a namespace, or workload.",source:"@site/docs/integrations-in-rancher/istio/disable-istio.md",sourceDirName:"integrations-in-rancher/istio",slug:"/integrations-in-rancher/istio/disable-istio",permalink:"/integrations-in-rancher/istio/disable-istio",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/integrations-in-rancher/istio/disable-istio.md",tags:[],version:"current",lastUpdatedAt:1666730461,formattedLastUpdatedAt:"Oct 25, 2022",frontMatter:{title:"Disabling Istio"},sidebar:"tutorialSidebar",previous:{title:"Role-based Access Control",permalink:"/integrations-in-rancher/istio/rbac-for-istio"},next:{title:"Configuration Options",permalink:"/pages-for-subheaders/configuration-options"}},s={},c=[{value:"Uninstall Istio in a Cluster",id:"uninstall-istio-in-a-cluster",level:2},{value:"Disable Istio in a Namespace",id:"disable-istio-in-a-namespace",level:2},{value:"Remove the Istio Sidecar from a Workload",id:"remove-the-istio-sidecar-from-a-workload",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This section describes how to uninstall Istio in a cluster or disable a namespace, or workload."),(0,a.kt)("h2",{id:"uninstall-istio-in-a-cluster"},"Uninstall Istio in a Cluster"),(0,a.kt)("p",null,"To uninstall Istio,"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,a.kt)("li",{parentName:"ol"},"Go to the cluster that you created and click ",(0,a.kt)("strong",{parentName:"li"},"Explore"),"."),(0,a.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,a.kt)("strong",{parentName:"li"},"Apps & Marketplace > Installed Apps"),"."),(0,a.kt)("li",{parentName:"ol"},"In the ",(0,a.kt)("inlineCode",{parentName:"li"},"istio-system")," namespace, go to ",(0,a.kt)("inlineCode",{parentName:"li"},"rancher-istio")," and click ",(0,a.kt)("strong",{parentName:"li"},"\u22ee > Delete"),"."),(0,a.kt)("li",{parentName:"ol"},"After ",(0,a.kt)("inlineCode",{parentName:"li"},"rancher-istio")," is deleted, you can then select all the remaining apps in the ",(0,a.kt)("inlineCode",{parentName:"li"},"istio-system")," namespace and click ",(0,a.kt)("strong",{parentName:"li"},"Delete"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," The ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-istio")," app in the cluster gets removed. The Istio sidecar cannot be deployed on any workloads in the cluster."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You can no longer disable and re-enable your Istio installation. If you would like to save your settings for a future install, view and save individual YAMLs to refer back to / reuse for future installations.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Troubleshooting Uninstall:")," If you didn't follow the uninstall steps, you may encounter a warning during uninstall:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'Error: uninstallation completed with 1 error(s): unable to build kubernetes objects for delete: unable to recognize "": no matches for kind "MonitoringDashboard" in version "monitoring.kiali.io/v1alpha1"')),(0,a.kt)("p",null,"This could mean a few things. You either selected all the apps in the ",(0,a.kt)("inlineCode",{parentName:"p"},"istio-system")," namespace and deleted them at the same time, or you deleted ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-istio")," chart dependencies prior to deleting the ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-istio")," chart. Since the uninstall did not complete properly, you will have resources remaining in the ",(0,a.kt)("inlineCode",{parentName:"p"},"istio-system")," namespace that you will need to manually clean up. Another option to avoid manual clean up is to install ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-istio")," again, then uninstall it in the correct order."),(0,a.kt)("h2",{id:"disable-istio-in-a-namespace"},"Disable Istio in a Namespace"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,a.kt)("li",{parentName:"ol"},"Go to the cluster that you created and click ",(0,a.kt)("strong",{parentName:"li"},"Explore"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Cluster > Projects/Namespaces"),"."),(0,a.kt)("li",{parentName:"ol"},"Go to the namespace where you want to enable Istio and click ",(0,a.kt)("strong",{parentName:"li"},"\u22ee  > Enable Istio Auto Injection"),". Alternately, click the namespace, and then on the namespace detail page, click ",(0,a.kt)("strong",{parentName:"li"},"\u22ee  > Enable Istio Auto Injection"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," When workloads are deployed in this namespace, they will not have the Istio sidecar."),(0,a.kt)("h2",{id:"remove-the-istio-sidecar-from-a-workload"},"Remove the Istio Sidecar from a Workload"),(0,a.kt)("p",null,"Disable Istio in the namespace, then redeploy the workloads with in it. They will be deployed without the Istio sidecar."))}d.isMDXComponent=!0}}]);