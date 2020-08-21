(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1131:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this.$createElement,t=this._self._c||e;return t("Slate",{attrs:{value:JSON.stringify(this.initialValue)}},[t("Editable",{attrs:{placeholder:"Enter some plain text...",renderElement:this.renderElement}})],1)};n._withStripped=!0;var i=r(12),a=r(33),o=r.n(a),l=r(0);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,i=!1,a=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){i=!0,a=e}finally{try{n||null==l.return||l.return()}finally{if(i)throw a}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var c={"*":"list-item","-":"list-item","+":"list-item",">":"block-quote","#":"heading-one","##":"heading-two","###":"heading-three","####":"heading-four","#####":"heading-five","######":"heading-six"},h=function(e){e.attributes;var t=e.children,r=e.element;return{render:function(){var e=arguments[0],n={attr:n};switch(r.type){case"block-quote":return e("blockquote",o()([{},n]),[t]);case"bulleted-list":return e("ul",o()([{},n]),[t]);case"heading-one":return e("h1",o()([{},n]),[t]);case"heading-two":return e("h2",o()([{},n]),[t]);case"heading-three":return e("h3",o()([{},n]),[t]);case"heading-four":return e("h4",o()([{},n]),[t]);case"heading-five":return e("h5",o()([{},n]),[t]);case"heading-six":return e("h6",o()([{},n]),[t]);case"list-item":return e("li",o()([{},n]),[t]);default:return e("p",o()([{},n]),[t])}}}},f=[{type:"paragraph",children:[{text:'The editor gives you full control over the logic you can add. For example, it\'s fairly common to want to add markdown-like shortcuts to editors. So that, when you start a line with "> " you get a blockquote that looks like this:'}]},{type:"block-quote",children:[{text:"A wise quote."}]},{type:"paragraph",children:[{text:'Order when you start a line with "## " you get a level-two heading, like this:'}]},{type:"heading-two",children:[{text:"Try it out!"}]},{type:"paragraph",children:[{text:'Try it out for yourself! Try starting a new line with ">", "-", or "#"s.'}]}],d={name:"index",components:{Slate:i.e,Editable:i.a},data:function(){return{initialValue:f,renderElement:h}},created:function(){var e,t,r;e=this.$editor,t=e.deleteBackward,r=e.insertText,e.insertText=function(t){var n=e.selection;if(" "===t&&n&&l.g.isCollapsed(n)){var a=n.anchor,o=l.a.above(e,{match:function(t){return l.a.isBlock(e,t)}}),s=o?o[1]:[],u={anchor:a,focus:l.a.start(e,s)},h=l.a.string(e,u),f=c[h];if(f)return i.h.select(e,u),i.h.delete(e),i.h.setNodes(e,{type:f},{match:function(t){return l.a.isBlock(e,t)}}),void("list-item"===f&&i.h.wrapNodes(e,{type:"bulleted-list",children:[]},{match:function(e){return"list-item"===e.type}}))}r(t)},e.deleteBackward=function(){var r=e.selection;if(r&&l.g.isCollapsed(r)){var n=l.a.above(e,{match:function(t){return l.a.isBlock(e,t)}});if(n){var a=s(n,2),o=a[0],u=a[1],c=l.a.start(e,u);if("paragraph"!==o.type&&l.f.equals(r.anchor,c))return i.h.setNodes(e,{type:"paragraph"}),void("list-item"===o.type&&i.h.unwrapNodes(e,{match:function(e){return"bulleted-list"===e.type},split:!0}))}t.apply(void 0,arguments)}}}},p=r(5),y=Object(p.a)(d,n,[],!1,null,"b4f44932",null);y.options.__file="site/pages/markdown-shortcuts/index.vue";t.default=y.exports},33:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t,r=1;r<arguments.length;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)}var i=["attrs","props","domProps"],a=["class","style","directives"],o=["on","nativeOn"],l=function(e,t){return function(){e&&e.apply(this,arguments),t&&t.apply(this,arguments)}};e.exports=function(e){return e.reduce((function(e,t){for(var r in t)if(e[r])if(-1!==i.indexOf(r))e[r]=n({},e[r],t[r]);else if(-1!==a.indexOf(r)){var s=e[r]instanceof Array?e[r]:[e[r]],u=t[r]instanceof Array?t[r]:[t[r]];e[r]=s.concat(u)}else if(-1!==o.indexOf(r))for(var c in t[r])if(e[r][c]){var h=e[r][c]instanceof Array?e[r][c]:[e[r][c]],f=t[r][c]instanceof Array?t[r][c]:[t[r][c]];e[r][c]=h.concat(f)}else e[r][c]=t[r][c];else if("hook"==r)for(var d in t[r])e[r][d]=e[r][d]?l(e[r][d],t[r][d]):t[r][d];else e[r]=t[r];else e[r]=t[r];return e}),{})}}}]);