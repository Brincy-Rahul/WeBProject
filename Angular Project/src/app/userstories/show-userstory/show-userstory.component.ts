import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { UserstoryService } from '../../services/userstory.service';

@Component({
  selector: 'app-show-user-story',
  templateUrl: './show-userstory.component.html',
  styleUrls: ['./show-userstory.component.css']
})
export class ShowUserStoryComponent implements OnInit {
  
  constructor(private userStoryService : UserstoryService, private http:HttpClient) { }

  stories;

  ngOnInit() {

    this.userStoryService.getAllUserstory();

    this.userStoryService.userstories$.subscribe(
      data => {
        this.stories = data;
        console.log(this.stories);
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
