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
var book_service_1 = require('./book.service');
var router_1 = require('@angular/router');
var BookDetailsComponent = (function () {
    function BookDetailsComponent(_bookService, _activatedRoute, _router) {
        this._bookService = _bookService;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
    }
    BookDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this._activatedRoute.snapshot.params['id'];
        this._bookService.getBookDetailsById(id)
            .subscribe(function (bookData) { return _this.book = bookData; }, function (error) {
            _this.statusMessage = "Service is not working.. Please try again after Sometime";
            console.log(error);
        });
    };
    BookDetailsComponent.prototype.backToBookStore = function () {
        this._router.navigate(['/books']);
    };
    BookDetailsComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/BookHtml/bookDetails.html',
            styleUrls: ['app/styleCss/bookStyles.css']
        }), 
        __metadata('design:paramtypes', [book_service_1.BookService, router_1.ActivatedRoute, router_1.Router])
    ], BookDetailsComponent);
    return BookDetailsComponent;
}());
exports.BookDetailsComponent = BookDetailsComponent;
//# sourceMappingURL=bookDetails.component.js.map