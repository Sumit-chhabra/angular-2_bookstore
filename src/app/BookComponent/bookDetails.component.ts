import {Component,OnInit} from '@angular/core';
import {BookService} from './book.service';
import {IBook} from './book.interface';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    templateUrl: 'app/BookHtml/bookDetails.html',
    styleUrls: ['app/styleCss/bookStyles.css']
})
export class BookDetailsComponent implements OnInit
{
    book: IBook;
    statusMessage: string;

    constructor(private _bookService: BookService, private _activatedRoute: ActivatedRoute,
        private _router: Router)
    { }

   

    ngOnInit()
    {
        let id: string = this._activatedRoute.snapshot.params['id'];
        this._bookService.getBookDetailsById(id)
            .subscribe((bookData) => this.book = bookData,
            (error) => {
                this.statusMessage = "Service is not working.. Please try again after Sometime";
                console.log(error);
            }
        
    }

    backToBookStore(): void
    {
        this._router.navigate(['/books']);
    }
    
}