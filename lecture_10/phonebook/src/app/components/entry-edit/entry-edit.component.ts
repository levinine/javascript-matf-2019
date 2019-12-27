import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Entry } from 'src/app/models/entry.model';
import { PhonebookService } from '../../services/phonebook.service';

@Component({
  selector: 'app-entry-edit',
  templateUrl: './entry-edit.component.html',
  styleUrls: ['./entry-edit.component.css']
})
export class EntryEditComponent implements OnInit {
  mode: string = 'new';
  disableInputsOnSaving = false;
  entry: Entry;
  constructor(
    private cdRef:ChangeDetectorRef,
    private activatedRoute: ActivatedRoute, 
    private phonebookService: PhonebookService) {

      this.activatedRoute.data.subscribe((data: {entry: Entry}) => {
        if(data.entry)
          this.entry = data.entry;
        else {
          this.entry = new Entry();
        }
      });
  
  }

  ngOnInit() {
    this.mode = this.activatedRoute.snapshot.data['mode'];

  }
  saveOrAdd() {
    if(this.mode === 'new') {
      this.add();
    } else {
      this.save();
    }

  }
  save() {
    this.disableInputsOnSaving = true;
    this.phonebookService.update(this.entry).subscribe(()=>{
      this.phonebookService.onListChanged.next();
      setTimeout(()=>{
        this.disableInputsOnSaving = false;

      }, 1000);
    })
  }
  add() {
    this.disableInputsOnSaving = true;
    this.phonebookService.create(this.entry).subscribe(() =>{
      this.phonebookService.onListChanged.next();
      setTimeout(()=>{
        this.disableInputsOnSaving = false;
      }, 1000);
    });
  }

}
