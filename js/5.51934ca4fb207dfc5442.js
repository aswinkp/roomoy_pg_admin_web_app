webpackJsonp([5,22,27,36],{228:function(e,t,r){r(289);var n=r(159)(r(286),r(290),null,null);e.exports=n.exports},229:function(e,t,r){r(300);var n=r(159)(r(298),r(301),"data-v-60776d56",null);e.exports=n.exports},231:function(e,t,r){r(306);var n=r(159)(r(303),r(308),"data-v-0164bd48",null);e.exports=n.exports},261:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.regex=t.ref=t.len=t.req=t.withParams=void 0;var a=r(279),i=n(a);t.withParams=i.default;var o=t.req=function(e){if(Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if("object"==typeof e){for(var t in e)return!0;return!1}return!!String(e).length};t.len=function(e){return Array.isArray(e)?e.length:"object"==typeof e?Object.keys(e).length:String(e).length},t.ref=function(e,t,r){return"function"==typeof e?e.call(t,r):r[e]},t.regex=function(e,t){return(0,i.default)({type:e},function(e){return!o(e)||t.test(e)})}},262:function(e,t,r){"use strict";function n(){null!==c&&d.push(c),t.target=c={}}function a(){var e=c,r=t.target=c=d.pop()||null;return r&&(Array.isArray(r.$sub)||(r.$sub=[]),r.$sub.push(e)),e}function i(e){if("object"!=typeof e||Array.isArray(e))throw new Error("params must be an object");t.target=c=u({},c,e)}function o(e,t){return s(function(r){return function(){r(e);for(var n=arguments.length,a=Array(n),i=0;i<n;i++)a[i]=arguments[i];return t.apply(this,a)}})}function s(e){var t=e(i);return function(){n();try{for(var e=arguments.length,r=Array(e),i=0;i<e;i++)r[i]=arguments[i];return t.apply(this,r)}finally{a()}}}function l(e,t){return"object"==typeof e&&void 0!==t?o(e,t):s(e)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t.pushParams=n,t.popParams=a,t.withParams=l;var d=[],c=t.target=null;t._setTarget=function(e){t.target=c=e}},263:function(e,t,r){"use strict";function n(e){return("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}function a(e,t){var r=new e({data:{pending:!0,value:!1}});return t.then(function(e){r.pending=!1,r.value=e},function(e){throw r.pending=!1,r.value=!1,e}),r.__isVuelidateAsyncVm=!0,r}function i(e){this.dirty=e;var t=this.proxy,r=e?"$touch":"$reset";this.nestedKeys.forEach(function(e){t[e][r]()})}function o(e){if(b)return b;for(var t=e.constructor;t.super;)t=t.super;return b=t,t}function s(e){e.mixin(g)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=t.validationMixin=t.Vuelidate=void 0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u=r(262),d=function(e,t,r){return e.reduce(function(e,n){return e[r?r(n):n]=t(n),e},{})},c=function(e,t,r,n){if("function"==typeof r)return r.call(e,t,n);r=Array.isArray(r)?r:r.split(".");for(var a=0;a<r.length;a++){if(!t||"object"!=typeof t)return n;t=t[r[a]]}return void 0===t?n:t},v={$invalid:function(){var e=this.proxy;return this.nestedKeys.some(function(t){return e[t].$invalid})||this.ruleKeys.some(function(t){return!e[t]})},$dirty:function(){if(this.dirty)return!0;if(0===this.nestedKeys.length)return!1;var e=this.proxy;return this.nestedKeys.every(function(t){return e[t].$dirty})},$error:function(){return this.$dirty&&!this.$pending&&this.$invalid},$pending:function(){var e=this,t=this.proxy;return this.nestedKeys.some(function(e){return t[e].$pending})||this.ruleKeys.some(function(t){return e.getRef(t).$pending})},$params:function(){var e=this,t=this.validations;return l({},d(this.nestedKeys,function(e){return t[e]&&t[e].$params||null}),d(this.ruleKeys,function(t){return e.getRef(t).$params}))}},_={$touch:function(){i.call(this,!0)},$reset:function(){i.call(this,!1)},$flattenParams:function(){var e=this.proxy,t=[];for(var r in this.$params)if(this.isNested(r)){for(var n=e[r].$flattenParams(),a=0;a<n.length;a++)n[a].path.unshift(r);t=t.concat(n)}else t.push({path:[],name:r,params:this.$params[r]});return t}},f=Object.keys(v),p=Object.keys(_),m=null,h=function(e){if(m)return m;var t=e.extend({props:["rule","model","parentModel","rootModel"],methods:{runRule:function(t){(0,u.pushParams)();var r=this.rule.call(this.rootModel,this.model,t),i=n(r)?a(e,r):r,o=(0,u.popParams)();return{output:i,params:o&&o.$sub?o.$sub.length>1?o:o.$sub[0]:null}}},computed:{run:function(){var e=this,t=this.parentModel;if(Array.isArray(t)&&t.__ob__){var r=t.__ob__.dep;r.depend();var n=r.constructor.target;if(!this._indirectWatcher){var a=n.constructor;this._indirectWatcher=new a(this.rootModel,function(){return e.runRule(t)},null,{lazy:!0})}if(!this._indirectWatcher.dirty&&this._lastModel===this.model)return this._indirectWatcher.depend(),n.value;this._lastModel=this.model,this._indirectWatcher.evaluate(),this._indirectWatcher.depend()}return this._indirectWatcher?this._indirectWatcher.value:this.runRule(t)},$params:function(){return this.run.params},proxy:function(){var e=this.run.output;return e.__isVuelidateAsyncVm?!!e.value:!!e},$pending:function(){var e=this.run.output;return!!e.__isVuelidateAsyncVm&&e.pending}},render:function(e){return null}}),r=e.extend({data:function(){return{dirty:!1}},mounted:function(){this._watcher.lazy=!0},props:["validations","model","prop","parentModel","rootModel"],methods:l({},_,{getRef:function(e){return this._watcher.depend(),this._watcher.dirty&&this._watcher.evaluate(),this.$refs[e]},isNested:function(e){return"function"!=typeof this.validations[e]}}),computed:l({},v,{nestedKeys:function(){return this.keys.filter(this.isNested)},ruleKeys:function(){var e=this;return this.keys.filter(function(t){return!e.isNested(t)})},keys:function(){return Object.keys(this.validations)},proxy:function(){var e=this,t=d(this.keys,function(t){return{enumerable:!0,configurable:!1,get:function(){return e.getRef(t).proxy}}}),r=d(f,function(t){return{enumerable:!0,configurable:!1,get:function(){return e[t]}}}),n=d(p,function(t){return{enumerable:!1,configurable:!1,get:function(){return e[t]}}});return Object.defineProperties({},l({},t,r,n))}}),render:function(e){var t=this;return e("div",[this.nestedKeys.map(function(r){return s(e,t,r)}),this.ruleKeys.map(function(r){return b(e,t,r)})])}}),i=r.extend({methods:{isNested:function(e){return void 0!==this.validations[e]()},getRef:function(e){var t=this;return{get proxy(){return t.validations[e]()||!1}}}},render:function(){return null}}),o=r.extend({computed:{keys:function(){return Object.keys(this.model)},tracker:function(){var e=this,t=this.validations.$trackBy;return t?function(r){return""+c(e.rootModel,e.model[r],t)}:function(e){return""+e}}},methods:{isNested:function(){return!0},getRef:function(e){return this._watcher.depend(),this._watcher.dirty&&this._watcher.evaluate(),this.$refs[this.tracker(e)]}},render:function(e){return e("div",h(e,this))}}),s=function(e,t,n){if("$params"===n)return null;if("$each"===n)return e(o,{key:n,ref:n,attrs:{validations:t.validations[n],parentModel:t.parentModel,prop:n,model:t.model,rootModel:t.rootModel}});var a=t.validations[n];if(Array.isArray(a)){var s=t.rootModel;return e(i,{key:n,ref:n,attrs:{validations:d(a,function(e){return function(){return c(s,s.$v,e)}},function(e){return Array.isArray(e)?e.join("."):e}),parentModel:null,prop:n,model:null,rootModel:s}})}return e(r,{key:n,ref:n,attrs:{validations:a,parentModel:t.model,prop:n,model:t.model[n],rootModel:t.rootModel}})},h=function(e,t){var n=t.validations,a=l({},n);delete a.$trackBy;var i={};return t.keys.map(function(n){var o=t.tracker(n);return i.hasOwnProperty(o)?null:(i[o]=!0,e(r,{key:o,ref:o,attrs:{validations:a,prop:n,parentModel:t.model,model:t.model[n],rootModel:t.rootModel}}))})},b=function(e,r,n){return e(t,{key:n,ref:n,attrs:{rule:r.validations[n],parentModel:r.parentModel,model:r.model,rootModel:r.rootModel}})};return m=r},b=null,y=function(e,t){var r=o(e),n=h(r),a=new r({render:function(r){return r(n,{ref:"$v",attrs:{validations:"function"==typeof t?t.call(e):t,parentModel:null,prop:"$v",model:e,rootModel:e}})}});return a.$mount(),a},g={beforeCreate:function(){var e=this,t=this.$options;t.validations&&(t.computed||(t.computed={}),t.computed.$v=function(){return e._vuelidate.$refs.$v.proxy})},created:function(){var e=this.$options.validations;e&&(this._vuelidate=y(this,e))},beforeDestroy:function(){this._vuelidate&&(this._vuelidate.$destroy(),this._vuelidate=null)}};t.Vuelidate=s,t.validationMixin=g,t.withParams=u.withParams,t.default=s},264:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.and=t.or=t.url=t.sameAs=t.requiredUnless=t.requiredIf=t.required=t.minLength=t.maxLength=t.email=t.between=t.numeric=t.alphaNum=t.alpha=void 0;var a=r(265),i=n(a),o=r(266),s=n(o),l=r(272),u=n(l),d=r(268),c=n(d),v=r(269),_=n(v),f=r(270),p=n(f),m=r(271),h=n(m),b=r(274),y=n(b),g=r(275),w=n(g),M=r(276),x=n(M),$=r(277),C=n($),j=r(278),P=n(j),q=r(273),O=n(q),k=r(267),A=n(k);t.alpha=i.default,t.alphaNum=s.default,t.numeric=u.default,t.between=c.default,t.email=_.default,t.maxLength=p.default,t.minLength=h.default,t.required=y.default,t.requiredIf=w.default,t.requiredUnless=x.default,t.sameAs=C.default,t.url=P.default,t.or=O.default,t.and=A.default},265:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(261);t.default=(0,n.regex)("alpha",/^[a-zA-Z]*$/)},266:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(261);t.default=(0,n.regex)("alphaNum",/^[a-zA-Z0-9]*$/)},267:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(261);t.default=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},function(){for(var e=this,r=arguments.length,n=Array(r),a=0;a<r;a++)n[a]=arguments[a];return t.length>0&&t.reduce(function(t,r){return t&&r.apply(e,n)},!0)})}},268:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(261);t.default=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},function(r){return!(0,n.req)(r)||!/\s/.test(r)&&+e<=+r&&+t>=+r})}},269:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(261),a=/(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/;t.default=(0,n.regex)("email",a)},270:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(261);t.default=function(e){return(0,n.withParams)({type:"maxLength",max:e},function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e})}},271:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(261);t.default=function(e){return(0,n.withParams)({type:"minLength",min:e},function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e})}},272:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(261);t.default=(0,n.regex)("numeric",/^[0-9]*$/)},273:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(261);t.default=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},function(){for(var e=this,r=arguments.length,n=Array(r),a=0;a<r;a++)n[a]=arguments[a];return t.length>0&&t.reduce(function(t,r){return t||r.apply(e,n)},!1)})}},274:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(261);t.default=(0,n.withParams)({type:"required"},n.req)},275:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(261);t.default=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)})}},276:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(261);t.default=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)})}},277:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(261);t.default=function(e){return(0,n.withParams)({type:"sameAs",eq:e},function(t,r){return t===(0,n.ref)(e,this,r)})}},278:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(261),a=/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[\/?#]\S*)?$/;t.default=(0,n.regex)("url",a)},279:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(262).withParams;t.default=n},285:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=r(292),i=n(a);t.default=function(e,t,r){return t in e?(0,i.default)(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},286:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),a=r.n(n);t.default={props:{date_prop:{default:function(){return new Date}}},beforeMount:function(){this.date=a()(this.date_prop).startOf("month")},data:function(){return{date:null}},computed:{full_month:function(){return this.date.format("MMMM")},full_year:function(){return this.date.format("YY")}},methods:{prev:function(){this.date=a()(this.date).subtract(1,"months"),this.$emit("input",this.date)},next:function(){this.date=a()(this.date).add(1,"months"),this.$emit("input",this.date)}}}},287:function(e,t,r){e.exports={default:r(293),__esModule:!0}},288:function(e,t,r){t=e.exports=r(225)(),t.push([e.i,"",""])},289:function(e,t,r){var n=r(288);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(226)("544afd10",n,!0)},290:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row flex justify-around"},[r("i",{staticStyle:{"font-size":"24px",padding:"21px 20px"},on:{click:e.prev}},[e._v("keyboard_arrow_left")]),e._v(" "),r("span",{staticStyle:{"font-size":"24px",padding:"20px"}},[e._v(e._s(e.full_month)+" ' "+e._s(e.full_year))]),e._v(" "),r("i",{staticStyle:{"font-size":"24px",padding:"21px 20px"},on:{click:e.next}},[e._v("keyboard_arrow_right")])])},staticRenderFns:[]}},291:function(e,t,r){e.exports={default:r(294),__esModule:!0}},292:function(e,t,r){e.exports={default:r(295),__esModule:!0}},293:function(e,t,r){var n=r(8),a=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return a.stringify.apply(a,arguments)}},294:function(e,t,r){r(296);var n=r(8).Object;e.exports=function(e,t){return n.create(e,t)}},295:function(e,t,r){r(297);var n=r(8).Object;e.exports=function(e,t,r){return n.defineProperty(e,t,r)}},296:function(e,t,r){var n=r(25);n(n.S,"Object",{create:r(160)})},297:function(e,t,r){var n=r(25);n(n.S+n.F*!r(9),"Object",{defineProperty:r(11).f})},298:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(291),a=r.n(n),i=r(24),o=r(5),s=r(1),l=(r.n(s),r(0)),u=r.n(l),d=r(228),c=r.n(d);t.default={components:{MonthNavigator:c.a},props:{showPaymentType:{type:Boolean,default:!0},paymentlist:{type:Array,default:[]},showNavigator:{default:!1,type:Boolean}},data:function(){return{total:0}},computed:{daily_incomes:function(){var e=this;return this.total=0,this.paymentlist.reduce(function(t,r){return t[u()(r.date).format("Do MMMM'YY")]=t[u()(r.date).format("Do MMMM'YY")]||{date:u()(r.date).format("Do MMMM'YY"),incomes:[],total:0},t[u()(r.date).format("Do MMMM'YY")].incomes.push(r),t[u()(r.date).format("Do MMMM'YY")].total+=parseFloat(r.amount),e.total+=r.amount,t},a()(null))},selected_pg_id:function(){return s.LocalStorage.get.item("pg_for_dashboard")}},methods:{fetch_data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=this;null==e&&null==t&&(e=u()().startOf("month").toISOString(),t=u()().endOf("month").toISOString()),o.a.axios.get(i.a.urls.SITE_URL+"api/v1/payment-detail/?pg="+r.selected_pg_id+"&start="+e+"&end="+t+"&to_pay=false&discount=false").then(function(e){null!=e.data&&(r.paymentlist=e.data),r.loaded=!0}).catch(function(e){console.log("Error",e)})},openPaymentListModal:function(){this.$refs.allPaymentsModal.open()},dateformatter:function(e){return e?u()(e).format("DD/MM/YYYY"):"Not Specified"},change_month:function(e){this.fetch_data(e.startOf("month").toISOString(),e.endOf("month").toISOString())}}}},299:function(e,t,r){t=e.exports=r(225)(),t.push([e.i,".reservation_name[data-v-60776d56]{margin:5px 0}",""])},300:function(e,t,r){var n=r(299);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(226)("67c60432",n,!0)},301:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("q-modal",{ref:"allPaymentsModal",attrs:{"content-css":{minWidth:"80vw",minHeight:"80vh"}}},[r("q-layout",[r("div",{staticClass:"toolbar",slot:"header"},[r("button",{on:{click:function(t){e.$refs.allPaymentsModal.close()}}},[r("i",[e._v("arrow_back")])]),e._v(" "),r("q-toolbar-title",{attrs:{padding:1}},[e._v("\n          All Payments\n        ")])],1),e._v(" "),r("div",{staticClass:"layout-view"},[e.showNavigator?r("div",[r("MonthNavigator",{on:{input:e.change_month}}),e._v(" "),r("div",{staticClass:"cashflow_total log_btn text-primary"},[e._v("\n            ₹ "+e._s(e.total)+"\n          ")])],1):e._e(),e._v(" "),e._l(e.daily_incomes,function(t){return r("div",{},[r("div",{staticClass:"date_separator flex justify-between"},[r("span",{},[e._v(e._s(t.date))]),r("span",{staticClass:"pull-right"},[e._v("₹ "+e._s(t.total))])]),e._v(" "),e._l(t.incomes,function(t){return r("div",{staticClass:"border reserve_item"},[r("div",{staticClass:"item-content"},[r("div",{staticClass:"row"},[r("div",{staticClass:"column width-1of3"},[e.showPaymentType?r("small",{staticClass:"text-faded"},[t.to_pay?r("div",{staticClass:"row"},[e._v("To Pay")]):t.is_discount?r("div",{staticClass:"row"},[e._v("Discount")]):r("div",{staticClass:"row"},[e._v("Payment")])]):e._e(),e._v(" "),r("div",{staticClass:"row text-bold ellipsis reservation_name"},[e._v(e._s(t.reservation_name))]),e._v(" "),r("div",{staticClass:"row"},[r("span",{staticClass:"token"},[e._v(e._s(t.room_name)),t.room_inner_name?r("span",[e._v("-"+e._s(t.room_inner_name))]):e._e()])]),e._v(" "),r("div",{staticClass:"row"},[e._v(e._s(t.description))])]),e._v(" "),r("div",{staticClass:"column width-1of3"},[r("div",{staticClass:"reserve_date ellipsis"},[e._v(e._s(t.collected_by_name))])]),e._v(" "),r("div",{staticClass:"column width-1of3 btn_wrap"},[r("div",{staticClass:"log_btn"},[e._v("₹"+e._s(t.amount<0?t.amount*-1:t.amount))])])])])])})],2)})],2)])],1)],1)},staticRenderFns:[]}},303:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=r(287),i=r.n(a),o=r(285),s=r.n(o),l=r(24),u=r(5),d=r(263),c=r.n(d),v=r(0),_=r.n(v),f=r(264),p=(r.n(f),r(1)),m=(r.n(p),r(229)),h=r.n(m);u.a.use(c.a),t.default={props:["reservation","show_status_buttons","show_payments_button"],components:{PaymentListModal:h.a},data:function(){return{show_extras:!1,show_extra_fields:!1,status:null,reservation_obj:null,editable_reservation:{name:"",email:"",phone_number:"",plan:"",deposit_amount:"",secondary_phone:"",job:"",amount_per_plan:"",range:{from:"",to:""}}}},validations:{editable_reservation:(n={name:{required:f.required},email:{email:f.email},phone_number:{required:f.required,numeric:f.numeric,minLength:r.i(f.minLength)(10),maxLength:r.i(f.maxLength)(10)},plan:{required:f.required},deposit_amount:{required:f.required,numeric:f.numeric},amount_per_plan:{required:f.required,numeric:f.numeric}},s()(n,"deposit_amount",{numeric:f.numeric}),s()(n,"secondary_phone",{numeric:f.numeric,minLength:r.i(f.minLength)(10),maxLength:r.i(f.maxLength)(10)}),s()(n,"range",{from:{required:f.required}}),n)},beforeMount:function(){this.reservation_obj=this.reservation,this.status=this.reservation_obj.status},methods:{toggle:function(){this.show_extras=!this.show_extras},get_from_time:function(e){var e=JSON.parse(e);if(e.lower){return _()(e.lower).format("hh:mm A")}},get_plan:function(e){return"MO"==e?"Monthly":"DA"==e?"Daily":void 0},openModal:function(){var e=this;this.editable_reservation={bed:this.reservation_obj.bed,id:this.reservation_obj.pk,name:this.reservation_obj.name,phone_number:this.reservation_obj.phone_number,plan:this.reservation_obj.plan,status:"act",deposit_amount:this.reservation_obj.deposit_amount,job:this.reservation_obj.job,secondary_phone:this.reservation_obj.secondary_phone,emergency_contact_name:this.reservation_obj.emergency_contact_name,address:this.reservation_obj.address,amount_per_plan:this.reservation_obj.amount_per_plan,email:this.reservation_obj.email_id,range:{from:"",to:""}};var t=JSON.parse(e.reservation_obj.period);this.editable_reservation.range.from=t.lower,this.editable_reservation.range.to=t.upper?t.upper:"",this.$refs.editReservationModal.open()},openDeleteReservation:function(e){this.reservation_to_delete=e,this.$refs.deleteReservationModal.open()},deleteReservation:function(e){console.log(e);var t=this;u.a.axios.delete(l.a.urls.SITE_URL+"api/v1/reservation/"+e+"/").then(function(r){204==r.status&&(t.$emit("deleteReservation",e),t.$refs.deleteReservationModal.close(),t.$refs.editReservationModal.close())}).catch(function(e){t.error=e,console.log("Error",e)})},submitReservationForm:function(){var e=this;if(this.$v.editable_reservation.$touch(),this.$v.editable_reservation.$error)return void p.Toast.create("Please review fields again.");var t=_()(e.editable_reservation.range.from),r=_()(e.editable_reservation.range.to);if("DA"==this.editable_reservation.plan&&isNaN(t.diff(r,"days")))return void p.Toast.create("To Date cant be blank for Daily Plan.");if("DA"==this.editable_reservation.plan&&Math.abs(t.diff(r,"days"))>30)return void p.Toast.create("Daily plan can't be more than 30 days");var n={name:this.editable_reservation.name,phone_number:this.editable_reservation.phone_number,email_id:this.editable_reservation.email,deposit_amount:this.editable_reservation.deposit_amount,job:this.editable_reservation.job,secondary_phone:this.editable_reservation.secondary_phone,emergency_contact_name:this.editable_reservation.emergency_contact_name,address:this.editable_reservation.address,amount_per_plan:this.editable_reservation.amount_per_plan,plan:this.editable_reservation.plan,status:"act",period:function(){var t=e.editable_reservation.range.from,r=null;if(""!=e.editable_reservation.range.to)var r=e.editable_reservation.range.to;var n={lower:t,upper:r,bounds:"[)"};return i()(n)}()};u.a.axios.patch(l.a.urls.SITE_URL+"api/v1/reservation/"+e.editable_reservation.id+"/",n).then(function(t){null!=t.data&&(console.log("success"),e.reservation_obj=t.data,e.$refs.editReservationModal.close())}).catch(function(t){if(e.error=t,t.response.data.non_field_errors){var r="";for(var n in t.response.data.non_field_errors)r+=t.response.data.non_field_errors[n]+"\n";p.Toast.create(r)}})},get_from_to:function(e){var e=JSON.parse(e);if(e.upper)var t=_()(e.upper).format("DD/MM/YY");else var t="Unknown";if(e.lower)var r=_()(e.lower).format("DD/MM/YY");else var r="Unknown";return r+" - "+t},change_status:function(e){var t=this;u.a.axios.patch(l.a.urls.SITE_URL+"api/v1/reservation/"+t.reservation_obj.pk+"/",{status:e}).then(function(e){null!=e.data&&(t.reservation_obj=e.data)}).catch(function(e){if(t.error=e,e.response.data.non_field_errors){var r="";for(var n in e.response.data.non_field_errors)r+=e.response.data.non_field_errors[n]+"\n";p.Toast.create(r)}})}}}},305:function(e,t,r){t=e.exports=r(225)(),t.push([e.i,".border[data-v-0164bd48]{border:1px solid #ccc;margin-bottom:3px}",""])},306:function(e,t,r){var n=r(305);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(226)("51a8ea7e",n,!0)},308:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"border reserve_item",class:{open:e.show_extras}},[r("div",{staticClass:"item-content"},[r("div",{staticClass:"row reserve_card",on:{click:function(t){e.toggle()}}},[r("div",{staticClass:"reserve_left"},[r("div",{staticClass:"reserv_time"},[e._v(e._s(e.reservation_obj.room_name)),e.reservation_obj.room_inner_name?r("span",[e._v(" - "+e._s(e.reservation_obj.room_inner_name))]):e._e()]),e._v(" "),r("div",{staticClass:"reserv_plan"},[e._v("Plan: "+e._s(e.get_plan(e.reservation_obj.plan)))])]),e._v(" "),r("div",{staticClass:"reserve_right"},[r("div",{staticClass:"bar"}),e._v(" "),r("div",{staticClass:"reserv_time ellipsis"},[e._v(e._s(e.reservation_obj.name))]),e._v(" "),r("div",{staticClass:"reserv_plan"},[e._v(e._s(e.get_from_to(e.reservation_obj.period)))])]),e._v(" "),r("a",{staticClass:"call_btn text-white",attrs:{href:"tel:"+e.reservation_obj.phone_number}},[r("i",{staticClass:"on-center"},[e._v("call")])])]),e._v(" "),r("div",{staticClass:"justify-around reserv_details"},[r("div",{staticClass:"amt_box_wrap"},[r("div",{staticClass:"amt_box"},[e._v("Amount Per "+e._s("MO"==e.reservation_obj.plan?"Month":"Day")+": "+e._s(e.reservation_obj.amount_per_plan))]),e._v(" "),r("div",{staticClass:"amt_box"},[e._v("Amount to Pay: "+e._s(e.reservation_obj.amount_to_pay))])]),e._v(" "),r("div",{staticClass:"row justify-between"},[r("button",{staticClass:"primary btn",on:{click:function(t){e.openModal()}}},[e._v("Edit")]),e._v(" "),!e.show_status_buttons||"pend"!=e.status&&"act"!=e.status?e._e():r("button",{staticClass:"primary btn",on:{click:function(t){e.change_status("chkd")}}},[e._v("Check-In")]),e._v(" "),!e.show_status_buttons||"pend"!=e.status&&"act"!=e.status?e._e():r("button",{staticClass:"negative btn cancel",on:{click:function(t){e.change_status("canc")}}},[e._v("Cancel Booking")]),e._v(" "),e.show_payments_button?r("button",{staticClass:"primary btn",on:{click:function(t){e.$refs.paymentListModal.openPaymentListModal()}}},[e._v("See all Payments")]):e._e()])])]),e._v(" "),r("q-modal",{ref:"editReservationModal",attrs:{"content-css":{minWidth:"80vw",minHeight:"80vh"}}},[r("q-layout",[r("div",{staticClass:"toolbar",slot:"header"},[r("button",{on:{click:function(t){e.$refs.editReservationModal.close()}}},[r("i",[e._v("arrow_back")])]),e._v(" "),r("q-toolbar-title",{attrs:{padding:1}},[e._v("\n            Edit Reservation\n          ")])],1),e._v(" "),r("div",{staticClass:"layout-view layout-padding"},[r("div",{staticClass:"floating-label"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.editable_reservation.name,expression:"editable_reservation.name"}],staticClass:"full-width",attrs:{required:""},domProps:{value:e.editable_reservation.name},on:{input:[function(t){t.target.composing||(e.editable_reservation.name=t.target.value)},function(t){e.$v.editable_reservation.name.$touch()}]}}),e._v(" "),r("label",[e._v("Name")])]),e._v(" "),e.$v.editable_reservation.name.required?e._e():r("span",{staticClass:"form-error-message row"},[e._v("Name is required")]),e._v(" "),r("div",{staticClass:"floating-label"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.editable_reservation.phone_number,expression:"editable_reservation.phone_number"}],staticClass:"full-width",attrs:{type:"number",required:""},domProps:{value:e.editable_reservation.phone_number},on:{input:[function(t){t.target.composing||(e.editable_reservation.phone_number=t.target.value)},function(t){e.$v.editable_reservation.phone_number.$touch()}],blur:function(t){e.$forceUpdate()}}}),e._v(" "),r("label",[e._v("Phone Number")])]),e._v(" "),e.$v.editable_reservation.phone_number.required&&e.$v.editable_reservation.phone_number.minLength&&e.$v.editable_reservation.phone_number.maxLength?e._e():r("span",{staticClass:"form-error-message row"},[e._v("Enter valid 10-digit Mobile Number")]),e._v(" "),r("div",{staticClass:"floating-label"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.editable_reservation.email,expression:"editable_reservation.email"}],staticClass:"full-width",attrs:{required:""},domProps:{value:e.editable_reservation.email},on:{input:function(t){t.target.composing||(e.editable_reservation.email=t.target.value)}}}),e._v(" "),r("label",[e._v("Email")])]),e._v(" "),e.$v.editable_reservation.email.email?e._e():r("span",{staticClass:"form-error-message row"},[e._v("Please enter valid email.")]),e._v(" "),r("div",{staticClass:"row"},[r("span",{staticClass:"width-1of3"},[e._v("Plan")]),e._v(" "),r("label",{staticClass:"width-1of3"},[r("q-radio",{attrs:{val:"DA"},model:{value:e.editable_reservation.plan,callback:function(t){e.editable_reservation.plan=t},expression:"editable_reservation.plan"}}),e._v("\n              Daily\n            ")],1),e._v(" "),r("label",{staticClass:"width-1of3"},[r("q-radio",{attrs:{val:"MO"},model:{value:e.editable_reservation.plan,callback:function(t){e.editable_reservation.plan=t},expression:"editable_reservation.plan"}}),e._v("\n              Monthly\n            ")],1)]),e._v(" "),e.$v.editable_reservation.plan.required?e._e():r("span",{staticClass:"form-error-message row"},[e._v("Plan is required")]),e._v(" "),r("div",{staticClass:"floating-label"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.editable_reservation.amount_per_plan,expression:"editable_reservation.amount_per_plan"}],staticClass:"full-width",attrs:{type:"number",required:""},domProps:{value:e.editable_reservation.amount_per_plan},on:{input:function(t){t.target.composing||(e.editable_reservation.amount_per_plan=t.target.value)},blur:function(t){e.$forceUpdate()}}}),e._v(" "),r("label",[e._v("Amount per plan")])]),e._v(" "),e.$v.editable_reservation.amount_per_plan.required&&e.$v.editable_reservation.amount_per_plan.numeric?e._e():r("span",{staticClass:"form-error-message row"},[e._v("Please enter valid amount.")]),e._v(" "),r("div",{staticClass:"floating-label"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.editable_reservation.deposit_amount,expression:"editable_reservation.deposit_amount"}],staticClass:"full-width",attrs:{type:"number",required:""},domProps:{value:e.editable_reservation.deposit_amount},on:{input:function(t){t.target.composing||(e.editable_reservation.deposit_amount=t.target.value)},blur:function(t){e.$forceUpdate()}}}),e._v(" "),r("label",[e._v("Deposit Amount")])]),e._v(" "),e.$v.editable_reservation.deposit_amount.numeric?e._e():r("span",{staticClass:"form-error-message row"},[e._v("Please enter valid amount.")]),e._v(" "),r("div",[e._v("From Date and To Date")]),e._v(" "),r("div",{staticClass:"row"},["DA"==e.editable_reservation.plan?r("q-datetime-range",{staticClass:"full-width",attrs:{type:"datetime"},on:{input:function(t){e.$v.editable_reservation.range.$touch()}},model:{value:e.editable_reservation.range,callback:function(t){e.editable_reservation.range=t},expression:"editable_reservation.range"}}):r("q-datetime-range",{staticClass:"full-width",attrs:{type:"date"},on:{input:function(t){e.$v.editable_reservation.range.$touch()}},model:{value:e.editable_reservation.range,callback:function(t){e.editable_reservation.range=t},expression:"editable_reservation.range"}})],1),e._v(" "),e.$v.editable_reservation.range.from.required?e._e():r("span",{staticClass:"form-error-message row"},[e._v("From date is required")]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.show_extra_fields,expression:"show_extra_fields"}]},[r("div",{staticClass:"floating-label"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.editable_reservation.job,expression:"editable_reservation.job"}],staticClass:"full-width",attrs:{type:"text",required:""},domProps:{value:e.editable_reservation.job},on:{input:function(t){t.target.composing||(e.editable_reservation.job=t.target.value)}}}),e._v(" "),r("label",[e._v("Job")])]),e._v(" "),r("div",{staticClass:"floating-label"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.editable_reservation.secondary_phone,expression:"editable_reservation.secondary_phone"}],staticClass:"full-width",attrs:{type:"number",required:""},domProps:{value:e.editable_reservation.secondary_phone},on:{input:function(t){t.target.composing||(e.editable_reservation.secondary_phone=t.target.value)},blur:function(t){e.$forceUpdate()}}}),e._v(" "),r("label",[e._v("Emergency Phone")])]),e._v(" "),e.$v.editable_reservation.secondary_phone.minLength&&e.$v.editable_reservation.secondary_phone.maxLength?e._e():r("span",{staticClass:"form-error-message row"},[e._v("Enter valid 10-digit Mobile Number")]),e._v(" "),r("div",{staticClass:"floating-label"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.editable_reservation.emergency_contact_name,expression:"editable_reservation.emergency_contact_name"}],staticClass:"full-width",attrs:{type:"text",required:""},domProps:{value:e.editable_reservation.emergency_contact_name},on:{input:function(t){t.target.composing||(e.editable_reservation.emergency_contact_name=t.target.value)}}}),e._v(" "),r("label",[e._v("Emergency Contact Name")])]),e._v(" "),r("div",{staticClass:"floating-label"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.editable_reservation.address,expression:"editable_reservation.address"}],staticClass:"full-width",attrs:{type:"text",required:""},domProps:{value:e.editable_reservation.address},on:{input:function(t){t.target.composing||(e.editable_reservation.address=t.target.value)}}}),e._v(" "),r("label",[e._v("Address")])])]),e._v(" "),r("br"),e._v(" "),r("p",{staticClass:"text-secondary",on:{click:function(t){e.show_extra_fields=!e.show_extra_fields}}},[e.show_extra_fields?r("span",[e._v("Show Less... "),r("i",[e._v("keyboard_arrow_up")])]):r("span",[e._v("Show More... "),r("i",[e._v("keyboard_arrow_down")])])]),e._v(" "),r("div",{staticClass:"row"},[r("button",{staticClass:"primary width-1of2 m10",on:{click:function(t){e.submitReservationForm()}}},[e._v("Save")]),e._v(" "),r("button",{staticClass:"tertiary width-1of2 m10",on:{click:function(t){e.$refs.editReservationModal.close()}}},[e._v("Cancel")])]),e._v(" "),r("button",{staticClass:"negative full-width",on:{click:function(t){e.openDeleteReservation(e.editable_reservation.id)}}},[e._v("Delete Reservation")])])])],1),e._v(" "),r("q-modal",{ref:"deleteReservationModal",attrs:{position:"bottom","content-css":{padding:"20px"}}},[r("p",[e._v("Are you sure you want to Delete this Reservation ?")]),e._v(" "),r("div",{staticClass:"row"},[r("button",{staticClass:"negative width-1of2 m10",on:{click:function(t){e.deleteReservation(e.reservation_to_delete)}}},[e._v("Delete")]),e._v(" "),r("button",{staticClass:"tertiary width-1of2 m10",on:{click:function(t){e.$refs.deleteReservationModal.close()}}},[e._v("Cancel")])])]),e._v(" "),e.reservation_obj?r("PaymentListModal",{ref:"paymentListModal",attrs:{paymentlist:e.reservation_obj.reservation_payment}}):e._e()],1)},staticRenderFns:[]}}});