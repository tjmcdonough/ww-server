(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0de381"],{"855c":function(e,l,t){"use strict";t.r(l);var a=t("7a23");const o={class:"rest-api-collection-edit"},d={class:"flex items-center"},c=Object(a["createElementVNode"])("div",{class:"body-2 ml-2"},"Make this request through a server",-1),i={class:"flex items-center"},n=Object(a["createElementVNode"])("div",{class:"body-2 ml-2"},"Send credentials",-1);function r(e,l,t,r,u,p){const m=Object(a["resolveComponent"])("wwEditorInputTextSelect"),b=Object(a["resolveComponent"])("wwEditorFormRow"),s=Object(a["resolveComponent"])("wwEditorInputRow"),v=Object(a["resolveComponent"])("wwEditorInputRadio"),y=Object(a["resolveComponent"])("wwEditorInputText"),O=Object(a["resolveComponent"])("wwEditorInputSwitch"),j=Object(a["resolveComponent"])("wwEditorQuestionMark");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",o,[Object(a["createVNode"])(b,{label:"Method",required:""},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(m,{options:u.methodOptions,"model-value":p.api.method,placeholder:"Select a method","onUpdate:modelValue":l[0]||(l[0]=e=>p.setProp("method",e))},null,8,["options","model-value"])]),_:1}),Object(a["createVNode"])(s,{label:"URL",required:"",type:"query",name:"url","model-value":p.api.url,placeholder:"https://api-url.com/endpoint",bindable:"dynamic"===t.collection.mode,"onUpdate:modelValue":l[1]||(l[1]=e=>p.setProp("url",e))},null,8,["model-value","bindable"]),p.isFields?(Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],{key:0},[Object(a["createVNode"])(b,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(v,{choices:u.dataChoices,"model-value":p.api.useRawBody,"onUpdate:modelValue":l[2]||(l[2]=e=>p.setProp("useRawBody",e))},null,8,["choices","model-value"])]),_:1}),p.api.useRawBody?(Object(a["openBlock"])(),Object(a["createBlock"])(s,{key:0,type:"query","model-value":p.api.data,label:"Body",bindable:"","onUpdate:modelValue":l[3]||(l[3]=e=>p.setProp("data",e))},null,8,["model-value"])):(Object(a["openBlock"])(),Object(a["createBlock"])(s,{key:1,label:"Fields",type:"array","model-value":p.api.data,bindable:"dynamic"===t.collection.mode,"onUpdate:modelValue":l[4]||(l[4]=e=>p.setProp("data",e)),onAddItem:l[5]||(l[5]=e=>p.setProp("data",[...p.api.data||[],{}]))},{default:Object(a["withCtx"])(({item:e,setItem:l})=>[Object(a["createVNode"])(s,{type:"query","model-value":e.key,label:"Key",placeholder:"Enter a value",small:"",bindable:"dynamic"===t.collection.mode,"onUpdate:modelValue":t=>l({...e,key:t})},null,8,["model-value","bindable","onUpdate:modelValue"]),Object(a["createVNode"])(s,{type:"query","model-value":e.value,label:"Value",placeholder:"Enter a value",small:"",bindable:"dynamic"===t.collection.mode,"onUpdate:modelValue":t=>l({...e,value:t})},null,8,["model-value","bindable","onUpdate:modelValue"])]),_:1},8,["model-value","bindable"]))],64)):Object(a["createCommentVNode"])("",!0),Object(a["createVNode"])(s,{label:"Headers",type:"array","model-value":p.api.headers,bindable:"dynamic"===t.collection.mode,"onUpdate:modelValue":l[6]||(l[6]=e=>p.setProp("headers",e)),onAddItem:l[7]||(l[7]=e=>p.setProp("headers",[...p.api.headers||[],{}]))},{default:Object(a["withCtx"])(({item:e,setItem:l})=>[Object(a["createVNode"])(s,{type:"query","model-value":e.key,label:"Key",placeholder:"Enter a value",small:"",bindable:"dynamic"===t.collection.mode,"onUpdate:modelValue":t=>l({...e,key:t})},null,8,["model-value","bindable","onUpdate:modelValue"]),Object(a["createVNode"])(s,{type:"query","model-value":e.value,label:"Value",placeholder:"Enter a value",small:"",bindable:"dynamic"===t.collection.mode,"onUpdate:modelValue":t=>l({...e,value:t})},null,8,["model-value","bindable","onUpdate:modelValue"])]),_:1},8,["model-value","bindable"]),Object(a["createVNode"])(s,{label:"Query string",type:"array","model-value":p.api.queries,bindable:"dynamic"===t.collection.mode,"onUpdate:modelValue":l[8]||(l[8]=e=>p.setProp("queries",e)),onAddItem:l[9]||(l[9]=e=>p.setProp("queries",[...p.api.queries||[],{}]))},{default:Object(a["withCtx"])(({item:e,setItem:l})=>[Object(a["createVNode"])(s,{type:"query","model-value":e.key,label:"Key",placeholder:"Enter a value",small:"",bindable:"dynamic"===t.collection.mode,"onUpdate:modelValue":t=>l({...e,key:t})},null,8,["model-value","bindable","onUpdate:modelValue"]),Object(a["createVNode"])(s,{type:"query","model-value":e.value,label:"Value",placeholder:"Enter a value",small:"",bindable:"dynamic"===t.collection.mode,"onUpdate:modelValue":t=>l({...e,value:t})},null,8,["model-value","bindable","onUpdate:modelValue"])]),_:1},8,["model-value","bindable"]),p.isFields?(Object(a["openBlock"])(),Object(a["createBlock"])(b,{key:1,label:"Content type"},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(m,{options:u.dataTypeOptions,"model-value":p.api.dataType,small:"","onUpdate:modelValue":l[10]||(l[10]=e=>p.setProp("dataType",e))},null,8,["options","model-value"])]),_:1})):Object(a["createCommentVNode"])("",!0),Object(a["createVNode"])(b,{label:"Result key"},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(y,{type:"text","model-value":p.api.resultKey,placeholder:"result.key",small:"","onUpdate:modelValue":l[11]||(l[11]=e=>p.setProp("resultKey",e))},null,8,["model-value"])]),_:1}),"dynamic"===t.collection.mode?(Object(a["openBlock"])(),Object(a["createBlock"])(b,{key:2},{default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("div",d,[Object(a["createVNode"])(O,{"model-value":p.api.isThroughServer,"onUpdate:modelValue":l[12]||(l[12]=e=>p.setProp("isThroughServer",e))},null,8,["model-value"]),c,Object(a["createVNode"])(j,{"tooltip-position":"top-left","tooltip-name":"rest-api-through-server",class:"ml-auto"})])]),_:1})):Object(a["createCommentVNode"])("",!0),"dynamic"!==t.collection.mode||p.api.isThroughServer?Object(a["createCommentVNode"])("",!0):(Object(a["openBlock"])(),Object(a["createBlock"])(b,{key:3},{default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("div",i,[Object(a["createVNode"])(O,{"model-value":p.api.isWithCredentials,"onUpdate:modelValue":l[13]||(l[13]=e=>p.setProp("isWithCredentials",e))},null,8,["model-value"]),n,Object(a["createVNode"])(j,{"tooltip-position":"top-left","tooltip-name":"rest-api-credentials",class:"ml-auto"})])]),_:1}))])}var u={props:{collection:{type:Object,required:!0},config:{type:Object,required:!0}},emits:["update:config"],data(){return{dataChoices:[{label:"Parsed fields",value:!1,default:!0},{label:"Raw body",value:!0}],dataTypeOptions:[{label:"Default (application/json)",value:"application/json",default:!0},{label:"application/x-www-form-urlencoded",value:"application/x-www-form-urlencoded"},{label:"application/javascript",value:"application/javascript"},{label:"application/xml",value:"application/xml"},{label:"multipart/form-data",value:"multipart/form-data"},{label:"text/plain",value:"text/plain"},{label:"text/html",value:"text/html"}],methodOptions:[{value:"GET",label:"GET",default:!0},{value:"POST",label:"POST"},{value:"PUT",label:"PUT"},{value:"PATCH",label:"PATCH"}]}},computed:{api(){return{method:"GET",url:void 0,headers:[],queries:[],data:[],resultKey:"",dataType:void 0,isThroughServer:!1,isWithCredentials:!1,useRawBody:!1,...this.config}},isFields(){return["POST","PUT","PATCH"].includes(this.api.method)}},methods:{setProp(e,l){this.$emit("update:config",{...this.api,[e]:l})}}},p=t("6b0d"),m=t.n(p);const b=m()(u,[["render",r]]);l["default"]=b}}]);