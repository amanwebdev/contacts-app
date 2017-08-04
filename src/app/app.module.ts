import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NavComponent } from './nav.component';
import { ContactEditForm } from './contact-edit.form';
import { ContactsComponent } from './contacts.component';
import { ContactComponent } from './contact.component';
import { LoginForm} from './login.form';
import { RegisterForm} from './register.form';
import { AppRoutingModule } from './app-routing.module';
import { ToasterModule } from 'angular2-toaster';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContactEditForm,
    ContactsComponent,
    ContactComponent,
    LoginForm,
    RegisterForm
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToasterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
