import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CompanyListComponent} from './company-list/company-list.component';
import {CompanyEditComponent} from './company-edit/company-edit.component';
const routes: Routes = [
  { path: "", component: CompanyListComponent },
  { path: "company/:company_id", component: CompanyEditComponent },
  { path: "create", component: CompanyEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
