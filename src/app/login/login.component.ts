import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public state = 'inactive';
  public name: String = 'Manikanta';
  public loginForm: FormGroup;
  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    public configService: ConfigService) { }
  ngOnInit() {
    this.createLoginForm();
  }
  public createLoginForm() {
    this.loginForm = this.formBuilder.group({
      userName: ['mani@gmail.com', Validators.compose([Validators.required, Validators.email])],
      password: ['asdasd', Validators.compose([Validators.required])],
    });
  }

  public validateLogin() {
    const appName = 'OneHouse';
    const userDetails = this.loginForm.value;
    const clientName = userDetails.userName.substring(userDetails.userName.indexOf('@') + 1, userDetails.userName.indexOf('.'));
    if (clientName) {
      this.http.get(`/config/listconfigsbyClient/OneHouse/${clientName}`).subscribe((response: any) => {
        response.configs.forEach(element => {
          this.configService.config[element.key] = element.value;
        });
        this.router.navigate(['/dashboard']);
      });
    }

  }

}
