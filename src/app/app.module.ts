import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowAllBooksComponent } from './components/show-all-books/show-all-books.component';
import { CreateUpdateBookComponent } from './components/create-update-book/create-update-book.component';
import { ShowAllAuthorsComponent } from './components/show-all-authors/show-all-authors.component';
import { CreateUpdateAuthorComponent } from './components/create-update-author/create-update-author.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    ShowAllBooksComponent,
    CreateUpdateBookComponent,
    ShowAllAuthorsComponent,
    CreateUpdateAuthorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
