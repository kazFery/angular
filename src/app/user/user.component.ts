import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  userName: string = '';
  password: string = '';
  reptPassword: string = '';
  isPasswordMatch : boolean = false;

  onChangePassword(e: Event) {
    this.password = (<HTMLInputElement>e.target).value;
  }

  OnChangeRepeatedPassword(e: Event) {
    this.reptPassword = (<HTMLInputElement>e.target).value;
    this.isPasswordMatch = this.password !== this.reptPassword ? false : true
  }
}
