(this["webpackJsonpredux-firebase"]=this["webpackJsonpredux-firebase"]||[]).push([[0],{169:function(e,t,a){},170:function(e,t,a){"use strict";a.r(t);var n=a(32),r=a.n(n),c=a(2),o=a(8),i=a(9),s=a.n(i),u=a(14),l=a(21),d=a(22),j=a(10),b=a(6),p=a(16),h=a.n(p),f=a(28);a(84),a(171);f.a.initializeApp({apiKey:"AIzaSyACAbGF66NACm4_qu7Cr8rnwuqHxkb8cPs",authDomain:"app-notas-aba06.firebaseapp.com",projectId:"app-notas-aba06",storageBucket:"app-notas-aba06.appspot.com",messagingSenderId:"712296400542",appId:"1:712296400542:web:a8ecea4d2d4e68a4ee9d8f",measurementId:"G-PLFWJ139NG"});var O=f.a.firestore(),m=new f.a.auth.GoogleAuthProvider,x=function(){var e=Object(u.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.collection("".concat(t,"/journal/notas")).get();case 2:return a=e.sent,n=[],a.forEach((function(e){n.push(Object(b.a)({id:e.id},e.data()))})),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(u.a)(s.a.mark((function e(t){var a,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.cloudinary.com/v1_1/defok5em4/upload",(a=new FormData).append("upload_preset","Journal"),a.append("file",t),e.prev=4,e.next=7,fetch("https://api.cloudinary.com/v1_1/defok5em4/upload",{method:"POST",body:a});case 7:if(!(n=e.sent).ok){e.next=15;break}return e.next=11,n.json();case 11:return r=e.sent,e.abrupt("return",r.secure_url);case 15:return e.next=17,n.json();case 17:throw e.sent;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(4),console.log(e.t0);case 23:case"end":return e.stop()}}),e,null,[[4,20]])})));return function(t){return e.apply(this,arguments)}}(),_="[auth] Login",g="[auth] Logged",y="[error] SetError",N="[error] RemoveError",w="[loading] Start",C="[loading] Finish",k="[notas] Crear Nota",A="[notas] Borrar Nota",E="[notas] Actualizar Nota",S="[notas] Cargar Notas",I="[notas] Nota Activa",P="[notas] Limpieza Cerrar Sesion",T=function(e,t){return{type:k,payload:Object(b.a)({id:e},t)}},B=function(e,t){return{type:I,payload:Object(b.a)({id:e},t)}},z=function(e){return function(){var t=Object(u.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x(e);case 2:n=t.sent,a({type:S,payload:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},D=function(e){return function(){var t=Object(u.a)(s.a.mark((function t(a,n){var r,c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().auth.uid,e.url||delete e.url,delete(c=Object(b.a)({},e)).id,t.next=6,O.doc("".concat(r,"/journal/notas/").concat(e.id)).update(c).then((function(){h.a.fire({title:"Nota Actualizada",icon:"success"})}));case 6:a(L(e.id,e));case 7:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},L=function(e,t){return{type:E,payload:{id:e,nota:t}}},R=function(e){return{type:A,payload:e}},q=a(35),F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c.useState)(e),a=Object(l.a)(t,2),n=a[0],r=a[1],o=function(e){r(Object(b.a)(Object(b.a)({},n),{},Object(q.a)({},e.target.name,e.target.value)))},i=function(){r(e)},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;r(t)};return[n,o,i,s]},G=a(1),J=function(){var e=Object(o.c)((function(e){return e.notas})).active,t=Object(o.b)();return Object(G.jsxs)("div",{className:"journal__barra",children:[Object(G.jsx)("span",{children:"28 Agoto de 2021"}),Object(G.jsx)("input",{type:"file",onChange:function(e){var a,n=e.target.files[0];n&&t((a=n,function(){var e=Object(u.a)(s.a.mark((function e(t,n){var r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n().notas.active,h.a.fire({title:"Actualizando...",text:"Espera un momento",allowOutsideClick:!1,showConfirmButton:!1,willOpen:function(){h.a.showLoading()}}),e.next=4,v(a);case 4:c=e.sent,r.url=c,t(D(r)),h.a.close();case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()))},id:"Archivo",style:{display:"none"}}),Object(G.jsx)("button",{className:"boton boton-2",onClick:function(){t(D(e))},children:"Guardar"}),Object(G.jsx)("button",{className:"boton boton-2",onClick:function(){document.querySelector("#Archivo").click()},children:"Imagen"})]})},W=function(){var e=Object(o.c)((function(e){return e.notas})).active,t=F(e),a=Object(l.a)(t,4),n=a[0],r=a[1],i=a[3],d=n.titulo,j=n.cuerpo,p=Object(c.useRef)(e.id),h=Object(o.b)();Object(c.useEffect)((function(){e.id!==p.current&&(i(e),p.current=e.id)}),[e,i]),Object(c.useEffect)((function(){h(B(n.id,Object(b.a)({},n)))}),[n,h]);return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(J,{}),Object(G.jsxs)("div",{className:"nota__main-content",children:[Object(G.jsxs)("div",{className:"nota__ingresar",children:[Object(G.jsx)("input",{type:"text",placeholder:"Titulo de la nota",className:"nota__titulo",name:"titulo",value:d,onChange:r}),Object(G.jsx)("textarea",{placeholder:"Texto de la nota",className:"nota__cuerpo",name:"cuerpo",value:j,onChange:r})]}),Object(G.jsx)("div",{className:"nota__imagen-content",children:e.url&&Object(G.jsx)("img",{src:e.url,alt:"imagen",className:"imagen__principal"})})]}),Object(G.jsx)("button",{className:"boton boton-3",onClick:function(){var t;h((t=e.id,function(){var e=Object(u.a)(s.a.mark((function e(a,n){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n().auth.uid,O.doc("".concat(r,"/journal/notas/").concat(t)).delete(),a(R(t));case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()))},children:"Borrar"})]})},U=function(){return Object(G.jsxs)("div",{className:"journal__nota-no",children:[Object(G.jsx)("box-icon",{name:"error-alt",size:"100px"}),Object(G.jsx)("h1",{className:"notano__title",children:"Selecciona una Nota para continuar...."})]})},X=(a(88),a(43)),H=a.n(X),K=function(e){var t=e.id,a=e.titulo,n=e.cuerpo,r=e.fecha,c=e.url,i=Object(o.b)();return Object(G.jsxs)("div",{className:"nota__individual",onClick:function(){i(B(t,{titulo:a,cuerpo:n,fecha:r,url:c}))},children:[c&&Object(G.jsx)("div",{className:"nota__imagen",style:{backgroundImage:"url(".concat(c,")"),backgroundSize:"cover"}}),Object(G.jsxs)("div",{className:"nota__texto",children:[Object(G.jsx)("h3",{children:a}),Object(G.jsx)("p",{children:n})]}),Object(G.jsxs)("div",{className:"nota__fecha",children:[Object(G.jsx)("span",{children:H()(r).format("dddd")}),Object(G.jsx)("p",{children:H()(r).format("D")})]})]})},M=function(){var e=Object(o.c)((function(e){return e.notas})).notas;return Object(G.jsx)("div",{className:"notas__totales",children:e.map((function(e){return Object(G.jsx)(K,Object(b.a)({},e),e.id)}))})},V=function(e,t){return{type:_,payload:{uid:e,displayName:t}}},Y=function(e){return{type:y,payload:e}},Q=function(){return{type:w}},Z=function(){return{type:C}},$=function(){return{type:P}},ee=function(){var e=Object(o.b)();return Object(G.jsxs)("div",{className:"journal__aside",children:[Object(G.jsxs)("div",{className:"journal__usuario",children:[Object(G.jsx)("h3",{children:"Oscar Ascencio"}),Object(G.jsx)("button",{className:"boton boton-4",onClick:function(t){t.preventDefault(),e(function(){var e=Object(u.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.auth().signOut();case 2:t({type:g}),t($());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Cerrar Sesi\xf3n"})]}),Object(G.jsxs)("div",{className:"agregar__entrada",onClick:function(){e((function(e,t){var a=t().auth.uid,n={titulo:"",cuerpo:"",fecha:Date.now(),url:""};O.collection("".concat(a,"/journal/notas")).add(n).then((function(t){e(B(t.id,n)),e(T(t.id,n))}))}))},children:[Object(G.jsx)("box-icon",{name:"add-to-queue",size:"lg",color:"white"}),Object(G.jsx)("p",{className:"agregar__texto",children:"Crear Nota"})]}),Object(G.jsx)(M,{}),Object(G.jsx)("h1",{className:"journal__title",children:"Notas App"})]})},te=function(){var e=Object(o.c)((function(e){return e.notas})).active;return Object(G.jsxs)("div",{className:"journal__content",children:[Object(G.jsx)(ee,{}),Object(G.jsx)("div",{className:"journal__main",children:e?Object(G.jsx)(W,{}):Object(G.jsx)(U,{})})]})},ae=function(){var e=Object(o.c)((function(e){return e.ui})).loading,t=F({email:"",password:""}),a=Object(l.a)(t,2),n=a[0],r=a[1],c=Object(o.b)(),i=n.email,s=n.password;return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsxs)("div",{className:"auth__login",children:[Object(G.jsxs)("form",{className:"auth__form-login",onSubmit:function(e){e.preventDefault(),c(function(e,t){return function(a){f.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;a(Q()),a(V(t.uid,t.displayName)),a(Z())})).catch((function(e){h.a.fire({title:"Usuario no Registrado",text:"Ir al Registro",icon:"error",confirmButtonText:"Aceptar"}),a(Z())}))}}(i,s))},children:[Object(G.jsx)("h1",{className:"auth__title",children:"Inicia Sesi\xf3n"}),Object(G.jsx)("input",{type:"email",className:"auth__input",placeholder:"Email",name:"email",value:i,onChange:r}),Object(G.jsx)("input",{type:"password",className:"auth__input",placeholder:"Password",name:"password",value:s,onChange:r}),Object(G.jsx)("button",{type:"submit",disabled:e,className:"boton boton-1 animate__animated animate__fadeInLeft",children:"Iniciar Sesi\xf3n"}),Object(G.jsx)(d.b,{to:"/auth/register",className:"boton",children:"\xbfNo tienes una Cuenta?"})]}),Object(G.jsx)("button",{onClick:function(){c((function(e){f.a.auth().signInWithPopup(m).then((function(t){var a=t.user;e(V(a.uid,a.displayName))}))}))},className:"boton boton-goole animate__animated animate__fadeInLeft",children:"Iniciar Sesi\xf3n con Google"})]}),Object(G.jsx)("div",{className:"auth__imagen"})]})},ne=a(64),re=a.n(ne),ce=function(){var e=Object(o.b)(),t=F({nombre:"",email:"",password1:"",password2:""}),a=Object(l.a)(t,3),n=a[0],r=a[1],c=a[2],i=n.nombre,j=n.email,b=n.password1,p=n.password2,O=function(){return 0===i.trim().length?(e(Y("Nombre Requerido")),h.a.fire({title:"Error",text:"Nombre Requerido",icon:"error",confirmButtonText:"Aceptar"}),!1):re.a.isEmail(j)?!(b!==p||b.length<6)||(e(Y("Contrase\xf1a debe de sey mayor a 6 caracteres")),h.a.fire({title:"Error",text:"Contrase\xf1a debe de sey mayor a 6 caracteres",icon:"error",confirmButtonText:"Aceptar"}),!1):(e(Y("Email Incorrecto")),h.a.fire({title:"Error",text:"Email Incorrecto",icon:"error",confirmButtonText:"Aceptar"}),!1)};return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)("div",{className:"auth__login",children:Object(G.jsxs)("form",{className:"auth__form-register",onSubmit:function(t){t.preventDefault(),O()&&(e({type:y}),e(function(e,t,a){return function(n){f.a.auth().createUserWithEmailAndPassword(e,t).then(function(){var e=Object(u.a)(s.a.mark((function e(t){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.user,e.next=3,r.updateProfile({displayName:a});case 3:n(V(r.uid,r.displayName));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){e.message,h.a.fire({title:"Error",text:"El correo ya esta registrado",icon:"error",confirmButtonText:"Aceptar"})}))}}(j,p,i)),h.a.fire({title:"Cuenta Creada",text:"Ir al Login",icon:"success",confirmButtonText:"Aceptar"}),c())},children:[Object(G.jsx)("h1",{className:"auth__title",children:"Crea una Cuenta"}),Object(G.jsx)("input",{type:"text",className:"auth__input",placeholder:"Nombre",value:i,name:"nombre",onChange:r}),Object(G.jsx)("input",{type:"email",className:"auth__input",placeholder:"Email",value:j,name:"email",onChange:r}),Object(G.jsx)("input",{type:"password",className:"auth__input",placeholder:"Password",value:b,name:"password1",onChange:r}),Object(G.jsx)("input",{type:"password",className:"auth__input",placeholder:"Password Again",value:p,name:"password2",onChange:r}),Object(G.jsx)("button",{type:"submit",className:"boton boton-1",children:"Registrarse"}),Object(G.jsx)(d.b,{to:"/auth/login",className:"boton",children:"\xbfYa tienes una Cuenta?"})]})}),Object(G.jsx)("div",{className:"auth__imagen"})]})},oe=function(){return Object(G.jsx)("div",{className:"auth__content",children:Object(G.jsxs)(j.d,{children:[Object(G.jsx)(j.b,{exact:!0,path:"/auth/login",component:ae}),Object(G.jsx)(j.b,{exact:!0,path:"/auth/register",component:ce}),Object(G.jsx)(j.a,{to:"/auth/login"})]})})},ie=a(36),se=["autenticado","component"],ue=function(e){var t=e.autenticado,a=e.component,n=Object(ie.a)(e,se);return Object(G.jsx)(j.b,Object(b.a)(Object(b.a)({},n),{},{component:function(e){return t?Object(G.jsx)(a,Object(b.a)({},e)):Object(G.jsx)(j.a,{to:"auth/login"})}}))},le=["autenticado","component"],de=function(e){var t=e.autenticado,a=e.component,n=Object(ie.a)(e,le);return Object(G.jsx)(j.b,Object(b.a)(Object(b.a)({},n),{},{component:function(e){return t?Object(G.jsx)(j.a,{to:"/"}):Object(G.jsx)(a,Object(b.a)({},e))}}))},je=function(){var e=Object(o.b)(),t=Object(c.useState)(!0),a=Object(l.a)(t,2),n=a[0],r=a[1],i=Object(c.useState)(!1),b=Object(l.a)(i,2),p=b[0],h=b[1];return Object(c.useEffect)((function(){f.a.auth().onAuthStateChanged(function(){var t=Object(u.a)(s.a.mark((function t(a){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(null===a||void 0===a?void 0:a.uid)?(e(V(a.uid,a.displayName)),h(!0),e(z(a.uid))):h(!1),r(!1);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[e,r,h]),n?Object(G.jsx)("h1",{children:"Espere"}):Object(G.jsx)(d.a,{children:Object(G.jsx)("div",{children:Object(G.jsxs)(j.d,{children:[Object(G.jsx)(ue,{exact:!0,path:"/",component:te,autenticado:p}),Object(G.jsx)(de,{path:"/auth",component:oe,autenticado:p}),Object(G.jsx)(j.a,{to:"/auth/login"})]})})})},be=a(29),pe=a(65),he=a(46),fe={notas:[],active:null},Oe=Object(be.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return{uid:t.payload.uid,displayName:t.payload.displayName};case g:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{error:null,loading:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(b.a)(Object(b.a)({},e),{},{error:t.payload});case N:return Object(b.a)(Object(b.a)({},e),{},{error:null});case w:return Object(b.a)(Object(b.a)({},e),{},{loading:!0});case C:return Object(b.a)(Object(b.a)({},e),{},{loading:!1});default:return e}},notas:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(b.a)(Object(b.a)({},e),{},{active:t.payload});case k:return Object(b.a)(Object(b.a)({},e),{},{notas:[t.payload].concat(Object(he.a)(e.notas))});case S:return Object(b.a)(Object(b.a)({},e),{},{notas:Object(he.a)(t.payload)});case E:return Object(b.a)(Object(b.a)({},e),{},{notas:e.notas.map((function(e){return e.id===t.payload.id?t.payload.nota:e}))});case A:return Object(b.a)(Object(b.a)({},e),{},{active:null,notas:e.notas.filter((function(e){return e.id!==t.payload}))});case P:return Object(b.a)(Object(b.a)({},e),{},{active:null,notas:{}});default:return e}}}),me="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||be.c,xe=Object(be.d)(Oe,me(Object(be.a)(pe.a))),ve=(a(169),function(){return Object(G.jsx)(o.a,{store:xe,children:Object(G.jsx)(je,{})})});r.a.render(Object(G.jsx)(ve,{}),document.querySelector("#root"))}},[[170,1,2]]]);
//# sourceMappingURL=main.3e7f679e.chunk.js.map