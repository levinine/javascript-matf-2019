import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { EntryResolver } from './resolvers/entry.resolver';


const routes: Routes = [
  { path: '', component:  LayoutComponent, data: { mode: 'new'} },
  { path: 'entry/:entryId', component: LayoutComponent, resolve: { entry: EntryResolver } },
  { path: 'entry/:entryId/edit', component: LayoutComponent, resolve: { entry: EntryResolver }, data: { mode: 'edit' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [EntryResolver]
})
export class AppRoutingModule { }
