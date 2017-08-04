import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactEditForm } from './contact-edit.form';
import { ContactsComponent } from './contacts.component'
import { ContactComponent } from './contact.component'
import { LoginForm} from './login.form';
import { RegisterForm} from './register.form';

const appRoutes: Routes = [
  {
    path: '',
    component: ContactsComponent
  },
  {
    path: 'edit',
    component: ContactEditForm
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'login',
    component: LoginForm
  },
  {
    path: 'register',
    component: RegisterForm
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
   
  ]
})
export class AppRoutingModule { }