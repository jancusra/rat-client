"use strict";(self.webpackChunkrat_react=self.webpackChunkrat_react||[]).push([[917],{1700:function(r,t,e){var n=e(7294),a=e(9250),o=e(1721),l=e(5305),i=e(5620),c=e(5893);function u(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}t.Z=function(r){var t,e,s=(t=(0,n.useState)(""),e=2,function(r){if(Array.isArray(r))return r}(t)||function(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=e){var n,a,o=[],l=!0,i=!1;try{for(e=e.call(r);!(l=(n=e.next()).done)&&(o.push(n.value),!t||o.length!==t);l=!0);}catch(r){i=!0,a=r}finally{try{l||null==e.return||e.return()}finally{if(i)throw a}}return o}}(t,e)||function(r,t){if(r){if("string"==typeof r)return u(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?u(r,t):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),f=s[0],m=s[1],h=(0,a.s0)();return(0,c.jsxs)("form",{className:"rat-form-box ".concat(r.class?r.class:""),onSubmit:function(t){t.preventDefault();var e={};r.entityName&&r.formData.forEach((function(r){e[r.name]=r.value}));var n=r.entityName?{entityName:r.entityName,data:e}:r.formData;o.ZP.post(r.apiSource,n).then((function(t){t.data.errors?r.formErrors(t.data.errors):r.formSubmit()})).catch((function(r){m(r.response.data.ResultReason)}))},children:[r.children,(0,c.jsxs)("div",{className:"form-final-buttons",children:[(0,c.jsx)(l.Z,{type:"submit",variant:"contained",children:r.buttonContent}),r.showCancelButton?(0,c.jsx)(l.Z,{variant:"contained",color:"error",onClick:function(){h(-1)},children:"Cancel"}):null]}),f?(0,c.jsx)(i.Z,{className:"rat-form-alert",severity:"error",children:f}):null]})}},6133:function(r,t,e){var n=e(3646),a=e(5893);t.Z=function(r){return(0,a.jsx)(n.Z,{className:"form-input",variant:"outlined",name:r.name,label:r.label,placeholder:r.label,value:r.value,error:r.error,helperText:r.errorMessage,onChange:function(t){r.callback({name:t.target.name,value:t.target.value})}})}}}]);