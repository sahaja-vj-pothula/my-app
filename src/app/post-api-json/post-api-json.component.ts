import { Component, OnInit } from '@angular/core';
import { JsonapiService } from '../jsonapi.service';

@Component({
  selector: 'app-post-api-json',
  templateUrl: './post-api-json.component.html',
  styleUrls: ['./post-api-json.component.css']
})
export class PostApiJsonComponent implements OnInit {
  public peoples:any=[];

  constructor(private _jsonapiService:JsonapiService) {
    this._jsonapiService.getPeople().subscribe(
      (data:any)=>{
        this.peoples=data;

      },
      (err:any)=>{
        alert("Internal server error");
        
      }
    )
   }


  ngOnInit(): void {
  }

}
