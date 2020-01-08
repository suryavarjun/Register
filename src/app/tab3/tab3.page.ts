import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  fullname:string='';
  phonenumber:number=0;
  email:any='';
  password:any='';
  registerForm: FormGroup;
  isSubmitted: true;
  

  constructor(private formBuilder: FormBuilder, private router: Router, 
    
    ) {
    this.registerForm= this.formBuilder.group({
      fullname:['', Validators.compose([Validators.required])],
      phonenumber:['', Validators.compose([Validators.maxLength(10), Validators.required])],
      email:[Validators.required],
      password: [Validators.required]
    });
     
    // this.registerform = new FormGroup({
    //   firstName: new FormControl()
    // });

   }

  doSubmit(){
    this.fullname='';
    this.phonenumber=0;
    this.email='';
    this.password='';
    this.isSubmitted = true;
    // if (!this.registerForm.valid) {
    //   console.log('Please provide all the required values!')
    //   return false;
    // } else {
      console.log(this.registerForm.value)
    }
     

  regist() {
    if(this.fullname == '' ||  this.phonenumber == 0 || this.email ==''|| this.password == '')
    {
      alert('Please enter details');
    } else {
      alert('Succesfully Registred');
      console.log(this.registerForm.value);
    }
    this.router.navigate(['tabs/tab2']);
  }

}
