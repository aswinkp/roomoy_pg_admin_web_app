webpackJsonp([2,14],{233:function(e,t,a){a(329);var o=a(158)(a(284),a(341),null,null);e.exports=o.exports},236:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a(237).withParams;t.default=o},237:function(e,t,a){"use strict";function o(e){return("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}function r(e,t){var a=new e({data:{pending:!0,value:!1}});return t.then(function(e){a.pending=!1,a.value=e},function(e){throw a.pending=!1,a.value=!1,e}),a.__isVuelidateAsyncVm=!0,a}function n(e){this.dirty=e;var t=this.proxy,a=e?"$touch":"$reset";this.nestedKeys.forEach(function(e){t[e][a]()})}function i(e){if(b)return b;for(var t=e.constructor;t.super;)t=t.super;return b=t,t}function s(e){e.mixin(y)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=t.validationMixin=t.Vuelidate=void 0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},u=a(239),c=function(e,t,a){return e.reduce(function(e,o){return e[a?a(o):o]=t(o),e},{})},d=function(e,t,a,o){if("function"==typeof a)return a.call(e,t,o);a=Array.isArray(a)?a:a.split(".");for(var r=0;r<a.length;r++){if(!t||"object"!=typeof t)return o;t=t[a[r]]}return void 0===t?o:t},_={$invalid:function(){var e=this.proxy;return this.nestedKeys.some(function(t){return e[t].$invalid})||this.ruleKeys.some(function(t){return!e[t]})},$dirty:function(){if(this.dirty)return!0;if(0===this.nestedKeys.length)return!1;var e=this.proxy;return this.nestedKeys.every(function(t){return e[t].$dirty})},$error:function(){return!this.$pending&&this.$dirty&&this.$invalid},$pending:function(){var e=this,t=this.proxy;return this.nestedKeys.some(function(e){return t[e].$pending})||this.ruleKeys.some(function(t){return e.getRef(t).$pending})},$params:function(){var e=this,t=this.validations;return l({},c(this.nestedKeys,function(e){return t[e]&&t[e].$params||null}),c(this.ruleKeys,function(t){return e.getRef(t).$params}))}},v={$touch:function(){n.call(this,!0)},$reset:function(){n.call(this,!1)},$flattenParams:function(){var e=this.proxy,t=[];for(var a in this.$params)if(this.isNested(a)){for(var o=e[a].$flattenParams(),r=0;r<o.length;r++)o[r].path.unshift(a);t=t.concat(o)}else t.push({path:[],name:a,params:this.$params[a]});return t}},f=Object.keys(_),p=Object.keys(v),m=null,h=function(e){if(m)return m;var t=e.extend({props:["rule","model","parentModel","rootModel"],methods:{runRule:function(t){(0,u.pushParams)();var a=this.rule.call(this.rootModel,this.model,t),n=o(a)?r(e,a):a,i=(0,u.popParams)();return{output:n,params:i&&i.$sub?i.$sub.length>1?i:i.$sub[0]:null}}},computed:{run:function(){var e=this,t=this.parentModel;if(Array.isArray(t)&&t.__ob__){var a=t.__ob__.dep;a.depend();var o=a.constructor.target;if(!this._indirectWatcher){var r=o.constructor;this._indirectWatcher=new r(this.rootModel,function(){return e.runRule(t)},null,{lazy:!0})}if(!this._indirectWatcher.dirty&&this._lastModel===this.model)return this._indirectWatcher.depend(),o.value;this._lastModel=this.model,this._indirectWatcher.evaluate(),this._indirectWatcher.depend()}return this._indirectWatcher?this._indirectWatcher.value:this.runRule(t)},$params:function(){return this.run.params},proxy:function(){var e=this.run.output;return e.__isVuelidateAsyncVm?!!e.value:!!e},$pending:function(){var e=this.run.output;return!!e.__isVuelidateAsyncVm&&e.pending}},render:function(e){return null}}),a=e.extend({data:function(){return{dirty:!1}},mounted:function(){this._watcher.lazy=!0},props:["validations","model","prop","parentModel","rootModel"],methods:l({},v,{getRef:function(e){return this._watcher.dirty&&this._watcher.evaluate(),this.$refs[e]},isNested:function(e){return"function"!=typeof this.validations[e]}}),computed:l({},_,{nestedKeys:function(){return this.keys.filter(this.isNested)},ruleKeys:function(){var e=this;return this.keys.filter(function(t){return!e.isNested(t)})},keys:function(){return Object.keys(this.validations)},proxy:function(){var e=this,t=c(this.keys,function(t){return{enumerable:!0,configurable:!1,get:function(){return e.getRef(t).proxy}}}),a=c(f,function(t){return{enumerable:!0,configurable:!1,get:function(){return e[t]}}}),o=c(p,function(t){return{enumerable:!1,configurable:!1,get:function(){return e[t]}}});return Object.defineProperties({},l({},t,a,o))}}),render:function(e){var t=this;return e("div",[this.nestedKeys.map(function(a){return s(e,t,a)}),this.ruleKeys.map(function(a){return b(e,t,a)})])}}),n=a.extend({methods:{isNested:function(e){return void 0!==this.validations[e]()},getRef:function(e){var t=this;return{get proxy(){return t.validations[e]()||!1}}}},render:function(){return null}}),i=a.extend({computed:{keys:function(){return Object.keys(this.model)},tracker:function(){var e=this,t=this.validations.$trackBy;return t?function(a){return""+d(e.rootModel,e.model[a],t)}:function(e){return""+e}}},methods:{isNested:function(){return!0},getRef:function(e){return this._watcher.dirty&&this._watcher.evaluate(),this.$refs[this.tracker(e)]}},render:function(e){return e("div",h(e,this))}}),s=function(e,t,o){if("$params"===o)return null;if("$each"===o)return e(i,{key:o,ref:o,attrs:{validations:t.validations[o],parentModel:t.parentModel,prop:o,model:t.model,rootModel:t.rootModel}});var r=t.validations[o];if(Array.isArray(r)){var s=t.rootModel;return e(n,{key:o,ref:o,attrs:{validations:c(r,function(e){return function(){return d(s,s.$v,e)}},function(e){return Array.isArray(e)?e.join("."):e}),parentModel:null,prop:o,model:null,rootModel:s}})}return e(a,{key:o,ref:o,attrs:{validations:r,parentModel:t.model,prop:o,model:t.model[o],rootModel:t.rootModel}})},h=function(e,t){var o=t.validations,r=l({},o);delete r.$trackBy;var n={};return t.keys.map(function(o){var i=t.tracker(o);return n.hasOwnProperty(i)?null:(n[i]=!0,e(a,{key:i,ref:i,attrs:{validations:r,prop:o,parentModel:t.model,model:t.model[o],rootModel:t.rootModel}}))})},b=function(e,a,o){return e(t,{key:o,ref:o,attrs:{rule:a.validations[o],parentModel:a.parentModel,model:a.model,rootModel:a.rootModel}})};return m=a},b=null,g=function(e,t){var a=i(e),o=h(a),r=new a({render:function(a){return a(o,{ref:"$v",attrs:{validations:"function"==typeof t?t.call(e):t,parentModel:null,prop:"$v",model:e,rootModel:e}})}});return r.$mount(),r},y={beforeCreate:function(){var e=this,t=this.$options;t.validations&&(t.computed||(t.computed={}),t.computed.$v=function(){return e._vuelidate.$refs.$v.proxy})},created:function(){var e=this.$options.validations;e&&(this._vuelidate=g(this,e))},beforeDestroy:function(){this._vuelidate&&(this._vuelidate.$destroy(),this._vuelidate=null)}};t.Vuelidate=s,t.validationMixin=y,t.withParams=u.withParams,t.default=s},238:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(236),n=o(r);t.default=(0,n.default)({type:"required"},function(e){return Array.isArray(e)?!!e.length:void 0!==e&&null!==e&&!!String(e).length})},239:function(e,t,a){"use strict";function o(){null!==d&&c.push(d),t.target=d={}}function r(){var e=d,a=t.target=d=c.pop()||null;return a&&(Array.isArray(a.$sub)||(a.$sub=[]),a.$sub.push(e)),e}function n(e){if("object"!=typeof e||Array.isArray(e))throw new Error("params must be an object");t.target=d=u({},d,e)}function i(e,t){return s(function(a){return function(){a(e);for(var o=arguments.length,r=Array(o),n=0;n<o;n++)r[n]=arguments[n];return t.apply(this,r)}})}function s(e){var t=e(n);return function(){o();try{for(var e=arguments.length,a=Array(e),n=0;n<e;n++)a[n]=arguments[n];return t.apply(this,a)}finally{r()}}}function l(e,t){return"object"==typeof e&&void 0!==t?i(e,t):s(e)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e};t.pushParams=o,t.popParams=r,t.withParams=l;var c=[],d=t.target=null;t._setTarget=function(e){t.target=d=e}},240:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(236),n=o(r);t.default=(0,n.default)({type:"alpha"},function(e){return void 0===e||null===e||""===e||/^[a-zA-Z]*$/.test(e)})},241:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(236),n=o(r);t.default=(0,n.default)({type:"alphaNum"},function(e){return void 0===e||null===e||""===e||/^[a-zA-Z0-9]*$/.test(e)})},242:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(236),n=o(r);t.default=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,n.default)({type:"and"},function(){for(var e=this,a=arguments.length,o=Array(a),r=0;r<a;r++)o[r]=arguments[r];return t.length>0&&t.reduce(function(t,a){return t&&a.apply(e,o)},!0)})}},243:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(238),n=o(r),i=a(236),s=o(i);t.default=function(e,t){return(0,s.default)({type:"between",min:e,max:t},function(a){return!(0,n.default)(a)||!/\s/.test(a)&&Number(e)<=a&&Number(t)>=a})}},244:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(236),n=o(r);t.default=(0,n.default)({type:"email"},function(e){return void 0===e||null===e||""===e||/(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/.test(e)})},245:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.and=t.or=t.sameAs=t.required=t.minLength=t.maxLength=t.email=t.between=t.numeric=t.alphaNum=t.alpha=void 0;var r=a(240),n=o(r),i=a(241),s=o(i),l=a(248),u=o(l),c=a(243),d=o(c),_=a(244),v=o(_),f=a(246),p=o(f),m=a(247),h=o(m),b=a(238),g=o(b),y=a(250),w=o(y),C=a(249),M=o(C),$=a(242),k=o($);t.alpha=n.default,t.alphaNum=s.default,t.numeric=u.default,t.between=d.default,t.email=v.default,t.maxLength=p.default,t.minLength=h.default,t.required=g.default,t.sameAs=w.default,t.or=M.default,t.and=k.default},246:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(236),n=o(r);t.default=function(e){return(0,n.default)({type:"maxLength",max:e},function(t){return Array.isArray(t)?0===t.length||t.length<=e:void 0===t||null===t||(""===t||String(t).length<=e)})}},247:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(236),n=o(r);t.default=function(e){return(0,n.default)({type:"minLength",min:e},function(t){return Array.isArray(t)?0===t.length||t.length>=e:void 0===t||null===t||(""===t||String(t).length>=e)})}},248:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(236),n=o(r);t.default=(0,n.default)({type:"numeric"},function(e){return void 0===e||null===e||""===e||/^[0-9]*$/.test(e)})},249:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(236),n=o(r);t.default=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,n.default)({type:"or"},function(){for(var e=this,a=arguments.length,o=Array(a),r=0;r<a;r++)o[r]=arguments[r];return t.length>0&&t.reduce(function(t,a){return t||a.apply(e,o)},!1)})}},250:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(236),n=o(r);t.default=function(e){var t={type:"sameAs",eq:e};return(0,n.default)(t,function(t,a){return t===("function"==typeof e?e.call(this,a):a[e])})}},252:function(e,t,a){e.exports={default:a(253),__esModule:!0}},253:function(e,t,a){var o=a(7),r=o.JSON||(o.JSON={stringify:JSON.stringify});e.exports=function(e){return r.stringify.apply(r,arguments)}},254:function(e,t){t.f={}.propertyIsEnumerable},256:function(e,t){t.f=Object.getOwnPropertySymbols},284:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a(252),r=a.n(o),n=a(288),i=a.n(n),s=a(24),l=a(0),u=a.n(l),c=a(8),d=a(237),_=a.n(d),v=a(245),f=(a.n(v),a(1));a.n(f);c.a.use(_.a),t.default={props:{denormalized_beds:{type:Array,required:!0},selected_bed:{type:Object,required:!0}},beforeMount:function(){var e=this;f.Loading.show(),c.a.axios.get(s.a.urls.SITE_URL+"api/v1/pg/"+this.$route.params.id+"/").then(function(t){if(null!=t.data){var a=[],o=t.data;e.selected_pg=t.data,o.rooms_in_pg.forEach(function(e){e.beds_in_room.forEach(function(t){var t={pg_id:o.pk,pg_name:o.name,group_id:e.group,floor:e.floor,room_id:e.pk,room_name:e.name,bed_id:t.pk,bed_name:t.name,bed_status:t.status};a.push(t)})}),e.$emit("denormalizedBedsReset",a)}c.a.axios.get(s.a.urls.SITE_URL+"api/v1/reservation-payment/?pg="+e.$route.params.id).then(function(t){null!=t.data&&e.denormalized_beds.forEach(function(a){var o=t.data.filter(function(e){return a.bed_id==e.bed}),r={};i()(r,a),o.length>0?(r.current_reservation=o[0],r.is_paid=o[0].is_paid,r.is_vacant=!1):(r.is_paid=null,r.is_vacant=!0,r.current_reservation=null),e.bed_reservations.push(r)}),f.Loading.hide()}).catch(function(t){e.error=t,f.Loading.hide(),console.log("Error",t)}),e.loaded=!0}).catch(function(t){e.error=t,e.loaded=!0,console.log("Error",t)})},data:function(){return{selected_pg:{},bed_reservations:[],upcoming_reservations:[],is_paid:"false",is_vacant:"true",selected_reservation:"",editable_reservation:{name:"",email:"",phone_number:"",plan:"",range:{from:"",to:""}},reservation_to_delete:null,custom_alert_message:"",selected_rooms_for_message:[]}},validations:{editable_reservation:{name:{required:v.required},email:{email:v.email},phone_number:{required:v.required,numeric:v.numeric,minLength:a.i(v.minLength)(10),maxLength:a.i(v.maxLength)(10)},plan:{required:v.required},range:{from:{required:v.required}}},custom_alert_message:{required:v.required,maxLength:a.i(v.maxLength)(120)}},computed:{selectOptions:function(){var e=[];this.pg_detail.forEach(function(t){t.rooms.forEach(function(t){e.push({label:t.room_name,value:t.room_id})})});return e},pg_detail:function(){var e=this,t=e.bed_reservations.reduce(function(t,a){if(a.pg_id==e.selected_pg.pk){if(!(a.floor in t)){var o={paid_count:0,occupied_count:0,vacant_count:0,total_beds:0,rooms:[],floor:a.floor};t.push(t[a.floor]=o)}if(t[a.floor].total_beds+=1,a.is_vacant?t[a.floor].vacant_count+=1:(t[a.floor].occupied_count+=1,a.is_paid&&(t[a.floor].paid_count+=1)),!(a.room_id in t[a.floor].rooms)){var r={paid_count:0,occupied_count:0,vacant_count:0,total_beds:0,room_id:a.room_id,room_name:a.room_name,beds:[]};t[a.floor].rooms[a.room_id]=r}t[a.floor].rooms[a.room_id].total_beds+=1,a.is_vacant?t[a.floor].rooms[a.room_id].vacant_count+=1:(t[a.floor].rooms[a.room_id].occupied_count+=1,a.is_paid&&(t[a.floor].rooms[a.room_id].paid_count+=1)),t[a.floor].rooms[a.room_id].beds.push(a)}return t},[]),a=[];return t.forEach(function(e){var t={occupied_count:e.occupied_count,paid_count:e.paid_count,total_beds:e.total_beds,vacant_count:e.vacant_count,floor:e.floor,rooms:[]};e.rooms.forEach(function(e){e&&(e.beds.sort(function(e,t){return t.bed_name-e.bed_name}),t.rooms.push(e))}),a.push(t)}),a},vacant_in_pg_detail:function(){return this.pg_detail.reduce(function(e,t){return e+t.vacant_count},0)},total_beds_in_pg_detail:function(){return this.bed_reservations.length},paid_in_pg_detail:function(){return this.pg_detail.reduce(function(e,t){return e+t.paid_count},0)},paid_pg_detail:function(){var e=this,t=e.bed_reservations.reduce(function(t,a){if(a.pg_id==e.selected_pg.pk&&a.is_paid==("true"==e.is_paid)){if(!(a.floor in t)){var o={paid_count:0,occupied_count:0,vacant_count:0,total_beds:0,rooms:[],floor:a.floor};t.push(t[a.floor]=o)}if(t[a.floor].total_beds+=1,a.is_vacant?t[a.floor].vacant_count+=1:(t[a.floor].occupied_count+=1,a.is_paid&&(t[a.floor].paid_count+=1)),!(a.room_id in t[a.floor].rooms)){var r={paid_count:0,occupied_count:0,vacant_count:0,total_beds:0,room_id:a.room_id,room_name:a.room_name,beds:[]};t[a.floor].rooms[a.room_id]=r}t[a.floor].rooms[a.room_id].total_beds+=1,a.is_vacant?t[a.floor].rooms[a.room_id].vacant_count+=1:(t[a.floor].rooms[a.room_id].occupied_count+=1,a.is_paid&&(t[a.floor].rooms[a.room_id].paid_count+=1)),t[a.floor].rooms[a.room_id].beds.push(a)}return t},[]),a=[];return t.forEach(function(e){var t={occupied_count:e.occupied_count,paid_count:e.paid_count,total_beds:e.total_beds,vacant_count:e.vacant_count,floor:e.floor,rooms:[]};e.rooms.forEach(function(e){e&&(e.beds.sort(function(e,t){return t.bed_name-e.bed_name}),t.rooms.push(e))}),a.push(t)}),a},vacant_pg_detail:function(){var e=this,t=e.bed_reservations.reduce(function(t,a){if(a.pg_id==e.selected_pg.pk&&a.is_vacant==("true"==e.is_vacant)){if(!(a.floor in t)){var o={paid_count:0,occupied_count:0,vacant_count:0,total_beds:0,rooms:[],floor:a.floor};t.push(t[a.floor]=o)}if(t[a.floor].total_beds+=1,a.is_vacant?t[a.floor].vacant_count+=1:(t[a.floor].occupied_count+=1,a.is_paid&&(t[a.floor].paid_count+=1)),!(a.room_id in t[a.floor].rooms)){var r={paid_count:0,occupied_count:0,vacant_count:0,total_beds:0,room_id:a.room_id,room_name:a.room_name,beds:[]};t[a.floor].rooms[a.room_id]=r}t[a.floor].rooms[a.room_id].total_beds+=1,a.is_vacant?t[a.floor].rooms[a.room_id].vacant_count+=1:(t[a.floor].rooms[a.room_id].occupied_count+=1,a.is_paid&&(t[a.floor].rooms[a.room_id].paid_count+=1)),t[a.floor].rooms[a.room_id].beds.push(a)}return t},[]),a=[];return t.forEach(function(e){var t={occupied_count:e.occupied_count,paid_count:e.paid_count,total_beds:e.total_beds,vacant_count:e.vacant_count,floor:e.floor,rooms:[]};e.rooms.forEach(function(e){e&&(e.beds.sort(function(e,t){return t.bed_name-e.bed_name}),t.rooms.push(e))}),a.push(t)}),a}},methods:{has_perm:function(e){return f.LocalStorage.get.item("permissions").indexOf(e)>-1},alert_unpaid:function(){var e={for_unpaid:!0,pg:this.selected_pg.pk};c.a.axios.post(s.a.urls.SITE_URL+"send-alert/",e).then(function(e){null!=e.data&&f.Toast.create("SMS sent: "+e.data.sms_count)}).catch(function(e){self.error=e,console.log(e.response),402==e.response.status&&f.Toast.create("Insufficient SMS Balance"),console.log("Error",e)})},send_custom_alert_message:function(){var e=this,t={pg:this.selected_pg.pk,custom_message:this.custom_alert_message,rooms:this.selected_rooms_for_message};if(this.$v.custom_alert_message.$touch(),this.$v.custom_alert_message.$error)return void f.Toast.create("Please review fields again.");c.a.axios.post(s.a.urls.SITE_URL+"send-alert/",t).then(function(t){null!=t.data&&(e.$refs.customMsgModal.close(),e.custom_alert_message="",e.selected_rooms_for_message=[],f.Toast.create("SMS sent: "+t.data.sms_count))}).catch(function(t){e.error=t,402==t.response.status&&f.Toast.create("Insufficient SMS Balance"),console.log("Error",t)})},get_color:function(e,t){return e/t>.7?"green_collapsible":e/t>.4?"yellow_collapsible":"red_collapsible"},openDeleteReservation:function(e){this.reservation_to_delete=e,this.$refs.deleteReservationModal.open()},deleteReservation:function(e){var t=this;c.a.axios.delete(s.a.urls.SITE_URL+"api/v1/reservation/"+this.reservation_to_delete+"/").then(function(e){if(204==e.status){var a=t.upcoming_reservations.filter(function(e){return e.pk!=t.reservation_to_delete});t.upcoming_reservations=a,t.$refs.deleteReservationModal.close(),t.$refs.editReservationModal.close()}}).catch(function(e){t.error=e,console.log("Error",e)})},push_to_reservation:function(e){this.selected_reservation=e,this.$refs.reservationDetails.open()},editReservation:function(e){this.editable_reservation={bed:e.bed,id:e.pk,name:e.name,phone_number:e.phone_number,plan:e.plan,status:"act",email:e.email_id,range:{from:"",to:""}};var t=JSON.parse(e.period);this.editable_reservation.range.from=t.lower,this.editable_reservation.range.to=t.upper?t.upper:"",this.$refs.editReservationModal.open()},submitReservationForm:function(){var e=this;if(this.$v.editable_reservation.$touch(),this.$v.editable_reservation.$error)return void f.Toast.create("Please review fields again.");var t=u()(e.editable_reservation.range.from),a=u()(e.editable_reservation.range.to);if("DA"==this.editable_reservation.plan&&isNaN(t.diff(a,"days")))return void f.Toast.create("To Date cant be blank for Daily Plan.");if("DA"==this.editable_reservation.plan&&Math.abs(t.diff(a,"days"))>30)return void f.Toast.create("Daily plan can't be more than 30 days");var o={name:this.editable_reservation.name,phone_number:this.editable_reservation.phone,email_id:this.editable_reservation.email,plan:this.editable_reservation.plan,status:"act",period:function(){var t=e.editable_reservation.range.from,a=null;if(""!=e.editable_reservation.range.to)var a=e.editable_reservation.range.to;var o={lower:t,upper:a,bounds:"[)"};return r()(o)}()};c.a.axios.patch(s.a.urls.SITE_URL+"api/v1/reservation/"+e.editable_reservation.id+"/",o).then(function(t){null!=t.data&&(e.get_upcoming_reservations(),e.editable_reservation={name:"",email:"",phone:"",plan:"",range:{from:"",to:""}},e.$refs.editReservationModal.close())}).catch(function(t){if(e.error=t,t.response.data.non_field_errors){var a="";for(var o in t.response.data.non_field_errors)a+=t.response.data.non_field_errors[o]+"\n";f.Toast.create(a)}})},push_to_customize_pg:function(){this.$router.push({name:"customize-pg",params:{id:this.selected_pg.pk}})},push_to_bed:function(e){this.$router.push({name:"bed",params:{id:e}})},get_upcoming_reservations:function(){var e=this;f.Loading.show(),c.a.axios.get(s.a.urls.SITE_URL+"api/v1/reservation/?pg="+e.$route.params.id+"&upcoming=true").then(function(t){null!=t.data&&(e.upcoming_reservations=t.data,e.$refs.upcomingReservationsModal.open()),f.Loading.hide()}).catch(function(t){e.error=t,f.Loading.hide(),console.log("Error",t)})},get_from_to:function(e){var e=JSON.parse(e);if(e.upper)var t=u()(e.upper).format("DD-MM-YYYY");else var t="Unknown";if(e.lower)var a=u()(e.lower).format("DD-MM-YYYY");else var a="Unknown";return a+" to "+t}}}},288:function(e,t,a){e.exports={default:a(295),__esModule:!0}},295:function(e,t,a){a(305),e.exports=a(7).Object.assign},301:function(e,t,a){"use strict";var o=a(163),r=a(256),n=a(254),i=a(161),s=a(166),l=Object.assign;e.exports=!l||a(26)(function(){var e={},t={},a=Symbol(),o="abcdefghijklmnopqrst";return e[a]=7,o.split("").forEach(function(e){t[e]=e}),7!=l({},e)[a]||Object.keys(l({},t)).join("")!=o})?function(e,t){for(var a=i(e),l=arguments.length,u=1,c=r.f,d=n.f;l>u;)for(var _,v=s(arguments[u++]),f=c?o(v).concat(c(v)):o(v),p=f.length,m=0;p>m;)d.call(v,_=f[m++])&&(a[_]=v[_]);return a}:l},305:function(e,t,a){var o=a(25);o(o.S+o.F,"Object",{assign:a(301)})},317:function(e,t,a){t=e.exports=a(222)(),t.push([e.i,".m10{margin:10px}.m3{margin:3px}",""])},329:function(e,t,a){var o=a(317);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);a(223)("d8ecfc20",o,!0)},341:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"toolbar",slot:"header"},[a("button",{staticClass:"hide-on-drawer-visible",on:{click:function(t){e.$emit("openDrawer")}}},[a("i",[e._v("menu")])]),e._v(" "),a("q-toolbar-title",{attrs:{padding:1}},[e._v("\n      RoomoY\n    ")]),e._v(" "),a("button",{on:{click:e.push_to_customize_pg}},[a("i",[e._v("edit")])]),e._v(" "),a("button",{staticClass:"right-drawer-opener",on:{click:function(t){e.$refs.rdrawer.open()}}},[a("i",[e._v("more_vert")])])],1),e._v(" "),a("q-drawer",{ref:"rdrawer",attrs:{"right-side":""}},[a("div",{staticClass:"list"},[e.has_perm("payrem")?a("div",{staticClass:"item",on:{click:e.alert_unpaid}},[a("i",{staticClass:"item-primary"},[e._v("inbox")]),e._v(" "),a("div",{staticClass:"item-content"},[e._v("\n        Alert Unpaid Tenants\n      ")])]):e._e(),e._v(" "),e.has_perm("cusnotif")?a("div",{staticClass:"item",on:{click:function(t){e.$refs.customMsgModal.open()}}},[a("i",{staticClass:"item-primary"},[e._v("send")]),e._v(" "),a("div",{staticClass:"item-content"},[e._v("\n        Custom Notifications\n      ")])]):e._e()])]),e._v(" "),a("div",{staticClass:"layout-padding"},[a("h6",[e._v(e._s(e.selected_pg.name))]),e._v(" "),e.selected_pg.rooms_in_pg<1?a("div",[e._v("You dont have any rooms in this PG. "),a("br"),e._v(" Click "),a("i",[e._v("edit")]),e._v(" icon above to get started.")]):a("div",{staticClass:"list item-delimiter scroll"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-content"},[a("div",{staticClass:"row"},[a("button",{staticClass:"primary width-1of2 m3",on:{click:function(t){e.$refs.vacantModal.open()}}},[e._v(e._s(e.vacant_in_pg_detail)),a("br"),e._v("Vacant")]),e._v(" "),a("button",{staticClass:"primary width-1of2 m3",on:{click:function(t){e.$refs.paidModal.open()}}},[e._v(e._s(e.total_beds_in_pg_detail-e.vacant_in_pg_detail-e.paid_in_pg_detail)),a("br"),e._v("Unpaid")])]),e._v(" "),a("div",{staticClass:"row"},[a("button",{staticClass:"primary full-width m3",on:{click:function(t){e.get_upcoming_reservations()}}},[e._v("Upcoming Reservations")])])])]),e._v(" "),a("div",[a("div",{staticClass:"list item-delimiter"},e._l(e.pg_detail,function(t){return a("q-collapsible",{key:t.floor,class:e.get_color(t.vacant_count,t.total_beds),attrs:{group:"floor",label:t.floor+" - Vacant: "+t.vacant_count+"/"+t.total_beds+" Paid: "+t.paid_count+"/"+(t.total_beds-t.vacant_count)}},[a("div",[a("div",{staticClass:"list item-delimiter"},e._l(t.rooms,function(t){return a("q-collapsible",{key:t.room_id,class:e.get_color(t.vacant_count,t.total_beds),attrs:{group:"room",label:t.room_name+" - Vacant: "+t.vacant_count+"/"+t.total_beds+" Paid: "+t.paid_count+"/"+(t.total_beds-t.vacant_count)}},e._l(t.beds,function(t,o){return a("div",{key:t.bed_id,staticClass:"card bg-white",on:{click:function(a){e.push_to_bed(t.bed_id)}}},[a("div",{staticClass:"card-content"},[a("div",{staticClass:"row"},[a("span",{staticClass:"width-1of5"},[e._v(e._s(o+1))]),e._v(" "),t.is_vacant?a("span",[a("i",{staticClass:"width-1of5 text-faded"},[e._v("local_hotel")]),e._v(" "),a("span",{staticClass:"width-3of5"},[e._v("Vacant")])]):a("span",[t.is_paid?a("span",[a("i",{staticClass:"width-1of5 text-positive"},[e._v("local_hotel")]),e._v(" "),a("span",{staticClass:"width-3of5"},[e._v("Occupied & Paid")])]):a("span",[a("i",{staticClass:"width-1of5 text-negative"},[e._v("local_hotel")]),e._v(" "),a("span",{staticClass:"width-3of5"},[e._v("Occupied & Not Paid")])])])])])])}))}))])])}))])])]),e._v(" "),a("q-modal",{ref:"customMsgModal",staticClass:"minimized",attrs:{"content-css":{padding:"10px"}}},[a("div",{staticClass:"floating-label"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.custom_alert_message,expression:"custom_alert_message"}],staticClass:"full-width",attrs:{required:""},domProps:{value:e.custom_alert_message},on:{input:function(t){t.target.composing||(e.custom_alert_message=t.target.value)}}}),e._v(" "),a("label",[e._v("Message")])]),e._v(" "),e.$v.custom_alert_message.required&&e.$v.custom_alert_message.maxLength?e._e():a("span",{staticClass:"form-error-message row"},[e._v("Message must be lessthan or equal to 120 chars")]),e._v(" "),a("div",{staticClass:"row"},[a("q-dialog-select",{staticClass:"full-width",attrs:{type:"checkbox",message:"Leave it blank to send to all",options:e.selectOptions,title:"Pick Rooms",label:"Pick Rooms"},model:{value:e.selected_rooms_for_message,callback:function(t){e.selected_rooms_for_message=t},expression:"selected_rooms_for_message"}})],1),e._v(" "),a("div",{staticClass:"row"},[a("button",{staticClass:"negative width-1of2 m3",on:{click:e.send_custom_alert_message}},[e._v("Send Message")]),e._v(" "),a("button",{staticClass:"tertiary width-1of2 m3",on:{click:function(t){e.$refs.customMsgModal.close()}}},[e._v("Cancel")])])]),e._v(" "),a("q-modal",{ref:"paidModal",attrs:{"content-css":{minWidth:"80vw",minHeight:"80vh"}}},[a("q-layout",[a("div",{staticClass:"toolbar",slot:"header"},[a("button",{on:{click:function(t){e.$refs.paidModal.close()}}},[a("i",[e._v("keyboard_arrow_left")])]),e._v(" "),a("q-toolbar-title",{attrs:{padding:1}},[e._v("\n            Paid/Unpaid\n          ")])],1),e._v(" "),a("div",{staticClass:"layout-view layout-padding"},[a("div",{staticClass:"text-center row"},[a("label",{staticClass:"width-1of2"},[a("q-radio",{attrs:{val:"true"},model:{value:e.is_paid,callback:function(t){e.is_paid=t},expression:"is_paid"}}),e._v("\n          Paid\n        ")],1),e._v(" "),a("label",{staticClass:"width-1of2"},[a("q-radio",{attrs:{val:"false"},model:{value:e.is_paid,callback:function(t){e.is_paid=t},expression:"is_paid"}}),e._v("\n          Unpaid\n        ")],1)]),a("br"),a("br"),e._v(" "),a("div",{staticClass:"list item-delimiter"},e._l(e.paid_pg_detail,function(t){return a("q-collapsible",{key:t.floor,attrs:{group:"floor",label:t.floor+" - Total: "+t.total_beds}},[a("div",[a("div",{staticClass:"list item-delimiter"},e._l(t.rooms,function(t){return a("q-collapsible",{key:t.room_id,attrs:{group:"room",label:t.room_name+" - Total: "+t.total_beds}},e._l(t.beds,function(t,o){return a("div",{key:t.bed_id,staticClass:"card bg-white",on:{click:function(a){e.push_to_bed(t.bed_id)}}},[a("div",{staticClass:"card-content"},[a("div",{staticClass:"row"},[a("span",{staticClass:"width-1of5"},[e._v(e._s(o+1))]),e._v(" "),t.is_vacant?a("span",[a("i",{staticClass:"width-1of5 text-faded"},[e._v("local_hotel")]),e._v(" "),a("span",{staticClass:"width-3of5"},[e._v("Vacant")])]):a("span",[t.is_paid?a("span",[a("i",{staticClass:"width-1of5 text-positive"},[e._v("local_hotel")]),e._v(" "),a("span",{staticClass:"width-3of5"},[e._v("Occupied & Paid")])]):a("span",[a("i",{staticClass:"width-1of5 text-negative"},[e._v("local_hotel")]),e._v(" "),a("span",{staticClass:"width-3of5"},[e._v("Occupied & Not Paid")])])])])])])}))}))])])}))])])],1),e._v(" "),a("q-modal",{ref:"vacantModal",attrs:{"content-css":{minWidth:"80vw",minHeight:"80vh"}}},[a("q-layout",[a("div",{staticClass:"toolbar",slot:"header"},[a("button",{on:{click:function(t){e.$refs.vacantModal.close()}}},[a("i",[e._v("keyboard_arrow_left")])]),e._v(" "),a("q-toolbar-title",{attrs:{padding:1}},[e._v("\n            Vacant/Occupied\n          ")])],1),e._v(" "),a("div",{staticClass:"layout-view layout-padding"},[a("div",{staticClass:"text-center row"},[a("label",{staticClass:"width-1of2"},[a("q-radio",{attrs:{val:"true"},model:{value:e.is_vacant,callback:function(t){e.is_vacant=t},expression:"is_vacant"}}),e._v("\n          Vacant\n        ")],1),e._v(" "),a("label",{staticClass:"width-1of2"},[a("q-radio",{attrs:{val:"false"},model:{value:e.is_vacant,callback:function(t){e.is_vacant=t},expression:"is_vacant"}}),e._v("\n          Occupied\n        ")],1)]),a("br"),a("br"),e._v(" "),a("div",{staticClass:"list item-delimiter"},e._l(e.vacant_pg_detail,function(t){return a("q-collapsible",{key:t.floor,attrs:{group:"floor",label:t.floor+" - Total: "+t.total_beds}},[a("div",[a("div",{staticClass:"list item-delimiter"},e._l(t.rooms,function(t){return a("q-collapsible",{key:t.room_id,attrs:{group:"room",label:t.room_name+" - Total: "+t.total_beds}},e._l(t.beds,function(t,o){return a("div",{key:t.bed_id,staticClass:"card bg-white",on:{click:function(a){e.push_to_bed(t.bed_id)}}},[a("div",{staticClass:"card-content"},[a("div",{staticClass:"row"},[a("span",{staticClass:"width-1of5"},[e._v(e._s(o+1))]),e._v(" "),t.is_vacant?a("span",[a("i",{staticClass:"width-1of5 text-faded"},[e._v("local_hotel")]),e._v(" "),a("span",{staticClass:"width-3of5"},[e._v("Vacant")])]):a("span",[t.is_paid?a("span",[a("i",{staticClass:"width-1of5 text-positive"},[e._v("local_hotel")]),e._v(" "),a("span",{staticClass:"width-3of5"},[e._v("Occupied & Paid")])]):a("span",[a("i",{staticClass:"width-1of5 text-negative"},[e._v("local_hotel")]),e._v(" "),a("span",{staticClass:"width-3of5"},[e._v("Occupied & Not Paid")])])])])])])}))}))])])}))])])],1),e._v(" "),a("q-modal",{ref:"upcomingReservationsModal",attrs:{"content-css":{minWidth:"80vw",minHeight:"80vh"}}},[a("q-layout",[a("div",{staticClass:"toolbar",slot:"header"},[a("button",{on:{click:function(t){e.$refs.upcomingReservationsModal.close()}}},[a("i",[e._v("keyboard_arrow_left")])]),e._v(" "),a("q-toolbar-title",{attrs:{padding:1}},[e._v("\n            Upcoming Reservations\n          ")])],1),e._v(" "),a("div",{staticClass:"layout-view"},[a("div",{staticClass:"list item-delimiter"},e._l(e.upcoming_reservations,function(t){return a("div",{staticClass:"item"},[a("div",{staticClass:"item-content has-secondary",on:{click:function(a){e.push_to_reservation(t)}}},[a("div",[e._v(e._s(t.name)+"\n                "),a("br"),e._v(" "+e._s(e.get_from_to(t.period))+"\n              ")])]),e._v(" "),a("i",{staticClass:"item-secondary",on:{click:function(a){e.editReservation(t)}}},[e._v("edit")])])}))])])],1),e._v(" "),a("q-modal",{ref:"reservationDetails",attrs:{"content-css":{minWidth:"80vw",minHeight:"80vh"}}},[a("q-layout",[a("div",{staticClass:"toolbar",slot:"header"},[a("button",{on:{click:function(t){e.$refs.reservationDetails.close()}}},[a("i",[e._v("keyboard_arrow_left")])]),e._v(" "),a("q-toolbar-title",{attrs:{padding:1}},[e._v("\n            Reservation Details\n          ")])],1),e._v(" "),e.selected_reservation?a("div",{staticClass:"layout-view layout-padding"},[e._v("\n        Name: "+e._s(e.selected_reservation.name)),a("br"),e._v("\n        Phone Number: "+e._s(e.selected_reservation.phone_number)),a("br"),e._v("\n        Email ID: "+e._s(e.selected_reservation.email_id)),a("br"),e._v("\n        Phone Number: "+e._s(e.selected_reservation.phone_number)),a("br"),e._v("\n        Period: "+e._s(e.get_from_to(e.selected_reservation.period))),a("br"),e._v("\n        Plan: "),"MO"==e.selected_reservation.plan?a("span",[e._v("Monthly")]):e._e(),"DA"==e.selected_reservation.plan?a("span",[e._v("Daily")]):e._e(),a("br"),e._v(" "),a("p",{staticClass:"caption"},[e._v("Payments")]),e._v(" "),a("div",{staticClass:"list"},e._l(e.selected_reservation.reservation_payment,function(t){return a("div",{staticClass:"item item-link"},[a("div",{staticClass:"item-content has-secondary"},[a("div",[e._v("Rs. "+e._s(t.amount)+"\n                "),a("br"),e._v(" Date: "+e._s(new Date(t.date).getDate())+"/"+e._s(new Date(t.date).getMonth()+1)+"/"+e._s(new Date(t.date).getFullYear())+"\n                "),a("br")])])])}))]):e._e()])],1),e._v(" "),a("q-modal",{ref:"editReservationModal",attrs:{"content-css":{minWidth:"80vw",minHeight:"80vh"}}},[a("q-layout",[a("div",{staticClass:"toolbar",slot:"header"},[a("button",{on:{click:function(t){e.$refs.editReservationModal.close()}}},[a("i",[e._v("keyboard_arrow_left")])]),e._v(" "),a("q-toolbar-title",{attrs:{padding:1}},[e._v("\n          Edit Reservation\n        ")])],1),e._v(" "),a("div",{staticClass:"layout-view layout-padding"},[a("div",{staticClass:"floating-label"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.editable_reservation.name,expression:"editable_reservation.name"}],staticClass:"full-width",attrs:{required:""},domProps:{value:e.editable_reservation.name},on:{input:[function(t){t.target.composing||(e.editable_reservation.name=t.target.value)},function(t){e.$v.editable_reservation.name.$touch()}]}}),e._v(" "),a("label",[e._v("Name")])]),e._v(" "),e.$v.editable_reservation.name.required?e._e():a("span",{staticClass:"form-error-message row"},[e._v("Name is required")]),e._v(" "),a("div",{staticClass:"floating-label"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.editable_reservation.phone_number,expression:"editable_reservation.phone_number"}],staticClass:"full-width",attrs:{type:"number",required:""},domProps:{value:e.editable_reservation.phone_number},on:{input:[function(t){t.target.composing||(e.editable_reservation.phone_number=t.target.value)},function(t){e.$v.editable_reservation.phone_number.$touch()}],blur:function(t){e.$forceUpdate()}}}),e._v(" "),a("label",[e._v("Phone Number")])]),e._v(" "),e.$v.editable_reservation.phone_number.required&&e.$v.editable_reservation.phone_number.minLength&&e.$v.editable_reservation.phone_number.maxLength?e._e():a("span",{staticClass:"form-error-message row"},[e._v("Enter valid 10-digit Mobile Number")]),e._v(" "),a("div",{staticClass:"floating-label"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.editable_reservation.email,expression:"editable_reservation.email"}],staticClass:"full-width",attrs:{required:""},domProps:{value:e.editable_reservation.email},on:{input:function(t){t.target.composing||(e.editable_reservation.email=t.target.value)}}}),e._v(" "),a("label",[e._v("Email")])]),e._v(" "),e.$v.editable_reservation.email.email?e._e():a("span",{staticClass:"form-error-message row"},[e._v("Please enter valid email.")]),e._v(" "),a("div",{staticClass:"row"},[a("span",{staticClass:"width-1of3"},[e._v("Plan")]),e._v(" "),a("label",{staticClass:"width-1of3"},[a("q-radio",{attrs:{val:"DA"},model:{value:e.editable_reservation.plan,callback:function(t){e.editable_reservation.plan=t},expression:"editable_reservation.plan"}}),e._v("\n            Daily\n          ")],1),e._v(" "),a("label",{staticClass:"width-1of3"},[a("q-radio",{attrs:{val:"MO"},model:{value:e.editable_reservation.plan,callback:function(t){e.editable_reservation.plan=t},expression:"editable_reservation.plan"}}),e._v("\n            Monthly\n          ")],1)]),e._v(" "),e.$v.editable_reservation.plan.required?e._e():a("span",{staticClass:"form-error-message row"},[e._v("Plan is required")]),e._v(" "),a("div",[e._v("From Date and To Date")]),e._v(" "),a("div",{staticClass:"row"},[a("q-datetime-range",{staticClass:"full-width",attrs:{type:"date"},on:{input:function(t){e.$v.editable_reservation.range.$touch()}},model:{value:e.editable_reservation.range,callback:function(t){e.editable_reservation.range=t},expression:"editable_reservation.range"}})],1),e._v(" "),e.$v.editable_reservation.range.from.required?e._e():a("span",{staticClass:"form-error-message row"},[e._v("From date is required")]),e._v(" "),a("div",{staticClass:"row"},[a("button",{staticClass:"primary width-1of2 m10",on:{click:function(t){e.submitReservationForm()}}},[e._v("Save")]),e._v(" "),a("button",{staticClass:"tertiary width-1of2 m10",on:{click:function(t){e.$refs.editReservationModal.close()}}},[e._v("Cancel")])]),e._v(" "),a("button",{staticClass:"negative full-width m10",on:{click:function(t){e.openDeleteReservation(e.editable_reservation.id)}}},[e._v("Delete Reservation")])])])],1),e._v(" "),a("q-modal",{ref:"deleteReservationModal",attrs:{position:"bottom","content-css":{padding:"20px"}}},[a("p",[e._v("Are you sure you want to Delete this Reservation ?")]),e._v(" "),a("div",{staticClass:"row"},[a("button",{staticClass:"negative width-1of2 m10",on:{click:function(t){e.deleteReservation(e.reservation_to_delete)}}},[e._v("Delete")]),e._v(" "),a("button",{staticClass:"tertiary width-1of2 m10",on:{click:function(t){e.$refs.deleteReservationModal.close()}}},[e._v("Cancel")])])])],1)},staticRenderFns:[]}}});