import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SocialAuthService, SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private authService: SocialAuthService) {

   }

  accountForm: any;
  user!: SocialUser;
  loggedIn!: boolean;

  ngOnInit(): void {

    this.accountForm = new FormGroup({
      "email":new FormControl(null,  [Validators.required, Validators.email]),
      "password":new FormControl(null,[Validators.required, Validators.pattern('[a-zA-Z]*')]),
    });

    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

  submitData(){
    console.log(this.accountForm.value);
  }

  get email(){return this.accountForm.get('email');}
  get password(){return this.accountForm.get('password');}

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

  refreshToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }

}
