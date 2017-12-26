import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import {BookListComponent} from './BookComponent/bookList.component';
import {HomeComponent} from './BookComponent/home.component';
import {BookDetailsComponent} from './BookComponent/bookDetails.component';
import {PageNotFoundComponent} from './BookComponent/pageNotFound.component';

import {BookService} from './BookComponent/book.service'


const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'books', component: BookListComponent },
    { path: 'books/:id', component: BookDetailsComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component:PageNotFoundComponent }
];

@NgModule({
    imports: [
        BrowserModule, HttpModule, FormsModule, RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    declarations: [
        AppComponent, HomeComponent, BookListComponent, BookDetailsComponent, PageNotFoundComponent
  ],
    
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
