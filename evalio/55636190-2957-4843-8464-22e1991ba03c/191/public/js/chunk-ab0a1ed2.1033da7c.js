(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ab0a1ed2"],{"271e":function(e,t,n){"use strict";n.r(t);var c=n("62ec"),a=(n("7a23"),n("43ec")),o=n("88b2"),d=n("8b73"),i=n("68df"),b=n("5873"),l=n("8939"),r=n("8436"),u=n("2d83e"),s=n("1386"),f=n("4bff"),w=n("42fb"),m=n("3c4f"),p=n("c93c"),j=n("aa5d"),h=n("08af"),v=n("93ec"),O=n("e018"),k=n("433b"),g=n("221a");c["default"].component("wwobject-0be9270a-04fc-44a2-bcd7-b58f7dcfd944",a["a"]),c["default"].component("wwobject-21881619-a984-4847-81a9-922c3dbb5853",o["a"]),c["default"].component("wwobject-0dc461bb-103e-4b2e-80e0-846ec3c30a6e",d["a"]),c["default"].component("wwobject-d7904e9d-fc9a-4d80-9e32-728e097879ad",i["a"]),c["default"].component("wwobject-af811adf-94d9-49dd-ab22-e2f29ae30299",b["a"]),c["default"].component("wwobject-84bb3944-0404-4c4e-b0d5-058a63e4554a",l["a"]),c["default"].component("wwobject-9c263ffe-7da7-45e7-832c-543aef56faef",r["a"]),c["default"].component("wwobject-6ba133b6-a444-414f-93a5-25cd237dd398",u["a"]),c["default"].component("wwobject-83d890fb-84f9-4386-b459-fb4be89a8e15",s["a"]),c["default"].component("wwobject-6f8796b1-8273-498d-95fc-7013b7c63214",f["a"]),c["default"].component("wwobject-a36eacfa-16af-4363-858d-a03177f211d4",w["a"]),c["default"].component("wwobject-69d0b3ef-b265-494c-8cd1-874da4aa1834",m["a"]),c["default"].component("wwobject-700d9467-e29c-4129-b103-664e9d8611dd",p["a"]),c["default"].component("wwobject-3a7d6379-12d3-4387-98ff-b332bb492a63",j["a"]),c["default"].component("wwobject-aeb78b9a-6fb6-4c49-931d-faedcfad67ba",h["a"]),c["default"].component("wwobject-b783dc65-d528-4f74-8c14-e27c934c39b1",v["a"]),c["default"].component("wwobject-aa27b26f-0686-4c29-98c5-8217044045b7",O["a"]),c["default"].component("section-ef0ecc71-9a59-4eab-94b0-b36d66d3d61d",k["a"]),c["default"].component("section-99586bd3-2b15-4d6b-a025-6a50d07ca845",g["a"])},"2b8a":function(e,t,n){"use strict";n("75ae")},"2d83e":function(e,t,n){"use strict";var c=n("7a23");const a=["id","checked","value","name","required"];function o(e,t,n,o,d,i){const b=Object(c["resolveComponent"])("wwElement",!0);return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{class:Object(c["normalizeClass"])(["ww-webapp-checkbox",{editing:i.isEditing,selected:i.isSelected}]),style:Object(c["normalizeStyle"])(i.cssVariables)},[Object(c["createElementVNode"])("input",{id:`${n.wwElementState.name}-${o.uniqueId}-${n.uid}`,ref:"checkboxInput",checked:i.value,value:i.value,type:"checkbox",name:`${n.wwElementState.name}-${o.uniqueId}-${n.uid}`,class:Object(c["normalizeClass"])(n.content.checkbox&&"hidden"),required:n.content.required,onInput:t[0]||(t[0]=e=>i.handleManualInput(e))},null,42,a),n.content.checkbox?(Object(c["openBlock"])(),Object(c["createBlock"])(Object(c["resolveDynamicComponent"])(i.isEditing?"div":"label"),{key:0,for:`${n.wwElementState.name}-${o.uniqueId}-${n.uid}`},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(b,Object(c["mergeProps"])(n.content.checkbox,{states:i.value&&!i.isSelected?["checked"]:[]}),null,16,["states"])]),_:1},8,["for"])):Object(c["createCommentVNode"])("",!0),(Object(c["openBlock"])(),Object(c["createBlock"])(Object(c["resolveDynamicComponent"])(i.isEditing?"div":"label"),{for:`${n.wwElementState.name}-${o.uniqueId}-${n.uid}`},{default:Object(c["withCtx"])(()=>[n.content.isEmbeddedContainer?(Object(c["openBlock"])(),Object(c["createBlock"])(b,Object(c["mergeProps"])({key:0,class:"embedded-container"},n.content.embeddedContainer),null,16)):Object(c["createCommentVNode"])("",!0)]),_:1},8,["for"]))],6)}var d={props:{content:{type:Object,required:!0},wwFrontState:{type:Object,required:!0},wwElementState:{type:Object,required:!0},uid:{type:String,required:!0}},emits:["update:content:effect","trigger-event"],setup(e){const{value:t,setValue:n}=wwLib.wwVariable.useComponentVariable({uid:e.uid,name:"value",type:"boolean",defaultValue:void 0!==e.content.value&&e.content.value});return{variableValue:t,setValue:n,uniqueId:wwLib.wwUtils.getUid()}},computed:{value(){return!!this.variableValue},isEditing(){return!1},isSelected(){return!1},cssVariables(){let e="row";return e="left"===this.content.containerPosition||"right"===this.content.containerPosition?"left"===this.content.containerPosition?"row-reverse":"row":"top"===this.content.containerPosition?"column-reverse":"column",{"--container-direction":e}}},watch:{"content.isEmbeddedContainer":{async handler(e){if(e&&!this.content.embeddedContainer){const e=await wwLib.createElement("ww-flexbox",{},{},this.wwFrontState.sectionId);this.$emit("update:content:effect",{embeddedContainer:e})}else e||this.$emit("update:content:effect",{embeddedContainer:null})}},"content.value"(e){e=!!e,e!==this.value&&(this.setValue(e),this.$emit("trigger-event",{name:"initValueChange",event:{value:e}}))}},methods:{handleManualInput(e){const t=!!e.target.checked;t!==this.value&&(this.setValue(t),this.$emit("trigger-event",{name:"change",event:{domEvent:e,value:t}}))}}},i=(n("310f"),n("6b0d")),b=n.n(i);const l=b()(d,[["render",o],["__scopeId","data-v-6fe3d0ae"]]);t["a"]=l},"310f":function(e,t,n){"use strict";n("e8e4")},5873:function(e,t,n){"use strict";var c=n("7a23");function a(e,t,n,a,o,d){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{class:"ww-checkbox",style:Object(c["normalizeStyle"])(d.style)},[Object(c["createElementVNode"])("div",{class:Object(c["normalizeClass"])([n.content.icon]),"aria-hidden":"true"},null,2)],4)}var o={props:{content:{type:Object,required:!0}},computed:{style(){return{color:this.content.color,fontSize:this.content.fontSize+"px"}}}},d=(n("2b8a"),n("6b0d")),i=n.n(d);const b=i()(o,[["render",a],["__scopeId","data-v-79ce76b3"]]);t["a"]=b},"75ae":function(e,t,n){},e8e4:function(e,t,n){}}]);