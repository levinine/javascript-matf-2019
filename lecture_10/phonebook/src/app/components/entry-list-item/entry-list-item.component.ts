import { Component, OnInit, Input } from '@angular/core';
import { Entry } from 'src/app/models/entry.model';
import { PhonebookService } from 'src/app/services/phonebook.service';

@Component({
  selector: 'app-entry-list-item',
  templateUrl: './entry-list-item.component.html',
  styleUrls: ['./entry-list-item.component.css']
})
export class EntryListItemComponent implements OnInit {

  @Input('entry') entry: Entry;

  constructor(private phonebookService: PhonebookService) { }

  ngOnInit() {
  }
  delete() {
    this.phonebookService.delete(this.entry).subscribe(() => {
      this.phonebookService.onListChanged.next();
    })
  }
}
