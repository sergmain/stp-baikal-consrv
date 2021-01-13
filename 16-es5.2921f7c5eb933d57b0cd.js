!function(){function t(t,c){if("function"!=typeof c&&null!==c)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(c&&c.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),c&&e(t,c)}function e(t,c){return(e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,c)}function c(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,i=a(t);if(e){var o=a(this).constructor;c=Reflect.construct(i,arguments,o)}else c=i.apply(this,arguments);return n(this,c)}}function n(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var c=0;c<e.length;c++){var n=e[c];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function b(t,e,c){return e&&o(t.prototype,e),c&&o(t,c),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{gFOi:function(e,n,a){"use strict";a.r(n),a.d(n,"BatchRoutes",(function(){return te})),a.d(n,"BatchRoutingModule",(function(){return ee})),a.d(n,"BatchModule",(function(){return ce}));var o=a("ofXK"),s=a("3Pt+"),r=a("tyNb"),l=a("sYmb"),u=a("vCXQ"),d=a("u8e3"),f=a("Hz+5"),h=a("fXoL"),G=a("2ljo"),p=a("1P+h"),S=a("25/r"),R=a("Xc1m"),g=a("Ne1S"),m=a("Kt2f"),v=a("IRPT");function y(t,e){if(1&t&&(h.Sb(0,"ct-section-body-row"),h.Gc(1," \n      "),h.Sb(2,"ct-pre"),h.Gc(3),h.Rb(),h.Gc(4,"\n    "),h.Rb()),2&t){var c=h.ec();h.Ab(3),h.Hc(c.response.console)}}var k,w=function(t){return{batchId:t}},x=function(t,e){return[t,e]},A=((k=function(){function t(e,c,n){i(this,t),this.route=e,this.batchService=c,this.router=n,this.states=d.a,this.currentState=d.a.firstLoading}return b(t,[{key:"ngOnInit",value:function(){this.batchId=this.route.snapshot.paramMap.get("batchId"),this.updateResponse()}},{key:"updateResponse",value:function(){var t=this;this.batchService.getProcessingResourceStatus(this.batchId).subscribe((function(e){t.response=e,t.currentState=t.states.show}))}}]),t}()).\u0275fac=function(t){return new(t||k)(h.Mb(r.a),h.Mb(f.a),h.Mb(r.c))},k.\u0275cmp=h.Gb({type:k,selectors:[["batch-status"]],decls:21,vars:10,consts:[[4,"ngIf"]],template:function(t,e){1&t&&(h.Gc(0,"\n"),h.Sb(1,"ct-section"),h.Gc(2,"\n  "),h.Sb(3,"ct-section-header"),h.Gc(4,"\n    "),h.Sb(5,"ct-section-header-row"),h.Gc(6,"\n      "),h.Sb(7,"ct-heading"),h.Gc(8,"  \n        "),h.Sb(9,"div"),h.Gc(10),h.fc(11,"translate"),h.Rb(),h.Gc(12,"\n      "),h.Rb(),h.Gc(13,"\n    "),h.Rb(),h.Gc(14,"\n  "),h.Rb(),h.Gc(15,"\n  "),h.Sb(16,"ct-section-body"),h.Gc(17,"\n    "),h.Ec(18,y,5,1,"ct-section-body-row",0),h.Gc(19,"\n  "),h.Rb(),h.Gc(20,"\n"),h.Rb()),2&t&&(h.Ab(10),h.Ic("",h.hc(11,2,"batch-status.Status of execution of batch _batchId_",h.nc(5,w,e.batchId))," "),h.Ab(8),h.kc("ngIf",h.oc(7,x,e.states.wait,e.states.show).includes(e.currentState)))},directives:[G.a,p.a,S.a,R.a,g.a,o.m,m.a,v.a],pipes:[l.c],styles:["pre[_ngcontent-%COMP%]{white-space:pre-wrap;word-break:break-word}"]}),k),C=a("uB0V"),I=a("FzDw"),O=a("q4ZW"),E=a("LjSU"),D=a("MbdJ"),M=a("I6qf"),T=a("MI58"),P=a("kmnG"),F=a("d3UM"),j=a("PVyz"),H=a("FMVq"),B=a("V6TR"),_=a("CaYE"),q=a("No2e"),U=a("bTqV"),L=a("05qC"),N=a("FKr1"),z=["fileUpload"];function $(t,e){if(1&t&&(h.Sb(0,"div"),h.Gc(1,"\n                                "),h.Sb(2,"mat-option",11),h.Gc(3),h.Rb(),h.Gc(4,"\n                            "),h.Rb()),2&t){var c=e.$implicit;h.Ab(2),h.kc("value",c),h.Ab(1),h.Hc(c.uid)}}function Q(t,e){if(1&t){var c=h.Tb();h.Sb(0,"ct-cols"),h.Gc(1,"\n    "),h.Sb(2,"ct-col",1),h.Gc(3,"\n        "),h.Sb(4,"ct-section"),h.Gc(5,"\n            "),h.Sb(6,"ct-section-header"),h.Gc(7,"\n                "),h.Sb(8,"ct-section-header-row"),h.Gc(9,"\n                    "),h.Sb(10,"ct-heading"),h.Gc(11),h.fc(12,"translate"),h.Rb(),h.Gc(13,"\n                "),h.Rb(),h.Gc(14,"\n            "),h.Rb(),h.Gc(15,"\n            "),h.Sb(16,"ct-section-body"),h.Gc(17,"\n                "),h.Sb(18,"ct-section-body-row"),h.Gc(19,"\n                    "),h.Sb(20,"mat-form-field",2),h.Gc(21,"\n                        "),h.Sb(22,"mat-label"),h.Gc(23),h.fc(24,"translate"),h.Rb(),h.Gc(25,"\n                        "),h.Sb(26,"mat-select",3),h.ac("ngModelChange",(function(t){return h.uc(c),h.ec().sourceCode=t})),h.Gc(27,"\n                            "),h.Ec(28,$,5,2,"div",4),h.Gc(29,"\n                        "),h.Rb(),h.Gc(30,"\n                        "),h.Sb(31,"mat-hint"),h.Gc(32),h.fc(33,"translate"),h.Rb(),h.Gc(34,"\n                    "),h.Rb(),h.Gc(35,"\n\n                    "),h.Nb(36,"br"),h.Gc(37,"\n                    "),h.Nb(38,"br"),h.Gc(39,"\n\n                    "),h.Sb(40,"div"),h.Gc(41,"\n                        "),h.Sb(42,"ct-file-upload",5,6),h.ac("changed",(function(){return h.uc(c),h.ec().fileUploadChanged()})),h.fc(44,"translate"),h.Gc(45,"\n                        "),h.Rb(),h.Gc(46,"\n                        "),h.Sb(47,"ct-hint"),h.Gc(48),h.fc(49,"translate"),h.Rb(),h.Gc(50,"\n                        "),h.Sb(51,"ct-hint"),h.Gc(52),h.fc(53,"translate"),h.Rb(),h.Gc(54,"\n                    "),h.Rb(),h.Gc(55,"\n                "),h.Rb(),h.Gc(56,"\n            "),h.Rb(),h.Gc(57,"\n            "),h.Sb(58,"ct-section-footer"),h.Gc(59,"\n                "),h.Sb(60,"ct-section-footer-row"),h.Gc(61,"\n                    "),h.Sb(62,"ct-flex",7),h.Gc(63,"\n                        "),h.Sb(64,"ct-flex-item"),h.Gc(65,"\n                            "),h.Sb(66,"button",8),h.ac("click",(function(){return h.uc(c),h.ec().back()})),h.Gc(67),h.fc(68,"translate"),h.Rb(),h.Gc(69,"\n                        "),h.Rb(),h.Gc(70,"\n                        "),h.Sb(71,"ct-flex-item"),h.Gc(72,"\n                            "),h.Sb(73,"button",9),h.ac("click",(function(){return h.uc(c),h.ec().upload()})),h.Gc(74),h.fc(75,"translate"),h.Rb(),h.Gc(76,"\n                        "),h.Rb(),h.Gc(77,"\n                    "),h.Rb(),h.Gc(78,"\n                "),h.Rb(),h.Gc(79,"\n            "),h.Rb(),h.Gc(80,"\n        "),h.Rb(),h.Gc(81,"\n    "),h.Rb(),h.Gc(82,"\n    "),h.Sb(83,"ct-col",1),h.Gc(84,"\n        "),h.Nb(85,"ct-rest-status",10),h.Gc(86,"\n    "),h.Rb(),h.Gc(87,"\n"),h.Rb()}if(2&t){var n=h.ec();h.Ab(11),h.Hc(h.gc(12,12,"batch-add.Upload file for processing")),h.Ab(12),h.Ic(" ",h.gc(24,14,"batch-add.List of Source Codes"),""),h.Ab(3),h.kc("ngModel",n.sourceCode),h.Ab(2),h.kc("ngForOf",n.listOfSourceCodes),h.Ab(4),h.Hc(h.gc(33,16,"batch-add.This is a required field.")),h.Ab(10),h.lc("buttonTitle",h.gc(44,18,"batch-add.Select File")),h.Ab(6),h.Hc(h.gc(49,20,"batch-add.This is a required field.")),h.Ab(4),h.Hc(h.gc(53,22,"batch-add.Only .xml and .zip files are supported")),h.Ab(15),h.Ic("\n                                ",h.gc(68,24,"batch-add.Cancel"),""),h.Ab(6),h.kc("disabled",!n.sourceCode||!n.file),h.Ab(1),h.Ic(" ",h.gc(75,26,"batch-add.Upload-File-button"),""),h.Ab(11),h.kc("content",n.uploadResponse)}}var J,K,V,W=((J=function(e){t(a,e);var n=c(a);function a(t,e,c,o,b,s){var r;return i(this,a),(r=n.call(this,s)).batchService=t,r.router=e,r.route=c,r.translate=o,r.settingsService=b,r.authenticationService=s,r.currentStates=new Set,r.listOfSourceCodes=[],r}return b(a,[{key:"ngOnInit",value:function(){var t=this;this.subscribeSubscription(this.settingsService.events.subscribe((function(e){e instanceof E.b&&t.translate.use(e.settings.language)}))),this.updateResponse()}},{key:"ngOnDestroy",value:function(){this.unsubscribeSubscriptions()}},{key:"updateResponse",value:function(){var t=this;this.batchService.batchAdd().subscribe((function(e){t.response=e,t.listOfSourceCodes=t.response.items}))}},{key:"back",value:function(){this.router.navigate(["../"],{relativeTo:this.route})}},{key:"upload",value:function(){var t=this;this.batchService.uploadFile(this.sourceCode.id.toString(),this.fileUpload.fileInput.nativeElement.files[0]).subscribe((function(e){e.status===C.a.OK&&t.back(),t.uploadResponse=e}))}},{key:"fileUploadChanged",value:function(){this.file=this.fileUpload.fileInput.nativeElement.files[0]||!1}}]),a}(I.a)).\u0275fac=function(t){return new(t||J)(h.Mb(f.a),h.Mb(r.c),h.Mb(r.a),h.Mb(l.d),h.Mb(E.a),h.Mb(O.AuthenticationService))},J.\u0275cmp=h.Gb({type:J,selectors:[["batch-add"]],viewQuery:function(t,e){var c;1&t&&h.Kc(z,!0),2&t&&h.rc(c=h.bc())&&(e.fileUpload=c.first)},features:[h.xb],decls:1,vars:1,consts:[[4,"ngIf"],["size","6"],["appearance","outline"],[3,"ngModel","ngModelChange"],[4,"ngFor","ngForOf"],["acceptTypes",".zip, .xml",3,"buttonTitle","changed"],["fileUpload",""],["justify-content","flex-end","gap","8px"],["mat-stroked-button","mat-stroked-button",3,"click"],["mat-flat-button","mat-flat-button","color","primary",3,"disabled","click"],[3,"content"],[3,"value"]],template:function(t,e){1&t&&h.Ec(0,Q,88,28,"ct-cols",0),2&t&&h.kc("ngIf",e.response)},directives:[o.m,M.a,T.a,G.a,p.a,S.a,R.a,g.a,m.a,P.b,P.f,F.a,s.k,s.n,o.l,P.e,D.a,j.a,H.a,B.a,_.a,q.a,U.b,L.a,N.n],pipes:[l.c],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),J),X=a("9kxi"),Y=a("W8U/"),Z=a("6Q+1"),tt=a("qyGu"),et=((K=function(){function t(){i(this,t)}return b(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||K)},K.\u0275cmp=h.Gb({type:K,selectors:[["batch-root"]],decls:8,vars:0,template:function(t,e){1&t&&(h.Sb(0,"ct-content"),h.Gc(1,"\n    "),h.Nb(2,"router-outlet"),h.Gc(3,"\n    "),h.Nb(4,"ct-back-button"),h.Gc(5,"\n    "),h.Nb(6,"copy-right"),h.Gc(7,"\n"),h.Rb())},directives:[Y.a,r.h,Z.a,tt.a],styles:[""]}),K),ct=a("wIh8"),nt=a("2qjw"),at=((V=function t(e){i(this,t),this.route=e,this.sourceCodeId=this.route.snapshot.paramMap.get("sourceCodeId"),this.execContextId=this.route.snapshot.paramMap.get("execContextId")}).\u0275fac=function(t){return new(t||V)(h.Mb(r.a))},V.\u0275cmp=h.Gb({type:V,selectors:[["batch-state"]],decls:19,vars:2,consts:[[3,"sourceCodeId","execContextId"]],template:function(t,e){1&t&&(h.Sb(0,"ct-section"),h.Gc(1,"\n    "),h.Sb(2,"ct-section-header"),h.Gc(3,"\n        "),h.Sb(4,"ct-section-header-row"),h.Gc(5,"\n            "),h.Sb(6,"ct-heading"),h.Gc(7,"State of Tasks"),h.Rb(),h.Gc(8,"\n        "),h.Rb(),h.Gc(9,"\n    "),h.Rb(),h.Gc(10,"\n    "),h.Sb(11,"ct-section-body"),h.Gc(12,"\n        "),h.Sb(13,"ct-section-body-row"),h.Gc(14,"\n            "),h.Nb(15,"ct-state-of-tasks",0),h.Gc(16,"\n        "),h.Rb(),h.Gc(17,"\n    "),h.Rb(),h.Gc(18,"\n"),h.Rb()),2&t&&(h.Ab(15),h.kc("sourceCodeId",e.sourceCodeId)("execContextId",e.execContextId))},directives:[G.a,p.a,S.a,R.a,g.a,m.a,nt.a],styles:[""]}),V),it=a("+0xr"),ot=a("4u49"),bt=a("lJGJ"),st=a("Iab2"),rt=a("YcRZ"),lt=a("0IaG"),ut=a("LazG"),dt=a("6xdO"),ft=a("W7k4"),ht=a("NFeN"),Gt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};function pt(t,e){1&t&&h.Ob(0)}function St(t,e){1&t&&(h.Sb(0,"span",22),h.Gc(1,"\u2713\xa0\xa0"),h.Rb())}function Rt(t,e){1&t&&(h.Sb(0,"span",22),h.Gc(1,"\u2717\xa0\xa0"),h.Rb())}function gt(t,e){1&t&&(h.Sb(0,"th",23),h.Gc(1),h.fc(2,"translate"),h.Rb()),2&t&&(h.Ab(1),h.Hc(h.gc(2,1,"batch.Id")))}function mt(t,e){if(1&t&&(h.Sb(0,"td",24),h.Gc(1),h.Rb()),2&t){var c=e.$implicit;h.Ab(1),h.Ic("",c.batch.id," ")}}function vt(t,e){1&t&&(h.Sb(0,"th",23),h.Gc(1),h.fc(2,"translate"),h.Rb()),2&t&&(h.Ab(1),h.Ic("",h.gc(2,1,"batch.Created On"),"\n                        "))}function yt(t,e){if(1&t&&(h.Sb(0,"td",24),h.Gc(1),h.fc(2,"date"),h.Rb()),2&t){var c=e.$implicit;h.Ab(1),h.Ic("\n                            ",h.hc(2,1,c.batch.createdOn,"MMM d, yyyy, HH:mm:ss")," ")}}function kt(t,e){1&t&&(h.Sb(0,"th",23),h.Gc(1),h.fc(2,"translate"),h.Rb()),2&t&&(h.Ab(1),h.Ic("",h.gc(2,1,"batch.Owner's username"),"\n                        "))}function wt(t,e){if(1&t&&(h.Sb(0,"td",24),h.Gc(1),h.Rb()),2&t){var c=e.$implicit;h.Ab(1),h.Hc(c.username)}}function xt(t,e){1&t&&(h.Sb(0,"th",23),h.Gc(1),h.fc(2,"translate"),h.Rb()),2&t&&(h.Ab(1),h.Ic("\n                            ",h.gc(2,1,"batch.Is Batch Consistent?")," "))}function At(t,e){1&t&&(h.Sb(0,"span"),h.Gc(1),h.fc(2,"translate"),h.Rb()),2&t&&(h.Ab(1),h.Hc(h.gc(2,1,"batch.isBatchConsistent.true")))}function Ct(t,e){1&t&&(h.Sb(0,"span"),h.Gc(1),h.fc(2,"translate"),h.Rb()),2&t&&(h.Ab(1),h.Hc(h.gc(2,1,"batch.isBatchConsistent.false")))}function It(t,e){if(1&t&&(h.Sb(0,"td",24),h.Gc(1," "),h.Ec(2,At,3,3,"span",0),h.Ec(3,Ct,3,3,"span",0),h.Rb()),2&t){var c=e.$implicit;h.Ab(2),h.kc("ngIf",c.ok),h.Ab(1),h.kc("ngIf",!c.ok)}}function Ot(t,e){1&t&&(h.Sb(0,"th",23),h.Gc(1,"\n                            "),h.Sb(2,"div",25),h.Gc(3),h.fc(4,"translate"),h.Rb(),h.Gc(5,"\n                            "),h.Sb(6,"div",25),h.Gc(7),h.fc(8,"translate"),h.Rb(),h.Gc(9,"\n                        "),h.Rb()),2&t&&(h.Ab(3),h.Hc(h.gc(4,2,"batch.Source Code")),h.Ab(4),h.Hc(h.gc(8,4,"batch.File name")))}function Et(t,e){if(1&t&&(h.Sb(0,"td",24),h.Gc(1,"\n                            "),h.Sb(2,"div",25),h.Gc(3),h.Rb(),h.Gc(4,"\n                            "),h.Sb(5,"div",25),h.Gc(6),h.Rb(),h.Gc(7,"\n                        "),h.Rb()),2&t){var c=e.$implicit;h.Ab(3),h.Hc(c.sourceCodeUid),h.Ab(3),h.Hc(c.uploadedFileName)}}function Dt(t,e){1&t&&(h.Sb(0,"th",23),h.Gc(1),h.fc(2,"translate"),h.Rb()),2&t&&(h.Ab(1),h.Ic(" ",h.gc(2,1,"batch.Exec State"),"\n                        "))}function Mt(t,e){1&t&&(h.Sb(0,"span"),h.Gc(1),h.fc(2,"translate"),h.Rb()),2&t&&(h.Ab(1),h.Ic("\n                                ",h.gc(2,1,"batch.isBatchConsistent.Error"),"\n                            "))}function Tt(t,e){1&t&&(h.Sb(0,"span"),h.Gc(1),h.fc(2,"translate"),h.Rb()),2&t&&(h.Ab(1),h.Ic("\n                                ",h.gc(2,1,"batch.isBatchConsistent.Preparing"),"\n                            "))}function Pt(t,e){1&t&&(h.Sb(0,"span"),h.Gc(1),h.fc(2,"translate"),h.Rb()),2&t&&(h.Ab(1),h.Ic("\n                                ",h.gc(2,1,"batch.isBatchConsistent.Processing"),"\n                            "))}function Ft(t,e){1&t&&(h.Sb(0,"span"),h.Gc(1),h.fc(2,"translate"),h.Rb()),2&t&&(h.Ab(1),h.Ic("\n                                ",h.gc(2,1,"batch.isBatchConsistent.Finished"),"\n                            "))}function jt(t,e){if(1&t&&(h.Sb(0,"td",24),h.Gc(1,"\n                            "),h.Ec(2,Mt,3,3,"span",0),h.Gc(3,"\n                            "),h.Ec(4,Tt,3,3,"span",0),h.Gc(5,"\n                            "),h.Ec(6,Pt,3,3,"span",0),h.Gc(7,"\n                            "),h.Ec(8,Ft,3,3,"span",0),h.Gc(9,"\n                        "),h.Rb()),2&t){var c=e.$implicit;h.Ab(2),h.kc("ngIf",-1===c.execState),h.Ab(2),h.kc("ngIf",2===c.execState),h.Ab(2),h.kc("ngIf",3===c.execState),h.Ab(2),h.kc("ngIf",4===c.execState)}}function Ht(t,e){1&t&&(h.Sb(0,"th",23),h.Gc(1," "),h.Rb())}var Bt=function(t,e,c){return["/batch",t,"source-code",e,"exec-context",c,"state"]},_t=function(t){return["/batch",t,"status"]};function qt(t,e){if(1&t){var c=h.Tb();h.Sb(0,"td",24),h.Gc(1,"\n                            "),h.Sb(2,"ct-flex",26),h.Gc(3,"\n                                "),h.Sb(4,"ct-flex-item"),h.Gc(5,"\n                                    "),h.Sb(6,"button",27),h.Gc(7),h.fc(8,"translate"),h.Rb(),h.Gc(9,"\n                                "),h.Rb(),h.Gc(10,"\n\n                                "),h.Sb(11,"ct-flex-item"),h.Gc(12,"\n                                    "),h.Sb(13,"button",27),h.Gc(14),h.fc(15,"translate"),h.Rb(),h.Gc(16,"\n                                "),h.Rb(),h.Gc(17,"\n\n                                "),h.Sb(18,"ct-flex-item"),h.Gc(19,"\n                                    "),h.Sb(20,"button",28),h.ac("click",(function(t){h.uc(c);var n=e.$implicit;return h.ec(2).downloadFile(t,n.batch.id)})),h.Gc(21),h.fc(22,"translate"),h.Rb(),h.Gc(23,"\n                                "),h.Rb(),h.Gc(24,"\n\n                                "),h.Sb(25,"ct-flex-item"),h.Gc(26,"\n                                    "),h.Sb(27,"button",29),h.ac("click",(function(t){h.uc(c);var n=e.$implicit;return h.ec(2).delete(t,n)})),h.Gc(28,"\n                                        "),h.Sb(29,"mat-icon"),h.Gc(30,"delete"),h.Rb(),h.Gc(31,"\n                                    "),h.Rb(),h.Gc(32,"\n                                "),h.Rb(),h.Gc(33,"\n                            "),h.Rb(),h.Gc(34,"\n                        "),h.Rb()}if(2&t){var n=e.$implicit;h.Ab(6),h.kc("disabled",n.execContextDeleted)("routerLink",h.pc(14,Bt,n.batch.id,n.batch.sourceCodeId,n.batch.execContextId)),h.Ab(1),h.Ic("\n                                        ",h.gc(8,8,"batch.Task states"),""),h.Ab(6),h.kc("disabled",4!==n.execState||n.execContextDeleted)("routerLink",h.nc(18,_t,n.batch.id)),h.Ab(1),h.Ic("\n                                        ",h.gc(15,10,"batch.Status"),""),h.Ab(6),h.kc("disabled",4!==n.execState||n.execContextDeleted),h.Ab(1),h.Ic("\n                                        ",h.gc(22,12,"batch.Download Result"),"")}}function Ut(t,e){1&t&&(h.Sb(0,"tr",30),h.Gc(1," "),h.Rb())}function Lt(t,e){if(1&t){var c=h.Tb();h.Sb(0,"tr",31),h.ac("click",(function(t){h.uc(c);var n=e.$implicit;return h.ec(2).selectRow(t,n)})),h.Rb()}if(2&t){var n=e.$implicit,a=h.ec(2);h.Eb("deleted-table-row",a.isDeletedRow(n))("selected-color",a.isSelectedRow(n))}}function Nt(t,e){if(1&t){var c=h.Tb();h.Sb(0,"ct-flex-item"),h.Gc(1,"\n                    "),h.Sb(2,"ct-flex",32),h.Gc(3,"\n                        "),h.Sb(4,"ct-flex-item"),h.Gc(5,"\n                            "),h.Sb(6,"div",33),h.Gc(7),h.fc(8,"translate"),h.Rb(),h.Gc(9,"\n                        "),h.Rb(),h.Gc(10,"\n                        "),h.Sb(11,"ct-flex-item"),h.Gc(12,"\n                            "),h.Sb(13,"button",34),h.ac("click",(function(){return h.uc(c),h.ec(2).downloadSelectedRows()})),h.Gc(14),h.fc(15,"translate"),h.Rb(),h.Gc(16,"\n                        "),h.Rb(),h.Gc(17,"\n                        "),h.Sb(18,"ct-flex-item"),h.Gc(19,"\n                            "),h.Sb(20,"button",34),h.ac("click",(function(){return h.uc(c),h.ec(2).discardSelectedRows()})),h.Gc(21),h.fc(22,"translate"),h.Rb(),h.Gc(23,"\n                        "),h.Rb(),h.Gc(24,"\n                    "),h.Rb(),h.Gc(25,"\n                "),h.Rb()}if(2&t){var n=h.ec(2);h.Ab(7),h.Jc("\n                                ",h.gc(8,4,"batch.Batch")," \xd7 ",n.countOfSelectedRows(),"\n                            "),h.Ab(7),h.Hc(h.gc(15,6,"batch.Download")),h.Ab(7),h.Hc(h.gc(22,8,"batch.Discard"))}}function zt(t,e){1&t&&h.Ob(0)}function $t(t,e){if(1&t){var c=h.Tb();h.Sb(0,"ct-section"),h.Gc(1,"\n    "),h.Sb(2,"ct-section-header"),h.Gc(3,"\n        "),h.Sb(4,"ct-section-header-row"),h.Gc(5,"\n            "),h.Sb(6,"ct-flex",2),h.Gc(7,"\n                "),h.Sb(8,"ct-flex-item"),h.Gc(9,"\n                    "),h.Sb(10,"ct-heading"),h.Gc(11),h.fc(12,"translate"),h.Rb(),h.Gc(13,"\n                "),h.Rb(),h.Gc(14,"\n                "),h.Sb(15,"ct-flex-item"),h.Gc(16,"\n                    "),h.Sb(17,"ct-flex",3),h.Gc(18,"\n                        "),h.Sb(19,"ct-flex-item"),h.Gc(20,"\n                            "),h.Ec(21,pt,1,0,"ng-container",4),h.Gc(22,"\n                        "),h.Rb(),h.Gc(23,"\n                        "),h.Sb(24,"ct-flex-item"),h.Gc(25,"\n                            "),h.Sb(26,"button",5),h.ac("click",(function(){return h.uc(c),h.ec().toggleFilter()})),h.Gc(27,"\n                                "),h.Ec(28,St,2,0,"span",6),h.Gc(29,"\n                                "),h.Ec(30,Rt,2,0,"span",6),h.Gc(31,"\n                                "),h.Sb(32,"span"),h.Gc(33),h.fc(34,"translate"),h.Rb(),h.Gc(35,"\n                            "),h.Rb(),h.Gc(36,"\n                        "),h.Rb(),h.Gc(37,"\n                    "),h.Rb(),h.Gc(38,"\n                "),h.Rb(),h.Gc(39,"\n            "),h.Rb(),h.Gc(40,"\n        "),h.Rb(),h.Gc(41,"\n    "),h.Rb(),h.Gc(42,"\n    "),h.Sb(43,"ct-section-body"),h.Gc(44,"\n        "),h.Sb(45,"ct-section-body-row"),h.Gc(46,"\n            "),h.Sb(47,"ct-table",7),h.Gc(48,"\n                "),h.Sb(49,"table",8),h.Gc(50,"\n                    "),h.Qb(51,9),h.Gc(52,"\n                        "),h.Ec(53,gt,3,3,"th",10),h.Gc(54,"\n                        "),h.Ec(55,mt,2,1,"td",11),h.Gc(56,"\n                    "),h.Pb(),h.Gc(57,"\n                    "),h.Qb(58,12),h.Gc(59,"\n                        "),h.Ec(60,vt,3,3,"th",10),h.Gc(61,"\n                        "),h.Ec(62,yt,3,4,"td",11),h.Gc(63,"\n                    "),h.Pb(),h.Gc(64,"\n                    "),h.Qb(65,13),h.Gc(66,"\n                        "),h.Ec(67,kt,3,3,"th",10),h.Gc(68,"\n                        "),h.Ec(69,wt,2,1,"td",11),h.Gc(70,"\n                    "),h.Pb(),h.Gc(71,"\n                    "),h.Qb(72,14),h.Gc(73,"\n                        "),h.Ec(74,xt,3,3,"th",10),h.Gc(75,"\n                        "),h.Ec(76,It,4,2,"td",11),h.Gc(77,"\n                    "),h.Pb(),h.Gc(78,"\n                    "),h.Qb(79,15),h.Gc(80,"\n                        "),h.Ec(81,Ot,10,6,"th",10),h.Gc(82,"\n                        "),h.Ec(83,Et,8,2,"td",11),h.Gc(84,"\n                    "),h.Pb(),h.Gc(85,"\n                    "),h.Qb(86,16),h.Gc(87,"\n                        "),h.Ec(88,Dt,3,3,"th",10),h.Gc(89,"\n                        "),h.Ec(90,jt,10,4,"td",11),h.Gc(91,"\n                    "),h.Pb(),h.Gc(92,"\n                    "),h.Qb(93,17),h.Gc(94,"\n                        "),h.Ec(95,Ht,2,0,"th",10),h.Gc(96,"\n                        "),h.Ec(97,qt,35,20,"td",11),h.Gc(98,"\n                    "),h.Pb(),h.Gc(99,"\n                    "),h.Ec(100,Ut,2,0,"tr",18),h.Gc(101,"\n                    "),h.Ec(102,Lt,1,4,"tr",19),h.Gc(103,"\n                "),h.Rb(),h.Gc(104,"\n            "),h.Rb(),h.Gc(105,"\n        "),h.Rb(),h.Gc(106,"\n    "),h.Rb(),h.Gc(107,"\n    "),h.Sb(108,"ct-section-footer"),h.Gc(109,"\n        "),h.Sb(110,"ct-section-footer-row"),h.Gc(111,"\n            "),h.Sb(112,"ct-flex",20),h.Gc(113,"\n                "),h.Sb(114,"ct-flex-item"),h.Gc(115,"\n                    "),h.Sb(116,"ct-table-pagination",21),h.ac("prev",(function(){return h.uc(c),h.ec().prevPage()}))("next",(function(){return h.uc(c),h.ec().nextPage()})),h.Rb(),h.Gc(117,"\n                "),h.Rb(),h.Gc(118,"\n\n                "),h.Ec(119,Nt,26,10,"ct-flex-item",0),h.Gc(120,"\n\n                "),h.Sb(121,"ct-flex-item"),h.Gc(122,"\n                    "),h.Ec(123,zt,1,0,"ng-container",4),h.Gc(124,"\n                "),h.Rb(),h.Gc(125,"\n            "),h.Rb(),h.Gc(126,"\n        "),h.Rb(),h.Gc(127,"\n    "),h.Rb(),h.Gc(128,"\n"),h.Rb()}if(2&t){var n=h.ec(),a=h.sc(3);h.Ab(11),h.Ic("",h.gc(12,13,"batch.Batch")," "),h.Ab(10),h.kc("ngTemplateOutlet",a),h.Ab(5),h.kc("disabled",!1),h.Ab(2),h.kc("ngIf",n.isFiltered),h.Ab(2),h.kc("ngIf",!n.isFiltered),h.Ab(3),h.Hc(h.gc(34,15,"batch.onlyMyBatches")),h.Ab(14),h.kc("isWaiting",n.isLoading),h.Ab(2),h.kc("dataSource",n.dataSource),h.Ab(51),h.kc("matHeaderRowDef",n.columnsToDisplay),h.Ab(2),h.kc("matRowDefColumns",n.columnsToDisplay),h.Ab(14),h.kc("pageableDefault",n.batchesResult.batches),h.Ab(3),h.kc("ngIf",n.countOfSelectedRows()),h.Ab(4),h.kc("ngTemplateOutlet",a)}}function Qt(t,e){1&t&&(h.Gc(0,"\n    "),h.Sb(1,"button",35),h.Gc(2),h.fc(3,"translate"),h.Rb(),h.Gc(4,"\n")),2&t&&(h.Ab(1),h.kc("disabled",!1),h.Ab(1),h.Ic("\n        ",h.gc(3,2,"batch.Upload files and start processing"),""))}function Jt(t,e){1&t&&(h.Gc(0,"\n    "),h.Sb(1,"button",35),h.Gc(2),h.fc(3,"translate"),h.Rb(),h.Gc(4,"\n")),2&t&&(h.Ab(1),h.kc("disabled",!1),h.Ab(1),h.Ic("\n        ",h.gc(3,2,"batch.Upload files and start processing"),""))}var Kt,Vt,Wt,Xt=((Kt=function(e){t(a,e);var n=c(a);function a(t,e,c,o,b){var s;return i(this,a),(s=n.call(this,e)).batchService=t,s.authenticationService=e,s.dialog=c,s.translate=o,s.batchExexStatusService=b,s.subs=[],s.dataSource=new it.k([]),s.columnsToDisplay=["id","createdOn","Owner","isBatchConsistent","sourceCode","execState","bts"],s}return b(a,[{key:"ngOnInit",value:function(){var t=this;this.updateTable("0",this.isFiltered),this.subs.push(this.batchExexStatusService.getStatuses.subscribe({next:function(e){t.batchExexStatusService.updateBatchesResultByStatuses(t.batchesResult,e)}}))}},{key:"ngOnDestroy",value:function(){this.subs.forEach((function(t){return t.unsubscribe()}))}},{key:"updateTable",value:function(t,e){var c=this;this.isLoading=!0,this.batchService.batches(t,e).subscribe({next:function(t){c.batchesResult=t,c.columnsToDisplay=c.authenticationService.isRoleOperator()?["id","createdOn","Owner","sourceCode","execState","bts"]:["id","createdOn","Owner","isBatchConsistent","sourceCode","execState","bts"],c.dataSource=new it.k(t.batches.content||[]),c.isLoading=!1}})}},{key:"toggleFilter",value:function(){this.isFiltered=!this.isFiltered,this.updateTable("0",this.isFiltered)}},{key:"isDeletedRow",value:function(t){return!1}},{key:"delete",value:function(t,e){var c=this;this.batchService.processResourceDeleteCommit(e.batch.id.toString()).subscribe({next:function(){c.updateTable(c.batchesResult.batches.number.toString(),c.isFiltered)}})}},{key:"downloadFile",value:function(t,e){t.stopPropagation(),this.batchService.downloadFile(e).subscribe((function(t){var e,c,n,a=null===(n=null===(c=null===(e=t.headers.get("Content-Disposition"))||void 0===e?void 0:e.split)||void 0===c?void 0:c.call(e,"''"))||void 0===n?void 0:n[1];st.saveAs(t.body,a||"result.zip")}))}},{key:"downloadSelectedRows",value:function(){this.batchService.batchDownloader.download()}},{key:"discardSelectedRows",value:function(){this.batchService.batchDownloader.clear()}},{key:"isSelectedRow",value:function(t){return this.batchService.batchDownloader.isSelected(t)}},{key:"selectRow",value:function(t,e){t.stopPropagation(),e.ok&&e.execState===rt.a.Finished&&this.batchService.batchDownloader.toggle(e)}},{key:"countOfSelectedRows",value:function(){return this.batchService.batchDownloader.size}},{key:"nextPage",value:function(){this.updateTable((this.batchesResult.batches.number+1).toString(),this.isFiltered)}},{key:"prevPage",value:function(){this.updateTable((this.batchesResult.batches.number-1).toString(),this.isFiltered)}}]),a}(I.a)).\u0275fac=function(t){return new(t||Kt)(h.Mb(f.a),h.Mb(O.AuthenticationService),h.Mb(lt.b),h.Mb(l.d),h.Mb(ut.a))},Kt.\u0275cmp=h.Gb({type:Kt,selectors:[["batch-list"]],features:[h.xb],decls:7,vars:1,consts:[[4,"ngIf"],["uploadFilesButton",""],["justify-content","space-between","align-items","center","gap","unit(1)"],["justify-content","flex-end","align-items","center","gap","unit(1)"],[4,"ngTemplateOutlet"],["mat-stroked-button","",3,"disabled","click"],["style","vertical-align: baseline;",4,"ngIf"],[3,"isWaiting"],["mat-table","",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","createdOn"],["matColumnDef","Owner"],["matColumnDef","isBatchConsistent"],["matColumnDef","sourceCode"],["matColumnDef","execState"],["matColumnDef","bts"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"deleted-table-row","selected-color","click",4,"matRowDef","matRowDefColumns"],["justify-content","space-between","align-items","center"],[3,"pageableDefault","prev","next"],[2,"vertical-align","baseline"],["mat-header-cell",""],["mat-cell",""],[1,"no-wrap"],["justify-content","flex-end","gap","9px"],["mat-flat-button","","size","forTableRow","color","primary",3,"disabled","routerLink"],["mat-flat-button","","size","forTableRow","color","primary",3,"disabled","click"],["mat-flat-button","","color","warn","size","forTableRow","title","Delete",3,"click"],["mat-header-row",""],["mat-row","",3,"click"],["justify-content","center","align-items","center","gap","unit(1)"],[1,"selected-count"],["mat-flat-button","","color","primary",3,"click"],["mat-flat-button","","color","primary","routerLink","/batch/add",3,"disabled"]],template:function(t,e){1&t&&(h.Ec(0,$t,129,17,"ct-section",0),h.Gc(1,"\n\n\n\n"),h.Ec(2,Qt,5,4,"ng-template",null,1,h.Fc),h.Gc(4,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"),h.Ec(5,Jt,5,4,"ng-template",null,1,h.Fc)),2&t&&h.kc("ngIf",e.batchesResult)},directives:[o.m,G.a,p.a,S.a,_.a,q.a,R.a,o.r,U.b,g.a,m.a,dt.a,it.j,it.c,it.e,it.b,it.g,it.i,H.a,B.a,ft.a,it.d,it.a,r.d,ht.a,it.f,it.h],pipes:[l.c,o.e],styles:[".selected-color[_ngcontent-%COMP%], .selected-count[_ngcontent-%COMP%]{background:rgba(255,193,7,.18)}.selected-count[_ngcontent-%COMP%]{border-radius:4px;padding:10px 20px 8px}"]}),function(t,e,c,n){var a,i=arguments.length,o=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,c):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,c,n);else for(var b=t.length-1;b>=0;b--)(a=t[b])&&(o=(i<3?a(o):i>3?a(e,c,o):a(e,c))||o);i>3&&o&&Object.defineProperty(e,c,o)}([Object(bt.a)({question:function(t,e){return t.stopPropagation(),{text:Object(ot.a)("batch.delete-dialog.Do you want to delete Batch _batchId_"),params:{batchId:e.batch.id}}},rejectTitle:""+Object(ot.a)("batch.delete-dialog.Cancel"),resolveTitle:""+Object(ot.a)("batch.delete-dialog.Delete")}),Gt("design:type",Function),Gt("design:paramtypes",[Event,Object]),Gt("design:returntype",void 0)],Kt.prototype,"delete",null),Kt),Yt=a("iuQL"),Zt=[O.Role.Admin,O.Role.Data,O.Role.Manager,O.Role.Operator],te=[{path:"",component:et,canActivate:[Yt.a],data:{requiredRoles:Zt},children:[{path:"",component:Xt,canActivate:[Yt.a],data:{requiredRoles:Zt}},{path:":batchId/status",component:A,canActivate:[Yt.a],data:{backConfig:["../","../"],requiredRoles:Zt}},{path:"add",component:W,canActivate:[Yt.a],data:{backConfig:["../"],requiredRoles:Zt}},{path:":batchId/source-code/:sourceCodeId/exec-context/:execContextId/state",component:at,canActivate:[Yt.a],data:{backConfig:["../","../","../","../","../","../"],requiredRoles:Zt}}]}],ee=((Wt=function t(){i(this,t)}).\u0275mod=h.Kb({type:Wt}),Wt.\u0275inj=h.Jb({factory:function(t){return new(t||Wt)},imports:[[r.g.forChild(te)],r.g]}),Wt),ce=((Vt=function t(){i(this,t)}).\u0275mod=h.Kb({type:Vt}),Vt.\u0275inj=h.Jb({factory:function(t){return new(t||Vt)},imports:[[o.c,ee,X.a,u.a,s.g,s.o,ct.a,l.b.forChild({})]]}),Vt)}}])}();