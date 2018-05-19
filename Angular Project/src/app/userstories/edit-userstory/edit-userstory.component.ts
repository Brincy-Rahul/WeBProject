import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { UserstoryService } from '../../services/userstory.service';

@Component({
  selector: 'app-edit-user-story',
  templateUrl: './edit-userstory.component.html',
  styleUrls: ['./edit-userstory.component.css']
})
export class EditUserStoryComponent implements OnInit {

  formData: FormGroup;
  constructor(private projectService: ProjectService, private userStoryService: UserstoryService, private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  id = this.route.snapshot.paramMap.get('id');
  projects;
  story={
    story:"",
    projId:null
  };

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

    //load story by id
    this.userStoryService.getAllUserstoryById(this.id);

    this.userStoryService.userstory$.subscribe(
      data => {
        this.story.story = data['story'];
        this.story.projId = data['projId'];
        this.formData = new FormGroup({         
          story: new FormControl(this.story.story, []),
          projId: new FormControl(this.story.projId, []),
        });

      }
    );

    this.userStoryService.ErrorResponse$.subscribe(
      message => {
        console.log(message);
        alert(message);
      }
    );

    this.formData = new FormGroup({
      story: new FormControl('', []),
      projId: new FormControl('', []),
    });
    console.log(this.formData);
  }

  onClickSubmit(story) {

    this.userStoryService.updateUserstory(this.id, story);

    this.userStoryService.response$.subscribe(
      data => {
        console.log("UserStory Updated successfully !!!");
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