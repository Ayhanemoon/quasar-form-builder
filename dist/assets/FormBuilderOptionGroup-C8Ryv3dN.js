import{_ as m,i as c,r,o as n,c as s,t as i,e as t,b as y,w as b,d as f,n as d}from"./index-B6Ntnc8J.js";const k={name:"FormBuilderOptionGroup",mixins:[c],props:{name:{default:"",type:String},value:{default:null,type:[Object,String,Array,Number,Boolean]},options:{default:()=>[],type:Array},typeOfInput:{default:"radio",type:String}},created(){},methods:{}},C={key:0,class:"outsideLabel"},g={key:1},B={key:2,class:"caption text-grey-8"};function _(e,a,l,q,v,O){const p=r("q-icon"),u=r("q-option-group");return n(),s("div",{class:d(["form-builder-optionGroup",e.customClass])},[e.label?(n(),s("div",C,i(e.label),1)):t("",!0),y(u,{modelValue:e.inputData,"onUpdate:modelValue":[a[0]||(a[0]=o=>e.inputData=o),a[1]||(a[1]=o=>e.change(o))],name:l.name,options:l.options,color:e.color,inline:e.inline,dense:e.dense,type:l.typeOfInput,disable:e.disable||e.readonly,class:d(e.customClass),onClick:e.onClick},{label:b(o=>[o.icon?(n(),f(p,{key:0,name:o.icon,color:"teal",size:"1.5em",class:"q-ml-sm"},null,8,["name"])):t("",!0),o.label?(n(),s("span",g,i(o.label),1)):t("",!0),o.caption?(n(),s("div",B,i(o.caption),1)):t("",!0)]),_:1},8,["modelValue","name","options","color","inline","dense","type","disable","class","onClick"])],2)}const S=m(k,[["render",_]]);export{S as default};
