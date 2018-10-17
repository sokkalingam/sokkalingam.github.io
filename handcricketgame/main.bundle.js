webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/animations/ChatAnimation.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = __webpack_require__("./node_modules/@angular/animations/@angular/animations.es5.js");
exports.ChatAnimation = [
    animations_1.trigger('sent', [
        animations_1.transition('* => *', [
            animations_1.animate(300, animations_1.keyframes([
                animations_1.style({ opacity: 0, transform: 'translateY(100%)', offset: 0 }),
                animations_1.style({ opacity: 1, transform: 'translateY(-30px)', offset: 0.4 }),
                animations_1.style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 })
            ]))
        ])
    ]),
    animations_1.trigger('received', [
        animations_1.transition('* => *', [
            animations_1.animate(300, animations_1.keyframes([
                animations_1.style({ opacity: 0, transform: 'translateY(-100%)', offset: 0 }),
                animations_1.style({ opacity: 1, transform: 'translateY(30px)', offset: 0.4 }),
                animations_1.style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 })
            ]))
        ])
    ])
];
//# sourceMappingURL=ChatAnimation.js.map

/***/ }),

/***/ "./src/app/animations/GameAnimation.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = __webpack_require__("./node_modules/@angular/animations/@angular/animations.es5.js");
exports.GameAnimation = [
    animations_1.trigger('runs', [
        animations_1.transition('* => *', [
            animations_1.animate(300, animations_1.keyframes([
                animations_1.style({ opacity: 0, transform: 'translateY(100%)', offset: 0 }),
                animations_1.style({ opacity: 1, transform: 'translateY(-20px)', offset: 0.3 }),
                animations_1.style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 })
            ]))
        ])
    ]),
    animations_1.trigger('played', [
        animations_1.transition('* => *', [
            animations_1.animate(300, animations_1.keyframes([
                animations_1.style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
                animations_1.style({ opacity: 1, transform: 'translateX(20px)', offset: 0.3 }),
                animations_1.style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
            ]))
        ])
    ]),
    animations_1.trigger('yourTurn', [
        animations_1.transition('* => *', [
            animations_1.animate(300, animations_1.keyframes([
                animations_1.style({ opacity: 0, transform: 'translateY(100%)', offset: 0 }),
                animations_1.style({ opacity: 1, transform: 'translateY(-20px)', offset: 0.3 }),
                animations_1.style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 })
            ]))
        ])
    ]),
    animations_1.trigger('out', [
        animations_1.transition('* => *', [
            animations_1.animate(1000, animations_1.keyframes([
                animations_1.style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
                animations_1.style({ opacity: 1, transform: 'translateX(30px)', offset: 0.3 }),
                animations_1.style({ opacity: 1, transform: 'translateX(-30px)', offset: 0.5 }),
                animations_1.style({ opacity: 1, transform: 'translateX(30px)', offset: 0.7 }),
                animations_1.style({ opacity: 1, transform: 'translateX(0)', offset: 1 })
            ]))
        ])
    ]),
    animations_1.trigger('wins', [
        animations_1.transition('* => *', [
            animations_1.animate(500, animations_1.keyframes([
                animations_1.style({ opacity: 0, transform: 'translateY(100%)', offset: 0 }),
                animations_1.style({ opacity: 1, transform: 'translateY(-20px)', offset: 0.3 }),
                animations_1.style({ opacity: 1, transform: 'translateY(20px)', offset: 0.6 }),
                animations_1.style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
            ]))
        ])
    ]),
    animations_1.trigger('battingBowling', [
        animations_1.transition('* => *', [
            animations_1.animate(1000, animations_1.keyframes([
                animations_1.style({ opacity: 1, offset: 0 }),
                animations_1.style({ opacity: 0, offset: 0.5 }),
                animations_1.style({ opacity: 1, offset: 1 })
            ]))
        ])
    ]),
    animations_1.trigger('leftColumn', [
        animations_1.transition('* => *', [
            animations_1.animate('1s', animations_1.keyframes([
                animations_1.style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
                animations_1.style({ opacity: 1, transform: 'translateX(-100%)', offset: 0.5 }),
                animations_1.style({ opacity: 1, transform: 'translateX(0)', offset: 1 })
            ]))
        ])
    ]),
    animations_1.trigger('rightColumn', [
        animations_1.transition('* => *', [
            animations_1.animate('1s', animations_1.keyframes([
                animations_1.style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
                animations_1.style({ opacity: 1, transform: 'translateX(100%)', offset: 0.5 }),
                animations_1.style({ opacity: 1, transform: 'translateX(0)', offset: 1 })
            ]))
        ])
    ]),
    animations_1.trigger('inputButton', [
        animations_1.transition('* => *', [
            animations_1.animate(200, animations_1.keyframes([
                animations_1.style({ opacity: 1, transform: 'scale(1)', marginLeft: '0px', marginRight: '0px', offset: 0 }),
                animations_1.style({ opacity: 1, transform: 'scale(2)', marginLeft: '5px', marginRight: '5px', offset: 0.5 }),
                animations_1.style({ opacity: 1, transform: 'scale(1)', marginLeft: '0px', marginRight: '0px', offset: 1 })
            ]))
        ])
    ]),
    animations_1.trigger('restartButton', [
        animations_1.transition('* => *', [
            animations_1.animate(1000, animations_1.keyframes([
                animations_1.style({ opacity: 1, transform: 'translateX(-200%)', offset: 0 }),
                animations_1.style({ opacity: 1, transform: 'translateX(0)', offset: 0.5 }),
                animations_1.style({ opacity: 1, transform: 'scale(2)', offset: 0.8 }),
                animations_1.style({ opacity: 1, transform: 'scale(1)', offset: 1 })
            ]))
        ])
    ]),
    animations_1.trigger('dailyLeaders', [
        animations_1.transition('* => *', [
            animations_1.animate(2000, animations_1.keyframes([
                animations_1.style({ opacity: 1, transform: 'translateY(200%)', offset: 0 }),
                animations_1.style({ opacity: 1, transform: 'translateY(200%)', offset: 0.5 }),
                animations_1.style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
            ]))
        ])
    ])
];
//# sourceMappingURL=GameAnimation.js.map

/***/ }),

/***/ "./src/app/animations/PlaySelectAnimation.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = __webpack_require__("./node_modules/@angular/animations/@angular/animations.es5.js");
exports.PlaySelectAnimation = [
    animations_1.trigger('battingButton', [
        animations_1.transition('* => *', [
            animations_1.animate(1000, animations_1.keyframes([
                animations_1.style({ opacity: 0, transform: 'translateY(500%)', offset: 0 }),
                animations_1.style({ opacity: 1, transform: 'translateY(0)', offset: 0.5 })
            ]))
        ])
    ]),
    animations_1.trigger('bowlingButton', [
        animations_1.transition('* => *', [
            animations_1.animate(1000, animations_1.keyframes([
                animations_1.style({ opacity: 0, transform: 'translateY(500%)', offset: 0 }),
                animations_1.style({ opacity: 1, transform: 'translateY(500%)', offset: 0.4 }),
                animations_1.style({ opacity: 1, transform: 'translateY(0)', offset: 0.8 })
            ]))
        ])
    ]),
    animations_1.trigger('tossCoinButton', [
        animations_1.transition('* => *', [
            animations_1.animate(1000, animations_1.keyframes([
                animations_1.style({ opacity: 0, transform: 'translateY(500%)', offset: 0 }),
                animations_1.style({ opacity: 1, transform: 'translateY(500%)', offset: 0.7 }),
                animations_1.style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
            ]))
        ])
    ])
];
//# sourceMappingURL=PlaySelectAnimation.js.map

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".app-content {\r\n  top: -55px;\r\n  position: relative;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"main-container\">\r\n  <div class='title-img'></div>\r\n  <hr />\r\n  <navigation></navigation>\r\n  <div class=\"app-content\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                ga('set', 'page', event.urlAfterRedirects);
                ga('send', 'pageview');
            }
        });
    }
    var _a;
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
var animations_1 = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser/animations.es5.js");
var app_routing_module_1 = __webpack_require__("./src/app/routes/app-routing.module.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var navigation_component_1 = __webpack_require__("./src/app/components/navigation/navigation.component.ts");
var offline_game_component_1 = __webpack_require__("./src/app/components/offline-game/offline-game.component.ts");
var game_update_component_1 = __webpack_require__("./src/app/components/offline-game/game-updates/game-update.component.ts");
var score_board_component_1 = __webpack_require__("./src/app/components/offline-game/score-board/score-board.component.ts");
var game_status_component_1 = __webpack_require__("./src/app/components/offline-game/game-status/game-status.component.ts");
var gameplay_component_1 = __webpack_require__("./src/app/components/offline-game/gameplay/gameplay.component.ts");
var play_select_component_1 = __webpack_require__("./src/app/components/offline-game/play-select/play-select.component.ts");
var online_game_component_1 = __webpack_require__("./src/app/components/online-game/online-game.component.ts");
var join_game_component_1 = __webpack_require__("./src/app/components/online-game/join-game/join-game.component.ts");
var chat_component_1 = __webpack_require__("./src/app/components/online-game/chat/chat.component.ts");
var play_component_1 = __webpack_require__("./src/app/components/online-game/play/play.component.ts");
var online_game_status_component_1 = __webpack_require__("./src/app/components/online-game/online-game-status/online-game-status.component.ts");
var online_score_board_component_1 = __webpack_require__("./src/app/components/online-game/online-score-board/online-score-board.component.ts");
var feedback_component_1 = __webpack_require__("./src/app/components/feedback/feedback.component.ts");
var howtoplay_component_1 = __webpack_require__("./src/app/components/howtoplay/howtoplay.component.ts");
var share_component_1 = __webpack_require__("./src/app/components/share/share.component.ts");
var play_table_component_1 = __webpack_require__("./src/app/components/shared/play-table/play-table.component.ts");
var progress_bar_component_1 = __webpack_require__("./src/app/components/shared/progress-bar/progress-bar.component.ts");
var numpad_component_1 = __webpack_require__("./src/app/components/shared/numpad/numpad.component.ts");
var socket_service_1 = __webpack_require__("./src/app/services/socket.service.ts");
var game_service_1 = __webpack_require__("./src/app/services/game.service.ts");
var application_service_1 = __webpack_require__("./src/app/services/application.service.ts");
var play_service_1 = __webpack_require__("./src/app/services/play.service.ts");
var player_service_1 = __webpack_require__("./src/app/services/player.service.ts");
var helper_service_1 = __webpack_require__("./src/app/services/helper.service.ts");
var countdown_service_1 = __webpack_require__("./src/app/services/countdown.service.ts");
var chat_service_1 = __webpack_require__("./src/app/services/chat.service.ts");
var game_animation_service_1 = __webpack_require__("./src/app/services/game-animation.service.ts");
var stats_service_1 = __webpack_require__("./src/app/services/stats.service.ts");
// External Modules
var ngx_sharebuttons_1 = __webpack_require__("./node_modules/ngx-sharebuttons/index.js");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule,
                router_1.RouterModule,
                http_1.HttpModule,
                animations_1.BrowserAnimationsModule,
                ngx_sharebuttons_1.ShareButtonsModule.forRoot()
            ],
            declarations: [app_component_1.AppComponent,
                navigation_component_1.NavigationComponent,
                offline_game_component_1.OfflineGameComponent,
                game_update_component_1.GameUpdateComponent,
                score_board_component_1.ScoreBoardComponent,
                game_status_component_1.GameStatusComponent,
                gameplay_component_1.GameplayComponent,
                play_select_component_1.PlaySelectComponent,
                online_game_component_1.OnlineGameComponent,
                join_game_component_1.JoinGameComponent,
                chat_component_1.ChatComponent,
                play_component_1.PlayComponent,
                online_game_status_component_1.OnlineGameStatusComponent,
                online_score_board_component_1.OnlineScoreBoardComponent,
                feedback_component_1.FeedbackComponent,
                howtoplay_component_1.HowToPlayComponent,
                share_component_1.ShareComponent,
                play_table_component_1.PlayTableComponent,
                progress_bar_component_1.ProgressBarComponent,
                numpad_component_1.NumpadComponent
            ],
            providers: [socket_service_1.SocketService,
                game_service_1.GameService,
                application_service_1.ApplicationService,
                play_service_1.PlayService,
                player_service_1.PlayerService,
                helper_service_1.HelperService,
                countdown_service_1.CountdownService,
                chat_service_1.ChatService,
                game_animation_service_1.GameAnimationService,
                stats_service_1.StatsService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/components/feedback/feedback.component.css":
/***/ (function(module, exports) {

module.exports = ".submit-button {\r\n  margin-top: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/feedback/feedback.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf='!buttonClicked'>\r\n  <h3 class=\"text-green\">Feedback</h3>\r\n  <form>\r\n    <div class=\"form-group\">\r\n      <textarea class=\"form-control\" rows=\"3\" name='body' [(ngModel)]='email.body'></textarea>\r\n    </div>\r\n  </form>\r\n\r\n  <h4 class=\"text-yellow\">Optional Fields</h4>\r\n\r\n  <form class=\"form-inline\">\r\n    <div class=\"form-group\">\r\n      <label>Name</label>\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]='email.name' name='name' placeholder=\"Jane Doe\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Email</label>\r\n      <input type=\"email\" class=\"form-control\" [(ngModel)]='email.email' name='email' placeholder=\"jane.doe@example.com\">\r\n    </div>\r\n  </form>\r\n\r\n\r\n  <button (click)='submitFeedback()' class=\"submit-button btn btn-primary btn-lg\"\r\n  [disabled]='!email.body?.length'>Submit</button>\r\n\r\n</div>\r\n\r\n<div class='text-center' *ngIf='buttonClicked && !submitted'>\r\n  <img src=\"../../../assets/loading.gif\" />\r\n</div>\r\n\r\n\r\n<div *ngIf='submitted' class=\"text-center\">\r\n  <h3>Thank you for your valuable feedback. We will read every one of them.</h3>\r\n  <h3 class=\"text-red\">Hand Cricket Team</h3>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/feedback/feedback.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var Email_1 = __webpack_require__("./src/app/model/Email.ts");
var http_1 = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
var application_service_1 = __webpack_require__("./src/app/services/application.service.ts");
var FeedbackComponent = /** @class */ (function () {
    function FeedbackComponent(http, appService) {
        this.http = http;
        this.appService = appService;
    }
    FeedbackComponent.prototype.ngOnInit = function () {
        this.appService.wakeServer();
        this.email = new Email_1.Email();
        this.buttonClicked = false;
        this.submitted = false;
    };
    FeedbackComponent.prototype.submitFeedback = function () {
        var _this = this;
        this.buttonClicked = true;
        this.sendEmail(this.email).subscribe(function (str) {
            console.log(str);
            _this.submitted = true;
        }, function (error) {
            console.log(error);
        });
    };
    FeedbackComponent.prototype.sendEmail = function (email) {
        return this.http.post(this.appService.baseUrl + '/email/feedback', email)
            .map(function (response) {
            console.log('Email: ' + JSON.stringify(response));
            return response.text();
            ;
        });
    };
    var _a, _b;
    FeedbackComponent = __decorate([
        core_1.Component({
            selector: 'feedback',
            template: __webpack_require__("./src/app/components/feedback/feedback.component.html"),
            styles: [__webpack_require__("./src/app/components/feedback/feedback.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object, typeof (_b = typeof application_service_1.ApplicationService !== "undefined" && application_service_1.ApplicationService) === "function" && _b || Object])
    ], FeedbackComponent);
    return FeedbackComponent;
}());
exports.FeedbackComponent = FeedbackComponent;
//# sourceMappingURL=feedback.component.js.map

/***/ }),

/***/ "./src/app/components/howtoplay/howtoplay.component.css":
/***/ (function(module, exports) {

module.exports = ".bg {\r\n  background-color: #232323;\r\n  padding: 5px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/howtoplay/howtoplay.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n  <h3 class='text-blue'>How To Play?</h3>\r\n\r\n  <div class=\"bg\">\r\n    <p>\r\n      It is a two player game. One person bats while the other person bowls. A player can play any number between 0 and 6.\r\n    </p>\r\n    <p>\r\n      Batsman and Bowler input a random number each. If the numbers match, batsman is out else batsman's input is added to his total score as runs.\r\n    </p>\r\n    <p>\r\n      If batsman plays 0 and bowler plays a number other than 0, bowler's input is added to batsman's score.\r\n    </p>\r\n    <p>\r\n      When batsman gets out, batsman becomes bowler and bowler becomes batsman. Whoever scores the highest runs wins.\r\n    </p>\r\n  </div>\r\n\r\n  <h4 class='text-red'>Example</h4>\r\n  <div class=\"bg\">\r\n    <p>Batsman plays 5, bowler plays 4. Batsman scores 5 runs.</p>\r\n    <p>Batsman plays 0, bowler plays 3. Batsman scores 3 runs, total of 8 runs.</p>\r\n    <p>Batsman plays 6, bowler plays 6. Batsman is out with a total of 8 runs.</p>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/howtoplay/howtoplay.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var HowToPlayComponent = /** @class */ (function () {
    function HowToPlayComponent() {
    }
    HowToPlayComponent = __decorate([
        core_1.Component({
            selector: 'how-to-play',
            template: __webpack_require__("./src/app/components/howtoplay/howtoplay.component.html"),
            styles: [__webpack_require__("./src/app/components/howtoplay/howtoplay.component.css")]
        })
    ], HowToPlayComponent);
    return HowToPlayComponent;
}());
exports.HowToPlayComponent = HowToPlayComponent;
//# sourceMappingURL=howtoplay.component.js.map

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.css":
/***/ (function(module, exports) {

module.exports = "body {\r\n    font-family: \"Lato\", sans-serif;\r\n}\r\n\r\n.sidenav {\r\n    height: 100%;\r\n    width: 0;\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: #333;\r\n    overflow-x: hidden;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n    padding-top: 60px;\r\n    text-align:center;\r\n    white-space: nowrap;\r\n}\r\n\r\n.sidenav a {\r\n    padding: 8px 8px 8px 32px;\r\n    text-decoration: none;\r\n    font-size: 25px;\r\n    color: #ddd;\r\n    display: block;\r\n    -webkit-transition: 0.3s;\r\n    transition: 0.3s;\r\n\r\n}\r\n\r\n.sidenav a:hover{\r\n    color: #f1f1f1;\r\n}\r\n\r\n.sidenav .closebtn {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 25px;\r\n    font-size: 36px;\r\n    margin-left: 50px;\r\n}\r\n\r\n@media screen and (max-height: 450px) {\r\n  .sidenav {padding-top: 15px;}\r\n  .sidenav a {font-size: 18px;}\r\n}\r\n\r\n.menu-open {\r\n  font-size:30px;\r\n  cursor:pointer;\r\n  position:relative;\r\n  top:-75px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<span class='menu-open' (click)=\"openNav()\">&#9776;</span>\r\n\r\n<div id=\"mySidenav\" class=\"sidenav\">\r\n  <a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"closeNav()\">&times;</a>\r\n  <a routerLinkActive=\"active\" routerLink=\"/offlineGame\" (click)=\"closeNav()\">Play Computer</a>\r\n  <a routerLinkActive=\"active\" routerLink=\"/onlineGame\" (click)=\"closeNav()\">Play Online</a>\r\n  <a routerLinkActive=\"active\" routerLink=\"/howtoplay\" (click)=\"closeNav()\">How To Play</a>\r\n  <a routerLinkActive=\"active\" routerLink=\"/feedback\" (click)=\"closeNav()\">Feedback</a>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.openNav = function () {
        document.getElementById("mySidenav").style.width = "100%";
    };
    NavigationComponent.prototype.closeNav = function () {
        document.getElementById("mySidenav").style.width = "0";
    };
    NavigationComponent = __decorate([
        core_1.Component({
            selector: 'navigation',
            template: __webpack_require__("./src/app/components/navigation/navigation.component.html"),
            styles: [__webpack_require__("./src/app/components/navigation/navigation.component.css")]
        })
    ], NavigationComponent);
    return NavigationComponent;
}());
exports.NavigationComponent = NavigationComponent;
//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ "./src/app/components/offline-game/game-status/game-status.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf='(game.gameStatus == GameStatus.IN_PROGRESS)'>\r\n  <div class=\"alert alert-info\" role=\"alert\" *ngIf='game.batsman.type == PlayerType.User'>You are now BATTING</div>\r\n  <div class=\"alert alert-warning\" role=\"alert\" *ngIf='game.batsman.type == PlayerType.Computer'>You are now BOWLING</div>\r\n</div>\r\n<div *ngIf='(game.gameStatus == GameStatus.USER_WON)' class=\"alert alert-success\" role=\"alert\">\r\n  Game Over! You Won\r\n</div>\r\n<div *ngIf='(game.gameStatus == GameStatus.COMPUTER_WON)' class=\"alert alert-danger\" role=\"alert\">\r\n  Game Over! Computer Won\r\n</div>\r\n<div *ngIf='(game.gameStatus == GameStatus.DRAW)' class=\"alert alert-warning\" role=\"alert\">\r\n  Game Over! Game is Draw\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/offline-game/game-status/game-status.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var GameStatus_1 = __webpack_require__("./src/app/enum/GameStatus.ts");
var PlayerType_1 = __webpack_require__("./src/app/enum/PlayerType.ts");
var Game_1 = __webpack_require__("./src/app/model/Game.ts");
var GameStatusComponent = /** @class */ (function () {
    function GameStatusComponent() {
        this.GameStatus = GameStatus_1.GameStatus;
        this.PlayerType = PlayerType_1.PlayerType;
    }
    var _a;
    __decorate([
        core_1.Input(),
        __metadata("design:type", typeof (_a = typeof Game_1.Game !== "undefined" && Game_1.Game) === "function" && _a || Object)
    ], GameStatusComponent.prototype, "game", void 0);
    GameStatusComponent = __decorate([
        core_1.Component({
            selector: 'game-status',
            template: __webpack_require__("./src/app/components/offline-game/game-status/game-status.component.html")
        })
    ], GameStatusComponent);
    return GameStatusComponent;
}());
exports.GameStatusComponent = GameStatusComponent;
//# sourceMappingURL=game-status.component.js.map

/***/ }),

/***/ "./src/app/components/offline-game/game-updates/game-update.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf='updates.length > 0'>\r\n  <h3>Game Updates</h3>\r\n  <div *ngFor=\"let update of updates\">\r\n    <div class=\"well well-sm\" align=\"center\"\r\n    [class.alert-danger] ='update.type == 0' [class.alert-warning]='update.type == 1'\r\n    [class.alert-info]   ='update.type == 2' [class.alert-success]='update.type == 3'>\r\n    {{update.message}}\r\n  </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/offline-game/game-updates/game-update.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var GameUpdateComponent = /** @class */ (function () {
    function GameUpdateComponent() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], GameUpdateComponent.prototype, "updates", void 0);
    GameUpdateComponent = __decorate([
        core_1.Component({
            selector: 'game-update',
            template: __webpack_require__("./src/app/components/offline-game/game-updates/game-update.component.html")
        })
    ], GameUpdateComponent);
    return GameUpdateComponent;
}());
exports.GameUpdateComponent = GameUpdateComponent;
//# sourceMappingURL=game-update.component.js.map

