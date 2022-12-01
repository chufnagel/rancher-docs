"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[84549],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=c(a),d=r,m=h["".concat(s,".").concat(d)]||h[d]||p[d]||o;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(87462),r=a(67294),o=a(86010),i=a(72389),l=a(67392),s=a(7094),c=a(12466);const u="tabList__CuJ",p="tabItem_LNqP";function h(e){const{lazy:t,block:a,defaultValue:i,values:h,groupId:d,className:m}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=h??f.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),g=(0,l.l)(k,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===i?i:i??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==b&&!k.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:v}=(0,s.U)(),[N,w]=(0,r.useState)(b),T=[],{blockElementScrollPositionUntilNextRender:C}=(0,c.o5)();if(null!=d){const e=y[d];null!=e&&e!==N&&k.some((t=>t.value===e))&&w(e)}const P=e=>{const t=e.currentTarget,a=T.indexOf(t),n=k[a].value;n!==N&&(C(t),w(n),null!=d&&v(d,String(n)))},I=e=>{let t=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":{const a=T.indexOf(e.currentTarget)+1;t=T[a]??T[0];break}case"ArrowLeft":{const a=T.indexOf(e.currentTarget)-1;t=T[a]??T[T.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},m)},k.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>T.push(e),onKeyDown:I,onClick:P},i,{className:(0,o.Z)("tabs__item",p,i?.className,{"tabs__item--active":N===t})}),a??t)}))),t?(0,r.cloneElement)(f.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function d(e){const t=(0,i.Z)();return r.createElement(h,(0,n.Z)({key:String(t)},e))}},88683:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(65488),i=a(85162);const l={title:"API"},s=void 0,c={unversionedId:"pages-for-subheaders/about-the-api",id:"pages-for-subheaders/about-the-api",title:"API",description:"How to use the API",source:"@site/docs/pages-for-subheaders/about-the-api.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/about-the-api",permalink:"/pages-for-subheaders/about-the-api",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/about-the-api.md",tags:[],version:"current",lastUpdatedAt:1666730461,formattedLastUpdatedAt:"Oct 25, 2022",frontMatter:{title:"API"},sidebar:"tutorialSidebar",previous:{title:"kubectl Utility",permalink:"/reference-guides/cli-with-rancher/kubectl-utility"},next:{title:"API Tokens",permalink:"/reference-guides/about-the-api/api-tokens"}},u={},p=[{value:"How to use the API",id:"how-to-use-the-api",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Making requests",id:"making-requests",level:2},{value:"Filtering",id:"filtering",level:2},{value:"Sorting",id:"sorting",level:2},{value:"Pagination",id:"pagination",level:2},{value:"Capturing Rancher API Calls",id:"capturing-rancher-api-calls",level:2}],h={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"how-to-use-the-api"},"How to use the API"),(0,r.kt)("p",null,"The API has its own user interface accessible from a web browser.  This is an easy way to see resources, perform actions, and see the equivalent cURL or HTTP request & response.  To access it:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Rancher v2.6.4+",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click on your user avatar in the upper right corner."),(0,r.kt)("li",{parentName:"ol"},"Click  ",(0,r.kt)("strong",{parentName:"li"},"Account & API Keys"),"."),(0,r.kt)("li",{parentName:"ol"},"Under the ",(0,r.kt)("strong",{parentName:"li"},"API Keys")," section, find the ",(0,r.kt)("strong",{parentName:"li"},"API Endpoint")," field and click the link. The link will look something like ",(0,r.kt)("inlineCode",{parentName:"li"},"https://<RANCHER_FQDN>/v3"),", where ",(0,r.kt)("inlineCode",{parentName:"li"},"<RANCHER_FQDN>")," is the fully qualified domain name of your Rancher deployment."))),(0,r.kt)(i.Z,{value:"Rancher before v2.6.4",mdxType:"TabItem"},(0,r.kt)("p",null,"Go to the URL endpoint at ",(0,r.kt)("inlineCode",{parentName:"p"},"https://<RANCHER_FQDN>/v3"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"<RANCHER_FQDN>")," is the fully qualified domain name of your Rancher deployment."))),(0,r.kt)("h2",{id:"authentication"},"Authentication"),(0,r.kt)("p",null,"API requests must include authentication information.  Authentication is done with HTTP basic authentication using ",(0,r.kt)("a",{parentName:"p",href:"/reference-guides/user-settings/api-keys"},"API Keys"),". API keys can create new clusters and have access to multiple clusters via ",(0,r.kt)("inlineCode",{parentName:"p"},"/v3/clusters/"),". ",(0,r.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles"},"Cluster and project roles")," apply to these keys and restrict what clusters and projects the account can see and what actions they can take."),(0,r.kt)("p",null,"By default, some cluster-level API tokens are generated with infinite time-to-live (",(0,r.kt)("inlineCode",{parentName:"p"},"ttl=0"),"). In other words, API tokens with ",(0,r.kt)("inlineCode",{parentName:"p"},"ttl=0")," never expire unless you invalidate them. For details on how to invalidate them, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/reference-guides/about-the-api/api-tokens"},"API tokens page"),"."),(0,r.kt)("h2",{id:"making-requests"},"Making requests"),(0,r.kt)("p",null,"The API is generally RESTful but has several features to make the definition of everything discoverable by a client so that generic clients can be written instead of having to write specific code for every type of resource.  For detailed info about the generic API spec, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher/api-spec/blob/master/specification.md"},"see here"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Every type has a Schema which describes:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The URL to get to the collection of this type of resources"),(0,r.kt)("li",{parentName:"ul"},"Every field the resource can have, along with their type, basic validation rules, whether they are required or optional, etc."),(0,r.kt)("li",{parentName:"ul"},"Every action that is possible on this type of resource, with their inputs and outputs (also as schemas)."),(0,r.kt)("li",{parentName:"ul"},"Every field that filtering is allowed on"),(0,r.kt)("li",{parentName:"ul"},"What HTTP verb methods are available for the collection itself, or for individual resources in the collection.")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"So the theory is that you can load just the list of schemas and know everything about the API.  This is in fact how the UI for the API works, it contains no code specific to Rancher itself.  The URL to get Schemas is sent in every HTTP response as a ",(0,r.kt)("inlineCode",{parentName:"p"},"X-Api-Schemas")," header.  From there you can follow the ",(0,r.kt)("inlineCode",{parentName:"p"},"collection")," link on each schema to know where to list resources, and other ",(0,r.kt)("inlineCode",{parentName:"p"},"links")," inside of the returned resources to get any other information.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In practice, you will probably just want to construct URL strings.  We highly suggest limiting this to the top-level to list a collection (",(0,r.kt)("inlineCode",{parentName:"p"},"/v3/<type>"),") or get a specific resource (",(0,r.kt)("inlineCode",{parentName:"p"},"/v3/<type>/<id>"),").  Anything deeper than that is subject to change in future releases.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Resources have relationships between each other called links.  Each resource includes a map of ",(0,r.kt)("inlineCode",{parentName:"p"},"links")," with the name of the link and the URL to retrieve that information.  Again you should ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," the resource and then follow the URL in the ",(0,r.kt)("inlineCode",{parentName:"p"},"links")," map, not construct these strings yourself.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Most resources have actions, which do something or change the state of the resource.  To use these, send a HTTP ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," to the URL in the ",(0,r.kt)("inlineCode",{parentName:"p"},"actions")," map for the action you want.  Some actions require input or produce output, see the individual documentation for each type or the schemas for specific information.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To edit a resource, send a HTTP ",(0,r.kt)("inlineCode",{parentName:"p"},"PUT")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"links.update")," link on the resource with the fields that you want to change.  If the link is missing then you don't have permission to update the resource. Unknown fields and ones that are not editable are ignored.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To delete a resource, send a HTTP ",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"links.remove")," link on the resource.  If the link is missing then you don't have permission to update the resource.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To create a new resource, HTTP ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," to the collection URL in the schema (which is ",(0,r.kt)("inlineCode",{parentName:"p"},"/v3/<type>"),")."))),(0,r.kt)("h2",{id:"filtering"},"Filtering"),(0,r.kt)("p",null,"Most collections can be filtered on the server-side by common fields using HTTP query parameters.  The ",(0,r.kt)("inlineCode",{parentName:"p"},"filters"),' map shows you what fields can be filtered on and what the filtered values were for the request you made.  The API UI has controls to setup filtering and show you the appropriate request.  For simple "equals" matches it\'s just ',(0,r.kt)("inlineCode",{parentName:"p"},"field=value"),".  Modifiers can be added to the field name, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"field_gt=42"),' for "field is greater than 42".  See the ',(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher/api-spec/blob/master/specification.md#filtering"},"API spec")," for full details."),(0,r.kt)("h2",{id:"sorting"},"Sorting"),(0,r.kt)("p",null,"Most collections can be sorted on the server-side by common fields using HTTP query parameters.  The ",(0,r.kt)("inlineCode",{parentName:"p"},"sortLinks")," map shows you what sorts are available, along with the URL to get the collection sorted by that.  It also includes info about what the current response was sorted by, if specified."),(0,r.kt)("h2",{id:"pagination"},"Pagination"),(0,r.kt)("p",null,"API responses are paginated with a limit of 100 resources per page by default.  This can be changed with the ",(0,r.kt)("inlineCode",{parentName:"p"},"limit")," query parameter, up to a maximum of 1000, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"/v3/pods?limit=1000"),".  The ",(0,r.kt)("inlineCode",{parentName:"p"},"pagination")," map in collection responses tells you whether or not you have the full result set and has a link to the next page if you do not."),(0,r.kt)("h2",{id:"capturing-rancher-api-calls"},"Capturing Rancher API Calls"),(0,r.kt)("p",null,"You can use browser developer tools to capture how the Rancher API is called. For example, you could follow these steps to use the Chrome developer tools to get the API call for provisioning an RKE cluster:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the Rancher UI, go to ",(0,r.kt)("strong",{parentName:"li"},"Cluster Management")," and click ",(0,r.kt)("strong",{parentName:"li"},"Create.")),(0,r.kt)("li",{parentName:"ol"},"Click one of the cluster types. This example uses Digital Ocean."),(0,r.kt)("li",{parentName:"ol"},"Fill out the form with a cluster name and node template, but don't click ",(0,r.kt)("strong",{parentName:"li"},"Create"),"."),(0,r.kt)("li",{parentName:"ol"},"You will need to open the developer tools before the cluster creation to see the API call being recorded. To open the tools, right-click on the Rancher UI and click ",(0,r.kt)("strong",{parentName:"li"},"Inspect.")),(0,r.kt)("li",{parentName:"ol"},"In the developer tools, click the ",(0,r.kt)("strong",{parentName:"li"},"Network")," tab."),(0,r.kt)("li",{parentName:"ol"},"On the ",(0,r.kt)("strong",{parentName:"li"},"Network")," tab, make sure ",(0,r.kt)("strong",{parentName:"li"},"Fetch/XHR")," is selected."),(0,r.kt)("li",{parentName:"ol"},"In the Rancher UI, click ",(0,r.kt)("strong",{parentName:"li"},"Create"),". In the developer tools, you should see a new network request with the name ",(0,r.kt)("inlineCode",{parentName:"li"},"cluster?_replace=true"),"."),(0,r.kt)("li",{parentName:"ol"},"Right-click ",(0,r.kt)("inlineCode",{parentName:"li"},"cluster?_replace=true")," and click ",(0,r.kt)("strong",{parentName:"li"},"Copy > Copy as cURL.")),(0,r.kt)("li",{parentName:"ol"},"Paste the result into any text editor. You will be able to see the POST request, including the URL it was sent to, all of the headers, and the full body of the request. This command can be used to create a cluster from the command line. Note: The request should be stored in a safe place because it contains credentials.")))}d.isMDXComponent=!0}}]);