import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { EntryEditComponent } from './components/entry-edit/entry-edit.component';
import { EntryListComponent } from './components/entry-list/entry-list.component';
import { EntryListItemComponent } from './components/entry-list-item/entry-list-item.component';
import { EntryResolver } from './resolvers/entry.resolver';
import { PhonebookService } from './services/phonebook.service';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    EntryEditComponent,
    EntryListComponent,
    EntryListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PhonebookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
