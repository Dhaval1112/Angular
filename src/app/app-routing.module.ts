import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUpdateAuthorComponent } from './components/create-update-author/create-update-author.component';
import { CreateUpdateBookComponent } from './components/create-update-book/create-update-book.component';
import { ShowAllAuthorsComponent } from './components/show-all-authors/show-all-authors.component';
import { ShowAllBooksComponent } from './components/show-all-books/show-all-books.component';

const routes: Routes = [
  {
    path: '',
    component: ShowAllBooksComponent,
  },
  {
    path: 'book/createupdate',
    component: CreateUpdateBookComponent,
  },
  {
    path: 'book/createupdate/:id',
    component: CreateUpdateBookComponent,
  },
  {
    path: 'authors',
    component: ShowAllAuthorsComponent,
  },
  {
    path: 'author/createupdate',
    component: CreateUpdateAuthorComponent,
  },
  {
    path: 'author/createupdate/:id',
    component: CreateUpdateAuthorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
