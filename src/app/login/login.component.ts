import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthentificationService} from '../service/authentification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService: AuthentificationService,
              private router: Router) { }

  ngOnInit(): void {
  }

  login(credentials) {
    this.authenticationService.login(credentials).subscribe(
      (response) => {
        const token = response.id;
        localStorage.setItem('token', token);
        this.router.navigate(['']);
      }
    );
  }

}
