import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { BreadcrumsComponent } from './Components/breadcrums/breadcrums.component';
import { FilterComponent } from './Components/filter/filter.component';
import { SearchComponent } from './Components/search/search.component';

import { PaginationComponent } from './Components/pagination/pagination.component';

import { AddCoordinatorComponent } from './Coordinator/CRUD/add-coordinator/add-coordinator.component';
import { EditCoordinatorComponent } from './Coordinator/CRUD/edit-coordinator/edit-coordinator.component';
import { CoordinatorService } from './Coordinator/Data/coordinator.service';
import { CommonhomeComponent } from './Pages/commonhome/commonhome.component';
import { LoginpageComponent } from './Pages/loginpage/loginpage.component';
import { HomeComponent } from './Pages/home/home.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AddbuttonComponent } from './Components/addbutton/addbutton.component';
import { SavebuttonComponent } from './Components/savebutton/savebutton.component';
import { ProfileviewComponent } from './Pages/profileview/profileview.component';
import { CoursefeedbackComponent } from './Pages/coursefeedback/coursefeedback.component';
import { CoursefeedbackviewComponent } from './Pages/coursefeedbackview/coursefeedbackview.component';
import { TraineefeedbackComponent } from './Pages/traineefeedback/traineefeedback.component';
import { TraineefeedbackviewComponent } from './Pages/traineefeedbackview/traineefeedbackview.component';
import { UploadmomComponent } from './Pages/uploadmom/uploadmom.component';
import { ViewmomComponent } from './Pages/viewmom/viewmom.component';
import { AssignedreviewComponent } from './ListPages/assignedreview/assignedreview.component';
import { CompletedreviewComponent } from './ListPages/completedreview/completedreview.component';
import { CanceledreviewComponent } from './ListPages/canceledreview/canceledreview.component';
import { HeadDepartmentlistComponent } from './ListPages/head-departmentlist/head-departmentlist.component';
import { CoDepartmentlistComponent } from './ListPages/co-departmentlist/co-departmentlist.component';
import { CourselistComponent } from './ListPages/courselist/courselist.component';
import { ViewheadprofileComponent } from './Pages/viewheadprofile/viewheadprofile.component';
import { ViewcoprofileComponent } from './Pages/viewcoprofile/viewcoprofile.component';
import { ViewtrainerprofileComponent } from './Pages/viewtrainerprofile/viewtrainerprofile.component';
import { ViewtraineeprofileComponent } from './Pages/viewtraineeprofile/viewtraineeprofile.component';
import { ViewreviewerprofileComponent } from './Pages/viewreviewerprofile/viewreviewerprofile.component';
import { CoordinatorlistComponent } from './ListPages/coordinatorlist/coordinatorlist.component';
import { TrainerlistComponent } from './ListPages/trainerlist/trainerlist.component';
import { TraineelistComponent } from './ListPages/traineelist/traineelist.component';
import { ReviewerlistComponent } from './ListPages/reviewerlist/reviewerlist.component';
import { ReviewlistComponent } from './ListPages/reviewlist/reviewlist.component';

import { ViewcourseCoordinatorComponent } from './Pages/viewcourse-coordinator/viewcourse-coordinator.component';

import { FeedbacktraineeComponent } from './Pages/feedbacktrainee/feedbacktrainee.component';
import { FeedbacktrainerComponent } from './Pages/feedbacktrainer/feedbacktrainer.component';
import { AssignreviewlistComponent } from './Pages/assignreviewlist/assignreviewlist.component';
import { CompletedreviewlistComponent } from './Pages/completedreviewlist/completedreviewlist.component';
import { CancelreviewlistComponent } from './Pages/cancelreviewlist/cancelreviewlist.component';
import { ViewattendanceComponent } from './Pages/viewattendance/viewattendance.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { TopicviewComponent } from './Pages/topicview/topicview.component';
import { AddDepartmentComponent } from './Pages/add-department/add-department.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    BreadcrumsComponent,
    FilterComponent,
    SearchComponent,
    FooterComponent,
    PaginationComponent,
    AddbuttonComponent,
    SavebuttonComponent,
    AddCoordinatorComponent,
    EditCoordinatorComponent,
    CommonhomeComponent,
    LoginpageComponent,
    HomeComponent,
    DashboardComponent,
    ProfileviewComponent,
    CoursefeedbackComponent,
    CoursefeedbackviewComponent,
    TraineefeedbackComponent,
    TraineefeedbackviewComponent,
    UploadmomComponent,
    ViewmomComponent,
    AssignedreviewComponent,
    CompletedreviewComponent,
    CanceledreviewComponent,
    HeadDepartmentlistComponent,
    CoDepartmentlistComponent,
    CourselistComponent,
      ViewheadprofileComponent,
      ViewcoprofileComponent,
      ViewtrainerprofileComponent,
      ViewtraineeprofileComponent,
      ViewreviewerprofileComponent,
      CoordinatorlistComponent,
      TrainerlistComponent,
      TraineelistComponent,
      ReviewerlistComponent,
      ReviewlistComponent,
    CourselistComponent,
      ViewcourseCoordinatorComponent,
      FeedbacktraineeComponent,
      FeedbacktrainerComponent,
      AssignreviewlistComponent,
      CompletedreviewlistComponent,
      CancelreviewlistComponent,
      ViewattendanceComponent,
      CancelreviewlistComponent,
      TopicviewComponent,
      AddDepartmentComponent,
      
  ],

  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [CoordinatorService],
  bootstrap: [AppComponent],
})
export class AppModule { }
