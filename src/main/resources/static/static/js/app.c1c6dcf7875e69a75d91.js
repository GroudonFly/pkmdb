webpackJsonp([16],{NHnr:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t("//Fk"),r=t.n(o),a=t("7+uW"),u={render:function(){var n=this.$createElement,e=this._self._c||n;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var i=t("VU/8")({name:"App"},u,!1,function(n){t("czYa")},null,null).exports,c=t("/ocq"),l=function(n){return t.e(4).then(function(){var e=[t("xJsL")];n.apply(null,e)}.bind(this)).catch(t.oe)};a.default.use(c.a);var p=new c.a({history:!1,saveScrollPosition:!0,suppressTransitionError:!0,routes:[{path:"/login",name:"login",component:l},{path:"/",name:"login",component:l},{path:"/",component:function(n){return Promise.all([t.e(0),t.e(3)]).then(function(){var e=[t("s6+2")];n.apply(null,e)}.bind(this)).catch(t.oe)},beforeEnter:function(n,e,t){var o=JSON.parse(window.localStorage.getItem("user")),r=JSON.parse(window.localStorage.getItem("role"));null!=o&&"管理员"===r?t():"管理员"!==r?(bus.$notify.error({title:"错误",message:"权限不足！"}),t("/login")):(bus.$notify.error({title:"错误",message:"请先登录！"}),t("/login"))},children:[{path:"/my",name:"my",component:function(n){return t.e(7).then(function(){var e=[t("NI5s")];n.apply(null,e)}.bind(this)).catch(t.oe)}},{path:"/handbook",name:"handbook",component:function(n){return t.e(13).then(function(){var e=[t("HE8R")];n.apply(null,e)}.bind(this)).catch(t.oe)}},{path:"/user",name:"user",component:function(n){return t.e(11).then(function(){var e=[t("jyJz")];n.apply(null,e)}.bind(this)).catch(t.oe)}},{path:"/bag",name:"bag",component:function(n){return t.e(9).then(function(){var e=[t("s9p+")];n.apply(null,e)}.bind(this)).catch(t.oe)}},{path:"/ball",name:"ball",component:function(n){return t.e(8).then(function(){var e=[t("XgdB")];n.apply(null,e)}.bind(this)).catch(t.oe)}},{path:"/more",name:"more",component:function(n){return t.e(14).then(function(){var e=[t("WxdE")];n.apply(null,e)}.bind(this)).catch(t.oe)}}]},{path:"/",component:function(n){return Promise.all([t.e(0),t.e(2)]).then(function(){var e=[t("72dh")];n.apply(null,e)}.bind(this)).catch(t.oe)},beforeEnter:function(n,e,t){null!=JSON.parse(window.localStorage.getItem("user"))?t():(bus.$notify.error({title:"错误",message:"请先登录！"}),t("/login"))},children:[{path:"/home",name:"home",component:function(n){return t.e(6).then(function(){var e=[t("cKhr")];n.apply(null,e)}.bind(this)).catch(t.oe)}},{path:"/shop",name:"shop",component:function(n){return t.e(10).then(function(){var e=[t("2tIc")];n.apply(null,e)}.bind(this)).catch(t.oe)}},{path:"/get",name:"get",component:function(n){return t.e(1).then(function(){var e=[t("jOw1")];n.apply(null,e)}.bind(this)).catch(t.oe)}},{path:"/mypokemon",name:"mypokemon",component:function(n){return Promise.all([t.e(0),t.e(12)]).then(function(){var e=[t("kgf6")];n.apply(null,e)}.bind(this)).catch(t.oe)}},{path:"/buyexp",name:"buyexp",component:function(n){return t.e(5).then(function(){var e=[t("PLXN")];n.apply(null,e)}.bind(this)).catch(t.oe)}}]}]}),s=t("zL8q"),h=t.n(s),f=(t("tvR6"),t("mtWM")),m=t.n(f);t.d(e,"postRequest",function(){return d}),t.d(e,"getRequest",function(){return w}),a.default.use(h.a),a.default.config.productionTip=!1,window.bus=new a.default,window.bus2=new a.default,window.bus=new a.default({el:"#app",router:p,template:"<App/>",components:{App:i}});var d=function(n,e){return m()({method:"post",url:n,data:e,dataType:"json",transformRequest:[function(n){var e="";for(var t in n)e+=encodeURIComponent(t)+"="+encodeURIComponent(n[t])+"&";return e}],headers:{"Content-Type":"application/x-www-form-urlencoded"}})};m.a.interceptors.request.use(function(n){return n.headers.token=window.localStorage.getItem("token"),n},function(n){return console.log("加载超时"),r.a.reject(n)}),m.a.interceptors.response.use(function(n){if(-1===n.data.status)window.localStorage.removeItem("user"),window.bus.$router.replace({name:"login"});else{if(-2!==n.data.status)return null!=n.headers.refresh&&window.localStorage.setItem("token",n.headers.refresh),n;window.bus.$router.replace({name:"login"})}},function(n){return console.log("加载失败"),r.a.reject(n)});var w=function(n,e){return m()({method:"get",params:e,url:n})};new a.default({el:"#app",router:p,components:{App:i},template:"<App/>"});e.default=m.a;window.axios=t("mtWM")},czYa:function(n,e){},tvR6:function(n,e){}},["NHnr"]);
//# sourceMappingURL=app.c1c6dcf7875e69a75d91.js.map