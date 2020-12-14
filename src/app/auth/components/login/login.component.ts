import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { SendRequestLogin } from '../../models/sendRequestLogin.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;

  constructor(private formBuild: FormBuilder, private loginService: LoginService) {
    this.formLogin = this.formBuild.group({
      username: ['', [Validators.required, Validators.maxLength(45), Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.maxLength(45), Validators.minLength(4)]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.formLogin.value);
    console.log(this.formLogin);

    if (this.formLogin.valid) {
      const request: SendRequestLogin = this.formLogin.value as SendRequestLogin;
      this.loginService.login(request).subscribe(console.log, console.error);
    } else {
      console.warn('Form login invalid.')
    }
  }

  get errorsUsername() {
    return this.formLogin.get('username').errors;
  }

  get errorsPassword() {
    return this.formLogin.get('password').errors;
  }

}
