import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes}from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProjectComponent } from './project/project.component';
import { TaskComponent } from './task/task.component';
import { ShowEmployeeComponent } from './employee/show-employee/show-employee.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { DeleteEmployeeComponent } from './employee/delete-employee/delete-employee.component';
import { ViewEmployeeComponent } from './employee/view-employee/view-employee.component';
import { CreateProjectComponent } from './project/create-project/create-project.component';
import { ShowProjectComponent } from './project/show-project/show-project.component';
import { EditProjectComponent } from './project/edit-project/edit-project.component';
import { DeleteProjectComponent } from './project/delete-project/delete-project.component';
import { UserstoriesComponent } from './userstories/userstories.component';
import { CreateTaskComponent } from './task/create-task/create-task.component';
import { DeleteTaskComponent } from './task/delete-task/delete-task.component';
import { EditTaskComponent } from './task/edit-task/edit-task.component';
import { ViewTaskComponent } from './task/view-task/view-task.component';
import { ShowTaskComponent } from './task/show-task/show-task.component';
import { CreateUserStoryComponent } from './userstories/create-userstory/create-userstory.component';
import { DeleteUserStoryComponent } from './userstories/delete-userstory/delete-userstory.component';
import { EditUserStoryComponent } from './userstories/edit-userstory/edit-userstory.component';
import { ShowUserStoryComponent } from './userstories/show-userstory/show-userstory.component';
import { ViewUserStoryComponent } from './userstories/view-userstory/view-userstory.component';
import { ViewProjectComponent } from './project/view-project/view-project.component';




//import { create } from 'domain';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: []
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path:'Employee',
    component: EmployeeComponent,
    children: [
      {
        path:'showemployee',
        component: ShowEmployeeComponent,
        children:[]
      },
      {
        path:'createemployee',
        component: CreateEmployeeComponent,
        children:[]
      },
      {
        path:'editemployee/:id',
        component:EditEmployeeComponent,
        children:[]
      },
      {
        path:'deleteemployee/:id',
        component:DeleteEmployeeComponent,
        children:[]
      },
      {
      path:'viewemployee/:id',
      component:ViewEmployeeComponent,
      children:[]
      }
    ]
  },
  {
    path:'Project',
    component: ProjectComponent,
    children: [
      {
        path:'showproject',
        component: ShowProjectComponent,
        children:[]
      },
      {
        path:'createproject',
        component:CreateProjectComponent,
        children:[]
      },
      {
        path:'editproject/:id',
        component:EditProjectComponent,
        children:[]
      },
      {
        path:'deleteproject/:id',
        component:DeleteProjectComponent,
        children:[]
      },
      {
        path:'viewproject/:id',
        component:ViewProjectComponent,
        children:[]
      }
    ]
  },
  {
    path:'Task',
    component: TaskComponent,
    children: [
      {
        path:'createtask',
    component: CreateTaskComponent,
    children: []
      },
      {
        path:'deletetask/:id',
        component: DeleteTaskComponent,
        children: []
      },
      {
        path:'edittask/:id',
        component: EditTaskComponent,
        children: []
      },
      {
        path:'showtask',
        component: ShowTaskComponent,
        children: []
      },
      {
        path:'viewtask/:id',
        component: ViewTaskComponent,
        children: []
      }
    ]
  },
  {
    path:'Userstory',
    component: UserstoriesComponent,
    children:[
      {
        path:'createuserstory',
        component: CreateUserStoryComponent,
        children:[]
      },
      {
        path:'deleteuserstory/:id',
        component: DeleteUserStoryComponent,
        children:[]
      },
      {
        path:'edituserstory/:id',
        component:EditUserStoryComponent,
        children:[]
      },
      {
        path:'showuserstory',
        component:ShowUserStoryComponent,
        children:[]
      },
      {
        path:'viewuserstory/:id',
        component:ViewUserStoryComponent,
        children:[]
      }
    ]
  }
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
