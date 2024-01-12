import { Component } from '@angular/core';
import { IconsService } from '../services/icons.service';

@Component({
  selector: 'app-my-library',
  templateUrl: './my-library.component.html',
  styleUrls: ['./my-library.component.scss']
})

export class MyLibraryComponent {

  constructor(public iconService:IconsService){}

}
