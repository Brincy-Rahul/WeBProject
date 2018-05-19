import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from './services/employee.service';
import { ProjectService } from './services/project.service';
import { TaskService } from './services/task.service';
import { UserstoryService } from './services/userstory.service';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import { ProjectComponent } from './project/project.component';
import { TaskComponent } from './task/task.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ShowEmployeeComponent } from './employee/show-employee/show-employee.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { DeleteEmployeeComponent } from './employee/delete-employee/delete-employee.component';
import { CreateProjectComponent } from './project/create-project/create-project.component';
import { ShowProjectComponent } from './project/show-project/show-project.component';
import { EditProjectComponent } from './project/edit-project/edit-project.component';
import { DeleteProjectComponent } from './project/delete-project/delete-project.component';
import { CreateTaskComponent } from './task/create-task/create-task.component';
import { DeleteTaskComponent } from './task/delete-task/delete-task.component';
import { EditTaskComponent } from './task/edit-task/edit-task.component';
import { ViewEmployeeComponent } from './employee/view-employee/view-employee.component';
import { ViewProjectComponent } from './project/view-project/view-project.component';
import { ViewTaskComponent } from './task/view-task/view-task.component';
import { UserstoriesComponent } from './userstories/userstories.component';

import { ShowTaskComponent } from './task/show-task/show-task.component';
import { CreateUserStoryComponent } from './userstories/create-userstory/create-userstory.component';
import { DeleteUserStoryComponent } from './userstories/delete-userstory/delete-userstory.component';
import { EditUserStoryComponent } from './userstories/edit-userstory/edit-userstory.component';
import { ShowUserStoryComponent } from './userstories/show-userstory/show-userstory.component';
import { ViewUserStoryComponent } from './userstories/view-userstory/view-userstory.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeComponent,
    ProjectComponent,
    TaskComponent,
    HeaderComponent,
    FooterComponent,
    ShowEmployeeComponent,
    CreateEmployeeComponent,
    EditEmployeeComponent,
    DeleteEmployeeComponent,
    CreateProjectComponent,
    ShowProjectComponent,
    EditProjectComponent,
    DeleteProjectComponent,
    CreateTaskComponent,
    DeleteTaskComponent,
    EditTaskComponent,
    ViewEmployeeComponent,
    ViewProjectComponent,
    ViewTaskComponent,
    UserstoriesComponent,
    CreateUserStoryComponent,
    DeleteUserStoryComponent,
    EditUserStoryComponent,
    ShowUserStoryComponent,
    ViewUserStoryComponent,
    ShowTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    EmployeeService,
    ProjectService,
    TaskService,
    UserstoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
