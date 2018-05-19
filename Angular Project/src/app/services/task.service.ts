import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
import { Subject } from 'rxjs';
import { error } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  baseUrl = 'http://localhost:2528'

  private tasks = new Subject<any>();
  tasks$ = this.tasks.asObservable();

  private task = new Subject<any>();
  task$ = this.task.asObservable();

  private response = new Subject<any>();
  response$ = this.response.asObservable();

  private ErrorResponse = new Subject<any>();
  ErrorResponse$ = this.ErrorResponse.asObservable();

  constructor(private crudService: CrudService) { }

  getAllTask() {
    const url = `${this.baseUrl}/api/ProjectTask/`;
    this.crudService.Read(url).subscribe(
      data => {
        this.tasks.next(data);
      },
      error => {
        console.log(error);
        this.ErrorResponse.next(error.statusText);
      }
    );
  }
  getAllTaskById(id) {
    const url = `${this.baseUrl}/api/ProjectTask/${id}`;
    this.crudService.Read(url).subscribe(
      data => {
        this.task.next(data);
      }
    );
  }
  createTask(project) {
    const url = `${this.baseUrl}/api/ProjectTask`;
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
  deleteTask(id) {
    const url = `${this.baseUrl}/api/ProjectTask/${id}`;
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
  updateTask(id,task)
  {
    const url=`${this.baseUrl}/api/ProjectTask/${id}`;
    this.crudService.Update(url, id).subscribe(
      data => {
        this.tasks.next(true);
      },
      error => {
        console.log(error);
        this.ErrorResponse.next(error.statusText);
      }
    );
  }
}
