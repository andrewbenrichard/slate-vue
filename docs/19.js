(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1134:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this.$createElement,t=this._self._c||e;return t("Slate",{attrs:{value:JSON.stringify(this.initialValue)}},[t("Editable",{attrs:{placeholder:"Enter some plain text...",renderElement:this.renderElement,renderLeaf:this.renderLeaf}})],1)};n._withStripped=!0;var a=r(13),l=r(0);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,l=void 0;try{for(var i,o=e[Symbol.iterator]();!(n=(i=o.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,l=e}finally{try{n||null==o.return||o.return()}finally{if(a)throw l}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=function(e){var t=e.attributes,r=e.children,n=e.leaf;return{render:function(){var e=arguments[0];return n.bold&&(r=e("strong",[r])),e("span",{attrs:u({},t)},[r])}}},b=function(e){var t=e.attributes,r=e.children,n=e.element;return{render:function(){var e=arguments[0];switch(n.type){case"table":return e("table",[e("tbody",{attrs:u({},t)},[r])]);case"table-row":return e("tr",{attrs:u({},t)},[r]);case"table-cell":return e("td",{attrs:u({},t)},[r]);default:return e("p",{attrs:u({},t)},[r])}}}},f=[{children:[{text:"Since the editor is based on a recursive tree model, similar to an HTML document, you can create complex nested structures, like tables:"}]},{type:"table",children:[{type:"table-row",children:[{type:"table-cell",children:[{text:""}]},{type:"table-cell",children:[{text:"Human",bold:!0}]},{type:"table-cell",children:[{text:"Dog",bold:!0}]},{type:"table-cell",children:[{text:"Cat",bold:!0}]}]},{type:"table-row",children:[{type:"table-cell",children:[{text:"# of Feet",bold:!0}]},{type:"table-cell",children:[{text:"2"}]},{type:"table-cell",children:[{text:"4"}]},{type:"table-cell",children:[{text:"4"}]}]},{type:"table-row",children:[{type:"table-cell",children:[{text:"# of Lives",bold:!0}]},{type:"table-cell",children:[{text:"1"}]},{type:"table-cell",children:[{text:"1"}]},{type:"table-cell",children:[{text:"9"}]}]}]},{children:[{text:"This table is just a basic example of rendering a table, and it doesn't have fancy functionality. But you could augment it to add support for navigating with arrow keys, displaying table headers, adding column and rows, or even formulas if you wanted to get really crazy!"}]}],p={name:"Table",components:{Slate:a.e,Editable:a.a},data:function(){return{initialValue:f,renderElement:b,renderLeaf:d}},created:function(){var e,t,r,n;e=this.$editor,t=e.deleteBackward,r=e.deleteForward,n=e.insertBreak,e.deleteBackward=function(r){var n=e.selection;if(n&&l.g.isCollapsed(n)){var a=i(l.a.nodes(e,{match:function(e){return"table-cell"===e.type}}),1)[0];if(a){var o=i(a,2)[1],c=l.a.start(e,o);if(l.f.equals(n.anchor,c))return}}t(r)},e.deleteForward=function(t){var n=e.selection;if(n&&l.g.isCollapsed(n)){var a=i(l.a.nodes(e,{match:function(e){return"table-cell"===e.type}}),1)[0];if(a){var o=i(a,2)[1],c=l.a.end(e,o);if(l.f.equals(n.anchor,c))return}}r(t)},e.insertBreak=function(){e.selection&&i(l.a.nodes(e,{match:function(e){return"table"===e.type}}),1)[0]||n()}}},y=r(5),h=Object(y.a)(p,n,[],!1,null,"be29b668",null);h.options.__file="site/pages/table/index.vue";t.default=h.exports}}]);