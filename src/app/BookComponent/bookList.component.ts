import {Component, OnInit} from '@angular/core';
import {BookService} from './book.service';
import {IBook} from './book.interface';

@Component({
    //selector: 'book-list',
    templateUrl: 'app/BookHtml/bookList.html',
    styleUrls:['app/styleCss/bookStyles.css']

})
export class BookListComponent implements OnInit {

    BookDetails: IBook[];
    statusMessage: string = 'Loading....Please wait';
    searchText: string;

    constructor(private _bookService: BookService)
    { }

    searchBook(): void {
        //let bookList:any[];

        if (this.searchText != null) {

            this.BookDetails = this.BookDetails.filter(book => book.name.toUpperCase() === this.searchText.toUpperCase())

            console.log('search Button clicked');
            this.searchText = null;

            //this.BookDetails.forEach(element => {
            //    if (element.name.toUpperCase() === this.searchText.toUpperCase()) {
            //        this.BookDetails.push(element);
            //        console.log(element);
            //    }


            //});

            
        }
        else if (this.searchText == null) {
            this.ngOnInit();
            console.log('From search method in booklist');
            
        }
    }
    ngOnInit(): void
    {
        this.getBookDetails();
    }

    getBookDetails()
    {
        this._bookService
            .getBookDetails()
            .subscribe(Details => this.BookDetails = Details,
            (Error) => { this.statusMessage = 'Service is not working...Please try after sometime' });
    }

    trackById(index: number, book: IBook): string {
        return book.id;
    }
    
    
}