/***/ }),

/***/ "./src/app/components/offline-game/gameplay/gameplay.component.css":
/***/ (function(module, exports) {

module.exports = ".daily-leaders {\r\n  position: relative;\r\n  font-size: 15px;\r\n  top: 10px;\r\n  font-family: 'Open Sans';\r\n  color: #fff;\r\n}\r\n\r\n.leader-col {\r\n  background-color: #2b2937;\r\n  border-radius: 5px 0px 0px 5px;\r\n}\r\n\r\n.max-runs {\r\n  background-color: #1abc9c;\r\n}\r\n\r\n.max-wins {\r\n  background-color: #5d6a9a;\r\n  border-radius: 0px 5px 5px 0px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/offline-game/gameplay/gameplay.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row text-center\">\r\n\r\n  <div class=\"col-xs-5\" [@leftColumn]='gameAS.gameRestart'>\r\n    <play-table [player]='user' [otherPlayer]='computer' [game]='game'></play-table>\r\n  </div>\r\n\r\n<div class=\"col-xs-2\">\r\n  <progress-bar [player]='playerService.getCurrentPlayer()'\r\n                [otherPlayer]='playerService.getOtherPlayer()'\r\n                [game]='gameService.getGame()'\r\n                [playerHeight]='progressBarService.getBarHeight(playerService.getCurrentPlayer().runs, gameService.getGame().targetScore)'\r\n                [otherPlayerHeight]='progressBarService.getBarHeight(playerService.getOtherPlayer().runs, gameService.getGame().targetScore)'>\r\n  </progress-bar>\r\n</div>\r\n\r\n  <div class=\"col-xs-5\" [@rightColumn]='gameAS.gameRestart'>\r\n    <play-table [player]='computer' [otherPlayer]='user' [game]='game'></play-table>\r\n  </div>\r\n\r\n</div>\r\n\r\n<div class=\"row text-center\" *ngIf='showInputs'>\r\n  <div *ngIf='gameService.isGameInProgress()'>\r\n    <numpad (numPressedEvent)='clickInput($event)'></numpad>\r\n  </div>\r\n\r\n  <div *ngIf='!gameService.isGameInProgress()'>\r\n    <button type=\"button\" class=\"btn btn-primary btn-lg\" (click)='choseToBat()' [@battingButton]>Batting</button>\r\n    <button type=\"button\" class=\"btn btn-warning btn-lg\" (click)='choseToBowl()' [@bowlingButton]>Bowling</button>\r\n    <button type=\"button\" class=\"btn btn-danger btn-lg\" (click)='toss()' [@tossCoinButton]>Toss Coin</button>\r\n  </div>\r\n\r\n  <div class='equal text-center daily-leaders' [@dailyLeaders]>\r\n    <div class='col-xs-4 leader-col'>\r\n      <div>DAILY</div>\r\n      <div>LEADERS</div>\r\n    </div>\r\n    <div class='col-xs-4 max-runs'>\r\n      <div *ngIf='statsService.playerMaxRuns'>\r\n        <div>{{statsService.playerMaxRuns?.name | uppercase}}</div>\r\n        <div>{{statsService.playerMaxRuns?.runs}} runs</div>\r\n      </div>\r\n      <div *ngIf='!statsService.playerMaxRuns'>\r\n        <div>NONE</div>\r\n      </div>\r\n    </div>\r\n    <div class='col-xs-4 max-wins'>\r\n      <div *ngIf='statsService.playerMaxWins'>\r\n        <div>{{statsService.playerMaxWins?.name | uppercase}}</div>\r\n        <div>{{statsService.playerMaxWins?.wins}} wins</div>\r\n      </div>\r\n      <div *ngIf='!statsService.playerMaxWins'>\r\n        <div>NONE</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/offline-game/gameplay/gameplay.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var Player_1 = __webpack_require__("./src/app/model/Player.ts");
var Game_1 = __webpack_require__("./src/app/model/Game.ts");
var UpdateType_1 = __webpack_require__("./src/app/enum/UpdateType.ts");
var PlayerType_1 = __webpack_require__("./src/app/enum/PlayerType.ts");
var PlayerStatus_1 = __webpack_require__("./src/app/enum/PlayerStatus.ts");
var GameStatus_1 = __webpack_require__("./src/app/enum/GameStatus.ts");
var progress_bar_service_1 = __webpack_require__("./src/app/services/progress-bar.service.ts");
var game_service_1 = __webpack_require__("./src/app/services/game.service.ts");
var player_service_1 = __webpack_require__("./src/app/services/player.service.ts");
var helper_service_1 = __webpack_require__("./src/app/services/helper.service.ts");
var game_animation_service_1 = __webpack_require__("./src/app/services/game-animation.service.ts");
var stats_service_1 = __webpack_require__("./src/app/services/stats.service.ts");
var GameAnimation_1 = __webpack_require__("./src/app/animations/GameAnimation.ts");
var PlaySelectAnimation_1 = __webpack_require__("./src/app/animations/PlaySelectAnimation.ts");
var GameplayComponent = /** @class */ (function () {
    function GameplayComponent(progressBarService, gameService, playerService, helperService, gameAS, statsService) {
        this.progressBarService = progressBarService;
        this.gameService = gameService;
        this.playerService = playerService;
        this.helperService = helperService;
        this.gameAS = gameAS;
        this.statsService = statsService;
        this.Math = Math;
        /**
        * Init Enums
        */
        this.PlayerStatus = PlayerStatus_1.PlayerStatus;
        this.PlayerType = PlayerType_1.PlayerType;
        this.GameStatus = GameStatus_1.GameStatus;
        this.UpdateType = UpdateType_1.UpdateType;
    }
    GameplayComponent.prototype.ngOnInit = function () {
        this.showInputs = true;
        this.statsService.getMaxWinsAndRunsPlayer();
    };
    /**
    * Returns a random number between 0 and 6, both included
    */
    GameplayComponent.prototype.getRandomNumber = function () {
        return this.helperService.getRandomNumber();
    };
    GameplayComponent.prototype.isInputValid = function () {
        return (this.userInput >= 0 && this.userInput <= 6);
    };
    GameplayComponent.prototype.setOut = function (batsman) {
        batsman.status = PlayerStatus_1.PlayerStatus.Out;
        this.hideInputs();
    };
    GameplayComponent.prototype.setNotOut = function (player) {
        player.status = PlayerStatus_1.PlayerStatus.NotOut;
    };
    GameplayComponent.prototype.hideInputs = function () {
        this.showInputs = false;
        var that = this;
        setTimeout(function () { return that.showInputs = true; }, 1000);
    };
    GameplayComponent.prototype.getBatsman = function () { return this.game.getBatsman(); };
    GameplayComponent.prototype.getBowler = function () { return this.game.getBowler(); };
    GameplayComponent.prototype.setGameStatus = function (gameStatus) {
        this.game.gameStatus = gameStatus;
    };
    GameplayComponent.prototype.setUserInput = function () {
        this.user.lastDelivery = this.userInput;
        this.userInput = undefined;
    };
    GameplayComponent.prototype.setComputerInput = function () {
        this.computer.lastDelivery = this.getRandomNumber();
    };
    GameplayComponent.prototype.didInputsMatch = function (batsman, bowler) {
        return batsman.lastDelivery == bowler.lastDelivery;
    };
    GameplayComponent.prototype.setTargetScore = function () {
        if (!this.getBowler().balls)
            this.game.targetScore = this.progressBarService.getNextTargetScore(this.getBatsman().runs);
        else
            this.game.targetScore = this.getBowler().runs;
    };
    GameplayComponent.prototype.addBalls = function (player) {
        player.balls++;
    };
    GameplayComponent.prototype.addRuns = function (batsman, bowler) {
        if (batsman.lastDelivery == 0)
            batsman.runs += bowler.lastDelivery;
        else
            batsman.runs += batsman.lastDelivery;
    };
    GameplayComponent.prototype.clickInput = function (num) {
        this.userInput = num;
        this.play(this.game.batsman.type == PlayerType_1.PlayerType.User);
        this.gameAS.inputs[num]++;
    };
    GameplayComponent.prototype.play = function (userBatting) {
        if (!this.isInputValid())
            return;
        this.setComputerInput();
        this.setUserInput();
        if (userBatting)
            this.batAndBowl(this.user, this.computer);
        else
            this.batAndBowl(this.computer, this.user);
        this.runGameThings();
    };
    GameplayComponent.prototype.runGameThings = function () {
        this.setTargetScore();
    };
    GameplayComponent.prototype.decideGameWinner = function () {
        if (this.getBowler().isOut() && this.getBatsman().runs > this.getBowler().runs) {
            this.getBatsman().status = PlayerStatus_1.PlayerStatus.Won;
            this.getBowler().status = PlayerStatus_1.PlayerStatus.Lost;
            this.setGameStatus(GameStatus_1.GameStatus.GAME_OVER);
            this.getBatsman().wins++;
        }
        else if (this.getBatsman().isOut() && this.getBatsman().runs < this.getBowler().runs) {
            this.getBowler().status = PlayerStatus_1.PlayerStatus.Won;
            this.getBatsman().status = PlayerStatus_1.PlayerStatus.Lost;
            this.setGameStatus(GameStatus_1.GameStatus.GAME_OVER);
            this.getBowler().wins++;
        }
        else if (this.getBatsman().isOut() && this.getBowler().isOut() &&
            this.getBatsman().runs == this.getBowler().runs &&
            this.getBatsman().runs != undefined)
            this.setGameStatus(GameStatus_1.GameStatus.DRAW);
    };
    GameplayComponent.prototype.batAndBowl = function (batsman, bowler) {
        this.gameService.makeBatsman(this.game, batsman);
        this.gameService.makeBowler(this.game, bowler);
        this.addBalls(this.getBatsman());
        if (this.didInputsMatch(this.getBatsman(), this.getBowler())) {
            this.setOut(this.getBatsman());
        }
        else {
            this.setNotOut(this.getBatsman());
            this.addRuns(this.getBatsman(), this.getBowler());
        }
        this.decideGameWinner();
        if (this.getBatsman().isOut() && !this.getBowler().isOut()) {
            this.gameService.makeBatsman(this.game, bowler);
            this.gameService.makeBowler(this.game, batsman);
        }
        this.submitScore();
    };
    GameplayComponent.prototype.choseToBat = function () {
        this.restartGame();
        this.gameService.setPlayersAndGame(this.game, this.user, this.computer);
    };
    GameplayComponent.prototype.choseToBowl = function () {
        this.restartGame();
        this.gameService.setPlayersAndGame(this.game, this.computer, this.user);
    };
    GameplayComponent.prototype.toss = function () {
        (Math.random() < 0.5) ? this.choseToBat() : this.choseToBowl();
    };
    GameplayComponent.prototype.resetPlayer = function (player) {
        player.runs = 0;
        player.balls = 0;
        player.lastDelivery = undefined;
        player.status = PlayerStatus_1.PlayerStatus.NotOut;
    };
    GameplayComponent.prototype.restartGame = function () {
        this.game.gameStatus = GameStatus_1.GameStatus.IN_PROGRESS;
        this.resetPlayer(this.user);
        this.resetPlayer(this.computer);
    };
    GameplayComponent.prototype.submitScore = function () {
        var _this = this;
        if (this.statsService.playerMaxRuns == null ||
            this.statsService.playerMaxWins == null ||
            this.user.runs > this.statsService.playerMaxRuns.runs ||
            this.user.wins > this.statsService.playerMaxWins.wins) {
            this.statsService.submitScore(this.user).subscribe(function (res) {
                console.log('PlayerStats Submit: ' + res);
                _this.statsService.getMaxWinsAndRunsPlayer();
            }, function (error) { return console.log(error); });
        }
    };
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    __decorate([
        core_1.Input(),
        __metadata("design:type", typeof (_a = typeof Player_1.Player !== "undefined" && Player_1.Player) === "function" && _a || Object)
    ], GameplayComponent.prototype, "user", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", typeof (_b = typeof Player_1.Player !== "undefined" && Player_1.Player) === "function" && _b || Object)
    ], GameplayComponent.prototype, "computer", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", typeof (_c = typeof Game_1.Game !== "undefined" && Game_1.Game) === "function" && _c || Object)
    ], GameplayComponent.prototype, "game", void 0);
    GameplayComponent = __decorate([
        core_1.Component({
            selector: 'gameplay',
            template: __webpack_require__("./src/app/components/offline-game/gameplay/gameplay.component.html"),
            styles: [__webpack_require__("./src/app/components/offline-game/gameplay/gameplay.component.css")],
            providers: [progress_bar_service_1.ProgressBarService],
            animations: [GameAnimation_1.GameAnimation, PlaySelectAnimation_1.PlaySelectAnimation]
        }),
        __metadata("design:paramtypes", [typeof (_d = typeof progress_bar_service_1.ProgressBarService !== "undefined" && progress_bar_service_1.ProgressBarService) === "function" && _d || Object, typeof (_e = typeof game_service_1.GameService !== "undefined" && game_service_1.GameService) === "function" && _e || Object, typeof (_f = typeof player_service_1.PlayerService !== "undefined" && player_service_1.PlayerService) === "function" && _f || Object, typeof (_g = typeof helper_service_1.HelperService !== "undefined" && helper_service_1.HelperService) === "function" && _g || Object, typeof (_h = typeof game_animation_service_1.GameAnimationService !== "undefined" && game_animation_service_1.GameAnimationService) === "function" && _h || Object, typeof (_j = typeof stats_service_1.StatsService !== "undefined" && stats_service_1.StatsService) === "function" && _j || Object])
    ], GameplayComponent);
    return GameplayComponent;
}());
exports.GameplayComponent = GameplayComponent;
//# sourceMappingURL=gameplay.component.js.map

