"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[59358],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>c});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),d=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=d(e.components);return n.createElement(l.Provider,{value:a},e.children)},h={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(t),c=r,m=u["".concat(l,".").concat(c)]||u[c]||h[c]||o;return t?n.createElement(m,i(i({ref:a},p),{},{components:t})):n.createElement(m,i({ref:a},p))}));function c(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},85162:(e,a,t)=>{t.d(a,{Z:()=>i});var n=t(67294),r=t(86010);const o="tabItem_Ymn6";function i(e){let{children:a,hidden:t,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:t},a)}},65488:(e,a,t)=>{t.d(a,{Z:()=>c});var n=t(87462),r=t(67294),o=t(86010),i=t(72389),s=t(67392),l=t(7094),d=t(12466);const p="tabList__CuJ",h="tabItem_LNqP";function u(e){const{lazy:a,block:t,defaultValue:i,values:u,groupId:c,className:m}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=u??g.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),b=(0,s.l)(f,((e,a)=>e.value===a.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===i?i:i??g.find((e=>e.props.default))?.props.value??g[0].props.value;if(null!==k&&!f.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:v}=(0,l.U)(),[y,w]=(0,r.useState)(k),C=[],{blockElementScrollPositionUntilNextRender:O}=(0,d.o5)();if(null!=c){const e=N[c];null!=e&&e!==y&&f.some((a=>a.value===e))&&w(e)}const M=e=>{const a=e.currentTarget,t=C.indexOf(a),n=f[t].value;n!==y&&(O(a),w(n),null!=c&&v(c,String(n)))},T=e=>{let a=null;switch(e.key){case"Enter":M(e);break;case"ArrowRight":{const t=C.indexOf(e.currentTarget)+1;a=C[t]??C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;a=C[t]??C[C.length-1];break}}a?.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},m)},f.map((e=>{let{value:a,label:t,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:y===a?0:-1,"aria-selected":y===a,key:a,ref:e=>C.push(e),onKeyDown:T,onClick:M},i,{className:(0,o.Z)("tabs__item",h,i?.className,{"tabs__item--active":y===a})}),t??a)}))),a?(0,r.cloneElement)(g.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==y})))))}function c(e){const a=(0,i.Z)();return r.createElement(u,(0,n.Z)({key:String(a)},e))}},83106:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>d,toc:()=>h});var n=t(87462),r=(t(67294),t(3905)),o=t(65488),i=t(85162);const s={title:"Persistent Grafana Dashboards"},l=void 0,d={unversionedId:"how-to-guides/advanced-user-guides/monitoring-alerting-guides/create-persistent-grafana-dashboard",id:"version-2.6/how-to-guides/advanced-user-guides/monitoring-alerting-guides/create-persistent-grafana-dashboard",title:"Persistent Grafana Dashboards",description:"To allow the Grafana dashboard to persist after the Grafana instance restarts, add the dashboard configuration JSON into a ConfigMap. ConfigMaps also allow the dashboards to be deployed with a GitOps or CD based approach. This allows the dashboard to be put under version control.",source:"@site/versioned_docs/version-2.6/how-to-guides/advanced-user-guides/monitoring-alerting-guides/create-persistent-grafana-dashboard.md",sourceDirName:"how-to-guides/advanced-user-guides/monitoring-alerting-guides",slug:"/how-to-guides/advanced-user-guides/monitoring-alerting-guides/create-persistent-grafana-dashboard",permalink:"/v2.6/how-to-guides/advanced-user-guides/monitoring-alerting-guides/create-persistent-grafana-dashboard",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/advanced-user-guides/monitoring-alerting-guides/create-persistent-grafana-dashboard.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"Nov 14, 2022",frontMatter:{title:"Persistent Grafana Dashboards"},sidebar:"tutorialSidebar",previous:{title:"Customizing Grafana Dashboards",permalink:"/v2.6/how-to-guides/advanced-user-guides/monitoring-alerting-guides/customize-grafana-dashboard"},next:{title:"Debugging High Memory Usage",permalink:"/v2.6/how-to-guides/advanced-user-guides/monitoring-alerting-guides/debug-high-memory-usage"}},p={},h=[{value:"Creating a Persistent Grafana Dashboard",id:"creating-a-persistent-grafana-dashboard",level:2},{value:"1. Get the JSON model of the dashboard that you want to persist",id:"1-get-the-json-model-of-the-dashboard-that-you-want-to-persist",level:3},{value:"2. Create a ConfigMap using the Grafana JSON model",id:"2-create-a-configmap-using-the-grafana-json-model",level:3},{value:"Configuring Namespaces for the Grafana Dashboard ConfigMap",id:"configuring-namespaces-for-the-grafana-dashboard-configmap",level:3},{value:"Known Issues",id:"known-issues",level:2}],u={toc:h};function c(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To allow the Grafana dashboard to persist after the Grafana instance restarts, add the dashboard configuration JSON into a ConfigMap. ConfigMaps also allow the dashboards to be deployed with a GitOps or CD based approach. This allows the dashboard to be put under version control."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#creating-a-persistent-grafana-dashboard"},"Creating a Persistent Grafana Dashboard")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#known-issues"},"Known Issues"))),(0,r.kt)("h2",{id:"creating-a-persistent-grafana-dashboard"},"Creating a Persistent Grafana Dashboard"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Rancher v2.5.8+",mdxType:"TabItem"},(0,r.kt)("admonition",{title:"Prerequisites:",type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"The monitoring application needs to be installed."),(0,r.kt)("li",{parentName:"ul"},"To create the persistent dashboard, you must have at least the ",(0,r.kt)("strong",{parentName:"li"},"Manage Config Maps")," Rancher RBAC permissions assigned to you in the project or namespace that contains the Grafana Dashboards. This correlates to the ",(0,r.kt)("inlineCode",{parentName:"li"},"monitoring-dashboard-edit")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"monitoring-dashboard-admin")," Kubernetes native RBAC Roles exposed by the Monitoring chart."),(0,r.kt)("li",{parentName:"ul"},"To see the links to the external monitoring UIs, including Grafana dashboards, you will need at least a ",(0,r.kt)("a",{parentName:"li",href:"/v2.6/integrations-in-rancher/monitoring-and-alerting/rbac-for-monitoring#users-with-rancher-cluster-manager-based-permissions"},"project-member role.")))),(0,r.kt)("h3",{id:"1-get-the-json-model-of-the-dashboard-that-you-want-to-persist"},"1. Get the JSON model of the dashboard that you want to persist"),(0,r.kt)("p",null,"To create a persistent dashboard, you will need to get the JSON model of the dashboard you want to persist. You can use a premade dashboard or build your own."),(0,r.kt)("p",null,"To use a premade dashboard, go to ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/grafana/dashboards"},"https://grafana.com/grafana/dashboards"),", open up its detail page, and click on the ",(0,r.kt)("strong",{parentName:"p"},"Download JSON")," button to get the JSON model for the next step."),(0,r.kt)("p",null,"To use your own dashboard:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on the link to open Grafana. On the cluster detail page, click ",(0,r.kt)("strong",{parentName:"p"},"Monitoring"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Log in to Grafana. Note: The default Admin username and password for the Grafana instance is ",(0,r.kt)("inlineCode",{parentName:"p"},"admin/prom-operator"),". Alternative credentials can also be supplied on deploying or upgrading the chart."),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Regardless of who has the password, in order to access the Grafana instance, you still need at least the ",(0,r.kt)("b",null,"Manage Services")," or ",(0,r.kt)("b",null,"View Monitoring")," permissions in the project that Rancher Monitoring is deployed into. Alternative credentials can also be supplied on deploying or upgrading the chart."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a dashboard using Grafana's UI. Once complete, go to the dashboard's settings by clicking on the gear icon in the top navigation menu. In the left navigation menu, click ",(0,r.kt)("strong",{parentName:"p"},"JSON Model"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the JSON data structure that appears."))),(0,r.kt)("h3",{id:"2-create-a-configmap-using-the-grafana-json-model"},"2. Create a ConfigMap using the Grafana JSON model"),(0,r.kt)("p",null,"Create a ConfigMap in the namespace that contains your Grafana Dashboards (e.g. cattle-dashboards by default)."),(0,r.kt)("p",null,"The ConfigMap should look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  labels:\n    grafana_dashboard: "1"\n  name: <dashboard-name>\n  namespace: cattle-dashboards # Change if using a non-default namespace\ndata:\n  <dashboard-name>.json: |-\n    <copied-json>\n')),(0,r.kt)("p",null,"By default, Grafana is configured to watch all ConfigMaps with the ",(0,r.kt)("inlineCode",{parentName:"p"},"grafana_dashboard")," label within the ",(0,r.kt)("inlineCode",{parentName:"p"},"cattle-dashboards")," namespace."),(0,r.kt)("p",null,"To specify that you would like Grafana to watch for ConfigMaps across all namespaces, refer to ",(0,r.kt)("a",{parentName:"p",href:"#configuring-namespaces-for-the-grafana-dashboard-configmap"},"this section.")),(0,r.kt)("p",null,"To create the ConfigMap in the Rancher UI,"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,r.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,r.kt)("li",{parentName:"ol"},"On the ",(0,r.kt)("strong",{parentName:"li"},"Clusters")," page, go to the cluster where you want to see the visualizations and click ",(0,r.kt)("strong",{parentName:"li"},"Explore"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"More Resources > Core > ConfigMaps"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Create"),"."),(0,r.kt)("li",{parentName:"ol"},"Set up the key-value pairs similar to the example above. When entering the value for ",(0,r.kt)("inlineCode",{parentName:"li"},"<dashboard-name>.json"),", click ",(0,r.kt)("strong",{parentName:"li"},"Read from File")," to upload the JSON data model as the value."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Create"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," After the ConfigMap is created, it should show up on the Grafana UI and be persisted even if the Grafana pod is restarted."),(0,r.kt)("p",null,"Dashboards that are persisted using ConfigMaps cannot be deleted or edited from the Grafana UI."),(0,r.kt)("p",null,'If you attempt to delete the dashboard in the Grafana UI, you will see the error message "Dashboard cannot be deleted because it was provisioned." To delete the dashboard, you will need to delete the ConfigMap.'),(0,r.kt)("h3",{id:"configuring-namespaces-for-the-grafana-dashboard-configmap"},"Configuring Namespaces for the Grafana Dashboard ConfigMap"),(0,r.kt)("p",null,"To specify that you would like Grafana to watch for ConfigMaps across all namespaces, set this value in the ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher-monitoring")," Helm chart:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"grafana.sidecar.dashboards.searchNamespace=ALL\n")),(0,r.kt)("p",null,"Note that the RBAC roles exposed by the Monitoring chart to add Grafana Dashboards are still restricted to giving permissions for users to add dashboards in the namespace defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"grafana.dashboards.namespace"),", which defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"cattle-dashboards"),".")),(0,r.kt)(i.Z,{value:"Rancher before v2.5.8",mdxType:"TabItem"},(0,r.kt)("admonition",{title:"Prerequisites:",type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"The monitoring application needs to be installed."),(0,r.kt)("li",{parentName:"ul"},"You must have the cluster-admin ClusterRole permission."))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the upper left corner, click ",(0,r.kt)("strong",{parentName:"p"},"\u2630 > Cluster Management"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the ",(0,r.kt)("strong",{parentName:"p"},"Clusters")," page, go to the cluster where you want to configure the Grafana namespace and click ",(0,r.kt)("strong",{parentName:"p"},"Explore"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the left navigation bar, click ",(0,r.kt)("strong",{parentName:"p"},"Monitoring"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Grafana"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Log in to Grafana. Note: The default Admin username and password for the Grafana instance is ",(0,r.kt)("inlineCode",{parentName:"p"},"admin/prom-operator"),". Alternative credentials can also be supplied on deploying or upgrading the chart."),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Regardless of who has the password, cluster administrator permission in Rancher is still required to access the Grafana instance."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to the dashboard that you want to persist. In the top navigation menu, go to the dashboard settings by clicking the gear icon.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the left navigation menu, click ",(0,r.kt)("strong",{parentName:"p"},"JSON Model"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the JSON data structure that appears.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a ConfigMap in the ",(0,r.kt)("inlineCode",{parentName:"p"},"cattle-dashboards")," namespace. The ConfigMap needs to have the label ",(0,r.kt)("inlineCode",{parentName:"p"},'grafana_dashboard: "1"'),". Paste the JSON into the ConfigMap in the format shown in the example below:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  labels:\n    grafana_dashboard: "1"\n  name: <dashboard-name>\n  namespace: cattle-dashboards\ndata:\n  <dashboard-name>.json: |-\n    <copied-json>\n')))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," After the ConfigMap is created, it should show up on the Grafana UI and be persisted even if the Grafana pod is restarted."),(0,r.kt)("p",null,'Dashboards that are persisted using ConfigMaps cannot be deleted from the Grafana UI. If you attempt to delete the dashboard in the Grafana UI, you will see the error message "Dashboard cannot be deleted because it was provisioned." To delete the dashboard, you will need to delete the ConfigMap.'),(0,r.kt)("p",null,"To prevent the persistent dashboard from being deleted when Monitoring v2 is uninstalled, add the following annotation to the ",(0,r.kt)("inlineCode",{parentName:"p"},"cattle-dashboards")," namespace:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'helm.sh/resource-policy: "keep"\n')))),(0,r.kt)("h2",{id:"known-issues"},"Known Issues"),(0,r.kt)("p",null,"For users who are using Monitoring V2 v9.4.203 or below, uninstalling the Monitoring chart will delete the ",(0,r.kt)("inlineCode",{parentName:"p"},"cattle-dashboards")," namespace, which will delete all persisted dashboards, unless the namespace is marked with the annotation ",(0,r.kt)("inlineCode",{parentName:"p"},'helm.sh/resource-policy: "keep"'),"."),(0,r.kt)("p",null,"This annotation will be added by default in the new monitoring chart released by Rancher v2.5.8, but it still needs to be manually applied for users of earlier Rancher versions."))}c.isMDXComponent=!0}}]);