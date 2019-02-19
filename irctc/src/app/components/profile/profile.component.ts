import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:Object;

  constructor(public authService:AuthService, public router:Router) { }

  ngOnInit() {
    console.log('hey you');
    this.authService.getProfile().subscribe(profile => {
      console.log(profile.user);
      this.user = profile.user;
      console.log(this.user);
    },
     err => {
       console.log(err);
       return false;
     });
  }

}