(this.webpackJsonpstarter=this.webpackJsonpstarter||[]).push([[0],{468:function(e,t){},554:function(e,t,n){e.exports=n(802)},559:function(e,t,n){e.exports=n.p+"static/media/logo.ee7cd8ed.svg"},560:function(e,t,n){},671:function(e,t){},672:function(e,t){},802:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(23),i=n.n(o),c=n(16),l=n(46),u=n(42),s=n(453),d=n(28),f=(n(559),n(2)),p=n(841),m=n(437),h=n(842),g=n(140),b=n(355),E=n(362),v=n.n(E),j=n(101),y=n(139),O=(n(560),n(93)),w=n(805),S=n(831),k=n(512),C=n.n(k),x=n(511),N=n.n(x),_=n(806),T=n(832),R=n(428),L=n(368),D=n.n(L),B=n(513),A=n.n(B),G=n(514),W=n.n(G),I=n(367),z=n.n(I);function P(e){var t,n,o=e.classes,i=e.theme,l=e.open,s=e.setOpen,d=Object(y.e)(),p=Object(a.useState)(""),m=Object(c.a)(p,2),h=m[0],g=m[1];return Object(a.useEffect)((function(){g(d.pathname.replace("/app/","").toLowerCase())}),[d]),console.log(h),r.a.createElement(O.a,{variant:"permanent",className:Object(f.a)(o.drawer,(t={},Object(u.a)(t,o.drawerOpen,l),Object(u.a)(t,o.drawerClose,!l),t)),classes:{paper:Object(f.a)((n={},Object(u.a)(n,o.drawerOpen,l),Object(u.a)(n,o.drawerClose,!l),n))}},r.a.createElement("div",{className:o.toolbar},r.a.createElement(b.a,{onClick:function(){s(!1)}},"rtl"===i.direction?r.a.createElement(N.a,null):r.a.createElement(C.a,null))),r.a.createElement(S.a,null),r.a.createElement(w.a,{className:o.sidebar},r.a.createElement(_.a,{selected:""==h,button:!0,key:"Dashboard",to:"/app/",component:j.b},r.a.createElement(T.a,null,r.a.createElement(z.a,null)),r.a.createElement(R.a,{primary:"Dashboard"})),r.a.createElement(_.a,{selected:"keywords"==h,button:!0,key:"Keywords",to:"/app/keywords",component:j.b},r.a.createElement(T.a,null,r.a.createElement(D.a,null)),r.a.createElement(R.a,{primary:"Keywords"})),r.a.createElement(_.a,{selected:"devices"==h,button:!0,key:"Devices",to:"/app/Devices",component:j.b},r.a.createElement(T.a,null,r.a.createElement(A.a,null)),r.a.createElement(R.a,{primary:"Devices"})),r.a.createElement(_.a,{selected:"animations"==h,button:!0,key:"Animations",to:"/app/Animations",component:j.b},r.a.createElement(T.a,null,r.a.createElement(W.a,null)),r.a.createElement(R.a,{primary:"Animations"})),r.a.createElement(_.a,{selected:"groups"==h,button:!0,key:"Groups",to:"/app/Groups",component:j.b},r.a.createElement(T.a,null,r.a.createElement(z.a,null)),r.a.createElement(R.a,{primary:"Groups"})),r.a.createElement(S.a,null),r.a.createElement(_.a,{selected:"containers"==h,button:!0,key:"Containers",to:"/app/Containers",component:j.b},r.a.createElement(T.a,null,r.a.createElement(D.a,null)),r.a.createElement(R.a,{primary:"Containers"}))),r.a.createElement(S.a,null),r.a.createElement(S.a,null))}var U=n(298),F=n(838),H=function(e){if(!e.ok)throw Error(e.statusText);return e},J=function(e){return fetch("/api/groups",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(H).then((function(e){return e.json()}))},M=function(e){return fetch("/api/groups/".concat(e._id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(H).then((function(e){return e.json()}))},K=function(e){return fetch("/api/groups/".concat(e),{method:"DELETE"}).then(H).then((function(e){return e.json()}))},X=function(){return fetch("/api/groups").then(H).then((function(e){return e.json()}))},V=function(){return fetch("/api/groups/getByType/Animation").then(H).then((function(e){return e.json()}))},$=function(){return fetch("/api/groups/getByType/Device").then(H).then((function(e){return e.json()}))},q=n(847),Q=n(272),Y=n(113),Z=n.n(Y),ee=n(515),te=n.n(ee),ne=n(848),ae=n(837),re=n(335),oe=n(76),ie=n.n(oe),ce=function(e){return fetch("/api/keywords",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(H).then((function(e){return e.json()}))},le=function(e){return fetch("/api/keywords/".concat(e._id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(H).then((function(e){return e.json()}))},ue=function(e){return fetch("/api/keywords/".concat(e),{method:"DELETE"}).then(H).then((function(e){return e.json()}))},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"created";return fetch("/api/keywords/all/".concat(e,"/").concat(t,"/").concat(n)).then(H).then((function(e){return e.json()}))},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"created";return fetch("/api/keywords/running/".concat(e,"/").concat(t,"/").concat(n)).then(H).then((function(e){return e.json()}))},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"created";return fetch("/api/keywords/landed/".concat(e,"/").concat(t,"/").concat(n)).then(H).then((function(e){return e.json()}))},pe=function(e){return fetch("/api/keywords/regionstats/".concat(e)).then(H).then((function(e){return e.json()}))},me=function(e){return fetch("/api/keywords/read/".concat(e)).then(H).then((function(e){return e.json()}))},he=function(e){return fetch("/api/keywords/notreached_detailed/".concat(e)).then(H).then((function(e){return e.json()}))},ge=n(305),be=function(e){return function(t){var n=Object(ge.a)(t);return n.push(e),n}},Ee=function(e,t){return function(n){var a=Object(ge.a)(n);return a[a.indexOf(t)]=e,a}},ve=function(e){return function(t){var n=Object(ge.a)(t);return n.splice(n.indexOf(e),1),n}},je=n(134),ye=n.n(je);function Oe(e){var t=e.deviceGroupLookup,n=e.animationGroupLookup,o=e.setError,i=Object(a.useState)([]),u=Object(c.a)(i,2),s=(u[0],u[1]),d=Object(a.useState)(!1),f=Object(c.a)(d,2),p=f[0],m=f[1],h=Object(a.useState)(0),g=Object(c.a)(h,2),b=(g[0],g[1],[{title:"ID",field:"_id"},{title:"Words",field:"words"},{title:"Animation group",field:"animation_group",lookup:n},{title:"Device group",field:"device_group",lookup:t},{title:"Region",field:"region_tag",render:function(e){return r.a.createElement("span",null,e.region_tag||"Default")}},{title:"Domain",field:"domain"},{title:"TLD",field:"tld"},{title:"Last run",field:"last_run",type:"datetime",editable:"never"}]),E=function(e){return ue(e._id).then((function(t){s(ve(e))})).catch((function(e){return o(e.toString())}))};return r.a.createElement(ie.a,{title:"Active",columns:b,data:function(e){return new Promise((function(t,n){var a;se(e.page,e.pageSize,null===e||void 0===e?void 0:null===(a=e.orderBy)||void 0===a?void 0:a.field).then((function(e){t({data:e.keywords,page:Number(e.page),totalCount:e.count})})).catch((function(e){console.log(e)}))}))},editable:{onRowAdd:function(e){return ce(e).then((function(e){var t=e.keyword;s(be(t))})).catch((function(e){return o(e.toString())}))},onRowUpdate:function(e,t){return le(e).then((function(e){var n=e.keyword;s(Ee(n,t))})).catch((function(e){return o(e.toString())}))},onRowDelete:E},actions:[{icon:"add",tooltip:"Copy this keyword",onClick:function(e,t){return t.forEach((function(e){var t=Object(l.a)({},e);delete t._id,function(e){ce(e).then((function(e){var t=e.keyword;s(be(t))})).catch((function(e){return o(e.toString())}))}(t)}))}},{icon:ye.a,tooltip:"Enable filtering",isFreeAction:!0,onClick:function(e){return m(!p)}},{tooltip:"Remove All Selected Users",icon:"delete",onClick:function(e,t){return t.forEach((function(e){return E(e)}))}}],options:{selection:!0,filtering:p}})}function we(e){var t=e.deviceGroupLookup,n=e.animationGroupLookup,o=e.setError,i=Object(a.useState)([]),u=Object(c.a)(i,2),s=(u[0],u[1]),d=Object(a.useState)(!1),f=Object(c.a)(d,2),p=f[0],m=f[1],h=Object(a.useState)(0),g=Object(c.a)(h,2),b=(g[0],g[1],[{title:"ID",field:"_id"},{title:"Words",field:"words"},{title:"Animation group",field:"animation_group",lookup:n},{title:"Device group",field:"device_group",lookup:t},{title:"Region",field:"region_tag",render:function(e){return r.a.createElement("span",null,e.region_tag||"Default")}},{title:"Domain",field:"domain"},{title:"TLD",field:"tld"},{title:"Last run",field:"last_run",type:"datetime",editable:"never"}]),E=function(e){return ue(e._id).then((function(t){s(ve(e))})).catch((function(e){return o(e.toString())}))};return r.a.createElement(ie.a,{title:"Active",columns:b,data:function(e){return new Promise((function(t,n){var a;de(e.page,e.pageSize,null===e||void 0===e?void 0:null===(a=e.orderBy)||void 0===a?void 0:a.field).then((function(e){t({data:e.keywords,page:Number(e.page),totalCount:e.count})})).catch((function(e){console.log(e)}))}))},editable:{onRowAdd:function(e){return ce(e).then((function(e){var t=e.keyword;s(be(t))})).catch((function(e){return o(e.toString())}))},onRowUpdate:function(e,t){return le(e).then((function(e){var n=e.keyword;s(Ee(n,t))})).catch((function(e){return o(e.toString())}))},onRowDelete:E},actions:[{icon:"add",tooltip:"Copy this keyword",onClick:function(e,t){return t.forEach((function(e){var t=Object(l.a)({},e);delete t._id,function(e){ce(e).then((function(e){var t=e.keyword;s(be(t))})).catch((function(e){return o(e.toString())}))}(t)}))}},{icon:ye.a,tooltip:"Enable filtering",isFreeAction:!0,onClick:function(e){return m(!p)}},{tooltip:"Remove All Selected Users",icon:"delete",onClick:function(e,t){return t.forEach((function(e){return E(e)}))}}],options:{selection:!0,filtering:p}})}function Se(e){var t=e.deviceGroupLookup,n=e.animationGroupLookup,o=e.setError,i=Object(a.useState)([]),u=Object(c.a)(i,2),s=(u[0],u[1]),d=Object(a.useState)(!1),f=Object(c.a)(d,2),p=f[0],m=f[1],h=Object(a.useState)(0),g=Object(c.a)(h,2),b=(g[0],g[1],[{title:"ID",field:"_id"},{title:"Words",field:"words"},{title:"Animation group",field:"animation_group",lookup:n},{title:"Device group",field:"device_group",lookup:t},{title:"Region",field:"region_tag",render:function(e){return r.a.createElement("span",null,e.region_tag||"Default")}},{title:"Domain",field:"domain"},{title:"TLD",field:"tld"},{title:"Last run",field:"last_run",type:"datetime",editable:"never"}]),E=function(e){return ue(e._id).then((function(t){s(ve(e))})).catch((function(e){return o(e.toString())}))};return r.a.createElement(ie.a,{title:"Active",columns:b,data:function(e){return new Promise((function(t,n){var a;fe(e.page,e.pageSize,null===e||void 0===e?void 0:null===(a=e.orderBy)||void 0===a?void 0:a.field).then((function(e){t({data:e.keywords,page:Number(e.page),totalCount:e.count})})).catch((function(e){console.log(e)}))}))},editable:{onRowAdd:function(e){return ce(e).then((function(e){var t=e.keyword;s(be(t))})).catch((function(e){return o(e.toString())}))},onRowUpdate:function(e,t){return le(e).then((function(e){var n=e.keyword;s(Ee(n,t))})).catch((function(e){return o(e.toString())}))},onRowDelete:E},actions:[{icon:"add",tooltip:"Copy this keyword",onClick:function(e,t){return t.forEach((function(e){var t=Object(l.a)({},e);delete t._id,function(e){ce(e).then((function(e){var t=e.keyword;s(be(t))})).catch((function(e){return o(e.toString())}))}(t)}))}},{icon:ye.a,tooltip:"Enable filtering",isFreeAction:!0,onClick:function(e){return m(!p)}},{tooltip:"Remove All Selected Users",icon:"delete",onClick:function(e,t){return t.forEach((function(e){return E(e)}))}}],options:{selection:!0,filtering:p}})}function ke(e){var t=e.children,n=e.value,a=e.index,o=Object(U.a)(e,["children","value","index"]);return r.a.createElement("div",Object.assign({role:"tabpanel",hidden:n!==a,id:"full-width-tabpanel-".concat(a),"aria-labelledby":"full-width-tab-".concat(a)},o),n===a&&r.a.createElement(re.a,{p:3},r.a.createElement(g.a,null,t)))}function Ce(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}}var xe=Object(s.a)((function(e){return{root:{backgroundColor:e.palette.background.paper}}}));function Ne(){var e=xe(),t=Object(d.a)(),n=r.a.useState(0),o=Object(c.a)(n,2),i=o[0],l=o[1],u=Object(a.useState)(1),s=Object(c.a)(u,2),f=s[0],m=(s[1],Object(a.useState)(!1)),h=Object(c.a)(m,2),g=h[0],E=h[1],v=Object(a.useState)([]),j=Object(c.a)(v,2),y=j[0],O=j[1],w=Object(a.useState)([]),S=Object(c.a)(w,2),k=S[0],C=S[1],x={};y.forEach((function(e){x[e._id]=e.name}));var N={};k.forEach((function(e){N[e._id]=e.name})),Object(a.useEffect)((function(){_(),T()}),[f]);var _=function(){return V().then((function(e){var t=e.groups;return O(t)})).catch((function(e){return E(e.toString())}))},T=function(){return $().then((function(e){var t=e.groups;return C(t)})).catch((function(e){return E(e.toString())}))};return r.a.createElement("div",{className:e.root},r.a.createElement(Q.a,{in:g},r.a.createElement(q.a,{severity:"error",action:r.a.createElement(b.a,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){E(!1)}},r.a.createElement(Z.a,{fontSize:"inherit"}))},g)),r.a.createElement(p.a,{position:"static",color:"default"},r.a.createElement(ne.a,{value:i,onChange:function(e,t){l(t)},indicatorColor:"primary",textColor:"primary",variant:"fullWidth","aria-label":"full width tabs example"},r.a.createElement(ae.a,Object.assign({label:"All"},Ce(0))),r.a.createElement(ae.a,Object.assign({label:"Running"},Ce(1))),r.a.createElement(ae.a,Object.assign({label:"Landed"},Ce(2))))),r.a.createElement(te.a,{axis:"rtl"===t.direction?"x-reverse":"x",index:i,onChangeIndex:function(e){l(e)}},r.a.createElement(ke,{value:i,index:0,dir:t.direction},r.a.createElement(F.a,{item:!0,xs:12,className:"productType-container"},r.a.createElement(Oe,{deviceGroupLookup:N,animationGroupLookup:x,setError:E}))),r.a.createElement(ke,{value:i,index:1,dir:t.direction},r.a.createElement(F.a,{item:!0,xs:12,className:"productType-container"},r.a.createElement(we,{deviceGroupLookup:N,animationGroupLookup:x,setError:E}))),r.a.createElement(ke,{value:i,index:2,dir:t.direction},r.a.createElement(F.a,{item:!0,xs:12,className:"productType-container"},r.a.createElement(Se,{deviceGroupLookup:N,animationGroupLookup:x,setError:E})))),r.a.createElement(F.a,{item:!0,xs:12,className:"productType-container"},r.a.createElement(we,{deviceGroupLookup:N,animationGroupLookup:x,setError:E})))}var _e=function(e){return fetch("/api/devices",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(H).then((function(e){return e.json()}))},Te=function(e){return fetch("/api/devices/".concat(e._id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(H).then((function(e){return e.json()}))},Re=function(e){return fetch("/api/devices/".concat(e),{method:"DELETE"}).then(H).then((function(e){return e.json()}))},Le=function(){return fetch("/api/devices").then(H).then((function(e){return e.json()}))},De=Object(s.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"}}}}));function Be(){De();var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)({type:"",name:""}),l=Object(c.a)(i,2),u=l[0],s=(l[1],Object(a.useState)(1)),d=Object(c.a)(s,2),f=d[0],p=(d[1],Object(a.useState)(!1)),m=Object(c.a)(p,2),h=m[0],g=m[1],E=Object(a.useState)([]),v=Object(c.a)(E,2),j=v[0],y=v[1],O={};j.forEach((function(e){O[e._id]=e.name}));var w=[{title:"Name",field:"name"},{title:"User Agent",field:"user_agent"},{title:"Window Size",field:"window_size"},{title:"Is Mobile",field:"mobile",type:"boolean"},{title:"Group",field:"group",lookup:O}];Object(a.useEffect)((function(){k(),S()}),[f]);var S=function(){return $().then((function(e){var t=e.groups;return y(t)})).catch((function(e){return g(e.toString())}))},k=function(){return Le().then((function(e){return o(e)})).catch((function(e){return g(e.toString())}))},C=u||{};C.name,C.type;return r.a.createElement(F.a,{item:!0,xs:10,className:"productType-container"},r.a.createElement(Q.a,{in:h},r.a.createElement(q.a,{severity:"error",action:r.a.createElement(b.a,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){g(!1)}},r.a.createElement(Z.a,{fontSize:"inherit"}))},h)),r.a.createElement(ie.a,{title:"Devices",columns:w,data:n,editable:{onRowAdd:function(e){return _e(e).then((function(e){var t=e.device;o(be(t))})).catch((function(e){return g(e.toString())}))},onRowUpdate:function(e,t){return Te(e).then((function(e){var n=e.device;o(Ee(n,t))})).catch((function(e){return g(e.toString())}))},onRowDelete:function(e){return Re(e._id).then((function(t){o(ve(e))})).catch((function(e){return g(e.toString())}))}}}))}var Ae,Ge=function(e){return fetch("/api/animations",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(H).then((function(e){return e.json()}))},We=function(e){return fetch("/api/animations/".concat(e._id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(H).then((function(e){return e.json()}))},Ie=function(e){return fetch("/api/animations/".concat(e),{method:"DELETE"}).then(H).then((function(e){return e.json()}))},ze=function(){return fetch("/api/animations").then(H).then((function(e){return e.json()}))},Pe=Object(s.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"}}}}));function Ue(){Pe();var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)({type:"",name:""}),l=Object(c.a)(i,2),u=l[0],s=(l[1],Object(a.useState)(1)),d=Object(c.a)(s,2),f=d[0],p=(d[1],Object(a.useState)(!1)),m=Object(c.a)(p,2),h=m[0],g=m[1],E=Object(a.useState)([]),v=Object(c.a)(E,2),j=v[0],y=v[1],O={};j.forEach((function(e){O[e._id]=e.name}));var w=[{title:"Name",field:"name"},{title:"Group",field:"group",lookup:O}];Object(a.useEffect)((function(){k(),S()}),[f]);var S=function(){return V().then((function(e){var t=e.groups;return y(t)})).catch((function(e){return g(e.toString())}))},k=function(){return ze().then((function(e){return o(e)})).catch((function(e){return g(e.toString())}))},C=u||{};C.name,C.type;return r.a.createElement(F.a,{item:!0,xs:10,className:"productType-container"},r.a.createElement(Q.a,{in:h},r.a.createElement(q.a,{severity:"error",action:r.a.createElement(b.a,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){g(!1)}},r.a.createElement(Z.a,{fontSize:"inherit"}))},h)),r.a.createElement(ie.a,{title:"Animations",columns:w,data:n,editable:{onRowAdd:function(e){return Ge(e).then((function(e){var t=e.animation;o(be(t))})).catch((function(e){return g(e.toString())}))},onRowUpdate:function(e,t){return We(e).then((function(e){var n=e.animation;o(Ee(n,t))})).catch((function(e){return g(e.toString())}))},onRowDelete:function(e){return Ie(e._id).then((function(t){o(ve(e))})).catch((function(e){return g(e.toString())}))}}}))}var Fe=Object(s.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"}}}})),He=[{title:"Name",field:"name"},{title:"Type",field:"type",lookup:(Ae={},Object(u.a)(Ae,"Animation","Animation"),Object(u.a)(Ae,"Device","Device"),Ae)}];function Je(){Fe();var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)({type:"",name:""}),l=Object(c.a)(i,2),u=l[0],s=(l[1],Object(a.useState)(1)),d=Object(c.a)(s,2),f=d[0],p=(d[1],Object(a.useState)(!1)),m=Object(c.a)(p,2),h=m[0],g=m[1];Object(a.useEffect)((function(){E()}),[f]);var E=function(){return X().then((function(e){return o(e)})).catch((function(e){return g(e.toString())}))},v=u||{};v.name,v.type;return r.a.createElement(F.a,{item:!0,xs:10,className:"productType-container"},r.a.createElement(Q.a,{in:h},r.a.createElement(q.a,{severity:"error",action:r.a.createElement(b.a,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){g(!1)}},r.a.createElement(Z.a,{fontSize:"inherit"}))},h)),r.a.createElement(ie.a,{title:"Groups",pageSize:50,columns:He,data:n,editable:{onRowAdd:function(e){return J(e).then((function(e){var t=e.group;o(be(t))})).catch((function(e){return g(e.toString())}))},onRowUpdate:function(e,t){return M(e).then((function(e){var n=e.group;o(Ee(n,t))})).catch((function(e){return g(e.toString())}))},onRowDelete:function(e){return K(e._id).then((function(t){o(ve(e))})).catch((function(e){return g(e.toString())}))}}}))}var Me=function(){return fetch("/api/containers").then(H).then((function(e){return e.json()}))},Ke=function(e){return fetch("/api/containers/changeregion/".concat(e)).then(H).then((function(e){return e.json()}))},Xe=function(){return fetch("/api/containers/getregiontags").then(H).then((function(e){return e.json()}))},Ve=Object(s.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"}}}}));function $e(){Ve();var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)(1),l=Object(c.a)(i,2),u=l[0],s=(l[1],Object(a.useState)(!1)),d=Object(c.a)(s,2),f=d[0],p=d[1],m=Object(a.useState)(!1),h=Object(c.a)(m,2),g=h[0],E=h[1];Object(a.useEffect)((function(){v()}),[u]);var v=function(){return Me().then((function(e){return o(e)})).catch((function(e){return p(e.toString())}))};return r.a.createElement(F.a,{item:!0,xs:10,className:"productType-container"},r.a.createElement(Q.a,{in:f},r.a.createElement(q.a,{severity:"error",action:r.a.createElement(b.a,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){p(!1)}},r.a.createElement(Z.a,{fontSize:"inherit"}))},f)),r.a.createElement(ie.a,{title:"Containers",columns:[{title:"Name",field:"name"},{title:"VPN",field:"vpn_name"},{title:"Region",field:"current_region"},{title:"Location",field:"geo_location"},{title:"Last region change",field:"last_region_change",type:"datetime"}],data:n,actions:[{icon:"Change region",tooltip:"Change the region",onClick:function(e,t){return n=t._id,Ke(n).then((function(e){return v()})).catch((function(e){return p(e.toString())}));var n}},{icon:ye.a,tooltip:"Enable filtering",isFreeAction:!0,onClick:function(e){return E(!g)}}],options:{filtering:g,pageSize:20}}))}var qe=n(850),Qe=n(849),Ye=n(543),Ze=n(539),et=Object(s.a)((function(e){return{card:{minHeight:"100%",display:"flex",flexDirection:"column"},visitsNumberContainer:{display:"flex",alignItems:"center",flexGrow:1,paddingBottom:e.spacing(1)},progressSection:{marginBottom:e.spacing(1)},progressTitle:{marginBottom:e.spacing(2)},progress:{marginBottom:e.spacing(1),backgroundColor:"rgb(236, 236, 236)"},pieChartLegendWrapper:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-end",marginRight:e.spacing(1)},legendItemContainer:{display:"flex",alignItems:"center",marginBottom:e.spacing(1)},fullHeightBody:{display:"flex",flexGrow:1,flexDirection:"column",justifyContent:"space-between"},tableWidget:{overflowX:"auto"},progressBarPrimary:{backgroundColor:e.palette.primary.main},progressBarWarning:{backgroundColor:e.palette.warning.main},performanceLegendWrapper:{display:"flex",flexGrow:1,alignItems:"center",marginBottom:e.spacing(1)},legendElement:{display:"flex",alignItems:"center",marginRight:e.spacing(2)},legendElementText:{marginLeft:e.spacing(1)},serverOverviewElement:{display:"flex",alignItems:"center",maxWidth:"100%"},serverOverviewElementText:{minWidth:145,paddingRight:e.spacing(2)},serverOverviewElementChartWrapper:{width:"100%"},mainChartBody:{overflowX:"auto"},mainChartHeader:Object(u.a)({width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"},e.breakpoints.only("xs"),{flexWrap:"wrap"}),mainChartHeaderLabels:Object(u.a)({display:"flex",alignItems:"center"},e.breakpoints.only("xs"),{order:3,width:"100%",justifyContent:"center",marginTop:e.spacing(3),marginBottom:e.spacing(2)}),mainChartHeaderLabel:{display:"flex",alignItems:"center",marginLeft:e.spacing(3)},mainChartSelectRoot:{borderColor:e.palette.text.hint+"80 !important"},mainChartSelect:{padding:10,paddingRight:25},mainChartLegentElement:{fontSize:"18px !important",marginLeft:e.spacing(1)},success:{backgroundColor:e.palette.success.main,color:"#fff"},warning:{backgroundColor:e.palette.warning.main,color:"#fff"},secondary:{backgroundColor:e.palette.secondary.main,color:"#fff"}}})),tt=n(186),nt=n(271),at=n(436),rt=n(852),ot=n(20),it=n.n(ot),ct=Object(s.a)((function(e){return{widgetWrapper:{display:"flex",minHeight:"100%"},widgetHeader:{padding:e.spacing(3),paddingBottom:e.spacing(1),display:"flex",justifyContent:"space-between",alignItems:"center"},widgetRoot:{},widgetBody:{paddingBottom:e.spacing(3),paddingRight:e.spacing(3),paddingLeft:e.spacing(3)},noPadding:{padding:0},paper:{display:"flex",flexDirection:"column",flexGrow:1,overflow:"auto"},moreButton:{margin:-e.spacing(1),padding:0,width:40,height:40,color:e.palette.text.hint,"&:hover":{backgroundColor:e.palette.primary.main,color:"rgba(255, 255, 255, 0.35)"}},noWidgetShadow:{boxShadow:"none"}}}));function lt(e){var t,n,o=e.children,i=e.title,s=e.noBodyPadding,d=e.bodyClass,f=e.disableWidgetMenu,p=e.header,m=e.noHeaderPadding,h=e.headerClass,E=e.style,v=e.resetKeywords,j=e.downloadNotReached,y=e.noWidgetShadow,O=(Object(U.a)(e,["children","title","noBodyPadding","bodyClass","disableWidgetMenu","header","noHeaderPadding","headerClass","style","resetKeywords","downloadNotReached","noWidgetShadow"]),ct()),w=Object(a.useState)(null),S=Object(c.a)(w,2),k=S[0],C=S[1],x=Object(a.useState)(!1),N=Object(c.a)(x,2),_=N[0],T=N[1];return r.a.createElement("div",{className:O.widgetWrapper,style:E&&Object(l.a)({},E)},r.a.createElement(tt.a,{className:O.paper,classes:{root:it()(O.widgetRoot,Object(u.a)({},O.noWidgetShadow,y))}},r.a.createElement("div",{className:it()(O.widgetHeader,(t={},Object(u.a)(t,O.noPadding,m),Object(u.a)(t,h,h),t))},p||r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{variant:"h5",color:"textSecondary",noWrap:!0},i),!f&&r.a.createElement(b.a,{color:"primary",classes:{root:O.moreButton},"aria-owns":"widget-menu","aria-haspopup":"true",onClick:function(){return T(!0)},buttonRef:C},r.a.createElement(rt.a,null)))),r.a.createElement("div",{className:it()(O.widgetBody,(n={},Object(u.a)(n,O.noPadding,s),Object(u.a)(n,d,d),n))},o)),r.a.createElement(nt.a,{id:"widget-menu",open:_,anchorEl:k,onClose:function(){return T(!1)},disableAutoFocusItem:!0},r.a.createElement(at.a,{onClick:v},r.a.createElement(g.a,null,"Reset keywords")),r.a.createElement(at.a,{onClick:j},r.a.createElement(g.a,null,"Download not reached"))))}var ut=Object(s.a)((function(e){return{dotBase:{width:8,height:8,backgroundColor:e.palette.text.hint,borderRadius:"50%",transition:e.transitions.create("background-color")},dotSmall:{width:5,height:5},dotLarge:{width:11,height:11}}}));function st(e){var t,n=e.size,a=e.color,o=ut(),i=Object(d.a)();return r.a.createElement("div",{className:it()(o.dotBase,(t={},Object(u.a)(t,o.dotLarge,"large"===n),Object(u.a)(t,o.dotSmall,"small"===n),t)),style:{backgroundColor:a&&i.palette[a]&&i.palette[a].main}})}var dt=n(227);function ft(e){var t=e.id,n=et(),o=Object(d.a)(),i=Object(a.useState)({}),u=Object(c.a)(i,2),s=u[0],f=u[1],p=Object(a.useState)(!0),m=Object(c.a)(p,2),h=m[0],g=m[1];function b(e){return pe(e).then((function(t){g(!1),f(Object(l.a)({},t,{name:e}))}))}Object(a.useEffect)((function(){b(t)}),[t]);var E=[{name:"Landed      ",value:s.landed,color:"success"},{name:"Free        ",value:s.free,color:"warning"},{name:"Running     ",value:s.running,color:"secondary"}];return h?r.a.createElement("div",null,"Loading..."):r.a.createElement(lt,{title:s.name,upperTitle:!0,className:n.card,resetKeywords:function(){g(!0),me(s.name).then((function(e){b(t)}))},downloadNotReached:function(){g(!0),(s.name,he(t).then((function(e){var n="region_".concat(t,"_keys.xlsx"),a=dt.utils.json_to_sheet(e),r=dt.utils.book_new();dt.utils.book_append_sheet(r,a,"test"),dt.writeFile(r,n)}))).then((function(e){b(t)}))}},r.a.createElement(F.a,{container:!0,spacing:2},r.a.createElement(F.a,{item:!0,xs:6},r.a.createElement(qe.a,{width:"100%",height:144},r.a.createElement(Qe.a,null,r.a.createElement(Ye.a,{data:E,innerRadius:30,outerRadius:40,dataKey:"value"},E.map((function(e,t){return r.a.createElement(Ze.a,{key:"cell-".concat(t),fill:o.palette[e.color].main})})))))),r.a.createElement(F.a,{item:!0,xs:6},r.a.createElement("div",{className:n.pieChartLegendWrapper},E.map((function(e,t){var a=e.name,o=e.value,i=e.color;return r.a.createElement("div",{key:i,className:n.legendItemContainer},r.a.createElement(st,{color:i}),r.a.createElement("span",{className:"region-state-wrapper"},r.a.createElement("span",{className:"region-state"},a),r.a.createElement("span",{className:"region-state-value"},o)))})),r.a.createElement("div",{key:"error ",className:n.legendItemContainer},r.a.createElement(st,{color:"error"}),r.a.createElement("span",{className:"region-state-wrapper"},r.a.createElement("span",{className:"region-state"},"Err"),r.a.createElement("span",{className:"region-state-value"},s.total-(s.landed+s.free+s.running)))),r.a.createElement("div",{key:"primary",className:n.legendItemContainer},r.a.createElement(st,{color:"primary"}),r.a.createElement("span",{className:"region-state-wrapper"},r.a.createElement("span",{className:"region-state"},"Total"),r.a.createElement("span",{className:"region-state-value"},s.total)))))))}function pt(){var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=(t[0],t[1],Object(a.useState)([])),o=Object(c.a)(n,2),i=o[0],l=o[1];return Object(a.useEffect)((function(){Xe().then((function(e){l(e)}))}),[]),r.a.createElement("div",null,r.a.createElement(F.a,{container:!0,spacing:4},i&&i.map((function(e){return r.a.createElement(F.a,{item:!0,lg:3,md:4,sm:6,xs:12},r.a.createElement(ft,{id:e._id,key:e.name,data:e}))}))))}function mt(){return r.a.createElement("div",null,r.a.createElement(y.a,{exact:!0,path:"/app/",component:pt}),r.a.createElement(y.a,{exact:!0,path:"/app/keywords",component:Ne}),r.a.createElement(y.a,{exact:!0,path:"/app/Devices",component:Be}),r.a.createElement(y.a,{exact:!0,path:"/app/Animations",component:Ue}),r.a.createElement(y.a,{exact:!0,path:"/app/Groups",component:Je}),r.a.createElement(y.a,{exact:!0,path:"/app/Containers",component:$e}))}var ht=Object(s.a)((function(e){return{root:{display:"flex",fontSize:12},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:240,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(u.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:Object(l.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),sidebar:{},content:{flexGrow:1,padding:e.spacing(3)}}}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement((function(e){var t=ht(),n=r.a.useState(!0),a=Object(c.a)(n,2),o=a[0],i=a[1],l=Object(d.a)();return r.a.createElement(j.a,null,r.a.createElement("div",{className:t.root},r.a.createElement(h.a,null),r.a.createElement(p.a,{position:"fixed",className:Object(f.a)(t.appBar,Object(u.a)({},t.appBarShift,o))},r.a.createElement(m.a,null,r.a.createElement(b.a,{color:"inherit","aria-label":"open drawer",onClick:function(){i(!0)},edge:"start",className:Object(f.a)(t.menuButton,Object(u.a)({},t.hide,o))},r.a.createElement(v.a,null)),r.a.createElement(g.a,{variant:"h6",noWrap:!0},r.a.createElement(y.a,{path:"/Users"},r.a.createElement("div",null,"Users"))))),r.a.createElement(P,{classes:t,theme:l,open:o,setOpen:function(e){i(e)}}),r.a.createElement("main",{className:t.content},r.a.createElement("div",{className:t.toolbar}),r.a.createElement(mt,null))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[554,1,2]]]);
//# sourceMappingURL=main.898d6507.chunk.js.map