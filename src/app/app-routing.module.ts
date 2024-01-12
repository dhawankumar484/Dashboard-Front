import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { MyLibraryComponent } from './my-library/my-library.component';
import { RoundStatusComponent } from './round-status/round-status.component';
import { MyAssessmentComponent } from './assessment/my-assessment/my-assessment.component';
import { UnstopAssessmentComponent } from './assessment/unstop-assessment/unstop-assessment.component';

const routes: Routes = [
  {path:'', redirectTo:'assessment', pathMatch:'full'},
  // {path:'assessment', children: [
  //   {path: 'assessment/my-assessment', component: MyAssessmentComponent},
  //   {path: 'assessment/unstop-assessment', component: UnstopAssessmentComponent}
  // ]},
  {path:'assessment', component:AssessmentComponent, children: [
    {path:'', redirectTo:'my-assessment', pathMatch:'full'},
    {path: 'my-assessment', component: MyAssessmentComponent},
    {path: 'unstop-assessment', component: UnstopAssessmentComponent}
  ]},
  {path:'dashboard', component:DashboardComponent},
  {path:'my-library', component:MyLibraryComponent},
  {path:'round-status', component:RoundStatusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
