(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d415b2e"],{"0829":function(e,t,c){},"0997":function(e,t,c){"use strict";c("d17a")},"0e99":function(e,t,c){},"113b":function(e,t,c){},"3ca7":function(e,t,c){"use strict";c("0e99")},"456f":function(e,t,c){},"5d6f":function(e,t,c){},"70c6":function(e,t,c){},"710c":function(e,t,c){"use strict";c("70c6")},"8be8":function(e,t,c){"use strict";c("113b")},"9b17":function(e,t,c){"use strict";c("0829")},cdc5:function(e,t,c){"use strict";c("e391")},d17a:function(e,t,c){},dc6e:function(e,t,c){"use strict";c("456f")},e391:function(e,t,c){},fe79:function(e,t,c){"use strict";c.r(t);var o=c("7a23"),n=c("5502"),a=c("f6f2");const r=Object(o["createTextVNode"])("Sign out ");var l=Object(o["defineComponent"])({__name:"TheSignOutMenuItem",setup(e){const t=Object(n["b"])(),c="fedpol";function l(){t.dispatch(c+"/user/signOut")}return(e,t)=>{const c=Object(o["resolveComponent"])("el-icon"),n=Object(o["resolveComponent"])("el-menu-item");return Object(o["openBlock"])(),Object(o["createBlock"])(n,{onClick:l},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(c,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(Object(o["unref"])(a["a"]))]),_:1}),r]),_:1})}}});const s=l;var i=s;const d=e=>(Object(o["pushScopeId"])("data-v-3238bafa"),e=e(),Object(o["popScopeId"])(),e),b={style:{margin:"0px 10px","line-height":"0px"}},u=["src"],O={class:"tagline"},j=d(()=>Object(o["createElementVNode"])("div",{class:"flex-grow"},null,-1)),p=["src"],f=d(()=>Object(o["createElementVNode"])("div",null,"Signed in as:",-1));var m=Object(o["defineComponent"])({__name:"TheSignOutProfileMenu",setup(e){function t(e){return e.avatar.uri?e.avatar.uri:c("1771")("./"+e.avatar)}function a(e){return`${e.substring(0,13)}...${e.slice(-4)}`}const r=Object(n["b"])(),l="fedpol",s=r.state[l],d=Object(o["computed"])(()=>s.user.profile),m=Object(o["computed"])(()=>s.company.profile);return(e,n)=>{const r=Object(o["resolveComponent"])("el-avatar"),l=Object(o["resolveComponent"])("el-menu-item"),s=Object(o["resolveComponent"])("el-divider"),h=Object(o["resolveComponent"])("el-sub-menu"),v=Object(o["resolveComponent"])("el-menu"),w=Object(o["resolveComponent"])("el-col"),C=Object(o["resolveComponent"])("el-row");return Object(o["openBlock"])(),Object(o["createBlock"])(C,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(w,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(v,{mode:"horizontal",ellipsis:!1,style:{"align-items":"center",padding:"5px","border-bottom":"3px solid #dc0018"},"background-color":"white","text-color":"black"},{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("div",b,[Object(o["createElementVNode"])("img",{width:"30",src:c("1771")("./"+Object(o["unref"])(m).homeLogo)},null,8,u)]),Object(o["createElementVNode"])("div",O,Object(o["toDisplayString"])(Object(o["unref"])(m).tagline),1),j,Object(o["createVNode"])(h,{index:"0"},{title:Object(o["withCtx"])(()=>[Object(o["createVNode"])(r,{size:30},{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("img",{src:t(Object(o["unref"])(d))},null,8,p)]),_:1})]),default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(l,{index:"0-1",class:"submenu-header no-hover"},{default:Object(o["withCtx"])(()=>[f,Object(o["createElementVNode"])("strong",null,Object(o["toDisplayString"])(Object(o["unref"])(d).name),1),Object(o["createElementVNode"])("i",null,Object(o["toDisplayString"])(a(Object(o["unref"])(d).did)),1)]),_:1}),Object(o["createVNode"])(s,{class:"submenu-divider"}),Object(o["createVNode"])(i)]),_:1})]),_:1})]),_:1})]),_:1})}}}),h=(c("710c"),c("6b0d")),v=c.n(h);const w=v()(m,[["__scopeId","data-v-3238bafa"]]);var C=w,V=c("c9a1"),N=c("2295");const g={id:"toolbar"},x={key:0},_={key:1,class:"not-selected-text"};var y=Object(o["defineComponent"])({__name:"TheRequestsToolbar",setup(e){const t="Please select a request to start reviewing",c=Object(n["b"])(),r="fedpol",l=c.state[r],s=Object(o["computed"])(()=>c.getters[r+"/requests/selected"]),i=Object(o["computed"])(()=>l.requests.tableData);function d(){c.dispatch(r+"/requests/remove")}function b(){c.dispatch(r+"/requests/showViewModal")}function u(){c.dispatch(r+"/requests/clear")}function O(){V["a"].confirm("Request will permanently be remove. Continue?","Remove request",{confirmButtonText:"Confirm",cancelButtonText:"Cancel",type:"error",icon:Object(o["markRaw"])(a["e"])}).then(()=>{Object(N["a"])({message:"Request removed successfully",icon:Object(o["markRaw"])(a["j"]),position:"top-right",duration:3e3}),d()})}return(e,c)=>{const n=Object(o["resolveComponent"])("el-button"),r=Object(o["resolveComponent"])("el-tooltip"),l=Object(o["resolveComponent"])("el-card");return Object(o["unref"])(i).length?(Object(o["openBlock"])(),Object(o["createBlock"])(l,{key:0,shadow:"never",class:"card","body-style":{padding:"5px"}},{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("div",g,[Object(o["unref"])(s)?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",x,[Object(o["createVNode"])(r,{content:"Remove",placement:"bottom"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,{type:"danger",size:"default",circle:"",plain:"",icon:Object(o["unref"])(a["e"]),onClick:O},null,8,["icon"])]),_:1}),Object(o["createVNode"])(r,{content:"View",placement:"bottom"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,{size:"default",circle:"",plain:"",icon:Object(o["unref"])(a["p"]),onClick:b},null,8,["icon"])]),_:1}),Object(o["createVNode"])(r,{content:"Clear",placement:"bottom"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,{size:"default",circle:"",plain:"",icon:Object(o["unref"])(a["b"]),onClick:u},null,8,["icon"])]),_:1})])):(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",_,Object(o["toDisplayString"])(t)))])]),_:1})):Object(o["createCommentVNode"])("",!0)}}});c("0997");const k=v()(y,[["__scopeId","data-v-40a25c09"]]);var S=k,q=c("1e49");const B={style:{"line-height":"20px",color:"#2c3e50"}};var E=Object(o["defineComponent"])({__name:"TheRequestsTable",setup(e){const t="No request matching your search criteria was found",c="No requests to show yet",r=Object(n["b"])(),l="fedpol",s=r.state[l],i=Object(o["computed"])(()=>s.requests.tableData),d=Object(o["ref"])(),b=Object(o["computed"])(()=>r.getters[l+"/requests/selected"]);function u(e){let t="";switch(e){case"Approved":t="success";break;case"Rejected":t="danger";break;case"Processing":t="info";break;default:t="info";break}return t}function O(e){r.dispatch(l+"/requests/setSelected",e)}function j(){r.dispatch(l+"/requests/showViewModal")}return Object(o["watch"])(b,e=>{null==e&&d.value.setCurrentRow()}),(e,n)=>{const r=Object(o["resolveComponent"])("el-icon"),l=Object(o["resolveComponent"])("el-table-column"),s=Object(o["resolveComponent"])("el-tag"),b=Object(o["resolveComponent"])("el-card");return Object(o["openBlock"])(),Object(o["createBlock"])(b,{shadow:"never",class:"card","body-style":{padding:"5px 5px"}},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(Object(o["unref"])(q["a"]),{ref_key:"tableRef",ref:d,data:Object(o["unref"])(i),"show-header":!!Object(o["unref"])(i).length,"table-layout":"auto","highlight-current-row":!0,"default-sort":{prop:"type",order:"ascending"},"header-cell-style":{background:"#e4e4e4",color:"#2c3e50"},"row-style":{cursor:"pointer"},height:100,onRowClick:O,onRowDblclick:j},Object(o["createSlots"])({default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(l,{prop:"type",label:"Type",sortable:""}),Object(o["createVNode"])(l,{prop:"requester",label:"Requester",sortable:""}),Object(o["createVNode"])(l,{prop:"status",label:"Status",sortable:""},{default:Object(o["withCtx"])(e=>[Object(o["createVNode"])(s,{type:u(e.row.status),effect:"plain",style:{width:"80px"}},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.row.status),1)]),_:2},1032,["type"])]),_:1})]),_:2},[Object(o["unref"])(i).length?{name:"empty",fn:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("div",B,[Object(o["createVNode"])(r,{size:50},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(Object(o["unref"])(a["l"]))]),_:1}),Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("p",null,Object(o["toDisplayString"])(t))])])])}:{name:"empty",fn:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("div",{style:{"line-height":"20px",color:"#2c3e50"}},[Object(o["createVNode"])(r,{size:50},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(Object(o["unref"])(a["f"]))]),_:1}),Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("strong",null,Object(o["toDisplayString"])(c))])])])}]),1032,["data","show-header"])]),_:1})}}});c("ffd8");const T=v()(E,[["__scopeId","data-v-e469a01e"]]);var D=T;const R=Object(o["createElementVNode"])("strong",null,"View request",-1),I=Object(o["createElementVNode"])("p",{style:{"font-size":"var(--el-font-size-small)"}},"Please find the request details below",-1),z=Object(o["createTextVNode"])(" Close ");var A=Object(o["defineComponent"])({__name:"TheViewRequestModal",setup(e){const t=Object(n["b"])(),c="fedpol",a=Object(o["computed"])(()=>t.getters[c+"/requests/selected"]),r=Object(o["ref"])(!1),l=Object(o["computed"])(()=>t.getters[c+"/requests/isViewModalVisible"]);function s(){t.dispatch(c+"/requests/closeViewModal")}function i(e){s(),e()}function d(e){let t="";switch(e){case"Approved":t="success";break;case"Rejected":t="danger";break;case"Processing":t="info";break;default:t="info";break}return t}return Object(o["watch"])(l,e=>{r.value=e}),(e,t)=>{const c=Object(o["resolveComponent"])("el-descriptions-item"),n=Object(o["resolveComponent"])("el-tag"),l=Object(o["resolveComponent"])("el-descriptions"),b=Object(o["resolveComponent"])("el-button"),u=Object(o["resolveComponent"])("el-dialog");return Object(o["openBlock"])(),Object(o["createBlock"])(u,{modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=e=>r.value=e),"before-close":i,width:"40%"},{header:Object(o["withCtx"])(()=>[R,I]),footer:Object(o["withCtx"])(()=>[Object(o["createVNode"])(b,{onClick:s},{default:Object(o["withCtx"])(()=>[z]),_:1})]),default:Object(o["withCtx"])(()=>[null!==Object(o["unref"])(a)?(Object(o["openBlock"])(),Object(o["createBlock"])(l,{key:0,direction:"vertical",column:2,border:""},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(c,{label:"Type"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(Object(o["unref"])(a).type),1)]),_:1}),Object(o["createVNode"])(c,{label:"Status"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,{type:d(Object(o["unref"])(a).status),effect:"plain"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(Object(o["unref"])(a).status),1)]),_:1},8,["type"])]),_:1}),Object(o["createVNode"])(c,{label:"Requester"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(Object(o["unref"])(a).requester),1)]),_:1})]),_:1})):Object(o["createCommentVNode"])("",!0)]),_:1},8,["modelValue"])}}});const P=A;var M=P;const U={id:"requests"};var F=Object(o["defineComponent"])({__name:"TheRequests",setup(e){const t="Requests";return(e,c)=>{const n=Object(o["resolveComponent"])("el-col"),a=Object(o["resolveComponent"])("el-row");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createElementVNode"])("div",U,[Object(o["createVNode"])(a,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,null,{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("h2",{class:"heading"},Object(o["toDisplayString"])(t))]),_:1})]),_:1}),Object(o["createVNode"])(a,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(S)]),_:1})]),_:1}),Object(o["createVNode"])(a,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(D)]),_:1})]),_:1})]),Object(o["createVNode"])(M)],64)}}});c("cdc5");const L=v()(F,[["__scopeId","data-v-7cb1bb93"]]);var J=L;const $=e=>(Object(o["pushScopeId"])("data-v-f34f917a"),e=e(),Object(o["popScopeId"])(),e),H=$(()=>Object(o["createElementVNode"])("div",null,"© 2022 Federal Office of Police",-1));function K(e,t){const c=Object(o["resolveComponent"])("el-divider"),n=Object(o["resolveComponent"])("el-col"),a=Object(o["resolveComponent"])("el-row");return Object(o["openBlock"])(),Object(o["createBlock"])(a,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(c,{"border-style":"none",class:"fedpol-divider"}),Object(o["createVNode"])(n,{class:"fedpol-footer"},{default:Object(o["withCtx"])(()=>[H]),_:1})]),_:1})}c("8be8");const G={},Q=v()(G,[["render",K],["__scopeId","data-v-f34f917a"]]);var W=Q,X=c("4360"),Y=c("b215"),Z=c("c834"),ee=c("4ac1");class te{constructor(e,t){this.storeNamespace=null,this.veridaStore=null,this.userStore=null,this.account=null,this.isAutoAccount=null,this._profile=null,this._context=null,this.msgInstance={},this.isAutoAccount=t,this.storeNamespace=X["a"].state[e],this.veridaStore=Object(o["computed"])(()=>this.storeNamespace.verida),this.userStore=Object(o["computed"])(()=>this.storeNamespace.user.profile)}async initialize(){this._context=await this.connectContext(),this._profile=await this.connectProfile()}async connectContext(){return this.isAutoAccount?this.account=new ee["AutoAccount"]({defaultDatabaseServer:{type:"VeridaDatabase",endpointUri:this.veridaStore.value.veridaTestnetDefaultServer},defaultMessageServer:{type:"VeridaMessage",endpointUri:this.veridaStore.value.veridaTestnetDefaultServer}},{privateKey:this.userStore.value.mnemonic,didServerUrl:this.veridaStore.value.veridaTestnetDidServer,environment:this.veridaStore.value.environmentType}):this.account=new Z["VaultAccount"]({request:{logoUrl:this.veridaStore.value.logoUrl}}),Y["Network"].connect({client:{environment:this.veridaStore.value.environmentType},account:this.account,context:{name:this.veridaStore.value.contextName}})}async connectProfile(){const e=await this.context.getClient(),t=await this.context.account.did(),c=await e.openPublicProfile(t,this.veridaStore.value.contextName,"basicProfile"),{name:o,avatar:n,description:a,country:r}=await c.getMany();return{did:t,name:o,description:a,country:r}}get context(){return this._context}get profile(){return this._profile}}const ce="fedpol",oe=!0,ne=new te(ce,oe);ne.initialize();var ae=ne;const re=Object(o["createTextVNode"])(" Sign in ");var le=Object(o["defineComponent"])({__name:"TheSignInButton",setup(e){const t=Object(o["ref"])(!1),c=Object(n["b"])(),a="fedpol",r=Object(o["computed"])(()=>c.getters[a+"/user/isAuthenticated"]);async function l(){t.value=!0,await ae.initialize();const e=ae.context;if(e){const e=ae.profile;c.dispatch(a+"/user/setProfile",e),c.dispatch(a+"/user/signIn")}t.value=!1}return Object(o["onMounted"])(()=>{r.value&&l()}),(e,c)=>{const n=Object(o["resolveComponent"])("el-button"),a=Object(o["resolveDirective"])("loading");return Object(o["withDirectives"])((Object(o["openBlock"])(),Object(o["createBlock"])(n,{"element-loading-background":"rgba(0, 0, 0, 0.5)",size:"default",color:"#c8d2d2",class:"fedpol-button",onClick:l},{default:Object(o["withCtx"])(()=>[re]),_:1})),[[a,t.value]])}}});c("3ca7");const se=v()(le,[["__scopeId","data-v-befa58d2"]]);var ie=se;const de=e=>(Object(o["pushScopeId"])("data-v-a3b68204"),e=e(),Object(o["popScopeId"])(),e),be=["src"],ue={class:"title"},Oe={class:"title",style:{"margin-top":"15px",height:"1px"}},je={class:"underline"},pe=de(()=>Object(o["createElementVNode"])("p",{class:"tagline"},"The exchange of information and the identification of people and objects are central to fighting crime. fedpol develops and operates national databases, and makes these instruments available to federal and cantonal security and migration services.",-1)),fe=de(()=>Object(o["createElementVNode"])("div",null,"© 2022 Federal Office of Police fedpol",-1));var me=Object(o["defineComponent"])({__name:"TheLanding",setup(e){const t=Object(n["b"])(),a="fedpol",r=t.state[a],l=Object(o["computed"])(()=>r.company.profile);return(e,t)=>{const n=Object(o["resolveComponent"])("el-col"),a=Object(o["resolveComponent"])("el-row"),r=Object(o["resolveComponent"])("el-divider");return Object(o["openBlock"])(),Object(o["createBlock"])(a,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(a,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,{class:"header"},{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("img",{alt:"company logo",src:c("1771")("./"+Object(o["unref"])(l).landingLogo)},null,8,be)]),_:1})]),_:1}),Object(o["createVNode"])(a,{class:"body body-background"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,{xs:20,sm:20},{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("h2",ue,Object(o["toDisplayString"])(Object(o["unref"])(l).name),1),Object(o["createElementVNode"])("h2",Oe,[Object(o["createElementVNode"])("span",je,Object(o["toDisplayString"])(Object(o["unref"])(l).name),1)]),pe,Object(o["createVNode"])(r,{"border-style":"none"}),Object(o["createVNode"])(ie)]),_:1})]),_:1}),Object(o["createVNode"])(a,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,{class:"footer"},{default:Object(o["withCtx"])(()=>[fe]),_:1})]),_:1})]),_:1})]),_:1})}}});c("dc6e");const he=v()(me,[["__scopeId","data-v-a3b68204"]]);var ve=he;const we={key:0,id:"home"},Ce={key:1};var Ve=Object(o["defineComponent"])({__name:"TheHome",setup(e){const t=Object(n["b"])(),c="fedpol",a=t.state[c],r=Object(o["computed"])(()=>a.user.isAuthenticated);return(e,t)=>Object(o["unref"])(r)?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",we,[Object(o["createVNode"])(C),Object(o["createVNode"])(J),Object(o["createVNode"])(W)])):(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",Ce,[Object(o["createVNode"])(ve)]))}});c("9b17");const Ne=v()(Ve,[["__scopeId","data-v-45a1e203"]]);t["default"]=Ne},ffd8:function(e,t,c){"use strict";c("5d6f")}}]);
//# sourceMappingURL=chunk-5d415b2e.707e57cc.js.map