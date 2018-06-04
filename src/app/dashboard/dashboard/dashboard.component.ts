import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public config: any = {
    logo: ''
  };
  public itemList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  constructor(private configService: ConfigService,
    private router: Router) { }

  ngOnInit() {
    this.config = this.configService.config;
    if (!this.config.logo) {
      this.logOut();
    }
  }

  public logOut() {
    this.router.navigate(['/login']);
  }
}
