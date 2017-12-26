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
var BookListComponent = (function () {
    function BookListComponent(_bookService) {
        this._bookService = _bookService;
        this.statusMessage = 'Loading....Please wait';
    }
    BookListComponent.prototype.searchBook = function () {
        //let bookList:any[];
        var _this = this;
        if (this.searchText != null) {
            this.BookDetails = this.BookDetails.filter(function (book) { return book.name.toUpperCase() === _this.searchText.toUpperCase(); });
            console.log('search Button clicked');
            this.searchText = null;
        }
        else if (this.searchText == null) {
            this.ngOnInit();
            console.log('From search method in booklist');
        }
    };
    BookListComponent.prototype.ngOnInit = function () {
        this.getBookDetails();
    };
    BookListComponent.prototype.getBookDetails = function () {
        var _this = this;
        this._bookService
            .getBookDetails()
            .subscribe(function (Details) { return _this.BookDetails = Details; }, function (Error) { _this.statusMessage = 'Service is not working...Please try after sometime'; });
    };
    BookListComponent.prototype.trackById = function (index, book) {
        return book.id;
    };
    BookListComponent = __decorate([
        core_1.Component({
            //selector: 'book-list',
            templateUrl: 'app/BookHtml/bookList.html',
            styleUrls: ['app/styleCss/bookStyles.css']
        }), 
        __metadata('design:paramtypes', [book_service_1.BookService])
    ], BookListComponent);
    return BookListComponent;
}());
exports.BookListComponent = BookListComponent;
//# sourceMappingURL=bookList.component.js.map