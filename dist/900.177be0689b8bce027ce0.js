"use strict";(self.webpackChunkrat_react=self.webpackChunkrat_react||[]).push([[900],{1900:function(n,t,r){r.r(t),r.d(t,{default:function(){return x}});var e=r(9250),a=r(7294),i=r(1721),u=r(8573),o=r(2699),l=r(9894),c=r(1702),s=r(8354),m=r(4057),f=(r(1454),r(5893));function d(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}var h=function(n){var t,r,i=(t=(0,a.useState)(!0),r=2,function(n){if(Array.isArray(n))return n}(t)||function(n,t){var r=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var e,a,i=[],u=!0,o=!1;try{for(r=r.call(n);!(u=(e=r.next()).done)&&(i.push(e.value),!t||i.length!==t);u=!0);}catch(n){o=!0,a=n}finally{try{u||null==r.return||r.return()}finally{if(o)throw a}}return i}}(t,r)||function(n,t){if(n){if("string"==typeof n)return d(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(n,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),h=i[0],y=i[1],p=(0,e.s0)();function x(n){n?p(n):y(!h)}return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(o.Z,{onClick:function(){return x(n.menuData.url)},children:[(0,f.jsx)(l.Z,{children:(0,f.jsx)(m.Z,{name:n.menuData.icon})}),(0,f.jsx)(c.Z,{primary:n.menuData.title}),n.menuData.childMenuItems.length>0&&(0,f.jsx)(f.Fragment,{children:h?(0,f.jsx)(m.Z,{name:"expand_less"}):(0,f.jsx)(m.Z,{name:"expand_more"})})]}),n.menuData.childMenuItems.length>0&&(0,f.jsx)(s.Z,{in:h,timeout:"auto",unmountOnExit:!0,children:(0,f.jsx)(u.Z,{component:"div",disablePadding:!0,children:n.menuData.childMenuItems.map((function(n,t){return(0,f.jsxs)(o.Z,{onClick:function(){return x(n.url)},sx:{pl:4},children:[(0,f.jsx)(l.Z,{children:(0,f.jsx)(m.Z,{name:n.icon})}),(0,f.jsx)(c.Z,{primary:n.title})]},t)}))})})]})};function y(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}var p=function(n){var t,r,e=(t=(0,a.useState)([]),r=2,function(n){if(Array.isArray(n))return n}(t)||function(n,t){var r=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var e,a,i=[],u=!0,o=!1;try{for(r=r.call(n);!(u=(e=r.next()).done)&&(i.push(e.value),!t||i.length!==t);u=!0);}catch(n){o=!0,a=n}finally{try{u||null==r.return||r.return()}finally{if(o)throw a}}return i}}(t,r)||function(n,t){if(n){if("string"==typeof n)return y(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?y(n,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=e[0],l=e[1];return(0,a.useEffect)((function(){i.ZP.post(n.apiSource).then((function(n){l(n.data)}))}),[]),(0,f.jsx)(u.Z,{sx:{width:"100%",maxWidth:300,bgcolor:"background.paper"},component:"nav","aria-labelledby":"nested-list-subheader",children:o.map((function(n,t){return(0,f.jsx)(h,{menuData:n},t)}))})},x=function(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{className:"admin-menu",children:(0,f.jsx)(p,{apiSource:"/menu/getmenu"})}),(0,f.jsx)("div",{className:"admin-content",children:(0,f.jsx)(e.j3,{})})]})}}}]);