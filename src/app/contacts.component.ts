import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styles : ['']
})
export class ContactsComponent {

  constructor(private router: Router){}

  public showContact(event:Event){
    
    this.router.navigateByUrl('contact');
  }
  public selectContact(event:Event){
    
  }
}