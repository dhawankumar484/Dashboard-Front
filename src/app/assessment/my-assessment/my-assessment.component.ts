import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IconsService } from 'src/app/services/icons.service';

@Component({
  selector: 'app-my-assessment',
  templateUrl: './my-assessment.component.html',
  styleUrls: ['./my-assessment.component.scss']
})

export class MyAssessmentComponent implements OnInit{
  @ViewChild('newAssessmentForm') assessmentForm : NgForm

  isCollapsed:boolean = false;
  skills = ['UI/UX and Design', 'Web Development', 'Angular'];
  
  //Existing Assessment cards array
  assessmentsArray = [{assessmentName: 'Math Assessment', assessmentPurpose: 'Purpose 1', assessmentDescription: "Description 1", assessmentSkills: this.skills, assessmentDuration: "00"}, {assessmentName: 'Math Assessment', assessmentPurpose: 'Purpose 2', assessmentDescription: "Description 2", assessmentSkills: this.skills, assessmentDuration: "00"}];

  constructor(private toastr:ToastrService, 
              public iconService:IconsService){}
  
  ngOnInit(): void {}

  //Adding skill to the array
  addSkill(value){
    if(this.skills.includes(value)){
      this.toastr.warning("Skill already included.");
    }
    else{
      this.skills.push(value);
      this.assessmentForm.form.controls['assessmentSkills'].setValue('');
    } 
  }

  //Removing list from the array
  removeSkill(value){
    this.skills.splice(value, 1);
  }
  
  //New Assessment form on submit
  onFormSubmitted(){
    if(this.assessmentForm.form.status.toLocaleLowerCase()=="invalid" || this.skills.length==0){
      if(this.assessmentForm.form.status.toLocaleLowerCase()=="invalid" && this.skills.length==0){
        this.toastr.error("Form is invalid.");  
      }
      else if(this.skills.length==0){
        this.toastr.error("Please add atleast one skill.");
      }
      else{
        this.toastr.error("Form is invalid.");  
      }
    }
    else{
      this.assessmentsArray.push(this.assessmentForm.form.value);
      this.toastr.success("Your assessment has been added!");
      this.assessmentForm.form.controls['assessmentName'].setValue('');
      this.assessmentForm.form.controls['assessmentPurpose'].setValue('');
      this.assessmentForm.form.controls['assessmentDescription'].setValue('');
      this.assessmentForm.form.controls['assessmentSkills'].setValue('');
      this.skills = [];
      this.assessmentForm.form.controls['assessmentDuration'].setValue('');
    }
  }
 
}
