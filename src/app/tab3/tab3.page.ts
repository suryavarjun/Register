import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  firstname:string='';
  pnumber:number=0;
  email:any='';
  password:any='';
  registerform: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.registerform= this.formBuilder.group({
      firstname: ['', Validators.compose([Validators.required])],
      pnumber:['', Validators.compose([Validators.maxLength(10), Validators.required])],
      email:[Validators.required],
      password: [Validators.required]
    });

    // this.registerform = new FormGroup({
    //   firstName: new FormControl()
    // });

  }

  doSubmit(){
    this.firstname='';
    this.pnumber=0;
    this.email='';
    this.password='';
  }

  regist(){
    if(this.firstname ==''|| this.pnumber == 0 ||this.email ==''|| this.password ==''){
      alert('Enter All Details');
    } else {
      alert('Succesfully Registred');
    }
    this.router.navigate(['tabs/tab2']);
  }

}
