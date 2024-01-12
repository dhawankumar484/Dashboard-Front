import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { MyLibraryComponent } from './my-library/my-library.component';
import { RoundStatusComponent } from './round-status/round-status.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MyAssessmentComponent } from './assessment/my-assessment/my-assessment.component';
import { UnstopAssessmentComponent } from './assessment/unstop-assessment/unstop-assessment.component';
import { AssessmentOverviewComponent } from './assessment/my-assessment/assessment-overview/assessment-overview.component';
import { IconsService } from './services/icons.service';
import { TagInputModule } from 'ngx-chips';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AssessmentComponent,
    MyLibraryComponent,
    RoundStatusComponent,
    SidebarComponent,
    MyAssessmentComponent,
    UnstopAssessmentComponent,
    AssessmentOverviewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    TagInputModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [IconsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
