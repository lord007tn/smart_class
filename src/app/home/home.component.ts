import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import firebase from "firebase/app";
import "firebase/firestore";
import 'firebase/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isAuth!:boolean;

  constructor(private router:Router, private AuthService:AuthService) { }

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged(
      (user) => {
        if(user) {
          this.isAuth=true;
        }
        else {
          this.isAuth=false;
        }
      }
    )
  }
  
  onAccess() {
      this.router.navigate(['auth','signin']);
    
  }

}
