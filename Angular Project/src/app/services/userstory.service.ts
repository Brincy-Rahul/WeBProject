import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
import { Subject } from 'rxjs';
import { error } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class UserstoryService {

  baseUrl = 'http://localhost:2528'

  private userstories = new Subject<any>();
  userstories$ = this.userstories.asObservable();

  private userstory = new Subject<any>();
  userstory$ = this.userstory.asObservable();

  private response = new Subject<any>();
  response$ = this.response.asObservable();

  private ErrorResponse = new Subject<any>();
  ErrorResponse$ = this.ErrorResponse.asObservable();

  constructor(private crudService: CrudService) { }

  getAllUserstory() {
    const url = `${this.baseUrl}/api/Userstory/`;
    this.crudService.Read(url).subscribe(
      data => {
        this.userstories.next(data);
      },
      error => {
        console.log(error);
        this.ErrorResponse.next(error.statusText);
      }
    );
  }
  getAllUserstoryById(id) {
    const url = `${this.baseUrl}/api/Userstory/${id}`;
    this.crudService.Read(url).subscribe(
      data => {
        this.userstory.next(data);
      }
    );
  }
  createUserstory(Userstory) {
    const url = `${this.baseUrl}/api/Userstory`;
    this.crudService.Create(url, Userstory).subscribe(
      data => {
        this.response.next(true);
      },
      error => {
        console.log(error);
        this.ErrorResponse.next(error.statusText);
      }
    );
  }
  deleteUserstory(id) {
    const url = `${this.baseUrl}/api/Userstory/${id}`;
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
  updateUserstory(id,Userstory)
  {
    const url=`${this.baseUrl}/api/Userstory/${id}`;
    this.crudService.Update(url, id).subscribe(
      data => {
        this.userstories.next(true);
      },
      error => {
        console.log(error);
        this.ErrorResponse.next(error.statusText);
      }
    );
  }
}
