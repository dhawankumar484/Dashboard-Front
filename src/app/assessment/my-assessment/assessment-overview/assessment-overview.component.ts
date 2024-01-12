import { Component } from '@angular/core';
import { IconsService } from 'src/app/services/icons.service';

@Component({
  selector: 'app-assessment-overview',
  templateUrl: './assessment-overview.component.html',
  styleUrls: ['./assessment-overview.component.scss']
})

export class AssessmentOverviewComponent {

  totalAssessment:number = 34;
  totalCandidates:number = 11000;
  whoAttempted:number = 114;
  email:number = 11000;
  socialShare:number = 145;
  uniqueLink:number = 145;
  totalPurpose = 11;

  constructor(public iconService:IconsService){}

}
