import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
import { Subject } from 'rxjs';
import { error } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  baseUrl = 'http://localhost:2528'

  private projects = new Subject<any>();
  projects$ = this.projects.asObservable();

  private project = new Subject<any>();
  project$ = this.project.asObservable();

  private response = new Subject<any>();
  response$ = this.response.asObservable();

  private ErrorResponse = new Subject<any>();
  ErrorResponse$ = this.ErrorResponse.asObservable();

  constructor(private crudService: CrudService) { }

  getAllprojects() {
    const url = `${this.baseUrl}/api/Project/`;
    this.crudService.Read(url).subscribe(
      data => {
        this.projects.next(data);
      },
      error => {
        console.log(error);
        this.ErrorResponse.next(error.statusText);
      }
    );
  }
  getAllProjectsById(id) {
    const url = `${this.baseUrl}/api/Project/${id}`;
    this.crudService.Read(url).subscribe(
      data => {
        this.project.next(data);
      }
    );
  }
  createProject(project) {
    const url = `${this.baseUrl}/api/Project`;
    this.crudService.Create(url, project).subscribe(
      data => {
        this.response.next(true);
      },
      error => {
        console.log(error);
        this.ErrorResponse.next(error.statusText);
      }
    );
  }
  deleteProject(id) {
    const url = `${this.baseUrl}/api/Project/${id}`;
    this.crudService.Delete(url).subscribe(
      data => {
        this.response.next(true);
      },
      error => {
        console.log(error);
        this.ErrorResponse.next(error.statusText);
      }
    );
  }
  updateProject(id,project)
  {
    const url=`${this.baseUrl}/api/Project/${id}`;
    this.crudService.Update(url, id).subscribe(
      data => {
        this.projects.next(true);
      },
      error => {
        console.log(error);
        this.ErrorResponse.next(error.statusText);
      }
    );
  }
}