/***/ }),

/***/ "./src/app/components/offline-game/offline-game.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<!-- Select Batting Or Bowling -->\r\n<play-select [user]='user' [computer]='computer' [game]='game' *ngIf='game.gameStatus == GameStatus.NOT_STARTED'>\r\n</play-select>\r\n\r\n<div *ngIf='game.gameStatus != GameStatus.NOT_STARTED'>\r\n  <gameplay [user]='user' [computer]='computer' [game]='game'></gameplay>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/offline-game/offline-game.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var Player_1 = __webpack_require__("./src/app/model/Player.ts");
var PlayerType_1 = __webpack_require__("./src/app/enum/PlayerType.ts");
var PlayerStatus_1 = __webpack_require__("./src/app/enum/PlayerStatus.ts");
var GameStatus_1 = __webpack_require__("./src/app/enum/GameStatus.ts");
var player_service_1 = __webpack_require__("./src/app/services/player.service.ts");
var game_service_1 = __webpack_require__("./src/app/services/game.service.ts");
var OfflineGameComponent = /** @class */ (function () {
    function OfflineGameComponent(gameService, playerService) {
        this.gameService = gameService;
        this.playerService = playerService;
        /**
        * Init Enums
        */
        this.PlayerStatus = PlayerStatus_1.PlayerStatus;
        this.PlayerType = PlayerType_1.PlayerType;
        this.GameStatus = GameStatus_1.GameStatus;
    }
    OfflineGameComponent.prototype.ngOnInit = function () {
        this.user = new Player_1.Player(PlayerType_1.PlayerType.User);
        this.computer = new Player_1.Player(PlayerType_1.PlayerType.Computer);
        this.game = this.gameService.getGame();
        this.playerService.setPlayer(this.user);
        this.computer.name = 'Computer';
    };
    var _a, _b;
    OfflineGameComponent = __decorate([
        core_1.Component({
            selector: 'offline-game',
            template: __webpack_require__("./src/app/components/offline-game/offline-game.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof game_service_1.GameService !== "undefined" && game_service_1.GameService) === "function" && _a || Object, typeof (_b = typeof player_service_1.PlayerService !== "undefined" && player_service_1.PlayerService) === "function" && _b || Object])
    ], OfflineGameComponent);
    return OfflineGameComponent;
}());
exports.OfflineGameComponent = OfflineGameComponent;
//# sourceMappingURL=offline-game.component.js.map

/***/ }),

/***/ "./src/app/components/offline-game/play-select/play-select.component.css":
/***/ (function(module, exports) {

module.exports = ".btn-primary, .btn-success, .btn-danger {\r\n  margin-top: 2%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/offline-game/play-select/play-select.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf='!user.name' class=\"form-group\">\r\n  <h3>\r\n    <label for=\"playerName\">Enter your name: </label>\r\n    <input type='text' class='form-control' name='name' [(ngModel)]='name' autocomplete='off' [maxlength]='8' />\r\n  </h3>\r\n  <button type=\"button\" class=\"btn btn-success btn-lg\"\r\n  [disabled]='name?.trim().length == 0' (click)='saveInfo()'>Save</button>\r\n</div>\r\n\r\n<div *ngIf='user.name' class='text-center'>\r\n  <h3>What would you like to do first?</h3>\r\n  <button type=\"button\" class=\"btn btn-primary btn-lg\" (click)='choseToBat()' [@battingButton]>Batting</button>\r\n  <button type=\"button\" class=\"btn btn-success btn-lg\" (click)='choseToBowl()' [@bowlingButton]>Bowling</button>\r\n  <button type=\"button\" class=\"btn btn-danger btn-lg\" (click)='toss()' [@tossCoinButton]>Toss Coin</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/offline-game/play-select/play-select.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var Player_1 = __webpack_require__("./src/app/model/Player.ts");
var Game_1 = __webpack_require__("./src/app/model/Game.ts");
var GameStatus_1 = __webpack_require__("./src/app/enum/GameStatus.ts");
var game_service_1 = __webpack_require__("./src/app/services/game.service.ts");
var PlaySelectAnimation_1 = __webpack_require__("./src/app/animations/PlaySelectAnimation.ts");
var PlaySelectComponent = /** @class */ (function () {
    function PlaySelectComponent(gameService) {
        this.gameService = gameService;
        this.GameStatus = GameStatus_1.GameStatus;
    }
    PlaySelectComponent.prototype.setGameStatus = function (gameStatus) {
        this.game.gameStatus = gameStatus;
    };
    PlaySelectComponent.prototype.choseToBat = function () {
        this.gameService.setPlayersAndGame(this.game, this.user, this.computer);
    };
    PlaySelectComponent.prototype.choseToBowl = function () {
        this.gameService.setPlayersAndGame(this.game, this.computer, this.user);
    };
    PlaySelectComponent.prototype.toss = function () {
        if (Math.random() < 0.5)
            this.choseToBat();
        else
            this.choseToBowl();
    };
    PlaySelectComponent.prototype.saveInfo = function () {
        this.name = this.name.substring(0, 8);
        this.user.name = this.name;
    };
    var _a, _b, _c, _d;
    __decorate([
        core_1.Input(),
        __metadata("design:type", typeof (_a = typeof Player_1.Player !== "undefined" && Player_1.Player) === "function" && _a || Object)
    ], PlaySelectComponent.prototype, "user", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", typeof (_b = typeof Player_1.Player !== "undefined" && Player_1.Player) === "function" && _b || Object)
    ], PlaySelectComponent.prototype, "computer", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", typeof (_c = typeof Game_1.Game !== "undefined" && Game_1.Game) === "function" && _c || Object)
    ], PlaySelectComponent.prototype, "game", void 0);
    PlaySelectComponent = __decorate([
        core_1.Component({
            selector: 'play-select',
            template: __webpack_require__("./src/app/components/offline-game/play-select/play-select.component.html"),
            styles: [__webpack_require__("./src/app/components/offline-game/play-select/play-select.component.css")],
            providers: [game_service_1.GameService],
            animations: [PlaySelectAnimation_1.PlaySelectAnimation]
        }),
        __metadata("design:paramtypes", [typeof (_d = typeof game_service_1.GameService !== "undefined" && game_service_1.GameService) === "function" && _d || Object])
    ], PlaySelectComponent);
    return PlaySelectComponent;
}());
exports.PlaySelectComponent = PlaySelectComponent;
//# sourceMappingURL=play-select.component.js.map

/***/ }),

/***/ "./src/app/components/offline-game/score-board/score-board.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<h3>Score Board</h3>\r\n<div *ngIf=\"user.runs != undefined\" class=\"alert alert-info\">\r\n  You scored {{user.runs}} runs in {{user.balls}} balls\r\n</div>\r\n<div *ngIf=\"computer.runs != undefined\" class=\"alert alert-warning\">\r\n  Computer scored {{computer.runs}} runs in {{computer.balls}} balls\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/offline-game/score-board/score-board.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var Player_1 = __webpack_require__("./src/app/model/Player.ts");
var ScoreBoardComponent = /** @class */ (function () {
    function ScoreBoardComponent() {
    }
    var _a, _b;
    __decorate([
        core_1.Input(),
        __metadata("design:type", typeof (_a = typeof Player_1.Player !== "undefined" && Player_1.Player) === "function" && _a || Object)
    ], ScoreBoardComponent.prototype, "user", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", typeof (_b = typeof Player_1.Player !== "undefined" && Player_1.Player) === "function" && _b || Object)
    ], ScoreBoardComponent.prototype, "computer", void 0);
    ScoreBoardComponent = __decorate([
        core_1.Component({
            selector: 'score-board',
            template: __webpack_require__("./src/app/components/offline-game/score-board/score-board.component.html")
        })
    ], ScoreBoardComponent);
    return ScoreBoardComponent;
}());
exports.ScoreBoardComponent = ScoreBoardComponent;
//# sourceMappingURL=score-board.component.js.map

/***/ }),

