import { Component, OnInit } from '@angular/core';
import { PhonebookService } from 'src/app/services/phonebook.service';
import { Observable } from 'rxjs';
import { Entry } from 'src/app/models/entry.model';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  entries: Observable<Entry[]>;
  constructor(private phonebookService: PhonebookService) {
    this.phonebookService.onListChanged.subscribe(() => {
      this.entries = this.phonebookService.getEntries();
    })
   }

  ngOnInit() {
    this.entries = this.phonebookService.getEntries();
  }

}
