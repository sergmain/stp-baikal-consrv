(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"I/GP":function(t,e,n){"use strict";n.r(e),n.d(e,"AiRoutes",(function(){return S})),n.d(e,"AiRoutingModule",(function(){return w})),n.d(e,"AiModule",(function(){return y}));var i=n("ofXK"),o=n("tyNb"),c=n("sYmb"),s=n("9kxi"),r=n("vCXQ"),a=n("wIh8"),u=n("fXoL");let b=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=u.Gb({type:t,selectors:[["ai-index"]],decls:3,vars:0,template:function(t,e){1&t&&(u.Sb(0,"p"),u.Gc(1,"ai-index works!"),u.Rb(),u.Gc(2,"\n"))},styles:[""]}),t})();var d=n("FzDw"),l=n("q4ZW"),p=n("LjSU"),m=n("XhcP"),h=n("bTqV"),v=n("W8U/"),g=n("6Q+1"),f=n("qyGu");let x=(()=>{class t extends d.a{constructor(t,e,n){super(n),this.router=t,this.settingsService=e,this.authenticationService=n,this.router.routeReuseStrategy.shouldReuseRoute=()=>!1}ngOnInit(){this.subscribeSubscription(this.settingsService.events.subscribe(t=>{t instanceof p.b&&(this.settings=t.settings,this.sidenavOpened=t.settings.sidenav)}))}ngOnDestroy(){this.unsubscribeSubscriptions()}}return t.\u0275fac=function(e){return new(e||t)(u.Mb(o.c),u.Mb(p.a),u.Mb(l.AuthenticationService))},t.\u0275cmp=u.Gb({type:t,selectors:[["ai-root"]],features:[u.xb],decls:28,vars:7,consts:[["mode","side",3,"opened"],[1,"navigation"],["mat-button","","routerLinkActive","active","routerLink","/ai/experiments",1,"mat-button"],["mat-button","","routerLinkActive","active","routerLink","/ai/experiment-results",1,"mat-button"]],template:function(t,e){1&t&&(u.Sb(0,"mat-sidenav-container"),u.Gc(1,"\n    "),u.Sb(2,"mat-sidenav",0),u.Gc(3,"\n        "),u.Sb(4,"div",1),u.Gc(5,"\n            "),u.Sb(6,"button",2),u.Gc(7),u.fc(8,"translate"),u.Rb(),u.Gc(9,"\n            "),u.Sb(10,"button",3),u.Gc(11),u.fc(12,"translate"),u.Rb(),u.Gc(13,"\n        "),u.Rb(),u.Gc(14,"\n    "),u.Rb(),u.Gc(15,"\n    "),u.Sb(16,"mat-sidenav-content"),u.Gc(17,"\n        "),u.Sb(18,"ct-content"),u.Gc(19,"\n            "),u.Nb(20,"router-outlet"),u.Gc(21,"\n            "),u.Nb(22,"ct-back-button"),u.Gc(23,"\n            "),u.Nb(24,"copy-right"),u.Gc(25,"\n        "),u.Rb(),u.Gc(26,"\n    "),u.Rb(),u.Gc(27,"\n"),u.Rb()),2&t&&(u.Ab(2),u.kc("opened",e.sidenavOpened),u.Ab(5),u.Hc(u.gc(8,3,"ai.Experiments")),u.Ab(4),u.Hc(u.gc(12,5,"ai.Results")))},directives:[m.b,m.a,h.b,o.e,o.d,m.c,v.a,o.h,g.a,f.a],pipes:[c.c],styles:["mat-sidenav-content[_ngcontent-%COMP%]{overflow:hidden}mat-sidenav[_ngcontent-%COMP%]{position:fixed;top:54px}.navigation[_ngcontent-%COMP%]{width:150px;display:flex;flex-direction:column;padding:9px}.navigation[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-bottom:9px}.mat-button[_ngcontent-%COMP%]{text-align:left}"]}),t})();var G=n("iuQL");const R=[l.Role.Admin,l.Role.Data,l.Role.Manager],S=[{path:"",canActivate:[G.a],component:x,data:{requiredRoles:R},children:[{path:"",component:b,data:{requiredRoles:R}}]},{path:"experiments",canActivate:[G.a],component:x,loadChildren:()=>Promise.all([n.e(2),n.e(0),n.e(18)]).then(n.bind(null,"CNBl")).then(t=>t.ExperimentsModule),data:{section:"experiments",requiredRoles:R}},{path:"experiment-results",canActivate:[G.a],component:x,loadChildren:()=>Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"2tBD")).then(t=>t.ExperimentResultModule),data:{section:"experiment-result",requiredRoles:R}}];let w=(()=>{class t{}return t.\u0275mod=u.Kb({type:t}),t.\u0275inj=u.Jb({factory:function(e){return new(e||t)},imports:[[o.g.forChild(S)],o.g]}),t})(),y=(()=>{class t{}return t.\u0275mod=u.Kb({type:t}),t.\u0275inj=u.Jb({factory:function(e){return new(e||t)},imports:[[i.c,w,s.a,a.a,r.a,c.b.forChild({})]]}),t})()}}]);