/***/ "./src/app/components/online-game/chat/chat.component.css":
/***/ (function(module, exports) {

module.exports = "* {\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: #edeff2;\r\n  font-family: \"Calibri\", \"Roboto\", sans-serif;\r\n}\r\n\r\n.chat_window {\r\n  /*position: absolute;*/\r\n  /*width: calc(100% - 20px);\r\n  max-width: 800px;\r\n  height: 500px;*/\r\n  border-radius: 10px;\r\n  background-color: #fff;\r\n  /*left: 50%;\r\n  top: 50%;*/\r\n  /*transform: translateX(-50%) translateY(-50%);*/\r\n  -webkit-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);\r\n          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);\r\n  background-color: #f8f8f8;\r\n  overflow: visible;\r\n}\r\n\r\n.top_menu {\r\n  background-color: #222;\r\n  width: 100%;\r\n  -webkit-box-shadow: 0 1px 30px rgba(0, 0, 0, 0.1);\r\n          box-shadow: 0 1px 30px rgba(0, 0, 0, 0.1);\r\n  color: #999;\r\n}\r\n\r\n.top_menu .buttons {\r\n  margin: 3px 0 0 20px;\r\n  position: absolute;\r\n}\r\n\r\n.top_menu .buttons .button {\r\n  width: 16px;\r\n  height: 16px;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n  margin-right: 10px;\r\n  position: relative;\r\n}\r\n\r\n.top_menu .buttons .button.close {\r\n  background-color: #f5886e;\r\n}\r\n\r\n.top_menu .buttons .button.minimize {\r\n  background-color: #fdbf68;\r\n}\r\n\r\n.top_menu .buttons .button.maximize {\r\n  background-color: #a3d063;\r\n}\r\n\r\n.top_menu .title {\r\n  text-align: center;\r\n  color: #bcbdc0;\r\n  font-size: 20px;\r\n}\r\n\r\n.messages {\r\n  position: relative;\r\n  list-style: none;\r\n  padding: 5px 5px 0 5px;\r\n  margin: 0;\r\n  height: 315px;\r\n  overflow-y: scroll;\r\n  overflow-x: hidden;\r\n  background-color: #222;\r\n}\r\n\r\n.messages .message {\r\n  clear: both;\r\n  overflow: hidden;\r\n  margin-bottom: 10px;\r\n  -webkit-transition: all 0.5s linear;\r\n  transition: all 0.5s linear;\r\n  opacity: 0;\r\n}\r\n\r\n.messages .message.left .avatar {\r\n  background-color: #f5886e;\r\n  float: left;\r\n}\r\n\r\n.messages .message.left .text_wrapper {\r\n  background-color: #ffe6cb;\r\n  margin-left: 20px;\r\n}\r\n\r\n.messages .message.left .text_wrapper::after, .messages .message.left .text_wrapper::before {\r\n  right: 100%;\r\n  border-right-color: #ffe6cb;\r\n}\r\n\r\n.messages .message.left .text {\r\n  color: #c48843;\r\n}\r\n\r\n.messages .message.right .avatar {\r\n  background-color: #fdbf68;\r\n  float: right;\r\n}\r\n\r\n.messages .message.right .text_wrapper {\r\n  background-color: #c7eafc;\r\n  margin-right: 20px;\r\n  float: right;\r\n}\r\n\r\n.messages .message.right .text_wrapper::after, .messages .message.right .text_wrapper::before {\r\n  left: 100%;\r\n  border-left-color: #c7eafc;\r\n}\r\n\r\n.messages .message.right .text {\r\n  color: #45829b;\r\n}\r\n\r\n.messages .message.appeared {\r\n  opacity: 1;\r\n}\r\n\r\n.messages .message .avatar {\r\n  width: 30px;\r\n  height: 30px;\r\n  /*border-radius: 100%;*/\r\n  display: inline-block;\r\n}\r\n\r\n.messages .message .text_wrapper {\r\n  display: inline-block;\r\n  padding: 5px;\r\n  /*border-radius: 6px;*/\r\n  width: calc(100% - 85px);\r\n  min-width: 100px;\r\n  position: relative;\r\n}\r\n\r\n.messages .message .text_wrapper::after, .messages .message .text_wrapper:before {\r\n  top: 18px;\r\n  border: solid transparent;\r\n  content: \" \";\r\n  height: 0;\r\n  width: 0;\r\n  position: absolute;\r\n  pointer-events: none;\r\n}\r\n\r\n.messages .message .text_wrapper::after {\r\n  border-width: 13px;\r\n  margin-top: 0px;\r\n}\r\n\r\n.messages .message .text_wrapper::before {\r\n  border-width: 15px;\r\n  margin-top: -2px;\r\n}\r\n\r\n.messages .message .text_wrapper .text {\r\n  font-size: 15px;\r\n  font-weight: 300;\r\n}\r\n\r\n.bottom_wrapper {\r\n  /*position: relative;*/\r\n  width: 100%;\r\n  background-color: #222;\r\n  padding: 5px 5px;\r\n  /*position: absolute;*/\r\n  bottom: 0;\r\n}\r\n\r\n.bottom_wrapper .message_input_wrapper {\r\n  display: inline-block;\r\n  height: 30px;\r\n  border-radius: 5px;\r\n  border: 1px solid #bcbdc0;\r\n  width: calc(100% - 160px);\r\n  position: relative;\r\n  padding: 0 5px;\r\n}\r\n\r\n.bottom_wrapper .message_input_wrapper .message_input {\r\n  border: none;\r\n  height: 100%;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  width: calc(100% - 40px);\r\n  position: absolute;\r\n  outline-width: 0;\r\n  color: #eae4e4;\r\n  background-color: #222;\r\n}\r\n\r\n.bottom_wrapper .send_message {\r\n  width: 100px;\r\n  height: 30px;\r\n  display: inline-block;\r\n  border-radius: 50px;\r\n  background-color: #a3d063;\r\n  border: 2px solid #a3d063;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  -webkit-transition: all 0.2s linear;\r\n  transition: all 0.2s linear;\r\n  text-align: center;\r\n  float: right;\r\n}\r\n\r\n.bottom_wrapper .send_message:hover {\r\n  color: #a3d063;\r\n  background-color: #fff;\r\n}\r\n\r\n.bottom_wrapper .send_message .text {\r\n  font-size: 18px;\r\n  font-weight: 300;\r\n  display: inline-block;\r\n  /*line-height: 48px;*/\r\n}\r\n\r\n.message_template {\r\n  display: none;\r\n}\r\n\r\n.glyphicon-remove-circle {\r\n  color: #333;\r\n  font-size: 30px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/online-game/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <button *ngIf='!chatConnected' class=\"btn btn-primary\" (click)='connectToChat()'>Connect to Chat</button>\r\n<button *ngIf='chatConnected' class=\"btn btn-danger\" (click)='disconnectToChat()'>Disconnect from Chat</button> -->\r\n\r\n<!-- Chat template -->\r\n<div class=\"chat_window\">\r\n  <div class=\"text-right .size30\" (click)='chatService.showChat = false'>\r\n    <span class=\"glyphicon glyphicon-remove-circle\"></span>\r\n  </div>\r\n  <div class=\"top_menu\">\r\n    <div class=\"title\">Chat</div>\r\n  </div>\r\n  <ul class=\"messages\" id='message_window'>\r\n    <div *ngFor='let message of chatService.messages'>\r\n      <span *ngIf='fromGuest(message)'>\r\n        <li id='{{message.date}}' class=\"message appeared left\" [@received]='chatService.messages'>\r\n          <div class=\"text_wrapper\">\r\n            <div class=\"text\">{{message.message}}</div>\r\n          </div>\r\n        </li>\r\n      </span>\r\n      <span *ngIf='fromHost(message)'>\r\n        <li id='{{message.date}}' class=\"message appeared right\" [@sent]='chatService.messages'>\r\n          <div class=\"text_wrapper\">\r\n            <div class=\"text\">{{message.message}}</div>\r\n          </div>\r\n        </li>\r\n      </span>\r\n    </div>\r\n  </ul>\r\n  <div class=\"bottom_wrapper clearfix\">\r\n    <div class=\"message_input_wrapper\">\r\n      <input class=\"message_input\" [(ngModel)]='text' (keyup.enter)='send(text)'\r\n        placeholder=\"Type your message here...\" />\r\n    </div>\r\n    <div class=\"send_message\" (click)='send(text)'>\r\n      <div class=\"icon\"></div>\r\n      <div class=\"text\">Send</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"message_template\">\r\n  <li class=\"message\">\r\n    <div class=\"avatar\"></div>\r\n    <div class=\"text_wrapper\">\r\n      <div class=\"text\"></div>\r\n    </div>\r\n  </li>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/online-game/chat/chat.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var Message_1 = __webpack_require__("./src/app/model/Message.ts");
var socket_service_1 = __webpack_require__("./src/app/services/socket.service.ts");
var game_service_1 = __webpack_require__("./src/app/services/game.service.ts");
var player_service_1 = __webpack_require__("./src/app/services/player.service.ts");
var chat_service_1 = __webpack_require__("./src/app/services/chat.service.ts");
var ChatAnimation_1 = __webpack_require__("./src/app/animations/ChatAnimation.ts");
var ChatComponent = /** @class */ (function () {
    function ChatComponent(socketService, gameService, playerService, chatService) {
        this.socketService = socketService;
        this.gameService = gameService;
        this.playerService = playerService;
        this.chatService = chatService;
        this.text = '';
    }
    ChatComponent.prototype.ngOnInit = function () {
        this.player = this.playerService.getCurrentPlayer();
        this.socketService.subscribetoChat();
    };
    ChatComponent.prototype.ngOnDestroy = function () {
        this.chatService.messages = [];
        this.chatService.newMessages = 0;
        this.chatService.showChat = false;
    };
    ChatComponent.prototype.composeMessage = function (text) {
        return new Message_1.Message(this.player, text);
    };
    ChatComponent.prototype.send = function () {
        if (!this.text.trim())
            return;
        this.socketService.sendChatMessage(this.composeMessage(this.text));
        this.text = '';
    };
    ChatComponent.prototype.isChatConnected = function () { return this.chatSubsription != undefined; };
    ChatComponent.prototype.fromHost = function (message) {
        return this.player.id == message.senderId;
    };
    ChatComponent.prototype.fromChatBot = function (message) {
        return message.senderId == 'CHATBOT';
    };
    ChatComponent.prototype.fromGuest = function (message) {
        return !this.fromHost(message) && !this.fromChatBot(message);
    };
    var _a, _b, _c, _d;
    ChatComponent = __decorate([
        core_1.Component({
            selector: 'chat',
            template: __webpack_require__("./src/app/components/online-game/chat/chat.component.html"),
            styles: [__webpack_require__("./src/app/components/online-game/chat/chat.component.css")],
            animations: [ChatAnimation_1.ChatAnimation]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof socket_service_1.SocketService !== "undefined" && socket_service_1.SocketService) === "function" && _a || Object, typeof (_b = typeof game_service_1.GameService !== "undefined" && game_service_1.GameService) === "function" && _b || Object, typeof (_c = typeof player_service_1.PlayerService !== "undefined" && player_service_1.PlayerService) === "function" && _c || Object, typeof (_d = typeof chat_service_1.ChatService !== "undefined" && chat_service_1.ChatService) === "function" && _d || Object])
    ], ChatComponent);
    return ChatComponent;
}());
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=chat.component.js.map

/***/ }),

/***/ "./src/app/components/online-game/join-game/join-game.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<!-- Get Player Details -->\r\n<div *ngIf='collectInfo()'>\r\n  <h3><div class='text-green'>You are connected to server</div></h3>\r\n  <form>\r\n    <div class=\"form-group\">\r\n      <h3>\r\n        <label for=\"playerName\">Enter your name: </label>\r\n        <input type='text' class='form-control' name='name' [(ngModel)]='name' autocomplete='off' [maxlength]='8' />\r\n      </h3>\r\n    </div>\r\n    <button type=\"button\" class=\"btn btn-success btn-lg\"\r\n    [disabled]='playerService.getPlayer().name?.trim().length == 0' (click)='saveInfo()'>Save</button>\r\n  </form>\r\n</div>\r\n\r\n<h3 *ngIf='gameService.getGame().connected == false'><div class='text-red'>Opponent disconnected from game</div></h3>\r\n\r\n<!-- Ask Host or Join -->\r\n<div *ngIf='!collectInfo() && !playerService.getPlayer().type'>\r\n  <h3>Would you like to Host or Join a Game?</h3>\r\n  <button type=\"button\" class=\"btn btn-primary btn-lg\" (click)='setHost()'>Host</button>\r\n  <button type=\"button\" class=\"btn btn-success btn-lg\" (click)='setGuest()'>Join</button>\r\n</div>\r\n\r\n<!-- Display Game ID -->\r\n<div *ngIf='playerService.getPlayer().type == PlayerType.Host && !gameService.isConnected()'>\r\n  <h3>Share this Game ID with your friend: <span class=\"text-yellow\">{{gameService.getGame()?.id}}</span></h3>\r\n  <h4 class='text-red'>Waiting for your friend to join the game...</h4>\r\n</div>\r\n\r\n<!-- Receive Game ID -->\r\n<div *ngIf='playerService.getPlayer().type == PlayerType.Guest'>\r\n  <form *ngIf='!gameService.isConnected()'>\r\n    <div class=\"form-group\">\r\n      <h3>\r\n        <label for=\"playerName\">Enter your Game ID: </label>\r\n        <input type='text' class='form-control' name='gameId' [(ngModel)]='gameService.getGame().id'\r\n        (ngModelChange)='errorMessage = \"\"' autocomplete='off' [maxlength]='5'/>\r\n      </h3>\r\n      <span class='text-red'>{{errorMessage}}</span>\r\n    </div>\r\n    <button type=\"button\" class=\"btn btn-success btn-lg\"\r\n    [disabled]='gameService.getGame().id?.trim().length == 0' (click)='joinGame()'>Enter Game</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/online-game/join-game/join-game.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var PlayerType_1 = __webpack_require__("./src/app/enum/PlayerType.ts");
var game_service_1 = __webpack_require__("./src/app/services/game.service.ts");
var player_service_1 = __webpack_require__("./src/app/services/player.service.ts");
var socket_service_1 = __webpack_require__("./src/app/services/socket.service.ts");
var play_service_1 = __webpack_require__("./src/app/services/play.service.ts");
var JoinGameComponent = /** @class */ (function () {
    function JoinGameComponent(gameService, playerService, socketService, playService) {
        this.gameService = gameService;
        this.playerService = playerService;
        this.socketService = socketService;
        this.playService = playService;
        // enums
        this.PlayerType = PlayerType_1.PlayerType;
    }
    JoinGameComponent.prototype.saveInfo = function () {
        this.name = this.name.substring(0, 8);
        this.getNewPlayer();
    };
    JoinGameComponent.prototype.collectInfo = function () {
        return this.playerService.getPlayer().name == undefined;
    };
    JoinGameComponent.prototype.getGameId = function () {
        var _this = this;
        this.gameService.getGameId(this.playerService.getPlayer()).subscribe(function (gameId) {
            _this.gameService.getGame().id = gameId,
                _this.socketService.subscribetoGame();
            _this.playService.reset();
            _this.socketService.ping();
        }, function (error) { return console.log(error); });
    };
    JoinGameComponent.prototype.setHost = function () {
        this.playerService.getPlayer().type = PlayerType_1.PlayerType.Host;
        this.getGameId();
    };
    JoinGameComponent.prototype.setGuest = function () {
        this.playerService.getPlayer().type = PlayerType_1.PlayerType.Guest;
    };
    JoinGameComponent.prototype.joinGame = function () {
        var _this = this;
        this.gameService.joinGame(this.playerService.getPlayer(), this.gameService.getGame().id).subscribe(function (game) {
            _this.gameService.setGame(game);
            _this.socketService.subscribetoGame();
            _this.playService.reset();
            _this.socketService.ping();
        }, function (error) {
            console.log(error);
            _this.errorMessage = 'Sorry, could not find any open game';
        });
    };
    JoinGameComponent.prototype.getNewPlayer = function () {
        var _this = this;
        this.playerService.getNewPlayer().subscribe(function (newPlayer) {
            newPlayer.name = _this.name;
            _this.playerService.setPlayer(newPlayer);
        }, function (error) {
            console.log(error);
        });
    };
    var _a, _b, _c, _d;
    JoinGameComponent = __decorate([
        core_1.Component({
            selector: 'join-game',
            template: __webpack_require__("./src/app/components/online-game/join-game/join-game.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof game_service_1.GameService !== "undefined" && game_service_1.GameService) === "function" && _a || Object, typeof (_b = typeof player_service_1.PlayerService !== "undefined" && player_service_1.PlayerService) === "function" && _b || Object, typeof (_c = typeof socket_service_1.SocketService !== "undefined" && socket_service_1.SocketService) === "function" && _c || Object, typeof (_d = typeof play_service_1.PlayService !== "undefined" && play_service_1.PlayService) === "function" && _d || Object])
    ], JoinGameComponent);
    return JoinGameComponent;
}());
exports.JoinGameComponent = JoinGameComponent;
//# sourceMappingURL=join-game.component.js.map

/***/ }),

/***/ "./src/app/components/online-game/online-game-status/online-game-status.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf='(gameService.isGameInProgress())'>\r\n  <div class=\"alert alert-info\" role=\"alert\" *ngIf='playerService.isBatsman()'>You are now BATTING</div>\r\n  <div class=\"alert alert-warning\" role=\"alert\" *ngIf='playerService.isBowler()'>You are now BOWLING</div>\r\n</div>\r\n<div *ngIf='playerService.currentPlayerWon()' class=\"alert alert-success\" role=\"alert\">\r\n  Game Over! You Won\r\n</div>\r\n<div *ngIf='playerService.currentPlayerLost()' class=\"alert alert-danger\" role=\"alert\">\r\n  Game Over! You Lost\r\n</div>\r\n<div *ngIf='gameService.isGameDraw()' class=\"alert alert-warning\" role=\"alert\">\r\n  Game Over! Game is Draw\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/online-game/online-game-status/online-game-status.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var GameStatus_1 = __webpack_require__("./src/app/enum/GameStatus.ts");
var PlayerType_1 = __webpack_require__("./src/app/enum/PlayerType.ts");
var game_service_1 = __webpack_require__("./src/app/services/game.service.ts");
var player_service_1 = __webpack_require__("./src/app/services/player.service.ts");
var OnlineGameStatusComponent = /** @class */ (function () {
    function OnlineGameStatusComponent(gameService, playerService) {
        this.gameService = gameService;
        this.playerService = playerService;
        this.GameStatus = GameStatus_1.GameStatus;
        this.PlayerType = PlayerType_1.PlayerType;
    }
    var _a, _b;
    OnlineGameStatusComponent = __decorate([
        core_1.Component({
            selector: 'online-game-status',
            template: __webpack_require__("./src/app/components/online-game/online-game-status/online-game-status.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof game_service_1.GameService !== "undefined" && game_service_1.GameService) === "function" && _a || Object, typeof (_b = typeof player_service_1.PlayerService !== "undefined" && player_service_1.PlayerService) === "function" && _b || Object])
    ], OnlineGameStatusComponent);
    return OnlineGameStatusComponent;
}());
exports.OnlineGameStatusComponent = OnlineGameStatusComponent;
//# sourceMappingURL=online-game-status.component.js.map

/***/ }),

/***/ "./src/app/components/online-game/online-game.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div *ngIf='!isOnline()'>\r\n  <div *ngIf='countdownService.timer > 0'>\r\n    <h3 class=\"text-yellow\">Attempting to connect to server... {{countdownService.timer}}s</h3>\r\n    <h4>Game is hosted on a free server, hence it may take up to a minute to connect.</h4>\r\n  </div>\r\n\r\n  <div *ngIf='countdownService.timer <= 0'>\r\n    <h3 class=\"text-red\">Could not connect to server</h3>\r\n    <h4>Still attempting to connect to server in the background. You may wait or check back later.</h4>\r\n  </div>\r\n</div>\r\n\r\n<join-game *ngIf='isOnline() && !isGameConnected()'></join-game>\r\n<play *ngIf='isOnline() && isGameConnected()' [hidden]='chatService.showChat'></play>\r\n<chat *ngIf='isOnline() && isGameConnected()' [hidden]='!chatService.showChat'></chat>\r\n"

/***/ }),

