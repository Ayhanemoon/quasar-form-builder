import{I as m}from"./InputPreview-CDQcVP06.js";import r from"./FormBuilderColor-CcmUcmW1.js";import{h as p,j as v,r as n,o as c,c as V,a as s,b as a,w as b,k as f,l as g}from"./index-B6Ntnc8J.js";const C={class:"inputComponent"},_={class:"row q-col-gutter-md"},U={class:"col-md-4"},k={class:"col-md-4"},q={class:"col-md-4"},x={class:"col-12"},j={__name:"colorComponent",props:{config:{},configModifiers:{}},emits:["update:config"],setup(t){const l=p(t,"config"),i={filled:!1,clearable:!1,disable:!1,loading:!1,outlined:!1,customClass:null,label:null,placeholder:null};return v(()=>{l.value=Object.assign(i,l.value)}),(w,e)=>{const u=n("q-input"),d=n("q-checkbox");return c(),V("div",C,[s("div",_,[s("div",U,[a(u,{modelValue:l.value.label,"onUpdate:modelValue":e[0]||(e[0]=o=>l.value.label=o),label:"label",dense:""},null,8,["modelValue"])]),s("div",k,[a(u,{modelValue:l.value.placeholder,"onUpdate:modelValue":e[1]||(e[1]=o=>l.value.placeholder=o),label:"placeholder",dense:""},null,8,["modelValue"])]),s("div",q,[a(u,{modelValue:l.value.customClass,"onUpdate:modelValue":e[2]||(e[2]=o=>l.value.customClass=o),label:"customClass",dense:""},null,8,["modelValue"])]),s("div",x,[a(d,{modelValue:l.value.filled,"onUpdate:modelValue":e[3]||(e[3]=o=>l.value.filled=o),label:"filled",dense:""},null,8,["modelValue"]),a(d,{modelValue:l.value.disable,"onUpdate:modelValue":e[4]||(e[4]=o=>l.value.disable=o),label:"disable",dense:""},null,8,["modelValue"]),a(d,{modelValue:l.value.loading,"onUpdate:modelValue":e[5]||(e[5]=o=>l.value.loading=o),label:"loading",dense:""},null,8,["modelValue"]),a(d,{modelValue:l.value.clearable,"onUpdate:modelValue":e[6]||(e[6]=o=>l.value.clearable=o),label:"clearable",dense:""},null,8,["modelValue"]),a(d,{modelValue:l.value.outlined,"onUpdate:modelValue":e[7]||(e[7]=o=>l.value.outlined=o),label:"outlined",dense:""},null,8,["modelValue"])])]),a(m,null,{default:b(()=>[a(r,f(g(l.value)),null,16)]),_:1})])}}};export{j as default};
