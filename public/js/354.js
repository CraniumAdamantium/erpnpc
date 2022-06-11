"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[354,768],{8354:(e,t,a)=>{a.r(t),a.d(t,{default:()=>F});var o=a(6598),r={class:"flex items-center justify-center",style:{"min-height":"90vh"}},s={class:"p-12 bg-white rounded-2xl xl:w-5/12 max-w-96 max-h-60"},n={class:"mb-4"},l=(0,o.createElementVNode)("h3",{class:"text-2xl text-center pb-6 text-black font-semibold"}," Seleccione una Empresa ",-1),i={class:"grid grid-flow-col auto-cols-max gap-0.5 justify-center ml-2"},c={class:"grid"},d={class:"py-0.5 w-96 max-w-96"},m=(0,o.createTextVNode)(" No hay empresas. "),u={class:"w-full"},p={class:"absolute left-2 top-1 truncate w-full"},h={class:"ml-1"},f=[(0,o.createElementVNode)("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[(0,o.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"})],-1)],g={class:"grid grid-flow-col auto-cols-max gap-1 justify-center"},v=(0,o.createElementVNode)("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[(0,o.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})],-1),y=(0,o.createElementVNode)("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[(0,o.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})],-1),x=[(0,o.createElementVNode)("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[(0,o.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"})],-1)],b=[(0,o.createElementVNode)("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[(0,o.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})],-1)],E=[(0,o.createElementVNode)("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[(0,o.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})],-1)];var w=a(9938),k=a.n(w),N=(a(6441),a(2797)),C=a(1678),V=a(9669),D=a.n(V),B=a(2768),S=a(8642),_=a(4443),z=a(9680),M=a(7915);history.pushState(null,document.title,location.href),window.addEventListener("popstate",(function(e){history.pushState(null,document.title,location.href)}));const j={directives:{tooltip:M.Z},components:{ModalCompany:B.default,vSelect:k(),ToggleButton:N.Z},mounted:function(){this.updateData(),this.disabled},data:function(){return{loaded:!1,companyData:{},userData:"",options:"",selected:null,mounted:!1,showSelect:!0,trash:""}},watch:{selected:function(){var e=this;null!=this.selected&&(this.companyData=this.userData.companies.filter((function(t){return t.id_company==e.selected.value}))[0])}},methods:{goReport:function(){window.open("http://reportes.queeserp.tk/flow.html?_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Fthemes%2FReportes&reportUnit=%2Fthemes%2FReportes%2FReporteEmpresa&standAlone=true&idd_user=".concat(this.userData.id_user,"&j_username=jasperadmin&j_password=bitnami&sessionDecorator=no"))},companySelected:function(){this.hidden=!0},logout:function(){window.location.href=route("logout")},softDeleteCompany:function(){var e=this;this.selected?(S.Confirm.init({titleColor:"#FF0000",messageColor:"#FF0000",okButtonBackground:"#FF0000"}),S.Confirm.show("¿Deseas eliminar la empresa?","Estás a punto de eliminar la empresa "+this.companyData.initials,"Eliminar","Cancelar",(function(){_.Loading.standard({clickToClose:!1,svgSize:"200"});var t={id_company:e.selected.value};D().post(route("companies.api.softDelete"),t).then((function(t){var a;null!==(a=t.data.success)&&void 0!==a&&a&&(C.Notify.success("Empresa eliminada"),e.updateData()),_.Loading.remove(250)})).catch((function(e){C.Notify.error("Error al eliminar empresa"+e)}))}))):C.Notify.warning("Selecciona una empresa")},joinCompany:function(){this.selected?z.Inertia.get(route("dashboard",this.selected.text)):C.Notify.warning("Selecciona una empresa")},updateData:function(e,t){var a=this;D().get(route("companies.api.read")).then((function(o){if(o.data.data.length!=a.userData&&""!=a.userData){var r=o.data.data.companies.sort((function(e,t){return t.id_company-e.id_company}))[0];a.selected={value:r.id_company,text:r.name}}a.userData=o.data.data,a.selected&&e&&t&&(a.selected={value:t,text:e}),a.options=o.data.data.companies.map((function(e){return{value:e.id_company,text:e.name}})),a.mounted=!0}))}}};const F=(0,a(3744).Z)(j,[["render",function(e,t,a,w,k,N){var C=(0,o.resolveComponent)("vSelect"),V=(0,o.resolveComponent)("ModalCompany"),D=(0,o.resolveDirective)("tooltip");return(0,o.openBlock)(),(0,o.createElementBlock)("div",r,[(0,o.createElementVNode)("div",s,[(0,o.createElementVNode)("div",n,[l,(0,o.createElementVNode)("div",i,[(0,o.createElementVNode)("div",c,[(0,o.createElementVNode)("div",d,[k.mounted&&k.showSelect?((0,o.openBlock)(),(0,o.createBlock)(C,{key:0,modelValue:k.selected,"onUpdate:modelValue":t[0]||(t[0]=function(e){return k.selected=e}),options:k.options,label:"text",class:"bg-white text-black w-full z-0"},{"no-options":(0,o.withCtx)((function(){return[m]})),"selected-option-container":(0,o.withCtx)((function(e){var t=e.option;return[(0,o.createElementVNode)("div",u,[(0,o.createElementVNode)("span",p,(0,o.toDisplayString)(t.text),1)])]})),_:1},8,["modelValue","options"])):(0,o.createCommentVNode)("",!0)])]),(0,o.createElementVNode)("div",h,[(0,o.createElementVNode)("div",null,[(0,o.withDirectives)(((0,o.openBlock)(),(0,o.createElementBlock)("button",{class:"text-white bg-sky-500 hover:bg-sky-600 font-medium rounded-lg text-sm px-4 ml-1 py-2 text-center mr-2",onClick:t[1]||(t[1]=function(){return N.joinCompany&&N.joinCompany.apply(N,arguments)})},f)),[[D,{value:"Ingresar",class:"text-center"},void 0,{top:!0}]])])])])]),(0,o.createElementVNode)("div",g,[(0,o.createVNode)(V,{btnClass:"text-white bg-green-500 hover:bg-green-600 font-medium rounded-lg text-sm px-4 py-2.5 text-center",modalTitle:"Crear empresa",modalButtons:"register",onUpdateData:N.updateData,tooltipText:"Crear Empresa"},{default:(0,o.withCtx)((function(){return[v]})),_:1},8,["onUpdateData"]),k.selected?((0,o.openBlock)(),(0,o.createBlock)(V,{key:0,btnClass:"text-white bg-amber-400 hover:bg-amber-500 font-medium rounded-lg text-sm px-4 py-2.5 text-center",modalTitle:"Editar empresa",modalButtons:"edit",companyData:k.companyData,onUpdateData:N.updateData,tooltipText:"Editar Empresa"},{default:(0,o.withCtx)((function(){return[y]})),_:1},8,["companyData","onUpdateData"])):(0,o.createCommentVNode)("",!0),(0,o.withDirectives)(((0,o.openBlock)(),(0,o.createElementBlock)("button",{onClick:t[2]||(t[2]=function(){return N.goReport&&N.goReport.apply(N,arguments)}),class:"ml-2 text-white bg-indigo-700 hover:bg-indigo-600 font-medium rounded-lg text-sm px-4 py-2.5 text-center"},x)),[[D,{value:"Reporte de empresas",class:"text-center"},void 0,{bottom:!0}]]),(0,o.withDirectives)(((0,o.openBlock)(),(0,o.createElementBlock)("button",{onClick:t[3]||(t[3]=function(){return N.softDeleteCompany&&N.softDeleteCompany.apply(N,arguments)}),class:"ml-2 text-white bg-rose-500 hover:bg-rose-600 font-medium rounded-lg text-sm px-4 py-2.5 text-center"},b)),[[D,{value:"Elimina la empresa seleccionada",class:"text-center"},void 0,{bottom:!0}]]),(0,o.withDirectives)(((0,o.openBlock)(),(0,o.createElementBlock)("button",{onClick:t[4]||(t[4]=function(){return N.logout&&N.logout.apply(N,arguments)}),class:"ml-2 text-white bg-rose-500 hover:bg-rose-600 font-medium rounded-lg text-sm px-4 py-2.5 text-center"},E)),[[D,{value:"Cerrar sesión",class:"text-center"},void 0,{bottom:!0}]])])])])}]])},2768:(e,t,a)=>{a.r(t),a.d(t,{default:()=>q});var o=a(6598),r={key:0,class:"transition-opacity top-0 left-0 min-h-full min-w-full z-auto bg-black bg-opacity-40 absolute overflow-y-scroll"},s={class:"flex items-center justify-center min-h-screen"},n={class:"relative px-4 w-full max-w-2xl"},l={class:"relative bg-white rounded-lg shadow"},i={class:"flex justify-between items-start p-3 rounded-t border-b"},c={class:"text-xl font-semibold text-gray-900 lg:text-2xl"},d={class:"p-6 space-y-6"},m={class:"relative z-0 mb-6 w-full group"},u=(0,o.createElementVNode)("label",{for:"name",class:"absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6"},"Nombre Empresa * ",-1),p={key:0,class:"absolute text-sm text-red-500 duration-300 transform"},h={class:"grid xl:grid-cols-2 xl:gap-6"},f={class:"relative z-0 mb-6 w-full group"},g=(0,o.createElementVNode)("label",{for:"nit",class:"absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"},"NIT *",-1),v={key:0,class:"absolute text-sm text-red-500 duration-300 transform"},y={class:"relative z-0 mb-6 w-full group"},x=(0,o.createElementVNode)("label",{class:"absolute text-base text-grey-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"},"Sigla *",-1),b={key:0,class:"absolute text-sm text-red-500 duration-300 transform"},E={class:"grid xl:grid-cols-2 xl:gap-6"},w={class:"relative z-0 mb-6 w-full group"},k=(0,o.createElementVNode)("label",{for:"email",class:"absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"},"Correo",-1),N={key:0,class:"absolute text-sm text-red-500 duration-300 transform"},C={class:"relative z-0 mb-6 w-full group"},V=["disabled"],D=["value"],B=(0,o.createElementVNode)("label",{for:"selectCoin",class:"absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"},"Moneda *",-1),S={class:"grid xl:grid-cols-2 xl:gap-6"},_={class:"relative z-0 mb-6 w-full group"},z=(0,o.createElementVNode)("label",{for:"phone",class:"absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"},"Teléfono",-1),M={key:0,class:"absolute text-sm text-red-500 duration-300 transform"},j={class:"relative z-0 mb-6 w-full group"},F=["value","selected"],I=(0,o.createElementVNode)("label",{for:"levelSelect",class:"absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"},"Nivel *",-1),T={class:"relative z-0 w-full group"},A=(0,o.createElementVNode)("label",{for:"address",class:"block mt-3 mb-2 text-base font-medium text-gray-900 dark:text-gray-400"},"Dirección",-1),L={key:0,class:"absolute text-sm text-red-500 duration-300 transform"},U={class:"flex items-center p-3 space-x-2 rounded-b border-t"};var P=a(9669),H=a.n(P),R=a(1678);const Z={directives:{tooltip:a(7915).Z,focus},emits:{"update-data":"updateData"},props:{side:{type:String,default:"bottom"},tooltipText:{type:String,default:"A tooltip"},btnClass:{type:String,default:"text-white bg-amber-400 hover:bg-amber-500 font-medium rounded-lg text-sm px-4 py-2.5 text-center mr-2"},btnContent:{type:String,default:"Agregar"},inputClass:{type:String,default:"block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"},modalTitle:String,modalButtons:String,companyData:{type:Object,default:{id_company:"",name:"",nit:"",initials:"",email:"",phone:"",level:3,address:""}}},data:function(){return{id_company:this.companyData.id_company,name:this.companyData.name,nit:this.companyData.nit,initials:this.companyData.initials,email:this.companyData.email,phone:this.companyData.phone,level:this.companyData.level,address:this.companyData.address,success:!1,errorInitials:!1,errorEmail:!1,errorPhone:!1,errorName:!1,errorNit:!1,errorAddress:!1,messageErrorName:"",messageErrorNit:"",messageErrorInitials:"",messageErrorEmail:"",messageErrorPhone:"",messageErrorAddress:"",showModal:!1,coins:[],selectedCoin:2,disabledCoin:!1}},watch:{showModal:{handler:function(e){e&&(this.getCoins(),this.setCoinOnUpdate())}},companyData:{handler:function(){this.id_company=this.companyData.id_company,this.name=this.companyData.name,this.nit=this.companyData.nit,this.initials=this.companyData.initials,this.email=this.companyData.email,this.phone=this.companyData.phone,this.level=this.companyData.level,this.address=this.companyData.address,this.errorInitials=!1,this.errorEmail=!1,this.errorPhone=!1,this.errorName=!1,this.errorNit=!1,this.errorAddress=!1,this.messageErrorName="",this.messageErrorNit="",this.messageErrorInitials="",this.messageErrorEmail="",this.messageErrorPhone="",this.messageErrorAddress=""}}},methods:{setCoinOnUpdate:function(){var e=this;""!=this.companyData.id_company&&H().post(route("coincompany.api.getByCompanyId"),{id_company:this.companyData.id_company}).then((function(t){(null==t?void 0:t.data.coins.length)>1&&(e.disabledCoin=!0);var a=document.getElementById("selectCoin"),o=t.data.coins.find((function(e){return 1==e.active}));a.value=o.id_maincoin,e.selectedCoin=o.id_maincoin}))},getCoins:function(){var e=this;H().get(route("coins.api.read")).then((function(t){e.coins=t.data.coins,e.coins=e.coins.map((function(e){return{value:e.id_coin,text:e.name}}))})).catch((function(e){console.log(e)}))},flushErrors:function(){this.errorName=!1,this.messageErrorName="",this.errorNit=!1,this.messageErrorNit="",this.errorInitials=!1,this.messageErrorInitials="",this.errorEmail=!1,this.messageErrorEmail="",this.errorPhone=!1,this.messageErrorPhone="",this.errorAddress=!1,this.messageErrorAddress=""},cancelCreate:function(){this.blankErrors(),this.blankFields()},cancelEdit:function(){this.disabledCoin=!1,this.blankErrors(),this.id_company=this.companyData.id_company,this.name=this.companyData.name,this.nit=this.companyData.nit,this.initials=this.companyData.initials,this.email=this.companyData.email,this.phone=this.companyData.phone,this.level=this.companyData.level,this.address=this.companyData.address},blankFields:function(){this.id_company="",this.name="",this.nit="",this.initials="",this.email="",this.phone="",this.level="3",this.address=""},blankErrors:function(){this.showModal=!1,this.errorName=!1,this.errorNit=!1,this.errorInitials=!1,this.errorEmail=!1,this.errorAddress=!1,this.errorPhone=!1},removeEmptyValues:function(e){var t=e;for(var a in t)""!=t[a]&&null!=t[a]||delete t[a];return t},setErrors:function(e){for(var t in e)"name"==t&&(this.errorName=!0,this.messageErrorName=e[t][0]),"nit"==t&&(this.errorNit=!0,this.messageErrorNit=e[t][0]),"initials"==t&&(this.errorInitials=!0,this.messageErrorInitials=e[t][0]),"email"==t&&(this.errorEmail=!0,this.messageErrorEmail=e[t][0]),"phone"==t&&(this.errorPhone=!0,this.messageErrorPhone=e[t][0]),"address"==t&&(this.errorAddress=!0,this.messageErrorAddress=e[t][0])},create:function(){var e=this,t={name:this.name,nit:this.nit?this.nit.toString():null,initials:this.initials,email:this.email,phone:this.phone?this.phone.toString():null,level:this.level,address:this.address,id_coin:this.selectedCoin};t=this.removeEmptyValues(t),H().post(route("companies.api.create"),t).catch((function(t){e.flushErrors(),e.setErrors(t.response.data.errors)})).then((function(t){var a;null!=t&&null!==(a=t.data)&&void 0!==a&&a.success&&(R.Notify.success("Empresa creada con éxito"),e.showModal=!1,e.$emit("update-data"),e.cancelCreate(),e.level="3")}))},update:function(){var e=this,t={id_company:this.id_company,name:this.name,nit:this.nit?this.nit.toString():null,initials:this.initials,email:this.email,phone:this.phone?this.phone.toString():null,level:this.level,address:this.address,id_coin:this.selectedCoin};t=this.removeEmptyValues(t),H().post(route("companies.api.update"),t).catch((function(t){e.flushErrors(),e.setErrors(t.response.data.errors)})).then((function(t){try{t.data.success&&(R.Notify.success("Se ha actualizado la empresa"),e.$emit("update-data",e.name,e.id_company),e.showModal=!1)}catch(e){console.log("No se pudo completar la petición")}}))}}};const q=(0,a(3744).Z)(Z,[["render",function(e,t,a,P,H,R){var Z=(0,o.resolveDirective)("tooltip"),q=(0,o.resolveDirective)("focus");return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.withDirectives)(((0,o.openBlock)(),(0,o.createElementBlock)("button",{class:(0,o.normalizeClass)([a.btnClass,"ml-2"]),type:"button",onClick:t[0]||(t[0]=function(e){return H.showModal=!0}),onClose:t[1]||(t[1]=function(e){return H.showModal=!1})},[(0,o.renderSlot)(e.$slots,"default")],34)),[[Z,{value:a.tooltipText,class:"text-center"},void 0,{bottom:!0}]]),H.showModal?((0,o.openBlock)(),(0,o.createElementBlock)("div",r,[(0,o.createElementVNode)("div",s,[(0,o.createElementVNode)("div",n,[(0,o.createElementVNode)("div",l,[(0,o.createElementVNode)("div",i,[(0,o.createElementVNode)("h3",c,(0,o.toDisplayString)(a.modalTitle)+" "+(0,o.toDisplayString)(H.name),1)]),(0,o.createElementVNode)("div",d,[(0,o.createElementVNode)("form",null,[(0,o.createElementVNode)("div",m,[(0,o.withDirectives)((0,o.createElementVNode)("input",{autocomplete:"off",type:"text",name:"name",id:"name",class:(0,o.normalizeClass)(a.inputClass),oninput:"javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);",onkeypress:"return /[A-Z 0-9´]/i.test(event.key)",maxlength:"50",placeholder:" ","onUpdate:modelValue":t[2]||(t[2]=function(e){return H.name=e}),required:""},null,2),[[q],[o.vModelText,H.name]]),u,H.errorName?((0,o.openBlock)(),(0,o.createElementBlock)("label",p,(0,o.toDisplayString)(H.messageErrorName),1)):(0,o.createCommentVNode)("",!0)]),(0,o.createElementVNode)("div",h,[(0,o.createElementVNode)("div",f,[(0,o.withDirectives)((0,o.createElementVNode)("input",{autocomplete:"off",type:"text",name:"nit",id:"nit",class:(0,o.normalizeClass)(a.inputClass),oninput:"javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);",onkeypress:"return /[0-9]/i.test(event.key)",maxlength:"20",placeholder:" ","onUpdate:modelValue":t[3]||(t[3]=function(e){return H.nit=e}),required:""},null,2),[[o.vModelText,H.nit]]),g,H.errorNit?((0,o.openBlock)(),(0,o.createElementBlock)("label",v,(0,o.toDisplayString)(H.messageErrorNit),1)):(0,o.createCommentVNode)("",!0)]),(0,o.createElementVNode)("div",y,[(0,o.withDirectives)((0,o.createElementVNode)("input",{autocomplete:"off",type:"text",oninput:"javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);",onkeypress:"return /[A-Z 0-9]/i.test(event.key)",maxlength:"15",class:(0,o.normalizeClass)(a.inputClass),placeholder:" ","onUpdate:modelValue":t[4]||(t[4]=function(e){return H.initials=e}),required:""},null,2),[[o.vModelText,H.initials]]),x,H.errorInitials?((0,o.openBlock)(),(0,o.createElementBlock)("label",b,(0,o.toDisplayString)(H.messageErrorInitials),1)):(0,o.createCommentVNode)("",!0)])]),(0,o.createElementVNode)("div",E,[(0,o.createElementVNode)("div",w,[(0,o.withDirectives)((0,o.createElementVNode)("input",{autocomplete:"off",type:"email",name:"email",class:(0,o.normalizeClass)(a.inputClass),placeholder:" ","onUpdate:modelValue":t[5]||(t[5]=function(e){return H.email=e})},null,2),[[o.vModelText,H.email]]),k,H.errorEmail?((0,o.openBlock)(),(0,o.createElementBlock)("label",N,(0,o.toDisplayString)(H.messageErrorEmail),1)):(0,o.createCommentVNode)("",!0)]),(0,o.createElementVNode)("div",C,[(0,o.withDirectives)((0,o.createElementVNode)("select",{id:"selectCoin",name:"selectCoin",disabled:H.disabledCoin,class:(0,o.normalizeClass)(a.inputClass),"onUpdate:modelValue":t[6]||(t[6]=function(e){return H.selectedCoin=e})},[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(H.coins,(function(e,t){return(0,o.openBlock)(),(0,o.createElementBlock)("option",{key:t,value:e.value},(0,o.toDisplayString)(e.text),9,D)})),128))],10,V),[[o.vModelSelect,H.selectedCoin]]),B])]),(0,o.createElementVNode)("div",S,[(0,o.createElementVNode)("div",_,[(0,o.withDirectives)((0,o.createElementVNode)("input",{autocomplete:"off",type:"text",name:"phone",id:"phone",oninput:"javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);",onkeypress:"return /[0-9]/i.test(event.key)",maxlength:"8",class:(0,o.normalizeClass)(a.inputClass),"onUpdate:modelValue":t[7]||(t[7]=function(e){return H.phone=e}),placeholder:" "},null,2),[[o.vModelText,H.phone]]),z,H.errorPhone?((0,o.openBlock)(),(0,o.createElementBlock)("label",M,(0,o.toDisplayString)(H.messageErrorPhone),1)):(0,o.createCommentVNode)("",!0)]),(0,o.createElementVNode)("div",j,[(0,o.withDirectives)((0,o.createElementVNode)("select",{name:"levelSelect",class:(0,o.normalizeClass)(a.inputClass),"onUpdate:modelValue":t[8]||(t[8]=function(e){return H.level=e})},[((0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(5,(function(e,t){return(0,o.createElementVNode)("option",{key:t,value:e+2,selected:H.level==e+2},(0,o.toDisplayString)(e+2),9,F)})),64))],2),[[o.vModelSelect,H.level]]),I])]),(0,o.createElementVNode)("div",T,[A,(0,o.withDirectives)((0,o.createElementVNode)("textarea",{"onUpdate:modelValue":t[9]||(t[9]=function(e){return H.address=e}),id:"address",oninput:"javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);",maxlength:"250",rows:"3",class:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none resize-none",placeholder:"Ingresa una dirección (Opcional)"},null,512),[[o.vModelText,H.address]]),H.errorAddress?((0,o.openBlock)(),(0,o.createElementBlock)("label",L,(0,o.toDisplayString)(H.messageErrorAddress),1)):(0,o.createCommentVNode)("",!0)])])]),(0,o.createElementVNode)("div",U,[(0,o.createElementVNode)("button",{onClick:t[10]||(t[10]=function(e){return["register"==a.modalButtons?R.cancelCreate():R.cancelEdit()]}),type:"button",class:"text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"}," Cancelar "),"register"==a.modalButtons?((0,o.openBlock)(),(0,o.createElementBlock)("button",{key:0,onClick:t[11]||(t[11]=function(){return R.create&&R.create.apply(R,arguments)}),type:"button",class:"text-white bg-green-600 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"}," Registrar ")):(0,o.createCommentVNode)("",!0),"edit"==a.modalButtons?((0,o.openBlock)(),(0,o.createElementBlock)("button",{key:1,onClick:t[12]||(t[12]=function(){return R.update&&R.update.apply(R,arguments)}),type:"button",class:"text-white bg-yellow-400 hover:bg-yellow-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center"}," Editar ")):(0,o.createCommentVNode)("",!0)])])])])])):(0,o.createCommentVNode)("",!0)],64)}]])}}]);