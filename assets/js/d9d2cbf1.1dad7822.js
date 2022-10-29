"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[44474],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(r),f=i,h=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(h,o(o({ref:t},l),{},{components:r})):n.createElement(h,o({ref:t},l))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},79996:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o=["components"],s={title:"6. Generate and View Traffic"},c=void 0,u={unversionedId:"how-to-guides/advanced-user-guides/istio-setup-guide/generate-and-view-traffic",id:"version-2.5/how-to-guides/advanced-user-guides/istio-setup-guide/generate-and-view-traffic",title:"6. Generate and View Traffic",description:"This section describes how to view the traffic that is being managed by Istio.",source:"@site/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/istio-setup-guide/generate-and-view-traffic.md",sourceDirName:"how-to-guides/advanced-user-guides/istio-setup-guide",slug:"/how-to-guides/advanced-user-guides/istio-setup-guide/generate-and-view-traffic",permalink:"/v2.5/how-to-guides/advanced-user-guides/istio-setup-guide/generate-and-view-traffic",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/istio-setup-guide/generate-and-view-traffic.md",tags:[],version:"2.5",lastUpdatedAt:1667002159,formattedLastUpdatedAt:"10/29/2022",frontMatter:{title:"6. Generate and View Traffic"},sidebar:"tutorialSidebar",previous:{title:"5. Set up Istio's Components for Traffic Management",permalink:"/v2.5/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-traffic-management"},next:{title:"CIS Scan Guides",permalink:"/v2.5/pages-for-subheaders/cis-scan-guides"}},l={},p=[{value:"The Kiali Traffic Graph",id:"the-kiali-traffic-graph",level:2}],d={toc:p};function f(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This section describes how to view the traffic that is being managed by Istio."),(0,a.kt)("h2",{id:"the-kiali-traffic-graph"},"The Kiali Traffic Graph"),(0,a.kt)("p",null,"The Istio overview page provides a link to the Kiali dashboard. From the Kiali dashboard, you are able to view graphs for each namespace. The Kiali graph provides a powerful way to visualize the topology of your Istio service mesh. It shows you which services communicate with each other."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Prerequisite:")," To enable traffic to show up in the graph, ensure you have prometheus installed in the cluster. Rancher-istio installs Kiali configured by default to work with the rancher-monitoring chart. You can use rancher-monitoring or install your own monitoring solution. Optional: you can change configuration on how data scraping occurs by setting the ",(0,a.kt)("a",{parentName:"p",href:"/v2.5/explanations/integrations-in-rancher/istio/configuration-options/selectors-and-scrape-configurations"},"Selectors & Scrape Configs")," options.")),(0,a.kt)("p",null,"To see the traffic graph,"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"From the ",(0,a.kt)("strong",{parentName:"li"},"Cluster Explorer"),", select ",(0,a.kt)("strong",{parentName:"li"},"Istio")," from the nav dropdown."),(0,a.kt)("li",{parentName:"ol"},"Click the ",(0,a.kt)("strong",{parentName:"li"},"Kiali")," link on the Istio ",(0,a.kt)("strong",{parentName:"li"},"Overview")," page."),(0,a.kt)("li",{parentName:"ol"},"Click on ",(0,a.kt)("strong",{parentName:"li"},"Graph")," in the side nav."),(0,a.kt)("li",{parentName:"ol"},"Change the namespace in the ",(0,a.kt)("strong",{parentName:"li"},"Namespace")," dropdown to view the traffic for each namespace.")),(0,a.kt)("p",null,"If you refresh the URL to the BookInfo app several times, you should be able to see green arrows on the Kiali graph showing traffic to ",(0,a.kt)("inlineCode",{parentName:"p"},"v1")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"v3")," of the ",(0,a.kt)("inlineCode",{parentName:"p"},"reviews")," service. The control panel on the right side of the graph lets you configure details including how many minutes of the most recent traffic should be shown on the graph."),(0,a.kt)("p",null,"For additional tools and visualizations, you can go to Grafana, and Prometheus dashboards from the ",(0,a.kt)("strong",{parentName:"p"},"Monitoring")," ",(0,a.kt)("strong",{parentName:"p"},"Overview")," page"))}f.isMDXComponent=!0}}]);