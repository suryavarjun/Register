import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  // fullname:string='';
  // phonenumber:number=0;
  // email:any='';
  // password:any='';
  // registerForm: FormGroup;
  // isSubmitted: true;
  

  // constructor(private formBuilder: FormBuilder, private router: Router, 
  //   ) {
  //     this.registerForm = new FormGroup({
  //       fullname: new FormControl('', Validators.required),
  //       phonenumber: new FormControl('', [Validators.required, Validators.maxLength(10)]),
  //       email: new FormControl('', Validators.pattern(".+\@+\..+")),
  //       password: new FormControl('', Validators.required),
  //     })
  //   // this.registerForm= this.formBuilder.group({
  //   //   fullname:['', Validators.compose([Validators.required])],
  //   //   phonenumber:['', Validators.compose([Validators.maxLength(10), Validators.required])],
  //   //   email:[Validators.required],
  //   //   password: [Validators.required]
  //   // });
     

  fullname:any = '';
  phonenumber:number=0;
  email:any='';
  password:any='';
  registerForm: FormGroup;
  

  constructor(private formBuilder: FormBuilder, private router: Router, private route:ActivatedRoute) {
    this.registerForm = this.formBuilder.group({
      fullname: ['', Validators.compose([Validators.required])],
      phonenumber: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
    });
  }

  doSubmit(){
    this.fullname='';
    this.phonenumber=0;
    this.email='';
    this.password='';
    console.log(this.registerForm.value)
  }

  regist(){
    if(this.fullname==''|| this.phonenumber==0||this.email==''||this.password==''){
      alert('fill details');
    } else {
      alert('did it succesfully');
    }
    this.router.navigate(['tabs/tab2']);
  }

}
