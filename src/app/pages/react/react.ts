import { CommonModule, JsonPipe } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PasswordValidator } from './password.validator';
import { RegistrationService } from '../../registration.service';

@Component({
  selector: 'app-react',
  imports: [FormsModule, ReactiveFormsModule, JsonPipe, CommonModule],
  templateUrl: './react.html',
  styleUrl: './react.scss',
  standalone: true
})
export class React {
  registrationForm!: FormGroup;
  loading: boolean = false;
  UsersData: any = [
    // {"sno":1,"user_name":"syam","password":"aabbcc","confirm_password":"aabbcc"},
    // {"sno":2,"user_name":"syam dsss","password":"inhh","confirm_password":"inhh"},
    // {"sno":3,"user_name":"dsss fdddd","password":"asas","confirm_password":"asas"},

  ]
  constructor(private fb: FormBuilder, private registration: RegistrationService,
    private cdr: ChangeDetectorRef
  ) {

  }
  ngOnInit() {
    this.getUsersData();
    this.registrationForm = this.fb.group(
      {
        username: ['', Validators.required],
        password: ['', Validators.required],
        confirm_password: ['', Validators.required]
      },
      {
        validators: PasswordValidator
      }
    );
  }

  LoadApiData() {
    this.registrationForm.setValue({
      username: 'Snehitha',
      password: 'testing purpose',
      // confirm_password:'testing purpose'
    })
  }

  patchApiData() {
    this.registrationForm.patchValue({
      username: 'Snehitha',
      password: 'testing purpose',
      // confirm_password:'testing purpose'
    })
  }

  onSubmit() {

    this.loading = true;

    if (this.registrationForm.invalid) {
      this.registrationForm.markAllAsTouched();
      this.loading = false;
      return;
    }

    this.registration.register(this.registrationForm.value).subscribe({
      next: (res: any) => {
        this.loading = false;

        if (res.status === 200) {
          this.registrationForm.reset();
          alert('Details successfully submitted');
        }
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }

  getUsersData() {
    // this.loading = true;

    this.registration.getuserlogindata().subscribe({
      next: (res: any) => {
        this.UsersData = res.data;
        console.log(this.UsersData);

        // this.loading = false;
      },
      error: (err) => {
        console.error(err);
        // this.loading = false;
      }
    });
  }

  getTheRegistrations(){
     this.loading=true;
     this.registration.getApplications().subscribe((res:any)=>{
        if(res.status==200){
           this.UsersData=res.data;
           this.loading=false;
           this.cdr.detectChanges();
        }
        else{
            this.loading=false;
            
        }
     })
  }
}
