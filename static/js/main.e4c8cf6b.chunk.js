(this.webpackJsonpkasiunia=this.webpackJsonpkasiunia||[]).push([[0],{30:function(n,e,t){},38:function(n,e,t){},39:function(n,e,t){},40:function(n,e,t){"use strict";t.r(e);var a,i,c,o,r=t(0),s=t.n(r),d=t(16),u=t.n(d),j=(t(30),t(4)),l=t(14),b=t(3),p=t(5),x=t(25),m=t(10),O=t.p+"static/media/logo.bb4ac049.png",g=t(1),h=p.a.img(a||(a=Object(j.a)(["\n  width: 100px;\n  height: 70px;\n  animation-name: logo-animation;\n  animation-duration: 4s;\n  animation-iteration-count: infinite;\n  margin-left: 10px;\n"]))),f=p.a.nav(i||(i=Object(j.a)(["\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 100px;\n"]))),w=p.a.div(c||(c=Object(j.a)(["\n  font-weight: bold;\n  background-color: aquamarine;\n  border-radius: 15px;\n  padding: 10px;\n  font-size: 1.1rem;\n  \n  &.selected {\n    background-color: seagreen;\n  }\n"]))),v=function(){var n=Object(b.g)(),e=Object(m.c)((function(n){return n.quizUnlocked}));return Object(g.jsxs)(f,{children:[Object(g.jsx)(l.b,{to:"/",children:Object(g.jsx)(h,{src:O})}),e&&Object(g.jsx)(l.b,{to:"/quiz",children:Object(g.jsx)(w,{className:"/quiz"===n.pathname?"selected":"",children:"QUIZ"})})]})},y=t(15),k=p.a.div(o||(o=Object(j.a)(["\n  padding-top: 60px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: 2000px;\n  margin: auto;\n"]))),z=function(n){var e=n.answer,t=n.onCorrectAnswer,a=n.onlyNumbers,i=Object(r.useState)(""),c=Object(y.a)(i,2),o=c[0],s=c[1];return Object(g.jsx)("input",{value:o,onChange:function(n){return function(n){n.preventDefault();var i=n.target.value;!/^[0-9,.]*$/.test(i)&&a||(s(i),i.toLowerCase()===e.toLowerCase()&&t())}(n)}})};z.defaultProps={onlyNumbers:!1};var q,C,N=z,U=function(n){var e=n.question,t=n.answer,a=n.onCorrectAnswer,i=n.onlyNumbers;return Object(g.jsxs)(P,{children:[Object(g.jsx)(S,{children:e}),Object(g.jsx)(N,{onCorrectAnswer:a,answer:t,onlyNumbers:i})]})},P=p.a.div(q||(q=Object(j.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  padding: 20px;\n  background-color: white;\n  box-shadow: 1px 2px #dddddd;\n  margin: 30px;\n  border-radius: 2px;\n"]))),S=p.a.div(C||(C=Object(j.a)(["\n  display: block;\n  margin-right: 20px;\n"])));U.defaultProps={onlyNumbers:!1};var A,I,L,F,T,B=U,D=t.p+"static/media/stolat.cdfb6dd0.png",E=t.p+"static/media/kwiaty.e29b8332.jpeg",J=t.p+"static/media/kasiakasia.b4f888c2.png",Q=t.p+"static/media/ptasie-mleczko.7fe68c82.png",Z=t.p+"static/media/urodziny.f21c1faf.mp3",K="UNLOCK_QUIZ",M=(t(38),p.a.div(A||(A=Object(j.a)(["\n  position: absolute;\n  bottom: 33px;\n  left: 173px;\n  color: white;\n"])))),$=p.a.img(I||(I=Object(j.a)(["\n  width: 100%;\n  z-index: 2;\n  max-width: 1300px;\n"]))),_=p.a.img(L||(L=Object(j.a)(["\n  height: 1000px;\n  margin-top: -450px;\n  box-shadow: 1px 2px #dddddd;\n  margin-bottom: 30px;\n  border-radius: 2px;\n"]))),G=p.a.img(F||(F=Object(j.a)(["\n  width: 485px;\n  margin-top: -544px;\n  margin-left: 600px;\n"]))),H=p.a.img(T||(T=Object(j.a)(["\n  width: 400px;\n  margin-top: -390px;\n  margin-right: 600px;\n"]))),R=function(){var n=Object(m.b)(),e=Object(r.useState)(!1),t=Object(y.a)(e,2),a=t[0],i=t[1],c=Object(r.useState)(!1),o=Object(y.a)(c,2),s=o[0],d=o[1],u=function(n){var e=n?5e3:0;i(n),setTimeout((function(){d(n)}),e)};return Object(g.jsxs)(k,{children:[Object(g.jsx)("audio",{className:"audio-player",controls:!0,autoPlay:!0,loop:!0,onPlay:function(){return u(!0)},onPause:function(){return u(!1)},children:Object(g.jsx)("source",{src:Z})}),Object(g.jsxs)("div",{className:"landing-page".concat(a?"":" hidden"),children:[Object(g.jsx)($,{src:D,alt:"sto lat!"}),Object(g.jsx)(_,{src:E,alt:"kwaty"}),Object(g.jsx)(G,{src:J,alt:"u\u015bmiechni\u0119ta m\u0142oda dziewczyna"}),Object(g.jsx)(H,{src:Q,alt:"ptasie mleczko"})]}),Object(g.jsxs)("div",{className:s?"landing-page-below-fold":"display-none",children:[Object(g.jsx)(B,{question:"odblokuj quiz!: ",onCorrectAnswer:function(){return n((window.localStorage.setItem("quizUnlocked",!0),{type:K}))},answer:"3214789",onlyNumbers:!0}),Object(g.jsx)(M,{children:"tak jak telefon."})]})]})},V=function(){return Object(g.jsx)(k,{children:"No niestety, musisz usi\u0105\u015b\u0107 do kompa"})},W=function(){var n=Object(m.c)((function(n){return n.quizUnlocked})),e=Object(b.f)();return Object(r.useEffect)((function(){n||e.push("/")}),[]),Object(g.jsxs)("div",{children:["quiz",Object(g.jsx)(N,{onCorrectAnswer:function(){console.log("jaha")},answer:"pupa"}),Object(g.jsx)(N,{onCorrectAnswer:function(){console.log("123")},answer:"1234.4321",onlyNumbers:!0})]})},X={quizUnlocked:window.localStorage.getItem("quizUnlocked")||!1};function Y(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case K:return{quizUnlocked:!0};default:return n}}var nn,en;t(39);function tn(){var n=Object(x.a)(Y);return Object(g.jsx)(m.a,{store:n,children:Object(g.jsxs)(l.a,{basename:"",children:[Object(g.jsx)(v,{}),Object(g.jsx)(an,{children:Object(g.jsxs)(b.c,{children:[Object(g.jsx)(b.a,{path:"/quiz",children:Object(g.jsx)(W,{})}),Object(g.jsx)(b.a,{path:"/",children:Object(g.jsx)(R,{})})]})}),Object(g.jsx)(cn,{children:Object(g.jsx)(V,{})})]})})}var an=p.a.div(nn||(nn=Object(j.a)(["\n  @media (max-width: 1000px) {\n    display: none;\n  }\n"]))),cn=p.a.div(en||(en=Object(j.a)(["\n  @media (min-width: 1000px) {\n    display: none;\n  }\n"]))),on=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,41)).then((function(e){var t=e.getCLS,a=e.getFID,i=e.getFCP,c=e.getLCP,o=e.getTTFB;t(n),a(n),i(n),c(n),o(n)}))};u.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(tn,{})}),document.getElementById("root")),on()}},[[40,1,2]]]);
//# sourceMappingURL=main.e4c8cf6b.chunk.js.map