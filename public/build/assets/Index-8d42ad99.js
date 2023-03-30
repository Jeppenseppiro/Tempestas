import{N as u}from"./Nav-2a4d7a20.js";import{_ as k,w as F}from"./_plugin-vue_export-helper-989acfb2.js";import f from"./CurrentDayForecast-71d2a3c1.js";import v from"./DaysForecast-7560365b.js";import y from"./HourlyForecast-97db2d04.js";import{c as a,a as e,h as c,d as i,g as l,t as _,w as d,v as h,b as g,o as n,f as p}from"./app-22ca27f4.js";import"./Map-ab66692a.js";import"./LineChart-2605f7c1.js";const T={layout:u,props:{},components:{Nav:u,CurrentDayForecast:f,DaysForecast:v,HourlyForecast:y},data(){return{weatherAPIStatus:null,weatherAPIData:null,weatherForecast:F,searchLocations:"",datepickerFrom:"",datepickerTo:""}},computed:{weatherDateTime(){let o;return this.datepickerFrom!=""&&this.datepickerTo!=""?o=`${this.datepickerFrom}/${this.datepickerTo}`:this.datepickerFrom!=""&&this.datepickerTo==""?o=`${this.datepickerFrom}`:this.datepickerFrom==""&&this.datepickerTo!=""?o=`${this.datepickerTo}`:o="",o}}},D={class:"container mx-auto bg-base-800"},C={key:0},V={key:0,class:"flex h-screen"},I={class:"m-auto"},L={key:0,class:"btn font-bold text-xl",for:"search-modal"},N={class:"grid grid-cols-12 gap-4"},P={class:"col-span-12"},W={class:"col-span-12 px-6"},A={class:"col-span-12 px-6"},S={key:1,class:"text-center items-center"},B=e("br",null,null,-1),H=e("a",{href:"https://www.visualcrossing.com/weather-api",class:"text-blue-700"},"Visual Crossing",-1),U=e("input",{type:"checkbox",id:"search-modal",class:"modal-toggle"},null,-1),j={class:"modal"},K={class:"modal-box w-11/12 max-w-5xl"},M=e("label",{for:"search-modal",class:"btn btn-info btn-sm float-right ml-2 mb-2 px-4 font-bold text-xl hover:btn-warning"},"X",-1),q={class:"form-control w-full"},z={class:"input-group"},E=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})],-1),O=[E],X={class:"label"},G={key:0,class:"label-text text-red-600"},J=e("span",{class:"label-text-alt"},null,-1),Q={class:"text-center items-center"},R=["max"],Y=e("label",{class:"text-2xl"}," - ",-1),Z=["min"];function $(o,s,ee,te,t,m){const b=p("CurrentDayForecast"),w=p("DaysForecast"),x=p("HourlyForecast");return n(),a("div",D,[t.weatherAPIStatus!=429?(n(),a("div",C,[!Object.keys(t.weatherForecast.newWeatherCurrentForecast).length>0?(n(),a("div",V,[e("div",I,[o.$page.component=="Weather/Index"?(n(),a("label",L,"Search Location")):c("",!0)])])):c("",!0),e("div",N,[e("div",P,[i(b)]),e("div",W,[i(w)]),e("div",A,[i(x)])])])):(n(),a("div",S,[l(_(t.weatherAPIData),1),B,l(" Please visit "),H,l(" to create new / replace exisiting API keys ")])),U,e("div",j,[e("div",K,[M,e("div",q,[e("div",z,[d(e("input",{type:"text",placeholder:"Search location",class:"input input-bordered w-full","onUpdate:modelValue":s[0]||(s[0]=r=>t.searchLocations=r),onKeyup:s[1]||(s[1]=g(r=>t.weatherForecast.updateWeatherForecast(t.searchLocations,m.weatherDateTime),["enter"]))},null,544),[[h,t.searchLocations]]),e("button",{class:"btn btn-square hover:btn-success",for:"search-modal",onClick:s[2]||(s[2]=r=>t.weatherForecast.updateWeatherForecast(t.searchLocations,m.weatherDateTime))},O)]),e("label",X,[t.weatherForecast.errorWeatherForecast.status==400?(n(),a("span",G,_(t.weatherForecast.errorWeatherForecast.data),1)):c("",!0),J])]),e("div",Q,[d(e("input",{type:"date",class:"btn lg:btn-md btn-xs glassbtn btn-outline btn-success","onUpdate:modelValue":s[3]||(s[3]=r=>t.datepickerFrom=r),max:t.datepickerTo},null,8,R),[[h,t.datepickerFrom]]),Y,d(e("input",{type:"date",class:"btn lg:btn-md btn-xs glassbtn btn-outline btn-success","onUpdate:modelValue":s[4]||(s[4]=r=>t.datepickerTo=r),min:t.datepickerFrom},null,8,Z),[[h,t.datepickerTo]])])])])])}const de=k(T,[["render",$]]);export{de as default};