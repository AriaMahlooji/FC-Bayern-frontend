import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userIsAuthenticated =true;
  constructor(private router: Router) { }

  login()
  {
    this.userIsAuthenticated = true;
    this.router.navigateByUrl('places');
  }
  logout()
  {
    this.userIsAuthenticated = false;
  }


}
