import {Injectable} from '@angular/core';
import {IBook} from './book.interface'
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BookService {

    constructor(private _http: Http)
    { }

    
    getBookDetails(): Observable<IBook[]> {
        return this._http.get("Data/book.json")
            .map((response: Response) => <IBook>response.json())
            .catch(this.handleError);
    }

    getBookDetailsById(id: string): Observable<IBook> {
        return this.getBookDetails()
            .map((data: IBook[]) => data.find(book => book.id === id))
            .catch(this.handleError);
    }

    handleError(error: Response)
    {

        console.error(error);
        return Observable.throw(error);
    }
}