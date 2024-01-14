import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { IconsService } from 'src/app/services/icons.service';

@Component({
  selector: 'app-assessment-overview',
  templateUrl: './assessment-overview.component.html',
  styleUrls: ['./assessment-overview.component.scss']
})

export class AssessmentOverviewComponent implements OnInit{

  totalAssessment:String = "34";
  totalCandidates:String = "11145";
  whoAttempted:String = "114";
  email:String = "11000";
  socialShare:String = "145";
  uniqueLink:String = "145";
  totalPurpose:String = "11";


  constructor(public iconService:IconsService){}

  ngOnInit(): void {
      this.totalAssessment = String(this.numberFormatter(Number(this.totalAssessment)));
      this.totalCandidates = String(this.numberFormatter(Number(this.totalCandidates)));
      this.whoAttempted = String(this.numberFormatter(Number(this.whoAttempted)));
      this.email = String(this.numberFormatter(Number(this.email)));
      this.socialShare = String(this.numberFormatter(Number(this.socialShare)));
      this.uniqueLink = String(this.numberFormatter(Number(this.uniqueLink)));
      this.totalPurpose = String(this.numberFormatter(Number(this.totalPurpose)));

  }

  numberFormatter(value:number) {
    if(value>999999){
      return ((value)/1000000).toFixed(1) + 'M';
    }
    else if(value>19999){
      return ((value)/1000).toFixed(1) + 'K';
    }
    else
      return value;
    }  
  }