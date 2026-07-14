import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { Firstservice } from '../../services/firstservice';

@Component({
  selector: 'app-application',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, JsonPipe],
  templateUrl: './application.html',
  styleUrl: './application.scss'
})
export class Application {

  registrationForm!: FormGroup;

  UsersData:any=[];

  constructor(
    private fb: FormBuilder,
    private service: Firstservice
  ) {}

  ngOnInit(){

    this.getApplications();

    this.registrationForm=this.fb.group({

      name:['',Validators.required],

      rollnumber:['',Validators.required],

      branch:['',Validators.required],

      year:['',Validators.required],

      email:['',[Validators.required,Validators.email]],

      contact:['',Validators.required],

      preference:['',Validators.required],

      reason:['']

    });

  }

  onSubmit(){
    console.log(this.registrationForm.value);

    if(this.registrationForm.invalid){

      this.registrationForm.markAllAsTouched();

      return;

    }

    this.service.submitApplication(this.registrationForm.value).subscribe({

      next:(res:any)=>{

        alert(res.message);

        this.registrationForm.reset();

        this.getApplications();

      },

      error:(err)=>{

        console.log(err);

      }

    });

  }

  getApplications(){

    this.service.getApplications().subscribe({

      next:(res:any)=>{

        this.UsersData=res.data;

      },

      error:(err)=>{

        console.log(err);

      }

    });

  }

}