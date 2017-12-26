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
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var bookList_component_1 = require('./BookComponent/bookList.component');
var home_component_1 = require('./BookComponent/home.component');
var bookDetails_component_1 = require('./BookComponent/bookDetails.component');
var pageNotFound_component_1 = require('./BookComponent/pageNotFound.component');
var book_service_1 = require('./BookComponent/book.service');
var appRoutes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'books', component: bookList_component_1.BookListComponent },
    { path: 'books/:id', component: bookDetails_component_1.BookDetailsComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: pageNotFound_component_1.PageNotFoundComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, router_1.RouterModule.forRoot(appRoutes, { useHash: true })
            ],
            declarations: [
                app_component_1.AppComponent, home_component_1.HomeComponent, bookList_component_1.BookListComponent, bookDetails_component_1.BookDetailsComponent, pageNotFound_component_1.PageNotFoundComponent
            ],
            providers: [book_service_1.BookService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map