/***/ "./src/app/components/online-game/online-game.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var Player_1 = __webpack_require__("./src/app/model/Player.ts");
var PlayerType_1 = __webpack_require__("./src/app/enum/PlayerType.ts");
var socket_service_1 = __webpack_require__("./src/app/services/socket.service.ts");
var game_service_1 = __webpack_require__("./src/app/services/game.service.ts");
var player_service_1 = __webpack_require__("./src/app/services/player.service.ts");
var countdown_service_1 = __webpack_require__("./src/app/services/countdown.service.ts");
var chat_service_1 = __webpack_require__("./src/app/services/chat.service.ts");
var OnlineGameComponent = /** @class */ (function () {
    function OnlineGameComponent(socketService, gameService, playerService, countdownService, chatService) {
        this.socketService = socketService;
        this.gameService = gameService;
        this.playerService = playerService;
        this.countdownService = countdownService;
        this.chatService = chatService;
        this.playerService.setPlayer(new Player_1.Player(PlayerType_1.PlayerType.User));
    }
    OnlineGameComponent.prototype.ngOnInit = function () {
        this.connect();
        this.countdownService.countdown();
    };
    OnlineGameComponent.prototype.ngOnDestroy = function () {
        this.socketService.disconnect();
        this.gameService.resetGame();
    };
    OnlineGameComponent.prototype.connect = function () {
        this.socketService.initConnect();
    };
    OnlineGameComponent.prototype.disconnect = function () {
        this.socketService.disconnect();
    };
    OnlineGameComponent.prototype.isOnline = function () { return this.socketService.isConnected(); };
    OnlineGameComponent.prototype.isGameConnected = function () {
        return this.gameService.isConnected();
    };
    var _a, _b, _c, _d, _e;
    OnlineGameComponent = __decorate([
        core_1.Component({
            selector: 'online-game',
            template: __webpack_require__("./src/app/components/online-game/online-game.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof socket_service_1.SocketService !== "undefined" && socket_service_1.SocketService) === "function" && _a || Object, typeof (_b = typeof game_service_1.GameService !== "undefined" && game_service_1.GameService) === "function" && _b || Object, typeof (_c = typeof player_service_1.PlayerService !== "undefined" && player_service_1.PlayerService) === "function" && _c || Object, typeof (_d = typeof countdown_service_1.CountdownService !== "undefined" && countdown_service_1.CountdownService) === "function" && _d || Object, typeof (_e = typeof chat_service_1.ChatService !== "undefined" && chat_service_1.ChatService) === "function" && _e || Object])
    ], OnlineGameComponent);
    return OnlineGameComponent;
}());
exports.OnlineGameComponent = OnlineGameComponent;
//# sourceMappingURL=online-game.component.js.map

/***/ }),

/***/ "./src/app/components/online-game/online-score-board/online-score-board.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Score Board</h3>\r\n<div *ngIf=\"showCurrentPlayerScore()\" class=\"alert alert-info\">\r\n  You scored {{ playerService.getCurrentPlayer().runs }} runs\r\n  in {{playerService.getCurrentPlayer().balls }} balls\r\n</div>\r\n<div *ngIf=\"showOtherPlayerScore()\" class=\"alert alert-warning\">\r\n  {{ playerService.getOtherPlayer().name }}\r\n  scored {{ playerService.getOtherPlayer().runs }} runs\r\n  in {{playerService.getOtherPlayer().balls }} balls\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/online-game/online-score-board/online-score-board.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var player_service_1 = __webpack_require__("./src/app/services/player.service.ts");
var game_service_1 = __webpack_require__("./src/app/services/game.service.ts");
var OnlineScoreBoardComponent = /** @class */ (function () {
    function OnlineScoreBoardComponent(playerService, gameService) {
        this.playerService = playerService;
        this.gameService = gameService;
    }
    OnlineScoreBoardComponent.prototype.showCurrentPlayerScore = function () {
        return this.playerService.isBatsman() ||
            this.playerService.isCurrentPlayerOut() ||
            this.gameService.isGameOver() || this.gameService.isGameDraw();
    };
    OnlineScoreBoardComponent.prototype.showOtherPlayerScore = function () {
        return this.playerService.isBowler() ||
            this.playerService.isOtherPlayerOut() ||
            this.gameService.isGameOver() || this.gameService.isGameDraw();
    };
    var _a, _b;
    OnlineScoreBoardComponent = __decorate([
        core_1.Component({
            selector: 'online-score-board',
            template: __webpack_require__("./src/app/components/online-game/online-score-board/online-score-board.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof player_service_1.PlayerService !== "undefined" && player_service_1.PlayerService) === "function" && _a || Object, typeof (_b = typeof game_service_1.GameService !== "undefined" && game_service_1.GameService) === "function" && _b || Object])
    ], OnlineScoreBoardComponent);
    return OnlineScoreBoardComponent;
}());
exports.OnlineScoreBoardComponent = OnlineScoreBoardComponent;
//# sourceMappingURL=online-score-board.component.js.map

/***/ }),

/***/ "./src/app/components/online-game/play/play.component.css":
/***/ (function(module, exports) {

module.exports = ".glyphicon-comment {\r\n  font-size: 50px;\r\n  position: absolute;\r\n  left: 5px;\r\n  top: -11px;\r\n}\r\n\r\n.chat-notification {\r\n  position: relative;\r\n  cursor: pointer;\r\n}\r\n\r\n.chat-notification p {\r\n  position: absolute;\r\n  font-size: 17px;\r\n  left: 30px;\r\n  top: -6px;\r\n}\r\n\r\n.badge {\r\n  color: #337ab7;\r\n  background-color: #ffffff;\r\n}\r\n\r\n.notice {\r\n  color: #23d5ff;\r\n}\r\n\r\n.last-played {\r\n  color: #ffa900;\r\n}\r\n\r\n/* Chat Notification Pop */\r\n\r\n.chat-notification-icon {position:relative;-webkit-perspective: 1000;-webkit-backface-visibility: hidden;}\r\n\r\n.badge-num {\r\n  -webkit-box-sizing:border-box;\r\n          box-sizing:border-box;\r\n  font-family: 'Trebuchet MS', sans-serif;\r\n  background: #ff0000;\r\n  cursor:default;\r\n  border-radius: 50%;\r\n  color: #fff;\r\n  font-weight:bold;\r\n  font-size: 13px;\r\n  height: 25px;\r\n  letter-spacing:-1px;\r\n  line-height:1.55em;\r\n  top:-15px;\r\n  right:-60px;\r\n  border:3px solid #fff;\r\n  position: absolute;\r\n  width: 25px;\r\n  -webkit-box-shadow: 1px 1px 5px rgba(0,0,0, .2);\r\n          box-shadow: 1px 1px 5px rgba(0,0,0, .2);\r\n  -webkit-animation: pulse 1s 1;\r\n          animation: pulse 1s 1;\r\n  -webkit-animation-iteration-count: infinite;\r\n          animation-iteration-count: infinite;\r\n}\r\n\r\n.badge-num:after {\r\n  content: '';\r\n  position: absolute;\r\n  top:-2px;\r\n  left:-2px;\r\n  border:2px solid rgba(255,0,0,.5);\r\n  opacity:0;\r\n  border-radius: 50%;\r\n  width:100%;\r\n  height:100%;\r\n  -webkit-animation: sonar 1.5s 1;\r\n          animation: sonar 1.5s 1;\r\n  -webkit-animation-iteration-count: infinite;\r\n          animation-iteration-count: infinite;\r\n}\r\n\r\n@-webkit-keyframes sonar {\r\n  0% {-webkit-transform: scale(.9);transform: scale(.9); opacity:1;}\r\n  100% {-webkit-transform: scale(2);transform: scale(2);opacity: 0;}\r\n}\r\n\r\n@keyframes sonar {\r\n  0% {-webkit-transform: scale(.9);transform: scale(.9); opacity:1;}\r\n  100% {-webkit-transform: scale(2);transform: scale(2);opacity: 0;}\r\n}\r\n\r\n@-webkit-keyframes pulse {\r\n  0% {-webkit-transform: scale(1);transform: scale(1);}\r\n  20% {-webkit-transform: scale(1.4);transform: scale(1.4); }\r\n  50% {-webkit-transform: scale(.9);transform: scale(.9);}\r\n  80% {-webkit-transform: scale(1.2);transform: scale(1.2);}\r\n  100% {-webkit-transform: scale(1);transform: scale(1);}\r\n}\r\n\r\n@keyframes pulse {\r\n  0% {-webkit-transform: scale(1);transform: scale(1);}\r\n  20% {-webkit-transform: scale(1.4);transform: scale(1.4); }\r\n  50% {-webkit-transform: scale(.9);transform: scale(.9);}\r\n  80% {-webkit-transform: scale(1.2);transform: scale(1.2);}\r\n  100% {-webkit-transform: scale(1);transform: scale(1);}\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/online-game/play/play.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='row'>\r\n\r\n  <!-- <div class='col-md-6'> -->\r\n    <div class=\"row text-center\">\r\n\r\n      <div class=\"col-xs-5\" [@leftColumn]='gameAS.gameRestart'>\r\n        <play-table\r\n          [player]='playerService.getCurrentPlayer()'\r\n          [otherPlayer]='playerService.getOtherPlayer()'\r\n          [game]='gameService.getGame()'\r\n          [notice]='playService.notice'\r\n          [playerNotice]='playService.getCurrentPlayerNotice()'>\r\n        </play-table>\r\n      </div>\r\n\r\n      <div class=\"col-xs-2\">\r\n        <progress-bar\r\n          [player]='playerService.getCurrentPlayer()'\r\n          [otherPlayer]='playerService.getOtherPlayer()'\r\n          [game]='gameService.getGame()'\r\n          [playerHeight]='progressBarService.getBarHeight(playerService.getCurrentPlayer().runs, gameService.getGame().targetScore)'\r\n          [otherPlayerHeight]='progressBarService.getBarHeight(playerService.getOtherPlayer().runs, gameService.getGame().targetScore)'>\r\n        </progress-bar>\r\n      </div>\r\n\r\n      <div class=\"col-xs-5\" [@rightColumn]='gameAS.gameRestart'>\r\n        <play-table\r\n          [player]='playerService.getOtherPlayer()'\r\n          [otherPlayer]='playerService.getCurrentPlayer()'\r\n          [game]='gameService.getGame()'\r\n          [notice]='playService.notice'\r\n          [playerNotice]='playService.getOtherPlayerNotice()'>\r\n        </play-table>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class='row text-center' style=\"padding-right:50px\">\r\n        <span *ngIf='gameService.isGameInProgress()'>\r\n          <numpad (numPressedEvent)='clickInput($event)' [disable]='!playEnabled()'></numpad>\r\n        </span>\r\n\r\n        <span *ngIf='!gameService.isGameInProgress()'>\r\n          <button (click)='restartGame()' class=\"btn btn-danger btn-lg\" [@restartButton]>Restart Game</button>\r\n        </span>\r\n\r\n        <span class=\"chat-notification text-primary\" (click)='chatService.openChat()'>\r\n          <span class=\"glyphicon glyphicon-comment\"></span>\r\n        </span>\r\n        <span *ngIf='chatService.newMessages' class=\"chat-notification-icon\" id=\"badge\"\r\n          (click)='chatService.openChat()'>\r\n          <a class=\"badge-num\">{{chatService.newMessages}}</a>\r\n        </span>\r\n\r\n    </div>\r\n\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/components/online-game/play/play.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var socket_service_1 = __webpack_require__("./src/app/services/socket.service.ts");
var game_service_1 = __webpack_require__("./src/app/services/game.service.ts");
var play_service_1 = __webpack_require__("./src/app/services/play.service.ts");
var player_service_1 = __webpack_require__("./src/app/services/player.service.ts");
var helper_service_1 = __webpack_require__("./src/app/services/helper.service.ts");
var progress_bar_service_1 = __webpack_require__("./src/app/services/progress-bar.service.ts");
var chat_service_1 = __webpack_require__("./src/app/services/chat.service.ts");
var game_animation_service_1 = __webpack_require__("./src/app/services/game-animation.service.ts");
var GameAnimation_1 = __webpack_require__("./src/app/animations/GameAnimation.ts");
var PlayComponent = /** @class */ (function () {
    function PlayComponent(socketService, gameService, playService, playerService, helperService, progressBarService, chatService, gameAS) {
        this.socketService = socketService;
        this.gameService = gameService;
        this.playService = playService;
        this.playerService = playerService;
        this.helperService = helperService;
        this.progressBarService = progressBarService;
        this.chatService = chatService;
        this.gameAS = gameAS;
        this.gameConnected = false;
        this.JSON = JSON;
    }
    PlayComponent.prototype.ngOnInit = function () {
        this.game = this.gameService.getGame();
        this.player = this.playerService.getPlayer();
        this.socketService.subscribeToNotice();
        this.socketService.subscribeToWait();
    };
    PlayComponent.prototype.isBatsman = function () {
        return this.playerService.isBatsman();
    };
    PlayComponent.prototype.isBowler = function () {
        return this.playerService.isBowler();
    };
    PlayComponent.prototype.getCurrentPlayer = function () {
        return this.playerService.getCurrentPlayer();
    };
    PlayComponent.prototype.getOtherPlayer = function () {
        return this.playerService.getOtherPlayer();
    };
    PlayComponent.prototype.playEnabled = function () {
        return !this.playService.wait;
    };
    PlayComponent.prototype.sendInput = function () {
        if (!this.playEnabled())
            return;
        this.socketService.sendInput(this.input);
        this.clearInputAndUpdates();
    };
    PlayComponent.prototype.clickInput = function (num) {
        this.input = num;
        this.socketService.sendInput(this.input);
        this.clearInputAndUpdates();
        this.gameAS.inputs[num]++;
    };
    PlayComponent.prototype.restartGame = function () {
        var _this = this;
        this.clearInputAndUpdates();
        this.gameService.restartGame().subscribe(function (text) {
            console.log(text);
            _this.gameAS.gameRestart++;
        }, function (error) { return console.log(error); });
    };
    PlayComponent.prototype.clearInputAndUpdates = function () {
        this.input = undefined;
    };
    PlayComponent.prototype.showChat = function () {
        this.chatService.showChat = true;
    };
    var _a, _b, _c, _d, _e, _f, _g, _h;
    PlayComponent = __decorate([
        core_1.Component({
            selector: 'play',
            template: __webpack_require__("./src/app/components/online-game/play/play.component.html"),
            styles: [__webpack_require__("./src/app/components/online-game/play/play.component.css")],
            providers: [progress_bar_service_1.ProgressBarService],
            animations: [GameAnimation_1.GameAnimation]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof socket_service_1.SocketService !== "undefined" && socket_service_1.SocketService) === "function" && _a || Object, typeof (_b = typeof game_service_1.GameService !== "undefined" && game_service_1.GameService) === "function" && _b || Object, typeof (_c = typeof play_service_1.PlayService !== "undefined" && play_service_1.PlayService) === "function" && _c || Object, typeof (_d = typeof player_service_1.PlayerService !== "undefined" && player_service_1.PlayerService) === "function" && _d || Object, typeof (_e = typeof helper_service_1.HelperService !== "undefined" && helper_service_1.HelperService) === "function" && _e || Object, typeof (_f = typeof progress_bar_service_1.ProgressBarService !== "undefined" && progress_bar_service_1.ProgressBarService) === "function" && _f || Object, typeof (_g = typeof chat_service_1.ChatService !== "undefined" && chat_service_1.ChatService) === "function" && _g || Object, typeof (_h = typeof game_animation_service_1.GameAnimationService !== "undefined" && game_animation_service_1.GameAnimationService) === "function" && _h || Object])
    ], PlayComponent);
    return PlayComponent;
}());
exports.PlayComponent = PlayComponent;
//# sourceMappingURL=play.component.js.map

/***/ }),

/***/ "./src/app/components/share/share.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var ngx_sharebuttons_1 = __webpack_require__("./node_modules/ngx-sharebuttons/index.js");
var ShareComponent = /** @class */ (function () {
    function ShareComponent() {
        this.appUrl = 'http://www.handcricketgame.com';
    }
    ShareComponent.prototype.ngOnInit = function () {
        // ShareButton(button name [provider], template, classes)
        this.fbButton = new ngx_sharebuttons_1.ShareButton(ngx_sharebuttons_1.ShareProvider.FACEBOOK, '<i class="fa fa-facebook"></i>', 'facebook');
    };
    ShareComponent = __decorate([
        core_1.Component({
            selector: 'social-share',
            template: "\n  <share-button class=\"facebook\" [button]=\"fbButton\" [url]='appUrl'></share-button>\n  "
        })
    ], ShareComponent);
    return ShareComponent;
}());
exports.ShareComponent = ShareComponent;
//# sourceMappingURL=share.component.js.map

/***/ }),

