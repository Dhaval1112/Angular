import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorModel } from 'src/app/models/author-model';
import { BookModel } from 'src/app/models/book-model';
import { AuthorCrudService } from 'src/app/services/author-crud.service';
import { BookCrudService } from 'src/app/services/book-crud.service';

@Component({
  selector: 'app-create-update-book',
  templateUrl: './create-update-book.component.html',
  styleUrls: ['./create-update-book.component.css'],
})
export class CreateUpdateBookComponent implements OnInit {
  constructor(
    private _route: ActivatedRoute,
    private _authorCrud: AuthorCrudService,
    private _bookCrud: BookCrudService,
    private _router: Router
  ) {}

  submitted: boolean = false;

  authors!: AuthorModel[];

  id!: string;

  ngOnInit(): void {
    this._authorCrud.getAllAuthors().subscribe((authorjson) => {
      this.authors = authorjson;
    });

    this._route.params.subscribe((params) => {
      this.id = params['id'];
      if (this.id) {
        this._bookCrud.getSingleBook(this.id).subscribe((book) => {
          delete book.authorName;
          this.form.setValue(book);
        });
      }
    });
  }

  form = new FormGroup({
    id: new FormControl(0),
    name: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    totalPages: new FormControl('', Validators.required),
    authorId: new FormControl('', Validators.required),
  });

  submit() {
    this.submitted = true;

    if (this.form.invalid) return;
    else {
      if (this.id) {
        //for updating book
        var updateModel: BookModel = this.form.value;
        this._bookCrud.updateBook(updateModel).subscribe((data) => {
          console.log('data updated');
          this._router.navigateByUrl('');
        });
      } else {
        // for cteating new book
        //this.form.value.authorId = Number(this.form.value.authorId);
        var author: BookModel = this.form.value;
        //author.authorName = '';
        this._bookCrud.createBook(author).subscribe(
          (data) => {
            console.log('Author created successfully done ..! ', data);
            this._router.navigateByUrl('');
          },
          (error) => {
            console.log('Something went wrong', error);
          }
        );
      }
    }
  }

  get f() {
    return this.form.controls;
  }

  isValid = (name: string, validationName: string) => {
    return this.f[name].hasError(validationName);
  };

  hasErrors = (name: string) => {
    return this.f[name].errors;
  };
}
