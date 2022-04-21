import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookModel } from '../models/book-model';

@Injectable({
  providedIn: 'root',
})
export class BookCrudService {
  constructor(private _httpCrud: HttpClient) {}
  commonUrl: string = 'https://localhost:44344/api/Book';

  getAllBook(): Observable<any> {
    return this._httpCrud.get(this.commonUrl);
  }

  getSingleBook(id: string): Observable<any> {
    return this._httpCrud.get(`${this.commonUrl}/${id}`);
  }

  updateBook(book: BookModel): Observable<any> {
    return this._httpCrud.put(`${this.commonUrl}`, book, {
      responseType: 'text',
    });
  }

  deleteBook(id: number): Observable<any> {
    return this._httpCrud.delete(`${this.commonUrl}/${id}`, {
      responseType: 'text',
    });
  }
  createBook(book: BookModel): Observable<any> {
    return this._httpCrud.post(`${this.commonUrl}`, book, {
      responseType: 'text',
    });
  }
}
