!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);function r(e){window.scroll({top:e,behavior:"smooth"})}const o=document.querySelector("#navbar-nav"),c=document.querySelector("#acercaDe"),i=document.querySelector("#trabajos"),a=document.querySelector("#contacto");addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("#contenidoPrincipal");window.addEventListener("hashchange",t=>{t.preventDefault(),e.innerHTML=(e=>{switch(e){case"#/":return"inicio";case"#/datos":return"datos";case"#/habilidades":return"habilidades";case"#/estudios":return"estudios";case"#/experiencia":return"experiencia";case"#/contacto":return"contacto";case"#/trabajos":return"trabajos"}})(window.location.hash)})}),o.addEventListener("click",e=>{let t;e.preventDefault(),"link-sobreDe"===e.target.id?(t=c.getBoundingClientRect().top,r(t)):"link-trabajos"===e.target.id?(t=i.getBoundingClientRect().top,r(t)):(t=a.getBoundingClientRect().top,r(t))})}]);