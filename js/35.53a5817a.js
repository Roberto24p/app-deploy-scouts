"use strict";(globalThis["webpackChunktesis_scout_front"]=globalThis["webpackChunktesis_scout_front"]||[]).push([[35],{3035:(l,e,a)=>{a.r(e),a.d(e,{default:()=>S});var o=a(3673),t=a(8880),n=a(1959),i=a(4780),u=a(386),s=a(78),d=a(2862),m=a(8825);const r={class:"q-pa-md"},c=["src"],p=(0,o._)("div",{class:"text-h6"},"Crea un nuevo Equipo",-1),g={class:"col-md-4 col-sm-12"},v=(0,o._)("div",{class:"text-h6"},"Alerta",-1),w=(0,o.Uk)(" ¿Desea eliminar el equipo seleccionado? "),b={__name:"Teams",setup(l){const e=(0,m.Z)();e.loading.show();const a=(0,d.U)(),b=[{name:"name",required:!0,label:"Nombre",align:"left",field:l=>l.name,format:l=>`${l}`,sortable:!0},{name:"unidad",align:"left",label:"Unidad",field:l=>l.unit.name,sortable:!0},{name:"grupo",align:"left",label:"Grupo",field:l=>l.unit.group.name,sortable:!0},{name:"actions",label:"Acciones"}],f=(0,n.iH)([]),h=(0,n.iH)(!1),W=(0,n.iH)([]),_=(0,n.iH)([]),q=(0,n.iH)(""),Z=(0,n.iH)(!1),y=(0,n.iH)(!1),C=(0,n.qj)({id:"",name:"",unitId:""});u.Z.getGroups().then((l=>{W.value=l,console.log(l)}));const k=()=>{console.log(q.value),C.unitId="",s.Z.getUnitByGroup(q.value).then((l=>{_.value=l,console.log(l)}))},V=()=>{i.Z.post(C).then((l=>{1==l.success&&(A(),h.value=!1)}))},U=()=>{A(),h.value=!0,Z.value=!0},Q=l=>{Z.value=!1,h.value=!0,C.name=l.name,C.id=l.id,q.value=l.unit.group.id,s.Z.getUnitByGroup(q.value).then((e=>{_.value=e,C.unitId=l.unit.id})),console.log(l.unit.id)},x=l=>{C.id=l.id,y.value=!0},I=()=>{i.Z["delete"](C.id).then((l=>{console.log(l),A()}))},A=()=>{1==a.role?i.Z.getTeams().then((l=>{f.value=l.teams,console.log(l),e.loading.hide()})):4==a.role?T():5==a.role&&G()},H=l=>{i.Z.activate(l.id).then((l=>{console.log(l),A()}))},S=()=>{i.Z.update(C).then((l=>{A(),h.value=!1,console.log(l)}))};(0,o.YP)((()=>q.value),k);const G=()=>{i.Z.teamsDirecting().then((l=>{q.value=l.unit.group.id,C.unitId=l.unit.id,f.value=l.teams,console.log(l),e.loading.hide()}))},T=()=>{i.Z.teamsDirectingGroup().then((l=>{q.value=l.group,f.value=l.teams,console.log(l),e.loading.hide()}))};return A(),(l,e)=>{const i=(0,o.up)("q-btn"),u=(0,o.up)("q-td"),s=(0,o.up)("q-avatar"),d=(0,o.up)("q-inner-loading"),m=(0,o.up)("q-table"),A=(0,o.up)("q-card-section"),G=(0,o.up)("q-input"),T=(0,o.up)("q-select"),z=(0,o.up)("q-form"),D=(0,o.up)("q-card-actions"),F=(0,o.up)("q-card"),N=(0,o.up)("q-dialog"),B=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",r,[(0,o.Wm)(i,{label:"Agregar",color:"primary",class:"q-ma-md",onClick:U}),(0,o.Wm)(m,{title:"Equipos",rows:f.value,columns:b,"row-key":"name",loading:l.loading},{"body-cell-actions":(0,o.w5)((l=>[(0,o.Wm)(u,{props:l},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{color:"yellow",icon:"mode_edit",class:"q-mx-sm",onClick:e=>Q(l.row)},null,8,["onClick"]),(0,o.wy)((0,o.Wm)(i,{color:"red",icon:"delete",onClick:e=>x(l.row)},null,8,["onClick"]),[[t.F8,"A"==l.row.state]]),(0,o.wy)((0,o.Wm)(i,{color:"green",icon:"add",onClick:e=>H(l.row)},null,8,["onClick"]),[[t.F8,"A"!=l.row.state]])])),_:2},1032,["props"])])),"body-cell-img":(0,o.w5)((l=>[(0,o.Wm)(u,{props:l},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{rounded:""},{default:(0,o.w5)((()=>[(0,o._)("img",{src:null==l.row.image?"https://i.imgur.com/wKV0Jmy.png":l.row.image,alt:"No Tiene Imagen",size:"100px"},null,8,c)])),_:2},1024)])),_:2},1032,["props"])])),loading:(0,o.w5)((()=>[(0,o.Wm)(d,{showing:"",color:"primary"})])),_:1},8,["rows","loading"])]),(0,o.Wm)(N,{modelValue:h.value,"onUpdate:modelValue":e[3]||(e[3]=l=>h.value=l)},{default:(0,o.w5)((()=>[(0,o.Wm)(F,{style:{width:"700px","max-width":"80vw"}},{default:(0,o.w5)((()=>[(0,o.Wm)(A,null,{default:(0,o.w5)((()=>[p])),_:1}),(0,o.Wm)(A,{class:"q-pt-none"},{default:(0,o.w5)((()=>[(0,o.Wm)(z,{class:"q-gutter-md row justify-center q-mt-sm"},{default:(0,o.w5)((()=>[(0,o._)("div",g,[(0,o.Wm)(G,{filled:"",class:"col-8",modelValue:C.name,"onUpdate:modelValue":e[0]||(e[0]=l=>C.name=l),label:"Nombre del Equipo","lazy-rules":"",rules:[l=>l&&l.length>0||"Obligatorio"]},null,8,["modelValue","rules"]),(0,o.Wm)(T,{style:{"text-transform":"capitalize"},class:"col-4",modelValue:q.value,"onUpdate:modelValue":e[1]||(e[1]=l=>q.value=l),onInput:k,label:"Selecciona Grupo",options:W.value,"emit-value":"","map-options":"","option-label":"name","option-value":"id",disable:5==(0,n.SU)(a).role||4==(0,n.SU)(a).role},null,8,["modelValue","options","disable"]),(0,o.Wm)(T,{style:{"text-transform":"capitalize"},class:"col-4 q-mt-md","option-label":"name",modelValue:C.unitId,"onUpdate:modelValue":e[2]||(e[2]=l=>C.unitId=l),"emit-value":"","map-options":"","option-value":"id",disable:5==(0,n.SU)(a).role,label:"Selecciona Unidad",options:_.value},null,8,["modelValue","disable","options"])])])),_:1})])),_:1}),(0,o.Wm)(D,{align:"right",class:"bg-white text-teal"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(i,{flat:"",label:"Guardar",onClick:V},null,512),[[t.F8,Z.value]]),(0,o.wy)((0,o.Wm)(i,{flat:"",label:"Actualizar",onClick:S},null,512),[[t.F8,!Z.value]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)(N,{modelValue:y.value,"onUpdate:modelValue":e[4]||(e[4]=l=>y.value=l)},{default:(0,o.w5)((()=>[(0,o.Wm)(F,{style:{width:"300px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(A,null,{default:(0,o.w5)((()=>[v])),_:1}),(0,o.Wm)(A,{class:"q-pt-none"},{default:(0,o.w5)((()=>[w])),_:1}),(0,o.Wm)(D,{align:"right",class:"bg-white text-teal"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(i,{flat:"",label:"Si",color:"red",onClick:I},null,512),[[B]]),(0,o.wy)((0,o.Wm)(i,{flat:"",label:"No"},null,512),[[B]])])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}}};var f=a(8240),h=a(3243),W=a(3884),_=a(5096),q=a(6941),Z=a(6778),y=a(151),C=a(5589),k=a(5269),V=a(4842),U=a(8516),Q=a(9367),x=a(677),I=a(7518),A=a.n(I);const H=b,S=H;A()(b,"components",{QBtn:f.Z,QTable:h.Z,QTd:W.Z,QAvatar:_.Z,QInnerLoading:q.Z,QDialog:Z.Z,QCard:y.Z,QCardSection:C.Z,QForm:k.Z,QInput:V.Z,QSelect:U.Z,QCardActions:Q.Z}),A()(b,"directives",{ClosePopup:x.Z})}}]);