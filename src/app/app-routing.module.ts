import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { SearchComponent } from './Components/search/search.component';
import { PaginationComponent } from './Components/pagination/pagination.component';

import { FilterComponent } from './Components/filter/filter.component';
import { BreadcrumsComponent } from './Components/breadcrums/breadcrums.component';

import { AddCoordinatorComponent } from './Coordinator/CRUD/add-coordinator/add-coordinator.component';
import { CoOrdinatorAddCourseComponent } from './Pages/co_addcourse/co-ordinator-add-course.component';

import { CommonhomeComponent } from './Pages/commonhome/commonhome.component';
import { LoginpageComponent } from './Pages/loginpage/loginpage.component';
import { HomeComponent } from './Pages/home/home.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { SavebuttonComponent } from './Components/savebutton/savebutton.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProfileviewComponent } from './Pages/profileview/profileview.component';
import { CourselistComponent } from './ListPages/courselist/courselist.component';
import { CanceledreviewComponent } from './ListPages/canceledreview/canceledreview.component';
import { ViewcourseCoordinatorComponent } from './Pages/viewcourse-coordinator/viewcourse-coordinator.component';
import { ViewmomComponent } from './Pages/viewmom/viewmom.component';
import { FeedbacktraineeComponent } from './Pages/feedbacktrainee/feedbacktrainee.component';
import { FeedbacktrainerComponent } from './Pages/feedbacktrainer/feedbacktrainer.component';
import { AssignedreviewComponent } from './ListPages/assignedreview/assignedreview.component';
import { AssignreviewlistComponent } from './Pages/assignreviewlist/assignreviewlist.component';
import { CompletedreviewComponent } from './ListPages/completedreview/completedreview.component';
import { CompletedreviewlistComponent } from './Pages/completedreviewlist/completedreviewlist.component';
import { CancelreviewlistComponent } from './Pages/cancelreviewlist/cancelreviewlist.component';

import { ViewattendanceComponent } from './Pages/viewattendance/viewattendance.component';
import { HeadDepartmentlistComponent } from './ListPages/head-departmentlist/head-departmentlist.component';
import { TopicviewComponent } from './Pages/topicview/topicview.component';
import { AddDepartmentComponent } from './Pages/add-department/add-department.component';


const routes: Routes = [
  { path:'', component:AddDepartmentComponent},
  { path:'courselist', component:CourselistComponent},
  { path:'departmentlist', component:HeadDepartmentlistComponent},
  { path: 'sidebar', component: SidebarComponent },
  { path: 'search', component: SearchComponent },
  { path: 'savebutton', component: SavebuttonComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'filter', component: FilterComponent },
  { path: 'breadcrums', component: BreadcrumsComponent },
  { path: 'addcoo', component: FooterComponent },
  { path: 'add', component: AddCoordinatorComponent },
  { path: 'AddCourse', component: CoOrdinatorAddCourseComponent },
  { path: '', component: CommonhomeComponent },
  { path: 'Login', component: LoginpageComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'Profileview', component: ProfileviewComponent },
   
  { path:'cancelreview', component:CanceledreviewComponent},
  { path:'viewcourse', component:ViewcourseCoordinatorComponent},

  {path:'courselist', component:CourselistComponent},
  {path:'cancelreview', component:CanceledreviewComponent},
  {path:'viewmom', component:ViewmomComponent},
  {path:'feedbacktrainee', component:FeedbacktraineeComponent},
  {path:'feedbacktrainer', component:FeedbacktrainerComponent},
  {path:'assignreviewlist', component:AssignreviewlistComponent},
  {path:'completedreviewlist', component:CompletedreviewlistComponent},
  {path:'cancelreviewlist', component:CancelreviewlistComponent},
  {path:'viewattendance', component:ViewattendanceComponent},
  {path: 'viewtopic', component:TopicviewComponent},
  
  { path:'cancelreview', component:CanceledreviewComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }