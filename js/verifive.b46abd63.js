(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["verifive"],{"16c0":function(e,t,a){},7106:function(e,t,a){"use strict";a("16c0")},b25d:function(e,t,a){"use strict";a.r(t);a("caad");var l=a("7a23"),c=a("f6f2"),o=a("1e49"),d=a("c9a1"),i=a("3ef4");const n=e=>(Object(l["pushScopeId"])("data-v-3ac1819c"),e=e(),Object(l["popScopeId"])(),e),r=n(()=>Object(l["createElementVNode"])("div",{id:"verifive"},[Object(l["createElementVNode"])("h1",null,"Entity Registry")],-1)),b={class:"flex"},u=Object(l["createTextVNode"])(" Register "),O=Object(l["createTextVNode"])(" Revoke "),j=Object(l["createTextVNode"])(" Clear Selection "),p=Object(l["createTextVNode"])("did:verida:"),s=Object(l["createTextVNode"])("https://"),m=Object(l["createTextVNode"])("Register"),v=Object(l["createTextVNode"])("Cancel");var V=Object(l["defineComponent"])({__name:"Verifive",setup(e){const t=Object(l["ref"])(!1),a=Object(l["ref"])("top"),n=Object(l["ref"])([]),V=Object(l["reactive"])({name:"",did:"",credential:"",serviceEndpoint:"",validity:!1}),f=Object(l["ref"])(""),C=Object(l["computed"])(()=>y.filter(e=>!f.value||e.serviceCredential.toLowerCase().includes(f.value.toLowerCase()))),h=Object(l["ref"])(),w=Object(l["ref"])(),N=e=>{h.value=e},x=e=>{w.value.setCurrentRow(e)},y=[{name:"Aequivalent",did:"did:verida:0x1234...abcd",serviceCredential:"University Diploma",serviceEndpoint:"https://aequivalent.ch",validFrom:"2022-01-01",validUntil:"2024-07-01"},{name:"Gleif",did:"did:eth:0x1234...abcd",serviceCredential:"vLEI",serviceEndpoint:"https://gleif.org",validFrom:"2022-01-01",validUntil:"2024-07-01"}],_=()=>{d["a"].confirm("A new entity will be register. Continue?","Warning",{confirmButtonText:"Confirm",cancelButtonText:"Cancel",type:"warning"}).then(()=>{Object(i["a"])({type:"success",message:"Entity registered successfully"})}).catch(()=>{Object(i["a"])({type:"info",message:"Register action canceled"})})},g=()=>{d["a"].prompt("Please input an authorised e-mail","Security check",{confirmButtonText:"OK",cancelButtonText:"Cancel",inputPattern:/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,inputErrorMessage:"Invalid Email"}).then(({value:e})=>{Object(i["a"])({type:"success",message:"Entity revoked successfully"})}).catch(()=>{Object(i["a"])({type:"info",message:"Revoke action canceled"})})};return(e,d)=>{const i=Object(l["resolveComponent"])("el-col"),y=Object(l["resolveComponent"])("el-row"),k=Object(l["resolveComponent"])("el-button"),E=Object(l["resolveComponent"])("el-card"),T=Object(l["resolveComponent"])("el-input"),U=Object(l["resolveComponent"])("el-table-column"),S=Object(l["resolveComponent"])("el-link"),B=Object(l["resolveComponent"])("el-form-item"),R=Object(l["resolveComponent"])("el-option"),I=Object(l["resolveComponent"])("el-select"),F=Object(l["resolveComponent"])("el-switch"),L=Object(l["resolveComponent"])("el-date-picker"),D=Object(l["resolveComponent"])("el-divider"),q=Object(l["resolveComponent"])("el-form"),P=Object(l["resolveComponent"])("el-dialog");return Object(l["openBlock"])(),Object(l["createElementBlock"])(l["Fragment"],null,[Object(l["createVNode"])(y,null,{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(i,null,{default:Object(l["withCtx"])(()=>[r]),_:1})]),_:1}),Object(l["createVNode"])(y,null,{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(i,null,{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(E,{shadow:"never"},{default:Object(l["withCtx"])(()=>[Object(l["createElementVNode"])("div",b,[Object(l["createVNode"])(k,{type:"primary",plain:"",onClick:d[0]||(d[0]=e=>t.value=!0)},{default:Object(l["withCtx"])(()=>[u]),_:1}),h.value?(Object(l["openBlock"])(),Object(l["createElementBlock"])(l["Fragment"],{key:0},[Object(l["createVNode"])(k,{type:"danger",plain:"",onClick:g},{default:Object(l["withCtx"])(()=>[O]),_:1}),Object(l["createVNode"])(k,{plain:"",onClick:d[1]||(d[1]=e=>x())},{default:Object(l["withCtx"])(()=>[j]),_:1})],64)):Object(l["createCommentVNode"])("",!0)])]),_:1})]),_:1})]),_:1}),Object(l["createVNode"])(y,null,{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(i,null,{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(E,{shadow:"never"},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(T,{modelValue:f.value,"onUpdate:modelValue":d[2]||(d[2]=e=>f.value=e),placeholder:"Search all services credentials",clearable:"",size:"default"},null,8,["modelValue"])]),_:1}),Object(l["createVNode"])(E,{shadow:"never"},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(Object(l["unref"])(o["a"]),{ref_key:"singleTableRef",ref:w,data:Object(l["unref"])(C),style:{width:"100%"},"highlight-current-row":"",border:"",height:"250","header-cell-style":{background:"#fafafa"},onCurrentChange:N},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(U,{type:"index",width:"50"}),Object(l["createVNode"])(U,{prop:"name",label:"Company Name"}),Object(l["createVNode"])(U,{prop:"did",label:"Decentralised Identifier"}),Object(l["createVNode"])(U,{prop:"serviceCredential",label:"Service Credential"}),Object(l["createVNode"])(U,{label:"Service Endpoint"},{default:Object(l["withCtx"])(e=>[Object(l["createVNode"])(S,{type:"primary",underline:!1,href:"",target:"_blank"},{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])(Object(l["toDisplayString"])(e.row.serviceEndpoint),1)]),_:2},1024)]),_:1}),Object(l["createVNode"])(U,{prop:"validFrom",label:"Valid From"}),Object(l["createVNode"])(U,{prop:"validUntil",label:"Valid Until"})]),_:1},8,["data"])]),_:1})]),_:1})]),_:1}),Object(l["createVNode"])(P,{modelValue:t.value,"onUpdate:modelValue":d[10]||(d[10]=e=>t.value=e),title:"Register a new entity"},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(q,{model:V,"label-position":a.value},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(B,{label:"Company Name"},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(T,{modelValue:V.name,"onUpdate:modelValue":d[3]||(d[3]=e=>V.name=e),placeholder:"Google LLC"},null,8,["modelValue"])]),_:1}),Object(l["createVNode"])(B,{label:"Decentralised Identifier"},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(T,{modelValue:V.did,"onUpdate:modelValue":d[4]||(d[4]=e=>V.did=e),placeholder:"0x1234...abcd"},{prepend:Object(l["withCtx"])(()=>[p]),_:1},8,["modelValue"])]),_:1}),Object(l["createVNode"])(B,{label:"Service Credential"},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(I,{modelValue:V.credential,"onUpdate:modelValue":d[5]||(d[5]=e=>V.credential=e),placeholder:"Select a service credential",style:{width:"100%"}},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(R,{label:"University Diploma",value:"university_diploma"}),Object(l["createVNode"])(R,{label:"Verifiable LEI",value:"v_lei"})]),_:1},8,["modelValue"])]),_:1}),Object(l["createVNode"])(B,{label:"Service Endpoint"},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(T,{modelValue:V.serviceEndpoint,"onUpdate:modelValue":d[6]||(d[6]=e=>V.serviceEndpoint=e),placeholder:"api.aequivalent.ch"},{prepend:Object(l["withCtx"])(()=>[s]),_:1},8,["modelValue"])]),_:1}),Object(l["createVNode"])(B,{label:"Enable Validity"},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(F,{modelValue:V.validity,"onUpdate:modelValue":d[7]||(d[7]=e=>V.validity=e),style:{"--el-switch-on-color":"#13ce66"},"inline-prompt":"","active-icon":Object(l["unref"])(c["a"]),"inactive-icon":Object(l["unref"])(c["b"])},null,8,["modelValue","active-icon","inactive-icon"])]),_:1}),V.validity?(Object(l["openBlock"])(),Object(l["createBlock"])(B,{key:0,label:"Pick Validity"},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(L,{modelValue:n.value,"onUpdate:modelValue":d[8]||(d[8]=e=>n.value=e),type:"datetimerange","range-separator":"To","start-placeholder":"Start date","end-placeholder":"End date"},null,8,["modelValue"])]),_:1})):Object(l["createCommentVNode"])("",!0),Object(l["createVNode"])(D),Object(l["createVNode"])(B,null,{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(k,{type:"primary",plain:"",onClick:_},{default:Object(l["withCtx"])(()=>[m]),_:1}),Object(l["createVNode"])(k,{plain:"",onClick:d[9]||(d[9]=e=>t.value=!1)},{default:Object(l["withCtx"])(()=>[v]),_:1})]),_:1})]),_:1},8,["model","label-position"])]),_:1},8,["modelValue"])],64)}}}),f=(a("7106"),a("6b0d")),C=a.n(f);const h=C()(V,[["__scopeId","data-v-3ac1819c"]]);t["default"]=h}}]);
//# sourceMappingURL=verifive.b46abd63.js.map