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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var observable_1 = require('rxjs/observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var BookService = (function () {
    function BookService(_http) {
        this._http = _http;
    }
    BookService.prototype.getBookDetails = function () {
        return this._http.get("Data/book.json")
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    BookService.prototype.getBookDetailsById = function (id) {
        return this.getBookDetails()
            .map(function (data) { return data.find(function (book) { return book.id === id; }); })
            .catch(this.handleError);
    };
    BookService.prototype.handleError = function (error) {
        console.error(error);
        return observable_1.Observable.throw(error);
    };
    BookService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], BookService);
    return BookService;
}());
exports.BookService = BookService;
//# sourceMappingURL=book.service.js.map