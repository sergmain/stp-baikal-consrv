!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function e(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{ihYB:function(n,o,c){"use strict";c.r(o),c.d(o,"DispatcherRoutingModule",(function(){return x})),c.d(o,"DispatcherModule",(function(){return z}));var i,a=c("ofXK"),s=c("tyNb"),r=c("fXoL"),u=c("2ljo"),l=c("Ne1S"),b=c("Kt2f"),h=c("+l1f"),d=((i=function(){function n(){t(this,n)}return e(n,[{key:"ngOnInit",value:function(){}}]),n}()).\u0275fac=function(t){return new(t||i)},i.\u0275cmp=r.Gb({type:i,selectors:[["dispatcher-index"]],decls:10,vars:0,consts:[["propertyName","brandingMsg"]],template:function(t,n){1&t&&(r.Sb(0,"ct-section"),r.Hc(1,"\n    "),r.Sb(2,"ct-section-body"),r.Hc(3,"\n        "),r.Sb(4,"ct-section-body-row"),r.Hc(5,"\n            "),r.Nb(6,"ct-env-msg-outer",0),r.Hc(7,"\n        "),r.Rb(),r.Hc(8,"\n    "),r.Rb(),r.Hc(9,"\n"),r.Rb())},directives:[u.a,l.a,b.a,h.a],styles:[""]}),i),f=c("q4ZW"),v=c("l7P3"),p=c("XhcP"),R=c("W8U/"),A=c("6Q+1"),g=c("qyGu"),m=c("bTqV"),k=c("sYmb");function L(t,n){1&t&&(r.Sb(0,"button",7),r.Hc(1),r.fc(2,"translate"),r.Rb()),2&t&&(r.Ab(1),r.Jc("\n                ",r.gc(2,1,"dispatcher.SourceCodes"),""))}function y(t,n){1&t&&(r.Sb(0,"button",8),r.Hc(1),r.fc(2,"translate"),r.Rb()),2&t&&(r.Ab(1),r.Ic(r.gc(2,1,"dispatcher.Variables")))}function O(t,n){1&t&&(r.Sb(0,"button",9),r.Hc(1),r.fc(2,"translate"),r.Rb()),2&t&&(r.Ab(1),r.Ic(r.gc(2,1,"dispatcher.Functions")))}function N(t,n){1&t&&(r.Sb(0,"button",10),r.Hc(1),r.fc(2,"translate"),r.Rb()),2&t&&(r.Ab(1),r.Ic(r.gc(2,1,"dispatcher.Processors")))}function H(t,n){1&t&&(r.Sb(0,"button",11),r.Hc(1),r.fc(2,"translate"),r.Rb()),2&t&&(r.Ab(1),r.Ic(r.gc(2,1,"dispatcher.Accounts")))}var M,E,S,I=((M=function(){function n(e,o,c){var i=this;t(this,n),this.store=e,this.authenticationService=o,this.router=c,this.store.subscribe((function(t){i.settings=t.settings,i.updateSidenavState()})),this.router.routeReuseStrategy.shouldReuseRoute=function(){return!1},this.roles=this.authenticationService.getUserRole()}return e(n,[{key:"accessSourceCodes",value:function(){return!!(this.roles.has(f.Role.ROLE_ADMIN)||this.roles.has(f.Role.ROLE_MANAGER)||this.roles.has(f.Role.ROLE_DATA))}},{key:"accessBatch",value:function(){return!!(this.roles.has(f.Role.ROLE_ADMIN)||this.roles.has(f.Role.ROLE_MANAGER)||this.roles.has(f.Role.ROLE_OPERATOR))}},{key:"accessFunctions",value:function(){return!!(this.roles.has(f.Role.ROLE_ADMIN)||this.roles.has(f.Role.ROLE_MANAGER)||this.roles.has(f.Role.ROLE_DATA))}},{key:"accessGlobalVariables",value:function(){return!(!this.roles.has(f.Role.ROLE_ADMIN)&&!this.roles.has(f.Role.ROLE_DATA))}},{key:"accessExperiments",value:function(){return!!(this.roles.has(f.Role.ROLE_ADMIN)||this.roles.has(f.Role.ROLE_MANAGER)||this.roles.has(f.Role.ROLE_DATA))}},{key:"accessAtlas",value:function(){return!(!this.roles.has(f.Role.ROLE_ADMIN)&&!this.roles.has(f.Role.ROLE_DATA))}},{key:"accessProcessors",value:function(){return!!this.roles.has(f.Role.ROLE_ADMIN)}},{key:"accessAccounts",value:function(){return!!this.roles.has(f.Role.ROLE_ADMIN)}},{key:"updateSidenavState",value:function(){this.sidenavOpened=!1,!0===this.settings.sidenav&&(this.sidenavOpened=!0)}}]),n}()).\u0275fac=function(t){return new(t||M)(r.Mb(v.b),r.Mb(f.AuthenticationService),r.Mb(s.b))},M.\u0275cmp=r.Gb({type:M,selectors:[["dispatcher-root"]],decls:30,vars:6,consts:[["mode","side",3,"opened"],[1,"navigation"],["class","mat-button","mat-button","","size","forNavigation","routerLinkActive","active","routerLink","/dispatcher/source-codes",4,"ngIf"],["class","mat-button","mat-button","","size","forNavigation","routerLinkActive","active","routerLink","/dispatcher/global-variables",4,"ngIf"],["class","mat-button","mat-button","","size","forNavigation","routerLinkActive","active","routerLink","/dispatcher/functions",4,"ngIf"],["class","mat-button","mat-button","","size","forNavigation","routerLinkActive","active","routerLink","/dispatcher/processors",4,"ngIf"],["class","mat-button","mat-button","","size","forNavigation","routerLinkActive","active","routerLink","/dispatcher/accounts",4,"ngIf"],["mat-button","","size","forNavigation","routerLinkActive","active","routerLink","/dispatcher/source-codes",1,"mat-button"],["mat-button","","size","forNavigation","routerLinkActive","active","routerLink","/dispatcher/global-variables",1,"mat-button"],["mat-button","","size","forNavigation","routerLinkActive","active","routerLink","/dispatcher/functions",1,"mat-button"],["mat-button","","size","forNavigation","routerLinkActive","active","routerLink","/dispatcher/processors",1,"mat-button"],["mat-button","","size","forNavigation","routerLinkActive","active","routerLink","/dispatcher/accounts",1,"mat-button"]],template:function(t,n){1&t&&(r.Sb(0,"mat-sidenav-container"),r.Hc(1,"\n    "),r.Sb(2,"mat-sidenav",0),r.Hc(3,"\n        "),r.Sb(4,"div",1),r.Hc(5,"\n            "),r.Fc(6,L,3,3,"button",2),r.Hc(7,"\n\n            "),r.Fc(8,y,3,3,"button",3),r.Hc(9,"\n\n            "),r.Fc(10,O,3,3,"button",4),r.Hc(11,"\n\n            "),r.Fc(12,N,3,3,"button",5),r.Hc(13,"\n\n            "),r.Fc(14,H,3,3,"button",6),r.Hc(15,"\n        "),r.Rb(),r.Hc(16,"\n    "),r.Rb(),r.Hc(17,"\n    "),r.Sb(18,"mat-sidenav-content"),r.Hc(19,"\n        "),r.Sb(20,"ct-content"),r.Hc(21,"\n            "),r.Nb(22,"router-outlet"),r.Hc(23,"\n            "),r.Nb(24,"ct-back-button"),r.Hc(25,"\n            "),r.Nb(26,"copy-right"),r.Hc(27,"\n        "),r.Rb(),r.Hc(28,"\n    "),r.Rb(),r.Hc(29,"\n"),r.Rb()),2&t&&(r.Ab(2),r.kc("opened",n.sidenavOpened),r.Ab(4),r.kc("ngIf",n.accessSourceCodes()),r.Ab(2),r.kc("ngIf",n.accessGlobalVariables()),r.Ab(2),r.kc("ngIf",n.accessFunctions()),r.Ab(2),r.kc("ngIf",n.accessProcessors()),r.Ab(2),r.kc("ngIf",n.accessAccounts()))},directives:[p.b,p.a,a.l,p.c,R.a,s.g,A.a,g.a,m.a,s.d,s.c],pipes:[k.c],styles:["mat-sidenav-content[_ngcontent-%COMP%]{overflow:hidden}mat-sidenav[_ngcontent-%COMP%]{position:fixed;top:54px}.navigation[_ngcontent-%COMP%]{width:150px;display:flex;flex-direction:column;padding:9px}.navigation[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-bottom:9px}"]}),M),_=c("vCXQ"),C=c("fEFe"),w=c("9kxi"),P=c("wIh8"),D=[{path:"",canActivate:[C.a],component:I,children:[{path:"",component:d}]},{path:"source-codes",canActivate:[C.a],component:I,loadChildren:function(){return Promise.all([c.e(0),c.e(12)]).then(c.bind(null,"wCdv")).then((function(t){return t.SourceCodeModule}))},data:{section:"source-codes"}},{path:"global-variables",canActivate:[C.a],component:I,loadChildren:function(){return Promise.all([c.e(0),c.e(13)]).then(c.bind(null,"BQRg")).then((function(t){return t.GlobalVariablesModule}))},data:{section:"global-variables"}},{path:"functions",canActivate:[C.a],component:I,loadChildren:function(){return Promise.all([c.e(0),c.e(11)]).then(c.bind(null,"1YC9")).then((function(t){return t.FunctionsModule}))},data:{section:"functions"}},{path:"processors",canActivate:[C.a],component:I,loadChildren:function(){return Promise.all([c.e(0),c.e(14)]).then(c.bind(null,"6lBk")).then((function(t){return t.ProcessorsModule}))},data:{section:"processors"}},{path:"accounts",canActivate:[C.a],component:I,loadChildren:function(){return c.e(8).then(c.bind(null,"I89L")).then((function(t){return t.AccountsModule}))},data:{section:"accounts"}}],x=((S=function n(){t(this,n)}).\u0275mod=r.Kb({type:S}),S.\u0275inj=r.Jb({factory:function(t){return new(t||S)},imports:[[s.f.forChild(D)],s.f]}),S),z=((E=function n(){t(this,n)}).\u0275mod=r.Kb({type:E}),E.\u0275inj=r.Jb({factory:function(t){return new(t||E)},imports:[[a.c,x,w.a,P.a,_.a,k.b.forChild({})]]}),E)}}])}();