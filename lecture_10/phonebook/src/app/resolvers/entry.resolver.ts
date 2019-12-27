import { Injectable } from '@angular/core';
import { PhonebookService } from '../services/phonebook.service';
import { Entry } from '../models/entry.model';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';

@Injectable()
export class EntryResolver implements Resolve<Entry>  {
  constructor(private phonebookService: PhonebookService) {}
  
  resolve(route: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): Observable<Entry> {
    return this.phonebookService.find(route.params['entryId']);
  }
}