!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var r=n(1),o=n(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),s=[];function a(e){for(var t=-1,n=0;n<s.length;n++)if(s[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],c=t.base?i[0]+t.base:i[0],u=n[c]||0,l="".concat(c," ").concat(u);n[c]=u+1;var d=a(l),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(s[d].references++,s[d].updater(f)):s.push({identifier:l,updater:v(f,t),references:1}),r.push(l)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var s=i(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function p(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,m=0;function v(e,t){var n,r,o;if(t.singleton){var i=m++;n=h||(h=u(t)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=u(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=a(n[r]);s[o].references--}for(var i=c(e,t),u=0;u<n.length;u++){var l=a(n[u]);0===s[l].references&&(s[l].updater(),s.splice(l,1))}n=i}}}},function(e,t,n){(t=n(3)(!1)).push([e.i,"#app {\n    position: relative;\n}\n\n.content {\n    position: absolute;\n    top: 0;\n    right: 0;\n    left: 200px;\n}\n\n.sidebar {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    width: 200px;\n    z-index: 100;\n    padding: 10px;\n    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);\n    overflow-y: auto;\n}",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(s=r,a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(c," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}var s,a,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(o[s]=!0)}for(var a=0;a<e.length;a++){var c=[].concat(e[a]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},function(e,t,n){"use strict";n.r(t);n(0);var r=n.p+"4d0a7ffa1284c91bd8e94e691f848287.png";function o(e,t=""){return`<div class="row" style="${t}">${e}</div>`}function i(e){return`<div class="col-sm" style="text-align: center;">${e}</div>`}function s(e={}){return Object.keys(e).map(t=>`${t}: ${e[t]}`).join(";")}class a{constructor(e,t){this.value=e,this.options=t}toHTML(){throw new Error("Метод toHTML должен быть реализовон!")}}class c extends a{constructor(e,t){super(e,t)}toHTML(){const{tag:e="h2",styles:t}=this.options;return o(i(`\n            <${e} style="font-weight: 400;">${this.value}</${e}>\n        `),t)}}class u extends a{constructor(e,t){super(e,t)}toHTML(){return o(i(`\n          <p style="margin-bottom: 0;">${this.value}</p>\n        `),this.options.styles)}}const l=[new c("Конструктор сайтов, на чистом Java Script, с которым справится каждый.",{tag:"h5",styles:s({background:"linear-gradient(to right, #40273E, #A33FBF)",color:"#fff",padding:"1.5rem","text-align":"center","margin-top":"0.5rem"})}),new class extends a{constructor(e,t){super(e,t)}toHTML(){const{alt:e,styles:t,imageStyles:n}=this.options;return o(`<img src="${this.value}" alt="${e}" style="${n}" />`,t)}}(r,{alt:"constructor",styles:s({display:"flex",padding:"1.5rem 0","justify-content":"center"}),imageStyles:s({width:"800px",hieght:"auto","box-shadow":"3px 3px 6px 4px #888"})}),new u("Конструктор сайтов – это система из набора инструментов, которая позволяет создавать сайты и администрировать их без каких-либо специализированных знаний. ... Мы подготовили для вас лучший инструмент для создания идеального сайта с учётом ваших желаний и потребностей.",{styles:s({padding:"1rem","padding-bottom":"2rem","font-size":"15px","line-height":"1.7"})}),new class extends a{constructor(e,t){super(e,t)}toHTML(){return o(this.value.map(e=>i(e)).join(""),this.options.styles)}}(["Простой и удобный конструкторы сайтов поможет сделать сайт-визитку, лендинг, личный блог или даже онлайн-магазин.","Подойдёт как новичкам, так и опытным пользователям, которым необходимо куда больше возможностей.","Удобный интерфейс, интуитивный редактор и бесплатный хостинг помогут вам в создании вашего проекта."],{styles:s({background:"linear-gradient(45deg, #A33FBF, #403C59)",color:"white",display:"flex",padding:"2.5rem 1.5rem 2rem 1.5rem","justify-content":"space-around","margin-bottom":"1rem; font-size: 16px; line-height: 2"})})];function d(e){return`\n        <form name="${e}">\n            <h5>${e}</h5>\n            <div class="form-group">\n                <input class="form-control form-control-sm" name="value" placeholder="Введите текст">\n            </div>\n            <div class="form-group">\n                <input class="form-control form-control-sm" name="styles" placeholder="Опишите CSS стили">\n            </div>\n            <button type="submit" class="btn btn-primary btn-sm">Добавить</button>\n        </form>\n        <hr />\n    `}const f=new class{constructor(e){this.$el=document.querySelector(e)}render(e){this.$el.innerHTML="",e.forEach(e=>{this.$el.insertAdjacentHTML("beforeend",e.toHTML())})}}("#site");new class{constructor(e,t){this.$el=document.querySelector(e),this.update=t,this.init()}init(){this.$el.addEventListener("submit",this.addBlock.bind(this)),this.$el.innerHTML=this.template}get template(){return[d("Заголовок"),d("Текст")].join("")}addBlock(e){e.preventDefault();const t=e.target.name,n=e.target.value.value,r=e.target.styles.value,o=new("text"===t?u:c)(n,{styles:r});this.update(o),e.target.value.value="",e.target.styles.value=""}}("#panel",e=>{l.push(e),f.render(l)}),f.render(l)}]);