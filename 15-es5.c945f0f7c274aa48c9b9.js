!function(){function t(n,e){return(t=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(n,e)}function n(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,r=i(t);if(n){var c=i(this).constructor;o=Reflect.construct(r,arguments,c)}else o=r.apply(this,arguments);return e(this,o)}}function e(t,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function o(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function r(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function c(t,n,e){return n&&r(t.prototype,n),e&&r(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"I/GP":function(e,i,r){"use strict";r.r(i),r.d(i,"AiRoutes",(function(){return M})),r.d(i,"AiRoutingModule",(function(){return T})),r.d(i,"AiModule",(function(){return j}));var u,a,s,f,l=r("ofXK"),b=r("tyNb"),p=r("sYmb"),d=r("9kxi"),h=r("vCXQ"),m=r("wIh8"),v=r("fXoL"),y=((u=function(){function t(){o(this,t)}return c(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||u)},u.\u0275cmp=v.Hb({type:u,selectors:[["ai-index"]],decls:3,vars:0,template:function(t,n){1&t&&(v.Tb(0,"p"),v.Gc(1,"ai-index works!"),v.Sb(),v.Gc(2,"\n"))},styles:[""]}),u),g=r("FzDw"),O=r("q4ZW"),w=r("LjSU"),x=r("XhcP"),G=r("bTqV"),R=r("W8U/"),S=r("6Q+1"),P=r("qyGu"),k=((a=function(e){!function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&t(n,e)}(r,e);var i=n(r);function r(t,n,e){var c;return o(this,r),(c=i.call(this,e)).router=t,c.settingsService=n,c.authenticationService=e,c.router.routeReuseStrategy.shouldReuseRoute=function(){return!1},c}return c(r,[{key:"ngOnInit",value:function(){var t=this;this.subscribeSubscription(this.settingsService.events.subscribe((function(n){n instanceof w.b&&(t.settings=n.settings,t.sidenavOpened=n.settings.sidenav)})))}},{key:"ngOnDestroy",value:function(){this.unsubscribeSubscriptions()}}]),r}(g.a)).\u0275fac=function(t){return new(t||a)(v.Nb(b.c),v.Nb(w.a),v.Nb(O.a))},a.\u0275cmp=v.Hb({type:a,selectors:[["ai-root"]],features:[v.yb],decls:28,vars:7,consts:[["mode","side",3,"opened"],[1,"navigation"],["mat-button","","routerLinkActive","active","routerLink","/ai/experiments",1,"mat-button"],["mat-button","","routerLinkActive","active","routerLink","/ai/experiment-results",1,"mat-button"]],template:function(t,n){1&t&&(v.Tb(0,"mat-sidenav-container"),v.Gc(1,"\n    "),v.Tb(2,"mat-sidenav",0),v.Gc(3,"\n        "),v.Tb(4,"div",1),v.Gc(5,"\n            "),v.Tb(6,"button",2),v.Gc(7),v.fc(8,"translate"),v.Sb(),v.Gc(9,"\n            "),v.Tb(10,"button",3),v.Gc(11),v.fc(12,"translate"),v.Sb(),v.Gc(13,"\n        "),v.Sb(),v.Gc(14,"\n    "),v.Sb(),v.Gc(15,"\n    "),v.Tb(16,"mat-sidenav-content"),v.Gc(17,"\n        "),v.Tb(18,"ct-content"),v.Gc(19,"\n            "),v.Ob(20,"router-outlet"),v.Gc(21,"\n            "),v.Ob(22,"ct-back-button"),v.Gc(23,"\n            "),v.Ob(24,"copy-right"),v.Gc(25,"\n        "),v.Sb(),v.Gc(26,"\n    "),v.Sb(),v.Gc(27,"\n"),v.Sb()),2&t&&(v.Bb(2),v.kc("opened",n.sidenavOpened),v.Bb(5),v.Hc(v.gc(8,3,"ai.Experiments")),v.Bb(4),v.Hc(v.gc(12,5,"ai.Results")))},directives:[x.b,x.a,G.b,b.e,b.d,x.c,R.a,b.h,S.a,P.a],pipes:[p.c],styles:["mat-sidenav-content[_ngcontent-%COMP%]{overflow:hidden}mat-sidenav[_ngcontent-%COMP%]{position:fixed;top:54px}.navigation[_ngcontent-%COMP%]{width:150px;display:flex;flex-direction:column;padding:9px}.navigation[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-bottom:9px}.mat-button[_ngcontent-%COMP%]{text-align:left}"]}),a),_=r("iuQL"),C=[O.e.Admin,O.e.Data,O.e.Manager],M=[{path:"",canActivate:[_.a],component:k,data:{requiredRoles:C},children:[{path:"",component:y,data:{requiredRoles:C}}]},{path:"experiments",canActivate:[_.a],component:k,loadChildren:function(){return Promise.all([r.e(2),r.e(0),r.e(18)]).then(r.bind(null,"CNBl")).then((function(t){return t.ExperimentsModule}))},data:{section:"experiments",requiredRoles:C}},{path:"experiment-results",canActivate:[_.a],component:k,loadChildren:function(){return Promise.all([r.e(0),r.e(7)]).then(r.bind(null,"2tBD")).then((function(t){return t.ExperimentResultModule}))},data:{section:"experiment-result",requiredRoles:C}}],T=((f=function t(){o(this,t)}).\u0275mod=v.Lb({type:f}),f.\u0275inj=v.Kb({factory:function(t){return new(t||f)},imports:[[b.g.forChild(M)],b.g]}),f),j=((s=function t(){o(this,t)}).\u0275mod=v.Lb({type:s}),s.\u0275inj=v.Kb({factory:function(t){return new(t||s)},imports:[[l.c,T,d.a,m.a,h.a,p.b.forChild({})]]}),s)}}])}();