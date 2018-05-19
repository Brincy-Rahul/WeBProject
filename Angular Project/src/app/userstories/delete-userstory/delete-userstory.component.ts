import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import{Router, ActivatedRoute, ParamMap} from '@angular/router';
import { UserstoryService } from '../../services/userstory.service';

@Component({
  selector: 'app-delete-userstory',
  templateUrl: './delete-userstory.component.html',
  styleUrls: ['./delete-userstory.component.css']
})
export class DeleteUserStoryComponent implements OnInit {

  formData: FormGroup;
  constructor(private UserstoryService: UserstoryService, private route:ActivatedRoute, private router:Router, private http: HttpClient) { }
  
  id = this.route.snapshot.paramMap.get('id');
  story ={
    story:"",
    projId:null,
  };

  ngOnInit() {
    
    this.UserstoryService.getAllUserstoryById(this.id);

    this.UserstoryService.userstory$.subscribe(
      data => {
        this.story.story = data['story'];
        this.story.projId = data['projId'];
        this.formData = new FormGroup({         
          story: new FormControl(this.story.story, []),
          projId: new FormControl(this.story.projId, []),
        });

      }
    );

    this.UserstoryService.ErrorResponse$.subscribe(
      message => {
        console.log(message);
        alert(message);
      }
    );

    this.formData = new FormGroup({      
      story: new FormControl('', []),
      projId: new FormControl('', []),
    });

  }

  onClickSubmit(){

    this.UserstoryService.deleteUserstory(this.id);

    this.UserstoryService.response$.subscribe(
      data => {
        console.log("User story Deleted successfully !!!");
        this.router.navigate(['/Userstory/showuserstory'])
      }
    );

    this.UserstoryService.ErrorResponse$.subscribe(
      message => {
        console.log(message);
        alert(message);
      }
    );

  }

}