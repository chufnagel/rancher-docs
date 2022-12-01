"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[58270],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,h=m["".concat(i,".").concat(d)]||m[d]||l[d]||n;return r?a.createElement(h,s(s({ref:t},u),{},{components:r})):a.createElement(h,s({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var p=2;p<n;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},39599:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>l,frontMatter:()=>n,metadata:()=>c,toc:()=>p});var a=r(87462),o=(r(67294),r(3905));const n={title:"Project Resource Quotas"},s=void 0,c={unversionedId:"pages-for-subheaders/manage-project-resource-quotas",id:"version-2.5/pages-for-subheaders/manage-project-resource-quotas",title:"Project Resource Quotas",description:"In situations where several teams share a cluster, one team may overconsume the resources available: CPU, memory, storage, services, Kubernetes objects like pods or secrets, and so on.  To prevent this overconsumption, you can apply a resource quota, which is a Rancher feature that limits the resources available to a project or namespace.",source:"@site/versioned_docs/version-2.5/pages-for-subheaders/manage-project-resource-quotas.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/manage-project-resource-quotas",permalink:"/zh/v2.5/pages-for-subheaders/manage-project-resource-quotas",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/pages-for-subheaders/manage-project-resource-quotas.md",tags:[],version:"2.5",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"2022\u5e749\u670823\u65e5",frontMatter:{title:"Project Resource Quotas"},sidebar:"tutorialSidebar",previous:{title:"Pod Security Policies",permalink:"/zh/v2.5/how-to-guides/advanced-user-guides/manage-projects/manage-pod-security-policies"},next:{title:"How Resource Quotas Work in Rancher Projects",permalink:"/zh/v2.5/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/about-project-resource-quotas"}},i={},p=[{value:"Applying Resource Quotas to Existing Projects",id:"applying-resource-quotas-to-existing-projects",level:3}],u={toc:p};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In situations where several teams share a cluster, one team may overconsume the resources available: CPU, memory, storage, services, Kubernetes objects like pods or secrets, and so on.  To prevent this overconsumption, you can apply a ",(0,o.kt)("em",{parentName:"p"},"resource quota"),", which is a Rancher feature that limits the resources available to a project or namespace."),(0,o.kt)("p",null,"This page is a how-to guide for creating resource quotas in existing projects."),(0,o.kt)("p",null,"Resource quotas can also be set when a new project is created. For details, refer to the section on ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.5/how-to-guides/advanced-user-guides/manage-clusters/projects-and-namespaces#creating-projects"},"creating new projects.")),(0,o.kt)("p",null,"Resource quotas in Rancher include the same functionality as the ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/policy/resource-quotas/"},"native version of Kubernetes"),". In Rancher, resource quotas have been extended so that you can apply them to projects. For details on how resource quotas work with projects in Rancher, refer to ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.5/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/about-project-resource-quotas"},"this page.")),(0,o.kt)("h3",{id:"applying-resource-quotas-to-existing-projects"},"Applying Resource Quotas to Existing Projects"),(0,o.kt)("p",null,"Edit ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.5/pages-for-subheaders/manage-project-resource-quotas"},"resource quotas")," when:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You want to limit the resources that a project and its namespaces can use."),(0,o.kt)("li",{parentName:"ul"},"You want to scale the resources available to a project up or down when a research quota is already in effect.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the ",(0,o.kt)("strong",{parentName:"p"},"Global")," view, open the cluster containing the project to which you want to apply a resource quota.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the main menu, select ",(0,o.kt)("strong",{parentName:"p"},"Projects/Namespaces"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Find the project that you want to add a resource quota to. From that project, select ",(0,o.kt)("strong",{parentName:"p"},"\u22ee"," > Edit"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Expand ",(0,o.kt)("strong",{parentName:"p"},"Resource Quotas")," and click ",(0,o.kt)("strong",{parentName:"p"},"Add Quota"),". Alternatively, you can edit existing quotas.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select a Resource Type. For more information on types, see the ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.5/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/resource-quota-types"},"quota type reference."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter values for the ",(0,o.kt)("strong",{parentName:"p"},"Project Limit")," and the ",(0,o.kt)("strong",{parentName:"p"},"Namespace Default Limit"),"."),(0,o.kt)("table",{parentName:"li"},(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Project Limit"),(0,o.kt)("td",{parentName:"tr",align:null},"The overall resource limit for the project.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Namespace Default Limit"),(0,o.kt)("td",{parentName:"tr",align:null},"The default resource limit available for each namespace. This limit is propagated to each namespace in the project. The combined limit of all project namespaces shouldn't exceed the project limit."))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Optional:")," Add more quotas.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Create"),"."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," The resource quota is applied to your project and namespaces. When you add more namespaces in the future, Rancher validates that the project can accommodate the namespace. If the project can't allocate the resources, you may still create namespaces, but they will be given a resource quota of 0. Subsequently, Rancher will not allow you to create any resources restricted by this quota."))}l.isMDXComponent=!0}}]);