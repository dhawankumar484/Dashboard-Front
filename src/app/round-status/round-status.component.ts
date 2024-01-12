import { Component } from '@angular/core';
import { IconsService } from '../services/icons.service';

@Component({
  selector: 'app-round-status',
  templateUrl: './round-status.component.html',
  styleUrls: ['./round-status.component.scss']
})

export class RoundStatusComponent {

  constructor(public iconService:IconsService){}
  
}
