(window.webpackJsonp=window.webpackJsonp||[]).push([[10,2,3,4,5,6,7,8,9],{303:function(e,t,r){var content=r(311);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(68).default)("446f7e24",content,!0,{sourceMap:!1})},304:function(e,t,r){e.exports=r.p+"img/default.84dfaca.webp"},305:function(e,t,r){"use strict";r.r(t),r.d(t,"Script",(function(){return n}));var n={props:{title:{type:String},dateTitle:{type:Date},remainTime:{type:String,default:null},stepValue:{type:String,default:""},statusColor:{type:String,default:"default"},statusSize:{type:String,default:"is-small"},statusIcon:{type:String,default:"checkbox-blank-circle"},statusIconColor:{type:String,default:"is-white"},hideProgressLine:{type:Boolean,default:!1}}}},306:function(e,t,r){"use strict";r.r(t);r(39);var n={name:"Logo",props:{images:{type:Array,default:function(){return[]}},name:{type:String,default:"Logo"},title:{type:String,default:""},titleColor:{type:String,default:""},barColor:{type:String,default:""},background:{type:String,default:"#120e0d"}},data:function(){return{width:500,height:500,paddingX:50,gap:10}},computed:{imageWidth:function(){var e=Math.floor((this.width-(this.images.length*this.gap+2*this.paddingX))/this.images.length);return e>this.width/2?this.width/2:e}},methods:{positionImage:function(e){return this.images.length<2?this.width/4:0===e?this.paddingX:this.paddingX+(this.gap+this.imageWidth)*e}}},o=r(46),component=Object(o.a)(n,(function(){var e=this,t=e._self._c;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.0",width:"500",height:"500",preserveAspectRatio:"xMidYMid meet"}},[t("g",[t("title",[e._v(e._s(e.name))]),e._v(" "),t("rect",{attrs:{fill:e.background,width:"500",height:"500"}}),e._v(" "),e._l(e.images,(function(image,r){return t("image",{key:"logo_".concat(r),attrs:{x:e.positionImage(r),y:"".concat(5*(e.images.length>1?10:1)),width:e.imageWidth,height:e.imageWidth,"xlink:href":image}})})),e._v(" "),t("rect",{attrs:{x:"40",y:"260",width:"420",height:"4",fill:e.barColor}}),e._v(" "),t("text",{staticStyle:{"text-anchor":"middle"},attrs:{x:"50%",y:"310","font-size":"3rem",fill:e.titleColor,"font-family":"Aboreto"}},[e._v("\n      "+e._s(e.title)+"\n    ")]),e._v(" "),t("rect",{attrs:{x:"40",y:"325",width:"420",height:"4",fill:e.barColor}})],2)])}),[],!1,null,null,null);t.default=component.exports},307:function(e,t,r){var content=r(314);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(68).default)("e7687062",content,!0,{sourceMap:!1})},308:function(e,t,r){var content=r(319);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(68).default)("d1c8bdc4",content,!0,{sourceMap:!1})},309:function(e,t,r){var content=r(328);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(68).default)("0524760b",content,!0,{sourceMap:!1})},310:function(e,t,r){"use strict";r(303)},311:function(e,t,r){var n=r(67)(!1);n.push([e.i,".timeline[data-v-7ce7e144]{display:flex;flex-flow:row;grid-gap:10px;gap:10px}@media screen and (max-width:768px){.timeline[data-v-7ce7e144]{grid-gap:0;gap:0}}.timeline-tag[data-v-7ce7e144]{display:flex;flex-flow:column;align-items:center}.timeline-tag .timeline-badge[data-v-7ce7e144]{background-color:#fcfcfc;color:#000;border-radius:50%;font-weight:500;height:23px;width:23px;text-align:center;z-index:10;display:flex;align-items:center;justify-content:center}.timeline-tag .timeline-badge.large[data-v-7ce7e144]{height:30px;width:30px}.timeline-tag .timeline-badge.primary[data-v-7ce7e144]{color:#000!important;background-color:#000!important;border:2px solid #000!important}.timeline-tag .timeline-badge.success[data-v-7ce7e144]{color:#f595c0!important;background-color:#f595c0!important;border:2px solid #f595c0!important}.timeline-tag .timeline-badge.warning[data-v-7ce7e144]{color:#fff!important;background-color:#ffe08a!important;border:2px solid #ffe08a!important}.timeline-tag .timeline-badge.danger[data-v-7ce7e144]{color:#fff!important;background-color:#f14668!important;border:2px solid #f14668!important}.timeline-tag .timeline-badge.info[data-v-7ce7e144]{color:#fff!important;background-color:#3e8ed0!important;border:2px solid #3e8ed0!important}.timeline-tag .progress-line[data-v-7ce7e144]{width:3px;display:flex;flex:1}.timeline-panel[data-v-7ce7e144]{display:flex;flex-flow:column;flex:1;padding:0 20px 20px 30px;max-width:90vw}@media screen and (max-width:768px){.timeline-panel[data-v-7ce7e144]{padding:0}}.timeline-heading[data-v-7ce7e144]{display:flex;flex-direction:row;align-items:center}.timeline-title[data-v-7ce7e144]{font-weight:600;margin-top:4px;color:inherit}@media screen and (max-width:768px){.timeline-title[data-v-7ce7e144]{padding-left:10px}}.timeline-body[data-v-7ce7e144]{padding:10px 0}",""]),e.exports=n},312:function(e,t,r){"use strict";r.r(t);r(108),r(48),r(30),r(47),r(18),r(81),r(40),r(82);var n=r(31);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var l=function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({name:"TimelineItem"},r(305).Script),c=l,d=(r(310),r(46)),component=Object(d.a)(c,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"timeline"},[t("div",{staticClass:"timeline-tag"},[t("div",{class:"timeline-badge ".concat(e.statusSize," ").concat("default"!==e.statusColor?e.statusColor:"")},[""!==e.stepValue&&"default"===e.statusColor?t("span",[e._v(e._s(e.stepValue))]):t("b-icon",{attrs:{type:e.statusIconColor,icon:e.statusIcon,size:"large"===e.statusSize?"":e.statusSize}})],1),e._v(" "),e.hideProgressLine?e._e():t("div",{staticClass:"progress-line",class:e.statusColor})]),e._v(" "),t("div",{staticClass:"timeline-panel"},[t("div",{staticClass:"timeline-heading"},[e._t("title"),e._v(" "),e.title?t("h4",{staticClass:"timeline-title is-size-5"},[e._v(e._s(e.title))]):e._e()],2),e._v(" "),t("div",{staticClass:"timeline-body"},[e._t("default")],2)])])}),[],!1,null,"7ce7e144",null);t.default=component.exports},313:function(e,t,r){"use strict";r(307)},314:function(e,t,r){var n=r(67)(!1);n.push([e.i,"img[data-v-199380f9]{width:300px}",""]),e.exports=n},315:function(e,t,r){r(316)},316:function(e,t,r){"use strict";var n=r(2),o=r(8),l=r(3),c=r(24),d=r(6),f=r(41),m=r(135),h=r(13),v=r(49),x=r(136),_=r(204),y=r(7),w=r(19),j=y("replace"),O=TypeError,C=l("".indexOf),L=l("".replace),S=l("".slice),k=Math.max,z=function(e,t,r){return r>e.length?-1:""===t?r:C(e,t,r)};n({target:"String",proto:!0},{replaceAll:function(e,t){var r,n,l,y,M,A,P,I,E,R=c(this),D=0,T=0,V="";if(!f(e)){if((r=m(e))&&(n=h(c(x(e))),!~C(n,"g")))throw O("`.replaceAll` does not allow non-global regexes");if(l=v(e,j))return o(l,e,R,t);if(w&&r)return L(h(R),e,t)}for(y=h(R),M=h(e),(A=d(t))||(t=h(t)),P=M.length,I=k(1,P),D=z(y,M,0);-1!==D;)E=A?h(t(M,D,y)):_(M,y,D,[],void 0,t),V+=S(y,T,D)+E,T=D+P,D=z(y,M,D+I);return T<y.length&&(V+=S(y,T)),V}})},317:function(e,t,r){e.exports=r.p+"img/logoVue.ac7dc62.png"},318:function(e,t,r){"use strict";r(308)},319:function(e,t,r){var n=r(67)(!1);n.push([e.i,"section[data-v-62b3b65a]{grid-gap:1rem;gap:1rem}nav.card[data-v-62b3b65a]{max-height:200px}.logo[data-v-62b3b65a]{zoom:.4}nav[data-v-62b3b65a]:hover{transform:scale(1.1)}",""]),e.exports=n},320:function(e,t,r){e.exports=r.p+"img/css.b1ea069.png"},321:function(e,t,r){e.exports=r.p+"img/github.c9f36e3.png"},322:function(e,t,r){e.exports=r.p+"img/html.47f7fff.png"},323:function(e,t,r){e.exports=r.p+"img/javascript.2b08960.png"},324:function(e,t,r){e.exports=r.p+"img/mysql.bfce1c3.png"},325:function(e,t,r){e.exports=r.p+"img/react.f3e6489.png"},326:function(e,t,r){e.exports=r.p+"img/vuejs.1fbf3e2.png"},327:function(e,t,r){"use strict";r(309)},328:function(e,t,r){var n=r(67)(!1);n.push([e.i,"aside[data-v-a6df89ee]{padding:30px}",""]),e.exports=n},329:function(e,t,r){"use strict";r.r(t);var n=[function(){var e=this,t=e._self._c;return t("article",[t("h1",{staticClass:"is-size-1 is-flex is-justify-content-center has-text-primary"},[e._v("Bem Vindo(a)!")]),e._v(" "),t("section",{staticClass:"is-flex pl-4"},[t("img",{attrs:{src:r(304),alt:"Mulher negra"}}),e._v(" "),t("h2",{staticClass:"is-size-1 is-flex is-justify-content-center"},[e._v("RUTE ÁVILA")])])])}],o={name:"About"},l=(r(313),r(46)),component=Object(l.a)(o,(function(){this._self._c;return this._m(0)}),n,!1,null,"199380f9",null);t.default=component.exports},330:function(e,t,r){"use strict";r.r(t);r(30),r(50),r(108),r(25),r(69),r(315),r(39),r(48),r(47),r(18),r(81),r(40),r(82);var n=r(10),o=r(31),l=(r(51),r(45)),c=r(306);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={name:"Repositories",data:function(){return{isLoad:!1}},computed:f({},Object(l.d)({repoList:"getRepoList"})),methods:f(f({},Object(l.c)({listRequest:"repoListRequestAction"})),{},{loadRepoList:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoad=!0,t.next=3,e.listRequest();case 3:e.isLoad=!1;case 4:case"end":return t.stop()}}),t)})))()},defaultLogo:function(e,t){e.target.src=r(304),t.status="error"}}),beforeMount:function(){this.loadRepoList()},components:{Logo:c.default}},h=(r(318),r(46)),component=Object(h.a)(m,(function(){var e=this,t=e._self._c;return t("aside",[t("h1",{staticClass:"is-size-1 is-flex is-justify-content-center"},[e._v("Conheça meus projetos")]),e._v(" "),t("section",{staticClass:"is-flex is-flex-wrap-wrap is-justify-content-center"},[e._l(e.repoList,(function(n,o){return t("nav",{key:"repo_".concat(o),staticClass:"card"},[t("a",{attrs:{href:n.html_url,role:"link",rel:"search external","aria-label":n.description,target:"_blank"}},["Vue"!==n.language?t("img",{attrs:{src:"https://raw.githubusercontent.com/".concat(n.full_name,"/").concat(n.default_branch,"/logo.webp"),width:"200px",alt:n.name.replaceAll("_"," "),title:n.name.replaceAll("_"," ")},on:{error:function(t){return e.defaultLogo(t,n)}}}):t("Logo",{staticClass:"logo",attrs:{name:n.name.replaceAll("_"," "),images:[r(317)],title:n.name.replaceAll("_"," "),titleColor:"rgb(72 199 142)",barColor:"rgb(72 199 142)"}})],1)])})),e._v(" "),e.isLoad?e._l(15,(function(e){return t("nav",{key:"repo_".concat(e),staticClass:"card"},[t("b-skeleton",{attrs:{width:"200px",height:"200px"}})],1)})):e._e()],2)])}),[],!1,null,"62b3b65a",null);t.default=component.exports;installComponents(component,{Logo:r(306).default})},331:function(e,t,r){"use strict";r.r(t);var n={name:"Libras",beforeMount:function(){new window.VLibras.Widget("https://vlibras.gov.br/app")}},o=r(46),component=Object(o.a)(n,(function(){this._self._c;return this._m(0)}),[function(){var e=this._self._c;return e("div",{staticClass:"enabled",attrs:{vw:""}},[e("div",{staticClass:"active",attrs:{"vw-access-button":""}}),this._v(" "),e("div",{attrs:{"vw-plugin-wrapper":""}},[e("div",{staticClass:"vw-plugin-top-wrapper"})])])}],!1,null,null,null);t.default=component.exports},332:function(e,t,r){"use strict";r.r(t);var n=r(46),component=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("aside",[t("h1",{staticClass:"is-size-1 is-flex is-justify-content-center"},[e._v("Quem sou eu?")]),e._v(" "),t("timeline-item",{attrs:{statusIcon:"school",title:"Ensino Médio | 2013 - 2015",statusSize:"large",statusColor:"has-background-primary"}},[t("p",{staticClass:"has-text-justified has-text-quinary"},[e._v('\n      Desde os meus 6 anos, quando eu aprendi a ler, eu gostava de aprender\n      sobre as coisas, e minha brincadeira favorita era ensinar um "público"\n      invisível que assistia eu ministrar aulas riscando em um portão de ferro\n      da minha casa. Mas até então, não tinha vontade de ser professora, mas\n      sempre tive paixão pelos estudos e até hoje me arrepio de orgulho quando\n      vejo pessoas que venceram e conquistaram coisas com a educação.\n      Passaram-se os anos e ganhei meu primeiro computador, nesse tempo a\n      primeira linguagem que eu tive contato foi o HTML. Mas no ensino médio\n      eu dei passos em direção a outros caminhos, eu pensei querer se\n      enfemeira, até caminhei uma parte boa dessa trilha, porém, oportunidades\n      de se tornar uma dev surgiram após essa época da minha vida.\n    ')])]),e._v(" "),t("timeline-item",{attrs:{statusIcon:"airplane",title:"Intercâmbio Linguístico | 2018",stepValue:"1",statusSize:"large",statusColor:"has-background-primary"}},[t("p",{staticClass:"has-text-justified has-text-quinary"},[e._v("\n      Essa história é muito boa e tenho muito orgulho, eu consegui através dos\n      meus estudos! O que eu gosto de frizar é: ESTUDOS! Eram oito mil alunos\n      incritos no Academia Enem para 100 vagas de intercâmbio para a Espanha e\n      Inglaterra e eu consegui. Me orgulho muito disso. Nesse intercâmbio\n      aprendi um pouco de espanhol e de bônus conheci gente do mundo todo.\n      Apesar de curta foi uma experiência incrível. Mas tive contato com gente\n      de diversas áreas e pude ter muitas conversas legais sobre algumas\n      carreiras profissionais. Fui com uma bagagem de roupas e voltei com\n      muito mais que isso. Eu tinha que começar a traçar um plano de carreira!\n    ")])]),e._v(" "),t("timeline-item",{attrs:{statusIcon:"account-hard-hat",title:"Primeiro Emprego | 2020",stepValue:"3",statusSize:"large",statusColor:"has-background-primary"}},[t("p",{staticClass:"has-text-justified has-text-justified has-text-quinary"},[e._v("\n      Meu primeiro emprego foi em uma fábrica de calçados. Eu fiz parte de uma\n      turma de aprendizes que trabalhava na produção e eu amava cada dia de\n      trabalho e nossas aulas durante a tarde. O projeto final foi desenhar e\n      confeccionar um modelo novo de sapato para o desfile final. Apesar de\n      ter sido uma experiência legal, foi durante esse período que decidi\n      começar na faculdade de Análise e Desenvolvimento de Sistemas, eu estava\n      o tempo todo pensando em construir uma carreira sólida que me abrisse\n      oportunidades não só no Brasil e que eu fizesse parte de um grupo de\n      profissionais que fazem trabalhos incríveis que facilitam e revolucionam\n      a vida das pessoas através da tecnologia.\n    ")])]),e._v(" "),t("timeline-item",{attrs:{statusIcon:"school",title:"Graduação | 2020 - Atualmente",stepValue:"1",statusSize:"large",statusColor:"has-background-primary"}},[t("p",{staticClass:"has-text-justified has-text-quinary"},[e._v("\n      Durante a graduação eu comecei a fazer projetos, principalmente focados\n      em front-end, tive ajuda de profissionais incríveis que estão a muito\n      tempo na carreira, participei de bootcamps e cursos voltados para área\n      que me fizeram abrir muito mais a mente e saber das possíbilidades do\n      que nós da área tech podemos ser capazes de fazer e o quanto nosso\n      trabalho é importante para todas as áreas. \n    ")])])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{TimelineItem:r(312).default})},333:function(e,t,r){var content=r(336);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(68).default)("22dd8125",content,!0,{sourceMap:!1})},334:function(e,t,r){"use strict";r.r(t);var n=r(126);var o=r(137),l=r(103);function c(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||Object(o.a)(e)||Object(l.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r(205);var d={name:"Languages",data:function(){return{languagesList:[{path:r(320),alt:"Logo CSS"},{path:r(321),alt:"Logo Github"},{path:r(322),alt:"Logo HTML"},{path:r(323),alt:"Logo JS"},{path:r(324),alt:"Logo MySQL"},{path:r(325),alt:"Logo Reacjs"},{path:r(326),alt:"Logo Vuejs"}]}},computed:{groupLanguageList:function(){for(var e=c(this.languagesList),t=[];e.length;)t.push(e.splice(0,4));return t}}},f=(r(327),r(46)),component=Object(f.a)(d,(function(){var e=this,t=e._self._c;return t("aside",[t("h1",{staticClass:"is-size-1 is-flex is-justify-content-center"},[e._v("Conhecimentos")]),e._v(" "),e._l(e.languagesList,(function(e,r){return t("img",{key:"logo_".concat(r),staticClass:"pl-3 images",attrs:{src:e.path,alt:e.alt}})}))],2)}),[],!1,null,"a6df89ee",null);t.default=component.exports},335:function(e,t,r){"use strict";r(333)},336:function(e,t,r){var n=r(67)(!1);n.push([e.i,"",""]),e.exports=n},337:function(e,t,r){"use strict";r.r(t);var n=r(329),o=r(330),l=r(334),c=r(332),d=r(331),f={name:"IndexPage",components:{About:n.default,Repositories:o.default,Languages:l.default,Trajectories:c.default,Libras:d.default}},m=(r(335),r(46)),component=Object(m.a)(f,(function(){var e=this,t=e._self._c;return t("section",[t("About"),e._v(" "),t("Trajectories"),e._v(" "),t("Repositories"),e._v(" "),t("Libras")],1)}),[],!1,null,"b3e68aca",null);t.default=component.exports;installComponents(component,{About:r(329).default,Trajectories:r(332).default,Repositories:r(330).default,Libras:r(331).default})}}]);