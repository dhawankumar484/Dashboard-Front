import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'unstop-project';

  user:String="ADMIN";

  constructor() {}

  ngOnInit(): void {
    // User type 'USER' or 'ADMIN'
    this.user = "ADMIN";
  }


}
