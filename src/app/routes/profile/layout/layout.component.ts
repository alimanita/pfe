import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '@core';

@Component({
  selector: 'app-profile-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class ProfileLayoutComponent implements OnInit {

  user!: User;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.user().subscribe(user => (this.user = user));
  }

}