/***/ "./src/app/components/shared/numpad/numpad.component.css":
/***/ (function(module, exports) {

module.exports = ".btn {\r\n  margin: 1px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/shared/numpad/numpad.component.html":
/***/ (function(module, exports) {

module.exports = "<button *ngFor='let num of numbers' [@inputButton]='gameAS.inputs[num]'\r\n  (click)='clickInput(num)' [disabled]='disable' class='btn btn-success'>\r\n  {{num}}\r\n</button>\r\n"

/***/ }),

/***/ "./src/app/components/shared/numpad/numpad.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var game_animation_service_1 = __webpack_require__("./src/app/services/game-animation.service.ts");
var GameAnimation_1 = __webpack_require__("./src/app/animations/GameAnimation.ts");
var NumpadComponent = /** @class */ (function () {
    function NumpadComponent(gameAS) {
        this.gameAS = gameAS;
        this.numbers = [0, 1, 2, 3, 4, 5, 6];
        this.numPressedEvent = new core_1.EventEmitter();
    }
    NumpadComponent.prototype.clickInput = function (num) {
        this.numPressedEvent.emit(num);
    };
    var _a, _b;
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], NumpadComponent.prototype, "disable", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
    ], NumpadComponent.prototype, "numPressedEvent", void 0);
    NumpadComponent = __decorate([
        core_1.Component({
            selector: 'numpad',
            template: __webpack_require__("./src/app/components/shared/numpad/numpad.component.html"),
            styles: [__webpack_require__("./src/app/components/shared/numpad/numpad.component.css")],
            animations: [GameAnimation_1.GameAnimation]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof game_animation_service_1.GameAnimationService !== "undefined" && game_animation_service_1.GameAnimationService) === "function" && _b || Object])
    ], NumpadComponent);
    return NumpadComponent;
}());
exports.NumpadComponent = NumpadComponent;
//# sourceMappingURL=numpad.component.js.map

/***/ }),

/***/ "./src/app/components/shared/play-table/play-table.component.css":
/***/ (function(module, exports) {

module.exports = "/*Table CSS*/\r\n/*body{\r\n\tfont-family:'Open Sans';\r\n    font-style:condensed;\r\n    background: -moz-radial-gradient(center, ellipse cover,  #5b2072 0%, #5d1566 50%, #251a41 100%);\r\n    background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%,#5b2072), color-stop(50%,#5d1566), color-stop(100%,#251a41));\r\n    background: -webkit-radial-gradient(center, ellipse cover,  #5b2072 0%,#5d1566 50%,#251a41 100%);\r\n    background: -o-radial-gradient(center, ellipse cover,  #5b2072 0%,#5d1566 50%,#251a41 100%);\r\n    background: -ms-radial-gradient(center, ellipse cover,  #5b2072 0%,#5d1566 50%,#251a41 100%);\r\n    background: radial-gradient(ellipse at center,  #5b2072 0%,#5d1566 50%,#251a41 100%);\r\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#5b2072', endColorstr='#251a41',GradientType=1 );\r\n}*/\r\n/*a{\r\n\tfont-size: 18px;\r\n\tfont-family:'Open Sans';\r\n    color: white;\r\n    text-decoration: none;\r\n\r\n}*/\r\n/*input:focus,textarea:focus,select:focus{\r\n  border:1px solid #fafafa;\r\n  -webkit-box-shadow:0 0 6px #007eff;\r\n  -moz-box-shadow:0 0 5px #007eff;\r\n  box-shadow:0 0 5px #007eff;\r\n  outline: none;\r\n}*/\r\nsup{\r\n\tfont-size: 14px;\r\n}\r\nul{\r\n\tlist-style: none;\r\n\tfont-size: 15px;\r\n\tfont-family:'Open Sans';\r\n\tcolor: #9095aa;\r\n\tpadding: 0px;\r\n\tmargin: 0px;\r\n}\r\nli{\r\n/*border-bottom: 1px solid #494a5a;*/\r\npadding: 0px;\r\nmargin: 0px;\r\ntext-align: center;\r\nheight: 52px;\r\nline-height: 52px;\r\n}\r\n/*#container{\r\n\twidth: 100%;\r\n  text-align:center;\r\n}*/\r\n.whole{\r\n\t/*display: inline-block;*/\r\n  width: 100%;\r\n}\r\n.type{\r\n\twidth: 100%;\r\n\tborder-radius: 5px 5px 0px 0px;\r\n\tbackground-color: #eac80d;\r\n\tborder-bottom: 3px solid #bfa30c;\r\n\r\n}\r\n.type p{\r\n\tfont-family:'Open Sans';\r\n\tfont-size: 20px;\r\n\ttext-transform: uppercase;\r\n\tcolor: white;\r\n\ttext-align: center;\r\n\tpadding-top: 10px;\r\n}\r\n.plan{\r\n\twidth: 100%;\r\n\tbackground-color: #2b2937;\r\n\r\n\tborder-radius: 0px 0px 5px 5px;\r\n    font-family:'Open Sans';\r\n    font-style:condensed;\r\n    font-size: 50px;\r\n    color: white;\r\n    text-align: center;\r\n}\r\n.standard{\r\n\tbackground-color: #1abc9c;\r\n\tborder-bottom: 3px solid #18937b;\r\n}\r\n.ultimate{\r\n\tbackground-color: #5d6a9a;\r\n\tborder-bottom: 3px solid #474f6f;\r\n}\r\n.header{\r\n\t/*border-bottom: 1px solid #494a5a;*/\r\n\tpadding-bottom: 20px;\r\n}\r\n.header span{\r\n\tfont-size: 32px;\r\n}\r\n.month{\r\n\tfont-size: 14px;\r\n\tcolor: #cecece;\r\n\tpadding: 0px;\r\n\tmargin: -10px;\r\n}\r\n.price{\r\n\theight:80px;\r\n}\r\n.cart{\r\n  color:white;\r\n  position: relative;\r\n  top: 16px;\r\n}\r\n.top{\r\n  margin-top:35px;\r\n}\r\n.nodisplay{\r\n  opacity: 0.1;\r\n}\r\n.selected{\r\n  background-color:#1F1B36;\r\n  margin:0px;\r\n  padding:0px;\r\n}\r\n.out {\r\n  color:black;\r\n  font-size: 20px;\r\n  background-color:#ffee38;\r\n}\r\n.num {\r\n  color: #d8d8d8;\r\n  font-size: 20px;\r\n}\r\n.playType {\r\n  color: #35c2ff;\r\n  font-size: 20px;\r\n}\r\n.won {\r\n  color: black;\r\n  font-size: 20px;\r\n  background-color: #34ef98;\r\n}\r\n.lost {\r\n  color: white;\r\n  font-size: 20px;\r\n  background-color: #ef3333;\r\n}\r\n.draw {\r\n  color: black;\r\n  font-size: 20px;\r\n  background-color: #32c0ef;\r\n}\r\n.batting {\r\n  background-color: #16b1ff;\r\n  color: black;\r\n}\r\n.bowling {\r\n  background-color: #ffb523;\r\n  color: black;\r\n}\r\n.not-out {\r\n  position: relative;\r\n  top:-25px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/shared/play-table/play-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"whole\">\r\n  <div class=\"type ultimate\">\r\n    <p>{{player.name}}</p>\r\n  </div>\r\n  <div class=\"plan\">\r\n    <div class=\"content\">\r\n      <ul>\r\n        <span *ngIf='player.id == game.batsman.id'>\r\n          <li class='batting' [@battingBowling]='player.status'>BATTING</li>\r\n        </span>\r\n        <span *ngIf='player.id == game.bowler.id'>\r\n          <li class='bowling' [@battingBowling]='player.status'>BOWLING</li>\r\n        </span>\r\n      </ul>\r\n    </div>\r\n    <div class=\"header\" [@runs]='player.runs'>\r\n      {{player.runs ? player.runs : 0}}<span class='not-out' *ngIf='player.id == game.batsman.id && isGameInProgress()'>*</span>\r\n      <p class=\"month\">runs</p>\r\n    </div>\r\n    <div class=\"content\">\r\n      <ul>\r\n        <span *ngIf='player.wins || otherPlayer.wins'>\r\n          <li [@wins]='player.wins'\r\n          [class.won]='player.wins > otherPlayer.wins'\r\n          [class.lost]='player.wins < otherPlayer.wins'\r\n          [class.draw]='player.wins == otherPlayer.wins'>\r\n            Wins {{player.wins}}\r\n          </li>\r\n        </span>\r\n      <span *ngIf='!notice && player.lastDelivery != null'>\r\n        <li class='last-played' [@played]='player.runs || otherPlayer.runs'>\r\n          Played <span class=\"num\">{{player.lastDelivery}}</span>\r\n        </li>\r\n      </span>\r\n      <span *ngIf='notice'>\r\n        <li class='notice' [@yourTurn]='playerNotice'>\r\n          {{playerNotice}}\r\n        </li>\r\n      </span>\r\n      <span *ngIf='!isGameInProgress()'>\r\n        <li *ngIf='isGameDraw()' class='draw'>DRAW</li>\r\n        <li *ngIf='isPlayerLost()' class='lost'>LOST</li>\r\n        <li *ngIf='isPlayerWon()' class='won'>WON</li>\r\n      </span>\r\n      <span *ngIf='isPlayerOut() && isGameInProgress()'>\r\n        <li [@out]='player.status' class=\"out\">OUT</li>\r\n      </span>\r\n    </ul>\r\n  </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/shared/play-table/play-table.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var Player_1 = __webpack_require__("./src/app/model/Player.ts");
var Game_1 = __webpack_require__("./src/app/model/Game.ts");
var PlayerStatus_1 = __webpack_require__("./src/app/enum/PlayerStatus.ts");
var GameStatus_1 = __webpack_require__("./src/app/enum/GameStatus.ts");
var GameAnimation_1 = __webpack_require__("./src/app/animations/GameAnimation.ts");
var PlaySelectAnimation_1 = __webpack_require__("./src/app/animations/PlaySelectAnimation.ts");
var PlayTableComponent = /** @class */ (function () {
    function PlayTableComponent() {
        this.PlayerStatus = PlayerStatus_1.PlayerStatus;
        this.GameStatus = GameStatus_1.GameStatus;
        this.JSON = JSON;
    }
    PlayTableComponent.prototype.isGameInProgress = function () {
        return this.game.gameStatus == GameStatus_1.GameStatus.IN_PROGRESS
            || this.game.gameStatus.toString() == GameStatus_1.GameStatus[GameStatus_1.GameStatus.IN_PROGRESS];
    };
    PlayTableComponent.prototype.isGameDraw = function () {
        return this.game.gameStatus == GameStatus_1.GameStatus.DRAW
            || this.game.gameStatus.toString() == GameStatus_1.GameStatus[GameStatus_1.GameStatus.DRAW];
    };
    PlayTableComponent.prototype.isPlayerWon = function () {
        return this.player.status == PlayerStatus_1.PlayerStatus.Won
            || this.player.status.toString() == PlayerStatus_1.PlayerStatus[PlayerStatus_1.PlayerStatus.Won];
    };
    PlayTableComponent.prototype.isPlayerLost = function () {
        return this.player.status == PlayerStatus_1.PlayerStatus.Lost
            || this.player.status.toString() == PlayerStatus_1.PlayerStatus[PlayerStatus_1.PlayerStatus.Lost];
    };
    PlayTableComponent.prototype.isPlayerOut = function () {
        return this.player.status == PlayerStatus_1.PlayerStatus.Out
            || this.player.status.toString() == PlayerStatus_1.PlayerStatus[PlayerStatus_1.PlayerStatus.Out];
    };
    var _a, _b, _c;
    __decorate([
        core_1.Input(),
        __metadata("design:type", typeof (_a = typeof Player_1.Player !== "undefined" && Player_1.Player) === "function" && _a || Object)
    ], PlayTableComponent.prototype, "player", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", typeof (_b = typeof Player_1.Player !== "undefined" && Player_1.Player) === "function" && _b || Object)
    ], PlayTableComponent.prototype, "otherPlayer", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", typeof (_c = typeof Game_1.Game !== "undefined" && Game_1.Game) === "function" && _c || Object)
    ], PlayTableComponent.prototype, "game", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlayTableComponent.prototype, "notice", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlayTableComponent.prototype, "playerNotice", void 0);
    PlayTableComponent = __decorate([
        core_1.Component({
            selector: 'play-table',
            template: __webpack_require__("./src/app/components/shared/play-table/play-table.component.html"),
            styles: [__webpack_require__("./src/app/components/shared/play-table/play-table.component.css")],
            animations: [GameAnimation_1.GameAnimation, PlaySelectAnimation_1.PlaySelectAnimation]
        })
    ], PlayTableComponent);
    return PlayTableComponent;
}());
exports.PlayTableComponent = PlayTableComponent;
//# sourceMappingURL=play-table.component.js.map

