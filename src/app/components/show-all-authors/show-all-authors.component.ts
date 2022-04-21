import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthorModel } from 'src/app/models/author-model';
import { AuthorCrudService } from 'src/app/services/author-crud.service';

@Component({
  selector: 'app-show-all-authors',
  templateUrl: './show-all-authors.component.html',
  styleUrls: ['./show-all-authors.component.css'],
})
export class ShowAllAuthorsComponent implements OnInit {
  constructor(
    private _authorCrud: AuthorCrudService,
    private _toastr: ToastrService
  ) {}
  authors!: AuthorModel[];

  deleteAuthor(id: number) {
    this._authorCrud.deleteAuthor(id).subscribe((deleteStatus) => {
      this._toastr.success('author deleted successfully done..!', 'Deleted');
      this.getAllAuthors();
    });
  }

  getAllAuthors() {
    this._authorCrud.getAllAuthors().subscribe((data) => {
      this.authors = data;
    });
  }
  ngOnInit(): void {
    this.getAllAuthors();
  }
}
