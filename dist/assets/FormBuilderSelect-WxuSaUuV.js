import{_ as f,i as m,r as i,o as b,c as w,a as y,t as V,b as s,w as r,q as g,f as C,x as D,n as u}from"./index-B6Ntnc8J.js";const v={name:"FormBuilderSelect",mixins:[m],props:{name:{default:"",type:String},value:{default:()=>[],type:[Array,Object,String,Number,Boolean]},options:{default:()=>[],type:Array},optionDisable:{default:"disable",type:String},newValueMode:{default:void 0,type:String},clearable:{default:!0,type:Boolean},hideDropdownIcon:{default:!1,type:Boolean},dropdownIcon:{default:"arrow_drop_down",type:String},showNoOption:{default:!0,type:Boolean},filled:{default:!1,type:Boolean},rounded:{default:!1,type:Boolean},outlined:{default:!1,type:Boolean}},data(){return{model:null,filteredOptions:this.options}},computed:{placeholderSetter(){return this.inputData===null?this.placeholder:typeof this.inputData=="string"?"":this.multiple?this.inputData.length===0?this.placeholder:"":Object.keys(this.inputData).length===0?this.placeholder:""}},methods:{filterFn(e,l){const t=this.options.length>0&&typeof this.options[0]=="object";if(e===""){l(()=>{this.filteredOptions=this.options});return}l(()=>{const d=e.toLowerCase();this.filteredOptions=this.options.filter(o=>(t?o[this.optionLabel]:o).toString().toLowerCase().indexOf(d)>-1)})},createValue(e,l){this.createNewValue&&l(e,this.newValueMode)},test(){this.inputData=[]}}},B={class:"outsideLabel"};function S(e,l,t,d,o,n){const p=i("q-item-section"),c=i("q-item"),h=i("q-select");return b(),w("div",{class:u(["form-builder-select",e.customClass])},[y("div",B,V(e.placeholder?e.label:null),1),s(h,{modelValue:e.inputData,"onUpdate:modelValue":[l[0]||(l[0]=a=>e.inputData=a),l[1]||(l[1]=a=>e.change(a))],"transition-show":"jump-down","transition-hide":"jump-up",name:t.name,filled:t.filled,behavior:e.behavior,rounded:t.rounded,outlined:t.outlined,"option-value":e.optionValue,"option-label":e.optionLabel,"option-disable":t.optionDisable,options:o.filteredOptions,label:e.placeholder?null:e.label,"stack-label":!!e.placeholder,placeholder:n.placeholderSetter,rules:e.rules,icon:e.icon,"lazy-rules":e.lazyRules,multiple:e.multiple,"use-chips":e.useChips,"new-value-mode":t.newValueMode,"use-input":"","input-debounce":"500",disable:e.disable,readonly:e.readonly,class:u(e.customClass),"popup-content-class":e.customClass,"input-class":e.customClass,"emit-value":"","hide-dropdown-icon":t.hideDropdownIcon,"dropdown-icon":t.dropdownIcon,"map-options":"",clearable:t.clearable,onNewValue:n.createValue,onFilter:n.filterFn,onClick:e.onClick},{"no-option":r(()=>[g(s(c,null,{default:r(()=>[s(p,{class:"text-grey"},{default:r(()=>[C(" موردی یافت نشد ")]),_:1})]),_:1},512),[[D,t.showNoOption]])]),_:1},8,["modelValue","name","filled","behavior","rounded","outlined","option-value","option-label","option-disable","options","label","stack-label","placeholder","rules","icon","lazy-rules","multiple","use-chips","new-value-mode","disable","readonly","class","popup-content-class","input-class","hide-dropdown-icon","dropdown-icon","clearable","onNewValue","onFilter","onClick"])],2)}const N=f(v,[["render",S]]);export{N as default};
