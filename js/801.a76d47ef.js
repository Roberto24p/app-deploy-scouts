"use strict";(globalThis["webpackChunktesis_scout_front"]=globalThis["webpackChunktesis_scout_front"]||[]).push([[801],{2431:(e,a,t)=>{t.r(a),t.d(a,{default:()=>U});var l=t(3673),n=t(2323),u=t(8880),o=t(1959),s=t(9582),m=t(4780),d=t(2591);const i={class:"q-pa-md"},p={__name:"TeamScout",setup(e){const a=(0,o.iH)("EQUIPO PRUEBA CDUCUDU"),t=(0,s.yj)(),p=(0,s.tv)(),r=(0,o.iH)([]),c=(0,o.iH)([]);console.log(t.params);const w=e=>{p.push({name:"AdvancePlanScout",params:{scoutId:e}})};return m.Z.teamsByUnit(t.params.unitId).then((e=>{r.value=e.teams,console.log(e)})),d.Z.getByUnit(t.params.unitId).then((e=>{c.value=e.scouts,console.log(e)})),(e,t)=>{const o=(0,l.up)("q-tab"),s=(0,l.up)("q-tabs"),m=(0,l.up)("q-space"),d=(0,l.up)("q-separator"),p=(0,l.up)("q-btn"),b=(0,l.up)("q-toolbar"),_=(0,l.up)("q-item-section"),g=(0,l.up)("q-item"),v=(0,l.up)("q-list"),h=(0,l.up)("q-tab-panel"),Z=(0,l.up)("q-tab-panels");return(0,l.wg)(),(0,l.iD)("div",i,[(0,l.Wm)(b,{class:"bg-primary text-white shadow-2 rounded-borders"},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=e=>a.value=e),shrink:"",stretch:""},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(r.value,(e=>((0,l.wg)(),(0,l.j4)(o,{name:e.name,label:e.name,key:e.name},null,8,["name","label"])))),128))])),_:1},8,["modelValue"]),(0,l.Wm)(m),(0,l.Wm)(d),(0,l.Wm)(p,{flat:"",label:"Homepage"})])),_:1}),(0,l.Wm)(Z,{modelValue:a.value,"onUpdate:modelValue":t[1]||(t[1]=e=>a.value=e),animated:""},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(r.value,(e=>((0,l.wg)(),(0,l.j4)(h,{key:e.name,name:e.name},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(c.value,(a=>(0,l.wy)(((0,l.wg)(),(0,l.j4)(v,{bordered:"",separator:"",style:{"max-width":"318px"},key:a.scout_id},{default:(0,l.w5)((()=>[(0,l.Wm)(g,{style:{cursor:"pointer"}},{default:(0,l.w5)((()=>[(0,l.Wm)(_,{onClick:e=>w(a.scout_id)},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(a.name)+" "+(0,n.zw)(a.last_name),1)])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)),[[u.F8,a.team_id==e.id]]))),128))])),_:2},1032,["name"])))),128))])),_:1},8,["modelValue"])])}}};var r=t(9570),c=t(7547),w=t(3269),b=t(2025),_=t(5869),g=t(8240),v=t(5906),h=t(6602),Z=t(7011),q=t(3414),Q=t(2035),f=t(7518),k=t.n(f);const y=p,U=y;k()(p,"components",{QToolbar:r.Z,QTabs:c.Z,QTab:w.Z,QSpace:b.Z,QSeparator:_.Z,QBtn:g.Z,QTabPanels:v.Z,QTabPanel:h.Z,QList:Z.Z,QItem:q.Z,QItemSection:Q.Z})}}]);