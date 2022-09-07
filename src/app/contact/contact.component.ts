import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'; 
import * as firebase from 'firebase/compat';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit { 
  constructor(private itemsService:UsersService) { 
  }
 

  ngOnInit(): void {}

  contactForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email]),
    phone: new FormControl('',[Validators.required,Validators.minLength(9)]),
    message: new FormControl('',[Validators.required]),
  }); 
  // contacUser(){    
  //   this.contactForm.reset()
  // }
  contacUser(inputElement:any){
    inputElement=this.contactForm.value
    if(inputElement){
      this.itemsService.addInfo(inputElement) 
      this.contactForm.reset()
    } 
  }

  get name(){
    return this.contactForm.get('name')
  }
  
  get email(){
    return this.contactForm.get('email')
  }

  get phone(){
    return this.contactForm.get('phone')
  }

  get message(){
    return this.contactForm.get('message')
  } 
  
}
