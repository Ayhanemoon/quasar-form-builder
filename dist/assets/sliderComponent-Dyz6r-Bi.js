import{I as i}from"./InputPreview-CDQcVP06.js";import r from"./FormBuilderSlider-DPvrIlbm.js";import{h as c,j as p,r as u,o as v,c as b,a as s,b as a,w as V,k as f,l as _}from"./index-B6Ntnc8J.js";const g={class:"inputComponent"},x={class:"row q-col-gutter-md"},C={class:"col-md-3"},U={class:"col-md-3"},k={class:"col-md-3"},q={class:"col-md-3"},y={class:"col-12"},j={__name:"sliderComponent",props:{config:{},configModifiers:{}},emits:["update:config"],setup(t){const e=c(t,"config"),m={readonly:!1,disable:!1,min:0,max:100,customClass:null,label:null};return p(()=>{e.value=Object.assign(m,e.value)}),(w,l)=>{const n=u("q-input"),d=u("q-checkbox");return v(),b("div",g,[s("div",x,[s("div",C,[a(n,{modelValue:e.value.label,"onUpdate:modelValue":l[0]||(l[0]=o=>e.value.label=o),label:"label",dense:""},null,8,["modelValue"])]),s("div",U,[a(n,{modelValue:e.value.customClass,"onUpdate:modelValue":l[1]||(l[1]=o=>e.value.customClass=o),label:"customClass",dense:""},null,8,["modelValue"])]),s("div",k,[a(n,{modelValue:e.value.min,"onUpdate:modelValue":l[2]||(l[2]=o=>e.value.min=o),label:"min",type:"number",dense:""},null,8,["modelValue"])]),s("div",q,[a(n,{modelValue:e.value.max,"onUpdate:modelValue":l[3]||(l[3]=o=>e.value.max=o),label:"max",type:"number",dense:""},null,8,["modelValue"])]),s("div",y,[a(d,{modelValue:e.value.readonly,"onUpdate:modelValue":l[4]||(l[4]=o=>e.value.readonly=o),label:"filled",dense:""},null,8,["modelValue"]),a(d,{modelValue:e.value.disable,"onUpdate:modelValue":l[5]||(l[5]=o=>e.value.disable=o),label:"disable",dense:""},null,8,["modelValue"])])]),a(i,null,{default:V(()=>[a(r,f(_(e.value)),null,16)]),_:1})])}}};export{j as default};
