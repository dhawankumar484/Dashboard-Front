import { Component, HostListener, OnInit } from '@angular/core';
import { IconsService } from '../services/icons.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
  user:String="ADMIN";

  getScreenWidth: any;
  getScreenHeight: any;

  constructor(public iconService : IconsService) {}

  ngOnInit(): void {
    // User type 'USER' or 'ADMIN'
    this.user = "ADMIN";
    this.getScreenWidth = window.innerWidth;
  }

  // Screen width and height in px
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }

}
