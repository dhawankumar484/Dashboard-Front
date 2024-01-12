import { Component } from '@angular/core';
import { IconsService } from '../services/icons.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {

  constructor(public iconService:IconsService){}
}
