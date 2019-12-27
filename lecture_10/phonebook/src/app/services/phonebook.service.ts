import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Entry } from '../models/entry.model';
import { map, tap } from 'rxjs/operators';

const url = (path) => `http://localhost:3000/${path}`;


@Injectable({
  providedIn: 'root'
})
export class PhonebookService {
  public onListChanged: Subject<any>  = new Subject ();

  constructor(private http: HttpClient) { }
  getEntries(): Observable<Entry[]> {
    return this.http.get<Entry[]>(url('users'), {observe: 'body'});
  }
  find(id: string): Observable<Entry> {
    return this.http.get<Entry>((url(`users/${id}`)), { observe: 'body' });
  }
  create(model: Entry): Observable<string> {
    this.onListChanged.next();
    return this.http.post<string>( url(`users`), model);
  }
  update(model: Entry): Observable<any> {
    this.onListChanged.next();
    return this
      .http
      .put( url(`users/${model._id}`), model, { responseType: 'text' });
  }

  delete(model: Entry): Observable<boolean> {
    
    return this.http.delete(url(`users/${model._id}`)).pipe(
      map( response => true)
    );
  }
}
