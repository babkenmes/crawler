(this.webpackJsonpstarter=this.webpackJsonpstarter||[]).push([[0],{388:function(e,t,n){e.exports=n(501)},393:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},501:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(18),o=n.n(i),c=n(16),u=n(41),l=n(62),s=n(343),f=n(19),d=(n(393),n(2)),p=n(538),m=n(327),h=n(539),b=n(112),g=n(257),E=n(263),j=n.n(E),O=n(91),v=n(111),y=n(77),S=n(504),w=n(528),k=n(370),C=n.n(k),_=n(369),x=n.n(_),T=n(505),D=n(529),N=n(321),L=n(268),A=n.n(L),G=n(371),R=n.n(G),z=n(372),U=n.n(z),F=n(373),I=n.n(F);function M(e){var t,n,i=e.classes,o=e.theme,u=e.open,s=e.setOpen,f=Object(v.e)(),p=Object(a.useState)(""),m=Object(c.a)(p,2),h=m[0],b=m[1];return Object(a.useEffect)((function(){b(f.pathname.replace("/app/","").toLowerCase())}),[f]),console.log(h),r.a.createElement(y.a,{variant:"permanent",className:Object(d.a)(i.drawer,(t={},Object(l.a)(t,i.drawerOpen,u),Object(l.a)(t,i.drawerClose,!u),t)),classes:{paper:Object(d.a)((n={},Object(l.a)(n,i.drawerOpen,u),Object(l.a)(n,i.drawerClose,!u),n))}},r.a.createElement("div",{className:i.toolbar},r.a.createElement(g.a,{onClick:function(){s(!1)}},"rtl"===o.direction?r.a.createElement(x.a,null):r.a.createElement(C.a,null))),r.a.createElement(w.a,null),r.a.createElement(S.a,{className:i.sidebar},r.a.createElement(T.a,{selected:""==h,button:!0,key:"Keywords",to:"/app/",component:O.b},r.a.createElement(D.a,null,r.a.createElement(A.a,null)),r.a.createElement(N.a,{primary:"Keywords"})),r.a.createElement(T.a,{selected:"devices"==h,button:!0,key:"Devices",to:"/app/Devices",component:O.b},r.a.createElement(D.a,null,r.a.createElement(R.a,null)),r.a.createElement(N.a,{primary:"Devices"})),r.a.createElement(T.a,{selected:"animations"==h,button:!0,key:"Animations",to:"/app/Animations",component:O.b},r.a.createElement(D.a,null,r.a.createElement(U.a,null)),r.a.createElement(N.a,{primary:"Animations"})),r.a.createElement(T.a,{selected:"groups"==h,button:!0,key:"Groups",to:"/app/Groups",component:O.b},r.a.createElement(D.a,null,r.a.createElement(I.a,null)),r.a.createElement(N.a,{primary:"Groups"})),r.a.createElement(w.a,null),r.a.createElement(T.a,{selected:"containers"==h,button:!0,key:"Containers",to:"/app/Containers",component:O.b},r.a.createElement(D.a,null,r.a.createElement(A.a,null)),r.a.createElement(N.a,{primary:"Containers"}))),r.a.createElement(w.a,null),r.a.createElement(w.a,null))}var P=n(381),B=n(535),J=n(40),W=n.n(J),K=function(e){if(!e.ok)throw Error(e.statusText);return e},V=function(e){return fetch("/api/keywords",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(K).then((function(e){return e.json()}))},X=function(e){return fetch("/api/keywords/".concat(e._id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(K).then((function(e){return e.json()}))},$=function(e){return fetch("/api/keywords/".concat(e),{method:"DELETE"}).then(K).then((function(e){return e.json()}))},q=function(){return fetch("/api/keywords/recurring").then(K).then((function(e){return e.json()}))},H=function(){return fetch("/api/keywords/finished").then(K).then((function(e){return e.json()}))},Q=function(){return fetch("/api/keywords/errors").then(K).then((function(e){return e.json()}))},Y=function(){return fetch("/api/keywords/running").then(K).then((function(e){return e.json()}))},Z=function(){return fetch("/api/keywords/resumeall").then(K).then((function(e){return e.json()}))},ee=function(e){return fetch("/api/groups",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(K).then((function(e){return e.json()}))},te=function(e){return fetch("/api/groups/".concat(e._id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(K).then((function(e){return e.json()}))},ne=function(e){return fetch("/api/groups/".concat(e),{method:"DELETE"}).then(K).then((function(e){return e.json()}))},ae=function(){return fetch("/api/groups").then(K).then((function(e){return e.json()}))},re=function(){return fetch("/api/groups/getByType/Animation").then(K).then((function(e){return e.json()}))},ie=function(){return fetch("/api/groups/getByType/Device").then(K).then((function(e){return e.json()}))},oe=n(226),ce=function(e){return function(t){var n=Object(oe.a)(t);return n.push(e),n}},ue=function(e,t){return function(n){var a=Object(oe.a)(n);return a[a.indexOf(t)]=e,a}},le=function(e){return function(t){var n=Object(oe.a)(t);return n.splice(n.indexOf(e),1),n}},se=n(540),fe=n(200),de=n(60),pe=n.n(de),me=n(131),he=n.n(me),be=n(541),ge=n(534),Ee=n(255),je=n(88),Oe=n.n(je);function ve(e){var t=e.deviceGroupLookup,n=e.animationGroupLookup,i=e.setError,o=r.a.useState(0),l=Object(c.a)(o,2),s=(l[0],l[1],Object(a.useState)([])),f=Object(c.a)(s,2),d=f[0],p=f[1],m=Object(a.useState)(!1),h=Object(c.a)(m,2),b=h[0],g=h[1],E=Object(a.useState)(1),j=Object(c.a)(E,2),O=j[0],v=(j[1],[{title:"ID",field:"_id"},{title:"Words",field:"words"},{title:"Animation group",field:"animation_group",lookup:n},{title:"Device group",field:"device_group",lookup:t},{title:"Region",field:"region_tag",render:function(e){return r.a.createElement("span",null,e.region_tag||"Default")}},{title:"Domain",field:"domain"},{title:"TLD",field:"tld"},{title:"Priority",field:"priority"},{title:"Last run",field:"last_run",type:"datetime",editable:"never"}]);Object(a.useEffect)((function(){y()}),[O]);var y=function(){return q().then((function(e){var t=e.keywords;return p(t)})).catch((function(e){return i(e.toString())}))},S=function(e){return $(e._id).then((function(t){p(le(e))})).catch((function(e){return i(e.toString())}))};return r.a.createElement(W.a,{title:"Active",columns:v,data:d,editable:{onRowAdd:function(e){return V(e).then((function(e){var t=e.keyword;p(ce(t))})).catch((function(e){return i(e.toString())}))},onRowUpdate:function(e,t){return X(e).then((function(e){var n=e.keyword;p(ue(n,t))})).catch((function(e){return i(e.toString())}))},onRowDelete:S},actions:[{icon:"add",tooltip:"Copy this keyword",onClick:function(e,t){return t.forEach((function(e){var t=Object(u.a)({},e);delete t._id,function(e){V(e).then((function(e){var t=e.keyword;p(ce(t))})).catch((function(e){return i(e.toString())}))}(t)}))}},{icon:Oe.a,tooltip:"Enable filtering",isFreeAction:!0,onClick:function(e){return g(!b)}},{tooltip:"Remove All Selected Users",icon:"delete",onClick:function(e,t){return t.forEach((function(e){return S(e)}))}}],options:{selection:!0,filtering:b}})}function ye(e){var t=e.deviceGroupLookup,n=e.animationGroupLookup,i=e.setError,o=r.a.useState(0),l=Object(c.a)(o,2),s=(l[0],l[1],Object(a.useState)([])),f=Object(c.a)(s,2),d=f[0],p=f[1],m=Object(a.useState)(!1),h=Object(c.a)(m,2),b=h[0],g=h[1],E=Object(a.useState)(1),j=Object(c.a)(E,2),O=j[0],v=(j[1],[{title:"ID",field:"_id"},{title:"Words",field:"words"},{title:"Animation group",field:"animation_group",lookup:n},{title:"Device group",field:"device_group",lookup:t},{title:"Region",field:"region_tag",render:function(e){return r.a.createElement("span",null,e.region_tag||"Default")}},{title:"Domain",field:"domain"},{title:"TLD",field:"tld"},{title:"Created",field:"created",type:"datetime"},{title:"Message",field:"message"}]);Object(a.useEffect)((function(){y()}),[O]);var y=function(){return H().then((function(e){var t=e.keywords;return p(t)})).catch((function(e){return i(e.toString())}))};return r.a.createElement(W.a,{title:"Finished",columns:v,data:d,actions:[{icon:"add",tooltip:"Copy this keyword to active",onClick:function(e,t){var n=Object(u.a)({},t,{done:!1,hasError:!1,errorMessage:"",message:""});delete n._id,V(n).then((function(e){e.keyword})).catch((function(e){return i(e.toString())}))}},{icon:Oe.a,tooltip:"Enable filtering",isFreeAction:!0,onClick:function(e){return g(!b)}},{tooltip:"Remove All Selected Users",icon:"delete",onClick:function(e,t){return t.forEach((function(e){return $(e._id).then((function(e){})).catch((function(e){return i(e.toString())}))}))}}],options:{selection:!0,filtering:b}})}function Se(e){var t=e.deviceGroupLookup,n=e.animationGroupLookup,i=e.setError,o=Object(a.useState)([]),l=Object(c.a)(o,2),s=l[0],f=l[1],d=Object(a.useState)(!1),p=Object(c.a)(d,2),m=p[0],h=p[1],b=Object(a.useState)(1),g=Object(c.a)(b,2),E=g[0],j=(g[1],[{title:"ID",field:"_id"},{title:"Words",field:"words"},{title:"Animation group",field:"animation_group",lookup:n},{title:"Device group",field:"device_group",lookup:t},{title:"Created",field:"created",type:"datetime"},{title:"Region",field:"region_tag",render:function(e){return r.a.createElement("span",null,e.region_tag||"Default")}},{title:"Domain",field:"domain"},{title:"TLD",field:"tld"},{title:"Message",field:"message"},{title:"Error Message",field:"errorMessage"}]);Object(a.useEffect)((function(){O()}),[E]);var O=function(){return Q().then((function(e){var t=e.keywords;return f(t)})).catch((function(e){return i(e.toString())}))};return r.a.createElement(W.a,{title:"Keywords with error",columns:j,data:s,actions:[{icon:"add",tooltip:"Copy this keyword to active",onClick:function(e,t){var n=Object(u.a)({},t,{done:!1,hasError:!1,errorMessage:"",message:""});delete n._id,V(n).then((function(e){e.keyword})).catch((function(e){return i(e.toString())}))}},{icon:Oe.a,tooltip:"Enable filtering",isFreeAction:!0,onClick:function(e){return h(!m)}},{tooltip:"Remove All Selected Users",icon:"delete",onClick:function(e,t){return t.forEach((function(e){return $(e._id).then((function(e){})).catch((function(e){return i(e.toString())}))}))}}],options:{selection:!0,filtering:m}})}var we=n(380),ke=n.n(we);function Ce(e){e.deviceGroupLookup;var t=e.animationGroupLookup,n=e.setError,i=r.a.useState(0),o=Object(c.a)(i,2),u=(o[0],o[1],Object(a.useState)([])),l=Object(c.a)(u,2),s=l[0],f=l[1],d=Object(a.useState)(!1),p=Object(c.a)(d,2),m=p[0],h=(p[1],Object(a.useState)(1)),b=Object(c.a)(h,2),g=(b[0],b[1],[{title:"ID",field:"_id"},{title:"Words",field:"words"},{title:"Animation group",field:"animation_group",lookup:t},{title:"Device",field:"device"},{title:"Region",field:"region_tag",render:function(e){return r.a.createElement("span",null,e.region_tag||"Default")}},{title:"Domain",field:"domain"},{title:"TLD",field:"tld"},{title:"Created",field:"created",type:"datetime",editable:"never"}]);Object(a.useEffect)((function(){var e=setTimeout((function(){E()}),2e3);return function(){return clearTimeout(e)}}));var E=function(){return Y().then((function(e){var t=e.keywords;return f(t)})).catch((function(e){return n(e.toString())}))};return r.a.createElement(W.a,{title:"Running right now",columns:g,data:s,actions:[{icon:ke.a,tooltip:"Resume all",isFreeAction:!0,onClick:function(e,t){return Z().catch((function(e){return n(e.toString())}))}}],options:{filtering:m}})}function _e(e){var t=e.children,n=e.value,a=e.index,i=Object(P.a)(e,["children","value","index"]);return r.a.createElement("div",Object.assign({role:"tabpanel",hidden:n!==a,id:"full-width-tabpanel-".concat(a),"aria-labelledby":"full-width-tab-".concat(a)},i),n===a&&r.a.createElement(Ee.a,{p:3},r.a.createElement(b.a,null,t)))}function xe(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}}var Te=Object(s.a)((function(e){return{root:{backgroundColor:e.palette.background.paper}}}));function De(){var e=Te(),t=Object(f.a)(),n=r.a.useState(0),i=Object(c.a)(n,2),o=i[0],u=i[1],l=Object(a.useState)(1),s=Object(c.a)(l,2),d=s[0],m=(s[1],Object(a.useState)(!1)),h=Object(c.a)(m,2),b=h[0],E=h[1],j=Object(a.useState)([]),O=Object(c.a)(j,2),v=O[0],y=O[1],S=Object(a.useState)([]),w=Object(c.a)(S,2),k=w[0],C=w[1],_={};v.forEach((function(e){_[e._id]=e.name}));var x={};k.forEach((function(e){x[e._id]=e.name})),Object(a.useEffect)((function(){T(),D()}),[d]);var T=function(){return re().then((function(e){var t=e.groups;return y(t)})).catch((function(e){return E(e.toString())}))},D=function(){return ie().then((function(e){var t=e.groups;return C(t)})).catch((function(e){return E(e.toString())}))};return r.a.createElement("div",{className:e.root},r.a.createElement(fe.a,{in:b},r.a.createElement(se.a,{severity:"error",action:r.a.createElement(g.a,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){E(!1)}},r.a.createElement(pe.a,{fontSize:"inherit"}))},b)),r.a.createElement(p.a,{position:"static",color:"default"},r.a.createElement(be.a,{value:o,onChange:function(e,t){u(t)},indicatorColor:"primary",textColor:"primary",variant:"fullWidth","aria-label":"full width tabs example"},r.a.createElement(ge.a,Object.assign({label:"Active keywords"},xe(0))),r.a.createElement(ge.a,Object.assign({label:"Finished keywords"},xe(1))),r.a.createElement(ge.a,Object.assign({label:"Keyword with error"},xe(2))))),r.a.createElement(he.a,{axis:"rtl"===t.direction?"x-reverse":"x",index:o,onChangeIndex:function(e){u(e)}},r.a.createElement(_e,{value:o,index:0,dir:t.direction},r.a.createElement(B.a,{item:!0,xs:12,className:"productType-container"},r.a.createElement(ve,{deviceGroupLookup:x,animationGroupLookup:_,setError:E}))),r.a.createElement(_e,{value:o,index:1,dir:t.direction},r.a.createElement(B.a,{item:!0,xs:12,className:"productType-container"},r.a.createElement(ye,{deviceGroupLookup:x,animationGroupLookup:_,setError:E}))),r.a.createElement(_e,{value:o,index:2,dir:t.direction},r.a.createElement(B.a,{item:!0,xs:12,className:"productType-container"},r.a.createElement(Se,{deviceGroupLookup:x,animationGroupLookup:_,setError:E})))),r.a.createElement(B.a,{item:!0,xs:12,className:"productType-container"},r.a.createElement(Ce,{deviceGroupLookup:x,animationGroupLookup:_,setError:E})))}function Ne(){return r.a.createElement("div",null,r.a.createElement(De,null))}var Le=function(e){return fetch("/api/devices",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(K).then((function(e){return e.json()}))},Ae=function(e){return fetch("/api/devices/".concat(e._id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(K).then((function(e){return e.json()}))},Ge=function(e){return fetch("/api/devices/".concat(e),{method:"DELETE"}).then(K).then((function(e){return e.json()}))},Re=function(){return fetch("/api/devices").then(K).then((function(e){return e.json()}))},ze=Object(s.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"}}}}));function Ue(){ze();var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=t[0],i=t[1],o=Object(a.useState)({type:"",name:""}),u=Object(c.a)(o,2),l=u[0],s=(u[1],Object(a.useState)(1)),f=Object(c.a)(s,2),d=f[0],p=(f[1],Object(a.useState)(!1)),m=Object(c.a)(p,2),h=m[0],b=m[1],E=Object(a.useState)([]),j=Object(c.a)(E,2),O=j[0],v=j[1],y={};O.forEach((function(e){y[e._id]=e.name}));var S=[{title:"Name",field:"name"},{title:"User Agent",field:"user_agent"},{title:"Window Size",field:"window_size"},{title:"Is Mobile",field:"mobile",type:"boolean"},{title:"Group",field:"group",lookup:y}];Object(a.useEffect)((function(){k(),w()}),[d]);var w=function(){return ie().then((function(e){var t=e.groups;return v(t)})).catch((function(e){return b(e.toString())}))},k=function(){return Re().then((function(e){return i(e)})).catch((function(e){return b(e.toString())}))},C=l||{};C.name,C.type;return r.a.createElement(B.a,{item:!0,xs:10,className:"productType-container"},r.a.createElement(fe.a,{in:h},r.a.createElement(se.a,{severity:"error",action:r.a.createElement(g.a,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){b(!1)}},r.a.createElement(pe.a,{fontSize:"inherit"}))},h)),r.a.createElement(W.a,{title:"Devices",columns:S,data:n,editable:{onRowAdd:function(e){return Le(e).then((function(e){var t=e.device;i(ce(t))})).catch((function(e){return b(e.toString())}))},onRowUpdate:function(e,t){return Ae(e).then((function(e){var n=e.device;i(ue(n,t))})).catch((function(e){return b(e.toString())}))},onRowDelete:function(e){return Ge(e._id).then((function(t){i(le(e))})).catch((function(e){return b(e.toString())}))}}}))}var Fe,Ie=function(e){return fetch("/api/animations",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(K).then((function(e){return e.json()}))},Me=function(e){return fetch("/api/animations/".concat(e._id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(K).then((function(e){return e.json()}))},Pe=function(e){return fetch("/api/animations/".concat(e),{method:"DELETE"}).then(K).then((function(e){return e.json()}))},Be=function(){return fetch("/api/animations").then(K).then((function(e){return e.json()}))},Je=Object(s.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"}}}}));function We(){Je();var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=t[0],i=t[1],o=Object(a.useState)({type:"",name:""}),u=Object(c.a)(o,2),l=u[0],s=(u[1],Object(a.useState)(1)),f=Object(c.a)(s,2),d=f[0],p=(f[1],Object(a.useState)(!1)),m=Object(c.a)(p,2),h=m[0],b=m[1],E=Object(a.useState)([]),j=Object(c.a)(E,2),O=j[0],v=j[1],y={};O.forEach((function(e){y[e._id]=e.name}));var S=[{title:"Name",field:"name"},{title:"Group",field:"group",lookup:y}];Object(a.useEffect)((function(){k(),w()}),[d]);var w=function(){return re().then((function(e){var t=e.groups;return v(t)})).catch((function(e){return b(e.toString())}))},k=function(){return Be().then((function(e){return i(e)})).catch((function(e){return b(e.toString())}))},C=l||{};C.name,C.type;return r.a.createElement(B.a,{item:!0,xs:10,className:"productType-container"},r.a.createElement(fe.a,{in:h},r.a.createElement(se.a,{severity:"error",action:r.a.createElement(g.a,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){b(!1)}},r.a.createElement(pe.a,{fontSize:"inherit"}))},h)),r.a.createElement(W.a,{title:"Animations",columns:S,data:n,editable:{onRowAdd:function(e){return Ie(e).then((function(e){var t=e.animation;i(ce(t))})).catch((function(e){return b(e.toString())}))},onRowUpdate:function(e,t){return Me(e).then((function(e){var n=e.animation;i(ue(n,t))})).catch((function(e){return b(e.toString())}))},onRowDelete:function(e){return Pe(e._id).then((function(t){i(le(e))})).catch((function(e){return b(e.toString())}))}}}))}var Ke=Object(s.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"}}}})),Ve=[{title:"Name",field:"name"},{title:"Type",field:"type",lookup:(Fe={},Object(l.a)(Fe,"Animation","Animation"),Object(l.a)(Fe,"Device","Device"),Fe)}];function Xe(){Ke();var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=t[0],i=t[1],o=Object(a.useState)({type:"",name:""}),u=Object(c.a)(o,2),l=u[0],s=(u[1],Object(a.useState)(1)),f=Object(c.a)(s,2),d=f[0],p=(f[1],Object(a.useState)(!1)),m=Object(c.a)(p,2),h=m[0],b=m[1];Object(a.useEffect)((function(){E()}),[d]);var E=function(){return ae().then((function(e){return i(e)})).catch((function(e){return b(e.toString())}))},j=l||{};j.name,j.type;return r.a.createElement(B.a,{item:!0,xs:10,className:"productType-container"},r.a.createElement(fe.a,{in:h},r.a.createElement(se.a,{severity:"error",action:r.a.createElement(g.a,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){b(!1)}},r.a.createElement(pe.a,{fontSize:"inherit"}))},h)),r.a.createElement(W.a,{title:"Groups",pageSize:50,columns:Ve,data:n,editable:{onRowAdd:function(e){return ee(e).then((function(e){var t=e.group;i(ce(t))})).catch((function(e){return b(e.toString())}))},onRowUpdate:function(e,t){return te(e).then((function(e){var n=e.group;i(ue(n,t))})).catch((function(e){return b(e.toString())}))},onRowDelete:function(e){return ne(e._id).then((function(t){i(le(e))})).catch((function(e){return b(e.toString())}))}}}))}var $e=function(){return fetch("/api/containers").then(K).then((function(e){return e.json()}))},qe=function(e){return fetch("/api/containers/changeregion/".concat(e)).then(K).then((function(e){return e.json()}))},He=Object(s.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"}}}}));function Qe(){He();var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=t[0],i=t[1],o=Object(a.useState)(1),u=Object(c.a)(o,2),l=u[0],s=(u[1],Object(a.useState)(!1)),f=Object(c.a)(s,2),d=f[0],p=f[1],m=Object(a.useState)(!1),h=Object(c.a)(m,2),b=h[0],E=h[1];Object(a.useEffect)((function(){j()}),[l]);var j=function(){return $e().then((function(e){return i(e)})).catch((function(e){return p(e.toString())}))};return r.a.createElement(B.a,{item:!0,xs:10,className:"productType-container"},r.a.createElement(fe.a,{in:d},r.a.createElement(se.a,{severity:"error",action:r.a.createElement(g.a,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){p(!1)}},r.a.createElement(pe.a,{fontSize:"inherit"}))},d)),r.a.createElement(W.a,{title:"Containers",columns:[{title:"Name",field:"name"},{title:"VPN",field:"vpn_name"},{title:"Region",field:"current_region"},{title:"Location",field:"geo_location"},{title:"Error",field:"error_message"},{title:"IP",field:"ip"},{title:"Last region change",field:"last_region_change",type:"datetime"}],data:n,actions:[{icon:"Change region",tooltip:"Change the region",onClick:function(e,t){return n=t._id,qe(n).then((function(e){return j()})).catch((function(e){return p(e.toString())}));var n}},{icon:Oe.a,tooltip:"Enable filtering",isFreeAction:!0,onClick:function(e){return E(!b)}}],options:{filtering:b}}))}function Ye(){return r.a.createElement("div",null,r.a.createElement(v.a,{exact:!0,path:"/app/",component:Ne}),r.a.createElement(v.a,{exact:!0,path:"/app/Devices",component:Ue}),r.a.createElement(v.a,{exact:!0,path:"/app/Animations",component:We}),r.a.createElement(v.a,{exact:!0,path:"/app/Groups",component:Xe}),r.a.createElement(v.a,{exact:!0,path:"/app/Containers",component:Qe}))}var Ze=Object(s.a)((function(e){return{root:{display:"flex",fontSize:12},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:240,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(l.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:Object(u.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),sidebar:{},content:{flexGrow:1,padding:e.spacing(3)}}}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement((function(e){var t=Ze(),n=r.a.useState(!0),a=Object(c.a)(n,2),i=a[0],o=a[1],u=Object(f.a)();return r.a.createElement(O.a,null,r.a.createElement("div",{className:t.root},r.a.createElement(h.a,null),r.a.createElement(p.a,{position:"fixed",className:Object(d.a)(t.appBar,Object(l.a)({},t.appBarShift,i))},r.a.createElement(m.a,null,r.a.createElement(g.a,{color:"inherit","aria-label":"open drawer",onClick:function(){o(!0)},edge:"start",className:Object(d.a)(t.menuButton,Object(l.a)({},t.hide,i))},r.a.createElement(j.a,null)),r.a.createElement(b.a,{variant:"h6",noWrap:!0},r.a.createElement(v.a,{path:"/Users"},r.a.createElement("div",null,"Users"))))),r.a.createElement(M,{classes:t,theme:u,open:i,setOpen:function(e){o(e)}}),r.a.createElement("main",{className:t.content},r.a.createElement("div",{className:t.toolbar}),r.a.createElement(Ye,null))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[388,1,2]]]);
//# sourceMappingURL=main.72dded33.chunk.js.map