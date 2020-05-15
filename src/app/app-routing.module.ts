import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/users.component';
import { ContactComponent } from './contact/contact.component';
//const routes: Routes = [];

const routes: Routes = [
  {path: '' , component: UsersComponent},
  {path: 'about' , component: AboutComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
