(function(t){function e(e){for(var n,s,a=e[0],i=e[1],p=e[2],l=0,m=[];l<a.length;l++)s=a[l],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&m.push(r[s][0]),r[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);u&&u(e);while(m.length)m.shift()();return c.push.apply(c,p||[]),o()}function o(){for(var t,e=0;e<c.length;e++){for(var o=c[e],n=!0,a=1;a<o.length;a++){var i=o[a];0!==r[i]&&(n=!1)}n&&(c.splice(e--,1),t=s(s.s=o[0]))}return t}var n={},r={app:0},c=[];function s(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=n,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(o,n,function(e){return t[e]}.bind(null,n));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/example/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=e,a=a.slice();for(var p=0;p<a.length;p++)e(a[p]);var u=i;c.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"0ea8":function(t,e,o){},"22aa":function(t,e,o){t.exports=o.p+"img/formButton.64195a24.png"},"2b62":function(t,e,o){"use strict";o("666f")},"31c1":function(t,e,o){"use strict";o("5f86")},"43b0":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d"),o("d3b7"),o("25f0"),o("4fad"),o("d81d"),o("99af"),o("b0c0");var n=o("7a23"),r=o("3a60"),c=o.n(r),s={id:"app"};function a(t,e){var o=Object(n["B"])("router-view");return Object(n["u"])(),Object(n["f"])("div",s,[Object(n["i"])(o)])}var i=o("d959"),p=o.n(i);const u={},l=p()(u,[["render",a]]);var m=l,b=o("6c02");function d(t,e,o,r,c,s){var a=Object(n["B"])("back-ligth"),i=Object(n["B"])("component-information"),p=Object(n["B"])("home-table"),u=Object(n["B"])("app-form"),l=Object(n["B"])("test");return Object(n["u"])(),Object(n["f"])(n["a"],null,[Object(n["i"])(a,{ref:"pipay"},null,512),t.randomColor?(Object(n["u"])(),Object(n["d"])(i,{key:0})):Object(n["e"])("",!0),Object(n["g"])("div",{onClick:e[0]||(e[0]=Object(n["K"])((function(){return t.showStatistiks&&t.showStatistiks.apply(t,arguments)}),["stop"])),style:Object(n["p"])(t.randomColor),class:"home"},[Object(n["i"])(p),Object(n["i"])(u)],4),Object(n["i"])(l,{component:this})],64)}var h=function(t){return Object(n["x"])("data-v-40b81347"),t=t(),Object(n["v"])(),t},f=h((function(){return Object(n["g"])("h2",null,"Добавление пользователя",-1)}));function O(t,e,o,r,c,s){var a=Object(n["B"])("form-input"),i=Object(n["B"])("form-select"),p=Object(n["B"])("form-button");return s.isForm?(Object(n["u"])(),Object(n["f"])("form",{key:0,onClick:e[4]||(e[4]=Object(n["K"])((function(){return t.showStatistiks&&t.showStatistiks.apply(t,arguments)}),["stop"])),style:Object(n["p"])(t.randomColor),ref:"form",onSubmit:e[5]||(e[5]=Object(n["K"])((function(){return s.addNewUser&&s.addNewUser.apply(s,arguments)}),["prevent"])),class:"mainForm"},[f,Object(n["i"])(a,{modelValue:c.childName,"onUpdate:modelValue":e[0]||(e[0]=function(t){return c.childName=t}),placeHolder:"Введите имя",labelText:"Имя",formIsValid:c.formIsValid},null,8,["modelValue","formIsValid"]),Object(n["i"])(a,{modelValue:c.childNumber,"onUpdate:modelValue":e[1]||(e[1]=function(t){return c.childNumber=t}),placeHolder:"Введите номер телефона",labelText:"Телефон",inputType:"tel",formIsValid:c.formIsValid},null,8,["modelValue","formIsValid"]),Object(n["i"])(i,{modelValue:c.parentName,"onUpdate:modelValue":e[2]||(e[2]=function(t){return c.parentName=t}),usersForSelect:s.listUsersForSelect,labelText:"Начальник"},null,8,["modelValue","usersForSelect"]),Object(n["i"])(p),Object(n["g"])("img",{onClick:e[3]||(e[3]=function(){return s.closeForm&&s.closeForm.apply(s,arguments)}),class:"mainForm__close",src:"https://img.icons8.com/emoji/48/000000/cross-mark-emoji.png"})],36)):Object(n["e"])("",!0)}var j={class:"label"},g=["type","placeholder","disabled"];function y(t,e,o,r,c,s){var a=Object(n["C"])("mask");return Object(n["u"])(),Object(n["f"])("div",{onClick:e[1]||(e[1]=Object(n["K"])((function(){return t.showStatistiks&&t.showStatistiks.apply(t,arguments)}),["stop"])),style:Object(n["p"])(t.randomColor),class:"mainForm__wrapper"},[Object(n["g"])("label",j,Object(n["F"])(o.labelText),1),Object(n["J"])(Object(n["g"])("input",{onInput:e[0]||(e[0]=function(t){return s.sendModelValue(t)}),type:o.inputType,placeholder:o.placeHolder,class:Object(n["o"])(["input",{error:s.checkError}]),disabled:t.randomColor},null,42,g),[[a,"tel"===o.inputType?"# ### ### ## ##":"XXXXXXXXXXXXXXX"]])],4)}var S={name:"formInput",directives:{mask:r["mask"]},emits:["update:modelValue"],props:{inputType:{type:String,default:"text",validator:function(t){return"string"===typeof t}},placeHolder:{type:String,default:"",validator:function(t){return"string"===typeof t}},labelText:{type:String,default:""},modelValue:{type:String},formIsValid:{type:Boolean,default:!1}},data:function(){return{error:this.formIsValid}},methods:{sendModelValue:function(t){var e=t.target;this.$emit("update:modelValue",e.value)}},computed:{checkError:function(){return!this.formIsValid&&!this.modelValue}}};o("31c1");const v=p()(S,[["render",y],["__scopeId","data-v-ec7001f0"]]);var C=v;function w(t,e,o,r,c,s){return Object(n["u"])(),Object(n["f"])("button",{style:Object(n["p"])(t.randomColor),class:"btn"},Object(n["F"])(o.buttonText),5)}var k={name:"formButton",props:{buttonText:{type:String,default:"сохранить"}}};const U=p()(k,[["render",w]]);var F=U,I={class:"label"},P=["disabled"],_=["value"];function L(t,e,o,r,c,s){return Object(n["u"])(),Object(n["f"])("div",{onClick:e[1]||(e[1]=Object(n["K"])((function(){return t.showStatistiks&&t.showStatistiks.apply(t,arguments)}),["stop"])),style:Object(n["p"])(t.randomColor),class:"mainForm__wrapper"},[Object(n["g"])("label",I,Object(n["F"])(o.labelText),1),Object(n["g"])("select",{class:"select",onChange:e[0]||(e[0]=function(t){return s.sendValue(t)}),disabled:t.randomColor},[(Object(n["u"])(!0),Object(n["f"])(n["a"],null,Object(n["A"])(o.usersForSelect,(function(t,e){return Object(n["u"])(),Object(n["f"])("option",{value:t.name,key:e},Object(n["F"])(t.name),9,_)})),128))],40,P)],4)}var D={name:"formSelect",emits:["update:modelValue"],props:{modelValue:{type:String},usersForSelect:{type:Object},labelText:{type:String}},methods:{sendValue:function(t){var e=t.target;this.$emit("update:modelValue",e.value)}}};const $=p()(D,[["render",L]]);var x=$,V={name:"appForm",components:{formInput:C,formButton:F,formSelect:x},data:function(){return{childName:"",childNumber:"",parentName:"user1",formIsValid:!0}},methods:{addNewUser:function(){if(this.childName&&this.childNumber&&this.parentName){var t={childName:this.childName,childNumber:this.childNumber,parentName:this.parentName};this.$store.dispatch("usersList/createdChildUser",t),this.$refs.form.reset()}else!1===this.randomColor&&(this.formIsValid=!1)},closeForm:function(){this.randomColor||this.$store.dispatch("mainForm/changeStatusForm")}},computed:{isForm:function(){return this.$store.getters["mainForm/getStatusForm"]},listUsersForSelect:function(){return this.$store.dispatch("usersList/changeAllParentUsersList",this.$store.getters["usersList/getListUsers"]),this.$store.getters["usersList/getAllParent"]}}};o("b939");const N=p()(V,[["render",O],["__scopeId","data-v-40b81347"]]);var B=N;function T(t,e,o,r,c,s){var a=Object(n["B"])("child");return Object(n["u"])(),Object(n["f"])("div",{onClick:e[1]||(e[1]=Object(n["K"])((function(){return t.showStatistiks&&t.showStatistiks.apply(t,arguments)}),["stop"])),style:Object(n["p"])(t.randomColor),class:"home__table"},[Object(n["g"])("button",{onClick:e[0]||(e[0]=function(){return s.openForm&&s.openForm.apply(s,arguments)}),class:"btn"},"добавить"),Object(n["i"])(a,{item:"firstEl"}),(Object(n["u"])(!0),Object(n["f"])(n["a"],null,Object(n["A"])(s.listUsers,(function(t){return Object(n["u"])(),Object(n["d"])(a,{key:t.id,item:t},null,8,["item"])})),128))],4)}o("e9c4");var E=function(t){return Object(n["x"])("data-v-46a9748f"),t=t(),Object(n["v"])(),t},A={class:"user__wrapper"},M={class:"user__name"},X={key:0,class:"user__image",src:"https://img.icons8.com/fluency/48/000000/plus.png"},z={key:1,class:"user__image",src:"https://img.icons8.com/color/48/000000/minus.png"},H={class:"user__number"},K=E((function(){return Object(n["g"])("div",{class:"user__wrapper"},[Object(n["g"])("div",{class:"user__name"},[Object(n["g"])("h1",null,"Имя")]),Object(n["g"])("div",{class:"user__number"},[Object(n["g"])("h2",null,"Телефон")])],-1)})),J=[K];function R(t,e,o,r,c,s){return Object(n["u"])(),Object(n["f"])(n["a"],null,[o.item.isShow?(Object(n["u"])(),Object(n["f"])("div",{key:0,style:Object(n["p"])(t.randomColor),onClick:e[0]||(e[0]=Object(n["K"])((function(e){return s.showChildUsers(),t.showStatistiks()}),["stop"])),class:Object(n["o"])(["user",s.userStatus])},[Object(n["g"])("div",A,[Object(n["g"])("div",M,[Object(n["g"])("h1",null,Object(n["F"])(o.item.name),1),"plus"===s.isImage?(Object(n["u"])(),Object(n["f"])("img",X)):Object(n["e"])("",!0),"minus"===s.isImage?(Object(n["u"])(),Object(n["f"])("img",z)):Object(n["e"])("",!0)]),Object(n["g"])("div",H,[Object(n["g"])("h2",null,Object(n["F"])(o.item.number),1)])]),o.item.child.length?(Object(n["u"])(!0),Object(n["f"])(n["a"],{key:0},Object(n["A"])(o.item.child,(function(t){return Object(n["u"])(),Object(n["d"])(Object(n["D"])("user"),{key:t.name,item:t,child:!0},null,8,["item"])})),128)):Object(n["e"])("",!0)],6)):Object(n["e"])("",!0),"firstEl"===o.item?(Object(n["u"])(),Object(n["f"])("div",{key:1,onClick:e[1]||(e[1]=Object(n["K"])((function(){return t.showStatistiks&&t.showStatistiks.apply(t,arguments)}),["stop"])),style:Object(n["p"])(t.randomColor),class:Object(n["o"])(["user",s.userStatus])},J,6)):Object(n["e"])("",!0)],64)}var G={name:"user",props:{item:{default:""},child:{type:Boolean}},methods:{showChildUsers:function(){this.randomColor||(this.isImage=!this.isImage,this.$store.dispatch("usersList/changeIsShowChildEl",this.item.id))}},computed:{userStatus:function(){return this.child?"user-child":"user-main"},isChild:function(){return this.item.child.length?"yes":""},isImage:function(){return!!this.item.child.length&&(this.item.child[0].isShow?"minus":"plus")}}};o("d6fe");const q=p()(G,[["render",R],["__scopeId","data-v-46a9748f"]]);var Q=q,W={name:"homeTable",components:{child:Q},created:function(){window.addEventListener("beforeunload",this.addLocalStorageBeforeReebot),JSON.parse(localStorage.getItem("listUsers"))&&this.$store.dispatch("usersList/callCreateUserListInLocalStorage")},computed:{listUsers:function(){return this.$store.getters["usersList/getListUsers"]}},methods:{addLocalStorageBeforeReebot:function(){localStorage.setItem("listUsers",JSON.stringify(this.$store.getters["usersList/getListUsers"]))},openForm:function(){this.$store.dispatch("mainForm/changeStatusForm","open")}}};const Y=p()(W,[["render",T]]);var Z=Y;function tt(t,e,o,r,c,s){return Object(n["u"])(),Object(n["f"])("button",{class:"btn",onClick:e[0]||(e[0]=function(){return s.changeStatusComponent&&s.changeStatusComponent.apply(s,arguments)})},Object(n["F"])(s.buttonTetx),1)}var et={name:"backLight",methods:{changeStatusComponent:function(){this.$store.dispatch("componentInfo/changeComponentStatus"),this.$store.dispatch("mainForm/changeStatusForm","open")}},computed:{buttonTetx:function(){return this.$store.getters["componentInfo/getComponentStatus"]?"вернуть обратно":"подсветить компоненты"}}};o("ec45");const ot=p()(et,[["render",tt],["__scopeId","data-v-c8a72642"]]);var nt=ot,rt={class:"component-information"};function ct(t,e,o,r,c,s){return Object(n["u"])(),Object(n["f"])("div",rt,[Object(n["g"])("button",{class:"btn",onClick:e[0]||(e[0]=function(t){return s.changeIsComponent("componentStatisticsPage")})},"Статистика"),Object(n["g"])("button",{class:"btn",onClick:e[1]||(e[1]=function(t){return s.changeIsComponent("componentsFotoPage")})},"Код компонента"),(Object(n["u"])(),Object(n["d"])(Object(n["D"])(c.isComponent)))])}var st={class:"component-information__wrapper"},at={key:0,class:"component-information__wrapper"},it={class:"name"},pt=Object(n["h"])("имя компонента: "),ut={style:{color:"red"}},lt={key:1};function mt(t,e,o,r,c,s){var a=Object(n["B"])("components-data"),i=Object(n["B"])("graph");return Object(n["u"])(),Object(n["f"])("div",st,[s.componentStatistics?(Object(n["u"])(),Object(n["f"])("div",at,[Object(n["g"])("div",it,[pt,Object(n["g"])("span",ut,Object(n["F"])(s.componentStatistics.name),1)]),Object(n["i"])(a,{childs:s.componentStatistics.components,text:"вложенные компоненты:"},null,8,["childs"]),Object(n["i"])(a,{childs:s.componentStatistics.computeds,text:"вычисляемые свойства:"},null,8,["childs"]),Object(n["i"])(a,{childs:s.componentStatistics.methods,text:"методы:"},null,8,["childs"]),Object(n["i"])(a,{childs:s.componentStatistics.data,text:"данные в свойстве data:"},null,8,["childs"])])):(Object(n["u"])(),Object(n["f"])("h3",lt,"кликните на компонет чтобы посмотреть его содержимое")),c.chartData.length?(Object(n["u"])(),Object(n["d"])(i,{key:2,chartData:c.chartData},null,8,["chartData"])):Object(n["e"])("",!0)])}o("b64b");var bt={key:0,class:"component-information__components"};function dt(t,e,o,r,c,s){return s.transformChilds.length?(Object(n["u"])(),Object(n["f"])("ul",bt,[Object(n["h"])(Object(n["F"])(o.text)+" ",1),(Object(n["u"])(!0),Object(n["f"])(n["a"],null,Object(n["A"])(s.transformChilds,(function(t){return Object(n["u"])(),Object(n["f"])("li",{key:t},Object(n["F"])(t.name||t),1)})),128))])):Object(n["e"])("",!0)}o("07ac");var ht={name:"componentsData",props:{childs:{type:Object},text:{type:String}},mounted:function(){},computed:{transformChilds:function(){return!!this.childs&&Object.values(this.childs)}}};o("2b62");const ft=p()(ht,[["render",dt],["__scopeId","data-v-0750527a"]]);var Ot=ft,jt={style:{height:"200px",width:"200px",display:"flex","flex-direction":"column"}};function gt(t,e,o,r,c,s){var a=Object(n["B"])("vue3-chart-js");return Object(n["u"])(),Object(n["f"])("div",jt,[Object(n["i"])(a,{id:r.doughnutChart.id,ref:"chartRef",type:r.doughnutChart.type,data:r.doughnutChart.data},null,8,["id","type","data"])])}var yt=o("9c68"),St={name:"chart",components:{Vue3ChartJs:yt["a"]},props:{chartData:{default:function(){return[0,0,0,0]}}},setup:function(t){var e=Object(n["z"])(null),o=Object(n["G"])(t),r=o.chartData,c={id:"doughnut",type:"doughnut",data:{labels:["Вложенные компонеты","Вычисляемые свойства","Методы","Данные в свойстве дата"],datasets:[{backgroundColor:["#41B883","#E46651","#00D8FF","#DD1B16"],data:t.chartData}]}},s=function(t){t.length&&(c.data.labels=["Вложенные компонеты","Вычисляемые свойства","Методы","Данные в свойстве дата"],c.data.datasets=[{backgroundColor:["#41B883","#E46651","#00D8FF","#DD1B16"],data:t}],e.value.update())};return Object(n["I"])(r,(function(t){return s(t)})),{doughnutChart:c,updateChart:s,chartRef:e}}};const vt=p()(St,[["render",gt]]);var Ct=vt,wt={name:"componentStatisticsPage",components:{componentsData:Ot,graph:Ct},data:function(){return{chartData:[]}},computed:{componentStatistics:function(){return!!Object.keys(this.$store.getters["componentInfo/getComponentStatistics"]).length&&(this.createChartData(this.$store.getters["componentInfo/getComponentStatistics"]),this.$store.getters["componentInfo/getComponentStatistics"])}},methods:{createChartData:function(t){var e=t.components,o=t.computeds,n=t.methods,r=t.data,c=[e,o,n,r];c=c.map((function(t){return t?Object.keys(t).length:0})),this.chartData=c}}};const kt=p()(wt,[["render",mt]]);var Ut=kt,Ft={class:"component-information__wrapper"},It={key:0,class:"name"},Pt=Object(n["h"])("имя компонента: "),_t={style:{color:"red"}},Lt={key:1,class:"image"},Dt=["src"],$t={key:2};function xt(t,e,o,r,c,s){return Object(n["u"])(),Object(n["f"])("div",Ft,[s.componentData?(Object(n["u"])(),Object(n["f"])("div",It,[Pt,Object(n["g"])("span",_t,Object(n["F"])(s.componentData.componentName),1)])):Object(n["e"])("",!0),s.componentData?(Object(n["u"])(),Object(n["f"])("div",Lt,[Object(n["g"])("img",{src:s.componentData.componentUrl,alt:"код компонента"},null,8,Dt)])):(Object(n["u"])(),Object(n["f"])("h3",$t,"кликните на компонет чтобы посмотреть его код"))])}var Vt={name:"componentsFotoPage",mounted:function(){console.log(this.$store.getters["componentInfo/getComponentStatistics"])},computed:{componentData:function(){var t=this.$store.getters["componentInfo/getComponentStatistics"].name;if(t){var e=o("a38c");return{componentName:t,componentUrl:e("./".concat(t,".png"))}}return!1}}};o("f6eb");const Nt=p()(Vt,[["render",xt],["__scopeId","data-v-1aca4a4c"]]);var Bt=Nt,Tt={name:"componentInformation",components:{componentStatisticsPage:Ut,componentsFotoPage:Bt},data:function(){return{isComponent:"componentStatisticsPage"}},methods:{changeIsComponent:function(t){this.isComponent=t}}};o("b968");const Et=p()(Tt,[["render",ct],["__scopeId","data-v-2c86f4b6"]]);var At=Et;function Mt(t,e,o,r,c,s){return Object(n["u"])(),Object(n["f"])(n["a"],null,[Object(n["g"])("div",{style:Object(n["p"])(s.randomColor)},"hello",4),Object(n["g"])("button",{onClick:e[0]||(e[0]=function(){return s.showStatistiks&&s.showStatistiks.apply(s,arguments)})},"click")],64)}o("159b");var Xt={name:"test",props:{component:{}},mounted:function(){var t=this.component.$el;t.textContent="dada",console.log(this.component),console.log(this.component.$options.watch),console.log(this.component.$options.props),console.log(this.component.$refs.pipay),Object.keys(this.component.$refs).forEach((function(t){return console.log(t)}))},computed:{randomColor:function(){return!!this.component.$store.getters["componentInfo/getComponentStatus"]&&{border:"dashed 1px  #".concat(Math.floor(16777215*Math.random()).toString(16)),"margin-top":"5px"}}},methods:{showStatistiks:function(){if(this.randomColor){var t=[];this.component.$options.data&&(t=Object.entries(this.component.$options.data())),t=t.map((function(t){return"".concat(t[0],":  ").concat(t[1]?t[1]:"пустая строка")})),console.log(this.component.$options.name),console.log(this.component.$options.components),console.log(this.component.$options.computed),console.log(this.component.$options.methods),console.log(t),this.component.$store.dispatch("componentInfo/changeComponentStatistics",{name:this.component.$options.name,components:this.component.$options.components,computeds:this.component.$options.computed,methods:this.component.$options.methods,data:t})}}}};const zt=p()(Xt,[["render",Mt]]);var Ht=zt,Kt={name:"Home",components:{appForm:B,homeTable:Z,backLigth:nt,componentInformation:At,test:Ht},props:{testProp:{}},data:function(){return{test2:1}},watch:{test2:function(t){console.log(t)}},methods:{emits:function(){this.$emit("blabla")}}};o("7e6d");const Jt=p()(Kt,[["render",d],["__scopeId","data-v-e2ffee96"]]);var Rt,Gt,qt,Qt,Wt,Yt,Zt,te,ee,oe,ne,re,ce,se,ae,ie,pe,ue,le,me,be,de,he,fe,Oe,je,ge,ye,Se,ve,Ce,we,ke,Ue,Fe,Ie,Pe,_e=Jt,Le=[{path:"/",name:"Home",component:_e}],De=Object(b["a"])({history:Object(b["b"])("/example/"),routes:Le}),$e=De,xe=o("8511"),Ve=o("6b7b"),Ne=o("bee2"),Be=o("d4ec"),Te=(o("ade3"),o("63ae")),Ee=(o("f890"),o("3835")),Ae=(o("e439"),Rt=Object(xe["e"])(),Gt=Object(xe["e"])(),qt=Object(xe["e"])(),Qt=Object(xe["b"])(),Wt=Object(xe["b"])(),Yt=Object(xe["d"])(),Zt=Object(xe["d"])(),te=Object(xe["d"])(),ee=Object(xe["a"])(),oe=Object(xe["a"])(),ne=Object(xe["a"])(),re=Object(xe["a"])(),ce=function(){function t(){Object(Be["a"])(this,t),Object(Ve["a"])(this,"listUsers",se,this),Object(Ve["a"])(this,"parentUser",ae,this),Object(Ve["a"])(this,"allParentUsersList",ie,this)}return Object(Ne["a"])(t,[{key:"getListUsers",get:function(){return this.listUsers}},{key:"getAllParent",get:function(){return this.allParentUsersList}},{key:"setAllParentUsersList",value:function(t){this.allParentUsersList=t}},{key:"createUserListInLocalStorage",value:function(){this.listUsers=JSON.parse(localStorage.getItem("listUsers"))}},{key:"findParentUser",value:function(t){var e=this,o=t.list,n=t.params;o.forEach((function(t){t.name!==n&&t.id!==n||(e.parentUser=t),t.child&&e.findParentUser({list:t.child,params:n})}))}},{key:"addChild",value:function(t){this.parentUser&&this.parentUser.child.push(t)}},{key:"changeShow",value:function(){this.parentUser.child.forEach((function(t){t.isShow=!t.isShow}))}},{key:"createdChildUser",value:function(t){this.findParentUser({list:this.listUsers,params:t.parentName});var e=this.parentUser.isShow;if(this.parentUser.child.length){var o=Object(Ee["a"])(this.parentUser.child,1),n=o[0];e=n.isShow}this.addChild({name:t.childName,number:t.childNumber,id:Math.random(),isShow:e,child:[]})}},{key:"changeIsShowChildEl",value:function(t){this.findParentUser({list:this.listUsers,params:t}),this.parentUser.child.length&&this.changeShow()}},{key:"callCreateUserListInLocalStorage",value:function(){this.createUserListInLocalStorage()}},{key:"changeAllParentUsersList",value:function(){var t=[];function e(o){o.forEach((function(o){var n;t.push({name:o.name,id:o.id}),null!==(n=o.child)&&void 0!==n&&n.length&&e(o.child)}))}e(this.listUsers),this.setAllParentUsersList(t)}}]),t}(),se=Object(Te["a"])(ce.prototype,"listUsers",[Rt],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[{name:"user1",number:24,id:Math.random(),isShow:!0,child:[]},{name:"user2",number:25,id:Math.random(),isShow:!0,child:[]},{name:"user3",number:23,id:Math.random(),isShow:!0,child:[]},{name:"user4",number:19,id:Math.random(),isShow:!0,child:[]}]}}),ae=Object(Te["a"])(ce.prototype,"parentUser",[Gt],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),ie=Object(Te["a"])(ce.prototype,"allParentUsersList",[qt],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Object(Te["a"])(ce.prototype,"getListUsers",[Qt],Object.getOwnPropertyDescriptor(ce.prototype,"getListUsers"),ce.prototype),Object(Te["a"])(ce.prototype,"getAllParent",[Wt],Object.getOwnPropertyDescriptor(ce.prototype,"getAllParent"),ce.prototype),Object(Te["a"])(ce.prototype,"setAllParentUsersList",[xe["d"]],Object.getOwnPropertyDescriptor(ce.prototype,"setAllParentUsersList"),ce.prototype),Object(Te["a"])(ce.prototype,"createUserListInLocalStorage",[xe["d"]],Object.getOwnPropertyDescriptor(ce.prototype,"createUserListInLocalStorage"),ce.prototype),Object(Te["a"])(ce.prototype,"findParentUser",[Yt],Object.getOwnPropertyDescriptor(ce.prototype,"findParentUser"),ce.prototype),Object(Te["a"])(ce.prototype,"addChild",[Zt],Object.getOwnPropertyDescriptor(ce.prototype,"addChild"),ce.prototype),Object(Te["a"])(ce.prototype,"changeShow",[te],Object.getOwnPropertyDescriptor(ce.prototype,"changeShow"),ce.prototype),Object(Te["a"])(ce.prototype,"createdChildUser",[ee],Object.getOwnPropertyDescriptor(ce.prototype,"createdChildUser"),ce.prototype),Object(Te["a"])(ce.prototype,"changeIsShowChildEl",[oe],Object.getOwnPropertyDescriptor(ce.prototype,"changeIsShowChildEl"),ce.prototype),Object(Te["a"])(ce.prototype,"callCreateUserListInLocalStorage",[ne],Object.getOwnPropertyDescriptor(ce.prototype,"callCreateUserListInLocalStorage"),ce.prototype),Object(Te["a"])(ce.prototype,"changeAllParentUsersList",[re],Object.getOwnPropertyDescriptor(ce.prototype,"changeAllParentUsersList"),ce.prototype),ce),Me=(pe=Object(xe["e"])(),ue=Object(xe["b"])(),le=Object(xe["a"])(),me=function(){function t(){Object(Be["a"])(this,t),Object(Ve["a"])(this,"statusForm",be,this)}return Object(Ne["a"])(t,[{key:"getStatusForm",get:function(){return this.statusForm}},{key:"openForm",value:function(){this.statusForm=!0}},{key:"closeForm",value:function(){this.statusForm=!1}},{key:"changeStatusForm",value:function(t){"open"===t?this.openForm():this.closeForm()}}]),t}(),be=Object(Te["a"])(me.prototype,"statusForm",[pe],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),Object(Te["a"])(me.prototype,"getStatusForm",[ue],Object.getOwnPropertyDescriptor(me.prototype,"getStatusForm"),me.prototype),Object(Te["a"])(me.prototype,"openForm",[xe["d"]],Object.getOwnPropertyDescriptor(me.prototype,"openForm"),me.prototype),Object(Te["a"])(me.prototype,"closeForm",[xe["d"]],Object.getOwnPropertyDescriptor(me.prototype,"closeForm"),me.prototype),Object(Te["a"])(me.prototype,"changeStatusForm",[le],Object.getOwnPropertyDescriptor(me.prototype,"changeStatusForm"),me.prototype),me),Xe=(de=Object(xe["e"])(),he=Object(xe["e"])(),fe=Object(xe["b"])(),Oe=Object(xe["b"])(),je=Object(xe["a"])(),ge=Object(xe["a"])(),ye=function(){function t(){Object(Be["a"])(this,t),Object(Ve["a"])(this,"componentStatus",Se,this),Object(Ve["a"])(this,"componentStatistics",ve,this)}return Object(Ne["a"])(t,[{key:"getComponentStatus",get:function(){return this.componentStatus}},{key:"getComponentStatistics",get:function(){return this.componentStatistics}},{key:"setStatusComponent",value:function(){this.componentStatus=!this.componentStatus}},{key:"setComponentStatistics",value:function(t){this.componentStatistics=t}},{key:"changeComponentStatus",value:function(){this.setStatusComponent()}},{key:"changeComponentStatistics",value:function(t){this.setComponentStatistics(t)}}]),t}(),Se=Object(Te["a"])(ye.prototype,"componentStatus",[de],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),ve=Object(Te["a"])(ye.prototype,"componentStatistics",[he],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{}}}),Object(Te["a"])(ye.prototype,"getComponentStatus",[fe],Object.getOwnPropertyDescriptor(ye.prototype,"getComponentStatus"),ye.prototype),Object(Te["a"])(ye.prototype,"getComponentStatistics",[Oe],Object.getOwnPropertyDescriptor(ye.prototype,"getComponentStatistics"),ye.prototype),Object(Te["a"])(ye.prototype,"setStatusComponent",[xe["d"]],Object.getOwnPropertyDescriptor(ye.prototype,"setStatusComponent"),ye.prototype),Object(Te["a"])(ye.prototype,"setComponentStatistics",[xe["d"]],Object.getOwnPropertyDescriptor(ye.prototype,"setComponentStatistics"),ye.prototype),Object(Te["a"])(ye.prototype,"changeComponentStatus",[je],Object.getOwnPropertyDescriptor(ye.prototype,"changeComponentStatus"),ye.prototype),Object(Te["a"])(ye.prototype,"changeComponentStatistics",[ge],Object.getOwnPropertyDescriptor(ye.prototype,"changeComponentStatistics"),ye.prototype),ye),ze=(Ce=Object(xe["c"])(),we=Object(xe["c"])(),ke=Object(xe["c"])(),Ue=Object(Ne["a"])((function t(){Object(Be["a"])(this,t),Object(Ve["a"])(this,"usersList",Fe,this),Object(Ve["a"])(this,"mainForm",Ie,this),Object(Ve["a"])(this,"componentInfo",Pe,this)})),Fe=Object(Te["a"])(Ue.prototype,"usersList",[Ce],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new Ae}}),Ie=Object(Te["a"])(Ue.prototype,"mainForm",[we],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new Me}}),Pe=Object(Te["a"])(Ue.prototype,"componentInfo",[ke],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new Xe}}),Ue),He=new ze,Ke=Object(xe["f"])(He,{strict:!1,modules:{},plugins:[]}),Je=(o("907d"),Object(n["c"])(m).use(Ke).use(c.a).use($e));Je.mixin({computed:{randomColor:function(){return!!this.$store.getters["componentInfo/getComponentStatus"]&&{border:"dashed 1px  #".concat(Math.floor(16777215*Math.random()).toString(16)),"margin-top":"5px"}}},methods:{showStatistiks:function(){if(this.randomColor){var t=[];this.$options.data&&(t=Object.entries(this.$options.data())),t=t.map((function(t){return"".concat(t[0],":  ").concat(t[1]?t[1]:"пустая строка")})),this.$store.dispatch("componentInfo/changeComponentStatistics",{name:this.$options.name,components:this.$options.components,computeds:this.$options.computed,methods:this.$options.methods,data:t})}}}}),Je.mount("#app")},"5a5a":function(t,e,o){t.exports=o.p+"img/appForm.8c8c32d7.png"},"5f86":function(t,e,o){},"666f":function(t,e,o){},"6bec":function(t,e,o){},"6e6d":function(t,e,o){t.exports=o.p+"img/user.998269ad.png"},7480:function(t,e,o){},"7e6d":function(t,e,o){"use strict";o("43b0")},"8d57":function(t,e,o){t.exports=o.p+"img/Home.97a0e5ae.png"},"907d":function(t,e,o){},"973e":function(t,e,o){t.exports=o.p+"img/formInput.69c1b247.png"},a38c:function(t,e,o){var n={"./Home.png":"8d57","./appForm.png":"5a5a","./formButton.png":"22aa","./formInput.png":"973e","./formSelect.png":"af9b","./homeTable.png":"ab68","./user.png":"6e6d"};function r(t){var e=c(t);return o(e)}function c(t){if(!o.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}r.keys=function(){return Object.keys(n)},r.resolve=c,t.exports=r,r.id="a38c"},ab68:function(t,e,o){t.exports=o.p+"img/homeTable.6b3e2183.png"},af9b:function(t,e,o){t.exports=o.p+"img/formSelect.904b3491.png"},b939:function(t,e,o){"use strict";o("efdd")},b968:function(t,e,o){"use strict";o("0ea8")},d6fe:function(t,e,o){"use strict";o("ec87")},ec45:function(t,e,o){"use strict";o("6bec")},ec87:function(t,e,o){},efdd:function(t,e,o){},f6eb:function(t,e,o){"use strict";o("7480")}});
//# sourceMappingURL=app.1c6c0d41.js.map