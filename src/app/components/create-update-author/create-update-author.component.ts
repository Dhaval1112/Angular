import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorModel } from 'src/app/models/author-model';
import { AuthorCrudService } from 'src/app/services/author-crud.service';

@Component({
  selector: 'app-create-update-author',
  templateUrl: './create-update-author.component.html',
  styleUrls: ['./create-update-author.component.css'],
})
export class CreateUpdateAuthorComponent implements OnInit {
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _httpAuthor: AuthorCrudService
  ) {}

  submitted = false;
  id!: string;

  author!: AuthorModel;

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      this.id = params['id'];
      console.log(this.id);

      this._httpAuthor.getSingleAuthor(this.id).subscribe((authorData) => {
        this.form.setValue(authorData);
      });
    });
  }

  form = new FormGroup({
    id: new FormControl(0),
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  createUpdateAuthor() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    } else {
      var updatedAuthor: AuthorModel = this.form.value;
      if (this.id) {
        this._httpAuthor.updateAuthor(updatedAuthor).subscribe((status) => {
          console.log(status);
          this._router.navigateByUrl('/authors');
        });
      } else {
        this._httpAuthor.createAuthor(updatedAuthor).subscribe((data) => {
          console.log(data);
          this._router.navigateByUrl('/authors');
        });
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
