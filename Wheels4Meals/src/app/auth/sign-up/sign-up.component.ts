import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { FormsModule, Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ContactDetail } from 'src/app/models/contactDetail';
import { Address } from 'src/app/models/address';
import { AddressBook } from 'src/app/models/addressBook';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user: User = new User();
  
  registerForm: FormGroup;
  
  hide=true;

  constructor(private formBuilder: FormBuilder) { }

  
  onSubmit(){
    alert("Submitted successfully");
  }

  ngOnInit() {

    this.user.contactDetails = new ContactDetail();
   this.user.contactDetails.addressBook = new AddressBook();
   this.user.contactDetails.addressBook.addressList= [new Address()];
    //this.user.contactDetails.addressBook.addressList = new Address();
    this.registerForm = this.formBuilder.group({
      'name': [this.user.name, [
        Validators.required
      ]],
      'password': [this.user.password, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15)
      ]],
      'contactDetails': this.formBuilder.group({
            'mobNumber': [this.user.contactDetails.mobNumber, [
              Validators.pattern(/^[6-9]\d{9}$/),
              Validators.required
      ]],
      'emailId': [this.user.contactDetails.emailId, [
              Validators.email,
              Validators.required,
              Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
      ]],
      'addressBook': this.formBuilder.group({
          'addressLine1': [this.user.contactDetails.addressBook.addressList[0].addressLine1, [
                      Validators.required
                ]],
          'street': [this.user.contactDetails.addressBook.addressList[0].street, [
                        Validators.required
                 ]],
          'city': [this.user.contactDetails.addressBook.addressList[0].city, [
              Validators.required
            ]],
          'pincode': [this.user.contactDetails.addressBook.addressList[0].pincode, [
                        Validators.required
                      ]],
          'state': [this.user.contactDetails.addressBook.addressList[0].state, [
            Validators.required
          ]]
      })
    }) 
  })
}
getNameErrorMessage(){
  return this.registerForm.get('name').hasError('required') ? 'You must enter a value': '';
}
getPasswordErrorMessage(){
  return this.registerForm.get('password').hasError('required') ? 'You must enter a value':
        this.registerForm.get('password').hasError('minlength') ? 'Password must have minimum 5 characters':
        this.registerForm.get('password').hasError('maxlength') ? 'Password must have maximum 15 characters':
        '';
}
getNumberErrorMessage(){
  return this.registerForm.get('contactDetails').get('mobNumber').hasError('required') ? 'You must enter a value':
        this.registerForm.get('contactDetails').get('mobNumber').hasError('pattern') ? 'Please enter a valid mobile number':'';
        
}
getEmailErrorMessage(){
  return this.registerForm.get('contactDetails').get('emailId').hasError('required') ? 'You must enter a value':
        this.registerForm.get('contactDetails').get('emailId').hasError('email') ? 'Not a valid email':
        this.registerForm.get('contactDetails').get('emailId').hasError('pattern') ? 'Email pattern is incorrect':
        '';
}
getLine1ErrorMessage(){
  return this.registerForm.get('contactDetails').get('addressBook').get('addressLine1') ? 'You must enter address': '';
}
getCityErrorMessage(){
  return this.registerForm.get('contactDetails').get('addressBook').get('city') ? 'You must enter city': '';
}
getPincodeErrorMessage(){
  return this.registerForm.get('contactDetails').get('addressBook').get('pincode') ? 'You must enter pincode': '';
}
getStateErrorMessage(){
  return this.registerForm.get('contactDetails').get('addressBook').get('state') ? 'You must enter state': '';
}
getStreetErrorMessage(){
  return this.registerForm.get('contactDetails').get('addressBook').get('street') ? 'You must enter street': '';
}
}



    