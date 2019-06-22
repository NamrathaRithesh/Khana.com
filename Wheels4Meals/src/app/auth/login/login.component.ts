import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { ContactDetail } from 'src/app/models/contactDetail';
import { AddressBook } from 'src/app/models/addressBook';
import { Address } from 'src/app/models/address';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  
  registerForm: FormGroup;
  
  hide=true;
  submitted=false;
  emailId: string;
  password: string;
  
  constructor(private formBuilder: FormBuilder, private router:Router) { }

  ngOnInit() {
    this.user.contactDetails = new ContactDetail();
   this.user.contactDetails.addressBook = new AddressBook();
   this.user.contactDetails.addressBook.addressList= [new Address()];
   
    this.registerForm = this.formBuilder.group({
      'password': [this.user.password, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15)
      ]],
      'contactDetails': this.formBuilder.group({
        'emailId': [this.user.contactDetails.emailId, [
          Validators.email,
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
        ]]
    })
  })
}

onLogInSubmit(){
  this.submitted = true;
this.emailId=localStorage.getItem('email');
this.password=localStorage.getItem('password');
if (this.registerForm.get('contactDetails').get('emailId').value==this.emailId && this.registerForm.get('password').value==this.password) {
     alert("Login successful");
     this.router.navigate(['/restaurant']);
  }
else{
alert("Email or Password is wrong");
}
 
 
}

}
