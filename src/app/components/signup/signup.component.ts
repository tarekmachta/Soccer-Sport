import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MustMatch } from 'src/app/validator/confirmPwd';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstName: ['', [Validators.minLength(5), Validators.required]],
      lastName: ['', Validators.minLength(7)],
      email: ['', [Validators.email, Validators.required]],
      pwd: ['', [Validators.minLength(8), Validators.required]],
      confirmPwd: ['']

    } ,
    {
    validator: MustMatch('pwd', 'confirmPwd')
    })
  }

  signUP(user: any) {
    console.log('This is my user', user);
    this.userService.addUser(user).subscribe(   
      () => {
        console.log('User added successfully');
        this.router.navigate(['admin']);
      }
    )
  }

}
