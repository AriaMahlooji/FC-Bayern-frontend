import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  isLoging = true;
  isLoading;
  loginPassword;
  loginPasswordHasDigit ;
  constructor(private authService: AuthService, private loadingCtrl: LoadingController) { }
  ngOnInit() {
    this.loginPasswordHasDigit = false;
    this.isLoging = true;
  }
  onLogin(loginForm: NgForm)
  {
    this.isLoading =true;

    this.loadingCtrl.create({keyboardClose:true, message:'Logging In ...',spinner:'bubbles'}).
    then(loadingCtrlElement=> {
      loadingCtrlElement.present();
      setTimeout(()=>{
       this.authService.login();
       this.isLoading = false;
       loadingCtrlElement.dismiss();
     },2000);
    });
    console.log(loginForm.form.value);

  }
  bindLoginPassword(e: Event)
  {
    this.loginPassword = (e.target as HTMLInputElement).value;
    this.loginPasswordComplexityCheck();
  }

  loginPasswordComplexityCheck()
  {
    this.loginPasswordHasDigit = (new RegExp('.*(?=[^\\d]*\\d).*')).test(this.loginPassword);
    console.log(this.loginPasswordHasDigit);
  }
  onSwitchAuthMode()
  {
    this.isLoging = ! this.isLoging;
  }

}
