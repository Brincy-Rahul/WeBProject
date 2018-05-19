import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import{Router, ActivatedRoute, ParamMap} from '@angular/router';
import { UserstoryService } from '../../services/userstory.service';

@Component({
  selector: 'app-view-user-story',
  templateUrl: './view-userstory.component.html',
  styleUrls: ['./view-userstory.component.css']
})
export class ViewUserStoryComponent implements OnInit {

  formData: FormGroup;
  constructor(private userStoryService : UserstoryService, private route:ActivatedRoute, private router:Router, private http: HttpClient) { }
  
  id = this.route.snapshot.paramMap.get('id');
  story ={
    userStoryId:null,
    story:"",
    projId:null,
  };

  ngOnInit() {
    
    this.userStoryService.getAllUserstoryById(this.id);

    this.userStoryService.userstory$.subscribe(
      data => {
        this.story.userStoryId = data['userStoryId'];
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

  }

}