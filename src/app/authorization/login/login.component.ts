import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLoggin(){
    // Once Login SUCCESS go to Home Component
    console.log("HOME----- >>>");
    this.router.navigate(['/portalHome']);
  }

  onRegister(){
  }

}
