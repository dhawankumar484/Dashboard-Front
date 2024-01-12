import { Component, OnInit } from '@angular/core';
import { IconsService } from '../services/icons.service';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})

export class AssessmentComponent implements OnInit {

  constructor(public iconService:IconsService){}

  ngOnInit(): void {
  }

}
