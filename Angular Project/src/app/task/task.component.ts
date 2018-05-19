import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(private http:HttpClient) { }
  
  ngOnInit() {

    //debugger;
    this.loadTasks();
  }
  tasks;
  loadTasks()
  {
    this.http.get('http://localhost:2528/api/ProjectTask').subscribe(
      data=>{
        console.log(data);
        this.tasks=data;
      }
    )
  }
}
