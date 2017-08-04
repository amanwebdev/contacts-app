import { Component } from '@angular/core';
import { Contact } from './Contact';
import { ContactService } from './contact.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {ToasterModule, ToasterService} from 'angular2-toaster';

@Component({
  selector: 'contact',
  templateUrl: './contact-edit.form.html',
  styleUrls: ['contact-edit.form.css']
})
export class ContactEditForm {
  contact:Contact;

  constructor(
    private toasterService : ToasterService,
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit() {
    this.route.params.subscribe(params => {
       let id = params['id'];
       if(id){
        this.contactService.findById(id)
        .subscribe(c=>this.contact=new Contact(c._id,c.name,c.email,c.phone,c.category));
       }else{
           this.contact = new Contact();
       }
       
    });
  }

  saveContact(){
    if(this.contact.id!=null){
        this.contactService.saveContact(this.contact)
        .subscribe(c=>{
            this.contact =new Contact(c._id,c.name,c.email,c.phone,c.category);
            this.toasterService.pop('success', 'Contact Updated!', '');
        })
    }else{
        this.contactService.createContact(this.contact)
        .subscribe(c=>{
            this.contact =new Contact(c._id,c.name,c.email,c.phone,c.category);
            this.toasterService.pop('success', 'Contact Saved!', '');
        })
    }
  }


}