(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-81cce7fa"],{1284:function(e,t,c){"use strict";c("2df0")},2366:function(e,t,c){"use strict";c("e6d5")},2485:function(e,t,c){"use strict";c("8e99")},"2ab6":function(e,t,c){"use strict";c("d525")},"2df0":function(e,t,c){},"3cd3":function(e,t,c){},5381:function(e,t,c){},"57a3":function(e,t,c){"use strict";c("dade")},6949:function(e,t,c){"use strict";c.r(t);var n=c("7a23"),o=c("5502"),l=c("f6f2");const a=Object(n["createTextVNode"])("Sign out ");var r=Object(n["defineComponent"])({__name:"TheSignOutMenuItem",setup(e){const t=Object(o["b"])(),c="verifive";function r(){t.dispatch(c+"/user/signOut")}return(e,t)=>{const c=Object(n["resolveComponent"])("el-icon"),o=Object(n["resolveComponent"])("el-menu-item");return Object(n["openBlock"])(),Object(n["createBlock"])(o,{onClick:r},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(c,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(Object(n["unref"])(l["a"]))]),_:1}),a]),_:1})}}});const i=r;var d=i;const s=e=>(Object(n["pushScopeId"])("data-v-e49268f2"),e=e(),Object(n["popScopeId"])(),e),b={style:{margin:"0px 10px","line-height":"0px"}},u=["src"],O={class:"tagline"},j=s(()=>Object(n["createElementVNode"])("div",{class:"flex-grow"},null,-1)),m=["src"],p=s(()=>Object(n["createElementVNode"])("div",null,"Signed in as:",-1));var f=Object(n["defineComponent"])({__name:"TheSignOutProfileMenu",setup(e){function t(e){return e.avatar.uri?e.avatar.uri:c("1771")("./"+e.avatar)}function l(e){return`${e.substring(0,13)}...${e.slice(-4)}`}const a=Object(o["b"])(),r="verifive",i=a.state[r],s=Object(n["computed"])(()=>i.user.profile),f=Object(n["computed"])(()=>i.company.profile);return(e,o)=>{const a=Object(n["resolveComponent"])("el-avatar"),r=Object(n["resolveComponent"])("el-menu-item"),i=Object(n["resolveComponent"])("el-divider"),v=Object(n["resolveComponent"])("el-sub-menu"),h=Object(n["resolveComponent"])("el-menu"),V=Object(n["resolveComponent"])("el-col"),w=Object(n["resolveComponent"])("el-row");return Object(n["openBlock"])(),Object(n["createBlock"])(w,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(V,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(h,{mode:"horizontal",ellipsis:!1,style:{"align-items":"center",padding:"5px"},"background-color":"#a0cfff","text-color":"#2c3e50"},{default:Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("div",b,[Object(n["createElementVNode"])("img",{width:"30",src:c("1771")("./"+Object(n["unref"])(f).homeLogo)},null,8,u)]),Object(n["createElementVNode"])("div",O,Object(n["toDisplayString"])(Object(n["unref"])(f).tagline),1),j,Object(n["createVNode"])(v,{index:"0"},{title:Object(n["withCtx"])(()=>[Object(n["createVNode"])(a,{size:30},{default:Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("img",{src:t(Object(n["unref"])(s))},null,8,m)]),_:1})]),default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(r,{index:"0-1",class:"submenu-header no-hover"},{default:Object(n["withCtx"])(()=>[p,Object(n["createElementVNode"])("strong",null,Object(n["toDisplayString"])(Object(n["unref"])(s).name),1),Object(n["createElementVNode"])("i",null,Object(n["toDisplayString"])(l(Object(n["unref"])(s).did)),1)]),_:1}),Object(n["createVNode"])(i,{class:"submenu-divider"}),Object(n["createVNode"])(d)]),_:1})]),_:1})]),_:1})]),_:1})}}}),v=(c("f574"),c("6b0d")),h=c.n(v);const V=h()(f,[["__scopeId","data-v-e49268f2"]]);var w=V,C=c("c9a1"),g=c("2295");const N={id:"container"},x={key:0},k={key:0,class:"toolbar"},y={key:1,class:"toolbar"},_={key:1};var E=Object(n["defineComponent"])({__name:"TheElementsToolbar",setup(e){const t=Object(o["b"])(),c="verifive",a=Object(n["computed"])(()=>t.getters[c+"/elements/selectedElement"]),r=Object(n["computed"])(()=>t.getters[c+"/elements/Statuses"]),i=Object(n["computed"])(()=>t.getters[c+"/toolbar/selectedRole"]),d=Object(n["computed"])(()=>t.getters[c+"/toolbar/Roles"]);function s(){t.dispatch(c+"/elements/showNewElementModal")}function b(){t.dispatch(c+"/elements/retireSelectedElement")}function u(){t.dispatch(c+"/elements/showViewElementModal")}function O(){t.dispatch(c+"/elements/clearSelectedElement")}function j(){C["a"].confirm("Element will permanently be retired. Continue?","Retire Element",{confirmButtonText:"Confirm",cancelButtonText:"Cancel",type:"error",icon:Object(n["markRaw"])(l["d"])}).then(()=>{Object(g["a"])({message:"Element retired successfully",icon:Object(n["markRaw"])(l["i"]),position:"top-right",duration:3e3}),b()})}return(e,t)=>{const c=Object(n["resolveComponent"])("el-button"),o=Object(n["resolveComponent"])("el-tooltip"),b=Object(n["resolveComponent"])("el-divider"),m=Object(n["resolveComponent"])("el-space"),p=Object(n["resolveComponent"])("el-card");return Object(n["openBlock"])(),Object(n["createBlock"])(p,{shadow:"never",class:"card","body-style":{padding:"5px"}},{default:Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("div",N,[Object(n["unref"])(i)?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",x,[Object(n["unref"])(a)?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",k,[Object(n["unref"])(i)===Object(n["unref"])(d).Owner&&Object(n["unref"])(a).status!==Object(n["unref"])(r).Retired?(Object(n["openBlock"])(),Object(n["createBlock"])(o,{key:0,content:"New Element",placement:"bottom"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(c,{type:"primary",size:"default",circle:"",plain:"",icon:Object(n["unref"])(l["l"]),onClick:s},null,8,["icon"])]),_:1})):Object(n["createCommentVNode"])("",!0),Object(n["unref"])(i)===Object(n["unref"])(d).Owner&&Object(n["unref"])(a).status!==Object(n["unref"])(r).Retired?(Object(n["openBlock"])(),Object(n["createBlock"])(o,{key:1,content:"Retire Element",placement:"bottom"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(c,{type:"danger",size:"default",circle:"",plain:"",icon:Object(n["unref"])(l["d"]),onClick:j},null,8,["icon"])]),_:1})):Object(n["createCommentVNode"])("",!0),Object(n["unref"])(a).status!==Object(n["unref"])(r).Retired?(Object(n["openBlock"])(),Object(n["createBlock"])(b,{key:2,direction:"vertical",class:"menu-divider"})):Object(n["createCommentVNode"])("",!0),Object(n["createVNode"])(o,{content:"View Element",placement:"bottom"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(c,{size:"default",circle:"",plain:"",icon:Object(n["unref"])(l["o"]),onClick:u},null,8,["icon"])]),_:1}),Object(n["createVNode"])(o,{content:"Clear Selection",placement:"bottom"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(c,{size:"default",circle:"",plain:"",icon:Object(n["unref"])(l["b"]),onClick:O},null,8,["icon"])]),_:1})])):(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",y,[Object(n["unref"])(i)===Object(n["unref"])(d).Owner?(Object(n["openBlock"])(),Object(n["createBlock"])(o,{key:0,content:"New Root Element",placement:"bottom"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(c,{type:"primary",size:"default",circle:"",plain:"",icon:Object(n["unref"])(l["h"]),onClick:s},null,8,["icon"])]),_:1})):Object(n["createCommentVNode"])("",!0)]))])):(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",_,[Object(n["createVNode"])(m)]))])]),_:1})}}});c("1284");const S=h()(E,[["__scopeId","data-v-453631e8"]]);var B=S,T=c("1e49");const D={style:{"line-height":"20px",color:"#2c3e50"}},I={style:{margin:"0px"}};var R=Object(n["defineComponent"])({__name:"TheElementsTable",setup(e){const t="No element to show yet",c="Add your first element by clicking",a=Object(o["b"])(),r="verifive",i=Object(n["computed"])(()=>a.getters[r+"/elements/elements"]),d=Object(n["computed"])(()=>a.getters[r+"/elements/Statuses"]),s=Object(n["computed"])(()=>a.getters[r+"/elements/selectedElement"]);Object(n["watch"])(s,e=>{null==e&&b.value.setCurrentRow(e)});const b=Object(n["ref"])(),u=Object(n["computed"])(()=>{const e=t=>t.map(t=>{const c=i.value.filter(({parent:e})=>e===t.name);return Object.assign({},{...t},c.length?{children:e(c)}:{})}),t=i.value.filter(e=>!e.parent);return e(t)});function O(e){let t="";switch(e){case d.value.Valid:t="success";break;case d.value.Retired:t="danger";break;default:t="info";break}return t}const j=({row:e,rowIndex:t})=>e.parent?{cursor:"pointer",background:"#fafafa80"}:{cursor:"pointer"};function m(){a.dispatch(r+"/elements/showNewElementModal")}function p(e){a.dispatch(r+"/elements/setSelectedElement",e)}function f(){a.dispatch(r+"/elements/showViewElementModal")}return(e,o)=>{const a=Object(n["resolveComponent"])("el-icon"),r=Object(n["resolveComponent"])("el-button"),i=Object(n["resolveComponent"])("el-table-column"),d=Object(n["resolveComponent"])("el-tag"),s=Object(n["resolveComponent"])("el-card");return Object(n["openBlock"])(),Object(n["createBlock"])(s,{shadow:"never",class:"card","body-style":{padding:"5px 5px"}},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(Object(n["unref"])(T["a"]),{ref_key:"tableRef",ref:b,"row-key":"name",defaultExpandAll:!0,data:Object(n["unref"])(u),"show-header":!!Object(n["unref"])(u).length,"table-layout":"auto","highlight-current-row":!0,"default-sort":{prop:"name",order:"ascending"},"header-cell-style":{background:"#c6e2ff",color:"#2c3e50"},"row-style":j,height:350,onRowClick:p,onRowDblclick:f},Object(n["createSlots"])({default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(i,{prop:"name",label:"Name"}),Object(n["createVNode"])(i,{prop:"validFrom",label:"Valid From"}),Object(n["createVNode"])(i,{prop:"validUntil",label:"Valid Until"}),Object(n["createVNode"])(i,{label:"Status"},{default:Object(n["withCtx"])(e=>[e.row.status?(Object(n["openBlock"])(),Object(n["createBlock"])(d,{key:0,type:O(e.row.status),effect:"plain",style:{"min-width":"90px"}},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.row.status),1)]),_:2},1032,["type"])):Object(n["createCommentVNode"])("",!0)]),_:1})]),_:2},[Object(n["unref"])(u).length?void 0:{name:"empty",fn:Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("div",D,[Object(n["createVNode"])(a,{size:50},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(Object(n["unref"])(l["c"]))]),_:1}),Object(n["createElementVNode"])("div",null,[Object(n["createElementVNode"])("strong",null,Object(n["toDisplayString"])(t)),Object(n["createElementVNode"])("p",I,[Object(n["createTextVNode"])(Object(n["toDisplayString"])(c)+" "),Object(n["createVNode"])(r,{type:"primary",size:"default",circle:"",plain:"",icon:Object(n["unref"])(l["h"]),onClick:m,style:{margin:"5px"}},null,8,["icon"])])])])])}]),1032,["data","show-header"])]),_:1})}}});c("57a3");const M=h()(R,[["__scopeId","data-v-02fcc79f"]]);var z=M;const U=e=>(Object(n["pushScopeId"])("data-v-25b9ebb8"),e=e(),Object(n["popScopeId"])(),e),A={style:{"font-size":"var(--el-font-size-small)"}},q=U(()=>Object(n["createElementVNode"])("span",null,"did:vda:",-1)),F=Object(n["createTextVNode"])(" Cancel "),P=Object(n["createTextVNode"])(" Submit ");var Y=Object(n["defineComponent"])({__name:"TheNewElementModal",setup(e){const t=Object(o["b"])(),c="verifive",a=Object(n["computed"])(()=>t.getters[c+"/elements/elements"]),r=Object(n["computed"])(()=>t.getters[c+"/elements/selectedElement"]),i=Object(n["computed"])(()=>t.getters[c+"/elements/Statuses"]),d=Object(n["computed"])(()=>t.getters[c+"/elements/isNewElementModalVisible"]),s=Object(n["ref"])(),b=Object(n["reactive"])({name:"",holder:"",did:"",validity:""}),u=Object(n["ref"])(!1),O=Object(n["reactive"])({name:[{required:!0,message:"A name is required",trigger:["blur","change"]}],holder:[{required:!0,message:"A element is required",trigger:["blur","change"]}],did:[{required:!0,message:"A did is required",trigger:["blur","change"]}],validity:[{required:!0,message:"A validity date range is required",trigger:["blur","change"]}]});function j(){return`New ${r.value?"":"Root"} Element`}function m(){return`Please fill out the following form to add a new ${r.value?"":"root"} element`}function p(e){return e.filter(({status:e})=>e!==i.value.Retired)}function f(){s.value&&(s.value.resetFields(),u.value=!1)}function v(){f(s.value),t.dispatch(c+"/elements/closeNewElementModal")}function h(e){v(),e()}function V(){s.value&&s.value.validate(e=>{if(!e)return!1;w()})}function w(){C["a"].confirm("Your signature is being requested. Continue?","Signature request",{confirmButtonText:"Sign",cancelButtonText:"Cancel",type:"warning",icon:Object(n["markRaw"])(l["g"])}).then(()=>{const e=Object.assign({},{name:b.name,owner:b.owner,validFrom:b.validity[0],validUntil:b.validity[1],status:i.value.Valid},r.value?{parent:r.value.name}:{});t.dispatch(c+"/elements/confirmNewElement",e),Object(g["a"])({message:"Element created successfully",icon:Object(n["markRaw"])(l["m"]),position:"top-right",duration:3e3}),v()})}return(e,t)=>{const c=Object(n["resolveComponent"])("el-input"),o=Object(n["resolveComponent"])("el-form-item"),l=Object(n["resolveComponent"])("el-switch"),i=Object(n["resolveComponent"])("el-option"),f=Object(n["resolveComponent"])("el-select"),w=Object(n["resolveComponent"])("el-date-picker"),C=Object(n["resolveComponent"])("el-form"),g=Object(n["resolveComponent"])("el-button"),N=Object(n["resolveComponent"])("el-dialog");return Object(n["openBlock"])(),Object(n["createBlock"])(N,{modelValue:Object(n["unref"])(d),"onUpdate:modelValue":t[5]||(t[5]=e=>Object(n["isRef"])(d)?d.value=e:null),"before-close":h,width:"40%"},{header:Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("strong",null,Object(n["toDisplayString"])(j()),1),Object(n["createElementVNode"])("p",A,Object(n["toDisplayString"])(m()),1)]),footer:Object(n["withCtx"])(()=>[Object(n["createVNode"])(g,{onClick:v},{default:Object(n["withCtx"])(()=>[F]),_:1}),Object(n["createVNode"])(g,{type:"primary",plain:"",onClick:V},{default:Object(n["withCtx"])(()=>[P]),_:1})]),default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(C,{ref_key:"formRef",ref:s,model:b,rules:O,"label-position":"top",size:"default"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(o,{label:"Name",prop:"name"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(c,{modelValue:b.name,"onUpdate:modelValue":t[0]||(t[0]=e=>b.name=e),placeholder:"Type an element name"},Object(n["createSlots"])({_:2},[Object(n["unref"])(r)?{name:"prepend",fn:Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(Object(n["unref"])(r).name+"."),1)])}:void 0]),1032,["modelValue"])]),_:1}),Object(n["createVNode"])(l,{modelValue:u.value,"onUpdate:modelValue":t[1]||(t[1]=e=>u.value=e),size:"default","active-text":"Holder of","inactive-text":"DID",class:"switch-label",style:{"--el-switch-on-color":"#dcdfe6","--el-switch-off-color":"#dcdfe6"}},null,8,["modelValue"]),u.value?(Object(n["openBlock"])(),Object(n["createBlock"])(o,{key:0,prop:"holder"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(f,{modelValue:b.holder,"onUpdate:modelValue":t[2]||(t[2]=e=>b.holder=e),placeholder:"Click to select an element name",filterable:!0,clearable:!0,style:{width:"100%"}},{default:Object(n["withCtx"])(()=>[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(p(Object(n["unref"])(a)),e=>(Object(n["openBlock"])(),Object(n["createBlock"])(i,{key:e.name,label:e.name,value:e.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})):(Object(n["openBlock"])(),Object(n["createBlock"])(o,{key:1,prop:"did"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(c,{modelValue:b.did,"onUpdate:modelValue":t[3]||(t[3]=e=>b.did=e),placeholder:"Type a decentralised identifier"},{prepend:Object(n["withCtx"])(()=>[q]),_:1},8,["modelValue"])]),_:1})),Object(n["createVNode"])(o,{label:"Validity",prop:"validity"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(w,{modelValue:b.validity,"onUpdate:modelValue":t[4]||(t[4]=e=>b.validity=e),type:"daterange",clearable:!0,"range-separator":"and","start-placeholder":"Valid From","end-placeholder":"Valid Until",format:"YYYY/MM/DD","value-format":"YYYY-MM-DD"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])}}});c("2485");const L=h()(Y,[["__scopeId","data-v-25b9ebb8"]]);var $=L;const H=Object(n["createElementVNode"])("strong",null,"View Element",-1),J=Object(n["createElementVNode"])("p",{style:{"font-size":"var(--el-font-size-small)"}},"Please find the element details below",-1),K=Object(n["createTextVNode"])(" Close ");var G=Object(n["defineComponent"])({__name:"TheViewElementModal",setup(e){const t=Object(o["b"])(),c="verifive",l=Object(n["computed"])(()=>t.getters[c+"/elements/selectedElement"]),a=Object(n["computed"])(()=>t.getters[c+"/elements/Statuses"]),r=Object(n["computed"])(()=>t.getters[c+"/elements/isViewElementModalVisible"]);function i(e){let t="";switch(e){case a.value.Valid:t="success";break;case a.value.Retired:t="danger";break;default:t="info";break}return t}function d(){t.dispatch(c+"/elements/closeViewElementModal")}function s(e){e(),d()}return(e,t)=>{const c=Object(n["resolveComponent"])("el-descriptions-item"),o=Object(n["resolveComponent"])("el-tag"),a=Object(n["resolveComponent"])("el-descriptions"),b=Object(n["resolveComponent"])("el-button"),u=Object(n["resolveComponent"])("el-dialog");return Object(n["openBlock"])(),Object(n["createBlock"])(u,{modelValue:Object(n["unref"])(r),"onUpdate:modelValue":t[0]||(t[0]=e=>Object(n["isRef"])(r)?r.value=e:null),"before-close":s,width:"40%"},{header:Object(n["withCtx"])(()=>[H,J]),footer:Object(n["withCtx"])(()=>[Object(n["createVNode"])(b,{onClick:d},{default:Object(n["withCtx"])(()=>[K]),_:1})]),default:Object(n["withCtx"])(()=>[Object(n["unref"])(l)?(Object(n["openBlock"])(),Object(n["createBlock"])(a,{key:0,direction:"vertical",column:2,border:""},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(c,{label:"Name",span:2},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(Object(n["toDisplayString"])(Object(n["unref"])(l).name),1)]),_:1}),Object(n["createVNode"])(c,{label:"Valid From"},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(Object(n["toDisplayString"])(Object(n["unref"])(l).validFrom),1)]),_:1}),Object(n["createVNode"])(c,{label:"Valid Until"},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(Object(n["toDisplayString"])(Object(n["unref"])(l).validUntil),1)]),_:1}),Object(n["createVNode"])(c,{label:"Status"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(o,{type:i(Object(n["unref"])(l).status),effect:"plain",style:{"min-width":"90px"}},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(Object(n["toDisplayString"])(Object(n["unref"])(l).status),1)]),_:1},8,["type"])]),_:1})]),_:1})):Object(n["createCommentVNode"])("",!0)]),_:1},8,["modelValue"])}}});const Q=G;var W=Q;const X={id:"elements"};var Z=Object(n["defineComponent"])({__name:"TheElements",setup(e){const t="Elements";return(e,c)=>{const o=Object(n["resolveComponent"])("el-col"),l=Object(n["resolveComponent"])("el-row");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[Object(n["createElementVNode"])("div",X,[Object(n["createVNode"])(l,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(o,null,{default:Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("h2",{class:"heading"},Object(n["toDisplayString"])(t))]),_:1})]),_:1}),Object(n["createVNode"])(l,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(o,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(B)]),_:1})]),_:1}),Object(n["createVNode"])(l,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(o,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(z)]),_:1})]),_:1})]),Object(n["createVNode"])($),Object(n["createVNode"])(W)],64)}}});c("2366");const ee=h()(Z,[["__scopeId","data-v-2d85888a"]]);var te=ee;const ce=e=>(Object(n["pushScopeId"])("data-v-254c0c9d"),e=e(),Object(n["popScopeId"])(),e),ne=ce(()=>Object(n["createElementVNode"])("div",null,"© 2022 Verifive",-1));function oe(e,t){const c=Object(n["resolveComponent"])("el-divider"),o=Object(n["resolveComponent"])("el-col"),l=Object(n["resolveComponent"])("el-row");return Object(n["openBlock"])(),Object(n["createBlock"])(l,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(c,{class:"fedpol-divider"}),Object(n["createVNode"])(o,{class:"fedpol-footer"},{default:Object(n["withCtx"])(()=>[ne]),_:1})]),_:1})}c("2ab6");const le={},ae=h()(le,[["render",oe],["__scopeId","data-v-254c0c9d"]]);var re=ae,ie=c("d174"),de=c.n(ie),se=c("4360"),be=c("b215"),ue=c("c834"),Oe=c("4ac1");class je{constructor(e,t){this.storeNamespace=null,this.veridaStore=null,this.userStore=null,this.account=null,this.isAutoAccount=null,this._profile=null,this._context=null,this.msgInstance={},this.isAutoAccount=t,this.storeNamespace=se["a"].state[e],this.veridaStore=Object(n["computed"])(()=>this.storeNamespace.verida),this.userStore=Object(n["computed"])(()=>this.storeNamespace.user.profile)}async initialize(){this._context=await this.connectContext(),this._profile=await this.connectProfile()}async connectContext(){return this.isAutoAccount?this.account=new Oe["AutoAccount"]({defaultDatabaseServer:{type:"VeridaDatabase",endpointUri:this.veridaStore.value.veridaTestnetDefaultServer},defaultMessageServer:{type:"VeridaMessage",endpointUri:this.veridaStore.value.veridaTestnetDefaultServer}},{privateKey:this.userStore.value.mnemonic,didServerUrl:this.veridaStore.value.veridaTestnetDidServer,environment:this.veridaStore.value.environmentType}):this.account=new ue["VaultAccount"]({request:{logoUrl:this.veridaStore.value.logoUrl}}),be["Network"].connect({client:{environment:this.veridaStore.value.environmentType},account:this.account,context:{name:this.veridaStore.value.contextName}})}async connectProfile(){const e=await this.context.getClient(),t=await this.context.account.did(),c=await e.openPublicProfile(t,this.veridaStore.value.contextName,"basicProfile"),{name:n,avatar:o,description:l,country:a}=await c.getMany();return{did:t,name:n,description:l,country:a}}get context(){return this._context}get profile(){return this._profile}}const me="verifive",pe=!0,fe=new je(me,pe);fe.initialize();var ve=fe;const he=e=>(Object(n["pushScopeId"])("data-v-daeebaae"),e=e(),Object(n["popScopeId"])(),e),Ve=he(()=>Object(n["createElementVNode"])("img",{class:"vda-button",src:de.a,alt:"Sign in with Verida"},null,-1)),we=Object(n["createTextVNode"])(" Sign in with Verida ");var Ce=Object(n["defineComponent"])({__name:"TheSignInButton",setup(e){const t=Object(n["ref"])(!1),c=Object(o["b"])(),l="verifive",a=Object(n["computed"])(()=>c.getters[l+"/user/isAuthenticated"]);async function r(){t.value=!0,await ve.initialize();const e=ve.context;if(e){const e=ve.profile;c.dispatch(l+"/user/setProfile",e),c.dispatch(l+"/user/signIn")}t.value=!1}return Object(n["onMounted"])(()=>{a.value&&r()}),(e,c)=>{const o=Object(n["resolveComponent"])("el-button"),l=Object(n["resolveDirective"])("loading");return Object(n["withDirectives"])((Object(n["openBlock"])(),Object(n["createBlock"])(o,{"element-loading-background":"rgba(0, 0, 0, 0.5)",size:"large",color:"#42248a",onClick:r},{default:Object(n["withCtx"])(()=>[Ve,we]),_:1})),[[l,t.value]])}}});c("8533");const ge=h()(Ce,[["__scopeId","data-v-daeebaae"]]);var Ne=ge;const xe=e=>(Object(n["pushScopeId"])("data-v-41f73e68"),e=e(),Object(n["popScopeId"])(),e),ke=["src"],ye={class:"title"},_e=xe(()=>Object(n["createElementVNode"])("p",{class:"tagline"},"The Indentity Federation Endgame",-1)),Ee=xe(()=>Object(n["createElementVNode"])("div",null,"© 2022 Verifive",-1));var Se=Object(n["defineComponent"])({__name:"TheLanding",setup(e){const t=Object(o["b"])(),l="verifive",a=t.state[l],r=Object(n["computed"])(()=>a.company.profile);return(e,t)=>{const o=Object(n["resolveComponent"])("el-col"),l=Object(n["resolveComponent"])("el-row"),a=Object(n["resolveComponent"])("el-divider");return Object(n["openBlock"])(),Object(n["createBlock"])(l,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(o,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(l,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(o,{class:"header"},{default:Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("img",{alt:"company logo",src:c("1771")("./"+Object(n["unref"])(r).landingLogo)},null,8,ke)]),_:1})]),_:1}),Object(n["createVNode"])(l,{class:"body body-background"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(o,null,{default:Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("h1",ye,Object(n["toDisplayString"])(Object(n["unref"])(r).tagline),1),_e,Object(n["createVNode"])(a,{"border-style":"none"}),Object(n["createVNode"])(Ne)]),_:1})]),_:1}),Object(n["createVNode"])(l,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(o,{class:"footer"},{default:Object(n["withCtx"])(()=>[Ee]),_:1})]),_:1})]),_:1})]),_:1})}}});c("6b9a");const Be=h()(Se,[["__scopeId","data-v-41f73e68"]]);var Te=Be;const De={key:0,id:"home"},Ie={key:1};var Re=Object(n["defineComponent"])({__name:"TheHome",setup(e){const t=Object(o["b"])(),c="verifive",l=t.state[c],a=Object(n["computed"])(()=>l.user.isAuthenticated);return(e,t)=>Object(n["unref"])(a)?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",De,[Object(n["createVNode"])(w),Object(n["createVNode"])(te),Object(n["createVNode"])(re)])):(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",Ie,[Object(n["createVNode"])(Te)]))}});c("b8e7");const Me=h()(Re,[["__scopeId","data-v-5db7481c"]]);t["default"]=Me},"6b9a":function(e,t,c){"use strict";c("76d6")},"76d6":function(e,t,c){},8533:function(e,t,c){"use strict";c("fd23")},"8e99":function(e,t,c){},b8e7:function(e,t,c){"use strict";c("3cd3")},d525:function(e,t,c){},dade:function(e,t,c){},e6d5:function(e,t,c){},f574:function(e,t,c){"use strict";c("5381")},fd23:function(e,t,c){}}]);
//# sourceMappingURL=chunk-81cce7fa.8b75db1b.js.map