/***/ }),

/***/ "./src/app/components/shared/progress-bar/progress-bar.component.css":
/***/ (function(module, exports) {

module.exports = "/*.container { margin-top: 10px; }*/\r\n\r\n.progress-bar-vertical {\r\n  /*width: 20px;*/\r\n  min-height: 360px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: end;\r\n      -ms-flex-align: end;\r\n          align-items: flex-end;\r\n  /*margin-right: 20px;*/\r\n  /*float: left;*/\r\n  background: #333;\r\n}\r\n\r\n.progress-bar-vertical .progress-bar {\r\n  width: 100%;\r\n  height: 0;\r\n  -webkit-transition: height 0.6s ease;\r\n  transition: height 0.6s ease;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/shared/progress-bar/progress-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"progress progress-bar-vertical\">\r\n    <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"game.batsman.runs\"\r\n    aria-valuemin=\"0\" aria-valuemax=\"game.targetScore\"\r\n    [style.height]=\"playerHeight + '%'\">\r\n      {{player.runs}}\r\n    </div>\r\n    <div class=\"progress-bar progress-bar-warning\" role=\"progressbar\" aria-valuenow=\"game.batsman.runs\"\r\n    aria-valuemin=\"0\" aria-valuemax=\"game.targetScore\"\r\n    [style.height]=\"otherPlayerHeight + '%'\">\r\n      {{otherPlayer.runs}}\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/shared/progress-bar/progress-bar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var Player_1 = __webpack_require__("./src/app/model/Player.ts");
var Game_1 = __webpack_require__("./src/app/model/Game.ts");
var ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent() {
    }
    var _a, _b, _c;
    __decorate([
        core_1.Input(),
        __metadata("design:type", typeof (_a = typeof Player_1.Player !== "undefined" && Player_1.Player) === "function" && _a || Object)
    ], ProgressBarComponent.prototype, "player", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", typeof (_b = typeof Player_1.Player !== "undefined" && Player_1.Player) === "function" && _b || Object)
    ], ProgressBarComponent.prototype, "otherPlayer", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", typeof (_c = typeof Game_1.Game !== "undefined" && Game_1.Game) === "function" && _c || Object)
    ], ProgressBarComponent.prototype, "game", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], ProgressBarComponent.prototype, "playerHeight", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], ProgressBarComponent.prototype, "otherPlayerHeight", void 0);
    ProgressBarComponent = __decorate([
        core_1.Component({
            selector: 'progress-bar',
            template: __webpack_require__("./src/app/components/shared/progress-bar/progress-bar.component.html"),
            styles: [__webpack_require__("./src/app/components/shared/progress-bar/progress-bar.component.css")]
        })
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());
exports.ProgressBarComponent = ProgressBarComponent;
//# sourceMappingURL=progress-bar.component.js.map

/***/ }),

/***/ "./src/app/enum/GameStatus.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GameStatus;
(function (GameStatus) {
    GameStatus[GameStatus["DRAW"] = 0] = "DRAW";
    GameStatus[GameStatus["NOT_STARTED"] = 1] = "NOT_STARTED";
    GameStatus[GameStatus["IN_PROGRESS"] = 2] = "IN_PROGRESS";
    GameStatus[GameStatus["GAME_OVER"] = 3] = "GAME_OVER";
})(GameStatus = exports.GameStatus || (exports.GameStatus = {}));
//# sourceMappingURL=GameStatus.js.map

/***/ }),

/***/ "./src/app/enum/PlayerStatus.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PlayerStatus;
(function (PlayerStatus) {
    PlayerStatus[PlayerStatus["Out"] = 0] = "Out";
    PlayerStatus[PlayerStatus["NotOut"] = 1] = "NotOut";
    PlayerStatus[PlayerStatus["Won"] = 2] = "Won";
    PlayerStatus[PlayerStatus["Lost"] = 3] = "Lost";
})(PlayerStatus = exports.PlayerStatus || (exports.PlayerStatus = {}));
//# sourceMappingURL=PlayerStatus.js.map

/***/ }),

/***/ "./src/app/enum/PlayerType.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PlayerType;
(function (PlayerType) {
    PlayerType[PlayerType["User"] = 0] = "User";
    PlayerType[PlayerType["Computer"] = 1] = "Computer";
    PlayerType[PlayerType["Host"] = 2] = "Host";
    PlayerType[PlayerType["Guest"] = 3] = "Guest";
})(PlayerType = exports.PlayerType || (exports.PlayerType = {}));
//# sourceMappingURL=PlayerType.js.map

/***/ }),

/***/ "./src/app/enum/UpdateType.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UpdateType;
(function (UpdateType) {
    UpdateType[UpdateType["DANGER"] = 0] = "DANGER";
    UpdateType[UpdateType["WARNING"] = 1] = "WARNING";
    UpdateType[UpdateType["INFO"] = 2] = "INFO";
    UpdateType[UpdateType["SUCCESS"] = 3] = "SUCCESS";
})(UpdateType = exports.UpdateType || (exports.UpdateType = {}));
//# sourceMappingURL=UpdateType.js.map

/***/ }),

/***/ "./src/app/model/Email.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Email = /** @class */ (function () {
    function Email() {
    }
    return Email;
}());
exports.Email = Email;
//# sourceMappingURL=Email.js.map

/***/ }),

/***/ "./src/app/model/Game.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GameStatus_1 = __webpack_require__("./src/app/enum/GameStatus.ts");
var Game = /** @class */ (function () {
    function Game() {
        this.updates = [];
        this.gameStatus = GameStatus_1.GameStatus.NOT_STARTED;
    }
    Game.prototype.setBatsman = function (player) {
        this.batsman = player;
    };
    Game.prototype.getBatsman = function () { return this.batsman; };
    Game.prototype.setBowler = function (player) {
        this.bowler = player;
    };
    Game.prototype.getBowler = function () { return this.bowler; };
    return Game;
}());
exports.Game = Game;
//# sourceMappingURL=Game.js.map

/***/ }),

/***/ "./src/app/model/Message.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Message = /** @class */ (function () {
    function Message(player, text) {
        this.date = new Date();
        this.senderName = player.name;
        this.senderId = player.id;
        this.message = text;
    }
    return Message;
}());
exports.Message = Message;
//# sourceMappingURL=Message.js.map

/***/ }),

/***/ "./src/app/model/Player.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PlayerStatus_1 = __webpack_require__("./src/app/enum/PlayerStatus.ts");
var helper_service_1 = __webpack_require__("./src/app/services/helper.service.ts");
var Player = /** @class */ (function () {
    function Player(type) {
        this.runs = 0;
        this.balls = 0;
        this.wins = 0;
        this.id = helper_service_1.HelperService.getRandomId(5);
        this.type = type;
        this.status = PlayerStatus_1.PlayerStatus.NotOut;
    }
    Player.prototype.isOut = function () { return this.status == PlayerStatus_1.PlayerStatus.Out; };
    return Player;
}());
exports.Player = Player;
//# sourceMappingURL=Player.js.map

/***/ }),

/***/ "./src/app/routes/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var offline_game_component_1 = __webpack_require__("./src/app/components/offline-game/offline-game.component.ts");
var online_game_component_1 = __webpack_require__("./src/app/components/online-game/online-game.component.ts");
var feedback_component_1 = __webpack_require__("./src/app/components/feedback/feedback.component.ts");
var howtoplay_component_1 = __webpack_require__("./src/app/components/howtoplay/howtoplay.component.ts");
var routes = [
    {
        path: 'offlineGame',
        component: offline_game_component_1.OfflineGameComponent
    },
    {
        path: 'onlineGame',
        component: online_game_component_1.OnlineGameComponent
    },
    {
        path: 'howtoplay',
        component: howtoplay_component_1.HowToPlayComponent
    },
    {
        path: 'feedback',
        component: feedback_component_1.FeedbackComponent
    },
    { path: '**',
        redirectTo: '/offlineGame',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "./src/app/services/application.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
var ApplicationService = /** @class */ (function () {
    // baseUrl: string = 'http://localhost:8080';
    function ApplicationService(http) {
        this.http = http;
        this.baseUrl = 'https://hand-cricket-server.herokuapp.com';
    }
    ApplicationService.prototype.wakeServer = function () {
        this._wakeUp().subscribe(function (str) { return console.log('wakeServer: ' + str); }, function (error) { return console.log('Could not wake server: ' + error); });
    };
    ApplicationService.prototype._wakeUp = function () {
        return this.http.get(this.baseUrl)
            .map(function (response) {
            console.log('Server WakeUp Call: ' + JSON.stringify(response));
            return response.text();
            ;
        });
    };
    var _a;
    ApplicationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
    ], ApplicationService);
    return ApplicationService;
}());
exports.ApplicationService = ApplicationService;
//# sourceMappingURL=application.service.js.map

/***/ }),

/***/ "./src/app/services/chat.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var _ = __webpack_require__("./node_modules/lodash/lodash.js");
var ChatService = /** @class */ (function () {
    function ChatService() {
        this.showChat = false;
        this.newMessages = 0;
        this.messages = [];
    }
    ChatService.prototype.openChat = function () {
        this.showChat = true;
        this.newMessages = 0;
        this.scrollDown();
    };
    ChatService.prototype.countMessage = function () {
        if (!this.showChat)
            this.newMessages++;
    };
    ChatService.prototype.addMessage = function (message) {
        this.messages.push(message);
    };
    ChatService.prototype.clearMessages = function () {
        this.messages = [];
    };
    ChatService.prototype.scrollDown = function () {
        var that = this;
        setTimeout(function () {
            if (that.messages.length == 0)
                return;
            var messageElement = document.getElementById(_.last(that.messages).date.toString());
            messageElement.scrollIntoView();
        }, 50);
    };
    ChatService = __decorate([
        core_1.Injectable()
    ], ChatService);
    return ChatService;
}());
exports.ChatService = ChatService;
//# sourceMappingURL=chat.service.js.map

/***/ }),

/***/ "./src/app/services/countdown.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var CountdownService = /** @class */ (function () {
    function CountdownService() {
    }
    CountdownService.prototype.countdown = function () {
        if (this.timer)
            return;
        this.timer = 60;
        var that = this;
        this.interval = setInterval(function () {
            if (that.timer > 0) {
                that.timer--;
            }
            else {
                that.clearTimer();
            }
        }, 1000);
    };
    CountdownService.prototype.clearTimer = function () {
        clearInterval(this.interval);
        this.timer = 0;
    };
    CountdownService = __decorate([
        core_1.Injectable()
    ], CountdownService);
    return CountdownService;
}());
exports.CountdownService = CountdownService;
//# sourceMappingURL=countdown.service.js.map

/***/ }),

/***/ "./src/app/services/game-animation.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var GameAnimationService = /** @class */ (function () {
    function GameAnimationService() {
        this.gameRestart = 0;
        this.inputs = {
            0: 0,
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0
        };
    }
    GameAnimationService = __decorate([
        core_1.Injectable()
    ], GameAnimationService);
    return GameAnimationService;
}());
exports.GameAnimationService = GameAnimationService;
//# sourceMappingURL=game-animation.service.js.map

/***/ }),

/***/ "./src/app/services/game.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
var Game_1 = __webpack_require__("./src/app/model/Game.ts");
var PlayerStatus_1 = __webpack_require__("./src/app/enum/PlayerStatus.ts");
var GameStatus_1 = __webpack_require__("./src/app/enum/GameStatus.ts");
var application_service_1 = __webpack_require__("./src/app/services/application.service.ts");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var GameService = /** @class */ (function () {
    function GameService(http, appService) {
        this.http = http;
        this.appService = appService;
    }
    GameService.prototype.setGame = function (game) {
        this.game = game;
    };
    GameService.prototype.resetGame = function () {
        this.game = undefined;
    };
    GameService.prototype.getGame = function () {
        if (!this.game)
            this.game = new Game_1.Game();
        return this.game;
    };
    GameService.prototype.makeBatsman = function (game, player) {
        if (player.balls == undefined)
            player.balls = 0;
        if (player.runs == undefined)
            player.runs = 0;
        player.status = PlayerStatus_1.PlayerStatus.NotOut;
        game.setBatsman(player);
        return player;
    };
    GameService.prototype.makeBowler = function (game, player) {
        game.setBowler(player);
        return player;
    };
    GameService.prototype.setPlayersAndGame = function (game, batsman, bowler) {
        this.makeBatsman(game, batsman);
        this.makeBowler(game, bowler);
        game.gameStatus = GameStatus_1.GameStatus.IN_PROGRESS;
    };
    GameService.prototype.getGameId = function (player) {
        return this.http.post(this.appService.baseUrl + '/game/hostGame', player)
            .map(function (response) {
            console.log('getGameId: ' + JSON.stringify(response));
            return response.text();
        });
    };
    GameService.prototype.joinGame = function (player, id) {
        return this.http.post(this.appService.baseUrl + '/game/joinGame/' + id, player)
            .map(function (response) {
            console.log('joinGame: ' + JSON.stringify(response));
            return response.json();
        });
    };
    GameService.prototype.restartGame = function () {
        console.log(this.appService.baseUrl + "/game/restart/" + this.getGame().id);
        return this.http.get(this.appService.baseUrl + "/game/restart/" + this.getGame().id)
            .map(function (response) {
            console.log('restartGame: ' + JSON.stringify(response));
            return response.text();
        });
    };
    GameService.prototype.isConnected = function () {
        return this.getGame().connected;
    };
    GameService.prototype.isGameOver = function () {
        return this.getGame().gameStatus.toString() === GameStatus_1.GameStatus[GameStatus_1.GameStatus.GAME_OVER]
            || this.getGame().gameStatus === GameStatus_1.GameStatus.GAME_OVER;
    };
    GameService.prototype.isGameDraw = function () {
        return this.getGame().gameStatus.toString() === GameStatus_1.GameStatus[GameStatus_1.GameStatus.DRAW]
            || this.getGame().gameStatus === GameStatus_1.GameStatus.DRAW;
    };
    GameService.prototype.isGameInProgress = function () {
        return this.getGame().gameStatus.toString() === GameStatus_1.GameStatus[GameStatus_1.GameStatus.IN_PROGRESS]
            || this.getGame().gameStatus === GameStatus_1.GameStatus.IN_PROGRESS;
    };
    var _a, _b;
    GameService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object, typeof (_b = typeof application_service_1.ApplicationService !== "undefined" && application_service_1.ApplicationService) === "function" && _b || Object])
    ], GameService);
    return GameService;
}());
exports.GameService = GameService;
//# sourceMappingURL=game.service.js.map

