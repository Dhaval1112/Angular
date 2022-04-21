import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthorModel } from '../models/author-model';

@Injectable({
  providedIn: 'root',
})
export class AuthorCrudService {
  constructor(private _http: HttpClient) {}

  commonUrlAuthor: string = 'https://localhost:44344/api/Author';

  getAllAuthors(): Observable<any> {
    return this._http.get(`${this.commonUrlAuthor}`);
  }

  getSingleAuthor(id: string): Observable<any> {
    return this._http.get(`${this.commonUrlAuthor}/${id}`);
  }

  updateAuthor(author: AuthorModel): Observable<any> {
    return this._http.put(`${this.commonUrlAuthor}`, author);
  }

  deleteAuthor(id: number): Observable<any> {
    return this._http.delete(`${this.commonUrlAuthor}/${id}`, {
      responseType: 'text',
    });
  }

  createAuthor(author: AuthorModel): Observable<any> {
    return this._http.post(`${this.commonUrlAuthor}`, author);
  }
}
