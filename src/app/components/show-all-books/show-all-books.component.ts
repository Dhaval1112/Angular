import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BookModel } from 'src/app/models/book-model';
import { BookCrudService } from 'src/app/services/book-crud.service';

@Component({
  selector: 'app-show-all-books',
  templateUrl: './show-all-books.component.html',
  styleUrls: ['./show-all-books.component.css'],
})
export class ShowAllBooksComponent implements OnInit {
  constructor(
    private _bookservice: BookCrudService,
    private _toastr: ToastrService
  ) {}

  books!: BookModel[];
  backup!: BookModel[];
  search: string = '';
  extra: string = 'man';

  searchRecords() {
    this.books = this.backup.filter(
      (data) =>
        data.name.toLowerCase().includes(this.search.toLowerCase()) &&
        data.title.toLowerCase().includes(this.extra.toLowerCase())
    );
  }

  ngOnInit(): void {
    // for getting all books details
    this.getAllBooks();
  }

  getAllBooks() {
    this._bookservice.getAllBook().subscribe((jsonBooks) => {
      this.books = jsonBooks;
      this.backup = jsonBooks;
    });
  }

  deleteBook(id: number) {
    this._bookservice.deleteBook(id).subscribe(
      (data) => {
        console.log('SUCCESS:', data);

        this.getAllBooks();
        this._toastr.warning(data, 'Deleted');
      },
      (error) => {
        console.log('ERROR:', error);
      }
    );
  }
}