/***/ }),

/***/ "./src/app/services/helper.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var angular2_uuid_1 = __webpack_require__("./node_modules/angular2-uuid/index.js");
var _ = __webpack_require__("./node_modules/lodash/lodash.js");
var HelperService = /** @class */ (function () {
    function HelperService() {
        this.noOfOutputs = 7;
    }
    HelperService.getRandomId = function (len) {
        var id = angular2_uuid_1.UUID.UUID();
        id = _.replace(id, /-/g, '');
        id = id.substring(0, len);
        id = id.toUpperCase();
        return id;
    };
    HelperService.prototype.reloadPage = function (window) {
        window.location.reload();
    };
    HelperService.prototype.getRandomNumber = function () {
        return Math.floor(Math.random() * this.noOfOutputs);
    };
    HelperService = __decorate([
        core_1.Injectable()
    ], HelperService);
    return HelperService;
}());
exports.HelperService = HelperService;
//# sourceMappingURL=helper.service.js.map

/***/ }),

/***/ "./src/app/services/play.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var PlayService = /** @class */ (function () {
    function PlayService() {
        this.wait = false;
    }
    PlayService.prototype.setWait = function (wait) {
        this.wait = wait;
    };
    PlayService.prototype.reset = function () {
        this.notice = '';
        this.wait = false;
    };
    PlayService.prototype.getCurrentPlayerNotice = function () {
        return this.notice.split(';')[0];
    };
    PlayService.prototype.getOtherPlayerNotice = function () {
        return this.notice.split(';')[1];
    };
    PlayService = __decorate([
        core_1.Injectable()
    ], PlayService);
    return PlayService;
}());
exports.PlayService = PlayService;
//# sourceMappingURL=play.service.js.map

/***/ }),

/***/ "./src/app/services/player.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
var PlayerStatus_1 = __webpack_require__("./src/app/enum/PlayerStatus.ts");
var game_service_1 = __webpack_require__("./src/app/services/game.service.ts");
var application_service_1 = __webpack_require__("./src/app/services/application.service.ts");
var PlayerService = /** @class */ (function () {
    function PlayerService(gs, http, appService) {
        this.gs = gs;
        this.http = http;
        this.appService = appService;
    }
    PlayerService.prototype.resetPlayer = function () {
        this.player.runs = 0;
        this.player.balls = 0;
        this.player.status = PlayerStatus_1.PlayerStatus.NotOut;
        this.player.type = undefined;
        this.player.wins = 0;
        this.player.lastDelivery = undefined;
    };
    PlayerService.prototype.getPlayer = function () {
        return this.getCurrentPlayer();
    };
    PlayerService.prototype.setPlayer = function (player) {
        this.player = player;
    };
    PlayerService.prototype.isBatsman = function () {
        return this.gs.getGame().batsman.id == this.player.id;
    };
    PlayerService.prototype.isBowler = function () {
        return this.gs.getGame().bowler.id == this.player.id;
    };
    PlayerService.prototype.isOppBatsman = function () {
        return this.gs.getGame().batsman.id == this.getOtherPlayer().id;
    };
    PlayerService.prototype.isOppBowler = function () {
        return this.gs.getGame().bowler.id == this.getOtherPlayer().id;
    };
    PlayerService.prototype.getCurrentPlayer = function () {
        var game = this.gs.getGame();
        if (game.batsman && game.batsman.id == this.player.id)
            return game.batsman;
        if (game.bowler && game.bowler.id == this.player.id)
            return game.bowler;
        return this.player;
    };
    PlayerService.prototype.getOtherPlayer = function () {
        var game = this.gs.getGame();
        if (game.batsman && game.batsman.id != this.player.id)
            return game.batsman;
        if (game.bowler && game.bowler.id != this.player.id)
            return game.bowler;
    };
    PlayerService.prototype.currentPlayerBatting = function () {
        return this.getCurrentPlayer().id == this.gs.getGame().batsman.id;
    };
    PlayerService.prototype.otherPlayerBatting = function () {
        return this.getOtherPlayer().id == this.gs.getGame().batsman.id;
    };
    PlayerService.prototype.currentPlayerWon = function () {
        return this.getCurrentPlayer().status.toString() === PlayerStatus_1.PlayerStatus[PlayerStatus_1.PlayerStatus.Won];
    };
    PlayerService.prototype.currentPlayerLost = function () {
        return this.getCurrentPlayer().status.toString() === PlayerStatus_1.PlayerStatus[PlayerStatus_1.PlayerStatus.Lost];
    };
    PlayerService.prototype.isCurrentPlayerOut = function () {
        return this.getCurrentPlayer().status.toString() === PlayerStatus_1.PlayerStatus[PlayerStatus_1.PlayerStatus.Out];
    };
    PlayerService.prototype.isOtherPlayerOut = function () {
        return this.getOtherPlayer().status.toString() === PlayerStatus_1.PlayerStatus[PlayerStatus_1.PlayerStatus.Out];
    };
    PlayerService.prototype.getNewPlayer = function () {
        return this.http.post(this.appService.baseUrl + '/player/newPlayer', this.player)
            .map(function (response) {
            console.log('New Player: ' + JSON.stringify(response));
            return response.json();
        });
    };
    var _a, _b, _c;
    PlayerService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof game_service_1.GameService !== "undefined" && game_service_1.GameService) === "function" && _a || Object, typeof (_b = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _b || Object, typeof (_c = typeof application_service_1.ApplicationService !== "undefined" && application_service_1.ApplicationService) === "function" && _c || Object])
    ], PlayerService);
    return PlayerService;
}());
exports.PlayerService = PlayerService;
//# sourceMappingURL=player.service.js.map

/***/ }),

/***/ "./src/app/services/progress-bar.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var ProgressBarService = /** @class */ (function () {
    function ProgressBarService() {
        this.nextTargetScore = 20;
    }
    ProgressBarService.prototype.getNextTargetScore = function (currentScore) {
        if (!currentScore)
            return this.nextTargetScore;
        while (this.nextTargetScore < (currentScore * 1.3))
            this.nextTargetScore *= 2;
        return this.nextTargetScore;
    };
    ProgressBarService.prototype.getBarHeight = function (runs, targetScore) {
        if (targetScore == null)
            targetScore = this.getNextTargetScore(runs);
        return Math.min(100, (runs / (targetScore ? targetScore : 1)) * 100);
    };
    ProgressBarService = __decorate([
        core_1.Injectable()
    ], ProgressBarService);
    return ProgressBarService;
}());
exports.ProgressBarService = ProgressBarService;
//# sourceMappingURL=progress-bar.service.js.map

/***/ }),

/***/ "./src/app/services/socket.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var game_service_1 = __webpack_require__("./src/app/services/game.service.ts");
var player_service_1 = __webpack_require__("./src/app/services/player.service.ts");
var application_service_1 = __webpack_require__("./src/app/services/application.service.ts");
var play_service_1 = __webpack_require__("./src/app/services/play.service.ts");
var helper_service_1 = __webpack_require__("./src/app/services/helper.service.ts");
var countdown_service_1 = __webpack_require__("./src/app/services/countdown.service.ts");
var chat_service_1 = __webpack_require__("./src/app/services/chat.service.ts");
var _ = __webpack_require__("./node_modules/lodash/lodash.js");
var Stomp = __webpack_require__("./node_modules/stompjs/index.js");
var SockJS = __webpack_require__("./node_modules/sockjs-client/lib/entry.js");
var SocketService = /** @class */ (function () {
    function SocketService(gameService, playerService, appService, playService, herlperService, countdownService, chatService) {
        this.gameService = gameService;
        this.playerService = playerService;
        this.appService = appService;
        this.playService = playService;
        this.herlperService = herlperService;
        this.countdownService = countdownService;
        this.chatService = chatService;
        this.retryTimeOutInSeconds = 5;
    }
    SocketService.prototype.connectChat = function (message) {
        this.stompClient.send("/app/chat/" + this.gameService.getGame().id + "/connect", {}, JSON.stringify(message));
    };
    SocketService.prototype.disconnectChat = function (message) {
        this.stompClient.send("/app/chat/" + this.gameService.getGame().id + "/disconnect", {}, JSON.stringify(message));
    };
    SocketService.prototype.sendChatMessage = function (message) {
        this.stompClient.send("/app/chat/" + this.gameService.getGame().id, {}, JSON.stringify(message));
    };
    SocketService.prototype.sendInput = function (number) {
        this.stompClient
            .send("/app/game/play/" + this.gameService.getGame().id + "/" + this.playerService.getPlayer().id, {}, number);
    };
    SocketService.prototype.ping = function () {
        this.stompClient
            .send("/app/game/ping/" + this.gameService.getGame().id + "/" + this.playerService.getPlayer().id, {}, 'ping');
    };
    SocketService.prototype.quitGame = function () {
        this.stompClient.send("/app/game/quit/" + this.gameService.getGame().id, {}, this.playerService.getPlayer().id);
    };
    SocketService.prototype.initConnect = function () {
        if (this.socket && this.stompClient)
            return;
        this.connect();
        this.countdownService.countdown();
    };
    SocketService.prototype.connect = function () {
        var that = this;
        this.socket = new SockJS(this.appService.baseUrl + "/game/socket-registration");
        this.stompClient = Stomp.over(this.socket);
        this.stompClient.connect({}, function (frame) {
            console.log('Connected: ' + frame);
            that.countdownService.clearTimer();
        }, function (err) {
            console.log('Socket Disconnected', err);
            if (that.gameService.isConnected())
                window.location.reload();
            else {
                setTimeout(_.bind(that.connect, that), that.retryTimeOutInSeconds * 1000);
            }
        });
    };
    SocketService.prototype.subscribetoGame = function () {
        var _this = this;
        return this.stompClient.subscribe("/game/" + this.gameService.getGame().id, function (response) {
            console.log('Game Subscription: ' + JSON.stringify(response));
            _this.gameService.setGame(JSON.parse(response.body));
            _this.playService.reset();
        });
    };
    SocketService.prototype.subscribetoPing = function () {
        return this.stompClient.subscribe("/game/ping/" + this.gameService.getGame().id + "/" + this.playerService.getPlayer().id, function (response) {
            console.log('Ping Subscription: ' + JSON.stringify(response));
        });
    };
    SocketService.prototype.subscribetoChat = function () {
        var _this = this;
        return this.stompClient.subscribe("/chat/" + this.gameService.getGame().id, function (response) {
            console.log('Chat Subscription: ' + JSON.stringify(response));
            _this.chatService.addMessage(JSON.parse(response.body));
            _this.chatService.countMessage();
            _this.chatService.scrollDown();
        });
    };
    SocketService.prototype.subscribeToNotice = function () {
        var _this = this;
        return this.stompClient.subscribe("/game/" + this.gameService.getGame().id + "/player/" + this.playerService.getPlayer().id + "/notify", function (response) {
            console.log('Notice Subscription: ' + JSON.stringify(response));
            _this.playService.notice = response.body;
        });
    };
    SocketService.prototype.subscribeToWait = function () {
        var _this = this;
        return this.stompClient.subscribe("/game/" + this.gameService.getGame().id + "/player/" + this.playerService.getPlayer().id + "/pause", function (response) {
            console.log('Wait Subscription: ' + JSON.stringify(response));
            _this.playService.setWait(response.body === 'true');
        });
    };
    SocketService.prototype.disconnect = function () {
        if (this.isConnected()) {
            this.stompClient.disconnect();
            console.log("Disconnected");
        }
        this.stompClient = null;
        this.socket = null;
    };
    SocketService.prototype.isConnected = function () {
        return this.stompClient && this.stompClient.connected;
    };
    var _a, _b, _c, _d, _e, _f, _g;
    SocketService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof game_service_1.GameService !== "undefined" && game_service_1.GameService) === "function" && _a || Object, typeof (_b = typeof player_service_1.PlayerService !== "undefined" && player_service_1.PlayerService) === "function" && _b || Object, typeof (_c = typeof application_service_1.ApplicationService !== "undefined" && application_service_1.ApplicationService) === "function" && _c || Object, typeof (_d = typeof play_service_1.PlayService !== "undefined" && play_service_1.PlayService) === "function" && _d || Object, typeof (_e = typeof helper_service_1.HelperService !== "undefined" && helper_service_1.HelperService) === "function" && _e || Object, typeof (_f = typeof countdown_service_1.CountdownService !== "undefined" && countdown_service_1.CountdownService) === "function" && _f || Object, typeof (_g = typeof chat_service_1.ChatService !== "undefined" && chat_service_1.ChatService) === "function" && _g || Object])
    ], SocketService);
    return SocketService;
}());
exports.SocketService = SocketService;
//# sourceMappingURL=socket.service.js.map

/***/ }),

/***/ "./src/app/services/stats.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
var application_service_1 = __webpack_require__("./src/app/services/application.service.ts");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var StatsService = /** @class */ (function () {
    function StatsService(appService, http) {
        this.appService = appService;
        this.http = http;
    }
    StatsService.prototype.getMaxWinsAndRunsPlayer = function () {
        this.getMaxWinsPlayer();
        this.getMaxRunsPlayer();
    };
    StatsService.prototype.getMaxWinsPlayer = function () {
        var _this = this;
        this.http.get(this.appService.baseUrl + '/playerStats/maxWins').map(function (response) {
            console.log('getMaxWinsPlayer: ' + response);
            return response.json();
        }).subscribe(function (player) { return _this.playerMaxWins = player; }, function (error) { return console.log(error); });
    };
    StatsService.prototype.getMaxRunsPlayer = function () {
        var _this = this;
        this.http.get(this.appService.baseUrl + '/playerStats/maxRuns').map(function (response) {
            console.log('getMaxRunsPlayer: ' + response);
            return response.json();
        }).subscribe(function (player) { return _this.playerMaxRuns = player; }, function (error) { return console.log(error); });
    };
    StatsService.prototype.submitScore = function (player) {
        return this.http.post(this.appService.baseUrl + '/playerStats/submit', player).map(function (response) {
            console.log('submitScore: ' + response);
            return response.text();
        });
    };
    var _a, _b;
    StatsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof application_service_1.ApplicationService !== "undefined" && application_service_1.ApplicationService) === "function" && _a || Object, typeof (_b = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _b || Object])
    ], StatsService);
    return StatsService;
}());
exports.StatsService = StatsService;
//# sourceMappingURL=stats.service.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map