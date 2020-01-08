import { Component } from '@angular/core';
import {Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  username:any = '';
  password:any= '';
  loginForm: FormGroup;
  

  constructor(private formBuilder: FormBuilder, private router: Router, private route:ActivatedRoute) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: [Validators.required]
    });
  }

  onSubmit(){
    this.username='';
    this.password='';
  }

  login() {
    if(this.username == '' || this.password == '')
    {
      alert('Please enter details'); 
    } else {
      alert('Logged Succesfully');
      console.log("Name = " + this.username);
      console.log("Password = " + this.password); 
    }
    this.router.navigateByUrl('tabs/tab2/camera');
  }

  register(){
    this.router.navigate(['tabs/tab3']);
  }
}
