(this.webpackJsonpkasiunia=this.webpackJsonpkasiunia||[]).push([[0],{44:function(e,n,t){},52:function(e,n,t){},81:function(e,n,t){},82:function(e,n,t){"use strict";t.r(n);var a,i,r,o,c,s=t(0),d=t.n(s),l=t(15),u=t.n(l),b=(t(44),t(3)),p=t(18),j=t(6),m=t(2),f=t(38),x=t(5),g=t.p+"static/media/logo.bb4ac049.png",w=t(1),O=m.default.div(a||(a=Object(b.a)(["\n    display: flex;\n    justify-content: flex-end; \n"]))),h=m.default.img(i||(i=Object(b.a)(["\n  width: 100px;\n  height: 70px;\n  animation-name: logo-animation;\n  animation-duration: 4s;\n  animation-iteration-count: infinite;\n  margin-left: 10px;\n"]))),y=m.default.nav(r||(r=Object(b.a)(["\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 100px;\n  z-index: 10000;\n"]))),z=m.default.div(o||(o=Object(b.a)(["\n  font-weight: bold;\n  background-color: aquamarine;\n  border-radius: 15px;\n  padding: 10px;\n  font-size: 1.1rem;\n  margin-left: 30px;\n  \n  &.selected {\n    background-color: seagreen;\n  }\n"]))),B=function(){var e=Object(j.g)(),n=Object(x.c)((function(e){return e.gameUnlocked}));return Object(w.jsxs)(y,{children:[Object(w.jsx)(p.b,{to:"/",children:Object(w.jsx)(h,{src:g})}),Object(w.jsx)(O,{children:n&&Object(w.jsx)(p.b,{to:"/quiz",children:Object(w.jsx)(z,{className:"/quiz"===e.pathname?"selected":"",children:"QUIZ"})})})]})},k=t(7),J=m.default.div(c||(c=Object(b.a)(["\n  padding-top: 60px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: 2000px;\n  margin: auto;\n"]))),Y="UNLOCK_GAME",P="SET_SELECTED_TAB",v="SET_ANSWER",G="SET_QUIZ_STAGE",q="SET_ISBN_PART",S="TAB_A",C="TAB_B",A="TAB_C",I="TAB_D",T=function(e,n){return{type:v,payload:{questionId:e,answer:n}}},_=function(e,n){return window.localStorage.setItem("isbn-".concat(e),n),{type:q,payload:{tab:e,part:n}}},E=function(e){var n=e.answer,t=e.onCorrectAnswer,a=e.onlyNumbers,i=e.questionId,r=e.answers,o=Object(x.b)(),c=Object(x.c)((function(e){return e.quizAnswers[i]||""}));return Object(w.jsx)("input",{value:c,onChange:function(e){return function(e){e.preventDefault();var c=e.target.value;!/^[0-9,.]*$/.test(c)&&a||(o(T(i,c)),(n&&c.toLowerCase()===n.toLowerCase()||r.includes(c.toLowerCase()))&&t(c))}(e)},style:{width:"200px"}})};E.defaultProps={answer:"",onlyNumbers:!1,answers:[]};var N,L,D,F,Z=E,U=function(e){var n=e.question,t=e.answer,a=e.onCorrectAnswer,i=e.onlyNumbers,r=e.singular,o=e.correct,c=e.answers,s=e.image,d=e.InnerHtml,l="border: 1px solid black";return o&&(l="border: 2px solid green"),r&&(l="box-shadow: 1px 2px #dddddd"),Object(w.jsxs)(M,{borderStyle:l,children:[s&&Object(w.jsx)(H,{src:s,alt:n}),Object(w.jsxs)(Q,{children:[Object(w.jsxs)(R,{children:[n,d?Object(w.jsx)(d,{}):""]}),Object(w.jsx)(Z,{onCorrectAnswer:function(e){return a(e)},answer:t,answers:c,onlyNumbers:i,questionId:n})]})]})},H=m.default.img(N||(N=Object(b.a)(["\n  max-width: 50%;\n  margin-bottom: 30px;\n"]))),M=m.default.div(L||(L=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n  background-color: white;\n  margin: 30px;\n  border-radius: 2px;\n  ",";\n"])),(function(e){return e.borderStyle})),Q=m.default.div(D||(D=Object(b.a)(["\n  display: flex;\n  width: 100%;\n  flex-direction: row;\n  justify-content: space-between;\n"]))),R=m.default.div(F||(F=Object(b.a)(["\n  display: block;\n  margin-right: 20px;\n"])));U.defaultProps={answer:"",onlyNumbers:!1,singular:!1,correct:!1,answers:[],image:null,InnerHtml:null};var V,K,X,W,$,ee,ne,te,ae,ie,re,oe,ce,se,de,le,ue,be,pe,je,me,fe=U,xe=t.p+"static/media/stolat.cdfb6dd0.png",ge=t.p+"static/media/kwiaty.e29b8332.jpeg",we=t.p+"static/media/kasiakasia.b4f888c2.png",Oe=t.p+"static/media/ptasie-mleczko.7fe68c82.png",he=t.p+"static/media/31.a9d7e9f6.png",ye=t.p+"static/media/zozole.6c74286a.png",ze=t.p+"static/media/urodziny.2878405e.mp3",Be=(t(52),m.default.div(V||(V=Object(b.a)(["\n  background: cyan;\n  z-index: -2;\n  padding: 20px;\n  animation-name: colorchange;\n  animation-duration: 2s;\n  animation-iteration-count: infinite;\n"])))),ke=m.default.div(K||(K=Object(b.a)(["\n  position: relative;\n  max-height: 850px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),Je=m.default.img(X||(X=Object(b.a)(["\n  width: 100%;\n  z-index: 2;\n  max-width: 1300px;\n  margin-top: 50px;\n  animation-name: title-animation;\n  animation-duration: 4s;\n  animation-iteration-count: infinite;\n  position: absolute;\n  top: 0;\n"]))),Ye=m.default.img(W||(W=Object(b.a)(["\n  top: 200px;\n  margin-left: -500px;\n  width: 80px;\n  height: 80px;\n  position: absolute;\n  z-index: 2;\n  animation-name: crazy-2;\n  animation-duration: 9s;\n  animation-iteration-count: infinite;\n  animation-timing-function: cubic-bezier();\n"]))),Pe=m.default.img($||($=Object(b.a)(["\n  position: absolute;\n  top: 100px;\n  margin-left: 500px;\n  z-index: 2;\n  width: 80px;\n  height: 80px;\n  animation-name: crazy;\n  animation-duration: 9s;\n  animation-iteration-count: infinite;\n  animation-timing-function: cubic-bezier();\n"]))),ve=m.default.img(ee||(ee=Object(b.a)(["\n  position: absolute;\n  top: 100px;\n  margin-left: 500px;\n  z-index: 2;\n  width: 80px;\n  height: 80px;\n  animation-name: crazy-3;\n  animation-duration: 9s;\n  animation-iteration-count: infinite;\n  animation-timing-function: cubic-bezier();\n"]))),Ge=m.default.img(ne||(ne=Object(b.a)(["\n  top: 0;\n  height: 1000px;\n  margin-top: -80px;\n  box-shadow: 1px 2px #dddddd;\n  margin-bottom: 30px;\n  border-radius: 2px;\n  z-index: -2;\n"]))),qe=m.default.img(te||(te=Object(b.a)(["\n  width: 485px;\n  margin-top: -544px;\n  margin-left: 600px;\n  animation-name: spin;\n  animation-duration: 10000ms;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n"]))),Se=m.default.img(ae||(ae=Object(b.a)(["\n  position: absolute;\n  width: 400px;\n  top: 440px;\n  left: 60px;\n  animation-name: myOrbit;\n  animation-duration: 4000ms;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n"]))),Ce=m.default.img(ie||(ie=Object(b.a)(["\n  position: absolute;\n  transform: rotate(45deg);\n  height: 400px;\n  left: -300px;\n  top: 850px;\n  animation-name: zozole;\n  animation-duration: 8000ms;\n  animation-iteration-count: infinite;\n"]))),Ae=m.default.div(re||(re=Object(b.a)(["\n  position: absolute;\n  bottom: 0;\n  margin-left: 650px;\n  z-index: -1;\n  color: #78a2b0;\n"]))),Ie=function(){var e=Object(x.b)(),n=Object(s.useState)(!1),t=Object(k.a)(n,2),a=t[0],i=t[1],r=Object(s.useState)(!1),o=Object(k.a)(r,2),c=o[0],d=o[1],l=function(e){var n=e?5e3:0;i(e),setTimeout((function(){d(e)}),n)};return Object(w.jsxs)(J,{children:[Object(w.jsx)("audio",{className:"audio-player",controls:!0,autoPlay:!0,loop:!0,onPlay:function(){return l(!0)},onPause:function(){return l(!1)},children:Object(w.jsx)("source",{src:ze})}),Object(w.jsx)("div",{className:"landing-page".concat(a?"":" hidden"),children:Object(w.jsx)(Be,{children:Object(w.jsxs)(ke,{children:[Object(w.jsx)(Je,{src:xe,alt:"sto lat!"}),Object(w.jsx)(Ye,{src:he,alt:"31"}),Object(w.jsx)(Pe,{src:he,alt:"31"}),Object(w.jsx)(ve,{src:he,alt:"31"}),Object(w.jsx)(Ge,{src:ge,alt:"kwaty"}),Object(w.jsx)(qe,{src:we,alt:"u\u015bmiechni\u0119ta m\u0142oda dziewczyna"}),Object(w.jsx)(Se,{src:Oe,alt:"ptasie mleczko"}),Object(w.jsx)(Ce,{src:ye,alt:"zozole"}),Object(w.jsx)(Ae,{children:" kolimator "})]})})}),Object(w.jsx)("div",{className:c?"landing-page-below-fold":"display-none",children:Object(w.jsx)(fe,{question:"has\u0142o: ",onCorrectAnswer:function(){return e((window.localStorage.setItem("gameUnlocked",!0),{type:Y}))},answer:"kolimator",singular:!0})})]})},Te=t.p+"static/media/bukiet.64e7971b.png",_e=function(e){var n=e.children;return Object(w.jsx)("div",{className:"printable",children:n})},Ee=t.p+"static/media/clue.2dfd1e4f.png",Ne=m.default.img(oe||(oe=Object(b.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"]))),Le=m.default.div(ce||(ce=Object(b.a)(["\n  background-color: white;\n  position: absolute;\n  z-index: 100;\n  left: calc(50% - 20px);\n  margin-top: 50px;\n"]))),De=m.default.img(se||(se=Object(b.a)(["\n  width: 100%;\n"]))),Fe=m.default.h2(de||(de=Object(b.a)(['\n  font-family: "Lato", sans-serif;\n  text-align: center;\n  font-size: 20px;\n']))),Ze=m.default.p(le||(le=Object(b.a)(['\n  font-family: "Lato", sans-serif;\n  text-align: center;\n  font-size: 15px;\n']))),Ue=m.default.div(ue||(ue=Object(b.a)(["\n  background: white;\n  width: 80%;\n  position: absolute;\n  left: calc(10% + ","px);\n  z-index: 300;\n"])),(function(e){return e.left})),He=function(){var e=Object(s.useState)(0),n=Object(k.a)(e,2),t=n[0],a=n[1];return Object(w.jsxs)(J,{children:[Object(w.jsxs)(Ue,{onClick:function(){return a(t+1)},left:8*t,children:[Object(w.jsx)(Fe,{children:"WSZYSTKIEGO NAJLEPSZEGO KASIA!!"}),Object(w.jsx)(De,{src:Te,alt:"bukiet"}),Object(w.jsx)(Ze,{children:"Niestety do zabawy musisz u\u017cy\u0107 kompa."})]}),Object(w.jsx)(Le,{children:"Szyneczka"}),Object(w.jsx)(_e,{children:Object(w.jsx)(Ne,{src:Ee})})]})},Me=m.default.div(be||(be=Object(b.a)(["\n  max-width: 1200px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  margin: 60px;\n  width: 900px;\n  background-color: #fdfdfd;\n  box-shadow: 1px 2px #dddddd;\n"]))),Qe=m.default.ul(pe||(pe=Object(b.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: space-evenly;\n  margin: 0;\n  padding: 0;\n"]))),Re=m.default.li(je||(je=Object(b.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: space-around;\n  align-items: center;\n  height: 32px;\n  cursor: pointer;\n\n  &:last-child {\n    border-right: none;\n  }\n\n  &.disabled {\n    background-color: #eeeeee;\n    cursor: auto;\n    color: grey;\n  }\n\n  &.tab-0 {\n    background: #D7E114;\n  }\n\n  &.tab-1 {\n    background: #18B715;\n  }\n\n  &.tab-2 {\n    background: #5142ff;\n  }\n\n  &.tab-3 {\n    background: #DB1AD2;\n  }\n\n  &.selected {\n    height: 40px;\n  }\n"]))),Ve=function(e){var n=e.tabs,t=Object(x.c)((function(e){return e.selectedTab})),a=n.find((function(e){return e.id===t})).component,i=Object(x.b)();return Object(w.jsxs)(Me,{children:[Object(w.jsx)(Qe,{children:n.map((function(e,n){return Object(w.jsx)(Re,{className:"".concat(t===e.id?"selected":""," tab-").concat(n),onClick:function(){return i(function(e){return{type:P,payload:{tab:e}}}(e.id))},children:e.label},e.id)}))}),Object(w.jsx)(a,{})]})},Ke=function(e){var n=e.id,t=e.width,a=e.correct,i=e.onValueChange,r=e.maxSigns,o=e.initialValue,c=Object(s.useState)(o),d=Object(k.a)(c,2),l=d[0],u=d[1];return Object(w.jsx)(Xe,{correct:a,width:t,value:l,onChange:function(e){return function(e){var t=e.target.value;e.preventDefault(),t.length<=r&&(u(t),T(n,t),i(n,t.toLowerCase()))}(e)}})},Xe=m.default.input(me||(me=Object(b.a)(["\n  width: ",";\n  border: none;\n  border-bottom: 1px solid ",';\n  &:focus {\n    outline: none;\n  }\n  font-family: "Lato", sans-serif;\n  margin-left: 8px;\n'])),(function(e){return e.width}),(function(e){return e.correct?"green":"black"}));Ke.defaultProps={correct:!1,initialValue:""};var We,$e=Ke,en=function(e){var n=e.texts,t=e.blanks,a=e.correct,i=e.onAllCorrect,r=Object(x.b)(),o="border: 1px solid black";a&&(o="border: 2px solid green");var c=[],s=[];n.forEach((function(e,n){if(c.push({type:"text",text:e}),t[n]){var a=t[n]+n,i=Object(x.c)((r=a,function(e){return e.quizAnswers[r]}));c.push({type:"input",answer:t[n],id:a,value:i}),s.push({id:a,correctValue:t[n],correct:i&&t[n].toLowerCase()===i.toLowerCase()})}var r}));var d=function(e,n){r(T(e,n));var t=s.find((function(n){return n.id===e}));t.correct=t.correctValue.toLowerCase()===n.toLowerCase(),s.find((function(e){return!e.correct}))||i()};return Object(w.jsx)(nn,{borderStyle:o,children:c.map((function(e){var n;return"text"===e.type?Object(w.jsx)("span",{children:"".concat(e.text)}):Object(w.jsx)($e,{maxSigns:e.answer.length,width:"".concat(8*e.answer.length,"px"),id:e.id,onValueChange:d,correct:(null===(n=e.value)||void 0===n?void 0:n.toLowerCase())===e.answer.toLowerCase(),initialValue:e.value})}))})},nn=m.default.div(We||(We=Object(b.a)(["\n  display: block;\n  flex-direction: row;\n  align-items: center;\n  padding: 20px;\n  background-color: white;\n  margin: 30px;\n  border-radius: 2px;\n  ",";\n"])),(function(e){return e.borderStyle}));en.defaultProps={correct:!1};var tn,an,rn,on=en,cn=function(e){var n=e.question,t=e.answer,a=e.onCorrectAnswer,i=e.correct,r=e.audio,o="border: 1px solid black";return i&&(o="border: 2px solid green"),Object(w.jsxs)(ln,{borderStyle:o,children:[Object(w.jsx)(sn,{className:"audio-player",controls:!0,children:Object(w.jsx)("source",{src:r})}),Object(w.jsx)(dn,{children:n}),Object(w.jsx)(Z,{onCorrectAnswer:function(e){return a(e)},answer:t,questionId:n})]})},sn=m.default.audio(tn||(tn=Object(b.a)(["\n  margin: 0 20px 0 0;\n  padding: 0;\n"]))),dn=m.default.div(an||(an=Object(b.a)(["\n  display: block;\n  margin-right: 20px;\n"]))),ln=m.default.div(rn||(rn=Object(b.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n  background-color: white;\n  margin: 30px;\n  border-radius: 2px;\n  ",";\n"])),(function(e){return e.borderStyle}));cn.defaultProps={question:"",answer:"",correct:!1};var un,bn,pn,jn,mn=cn,fn=function(e){var n=e.question,t=e.answerConfig,a=e.correct,i=e.onCorrectAnswer,r="border: 1px solid black";a&&(r="border: 2px solid green");var o=function(e,n){var a=t.find((function(n){return n.label===e}));return void 0===a.answer||a.answer===n},c=Object(s.useState)(t.map((function(e){return{label:e.label,correct:o(e.label,!1)}}))),d=Object(k.a)(c,2),l=d[0],u=d[1];return Object(w.jsxs)(On,{borderStyle:r,children:[Object(w.jsx)(xn,{children:n}),Object(w.jsx)(gn,{children:t.map((function(e){return Object(w.jsxs)(wn,{children:[Object(w.jsx)("input",{id:e.label,type:"checkbox",onChange:function(n){return function(e,n){var t=e.target.checked,a=l.map((function(e){return e.label===n?{label:e.label,correct:o(n,t)}:e}));u(a),a.find((function(e){return!1===e.correct}))||i()}(n,e.label)}}),Object(w.jsx)("label",{htmlFor:e.label,children:e.label})]})}))})]})},xn=m.default.div(un||(un=Object(b.a)(["\n  display: block;\n  width: 100%;\n  margin-right: 20px;\n  text-align: center;\n"]))),gn=m.default.div(bn||(bn=Object(b.a)(["\n  display: flex;\n  margin: 20px;\n  width: 100%;\n  flex-direction: row;\n  flex-wrap: wrap;\n"]))),wn=m.default.div(pn||(pn=Object(b.a)(["\n  width: 45%;\n  margin: 10px;\n\n  label {\n    margin-left: 5px;\n  }\n"]))),On=m.default.div(jn||(jn=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n  background-color: white;\n  margin: 30px;\n  border-radius: 2px;\n  ",";\n"])),(function(e){return e.borderStyle}));fn.defaultProps={question:"",correct:!1};var hn,yn,zn,Bn=fn,kn=t(34),Jn=t.p+"static/media/ssm.5ff67149.png",Yn=function(e){var n=e.onCorrectAnswer,t="border: 1px solid black";return e.correct&&(t="border: 2px solid green"),Object(w.jsxs)(vn,{borderStyle:t,children:[Object(w.jsx)(Pn,{src:Jn}),Object(w.jsx)(Gn,{children:Object(w.jsx)(kn.SuperSlideMe,{levelConfig:{levelFilter:"demo"},onLastLevelReached:function(){return n()}})})]})},Pn=m.default.img(hn||(hn=Object(b.a)(["\n  max-width: 50%;\n  margin-bottom: 30px;\n"]))),vn=m.default.div(yn||(yn=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n  background-color: white;\n  margin: 30px;\n  border-radius: 2px;\n  ",";\n"])),(function(e){return e.borderStyle})),Gn=m.default.div(zn||(zn=Object(b.a)(["\n  display: flex;\n  width: 80%;\n  flex-direction: row;\n  justify-content: space-between;\n"])));Yn.defaultProps={correct:!1};var qn,Sn,Cn,An,In=Yn,Tn=t(37),_n=function(e){var n=e.question,t=e.correct,a=e.tags,i=e.onCorrectAnswer,r="border: 1px solid black";t&&(r="border: 2px solid green");var o=Object(s.useState)(a),c=Object(k.a)(o,2),d=c[0],l=c[1];return Object(w.jsxs)(Dn,{borderStyle:r,children:[Object(w.jsx)(Ln,{children:n}),Object(w.jsx)(En,{children:Object(w.jsx)(Tn.DraggableArea,{isList:!0,tags:d,render:function(e){var n=e.tag;return Object(w.jsx)(Nn,{className:"tag",children:n.content})},onChange:function(e){return function(e){var n;l(e),(n=e).slice(1).every((function(e,t){return e.order>n[t].order}))&&i()}(e)}})})]})},En=m.default.div(qn||(qn=Object(b.a)(["\n  margin: 16px;\n  border: 1px solid #E9E9E9;\n  border-radius: 4px;\n  width: 294px;\n  padding: 5px;\n"]))),Nn=m.default.div(Sn||(Sn=Object(b.a)(["\n  margin: 3px;\n  font-size: 13px;\n  border: 1px dashed #cccccc;\n  border-radius: 4px;\n  padding: 0 8px;\n  line-height: 30px;\n  color: #666666;\n  background: rgba(255, 255, 255, 0.7);\n"]))),Ln=m.default.div(Cn||(Cn=Object(b.a)(["\n  display: block;\n  width: 100%;\n  margin-right: 20px;\n  text-align: center;\n"]))),Dn=m.default.div(An||(An=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n  background-color: white;\n  margin: 30px;\n  border-radius: 2px;\n  ",";\n"])),(function(e){return e.borderStyle}));_n.defaultProps={question:"",correct:!1};var Fn,Zn,Un=_n,Hn=function(e){var n=e.question,t=e.answer,a=e.onCorrectAnswer,i="border: 1px solid black";return e.correct&&(i="border: 2px solid green"),Object(w.jsxs)(Qn,{borderStyle:i,children:[Object(w.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/iX9TmRZHZdQ",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),Object(w.jsx)(Mn,{children:n}),Object(w.jsx)(Z,{onCorrectAnswer:function(e){return a(e)},answer:t,questionId:n})]})},Mn=m.default.div(Fn||(Fn=Object(b.a)(["\n  display: block;\n  margin-right: 20px;\n"]))),Qn=m.default.div(Zn||(Zn=Object(b.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n  background-color: white;\n  margin: 30px;\n  border-radius: 2px;\n  ",";\n"])),(function(e){return e.borderStyle}));Hn.defaultProps={question:"",answer:"",correct:!1};var Rn,Vn,Kn,Xn,Wn,$n,et,nt,tt,at,it,rt,ot=Hn,ct=function(e){var n=e.quizId,t=e.questions,a=e.onQuizFinished,i=Object(x.b)(),r=Object(x.c)((function(e){return e.quizStages[n]})),o=function(e){r===e-1&&(i(function(e,n){return{type:G,payload:{tab:e,stage:n}}}(n,e)),r===t.length-1&&a())};return Object(w.jsx)("div",{children:t.map((function(e,n){return r<n?null:"fill"===e.type?Object(w.jsx)(on,{texts:e.texts,blanks:e.blanks,onAllCorrect:function(){return o(n+1)},correct:r>n}):"multiple"===e.type?Object(w.jsx)(Bn,{question:e.question,answerConfig:e.answerConfig,onCorrectAnswer:function(){return o(n+1)},correct:r>n}):"audio"===e.type?Object(w.jsx)(mn,{question:e.question,audio:e.audio,answer:e.answer,onCorrectAnswer:function(){return o(n+1)},correct:r>n}):"video"===e.type?Object(w.jsx)(ot,{question:e.question,video:e.video,answer:e.answer,onCorrectAnswer:function(){return o(n+1)},correct:r>n}):"organise"===e.type?Object(w.jsx)(Un,{question:e.question,correct:r>n,onCorrectAnswer:function(){return o(n+1)},tags:e.tags}):"superSlideMe"===e.type?Object(w.jsx)(In,{onCorrectAnswer:function(){return o(n+1)},correct:r>n}):Object(w.jsx)(fe,{question:e.question,onCorrectAnswer:function(){return o(n+1)},correct:r>n,answer:e.answer,answers:e.answers,image:e.image,InnerHtml:e.InnerHtml})}))})},st=t.p+"static/media/muzyczka.e8f3660c.mp3",dt=t.p+"static/media/miasto_1.3d204a15.jpeg",lt=t.p+"static/media/miasto_2.a6bf9c12.jpeg",ut=t.p+"static/media/miasto_3.3650174d.jpeg",bt=t.p+"static/media/miasto_4.4d55e11c.jpeg",pt=t.p+"static/media/miasto_5.baaebda7.jpeg",jt=t.p+"static/media/miasto_6.cc193346.webp",mt=m.default.h2(Rn||(Rn=Object(b.a)(["\n  text-align: center;\n  width: 50%;\n  margin-right: auto;\n  margin-left: auto;\n"]))),ft=m.default.div(Vn||(Vn=Object(b.a)(["\n  display: block;\n"]))),xt=function(){var e=[{question:"Co Fidelus wnios\u0142a na teren festiwalu?",answer:"Bu\u0142ki"},{question:"Bu\u0142ki?",answers:["Bu\u0142ki","tak"]},{type:"audio",question:"Pytanie muzyczne. Podaj tytu\u0142 tego utworu.",answer:"Wave",audio:st},{type:"multiple",question:"Kt\xf3re wojew\xf3dztwa zosta\u0142y podbite?",answerConfig:[{label:"dolno\u015bl\u0105skie"},{label:"kujawsko-pomorskie",answer:!0},{label:"lubelskie",answer:!0},{label:"lubuskie",answer:!1},{label:"\u0142\xf3dzkie",answer:!0},{label:"ma\u0142opolskie",answer:!0},{label:"mazowieckie",answer:!0},{label:"opolskie",answer:!1},{label:"podkarpackie",answer:!1},{label:"podlaskie",answer:!0},{label:"pomorskie",answer:!0},{label:"\u015bl\u0105skie",answer:!1},{label:"\u015bwi\u0119tokrzyskie",answer:!0},{label:"warmi\u0144sko-mazurskie",answer:!0},{label:"wielkopolskie",answer:!0},{label:"zachodniopomorskie",answer:!1}]},{question:'Zaczynamy zabaw\u0119 w: "Co to za miasto?"',answer:"Zamo\u015b\u0107",image:dt,id:"m2"},{question:"       ",answer:"Sztokholm",image:pt,id:"m1"},{question:"  ",answer:"Tykocin",image:lt,id:"m3"},{question:"Per\u0142a Unesco",answer:"Pruszk\xf3w",image:bt,id:"m4"},{question:"A tu dok\u0142adnie w tym miejscu Stachu mia\u0142 za\u0142amk\u0119, a Janek robi\u0142 siku.",answer:"Olsztyn",image:ut,id:"m5"},{question:"",answer:"Zatoka przyg\xf3d",image:jt,id:"m5"},{type:"organise",question:"Uszereguj od najstarszego",tags:[{id:1,content:"Janek",order:7,data:"2018-03-19"},{id:2,content:"Stachu",order:13,data:"2021-02-25"},{id:3,content:"Sara S.",order:2,data:"2010"},{id:4,content:"Zuzia",order:1,data:"2004"},{id:5,content:"Sara B.",order:6,data:"2017"},{id:6,content:"Laura",order:9,data:"2019-03-18"},{id:7,content:"Franek",order:21,data:"2022-01-15"},{id:8,content:"Alicja",order:11,data:"2020-10~26"},{id:9,content:"Julka",order:14,data:"2021-04-07"},{id:10,content:"Kazik",order:12,data:"2021-01"},{id:11,content:"Tadzik",order:19,data:"2021-12-21"},{id:12,content:"Mania",order:18,data:"2021-12-21 + 1 mania starsza o minute"},{id:13,content:"Feliks",order:22,data:"2022-07-probably"},{id:14,content:"Kosma",order:8,data:"2018-09?"},{id:15,content:"Jerzyk",order:16,data:"2021-08~13"},{id:16,content:"Tymek",order:17,data:"2021-08-23"},{id:17,content:"Stanis\u0142aw Cz.",order:3,data:"2013-09"},{id:18,content:"Tosia Cz.",order:4,data:"2014-09"},{id:21,content:"Cezary",order:10,data:"2020-07-21"},{id:22,content:"Juliusz",order:20,data:"2022-03-09"}]}],n=Object(x.b)();return Object(w.jsxs)(ft,{children:[Object(w.jsx)(mt,{children:"R\xf3\u017cne takie pytania"}),Object(w.jsx)(ct,{quizId:S,questions:e,onQuizFinished:function(){return n(_(S,"978"))}})]})},gt=t.p+"static/media/domek.376fa568.png",wt=t.p+"static/media/zwierz.14cc82c3.jpeg",Ot=t.p+"static/media/dumel.d5f8cc44.m4a",ht=t.p+"static/media/kiera.dac2c07a.m4a",yt=t.p+"static/media/slima.0dc24d36.m4a",zt=t.p+"static/media/al.c10d9e46.png",Bt=t.p+"static/media/pan.fa2b230b.png",kt=m.default.h2(Kn||(Kn=Object(b.a)(["\n  text-align: center;\n  width: 50%;\n  margin-right: auto;\n  margin-left: auto;\n"]))),Jt=m.default.div(Xn||(Xn=Object(b.a)(["\n  display: block;\n"]))),Yt=function(){var e=[{type:"fill",texts:[""," "," Myszka Miki!"],blanks:["Hocki","Klocki"]},{question:"Podaj tytu\u0142 jednej z najs\u0142ynniejszych radzieckich powie\u015bci nautycznych przenosz\u0105cej odyseuszowski mit w \u015bwiat antropomorficznego ptactwa.",answer:"Dok\u0105d idziesz kaczuszko?"},{question:"Czy \u017cyrafa dla zabawy mo\u017ce ugry\u017a\u0107 k\u0119pk\u0119 trawy?",answers:["jasne ale oczywi\u015bcie woli gry\u017a\u0107 na drzewach li\u015bcie","jasne, ale oczywi\u015bcie woli gry\u017a\u0107 na drzewach li\u015bcie"]},{question:"Teraz zajrzyj do lod\xf3wki.",answer:"Psi Patrol"},{answer:"babce",number:!0,image:gt},{answer:"faciowi",question:" ",InnerHtml:function(){return Object(w.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/iX9TmRZHZdQ",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}},{answer:"co ty na to?",number:!0,image:zt,question:"       "},{answer:"leniuchowiec dwupalczasty",question:"  ",image:wt},{answers:["czy znasz g\xf3ry jura?","zzy znasz g\xf3ry jura","g\xf3ry jura"],image:Bt,question:"                     "},{type:"audio",question:"      ",answer:"Blue",audio:ht},{type:"audio",question:"     ",answer:"Bing!",audio:Ot},{type:"audio",question:"        ",answer:"By\u0142o sobie \u017cycie",audio:yt}],n=Object(x.b)();return Object(w.jsxs)(Jt,{children:[Object(w.jsx)(kt,{children:"Zabawy i Zabawki"}),Object(w.jsx)(ct,{quizId:C,questions:e,onQuizFinished:function(){return n(_(C,"83"))}})]})},Pt=t(39),vt=t.p+"static/media/print.ed0b8cb0.png",Gt=t.p+"static/media/phone.89680012.webp",qt=m.default.h2(Wn||(Wn=Object(b.a)(["\n  text-align: center;\n  width: 50%;\n  margin-right: auto;\n  margin-left: auto;\n"]))),St=m.default.div($n||($n=Object(b.a)(["\n  display: block;\n"]))),Ct=function(){var e=Object(x.b)(),n=[{question:" ",image:vt,answer:"kabanos"},{question:"   ",image:Gt,answer:"szyneczka"},{question:"Co to za owoc morza?",answer:"ma\u0142\u017c",InnerHtml:function(){return Object(w.jsx)(Pt.a,{defaultSize:{width:500,height:800},style:{overflowWrap:"anywhere",fontFamily:'"Consolas", monospace',fontSize:"10px",wordBreak:"break-all",backgroundColor:"#f2f2f2",borderRight:"2px solid blue"},children:"~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^::^^^^^:::^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^~!!~^!?JJJJJ?7!^:::^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^:7GGP5PB####BBBBGPY?~^::^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^5##&&&########BBBBBBPJ~:^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^?GGB#####B##BBBBGGGGPGGPJ~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^~GB55PGGBB###BBGGGPPGBBGPG5!^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^5BYJJ??JY55GG555Y55PBBBGPPP5~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^?5???777?J??JJ??!!7?YPPYY55Y7^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^!~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^!J???7!!!!!!!!!!^:^~!?JYYJJJ!^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^!!!~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^~JYJ7!~~~~~!!!~^::::^!?JYYY?^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^!!!!~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^?JJJ?7!^^~7??7~^::::^7JYJ?!^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^!!!!!!~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^7YJPG57^:~?JJ?~~^::::?J^::~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^!!!!!!!~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^?JJ55J~:::~!!~^^:::::?7:~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^!!!!!!!!~~~~~~~~~~~~~^^^^^^^^^^^^^^^~?JYY?!^^^:^~~^^:::::~J~:^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^!!!!!!!!~~~~~~~~~~~~~^^^^^^^^^^^^^^^^7?JJJ7^~~^^~^^::::^!?J^::^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^!!!!!!!!~~~~~~~~~~~~~^^^^^^^^^^^^^^^^J??J5J??7~~~~:::^~!!??^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^!!!!!!!!!~~~~~~~~~~~~^^^^^^^^^^^^^^^^YYY5Y??7!~~!!^~7777?J?^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^!!!!!!!!!!~~~~~~~~~~~^^^^^^^^^^^^^^^^~GYJ???!^:::!77YJYYY?~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^!!!!!!!!!!~~~~~~~~~~~~^^^^^^^^^^^^^^^^7G5???!^^^!Y5?Y5PJ7^:^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^!!!!!!!!!!~~~~~~~~~~~~^^^^^^^^^^^^^^^^:?#PYYYJJY5PP5J?~::::^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^!!!!!!!!!!~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^75G#BBBBG5?!^::::::^^:^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^!!!!!!!!!!!~~~~~~~~~~~^^^^^^^^^^^^^^^::^^!?YYYJ7!^^^::::::::^~^::^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^!!!!!!!!!!!~~~~~~~~~~~~^^^^^^^^^^^^~7?YGB5777!~^^^^^^:::::::JBGY!^:::^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^!!!!!!!!!!!~~~~~~~~~~~~^^^^^~!?J5PG#&&&@B?777!~^^^^^^:::.:!P&##&#PY7~^:::^^^^^^^^^^^^^^^^^^^^^^^^^^^!!!!!!!!!!!!~~~~~~~~~^^~!?PB#&&&&&&&&&&#GY77!!~^^^^^::::~Y#&####&&&#BGY!^:::^^^^^^^^^^^^^^^^^^^^^^^^!!!!!!!!!!!!~~~~~~~~^~YG#&&&&&&&&&&&&&&#YJJ7!!~~~^^^^^75#&&#&##&&&###&&#G5?!^:^^^^^^^^^^^^^^^^^^^^^^7!!!!!!!!!!!~~~~~~~~JB&&&&&&&&&&&&&&&&&&J777!!!~~~~!?P&&&&#&&&&&&##&&###&&&#5!:^^^^^^^^^^^^^^^^^^^^^7!!!!!!!!!!!!~~~~~!P&&&&&&&&&&&&&&&&&&&&G777????JYPB&&&&&#&&&&&&#&&#&&&&&####B?^^^^^^^^^^^^^^^^^^^^^77!!!!!!!!!!!~~~~?#&&&&&&&&&&&&&&&&&&&&&&BGBB###&&&&&#&&##&&&&&##&&&&&&########5^^^^^^^^^^^^^^^^^^^^77!!!!!!!!!!!~~~!#&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&#&&&#&&&&&&#&&&&&##########B!:^^^^^^^^^^^^^^^^^^77!!!!!!!!!!!~~~Y&&&&&&&#&&##&&&&&&&&#&&&&&&&&&&&&&#&&&#&&&&&&#&&&&&&#########B#J:^^^^^^^^^^^^^^^^^^77!!!!!!!!!!!!~7#&&&&&&&##########&&##&&&&&&&&&&&&#&&&#&&&&&&#&&&&&&#########BBBY:^^^^^^^^^^^^^^^^^^77!!!!!!!!!!!~!G&&&&&&&#BBBBBBBBBB#&B#&&##&&##&&####&#######&&&&&&&#########BBBBY:^^^^^^^^^^^^^^^^^^777!!!!!!!!!!~JPGB#&&&@&BGBGGGGGGG##GB##B######BBBBB#BBBBBB#&&&&&&&&########BBBBG^^^^^^^^^^^^^^^^^^^777!!!!!!!!!!!!!~~!7?5##PGPPPPPPPPBBPG#BBBBBBBGGGGGGGPGGGBBB&&&&&&&#########B#BBB!:^^^^^^^^^^^^^^^^^7777!!!!!!!!!!7!!~~~~7P#PP5555YY55BGYGBGGGGGPPPPP55P555PPGGB@&&&&&&&&&#######BBBB7:^^^^^^^^^^^^^^^^^7777!!!!!!!!!7!!~~~~!JBB55YYYJYYJYBPJPGPPPPP5555YYYYYYYY5PP#@&#BGPP55555PPGGBBBBBY:^^^^^^^^^^^^^^^^^7777!!!!!!!!77!!~~~~!5#GYYJJJJJJ?YBYJ5PPPPP5YYYYJJJJJJJJY5P&BJ?!~^::.......:^!G&&B!^^^^^^^^^^^^^^^^^777!!!!!!!!777!!~~~~!J#BJY?7J?J?7JGJ?Y5555YYYYJJJ??????JY5G#J7!!~^::..........G@@#7:^^^^^^^^^^^^^^^^777!!!!!!!777!!!~~^^~?BGJJ7!??J?7YG?7?YYYYJJJJJ???7????JYPBG777!~^::.........:55?~^^^^^^^^^^^^^^^^^^77!!!!!!!7777!!~~~^^~?P!PY?~7??7!JP7!7JJJJ?????77777??J5PG#57J7!~^::.........:^::^^^^^^^^^^^^^^^^^^^77!!!!!!7777!!!~~^^^~J!~BBY!~JJ?!?P7~!?J?77?77?77777?Y5GGG5J??~!~^::.........^^^^^^^^^^^^^^^^^^^^^^^77!!!!!7?777!!~~~~~!YP55PGGP?YPY~7P?~!?J?!7?!!7!777?YPBBPJ77?7!~^::.........:^^^^^^^^^^^^^^^^^^^^^^^7!!!!!!777777!!!77JPPYY5PB#BGPGP7?PY~!JY?!??!7?77?J5GB#P???7?!~~^::........:^^^^^^^^^^^^^^^^^^^^^^^^!!!!!!!7????777?J5BBYJPP5555YY5YYY5577YJ77J?7JJ?J5PB##P?7!777!~^::........:^^^^^^^^^^^^^^^^^^^^^^^^^7!!!!!7777777????YGB5YPPP55YJYYYYYYYYYYYJJYJ?YYYPGB##GYJ???!7!^^:........::^^^^^^^^^^^^^^^^^^^^^^^^^"})}},{InnerHtml:function(){return Object(w.jsxs)("span",{children:["Dobrze Ci Kasia idzie. My\u015bl\u0119 \u017ce pora odpocz\u0105\u0107 przy dobrych",Object(w.jsx)("a",{href:"https://yatne.github.io/przychodzibabadolekarza?kasia",rel:"noreferrer",style:{color:"blue"},target:"_blank",children:" \u017cartach"})]})},answer:"pasztetowa"},{type:"superSlideMe"}];return Object(w.jsxs)(St,{children:[Object(w.jsx)(qt,{children:"Specjalista IT."}),Object(w.jsx)(ct,{quizId:A,questions:n,onQuizFinished:function(){return e(_(A,"7318"))}})]})},At=m.default.h2(et||(et=Object(b.a)(["\n  text-align: center;\n  width: 50%;\n  margin-right: auto;\n  margin-left: auto;\n"]))),It=m.default.div(nt||(nt=Object(b.a)(["\n  display: block;\n"]))),Tt=function(){var e=Object(x.b)();return Object(w.jsxs)(It,{children:[Object(w.jsx)(At,{children:"Test z wiedzy og\xf3lnej oraz popkultury"}),Object(w.jsx)(ct,{quizId:I,questions:[{question:"W laboratorium wielkiego elektronika, w miejscu do kt\xf3rego zapuszczaj\u0105 si\u0119 tylko nieliczni, nad szufladami EITI, znajd\u017a drewniany tw\xf3r, kt\xf3ry niegdy\u015b skrywa\u0142 w sobie dzieci\u0119ce puzzle.",answer:"pumpernikiel"},{question:"By pumpernikla pokona\u0107 musisz zajrze\u0107 do skrzyni na kt\xf3rej noc\u0105 przebywasz. Je\u015bli ruch si\u0119 nie powiedzie, pr\xf3buj ponownie i obserwuj zmiany.",answer:"jabadabadu"},{question:"Odpowied\u017a co zrobi\u0107 masz znajdziesz tam gdzie ubrania s\u0105 bez plam.",answer:"jaksydraksy"},{question:"Sprawd\u017a miejsce gdzie mo\u017cesz zaczerpn\u0105\u0107 \u015bwierzego, miejskiego powietrza. Gdy rozwi\u0105\u017cesz podpowied\u017a, musisz uzbroi\u0107 si\u0119 w cierpliwo\u015b\u0107. Z\u0142o\u017cone maszyny wymagaj\u0105 czasu.",answer:"olejupa"},{question:"Gdy stary do dom wraca, w zamku nim obraca.",answer:"koniec"}],onQuizFinished:function(){return e(_(I,"836"))}})]})},_t=m.default.div(tt||(tt=Object(b.a)(["\n  min-width: 44px;\n  height: 24px;\n  text-align: center;\n  margin: 0 5px;\n\n  &.tab-a {\n    border: 2px solid #D7E114;\n  }\n\n  &.tab-b {\n    border: 2px solid #18B715;\n  }\n\n  &.tab-c {\n    border: 2px solid #5142ff;\n  }\n\n  &.tab-d {\n    border: 2px solid #DB1AD2;\n  }\n\n  &.no-tab {\n    border: 2px solid black;\n  }\n"]))),Et=m.default.div(at||(at=Object(b.a)(["\n  max-width: 1200px;\n  display: flex;\n  flex-direction: row;\n  padding: 20px 0;\n  justify-content: center;\n  margin: 0 60px;\n  width: 900px;\n  background-color: #fdfdfd;\n  box-shadow: 1px 2px #dddddd;\n"]))),Nt=function(){var e=Object(x.c)((function(e){return e.isbn}));return Object(w.jsxs)(Et,{children:[Object(w.jsx)(_t,{className:"tab-a",children:e.TAB_A}),"-",Object(w.jsx)(_t,{className:"tab-b",children:e.TAB_B}),"-",Object(w.jsx)(_t,{className:"tab-c",children:e.TAB_C}),"-",Object(w.jsx)(_t,{className:"tab-d",children:e.TAB_D}),"-",Object(w.jsx)(_t,{className:"no-tab",children:"5"})]})},Lt=function(){var e=Object(x.c)((function(e){return e.gameUnlocked})),n=Object(j.f)();Object(s.useEffect)((function(){e||n.push("/")}),[]);var t=[{label:"Pytania i skojarzenia",component:xt,id:S},{label:"Zabawy i zabawki",component:Yt,id:C},{label:"Specjalista It",component:Ct,id:A},{label:"Antoniego szkatu\u0142ka Arduino",component:Tt,id:I}];return Object(w.jsxs)(J,{children:[Object(w.jsx)(Ve,{tabs:t}),Object(w.jsx)(Nt,{})]})},Dt=t(9),Ft=t(10),Zt={gameUnlocked:window.localStorage.getItem("gameUnlocked")||!1,secondPartUnlocked:window.localStorage.getItem("secondPartUnlocked")||!1,selectedTab:S,quizStages:(it={},Object(Ft.a)(it,S,0),Object(Ft.a)(it,C,0),Object(Ft.a)(it,A,0),Object(Ft.a)(it,I,0),it),quizAnswers:{},isbn:(rt={},Object(Ft.a)(rt,S,window.localStorage.getItem("isbn-".concat(S))||""),Object(Ft.a)(rt,C,window.localStorage.getItem("isbn-".concat(C))||""),Object(Ft.a)(rt,A,window.localStorage.getItem("isbn-".concat(A))||""),Object(Ft.a)(rt,I,window.localStorage.getItem("isbn-".concat(I))||""),rt)};function Ut(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Zt,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case Y:return Object(Dt.a)(Object(Dt.a)({},e),{},{gameUnlocked:!0});case P:return Object(Dt.a)(Object(Dt.a)({},e),{},{selectedTab:n.payload.tab});case v:return Object(Dt.a)(Object(Dt.a)({},e),{},{quizAnswers:Object(Dt.a)(Object(Dt.a)({},e.quizAnswers),{},Object(Ft.a)({},n.payload.questionId,n.payload.answer))});case G:return Object(Dt.a)(Object(Dt.a)({},e),{},{quizStages:Object(Dt.a)(Object(Dt.a)({},e.quizStages),{},Object(Ft.a)({},n.payload.tab,n.payload.stage))});case q:return Object(Dt.a)(Object(Dt.a)({},e),{},{isbn:Object(Dt.a)(Object(Dt.a)({},e.isbn),{},Object(Ft.a)({},n.payload.tab,n.payload.part))});default:return e}}var Ht,Mt;t(81);function Qt(){var e=Object(f.a)(Ut,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());return Object(w.jsx)(x.a,{store:e,children:Object(w.jsxs)(p.a,{basename:"",children:[Object(w.jsx)(B,{}),Object(w.jsx)(Rt,{children:Object(w.jsxs)(j.c,{children:[Object(w.jsx)(j.a,{path:"/quiz",children:Object(w.jsx)(Lt,{})}),Object(w.jsx)(j.a,{path:"/",children:Object(w.jsx)(Ie,{})})]})}),Object(w.jsx)(Vt,{children:Object(w.jsx)(He,{})})]})})}var Rt=m.default.div(Ht||(Ht=Object(b.a)(["\n  @media (max-width: 1000px) {\n    display: none;\n  }\n"]))),Vt=m.default.div(Mt||(Mt=Object(b.a)(["\n  @media (min-width: 1000px) {\n    display: none;\n  }\n"]))),Kt=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,83)).then((function(n){var t=n.getCLS,a=n.getFID,i=n.getFCP,r=n.getLCP,o=n.getTTFB;t(e),a(e),i(e),r(e),o(e)}))};u.a.render(Object(w.jsx)(d.a.StrictMode,{children:Object(w.jsx)(Qt,{})}),document.getElementById("root")),Kt()}},[[82,1,2]]]);
//# sourceMappingURL=main.75d54581.chunk.js.map