import { Component } from '@angular/core';
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.form.html',
  styleUrls: [
              './contact-edit.form.css'
            ]
})
export class ContactEditForm {
  constructor(private toasterService:ToasterService){}

  public saveContact() : void{
    this.toasterService.pop('success', 'New Contact Saved!', '');
  }
}