import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { UserstoryService } from '../../services/userstory.service';

@Component({
  selector: 'app-create-user-story',
  templateUrl: './create-userstory.component.html',
  styleUrls: ['./create-userstory.component.css']
})
export class CreateUserStoryComponent implements OnInit {

  formData: FormGroup;
  constructor(private projectService: ProjectService, private userStoryService: UserstoryService, private http: HttpClient, private router: Router) { }

  projects;

  ngOnInit() {


    // load projects
    
    this.projectService.getAllprojects();
    
    this.projectService.projects$.subscribe(
      data => {
        this.projects = data;
        console.log(this.projects);
      }
    );

    this.projectService.ErrorResponse$.subscribe(
      message => {
        console.log(message);
        alert(message);
      }
    );    

    this.formData = new FormGroup({
      story: new FormControl('', [Validators.required]),
      projId: new FormControl('', [Validators.required]),
    });
    console.log(this.formData);
 
  }

  onClickSubmit(story) {

    this.userStoryService.createUserstory(story);

    this.userStoryService.response$.subscribe(
      data => {
        console.log("UserStory Created successfully !!!");
        this.router.navigate(['/Userstory/showuserstory'])
      }
    );

    this.userStoryService.ErrorResponse$.subscribe(
      message => {
        console.log(message);
        alert(message);
      }
    );

  }
}
