import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  apiUrl = 'http://hn.algolia.com/api/v1/search';

  getNewsData() {
	return this.http.get(this.apiUrl);
  }
}
