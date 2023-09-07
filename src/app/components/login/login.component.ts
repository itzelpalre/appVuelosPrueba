import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formLogin: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {

    if(this.formLogin.valid){
      this.userService.login(this.formLogin.value)
      .then(response => {
        this.router.navigate(['/vuelos']);
      })
      .catch(error => console.log(error));
    }else {
      console.log("form no valido");
    }

    
  }

  onClick(){
    this.userService.loginWithGoogle()
    .then(response => {
      console.log(response);
      this.router.navigate(['/dashboard'])
    })
    .catch(error => console.log(error))
  }

}
